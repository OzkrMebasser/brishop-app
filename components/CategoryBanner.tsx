"use client";

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Category } from '@/data/categories';

interface CategoryBannerProps {
  category: Category;
}

const CategoryBanner = ({ category }: CategoryBannerProps) => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Mobile */}
      <Image
        src={category.imagenMobile}
        alt={category.nombre}
        fill
        sizes="100vw"
        priority
        className="object-cover object-center md:hidden"
      />
      {/* Desktop */}
      <Image
        src={category.imagen}
        alt={category.nombre}
        fill
        sizes="100vw"
        priority
        className="object-cover object-center hidden md:block"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{category.nombre}</h1>
          <p className="max-w-5xl mx-auto text-base md:text-base lg:text-lg">{category.descripcion}</p>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-32 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors duration-300 group"
        aria-label="Scroll hacia abajo"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </div>
  );
};

export default CategoryBanner;