---
title: Cauã AI
locale: en
translationKey: caua-ai
summary: An AI assistant grounded in the portfolio's public knowledge, with RAG, streaming, and an integrated web widget.
eyebrow: AI platform & digital product
category: Applied AI
stack: [Python, FastAPI, Gemini, RAG, PostgreSQL, React]
featured: true
imageFit: contain
images:
  - src: /images/projects/caua-ai/architecture.svg
    alt: Visual map of the Cauã AI architecture, from the portfolio widget to RAG, Gemini, and PostgreSQL.
  - src: /images/projects/caua-ai/widget-preview.svg
    alt: Visual preview of the Cauã AI widget in a terminal-inspired interface.
order: 4
---

Cauã AI is the portfolio's own virtual assistant. The project turns Cauã Rocha's public content into a conversational experience that can explain projects, experience, and services from reviewed sources instead of relying on unsupported answers or open web search.

Behind the widget is a universal Python core with a versioned FastAPI, PostgreSQL-backed sessions, SSE streaming, rate limiting, and client-token protection. The agent's identity and knowledge stay separate from the core, allowing the platform to evolve without coupling portfolio rules to the infrastructure.

Its RAG pipeline combines semantic and keyword retrieval, preserves passage provenance, and returns public citations. Gemini is a configurable backend provider; its key remains exclusively in the infrastructure and is never sent to the browser.

On the frontend, the React/TypeScript widget uses a terminal-inspired interface, lazy loading, question suggestions, streaming, sessions, and clickable sources. The same contract can serve the site and future applications without rebuilding the conversation layer.
