"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { CreateOrderActions, CreateOrderData, OnApproveActions, OnApproveData } from "@paypal/paypal-js";
import { paypalCheckPayment, setOrder } from "@/actions";

interface Props {
  orderId: string;
  amount: number;
}

export const PaypalButton = ({ amount, orderId }:Props) => {

  const [{ isPending }] = usePayPalScriptReducer();

  const rountedAmount = (Math.round(amount * 100) / 100)

  if(isPending) {
    return (
      <div className="animate-pulse ">
        <div className="h-11 bg-gray-300 rounded">
        </div>
        <div className="h-11 bg-gray-300 rounded mt-2">
        </div>
      </div>
    )
  }

  const createOrder = async (data:CreateOrderData, actions:CreateOrderActions):Promise<string> => {

    const transactionId = await actions.order.create({
      purchase_units: [
        {
          invoice_id: orderId,
          amount: {
            currency_code: "USD",
            value: rountedAmount.toString(),
          }
        }
      ],
      intent: "CAPTURE"
    })

    const { ok } = await setOrder(orderId, transactionId);

    if(!ok) {
      throw new Error("No se ha podido crear la orden")
    }

    return transactionId
  }

  const onApprove = async (data:OnApproveData, actions:OnApproveActions) => {

    const details = await actions.order?.capture();

    if(!details) return;

    await paypalCheckPayment(details.id ?? "")

  }

  return (
    <PayPalButtons
    createOrder={createOrder}
    onApprove={onApprove}
    />
  )
}
