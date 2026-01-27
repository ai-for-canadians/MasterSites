import type { Story, Category } from '@/types';

export const categories: Category[] = [
    { id: 'health', name: 'Health & Body', slug: 'health', description: 'Weight loss, fitness, and recovery.', color: 'emerald' },
    { id: 'career', name: 'Career & Business', slug: 'career', description: 'Promotions, pivots, and startups.', color: 'blue' },
    { id: 'financial', name: 'Financial Freedom', slug: 'financial', description: 'Debt payoff and investing.', color: 'yellow' },
    { id: 'relationships', name: 'Relationships', slug: 'relationships', description: 'Dating and family.', color: 'rose' },
];

export const stories: Story[] = [
    {
        id: '1',
        title: 'From $40k Debt to Net Worth Positive in 18 Months',
        slug: 'debt-to-positive',
        author: 'Sarah J.',
        location: 'Toronto, ON',
        category: 'financial',
        verified: true,
        date: '2024-11-15',
        before: 'I had maxed out two credit cards and a line of credit. Total debt was $42,000. I was losing sleep and paying only minimums.',
        after: 'I am debt free and have $5,000 in my emergency fund. I sleep through the night.',
        journey: 'I used the snowball method. I sold my car (downsized to a beater), cancelled all subscriptions, and picked up freelance writing work. It was brutal for the first 6 months.',
        whatWorked: [
            'Snowball method (psychological wins)',
            'Selling the new car (removed $600/mo payment)',
            'Meal prepping (saved $400/mo on food)'
        ],
        proof: ['Bank statements verified', 'Credit report verified'],
        timeline: [
            { date: 'Jan 2023', description: 'Started getting serious. Debt at $42k.' },
            { date: 'Mar 2023', description: 'Sold car. Paid off $8k instantly.' },
            { date: 'Dec 2023', description: 'Hit $0 balance on last credit card.' },
            { date: 'Jul 2024', description: 'Paid off LOC. Officially debt free.' }
        ]
    },
    {
        id: '2',
        title: 'Reversed Pre-Diabetes in 6 Months',
        slug: 'reversed-prediabetes',
        author: 'Michael C.',
        location: 'Vancouver, BC',
        category: 'health',
        verified: true,
        date: '2024-10-02',
        before: 'A1C was 6.2%. Doctor wanted to start Metformin. I was tired all the time.',
        after: 'A1C is now 5.1%. Energy is stable. Lost 25lbs without starvation.',
        journey: 'I cut out all liquid calories and refined sugar. I started walking for 20 minutes after dinner every single night.',
        whatWorked: [
            'Walking after meals',
            'Cutting liquid calories (juice/soda)',
            'Prioritizing protein at breakfast'
        ],
        proof: ['Blood work labs verified (Before/After)'],
        timeline: [
            { date: 'Feb 2024', description: 'Diagnosis. A1C 6.2%.' },
            { date: 'May 2024', description: 'Checkup. A1C 5.7%.' },
            { date: 'Aug 2024', description: 'Checkup. A1C 5.1%.' }
        ]
    },
    {
        id: '3',
        title: 'Teacher to Tech Sales Pivot at 35',
        slug: 'teacher-to-tech',
        author: 'Elena R.',
        location: 'Remote (Alberta)',
        category: 'career',
        verified: true,
        date: '2024-12-01',
        before: 'Burnt out high school teacher making $65k. Zero tech experience.',
        after: 'Account Executive at SaaS company making $120k OTE.',
        journey: 'I framed my teaching experience as "public speaking" and "objection handling". I networked aggressively on LinkedIn for 4 months.',
        whatWorked: [
            'Translating teacher skills to sales speak',
            'Cold messaging 50 people on LinkedIn',
            'Taking a 1-week bootcamp'
        ],
        proof: ['Offer letter verified', 'LinkedIn history verified'],
        timeline: [
            { date: 'Sep 2023', description: 'Decided to quit teaching.' },
            { date: 'Jan 2024', description: 'Started applying. 0 interviews.' },
            { date: 'Mar 2024', description: 'Changed resume strategy. Got 3 interviews.' },
            { date: 'Apr 2024', description: 'Landed job.' }
        ]
    }
];
