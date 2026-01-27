import type { CategoryColor } from '@/types';

export function getCategoryColorClass(color: CategoryColor): string {
  const colors = {
    emerald: 'text-emerald-400 bg-emerald-500/20',
    blue: 'text-blue-400 bg-blue-500/20',
    purple: 'text-purple-400 bg-purple-500/20',
    red: 'text-red-400 bg-red-500/20',
    amber: 'text-amber-400 bg-amber-500/20',
  };
  return colors[color];
}

export function getStatusBadgeClass(status: string): string {
  const statuses: Record<string, string> = {
    live: 'bg-emerald-500/20 text-emerald-400',
    coming_soon: 'bg-slate-700 text-slate-400',
    beta: 'bg-amber-500/20 text-amber-400',
  };
  return statuses[status] ?? 'bg-slate-700 text-slate-400';
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    live: 'Live',
    coming_soon: 'Coming Soon',
    beta: 'Beta',
  };
  return labels[status] || 'Coming Soon';
}
