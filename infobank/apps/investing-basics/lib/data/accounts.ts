import { Account, InvestingConcept } from '@/types';

export const accounts: Account[] = [
    {
        id: 'tfsa',
        name: 'TFSA',
        fullName: 'Tax-Free Savings Account',
        slug: 'tfsa',
        category: 'registered',
        taxTreatment: 'Tax-Free. You pay no tax on investment gains or withdrawals.',
        contributionLimit: '$7,000 per year (2024), plus any unused room from previous years.',
        bestFor: 'Short-term savings, emergency funds, and long-term wealth building with maximum flexibility.',
        pros: [
            'No tax on interest, dividends, or capital gains.',
            'Withdrawals are tax-free.',
            'Withdrawals increase your contribution room the following year.',
            'No age limit to contribute.'
        ],
        cons: [
            'Contributions are not tax-deductible (done with after-tax money).',
            'Limited annual contribution room.'
        ],
        details: 'The TFSA is Canada\'s most versatile savings tool. Despite the name, it is not just for "savings"—you can hold stocks, ETFs, and other investments inside it.'
    },
    {
        id: 'rrsp',
        name: 'RRSP',
        fullName: 'Registered Retirement Savings Plan',
        slug: 'rrsp',
        category: 'registered',
        taxTreatment: 'Tax-Deferred. Contributions reduce your taxable income now; withdrawals are taxed as income later.',
        contributionLimit: '18% of earned income from the previous year, up to an annual maximum.',
        bestFor: 'Retirement savings, especially for those in higher tax brackets looking to lower their current tax bill.',
        pros: [
            'Immediate tax refund on contributions.',
            'US dividends are not subject to withholding tax (unlike TFSA).',
            'Can be used for the Home Buyers\' Plan (HBP).',
            'Growth is tax-sheltered until withdrawal.'
        ],
        cons: [
            'Withdrawals are taxed as regular income.',
            'Contribution room is lost once used (withdrawals don\'t give room back).',
            'Must be converted to a RRIF by age 71.'
        ],
        details: 'The RRSP is designed for long-term retirement savings. It effectively allows you to shift income from high-earning years to lower-earning retirement years.'
    },
    {
        id: 'fhsa',
        name: 'FHSA',
        fullName: 'First Home Savings Account',
        slug: 'fhsa',
        category: 'registered',
        taxTreatment: 'Tax-Free (The best of both worlds). Contributions are tax-deductible AND withdrawals are tax-free.',
        contributionLimit: '$8,000 per year, up to a lifetime maximum of $40,000.',
        bestFor: 'Saving for a first home in Canada.',
        pros: [
            'Contributions reduce your taxable income (like RRSP).',
            'Withdrawals for a home purchase are tax-free (like TFSA).',
            'Can be combined with the Home Buyers\' Plan (HBP).',
            'If not used for a home, can be rolled into an RRSP tax-free.'
        ],
        cons: [
            'Strict eligibility (First-time home buyer only).',
            'Room does not carry forward if account is not open.'
        ],
        details: 'The newest addition to Canadian registered accounts, the FHSA is specifically targeted at helping residents enter the housing market.'
    }
];

export const concepts: InvestingConcept[] = [
    {
        id: 'c1',
        title: 'Compound Interest',
        slug: 'compound-interest',
        description: 'Interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods. Over long periods, this creates exponential growth.',
        importance: 'High'
    },
    {
        id: 'c2',
        title: 'Index Funds & ETFs',
        slug: 'index-funds',
        description: 'Instead of picking individual stocks, you buy the whole market. This lowers risk and usually results in better long-term returns due to lower fees.',
        importance: 'High'
    },
    {
        id: 'c3',
        title: 'Risk Tolerance',
        slug: 'risk-tolerance',
        description: 'The degree of variability in investment returns that an investor is willing to withstand. Usually tied to your timeline (age) and emotional comfort.',
        importance: 'High'
    },
    {
        id: 'c4',
        title: 'Diversification',
        slug: 'diversification',
        description: 'Spreading your investments across different assets (stocks, bonds, real estate) and geographies (Canada, US, Global) to minimize the impact of any one failure.',
        importance: 'Medium'
    }
];
