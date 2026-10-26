import type { ReactNode } from 'react';
import { EditorialToc, type TocItem } from './editorial-toc';
import { CTA, JsonLd } from './components';

export type ArticleRecord = { slug: string; title: string; excerpt: string; published: string; updated?: string; image?: string; body: string };
const genericImage = '/illustrations/getillustrations/inkdex-saas/filipino-web-design-production.webp';

export function cleanVisibleText(value: string) {
  return value.replaceAll('—', ',').replaceAll('–', '-').replace(/\s--\s/g, ' - ').replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
}
function displayDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return cleanVisibleText(value);
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}
export function headingId(value: string, index = 0) {
  const base = cleanVisibleText(value).toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');
  return `${base || 'section'}-${index + 1}`;
}
export function articleHeadings(source: string): TocItem[] {
  return source.split('\n').flatMap((line, index) => {
    const match = line.match(/^(##|###)\s+(.+)$/);
    return match ? [{ id: headingId(match[2], index), label: cleanVisibleText(match[2]), level: match[1] === '##' ? 2 as const : 3 as const }] : [];
  });
}
function inline(value: string): ReactNode[] {
  const text = cleanVisibleText(value);
  const pattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  const nodes: ReactNode[] = []; let cursor = 0; let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    if (match[2]) nodes.push(<a href={match[3]} key={`${match.index}-a`}>{match[2]}</a>);
    else nodes.push(<strong key={`${match.index}-b`}>{match[4]}</strong>);
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}
export function renderArticleBody(source: string) {
  const lines = source.split('\n'); const output: ReactNode[] = []; let list: string[] = []; let ordered = false;
  const flush = (key: number) => { if (!list.length) return; const items = list.map((item, i) => <li key={i}>{inline(item)}</li>); output.push(ordered ? <ol key={`ol-${key}`}>{items}</ol> : <ul key={`ul-${key}`}>{items}</ul>); list = []; };
  lines.forEach((line, index) => {
    const value = line.trim();
    if (!value || value.startsWith('# ')) { flush(index); return; }
    const unordered = value.match(/^[-*]\s+(.+)/); const numbered = value.match(/^\d+\.\s+(.+)/);
    if (unordered || numbered) { const nextOrdered = Boolean(numbered); if (list.length && ordered !== nextOrdered) flush(index); ordered = nextOrdered; list.push((unordered || numbered)![1]); return; }
    flush(index);
    if (value.startsWith('### ')) output.push(<h3 id={headingId(value.slice(4), index)} key={index}>{cleanVisibleText(value.slice(4))}</h3>);
    else if (value.startsWith('## ')) output.push(<h2 id={headingId(value.slice(3), index)} key={index}>{cleanVisibleText(value.slice(3))}</h2>);
    else if (value.startsWith('> ')) output.push(<blockquote key={index}><p>{inline(value.slice(2))}</p></blockquote>);
    else output.push(<p key={index}>{inline(value)}</p>);
  });
  flush(lines.length);
  return output;
}

const topicRules = [
  ['accessibility', /accessib|wcag|keyboard|focus|screen reader/i], ['performance', /performance|vitals|speed|loading|cache|image/i],
  ['security', /security|privacy|csp|auth|password|permission|access control/i], ['analytics', /analytics|measurement|metric|tracking|event/i],
  ['forms', /form|validation|field|checkout|lead/i], ['migration', /migration|redirect|domain|launch|rollback/i],
  ['content', /content|copy|editorial|seo|search|keyword/i], ['responsive', /responsive|mobile|viewport|zoom|breakpoint/i],
  ['quality', /quality|qa|review|acceptance|test|defect/i], ['systems', /component|design system|token|governance|workflow|handoff/i],
] as const;
function topicFor(title: string) { return topicRules.find(([, rule]) => rule.test(title))?.[0] || 'production'; }
function hash(value: string) { return [...value].reduce((total, char) => (total * 31 + char.charCodeAt(0)) >>> 0, 7); }
export function TopicHero({ title, kind }: { title: string; kind: 'Blog' | 'Research' | 'Service' }) {
  const topic = topicFor(title); const seed = hash(title); const shift = seed % 90; const rows = 3 + seed % 4;
  return <figure className={`topic-hero topic-${topic}`}><svg viewBox="0 0 1200 630" role="img" aria-label={`${title} visual briefing diagram`}><defs><linearGradient id={`g-${seed}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff6ea"/><stop offset="1" stopColor="#dff0e7"/></linearGradient></defs><rect width="1200" height="630" rx="34" fill={`url(#g-${seed})`}/><path d={`M0 ${430 + shift} C260 ${330-shift} 470 ${590-shift} 720 430 S980 ${270+shift} 1200 360 V630 H0Z`} fill="#123b36" opacity=".96"/><circle cx={950-shift} cy={145+shift/3} r="115" fill="#ff6b35"/><rect x="85" y="82" width="620" height="342" rx="22" fill="#fff" stroke="#123b36" strokeWidth="4"/><rect x="115" y="116" width="210" height="18" rx="9" fill="#ff6b35"/><rect x="115" y="158" width="500" height="11" rx="5" fill="#123b36" opacity=".2"/>{Array.from({length: rows}).map((_, i) => <g key={i}><circle cx="138" cy={213+i*45} r="10" fill={i % 2 ? '#1b8578' : '#ff6b35'}/><rect x="165" y={204+i*45} width={260 + ((seed+i*43)%150)} height="18" rx="9" fill="#123b36" opacity={.78-i*.06}/></g>)}<path d={`M760 280 L${820+shift} 215 L900 292 L1015 190`} fill="none" stroke="#fff" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/><circle cx="760" cy="280" r="18" fill="#ffcc66"/><circle cx={820+shift} cy="215" r="18" fill="#ffcc66"/><circle cx="900" cy="292" r="18" fill="#ffcc66"/><circle cx="1015" cy="190" r="18" fill="#ffcc66"/><text x="86" y="508" fill="#fff" fontSize="24" fontWeight="700" letterSpacing="4">{kind.toUpperCase()} / {topic.toUpperCase()}</text><text x="86" y="555" fill="#fff" fontSize="21">A practical visual map for the work, checks, and handoff.</text></svg></figure>;
}

export function EditorialArticle({ post, kind, canonical }: { post: ArticleRecord; kind: 'Blog' | 'Research'; canonical: string }) {
  const headings = articleHeadings(post.body); const image = post.image && post.image !== genericImage ? post.image : undefined;
  const published = displayDate(post.published); const modified = displayDate(post.updated || post.published);
  const schema = {'@context':'https://schema.org','@type':kind === 'Blog' ? 'BlogPosting' : 'Article',headline:cleanVisibleText(post.title),description:cleanVisibleText(post.excerpt),url:canonical,mainEntityOfPage:canonical,datePublished:post.published,dateModified:post.updated || post.published,author:{'@type':'Organization',name:'Website Design Outsource'},publisher:{'@type':'Organization',name:'Website Design Outsource'}};
  return <main className="editorial-page"><JsonLd data={schema}/><header className="article-opening"><div className="article-opening-copy"><p className="section-label">{kind} field note</p><h1>{cleanVisibleText(post.title)}</h1><p className="article-dek">{cleanVisibleText(post.excerpt)}</p><div className="article-meta"><span>Published by Website Design Outsource</span><time dateTime={post.published}>Published {published}</time>{post.updated ? <time dateTime={post.updated}>Updated {modified}</time> : null}<span>{Math.max(4, Math.ceil(post.body.split(/\s+/).length / 220))} minute read</span></div></div>{image ? <figure className="article-photo"><img src={image} alt={`Visual guide for ${cleanVisibleText(post.title)}`} width="1200" height="630" loading="eager" /></figure> : <TopicHero title={post.title} kind={kind}/>}</header><div className="article-layout"><article className="article-content"><EditorialToc items={headings} mode="mobile"/>{renderArticleBody(post.body)}<section className="article-next"><h2>Turn the guidance into a reviewable handoff</h2><p>Record the owner, input, acceptance condition, evidence, and escalation point before production begins. That small contract makes the work easier to inspect and approve.</p><a href="/contact-us">Plan a website production handoff</a></section></article><EditorialToc items={headings}/></div><CTA/></main>;
}
