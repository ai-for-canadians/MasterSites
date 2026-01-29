export type PlaybookCategory = 'food_access' | 'education' | 'housing' | 'healthcare' | 'energy' | 'environment';

export interface SuccessStory {
    title: string;
    description: string;
    location: string;
}

export interface AgentStep {
    id: string;
    order: number;
    name: string;
    description: string;
    estimatedMinutes: number;
    cost: number;           // $25-100 per step
    outputType: 'report' | 'plan' | 'page' | 'list' | 'campaign';
}

export interface Playbook {
    id: string;
    name: string;
    slug: string;
    category: PlaybookCategory;
    description: string;
    problemAddressed: string;
    expectedImpact: string;
    startupCostRange: string;
    timelineMonths: number;
    requiredExpertise: string[];
    successStories: SuccessStory[];
    steps: AgentStep[];
    tags: string[];
}

export interface CompletedStep {
    stepId: string;
    completedAt: string;
    artifact: string;       // The AI-generated output (mock) content or ID
}

export interface StepContributor {
    contributorId: string;
    name: string;
    amount: number;
    contributedAt: string;
}

export interface ImpactShare {
    ventureId: string;
    contributorId: string;
    shares: number;              // Based on contribution amount
    votingPower: number;         // 1 share = 1 vote
    contributedAt: string;
}

export interface GovernanceVote {
    id: string;
    ventureId: string;
    title: string;
    description: string;
    options: VoteOption[];
    status: 'active' | 'closed';
    startDate: string;
    endDate: string;
    results?: VoteResults;
}

export interface VoteOption {
    id: string;
    label: string;
    votes: number;
}

export interface VoteResults {
    [optionId: string]: number;
}

export interface ImpactMetrics {
    ventureId: string;
    peopleServed: number;
    jobsCreated: number;
    communityInvestment: number;
    volunteerHours: number;
    customMetrics: { label: string; value: string }[];
}

export interface Contributor {
    name: string;
    amount: number;
    stepFunded: string; // Step name
}

export interface Venture {
    id: string;
    playbookId: string;
    name: string;
    location: string;
    description: string;
    launcherId?: string;
    status: 'planning' | 'in_progress' | 'launched' | 'paused' | 'funding' | 'operating';
    currentStep: number; // 1-indexed
    completedSteps?: CompletedStep[];
    fundingReceived?: number;
    totalRaised: number;
    targetRaise: number;
    contributors?: Contributor[];
    createdAt?: string;
}
