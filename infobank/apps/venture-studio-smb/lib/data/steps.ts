import { AgentStep } from '@/types';

export const standardSteps: AgentStep[] = [
    {
        id: 'market-assessment',
        order: 1,
        name: 'Market Assessment',
        description: 'AI analyzes your local market to identify opportunities, gaps, and demand signals.',
        whatYouGet: [
            'Local demographic analysis',
            'Demand indicators for your area',
            'Ideal neighborhood recommendations',
            'Market size estimate'
        ],
        estimatedMinutes: 5,
        cost: 35,
        outputType: 'report'
    },
    {
        id: 'competitive-analysis',
        order: 2,
        name: 'Competitive Analysis',
        description: 'AI researches existing competitors to find your positioning and advantages.',
        whatYouGet: [
            'List of local competitors',
            'Their strengths and weaknesses',
            'Pricing analysis',
            'Differentiation opportunities'
        ],
        estimatedMinutes: 5,
        cost: 35,
        outputType: 'report'
    },
    {
        id: 'key-contacts',
        order: 3,
        name: 'Key Local Contacts',
        description: 'AI identifies potential partners, suppliers, and stakeholders in your area.',
        whatYouGet: [
            'Potential supplier list',
            'Partnership opportunities',
            'Local business associations',
            'Key people to connect with'
        ],
        estimatedMinutes: 5,
        cost: 50,
        outputType: 'list'
    },
    {
        id: 'business-plan',
        order: 4,
        name: 'Business Plan',
        description: 'AI generates a complete, localized business plan ready for execution or funding.',
        whatYouGet: [
            'Executive summary',
            'Market analysis',
            'Operations plan',
            'Financial projections (3 years)',
            'Launch timeline'
        ],
        estimatedMinutes: 10,
        cost: 100,
        outputType: 'plan'
    },
    {
        id: 'financial-model',
        order: 5,
        name: 'Financial Model',
        description: 'AI creates detailed financial projections with break-even analysis.',
        whatYouGet: [
            'Startup cost breakdown',
            'Monthly cash flow projection',
            'Break-even analysis',
            'Scenario modeling (best/worst/likely)',
            'Funding requirements'
        ],
        estimatedMinutes: 8,
        cost: 75,
        outputType: 'financial'
    },
    {
        id: 'landing-page',
        order: 6,
        name: 'Landing Page',
        description: 'AI creates a professional web presence to capture interest and build credibility.',
        whatYouGet: [
            'Designed landing page',
            'Compelling copy',
            'Lead capture form',
            'Social proof elements',
            'SEO optimization'
        ],
        estimatedMinutes: 8,
        cost: 75,
        outputType: 'page'
    },
    {
        id: 'outreach-campaign',
        order: 7,
        name: 'Outreach Campaign',
        description: 'AI generates personalized outreach templates for customers, partners, and suppliers.',
        whatYouGet: [
            'Email templates (10+)',
            'LinkedIn messages',
            'Cold call scripts',
            'Follow-up sequences',
            'Partnership pitches'
        ],
        estimatedMinutes: 6,
        cost: 50,
        outputType: 'campaign'
    },
    {
        id: 'launch-playbook',
        order: 8,
        name: 'Launch Playbook',
        description: 'AI creates a week-by-week launch plan with specific actions and milestones.',
        whatYouGet: [
            '90-day action plan',
            'Week-by-week milestones',
            'Marketing calendar',
            'KPI dashboard template',
            'Risk mitigation checklist'
        ],
        estimatedMinutes: 8,
        cost: 80,
        outputType: 'plan'
    }
];
