import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'FortitudeSistym — Gestão de Agendamentos',
  description:
    'Plataforma moderna para organizar serviços, clientes e compromissos de forma simples, rápida e eficiente.',
  keywords: ['agendamento', 'gestão', 'saas', 'sistema', 'clientes', 'serviços'],
  openGraph: {
    title: 'FortitudeSistym',
    description: 'Transforme sua gestão de agendamentos.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
