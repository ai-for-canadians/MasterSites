# InfoBank

> Real information for real life

A network of evidence-based information sites for Canadians.

## Quick Start

```bash
pnpm install
cp .env.example .env.local
# Add your Supabase and OpenAI keys
pnpm dev
```

## Project Structure

```
infobank/
├── apps/           # Individual sites
├── packages/       # Shared code
├── docs/           # Documentation
└── prompts/        # Build specifications
```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Supabase
- PNPM + Turborepo

## Documentation

- [Design System](./docs/DESIGN_SYSTEM.md)
- [Tech Standards](./docs/TECH_STANDARDS.md)
- [Content Standards](./docs/CONTENT_STANDARDS.md)
