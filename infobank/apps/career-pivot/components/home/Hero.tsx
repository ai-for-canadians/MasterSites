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
                            Trending: Cybersecurity Analyst Roadmap{' '}
                            <Link href="/careers/cybersecurity" className="font-semibold text-emerald-400">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Strategic advice for <span className="text-emerald-400">changing careers</span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Don't just quit your job. Plan your pivot.
                        We provide realistic roadmaps, skill gap analyses, and timeline estimates for transitioning into high-growth industries.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/careers"
                            className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                        >
                            Explore Career Paths
                        </Link>
                        <Link href="/roadmaps" className="text-sm font-semibold leading-6 text-white">
                            View Roadmaps <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
