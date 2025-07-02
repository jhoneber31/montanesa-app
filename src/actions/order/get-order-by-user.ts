"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

export const getOrderByUser = async () => {
  const session = await auth();

  if(!session?.user) {
    return {
      ok: false,
      error: "User not found"
    }
  }

  try {  
    const orders = await prisma.order.findMany({
      // where: {
      //   userId: session.user.id
      // },
      orderBy: {
        isPaid: "desc"
      },
      include: {
        OrderAddress: {
          select: {
            firstName: true,
            lastName: true,
          }
        }
      }
    });

    return {
      ok: true,
      orders
    }

  } catch (error:any) {
    console.log(error)
    return {
      ok: false,
      error: error.message
    }
    
  }
}