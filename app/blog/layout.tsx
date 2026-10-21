import type { ReactNode } from 'react';
import { SiteRuntime } from '../site-runtime';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <><SiteRuntime />{children}</>;
}
