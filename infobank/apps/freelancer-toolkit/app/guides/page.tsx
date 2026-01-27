import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { guides } from '@/lib/data/guides';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function GuidesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-50">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-4xl font-black text-zinc-900 mb-12 tracking-tighter uppercase italic">Freelancer Guides</h1>

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
            </main>
            <Footer />
        </div>
    );
}
