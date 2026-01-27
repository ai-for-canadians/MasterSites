import type { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'lifestyle',
        name: 'Lifestyle',
        slug: 'lifestyle',
        description: 'Foundational habits that have the biggest impact on healthspan',
        icon: 'Activity',
        color: 'emerald',
        count: 8,
    },
    {
        id: 'nutrition',
        name: 'Nutrition',
        slug: 'nutrition',
        description: 'Dietary patterns and specific foods for longevity',
        icon: 'Apple',
        color: 'green',
        count: 4,
    },
    {
        id: 'supplements',
        name: 'Supplements',
        slug: 'supplements',
        description: 'Compounds to address deficiencies or target aging pathways',
        icon: 'Pill',
        color: 'blue',
        count: 8,
    },
    {
        id: 'medications',
        name: 'Medications',
        slug: 'medications',
        description: 'Pharmaceutical interventions (Geroprotectors) showing promise',
        icon: 'Stethoscope',
        color: 'purple',
        count: 3,
    },
    {
        id: 'emerging',
        name: 'Emerging',
        slug: 'emerging',
        description: 'Cutting-edge therapies still in early research stages',
        icon: 'Zap',
        color: 'amber',
        count: 3,
    },
];

export function getCategoryById(id: string): Category | undefined {
    return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((cat) => cat.slug === slug);
}
