"use server";

import prisma from "@/lib/prisma";

export const getUserAddress = async (userId: string) => {
  try {
    const address = await prisma.userAddress.findUnique({
      where: { userId },
      select: {
        firstName: true,
        lastName: true,
        address: true,
        address2: true,
        postalCode: true,
        phone: true,
        city: true,
      }
    })

    if(!address) {
      return {
        firstName: '',
        lastName: '',
        address: '',
        address2: '',
        postalCode: '',
        phone: '',
        country: "PE",
        city: "",
      };
    };

    return {
      ...address,
      address2: address?.address2 ? address.address2 : '',
      country: "PE",
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener la dirección del usuario");
  }
}