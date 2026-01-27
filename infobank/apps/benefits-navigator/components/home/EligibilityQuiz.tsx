'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface QuizResult {
    eligible: boolean;
    reason?: string;
}

export function EligibilityQuiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, boolean>>({});
    const [showResults, setShowResults] = useState(false);

    // Simplified hardcoded logic for demo
    const questions = [
        { id: 'resident', text: 'Are you a Canadian resident for tax purposes?' },
        { id: 'has_children', text: 'Do you have children under 18?' },
        { id: 'is_senior', text: 'Are you 65 or older?' },
        { id: 'low_income', text: 'Is your household income below $45,000?' },
    ];

    const handleAnswer = (answer: boolean) => {
        const currentQ = questions[step];
        const newAnswers = { ...answers, [currentQ.id]: answer };
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(prev => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const reset = () => {
        setStep(0);
        setAnswers({});
        setShowResults(false);
    };

    if (showResults) {
        const eligiblePrograms = [];
        if (answers['has_children']) eligiblePrograms.push('Canada Child Benefit');
        if (answers['is_senior']) eligiblePrograms.push('Old Age Security', 'GIS');
        if (answers['low_income']) eligiblePrograms.push('GST/HST Credit');
        if (answers['has_children'] && answers['low_income']) eligiblePrograms.push('Canada Dental Benefit');

        return (
            <div className="bg-white rounded-xl p-8 border border-emerald-100 shadow-sm text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Based on your answers...</h3>

                {eligiblePrograms.length > 0 ? (
                    <>
                        <p className="text-slate-600 mb-6">You likely qualify for the following programs:</p>
                        <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                            {eligiblePrograms.map(p => (
                                <div key={p} className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <span className="font-bold text-slate-800">{p}</span>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="mb-8">
                        <p className="text-slate-600">We couldn&apos;t match you to specific major benefits based on these 4 questions, but many more niche programs exist.</p>
                    </div>
                )}

                <button
                    onClick={reset}
                    className="text-emerald-600 font-bold hover:text-emerald-700 flex items-center justify-center gap-2 mx-auto"
                >
                    <RotateCcw className="w-4 h-4" /> Start Over
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl p-8 border border-emerald-100 shadow-sm max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Question {step + 1} of {questions.length}</span>
                <div className="flex gap-1">
                    {questions.map((_, i) => (
                        <div key={i} className={`h-1.5 w-8 rounded-full ${i <= step ? 'bg-emerald-500' : 'bg-slate-100'}`} />
                    ))}
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">{questions[step].text}</h3>

            <div className="grid grid-cols-2 gap-4">
                <button
                    onClick={() => handleAnswer(true)}
                    className="py-4 rounded-xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 font-bold text-slate-700 hover:text-emerald-700 transition-all"
                >
                    Yes
                </button>
                <button
                    onClick={() => handleAnswer(false)}
                    className="py-4 rounded-xl border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50 font-bold text-slate-700 transition-all"
                >
                    No
                </button>
            </div>
        </div>
    );
}
