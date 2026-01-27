import { Shield, Lock, Eye, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">About Privacy Playbook</h1>

        <div className="prose prose-invert max-w-none">
          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-slate-50">
              <Shield className="w-8 h-8 text-cyan-500" />
              Our Mission
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                In an era of ubiquitous surveillance and data brokers, digital privacy is no longer a luxury—it's a requirement for personal sovereignty.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Privacy Playbook aims to bridge the gap between "I have nothing to hide" and the complex world of encryption and metadata. We provide actionable, step-by-step guides that anyone can follow.
              </p>
            </div>
          </section>

          {/* Principles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-slate-50">Core Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                <Lock className="w-6 h-6 text-cyan-500 mb-3" />
                <h3 className="text-lg font-bold text-slate-50 mb-2">Encryption First</h3>
                <p className="text-slate-400 text-sm">We prioritize tools that use end-to-end encryption by default.</p>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                <Eye className="w-6 h-6 text-cyan-500 mb-3" />
                <h3 className="text-lg font-bold text-slate-50 mb-2">Open Source</h3>
                <p className="text-slate-400 text-sm">Trust is built through transparency. We prefer tools that can be audited.</p>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                <Zap className="w-6 h-6 text-cyan-500 mb-3" />
                <h3 className="text-lg font-bold text-slate-50 mb-2">Practicality</h3>
                <p className="text-slate-400 text-sm">Security that is too difficult to use won't be used. We focus on usable privacy.</p>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                <Shield className="w-6 h-6 text-cyan-500 mb-3" />
                <h3 className="text-lg font-bold text-slate-50 mb-2">No Tracking</h3>
                <p className="text-slate-400 text-sm">This site exists to delete trackers, not add them. No cookies, no ads.</p>
              </div>
            </div>
          </section>

          {/* Accountability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-50">Independence</h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed">
                We do not accept sponsorships from VPN providers or security companies. Recommendations are based on technical audits and community reputation.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
