import {RefreshHeader,RefreshFooter} from './refresh-experience';
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

export function Header(_props: any = {}) { return <RefreshHeader/>; }

export function Footer(_props: any = {}) { return <RefreshFooter/>; }

export function CTA() {
  return <section className="closing-cta" aria-labelledby="closing-cta-title"><div><p className="section-label">Start with a real brief</p><h2 id="closing-cta-title">Move one website project from backlog to a reviewed handoff.</h2></div><div><p>Share the pages, platform, current assets, deadline, and approval owner. We will help determine the right production lane and the decisions your team should keep.</p><a className="button button-primary" href="/contact-us">Plan the handoff</a></div></section>;
}
