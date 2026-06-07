'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WHATSAPP_LINK =
  'https://wa.me/5534988018483?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20do%20FortitudeSistym.';

const WHATSAPP_CONTACT =
  'https://wa.me/5534988018483?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20FortitudeSistym.';

const INSTAGRAM_LINK =
  'https://www.instagram.com/fortitudesistym?igsh=MTU5djlxYzFxNm9oYw%3D%3D';

/* ─── Quote ─────────────────────────────────────────── */
export function Quote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ background: 'var(--accent)', padding: '5rem 2rem', textAlign: 'center' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
        style={{ maxWidth: '680px', margin: '0 auto' }}
      >
        <span
          style={{
            fontSize: '4rem',
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 0.7,
            fontFamily: 'var(--font-display)',
            marginBottom: '1.25rem',
            display: 'block',
          }}
        >
          "
        </span>
        <blockquote
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontWeight: 300,
            color: '#fff',
            lineHeight: 1.75,
            letterSpacing: '-0.01em',
            fontStyle: 'normal',
          }}
        >
          Nosso compromisso é entregar uma plataforma confiável, eficiente e preparada para
          acompanhar o crescimento do seu negócio.
        </blockquote>
        <div
          style={{ width: '48px', height: '2px', background: 'rgba(255,255,255,0.4)', margin: '1.75rem auto' }}
        />
        <p
          style={{
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.6)',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          FortitudeSistym — Time de Produto
        </p>
      </motion.div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────── */
export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{ padding: '6rem 2rem', background: 'var(--bg-2)' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          background: '#fff',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '3.5rem 2.5rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow)',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            marginBottom: '0.9rem',
          }}
        >
          Pronto para modernizar seus agendamentos?
        </h2>
        <p style={{ color: 'var(--text-2)', marginBottom: '1.75rem', fontSize: '0.95rem', fontWeight: 300 }}>
          Conheça uma solução desenvolvida para simplificar a rotina da sua empresa.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            → Solicitar Demonstração
          </a>
          <a href={WHATSAPP_CONTACT} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Entrar em Contato
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────── */
const footerLinks = ['Início', 'Sobre', 'Sistema', 'Benefícios', 'Como Funciona', 'Contato'];
const footerHrefs = ['#inicio', '#sobre', '#sistema', '#beneficios', '#como-funciona', WHATSAPP_CONTACT];

export function Footer() {
  return (
    <footer style={{ background: 'var(--text)', padding: '3.5rem 2rem 2rem' }}>
      <div
        className="container"
        style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}
      >
        <div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.15rem',
              color: '#fff',
              letterSpacing: '-0.03em',
              display: 'block',
              marginBottom: '0.65rem',
            }}
          >
            Fortitude<span style={{ color: 'var(--accent-3)' }}>Sistym</span>
          </span>
          <p style={{ fontSize: '0.83rem', color: '#94A3B8', lineHeight: 1.7, maxWidth: '260px', fontWeight: 300 }}>
            Sistema de Gestão de Agendamentos. Desenvolvido para simplificar e profissionalizar o
            atendimento ao cliente.
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.72rem', color: '#64748B' }}>Desde 2025 · Brasil</p>

          {/* Redes sociais */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.8')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.8')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h5
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#64748B',
              marginBottom: '1rem',
            }}
          >
            Navegação
          </h5>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {footerLinks.map((link, i) => (
              <li key={link}>
                <a
                  href={footerHrefs[i]}
                  target={link === 'Contato' ? '_blank' : undefined}
                  rel={link === 'Contato' ? 'noopener noreferrer' : undefined}
                  style={{ color: '#94A3B8', fontSize: '0.84rem', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fff')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = '#94A3B8')}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: '2.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.78rem',
          color: '#64748B',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span>© 2025 FortitudeSistym. Todos os direitos reservados.</span>
        <span>Gestão de Agendamentos</span>
      </div>
    </footer>
  );
}
