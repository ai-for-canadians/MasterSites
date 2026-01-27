export type EvidenceRating = 'A' | 'B' | 'C' | 'D' | 'F';

export type CategoryId =
    | 'hygiene'
    | 'environment'
    | 'supplements'
    | 'tools'
    | 'protocols';

export interface Source {
    title: string;
    url: string;
    type: 'study' | 'review' | 'meta-analysis' | 'guideline';
    year?: number;
    authors?: string;
}

export interface Benefit {
    name: string;
    description: string;
    evidenceRating: EvidenceRating;
}

export interface Risk {
    name: string;
    description: string;
    likelihood: 'common' | 'uncommon' | 'rare';
}

export interface Intervention {
    id: string;
    name: string;
    slug: string;
    category: CategoryId;
    tagline: string;
    description: string;

    benefits: Benefit[];
    howItWorks: string;

    protocol?: string[];
    dosage?: string;

    safetyProfile: {
        riskLevel: 'very low' | 'low' | 'moderate' | 'high';
        sideEffects: Risk[];
        contraindications: string[];
    };

    evidenceRating: EvidenceRating;
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
