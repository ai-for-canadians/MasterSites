export type TimelineStage = 'arrival' | 'week-1' | 'month-1' | 'month-3';
export type ProvinceCode = 'ON' | 'BC' | 'AB' | 'QC' | 'NS' | 'NB' | 'MB' | 'SK' | 'PE' | 'NL';

export interface ProvincialTask {
    code: ProvinceCode;
    name: string;
    description: string;
    url?: string;
}

export interface Task {
    id: string;
    title: string;
    slug: string;
    stage: TimelineStage;
    description: string;
    importance: 'critical' | 'high' | 'medium';
    estimatedTime: string; // e.g. "2 hours" or "1 day"
    provincialVariations?: ProvincialTask[];
    requiredDocuments: string[];
}
