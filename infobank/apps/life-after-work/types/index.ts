export type RetirementTopic = 'financial' | 'lifestyle' | 'healthcare' | 'estate';

export interface Strategy {
    id: string;
    title: string;
    slug: string;
    category: RetirementTopic;
    summary: string;
    details: string;
    checklist: string[];
}
