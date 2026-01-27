export type EvidenceRating = 'A' | 'B' | 'C' | 'D' | 'F';

export type ConditionCategory =
    | 'digestive-disorder'
    | 'autoimmune'
    | 'food-intolerance'
    | 'microbiome-imbalance';

export interface Source {
    title: string;
    url: string;
    type: 'study' | 'review' | 'meta-analysis' | 'guideline';
    year?: number;
    authors?: string;
}

export interface Symptom {
    name: string;
    description: string;
    frequency: 'common' | 'occasional' | 'rare';
}

export interface Treatment {
    name: string;
    description: string;
    type: 'probiotic' | 'diet' | 'medication' | 'lifestyle' | 'supplement';
    evidenceRating: EvidenceRating;
    notes?: string;
}

export interface Condition {
    id: string;
    name: string;
    slug: string;
    category: ConditionCategory;
    tagline: string;
    description: string;

    symptoms: Symptom[];
    causes: string[];

    treatments: Treatment[];

    dietaryRecommendations: string[];
    lifestyleRecommendations: string[];

    testingOptions: string[];

    researchSummary: string;
    sources: Source[];

    lastUpdated: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    color: string;
    count: number;
}
