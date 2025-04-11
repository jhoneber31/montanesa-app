"use server";

import prisma from "@/lib/prisma";

export const setOrder = async (orderId: string, transactionId: string) => {
  try {
    const order = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        transactionId,
      },
    });

    if(!order) {
      return {
        ok: false,
        message: "No se ha encontrado la orden",
      };
    }

    return {
      ok: true,
      order,
    };

  } catch (error) {
    return {
      ok: false,
      message: "Error al actualizar la orden",
    };
  }
};
