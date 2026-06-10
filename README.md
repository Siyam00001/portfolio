# hire_siyam_haider.workflow

**Siyam Haider's portfolio — built as a living workflow editor.**

I build AI automation pipelines for a living, so my portfolio *is* one. Visitors land
inside an n8n-style node canvas where my career is wired up as an executable workflow:
a webhook trigger fires on arrival, data packets flow through my experience, projects
and skills, and every branch converges on a single final node — `hire_siyam`.

## Features

- 🗺️ **Interactive node canvas** — pan, zoom, and drag nodes around; the wires follow
- ▶️ **Execute workflow** — watch a run light up the graph layer by layer, with packets
  travelling the wires, live console logs, and green checkmarks
- 🔍 **Node inspector** — click any node for details, including a JSON `Output` tab
- 🤖 **AI twin** — a Gemini-powered agent trained on my resume; ask it anything about
  my work (served via a Vercel serverless function, key stays server-side)
- 🔢 **Real run counter** — every visit executes the workflow and increments a shared
  global counter
- 📄 **Résumé view** — a clean, readable fallback (default on mobile)

## Stack

Vanilla HTML / CSS / JavaScript — no frameworks, no build step.
One serverless function (`api/chat.js`) proxies chat requests to the Gemini API.

```
index.html      markup
styles.css      all styling
script.js       node-graph engine, execution animation, chat UI
api/chat.js     Gemini proxy (Vercel serverless function)
cv.md           the resume the workflow is generated from
```

## Run locally

It's a static site — open `index.html` in a browser, or for the AI chat to work:

```bash
npm i -g vercel
vercel dev
```

## Deploy

1. Import this repo on [vercel.com](https://vercel.com/new)
2. Add an environment variable: `GEMINI_API_KEY` = your [Gemini API key](https://aistudio.google.com/)
3. Deploy

## Contact

**Siyam Haider** — AI Automation Engineer
[Siyamhaider786@gmail.com](mailto:Siyamhaider786@gmail.com) ·
[LinkedIn](https://linkedin.com/in/siyam-haider) ·
[GitHub](https://github.com/Siyam00001)
