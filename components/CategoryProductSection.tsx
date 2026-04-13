"use client";
import { useState, useMemo } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

const btnBase =
  "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200";
const btnActivo = "bg-brishop-700 text-white border-brishop-900";
const btnInactivo =
  "bg-white text-gray-600 border-gray-300 hover:border-gray-500 hover:text-gray-900";

export default function CategoryProductSection({ products }: { products: Product[] }) {
  const [marcaActiva, setMarcaActiva] = useState<string | null>(null);
  const [subCatActiva, setSubCatActiva] = useState<string | null>(null);
  const [sexoActivo, setSexoActivo] = useState<string | null>(null);
  const [tallaActiva, setTallaActiva] = useState<string | null>(null);

  const marcas = useMemo(() => [...new Set(products.map((p) => p.marca))], [products]);
  const subCategorias = useMemo(() => [...new Set(products.map((p) => p.subCategoria))], [products]);
  const sexos = useMemo(() => [...new Set(products.map((p) => p.sexo))], [products]);
const tallas = useMemo(() => {
  const todas = products.map((p) => p.talla).filter(Boolean) as string[];
  return [...new Set(todas)].sort((a, b) => parseFloat(a) - parseFloat(b));
}, [products]);

  const filtrados = useMemo(() => {
    return products.filter((p) => {
      const porMarca = marcaActiva ? p.marca === marcaActiva : true;
      const porSub = subCatActiva ? p.subCategoria === subCatActiva : true;
      const porSexo = sexoActivo ? p.sexo === sexoActivo : true;
      const porTalla = tallaActiva ? p.talla === tallaActiva : true;
      return porMarca && porSub && porSexo && porTalla;
    });
  }, [products, marcaActiva, subCatActiva, sexoActivo, tallaActiva]);

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="space-y-3">

        {/* Género */}
        {sexos.length > 1 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide w-full sm:w-auto">Género</span>
            <button onClick={() => setSexoActivo(null)} className={`${btnBase} ${sexoActivo === null ? btnActivo : btnInactivo}`}>Todos</button>
            {sexos.map((sexo) => (
              <button key={sexo} onClick={() => setSexoActivo(sexoActivo === sexo ? null : sexo)}
                className={`${btnBase} ${sexoActivo === sexo ? btnActivo : btnInactivo}`}>
                {sexo.charAt(0).toUpperCase() + sexo.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Subcategoría */}
        {subCategorias.length > 1 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide w-full sm:w-auto">Tipo</span>
            <button onClick={() => setSubCatActiva(null)} className={`${btnBase} ${subCatActiva === null ? btnActivo : btnInactivo}`}>Todos</button>
            {subCategorias.map((sub) => (
              <button key={sub} onClick={() => setSubCatActiva(subCatActiva === sub ? null : sub)}
                className={`${btnBase} ${subCatActiva === sub ? btnActivo : btnInactivo}`}>
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Talla */}
        {tallas.length > 1 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide w-full sm:w-auto">Talla</span>
            <button onClick={() => setTallaActiva(null)} className={`${btnBase} ${tallaActiva === null ? btnActivo : btnInactivo}`}>Todas</button>
            {tallas.map((talla) => (
              <button key={talla} onClick={() => setTallaActiva(tallaActiva === talla ? null : talla)}
                className={`${btnBase} ${tallaActiva === talla ? btnActivo : btnInactivo}`}>
                {talla}
              </button>
            ))}
          </div>
        )}

        {/* Marca */}
        {marcas.length > 1 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide w-full sm:w-auto">Marca</span>
            <button onClick={() => setMarcaActiva(null)} className={`${btnBase} ${marcaActiva === null ? btnActivo : btnInactivo}`}>Todas</button>
            {marcas.map((marca) => (
              <button key={marca} onClick={() => setMarcaActiva(marcaActiva === marca ? null : marca)}
                className={`${btnBase} ${marcaActiva === marca ? btnActivo : btnInactivo}`}>
                {marca}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Contador */}
      <p className="text-sm text-gray-400">
        {filtrados.length} {filtrados.length === 1 ? "producto" : "productos"}
      </p>

      {/* Grid */}
      {filtrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filtrados.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 py-16">Sin productos con los filtros seleccionados.</p>
      )}
    </div>
  );
}