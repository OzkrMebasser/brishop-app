import slugify from "slugify";

const toId = (nombre: string) => slugify(nombre, { lower: true, strict: true });

const calcNumAbonos = (precio: number): number => {
  if (precio <= 400) return 1;
  if (precio <= 500) return 2;
  if (precio <= 1000) return 3;
  if (precio <= 1500) return 4;
  return 5;
};

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
}

type RawProduct = Omit<Product, "id" | "abonos" | "precioDesde">;

const rawProducts: RawProduct[] = [
  // Bolsas

  {
    nombre: "Bolsa Aldo Mellowbag Negra Satchel",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776117812/01-bolsa-aldo-frente_vpakcl.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776117812/01-bolsa-aldo-frente_vpakcl.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776117823/02-Bolsa-Aldo-lado_qm9g7p.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776126670/03-bolsa-aldo-Aldo-Mellowbag-Negra-Satchel_tdsxyj.webp",
    ],
    descripcion:
      "Eleva tu estilo con la Aldo Mellowbag. Su diseño estructurado en negro con herrajes dorados es el balance perfecto entre elegancia y modernidad. Incluye un exclusivo mini monedero removible, ideal para la mujer que desea lucir esenciales siempre con estilo. ¡La pieza clave que te faltaba a tu look!",
    precioContado: 1200,
    precioCredito: 1499,
    categoria: "bolsas",
    marca: "Aldo",
    sexo: "dama",
    subCategoria: "satchel",
  },
  {
    nombre: "Bolsa Aldo Baander Negra",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776118351/01-Bolsa-Aldo-Baander-Negra-frente_kejl8o.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776118351/01-Bolsa-Aldo-Baander-Negra-frente_kejl8o.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776118357/02-Bolsa-Aldo-Baander-Negra-colgada_pxnwqh.jpg",
    ],
    descripcion:
      "Lujo minimalista para el día a día. Menos es más con la bolsa Aldo Baander. Su silueta tipo hobo es fluida, moderna y sumamente sofisticada. El toque de distinción lo da su icónica cadena dorada, que aporta el brille justo a tu outfit.",
    precioContado: 1500,
    precioCredito: 1800,
    categoria: "bolsas",
    marca: "Aldo",
    sexo: "dama",
    subCategoria: "Hobo",
  },
  {
    nombre: "Bolsa Aldo Paltani Negra",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776118625/01-Bolsa-Aldo-Pattani-Negra-Cebra-Frente_mnblfv.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776118625/01-Bolsa-Aldo-Pattani-Negra-Cebra-Frente_mnblfv.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776118631/02-Bolsa-Aldo-Pattani-Negra-Cebra-adentro_egdq4v.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776118635/03-Bolsa-Aldo-Pattani-Negra-Cebra-colgada_if0rhx.jpg",
    ],
    descripcion:
      "Lleva tu look al siguiente nivel con el balance perfecto entre sofisticación y funcionalidad. La Aldo Paltani presenta una estructura sofisticada y ultra espaciosa con un toque audaz: un pouch de cebra desmontable que marca la diferencia. Ideal para la mujer moderna que busca funcionalidad sin sacrificar el estilo. ¡Hazlo tu básico favorito hoy mismo!",
    precioContado: 1500,
    precioCredito: 1800,
    categoria: "bolsas",
    marca: "Aldo",
    sexo: "dama",
    subCategoria: "tote",
  },
  {
    nombre: "Bolsa Guess Speranza Carryall Chocolate",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776121690/04-Bolsa_Guess_Speranza_Carryall_Chocolate-1_cqmneo.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776121690/04-Bolsa_Guess_Speranza_Carryall_Chocolate-1_cqmneo.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776121691/04-Bolsa_Guess_Speranza_Carryall_Chocolate-2_a51gdq.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776121693/04-Bolsa_Guess_Speranza_Carryall_Chocolate-3_i8y4wx.webp",
    ],
    descripcion:
      "Este elegante bolso tote carryall Guess en tono chocolate destaca por su diseño estructurado y funcional. Cuenta con un amplio espacio interior de triple compartimiento y, para mayor versatilidad, incluye una correa ajustable y removible que le permite transformarlo fácilmente en un práctico crossbody.",
    precioContado: 2400,
    precioCredito: 2800,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "tote",
  },
  {
    nombre: "Bolsa Guess Speranza Carryall Marino",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776123012/05-Bolsa-Guess-Speranza-Carryall-Marino-1_aj4bzp.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776123012/05-Bolsa-Guess-Speranza-Carryall-Marino-1_aj4bzp.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776123016/05-Bolsa-Guess-Speranza-Carryall-Marino-2_y44bem.webp",
    ],
    descripcion:
      "Bolso tote carryall Guess azul marino con diseño estructurado y funcional. Cuenta con amplio espacio de triple compartimiento, organización perfecta e incluye una correa ajustable y removible para usarlo cómodamente como crossbody.",
    precioContado: 2400,
    precioCredito: 2800,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "tote",
  },
  {
    nombre: "Bolsa Guess Avon Paris Caramel",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776123742/06-Bolsa-Guess-Avon-Park-Caramel-1_f25jrx.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776123742/06-Bolsa-Guess-Avon-Park-Caramel-1_f25jrx.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776123744/06-Bolsa-Guess-Avon-Park-Caramel-2_q4pjxv.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776123746/06-Bolsa-Guess-Avon-Park-Caramel-3_vrabfj.webp",
    ],
    descripcion:
      "Es la pieza clave para un estilo sofisticado. Su diseño estructurado en tono caramel es impecable y personal. Incluye una correa removible, permitiéndote llevarlo cómodamente como crossbody según tu outfit.",
    precioContado: 2400,
    precioCredito: 2800,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "tote",
  },

  //nuevos
  {
    nombre: "Bolsa Guess Nude/Taupe",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776124617/07-Bolsa-Guess-Nude-Taupe_ztinga.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776124617/07-Bolsa-Guess-Nude-Taupe_ztinga.jpg",
    ],
    descripcion:
      "Esta bolsa Guess Los Angeles en color nude/taupe es la definición de elegancia funcional. Su diseño estructurado y el acabado en textura Saffiano la hacen ver increíblemente lujosa y profesional.",
    precioContado: 2200,
    precioCredito: 2599,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "tote",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Guess modelo Oona Logo Top-Zip blanco",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776125544/08-Bolsa-Guess-modelo-Oona-Logo-Top-Zip-blanco-1_gfcd3x.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776125544/08-Bolsa-Guess-modelo-Oona-Logo-Top-Zip-blanco-1_gfcd3x.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776125541/08-Bolsa-Guess-modelo-Oona-Logo-Top-Zip-blanco-2_hrzznr.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776125541/08-Bolsa-Guess-modelo-Oona-Logo-Top-Zip-blanco-3_njnvfy.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776125543/08-Bolsa-Guess-modelo-Oona-Logo-Top-Zip-blanco-4_l3lqrp.jpg",
    ],
    descripcion:
      "Eleva tu look diario con la espectacular Guess Oona Crossbody. Su diseño en blanco impecable con logotipos ampliados y herrajes dorados aporta una sofisticación única a cualquier outfit. Incluye un portamonedas removible y una correa ajustable diseñada para tu comodidad.",
    precioContado: 1250,
    precioCredito: 1500,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa DKNY Willa Satchel Bag",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776125968/09-Bolsa-DKNY-Willa-Satchel-Bag-1_vsfias.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776125968/09-Bolsa-DKNY-Willa-Satchel-Bag-1_vsfias.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776125971/09-Bolsa-DKNY-Willa-Satchel-Bag-2_p9luyg.webp",
    ],
    descripcion:
      "Eleva tu día a día con el icónico Willa Satchel. Su diseño de líneas suaves y cuero granulado premium captura la energía moderna de Nueva York. Con un tono café cálido (Hot Cocoa) y herrajes plateados, es el balance perfecto entre lo clásico y lo contemporáneo. ¡La pieza que no sabía que le faltaba a tu outfit!",
    precioContado: 2200,
    precioCredito: 2599,
    categoria: "bolsas",
    marca: "Dkny",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden Donegal Negra",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776126799/10-Bolsa-Steve-Madden-Donegal-Negra-2_t4bbpa.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776126799/10-Bolsa-Steve-Madden-Donegal-Negra-2_t4bbpa.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776126803/10-Bolsa-Steve-Madden-Donegal-Negra-1_kpoysr.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776126801/10-Bolsa-Steve-Madden-Donegal-Negra-3_jsxvhh.webp",
    ],
    descripcion:
      "Descubre la sofisticación del modelo Donegal Satchel de Steve Madden. Su diseño estructurado en color negro profundo y los herrajes oscuros tipo gunmetal crean un look minimalista y ultra moderno.",
    precioContado: 2400,
    precioCredito: 2750,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Aldo Auraliee Print Mini",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776127324/11-Bolsa-Aldo-Auraliee-Print-Mini_i6bjba.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776127324/11-Bolsa-Aldo-Auraliee-Print-Mini_i6bjba.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776127334/11-Bolsa-Aldo-Auraliee-Print-Mini-2_gcsw1s.webp",
    ],
    descripcion:
      "Eleva cualquier outfit básico con la impresionante bolsa Auraliee. Su estampado de cebra en tonos tierra y negro es la dosis perfecta de audacia para tu clóset. Incluye un mini charm removible que le da ese toque moderno y único que solo Aldo sabe ofrecer. ¡El accesorio ideal para la mujer que no teme destacar!",
    precioContado: 1200,
    precioCredito: 1500,
    categoria: "bolsas",
    marca: "Aldo",
    sexo: "dama",
    subCategoria: "tote",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Bungalows Aldo Blanca",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776127679/12-Bungalows-Shoulder-Bag-1_sx4zjn.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776127679/12-Bungalows-Shoulder-Bag-1_sx4zjn.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776127682/12-Bungalows-Shoulder-Bag-2_p7ncft.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776127680/12-Bungalows-Shoulder-Bag-3_lh78ea.jpg",
    ],
    descripcion:
      "Descubre el balance perfecto entre funcionalidad y alta moda. Esta bolsa de hombro destaca por su diseño vanguardista y su capacidad para adaptarse a cualquier estilo, desde unos jeans casuales hasta un vestido de noche.",
    precioContado: 1500,
    precioCredito: 1750,
    categoria: "bolsas",
    marca: "Aldo",
    sexo: "dama",
    subCategoria: "Shoulder",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Aldo Auralie Mini Satchel",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776128114/13-Bolsa-Aldo-Auraliee-1_xv0y20.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776128114/13-Bolsa-Aldo-Auraliee-1_xv0y20.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776128072/13-Bolsa-Aldo-Auraliee-2_gl5f7t.webp",
    ],
    descripcion:
      "Eleva tu look al instante con la impresionante bolsa Auralie. Su acabado en textura de cocodrilo color negro brillante es la personificación del lujo moderno. Incluye un mini charm removible que le da ese toque vanguardista y único que solo Aldo puede ofrecer. ¡Sofisticada, estructurada y lista para ser la protagonista de tu outfit!",
    precioContado: 1200,
    precioCredito: 1500,
    categoria: "bolsas",
    marca: "Aldo",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden en color borgoña",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776130882/14-Bolsa-Steve-Madden-Caballito_wrklc8.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776130882/14-Bolsa-Steve-Madden-Caballito_wrklc8.jpg",
    ],
    descripcion:
      "Eleva tu look al instante con esta impresionante bolsa Steve Madden. Su tono vino profundo y los detalles dorados, incluyendo el icónico dije de caballito, crean un aire de sofisticación ecuestre único. Es el accesorio perfecto para quienes buscan destacar con un estilo clásico, lujoso y lleno de personalidad. ¡Un sueño hecho bolso!",
    precioContado: 2200,
    precioCredito: 2499,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: true,
    precioOferta: 1499,
  },
  {
    nombre: "Mochila Tommy Hilfiger Holograma Beige",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776131750/15-Mochila-Tommy-Hilfiger-Holograma-Beige-1_ielx9n.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776131750/15-Mochila-Tommy-Hilfiger-Holograma-Beige-1_ielx9n.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776131748/15-Mochila-Tommy-Hilfiger-Holograma-Beige-2_sxowmb.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776131747/15-Mochila-Tommy-Hilfiger-Holograma-Beige-3_ylalu4.webp",
    ],
    descripcion:
      "Añade un básico de alta gama a tu colección con este diseño urbano y moderno. Esta mochila combina una estructura práctica con acabados premium para mantener tus pertenencias organizadas con mucho estilo.",
    precioContado: 1500,
    precioCredito: 1850,
    categoria: "bolsas",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "backpack",
    enOferta: true,
    precioOferta: 1250,
  },
  {
    nombre: "Bolsa Steve Madden Bkyre Nautica",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776133832/16-Bolsa-Steve-Madden-Bkyre-Nautica-1_eg9ya2.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776133832/16-Bolsa-Steve-Madden-Bkyre-Nautica-1_eg9ya2.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776133833/16-Bolsa-Steve-Madden-Bkyre-Nautica-2_i0bkoj.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776133835/16-Bolsa-Steve-Madden-Bkyre-Nautica-3_rbwazh.jpg",
    ],
    descripcion:
      "Eleva tu look de temporada con esta espectacular bolsa Steve Madden. Su combinación de lona en tono crema y bordes azul marino con costuras en contraste le da un aire sofisticado y fresco. Nota: El llavero de frutas es únicamente ilustrativo (no incluido).",
    precioContado: 1250,
    precioCredito: 1550,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden BKandice",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776135192/17-BolsaSteve-Madden-BKandice-1_v9vt4o.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776135192/17-BolsaSteve-Madden-BKandice-1_v9vt4o.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776135193/17-BolsaSteve-Madden-BKandice-2_woyd45.jpg",
    ],
    descripcion:
      "Enamórate de la versión mini del modelo BKandice de Steve Madden. Este bolso estructurado es la pieza maestra que le falta a tu clóset. Su combinación de blanco crema y café chocolate, rematada con ese imponente herraje metálico, proyecta un estilo de lujo total. Es pequeña, compacta y ultra sofisticada. ¡El accesorio perfecto para tus fotos de impacto!",
    precioContado: 1200,
    precioCredito: 1499,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Tommy Hilfiger Popette Mini Tote",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776136426/18-Bolsa-Tommy-Hilfiger-Popette-Mini-Tote_rpguwp.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776136426/18-Bolsa-Tommy-Hilfiger-Popette-Mini-Tote_rpguwp.jpg",
    ],
    descripcion:
      'Redefine tu look diario con este sofisticado bolso Tommy Hilfiger. Su diseño de rayas verticales en tonos crema y café, complementado con el icónico monograma dorado "TH" y acabados en piel sintética, aporta un aire de lujo atemporal a cualquier outfit.',
    precioContado: 1300,
    precioCredito: 1650,
    categoria: "bolsas",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "tote",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Nine West Lona",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776136921/19-Bolsa-Nine-West-Lona-1_qcedom.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776136921/19-Bolsa-Nine-West-Lona-1_qcedom.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776136924/19-Bolsa-Nine-West-Lona-2_mwzvz1.jpg",
    ],
    descripcion:
      "Dale un respiro a tu look con esta espectacular bolsa Nine West. Su diseño combina la frescura de la lona beige con acabados premium en tono caramelo, creando un aire de lujo relajado. Incluye un charm de flor en contraste que le da ese toque femenino y único. ¡La pieza clave para tus outfits de temporada!",
    precioContado: 1500,
    precioCredito: 1850,
    categoria: "bolsas",
    marca: "Nine West",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Tommy Hilfiger Kinley II",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776137574/20-Bolsa-Tommy-Hilfiger-Kinley-I_cbpnmt.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776137574/20-Bolsa-Tommy-Hilfiger-Kinley-I_cbpnmt.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776137570/20-Bolsa-Tommy-Hilfiger-Kinley-2_ucrgtr.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776137572/20-Bolsa-Tommy-Hilfiger-Kinley-3_xjupjr.jpg",
    ],
    descripcion:
      'Eleva tu estilo diario con esta sofisticada bolsa crossbody original. Su diseño destaca por el icónico patrón de monograma "TH" en tonos crema y beige, enmarcado por elegantes bordes en color miel.',
    precioContado: 1300,
    precioCredito: 1650,
    categoria: "bolsas",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },

  // 21
  {
    nombre: "Bolso Tommy Hilfiger Satchel Azul Marino",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776139361/21-Bolso-Tommy-Hilfiger-Satchel-Azul-Marino-1_tgdabw.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776139361/21-Bolso-Tommy-Hilfiger-Satchel-Azul-Marino-1_tgdabw.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776139359/21-Bolso-Tommy-Hilfiger-Satchel-Azul-Marino-2_uvnpfc.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776139364/21-Bolso-Tommy-Hilfiger-Satchel-Azul-Marino-3_w1ihce.jpg",
    ],
    descripcion:
      'Eleva tu estilo diario con este impresionante bolso Satchel de Tommy Hilfiger. Su diseño estructurado en el icónico tono Space Blue y el herraje metálico con el monograma "TH" en dorado son la personificación del lujo atemporal.',
    precioContado: 1500,
    precioCredito: 1850,
    categoria: "bolsas",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: false,
    precioOferta: 0,
  },
  // 22
  {
    nombre: "Bolsa Karl Lagerfeld Maybelle Phone Crossbody",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776140243/22-Bolsa-Karl-Lagerfeld-Maybelle-Phone-Crossbody-1_as99j7.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776140243/22-Bolsa-Karl-Lagerfeld-Maybelle-Phone-Crossbody-1_as99j7.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776140237/22-Bolsa-Karl-Lagerfeld-Maybelle-Phone-Crossbody-2_rkmylk.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776140240/22-Bolsa-Karl-Lagerfeld-Maybelle-Phone-Crossbody-4_muthdr.jpg",
    ],
    descripcion:
      "Haz una declaración de moda con esta espectacular crossbody de Karl Lagerfeld. Su diseño en mezclilla azul premium destaca por las icónicas figuras de Karl y su inseparable gatita Choupette.",
    precioContado: 2600,
    precioCredito: 2999,
    categoria: "bolsas",
    marca: "Karl Lagerfeld",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  // 23
  {
    nombre: "Bolsa Karl Lagerfeld Paris Voyage Messenger",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776140676/23-Bolsa-Karl-Lagerfeld-Paris-Voyage-Messenger-1_mfcvvu.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776140676/23-Bolsa-Karl-Lagerfeld-Paris-Voyage-Messenger-1_mfcvvu.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776140671/23-Bolsa-Karl-Lagerfeld-Paris-Voyage-Messenger-2_xxqj8q.jpg",
    ],
    descripcion:
      "Eleva tu look diario con esta espectacular bolsa messenger original. Su diseño capitonado en color negro profundo y el imponente logotipo metálico de Karl Lagerfeld Paris aportan una dosis instantánea de lujo y elegancia.",
    precioContado: 2600,
    precioCredito: 2999,
    categoria: "bolsas",
    marca: "Karl Lagerfeld",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  // 24
  {
    nombre: "Bolso Karl Lagerfeld Maybelle Choupette",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776141127/24-Bolso-Karl-Lagerfeld-Maybelle-Choupette-1_ypjpeo.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776141127/24-Bolso-Karl-Lagerfeld-Maybelle-Choupette-1_ypjpeo.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776141131/24-Bolso-Karl-Lagerfeld-Maybelle-Choupette-2_yxytdi.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776141136/24-Bolso-Karl-Lagerfeld-Maybelle-Choupette-3_ogvwlp.jpg",
    ],
    descripcion:
      "Eleva tu estilo al nivel de las pasarelas con la espectacular Maybelle Satchel de Karl Lagerfeld. Este bolso negro estructurado es una verdadera obra de arte, adornado con pines metálicos icónicos: desde la Torre Eiffel y el Arco del Triunfo hasta el propio Karl y su inseparable Choupette.",
    precioContado: 3000,
    precioCredito: 3599,
    categoria: "bolsas",
    marca: "Karl Lagerfeld",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: false,
    precioOferta: 0,
  },

  //25
  {
    nombre: "Bolsa Karl Lagerfeld Paris Maybelle Crossbody",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776142171/25-Bolsa_Karl_Lagerfeld_Paris_Maybelle_Crossbody-1_t2ee4h.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776142171/25-Bolsa_Karl_Lagerfeld_Paris_Maybelle_Crossbody-1_t2ee4h.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776142172/25-Bolsa_Karl_Lagerfeld_Paris_Maybelle_Crossbody-2_i6jceq.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776142175/25-Bolsa_Karl_Lagerfeld_Paris_Maybelle_Crossbody-3_yjzjce.jpg",
    ],
    descripcion:
      'Eleva tu outfit con esta espectacular crossbody de Karl Lagerfeld. Su diseño en color negro profundo destaca por el divertido parche frontal del "Kaiser" y su distintiva correa ancha logotipada en blanco y negro.',
    precioContado: 2500,
    precioCredito: 2900,
    categoria: "bolsas",
    marca: "Karl Lagerfeld",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },

  //26
  {
    nombre: "Bolsa Karl Lagerfeld Paris Maybelle Pin Crossbody",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776144208/26-Bolsa-Karl-Lagerfeld-Paris-Maybelle-Pin-Crossbody-1_b3za56.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776144208/26-Bolsa-Karl-Lagerfeld-Paris-Maybelle-Pin-Crossbody-1_b3za56.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776144212/26-Bolsa-Karl-Lagerfeld-Paris-Maybelle-Pin-Crossbody-2_o01u2i.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776144216/26-Bolsa-Karl-Lagerfeld-Paris-Maybelle-Pin-Crossbody-3_mdc6jn.jpg",
    ],
    descripcion:
      "Eleva tu look con esta espectacular crossbody Maybelle. Su diseño en color negro profundo destaca por sus encantadores parches de corazones en glitter rojo y dorado, junto con las figuras icónicas de Karl y su inseparable gatita Choupette.",
    precioContado: 2500,
    precioCredito: 2900,
    categoria: "bolsas",
    marca: "Karl Lagerfeld",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Karl Lagerfeld Paris Maybelle Fiusha Crossbody",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776144951/27-Bolsa-Karl-Lagerfeld-Paris-Maybelle-Crossbody-2_etgcqs.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776144951/27-Bolsa-Karl-Lagerfeld-Paris-Maybelle-Crossbody-2_etgcqs.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776144955/27-Bolsa-Karl-Lagerfeld-Paris-Maybelle-Crossbody-1_z1k4s4.webp",
    ],
    descripcion:
      "Eleva tu estilo al máximo con esta espectacular crossbody Maybelle en un vibrante color fucsia. Su diseño icónico destaca por los parches de Karl y su inseparable gatita Choupette, dándole ese toque de lujo divertido que solo esta marca ofrece.",
    precioContado: 2500,
    precioCredito: 2900,
    categoria: "bolsas",
    marca: "Karl Lagerfeld",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Karl Lagerfeld Paris Kristina",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776145889/28-Bolsa-Karl-Lagerfeld-Paris-Kristina-1_yg3nly.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776145889/28-Bolsa-Karl-Lagerfeld-Paris-Kristina-1_yg3nly.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776145892/28-Bolsa-Karl-Lagerfeld-Paris-Kristina-2_dt3i8h.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776145887/28-Bolsa-Karl-Lagerfeld-Paris-Kristina-3_au1dis.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776145896/28-Bolsa-Karl-Lagerfeld-Paris-Kristina-4_ylqlz9.jpg",
    ],
    descripcion:
      "Eleva tu look al instante con la impresionante Kristina Tote de Karl Lagerfeld. Su diseño en color negro profundo resalta por el icónico logotipo bordado en blanco con textura, aportando una dosis instantánea de sofisticación moderna.",
    precioContado: 3000,
    precioCredito: 3400,
    categoria: "bolsas",
    marca: "Karl Lagerfeld",
    sexo: "dama",
    subCategoria: "tote",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Karl Lagerfeld Paris Adele Bucket",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776147096/29-Bolsa-Karl-Lagerfeld-Paris-Adele-Bucket-1_y5sdv9.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776147096/29-Bolsa-Karl-Lagerfeld-Paris-Adele-Bucket-1_y5sdv9.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776147101/29-Bolsa-Karl-Lagerfeld-Paris-Adele-Bucket-2_m4zpin.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776147120/29-Bolsa-Karl-Lagerfeld-Paris-Adele-Bucket-4_rdxr44.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776147108/29-Bolsa-Karl-Lagerfeld-Paris-Adele-Bucket-3_gk64rj.jpg",
    ],
    descripcion:
      "Descubre la sofisticación en su estado más puro con la Adele Bucket Bag. El contraste entre su delicado tono rosa y la correa deportiva con el logo de Karl crea una pieza única que robará todas las miradas. Perfecta para quienes buscan un accesorio con personalidad que hable por sí solo.",
    precioContado: 2250,
    precioCredito: 2699,
    categoria: "bolsas",
    marca: "Karl Lagerfeld",
    sexo: "dama",
    subCategoria: "bucket",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Michael Kors Jet Set Travel Medium Logo Dome Crossbody",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776147978/30-Bolsa-Michael-Kors-Medium-Logo-1_yiodwn.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776147978/30-Bolsa-Michael-Kors-Medium-Logo-1_yiodwn.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776147985/30-Bolsa-Michael-Kors-Medium-Logo-2_vqh9og.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776147990/30-Bolsa-Michael-Kors-Medium-Logo-3_nhym8n.webp",
    ],
    descripcion:
      "Descubre la sofisticación en su estado más puro con la Jet Set Travel Dome. El contraste entre su lona revestida con el monograma MK y los detalles en cuero color miel crea una pieza única que robará todas las miradas. Su silueta estructurada proyecta una imagen impecable y sofisticada.",
    precioContado: 2100,
    precioCredito: 2550,
    categoria: "bolsas",
    marca: "Michael Kors",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Guess Estampado de Cerezas",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776151514/31-Bolsa-Guess-estampado-cerezas-1_bdygwt.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776151514/31-Bolsa-Guess-estampado-cerezas-1_bdygwt.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776151517/31-Bolsa-Guess-estampado-cerezas-2_ntf5s2.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776151521/31-Bolsa-Guess-estampado-cerezas-3_ragr5p.jpg",
    ],
    descripcion:
      "Dale un respiro a tus básicos con esta espectacular crossbody de Guess. El vibrante estampado de cerezas sobre el icónico monograma carbón crea un contraste divertido y ultra sofisticado. Un diseño audaz para quienes no temen destacar con estilo.",
    precioContado: 1400,
    precioCredito: 1750,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Michael Kors Jet Set Travel Double Pocket",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776149146/32-Bolso-Michael-Kors-Jet-Set-Travel-Double-Pocket-1_ednntm.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776149146/32-Bolso-Michael-Kors-Jet-Set-Travel-Double-Pocket-1_ednntm.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776149134/32-Bolso-Michael-Kors-Jet-Set-Travel-Double-Pocket-2_eqpgnz.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776149138/32-Bolso-Michael-Kors-Jet-Set-Travel-Double-Pocket-3_ha2qgv.jpg",
    ],
    descripcion:
      "Redefine tu día a día con la Jet Set Travel Tote. Este diseño estructurado en tono vainilla, con su inconfundible estampado de monograma MK, proyecta una imagen impecable y cosmopolita. Sus elegantes correas de cuero color miel y herrajes dorados son el toque de distinción perfecto.",
    precioContado: 3400,
    precioCredito: 3800,
    categoria: "bolsas",
    marca: "Michael Kors",
    sexo: "dama",
    subCategoria: "tote",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Michael Kors Carson",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776149997/33-Bolsa-Michael-Kors-Carson-1_eeboca.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776149997/33-Bolsa-Michael-Kors-Carson-1_eeboca.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776150000/33-Bolsa-Michael-Kors-Carson-2_wn1dxq.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776150026/33-Bolsa-Michael-Kors-Carson-3_u5ddi4.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776150040/33-Bolsa-Michael-Kors-Carson-4_u0un97.jpg",
    ],
    descripcion:
      "Descubre el accesorio que se convertirá en el centro de todas las miradas. La bolsa Carson Bucket en tono Hibiscus es la definición de lujo contemporáneo. Su silueta estructurada, realzada por el icónico herraje metálico tipo bocado, proyecta una imagen impecable y audaz.",
    precioContado: 3000,
    precioCredito: 3450,
    categoria: "bolsas",
    marca: "Michael Kors",
    sexo: "dama",
    subCategoria: "bucket",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Guess Berlyn Denim Large",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776151143/34-Bolsa-Guess-Berlyn-Denim-Large-1_kdidq5.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776151143/34-Bolsa-Guess-Berlyn-Denim-Large-1_kdidq5.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776151149/34-Bolsa-Guess-Berlyn-Denim-Large-2_srnbkp.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776151155/34-Bolsa-Guess-Berlyn-Denim-Large-3_kvsouw.webp",
    ],
    descripcion:
      "Rompe con lo convencional con la impresionante Berlyn Satchel de Guess. Su diseño en mezclilla azul premium, acentuado con herrajes dorados y dijes icónicos, es la pieza maestra que le falta a tu colección. El balance perfecto entre un aire rebelde y una silueta estructurada de alta gama.",
    precioContado: 1750,
    precioCredito: 2250,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Michael Kors Voyager Saffiano Lavanda",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776212505/35-Bolsa-Michael-Kors-Voyager-Saffiano-Lavanda-1_aqsyi5.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776212505/35-Bolsa-Michael-Kors-Voyager-Saffiano-Lavanda-1_aqsyi5.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776212506/35-Bolsa-Michael-Kors-Voyager-Saffiano-Lavanda-2_r1nvi6.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776212507/35-Bolsa-Michael-Kors-Voyager-Saffiano-Lavanda-3_ymlqkr.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776212509/35-Bolsa-Michael-Kors-Voyager-Saffiano-Lavanda-4_tgy9zp.jpg",
    ],
    descripcion:
      "Descubre el toque de distinción que redefine lo cotidiano. La Voyager Tote en suave tono lila es la pieza maestra para quienes buscan un estilo impecable sin esfuerzo. Su diseño estructurado y el brillo sutil de sus herrajes plateados proyectan una imagen sofisticada y profesional.",
    precioContado: 3500,
    precioCredito: 3850,
    categoria: "bolsas",
    marca: "Michael Kors",
    sexo: "dama",
    subCategoria: "tote",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Cartera Michael Kors Saffiano Lavanda",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776214680/36-Cartera-Michael-Kors-Saffiano-Lavanda-1_nft3yh.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776214680/36-Cartera-Michael-Kors-Saffiano-Lavanda-1_nft3yh.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776214681/36-Cartera-Michael-Kors-Saffiano-Lavanda-2_aplram.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776214682/36-Cartera-Michael-Kors-Saffiano-Lavanda-3_cvot7c.jpg",
    ],
    descripcion:
      "Descubre la pieza maestra que redefine la organización diaria. Esta cartera Michael Kors en suave tono lila es el toque de distinción que tu colección merece. Su acabado en la icónica piel Saffiano proyecta una imagen impecable y sofisticada, garantizando además una durabilidad extraordinaria.",
    precioContado: 1700,
    precioCredito: 2100,
    categoria: "bolsas",
    marca: "Michael Kors",
    sexo: "dama",
    subCategoria: "carteras",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden Clarke",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776220595/37-Steve-Madden-Clarke_shn1xg.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776220595/37-Steve-Madden-Clarke_shn1xg.jpg",
    ],
    descripcion:
      "Redefine tu estilo con la Clarke Crossbody. Su exquisita textura grabada tipo cocodrilo y su vibrante tono verde petróleo crean una pieza maestra que proyecta seguridad y sofisticación. El accesorio perfecto para quienes buscan un toque de distinción que hable por sí solo.",
    precioContado: 1300,
    precioCredito: 1650,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden B-Byvonne Menta",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776221879/38-Bolsa-Steve-Madden_B-Byvonne-Menta-1_d74kxb.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776221879/38-Bolsa-Steve-Madden_B-Byvonne-Menta-1_d74kxb.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776221880/38-Bolsa-Steve-Madden_B-Byvonne-Menta-2_jhwalr.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776221876/38-Bolsa-Steve-Madden_B-Byvonne-Menta-3_tf7i2t.jpg",
    ],
    descripcion:
      "Redefine tu estilo con la B-Byvonne. Su exquisita textura tejida y su delicado tono verde pastel crean un toque de distinción que proyecta una imagen impecable y sofisticada. El accesorio ideal para quienes buscan destacar con un lujo relajado pero lleno de personalidad.",
    precioContado: 1350,
    precioCredito: 1699,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden B-Byvonne Beige",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776221877/39-Bolsa-Steve-Madden_B-Byvonne-Beige-1_bfllzr.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776221877/39-Bolsa-Steve-Madden_B-Byvonne-Beige-1_bfllzr.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776221878/39-Bolsa-Steve-Madden_B-Byvonne-Beige-2_hn80ku.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776221878/39-Bolsa-Steve-Madden_B-Byvonne-Beige-3_d7uptp.jpg",
    ],
    descripcion:
      "Descubre la sofisticación en su estado más puro con la Byvonne en tono nude. Su diseño capitonado es visualmente impactante y aporta una armonía única a tu colección. Un básico de alta gama pensado para quienes buscan una presencia impecable y refinada sin esfuerzo.",
    precioContado: 1350,
    precioCredito: 1699,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden Bmazie Cereza",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776222500/40-Bolsa-Steve-Madden-Bmazie-Cereza-1_lytlvg.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776222500/40-Bolsa-Steve-Madden-Bmazie-Cereza-1_lytlvg.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776222503/40-Bolsa-Steve-Madden-Bmazie-Cereza-2_wq2ut5.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776222506/40-Bolsa-Steve-Madden-Bmazie-Cereza-3_firi67.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776222510/40-Bolsa-Steve-Madden-Bmazie-Cereza-4_oktsld.webp",
    ],
    descripcion:
      "Dale un respiro a lo convencional con la espectacular Bmazie de Steve Madden. El contraste del negro profundo con el vibrante estampado de cerezas en su asa crea una pieza maestra llena de personalidad. Un diseño audaz que robará todas las miradas.",
    precioContado: 1200,
    precioCredito: 1600,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden Bharlan Llaveritos",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776223210/41-Bolsa-Steve-Madden-Bharlan-llaveritos-1_xadphy.avif",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776223210/41-Bolsa-Steve-Madden-Bharlan-llaveritos-1_xadphy.avif",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776223211/41-Bolsa-Steve-Madden-Bharlan-llaveritos-2_v3uy3q.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776223211/41-Bolsa-Steve-Madden-Bharlan-llaveritos-3_rmtruo.avif",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776223212/41-Bolsa-Steve-Madden-Bharlan-llaveritos-4_zd1sew.avif",
    ],
    descripcion:
      "Rompe las reglas con un diseño que lo tiene todo. Este bolso negro de silueta clásica se transforma por completo con un juego de charms exclusivos: dados, un corazón de cristal ámbar y una carita feliz. La pieza maestra para quienes buscan un estilo audaz, lúdico y lleno de detalles.",
    precioContado: 1700,
    precioCredito: 1999,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: true,
    precioOferta: 1500,
  },
  {
    nombre: "Bolsa Steve Madden Bcitra Edición Mezclilla Patchwork",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776225822/42-Bolsa-Steve-Madden-Mezclilla_vucbxr.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776225822/42-Bolsa-Steve-Madden-Mezclilla_vucbxr.jpg",
    ],
    descripcion:
      "Redescubre la versatilidad con la espectacular Bcitra Patchwork. El juego de tonalidades en mezclilla azul, resaltado por costuras blancas y el imponente logotipo en tono tabaco, crea una pieza maestra que proyecta un estilo fresco y audaz.",
    precioContado: 1200,
    precioCredito: 1525,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden B-Glow Barrel Bag",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776227342/43-Bolsa-Steve-Madden-B-Glow-Barrel-Bag_htgu5x.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776227342/43-Bolsa-Steve-Madden-B-Glow-Barrel-Bag_htgu5x.jpg",
    ],
    descripcion:
      "Redefine tu estilo con esta pieza maestra de silueta cilíndrica y actitud audaz. Su diseño en negro profundo, resaltado por herrajes dorados y charms exclusivos de texturas mixtas, es el toque de distinción que robará todas las miradas.",
    precioContado: 1700,
    precioCredito: 1999,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: true,
    precioOferta: 1500,
  },
  {
    nombre: "Bolsa Steve Madden Blexi Nude",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776228001/44-Bolsa-Steve-Madden-Blexi-Nude-1_ntjh3p.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776228001/44-Bolsa-Steve-Madden-Blexi-Nude-1_ntjh3p.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776228001/44-Bolsa-Steve-Madden-Blexi-Nude-2_nxedj2.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776228002/44-Bolsa-Steve-Madden-Blexi-Nude-3_seasyb.webp",
    ],
    descripcion:
      "Redefine tu estilo diario con esta pieza maestra de textura Saffiano en tono nude. Sus elegantes detalles de cadena en color plomizo y silueta estructurada son el toque de distinción ideal para una imagen impecable. El upgrade de lujo definitivo para quienes buscan versatilidad y sofisticación.",
    precioContado: 1200,
    precioCredito: 1500,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden Bthorne Dome Cafe",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776228753/45-Bolsa-Steve-Madden-Bthorne-Dome-Cafe-1_ih8yuh.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776228753/45-Bolsa-Steve-Madden-Bthorne-Dome-Cafe-1_ih8yuh.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776228704/45-Bolsa-Steve-Madden-Bthorne-Dome-Cafe-2_pdxlyx.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776228705/45-Bolsa-Steve-Madden-Bthorne-Dome-Cafe-3_pa2ve8.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776228751/45-Bolsa-Steve-Madden-Bthorne-Dome-Cafe-4_husymk.webp",
    ],
    descripcion:
      "Redefine tu presencia con esta pieza maestra de silueta estructurada en un impecable tono café. Su sofisticado diseño con herrajes dorados y el icónico dije de cadena son el toque de distinción que robará todas las miradas.",
    precioContado: 1500,
    precioCredito: 1899,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden Bwebber-El Large Tote",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776230942/46-Bolsa-Steve-Madden-Bwebber-El-Large-Tote-1_uqt3hj.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776230942/46-Bolsa-Steve-Madden-Bwebber-El-Large-Tote-1_uqt3hj.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776230919/46-Bolsa-Steve-Madden-Bwebber-El-Large-Tote-2_wjhtyg.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776230920/46-Bolsa-Steve-Madden-Bwebber-El-Large-Tote-3_wwnvqv.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776230940/46-Bolsa-Steve-Madden-Bwebber-El-Large-Tote-4_ihujgi.jpg",
    ],
    descripcion:
      "Redefine tu estilo diario con esta pieza maestra de silueta estructurada en negro profundo. Su diseño audaz, resaltado por el icónico relieve de la marca y un encantador monedero de cerezas, es el toque de distinción que robará todas las miradas.",
    precioContado: 2100,
    precioCredito: 2500,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "tote",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden Bverra Tote",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776232480/47-Bolsa-Steve-Madden-Bverra-1_movaug.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776232480/47-Bolsa-Steve-Madden-Bverra-1_movaug.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776232483/47-Bolsa-Steve-Madden-Bverra-2_amuhge.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776232487/47-Bolsa-Steve-Madden-Bverra-3_fkdcrw.jpg",
    ],
    descripcion:
      "Redefine tu presencia con esta pieza maestra de silueta sofisticada en tono camel. Su diseño funcional, realzado por herrajes dorados y un tarjetero exclusivo a juego, es el toque de distinción que robará todas las miradas. Ideal para proyectar una imagen impecable con almacenamiento sorprendentemente amplio.",
    precioContado: 2000,
    precioCredito: 2400,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "tote",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Steve Madden Bthorne Dijes",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776234256/48-Bolsa-Steve-Madden-Bthorne-Dijes-1_vtsyqp.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776234256/48-Bolsa-Steve-Madden-Bthorne-Dijes-1_vtsyqp.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776234257/48-Bolsa-Steve-Madden-Bthorne-Dijes-2_qhwk9v.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776234258/48-Bolsa-Steve-Madden-Bthorne-Dijes-3_ttim2e.webp",
    ],
    descripcion:
      "Redefine tu presencia con esta pieza maestra de silueta tipo media luna en negro profundo. Su diseño audaz, resaltado por el exclusivo dije de oso rojo y detalles urbanos, es el toque de distinción que robará todas las miradas.",
    precioContado: 1350,
    precioCredito: 1750,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "Shoulder",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Guess Wells Shoulder",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776234830/49-Bolsa-Guess-Wells-Shoulder-1_ekgrhh.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776234830/49-Bolsa-Guess-Wells-Shoulder-1_ekgrhh.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776234827/49-Bolsa-Guess-Wells-Shoulder-2_izcenl.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776234828/49-Bolsa-Guess-Wells-Shoulder-3_n67xtg.webp",
    ],
    descripcion:
      "Redefine tu presencia con esta pieza maestra de silueta hobo en mezclilla premium. Su icónico patrón de monograma y el contraste audaz de su pouch removible en tono tabaco son el toque de distinción que robará todas las miradas.",
    precioContado: 1600,
    precioCredito: 1975,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "Shoulder",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Guess Ines Carryall Tote",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776235320/50-Bolsa-Guess-Ines-Carryall-1_w1gvv1.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776235320/50-Bolsa-Guess-Ines-Carryall-1_w1gvv1.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776235851/50-Bolsa-Guess-Ines-Carryall-2_rkgyws.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776235863/50-Bolsa-Guess-Ines-Carryall-3_dpd3mj.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776235850/50-Bolsa-Guess-Ines-Carryall-4_qgi9nu.webp",
    ],
    descripcion:
      "Redefine tu presencia con esta pieza maestra de silueta estructurada y monograma icónico en tono carbón. Su diseño funcional, realzado por la banda frontal grabada, es el toque de distinción que robará todas las miradas.",
    precioContado: 2000,
    precioCredito: 2550,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "tote",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Guess Helaina Vino",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776236312/51-Bolsa-Guess-Helaina-Vino_mlk5jg.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776236312/51-Bolsa-Guess-Helaina-Vino_mlk5jg.jpg",
    ],
    descripcion:
      "Redefine tu presencia con esta pieza maestra de silueta estructurada en un impecable tono vino. Su diseño belted con el icónico logo dorado central es el toque de distinción que robará todas las miradas en cualquier ocasión.",
    precioContado: 1900,
    precioCredito: 2250,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "satchel",
    enOferta: true,
    precioOferta: 1600,
  },
  {
    nombre: "Bolsa Guess Avon Park",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776236727/52-Bolsa-Guess-Avon-Park-1_vvx9ks.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776236727/52-Bolsa-Guess-Avon-Park-1_vvx9ks.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776236724/52-Bolsa-Guess-Avon-Park-2_w4ouu1.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776236725/52-Bolsa-Guess-Avon-Park-3_tqeqwj.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776236726/52-Bolsa-Guess-Avon-Park-4_ssbzvg.webp",
    ],
    descripcion:
      "Redefine tu presencia con esta pieza maestra de silueta estructurada y diseño color-block en azul y crema. Su estética moderna, realzada por el icónico logotipo de Los Ángeles, es el toque de distinción que robará todas las miradas.",
    precioContado: 2000,
    precioCredito: 2350,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "Shoulder",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Guess Rosse Small Tote",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776237379/53-Bolsa_-Guess-Rosse-Small-Tote-1_yrkjvf.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776237379/53-Bolsa_-Guess-Rosse-Small-Tote-1_yrkjvf.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776237381/53-Bolsa_-Guess-Rosse-Small-Tote-2_svocpb.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776237378/53-Bolsa_-Guess-Rosse-Small-Tote-3_gnl2a1.webp",
    ],
    descripcion:
      "Redefine tu presencia con esta pieza maestra de silueta estructurada en un impecable tono blanco. Su diseño minimalista, realzado por el icónico logotipo repujado y una correa ajustable de tendencia, es el toque de distinción que robará todas las miradas.",
    precioContado: 2100,
    precioCredito: 2550,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "tote",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Guess Eldoria Camera",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776238246/54-Bolsa-Guess-Eldoria-Camera-1_f0uhd9.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776238246/54-Bolsa-Guess-Eldoria-Camera-1_f0uhd9.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776238249/54-Bolsa-Guess-Eldoria-Camera-2_fpaqvy.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776238247/54-Bolsa-Guess-Eldoria-Camera-3_idj7uw.jpg",
    ],
    descripcion:
      "Redefine tu presencia con esta pieza maestra de silueta compacta en un delicado tono rosa. Su sofisticado diseño con monograma repujado y su versátil correa deportiva son el toque de distinción que robará todas las miradas.",
    precioContado: 1600,
    precioCredito: 1950,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Guess Elysia Woven",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776238721/55-Bolsa-Guess-Elysia-Woven-1_hjyors.avif",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776238721/55-Bolsa-Guess-Elysia-Woven-1_hjyors.avif",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776238719/55-Bolsa-Guess-Elysia-Woven-2_muanws.avif",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776238718/55-Bolsa-Guess-Elysia-Woven-3_n01ojs.avif",
    ],
    descripcion:
      "Define tu presencia con esta pieza maestra de textura entretejida en un profundo tono chocolate. Su silueta hobo y los herrajes dorados con el icónico candado son el toque de distinción que robará todas las miradas.",
    precioContado: 1500,
    precioCredito: 1950,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "Shoulder",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Guess Elise Crossbody Clutch Hueso",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240052/56-Guess-Elise-Crossbody-Clutch-Hueso-1_n7ijpo.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240052/56-Guess-Elise-Crossbody-Clutch-Hueso-1_n7ijpo.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240053/56-Guess-Elise-Crossbody-Clutch-Hueso-2_xsusrc.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240057/56-Guess-Elise-Crossbody-Clutch-Hueso-3_mnk8ym.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240059/56-Guess-Elise-Crossbody-Clutch-Hueso-4_ebec88.webp",
    ],
    descripcion:
      "Define tu estilo con esta pieza maestra de silueta estructurada en un impecable tono blanco hueso. Su diseño minimalista, realzado por un elegante broche de presión dorado y una versátil correa de cadena, proyecta una imagen impecable y sofisticada.",
    precioContado: 1200,
    precioCredito: 1450,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Guess Elise Crossbody Clutch Rojo",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240001/57-Guess-Elise-Crossbody-Clutch-Roja-1_bdf2kf.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240001/57-Guess-Elise-Crossbody-Clutch-Roja-1_bdf2kf.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240002/57-Guess-Elise-Crossbody-Clutch-Roja-2_nxlygh.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240016/57-Guess-Elise-Crossbody-Clutch-Roja-3_zzbsei.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240055/57-Guess-Elise-Crossbody-Clutch-Roja-4_j5jsw8.jpg",
    ],
    descripcion:
      "Define tu presencia con esta pieza maestra de silueta estructurada en un vibrante tono rojo. Su icónico diseño acolchado en chevrón, realzado por elegantes herrajes dorados y una versátil correa de cadena, proyecta una imagen impecable y sofisticada.",
    precioContado: 1200,
    precioCredito: 1450,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Bolsa Guess Daryna II Crossbody",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240979/58-Bolsa-Guess-Daryna-1_tvmbji.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240979/58-Bolsa-Guess-Daryna-1_tvmbji.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240980/58-Bolsa-Guess-Daryna-2_p4p2pl.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776240982/58-Bolsa-Guess-Daryna-3_ea81oz.webp",
    ],
    descripcion:
      "Define tu estilo con esta pieza maestra de silueta estructurada en un vibrante rojo pasión. Su diseño minimalista, realzado por el icónico logo triangular y su audaz guitar strap a juego, es el toque de distinción que robará todas las miradas.",
    precioContado: 1400,
    precioCredito: 1650,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "crossbody",
    enOferta: true,
    precioOferta: 1250,
  },
  {
    nombre: "Cangurera Studio Puffer Cafe",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776242051/59-Cangurera-Studio-Puffer-Cafe-1_eopvcp.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776242051/59-Cangurera-Studio-Puffer-Cafe-1_eopvcp.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776242055/59-Cangurera-Studio-Puffer-Cafe-2_llwzhg.jpg",
    ],
    descripcion:
      "Redefine tu comodidad con esta pieza maestra de silueta acolchada en un sofisticado tono café. Su diseño ligero y minimalista es el toque de distinción perfecto para un look urbano e impecable.",
    precioContado: 500,
    precioCredito: 500,
    categoria: "bolsas",
    marca: "Studio",
    sexo: "dama",
    subCategoria: "riñonera",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Cangurera Steve Madden Nylon Belt Bag Set",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776242382/60-Cangurera-Steve-Madden-Nylon-1_e27gvj.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776242382/60-Cangurera-Steve-Madden-Nylon-1_e27gvj.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776242388/60-Cangurera-Steve-Madden-Nylon-2_arsguw.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776242390/60-Cangurera-Steve-Madden-Nylon-3_dishuc.jpg",
    ],
    descripcion:
      "Define tu estilo urbano con esta pieza maestra de nailon premium en negro profundo. Su diseño versátil, realzado por el icónico logo SM y un pouch removible para Airpods, es el toque de distinción perfecto para un look impecable con total libertad.",
    precioContado: 700,
    precioCredito: 700,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "riñonera",
    enOferta: false,
    precioOferta: 0,
  },
  {
    nombre: "Cartera Clutch Guess Tinsley Quilted Slim",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776394454/61-Cartera-Clutch-Guess-Tinsley-Quilted-Slim-1_v9fpwp.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776394454/61-Cartera-Clutch-Guess-Tinsley-Quilted-Slim-1_v9fpwp.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776394455/61-Cartera-Clutch-Guess-Tinsley-Quilted-Slim-2_gwrtnf.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776394469/61-Cartera-Clutch-Guess-Tinsley-Quilted-Slim-3_qflp0e.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776394457/61-Cartera-Clutch-Guess-Tinsley-Quilted-Slim-4_pbg9gq.webp",
    ],
    descripcion:
      "Eleva tu elegancia con esta exclusiva cartera tipo clutch original de Guess. Su sofisticado diseño acolchado en color negro se complementa con un logo metálico frontal y un práctico cierre de solapa magnética. Delgada pero sorprendentemente espaciosa, cuenta con múltiples compartimentos internos, incluyendo 12 ranuras para tarjetas y una ventana para ID, permitiéndote llevar todo lo esencial con un estilo impecable",
    precioContado: 850,
    precioCredito: 850,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: "Cartera Tommy Hilfiger Continental con Logotipo Grabado",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776394877/62-Cartera-Tommy-Hilfiger-Continental-Logotipo-Grabado-1_jqgtrd.avif",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776394877/62-Cartera-Tommy-Hilfiger-Continental-Logotipo-Grabado-1_jqgtrd.avif",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776394879/62-Cartera-Tommy-Hilfiger-Continental-Logotipo-Grabado-2_vzgvpn.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776394882/62-Cartera-Tommy-Hilfiger-Continental-Logotipo-Grabado-3_wlrqa2.jpg",
    ],
    descripcion:
      "Luce una elegancia atemporal con esta cartera original de piel sintética en un suave tono rosa rubor. Su diseño destaca por el monograma de la marca grabado en relieve en toda la superficie y una placa metálica frontal con el logo clásico, ofreciendo un estilo moderno y refinado. Con 8 ranuras para tarjetas y un amplio compartimento interno, es el accesorio perfecto para mantener tu organización con clase.",
    precioContado: 850,
    precioCredito: 850,
    categoria: "bolsas",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: "Cartera Tommy Hilfiger Trifold en Piel Sintética Granulada",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776395750/63-Cartera-Tommy-Hilfiger-Trifold-1_ehrtkp.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776395750/63-Cartera-Tommy-Hilfiger-Trifold-1_ehrtkp.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776395757/63-Cartera-Tommy-Hilfiger-Trifold-2_lj0igh.webp",
    ],
    descripcion:
      "Elegancia y feminidad en un solo accesorio. Esta cartera original en tono rosa rubor destaca por su diseño con monograma grabado y placa metálica de lujo. Espaciosa, segura y perfecta para elevar cualquier outfit con el estilo clásico de Tommy.",
    precioContado: 750,
    precioCredito: 750,
    categoria: "bolsas",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: "Cartera Steve Madden Denim & Tan",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776396430/64-Cartera-Steve-Madden-Denim_yjuiou.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776396430/64-Cartera-Steve-Madden-Denim_yjuiou.jpg",
    ],
    descripcion:
      "Luce un look urbano y chic con esta cartera original que combina mezclilla azul con detalles en piel sintética color miel. Un diseño fresco y resistente con broches dorados, ideal para quienes buscan un accesorio con mucha personalidad y estilo relajado.",
    precioContado: 780,
    precioCredito: 780,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: "Cartera Guess Abree Slim Clutch Logo",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776397511/65-Cartera-Guess-Abree-Slim-Clutch-Logo-1_jqdgru.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776397511/65-Cartera-Guess-Abree-Slim-Clutch-Logo-1_jqdgru.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776397551/65-Cartera-Guess-Abree-Slim-Clutch-Logo-2_pztix5.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776397556/65-Cartera-Guess-Abree-Slim-Clutch-Logo-3_lyvyko.webp",
    ],
    descripcion:
      'Eleva tu estilo con esta elegante cartera original con el icónico patrón de logotipos "G" en relieve. Su diseño delgado en color beige cuenta con una sofisticada placa esmaltada dorada y múltiples compartimentos internos para tarjetas y billetes, combinando lujo y funcionalidad en un solo accesorio.',
    precioContado: 900,
    precioCredito: 900,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: "Cartera Guess Rhiannon Logo Fold-Over Clutch",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776397868/66-Cartera-Guess-Rhiannon-Logo-Fold-Over-Clutch-1_fjvfcy.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776397868/66-Cartera-Guess-Rhiannon-Logo-Fold-Over-Clutch-1_fjvfcy.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776397873/66-Cartera-Guess-Rhiannon-Logo-Fold-Over-Clutch-2_h47ndv.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776397877/66-Cartera-Guess-Rhiannon-Logo-Fold-Over-Clutch-3_l5zx7n.webp",
    ],
    descripcion:
      "Luce sofisticada con esta elegante cartera tipo clutch en canvas revestido, destacada por su estampado integral de logotipos y herrajes dorados. Su diseño delgado tipo trifold incluye múltiples ranuras para tarjetas y compartimentos para billetes, ofreciendo una organización impecable con un estilo de lujo.",
    precioContado: 900,
    precioCredito: 900,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: "Cartera Guess Bowie Debossed Logo Slim Clutch",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776398350/67-Cartera-Guess-Bowie-Debossed-Logo-Slim-Clutch-1_fdbeln.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776398350/67-Cartera-Guess-Bowie-Debossed-Logo-Slim-Clutch-1_fdbeln.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776398353/67-Cartera-Guess-Bowie-Debossed-Logo-Slim-Clutch-2_zpovi8.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776398355/67-Cartera-Guess-Bowie-Debossed-Logo-Slim-Clutch-3_lp8xvn.webp",
    ],
    descripcion:
      "Luce un estilo refinado con esta cartera original en tono marrón, destacada por su elegante diseño de logotipos grabados en relieve. Su silueta delgada de tres pliegues ofrece una organización superior con 12 ranuras para tarjetas y un práctico bolsillo exterior con cierre, ideal para la mujer moderna que busca lujo y funcionalidad",
    precioContado: 900,
    precioCredito: 900,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: 'Cartera Guess "La Rosa" SLG Monogram',
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776398816/68-Cartera-Guess-La-Rosa-SLG-Monogram-1_ahzky0.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776398816/68-Cartera-Guess-La-Rosa-SLG-Monogram-1_ahzky0.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776398821/68-Cartera-Guess-La-Rosa-SLG-Monogram-2_gaxrmp.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776398818/68-Cartera-Guess-La-Rosa-SLG-Monogram-3_pkokpx.jpg",
    ],
    descripcion:
      "Sofisticada y moderna, esta cartera original en color beige cuenta con un elegante diseño de logotipos grabados y herrajes dorados. Su estructura compacta tipo sobre incluye un cierre de botón seguro y múltiples organizadores internos, ideal para la mujer que busca un accesorio práctico sin perder el estilo chic.",
    precioContado: 900,
    precioCredito: 900,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: "Cartera Billetera Guess Color Sandia",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776399366/69-Cartera-Guess-Color-Sandia-1_cyvomv.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776399366/69-Cartera-Guess-Color-Sandia-1_cyvomv.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776399369/69-Cartera-Guess-Color-Sandia-2_dewad3.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776399367/69-Cartera-Guess-Color-Sandia-3_lrngmo.webp",
    ],
    descripcion:
      "Añade un toque de energía a tu estilo con esta elegante cartera original en color sandía con diseño de monograma. Su estructura funcional de 19 cm x 10 cm ofrece un espacio óptimo para organizar tus tarjetas y billetes, combinando a la perfección la practicidad con un diseño moderno y atractivo.",
    precioContado: 900,
    precioCredito: 900,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: 'Cartera Guess "Kiran" Slim Clutch Monograma',
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776399897/70-Cartera-Guess-Kiran-Slim-Clutch-Monograma-1_jnww6b.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776399897/70-Cartera-Guess-Kiran-Slim-Clutch-Monograma-1_jnww6b.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776399846/70-Cartera-Guess-Kiran-Slim-Clutch-Monograma-2_e5djqt.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776399899/70-Cartera-Guess-Kiran-Slim-Clutch-Monograma-3_tvcl0c.jpg",
    ],
    descripcion:
      "Luce espectacular con esta cartera original que combina un sofisticado estampado de logotipos en tono crema con bordes negros en contraste. Su diseño tipo sobre con placa dorada ofrece una organización impecable y un estilo versátil que puedes llevar como clutch o dentro de tu bolso favorito.",
    precioContado: 900,
    precioCredito: 900,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: "Cartera Mini Guess Bitono Azul y Crema",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776402377/71-Cartera-Mini-Guess-Bitono-Azul-Crema-1_cdyqes.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776402377/71-Cartera-Mini-Guess-Bitono-Azul-Crema-1_cdyqes.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776402383/71-Cartera-Mini-Guess-Bitono-Azul-Crema-2_flpuox.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776402386/71-Cartera-Mini-Guess-Bitono-Azul-Crema-3_jzvpxu.jpg",
    ],
    descripcion:
      "Añade un toque de color a tus accesorios con esta cartera original de Guess en azul náutico y crema. Su diseño compacto con cierre de cremallera dorado es perfecto para llevar tus tarjetas y monedas esenciales con un estilo moderno y sofisticado que cabe en cualquier bolso.",
    precioContado: 800,
    precioCredito: 800,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: 'Cartera Mini Guess "Logo Love" Blush',
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776402669/72-Cartera-Mini-Guess-Logo-Love-Blush-1_lsvvmp.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776402669/72-Cartera-Mini-Guess-Logo-Love-Blush-1_lsvvmp.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776402678/72-Cartera-Mini-Guess-Logo-Love-Blush-2_dedwzb.webp",
    ],
    descripcion:
      "Luce encantadora con esta cartera original en tono rosa pastel con el icónico monograma de la marca en relieve. Su diseño compacto con herrajes en oro rosa es la mezcla perfecta de estilo y practicidad para llevar tus esenciales con elegancia y frescura.",
    precioContado: 800,
    precioCredito: 800,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: "Cartera Guess Jayla Snap Wallet Bitono",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776402850/73-Cartera-Guess-Jayla-Snap-Wallet-Bitono-1_qjfpqk.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776402850/73-Cartera-Guess-Jayla-Snap-Wallet-Bitono-1_qjfpqk.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776402853/73-Cartera-Guess-Jayla-Snap-Wallet-Bitono-2_bf9gap.webp",
    ],
    descripcion:
      "Elegancia y practicidad en un diseño compacto. Esta cartera original en combinación beige y negro destaca por su sofisticada placa frontal con el logo de Guess en tono dorado. Cuenta con un cierre de botón seguro, compartimento para billetes y monedero con cierre, ofreciendo organización impecable en un formato que cabe en cualquier bolso",
    precioContado: 800,
    precioCredito: 800,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: 'Cartera Guess Jayla Snap "Coffee Edition"',
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776403283/74-Cartera-Guess-Jayla-Snap-Coffee-Edition-1_t573zz.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776403283/74-Cartera-Guess-Jayla-Snap-Coffee-Edition-1_t573zz.webp",
    ],
    descripcion:
      "Estilo atemporal en un profundo tono café chocolate. Esta cartera original de piel sintética texturizada destaca por su placa metálica dorada y diseño compacto. Cuenta con monedero con cierre y compartimentos organizadores, siendo el accesorio ideal para quienes buscan elegancia y durabilidad en un solo lugar.",
    precioContado: 800,
    precioCredito: 800,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: 'Cartera Guess Foldover Zip "Black Stealth"',
    imagen: "",
    descripcion:
      "Sofisticación total en negro mate. Esta cartera original combina una solapa de broche con un compartimento de cierre envolvente para máxima seguridad. Su diseño estructurado y herrajes a tono la convierten en el accesorio básico y elegante que combina con cualquier bolso y estilo.",
    precioContado: 800,
    precioCredito: 800,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: 'Tarjetero Guess Jayla "Pure White" con Cierre',
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405073/76-Tarjetero-Guess-Jayla-Pure-White-con-Cierre-1_tp5844.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405073/76-Tarjetero-Guess-Jayla-Pure-White-con-Cierre-1_tp5844.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405067/76-Tarjetero-Guess-Jayla-Pure-White-con-Cierre-2_nmwyvq.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405062/76-Tarjetero-Guess-Jayla-Pure-White-con-Cierre-3_bufee2.webp",
    ],
    descripcion:
      "Lleva lo esencial con máxima elegancia en este tarjetero original en color blanco brillante. Su diseño inteligente cuenta con múltiples ranuras externas, una solapa de seguridad con broche y un práctico compartimento con cierre para monedas o billetes, ofreciendo lujo y funcionalidad en un formato ultra compacto.",
    precioContado: 600,
    precioCredito: 600,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: 'Cartera Guess Saffron French Wallet "Cream Logo"',
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405377/77-Cartera-Guess-Saffron-French-Wallet-Cream-Logo-2_pukkni.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405377/77-Cartera-Guess-Saffron-French-Wallet-Cream-Logo-2_pukkni.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405382/77-Cartera-Guess-Saffron-French-Wallet-Cream-Logo-1_unfb6n.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405387/77-Cartera-Guess-Saffron-French-Wallet-Cream-Logo-3_lztswy.webp",
    ],
    descripcion:
      "Elegancia clásica en un diseño compacto y funcional. Esta cartera original destaca por su estampado de monograma en tonos crema y letras doradas en relieve, combinando una solapa de seguridad con un compartimento de cierre envolvente. El accesorio perfecto para organizar tus tarjetas y efectivo con el lujo inconfundible de Guess.",
    precioContado: 800,
    precioCredito: 800,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: 'Tarjetero Guess Bowie "Taupe" Multi-Ranuras',
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405789/78-Tarjetero-Guess-Bowie-Taupe-Multi-Ranuras-1_vrxwiy.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405789/78-Tarjetero-Guess-Bowie-Taupe-Multi-Ranuras-1_vrxwiy.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405779/78-Tarjetero-Guess-Bowie-Taupe-Multi-Ranuras-2_emhofm.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776405784/78-Tarjetero-Guess-Bowie-Taupe-Multi-Ranuras-3_fklx7q.webp",
    ],
    descripcion:
      "Organiza tus tarjetas con estilo en este elegante tarjetero original en tono taupe. Destaca por su diseño de logotipos grabados en relieve y un práctico compartimento superior con cierre dorado para monedas o billetes, ofreciendo lujo compacto y funcionalidad total para tu día a día.",
    precioContado: 650,
    precioCredito: 650,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: 'Tarjetero Guess "Caramel" con Correa de Mano',
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776406123/79-Tarjetero-Guess-Caramel-Correa-de-Mano-1_cb8f4x.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776406123/79-Tarjetero-Guess-Caramel-Correa-de-Mano-1_cb8f4x.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776406127/79-Tarjetero-Guess-Caramel-Correa-de-Mano-2_namnuu.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776406132/79-Tarjetero-Guess-Caramel-Correa-de-Mano-3_yakipf.webp",
    ],
    descripcion:
      "Estilo y comodidad en un solo accesorio. Este tarjetero original presenta el icónico monograma de la marca, una elegante placa dorada de Guess Los Angeles y una práctica correa de tela para llevarlo en la muñeca. Incluye compartimento con cierre para mayor seguridad de tus pertenencias.",
    precioContado: 750,
    precioCredito: 750,
    categoria: "bolsas",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "carteras",
  },
  {
    nombre: 'Tarjetero Steve Madden "Red Passion" con Cierre',
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776406818/80-Tarjetero-Steve-Madden-Red-1_wvm7ak.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776406818/80-Tarjetero-Steve-Madden-Red-1_wvm7ak.jpg",
    ],
    descripcion:
      "Impacta con este tarjetero original en un vibrante color rojo con textura granulada de alta resistencia. Su diseño moderno incluye el logo de la marca grabado en relieve y un compartimento con cierre ideal para monedas o billetes doblados. Un accesorio compacto, audaz y lleno de estilo.",
    precioContado: 550,
    precioCredito: 550,
    categoria: "bolsas",
    marca: "Steve Madden",
    sexo: "dama",
    subCategoria: "carteras",
  },

  // Perfumes Caballero
  {
    nombre: "Guess Seductive Homme Blue",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961756/01-Guess-Seductive-Homme-Blue_tk2dvx.jpg",
    descripcion:
      "Guess Seductive Homme Blue es una fragancia de la familia Amaderada Acuática. Es ampliamente reconocida en la comunidad de fragancias por ser una alternativa económica, con un perfil  fresco y marino. ",
    precioContado: 1100,
    precioCredito: 1300,
    categoria: "perfumes",
    marca: "Guess",
    sexo: "caballero",
    subCategoria: "Amaderada",
    destacado: true,
  },
  {
    nombre: "Nautica Voyage Sport",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961756/02-Nautica-Voyage-Sport_yyf0rk.jpg",
    descripcion:
      "Nautica Voyage Sport es una fragancia de la familia Cítrica Aromática, diseñada para el hombre activo. Es una alternativa fresca que mezcla notas marinas con cítricos vibrantes y un fondo amaderado. Es ideal para el gimnasio o días calurosos, ofreciendo una sensación de limpieza energética a un precio muy competitivo.",
    precioContado: 600,
    precioCredito: 850,
    categoria: "perfumes",
    marca: "Nautica",
    sexo: "caballero",
    subCategoria: "Cítrica",
  },
  {
    nombre: "Guess Seductive Noir",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961756/03-Guess-Seductive-Noir_gf19fr.jpg",
    descripcion:
      "Guess Seductive Noir es una fragancia de la familia Ámbar Fougère. Es ampliamente reconocida en la comunidad de fragancias por ser una alternativa económica. Destaca por sus notas de pimienta, lavanda y un fondo especiado y cremoso de haba tonka muy seductor.",
    precioContado: 1150,
    precioCredito: 1350,
    categoria: "perfumes",
    marca: "Guess",
    sexo: "caballero",
    subCategoria: "Fougère",
    nuevo: true,
  },
  {
    nombre: "Nautica Voyage",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961756/04-Nautica-Voyage_zhah93.jpg",
    descripcion:
      "Nautica Voyage es una fragancia de la familia Amaderada Acuática. Es conocida por ser la reina de la frescura con su icónica nota de manzana verde frutal y loto. Es un aroma que evoca la brisa marina y hojas verdes, siendo un básico esencial para cualquier colección por su bajo costo.",
    precioContado: 600,
    precioCredito: 850,
    categoria: "perfumes",
    marca: "Nautica",
    sexo: "caballero",
    subCategoria: "Amaderada",
  },
  {
    nombre: "Salvatore Ferragamo Acqua Essenziale",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961757/05-Ferrafamo-Acqua-Essenziale_spqc8b.jpg",
    descripcion:
      "Acqua Essenziale es una fragancia de la familia Aromática Fougères. Es ampliamente reconocida en la comunidad de fragancias por ser una alternativa sofisticada que mezcla notas de menta y limón cítrico con un fondo marino. Logra un equilibrio perfecto entre la elegancia italiana y una frescura azul moderna, ideal para la oficina o eventos formales.",
    precioContado: 1500,
    precioCredito: 1850,
    categoria: "perfumes",
    marca: "Salvatore Ferragamo",
    sexo: "caballero",
    subCategoria: "Fougère",
    nuevo: true,
  },
  {
    nombre: "Mont Blanc Presence",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961757/06-Mont-Blanc-Presence_bofm6o.jpg",
    descripcion:
      "Montblanc Presence es una fragancia de la familia Ámbar Especiada. Es ampliamente reconocida en la comunidad de fragancias por su carácter distintivo que mezcla jengibre y canela especiada con manzana frutal. Es una opción madura y versátil que proyecta profesionalismo, siendo ideal para climas frescos por su aroma dulce, limpio y refinado.",
    precioContado: 1500,
    precioCredito: 1800,
    categoria: "perfumes",
    marca: "Mont Blanc",
    sexo: "caballero",
    subCategoria: "Oriental",
  },
  {
    nombre: "Tous Man Sport",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961758/07-Tous-Man-Sport_g4eo8b.jpg",
    descripcion:
      "Tous Man Sport es una fragancia de la familia Amaderada Aromática. Es ampliamente reconocida en la comunidad de fragancias por su apertura vibrante de limón cítrico y aldehídos, que evoluciona hacia un corazón de jengibre y manzana frutal. Ofrece una frescura energizante y juvenil, perfecta para el uso diario tras el deporte por su sencillez.",
    precioContado: 1600,
    precioCredito: 1950,
    categoria: "perfumes",
    marca: "Tous",
    sexo: "caballero",
    subCategoria: "Amaderada",
  },
  {
    nombre: "Salvatore Ferragamo Free Time",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961758/08-Ferragamo-Free-Time_geau92.jpg",
    descripcion:
      "Free Time es una fragancia de la familia Amaderada Aromática. Es ampliamente reconocida en la comunidad de fragancias por su composición relajada de jengibre especiado, limón cítrico y notas marinas. Proyecta un aire de libertad e informalidad, siendo una excelente opción para fines de semana donde se busca un aroma limpio y suave.",
    precioContado: 1400,
    precioCredito: 1700,
    categoria: "perfumes",
    marca: "Salvatore Ferragamo",
    sexo: "caballero",
    subCategoria: "Amaderada",
  },
  {
    nombre: "Lataffa Qimmah Man",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961759/09-Lataffa-Qimmah-Man_xjitrb.png",
    descripcion:
      "Lattafa Qimmah Man es una fragancia de la familia Oriental Amaderada. Es ampliamente reconocida en la comunidad de fragancias por ser una alternativa económica y potente que sigue la línea frutal y dulce de Phantom. Destaca por sus notas de pimienta especiada, lavanda y maderas, ofreciendo un desempeño sorprendente en duración y proyección.",
    precioContado: 1150,
    precioCredito: 1350,
    categoria: "perfumes",
    marca: "Lataffa",
    sexo: "caballero",
    subCategoria: "Oriental",
  },
  {
    nombre: "Moschino Toy Boy",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961759/10-Moschino-Toy-Boy_svfu2o.jpg",
    descripcion:
      "Moschino Toy Boy es una fragancia de la familia Amaderada Especiada. Es ampliamente reconocida en la comunidad de fragancias por su propuesta disruptiva basada en una rosa masculina, pimienta especiada y pera frutal. Es un perfume único que rompe estereotipos, ideal para hombres que buscan destacar con un aroma moderno y gran fijación.",
    precioContado: 1650,
    precioCredito: 1950,
    categoria: "perfumes",
    marca: "Moschino",
    sexo: "caballero",
    subCategoria: "Amaderada",
  },
  {
    nombre: "Salvatore Ferragamo Subtil",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961760/11-Salvatore-Ferragamo-Subtil_w2ebwo.jpg",
    descripcion:
      "Salvatore Ferragamo Subtil es una fragancia de la familia Amaderada Especiada. Es ampliamente reconocida en la comunidad de fragancias por su uso distintivo del jengibre y cardamomo especiado sobre una base de loto y mandarina cítrica. Es un aroma elegante y atemporal que se percibe fresco, ideal para un estilo clásico que busca distinción.",
    precioContado: 1500,
    precioCredito: 1800,
    categoria: "perfumes",
    marca: "Salvatore Ferragamo",
    sexo: "caballero",
    subCategoria: "Amaderada",
  },
  {
    nombre: "Coach Man Blue",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775961760/12-Coach-Blue_vpddas.jpg",
    descripcion:
      "Coach Man Blue es una fragancia de la familia Aromática Especiada, inspirada en la libertad de un viaje. Es ampliamente reconocida en la comunidad de fragancias por sus notas energizantes de lima cítrica y ajenjo, combinadas con pimienta negra y maderas claras. Es una opción moderna y fácil de gustar, que ofrece una frescura azul contemporánea perfecta para el uso diario.",
    precioContado: 1650,
    precioCredito: 1950,
    categoria: "perfumes",
    marca: "Coach",
    sexo: "caballero",
    subCategoria: "Cítrica",
  },

  // Perfumes Dama
  {
    nombre: "Salvatore Ferragamo Incanto Shine",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972271/01-Salvatore-Ferragamo-Incanto-Shine_scolci.jpg",
    descripcion:
      "Una explosión frutal y chispeante. Sus notas de piña y maracuyá la hacen perfecta para días de verano y mujeres optimistas que aman los aromas tropicales.",
    precioContado: 1250,
    precioCredito: 1500,
    categoria: "perfumes",
    marca: "Salvatore Ferragamo",
    sexo: "dama",
    subCategoria: "Floral",
  },
  {
    nombre: "Oscar de la Renta Extraordinary",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776046888/oscar-de-la-renta-extraordinary_zufd8o.avif",
    descripcion:
      "Delicadeza en una botella. Destaca por sus notas de flor de cerezo y rosas, con un toque suave de vainilla. Es una fragancia discreta, ideal para el trabajo o reuniones casuales.",
    precioContado: 1000,
    precioCredito: 1250,
    categoria: "perfumes",
    marca: "Oscar de la Renta",
    sexo: "dama",
    subCategoria: "Floral",
  },
  {
    nombre: "Lattafa Yara Rosa",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972272/03-Lattafa-Yara-Rosa_kksvwc.png",
    descripcion:
      'La fragancia viral que todas quieren. Es un aroma cremoso y dulce que combina orquídea y heliotropo con una base de vainilla y almizcle. Se siente como un "abrazo de fresas con crema".',
    precioContado: 1150,
    precioCredito: 1350,
    categoria: "perfumes",
    marca: "Lattafa",
    sexo: "dama",
    subCategoria: "Oriental",
  },
  {
    nombre: "Lattafa Yara Blanca",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972272/04-Lattafa-Yara-Blanca_mrfup2.png",
    descripcion:
      "Una versión más sofisticada y elegante. Abre con notas de jazmín y durazno que evolucionan hacia un fondo amaderado y dulce. Perfecta para quienes buscan un aroma floral con carácter.",
    precioContado: 1150,
    precioCredito: 1350,
    categoria: "perfumes",
    marca: "Lattafa",
    sexo: "dama",
    subCategoria: "Oriental",
  },
  {
    nombre: "Hugo Boss Woman Extrem",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972272/05-Hugo-Boss-Woman-Extrem_f2j4xt.jpg",
    descripcion:
      "Una fragancia fresca y revitalizante. Con bayas de Boysen y té negro, es ideal para la mujer activa que busca un aroma duradero y lleno de energía.",
    precioContado: 1350,
    precioCredito: 1650,
    categoria: "perfumes",
    marca: "Hugo Boss",
    sexo: "dama",
    subCategoria: "Floral",
  },
  {
    nombre: "Oscar de la Renta Extraordinary Petale",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776047812/06-Oscar-de-la-Renta-Extraordinary-petale_iulvbx.webp",
    descripcion:
      'Una versión aún más fresca y luminosa. Con bergamota y mandarina, se siente como una mañana soleada de primavera. Ideal para quienes aman los aromas "limpios" y florales.',
    precioContado: 1000,
    precioCredito: 1250,
    categoria: "perfumes",
    marca: "Oscar de la Renta",
    sexo: "dama",
    subCategoria: "Floral",
  },
  {
    nombre: "Salvatore Ferragamo Eleganza",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972274/07-Salvatore-Ferragamo-Eleganza_z9dfa9.jpg",
    descripcion:
      "La máxima expresión del lujo italiano. Un perfume floral amaderado potente y seductor, diseñado para la mujer que busca proyectar confianza y poder.",
    precioContado: 1600,
    precioCredito: 1950,
    categoria: "perfumes",
    marca: "Salvatore Ferragamo",
    sexo: "dama",
    subCategoria: "Floral",
  },
  {
    nombre: "Lattafa Yara Collection Mini",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972274/08-Lattafa-Yara-Collection-Mini_cixlvx.jpg",
    descripcion:
      "¡Lleva el lujo árabe a todos lados! El set ideal para conocer la colección o para retocar tu aroma favorito durante el día en su práctico formato portátil.",
    precioContado: 1200,
    precioCredito: 1500,
    categoria: "perfumes",
    marca: "Lattafa",
    sexo: "dama",
    subCategoria: "Oriental",
  },
  {
    nombre: "Coach New York",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972275/09-Coach-New-York_px82jh.jpg",
    descripcion:
      "Un clásico moderno inspirado en la energía de la ciudad. Combina frambuesa, rosa turca y gamuza para un aroma femenino pero audaz.",
    precioContado: 1600,
    precioCredito: 1950,
    categoria: "perfumes",
    marca: "Coach",
    sexo: "dama",
    subCategoria: "Floral",
  },
  {
    nombre: "Sweet Tooth Sabrina Carpenter",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972275/10-Sweet-Tooth-Sabrina-Carpenter_yarlnh.jpg",
    descripcion:
      "Para las amantes de lo gourmand. Huele a malvaviscos, chocolate blanco y vainilla. Es divertido, coqueto y sumamente adictivo.",
    precioContado: 1200,
    precioCredito: 1500,
    categoria: "perfumes",
    marca: "Sabrina Carpenter",
    sexo: "dama",
    subCategoria: "Gourmand",
  },
  {
    nombre: "Wonderlust Michael Kors",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972276/11-Wonderlust-Michael-Kors_ljw6o0.jpg",
    descripcion:
      "Una invitación a la aventura. Con notas de leche de almendras y flores exóticas, es una fragancia romántica y cálida.",
    precioContado: 1500,
    precioCredito: 1750,
    categoria: "perfumes",
    marca: "Michael Kors",
    sexo: "dama",
    subCategoria: "Amaderada",
    destacado: true,
  },
  {
    nombre: "Cherie Kate Spade",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972276/12-Cherie-Kate-Spade_f7sqzb.jpg",
    descripcion:
      "La esencia de la alegría parisina. Una mezcla vibrante de frambuesa y flores que captura un espíritu libre y juguetón.",
    precioContado: 1500,
    precioCredito: 1750,
    categoria: "perfumes",
    marca: "Kate Spade",
    sexo: "dama",
    subCategoria: "Floral",
  },
  {
    nombre: "Jimmy Choo Floral",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972277/13-Jimmy-Choo-Floral_gmsfde.jpg",
    descripcion:
      "Delicado y sofisticado. Un bouquet de flores blancas con un toque cítrico que aporta una estela de elegancia sutil y natural.",
    precioContado: 1500,
    precioCredito: 1850,
    categoria: "perfumes",
    marca: "Jimmy Choo",
    sexo: "dama",
    subCategoria: "Floral",
  },
  {
    nombre: "Tous Gold",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972278/14-Tous_w5a8x3.jpg",
    descripcion:
      'El "oro" de la perfumería clásica. Una fragancia floral intensa que se ha convertido en un básico por su versatilidad y buen gusto.',
    precioContado: 1500,
    precioCredito: 1750,
    categoria: "perfumes",
    marca: "Tous",
    sexo: "dama",
    subCategoria: "Floral",
  },
  {
    nombre: "Ariana Grande Ari",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1775972278/15-Ariana-Grande-Ari_dztjwx.jpg",
    descripcion:
      "Un aroma floral frutal con un toque de malvavisco (marshmallow). Es juvenil, dulce y muy femenino, ideal para quienes quieren resaltar su lado más dulce.",
    precioContado: 1500,
    precioCredito: 1800,
    categoria: "perfumes",
    marca: "Ariana Grande",
    sexo: "dama",
    subCategoria: "Gourmand",
  },
  // Body Mists
  {
    nombre: "Platinum",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776034612/01-Platinum_oe0ibh.jpg",
    descripcion:
      "Elegancia moderna. Es un aroma metálico, fresco y amaderado. Se siente limpio pero con mucha personalidad, ideal para proyectar seguridad.",
    precioContado: 350,
    precioCredito: 350,
    categoria: "perfumes",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Covered in Roses",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776034613/02-Covered-in-Roses_nubay8.avif",
    descripcion:
      "Como un ramo de rosas recién cortadas. Es un floral clásico, suave y ultra femenino. Ideal para las románticas que aman los aromas delicados.",
    precioContado: 350,
    precioCredito: 350,
    categoria: "perfumes",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "A Thousand Wishes",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776034613/03-A-Thousand-Wishes_qlwf61.avif",
    descripcion:
      "¡Una fiesta en una botella! Es dulce, festivo y chispeante (como champaña rosada y crema de almendras). Perfecto para regalar o para cuando quieres sentirte alegre.",
    precioContado: 350,
    precioCredito: 350,
    categoria: "perfumes",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "In The Stars",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776034615/04-In-The-Stars_pwp3pr.jpg",
    descripcion:
      "Es el aroma del lujo. Una mezcla amaderada y radiante con ámbar blanco y sándalo. Huele a perfume caro, ideal para brillar en una cita o evento especial.",
    precioContado: 350,
    precioCredito: 350,
    categoria: "perfumes",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Fruity Musk",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776034616/05-Fruity-Musk_yifnju.jpg",
    descripcion:
      "El equilibrio perfecto. Combina la energía de las frutas con la suavidad del almizcle (musk). Es un aroma limpio que se funde con tu piel de forma muy natural.",
    precioContado: 350,
    precioCredito: 350,
    categoria: "perfumes",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Pink Obsessed",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776034616/06-Pink-Obsessed_f98fak.jpg",
    descripcion:
      "Un aroma dulce y adictivo. Huele a feminidad moderna, con toques florales dulces que se quedan en la piel como un abrazo de vainilla.",
    precioContado: 350,
    precioCredito: 350,
    categoria: "perfumes",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Japanese Cherry Blossom",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776049425/07-Japanese-Cherry-Blossom_rs4dss.png",
    descripcion:
      'El "bestseller" eterno. Un floral polvoso y seductor con notas de flor de cerezo y pera. Es un aroma nostálgico y muy reconocible que nunca falla.',
    precioContado: 350,
    precioCredito: 350,
    categoria: "perfumes",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Gingham",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776049652/08-Gingham_fx4s3l.webp",
    descripcion:
      "La esencia de la frescura. Es cítrico, floral y azul. Huele a sábanas limpias y aire puro; es el body mist perfecto para usar después de bañarte y sentirte fresca todo el día.",
    precioContado: 350,
    precioCredito: 350,
    categoria: "perfumes",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Lost in Santal",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776050141/09-Lost-in-Santal_vhonky.png",
    descripcion:
      'Sofisticación pura. Un aroma amaderado y especiado con una nota cálida de sándalo. Es perfecto para quienes buscan algo diferente, terroso y muy "chic".',
    precioContado: 350,
    precioCredito: 350,
    categoria: "perfumes",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Lavender & Vanilla",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776034620/10-Lavender-_-Vanilla_p2nfgi.jpg",
    descripcion:
      "La combinación perfecta para el bienestar. La lavanda relajante se mezcla con la calidez de la vainilla. Ideal para después de bañarte o antes de dormir.",
    precioContado: 330,
    precioCredito: 330,
    categoria: "perfumes",
    marca: "Victoria Secret",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Coconut Passion Brulee",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776034621/11-Coconut-Passion-Brulee_hjr63s.jpg",
    descripcion:
      'Una versión más intensa y "postre" del clásico coco. Huele a vainilla caramelizada y coco tostado. Es cálido, dulce y perfecto para quienes aman los aromas comestibles.',
    precioContado: 330,
    precioCredito: 330,
    categoria: "perfumes",
    marca: "Victoria Secret",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Lotus Cloud",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776050424/12-Lotus-Cloud_w0taav.avif",
    descripcion:
      "Un aroma floral etéreo y aireado. Es ligero como una nube, con notas de loto que transmiten paz y frescura pura.",
    precioContado: 330,
    precioCredito: 330,
    categoria: "perfumes",
    marca: "Victoria Secret",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Mango Temptation",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776034623/13-Mango-Temptation_kmz0p1.jpg",
    descripcion:
      "Una explosión tropical. Huele a mango maduro y flor de hibisco. Es exótico, dulce y perfecto para los días de sol o vacaciones.",
    precioContado: 330,
    precioCredito: 330,
    categoria: "perfumes",
    marca: "Victoria Secret",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Midnight Bloom",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776034624/14-Midnight-Bloom_epgwsi.jpg",
    descripcion:
      'El "dupe" famoso. Huele muy parecido a perfumes de alta gama (como Baccarat Rouge). Es un floral cálido con flor de luna y maderas suaves. Muy elegante.',
    precioContado: 330,
    precioCredito: 330,
    categoria: "perfumes",
    marca: "Victoria Secret",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Sweet Sugared Violet",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776052793/15-Sweet-Sugared-Violet_mg0bfh.webp",
    descripcion:
      "Imagina violetas frescas espolvoreadas con azúcar glass. Es un aroma dulce floral muy femenino, delicado y juguetón.",
    precioContado: 330,
    precioCredito: 330,
    categoria: "perfumes",
    marca: "Victoria Secret",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Pure Seduction",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776053676/16-Pure-Seduction_g5lw4t.jpg",
    descripcion:
      "El rey de los frutales. Huele a ciruela roja y fresia. Es intenso, jugoso y muy sexy. Ideal para una salida de noche o cuando quieres que todos noten tu perfume.",
    precioContado: 330,
    precioCredito: 330,
    categoria: "perfumes",
    marca: "Victoria Secret",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Love Spell",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776054481/17-Love-Spell_bmz4zg.png",
    descripcion:
      'Un clásico vibrante. Una mezcla de flor de cerezo y durazno. Es alegre, energético y muy femenino. Huele a "limpio frutal".',
    precioContado: 330,
    precioCredito: 330,
    categoria: "perfumes",
    marca: "Victoria Secret",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Sundrenched Blooms",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776053175/18-Sundrenched-Blooms_bcangv.avif",
    descripcion:
      "Como un campo de flores bajo el sol. Es un floral luminoso y cálido con un toque de brisa marina. Muy fresco para el día a día.",
    precioContado: 330,
    precioCredito: 330,
    categoria: "perfumes",
    marca: "Victoria Secret",
    sexo: "dama",
    subCategoria: "Body Mist",
  },
  {
    nombre: "Velvet Petals",
    imagen:
      "https://demayoreo.com/cdn/shop/files/Diseno_sin_titulo_-_2025-09-25T150930.680.jpg?v=1768937736",
    descripcion:
      "Un favorito absoluto. Huele a flores blancas y glaseado de almendras. Es dulce pero sofisticado, muy suave al olfato.",
    precioContado: 330,
    precioCredito: 330,
    categoria: "perfumes",
    marca: "Victoria Secret",
    sexo: "dama",
    subCategoria: "Body Mist",
  },

  // Calzado

  {
    nombre: "Sandalia Tommy Hilfiger Azul Rayas",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776039877/01-Tommy-Rayas-Azul-Talla-23_wwqhel.jpg",
    descripcion:
      "Disfruta de la máxima comodidad con estas sandalias Tommy Hilfiger. Su suela ligera y flexible está diseñada para brindarte descanso en cada paso, mientras que sus tiras textiles suaves evitan rozaduras. Ideales para un día de playa o para andar relajada en casa sin perder el estilo.",
    precioContado: 570,
    precioCredito: 570,
    categoria: "calzado",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "3 Mex",
  },
  {
    nombre: "Sandalia Tommy Hilfiger Dark Blue con Puntos",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776039816/02-Tommy-Puntos-Azul-Talla-24_jafzfv.jpg",
    descripcion:
      "Disfruta de la máxima comodidad con estas sandalias Tommy Hilfiger. Su suela ligera y flexible está diseñada para brindarte descanso en cada paso, mientras que sus tiras textiles suaves evitan rozaduras. Ideales para un día de playa o para andar relajada en casa sin perder el estilo.",
    precioContado: 570,
    precioCredito: 570,
    categoria: "calzado",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "4 Mex",
  },
  {
    nombre: "Sandalia Tommy Hilfiger Cafe Rayas",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776039817/03-Tommy-Rayas-Cafe-Talla-25_boinzw.jpg",
    descripcion:
      "Disfruta de la máxima comodidad con estas sandalias Tommy Hilfiger. Su suela ligera y flexible está diseñada para brindarte descanso en cada paso, mientras que sus tiras textiles suaves evitan rozaduras. Ideales para un día de playa o para andar relajada en casa sin perder el estilo.",
    precioContado: 570,
    precioCredito: 570,
    categoria: "calzado",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "5 Mex",
  },
  {
    nombre: "Sandalia Tommy Hilfiger Negras Rayas",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776039817/04-Tommy-Rayas-Negro-Talla-25_yekq1p.jpg",
    descripcion:
      "Disfruta de la máxima comodidad con estas sandalias Tommy Hilfiger. Su suela ligera y flexible está diseñada para brindarte descanso en cada paso, mientras que sus tiras textiles suaves evitan rozaduras. Ideales para un día de playa o para andar relajada en casa sin perder el estilo.",
    precioContado: 570,
    precioCredito: 570,
    categoria: "calzado",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "5 Mex",
  },
  {
    nombre: "Sandalia Tommy Hilfiger Verde Rayas",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776039817/05-Tommy-Rayas-Verde-Talla-27_wbxjgp.jpg",
    descripcion:
      "Disfruta de la máxima comodidad con estas sandalias Tommy Hilfiger. Su suela ligera y flexible está diseñada para brindarte descanso en cada paso, mientras que sus tiras textiles suaves evitan rozaduras. Ideales para un día de playa o para andar relajada en casa sin perder el estilo.",
    precioContado: 570,
    precioCredito: 570,
    categoria: "calzado",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "7 Mex",
  },
  {
    nombre: "Sandalia Tommy Hilfiger Negras",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776039818/06-Tommy-Negro-Talla-28_ubrkpv.jpg",
    descripcion:
      "Disfruta de la máxima comodidad con estas sandalias Tommy Hilfiger. Su suela ligera y flexible está diseñada para brindarte descanso en cada paso, mientras que sus tiras textiles suaves evitan rozaduras. Ideales para un día de playa o para andar relajada en casa sin perder el estilo.",
    precioContado: 570,
    precioCredito: 570,
    categoria: "calzado",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "8 Mex",
  },
  {
    nombre: "Sandalia de Piso Guess Color Vino",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776044044/07-Guess-Rojo-Talla-6_ttknva.jpg",
    descripcion:
      "Estas espectaculares sandalias en color burgundy son el balance perfecto entre clase y comodidad. Con el icónico logo dorado de Guess como protagonista, son ideales para darle ese toque de distinción a un outfit casual o elevar tu look de fin de semana. ¡Un básico de lujo que tus pies merecen!",
    precioContado: 900,
    precioCredito: 900,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "6 Mex",
  },
  {
    nombre: "Sandalia de Piso Guess Color Negro Talla 6",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776044043/08-Guess-Negro-Talla-6_q42bms.jpg",
    descripcion:
      "Eleva tu look diario con estas exclusivas sandalias Guess Los Angeles. Su diseño sofisticado en color negro profundo resalta por el icónico herraje triangular dorado, símbolo de distinción y estilo. Son esa pieza clave que transforma un outfit sencillo en uno de impacto. ¡El toque de brillo que tu clóset necesita!",
    precioContado: 900,
    precioCredito: 900,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "6 Mex",
  },
  {
    nombre: "Sandalia de Piso Guess Color Crema",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776044890/09-Guess-Cremita-Talla-5_obrt3t.jpg",
    descripcion:
      "Eleva tu estilo casual con estas espectaculares sandalias GBG Los Angeles. Su diseño en tono crema con el estampado icónico de la marca se fusiona perfectamente con el imponente logo en cristales brillantes.",
    precioContado: 900,
    precioCredito: 900,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "5 Mex",
  },
  {
    nombre: "Sandalia Guess Holograma Color Chocolate",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776045307/10-Guess-Holograma-Chocolate-Talla-3_zwtyrc.jpg",
    descripcion:
      "Estas sandalias GBG Los Angeles en tonos café son la definición de un clásico renovado. El contraste del estampado monograma con los detalles dorados las hace ver súper costosas y elegantes.",
    precioContado: 900,
    precioCredito: 900,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "3 Mex",
  },
  {
    nombre: "Sandalia de Piso Guess Color Negro",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776044043/08-Guess-Negro-Talla-6_q42bms.jpg",
    descripcion:
      "Eleva tu look diario con estas exclusivas sandalias Guess Los Angeles. Su diseño sofisticado en color negro profundo resalta por el icónico herraje triangular dorado, símbolo de distinción y estilo. Son esa pieza clave que transforma un outfit sencillo en uno de impacto. ¡El toque de brillo que tu clóset necesita!",
    precioContado: 900,
    precioCredito: 900,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "5 Mex",
  },
  {
    nombre: "Sandalias Quiksilver Cafe con Negro",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776056475/29-Sandalias-Quiksilver-Talla-9_ojitfq.jpg",
    descripcion:
      "Eleva tu calzado de verano con las icónicas Carver Suede. Confeccionadas con una parte superior de gamuza suave y costuras de contraste, estas sandalias ofrecen una durabilidad superior sin sacrificar el confort.",
    precioContado: 650,
    precioCredito: 650,
    categoria: "calzado",
    marca: "Quiksilver",
    sexo: "caballero",
    subCategoria: "sandalias",
    talla: "9 Mex",
  },
  {
    nombre: "Sanadalia Guess Holograma Color Blanco",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776047305/11-Guess-Holograma-Blanco-Talla-6_fbflgz.jpg",
    descripcion:
      "Descubre la sofisticación con estas nuevas sandalias Guess Los Angeles. Su diseño en tela con el icónico monograma en tonos beige y el detalle del logo triangular dorado crean un look ultra premium.",
    precioContado: 900,
    precioCredito: 900,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "6 Mex",
  },
  {
    nombre: "Sanadalia Pines Karl Lagerfeld",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776047757/12-Karl-Laferfeld-Talla-5_xzbr0s.jpg",
    descripcion:
      "Descubre estas exclusivas sandalias Karl Lagerfeld Paris. Su icónico diseño en color negro destaca por los detalles metálicos de Choupette, la gatita más famosa de la moda, y el monograma de la marca.",
    precioContado: 950,
    precioCredito: 950,
    categoria: "calzado",
    marca: "Karl Lagerfeld",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "5 Mex",
  },
  {
    nombre: "Sandalia de Piso Guess Color Nude Charol",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776048560/14-Guess-Nude-Charol-Talla-4_gkbspl.jpg",
    descripcion:
      "Descubre la sofisticación de estas sandalias GBG Los Angeles en acabado charol. Su color nude es el aliado perfecto para alargar visualmente la figura, mientras que el emblemático herraje plateado de la marca le da ese toque de lujo que amas.",
    precioContado: 900,
    precioCredito: 900,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "4 Mex",
  },
  {
    nombre: "Sandalia de Piso Guess Color Tabaco",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776048806/15-Guess-color-tabaco-Talla-4_gtydln.jpg",
    descripcion:
      "Descubre la versatilidad de estas sandalias Guess Los Angeles en color café tabaco. El contraste de la piel sintética suave con el icónico herraje dorado crea un look de lujo artesanal que nunca pasa de moda.",
    precioContado: 900,
    precioCredito: 900,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "4 Mex",
  },
  {
    nombre: "Sandalia  de Piso Guess Color Mezclilla",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776048931/16-Guess-Mezclilla-Obscura-Talla-4_wjunzg.jpg",
    descripcion:
      "Descubre estas exclusivas sandalias Guess que mezclan la frescura de la mezclilla con la sofisticación de los detalles en café y dorado. El logo central resaltado sobre la placa blanca las convierte en una pieza única de colección.",
    precioContado: 900,
    precioCredito: 900,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "sandalias",
    talla: "4 Mex",
  },
  {
    nombre: "Tenis Reebok Chunky Color Chocolate y Rosa",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776049961/17-Tenis-Reebook-Cafe-Rosa-Talla-6_pwxryy.jpg",
    descripcion:
      "Descubre la combinación perfecta de frescura y estilo con estos Reebok originales. Su diseño en tono marrón chocolate con detalles en rosa pastel y blanco los hace únicos y súper fáciles de combinar.",
    precioContado: 2000,
    precioCredito: 2499,
    categoria: "calzado",
    marca: "Reebok",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "6 Mex",
  },
  {
    nombre: "Tenis Reebok Chunky Color Beige y Azul",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776049963/18-Tenis-Reebok-Beige-Azul-Talla-6_ynspku.jpg",
    descripcion:
      "Descubre la combinación perfecta de tonos crema, azul cielo y durazno con estos nuevos Reebok Road Prime. Su diseño robusto pero ligero es ideal para elevar cualquier look casual sin sacrificar la comodidad.",
    precioContado: 1500,
    precioCredito: 1850,
    categoria: "calzado",
    marca: "Reebok",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "6 Mex",
  },
  {
    nombre: "Tenis Reebok Bellwave Color Arena",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776050359/19-Tenis-Reebok-Color-Arena-Talla-6_wwgdt0.jpg",
    descripcion:
      "Eleva tus pasos con una silueta moderna y ligera. Estos tenis combinan un aire retro con acabados contemporáneos que se adaptan a cualquier ritmo de vida.",
    precioContado: 1500,
    precioCredito: 1850,
    categoria: "calzado",
    marca: "Reebok",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "6 Mex",
  },
  {
    nombre: "Tenis Reebok Lunex Color Crema",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776050966/20-Tenis-Reebok-Lunex-Color-Crema_pswwzn.jpg",
    descripcion:
      "Descubre la sofisticación de los nuevos Reebok Lunex. Su combinación de tonos crema con detalles plateados metálicos los hace brillar en cualquier outfit.",
    precioContado: 2000,
    precioCredito: 2499,
    categoria: "calzado",
    marca: "Reebok",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "4.5 Mex",
  },
  {
    nombre: "Tenis Guees Rose Gold",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776051513/21-Guess-Rose-Gold-talla-25_tnznbj.jpg",
    descripcion:
      "Dale un toque de lujo a tu look diario con estos exclusivos tenis. Su diseño combina el icónico estampado de logotipos con detalles en rose gold y acabados metálicos que capturan todas las miradas.",
    precioContado: 1200,
    precioCredito: 1400,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "5.5 Mex",
  },
  {
    nombre: "Tenis Guees Blancos con Charms",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776051863/22-Tenis-Guess-Blancos-Charms_mw8cpl.jpg",
    descripcion:
      'Dale un toque de joyería a tu calzado con estos exclusivos tenis blancos. Su diseño destaca por los encantadores dijes dorados (candado, corazón y logo "G") que cuelgan de las agujetas, combinados con un elegante detalle en el talón color oro.',
    precioContado: 1200,
    precioCredito: 1400,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "4.5 Mex",
  },
  {
    nombre: "Tenis Guees Blancos Estilo Samba",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776052949/23-Tenis-Guess-Tipo-Samba-Talla_baydha.jpg",
    descripcion:
      "Únete a la tendencia de las siluetas retro con estos exclusivos tenis de GBG Los Angeles. Su diseño combina el blanco impecable con detalles en gamuza beige y toques negros, creando un contraste súper sofisticado.",
    precioContado: 1250,
    precioCredito: 1500,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "5.5 Mex",
    destacado: true,
  },
  {
    nombre: "Tenis Tommy Hilfiger Eryanne Blanco con rojo",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776053402/24-Tenis-Tommy-Hilfiger-Eryanne-Blanco-con-rojo_veiqru.jpg",
    descripcion:
      "Eleva tu look diario con los tenis Tommy Hilfiger Eryanne. Su diseño en blanco impecable con franjas rojas vibrantes y el icónico logotipo de la marca lateral aporta una sofisticación única a cualquier outfit casual.",
    precioContado: 1250,
    precioCredito: 1500,
    categoria: "calzado",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "5 Mex",
  },
  {
    nombre: "Tenis Tommy Hilfiger en color gris con detalles rojos",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776053743/25-Tommy-Hilfiger-gris_r4qjuo.jpg",
    descripcion:
      "Descubre los nuevos Tommy Hilfiger en tono gris plata. El equilibrio perfecto entre la frescura de la malla y la distinción de los detalles en rojo y blanco. Su silueta ligera los convierte en el par ideal para acompañarte todo el día con el sello inconfundible de la marca.",
    precioContado: 1400,
    precioCredito: 1750,
    categoria: "calzado",
    marca: "Tommy Hilfiger",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "6 Mex",
  },
  {
    nombre: "Tenis Guess en color rosa viejo",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776054546/26-Tenis-Guess-en-color-rosa-viejo_h3sxnv.jpg",
    descripcion:
      "Descubre los nuevos tenis Guess en un delicado tono rosa viejo. Su diseño ligero con detalles en blanco y el icónico logo dorado lateral los convierten en el accesorio perfecto para elevar cualquier outfit casual.",
    precioContado: 1600,
    precioCredito: 1999,
    categoria: "calzado",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "6 Mex",
  },
  {
    nombre: "Tenis Reebook R400 Rojo",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776055295/27-Reebok-Rojo-Talla-8.5_iunppr.jpg",
    descripcion:
      "Dale un toque de herencia a tus pasos con este diseño inspirado en los archivos de running de los años 60. Su silueta discreta y estética vintage en un rojo vibrante son la combinación perfecta para quienes buscan destacar con estilo y personalidad. ¡Es la joya retro que tu colección de sneakers necesitaba!.",
    precioContado: 1300,
    precioCredito: 1699,
    categoria: "calzado",
    marca: "Reebok",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "5.5 Mex",
  },
  {
    nombre: "Tenis Reebok Fiori Azul",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776055899/28-Reebook-Azuk_ba7dtm.jpg",
    descripcion:
      "Descubre la esencia retro de los Reebok Fiori. Su diseño clásico en un azul intenso, combinado con detalles en rosa pastel, crea un look fresco y lleno de personalidad.",
    precioContado: 1300,
    precioCredito: 1699,
    categoria: "calzado",
    marca: "Reebok",
    sexo: "dama",
    subCategoria: "tenis",
    talla: "5 Mex",
  },

  // Accesorios
  {
    nombre: "Cactus Blossom",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776042107/01-Cactus-Blossom_ymitrm.jpg",
    descripcion:
      "Una mezcla exótica y fresca de pétalos de cactus, coco y limón. Es un aroma floral-frutal muy refrescante.",
    precioContado: 80,
    precioCredito: 80,
    categoria: "accesorios",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "gel antibacterial",
  },
  {
    nombre: "Raspberries & Whipped Vanilla",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776042107/02-Raspberries-_-Whipped-Vanilla_uzrjin.jpg",
    descripcion:
      "Una delicia cremosa. Huele a frambuesas rosas mezcladas con vainilla batida. ¡Es como llevar un postre en las manos!",
    precioContado: 80,
    precioCredito: 80,
    categoria: "accesorios",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "gel antibacterial",
  },
  {
    nombre: "Fiji White Sands",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776042108/03-Fiji-White-Sands_nyhctw.avif",
    descripcion:
      "Vacaciones instantáneas. Notas de caña de azúcar, sándalo blanco y mandarina. Huele a playa de lujo y sol.",
    precioContado: 80,
    precioCredito: 80,
    categoria: "accesorios",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "gel antibacterial",
  },
  {
    nombre: "Lavander Vanilla",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776042109/04-Lavander-Vanilla_ajkk4d.avif",
    descripcion:
      "Tu momento de paz. La lavanda relajante se suaviza con la vainilla para un aroma limpio y reconfortante. Perfecto para usar antes de comer o en la oficina.",
    precioContado: 80,
    precioCredito: 80,
    categoria: "accesorios",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "gel antibacterial",
  },
  {
    nombre: "Watermelon Lemonade",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776042110/05-Watermelon-Lemonade_pjfv4g.jpg",
    descripcion:
      "El favorito del verano. Una mezcla ultra refrescante de sandía jugosa y limonada fría con hielo.",
    precioContado: 80,
    precioCredito: 80,
    categoria: "accesorios",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "gel antibacterial",
  },
  {
    nombre: "Raspberries Tangerine",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776042111/06-Raspberries-Tangerine_qshuj1.avif",
    descripcion:
      "Energía pura. La acidez de la mandarina combinada con el dulzor de las frambuesas rojas. Ideal para despertar los sentidos.",
    precioContado: 80,
    precioCredito: 80,
    categoria: "accesorios",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "gel antibacterial",
  },
  {
    nombre: "Japanese Cherry Blossom",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776042112/07-Japanese-Cherry-Blossom_h4dtdd.jpg",
    descripcion:
      "El ícono de la elegancia. Un aroma floral sofisticado con notas de flor de cerezo, pera asiática y sándalo.",
    precioContado: 80,
    precioCredito: 80,
    categoria: "accesorios",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "gel antibacterial",
  },
  {
    nombre: "Champagne Toast",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776042113/08-Champagne-Toast_efgiwa.avif",
    descripcion:
      "El aroma de la celebración. Un toque festivo de champaña rosada, bayas dulces y mandarina jugosa. Es elegante y chispeante.",
    precioContado: 80,
    precioCredito: 80,
    categoria: "accesorios",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "gel antibacterial",
  },
  {
    nombre: "Black Cherry Merlot",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776042114/09-Black-Cherry-Merlot_aubnzz.avif",
    descripcion:
      "Sofisticado y rico. Una mezcla oscura de cerezas negras, frambuesas y un toque de vino tinto. Muy elegante.",
    precioContado: 80,
    precioCredito: 80,
    categoria: "accesorios",
    marca: "Bath & Body Works",
    sexo: "dama",
    subCategoria: "gel antibacterial",
  },
  {
    nombre: "Toalla Lacoste Naranja",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776057545/01-Toalla-Lacoste-Naranja_tt5fzf.jpg",
    descripcion:
      "Envuelve tu piel en la suavidad superior de la toalla de baño Lacoste Match. Confeccionada al 100% con algodón premium de 600 GSM, esta toalla no solo destaca por su vibrante color naranja, sino por su increíble capacidad de absorción y durabilidad excepcional.",
    precioContado: 700,
    precioCredito: 700,
    categoria: "accesorios",
    marca: "Lacoste",
    sexo: "unisex",
    subCategoria: "Toallas",
  },
  {
    nombre: "Gorra Columbia modelo Snapback Trucker",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776058575/02-Gorra-Columbia-Beige-Gris_snhzk5.jpg",
    descripcion:
      'No importa el destino, hazlo con estilo. Esta gorra Columbia "Tested Tough" combina la herencia de la montaña con un diseño moderno en tono Ancient Fossil.',
    precioContado: 700,
    precioCredito: 700,
    categoria: "accesorios",
    marca: "Columbia",
    sexo: "caballero",
    subCategoria: "Gorras",
    destacado: true,
  },
  {
    nombre: "Gorra Columbia, modelo Snapback Trucker Color Durazno",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776058986/03-Gorra-Columbia-Rosa-Viejo_c6haoq.jpg",
    descripcion:
      "No importa el destino, hazlo con estilo. Esta gorra Columbia combina la herencia de la montaña con un diseño moderno y femenino en color durazno.",
    precioContado: 700,
    precioCredito: 700,
    categoria: "accesorios",
    marca: "Columbia",
    sexo: "caballero",
    subCategoria: "Gorras",
  },
  {
    nombre: "Gorra Columbia PFG Snapback Trucker en color azul cielo",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776059260/04-Gorra-Columbia-Azul_jdo8px.jpg",
    descripcion:
      "Descubre la nueva gorra Columbia Snapback en una combinación ganadora: azul cielo y malla gris. Un diseño fresco, dinámico y listo para acompañarte en cualquier plan bajo el sol.",
    precioContado: 700,
    precioCredito: 700,
    categoria: "accesorios",
    marca: "Columbia",
    sexo: "caballero",
    subCategoria: "Gorras",
  },
  {
    nombre: "Gorra Adidas Saturday Relaxed en color beige",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776060848/13-Gorra-Adidas-Mujer_s2nbsz.jpg",
    descripcion:
      "Completa tu outfit con esta gorra Adidas en tono arena. Su diseño relaxed fit ofrece un ajuste cómodo y relajado, ideal para esos días donde buscas un estilo impecable sin esfuerzo.",
    precioContado: 580,
    precioCredito: 580,
    categoria: "accesorios",
    marca: "Adidas",
    sexo: "dama",
    subCategoria: "Gorras",
  },{
    nombre: "Gorra Champion Beige con Morado",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776386682/14-Gorra-Champion-Beige-con-Morado-1_onaogs.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776386682/14-Gorra-Champion-Beige-con-Morado-1_onaogs.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776386698/14-Gorra-Champion-Beige-con-Morado-2_qp7weh.webp",
    ],
    descripcion:
      "Luce un estilo auténtico con esta gorra original de algodón premium, ideal para el clima de La Paz. Su diseño ajustable y logo bordado ofrecen comodidad y un toque urbano exclusivo a cualquier outfit diario.",
    precioContado: 570,
    precioCredito: 570,
    categoria: "accesorios",
    marca: "Champion",
    sexo: "dama",
    subCategoria: "Gorras",
  },
  {
    nombre: "Cosmetiquera Guess Hologramas Chocolate",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776392138/15-Cosmetiquera-Guess-Hologramas-Chocolate_ofmmzq.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776392138/15-Cosmetiquera-Guess-Hologramas-Chocolate_ofmmzq.jpg",
    ],
    descripcion:
      "Organiza tus esenciales con el máximo estilo en este neceser original de Guess. Confeccionado en piel sintética de alta calidad con el icónico monograma de la marca y placa triangular metálica, cuenta con un diseño de doble compartimento con cierre que ofrece un espacio amplio y seguro para tus cosméticos o artículos de aseo personal. Un accesorio de lujo indispensable para tus viajes o para lucir impecable en tu tocador.",
    precioContado: 700,
    precioCredito: 700,
    categoria: "accesorios",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "cosmetiquera",
  },
  {
    nombre: "Termo Stanley Quencher Pistacho 887ML",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776210663/17-Termo-Stanley-menta_mx51eq.webp",
    descripcion:
      "Descubre por qué el Quencher H2.0 es la pieza maestra de quienes no se detienen. En este refrescante tono verde pastel, no es solo un termo, es el upgrade definitivo para tu rutina diaria. Su diseño impecable y sofisticado robará todas las miradas mientras mantiene tu bebida favorita justo como te gusta. ¡Haz que cada trago cuente con el accesorio más viral del momento!",
    precioContado: 900,
    precioCredito: 900,
    categoria: "accesorios",
    marca: "Stanley",
    sexo: "unisex",
    subCategoria: "Termos",
  },
  {
    nombre: "Billetera Caballero Guess",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776387435/18-Cartera-Caballero-Guess-1_ag7r7v.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776387435/18-Cartera-Caballero-Guess-1_ag7r7v.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776387531/18-Cartera-Caballero-Guess-3_zuwpvi.webp",
    ],
    descripcion:
      "Redefine tu presencia con esta pieza maestra de silueta estructurada en un impecable tono vino. Su diseño \"belted\" con el icónico logo dorado central es el toque de distinción que robará todas las miradas en cualquier ocasión. El upgrade de lujo definitivo para una imagen impecable y llena de sofisticación.",
    precioContado: 680,
    precioCredito: 680,
    categoria: "accesorios",
    marca: "Guess",
    sexo: "caballero",
    subCategoria: "billeteras",
  },
  {
    nombre: "Billetera Calvin Klein de Piel con Protección RFID",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776387536/19-Cartera-Calvin-Klein-piel-1_bp5s9j.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776387536/19-Cartera-Calvin-Klein-piel-1_bp5s9j.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776387540/19-Cartera-Calvin-Klein-piel-2_mci4xw.jpg",
    ],
    descripcion:
      "Eleva tu estilo con esta cartera original de piel suave, diseñada para durar y proyectar elegancia. Su diseño bifold minimalista con placa metálica de logo es ideal para el caballero moderno que busca organización y distinción en un accesorio premium.",
    precioContado: 750,
    precioCredito: 750,
    categoria: "accesorios",
    marca: "Calvin Klein",
    sexo: "caballero",
    subCategoria: "billeteras",
  },
  {
    nombre: "Billetera Columbia \"Passcase\" en Piel Texturizada",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776388545/20-Cartera-Columbia-Passcase-01_zxzst0.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776388545/20-Cartera-Columbia-Passcase-01_zxzst0.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776388544/20-Cartera-Columbia-Passcase-2_cqutgv.webp",
    ],
    descripcion:
      "Resistencia y estilo en un solo accesorio. Esta cartera original de piel cuenta con un diseño de alta durabilidad y un escudo frontal grabado que le da un toque rudo y auténtico. Con compartimentos diseñados para la aventura diaria, es la elección ideal para quien busca calidad que aguante todo.",
    precioContado: 680,
    precioCredito: 680,
    categoria: "accesorios",
    marca: "Columbia",
    sexo: "caballero",
    subCategoria: "billeteras",
  },
  {
    nombre: "Billetera Tommy Hilfiger Leather Valet con Protección RFID",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776389297/21-Cartera-Tommy-Hilfiger-Leather-Valet-1_tmifdn.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776389297/21-Cartera-Tommy-Hilfiger-Leather-Valet-1_tmifdn.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776389299/21-Cartera-Tommy-Hilfiger-Leather-Valet-2_xziqyt.webp",
    ],
    descripcion:
      "Define tu estilo con esta cartera original de piel premium en color negro, detallada con la icónica placa metálica de la marca. Su tecnología de protección RFID mantiene tus tarjetas seguras contra robos de datos, combinando seguridad de vanguardia con un diseño sofisticado y atemporal.",
    precioContado: 750,
    precioCredito: 750,
    categoria: "accesorios",
    marca: "Tommy Hilfiger",
    sexo: "caballero",
    subCategoria: "billeteras",
  },
  {
    nombre: "Billetera Columbia Leather Bifold con Placa Metálica",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776389752/22-Cartera-Columbia-Leather-Bifold-1_nlnr1k.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776389752/22-Cartera-Columbia-Leather-Bifold-1_nlnr1k.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776389754/22-Cartera-Columbia-Leather-Bifold-2_jqkfvq.webp",
    ],
    descripcion:
      "Añade un toque de distinción a tu día a día con esta cartera original en color chocolate, fabricada con piel de alta resistencia. Su diseño elegante se realza con una placa metálica lateral, ofreciendo la durabilidad legendaria de Columbia en un formato compacto y funcional.",
    precioContado: 680,
    precioCredito: 680,
    categoria: "accesorios",
    marca: "Columbia",
    sexo: "caballero",
    subCategoria: "billeteras",
  },
  {
    nombre: "Billetera Columbia Black Leather con Placa de Identidad",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776390425/23-Cartera-Columbia-Passcase-1_fkn3ig.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776390425/23-Cartera-Columbia-Passcase-1_fkn3ig.jpg",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776390434/23-Cartera-Columbia-Passcase-2_zx698b.webp",
    ],
    descripcion:
      "Combina sobriedad y resistencia con esta billetera original en piel negra de grano fino. Su diseño compacto incluye una placa metálica distintiva que resalta la calidad de la marca, ofreciendo un accesorio versátil que se adapta tanto a un estilo casual como a uno más formal.",
    precioContado: 680,
    precioCredito: 680,
    categoria: "accesorios",
    marca: "Columbia",
    sexo: "caballero",
    subCategoria: "billeteras",
  },
  {
    nombre: "Billetera Columbia Bifold con Pespunte Decorativo",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776390635/24-Cartera-Columbia-Bifold-con-Pespunte_Decorativo-1_meyior.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776390635/24-Cartera-Columbia-Bifold-con-Pespunte_Decorativo-1_meyior.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776390638/24-Cartera-Columbia-Bifold-con-Pespunte_Decorativo-2_japbkj.webp",
    ],
    descripcion:
      "Resalta tu estilo con esta cartera original que combina la durabilidad de la piel con un diseño detallado de costuras reforzadas. Su placa metálica lateral y acabado texturizado la hacen el accesorio perfecto para quienes buscan un balance entre lo rústico y lo moderno, garantizando resistencia para el uso diario.",
    precioContado: 680,
    precioCredito: 680,
    categoria: "accesorios",
    marca: "Columbia",
    sexo: "caballero",
    subCategoria: "billeteras",
  },
  {
    nombre: "Billetera Columbia Sport con Bordado Central",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776390874/25-Cartera-Columbia-Sport-Bordado-Central_nu1vln.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776390874/25-Cartera-Columbia-Sport-Bordado-Central_nu1vln.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776390868/25-Cartera-Columbia-Sport-Bordado-Central-2_t3llu3.webp",
    ],
    descripcion:
      "Dale un giro a tu estilo con esta cartera original que destaca por su diseño de doble costura horizontal y piel lisa de alta calidad. Un modelo moderno y juvenil que mantiene la esencia resistente de Columbia, ideal para quienes buscan un accesorio con personalidad y gran durabilidad.",
    precioContado: 680,
    precioCredito: 680,
    categoria: "accesorios",
    marca: "Columbia",
    sexo: "caballero",
    subCategoria: "billeteras",
  },
  {
    nombre: "Billetera Columbia Bicolor Brown & Tan",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776391139/26-Billetera-Columbia-Bicolor-Brown-Tan_gptl6r.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776391139/26-Billetera-Columbia-Bicolor-Brown-Tan_gptl6r.jpg",
    ],
    descripcion:
      "Añade estilo a tu bolsillo con esta cartera original que combina dos tonos de café para un look moderno y distinguido. Su diseño con costura vertical y logo dorado ofrece una estética premium sin perder la resistencia característica de la marca, ideal para quienes buscan algo diferente y con clase.",
    precioContado: 680,
    precioCredito: 680,
    categoria: "accesorios",
    marca: "Columbia",
    sexo: "caballero",
    subCategoria: "billeteras",
  },
  {
    nombre: "Billetera Columbia Brown con Doble Costura Central",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776391570/27-Billetera-Columbia-Brown-con-Doble-Costura-Central-1_lzwsek.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776391570/27-Billetera-Columbia-Brown-con-Doble-Costura-Central-1_lzwsek.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776391556/27-Billetera-Columbia-Brown-con-Doble-Costura-Central-2_w8tc7u.webp",
    ],
    descripcion:
      "Añade un toque de carácter a tus accesorios con esta cartera original en tono café chocolate, destacada por sus detalles de costura horizontal reforzada. Fabricada en piel de alta resistencia con su distintiva placa metálica, es el complemento ideal para el hombre que busca un estilo rústico, duradero y con mucha personalidad.",
    precioContado: 680,
    precioCredito: 680,
    categoria: "accesorios",
    marca: "Columbia",
    sexo: "caballero",
    subCategoria: "billeteras",
  },
  {
    nombre: "Cosmetiquera Guess \"Logo Love\" Blush",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776392382/28-Cosmetiquera-Guess-Logo-Love-Blush-1_evwvde.jpg",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776392382/28-Cosmetiquera-Guess-Logo-Love-Blush-1_evwvde.jpg",
    ],
    descripcion:
      "Luce impecable con esta cosmetiquera original de Guess en un delicado tono rosa palo con estampado de monograma. Su diseño estructurado con placa metálica central y cierre dorado ofrece el espacio perfecto para tus básicos de belleza, combinando funcionalidad con el toque chic que caracteriza a la marca.",
    precioContado: 650,
    precioCredito: 650,
    categoria: "accesorios",
    marca: "Guess",
    sexo: "dama",
    subCategoria: "cosmetiquera",
  },
  {
    nombre: "Billetera Michael Kors Slim Billfold Signature",
    imagen:
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776392809/29-Billetera-Michael-Kors-Slim-Billfold-Signature-1_ond9yx.webp",
    imagenes: [
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776392809/29-Billetera-Michael-Kors-Slim-Billfold-Signature-1_ond9yx.webp",
      "https://res.cloudinary.com/djlgwpnqd/image/upload/v1776392812/29-Billetera-Michael-Kors-Slim-Billfold-Signature-2_ubyjoy.webp",
    ],
    descripcion:
      "Lleva la exclusividad contigo con esta cartera Michael Kors original, destacada por su icónico estampado de logotipos sobre un elegante fondo chocolate. Su diseño \"Slim\" es perfecto para el hombre que busca un perfil delgado sin sacrificar espacio, combinando el lujo moderno con la máxima funcionalidad para tus tarjetas y billetes.",
    precioContado: 999,
    precioCredito: 999,
    categoria: "accesorios",
    marca: "Michael Kors",
    sexo: "caballero",
    subCategoria: "billeteras",
    enOferta: true,
    precioOferta: 700,
    
  },
  // Ropa
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
  return products.filter((product) => product.nombre.toLowerCase().includes(q));
};
