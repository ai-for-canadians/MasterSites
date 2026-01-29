
import { Entity } from './provinces';

export const cities: Entity[] = [
    {
        id: 'tor',
        name: 'Toronto',
        type: 'city',
        leader: { name: 'Olivia Chow', title: 'Mayor', party: 'Independent' },
        scores: { overall: 58, modernization: 65, wasteIndex: 50, efficiency: 45, fiscalHealth: 40 },
        trend: 'improving',
        population: '2.9M',
        flag: 'TO'
    },
    {
        id: 'van',
        name: 'Vancouver',
        type: 'city',
        leader: { name: 'Ken Sim', title: 'Mayor', party: 'ABC' },
        scores: { overall: 70, modernization: 85, wasteIndex: 70, efficiency: 65, fiscalHealth: 60 },
        trend: 'stable',
        population: '675k',
        flag: 'VAN'
    },
    {
        id: 'mtl',
        name: 'Montreal',
        type: 'city',
        leader: { name: 'Valérie Plante', title: 'Mayor', party: 'Promet' },
        scores: { overall: 65, modernization: 75, wasteIndex: 60, efficiency: 55, fiscalHealth: 50 },
        trend: 'stable',
        population: '1.7M',
        flag: 'MTL'
    },
    {
        id: 'cal',
        name: 'Calgary',
        type: 'city',
        leader: { name: 'Jyoti Gondek', title: 'Mayor', party: 'Independent' },
        scores: { overall: 68, modernization: 75, wasteIndex: 65, efficiency: 70, fiscalHealth: 65 },
        trend: 'declining',
        population: '1.3M',
        flag: 'CGY'
    }
];
