import { IAddress } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  address: IAddress;
}

interface Actions {
  setAddress: (address: State["address"]) => void;
}

export const useAddressStore = create<State & Actions>()(
  persist(
    (set) => ({
      address: {
        firstName: "",
        lastName: "",
        address: "",
        address2: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
      },

      setAddress: (address) => {
        set({ address });
      }
    }),
    {
      name: "address-storage",
    }
  )
);
