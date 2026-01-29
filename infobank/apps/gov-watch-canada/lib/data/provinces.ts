
export interface Scorecards {
    overall: number;
    modernization: number; // Tech adoption, digital ID
    wasteIndex: number; // Auditor general findings
    efficiency: number; // Bureaucracy ratio
    fiscalHealth: number; // Deficit/Slash
}

export interface Entity {
    id: string;
    name: string;
    type: 'province' | 'city';
    leader: {
        name: string;
        title: string;
        party: string;
    };
    scores: Scorecards;
    trend: 'improving' | 'declining' | 'stable';
    population: string;
    flag: string; // Emoji or code
}

export const provinces: Entity[] = [
    {
        id: 'on',
        name: 'Ontario',
        type: 'province',
        leader: { name: 'Doug Ford', title: 'Premier', party: 'PC' },
        scores: { overall: 62, modernization: 75, wasteIndex: 45, efficiency: 55, fiscalHealth: 60 },
        trend: 'improving',
        population: '15.6M',
        flag: 'ON'
    },
    {
        id: 'bc',
        name: 'British Columbia',
        type: 'province',
        leader: { name: 'David Eby', title: 'Premier', party: 'NDP' },
        scores: { overall: 68, modernization: 80, wasteIndex: 65, efficiency: 60, fiscalHealth: 55 },
        trend: 'stable',
        population: '5.3M',
        flag: 'BC'
    },
    {
        id: 'ab',
        name: 'Alberta',
        type: 'province',
        leader: { name: 'Danielle Smith', title: 'Premier', party: 'UCP' },
        scores: { overall: 65, modernization: 70, wasteIndex: 55, efficiency: 65, fiscalHealth: 85 },
        trend: 'declining',
        population: '4.6M',
        flag: 'AB'
    },
    {
        id: 'qc',
        name: 'Quebec',
        type: 'province',
        leader: { name: 'François Legault', title: 'Premier', party: 'CAQ' },
        scores: { overall: 60, modernization: 65, wasteIndex: 50, efficiency: 45, fiscalHealth: 55 },
        trend: 'declining',
        population: '8.8M',
        flag: 'QC'
    }
];
