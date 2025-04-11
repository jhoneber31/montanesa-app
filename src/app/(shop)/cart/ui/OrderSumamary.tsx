"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

export const OrderSumamary = () => {

  const [loaded, setLoaded] = useState(false);

  const { subTotal, tax, total, itemsInCart } = useCartStore(useShallow(state => state.getSumaryInformation()));

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <div className="animate-pulse bg-gray-200 flex max-w-sm h-52 rounded-md"></div>
  }

  return (
    <div className="grid grid-cols-2">
      <span>No. Productos</span>
      <span className="text-right">{itemsInCart ===  1 ? "1 articulo" : `${itemsInCart} articulos` }</span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>

      <span>IGV (18%)</span>
      <span className="text-right">{currencyFormat(tax)}</span>

      <span className="mt-5 text-2xl">Total:</span>
      <span className="text-right mt-5 text-2xl">{currencyFormat(total)}</span>
    </div>
  );
};
