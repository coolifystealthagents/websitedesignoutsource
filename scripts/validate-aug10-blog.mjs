import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/blog.json'), 'utf8'));
const expectedSlugs = manifest.entries.map((entry) => entry.slug);
if (manifest.entries.length !== 23 || new Set(expectedSlugs).size !== 23) throw new Error('Expected exactly 23 unique entries');
const expectedKeys = ['schemaVersion','contract','targetDate','family','domain','repository','branch','minimum','priorRunId','priorIssueId','validationCommands','cleanBuildPassed','existingCompliancePassed','indexNewestFirstPassed','entries'];
if (JSON.stringify(Object.keys(manifest)) !== JSON.stringify(expectedKeys)) throw new Error('Manifest keys mismatch');
for (const entry of manifest.entries) {
  const source = fs.readFileSync(path.join(root, entry.sourcePath), 'utf8');
  if (!source.includes(`slug: "${entry.slug}"`) || !source.includes('published: "2026-08-10"')) throw new Error(`Source audit failed: ${entry.slug}`);
  const keys = ['slug','route','sourcePath','provenance','introducedByCommit','sourceDateField','sourceDate','renderedDateFields','renderedDate'];
  if (JSON.stringify(Object.keys(entry)) !== JSON.stringify(keys)) throw new Error(`Entry keys mismatch: ${entry.slug}`);
  if (entry.introducedByCommit !== '46f63768198f4bca9a86fc4dc19566e352e319d0' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') throw new Error(`Provenance/date audit failed: ${entry.slug}`);
  const html = fs.readFileSync(path.join(root, '.next/server/app/blog', entry.slug + '.html'), 'utf8');
  if (!html.includes('datePublished') || !html.includes('<time dateTime="2026-08-10">2026-08-10</time>')) throw new Error(`Rendered date audit failed: ${entry.slug}`);
}
const index = fs.readFileSync(path.join(root, '.next/server/app/blog.html'), 'utf8') + fs.readdirSync(path.join(root, '.next/server/app/blog/page')).filter((file) => /^\d+\.html$/.test(file)).sort().map((file) => fs.readFileSync(path.join(root, '.next/server/app/blog/page', file), 'utf8')).join('');
let cursor = -1;
for (const slug of [...expectedSlugs].sort()) { const next = index.indexOf(`/blog/${slug}`); if (next < cursor) throw new Error('Index order audit failed'); cursor = next; }
console.log(JSON.stringify({count: manifest.entries.length, sourceDateAudit: 'PASS', renderedDateAudit: 'PASS', indexOrderAudit: 'PASS', result: 'PASS'}));
