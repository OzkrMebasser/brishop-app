// app/favoritos/page.tsx
"use client";
import { useFavorites } from "@/hooks/useFavorites";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const FavoritosPage = () => {
  const { favorites } = useFavorites();
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <main className="container-custom py-24">
      <h1 className="text-2xl font-medium text-gray-900 mb-8">Mis favoritos</h1>

      {favoriteProducts.length === 0 ? (
        <p className="text-gray-400 text-center py-20">
          Aún no tienes productos favoritos.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default FavoritosPage;