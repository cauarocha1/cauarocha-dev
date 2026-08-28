const b = globalThis;
b.process ??= {
  env: { NODE_ENV: "production" }
};
function p(e, l = {}) {
  const c = e, d = c.shadowRoot ?? c.attachShadow({ mode: "open" }), a = document.createElement("div"), r = document.createElement("link"), theme = document.createElement("link");
  r.rel = "stylesheet", r.href = new URL("./caua-ai-widget.css", import.meta.url).href;
  theme.rel = "stylesheet", theme.href = new URL("./caua-ai-theme.css", import.meta.url).href;
  d.replaceChildren(r, theme, a);
  let o = !1, i;
  const u = async () => {
    if (o || i) return;
    const { renderWidget: t } = await import("./mermaid-GHXKKRXX-C3Q2I02N.js").then((n) => n.m);
    o || (a.replaceChildren(), i = t(a, { ...l, initiallyOpen: !0 }));
  };
  if (l.initiallyOpen)
    u();
  else {
    const t = document.createElement("button");
    t.type = "button", t.className = "terminal-launcher", t.setAttribute("aria-label", "Abrir Cauã AI");
    const n = document.createElement("span");
    n.className = "launcher-avatar";
    const avatar = document.createElement("img");
    avatar.src = new URL("./caua-avatar.png", import.meta.url).href;
    avatar.alt = "";
    const m = document.createElement("i");
    m.setAttribute("aria-hidden", "true"), n.append(avatar, m);
    const s = document.createElement("span");
    s.className = "launcher-copy";
    const label = document.createElement("strong");
    label.textContent = "Fale com o Cauã AI";
    const hint = document.createElement("small");
    hint.textContent = "assistente do portfólio";
    s.append(label, hint), t.append(n, s), t.addEventListener("click", () => {
      u();
    }, { once: !0 }), a.replaceChildren(t);
  }
  return {
    unmount() {
      o = !0, i?.(), d.replaceChildren();
    }
  };
}
function h(e) {
  if (e !== void 0)
    return e === "true";
}
for (const e of document.querySelectorAll("[data-caua-ai-widget]"))
  p(e, {
    apiUrl: e.dataset.apiUrl,
    demo: h(e.dataset.demo),
    initiallyOpen: h(e.dataset.initiallyOpen)
  });
window.CauAIWidget = { mount: p };
export {
  p as mountCauaAIWidget
};
