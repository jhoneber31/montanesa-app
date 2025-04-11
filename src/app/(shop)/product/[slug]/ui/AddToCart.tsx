"use client";

import { QuantitySelector } from "@/components";
import { CartProduct, Product } from "@/interfaces";
import { useCartStore } from "@/store";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({product}:Props) => {

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
    <>
      <QuantitySelector 
        quantity={qantity} 
        onQuantityChange={setQantity}
      />
      <button 
        onClick={addToCart}
        className="btn-primary my-5"
      >
        Agregar al carrito</button>
    </>
  );
};
