import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { TestimonialsRail } from '../booking-components';

export const metadata: Metadata = {
  title: 'Consultation Booked',
  description: 'Your website production consultation is booked. Review the next steps before the call.',
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return <>
    <Header />
    <main className="booking-confirmation">
      <section className="confirmation-hero">
        <div>
          <p className="section-label">Consultation confirmed</p>
          <h1>Your website production conversation is booked.</h1>
          <p className="contact-lead">Thank you. The StealthAgents team will use the details you shared to prepare for a focused conversation about your pages, platform, approvals, and handoff.</p>
          <a className="button button-primary" href="/services">Review website services</a>
        </div>
        <div className="confirmation-visual" role="img" aria-label="Confirmed website production consultation">
          <span aria-hidden="true">✓</span>
          <strong>Brief received</strong>
          <small>Meeting scheduled</small>
        </div>
      </section>
      <section className="contact-prep" aria-labelledby="prepare-title">
        <div><p className="section-label">Before the conversation</p><h2 id="prepare-title">Bring the decisions that will move the work forward.</h2></div>
        <div className="prep-list">
          <article><h3>Current pages and platform</h3><p>Keep the relevant URLs, source files, CMS, and access constraints nearby.</p></article>
          <article><h3>Review owner and deadline</h3><p>Know who approves design and build work, plus the launch date or delivery sequence.</p></article>
          <article><h3>Examples and acceptance checks</h3><p>Share references you trust and the specific responsive, accessibility, and quality checks the work must pass.</p></article>
        </div>
      </section>
      <TestimonialsRail contact />
    </main>
    <Footer />
  </>;
}
