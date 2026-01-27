export type PlaybookCategory =
    | 'food_beverage'
    | 'professional_services'
    | 'trades'
    | 'health_fitness'
    | 'retail'
    | 'creative'
    | 'education'
    | 'local_services';

export type VentureStatus =
    | 'funding'           // Seeking initial contributions
    | 'in_progress'       // Executing steps
    | 'operating'         // Business is running
    | 'profitable'        // Generating returns
    | 'paused';

export type StepStatus = 'locked' | 'funding' | 'ready' | 'executing' | 'complete';

export interface Playbook {
    id: string;
    name: string;
    slug: string;
    category: PlaybookCategory;
    description: string;
    businessModel: string;
    targetRevenue: string;           // "Year 1: $80K-120K"
    profitMargin: string;            // "15-25%"
    startupCostRange: string;        // "$15K-30K"
    timeToProfit: string;            // "6-12 months"
    requiredExpertise: string[];
    idealLocations: string[];
    steps: AgentStep[];
    successMetrics: string[];
    risks: string[];
    tags: string[];
}

export interface AgentStep {
    id: string;
    order: number;
    name: string;
    description: string;
    whatYouGet: string[];            // Deliverables
    estimatedMinutes: number;
    cost: number;                    // $25-150
    outputType: 'report' | 'plan' | 'page' | 'list' | 'campaign' | 'financial';
}

export interface Venture {
    id: string;
    playbookId: string;
    playbookName: string;
    name: string;
    location: string;
    city: string;
    province: string;
    description: string;
    status: VentureStatus;
    founderId: string;
    founderName: string;
    currentStep: number;
    steps: VentureStep[];

    // Financials
    totalRaised: number;
    targetRaise: number;
    totalOwnershipSold: number;      // Percentage (max 90%, founder keeps 10% min)
    projectedAnnualRevenue: number;
    projectedAnnualProfit: number;

    // Ownership
    contributors: Contributor[];
    ownershipCap: number;            // Max any single person can own (10%)
    minContribution: number;         // $25
    maxContribution: number;         // $5000

    // Dates
    createdAt: string;
    launchTargetDate: string;

    // Returns (once operating)
    totalDividendsPaid: number;
    lastDividendDate: string | null;
    lastDividendAmount: number | null;
}

export interface VentureStep {
    stepId: string;
    status: StepStatus;
    fundedAmount: number;
    requiredAmount: number;
    fundedBy: StepContributor[];
    completedAt: string | null;
    artifact: string | null;         // The AI output
}

export interface Contributor {
    id: string;
    name: string;
    location: string;
    totalContributed: number;
    ownershipPercentage: number;
    contributedAt: string;
    stepsFunded: string[];
}

export interface StepContributor {
    contributorId: string;
    name: string;
    amount: number;
    contributedAt: string;
}

export interface PortfolioHolding {
    ventureId: string;
    ventureName: string;
    location: string;
    status: VentureStatus;
    ownershipPercentage: number;
    totalInvested: number;
    currentValue: number;            // Based on venture valuation
    totalDividendsReceived: number;
    projectedAnnualDividend: number;
}

export interface DividendPayment {
    id: string;
    ventureId: string;
    ventureName: string;
    amount: number;
    ownershipAtTime: number;
    paidAt: string;
    period: string;                  // "Q4 2024"
}
