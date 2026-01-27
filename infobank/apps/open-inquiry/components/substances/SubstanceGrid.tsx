import type { Substance } from '@/types';
import { SubstanceCard } from './SubstanceCard';

interface SubstanceGridProps {
  substances: Substance[];
  emptyMessage?: string;
}

export function SubstanceGrid({
  substances,
  emptyMessage = 'No substances found',
}: SubstanceGridProps) {
  if (substances.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {substances.map((substance) => (
        <SubstanceCard key={substance.id} substance={substance} />
      ))}
    </div>
  );
}
