import Link from 'next/link';
import { Hero } from '@/components/home/Hero';
import { BodyMap } from '@/components/home/BodyMap';
import { symptoms } from '@/lib/data/symptoms';
import { ArrowRight, AlertTriangle, Stethoscope } from 'lucide-react';

export default function HomePage() {
  // Sort by urgency or just take first few?
  // Let's show a mix or just the first few common ones.
  const commonSymptoms = symptoms.slice(0, 6);

  return (
    <div className="w-full">
      <Hero />

      <BodyMap />

      {/* Common Symptoms */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-50">Common Symptoms</h2>
              <p className="text-slate-400">Frequently searched conditions</p>
            </div>
            <Link
              href="/symptoms"
              className="hidden sm:flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
            >
              View all symptoms
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonSymptoms.map((symptom) => (
              <Link
                key={symptom.id}
                href={`/symptoms/${symptom.slug}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all hover:bg-slate-750"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-50 group-hover:text-amber-400 transition-colors">
                    {symptom.name}
                  </h3>
                  {symptom.urgency === 'emergency' && (
                    <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded font-medium flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Emergency
                    </span>
                  )}
                  {symptom.urgency === 'urgent' && (
                    <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded font-medium">
                      Urgent
                    </span>
                  )}
                  {symptom.urgency === 'self_care' && (
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded font-medium">
                      Self Care
                    </span>
                  )}
                </div>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {symptom.summary}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Stethoscope className="w-4 h-4" />
                    Medical Guidelines
                  </span>
                  <span>
                    Rating: <span className="text-emerald-400">{symptom.evidenceRating}</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/symptoms"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
            >
              View all symptoms
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Disclaimer Banner */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12">
          <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4 text-slate-50">
            This is for information only
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            BodySignals provides evidence-based information to help you understand your symptoms, but it does not replace professional medical advice. If you think you are having a medical emergency, call emergency services immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-50 font-semibold rounded-lg transition-colors"
            >
              Read our Methodology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
