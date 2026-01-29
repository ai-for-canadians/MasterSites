import type { Site } from '@/types';

export const sites: Site[] = [
  // Featured Sites
  {
    id: '31',
    name: 'Venture Studio SMB',
    slug: 'venture-studio-smb',
    tagline: 'Own a piece of local business',
    description:
      'Fund AI-powered business building and earn dividends. A new model for fractional ownership of local small businesses.',
    categoryId: '3',
    url: process.env.NEXT_PUBLIC_URL_VENTURE_SMB || 'http://localhost:3031',
    status: 'live',
    isFeatured: true,
    icon: 'Rocket',
    features: [
      'Fractional ownership model',
      'AI-agent business execution',
      'Dividend tracking',
      'Local investment opportunities',
    ],
    whoItsFor: 'Investors and community members wanting to own share of local businesses',
    sortOrder: 1,
  },
  {
    id: '32',
    name: 'Impact Scorecard',
    slug: 'impact-scorecard',
    tagline: 'Which organizations actually deliver',
    description:
      'Transparency ratings for nonprofits and companies. We rate organizations on what actually matters: real impact, transparency, and accountability.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_IMPACT_SCORECARD || 'http://localhost:3033',
    status: 'live',
    isFeatured: true,
    icon: 'TrendingUp',
    features: [
      'Nonprofit leaderboard',
      'Company ESG ratings',
      'Transparent methodology',
      'Canadian focus',
    ],
    whoItsFor: 'Donors, investors, and consumers who want to support organizations that actually deliver',
    sortOrder: 2,
  },
  {
    id: '33',
    name: 'LaunchPad',
    slug: 'launchpad',
    tagline: 'Your idea. Our tools. Shared ownership.',
    description:
      'Submit ideas for new InfoBank sites. Community funds development. Contributors become co-owners with revenue sharing.',
    categoryId: '3',
    url: process.env.NEXT_PUBLIC_URL_LAUNCHPAD || 'http://localhost:3034',
    status: 'live',
    isFeatured: true,
    icon: 'Rocket',
    features: [
      'Submit site ideas',
      'Community voting',
      'Crowdfunding',
      'Ownership shares',
    ],
    whoItsFor: 'Entrepreneurs and community members who want to build and co-own useful information sites',
    sortOrder: 3,
  },
  {
    id: '14',
    name: 'AI Tools Guide',
    slug: 'ai-tools-guide',
    tagline: 'Cut through the AI hype',
    description:
      'Honest, practical reviews of AI tools that actually matter. No affiliate bias, no hype—just clear guidance on what works, what doesn\'t, and what\'s worth your time and money.',
    categoryId: '3',
    url: process.env.NEXT_PUBLIC_URL_AI_TOOLS || 'http://localhost:3006',
    status: 'live',
    isFeatured: true,
    icon: 'Bot',
    features: [
      'Tool comparisons by use case',
      'Honest capability assessments',
      'Prompting guides and templates',
      'Integration tutorials',
      'Cost-benefit analysis',
    ],
    whoItsFor:
      'Professionals, creators, and businesses trying to figure out which AI tools are actually useful',
    sortOrder: 4,
  },
  {
    id: '26',
    name: 'Venture Studio',
    slug: 'venture-studio',
    tagline: 'Launch proven social ventures with AI',
    description:
      'Don\'t reinvent the wheel. Copy successful models like tool libraries and grocery co-ops. Our AI agents handle the market research and planning.',
    categoryId: '3',
    url: process.env.NEXT_PUBLIC_URL_VENTURE_STUDIO || 'http://localhost:3024',
    status: 'live',
    isFeatured: true,
    icon: 'Rocket',
    features: [
      'Social venture playbooks',
      'AI Agent execution steps',
      'Venture progress tracking',
      'Funding coordination',
    ],
    whoItsFor: 'Community builders and social entrepreneurs launching local initiatives',
    sortOrder: 5,
  },

  // Other Sites
  {
    id: '1',
    name: 'Open Inquiry',
    slug: 'open-inquiry',
    tagline: 'Evidence on substances science forgot',
    description:
      'Rigorous, evidence-based information on psychedelics, nootropics, and research compounds. What the research actually shows—not hype, not fear. For curious minds who want real data.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_OPEN_INQUIRY || 'http://localhost:3003',
    status: 'live',
    isFeatured: false,
    icon: 'FlaskConical',
    features: [
      'Substance database with safety profiles',
      'Research summaries in plain language',
      'Interaction checker',
      'Harm reduction guides',
      'Legal status by region',
    ],
    whoItsFor:
      'Researchers, biohackers, harm reduction advocates, and anyone curious about the actual evidence on controlled and emerging substances',
    sortOrder: 6,
  },
  {
    id: '2',
    name: 'Body Signals',
    slug: 'body-signals',
    tagline: 'What your symptoms actually mean',
    description:
      'An evidence-based guide to understanding what your body is telling you. From random twitches to persistent pain—know when to worry, when to wait, and when to see someone.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_BODY_SIGNALS || 'http://localhost:3004',
    status: 'live',
    isFeatured: false,
    icon: 'Activity',
    features: [
      'Symptom search by body area',
      'Red flag warnings (when to get help now)',
      'Common vs concerning patterns',
      'Questions to ask your doctor',
      'Evidence ratings for each condition',
    ],
    whoItsFor:
      'Anyone who has ever Googled a symptom at 2am and spiraled into WebMD terror',
    sortOrder: 7,
  },
  {
    id: '3',
    name: 'Product Truth',
    slug: 'product-truth',
    tagline: "Know what's really in your products",
    description:
      'A searchable database of personal care and household products with ingredient safety analysis, evidence ratings, and better alternatives. Make informed choices about what you put on your body and in your home.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_PRODUCT_TRUTH || 'http://localhost:3002',
    status: 'live',
    isFeatured: false,
    icon: 'Package',
    features: [
      'Ingredient safety ratings',
      'Product comparisons',
      'Evidence-based concerns',
      'Safer alternatives',
    ],
    whoItsFor:
      'Anyone who wants to make informed choices about the products they use',
    sortOrder: 8,
  },
  {
    id: '4',
    name: 'Canadian Benefits Navigator',
    slug: 'benefits-navigator',
    tagline: 'Find programs you qualify for',
    description:
      'Navigate Canadian government benefits, grants, and programs. Federal and provincial coverage with eligibility checkers and application guides. Stop leaving money on the table.',
    categoryId: '4',
    url: process.env.NEXT_PUBLIC_URL_BENEFITS_NAVIGATOR || 'http://localhost:3026',
    status: 'live',
    isFeatured: false,
    icon: 'Coins',
    features: [
      'Eligibility quiz',
      'Federal & provincial programs',
      'Application guides',
      'Deadline tracking',
    ],
    whoItsFor:
      'Any Canadian who might be missing out on benefits they qualify for',
    sortOrder: 9,
  },
  {
    id: '5',
    name: 'Movement Rx',
    slug: 'movement-rx',
    tagline: 'Fix the pain from modern life',
    description:
      'Evidence-based exercises and routines to address common pain from sitting, phone use, and sedentary lifestyles. Interactive body map, video guides, and custom routines to feel better fast.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_MOVEMENT_RX || 'http://localhost:3022',
    status: 'live',
    isFeatured: false,
    icon: 'Dumbbell',
    features: [
      'Interactive body map',
      'Video-guided exercises',
      'Custom routines',
      'Progress tracking',
    ],
    whoItsFor:
      'Desk workers, phone users, anyone with chronic pain from modern habits',
    sortOrder: 10,
  },

  // Additional Health & Body Sites
  {
    id: '6',
    name: 'Mental Health Navigator',
    slug: 'mental-health-navigator',
    tagline: 'Find the right help, faster',
    description:
      'Navigate the confusing world of mental health care. Understand different types of therapy, what conditions they treat, how to find providers, and what to expect. Canadian resources included.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_MENTAL_HEALTH || 'http://localhost:3007',
    status: 'live',
    isFeatured: false,
    icon: 'Brain',
    features: [
      'Therapy type explainer (CBT, DBT, EMDR, etc.)',
      'Condition-to-treatment matching',
      'How to find a therapist guide',
      'What to expect in first sessions',
      'Crisis resources',
    ],
    whoItsFor:
      'Anyone considering therapy, struggling to find the right fit, or supporting someone who is',
    sortOrder: 11,
  },
  {
    id: '7',
    name: 'Longevity Guide',
    slug: 'longevity-guide',
    tagline: 'What actually extends healthspan',
    description:
      'Cut through the anti-aging hype with evidence-based longevity information. What the research really shows about living longer and healthier. Supplements, interventions, and lifestyle factors—rated by evidence.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_LONGEVITY_GUIDE || 'http://localhost:3009',
    status: 'live',
    isFeatured: false,
    icon: 'Clock',
    features: [
      'Intervention database with evidence ratings',
      'Supplement analysis',
      'Biomarker guide',
      'Testing recommendations',
      'Protocol breakdowns',
    ],
    whoItsFor:
      'Health optimizers, biohackers, and anyone who wants to separate longevity science from snake oil',
    sortOrder: 12,
  },
  {
    id: '8',
    name: 'Gut Health Deep Dive',
    slug: 'gut-health',
    tagline: 'Beyond the probiotic hype',
    description:
      'Evidence-based gut health information that goes deeper than "take a probiotic." Understand the microbiome, digestive conditions, and what interventions actually have research support.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_GUT_HEALTH || 'http://localhost:3010',
    status: 'live',
    isFeatured: false,
    icon: 'Stethoscope',
    features: [
      'Condition guides (IBS, SIBO, etc.)',
      'Probiotic strain database',
      'Diet protocol comparisons',
      'Testing interpretation',
      'Supplement evidence ratings',
    ],
    whoItsFor:
      'Anyone dealing with digestive issues or trying to optimize gut health beyond basic advice',
    sortOrder: 13,
  },
  {
    id: '9',
    name: 'Life After Work',
    slug: 'life-after-work',
    tagline: 'Retirement strategy for Canadians',
    description:
      'Plan your retirement with confidence. From CPP/OAS timing to withdrawal strategies and lifestyle design, we help you navigate the transition to your next chapter.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_LIFE_AFTER_WORK || 'http://localhost:3032',
    status: 'live',
    isFeatured: false,
    icon: 'Sunset',
    features: [
      'Pension timing analysis (CPP/OAS)',
      'Tax-efficient withdrawal strategies',
      'Lifestyle design framework',
      'Health & estate checklists',
    ],
    whoItsFor: 'Canadians planning for or currently in retirement',
    sortOrder: 14,
  },
  {
    id: '10',
    name: 'Condition Control',
    slug: 'condition-control',
    tagline: "Lifestyle interventions your doctor didn't mention",
    description:
      'Evidence-based lifestyle changes for managing chronic conditions. From type 2 diabetes to high blood pressure, discover interventions backed by research that your doctor might not have time to discuss.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_CONDITION_CONTROL || 'http://localhost:3020',
    status: 'live',
    isFeatured: false,
    icon: 'Heart',
    features: [
      'Condition-specific protocols',
      'Research summaries',
      'Tracking tools',
      'Progress metrics',
    ],
    whoItsFor:
      'People managing chronic conditions who want evidence-based lifestyle options',
    sortOrder: 15,
  },
  {
    id: '11',
    name: 'Supplements Guide',
    slug: 'supplements-guide',
    tagline: "What actually works (and what doesn't)",
    description:
      'Cut through the supplement industry hype. Evidence ratings for popular supplements, what the research actually shows, recommended dosages, and which ones are worth your money.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_SUPPLEMENTS_GUIDE || 'http://localhost:3012',
    status: 'live',
    isFeatured: false,
    icon: 'Pill',
    features: [
      'Evidence ratings',
      'Dosage recommendations',
      'Drug interactions',
      'Quality brand suggestions',
    ],
    whoItsFor:
      'Anyone considering supplements who wants to know what actually works',
    sortOrder: 16,
  },
  {
    id: '12',
    name: 'Sleep Better',
    slug: 'sleep-better',
    tagline: 'Evidence-based sleep optimization',
    description:
      'Improve your sleep with strategies backed by research. From sleep hygiene basics to advanced protocols, track what works for you and wake up refreshed.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_SLEEP_BETTER || 'http://localhost:3011',
    status: 'live',
    isFeatured: false,
    icon: 'Moon',
    features: [
      'Sleep assessment',
      'Personalized protocols',
      'Sleep tracking',
      'Environment optimization',
    ],
    whoItsFor: 'Anyone struggling with sleep quality or looking to optimize rest',
    sortOrder: 17,
  },
  {
    id: '13',
    name: 'Real Results',
    slug: 'real-results',
    tagline: 'Real stories, verified transformations',
    description:
      'Community-submitted health transformations with verification. See what actually worked for real people, not influencer marketing. Filter by goal, timeline, and approach.',
    categoryId: '1',
    url: process.env.NEXT_PUBLIC_URL_REAL_RESULTS || 'http://localhost:3021',
    status: 'live',
    isFeatured: false,
    icon: 'Users',
    features: [
      'Verified submissions',
      'Progress timelines',
      'Approach details',
      'Community discussion',
    ],
    whoItsFor:
      'People seeking real-world examples and inspiration for their health journey',
    sortOrder: 18,
  },

  // Work & Career Sites
  {
    id: '15',
    name: 'Career Pivot',
    slug: 'career-pivot',
    tagline: 'Change careers without starting over',
    description:
      'Strategic career transition guide for mid-career professionals. Identify transferable skills, explore adjacent fields, and create a transition plan that builds on your experience.',
    categoryId: '3',
    url: process.env.NEXT_PUBLIC_URL_CAREER_PIVOT || 'http://localhost:3013',
    status: 'live',
    isFeatured: false,
    icon: 'TrendingUp',
    features: [
      'Skills assessment',
      'Career path explorer',
      'Transition roadmap',
      'Success stories',
    ],
    whoItsFor:
      'Mid-career professionals wanting to change fields without starting over',
    sortOrder: 19,
  },
  {
    id: '16',
    name: 'Salary Negotiation',
    slug: 'salary-negotiation',
    tagline: "Get paid what you're worth",
    description:
      'Evidence-based salary negotiation strategies with Canadian market data. Scripts, frameworks, and tactics that actually work, plus real salary ranges for your role and location.',
    categoryId: '3',
    url: process.env.NEXT_PUBLIC_URL_SALARY_NEGOTIATION || 'http://localhost:3019',
    status: 'live',
    isFeatured: false,
    icon: 'DollarSign',
    features: [
      'Canadian salary data',
      'Negotiation scripts',
      'Email templates',
      'Practice scenarios',
    ],
    whoItsFor:
      'Anyone negotiating a job offer or raise in the Canadian market',
    sortOrder: 20,
  },

  // Life & Money Sites
  {
    id: '17',
    name: 'Difficult Conversations',
    slug: 'difficult-conversations',
    tagline: 'Scripts for the talks you\'ve been avoiding',
    description:
      'Evidence-based frameworks and actual scripts for hard conversations. Salary negotiations, relationship boundaries, family conflicts, workplace issues. Stop rehearsing in the shower.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_DIFFICULT_CONVERSATIONS || 'http://localhost:3005',
    status: 'live',
    isFeatured: false,
    icon: 'MessageSquare',
    features: [
      'Copy-paste conversation scripts',
      'Situation-specific frameworks',
      'Response preparation (what they might say)',
      'De-escalation techniques',
      'Follow-up templates',
    ],
    whoItsFor:
      'Anyone who has ever rehearsed a conversation 47 times and still fumbled it',
    sortOrder: 21,
  },
  {
    id: '18',
    name: 'Privacy Playbook',
    slug: 'privacy-playbook',
    tagline: 'Take back control of your data',
    description:
      'Practical, step-by-step guides to protecting your privacy online. From quick wins to full digital hardening. No paranoia required—just sensible defaults for modern life.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_PRIVACY_PLAYBOOK || 'http://localhost:3008',
    status: 'live',
    isFeatured: false,
    icon: 'Shield',
    features: [
      'Privacy audit checklist',
      'Tool recommendations by threat level',
      'Platform-specific guides (Google, Meta, etc.)',
      'Family privacy setup',
      'Data deletion request templates',
    ],
    whoItsFor:
      'Anyone who\'s uncomfortable with how much big tech knows about them (so... everyone)',
    sortOrder: 22,
  },
  {
    id: '19',
    name: 'Debt Freedom',
    slug: 'debt-freedom',
    tagline: 'A clear path out of debt',
    description:
      'Practical debt payoff strategies tailored to Canadian financial products. Compare methods, see your payoff timeline, and track progress toward financial freedom.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_DEBT_FREEDOM || 'http://localhost:3014',
    status: 'live',
    isFeatured: false,
    icon: 'TrendingDown',
    features: [
      'Debt payoff calculator',
      'Strategy comparison',
      'Progress tracking',
      'Canadian resources',
    ],
    whoItsFor: 'Canadians working to pay off debt and build financial stability',
    sortOrder: 23,
  },
  {
    id: '20',
    name: 'First Home Guide',
    slug: 'first-home-guide',
    tagline: 'Navigate buying your first home in Canada',
    description:
      'Complete guide to buying your first home in Canada. From saving for a down payment to closing day, understand the process, avoid pitfalls, and make informed decisions.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_FIRST_HOME_GUIDE || 'http://localhost:3015',
    status: 'live',
    isFeatured: false,
    icon: 'Home',
    features: [
      'Affordability calculator',
      'Process timeline',
      'Provincial guides',
      'First-time buyer programs',
    ],
    whoItsFor:
      'Canadians preparing to buy their first home and navigating the process',
    sortOrder: 24,
  },
  {
    id: '21',
    name: 'ADHD Life Systems',
    slug: 'adhd-systems',
    tagline: 'Systems that actually work for ADHD brains',
    description:
      'Practical systems for life management designed for ADHD brains. No neurotypical advice that doesn\'t work. Focus on what actually helps with executive function challenges.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_ADHD_SYSTEMS || 'http://localhost:3016',
    status: 'live',
    isFeatured: false,
    icon: 'Zap',
    features: [
      'Task management systems',
      'Environment setup',
      'Habit tracking',
      'Productivity tools',
    ],
    whoItsFor: 'Adults with ADHD looking for systems that work with their brain',
    sortOrder: 25,
  },

  // Canada Specific Sites
  {
    id: '22',
    name: 'Newcomer Guide',
    slug: 'newcomer-guide',
    tagline: 'Your first 90 days in Canada',
    description:
      'Essential guide for new permanent residents. Everything you need to do in your first 90 days: documents, banking, healthcare, housing, and settling in by province.',
    categoryId: '4',
    url: process.env.NEXT_PUBLIC_URL_NEWCOMER_GUIDE || 'http://localhost:3025',
    status: 'live',
    isFeatured: false,
    icon: 'MapPin',
    features: [
      '90-day checklist',
      'Provincial guides',
      'Document requirements',
      'Essential services setup',
    ],
    whoItsFor: 'New permanent residents navigating their first months in Canada',
    sortOrder: 26,
  },

  // Food & Home Sites
  {
    id: '23',
    name: 'Kitchen Confidence',
    slug: 'kitchen-confidence',
    tagline: 'Cook real food without recipes',
    description:
      'Learn cooking techniques and principles instead of following recipes. Build intuition, understand flavours, and cook confidently with what you have on hand.',
    categoryId: '5',
    url: process.env.NEXT_PUBLIC_URL_KITCHEN_CONFIDENCE || 'http://localhost:3017',
    status: 'live',
    isFeatured: false,
    icon: 'ChefHat',
    features: [
      'Technique library',
      'Flavour principles',
      'Substitution guide',
      'Skill progression',
    ],
    whoItsFor:
      'Anyone who wants to cook without relying on recipes and meal plans',
    sortOrder: 27,
  },
  {
    id: '24',
    name: 'Emergency Prep',
    slug: 'emergency-prep',
    tagline: 'Be ready for anything',
    description:
      'Practical emergency preparedness for Canadian households. From power outages to natural disasters, create a sensible emergency plan without going overboard.',
    categoryId: '5',
    url: process.env.NEXT_PUBLIC_URL_EMERGENCY_PREP || 'http://localhost:3018',
    status: 'live',
    isFeatured: false,
    icon: 'ShieldAlert',
    features: [
      'Regional risk assessment',
      'Supply checklists',
      'Family communication plan',
      'Gradual preparation',
    ],
    whoItsFor:
      'Canadian families who want to be prepared without becoming preppers',
    sortOrder: 28,
  },
  {
    id: '25',
    name: 'COMPASS',
    slug: 'compass',
    tagline: 'Universal Career Tracker',
    description:
      'The single place to track your entire career journey. Certifications, projects, networks, and evidence of impact—all in one portable dashboard.',
    categoryId: '3',
    url: process.env.NEXT_PUBLIC_URL_COMPASS || 'http://localhost:3023',
    status: 'live',
    isFeatured: false,
    icon: 'Compass',
    features: [
      'Universal skills profile',
      'Impact Journal',
      'Certification locker',
      'Networking CRM',
      'Career roadmap visualizer',
    ],
    whoItsFor: 'Ambitious professionals building a portable, evidence-based career identity',
    sortOrder: 29,
  },
  {
    id: '27',
    name: 'Parenting Playbook',
    slug: 'parenting-playbook',
    tagline: 'Evidence-based advice for every stage',
    description:
      'What the research actually shows about raising kids. Cut through conflicting advice with evidence ratings and myth-busting summaries.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_PARENTING_PLAYBOOK || 'http://localhost:3027',
    status: 'live',
    isFeatured: false,
    icon: 'HeartHandshake',
    features: [
      'Age-stage guides',
      'Evidence ratings for advice',
      'Myth buster summaries',
      'Resource library',
    ],
    whoItsFor: 'Parents seeking clear, data-driven science on child development',
    sortOrder: 30,
  },
  {
    id: '28',
    name: 'Divorce Navigator',
    slug: 'divorce-navigator',
    tagline: 'Navigate separation with clarity',
    description:
      'Practical, judgment-free guidance for separation and divorce in Canada. Legal basics, financial considerations, and emotional support.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_DIVORCE_NAVIGATOR || 'http://localhost:3028',
    status: 'live',
    isFeatured: false,
    icon: 'HeartCrack',
    features: [
      'Step-by-step process map',
      'Financial disclosure checklist',
      'Parenting plan guides',
      'Provincial legal basics',
    ],
    whoItsFor: 'Canadians navigating the complex process of separation and divorce',
    sortOrder: 31,
  },
  {
    id: '29',
    name: 'Investing Basics',
    slug: 'investing-basics',
    tagline: 'Start investing without the jargon',
    description:
      'Plain-language investing education for Canadians. TFSA, RRSP, and index funds—what actually matters, without the complexity.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_INVESTING_BASICS || 'http://localhost:3029',
    status: 'live',
    isFeatured: false,
    icon: 'Landmark',
    features: [
      'Account comparison (TFSA/RRSP/FHSA)',
      'Getting started roadmap',
      'Investment concept explainers',
      'Brokerage reviews',
    ],
    whoItsFor: 'Canadians looking to build wealth without the typical industry complexity',
    sortOrder: 32,
  },
  {
    id: '30',
    name: 'Freelancer Toolkit',
    slug: 'freelancer-toolkit',
    tagline: 'Survival guide for independent workers',
    description:
      'Essential tools and guides for Canadian freelancers. Tax basics, business structure, and rate calculators for independent success.',
    categoryId: '3',
    url: process.env.NEXT_PUBLIC_URL_FREELANCER_TOOLKIT || 'http://localhost:3030',
    status: 'live',
    isFeatured: false,
    icon: 'Briefcase',
    features: [
      'Billable rate calculator',
      'Incorporation vs Sole Prop guide',
      'GST/HST compliance checklist',
      'Expense deduction tracker',
    ],
    whoItsFor: 'Canadian freelancers and independent contractors managing their own business',
    sortOrder: 33,
  },
  {
    id: '34',
    name: 'Leader Watch',
    slug: 'leader-watch',
    tagline: 'Global political transparency scorecard',
    description:
      'Tracking G20 world leaders on democracy, equality, transparency, and climate action. Evidence-based ratings showing who is advancing prosperity and who is concentrating power.',
    categoryId: '2',
    url: process.env.NEXT_PUBLIC_URL_LEADER_WATCH || 'http://localhost:3035',
    status: 'live',
    isFeatured: true,
    icon: 'Eye',
    features: [
      'G20 leadership leaderboard',
      'Multi-index composite scores',
      'Key actions database',
      'Trend tracking (improving/declining)',
      'Transparent methodology',
    ],
    whoItsFor: 'Engaged citizens wanting evidence-based understanding of global political leadership',
    sortOrder: 0,
  },
];

export function getSiteBySlug(slug: string): Site | undefined {
  return sites.find((site) => site.slug === slug);
}

export function getSitesByCategory(categoryId: string): Site[] {
  return sites.filter((site) => site.categoryId === categoryId);
}

export function getFeaturedSites(): Site[] {
  return sites.filter((site) => site.isFeatured);
}

export function searchSites(query: string): Site[] {
  const lowerQuery = query.toLowerCase();
  return sites.filter(
    (site) =>
      site.name.toLowerCase().includes(lowerQuery) ||
      site.tagline.toLowerCase().includes(lowerQuery) ||
      site.description.toLowerCase().includes(lowerQuery)
  );
}
