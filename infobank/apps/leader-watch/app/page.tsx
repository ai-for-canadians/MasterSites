import Link from 'next/link';
import { countries } from '@/lib/data/countries';
import { TrendingUp, TrendingDown, Minus, ArrowRight, AlertTriangle, Award, Shield } from 'lucide-react';

function getTrendIcon(trend: string) {
  switch (trend) {
    case 'improving':
      return <TrendingUp className="w-4 h-4 text-emerald-400" />;
    case 'declining':
      return <TrendingDown className="w-4 h-4 text-red-400" />;
    default:
      return <Minus className="w-4 h-4 text-slate-400" />;
  }
}

function getScoreColor(score: number): string {
  if (score >= 75) return 'text-emerald-400';
  if (score >= 60) return 'text-blue-400';
  if (score >= 45) return 'text-amber-400';
  if (score >= 30) return 'text-orange-400';
  return 'text-red-400';
}

function getScoreBgColor(score: number): string {
  if (score >= 75) return 'bg-emerald-500/20 border-emerald-500/30';
  if (score >= 60) return 'bg-blue-500/20 border-blue-500/30';
  if (score >= 45) return 'bg-amber-500/20 border-amber-500/30';
  if (score >= 30) return 'bg-orange-500/20 border-orange-500/30';
  return 'bg-red-500/20 border-red-500/30';
}

function getTierLabel(rank: number): { label: string; color: string; icon: React.ReactNode } {
  if (rank <= 7) return { label: 'Strong Institutions', color: 'text-emerald-400', icon: <Award className="w-4 h-4" /> };
  if (rank <= 12) return { label: 'Mixed Record', color: 'text-amber-400', icon: <AlertTriangle className="w-4 h-4" /> };
  if (rank <= 16) return { label: 'Concerning Trends', color: 'text-orange-400', icon: <AlertTriangle className="w-4 h-4" /> };
  return { label: 'Authoritarian', color: 'text-red-400', icon: <Shield className="w-4 h-4" /> };
}

export default function HomePage() {
  const sortedCountries = [...countries].sort((a, b) => a.rank - b.rank);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-800/50 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Global Leadership <span className="text-amber-400">Scorecard</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Tracking G20 leaders on democracy, equality, transparency, and climate action.
            Who is advancing prosperity? Who is concentrating power?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2">
              <span className="text-slate-400">Data from:</span>{' '}
              <span className="text-slate-200">V-Dem, TI, Freedom House, UNDP, RSF</span>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2">
              <span className="text-slate-400">Last updated:</span>{' '}
              <span className="text-slate-200">January 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <h3 className="font-semibold text-emerald-400">Improving</h3>
              </div>
              <div className="space-y-2">
                {countries.filter(c => c.trend === 'improving').slice(0, 3).map(c => (
                  <div key={c.id} className="text-sm">
                    <span className="mr-2">{c.flag}</span>
                    <span className="text-slate-300">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown className="w-5 h-5 text-red-400" />
                <h3 className="font-semibold text-red-400">Declining</h3>
              </div>
              <div className="space-y-2">
                {countries.filter(c => c.trend === 'declining').slice(0, 3).map(c => (
                  <div key={c.id} className="text-sm">
                    <span className="mr-2">{c.flag}</span>
                    <span className="text-slate-300">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-amber-400">Watch List</h3>
              </div>
              <p className="text-sm text-slate-300">
                Countries with strong institutions facing democratic stress tests.
              </p>
              <div className="mt-2 text-sm">
                <span className="mr-2">🇺🇸</span>
                <span className="text-slate-300">USA</span>
                <span className="mx-2">•</span>
                <span className="mr-2">🇰🇷</span>
                <span className="text-slate-300">S. Korea</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">G20 Leaderboard</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 text-left text-sm text-slate-400">
                  <th className="py-3 px-4 font-medium">Rank</th>
                  <th className="py-3 px-4 font-medium">Country</th>
                  <th className="py-3 px-4 font-medium">Leader</th>
                  <th className="py-3 px-4 font-medium text-center">Overall</th>
                  <th className="py-3 px-4 font-medium text-center hidden md:table-cell">Democracy</th>
                  <th className="py-3 px-4 font-medium text-center hidden md:table-cell">Corruption</th>
                  <th className="py-3 px-4 font-medium text-center hidden lg:table-cell">Equality</th>
                  <th className="py-3 px-4 font-medium text-center hidden lg:table-cell">Press</th>
                  <th className="py-3 px-4 font-medium text-center">Trend</th>
                  <th className="py-3 px-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {sortedCountries.map((country, index) => {
                  const tier = getTierLabel(country.rank);
                  const isNewTier = index === 0 || getTierLabel(sortedCountries[index - 1].rank).label !== tier.label;

                  return (
                    <>
                      {isNewTier && (
                        <tr key={`tier-${tier.label}`} className="bg-slate-800/30">
                          <td colSpan={10} className="py-2 px-4">
                            <div className={`flex items-center gap-2 text-sm font-medium ${tier.color}`}>
                              {tier.icon}
                              {tier.label}
                            </div>
                          </td>
                        </tr>
                      )}
                      <tr
                        key={country.id}
                        className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <span className="text-lg font-bold text-slate-300">#{country.rank}</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{country.flag}</span>
                            <div>
                              <div className="font-medium text-slate-100">{country.name}</div>
                              <div className="text-xs text-slate-400">{country.region}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-sm">
                            <div className="text-slate-200">{country.currentLeader.name}</div>
                            <div className="text-xs text-slate-400">{country.currentLeader.party}</div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border font-bold text-lg ${getScoreBgColor(country.scores.overall)} ${getScoreColor(country.scores.overall)}`}>
                            {country.scores.overall}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center hidden md:table-cell">
                          <span className={getScoreColor(country.scores.democracy)}>{country.scores.democracy}</span>
                        </td>
                        <td className="py-4 px-4 text-center hidden md:table-cell">
                          <span className={getScoreColor(country.scores.corruption)}>{country.scores.corruption}</span>
                        </td>
                        <td className="py-4 px-4 text-center hidden lg:table-cell">
                          <span className={getScoreColor(country.scores.equality)}>{country.scores.equality}</span>
                        </td>
                        <td className="py-4 px-4 text-center hidden lg:table-cell">
                          <span className={getScoreColor(country.scores.pressFreedom)}>{country.scores.pressFreedom}</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            {getTrendIcon(country.trend)}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Link
                            href={`/leaders/${country.id}`}
                            className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-sm font-medium"
                          >
                            Details
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Methodology Note */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
            <h2 className="text-xl font-bold mb-4">About This Data</h2>
            <p className="text-slate-300 mb-4">
              Scores are composite measures derived from established international indices including
              V-Dem (democracy), Transparency International (corruption), Freedom House, UNDP (human development),
              Reporters Sans Frontières (press freedom), and Climate Action Tracker.
            </p>
            <p className="text-slate-400 text-sm mb-4">
              <strong>Important limitations:</strong> Each source index has inherent biases and methodological
              constraints. Western-centric definitions of democracy, perception-based corruption measures,
              and lag time in data collection all affect accuracy.
            </p>
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium"
            >
              Read full methodology
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
