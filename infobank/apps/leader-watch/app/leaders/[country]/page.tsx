import { notFound } from 'next/navigation';
import Link from 'next/link';
import { countries, getCountryById } from '@/lib/data/countries';
import { ArrowLeft, TrendingUp, TrendingDown, Minus, ExternalLink, Calendar, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface PageProps {
  params: {
    country: string;
  };
}

export async function generateStaticParams() {
  return countries.map((country) => ({
    country: country.id,
  }));
}

function getScoreColor(score: number): string {
  if (score >= 75) return 'text-emerald-400';
  if (score >= 60) return 'text-blue-400';
  if (score >= 45) return 'text-amber-400';
  if (score >= 30) return 'text-orange-400';
  return 'text-red-400';
}

function getScoreBg(score: number): string {
  if (score >= 75) return 'bg-emerald-500/20';
  if (score >= 60) return 'bg-blue-500/20';
  if (score >= 45) return 'bg-amber-500/20';
  if (score >= 30) return 'bg-orange-500/20';
  return 'bg-red-500/20';
}

function getTrendIcon(trend: string) {
  switch (trend) {
    case 'improving':
      return <TrendingUp className="w-5 h-5 text-emerald-400" />;
    case 'declining':
      return <TrendingDown className="w-5 h-5 text-red-400" />;
    default:
      return <Minus className="w-5 h-5 text-slate-400" />;
  }
}

function getImpactIcon(impact: string) {
  switch (impact) {
    case 'positive':
      return <CheckCircle className="w-5 h-5 text-emerald-400" />;
    case 'negative':
      return <XCircle className="w-5 h-5 text-red-400" />;
    default:
      return <AlertTriangle className="w-5 h-5 text-amber-400" />;
  }
}

const scoreLabels: Record<string, { label: string; description: string }> = {
  democracy: { label: 'Democracy', description: 'V-Dem Liberal Democracy Index + Freedom House' },
  corruption: { label: 'Anti-Corruption', description: 'Transparency International CPI (inverted)' },
  equality: { label: 'Equality', description: 'Gini coefficient (inverted) + wealth distribution' },
  humanDevelopment: { label: 'Human Development', description: 'UNDP HDI scaled to 100' },
  pressFreedom: { label: 'Press Freedom', description: 'Reporters Sans Frontières Index' },
  climateAction: { label: 'Climate Action', description: 'Climate Action Tracker rating' },
  ruleOfLaw: { label: 'Rule of Law', description: 'World Bank Governance Indicators' },
};

export default function CountryPage({ params }: PageProps) {
  const country = getCountryById(params.country);

  if (!country) {
    notFound();
  }

  const scoreEntries = Object.entries(country.scores).filter(([key]) => key !== 'overall');

  return (
    <div className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Leaderboard
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
          <div className="text-6xl">{country.flag}</div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-50">
                {country.name}
              </h1>
              <span className="text-sm bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-400">
                #{country.rank} of 19
              </span>
            </div>
            <p className="text-slate-400 mb-4">{country.region} • {country.subregion}</p>
            <div className="flex items-center gap-4">
              <div className={`text-5xl font-bold ${getScoreColor(country.scores.overall)}`}>
                {country.scores.overall}
              </div>
              <div>
                <div className="text-sm text-slate-400">Overall Score</div>
                <div className="flex items-center gap-2">
                  {getTrendIcon(country.trend)}
                  <span className="text-sm text-slate-300 capitalize">{country.trend}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trend Explanation */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-slate-300">
            <strong>Trend:</strong> {country.trendReason}
          </p>
        </div>

        {/* Current Leader */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Current Leader</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-50 mb-1">
                  {country.currentLeader.name}
                </h3>
                <p className="text-amber-400 font-medium mb-2">{country.currentLeader.title}</p>
                <p className="text-slate-400 text-sm mb-3">
                  {country.currentLeader.party} • {country.currentLeader.ideology}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4" />
                  In office since {new Date(country.currentLeader.inOfficeSince).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-2">Previous Roles</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  {country.currentLeader.previousRoles.map((role, i) => (
                    <li key={i}>• {role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Score Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Score Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {scoreEntries.map(([key, value]) => {
              const info = scoreLabels[key];
              const source = country.scoreSources[key as keyof typeof country.scoreSources];
              return (
                <div
                  key={key}
                  className={`rounded-xl p-4 border ${getScoreBg(value)} border-slate-700`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-slate-100">{info?.label || key}</h3>
                      <p className="text-xs text-slate-400">{info?.description}</p>
                    </div>
                    <span className={`text-2xl font-bold ${getScoreColor(value)}`}>{value}</span>
                  </div>
                  {source && (
                    <div className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-700/50">
                      Source: {source.index} ({source.year})
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Highlights & Concerns */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Highlights
              </h3>
              <ul className="space-y-2">
                {country.highlights.map((item, i) => (
                  <li key={i} className="text-sm text-slate-300">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Concerns
              </h3>
              <ul className="space-y-2">
                {country.concerns.map((item, i) => (
                  <li key={i} className="text-sm text-slate-300">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Key Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Actions</h2>
          <div className="space-y-4">
            {country.currentLeader.keyActions.map((action) => (
              <div
                key={action.id}
                className={`rounded-xl p-5 border ${
                  action.impact === 'positive'
                    ? 'bg-emerald-500/5 border-emerald-500/20'
                    : action.impact === 'negative'
                    ? 'bg-red-500/5 border-red-500/20'
                    : 'bg-amber-500/5 border-amber-500/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{getImpactIcon(action.impact)}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-medium text-slate-100">{action.title}</h3>
                      <span className="text-xs text-slate-400 whitespace-nowrap">
                        {new Date(action.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 mb-3">{action.description}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="bg-slate-800 rounded px-2 py-1 capitalize">{action.category.replace('_', ' ')}</span>
                      <span className="bg-slate-800 rounded px-2 py-1 capitalize">{action.type.replace('_', ' ')}</span>
                      <span className={`font-medium ${action.impactScore > 0 ? 'text-emerald-400' : action.impactScore < 0 ? 'text-red-400' : 'text-slate-400'}`}>
                        Impact: {action.impactScore > 0 ? '+' : ''}{action.impactScore}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Sources Note */}
        <section>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h3 className="font-medium text-slate-200 mb-2">Data Transparency</h3>
            <p className="text-sm text-slate-400 mb-4">
              Scores for {country.name} are derived from multiple international indices. Each has inherent
              limitations and potential biases. Click methodology for full details on how scores are calculated.
            </p>
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium"
            >
              View Methodology
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
