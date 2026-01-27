export function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} Infobank Venture Studio.
                    </div>
                    <div className="text-zinc-600 text-xs flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        AI Agents Online
                    </div>
                </div>
            </div>
        </footer>
    );
}
