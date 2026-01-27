import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { metrics } from '@/lib/data/countries';

export default function MethodologyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-white mb-8">Methodology</h1>
                    <p className="text-lg text-slate-400 mb-12">
                        COMPASS aggregates data from the world&apos;s most respected institutions to create a single, comparable score for government performance. We normalize all scores to a 0-100 scale.
                    </p>

                    <div className="space-y-12">
                        {metrics.map(metric => (
                            <div key={metric.id} className="border-b border-slate-800 pb-8 last:border-0">
                                <div className="flex items-baseline justify-between mb-2">
                                    <h2 className="text-2xl font-bold text-white">{metric.name}</h2>
                                    <div className="text-sm text-sky-500 font-mono">{metric.source}</div>
                                </div>
                                <p className="text-slate-300 mb-4">{metric.description}</p>

                                <div className="bg-slate-900 rounded p-4 text-sm text-slate-400">
                                    <span className="font-bold text-slate-300 block mb-1">Methodology:</span>
                                    {metric.methodology}
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
