import type { SupplementStack } from '@/types';

export const stacks: SupplementStack[] = [
    {
        id: 'cognitive-performance',
        name: 'Cognitive Performance Stack',
        slug: 'cognitive-performance',
        goal: 'Cognitive',
        description: 'Optimize focus, memory, and mental clarity. Based on compounds with evidence for cognitive enhancement in healthy adults.',
        timing: 'Morning with breakfast',
        supplements: [
            {
                supplementSlug: 'omega-3',
                dose: '1-2g EPA+DHA',
                timing: 'With breakfast',
                notes: 'DHA is particularly important for brain structure'
            },
            {
                supplementSlug: 'creatine',
                dose: '5g',
                timing: 'Any time (consistency matters)',
                notes: 'Benefits cognition especially under stress/sleep deprivation'
            },
            {
                supplementSlug: 'theanine',
                dose: '100-200mg',
                timing: 'With morning coffee',
                notes: 'Smooths out caffeine, promotes alpha waves'
            },
            {
                supplementSlug: 'lions-mane',
                dose: '500-1000mg',
                timing: 'Morning',
                notes: 'NGF support for neuroplasticity'
            },
            {
                supplementSlug: 'vitamin-d',
                dose: '2000-5000 IU',
                timing: 'With fat-containing meal',
                notes: 'Deficiency linked to cognitive decline'
            }
        ],
        warnings: [
            'Lion\'s Mane: Some report vivid dreams or mild GI upset initially',
            'High-dose fish oil can thin blood—inform your doctor if on medications'
        ],
        evidenceRating: 'B'
    },
    {
        id: 'sleep-optimization',
        name: 'Sleep Optimization Stack',
        slug: 'sleep-optimization',
        goal: 'Sleep',
        description: 'Improve sleep onset, depth, and recovery. Focuses on calming the nervous system and supporting natural sleep architecture.',
        timing: 'Evening, 1-2 hours before bed',
        supplements: [
            {
                supplementSlug: 'magnesium',
                dose: '200-400mg (glycinate or threonate)',
                timing: '1 hour before bed',
                notes: 'Glycinate is gentle; threonate may have brain-specific benefits'
            },
            {
                supplementSlug: 'theanine',
                dose: '200mg',
                timing: '30-60 min before bed',
                notes: 'Promotes relaxation without sedation'
            },
            {
                supplementSlug: 'glycine',
                dose: '3g',
                timing: 'Before bed',
                notes: 'May lower body temperature and improve sleep quality'
            },
            {
                supplementSlug: 'tart-cherry',
                dose: '500mg extract or 8oz juice',
                timing: 'Evening',
                notes: 'Natural melatonin source'
            }
        ],
        warnings: [
            'Avoid melatonin as first-line—try these natural supports first',
            'Magnesium can cause loose stools at high doses',
            'If sleep issues persist, rule out apnea and other disorders'
        ],
        evidenceRating: 'B'
    },
    {
        id: 'longevity',
        name: 'Longevity Stack',
        slug: 'longevity',
        goal: 'Longevity',
        description: 'Compounds with evidence for healthspan extension, targeting inflammation, mitochondrial function, and cellular health.',
        timing: 'Split AM/PM',
        supplements: [
            {
                supplementSlug: 'omega-3',
                dose: '2g EPA+DHA',
                timing: 'With meals',
                notes: 'Anti-inflammatory, cardiovascular support'
            },
            {
                supplementSlug: 'vitamin-d',
                dose: '2000-5000 IU',
                timing: 'Morning with fat',
                notes: 'Pair with K2'
            },
            {
                supplementSlug: 'vitamin-k2',
                dose: '100-200mcg MK-7',
                timing: 'With D3',
                notes: 'Essential D3 companion for arterial health'
            },
            {
                supplementSlug: 'magnesium',
                dose: '300-400mg',
                timing: 'Evening',
                notes: 'Involved in 300+ enzymatic reactions'
            },
            {
                supplementSlug: 'creatine',
                dose: '5g',
                timing: 'Any time',
                notes: 'Emerging evidence for brain aging'
            },
            {
                supplementSlug: 'curcumin',
                dose: '500mg (with piperine)',
                timing: 'With fat-containing meal',
                notes: 'Anti-inflammatory, requires bioavailability enhancer'
            }
        ],
        warnings: [
            'This is optimization on top of a solid lifestyle foundation',
            'Regular blood work recommended to track markers',
            'Curcumin can interact with blood thinners'
        ],
        evidenceRating: 'B'
    },
    {
        id: 'energy',
        name: 'Energy Stack',
        slug: 'energy',
        goal: 'Energy',
        description: 'Sustainable energy without crashes. Focuses on mitochondrial support, adaptogens, and essential cofactors.',
        timing: 'Morning routine',
        supplements: [
            {
                supplementSlug: 'vitamin-b12',
                dose: '1000mcg (methylcobalamin)',
                timing: 'Morning',
                notes: 'Essential for energy metabolism'
            },
            {
                supplementSlug: 'iron',
                dose: 'Only if deficient (test ferritin first)',
                timing: 'With vitamin C, away from coffee',
                notes: 'Common cause of fatigue, especially in women'
            },
            {
                supplementSlug: 'rhodiola',
                dose: '200-400mg',
                timing: 'Morning (before noon)',
                notes: 'Adaptogen for physical and mental fatigue'
            },
            {
                supplementSlug: 'coq10',
                dose: '100-200mg',
                timing: 'With fat-containing meal',
                notes: 'Mitochondrial energy production'
            },
            {
                supplementSlug: 'creatine',
                dose: '5g',
                timing: 'Any time',
                notes: 'Cellular energy buffer'
            }
        ],
        warnings: [
            'Rule out thyroid issues and sleep disorders first',
            'Iron: NEVER supplement without testing—it\'s toxic in excess',
            'Rhodiola: Take earlier in day to avoid sleep interference'
        ],
        evidenceRating: 'B'
    },
    {
        id: 'immune-support',
        name: 'Immune Support Stack',
        slug: 'immune-support',
        goal: 'Immune',
        description: 'Foundation supplements that support immune function year-round. Especially relevant during cold/flu season.',
        timing: 'Morning with breakfast',
        supplements: [
            {
                supplementSlug: 'vitamin-d',
                dose: '2000-5000 IU (titrate to 40-60 ng/mL)',
                timing: 'With fat',
                notes: 'Deficiency strongly linked to poor immune outcomes'
            },
            {
                supplementSlug: 'zinc',
                dose: '15-30mg',
                timing: 'With food to avoid nausea',
                notes: 'Don\'t exceed 40mg long-term without copper'
            },
            {
                supplementSlug: 'vitamin-c',
                dose: '500-1000mg',
                timing: 'Split doses throughout day',
                notes: 'Mild benefit; more useful when stressed/sick'
            },
            {
                supplementSlug: 'elderberry',
                dose: '150-300mg extract',
                timing: 'Daily during cold season',
                notes: 'May reduce cold/flu duration'
            }
        ],
        warnings: [
            'Vitamin D: Get blood levels tested (aim for 40-60 ng/mL)',
            'High-dose zinc long-term requires copper supplementation',
            'Elderberry: Stop if you develop autoimmune flare'
        ],
        evidenceRating: 'B'
    },
    {
        id: 'athletic-performance',
        name: 'Athletic Performance Stack',
        slug: 'athletic-performance',
        goal: 'Athletic',
        description: 'Evidence-based supplements for strength, power, and endurance. These are the few that actually work.',
        timing: 'Pre/post workout + daily',
        supplements: [
            {
                supplementSlug: 'creatine',
                dose: '5g daily',
                timing: 'Any time (consistency > timing)',
                notes: 'The most researched and effective sports supplement'
            },
            {
                supplementSlug: 'caffeine',
                dose: '3-6mg/kg body weight',
                timing: '30-60 min before training',
                notes: 'Proven ergogenic aid; cycle off periodically'
            },
            {
                supplementSlug: 'beta-alanine',
                dose: '3-6g daily',
                timing: 'Split doses to reduce tingling',
                notes: 'Benefits 1-4 min high-intensity efforts'
            },
            {
                supplementSlug: 'citrulline',
                dose: '6-8g (or 8-10g citrulline malate)',
                timing: '30-60 min pre-workout',
                notes: 'May improve blood flow and reduce fatigue'
            },
            {
                supplementSlug: 'vitamin-d',
                dose: '2000-5000 IU',
                timing: 'Daily with fat',
                notes: 'Low D linked to poor performance and injury risk'
            },
            {
                supplementSlug: 'magnesium',
                dose: '300-400mg',
                timing: 'Evening',
                notes: 'Supports muscle function and recovery'
            }
        ],
        warnings: [
            'Caffeine: Don\'t overdo it—tolerance builds quickly',
            'Beta-alanine causes harmless tingling (paresthesia)',
            'These complement—not replace—proper training and nutrition'
        ],
        evidenceRating: 'A'
    },
    {
        id: 'stamets-stack',
        name: 'Stamets Stack (Neurogenesis)',
        slug: 'stamets-stack',
        goal: 'Cognitive',
        description: 'Paul Stamets\' protocol for neurogenesis and nerve regeneration. Theoretical synergy between Lion\'s Mane, Niacin, and psilocybin (microdose). Note: Psilocybin is not legal everywhere.',
        timing: 'Morning, 4 days on / 3 days off',
        supplements: [
            {
                supplementSlug: 'lions-mane',
                dose: '500-1000mg',
                timing: 'Morning',
                notes: 'Promotes NGF (nerve growth factor)'
            },
            {
                supplementSlug: 'niacin',
                dose: '100-200mg (flush form)',
                timing: 'With Lion\'s Mane',
                notes: 'Vasodilation may deliver NGF to peripheral nerves. Start LOW.'
            }
        ],
        warnings: [
            'Niacin flush can be intense—start with 50mg and work up',
            'This is a theoretical protocol with limited clinical evidence',
            'The original stack includes psilocybin, which is controlled',
            'Lion\'s Mane + Niacin alone still has potential neurogenic benefits'
        ],
        evidenceRating: 'C'
    }
];

// Helper function to get stacks by goal
export function getStacksByGoal(goal: string): SupplementStack[] {
    return stacks.filter(s => s.goal.toLowerCase() === goal.toLowerCase());
}

// Helper function to get a stack by slug
export function getStackBySlug(slug: string): SupplementStack | undefined {
    return stacks.find(s => s.slug === slug);
}
