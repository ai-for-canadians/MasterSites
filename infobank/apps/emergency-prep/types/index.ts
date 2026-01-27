export type ScenarioId = 'power-outage' | 'winter-storm' | 'flood' | 'evacuation' | 'job-loss';
export type BudgetLevel = 'basic' | 'standard' | 'advanced';

export interface ChecklistItem {
    id: string;
    name: string;
    description: string;
    isCritical: boolean;
    frequency: 'one-time' | 'seasonal' | 'yearly';
}

export interface Scenario {
    id: string;
    name: string;
    slug: string;
    tagline: string;
    description: string;

    riskLevel: 'Low' | 'Medium' | 'High';
    probability: string; // e.g. "Once a year"

    immediateActions: string[];

    checklist: ChecklistItem[];

    budgetOptions: {
        basic: string[];
        advanced: string[];
    };

    lastUpdated: string;
}

export interface SupplyItem {
    id: string;
    name: string;
    description: string;
    category: string;
    quantityPerPerson: string;
    shelfLife: string;
}
