import { Product } from '../types';

export const products: Product[] = [
  // Pincéis
  {
    id: 1,
    name: "Pincel Aquarela Premium Série 7",
    price: 89.90,
    originalPrice: 119.90,
    image: "https://m.media-amazon.com/images/I/41+MW66wt4L._AC_.jpg",
    category: "pinceis",
    description: "Pincel de alta qualidade para aquarela, cerdas naturais",
    isNew: true,
    isPromotion: true,
    stock: 25
  },
  {
    id: 2,
    name: "Conjunto Pincéis Sintéticos",
    price: 45.90,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc02dea2a5c424982a8fa542e63c8b093j.jpg_220x220q75.jpg_.avif",
    category: "pinceis",
    description: "Set com 12 pincéis sintéticos variados",
    isPopular: true,
    stock: 15
  },
  {
    id: 3,
    name: "Pincel Leque Natural",
    price: 32.90,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sd3e650a4aebb43219e3bd3ffc5bc8f58a.jpg_720x720q75.jpg_.avif",
    category: "pinceis",
    description: "Pincel em formato leque, ideal para texturas",
    stock: 30
  },

  // Tintas
  {
    id: 4,
    name: "Aquarela Profissional 24 Cores",
    price: 156.90,
    originalPrice: 189.90,
    image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "tintas",
    description: "Kit completo de aquarela profissional com 24 cores vibrantes",
    isNew: true,
    isPromotion: true,
    stock: 20
  },
  {
    id: 5,
    name: "Tinta Acrílica Básica 12 Cores",
    price: 67.90,
    image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "tintas",
    description: "Set de tintas acrílicas básicas, perfeitas para iniciantes",
    isPopular: true,
    stock: 35
  },
  {
    id: 6,
    name: "Guache Premium 18 Cores",
    price: 89.90,
    image: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "tintas",
    description: "Tintas guache de alta qualidade, cores opacas e intensas",
    stock: 18
  },

  // Cadernos
  {
    id: 7,
    name: "Caderno Sketchbook A4 Premium",
    price: 42.90,
    image: "https://images.pexels.com/photos/159666/books-notebook-education-school-159666.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "cadernos",
    description: "Sketchbook com papel de alta gramatura, 180g/m²",
    isNew: true,
    stock: 40
  },
  {
    id: 8,
    name: "Caderno Aquarela A5",
    price: 38.90,
    originalPrice: 48.90,
    image: "https://images.pexels.com/photos/159666/books-notebook-education-school-159666.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "cadernos",
    description: "Papel especial para aquarela, 300g/m²",
    isPromotion: true,
    isPopular: true,
    stock: 25
  },
  {
    id: 9,
    name: "Bloco Desenho A3",
    price: 29.90,
    image: "https://images.pexels.com/photos/159666/books-notebook-education-school-159666.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "cadernos",
    description: "Bloco para desenho técnico e artístico",
    stock: 50
  },

  // Canetas
  {
    id: 10,
    name: "Kit Canetas Nanquim 6 Espessuras",
    price: 78.90,
    image: "https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "canetas",
    description: "Canetas nanquim profissionais com 6 espessuras diferentes",
    isPopular: true,
    stock: 22
  },
  {
    id: 11,
    name: "Marcadores Artísticos 24 Cores",
    price: 95.90,
    originalPrice: 125.90,
    image: "https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "canetas",
    description: "Marcadores de alta qualidade com duas pontas",
    isNew: true,
    isPromotion: true,
    stock: 15
  },
  {
    id: 12,
    name: "Caneta Brush Pen Set",
    price: 52.90,
    image: "https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "canetas",
    description: "Set de canetas com ponta pincel para lettering",
    stock: 28
  },

  // Lápis
  {
    id: 13,
    name: "Lápis de Cor Profissional 48 Cores",
    price: 189.90,
    image: "https://images.pexels.com/photos/207665/pexels-photo-207665.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "lapis",
    description: "Lápis de cor de alta qualidade com 48 cores vibrantes",
    isNew: true,
    isPopular: true,
    stock: 12
  },
  {
    id: 14,
    name: "Kit Lápis Grafite Graduados",
    price: 34.90,
    originalPrice: 44.90,
    image: "https://images.pexels.com/photos/207665/pexels-photo-207665.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "lapis",
    description: "Set com lápis de diferentes durezas para desenho técnico",
    isPromotion: true,
    stock: 30
  },

  // Acessórios
  {
    id: 15,
    name: "Cavalete de Mesa Ajustável",
    price: 125.90,
    image: "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "acessorios",
    description: "Cavalete compacto e ajustável para mesa",
    isPopular: true,
    stock: 8
  },
  {
    id: 16,
    name: "Paleta de Vidro Premium",
    price: 67.90,
    image: "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "acessorios",
    description: "Paleta de vidro temperado para mistura de tintas",
    stock: 20
  }
];

export const categories = [
  { id: 'todos', name: 'Todos os Produtos', icon: '🎨' },
  { id: 'pinceis', name: 'Pincéis', icon: '🖌️' },
  { id: 'tintas', name: 'Tintas', icon: '🎨' },
  { id: 'cadernos', name: 'Cadernos', icon: '📓' },
  { id: 'canetas', name: 'Canetas', icon: '🖊️' },
  { id: 'lapis', name: 'Lápis', icon: '✏️' },
  { id: 'acessorios', name: 'Acessórios', icon: '🎯' }
];