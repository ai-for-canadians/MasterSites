export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-white mb-2">Divorce Navigator</h3>
                        <p className="text-sm">
                            Providing clarity during one of life&apos;s most difficult transitions.
                        </p>
                    </div>
                    <div className="md:text-right text-xs opacity-70">
                        <p className="mb-2">⚠️ Legal Disclaimer: Information on this site is for general guidance only and does not constitute legal advice. Always consult a family lawyer.</p>
                        <p>© {new Date().getFullYear()} Infobank Project.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
