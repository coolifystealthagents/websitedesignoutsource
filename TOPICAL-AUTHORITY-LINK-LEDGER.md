# Website Design Outsource topical-authority link ledger

## Scope and evidence

This is a planning record for existing routes only. It does not claim rankings, traffic, backlinks, customer results, or a completed public release. The site serves businesses that use Philippines-based specialists for website design, updates, and production work. Its existing service routes are the commercial pillars; existing blog and research routes answer supporting questions.

Current content is split between `app/fleet-content.ts`, `app/data.ts`, and Markdown files in `content/blog` and `content/research`. The Markdown renderer supports ordinary inline Markdown links. Its current Markdown posts have no body links to `/services/`, while three dedicated blog articles already use contextual service links. Organization authorship is used on the established article schemas. No individual author record was found, so this ledger does not propose one.

## Existing pillar routes

| Service pillar | Buyer need it addresses | Existing supporting route to inspect first |
| --- | --- | --- |
| `/services/website-ui-design` | Turn approved page work into a reviewed interface | `/research/website-design-visual-hierarchy-evidence` |
| `/services/nextjs-website-development` | Build or rebuild a Next.js site with owner review | `/blog/philippines-website-redesign-outsourcing-migration-checklist` |
| `/services/wordpress-website-builds` | Plan a WordPress build with clear source and review rules | `/blog/the-process-of-outsourced-website-design` |
| `/services/shopify-store-design` | Prepare store-design work and approve the work lane | `/blog/outsourced-website-design-landing-page-message-map` |
| `/services/landing-page-design` | Build a conversion page from an approved brief | `/research/website-design-website-copy-evidence` |
| `/services/website-accessibility-remediation` | Fix a named accessibility issue with an owner review path | `/research/website-accessibility-conformance-evidence-2026` |
| `/services/core-web-vitals-optimization` | Investigate a performance issue with page-level evidence | `/research/website-performance-budget-handoff` |
| `/services/design-system-production` | Hand off reusable components with documented rules | `/research/design-system-handoff-controls` |
| `/services/website-content-migration` | Preserve useful URLs and content through a redesign | `/research/website-migration-inventory-control-study` |
| `/services/website-maintenance` | Set a controlled process for recurring website changes | `/research/website-change-management-controls` |

## Delivered contextual link

`/research/website-accessibility-conformance-evidence-2026` now has a body-level link to `/services/website-accessibility-remediation`. It gives a reader with a documented issue one specific next step while keeping exception acceptance, policy questions, and release conditions with the company.

Do not add another accessibility-service CTA to this research route. The existing link is the typed, route-local handoff for this supporting-page/pillar pair.

## Verified execution inventory — 2026-09-24

The following five existing research routes were checked in a fresh production build. Each has one clear supporting question, its matching existing Philippines-only service pillar, an exact canonical artifact, and a sitemap entry. They are planning candidates only; do not turn the list into a generic service list or implement more than one handoff in a run.

| Priority | Supporting route and reader question | Existing service pillar | Generated-route finding | Safe follow-up |
| --- | --- | --- | --- | --- |
| Delivered | `/research/website-performance-budget-handoff` — What evidence should a team hand over when a page misses its performance budget? | `/services/core-web-vitals-optimization` | Exact route-local service href count: 1, using the canonical absolute URL | Do not add another performance-service CTA. Keep performance targets and release approval with the owner. |
| 1 | `/research/website-migration-inventory-control-study` — How can a team account for useful content before a redesign moves it? | `/services/website-content-migration` | Exact route-local service href count: 0 | Add one migration-service handoff beside the inventory decision. The owner keeps URL retirement, redirect, and release decisions. |
| 2 | `/research/design-system-handoff-controls` — What should a distributed team document before reusing a component? | `/services/design-system-production` | Exact route-local service href count: 0 | Add one route-local handoff only if the typed record supports it. Keep component acceptance and production release with the owner. |
| 3 | `/research/website-change-management-controls` — What evidence should accompany a recurring website change? | `/services/website-maintenance` | Exact route-local service href count: 0 | Add one maintenance handoff for a reader preparing recurring work. Keep access, exception, and publish decisions with the owner. |
| 4 | `/research/website-design-website-copy-evidence` — What evidence should support website copy before a landing page is built? | `/services/landing-page-design` | Exact route-local service href count: 0 | Add one landing-page handoff only if it stays beside the copy-review decision. The owner approves claims, offers, and publication. |

The remaining older blog candidates need a separate metadata and artifact-contract review before they can enter this inventory. They are not treated as ready merely because a sitemap route exists.

## 2026-09-28 — performance-handoff reconciliation

A fresh production build found that the performance-budget route already renders exactly one canonical absolute link to the Core Web Vitals optimization service inside its route-local main. The earlier zero-link ledger row came from a probe that looked only for a relative href. The route and service each have a unique canonical artifact and a sitemap location; the sitemap intentionally has no lastmod. This source-only correction marks the pair delivered and promotes the migration pair without changing reader-facing output.

## 2026-09-13 — accessibility evidence handoff status

- Rendered source: `d2db7cdb9a0f46cf7304d0324397ed5e4589d492`.
- Local production artifact: H1, canonical, one route-local `website accessibility remediation` link, visible `Updated September 13, 2026`, Open Graph modified date, Article dates, and sitemap `<loc>` passed. This sitemap intentionally emits no `<lastmod>`.
- Public checks: cache-busted apex and `www` returned 200 HTML with the expected H1 and apex canonical, but both omitted the new route-local marker, service href, and modified date. The apex sitemap includes the canonical route and has no `<lastmod>` by contract.
- Preserve rendered-source commit `d2db7cdb9a0f46cf7304d0324397ed5e4589d492`; public verification is pending. No repository-approved deployment target or routine was configured, so none was inferred or triggered.

## 2026-09-17 — visual hierarchy to UI-design handoff status

- Rendered source: `6bcd536d231b6838d99e61ad78cff08456e1299b`.
- Local production artifact: `Visual Hierarchy Evidence for Website Pages` has its canonical URL, one route-local `/services/website-ui-design` link, the owner-boundary sentence, Open Graph modified time, and Article `datePublished` `2026-08-14` / `dateModified` `2026-09-17`. The UI-design service artifact has its H1 and canonical URL; both routes are in the sitemap, which intentionally has no `<lastmod>`.
- Public checks: cache-busted apex, `www`, and canonical sitemap each returned `403 text/plain` without an HTML or XML body. These denied responses provide no route-marker, H1, canonical, or sitemap evidence.
- Preserve rendered-source commit `6bcd536d231b6838d99e61ad78cff08456e1299b`; source delivery is complete, while deployment remains pending public verification / public unavailable. Do not add a duplicate UI-design CTA to this research route; recheck the two hosts and sitemap after an approved rollout path is available.

## 2026-10-01 — migration inventory handoff status

- Rendered source: `511fb2d2742a5d570c1deff3a370d2904ff2f300`.
- Local production artifact: the route has its H1, self-canonical URL, one route-local Website Content Migration service link, the owner-boundary sentence, Article `datePublished` `2026-08-10` / `dateModified` `2026-10-01`, and a sitemap `<loc>`. The sitemap intentionally has no `<lastmod>`.
- Public checks: cache-busted apex and `www` returned `200 text/html` with the expected H1 and apex canonical, but both omit the new route-local marker, service href, and updated date. The cache-busted apex sitemap returned `200 application/xml`, includes the canonical route, and has no `<lastmod>` by contract.
- Preserve rendered-source commit `511fb2d2742a5d570c1deff3a370d2904ff2f300`; source delivery is complete, while deployment remains pending public verification / public stale. No repository-approved deployment target or lifecycle handle was found, so none was inferred or triggered. Do not add a duplicate migration CTA; recheck both hosts after an approved rollout path is available.

## 2026-10-03 — design-system production handoff status

- Rendered source: `a08b20a0a20f56cf0479a7ffb0dacf94993d4ee1`.
- Local production artifact: the route has its H1, self-canonical URL, one route-local Design System Production service link, the owner-boundary sentence, Article `datePublished` `2026-08-07` / `dateModified` `2026-10-03`, and a sitemap `<loc>`. The sitemap intentionally has no `<lastmod>`.
- Public checks: cache-busted apex and `www` returned `200 text/html` with the expected H1 and apex canonical, but both omit the new route-local marker and service href and retain `article:modified_time` `2026-08-07`. Both cache-busted XML sitemaps include the canonical route and have no `<lastmod>` by contract.
- Preserve rendered-source commit `a08b20a0a20f56cf0479a7ffb0dacf94993d4ee1`; source delivery is complete, while deployment remains pending public verification / public stale. No repository-approved deployment target or lifecycle handle was found, so none was inferred or triggered. Do not add a duplicate design-system CTA; recheck both hosts after an approved rollout path is available.
