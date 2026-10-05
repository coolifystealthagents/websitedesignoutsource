import fs from 'node:fs';
import path from 'node:path';

export type ContentPost = { slug: string; title: string; excerpt: string; published: string; updated?: string; image?: string; body: string };

function readPosts(kind: 'blog' | 'research'): ContentPost[] {
  const directory = path.join(process.cwd(), 'content', kind);
  return fs.readdirSync(directory).filter((file) => /\.(md|mdx)$/.test(file)).sort().map((file) => {
    const body = fs.readFileSync(path.join(directory, file), 'utf8');
    const frontmatter = body.match(/^---\n([\s\S]*?)\n---\n?/);
    const fields = Object.fromEntries((frontmatter?.[1] || '').split('\n').flatMap((line) => {
      const match = line.match(/^([\w-]+):\s*["']?(.*?)["']?\s*$/);
      return match ? [[match[1], match[2]]] : [];
    }));
    return {
      slug: fields.slug || file.replace(/\.(md|mdx)$/, ''),
      title: fields.title || file,
      excerpt: fields.description || '',
      published: fields.published || '',
      updated: fields.updated || undefined,
      image: fields.image || undefined,
      body: body.replace(/^---[\s\S]*?---\n?/, '').trim(),
    };
  });
}

export const contentBlogPosts = readPosts('blog');
export const contentResearchPosts = readPosts('research');

function renderInlineMarkdown(source: string) {
  const parts = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let cursor = 0;
  let match;
  while ((match = linkPattern.exec(source)) !== null) {
    if (match.index > cursor) parts.push(source.slice(cursor, match.index));
    parts.push(<a key={`${match.index}-${match[2]}`} href={match[2]}>{match[1]}</a>);
    cursor = match.index + match[0].length;
  }
  if (cursor < source.length) parts.push(source.slice(cursor));
  return parts;
}

export function renderMarkdown(source: string) {
  return source.split('\n').map((line, index) => {
    if (!line.trim()) return null;
    if (line.startsWith('### ')) return <h3 key={index}>{line.slice(4)}</h3>;
    if (line.startsWith('## ')) return <h2 key={index}>{line.slice(3)}</h2>;
    if (line.startsWith('# ')) return null;
    if (line.startsWith('- ')) return <li key={index}>{line.slice(2)}</li>;
    return <p key={index}>{renderInlineMarkdown(line)}</p>;
  });
}
