import { MessageSquare, Target, Users, BookOpen, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">About DifficultConversations</h1>

        <div className="prose prose-invert max-w-none">
          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-slate-50">
              <Target className="w-8 h-8 text-amber-500" />
              Our Mission
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                We believe that the quality of your life is determined by the quality of your relationships, and the quality of your relationships is determined by how you handle difficult conversations.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Most people avoid conflict because they don't know what to say. We provide the scripts and frameworks to replace anxiety with preparation.
              </p>
            </div>
          </section>

          {/* Methodology */}
          <section id="methodology" className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-slate-50">
              <BookOpen className="w-8 h-8 text-amber-500" />
              Methodology
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-6">
              <p className="text-slate-300">
                Our scripts are built on principles from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li><strong>Non-Violent Communication (NVC):</strong> Focusing on observations, feelings, needs, and requests.</li>
                <li><strong>Negotiation Theory:</strong> Creating win-win outcomes where possible.</li>
                <li><strong>Assertiveness Training:</strong> Expressing needs clearly without aggression.</li>
                <li><strong>Radical Candor:</strong> Caring personally while challenging directly.</li>
              </ul>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-slate-50">
              <ShieldCheck className="w-8 h-8 text-amber-500" />
              Core Principles
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-amber-500 font-bold mb-2">Clarity over Comfort</h3>
                  <p className="text-slate-300 text-sm">It's better to be awkward for 5 minutes than resentful for 5 years.</p>
                </div>
                <div>
                  <h3 className="text-amber-500 font-bold mb-2">Preparation</h3>
                  <p className="text-slate-300 text-sm">Don't wing high-stakes talks. Scripting helps reduce emotional reactivity.</p>
                </div>
                <div>
                  <h3 className="text-amber-500 font-bold mb-2">Empathy</h3>
                  <p className="text-slate-300 text-sm">Understanding the other person's perspective creates safety.</p>
                </div>
                <div>
                  <h3 className="text-amber-500 font-bold mb-2">Boundaries</h3>
                  <p className="text-slate-300 text-sm">You teach people how to treat you.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
