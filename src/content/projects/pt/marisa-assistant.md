---
title: Marisa Assistant
locale: pt
translationKey: marisa-assistant
summary: Assistente pessoal no Telegram que interpreta pedidos em linguagem natural, organiza despesas e cria eventos com integrações reais.
eyebrow: Automação pessoal com IA
category: Assistente de IA
stack: [Python, FastAPI, Gemini, Telegram, Supabase, CalDAV]
featured: true
repo: https://github.com/cauarocha1/marisa-assistant
live: https://marisa-assistant.onrender.com/
order: 2
---

O Marisa Assistant foi criado para unir organização acadêmica e controle financeiro em uma conversa simples pelo Telegram. O Gemini interpreta cada pedido e aciona somente as operações permitidas pelo agente.

A aplicação registra e consulta despesas no Supabase, mantém histórico recente de conversa e cria eventos no calendário CalDAV configurado. Valores, categorias, datas e campos obrigatórios são normalizados antes de qualquer gravação, e o webhook permanece restrito ao usuário autorizado.

O backend em FastAPI foi publicado no Render e conta com endpoint de saúde, tratamento seguro de falhas e documentação operacional. A suíte atual possui 20 testes e passa por verificação estrita de tipos e lint. A integração específica com listas de Lembretes do iCloud permanece documentada como limitação conhecida.
