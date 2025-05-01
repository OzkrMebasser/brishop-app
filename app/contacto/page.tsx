import { products } from '@/data/products';
import ContactForm from '@/components/ContactForm';

export default function ContactPage({
  searchParams,
}: {
  searchParams: { producto?: string };
}) {
  const selectedProductId = searchParams.producto;

  // Filtra el producto seleccionado
  const selectedProduct = selectedProductId
    ? products.filter((product) => product.id === selectedProductId)
    : [];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <ContactForm
        selectedProductId={selectedProductId}
        products={selectedProduct} 
      />
    </div>
  );
}

export const dynamic = 'force-dynamic';


