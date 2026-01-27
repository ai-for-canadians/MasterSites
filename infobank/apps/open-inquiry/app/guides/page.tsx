import Link from 'next/link';
import {
  Shield,
  TestTube,
  Users,
  AlertTriangle,
  Heart,
  BookOpen,
  Brain,
  Home,
} from 'lucide-react';

const guides = [
  {
    id: 'getting-started',
    title: 'Getting Started with Harm Reduction',
    description:
      'Essential safety principles for anyone considering psychoactive substance use',
    icon: Shield,
    color: 'purple',
  },
  {
    id: 'substance-testing',
    title: 'Substance Testing Guide',
    description:
      'How to test substances for purity and identify dangerous adulterants',
    icon: TestTube,
    color: 'cyan',
  },
  {
    id: 'set-and-setting',
    title: 'Set and Setting',
    description:
      'Optimizing your mental state and environment for safer psychedelic experiences',
    icon: Home,
    color: 'green',
  },
  {
    id: 'trip-sitting',
    title: 'Trip Sitting Guide',
    description: 'How to support someone during a psychedelic experience',
    icon: Users,
    color: 'pink',
  },
  {
    id: 'managing-difficult-experiences',
    title: 'Managing Difficult Experiences',
    description: 'What to do during challenging trips or adverse reactions',
    icon: AlertTriangle,
    color: 'amber',
  },
  {
    id: 'integration',
    title: 'Integration Practices',
    description:
      'Processing and applying insights from psychedelic experiences to everyday life',
    icon: Brain,
    color: 'indigo',
  },
  {
    id: 'mental-health-screening',
    title: 'Mental Health Screening',
    description:
      'Understanding contraindications and risk factors before using psychedelics',
    icon: Heart,
    color: 'red',
  },
  {
    id: 'dosing-safely',
    title: 'Safe Dosing Practices',
    description: 'How to determine appropriate doses and avoid common pitfalls',
    icon: BookOpen,
    color: 'blue',
  },
];

const colorClasses = {
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  green: 'bg-green-500/10 text-green-400 border-green-500/30',
  pink: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  red: 'bg-red-500/10 text-red-400 border-red-500/30',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
};

export default function GuidesPage() {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Harm Reduction Guides
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Evidence-based safety information to help you make informed decisions and
            reduce risks associated with psychoactive substance use.
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-12 bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2 text-purple-400">
            Before You Begin
          </h2>
          <p className="text-purple-200">
            Harm reduction acknowledges that while abstinence is the only way to
            eliminate risk entirely, people will continue to use substances. These
            guides aim to reduce harm for those who choose to use, providing practical
            safety information without judgment.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => {
            const Icon = guide.icon;
            const colorClass =
              colorClasses[guide.color as keyof typeof colorClasses];

            return (
              <Link
                key={guide.id}
                href={`/guides/${guide.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border mb-4 ${colorClass}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{guide.description}</p>
                <span className="text-xs text-purple-400 group-hover:translate-x-1 transition-transform inline-block">
                  Read guide →
                </span>
              </Link>
            );
          })}
        </div>

        {/* Emergency Information */}
        <div className="mt-12 bg-red-500/10 border border-red-500/30 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-red-400 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Emergency Resources
          </h2>
          <div className="space-y-3 text-red-200">
            <p>
              <strong>Medical Emergency:</strong> Call 911 (US/Canada) or your local
              emergency number. Be honest with paramedics about what was consumed.
            </p>
            <p>
              <strong>Crisis Support:</strong> If you or someone you know is in crisis,
              contact the 988 Suicide and Crisis Lifeline (US) by calling or texting
              988.
            </p>
            <p>
              <strong>Poison Control:</strong> US: 1-800-222-1222 | Canada:
              1-844-POISON-X
            </p>
            <p className="text-sm mt-4">
              Good Samaritan laws in many jurisdictions protect people who call for
              emergency help during overdoses from prosecution for drug possession.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
