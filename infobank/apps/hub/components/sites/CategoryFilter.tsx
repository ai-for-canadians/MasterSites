'use client';

import { categories } from '@/lib/data/categories';

interface CategoryFilterProps {
  selected: string;
  onChange: (categoryId: string) => void;
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2">
      <button
        onClick={() => onChange('all')}
        className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
          selected === 'all'
            ? 'bg-amber-500 text-slate-900'
            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
            selected === category.id
              ? 'bg-amber-500 text-slate-900'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
