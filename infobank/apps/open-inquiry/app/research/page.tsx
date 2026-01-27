import Link from 'next/link';
import { substances } from '@/lib/data/substances';
import { FlaskConical, ExternalLink, Calendar, Users } from 'lucide-react';

export default function ResearchPage() {
  // Collect all studies from substances
  const allStudies = substances
    .flatMap((substance) =>
      substance.sources.map((source) => ({
        ...source,
        substanceName: substance.name,
        substanceSlug: substance.slug,
        substanceCategory: substance.category,
      }))
    )
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0)); // Sort by year, newest first

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Library</h1>
          <p className="text-xl text-slate-400">
            Peer-reviewed studies and academic research on psychoactive substances
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <FlaskConical className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-3xl font-bold text-slate-50 mb-1">
              {allStudies.length}
            </p>
            <p className="text-slate-400">Research Studies</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-3xl font-bold text-slate-50 mb-1">
              {substances.length}
            </p>
            <p className="text-slate-400">Substances Covered</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <Calendar className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-3xl font-bold text-slate-50 mb-1">
              {new Date().getFullYear()}
            </p>
            <p className="text-slate-400">Continuously Updated</p>
          </div>
        </div>

        {/* About the Library */}
        <div className="mb-12 bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3 text-purple-400">
            About This Library
          </h2>
          <p className="text-purple-200 mb-4">
            This library collects peer-reviewed research on psychoactive substances
            from leading academic journals and research institutions. All studies are
            from reputable sources including major universities, clinical trial
            registries, and established medical journals.
          </p>
          <p className="text-purple-200">
            We prioritize randomized controlled trials (RCTs), systematic reviews, and
            meta-analyses, while also including high-quality observational and
            mechanistic studies.
          </p>
        </div>

        {/* Studies List */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Studies</h2>

          <div className="space-y-4">
            {allStudies.map((study, i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2 group"
                    >
                      {study.title}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <p className="text-sm text-slate-400 mt-1">
                      {study.authors} • {study.year}
                    </p>
                  </div>
                  <Link
                    href={`/substances/${study.substanceSlug}`}
                    className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm rounded border border-slate-600 transition-colors"
                  >
                    {study.substanceName}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 bg-slate-800 border border-slate-700 rounded-lg p-6">
          <p className="text-slate-400 text-sm">
            <strong className="text-slate-300">Note:</strong> This library is
            continuously updated as new research emerges. Studies are selected based
            on methodological quality, relevance, and contribution to understanding
            substance effects and safety. For the most comprehensive view, visit
            individual substance pages.
          </p>
        </div>
      </div>
    </div>
  );
}
