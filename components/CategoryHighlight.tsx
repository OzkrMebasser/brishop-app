import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";

const CategoryHighlight = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Explora Nuestras Categorías</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra lo que buscas navegando por nuestras categorías seleccionadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/categoria/${category.id}`}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative h-80 block"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <Image
                src={category.imagen}
                alt={category.nombre}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{category.nombre}</h3>
                <p className="text-sm text-white/90 mb-4 line-clamp-2">{category.descripcion}</p>
                <span className="inline-block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-2 px-4 rounded-md transition-colors duration-300">
                  Ver productos
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlight;