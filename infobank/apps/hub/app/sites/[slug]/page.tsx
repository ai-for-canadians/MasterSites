import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { sites, getSiteBySlug } from '@/lib/data/sites';
import { getCategoryById } from '@/lib/data/categories';
import { Badge } from '@infobank/ui';
import { getCategoryColorClass, getStatusBadgeClass, getStatusLabel } from '@/lib/utils';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return sites.map((site) => ({
    slug: site.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const site = getSiteBySlug(params.slug);

  if (!site) {
    return {
      title: 'Site Not Found',
    };
  }

  return {
    title: site.name,
    description: site.description,
    openGraph: {
      title: `${site.name} - ${site.tagline}`,
      description: site.description,
    },
  };
}

export default function SitePage({ params }: PageProps) {
  const site = getSiteBySlug(params.slug);

  if (!site) {
    notFound();
  }

  const category = getCategoryById(site.categoryId);

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          {category && (
            <Badge className={getCategoryColorClass(category.color)}>
              {category.name}
            </Badge>
          )}
          <Badge className={getStatusBadgeClass(site.status)}>
            {getStatusLabel(site.status)}
          </Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
          {site.name}
        </h1>

        <p className="text-2xl text-amber-500 font-medium mb-8">
          {site.tagline}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-50 mb-4">
              About This Site
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {site.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-50 mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {site.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-50 mb-4">
              Who It's For
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {site.whoItsFor}
            </p>
          </section>

          {site.status === 'coming_soon' ? (
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 text-center">
              <p className="text-slate-400 mb-4">
                This site is coming soon. Want to be notified when it launches?
              </p>
              <Link
                href="/#newsletter"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get Notified
              </Link>
            </div>
          ) : site.url ? (
            <div className="flex justify-center">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Visit Site
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
