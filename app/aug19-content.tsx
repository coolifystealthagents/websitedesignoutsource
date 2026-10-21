import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Header, Footer } from './components';
import { EditorialArticle, cleanVisibleText } from './editorial-system';
import meta from './aug19-meta.json';
const SITE = 'https://websitedesignoutsource.com';
type Family = 'blog' | 'research';
type Item = { family: Family; title: string; description: string; hero: string };
function item(slug: string): Item { return (meta as Record<string, Item>)[slug]; }
function source(family: Family, slug: string) { const raw = fs.readFileSync(path.join(process.cwd(), 'content', family, `${slug}.md`), 'utf8'); return raw.replace(/^---[\s\S]*?---\s*/, '').replace(/^#[^\n]+\n+/, '').replace(/^\*August 19, 2026\*\s*/, ''); }
export function getAug19Metadata(family: Family, slug: string): Metadata { const record = item(slug); const canonical = `${SITE}/${family}/${slug}`; return { title: cleanVisibleText(record.title), description: cleanVisibleText(record.description), alternates: { canonical }, openGraph: { title: cleanVisibleText(record.title), description: cleanVisibleText(record.description), url: canonical, images: [record.hero] } }; }
export function renderAug19Article(family: Family, slug: string) { const record = item(slug); const post = { slug, title: record.title, excerpt: record.description, published: '2026-08-19', image: record.hero, body: source(family, slug) }; return <><Header/><EditorialArticle post={post} kind={family === 'research' ? 'Research' : 'Blog'} canonical={`${SITE}/${family}/${slug}`}/><Footer hidePricing/></>; }
