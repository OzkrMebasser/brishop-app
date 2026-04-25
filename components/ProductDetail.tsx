"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShare2 } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem } from "react-image-gallery";
import { Product } from "@/data/products";

interface ProductDetailProps {
  product: Product;
}

const categoryLabels: Record<string, string> = {
  bolsas: "bolsas",
  perfumes: "perfumes",
  calzado: "calzado",
  ropa: "ropa",
  accesorios: "accesorios",
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [liked, setLiked] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const galleryItems: GalleryItem[] | null =
    product.imagenes && product.imagenes.length > 0
      ? product.imagenes.map((url) => ({
          original: url,
          thumbnail: url,
        }))
      : null;

  const categoryLabel = categoryLabels[product.categoria] ?? product.categoria;

  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image / Gallery */}
          {galleryItems ? (
            <div className="relative square-gallery rounded-lg shadow-md overflow-hidden">
              {product.enOferta && (
                <div className="absolute top-6 -left-8 w-36 z-10 bg-red-500 text-white text-xs font-bold text-center py-1 rotate-[-45deg] shadow-md pointer-events-none">
                  ¡En Oferta!
                </div>
              )}
              <div className={product.vendido ? "opacity-50 grayscale" : ""}>
                <ImageGallery
                  items={galleryItems}
                  showPlayButton={false}
                  showNav={true}
                  thumbnailPosition={isFullscreen ? "bottom" : "bottom"}
                  onScreenChange={(fullscreen) => setIsFullscreen(fullscreen)}
                  lazyLoad={true}
                />
              </div>
              {product.vendido && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <span className="bg-gray-800/80 text-white text-lg font-bold px-6 py-3 rounded-md tracking-widest uppercase">
                    Vendido
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-lg shadow-md aspect-square">
              {product.enOferta && (
                <div className="absolute top-6 -left-8 w-36 z-10 bg-red-500 text-white text-xs font-bold text-center py-1 rotate-[-45deg] shadow-md pointer-events-none">
                  ¡En Oferta!
                </div>
              )}
              <Image
                src={product.imagen}
                alt={product.nombre}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className={`object-cover ${product.vendido ? "opacity-50 grayscale" : ""}`}
              />
              {product.vendido && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <span className="bg-gray-800/80 text-white text-lg font-bold px-6 py-3 rounded-md tracking-widest uppercase">
                    Vendido
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-semibold text-gray-900">
                  {product.nombre}
                </h1>
                <div className="flex space-x-2">
                  <button
                    onClick={toggleLike}
                    className="p-2 rounded-full border border-gray-200 hover:border-brishop-300 transition-colors"
                    aria-label={
                      liked ? "Quitar de favoritos" : "Añadir a favoritos"
                    }
                  >
                    {liked ? (
                      <FaHeart className="text-brishop-500" size={20} />
                    ) : (
                      <FiHeart className="text-gray-500" size={20} />
                    )}
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
                {product.talla && (
                  <span className="bg-lilac-400 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    Talla: {product.talla}
                  </span>
                )}
                {product.enOferta && (
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    ¡EN OFERTA!
                  </span>
                )}
                {product.vendido && (
                  <span className="bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    VENDIDO
                  </span>
                )}
              </div>

              {/* Precios */}
              <div className="flex flex-col gap-4 mb-6">
                {/* Precio contado */}
                <div className={`flex items-center gap-3 p-3 rounded-lg border ${product.enOferta ? "bg-gray-50 border-gray-100 opacity-60" : "bg-green-50 border-green-100"}`}>
                  <div>
                    <p className={`text-xs font-medium uppercase tracking-wide ${product.enOferta ? "text-gray-400" : "text-green-600"}`}>
                      Precio de contado
                    </p>
                    <p className={`text-2xl font-bold ${product.enOferta ? "text-gray-400 line-through" : "text-green-700"}`}>
                      {formatPrice(product.precioContado)}
                    </p>
                  </div>
                </div>

                {/* Precio crédito */}
                <div className={`flex items-center gap-3 p-3 rounded-lg border ${product.enOferta ? "bg-gray-50 border-gray-100 opacity-60" : "bg-brishop-50 border-brishop-100"}`}>
                  <div className="flex-1">
                    <p className={`text-xs font-medium uppercase tracking-wide ${product.enOferta ? "text-gray-400" : "text-brishop-600"}`}>
                      Precio a crédito
                    </p>
                    <p className={`text-2xl font-bold ${product.enOferta ? "text-gray-400 line-through" : "text-brishop-800"}`}>
                      {formatPrice(product.precioCredito)}
                    </p>
                  </div>
                  <div className={`text-right border-l pl-3 ${product.enOferta ? "border-gray-100" : "border-brishop-100"}`}>
                    <p className="text-xs text-gray-400">Desde</p>
                    <p className={`text-2xl font-bold ${product.enOferta ? "text-gray-400 line-through" : "text-brishop-800"}`}>
                      {formatPrice(product.precioDesde)}
                    </p>
                    <p className="text-xs text-gray-400">
                      {product.abonos} abonos quincenales aprox.
                    </p>
                  </div>
                </div>

                {/* Precio oferta */}
                {product.enOferta && product.precioOferta && (
                  <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div>
                      <p className="text-xs text-red-600 font-medium uppercase tracking-wide">
                        🔥 Precio de oferta
                      </p>
                      <p className="text-3xl font-bold text-red-600">
                        {formatPrice(product.precioOferta)}
                      </p>
                      <p className="text-xs text-red-400 mt-1">
                        Precio especial por tiempo limitado
                      </p>
                    </div>
                  </div>
                )}

                {/* Vendido banner */}
                {product.vendido && (
                  <div className="flex items-center gap-3 p-3 bg-gray-100 border border-gray-300 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        Este artículo ya no está disponible
                      </p>
                      <p className="text-lg font-bold text-gray-600">
                        Producto vendido
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Contáctanos para consultar artículos similares
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-gray-600 mb-8">{product.descripcion}</p>
            </div>

            <div className="mt-auto">
              {product.vendido ? (
                <Link
                  href={`/categoria/${product.categoria}`}
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-md transition-all duration-300 flex justify-center items-center font-medium text-lg shadow-md hover:shadow-lg"
                >
                  Ver más {categoryLabel}
                </Link>
              ) : (
                <Link
                  href={`/contacto?producto=${product.id}`}
                  className="w-full bg-brishop-600 hover:bg-brishop-700 text-white py-3 px-6 rounded-md transition-all duration-300 flex justify-center items-center font-medium text-lg shadow-md hover:shadow-lg"
                >
                  Contactar para comprar
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;