import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs">
      <Link
        href='/'
      >
          <span className={`${titleFont.className} antialiased font-bold`}>Montañesa</span>
          <span> | Panaderia</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </Link>
    </div>
  )
}
