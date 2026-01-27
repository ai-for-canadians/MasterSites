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
                            Protocol Focus: Patellar Tendinopathy{' '}
                            <Link href="/programs/jumpers-knee" className="font-semibold text-indigo-400">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Start Rehab <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Physical therapy <span className="text-indigo-500">protocols</span> for common injuries
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Stop guessing with random YouTube exercises. Follow structured, phase-based rehabilitation programs used by professionals.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/programs"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Find a Program
                        </Link>
                        <Link href="/exercises" className="text-sm font-semibold leading-6 text-white">
                            Exercise Library <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
