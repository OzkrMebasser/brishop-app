

import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | BRISHOP',
  description: 'Contáctanos para más información sobre nuestros productos',
};

export default function ContactPage({ 
  searchParams 
}: { 
  searchParams: { producto?: string } 
}) {
  const selectedProductId = searchParams.producto;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Contáctanos</h1>
          <p className="text-gray-600 mb-10 text-center">
            Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
          
          <ContactForm selectedProductId={selectedProductId} />
        </div>
      </div>
    </div>
  );
}

// This is a dynamic route, so we need to set the dynamic export option
export const dynamic = 'force-dynamic';