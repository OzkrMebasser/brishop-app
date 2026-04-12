
"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phone = "5216121376977";
  const message = "Hola, me interesa un producto de Brishop ¿Podrían ayudarme?";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brishop-500 hover:bg-brishop-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
};

export default WhatsappButton;