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

## 2026-09-13 — accessibility evidence handoff status

- Rendered source: `d2db7cdb9a0f46cf7304d0324397ed5e4589d492`.
- Local production artifact: H1, canonical, one route-local `website accessibility remediation` link, visible `Updated September 13, 2026`, Open Graph modified date, Article dates, and sitemap `<loc>` passed. This sitemap intentionally emits no `<lastmod>`.
- Public checks: cache-busted apex and `www` returned 200 HTML with the expected H1 and apex canonical, but both omitted the new route-local marker, service href, and modified date. The apex sitemap includes the canonical route and has no `<lastmod>` by contract.
- Preserve rendered-source commit `d2db7cdb9a0f46cf7304d0324397ed5e4589d492`; public verification is pending. No repository-approved deployment target or routine was configured, so none was inferred or triggered.
