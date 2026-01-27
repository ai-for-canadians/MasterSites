'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { supplements } from '@/lib/data/supplements';
import { pairings, checkPairing } from '@/lib/data/pairings';
import { Check, X, AlertTriangle, XCircle, Zap, Plus, Sparkles, Clock } from 'lucide-react';

const typeColors = {
    synergistic: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    neutral: 'bg-slate-500/10 border-slate-500/30 text-slate-400',
    caution: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    avoid: 'bg-red-500/10 border-red-500/30 text-red-400',
};

// Companion suggestions (D3 needs K2, zinc needs copper long-term, etc.)
const companionSuggestions: Record<string, { companion: string; reason: string }[]> = {
    'vitamin-d': [
        { companion: 'vitamin-k2', reason: 'K2 directs calcium to bones instead of arteries. Essential for D3 safety.' },
        { companion: 'magnesium', reason: 'Required to convert D3 to its active form.' }
    ],
    'zinc': [
        { companion: 'copper', reason: 'Long-term zinc (40mg+) depletes copper. Add 1-2mg copper.' }
    ],
    'iron': [
        { companion: 'vitamin-c', reason: 'Vitamin C increases iron absorption up to 6x.' }
    ],
    'curcumin': [
        { companion: 'black-pepper', reason: 'Piperine increases curcumin absorption by 2000%.' }
    ],
    'collagen': [
        { companion: 'vitamin-c', reason: 'Vitamin C is essential for collagen synthesis.' }
    ],
    'omega-3': [
        { companion: 'vitamin-e', reason: 'Vitamin E protects omega-3s from oxidation.' }
    ],
    'magnesium': [
        { companion: 'zinc', reason: 'ZMA combo supports sleep and recovery.' }
    ],
    'lions-mane': [
        { companion: 'niacin', reason: 'Stamets Stack: niacin may enhance NGF delivery.' }
    ]
};

export default function AnalyzePage() {
    const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSupplements = supplements.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleSupplement = (slug: string) => {
        setSelectedSlugs(prev =>
            prev.includes(slug)
                ? prev.filter(s => s !== slug)
                : [...prev, slug]
        );
    };

    // Analyze the selected stack
    const analysis = useMemo(() => {
        const synergies: { supp1: string; supp2: string; reason: string; timing?: string }[] = [];
        const cautions: { supp1: string; supp2: string; reason: string; timing?: string }[] = [];
        const conflicts: { supp1: string; supp2: string; reason: string; timing?: string }[] = [];
        const suggestions: { needed: string; for: string; reason: string }[] = [];

        // Check all pairs
        for (let i = 0; i < selectedSlugs.length; i++) {
            for (let j = i + 1; j < selectedSlugs.length; j++) {
                const pairing = checkPairing(selectedSlugs[i], selectedSlugs[j]);
                if (pairing) {
                    const pairData = {
                        supp1: selectedSlugs[i],
                        supp2: selectedSlugs[j],
                        reason: pairing.reason,
                        timing: pairing.timing
                    };
                    if (pairing.type === 'synergistic') synergies.push(pairData);
                    else if (pairing.type === 'caution') cautions.push(pairData);
                    else if (pairing.type === 'avoid') conflicts.push(pairData);
                }
            }
        }

        // Check for missing companions
        for (const slug of selectedSlugs) {
            const suggestions_for_slug = companionSuggestions[slug] || [];
            for (const { companion, reason } of suggestions_for_slug) {
                if (!selectedSlugs.includes(companion)) {
                    suggestions.push({ needed: companion, for: slug, reason });
                }
            }
        }

        return { synergies, cautions, conflicts, suggestions };
    }, [selectedSlugs]);

    const getName = (slug: string) => {
        const supp = supplements.find(s => s.slug === slug);
        return supp?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            Stack Analyzer
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-6">
                            Analyze Your Stack
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Select the supplements you currently take. We'll identify synergies,
                            conflicts, and missing companions.
                        </p>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Selection Panel */}
                        <div>
                            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                                <h2 className="text-xl font-semibold text-slate-50 mb-4">
                                    Select Your Supplements
                                </h2>

                                {/* Search */}
                                <input
                                    type="text"
                                    placeholder="Search supplements..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-50 placeholder-slate-500 focus:outline-none focus:border-orange-500/50 mb-4"
                                />

                                {/* Selected Pills */}
                                {selectedSlugs.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {selectedSlugs.map(slug => (
                                            <button
                                                key={slug}
                                                onClick={() => toggleSupplement(slug)}
                                                className="flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm hover:bg-orange-500/30 transition-colors"
                                            >
                                                {getName(slug)}
                                                <X className="w-3 h-3" />
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Supplement List */}
                                <div className="max-h-[400px] overflow-y-auto space-y-2">
                                    {filteredSupplements.map(supp => (
                                        <button
                                            key={supp.id}
                                            onClick={() => toggleSupplement(supp.slug)}
                                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${selectedSlugs.includes(supp.slug)
                                                    ? 'bg-orange-500/20 border border-orange-500/30'
                                                    : 'bg-slate-900/50 border border-slate-700 hover:border-slate-600'
                                                }`}
                                        >
                                            <div className={`w-5 h-5 rounded flex items-center justify-center ${selectedSlugs.includes(supp.slug)
                                                    ? 'bg-orange-500 text-slate-900'
                                                    : 'bg-slate-700'
                                                }`}>
                                                {selectedSlugs.includes(supp.slug) && <Check className="w-3 h-3" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-slate-50">{supp.name}</div>
                                                <div className="text-xs text-slate-500">{supp.category}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Analysis Panel */}
                        <div className="space-y-6">
                            {selectedSlugs.length === 0 ? (
                                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center">
                                    <Plus className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                                    <p className="text-slate-400">
                                        Select supplements from the left to analyze your stack.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    {/* Conflicts - Show first as most important */}
                                    {analysis.conflicts.length > 0 && (
                                        <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
                                            <div className="flex items-center gap-2 text-red-400 font-semibold mb-4">
                                                <XCircle className="w-5 h-5" />
                                                Conflicts Found ({analysis.conflicts.length})
                                            </div>
                                            <div className="space-y-3">
                                                {analysis.conflicts.map((c, i) => (
                                                    <div key={i} className="bg-slate-900/50 rounded-xl p-4">
                                                        <div className="font-medium text-slate-50 mb-1">
                                                            {getName(c.supp1)} + {getName(c.supp2)}
                                                        </div>
                                                        <p className="text-sm text-slate-400 mb-2">{c.reason}</p>
                                                        {c.timing && (
                                                            <p className="text-xs text-red-400">⚠️ {c.timing}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Cautions */}
                                    {analysis.cautions.length > 0 && (
                                        <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/30">
                                            <div className="flex items-center gap-2 text-amber-400 font-semibold mb-4">
                                                <AlertTriangle className="w-5 h-5" />
                                                Timing Matters ({analysis.cautions.length})
                                            </div>
                                            <div className="space-y-3">
                                                {analysis.cautions.map((c, i) => (
                                                    <div key={i} className="bg-slate-900/50 rounded-xl p-4">
                                                        <div className="font-medium text-slate-50 mb-1">
                                                            {getName(c.supp1)} + {getName(c.supp2)}
                                                        </div>
                                                        <p className="text-sm text-slate-400 mb-2">{c.reason}</p>
                                                        {c.timing && (
                                                            <p className="text-xs text-amber-400 flex items-center gap-1">
                                                                <Clock className="w-3 h-3" /> {c.timing}
                                                            </p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Synergies */}
                                    {analysis.synergies.length > 0 && (
                                        <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/30">
                                            <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-4">
                                                <Zap className="w-5 h-5" />
                                                Synergies ({analysis.synergies.length})
                                            </div>
                                            <div className="space-y-3">
                                                {analysis.synergies.map((s, i) => (
                                                    <div key={i} className="bg-slate-900/50 rounded-xl p-4">
                                                        <div className="font-medium text-slate-50 mb-1">
                                                            {getName(s.supp1)} + {getName(s.supp2)}
                                                        </div>
                                                        <p className="text-sm text-slate-400 mb-2">{s.reason}</p>
                                                        {s.timing && (
                                                            <p className="text-xs text-emerald-400">✓ {s.timing}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Suggestions */}
                                    {analysis.suggestions.length > 0 && (
                                        <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/30">
                                            <div className="flex items-center gap-2 text-purple-400 font-semibold mb-4">
                                                <Sparkles className="w-5 h-5" />
                                                Missing Companions
                                            </div>
                                            <div className="space-y-3">
                                                {analysis.suggestions.map((s, i) => (
                                                    <div key={i} className="bg-slate-900/50 rounded-xl p-4">
                                                        <div className="font-medium text-slate-50 mb-1">
                                                            Add {getName(s.needed)} with {getName(s.for)}
                                                        </div>
                                                        <p className="text-sm text-slate-400">{s.reason}</p>
                                                        <button
                                                            onClick={() => toggleSupplement(s.needed)}
                                                            className="mt-2 text-xs text-purple-400 hover:text-purple-300"
                                                        >
                                                            + Add to stack
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* All clear */}
                                    {analysis.conflicts.length === 0 && analysis.cautions.length === 0 && analysis.synergies.length === 0 && analysis.suggestions.length === 0 && (
                                        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 text-center">
                                            <Check className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                                            <p className="text-slate-300">
                                                No known interactions found between your selected supplements.
                                            </p>
                                            <p className="text-slate-500 text-sm mt-2">
                                                Add more supplements to check for interactions.
                                            </p>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
