export type Product = {
  id: number
  name: string
  price: number
  category: string
  emoji: string
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Croissant",
    price: 4.99,
    category: "Pastries",
    emoji: "🥐",
    image: "/illustrations/croissant.png",
  },
  {
    id: 2,
    name: "Glazed Donut Stack",
    price: 6.99,
    category: "Donuts",
    emoji: "🍩",
    image: "/illustrations/glazed-donut-stack.png",
  },
  {
    id: 3,
    name: "Pink Cake Slice",
    price: 7.99,
    category: "Cakes",
    emoji: "🎂",
    image: "/illustrations/pink-cake-slice.png",
  },
  {
    id: 4,
    name: "Fudge Brownie",
    price: 3.99,
    category: "Brownies",
    emoji: "🍫",
    image: "/illustrations/chocolate-brownie.png",
  },
  {
    id: 5,
    name: "Vanilla Cupcake",
    price: 3.49,
    category: "Cupcakes",
    emoji: "🧁",
    image: "/illustrations/vanilla-cupcake.png",
  },
  {
    id: 6,
    name: "Sugar Cookie",
    price: 2.99,
    category: "Cookies",
    emoji: "🍪",
    image: "/illustrations/sugar-cookie.png",
  },
]

export const categories = ["All", "Pastries", "Donuts", "Cakes", "Brownies", "Cupcakes", "Cookies"]

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
]

export const testimonials = [
  {
    id: 1,
    name: "María G.",
    neighborhood: "Piantini",
    quote: "Los croissants son increíbles. Llegaron calentitos y súper frescos.",
  },
  {
    id: 2,
    name: "Carlos R.",
    neighborhood: "Naco",
    quote: "Pedí el stack de donuts para una reunión y todos quedaron fascinados.",
  },
  {
    id: 3,
    name: "Ana P.",
    neighborhood: "Bella Vista",
    quote: "La torta de cereza es mi debilidad. Sabor y presentación 10/10.",
  },
  {
    id: 4,
    name: "Luis M.",
    neighborhood: "Evaristo Morales",
    quote: "Entrega rápida y el brownie de chocolate es simplemente perfecto.",
  },
  {
    id: 5,
    name: "Sofía T.",
    neighborhood: "Los Prados",
    quote: "Cupcakes deliciosos y el servicio al cliente es excelente. ¡Repetiré!",
  },
]
