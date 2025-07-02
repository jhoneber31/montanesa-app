"use server";

import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  category?: string;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 10,
  category
}: PaginationOptions) => {

  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    let categoryId;

    if( category) {
      const categoryData = await prisma.category.findFirst({
        where: {
          name: {
            equals: category,
            mode: "insensitive"
          }
        }
      })
      categoryId = categoryData?.id;
    }

    const products = await prisma.product.findMany({
      take,
      skip: ( page - 1 ) * take,
      include: {
        category: {
          select: {
            name: true,
          }
        },
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        categoryId: categoryId
      }
    });

    const totalCount = await prisma.product.count({
      where: {
        categoryId: categoryId
      }
    });
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch {
    throw new Error("Error getting products with images");
  }
};
