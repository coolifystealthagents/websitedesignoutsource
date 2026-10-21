'use client';
import { useEffect } from 'react';

function slug(value: string, index: number) { return `${value.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-') || 'section'}-legacy-${index + 1}`; }

export function SiteRuntime() {
  useEffect(() => {
    if (!/^\/(blog|research)\//.test(window.location.pathname)) return;
    document.querySelectorAll<HTMLElement>('main article:not(.article-content)').forEach((article) => {
      if (article.closest('.editorial-page')) return;
      const headings = Array.from(article.querySelectorAll<HTMLElement>('h2, h3'));
      if (!headings.length || article.parentElement?.querySelector(':scope > .article-sidebar')) return;
      article.classList.add('article-content', 'legacy-editorial-content');
      headings.forEach((heading, index) => { if (!heading.id) heading.id = slug(heading.textContent || '', index); heading.style.scrollMarginTop = '7rem'; });
      const list = document.createElement('ol');
      headings.forEach((heading) => { const item = document.createElement('li'); item.className = `toc-level-${heading.tagName === 'H3' ? '3' : '2'}`; const link = document.createElement('a'); link.href = `#${heading.id}`; link.textContent = heading.textContent; item.append(link); list.append(item); });
      const desktop = document.createElement('aside'); desktop.className = 'article-sidebar legacy-sidebar'; desktop.setAttribute('aria-label', 'Article navigation');
      const scroll = document.createElement('div'); scroll.className = 'article-sidebar-scroll'; scroll.innerHTML = '<p class="section-label">On this page</p>';
      const nav = document.createElement('nav'); nav.setAttribute('aria-label', 'Table of contents'); nav.append(list.cloneNode(true));
      const support = document.createElement('div'); support.className = 'sidebar-support'; support.innerHTML = '<h2>Put this into practice</h2><p>Define the owner, acceptance condition, and evidence before production begins.</p><a href="/services">Related services</a><a href="/contact-us">Discuss a project</a>';
      scroll.append(nav, support); desktop.append(scroll);
      const mobile = document.createElement('details'); mobile.className = 'mobile-toc'; const summary = document.createElement('summary'); summary.textContent = 'On this page'; mobile.append(summary, list);
      article.prepend(mobile);
      const parent = article.parentElement; if (!parent) return; parent.classList.add('article-layout', 'legacy-article-layout'); parent.append(desktop);
      const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting); if (!visible[0]) return; desktop.querySelectorAll('a').forEach((link) => link.removeAttribute('aria-current')); desktop.querySelector<HTMLAnchorElement>(`a[href="#${visible[0].target.id}"]`)?.setAttribute('aria-current', 'location'); }, { rootMargin: '-18% 0px -68% 0px' });
      headings.forEach((heading) => observer.observe(heading));
    });
  }, []);
  return null;
}
