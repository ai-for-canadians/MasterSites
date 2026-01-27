import type { MortgageType } from '@/types';

export const mortgages: MortgageType[] = [
    {
        id: 'conventional',
        name: 'Conventional Loan',
        description: 'The standard mortgage loan not backed by the government.',
        bestFor: 'Borrowers with good credit and stable income.',
        pros: ['No mortgage insurance (PMI) with 20% down', 'Flexible terms'],
        cons: ['Stricter credit requirements', 'Higher rates if credit is low'],
        minDownPayment: '3%',
        creditScoreReq: '620+',
    },
    {
        id: 'fha',
        name: 'FHA Loan',
        description: 'Backed by the Federal Housing Administration.',
        bestFor: 'First-time buyers with lower credit scores.',
        pros: ['Low credit score requirements', 'Low down payment'],
        cons: ['Mortgage insurance (MIP) usually for life of loan', 'Property standards stricter'],
        minDownPayment: '3.5%',
        creditScoreReq: '580+',
    },
    {
        id: 'va',
        name: 'VA Loan',
        description: 'For Veterans and active military.',
        bestFor: 'Veterans.',
        pros: ['0% Down payment', 'No PMI', 'Competitive rates'],
        cons: ['Must be a Veteran/eligible', 'Funding Fee'],
        minDownPayment: '0%',
        creditScoreReq: 'None (Lender specific, usually 580-620)',
    },
    {
        id: 'usda',
        name: 'USDA Loan',
        description: 'For rural and suburban home buyers.',
        bestFor: 'Low-to-moderate income in rural areas.',
        pros: ['0% Down payment', 'Lower mortgage insurance'],
        cons: ['Location restrictions', 'Income limits'],
        minDownPayment: '0%',
        creditScoreReq: '640+',
    }
];
