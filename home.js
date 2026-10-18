/* SciBook 서가 홈: 분야·검색으로 고르는 책장, 표지 그림, 대표 실험 덱, 읽는 순서 칩.
   책장 카드 자체는 build.py가 index.html에 정적으로 써 둔다(검색 엔진·JS 없는 환경용). */
(function () {
  "use strict";
  const cat = (window.SB && SB.catalog) || { fields: [], courses: [] };
  const courses = cat.courses, byId = new Map(courses.map((c) => [c.id, c]));
  const fieldOf = new Map(cat.fields.map((f) => [f.id, f]));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---- 표지 그림 (viewBox 0 0 200 130, 흰 선 위주). 애니메이션은 home.css의 .cv-* 가 맡는다.
  const W = "currentColor";
  const svg = (body) => `<svg class="cover-art" viewBox="0 0 200 130" aria-hidden="true" focusable="false">${body}</svg>`;
  const hex = (cx, cy, r) => Array.from({ length: 6 }, (_, i) => { const a = Math.PI / 6 + (i * Math.PI) / 3; return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(" ");
  const ART = {
    // 삼각 플라스크와 피어오르는 기포, 옆에는 분자 고리
    "general-chemistry": () => svg(
      `<path d="M70 14h28M76 14v34l-30 58a6 6 0 0 0 5 9h66a6 6 0 0 0 5-9l-30-58V14" fill="none" stroke="${W}" stroke-width="3" stroke-linejoin="round"/>` +
      `<path d="M56 86h56l11 20a6 6 0 0 1-5 9H50a6 6 0 0 1-5-9z" fill="${W}" fill-opacity=".3"/>` +
      [[70, 98, 4, 0], [88, 92, 3, .5], [80, 76, 2.6, 1], [86, 58, 2.2, 1.4]].map(([x, y, r, d]) => `<circle class="cv-pulse" style="animation-delay:${d}s" cx="${x}" cy="${y}" r="${r}" fill="${W}"/>`).join("") +
      `<polygon points="${hex(158, 48, 20)}" fill="none" stroke="${W}" stroke-width="2.4" stroke-opacity=".85"/><circle cx="158" cy="48" r="10" fill="none" stroke="${W}" stroke-opacity=".5" stroke-width="1.6"/>` +
      `<path d="M158 28V12M175 58l12 7M141 58l-12 7" stroke="${W}" stroke-width="2" stroke-opacity=".6"/>`),
    // 행성 둘레를 도는 위성과 던진 공의 포물선
    "general-physics": () => svg(
      `<ellipse cx="100" cy="65" rx="58" ry="58" fill="none" stroke="${W}" stroke-opacity=".35" stroke-dasharray="3 5"/>` +
      `<circle cx="100" cy="65" r="22" fill="${W}" fill-opacity=".85"/><path d="M80 58q20 8 40 0M82 74q18 6 36 0" stroke="#0003" stroke-width="3" fill="none"/>` +
      `<g class="cv-spin"><circle cx="158" cy="65" r="5.5" fill="${W}"/><path d="M158 65v-26" stroke="${W}" stroke-width="2.2"/><path d="M154 44l4-7 4 7" fill="${W}"/></g>` +
      `<path class="cv-flow" d="M14 122q34-80 68 0" fill="none" stroke="${W}" stroke-width="2" stroke-dasharray="4 6" stroke-opacity=".7"/>`),
    // 골격 구조식: 벤젠 고리에 이어진 사슬과 굽은 전자 화살표
    "organic-chemistry": () => svg(
      `<polygon points="${hex(62, 70, 26)}" fill="none" stroke="${W}" stroke-width="3"/><circle cx="62" cy="70" r="14" fill="none" stroke="${W}" stroke-width="2" stroke-opacity=".7"/>` +
      `<path d="M84.5 57l22 13 22-13 22 13 22-13" fill="none" stroke="${W}" stroke-width="3" stroke-linejoin="round"/><path d="M128.5 57V34M126 57V34" stroke="${W}" stroke-width="2.4"/>` +
      `<text x="121" y="28" fill="${W}" font-size="13" font-weight="700" font-family="sans-serif">O</text>` +
      `<path class="cv-pulse" d="M150 88q14 22-12 26" fill="none" stroke="${W}" stroke-width="2.2"/><path d="M142 108l-6 6 9 2" fill="none" stroke="${W}" stroke-width="2.2"/>`),
    // 트러스 다리와 받침, 위에서 누르는 하중
    statics: () => svg(
      `<path d="M20 96h160M20 96l32-40 32 40 32-40 32 40 32-40M52 56h128" fill="none" stroke="${W}" stroke-width="3" stroke-linejoin="round"/>` +
      `<path d="M20 96l-9 14h18zM180 96l-9 14h18z" fill="${W}" fill-opacity=".55"/><circle cx="171" cy="113" r="3" fill="${W}"/><circle cx="189" cy="113" r="3" fill="${W}"/>` +
      `<g class="cv-pulse"><path d="M116 14v34" stroke="${W}" stroke-width="3"/><path d="M109 40l7 12 7-12z" fill="${W}"/></g>` +
      [20, 52, 84, 116, 148, 180].map((x, i) => `<circle cx="${x}" cy="${i % 2 ? 56 : 96}" r="3.2" fill="${W}"/>`).join("")),
    // 흔들리는 진자와 지나온 호
    dynamics: () => svg(
      `<path d="M60 8h80" stroke="${W}" stroke-width="3"/><path d="M58 98a96 96 0 0 0 84 0" fill="none" stroke="${W}" stroke-opacity=".45" stroke-dasharray="3 5"/>` +
      `<g class="cv-swing"><path d="M100 8v92" stroke="${W}" stroke-width="2"/><circle cx="100" cy="104" r="12" fill="${W}" fill-opacity=".9"/></g>` +
      `<path d="M100 8v100" stroke="${W}" stroke-opacity=".25" stroke-dasharray="2 4"/>`),
    // 원기둥을 돌아 흐르는 유선
    "fluid-mechanics": () => svg(
      [-46, -30, -16, -6, 6, 16, 30, 46].map((d) => { const y = (65 + Math.sign(d) * Math.hypot(d, 22)).toFixed(1); return `<path class="cv-flow" d="M4 ${65 + d}C60 ${65 + d} 70 ${y} 100 ${y}S140 ${65 + d} 196 ${65 + d}" fill="none" stroke="${W}" stroke-width="2" stroke-dasharray="10 10" stroke-opacity="${(0.4 + 12 / (Math.abs(d) + 20)).toFixed(2)}"/>`; }).join("") +
      `<circle cx="100" cy="65" r="17" fill="${W}" fill-opacity=".85"/>`),
  };
  document.querySelectorAll(".book[data-course]").forEach((el) => {
    const art = ART[el.dataset.course], slot = el.querySelector(".book-art");
    if (art && slot) slot.innerHTML = art();
  });

  // ---- 통계
  const live = courses.filter((c) => c.status !== "planned");
  const sum = (k) => live.reduce((n, c) => n + (c[k] || 0), 0);
  const stats = document.getElementById("stats");
  if (stats && courses.length) stats.innerHTML = `<span><b>${courses.length}</b>개 과목</span><span><b>${sum("published")}</b>개 장 공개</span><span><b>${sum("sims")}</b>개 시뮬레이터</span><span><b>${sum("problems").toLocaleString("ko-KR")}</b>개 연습문제</span>`;

  // ---- 분야 필터와 검색
  const grid = document.getElementById("book-grid"), search = document.getElementById("book-search"), filters = document.getElementById("filters");
  const books = [...grid.querySelectorAll(".book[data-course]")];
  let selected = "all";
  const count = (id) => courses.filter((c) => id === "all" || c.field === id).length;
  filters.innerHTML = `<button type="button" data-filter="all" aria-pressed="true">전체<span>${count("all")}</span></button><span class="sep" aria-hidden="true"></span>` +
    cat.fields.map((f) => `<button type="button" data-filter="${esc(f.id)}" aria-pressed="false" style="--c:${esc(f.color)}"><i aria-hidden="true"></i>${esc(f.name)}<span>${count(f.id)}</span></button>`).join("");

  // 마지막 줄의 빈 칸에도 선반이 이어지도록 열 수에 맞춰 빈 자리를 채운다.
  let shelfColumns = 0;
  const columns = () => getComputedStyle(grid).gridTemplateColumns.split(" ").length;
  function fillShelf() {
    grid.querySelectorAll(".book-slot").forEach((slot) => slot.remove());
    const n = books.filter((b) => !b.hidden).length;
    shelfColumns = columns();
    if (n) grid.insertAdjacentHTML("beforeend", '<div class="book book-slot" aria-hidden="true"><div class="book-stand"></div></div>'.repeat((shelfColumns - (n % shelfColumns)) % shelfColumns));
  }
  if (window.ResizeObserver) new ResizeObserver(() => { if (columns() !== shelfColumns) fillShelf(); }).observe(grid);

  function render() {
    const words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let hits = 0;
    books.forEach((el) => {
      const c = byId.get(el.dataset.course) || {};
      const f = fieldOf.get(c.field) || {};
      const text = [c.title, c.en, c.level, c.description, f.name, f.en].join(" ").toLocaleLowerCase();
      el.hidden = !((selected === "all" || c.field === selected) && words.every((w) => text.includes(w)));
      if (!el.hidden) hits++;
    });
    fillShelf();
    document.getElementById("book-count").textContent = `${hits} / ${books.length}과목`;
    document.getElementById("empty").hidden = hits !== 0;
    filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === selected)));
  }
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-filter]");
    if (!b) return;
    selected = b.dataset.filter;
    render();
  });
  search.addEventListener("input", render);
  search.addEventListener("keydown", (e) => { if (e.key === "Escape") { search.value = ""; render(); } });
  render();

  // ---- 실험 카드와 읽는 순서 칩에 과목 색과 코드를 입힌다.
  document.querySelectorAll(".experiment[data-course], .path [data-course], .path [data-code]").forEach((el) => {
    const c = byId.get(el.dataset.course);
    if (c) {
      const color = c.color || (fieldOf.get(c.field) || {}).color;
      el.style.setProperty("--c-light", color);
      el.style.setProperty("--c-dark", c.colorDark || `color-mix(in srgb, ${color} 60%, #fff)`);
      if (c.status === "planned") el.title = "집필 예정";
    }
    const code = el.dataset.code || (c && c.code);
    if (el.closest(".path") && code) el.insertAdjacentHTML("afterbegin", `<span class="sq" aria-hidden="true">${esc(code)}</span>`);
  });

  // ---- 실험 덱: 가리킨 카드는 앞으로 나오고 이웃 카드는 조금씩 비켜난다.
  const deck = document.getElementById("experiments");
  const dockMedia = matchMedia("(min-width: 1001px) and (hover: hover) and (prefers-reduced-motion: no-preference)");
  const cards = [...deck.children];
  let active = null;
  function resetDock() {
    active = null;
    deck.classList.remove("dock-active");
    cards.forEach((item) => { item.classList.remove("dock-current"); item.style.removeProperty("--dock-x"); item.style.removeProperty("--dock-z"); });
  }
  function activate(item) {
    if (!dockMedia.matches || !cards.includes(item) || active === item) return;
    active = item;
    const index = cards.indexOf(item);
    deck.classList.add("dock-active");
    cards.forEach((other, i) => {
      const d = Math.abs(i - index);
      other.style.setProperty("--dock-x", `${d ? (Math.sign(i - index) * 24) / d : 0}px`);
      other.style.setProperty("--dock-z", cards.length - d);
      other.classList.toggle("dock-current", other === item);
    });
  }
  deck.addEventListener("pointermove", (e) => { if (e.pointerType !== "touch") activate(e.target.closest(".experiment")); });
  deck.addEventListener("pointerleave", () => { resetDock(); if (deck.contains(document.activeElement)) activate(document.activeElement); });
  deck.addEventListener("focusin", (e) => activate(e.target.closest(".experiment")));
  deck.addEventListener("focusout", (e) => { if (!deck.contains(e.relatedTarget)) resetDock(); });
  dockMedia.addEventListener("change", resetDock);
})();
