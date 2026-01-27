import Link from 'next/link';
import { ArrowRight, Activity, Percent, Brain } from 'lucide-react';

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-400 ring-1 ring-white/10 hover:ring-white/20">
                            New: RAPAMYCIN Evidence Review{' '}
                            <Link href="/interventions/rapamycin" className="font-semibold text-emerald-400">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Add life to your years, not just years to your <span className="text-emerald-400">life</span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Healthspan is about quality, not just quantity. Evidence-based interventions to maintain
                        physical, cognitive, and metabolic function as you age.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/assess"
                            className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                        >
                            Take Assessment
                        </Link>
                        <Link href="/interventions" className="text-sm font-semibold leading-6 text-white">
                            Browse Interventions <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-16 sm:mt-24">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-slate-400">Interventions Rated</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">25+</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-slate-400">Clinical Studies</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">1000+</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-slate-400">Evidence Grade</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">Strict</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
