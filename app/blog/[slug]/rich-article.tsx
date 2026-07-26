import { Header, Footer, JsonLd } from '../../components';
import { philippinesAccessibleHandoff as article } from '../../article-content';
import { site } from '../../data';

const baseUrl = 'https://websitedesignoutsource.com';

function ArticleBanner({ index }: { index: number }) {
  const banner = article.banners[index];
  return (
    <aside className="article-rotation-banner" data-rotating-banner={index + 1} aria-label={`${banner.label}: ${banner.title}`}>
      <div>
        <span>{banner.label}</span>
        <h2>{banner.title}</h2>
        <p>{banner.body}</p>
      </div>
      <a href={banner.href}>{banner.cta}</a>
    </aside>
  );
}

export function AccessibleHandoffArticle() {
  const canonical = `${baseUrl}/blog/${article.slug}`;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: article.title,
      description: article.excerpt,
      url: canonical,
      mainEntityOfPage: canonical,
      datePublished: article.published,
      dateModified: article.published,
      author: { '@type': 'Organization', name: site.brand },
      publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
      citation: article.sources.map((source) => source.url),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: article.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
      ],
    },
  ];

  return (
    <>
      <Header hidePricing />
      <main className="section rich-article" data-article-revision={article.revision}>
        <article className="container article-shell">
          {schemas.map((schema) => <JsonLd key={schema['@id'] || schema['@type']} data={schema} />)}
          <p className="eyebrow">Philippines website design guide</p>
          <h1>{article.title}</h1>
          <p className="lead">{article.excerpt}</p>
          <p className="article-date">Published July 25, 2026 · Evidence checked before publication</p>

          <section className="article-module answer-box">
            <h2>The short answer</h2>
            <p>Outsource a small, clear page lane before you hand over a whole website. Give the Philippines-based team approved examples, a named reviewer, an access limit, and a written definition of done.</p>
            <p>Accessibility belongs in that definition of done. If keyboard use, labels, contrast, zoom, image text, and source-file ownership appear only at the end, the team will have to undo finished work.</p>
          </section>

          <ArticleBanner index={0} />

          <section className="article-module">
            <h2>Why the handoff deserves its own plan</h2>
            <p>A design can look finished in a screenshot and still be hard to use. The form may have no clear labels, the menu may fail by keyboard, or the text may break when a visitor zooms in.</p>
            <p>The audience is not small. The World Health Organization said on March 7, 2023 that about 1.3 billion people, or 16% of the world population, experience a significant disability.<sup><a href="#source-2">[2]</a></sup> The World Bank reported that 77.86699677% of people in the Philippines used the internet in 2023, which we round to 77.9%.<sup><a href="#source-1">[1]</a></sup></p>
            <p>Common page errors remain easy to ship. WebAIM found detected WCAG failures on 94.8% of the one million homepages it tested in 2025, with 51 detected errors per page.<sup><a href="#source-3">[3]</a></sup> That study used automated checks, so it did not catch every barrier.</p>
          </section>

          <section className="article-module">
            <h2>Pick a work lane that can be judged</h2>
            <p>Start with a page type that your team understands. The first job should have real copy, a known visitor action, and an approved reference page.</p>
            <div className="article-table-wrap" tabIndex={0} aria-label="Scrollable table: good and poor first outsourcing lanes">
              <table>
                <caption>Good first lanes compared with harder first assignments</caption>
                <thead><tr><th>Work lane</th><th>Why it is easier to review</th><th>Owner decision</th></tr></thead>
                <tbody>
                  <tr><td>Service page from approved copy</td><td>The message and page goal already exist. Review can focus on order, readability, mobile fit, and calls to action.</td><td>Approve the final section order and page action.</td></tr>
                  <tr><td>Landing page from a signed brief</td><td>The audience, offer, form, and proof are named before design begins. The team has fewer open questions.</td><td>Approve claims, form fields, and launch timing.</td></tr>
                  <tr><td>Reusable blog layout</td><td>One template can be tested with a short post, a long post, tables, quotes, and images. Problems appear before many pages use it.</td><td>Approve the content rules and publishing checklist.</td></tr>
                  <tr><td>Full brand and site rethink</td><td>This is a poor first lane because every choice depends on another choice. A weak brief can produce weeks of opinion-based edits.</td><td>Keep strategy, brand direction, and final scope with your team.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="scroll-note">On a small screen, swipe the table sideways to read every column.</p>
          </section>

          <section className="article-module">
            <h2>Write the brief before the design starts</h2>
            <p>A useful brief names the visitor, the page job, the content owner, and the action the visitor should take. It also says what the page must not claim.</p>
            <p>Attach one approved page and one page that missed the mark. Add a short note about what worked or failed so the team does not have to guess why you shared each example.</p>
            <ul className="article-checklist">
              <li>Page URL, page type, and the person who owns the final decision</li>
              <li>Approved copy, required links, image files, and image rights notes</li>
              <li>Brand colors, type rules, spacing rules, and reusable components</li>
              <li>Required states for menus, forms, buttons, errors, and success messages</li>
              <li>Keyboard, contrast, zoom, labels, headings, and alt text checks</li>
              <li>Browser sizes, devices, and content examples used in review</li>
            </ul>
            <p>Google's SEO starter guide asks site owners to use logical organization, useful link text, and descriptive alt text.<sup><a href="#source-6">[6]</a></sup> Put those items in the brief rather than asking someone to remember them at launch.</p>
          </section>

          <figure className="article-visual article-chart" aria-labelledby="context-chart-title">
            <svg viewBox="0 0 760 390" role="img" aria-labelledby="context-chart-title context-chart-desc">
              <title id="context-chart-title">Three context numbers for an accessible website handoff</title>
              <desc id="context-chart-desc">Horizontal bars show 16 percent of the world population with a significant disability, 77.9 percent internet use in the Philippines in 2023, and 94.8 percent of tested homepages with detected WCAG failures in 2025.</desc>
              <rect x="0" y="0" width="760" height="390" rx="24" fill="#17324d" />
              <text x="42" y="54" fill="#ffffff" fontSize="24" fontWeight="700">Accessibility context, shown per 100</text>
              <text x="42" y="90" fill="#d8e7eb" fontSize="15">Different measures. Read each label before comparing the bars.</text>
              <text x="42" y="142" fill="#ffffff" fontSize="16">People with a significant disability worldwide</text>
              <rect x="42" y="158" width="620" height="26" rx="13" fill="#38536d" /><rect x="42" y="158" width="99" height="26" rx="13" fill="#f27b3d" /><text x="680" y="178" fill="#ffffff" fontSize="17" fontWeight="700">16%</text>
              <text x="42" y="224" fill="#ffffff" fontSize="16">People using the internet in the Philippines, 2023</text>
              <rect x="42" y="240" width="620" height="26" rx="13" fill="#38536d" /><rect x="42" y="240" width="483" height="26" rx="13" fill="#46b89c" /><text x="680" y="260" fill="#ffffff" fontSize="17" fontWeight="700">77.9%</text>
              <text x="42" y="306" fill="#ffffff" fontSize="16">Tested homepages with detected WCAG failures, 2025</text>
              <rect x="42" y="322" width="620" height="26" rx="13" fill="#38536d" /><rect x="42" y="322" width="588" height="26" rx="13" fill="#d9ee5b" /><text x="680" y="342" fill="#ffffff" fontSize="17" fontWeight="700">94.8%</text>
            </svg>
            <figcaption><b>Methods note:</b> The chart turns three published percentages into bars with a 0 to 100 scale. The WHO, World Bank, and WebAIM figures describe different groups and methods, so they are context markers rather than scores that should be added or averaged.<sup><a href="#source-1">[1]</a></sup><sup><a href="#source-2">[2]</a></sup><sup><a href="#source-3">[3]</a></sup></figcaption>
          </figure>

          <ArticleBanner index={1} />

          <section className="article-module">
            <h2>Review access before visual polish</h2>
            <blockquote>
              <p>"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."</p>
              <cite>Tim Berners-Lee, quoted by the W3C Web Accessibility Initiative<sup><a href="#source-4">[4]</a></sup></cite>
            </blockquote>
            <p>Begin with the page structure. Check that one clear H1 names the page, later headings follow a sensible order, and controls have labels that make sense when read away from the layout.</p>
            <p>Then use only a keyboard. You should be able to reach the menu, links, form fields, error messages, and submit control in a clear order, with a visible focus mark.</p>
            <p>Zoom the page to 200% and test narrow widths. Text should wrap without covering controls, and a visitor should not need to drag the whole page sideways to read a normal paragraph.</p>
          </section>

          <figure className="article-visual handoff-graphic" aria-labelledby="handoff-title">
            <svg viewBox="0 0 820 330" role="img" aria-labelledby="handoff-title handoff-desc">
              <title id="handoff-title">Four-stop website design handoff path</title>
              <desc id="handoff-desc">The path moves from owner brief to Philippines-based build, independent page review, and owner approval with files returned to the owner.</desc>
              <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0f8f73" /></marker></defs>
              <rect x="10" y="10" width="800" height="310" rx="26" fill="#fff8ee" stroke="#eadfcf" strokeWidth="2" />
              <path d="M186 150 H260 M382 150 H456 M578 150 H652" stroke="#0f8f73" strokeWidth="6" markerEnd="url(#arrow)" />
              <g><rect x="42" y="88" width="144" height="124" rx="18" fill="#17324d" /><text x="114" y="128" textAnchor="middle" fill="#d9ee5b" fontSize="15" fontWeight="700">1. OWNER BRIEF</text><text x="114" y="158" textAnchor="middle" fill="#fff" fontSize="14">Goal, copy, rules</text><text x="114" y="181" textAnchor="middle" fill="#fff" fontSize="14">and approval line</text></g>
              <g><rect x="260" y="88" width="144" height="124" rx="18" fill="#eaf7f3" stroke="#0f8f73" strokeWidth="2" /><text x="332" y="128" textAnchor="middle" fill="#17324d" fontSize="15" fontWeight="700">2. PAGE BUILD</text><text x="332" y="158" textAnchor="middle" fill="#17324d" fontSize="14">Design, content</text><text x="332" y="181" textAnchor="middle" fill="#17324d" fontSize="14">and page states</text></g>
              <g><rect x="478" y="88" width="144" height="124" rx="18" fill="#fff" stroke="#f27b3d" strokeWidth="2" /><text x="550" y="128" textAnchor="middle" fill="#17324d" fontSize="15" fontWeight="700">3. PAGE REVIEW</text><text x="550" y="158" textAnchor="middle" fill="#17324d" fontSize="14">Access, mobile</text><text x="550" y="181" textAnchor="middle" fill="#17324d" fontSize="14">links and forms</text></g>
              <g><rect x="670" y="88" width="108" height="124" rx="18" fill="#f27b3d" /><text x="724" y="128" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">4. OWNER</text><text x="724" y="150" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">APPROVAL</text><text x="724" y="181" textAnchor="middle" fill="#fff" fontSize="13">Files returned</text></g>
              <path d="M724 230 C724 285 114 285 114 230" fill="none" stroke="#617083" strokeWidth="3" strokeDasharray="8 7" markerEnd="url(#arrow)" />
              <text x="419" y="304" textAnchor="middle" fill="#617083" fontSize="14">Notes and owned files feed the next approved brief</text>
            </svg>
            <figcaption>This handoff keeps approval with the buyer. The build team can make the page, but your named owner accepts claims, access, and launch readiness.</figcaption>
          </figure>

          <section className="article-module">
            <h2>Use a four-stop review path</h2>
            <p>The owner brief is the first stop. It freezes the page goal, approved copy, required states, and decisions that the outside team cannot make.</p>
            <p>The Philippines-based team then builds the page and records open questions in one place. If the brief is missing something, the team should ask rather than invent a claim or hide the gap with filler copy.</p>
            <p>A reviewer checks the working page, not only a flat design. The final owner approves the page and confirms that editable files, content, code, and account access have returned to company control.</p>
          </section>

          <section className="article-module">
            <h2>Protect accounts and source files</h2>
            <p>Give each person a named account with only the access needed for the task. Avoid shared owner logins, and set a date to remove access after the job or pilot ends.</p>
            <p>Store design files in a company-owned project. The same rule applies to images, page copy, fonts, analytics notes, form destinations, domain records, and code repositories.</p>
            <p>The handoff list should show what was created, where it lives, who can open it, and what still needs a decision. A folder full of unnamed exports is not a handoff.</p>
          </section>

          <ArticleBanner index={2} />

          <section className="article-module">
            <h2>Run the first week as a small test</h2>
            <ol className="week-plan">
              <li><b>Day 1: repeat the brief.</b> Ask the team to explain the visitor, page goal, content order, open questions, and approval owner in its own words.</li>
              <li><b>Day 2: approve the frame.</b> Review headings, content order, page states, and mobile plan before time goes into detailed styling.</li>
              <li><b>Days 3 and 4: test the working page.</b> Use keyboard navigation, 200% zoom, narrow screens, long text, missing images, form errors, and slow loading states.</li>
              <li><b>Day 5: close the handoff.</b> Review fixes, approve the page, collect editable files, check account access, and write one lesson for the next brief.</li>
            </ol>
            <p>Do not judge the pilot by how many screens appeared in five days. Judge it by whether the team followed the brief, raised useful questions, fixed clear defects, and returned work that your company can own.</p>
          </section>

          <section className="article-module">
            <h2>Keep the finish line plain</h2>
            <p>A page is done when the named owner has approved the message and the working page has passed the agreed checks. The source files, access list, and launch notes should also be in company-owned systems.</p>
            <p>Use the W3C WCAG 2.2 quick reference to choose checks that fit the page.<sup><a href="#source-5">[5]</a></sup> Automated tools can help, but a person still needs to use the page with a keyboard, zoom, and realistic content.</p>
            <p>If the first page is easy to review and easy to take back, expand the lane one page type at a time. That is slower than handing over the whole site on day one, but it gives both teams a fair way to learn.</p>
          </section>

          <section className="article-module sources-box">
            <h2>Sources</h2>
            <ol>
              {article.sources.map((source) => (
                <li id={`source-${source.id}`} key={source.url}>
                  <a href={source.url}>{source.name}</a>
                  <span>{source.note}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="article-module">
            <h2>FAQ</h2>
            {article.faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </section>
        </article>
      </main>
      <Footer hidePricing />
    </>
  );
}
