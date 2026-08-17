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

## First contextual-link candidate

Inspect `/research/website-accessibility-conformance-evidence-2026` first. It is a sourced, existing research page about recording accessibility findings during outsourced redesigns, and `/services/website-accessibility-remediation` is an existing Philippines-only service route for that next step.

If the built route confirms a sentence where a reader needs help addressing a documented accessibility issue, add one body-level link using a specific label such as "website accessibility remediation". Keep the surrounding copy about the evidence boundary and owner review. Do not link a generic closing CTA, add a new service claim, or replace source citations.

## Release checks for a later public edit

1. Confirm both route slugs exist in the generated build and sitemap.
2. Verify the generated research HTML contains the exact contextual label and `/services/website-accessibility-remediation` href.
3. Run the repository test and production build, then inspect the generated route before commit.
4. Commit and push only after the local gates pass. Trigger one Coolify deployment, retain its handle, and cache-bust verify the exact marker on the apex and `www` hosts before calling the change public.
