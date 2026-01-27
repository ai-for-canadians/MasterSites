export type StrategyId = 'negotiation' | 'research' | 'scripts';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Script {
    id: string;
    name: string;
    slug: string;
    scenario: string; // e.g. "New Job Offer", "Asking for Raise"
    description: string;
    wordForWord: string;
    whyItWorks: string;
    tips: string[];
}

export interface Strategy {
    id: string;
    name: string;
    slug: string;
    category: StrategyId;
    tagline: string;
    description: string;
    steps: string[];
    difficulty: Difficulty;
    lastUpdated: string;
}

export interface SalaryRange {
    role: string;
    location: string; // "Canada (General)", "Toronto", "Vancouver"
    level: 'Junior' | 'Mid' | 'Senior' | 'Lead';
    min: number;
    max: number;
    currency: 'CAD';
}
