import type { Script, Strategy, SalaryRange } from '@/types';

export const scripts: Script[] = [
    {
        id: 'initial-offer-response',
        name: 'The Grateful Pause',
        slug: 'initial-offer-response',
        scenario: 'New Job Offer',
        description: 'What to say immediately after receiving an offer (over the phone).',
        wordForWord: '"Thank you so much, I am really excited about the possibility of joining the team. This is a big decision, so I would like to take the full offer details away to review them carefully. When do you need a response by?"',
        whyItWorks: 'Buys time. Prevents you from saying "yes" immediately to a lowball offer. Positions you as professional and thoughtful.',
        tips: ['Do not negotiate on the initial call.', 'Express excitement/gratitude only, not acceptance.']
    },
    {
        id: 'counter-offer-email',
        name: 'The Counter Offer Email',
        slug: 'counter-offer-email',
        scenario: 'Counter Offer',
        description: 'Asking for more money via email.',
        wordForWord: '"I completely understand the budget constraints you mentioned. However, based on my research of the market value for this role in [City] and the specific experience I bring in [Skill X], I was expecting a base salary closer to [Target Number]. If we can get to [Target Number], I would be thrilled to sign today."',
        whyItWorks: 'Anchors to data ("market value"). Offers a "close" ("sign today") which incentives the recruiter to just get it done.',
        tips: ['Keep it brief.', 'Be polite but firm.', 'Always ask for slightly more than you actually want.']
    },
    {
        id: 'raise-request',
        name: 'The Performance Review Ask',
        slug: 'raise-request',
        scenario: 'Asking for Raise',
        description: 'Bringing up compensation during a review.',
        wordForWord: '"I really enjoy working here and want to keep contributing at a high level. Over the past year, I have [Achievement 1] and [Achievement 2]. Based on this increased impact, I believe a salary adjustment to [Target Number] reflects the market value of my current contribution."',
        whyItWorks: 'Focuses on value delivered ("impact"), not personal need ("rent went up").',
        tips: ['Bring a printed list of accomplishments.', 'Do this 3 months BEFORE budget season if possible.']
    }
];

export const strategies: Strategy[] = [
    {
        id: 'anchoring',
        name: 'Anchoring High',
        slug: 'anchoring',
        category: 'negotiation',
        tagline: 'Set the bar yourself',
        description: 'The first number spoken sets the range for the entire negotiation.',
        steps: ['Wait for them to ask expectations.', 'State a specific number slightly above your target.', 'Back it up with data.'],
        difficulty: 'Intermediate',
        lastUpdated: '2025-01-26'
    },
    {
        id: 'silence',
        name: 'Strategic Silence',
        slug: 'silence',
        category: 'negotiation',
        tagline: 'Shut up and wait',
        description: 'After they make an offer or you make a counter, stop talking.',
        steps: ['Make your ask.', 'literally stop talking.', 'Wait for them to fill the awkward silence.'],
        difficulty: 'Advanced',
        lastUpdated: '2025-01-26'
    },
    {
        id: 'total-comp',
        name: 'Total Compensation View',
        slug: 'total-comp',
        category: 'research',
        tagline: 'Salary is just one part',
        description: 'Negotiating equity, vacation, bonus, and flexibility if salary is fixed.',
        steps: ['List all benefits.', 'Ask for 1 extra week vacation.', 'Ask for signing bonus.'],
        difficulty: 'Beginner',
        lastUpdated: '2025-01-26'
    }
];

export const salaryData: SalaryRange[] = [
    { role: 'Software Engineer', location: 'Canada (General)', level: 'Junior', min: 65000, max: 90000, currency: 'CAD' },
    { role: 'Software Engineer', location: 'Toronto', level: 'Mid', min: 95000, max: 135000, currency: 'CAD' },
    { role: 'Software Engineer', location: 'Vancouver', level: 'Senior', min: 130000, max: 180000, currency: 'CAD' },
    { role: 'Product Manager', location: 'Canada (General)', level: 'Mid', min: 90000, max: 130000, currency: 'CAD' },
    { role: 'Marketing Manager', location: 'Canada (General)', level: 'Mid', min: 75000, max: 110000, currency: 'CAD' },
];
