import { Shield, MapPin, Ban, Lightbulb } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Evidence-based',
    description: 'Every claim has a source. We cite our work and rate the evidence.',
  },
  {
    icon: MapPin,
    title: 'Canadian-first',
    description: 'Built for Canadians, eh. Relevant resources and context for our country.',
  },
  {
    icon: Ban,
    title: 'No ads',
    description: "We don't sell your attention. No ads, no affiliate links, no conflicts.",
  },
  {
    icon: Lightbulb,
    title: 'Open about limits',
    description: 'We say when we don\'t know. Uncertainty is part of real information.',
  },
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            How We're Different
          </h2>
          <p className="text-lg text-slate-400">
            Quality over clicks. Evidence over engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-slate-700 mb-4">
                  <Icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-400">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
