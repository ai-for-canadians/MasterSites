import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RateCalculator } from '@/components/calculator/RateCalculator';
import { guides } from '@/lib/data/guides';
import Link from 'next/link';
import { ArrowRight, CheckCircle, FileText, Globe } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-50">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="py-24 px-6 border-b border-zinc-200 bg-white overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-10 bg-zinc-100 rounded-full blur-3xl pointer-events-none" />

                    <div className="mx-auto max-w-7xl relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-block bg-zinc-900 text-white text-[10px] font-black px-2 py-1 uppercase tracking-[0.2em] mb-8">
                                CAD // SURVIVAL GUIDE
                            </div>
                            <h1 className="text-6xl font-black text-zinc-900 tracking-tighter sm:text-8xl mb-12">
                                Master your <br />
                                <span className="text-zinc-400">independence.</span>
                            </h1>
                            <p className="text-xl text-zinc-500 max-w-xl mb-12 font-medium leading-relaxed">
                                Being a freelancer in Canada means being a business owner.
                                We provide the tools and guides to help you handle taxes, rates, and structure with confidence.
                            </p>
                        </div>

                        <RateCalculator />
                    </div>
                </section>

                {/* Essential Guides */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex justify-between items-end mb-16">
                            <div>
                                <h2 className="text-3xl font-black text-zinc-900 tracking-tight italic uppercase">Essential Guides</h2>
                                <p className="text-zinc-500 mt-2 font-medium">Navigating the Canadian nuances of self-employment.</p>
                            </div>
                            <Link href="/guides" className="text-sm font-bold text-zinc-900 border-b-2 border-zinc-900 pb-1 flex items-center gap-2 hover:gap-3 transition-all">
                                All Guides <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {guides.map(guide => (
                                <Link key={guide.id} href={`/guides/${guide.slug}`} className="group bg-white p-8 border border-zinc-200 hover:border-zinc-900 transition-all shadow-sm flex flex-col">
                                    <div className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">
                                        {guide.category.replace('-', ' ')}
                                    </div>
                                    <h3 className="text-2xl font-black text-zinc-900 mb-4 group-hover:text-zinc-400 transition-colors tracking-tight">
                                        {guide.title}
                                    </h3>
                                    <p className="text-zinc-600 text-sm mb-8 leading-relaxed flex-1 italic">
                                        {guide.shortDescription}
                                    </p>
                                    <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-widest">
                                        Open Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Resources Row */}
                <section className="bg-zinc-900 py-16 text-white overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 flex flex-wrap gap-12 items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Globe className="w-8 h-8 opacity-50" />
                            <div>
                                <div className="text-xs font-bold text-zinc-500 uppercase">CRA Nexus</div>
                                <div className="font-bold underline cursor-pointer hover:text-zinc-400">MyBusiness Account Login</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FileText className="w-8 h-8 opacity-50" />
                            <div>
                                <div className="text-xs font-bold text-zinc-500 uppercase">Templates</div>
                                <div className="font-bold underline cursor-pointer hover:text-zinc-400">Canadian-Compliant Invoices</div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
