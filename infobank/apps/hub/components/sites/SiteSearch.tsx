import { Search } from 'lucide-react';

interface SiteSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function SiteSearch({ value, onChange }: SiteSearchProps) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search sites..."
        className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-12 pr-4 py-3 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
      />
    </div>
  );
}
