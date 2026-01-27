// Core types for Longevity Guide

export type EvidenceRating = 'A' | 'B' | 'C' | 'D' | 'F';

export type InterventionCategory =
    | 'lifestyle'
    | 'nutrition'
    | 'supplements'
    | 'medications'
    | 'emerging';

export type RiskLevel = 'very low' | 'low' | 'moderate' | 'high' | 'unknown';

export interface Source {
    title: string;
    url: string;
    type: 'study' | 'review' | 'meta-analysis' | 'article';
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

export interface Biomarker {
    name: string;
    description: string;
    targetRange?: string;
    measurementUnit?: string;
}

export interface Protocol {
    title: string;
    description: string;
    steps: string[];
    difficulty: 'easy' | 'moderate' | 'hard' | 'extreme';
    cost: 'free' | '$' | '$$' | '$$$' | '$$$$';
}

export interface SafetyProfile {
    riskLevel: RiskLevel;
    contraindications: string[];
    sideEffects: Risk[];
    interactionWarnings: string[];
}

export interface Intervention {
    id: string;
    name: string;
    slug: string;
    category: InterventionCategory;
    tagline: string;
    description: string;

    benefits: Benefit[];
    howItWorks: string;

    safetyProfile: SafetyProfile;

    dosage?: {
        recommendation: string;
        timing?: string;
        notes?: string;
    };

    protocol?: Protocol;

    relatedBiomarkers: Biomarker[];

    evidenceRating: EvidenceRating;
    researchSummary: string;
    keyStudies: string[];
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

// ═══════════════════════════════════════════════════════════════
// HEALTHSPAN TYPES
// ═══════════════════════════════════════════════════════════════

export type FunctionalAreaId =
    | 'physical'
    | 'cognitive'
    | 'metabolic'
    | 'cardiovascular'
    | 'bone'
    | 'sensory';

export type AgeDecade = '30s' | '40s' | '50s' | '60s' | '70+';

export interface AgeGuide {
    decade: AgeDecade;
    title: string;
    tagline: string;
    description: string;
    priorities: string[];
    keyInterventions: string[];  // intervention slugs
    biomarkersToTrack: string[];
    warnings: string[];
}

export interface FunctionalAreaGuide {
    id: FunctionalAreaId;
    name: string;
    slug: string;
    icon: string;
    description: string;
    metrics: {
        name: string;
        description: string;
        howToMeasure: string;
        targetRange?: string;
    }[];
    keyInterventions: string[];
    declineTimeline: string;  // When decline typically starts
}

export interface BiomarkerGuide {
    id: string;
    name: string;
    slug: string;
    category: 'metabolic' | 'inflammatory' | 'hormonal' | 'cardiovascular' | 'nutritional' | 'organ';
    description: string;
    whyItMatters: string;
    optimalRange: string;
    conventionalRange?: string;
    howToTest: string;
    canadianContext?: string;
    frequency: string;
    interventionsToImprove: string[];
}

export interface AssessmentQuestion {
    id: string;
    area: FunctionalAreaId;
    question: string;
    options: {
        text: string;
        score: number;
    }[];
}

