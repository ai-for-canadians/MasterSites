import { Step, ProvinceInfo } from '@/types';

export const provinces: ProvinceInfo[] = [
    { code: 'ON', name: 'Ontario', waitingPeriod: '1 year', filingFee: '$632', legalAidUrl: 'https://www.legalaid.on.ca/' },
    { code: 'BC', name: 'British Columbia', waitingPeriod: '1 year', filingFee: '$210', legalAidUrl: 'https://legalaid.bc.ca/' },
    { code: 'AB', name: 'Alberta', waitingPeriod: '1 year', filingFee: '$260', legalAidUrl: 'https://www.legalaid.ab.ca/' },
];

export const steps: Step[] = [
    {
        id: '1',
        title: 'Initial Separation',
        slug: 'separation',
        category: 'legal',
        order: 1,
        shortDescription: 'Understanding the date of separation and immediate steps.',
        fullDescription: 'Separation begins the moment one spouse communicates the intention to end the relationship and actions align with that choice. You do not need a lawyer to separate, but documenting the date is crucial.',
        checklist: [
            'Record the specific date of separation.',
            'Open a separate bank account.',
            'Update passwords on personal accounts.',
            'Decide on immediate living arrangements.'
        ],
        resources: [{ title: 'Justice Canada: Separation and Divorce', url: 'https://www.justice.gc.ca/eng/fl-df/divorce/index.html' }]
    },
    {
        id: '2',
        title: 'Telling the Kids',
        slug: 'telling-the-kids',
        category: 'kids',
        order: 2,
        shortDescription: 'How to have the conversation age-appropriately.',
        fullDescription: 'This is one of the hardest conversations. Present a united front if possible. Reassure them it is not their fault and that both parents still love them. Keep details age-appropriate and avoid blaming.',
        checklist: [
            'Plan what to say together beforehand.',
            'Pick a calm time (not right before school/bed).',
            'Emphasize stability ("You will still go to the same school").',
            'Prepare for different reactions (anger, silence, tears).'
        ],
        resources: [{ title: 'UpToParents: Helping Children Through Divorce', url: '#' }]
    },
    {
        id: '3',
        title: 'Financial Disclosure',
        slug: 'financial-disclosure',
        category: 'financial',
        order: 3,
        shortDescription: 'Full and frank disclosure is mandatory.',
        fullDescription: 'You cannot reach a valid agreement without exchanging full financial information. Hiding assets can lead to agreements being overturned later and severe legal penalties.',
        checklist: [
            'Gather 3 years of tax returns (T1s and NOAs).',
            'Collect recent pay stubs.',
            'List all assets (house, car, pension, savings).',
            'List all debts (mortgage, credit cards, loans).'
        ],
        resources: [{ title: 'Financial Statement Forms (Ontario)', url: '#' }]
    },
    {
        id: '4',
        title: 'Separation Agreement',
        slug: 'separation-agreement',
        category: 'legal',
        order: 4,
        shortDescription: 'Drafting the contract that governs your separation.',
        fullDescription: 'A separation agreement is a legally binding contract setting out how you will divide property, handle debts, and arrange parenting. Independent legal advice (ILA) is highly recommended for both parties.',
        checklist: [
            'Agree on decision-making responsibility (custody).',
            'Agree on parenting time (access).',
            'Calculate child support (federal guidelines).',
            'Determine spousal support (if applicable).'
        ],
        resources: [{ title: 'MySupportCalculator', url: 'https://www.mysupportcalculator.ca/' }]
    },
    {
        id: '5',
        title: 'Self-Care & Support',
        slug: 'emotional-support',
        category: 'emotional',
        order: 5,
        shortDescription: 'Managing the emotional roller coaster.',
        fullDescription: 'Divorce is a grieving process. It is normal to feel anger, relief, fear, and sadness all in one day. Ensure you have a support system that is NOT your children.',
        checklist: [
            'Find a therapist or counsellor.',
            'Lean on friends but set boundaries on "venting".',
            'Maintain physical health (sleep, exercise).',
            'Avoid making major life decisions in high-stress moments.'
        ],
        resources: []
    }
];
