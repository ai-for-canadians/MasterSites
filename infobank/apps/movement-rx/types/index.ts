export type BodyPart = 'knee' | 'back' | 'shoulder' | 'neck' | 'hip';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Exercise {
    id: string;
    name: string;
    description: string;
    sets: number;
    reps: string;
    holdTime?: string; // e.g. "30 seconds"
    frequency: string; // e.g. "Daily"
    videoUrl?: string; // Placeholder
}

export interface Phase {
    id: string;
    name: string;
    slug: string;
    weekRange: string; // e.g. "Weeks 1-4"
    description: string;
    exercises: Exercise[];
    goals: string[];
}

export interface Program {
    id: string;
    name: string;
    slug: string;
    bodyPart: BodyPart;
    tagline: string;
    description: string;

    phases: Phase[];

    equipmentNeeded: string[];
    contraindications: string[]; // When NOT to do this

    lastUpdated: string;
}
