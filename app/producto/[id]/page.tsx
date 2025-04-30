import { Metadata } from 'next';
import { products, getProductById } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';
import RelatedProducts from '@/components/RelatedProducts';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductById(params.id);
  
  return {
    title: product ? `${product.nombre} | BRISHOP` : 'Producto | BRISHOP',
    description: product?.descripcion || 'Descubre nuestros productos',
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-2xl font-semibold mb-4">Producto no encontrado</h1>
        <p className="text-gray-600 mb-6">El producto que estás buscando no existe.</p>
        <a href="/" className="btn-primary">
          Volver al Inicio
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <ProductDetail product={product} />
      <RelatedProducts currentProductId={product.id} category={product.categoria} />
    </div>
  );
}