import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

const baseUrl = 'https://websitedesignoutsource.com';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return { title: post?.title || 'Guide', description: post?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const detail = blogDetails[post.slug as keyof typeof blogDetails];
  const canonical = `${baseUrl}/blog/${post.slug}`;

  const schemas = detail ? [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: post.title,
      description: post.excerpt,
      url: canonical,
      mainEntityOfPage: canonical,
      author: { '@type': 'Organization', name: site.brand },
      publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
      citation: detail.sources.map((source) => source.url),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: detail.faqs.map((faq) => ({
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
        { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
      ],
    },
  ] : [];

  return (
    <>
      <Header />
      <main className="section">
        <article className="container article-shell">
          {schemas.map((schema) => <JsonLd key={schema['@id'] || schema['@type']} data={schema} />)}
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>

          {detail ? (
            <>
              <section className="article-module answer-box">
                <h2>The short answer</h2>
                <p>{detail.shortAnswer}</p>
              </section>

              <section className="article-module">
                <h2>Weak answer vs useful answer</h2>
                <div className="comparison-table" role="table" aria-label="Provider answer comparison">
                  <div className="comparison-row comparison-head" role="row">
                    <span role="columnheader">Question</span>
                    <span role="columnheader">Weak answer</span>
                    <span role="columnheader">Useful answer</span>
                  </div>
                  {detail.answerRows.map((row) => (
                    <div className="comparison-row" role="row" key={row.question}>
                      <span role="cell"><b>{row.question}</b></span>
                      <span role="cell">{row.weak}</span>
                      <span role="cell">{row.useful}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="article-module script-card">
                <h2>Copy this before the provider call</h2>
                <p>{detail.scriptIntro}</p>
                <ol>
                  {detail.callScript.map((line) => <li key={line}>{line}</li>)}
                </ol>
              </section>

              <section className="article-module">
                <h2>What to check before you sign</h2>
                <div className="cards mini-grid">
                  {detail.checks.map((check) => (
                    <div className="card" key={check.title}>
                      <h3>{check.title}</h3>
                      <p>{check.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="article-module sources-box">
                <h2>Sources used</h2>
                <ul>
                  {detail.sources.map((source) => (
                    <li key={source.url}><a href={source.url}>{source.name}</a><span>{source.note}</span></li>
                  ))}
                </ul>
              </section>

              <section className="article-module">
                <h2>FAQ</h2>
                {detail.faqs.map((faq) => (
                  <div className="faq-item" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </section>
            </>
          ) : (
            <div className="card">
              <h2>The short answer</h2>
              <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
              <h2>What to prepare</h2>
              <ul>
                <li>Task examples and sample replies</li>
                <li>Tool access and permission rules</li>
                <li>Daily output target</li>
                <li>Escalation rules for anything sensitive</li>
              </ul>
              <h2>Questions to ask</h2>
              <ul>
                <li>Who screens the worker?</li>
                <li>Who checks quality?</li>
                <li>What happens if fit is poor?</li>
                <li>How are passwords and customer data handled?</li>
              </ul>
            </div>
          )}
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
