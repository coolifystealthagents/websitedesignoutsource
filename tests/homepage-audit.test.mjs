import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

test('homepage logo and assurance icons have descriptive image labels', () => {
  const components = fs.readFileSync(path.join(process.cwd(), 'app/components.tsx'), 'utf8');
  const home = fs.readFileSync(path.join(process.cwd(), 'app/page.tsx'), 'utf8');
  assert.doesNotMatch(components, /src="\/logo\.svg"\s+alt=""/);
  for (const [src, label] of [
    ['private-delivery.svg', 'Private website delivery icon'],
    ['source-files-workspace.svg', 'Source files workspace icon'],
    ['responsive-qa-review.svg', 'Responsive quality assurance review icon'],
  ]) {
    const line = home.split('\n').find((entry) => entry.includes(src));
    assert.ok(line, `${src} binding must exist`);
    assert.ok(line.includes(`alt="${label}"`), `${src} must have its descriptive label`);
    assert.ok(!line.includes('aria-hidden="true"'), `${src} must not be hidden from accessibility tools`);
  }
});
