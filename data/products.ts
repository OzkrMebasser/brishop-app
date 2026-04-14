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
      "Redefine tu look diario con este sofisticado bolso Tommy Hilfiger. Su diseño de rayas verticales en tonos crema y café, complementado con el icónico monograma dorado \"TH\" y acabados en piel sintética, aporta un aire de lujo atemporal a cualquier outfit.",
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
      "Eleva tu estilo diario con esta sofisticada bolsa crossbody original. Su diseño destaca por el icónico patrón de monograma \"TH\" en tonos crema y beige, enmarcado por elegantes bordes en color miel.",
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
      "Eleva tu estilo diario con este impresionante bolso Satchel de Tommy Hilfiger. Su diseño estructurado en el icónico tono Space Blue y el herraje metálico con el monograma \"TH\" en dorado son la personificación del lujo atemporal.",
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
