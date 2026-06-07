'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  { icon:'🗂️', title:'Organização Total',     desc:'Centralize todos os seus agendamentos em um único lugar, com visibilidade clara e acesso instantâneo.' },
  { icon:'⚡', title:'Economia de Tempo',     desc:'Automatize processos repetitivos e reduza tarefas manuais para focar no que realmente importa.' },
  { icon:'🎯', title:'Fácil Utilização',      desc:'Interface intuitiva e acessível para toda equipe, sem necessidade de treinamentos complexos.' },
  { icon:'🔐', title:'Segurança',             desc:'Seus dados protegidos com infraestrutura moderna, criptografada e monitorada continuamente.' },
  { icon:'🌍', title:'Acesso Online',         desc:'Gerencie sua empresa de qualquer lugar, a qualquer hora, por computador ou celular.' },
  { icon:'🚀', title:'Evolução Constante',    desc:'Melhorias e atualizações frequentes da plataforma, acompanhando as necessidades do mercado.' },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="beneficios" style={{ padding:'clamp(3rem,8vw,5.5rem) clamp(1rem,4vw,2rem)', background:'var(--bg-2)' }}>
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.65 }}
          style={{ textAlign:'center', maxWidth:'540px', margin:'0 auto 0.5rem' }}
        >
          <div className="section-label">Vantagens</div>
          <h2 className="section-title">Por que escolher a FortitudeSistym?</h2>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6, delay: i*0.07 }}
              style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:'14px', padding:'clamp(1.25rem,3vw,1.6rem)', boxShadow:'0 1px 3px rgba(0,0,0,.05)', transition:'all 0.25s', cursor:'default' }}
              whileHover={{ y:-3, boxShadow:'var(--shadow)', borderColor:'var(--border-2)' }}
            >
              <div style={{ width:40, height:40, background:'var(--accent-light)', borderRadius:'9px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.15rem', marginBottom:'1rem' }}>{b.icon}</div>
              <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(0.88rem,2vw,0.95rem)', fontWeight:600, marginBottom:'0.45rem', color:'var(--text)' }}>{b.title}</h3>
              <p style={{ fontSize:'clamp(0.8rem,2vw,0.84rem)', color:'var(--text-2)', lineHeight:1.7, fontWeight:300 }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
