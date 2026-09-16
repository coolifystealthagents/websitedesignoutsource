import { Header, Footer } from '../components';
import { TestimonialsRail } from '../booking-components';

export const metadata = {
  title: 'Contact Our Outsourced Website Design Team',
  description: 'Discuss outsourced website design, responsive QA, and production support with a Philippines-based web design team.',
  alternates: { canonical: 'https://websitedesignoutsource.com/contact-us' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Contact Our Outsourced Website Design Team',
    description: 'Plan a clear website design handoff with a Philippines-based production team.',
    url: 'https://websitedesignoutsource.com/contact-us',
    type: 'website',
  },
};

export default function Contact() {
  return <>
    <Header />
    <main className="fleet-main fleet-websitedesignoutsource contact-page">
      <section className="fleet-hero contact-hero" id="top">
        <div className="container contact-intro">
          <div>
            <p className="eyebrow">Staffing intake</p>
            <h1>Plan your outsourced website design and production handoff</h1>
            <p className="lead">Share the pages, platform, review process, and deadline. We’ll use the conversation to understand whether a Philippines-based web design team fits the work.</p>
            <ul className="benefit-list">
              <li>Design, build, and responsive QA in one work lane</li>
              <li>Client-owned approvals and source files</li>
              <li>A scoped conversation before any commitment</li>
            </ul>
          </div>
          <div className="intake-panel">
            <h2>Request a free website design consultation</h2>
            <p>Complete the labeled fields below. Required fields are marked. We use these details only to respond to your request.</p>
            <form action="/api/contact" method="post" className="intake-form" id="contactPageForm">
              <div className="form-row">
                <div className="form-field"><label htmlFor="contact-first-name">First name</label><input id="contact-first-name" name="firstName" autoComplete="given-name" required /></div>
                <div className="form-field"><label htmlFor="contact-last-name">Last name</label><input id="contact-last-name" name="lastName" autoComplete="family-name" required /></div>
              </div>
              <label htmlFor="contact-email">Business email</label>
              <input id="contact-email" type="email" name="email" autoComplete="email" required />
              <label htmlFor="contact-phone">Phone</label>
              <input id="contact-phone" type="tel" name="phone" autoComplete="tel" required />
              <label htmlFor="contact-company">Company</label>
              <input id="contact-company" name="company" autoComplete="organization" required />
              <label htmlFor="contact-website">Website</label>
              <input id="contact-website" type="url" name="website" autoComplete="url" placeholder="https://" />
              <label htmlFor="contact-company-size">Company size</label>
              <select id="contact-company-size" name="companySize" required defaultValue="">
                <option value="" disabled>Select company size</option><option>1–10</option><option>11–50</option><option>51–200</option><option>201+</option>
              </select>
              <label htmlFor="contact-positions">Website service or role needed</label>
              <input id="contact-positions" name="positions" placeholder="Example: landing page design, development, or responsive QA" required />
              <label htmlFor="contact-method">Preferred contact method</label>
              <select id="contact-method" name="tier" required defaultValue="">
                <option value="" disabled>Select a contact method</option><option>Email</option><option>Phone</option><option>Video call</option>
              </select>
              <label htmlFor="contact-source">How did you hear about us?</label>
              <select id="contact-source" name="source" required defaultValue="">
                <option value="" disabled>Select a source</option><option>Search engine</option><option>Referral</option><option>Social media</option><option>Other</option>
              </select>
              <label htmlFor="contact-needs">Project details</label>
              <textarea id="contact-needs" name="needs" rows={5} required placeholder="Describe pages, platform, deadline, current assets, and desired outcome." />
              <label className="privacy-check" htmlFor="contact-privacy">
                <input id="contact-privacy" type="checkbox" name="privacy" required />
                <span>I agree to the <a href="/privacy">Privacy Policy</a> and consent to being contacted about this request.</span>
              </label>
              <div className="sa-honeypot" aria-hidden="true">
                <label htmlFor="contact-website-confirm">Leave this field empty</label>
                <input id="contact-website-confirm" name="website_confirm" tabIndex={-1} autoComplete="off" />
              </div>
              <button className="btn primary" type="submit">Book My Free Consultation</button>
            </form>
          </div>
        </div>
      </section>
      <section className="section inclusions">
        <div className="container"><p className="eyebrow">What to include</p><h2>Bring the details that shape a website handoff</h2><div className="fleet-card-grid three"><article><h3>Project goal</h3><p>Tell us what the website needs to help a visitor understand, trust, or do.</p></article><article><h3>Pages and platform</h3><p>Share the page list, CMS or framework, and systems the build must connect to.</p></article><article><h3>Handoff and QA</h3><p>Define responsive, accessibility, source-file, and launch expectations.</p></article></div></div>
      </section>
      <section className="final-cta"><h2>Ready to make the next website handoff clearer?</h2><p>Tell us what is waiting, what is approved, and where your team needs production support.</p><a className="btn primary" href="#top">Review the intake</a></section>
      <section className="section sa-contact-testimonials" aria-label="Client testimonials"><div className="container"><TestimonialsRail contact /></div></section>
      <section className="section relationship"><div className="container"><p className="eyebrow">The team behind the consultation</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We&apos;re featured on Forbes as the top rated virtual assistant company.</p><p>Website Design Outsource routes website design and production conversations to the broader Stealth Agents team while keeping the first call focused on your real brief and constraints.</p><a className="btn primary" href="https://stealthagents.com/" target="_blank" rel="noreferrer">Powered by Stealth Agents</a></div></section>
      <section className="section"><div className="container contact-intro"><div><p className="eyebrow">Website production capabilities</p><h2>Discuss the work your team cannot get to</h2><ul><li>Landing pages and marketing sites</li><li>Responsive website production</li><li>Figma systems and reusable components</li><li>CMS builds and content migration</li><li>Accessibility and cross-device review</li><li>Source-file handoff notes</li></ul><a className="btn primary" href="https://go.oncehub.com/StealthAgentsTeam" target="_blank" rel="noreferrer">Choose a consultation time</a></div><figure><img src="/illustrations/getillustrations/inkdex-saas/filipino-web-design-production.webp" width="1200" height="800" alt="Filipino website design team reviewing responsive page layouts and production notes" /><figcaption>Design decisions, responsive states, and handoff notes stay visible throughout production.</figcaption></figure></div></section>
    </main>
    <Footer />
  </>;
}
