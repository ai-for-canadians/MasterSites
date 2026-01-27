export type BenefitCategory = 'family' | 'housing' | 'health' | 'senior' | 'student' | 'disability';
export type ProvinceCode = 'ON' | 'BC' | 'AB' | 'QC' | 'NS' | 'NB' | 'MB' | 'SK' | 'PE' | 'NL' | 'All';

export interface EligibilityCriterion {
    id: string;
    question: string;         // "Are you over 65?"
    requiredAnswer: boolean | string | number;
    type: 'boolean' | 'select' | 'min-age' | 'max-income';
}

export interface Benefit {
    id: string;
    title: string;
    slug: string;
    category: BenefitCategory;
    provider: 'Federal' | 'Provincial';
    province: ProvinceCode;   // 'All' for federal
    description: string;
    amount: string;           // "Up to $600/month"
    paymentFrequency: string; // "Monthly", "Quarterly", "One-time"
    eligibility: EligibilityCriterion[];
    applicationUrl: string;
    deadline?: string;
}
