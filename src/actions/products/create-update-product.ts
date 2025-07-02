"use server";

import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config(process.env.CLOUDINARY_URL ?? "");

const productSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  name: z.string().min(3).max(500),
  slug: z.string().min(3).max(500),
  description: z.string(),
  price: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(2))),
  stock: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(0))),
  categoryId: z.string().uuid(),
});

export const createOrUpdateProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const productParsed = productSchema.safeParse(data);

  if (!productParsed.success) {
    return {
      ok: false,
    };
  }

  const product = productParsed.data;
  product.slug = product.slug.toLowerCase().replace(/ /g, "-").trim();

  const { id, ...rest } = product;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let product: Product;

      if (id) {
        product = await prisma.product.update({
          where: { id },
          data: {
            ...rest,
          },
        });

        console.log({ update: product });
      } else {
        product = await prisma.product.create({
          data: {
            ...rest,
          },
        });
        console.log({ crear: product });
      }

      if (formData.getAll("images")) {
        const images = await uploadImages(formData.getAll("images") as File[]);
        if(!images) {
          throw new Error("No se pudo cargar las imagenes");
        }

        await prisma.productImage.createMany({
          data: images.map(image => ({
            url: image!,
            productId: product.id
          }))
        })
      }

      return {
        product,
      };
    });

    revalidatePath("/admin/product");
    revalidatePath(`/admin/products/${product.slug}`);
    revalidatePath(`/products/${product.slug}`);

    return {
      ok: true,
      product: prismaTx.product,
    };
  } catch (error) {
    return {
      ok: false,
      message: "Error al crear el producto",
    };
  }
};

const uploadImages = async (images: File[]) => {
  try {
    const uploadPromises = images.map(async (image) => {
      try {
        const buffer = await image.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");

        return cloudinary.uploader
          .upload(`data:image/png;base64,${base64}`)
          .then((r) => r.secure_url);
      } catch (error) {
        console.log(error);
        return null;
      }
    });
    const uploadedImages = await Promise.all(uploadPromises);
    return uploadedImages
  } catch (error) {
    console.log(error);
    return null;
  }
};
