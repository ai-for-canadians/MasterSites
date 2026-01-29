export type ConditionCategory = 'mood' | 'anxiety' | 'personality' | 'developmental' | 'trauma' | 'psychotic' | 'addiction';

export interface Condition {
    id: string;
    name: string;
    slug: string;
    category: ConditionCategory;
    summary: string;
    description: string;

    symptoms: string[];

    commonTreatments: string[]; // Medications, Therapy types

    firstSteps: string[]; // What to do first

    professionalToSee: 'Psychiatrist' | 'Therapist' | 'Primary Care' | 'Emergency';
}

export type ProviderType = 'psychiatrist' | 'psychologist' | 'counselor' | 'social_worker' | 'coach';

export interface ProviderGuide {
    id: ProviderType;
    name: string;
    slug: string;
    qualifications: string; // MD, PhD, LCSW
    canPrescribe: boolean;
    bestFor: string[];
    averageCost: string;
}

export interface TherapyType {
    id: string;
    name: string;
    acronym: string;
    summary: string;
    bestFor: ConditionCategory[];
    whatToExpect: string;
}
