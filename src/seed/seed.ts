interface SeedData {
  categories: string[];
  products: Product[];
}

interface Product {
  name: string;
  category: Category;
  price: number;
  description: string;
  stock: number;
  images: string[];
  slug: string;
}

type Category = "panes" | "tortas" | "chifones-kekes" | "galletas";

// interface User {
//   email: string;
//   name: string;
//   role: string;
// }

export const initialData: SeedData = {
  categories: ["Panes", "Tortas", "Chifones-kekes", "Galletas"],
  products: [
    {
      name: "Pan Francés",
      category: "panes",
      price: 0.5,
      description:
        "Clásico pan francés, crujiente por fuera y suave por dentro.",
      slug: "pan-frances",
      stock: 60,
      images: ["20202029.webp", "633957-1200-auto.webp"],
    },
    {
      name: "Pan Integral",
      category: "panes",
      price: 1.0,
      description:
        "Pan elaborado con harina integral, ideal para una alimentación balanceada.",
      slug: "pan-integral",
      stock: 30,
      images: ["496334-1200-auto.webp","20255974-1.webp"],
    },
    {
      name: "Pan Petit",
      category: "panes",
      price: 1.5,
      description:
        "Pan elaborado con harina de maíz, esponjoso y con sabor dulce.",
      slug: "pan-petit",
      stock: 20,
      images: ["20133993-1.webp", "708835-1200-auto.webp"],
    },
    {
      name: "Pan Ciabatta",
      category: "panes",
      price: 1.8,
      description: "Pan italiano de textura crujiente y miga aireada.",
      slug: "pan-ciabatta",
      stock: 50,
      images: ["20113344.webp", "672481-1200-auto.webp"],
    },
    {
      name: "Pan de yema",
      category: "panes",
      price: 0.7,
      description: "Pan suave y dulce, ideal para acompañar el desayuno.",
      slug: "pan-de-yema",
      stock: 90,
      images: ["20344455.webp", "20210035-1.webp"],
    },
    {
      name: "Pan Baguette",
      category: "panes",
      price: 2.0,
      description: "Pan alargado de origen francés, con textura crujiente.",
      slug: "pan-baguette",
      stock: 70,
      images: ["478274-1200-auto.webp", "478191-1200-auto.webp"],
    },
    {
      name: "Pan de Centeno",
      category: "panes",
      price: 1.8,
      description: "Pan elaborado con harina de centeno, de sabor intenso.",
      slug: "pan-de-centeno",
      stock: 45,
      images: ["20357188-1.webp", "425951-1200-auto.webp"],
    },
    {
      name: "Pan Campesino",
      category: "panes",
      price: 1.5,
      description: "Pan rústico con una corteza gruesa y miga suave.",
      slug: "pan-campesino",
      stock: 50,
      images: ["425944-1200-auto.webp", "425945-1200-auto.webp"],
    },
    {
      name: "Pan Árabe Integral",
      category: "panes",
      price: 2.5,
      description:
        "Pan suave y esponjoso, elaborado con harina integral, ideal para acompañar platos tradicionales o para hacer deliciosas pita.",
      slug: "pan-arabe-integral",
      stock: 30,
      images: ["20168957.webp", "672491-1200-auto.webp"],
    },
    {
      name: "Pan chapla",
      category: "panes",
      price: 1.2,
      description:
        "Pan plano de textura suave y sabor delicado, ideal para acompañar comidas o como base para deliciosos bocadillos.",
      slug: "pan-chapla",
      stock: 60,
      images: ["20190939.webp", "20190939.webp"],
    },
    {
      name: "Pan Brioche",
      category: "panes",
      price: 1.8,
      description: "Pan dulce de textura suave y sabor mantequilloso.",
      slug: "pan-brioche",
      stock: 45,
      images: ["672477-1200-auto.webp", "672477-1200-auto.webp"],
    },
    {
      name: "Pan Caracol",
      category: "panes",
      price: 0.5,
      description:
        "Pan en espiral, suave y dulce, ideal para el desayuno o una merienda.",
      slug: "pan-caracol",
      stock: 90,
      images: ["20168952.webp", "145844.webp"],
    },
    {
      name: "Croissant Francés",
      category: "panes",
      price: 2.5,
      description:
        "Delicioso croissant de mantequilla, crujiente por fuera y suave por dentro.",
      slug: "croissant-frances",
      stock: 40,
      images: ["20188046.webp", "377710-1200-auto.webp"],
    },
    {
      name: "Pan Pizza",
      category: "panes",
      price: 2.2,
      description:
        "Pan suave con sabor a pizza, ideal para acompañar tus comidas o como base para tus propias pizzas.",
      slug: "pan-pizza",
      stock: 30,
      images: ["76363.webp", "672478-1200-auto.webp"],
    },
    {
      name: "Pan Media Luna Porteña",
      category: "panes",
      price: 1.2,
      description:
        "Pan suave y esponjoso en forma de media luna, con un delicado sabor ligeramente dulce, ideal para el desayuno o merienda.",
      slug: "pan-media-luna-portena",
      stock: 55,
      images: ["20188048.webp", "496484-1200-auto.webp"],
    },
    {
      name: "Croissant Dulce de Leche",
      category: "panes",
      price: 1.8,
      description:
        "Delicioso croissant relleno de dulce de leche, crujiente por fuera y con un suave relleno dulce en su interior.",
      slug: "croissant-dulce-de-leche",
      stock: 50,
      images: ["20188043.webp", "20188041.webp"],
    },
    {
      name: "Croissant de Mantequilla",
      category: "panes",
      price: 2.4,
      description:
        "Clásico croissant de mantequilla, con una textura hojaldrada, crujiente por fuera y suave por dentro, ideal para cualquier momento del día.",
      slug: "croissant-de-mantequilla",
      stock: 70,
      images: ["20183374.webp","20392701.webp"],
    },
    {
      name: "Pan Italiano",
      category: "panes",
      price: 1.7,
      description:
        "Pan de miga densa y corteza crujiente, con un sabor tradicional italiano, perfecto para acompañar cualquier comida o hacer deliciosos sándwiches.",
      slug: "pan-italiano",
      stock: 40,
      images: ["20144339.webp", "20144339.webp"],
    },
    {
      name: "Croissant Crema Cacao y Avellanas",
      category: "panes",
      price: 1.9,
      description:
        "Exquisito croissant relleno de crema de cacao y avellanas, con una capa exterior crujiente y un sabor dulce irresistible.",
      slug: "croissant-crema-cacao-y-avellanas",
      stock: 45,
      images: ["20390072.webp", "4355322.png"],
    },
    {
      name: "Karamanduka Chips de Chocolate x Kg",
      category: "panes",
      price: 7.5,
      description:
        "Delicioso pan suave relleno con chips de chocolate y un toque de caramelo, ideal para disfrutar en cualquier momento del día.",
      slug: "karamanduka-chips-de-chocolate-x-kg",
      stock: 50,
      images: ["45456644.webp", "176079-1200-825.webp"],
    },
    {
      name: "Galletas de Chocolate",
      category: "galletas",
      price: 2.0,
      description: "galletas crujientes con trozos de chocolate.",
      slug: "galletas-de-chocolate",
      stock: 100,
      images: ["463975-1200-auto.webp", "463976-1200-auto.webp"],
    },
    {
      name: "Galletas de Avena",
      category: "galletas",
      price: 1.8,
      description: "galletas de avena con un toque de miel.",
      slug: "galletas-de-avena",
      stock: 120,
      images: ["502659-1200-auto.webp", "502658-1200-auto.webp"],
    },
    {
      name: "Galletas de Mantequilla",
      category: "galletas",
      price: 1.5,
      description: "Clásicas galletas de mantequilla suaves y crujientes.",
      slug: "galletas-de-mantequilla",
      stock: 150,
      images: ["502748-1200-auto.webp", "502748-1200-auto.webp"],
    },
    {
      name: "Galletas de Vainilla",
      category: "galletas",
      price: 1.6,
      description: "galletas suaves con sabor a vainilla.",
      slug: "galletas-de-vainilla",
      stock: 140,
      images: ["463973-1200-auto.webp","463972-1200-auto.webp"],
    },
    {
      name: "Galletas de Agua 220g",
      category: "galletas",
      price: 7.5,
      description:
        "galletas crujientes y ligeras, ideales para acompañar té o café.",
      slug: "galletas-de-agua-220g",
      stock: 130,
      images: ["401068-1200-auto.webp", "279772-1200-auto.webp"],
    },
    {
      name: "Cocadas con Manjar",
      category: "galletas",
      price: 1.9,
      description:
        "Deliciosas cocadas de coco acompañadas de un suave manjar blanco.",
      slug: "cocadas-con-manjar",
      stock: 110,
      images: ["502752-1200-auto.webp","502751-1200-auto.webp"],
    },
    {
      name: "Alfajores con Manjar Blanco",
      category: "galletas",
      price: 2.1,
      description: "galletas con chocolate blanco y trozos de almendra.",
      slug: "alfajores-con-manjar-blanco",
      stock: 115,
      images: ["988936-1.webp","988936-2.webp"],
    },
    {
      name: "Cinnamon Rolls",
      category: "galletas",
      price: 2.5,
      description:
        "Deliciosos rollos de canela rellenos de azúcar y mantequilla, cubiertos con un suave glaseado de queso crema.",
      slug: "cinnamon-rolls",
      stock: 90,
      images: ["504043-1200-auto.webp", "504070-1200-auto.webp"],
    },
    {
      name: "Keke Marmoleado Redondo",
      category: "chifones-kekes",
      price: 15.0,
      description:
        "Pastel esponjoso con un delicioso diseño marmoleado de vainilla y cacao, ideal para cualquier ocasión.",
      slug: "keke-marmoleado-redondo",
      stock: 20,
      images: ["419405-1200-auto.webp", "419404-1200-auto.webp"],
    },
    {
      name: "Keke de Naranja Redondo",
      category: "chifones-kekes",
      price: 15.0,
      description:
        "Pastel esponjoso y refrescante con un delicado sabor a naranja, perfecto para cualquier momento del día.",
      slug: "keke-de-naranja-redondo",
      stock: 25,
      images: ["419407-1200-auto.webp", "419406-1200-auto.webp"],
    },
    {
      name: "Keke Marmoleado Rectangular",
      category: "chifones-kekes",
      price: 8.5,
      description:
        "Pastel esponjoso con un atractivo diseño marmoleado de vainilla y cacao, en formato rectangular ideal para compartir.",
      slug: "keke-marmoleado-rectangular",
      stock: 15,
      images: ["478334-1200-auto.webp","478201-1200-auto.webp"],
    },
    {
      name: "Keke de Vainilla Redondo",
      category: "chifones-kekes",
      price: 15.0,
      description:
        "Pastel esponjoso y suave con el clásico sabor a vainilla, perfecto para cualquier ocasión especial o como merienda.",
      slug: "keke-de-vainilla-redondo",
      stock: 12,
      images: ["276738-1200-auto.webp", "276742-1200-auto.webp"],
    },
    {
      name: "Keke de Naranja Rectangular",
      category: "chifones-kekes",
      price: 8.5,
      description:
        "Pastel esponjoso con un refrescante sabor a naranja, en formato rectangular, ideal para compartir en cualquier ocasión.",
      slug: "keke-de-naranja-rectangular",
      stock: 13,
      images: ["417254-1200-auto.webp", "417254-1200-auto.webp"],
    },
    {
      name: "Keke de Vainilla Rectangular",
      category: "chifones-kekes",
      price: 8.5,
      description:
        "Pastel suave y esponjoso con el clásico sabor a vainilla, en formato rectangular, perfecto para disfrutar y compartir.",
      slug: "keke-de-vainilla-rectangular",
      stock: 10,
      images: ["417252-1200-auto.webp","417252-1200-auto.webp"],
    },
    {
      name: "Chifón de Naranja 850g",
      category: "chifones-kekes",
      price: 17.5,
      description:
        "Pastel ligero y esponjoso con un refrescante toque de naranja, perfecto para un sabor delicado y suave en cada bocado.",
      stock: 10,
      images: ["530986-1200-auto.webp","530517-1200-auto.webp"],
      slug: "chifon-de-naranja-850g",
    },
    {
      name: "Keke de Chocolate Rectangular",
      category: "chifones-kekes",
      price: 8.5,
      description:
        "Pastel esponjoso de chocolate en formato rectangular, con un sabor intenso y suave que cautiva en cada bocado.",
      stock: 9,
      images: ["417253-1200-auto.webp", "417253-1200-auto.webp"],
      slug: "keke-de-chocolate-rectangular",
    },
    {
      name: "Keke de Chocolate Redondo",
      category: "chifones-kekes",
      price: 15.0,
      description:
        "Delicioso pastel esponjoso de chocolate en formato redondo, con un sabor profundo y suave que encanta a los amantes del cacao.",
      stock: 10,
      images: ["372236-1200-auto.webp", "372244-1200-auto.webp"],
      slug: "keke-de-chocolate-redondo",
    },
    {
      name: "Keke de Plátano con Choco Chips Redondo",
      category: "chifones-kekes",
      price: 15.0,
      description:
        "Pastel esponjoso de plátano con trozos de choco chips, en formato redondo, una combinación perfecta de dulzura y cacao.",
      stock: 7,
      images: ["350731-1200-auto.webp", "350750-1200-auto.webp"],
      slug: "keke-de-platano-con-choco-chips-redondo",
    },
    {
      name: "Chifón Marmoleado 850g",
      category: "chifones-kekes",
      price: 17.5,
      description:
        "Pastel esponjoso con un delicioso diseño marmoleado de vainilla y cacao, que ofrece una textura ligera y un sabor irresistible.",
      stock: 11,
      images: ["530992-1200-auto.webp", "530519-1200-auto.webp"],
      slug: "chifon-marmoleado-850g",
    },
    {
      name: "Chifón de Naranja 320g",
      category: "chifones-kekes",
      price: 11.0,
      description:
        "Pastel suave y esponjoso con un refrescante sabor a naranja, ideal para quienes buscan un toque cítrico en cada bocado.",
      stock: 10,
      images: ["530993-1200-auto.webp", "530521-1200-auto.webp"],
      slug: "chifon-de-naranja-320g",
    },
    {
      name: "Keke de Manzana con Canela 8 Porciones",
      category: "chifones-kekes",
      price: 15.0,
      description:
        "Pastel esponjoso de manzana con un toque de canela, dividido en 8 porciones perfectas para compartir y disfrutar en cualquier ocasión.",
      stock: 10,
      images: ["419410-1200-auto.webp", "419409-1200-auto.webp"],
      slug: "keke-de-manzana-con-canela-8-porciones",
    },
    {
      name: "Chifón Sabor Naranja Giardino 350g",
      category: "chifones-kekes",
      price: 12.5,
      description:
        "Pastel esponjoso de sabor a naranja, de 350g, perfecto para disfrutar su frescura y suavidad en cada bocado. Ideal para acompañar en cualquier momento del día.",
      stock: 10,
      images: ["474719-1200-auto.webp", "474719-1200-auto.webp"],
      slug: "chifon-sabor-naranja-giardino-350g",
    },
    {
      name: "Keke de Naranja con Cobertura Chocolate 12 Porciones",
      category: "chifones-kekes",
      price: 19.0,
      description:
        "Delicioso pastel de naranja cubierto con una suave capa de chocolate, dividido en 12 porciones ideales para compartir y disfrutar en cualquier ocasión especial.",
      stock: 12,
      images: ["452543-1200-auto.webp", "452542-1200-auto.webp"],
      slug: "keke-de-naranja-con-cobertura-chocolate-12-porciones",
    },
    {
      name: "Chifón Marmoleado 320g",
      category: "chifones-kekes",
      price: 19.0,
      description:
        "Pastel esponjoso de 320g con un delicioso diseño marmoleado de vainilla y cacao, perfecto para disfrutar en cualquier momento del día.",
      stock: 12,
      images: ["530990-1200-auto.webp", "530523-1200-auto.webp"],
      slug: "chifon-marmoleado-320g",
    },
    {
      name: "Cake Corazón con Manjar",
      category: "chifones-kekes",
      price: 14.5,
      description:
        "Delicioso pastel en forma de corazón, relleno con suave manjar blanco, ideal para sorprender en ocasiones especiales como San Valentín o aniversarios.",
      stock: 14,
      images: ["523145-1200-auto.webp", "523126-1200-auto.webp"],
      slug: "cake-corazon-con-manjar",
    },
    {
      name: "Torta Tres Leches Frutos del Bosque 16 Porciones",
      category: "tortas",
      price: 55.0,
      description:
        "Exquisita torta tres leches, acompañada de una mezcla de frutos del bosque frescos. Ideal para compartir en reuniones o celebraciones con sus 16 deliciosas porciones.",
      stock: 10,
      images: ["495273-1200-auto.webp", "494636-1200-auto.webp", "494637-1200-auto.webp"],
      slug: "torta-tres-leches-frutos-del-bosque-16-porciones",
    },
    {
      name: "Torta Helada de Fresa 20 Porciones",
      category: "tortas",
      price: 40.0,
      description:
        "Deliciosa torta helada con fresas frescas y una suave crema, perfecta para refrescar y disfrutar en cualquier ocasión. Con 20 porciones generosas, ideal para compartir en reuniones y celebraciones.",
      stock: 6,
      images: ["495174-1600-auto.webp", "495031-1200-auto.webp", "495032-1200-auto.webp"],
      slug: "torta-helada-de-fresa-20-porciones",
    },
    {
      name: "Torta Delicia de Moka 10 Porciones",
      category: "tortas",
      price: 26.0,
      description:
        "Irresistible torta de moka con capas de suave crema de café y bizcocho esponjoso, perfecta para los amantes del café. Viene en 10 porciones ideales para disfrutar en cualquier ocasión.",
      stock: 8,
      images: ["495272-1600-auto.webp", "495039-1200-auto.webp", "495040-1200-auto.webp"],
      slug: "torta-delicia-de-moka-10-porciones",
    },
    {
      name: "Torta de Chocolate 16 Porciones",
      category: "tortas",
      price: 39.0,
      description:
        "Sublime torta de chocolate, con capas esponjosas y relleno cremoso, perfecta para los amantes del buen chocolate. Con 16 porciones generosas, ideal para compartir en cualquier ocasión especial.",
      stock: 12,
      images: ["495182-1200-auto.webp", "494598-1200-auto.webp", "495026-1200-auto.webp"],
      slug: "torta-de-chocolate-16-porciones",
    },
    {
      name: "Torta Tres Leches 16 Porciones",
      category: "tortas",
      price: 39.0,
      description:
        "Deliciosa torta tres leches, suave y jugosa, perfecta para los amantes de los postres cremosos. Con 16 porciones generosas, es ideal para compartir en celebraciones y reuniones especiales.",
      stock: 12,
      images: ["495177-1200-auto.webp", "494884-1200-auto.webp", "494885-1200-auto.webp"],
      slug: "torta-tres-leches-16-porciones",
    },
    {
      name: "Torta Selva Negra 20 Porciones",
      category: "tortas",
      price: 56.0,
      description:
        "Irresistible torta Selva Negra con capas de bizcocho de chocolate, crema chantilly y cerezas frescas, ideal para los amantes de los postres elegantes. Con 20 porciones generosas, perfecta para compartir en celebraciones especiales.",
      stock: 12,
      images: ["495168-1200-auto.webp","495029-1200-auto.webp", "495030-1200-auto.webp"],
      slug: "torta-selva-negra-20-porciones",
    },
    {
      name: "Torta Helada de Fresa 10 Porciones",
      category: "tortas",
      price: 23.0,
      description:
        "Deliciosa torta helada con fresas frescas y una suave crema, perfecta para refrescar y disfrutar en cualquier ocasión. Con 10 porciones generosas, ideal para compartir en reuniones y celebraciones.",
      stock: 12,
      images: ["495199-1200-auto.webp", "494891-1200-auto.webp", "494892-1600-auto.webp"],
      slug: "torta-helada-de-fresa-10-porciones",
    },
    {
      name: "Torta de Chocolate con Manjar 10 Porciones",
      category: "tortas",
      price: 26.5,
      description:
        "Deliciosa torta de chocolate rellena con suave manjar blanco, perfecta para los amantes de la combinación dulce y cremosa. Viene en 10 porciones ideales para disfrutar en cualquier ocasión.",
      stock: 10,
      images: ["495386-1200-auto.webp", "494770-1200-auto.webp", "494771-1200-auto.webp"],
      slug: "torta-de-chocolate-con-manjar-10-porciones",
    },
    {
      name: "Torta Tentación de Lúcuma 16 Porciones",
      category: "tortas",
      price: 54.5,
      description:
        "Exquisita torta de lúcuma con una suave y cremosa capa de mousse, perfecta para los amantes de esta fruta peruana. Con 16 porciones generosas, ideal para compartir en cualquier ocasión especial.",
      stock: 10,
      images: ["495176-1200-auto.webp", "495018-1200-auto.webp", "495019-1200-auto.webp"],
      slug: "torta-tentacion-de-lucuma-16-porciones",
    },
    {
      name: "Torta Rectangular Tres Leches 7 Porciones",
      category: "tortas",
      price: 15.9,
      description:
        "Deliciosa torta tres leches, suave y jugosa, presentada en formato rectangular, ideal para compartir en pequeñas reuniones. Con 7 porciones perfectas para disfrutar de su cremosidad en cada bocado.",
      stock: 10,
      images: ["546910-1200-auto.webp", "552482-1200-auto.webp"],
      slug: "torta-rectangular-tres-leches-7-porciones",
    },
    {
      name: "Torta Torbellino de Chocolate 10 Porciones",
      category: "tortas",
      price: 26.0,
      description:
        "Una explosión de sabor en cada bocado: torta de chocolate esponjosa y cremosa, con capas que se deshacen en la boca, ideal para los amantes del buen chocolate. Con 10 porciones generosas, perfecta para compartir.",
      stock: 10,
      images: ["540142-1200-auto.webp", "540118-1200-auto.webp"],
      slug: "torta-torbellino-de-chocolate-10-porciones",
    },
    {
      name: "Torta Tres Leches Fresa y Coco 16 Porciones",
      category: "tortas",
      price: 57.0,
      description:
        "Deliciosa torta tres leches con un toque exótico de fresa y coco, creando una combinación perfecta de sabores frescos y cremosos. Con 16 porciones generosas, ideal para compartir en celebraciones y momentos especiales.",
      stock: 10,
      images: ["495170-1200-auto.webp", "494931-1200-auto.webp", "494932-1200-auto.webp"],
      slug: "torta-tres-leches-fresa-y-coco-16-porciones",
    },
    {
      name: "Torta Tentación de Moka 20 Porciones",
      category: "tortas",
      price: 50.0,
      description:
        "Irresistible torta de moka, con capas de suave crema de café y bizcocho esponjoso, perfecta para los amantes del sabor del café. Con 20 porciones generosas, ideal para compartir en grandes reuniones y celebraciones.",
      stock: 10,
      images: ["541631-1200-auto.webp", "541631-1200-auto.webp"],
      slug: "torta-tentacion-de-moka-20-porciones",
    },
    {
      name: "Torta de Chocolate 20 Porciones",
      category: "tortas",
      price: 50.0,
      description:
        "Deliciosa torta de chocolate con capas esponjosas y relleno cremoso, perfecta para los amantes del buen chocolate. Con 20 porciones generosas, ideal para compartir en reuniones y celebraciones especiales.",
      stock: 10,
      images: ["504095-1200-auto.webp", "504077-1200-auto.webp", "504078-1200-auto.webp"],
      slug: "torta-de-chocolate-20-porciones",
    },
    {
      name: "Torta Helada de Duraznos 20 Porciones",
      category: "tortas",
      price: 54.0,
      description:
        "Refrescante torta helada con una capa cremosa de duraznos frescos, ideal para disfrutar en días cálidos o en cualquier celebración. Con 20 porciones generosas, perfecta para compartir en reuniones y eventos especiales.",
      stock: 10,
      images: ["495175-1200-auto.webp", "495033-1200-auto.webp", "495034-1200-auto.webp"],
      slug: "torta-helada-de-duraznos-20-porciones",
    },
    {
      name: "Torta Rectangular Selva Negra 7 Porciones",
      category: "tortas",
      price: 18.0,
      description:
        "Torta Selva Negra en formato rectangular, con capas de bizcocho de chocolate, crema chantilly y cerezas frescas. Ideal para quienes buscan un postre elegante y delicioso en porciones perfectas para pequeños encuentros.",
      stock: 10,
      images: ["546911-1200-auto.webp", "552484-1200-auto.webp"],
      slug: "torta-rectangular-selva-negra-7-porciones",
    },
    {
      name: "Torta Festival Fresa 10 Porciones",
      category: "tortas",
      price: 27.0,
      description:
        "Deliciosa torta de fresa, con capas suaves de bizcocho y una cremosa cobertura de fresa fresca, perfecta para quienes buscan un postre ligero y refrescante. Con 10 porciones ideales para disfrutar en cualquier ocasión especial.",
      stock: 10,
      images: ["495983-1200-auto.webp", "495793-1200-auto.webp", "495794-1200-auto.webp"],
      slug: "torta-festival-fresa-10-porciones",
    },
    {
      name: "Torta Tres Leches de Chocolate 16 Porciones",
      category: "tortas",
      price: 73.0,
      description:
        "Exquisita torta tres leches con un delicioso toque de chocolate, perfecta para quienes disfrutan de la suavidad y cremosidad de este clásico postre con un giro único. Con 16 porciones generosas, ideal para compartir en celebraciones especiales.",
      stock: 10,
      images: ["508876-1200-auto.webp", "508854-1200-auto.webp", "508855-1200-auto.webp"],
      slug: "torta-tres-leches-de-chocolate-16-porciones",
    },
    {
      name: "Torta Delicia de Vainilla 20 Porciones",
      category: "tortas",
      price: 50.0,
      description:
        "Sublime torta de vainilla, con capas suaves y esponjosas, y un toque de crema que la hace irresistible. Con 20 porciones generosas, es perfecta para compartir en celebraciones, reuniones o cualquier ocasión especial.",
      stock: 10,
      images: ["541633-1200-auto.webp", "541633-1200-auto.webp"],
      slug: "torta-delicia-de-vainilla-20-porciones",
    },
    {
      name: "Torta Festival Caramel 10 Porciones",
      category: "tortas",
      price: 25.0,
      description:
        "Deliciosa torta con un toque único de caramelo, capas suaves de bizcocho y una cremosa cobertura que hará que cada bocado sea una auténtica tentación. Con 10 porciones ideales para compartir en pequeños eventos o celebraciones.",
      stock: 10,
      images: ["507826-1600-auto.webp", "507784-1200-auto.webp", "507785-1200-auto.webp"],
      slug: "torta-festival-caramel-10-porciones",
    },
    {
      name: "Tarta de Manzana",
      category: "tortas",
      price: 22.0,
      description:
        "Deliciosa tarta de manzana con una base crujiente, rellena de manzanas frescas y especias que la hacen irresistible. Perfecta para disfrutar en cualquier momento del día, con un toque casero que te encantará.",
      stock: 10,
      images: ["495171-1200-auto.webp", "494927-1200-auto.webp", "494928-1200-auto.webp"],
      slug: "tarta-de-manzana",
    },
  ],
};
