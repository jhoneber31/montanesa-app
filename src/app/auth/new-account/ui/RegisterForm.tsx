"use client";

import { login, registerUser } from "@/actions";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface FrormInputs {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState(""); 

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FrormInputs>();

  const onSubmit = async (data: FrormInputs) => {

    setErrorMessage("");

    const { name, email, password } = data;

    const resp = await registerUser(name, email, password);

    if(!resp.ok) {
      setErrorMessage(resp.message);
      return
    }

    await login(email.toLowerCase(), password);

    router.replace("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="w-full relative pb-7">
        <label htmlFor="email">Nombre completo</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded w-full", {
            "border-red-500": errors.name,
          })}
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && (
          <p className="text-red-500 absolute bottom-1 left-0">
            El nombre es requerido
          </p>
        )}
      </div>

      <div className="w-full relative pb-7">
        <label htmlFor="email">Correo electrónico</label>
        <input
          className={clsx("px-5 py-2 border bg-gray-200 rounded w-full", {
            "border-red-500": errors.email,
          })}
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <p className="text-red-500 absolute bottom-1 left-0">
            Correo electrónico inválido
          </p>
        )}
      </div>
      <div className="relative pb-8">
        <div className="relative w-full">
          <label htmlFor="email">Contraseña</label>
          <input
            className={clsx("px-5 py-2 border bg-gray-200 rounded w-full", {
              "border-red-500": errors.password,
            })}
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 bottom-2 cursor-pointer"
          >
            {!showPassword ? (
              <IoEyeOffOutline size={20} />
            ) : (
              <IoEyeOutline size={20} />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 absolute bottom-2 left-0">
            La contraseña es requerida
          </p>
        )}
      </div>
      {
        errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )
      }

      <button className="btn-primary">Crear cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};
