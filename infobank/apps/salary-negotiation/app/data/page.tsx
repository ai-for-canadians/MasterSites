import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { salaryData } from '@/lib/data/strategies';

export default function DataPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Salary Data (Canada)</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Recent ranges for common roles. Use these as anchors.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="overflow-x-auto bg-slate-800 rounded-xl border border-slate-700">
                        <table className="min-w-full divide-y divide-slate-700">
                            <thead>
                                <tr className="bg-slate-700/50">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Level</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Min</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Max</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {salaryData.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-700/30 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{row.role}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.level === 'Senior' ? 'bg-purple-500/10 text-purple-400' :
                                                    row.level === 'Mid' ? 'bg-blue-500/10 text-blue-400' :
                                                        'bg-green-500/10 text-green-400'
                                                }`}>
                                                {row.level}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{row.location}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">${row.min.toLocaleString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-400 font-bold">${row.max.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
