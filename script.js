/* ============================================================
   SIYAM HAIDER — portfolio as a living workflow editor
   vanilla JS node-graph engine, no dependencies
   ============================================================ */
"use strict";

/* ============================================================
   1. WORKFLOW DATA
   ============================================================ */
const C = {
  trigger: "var(--c-trigger)",
  sw: "var(--c-switch)",
  work: "var(--c-work)",
  proj: "var(--c-project)",
  ai: "var(--c-ai)",
  data: "var(--c-data)",
  out: "var(--c-out)",
};

const NODES = [
  {
    id: "visitor", x: 470, y: 600, icon: "⚡", accent: C.trigger,
    title: "Visitor lands", sub: "Webhook · POST /you-found-me",
    desc: "Trigger fires when <b>you</b> open this page. Welcome to the pipeline.",
    params: `
      <h4>What is this?</h4>
      <p>Siyam builds automation workflows for a living — so instead of a scrolling
      portfolio, you're standing <b>inside one</b>. Every node is a piece of his career.</p>
      <h4>How to use</h4>
      <ul>
        <li><b>Drag</b> the canvas to pan, <b>scroll</b> to zoom</li>
        <li><b>Click nodes</b> to inspect them (check the Output tab)</li>
        <li>Hit <b>▶ Execute workflow</b> in the top bar and watch the run</li>
        <li>Open the <b>SIYA</b> agent node and interrogate it about Siyam</li>
      </ul>`,
    output: { event: "visitor.landed", method: "POST", visitor: { role: "hopefully_a_recruiter", intent: "evaluate(siyam)" }, status: 200, latency_ms: 12 },
  },
  {
    id: "router", x: 790, y: 600, icon: "🔀", accent: C.sw,
    title: "What are you here for?", sub: "Switch · 4 outputs",
    desc: "Routes you to <b>experience</b>, <b>projects</b>, <b>skills</b> — or straight to the agent.",
    params: `
      <h4>Routing rules</h4>
      <ul>
        <li>output[0] → <b>experience</b> — 2 AI engineering roles</li>
        <li>output[1] → <b>projects</b> — 8 production systems</li>
        <li>output[2] → <b>skills &amp; education</b></li>
        <li>output[3] → <b>SIYA</b>, the resident AI agent</li>
      </ul>
      <p>All branches eventually converge on the same node: <b>hire_siyam</b>.
      That's not a bug.</p>`,
    output: { mode: "rules", outputs: 4, fallback: "hire_siyam", note: "all_roads_lead_to_the_offer" },
  },
  {
    id: "sirkup", x: 1130, y: 280, icon: "🧪", accent: C.work,
    title: "SirkupAI", sub: "AI Engineer · Jun–Nov 2025",
    desc: "First production lab: <b>n8n + GenAI</b> automation, custom agents, API glue.",
    params: `
      <h4>AI Engineer — SirkupAI, Islamabad</h4>
      <p><b>Jun 2025 – Nov 2025</b></p>
      <ul>
        <li>Built and deployed end-to-end AI automation with <b>n8n</b> and generative AI tooling</li>
        <li>Developed custom AI agents &amp; GPT-based workflows; integrated APIs for seamless automation</li>
        <li>Shipped AI-driven solutions across multiple projects in <b>Python, FastAPI &amp; Django</b></li>
      </ul>
      <div class="tagrow"><span>n8n</span><span>Python</span><span>FastAPI</span><span>Django</span><span>GenAI</span></div>`,
    output: { company: "SirkupAI", role: "AI Engineer", period: ["2025-06", "2025-11"], stack: ["n8n", "Python", "FastAPI", "Django"], shipped: "production_automation" },
  },
  {
    id: "marson", x: 1450, y: 280, icon: "💼", accent: C.work,
    title: "Marson Media", sub: "AI Engineer · Nov 2025–Apr 2026",
    desc: "End-to-end automation: <b>n8n, Zapier</b>, custom APIs, GPT workflows at scale.",
    params: `
      <h4>AI Engineer — Marson Media, Islamabad</h4>
      <p><b>Nov 2025 – Apr 2026</b></p>
      <ul>
        <li>Designed &amp; deployed end-to-end automation integrating <b>n8n, Zapier</b> and custom APIs</li>
        <li>Built scalable AI apps and GPT workflows across <b>Node.js, React, Python, FastAPI</b></li>
        <li>Engineered custom AI agents + backend architectures bridging GenAI with real systems</li>
      </ul>
      <div class="tagrow"><span>n8n</span><span>Zapier</span><span>Node.js</span><span>React</span><span>FastAPI</span></div>`,
    output: { company: "Marson Media", role: "AI Engineer", period: ["2025-11", "2026-04"], stack: ["n8n", "Zapier", "Node.js", "React", "Python", "FastAPI"] },
  },
  {
    id: "loop", x: 1130, y: 600, icon: "🔁", accent: C.sw,
    title: "Loop over projects", sub: "Split In Batches · 8 items",
    desc: "Fans out into <b>8 systems</b> that actually shipped.",
    params: `
      <h4>Batch contents</h4>
      <p>Eight production systems: voice AI at <b>100 concurrent calls</b>, a forensic
      engine chewing <b>30+ GB mailboxes</b>, an agent that writes <b>50-page research
      reports</b>, and more. Click each project node to inspect it.</p>`,
    output: { items: 8, batch_size: 1, items_list: ["medicare", "ucf101", "voicescape", "deep_researcher", "contentwell", "mail_forensic", "finance_tracker", "emma"] },
  },
  {
    id: "p_medicare", x: 1450, y: 520, icon: "📞", accent: C.proj, compact: true,
    title: "Medicare — Voice AI", sub: "Python · 100 concurrent calls",
    params: `
      <h4>Real-time voice AI at scale</h4>
      <p>A <b>voice AI agent system</b> handling real-time, two-way audio conversations.
      Siyam built an <b>audio bridge server</b> that redirects live call streams from a
      VICI dialer and <b>Asterisk PBX</b> into the AI pipeline.</p>
      <ul>
        <li>Optimized for <b>100 concurrent calls</b></li>
        <li>Low latency, high reliability — on real phone infrastructure</li>
      </ul>
      <div class="tagrow"><span>Python</span><span>Asterisk</span><span>VICIdial</span><span>Realtime audio</span></div>
      <a class="ins-link" href="http://135.181.27.156:8000/static/index.html" target="_blank" rel="noopener">Open live demo ↗</a>`,
    output: { name: "medicare_voice_ai", concurrent_calls: 100, telephony: ["VICIdial", "Asterisk PBX"], audio: "two_way_realtime", status: "live" },
  },
  {
    id: "p_ucf", x: 1690, y: 520, icon: "🎞️", accent: C.proj, compact: true,
    title: "Video Prediction", sub: "PyTorch · UCF101",
    params: `
      <h4>Predicting the next frame</h4>
      <p>High-performance deep learning models — <b>Transformers, ConvLSTM, RNNs</b> —
      trained to predict sequential video frames on UCF101.</p>
      <ul>
        <li>Custom <b>spatio-temporal architectures</b> in PyTorch &amp; TensorFlow</li>
        <li>Motion-dynamics capture, OpenCV visualization</li>
      </ul>
      <div class="tagrow"><span>PyTorch</span><span>TensorFlow</span><span>ConvLSTM</span><span>OpenCV</span></div>`,
    output: { name: "video_prediction_ucf101", models: ["Transformer", "ConvLSTM", "RNN"], frameworks: ["PyTorch", "TensorFlow"], task: "next_frame_prediction" },
  },
  {
    id: "p_voicescape", x: 1930, y: 520, icon: "📣", accent: C.proj, compact: true,
    title: "Voice Scape", sub: "Node.js · live",
    params: `
      <h4>AI outbound, end to end</h4>
      <p>Node.js platform for <b>AI-driven email campaigns</b> with integrated lead
      management — <b>HubSpot sequences</b> and <b>Cognism enrichment</b> upgrade lead
      data before ingestion, AI generates the content.</p>
      <div class="tagrow"><span>Node.js</span><span>HubSpot</span><span>Cognism</span><span>AI content</span></div>
      <a class="ins-link" href="https://voicescape.onrender.com" target="_blank" rel="noopener">Visit ↗</a>`,
    output: { name: "voicescape", platform: "Node.js", enrichment: "Cognism", crm: "HubSpot", url: "voicescape.onrender.com", status: "live" },
  },
  {
    id: "p_researcher", x: 2170, y: 520, icon: "🔎", accent: C.proj, compact: true,
    title: "Deep Researcher", sub: "n8n agent · 50+ pages",
    params: `
      <h4>An agent that does the reading</h4>
      <p>Autonomous <b>n8n research system</b> that fans out across subtopics, conducts
      deep web research, and compiles a <b>50+ page report</b> — with verified, working
      references. Not hallucinated ones.</p>
      <div class="tagrow"><span>n8n</span><span>Agents</span><span>Web research</span><span>Citations</span></div>`,
    output: { name: "deep_researcher", engine: "n8n", report_pages: "50+", references: "verified_working", hallucinations: 0 },
  },
  {
    id: "p_contentwell", x: 1450, y: 680, icon: "🪄", accent: C.proj, compact: true,
    title: "Content Well", sub: "GenAI · live",
    params: `
      <h4>Marketing on autopilot</h4>
      <p>Multi-channel campaign automation: AI-generated <b>social posts, website
      architectures and video scripts</b>, with <b>dynamic image generation</b> and
      structured data handling to kill manual content production.</p>
      <div class="tagrow"><span>GenAI</span><span>Image generation</span><span>Vercel</span></div>
      <a class="ins-link" href="https://contentwell.vercel.app" target="_blank" rel="noopener">Visit ↗</a>`,
    output: { name: "contentwell", channels: ["social", "web", "video"], image_gen: "dynamic", url: "contentwell.vercel.app", status: "live" },
  },
  {
    id: "p_forensic", x: 1690, y: 680, icon: "🕵️", accent: C.proj, compact: true,
    title: "Mail Forensic System", sub: "Python · 30+ GB MBOX",
    params: `
      <h4>Big evidence, small hardware</h4>
      <p>High-performance forensic engine in <b>Python</b> that processes <b>30+ GB MBOX
      files on low-end hardware</b> — optimized database memory management and
      multithreading doing the heavy lifting.</p>
      <div class="tagrow"><span>Python</span><span>Multithreading</span><span>DB optimization</span><span>Forensics</span></div>`,
    output: { name: "mail_forensic", input: "mbox", max_tested_gb: "30+", hardware: "low_end", technique: ["memory_mgmt", "multithreading"] },
  },
  {
    id: "p_finance", x: 1930, y: 680, icon: "📊", accent: C.proj, compact: true,
    title: "Finance Tracker", sub: "React + n8n",
    params: `
      <h4>Cash flow, visible</h4>
      <p>Internal finance tracking system in <b>React + n8n</b> — automated ingestion
      pipelines for recurring financial inputs, and real-time dashboards for revenue
      and cash-flow trends.</p>
      <div class="tagrow"><span>React</span><span>n8n</span><span>Dashboards</span><span>Pipelines</span></div>`,
    output: { name: "finance_tracker", frontend: "React", automation: "n8n", dashboards: "realtime", tracks: ["revenue", "cash_flow"] },
  },
  {
    id: "p_emma", x: 2170, y: 680, icon: "🏛️", accent: C.proj, compact: true,
    title: "EMMA Pipeline", sub: "Python · bond data",
    params: `
      <h4>Municipal bonds → CRM, hands-free</h4>
      <p>Python pipeline scraping <b>municipal bond data</b>, automating secure uploads
      to <b>Egnyte</b> and ingestion into <b>Zoho CRM</b> — enriched via <b>Apollo</b>
      with AI-driven validation on top.</p>
      <div class="tagrow"><span>Python</span><span>Egnyte</span><span>Zoho CRM</span><span>Apollo</span></div>`,
    output: { name: "emma_pipeline", source: "municipal_bond_data", storage: "Egnyte", crm: "Zoho", enrichment: "Apollo", validation: "ai_driven" },
  },
  {
    id: "skills", x: 1130, y: 950, icon: "🗂️", accent: C.data,
    title: "skills_index", sub: "Vector Store · 34 embeddings",
    desc: "The full arsenal: languages, AI APIs, databases, tooling.",
    params: `
      <h4>Languages &amp; frameworks</h4>
      <div class="tagrow"><span>Python</span><span>TypeScript</span><span>JavaScript</span><span>Node.js</span><span>FastAPI</span><span>C</span><span>C++</span><span>HTML/CSS</span></div>
      <h4>AI &amp; integrations</h4>
      <div class="tagrow"><span>Gemini</span><span>OpenAI</span><span>Anthropic</span><span>VAPI</span><span>Twilio</span><span>Asterisk</span><span>HubSpot</span><span>Zoho CRM</span><span>Airtable</span><span>Egnyte</span><span>Apollo</span><span>Cognism</span><span>Tavily</span><span>Apify</span></div>
      <h4>Databases</h4>
      <div class="tagrow"><span>PostgreSQL</span><span>Supabase</span><span>Pinecone</span><span>BigQuery</span><span>Firestore</span><span>SQLite</span></div>
      <h4>Tools</h4>
      <div class="tagrow"><span>n8n</span><span>Zapier</span><span>Git/GitHub</span><span>Cursor AI</span><span>Hugging Face</span><span>Colab</span><span>VS Code</span></div>`,
    output: { store: "skills_index", dims: 1536, top_k_sample: ["python", "n8n", "fastapi", "voice_ai", "rag", "pinecone"], total: 34 },
  },
  {
    id: "education", x: 1450, y: 950, icon: "🎓", accent: C.data,
    title: "FAST NUCES", sub: "BS Computer Science · 2021–25",
    desc: "Degree + <b>agentic AI</b> and <b>forensics</b> certifications.",
    params: `
      <h4>Education</h4>
      <p><b>BS Computer Science</b> — FAST NUCES · Aug 2021 – Jun 2025</p>
      <h4>Certifications</h4>
      <ul>
        <li><b>Watsonx Orchestrate</b> — Business Automation in the Age of Agentic AI</li>
        <li><b>BelkaSoft Android Forensics</b> — digital forensics &amp; analysis</li>
      </ul>`,
    output: { degree: "BS Computer Science", school: "FAST NUCES", years: [2021, 2025], certs: ["Watsonx Orchestrate — Agentic AI", "BelkaSoft Android Forensics"] },
  },
  {
    id: "siya", x: 790, y: 950, icon: "🤖", accent: C.ai, chat: true,
    title: "Siyam (AI twin)", sub: "AI Agent · gemini-2.5-flash",
    desc: "A live agent trained on Siyam's resume. <b>Click to talk to him.</b>",
    params: "",
    output: { agent: "siyam_ai_twin", model: "gemini-2.5-flash", tools: ["resume_kb"], temperature: 0.7, mission: "get_siyam_hired" },
  },
  {
    id: "hire", x: 2520, y: 600, icon: "📨", accent: C.out,
    title: "hire_siyam", sub: "Send Email · final node",
    desc: "Every branch ends here. <b>So should you.</b>",
    params: `
      <h4>The convergence node</h4>
      <p>Experience, projects, skills — every path through this workflow terminates here.
      If what you saw upstream is what you need built, run this node:</p>
      <a class="ins-link" href="mailto:Siyamhaider786@gmail.com">✉ Siyamhaider786@gmail.com</a>
      <a class="ins-link ghost" href="tel:+923479067969">📞 +92 347 9067969</a>
      <h4>Elsewhere</h4>
      <a class="ins-link ghost" href="https://linkedin.com/in/siyam-haider" target="_blank" rel="noopener">LinkedIn ↗</a>
      <a class="ins-link ghost" href="https://github.com/Siyam00001" target="_blank" rel="noopener">GitHub ↗</a>`,
    output: { to: "Siyamhaider786@gmail.com", subject: "Let's build something real", phone: "+92 347 9067969", response_sla: "fast", availability: "open_to_work" },
  },
];

const NOTES = [
  {
    id: "note_intro", x: 110, y: 520, w: 300,
    title: "read me ☕",
    body: "Hi, I'm <b>Siyam</b>. I build AI automation for a living — so my portfolio is a workflow.<br>Hit <b>▶ Execute</b> up top, then click around.",
  },
  {
    id: "note_hire", x: 2530, y: 430, w: 230,
    title: "psst →",
    body: "currently accepting <b>new builds</b> ✦",
  },
];

const EDGES = [
  ["visitor", "router"],
  ["router", "sirkup"],
  ["router", "loop"],
  ["router", "skills"],
  ["router", "siya"],
  ["sirkup", "marson"],
  ["loop", "p_medicare"], ["loop", "p_ucf"], ["loop", "p_voicescape"], ["loop", "p_researcher"],
  ["loop", "p_contentwell"], ["loop", "p_forensic"], ["loop", "p_finance"], ["loop", "p_emma"],
  ["skills", "education"],
  ["marson", "hire"],
  ["p_researcher", "hire"],
  ["p_emma", "hire"],
  ["education", "hire"],
  ["siya", "hire"],
];

/* execution order (BFS layers from trigger) */
const LAYERS = [
  ["visitor"],
  ["router"],
  ["sirkup", "loop", "skills", "siya"],
  ["marson", "p_medicare", "p_ucf", "p_voicescape", "p_researcher", "p_contentwell", "p_forensic", "p_finance", "p_emma", "education"],
  ["hire"],
];

/* ============================================================
   2. RENDER
   ============================================================ */
const $ = (s) => document.querySelector(s);
const world = $("#world");
const svg = $("#edgeSvg");
const viewport = $("#viewport");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const nodeEls = {}, edgePaths = [];

function renderWatermarks() {
  const marks = [
    { t: "SIYAM HAIDER", x: 380, y: 50, s: 130 },
    { t: "( AI AUTOMATION ENGINEER )", x: 400, y: 215, s: 36 },
  ];
  for (const m of marks) {
    const d = document.createElement("div");
    d.className = "watermark";
    d.textContent = m.t;
    d.style.cssText = `left:${m.x}px;top:${m.y}px;font-size:${m.s}px`;
    world.appendChild(d);
  }
}

function renderNodes() {
  NODES.forEach((n, i) => {
    const el = document.createElement("div");
    el.className = "node" + (n.compact ? " compact" : "");
    el.dataset.id = n.id;
    el.style.cssText = `left:${n.x}px;top:${n.y}px;--accent:${n.accent};animation-delay:${0.08 * i}s`;
    el.innerHTML = `
      <span class="n-check">✓</span>
      <div class="n-head">
        <span class="n-ico">${n.icon}</span>
        <div class="n-titles">
          <div class="n-title">${n.title}</div>
          <div class="n-sub">${n.sub}</div>
        </div>
      </div>
      ${n.desc ? `<div class="n-desc">${n.desc}</div>` : ""}
      <span class="port in"></span>
      <span class="port out"></span>`;
    if (n.id === "visitor") el.querySelector(".port.in").remove();
    if (n.id === "hire") el.querySelector(".port.out").remove();
    world.appendChild(el);
    nodeEls[n.id] = el;
  });

  NOTES.forEach((n, i) => {
    const el = document.createElement("div");
    el.className = "note";
    el.dataset.id = n.id;
    el.style.cssText = `left:${n.x}px;top:${n.y}px;width:${n.w}px;animation-delay:${0.1 * (NODES.length + i)}s;transform:rotate(${i % 2 ? 1.2 : -1.5}deg)`;
    el.innerHTML = `<div class="note-title">${n.title}</div><div class="note-body">${n.body}</div>`;
    world.appendChild(el);
    nodeEls[n.id] = el;
  });
}

function portPos(id, side) {
  const el = nodeEls[id];
  const x = parseFloat(el.style.left), y = parseFloat(el.style.top);
  return {
    x: side === "out" ? x + el.offsetWidth : x,
    y: y + el.offsetHeight / 2,
  };
}

function edgeD(from, to) {
  const a = portPos(from, "out"), b = portPos(to, "in");
  const dx = Math.max(50, Math.abs(b.x - a.x) * 0.5);
  return `M ${a.x} ${a.y} C ${a.x + dx} ${a.y}, ${b.x - dx} ${b.y}, ${b.x} ${b.y}`;
}

function renderEdges() {
  for (const [from, to] of EDGES) {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("class", "wire");
    p.setAttribute("d", edgeD(from, to));
    svg.appendChild(p);
    edgePaths.push({ from, to, p });
  }
}

function redrawEdges(id) {
  for (const e of edgePaths) {
    if (!id || e.from === id || e.to === id) e.p.setAttribute("d", edgeD(e.from, e.to));
  }
}

/* ============================================================
   3. PAN / ZOOM / DRAG
   ============================================================ */
const view = { x: 0, y: 0, k: 1 };

function applyView() {
  world.style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.k})`;
}

function fitView() {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const id in nodeEls) {
    const el = nodeEls[id];
    const x = parseFloat(el.style.left), y = parseFloat(el.style.top);
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x + el.offsetWidth);
    maxY = Math.max(maxY, y + el.offsetHeight);
  }
  const pad = 70;
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  view.k = Math.min((vw - pad * 2) / (maxX - minX), (vh - pad * 2) / (maxY - minY), 1.1);
  view.x = (vw - (maxX - minX) * view.k) / 2 - minX * view.k;
  view.y = (vh - (maxY - minY) * view.k) / 2 - minY * view.k;
  applyView();
}

function zoomAt(cx, cy, factor) {
  const k = Math.min(1.8, Math.max(0.25, view.k * factor));
  view.x = cx - ((cx - view.x) * k) / view.k;
  view.y = cy - ((cy - view.y) * k) / view.k;
  view.k = k;
  applyView();
}

viewport.addEventListener("wheel", (e) => {
  e.preventDefault();
  const r = viewport.getBoundingClientRect();
  zoomAt(e.clientX - r.left, e.clientY - r.top, Math.exp(-e.deltaY * 0.0012));
}, { passive: false });

$("#zoomIn").addEventListener("click", () => zoomAt(viewport.clientWidth / 2, viewport.clientHeight / 2, 1.25));
$("#zoomOut").addEventListener("click", () => zoomAt(viewport.clientWidth / 2, viewport.clientHeight / 2, 0.8));
$("#zoomFit").addEventListener("click", fitView);

/* unified pointer logic: pan canvas, drag nodes, click to inspect */
let drag = null;

viewport.addEventListener("pointerdown", (e) => {
  const nodeEl = e.target.closest(".node, .note");
  viewport.setPointerCapture(e.pointerId);
  if (nodeEl) {
    drag = {
      type: "node", el: nodeEl, id: nodeEl.dataset.id,
      sx: e.clientX, sy: e.clientY,
      ox: parseFloat(nodeEl.style.left), oy: parseFloat(nodeEl.style.top),
      moved: false,
    };
  } else {
    drag = { type: "pan", sx: e.clientX, sy: e.clientY, ox: view.x, oy: view.y, moved: false };
    viewport.classList.add("panning");
  }
});

viewport.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
  if (Math.hypot(dx, dy) > 4) drag.moved = true;
  if (!drag.moved) return;
  if (drag.type === "pan") {
    view.x = drag.ox + dx;
    view.y = drag.oy + dy;
    applyView();
  } else {
    drag.el.style.left = drag.ox + dx / view.k + "px";
    drag.el.style.top = drag.oy + dy / view.k + "px";
    redrawEdges(drag.id);
  }
});

viewport.addEventListener("pointerup", (e) => {
  viewport.classList.remove("panning");
  if (!drag) return;
  if (!drag.moved) {
    if (drag.type === "node") {
      const data = NODES.find((n) => n.id === drag.id);
      if (data) openInspector(data);
    } else {
      closeInspector();
    }
  }
  drag = null;
  hideHint();
});

/* ============================================================
   4. INSPECTOR
   ============================================================ */
const inspector = $("#inspector");
const insTabs = $("#insTabs");
const panes = { params: $("#paneParams"), output: $("#paneOutput"), chat: $("#paneChat") };
let selectedEl = null;

function openInspector(n) {
  if (selectedEl) selectedEl.classList.remove("selected");
  selectedEl = nodeEls[n.id];
  selectedEl.classList.add("selected");

  inspector.style.setProperty("--accent", n.accent);
  $("#insIcon").textContent = n.icon;
  $("#insIcon").style.setProperty("--accent", n.accent);
  $("#insTitle").textContent = n.title;
  $("#insSub").textContent = n.sub;

  if (n.chat) {
    insTabs.classList.add("hidden");
    setPane("chat");
    setTimeout(() => $("#chatText").focus(), 450);
  } else {
    insTabs.classList.remove("hidden");
    panes.params.innerHTML = n.params;
    $("#outJson").textContent = JSON.stringify(n.output, null, 2);
    setTab("params");
    setPane("params");
  }
  inspector.classList.add("open");
  log(`inspect: node:${n.id} opened`, "ok");
}

function closeInspector() {
  inspector.classList.remove("open");
  if (selectedEl) selectedEl.classList.remove("selected");
  selectedEl = null;
}

function setPane(name) {
  Object.values(panes).forEach((p) => p.classList.remove("active"));
  panes[name].classList.add("active");
}
function setTab(name) {
  insTabs.querySelectorAll(".ins-tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
}

insTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".ins-tab");
  if (!tab) return;
  setTab(tab.dataset.tab);
  setPane(tab.dataset.tab);
});

$("#insClose").addEventListener("click", closeInspector);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeInspector();
    $("#listview").classList.remove("open");
  }
});

$("#fabAI").addEventListener("click", () => openInspector(NODES.find((n) => n.id === "siya")));

/* ============================================================
   5. EXECUTION ENGINE
   ============================================================ */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let running = false;

/* --- real global run counter ---
   Every visit auto-executes the workflow once, and manual ▶ clicks count
   too — so "runs" is a true, shared count across all visitors.
   Uses free hit-counter APIs with a localStorage fallback if offline. */
const COUNTER_NS = "siyam00001-portfolio";
let runs = +(localStorage.getItem("sh_runs") || 0);

function showRuns() {
  $("#execCount").textContent = runs.toLocaleString();
}
showRuns();

async function counterPeek() {
  try {
    const r = await fetch(`https://abacus.jasoncameron.dev/get/${COUNTER_NS}/runs`);
    if (r.ok) return (await r.json()).value;
  } catch (_) {}
  return null;
}

async function counterHit() {
  const apis = [
    async () => {
      const r = await fetch(`https://abacus.jasoncameron.dev/hit/${COUNTER_NS}/runs`);
      if (!r.ok) throw 0;
      return (await r.json()).value;
    },
    async () => {
      const r = await fetch(`https://api.counterapi.dev/v1/${COUNTER_NS}/runs/up`);
      if (!r.ok) throw 0;
      return (await r.json()).count;
    },
  ];
  for (const fn of apis) {
    try {
      const v = await fn();
      if (Number.isFinite(v)) return v;
    } catch (_) {}
  }
  return null;
}

async function recordRun() {
  const real = await counterHit();
  if (real !== null) runs = real;
  else runs++; // offline fallback — at least counts locally
  localStorage.setItem("sh_runs", runs);
  showRuns();
}

/* show the current global count immediately on load */
counterPeek().then((v) => {
  if (v !== null) { runs = v; showRuns(); }
});

function animatePacket(path, dur = 600) {
  if (reduced) return Promise.resolve();
  return new Promise((done) => {
    const len = path.getTotalLength();
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("class", "packet");
    dot.setAttribute("r", 4.5);
    svg.appendChild(dot);
    path.classList.add("hot");
    const t0 = performance.now();
    (function step(t) {
      const k = Math.min((t - t0) / dur, 1);
      const pt = path.getPointAtLength(k * len);
      dot.setAttribute("cx", pt.x);
      dot.setAttribute("cy", pt.y);
      if (k < 1) requestAnimationFrame(step);
      else {
        dot.remove();
        setTimeout(() => path.classList.remove("hot"), 250);
        done();
      }
    })(t0);
  });
}

async function execute() {
  if (running) return;
  running = true;
  const btn = $("#btnExecute");
  btn.disabled = true;
  btn.textContent = "⟳ executing…";
  sbStatus("executing workflow…");
  log("execution started — trigger: manual", "run");

  Object.values(nodeEls).forEach((el) => el.classList.remove("success", "running"));

  for (let i = 0; i < LAYERS.length; i++) {
    if (i > 0) {
      const incoming = edgePaths.filter((e) => LAYERS[i].includes(e.to) && LAYERS.slice(0, i).flat().includes(e.from));
      await Promise.all(incoming.map((e) => animatePacket(e.p)));
    }
    for (const id of LAYERS[i]) nodeEls[id].classList.add("running");
    await sleep(reduced ? 30 : 380);
    for (const id of LAYERS[i]) {
      nodeEls[id].classList.remove("running");
      nodeEls[id].classList.add("success");
      log(`✓ node:${id} → success (${Math.floor(Math.random() * 300 + 40)}ms)`, "ok");
    }
  }

  await recordRun();
  log(`execution #${runs.toLocaleString()} finished — 0 errors`, "ok");
  sbStatus("run complete — all nodes green. your move: node:hire_siyam");
  btn.disabled = false;
  btn.textContent = "▶ Execute workflow";
  running = false;
}

$("#btnExecute").addEventListener("click", execute);

/* idle pulses keep the canvas alive */
setInterval(() => {
  if (running || reduced || document.hidden) return;
  const e = edgePaths[Math.floor(Math.random() * edgePaths.length)];
  animatePacket(e.p, 900);
}, 4200);

/* ============================================================
   6. CONSOLE LOG + STATUS BAR
   ============================================================ */
const consoleEl = $("#console");

function ts() {
  return new Date().toLocaleTimeString("en-GB", { hour12: false });
}
function log(text, cls = "") {
  const ln = document.createElement("div");
  ln.className = "ln " + cls;
  ln.innerHTML = `<time>[${ts()}]</time>${text}`;
  consoleEl.appendChild(ln);
  while (consoleEl.children.length > 5) consoleEl.firstChild.remove();
}
function sbStatus(text) {
  $("#sbStatus").textContent = text;
}

setInterval(() => $("#sbClock").textContent = ts(), 1000);

const IDLE_LINES = [
  "cron: keep_alive ✓ 200 OK",
  "vector_store: 34 skill embeddings warm",
  "webhook: listening on POST /hire",
  "agent:siyam_ai heartbeat ✓ model loaded",
  "queue: 0 failed jobs (as always)",
  "monitor: voice_bridge latency 31ms",
];
setInterval(() => {
  if (!running && !document.hidden) log(IDLE_LINES[Math.floor(Math.random() * IDLE_LINES.length)]);
}, 7000);

function hideHint() {
  $("#hint").classList.add("hide");
}
setTimeout(hideHint, 9000);

/* ============================================================
   7. BOOT SEQUENCE
   ============================================================ */
(async () => {
  const bootEl = $("#boot"), textEl = $("#bootText");
  const lines = [
    "$ n8n start --production",
    "[init] loading workflow: hire_siyam_haider.workflow",
    `[init] ${NODES.length} nodes · ${EDGES.length} connections · 0 errors`,
    "[auth] visitor identified as: <span class='ok'>POTENTIAL_CLIENT</span>",
    "<span class='ok'>[ok]</span> webhook live → entering canvas…",
  ];
  if (reduced) {
    bootEl.classList.add("done");
  } else {
    for (const l of lines) {
      textEl.innerHTML += l + "\n";
      await sleep(230);
    }
    await sleep(380);
    bootEl.classList.add("done");
  }
  log("workflow loaded — production mode", "ok");
  /* auto-run once so first-time visitors see the magic */
  await sleep(reduced ? 100 : 1400);
  execute();
})();

/* ============================================================
   8. INITIAL LAYOUT
   ============================================================ */
renderWatermarks();
renderNodes();
renderEdges();
fitView();
window.addEventListener("resize", () => { redrawEdges(); fitView(); });

/* small screens: open the résumé view by default (canvas still available) */
if (window.innerWidth < 760) {
  setTimeout(() => $("#listview").classList.add("open"), 1800);
}

/* ============================================================
   9. RÉSUMÉ / LIST VIEW
   ============================================================ */
(() => {
  const sections = $("#lvSections");
  const card = (n) => `
    <div class="lv-card" style="--accent:${n.accent}">
      <span class="when">${n.sub}</span>
      <h3>${n.title}</h3>
      ${n.params}
    </div>`;

  sections.innerHTML = `
    <section class="lv-section"><h2>EXPERIENCE</h2>${["marson", "sirkup"].map((id) => card(NODES.find((n) => n.id === id))).join("")}</section>
    <section class="lv-section"><h2>PROJECTS</h2>${NODES.filter((n) => n.id.startsWith("p_")).map(card).join("")}</section>
    <section class="lv-section"><h2>SKILLS</h2>${card(NODES.find((n) => n.id === "skills"))}</section>
    <section class="lv-section"><h2>EDUCATION & CERTS</h2>${card(NODES.find((n) => n.id === "education"))}</section>`;

  $("#btnList").addEventListener("click", () => $("#listview").classList.add("open"));
  $("#lvClose").addEventListener("click", () => $("#listview").classList.remove("open"));
})();

/* ============================================================
   10. Siyam's AI twin — Gemini-powered resume agent
   All requests go through /api/chat (Vercel serverless), so the
   API key and system prompt live server-side only.
   ============================================================ */
(() => {
  const logEl = $("#chatLog");
  const form = $("#chatForm");
  const input = $("#chatText");
  const suggest = $("#chatSuggest");
  const history = [];
  let busy = false;

  suggest.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-q]");
    if (btn) send(btn.dataset.q);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) send(text);
  });

  function addMsg(text, who) {
    const div = document.createElement("div");
    div.className = "msg " + who;
    div.innerHTML = text
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\n/g, "<br>");
    logEl.appendChild(div);
    logEl.scrollTop = logEl.scrollHeight;
    return div;
  }

  function addTyping() {
    const div = document.createElement("div");
    div.className = "msg bot typing";
    div.innerHTML = "<i></i><i></i><i></i>";
    logEl.appendChild(div);
    logEl.scrollTop = logEl.scrollHeight;
    return div;
  }

  async function callGemini() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    });
    if (!res.ok) throw new Error(`api/chat: HTTP ${res.status}`);
    const data = await res.json();
    if (!data.text) throw new Error("api/chat: empty response");
    return data.text;
  }

  async function send(text) {
    if (busy) return;
    busy = true;
    suggest.style.display = "none";
    input.value = "";
    addMsg(text, "user");
    history.push({ role: "user", parts: [{ text }] });
    log("agent:siyam_ai ← query received", "run");

    const typing = addTyping();
    try {
      const reply = await callGemini();
      history.push({ role: "model", parts: [{ text: reply }] });
      typing.remove();
      addMsg(reply, "bot");
      log("agent:siyam_ai → response delivered ✓", "ok");
    } catch (err) {
      typing.remove();
      addMsg("My neural link dropped mid-pipeline. Retry in a moment — or skip the middleman: **Siyamhaider786@gmail.com**.", "bot");
      console.error("SIYA error:", err);
    } finally {
      busy = false;
    }
  }
})();
