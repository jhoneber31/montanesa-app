"use server";

import { IAddress } from "@/interfaces";
import prisma from "../../lib/prisma";

export const setUserAddress = async (address: IAddress, userId: string) => {
  try {
    const newAddress = await createOrReplaceAddress(address, userId);

    return {
      ok: true,
      address: newAddress,
    };
  } catch (_) {
    
    return {
      ok: false,
      message: "No se pudo obtener la dirección del usuario",
    };
  }
};

const createOrReplaceAddress = async (address: IAddress, userId: string) => {
  try {
    const storedAddress = await prisma.userAddress.findUnique({
      where: {
        userId,
      },
    });

    if (!storedAddress) {
      const newAddress = await prisma.userAddress.create({
        data: {
          address: address.address,
          address2: address.address2,
          firstName: address.firstName,
          lastName: address.lastName,
          postalCode: address.postalCode,
          phone: address.phone,
          city: address.city,
          userId,
        },
      });

      return newAddress;
    }

    const updateAddress = await prisma.userAddress.update({
      where: {
        userId,
      },
      data: {
        address: address.address,
        address2: address.address2,
        firstName: address.firstName,
        lastName: address.lastName,
        postalCode: address.postalCode,
        city: address.city,
        phone: address.phone,
      },
    });

    return updateAddress;
  } catch (_) {
    throw new Error("No se pudo crear o actualizar la dirección del usuario");
  }
};
