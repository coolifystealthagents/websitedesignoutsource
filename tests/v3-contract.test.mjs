import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const [navigation, components, reviews, provenance, services, serviceDetails, editorial, toc, sitemap, nextConfig, contact, confirmation, contactHandler, booking, proxy, blogLayout] = await Promise.all([
  read('../app/site-navigation.tsx'), read('../app/components.tsx'), read('../app/reviews.ts'), read('../app/reviews-provenance.json'),
  read('../app/fleet-content.ts'), read('../app/service-details.ts'), read('../app/editorial-system.tsx'), read('../app/editorial-toc.tsx'),
  read('../app/sitemap.xml/route.ts'), read('../next.config.mjs'), read('../app/contact-us/page.tsx'), read('../app/thanks-whats-next/page.tsx'),
  read('../app/api/contact/route.ts'), read('../app/booking-components.tsx'), read('../proxy.ts'), read('../app/blog/layout.tsx'),
]);

test('shared navigation uses the exact approved labels and routes', () => {
  const labels = [...navigation.matchAll(/label: '([^']+)'/g)].map((match) => match[1]);
  const routes = [...navigation.matchAll(/href: '([^']+)'/g)].map((match) => match[1]);
  assert.deepEqual(labels, ['Home', 'Services', 'Contact Us']);
  assert.deepEqual(routes, ['/', '/services', '/contact-us']);
});

test('shared chrome carries parent-brand attribution and exact contact route', () => {
  assert.match(components, /Powered by/);
  assert.match(components, /stealth-agents-logo\.png/);
  assert.match(components, /href="#main-content"/);
  assert.match(components, /id="main-content"/);
  assert.match(components, /href="\/contact-us"/);
  assert.doesNotMatch(components, /href="\/contact"/);
});

test('review registry has fourteen approved entries and provenance', () => {
  assert.equal((reviews.match(/\{ name:/g) || []).length, 14);
  const record = JSON.parse(provenance);
  assert.equal(record.reviewCount, 14);
  assert.match(record.sourcePage, /^https:\/\/stealthagents\.com\//);
});

test('every service route has a substantive detail record', () => {
  const fleetBlock = services.split('export const researchPosts')[0];
  const slugs = [...fleetBlock.matchAll(/"slug": "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(slugs.length, 10);
  for (const slug of slugs) assert.match(serviceDetails, new RegExp(`'${slug}':\\s*\\{`));
  for (const section of ['audience:', 'problem:', 'inputs:', 'work:', 'deliverables:', 'boundaries:', 'controls:', 'scenarios:', 'faqs:']) assert.match(serviceDetails, new RegExp(section));
});

test('editorial system generates stable heading navigation and responsive TOCs', () => {
  assert.match(editorial, /articleHeadings\(post\.body\)/);
  assert.match(editorial, /id=\{headingId/);
  assert.match(editorial, /TopicHero/);
  assert.match(toc, /mode === 'mobile'/);
  assert.match(toc, /className="article-sidebar"/);
  assert.match(toc, /aria-current/);
});

test('conversion, sitemap, redirect, and security contracts use contact-us', () => {
  assert.match(contact, /action="\/api\/contact"/);
  assert.match(contact, /name="privacy" value="accepted" required/);
  for (const field of ['first', 'last', 'email', 'phone', 'business', 'companySize', 'preferredContact', 'positions', 'needs']) assert.match(contactHandler, new RegExp(`!${field}`));
  assert.match(contactHandler, /privacy!==['"]accepted['"]/);
  assert.match(booking, /Pause reviews/);
  assert.match(booking, /aria-pressed=\{paused\}/);
  assert.match(sitemap, /'\/contact-us'/);
  assert.doesNotMatch(sitemap, /'\/contact'/);
  assert.match(confirmation, /Consultation confirmed/);
  assert.match(confirmation, /robots: \{ index: false/);
  assert.match(nextConfig, /destination: '\/contact-us'/);
  assert.match(nextConfig, /Content-Security-Policy/);
  assert.match(proxy, /cf-visitor/);
  assert.match(proxy, /visitorProtocol !== 'https'/);
  assert.doesNotMatch(blogLayout, /BlogBanner/);
  for (const header of ['X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy', 'Strict-Transport-Security']) assert.match(nextConfig, new RegExp(header));
});
