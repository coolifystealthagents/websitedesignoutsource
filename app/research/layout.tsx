import type { ReactNode } from 'react';
import { SiteRuntime } from '../site-runtime';

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return <><SiteRuntime />{children}</>;
}
