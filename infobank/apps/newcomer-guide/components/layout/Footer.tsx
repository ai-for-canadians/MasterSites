export function Footer() {
    return (
        <footer className="bg-red-50 border-t border-red-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600">
                    <div>
                        <h3 className="font-black text-slate-900 mb-4">NEWCOMER GUIDE</h3>
                        <p className="text-sm leading-relaxed max-w-sm">
                            We help you execute the first 90 days of your Canadian life.
                            No lawyers, no consultants, just a clear checklist.
                        </p>
                    </div>
                    <div className="md:text-right">
                        <p className="text-sm mb-2">Not government affiliated.</p>
                        <p className="text-xs text-slate-400">
                            © {new Date().getFullYear()} Infobank Project.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
