"use server";

import prisma from "@/lib/prisma";

export const deleteUserAddress = async (userId: string) => {

  try {
    await prisma.userAddress.delete({
      where: { userId },
    });

    return {
      ok: true,
      message: "Dirección eliminada correctamente",
    };
  } catch (_) {
    return {
      ok: false,
      message: "No se pudo eliminar la dirección del usuario",
    };
  }
};
