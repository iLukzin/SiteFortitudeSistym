'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
          <Link href="#" className="btn-primary">→ Solicitar Demonstração</Link>
          <Link href="#" className="btn-outline">Entrar em Contato</Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────── */
const footerLinks = ['Início', 'Sobre', 'Sistema', 'Benefícios', 'Como Funciona', 'Contato'];
const footerHrefs = ['#inicio', '#sobre', '#sistema', '#beneficios', '#como-funciona', '#'];

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
                <Link
                  href={footerHrefs[i]}
                  style={{ color: '#94A3B8', fontSize: '0.84rem', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#fff')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#94A3B8')}
                >
                  {link}
                </Link>
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
        }}
      >
        <span>© 2025 FortitudeSistym. Todos os direitos reservados.</span>
        <span>Gestão de Agendamentos</span>
      </div>
    </footer>
  );
}
