import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

test('research metadata emits an exact production canonical route', () => {
  assert.match(source, /const baseUrl\s*=\s*['"]https:\/\/websitedesignoutsource\.com['"]/);
  assert.match(source, /const canonical\s*=\s*`\$\{baseUrl\}\/research\/\$\{(?:post|contentPost)\.slug\}`/);
  assert.match(source, /alternates\s*:\s*\{\s*canonical\s*\}/);
});
