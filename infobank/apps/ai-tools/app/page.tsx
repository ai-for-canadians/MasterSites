import Link from 'next/link';
import { Hero } from '@/components/home/Hero';
import { tools } from '@/lib/data/tools';
import { categories } from '@/lib/data/categories';
import { ArrowRight, Star, PenTool, Image as ImageIcon, Code, Zap, Video, Mic } from 'lucide-react';

const IconMap: Record<string, any> = {
  PenTool: PenTool,
  Image: ImageIcon,
  Code: Code,
  Zap: Zap,
  Mic: Mic,
  Video: Video
};

export default function HomePage() {
  const topTools = tools.sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="w-full">
      <Hero />

      {/* Categories */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-slate-50">Browse by Use Case</h2>
            <p className="text-slate-400">What do you want to build?</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const Icon = IconMap[category.icon] || Zap;
              return (
                <Link
                  key={category.id}
                  href={`/tools?category=${category.slug}`}
                  className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10 text-center flex flex-col items-center justify-center h-full"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-indigo-500/10 rounded-lg mb-3 text-indigo-500 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50 group-hover:text-indigo-400 transition-colors">
                    {category.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Rated Tools */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-50">Top Rated Tools</h2>
              <p className="text-slate-400">The current state of the art</p>
            </div>
            <Link
              href="/tools"
              className="hidden sm:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              View leaderboard
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:bg-slate-750"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-900 border border-slate-700 px-2 py-1 rounded">
                      {categories.find(c => c.id === tool.category)?.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold">{tool.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-50 mb-2 group-hover:text-indigo-400 transition-colors">
                  {tool.name}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {tool.summary}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
                  <span className="text-xs text-slate-500">
                    {tool.pricingType === 'free' && 'Free'}
                    {tool.pricingType === 'freemium' && 'Freemium'}
                    {tool.pricingType === 'paid' && 'Paid'}
                  </span>
                  <span className="text-indigo-400 text-sm font-medium flex items-center gap-1">
                    Read Review <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              View leaderboard
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-indigo-500/10 to-slate-800 border border-indigo-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-50">
            Overwhelmed by new models every week?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We test and track the updates so you don't have to. Check out our detailed comparisons to see which model is actually winning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition-colors"
            >
              Compare Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
