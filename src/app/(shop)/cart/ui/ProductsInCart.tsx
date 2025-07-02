"use client";

import { ProductImage, QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export const ProductsInCart = () => {

  const productsInCart = useCartStore((state) => state.cart);

  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity);

  const removeProduct = useCartStore((state) => state.removeProduct);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <div className="animate-pulse bg-gray-200 flex max-w-sm h-52 rounded-md"></div>;
  }
  
  return (
    <>
      {productsInCart.map((product) => (
        <div className="flex mb-5" key={product.slug}>
          <ProductImage
            src={product.image}
            width={100}
            height={100}
            alt={product.name}
            className="mr-5 rounded"
          />
          <div>
            <Link
              className="hover:underline cursor-pointer"
              href={`/product/${product.slug}`}
            >
              <p>{product.name}</p>
            </Link>
            <p>S/. {product.price}</p>
            <QuantitySelector 
              quantity={product.quantity} 
              onQuantityChange={(value) => updateProductQuantity(product, value)}
            />
            <button 
              className="underline mt-3"
              onClick={() => removeProduct(product)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
