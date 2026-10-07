import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const contentLibrary = await readFile(new URL('../app/content-library.tsx', import.meta.url), 'utf8');
const accessibilityResearch = await readFile(new URL('../content/research/website-accessibility-conformance-evidence-2026.mdx', import.meta.url), 'utf8');
const performanceBudgetResearch = await readFile(new URL('../content/research/website-performance-budget-handoff.mdx', import.meta.url), 'utf8');
const migrationInventoryResearch = await readFile(new URL('../content/research/website-migration-inventory-control-study.mdx', import.meta.url), 'utf8');
const designSystemHandoffResearch = await readFile(new URL('../content/research/design-system-handoff-controls.mdx', import.meta.url), 'utf8');
const changeManagementResearch = await readFile(new URL('../content/research/website-change-management-controls.mdx', import.meta.url), 'utf8');

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

test('migration-inventory evidence gives a bounded Website Content Migration handoff', () => {
  assert.match(migrationInventoryResearch, /^updated: "2026-10-01"$/m);
  assert.match(migrationInventoryResearch, /## When the inventory needs production support/);
  assert.match(migrationInventoryResearch, /\[Website Content Migration service\]\(https:\/\/websitedesignoutsource\.com\/services\/website-content-migration\)/);
  assert.match(migrationInventoryResearch, /The company owner still decides which URLs retire, where redirects point, and when the release can go live\./);
  assert.doesNotMatch(migrationInventoryResearch, /guarantees a migration result/i);
});

test('design-system handoff evidence gives a bounded production-support next step', () => {
  assert.match(designSystemHandoffResearch, /^updated: "2026-10-03"$/m);
  assert.match(designSystemHandoffResearch, /## When the handoff needs production support/);
  assert.match(designSystemHandoffResearch, /\[Design System Production service\]\(https:\/\/websitedesignoutsource\.com\/services\/design-system-production\)/);
  assert.match(designSystemHandoffResearch, /The company owner approves component acceptance, access, and the production release\./);
  assert.doesNotMatch(designSystemHandoffResearch, /guarantees a consistency result/i);
});

test('change-management evidence gives a bounded Website Maintenance handoff', () => {
  assert.match(changeManagementResearch, /^updated: "2026-10-07"$/m);
  assert.match(changeManagementResearch, /## When regular changes need support/);
  assert.match(changeManagementResearch, /\[Website Maintenance service\]\(https:\/\/websitedesignoutsource\.com\/services\/website-maintenance\)/);
  assert.match(changeManagementResearch, /Your company owner still approves access, exceptions, and the release\./);
  assert.doesNotMatch(changeManagementResearch, /guarantees a maintenance result/i);
});
