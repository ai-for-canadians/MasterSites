export type StepCategory = 'Preparation' | 'Search' | 'Offer' | 'Closing' | 'Moving';

export interface ActionItem {
    id: string;
    name: string;
    description: string;
    isCritical: boolean;
}

export interface Step {
    id: string;
    name: string;
    slug: string;
    category: StepCategory;
    order: number;
    description: string;

    details: string;

    checklist: ActionItem[];

    redFlags: string[];
    tips: string[];

    lastUpdated: string;
}

export interface MortgageType {
    id: string;
    name: string;
    description: string;
    bestFor: string;
    pros: string[];
    cons: string[];
    minDownPayment: string;
    creditScoreReq: string;
}
