import type { AgeGuide } from '@/types';

export const ageGuides: AgeGuide[] = [
    {
        decade: '30s',
        title: 'Building Your Foundation',
        tagline: 'The decade that determines your trajectory',
        description: 'Your 30s are the foundation years. The habits and physiological reserves you build now will determine your healthspan ceiling. Peak muscle mass, bone density, and VO2max are typically reached in the early-mid 30s—your job is to build them as high as possible.',
        priorities: [
            'Maximize VO2max (aerobic capacity is #1 predictor of longevity)',
            'Build muscle mass and strength (maintains metabolism and protects joints)',
            'Establish consistent sleep habits (7-9 hours, regular schedule)',
            'Develop stress management practices',
            'Avoid metabolic dysfunction (keep fasting glucose <90, A1c <5.5%)',
        ],
        keyInterventions: [
            'zone-2-training',
            'resistance-training',
            'sleep-optimization',
            'intermittent-fasting',
        ],
        biomarkersToTrack: [
            'fasting-glucose',
            'hba1c',
            'lipid-panel',
            'vitamin-d',
            'testosterone-estrogen',
        ],
        warnings: [
            'Don\'t coast on youth—decline starts silently',
            'Injuries in 30s heal slower than 20s; train smart',
            'Metabolic issues often appear here (first signs of insulin resistance)',
        ],
    },
    {
        decade: '40s',
        title: 'Maintaining Your Peak',
        tagline: 'Prevention becomes the priority',
        description: 'The 40s are when decline becomes noticeable. VO2max drops ~10% per decade without intervention. Hormone levels start declining. Injury recovery slows. Your focus shifts from building to maintaining—and catching problems early.',
        priorities: [
            'Maintain muscle mass aggressively (sarcopenia accelerates from here)',
            'Monitor and optimize hormones (testosterone, thyroid, cortisol)',
            'Prioritize recovery (you can\'t train through injuries like before)',
            'Begin serious preventive screening (colonoscopy at 45, cardiac calcium score)',
            'Address any sleep issues (apnea becomes more common)',
        ],
        keyInterventions: [
            'resistance-training',
            'zone-2-training',
            'creatine',
            'omega-3',
            'vitamin-d3',
        ],
        biomarkersToTrack: [
            'testosterone-estrogen',
            'thyroid-panel',
            'hscrp',
            'apob',
            'coronary-calcium',
        ],
        warnings: [
            'Heart attacks can happen in 40s—don\'t ignore symptoms',
            'Sleep apnea dramatically increases cardiovascular risk',
            '40s is when most cancers start developing (early screening saves lives)',
        ],
    },
    {
        decade: '50s',
        title: 'Active Preservation',
        tagline: 'Cognitive and bone health take center stage',
        description: 'Menopause (women) and andropause (men) significantly shift physiology. Bone density loss accelerates, especially in women. Cognitive decline becomes measurable. The 50s are about preservation and adaptation—not giving up on performance, but being strategic.',
        priorities: [
            'Protect bone density (weight-bearing exercise, calcium, D3, K2)',
            'Build cognitive reserve (learning, social engagement, exercise)',
            'Maintain balance and coordination (fall prevention starts now)',
            'Optimize protein intake (1g/lb is not excessive at this age)',
            'Consider hormone optimization (work with a specialist)',
        ],
        keyInterventions: [
            'resistance-training',
            'creatine',
            'omega-3',
            'vitamin-d3',
            'magnesium',
        ],
        biomarkersToTrack: [
            'dexa-bone-density',
            'vitamin-d',
            'homocysteine',
            'fasting-insulin',
            'thyroid-panel',
        ],
        warnings: [
            'Bone fractures in 50s+ have serious mortality implications',
            'Cognitive symptoms warrant evaluation (don\'t assume "just aging")',
            'Sarcopenic obesity is common (losing muscle while gaining fat)',
        ],
    },
    {
        decade: '60s',
        title: 'Adaptation Strategies',
        tagline: 'Training smarter, not just harder',
        description: 'The 60s require adaptation. You\'re managing more constraints—joints, recovery time, possibly medications. But this doesn\'t mean decline is inevitable. People who strength train in their 60s can have better muscle mass than sedentary 40-year-olds.',
        priorities: [
            'Fall prevention is critical (balance training, home modifications)',
            'Maintain muscle at all costs (losing muscle accelerates aging)',
            'Joint-friendly exercise modifications (swimming, cycling, machines)',
            'Social engagement (isolation is a major mortality risk)',
            'Polypharmacy review (drug interactions become common)',
        ],
        keyInterventions: [
            'resistance-training',
            'zone-2-training',
            'creatine',
            'balance-training',
            'vitamin-d3',
        ],
        biomarkersToTrack: [
            'grip-strength',
            'gait-speed',
            'kidney-function',
            'vitamin-b12',
            'cbc',
        ],
        warnings: [
            'Falls are leading cause of injury death in 65+',
            'Dehydration risk increases (thirst sensation diminishes)',
            'Medication side effects often mimic "normal aging"',
        ],
    },
    {
        decade: '70+',
        title: 'Independence Optimization',
        tagline: 'Functional ability is everything',
        description: 'In your 70s and beyond, the goal is simple: maintain the ability to do what you want to do. Can you get up from a chair without using your hands? Walk a mile? Carry groceries? These functional abilities predict independence and quality of life.',
        priorities: [
            'Activities of Daily Living (ADLs) are the benchmark',
            'Maintain walking ability (gait speed predicts mortality)',
            'Strength training remains beneficial (never too late to start)',
            'Protein intake may need to be higher (1.2-1.5g/kg minimum)',
            'Social connections and purpose (depression risk is high)',
        ],
        keyInterventions: [
            'resistance-training',
            'balance-training',
            'creatine',
            'vitamin-d3',
            'omega-3',
        ],
        biomarkersToTrack: [
            'grip-strength',
            'gait-speed',
            'chair-stand-test',
            'vitamin-d',
            'albumin',
        ],
        warnings: [
            'Frailty is reversible with intervention—don\'t accept decline',
            'Undereating is common and dangerous (not just overeating)',
            'Cognitive changes warrant immediate evaluation',
        ],
    },
];

export function getAgeGuide(decade: string): AgeGuide | undefined {
    return ageGuides.find(g => g.decade === decade);
}
