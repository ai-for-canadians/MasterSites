# InfoBank Technical Standards

## Stack (Non-Negotiable)

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 14.x |
| Language | TypeScript | 5.x (strict) |
| Styling | Tailwind CSS | 3.x |
| Database | Supabase | Latest |
| AI | Vercel AI SDK + OpenAI | Latest |
| Package Manager | PNPM | 8.x |
| Monorepo | Turborepo | 2.x |

---

## Project Structure

### Monorepo Layout
```
infobank/
├── apps/
│   ├── hub/
│   ├── product-truth/
│   └── [site-name]/
├── packages/
│   ├── ui/
│   ├── database/
│   ├── ai/
│   └── config/
├── docs/
└── prompts/
```

### App Structure
```
apps/[site-name]/
├── app/
│   ├── (marketing)/      # Public pages
│   │   ├── page.tsx      # Homepage
│   │   ├── about/
│   │   └── [other]/
│   ├── api/              # API routes
│   ├── layout.tsx
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── ui/               # UI primitives
│   ├── layout/           # Header, Footer
│   └── features/         # Feature components
├── lib/
│   ├── supabase/
│   └── utils.ts
├── types/
│   └── index.ts
└── public/
```

---

## TypeScript

### Configuration
- Strict mode enabled
- No implicit any
- No unchecked index access

### Rules
- Never use `any` - use `unknown` and narrow
- Export all shared types from `types/index.ts`
- Use interfaces for objects, types for unions

### Example
```typescript
// types/index.ts
export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  evidenceRating: EvidenceRating;
  createdAt: string;
}

export type ProductCategory = 'skincare' | 'haircare' | 'bodycare';
export type EvidenceRating = 'A' | 'B' | 'C' | 'D' | 'F';
```

---

## Database (Supabase)

### Table Naming
- Plural, snake_case: `products`, `user_favorites`

### Required Columns
Every table must have:
```sql
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
```

### Row Level Security
Always enable RLS:
```sql
ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;
```

### Indexes
Create indexes for:
- Foreign keys
- Frequently filtered columns
- Search columns (GIN for full-text)

---

## API Routes

### Structure
```
app/api/
├── products/
│   ├── route.ts           # GET (list), POST (create)
│   └── [id]/
│       └── route.ts       # GET (single), PATCH, DELETE
```

### Response Format
```typescript
// Success
{ data: T, error: null }

// Error
{ data: null, error: { message: string, code: string } }
```

---

## Components

### File Naming
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Types: `camelCase.ts`

### Component Structure
```typescript
// 1. Imports
import { useState } from 'react';

// 2. Types
interface Props {
  title: string;
}

// 3. Component
export function ComponentName({ title }: Props) {
  // 4. Hooks
  const [state, setState] = useState(false);

  // 5. Handlers
  const handleClick = () => {};

  // 6. Render
  return <div>{title}</div>;
}
```

---

## Error Handling

### Components
- Use error boundaries
- Always show error states
- Provide retry options

### Async Operations
```typescript
try {
  const data = await fetchData();
  return { data, error: null };
} catch (error) {
  console.error('Context:', error);
  return { data: null, error: 'User-friendly message' };
}
```

### Required States
Every async component needs:
- Loading state
- Error state
- Empty state
- Success state

---

## Performance

### Images
- Always use `next/image`
- Provide width and height
- Use appropriate `sizes` prop
- Add `priority` to above-fold images

### Code Splitting
- Dynamic import heavy components
- Route-based splitting (automatic)

### Data Fetching
- Use Server Components for initial data
- Implement proper caching
- Parallel fetching with `Promise.all`
