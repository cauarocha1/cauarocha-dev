---
title: Marisa Assistant
locale: en
translationKey: marisa-assistant
summary: A Telegram personal assistant that understands natural-language requests, organizes expenses, and creates calendar events through real integrations.
eyebrow: AI personal automation
category: AI assistant
stack: [Python, FastAPI, Gemini, Telegram, Supabase, CalDAV]
featured: true
repo: https://github.com/cauarocha1/marisa-assistant
live: https://marisa-assistant.onrender.com/
order: 2
---

Marisa Assistant was created to bring academic organization and personal finance into a simple Telegram conversation. Gemini interprets each request and invokes only the operations explicitly allowed by the agent.

The application records and queries expenses in Supabase, keeps recent conversation history, and creates events in the configured CalDAV calendar. Amounts, categories, dates, and required fields are normalized before any write, while the webhook remains restricted to the authorized user.

The FastAPI backend is deployed on Render and includes a health endpoint, safe failure handling, and operational documentation. Its current suite contains 20 tests and passes strict type checking and linting. Direct integration with iCloud Reminders lists remains documented as a known limitation.
