import type { Country, Metric } from '@/types';

export const metrics: Metric[] = [
    {
        id: '1',
        code: 'democracy',
        name: 'Democracy Index',
        description: 'Measures the state of liberal democracy, including electoral fairness, civil liberties, and rule of law.',
        source: 'V-Dem Institute',
        sourceUrl: 'https://v-dem.net/',
        methodology: 'Aggregated expert surveys covering hundreds of indicators.',
        limitations: ['Expert subjectivity', 'Lag in data publication'],
        higherIsBetter: true,
    },
    {
        id: '2',
        code: 'corruption',
        name: 'Corruption Perception',
        description: 'Perceived levels of public sector corruption.',
        source: 'Transparency International',
        sourceUrl: 'https://www.transparency.org/',
        methodology: 'Composite index of various corruption surveys.',
        limitations: ['Measures perception, not actual corruption cases'],
        higherIsBetter: true, // Scaled so 0 is corrupt, 100 is clean
    },
    {
        id: '3',
        code: 'equality',
        name: 'Equality Score',
        description: 'Measure of income distribution and economic fairness.',
        source: 'World Bank (Gini Inverted)',
        sourceUrl: 'https://data.worldbank.org/',
        methodology: 'Derived from Gini coefficient (100 - Gini).',
        limitations: ['Does not capture wealth inequality, only income'],
        higherIsBetter: true,
    },
];

// Seed data provided in prompt, expanded to fit TypeScript interface
export const countries: Country[] = [
    {
        id: 'deu', code: 'DEU', name: 'Germany', flag: '🇩🇪', region: 'Europe', population: 83000000, gdpPerCapita: 51000, isG20: true,
        leaders: [{ name: 'Olaf Scholz', position: 'head_of_government', title: 'Chancellor', party: 'SPD', tenureStart: '2021' }],
        scores: { year: 2024, democracy: 88, corruption: 79, equality: 82, development: 94, pressFreedom: 83, governance: 85, composite: 82, tier: 1, trend: 'stable' }
    },
    {
        id: 'aus', code: 'AUS', name: 'Australia', flag: '🇦🇺', region: 'Oceania', population: 26000000, gdpPerCapita: 64000, isG20: true,
        leaders: [{ name: 'Anthony Albanese', position: 'head_of_government', title: 'Prime Minister', party: 'Labor', tenureStart: '2022' }],
        scores: { year: 2024, democracy: 85, corruption: 75, equality: 78, development: 95, pressFreedom: 80, governance: 84, composite: 80, tier: 1, trend: 'stable' }
    },
    {
        id: 'can', code: 'CAN', name: 'Canada', flag: '🇨🇦', region: 'North America', population: 40000000, gdpPerCapita: 55000, isG20: true,
        leaders: [{ name: 'Justin Trudeau', position: 'head_of_government', title: 'Prime Minister', party: 'Liberal', tenureStart: '2015' }],
        scores: { year: 2024, democracy: 84, corruption: 76, equality: 75, development: 93, pressFreedom: 78, governance: 82, composite: 79, tier: 1, trend: 'down' }
    },
    {
        id: 'gbr', code: 'GBR', name: 'United Kingdom', flag: '🇬🇧', region: 'Europe', population: 67000000, gdpPerCapita: 46000, isG20: true,
        leaders: [{ name: 'Rishi Sunak', position: 'head_of_government', title: 'Prime Minister', party: 'Conservative', tenureStart: '2022' }],
        scores: { year: 2024, democracy: 81, corruption: 71, equality: 74, development: 92, pressFreedom: 75, governance: 80, composite: 78, tier: 1, trend: 'stable' }
    },
    {
        id: 'fra', code: 'FRA', name: 'France', flag: '🇫🇷', region: 'Europe', population: 68000000, gdpPerCapita: 44000, isG20: true,
        leaders: [{ name: 'Emmanuel Macron', position: 'head_of_state', title: 'President', party: 'Renaissance', tenureStart: '2017' }],
        scores: { year: 2024, democracy: 79, corruption: 72, equality: 76, development: 91, pressFreedom: 74, governance: 78, composite: 77, tier: 1, trend: 'stable' }
    },
    {
        id: 'jpn', code: 'JPN', name: 'Japan', flag: '🇯🇵', region: 'Asia', population: 125000000, gdpPerCapita: 34000, isG20: true,
        leaders: [{ name: 'Fumio Kishida', position: 'head_of_government', title: 'Prime Minister', party: 'LDP', tenureStart: '2021' }],
        scores: { year: 2024, democracy: 75, corruption: 73, equality: 72, development: 92, pressFreedom: 70, governance: 80, composite: 76, tier: 1, trend: 'stable' }
    },
    {
        id: 'kor', code: 'KOR', name: 'South Korea', flag: '🇰🇷', region: 'Asia', population: 51000000, gdpPerCapita: 32000, isG20: true,
        leaders: [{ name: 'Yoon Suk-yeol', position: 'head_of_state', title: 'President', party: 'PPP', tenureStart: '2022' }],
        scores: { year: 2024, democracy: 72, corruption: 63, equality: 68, development: 92, pressFreedom: 65, governance: 70, composite: 68, tier: 2, trend: 'up' }
    },
    {
        id: 'usa', code: 'USA', name: 'United States', flag: '🇺🇸', region: 'North America', population: 332000000, gdpPerCapita: 76000, isG20: true,
        leaders: [{ name: 'Joe Biden', position: 'head_of_state', title: 'President', party: 'Democrat', tenureStart: '2021' }],
        scores: { year: 2024, democracy: 70, corruption: 69, equality: 60, development: 92, pressFreedom: 70, governance: 65, composite: 66, tier: 2, trend: 'down' }
    },
    {
        id: 'ita', code: 'ITA', name: 'Italy', flag: '🇮🇹', region: 'Europe', population: 59000000, gdpPerCapita: 35000, isG20: true,
        leaders: [{ name: 'Giorgia Meloni', position: 'head_of_government', title: 'Prime Minister', party: 'FdI', tenureStart: '2022' }],
        scores: { year: 2024, democracy: 68, corruption: 56, equality: 69, development: 89, pressFreedom: 65, governance: 62, composite: 65, tier: 2, trend: 'down' }
    },
    {
        id: 'arg', code: 'ARG', name: 'Argentina', flag: '🇦🇷', region: 'South America', population: 46000000, gdpPerCapita: 13000, isG20: true,
        leaders: [{ name: 'Javier Milei', position: 'head_of_state', title: 'President', party: 'LLA', tenureStart: '2023' }],
        scores: { year: 2024, democracy: 65, corruption: 38, equality: 58, development: 84, pressFreedom: 55, governance: 45, composite: 55, tier: 2, trend: 'volatile' }
    },
    {
        id: 'bra', code: 'BRA', name: 'Brazil', flag: '🇧🇷', region: 'South America', population: 214000000, gdpPerCapita: 8900, isG20: true,
        leaders: [{ name: 'Lula da Silva', position: 'head_of_state', title: 'President', party: 'PT', tenureStart: '2023' }],
        scores: { year: 2024, democracy: 62, corruption: 38, equality: 48, development: 76, pressFreedom: 58, governance: 42, composite: 54, tier: 2, trend: 'up' }
    },
    {
        id: 'zaf', code: 'ZAF', name: 'South Africa', flag: '🇿🇦', region: 'Africa', population: 60000000, gdpPerCapita: 6900, isG20: true,
        leaders: [{ name: 'Cyril Ramaphosa', position: 'head_of_state', title: 'President', party: 'ANC', tenureStart: '2018' }],
        scores: { year: 2024, democracy: 60, corruption: 41, equality: 37, development: 71, pressFreedom: 75, governance: 45, composite: 52, tier: 2, trend: 'down' }
    },
    {
        id: 'idn', code: 'IDN', name: 'Indonesia', flag: '🇮🇩', region: 'Asia', population: 276000000, gdpPerCapita: 4700, isG20: true,
        leaders: [{ name: 'Joko Widodo', position: 'head_of_state', title: 'President', party: 'PDI-P', tenureStart: '2014' }],
        scores: { year: 2024, democracy: 45, corruption: 34, equality: 62, development: 70, pressFreedom: 48, governance: 45, composite: 44, tier: 3, trend: 'down' }
    },
    {
        id: 'ind', code: 'IND', name: 'India', flag: '🇮🇳', region: 'Asia', population: 1400000000, gdpPerCapita: 2300, isG20: true,
        leaders: [{ name: 'Narendra Modi', position: 'head_of_government', title: 'Prime Minister', party: 'BJP', tenureStart: '2014' }],
        scores: { year: 2024, democracy: 35, corruption: 39, equality: 50, development: 63, pressFreedom: 40, governance: 48, composite: 40, tier: 3, trend: 'down' }
    },
    {
        id: 'mex', code: 'MEX', name: 'Mexico', flag: '🇲🇽', region: 'North America', population: 126000000, gdpPerCapita: 11000, isG20: true,
        leaders: [{ name: 'AMLO', position: 'head_of_state', title: 'President', party: 'Morena', tenureStart: '2018' }],
        scores: { year: 2024, democracy: 38, corruption: 31, equality: 45, development: 75, pressFreedom: 35, governance: 38, composite: 38, tier: 3, trend: 'down' }
    },
    {
        id: 'tur', code: 'TUR', name: 'Turkey', flag: '🇹🇷', region: 'Asia', population: 85000000, gdpPerCapita: 10600, isG20: true,
        leaders: [{ name: 'Recep Erdoğan', position: 'head_of_state', title: 'President', party: 'AKP', tenureStart: '2014' }],
        scores: { year: 2024, democracy: 25, corruption: 34, equality: 58, development: 84, pressFreedom: 25, governance: 35, composite: 30, tier: 3, trend: 'down' }
    },
    {
        id: 'sau', code: 'SAU', name: 'Saudi Arabia', flag: '🇸🇦', region: 'Asia', population: 36000000, gdpPerCapita: 30000, isG20: true,
        leaders: [{ name: 'Mohammed bin Salman', position: 'head_of_government', title: 'Prime Minister', party: 'Monarchy', tenureStart: '2022' }],
        scores: { year: 2024, democracy: 5, corruption: 52, equality: 65, development: 87, pressFreedom: 10, governance: 45, composite: 22, tier: 4, trend: 'stable' }
    },
    {
        id: 'rus', code: 'RUS', name: 'Russia', flag: '🇷🇺', region: 'Europe/Asia', population: 144000000, gdpPerCapita: 12000, isG20: true,
        leaders: [{ name: 'Vladimir Putin', position: 'head_of_state', title: 'President', party: 'Independent', tenureStart: '2012' }],
        scores: { year: 2024, democracy: 10, corruption: 28, equality: 60, development: 82, pressFreedom: 5, governance: 20, composite: 18, tier: 4, trend: 'down' }
    },
    {
        id: 'chn', code: 'CHN', name: 'China', flag: '🇨🇳', region: 'Asia', population: 1410000000, gdpPerCapita: 12500, isG20: true,
        leaders: [{ name: 'Xi Jinping', position: 'head_of_state', title: 'President', party: 'CCP', tenureStart: '2013' }],
        scores: { year: 2024, democracy: 8, corruption: 45, equality: 55, development: 78, pressFreedom: 5, governance: 40, composite: 17, tier: 4, trend: 'down' }
    },
];
