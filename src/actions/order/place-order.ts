"use server";

import { auth } from "@/auth.config";
import { IAddress } from "@/interfaces";
import prisma from "@/lib/prisma";

interface ProductToOrder {
  productId: string;
  quantity: number;
}

export const placeOrder = async (
  productIds: ProductToOrder[],
  address: IAddress
) => {
  const session = await auth();
  const userId = session?.user.id;
  if (!userId) {
    return {
      ok: false,
      message: "User not found",
    };
  }

  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds.map((p) => p.productId),
      },
    },
  });

  const itemsInOrder = productIds.reduce((count, p) => count + p.quantity, 0);

  const { subtotal, tax, total } = productIds.reduce(
    (totals, item) => {
      const productQuantity = item.quantity;
      const product = products.find((p) => p.id === item.productId);

      if (!product)
        throw new Error(`Product with id ${item.productId} not found`);

      const subtotal = product.price * productQuantity;

      totals.subtotal += subtotal;
      totals.tax += subtotal * 0.18;
      totals.total += subtotal + subtotal * 0.18;

      return totals;
    },
    { subtotal: 0, tax: 0, total: 0 }
  );

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      //1. Actualizar el stock de los productos

      const updatedProductsPromises = products.map(async (product) => {
        const productQuantity = productIds
          .filter((p) => p.productId === product.id)
          .reduce((acc, item) => item.quantity + acc, 0);

        if (productQuantity === 0) {
          throw new Error(`Product with id ${product.id} has a quantity of 0`);
        }

        return tx.product.update({
          where: { id: product.id },
          data: {
            // stock: product.stock - productQuantity
            stock: {
              decrement: productQuantity,
            },
          },
        });
      });

      const updatedProducts = await Promise.all(updatedProductsPromises);

      //Verificar valores negativos = no hay stock

      updatedProducts.forEach((product) => {
        if (product.stock < 0) {
          throw new Error(`${product.name} no tiene inventario suficiente`);
        }
      });

      //2. Crear la orden - encabezado

      const order = await tx.order.create({
        data: {
          userId,
          itemsInOrder: itemsInOrder,
          subTotal: subtotal,
          tax,
          total,

          OrderItem: {
            createMany: {
              data: productIds.map((p) => ({
                quantity: p.quantity,
                productId: p.productId,
                price:
                  products.find((product) => product.id === p.productId)
                    ?.price ?? 0,
              })),
            },
          },
        },
      });

      const { country, ...rest } = address;

      //3. Crear la direccion de la orden
      const orderAddress = await tx.orderAddress.create({
        data: {
          ...rest,
          orderId: order.id,
        },
      });

      return {
        order,
        updatedProducts,
        orderAddress: orderAddress,
      };
    });

    return {
      ok: true,
      order: prismaTx.order,
      prismaTx
    }

  } catch (error: any) {
    return {
      ok: false,
      message: error.message,
    };
  }
};
