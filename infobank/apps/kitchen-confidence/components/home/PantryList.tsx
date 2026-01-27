import { PantryItem } from '@/types';
import { Package } from 'lucide-react';

interface PantryListProps {
    items: PantryItem[];
}

export function PantryList({ items }: PantryListProps) {
    return (
        <section className="py-12 bg-slate-800/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Pantry Essentials</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col p-6 rounded-2xl bg-slate-800 border border-slate-700"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                                    <Package className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-bold px-2 py-1 rounded-full bg-slate-700 text-slate-300">
                                    {item.category}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                            <p className="text-sm text-slate-400 italic mb-4">"{item.whyKeepIt}"</p>

                            <div>
                                <h4 className="text-xs uppercase text-slate-500 font-bold mb-2">Uses</h4>
                                <div className="flex flex-wrap gap-2">
                                    {item.uses.map(u => (
                                        <span key={u} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                                            {u}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
