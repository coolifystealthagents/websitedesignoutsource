import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const topics = [
  {
    slug: 'visual-regression-review-outsourced-website-design',
    title: 'Visual Regression Review for Outsourced Website Design',
    service: '/services/website-ui-design',
    related: ['/research/outsourced-website-acceptance-test-matrix', '/research/browser-support-matrix-outsourced-website-acceptance', '/research/website-zoom-reflow-acceptance-outsourced-design'],
    sources: [
      ['Playwright, Visual comparisons', 'https://playwright.dev/docs/test-snapshots'],
      ['Playwright, Emulation', 'https://playwright.dev/docs/emulation'],
      ['W3C, Web Content Accessibility Guidelines 2.2', 'https://www.w3.org/TR/WCAG22/'],
      ['W3C WAI, Understanding Reflow', 'https://www.w3.org/WAI/WCAG22/Understanding/reflow.html'],
      ['W3C WAI, Understanding Resize Text', 'https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html'],
      ['W3C WAI, Understanding Focus Appearance', 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html'],
      ['MDN, Responsive design', 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design'],
      ['MDN, CSS object-fit', 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit'],
      ['WHATWG, HTML Living Standard', 'https://html.spec.whatwg.org/'],
      ['Web Platform Tests documentation', 'https://web-platform-tests.org/writing-tests/']
    ]
  },
  {
    slug: 'design-system-component-accessibility-acceptance',
    title: 'Design System Component Accessibility Acceptance',
    service: '/services/design-system-production',
    related: ['/research/design-system-handoff-controls', '/research/accessibility-acceptance-checklist-outsourced-web-projects', '/research/accessible-modal-acceptance-criteria'],
    sources: [
      ['W3C, Web Content Accessibility Guidelines 2.2', 'https://www.w3.org/TR/WCAG22/'],
      ['W3C WAI, ARIA Authoring Practices Guide', 'https://www.w3.org/WAI/ARIA/apg/'],
      ['W3C, Accessible Rich Internet Applications 1.2', 'https://www.w3.org/TR/wai-aria-1.2/'],
      ['W3C, HTML Accessibility API Mappings 1.0', 'https://www.w3.org/TR/html-aam-1.0/'],
      ['WHATWG, HTML Living Standard', 'https://html.spec.whatwg.org/'],
      ['W3C WAI, Using ARIA', 'https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/'],
      ['W3C WAI, Keyboard compatibility', 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html'],
      ['W3C WAI, Focus order', 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html'],
      ['W3C WAI, Name, Role, Value', 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html'],
      ['W3C WAI, Easy Checks', 'https://www.w3.org/WAI/test-evaluate/preliminary/']
    ]
  },
  {
    slug: 'website-security-update-acceptance-maintenance',
    title: 'Website Security Update Acceptance for Maintenance Teams',
    service: '/services/website-maintenance',
    related: ['/research/website-change-management-controls', '/research/web-dependency-supply-chain-handoff-research', '/research/website-backup-restore-acceptance-outsourced-handoff'],
    sources: [
      ['NIST, Secure Software Development Framework SP 800-218', 'https://csrc.nist.gov/pubs/sp/800/218/final'],
      ['NIST, Cybersecurity Framework 2.0', 'https://www.nist.gov/cyberframework'],
      ['CISA, Known Exploited Vulnerabilities Catalog', 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog'],
      ['CISA, Secure by Design', 'https://www.cisa.gov/securebydesign'],
      ['OWASP, Vulnerable and Outdated Components', 'https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/'],
      ['OWASP, Software Component Verification Standard', 'https://owasp.org/www-project-software-component-verification-standard/'],
      ['GitHub Docs, About Dependabot alerts', 'https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts'],
      ['npm Docs, npm audit', 'https://docs.npmjs.com/cli/v11/commands/npm-audit'],
      ['WordPress Developer Resources, Hardening WordPress', 'https://developer.wordpress.org/advanced-administration/security/hardening/'],
      ['PCI Security Standards Council, PCI DSS', 'https://www.pcisecuritystandards.org/document_library/']
    ]
  },
  {
    slug: 'website-secrets-configuration-handoff-research',
    title: 'Website Secrets and Configuration Handoff Research',
    service: '/services/nextjs-website-development',
    related: ['/research/website-design-handoff-reliability-research', '/research/web-dependency-supply-chain-handoff-research', '/research/website-change-management-controls'],
    sources: [
      ['NIST, Digital Identity Guidelines SP 800-63B', 'https://pages.nist.gov/800-63-4/sp800-63b.html'],
      ['NIST, Security and Privacy Controls SP 800-53 Rev. 5', 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final'],
      ['OWASP, Secrets Management Cheat Sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html'],
      ['OWASP, CI/CD Security Cheat Sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html'],
      ['GitHub Docs, Using secrets in GitHub Actions', 'https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions'],
      ['GitHub Docs, Security hardening for GitHub Actions', 'https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions'],
      ['Next.js Docs, Environment variables', 'https://nextjs.org/docs/app/guides/environment-variables'],
      ['The Twelve-Factor App, Config', 'https://12factor.net/config'],
      ['CISA, Secure by Design', 'https://www.cisa.gov/securebydesign'],
      ['IETF, OAuth 2.0 Security Best Current Practice RFC 9700', 'https://www.rfc-editor.org/rfc/rfc9700']
    ]
  },
  {
    slug: 'website-release-rollback-readiness-outsourced-handoff',
    title: 'Website Release Rollback Readiness in an Outsourced Handoff',
    service: '/services/website-maintenance',
    related: ['/research/website-backup-restore-acceptance-outsourced-handoff', '/research/website-change-management-controls', '/research/outsourced-website-acceptance-test-matrix'],
    sources: [
      ['NIST, Contingency Planning Guide SP 800-34 Rev. 1', 'https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final'],
      ['NIST, Security and Privacy Controls SP 800-53 Rev. 5', 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final'],
      ['Google SRE Book, Release Engineering', 'https://sre.google/sre-book/release-engineering/'],
      ['Google SRE Workbook, Canarying Releases', 'https://sre.google/workbook/canarying-releases/'],
      ['Kubernetes Docs, Deployments', 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/'],
      ['GitHub Docs, About environments', 'https://docs.github.com/en/actions/deployment/targeting-different-environments/managing-environments-for-deployment'],
      ['GitHub Docs, Deployments', 'https://docs.github.com/en/actions/use-cases-and-examples/deploying/deploying-with-github-actions'],
      ['RFC 9110, HTTP Semantics', 'https://www.rfc-editor.org/rfc/rfc9110'],
      ['Google Search Central, Site moves with URL changes', 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes'],
      ['OWASP, Logging Cheat Sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html']
    ]
  }
];

const prompt = `Write exactly five publication-ready Markdown research articles for WebsiteDesignOutsource.com, a Philippines-based outsourced website design production service. Return JSON only as {"articles":[{"slug":"...","content":"complete MDX text"}]}. Use exactly the topic records below and no others.

Each complete MDX text must:
- Start with YAML frontmatter fields title, description, slug, published: "2026-09-24", and image: "/illustrations/getillustrations/inkdex-saas/filipino-web-design-production.webp".
- Contain at least 1,350 substantive words after frontmatter.
- Preserve the calm, practical, evidence-led editorial voice. Address buyer decisions in an outsourced website engagement. Do not claim customer results, rankings, prices, certifications, locations beyond the provided Philippines context, or services not established by the specified service route.
- Use sections: Research question; Method and scope; several topic-specific analytical sections; Acceptance evidence; Facts, inference, and limitations; Sources; Related Research.
- Clearly label facts and inference in the Facts section. Explain limitations and avoid invented statistics.
- Use all ten supplied sources, and only those supplied sources, as a numbered Sources list. For each list item, include exact supplied publisher/title as linked text, its exact URL, a concise relevance note, and 'checked 2026-09-24'. Do not imply that a source mandates our proposed checklist when it does not.
- Include one natural contextual link to the specified service route and all three specified related research links. Do not add other internal links.
- Avoid em dash characters, en dash characters, double hyphens in prose, fake quotations, fabricated data, prompts, agents, QA process, manifests, deployment mechanics, or credentials.
- Do not include an H1 because the page template renders the frontmatter title as H1.
- Make practical distinctions between evidence and a claim, rollback and backup where relevant, automated checks and human judgment, and owner versus delivery-team decisions.

Topic records:
${JSON.stringify(topics, null, 2)}`;

const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${encodeURIComponent(process.env.GEMINI_API_KEY)}`, {
  method: 'POST',
  headers: {'content-type': 'application/json'},
  body: JSON.stringify({
    contents: [{role: 'user', parts: [{text: prompt}]}],
    generationConfig: {responseMimeType: 'application/json', temperature: 0.2, maxOutputTokens: 65536}
  })
});
if (!response.ok) throw new Error(`Gemini request failed: ${response.status} ${await response.text()}`);
const data = await response.json();
const text = data.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('');
if (!text) throw new Error('No generated content returned');
const parsed = JSON.parse(text);
if (!Array.isArray(parsed.articles) || parsed.articles.length !== 5) throw new Error('Expected exactly five articles');
for (const topic of topics) {
  const article = parsed.articles.find(item => item.slug === topic.slug);
  if (!article) throw new Error(`Missing ${topic.slug}`);
  fs.writeFileSync(path.join(root, 'content/research', `${topic.slug}.mdx`), article.content.trim() + '\n');
}
console.log(topics.map(topic => topic.slug).join('\n'));
