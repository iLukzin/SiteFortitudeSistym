export default function SystemMockup() {
  const events = [
    { time: '08:30', name: 'Maria Souza — Consulta', status: 'Confirmado', statusColor: '#15803D', statusBg: '#DCFCE7', borderColor: 'var(--accent-3)' },
    { time: '09:15', name: 'João Pereira — Serviço B', status: 'Andamento', statusColor: '#92400E', statusBg: '#FEF3C7', borderColor: '#D97706' },
    { time: '10:00', name: 'Ana Lima — Avaliação', status: 'Aguardando', statusColor: '#5B21B6', statusBg: '#EDE9FE', borderColor: '#7C3AED' },
  ];

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md), 0 0 0 1px rgba(37,99,235,0.05)',
        animation: 'floatUp 6s ease-in-out infinite',
      }}
    >
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Window Bar */}
      <div
        style={{
          background: 'var(--bg-2)',
          padding: '0.65rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {['#FF5F57', '#FEBC2E', '#28C840'].map((color) => (
          <div key={color} style={{ width: 9, height: 9, borderRadius: '50%', background: color }} />
        ))}
        <div
          style={{
            flex: 1,
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: '5px',
            padding: '0.25rem 0.65rem',
            fontSize: '0.72rem',
            color: 'var(--text-3)',
            fontFamily: 'monospace',
            marginLeft: '0.5rem',
          }}
        >
          app.fortitudesistym.com.br
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 600 }}>
            Painel · Segunda-feira
          </span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>07 jun 2025</span>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
          {[{ val: '24', lbl: 'Agendados' }, { val: '18', lbl: 'Concluídos' }, { val: '6', lbl: 'Pendentes' }].map(
            (stat) => (
              <div
                key={stat.lbl}
                style={{
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '7px',
                  padding: '0.55rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--accent)' }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-3)', marginTop: '0.1rem' }}>{stat.lbl}</div>
              </div>
            )
          )}
        </div>

        {/* Agenda */}
        <div
          style={{
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '0.65rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}
        >
          {events.map((ev) => (
            <div
              key={ev.time}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.35rem 0.55rem',
                background: '#fff',
                borderRadius: '5px',
                borderLeft: `3px solid ${ev.borderColor}`,
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}
            >
              <span style={{ fontSize: '0.62rem', color: 'var(--text-3)', minWidth: '34px', fontFamily: 'monospace' }}>
                {ev.time}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-2)' }}>{ev.name}</span>
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: '0.58rem',
                  padding: '0.12rem 0.35rem',
                  borderRadius: '4px',
                  background: ev.statusBg,
                  color: ev.statusColor,
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                {ev.status}
              </span>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div
          style={{
            height: '38px',
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            borderRadius: '7px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '80%',
              background: 'linear-gradient(0deg, rgba(37,99,235,0.10), transparent)',
              clipPath: 'polygon(0 100%, 0 65%, 10% 45%, 20% 60%, 30% 35%, 45% 55%, 60% 25%, 75% 40%, 90% 20%, 100% 30%, 100% 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              left: 0,
              right: 0,
              height: '1.5px',
              background: 'linear-gradient(90deg, transparent, var(--accent-3), var(--accent))',
              opacity: 0.7,
            }}
          />
        </div>
      </div>
    </div>
  );
}
