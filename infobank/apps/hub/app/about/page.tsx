import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Learn about InfoBank's mission to provide evidence-based information for Canadians.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
          About InfoBank
        </h1>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-50 mb-4">
              Our Mission
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              InfoBank exists to provide Canadians with evidence-based information
              they can trust. In a world of clickbait, misinformation, and
              advertising disguised as content, we believe people deserve better.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              We build practical, well-researched resources on topics that matter:
              health, finances, career, and everyday life decisions. Every claim is
              sourced. Every recommendation is evidence-based. Every resource is
              built with Canadian context in mind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-50 mb-4">
              Our Standards
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-slate-50 mb-2">
                  Evidence-Based
                </h3>
                <p className="text-slate-400">
                  We cite our sources and rate the strength of evidence. When
                  research is limited or contradictory, we say so. No vague
                  "studies show" claims.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-slate-50 mb-2">
                  Canadian Context
                </h3>
                <p className="text-slate-400">
                  Healthcare systems, tax laws, and regulations vary by country.
                  We provide information relevant to Canadians, with provincial
                  variations noted where applicable.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-slate-50 mb-2">
                  No Conflicts of Interest
                </h3>
                <p className="text-slate-400">
                  No ads. No affiliate links. No sponsored content. We don't sell
                  your attention or compromise our recommendations for revenue.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-slate-50 mb-2">
                  Honest About Limitations
                </h3>
                <p className="text-slate-400">
                  We're clear about what we know, what we don't know, and where
                  uncertainty exists. Real information includes acknowledging gaps
                  in our knowledge.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-50 mb-4">
              The Team
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              InfoBank is built by a small team committed to quality over growth.
              We're researchers, writers, and developers who got tired of
              wading through low-quality content to find reliable information.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Each site in our network is thoroughly researched and reviewed
              before launch. We'd rather build slowly and maintain quality than
              rush to publish incomplete or poorly researched content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-50 mb-4">
              Contact
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Have feedback? Spotted an error? Want to suggest a new site?
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              We're building something we believe in, and we want to hear from
              you.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
