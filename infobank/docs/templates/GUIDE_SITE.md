# Guide Site Template

Use for sites with guides and how-to content.
Examples: Parent Playbook, Career Pivot, Emergency Prep

## Core Features
1. Guide library with categories
2. Clean reading experience
3. Interactive checklists
4. Progress tracking (optional)

## Standard Pages
```
/                    # Homepage with featured guides
/guides              # All guides listing
/guides/[category]   # Guides by category
/guides/[slug]       # Individual guide
/checklist/[slug]    # Interactive checklist
/about               # About this resource
```

## Database Schema
```sql
CREATE TABLE guides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category_id UUID REFERENCES categories(id),
  description TEXT,
  content JSONB,
  reading_time INTEGER,
  difficulty TEXT CHECK (difficulty IN ('beginner','intermediate','advanced')),
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Seed Data Requirements
- Minimum 5-10 complete guides
- Each guide needs: title, description, full content, reading time
