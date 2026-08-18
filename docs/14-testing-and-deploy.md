# 14. Testing and Deploy

## Testes

O site deve ter cobertura mínima nas áreas que mantêm a experiência confiável.

### Tipos de validação

- lint
- typecheck
- testes de conteúdo
- checagem de links
- validação de acessibilidade
- verificação visual dos principais estados

## O que validar

- páginas principais carregam
- alternância PT/EN funciona
- CTAs levam aos destinos corretos
- currículo baixa corretamente
- cards de projeto abrem como esperado
- seção RDS comunica a proposta corretamente

## Deploy

### Plataforma

Cloudflare Pages.

### Critério

- preview por branch
- deploy de produção após validação
- ambiente simples de manter

### Regras

- não depender de configuração manual complexa para publicar
- manter variáveis de ambiente sob controle
- documentar qualquer integração externa

## Checklist de pré-lançamento

- conteúdo revisado
- links testados
- imagem social pronta
- sitemap e robots revisados
- performance aceitável
- acessibilidade básica verificada

