import type { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'digestive-disorder',
        name: 'Digestive Disorders',
        slug: 'digestive-disorder',
        description: 'Functional and structural issues affecting digestion',
        icon: 'Activity',
        color: 'emerald',
        count: 5,
    },
    {
        id: 'autoimmune',
        name: 'Autoimmune',
        slug: 'autoimmune',
        description: 'Conditions where the immune system attacks the gut',
        icon: 'Shield',
        color: 'red',
        count: 3,
    },
    {
        id: 'food-intolerance',
        name: 'Food Intolerances',
        slug: 'food-intolerance',
        description: 'Non-immunological responses to foods',
        icon: 'AlertCircle',
        color: 'amber',
        count: 4,
    },
    {
        id: 'microbiome-imbalance',
        name: 'Microbiome Imbalance',
        slug: 'microbiome-imbalance',
        description: 'Dysbiosis and bacterial overgrowth issues',
        icon: 'Bacteria',
        color: 'purple',
        count: 3,
    },
];

export function getCategoryById(id: string): Category | undefined {
    return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((cat) => cat.slug === slug);
}
