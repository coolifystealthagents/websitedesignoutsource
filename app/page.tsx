import * as data from './data';
import { Header, Footer, JsonLd } from './components';

const dataAny = data as any;
const site = dataAny.site || {};
const services = (dataAny.services || dataAny.roles || dataAny.industries || []).slice(0, 6);
const posts = (dataAny.blogPosts || []).slice(0, 4);
const stats = (dataAny.stats || []).slice(0, 3);
const process = (dataAny.staffingProcess || dataAny.checklistSteps || [
  { title: 'Scope the role', desc: 'Turn loose tasks into a clear weekly ownership map.' },
  { title: 'Match the support', desc: 'Pick skills, schedule, tools, and communication rules before interviews.' },
  { title: 'Launch with QA', desc: 'Start with a small pilot, daily review, and written escalation rules.' },
  { title: 'Scale what works', desc: 'Add hours or coverage only after quality is stable.' },
]).slice(0, 4);
const questions = (dataAny.leadQuestions || dataAny.faqs || dataAny.faq || []).slice(0, 5);
const offer = dataAny.staffingOffer || {};

const asList = (value: any) => Array.isArray(value) ? value.filter(Boolean).join(', ') : value;
const title = (item: any, fallback = 'Managed workstream') => typeof item === 'string' ? item : (item.title || item.name || item.label || item.question || item.option || item.country || fallback);
const text = (item: any, fallback = 'Clear scope, accountable handoff, manager review, and a safer first week.') => {
  if (typeof item === 'string') return item;
  const direct = item.desc || item.body || item.copy || item.excerpt || item.note || item.answer;
  if (direct) return asList(direct);
  const parts = [
    item.bestFor ? `Best for: ${asList(item.bestFor)}` : '',
    item.tasks ? `Owns: ${asList(item.tasks)}` : '',
    item.watchouts ? `Guardrails: ${asList(item.watchouts)}` : '',
  ].filter(Boolean);
  return parts.length ? parts.join(' • ') : fallback;
};
const slug = (item: any) => item?.slug || String(title(item)).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const roleNames = services.slice(0,3).map((s:any)=>title(s).replace(/ assistant provider guide/i,'')).join(' • ');

export default function Home(){
  const schema = { '@context':'https://schema.org', '@type':'WebSite', name: site.brand, url: `https://${site.domain}` };
  return <><Header/><main className="premium-page">
    <JsonLd data={schema}/>

    <section className="premium-hero">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="proof-pill"><span>Managed staffing guide</span><b>{site.domain}</b></p>
          <h1>{site.brand}: managed support that owns the handoff, not just the task.</h1>
          <p className="hero-lead">Plan the role, compare the provider, and launch remote support with screening, onboarding, QA, reporting, and replacement rules already thought through.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/contact">Request staffing plan</a>
            <a className="btn btn-secondary" href="#roles">See workstreams</a>
          </div>
          <p className="microcopy">No public rate card. Start with the work you need removed from your plate.</p>
        </div>
        <div className="talent-panel" aria-label="managed staffing preview">
          <div className="panel-top"><span>Vetted handoff board</span><b>Top-fit plan</b></div>
          <div className="candidate-card primary-card">
            <img src={site.heroImage || site.serviceImage || 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80'} alt={site.alt || `${site.brand} planning visual`} />
            <div><strong>{site.brand}</strong><p>{site.audience || 'Teams comparing managed staffing options'}</p></div>
          </div>
          <div className="mini-grid">
            <article><span>First scope</span><b>5-10 tasks</b></article>
            <article><span>Ramp plan</span><b>7-21 days</b></article>
            <article><span>Review rhythm</span><b>Weekly QA</b></article>
            <article><span>Risk control</span><b>Named access</b></article>
          </div>
        </div>
      </div>
      <div className="container trust-strip">
        <span>Built for owners who want less screening, clearer handoffs, and managed follow-through</span>
        {stats.map((s:any, i:number)=><b key={i}>{s.value || s.label}</b>)}
      </div>
    </section>

    <section className="container section split-proof">
      <div>
        <p className="eyebrow">Why this model</p>
        <h2>Stop buying vague help. Buy a managed operating role.</h2>
      </div>
      <div className="proof-cards">
        {stats.map((s:any, i:number)=><article key={i}><strong>{s.value || 'Scope first'}</strong><span>{s.label || 'Planning signal'}</span><p>{s.note || 'Confirm this before the first match.'}</p></article>)}
      </div>
    </section>

    <section className="container section" id="roles">
      <div className="section-head">
        <p className="eyebrow">Workstreams</p>
        <h2>Choose the work that should be owned first.</h2>
        <p>Each role starts with boundaries, examples, tool access, and a first-week scorecard.</p>
      </div>
      <div className="role-grid">
        {services.map((item:any, idx:number)=><a className="role-card" href={`/services/${slug(item)}`} key={idx}>
          <span>{String(idx+1).padStart(2,'0')}</span><h3>{title(item)}</h3><p>{text(item)}</p><b>View role plan →</b>
        </a>)}
      </div>
    </section>

    <section className="managed-band">
      <div className="container managed-grid">
        <div>
          <p className="eyebrow light">Managed ownership</p>
          <h2>Designed around supervision, continuity, and clean handoffs.</h2>
          <p>{offer.promise || site.angle || 'The right staffing setup should explain who owns quality, what gets reported, and how replacement or escalation works.'}</p>
        </div>
        <div className="ownership-list">
          {(offer.included || ['role planning call','candidate matching','SOP and scorecard setup','ongoing quality support']).slice(0,4).map((x:string,i:number)=><article key={i}><span>{i+1}</span><p>{x}</p></article>)}
        </div>
      </div>
    </section>

    <section className="container section process-section">
      <div className="section-head compact"><p className="eyebrow">How it works</p><h2>A simple launch path buyers can trust.</h2></div>
      <div className="process-line">{process.map((item:any, idx:number)=><article key={idx}><span>{String(idx+1).padStart(2,'0')}</span><h3>{title(item, `Step ${idx+1}`)}</h3><p>{text(item)}</p></article>)}</div>
    </section>

    <section className="container section fit-section">
      <article className="fit-card good"><h2>Good fit if…</h2><ul>{(offer.fit || ['you need recurring support','you want managed quality','you need clear reporting']).slice(0,4).map((x:string,i:number)=><li key={i}>{x}</li>)}</ul></article>
      <article className="fit-card caution"><h2>Not ideal if…</h2><ul><li>You only need a one-time task.</li><li>You want to manage freelancers directly every day.</li><li>You are shopping only for the lowest hourly rate.</li><li>You do not have repeatable work to hand off yet.</li></ul></article>
    </section>

    <section className="container section resources">
      <div className="section-head"><p className="eyebrow">Buyer guides</p><h2>Read before you hire.</h2></div>
      <div className="resource-grid">{posts.map((post:any, idx:number)=><a href={`/blog/${post.slug || '#'}`} key={idx}><span>{post.minutes || 7} min read</span><strong>{title(post)}</strong><p>{text(post)}</p></a>)}</div>
    </section>

    <section className="container final-cta-premium">
      <div><p className="eyebrow light">Next step</p><h2>Ready to turn {roleNames || 'remote support'} into a managed plan?</h2><p>Send the role details. Get a clear scope, first-week launch path, and questions to ask before you commit.</p></div>
      <a className="btn btn-primary light-btn" href="/contact">Request staffing plan</a>
    </section>
  </main><Footer/></>;
}
