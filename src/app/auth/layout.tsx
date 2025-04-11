// import { auth } from "@/auth.config";
// import { redirect } from "next/navigation";

import { Suspense } from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();

  // if(session?.user) {
  //   redirect("/");
  // }

  // console.log({ session });

  return (
    <main className="flex justify-center">
      <div className="w-full sm:w-[350px] px-10">
        <Suspense>{children}</Suspense>
      </div>
    </main>
  );
}
