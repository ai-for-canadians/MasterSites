import type { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'vitamins',
        name: 'Vitamins',
        slug: 'vitamins',
        description: 'Essential organic micronutrients',
        icon: 'Sun',
        color: 'orange',
        count: 8,
    },
    {
        id: 'minerals',
        name: 'Minerals',
        slug: 'minerals',
        description: 'Inorganic elements essential for health',
        icon: 'Mountain',
        color: 'slate',
        count: 6,
    },
    {
        id: 'herbs',
        name: 'Herbs & Botanicals',
        slug: 'herbs',
        description: 'Plant-derived supplements',
        icon: 'Leaf',
        color: 'green',
        count: 10,
    },
    {
        id: 'amino-acids',
        name: 'Amino Acids',
        slug: 'amino-acids',
        description: 'Building blocks of proteins and neurotransmitters',
        icon: 'Dna',
        color: 'blue',
        count: 5,
    },
    {
        id: 'hormones',
        name: 'Hormones',
        slug: 'hormones',
        description: 'Endogenous signaling molecules',
        icon: 'Activity',
        color: 'purple',
        count: 3,
    },
    {
        id: 'other',
        name: 'Other',
        slug: 'other',
        description: 'Fatty acids, probiotics, and novel compounds',
        icon: 'FlaskConical',
        color: 'cyan',
        count: 8,
    },
];

export function getCategoryById(id: string): Category | undefined {
    return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((cat) => cat.slug === slug);
}
