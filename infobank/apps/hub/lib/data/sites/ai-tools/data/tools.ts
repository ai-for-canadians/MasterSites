import { AITool } from '@/types/ai-tools';

export const tools: AITool[] = [
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        slug: 'chatgpt',
        category: 'writing',
        summary: 'The industry leader for general purpose chat and text generation.',
        description: 'ChatGPT by OpenAI is a versatile chat interface powered by GPT-4 (in Plus). It excels at reasoning, coding, and creative writing. It has become the default "AI" for most people.',
        websiteUrl: 'https://chat.openai.com',
        rating: 9.5,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['GPT-3.5', 'Standard speed'] },
            { name: 'Plus', price: '$20/mo', features: ['GPT-4', 'DALL-E 3', 'Browsing'] }
        ],
        pros: ['Extremely versatile logic', 'Large context window', 'Custom GPTs'],
        cons: ['Knowledge cutoff dates', 'Can be verbose', 'Rate limits on GPT-4'],
        useCases: ['Drafting emails', 'Summarizing text', 'Coding help', 'Brainstorming']
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        slug: 'midjourney',
        category: 'image',
        summary: 'Best-in-class artistic image generation.',
        description: 'Midjourney operates via Discord and produces highly aesthetic, artistic images. It struggles with text but excels at style, lighting, and composition compared to DALL-E 3.',
        websiteUrl: 'https://midjourney.com',
        rating: 9.2,
        pricingType: 'paid',
        pricingPlans: [
            { name: 'Basic', price: '$10/mo', features: ['Fast GPU time', 'Commercial terms'] },
            { name: 'Standard', price: '$30/mo', features: ['Unlimited Relaxed GPU', 'Stealth mode'] }
        ],
        pros: ['Stunning artistic quality', 'Consistency', 'Style control'],
        cons: ['Discord interface is clunky', 'No free trial usually', 'Hard to control exact details'],
        useCases: ['Concept art', 'Blog headers', 'Social media visuals']
    },
    {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        slug: 'github-copilot',
        category: 'code',
        summary: 'The standard for AI autocompletion in your IDE.',
        description: 'Copilot lives in VS Code (and other IDEs) and suggests code as you type. It acts as an advanced autocomplete that understands context.',
        websiteUrl: 'https://github.com/features/copilot',
        rating: 9.0,
        pricingType: 'paid',
        pricingPlans: [
            { name: 'Individual', price: '$10/mo', features: ['IDE integration', 'Chat'] }
        ],
        pros: ['Seamless workflow integration', 'Good at boilerplate', 'Chat feature explains code'],
        cons: ['Can suggest insecure code', 'Sometimes hallucinates APIs'],
        useCases: ['Boilerplate generation', 'Unit tests', 'Refactoring']
    },
    {
        id: 'claude',
        name: 'Claude 3',
        slug: 'claude',
        category: 'writing',
        summary: 'Large context window and natural, human-like writing.',
        description: 'Claude 3 by Anthropic is known for its massive context window (analyzing whole books/codebases) and its safer, more steerable responses. Opus is currently SOTA.',
        websiteUrl: 'https://claude.ai',
        rating: 9.6,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['Sonnet model'] },
            { name: 'Pro', price: '$20/mo', features: ['Opus model', 'Priority access'] }
        ],
        pros: ['Nuanced writing', 'Less "robot" sounding', 'Huge context window'],
        cons: ['Strict refusal filters', 'No image generation'],
        useCases: ['Long-form writing', 'Document analysis', 'Coding (Opus)']
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        slug: 'perplexity',
        category: 'productivity',
        summary: 'AI-powered search engine that cites sources.',
        description: 'Perplexity replaces Google for many queries. It scans the web and synthesizes an answer with footnotes to the actual sources.',
        websiteUrl: 'https://perplexity.ai',
        rating: 9.3,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['Standard search'] },
            { name: 'Pro', price: '$20/mo', features: ['GPT-4/Claude 3 access', 'Unlimited file upload'] }
        ],
        pros: ['Real-time information', 'transparent citations', 'Fast'],
        cons: ['Can struggle with complex analysis', 'Limited creative writing'],
        useCases: ['Research', 'Fact-checking', 'News summary']
    },
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        slug: 'elevenlabs',
        category: 'audio',
        summary: 'The most realistic AI voice generation.',
        description: 'ElevenLabs provides uncanny text-to-speech and voice cloning. It captures intonation and emotion better than competitors.',
        websiteUrl: 'https://elevenlabs.io',
        rating: 9.4,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['10k chars/mo'] },
            { name: 'Starter', price: '$5/mo', features: ['30k chars', 'Voice cloning'] }
        ],
        pros: ['Incredible realism', 'Instant voice cloning', 'Multi-lingual'],
        cons: ['Can be expensive for long content', 'Ethical concerns w/ cloning'],
        useCases: ['Podcasts', 'Audiobooks', 'Video narration']
    },
    {
        id: 'notion-ai',
        name: 'Notion AI',
        slug: 'notion-ai',
        category: 'productivity',
        summary: 'AI integrated directly into your workspace notes.',
        description: 'If you use Notion, this is a no-brainer. It can summarize meetings, edit text, and generate action items without leaving your doc.',
        websiteUrl: 'https://notion.so',
        rating: 8.5,
        pricingType: 'paid',
        pricingPlans: [
            { name: 'Add-on', price: '$10/mo', features: ['Unlimited AI usage'] }
        ],
        pros: ['Great context of your workspace', 'Convenient UI', 'Good summarization'],
        cons: ['Not as smart as GPT-4 strictly', 'Another subscription'],
        useCases: ['Summarizing meeting notes', 'Editing drafts', 'Brainstorming lists']
    },
    {
        id: 'runway',
        name: 'Runway Gen-2',
        slug: 'runway',
        category: 'video',
        summary: 'Text-to-video generation for creatives.',
        description: 'Runway is a suite of tools for video editing, but Gen-2 is their flagship text-to-video model. It creates short clips from prompts.',
        websiteUrl: 'https://runwayml.com',
        rating: 8.0,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['125 credits'] },
            { name: 'Standard', price: '$12/mo', features: ['625 credits', 'No watermarks'] }
        ],
        pros: ['Pioneering tech', 'Motion brush controls', 'Good web interface'],
        cons: ['Video consistency issues', 'Short duration limits', 'Expensive'],
        useCases: ['B-roll', 'Experimental video', 'Storyboarding']
    },
    {
        id: 'sora',
        name: 'Sora (OpenAI)',
        slug: 'sora',
        category: 'video',
        summary: 'Unreleased but revolutionary video generation.',
        description: 'Sora generates 60s videos with complex camera motion and persistence. Currently only available to red teamers.',
        websiteUrl: 'https://openai.com/sora',
        rating: 9.8,
        pricingType: 'free',
        pricingPlans: [],
        pros: ['Unmatched realism', 'Simulates physics', 'Long duration'],
        cons: ['Not publicly available yet', 'High compute cost likely'],
        useCases: ['future of filmmaking', 'simulation']
    },
    {
        id: 'cursor',
        name: 'Cursor',
        slug: 'cursor',
        category: 'code',
        summary: 'A fork of VS Code built entirely for AI.',
        description: 'Cursor integrates AI deeper than Copilot. It can refactor entire files, understand your terminal, and fix bugs with one click.',
        websiteUrl: 'https://cursor.sh',
        rating: 9.2,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['Basic AI'] },
            { name: 'Pro', price: '$20/mo', features: ['GPT-4 fast usage'] }
        ],
        pros: ['Better than Copilot for refactoring', 'Codebase awareness', 'VS Code compatible'],
        cons: ['Separate IDE to install', 'Subscription for best models'],
        useCases: ['Heavy coding', 'Refactoring legacy code']
    },
    {
        id: 'jasper',
        name: 'Jasper',
        slug: 'jasper',
        category: 'writing',
        summary: 'Marketing-focused copy generation.',
        description: 'Jasper (formerly Jarvis) is built for marketers. It has templates for blogs, ads, and social media that follow copywriting frameworks.',
        websiteUrl: 'https://jasper.ai',
        rating: 8.5,
        pricingType: 'paid',
        pricingPlans: [
            { name: 'Creator', price: '$39/mo', features: ['1 seat', 'Brand voice'] }
        ],
        pros: ['Marketing templates', 'Brand voice memory', 'SEO integration'],
        cons: ['Expensive compared to ChatGPT', 'Quality gap closing with generic models'],
        useCases: ['Ad copy', 'SEO blogs', 'Social captions']
    },
    {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        slug: 'stable-diffusion',
        category: 'image',
        summary: 'Open source image generation you can run locally.',
        description: 'Reviewing SDXL/SD3. The best option for control freaks and privacy. If you have the hardware, it offers infinite customizability.',
        websiteUrl: 'https://stability.ai',
        rating: 9.0,
        pricingType: 'free',
        pricingPlans: [{ name: 'Open Source', price: '$0', features: ['Run locally'] }],
        pros: ['Free', 'Uncensored', 'ControlNet'],
        cons: ['High hardware requirements', 'Steep learning curve'],
        useCases: ['Game assets', 'Private generation', 'Custom fine-tuning']
    },
    {
        id: 'gamma',
        name: 'Gamma',
        slug: 'gamma',
        category: 'productivity',
        summary: 'Generate manufacturing-ready slide decks.',
        description: 'Gamma creates presentations, documents, and webpages from a prompt. It handles the design layout automatically.',
        websiteUrl: 'https://gamma.app',
        rating: 8.8,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['400 credits'] },
            { name: 'Plus', price: '$8/mo', features: ['Remove branding'] }
        ],
        pros: ['Saves hours on slide design', 'Interactive elements', 'Clean aesthetic'],
        cons: ['Templates can feel repetitive', 'Limited export options'],
        useCases: ['Pitch decks', 'Internal updates', 'Client proposals']
    },
    {
        id: 'magnific',
        name: 'Magnific AI',
        slug: 'magnific',
        category: 'image',
        summary: 'Upscale and hallucinate details into images.',
        description: 'Magnific takes a low-res image and "hallucinates" high-resolution details. It turns blurry photos into crisp 4k art.',
        websiteUrl: 'https://magnific.ai',
        rating: 8.7,
        pricingType: 'paid',
        pricingPlans: [{ name: 'Pro', price: '$39/mo', features: ['Standard upscale'] }],
        pros: ['Unbelievable detail', 'Control over "creativity" slider'],
        cons: ['Very expensive', 'Can change the face/identity of subjects'],
        useCases: ['Print prep', 'Restoring old photos', 'High-end design']
    },
    {
        id: 'sunog',
        name: 'Suno',
        slug: 'suno',
        category: 'audio',
        summary: 'Make full songs with lyrics and vocals.',
        description: 'Suno generates radio-quality songs from a text prompt. It handles lyrics, melody, harmony, and vocals.',
        websiteUrl: 'https://suno.ai',
        rating: 9.1,
        pricingType: 'freemium',
        pricingPlans: [{ name: 'Free', price: '$0', features: ['50 credits/day'] }],
        pros: ['Shockingly good music', 'Fun factor', 'Full composition'],
        cons: ['Copyright gray area', 'Audio quality sometimes grainy'],
        useCases: ['Jingles', 'Demos', 'Fun']
    },
    {
        id: 'gemini',
        name: 'Gemini',
        slug: 'gemini',
        category: 'writing',
        summary: 'Google\'s multimodal AI with deep integration into Google Workspace.',
        description: 'Gemini (formerly Bard) is Google\'s flagship AI model. With Ultra, Pro, and Nano variants, it excels at understanding text, images, and code. Deep integration with Google Search and Workspace apps.',
        websiteUrl: 'https://gemini.google.com',
        rating: 9.4,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['Gemini Pro', 'Basic features'] },
            { name: 'Advanced', price: '$20/mo', features: ['Gemini Ultra', '2TB storage', 'Workspace integration'] }
        ],
        pros: ['Real-time Google Search integration', 'Multimodal understanding', 'Workspace native'],
        cons: ['Sometimes less creative than GPT-4', 'Google account required'],
        useCases: ['Research', 'Email drafting', 'Image analysis', 'Coding help']
    },
    {
        id: 'dall-e-3',
        name: 'DALL-E 3',
        slug: 'dall-e-3',
        category: 'image',
        summary: 'OpenAI\'s integrated image generator with superior text rendering.',
        description: 'DALL-E 3 is integrated directly into ChatGPT. It follows prompts more accurately than previous versions and can render readable text in images—a major improvement over competitors.',
        websiteUrl: 'https://openai.com/dall-e-3',
        rating: 9.3,
        pricingType: 'paid',
        pricingPlans: [
            { name: 'ChatGPT Plus', price: '$20/mo', features: ['Included with Plus', '~50 images/3hrs'] },
            { name: 'API', price: '$0.04/image', features: ['Standard quality 1024x1024'] }
        ],
        pros: ['Excellent text rendering', 'Prompt adherence', 'Seamless ChatGPT integration'],
        cons: ['Strict content policy', 'No inpainting/editing yet', 'Rate limited'],
        useCases: ['Marketing graphics', 'Social media images', 'Mockups with text']
    },
    {
        id: 'v0-vercel',
        name: 'v0 by Vercel',
        slug: 'v0-vercel',
        category: 'code',
        summary: 'AI-powered UI component generator that outputs React/Tailwind code.',
        description: 'v0 generates production-ready UI components from natural language descriptions. It outputs clean React + Tailwind CSS code that you can immediately use in your projects.',
        websiteUrl: 'https://v0.dev',
        rating: 9.0,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['200 credits/mo'] },
            { name: 'Premium', price: '$20/mo', features: ['Unlimited generations', 'Priority access'] }
        ],
        pros: ['Production-ready code', 'Beautiful default styles', 'Iterative refinement'],
        cons: ['React/Tailwind only', 'Can be repetitive in style', 'Credits run out fast'],
        useCases: ['Rapid prototyping', 'Landing pages', 'Dashboard components']
    },
    {
        id: 'otter-ai',
        name: 'Otter.ai',
        slug: 'otter-ai',
        category: 'productivity',
        summary: 'Real-time meeting transcription and note-taking assistant.',
        description: 'Otter joins your meetings (Zoom, Google Meet, Teams) and transcribes everything in real-time. It identifies speakers, generates summaries, and creates action items.',
        websiteUrl: 'https://otter.ai',
        rating: 8.9,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['300 mins/mo', 'Basic transcription'] },
            { name: 'Pro', price: '$17/mo', features: ['1200 mins/mo', 'Advanced search', 'Export'] }
        ],
        pros: ['Accurate transcription', 'Speaker identification', 'Searchable archive'],
        cons: ['Monthly limits on free tier', 'Occasional speaker mix-ups', 'Requires meeting access'],
        useCases: ['Meeting notes', 'Interview transcription', 'Lecture capture']
    },
    {
        id: 'grammarly-ai',
        name: 'Grammarly',
        slug: 'grammarly-ai',
        category: 'writing',
        summary: 'Context-aware writing assistant for grammar, tone, and clarity.',
        description: 'Grammarly goes beyond spell-check to analyze tone, clarity, and engagement. The AI features (GrammarlyGO) can rewrite text in different styles and generate content from prompts.',
        websiteUrl: 'https://grammarly.com',
        rating: 8.7,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['Basic grammar', 'Tone detection'] },
            { name: 'Premium', price: '$12/mo', features: ['Full writing suggestions', 'GrammarlyGO', 'Plagiarism check'] }
        ],
        pros: ['Works everywhere (browser, desktop)', 'Detailed explanations', 'Tone adjustments'],
        cons: ['Premium required for best features', 'Can be overly prescriptive', 'Privacy concerns'],
        useCases: ['Email polishing', 'Academic writing', 'Professional communication']
    },
    {
        id: 'synthesia',
        name: 'Synthesia',
        slug: 'synthesia',
        category: 'video',
        summary: 'Create AI avatar videos without cameras or actors.',
        description: 'Synthesia generates videos with realistic AI presenters from text scripts. Choose from 150+ diverse avatars that speak 120+ languages. Perfect for training and marketing videos.',
        websiteUrl: 'https://synthesia.io',
        rating: 8.8,
        pricingType: 'paid',
        pricingPlans: [
            { name: 'Starter', price: '$22/mo', features: ['10 mins/mo', '90+ avatars'] },
            { name: 'Creator', price: '$67/mo', features: ['30 mins/mo', 'Custom avatars'] }
        ],
        pros: ['No filming required', 'Multilingual', 'Quick turnaround'],
        cons: ['Avatar "uncanny valley"', 'Limited emotional range', 'Expensive at scale'],
        useCases: ['Training videos', 'Product demos', 'Localized content']
    },
    {
        id: 'heygen',
        name: 'HeyGen',
        slug: 'heygen',
        category: 'video',
        summary: 'AI video generation with instant avatar cloning.',
        description: 'HeyGen creates spokesperson videos from text. Its standout feature is Instant Avatar—record a 2-minute video of yourself, and HeyGen clones your likeness and voice.',
        websiteUrl: 'https://heygen.com',
        rating: 8.6,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['1 credit', 'Public avatars'] },
            { name: 'Creator', price: '$24/mo', features: ['15 credits/mo', 'Instant Avatar'] }
        ],
        pros: ['Personal avatar cloning', 'Video translation/dubbing', 'Good lip sync'],
        cons: ['Credits go quickly', 'Clone requires clean footage', 'Less avatar variety than Synthesia'],
        useCases: ['Personalized outreach', 'Course content', 'Multilingual marketing']
    },
    {
        id: 'descript',
        name: 'Descript',
        slug: 'descript',
        category: 'audio',
        summary: 'Edit audio and video by editing text—like a doc.',
        description: 'Descript transcribes your recordings, then lets you edit audio/video by editing the transcript. Delete words from the text, and they disappear from the recording. Overdub clones your voice.',
        websiteUrl: 'https://descript.com',
        rating: 9.0,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['1 hour transcription', 'Basic editing'] },
            { name: 'Creator', price: '$12/mo', features: ['10 hrs transcription', 'Overdub voice clone'] }
        ],
        pros: ['Revolutionary editing paradigm', 'Filler word removal', 'Voice cloning (Overdub)'],
        cons: ['Learning curve', 'Resource intensive', 'Overdub needs training data'],
        useCases: ['Podcast editing', 'Video post-production', 'Repurposing long-form content']
    },
    {
        id: 'anthropic-api',
        name: 'Claude API',
        slug: 'anthropic-api',
        category: 'code',
        summary: 'Anthropic\'s Claude models via API for developers.',
        description: 'Access Claude Opus, Sonnet, and Haiku via API. Known for large context windows (200K tokens), strong reasoning, and more nuanced responses. Popular for coding and analysis tasks.',
        websiteUrl: 'https://anthropic.com',
        rating: 9.5,
        pricingType: 'paid',
        pricingPlans: [
            { name: 'Haiku', price: '$0.25/1M tokens', features: ['Fast, cheap'] },
            { name: 'Sonnet', price: '$3/1M tokens', features: ['Balanced'] },
            { name: 'Opus', price: '$15/1M tokens', features: ['Most capable'] }
        ],
        pros: ['Massive context window', 'Excellent at coding', 'More "thoughtful" outputs'],
        cons: ['No image generation', 'API-only (no free chat)', 'Strict usage policies'],
        useCases: ['Code generation', 'Document analysis', 'Complex reasoning tasks']
    },
    {
        id: 'leonardo-ai',
        name: 'Leonardo.ai',
        slug: 'leonardo-ai',
        category: 'image',
        summary: 'Fine-tuned image generation with game-asset focus.',
        description: 'Leonardo.ai offers image generation with a focus on game assets, characters, and consistent style. Train custom models on your own images for style-consistent generation.',
        websiteUrl: 'https://leonardo.ai',
        rating: 8.9,
        pricingType: 'freemium',
        pricingPlans: [
            { name: 'Free', price: '$0', features: ['150 tokens/day'] },
            { name: 'Apprentice', price: '$10/mo', features: ['8500 tokens/mo', 'Model training'] }
        ],
        pros: ['Consistent character generation', 'Custom model training', 'Game-art focus'],
        cons: ['Tokens run out fast', 'Interface can be overwhelming', 'Less photorealistic than Midjourney'],
        useCases: ['Game assets', 'Character design', 'Style-consistent content']
    }
];

