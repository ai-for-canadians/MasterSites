'use client';

import { Contributor } from '@/types';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface OwnershipChartProps {
    contributors: Contributor[];
    founders: { name: string; percentage: number }[];
    totalSold: number;
}

export function OwnershipChart({ contributors, founders, totalSold }: OwnershipChartProps) {
    // 1. Founder slice
    // 2. Top 3 Contributors
    // 3. "Other Contributors"
    // 4. "Available"

    const sortedContributors = [...contributors].sort((a, b) => b.ownershipPercentage - a.ownershipPercentage);
    const topContributors = sortedContributors.slice(0, 3);
    const otherContributorsPercentage = sortedContributors.slice(3).reduce((sum, c) => sum + c.ownershipPercentage, 0);

    const availablePercentage = 100 - totalSold - founders.reduce((sum, f) => sum + f.percentage, 0);

    const data = [
        ...founders.map(f => ({ name: `Founder (${f.name})`, value: f.percentage, color: '#f59e0b' })), // Amber for founders
        ...topContributors.map(c => ({ name: c.name, value: c.ownershipPercentage, color: '#10b981' })), // Emerald for top
        ...(otherContributorsPercentage > 0 ? [{ name: 'Other Contributors', value: otherContributorsPercentage, color: '#34d399' }] : []), // Lighter emerald
        { name: 'Available', value: Math.max(0, availablePercentage), color: '#e2e8f0' } // Slate-200 for available
    ];

    return (
        <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ fontSize: '12px', fontWeight: 'bold', color: '#0f172a' }}
                        formatter={(value: number) => [`${value.toFixed(1)}%`, 'Ownership']}
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-3xl font-bold text-slate-900">{totalSold.toFixed(1)}%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sold</div>
            </div>
        </div>
    );
}
