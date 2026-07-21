import * as data from './data';
const dataAny = data as any;
const site = dataAny.site || {};
const footerItems = (dataAny.services || dataAny.roles || dataAny.industries || dataAny.blogPosts || []).slice(0, 6);
const getTitle = (item: any) => typeof item === 'string' ? item : (item.title || item.name || item.label || item.question || String(item));
const getSlug = (item: any) => typeof item === 'string' ? item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : (item.slug || getTitle(item).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
const domain = site.domain || 'this site';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" /><span className="logo-name">{site.brand || domain}</span></span>;
}

export function Header() {
  return <header className="nav studio-nav"><div className="nav-inner"><a className="logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a><nav className="links" aria-label="Main navigation"><a href="/#work">Services</a><a href="/#process">Process</a><a href="/blog">Guides</a><a href="/contact">Contact</a></nav><a className="btn nav-cta studio-nav-cta" href="/contact">Plan a handoff</a></div></header>;
}

export function Footer() {
  return <footer className="footer legit-footer studio-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a><p>{site.brand || domain} is a practical guide and project-intake site for agencies considering outsourced website design, production, and QA.</p><p className="footer-note">We recruit and hire talent only in the Philippines. This is an independent informational website. Submitted requests may be routed to an appropriate design or production partner for follow-up.</p></div><div><h3>Explore</h3><div className="footer-links">{footerItems.map((item: any, idx: number) => <a href={`/services/${getSlug(item)}`} key={idx}>{getTitle(item)}</a>)}</div></div><div><h3>Company</h3><div className="footer-links"><a href="/contact">Contact</a><a href="/blog">Guides</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms & Conditions</a><a href="/cancellation-policy">Cancellation Policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand || domain}. All rights reserved.</span><span>{domain}</span></div></footer>;
}

export function CTA() {
  return <section className="final-cta"><p className="eyebrow">Have a project in the queue?</p><h2>Turn it into a brief the production team can use.</h2><p>Share the pages, platform, brand rules, and review owner. We will help map a practical handoff.</p><a className="btn primary" href="/contact">Plan a website handoff</a></section>;
}
