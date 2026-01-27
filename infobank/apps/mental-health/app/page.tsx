import Link from 'next/link';
import { Hero } from '@/components/home/Hero';
import { conditions } from '@/lib/data/conditions';
import { ArrowRight, Brain, User, AlertCircle } from 'lucide-react';

export default function HomePage() {
  const commonConditions = conditions.slice(0, 4);

  return (
    <div className="w-full">
      <Hero />

      {/* Quick Access Grid */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions" className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-teal-500 transition-all text-center group">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-500 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Conditions Index</h3>
              <p className="text-slate-400">Learn about symptoms, causes, and standard treatments for common diagnoses.</p>
            </Link>

            <Link href="/providers" className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-teal-500 transition-all text-center group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Therapist vs Psychiatrist</h3>
              <p className="text-slate-400">Understand the different types of mental health professionals and who can help you.</p>
            </Link>

            <Link href="/about" className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-teal-500 transition-all text-center group">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">Crisis Resources</h3>
              <p className="text-slate-400">Immediate steps to take if you or someone you know is in crisis.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Common conditions */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-50">Common Conditions</h2>
              <p className="text-slate-400">Understanding mental health starts here</p>
            </div>
            <Link
              href="/conditions"
              className="hidden sm:flex items-center gap-2 text-teal-500 hover:text-teal-400 font-medium transition-colors"
            >
              View full index
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {commonConditions.map(condition => (
              <Link
                key={condition.id}
                href={`/conditions/${condition.slug}`}
                className="flex flex-col p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-slate-600 transition-all hover:bg-slate-750 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 bg-slate-900 border border-slate-700 px-2 py-1 rounded">
                    {condition.category}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-teal-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-50 mb-2">{condition.name}</h3>
                <p className="text-slate-400 line-clamp-2 mb-4">{condition.summary}</p>
                <div className="mt-auto text-sm text-teal-500 font-medium">Read more</div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-400 font-medium transition-colors"
            >
              View full index
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-teal-500/10 to-slate-800 border border-teal-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-50">
            Emergency Help
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            If you or someone you know is struggling or in crisis, help is available.
            You can call or text 988 or chat at 988lifeline.org (USA).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:988"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg transition-colors"
            >
              Call 988
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
