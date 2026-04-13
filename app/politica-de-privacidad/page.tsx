"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

const sections = [
  {
    title: "Información que recopilamos",
    content:
      "Recopilamos únicamente la información que nos proporcionas voluntariamente, como tu correo electrónico cuando te suscribes a nuestro newsletter o nos contactas.",
  },
  {
    title: "Uso de la información",
    list: [
      "Enviar novedades y promociones de productos",
      "Responder mensajes o solicitudes",
      "Mejorar nuestra comunicación contigo",
    ],
  },
  {
    title: "Uso de WhatsApp",
    content:
      "Podemos utilizar tu número telefónico para comunicarnos contigo a través de WhatsApp únicamente con fines de atención al cliente o seguimiento de solicitudes.",
  },
  {
    title: "Protección de la información",
    content:
      "No compartimos, vendemos ni distribuimos tu información personal a terceros. Tomamos medidas razonables para proteger tus datos.",
  },
  {
    title: "Ubicación",
    content: "Operamos desde La Paz, Baja California Sur, México.",
  },
  {
    title: "Cambios a esta política",
    content:
      "Nos reservamos el derecho de actualizar esta política en cualquier momento.",
  },
  {
    title: "Contacto",
    content:
      "Si tienes dudas, puedes contactarnos a través de nuestro correo electrónico o vía WhatsApp.",
  },
];

const PoliticaDePrivacidad = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      <div className="container-custom py-12 md:py-16">

        {/* Botón regresar */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-brishop-600 transition-colors mb-10 group"
        >
          <FiArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-200"
          />
          Regresar
        </button>

        <div className="max-w-3xl mx-auto">

          {/* Encabezado */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            Política de Privacidad
          </h1>
          <p className="text-sm text-gray-400 mb-10">
            Última actualización: abril 2026
          </p>

          {/* Intro */}
          <p className="text-gray-600 mb-10 leading-relaxed">
            En <span className="font-medium text-gray-900">Brishop Tienda Online</span>,
            valoramos y respetamos tu privacidad. Esta política explica cómo
            recopilamos, usamos y protegemos tu información.
          </p>

          {/* Secciones */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.title}
                className="border-t border-gray-100 pt-8"
              >
                <h2 className="text-lg font-medium text-gray-900 mb-3">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brishop-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidad;