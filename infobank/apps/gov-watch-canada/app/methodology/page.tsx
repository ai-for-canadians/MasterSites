import Link from 'next/link';
import { ArrowLeft, ExternalLink, AlertTriangle } from 'lucide-react';

const indices = [
  {
    name: 'V-Dem (Varieties of Democracy)',
    organization: 'V-Dem Institute, University of Gothenburg',
    description: 'The most comprehensive democracy measurement project, coding 400+ indicators for 202 countries from 1789 to present.',
    methodology: 'Expert coding by 3,700+ country experts, aggregated using Bayesian item response theory models.',
    weight: '30%',
    used_for: 'Democracy Score',
    url: 'https://v-dem.net',
    limitations: [
      'Relies on expert judgment (subjective)',
      'Western liberal democracy definition may not capture all governance models',
      'Annual updates mean lag in capturing rapid changes',
    ],
    biases: [
      'Liberal democracy framework centers Western political philosophy',
      'Academic methodology may not capture lived citizen experience',
    ],
  },
  {
    name: 'Transparency International CPI',
    organization: 'Transparency International',
    description: 'The most widely cited corruption index, measuring perceived public sector corruption.',
    methodology: 'Aggregates 13 surveys from 12 institutions covering business executives and country experts.',
    weight: '15%',
    used_for: 'Corruption Score (inverted)',
    url: 'https://transparency.org/cpi',
    limitations: [
      'Measures perception, not actual corruption levels',
      'Business-focused surveys miss citizen experience',
      'Cannot capture successful hidden corruption',
      'Public sector only - misses private sector corruption',
    ],
    biases: [
      'Business perspective may conflate regulation with corruption',
      'High-profile scandals can distort scores regardless of actual prevalence',
    ],
  },
  {
    name: 'Freedom House',
    organization: 'Freedom House',
    description: 'Annual assessment of political rights and civil liberties in 195 countries.',
    methodology: 'Checklist-based scoring by analysts, reviewed by academic advisors.',
    weight: '15%',
    used_for: 'Democracy Score (combined with V-Dem)',
    url: 'https://freedomhouse.org',
    limitations: [
      'Binary free/partly free/not free categories oversimplify',
      'US-based organization with historical US government funding',
      'Methodology changes over time affect comparability',
    ],
    biases: [
      'US foreign policy alignment has historically influenced ratings',
      'Electoral democracy emphasis may underweight other governance aspects',
    ],
  },
  {
    name: 'UNDP Human Development Index',
    organization: 'United Nations Development Programme',
    description: 'Composite index of health, education, and standard of living.',
    methodology: 'Combines life expectancy, education years, and GNI per capita into single index.',
    weight: '10%',
    used_for: 'Human Development Score',
    url: 'https://hdr.undp.org',
    limitations: [
      'National averages hide internal inequality',
      'Does not capture political freedoms or safety',
      'Economic measure (GNI) can be skewed by resource extraction',
    ],
    biases: [
      'Development paradigm assumes Western economic model',
      'Does not account for environmental sustainability',
    ],
  },
  {
    name: 'Reporters Sans Frontières Press Freedom Index',
    organization: 'Reporters Without Borders',
    description: 'Annual ranking of press freedom in 180 countries and territories.',
    methodology: 'Questionnaire to partner organizations, correspondents, and journalists + quantitative data.',
    weight: '10%',
    used_for: 'Press Freedom Score',
    url: 'https://rsf.org',
    limitations: [
      'Focuses on journalists - may miss broader information freedom',
      'Self-censorship difficult to measure',
      'Internet and social media coverage evolving',
    ],
    biases: [
      'Western press freedom model as baseline',
      'May not capture state-aligned media dynamics in some contexts',
    ],
  },
  {
    name: 'Climate Action Tracker',
    organization: 'Climate Analytics + NewClimate Institute',
    description: 'Independent scientific analysis tracking government climate action against Paris Agreement targets.',
    methodology: 'Assesses national targets, policies, and fair share contributions.',
    weight: '10%',
    used_for: 'Climate Action Score',
    url: 'https://climateactiontracker.org',
    limitations: [
      'Policy vs implementation gap not fully captured',
      'Historical emissions responsibility debated',
      'Rapidly changing - updates lag policy announcements',
    ],
    biases: [
      'Fair share calculations involve normative judgments',
      'Developed country responsibilities vs developing country needs tension',
    ],
  },
  {
    name: 'World Bank Governance Indicators',
    organization: 'World Bank',
    description: 'Six aggregate indicators covering voice, stability, government effectiveness, regulatory quality, rule of law, and corruption control.',
    methodology: 'Aggregates 30+ data sources from surveys, NGOs, and commercial providers.',
    weight: '10%',
    used_for: 'Rule of Law Score',
    url: 'https://info.worldbank.org/governance/wgi',
    limitations: [
      'Perception-based measures from elite respondents',
      'Margin of error often larger than year-to-year changes',
      'Cannot attribute changes to specific policies',
    ],
    biases: [
      'Market-friendly governance model embedded in methodology',
      'Business climate emphasis may not reflect citizen welfare',
    ],
  },
];

export default function MethodologyPage() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Leaderboard
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Methodology</h1>
        <p className="text-xl text-slate-300 mb-8">
          How we calculate scores, and why you should be skeptical of any single number.
        </p>

        {/* Philosophy Section */}
        <section className="mb-12">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-amber-400 mb-2">Important Disclaimer</h2>
                <p className="text-slate-300">
                  No index can fully capture the complexity of governance. Our scores aggregate existing
                  research with inherent Western biases, perception-based measures, and methodology limitations.
                  Use this as a starting point for understanding, not a definitive judgment.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              Rather than creating new methodology (which would lack credibility and resources for validation),
              we aggregate established international indices while being transparent about their limitations.
            </p>
            <p>
              Our goal is to make existing research accessible to engaged citizens who want to understand
              global governance patterns without reading academic papers.
            </p>
          </div>
        </section>

        {/* Score Calculation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overall Score Calculation</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
            <p className="text-slate-300 mb-4">
              The overall score is a weighted average of seven component scores:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Democracy (V-Dem + FH)</span>
                  <span className="text-amber-400 font-medium">30%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Anti-Corruption (TI CPI)</span>
                  <span className="text-amber-400 font-medium">15%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Equality (Gini)</span>
                  <span className="text-amber-400 font-medium">10%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Human Development (HDI)</span>
                  <span className="text-amber-400 font-medium">10%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Press Freedom (RSF)</span>
                  <span className="text-amber-400 font-medium">15%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Climate Action (CAT)</span>
                  <span className="text-amber-400 font-medium">10%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Rule of Law (WB WGI)</span>
                  <span className="text-amber-400 font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            Weights emphasize democracy and press freedom as foundational to accountability.
            This is a normative choice - others might weight economic factors higher.
          </p>
        </section>

        {/* Source Indices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Source Indices</h2>
          <div className="space-y-6">
            {indices.map((index) => (
              <div key={index.name} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">{index.name}</h3>
                    <p className="text-sm text-slate-400">{index.organization}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-400 font-medium">{index.weight}</span>
                    <p className="text-xs text-slate-400">{index.used_for}</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4">{index.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-400 mb-2">Methodology</h4>
                  <p className="text-sm text-slate-300">{index.methodology}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-red-400 mb-2">Limitations</h4>
                    <ul className="text-xs text-slate-400 space-y-1">
                      {index.limitations.map((l, i) => (
                        <li key={i}>• {l}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-amber-400 mb-2">Potential Biases</h4>
                    <ul className="text-xs text-slate-400 space-y-1">
                      {index.biases.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={index.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-amber-400 hover:text-amber-300"
                >
                  View Source
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* What We Don't Measure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What We Don't Capture Well</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <ul className="space-y-3 text-slate-300">
              <li>
                <strong className="text-slate-100">Lived Experience:</strong> Indices measure institutional
                quality, not how citizens actually experience governance day-to-day.
              </li>
              <li>
                <strong className="text-slate-100">Informal Power:</strong> Official metrics miss informal
                networks, cultural factors, and power dynamics outside formal institutions.
              </li>
              <li>
                <strong className="text-slate-100">Rapid Change:</strong> Annual updates mean scores lag
                reality, especially during political crises.
              </li>
              <li>
                <strong className="text-slate-100">Non-Western Models:</strong> Methodologies embed Western
                liberal assumptions that may not apply universally.
              </li>
              <li>
                <strong className="text-slate-100">Internal Variation:</strong> National scores hide regional
                and demographic differences within countries.
              </li>
            </ul>
          </div>
        </section>

        {/* Future Improvements */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Planned Improvements</h2>
          <div className="space-y-3 text-slate-300">
            <p>• Adding historical data to show trends over time</p>
            <p>• Expanding beyond G20 to include more countries</p>
            <p>• Sub-national data where available (provinces, states)</p>
            <p>• Policy database linking scores to specific actions</p>
            <p>• User-submitted corrections and additional sources</p>
          </div>
        </section>
      </div>
    </div>
  );
}
