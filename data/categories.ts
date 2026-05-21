export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export const walletCategories: Category[] = [
  {
    id: 'bifold-wallets',
    name: 'Bifold Wallets',
    slug: 'bifold-wallets',
    icon: 'mdi:wallet-outline',
    description: 'Classic two-fold leather wallets for everyday use.',
  },
  {
    id: 'trifold-wallets',
    name: 'Trifold Wallets',
    slug: 'trifold-wallets',
    icon: 'mdi:wallet-bifold-outline',
    description: 'Extra storage wallets with compact folded design.',
  },
  {
    id: 'slim-minimalist-wallets',
    name: 'Slim / Minimalist Wallets',
    slug: 'slim-minimalist-wallets',
    icon: 'mdi:credit-card-outline',
    description: 'Lightweight wallets for clean and modern carry.',
  },
  {
    id: 'card-holders',
    name: 'Card Holders',
    slug: 'card-holders',
    icon: 'mdi:card-account-details-outline',
    description: 'Compact leather card holders for quick access.',
  },
  {
    id: 'money-clip-wallets',
    name: 'Money Clip Wallets',
    slug: 'money-clip-wallets',
    icon: 'mdi:cash-fast',
    description: 'Premium wallets with secure money clip design.',
  },
];
