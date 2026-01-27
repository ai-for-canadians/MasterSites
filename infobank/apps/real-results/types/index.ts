export type CategoryId = 'health' | 'career' | 'financial' | 'relationships';

export interface Milestone {
    date: string;
    description: string;
}

export interface Story {
    id: string;
    title: string;
    slug: string;
    author: string;
    location: string;
    category: CategoryId;
    verified: boolean;
    date: string;

    before: string;
    after: string;

    journey: string;
    whatWorked: string[];
    proof: string[]; // Descriptions of proof provided

    timeline: Milestone[];
}

export interface Category {
    id: CategoryId;
    name: string;
    slug: string;
    description: string;
    color: string;
}
