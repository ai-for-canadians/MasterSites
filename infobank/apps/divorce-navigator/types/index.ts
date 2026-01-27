export type StepCategory = 'legal' | 'financial' | 'kids' | 'emotional';

export interface Step {
    id: string;
    title: string;
    slug: string;
    category: StepCategory;
    order: number;
    shortDescription: string;
    fullDescription: string;
    checklist: string[];
    resources: { title: string; url: string }[];
}

export interface ProvinceInfo {
    code: string;
    name: string;
    waitingPeriod: string;
    filingFee: string;
    legalAidUrl: string;
}
