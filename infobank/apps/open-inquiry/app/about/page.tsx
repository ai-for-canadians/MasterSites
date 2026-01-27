import { FlaskConical, Target, BookOpen, Shield, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About OpenInquiry</h1>

        <div className="prose prose-invert max-w-none">
          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-8 h-8 text-purple-400" />
              Our Mission
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                OpenInquiry exists to provide rigorous, evidence-based information on
                psychoactive substances that mainstream sources often overlook or
                misrepresent. We believe informed decision-making requires access to
                accurate, unbiased information.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We neither encourage nor condemn substance use. Our role is to present
                the scientific evidence clearly, honestly, and comprehensively so
                individuals can make their own informed choices.
              </p>
            </div>
          </section>

          {/* Methodology */}
          <section id="methodology" className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <FlaskConical className="w-8 h-8 text-purple-400" />
              Methodology
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">
                  Evidence Grading System
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>
                    <strong className="text-green-400">Grade A:</strong> Multiple
                    high-quality RCTs and systematic reviews
                  </li>
                  <li>
                    <strong className="text-cyan-400">Grade B:</strong> Several
                    controlled studies with consistent findings
                  </li>
                  <li>
                    <strong className="text-yellow-400">Grade C:</strong> Limited
                    controlled research, primarily observational data
                  </li>
                  <li>
                    <strong className="text-orange-400">Grade D:</strong> Mostly
                    anecdotal evidence and case reports
                  </li>
                  <li>
                    <strong className="text-red-400">Grade F:</strong> Minimal
                    scientific data available
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">
                  Risk Assessment
                </h3>
                <p className="text-slate-300 mb-3">
                  We evaluate substances across multiple dimensions:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Physiological risk (organ damage, overdose potential)</li>
                  <li>Psychological risk (mental health impacts)</li>
                  <li>Addiction potential (dependence and withdrawal)</li>
                  <li>Interaction dangers (combinations with other substances)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">
                  Data Sources
                </h3>
                <p className="text-slate-300">
                  All information is derived from peer-reviewed academic research,
                  clinical trials, government research agencies, and established
                  pharmacological databases. We cite all sources and update entries as
                  new research emerges.
                </p>
              </div>
            </div>
          </section>

          {/* Sources */}
          <section id="sources" className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-purple-400" />
              Primary Sources
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <ul className="space-y-4 text-slate-300">
                <li>
                  <strong className="text-purple-400">PubMed / MEDLINE:</strong>{' '}
                  Peer-reviewed biomedical literature
                </li>
                <li>
                  <strong className="text-purple-400">Clinical trial registries:</strong>{' '}
                  ClinicalTrials.gov, EU Clinical Trials Register
                </li>
                <li>
                  <strong className="text-purple-400">Research institutions:</strong>{' '}
                  Johns Hopkins, Imperial College London, MAPS, Heffter Research
                  Institute
                </li>
                <li>
                  <strong className="text-purple-400">Pharmacological databases:</strong>{' '}
                  PsychonautWiki, TiHKAL, PiHKAL
                </li>
                <li>
                  <strong className="text-purple-400">Government agencies:</strong> NIH,
                  FDA, Health Canada, UK Advisory Council on the Misuse of Drugs
                </li>
              </ul>
            </div>
          </section>

          {/* Harm Reduction Focus */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-8 h-8 text-purple-400" />
              Harm Reduction Philosophy
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                We approach substance use through a harm reduction lens. This means:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>
                  Accepting that substance use occurs and will continue to occur
                </li>
                <li>
                  Prioritizing safety information over moral judgments
                </li>
                <li>Providing practical, actionable guidance to reduce risks</li>
                <li>Respecting individual autonomy and informed choice</li>
                <li>
                  Acknowledging that abstinence is not realistic or desired by everyone
                </li>
              </ul>
            </div>
          </section>

          {/* Independence */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-8 h-8 text-purple-400" />
              Independence
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                OpenInquiry is completely independent. We receive no funding from
                pharmaceutical companies, advocacy organizations, or government
                agencies.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our only agenda is providing accurate information based on the best
                available scientific evidence.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Full Disclaimer</h2>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
              <div className="text-amber-200 space-y-4">
                <p>
                  <strong>Educational Information Only:</strong> OpenInquiry provides
                  educational information about psychoactive substances for informational
                  and harm reduction purposes. This is not medical advice.
                </p>
                <p>
                  <strong>Not Medical Advice:</strong> Nothing on this site constitutes
                  medical advice or should be used to diagnose, treat, cure, or prevent
                  any disease. Always consult qualified healthcare professionals for
                  medical decisions.
                </p>
                <p>
                  <strong>Legal Status:</strong> Many substances discussed are illegal
                  in most jurisdictions. We do not encourage illegal activity. Always
                  research and comply with laws in your area.
                </p>
                <p>
                  <strong>Accuracy:</strong> While we strive for accuracy, information
                  may contain errors or become outdated as new research emerges. Always
                  verify information from multiple sources.
                </p>
                <p>
                  <strong>Risk:</strong> All psychoactive substances carry risks. No use
                  is completely safe. If you choose to use substances, prioritize safety
                  and harm reduction practices.
                </p>
                <p>
                  <strong>Individual Variation:</strong> Effects vary significantly
                  between individuals due to genetics, health status, medications, and
                  other factors. Information here describes typical responses but cannot
                  predict individual experiences.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
