import { Header, Footer, JsonLd } from '../../components';
import { philippinesRedesignMigration as article } from '../../article-content';
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

export function RedesignMigrationArticle() {
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
      <main className="section rich-article" data-article-revision={article.revision} data-article-kind="philippines-redesign-migration">
        <article className="container article-shell" data-publication-wrapper="article-body">
          {schemas.map((schema) => <JsonLd key={schema['@id'] || schema['@type']} data={schema} />)}
          <p className="eyebrow">Philippines website redesign guide</p>
          <h1>{article.title}</h1>
          <p className="lead">{article.excerpt}</p>
          <p className="article-date">Published July 28, 2026 · Evidence checked before publication</p>

          <section className="article-module answer-box">
            <h2>The short answer</h2>
            <p>A redesign is a move, not a clean sheet. Give the Philippines-based team a page list, a URL map, one review owner, limited account access, and a written launch test before anyone changes the live site. Keep useful addresses when you can.</p>
            <p>When a page must move, choose its closest useful destination and test the redirect. Check the public result after launch.</p>
          </section>

          <ArticleBanner index={0} />

          <section className="article-module">
            <h2>Start with the site people use today</h2>
            <p>Before the new layout gets attention, record what already works. Save the current sitemap, crawl the public site, list forms and downloads, note the pages that receive search visits, and capture the title and main heading for each useful page. The audience is large enough that a loose handoff can hurt real people.</p>
            <p>The World Bank reports that 77.86699677% of people in the Philippines used the internet in 2023, which this guide rounds to 77.9%.<sup><a href="#source-1">[1]</a></sup> That national figure gives context, but it does not describe every buyer or device. Use your own analytics and support records to learn which pages, browsers, and visitor tasks matter on this website.</p>
          </section>

          <section className="article-module">
            <h2>Build a page map before a screen map</h2>
            <p>Put every current URL in a sheet and give it one decision: keep, move, combine, or remove. Add the page owner, new destination, main visitor task, form or download dependency, and the person who approves the decision. A pretty screen map cannot replace this list.</p>
            <p>Without it, an outside team may delete a quiet page that still has strong links. It may also move a form without its thank-you step or point several old pages at the homepage.</p>
            <div className="article-table-wrap" tabIndex={0} aria-label="Scrollable table: website redesign migration decisions">
              <table>
                <caption>Decisions to record for every important page</caption>
                <thead><tr><th>Decision</th><th>Use it when</th><th>Proof before launch</th><th>Owner check</th></tr></thead>
                <tbody>
                  <tr><td>Keep the URL</td><td>The page purpose and visitor need remain the same.</td><td>The new page answers the same need and keeps a matching canonical address.</td><td>Approve changed claims, forms, and calls to action.</td></tr>
                  <tr><td>Move the URL</td><td>The address must change but the useful topic remains.</td><td>The old address returns one permanent redirect to the closest new page.</td><td>Approve the destination and redirect list.</td></tr>
                  <tr><td>Combine pages</td><td>Two pages repeat the same job and one stronger page can serve it.</td><td>Each old address maps to the combined page, with no redirect chain.</td><td>Approve what copy and links survive.</td></tr>
                  <tr><td>Remove a page</td><td>The content is wrong, expired, or has no suitable replacement.</td><td>Links, menus, sitemaps, and related files no longer depend on it.</td><td>Approve the removal and support reply.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="scroll-note">On a small screen, swipe the table sideways to read every column.</p>
          </section>

          <section className="article-module">
            <h2>Give the outside team clear decision lines</h2>
            <p>The build team can create components, move content, connect redirects, and record defects. Your company should still own claims, legal text, account permissions, form destinations, analytics choices, domain changes, and the final launch call. Use named accounts rather than a shared owner login.</p>
            <p>NIST defines least privilege as limiting access to the minimum needed for assigned tasks, which is a sensible rule for a redesign project too.<sup><a href="#source-5">[5]</a></sup> Write down who can open the design file, code repository, content system, hosting panel, analytics property, search account, and domain records. Add a date to review or remove each outside account after the handoff.</p>
          </section>

          <figure className="article-visual article-chart" tabIndex={0} aria-label="Scrollable chart: three website migration context measures" aria-labelledby="migration-chart-title">
            <svg viewBox="0 0 780 420" role="img" aria-labelledby="migration-chart-title migration-chart-desc">
              <title id="migration-chart-title">Three context measures for redesign review</title>
              <desc id="migration-chart-desc">Bars show 77.9 percent internet use in the Philippines in 2023, 95.9 percent of tested homepages with detected WCAG failures in February 2026, and 56.1 detected errors per tested homepage in February 2026.</desc>
              <rect x="0" y="0" width="780" height="420" rx="24" fill="#17324d" />
              <text x="42" y="54" fill="#ffffff" fontSize="24" fontWeight="700">Three reasons to test the working site</text>
              <text x="42" y="88" fill="#d8e7eb" fontSize="15">The measures use different units. Each bar has its own label.</text>
              <text x="42" y="142" fill="#ffffff" fontSize="16">Internet use in the Philippines, 2023</text>
              <rect x="42" y="158" width="620" height="28" rx="14" fill="#38536d" /><rect x="42" y="158" width="483" height="28" rx="14" fill="#46b89c" /><text x="680" y="179" fill="#ffffff" fontSize="17" fontWeight="700">77.9%</text>
              <text x="42" y="232" fill="#ffffff" fontSize="16">Tested homepages with detected WCAG failures, 2026</text>
              <rect x="42" y="248" width="620" height="28" rx="14" fill="#38536d" /><rect x="42" y="248" width="595" height="28" rx="14" fill="#d9ee5b" /><text x="680" y="269" fill="#ffffff" fontSize="17" fontWeight="700">95.9%</text>
              <text x="42" y="322" fill="#ffffff" fontSize="16">Average detected errors per tested homepage, 2026</text>
              <rect x="42" y="338" width="620" height="28" rx="14" fill="#38536d" /><rect x="42" y="338" width="348" height="28" rx="14" fill="#f27b3d" /><text x="680" y="359" fill="#ffffff" fontSize="17" fontWeight="700">56.1</text>
            </svg>
            <figcaption><b>Methods note:</b> The first bar uses a World Bank population percentage for 2023. The second and third use WebAIM's automated scan of one million homepages in February 2026; WebAIM reported 95.9% with detected WCAG failures, 56,114,377 distinct errors, and 56.1 errors per page. The last bar uses a 0 to 100 drawing scale only for display, so the three bars must not be added or treated as one score.<sup><a href="#source-1">[1]</a></sup><sup><a href="#source-2">[2]</a></sup></figcaption>
          </figure>

          <ArticleBanner index={1} />

          <section className="article-module">
            <h2>Test access while the new pages are still easy to change</h2>
            <blockquote>
              <p>"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."</p>
              <cite>Tim Berners-Lee, W3C Director and inventor of the World Wide Web<sup><a href="#source-4">[4]</a></sup></cite>
            </blockquote>
            <p>WebAIM's February 2026 scan found detected WCAG failures on 95.9% of one million homepages. It found 56,114,377 distinct errors, an average of 56.1 per page, and said the average rose 10.1% from its 2025 analysis.<sup><a href="#source-2">[2]</a></sup> Those are automated findings, so they do not prove that any one redesign has the same problems.</p>
            <p>They do show why a working page needs keyboard, zoom, contrast, label, heading, alt text, and error-message review before approval. Open the new site at narrow and wide sizes, then test with long headings and missing images. The whole page should not drag sideways, and controls should keep a visible focus mark when a visitor uses the keyboard.</p>
          </section>

          <figure className="article-visual handoff-graphic" tabIndex={0} aria-label="Scrollable graphic: redesign migration release path" aria-labelledby="release-path-title">
            <svg viewBox="0 0 840 350" role="img" aria-labelledby="release-path-title release-path-desc">
              <title id="release-path-title">Five-stop redesign migration release path</title>
              <desc id="release-path-desc">The release moves from owner inventory to Philippines-based build, private review, owner approval, and public proof, with a recovery path back to the saved version.</desc>
              <defs><marker id="migration-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0f8f73" /></marker></defs>
              <rect x="10" y="10" width="820" height="330" rx="26" fill="#fff8ee" stroke="#eadfcf" strokeWidth="2" />
              <path d="M166 146 H202 M322 146 H358 M478 146 H514 M634 146 H670" stroke="#0f8f73" strokeWidth="5" markerEnd="url(#migration-arrow)" />
              <g><rect x="32" y="82" width="134" height="128" rx="17" fill="#17324d" /><text x="99" y="119" textAnchor="middle" fill="#d9ee5b" fontSize="14" fontWeight="700">1. INVENTORY</text><text x="99" y="151" textAnchor="middle" fill="#fff" fontSize="13">Pages, forms,</text><text x="99" y="173" textAnchor="middle" fill="#fff" fontSize="13">files and owners</text></g>
              <g><rect x="202" y="82" width="134" height="128" rx="17" fill="#eaf7f3" stroke="#0f8f73" strokeWidth="2" /><text x="269" y="119" textAnchor="middle" fill="#17324d" fontSize="14" fontWeight="700">2. BUILD</text><text x="269" y="151" textAnchor="middle" fill="#17324d" fontSize="13">Pages, redirects</text><text x="269" y="173" textAnchor="middle" fill="#17324d" fontSize="13">and open notes</text></g>
              <g><rect x="372" y="82" width="134" height="128" rx="17" fill="#fff" stroke="#f27b3d" strokeWidth="2" /><text x="439" y="119" textAnchor="middle" fill="#17324d" fontSize="14" fontWeight="700">3. REVIEW</text><text x="439" y="151" textAnchor="middle" fill="#17324d" fontSize="13">Private release</text><text x="439" y="173" textAnchor="middle" fill="#17324d" fontSize="13">and real tasks</text></g>
              <g><rect x="542" y="82" width="134" height="128" rx="17" fill="#fef1e8" stroke="#f27b3d" strokeWidth="2" /><text x="609" y="119" textAnchor="middle" fill="#17324d" fontSize="14" fontWeight="700">4. APPROVE</text><text x="609" y="151" textAnchor="middle" fill="#17324d" fontSize="13">Owner accepts</text><text x="609" y="173" textAnchor="middle" fill="#17324d" fontSize="13">switch or pause</text></g>
              <g><rect x="706" y="82" width="102" height="128" rx="17" fill="#f27b3d" /><text x="757" y="119" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">5. PROVE</text><text x="757" y="151" textAnchor="middle" fill="#fff" fontSize="13">Public pages,</text><text x="757" y="173" textAnchor="middle" fill="#fff" fontSize="13">forms, search</text></g>
              <path d="M757 230 C757 292 99 292 99 230" fill="none" stroke="#617083" strokeWidth="3" strokeDasharray="8 7" markerEnd="url(#migration-arrow)" />
              <text x="428" y="322" textAnchor="middle" fill="#617083" fontSize="14">If public checks fail, restore the saved release and keep the defect notes</text>
            </svg>
            <figcaption>The outside team prepares and tests the move. Your named owner decides whether to switch, pause, or restore the saved release after seeing the evidence.</figcaption>
          </figure>

          <section className="article-module">
            <h2>Use a private release candidate</h2>
            <p>Build the full redesign somewhere that search engines and ordinary visitors will not mistake for the live site. Protect it with access controls, and avoid copying real customer records into a test system.</p>
            <p>Test the most important paths as tasks: find a service, submit each form, receive the expected message, open a download, use the menu by keyboard, and follow old addresses to their planned destinations. A screenshot cannot prove any of those actions.</p>
            <p>For a Next.js rebuild, the <a href="/services/nextjs-website-development">Next.js website development page</a> shows the type of build lane that should still end with owner review. For content-heavy work, the <a href="/services/website-content-migration">website content migration page</a> is the closer internal path.</p>
          </section>

          <section className="article-module">
            <h2>Check search details as a set</h2>
            <p>For each changed address, update internal links, canonical tags, breadcrumbs, structured data, and sitemap entries to the final public address. Do not leave a new page pointing back to an old canonical or a test hostname.</p>
            <p>Google's site-move guide recommends a URL map and permanent server-side redirects, then asks site owners to test redirects and submit the new sitemap.<sup><a href="#source-3">[3]</a></sup> It also says permanent redirects do not cause a loss in PageRank, which is useful context but not a promise that visits will stay flat during a move.</p>
            <p>After launch, use Search Console to watch indexing and the Core Web Vitals report rather than relying on a one-time lab score.<sup><a href="#source-6">[6]</a></sup> Keep old and new properties verified when the move changes the domain.</p>
          </section>

          <section className="article-module">
            <h2>Write the launch and recovery sheet</h2>
            <p>The launch sheet should name the date, owner, person making the switch, saved release, recovery trigger, redirect test file, form test details, and public pages to inspect. Keep it short enough that someone can use it while the change is happening.</p>
            <p>A recovery trigger must be specific. Examples include the main form failing, a large set of old URLs returning an error, the sitemap using a test hostname, or the public page serving the wrong release.</p>
            <p>Do not let the outside team quietly fix a failed launch for hours while the owner assumes everything is fine. Pause, record what failed, restore the known version when the trigger is met, and choose a new attempt only after the defect has a tested fix.</p>
          </section>

          <ArticleBanner index={2} />

          <section className="article-module">
            <h2>Prove the public site before closing the job</h2>
            <p>Check the real public address with a fresh browser session after the switch. Confirm the expected title and page marker, submit the forms with test details, inspect mobile layouts, and test a sample from every redirect group.</p>
            <p>Open the sitemap and robots file, then confirm that they use the chosen public host. Search the public HTML for test domains, draft labels, broken image addresses, and links that still point at retired pages.</p>
            <p>Finish by returning editable files and removing access that is no longer needed. If the team will continue with <a href="/services/website-maintenance">website maintenance</a>, give that work a new access list and review owner instead of leaving redesign permissions open forever.</p>
          </section>

          <section className="article-module sources-box">
            <h2>Numbered sources</h2>
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
