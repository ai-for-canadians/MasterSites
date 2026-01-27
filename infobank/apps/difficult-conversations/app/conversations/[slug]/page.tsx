import { notFound } from 'next/navigation';
import { conversations } from '@/lib/data/conversations';
import { categories } from '@/lib/data/categories';
import { MessageSquare, AlertTriangle, ClipboardCopy, ListTodo, Shield, HelpCircle, Briefcase, Heart, Home, DollarSign, Users, Info } from 'lucide-react';
import Link from 'next/link';

const IconMap: Record<string, any> = {
    Briefcase: Briefcase,
    Heart: Heart,
    Home: Home,
    DollarSign: DollarSign,
    Users: Users
};

export function generateStaticParams() {
    return conversations.map((convo) => ({
        slug: convo.slug,
    }));
}

export default function ConversationPage({ params }: { params: { slug: string } }) {
    const convo = conversations.find((c) => c.slug === params.slug);

    if (!convo) {
        notFound();
    }

    const category = categories.find((c) => c.id === convo.categoryId);
    const Icon = category ? (IconMap[category.icon] || Info) : Info;

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                        <Link href="/conversations" className="hover:text-amber-500 transition-colors">Scripts</Link>
                        <span>/</span>
                        <span className="text-slate-400">{category?.name}</span>
                    </div>

                    <div className="flex items-start gap-6 mb-6">
                        <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-slate-800 rounded-xl text-amber-500 border border-slate-700">
                            <Icon className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">{convo.title}</h1>
                            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
                                {convo.summary}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 bg-slate-800 rounded px-3 py-1.5 border border-slate-700">
                            <span className="text-xs text-slate-500 uppercase font-bold">Difficulty</span>
                            <span className={`text-sm font-semibold
                         ${convo.difficulty === 'High' ? 'text-red-400' : ''}
                        ${convo.difficulty === 'Medium' ? 'text-amber-400' : ''}
                        ${convo.difficulty === 'Low' ? 'text-emerald-400' : ''}
                    `}>{convo.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-800 rounded px-3 py-1.5 border border-slate-700">
                            <span className="text-xs text-slate-500 uppercase font-bold">Emotional Risk</span>
                            <span className={`text-sm font-semibold
                         ${convo.riskLevel === 'High' ? 'text-red-400' : ''}
                        ${convo.riskLevel === 'Medium' ? 'text-amber-400' : ''}
                        ${convo.riskLevel === 'Low' ? 'text-emerald-400' : ''}
                    `}>{convo.riskLevel}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">

                <div className="space-y-12">

                    {/* Preparation */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center gap-2">
                            <ListTodo className="w-6 h-6 text-amber-500" />
                            Before You Talk
                        </h2>
                        <ul className="space-y-3">
                            {convo.whatToPrepare.map((item, idx) => (
                                <li key={idx} className="flex gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                    <span className="text-amber-500 font-bold">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Opening Lines */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6 text-amber-500" />
                            Opening Lines
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {convo.openingLines.map((line, idx) => (
                                <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-5 italic text-slate-300 text-lg">
                                    "{line}"
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Main Scripts */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center gap-2">
                            <ClipboardCopy className="w-6 h-6 text-amber-500" />
                            The Scripts
                        </h2>
                        <div className="space-y-6">
                            {convo.scripts.map((script, idx) => (
                                <div key={idx} className="bg-slate-800 border border-slate-600 rounded-xl overflow-hidden">
                                    <div className="bg-slate-750 px-6 py-3 border-b border-slate-600 flex justify-between items-center bg-slate-950/30">
                                        <h3 className="font-bold text-slate-50">{script.label}</h3>
                                        <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 bg-slate-900 px-2 py-1 rounded">
                                            {script.tone} Tone
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-lg text-slate-200 leading-relaxed font-serif whitespace-pre-wrap">
                                            "{script.content}"
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Objections */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-50 mb-6 flex items-center gap-2">
                            <AlertTriangle className="w-6 h-6 text-amber-500" />
                            "But what if they say..."
                        </h2>
                        <div className="space-y-4">
                            {convo.commonObjections.map((obj, idx) => (
                                <div key={idx} className="bg-slate-900 border border-slate-700 rounded-lg p-6">
                                    <div className="mb-3">
                                        <span className="text-xs text-red-400 font-bold uppercase mb-1 block">Them</span>
                                        <p className="text-slate-300 font-medium">"{obj.objection}"</p>
                                    </div>
                                    <div className="pl-4 border-l-2 border-amber-500">
                                        <span className="text-xs text-amber-500 font-bold uppercase mb-1 block">You Say</span>
                                        <p className="text-slate-100 italic">"{obj.response}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Tips */}
                    <section className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-8">
                        <h2 className="text-2xl font-bold text-amber-500 mb-6 flex items-center gap-2">
                            <Shield className="w-6 h-6" />
                            Pro Tips
                        </h2>
                        <ul className="space-y-3">
                            {convo.tips.map((item, idx) => (
                                <li key={idx} className="flex gap-3 text-amber-100">
                                    <span className="text-amber-500 font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
