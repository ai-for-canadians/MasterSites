export type SafetyRating =
  | 'safe'
  | 'low_concern'
  | 'moderate_concern'
  | 'high_concern'
  | 'avoid';

export type EvidenceRating = 'A' | 'B' | 'C' | 'D' | 'F';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  productCount: number;
}

export interface Concern {
  title: string;
  type?: string;
  description: string;
  severity: 'low' | 'moderate' | 'high';
  evidenceRating?: EvidenceRating;
}

export interface Source {
  title: string;
  url: string;
  type: 'study' | 'review' | 'guideline' | 'database';
  year?: number;
}

export interface Ingredient {
  id: string;
  name: string;
  slug: string;
  otherNames: string[];
  alternativeNames?: string[];
  description: string;
  function?: string;
  safetyRating: SafetyRating;
  evidenceRating: EvidenceRating;
  concerns: Concern[];
  sources: Source[];
  foundIn: string[];
  saferAlternatives: string[];
  regulatoryInfo?: {
    fdaApproved?: boolean;
    euRestrictions?: string;
  };
}

export interface ProductIngredient {
  ingredientId: string;
  ingredientName: string;
  ingredientSlug: string;
  safetyRating: SafetyRating;
  isPrimaryConcern: boolean;
}

export interface AlternativeProduct {
  id: string;
  name: string;
  slug: string;
  brand: string;
  safetyScore: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  categoryId: string;
  description: string;
  imageUrl?: string;
  ingredients: ProductIngredient[];
  overallSafetyScore: number;
  safetyRating: SafetyRating;
  concernCount: number;
  saferAlternatives: AlternativeProduct[];
  alternatives?: Array<{
    name: string;
    safetyScore: number;
    reason: string;
    link?: string;
  }>;
  keyHighlights?: string[];
  certifications?: string[];
  lastUpdated: string;
}
