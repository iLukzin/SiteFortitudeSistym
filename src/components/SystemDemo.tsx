'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const demoCards = [
  {
    icon: '📅',
    title: 'Agenda Principal',
    desc: 'Visualização diária com horários organizados e status de atendimento em tempo real.',
    screen: <AgendaScreen />,
  },
  {
    icon: '👥',
    title: 'Cadastro de Clientes',
    desc: 'Gerenciamento completo de clientes com informações rápidas e organizadas.',
    screen: <ClientsScreen />,
  },
  {
    icon: '🛠️',
    title: 'Cadastro de Serviços',
    desc: 'Configuração de serviços, duração e valores de forma simples e organizada.',
    screen: <ServicesScreen />,
  },
  {
    icon: '⚙️',
    title: 'Painel Administrativo',
    desc: 'Controle geral com acesso rápido às principais funcionalidades da empresa.',
    screen: <AdminScreen />,
  },
  {
    icon: '📊',
    title: 'Relatórios',
    desc: 'Acompanhamento de agendamentos e indicadores para melhor tomada de decisão.',
    screen: <ReportsScreen />,
  },
];

function AgendaScreen() {
  const rows = [
    { w: '65%', badge: 'Confirmado', bg: '#DCFCE7', color: '#15803D' },
    { w: '50%', badge: 'Aguardando', bg: '#FEF3C7', color: '#92400E' },
    { w: '60%', badge: 'Andamento', bg: '#DBEAFE', color: '#1D4ED8' },
    { w: '45%', badge: 'Confirmado', bg: '#DCFCE7', color: '#15803D' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          <div style={{ width: '36px', height: '7px', borderRadius: '4px', background: '#BFDBFE', flexShrink: 0 }} />
          <div style={{ height: '7px', borderRadius: '4px', background: 'var(--border)', width: r.w }} />
          <span style={{ marginLeft: 'auto', fontSize: '0.58rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: r.bg, color: r.color, fontWeight: 600, whiteSpace: 'nowrap' }}>{r.badge}</span>
        </div>
      ))}
    </div>
  );
}

function ClientsScreen() {
  const clients = [
    { initials: 'MS', bg: '#DBEAFE', color: '#1D4ED8', lineBg: '#BFDBFE' },
    { initials: 'JP', bg: '#FEF3C7', color: '#92400E', lineBg: '#FDE68A' },
    { initials: 'AL', bg: '#EDE9FE', color: '#5B21B6', lineBg: '#DDD6FE' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
      {clients.map((c) => (
        <div key={c.initials} style={{ display: 'flex', alignItems: 'center', gap: '7px', background: '#fff', borderRadius: '5px', padding: '5px 7px', border: '1px solid var(--border)' }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: c.color, fontWeight: 700, flexShrink: 0 }}>{c.initials}</div>
          <div>
            <div style={{ height: '6px', width: '80px', borderRadius: '4px', background: 'var(--border)', marginBottom: '3px' }} />
            <div style={{ height: '5px', width: '55px', borderRadius: '4px', background: c.lineBg }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ServicesScreen() {
  const rows = [{ w: '75px' }, { w: '88px' }, { w: '62px' }];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {rows.map((r, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: '5px', padding: '5px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--border)' }}>
          <div style={{ height: '6px', width: r.w, borderRadius: '4px', background: 'var(--border)' }} />
          <div style={{ display: 'flex', gap: '5px' }}>
            <div style={{ height: '6px', width: '28px', borderRadius: '4px', background: '#BFDBFE' }} />
            <div style={{ height: '6px', width: '24px', borderRadius: '4px', background: '#BBF7D0' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function AdminScreen() {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', marginBottom: '6px' }}>
        {[{ val: '147', lbl: 'Este mês', color: 'var(--accent)' }, { val: '96%', lbl: 'Taxa atend.', color: '#16A34A' }].map((s) => (
          <div key={s.lbl} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '5px', padding: '7px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: '0.58rem', color: 'var(--text-3)' }}>{s.lbl}</div>
          </div>
        ))}
      </div>
      {[['100%', 'var(--border)'], ['80%', '#BFDBFE'], ['65%', '#BBF7D0']].map(([w, bg], i) => (
        <div key={i} style={{ height: '7px', width: w, borderRadius: '4px', background: bg, marginBottom: '4px' }} />
      ))}
    </div>
  );
}

function ReportsScreen() {
  const bars = [38, 52, 33, 68, 55, 80];
  const opacity = [0.25, 0.35, 0.2, 0.45, 0.38, 0.8];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '80px', paddingBottom: '4px' }}>
      {bars.map((h, i) => (
        <div key={i} style={{ flex: 1, borderRadius: '3px 3px 0 0', background: `rgba(37,99,235,${opacity[i]})`, height: `${h}px` }} />
      ))}
    </div>
  );
}

export default function SystemDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sistema" style={{ padding: '5.5rem 2rem' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="section-label">Demonstração</div>
          <h2 className="section-title">Veja o sistema em ação</h2>
          <p className="section-sub">
            Telas intuitivas e organizadas, pensadas para facilitar o trabalho da sua equipe no dia a dia.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.25rem',
            marginTop: '3rem',
          }}
        >
          {demoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                transition: 'all 0.3s',
                cursor: 'default',
              }}
              whileHover={{
                y: -5,
                boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                borderColor: 'var(--border-2)',
              }}
            >
              {/* Header */}
              <div
                style={{
                  background: 'var(--bg-2)',
                  padding: '0.9rem 1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: 'var(--accent-light)',
                    borderRadius: '7px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.95rem',
                  }}
                >
                  {card.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.87rem', fontWeight: 600 }}>
                  {card.title}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '1.1rem' }}>
                <div
                  style={{
                    background: 'var(--bg-2)',
                    borderRadius: '9px',
                    padding: '0.9rem',
                    marginBottom: '0.9rem',
                    minHeight: '110px',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  {card.screen}
                </div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 300 }}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
