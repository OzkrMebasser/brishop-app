"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const PAGE_SIZE = 20;

const btnBase =
  "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200";
const btnActivo = "bg-brishop-700 text-white border-brishop-900";
const btnInactivo =
  "bg-white text-gray-600 border-gray-300 hover:border-gray-500 hover:text-gray-900";

const InventarioPage = () => {
  const noVendidos = products.filter((p) => !p.vendido);
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [currentPage, setCurrentPage] = useState(1);

  const categoriesWithStock = categories.filter((cat) =>
    noVendidos.some((p) => p.categoria === cat.id),
  );

  const filtered = useMemo(
    () =>
      activeCategory === "todos"
        ? noVendidos
        : noVendidos.filter((p) => p.categoria === activeCategory),
    [activeCategory, noVendidos],
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const fmt = (n: number) =>
    n.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 0,
    });

  const totalContado = filtered.reduce((sum, p) => sum + p.precioContado, 0);
  const totalCredito = filtered.reduce((sum, p) => sum + p.precioCredito, 0);

  // Genera el rango de páginas a mostrar (max 5 botones)
  const getPageRange = () => {
    const delta = 2;
    const range: number[] = [];
    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    return range;
  };

  return (
    <main className="container-custom py-24">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium text-gray-900">📦 Inventario</h1>
        <Link
          href="/total-ventas"
          className="text-sm px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-brishop-600 hover:text-white hover:border-brishop-600 transition-colors duration-200"
        >
          Ver Total Ventas →
        </Link>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => handleCategoryChange("todos")}
          className={`${btnBase} ${activeCategory === "todos" ? btnActivo : btnInactivo}`}
        >
          Todos <span className="opacity-60">{noVendidos.length}</span>
        </button>
        {categoriesWithStock.map((cat) => {
          const count = noVendidos.filter((p) => p.categoria === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`${btnBase} ${activeCategory === cat.id ? btnActivo : btnInactivo}`}
            >
              {cat.nombre} <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Totales — siempre visibles */}
      <div className="flex flex-wrap gap-4 mb-10">
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 min-w-[150px]">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Piezas
          </p>
          <p className="text-2xl font-semibold text-brishop-800">
            {filtered.length}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {activeCategory === "todos"
              ? "todas las categorías"
              : categoriesWithStock.find((c) => c.id === activeCategory)
                  ?.nombre}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 min-w-[150px]">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Valor contado
          </p>
          <p className="text-2xl font-semibold text-brishop-800">
            {fmt(totalContado)}
          </p>
          <p className="text-xs text-gray-400 mt-1">precio de contado</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 min-w-[150px]">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            Valor crédito
          </p>
          <p className="text-2xl font-semibold text-brishop-800">
            {fmt(totalCredito)}
          </p>
          <p className="text-xs text-gray-400 mt-1">precio de crédito</p>
        </div>
      </div>

      {/* Lista */}
      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-20">
          No hay productos en inventario para esta categoría.
        </p>
      ) : (
        <>
          {/* Info página */}
          <p className="text-sm text-gray-400 mb-4">
            Mostrando {(currentPage - 1) * PAGE_SIZE + 1}–
            {Math.min(currentPage * PAGE_SIZE, filtered.length)} de{" "}
            {filtered.length} productos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {paginated.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-3 hover:border-brishop-300 transition-colors"
              >
                <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100 relative">
                  <Image
                    src={product.imagen}
                    alt={product.nombre}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                    {product.categoria}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {product.nombre}
                  </p>
                  <p className="text-sm text-brishop-700 font-semibold mt-0.5">
                    {fmt(product.precioContado)}
                    {product.precioCredito !== product.precioContado && (
                      <span className="text-gray-400 text-xs font-normal ml-2">
                        / {fmt(product.precioCredito)} crédito
                      </span>
                    )}
                  </p>
                </div>
                <Link
                  href={`/producto/${product.id}`}
                  className="shrink-0 text-sm px-4 py-2 rounded-lg bg-brishop-600 hover:bg-brishop-700 text-white transition-colors duration-200"
                >
                  Ver
                </Link>
              </div>
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1">
              {/* Anterior */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg text-sm border border-gray-300 text-gray-600 hover:border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ←
              </button>

              {/* Primera página + ellipsis */}
              {getPageRange()[0] > 1 && (
                <>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="px-3 py-2 rounded-lg text-sm border border-gray-300 text-gray-600 hover:border-gray-500 transition-colors"
                  >
                    1
                  </button>
                  {getPageRange()[0] > 2 && (
                    <span className="px-2 text-gray-400">…</span>
                  )}
                </>
              )}

              {/* Rango central */}
              {getPageRange().map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                    page === currentPage
                      ? "bg-brishop-700 text-white border-brishop-900"
                      : "border-gray-300 text-gray-600 hover:border-gray-500"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Última página + ellipsis */}
              {getPageRange()[getPageRange().length - 1] < totalPages && (
                <>
                  {getPageRange()[getPageRange().length - 1] <
                    totalPages - 1 && (
                    <span className="px-2 text-gray-400">…</span>
                  )}
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className="px-3 py-2 rounded-lg text-sm border border-gray-300 text-gray-600 hover:border-gray-500 transition-colors"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              {/* Siguiente */}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg text-sm border border-gray-300 text-gray-600 hover:border-gray-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                →
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default InventarioPage;
