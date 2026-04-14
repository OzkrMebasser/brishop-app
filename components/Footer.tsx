import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";
import { categories } from "@/data/categories";
import { BiSolidOffer } from "react-icons/bi";

const LogoBrishop =
  "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/brishop-ecommerce%2FLOGO-brishop-horizontal.png?alt=media&token=851e2ab6-4510-4415-a2fc-07c5410999c0";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-12 w-36">
                <Image
                  src={LogoBrishop}
                  alt="BRISHOP Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 mb-6">
              Tu tienda en línea para encontrar productos de moda y estilo con
              la mejor calidad.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/brishop.tienda.online"
                className="text-gray-500 hover:text-brishop-600 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/people/Brishop/61575576121514/"
                className="text-gray-500 hover:text-brishop-600 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              {/* <a
                href="#"
                className="text-gray-500 hover:text-brishop-600 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a> */}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-medium mb-4">Categorías</h4>
            <ul className="space-y-2">
              {categories.slice(0, 4).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/categoria/${category.id}`}
                    className="text-gray-600 hover:text-brishop-600 transition-colors"
                  >
                    {category.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {/* <li>
                <Link
                  href="/sobrenosotros"
                  className="text-gray-600 hover:text-brishop-600 transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-600 hover:text-brishop-600 transition-colors"
                >
                  Contacto
                </Link>
              </li>
               <li>
                <Link
                  href="/ofertas"
                  className="text-gray-600 hover:text-brishop-600 transition-colors"
                >
                  Ofertas <BiSolidOffer className="inline-block ml-0 text-red-500 animate-pulse" size={16} />
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="text-gray-600 hover:text-brishop-600 transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="text-gray-600 hover:text-brishop-600 transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contacto</h4>
            <address className="not-italic text-gray-600 space-y-2">
              <p>La Paz, BCS, México</p>
              <p>
                <a
                  href="https://wa.me/5216121376977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brishop-600 transition-colors"
                >
                  WhatsApp
                </a>
              </p>
              <p>
                <a
                  href="mailto:brisamoreno85@gmail.com"
                  className="hover:text-brishop-600 transition-colors flex items-center"
                >
                  <FiMail className="mr-2" /> Correo electrónico
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} BRISHOP. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
