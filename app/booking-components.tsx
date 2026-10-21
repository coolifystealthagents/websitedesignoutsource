'use client';

import { useState } from 'react';
import { stealthAgentsReviews } from './reviews';

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  const [paused, setPaused] = useState(false);
  const repeated = [...stealthAgentsReviews, ...stealthAgentsReviews];
  const headingId = contact ? 'contact-stealth-agents-reviews' : 'booking-stealth-agents-reviews';
  return (
    <section className={`review-marquee${contact ? ' review-marquee-contact' : ''}`} aria-labelledby={headingId}>
      <div className="review-heading">
        <div><p className="section-label">Approved first-party review register</p><h2 id={headingId}>StealthAgents reviews</h2></div>
        <div className="review-actions">
          <button type="button" aria-pressed={paused} onClick={() => setPaused((value) => !value)}>{paused ? 'Play reviews' : 'Pause reviews'}</button>
          <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Review source</a>
        </div>
      </div>
      <div className="review-viewport">
        <div className={`review-track${paused ? ' review-track-paused' : ''}`}>
          {repeated.map((review, index) => (
            <article className="review-card" key={`${review.name}-${index}`} aria-hidden={index >= stealthAgentsReviews.length ? true : undefined}>
              <div className="review-stars"><span aria-hidden="true">★★★★★</span><span className="sr-only">Five gold stars</span></div>
              <h3>{review.quote.split(/[.!?]/)[0]}</h3>
              <blockquote>“{review.quote}”</blockquote>
              <p><strong>{review.name}</strong><span>{review.role}</span></p>
            </article>
          ))}
        </div>
      </div>
      <p className="review-source">Fourteen distinct reviews from the approved Stealth Agents first-party client review register. No review text, attribution, date, or rating claim has been invented.</p>
    </section>
  );
}
