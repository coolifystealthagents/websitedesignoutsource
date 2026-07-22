import { Footer, Header, JsonLd } from './components';
import { blogPosts } from './data';
import { fleetServices } from './fleet-content';

const work = [
  {
    number: '01',
    title: 'Landing pages',
    body: 'Send the brief, brand rules, and conversion goal. Get a responsive page ready for your team to review.',
    tag: 'Design + build',
  },
  {
    number: '02',
    title: 'Website rebuilds',
    body: 'Turn an aging site into a cleaner system without losing the pages, redirects, or search details that still matter.',
    tag: 'Structure + UI',
  },
  {
    number: '03',
    title: 'Design systems',
    body: 'Create reusable sections, states, and type rules so the next page does not start from a blank canvas.',
    tag: 'Figma + components',
  },
  {
    number: '04',
    title: 'QA and handoff',
    body: 'Check mobile layouts, links, forms, metadata, and source files before anything comes back to the client.',
    tag: 'Review + release',
  },
];

const steps = [
  ['Brief the page', 'Share the goal, audience, examples, platform, and the one action the page needs to earn.'],
  ['Review the route', 'The pod flags missing copy, unclear states, access risks, and scope questions before design starts.'],
  ['Build in view', 'Work moves through named review points. Your team can see what changed and what still needs a decision.'],
  ['Take the files', 'Figma, exports, page assets, and handoff notes return to your workspace. Nothing stays trapped with us.'],
];

const articleText = (post: (typeof blogPosts)[number]) => post.excerpt || 'A practical guide for planning and reviewing outsourced website work.';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Website Design Outsource',
    url: 'https://websitedesignoutsource.com',
  };

  return (
    <>
      <Header />
      <main className="studio-home">
        <JsonLd data={schema} />

        <section className="studio-hero">
          <div className="studio-orbit studio-orbit-one" aria-hidden="true" />
          <div className="studio-orbit studio-orbit-two" aria-hidden="true" />
          <div className="studio-shell studio-hero-grid">
            <div className="studio-hero-copy">
              <p className="studio-kicker"><span /> Philippines-based website production</p>
              <h1>A Filipino web design pod that works <em>behind your brand.</em></h1>
              <p className="studio-intro">Hand off the pages your team cannot get to. Our Philippines-based specialists help shape the brief, design the interface, build the site, and return clean source files for client review.</p>
              <div className="studio-actions">
                <a className="studio-button studio-button-primary" href="/contact">Plan a website handoff <span>↗</span></a>
                <a className="studio-text-link" href="#work">See what the pod handles <span>↓</span></a>
              </div>
              <div className="studio-assurances" aria-label="Service assurances">
                <span>Private delivery</span>
                <span>Your files, in your workspace</span>
                <span>QA before handoff</span>
              </div>
            </div>

            <div className="studio-board" aria-label="Website design production workspace preview">
              <div className="studio-board-top">
                <span className="studio-board-brand"><i>W</i> Production desk</span>
                <span className="studio-board-status"><i /> In review</span>
              </div>
              <div className="studio-canvas">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=88" alt="Website team reviewing work together at a screen" />
                <div className="studio-canvas-shade" />
                <div className="studio-floating-copy">
                  <small>Homepage / concept 02</small>
                  <strong>Clearer pages.<br />Quieter handoffs.</strong>
                  <span>Desktop approved</span>
                </div>
                <div className="studio-comment-card">
                  <div className="studio-avatar">A</div>
                  <p><b>Review note</b><br />Keep the CTA visible after the mobile crop.</p>
                </div>
              </div>
              <div className="studio-board-footer">
                <div><span>Brief</span><b>Locked</b></div>
                <div><span>Responsive</span><b>Checked</b></div>
                <div><span>Files</span><b>Ready</b></div>
              </div>
            </div>
          </div>

          <div className="studio-shell studio-rail" aria-label="Website design capabilities">
            {fleetServices.slice(0, 4).map((item, index) => (
              <a href={`/services/${item.slug}`} key={item.slug}><i>{String(index + 1).padStart(2, '0')}</i>{item.title}</a>
            ))}
          </div>
        </section>

        <section className="studio-work studio-shell" id="work">
          <div className="studio-section-head">
            <div>
              <p className="studio-kicker studio-kicker-dark"><span /> Work to hand off</p>
              <h2>Give the overflow a proper desk.</h2>
            </div>
            <p>You should not need another maze of freelancers to get four pages out the door. Put the brief, design, build, and final checks with one Philippines-based pod.</p>
          </div>
          <div className="studio-work-grid">
            {work.map((item) => (
              <a href="/contact" className="studio-work-card" key={item.number}>
                <div className="studio-work-meta"><span>{item.number}</span><small>{item.tag}</small></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <b>Discuss this work <span>↗</span></b>
              </a>
            ))}
          </div>
        </section>

        <section className="studio-process" id="process">
          <div className="studio-shell studio-process-grid">
            <div className="studio-process-copy">
              <p className="studio-kicker"><span /> A visible process</p>
              <h2>The work stays quiet. The handoff does not.</h2>
              <p>Your client relationship stays yours. Behind it, your Filipino production team gives every page a brief, an owner, a review point, and a final file list.</p>
              <a className="studio-button studio-button-primary" href="/contact">Map the first project <span>↗</span></a>
            </div>
            <div className="studio-step-list">
              {steps.map(([title, body], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="studio-fit studio-shell">
          <div className="studio-fit-panel">
            <div className="studio-fit-title">
              <p className="studio-kicker studio-kicker-dark"><span /> Good fit</p>
              <h2>For teams with more website work than hands.</h2>
            </div>
            <div className="studio-fit-copy">
              <p>This works best when your agency already owns the strategy and client relationship but needs a dependable design and production lane.</p>
              <ul>
                <li><span>01</span> You have approved brand rules and a real review owner.</li>
                <li><span>02</span> You want the source files and build notes back in your tools.</li>
                <li><span>03</span> You care about responsive QA as much as the first desktop concept.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="studio-guides studio-shell">
          <div className="studio-section-head">
            <div>
              <p className="studio-kicker studio-kicker-dark"><span /> Field notes</p>
              <h2>Useful before the kickoff call.</h2>
            </div>
            <a className="studio-text-link studio-text-link-dark" href="/blog">Read all guides <span>↗</span></a>
          </div>
          <div className="studio-guide-grid">
            {blogPosts.slice(0, 3).map((post, index) => (
              <a href={`/blog/${post.slug}`} key={post.slug}>
                <span>{String(index + 1).padStart(2, '0')} / {post.minutes} min</span>
                <h3>{post.title}</h3>
                <p>{articleText(post)}</p>
                <b>Read the note ↗</b>
              </a>
            ))}
          </div>
        </section>

        <section className="studio-final studio-shell">
          <div>
            <p className="studio-kicker"><span /> Start with one project</p>
            <h2>What is stuck in your website queue?</h2>
          </div>
          <div>
            <p>Send the page list, platform, deadline, and what your team already has. We will help turn it into a handoff that a design pod can actually use.</p>
            <a className="studio-button studio-button-primary" href="/contact">Plan the handoff <span>↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
