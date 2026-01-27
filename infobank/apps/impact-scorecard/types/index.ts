// Core types for Impact Scorecard

export type OrganizationType = 'nonprofit' | 'bcorp' | 'public-company' | 'private-company';
export type CauseArea = 'health' | 'education' | 'environment' | 'poverty' | 'animals' | 'humanitarian' | 'arts' | 'other';
export type ImpactGrade = 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D' | 'F' | 'NR';

export interface NonprofitMetrics {
    programExpenseRatio: number;        // % of budget to programs
    overheadTransparency: number;       // 0-100 score
    impactMeasurementQuality: number;   // 0-100 score
    financialTransparency: number;      // 0-100 score
    leadershipCompensationRatio: number; // CEO pay vs median employee
    outcomeReporting: number;           // 0-100 score
    charityNavigatorRating?: number;    // 0-4 stars
    giveWellRecommended?: boolean;
}

export interface CompanyMetrics {
    bCorpScore?: number;                // 0-200
    employeeSatisfaction: number;       // 0-5 (Glassdoor-style)
    environmentalImpact: number;        // 0-100 score
    communityInvestment: number;        // 0-100 score
    payEquity: number;                  // 0-100 score
    supplyChainEthics: number;          // 0-100 score
    governanceTransparency: number;     // 0-100 score
}

export interface Organization {
    id: string;
    name: string;
    slug: string;
    type: OrganizationType;
    causeArea?: CauseArea;              // For nonprofits
    industry?: string;                   // For companies

    tagline: string;
    description: string;

    location: string;
    country: 'Canada' | 'USA' | 'UK' | 'International';
    founded: number;

    website: string;
    logo?: string;

    overallGrade: ImpactGrade;
    overallScore: number;               // 0-100

    nonprofitMetrics?: NonprofitMetrics;
    companyMetrics?: CompanyMetrics;

    highlights: string[];
    concerns: string[];

    sources: {
        name: string;
        url: string;
    }[];

    lastUpdated: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    color: string;
}
