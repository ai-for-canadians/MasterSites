import { Rocket, Vote, DollarSign, Hammer, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'How It Works | LaunchPad',
    description: 'How community-funded InfoBank sites work. Submit, vote, fund, own.',
};

export default function HowItWorksPage() {
    return (
        <div className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-slate-50 mb-4">How It Works</h1>
                <p className="text-xl text-slate-400 mb-12">
                    From idea to shared ownership in 5 steps.
                </p>

                {/* Steps */}
                <div className="space-y-12 mb-16">
                    {[
                        {
                            step: 1,
                            title: 'Submit Your Idea',
                            icon: Rocket,
                            color: 'purple',
                            description: 'Got an idea for a useful InfoBank site? Submit it with a description of the problem it solves, who would use it, and what features it needs.',
                            example: 'Example: "Pet Care Guide - Evidence-based pet health information to cut through industry marketing."',
                        },
                        {
                            step: 2,
                            title: 'Community Votes',
                            icon: Vote,
                            color: 'purple',
                            description: 'The community votes on submitted ideas. Ideas that reach the voting threshold move to the funding stage.',
                            example: 'Top-voted ideas show there\'s real demand for the content.',
                        },
                        {
                            step: 3,
                            title: 'Contributors Fund Development',
                            icon: DollarSign,
                            color: 'amber',
                            description: 'Contributors fund the development costs. Your contribution determines your ownership percentage. Typical funding goals: $5,000-$10,000.',
                            example: 'If you contribute $1,000 to a $5,000 goal, you own 20% of that site.',
                        },
                        {
                            step: 4,
                            title: 'We Build It',
                            icon: Hammer,
                            color: 'blue',
                            description: 'Once funded, we build the site using the InfoBank platform. Contributors are updated on progress and can provide feedback.',
                            example: 'Typical build time: 2-4 weeks from funding completion.',
                        },
                        {
                            step: 5,
                            title: 'Revenue Shared',
                            icon: TrendingUp,
                            color: 'emerald',
                            description: 'Launched sites generate revenue through affiliate links, sponsorships, or premium features. Revenue is split proportionally among owners.',
                            example: 'Monthly payouts to contributors based on their ownership percentage.',
                        },
                    ].map(({ step, title, icon: Icon, color, description, example }) => (
                        <div key={step} className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className={`w-14 h-14 bg-${color}-500/20 rounded-2xl flex items-center justify-center`}>
                                    <Icon className={`w-7 h-7 text-${color}-400`} />
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-purple-400 mb-1">Step {step}</div>
                                <h2 className="text-xl font-semibold text-slate-50 mb-2">{title}</h2>
                                <p className="text-slate-400 mb-2">{description}</p>
                                <p className="text-sm text-slate-500 italic">{example}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="border-t border-slate-800 pt-12">
                    <h2 className="text-2xl font-bold text-slate-50 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'How much does it cost to submit an idea?',
                                a: 'Submitting an idea is free. You only pay if you choose to contribute to funding.',
                            },
                            {
                                q: 'What if a site doesn\'t generate revenue?',
                                a: 'There\'s no guaranteed return. Like any investment, some sites may succeed while others may not generate significant revenue.',
                            },
                            {
                                q: 'Can I sell my ownership share?',
                                a: 'Currently, ownership shares are not transferable. This may change as the platform evolves.',
                            },
                            {
                                q: 'Who decides if an idea gets built?',
                                a: 'The community votes. Ideas that reach the threshold and achieve their funding goal get built.',
                            },
                            {
                                q: 'How are revenue payouts handled?',
                                a: 'Monthly payouts via PayPal or bank transfer for amounts over $50. Smaller amounts accumulate.',
                            },
                        ].map((item, i) => (
                            <div key={i}>
                                <h3 className="font-semibold text-slate-50 mb-2">{item.q}</h3>
                                <p className="text-slate-400">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center bg-purple-500/10 border border-purple-500/30 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-slate-50 mb-4">Ready to Get Started?</h2>
                    <p className="text-slate-400 mb-6">Submit your idea or browse existing projects.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/submit"
                            className="bg-purple-500 hover:bg-purple-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition-colors"
                        >
                            Submit Your Idea
                        </Link>
                        <Link
                            href="/ideas"
                            className="bg-slate-700 hover:bg-slate-600 text-slate-50 px-6 py-3 rounded-xl font-semibold transition-colors"
                        >
                            Browse Ideas
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
