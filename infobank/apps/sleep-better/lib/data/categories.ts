import type { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'hygiene',
        name: 'Sleep Hygiene',
        slug: 'hygiene',
        description: 'Foundational behaviors and habits',
        icon: 'Moon',
        color: 'indigo',
        count: 5,
    },
    {
        id: 'environment',
        name: 'Environment',
        slug: 'environment',
        description: 'Optimizing your bedroom for sleep',
        icon: 'Home',
        color: 'slate',
        count: 4,
    },
    {
        id: 'supplements',
        name: 'Supplements',
        slug: 'supplements',
        description: 'Compounds to aid sleep onset or quality',
        icon: 'Pill',
        color: 'blue',
        count: 6,
    },
    {
        id: 'tools',
        name: 'Tools & Tech',
        slug: 'tools',
        description: 'Gadgets and wearables',
        icon: 'Watch',
        color: 'cyan',
        count: 3,
    },
    {
        id: 'protocols',
        name: 'Advanced Protocols',
        slug: 'protocols',
        description: 'Specific regimens like CBT-I or restriction',
        icon: 'ClipboardList',
        color: 'emerald',
        count: 2,
    },
];

export function getCategoryById(id: string): Category | undefined {
    return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((cat) => cat.slug === slug);
}
