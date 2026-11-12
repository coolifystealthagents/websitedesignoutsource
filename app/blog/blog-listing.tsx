import { Header, Footer } from '../components';
import { Library } from '../library';
import { normalizePosts } from '../library-normalize';
import { blogPosts } from '../data';
import { contentBlogPosts } from '../content-library';
import { notFound } from 'next/navigation';
import { FeaturedComparison } from './FeaturedComparison';
export const PAGE_SIZE=20;
export function BlogListing({page=1}:{page?:number}){const posts=normalizePosts([...contentBlogPosts,...blogPosts.filter(p=>!contentBlogPosts.some(c=>c.slug===p.slug))]);if(!Number.isInteger(page)||page<1||page>Math.max(1,Math.ceil(posts.length/PAGE_SIZE)))notFound();return <><Header/><main><Library kind="blog" posts={posts} page={page} pageSize={20} archive>{page===2&&<FeaturedComparison/>}</Library></main><Footer/></>;}
