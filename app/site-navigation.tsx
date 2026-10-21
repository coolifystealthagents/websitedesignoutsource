'use client';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' },
];

export function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a,button');
    focusable?.[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key === 'Tab' && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('menu-open');
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('menu-open'); };
  }, [open]);

  return <>
    <nav className="desktop-navigation" aria-label="Primary navigation">
      {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
    </nav>
    <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
      <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span><span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
    </button>
    {open && <div className="menu-scrim" onMouseDown={() => { setOpen(false); buttonRef.current?.focus(); }}>
      <div ref={panelRef} id="mobile-navigation" className="mobile-navigation" role="dialog" aria-modal="true" aria-label="Mobile navigation" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="menu-close" onClick={() => { setOpen(false); buttonRef.current?.focus(); }}>Close</button>
        <nav aria-label="Mobile primary navigation">{links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
      </div>
    </div>}
  </>;
}
