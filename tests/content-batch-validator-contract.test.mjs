import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const validator = fs.readFileSync(path.join(root, 'scripts/validate-content-batch.mjs'), 'utf8');
const routine = fs.readFileSync(path.join(root, 'scripts/content-routine.mjs'), 'utf8');

test('content batch validation is scoped to files written by the routine', () => {
  assert.match(validator, /const requestedFiles = process\.argv\.slice\(3\)/);
  assert.match(validator, /Provide at least one \$\{kind\} content file to validate/);
  assert.doesNotMatch(validator, /fs\.readdirSync\(directory\)\.filter/);
  assert.match(routine, /\[path\.join\(root, 'scripts\/validate-content-batch\.mjs'\), kind, \.\.\.written\]/);
});

test('placeholder checks reject markers without rejecting ordinary placeholder prose', () => {
  assert.ok(validator.includes('\\{\\{\\s*placeholder\\s*\\}\\}'));
  assert.ok(!validator.includes('|placeholder)\\b'));
});