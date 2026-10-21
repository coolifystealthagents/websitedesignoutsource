import * as data from './data';
import { SiteNavigation } from './site-navigation';
const site = (data as any).site || {};
const domain = site.domain || 'WebsiteDesignOutsource.com';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark({ footer = false }: { footer?: boolean }) {
  return <span className="brand-lockup"><img className="brand-mark" src="/logo.svg" width="48" height="48" alt="" /><span><strong>{site.brand || 'Website Design Outsource'}</strong><small>{footer ? 'Website production partner' : 'Design, build and QA'}</small></span></span>;
}

export function PoweredBy() {
  return <a className="powered-by" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="Powered by StealthAgents, opens in a new tab"><span>Powered by</span><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt="StealthAgents" /></a>;
}

export function Header({ hidePricing: _hidePricing = false }: { hidePricing?: boolean } = {}) {
  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="site-header">
      <div className="header-inner">
        <a className="site-logo" href="/" aria-label="Website Design Outsource home"><LogoMark /></a>
        <SiteNavigation />
        <PoweredBy />
      </div>
    </header>
    <span id="main-content" className="main-content-anchor" tabIndex={-1} />
  </>;
}

export function Footer({ hidePricing = false }: { hidePricing?: boolean }) {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand"><a href="/" aria-label="Website Design Outsource home"><LogoMark footer /></a><p>Structured website design, production, responsive review, and handoff support from a Philippines-based team.</p><PoweredBy /></div>
      <div><h2>Explore</h2><nav aria-label="Footer services and resources"><a href="/services">Services</a>{!hidePricing && <a href="/pricing">Pricing</a>}<a href="/blog">Blog</a><a href="/research">Research</a></nav></div>
      <div><h2>Company</h2><nav aria-label="Footer company links"><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms and Conditions</a><a href="/cancellation-policy">Cancellation Policy</a></nav></div>
    </div>
    <div className="footer-bottom"><span>© {year} {site.brand || 'Website Design Outsource'}. All rights reserved.</span><span>{domain}</span></div>
  </footer>;
}

export function CTA() {
  return <section className="closing-cta" aria-labelledby="closing-cta-title"><div><p className="section-label">Start with a real brief</p><h2 id="closing-cta-title">Move one website project from backlog to a reviewed handoff.</h2></div><div><p>Share the pages, platform, current assets, deadline, and approval owner. We will help determine the right production lane and the decisions your team should keep.</p><a className="button button-primary" href="/contact-us">Plan the handoff</a></div></section>;
}
