export type UrgencyLevel = 'emergency' | 'urgent' | 'routine' | 'self_care' | 'info';

export type BodyAreaID = 'head' | 'chest' | 'abdomen' | 'back' | 'limbs' | 'skin' | 'general';

export type EvidenceRating = 'A' | 'B' | 'C' | 'D' | 'F';

export interface Source {
    title: string;
    url: string;
    type: 'medical_guideline' | 'study' | 'review' | 'organization' | 'journal';
    year?: number;
    authors?: string;
}

export interface RelatedCondition {
    name: string;
    slug?: string;
    likelihood: 'common' | 'uncommon' | 'rare' | 'possible';
    urgency: UrgencyLevel;
    description: string;
}

export interface Symptom {
    id: string;
    name: string;
    slug: string;
    bodyArea: BodyAreaID;
    summary: string;
    description: string;

    // Key actionable info
    redFlags: string[]; // Immediate attention needed
    yellowFlags: string[]; // See doctor soon

    relatedConditions: RelatedCondition[];

    homeCare: string[]; // Self-care advice

    whenToSeeDoctor: string[]; // Specific triggers to go in

    urgency: UrgencyLevel; // Default urgency for this symptom
    evidenceRating: EvidenceRating;
    lastUpdated: string;
    sources: Source[];
}

export interface BodyArea {
    id: BodyAreaID;
    name: string;
    slug: string;
    description: string;
    icon: string;
}
