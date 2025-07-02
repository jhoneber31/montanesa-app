"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

export const getOrderById = async (id:string) => {

  const session = await auth();

  if(!session?.user) {
    return {
      ok: false,
      message: 'User not found'
    }
  }

  try {
    const order = await prisma.order.findUnique({
      where: {
        id
      },
      include: {
        OrderAddress: true,
        OrderItem: {
          select: {
            price: true,
            quantity: true,

            product: {
              select: {
                name: true,
                slug: true,
                ProductImage: {
                  select: {
                    url: true
                  },
                  take: 1
                }
              }
            }
          }
        }
      }
    });

    if(!order) {
      return {
        ok: false,
        message: 'Order not found'
      }
    }

    if(session.user.role === "user") {
      if(session.user.id !== order.userId) {
        return {
          ok: false,
          message: 'Unauthorized'
        }
      }
    }
    
  
    return {
      ok: true,
      order
    }
  } catch (error:unknown) {
    if (error instanceof Error) {
      return {
        ok: false,
        message: error.message,
      };
    }
    return {
      ok: false,
      message: "Error getting order"
    }
  }

}