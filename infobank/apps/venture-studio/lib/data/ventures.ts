import { Venture, ImpactShare, GovernanceVote, ImpactMetrics } from '@/types';

export const ventures: (Venture & {
    impactMetrics: ImpactMetrics;
    governance: { votes: GovernanceVote[] };
})[] = [
        {
            id: 'community-garden',
            playbookId: 'urban-farm',
            name: 'East End Urban Farm',
            location: 'East End, Toronto, ON',
            description: 'A community-owned urban farm providing fresh produce to local food banks and selling surplus at affordable rates.',
            status: 'funding',
            currentStep: 2,
            totalRaised: 8000,
            targetRaise: 25000,
            // ... other venture properties (mock)
            impactMetrics: {
                ventureId: 'community-garden',
                peopleServed: 450,
                jobsCreated: 3,
                communityInvestment: 12000,
                volunteerHours: 280,
                customMetrics: [
                    { label: 'Meals Provided', value: '2,400' },
                    { label: 'Food Waste Diverted', value: '800 kg' }
                ]
            },
            governance: {
                votes: [
                    {
                        id: 'vote-1',
                        ventureId: 'community-garden',
                        title: 'Select Crop Mix for Season 1',
                        description: 'Should we prioritize high-yield staples (potatoes, carrots) or high-value greens (kale, spinach)?',
                        options: [
                            { id: '1', label: 'Staples (High Calorie)', votes: 45 },
                            { id: '2', label: 'Greens (High Value)', votes: 32 }
                        ],
                        status: 'active',
                        startDate: '2025-03-01',
                        endDate: '2025-03-15'
                    }
                ]
            }
        },
        {
            id: 'tool-library',
            playbookId: 'tool-library',
            name: 'Ottawa Tool Share',
            location: 'Centretown, Ottawa, ON',
            description: 'A lending library for tools, camping gear, and appliances. Reducing consumption and enabling safe housing repairs.',
            status: 'operating',
            currentStep: 8,
            totalRaised: 35000,
            targetRaise: 35000,
            impactMetrics: {
                ventureId: 'tool-library',
                peopleServed: 1200,
                jobsCreated: 2,
                communityInvestment: 35000,
                volunteerHours: 850,
                customMetrics: [
                    { label: 'Loans Completed', value: '3,150' },
                    { label: 'Saved by Members', value: '$125,000' }
                ]
            },
            governance: {
                votes: []
            }
        }
    ];
