const b = globalThis;
b.process ??= {
  env: { NODE_ENV: "production" }
};
function p(e, l = {}) {
  const c = e, d = c.shadowRoot ?? c.attachShadow({ mode: "open" }), a = document.createElement("div"), r = document.createElement("link"), theme = document.createElement("link");
  r.rel = "stylesheet", r.href = new URL("./caua-ai-widget.css", import.meta.url).href;
  theme.rel = "stylesheet", theme.href = new URL("./caua-ai-theme.css?v=editorial-4", import.meta.url).href;
  d.replaceChildren(r, theme, a);
  const dismiss = c.parentElement?.querySelector("[data-caua-ai-dismiss]");
  let layoutFrame = 0;
  const syncDock = () => {
    layoutFrame = 0;
    const launcher = d.querySelector(".terminal-launcher");
    const isOpen = !!d.querySelector(".terminal-widget");
    if (!launcher || isOpen) {
      c.classList.remove("is-obstructed");
      if (dismiss) dismiss.hidden = true;
      return;
    }

    const bounds = launcher.getBoundingClientRect();
    const reserved = {
      left: bounds.right - Math.min(260, Math.max(52, bounds.right - 16)),
      right: bounds.right,
      top: Math.max(0, bounds.top - 52),
      bottom: bounds.bottom
    };
    const priorities = document.querySelectorAll(".hero-actions a, .contact-pill, .section-heading h2, .section-heading > p, .project-card, .all-work-link, .about-grid h3, .about-copy > p, .rds-copy > p, .rds-copy a, .case-visual, .case-gallery img, .case-content a, .contact-section > h2, .contact-section > p, .contact-email, .site-footer");
    const overlapsPriority = Array.from(priorities).some((element) => {
      const target = element.getBoundingClientRect();
      return target.width > 0 && target.height > 0 && target.right > reserved.left && target.left < reserved.right && target.bottom > reserved.top && target.top < reserved.bottom;
    });

    c.classList.toggle("is-obstructed", overlapsPriority);
    if (dismiss) dismiss.hidden = overlapsPriority || c.classList.contains("is-invite-collapsed");
  };
  const scheduleDockSync = () => {
    if (!layoutFrame) layoutFrame = requestAnimationFrame(syncDock);
  };
  dismiss?.addEventListener("click", () => {
    c.classList.add("is-invite-collapsed");
    scheduleDockSync();
  });
  const shadowObserver = new MutationObserver(scheduleDockSync);
  shadowObserver.observe(d, { childList: true, subtree: true });
  const pageObserver = new MutationObserver(scheduleDockSync);
  pageObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
  window.addEventListener("scroll", scheduleDockSync, { passive: true });
  window.addEventListener("resize", scheduleDockSync, { passive: true });
  window.visualViewport?.addEventListener("resize", scheduleDockSync, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(scheduleDockSync).observe(document.documentElement);
  scheduleDockSync();
  let o = !1, i;
  const u = async () => {
    if (o || i) return;
    const { renderWidget: t } = await import("./mermaid-GHXKKRXX-C3Q2I02N.js?v=editorial-4").then((n) => n.m);
    o || (a.replaceChildren(), i = t(a, { ...l, initiallyOpen: !0 }));
  };
  if (l.initiallyOpen)
    u();
  else {
    const t = document.createElement("button");
    t.type = "button", t.className = "terminal-launcher", t.setAttribute("aria-label", "Abrir Cauã AI");
    const n = document.createElement("span");
    n.className = "launcher-monogram";
    n.setAttribute("aria-hidden", "true");
    n.textContent = "CR.";
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
