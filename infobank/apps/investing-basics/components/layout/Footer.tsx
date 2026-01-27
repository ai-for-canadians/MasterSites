export function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="font-bold text-zinc-900 mb-2">Investing Basics</h3>
                        <p className="text-sm text-zinc-500 max-w-sm">
                            Empowering Canadians with jargon-free financial education.
                            Keep it simple, buy the market, and start early.
                        </p>
                    </div>
                    <div className="md:text-right">
                        <div className="text-xs text-zinc-400 leading-relaxed mb-4">
                            ⚠️ Financial Disclaimer: This information is for educational purposes only and is not individual financial advice. Consult a professional before making investment decisions.
                        </div>
                        <div className="text-xs text-zinc-500">
                            © {new Date().getFullYear()} Infobank Project.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
