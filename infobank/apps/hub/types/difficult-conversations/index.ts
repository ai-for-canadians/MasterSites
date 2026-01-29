export type CategoryId = 'work' | 'family' | 'relationships' | 'money' | 'social';

export interface Category {
    id: CategoryId;
    name: string;
    slug: string;
    description: string;
    icon: string;
}

export interface ScriptVariation {
    label: string;
    content: string;
    tone: 'assertive' | 'collaborative' | 'empathetic' | 'firm' | 'neutral';
}

export interface ObjectionHandler {
    objection: string;
    response: string;
}

export interface ConversationTemplate {
    id: string;
    title: string;
    slug: string;
    categoryId: CategoryId;
    summary: string;
    description?: string; // Extended context
    difficulty: 'Low' | 'Medium' | 'High';

    riskLevel: 'Low' | 'Medium' | 'High'; // Emotional risk

    whatToPrepare: string[]; // Prep steps

    openingLines: string[]; // Good starters

    scripts: ScriptVariation[]; // Full scripts

    commonObjections: ObjectionHandler[];

    tips: string[]; // Do's and Don'ts
}
