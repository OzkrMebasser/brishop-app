import Link from "next/link";

export default function NoAutorizadoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col items-center gap-4 shadow-sm w-full max-w-sm text-center">
        <span className="text-4xl">🚫</span>
        <h1 className="text-xl font-semibold text-gray-900">Acceso denegado</h1>
        <p className="text-sm text-gray-400">
          Tu cuenta no tiene permiso para ver esta página.
        </p>
        <Link
          href="/"
          className="mt-2 text-sm px-6 py-2 rounded-xl bg-brishop-600 hover:bg-brishop-700 text-white transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}