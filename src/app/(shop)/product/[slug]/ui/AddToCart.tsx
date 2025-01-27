"use client";

import { QuantitySelector } from "@/components";
import { useState } from "react";

export const AddToCart = () => {

  const [qantity, setQantity] = useState<number>(1)

  return (
    <>
      <QuantitySelector 
        quantity={qantity} 
        onQuantityChange={setQantity}
      />
      <button className="btn-primary my-5">Agregar al carrito</button>
    </>
  );
};
