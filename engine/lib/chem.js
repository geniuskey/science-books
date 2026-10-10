/* ==========================================================================
   SciBook lib/chem.js — 화학 과목 공용 라이브러리 (전역 Chem)
   일반화학·유기화학·물리화학 등 화학 계열 교과서가 함께 쓴다.
   의존: engine/js/scibook.js (SB), engine/lib/elements.js (SB_DATA.elements)
   3D 기능(Chem.molecule)은 three.js r147 + OrbitControls가 페이지에 있어야 한다.
   ========================================================================== */
(function () {
  "use strict";
  const E = (window.SB_DATA && window.SB_DATA.elements) || [];
  const BY = {};
  E.forEach((e) => { BY[e.sym] = e; BY[e.Z] = e; });
  const Chem = (window.Chem = {});
  Chem.elements = E;

  /* ---------------------------------------------------------------- 상수 (SI, CODATA 2018) */
  Chem.const = {
    NA: 6.02214076e23,          // mol⁻¹
    R: 8.314462618,             // J/(mol·K)
    Ratm: 0.082057366,          // L·atm/(mol·K)
    F: 96485.33212,             // C/mol
    h: 6.62607015e-34,          // J·s
    c: 2.99792458e8,            // m/s
    kB: 1.380649e-23,           // J/K
    e: 1.602176634e-19,         // C
    me: 9.1093837015e-31,       // kg
    amu: 1.66053906660e-27,     // kg
    RH: 2.179872361e-18,        // J (리드베리 에너지 hcR∞)
    a0: 5.29177210903e-11,      // m
    atm: 101325,                // Pa
    torr: 101325 / 760,         // Pa
    bar: 1e5,                   // Pa
    Kw: 1.0e-14,                // 25 °C
  };

  /** 원소 찾기: Chem.el('Fe') / Chem.el(26) */
  Chem.el = (k) => BY[k] || null;

  /* ---------------------------------------------------------------- 화학식 */
  /**
   * 화학식 → 원자 수. 괄호/대괄호, 수화물(· 또는 *), 상태 표시 (s)(l)(g)(aq), 전하(^2+, 2+, -, +)를 처리.
   *   Chem.parse('Ca(OH)2') → {atoms:{Ca:1,O:2,H:2}, charge:0}
   *   Chem.parse('CuSO4·5H2O'), Chem.parse('[Fe(CN)6]^3-'), Chem.parse('SO4^2-'), Chem.parse('e-')
   */
  Chem.parse = function (f) {
    let s = String(f).trim().replace(/\((s|l|g|aq)\)$/i, "").replace(/\s+/g, "");
    let charge = 0;
    if (s === "e-" || s === "e^-" || s === "e⁻") return { atoms: {}, charge: -1 };
    const cm = /\^?\{?(\d*)([+-])\}?$/.exec(s);
    if (cm && (s.includes("^") || /[A-Za-z\])][+-]$|[A-Za-z\])]\d[+-]$/.test(s))) {
      // "SO4^2-" "SO42-"(모호) 은 ^ 사용 권장. 끝이 '+'/'-'이면 전하.
      if (s.includes("^")) { charge = (cm[1] ? Number(cm[1]) : 1) * (cm[2] === "-" ? -1 : 1); s = s.slice(0, s.lastIndexOf("^")); }
      else { charge = cm[2] === "-" ? -1 : 1; s = s.slice(0, -1); }
    }
    const parts = s.split(/[·*•]/);
    const total = {};
    parts.forEach((part) => {
      let mult = 1;
      const m = /^(\d+)(.*)$/.exec(part);
      if (m && parts.length > 1) { mult = Number(m[1]); part = m[2]; }
      const counts = parseGroup(part);
      for (const k in counts) total[k] = (total[k] || 0) + counts[k] * mult;
    });
    return { atoms: total, charge };
  };
  function parseGroup(s) {
    const stack = [{}];
    const re = /([A-Z][a-z]?)|([\(\[\{])|([\)\]\}])|(\d+)/g;
    let m, last = null, pos = 0;
    while ((m = re.exec(s))) {
      if (m.index !== pos) throw new Error("화학식을 해석할 수 없음: " + s);
      pos = re.lastIndex;
      if (m[1]) {
        if (!BY[m[1]]) throw new Error("알 수 없는 원소: " + m[1]);
        const top = stack[stack.length - 1]; top[m[1]] = (top[m[1]] || 0) + 1; last = { type: "el", sym: m[1], top };
      } else if (m[2]) { stack.push({}); last = null; }
      else if (m[3]) {
        const g = stack.pop(); if (!stack.length) throw new Error("괄호 불일치: " + s);
        const top = stack[stack.length - 1]; for (const k in g) top[k] = (top[k] || 0) + g[k]; last = { type: "grp", g, top };
      } else if (m[4]) {
        const n = Number(m[4]); if (!last) throw new Error("숫자 위치 오류: " + s);
        if (last.type === "el") last.top[last.sym] += n - 1;
        else for (const k in last.g) last.top[k] += last.g[k] * (n - 1);
        last = null;
      }
    }
    if (pos !== s.length || stack.length !== 1) throw new Error("화학식을 해석할 수 없음: " + s);
    return stack[0];
  }
  /** 몰 질량 (g/mol) */
  Chem.molarMass = function (f) {
    const { atoms } = typeof f === "string" ? Chem.parse(f) : { atoms: f };
    let m = 0; for (const k in atoms) m += BY[k].mass * atoms[k];
    return m;
  };
  /** 질량 백분율 조성: {C: 40.0, H: 6.7, O: 53.3} */
  Chem.composition = function (f) {
    const { atoms } = Chem.parse(f), M = Chem.molarMass(f), out = {};
    for (const k in atoms) out[k] = (100 * BY[k].mass * atoms[k]) / M;
    return out;
  };
  /** 화학식 HTML: 'SO4^2-' → SO<sub>4</sub><sup>2−</sup> */
  Chem.html = function (f) {
    let s = String(f), sup = "";
    const cm = /\^\{?(\d*[+-])\}?$/.exec(s);
    if (cm) { sup = cm[1].replace("-", "−"); s = s.slice(0, cm.index); }
    s = s.replace(/([A-Za-z\)\]])(\d+)/g, "$1<sub>$2</sub>").replace(/[·*]/g, "·");
    return `<span class="chem">${s}${sup ? `<sup>${sup}</sup>` : ""}</span>`;
  };
  /** TeX(mhchem) 문자열: Chem.ce('2H2 + O2 -> 2H2O') → '\\ce{...}' */
  Chem.ce = (s) => `\\ce{${s}}`;

  /* ---------------------------------------------------------------- 반응식 균형 */
  /**
   * 반응식 계수 맞추기(정수 영공간). 전하도 보존식으로 포함.
   *   Chem.balance(['C3H8','O2'], ['CO2','H2O']) → [1,5,3,4]
   *   실패(해 없음/여러 개)면 null
   */
  Chem.balance = function (reac, prod) {
    const species = [...reac, ...prod].map((f) => Chem.parse(f));
    const keys = [...new Set(species.flatMap((s) => Object.keys(s.atoms)))];
    if (species.some((s) => s.charge)) keys.push("__q");
    const n = species.length;
    // 행렬 A (keys × n), 반응물 +, 생성물 −
    const A = keys.map((k) => species.map((s, j) => (k === "__q" ? s.charge : s.atoms[k] || 0) * (j < reac.length ? 1 : -1)));
    // 분수 가우스 소거 (정수 유리수: [num, den])
    const fr = (a, b = 1) => { const g = gcd(Math.abs(a), Math.abs(b)) || 1; const s = b < 0 ? -1 : 1; return [(s * a) / g, (s * b) / g]; };
    const mul = (x, y) => fr(x[0] * y[0], x[1] * y[1]), sub = (x, y) => fr(x[0] * y[1] - y[0] * x[1], x[1] * y[1]), div = (x, y) => fr(x[0] * y[1], x[1] * y[0]);
    const M = A.map((r) => r.map((v) => fr(v)));
    const piv = [];
    let row = 0;
    for (let col = 0; col < n && row < M.length; col++) {
      let p = row; while (p < M.length && M[p][col][0] === 0) p++;
      if (p === M.length) continue;
      [M[row], M[p]] = [M[p], M[row]];
      const pv = M[row][col];
      M[row] = M[row].map((v) => div(v, pv));
      for (let r = 0; r < M.length; r++) if (r !== row && M[r][col][0] !== 0) { const f = M[r][col]; M[r] = M[r].map((v, c) => sub(v, mul(f, M[row][c]))); }
      piv.push(col); row++;
    }
    const free = [...Array(n).keys()].filter((c) => !piv.includes(c));
    if (free.length !== 1) return null;
    const fc = free[0];
    const x = Array(n).fill(null).map(() => fr(0));
    x[fc] = fr(1);
    piv.forEach((c, r) => (x[c] = fr(-M[r][fc][0], M[r][fc][1])));
    const L = x.reduce((a, v) => lcm(a, v[1]), 1);
    let ints = x.map((v) => (v[0] * L) / v[1]);
    const g = ints.reduce((a, v) => gcd(a, Math.abs(v)), 0) || 1;
    ints = ints.map((v) => v / g);
    if (ints.every((v) => v < 0)) ints = ints.map((v) => -v);
    if (ints.some((v) => v <= 0)) return null;
    return ints;
  };
  function gcd(a, b) { while (b) [a, b] = [b, a % b]; return a; }
  function lcm(a, b) { return (a / gcd(a, b)) * b; }
  Chem.gcd = gcd;

  /* ---------------------------------------------------------------- 유효숫자 · 수치 */
  /** 유효숫자 n자리로 반올림한 수 */
  Chem.sig = (x, n) => (x === 0 || !isFinite(x) ? x : Number(x.toPrecision(n)));
  /** 유효숫자 문자열(지수 표기 자동): Chem.sigStr(0.000123456, 3) → "1.23×10⁻⁴" */
  Chem.sigStr = function (x, n = 3) {
    if (!isFinite(x)) return "—";
    if (x === 0) return "0";
    const p = x.toPrecision(n);
    const a = Math.abs(x);
    if (!/e/.test(p) && a >= 1e-3 && a < 1e4) return p;
    const [m, e] = x.toExponential(n - 1).split("e");
    if (Number(e) === 0) return m;
    const sup = String(Number(e)).replace(/-/g, "⁻").replace(/\d/g, (d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[d]);
    return `${m}×10${sup}`;
  };
  /** 측정값 문자열의 유효숫자 개수: "0.00450"→3, "1200"→2(모호), "1.200e3"→4 */
  Chem.countSig = function (str) {
    let s = String(str).trim().toLowerCase().replace(/^[+-]/, "");
    s = s.split(/e|×10/)[0];
    if (s.includes(".")) { const d = s.replace(".", "").replace(/^0+/, ""); return d.length || 1; }
    const t = s.replace(/^0+/, "").replace(/0+$/, "");
    return t.length || 1;
  };
  /** 이분법 근 찾기 f(a)·f(b) < 0 가정 */
  Chem.bisect = function (f, a, b, tol = 1e-12, it = 200) {
    let fa = f(a);
    for (let i = 0; i < it; i++) {
      const m = 0.5 * (a + b), fm = f(m);
      if (Math.abs(b - a) < tol * Math.max(1, Math.abs(m))) return m;
      if (fa * fm <= 0) b = m; else { a = m; fa = fm; }
    }
    return 0.5 * (a + b);
  };
  /** 로그 스케일 이분법(농도처럼 0 < x 의 넓은 범위): f(lo)·f(hi) < 0 */
  Chem.bisectLog = function (f, lo, hi, it = 200) {
    const g = (u) => f(Math.pow(10, u));
    return Math.pow(10, Chem.bisect(g, Math.log10(lo), Math.log10(hi), 1e-13, it));
  };
  /** ax² + bx + c = 0 의 양의 실근(작은 쪽). 없으면 NaN */
  Chem.quadPos = function (a, b, c) {
    if (Math.abs(a) < 1e-300) return -c / b;
    const D = b * b - 4 * a * c;
    if (D < 0) return NaN;
    const q = -0.5 * (b + Math.sign(b || 1) * Math.sqrt(D));
    const r = [q / a, c / q].filter((v) => v > 0);
    return r.length ? Math.min(...r) : NaN;
  };

  /* ---------------------------------------------------------------- 색 */
  Chem.CATS = {
    alkali: { ko: "알칼리 금속", h: 0 }, alkaline: { ko: "알칼리 토금속", h: 28 }, transition: { ko: "전이 금속", h: 48 },
    post: { ko: "전이후 금속", h: 95 }, metalloid: { ko: "준금속", h: 150 }, nonmetal: { ko: "비금속", h: 190 },
    halogen: { ko: "할로젠", h: 215 }, noble: { ko: "비활성 기체", h: 265 }, lanthanide: { ko: "란타넘족", h: 305 },
    actinide: { ko: "악티늄족", h: 330 }, unknown: { ko: "미확인 성질", h: 0, s: 0 },
  };
  Chem.catColor = (cat, a) => { const c = Chem.CATS[cat] || Chem.CATS.unknown; return `hsla(${c.h},${c.s === 0 ? 0 : 70}%,${SB.isDark() ? 55 : 50}%,${a == null ? 0.3 : a})`; };
  /** CPK 색(three.js용 hex 숫자) */
  Chem.cpk = (sym) => {
    const fix = { H: "#f2f2f2", C: "#555555", N: "#3050f8", O: "#ff0d0d", F: "#90e050", Cl: "#1ff01f", Br: "#a62929", I: "#940094", S: "#ffff30", P: "#ff8000", B: "#ffb5b5", Xe: "#42a7c4" };
    const e = BY[sym]; const c = fix[sym] || (e && e.cpk) || "#ff69b4";
    return parseInt(c.slice(1), 16);
  };
  /** 0..1 → 연속 색 (viridis 근사, 라이트/다크 공용) */
  Chem.ramp = function (t) {
    t = Math.max(0, Math.min(1, t));
    const S = [[68, 1, 84], [59, 82, 139], [33, 145, 140], [94, 201, 98], [253, 231, 37]];
    const x = t * (S.length - 1), i = Math.min(S.length - 2, Math.floor(x)), f = x - i;
    const c = S[i].map((v, k) => Math.round(v + (S[i + 1][k] - v) * f));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  };

  /* ---------------------------------------------------------------- 주기율표 위젯 */
  Chem.PROPS = {
    cat: { ko: "분류" },
    block: { ko: "구역(s·p·d·f)" },
    mass: { ko: "원자량", unit: "g/mol" },
    chi: { ko: "전기음성도(폴링)", unit: "" },
    ie1: { ko: "1차 이온화 에너지", unit: "kJ/mol" },
    ea: { ko: "전자 친화도", unit: "kJ/mol" },
    radius: { ko: "원자 반지름", unit: "pm" },
    rcov: { ko: "공유 반지름", unit: "pm" },
    density: { ko: "밀도", unit: "g/cm³", log: true },
    mp: { ko: "녹는점", unit: "K" },
    bp: { ko: "끓는점", unit: "K" },
  };
  /** 주기율표 배치(행, 열). f-구역은 9·10행(8행은 간격). */
  Chem.position = function (e) {
    if (e.Z >= 57 && e.Z <= 71) return [9, e.Z - 57 + 3];
    if (e.Z >= 89 && e.Z <= 103) return [10, e.Z - 89 + 3];
    return [e.period, e.group];
  };
  /**
   * 대화형 주기율표.
   *   const pt = Chem.periodicTable(el, { prop:'chi', onSelect:(e)=>{}, filter:(e)=>bool, info:true, compact:false })
   *   pt.set({prop:'ie1'}), pt.select('Fe')
   */
  Chem.periodicTable = function (container, opts = {}) {
    if (typeof container === "string") container = document.querySelector(container);
    const st = Object.assign({ prop: "cat", info: true, selected: null }, opts);
    container.innerHTML = `<div class="pt-wrap" style="padding:14px 14px 4px"><div class="ptable" role="grid" aria-label="주기율표"></div></div><div class="pt-legend"></div><div class="pt-scale"></div><div class="pt-scale-l"></div>${st.info ? '<div class="pt-info" aria-live="polite"></div>' : ""}`;
    const grid = container.querySelector(".ptable");
    const cells = {};
    // 빈 칸 + 셀 배치
    const html = [];
    E.forEach((e) => {
      const [r, c] = Chem.position(e);
      html.push(`<button class="cell" data-z="${e.Z}" style="grid-row:${r};grid-column:${c}" title="${e.Z} ${e.sym} ${e.ko}"><span class="z">${e.Z}</span><span class="s">${e.sym}</span><span class="v"></span></button>`);
    });
    html.push(`<div class="cell lbl" style="grid-row:6;grid-column:3;cursor:default">57–71</div><div class="cell lbl" style="grid-row:7;grid-column:3;cursor:default">89–103</div><div class="gap" style="grid-row:8;grid-column:1"></div>`);
    grid.innerHTML = html.join("");
    grid.querySelectorAll("button.cell").forEach((b) => (cells[b.dataset.z] = b));
    grid.addEventListener("click", (ev) => { const b = ev.target.closest("button.cell"); if (b) select(Number(b.dataset.z)); });
    const legend = container.querySelector(".pt-legend"), scale = container.querySelector(".pt-scale"), scaleL = container.querySelector(".pt-scale-l");
    const info = container.querySelector(".pt-info");
    const fmtV = (k, v) => (v == null ? "—" : k === "density" ? SB.fmt(v, 3) : k === "mass" ? (v >= 100 ? v.toFixed(2) : v.toFixed(3)) : String(Math.round(v * 100) / 100));
    function paint() {
      const k = st.prop;
      const vals = E.map((e) => e[k]).filter((v) => typeof v === "number");
      const P = Chem.PROPS[k] || {};
      let lo = Math.min(...vals), hi = Math.max(...vals);
      const tr = (v) => (P.log ? Math.log10(Math.max(v, 1e-6)) : v);
      if (P.log) { lo = tr(Math.max(lo, 1e-6)); hi = tr(hi); }
      E.forEach((e) => {
        const b = cells[e.Z], v = e[k];
        let bg;
        if (k === "cat") bg = Chem.catColor(e.cat, 0.32);
        else if (k === "block") bg = `hsla(${{ s: 0, p: 200, d: 45, f: 290 }[e.block]},70%,50%,0.3)`;
        else bg = typeof v === "number" ? Chem.ramp((tr(v) - lo) / (hi - lo || 1)) : "var(--surface)";
        b.style.background = bg;
        const numeric = k !== "cat" && k !== "block";
        b.style.color = numeric && typeof v === "number" ? ((tr(v) - lo) / (hi - lo || 1) > 0.62 ? "#111" : "#fff") : "";
        b.querySelector(".v").textContent = numeric && typeof v === "number" ? (k === "density" ? SB.fmt(v, 2) : Math.round(v)) : "";
        const pass = !st.filter || st.filter(e);
        b.classList.toggle("dim", !pass);
      });
      if (k === "cat") {
        legend.innerHTML = Object.keys(Chem.CATS).map((c) => `<span><i style="background:${Chem.catColor(c, 0.6)}"></i>${Chem.CATS[c].ko}</span>`).join("");
        scale.style.display = scaleL.style.display = "none";
      } else if (k === "block") {
        legend.innerHTML = ["s", "p", "d", "f"].map((c) => `<span><i style="background:hsla(${{ s: 0, p: 200, d: 45, f: 290 }[c]},70%,50%,0.6)"></i>${c} 구역</span>`).join("");
        scale.style.display = scaleL.style.display = "none";
      } else {
        legend.innerHTML = `<span>${P.ko}${P.unit ? " (" + P.unit + ")" : ""} · 회색: 자료 없음</span>`;
        scale.style.display = scaleL.style.display = "";
        scale.style.background = `linear-gradient(90deg, ${[0, 0.25, 0.5, 0.75, 1].map((t) => Chem.ramp(t)).join(",")})`;
        const back = (u) => (P.log ? Math.pow(10, u) : u);
        scaleL.innerHTML = `<span>${fmtV(k, back(lo))}</span><span>${fmtV(k, back((lo + hi) / 2))}</span><span>${fmtV(k, back(hi))}</span>`;
      }
      if (st.selected) showInfo(BY[st.selected]);
    }
    function showInfo(e) {
      if (!info || !e) return;
      const row = (k) => `<div><span class="k">${Chem.PROPS[k].ko}</span>${fmtV(k, e[k])}${e[k] != null && Chem.PROPS[k].unit ? " " + Chem.PROPS[k].unit : ""}</div>`;
      info.innerHTML = `<div class="big"><b>${e.sym}</b><span>${e.Z}번 ${e.ko} <span class="en">(${e.en})</span></span><span class="badge">${(Chem.CATS[e.cat] || {}).ko || ""}</span></div>
        <div><span class="k">전자 배치</span><span class="t-mono">${(e.config || "—").replace(/([spdf])(\d+)/g, "$1<sup>$2</sup>")}</span></div>
        <div><span class="k">주기·족</span>${e.period}주기 · ${e.group ? e.group + "족" : "f 구역"}</div>
        ${["mass", "chi", "ie1", "ea", "radius", "density", "mp", "bp"].map(row).join("")}
        ${e.radioactive ? '<div><span class="k">비고</span>안정 동위원소 없음(원자량은 대표 동위원소의 질량수)</div>' : ""}`;
    }
    function select(z) {
      const e = BY[z]; if (!e) return;
      if (st.selected && cells[BY[st.selected].Z]) cells[BY[st.selected].Z].classList.remove("sel");
      st.selected = e.sym; cells[e.Z].classList.add("sel");
      showInfo(e);
      if (st.onSelect) st.onSelect(e);
    }
    paint();
    SB.onTheme(paint);
    if (opts.select) select(opts.select);
    return { set(o) { Object.assign(st, o); paint(); }, select, get state() { return st; } };
  };

  /* ---------------------------------------------------------------- VSEPR */
  const V = (x, y, z) => { const n = Math.hypot(x, y, z); return [x / n, y / n, z / n]; };
  const TET = [V(1, 1, 1), V(-1, -1, 1), V(-1, 1, -1), V(1, -1, -1)];
  const ROT = (d) => { /* 정사면체를 위쪽(+y)에 꼭짓점 하나가 오도록 회전 */
    const s = Math.sqrt(1 / 3), a = [s, s, s];
    // a를 +y로 보내는 회전 (로드리게스)
    const k = V(a[2], 0, -a[0]), th = Math.acos(a[1]), c = Math.cos(th), sn = Math.sin(th);
    const dot = k[0] * d[0] + k[1] * d[1] + k[2] * d[2];
    const cr = [k[1] * d[2] - k[2] * d[1], k[2] * d[0] - k[0] * d[2], k[0] * d[1] - k[1] * d[0]];
    return [0, 1, 2].map((i) => d[i] * c + cr[i] * sn + k[i] * dot * (1 - c));
  };
  const DOMAINS = {
    2: [[1, 0, 0], [-1, 0, 0]],
    3: [[0, 1, 0], [Math.sin(2 * Math.PI / 3), Math.cos(2 * Math.PI / 3), 0], [-Math.sin(2 * Math.PI / 3), Math.cos(2 * Math.PI / 3), 0]],
    4: TET.map(ROT),
    5: [[0, 1, 0], [0, -1, 0], [1, 0, 0], [Math.cos(2 * Math.PI / 3), 0, Math.sin(2 * Math.PI / 3)], [Math.cos(4 * Math.PI / 3), 0, Math.sin(4 * Math.PI / 3)]],
    6: [[0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]],
  };
  // 비공유 전자쌍이 차지하는 자리(인덱스) — 반발이 가장 작은 배치
  const LP_SLOTS = { 2: [], 3: [0], 4: [0, 1], 5: [2, 3, 4], 6: [0, 1, 2, 3] };
  const SHAPES = {
    "2,0": ["직선형", "linear", "180°"], "3,0": ["평면 삼각형", "trigonal planar", "120°"], "2,1": ["굽은형", "bent", "<120°"],
    "4,0": ["정사면체형", "tetrahedral", "109.5°"], "3,1": ["삼각뿔형", "trigonal pyramidal", "≈107°"], "2,2": ["굽은형", "bent", "≈104.5°"],
    "5,0": ["삼각쌍뿔형", "trigonal bipyramidal", "90°, 120°"], "4,1": ["시소형", "seesaw", "<90°, <120°"], "3,2": ["T자형", "T-shaped", "<90°"], "2,3": ["직선형", "linear", "180°"],
    "6,0": ["팔면체형", "octahedral", "90°"], "5,1": ["사각뿔형", "square pyramidal", "<90°"], "4,2": ["평면 사각형", "square planar", "90°"],
  };
  const ELECTRON_GEOM = { 2: "직선형", 3: "평면 삼각형", 4: "정사면체", 5: "삼각쌍뿔", 6: "팔면체" };
  /**
   * AXnEm 이상적 방향.
   *   Chem.vsepr(3,1) → { bonds:[[x,y,z]...], lps:[[...]], shape:'삼각뿔형', en:'trigonal pyramidal', angle:'≈107°', electronGeom:'정사면체' }
   */
  Chem.vsepr = function (n, m) {
    const sn = n + m;
    if (!DOMAINS[sn] || !SHAPES[n + "," + m]) return null;
    const d = DOMAINS[sn];
    let lpIdx = m === 0 ? [] : sn === 5 ? [2, 3, 4].slice(0, m) : sn === 6 ? (m === 1 ? [0] : [0, 1]) : LP_SLOTS[sn].slice(0, m);
    if (sn === 5 && m === 3) lpIdx = [2, 3, 4];
    const bonds = d.filter((_, i) => !lpIdx.includes(i)), lps = lpIdx.map((i) => d[i]);
    const [shape, en, angle] = SHAPES[n + "," + m];
    return { bonds, lps, shape, en, angle, electronGeom: ELECTRON_GEOM[sn], steric: sn };
  };

  /* ---------------------------------------------------------------- 3D 분자 뷰어 */
  /**
   * 공-막대 분자 모형.
   *   const mol = Chem.molecule(el, {
   *     atoms: [['O',0,0,0], ['H',0.76,0.59,0], ['H',-0.76,0.59,0]],   // Å
   *     bonds: [[0,1,1],[0,2,1]],            // [i, j, 결합차수]
   *     lonePairs: [[0, dx,dy,dz], ...],     // 원자 i에서 방향 (단위벡터)
   *     labels: true, autoRotate: true, style:'ball'|'space'
   *   });
   *   mol.set(spec) 로 교체, mol.T 는 SB.three 씬
   */
  Chem.molecule = function (container, spec, opts = {}) {
    const T = SB.three(container, Object.assign({ camera: [0, 1.2, 7], fov: 35, autoRotate: spec.autoRotate !== false, minDistance: 2, maxDistance: 30 }, opts));
    if (!T) return null;
    const THREE = T.THREE;
    const group = new THREE.Group();
    T.scene.add(group);
    let labels = [];
    const sphere = new THREE.SphereGeometry(1, 32, 20);
    const cyl = new THREE.CylinderGeometry(1, 1, 1, 16);
    const lobe = new THREE.SphereGeometry(1, 24, 16);
    function clear() {
      while (group.children.length) group.remove(group.children[0]);
      labels.forEach((L) => L.remove()); labels = [];
    }
    function bond(a, b, r, mat) {
      const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
      const mid = va.clone().add(vb).multiplyScalar(0.5), dir = vb.clone().sub(va), len = dir.length();
      const m = new THREE.Mesh(cyl, mat);
      m.scale.set(r, len, r);
      m.position.copy(mid);
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
      group.add(m);
    }
    function set(s) {
      spec = s; clear();
      const space = s.style === "space";
      const rad = (sym) => { const e = BY[sym]; const rc = (e && e.rcov) || 75; return space ? rc / 100 * 1.35 : 0.18 + rc / 100 * 0.22; };
      s.atoms.forEach(([sym, x, y, z], i) => {
        const m = new THREE.Mesh(sphere, T.material(Chem.cpk(sym), { roughness: 0.35 }));
        const r = rad(sym); m.scale.set(r, r, r); m.position.set(x, y, z); group.add(m);
        if (s.labels !== false && !space) labels.push(T.label(s.labelText ? s.labelText[i] : sym, [x, y + r + 0.18, z]));
      });
      if (!space) {
        const bm = T.material(0x9aa3b5, { roughness: 0.5 });
        (s.bonds || []).forEach(([i, j, order = 1]) => {
          const a = s.atoms[i].slice(1), b = s.atoms[j].slice(1);
          if (order === 1) { bond(a, b, 0.07, bm); return; }
          // 결합 축에 수직한 오프셋
          const d = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]).normalize();
          let p = new THREE.Vector3(0, 0, 1).cross(d); if (p.length() < 0.1) p = new THREE.Vector3(1, 0, 0).cross(d);
          p.normalize().multiplyScalar(0.11);
          const offs = order === 2 ? [-1, 1] : [-1.4, 0, 1.4];
          offs.forEach((k) => bond([a[0] + p.x * k, a[1] + p.y * k, a[2] + p.z * k], [b[0] + p.x * k, b[1] + p.y * k, b[2] + p.z * k], 0.05, bm));
        });
        const lm = new THREE.MeshStandardMaterial({ color: 0x8f7dff, transparent: true, opacity: 0.35, roughness: 0.6, depthWrite: false });
        (s.lonePairs || []).forEach(([i, dx, dy, dz]) => {
          const [, x, y, z] = s.atoms[i];
          const m = new THREE.Mesh(lobe, lm);
          const dir = new THREE.Vector3(dx, dy, dz).normalize();
          m.scale.set(0.22, 0.42, 0.22);
          m.position.set(x + dir.x * 0.62, y + dir.y * 0.62, z + dir.z * 0.62);
          m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
          group.add(m);
        });
      }
      // 중심 맞추기
      const box = new THREE.Box3().setFromObject(group), c = box.getCenter(new THREE.Vector3());
      group.position.set(-c.x, -c.y, -c.z);
      labels.forEach((L) => (L.obj = group));
    }
    set(spec);
    return { T, set, group };
  };
  /** VSEPR 결과를 분자 모형 spec으로: Chem.vseprSpec(4,0,'C','H', 1.09) */
  Chem.vseprSpec = function (n, m, center = "A", outer = "X", len = 1.2) {
    const v = Chem.vsepr(n, m);
    if (!v) return null;
    const atoms = [[center, 0, 0, 0], ...v.bonds.map((d) => [outer, d[0] * len, d[1] * len, d[2] * len])];
    return { atoms, bonds: v.bonds.map((_, i) => [0, i + 1, 1]), lonePairs: v.lps.map((d) => [0, ...d]), info: v };
  };
})();
