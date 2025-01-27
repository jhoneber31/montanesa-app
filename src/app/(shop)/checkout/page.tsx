import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link
              href="/cart"
              className="underline mb-5"
            >
              Editar carrito
            </Link>
          {/* items */}
          {
            productsInCart.map(product => (
              <div className="flex mb-5" key={product.slug}>
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.name}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.name}</p>
                  <p>S/. {product.price} x 3</p>
                  <p className="font-bold">Subtotal: S/. {product.price * 3}</p>
                </div>
              </div>
            ))
          }
          </div>
          {/* order sumary */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">

            <h2 className="text-2xl mb-2 font-bold">Dirección de Entrega</h2>
            <div className="mb-5">
              <p className="text-xl">Jhon Eber</p>
              <p>Av. siempre viva 123</p>
              <p>Col. centro</p>
              <p>Chorrillos</p>
              <p>42343243</p>
              <p>949787913</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-5"/>

            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">S/. 100</span>

              <span>IGV (18%)</span>
              <span className="text-right">S/. 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="text-right mt-5 text-2xl">S/. 100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <Link
                href='/orders/123'
                className="flex btn-primary justify-center"
              >
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
