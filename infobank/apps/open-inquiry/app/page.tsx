import Link from 'next/link';
import { FlaskConical, Search, Database, Shield, ArrowRight } from 'lucide-react';
import { categories } from '@/lib/data/categories';
import { substances } from '@/lib/data/substances';

export default function HomePage() {
  const featuredSubstances = substances.slice(0, 6);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-slate-900 to-slate-900" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
              <FlaskConical className="w-4 h-4" />
              <span>Evidence-based. Independent. Harm reduction focused.</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Evidence on substances
              <span className="text-purple-400"> science forgot</span>
            </h1>

            <p className="text-xl text-slate-400 mb-8">
              Rigorous research summaries on psychedelics, nootropics, and novel
              compounds. No hype. No fear. Just data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/substances"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
              >
                Browse Substances
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-50 font-semibold rounded-lg border border-slate-700 transition-colors"
              >
                Harm Reduction Guides
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <div>
                <span className="text-2xl font-bold text-purple-400">
                  {substances.length}
                </span>{' '}
                substances
              </div>
              <div>•</div>
              <div>
                <span className="text-2xl font-bold text-purple-400">100%</span>{' '}
                independent
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-lg mb-4">
                <Database className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Database</h3>
              <p className="text-slate-400">
                Detailed information on effects, dosing, interactions, and safety for
                each substance.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-lg mb-4">
                <Search className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Research Summaries</h3>
              <p className="text-slate-400">
                Plain-language summaries of clinical research with full citations.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-lg mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Harm Reduction</h3>
              <p className="text-slate-400">
                Safety information, testing guides, and interaction warnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
            <p className="text-slate-400">Explore different classes of substances</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{category.description}</p>
                <span className="text-xs text-slate-500">
                  {category.substanceCount} substances
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-purple-500/10 to-slate-800 border border-purple-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            New to this? Start with harm reduction
          </h2>
          <p className="text-slate-400 mb-8">
            Learn safety fundamentals, testing protocols, and how to make informed
            decisions.
          </p>
          <Link
            href="/guides"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
          >
            View Guides
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
