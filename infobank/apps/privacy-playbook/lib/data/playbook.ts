import { Guide, SecurityTool } from '@/types';

export const tools: SecurityTool[] = [
    {
        id: 'mullvad',
        name: 'Mullvad VPN',
        category: 'networking',
        summary: 'The gold standard for anonymous VPNs. No email required.',
        pros: ['No logs', 'Monero/Cash payments', 'Fast WireGuard'],
        cons: ['No streaming bypass', 'Fewer servers'],
        pricing: 'Flat 5 EUR/mo',
        websiteUrl: 'https://mullvad.net',
        isOpenSource: true
    },
    {
        id: 'bitwarden',
        name: 'Bitwarden',
        category: 'account',
        summary: 'Reliable, open-source password manager.',
        pros: ['Open source', 'Cross-platform', 'Free tier'],
        cons: ['UI is utilitarian'],
        pricing: 'Free / $10/year Premium',
        websiteUrl: 'https://bitwarden.com',
        isOpenSource: true
    },
    {
        id: 'signal',
        name: 'Signal',
        category: 'messaging',
        summary: 'The most secure, mainstream private messenger.',
        pros: ['Strong encryption', 'Minimal metadata', 'Independent'],
        cons: ['Needs phone number'],
        pricing: 'Free (Donation based)',
        websiteUrl: 'https://signal.org',
        isOpenSource: true
    }
];

export const guides: Guide[] = [
    {
        id: 'browser-hardening',
        title: 'Harden your Browser',
        slug: 'browser-hardening',
        category: 'browser',
        difficulty: 'Beginner',
        timeToComplete: '10 mins',
        summary: 'Stop trackers and fingerprinters at the source.',
        steps: [
            { title: 'Switch to Firefox/Brave', description: 'Avoid Chrome as it is built on an advertising engine.' },
            { title: 'Install uBlock Origin', description: 'The only ad-blocker you actually need.' },
            { title: 'Disable Telemetry', description: 'Turn off "Send data to developer" in settings.' }
        ],
        recommendations: ['uBlock Origin', 'Brave Browser']
    },
    {
        id: '2fa-everywhere',
        title: 'Setup 2FA Everywhere',
        slug: 'two-factor-auth',
        category: 'account',
        difficulty: 'Intermediate',
        timeToComplete: '30 mins',
        summary: 'Protect your accounts even if your password leaks.',
        steps: [
            { title: 'Avoid SMS 2FA', description: 'SIM swapping is a common attack.' },
            { title: 'Use an Auth App', description: 'Raivo or Aegis are great offline options.' },
            { title: 'Get a Security Key', description: 'YubiKeys provide the highest level of protection.' }
        ],
        recommendations: ['YubiKey', 'Raivo OTP']
    }
];
