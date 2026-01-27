import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { tasks } from '@/lib/data/tasks';
import Link from 'next/link';
import { CheckSquare } from 'lucide-react';

export default function ChecklistPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <CheckSquare className="w-8 h-8 text-red-600" />
                        Complete Checklist
                    </h1>

                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                        {tasks.map((task, i) => (
                            <div key={task.id} className={`p-6 flex items-start gap-4 ${i !== 0 ? 'border-t border-slate-100' : ''}`}>
                                <div className="pt-1">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-red-600 focus:ring-red-500" />
                                </div>
                                <div>
                                    <Link href={`/tasks/${task.slug}`} className="font-bold text-slate-900 hover:text-red-600 transition-colors">
                                        {task.title}
                                    </Link>
                                    <p className="text-sm text-slate-600 mt-1">{task.description}</p>
                                    <div className="mt-2 flex gap-3">
                                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium uppercase tracking-wide">
                                            {task.stage.replace('-', ' ')}
                                        </span>
                                        {task.importance === 'critical' && (
                                            <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded font-medium uppercase tracking-wide">
                                                Critical
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
