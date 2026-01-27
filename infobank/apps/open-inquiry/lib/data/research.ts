export interface ResearchStudy {
    id: string;
    title: string;
    authors: string;
    journal: string;
    year: number;
    url: string;
    summary: string;
    tags: string[];
    substanceIds: string[];
}

export const researchStudies: ResearchStudy[] = [
    {
        id: '1',
        title: 'Psilocybin for treatment-resistant depression: effects on brain mechanisms',
        authors: 'Carhart-Harris RL, et al.',
        journal: 'Nature Scientific Reports',
        year: 2017,
        url: 'https://doi.org/10.1038/srep45962',
        summary: 'This study demonstrated that psilocybin therapy produced rapid and sustained antidepressant effects in patients with treatment-resistant depression. fMRI imaging showed decreased blood flow to the amygdala (fear center) which correlated with reduced depressive symptoms.',
        tags: ['Depression', 'Neuroscience', 'fMRI'],
        substanceIds: ['psilocybin']
    },
    {
        id: '2',
        title: 'MDMA-assisted therapy for severe PTSD: a randomized, double-blind, placebo-controlled phase 3 study',
        authors: 'Mitchell JM, et al.',
        journal: 'Nature Medicine',
        year: 2021,
        url: 'https://doi.org/10.1038/s41591-021-01336-3',
        summary: 'The landmark Phase 3 trial that showed MDMA-assisted therapy is highly effective for severe PTSD. 67% of participants no longer qualified for a PTSD diagnosis after 3 sessions, compared to 32% in the placebo group.',
        tags: ['PTSD', 'Phase 3', 'Trauma'],
        substanceIds: ['mdma'] // Note: MDMA to be added to substances if missing, or generic reference
    },
    {
        id: '3',
        title: 'Percentage of Heavy Drinking Days Following Psilocybin-Assisted Psychotherapy vs Placebo',
        authors: 'Bogenschutz MP, et al.',
        journal: 'JAMA Psychiatry',
        year: 2022,
        url: 'https://doi.org/10.1001/jamapsychiatry.2022.2096',
        summary: 'A randomized clinical trial showing that psilocybin treatment significantly reduced heavy drinking days in patients with alcohol use disorder compared to active placebo (diphenhydramine).',
        tags: ['Addiction', 'Alcohol', 'Clinical Trial'],
        substanceIds: ['psilocybin']
    },
    {
        id: '4',
        title: 'Ketamine for Treatment-Resistant Depression: A Systematic Review',
        authors: 'Caddy C, et al.',
        journal: 'Therapeutic Advances in Psychopharmacology',
        year: 2015,
        url: 'https://doi.org/10.1177/2045125315605333',
        summary: 'A comprehensive review confirming the rapid-acting antidepressant effects of ketamine. It highlights the high response rate but notes the transient nature of the effect, lasting 1-2 weeks after a single infusion.',
        tags: ['Depression', 'Ketamine', 'Review'],
        substanceIds: ['ketamine']
    },
    {
        id: '5',
        title: 'Classic Psychedelics and Heart Health: Cross-Sectional Analysis',
        authors: 'Simonsson O, et al.',
        journal: 'Journal of Psychopharmacology',
        year: 2021,
        url: 'https://doi.org/10.1177/02698811211019572',
        summary: 'A population study suggesting that lifetime use of classic psychedelics is associated with lower odds of heart disease and diabetes, possibly due to lifestyle changes or anti-inflammatory effects.',
        tags: ['Physical Health', 'Epidemiology'],
        substanceIds: ['psilocybin', 'lsd']
    }
];
