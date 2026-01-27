import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToolGrid } from '@/components/home/ToolGrid';
import { tools } from '@/lib/data/systems';

export default function ToolsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Recommended Tools</h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Software and hardware that actually helps, rather than just becoming another distraction.
                    </p>
                </div>
                <ToolGrid tools={tools} />
            </main>
            <Footer />
        </div>
    );
}
