export interface Category {
  id: string;
  nombre: string;
  imagen: string;
  descripcion: string;
}

export const categories: Category[] = [
  {
    id: 'bolsas',
    nombre: 'Bolsas',
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
    id: 'calzado',
    nombre: 'Calzado',
    imagen: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Elegancia en cada paso con nuestra colección de calzado exclusivo.',
  },
  {
    id: 'ropa',
    nombre: 'Ropa',
    imagen: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Viste con estilo con nuestra selección de ropa para todas las ocasiones.',
  },
  {
    id: 'accesorios',
    nombre: 'Accesorios',
    imagen: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion: 'Completa tu look con nuestros accesorios de alta calidad y diseño moderno.',
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};