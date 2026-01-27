import type { Product } from '@/types';

export const products: Product[] = [
  // SKINCARE
  {
    id: '1',
    name: 'Moisturizing Cream',
    slug: 'cerave-moisturizing-cream',
    brand: 'CeraVe',
    category: 'skincare',
    categoryId: '1',
    description:
      'Daily moisturizer with ceramides and hyaluronic acid. Developed with dermatologists for dry to very dry skin.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '12', ingredientName: 'Cetyl Alcohol', ingredientSlug: 'cetyl-alcohol', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '15', ingredientName: 'Hyaluronic Acid', ingredientSlug: 'hyaluronic-acid', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '11', ingredientName: 'Dimethicone', ingredientSlug: 'dimethicone', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '6', ingredientName: 'Phenoxyethanol', ingredientSlug: 'phenoxyethanol', safetyRating: 'low_concern', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },
  {
    id: '2',
    name: 'Hydro Boost Water Gel',
    slug: 'neutrogena-hydro-boost',
    brand: 'Neutrogena',
    category: 'skincare',
    categoryId: '1',
    description:
      'Oil-free gel moisturizer with hyaluronic acid. Lightweight formula for combination to oily skin.',
    overallSafetyScore: 7,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '15', ingredientName: 'Hyaluronic Acid', ingredientSlug: 'hyaluronic-acid', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '11', ingredientName: 'Dimethicone', ingredientSlug: 'dimethicone', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
    ],
    saferAlternatives: [
      { id: '1', name: 'CeraVe Moisturizing Cream', slug: 'cerave-moisturizing-cream', brand: 'CeraVe', safetyScore: 8 },
    ],
    lastUpdated: '2024-01-15',
  },
  {
    id: '3',
    name: 'Regenerist Micro-Sculpting Cream',
    slug: 'olay-regenerist',
    brand: 'Olay',
    category: 'skincare',
    categoryId: '1',
    description:
      'Anti-aging moisturizer with niacinamide and peptides. Targets fine lines and wrinkles.',
    overallSafetyScore: 5,
    safetyRating: 'moderate_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '14', ingredientName: 'Niacinamide', ingredientSlug: 'niacinamide', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '1', ingredientName: 'Parabens', ingredientSlug: 'parabens', safetyRating: 'high_concern', isPrimaryConcern: true },
    ],
    saferAlternatives: [
      { id: '4', name: 'The Ordinary Niacinamide 10% + Zinc 1%', slug: 'the-ordinary-niacinamide', brand: 'The Ordinary', safetyScore: 9 },
      { id: '1', name: 'CeraVe Moisturizing Cream', slug: 'cerave-moisturizing-cream', brand: 'CeraVe', safetyScore: 8 },
    ],
    lastUpdated: '2024-01-15',
  },
  {
    id: '4',
    name: 'Niacinamide 10% + Zinc 1%',
    slug: 'the-ordinary-niacinamide',
    brand: 'The Ordinary',
    category: 'skincare',
    categoryId: '1',
    description:
      'High-strength vitamin and mineral serum for blemish-prone skin. Reduces appearance of pores.',
    overallSafetyScore: 9,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '14', ingredientName: 'Niacinamide', ingredientSlug: 'niacinamide', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '15', ingredientName: 'Hyaluronic Acid', ingredientSlug: 'hyaluronic-acid', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '6', ingredientName: 'Phenoxyethanol', ingredientSlug: 'phenoxyethanol', safetyRating: 'low_concern', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },
  {
    id: '5',
    name: 'Toleriane Double Repair Face Moisturizer',
    slug: 'la-roche-posay-toleriane',
    brand: 'La Roche-Posay',
    category: 'skincare',
    categoryId: '1',
    description:
      'Daily face moisturizer for sensitive skin with prebiotic thermal water and ceramides.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '14', ingredientName: 'Niacinamide', ingredientSlug: 'niacinamide', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '23', ingredientName: 'Squalane', ingredientSlug: 'squalane', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '6', ingredientName: 'Phenoxyethanol', ingredientSlug: 'phenoxyethanol', safetyRating: 'low_concern', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },

  // HAIRCARE
  {
    id: '6',
    name: 'Classic Clean Anti-Dandruff Shampoo',
    slug: 'head-shoulders-classic',
    brand: 'Head & Shoulders',
    category: 'haircare',
    categoryId: '2',
    description:
      'Anti-dandruff shampoo with pyrithione zinc. Controls flakes and soothes itchy scalp.',
    overallSafetyScore: 5,
    safetyRating: 'moderate_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '2', ingredientName: 'Sodium Lauryl Sulfate', ingredientSlug: 'sodium-lauryl-sulfate', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [
      { id: '8', name: 'Briogeo Scalp Revival', slug: 'briogeo-scalp-revival', brand: 'Briogeo', safetyScore: 8 },
    ],
    lastUpdated: '2024-01-15',
  },
  {
    id: '7',
    name: 'Argan Oil of Morocco Shampoo',
    slug: 'ogx-argan-oil',
    brand: 'OGX',
    category: 'haircare',
    categoryId: '2',
    description:
      'Moisturizing shampoo with argan oil for dry, damaged hair. Sulfate-free formula.',
    overallSafetyScore: 4,
    safetyRating: 'high_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '3', ingredientName: 'DMDM Hydantoin', ingredientSlug: 'formaldehyde-releasing-preservatives', safetyRating: 'avoid', isPrimaryConcern: true },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [
      { id: '8', name: 'Briogeo Scalp Revival', slug: 'briogeo-scalp-revival', brand: 'Briogeo', safetyScore: 8 },
    ],
    lastUpdated: '2024-01-15',
  },
  {
    id: '8',
    name: "Don't Despair, Repair! Shampoo",
    slug: 'briogeo-scalp-revival',
    brand: 'Briogeo',
    category: 'haircare',
    categoryId: '2',
    description:
      'Strengthening shampoo for damaged hair with biotin and algae extract. Clean, sulfate-free formula.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '16', ingredientName: 'Aloe Vera', ingredientSlug: 'aloe-vera', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '6', ingredientName: 'Phenoxyethanol', ingredientSlug: 'phenoxyethanol', safetyRating: 'low_concern', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },

  // BODY CARE
  {
    id: '9',
    name: 'Beauty Bar Original',
    slug: 'dove-beauty-bar',
    brand: 'Dove',
    category: 'bodycare',
    categoryId: '3',
    description:
      'Classic cleansing bar with 1/4 moisturizing cream. Gentle formula for face and body.',
    overallSafetyScore: 6,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '2', ingredientName: 'Sodium Lauryl Sulfate', ingredientSlug: 'sodium-lauryl-sulfate', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '17', ingredientName: 'Shea Butter', ingredientSlug: 'shea-butter', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [
      { id: '10', name: 'Dr. Bronner\'s Pure-Castile Bar Soap', slug: 'dr-bronners-castile', brand: 'Dr. Bronner\'s', safetyScore: 9 },
    ],
    lastUpdated: '2024-01-15',
  },
  {
    id: '10',
    name: "Pure-Castile Bar Soap",
    slug: 'dr-bronners-castile',
    brand: "Dr. Bronner's",
    category: 'bodycare',
    categoryId: '3',
    description:
      'Organic castile soap made with certified fair trade and organic oils. Biodegradable and gentle.',
    overallSafetyScore: 9,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '22', ingredientName: 'Coconut Oil', ingredientSlug: 'coconut-oil', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '13', ingredientName: 'Tocopherol', ingredientSlug: 'tocopherol', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },
  {
    id: '11',
    name: 'Coconut & Vanilla Deodorant',
    slug: 'native-deodorant',
    brand: 'Native',
    category: 'bodycare',
    categoryId: '3',
    description:
      'Aluminum-free deodorant with naturally-derived ingredients. Long-lasting odor protection.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '17', ingredientName: 'Shea Butter', ingredientSlug: 'shea-butter', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '22', ingredientName: 'Coconut Oil', ingredientSlug: 'coconut-oil', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '13', ingredientName: 'Tocopherol', ingredientSlug: 'tocopherol', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },
  {
    id: '12',
    name: 'High Endurance Pure Sport Antiperspirant',
    slug: 'old-spice-antiperspirant',
    brand: 'Old Spice',
    category: 'bodycare',
    categoryId: '3',
    description:
      'Long-lasting antiperspirant with aluminum. 48-hour sweat and odor protection.',
    overallSafetyScore: 5,
    safetyRating: 'moderate_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '8', ingredientName: 'Aluminum Compounds', ingredientSlug: 'aluminum-compounds', safetyRating: 'low_concern', isPrimaryConcern: true },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
    ],
    saferAlternatives: [
      { id: '11', name: 'Native Coconut & Vanilla Deodorant', slug: 'native-deodorant', brand: 'Native', safetyScore: 8 },
    ],
    lastUpdated: '2024-01-15',
  },

  // BABY & KIDS
  {
    id: '13',
    name: "Baby Shampoo",
    slug: 'johnsons-baby-shampoo',
    brand: "Johnson's",
    category: 'baby',
    categoryId: '6',
    description:
      'Gentle tear-free baby shampoo. Reformulated without controversial ingredients.',
    overallSafetyScore: 6,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
    ],
    saferAlternatives: [
      { id: '10', name: 'Dr. Bronner\'s Pure-Castile Soap', slug: 'dr-bronners-castile', brand: 'Dr. Bronner\'s', safetyScore: 9 },
    ],
    lastUpdated: '2024-01-15',
  },
  {
    id: '14',
    name: 'Baby Mineral Sunscreen SPF 50+',
    slug: 'babyganics-sunscreen',
    brand: 'Babyganics',
    category: 'baby',
    categoryId: '6',
    description:
      'Mineral sunscreen for babies with zinc oxide. Tear-free, fragrance-free formula.',
    overallSafetyScore: 7,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '20', ingredientName: 'Zinc Oxide', ingredientSlug: 'zinc-oxide', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '17', ingredientName: 'Shea Butter', ingredientSlug: 'shea-butter', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '22', ingredientName: 'Coconut Oil', ingredientSlug: 'coconut-oil', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },
  {
    id: '15',
    name: 'Baby Healing Ointment',
    slug: 'aquaphor-baby',
    brand: 'Aquaphor',
    category: 'baby',
    categoryId: '6',
    description:
      'Multi-purpose ointment for diaper rash and dry skin. Pediatrician recommended.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '11', ingredientName: 'Dimethicone', ingredientSlug: 'dimethicone', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },

  // ORAL CARE
  {
    id: '16',
    name: 'Total Whitening Toothpaste',
    slug: 'colgate-total',
    brand: 'Colgate',
    category: 'oralcare',
    categoryId: '4',
    description:
      'Anticavity and antigingivitis toothpaste. 12-hour antibacterial protection.',
    overallSafetyScore: 6,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '2', ingredientName: 'Sodium Lauryl Sulfate', ingredientSlug: 'sodium-lauryl-sulfate', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [
      { id: '17', name: 'Tom\'s of Maine Fluoride Toothpaste', slug: 'toms-of-maine', brand: 'Tom\'s of Maine', safetyScore: 8 },
    ],
    lastUpdated: '2024-01-15',
  },
  {
    id: '17',
    name: 'Fluoride Toothpaste',
    slug: 'toms-of-maine',
    brand: "Tom's of Maine",
    category: 'oralcare',
    categoryId: '4',
    description:
      'Natural toothpaste with fluoride. No artificial flavors, colors, or preservatives.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },
  {
    id: '18',
    name: 'Pronamel Gentle Whitening',
    slug: 'sensodyne-pronamel',
    brand: 'Sensodyne',
    category: 'oralcare',
    categoryId: '4',
    description:
      'Toothpaste for sensitive teeth that protects enamel from acid erosion.',
    overallSafetyScore: 7,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },

  // HOUSEHOLD
  {
    id: '19',
    name: 'Original Scent Laundry Detergent',
    slug: 'tide-original',
    brand: 'Tide',
    category: 'household',
    categoryId: '7',
    description:
      'Powerful stain-fighting laundry detergent. Original clean scent.',
    overallSafetyScore: 5,
    safetyRating: 'moderate_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '2', ingredientName: 'Sodium Lauryl Sulfate', ingredientSlug: 'sodium-lauryl-sulfate', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
    ],
    saferAlternatives: [
      { id: '20', name: 'Seventh Generation Free & Clear', slug: 'seventh-generation', brand: 'Seventh Generation', safetyScore: 8 },
    ],
    lastUpdated: '2024-01-15',
  },
  {
    id: '20',
    name: 'Free & Clear Laundry Detergent',
    slug: 'seventh-generation',
    brand: 'Seventh Generation',
    category: 'household',
    categoryId: '7',
    description:
      'Plant-based laundry detergent free from fragrances and dyes. EPA Safer Choice certified.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [],
    lastUpdated: '2024-01-15',
  },
  {
    id: '21',
    name: "Clean Day Multi-Surface Cleaner",
    slug: 'mrs-meyers',
    brand: "Mrs. Meyer's",
    category: 'household',
    categoryId: '7',
    description:
      'All-purpose cleaner with plant-derived ingredients and essential oils.',
    overallSafetyScore: 6,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
    ],
    saferAlternatives: [
      { id: '20', name: 'Seventh Generation Free & Clear', slug: 'seventh-generation', brand: 'Seventh Generation', safetyScore: 8 },
    ],
    lastUpdated: '2024-01-15',
  },
  // SKINCARE (Added)
  {
    id: '22',
    name: 'Sun Bum Mineral SPF 50',
    slug: 'sun-bum-mineral',
    brand: 'Sun Bum',
    category: 'skincare',
    categoryId: '1',
    description: 'Zinc-based mineral sunscreen. Fragrance-free and hypoallergenic.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '20', ingredientName: 'Zinc Oxide', ingredientSlug: 'zinc-oxide', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '22', ingredientName: 'Coconut Oil', ingredientSlug: 'coconut-oil', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '23',
    name: 'Ultra Sheer Dry-Touch Sunscreen SPF 70',
    slug: 'neutrogena-ultra-sheer',
    brand: 'Neutrogena',
    category: 'skincare',
    categoryId: '1',
    description: 'Chemical sunscreen offering broad bacterial protection.',
    overallSafetyScore: 4,
    safetyRating: 'moderate_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '7', ingredientName: 'Oxybenzone', ingredientSlug: 'oxybenzone', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '33', ingredientName: 'Homosalate', ingredientSlug: 'homosalate', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [
      { id: '22', name: 'Sun Bum Mineral SPF 50', slug: 'sun-bum-mineral', brand: 'Sun Bum', safetyScore: 8 }
    ],
    lastUpdated: '2024-03-01'
  },
  {
    id: '24',
    name: 'Hydrating Facial Cleanser',
    slug: 'cerave-hydrating-cleanser',
    brand: 'CeraVe',
    category: 'skincare',
    categoryId: '1',
    description: 'Gentle, non-foaming cleanser with ceramides and hyaluronic acid.',
    overallSafetyScore: 9,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '38', ingredientName: 'Ceramides', ingredientSlug: 'ceramides', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '15', ingredientName: 'Hyaluronic Acid', ingredientSlug: 'hyaluronic-acid', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '25',
    name: 'Acne Proofing Gel Cleanser',
    slug: 'neutrogena-acne-proofing',
    brand: 'Neutrogena',
    category: 'skincare',
    categoryId: '1',
    description: 'Salicylic acid cleanser for acne-prone skin.',
    overallSafetyScore: 6,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '2', ingredientName: 'Sodium Lauryl Sulfate', ingredientSlug: 'sodium-lauryl-sulfate', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [
      { id: '24', name: 'CeraVe Hydrating Cleanser', slug: 'cerave-hydrating-cleanser', brand: 'CeraVe', safetyScore: 9 }
    ],
    lastUpdated: '2024-03-01'
  },
  {
    id: '26',
    name: 'C E Ferulic',
    slug: 'skinceuticals-ce-ferulic',
    brand: 'SkinCeuticals',
    category: 'skincare',
    categoryId: '1',
    description: 'High-potency vitamin C antioxidant serum.',
    overallSafetyScore: 9,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '13', ingredientName: 'Tocopherol', ingredientSlug: 'tocopherol', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '27',
    name: 'Retinol Correxion Deep Wrinkle Night Cream',
    slug: 'roc-retinol-correxion',
    brand: 'RoC',
    category: 'skincare',
    categoryId: '1',
    description: 'Anti-aging cream with retinol.',
    overallSafetyScore: 5,
    safetyRating: 'moderate_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '1', ingredientName: 'Parabens', ingredientSlug: 'parabens', safetyRating: 'high_concern', isPrimaryConcern: true },
      { ingredientId: '28', ingredientName: 'BHT', ingredientSlug: 'bht', safetyRating: 'high_concern', isPrimaryConcern: true },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [
      { id: '28', name: 'Bakuchiol Retinol Alternative Serum', slug: 'herbivore-bakuchiol', brand: 'Herbivore', safetyScore: 9 }
    ],
    lastUpdated: '2024-03-01'
  },
  {
    id: '28',
    name: 'Bakuchiol Retinol Alternative Serum',
    slug: 'herbivore-bakuchiol',
    brand: 'Herbivore',
    category: 'skincare',
    categoryId: '1',
    description: 'Natural retinol alternative for smoothing skin.',
    overallSafetyScore: 9,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '36', ingredientName: 'Bakuchiol', ingredientSlug: 'bakuchiol', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '16', ingredientName: 'Aloe Vera', ingredientSlug: 'aloe-vera', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '29',
    name: 'Daily Facial Moisturizer SPF 15',
    slug: 'cetaphil-daily-moisturizer',
    brand: 'Cetaphil',
    category: 'skincare',
    categoryId: '1',
    description: 'Lightweight moisturizer with chemical sunscreens.',
    overallSafetyScore: 6,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '34', ingredientName: 'Octinoxate', ingredientSlug: 'octinoxate', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [
      { id: '1', name: 'CeraVe Moisturizing Cream', slug: 'cerave-moisturizing-cream', brand: 'CeraVe', safetyScore: 8 }
    ],
    lastUpdated: '2024-03-01'
  },
  {
    id: '30',
    name: 'Take The Day Off Cleansing Balm',
    slug: 'clinique-cleansing-balm',
    brand: 'Clinique',
    category: 'skincare',
    categoryId: '1',
    description: 'Makeup remover balm that transforms into oil.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '13', ingredientName: 'Tocopherol', ingredientSlug: 'tocopherol', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '31',
    name: 'Micellar Water',
    slug: 'garnier-micellar',
    brand: 'Garnier',
    category: 'skincare',
    categoryId: '1',
    description: 'All-in-1 cleanser and makeup remover.',
    overallSafetyScore: 7,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },

  // HAIRCARE (Added)
  {
    id: '32',
    name: 'Perfect Hair Day Dry Shampoo',
    slug: 'living-proof-phd',
    brand: 'Living Proof',
    category: 'haircare',
    categoryId: '2',
    description: 'Dry shampoo that actually cleans hair.',
    overallSafetyScore: 7,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '33',
    name: 'No. 3 Hair Perfector',
    slug: 'olaplex-no-3',
    brand: 'Olaplex',
    category: 'haircare',
    categoryId: '2',
    description: 'Bond builder for damaged hair.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '16', ingredientName: 'Aloe Vera', ingredientSlug: 'aloe-vera', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '18', ingredientName: 'Jojoba Oil', ingredientSlug: 'jojoba-oil', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '6', ingredientName: 'Phenoxyethanol', ingredientSlug: 'phenoxyethanol', safetyRating: 'low_concern', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '34',
    name: 'Elnet Satin Hairspray',
    slug: 'loreal-elnet',
    brand: "L'Oreal",
    category: 'haircare',
    categoryId: '2',
    description: 'Classic hairspray with strong hold.',
    overallSafetyScore: 5,
    safetyRating: 'moderate_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '35', ingredientName: 'Ethanolamines', ingredientSlug: 'ethanolamines', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '35',
    name: 'Coconut Curls Smoothie',
    slug: 'sheamoisture-coconut-curls',
    brand: 'SheaMoisture',
    category: 'haircare',
    categoryId: '2',
    description: 'Styling cream for thick, curly hair.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '22', ingredientName: 'Coconut Oil', ingredientSlug: 'coconut-oil', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '17', ingredientName: 'Shea Butter', ingredientSlug: 'shea-butter', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '36',
    name: 'Whole Blends Honey Treasures',
    slug: 'garnier-whole-blends',
    brand: 'Garnier',
    category: 'haircare',
    categoryId: '2',
    description: 'Repairing shampoo with royal jelly.',
    overallSafetyScore: 5,
    safetyRating: 'moderate_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '2', ingredientName: 'Sodium Lauryl Sulfate', ingredientSlug: 'sodium-lauryl-sulfate', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [
      { id: '8', name: 'Briogeo Scalp Revival', slug: 'briogeo-scalp-revival', brand: 'Briogeo', safetyScore: 8 }
    ],
    lastUpdated: '2024-03-01'
  },

  // BABY (Added)
  {
    id: '37',
    name: 'Calming Comfort Bath',
    slug: 'aveeno-baby-calming',
    brand: 'Aveeno Baby',
    category: 'baby',
    categoryId: '6',
    description: 'Lavender and vanilla scented bath wash.',
    overallSafetyScore: 7,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '39', ingredientName: 'Colloidal Oatmeal', ingredientSlug: 'colloidal-oatmeal', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '38',
    name: 'Diaper Rash Cream Max Strength',
    slug: 'desitin-max',
    brand: 'Desitin',
    category: 'baby',
    categoryId: '6',
    description: '40% zinc oxide paste.',
    overallSafetyScore: 7,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '20', ingredientName: 'Zinc Oxide', ingredientSlug: 'zinc-oxide', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '27', ingredientName: 'BHA', ingredientSlug: 'bha', safetyRating: 'avoid', isPrimaryConcern: true }
    ],
    // Note: Some legacy formulations had BHA, updated ones often remove it. Assuming older stock risk.
    saferAlternatives: [
      { id: '39', name: 'Honest Diaper Rash Cream', slug: 'honest-diaper-cream', brand: 'Honest Company', safetyScore: 9 }
    ],
    lastUpdated: '2024-03-01'
  },
  {
    id: '39',
    name: 'Diaper Rash Cream',
    slug: 'honest-diaper-cream',
    brand: 'Honest Company',
    category: 'baby',
    categoryId: '6',
    description: 'Hypoallergenic zinc oxide cream.',
    overallSafetyScore: 9,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '20', ingredientName: 'Zinc Oxide', ingredientSlug: 'zinc-oxide', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '22', ingredientName: 'Coconut Oil', ingredientSlug: 'coconut-oil', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '17', ingredientName: 'Shea Butter', ingredientSlug: 'shea-butter', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '40',
    name: 'Baby Lotion',
    slug: 'johnsons-baby-lotion',
    brand: 'Johnsons',
    category: 'baby',
    categoryId: '6',
    description: 'Classic pink baby lotion.',
    overallSafetyScore: 6,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '41',
    name: 'Sleepytime Bubble Bath',
    slug: 'hello-bello-bubble',
    brand: 'Hello Bello',
    category: 'baby',
    categoryId: '6',
    description: 'Bio-based bubble bath.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '16', ingredientName: 'Aloe Vera', ingredientSlug: 'aloe-vera', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },

  // HOUSEHOLD (Added)
  {
    id: '42',
    name: 'Disinfecting Wipes',
    slug: 'clorox-wipes',
    brand: 'Clorox',
    category: 'household',
    categoryId: '7',
    description: 'Kills 99.9% of viruses and bacteria.',
    overallSafetyScore: 4,
    safetyRating: 'moderate_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [
      { id: '21', name: 'Mrs. Meyers Clean Day', slug: 'mrs-meyers', brand: 'Mrs. Meyers', safetyScore: 6 }
    ],
    lastUpdated: '2024-03-01'
  },
  {
    id: '43',
    name: 'Dawn Ultra Dish Soap',
    slug: 'dawn-ultra',
    brand: 'Dawn',
    category: 'household',
    categoryId: '7',
    description: 'Grease fighting dish liquid.',
    overallSafetyScore: 5,
    safetyRating: 'moderate_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '2', ingredientName: 'SLS', ingredientSlug: 'sodium-lauryl-sulfate', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [
      { id: '44', name: 'Seventh Generation Dish Liquid', slug: 'seventh-gen-dish', brand: 'Seventh Generation', safetyScore: 8 }
    ],
    lastUpdated: '2024-03-01'
  },
  {
    id: '44',
    name: 'Dish Liquid Free & Clear',
    slug: 'seventh-gen-dish',
    brand: 'Seventh Generation',
    category: 'household',
    categoryId: '7',
    description: 'Plant-based dish soap.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '45',
    name: 'Windex Original',
    slug: 'windex',
    brand: 'Windex',
    category: 'household',
    categoryId: '7',
    description: 'Glass cleaner with ammonia-d.',
    overallSafetyScore: 5,
    safetyRating: 'moderate_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '46',
    name: 'Pledge Multi-Surface',
    slug: 'pledge',
    brand: 'Pledge',
    category: 'household',
    categoryId: '7',
    description: 'Dusting and cleaning spray.',
    overallSafetyScore: 4,
    safetyRating: 'high_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '4', ingredientName: 'Fragrance', ingredientSlug: 'fragrance', safetyRating: 'moderate_concern', isPrimaryConcern: true },
      { ingredientId: '31', ingredientName: 'Silicones', ingredientSlug: 'cyclopentasiloxane', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },

  // ORAL CARE (Added)
  {
    id: '47',
    name: '3D White Toothpaste',
    slug: 'crest-3d-white',
    brand: 'Crest',
    category: 'oralcare',
    categoryId: '4',
    description: 'Whitening toothpaste.',
    overallSafetyScore: 5,
    safetyRating: 'moderate_concern',
    concernCount: 2,
    ingredients: [
      { ingredientId: '2', ingredientName: 'SLS', ingredientSlug: 'sodium-lauryl-sulfate', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [
      { id: '17', name: 'Toms of Maine', slug: 'toms-of-maine', brand: 'Toms', safetyScore: 8 }
    ],
    lastUpdated: '2024-03-01'
  },
  {
    id: '48',
    name: 'Listerine Cool Mint',
    slug: 'listerine',
    brand: 'Listerine',
    category: 'oralcare',
    categoryId: '4',
    description: 'Antiseptic mouthwash.',
    overallSafetyScore: 6,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '27', ingredientName: 'Benzoic Acid (preservative)', ingredientSlug: 'bha', safetyRating: 'low_concern', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '49',
    name: 'Natural Whitening Toothpaste',
    slug: 'hello-toothpaste',
    brand: 'Hello',
    category: 'oralcare',
    categoryId: '4',
    description: 'Fluoride free whitening paste.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '19', ingredientName: 'Glycerin', ingredientSlug: 'glycerin', safetyRating: 'safe', isPrimaryConcern: false },
      { ingredientId: '22', ingredientName: 'Coconut Oil', ingredientSlug: 'coconut-oil', safetyRating: 'safe', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '50',
    name: 'TheraBreath',
    slug: 'therabreath',
    brand: 'TheraBreath',
    category: 'oralcare',
    categoryId: '4',
    description: 'Dentist formulated mouthwash.',
    overallSafetyScore: 8,
    safetyRating: 'safe',
    concernCount: 0,
    ingredients: [
      { ingredientId: '35', ingredientName: 'PEG-40', ingredientSlug: 'pegs', safetyRating: 'low_concern', isPrimaryConcern: false }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },
  {
    id: '51',
    name: 'Charcoal Toothpaste',
    slug: 'colgate-charcoal',
    brand: 'Colgate',
    category: 'oralcare',
    categoryId: '4',
    description: 'Activated charcoal whitening paste.',
    overallSafetyScore: 6,
    safetyRating: 'low_concern',
    concernCount: 1,
    ingredients: [
      { ingredientId: '2', ingredientName: 'SLS', ingredientSlug: 'sodium-lauryl-sulfate', safetyRating: 'moderate_concern', isPrimaryConcern: true }
    ],
    saferAlternatives: [],
    lastUpdated: '2024-03-01'
  },


export function getProductById(id: string): Product | undefined {
  return products.find((prod) => prod.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((prod) => prod.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((prod) => prod.category === categorySlug);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (prod) =>
      prod.name.toLowerCase().includes(lowerQuery) ||
      prod.brand.toLowerCase().includes(lowerQuery) ||
      prod.description.toLowerCase().includes(lowerQuery) ||
      prod.ingredients.some((ing) =>
        ing.ingredientName.toLowerCase().includes(lowerQuery)
      )
  );
}

export function getProductsBySafetyScore(minScore: number): Product[] {
  return products.filter((prod) => prod.overallSafetyScore >= minScore);
}

export function getRecentProducts(limit: number = 6): Product[] {
  return products.slice(0, limit);
}
