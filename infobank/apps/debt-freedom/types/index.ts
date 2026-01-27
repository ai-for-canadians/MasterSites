export type StrategyType = 'Payoff' | 'Consolidation' | 'Negotiation' | 'Bankruptcy';

export interface Strategy {
    id: string;
    name: string;
    slug: string;
    type: StrategyType;
    tagline: string;
    description: string;

    pros: string[];
    cons: string[];

    bestFor: string[];

    steps: string[];

    mathCheck: string;

    lastUpdated: string;
}

export interface Tool {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string; // lucide icon name
    link: string;
}
