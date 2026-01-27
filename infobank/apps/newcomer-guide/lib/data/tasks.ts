import { Task } from '@/types';

export const tasks: Task[] = [
    // ARRIVAL
    {
        id: '1',
        title: 'Get your SIN (Social Insurance Number)',
        slug: 'get-sin',
        stage: 'arrival',
        description: 'You cannot work or get paid without this. Do this at the airport or a Service Canada centre immediately.',
        importance: 'critical',
        estimatedTime: '1 hour',
        requiredDocuments: ['COPR (Confirmation of Permanent Residence)', 'Passport'],
    },
    {
        id: '2',
        title: 'Open a Bank Account',
        slug: 'open-bank-account',
        stage: 'arrival',
        description: 'Most major banks have "Newcomer Packages" with no fees for 1 year. You need this to transfer money and pay rent.',
        importance: 'critical',
        estimatedTime: '2 hours',
        requiredDocuments: ['Passport', 'COPR', 'SIN (optional but recommended)'],
    },

    // WEEK 1
    {
        id: '3',
        title: 'Apply for Health Card',
        slug: 'health-card',
        stage: 'week-1',
        description: 'Health coverage is provincial. Apply immediately as some provinces have waiting periods.',
        importance: 'critical',
        estimatedTime: '1 hour',
        requiredDocuments: ['Passport', 'COPR', 'Proof of Residence (lease, bank statement)'],
        provincialVariations: [
            { code: 'ON', name: 'OHIP', description: 'No waiting period (recently changed). Coverage starts immediately.', url: 'https://www.ontario.ca/page/apply-ohip-and-get-health-card' },
            { code: 'BC', name: 'MSP', description: 'WAITING PERIOD: Coverage starts 3 months after arrival. You need private insurance until then.', url: 'https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp' },
            { code: 'AB', name: 'AHCIP', description: 'Coverage starts from date of arrival if you apply within 3 months.', url: 'https://www.alberta.ca/ahcip.aspx' },
            { code: 'QC', name: 'RAMQ', description: 'WAITING PERIOD: Up to 3 months. Private insurance needed.', url: 'https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/register' }
        ]
    },
    {
        id: '4',
        title: 'Get a SIM Card',
        slug: 'sim-card',
        stage: 'week-1',
        description: 'Canadian plans are expensive. Bring your own unlocked phone. Look for "flanker brands" like Fido, Koodo, or Virgin for better deals.',
        importance: 'high',
        estimatedTime: '1 hour',
        requiredDocuments: ['Passport', 'Credit Card (for postpaid) or Cash (prepaid)'],
    },

    // MONTH 1
    {
        id: '5',
        title: 'Get a Driver\'s License',
        slug: 'drivers-license',
        stage: 'month-1',
        description: 'Exchange your foreign license if eligible, or start the graduated licensing process.',
        importance: 'high',
        estimatedTime: 'Half day',
        requiredDocuments: ['Foreign License', 'Translation (if not English/French)', 'Passport'],
        provincialVariations: [
            { code: 'ON', name: 'DriveTest', description: 'Exchange available for US, UK, Aus, etc. Others need written test + road test.', url: 'https://drivetest.ca/' },
            { code: 'BC', name: 'ICBC', description: 'Reciprocal exchange for many countries. 90 days to switch.', url: 'https://www.icbc.com/driver-licensing' },
        ]
    },
    {
        id: '6',
        title: 'Find Long-Term Housing',
        slug: 'housing',
        stage: 'month-1',
        description: 'Moving from Airbnb to a lease. Be prepared for credit checks. Newcomers often need a guarantor or 2-3 months rent deposit.',
        importance: 'critical',
        estimatedTime: '2-4 weeks',
        requiredDocuments: ['Proof of Funds', 'Employment Letter (if any)', 'References'],
    },

    // MONTH 3
    {
        id: '7',
        title: 'Build Credit History',
        slug: 'credit-history',
        stage: 'month-3',
        description: 'get a secured credit card if needed. Use it for small purchases and pay off 100% every month.',
        importance: 'high',
        estimatedTime: 'Ongoing',
        requiredDocuments: ['SIN', 'Bank Account'],
    }
];
