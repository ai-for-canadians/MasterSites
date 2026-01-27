import { SupplyItem } from '@/types';
import { Package, Clock } from 'lucide-react';

interface SupplyListProps {
    items: SupplyItem[];
}

export function SupplyList({ items }: SupplyListProps) {
    return (
        <section className="py-12 bg-slate-800/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Basic Supplies</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col p-6 rounded-2xl bg-slate-800 border border-slate-700"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                                    <Package className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-bold px-2 py-1 rounded-full bg-slate-700 text-slate-300">
                                    {item.category}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                            <p className="text-sm text-slate-400 mb-4 h-10">{item.description}</p>

                            <div className="mt-auto space-y-2">
                                <div className="text-xs text-slate-500 flex justify-between">
                                    <span>Qty per person:</span>
                                    <span className="text-slate-300">{item.quantityPerPerson}</span>
                                </div>
                                <div className="text-xs text-slate-500 flex justify-between">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Shelf Life:</span>
                                    <span className="text-slate-300">{item.shelfLife}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
