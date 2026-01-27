import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScriptList } from '@/components/home/ScriptList';
import { scripts } from '@/lib/data/strategies';

export default function ScriptsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Scripts Library</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Exact word-for-word scripts. Don&apos;t improvise when the stakes are high.
                    </p>
                </div>
                <ScriptList scripts={scripts} />
            </main>
            <Footer />
        </div>
    );
}
