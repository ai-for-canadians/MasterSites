import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function StartPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 py-12">
                <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-zinc">
                    <h1 className="text-center">How to Start Investing in Canada</h1>
                    <p className="lead">You don&apos;t need a finance degree to build wealth. Follow these 4 steps.</p>

                    <h2>Step 1: Emergency Fund First</h2>
                    <p>Before putting money into markets, ensure you have 3-6 months of expenses in a high-interest savings account (HISA). This prevents you from being forced to sell investments during a market downturn.</p>

                    <h2>Step 2: Open a Discount Brokerage</h2>
                    <p>Avoid "big bank" advisors who charge high commissions. Use a discount broker like Wealthsimple Trade or Questrade. These platforms allow you to buy ETFs for $0 or very low cost.</p>

                    <h2>Step 3: Buy the Whole Market</h2>
                    <p>Don&apos;t try to pick the next Apple or Tesla. Buy an "Asset Allocation ETF" that holds thousands of stocks across the globe in one single fund (e.g., VGRO, XEQT).</p>

                    <h2>Step 4: Automate and Wait</h2>
                    <p>Set up a recurring deposit of $50, $100, or $500 per month. Automate the purchases. The secret to wealth is time, not timing.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
