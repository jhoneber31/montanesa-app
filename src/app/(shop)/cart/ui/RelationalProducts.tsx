import { ProductImage } from "@/components";
import { Product } from "@/interfaces";
import { AddToCart } from "../../product/[slug]/ui/AddToCart";

interface RelationalProductsProps {
  products: Product[];
}

export const RelationalProducts = ({ products }: RelationalProductsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
      {products.map((product) => (
        <div key={product.name} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
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
