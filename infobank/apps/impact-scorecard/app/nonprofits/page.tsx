import Link from 'next/link';
import { Heart, ExternalLink } from 'lucide-react';
import { getNonprofits } from '@/lib/data/organizations';

export const metadata = {
    title: 'Nonprofit Leaderboard | Impact Scorecard',
    description: 'Ranked nonprofits based on transparency, program spending, and measurable impact.',
};

const gradeColors: Record<string, string> = {
    'A+': 'bg-emerald-500 text-white',
    'A': 'bg-emerald-500/80 text-white',
    'A-': 'bg-emerald-500/60 text-white',
    'B+': 'bg-blue-500 text-white',
    'B': 'bg-blue-500/80 text-white',
    'B-': 'bg-blue-500/60 text-white',
    'C+': 'bg-amber-500 text-white',
    'C': 'bg-amber-500/80 text-white',
    'C-': 'bg-amber-500/60 text-white',
    'D': 'bg-red-500/80 text-white',
    'F': 'bg-red-500 text-white',
};

export default function NonprofitsPage() {
    const nonprofits = getNonprofits();

    return (
        <div className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-8 h-8 text-rose-400" />
                    <h1 className="text-3xl font-bold text-slate-50">Nonprofit Leaderboard</h1>
                </div>
                <p className="text-slate-400 mb-8 max-w-2xl">
                    Ranked by overall impact score combining transparency, program efficiency, and outcome reporting.
                </p>

                {/* Leaderboard Table */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700 text-left">
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Rank</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Organization</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Cause</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400 text-center">Grade</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400 text-center">Score</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400 text-center">Program %</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {nonprofits.map((org, i) => (
                                    <tr key={org.id} className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className="text-2xl font-bold text-slate-600">#{i + 1}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={`/org/${org.slug}`} className="group">
                                                <div className="font-semibold text-slate-50 group-hover:text-emerald-400 transition-colors">
                                                    {org.name}
                                                </div>
                                                <div className="text-sm text-slate-500">{org.location}</div>
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-slate-400 capitalize">{org.causeArea}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-2.5 py-1 rounded-lg text-sm font-bold ${gradeColors[org.overallGrade]}`}>
                                                {org.overallGrade}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-slate-50 font-medium">{org.overallScore}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-slate-400">
                                                {org.nonprofitMetrics?.programExpenseRatio}%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link
                                                href={`/org/${org.slug}`}
                                                className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
                                            >
                                                Details →
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Methodology Note */}
                <div className="mt-8 p-6 bg-slate-800/30 rounded-xl border border-slate-700">
                    <h3 className="font-semibold text-slate-50 mb-2">How We Rate Nonprofits</h3>
                    <p className="text-sm text-slate-400">
                        Our overall score combines: program expense ratio (30%), financial transparency (20%),
                        impact measurement quality (20%), outcome reporting (15%), and leadership compensation reasonableness (15%).
                        Third-party ratings from Charity Navigator and GiveWell are incorporated where available.
                    </p>
                </div>
            </div>
        </div>
    );
}
