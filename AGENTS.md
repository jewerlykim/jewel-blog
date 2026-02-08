# AGENTS.md — jewel-blog

Personal blog (godjewel.co.kr) built with Next.js App Router, TypeScript, Tailwind CSS, and Keystatic CMS.

## Build / Dev / Lint Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npx next lint        # Run ESLint (Next.js integrated)
npx tsc --noEmit     # Type-check without emitting
```

No test framework is configured. There are no test scripts or test files in this project.

## Project Structure

```
app/                 # Next.js App Router (file-based routing)
  layout.tsx         # Root layout (Head, Navbar, Footer, fonts, i18n, GA)
  page.tsx           # Home page
  not-found.tsx      # Custom 404
  posts/
    page.tsx         # Posts list page
    [id]/
      page.tsx       # Single post page (dynamic route)
  guestbook/
    page.tsx         # Guestbook (Disqus comments)
  admin/
    page.tsx         # Admin post creation (localhost only)
   api/               # API routes (Route Handlers)
     posts/
       route.ts       # GET /api/posts — list all posts
       [id]/
         route.ts     # GET /api/posts/:id — single post
components/          # React components
  navbar.tsx         # Navigation bar with mobile hamburger menu
  footer.tsx         # Footer with social links
  kakao.adfit.tsx    # Kakao ad component
  home/              # Home page sub-components
    home.container.tsx
    home.posts.tsx
    home.side.tsx
lib/                 # Shared libraries
   reader.ts          # Keystatic reader singleton
types/               # TypeScript type definitions
  PostData.ts        # PostData interface
  global.d.ts        # Global type augmentations (Window.gtag, dataLayer)
utils/               # Utilities
  i18n.ts            # i18next configuration (ko/en)
styles/
  globals.css        # Global styles + Tailwind directives
public/              # Static assets (images, favicons, Naver verification)
keystatic.config.ts # Keystatic collections and schema
```

## Tech Stack

- **Framework**: Next.js (App Router) with React 19
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 3.2 + global CSS (`styles/globals.css`)
- **CMS**: Keystatic (file-based content via JSON collections)
- **i18n**: i18next + react-i18next (Korean default, English fallback)
- **Markdown**: react-markdown + remark-gfm + remark-breaks
- **Comments**: Disqus (disqus-react)
- **Ads**: Kakao AdFit
- **Analytics**: Google Analytics (gtag via inline script)
- **Deployment**: Vercel

## Code Style Guidelines

### Formatting (Prettier)

Prettier is configured in `.prettierrc`:
- Single quotes (`'`), not double quotes
- Semicolons required
- 2-space indentation (no tabs)
- Trailing commas everywhere (`"all"`)
- Print width: 80 characters

### ESLint Rules

Configured in `.eslintrc.json`:
- Extends: `eslint:recommended`, `plugin:react/recommended`, `plugin:@typescript-eslint/recommended`, `plugin:prettier/recommended`
- Arrow body style enforced (`arrow-body-style: "error"`) — use `() => (` not `() => { return (`
- `no-var` enforced — use `const`/`let`
- `react/prop-types` disabled (TypeScript handles this)
- `react/react-in-jsx-scope` disabled (React 17+ JSX transform)
- React version auto-detected via `settings.react.version: "detect"`

### TypeScript

- **Strict mode enabled** (`"strict": true` in tsconfig.json)
- Target: ES2017, Module: ESNext
- Avoid `as any`, `@ts-ignore`, `@ts-expect-error` — use proper types
- Type definitions go in `types/` directory
- Use `interface` for object shapes (project convention), `type` for unions/aliases
- API routes use typed response: `PostData` / `PostData[]` instead of `any`

### Imports

Observed import order (follow this convention):
1. External packages (`next`, `react`, third-party libs)
2. Internal components (`../components/...`)
3. Internal types (`../../types/...`)
4. Internal utilities (`../utils/...`, `../lib/...`)

```typescript
// Example
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import KakaoAdfit from '../kakao.adfit';
import PostData from '../../types/PostData';
```

### Naming Conventions

- **Components**: PascalCase (`HomeContainer`, `KakaoAdfit`)
- **Component files**: lowercase dot-separated (`home.container.tsx`, `kakao.adfit.tsx`)
- **Pages**: lowercase (`index.tsx`, `[id].tsx`)
- **API routes**: kebab-case (`create-post-local.ts`)
- **Types**: PascalCase interface names (`PostData`)
- **Variables/functions**: camelCase (`fetchPosts`, `disqusConfig`)

### Component Patterns

- Use `const Component: NextPage` for page-level components with `export default`
- Use `const Component = () => (...)` for stateless components (arrow body style enforced)
- Use `const Component = () => { ... return (...) }` only when hooks/logic needed
- Props interfaces defined inline or above the component
- Functional components only (no class components)
- Hooks at the top of component body

### API Route Pattern

```typescript
import { NextResponse } from 'next';
import { reader } from '../../../lib/reader';
import PostData from '../../../types/PostData';

export async function GET() {
  const posts = await reader.collections.posts.all();

  return NextResponse.json({ data: posts });
}
```

### Error Handling

- API routes: Return `{ error: string }` with appropriate HTTP status codes
- Client-side: Use `useState` for loading/error states
- Keystatic reader errors: Catch exceptions and return 500

### Styling

- **Primary approach**: Tailwind CSS utility classes inline on JSX elements
- **Responsive**: Mobile-first with `sm:` breakpoint for desktop (`sm:block`, `sm:hidden`, `sm:w-[80%]`)
- **Layout**: Flexbox-heavy (`flex`, `flex-col`, `justify-center`, `items-center`)
- **Spacing**: Tailwind utilities (`p-4`, `mx-[10%]`, `space-y-4`)
- Some components use inline `style={{}}` objects (admin page) — prefer Tailwind for new code

### Environment Variables

- Stored in `.env.development` and `.env.production` (git-ignored)
- Access via `process.env.NEXT_PUBLIC_*` for client-side
- Required: `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`

### Comments

- Korean comments are common throughout the codebase (this is a Korean blog)
- Use `//` for inline comments, `/* */` for block comments
- Comments explaining "why" are valued; avoid restating what the code does
