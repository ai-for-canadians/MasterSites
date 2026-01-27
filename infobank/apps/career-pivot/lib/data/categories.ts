import type { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'tech',
        name: 'Technology',
        slug: 'tech',
        description: 'Software, Data, and IT roles',
        icon: 'Terminal',
        color: 'blue',
        count: 8,
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        slug: 'healthcare',
        description: 'Clinical and allied health',
        icon: 'Stethoscope',
        color: 'emerald',
        count: 5,
    },
    {
        id: 'green-energy',
        name: 'Green Energy',
        slug: 'green-energy',
        description: 'Renewables and sustainability',
        icon: 'Zap',
        color: 'green',
        count: 3,
    },
    {
        id: 'trades',
        name: 'Skilled Trades',
        slug: 'trades',
        description: 'Hands-on technical work',
        icon: 'Hammer',
        color: 'orange',
        count: 4,
    },
    {
        id: 'creative',
        name: 'Creative & Digital',
        slug: 'creative',
        description: 'Design, marketing, and media',
        icon: 'PenTool',
        color: 'purple',
        count: 5,
    },
];

export function getCategoryById(id: string): Category | undefined {
    return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((cat) => cat.slug === slug);
}
