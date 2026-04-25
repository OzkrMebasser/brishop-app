"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setLiked(favorites.includes(product.id));
  }, [product.id]);

  const toggleLike = () => {
    const favorites: string[] = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    const updated = liked
      ? favorites.filter((id) => id !== product.id)
      : [...favorites, product.id];
    localStorage.setItem("favorites", JSON.stringify(updated));
    setLiked(!liked);
  };

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
          className={`product-image object-cover ${product.vendido ? "opacity-50 grayscale" : ""}`}
        />

        {/* Vendido overlay */}
        {product.vendido && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-gray-800/80 text-white text-sm font-bold px-4 py-2 rounded-md tracking-widest uppercase">
              Vendido
            </span>
          </div>
        )}

        {/* Oferta ribbon */}
        {product.enOferta && !product.vendido && (
          <div className="absolute top-4 -left-8 w-36 bg-red-500 text-white text-xs font-bold text-center py-1 rotate-[-45deg] shadow-md">
            ¡En Oferta!
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.nuevo && !product.vendido && (
            <span className="bg-brishop-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
              NUEVO
            </span>
          )}
          {product.destacado && !product.nuevo && !product.vendido && (
            <span className="bg-lilac-400 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
              DESTACADO
            </span>
          )}
        </div>

        {/* Like button */}
        <button
          onClick={toggleLike}
          className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-all duration-300"
          aria-label={liked ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          {liked ? (
            <FaHeart className="text-brishop-500" size={18} />
          ) : (
            <FiHeart
              className="text-gray-500 hover:text-brishop-500 transition-colors"
              size={18}
            />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="h-auto flex items-center text-left pt-2">
        <h1 className="text-base font-semibold text-gray-800 px-3 truncate w-full">
          {product.nombre}
        </h1>
      </div>
      <div className="flex items-center justify-between px-3 pt-2 mb-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Desde</span>
          <span className="text-lg font-semibold text-brishop-800">
            {formatPrice(product.precioDesde)}
            <span className="text-xs font-normal text-gray-400 block">
              quincenal
            </span>
          </span>
        </div>

        <Link
          href={`/producto/${product.id}`}
          className="bg-brishop-600 hover:bg-brishop-700 text-white text-sm py-2 px-4 rounded-md transition-colors duration-300"
        >
          Ver detalles{" "}
          <TbExternalLink className="inline-block ml-1" size={16} />
        </Link>
      </div>

      {/* Quick view overlay (mobile) */}
      <div
        className={`absolute inset-0 bg-black/5 md:bg-transparent flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : ""
        }`}
      ></div>
    </div>
  );
};

export default ProductCard;