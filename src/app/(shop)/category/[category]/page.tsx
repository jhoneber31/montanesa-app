import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { CATEGORY_LABELS, Category as CategoryEnum } from "@/constants";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;

  const { page: pageCurrent } = await searchParams;

  const page = pageCurrent ? parseInt(pageCurrent) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    category,
  });

  if (!Object.values(CategoryEnum).includes(category as CategoryEnum)) {
    notFound();
  }

  return (
    <>
      <Title
        title={CATEGORY_LABELS[category as CategoryEnum]}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
