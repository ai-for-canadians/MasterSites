import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout/Layout';
import { strategies } from '@/lib/data/strategies';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export function generateStaticParams() {
    return strategies.map((s) => ({
        slug: s.slug,
    }));
}

export default function DetailPage({ params }: { params: { slug: string } }) {
    const strategy = strategies.find(s => s.slug === params.slug);
    if (!strategy) notFound();

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-20 px-6">
                <div className="max-w-2xl mx-auto">
                    <Link href="/" className="text-sm text-slate-400 font-bold flex items-center gap-2 mb-12 uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Home
                    </Link>

                    <h1 className="text-4xl font-black mb-6">{strategy.title}</h1>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">{strategy.details}</p>

                    <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
                        <h2 className="font-bold text-lg mb-6">Action Checklist</h2>
                        <ul className="space-y-4">
                            {strategy.checklist.map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <CheckCircle className="w-5 h-5 text-amber-600 mt-1" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
