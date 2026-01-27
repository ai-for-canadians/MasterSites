export type AccountCategory = 'registered' | 'non-registered';
export type InvestmentType = 'stock' | 'bond' | 'etf' | 'mutual-fund' | 'gics';

export interface Account {
    id: string;
    name: string;
    slug: string;
    fullName: string;
    category: AccountCategory;
    taxTreatment: string;
    contributionLimit: string;
    bestFor: string;
    pros: string[];
    cons: string[];
    details: string;
}

export interface InvestingConcept {
    id: string;
    title: string;
    slug: string;
    description: string;
    importance: 'High' | 'Medium' | 'Low';
}
