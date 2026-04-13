import { Metadata } from 'next';
import { categories, getCategoryById } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import CategoryProductSection from '@/components/CategoryProductSection';
import CategoryBanner from '@/components/CategoryBanner';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryById(params.id);
  
  return {
    title: category ? `${category.nombre} | BRISHOP` : 'Categoría | BRISHOP',
    description: category?.descripcion || 'Descubre nuestros productos',
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.id);
  const products = getProductsByCategory(params.id);

  if (!category) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-2xl font-semibold mb-4">Categoría no encontrada</h1>
        <p className="text-gray-600 mb-6">La categoría que estás buscando no existe.</p>
        <a href="/" className="btn-primary">
          Volver al Inicio
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-0">
      <CategoryBanner category={category} />
      
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl font-semibold mb-8">{category.nombre}</h1>
          
          {products.length > 0 ? (
            <CategoryProductSection products={products} />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 mb-4">No hay productos disponibles en esta categoría.</p>
              <p className="text-gray-600">Por favor, revisa más tarde para ver nuevos productos.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}