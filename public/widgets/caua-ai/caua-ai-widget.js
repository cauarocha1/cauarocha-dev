const s = globalThis;
s.process ??= {
  env: { NODE_ENV: "production" }
};
function d(e, i = {}) {
  let a = !1, r;
  const o = async () => {
    if (a || r) return;
    const { renderWidget: t } = await import("./mermaid-GHXKKRXX-C3Q2I02N.js").then((n) => n.m);
    a || (e.replaceChildren(), r = t(e, { ...i, initiallyOpen: !0 }));
  };
  if (i.initiallyOpen)
    o();
  else {
    const t = document.createElement("button");
    t.type = "button", t.className = "terminal-launcher", t.setAttribute("aria-label", "Abrir Cauã AI");
    const n = document.createElement("span");
    n.className = "launcher-mark", n.setAttribute("aria-hidden", "true"), n.textContent = ">_";
    const l = document.createElement("span");
    l.textContent = "Abrir Cauã AI";
    const u = document.createElement("i");
    u.setAttribute("aria-hidden", "true"), t.append(n, l, u), t.addEventListener("click", () => {
      o();
    }, { once: !0 }), e.replaceChildren(t);
  }
  return {
    unmount() {
      a = !0, r?.(), e.replaceChildren();
    }
  };
}
function c(e) {
  if (e !== void 0)
    return e === "true";
}
for (const e of document.querySelectorAll("[data-caua-ai-widget]"))
  d(e, {
    apiUrl: e.dataset.apiUrl,
    demo: c(e.dataset.demo),
    initiallyOpen: c(e.dataset.initiallyOpen)
  });
window.CauAIWidget = { mount: d };
export {
  d as mountCauaAIWidget
};
