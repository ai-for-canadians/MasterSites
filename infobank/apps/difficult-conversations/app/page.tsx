import Link from 'next/link';
import { Hero } from '@/components/home/Hero';
import { conversations } from '@/lib/data/conversations';
import { categories } from '@/lib/data/categories';
import { ArrowRight, MessageSquare, Briefcase, Heart, Home, DollarSign, Users, Info } from 'lucide-react';

const IconMap: Record<string, any> = {
  Briefcase: Briefcase,
  Heart: Heart,
  Home: Home,
  DollarSign: DollarSign,
  Users: Users
};

export default function HomePage() {
  const featuredConversations = conversations.slice(0, 6);

  return (
    <div className="w-full">
      <Hero />

      {/* Categories */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-slate-50">Browse by Category</h2>
            <p className="text-slate-400">Find the right words for any situation</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const Icon = IconMap[category.icon] || Info;
              return (
                <Link
                  key={category.id}
                  href={`/conversations?category=${category.slug}`}
                  className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-500 transition-all hover:shadow-lg hover:shadow-amber-500/10 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/10 rounded-lg mb-4 text-amber-500 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-50 group-hover:text-amber-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Scripts */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-50">Popular Scripts</h2>
              <p className="text-slate-400">Conversations people are dreading right now</p>
            </div>
            <Link
              href="/conversations"
              className="hidden sm:flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
            >
              View all scripts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredConversations.map((convo) => (
              <Link
                key={convo.id}
                href={`/conversations/${convo.slug}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all hover:bg-slate-750"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-700 px-2 py-1 rounded">
                    {convo.categoryId} // Ideally map to Name
                  </div>
                  <div className={`text-xs px-2 py-1 rounded font-medium border
                    ${convo.difficulty === 'High' ? 'border-red-500/30 text-red-400' : ''}
                    ${convo.difficulty === 'Medium' ? 'border-amber-500/30 text-amber-400' : ''}
                    ${convo.difficulty === 'Low' ? 'border-green-500/30 text-green-400' : ''}
                  `}>
                    {convo.difficulty} Difficulty
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-50 mb-2 group-hover:text-amber-400 transition-colors">
                  {convo.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {convo.summary}
                </p>

                <div className="flex items-center text-amber-500 text-sm font-medium">
                  Get the script
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/conversations"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
            >
              View all scripts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-amber-500/10 to-slate-800 border border-amber-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-50">
            Preparation is 90% of the battle
          </h2>
          <p className="text-slate-400 mb-8">
            These scripts are designed to help you communicate clearly, assertively, and empathetically.
          </p>
          <Link
            href="/conversations"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors"
          >
            Start Practicing
            <MessageSquare className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { ChevronRight } from 'lucide-react';
