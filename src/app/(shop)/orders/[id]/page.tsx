import { getOrderById } from "@/actions/order/get-order-by-id";
import { OrderStatus, PaypalButton, Title } from "@/components";
import { currencyFormat } from "@/utils";
import Image from "next/image";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function OrdersByIdPage({ params }: Props) {
  const { id } = await params;

  const { ok, order } = await getOrderById(id);

  if (!ok) {
    return <p>Orden no encontrada</p>;
  }

  const addres = order?.OrderAddress;

  //TODO: verificar

  return (
    <div className="flex justify-center items-center px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* carrito */}
          <div className="flex flex-col mt-5">
            <OrderStatus isPaid={order?.isPaid ?? false} />
            {/* Items */}
            {order?.OrderItem.map((item) => (
              <div key={item.product.slug} className="flex mb-5">
                <Image
                  src={`/products/${item.product.ProductImage[0].url}`}
                  width={100}
                  height={100}
                  alt={item.product.name}
                  className="mr-5 rounded"
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <p>{item.product.name}</p>
                  <p>{currencyFormat(item.price)} x 3</p>
                  <p className="font-bold">
                    Subtotal: {currencyFormat(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Direccion de entrega</h2>
            <div className="mb-5">
              <p className="text-xl">
                {addres?.firstName} {addres?.lastName}
              </p>
              <p>{addres?.address}</p>
              <p>{addres?.address2}</p>
              <p>{addres?.city}</p>
              <p>{addres?.phone}</p>
            </div>
            <div className="w-full h-0.5 rounded bg-gray-200 mb-5"></div>
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">
                {order?.itemsInOrder} articulos
              </span>

              <span>Subtotal</span>
              <span className="text-right">
                {currencyFormat(order?.subTotal ?? 0)}
              </span>

              <span>Impuestos (18%)</span>
              <span className="text-right">
                {currencyFormat(order?.tax ?? 0)}
              </span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">
                {currencyFormat(order?.total ?? 0)}
              </span>
            </div>
            <div className="mt-5 mb-2 w-full">
              {
                order?.isPaid ? (
                  <OrderStatus isPaid={order.isPaid} />
                ) : (
                  <PaypalButton amount={order!.total} orderId={order!.id} />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
