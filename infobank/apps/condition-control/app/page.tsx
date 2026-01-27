import { Hero } from '@/components/home/Hero';
import { ConditionList } from '@/components/home/ConditionList';
import { conditions } from '@/lib/data/conditions';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                <Hero />
                <ConditionList conditions={conditions.slice(0, 3)} />

                {/* Metric Section */}
                <section className="py-24 bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-rose-500">80%</h2>
                            <p className="mt-4 text-xl leading-8 text-slate-300">
                                of chronic disease risk is driven by lifestyle factors. Genes load the gun, lifestyle pulls the trigger.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
