import type { ReactNode } from 'react';
import { BlogBanner } from '../blog-banners';
import { SiteRuntime } from '../site-runtime';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>
    <SiteRuntime />
    <BlogBanner position="top" />
    {children}
    <BlogBanner position="middle" />
    <BlogBanner position="bottom" />
  </>;
}
