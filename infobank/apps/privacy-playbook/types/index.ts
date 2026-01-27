export type SecurityCategory = 'browser' | 'mobile' | 'account' | 'networking' | 'os' | 'messaging';

export interface Guide {
  id: string;
  title: string;
  slug: string;
  category: SecurityCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeToComplete: string;
  summary: string;
  steps: {
    title: string;
    description: string;
  }[];
  recommendations: string[]; // Tool names
}

export interface SecurityTool {
  id: string;
  name: string;
  category: SecurityCategory;
  summary: string;
  pros: string[];
  cons: string[];
  pricing: string;
  websiteUrl: string;
  isOpenSource: boolean;
}

export interface ThreatModel {
  id: string;
  name: string;
  description: string;
  prioritySteps: string[];
}
