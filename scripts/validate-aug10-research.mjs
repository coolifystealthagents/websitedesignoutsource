import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/research.json'), 'utf8'));
if (manifest.entries.length < 10) throw new Error('Manifest has fewer than ten entries');
const expected = [...manifest.entries].sort((a, b) => b.sourceDate.localeCompare(a.sourceDate) || a.slug.localeCompare(b.slug)).map((entry) => entry.slug);
const sourceDates = [];
for (const entry of manifest.entries) {
  if (!/^\/research\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/research/${entry.slug}`) throw new Error(`Invalid route: ${entry.slug}`);
  const source = fs.readFileSync(path.join(root, entry.sourcePath), 'utf8');
  if (!new RegExp(`^slug: ["']?${entry.slug}["']?$`, 'm').test(source)) throw new Error(`Missing source slug: ${entry.slug}`);
  if (!/^published: ["']?2026-08-10["']?$/m.test(source)) throw new Error(`Invalid source date: ${entry.slug}`);
  const built = fs.readFileSync(path.join(root, '.next/server/app/research', entry.slug + '.html'), 'utf8');
  if (!built.includes('datePublished') || !built.includes('2026-08-10') || !built.includes('<time dateTime="2026-08-10">2026-08-10</time>')) throw new Error(`Rendered date missing: ${entry.slug}`);
  const sitemap = fs.readFileSync(path.join(root, '.next/server/app/sitemap.xml.body'), 'utf8');
  if (!sitemap.includes(`https://websitedesignoutsource.com${entry.route}`)) throw new Error(`Sitemap route missing: ${entry.slug}`);
  sourceDates.push(entry.sourceDate);
}
if (new Set(manifest.entries.map((entry) => entry.slug)).size !== manifest.entries.length) throw new Error('Duplicate manifest slug');
if (sourceDates.some((date) => date !== '2026-08-10')) throw new Error('Source date audit failed');
const index = fs.readFileSync(path.join(root, '.next/server/app/research.html'), 'utf8');
let cursor = -1;
for (const slug of expected) { const next = index.indexOf(`/research/${slug}`); if (next < cursor) throw new Error('Research index is not newest-first'); cursor = next; }
console.log(JSON.stringify({ count: manifest.entries.length, sourceDateAudit: 'PASS', renderedDateAudit: 'PASS', indexOrderAudit: 'PASS', result: 'PASS' }));
