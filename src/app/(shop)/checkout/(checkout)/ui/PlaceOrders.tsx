"use client";

import { placeOrder } from "@/actions";
import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

export const PlaceOrders = () => {

  const router = useRouter();

  const [loaded, setLoaded] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const address = useAddressStore((state) => state.address);
  const { subTotal, tax, total, itemsInCart } = useCartStore(
    useShallow((state) => state.getSumaryInformation())
  );
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const onSendOrder = async () => {
    setIsPending(true);
    // await sendOrder();

    const productsInCart = cart.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));

    const response = await placeOrder(productsInCart, address);

    if (!response.ok) {
      setIsPending(false);
      setErrorMessage(response.message);
      return;
    }

    clearCart();
    router.replace('/orders/' + response.order?.id);
  };

  useEffect(() => {
    setLoaded(true);
    if(cart.length === 0) {
      router.replace('/');
    }
  }, []);

  if (!loaded) return <p>cargando...</p>;

  return (
    <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
      <h2 className="text-2xl mb-2 font-bold">Dirección de Entrega</h2>
      <div className="mb-5">
        <p className="text-xl">
          {address.firstName} {address.lastName}
        </p>
        <p>{address.address}</p>
        <p>{address.address2}</p>
        <p>{address.city}</p>
        <p>{address.postalCode}</p>
        <p>{address.phone}</p>
      </div>

      <div className="w-full h-0.5 rounded bg-gray-200 mb-5" />

      <h2 className="text-2xl mb-2">Resumen de orden</h2>
      <div className="grid grid-cols-2">
        <span>No. Productos</span>
        <span className="text-right">
          {itemsInCart === 1 ? "1 articulo" : `${itemsInCart} articulos`}
        </span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subTotal)}</span>

        <span>IGV (18%)</span>
        <span className="text-right">{currencyFormat(tax)}</span>

        <span className="mt-5 text-2xl">Total:</span>
        <span className="text-right mt-5 text-2xl">
          {currencyFormat(total)}
        </span>
      </div>

      <p className="text-red-500">{errorMessage}</p>
      <div className="mt-5 mb-2 w-full">
        <button
          type="button"
          onClick={onSendOrder}
          className="flex btn-primary justify-center"
        >
          Colocar orden
        </button>
      </div>
    </div>
  );
};
