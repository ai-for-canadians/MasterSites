import { notFound } from 'next/navigation';
import Link from 'next/link';
import { substances, getSubstanceBySlug } from '@/lib/data/substances';
import { getCategoryById } from '@/lib/data/categories';
import {
  FlaskConical,
  AlertTriangle,
  ShieldCheck,
  Clock,
  Pill,
  Activity,
  Shield,
  AlertCircle,
  BookOpen,
  TestTube,
  ArrowLeft,
  Scale,
  Gavel,
} from 'lucide-react';

export async function generateStaticParams() {
  return substances.map((substance) => ({
    slug: substance.slug,
  }));
}

export default function SubstancePage({
  params,
}: {
  params: { slug: string };
}) {
  const substance = getSubstanceBySlug(params.slug);

  if (!substance) {
    notFound();
  }

  const category = getCategoryById(substance.category);

  const riskColors: Record<string, string> = {
    'very low': 'text-green-400 bg-green-500/10 border-green-500/30',
    low: 'text-green-400 bg-green-500/10 border-green-500/30',
    moderate: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    high: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    'very high': 'text-red-400 bg-red-500/10 border-red-500/30',
    extreme: 'text-red-400 bg-red-500/10 border-red-500/30',
    unknown: 'text-slate-400 bg-slate-500/10 border-slate-500/30',
    none: 'text-green-400 bg-green-500/10 border-green-500/30',
  };

  const evidenceColors = {
    A: 'text-green-400 bg-green-500/10 border-green-500/30',
    B: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    C: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    D: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    F: 'text-red-400 bg-red-500/10 border-red-500/30',
  };

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Link
          href="/substances"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all substances
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {substance.name}
              </h1>
              {substance.aliases.length > 0 && (
                <p className="text-lg text-slate-400">
                  Also known as: {substance.aliases.join(', ')}
                </p>
              )}
            </div>
            {category && (
              <span
                className="px-4 py-2 rounded-lg text-sm font-semibold border"
                style={{
                  backgroundColor: `${category.color}20`,
                  borderColor: `${category.color}40`,
                  color: category.color,
                }}
              >
                {category.name}
              </span>
            )}
          </div>

          <p className="text-xl text-slate-300 mb-6">{substance.summary}</p>

          {/* Safety Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className={`p-4 rounded-lg border ${
                riskColors[substance.safetyProfile.riskLevel]
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {substance.safetyProfile.riskLevel === 'low' ? (
                  <ShieldCheck className="w-5 h-5" />
                ) : (
                  <AlertTriangle className="w-5 h-5" />
                )}
                <span className="text-sm font-medium">Overall Risk</span>
              </div>
              <p className="text-lg font-semibold capitalize">
                {substance.safetyProfile.riskLevel}
              </p>
            </div>

            <div
              className={`p-4 rounded-lg border ${
                evidenceColors[substance.safetyProfile.evidenceRating]
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <FlaskConical className="w-5 h-5" />
                <span className="text-sm font-medium">Evidence</span>
              </div>
              <p className="text-lg font-semibold">
                Grade {substance.safetyProfile.evidenceRating}
              </p>
            </div>

            <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/50">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-400">Addiction</span>
              </div>
              <p className="text-lg font-semibold text-slate-300 capitalize">
                {substance.safetyProfile.addictionPotential}
              </p>
            </div>

            <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/50">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-400">Duration</span>
              </div>
              <p className="text-lg font-semibold text-slate-300">
                {substance.duration.total}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <section className="mb-12 bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-slate-300 leading-relaxed">{substance.description}</p>
        </section>

        {/* Effects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Activity className="w-6 h-6 text-purple-400" />
            Effects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Positive */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-400">
                Positive
              </h3>
              <ul className="space-y-3">
                {substance.effects.positive.map((effect, i) => (
                  <li key={i}>
                    <p className="font-medium text-slate-200">{effect.name}</p>
                    <p className="text-sm text-slate-400">{effect.description}</p>
                    <span className="text-xs text-slate-500 capitalize">
                      {effect.likelihood}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Neutral */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-400">
                Neutral
              </h3>
              <ul className="space-y-3">
                {substance.effects.neutral.map((effect, i) => (
                  <li key={i}>
                    <p className="font-medium text-slate-200">{effect.name}</p>
                    <p className="text-sm text-slate-400">{effect.description}</p>
                    <span className="text-xs text-slate-500 capitalize">
                      {effect.likelihood}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Negative */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-400">Negative</h3>
              <ul className="space-y-3">
                {substance.effects.negative.map((effect, i) => (
                  <li key={i}>
                    <p className="font-medium text-slate-200">{effect.name}</p>
                    <p className="text-sm text-slate-400">{effect.description}</p>
                    <span className="text-xs text-slate-500 capitalize">
                      {effect.likelihood}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Dosage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Pill className="w-6 h-6 text-purple-400" />
            Dosage Information
          </h2>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="mb-4">
              <p className="text-sm text-slate-400 mb-1">
                Route: {substance.dosage.route}
              </p>
              <p className="text-sm text-slate-400">
                Units: {substance.dosage.units}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-700">
                <span className="font-medium">Threshold</span>
                <span className="text-slate-300">{substance.dosage.threshold}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-700">
                <span className="font-medium">Light</span>
                <span className="text-slate-300">{substance.dosage.light}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-700">
                <span className="font-medium">Common</span>
                <span className="text-slate-300">{substance.dosage.common}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-700">
                <span className="font-medium">Strong</span>
                <span className="text-slate-300">{substance.dosage.strong}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-700">
                <span className="font-medium">Heavy</span>
                <span className="text-slate-300">{substance.dosage.heavy}</span>
              </div>
            </div>

            {substance.dosage.notes && (
              <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded">
                <p className="text-sm text-amber-200">
                  <strong>Important:</strong> {substance.dosage.notes}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Duration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-400" />
            Duration Timeline
          </h2>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-700">
                <span className="font-medium">Onset</span>
                <span className="text-slate-300">{substance.duration.onset}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-700">
                <span className="font-medium">Come Up</span>
                <span className="text-slate-300">{substance.duration.comeUp}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-700">
                <span className="font-medium">Peak</span>
                <span className="text-slate-300">{substance.duration.peak}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-700">
                <span className="font-medium">Offset</span>
                <span className="text-slate-300">{substance.duration.offset}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-700">
                <span className="font-medium">After Effects</span>
                <span className="text-slate-300">
                  {substance.duration.afterEffects}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-500/10 border border-purple-500/30 rounded">
                <span className="font-semibold text-purple-400">Total Duration</span>
                <span className="text-purple-300 font-semibold">
                  {substance.duration.total}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-purple-400" />
            Interactions
          </h2>

          <div className="space-y-4">
            {substance.dangerousInteractions &&
              substance.dangerousInteractions.length > 0 && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-red-400 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Dangerous Interactions
                  </h3>
                  <p className="text-red-200 mb-3">
                    These combinations may be life-threatening. Avoid completely.
                  </p>
                  <ul className="list-disc list-inside text-red-200 space-y-1">
                    {substance.dangerousInteractions.map((interaction, i) => (
                      <li key={i} className="capitalize">
                        {interaction}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {substance.unsafeInteractions &&
              substance.unsafeInteractions.length > 0 && (
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-orange-400">
                    Unsafe Interactions
                  </h3>
                  <p className="text-orange-200 mb-3">
                    These combinations have increased risks and should be avoided.
                  </p>
                  <ul className="list-disc list-inside text-orange-200 space-y-1">
                    {substance.unsafeInteractions.map((interaction, i) => (
                      <li key={i} className="capitalize">
                        {interaction}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {substance.cautionInteractions &&
              substance.cautionInteractions.length > 0 && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-400">
                    Caution Required
                  </h3>
                  <p className="text-yellow-200 mb-3">
                    Use extreme caution with these combinations. Research thoroughly
                    first.
                  </p>
                  <ul className="list-disc list-inside text-yellow-200 space-y-1">
                    {substance.cautionInteractions.map((interaction, i) => (
                      <li key={i} className="capitalize">
                        {interaction}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </section>

        {/* Harm Reduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-400" />
            Harm Reduction
          </h2>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <ul className="space-y-3">
              {substance.harmReduction.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{tip}</span>
                </li>
              ))}
            </ul>

            {substance.testingInfo && (
              <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded">
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-purple-400">
                  <TestTube className="w-5 h-5" />
                  Testing Information
                </h3>
                <p className="text-purple-200">{substance.testingInfo}</p>
              </div>
            )}
          </div>
        </section>

        {/* Research Summary */}
        {substance.researchSummary && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FlaskConical className="w-6 h-6 text-purple-400" />
              Research Summary
            </h2>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed mb-6">
                {substance.researchSummary}
              </p>

              {substance.therapeuticPotential && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2 text-purple-400">
                    Therapeutic Potential
                  </h3>
                  <p className="text-slate-300">{substance.therapeuticPotential}</p>
                </div>
              )}

              {substance.sources && substance.sources.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    Academic Sources
                  </h3>
                  <ul className="space-y-3">
                    {substance.sources.map((source, i) => (
                      <li
                        key={i}
                        className="p-4 bg-slate-900 border border-slate-700 rounded"
                      >
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 font-medium"
                        >
                          {source.title}
                        </a>
                        <p className="text-sm text-slate-400 mt-1">
                          {source.authors} ({source.year})
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Legal Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Gavel className="w-6 h-6 text-purple-400" />
            Legal Status
          </h2>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-slate-900 rounded border border-slate-700">
                <p className="text-sm text-slate-400 mb-1">Canada</p>
                <p className="font-semibold text-slate-200 capitalize">
                  {substance.legalStatus.canada}
                </p>
              </div>
              <div className="p-4 bg-slate-900 rounded border border-slate-700">
                <p className="text-sm text-slate-400 mb-1">United States</p>
                <p className="font-semibold text-slate-200 capitalize">
                  {substance.legalStatus.usa}
                </p>
              </div>
              <div className="p-4 bg-slate-900 rounded border border-slate-700">
                <p className="text-sm text-slate-400 mb-1">United Kingdom</p>
                <p className="font-semibold text-slate-200 capitalize">
                  {substance.legalStatus.uk}
                </p>
              </div>
            </div>

            {substance.legalStatus.notes && (
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded">
                <p className="text-sm text-amber-200">
                  <strong>Note:</strong> {substance.legalStatus.notes}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
          <p className="text-sm text-amber-200">
            <strong>Disclaimer:</strong> This information is for educational
            purposes only and is not medical advice. Always research local laws and
            consult healthcare professionals before making decisions about substance
            use. Last updated: {substance.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
}
