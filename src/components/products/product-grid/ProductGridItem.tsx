"use client";

import { ProductImage } from "@/components/product/product-image/ProductImage";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {

  const [image, setImage] = useState(product.images[0]);

  const handleImageChange = (image: string) => {
    setImage(image);
  }

  return (
    <div className="rounded-md overflow-hidden fade-in cursor-pointer">
      <Link 
        href={`/product/${product.slug}`}
      >
        <ProductImage
          src={image}
          alt={product.name}
          className="w-full object-cover"
          width={300}
          height={300}
          onMouseEnter={() => handleImageChange(product.images[1])}
          onMouseLeave={() => handleImageChange(product.images[0])}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`}>{product.name}</Link>
        <span className="font-bold">S/. {product.price}</span>
      </div>
    </div>
  );
};
