export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type CategoryId = 'technique' | 'flavor' | 'pantry' | 'framework';

export interface Method {
    id: string;
    name: string;
    description: string;
}

export interface Technique {
    id: string;
    name: string;
    slug: string;
    category: CategoryId;
    tagline: string;
    description: string;

    whyItWorks: string;

    steps: Method[];

    commonMistakes: Method[];

    bestFor: string[]; // e.g. "Root vegetables", "Tough cuts of meat"

    difficulty: Difficulty;
    lastUpdated: string;
}

export interface FlavorProfile {
    id: string;
    name: string;
    description: string;
    ingredients: string[];
    pairsWith: string[];
}

export interface PantryItem {
    id: string;
    name: string;
    category: string;
    whyKeepIt: string;
    uses: string[];
}

export interface Category {
    id: CategoryId;
    name: string;
    slug: string;
    description: string;
    icon: string;
    color: string;
    count: number;
}
