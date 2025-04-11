"use server";

import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findFirst({
      include: {
        ProductImage: {
          select: {
            url: true
          }
        },
        category: {
          select: {
            name: true
          }
        }
      },
      where: {
        slug: slug
      }
    })

    if(!product) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { categoryId ,ProductImage, ...rest } = product;

    return {
      ...rest,
      images: product.ProductImage.map(image => image.url)
    }

  } catch (error) {
    throw new Error('Error al obtener el producto');
  }
}