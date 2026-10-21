# V3 implementation and design register

This file records the site-specific system used to satisfy the V3 production brief. It is a maintenance reference, not public marketing copy.

## Brand and visual system

- Direction: technical editorial modernism with a tactile studio-workbench feel.
- Base colors: ink `#183432`, deep green `#174b45`, teal `#147d70`, orange `#f0642f`, paper `#fffaf2`, wash `#f3ede2`.
- Geometry: clipped hero and CTA shapes, ruled editorial sections, high-contrast production cards, restrained shadows.
- Typography: display and body families are defined by existing global font variables; headings use compact line-height and responsive `clamp()` sizing.
- Motion: low-speed review rail with visible Pause/Play control, hover/focus pause, and reduced-motion override.
- Focus: 3 px orange `:focus-visible` outline with offset; shared skip link targets one focusable anchor after the site header.

## Shared interface contracts

| Concern | Implementation | Verification |
| --- | --- | --- |
| Header/navigation | `app/components.tsx`, `app/site-navigation.tsx` | Exact labels: Home, Services, Contact Us; desktop and modal mobile navigation |
| Parent attribution | `PoweredBy` plus official logo | Header/footer on shared routes; official asset under `public/brand/` |
| Reviews | `app/reviews.ts`, `app/reviews-provenance.json`, `TestimonialsRail` | 14 approved records, source link, provenance, controllable motion |
| Services | `app/service-details.ts`, service templates | 10 route slugs, each with audience, problem, inputs, work, outputs, boundaries, controls, scenarios, FAQs |
| Editorial | `app/editorial-system.tsx`, `app/editorial-toc.tsx` | Stable heading IDs, real H2/H3 TOC, desktop sticky and mobile disclosure modes |
| Conversion | `/contact-us` -> `/api/contact` -> `/thank-you` -> `/thanks-whats-next` | Browser-required and server-enforced fields; consent; honeypot; noindex post-conversion routes |
| SEO | route metadata, sitemap route, redirect register | Exact canonical host/path, 713 unique sitemap URLs, redirect aliases excluded |
| Security | `proxy.ts`, `next.config.mjs` | Canonical host/protocol redirect, CSP, HSTS, nosniff, frame, referrer and permissions policies |

## Approved assets and provenance

- `public/brand/stealth-agents-logo.png`: official StealthAgents identity supplied from the approved first-party sibling repository.
- `public/brand/stealth-agents-team-bacolod.jpg`: official Bacolod team photograph supplied from the same approved source.
- Review text and attributions are recorded in `app/reviews.ts`; source details and checksums are in `app/reviews-provenance.json`.
- Generic photography is not repeated across editorial routes. `TopicHero` generates deterministic topic-aware visual briefing diagrams when a specific approved photograph is unavailable.

## Route and release acceptance evidence

- Contract tests: `tests/v3-contract.test.mjs` plus the existing test suite.
- Local production build: Next.js generates 726 pages/routes.
- Sitemap crawl: 713 unique indexable URLs; each returns 200, has one H1, an exact canonical, and no prohibited visible em/en dash.
- Internal graph: 782 discovered first-party targets; no broken targets after the explicit legacy redirect register.
- Conversion: missing any required intake field returns 422; a complete locally submitted body advances to the unavailable-token boundary rather than validation failure.
- Responsive acceptance: 1440 px and 390 px browser runs cover homepage, services, service detail, contact, confirmation, and representative blog/research routes.

## Maintenance rules

1. Add new public services to both `fleetServices` and `serviceDetails`.
2. Add only traceable first-party review records; update provenance at the same time.
3. Generate article TOCs from rendered headings; do not maintain a disconnected manual list.
4. Public CTAs use `/contact-us`; `/api/contact` remains the form endpoint.
5. Retired public URLs need explicit permanent redirects and must not appear in the sitemap.
6. Every indexable route needs an exact `https://websitedesignoutsource.com/<path>` canonical.
7. Any moving content needs a visible keyboard-operable control and reduced-motion behavior.
