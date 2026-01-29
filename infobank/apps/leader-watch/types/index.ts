export type Trend = 'improving' | 'stable' | 'declining';
export type ImpactType = 'positive' | 'negative' | 'mixed';
export type ActionCategory = 'democracy' | 'economy' | 'rights' | 'climate' | 'corruption' | 'foreign_policy';
export type ActionType = 'policy' | 'legislation' | 'executive_action' | 'statement' | 'international';

export interface Source {
  name: string;
  url: string;
  date: string;
}

export interface Action {
  id: string;
  date: string;
  type: ActionType;
  category: ActionCategory;
  title: string;
  description: string;
  impact: ImpactType;
  impactScore: number; // -10 to +10
  sources: Source[];
}

export interface CountryScores {
  overall: number; // 0-100 composite
  democracy: number; // V-Dem + Freedom House
  corruption: number; // TI CPI (inverted - higher = less corrupt)
  equality: number; // Based on Gini (inverted - higher = more equal)
  humanDevelopment: number; // HDI scaled to 100
  pressFreedom: number; // RSF (inverted - higher = more free)
  climateAction: number; // Climate Action Tracker
  ruleOfLaw: number; // World Bank indicator
}

export interface ScoreSource {
  index: string;
  value: number;
  year: number;
  methodology: string;
  limitations: string;
}

export interface Leader {
  id: string;
  name: string;
  title: string;
  party: string;
  ideology: string;
  inOfficeSince: string;
  imageUrl?: string;
  previousRoles: string[];
  keyActions: Action[];
}

export interface Country {
  id: string;
  name: string;
  code: string; // ISO 3166-1 alpha-2
  flag: string; // Emoji flag
  region: string;
  subregion: string;
  gdpPerCapita: number;
  population: number;
  currentLeader: Leader;
  scores: CountryScores;
  scoreSources: Record<keyof CountryScores, ScoreSource>;
  trend: Trend;
  trendReason: string;
  rank: number;
  previousRank?: number;
  highlights: string[];
  concerns: string[];
}

export interface IndexInfo {
  id: string;
  name: string;
  organization: string;
  description: string;
  methodology: string;
  limitations: string[];
  biases: string[];
  url: string;
  updateFrequency: string;
  lastUpdated: string;
}

export type ScoreCategory = keyof CountryScores;

export interface ComparisonMetric {
  category: ScoreCategory;
  label: string;
  description: string;
  icon: string;
}
