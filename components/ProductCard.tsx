"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);
  };

  return (
    <div
      className="product-card group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="product-image-container relative pt-[100%]">
        <Image
          src={product.imagen}
          alt={product.nombre}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="product-image object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.nuevo && (
            <span className="bg-brishop-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
              NUEVO
            </span>
          )}
          {product.destacado && !product.nuevo && (
            <span className="bg-lilac-400 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
              DESTACADO
            </span>
          )}
        </div>

        {/* Like button */}
        <button
          className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-all duration-300"
          aria-label="Añadir a favoritos"
        >
          <FiHeart
            className="text-gray-500 hover:text-brishop-500 transition-colors"
            size={18}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-1 truncate">
          {product.nombre}
        </h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2 h-10">
          {product.descripcion}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-semibold text-brishop-800">
            {formatPrice(product.precio)}
          </span>
          
          <Link 
            href={`/contacto?producto=${product.id}`}
            className="bg-brishop-600 hover:bg-brishop-700 text-white text-sm py-2 px-4 rounded-md transition-colors duration-300"
          >
            Contactar
          </Link>
        </div>
      </div>
      
      {/* Quick view overlay (mobile) */}
      <div 
        className={`absolute inset-0 bg-black/5 md:bg-transparent flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : ""
        }`}
      >
        <Link
          href={`/producto/${product.id}`}
          className="bg-white/90 hover:bg-white text-brishop-800 text-sm font-medium py-2 px-6 rounded-full shadow-md transition-all duration-300 transform translate-y-4 md:group-hover:translate-y-0"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;