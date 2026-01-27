import { SafetyRating, Product } from '@/types';

export function calculateProductSafetyScore(product: Product): number {
  return product.overallSafetyScore * 10;
}

export function getProductSafetyRating(product: Product): SafetyRating {
  return product.safetyRating;
}

export function scoreToSafetyRating(score: number): SafetyRating {
  if (score >= 80) return 'safe';
  if (score >= 60) return 'low_concern';
  if (score >= 40) return 'moderate_concern';
  if (score >= 20) return 'high_concern';
  return 'avoid';
}

export function safetyRatingToScore(rating: SafetyRating): number {
  const map: Record<SafetyRating, number> = {
    safe: 90,
    low_concern: 70,
    moderate_concern: 50,
    high_concern: 30,
    avoid: 10,
  };
  return map[rating];
}

export function getSafetyRatingLabel(rating: SafetyRating): string {
  const labels: Record<SafetyRating, string> = {
    safe: 'Safe',
    low_concern: 'Low Concern',
    moderate_concern: 'Moderate Concern',
    high_concern: 'High Concern',
    avoid: 'Avoid',
  };
  return labels[rating];
}

export function getSafetyRatingColor(rating: SafetyRating): string {
  const colors: Record<SafetyRating, string> = {
    safe: 'emerald',
    low_concern: 'green',
    moderate_concern: 'yellow',
    high_concern: 'orange',
    avoid: 'red',
  };
  return colors[rating];
}

export function getWorstIngredientRating(product: Product): SafetyRating {
  if (!product.ingredients || product.ingredients.length === 0) {
    return 'moderate_concern';
  }

  const worstScore = Math.min(
    ...product.ingredients.map(ing => safetyRatingToScore(ing.safetyRating))
  );

  return scoreToSafetyRating(worstScore);
}

export function countIngredientsByRating(product: Product): Record<SafetyRating, number> {
  const counts: Record<SafetyRating, number> = {
    safe: 0,
    low_concern: 0,
    moderate_concern: 0,
    high_concern: 0,
    avoid: 0,
  };

  product.ingredients.forEach(ingredient => {
    counts[ingredient.safetyRating]++;
  });

  return counts;
}
