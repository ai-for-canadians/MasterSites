# ProductTruth

A comprehensive product ingredient analysis platform built with Next.js 14, providing transparent, science-backed safety information about personal care and household products.

## Features

### 🔍 Core Functionality
- **Product Database**: 21+ analyzed products across 7 categories
- **Ingredient Database**: 25+ ingredients with detailed safety information
- **Advanced Search**: Search products and ingredients with real-time filtering
- **Safety Ratings**: Science-backed 5-point safety scale (Safe → Avoid)
- **Category Browsing**: Organized by product type (Skincare, Haircare, etc.)

### 📊 Product Analysis
- Overall safety scores
- Ingredient breakdowns by safety rating
- Identification of concerning ingredients
- Safer product alternatives
- Certifications and highlights

### 🧪 Ingredient Details
- Comprehensive safety ratings
- Evidence quality grades (A-F)
- Health concerns with severity levels
- Scientific sources and citations
- Regulatory information (FDA, EU)
- Safer alternatives

### 🎨 User Experience
- Modern, responsive design
- Dark theme optimized for readability
- Intuitive navigation
- Dynamic filtering and search
- Static site generation for performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Project Structure

```
product-truth/
├── app/                        # Next.js 14 App Router
│   ├── (routes)/
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── products/          # Products listing & detail pages
│   │   ├── ingredients/       # Ingredients listing & detail pages
│   │   └── categories/        # Category pages
│   ├── api/
│   │   └── search/            # Search API routes
│   ├── layout.tsx             # Root layout with Header/Footer
│   ├── not-found.tsx          # 404 page
│   └── globals.css            # Global styles
├── components/                 # Reusable React components
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Site footer
│   ├── ProductCard.tsx        # Product display card
│   ├── IngredientCard.tsx     # Ingredient display card
│   ├── SafetyBadge.tsx        # Safety rating badge
│   ├── SearchBar.tsx          # Search input component
│   └── index.ts               # Component exports
├── lib/
│   ├── data/                  # Static data sources
│   │   ├── products.ts        # 21 products with full data
│   │   ├── ingredients.ts     # 25 ingredients with research
│   │   └── categories.ts      # 7 product categories
│   └── utils/                 # Utility functions
│       ├── safety.ts          # Safety rating calculations
│       └── format.ts          # Formatting helpers
├── types/
│   └── index.ts               # TypeScript type definitions
└── public/                    # Static assets
```

## Pages

### Public Pages
1. **Home** (`/`) - Hero, featured products, categories
2. **Products** (`/products`) - All products with search & filters
3. **Product Detail** (`/products/[slug]`) - Detailed analysis with ingredients
4. **Ingredients** (`/ingredients`) - All ingredients with search & filters
5. **Ingredient Detail** (`/ingredients/[slug]`) - Safety info, concerns, sources
6. **Categories** (`/categories`) - Browse by category
7. **Category Detail** (`/categories/[slug]`) - Products in category
8. **About** (`/about`) - Mission, methodology, values
9. **404** - Custom not found page

### API Routes
- `/api/search/products` - Product search endpoint
- `/api/search/ingredients` - Ingredient search endpoint

## Components

### Display Components
- **ProductCard** - Shows product with safety score, brand, highlights
- **IngredientCard** - Shows ingredient with rating, concerns, function
- **SafetyBadge** - Circular badge showing safety score/rating

### UI Components
- **Header** - Sticky navigation with active state
- **Footer** - Site footer with links and social
- **SearchBar** - Reusable search input with submit

## Data

### Products (21)
- **Skincare**: CeraVe, Neutrogena, Olay, The Ordinary, La Roche-Posay, Cetaphil
- **Haircare**: OGX, Pantene, Herbal Essences, Function of Beauty
- **Body Care**: Dove, Nivea, Aveeno
- **Oral Care**: Colgate, Tom's of Maine
- **Household**: Seventh Generation, Method, Mrs. Meyer's, Ecover, Biokleen, Blueland

### Ingredients (25)
- **High Concern**: Parabens, Formaldehyde-releasers, Triclosan, Oxybenzone
- **Moderate Concern**: SLS, Fragrance, Petroleum, Aluminum compounds
- **Low Concern**: Phenoxyethanol, Dimethicone, Cetyl alcohol
- **Safe**: Niacinamide, Hyaluronic acid, Aloe vera, Shea butter, Glycerin, etc.

### Categories (7)
- Skincare, Haircare, Body Care, Oral Care, Makeup, Baby & Kids, Household

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development

### Adding Products
Edit `lib/data/products.ts`:
```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  slug: 'product-slug',
  brand: 'Brand Name',
  category: 'category-slug',
  categoryId: '1',
  description: '...',
  overallSafetyScore: 8, // 0-10 scale
  safetyRating: 'safe',
  concernCount: 0,
  ingredients: [...],
  saferAlternatives: [...],
  lastUpdated: '2024-01-15'
}
```

### Adding Ingredients
Edit `lib/data/ingredients.ts`:
```typescript
{
  id: 'unique-id',
  name: 'Ingredient Name',
  slug: 'ingredient-slug',
  otherNames: ['Alternative Name'],
  description: '...',
  safetyRating: 'safe' | 'low_concern' | 'moderate_concern' | 'high_concern' | 'avoid',
  evidenceRating: 'A' | 'B' | 'C' | 'D' | 'F',
  concerns: [...],
  sources: [...],
  foundIn: ['Product types'],
  saferAlternatives: ['safer-alternative-slug']
}
```

## Safety Rating System

### Product Scores (0-100)
- 80-100: Safe
- 60-79: Low Concern
- 40-59: Moderate Concern
- 20-39: High Concern
- 0-19: Avoid

### Evidence Quality
- **A**: Strong evidence from multiple high-quality studies
- **B**: Good evidence from well-designed studies
- **C**: Moderate evidence with limitations
- **D**: Limited or conflicting evidence
- **F**: Insufficient evidence

## Performance

- ✅ Static site generation (SSG) for all pages
- ✅ Optimized builds with Next.js 14
- ✅ Route prefetching
- ✅ Image optimization ready
- ✅ TypeScript for type safety
- ✅ 62+ pages generated at build time

## License

Educational/Demo Project

## Disclaimer

Information provided is for educational purposes only and is not intended as medical or health advice. Always consult qualified healthcare professionals regarding health concerns.

---

Built with Next.js 14 + TypeScript + Tailwind CSS
