'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { num: '1', title: 'Cadastre sua empresa', desc: 'Crie sua conta e configure as informações básicas do seu negócio.' },
  { num: '2', title: 'Configure os serviços', desc: 'Adicione seus serviços, duração e valores de forma simples.' },
  { num: '3', title: 'Cadastre clientes', desc: 'Importe ou cadastre sua base de clientes rapidamente.' },
  { num: '4', title: 'Comece a agendar', desc: 'Realize agendamentos de forma rápida e profissional.' },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="como-funciona" style={{ padding: '5.5rem 2rem', background: '#fff' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}
        >
          <div className="section-label">Passo a passo</div>
          <h2 className="section-title">Como funciona</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Comece em minutos. Configure uma vez, use para sempre.
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            marginTop: '4rem',
            position: 'relative',
          }}
        >
          {/* Connecting line */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: '28px',
              left: '12.5%',
              right: '12.5%',
              height: '2px',
              background: 'linear-gradient(90deg, var(--border-2), var(--accent-3), var(--border-2))',
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ textAlign: 'center', padding: '0 0.75rem', position: 'relative', zIndex: 1 }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: '#fff',
                  border: '2px solid var(--accent-3)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  margin: '0 auto 1.25rem',
                  boxShadow: '0 0 0 6px var(--accent-light)',
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  marginBottom: '0.4rem',
                  color: 'var(--text)',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 300 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
