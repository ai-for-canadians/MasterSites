import { Hero } from '@/components/home/Hero';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { FeaturedSites } from '@/components/home/FeaturedSites';
import { TrustSection } from '@/components/home/TrustSection';
import { AllSites } from '@/components/home/AllSites';
import { Newsletter } from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedSites />
      <TrustSection />
      <AllSites />
      <Newsletter />
    </>
  );
}
