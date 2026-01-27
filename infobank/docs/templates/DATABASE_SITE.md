# Database Site Template

Use for sites with searchable databases.
Examples: Product Truth, Supplements Guide, Condition Control

## Core Features
1. Search & Filter
2. Browse by category
3. Detail pages with evidence
4. Comparison tool (optional)

## Standard Pages
```
/                    # Homepage with search + featured
/search              # Search results
/browse              # Browse by category
/category/[slug]     # Category listing
/[entry-slug]        # Entry detail page
/about               # About this database
```

## Database Schema
```sql
CREATE TABLE entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category_id UUID REFERENCES categories(id),
  summary TEXT,
  content JSONB,
  evidence_rating TEXT CHECK (evidence_rating IN ('A','B','C','D','F')),
  sources JSONB,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  sort_order INTEGER DEFAULT 0
);
```

## Seed Data Requirements
- Minimum 15-20 complete entries
- At least 3-5 categories
- Each entry needs: name, category, summary, evidence rating, sources
