import { Benefit } from '@/types';

export const benefits: Benefit[] = [
    {
        id: 'ccb',
        title: 'Canada Child Benefit (CCB)',
        slug: 'canada-child-benefit',
        category: 'family',
        provider: 'Federal',
        province: 'All',
        description: 'A tax-free monthly payment made to eligible families to help with the cost of raising children under 18 years of age.',
        amount: 'Up to $619.75/month per child',
        paymentFrequency: 'Monthly',
        applicationUrl: 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html',
        eligibility: [
            { id: 'has-child', question: 'Do you have a child under 18?', requiredAnswer: true, type: 'boolean' },
            { id: 'resident', question: 'Are you a resident of Canada for tax purposes?', requiredAnswer: true, type: 'boolean' },
        ]
    },
    {
        id: 'gst-hst',
        title: 'GST/HST Credit',
        slug: 'gst-hst-credit',
        category: 'family',
        provider: 'Federal',
        province: 'All',
        description: 'A tax-free quarterly payment that helps individuals and families with low and modest incomes offset all or part of the GST or HST that they pay.',
        amount: 'Up to $496/year (single)',
        paymentFrequency: 'Quarterly',
        applicationUrl: 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-credit.html',
        eligibility: [
            { id: 'income-low', question: 'Is your income considered low or modest?', requiredAnswer: true, type: 'boolean' },
            { id: 'resident', question: 'Are you a resident of Canada?', requiredAnswer: true, type: 'boolean' },
        ]
    },
    {
        id: 'oas',
        title: 'Old Age Security (OAS)',
        slug: 'old-age-security',
        category: 'senior',
        provider: 'Federal',
        province: 'All',
        description: 'A monthly payment you can get if you are 65 and older. In most cases, Service Canada will automatically enroll you.',
        amount: 'Up to $707.68/month',
        paymentFrequency: 'Monthly',
        applicationUrl: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html',
        eligibility: [
            { id: 'age-65', question: 'Are you 65 or older?', requiredAnswer: true, type: 'boolean' },
            { id: 'citizen', question: 'Are you a Canadian citizen or legal resident?', requiredAnswer: true, type: 'boolean' },
        ]
    },
    {
        id: 'gis',
        title: 'Guaranteed Income Supplement (GIS)',
        slug: 'guaranteed-income-supplement',
        category: 'senior',
        provider: 'Federal',
        province: 'All',
        description: 'A monthly payment you can get if you are 65 and older, live in Canada, and have a low income.',
        amount: 'Up to $1,043.45/month',
        paymentFrequency: 'Monthly',
        applicationUrl: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/guaranteed-income-supplement.html',
        eligibility: [
            { id: 'receiving-oas', question: 'Are you receiving OAS?', requiredAnswer: true, type: 'boolean' },
            { id: 'low-income', question: 'Is your income below the threshold ($21,168 single)?', requiredAnswer: true, type: 'boolean' },
        ]
    },
    {
        id: 'cwlb',
        title: 'Canada Dental Benefit',
        slug: 'dental-benefit',
        category: 'health',
        provider: 'Federal',
        province: 'All',
        description: 'Provides payments up to $650 per eligible child under 12 years old per year for two years.',
        amount: 'Up to $650/child',
        paymentFrequency: 'Per application',
        applicationUrl: 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/dental-benefit.html',
        eligibility: [
            { id: 'has-child-12', question: 'Do you have a child under 12?', requiredAnswer: true, type: 'boolean' },
            { id: 'no-insurance', question: 'Does the child NOT have access to private dental insurance?', requiredAnswer: true, type: 'boolean' },
            { id: 'income-90k', question: 'Is your family income less than $90,000?', requiredAnswer: true, type: 'boolean' },
        ]
    },
    {
        id: 'otb',
        title: 'Ontario Trillium Benefit',
        slug: 'ontario-trillium-benefit',
        category: 'housing',
        provider: 'Provincial',
        province: 'ON',
        description: 'Helps pay for energy costs as well as sales and property taxes.',
        amount: 'Varies',
        paymentFrequency: 'Monthly',
        applicationUrl: 'https://www.ontario.ca/page/ontario-trillium-benefit',
        eligibility: [
            { id: 'reside-on', question: 'Are you a resident of Ontario?', requiredAnswer: true, type: 'boolean' },
            { id: 'income-modest', question: 'Do you have low to moderate income?', requiredAnswer: true, type: 'boolean' },
        ]
    },
    {
        id: 'bcfeb',
        title: 'BC Family Benefit',
        slug: 'bc-family-benefit',
        category: 'family',
        provider: 'Provincial',
        province: 'BC',
        description: 'A tax-free monthly payment to families with children under the age of 18.',
        amount: 'Up to $133/month for first child',
        paymentFrequency: 'Monthly',
        applicationUrl: 'https://www2.gov.bc.ca/gov/content/family-social-supports/affordability/family-benefit',
        eligibility: [
            { id: 'reside-bc', question: 'Are you a resident of BC?', requiredAnswer: true, type: 'boolean' },
            { id: 'has-child', question: 'Do you have a child under 18?', requiredAnswer: true, type: 'boolean' },
        ]
    },
    {
        id: 'cesg',
        title: 'Canada Education Savings Grant (CESG)',
        slug: 'cesg',
        category: 'student',
        provider: 'Federal',
        province: 'All',
        description: 'Money the government adds to an RESP to help you save for your child\'s education.',
        amount: '20% match on first $2500/year',
        paymentFrequency: 'Per contribution',
        applicationUrl: 'https://www.canada.ca/en/services/benefits/education/education-savings/savings-grant.html',
        eligibility: [
            { id: 'has-resp', question: 'Do you have an RESP open?', requiredAnswer: true, type: 'boolean' },
            { id: 'child-17', question: 'Is the beneficiary 17 or under?', requiredAnswer: true, type: 'boolean' },
        ]
    }
];
