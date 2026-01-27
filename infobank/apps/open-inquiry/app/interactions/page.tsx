'use client';

import { useState } from 'react';
import { substances } from '@/lib/data/substances';
import { AlertTriangle, ShieldCheck, AlertCircle, Info } from 'lucide-react';

export default function InteractionsPage() {
  const [selectedSubstances, setSelectedSubstances] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubstances = substances.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.aliases.some((alias) =>
        alias.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const toggleSubstance = (id: string) => {
    setSelectedSubstances((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const checkInteractions = () => {
    if (selectedSubstances.length < 2) return null;

    const interactions: {
      dangerous: string[];
      unsafe: string[];
      caution: string[];
    } = {
      dangerous: [],
      unsafe: [],
      caution: [],
    };

    selectedSubstances.forEach((id) => {
      const substance = substances.find((s) => s.id === id);
      if (!substance) return;

      selectedSubstances.forEach((otherId) => {
        if (id === otherId) return;
        const otherSubstance = substances.find((s) => s.id === otherId);
        if (!otherSubstance) return;

        // Check if the other substance is in this substance's interaction lists
        if (
          substance.dangerousInteractions?.some((interaction) =>
            otherSubstance.name.toLowerCase().includes(interaction.toLowerCase())
          )
        ) {
          const pair = `${substance.name} + ${otherSubstance.name}`;
          if (!interactions.dangerous.includes(pair)) {
            interactions.dangerous.push(pair);
          }
        }

        if (
          substance.unsafeInteractions?.some((interaction) =>
            otherSubstance.name.toLowerCase().includes(interaction.toLowerCase())
          )
        ) {
          const pair = `${substance.name} + ${otherSubstance.name}`;
          if (!interactions.unsafe.includes(pair)) {
            interactions.unsafe.push(pair);
          }
        }

        if (
          substance.cautionInteractions?.some((interaction) =>
            otherSubstance.name.toLowerCase().includes(interaction.toLowerCase())
          )
        ) {
          const pair = `${substance.name} + ${otherSubstance.name}`;
          if (!interactions.caution.includes(pair)) {
            interactions.caution.push(pair);
          }
        }
      });
    });

    return interactions;
  };

  const interactionResults = checkInteractions();

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Interaction Checker
          </h1>
          <p className="text-xl text-slate-400">
            Check for dangerous combinations between substances. Select 2 or more
            substances to see potential interactions.
          </p>
        </div>

        {/* Important Warning */}
        <div className="mb-8 bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
          <h2 className="font-semibold mb-2 text-amber-400 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Important Limitations
          </h2>
          <ul className="text-amber-200 text-sm space-y-1 list-disc list-inside">
            <li>
              This checker provides general guidance but cannot account for individual
              factors
            </li>
            <li>Absence of warnings does not guarantee safety</li>
            <li>
              Dosage, timing, and individual health status significantly affect risk
            </li>
            <li>Always research specific combinations thoroughly</li>
            <li>When in doubt, avoid mixing substances</li>
          </ul>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Substance Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Select Substances</h2>

            <input
              type="text"
              placeholder="Search substances..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-purple-500 mb-4"
            />

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 max-h-96 overflow-y-auto">
              {filteredSubstances.length === 0 ? (
                <p className="text-slate-400 text-sm">No substances found</p>
              ) : (
                <div className="space-y-2">
                  {filteredSubstances.map((substance) => (
                    <label
                      key={substance.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSubstances.includes(substance.id)}
                        onChange={() => toggleSubstance(substance.id)}
                        className="w-4 h-4 rounded border-slate-600 text-purple-500 focus:ring-purple-500"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-slate-200">
                          {substance.name}
                        </p>
                        {substance.aliases.length > 0 && (
                          <p className="text-xs text-slate-500">
                            {substance.aliases.slice(0, 2).join(', ')}
                          </p>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <p className="text-sm text-slate-400 mt-4">
              Selected: {selectedSubstances.length} substance
              {selectedSubstances.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Interaction Results</h2>

            {selectedSubstances.length < 2 ? (
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
                <Info className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                <p className="text-slate-400">
                  Select at least 2 substances to check for interactions
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Selected substances list */}
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-purple-400">
                    Checking combinations of:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSubstances.map((id) => {
                      const substance = substances.find((s) => s.id === id);
                      return (
                        <span
                          key={id}
                          className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                        >
                          {substance?.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Dangerous */}
                {interactionResults && interactionResults.dangerous.length > 0 && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                    <h3 className="font-semibold mb-3 text-red-400 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Dangerous Combinations
                    </h3>
                    <p className="text-red-200 text-sm mb-3">
                      These combinations may be life-threatening. Avoid completely.
                    </p>
                    <ul className="space-y-1 text-red-200">
                      {interactionResults.dangerous.map((interaction, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                          {interaction}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Unsafe */}
                {interactionResults && interactionResults.unsafe.length > 0 && (
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                    <h3 className="font-semibold mb-3 text-orange-400 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Unsafe Combinations
                    </h3>
                    <p className="text-orange-200 text-sm mb-3">
                      These combinations have increased risks and should be avoided.
                    </p>
                    <ul className="space-y-1 text-orange-200">
                      {interactionResults.unsafe.map((interaction, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          {interaction}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Caution */}
                {interactionResults && interactionResults.caution.length > 0 && (
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                    <h3 className="font-semibold mb-3 text-yellow-400 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Caution Required
                    </h3>
                    <p className="text-yellow-200 text-sm mb-3">
                      Use extreme caution with these combinations. Research thoroughly
                      first.
                    </p>
                    <ul className="space-y-1 text-yellow-200">
                      {interactionResults.caution.map((interaction, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                          {interaction}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Safe */}
                {interactionResults &&
                  interactionResults.dangerous.length === 0 &&
                  interactionResults.unsafe.length === 0 &&
                  interactionResults.caution.length === 0 && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                      <h3 className="font-semibold mb-3 text-green-400 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5" />
                        No Known Dangerous Interactions
                      </h3>
                      <p className="text-green-200 text-sm">
                        Our database does not list specific dangerous interactions for
                        this combination. However, this does not guarantee safety.
                        Always research thoroughly and start with low doses when
                        combining substances.
                      </p>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
