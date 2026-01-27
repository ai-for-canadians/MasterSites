import type { Scenario, SupplyItem } from '@/types';

export const supplies: SupplyItem[] = [
    { id: 'water', name: 'Water', description: 'One gallon per person per day', category: 'Basic', quantityPerPerson: '3 gallons', shelfLife: 'Indefinite (rotate yearly)' },
    { id: 'food', name: 'Non-perishable Food', description: 'Canned goods, dry mix', category: 'Basic', quantityPerPerson: '3 days worth', shelfLife: '1-5 years' },
    { id: 'flashlight', name: 'Flashlight', description: 'LED preferred', category: 'Gear', quantityPerPerson: '1', shelfLife: 'N/A' },
    { id: 'batteries', name: 'Batteries', description: 'For flashlights/radio', category: 'Gear', quantityPerPerson: 'Spare set', shelfLife: '5-10 years' },
    { id: 'first-aid', name: 'First Aid Kit', description: 'Basic bandages/meds', category: 'Medical', quantityPerPerson: '1 per household', shelfLife: '3 years' },
    { id: 'radio', name: 'NOAA Weather Radio', description: 'Battery or crank powered', category: 'Comm', quantityPerPerson: '1 per household', shelfLife: 'N/A' },
    { id: 'power-bank', name: 'Power Bank', description: 'For phone charging', category: 'Tech', quantityPerPerson: '1', shelfLife: '2 years' },
];

export const scenarios: Scenario[] = [
    {
        id: 'power-outage',
        name: 'Power Outage',
        slug: 'power-outage',
        tagline: 'Lights out',
        description: 'Loss of electrical power for 4+ hours, potentially days.',
        riskLevel: 'High',
        probability: 'Yearly',
        immediateActions: [
            'Check if neighbors have power',
            'Report outage to utility',
            'Keep fridge closed',
            'Turn off major appliances (surge protection)'
        ],
        checklist: [
            { id: '1', name: 'Locate Flashlights', description: 'Do not use candles (fire risk).', isCritical: true, frequency: 'one-time' },
            { id: '2', name: 'Conserve Phone Battery', description: 'Turn on power save mode.', isCritical: false, frequency: 'one-time' },
            { id: '3', name: 'Check Freezer', description: 'Use ice to keep fridge cool if outage > 4 hours.', isCritical: true, frequency: 'one-time' },
        ],
        budgetOptions: {
            basic: ['Flashlights', 'Blankets', 'Power bank'],
            advanced: ['Portable Power Station (Jackery/EcoFlow)', 'Dual fuel generator', 'Stored fuel'],
        },
        lastUpdated: '2025-01-26',
    },
    {
        id: 'winter-storm',
        name: 'Winter Storm',
        slug: 'winter-storm',
        tagline: 'Ice and isolation',
        description: 'Heavy snow/ice preventing travel and potentially causing outages.',
        riskLevel: 'Medium',
        probability: 'Seasonal',
        immediateActions: [
            'Stay off roads',
            'Keep faucets dripping (prevent frozen pipes)',
            'Seal drafts'
        ],
        checklist: [
            { id: '1', name: 'Emergency Heat', description: 'Safe indoor heater or warm clothing layers.', isCritical: true, frequency: 'seasonal' },
            { id: '2', name: 'Food Prep', description: 'Cook a hot meal before power potentially fails.', isCritical: false, frequency: 'one-time' },
            { id: '3', name: 'Car Kit', description: 'Ensure car emergency kit is stocked.', isCritical: true, frequency: 'seasonal' },
        ],
        budgetOptions: {
            basic: ['Wool blankets', 'Hand warmers', 'Canned soup'],
            advanced: ['Indoor propane heater (Mr. Buddy)', '0-degree sleeping bags', 'Snow tires'],
        },
        lastUpdated: '2025-01-26',
    },
    {
        id: 'evacuation',
        name: 'Evacuation (Fire/Flood)',
        slug: 'evacuation',
        tagline: 'Go bag ready',
        description: 'Being forced to leave home immediately due to natural disaster.',
        riskLevel: 'Low',
        probability: 'Rare',
        immediateActions: [
            'Grab Go Bags',
            'Load pets',
            'Follow official routes',
            'Turn off gas/water if instructed'
        ],
        checklist: [
            { id: '1', name: 'Documents', description: 'ID, Insurance, Cash.', isCritical: true, frequency: 'yearly' },
            { id: '2', name: 'Meds', description: '3-7 day supply of prescriptions.', isCritical: true, frequency: 'seasonal' },
            { id: '3', name: 'Photos', description: 'Digital backup of hard drives/albums.', isCritical: false, frequency: 'yearly' },
        ],
        budgetOptions: {
            basic: ['Backpack with basics', 'Copies of ID'],
            advanced: ['Fireproof document bag', 'Full 72-hour kit per person', 'Digital cloud backups'],
        },
        lastUpdated: '2025-01-26',
    },
    {
        id: 'job-loss',
        name: 'Financial Emergency',
        slug: 'job-loss',
        tagline: 'Sudden income loss',
        description: 'Loss of job or major unexpected expense.',
        riskLevel: 'Medium',
        probability: 'Once every 5-10 years',
        immediateActions: [
            'File for unemployment',
            'Cancel subscriptions',
            'Contact lenders (mortgage/auto) for hardship programs'
        ],
        checklist: [
            { id: '1', name: 'Emergency Fund', description: '3-6 months expenses.', isCritical: true, frequency: 'one-time' },
            { id: '2', name: 'Resume', description: 'Keep updated.', isCritical: false, frequency: 'yearly' },
        ],
        budgetOptions: {
            basic: ['1 month emergency fund'],
            advanced: ['6 month emergency fund', 'Side hustle income'],
        },
        lastUpdated: '2025-01-26',
    }
];
