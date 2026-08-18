# 05. Technical Architecture

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Content Collections
- MD/MDX
- i18n PT/EN
- Cloudflare Pages

## Direção técnica

O site deve ser estático ou quase estático por padrão, com conteúdo orientado a arquivos.

## Por que essa stack

- Astro favorece páginas rápidas e conteúdo-first.
- TypeScript reduz ambiguidade.
- Tailwind agiliza consistência visual.
- Content Collections ajudam a estruturar projetos, serviços e páginas editoriais.
- MD/MDX permite documentação e cases com boa manutenção.
- Cloudflare Pages simplifica entrega e preview.

## Estrutura sugerida

- `src/content/` para coleções
- `src/pages/` para rotas
- `src/components/` para componentes reutilizáveis
- `src/styles/` para tokens e base visual
- `public/` para assets estáticos

## Decisão de arquitetura

O site deve evitar complexidade desnecessária.
Não é um app pesado.
É um portfólio editorial e comercial com foco em navegação rápida.

## Princípios

- baixo acoplamento
- conteúdo versionável
- componentes pequenos
- sem dependência de estado global desnecessário

