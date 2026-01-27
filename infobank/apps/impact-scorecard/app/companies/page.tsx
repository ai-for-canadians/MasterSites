import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { getCompanies } from '@/lib/data/organizations';

export const metadata = {
    title: 'Company Leaderboard | Impact Scorecard',
    description: 'B Corps and public companies ranked by stakeholder value, not just shareholder returns.',
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

const typeLabels: Record<string, string> = {
    'bcorp': 'B Corp',
    'public-company': 'Public',
    'private-company': 'Private',
};

export default function CompaniesPage() {
    const companies = getCompanies();

    return (
        <div className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-8 h-8 text-blue-400" />
                    <h1 className="text-3xl font-bold text-slate-50">Company Leaderboard</h1>
                </div>
                <p className="text-slate-400 mb-8 max-w-2xl">
                    B Corps and public companies ranked by stakeholder value—employees, environment, community, and governance.
                </p>

                {/* Leaderboard Table */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700 text-left">
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Rank</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Company</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Type</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Industry</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400 text-center">Grade</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400 text-center">Score</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400 text-center">B Corp</th>
                                    <th className="px-6 py-4 text-sm font-medium text-slate-400"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {companies.map((org, i) => (
                                    <tr key={org.id} className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className="text-2xl font-bold text-slate-600">#{i + 1}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={`/org/${org.slug}`} className="group">
                                                <div className="font-semibold text-slate-50 group-hover:text-blue-400 transition-colors">
                                                    {org.name}
                                                </div>
                                                <div className="text-sm text-slate-500">{org.location}</div>
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-2 py-1 rounded ${org.type === 'bcorp' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-400'
                                                }`}>
                                                {typeLabels[org.type]}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-slate-400">{org.industry}</span>
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
                                            {org.companyMetrics?.bCorpScore ? (
                                                <span className="text-emerald-400 font-medium">{org.companyMetrics.bCorpScore}</span>
                                            ) : (
                                                <span className="text-slate-600">—</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link
                                                href={`/org/${org.slug}`}
                                                className="text-blue-400 hover:text-blue-300 text-sm font-medium"
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
                    <h3 className="font-semibold text-slate-50 mb-2">How We Rate Companies</h3>
                    <p className="text-sm text-slate-400">
                        Our overall score combines: environmental impact (25%), employee satisfaction (20%),
                        governance transparency (20%), community investment (15%), pay equity (10%), and supply chain ethics (10%).
                        B Corp certification scores are incorporated where applicable.
                    </p>
                </div>
            </div>
        </div>
    );
}
