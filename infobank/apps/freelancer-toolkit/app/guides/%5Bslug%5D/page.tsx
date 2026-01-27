import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { guides } from '@/lib/data/guides';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Share2, Printer } from 'lucide-react';

export function generateStaticParams() {
    return guides.map((g) => ({
        slug: g.slug,
    }));
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
    const guide = guides.find((g) => g.slug === params.slug);

    if (!guide) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-12 md:py-24">
                <article className="mx-auto max-w-3xl px-6 lg:px-8">

                    <div className="flex justify-between items-center mb-12">
                        <Link href="/guides" className="inline-flex items-center gap-2 text-xs font-black text-zinc-400 hover:text-zinc-900 uppercase tracking-widest transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Guides
                        </Link>
                        <div className="flex gap-4">
                            <button className="text-zinc-400 hover:text-zinc-900 transition-colors"><Share2 className="w-4 h-4" /></button>
                            <button className="text-zinc-400 hover:text-zinc-900 transition-colors"><Printer className="w-4 h-4" /></button>
                        </div>
                    </div>

                    <header className="mb-16">
                        <div className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-6">
                            {guide.category.replace('-', ' ')} // Survival Kit
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-zinc-900 mb-8 tracking-tighter leading-none">
                            {guide.title}
                        </h1>
                        <p className="text-2xl text-zinc-500 font-medium italic border-l-8 border-zinc-100 pl-8 leading-relaxed">
                            {guide.shortDescription}
                        </p>
                    </header>

                    <div className="space-y-16">

                        <div className="prose prose-zinc prose-xl max-w-none text-zinc-800 leading-relaxed font-serif">
                            {guide.content}
                        </div>

                        {guide.keyChecklist && (
                            <section className="bg-zinc-50 p-12 border border-zinc-200">
                                <h2 className="text-sm font-black text-zinc-900 mb-8 uppercase tracking-[0.3em]">Critical Checks</h2>
                                <div className="space-y-6">
                                    {guide.keyChecklist.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start pb-6 border-b border-zinc-200 last:border-0 last:pb-0">
                                            <div className="mt-1 flex-shrink-0">
                                                <CheckCircle2 className="w-6 h-6 text-zinc-900" />
                                            </div>
                                            <p className="text-xl font-bold text-zinc-900 tracking-tight leading-tight">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <div className="bg-zinc-900 text-zinc-500 p-8 text-[10px] uppercase font-black tracking-widest leading-loose">
                            DISCLAIMER // This toolkit is for educational purposes for Canadian freelancers.
                            Individual circumstances vary; always consult with a CPA or lawyer for your specific situation.
                        </div>

                    </div>

                </article>
            </main>
            <Footer />
        </div>
    );
}
