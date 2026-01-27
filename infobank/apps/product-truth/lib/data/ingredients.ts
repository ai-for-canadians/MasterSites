import type { Ingredient, SafetyRating } from '@/types';

export const ingredients: Ingredient[] = [
  // HIGH CONCERN INGREDIENTS
  {
    id: '1',
    name: 'Parabens',
    slug: 'parabens',
    otherNames: ['Methylparaben', 'Propylparaben', 'Butylparaben', 'Ethylparaben'],
    description:
      'Parabens are preservatives used to prevent bacterial growth in cosmetics and personal care products. They have been detected in breast tumors and can mimic estrogen in the body.',
    safetyRating: 'high_concern',
    evidenceRating: 'B',
    concerns: [
      {
        title: 'Endocrine Disruption',
        description:
          'Parabens can mimic estrogen and interfere with hormone function. Multiple studies have shown estrogenic activity in laboratory tests.',
        severity: 'high',
        evidenceRating: 'B',
      },
      {
        title: 'Found in Breast Tumors',
        description:
          'A 2004 study detected parabens in 18 of 20 breast tumor samples. While this doesn\'t prove causation, it raises concerns about accumulation.',
        severity: 'moderate',
        evidenceRating: 'C',
      },
    ],
    sources: [
      {
        title: 'Darbre PD. Concentrations of parabens in human breast tumours. J Appl Toxicol. 2004',
        url: 'https://pubmed.ncbi.nlm.nih.gov/14745841/',
        type: 'study',
        year: 2004,
      },
      {
        title: 'Health Canada Assessment of Parabens',
        url: 'https://www.canada.ca/en/health-canada/services/chemical-substances/other-chemical-substances-interest/parabens.html',
        type: 'guideline',
        year: 2020,
      },
    ],
    foundIn: ['Lotions', 'Shampoos', 'Makeup', 'Deodorants'],
    saferAlternatives: ['Phenoxyethanol', 'Potassium Sorbate', 'Sodium Benzoate'],
  },
  {
    id: '2',
    name: 'Sodium Lauryl Sulfate',
    slug: 'sodium-lauryl-sulfate',
    otherNames: ['SLS', 'Sodium Dodecyl Sulfate'],
    description:
      'A surfactant and detergent that creates foam in shampoos, cleansers, and toothpaste. Can be irritating to skin and eyes, especially at high concentrations.',
    safetyRating: 'moderate_concern',
    evidenceRating: 'B',
    concerns: [
      {
        title: 'Skin Irritation',
        description:
          'SLS can strip natural oils from skin and cause dryness, redness, and irritation, particularly in people with sensitive skin or eczema.',
        severity: 'moderate',
        evidenceRating: 'A',
      },
      {
        title: 'Eye Irritation',
        description:
          'Contact with eyes can cause stinging and irritation. This is why "no tears" baby shampoos typically avoid SLS.',
        severity: 'low',
        evidenceRating: 'A',
      },
    ],
    sources: [
      {
        title: 'Basketter DA, et al. Sodium lauryl sulfate: A model substance for skin irritation. Contact Dermatitis. 1997',
        url: 'https://pubmed.ncbi.nlm.nih.gov/9062672/',
        type: 'review',
        year: 1997,
      },
    ],
    foundIn: ['Shampoos', 'Body Wash', 'Toothpaste', 'Face Wash'],
    saferAlternatives: ['Sodium Laureth Sulfate', 'Cocamidopropyl Betaine', 'Decyl Glucoside'],
  },
  {
    id: '3',
    name: 'Formaldehyde-Releasing Preservatives',
    slug: 'formaldehyde-releasing-preservatives',
    otherNames: ['DMDM Hydantoin', 'Quaternium-15', 'Diazolidinyl Urea', 'Imidazolidinyl Urea'],
    description:
      'Preservatives that slowly release formaldehyde over time to prevent bacterial growth. Formaldehyde is a known carcinogen and skin sensitizer.',
    safetyRating: 'avoid',
    evidenceRating: 'A',
    concerns: [
      {
        title: 'Carcinogen Exposure',
        description:
          'Formaldehyde is classified as a known human carcinogen by multiple health agencies including IARC and NTP.',
        severity: 'high',
        evidenceRating: 'A',
      },
      {
        title: 'Skin Sensitization',
        description:
          'Can cause allergic contact dermatitis and is one of the most common causes of cosmetic-related skin reactions.',
        severity: 'moderate',
        evidenceRating: 'A',
      },
    ],
    sources: [
      {
        title: 'IARC Monograph on Formaldehyde',
        url: 'https://monographs.iarc.who.int/wp-content/uploads/2018/06/mono100F-29.pdf',
        type: 'guideline',
        year: 2012,
      },
      {
        title: 'Health Canada - Formaldehyde in Cosmetics',
        url: 'https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/industry-professionals/formaldehyde-cosmetics.html',
        type: 'guideline',
        year: 2021,
      },
    ],
    foundIn: ['Shampoos', 'Conditioners', 'Body Wash', 'Nail Polish'],
    saferAlternatives: ['Phenoxyethanol', 'Ethylhexylglycerin', 'Sodium Benzoate'],
  },
  {
    id: '4',
    name: 'Fragrance',
    slug: 'fragrance',
    otherNames: ['Parfum', 'Perfume', 'Essential Oil Blend'],
    description:
      'A catch-all term for thousands of undisclosed chemicals. Companies aren\'t required to list specific fragrance ingredients due to trade secret laws.',
    safetyRating: 'moderate_concern',
    evidenceRating: 'C',
    concerns: [
      {
        title: 'Undisclosed Ingredients',
        description:
          'The term "fragrance" can mask hundreds of chemicals, some of which may be sensitizers, allergens, or hormone disruptors.',
        severity: 'moderate',
        evidenceRating: 'C',
      },
      {
        title: 'Allergic Reactions',
        description:
          'Fragrance is one of the top 5 allergens in cosmetics and a common cause of contact dermatitis.',
        severity: 'moderate',
        evidenceRating: 'B',
      },
    ],
    sources: [
      {
        title: 'Uter W, et al. Contact allergy to ingredients of hair cosmetics. Allergy. 2010',
        url: 'https://pubmed.ncbi.nlm.nih.gov/19845570/',
        type: 'study',
        year: 2010,
      },
    ],
    foundIn: ['Almost all cosmetics', 'Lotions', 'Shampoos', 'Cleaning products'],
    saferAlternatives: ['Products labeled fragrance-free', 'Specific essential oils (if not sensitive)'],
  },
  {
    id: '5',
    name: 'Triclosan',
    slug: 'triclosan',
    otherNames: ['Microban'],
    description:
      'An antibacterial and antifungal agent. Banned in hand soaps by FDA in 2016 but still allowed in some toothpastes and cosmetics.',
    safetyRating: 'avoid',
    evidenceRating: 'A',
    concerns: [
      {
        title: 'Endocrine Disruption',
        description:
          'Studies show triclosan can interfere with thyroid hormone function and may affect reproductive hormones.',
        severity: 'high',
        evidenceRating: 'B',
      },
      {
        title: 'Antibiotic Resistance',
        description:
          'Overuse of triclosan may contribute to the development of antibiotic-resistant bacteria.',
        severity: 'high',
        evidenceRating: 'B',
      },
    ],
    sources: [
      {
        title: 'FDA - Triclosan: What Consumers Should Know',
        url: 'https://www.fda.gov/consumers/consumer-updates/antibacterial-soap-you-can-skip-it-use-plain-soap-and-water',
        type: 'guideline',
        year: 2019,
      },
    ],
    foundIn: ['Some toothpastes', 'Antibacterial soaps (banned)', 'Deodorants'],
    saferAlternatives: ['Regular soap and water', 'Alcohol-based sanitizers'],
  },

  // MODERATE CONCERN
  {
    id: '6',
    name: 'Phenoxyethanol',
    slug: 'phenoxyethanol',
    otherNames: [],
    description:
      'A glycol ether used as a preservative in cosmetics. Generally considered safer than parabens but can cause irritation in some people.',
    safetyRating: 'low_concern',
    evidenceRating: 'B',
    concerns: [
      {
        title: 'Skin Irritation (Rare)',
        description:
          'Can cause eczema-like reactions in some sensitive individuals, though this is relatively uncommon.',
        severity: 'low',
        evidenceRating: 'B',
      },
    ],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - Phenoxyethanol Safety Assessment',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2020,
      },
    ],
    foundIn: ['Lotions', 'Shampoos', 'Makeup', 'Sunscreens'],
    saferAlternatives: ['Potassium Sorbate', 'Sodium Benzoate'],
  },
  {
    id: '7',
    name: 'Oxybenzone',
    slug: 'oxybenzone',
    otherNames: ['Benzophenone-3', 'BP-3'],
    description:
      'A chemical sunscreen ingredient that absorbs UV rays. Concerns about hormone disruption and coral reef damage have led to bans in some locations.',
    safetyRating: 'moderate_concern',
    evidenceRating: 'B',
    concerns: [
      {
        title: 'Potential Hormone Disruption',
        description:
          'Some studies suggest oxybenzone may have weak estrogenic activity, though human significance is debated.',
        severity: 'moderate',
        evidenceRating: 'C',
      },
      {
        title: 'High Absorption Rate',
        description:
          'Oxybenzone is absorbed through skin at higher rates than other sunscreen ingredients.',
        severity: 'low',
        evidenceRating: 'A',
      },
    ],
    sources: [
      {
        title: 'FDA Sunscreen Monograph',
        url: 'https://www.fda.gov/drugs/understanding-over-counter-medicines/sunscreen-how-help-protect-your-skin-sun',
        type: 'guideline',
        year: 2021,
      },
    ],
    foundIn: ['Sunscreens', 'Moisturizers with SPF'],
    saferAlternatives: ['Zinc Oxide', 'Titanium Dioxide', 'Avobenzone'],
  },
  {
    id: '8',
    name: 'Aluminum Compounds',
    slug: 'aluminum-compounds',
    otherNames: ['Aluminum Chlorohydrate', 'Aluminum Zirconium', 'Aluminum Chloride'],
    description:
      'Used in antiperspirants to block sweat glands. Concerns about links to breast cancer and Alzheimer\'s have been investigated but not conclusively proven.',
    safetyRating: 'low_concern',
    evidenceRating: 'C',
    concerns: [
      {
        title: 'Breast Cancer Concerns (Unproven)',
        description:
          'Some studies suggested a link between aluminum in antiperspirants and breast cancer, but larger reviews found no conclusive evidence.',
        severity: 'low',
        evidenceRating: 'D',
      },
    ],
    sources: [
      {
        title: 'National Cancer Institute - Antiperspirants/Deodorants and Breast Cancer',
        url: 'https://www.cancer.gov/about-cancer/causes-prevention/risk/myths/antiperspirants-fact-sheet',
        type: 'guideline',
        year: 2020,
      },
    ],
    foundIn: ['Antiperspirants'],
    saferAlternatives: ['Natural deodorants without antiperspirant', 'Baking soda-based formulas'],
  },
  {
    id: '9',
    name: 'PEGs',
    slug: 'pegs',
    otherNames: ['Polyethylene Glycol', 'PEG-6', 'PEG-8', 'PEG-100'],
    description:
      'Petroleum-based compounds used as thickeners and softeners. Main concern is potential contamination with carcinogenic byproducts during manufacturing.',
    safetyRating: 'low_concern',
    evidenceRating: 'C',
    concerns: [
      {
        title: 'Contamination Risk',
        description:
          'PEGs can be contaminated with ethylene oxide (carcinogen) and 1,4-dioxane during manufacturing if not properly purified.',
        severity: 'moderate',
        evidenceRating: 'C',
      },
    ],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - PEG Safety',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2018,
      },
    ],
    foundIn: ['Moisturizers', 'Cleansers', 'Hair products'],
    saferAlternatives: ['Plant-based emulsifiers', 'Glycerin'],
  },
  {
    id: '10',
    name: 'Retinyl Palmitate',
    slug: 'retinyl-palmitate',
    otherNames: ['Vitamin A Palmitate'],
    description:
      'A form of vitamin A used in anti-aging products. Concerns primarily when used in sunscreen, where UV exposure may cause skin damage.',
    safetyRating: 'moderate_concern',
    evidenceRating: 'C',
    concerns: [
      {
        title: 'Photosensitivity in Sunscreens',
        description:
          'Some animal studies suggested that retinyl palmitate exposed to UV light may increase skin tumor development, though human studies are lacking.',
        severity: 'moderate',
        evidenceRating: 'D',
      },
    ],
    sources: [
      {
        title: 'FDA Statement on Retinyl Palmitate',
        url: 'https://www.fda.gov/',
        type: 'guideline',
        year: 2019,
      },
    ],
    foundIn: ['Sunscreens', 'Anti-aging creams', 'Moisturizers'],
    saferAlternatives: ['Retinol (night use only)', 'Niacinamide'],
  },

  // LOW CONCERN / SAFE
  {
    id: '11',
    name: 'Dimethicone',
    slug: 'dimethicone',
    otherNames: ['Polydimethylsiloxane'],
    description:
      'A silicone-based polymer that creates a smooth, silky feel in products. Forms a protective barrier on skin and hair. Generally considered safe.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - Dimethicone Safety',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2020,
      },
    ],
    foundIn: ['Hair conditioners', 'Moisturizers', 'Primers', 'Anti-frizz products'],
    saferAlternatives: [],
  },
  {
    id: '12',
    name: 'Cetyl Alcohol',
    slug: 'cetyl-alcohol',
    otherNames: ['Palmityl Alcohol'],
    description:
      'A fatty alcohol derived from vegetable oils. Despite "alcohol" in the name, it\'s not drying. Acts as a thickener and emollient. Very safe.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - Fatty Alcohols',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2019,
      },
    ],
    foundIn: ['Lotions', 'Conditioners', 'Creams'],
    saferAlternatives: [],
  },
  {
    id: '13',
    name: 'Tocopherol',
    slug: 'tocopherol',
    otherNames: ['Vitamin E', 'Alpha-Tocopherol'],
    description:
      'Vitamin E used as an antioxidant and skin conditioning agent. Protects products from oxidation and provides skin benefits. Very safe.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - Tocopherol',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2020,
      },
    ],
    foundIn: ['Moisturizers', 'Serums', 'Sunscreens', 'Lip balms'],
    saferAlternatives: [],
  },
  {
    id: '14',
    name: 'Niacinamide',
    slug: 'niacinamide',
    otherNames: ['Nicotinamide', 'Vitamin B3'],
    description:
      'A form of vitamin B3 with multiple skin benefits including reducing inflammation, brightening skin, and strengthening skin barrier. Well-tolerated and safe.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'Bissett DL. Niacinamide in skin care. Dermatol Ther. 2017',
        url: 'https://pubmed.ncbi.nlm.nih.gov/',
        type: 'review',
        year: 2017,
      },
    ],
    foundIn: ['Serums', 'Moisturizers', 'Toners'],
    saferAlternatives: [],
  },
  {
    id: '15',
    name: 'Hyaluronic Acid',
    slug: 'hyaluronic-acid',
    otherNames: ['Sodium Hyaluronate', 'Hyaluronan'],
    description:
      'A naturally occurring substance that holds 1000x its weight in water. Excellent humectant for hydrating skin. Very safe and effective.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - Hyaluronic Acid',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2020,
      },
    ],
    foundIn: ['Serums', 'Moisturizers', 'Eye creams'],
    saferAlternatives: [],
  },
  {
    id: '16',
    name: 'Aloe Vera',
    slug: 'aloe-vera',
    otherNames: ['Aloe Barbadensis Leaf Extract'],
    description:
      'Plant extract with soothing and anti-inflammatory properties. Used for skin calming and hydration. Very safe when properly processed.',
    safetyRating: 'safe',
    evidenceRating: 'B',
    concerns: [],
    sources: [
      {
        title: 'Surjushe A, et al. Aloe vera: A short review. Indian J Dermatol. 2008',
        url: 'https://pubmed.ncbi.nlm.nih.gov/19882025/',
        type: 'review',
        year: 2008,
      },
    ],
    foundIn: ['After-sun products', 'Moisturizers', 'Face masks'],
    saferAlternatives: [],
  },
  {
    id: '17',
    name: 'Shea Butter',
    slug: 'shea-butter',
    otherNames: ['Butyrospermum Parkii'],
    description:
      'Natural fat extracted from shea tree nuts. Excellent moisturizer rich in fatty acids and vitamins. Safe for most skin types.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - Shea Butter',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2019,
      },
    ],
    foundIn: ['Body lotions', 'Lip balms', 'Hair conditioners'],
    saferAlternatives: [],
  },
  {
    id: '18',
    name: 'Jojoba Oil',
    slug: 'jojoba-oil',
    otherNames: ['Simmondsia Chinensis Seed Oil'],
    description:
      'Actually a liquid wax that closely resembles skin\'s natural sebum. Non-comedogenic and suitable for all skin types. Very safe.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - Jojoba Oil',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2020,
      },
    ],
    foundIn: ['Facial oils', 'Hair oils', 'Makeup removers'],
    saferAlternatives: [],
  },
  {
    id: '19',
    name: 'Glycerin',
    slug: 'glycerin',
    otherNames: ['Glycerol', 'Glycerine'],
    description:
      'A humectant that attracts moisture to skin. One of the most effective and safe moisturizing ingredients. Can be plant or petroleum derived.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - Glycerin',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2020,
      },
    ],
    foundIn: ['Almost all moisturizers', 'Cleansers', 'Soaps'],
    saferAlternatives: [],
  },
  {
    id: '20',
    name: 'Zinc Oxide',
    slug: 'zinc-oxide',
    otherNames: [],
    description:
      'Mineral sunscreen ingredient that provides broad-spectrum UV protection by reflecting and scattering UV rays. Safe and reef-friendly.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'FDA Sunscreen Monograph',
        url: 'https://www.fda.gov/',
        type: 'guideline',
        year: 2021,
      },
    ],
    foundIn: ['Mineral sunscreens', 'Diaper creams', 'Makeup'],
    saferAlternatives: [],
  },
  {
    id: '21',
    name: 'Titanium Dioxide',
    slug: 'titanium-dioxide',
    otherNames: [],
    description:
      'Mineral sunscreen ingredient and pigment. Provides UV protection and whitening effect. Generally considered safe, though inhalation of nanoparticles in spray form should be avoided.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'FDA - Titanium Dioxide Safety',
        url: 'https://www.fda.gov/',
        type: 'guideline',
        year: 2021,
      },
    ],
    foundIn: ['Sunscreens', 'Foundation', 'Setting powders'],
    saferAlternatives: [],
  },
  {
    id: '22',
    name: 'Coconut Oil',
    slug: 'coconut-oil',
    otherNames: ['Cocos Nucifera Oil'],
    description:
      'Natural oil rich in fatty acids. Moisturizing but can be comedogenic for some. Generally safe though may not suit acne-prone skin.',
    safetyRating: 'safe',
    evidenceRating: 'B',
    concerns: [],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - Coconut Oil',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2019,
      },
    ],
    foundIn: ['Hair masks', 'Body lotions', 'Lip balms'],
    saferAlternatives: [],
  },
  {
    id: '23',
    name: 'Squalane',
    slug: 'squalane',
    otherNames: [],
    description:
      'A hydrogenated form of squalene (naturally found in skin). Excellent emollient that mimics skin\'s natural oils. Very safe and non-comedogenic.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [
      {
        title: 'Cosmetic Ingredient Review - Squalane',
        url: 'https://www.cir-safety.org/',
        type: 'review',
        year: 2020,
      },
    ],
    foundIn: ['Facial oils', 'Serums', 'Moisturizers'],
    saferAlternatives: [],
  },
  {
    id: '24',
    name: 'Centella Asiatica',
    slug: 'centella-asiatica',
    otherNames: ['Cica', 'Gotu Kola', 'Tiger Grass'],
    description:
      'Botanical extract with anti-inflammatory and wound-healing properties. Popular in K-beauty. Very safe and well-tolerated.',
    safetyRating: 'safe',
    evidenceRating: 'B',
    concerns: [],
    sources: [
      {
        title: 'Bylka W, et al. Centella asiatica in dermatology. Postepy Dermatol Alergol. 2014',
        url: 'https://pubmed.ncbi.nlm.nih.gov/',
        type: 'review',
        year: 2014,
      },
    ],
    foundIn: ['Soothing creams', 'Serums', 'Sheet masks'],
    saferAlternatives: [],
  },
  {
    id: '25',
    name: 'Green Tea Extract',
    slug: 'green-tea-extract',
    otherNames: ['Camellia Sinensis Leaf Extract'],
    description:
      'Antioxidant-rich plant extract with anti-inflammatory properties. Protects against environmental damage. Very safe.',
    safetyRating: 'safe',
    evidenceRating: 'B',
    concerns: [],
    sources: [
      {
        title: 'Katiyar SK, et al. Green tea polyphenols in skin cancer. Toxicol Appl Pharmacol. 2007',
        url: 'https://pubmed.ncbi.nlm.nih.gov/',
        type: 'study',
        year: 2007,
      },
    ],
    foundIn: ['Serums', 'Toners', 'Moisturizers'],
    saferAlternatives: [],
  },
  // HIGH CONCERN (Added)
  {
    id: '26',
    name: 'Phthalates',
    slug: 'phthalates',
    otherNames: ['DEP', 'DBP', 'Fragrance Ingredients'],
    description: 'Plasticizing chemicals often hidden in fragrance. Endocrine disruptors linked to reproductive issues and developmental problems.',
    safetyRating: 'avoid',
    evidenceRating: 'A',
    concerns: [
      { title: 'Hormone Disruption', description: 'Anti-androgenic effects, impacting male reproductive health.', severity: 'high', evidenceRating: 'A' },
      { title: 'Developmental Toxicity', description: 'Prenatal exposure linked to neurodevelopmental issues.', severity: 'moderate', evidenceRating: 'B' }
    ],
    sources: [{ title: 'CDC Factsheet on Phthalates', url: 'https://www.cdc.gov/biomonitoring/Phthalates_FactSheet.html', type: 'guideline', year: 2021 }],
    foundIn: ['Perfumes', 'Hair Spray', 'Nail Polish', 'Lotions'],
    saferAlternatives: ['Phthalate-free specific products', 'Essential oils']
  },
  {
    id: '27',
    name: 'BHA',
    slug: 'bha',
    otherNames: ['Butylated Hydroxyanisole'],
    description: 'Synthetic antioxidant preservative. Reasonably anticipated human carcinogen and potential endocrine disruptor.',
    safetyRating: 'avoid',
    evidenceRating: 'B',
    concerns: [
      { title: 'Carcinogenicity', description: 'Classified as a possible carcinogen by IARC.', severity: 'high', evidenceRating: 'B' },
      { title: 'Endocrine Disruption', description: 'Can exert estrogenic effects.', severity: 'moderate', evidenceRating: 'C' }
    ],
    sources: [{ title: 'NTP Report on BHA', url: 'https://ntp.niehs.nih.gov/', type: 'review', year: 2016 }],
    foundIn: ['Lipsticks', 'Moisturizers', 'Diaper Creams'],
    saferAlternatives: ['Tocopherol (Vitamin E)', 'Rosemary Extract']
  },
  {
    id: '28',
    name: 'BHT',
    slug: 'bht',
    otherNames: ['Butylated Hydroxytoluene'],
    description: 'Toluene-based preservative often used with BHA. Linked to organ toxicity and skin irritation.',
    safetyRating: 'high_concern',
    evidenceRating: 'B',
    concerns: [
      { title: 'Organ Toxicity', description: 'Animal studies suggest liver and kidney effects.', severity: 'moderate', evidenceRating: 'B' },
      { title: 'Allergen', description: 'Potential respiratory and skin irritant.', severity: 'low', evidenceRating: 'C' }
    ],
    sources: [{ title: 'Study on BHT Toxicity', url: 'https://pubmed.ncbi.nlm.nih.gov/', type: 'study', year: 2002 }],
    foundIn: ['Lip products', 'Creams', 'Preservatives'],
    saferAlternatives: ['Tocopherol']
  },
  {
    id: '29',
    name: 'Coal Tar',
    slug: 'coal-tar',
    otherNames: ['Aminophenol', 'Diaminobenzene', 'Phenylenediamine', 'FD&C colors'],
    description: 'Byproduct of coal processing used in hair dyes and dandruff shampoos. Known carcinogen.',
    safetyRating: 'avoid',
    evidenceRating: 'A',
    concerns: [
      { title: 'Cancer', description: 'Known human carcinogen.', severity: 'high', evidenceRating: 'A' },
      { title: 'Heavy Metals', description: 'Can contain biological contaminants and heavy metals.', severity: 'moderate', evidenceRating: 'B' }
    ],
    sources: [{ title: 'FDA on Coal Tar', url: 'https://www.fda.gov/', type: 'guideline', year: 2018 }],
    foundIn: ['Dandruff Shampoos', 'Hair Dyes'],
    saferAlternatives: ['Zinc Pyrithione', 'Salicylic Acid', 'Natural pigments']
  },
  {
    id: '30',
    name: 'Hydroquinone',
    slug: 'hydroquinone',
    otherNames: ['Benzene-1,4-diol'],
    description: 'Skin lightening agent used for hyperpigmentation. Cytotoxic to melanocytes and banned in several countries.',
    safetyRating: 'avoid',
    evidenceRating: 'A',
    concerns: [
      { title: 'Ochronosis', description: 'Can cause permanent blue-black skin discoloration.', severity: 'high', evidenceRating: 'A' },
      { title: 'Carcinogenicity', description: 'Potential links to cancer in animal studies.', severity: 'moderate', evidenceRating: 'C' }
    ],
    sources: [{ title: 'FDA Hydroquinone Safety', url: 'https://www.fda.gov/', type: 'guideline', year: 2020 }],
    foundIn: ['Skin lighteners', 'Fade creams'],
    saferAlternatives: ['Vitamin C', 'Niacinamide', 'Azelaic Acid', 'Licorice Root']
  },

  // MODERATE CONCERN (Added)
  {
    id: '31',
    name: 'Cyclopentasiloxane',
    slug: 'cyclopentasiloxane',
    otherNames: ['Cyclomethicone', 'D5'],
    description: 'Volatile silicone used for silky feel and quick drying. Bioaccumulative and potential endocrine disruptor.',
    safetyRating: 'moderate_concern',
    evidenceRating: 'B',
    concerns: [
      { title: 'Environmental Persistence', description: 'Persists in water systems and bioaccumulates.', severity: 'moderate', evidenceRating: 'A' },
      { title: 'Endocrine Disruption', description: 'Weak estrogen mimic in some studies.', severity: 'low', evidenceRating: 'C' }
    ],
    sources: [{ title: 'SCCS Opinion on D5', url: 'https://ec.europa.eu/health/scientific_committees', type: 'review', year: 2016 }],
    foundIn: ['Hair serums', 'Primers', 'Deodorants'],
    saferAlternatives: ['Dimethicone (safer/larger molecule)', 'Plant alkanes']
  },
  {
    id: '32',
    name: 'Sodium Laureth Sulfate',
    slug: 'sodium-laureth-sulfate',
    otherNames: ['SLES'],
    description: 'Milder detergent than SLS but concerns about 1,4-dioxane contamination during ethoxylation process.',
    safetyRating: 'moderate_concern',
    evidenceRating: 'B',
    concerns: [
      { title: 'Contamination', description: 'Can contain trace 1,4-dioxane (carcinogen).', severity: 'moderate', evidenceRating: 'B' },
      { title: 'Irritation', description: 'Less irritating than SLS but can still dry skin.', severity: 'low', evidenceRating: 'A' }
    ],
    sources: [{ title: 'FDA on 1,4-Dioxane', url: 'https://www.fda.gov/', type: 'guideline', year: 2019 }],
    foundIn: ['Shampoos', 'Body Wash'],
    saferAlternatives: ['Glucosides', 'Betaines']
  },
  {
    id: '33',
    name: 'Homosalate',
    slug: 'homosalate',
    otherNames: [],
    description: 'UV filter often used in sunscreens. Penetrates skin and acts as a weak hormone disruptor. Breaks down into toxic byproducts.',
    safetyRating: 'moderate_concern',
    evidenceRating: 'B',
    concerns: [
      { title: 'Hormone Disruption', description: 'Estrogenic, androgenic, and progesterone activity.', severity: 'moderate', evidenceRating: 'B' }
    ],
    sources: [{ title: 'European Commission Opinion', url: 'https://ec.europa.eu/', type: 'review', year: 2020 }],
    foundIn: ['Sunscreens', 'SPF Moisturizers'],
    saferAlternatives: ['Zinc Oxide', 'Titanium Dioxide']
  },
  {
    id: '34',
    name: 'Octinoxate',
    slug: 'octinoxate',
    otherNames: ['Octyl Methoxycinnamate'],
    description: 'Common chemical sunscreen. Endocrine disruptor causing thyroid and reproductive effects. Harmful to coral reefs.',
    safetyRating: 'moderate_concern',
    evidenceRating: 'A',
    concerns: [
      { title: 'Hormone Disruption', description: 'Thyroid function alteration.', severity: 'moderate', evidenceRating: 'B' },
      { title: 'Environmental Toxicity', description: 'Bleaches coral reefs.', severity: 'high', evidenceRating: 'A' }
    ],
    sources: [{ title: 'NANA/NOAA Coral Reef Study', url: 'https://oceanservice.noaa.gov/', type: 'study', year: 2015 }],
    foundIn: ['Sunscreens', 'Lip Balms', 'Foundations'],
    saferAlternatives: ['Zinc Oxide', 'Titanium Dioxide']
  },
  {
    id: '35',
    name: 'Ethanolamines',
    slug: 'ethanolamines',
    otherNames: ['MEA', 'DEA', 'TEA'],
    description: 'Emulsifiers and pH adjusters. React to form nitrosamines (carcinogens) if not formulated correctly.',
    safetyRating: 'moderate_concern',
    evidenceRating: 'B',
    concerns: [
      { title: 'Nitrosamine Formation', description: 'Can create carcinogenic compounds.', severity: 'high', evidenceRating: 'B' },
      { title: 'Organ Toxicity', description: 'Cumulative liver/kidney toxicity.', severity: 'moderate', evidenceRating: 'C' }
    ],
    sources: [{ title: 'Cosmetic Ingredient Review', url: 'https://www.cir-safety.org/', type: 'review', year: 2013 }],
    foundIn: ['Soaps', 'Shampoos', 'Hair Dyes'],
    saferAlternatives: ['Plant-based emulsifiers']
  },

  // SAFE ALTERNATIVES (Added)
  {
    id: '36',
    name: 'Bakuchiol',
    slug: 'bakuchiol',
    otherNames: ['Psoralea Corylifolia Extract'],
    description: 'Plant-derived alternative to retinol. Provides similar anti-aging benefits without the irritation or photosensitivity.',
    safetyRating: 'safe',
    evidenceRating: 'B',
    concerns: [],
    sources: [{ title: 'Bakuchiol vs Retinol Trial', url: 'https://pubmed.ncbi.nlm.nih.gov/29947134/', type: 'study', year: 2018 }],
    foundIn: ['Serums', 'Creams'],
    saferAlternatives: []
  },
  {
    id: '37',
    name: 'Azelaic Acid',
    slug: 'azelaic-acid',
    otherNames: [],
    description: 'Naturally occurring acid found in grains. Effective for acne, rosacea, and hyperpigmentation. Very gentle.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [{ title: 'AAD Guidelines on Acne', url: 'https://www.aad.org/', type: 'guideline', year: 2016 }],
    foundIn: ['Acne treatments', 'Rosacea creams'],
    saferAlternatives: []
  },
  {
    id: '38',
    name: 'Ceramides',
    slug: 'ceramides',
    otherNames: ['Ceramide NP', 'Ceramide AP'],
    description: 'Lipids that make up 50% of the skin barrier. Essential for moisture retention and protection. Bio-identical and safe.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [{ title: 'Role of Ceramides in Skin', url: 'https://pubmed.ncbi.nlm.nih.gov/', type: 'review', year: 2014 }],
    foundIn: ['Moisturizers', 'Cleansers'],
    saferAlternatives: []
  },
  {
    id: '39',
    name: 'Colloidal Oatmeal',
    slug: 'colloidal-oatmeal',
    otherNames: ['Avena Sativa Kernel Flour'],
    description: 'Finely ground oats. FDA-approved skin protectant. Soothes eczema, itching, and irritation.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [{ title: 'Colloidal Oatmeal Clinical Evidence', url: 'https://pubmed.ncbi.nlm.nih.gov/', type: 'review', year: 2015 }],
    foundIn: ['Eczema creams', 'Lotions', 'Bath soaks'],
    saferAlternatives: []
  },
  {
    id: '40',
    name: 'Panthenol',
    slug: 'panthenol',
    otherNames: ['Provitamin B5'],
    description: 'Humectant that soothes and heals skin. Improves hydration and reduces inflammation. Very safe.',
    safetyRating: 'safe',
    evidenceRating: 'A',
    concerns: [],
    sources: [{ title: 'Panthenol in Wound Healing', url: 'https://pubmed.ncbi.nlm.nih.gov/', type: 'study', year: 2002 }],
    foundIn: ['Creams', 'Lotions', 'Hair care'],
    saferAlternatives: []
  },

export function getIngredientById(id: string): Ingredient | undefined {
  return ingredients.find((ing) => ing.id === id);
}

export function getIngredientBySlug(slug: string): Ingredient | undefined {
  return ingredients.find((ing) => ing.slug === slug);
}

export function searchIngredients(query: string): Ingredient[] {
  const lowerQuery = query.toLowerCase();
  return ingredients.filter(
    (ing) =>
      ing.name.toLowerCase().includes(lowerQuery) ||
      ing.otherNames.some((name) => name.toLowerCase().includes(lowerQuery)) ||
      ing.description.toLowerCase().includes(lowerQuery)
  );
}

export function getIngredientsByRating(rating: SafetyRating): Ingredient[] {
  return ingredients.filter((ing) => ing.safetyRating === rating);
}
