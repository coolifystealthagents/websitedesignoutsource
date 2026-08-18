import fs from 'node:fs';
import path from 'node:path';

export type ContentPost = { slug: string; title: string; excerpt: string; published: string; body: string };

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
      body: body.replace(/^---[\s\S]*?---\n?/, '').trim(),
    };
  });
}

export const contentBlogPosts = readPosts('blog');
export const contentResearchPosts = readPosts('research');

export function renderMarkdown(source: string) {
  return source.split('\n').map((line, index) => {
    if (!line.trim()) return null;
    if (line.startsWith('### ')) return <h3 key={index}>{line.slice(4)}</h3>;
    if (line.startsWith('## ')) return <h2 key={index}>{line.slice(3)}</h2>;
    if (line.startsWith('# ')) return null;
    if (line.startsWith('- ')) return <li key={index}>{line.slice(2)}</li>;
    const linked = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => `<a href="${href}">${label}</a>`);
    return <p key={index} dangerouslySetInnerHTML={{ __html: linked }} />;
  });
}
