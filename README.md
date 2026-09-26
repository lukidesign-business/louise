# Create & Capture

Marketing site for **Create & Capture**, a Scotland-based creator management and social content agency founded by Louise Thomson. Single-page site covering the agency's positioning, results, the Blueprint & Consultancy programme, brand/creator propositions, FAQs and an enquiry form.

Built with Next.js (App Router), React 19, Tailwind CSS v4, framer-motion and lucide-react.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

Requires Node.js 20.9 or newer.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (`eslint-config-next`) |
| `npm run typecheck` | TypeScript, no emit |

## Project structure

```
src/
  app/
    layout.tsx        Root layout, fonts (Playfair Display + Manrope), metadata
    page.tsx          Composes the page sections in order
    globals.css       Tailwind entry, design tokens, shared utility classes
  components/         One file per section, plus small shared pieces
  lib/
    site-data.ts      Copy and content for every section (nav, stats, FAQs…)
public/
  images/             Portrait stills
  media/              Hero video, poster frame, section background
```

Sections live in `src/components` and are rendered in order from `src/app/page.tsx`:
`SiteHeader` → `HeroSection` → `BrandMarquee` → `AboutSection` → `BlueprintSection` → `AudiencesSection` → `FaqSection` → `ContactSection` → `SiteFooter`, plus a fixed `BackToTop` button.

## Editing content

Most copy changes need no component edits — update `src/lib/site-data.ts`:

- `navItems` — header and mobile nav links
- `brandLogos` — the scrolling brand marquee
- `blueprintPhases` — the four Blueprint phase cards
- `stats` — the animated results figures
- `faqItems` — the FAQ accordion
- `heroConfig` — hero video, poster, TikTok link and the floating photo cards

## Design tokens

Brand colours and fonts are CSS custom properties on `:root` in `src/app/globals.css`
(`--ivory`, `--powder`, `--blush`, `--sage`, `--champagne`, `--charcoal`, `--muted`, `--line`),
exposed to Tailwind through `@theme inline`. Shared utilities in the same file: `.section-shell`
(page gutter), `.label` (uppercase eyebrow text), `.font-display`, `.marquee`, `.soft-card`,
`.botanical`. A `prefers-reduced-motion` block disables animation, and the hero video and
count-up figures check `useReducedMotion` as well.

## Before going live

A few things are intentionally placeholder and should be pointed at the real destinations:

- The enquiry form validates in the browser and shows a confirmation, but does not send anywhere yet — wire it to a route handler, form service or inbox.
- Social links point at `instagram.com` / `tiktok.com`, and the footer Privacy / Terms links at `#`.
- `hello@createandcapture.co` is the contact address used in the contact section.
- Stats and campaign figures are selected real-world results; confirm they are current before publishing.

## Deploying

Deploys as a standard Next.js app on Vercel (or any Node 20+ host) with no extra
configuration or environment variables.
