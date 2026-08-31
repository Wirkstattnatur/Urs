# AGENTS.md — Wirkstattnatur website

This file is the operational guide for AI agents working in this repository. Follow it before making changes. For visual work, also read `DESIGN_SYSTEM.md` and `src/styles.css` first.

## Project objective

Build and maintain the independent Wirkstattnatur website for Urs Gremlich. The codebase was exported from Lovable and is now intentionally standalone. Do not reintroduce Lovable tooling, metadata, dependencies, error reporting, badges, assets, or workflows.

The website should feel calm, personal, credible, natural, and contemporary. It is a health-and-movement practice, not a high-intensity gym brand or generic SaaS landing page.

## Technology and architecture

- React 19 with TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS v4
- Nitro with the Node server preset
- npm and `package-lock.json`
- Node.js 22.12 or newer

Important locations:

- `src/routes/__root.tsx`: document shell, metadata, global integrations
- `src/routes/index.tsx`: current homepage
- `src/routes/README.md`: file-routing rules
- `src/routeTree.gen.ts`: generated router output; never edit manually
- `src/styles.css`: design tokens and shared visual patterns
- `src/components/site-header.tsx`: canonical sticky navigation and service menu
- `DESIGN_SYSTEM.md`: visual rules and extension policy
- `src/lib/services.ts`: canonical homepage offer data
- `src/assets/wirkstatt/`: locally owned website imagery

Do not migrate the project to Next.js, Remix, another router, another CSS system, or another package manager unless the user explicitly requests an architectural migration.

## Installed custom skills

Three globally installed custom skills are available for this project. Use them deliberately and keep this file, `DESIGN_SYSTEM.md`, and the existing codebase as the project-specific source of truth.

- `$vercel-work`: use for React/TanStack/Vite implementation and review work, including route and component changes, SSR/data flow, loading and bundle performance, component composition, accessibility audits, and pre-handoff verification. It is especially useful when a change affects runtime behaviour or component architecture. It must preserve this project's TanStack Start/Router architecture and must not assume or introduce Next.js patterns.
- `$front-end-design`: use for visible interface work, including new or redesigned pages, layout, typography, colour, responsive behaviour, forms, navigation, motion, content states, and visual/UX audits. Before applying it, read `DESIGN_SYSTEM.md` and `src/styles.css`; the Wirkstattnatur design system and explicit user direction override generic stylistic suggestions.
- `$seo-geo-foundation`: use for search, local SEO, international SEO, structured data, crawlability, indexing, metadata, sitemaps, and GEO/AI-search audits or implementation. Read the skill before changing search-facing code, keep repository/build/raw-HTML/rendered/provider evidence separate, and never claim rankings or AI citations from a single observation.
- For changes that affect both appearance and code, use both: use `$front-end-design` to frame the visual and UX direction, then `$vercel-work` to implement, audit, and verify the React behaviour and performance.

## Current information architecture

Preserve this homepage narrative unless the user asks to restructure it:

1. Hero
2. Das Konzept (`#konzept`)
3. Angebot (`#angebot`)
4. Large editorial Urs quote
5. Über mich (`#urs`)
6. Stimmen (`#stimmen`)
7. Kontakt (`#kontakt`)

The homepage and service pages share the approved compact contact composition (CTA demo variant 03): one concise invitation with three direct actions. Phone is the lime primary action; email and Tidio chat are outlined secondary actions. Keep these actions compact and single-line. Addresses, the insurance note, and a linked sitemap live in the shared flat, full-width site footer rather than inside the CTA. The footer is not a floating card and its copyright row does not repeat the services. Preserve this hierarchy unless the user asks to revisit it.

The desktop and mobile menus follow the same order:

- Das Konzept
- Angebot
- Über mich
- Stimmen
- Kontakt

`Angebot` is a grouped navigation item: it links to the homepage offer overview and exposes the four service detail pages. The header is persistent across the homepage and service pages. Reuse `SiteHeader`; do not create route-specific headers or duplicate navigation arrays.

The German homepage is `/` and the English overview is `/en`. `src/lib/locale.ts` owns the locale rules: the first visit follows the visitor's primary system language, while the compact header switch stores an explicit choice. Keep both locale URLs crawlable and maintain reciprocal `hreflang` links when adding translated pages.

The current Angebot contains exactly four services:

- Personal Training
- Pilates
- Golf-Fitness
- Karate

Each homepage offer card links to a dedicated detail page under `/angebot/`. The shared structure lives in `src/components/service-detail-page.tsx`; service copy, facts, methods, pricing, and imagery live centrally in `src/lib/services.ts`. Keep detail pages structurally consistent rather than creating four independent layouts. Their approved narrative is:

1. Split introduction with key facts and client photography
2. Training approach combining the two-part offer and three concise benefits
3. One practical section combining a curated, manually controlled client-photo gallery with locations, methods, and pricing
4. Focused contact call-to-action

This structure was adapted from a client-approved draft. Its visual styling was intentionally not carried over; all service pages must continue to use the Wirkstattnatur design system. The shared gallery in the practical section uses a consistent 1:1 image crop.

Do not restore numbering, arrows, Massagen, or Just Me to the homepage offer cards unless the user asks. Massages remain a structured method group within Personal Training, not a fifth homepage offer. At wide widths the four cards appear in one row; they collapse responsively to two and then one column.

Service galleries use `src/components/service-gallery.tsx`. They are manually controlled, swipeable, keyboard-accessible, reduced-motion aware, and do not auto-play. Keep the images and captions in `src/lib/services.ts`; do not add route-specific carousel implementations or a carousel dependency.

## Content and voice

- Primary language: German for Switzerland.
- Use Swiss spelling: write `ss`, not `ß`.
- Address visitors with informal `du` consistently.
- The Über-mich section is written in Urs's first-person voice.
- Tone: direct, warm, grounded, expert, and concise. Avoid hype, medical promises, fitness clichés, and corporate jargon.
- Do not add a full stop to headings, labels, or other non-sentences.
- Never invent qualifications, prices, addresses, reviews, statistics, affiliations, or health claims.
- Preserve factual nuance. If a claim is unclear or potentially current, verify it from the old website or ask the user.

The legacy site at `https://wirkstattnatur.ch` is the primary source for existing biography, service, qualification, address, and image content. Prefer public pages, the public WordPress API, or the approved scraping workflow. Hostpoint access is read-only unless the user explicitly authorizes a write. Never expose, copy, or reuse WordPress private keys, OAuth credentials, database secrets, or admin tokens.

When bringing legacy images into the new site:

- Download them into `src/assets/wirkstatt/`; do not hotlink them.
- Use an appropriately sized source rather than an unnecessarily large original.
- Inspect the image and crop visually at desktop and mobile sizes.
- Write meaningful alt text for informative photography and `alt=""` for decorative imagery.
- Do not replace client photography with generic stock imagery without approval.

## Design-system contract

`DESIGN_SYSTEM.md` and `src/styles.css` are authoritative. Extend the system deliberately; do not bypass it in page components.

Core rules:

1. Use semantic theme roles such as `background`, `card`, `primary`, `secondary`, `muted`, and `accent`. Do not add raw hex/RGB values or arbitrary Tailwind palette colours inside components.
2. Use shared layout classes: `site-container`, `site-container-narrow`, `site-section`, and `site-anchor`.
3. Use shared type classes: `site-eyebrow`, `site-title`, `site-title-feature`, and `site-lead`.
4. Compose buttons from `site-button`, a size class, and a treatment class.
5. Use `site-card` and `site-card-interactive` for standard card treatment.
6. Full-width sections do not receive border/divider lines, outlines, or isolated shadows. Section rhythm comes from approved surface colours and whitespace.
7. Borders, rings, and shadows are reserved for contained cards, menus, controls, and prominent contained panels.
8. Lime is an accent for calls to action and small emphasis; never use it as a large surface.
9. Fraunces is for headings, quotations, and expressive numbers. Inter is for navigation, body copy, labels, and controls.
10. Avoid one-off spacing, radius, type, shadow, colour, and animation values when an existing token or pattern fits.

If a genuinely new reusable visual role is needed:

1. Name the semantic role.
2. Add it centrally to `src/styles.css`.
3. Document its intended use in `DESIGN_SYSTEM.md`.
4. Refactor repeated uses to consume the new pattern.

Do not build a generic component library speculatively. Extract a shared component or class when it is already repeated, is likely to be reused immediately, or materially improves consistency/accessibility.

## Responsive and interaction rules

- Design mobile and desktop together. Do not treat mobile as an afterthought.
- The primary wide-layout checkpoint is approximately 1440 px; the mobile checkpoint is approximately 390 px.
- Avoid horizontal overflow at every supported width.
- Hover-only information must remain visible on touch devices.
- Keyboard users must receive the same information and a clear focus state.
- Respect `prefers-reduced-motion` for transforms and reveal animations.
- Prefer CSS for presentational interactions. Add React state only when behavior truly requires it.
- Avoid decorative icons that do not clarify an action. The approved offer cards intentionally have no numbering or arrow icons.
- Preserve readable line lengths and sufficient colour contrast.

## Tidio chatbot

The Tidio widget is loaded once after hydration through `src/lib/tidio.ts`, so its standard corner launcher is available throughout the site. Its palette is set through Tidio's supported widget API to the website forest green. The contact actions continue to open the same widget instance.

- Do not add a second embed.
- Do not add a separate hard-coded Tidio script to the document shell; initialise the single widget through `loadTidio()` in the root component.
- Do not style the cross-origin iframe with brittle CSS hacks.
- Do not extract or reuse private WordPress/Tidio tokens.
- Dashboard access is required for bot flows, operators, inboxes, and account-level settings.
- If changing its appearance from code, use supported Tidio APIs and wait for the ready event.
- Keep active chat use optional. The privacy page must accurately explain that the widget connects to Tidio automatically on an ordinary page visit.

## Legal and privacy content

- The public legal routes are `/agb`, `/datenschutz`, and `/impressum`; all use `src/components/legal-page.tsx`.
- The AGB content was transferred from the legacy website at the user's explicit request and must not be rewritten, modernised, or harmonised with the site's `du` voice without explicit approval.
- The privacy statement must describe the site's actual integrations. Update it whenever hosting, analytics, forms, embeds, chat, advertising, or other data flows change.
- Fonts are self-hosted in `src/assets/fonts/`; do not restore Google Fonts requests.
- The site intentionally has no analytics or advertising trackers. Do not add them without explicit user approval and a corresponding consent/privacy review.
- `COMPLIANCE_CHECKLIST.md` records the non-code operational steps that must be confirmed before production and during ongoing use.

## Coding conventions

- Keep TypeScript strict and avoid `any` unless a third-party boundary makes it unavoidable.
- Hoist static content and arrays outside React components.
- Keep components focused; extract repeated or conceptually distinct sections when the homepage becomes difficult to scan.
- Use the `@/` alias for source imports.
- Preserve TanStack file-based routing and the `<Outlet />` in the root component.
- Never edit `src/routeTree.gen.ts` by hand.
- Preserve server-side rendering and metadata behavior.
- Do not add dependencies for behavior that can be implemented clearly with the existing stack.
- Use `apply_patch` for deliberate source edits. Do not overwrite whole files merely for convenience.
- Preserve unrelated user changes in a dirty worktree.

## Validation required before handoff

For every code change:

```sh
npm run lint
npm run build
```

For visible UI/layout changes, also verify in the running site at `http://localhost:8080`:

- Desktop around 1440 px
- Mobile around 390 px
- No horizontal overflow
- No broken images
- Menu and anchor navigation still work
- Changed hover, touch, keyboard, and reduced-motion behavior works as intended
- The Tidio integration was not accidentally duplicated or removed

Use the browser-verification workflow for visual changes and close automation browser sessions after checking. A successful build alone is not sufficient evidence that a design change is correct.

Use Codex's built-in browser for local visual verification. Do not launch or connect to a separate Chrome instance for this project.

## Source control and deployment

- Do not commit, push, open a pull request, deploy, or modify Hostpoint production files unless the user explicitly requests it.
- Before any requested commit, inspect the complete diff and keep unrelated user work intact.
- Do not restore deleted Lovable artifacts during merges or cleanup.
- Production is hosted by Hostpoint and generated with `npm run build:hostpoint`. Every push to `main` in `Wirkstattnatur/Urs` runs `.github/workflows/deploy-hostpoint-staging.yml` and deploys the verified artifact to the document root shared by the production and staging hostnames. Read `HOSTPOINT_DEPLOYMENT.md` before changing the workflow or hosting configuration.
- Never place an unrestricted or personal Hostpoint key in GitHub. The workflow must use the dedicated `rrsync -wo` key restricted to the deployment document root.
- Keep the Hostpoint staging hostname `noindex`; the production hostname must remain indexable.
- Confirm the repository ownership, deployment target, production DNS, mail records, Golden Cobra records, and rollback path before any deployment or domain change.

## Definition of done

A change is complete when it:

- Fulfils the user's requested outcome rather than merely adding scaffolding.
- Uses the established design and content systems.
- Works at desktop and mobile sizes.
- Meets accessibility and interaction requirements.
- Contains no invented client facts or exposed secrets.
- Passes lint and production build checks.
- Leaves the repository easier, not harder, for the next agent to extend coherently.
