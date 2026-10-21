import { notFound } from 'next/navigation';
import { Header, Footer } from '../../components';
import { contentResearchPosts } from '../../content-library';
import { EditorialArticle, cleanVisibleText } from '../../editorial-system';
const baseUrl = 'https://websitedesignoutsource.com';
export function generateStaticParams() { return contentResearchPosts.map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = contentResearchPosts.find((item) => item.slug === slug); if (!post) return {};
  const canonical = `${baseUrl}/research/${post.slug}`; const image = post.image;
  return { title: cleanVisibleText(post.title), description: cleanVisibleText(post.excerpt), alternates: { canonical }, openGraph: { type: 'article', title: cleanVisibleText(post.title), description: cleanVisibleText(post.excerpt), url: canonical, publishedTime: post.published, modifiedTime: post.updated || post.published, ...(image ? { images: [image] } : {}) }, twitter: { card: 'summary_large_image', title: cleanVisibleText(post.title), description: cleanVisibleText(post.excerpt), ...(image ? { images: [image] } : {}) } };
}
export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = contentResearchPosts.find((item) => item.slug === slug); if (!post) notFound();
  return <><Header/><EditorialArticle post={post} kind="Research" canonical={`${baseUrl}/research/${post.slug}`}/><Footer hidePricing/></>;
}
