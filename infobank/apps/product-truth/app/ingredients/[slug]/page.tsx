import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, AlertCircle, Info, ExternalLink, Lightbulb } from 'lucide-react';
import { getIngredientBySlug, ingredients } from '@/lib/data/ingredients';
import { products } from '@/lib/data/products';
import { SafetyBadge } from '@/components/SafetyBadge';
import { ProductCard } from '@/components/ProductCard';
import { IngredientCard } from '@/components/IngredientCard';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ingredients.map(ingredient => ({
    slug: ingredient.slug,
  }));
}

export default function IngredientDetailPage({ params }: Props) {
  const ingredient = getIngredientBySlug(params.slug);

  if (!ingredient) {
    notFound();
  }

  const productsWithIngredient = products.filter(product =>
    product.ingredients.some(ing => ing.ingredientSlug === ingredient.slug)
  );

  const relatedIngredients = ingredients
    .filter(ing =>
      ing.id !== ingredient.id &&
      (ing.function === ingredient.function || ing.foundIn?.some(f => ingredient.foundIn?.includes(f)))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/ingredients"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-500 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Ingredients
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3">{ingredient.name}</h1>
              {ingredient.otherNames && ingredient.otherNames.length > 0 && (
                <p className="text-slate-400 mb-4">
                  Also known as: {ingredient.otherNames.join(', ')}
                </p>
              )}
              <div className="inline-block px-3 py-1 bg-slate-700 rounded text-sm text-slate-300">
                {ingredient.function || ingredient.foundIn?.[0] || 'Various uses'}
              </div>
            </div>

            <SafetyBadge rating={ingredient.safetyRating} size="lg" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Info className="w-6 h-6 text-emerald-500" />
                What is {ingredient.name}?
              </h2>
              <p className="text-slate-300 leading-relaxed">{ingredient.description}</p>
            </section>

            {/* Concerns */}
            {ingredient.concerns && ingredient.concerns.length > 0 && (
              <section className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  Health Concerns
                </h2>
                <div className="space-y-4">
                  {ingredient.concerns.map((concern, idx) => {
                    const severityColors = {
                      high: 'red',
                      moderate: 'yellow',
                      low: 'blue',
                    };
                    const color = severityColors[concern.severity];

                    return (
                      <div
                        key={idx}
                        className={`border border-${color}-500/30 bg-${color}-500/10 rounded-lg p-4`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`font-semibold text-${color}-400 capitalize`}>
                            {concern.type || concern.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-1 bg-${color}-500/20 text-${color}-400 rounded`}>
                              {concern.severity} severity
                            </span>
                            {concern.evidenceRating && (
                              <span className={`text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded`}>
                                Evidence: {concern.evidenceRating}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-slate-300 text-sm">{concern.description}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Safer Alternatives */}
            {ingredient.saferAlternatives && ingredient.saferAlternatives.length > 0 && (
              <section className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-emerald-500" />
                  Safer Alternatives
                </h2>
                <div className="space-y-3">
                  {ingredient.saferAlternatives.map((alt, idx) => {
                    const altIngredient = getIngredientBySlug(alt);
                    return (
                      <Link
                        key={idx}
                        href={`/ingredients/${alt}`}
                        className="block bg-slate-700/50 border border-slate-600 rounded-lg p-4 hover:border-emerald-500 transition-colors"
                      >
                        {altIngredient ? (
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-50 mb-1">
                                {altIngredient.name}
                              </h4>
                              <p className="text-sm text-slate-400">
                                {altIngredient.description}
                              </p>
                            </div>
                            <SafetyBadge rating={altIngredient.safetyRating} size="sm" />
                          </div>
                        ) : (
                          <span className="text-slate-50">{alt}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Products Containing This Ingredient */}
            {productsWithIngredient.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Products Containing {ingredient.name}
                </h2>
                <p className="text-slate-400 mb-6">
                  Found in {productsWithIngredient.length} products in our database
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {productsWithIngredient.slice(0, 4).map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {productsWithIngredient.length > 4 && (
                  <div className="text-center mt-6">
                    <Link
                      href={`/products?ingredient=${ingredient.slug}`}
                      className="text-emerald-500 hover:text-emerald-400 font-medium"
                    >
                      View all {productsWithIngredient.length} products →
                    </Link>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-slate-400">Function</dt>
                  <dd className="text-slate-50 font-medium">{ingredient.function || ingredient.foundIn?.[0] || 'Various uses'}</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-400">Safety Rating</dt>
                  <dd className="text-slate-50 font-medium capitalize">
                    {ingredient.safetyRating.replace('_', ' ')}
                  </dd>
                </div>
                {ingredient.evidenceRating && (
                  <div>
                    <dt className="text-sm text-slate-400">Evidence Quality</dt>
                    <dd className="text-slate-50 font-medium">
                      Grade {ingredient.evidenceRating}
                    </dd>
                  </div>
                )}
                {ingredient.concerns && (
                  <div>
                    <dt className="text-sm text-slate-400">Known Concerns</dt>
                    <dd className="text-slate-50 font-medium">
                      {ingredient.concerns.length}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Sources */}
            {ingredient.sources && ingredient.sources.length > 0 && (
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Scientific Sources</h3>
                <div className="space-y-3">
                  {ingredient.sources.map((source, idx) => (
                    <div key={idx} className="text-sm">
                      <p className="text-slate-300 mb-1">{source.title}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>{source.type}</span>
                        {source.year && <span>• {source.year}</span>}
                      </div>
                      {source.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-emerald-500 hover:text-emerald-400 mt-1"
                        >
                          View source
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regulatory Info */}
            {ingredient.regulatoryInfo && (
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Regulatory Status</h3>
                <div className="space-y-3">
                  {ingredient.regulatoryInfo.fdaApproved !== undefined && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">FDA Approved</span>
                      <span className={`text-sm font-medium ${
                        ingredient.regulatoryInfo.fdaApproved
                          ? 'text-emerald-400'
                          : 'text-orange-400'
                      }`}>
                        {ingredient.regulatoryInfo.fdaApproved ? 'Yes' : 'No'}
                      </span>
                    </div>
                  )}
                  {ingredient.regulatoryInfo.euRestrictions && (
                    <div>
                      <span className="text-sm text-slate-400 block mb-1">
                        EU Restrictions
                      </span>
                      <p className="text-sm text-slate-300">
                        {ingredient.regulatoryInfo.euRestrictions}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Ingredients */}
        {relatedIngredients.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              Similar Ingredients ({ingredient.function})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedIngredients.map(ing => (
                <IngredientCard key={ing.id} ingredient={ing} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
