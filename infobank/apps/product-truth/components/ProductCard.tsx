import Link from 'next/link';
import { Product } from '@/types';
import { SafetyBadge } from './SafetyBadge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-50 mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-slate-400">{product.brand}</p>
          </div>
          <SafetyBadge score={product.overallSafetyScore * 10} />
        </div>

        <p className="text-sm text-slate-300 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-slate-700 rounded text-slate-300">
              {product.category}
            </span>
            {product.certifications && product.certifications.length > 0 && (
              <span className="text-emerald-400">
                ✓ {product.certifications.length} cert{product.certifications.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          <span className="text-slate-400">
            {product.ingredients.length} ingredients
          </span>
        </div>

        {product.keyHighlights && product.keyHighlights.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-700">
            <ul className="space-y-1">
              {product.keyHighlights.slice(0, 2).map((highlight, idx) => (
                <li key={idx} className="text-xs text-slate-400 flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Link>
  );
}
