export type EvidenceRating = 'A' | 'B' | 'C' | 'D' | 'F';

export type CategoryId =
    | 'vitamins'
    | 'minerals'
    | 'herbs'
    | 'amino-acids'
    | 'hormones'
    | 'other';

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

export interface Interaction {
    name: string;
    description: string;
    severity: 'high' | 'moderate' | 'low';
}

export interface Supplement {
    id: string;
    name: string;
    slug: string;
    category: CategoryId;
    tagline: string;
    description: string;

    benefits: Benefit[];
    howItWorks: string;

    dosage: {
        amount: string;
        timing?: string;
        notes?: string;
    };

    interactions: Interaction[];

    safetyProfile: {
        riskLevel: 'very low' | 'low' | 'moderate' | 'high';
        sideEffects: string[];
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

// Pairing & Stacking Types
export type PairingType = 'synergistic' | 'neutral' | 'caution' | 'avoid';

export interface SupplementPairing {
    supplement1: string;  // slug
    supplement2: string;  // slug
    type: PairingType;
    reason: string;
    timing?: string;
    evidenceRating: EvidenceRating;
    sources: Source[];
}

export interface StackSupplement {
    supplementSlug: string;
    dose: string;
    timing: string;
    notes?: string;
}

export interface SupplementStack {
    id: string;
    name: string;
    slug: string;
    goal: string;
    supplements: StackSupplement[];
    timing: string;
    description: string;
    warnings: string[];
    evidenceRating: EvidenceRating;
}

