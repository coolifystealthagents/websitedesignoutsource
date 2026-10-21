import { notFound } from 'next/navigation';
import { Header, Footer } from '../../components';
import { blogPosts } from '../../data';
import { AccessibleHandoffArticle } from './rich-article';
import { RedesignMigrationArticle } from './redesign-migration-article';
import { MobileQaArticle } from './mobile-qa-article';
import { contentBlogPosts } from '../../content-library';
import { EditorialArticle, cleanVisibleText } from '../../editorial-system';
const baseUrl = 'https://websitedesignoutsource.com';

export function generateStaticParams() {
  return [...blogPosts.map((post) => ({ slug: post.slug })), ...contentBlogPosts.map((post) => ({ slug: post.slug }))];
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = contentBlogPosts.find((item) => item.slug === slug) || blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const canonical = `${baseUrl}/blog/${post.slug}`;
  return { title: cleanVisibleText(post.title), description: cleanVisibleText(post.excerpt), alternates: { canonical }, openGraph: { type: 'article', title: cleanVisibleText(post.title), description: cleanVisibleText(post.excerpt), url: canonical } };
}
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const contentPost = contentBlogPosts.find((item) => item.slug === slug);
  if (contentPost) return <><Header/><EditorialArticle post={contentPost} kind="Blog" canonical={`${baseUrl}/blog/${contentPost.slug}`}/><Footer hidePricing/></>;
  if (!blogPosts.some((item) => item.slug === slug)) notFound();
  if (slug === 'philippines-website-design-outsourcing-mobile-qa-signoff-sheet') return <MobileQaArticle />;
  if (slug === 'philippines-website-redesign-outsourcing-migration-checklist') return <RedesignMigrationArticle />;
  if (slug === 'philippines-website-design-outsourcing-accessible-handoff') return <AccessibleHandoffArticle />;
  notFound();
}
