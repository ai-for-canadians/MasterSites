import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EvidenceBadge } from '@/components/home/EvidenceBadge';
import { topics } from '@/lib/data/topics';
import Link from 'next/link';
import { ArrowRight, Baby, GraduationCap, School, User } from 'lucide-react';

export default function HomePage() {
    const ages = [
        { id: 'infant', label: 'Infant', range: '0-12 mo', icon: Baby, color: 'bg-pink-100 text-pink-700' },
        { id: 'toddler', label: 'Toddler', range: '1-3 yrs', icon: User, color: 'bg-orange-100 text-orange-700' },
        { id: 'preschool', label: 'Preschool', range: '3-5 yrs', icon: School, color: 'bg-yellow-100 text-yellow-700' },
        { id: 'school-age', label: 'School Age', range: '5-12 yrs', icon: GraduationCap, color: 'bg-emerald-100 text-emerald-700' },
        { id: 'teen', label: 'Teen', range: '13-18 yrs', icon: User, color: 'bg-indigo-100 text-indigo-700' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-indigo-50/30">
            <Header />
            <main className="flex-1">

                {/* Hero */}
                <section className="py-20 text-center px-6">
                    <h1 className="text-4xl font-extrabold text-slate-900 sm:text-6xl mb-6 tracking-tight">
                        Parenting without the <span className="text-indigo-600">guilt</span>.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Cut through the noise of influencers and conflicting advice. We summarize what the developmental science actually says.
                    </p>

                    {/* Age Grid */}
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
                        {ages.map(age => (
                            <Link
                                key={age.id}
                                href={`/age/${age.id}`}
                                className="flex flex-col items-center p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all w-32 md:w-40"
                            >
                                <div className={`p-3 rounded-full mb-3 ${age.color}`}>
                                    <age.icon className="w-6 h-6" />
                                </div>
                                <div className="font-bold text-slate-900">{age.label}</div>
                                <div className="text-xs text-slate-400">{age.range}</div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Featured Topics */}
                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-slate-900">Trending Topics</h2>
                            <Link href="/topics" className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-1">
                                View All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {topics.map(topic => (
                                <Link key={topic.id} href={`/topics/${topic.slug}`} className="group bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-100 transition-all">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            {topic.stage}
                                        </span>
                                        <EvidenceBadge rating={topic.evidenceRating} />
                                    </div>
                                    <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                                        {topic.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 line-clamp-2">
                                        {topic.shortDescription}
                                    </p>
                                    <div className="text-indigo-600 font-bold text-sm flex items-center">
                                        Read Summary <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
