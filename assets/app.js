(() => {
  const D = window.KLI;
  const K = Object.fromEntries(D.knowledge.map(k => [k.id, k]));
  const S = Object.fromEntries(D.stages.map(s => [s.id, s]));
  const REF = Object.fromEntries(D.references.map(r => [r.id, r]));
  const TINT = ["7%", "11%", "16%", "22%"];
  const page = document.body.dataset.page;
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Year-band state (shared across pages) ---------- */
  const params = new URLSearchParams(location.search);
  let level = params.get("level") || localStorage.getItem("kli-level") || "junior";
  if (!D.versions[level]) level = "junior";
  const V = () => D.versions[level];

  function setLevel(next, { render = true } = {}) {
    level = next;
    localStorage.setItem("kli-level", level);
    const url = new URL(location.href);
    url.searchParams.set("level", level);
    history.replaceState(null, "", url);
    document.documentElement.dataset.level = level;
    const toggle = $(".level-toggle");
    if (toggle) {
      toggle.dataset.level = level;
      toggle.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.level === level));
    }
    document.querySelectorAll("a[data-keep-level]").forEach(a => {
      const u = new URL(a.getAttribute("href"), location.href);
      u.searchParams.set("level", level);
      a.href = u.pathname.split("/").pop() + u.search + u.hash;
    });
    document.querySelectorAll("[data-level-label]").forEach(el => (el.textContent = V().label));
    if (render) renderPage(true);
  }

  $(".level-toggle")?.addEventListener("click", e => {
    const b = e.target.closest("button[data-level]");
    if (b && b.dataset.level !== level) setLevel(b.dataset.level);
  });

  /* ---------- Helpers ---------- */
  const cellParts = key => key.split(".");
  const stageIndex = id => D.stages.findIndex(s => s.id === id);
  const cellLabel = key => { const [k, s] = cellParts(key); return `${K[k].name} · ${S[s].name}`; };
  const pill = key => { const [k] = cellParts(key); return `<span class="pill" style="--k:${K[k].color}"><i></i>${cellLabel(key)}</span>`; };

  function refShort(r) {
    const authors = r.apa.slice(0, r.apa.indexOf(" (")).replace(/\.$/, "");
    const year = (r.apa.match(/\((\d{4})/) || [])[1] || "";
    if (!authors.includes(",")) return `${authors} (${year})`;
    const first = authors.split(",")[0];
    const n = (authors.match(/\.,/g) || []).length + 1;
    if (n >= 3) return `${first} et al. (${year})`;
    if (n === 2) return `${first} & ${authors.split("& ")[1].split(",")[0]} (${year})`;
    return `${first} (${year})`;
  }

  /* Small 4×4 map with numbered dots on the given cells. */
  function miniMap(cells, { animate = true } = {}) {
    let h = `<div class="mini" aria-hidden="true"><span></span>`;
    D.stages.forEach(s => (h += `<span class="h">${s.step}</span>`));
    D.knowledge.forEach(k => {
      h += `<span class="r" style="background:${k.color}">${k.letter}</span>`;
      D.stages.forEach((s, si) => {
        const key = `${k.id}.${s.id}`;
        const n = cells.indexOf(key);
        h += `<span class="c${n > -1 ? " on" : ""}" data-cell="${key}" ${n > -1 ? `data-n="${n + 1}"` : ""} style="--k:${k.color};--t:${TINT[si]};--d:${n}"></span>`;
      });
    });
    return h + `</div>`;
  }

  /* ---------- Home ---------- */
  function renderDemo() {
    const h = V().hero;
    const cases = V().cases[0];
    $("#demo").innerHTML = `
      <div class="demo-top"><span class="eyebrow">${esc(h.caption)}</span><span class="eyebrow">A student writes</span></div>
      <div class="demo-wrong"><span class="wrong-mark">${esc(h.wrong)}</span></div>
      ${miniMap(h.cells)}
      <ul class="demo-legend">${cases.paths.map((p, i) => {
        const [k] = cellParts(p.cell);
        return `<li><b class="n" style="background:${K[k].color}">${i + 1}</b><span><strong>${cellLabel(p.cell)}</strong> · ${esc(p.see)}</span></li>`;
      }).join("")}</ul>
      <div class="demo-foot">${esc(h.foot || "Same wrong answer, four different next moves.")}</div>`;
  }

  function renderCore() {
    $("#core").innerHTML = `
      <div><div class="eyebrow">Core idea · ${esc(V().label)}</div></div>
      <div><p>${esc(V().coreIdea)}</p><small>${esc(V().evidence)}</small></div>`;
  }

  function renderMatrix() {
    const v = V();
    let h = `<div class="mx-corner">Learning stage →<br>↓ Knowledge type</div>`;
    D.stages.forEach((s, i) => (h += `
      <div class="mx-stage" style="--p:${(i + 1) * 25}%"><div class="step-no">${s.step}</div><h3>${s.name}</h3><p>${esc(s.ask[level])}</p></div>`));
    h += `<div class="mx-label">Default emphasis</div>`;
    v.emphasis.forEach(t => (h += `<div class="mx-emph">${esc(t)}</div>`));
    if (v.link) {
      h += `<div class="mx-label">${esc(v.link.label)}<small>${esc(v.link.sub)}</small></div>`;
      v.link.items.forEach(t => (h += `<div class="mx-link">${esc(t)}</div>`));
    }
    D.knowledge.forEach(k => {
      h += `<div class="mx-row" style="--k:${k.color}"><div class="ico">${k.letter}</div><h3>${k.name}</h3><p>${esc(k.ask)}</p><small>${esc(k.sub[level])}</small></div>`;
      D.stages.forEach((s, si) => {
        const key = `${k.id}.${s.id}`;
        const [title, action] = v.cells[key];
        h += `<button class="cell" data-cell="${key}" style="--k:${k.color};--t:${TINT[si]}" aria-label="${esc(cellLabel(key))}: ${esc(title)}">
          <h4>${esc(title)}</h4><p>${esc(action)}</p><span class="more">Open cell →</span></button>`;
      });
    });
    const m = $("#matrix");
    m.innerHTML = h;
    applyFinder();
  }

  /* Finder */
  const pick = { knowledge: null, stage: null };
  function renderFinder() {
    const q = D.diagnose;
    const group = (name, n) => `
      <div class="finder-q"><h3><span>Question ${n}</span>${esc(q[name].question)}</h3>
        <div class="chips" data-group="${name}">${q[name].options.map(o => `
          <button class="chip" data-id="${o.id}" aria-pressed="${pick[name] === o.id}" ${name === "knowledge" ? `style="--c:${K[o.id].color}"` : ""}>
            <b>${esc(o.short)}</b><span>${esc(o.long)}</span></button>`).join("")}</div></div>`;
    $("#finder").innerHTML = group("knowledge", 1) + group("stage", 2) + `<div class="finder-result" id="finder-result"></div>`;
    $("#finder").onclick = e => {
      const chip = e.target.closest(".chip");
      if (chip) {
        const g = chip.parentElement.dataset.group;
        pick[g] = pick[g] === chip.dataset.id ? null : chip.dataset.id;
        chip.parentElement.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c.dataset.id === pick[g]));
        applyFinder(true);
      }
      if (e.target.closest("[data-reset]")) {
        pick.knowledge = pick.stage = null;
        renderFinder();
        applyFinder();
      }
      const open = e.target.closest("[data-open]");
      if (open) openDrawer(open.dataset.open);
    };
    applyFinder();
  }

  function applyFinder(scroll = false) {
    const m = $("#matrix"), out = $("#finder-result");
    if (!m || !out) return;
    m.querySelectorAll(".cell").forEach(c => c.classList.remove("target"));
    if (pick.knowledge && pick.stage) {
      const key = `${pick.knowledge}.${pick.stage}`;
      m.classList.add("has-target");
      const cell = m.querySelector(`[data-cell="${key}"]`);
      cell.classList.add("target");
      const [title, action] = V().cells[key];
      out.innerHTML = `<div class="found">${pill(key)} &nbsp;→&nbsp; <b>${esc(title)}</b><br><span class="muted">${esc(action)}</span></div>
        <div class="btn-row" style="margin-left:auto"><button class="btn primary" data-open="${key}">Open this cell</button><button class="linkish" data-reset>Reset</button></div>`;
      if (scroll) cell.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      m.classList.remove("has-target");
      const left = !pick.knowledge && !pick.stage ? "Answer both questions" : pick.knowledge ? "Now answer question 2" : "Now answer question 1";
      out.innerHTML = `<span class="placeholder">${left} to locate the cell on the matrix below. Or click any cell directly.</span>`;
    }
  }

  function renderPrinciples() {
    const extra = V().principles.map(p => `<div class="principle extra"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`).join("");
    $("#principles").innerHTML = D.principles.map(p => `<div class="principle"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`).join("") + extra;
  }

  /* Drawer */
  function openDrawer(key) {
    const dlg = $("#drawer");
    const [k, s] = cellParts(key);
    const [title, action] = V().cells[key];
    const d = D.cellDetail[key];
    const si = stageIndex(s);
    const prev = D.stages[si - 1], next = D.stages[si + 1];
    dlg.style.setProperty("--k", K[k].color);
    dlg.innerHTML = `
      <button class="drawer-close" aria-label="Close">✕</button>
      <div class="drawer-inner">
        ${pill(key)}
        <h2>${esc(title)}</h2>
        <p class="move">${esc(action)}</p>
        <h5>What you'll see</h5><p style="margin:0">${esc(d.see)}</p>
        <h5>Success looks like</h5><ul>${d.success.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <h5>Avoid</h5><div class="avoid">${esc(d.avoid)}</div>
        <h5>Evidence behind this cell</h5>
        <div class="refs">${d.refs.map(id => REF[id]).filter(Boolean).map(r => `
          <a href="references.html?level=${level}#${r.id}"><b>${esc(refShort(r))}</b><span>${esc(r.supports)}</span></a>`).join("")}</div>
        <div class="nav-cells">
          ${prev ? `<button data-go="${k}.${prev.id}">← ${prev.name}</button>` : "<span></span>"}
          ${next ? `<button data-go="${k}.${next.id}">Next stage: ${next.name} →</button>` : "<span></span>"}
        </div>
      </div>`;
    dlg.querySelector(".drawer-close").onclick = () => dlg.close();
    dlg.querySelectorAll("[data-go]").forEach(b => (b.onclick = () => openDrawer(b.dataset.go)));
    if (!dlg.open) dlg.showModal();
    dlg.scrollTop = 0;
    history.replaceState(null, "", `${location.pathname}${location.search}#cell=${key}`);
  }

  function initHome() {
    $("#matrix").addEventListener("click", e => {
      const c = e.target.closest(".cell");
      if (c) openDrawer(c.dataset.cell);
    });
    const dlg = $("#drawer");
    dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("close", () => history.replaceState(null, "", location.pathname + location.search));
    renderFinder();
    const m = location.hash.match(/^#cell=([a-z]+\.[a-z]+)$/);
    if (m && D.cellDetail[m[1]]) openDrawer(m[1]);
  }

  /* ---------- Cases ---------- */
  function renderCases() {
    const v = V();
    $("#case-tabs").innerHTML = v.cases.map(c => `<a href="#${c.id}">${esc(c.tag)}</a>`).join("") +
      (v.reflection ? `<a href="#looking-back">Looking back</a>` : "");
    let h = v.cases.map(c => `
      <article class="case reveal" id="${c.id}">
        <div class="case-head">
          <div>
            <div class="eyebrow">${esc(c.tag)}</div>
            <h2>${c.quote ? `<span class="quote">${esc(c.wrong)}</span>` : `<span class="wrong-mark">${esc(c.wrong)}</span>`}</h2>
            <p>${esc(c.lead)}</p>
          </div>
          ${miniMap(c.paths.map(p => p.cell))}
        </div>
        <div class="paths">${c.paths.map((p, i) => {
          const [k] = cellParts(p.cell);
          return `<div class="path" data-cell="${p.cell}" style="--k:${K[k].color}">
            <div class="path-top"><span class="n">${i + 1}</span>${pill(p.cell)}</div>
            <dl><div><dt>What you see</dt><dd>${esc(p.see)}</dd></div>
                <div><dt>Ask this to confirm</dt><dd>${esc(p.ask)}</dd></div>
                <div><dt>Next move</dt><dd class="move">${esc(p.move)}</dd></div></dl>
          </div>`;
        }).join("")}</div>
        <div class="case-foot">${esc(c.foot || "Same wrong answer, four different next moves.")}</div>
      </article>`).join("");
    if (v.reflection) {
      h += `<article class="reflection reveal" id="looking-back">
        <div class="eyebrow">Practice</div><h2>${esc(v.reflection.title)}</h2>
        <div class="reflection-items">${v.reflection.items.map(it => `<div class="reflection-item">${pill(it.cell)}<p>${esc(it.text)}</p></div>`).join("")}</div>
        <p class="note">${esc(v.reflection.note)}</p></article>`;
    }
    const root = $("#cases");
    root.innerHTML = h;
    root.querySelectorAll(".case").forEach(cs => {
      cs.querySelectorAll(".path").forEach(p => {
        const dot = cs.querySelector(`.mini [data-cell="${p.dataset.cell}"]`);
        p.addEventListener("mouseenter", () => dot.classList.add("hl"));
        p.addEventListener("mouseleave", () => dot.classList.remove("hl"));
      });
    });
    observe();
  }

  /* ---------- References ---------- */
  function renderReferences() {
    const groups = D.refGroups.map(g => ({ ...g, refs: D.references.filter(r => r.group === g.id) }));
    $("#ref-index").innerHTML = groups.map(g => `<a href="#g-${g.id}">${esc(g.title)}<small>${g.refs.length}</small></a>`).join("");
    $("#ref-total").textContent = D.references.length;

    let map = "";
    map += `<span></span>` + D.stages.map(() => `<span class="col-h"></span>`).join("");
    D.knowledge.forEach(k => {
      map += `<span class="row-h" style="--k:${k.color}"></span>`;
      D.stages.forEach((s, si) => (map += `<span class="c" style="--k:${k.color};--t:${TINT[si]}"></span>`));
    });
    $("#emap").innerHTML = map;

    $("#ref-groups").innerHTML = groups.map(g => `
      <section class="ref-group" id="g-${g.id}">
        <div class="ref-group-head"><div class="eyebrow">${esc(g.part)}</div><h2>${esc(g.title)}</h2><p>${esc(g.text)}</p></div>
        <div class="ref-list">${g.refs.map(r => `
          <div class="ref" id="${r.id}">
            <div class="cite">${r.apa}${r.url ? ` <a class="doi" href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.url)}</a>` : ""}</div>
            <div class="supports">${esc(r.supports)}</div>
          </div>`).join("")}</div>
      </section>`).join("");
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }

  /* ---------- Motion ---------- */
  let io;
  function observe() {
    io ??= new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08 });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  }

  function renderPage(swap = false) {
    if (page === "home") { renderDemo(); renderCore(); renderMatrix(); renderPrinciples(); }
    if (page === "cases") renderCases();
    if (swap) document.querySelectorAll("[data-swap]").forEach(el => { el.classList.remove("swap"); void el.offsetWidth; el.classList.add("swap"); });
    observe();
  }

  setLevel(level, { render: false });
  renderPage();
  if (page === "home") initHome();
  if (page === "references") renderReferences();
})();
