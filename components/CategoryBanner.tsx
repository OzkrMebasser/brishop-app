import Image from 'next/image';
import { Category } from '@/data/categories';

interface CategoryBannerProps {
  category: Category;
}

const CategoryBanner = ({ category }: CategoryBannerProps) => {
  return (
    <div className="relative h-64 md:h-80 w-full overflow-hidden">
      <Image
        src={category.imagen}
        alt={category.nombre}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{category.nombre}</h1>
          <p className="max-w-xl mx-auto text-sm md:text-base lg:text-lg">{category.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;