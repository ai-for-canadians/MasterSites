import type { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'productivity',
        name: 'Productivity',
        slug: 'productivity',
        description: 'Managing tasks, time, and focus.',
        icon: 'Brain',
        color: 'indigo',
        count: 8,
    },
    {
        id: 'home',
        name: 'Home & Environment',
        slug: 'home',
        description: 'Keeping your space functional (not perfect).',
        icon: 'Home',
        color: 'emerald',
        count: 6,
    },
    {
        id: 'finances',
        name: 'Finances',
        slug: 'finances',
        description: 'Stopping the "ADHD Tax".',
        icon: 'Wallet',
        color: 'rose',
        count: 4,
    },
    {
        id: 'relationships',
        name: 'Relationships',
        slug: 'relationships',
        description: 'Social connections and communication.',
        icon: 'Heart',
        color: 'purple',
        count: 3,
    },
    {
        id: 'health',
        name: 'Health & Self-Care',
        slug: 'health',
        description: 'Sleep, meds, and basic maintenance.',
        icon: 'Activity',
        color: 'sky',
        count: 5,
    },
];

export function getCategoryById(id: string): Category | undefined {
    return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((cat) => cat.slug === slug);
}
