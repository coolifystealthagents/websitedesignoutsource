import { Header, Footer, JsonLd } from '../../components';
import { philippinesMobileQa as article } from '../../article-content';
import { site } from '../../data';

const baseUrl = 'https://websitedesignoutsource.com';

function ArticleBanner({ index }: { index: number }) {
  const banner = article.banners[index];
  return <aside className="article-rotation-banner" data-rotating-banner={index + 1} aria-label={`${banner.label}: ${banner.title}`}><div><span>{banner.label}</span><h2>{banner.title}</h2><p>{banner.body}</p></div><a href={banner.href}>{banner.cta}</a></aside>;
}

export function MobileQaArticle() {
  const canonical = `${baseUrl}/blog/${article.slug}`;
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${canonical}#article`, headline: article.title, description: article.excerpt, url: canonical, mainEntityOfPage: canonical, datePublished: article.published, dateModified: article.published, author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand, url: baseUrl }, citation: article.sources.map((source) => source.url) },
    { '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: article.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` }, { '@type': 'ListItem', position: 3, name: article.title, item: canonical } ] },
  ];

  return <>
    <Header hidePricing />
    <main className="section rich-article" data-article-revision={article.revision} data-article-kind="philippines-mobile-qa-signoff">
      <article className="container article-shell" data-publication-wrapper="article-body">
        {schemas.map((schema) => <JsonLd key={schema['@id'] || schema['@type']} data={schema} />)}
        <p className="eyebrow">Philippines website design QA guide</p>
        <h1>{article.title}</h1>
        <p className="lead">{article.excerpt}</p>
        <p className="article-date">Published July 28, 2026 · Evidence checked before publication</p>

        <section className="article-module answer-box"><h2>The short answer</h2>
          <p>Give the Philippines-based design team a signoff sheet built around real visitor tasks, not a list of screen sizes. Test the working page on a small phone, a larger phone, and a desktop, then record the browser, result, defect owner, and retest result.</p>
          <p>Your company should approve the message, form destination, account access, and launch. The outside team can prepare the page and fix defects, but one named owner should decide when it is ready.</p>
        </section>

        <ArticleBanner index={0} />

        <section className="article-module"><h2>Mobile review needs its own signoff</h2>
          <p>A desktop screenshot hides a lot. A phone may show a clipped heading, a menu that covers the form, a sticky button that blocks the last field, or a table that drags the whole page sideways.</p>
          <p>Statcounter reported that mobile devices produced 44.99% of measured page views in the Philippines in June 2026. Desktop produced 54.04% and tablets 0.97% that month, based on its sample of more than 3 billion monthly page views.<sup><a href="#source-1">[1]</a></sup></p>
          <p>Those figures describe Statcounter's measured traffic, not this site's audience. They still make one point hard to ignore: signing off from one laptop leaves a large share of likely visits untested.</p>
        </section>

        <section className="article-module"><h2>Agree on the test set before design starts</h2>
          <p>Choose the test set from real records when they exist. Browser and device reports from the current site are better than a fashionable device list copied from another project.</p>
          <p>If the site has no useful history, start with one narrow phone viewport, one wider phone viewport, and one desktop viewport. Add Safari and Chrome coverage, keyboard use, 200% zoom, slow loading, a long heading, a missing image, and a failed form submission.</p>
          <div className="article-table-wrap" tabIndex={0} aria-label="Scrollable table: mobile website QA signoff sheet"><table>
            <caption>A small signoff sheet for each important page</caption>
            <thead><tr><th>Test</th><th>What the reviewer does</th><th>Pass evidence</th><th>Decision owner</th></tr></thead>
            <tbody>
              <tr><td>First screen</td><td>Open the page on the narrow phone view without dismissing anything.</td><td>The main heading is readable, the page job is clear, and no control covers the content.</td><td>Content owner</td></tr>
              <tr><td>Menu and links</td><td>Open and close the menu, then follow every path needed for the main task.</td><td>Focus stays visible, labels make sense, and each link reaches the planned page.</td><td>Page reviewer</td></tr>
              <tr><td>Form path</td><td>Try a blank form, an invalid entry, and a valid test entry.</td><td>Errors explain the fix, fields stay visible, and the expected success step appears.</td><td>Form owner</td></tr>
              <tr><td>Long content</td><td>Use a long heading, a long button label, and a table or graphic where the page has one.</td><td>Text wraps, wide content has its own scroll area, and the page itself stays still.</td><td>Design reviewer</td></tr>
              <tr><td>Slow or failed asset</td><td>Load the page on a slow connection and block one image.</td><td>Useful text appears early, image alternatives remain clear, and the layout does not collapse.</td><td>Technical owner</td></tr>
            </tbody>
          </table></div>
          <p className="scroll-note">On a small screen, swipe the table sideways to read every column.</p>
        </section>

        <figure className="article-visual article-chart" tabIndex={0} aria-label="Scrollable chart: Philippines platform share in June 2026" aria-labelledby="platform-chart-title">
          <svg viewBox="0 0 780 420" role="img" aria-labelledby="platform-chart-title platform-chart-desc">
            <title id="platform-chart-title">Philippines platform share in June 2026</title><desc id="platform-chart-desc">Statcounter measured desktop at 54.04 percent, mobile at 44.99 percent, and tablet at 0.97 percent of page views in the Philippines during June 2026.</desc>
            <rect x="0" y="0" width="780" height="420" rx="24" fill="#17324d" />
            <text x="42" y="54" fill="#ffffff" fontSize="24" fontWeight="700">Measured page views by platform</text><text x="42" y="88" fill="#d8e7eb" fontSize="15">Philippines, June 2026</text>
            <text x="42" y="142" fill="#ffffff" fontSize="16">Desktop</text><rect x="42" y="158" width="620" height="28" rx="14" fill="#38536d" /><rect x="42" y="158" width="335" height="28" rx="14" fill="#46b89c" /><text x="680" y="179" fill="#ffffff" fontSize="17" fontWeight="700">54.04%</text>
            <text x="42" y="232" fill="#ffffff" fontSize="16">Mobile</text><rect x="42" y="248" width="620" height="28" rx="14" fill="#38536d" /><rect x="42" y="248" width="279" height="28" rx="14" fill="#d9ee5b" /><text x="680" y="269" fill="#ffffff" fontSize="17" fontWeight="700">44.99%</text>
            <text x="42" y="322" fill="#ffffff" fontSize="16">Tablet</text><rect x="42" y="338" width="620" height="28" rx="14" fill="#38536d" /><rect x="42" y="338" width="6" height="28" rx="3" fill="#f27b3d" /><text x="680" y="359" fill="#ffffff" fontSize="17" fontWeight="700">0.97%</text>
          </svg>
          <figcaption><b>Methods note:</b> Statcounter's June 2026 Philippines page reports the monthly shares above and says its chart is based on more than 3 billion monthly page views. The bars use a 0 to 100 scale and describe its measured sample, so use this chart as planning context rather than a forecast for one website.<sup><a href="#source-1">[1]</a></sup></figcaption>
        </figure>

        <ArticleBanner index={1} />

        <section className="article-module"><h2>Test tasks instead of staring at layouts</h2>
          <p>Ask the reviewer to complete a job: find a service, open the menu, read the proof, submit the form, recover from an error, and reach the expected next page. This catches more than a side-by-side screenshot review because it follows the visitor's path.</p>
          <p>Use realistic content during the test. A short sample heading and one-line card may pass while the approved copy wraps across five lines and pushes the main button below a sticky panel.</p>
          <p>The <a href="/services/website-ui-design">website UI design page</a> is a useful internal reference for page production. When the main issue is keyboard use, labels, contrast, or zoom, route the defect through <a href="/services/website-accessibility-remediation">website accessibility remediation</a> instead of calling it visual polish.</p>
        </section>

        <section className="article-module"><h2>Keep mobile and desktop content matched</h2>
          <p>Google says it uses the mobile version of a site's content for indexing and ranking, a method it calls mobile-first indexing.<sup><a href="#source-5">[5]</a></sup> Important text, links, image alternatives, headings, and structured data should not disappear just because the viewport is narrow.</p>
          <p>A collapsed menu is fine when it remains usable. Hiding the main service explanation, proof, or route behind a desktop-only section creates a different page for the mobile visitor.</p>
          <p>Check the final HTML as well as the screen. Confirm one clear main heading, the chosen canonical address, working internal links, and matching title and description fields before the owner signs.</p>
        </section>

        <section className="article-module"><h2>Review accessibility while the page is working</h2>
          <blockquote><p>"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."</p><cite>Tim Berners-Lee, W3C Director and inventor of the World Wide Web<sup><a href="#source-4">[4]</a></sup></cite></blockquote>
          <p>The World Bank reported that 77.86699677% of people in the Philippines used the internet in 2023, which this guide rounds to 77.9%.<sup><a href="#source-2">[2]</a></sup> That national measure does not describe every visitor, but it shows why web review belongs in the normal handoff rather than an optional last check.</p>
          <p>WebAIM's February 2026 automated scan found detected WCAG failures on 95.9% of one million homepages. It found 56,114,377 distinct errors, an average of 56.1 per page, and reported that the average had risen 10.1% since its 2025 analysis.<sup><a href="#source-3">[3]</a></sup></p>
          <p>An automated scan cannot prove that one page works for everyone. Pair it with keyboard use, zoom, readable errors, clear labels, sensible heading order, and a check that focus does not disappear behind a sticky mobile control.</p>
        </section>

        <figure className="article-visual handoff-graphic" tabIndex={0} aria-label="Scrollable graphic: mobile QA defect loop" aria-labelledby="qa-loop-title">
          <svg viewBox="0 0 840 350" role="img" aria-labelledby="qa-loop-title qa-loop-desc">
            <title id="qa-loop-title">Four-stop mobile QA defect loop</title><desc id="qa-loop-desc">The loop moves from a named visitor task to a recorded result, a defect fix, and an owner retest. A failed retest returns to the defect record.</desc>
            <defs><marker id="qa-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0f8f73" /></marker></defs><rect x="10" y="10" width="820" height="330" rx="26" fill="#fff8ee" stroke="#eadfcf" strokeWidth="2" /><path d="M194 146 H242 M386 146 H434 M578 146 H626" stroke="#0f8f73" strokeWidth="5" markerEnd="url(#qa-arrow)" />
            <g><rect x="42" y="82" width="152" height="128" rx="17" fill="#17324d" /><text x="118" y="119" textAnchor="middle" fill="#d9ee5b" fontSize="14" fontWeight="700">1. RUN TASK</text><text x="118" y="151" textAnchor="middle" fill="#fff" fontSize="13">Device, browser,</text><text x="118" y="173" textAnchor="middle" fill="#fff" fontSize="13">page and action</text></g>
            <g><rect x="242" y="82" width="152" height="128" rx="17" fill="#eaf7f3" stroke="#0f8f73" strokeWidth="2" /><text x="318" y="119" textAnchor="middle" fill="#17324d" fontSize="14" fontWeight="700">2. RECORD</text><text x="318" y="151" textAnchor="middle" fill="#17324d" fontSize="13">Result, image</text><text x="318" y="173" textAnchor="middle" fill="#17324d" fontSize="13">and exact steps</text></g>
            <g><rect x="434" y="82" width="152" height="128" rx="17" fill="#fff" stroke="#f27b3d" strokeWidth="2" /><text x="510" y="119" textAnchor="middle" fill="#17324d" fontSize="14" fontWeight="700">3. FIX</text><text x="510" y="151" textAnchor="middle" fill="#17324d" fontSize="13">Named person</text><text x="510" y="173" textAnchor="middle" fill="#17324d" fontSize="13">and new build</text></g>
            <g><rect x="626" y="82" width="172" height="128" rx="17" fill="#f27b3d" /><text x="712" y="119" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">4. OWNER RETEST</text><text x="712" y="151" textAnchor="middle" fill="#fff" fontSize="13">Same task plus</text><text x="712" y="173" textAnchor="middle" fill="#fff" fontSize="13">nearby checks</text></g>
            <path d="M712 230 C712 292 318 292 318 230" fill="none" stroke="#617083" strokeWidth="3" strokeDasharray="8 7" markerEnd="url(#qa-arrow)" /><text x="515" y="322" textAnchor="middle" fill="#617083" fontSize="14">A failed retest returns to the same defect record</text>
          </svg>
          <figcaption>The person who fixed a defect should not be the only person who closes it. The owner reruns the failed task and a nearby task, then records the result on the same sheet.</figcaption>
        </figure>

        <section className="article-module"><h2>Write defects so another person can repeat them</h2>
          <p>"The button is broken on mobile" is too vague. Record the page address, phone or viewport, browser, account state, exact steps, expected result, actual result, and an image or short recording when it helps.</p>
          <p>Give each defect one owner and one retest owner. Keep content decisions separate from code defects so a developer does not guess whether a disputed sentence is approved.</p>
          <p>Performance problems need the same discipline. The <a href="/services/core-web-vitals-optimization">Core Web Vitals optimization page</a> covers the technical path, but the signoff sheet should still name the page, test condition, observed problem, and accepted retest.</p>
        </section>

        <ArticleBanner index={2} />

        <section className="article-module"><h2>Close with a public check</h2>
          <p>After launch, open the public address in a fresh phone browser and repeat the main task. Confirm the expected heading, menu, form result, canonical address, and mobile content rather than trusting a completed deployment message.</p>
          <p>Open the sitemap and robots file, then check that they use the chosen public host. Test a few internal links and make sure the new page appears on the blog index when it should.</p>
          <p>Finish by saving the signoff sheet with the release note and removing outside access that is no longer needed. If the next page needs the same review, turn the clean sheet into a copy rather than rewriting the rules from memory.</p>
        </section>

        <section className="article-module sources-box"><h2>Numbered sources</h2><ol>{article.sources.map((source) => <li id={`source-${source.id}`} key={source.url}><a href={source.url}>{source.name}</a><span>{source.note}</span></li>)}</ol></section>
        <section className="article-module"><h2>FAQ</h2>{article.faqs.map((faq) => <div className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>
      </article>
    </main>
    <Footer hidePricing />
  </>;
}
