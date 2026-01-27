import Link from 'next/link';
import { Button } from '@infobank/ui';

export default function NotFound() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl font-bold text-slate-50 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-slate-50 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-400 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/">
          <Button variant="primary">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
