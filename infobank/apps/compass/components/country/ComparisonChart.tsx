'use client';

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import { Country } from '@/types';

interface ComparisonChartProps {
    country: Country;
}

export function ComparisonChart({ country }: ComparisonChartProps) {
    const data = [
        { subject: 'Democracy', A: country.scores.democracy, fullMark: 100 },
        { subject: 'Corruption', A: country.scores.corruption, fullMark: 100 },
        { subject: 'Equality', A: country.scores.equality, fullMark: 100 },
        { subject: 'Development', A: country.scores.development, fullMark: 100 },
        { subject: 'Press Freedom', A: country.scores.pressFreedom, fullMark: 100 },
        { subject: 'Governance', A: country.scores.governance, fullMark: 100 },
    ];

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                        name={country.name}
                        dataKey="A"
                        stroke="#0ea5e9"
                        strokeWidth={2}
                        fill="#0ea5e9"
                        fillOpacity={0.3}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }}
                        itemStyle={{ color: '#38bdf8' }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
