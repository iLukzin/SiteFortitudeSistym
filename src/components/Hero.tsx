'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SystemMockup from './SystemMockup';

const WHATSAPP_LINK =
  'https://wa.me/5534988018483?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20do%20FortitudeSistym.';

export default function Hero() {
  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(5rem,10vw,7rem) clamp(1rem,4vw,2rem) clamp(3rem,6vw,5rem)',
      background: 'linear-gradient(160deg, #ffffff 50%, #eff6ff 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot grid */}
      <div aria-hidden style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle, #CBD5E1 1px, transparent 1px)', backgroundSize:'28px 28px', opacity:0.5, pointerEvents:'none' }} />
      <div aria-hidden style={{ position:'absolute', top:'-10%', right:'-5%', width:'600px', height:'600px', background:'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left */}
          <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, ease:'easeOut' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'var(--accent-light)', border:'1px solid var(--border-2)', borderRadius:'100px', padding:'0.3rem 0.9rem', fontSize:'0.75rem', color:'var(--accent)', marginBottom:'1.5rem', fontFamily:'var(--font-display)', fontWeight:600, letterSpacing:'0.02em', textTransform:'uppercase' }}>
              <span style={{ width:'6px', height:'6px', background:'var(--accent-3)', borderRadius:'50%', animation:'pulse 2s infinite' }} />
              Plataforma SaaS · 2025
            </div>

            <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.75)}}`}</style>

            <h1 style={{ fontSize:'clamp(1.8rem,5vw,3.2rem)', fontWeight:700, letterSpacing:'-0.04em', lineHeight:1.08, marginBottom:'1.25rem' }}>
              Transforme sua gestão de{' '}
              <em style={{ fontStyle:'normal', color:'var(--accent)' }}>agendamentos</em>
            </h1>

            <p style={{ fontSize:'clamp(0.9rem,2vw,1rem)', color:'var(--text-2)', maxWidth:'480px', marginBottom:'2rem', lineHeight:1.8, fontWeight:300 }}>
              Uma plataforma moderna para organizar serviços, clientes e compromissos de forma simples, rápida e eficiente.
            </p>

            <div className="hero-btns">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">→ Solicitar Demonstração</a>
              <a href="#sistema" className="btn-outline">Conhecer Sistema</a>
            </div>
          </motion.div>

          {/* Right mockup — hidden on mobile via CSS */}
          <motion.div className="hero-visual" initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.15, ease:'easeOut' }}>
            <SystemMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
