import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FileText, Download } from 'lucide-react';

export default function TransparencyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Transparency</h1>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl">
                        We believe in radical openness. Every dollar contributed and spent is tracked and reported.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 border border-slate-200 rounded-2xl">
                            <h2 className="text-xl font-bold mb-4">Platform Financials</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">Total Funds Raised</span>
                                    <span className="font-bold">$43,000.00</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">AI Execution Cost (Passed Through)</span>
                                    <span className="font-bold text-slate-900">$12,450.00</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">Platform Fee (5%)</span>
                                    <span className="font-bold text-slate-900">$2,150.00</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <span className="font-bold text-emerald-600">Deployment Rate</span>
                                    <span className="font-bold text-emerald-600">95%</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-50 rounded-2xl">
                            <h2 className="text-xl font-bold mb-4">Document Library</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-blue-600 hover:underline cursor-pointer">
                                    <FileText className="w-4 h-4" /> 2024 Q4 Impact Report
                                </li>
                                <li className="flex items-center gap-3 text-sm text-blue-600 hover:underline cursor-pointer">
                                    <FileText className="w-4 h-4" /> Co-operative Bylaws
                                </li>
                                <li className="flex items-center gap-3 text-sm text-blue-600 hover:underline cursor-pointer">
                                    <FileText className="w-4 h-4" /> Annual Financial Audits
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
