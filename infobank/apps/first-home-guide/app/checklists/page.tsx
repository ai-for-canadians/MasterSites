import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { steps } from '@/lib/data/steps';
import { CheckSquare } from 'lucide-react';

export default function ChecklistsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Master Checklist</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Everything you need to do, all in one place.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-8">
                    {steps.map(step => (
                        <div key={step.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-400 text-xs font-bold">
                                    {step.order}
                                </span>
                                {step.name}
                            </h2>
                            <ul className="space-y-3 pl-9">
                                {step.checklist.map(item => (
                                    <li key={item.id} className="flex items-start gap-3">
                                        <CheckSquare className="w-5 h-5 text-slate-600 mt-0.5" />
                                        <div>
                                            <div className="text-slate-300 font-medium">
                                                {item.name}
                                                {item.isCritical && <span className="ml-2 text-[10px] text-red-400 uppercase font-bold tracking-wider">Critical</span>}
                                            </div>
                                            <p className="text-sm text-slate-500">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
