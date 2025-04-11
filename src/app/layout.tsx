import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";
import { Providers } from "@/components";


export const metadata: Metadata = {
  title: {
    template: "%s - Montañesa | App",
    default: "Montañesa | App",
  },
  description: "Una tienda virtual para la venta de productos de montaña.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
