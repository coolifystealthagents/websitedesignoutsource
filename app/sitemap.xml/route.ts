import aug19Meta from '../aug19-meta.json';
import { fleetServices, researchPosts } from '../fleet-content';
import { blogPosts } from '../data';
import { contentBlogPosts, contentResearchPosts } from '../content-library';

const base = 'https://websitedesignoutsource.com';
const aug19Paths = Object.entries(aug19Meta).map(([slug, value]) => `/${(value as { family: string }).family}/${slug}`);

export async function GET() {
  const pages = ['', '/services', '/blog', '/blog/top-25-web-design-outsourcing-companies', '/research', '/contact-us', '/privacy', '/terms', '/cancellation-policy'];
  const allBlogPosts = [...contentBlogPosts, ...blogPosts.filter((post) => !contentBlogPosts.some((candidate) => candidate.slug === post.slug))];
  const blogPages = Array.from({ length: Math.max(1, Math.ceil(allBlogPosts.length / 20)) }, (_, index) => index + 1)
    .filter((page) => page > 1)
    .map((page) => `/blog/page/${page}`);
  const urls = [
    ...aug19Paths,
    ...pages,
    ...fleetServices.map((service) => `/services/${service.slug}`),
    ...allBlogPosts.map((post) => `/blog/${post.slug}`),
    ...blogPages,
    ...researchPosts.map((post) => `/research/${post.slug}`),
    ...contentResearchPosts.map((post) => `/research/${post.slug}`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Array.from(new Set(urls)).map((path) => `<url><loc>${base}${path}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=0, s-maxage=3600' } });
}
