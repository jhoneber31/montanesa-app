"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ProductsInCart = () => {
  const productsInCart = useCartStore((state) => state.cart);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="animate-pulse bg-gray-200 flex max-w-sm h-52 rounded-md"></div>
    );
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div className="flex mb-5" key={product.slug}>
          <Image
            src={`/products/${product.image}`}
            width={100}
            height={100}
            alt={product.name}
            className="mr-5 rounded"
          />
          <div>
            <span>
              <p>{product.name} ({product.quantity})</p>
            </span>
            <p className="font-bold">{currencyFormat(product.price * product.quantity)}</p>
          </div>
        </div>
      ))}
    </>
  );
};
