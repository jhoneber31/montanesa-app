"use server";

import prisma from "@/lib/prisma";

export const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany();

    if (!categories) {
      return {
        data: [],
        ok: false,
        message: "No categories found",
      };
    }

    return {
      data: categories,
      ok: true,
      message: "Categories found",
    }
  } catch {
    throw new Error("Error getting categories");
  }
}