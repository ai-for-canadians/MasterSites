export type AgeStage = 'infant' | 'toddler' | 'preschool' | 'school-age' | 'teen';
export type EvidenceRating = 'Strong' | 'Moderate' | 'Mixed' | 'Weak';

export interface Resource {
    title: string;
    url: string;
    type: 'Article' | 'Study' | 'Book' | 'Organization';
}

export interface Topic {
    id: string;
    title: string;
    slug: string;
    stage: AgeStage;
    shortDescription: string;
    fullDescription: string;
    evidenceRating: EvidenceRating;
    keyTakeaways: string[];
    mythBuster: string; // Common misconception vs reality
    resources: Resource[];
}
