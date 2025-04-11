import { Title } from "@/components";
import { Suspense } from "react";
import { AddressForm } from "./ui/AddressForm";

import { getCountries } from "@/actions";
import { getUserAddress } from "@/actions/address/get-user-address";
import { auth } from "@/auth.config";

export default async function AddressPage() {

  const session = await auth();

  const countries = await getCountries();

  const address = await getUserAddress(session?.user.id!);

  return (
    <Suspense>
      <div className="flex flex-col sm:justify-center sm:items-center px-10 sm:px-0">
        <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
          <Title title="Dirección" subtitle="Dirección de entrega" />

          <AddressForm countries={countries} userStoredAddress={address} />
        </div>
      </div>
    </Suspense>
  );
}
