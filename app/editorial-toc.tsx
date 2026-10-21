'use client';
import { useEffect, useState } from 'react';
export type TocItem = { id: string; label: string; level: 2 | 3 };

export function EditorialToc({ items, mode = 'desktop' }: { items: TocItem[]; mode?: 'desktop' | 'mobile' }) {
  const [active, setActive] = useState(items[0]?.id || '');
  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) setActive(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 1] });
    items.forEach((item) => { const element = document.getElementById(item.id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, [items]);
  if (!items.length) return null;
  const links = <ol>{items.map((item) => <li className={`toc-level-${item.level}`} key={item.id}><a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a></li>)}</ol>;
  if (mode === 'mobile') return <details className="mobile-toc"><summary>On this page</summary>{links}</details>;
  return <aside className="article-sidebar" aria-label="Article navigation"><div className="article-sidebar-scroll"><p className="section-label">On this page</p><nav aria-label="Table of contents">{links}</nav><div className="sidebar-support"><h2>Put this into practice</h2><p>Use the guidance to define a brief, assign an approval owner, and record what the finished work must prove.</p><a href="/services">Related services</a><a href="/contact-us">Discuss a project</a></div></div></aside>;
}
