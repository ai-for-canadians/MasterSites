'use client';

import { useState, useMemo } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { IngredientCard } from '@/components/IngredientCard';
import { ingredients } from '@/lib/data/ingredients';
import { SafetyRating } from '@/types';
import { Filter } from 'lucide-react';

export default function IngredientsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRating, setSelectedRating] = useState<SafetyRating | 'all'>('all');

  const filteredIngredients = useMemo(() => {
    let filtered = ingredients;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        ingredient =>
          ingredient.name.toLowerCase().includes(query) ||
          ingredient.description.toLowerCase().includes(query) ||
          ingredient.function?.toLowerCase().includes(query) ||
          ingredient.otherNames?.some(name =>
            name.toLowerCase().includes(query)
          )
      );
    }

    if (selectedRating !== 'all') {
      filtered = filtered.filter(
        ingredient => ingredient.safetyRating === selectedRating
      );
    }

    return filtered;
  }, [searchQuery, selectedRating]);

  const ratingOptions: Array<{ value: SafetyRating | 'all'; label: string; color: string }> = [
    { value: 'all', label: 'All Ratings', color: 'slate' },
    { value: 'safe', label: 'Safe', color: 'emerald' },
    { value: 'low_concern', label: 'Low Concern', color: 'green' },
    { value: 'moderate_concern', label: 'Moderate', color: 'yellow' },
    { value: 'high_concern', label: 'High Concern', color: 'orange' },
    { value: 'avoid', label: 'Avoid', color: 'red' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Ingredients Database</h1>
        <p className="text-slate-400">
          Comprehensive ingredient safety information based on scientific research
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <SearchBar
          placeholder="Search ingredients by name, function, or alternative names..."
          onSearch={setSearchQuery}
          initialValue={searchQuery}
        />
      </div>

      {/* Rating Filters */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-slate-300 mb-3">Filter by Safety Rating</h3>
        <div className="flex flex-wrap gap-2">
          {ratingOptions.map(option => (
            <button
              key={option.value}
              onClick={() => setSelectedRating(option.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedRating === option.value
                  ? `bg-${option.color}-500 text-white`
                  : `bg-slate-800 border border-slate-700 text-slate-300 hover:border-${option.color}-500`
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-slate-400">
          Showing {filteredIngredients.length} of {ingredients.length} ingredients
        </p>
        {(searchQuery || selectedRating !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedRating('all');
            }}
            className="text-emerald-500 hover:text-emerald-400 text-sm font-medium"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Ingredients Grid */}
      {filteredIngredients.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIngredients.map(ingredient => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-400 mb-2">
            No ingredients found
          </h3>
          <p className="text-slate-500">
            Try adjusting your filters or search query
          </p>
        </div>
      )}
    </div>
  );
}
