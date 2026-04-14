"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Por favor ingresa tu correo electrónico");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Por favor ingresa un correo electrónico válido");
      return;
    }

    if (!accepted) {
      setError("Debes aceptar la Política de Privacidad para continuar");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // Notificación a Brishop
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID!,
        { subscriber_email: email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Bienvenida al suscriptor
      // await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      //   process.env.NEXT_PUBLIC_EMAILJS_WELCOME_TEMPLATE_ID!,
      //   { subscriber_email: email },
      //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      // );

      setSubmitted(true);
      setEmail("");
      setAccepted(false);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Hubo un error al suscribirte. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-brishop-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Suscríbete a Nuestro Boletín
          </h2>
          <p className="text-gray-600 mb-8">
            Recibe las últimas noticias sobre nuevos productos, ofertas
            especiales y eventos exclusivos.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">

            {/* Input de correo */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full form-input pr-12 bg-white"
                aria-label="Correo electrónico"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-brishop-600 hover:text-brishop-700 transition-colors p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Suscribirse"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-brishop-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  <FiSend size={20} />
                )}
              </button>
            </div>

            {/* Toggle de política de privacidad */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                type="button"
                role="switch"
                aria-checked={accepted ? "true" : "false"}
                title="Aceptar política de privacidad"
                onClick={() => {
                  setAccepted((prev) => !prev);
                  if (error) setError("");
                }}
                className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brishop-600 focus:ring-offset-2 ${
                  accepted ? "bg-brishop-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                    accepted ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
              <p className="text-xs text-gray-500">
                Acepto la{" "}
                <Link
                  href="/politica-de-privacidad"
                  className="underline hover:text-brishop-600 transition-colors"
                >
                  Política de Privacidad
                </Link>
              </p>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-2 text-left">{error}</p>
            )}

            {submitted && (
              <p className="text-green-600 text-sm mt-2 text-left">
                ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;