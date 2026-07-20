export type Product = {
  id: number
  name: string
  price: number
  category: string
  emoji: string
  image: string
  images?: string[]
  comingSoon?: boolean
  description?: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cheesecake",
    price: 2000,
    category: "Cheesecakes",
    emoji: "🍰",
    image: "/illustrations/products/cheesecake-whole.png",
    images: [
      "/illustrations/products/cheesecake-whole.png",
      "/illustrations/products/cheesecake-slice.png",
    ],
    description: "Toppings: limón, chinola, fresa, dulce de leche y nutella",
  },
  {
    id: 2,
    name: "Cheesecake (Porción)",
    price: 250,
    category: "Cheesecakes",
    emoji: "🍰",
    image: "/illustrations/products/cheesecake-slice.png",
    description: "Toppings: limón, chinola, fresa, dulce de leche y nutella",
  },
  {
    id: 3,
    name: "Brownies (media docena)",
    price: 700,
    category: "Brownies",
    emoji: "🍫",
    image: "/illustrations/products/brownies.png",
  },
  {
    id: 4,
    name: "Brownies (10 unid.)",
    price: 1000,
    category: "Brownies",
    emoji: "🍫",
    image: "/illustrations/products/brownies.png",
  },
  {
    id: 5,
    name: "Brownies (Docena)",
    price: 1200,
    category: "Brownies",
    emoji: "🍫",
    image: "/illustrations/products/brownies.png",
  },
  {
    id: 6,
    name: "Cinnamon Rolls (Unidad)",
    price: 200,
    category: "Cinnamon Rolls",
    emoji: "🌀",
    image: "/illustrations/products/cinnamon-rolls.png",
  },
  {
    id: 7,
    name: "Cinnamon Rolls (3)",
    price: 600,
    category: "Cinnamon Rolls",
    emoji: "🌀",
    image: "/illustrations/products/cinnamon-rolls.png",
  },
  {
    id: 8,
    name: "Cinnamon Rolls (6)",
    price: 1000,
    category: "Cinnamon Rolls",
    emoji: "🌀",
    image: "/illustrations/products/cinnamon-rolls.png",
  },
  {
    id: 9,
    name: "Carrot Cake",
    price: 1900,
    category: "Carrot Cake",
    emoji: "🥕",
    image: "/illustrations/products/carrot-cake.jpg",
    comingSoon: true,
  },
  {
    id: 10,
    name: "Carrot Cake (Porción)",
    price: 200,
    category: "Carrot Cake",
    emoji: "🥕",
    image: "/illustrations/products/carrot-cake.jpg",
    comingSoon: true,
  },
  {
    id: 11,
    name: "Key Lime Pie",
    price: 2000,
    category: "Key Lime Pie",
    emoji: "🥧",
    image: "/illustrations/products/key-lime-pie-placeholder.jpg",
    comingSoon: true,
  },
  {
    id: 12,
    name: "Key Lime Pie (Porción)",
    price: 250,
    category: "Key Lime Pie",
    emoji: "🥧",
    image: "/illustrations/products/key-lime-pie-placeholder.jpg",
    comingSoon: true,
  },
]

export const categories = [
  "Todo",
  "Cheesecakes",
  "Brownies",
  "Cinnamon Rolls",
  "Carrot Cake",
  "Key Lime Pie",
]

export const neighborhoods = [
  "Piantini",
  "Naco",
  "Evaristo Morales",
  "La Esperilla",
  "Serralles",
  "Bella Vista",
  "Los Cacicazgos",
  "Arroyo Hondo",
  "Los Prados",
  "Gazcue",
  "Ciudad Colonial",
  "Ciudad Universitaria",
  "El Millón",
  "Julieta Morales",
  "Lope de Vega",
  "Mirador Sur",
  "Paraíso",
  "Renacimiento",
  "San Gerónimo",
  "San Carlos",
  "Villa Olímpica",
  "Villa Juana",
  "Villas Agrícolas",
  "Cristo Rey",
  "Ensanche Quisqueya",
  "Ensanche La Fe",
  "Ensanche Luperón",
  "La Julia",
  "La Zurza",
  "Mejoramiento Social",
  "Palma Real",
  "Pedro Brand",
  "Sabana Perdida",
  "San Isidro",
  "Santo Domingo Este",
  "Santo Domingo Norte",
  "Santo Domingo Oeste",
]

export const testimonials = [
  {
    id: 1,
    name: "Lissa",
    neighborhood: "Santo Domingo",
    quote: "Wow amiga, que deliciaaaa😍😍hasta lamí el aluminio",
  },
  {
    id: 2,
    name: "Jenny",
    neighborhood: "Santo Domingo",
    quote: "Muy buenos, los brownies tenían la textura como debe ser (10/10); y el cheesecake te quedó mortal, la salsita que le echaste arriba 💯",
  },
  {
    id: 3,
    name: "Alberto",
    neighborhood: "Santo Domingo",
    quote: "Brownies del kilo.",
  },
  {
    id: 4,
    name: "Mariana",
    neighborhood: "Santo Domingo",
    quote: "En verdad tus brownies son el final.",
  },
]
