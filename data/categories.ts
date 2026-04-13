export interface Category {
  id: string;
  nombre: string;
  imagen: string;
  imagenMobile: string;
  descripcion: string;
}

export const categories: Category[] = [
  {
    id: 'bolsas',
    nombre: 'Bolsas',
    imagen: 'https://images.pexels.com/photos/21897313/pexels-photo-21897313.jpeg?_gl=1*j08ekf*_ga*Njc5NjE5OTk4LjE3NzU5NzYxMTA.*_ga_8JE65Q40S6*czE3NzU5NzYxMTAkbzEkZzEkdDE3NzU5Nzc0ODQkajEyJGwwJGgw',
    imagenMobile: 'https://images.pexels.com/photos/21897132/pexels-photo-21897132.jpeg?_gl=1*121io6j*_ga*Njc5NjE5OTk4LjE3NzU5NzYxMTA.*_ga_8JE65Q40S6*czE3NzU5NzYxMTAkbzEkZzEkdDE3NzU5Nzc4MzgkajYwJGwwJGgw',
    descripcion: 'Explora nuestra colección de bolsas y encuentra la que mejor se adapte a tu estilo.',
  },
  {
    id: 'perfumes',
    nombre: 'Perfumes',
    imagen: 'https://images.pexels.com/photos/22589377/pexels-photo-22589377.jpeg?_gl=1*pi6zqh*_ga*Njc5NjE5OTk4LjE3NzU5NzYxMTA.*_ga_8JE65Q40S6*czE3NzU5NzYxMTAkbzEkZzEkdDE3NzU5NzgzMjEkajMkbDAkaDA.',
    imagenMobile: 'https://images.pexels.com/photos/22589349/pexels-photo-22589349.jpeg?_gl=1*59e0pv*_ga*Njc5NjE5OTk4LjE3NzU5NzYxMTA.*_ga_8JE65Q40S6*czE3NzU5NzYxMTAkbzEkZzEkdDE3NzU5NzgyODEkajQzJGwwJGgw',
    descripcion: 'Descubre fragancias exclusivas que te harán destacar en cualquier ocasión.',
  },
  {
    id: 'calzado',
    nombre: 'Calzado',
    imagen: 'https://images.pexels.com/photos/11891660/pexels-photo-11891660.jpeg?_gl=1*1of8hcx*_ga*Njc5NjE5OTk4LjE3NzU5NzYxMTA.*_ga_8JE65Q40S6*czE3NzU5NzYxMTAkbzEkZzEkdDE3NzU5Nzk3MjUkajgkbDAkaDA.',
    imagenMobile: 'https://images.pexels.com/photos/11891660/pexels-photo-11891660.jpeg?_gl=1*1of8hcx*_ga*Njc5NjE5OTk4LjE3NzU5NzYxMTA.*_ga_8JE65Q40S6*czE3NzU5NzYxMTAkbzEkZzEkdDE3NzU5Nzk3MjUkajgkbDAkaDA.',
    descripcion: 'Elegancia en cada paso con nuestra colección de calzado exclusivo.',
  },
  {
    id: 'ropa',
    nombre: 'Ropa',
    imagen: 'https://images.pexels.com/photos/9728443/pexels-photo-9728443.jpeg?_gl=1*1oqd590*_ga*Njc5NjE5OTk4LjE3NzU5NzYxMTA.*_ga_8JE65Q40S6*czE3NzYwMzczMDYkbzQkZzEkdDE3NzYwMzgyMjgkajU5JGwwJGgw',
    imagenMobile: 'https://images.pexels.com/photos/9728446/pexels-photo-9728446.jpeg?_gl=1*1hjbntn*_ga*Njc5NjE5OTk4LjE3NzU5NzYxMTA.*_ga_8JE65Q40S6*czE3NzYwMzczMDYkbzQkZzEkdDE3NzYwMzg1MzAkajYwJGwwJGgw',
    descripcion: 'Viste con estilo con nuestra selección de ropa para todas las ocasiones.',
  },
  {
    id: 'accesorios',
    nombre: 'Accesorios',
    imagen: 'https://images.pexels.com/photos/4971354/pexels-photo-4971354.jpeg?_gl=1*15wtu39*_ga*Njc5NjE5OTk4LjE3NzU5NzYxMTA.*_ga_8JE65Q40S6*czE3NzYwMzczMDYkbzQkZzEkdDE3NzYwMzk2NTEkajU5JGwwJGgw',
    imagenMobile: 'https://images.pexels.com/photos/4971354/pexels-photo-4971354.jpeg?_gl=1*15wtu39*_ga*Njc5NjE5OTk4LjE3NzU5NzYxMTA.*_ga_8JE65Q40S6*czE3NzYwMzczMDYkbzQkZzEkdDE3NzYwMzk2NTEkajU5JGwwJGgw',
    descripcion: 'Completa tu look con nuestros accesorios de alta calidad y diseño moderno.',
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};