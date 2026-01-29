import { Venture } from '@/types';
import { CheckCircle2, Circle } from 'lucide-react';

interface VentureProgressProps {
    venture: Venture;
    totalSteps: number;
}

export function VentureProgress({ venture, totalSteps }: VentureProgressProps) {
    const completedCount = venture.completedSteps?.length ?? 0;
    const percent = Math.round((completedCount / totalSteps) * 100);

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-end">
                <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Progress</div>
                    <div className="text-2xl font-bold text-white">{percent}% Complete</div>
                </div>
                <div className="text-right">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Current Step</div>
                    <div className="text-white font-medium">Step {venture.currentStep} of {totalSteps}</div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-1000 ease-out"
                    style={{ width: `${percent}%` }}
                />
            </div>

            {/* Steps Row (simplified) */}
            <div className="flex justify-between pt-2">
                {Array.from({ length: totalSteps }).map((_, i) => {
                    const stepNum = i + 1;
                    const isCompleted = stepNum < venture.currentStep;
                    const isCurrent = stepNum === venture.currentStep;

                    return (
                        <div key={i} className="flex flex-col items-center gap-2">
                            {isCompleted ? (
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                            ) : isCurrent ? (
                                <div className="w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                                </div>
                            ) : (
                                <Circle className="w-5 h-5 text-zinc-700" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
