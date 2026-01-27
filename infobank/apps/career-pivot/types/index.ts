export type Difficulty = 'Easy' | 'Moderate' | 'Hard' | 'Very Hard';
export type Timeframe = '1-3 months' | '3-6 months' | '6-12 months' | '1-2 years' | '2+ years';

export interface Skill {
    name: string;
    description: string;
    importance: 'Critical' | 'Nice to have';
}

export interface Resource {
    title: string;
    url: string;
    type: 'Course' | 'Certification' | 'Book' | 'Community';
    cost: 'Free' | '$' | '$$' | '$$$';
}

export interface CareerPath {
    id: string;
    name: string;
    slug: string;
    category: string;
    tagline: string;
    description: string;

    salaryRange: {
        entry: string;
        senior: string;
    };

    outlook: 'Declining' | 'Stable' | 'Growing' | 'Exploding';
    difficulty: Difficulty;
    timeToPivot: Timeframe;

    technicalSkills: Skill[];
    softSkills: Skill[];

    roadmap: string[];

    resources: Resource[];

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
