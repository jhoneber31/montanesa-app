"use server";

import { PaypalOrderResponse } from "@/interfaces";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const paypalCheckPayment = async (transactionId: string) => {
  const authToken = await getPaypalBearerToken();

  if (!authToken) {
    return {
      ok: false,
      message: "No se ha podido obtener el token",
    };
  }

  const resp = await verifyPaypalPayment(authToken, transactionId);

  if (!resp) {
    return {
      ok: false,
      message: "No se ha podido verificar el pago",
    };
  }

  const { status, purchase_units } = resp;
  const { invoice_id:orderId } = purchase_units[0];

  if (status !== "COMPLETED") {
    return {
      ok: false,
      message: "El pago no se ha completado",
    };
  }

  try {

    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        isPaid: true,
        paidAt: new Date(),
      }
    })

    //TODO: revalidar path

    revalidatePath(`/orders/${orderId}`)

    return {
      ok: true,
      message: "El pago se ha realizado correctamente",
    }


  } catch (error) {
    return {
      ok: false,
      message: "El pago no se pudo realizar",
    };
  }
};

const getPaypalBearerToken = async (): Promise<string | null> => {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const PAYPAL_SECRET = process.env.PAYPAL_SECRET;
  const oauth2Url = process.env.PAYPAL_OAUTH_URL ?? "";

  const base64Token = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`,
    "utf-8"
  ).toString("base64");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", `Basic ${base64Token}`);

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
  };

  try {
    const result = await fetch(oauth2Url, {...requestOptions, cache: "no-store"}).then((response) =>
      response.json()
    );

    return result.access_token;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const verifyPaypalPayment = async (
  token: string,
  transactionId: string
): Promise<PaypalOrderResponse | null> => {
  const paypalOrderUrl = `${process.env.PAYPAL_ORDERS_URL}/${transactionId}`;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const result = await fetch(paypalOrderUrl, {...requestOptions, cache: "no-store"}).then(
      (response) => response.json()
    );
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
