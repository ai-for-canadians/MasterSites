import type { SupplementPairing } from '@/types';

export const pairings: SupplementPairing[] = [
    // ═══════════════════════════════════════════════════════════════
    // SYNERGISTIC PAIRINGS
    // ═══════════════════════════════════════════════════════════════
    {
        supplement1: 'vitamin-d',
        supplement2: 'vitamin-k2',
        type: 'synergistic',
        reason: 'K2 directs calcium mobilized by D3 to bones instead of arteries. Essential pairing for cardiovascular safety when supplementing D3 long-term.',
        timing: 'Take together with fat-containing meal',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'vitamin-d',
        supplement2: 'magnesium',
        type: 'synergistic',
        reason: 'Magnesium is required to convert D3 to its active form (calcitriol). Low magnesium = poor D3 utilization.',
        timing: 'Can take together',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'omega-3',
        supplement2: 'vitamin-e',
        type: 'synergistic',
        reason: 'Vitamin E protects omega-3 fatty acids from oxidation. Many quality fish oils already include vitamin E.',
        timing: 'Take together with meal',
        evidenceRating: 'B',
        sources: []
    },
    {
        supplement1: 'iron',
        supplement2: 'vitamin-c',
        type: 'synergistic',
        reason: 'Vitamin C dramatically increases non-heme iron absorption (up to 6x). Essential when taking plant-based iron sources.',
        timing: 'Take together',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'curcumin',
        supplement2: 'black-pepper',
        type: 'synergistic',
        reason: 'Piperine in black pepper increases curcumin absorption by up to 2000%. Look for formulas with BioPerine® or pair with fat.',
        timing: 'Take together with fat-containing meal',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'lions-mane',
        supplement2: 'niacin',
        type: 'synergistic',
        reason: 'Part of the "Stamets Stack" protocol. Niacin may enhance nerve growth factor delivery to peripheral nerves. Theoretical synergy for neurogenesis.',
        timing: 'Take together, start niacin low to manage flush',
        evidenceRating: 'C',
        sources: []
    },
    {
        supplement1: 'magnesium',
        supplement2: 'zinc',
        type: 'synergistic',
        reason: 'Both support sleep, recovery, and testosterone. ZMA formulas combine them effectively. Take away from calcium.',
        timing: 'Evening, away from calcium-rich foods',
        evidenceRating: 'B',
        sources: []
    },
    {
        supplement1: 'theanine',
        supplement2: 'caffeine',
        type: 'synergistic',
        reason: 'L-Theanine smooths out caffeine\'s stimulant effect, reducing jitters while preserving focus. Classic nootropic pairing.',
        timing: 'Take together (100-200mg theanine per 100mg caffeine)',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'vitamin-b12',
        supplement2: 'folate',
        type: 'synergistic',
        reason: 'B12 and folate work together in methylation pathways. Deficiency in one can mask deficiency in the other.',
        timing: 'Take together',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'creatine',
        supplement2: 'beta-alanine',
        type: 'synergistic',
        reason: 'Complementary mechanisms for exercise performance. Creatine for power, beta-alanine for endurance.',
        timing: 'Can take together, timing doesn\'t matter for either',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'ashwagandha',
        supplement2: 'rhodiola',
        type: 'synergistic',
        reason: 'Complementary adaptogens. Ashwagandha is more calming, Rhodiola more energizing. Together they balance stress response.',
        timing: 'Morning for both (Ashwagandha can also be taken at night)',
        evidenceRating: 'B',
        sources: []
    },
    {
        supplement1: 'collagen',
        supplement2: 'vitamin-c',
        type: 'synergistic',
        reason: 'Vitamin C is essential for collagen synthesis. Without it, collagen peptides cannot be properly utilized.',
        timing: 'Take together',
        evidenceRating: 'A',
        sources: []
    },

    // ═══════════════════════════════════════════════════════════════
    // CAUTION PAIRINGS (timing/ratio matters)
    // ═══════════════════════════════════════════════════════════════
    {
        supplement1: 'calcium',
        supplement2: 'iron',
        type: 'caution',
        reason: 'Calcium significantly inhibits iron absorption. Take at different times of day.',
        timing: 'Separate by at least 2 hours',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'zinc',
        supplement2: 'copper',
        type: 'caution',
        reason: 'High-dose zinc (40mg+) depletes copper over time. Long-term zinc supplementation should include copper at 8:1 to 15:1 ratio.',
        timing: 'If taking zinc long-term, add copper (1-2mg per 15-30mg zinc)',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'calcium',
        supplement2: 'magnesium',
        type: 'caution',
        reason: 'High calcium can compete with magnesium absorption. Most people are deficient in magnesium but not calcium—prioritize mag.',
        timing: 'Can take together in moderate doses, or separate',
        evidenceRating: 'B',
        sources: []
    },
    {
        supplement1: 'calcium',
        supplement2: 'zinc',
        type: 'caution',
        reason: 'Calcium can interfere with zinc absorption when taken together in high doses.',
        timing: 'Separate by 2+ hours if taking high doses',
        evidenceRating: 'B',
        sources: []
    },
    {
        supplement1: 'iron',
        supplement2: 'zinc',
        type: 'caution',
        reason: 'Iron and zinc compete for absorption when taken together in high doses.',
        timing: 'Separate by 2+ hours or take with food',
        evidenceRating: 'B',
        sources: []
    },
    {
        supplement1: 'vitamin-e',
        supplement2: 'vitamin-k',
        type: 'caution',
        reason: 'Very high dose vitamin E (>800 IU) may interfere with vitamin K, affecting blood clotting.',
        timing: 'Standard doses are fine together',
        evidenceRating: 'B',
        sources: []
    },
    {
        supplement1: 'melatonin',
        supplement2: 'magnesium',
        type: 'neutral',
        reason: 'Both support sleep. Magnesium is generally preferred as a first-line sleep support before adding melatonin.',
        timing: 'Both taken 30-60 min before bed',
        evidenceRating: 'B',
        sources: []
    },

    // ═══════════════════════════════════════════════════════════════
    // AVOID PAIRINGS (significant interactions)
    // ═══════════════════════════════════════════════════════════════
    {
        supplement1: 'st-johns-wort',
        supplement2: 'ssri-medications',
        type: 'avoid',
        reason: 'Risk of serotonin syndrome—a potentially life-threatening condition. Do not combine with any antidepressants.',
        timing: 'Do not combine',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'vitamin-e',
        supplement2: 'blood-thinners',
        type: 'avoid',
        reason: 'Vitamin E has blood-thinning effects. Can significantly increase bleeding risk with anticoagulants (warfarin, aspirin).',
        timing: 'Consult doctor before combining',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'omega-3',
        supplement2: 'blood-thinners',
        type: 'caution',
        reason: 'High-dose fish oil (3g+ EPA/DHA) can increase bleeding time. Moderate doses are usually fine but inform your doctor.',
        timing: 'Consult doctor if on anticoagulants',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'st-johns-wort',
        supplement2: 'birth-control',
        type: 'avoid',
        reason: 'St. John\'s Wort induces liver enzymes that break down birth control pills, reducing their effectiveness.',
        timing: 'Do not combine',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'grapefruit-extract',
        supplement2: 'statins',
        type: 'avoid',
        reason: 'Grapefruit inhibits CYP3A4 enzyme, dramatically increasing statin blood levels and risk of side effects.',
        timing: 'Do not combine',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'iron',
        supplement2: 'thyroid-medication',
        type: 'caution',
        reason: 'Iron significantly reduces absorption of levothyroxine (Synthroid). Separate by at least 4 hours.',
        timing: 'Take thyroid medication on empty stomach, iron later in day',
        evidenceRating: 'A',
        sources: []
    },
    {
        supplement1: 'calcium',
        supplement2: 'thyroid-medication',
        type: 'caution',
        reason: 'Calcium reduces absorption of thyroid medications. Separate by at least 4 hours.',
        timing: 'Take thyroid medication on empty stomach, calcium later',
        evidenceRating: 'A',
        sources: []
    },
];

// Helper function to get all pairings for a specific supplement
export function getPairingsForSupplement(slug: string): SupplementPairing[] {
    return pairings.filter(
        p => p.supplement1 === slug || p.supplement2 === slug
    );
}

// Helper function to check pairing between two supplements
export function checkPairing(slug1: string, slug2: string): SupplementPairing | null {
    return pairings.find(
        p => (p.supplement1 === slug1 && p.supplement2 === slug2) ||
            (p.supplement1 === slug2 && p.supplement2 === slug1)
    ) || null;
}

// Helper to get all pairings of a specific type
export function getPairingsByType(type: 'synergistic' | 'neutral' | 'caution' | 'avoid'): SupplementPairing[] {
    return pairings.filter(p => p.type === type);
}
