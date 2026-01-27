import { VentureStep } from '@/types';
import { CheckCircle2, Circle, Lock, Clock, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming basic utils exist in @infobank/ui or locally, mock if needed

// Quick local util if not present in project scope yet
function getStatusColor(status: string) {
    switch (status) {
        case 'complete': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
        case 'executing': return 'text-amber-600 bg-amber-50 border-amber-200 animate-pulse';
        case 'ready': return 'text-blue-600 bg-blue-50 border-blue-200';
        case 'funding': return 'text-indigo-600 bg-indigo-50 border-indigo-200';
        default: return 'text-slate-400 bg-slate-50 border-slate-200';
    }
}

interface StepProgressProps {
    steps: VentureStep[];
    currentStepIndex: number;
}

export function StepProgress({ steps, currentStepIndex }: StepProgressProps) {
    return (
        <div className="space-y-4">
            {steps.map((step, index) => {
                const isCompleted = index < currentStepIndex; // Naive check, better to use status
                const isCurrent = index === currentStepIndex;
                const isLocked = index > currentStepIndex;

                return (
                    <div
                        key={step.stepId}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${isCurrent ? 'border-emerald-500 shadow-md transform scale-[1.02]' : 'border-slate-100'
                            } ${isLocked ? 'opacity-50 grayscale' : 'opacity-100'}`}
                    >
                        <div className="flex-shrink-0">
                            {step.status === 'complete' && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                            {step.status === 'executing' && <Loader2 className="w-6 h-6 text-amber-500 animate-spin" />}
                            {step.status === 'funding' && <Circle className="w-6 h-6 text-indigo-500" />}
                            {step.status === 'locked' && <Lock className="w-6 h-6 text-slate-300" />}
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-slate-900 text-sm">Step {index + 1}: {step.stepId.replace('-', ' ')}</span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${getStatusColor(step.status)}`}>
                                    {step.status}
                                </span>
                            </div>
                            {/* Funding Bar */}
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-emerald-500 transition-all duration-1000"
                                    style={{ width: `${(step.fundedAmount / step.requiredAmount) * 100}%` }}
                                />
                            </div>
                            <div className="flex justify-between mt-1 text-[10px] text-slate-400">
                                <span>${step.fundedAmount} raised</span>
                                <span>Goal: ${step.requiredAmount}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
