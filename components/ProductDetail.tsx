"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShare2, FiHeart } from "react-icons/fi";
import { Product } from "@/data/products";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product.nombre,
          text: product.descripcion,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing:", error));
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-lg shadow-md aspect-square">
            <Image
              src={product.imagen}
              alt={product.nombre}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-semibold text-gray-900">
                  {product.nombre}
                </h1>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-2 rounded-full border border-gray-200 hover:border-brishop-300 transition-colors"
                    aria-label="Añadir a favoritos"
                  >
                    <FiHeart
                      className={`${
                        isFavorite
                          ? "fill-brishop-500 text-brishop-500"
                          : "text-gray-500"
                      } transition-colors`}
                      size={20}
                    />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full border border-gray-200 hover:border-brishop-300 transition-colors"
                    aria-label="Compartir"
                  >
                    <FiShare2 className="text-gray-500" size={20} />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                {product.nuevo && (
                  <span className="bg-brishop-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    NUEVO
                  </span>
                )}
                {product.destacado && (
                  <span className="bg-lilac-400 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    DESTACADO
                  </span>
                )}
              </div>

              <div className="text-2xl font-bold text-brishop-800 mb-6">
                {formatPrice(product.precio)}
              </div>

              <p className="text-gray-600 mb-8">{product.descripcion}</p>
            </div>

            <div className="mt-auto">
              <Link
                href={`/contacto?producto=${product.id}`}
                className="w-full bg-brishop-600 hover:bg-brishop-700 text-white py-3 px-6 rounded-md transition-all duration-300 flex justify-center items-center font-medium text-lg shadow-md hover:shadow-lg"
              >
                Contactar para comprar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;