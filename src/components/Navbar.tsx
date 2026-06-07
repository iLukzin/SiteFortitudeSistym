'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const WHATSAPP_LINK =
  'https://wa.me/5534988018483?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20do%20FortitudeSistym.';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Sistema', href: '#sistema' },
  { label: 'Benefícios', href: '#beneficios' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '0 clamp(1rem, 4vw, 2rem)',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        {/* Logo */}
        <Link href="#inicio" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1rem,3vw,1.2rem)', color: 'var(--text)', letterSpacing: '-0.03em', textDecoration: 'none' }}>
          Fortitude<span style={{ color: 'var(--accent)' }}>Sistym</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links-desktop">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={{ color: 'var(--text-2)', fontSize: '0.88rem', fontWeight: 400, transition: 'color 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--accent)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-2)')}
              >{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="nav-links-desktop"
          style={{
            background: 'var(--accent)', color: '#fff', border: 'none',
            padding: '0.5rem 1.2rem', borderRadius: '8px',
            fontFamily: 'var(--font-body)', fontSize: '0.88rem', fontWeight: 500,
            cursor: 'pointer', letterSpacing: '-0.01em', transition: 'all 0.2s',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-2)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)'; }}
        >
          Solicitar Demo
        </a>

        {/* Hamburger button */}
        <button className="nav-menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
        {navLinks.map(l => (
          <Link key={l.href} href={l.href} className="nav-mobile-link" onClick={closeMenu}>{l.label}</Link>
        ))}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary nav-mobile-cta" onClick={closeMenu}>
          Solicitar Demo via WhatsApp
        </a>
      </div>
    </>
  );
}
