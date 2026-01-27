export type EvidenceLevel = 'High' | 'Medium' | 'Low' | 'Mixed';
export type CategoryId = 'metabolic' | 'autoimmune' | 'pain' | 'digestive' | 'cardiovascular';

export interface Intervention {
    id: string;
    name: string;
    description: string;
    evidenceLevel: EvidenceLevel;
    mechanism: string; // How it works
    protocol: string; // How to do it
    references: number; // Count of studies (mock)
}

export interface Condition {
    id: string;
    name: string;
    slug: string;
    category: CategoryId;
    tagline: string;
    description: string;

    interventions: Intervention[];

    lifestyleFactors: {
        diet: string;
        exercise: string;
        sleep: string;
        stress: string;
    };

    disclaimer: string;
    lastUpdated: string;
}

export interface Category {
    id: CategoryId;
    name: string;
    slug: string;
    icon: string;
    color: string;
}
