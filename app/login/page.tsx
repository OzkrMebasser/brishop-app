"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col items-center gap-6 shadow-sm w-full max-w-sm">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">BRISHOP</h1>
          <p className="text-sm text-gray-400">Acceso restringido</p>
        </div>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center gap-3 w-full justify-center px-6 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <FcGoogle size={20} />
          Continuar con Google
        </button>

        <p className="text-xs text-gray-400 text-center">
          Solo usuarios autorizados pueden acceder.
        </p>
      </div>
    </main>
  );
}