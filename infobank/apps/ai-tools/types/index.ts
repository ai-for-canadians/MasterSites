export type ToolCategory = 'writing' | 'image' | 'code' | 'productivity' | 'video' | 'audio' | 'business';

export interface Category {
  id: ToolCategory;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export type PricingType = 'free' | 'freemium' | 'paid' | 'enterprise';

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export interface AITool {
  id: string;
  name: string;
  slug: string;
  category: ToolCategory;
  summary: string;
  description: string;
  websiteUrl: string;

  rating: number; // 1-10

  pricingType: PricingType;
  pricingPlans: PricingPlan[];

  pros: string[];
  cons: string[];

  useCases: string[]; // Best for...

  screenshot?: string; // Placeholder for now
}
