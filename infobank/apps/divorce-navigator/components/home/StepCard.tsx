import { Step } from '@/types';
import Link from 'next/link';
import { ArrowRight, FileText, Scale, Users, Heart } from 'lucide-react';

interface StepCardProps {
    step: Step;
}

export function StepCard({ step }: StepCardProps) {
    const icons = {
        legal: Scale,
        financial: FileText,
        kids: Users,
        emotional: Heart,
    };

    const Icon = icons[step.category];

    return (
        <div className="group relative bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
            <div className="absolute top-6 right-6 text-9xl font-bold text-slate-50 opacity-5 pointer-events-none select-none">
                {step.order}
            </div>

            <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-600">
                    <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-bold text-xl text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {step.shortDescription}
                </p>

                <Link href={`/process/${step.slug}`} className="inline-flex items-center text-sm font-bold text-slate-800 hover:text-slate-500 transition-colors">
                    Read Guide <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
            </div>
        </div>
    );
}
