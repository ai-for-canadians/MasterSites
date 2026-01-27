import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { accounts } from '@/lib/data/accounts';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, XCircle, Info, Landmark } from 'lucide-react';

export function generateStaticParams() {
    return accounts.map((a) => ({
        slug: a.slug,
    }));
}

export default function AccountDetailPage({ params }: { params: { slug: string } }) {
    const account = accounts.find((a) => a.slug === params.slug);

    if (!account) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-12">
                <article className="mx-auto max-w-4xl px-6 lg:px-8">

                    <Link href="/accounts" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 mb-12 font-bold transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Accounts
                    </Link>

                    <header className="mb-16">
                        <div className="bg-zinc-100 inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
                            {account.category} Account
                        </div>
                        <h1 className="text-5xl font-black text-zinc-900 mb-4">{account.name}</h1>
                        <div className="text-2xl text-zinc-400 font-bold mb-8 italic">{account.fullName}</div>
                        <p className="text-xl text-zinc-600 leading-relaxed border-l-4 border-zinc-900 pl-8 italic">
                            {account.details}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2 mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                Tax Treatment
                            </h3>
                            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-zinc-700 leading-relaxed font-medium">
                                {account.taxTreatment}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2 mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                Contribution Rules
                            </h3>
                            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-zinc-700 leading-relaxed font-medium">
                                {account.contributionLimit}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <section className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100">
                            <h3 className="text-emerald-900 font-bold mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                Pros
                            </h3>
                            <ul className="space-y-4">
                                {account.pros.map((pro, i) => (
                                    <li key={i} className="text-emerald-800 text-sm font-medium flex gap-3">
                                        <span className="text-emerald-300 select-none">•</span>
                                        {pro}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
                            <h3 className="text-red-900 font-bold mb-6 flex items-center gap-2">
                                <XCircle className="w-5 h-5 text-red-600" />
                                Cons
                            </h3>
                            <ul className="space-y-4">
                                {account.cons.map((con, i) => (
                                    <li key={i} className="text-red-800 text-sm font-medium flex gap-3">
                                        <span className="text-red-300 select-none">•</span>
                                        {con}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="bg-zinc-900 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Landmark className="w-48 h-48" />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 relative z-10">Best For...</h2>
                        <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl relative z-10">
                            {account.bestFor}
                        </p>
                    </div>

                </article>
            </main>
            <Footer />
        </div>
    );
}
