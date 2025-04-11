import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
}

interface Actions {
  addProductToCart: (product: CartProduct) => void;
  getTotalItems: () => number;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;
  getSumaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };

  clearCart: () => void;
}

export const useCartStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      cart: [],
      addProductToCart: (product) => {
        const { cart } = get();

        const productInCart = cart.some((item) => item.id === product.id);

        if (!productInCart) {
          set({
            cart: [...cart, product],
          });
          return;
        }

        const newCart = cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });

        set({
          cart: newCart,
        });
      },
      getTotalItems: () => {
        const { cart } = get();
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        return totalItems;
      },
      updateProductQuantity: (product, quantity) => {
        const { cart } = get();

        if (quantity <= 0) return;

        const newCart = cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity,
            };
          }
          return item;
        });

        set({
          cart: newCart,
        });
      },
      removeProduct: (product) => {
        const { cart } = get();

        const newCart = cart.filter((item) => item.id !== product.id);

        set({
          cart: newCart,
        });
      },
      getSumaryInformation: () => {
        const { cart } = get();

        const subTotal = cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const tax = subTotal * 0.18;
        const total = subTotal + tax;
        const itemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

        return {
          subTotal,
          tax,
          total,
          itemsInCart,
        };
      },
      clearCart: () => {
        set({
          cart: [],
        });
      },
    }),
    {
      name: "cart-store",
      // skipHydration: true,
    }
  )
);
