'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ClipboardCheck, ChevronRight, RotateCcw } from 'lucide-react';
import Link from 'next/link';

interface Question {
    id: string;
    area: string;
    question: string;
    options: { text: string; score: number }[];
}

const questions: Question[] = [
    // Physical
    {
        id: 'chair-stand',
        area: 'Physical',
        question: 'Can you stand up from a chair without using your hands?',
        options: [
            { text: 'Easily, multiple times', score: 3 },
            { text: 'Yes, but it takes effort', score: 2 },
            { text: 'Only with some support', score: 1 },
            { text: 'No, I need to use my hands', score: 0 },
        ],
    },
    {
        id: 'stairs',
        area: 'Physical',
        question: 'Can you climb 3 flights of stairs without stopping?',
        options: [
            { text: 'Easily, not winded', score: 3 },
            { text: 'Yes, but need a moment to catch breath', score: 2 },
            { text: 'Need to stop once or twice', score: 1 },
            { text: 'Cannot do this', score: 0 },
        ],
    },
    {
        id: 'balance',
        area: 'Physical',
        question: 'Can you stand on one leg for 30 seconds with eyes open?',
        options: [
            { text: 'Yes, easily on either leg', score: 3 },
            { text: 'Yes, but it\'s challenging', score: 2 },
            { text: 'Only for 10-20 seconds', score: 1 },
            { text: 'Less than 10 seconds', score: 0 },
        ],
    },
    // Cognitive
    {
        id: 'names',
        area: 'Cognitive',
        question: 'Do you have trouble remembering names of people you recently met?',
        options: [
            { text: 'Rarely or never', score: 3 },
            { text: 'Occasionally', score: 2 },
            { text: 'Frequently', score: 1 },
            { text: 'Almost always', score: 0 },
        ],
    },
    {
        id: 'focus',
        area: 'Cognitive',
        question: 'Can you focus on a task for 30+ minutes without distraction?',
        options: [
            { text: 'Easily', score: 3 },
            { text: 'Usually, with some effort', score: 2 },
            { text: 'It\'s difficult', score: 1 },
            { text: 'Very rarely', score: 0 },
        ],
    },
    // Sleep
    {
        id: 'sleep-quality',
        area: 'Sleep',
        question: 'How often do you wake up feeling refreshed?',
        options: [
            { text: 'Almost every day', score: 3 },
            { text: 'Most days', score: 2 },
            { text: 'Rarely', score: 1 },
            { text: 'Almost never', score: 0 },
        ],
    },
    // Energy
    {
        id: 'energy',
        area: 'Energy',
        question: 'How is your energy level throughout the day?',
        options: [
            { text: 'Consistent and good all day', score: 3 },
            { text: 'Good with an afternoon dip', score: 2 },
            { text: 'Often tired by afternoon', score: 1 },
            { text: 'Low energy most of the time', score: 0 },
        ],
    },
    // Metabolic
    {
        id: 'weight',
        area: 'Metabolic',
        question: 'Is your waist circumference within healthy range? (Men <40", Women <35")',
        options: [
            { text: 'Yes, well within range', score: 3 },
            { text: 'At the upper limit', score: 2 },
            { text: 'Slightly above', score: 1 },
            { text: 'Significantly above', score: 0 },
        ],
    },
];

export default function AssessPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (score: number) => {
        const newAnswers = { ...answers, [questions[currentQuestion].id]: score };
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 3;
    const percentage = Math.round((totalScore / maxScore) * 100);

    const getResultLevel = () => {
        if (percentage >= 80) return { level: 'Excellent', color: 'emerald', message: 'Your functional health appears strong. Focus on maintenance and optimization.' };
        if (percentage >= 60) return { level: 'Good', color: 'blue', message: 'Solid foundation with room for improvement in some areas.' };
        if (percentage >= 40) return { level: 'Moderate', color: 'amber', message: 'Some areas need attention. Consider prioritizing interventions.' };
        return { level: 'Needs Attention', color: 'red', message: 'Multiple areas could benefit from focused intervention. Consider consulting a healthcare provider.' };
    };

    const reset = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResults(false);
    };

    const result = getResultLevel();

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <ClipboardCheck className="w-4 h-4" />
                            Quick Assessment
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-6">
                            Healthspan Check
                        </h1>
                        <p className="text-lg text-slate-400">
                            A quick self-assessment of functional health markers. Not a medical test—just a starting point for reflection.
                        </p>
                    </div>
                </section>

                {/* Assessment */}
                <section className="pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        {!showResults ? (
                            <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
                                {/* Progress */}
                                <div className="mb-8">
                                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                                        <span>Question {currentQuestion + 1} of {questions.length}</span>
                                        <span>{questions[currentQuestion].area}</span>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded-full">
                                        <div
                                            className="h-2 bg-emerald-500 rounded-full transition-all"
                                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Question */}
                                <h2 className="text-xl font-semibold text-slate-50 mb-6">
                                    {questions[currentQuestion].question}
                                </h2>

                                {/* Options */}
                                <div className="space-y-3">
                                    {questions[currentQuestion].options.map((option, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleAnswer(option.score)}
                                            className="w-full flex items-center justify-between p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-left hover:border-emerald-500/50 hover:bg-slate-700 transition-colors"
                                        >
                                            <span className="text-slate-300">{option.text}</span>
                                            <ChevronRight className="w-5 h-5 text-slate-500" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8 text-center">
                                {/* Score */}
                                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-${result.color}-500/20 mb-6`}>
                                    <span className={`text-4xl font-bold text-${result.color}-400`}>
                                        {percentage}%
                                    </span>
                                </div>

                                <h2 className={`text-2xl font-bold text-${result.color}-400 mb-2`}>
                                    {result.level}
                                </h2>
                                <p className="text-slate-400 mb-8">{result.message}</p>

                                {/* Next Steps */}
                                <div className="grid gap-4 text-left mb-8">
                                    <Link
                                        href="/function/physical"
                                        className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors"
                                    >
                                        <span className="text-slate-300">Explore Physical Function</span>
                                        <ChevronRight className="w-5 h-5 text-slate-500" />
                                    </Link>
                                    <Link
                                        href="/age/40s"
                                        className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors"
                                    >
                                        <span className="text-slate-300">View Age-Specific Guide</span>
                                        <ChevronRight className="w-5 h-5 text-slate-500" />
                                    </Link>
                                    <Link
                                        href="/biomarkers"
                                        className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors"
                                    >
                                        <span className="text-slate-300">Check Biomarkers to Track</span>
                                        <ChevronRight className="w-5 h-5 text-slate-500" />
                                    </Link>
                                </div>

                                <button
                                    onClick={reset}
                                    className="flex items-center gap-2 mx-auto text-slate-400 hover:text-slate-300 transition-colors"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                    Take Again
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
