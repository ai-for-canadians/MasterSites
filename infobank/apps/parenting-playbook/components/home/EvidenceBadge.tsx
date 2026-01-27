import { EvidenceRating } from '@/types';
import { Microscope } from 'lucide-react';

interface EvidenceBadgeProps {
    rating: EvidenceRating;
}

export function EvidenceBadge({ rating }: EvidenceBadgeProps) {
    const colors = {
        Strong: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        Moderate: 'bg-cyan-100 text-cyan-800 border-cyan-200',
        Mixed: 'bg-amber-100 text-amber-800 border-amber-200',
        Weak: 'bg-slate-100 text-slate-600 border-slate-200',
    };

    return (
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${colors[rating]}`}>
            <Microscope className="w-3.5 h-3.5" />
            Evidence: {rating}
        </div>
    );
}
