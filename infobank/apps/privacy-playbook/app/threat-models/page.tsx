import { EyeOff, Shield, Target, User } from 'lucide-react';

export default function ThreatModelsPage() {
    const models = [
        {
            id: 'general',
            name: 'The Average Citizen',
            description: 'Primary risk is data harvesting, identity theft, and targeted advertising.',
            priority: ['Use a password manager', 'Setup 2FA', 'Strong browser privacy']
        },
        {
            id: 'journalist',
            name: 'Journalists & Activists',
            name_accent: 'High Risk',
            description: 'Primary risk is state surveillance, doxxing, and physical device seizure.',
            priority: ['Encrypted comms (Signal)', 'Burner devices', 'Metadata scrubbing']
        }
    ];

    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-slate-50">Threat Modeling</h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Who are you protecting yourself from? Tailor your security to your actual risk level.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {models.map(model => (
                        <div key={model.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target className="w-20 h-20 text-cyan-500" />
                            </div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-500">
                                    <User className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-50">{model.name}</h3>
                            </div>
                            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
                                {model.description}
                            </p>

                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Top Priorities</h4>
                                <ul className="space-y-3">
                                    {model.priority.map(step => (
                                        <li key={step} className="flex items-center gap-3 text-slate-200">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-cyan-500/5 p-10 rounded-3xl border border-dashed border-cyan-500/30 text-center">
                    <h3 className="text-xl font-bold text-slate-50 mb-4">Building a custom model</h3>
                    <p className="text-slate-400 mb-0 max-w-xl mx-auto">
                        Consider: What data do I have? Who wants it? How hard will they work to get it? What happens if they succeed?
                    </p>
                </div>
            </div>
        </div>
    );
}
