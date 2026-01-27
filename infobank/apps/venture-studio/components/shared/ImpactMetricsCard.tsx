'use client';

import { ImpactMetrics } from '@/types';
import { Users, Briefcase, Heart, Clock } from 'lucide-react';

interface ImpactMetricsCardProps {
    metrics: ImpactMetrics;
}

export function ImpactMetricsCard({ metrics }: ImpactMetricsCardProps) {
    return (
        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
            <h3 className="text-emerald-900 font-bold mb-6 text-sm uppercase tracking-wide">Community Impact Delivered</h3>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-emerald-600 mb-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">People Served</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900">{metrics.peopleServed.toLocaleString()}</div>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-emerald-600 mb-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">Jobs Created</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900">{metrics.jobsCreated}</div>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-emerald-600 mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">Volunteer Hrs</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900">{metrics.volunteerHours.toLocaleString()}</div>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-emerald-600 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">Investment</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900">${metrics.communityInvestment.toLocaleString()}</div>
                </div>
            </div>

            {metrics.customMetrics.length > 0 && (
                <div className="border-t border-emerald-100 pt-6 space-y-2">
                    {metrics.customMetrics.map((m, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                            <span className="text-emerald-700 font-medium">{m.label}</span>
                            <span className="font-bold text-slate-900">{m.value}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
