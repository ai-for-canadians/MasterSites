import { Strategy } from '@/types';

export const strategies: Strategy[] = [
    {
        id: 'cpp-oas',
        title: 'CPP & OAS Timing',
        slug: 'cpp-oas-timing',
        category: 'financial',
        summary: 'When should you start taking your government pensions?',
        details: 'Taking CPP as early as 60 reduces your payments permanently. Delaying to 70 increases them significantly. The "breakeven" point is usually around age 82. We analyze which path fits your health and financial situation.',
        checklist: [
            'Check your My Service Canada account for estimates.',
            'Assess your health and life expectancy.',
            'Check if you have other income sources (RRSP/RRIF).',
            'Consider the impact of the OAS clawback.'
        ]
    },
    {
        id: 'withdrawal-sequence',
        title: 'Withdrawal Sequence',
        slug: 'withdrawal-sequence',
        category: 'financial',
        summary: 'Optimizing your income for tax efficiency.',
        details: 'Which account should you tap first? RRSP, TFSA, or non-registered? The order matters for longevity and minimizing the CRA\'s share.',
        checklist: [
            'Draw down non-registered assets first usually.',
            'Strategic RRSP withdrawals before 71 to lower average tax.',
            'Use TFSA for large one-time expenses to avoid income spikes.'
        ]
    },
    {
        id: 'lifestyle-design',
        title: 'Lifestyle Design',
        slug: 'lifestyle-design',
        category: 'lifestyle',
        summary: 'Retiring TO something, not just FROM something.',
        details: 'Retirement is a major psychological shift. Successful retirees have a "portfolio" of activities: social, physical, intellectual, and altruistic.',
        checklist: [
            'Identify 3 new hobbies to explore.',
            'Create a weekly social schedule.',
            'Consider "phased retirement" or part-time work.'
        ]
    }
];
