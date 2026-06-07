'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const chips = [
  { icon: '🔒', label: 'Sistema Seguro' },
  { icon: '🌐', label: 'Plataforma Online' },
  { icon: '💬', label: 'Suporte Especializado' },
  { icon: '🔄', label: 'Atualizações Constantes' },
];

const stats = [
  { num: '100%', label: 'Focado em agendamentos', desc: 'Plataforma especializada, desenvolvida do zero para o mercado de serviços.', span: 2 },
  { num: '2025', label: 'Ano de fundação' },
  { num: '+∞',  label: 'Agendamentos possíveis' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre" style={{ padding: 'clamp(3rem,8vw,5.5rem) clamp(1rem,4vw,2rem)', background: 'var(--bg-2)' }}>
      <div className="container" ref={ref}>
        <div className="about-grid">
          {/* Text */}
          <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.65 }}>
            <div className="section-label">Quem Somos</div>
            <h2 className="section-title">Nascemos para simplificar a gestão</h2>
            <p style={{ color:'var(--text-2)', lineHeight:1.9, fontSize:'clamp(0.88rem,2vw,0.95rem)', fontWeight:300 }}>
              A FortitudeSistym foi criada em 2025 com a missão de oferecer soluções inteligentes para gestão de agendamentos. Desenvolvemos ferramentas que ajudam empresas a manter organização, produtividade e excelência no atendimento aos seus clientes.
            </p>

            <div className="about-chips-grid">
              {chips.map(chip => (
                <div key={chip.label} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:'9px', padding:'0.65rem 0.9rem', display:'flex', alignItems:'center', gap:'0.55rem', fontSize:'clamp(0.78rem,2vw,0.83rem)', color:'var(--text-2)', boxShadow:'0 1px 3px rgba(0,0,0,.05)', transition:'all 0.2s', cursor:'default' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--border-2)'; el.style.color='var(--accent)'; el.style.background='var(--accent-light)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--border)'; el.style.color='var(--text-2)'; el.style.background='#fff'; }}
                >
                  <span style={{ fontSize:'0.95rem' }}>{chip.icon}</span>{chip.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.65, delay:0.12 }}
            className="about-cards-grid"
          >
            {stats.map(stat => (
              <div key={stat.label}
                style={{ gridColumn: stat.span===2 ? 'span 2' : 'span 1', background: stat.span===2 ? 'linear-gradient(135deg, var(--accent-light), #fff)' : '#fff', border:'1px solid var(--border)', borderRadius:'12px', padding:'1.25rem', transition:'all 0.25s', boxShadow:'0 1px 3px rgba(0,0,0,.05)', cursor:'default' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--border-2)'; el.style.boxShadow='var(--shadow)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--border)'; el.style.boxShadow='0 1px 3px rgba(0,0,0,.05)'; }}
              >
                <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.4rem,4vw,1.9rem)', fontWeight:700, color:'var(--accent)' }}>{stat.num}</div>
                <div style={{ fontSize:'0.78rem', color:'var(--text-3)', marginTop:'0.2rem' }}>{stat.label}</div>
                {stat.desc && <p style={{ fontSize:'0.78rem', color:'var(--text-3)', marginTop:'0.65rem', lineHeight:1.6, fontWeight:300 }}>{stat.desc}</p>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
