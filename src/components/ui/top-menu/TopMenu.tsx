"use client";

import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  const totalItems = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Montañesa
          </span>
          <span> | Panaderia</span>
        </Link>
      </div>
      {/* center menu */}
      <div className="hidden md:block">
        <Link
          href="/category/panes"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Panes
        </Link>
        <Link
          href="/category/tortas"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Tortas
        </Link>
        <Link
          href="/category/chifones-kekes"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Chifones y Kekes
        </Link>
        <Link
          href="/category/galletas"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Galletas
        </Link>
      </div>
      {/* search cart and menu */}
      <div className="flex items-center">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href={(totalItems === 0 && loaded) ? "/empty" : "/cart"} className="mx-2">
          <div className="relative">
            {(totalItems > 0 && loaded) && (
              <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItems}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openMenu}
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
