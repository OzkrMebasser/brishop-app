"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import Link from 'next/link';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("Por favor ingresa tu correo electrónico");
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Por favor ingresa un correo electrónico válido");
      return;
    }
    
    // Success simulation
    setError("");
    setSubmitted(true);
    setEmail("");
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-16 bg-brishop-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Suscríbete a Nuestro Boletín
          </h2>
          <p className="text-gray-600 mb-8">
            Recibe las últimas noticias sobre nuevos productos, ofertas especiales y eventos exclusivos.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full form-input pr-12 bg-white"
                aria-label="Correo electrónico"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-brishop-600 hover:text-brishop-700 transition-colors p-2"
                aria-label="Suscribirse"
              >
                <FiSend size={20} />
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-2 text-left">{error}</p>
            )}
            
            {submitted && (
              <p className="text-green-600 text-sm mt-2 text-left">
                ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
              </p>
            )}

            <p className="text-xs text-gray-500 mt-4">
              Al suscribirte, aceptas nuestra{" "}
              <Link href="/politica-de-privacidad" className="underline hover:text-brishop-600 transition-colors">
                Política de Privacidad
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;