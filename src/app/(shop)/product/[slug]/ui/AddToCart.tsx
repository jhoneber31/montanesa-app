"use client";

import { QuantitySelector } from "@/components";
import { CartProduct, Product } from "@/interfaces";
import { useCartStore } from "@/store";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  product: Product;
  classNameContainer?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const AddToCart = ({product, classNameContainer}:Props) => {

  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const [qantity, setQantity] = useState<number>(1);

  const addToCart = () => {

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      quantity: qantity,
      image: product.images[0],
    }

    addProductToCart(cartProduct);
    setQantity(1);
  };

  return (
    <div className={clsx(classNameContainer)}>
      <QuantitySelector 
        quantity={qantity} 
        onQuantityChange={setQantity}
      />
      <button 
        onClick={addToCart}
        className="btn-primary my-5"
      >
        Agregar al carrito</button>
    </div>
  );
};
