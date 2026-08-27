# cauarocha.dev

Portfólio oficial de Cauã Rocha, construído com Astro, TypeScript, Tailwind CSS, Content Collections e conteúdo PT/EN.

## Desenvolvimento

Requisitos: Node.js 20+ e pnpm.

```bash
pnpm install
pnpm dev
```

## Validação

```bash
pnpm check
pnpm build
```

O resultado estático é gerado em `dist/`.

## Cloudflare Pages

- Build command: `pnpm build`
- Build output directory: `dist`
- Node.js: 20 ou superior
- Domínio de produção: `cauarocha.dev`

Os headers de segurança e cache ficam em `public/_headers`.

## Conteúdo

Os projetos vivem em `src/content/projects/{pt,en}`. Um projeto só deve receber cargo, período, cliente ou impacto quando esses dados estiverem confirmados. Os destaques atuais são Cauã AI, Marisa Assistant e Auto Escola Poderosa.

## Pendências editoriais

- imagens adicionais do Marisa Assistant e da Jornada dos Sonhos
- credencial e provedor final de analytics
- detalhes adicionais de cases aprovados para publicação
