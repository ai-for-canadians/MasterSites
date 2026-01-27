import { Header, Footer } from '@/components/layout/Layout';
import { strategies } from '@/lib/data/strategies';
import Link from 'next/link';
import { ArrowRight, Palmtree } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900">
            <Header />
            <main className="flex-1">

                <section className="bg-amber-50 py-24 px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <Palmtree className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                        <h1 className="text-5xl font-black mb-6 tracking-tight">Your best years are still ahead.</h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Retirement in Canada is more than just a bank balance. It&apos;s a complex puzzle of government benefits, tax strategies, and lifestyle design.
                        </p>
                        <Link href="/retirement" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg">
                            Explore Strategies
                        </Link>
                    </div>
                </section>

                <section className="py-24 max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">Retirement Pillars</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {strategies.map(s => (
                            <div key={s.id} className="p-8 border border-amber-100 rounded-3xl hover:shadow-xl transition-all">
                                <div className="text-xs font-bold text-amber-600 uppercase mb-4">{s.category}</div>
                                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                                <p className="text-slate-600 mb-8">{s.summary}</p>
                                <Link href={`/retirement/${s.slug}`} className="text-amber-700 font-bold flex items-center gap-2 group">
                                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
