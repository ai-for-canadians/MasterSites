import type { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'technique',
        name: 'Core Techniques',
        slug: 'techniques',
        description: 'The fundamental methods of applying heat to food.',
        icon: 'Flame',
        color: 'orange',
        count: 10,
    },
    {
        id: 'flavor',
        name: 'Flavor Theory',
        slug: 'flavors',
        description: 'Balancing salt, fat, acid, and heat.',
        icon: 'Palette',
        color: 'rose',
        count: 5,
    },
    {
        id: 'pantry',
        name: 'Pantry Essentials',
        slug: 'pantry',
        description: 'What to keep on hand for improvisation.',
        icon: 'Package',
        color: 'amber',
        count: 15,
    },
    {
        id: 'framework',
        name: 'Meal Frameworks',
        slug: 'frameworks',
        description: 'Patterns for meals, not strict recipes.',
        icon: 'Layout',
        color: 'emerald',
        count: 5,
    },
];

export function getCategoryById(id: string): Category | undefined {
    return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((cat) => cat.slug === slug);
}
