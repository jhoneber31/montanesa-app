import { Footer, Sidebar, TopMenu } from "@/components";
import { Suspense } from "react";

export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <TopMenu/>
      <Suspense>
        <Sidebar/>
      </Suspense>
      <div className="px-0 sm:px-10">
        {children}
      </div>
      <Footer/>
    </main>
  );
}