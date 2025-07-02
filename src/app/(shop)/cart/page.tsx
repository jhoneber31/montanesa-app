import { Title } from "@/components";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSumamary } from "./ui/OrderSumamary";
import { getPaginatedProductsWithImages } from "@/actions";
import { RelationalProducts } from "./ui/RelationalProducts";

export default async function CartPage() {
  // if(productsInCart.length === 0) {
  //   redirect('/empty');
  // }

  const { products } = await getPaginatedProductsWithImages({
    page: 3,
    take: 4,
  });

  return (
    <div className="flex justify-center items-center px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas items</span>
            <Link href="/" className="underline mb-5">
              Volver a la tienda
            </Link>
            {/* items */}
            <ProductsInCart />
          </div>
          {/* order sumary */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <OrderSumamary />
            <div className="mt-5 mb-2 w-full">
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Productos Sugeridos</h2>
          <RelationalProducts products={products} />
        </div>
      </div>
    </div>
  );
}
