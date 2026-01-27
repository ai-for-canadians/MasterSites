import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { benefits } from '@/lib/data/benefits';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';

export default function ProgramsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-8">All Programs</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map(b => (
                            <Link key={b.id} href={`/programs/${b.slug}`} className="group bg-white border border-slate-200 p-6 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                                        {b.category}
                                    </span>
                                    <span className="text-xs text-slate-400">{b.provider}</span>
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                    {b.title}
                                </h3>
                                <div className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="text-emerald-600 font-bold text-xl">{b.amount}</span>
                                </div>
                                <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                                    {b.description}
                                </p>
                                <div className="flex items-center text-sm font-bold text-emerald-600 mt-auto">
                                    Check Eligibility <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
