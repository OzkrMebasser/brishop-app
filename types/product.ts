// types/product.ts
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
}