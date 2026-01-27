import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Skincare',
    slug: 'skincare',
    description: 'Moisturizers, cleansers, serums, and sunscreens',
    icon: 'Sparkles',
    productCount: 0,
  },
  {
    id: '2',
    name: 'Haircare',
    slug: 'haircare',
    description: 'Shampoos, conditioners, and styling products',
    icon: 'Scissors',
    productCount: 0,
  },
  {
    id: '3',
    name: 'Body Care',
    slug: 'bodycare',
    description: 'Soaps, lotions, and deodorants',
    icon: 'Droplets',
    productCount: 0,
  },
  {
    id: '4',
    name: 'Oral Care',
    slug: 'oralcare',
    description: 'Toothpaste and mouthwash',
    icon: 'Smile',
    productCount: 0,
  },
  {
    id: '5',
    name: 'Makeup',
    slug: 'makeup',
    description: 'Foundation, lipstick, and mascara',
    icon: 'Palette',
    productCount: 0,
  },
  {
    id: '6',
    name: 'Baby & Kids',
    slug: 'baby',
    description: 'Baby shampoo, lotion, and sunscreen',
    icon: 'Baby',
    productCount: 0,
  },
  {
    id: '7',
    name: 'Household',
    slug: 'household',
    description: 'Cleaning products and laundry detergent',
    icon: 'Home',
    productCount: 0,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}
