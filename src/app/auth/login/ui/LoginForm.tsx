"use client";

import { authenticate } from "@/actions";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { IoInformationOutline } from "react-icons/io5";

export const LoginForm = () => {

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
      />

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <div className="mb-2 flex">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </div>
        )}
      </div>

      {/* <LoginButton /> */}
      <input type="hidden" name="redirectTo" value={callbackUrl} />
      <button
        type="submit"
        aria-disabled={isPending}
        className={
          clsx({
            "btn-primary": !isPending,
            "btn-disabled": isPending,
        })}
        disabled={isPending}
      >
        Ingresar
      </button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};
