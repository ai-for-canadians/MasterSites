import { Topic } from '@/types';

export const topics: Topic[] = [
    {
        id: '1',
        title: 'Sleep Training',
        slug: 'sleep-training',
        stage: 'infant',
        shortDescription: 'Methods to help babies learn to fall asleep independently.',
        fullDescription: 'Sleep training refers to a variety of methods to help babies learn to fall asleep and stay asleep. Research generally supports that behavioral sleep interventions are effective and do not cause long-term harm to attachment or emotional health.',
        evidenceRating: 'Strong',
        keyTakeaways: [
            'Consistent bedtime routines are crucial.',
            '"Cry it out" (extinction) works faster but is harder for parents.',
            'Gradual extinction (Ferber) is effective but takes longer.',
            'No evidence of long-term emotional harm.'
        ],
        mythBuster: 'MYTH: Sleep training damages the parent-child bond. REALITY: Randomized controlled trials show no difference in attachment security between sleep-trained and non-sleep-trained children after 5 years.',
        resources: [
            { title: 'AAP Sleep Guidelines', url: 'https://www.aap.org', type: 'Organization' },
            { title: 'Five-Year Follow-up of Harms and Benefits of Behavioral Infant Sleep Intervention', url: '#', type: 'Study' }
        ]
    },
    {
        id: '2',
        title: 'Screen Time',
        slug: 'screen-time',
        stage: 'toddler',
        shortDescription: 'Impact of digital media on toddler development.',
        fullDescription: 'Excessive screen time in early childhood is associated with delays in language, cognitive, and social-emotional development. The quality of content and "co-viewing" with parents matters significantly.',
        evidenceRating: 'Strong',
        keyTakeaways: [
            'Avoid screens for children under 18-24 months (except video chat).',
            'For 2-5 years, limit to 1 hour of high-quality programming.',
            'Co-viewing helps children understand what they differ seeing.',
            'Background TV disrupts play and interaction.'
        ],
        mythBuster: 'MYTH: Educational apps can replace human teaching. REALITY: Toddlers learn best from real-world interaction and play; "educational" apps have limited transfer to real life.',
        resources: [
            { title: 'Canadian Paediatric Society: Screen time and young children', url: 'https://cps.ca', type: 'Article' }
        ]
    },
    {
        id: '3',
        title: 'Picky Eating',
        slug: 'picky-eating',
        stage: 'preschool',
        shortDescription: 'Strategies for managing selective eating habits.',
        fullDescription: 'Picky eating is a normal developmental phase. Pressuring children to eat often backfires. The "Division of Responsibility" model is the gold standard approach.',
        evidenceRating: 'Moderate',
        keyTakeaways: [
            'Parents decide WHAT, WHEN, and WHERE to feed.',
            'Children decide HOW MUCH and WHETHER to eat.',
            'Repeated exposure (10-15 times) is needed for acceptance.',
            'Avoid being a "short-order cook".'
        ],
        mythBuster: 'MYTH: You should force kids to finish their plate. REALITY: Ignoring satiety cues can lead to overeating and poor self-regulation later in life.',
        resources: [
            { title: 'Ellyn Satter Institute', url: 'https://www.ellynsatterinstitute.org', type: 'Organization' }
        ]
    },
    {
        id: '4',
        title: 'Homework Help',
        slug: 'homework-help',
        stage: 'school-age',
        shortDescription: 'How much should parents be involved in homework?',
        fullDescription: 'Parental involvement in schooling is generally positive, but intrusive help with homework specifically can be counterproductive. Autonomy support is better than direct control or doing it for them.',
        evidenceRating: 'Mixed',
        keyTakeaways: [
            'Focus on setting routines and environment.',
            'Encourage effort rather than just correct answers.',
            'Taking over tasks reduces student motivation.',
            'Communication with teachers is more effective than teaching at home.'
        ],
        mythBuster: 'MYTH: Good parents sit and correct every homework mistake. REALITY: Children need to experience struggle and failure to learn resilience and problem-solving.',
        resources: []
    },
    {
        id: '5',
        title: 'Social Media',
        slug: 'social-media',
        stage: 'teen',
        shortDescription: 'Navigating social platforms and mental health.',
        fullDescription: 'Social media use has a complex relationship with teen mental health. It can offer connection but also contributes to body image issues and anxiety, particularly in girls. Active use is better than passive scrolling.',
        evidenceRating: 'Moderate',
        keyTakeaways: [
            'Delay smartphone ownership as long as possible.',
            'Keep screens out of bedrooms at night.',
            'Talk about algorithm manipulation and curated lives.',
            'Focus on offline connection and activities.'
        ],
        mythBuster: 'MYTH: Banning social media entirely is the only solution. REALITY: Total bans can lead to social exclusion; guided, limited, and communicative usage is often more realistic and effective.',
        resources: [
            { title: 'U.S. Surgeon General Advisory on Social Media', url: '#', type: 'Article' }
        ]
    }
];
