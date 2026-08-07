import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const kind = process.argv[2];
const cfg = JSON.parse(fs.readFileSync(path.join(root, 'automation/routines.json'), 'utf8'));
const routine = cfg.routines.find((item) => item.kind === kind);
if (!routine) throw new Error(`Unknown routine kind: ${kind}`);

const directory = path.join(root, routine.directory);
if (!fs.existsSync(directory)) throw new Error(`Missing content directory: ${routine.directory}`);

const files = fs.readdirSync(directory).filter((file) => /\.(md|mdx)$/.test(file));
const errors = [];
const slugs = new Set();
for (const file of files) {
  const source = fs.readFileSync(path.join(directory, file), 'utf8');
  const frontmatter = source.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatter) errors.push(`${file}: missing frontmatter`);
  if ((source.match(/^# /gm) || []).length !== 1) errors.push(`${file}: expected exactly one H1`);
  if (/—|–|\s--\s/.test(source)) errors.push(`${file}: em dash, en dash, or prose double hyphen found`);
  if (/\b(REPLACE|TODO|TBD|lorem ipsum|placeholder)\b/i.test(source)) errors.push(`${file}: unresolved placeholder found`);
  const slug = file.replace(/\.(md|mdx)$/, '');
  if (slugs.has(slug)) errors.push(`${file}: duplicate slug`);
  slugs.add(slug);
  if (kind === 'blog') {
    const furtherReading = source.match(/## Further reading\n([\s\S]*?)(?=\n## |$)/)?.[1] || '';
    const bodyLinks = (furtherReading.match(/\]\(\/blog\//g) || []).length;
    if (bodyLinks !== 2) errors.push(`${file}: expected exactly two contextual internal blog links, found ${bodyLinks}`);
    if ((source.match(/## Related Articles/g) || []).length !== 1) errors.push(`${file}: missing Related Articles section`);
  } else {
    const sourceLinks = (source.match(/^\d+\. \[/gm) || []).length;
    if (sourceLinks < 10) errors.push(`${file}: expected at least ten numbered sources, found ${sourceLinks}`);
    if (!/^## Sources$/m.test(source)) errors.push(`${file}: missing numbered Sources section`);
    if ((source.match(/## Related Research/g) || []).length !== 1) errors.push(`${file}: missing Related Research section`);
  }
}

if (!files.length) throw new Error(`No ${kind} Markdown/MDX files found`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(JSON.stringify({ kind, files: files.sort(), count: files.length, result: 'PASS' }));
