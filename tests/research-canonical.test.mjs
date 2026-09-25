import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const contentLibrary = await readFile(new URL('../app/content-library.tsx', import.meta.url), 'utf8');
const accessibilityResearch = await readFile(new URL('../content/research/website-accessibility-conformance-evidence-2026.mdx', import.meta.url), 'utf8');
const performanceBudgetResearch = await readFile(new URL('../content/research/website-performance-budget-handoff.mdx', import.meta.url), 'utf8');

test('research metadata emits an exact production canonical route', () => {
  assert.match(source, /const baseUrl\s*=\s*['"]https:\/\/websitedesignoutsource\.com['"]/);
  assert.match(source, /const canonical\s*=\s*`\$\{baseUrl\}\/research\/\$\{(?:post|contentPost)\.slug\}`/);
  assert.match(source, /alternates\s*:\s*\{\s*canonical\s*\}/);
});

test('accessibility evidence links its documented next step and carries a record-level update date', () => {
  assert.match(accessibilityResearch, /^updated: "2026-09-13"$/m);
  assert.match(accessibilityResearch, /\[website accessibility remediation\]\(https:\/\/websitedesignoutsource\.com\/services\/website-accessibility-remediation\)/);
  assert.match(contentLibrary, /updated\?: string/);
  assert.match(contentLibrary, /updated: fields\.updated \|\| undefined/);
  assert.match(source, /const modified=contentPost\.updated\|\|contentPost\.published/);
  assert.match(source, /dateModified:modified/);
  assert.match(source, /modifiedTime:modified/);
  assert.match(source, /contentPost\.updated&&<time dateTime=\{contentPost\.updated\}>Updated/);
});

test('performance-budget evidence gives a bounded Core Web Vitals repair handoff', () => {
  assert.match(performanceBudgetResearch, /^updated: "2026-09-25"$/m);
  assert.match(performanceBudgetResearch, /## When the evidence points to a repair/);
  assert.match(performanceBudgetResearch, /\[Core Web Vitals optimization service\]\(https:\/\/websitedesignoutsource\.com\/services\/core-web-vitals-optimization\)/);
  assert.match(performanceBudgetResearch, /The company owner still chooses the budget, approves scope and access, and accepts exceptions before release\./);
  assert.doesNotMatch(performanceBudgetResearch, /guarantees a performance result/i);
});
