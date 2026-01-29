'use client';

import Link from 'next/link';
import { provinces } from '@/lib/data/provinces';
import { cities } from '@/lib/data/cities';
import { TrendingUp, TrendingDown, Minus, ArrowRight, AlertTriangle, Award, Shield, DollarSign, Smartphone, Users } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@infobank/ui';

function getTrendIcon(trend: string) {
  switch (trend) {
    case 'improving':
      return <TrendingUp className="w-4 h-4 text-emerald-400" />;
    case 'declining':
      return <TrendingDown className="w-4 h-4 text-red-400" />;
    default:
      return <Minus className="w-4 h-4 text-slate-400" />;
  }
}

function getScoreColor(score: number): string {
  if (score >= 75) return 'text-emerald-400';
  if (score >= 60) return 'text-blue-400';
  if (score >= 45) return 'text-amber-400';
  if (score >= 30) return 'text-orange-400';
  return 'text-red-400';
}

function getScoreBgColor(score: number): string {
  if (score >= 75) return 'bg-emerald-500/20 border-emerald-500/30';
  if (score >= 60) return 'bg-blue-500/20 border-blue-500/30';
  if (score >= 45) return 'bg-amber-500/20 border-amber-500/30';
  if (score >= 30) return 'bg-orange-500/20 border-orange-500/30';
  return 'bg-red-500/20 border-red-500/30';
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'provinces' | 'cities'>('provinces');

  const data = activeTab === 'provinces' ? provinces : cities;
  const sortedData = [...data].sort((a, b) => b.scores.overall - a.scores.overall);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Live Monitor
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Gov Watch <span className="text-red-500">Canada</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            The data-driven truth about public sector performance. We track modernization,
            fiscal waste, and bureaucratic efficiency across Canada's provinces and major cities.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('provinces')}
              className={cn(
                "px-6 py-3 rounded-lg font-bold transition-all",
                activeTab === 'provinces'
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              )}
            >
              Provinces
            </button>
            <button
              onClick={() => setActiveTab('cities')}
              className={cn(
                "px-6 py-3 rounded-lg font-bold transition-all",
                activeTab === 'cities'
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              )}
            >
              Major Cities
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Digital Modernization</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Metric</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Evaluating the adoption of digital ID, service automation levels, and legacy system retirement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-red-50 text-red-600">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Fiscal Waste</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Metric</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Tracking cost overruns, failed IT projects, and Auditor General findings of mismanagement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Efficiency Ratio</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Metric</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Measuring bureaucracy density: the ratio of administrative management to frontline service delivery.
              </p>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-xl font-black text-slate-900">
                {activeTab === 'provinces' ? 'Provincial Rankings' : 'Municipal Rankings'}
              </h2>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Updated Jan 2026
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <th className="py-4 px-6">Rank</th>
                    <th className="py-4 px-6">Jurisdiction</th>
                    <th className="py-4 px-6 text-center">Overall Score</th>
                    <th className="py-4 px-6 text-center hidden md:table-cell">Modernization</th>
                    <th className="py-4 px-6 text-center hidden md:table-cell">Waste Index</th>
                    <th className="py-4 px-6 text-center hidden lg:table-cell">Efficiency</th>
                    <th className="py-4 px-6 text-center">Trend</th>
                    <th className="py-4 px-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sortedData.map((entity, index) => (
                    <tr
                      key={entity.id}
                      className="hover:bg-slate-50 transition-colors group"
                    >
                      <td className="py-4 px-6">
                        <span className="font-black text-slate-300 text-lg">#{index + 1}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            {entity.flag}
                          </span>
                          <div>
                            <div className="font-bold text-slate-900">{entity.name}</div>
                            <div className="text-xs text-slate-500 font-medium">
                              Led by {entity.leader.name} ({entity.leader.party})
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl font-black text-lg bg-slate-900 text-white shadow-lg shadow-slate-200">
                          {entity.scores.overall}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center hidden md:table-cell">
                        <span className={`font-bold ${getScoreColor(entity.scores.modernization)}`}>
                          {entity.scores.modernization}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center hidden md:table-cell">
                        <span className={`font-bold ${getScoreColor(entity.scores.wasteIndex)}`}>
                          {entity.scores.wasteIndex}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center hidden lg:table-cell">
                        <span className={`font-bold ${getScoreColor(entity.scores.efficiency)}`}>
                          {entity.scores.efficiency}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          {getTrendIcon(entity.trend)}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button className="text-sm font-bold text-slate-400 group-hover:text-red-600 transition-colors inline-flex items-center gap-1">
                          Report <ArrowRight className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
