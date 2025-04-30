export interface Category {
  id: string;
  nombre: string;
  imagen: string;
  descripcion: string;
}

export const categories: Category[] = [
  {
    id: 'bolsas-de-mujer',
    nombre: 'Bolsas de Mujer',
    imagen: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Explora nuestra colección de bolsas y encuentra la que mejor se adapte a tu estilo.',
  },
  {
    id: 'perfumes',
    nombre: 'Perfumes',
    imagen: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Descubre fragancias exclusivas que te harán destacar en cualquier ocasión.',
  },
  {
    id: 'tenis',
    nombre: 'Tenis',
    imagen: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Comodidad y estilo para tus pies con nuestra selección de tenis.',
  },
  {
    id: 'zapatos',
    nombre: 'Zapatos',
    imagen: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Elegancia en cada paso con nuestra colección de zapatos exclusivos.',
  },
  {
    id: 'camisas',
    nombre: 'Camisas',
    imagen: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Viste con estilo con nuestra selección de camisas para todas las ocasiones.',
  },
  {
    id: 'pantalones',
    nombre: 'Pantalones',
    imagen: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Completa tu look con nuestros pantalones de alta calidad y diseño moderno.',
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};