export interface Product {
  id: string;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  categoria: string;
  destacado?: boolean;
  nuevo?: boolean;
}

export const products: Product[] = [
  // Bolsas de mujer
  {
    id: 'bag-001',
    nombre: 'Bolso Elegante Púrpura',
    imagen: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Bolso elegante en tono púrpura con detalles dorados, perfecto para ocasiones especiales.',
    precio: 1299,
    categoria: 'bolsas-de-mujer',
    destacado: true
  },
  {
    id: 'bag-002',
    nombre: 'Bolso Casual Diario',
    imagen: 'https://images.pexels.com/photos/5699645/pexels-photo-5699645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Bolso casual para uso diario, espacioso y con múltiples compartimentos.',
    precio: 899,
    categoria: 'bolsas-de-mujer',
  },
  {
    id: 'bag-003',
    nombre: 'Bolso Mini Crossbody',
    imagen: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Bolso pequeño tipo crossbody con correa ajustable, ideal para salidas informales.',
    precio: 649,
    categoria: 'bolsas-de-mujer',
    nuevo: true
  },

  // Perfumes
  {
    id: 'perfume-001',
    nombre: 'Esencia de Lavanda',
    imagen: 'https://images.pexels.com/photos/12188029/pexels-photo-12188029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Perfume con notas de lavanda y vainilla, fragancia duradera y elegante.',
    precio: 1499,
    categoria: 'perfumes',
    destacado: true
  },
  {
    id: 'perfume-002',
    nombre: 'Aroma Floral Intenso',
    imagen: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Perfume con intensas notas florales, ideal para ocasiones especiales.',
    precio: 1899,
    categoria: 'perfumes',
  },
  {
    id: 'perfume-003',
    nombre: 'Frescura Cítrica',
    imagen: 'https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Perfume con notas cítricas refrescantes, perfecto para uso diario.',
    precio: 1199,
    categoria: 'perfumes',
    nuevo: true
  },

  // Tenis
  {
    id: 'tenis-001',
    nombre: 'Tenis Deportivos Urban',
    imagen: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Tenis deportivos con diseño urbano, cómodos y ligeros para uso diario.',
    precio: 999,
    categoria: 'tenis',
    destacado: true
  },
  {
    id: 'tenis-002',
    nombre: 'Tenis Running Pro',
    imagen: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Tenis profesionales para correr con amortiguación avanzada.',
    precio: 1499,
    categoria: 'tenis',
  },
  {
    id: 'tenis-003',
    nombre: 'Tenis Casuales Fashion',
    imagen: 'https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Tenis casuales con estilo moderno, perfectos para combinar con cualquier outfit.',
    precio: 1299,
    categoria: 'tenis',
    nuevo: true
  },

  // Zapatos
  {
    id: 'zapatos-001',
    nombre: 'Tacones Elegantes',
    imagen: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Tacones elegantes con acabado en punta, perfectos para eventos formales.',
    precio: 1299,
    categoria: 'zapatos',
    destacado: true
  },
  {
    id: 'zapatos-002',
    nombre: 'Botines de Cuero',
    imagen: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Botines de cuero genuino con detalle de hebilla, estilo atemporal.',
    precio: 1799,
    categoria: 'zapatos',
  },
  {
    id: 'zapatos-003',
    nombre: 'Sandalias Veraniegas',
    imagen: 'https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Sandalias ligeras y cómodas, ideales para la temporada de verano.',
    precio: 749,
    categoria: 'zapatos',
    nuevo: true
  },

  // Camisas
  {
    id: 'camisa-001',
    nombre: 'Blusa Elegante Lila',
    imagen: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Blusa en tono lila con detalles delicados, perfecta para ocasiones especiales.',
    precio: 699,
    categoria: 'camisas',
    destacado: true
  },
  {
    id: 'camisa-002',
    nombre: 'Camisa Casual Rayada',
    imagen: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Camisa casual con patrón de rayas, fresca y cómoda para uso diario.',
    precio: 549,
    categoria: 'camisas',
  },
  {
    id: 'camisa-003',
    nombre: 'Blusa Formal Elegante',
    imagen: 'https://images.pexels.com/photos/6764029/pexels-photo-6764029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Blusa formal con diseño elegante, ideal para entornos profesionales.',
    precio: 799,
    categoria: 'camisas',
    nuevo: true
  },

  // Pantalones
  {
    id: 'pantalon-001',
    nombre: 'Jeans Skinny Premium',
    imagen: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Jeans skinny de alta calidad con ajuste perfecto y acabado premium.',
    precio: 899,
    categoria: 'pantalones',
    destacado: true
  },
  {
    id: 'pantalon-002',
    nombre: 'Pantalón Formal Elegante',
    imagen: 'https://images.pexels.com/photos/6764507/pexels-photo-6764507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Pantalón formal con corte elegante, ideal para entornos profesionales.',
    precio: 1099,
    categoria: 'pantalones',
  },
  {
    id: 'pantalon-003',
    nombre: 'Shorts Casual Verano',
    imagen: 'https://images.pexels.com/photos/4947741/pexels-photo-4947741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Shorts casuales y cómodos, perfectos para los días cálidos de verano.',
    precio: 499,
    categoria: 'pantalones',
    nuevo: true
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.categoria === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.destacado);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.nuevo);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};