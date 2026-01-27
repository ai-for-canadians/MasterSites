import Link from 'next/link';
import { Country } from '@/types';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface LeaderboardTableProps {
    countries: Country[];
}

export function LeaderboardTable({ countries }: LeaderboardTableProps) {
    // Sort by composite score desc
    const sorted = [...countries].sort((a, b) => b.scores.composite - a.scores.composite);

    return (
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
            <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-900 text-xs uppercase font-semibold text-slate-400">
                    <tr>
                        <th className="px-6 py-4">Rank</th>
                        <th className="px-6 py-4">Country</th>
                        <th className="px-6 py-4 text-center">Score</th>
                        <th className="px-6 py-4 text-center">Tier</th>
                        <th className="px-6 py-4 text-center">Trend</th>
                        <th className="px-6 py-4 text-right">Democracy</th>
                        <th className="px-6 py-4 text-right">Economy</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    {sorted.map((country, index) => (
                        <tr key={country.id} className="hover:bg-slate-800/50 transition-colors group">
                            <td className="px-6 py-4 font-mono text-slate-500">
                                #{index + 1}
                            </td>
                            <td className="px-6 py-4">
                                <Link href={`/country/${country.code}`} className="flex items-center gap-3">
                                    <span className="text-2xl">{country.flag}</span>
                                    <div>
                                        <div className="font-semibold text-white group-hover:text-sky-400 transition-colors">
                                            {country.name}
                                        </div>
                                        <div className="text-xs text-slate-500">{country.region}</div>
                                    </div>
                                </Link>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-700 font-bold text-lg text-white">
                                    {country.scores.composite}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${country.scores.tier === 1 ? 'bg-emerald-500/10 text-emerald-400' :
                                        country.scores.tier === 2 ? 'bg-blue-500/10 text-blue-400' :
                                            country.scores.tier === 3 ? 'bg-orange-500/10 text-orange-400' :
                                                'bg-red-500/10 text-red-400'
                                    }`}>
                                    Tier {country.scores.tier}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                                {country.scores.trend === 'up' && <ArrowUp className="w-5 h-5 text-emerald-500 mx-auto" />}
                                {country.scores.trend === 'down' && <ArrowDown className="w-5 h-5 text-red-500 mx-auto" />}
                                {country.scores.trend === 'stable' && <Minus className="w-5 h-5 text-slate-500 mx-auto" />}
                                {country.scores.trend === 'volatile' && <span className="text-xl mx-auto">⚠️</span>}
                            </td>
                            <td className="px-6 py-4 text-right font-mono text-slate-300">
                                {country.scores.democracy}
                            </td>
                            <td className="px-6 py-4 text-right font-mono text-slate-300">
                                {country.scores.development}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
