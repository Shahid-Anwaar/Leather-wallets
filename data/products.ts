export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  material: string;
  color: string;
  inStock: boolean;
  amazonLink: string;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Bifold Leather Wallet',
    slug: 'classic-bifold-leather-wallet',
    category: 'bifold-wallets',
    price: 49.99,
    image: '/pages/6.png',
    description:
      'A timeless bifold leather wallet crafted from premium full-grain leather for everyday use.',
    features: [
      'RFID Blocking Technology',
      'Multiple Card Slots',
      'Cash Compartment',
      'Slim Everyday Design',
    ],
    material: 'Full-Grain Leather',
    color: 'Dark Brown',
    inStock: true,
    amazonLink: 'https://amazon.com/dp/B0CLASSIC1',
    rating: 4.8,
    reviewCount: 2547,
  },
  {
    id: '2',
    name: 'Executive Brown Bifold Wallet',
    slug: 'executive-brown-bifold-wallet',
    category: 'bifold-wallets',
    price: 64.99,
    image: '/pages/2.png',
    description:
      'A refined brown bifold wallet designed for professionals who prefer premium style and practical storage.',
    features: [
      'Elegant Business Look',
      'Premium Stitching',
      'Bill Compartment',
      'RFID Protected',
    ],
    material: 'Top-Grain Leather',
    color: 'Coffee Brown',
    inStock: true,
    amazonLink: 'https://amazon.com/dp/B0EXECBIFOLD1',
    rating: 4.9,
    reviewCount: 3186,
  },
  {
    id: '3',
    name: 'Premium Trifold Leather Wallet',
    slug: 'premium-trifold-leather-wallet',
    category: 'trifold-wallets',
    price: 54.99,
    image: '/pages/7.png',
    description:
      'A premium trifold wallet designed with extra storage, rich leather texture, and refined craftsmanship.',
    features: [
      'Extra Card Storage',
      'Three-Fold Compact Design',
      'RFID Protection',
      'Durable Stitching',
    ],
    material: 'Top-Grain Leather',
    color: 'Chocolate Brown',
    inStock: true,
    amazonLink: 'https://amazon.com/dp/B0TRIFOLD1',
    rating: 4.7,
    reviewCount: 1923,
  },
  {
    id: '4',
    name: 'Vintage Trifold Leather Wallet',
    slug: 'vintage-trifold-leather-wallet',
    category: 'trifold-wallets',
    price: 59.99,
    image: '/pages/8.png',
    description:
      'A vintage-inspired trifold wallet with rustic leather finish, extra compartments, and classic charm.',
    features: [
      'Vintage Leather Finish',
      'Multiple Compartments',
      'Coin Pocket',
      'Secure Fold Design',
    ],
    material: 'Distressed Leather',
    color: 'Vintage Brown',
    inStock: true,
    amazonLink: 'https://amazon.com/dp/B0VINTTRIFOLD1',
    rating: 4.6,
    reviewCount: 1642,
  },
  {
    id: '5',
    name: 'Slim Minimalist Leather Wallet',
    slug: 'slim-minimalist-leather-wallet',
    category: 'slim-minimalist-wallets',
    price: 39.99,
    image: '/pages/9.png',
    description:
      'A lightweight minimalist leather wallet made for clean carry, quick access, and modern style.',
    features: [
      'Ultra Slim Profile',
      'Lightweight Carry',
      'Card Slots',
      'Modern Minimal Design',
    ],
    material: 'Premium Leather',
    color: 'Black',
    inStock: true,
    amazonLink: 'https://amazon.com/dp/B0SLIM1',
    rating: 4.6,
    reviewCount: 1834,
  },
  {
    id: '6',
    name: 'RFID Slim Leather Wallet',
    slug: 'rfid-slim-leather-wallet',
    category: 'slim-minimalist-wallets',
    price: 42.99,
    image: '/pages/10.png',
    description:
      'A sleek RFID slim wallet made for secure everyday carrying without adding bulk to your pocket.',
    features: [
      'RFID Blocking Layer',
      'Slim Pocket Fit',
      'Quick Card Access',
      'Lightweight Build',
    ],
    material: 'Genuine Leather',
    color: 'Navy Black',
    inStock: true,
    amazonLink: 'https://amazon.com/dp/B0RFIDSLIM1',
    rating: 4.7,
    reviewCount: 2218,
  },
  {
    id: '7',
    name: 'Leather Card Holder Wallet',
    slug: 'leather-card-holder-wallet',
    category: 'card-holders',
    price: 29.99,
    image: '/pages/11.png',
    description:
      'A compact leather card holder made for quick access, clean pocket carry, and premium daily use.',
    features: [
      'Compact Card Storage',
      'Quick Access Slots',
      'Slim Pocket Fit',
      'Premium Leather Finish',
    ],
    material: 'Genuine Leather',
    color: 'Tan',
    inStock: true,
    amazonLink: 'https://amazon.com/dp/B0CARDHOLDER1',
    rating: 4.5,
    reviewCount: 1278,
  },
  {
    id: '8',
    name: 'Magnetic Leather Card Holder',
    slug: 'magnetic-leather-card-holder',
    category: 'card-holders',
    price: 34.99,
    image: '/pages/12.png',
    description:
      'A modern leather card holder with magnetic closure, slim shape, and polished premium look.',
    features: [
      'Magnetic Closure',
      'Minimal Card Carry',
      'Premium Texture',
      'Everyday Pocket Design',
    ],
    material: 'Soft Leather',
    color: 'Caramel Brown',
    inStock: true,
    amazonLink: 'https://amazon.com/dp/B0MAGCARD1',
    rating: 4.6,
    reviewCount: 1395,
  },
  {
    id: '9',
    name: 'Leather Money Clip Wallet',
    slug: 'leather-money-clip-wallet',
    category: 'money-clip-wallets',
    price: 44.99,
    image: '/pages/13.png',
    description:
      'A stylish leather money clip wallet with a secure clip, slim profile, and elegant everyday design.',
    features: [
      'Secure Money Clip',
      'Slim Leather Body',
      'Card Storage',
      'Lightweight Design',
    ],
    material: 'Full-Grain Leather',
    color: 'Vintage Brown',
    inStock: true,
    amazonLink: 'https://amazon.com/dp/B0MONEYCLIP1',
    rating: 4.7,
    reviewCount: 1569,
  },
];