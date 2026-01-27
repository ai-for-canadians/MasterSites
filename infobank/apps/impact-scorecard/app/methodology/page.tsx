import { Scale, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export const metadata = {
    title: 'Methodology | Impact Scorecard',
    description: 'How we rate nonprofits and companies on transparency, impact, and accountability.',
};

export default function MethodologyPage() {
    return (
        <div className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <Scale className="w-8 h-8 text-emerald-400" />
                    <h1 className="text-3xl font-bold text-slate-50">Our Methodology</h1>
                </div>
                <p className="text-xl text-slate-400 mb-12">
                    How we rate organizations on what actually matters—not marketing claims.
                </p>

                {/* Grading Scale */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-50 mb-6">Grading Scale</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { grade: 'A+', range: '95-100', desc: 'Exceptional transparency and impact' },
                            { grade: 'A', range: '90-94', desc: 'Excellent across all metrics' },
                            { grade: 'A-', range: '85-89', desc: 'Strong performer' },
                            { grade: 'B+', range: '80-84', desc: 'Good with minor gaps' },
                            { grade: 'B', range: '75-79', desc: 'Above average' },
                            { grade: 'B-', range: '70-74', desc: 'Solid but room to improve' },
                            { grade: 'C+', range: '65-69', desc: 'Average performance' },
                            { grade: 'C', range: '60-64', desc: 'Below average' },
                            { grade: 'C-', range: '55-59', desc: 'Significant concerns' },
                            { grade: 'D', range: '40-54', desc: 'Poor transparency or impact' },
                            { grade: 'F', range: '0-39', desc: 'Major issues identified' },
                        ].map(({ grade, range, desc }) => (
                            <div key={grade} className="bg-slate-800/50 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`px-2.5 py-1 rounded-lg text-sm font-bold ${grade.startsWith('A') ? 'bg-emerald-500 text-white' :
                                            grade.startsWith('B') ? 'bg-blue-500 text-white' :
                                                grade.startsWith('C') ? 'bg-amber-500 text-white' :
                                                    'bg-red-500 text-white'
                                        }`}>
                                        {grade}
                                    </span>
                                    <span className="text-slate-400 text-sm">{range}</span>
                                </div>
                                <p className="text-sm text-slate-300">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Nonprofit Criteria */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-50 mb-6">Nonprofit Evaluation Criteria</h2>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                        <div className="space-y-6">
                            {[
                                { name: 'Program Expense Ratio', weight: '30%', desc: 'Percentage of budget spent on programs vs. overhead. Higher is better, but we adjust for organization size and type.' },
                                { name: 'Financial Transparency', weight: '20%', desc: 'Availability of audited financials, 990 forms, and clear budget breakdowns. We check for third-party audits.' },
                                { name: 'Impact Measurement', weight: '20%', desc: 'Quality of outcome metrics. Do they measure what matters, not just outputs?' },
                                { name: 'Outcome Reporting', weight: '15%', desc: 'Public reporting on results. Are they honest about failures?' },
                                { name: 'Leadership Compensation', weight: '15%', desc: 'CEO pay relative to median employee and sector norms.' },
                            ].map((c) => (
                                <div key={c.name} className="flex flex-col sm:flex-row gap-4">
                                    <div className="sm:w-1/4">
                                        <div className="font-medium text-slate-50">{c.name}</div>
                                        <div className="text-emerald-400 text-sm">{c.weight}</div>
                                    </div>
                                    <p className="sm:w-3/4 text-slate-400 text-sm">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Criteria */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-50 mb-6">Company Evaluation Criteria</h2>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                        <div className="space-y-6">
                            {[
                                { name: 'Environmental Impact', weight: '25%', desc: 'Carbon footprint, renewable energy usage, waste reduction. We penalize greenwashing.' },
                                { name: 'Employee Satisfaction', weight: '20%', desc: 'Glassdoor ratings, turnover data, and employee benefit quality.' },
                                { name: 'Governance Transparency', weight: '20%', desc: 'Board diversity, executive accountability, shareholder rights.' },
                                { name: 'Community Investment', weight: '15%', desc: 'Charitable giving, local hiring, community programs.' },
                                { name: 'Pay Equity', weight: '10%', desc: 'CEO-to-worker pay ratio, gender pay gap disclosure.' },
                                { name: 'Supply Chain Ethics', weight: '10%', desc: 'Labor practices, sourcing transparency, conflict minerals.' },
                            ].map((c) => (
                                <div key={c.name} className="flex flex-col sm:flex-row gap-4">
                                    <div className="sm:w-1/4">
                                        <div className="font-medium text-slate-50">{c.name}</div>
                                        <div className="text-blue-400 text-sm">{c.weight}</div>
                                    </div>
                                    <p className="sm:w-3/4 text-slate-400 text-sm">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sources */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-50 mb-6">Our Sources</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { name: 'Charity Intelligence Canada', desc: 'Canadian charity evaluations' },
                            { name: 'GiveWell', desc: 'Cost-effectiveness analysis for global health' },
                            { name: 'Charity Navigator', desc: 'US nonprofit ratings' },
                            { name: 'B Corp Directory', desc: 'Certified B Corporation scores' },
                            { name: 'CDP', desc: 'Carbon disclosure data' },
                            { name: 'MSCI ESG', desc: 'Corporate ESG ratings' },
                            { name: 'Glassdoor', desc: 'Employee satisfaction data' },
                            { name: 'Public financial filings', desc: '990s, annual reports, SEC filings' },
                        ].map((s) => (
                            <div key={s.name} className="bg-slate-800/30 rounded-xl p-4">
                                <div className="font-medium text-slate-50">{s.name}</div>
                                <div className="text-sm text-slate-400">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-slate-50 mb-2">Important Disclaimer</h3>
                            <p className="text-sm text-slate-400">
                                Our ratings are based on publicly available information and third-party sources.
                                We strive for accuracy but cannot guarantee completeness. Organizations may
                                dispute ratings by contacting us with additional documentation. This is not
                                financial, investment, or legal advice.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
