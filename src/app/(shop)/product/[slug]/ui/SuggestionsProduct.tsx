import { ProductImage } from "@/components";
import { Product } from "@/interfaces";
import { AddToCart } from "./AddToCart";

interface SuggestionsProductProps {
  products: Product[];
}

export const SuggestionsProduct = ({ products }: SuggestionsProductProps) => {
  return (
    <div className="flex gap-4 xl:flex-col">
      {products.map((product) => (
        <div
          key={product.name}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between flex-1"
        >
          <div>
            <ProductImage
              src={product.images[0]}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
              width={300}
              height={300}
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600 mt-1">S/. {product.price.toFixed(2)}</p>
          </div>
          <AddToCart
            classNameContainer="flex flex-col mt-2"
            product={product}
          />
        </div>
      ))}
    </div>
  );
};
