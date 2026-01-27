import type { AgentStep, Playbook, Venture } from '@/types';

const standardSteps: AgentStep[] = [
    { id: '1', order: 1, name: 'Market Assessment', description: 'Analyze local gaps and opportunities using demographic data.', estimatedMinutes: 2, cost: 25, outputType: 'report' },
    { id: '2', order: 2, name: 'Competitive Analysis', description: 'Identify existing players and potential partners in the area.', estimatedMinutes: 3, cost: 25, outputType: 'list' },
    { id: '3', order: 3, name: 'Key Local Contacts', description: 'Find potential partners, suppliers, and government stakeholders.', estimatedMinutes: 5, cost: 50, outputType: 'list' },
    { id: '4', order: 4, name: 'Business Plan Draft', description: 'Generate a localized business plan based on market data.', estimatedMinutes: 10, cost: 75, outputType: 'plan' },
    { id: '5', order: 5, name: 'Landing Page', description: 'Create a web presence to gauge interest and collect signups.', estimatedMinutes: 5, cost: 50, outputType: 'page' },
    { id: '6', order: 6, name: 'Outreach Campaign', description: 'Draft email templates for customers and partners.', estimatedMinutes: 3, cost: 50, outputType: 'campaign' },
    { id: '7', order: 7, name: 'Volunteer Recruitment', description: 'Find and organize reliable volunteers.', estimatedMinutes: 4, cost: 25, outputType: 'plan' },
    { id: '8', order: 8, name: 'Local Advertising', description: 'Create a targeted awareness campaign.', estimatedMinutes: 5, cost: 100, outputType: 'campaign' },
];

export const playbooks: Playbook[] = [
    {
        id: '1', name: 'Community Grocery Co-op', slug: 'grocery-coop', category: 'food_access',
        description: 'Launch a member-owned grocery store to bring fresh food to underserved neighborhoods.',
        problemAddressed: 'Food deserts and high corporate grocery prices.',
        expectedImpact: 'Lower food costs, local jobs, and community ownership.',
        startupCostRange: '$50k - $250k', timelineMonths: 12,
        requiredExpertise: ['Retail', 'Community Organizing'],
        successStories: [{ title: 'Karma Co-op (Toronto)', description: 'Running successfully for 50+ years.', location: 'Toronto' }],
        steps: standardSteps, tags: ['Food', 'Retail', 'Co-op']
    },
    {
        id: '2', name: 'Neighbourhood Tool Library', slug: 'tool-library', category: 'environment',
        description: 'A lending library for tools and appliances. Reduces consumption and helps neighbors fix their homes.',
        problemAddressed: 'Overconsumption and inability to afford quality tools.',
        expectedImpact: 'Waste reduction, skill building, community connection.',
        startupCostRange: '$10k - $30k', timelineMonths: 6,
        requiredExpertise: ['Inventory Management', 'Repair'],
        successStories: [{ title: 'Vancouver Tool Library', description: 'Over 2000 members and massive inventory.', location: 'Vancouver' }],
        steps: standardSteps, tags: ['Sharing Economy', 'Sustainability']
    },
    {
        id: '3', name: 'Youth Coding Bootcamp', slug: 'youth-coding', category: 'education',
        description: 'Free or low-cost coding classes for local youth, taught by tech professionals.',
        problemAddressed: 'Lack of tech education access for underprivileged youth.',
        expectedImpact: 'Job skills, mentorship, career pathways.',
        startupCostRange: '$5k - $15k', timelineMonths: 3,
        requiredExpertise: ['Teaching', 'Software Development'],
        successStories: [{ title: 'Canada Learning Code', description: 'Scaled nationally to teach thousands.', location: 'National' }],
        steps: standardSteps, tags: ['Education', 'Tech', 'Youth']
    },
    {
        id: '4', name: 'Community Solar Garden', slug: 'solar-garden', category: 'energy',
        description: 'A shared solar array that allows renters and those without roofs to go solar.',
        problemAddressed: 'Climate change and inability for renters to access solar.',
        expectedImpact: 'Clean energy generation, lower bills.',
        startupCostRange: '$100k+', timelineMonths: 18,
        requiredExpertise: ['Electrical', 'Project Management'],
        successStories: [{ title: 'Nelson Community Solar', description: 'Canada\'s first community solar garden.', location: 'BC' }],
        steps: standardSteps, tags: ['Energy', 'Climate', 'Infrastructure']
    },
    {
        id: '5', name: 'Affordable Housing Land Trust', slug: 'land-trust', category: 'housing',
        description: 'Acquire land to take it off the speculative market and build permanently affordable housing.',
        problemAddressed: 'Housing crisis and displacement.',
        expectedImpact: 'Permanent housing affordability.',
        startupCostRange: '$500k+', timelineMonths: 24,
        requiredExpertise: ['Real Estate', 'Legal', 'Finance'],
        successStories: [{ title: 'Parkdale Neighbourhood Land Trust', description: 'Protected 80+ units of affordable housing.', location: 'Toronto' }],
        steps: standardSteps, tags: ['Housing', 'Justice', 'Real Estate']
    },
];

export const ventures: Venture[] = [
    {
        id: 'v1', playbookId: '1', name: 'Calgary Community Grocery', location: 'Calgary, AB', launcherId: 'user1',
        status: 'in_progress', currentStep: 4, fundingReceived: 12500, createdAt: '2024-01-15',
        completedSteps: [
            { stepId: '1', completedAt: '2024-01-20', artifact: 'Market Report: Calgary SE shows 15% qualified food desert status.' },
            { stepId: '2', completedAt: '2024-01-25', artifact: 'Competitor List: 3 Major Chains, 0 local co-ops within 5km.' },
            { stepId: '3', completedAt: '2024-02-01', artifact: 'Key Contacts: Local Councillor, Farmers Market Director.' }
        ],
        contributors: [{ name: 'Jane D.', amount: 5000, stepFunded: 'Initial Setup' }]
    },
    {
        id: 'v2', playbookId: '2', name: 'Vancouver Tool Library', location: 'Vancouver, BC', launcherId: 'user2',
        status: 'in_progress', currentStep: 2, fundingReceived: 2500, createdAt: '2024-02-10',
        completedSteps: [
            { stepId: '1', completedAt: '2024-02-12', artifact: 'Market Report: High density of renters in Kitsilano needing tools.' }
        ],
        contributors: [{ name: 'Mike R.', amount: 500, stepFunded: 'Market Assessment' }]
    },
    {
        id: 'v3', playbookId: '3', name: 'Toronto Youth Code', location: 'Toronto, ON', launcherId: 'user3',
        status: 'in_progress', currentStep: 6, fundingReceived: 15000, createdAt: '2023-11-20',
        completedSteps: [
            { stepId: '1', completedAt: '2023-11-25', artifact: 'Market Report: Scarborough/North York focus.' },
            { stepId: '2', completedAt: '2023-12-01', artifact: 'Competitor List: 2 pricey bootcamps in downtown only.' },
            { stepId: '3', completedAt: '2023-12-10', artifact: 'Key Contacts: TDSB Trustee, Tech Hub Director.' },
            { stepId: '4', completedAt: '2024-01-05', artifact: 'Business Plan: "Code for Tomorrow" curriculum outline.' },
            { stepId: '5', completedAt: '2024-01-15', artifact: 'Landing Page: Live at youthcode.to (mock).' }
        ],
        contributors: [{ name: 'Tech Giant Corp', amount: 10000, stepFunded: 'Curriculum Dev' }]
    }
];
