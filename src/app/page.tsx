import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SystemDemo from '@/components/SystemDemo';
import Benefits from '@/components/Benefits';
import { Quote, CTA, Footer } from '@/components/FooterCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div style={{ height: '1px', background: 'var(--border)' }} />
        <About />
        <div style={{ height: '1px', background: 'var(--border)' }} />
        <SystemDemo />
        <div style={{ height: '1px', background: 'var(--border)' }} />
        <Benefits />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
