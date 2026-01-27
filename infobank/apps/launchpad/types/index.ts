// Core types for LaunchPad

export type IdeaStatus = 'submitted' | 'voting' | 'funding' | 'building' | 'live';

export interface Contributor {
    id: string;
    name: string;
    amount: number;
    ownershipPercentage: number;
    contributedAt: string;
}

export interface SiteIdea {
    id: string;
    title: string;
    slug: string;
    tagline: string;
    description: string;
    problemSolved: string;
    targetAudience: string;
    proposedFeatures: string[];
    submittedBy: string;
    status: IdeaStatus;
    votes: number;
    fundingGoal: number;
    fundingRaised: number;
    contributors: Contributor[];
    createdAt: string;
    category: string;
    port?: number;  // If live, which port
}

export interface LaunchedSite {
    id: string;
    name: string;
    slug: string;
    tagline: string;
    description: string;
    url: string;
    port: number;
    launchedAt: string;
    totalContributors: number;
    monthlyRevenue?: number;
    category: string;
}
