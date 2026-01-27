import { Hero } from '@/components/home/Hero';
import { StoryGrid } from '@/components/home/StoryGrid';
import { stories } from '@/lib/data/stories';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <StoryGrid stories={stories} />

                {/* Metric Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-blue-500">100% Verified</h2>
                            <p className="mt-4 text-xl leading-8 text-slate-300">
                                Every story undergoes a 3-step document review process. If we can't prove it, we don't publish it.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
