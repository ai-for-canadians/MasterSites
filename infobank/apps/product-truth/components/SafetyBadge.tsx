import { SafetyRating } from '@/types';

interface SafetyBadgeProps {
  score?: number;
  rating?: SafetyRating;
  size?: 'sm' | 'md' | 'lg';
}

export function SafetyBadge({ score, rating, size = 'md' }: SafetyBadgeProps) {
  let displayRating: SafetyRating;
  let displayScore: number;

  if (rating) {
    displayRating = rating;
    displayScore = ratingToScore(rating);
  } else if (score !== undefined) {
    displayScore = score;
    displayRating = scoreToRating(score);
  } else {
    displayScore = 50;
    displayRating = 'moderate_concern';
  }

  const config = getRatingConfig(displayRating);

  const sizeClasses = {
    sm: 'w-12 h-12 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-24 h-24 text-lg'
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold border-2 ${config.classes}`}
        title={config.label}
      >
        {displayScore}
      </div>
      {size !== 'sm' && (
        <span className={`text-xs ${config.textClass}`}>
          {config.label}
        </span>
      )}
    </div>
  );
}

function scoreToRating(score: number): SafetyRating {
  if (score >= 80) return 'safe';
  if (score >= 60) return 'low_concern';
  if (score >= 40) return 'moderate_concern';
  if (score >= 20) return 'high_concern';
  return 'avoid';
}

function ratingToScore(rating: SafetyRating): number {
  const map: Record<SafetyRating, number> = {
    safe: 90,
    low_concern: 70,
    moderate_concern: 50,
    high_concern: 30,
    avoid: 10
  };
  return map[rating];
}

function getRatingConfig(rating: SafetyRating) {
  const configs = {
    safe: {
      label: 'Safe',
      classes: 'bg-emerald-500/20 border-emerald-500 text-emerald-400',
      textClass: 'text-emerald-400'
    },
    low_concern: {
      label: 'Low Risk',
      classes: 'bg-green-500/20 border-green-500 text-green-400',
      textClass: 'text-green-400'
    },
    moderate_concern: {
      label: 'Moderate',
      classes: 'bg-yellow-500/20 border-yellow-500 text-yellow-400',
      textClass: 'text-yellow-400'
    },
    high_concern: {
      label: 'High Risk',
      classes: 'bg-orange-500/20 border-orange-500 text-orange-400',
      textClass: 'text-orange-400'
    },
    avoid: {
      label: 'Avoid',
      classes: 'bg-red-500/20 border-red-500 text-red-400',
      textClass: 'text-red-400'
    }
  };
  return configs[rating];
}
