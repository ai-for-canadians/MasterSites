'use client';

import { useState, useEffect } from 'react';
import { AgentStep } from '@/types';
import { Loader2, CheckCircle2, Bot, FileText, Sparkles } from 'lucide-react';

interface StepExecutorProps {
    step: AgentStep;
    ventureName: string;
    onComplete: (artifact: string) => void;
    isCompleted?: boolean;
    existingArtifact?: string;
}

export function StepExecutor({ step, ventureName, onComplete, isCompleted, existingArtifact }: StepExecutorProps) {
    const [status, setStatus] = useState<'idle' | 'running' | 'completed'>('idle');
    const [logs, setLogs] = useState<string[]>([]);
    const [artifact, setArtifact] = useState<string | null>(null);

    // Reset state if already completed
    useEffect(() => {
        if (isCompleted && existingArtifact) {
            setStatus('completed');
            setArtifact(existingArtifact);
        }
    }, [isCompleted, existingArtifact]);

    const runStep = () => {
        setStatus('running');
        setLogs([]);

        // Simulate AI thinking and execution
        const sequence = [
            { msg: 'Initializing AI context...', delay: 500 },
            { msg: `Analyzing requirements for ${step.name}...`, delay: 1500 },
            { msg: `Querying localized data for ${ventureName}...`, delay: 3000 },
            { msg: 'Synthesizing output...', delay: 4500 },
            { msg: 'Generating artifacts...', delay: 6000 },
        ];

        let timeouts: NodeJS.Timeout[] = [];

        sequence.forEach(({ msg, delay }) => {
            const timeout = setTimeout(() => {
                setLogs(prev => [...prev, msg]);
            }, delay);
            timeouts.push(timeout);
        });

        const completionTimeout = setTimeout(() => {
            setStatus('completed');
            const result = `[AI GENERATED OUTPUT FOR ${step.name.toUpperCase()}]\n\nBased on the specific context of ${ventureName}, we have generated the following ${step.outputType}:\n\n1. Executive Summary\n2. Local Market Data\n3. Action Items\n... (Full content would appear here)`;
            setArtifact(result);
            onComplete(result);
        }, 7000);
        timeouts.push(completionTimeout);
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-start">
                <div>
                    <div className="text-xs font-mono text-zinc-500 mb-2">STEP {step.order}: {step.name.toUpperCase()}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.description}</h3>
                    <div className="flex gap-4 text-sm text-zinc-400">
                        <span className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> Cost: ${step.cost}</span>
                        <span className="flex items-center gap-1">Est. Time: {step.estimatedMinutes} mins</span>
                    </div>
                </div>

                {status === 'idle' && (
                    <button
                        onClick={runStep}
                        className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] flex items-center gap-2"
                    >
                        <Bot className="w-5 h-5" />
                        Execute Step
                    </button>
                )}
            </div>

            <div className="bg-black p-6 font-mono text-sm min-h-[300px]">
                {status === 'idle' && (
                    <div className="text-zinc-600 flex flex-col items-center justify-center h-full gap-4 pt-12">
                        <Bot className="w-12 h-12" />
                        <p>AI Agent is ready using GPT-4o model.</p>
                    </div>
                )}

                {status === 'running' && (
                    <div className="space-y-2">
                        {logs.map((log, i) => (
                            <div key={i} className="text-green-500 flex gap-2">
                                <span className="opacity-50">{'>'}</span> {log}
                            </div>
                        ))}
                        <div className="text-purple-500 animate-pulse flex gap-2">
                            <span className="opacity-50">{'>'}</span> <span className="inline-block w-2 h-4 bg-purple-500 align-middle" />
                        </div>
                    </div>
                )}

                {status === 'completed' && artifact && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-2 text-green-400 mb-4 pb-4 border-b border-zinc-800">
                            <CheckCircle2 className="w-5 h-5" />
                            Step Completed Successfully
                        </div>
                        <pre className="text-zinc-300 whitespace-pre-wrap font-sans bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                            {artifact}
                        </pre>
                        <div className="mt-6 flex justify-end">
                            <button className="text-sm text-zinc-400 hover:text-white flex items-center gap-2">
                                <FileText className="w-4 h-4" /> Download Full Artifact
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
