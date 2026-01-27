export interface Leader {
    name: string;
    position: 'head_of_state' | 'head_of_government';
    title: string;
    party: string;
    tenureStart: string;
    imageUrl?: string;
}

export interface CountryScores {
    year: number;
    democracy: number;      // V-Dem Liberal Democracy Index (0-100)
    corruption: number;     // TI Corruption Perceptions Index (0-100)
    equality: number;       // Inverted Gini (0-100)
    development: number;    // UNDP HDI (0-100)
    pressFreedom: number;   // RSF Index (0-100)
    governance: number;     // World Bank WGI (0-100)
    composite: number;      // Average
    tier: 1 | 2 | 3 | 4;   // 70+, 50-69, 30-49, <30
    trend: 'up' | 'down' | 'stable' | 'volatile';
}

export interface Country {
    id: string;
    code: string;           // ISO 3166-1 alpha-3
    name: string;
    flag: string;
    region: string;
    population: number;
    gdpPerCapita: number;
    isG20: boolean;
    leaders: Leader[];
    scores: CountryScores;
}

export interface Metric {
    id: string;
    code: string;
    name: string;
    description: string;
    source: string;
    sourceUrl: string;
    methodology: string;
    limitations: string[];
    higherIsBetter: boolean;
}
