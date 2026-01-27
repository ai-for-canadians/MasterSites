// Core types for Open Inquiry

export type SubstanceCategory =
  | 'psychedelic'
  | 'dissociative'
  | 'empathogen'
  | 'nootropic'
  | 'stimulant'
  | 'depressant'
  | 'cannabinoid'
  | 'research_chemical';

export type EvidenceRating = 'A' | 'B' | 'C' | 'D' | 'F';

export type RiskLevel = 'very low' | 'low' | 'moderate' | 'high' | 'very high' | 'extreme' | 'unknown' | 'none';

export type LegalStatus =
  | 'legal'
  | 'prescription'
  | 'decriminalized'
  | 'illegal'
  | 'controlled'
  | 'unscheduled'
  | 'varies';

export interface Effect {
  name: string;
  description: string;
  likelihood: 'common' | 'uncommon' | 'rare';
}

export interface Dosage {
  threshold: string;
  light: string;
  common: string;
  strong: string;
  heavy: string;
  units: string;
  route: string;
  notes: string;
}

export interface Duration {
  onset: string;
  comeUp: string;
  peak: string;
  offset: string;
  afterEffects: string;
  total: string;
}

export interface SafetyProfile {
  riskLevel: RiskLevel;
  physiologicalRisk: RiskLevel;
  psychologicalRisk: RiskLevel;
  addictionPotential: RiskLevel;
  evidenceRating: EvidenceRating;
}

export interface LegalStatusInfo {
  canada: LegalStatus;
  usa: LegalStatus;
  uk: LegalStatus;
  notes: string;
}

export interface Source {
  title: string;
  url: string;
  type: 'study' | 'review' | 'book' | 'database' | 'organization' | 'case' | 'meta-analysis' | 'report';
  year?: number;
  authors?: string;
}

export interface Substance {
  id: string;
  name: string;
  slug: string;
  aliases: string[];
  category: SubstanceCategory;
  categorySecondary?: SubstanceCategory;
  summary: string;
  description: string;

  effects: {
    positive: Effect[];
    neutral: Effect[];
    negative: Effect[];
  };

  dosage: Dosage;
  duration: Duration;
  safetyProfile: SafetyProfile;

  dangerousInteractions: string[];
  unsafeInteractions: string[];
  cautionInteractions: string[];

  legalStatus: LegalStatusInfo;

  researchSummary: string;
  keyStudies: string[];
  therapeuticPotential: string;

  harmReduction: string[];
  testingInfo: string;

  lastUpdated: string;
  evidenceRating: EvidenceRating;
  sources: Source[];
}

export type InteractionSeverity =
  | 'dangerous'
  | 'unsafe'
  | 'caution'
  | 'low_risk'
  | 'unknown';

export interface Interaction {
  substance1: string;
  substance2: string;
  severity: InteractionSeverity;
  description: string;
  mechanism?: string;
  sources: Source[];
}

export type StudyType =
  | 'rct'
  | 'observational'
  | 'case_study'
  | 'review'
  | 'meta_analysis';

export interface Study {
  id: string;
  title: string;
  slug: string;
  authors: string;
  year: number;
  journal: string;
  doi?: string;
  url: string;
  substances: string[];
  summary: string;
  keyFindings: string[];
  limitations: string[];
  sampleSize?: number;
  studyType: StudyType;
  evidenceRating: EvidenceRating;
}

export type GuideCategory =
  | 'harm_reduction'
  | 'testing'
  | 'integration'
  | 'general';

export interface Guide {
  id: string;
  title: string;
  slug: string;
  category: GuideCategory;
  summary: string;
  content: string;
  relatedSubstances: string[];
  lastUpdated: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  substanceCount: number;
}
