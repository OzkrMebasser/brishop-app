
"use client";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const OfertasPage = () => {
  const ofertaProducts = products.filter((p) => p.enOferta);

  return (
    <main className="container-custom py-24">
      <h1 className="text-2xl font-medium text-gray-900 mb-8">🔥 Ofertas</h1>

      {ofertaProducts.length === 0 ? (
        <p className="text-gray-400 text-center py-20">
          No hay productos en oferta por el momento.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ofertaProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default OfertasPage;