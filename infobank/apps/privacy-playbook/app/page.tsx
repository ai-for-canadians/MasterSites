import Link from 'next/link';
import { Hero } from '@/components/home/Hero';
import { guides, tools } from '@/lib/data/playbook';
import { Shield, Key, Globe, EyeOff, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />

      {/* Featured Guides */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-50">Hardening Guides</h2>
            <p className="text-slate-400">Step-by-step instructions to secure your digital life.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                href={`/guides/${guide.slug}`}
                className="group p-8 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all hover:bg-slate-800"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
                    {guide.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                    <span>Difficulty: {guide.difficulty}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {guide.summary}
                </p>
                <div className="flex items-center text-cyan-500 font-bold gap-2">
                  View Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Tools Grid */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-50">Recommended Tools</h2>
              <p className="text-slate-400">The software we trust and use daily.</p>
            </div>
            <Link href="/tools" className="text-cyan-500 font-bold flex items-center gap-2 hover:text-cyan-400 transition-colors">
              View all tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div key={tool.id} className="p-6 bg-slate-900 border border-slate-800 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  {tool.isOpenSource && (
                    <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
                      Open Source
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-50 mb-2">{tool.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{tool.summary}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-500">{tool.pricing}</span>
                  <a href={tool.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-cyan-500 hover:text-cyan-400">
                    WEBSITE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Models Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

          <EyeOff className="w-12 h-12 text-cyan-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-50 mb-4">Who is your adversary?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            You can't defend against everything. Effective privacy requires identifying your specific risks and prioritizing fixes that matter most for your situation.
          </p>
          <Link href="/threat-models" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20">
            Build your Threat Model
          </Link>
        </div>
      </section>
    </div>
  );
}
