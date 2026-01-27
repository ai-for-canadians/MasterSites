import Link from 'next/link';
import { providers, therapies } from '@/lib/data/resources';
import { User, CheckCircle2, DollarSign, Brain, MessageSquare, Info } from 'lucide-react';

export default function ProvidersPage() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-slate-50">Who should you see?</h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Demystifying the different types of mental health professionals and therapy styles.
                    </p>
                </div>

                {/* Provider Types */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-slate-50 flex items-center gap-3">
                        <User className="text-teal-500" />
                        Provider Types
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {providers.map((p) => (
                            <div key={p.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-50">{p.name}</h3>
                                        <div className="text-teal-400 font-mono text-sm">{p.qualifications}</div>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${p.canPrescribe ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-slate-700 text-slate-400'}`}>
                                        {p.canPrescribe ? 'Can Prescribe' : 'Therapy Only'}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase font-bold mb-3">Best For</div>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {p.bestFor.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-slate-700/50">
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            <DollarSign className="w-4 h-4 text-teal-500" />
                                            {p.averageCost}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Therapy Styles */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-slate-50 flex items-center gap-3">
                        <Brain className="text-teal-500" />
                        Common Therapy Styles
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {therapies.map((t) => (
                            <div key={t.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-teal-500/30 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-500 font-bold">
                                        {t.acronym}
                                    </div>
                                    <h3 className="font-bold text-slate-50">{t.name}</h3>
                                </div>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                    {t.summary}
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase font-bold mb-2">Typically Helps with</div>
                                        <div className="flex flex-wrap gap-2">
                                            {t.bestFor.map((cat) => (
                                                <span key={cat} className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[10px] uppercase font-bold">
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-slate-800">
                                        <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">What to expect</div>
                                        <p className="text-xs text-slate-500 italic">{t.whatToExpect}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Help Finding CTA */}
                <div className="mt-20 bg-gradient-to-br from-teal-500/5 to-slate-800 border border-teal-500/20 rounded-2xl p-10 text-center">
                    <MessageSquare className="w-12 h-12 text-teal-500 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-slate-50 mb-4">Finding a therapist can take time</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        Most people interview 2-3 therapists before finding a good fit. Check if they offer a free 15-minute consultation to see if your personalities click.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/conditions" className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg transition-colors">
                            Return to Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
