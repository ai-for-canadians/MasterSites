import { Guide } from '@/types';

export const guides: Guide[] = [
    {
        id: 'inc-vs-sole',
        title: 'Incorporation vs Sole Prop',
        slug: 'incorporation-vs-sole-prop',
        category: 'business-structure',
        shortDescription: 'When should you incorporate? A guide to tax savings and liability.',
        content: 'As a freelancer, you start as a Sole Proprietor by default. Incorporation costs about $1,000 to set up and $2,000+ per year in accounting fees, but it can save you significant tax if you earn over $100k and don\'t need all the cash for personal use.',
        keyChecklist: [
            'Are you earning > $100k/year?',
            'Do you need limited liability protection?',
            'Do you want to leave money in the business to invest?'
        ]
    },
    {
        id: 'gst-hst-basics',
        title: 'GST/HST for Freelancers',
        slug: 'gst-hst-basics',
        category: 'taxes',
        shortDescription: 'The $30k rule and how to collect sales tax.',
        content: 'If you earn more than $30,000 in a single calendar year, you MUST register for a GST/HST number. You collect it from Canadian clients and remit it to the CRA. Use the "Quick Method" if you have low expenses to save a few thousand dollars extra.',
        keyChecklist: [
            'Monitor your trailing 12-month revenue.',
            'Register for a GST/HST number via CRA MyBusiness.',
            'Add the correct tax percentage to every invoice.'
        ]
    },
    {
        id: 'business-expenses',
        title: 'Deductible Expenses',
        slug: 'deductible-expenses',
        category: 'taxes',
        shortDescription: 'What you can actually write off to lower your tax bill.',
        content: 'Common deductions include home office space (proportional to house size), software subscriptions, hardware, business insurance, and professional fees. Keep your receipts for 6 years.',
        keyChecklist: [
            'Pro-rate your internet and phone bill.',
            'Keep track of Coworking and Cafe costs.',
            'Deduct legal and accounting fees.'
        ]
    }
];
