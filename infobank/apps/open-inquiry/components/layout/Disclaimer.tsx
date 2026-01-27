'use client';

import { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export function Disclaimer() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-amber-500/10 border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-amber-200">
              <strong className="font-semibold">Educational Information Only:</strong>{' '}
              This site provides educational information about psychoactive substances.
              This is not medical advice and does not encourage illegal activity. Many
              substances discussed are illegal in most jurisdictions. Always research
              laws in your area. If you choose to use substances, prioritize safety and
              harm reduction.{' '}
              <Link
                href="/about#disclaimer"
                className="underline hover:text-amber-100"
              >
                Full disclaimer
              </Link>
            </p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-amber-400 hover:text-amber-300 flex-shrink-0"
            aria-label="Dismiss disclaimer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Link({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
