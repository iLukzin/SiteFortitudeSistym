# FortitudeSistym — Site Institucional

Site institucional da FortitudeSistym, desenvolvido em Next.js 14 com Framer Motion.

## Tecnologias

- **Next.js 14** — App Router
- **TypeScript** — tipagem estática
- **Framer Motion** — animações suaves
- **CSS Variables** — design tokens consistentes
- Google Fonts: Sora + DM Sans

## Estrutura de Componentes

```
src/
├── app/
│   ├── layout.tsx        # Layout raiz + metadados SEO
│   └── page.tsx          # Página principal (monta todos os componentes)
├── components/
│   ├── Navbar.tsx         # Navegação fixa com scroll detection
│   ├── Hero.tsx           # Seção hero com badge animado e botões CTA
│   ├── SystemMockup.tsx   # Mockup flutuante do sistema (usado no Hero)
│   ├── About.tsx          # Quem somos + chips + cards de métricas
│   ├── SystemDemo.tsx     # 5 cards de demonstração do sistema
│   ├── Benefits.tsx       # Grid de 6 benefícios
│   ├── HowItWorks.tsx     # Timeline de 4 etapas
│   └── FooterCTA.tsx      # Quote, CTA final e Footer
└── styles/
    └── globals.css        # Design tokens (CSS variables) + estilos base
```

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm start
```

## Deploy na Vercel

1. Faça push do projeto para o GitHub
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Deploy automático — zero configuração necessária

## Integrações futuras

O projeto está preparado para integração com:
- **Supabase** — banco de dados e autenticação
- **Resend** — envio de e-mails transacionais
- **Zod** — validação de formulários
