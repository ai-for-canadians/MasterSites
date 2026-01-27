import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { benefits } from '@/lib/data/benefits';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ExternalLink, Calendar, DollarSign } from 'lucide-react';

export function generateStaticParams() {
    return benefits.map((b) => ({
        slug: b.slug,
    }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
    const benefit = benefits.find((b) => b.slug === params.slug);

    if (!benefit) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">

                    <Link href="/programs" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Programs
                    </Link>

                    <header className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm mb-8">
                        <div className="flex gap-4 mb-4">
                            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">
                                {benefit.category}
                            </span>
                            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">
                                {benefit.provider}
                            </span>
                        </div>
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{benefit.title}</h1>
                        <p className="text-xl text-slate-600 mb-8">{benefit.description}</p>

                        <div className="flex flex-wrap gap-8 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">Benefit Amount</div>
                                <div className="text-2xl font-bold text-emerald-700 flex items-center gap-2">
                                    <DollarSign className="w-6 h-6" /> {benefit.amount}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-bold">Payment Frequency</div>
                                <div className="text-lg font-bold text-slate-800 flex items-center gap-2 mt-1">
                                    <Calendar className="w-5 h-5 text-emerald-600" /> {benefit.paymentFrequency}
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="md:col-span-2 space-y-8">
                            <section className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Eligibility Criteria</h2>
                                <div className="space-y-4">
                                    {benefit.eligibility.map((criteria) => (
                                        <div key={criteria.id} className="flex gap-4 items-start">
                                            <div className="mt-1 bg-slate-100 p-1 rounded-full">
                                                <CheckCircle2 className="w-5 h-5 text-slate-400" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900">{criteria.question}</p>
                                                <p className="text-sm text-slate-500">
                                                    Must answer: <span className="font-bold text-slate-700">{criteria.requiredAnswer.toString()}</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-slate-900 mb-4">How to Apply</h3>
                                <p className="text-sm text-slate-600 mb-6">
                                    Applications for this benefit are handled directly through the official government portal.
                                </p>
                                <a
                                    href={benefit.applicationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    Apply Now <ExternalLink className="w-4 h-4" />
                                </a>
                                <p className="text-xs text-slate-400 mt-4 text-center">
                                    Links to official {benefit.provider === 'Federal' ? 'Canada.ca' : 'Provincial'} website
                                </p>
                            </div>
                        </div>

                    </div>

                </article>
            </main>
            <Footer />
        </div>
    );
}
