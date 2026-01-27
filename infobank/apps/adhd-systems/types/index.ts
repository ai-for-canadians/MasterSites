export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type Impact = 'Low' | 'Medium' | 'High' | 'Critical';
export type CategoryId = 'productivity' | 'home' | 'finances' | 'relationships' | 'health';

export interface Step {
    id: string;
    order: number;
    text: string;
    tip?: string;
}

export interface System {
    id: string;
    name: string;
    slug: string;
    category: CategoryId;
    tagline: string;
    description: string;

    whyItWorks: string; // The "ADHD Brain" explanation

    difficulty: Difficulty;
    impact: Impact;
    timeToImplement: string;

    steps: Step[];

    commonPitfalls: string[];

    tools?: string[]; // IDs of recommended tools

    lastUpdated: string;
}

export interface Tool {
    id: string;
    name: string;
    description: string;
    url: string;
    price: 'Free' | 'Freemium' | 'Paid';
    icon: string;
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
