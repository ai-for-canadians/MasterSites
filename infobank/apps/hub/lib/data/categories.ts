import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Health & Body',
    slug: 'health',
    description: 'Evidence-based health and wellness information',
    icon: 'Heart',
    color: 'emerald',
    sortOrder: 1,
  },
  {
    id: '2',
    name: 'Life & Money',
    slug: 'life',
    description: "Practical guidance for life's big decisions",
    icon: 'Wallet',
    color: 'blue',
    sortOrder: 2,
  },
  {
    id: '3',
    name: 'Work & Career',
    slug: 'career',
    description: 'Navigate your career with confidence',
    icon: 'Briefcase',
    color: 'purple',
    sortOrder: 3,
  },
  {
    id: '4',
    name: 'Canada Specific',
    slug: 'canada',
    description: 'Resources built specifically for Canadians',
    icon: 'MapPin',
    color: 'red',
    sortOrder: 4,
  },
  {
    id: '5',
    name: 'Food & Home',
    slug: 'home',
    description: 'Eat well, live well, maintain your space',
    icon: 'Home',
    color: 'amber',
    sortOrder: 5,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}
