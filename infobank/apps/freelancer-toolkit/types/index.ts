export type GuideCategory = 'business-structure' | 'taxes' | 'operations' | 'tools';

export interface Guide {
    id: string;
    title: string;
    slug: string;
    category: GuideCategory;
    shortDescription: string;
    content: string;
    keyChecklist?: string[];
}

export interface CalculatorInputs {
    targetIncome: number;
    expenses: number;
    vacationWeeks: number;
    sickDays: number;
    billablePercentage: number; // 0-1 (e.g., 0.6 for 60% billable)
}
