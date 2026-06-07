'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const WHATSAPP_LINK =
  'https://wa.me/5534988018483?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20do%20FortitudeSistym.';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Sistema', href: '#sistema' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como Funciona', href: '#como-funciona' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      <Link
        href="#inicio"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.2rem',
          color: 'var(--text)',
          letterSpacing: '-0.03em',
          textDecoration: 'none',
        }}
      >
        Fortitude<span style={{ color: 'var(--accent)' }}>Sistym</span>
      </Link>

      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
        }}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{
                color: 'var(--text-2)',
                fontSize: '0.88rem',
                fontWeight: 400,
                transition: 'color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-2)')}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: 'var(--accent)',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1.2rem',
          borderRadius: '8px',
          fontFamily: 'var(--font-body)',
          fontSize: '0.88rem',
          fontWeight: 500,
          cursor: 'pointer',
          letterSpacing: '-0.01em',
          transition: 'all 0.2s',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'var(--accent-2)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(37,99,235,0.3)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
      >
        Solicitar Demo
      </a>
    </nav>
  );
}
