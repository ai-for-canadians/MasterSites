import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, CheckCircle, ExternalLink, Award } from 'lucide-react';
import { getProductBySlug, products } from '@/lib/data/products';
import { getIngredientBySlug } from '@/lib/data/ingredients';
import { SafetyBadge } from '@/components/SafetyBadge';
import { ProductCard } from '@/components/ProductCard';
import { calculateProductSafetyScore, countIngredientsByRating, safetyRatingToScore } from '@/lib/utils/safety';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const safetyScore = calculateProductSafetyScore(product);
  const ratingCounts = countIngredientsByRating(product);

  const concernIngredients = product.ingredients
    .filter(ing => safetyRatingToScore(ing.safetyRating) < 60)
    .sort((a, b) => safetyRatingToScore(a.safetyRating) - safetyRatingToScore(b.safetyRating));

  const safeIngredients = product.ingredients
    .filter(ing => safetyRatingToScore(ing.safetyRating) >= 60)
    .sort((a, b) => safetyRatingToScore(b.safetyRating) - safetyRatingToScore(a.safetyRating));

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-500 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-slate-700 rounded text-sm text-slate-300 mb-3">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl text-slate-400 mb-4">{product.brand}</p>
              <p className="text-slate-300">{product.description}</p>
            </div>

            <SafetyBadge score={safetyScore} size="lg" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Highlights */}
            {product.keyHighlights && product.keyHighlights.length > 0 && (
              <section className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                  Key Highlights
                </h2>
                <ul className="space-y-2">
                  {product.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-emerald-500 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Ingredients Breakdown */}
            <section className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Ingredient Breakdown</h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {Object.entries(ratingCounts).map(([rating, count]) => {
                  const colors = {
                    safe: 'emerald',
                    low_concern: 'green',
                    moderate_concern: 'yellow',
                    high_concern: 'orange',
                    avoid: 'red',
                  };
                  const color = colors[rating as keyof typeof colors];

                  return (
                    <div
                      key={rating}
                      className={`bg-${color}-500/10 border border-${color}-500/30 rounded-lg p-4 text-center`}
                    >
                      <div className={`text-2xl font-bold text-${color}-400`}>
                        {count}
                      </div>
                      <div className={`text-xs text-${color}-400 capitalize`}>
                        {rating.replace('_', ' ')}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Concerning Ingredients */}
              {concernIngredients.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-orange-400">
                    <AlertTriangle className="w-5 h-5" />
                    Ingredients of Concern ({concernIngredients.length})
                  </h3>
                  <div className="space-y-3">
                    {concernIngredients.map(ing => {
                      const fullIngredient = getIngredientBySlug(ing.ingredientSlug);
                      return (
                        <Link
                          key={ing.ingredientSlug}
                          href={`/ingredients/${ing.ingredientSlug}`}
                          className="block bg-slate-700/50 border border-slate-600 rounded-lg p-4 hover:border-orange-500 transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-50 mb-1">
                                {ing.ingredientName}
                              </h4>
                              {fullIngredient && (
                                <p className="text-sm text-slate-400 line-clamp-2">
                                  {fullIngredient.description}
                                </p>
                              )}
                            </div>
                            <SafetyBadge rating={ing.safetyRating} size="sm" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Safe Ingredients */}
              {safeIngredients.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-emerald-400">
                    <CheckCircle className="w-5 h-5" />
                    Safe Ingredients ({safeIngredients.length})
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {safeIngredients.map(ing => (
                      <Link
                        key={ing.ingredientSlug}
                        href={`/ingredients/${ing.ingredientSlug}`}
                        className="block bg-slate-700/50 border border-slate-600 rounded-lg p-3 hover:border-emerald-500 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-slate-50 text-sm font-medium">
                            {ing.ingredientName}
                          </span>
                          <SafetyBadge rating={ing.safetyRating} size="sm" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certifications */}
            {product.certifications && product.certifications.length > 0 && (
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-500" />
                  Certifications
                </h3>
                <div className="space-y-2">
                  {product.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Product Info */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Product Info</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-slate-400">Brand</dt>
                  <dd className="text-slate-50 font-medium">{product.brand}</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-400">Category</dt>
                  <dd className="text-slate-50 font-medium">{product.category}</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-400">Total Ingredients</dt>
                  <dd className="text-slate-50 font-medium">
                    {product.ingredients.length}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Alternative Products */}
            {product.alternatives && product.alternatives.length > 0 && (
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Safer Alternatives</h3>
                <div className="space-y-3">
                  {product.alternatives.map((alt, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-600 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-slate-50">{alt.name}</h4>
                        <SafetyBadge score={alt.safetyScore} size="sm" />
                      </div>
                      <p className="text-sm text-slate-400 mb-2">{alt.reason}</p>
                      {alt.link && (
                        <a
                          href={alt.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-emerald-500 hover:text-emerald-400"
                        >
                          Learn more
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Products */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
