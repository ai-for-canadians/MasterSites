import Link from 'next/link';
import { Ingredient } from '@/types';
import { SafetyBadge } from './SafetyBadge';

interface IngredientCardProps {
  ingredient: Ingredient;
}

export function IngredientCard({ ingredient }: IngredientCardProps) {
  return (
    <Link href={`/ingredients/${ingredient.slug}`}>
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-50 mb-1">
              {ingredient.name}
            </h3>
            {ingredient.otherNames && ingredient.otherNames.length > 0 && (
              <p className="text-xs text-slate-400">
                Also known as: {ingredient.otherNames.slice(0, 2).join(', ')}
              </p>
            )}
          </div>
          <SafetyBadge rating={ingredient.safetyRating} />
        </div>

        <p className="text-sm text-slate-300 mb-4 line-clamp-3">
          {ingredient.description}
        </p>

        {ingredient.concerns && ingredient.concerns.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-slate-400 mb-2">
              Primary Concerns:
            </h4>
            <div className="flex flex-wrap gap-2">
              {ingredient.concerns.slice(0, 3).map((concern, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-1 rounded text-xs ${
                    concern.severity === 'high'
                      ? 'bg-red-500/20 text-red-400'
                      : concern.severity === 'moderate'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {concern.type || concern.title}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-700">
          <span className="text-slate-400">
            {ingredient.function || ingredient.foundIn?.[0] || 'Various uses'}
          </span>
          {ingredient.evidenceRating && (
            <span className={`font-semibold ${
              ingredient.evidenceRating === 'A' || ingredient.evidenceRating === 'B'
                ? 'text-emerald-400'
                : ingredient.evidenceRating === 'C'
                ? 'text-yellow-400'
                : 'text-orange-400'
            }`}>
              Evidence: {ingredient.evidenceRating}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
