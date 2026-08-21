---
title: Cauã AI
locale: pt
translationKey: caua-ai
summary: Assistente de IA fundamentado no conhecimento público do portfólio, com RAG, streaming e widget web integrado.
eyebrow: Plataforma de IA & produto digital
category: IA aplicada
stack: [Python, FastAPI, Gemini, RAG, PostgreSQL, React]
featured: true
imageFit: contain
images:
  - src: /images/projects/caua-ai/widget-launcher.png
    alt: Widget Cauã AI aberto sobre o portfólio com a interface de terminal e o botão de acesso.
  - src: /images/projects/caua-ai/widget-conversation.png
    alt: Conversa do Cauã AI exibindo uma resposta fundamentada com fontes públicas do portfólio.
order: 4
---

Cauã AI é o assistente virtual do próprio portfólio. O projeto transforma o conteúdo público de Cauã Rocha em uma experiência conversacional, capaz de explicar projetos, experiências e serviços com base em fontes revisadas — sem depender de respostas soltas ou de uma busca aberta.

Por trás do widget existe um core universal em Python com API FastAPI versionada, sessões persistidas em PostgreSQL, streaming por SSE, limite de requisições e proteção por token de cliente. A identidade e o conhecimento do agente ficam separados do core, o que permite evoluir a plataforma sem acoplar as regras do portfólio à infraestrutura.

O pipeline de RAG combina busca semântica e textual, mantém a proveniência dos trechos e devolve citações públicas. O Gemini é usado como provider configurável no backend; a chave permanece exclusivamente na infraestrutura e nunca é enviada ao navegador.

Na frente, o widget React/TypeScript usa uma interface inspirada em terminal, carregamento sob demanda, sugestões de perguntas, streaming, sessões e fontes clicáveis. O mesmo contrato pode atender o site e futuras aplicações sem recriar a camada de conversa.
