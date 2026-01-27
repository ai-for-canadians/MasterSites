import { Compass, Users, BookOpen, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">About Mental Health Navigator</h1>

        <div className="prose prose-invert max-w-none">
          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-slate-50">
              <Compass className="w-8 h-8 text-teal-500" />
              Our Mission
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                The mental health system is confusing. Terms like "CBT," "Psychiatrist," and "Intake Assessment" can be overwhelming when you're already struggling.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We built this navigator to be the first step. A clear, jargon-free guide to understanding what you might be experiencing and who can help.
              </p>
            </div>
          </section>

          {/* Methodology */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-slate-50">
              <BookOpen className="w-8 h-8 text-teal-500" />
              Evidence-Based Information
            </h2>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 space-y-6">
              <p className="text-slate-300">
                Our content is based on guidelines from major health organizations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li><strong>NIMH</strong> (National Institute of Mental Health)</li>
                <li><strong>APA</strong> (American Psychological Association)</li>
                <li><strong>NAMI</strong> (National Alliance on Mental Illness)</li>
              </ul>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-slate-50">
              <ShieldCheck className="w-8 h-8 text-teal-500" />
              Important Disclaimer
            </h2>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
              <div className="space-y-4 text-amber-100">
                <p>
                  <strong>Not Medical Advice:</strong> This website is for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p>
                  <strong>Crisis:</strong> We cannot provide crisis support. If you are feeling unsafe, please call emergency services immediately.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
