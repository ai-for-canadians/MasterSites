import Link from 'next/link';
import type { Substance } from '@/types';
import { FlaskConical, AlertTriangle, ShieldCheck } from 'lucide-react';

interface SubstanceCardProps {
  substance: Substance;
}

const riskColors: Record<string, string> = {
  'very low': 'text-green-400 border-green-500/30 bg-green-500/10',
  low: 'text-green-400 border-green-500/30 bg-green-500/10',
  moderate: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10',
  high: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
  'very high': 'text-red-400 border-red-500/30 bg-red-500/10',
  extreme: 'text-red-400 border-red-500/30 bg-red-500/10',
  unknown: 'text-slate-400 border-slate-500/30 bg-slate-500/10',
  none: 'text-green-400 border-green-500/30 bg-green-500/10',
};

const categoryColors = {
  psychedelic: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  dissociative: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  empathogen: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
  nootropic: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  stimulant: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  depressant: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  cannabinoid: 'bg-green-500/10 text-green-400 border-green-500/30',
  research_chemical: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
};

const evidenceColors = {
  A: 'text-green-400',
  B: 'text-cyan-400',
  C: 'text-yellow-400',
  D: 'text-orange-400',
  F: 'text-red-400',
};

export function SubstanceCard({ substance }: SubstanceCardProps) {
  const riskColor = riskColors[substance.safetyProfile.riskLevel];
  const categoryColor = categoryColors[substance.category];
  const evidenceColor = evidenceColors[substance.safetyProfile.evidenceRating];

  return (
    <Link
      href={`/substances/${substance.slug}`}
      className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1 group-hover:text-purple-400 transition-colors">
            {substance.name}
          </h3>
          {substance.aliases.length > 0 && (
            <p className="text-sm text-slate-500">
              {substance.aliases.slice(0, 2).join(', ')}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded border ${categoryColor}`}
          >
            {substance.category.replace('_', ' ')}
          </span>
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
        {substance.summary}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {substance.safetyProfile.riskLevel === 'low' ? (
              <ShieldCheck className="w-4 h-4 text-green-400" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
            )}
            <span className={`text-xs font-medium ${riskColor.split(' ')[0]}`}>
              {substance.safetyProfile.riskLevel}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FlaskConical className="w-4 h-4 text-slate-500" />
            <span className={`text-xs font-semibold ${evidenceColor}`}>
              Grade {substance.safetyProfile.evidenceRating}
            </span>
          </div>
        </div>
        <span className="text-xs text-purple-400 group-hover:translate-x-1 transition-transform">
          View details →
        </span>
      </div>
    </Link>
  );
}
