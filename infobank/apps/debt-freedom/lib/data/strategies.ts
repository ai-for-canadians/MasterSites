import type { Strategy, Tool } from '@/types';

export const strategies: Strategy[] = [
    {
        id: 'snowball',
        name: 'Debt Snowball',
        slug: 'debt-snowball',
        type: 'Payoff',
        tagline: 'Psychological momentum',
        description: 'Pay off debts from smallest balance to largest, ignoring interest rates. This builds motivation.',
        pros: ['Builds quick wins', 'Easy to follow', 'High success rate due to psychology'],
        cons: ['Mathematically suboptimal', 'Pay more interest long-term'],
        bestFor: ['Those needing motivation', 'Multiple small debts'],
        steps: [
            'List all debts by balance (smallest to largest)',
            'Pay minimums on everything except the smallest',
            'Throw every spare dollar at the smallest debt',
            'Repeat until debt free'
        ],
        mathCheck: 'Often costs 5-10% more in interest than Avalanche but has higher completion rates.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'avalanche',
        name: 'Debt Avalanche',
        slug: 'debt-avalanche',
        type: 'Payoff',
        tagline: 'Mathematically optimal',
        description: 'Pay off debts from highest interest rate to lowest. This saves the most money.',
        pros: ['Saves the most money', 'Get out of debt fastest'],
        cons: ['Takes longer to see first paid-off account', 'Requires discipline'],
        bestFor: ['Analytical minds', 'High interest credit card debt'],
        steps: [
            'List all debts by interest rate (highest to lowest)',
            'Pay minimums on everything except the highest rate',
            'Attack the highest rate debt aggressively',
            'Repeat'
        ],
        mathCheck: 'Mathematically superior method.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'consolidation',
        name: 'Debt Consolidation',
        slug: 'consolidation',
        type: 'Consolidation',
        tagline: 'Simplifying payments',
        description: 'Taking out a new loan at a lower interest rate to pay off multiple higher rate debts.',
        pros: ['One monthly payment', 'Lower interest rate', 'Fixed timeline'],
        cons: ['Doesn\'t solve spending habits', 'Origination fees'],
        bestFor: ['Good credit scores (670+)', 'Stable income'],
        steps: [
            'Check rates with lenders (soft pull)',
            'Calculate weighted average rate of current debt',
            'If new rate is lower, apply',
            'Use funds to pay off cards directly'
        ],
        mathCheck: 'Only makes sense if the new APR is significantly lower than current weighted average.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'settlement',
        name: 'Debt Settlement',
        slug: 'settlement',
        type: 'Negotiation',
        tagline: 'Negotiating lower balances',
        description: 'Negotiating with creditors to pay a lump sum that is less than the full amount owed.',
        pros: ['Pay significantly less', 'Avoid bankruptcy'],
        cons: ['Destroys credit score', 'Tax consequences (1099-C)', 'Potential lawsuits'],
        bestFor: ['Accounts already in collections', 'Financial hardship'],
        steps: [
            'Stop paying (if not already behind)',
            'Save cash in separate account',
            'answer collections calls and offer 30-50%',
            'Get agreement in writing before paying'
        ],
        mathCheck: 'Risk of lawsuit is real. Usually settle for 40-50% of balance.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'balance-transfer',
        name: '0% Balance Transfer',
        slug: 'balance-transfer',
        type: 'Consolidation',
        tagline: 'Interest holiday',
        description: 'Moving debt to a card with a 0% introductory APR period (usually 12-21 months).',
        pros: ['Stop interest accumulation', 'Pay 100% to principal'],
        cons: ['3-5% transfer fee', 'High rate kicks in after promo ends'],
        bestFor: ['Disciplined payers', 'Debt that can be paid in <18 months'],
        steps: [
            'Apply for 0% card',
            'Transfer high interest balances',
            'Divide balance by promo months to set payment',
            'Do not use card for new purchases'
        ],
        mathCheck: 'Fee is 3-5%, but savings on 20%+ APR is massive.',
        lastUpdated: '2025-01-26',
    },
    {
        id: 'bankruptcy',
        name: 'Chapter 7 Bankruptcy',
        slug: 'bankruptcy',
        type: 'Bankruptcy',
        tagline: 'The nuclear option',
        description: 'Legal process to wipe out unsecured debts.',
        pros: ['Fresh start', 'Stops lawsuits/garnishments'],
        cons: ['Stays on credit report 10 years', 'Lose assets (rare for Ch 7)', 'Moral stigma'],
        bestFor: ['Insurmountable debt (>50% income)', 'Low income (Means test)'],
        steps: [
            'Consult attorney',
            'Stop paying unsecured debts',
            'Take credit counseling course',
            'File petition'
        ],
        mathCheck: 'Costs ~$1500-2000 in legal fees.',
        lastUpdated: '2025-01-26',
    }
];

export const tools: Tool[] = [
    {
        id: 'unbury-me',
        name: 'Unbury.me',
        slug: 'unbury-me',
        description: 'Visual calculator for Snowball vs Avalanche.',
        icon: 'Calculator',
        link: 'https://unbury.me',
    },
    {
        id: 'undebt-it',
        name: 'Undebt.it',
        slug: 'undebt-it',
        description: 'A free, mobile-friendly debt payoff planner.',
        icon: 'Smartphone',
        link: 'https://undebt.it',
    },
    {
        id: 'powerpay',
        name: 'PowerPay',
        slug: 'powerpay',
        description: 'Developed by Utah State Extension, highly accurate.',
        icon: 'Zap',
        link: 'https://powerpay.org',
    }
];
