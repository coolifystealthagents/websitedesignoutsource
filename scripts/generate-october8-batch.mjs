import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const date = '2026-10-08';
const image = '/illustrations/getillustrations/inkdex-saas/filipino-web-design-production.webp';

const blogs = [
  ['outsourced-website-accessibility-acceptance-checklist', 'Outsourced Website Accessibility Acceptance Checklist', 'Build an evidence based accessibility review before accepting pages from an outsourced website design team.', 'accessibility acceptance', 'keyboard paths, headings, labels, contrast, zoom behavior, and error recovery'],
  ['responsive-breakpoint-review-protocol-outsourced-design', 'Responsive Breakpoint Review Protocol for Outsourced Design', 'Review responsive pages with a repeatable viewport matrix, named evidence, and clear defect ownership.', 'responsive breakpoint review', 'viewport coverage, content priority, navigation behavior, image sizing, and touch target checks'],
  ['design-system-token-handoff-outsourced-team', 'Design System Token Handoff for an Outsourced Team', 'Transfer design tokens with ownership, naming rules, implementation examples, and change control.', 'design token handoff', 'color, type, spacing, elevation, motion, and component state tokens'],
  ['website-form-validation-qa-outsourced-build', 'Website Form Validation QA for an Outsourced Build', 'Test labels, errors, focus, recovery, data handling, and confirmation states before accepting website forms.', 'form validation QA', 'field labels, required states, inline errors, focus movement, recovery, and submission confirmation'],
  ['website-content-staging-governance-outsourced-design', 'Website Content Staging Governance for Outsourced Design', 'Keep draft, approved, staged, and published content distinct with a practical ownership record.', 'content staging governance', 'copy status, asset approval, page ownership, publishing gates, and rollback records'],
  ['analytics-event-handoff-outsourced-website', 'Analytics Event Handoff for an Outsourced Website', 'Define events, parameters, consent conditions, test evidence, and ownership before launch.', 'analytics event handoff', 'event names, triggers, parameters, consent state, test cases, and reporting owners'],
  ['website-image-rights-register-outsourced-project', 'Website Image Rights Register for an Outsourced Project', 'Track image sources, licenses, usage limits, credits, crops, and replacement responsibility.', 'image rights register', 'source identity, license terms, permitted use, attribution, derivative files, and expiration'],
  ['cookie-consent-interface-review-outsourced-design', 'Cookie Consent Interface Review for Outsourced Design', 'Review consent choices for clarity, parity, accessibility, persistence, and accurate script behavior.', 'cookie consent interface review', 'choice parity, plain language, keyboard access, preference persistence, and tag behavior'],
  ['website-release-rollback-plan-outsourced-build', 'Website Release Rollback Plan for an Outsourced Build', 'Prepare release criteria, backups, decision owners, rollback triggers, and verification steps.', 'release rollback plan', 'release scope, backup evidence, trigger thresholds, decision authority, restoration, and verification'],
  ['website-localization-qa-outsourced-design', 'Website Localization QA for Outsourced Design', 'Check language, layout expansion, locale formats, direction, metadata, and fallback behavior.', 'localization QA', 'language labels, text expansion, dates, numbers, direction, metadata, and untranslated strings'],
  ['cms-permissions-matrix-outsourced-website-team', 'CMS Permissions Matrix for an Outsourced Website Team', 'Assign the least access needed for drafting, review, publishing, administration, and emergency work.', 'CMS permissions matrix', 'roles, environments, publishing rights, plugin access, temporary elevation, and review dates'],
  ['post-launch-defect-triage-outsourced-website', 'Post Launch Defect Triage for an Outsourced Website', 'Create severity rules, intake evidence, ownership, response targets, and closure checks after launch.', 'post launch defect triage', 'severity, reproduction evidence, user impact, owner, target time, fix verification, and closure'],
];

const research = [
  ['core-web-vitals-vendor-handoff-evidence', 'Core Web Vitals Evidence for an Outsourced Website Handoff', 'A research based framework for separating field data, lab diagnostics, thresholds, and release evidence.', 'Core Web Vitals evidence', 'field and laboratory performance evidence'],
  ['wcag-conformance-sampling-outsourced-web-design', 'WCAG Conformance Sampling for Outsourced Web Design', 'A research framework for choosing representative pages, states, components, and assistive technology checks.', 'WCAG conformance sampling', 'accessibility sampling and conformance evidence'],
  ['structured-data-visible-content-alignment-study', 'Structured Data and Visible Content Alignment Study', 'How outsourced teams can verify that structured claims match rendered titles, dates, authors, and page meaning.', 'structured data alignment', 'structured records and visible page content'],
  ['privacy-consent-dark-patterns-website-design-evidence', 'Privacy Consent Dark Patterns in Website Design', 'Evidence based review criteria for choice symmetry, clarity, accessibility, and consent withdrawal.', 'privacy consent interface evidence', 'consent choice design and user control'],
  ['design-system-accessibility-governance-research', 'Design System Accessibility Governance Research', 'How component ownership, token rules, testing, documentation, and exception control support accessible delivery.', 'design system accessibility governance', 'accessible component and token governance'],
];

const commonSources = [
  ['W3C Web Content Accessibility Guidelines 2.2', 'https://www.w3.org/TR/WCAG22/'],
  ['W3C Understanding WCAG 2.2', 'https://www.w3.org/WAI/WCAG22/Understanding/'],
  ['W3C WAI ARIA Authoring Practices', 'https://www.w3.org/WAI/ARIA/apg/'],
  ['W3C Accessible Rich Internet Applications 1.2', 'https://www.w3.org/TR/wai-aria-1.2/'],
  ['W3C Web Accessibility Evaluation Tools', 'https://www.w3.org/WAI/test-evaluate/tools/'],
  ['Google Search structured data introduction', 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data'],
  ['Google Search Article structured data', 'https://developers.google.com/search/docs/appearance/structured-data/article'],
  ['Google web.dev Core Web Vitals', 'https://web.dev/articles/vitals'],
  ['MDN Web accessibility', 'https://developer.mozilla.org/en-US/docs/Web/Accessibility'],
  ['MDN Constraint validation', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation'],
  ['OWASP Web Security Testing Guide', 'https://owasp.org/www-project-web-security-testing-guide/'],
  ['NIST Privacy Framework', 'https://www.nist.gov/privacy-framework'],
];

function frontmatter(slug, title, description) {
  return `---\ntitle: "${title}"\ndescription: "${description}"\nslug: "${slug}"\npublished: "${date}"\nupdated: "${date}"\nimage: "${image}"\n---\n\n# ${title}\n`;
}

function blogBody(title, practice, scope) {
  return `
${title} turns a broad review request into a decision that a client and an outsourced team can repeat. The working record should explain what is being checked, who owns each answer, what evidence is acceptable, and when the page can move forward. For ${practice}, the evidence should cover ${scope}. A screenshot by itself is rarely enough. The record needs the page, state, device or environment, expected result, observed result, and reviewer.

The practical goal is not to add meetings. It is to prevent an ambiguous handoff from becoming launch risk. A short, consistent evidence packet lets the client review outcomes without reconstructing weeks of chat. It also gives the production team a stable definition of done when people, priorities, or timelines change.

## Define the decision before production

Start with the decision the reviewer must make. Name the pages, templates, components, user journeys, and environments in scope. Record what is excluded. If a shared component changes, identify every template that inherits it. If the review covers only a sample, explain how the sample represents the wider site.

Write acceptance conditions as observable results. A useful condition identifies an action, a state, and an expected outcome. Replace "works on mobile" with named viewports, orientations, content examples, and interactions. Replace "looks accessible" with checks for keyboard order, visible focus, programmatic names, contrast, reflow, and error recovery where those checks apply.

- Assign one accountable client reviewer
- Assign one production owner for corrections
- Name the evidence required for acceptance
- Set a time for review and a time for correction
- Record exceptions separately from accepted work

## Prepare a controlled review set

The review set should use approved content and realistic edge cases. Short placeholder copy can hide wrapping, overflow, validation, and localization defects. Use long headings, missing optional images, narrow screens, slow connections, validation errors, empty states, and authenticated states when they are part of the design.

Keep the environment stable while evidence is collected. Record the build or commit, content version, browser, viewport, account role, and relevant feature settings. A later reviewer should be able to distinguish a defect in the reviewed build from a change introduced afterward.

For ${practice}, group checks by user journey rather than by department. A journey based packet makes it easier to see whether design, content, code, tracking, and operations combine into a usable result. It also reveals gaps between individual approvals, such as a form that is visually correct but does not deliver a useful confirmation or analytics event.

## Collect evidence that answers a question

Every artifact should answer a specific review question. A screenshot can show visual state. A short recording can show focus order or responsive behavior. A test note can capture a browser, assistive technology, or network condition. A source link can show the approved copy, design rule, or requirement. Use the smallest artifact that makes the result independently understandable.

Name evidence files consistently with the route, state, date, and check. Link them from the task record rather than scattering them across messages. Mark whether the evidence shows a pass, defect, accepted exception, or item that could not be tested. An unlabelled folder of screenshots is not an acceptance record.

Reviewers should avoid approving only the ideal path. Include error, empty, loading, permission, and recovery states. Check what happens after refresh, navigation, validation, or a failed request. A production handoff is credible when it documents how the interface behaves when conditions are imperfect.

## Separate defects from preferences

Classify findings before they enter the correction queue. A defect fails an agreed requirement or prevents a user from completing the intended task. A preference proposes a different treatment without showing a failed condition. A new requirement expands the agreed scope. Keeping these categories separate protects the schedule while preserving useful ideas.

For each defect, record severity, affected route, steps to reproduce, expected result, observed result, evidence, owner, and target correction. Severity should reflect user and business impact, not how easy the issue appears to fix. A small code change can address a critical barrier, while an elaborate visual adjustment may remain optional.

## Run the acceptance meeting from the record

Use the record as the agenda. Review unresolved high impact items first, then accepted exceptions, then evidence for completed checks. Do not rely on memory or a live demonstration alone. Live demonstrations are useful, but they should point back to stable evidence and a named build.

The client should approve the outcome, not the internal activity. Hours worked, messages sent, and files uploaded do not prove that the acceptance conditions passed. The production team should be able to show the exact result and explain any boundary or limitation.

## Close the handoff with ownership

Acceptance should produce a durable closeout record. Include the final build, approved routes, evidence index, unresolved exceptions, monitoring owner, access owner, source file location, and rollback contact. State when temporary access will be removed and when recurring checks will happen.

After launch, compare real behavior with the assumptions used in review. Capture support reports, analytics anomalies, performance changes, and accessibility feedback in a separate operational queue. Do not silently rewrite the acceptance record. Preserve what was approved and link later changes to it.

## A practical review sequence

1. Confirm scope, build identity, owners, and acceptance conditions.
2. Prepare representative pages, realistic content, roles, and edge states.
3. Run checks for ${scope}.
4. Record evidence with route, state, environment, expected result, and outcome.
5. Classify findings as defects, preferences, new requirements, or accepted exceptions.
6. Correct material defects and rerun the original steps.
7. Approve the final evidence packet and record operational ownership.

This sequence is deliberately simple. Teams can add specialist tools, but the basic chain should remain clear: requirement, test, evidence, decision, owner. That chain makes ${practice} useful after the immediate launch and gives future maintainers a reliable starting point.

## Further reading

[Review communication practices for outsourced web design](/blog/communication-strategies-outsourced-web-design)
[Use a quality control plan for outsourced design](/blog/quality-control-outsourced-web-design)

## Source

[W3C guidance for evaluating web accessibility](https://www.w3.org/WAI/test-evaluate/)

## Frequently asked questions

### How much evidence is enough?

Collect enough evidence for another reviewer to identify the build, reproduce the check, and understand the decision. Favor a few labelled artifacts over many unexplained screenshots.

### Who should approve the handoff?

One named client owner should make the final decision after specialist reviewers complete their assigned checks. Shared input is valuable, but final accountability should not be ambiguous.

### What should happen to accepted exceptions?

Record the impact, reason, approver, compensating action, and review date. An exception should remain visible and should not be presented later as a completed pass.

## Related Articles

[Website design outsourcing guide](/blog/benefits-outsourcing-web-design)
[Partner selection guide](/blog/choosing-right-outsource-partner)
[Cost planning guide](/blog/cost-effective-web-design-solutions)

## Ready to plan your next step?

[Contact WebsiteDesignOutsource.com](/contact)
`;
}

function researchBody(title, practice, scope) {
  return `
${title} examines how a client can review ${scope} without confusing a tool result with a complete finding. The strongest handoff binds a requirement to a representative page or component, a reproducible method, labelled evidence, a decision, and an owner. That chain is especially important when an outsourced team prepares the implementation and the client remains accountable for the public result.

## Research question and method

The question is whether ${practice} can produce evidence that is accurate, repeatable, and useful for release decisions. This review synthesizes standards and guidance from W3C, Google, MDN, OWASP, and NIST. It compares their different purposes instead of treating them as one universal checklist.

The method maps each claim to four layers: the normative or authoritative source, the implemented page state, the test method, and the decision boundary. A requirement may apply to only certain content or controls. A diagnostic tool may identify a likely issue without establishing conformance. A measured threshold may describe one reporting window rather than every visit. Each layer must remain visible in the record.

## Finding 1: scope determines whether evidence is representative

A correct result on one page does not establish the condition of the whole site. Shared templates can improve coverage, but content, state, data, permissions, and third party scripts can create record specific behavior. The sampling plan should include high traffic templates, critical user journeys, shared components, unusual content, errors, empty states, and pages with distinct technology.

Representative sampling is a reasoned claim, not a shortcut label. The team should document why each sample was chosen and what population it represents. Any page or component outside that population should remain outside the conclusion. This makes limitations visible and prevents a small passing sample from being described as a complete site audit.

## Finding 2: automated and manual evidence answer different questions

Automation is useful for repeatable parsing, measurements, and rules that machines can evaluate. It can quickly detect missing attributes, invalid structures, performance opportunities, or inconsistent records. Manual review is needed for task completion, meaning, reading order, choice clarity, error recovery, and the relationship between visible content and machine readable claims.

The research sources consistently point toward combining methods. A pass from one scanner should be recorded as that scanner's result, version, settings, page, state, and time. It should not be relabelled as general conformance. Manual findings also need reproducible steps and expected outcomes rather than an unsupported opinion.

## Finding 3: visible content is a key comparison surface

For ${practice}, reviewers should compare generated records and behavior with what a visitor can perceive and use. Titles, dates, authors, choices, errors, labels, measurements, and status messages should agree with the source record and rendered state. Hidden metadata cannot repair a misleading or missing visible statement.

This comparison should use the compiled page, not only a source file. Shared loaders and templates may be correct while a single record carries the wrong value. Conversely, a source record can be correct while rendering, styling, hydration, or script behavior prevents the value from being available to visitors.

## Finding 4: provenance makes a result auditable

Evidence should identify the authoritative source, interpretation, page or component, build, environment, content state, test procedure, tool version where relevant, observed result, and reviewer. Dates matter because guidance, browsers, data windows, and implementations change.

Provenance does not require a large reporting system. A compact table or structured record can be sufficient if each field is explicit. The essential requirement is that a later reviewer can determine what was tested and avoid treating old evidence as proof of a changed page.

## Finding 5: exceptions need governance

Not every issue is resolved before release. A credible handoff distinguishes a pass from a known exception. The exception record should state the failed or untested condition, affected users and routes, reason for acceptance, compensating action, accountable approver, owner, and review date.

Exceptions should not be hidden in meeting notes or converted into vague backlog items. They are part of the release decision. If a limitation prevents testing, the report should say that evidence was unavailable rather than inferring a pass.

## Recommended evidence model

Use one record for each material claim:

- Claim and authoritative source
- Page, component, content state, and build identity
- Test method, tool version, settings, and environment
- Expected result and observed result
- Evidence link and review date
- Outcome: pass, defect, accepted exception, or not tested
- Correction owner, approver, and next review date

This model supports both technical specialists and business reviewers. Specialists can reproduce the result. Decision makers can see scope, impact, and ownership without interpreting raw tool output.

## Limitations

Standards and documentation have different scopes. Search guidance does not establish accessibility conformance. Accessibility evaluation does not prove privacy compliance or security. Laboratory performance does not describe every real visitor. A security testing guide does not replace an organization specific threat model. This article offers a governance framework and does not make a legal certification.

The cited sources may change after publication. The implementation under review may also change after evidence is collected. A release packet therefore supports a dated decision for a named build. Continuing monitoring and scheduled revalidation remain necessary.

## Conclusion

${title} is most reliable when the team preserves the chain from source to implementation, test, evidence, decision, and owner. Sampling must be justified, tool results must keep their original meaning, visible content must be compared with generated records, and exceptions must remain explicit. That approach gives outsourced delivery a reviewable boundary while keeping the client in control of the public outcome.

## Sources

${commonSources.map(([name, url], index) => `${index + 1}. [${name}](${url})`).join('\n')}

## Further reading

[Structured data eligibility research](/research/website-structured-data-eligibility-2026)
[Accessibility conformance evidence](/research/website-accessibility-conformance-evidence-2026)

## Related Research

[Responsive image delivery](/research/website-responsive-image-delivery-2026)
[Privacy consent interface research](/research/website-privacy-consent-interface-2026)
[Quality assurance sampling](/research/website-qa-sampling-plan-outsourced-team)

## Frequently asked questions

### Does one automated pass prove the site meets every requirement?

No. It proves only that the selected tool and rules produced that result for the tested page, state, environment, and time.

### Why preserve the build and page state?

Without them, a reviewer cannot know whether later changes explain a different result or whether the original evidence covered the current page.

### What is the most important handoff artifact?

The evidence index is the most useful summary because it links each claim to its source, test, result, decision, and owner.

## Ready to plan your next step?

[Contact WebsiteDesignOutsource.com](/contact)
`;
}

for (const [slug, title, description, practice, scope] of blogs) {
  fs.writeFileSync(path.join(root, 'content/blog', `${slug}.mdx`), frontmatter(slug, title, description) + blogBody(title, practice, scope));
}
for (const [slug, title, description, practice, scope] of research) {
  fs.writeFileSync(path.join(root, 'content/research', `${slug}.mdx`), frontmatter(slug, title, description) + researchBody(title, practice, scope));
}

const reportDir = path.join(root, '.paperclip/daily-content', date);
fs.mkdirSync(reportDir, { recursive: true });
const manifest = (items, kind) => ({ date, kind, count: items.length, publicationDateVisible: true, image, items: items.map(([slug, title, description]) => ({ slug, title, description, file: `content/${kind}/${slug}.mdx`, route: `/${kind}/${slug}`, published: date })) });
fs.writeFileSync(path.join(reportDir, 'blog.json'), JSON.stringify(manifest(blogs, 'blog'), null, 2) + '\n');
fs.writeFileSync(path.join(reportDir, 'research.json'), JSON.stringify(manifest(research, 'research'), null, 2) + '\n');

console.log(JSON.stringify({ date, blog: blogs.length, research: research.length, total: blogs.length + research.length }));
