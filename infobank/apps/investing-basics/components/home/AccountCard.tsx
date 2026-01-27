import { Account } from '@/types';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Home } from 'lucide-react';

interface AccountCardProps {
    account: Account;
}

export function AccountCard({ account }: AccountCardProps) {
    const icons = {
        tfsa: ShieldCheck,
        rrsp: Zap,
        fhsa: Home,
    };

    const Icon = icons[account.id as keyof typeof icons] || ShieldCheck;

    return (
        <Link
            href={`/accounts/${account.slug}`}
            className="group bg-white border border-zinc-200 p-8 rounded-2xl hover:border-zinc-900 hover:shadow-xl transition-all h-full flex flex-col"
        >
            <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                <Icon className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 mb-2">{account.name}</h3>
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                {account.fullName}
            </div>

            <p className="text-zinc-600 text-sm mb-6 flex-1">
                {account.bestFor}
            </p>

            <div className="pt-6 border-t border-zinc-100 mt-auto flex items-center justify-between">
                <span className="text-xs font-bold bg-zinc-100 px-2 py-1 rounded">
                    {account.category}
                </span>
                <span className="text-sm font-bold text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Details <ArrowRight className="w-4 h-4" />
                </span>
            </div>
        </Link>
    );
}
