import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-400 ring-1 ring-white/10 hover:ring-white/20">
                            Start Here: The 7 Step Process{' '}
                            <Link href="/steps" className="font-semibold text-sky-400">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Begin <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Steps to your <span className="text-sky-400">first home</span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Buying a home is complicated. We make it simple.
                        From saving for a down payment to closing day, follow our step-by-step roadmap to avoid costly mistakes.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/steps"
                            className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                        >
                            Start the Guide
                        </Link>
                        <Link href="/mortgages" className="text-sm font-semibold leading-6 text-white">
                            Compare Loans <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
