import { Zap, Target, ShieldCheck, Search } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">About AI Tools Guide</h1>

        <div className="prose prose-invert max-w-none">
          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-slate-50">
              <Target className="w-8 h-8 text-indigo-500" />
              Our Mission
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                The AI space is moving too fast. Every day there's a new "game-changer" on Twitter.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our mission is to slow down, actually test the tools, and tell you which ones are worth your time and money. We focus on utility, not hype.
              </p>
            </div>
          </section>

          {/* Methodology */}
          <section id="methodology" className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-slate-50">
              <Search className="w-8 h-8 text-indigo-500" />
              How We Review
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-6">
              <p className="text-slate-300">
                We rate every tool on a 1-10 scale based on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li><strong>Utility:</strong> Does it solve a real problem better than non-AI tools?</li>
                <li><strong>Usability:</strong> Is the UX hostile or helpful?</li>
                <li><strong>Value:</strong> Is the pricing justified?</li>
                <li><strong>Honesty:</strong> Does the marketing match the output?</li>
              </ul>
            </div>
          </section>

          {/* Ethics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-slate-50">
              <ShieldCheck className="w-8 h-8 text-indigo-500" />
              Ethics & Independence
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="space-y-4">
                <p className="text-slate-300">
                  <strong>No Paid Reviews:</strong> We do not accept payment to review or feature specific tools.
                </p>
                <p className="text-slate-300">
                  <strong>Affiliates:</strong> To keep this site free, we may use affiliate links. If you click a link and buy a tool, we may earn a commission. However, this does not affect our scoring. A bad tool is a bad tool, even if it has a great affiliate program.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
