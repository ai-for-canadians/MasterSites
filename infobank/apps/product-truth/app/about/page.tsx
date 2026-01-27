import { Shield, Target, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Product<span className="text-emerald-500">Truth</span>
          </h1>
          <p className="text-xl text-slate-400">
            Your trusted source for transparent product ingredient analysis
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-500/10 to-slate-800 border border-emerald-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <Target className="w-8 h-8 text-emerald-500 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  We believe everyone deserves to know what's in the products they use every day.
                  ProductTruth was created to provide transparent, science-backed information about
                  product ingredients and their potential health impacts.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Our goal is to empower consumers to make informed decisions about the personal
                  care and household products they choose for themselves and their families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <Shield className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Evidence-Based</h3>
              <p className="text-slate-400">
                All our safety ratings are based on peer-reviewed scientific research,
                regulatory guidelines, and expert analysis.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <Users className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-slate-400">
                We provide clear explanations of our methodology and cite all sources,
                so you can verify the information yourself.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <Award className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Independence</h3>
              <p className="text-slate-400">
                We are not affiliated with any product manufacturers and provide
                unbiased analysis free from commercial influence.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <Shield className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-slate-400">
                Complex scientific information is presented in an easy-to-understand
                format accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Our Methodology</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                  Safety Rating System
                </h3>
                <p className="text-slate-300 mb-3">
                  We evaluate ingredients on a 5-point scale from "Safe" to "Avoid" based on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-400 ml-4">
                  <li>Peer-reviewed scientific studies</li>
                  <li>Regulatory assessments (FDA, EU, Health Canada)</li>
                  <li>Toxicology databases</li>
                  <li>Expert scientific consensus</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                  Evidence Quality
                </h3>
                <p className="text-slate-300 mb-3">
                  Each rating includes an evidence quality grade (A-F) indicating:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-400 ml-4">
                  <li>A: Strong evidence from multiple high-quality studies</li>
                  <li>B: Good evidence from well-designed studies</li>
                  <li>C: Moderate evidence with some limitations</li>
                  <li>D: Limited or conflicting evidence</li>
                  <li>F: Insufficient evidence available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                  Continuous Updates
                </h3>
                <p className="text-slate-300">
                  We regularly review and update our database as new research emerges
                  to ensure our information remains current and accurate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-yellow-400">Important Disclaimer</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            The information provided on ProductTruth is for educational purposes only and
            is not intended as medical or health advice. Always consult with qualified
            healthcare professionals regarding health concerns. Individual sensitivities
            and reactions to ingredients can vary. While we strive for accuracy, we cannot
            guarantee the completeness or currency of all information.
          </p>
        </section>
      </div>
    </div>
  );
}
