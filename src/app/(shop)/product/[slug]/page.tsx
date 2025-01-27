import { getProductBySlug } from "@/actions";
import { ProductMobileSlideShow, ProductSlideShow } from "@/components";
import { titleFont } from "@/config/fonts";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: Promise<{slug: string}>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug
 
  // fetch data
  const product = await getProductBySlug(slug)
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product?.name ?? "Product not found",
    description: product?.description ?? "",
    openGraph: {
      title: product?.name,
      description: product?.description,
      images: [`/products/${product?.images[0]}`],
    },
  }
}

export default async function ProductSlugPage({params}: Props) {

  const {slug} = await params;

  const product = await getProductBySlug(slug);

  if(!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* slideshow */}
      <div className="col-span-1 md:col-span-2">
        <ProductSlideShow
          title={product.name}
          images={product.images}
          className="hidden md:block"
        />
        <ProductMobileSlideShow
          title={product.name}
          images={product.images}
          className="block md:hidden"
        />
      </div>
      {/* detalles */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.name}</h1>
        <p className="text-lg mb-5">S/. {product.price}</p>
        <AddToCart/>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">
          {product.description}
        </p>
      </div>  
    </div>
  );
}