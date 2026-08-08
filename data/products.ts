// data/products.ts
import { supabase } from "@/lib/supabase";


export interface Product {
  id: string;
  nombre: string;
  imagen: string;
  imagenes?: string[];
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
  talla?: string;
  enOferta?: boolean;
  precioOferta?: number;
  vendido?: boolean;
  oculto?: boolean; 
}


const calcNumAbonos = (precio: number): number => {
  if (precio <= 400) return 1;
  if (precio <= 500) return 2;
  if (precio <= 1000) return 3;
  if (precio <= 1500) return 4;
  return 5;
};

const mapRow = (row: any): Product => {
  const abonos = calcNumAbonos(row.precio_credito);
  return {
    id: row.id,
    nombre: row.nombre,
    imagen: row.imagen,
    imagenes: row.imagenes,
    descripcion: row.descripcion,
    precioContado: row.precio_contado,
    precioCredito: row.precio_credito,
    categoria: row.categoria,
    marca: row.marca,
    sexo: row.sexo,
    subCategoria: row.sub_categoria,
    destacado: row.destacado,
    nuevo: row.nuevo,
    talla: row.talla,
    enOferta: row.en_oferta,
    precioOferta: row.precio_oferta,
    vendido: row.vendido,
     oculto: row.oculto, 
    abonos,
    precioDesde: Math.ceil(row.precio_credito / abonos),
  };
};

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("oculto", false);
  if (error) throw error;
  return (data ?? []).map(mapRow);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("categoria", category)
    .eq("oculto", false);
  if (error) throw error;
  return (data ?? []).map(mapRow);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data ? mapRow(data) : undefined;
}

export async function searchProducts(query: string): Promise<Product[]> {
  const q = query.trim();
  if (!q) return [];
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("nombre", `%${q}%`)
    .eq("oculto", false);
  if (error) throw error;
  return (data ?? []).map(mapRow);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("destacado", true)
    .eq("oculto", false);
  if (error) throw error;
  return (data ?? []).map(mapRow);
}

// Trae TODOS los productos, incluidos los ocultos — solo para vistas internas
export async function getAllProductsAdmin(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw error;
  return (data ?? []).map(mapRow);
}

export async function updateProductOculto(id: string, oculto: boolean): Promise<void> {
  const { error } = await supabase
    .from("products")
    .update({ oculto })
    .eq("id", id);
  if (error) throw error;
}
// import slugify from "slugify";

// const toId = (nombre: string) => slugify(nombre, { lower: true, strict: true });

// const calcNumAbonos = (precio: number): number => {
//   if (precio <= 400) return 1;
//   if (precio <= 500) return 2;
//   if (precio <= 1000) return 3;
//   if (precio <= 1500) return 4;
//   return 5;
// };

// export interface Product {
//   id: string;
//   nombre: string;
//   imagen: string;
//   imagenes?: string[];
//   descripcion: string;
//   precioContado: number;
//   precioCredito: number;
//   categoria: string;
//   marca: string;
//   sexo: string;
//   subCategoria: string;
//   precioDesde: number;
//   abonos: number;
//   destacado?: boolean;
//   nuevo?: boolean;
//   talla?: string;
//   enOferta?: boolean;
//   precioOferta?: number;
//   vendido?: boolean;
// }

// type RawProduct = Omit<Product, "id" | "abonos" | "precioDesde">;

// const rawProducts: RawProduct[] = [
//   //BOLSAS
//   {
//     nombre: "Bolsa Steve Madden Donegal Negra",
//     imagen:
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776126799/10-Bolsa-Steve-Madden-Donegal-Negra-2_t4bbpa.webp",
//     imagenes: [
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776126799/10-Bolsa-Steve-Madden-Donegal-Negra-2_t4bbpa.webp",
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776126803/10-Bolsa-Steve-Madden-Donegal-Negra-1_kpoysr.webp",
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776126801/10-Bolsa-Steve-Madden-Donegal-Negra-3_jsxvhh.webp",
//     ],
//     descripcion:
//       "Descubre la sofisticación del modelo Donegal Satchel de Steve Madden. Su diseño estructurado en color negro profundo y los herrajes oscuros tipo gunmetal crean un look minimalista y ultra moderno.",
//     precioContado: 2400,
//     precioCredito: 2750,
//     categoria: "bolsas",
//     marca: "Steve Madden",
//     sexo: "dama",
//     subCategoria: "satchel",
//     enOferta: false,
//     precioOferta: 0,
//   },
//   {
//     nombre: "Bolsa Aldo Auraliee Print Mini",
//     imagen:
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776127324/11-Bolsa-Aldo-Auraliee-Print-Mini_i6bjba.webp",
//     imagenes: [
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776127324/11-Bolsa-Aldo-Auraliee-Print-Mini_i6bjba.webp",
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776127334/11-Bolsa-Aldo-Auraliee-Print-Mini-2_gcsw1s.webp",
//     ],
//     descripcion:
//       "Eleva cualquier outfit básico con la impresionante bolsa Auraliee. Su estampado de cebra en tonos tierra y negro es la dosis perfecta de audacia para tu clóset. Incluye un mini charm removible que le da ese toque moderno y único que solo Aldo sabe ofrecer. ¡El accesorio ideal para la mujer que no teme destacar!",
//     precioContado: 1200,
//     precioCredito: 1500,
//     categoria: "bolsas",
//     marca: "Aldo",
//     sexo: "dama",
//     subCategoria: "tote",
//     enOferta: false,
//     precioOferta: 0,
//   },
//   {
//     nombre: "Bolsa Steve Madden en color borgoña",
//     imagen:
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776130882/14-Bolsa-Steve-Madden-Caballito_wrklc8.jpg",
//     imagenes: [
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776130882/14-Bolsa-Steve-Madden-Caballito_wrklc8.jpg",
//     ],
//     descripcion:
//       "Eleva tu look al instante con esta impresionante bolsa Steve Madden. Su tono vino profundo y los detalles dorados, incluyendo el icónico dije de caballito, crean un aire de sofisticación ecuestre único. Es el accesorio perfecto para quienes buscan destacar con un estilo clásico, lujoso y lleno de personalidad. ¡Un sueño hecho bolso!",
//     precioContado: 2200,
//     precioCredito: 2499,
//     categoria: "bolsas",
//     marca: "Steve Madden",
//     sexo: "dama",
//     subCategoria: "satchel",
//     enOferta: true,
//     precioOferta: 1499,
//     vendido: false,
//   },
//   {
//     nombre: "Mochila Tommy Hilfiger Holograma Beige",
//     imagen:
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776131750/15-Mochila-Tommy-Hilfiger-Holograma-Beige-1_ielx9n.webp",
//     imagenes: [
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776131750/15-Mochila-Tommy-Hilfiger-Holograma-Beige-1_ielx9n.webp",
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776131748/15-Mochila-Tommy-Hilfiger-Holograma-Beige-2_sxowmb.webp",
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776131747/15-Mochila-Tommy-Hilfiger-Holograma-Beige-3_ylalu4.webp",
//     ],
//     descripcion:
//       "Añade un básico de alta gama a tu colección con este diseño urbano y moderno. Esta mochila combina una estructura práctica con acabados premium para mantener tus pertenencias organizadas con mucho estilo.",
//     precioContado: 1500,
//     precioCredito: 1850,
//     categoria: "bolsas",
//     marca: "Tommy Hilfiger",
//     sexo: "dama",
//     subCategoria: "backpack",
//     enOferta: true,
//     precioOferta: 1250,
//     vendido: false
//   },
//   {
//     nombre: "Bolsa Steve Madden BKandice",
//     imagen:
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776135192/17-BolsaSteve-Madden-BKandice-1_v9vt4o.jpg",
//     imagenes: [
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776135192/17-BolsaSteve-Madden-BKandice-1_v9vt4o.jpg",
//       "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776135193/17-BolsaSteve-Madden-BKandice-2_woyd45.jpg",
//     ],
//     descripcion:
//       "Enamórate de la versión mini del modelo BKandice de Steve Madden. Este bolso estructurado es la pieza maestra que le falta a tu clóset. Su combinación de blanco crema y café chocolate, rematada con ese imponente herraje metálico, proyecta un estilo de lujo total. Es pequeña, compacta y ultra sofisticada. ¡El accesorio perfecto para tus fotos de impacto!",
//     precioContado: 1200,
//     precioCredito: 1499,
//     categoria: "bolsas",
//     marca: "Steve Madden",
//     sexo: "dama",
//     subCategoria: "crossbody",
//     enOferta: false,
//     precioOferta: 0,
//     vendido: false
//   },
// ];

// export const products: Product[] = rawProducts.map((p) => ({
//   ...p,
//   id: toId(p.nombre),
//   abonos: calcNumAbonos(p.precioCredito),
//   precioDesde: Math.ceil(p.precioCredito / calcNumAbonos(p.precioCredito)),
// }));

// export const getProductsByCategory = (category: string): Product[] => {
//   return products.filter((product) => product.categoria === category);
// };

// export const getFeaturedProducts = (): Product[] => {
//   return products.filter((product) => product.destacado);
// };

// export const getNewProducts = (): Product[] => {
//   return products.filter((product) => product.nuevo);
// };

// export const getProductById = (id: string): Product | undefined => {
//   return products.find((product) => product.id === id);
// };

// export const searchProducts = (query: string): Product[] => {
//   const q = query.toLowerCase().trim();
//   if (!q) return [];
//   return products.filter((product) => product.nombre.toLowerCase().includes(q));
// };
