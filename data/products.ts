import slugify from "slugify";

const toId = (nombre: string) =>
  slugify(nombre, { lower: true, strict: true });

const calcNumAbonos = (precio: number): number => {
  if (precio <= 500) return 2;
  if (precio <= 1000) return 3;
  if (precio <= 1500) return 4;
  return 5;
};

export interface Product {
  id: string;
  nombre: string;
  imagen: string;
  descripcion: string;
  precioContado: number;
  precioCredito: number;
  categoria: string;
  marca: string;
  sexo: string;
  subCategoria: string;
  precioDesde: number;
  abonos: number;
  destacado?: boolean;
  nuevo?: boolean;
}

type RawProduct = Omit<Product, "id" | "abonos" | "precioDesde">;

const rawProducts: RawProduct[] = [
  // Bolsas
  {
    nombre: "Bolso Elegante Púrpura",
    imagen: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Bolso elegante en tono púrpura con detalles dorados, perfecto para ocasiones especiales.",
    precioContado: 1199.99,
    precioCredito: 1299.99,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "Satchel",
    destacado: true,
  },
  {
    nombre: "Bolso Casual Diario",
    imagen: "https://images.pexels.com/photos/5699645/pexels-photo-5699645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Bolso casual para uso diario, espacioso y con múltiples compartimentos.",
    precioContado: 799,
    precioCredito: 899,
    categoria: "bolsas",
    marca: "Coach",
    sexo: "dama",
    subCategoria: "Tote",
  },
  {
    nombre: "Bolso Mini Crossbody",
    imagen: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Bolso pequeño tipo crossbody con correa ajustable, ideal para salidas informales.",
    precioContado: 549,
    precioCredito: 649,
    categoria: "bolsas",
    marca: "Michael Kors",
    sexo: "dama",
    subCategoria: "Crossbody",
    nuevo: true,
  },
  {
    nombre: "Mochila Urbana Hombre",
    imagen: "https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Mochila resistente con diseño urbano y múltiples compartimentos.",
    precioContado: 899,
    precioCredito: 999,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "caballero",
    subCategoria: "Mochila",
    nuevo: true,
  },
  {
    nombre: "Bolso Clutch Noche",
    imagen: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Clutch elegante para salidas nocturnas, con cierre dorado.",
    precioContado: 499,
    precioCredito: 599,
    categoria: "bolsas",
    marca: "Coach",
    sexo: "dama",
    subCategoria: "Clutch",
    destacado: true,
  },

  // Perfumes
  {  
    //subido
    nombre: "Guess Seductive Homme Blue",
    imagen: "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961756/01-Guess-Seductive-Homme-Blue_tk2dvx.jpg",
    descripcion: "Guess Seductive Homme Blue es una fragancia de la familia Amaderada Acuática. Es ampliamente reconocida en la comunidad de fragancias por ser una alternativa económica, con un perfil  fresco y marino. ",
    precioContado: 1100,
    precioCredito: 1300,
    categoria: "perfumes",
    marca: "Guess",
    sexo: "caballero",
    subCategoria: "Amaderado",
    destacado: true,
  },
  {
    //
    nombre: "Nautica Voyage Sport",
    imagen: "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961756/02-Nautica-Voyage-Sport_yyf0rk.jpg",
    descripcion: "Nautica Voyage Sport es una fragancia de la familia Cítrica Aromática, diseñada para el hombre activo. Es una alternativa fresca que mezcla notas marinas con cítricos vibrantes y un fondo amaderado. Es ideal para el gimnasio o días calurosos, ofreciendo una sensación de limpieza energética a un precio muy competitivo.",
    precioContado: 600,
    precioCredito: 850,
    categoria: "perfumes",
    marca: "Nautica",
    sexo: "caballero",
    subCategoria: "Floral",
  },
  {
    nombre: "Frescura Cítrica",
    imagen: "https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Perfume con notas cítricas refrescantes, perfecto para uso diario.",
    precioContado: 999,
    precioCredito: 1199,
    categoria: "perfumes",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "Frutal",
    nuevo: true,
  },
  {
    nombre: "Noir Masculino",
    imagen: "https://images.pexels.com/photos/3970382/pexels-photo-3970382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Perfume masculino con notas amaderadas y especiadas, sofisticado y duradero.",
    precioContado: 1399,
    precioCredito: 1599,
    categoria: "perfumes",
    marca: "Michael Kors",
    sexo: "caballero",
    subCategoria: "Amaderado",
    destacado: true,
  },
  {
    nombre: "Sport Blue",
    imagen: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Fragancia fresca y deportiva para el hombre activo.",
    precioContado: 899,
    precioCredito: 999,
    categoria: "perfumes",
    marca: "Guess",
    sexo: "caballero",
    subCategoria: "Fresco",
    nuevo: true,
  },

  // Calzado
  {
    nombre: "Tenis Deportivos Urban",
    imagen: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Tenis deportivos con diseño urbano, cómodos y ligeros para uso diario.",
    precioContado: 899,
    precioCredito: 999,
    categoria: "calzado",
    marca: "Nike",
    sexo: "caballero",
    subCategoria: "Tenis",
    destacado: true,
  },
  {
    nombre: "Tenis Running Pro",
    imagen: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Tenis profesionales para correr con amortiguación avanzada.",
    precioContado: 1299,
    precioCredito: 1499,
    categoria: "calzado",
    marca: "Adidas",
    sexo: "dama",
    subCategoria: "Tenis",
  },
  {
    nombre: "Tenis Casuales Fashion",
    imagen: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Tenis casuales con estilo moderno, perfectos para combinar con cualquier outfit.",
    precioContado: 1099,
    precioCredito: 1299,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "Tenis",
    nuevo: true,
  },
  {
    nombre: "Tacones Elegantes",
    imagen: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Tacones elegantes con acabado en punta, perfectos para eventos formales.",
    precioContado: 1099,
    precioCredito: 1299,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "Tacones",
    destacado: true,
  },
  {
    nombre: "Botines de Cuero",
    imagen: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Botines de cuero genuino con detalle de hebilla, estilo atemporal.",
    precioContado: 1599,
    precioCredito: 1799,
    categoria: "calzado",
    marca: "Coach",
    sexo: "dama",
    subCategoria: "Botines",
  },
  {
    nombre: "Sandalias Veraniegas",
    imagen: "https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Sandalias ligeras y cómodas, ideales para la temporada de verano.",
    precioContado: 649,
    precioCredito: 749,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "Sandalias",
    nuevo: true,
  },
  {
    nombre: "Mocasines Casuales",
    imagen: "https://images.pexels.com/photos/1174735/pexels-photo-1174735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Mocasines cómodos y elegantes para uso casual o semiformales.",
    precioContado: 999,
    precioCredito: 1099,
    categoria: "calzado",
    marca: "Coach",
    sexo: "caballero",
    subCategoria: "Mocasines",
    nuevo: true,
  },

  // Ropa
  {
    nombre: "Blusa Elegante Lila",
    imagen: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Blusa en tono lila con detalles delicados, perfecta para ocasiones especiales.",
    precioContado: 599,
    precioCredito: 699,
    categoria: "ropa",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "Blusas",
    destacado: true,
  },
  {
    nombre: "Camisa Casual Rayada",
    imagen: "https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Camisa casual con patrón de rayas, fresca y cómoda para uso diario.",
    precioContado: 449,
    precioCredito: 549,
    categoria: "ropa",
    marca: "Guess",
    sexo: "caballero",
    subCategoria: "Camisas",
  },
  {
    nombre: "Blusa Formal Elegante",
    imagen: "https://images.pexels.com/photos/6764029/pexels-photo-6764029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Blusa formal con diseño elegante, ideal para entornos profesionales.",
    precioContado: 699,
    precioCredito: 799,
    categoria: "ropa",
    marca: "Michael Kors",
    sexo: "dama",
    subCategoria: "Blusas",
    nuevo: true,
  },
  {
    nombre: "Jeans Skinny Premium",
    imagen: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Jeans skinny de alta calidad con ajuste perfecto y acabado premium.",
    precioContado: 799,
    precioCredito: 899,
    categoria: "ropa",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "Jeans",
    destacado: true,
  },
  {
    nombre: "Pantalón Formal Elegante",
    imagen: "https://images.pexels.com/photos/6764507/pexels-photo-6764507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Pantalón formal con corte elegante, ideal para entornos profesionales.",
    precioContado: 999,
    precioCredito: 1099,
    categoria: "ropa",
    marca: "Michael Kors",
    sexo: "caballero",
    subCategoria: "Pantalones",
  },
  {
    nombre: "Shorts Casual Verano",
    imagen: "https://images.pexels.com/photos/4947741/pexels-photo-4947741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descripcion: "Shorts casuales y cómodos, perfectos para los días cálidos de verano.",
    precioContado: 399,
    precioCredito: 499,
    categoria: "ropa",
    marca: "Guess",
    sexo: "caballero",
    subCategoria: "Shorts",
    nuevo: true,
  },
];

export const products: Product[] = rawProducts.map((p) => ({
  ...p,
  id: toId(p.nombre),
  abonos: calcNumAbonos(p.precioCredito),
  precioDesde: Math.ceil(p.precioCredito / calcNumAbonos(p.precioCredito)),
}));

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.categoria === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.destacado);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.nuevo);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter((product) =>
    product.nombre.toLowerCase().includes(q)
  );
};