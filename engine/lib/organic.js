/* ==========================================================================
   engine/lib/organic.js — 유기화학 공용 라이브러리 (전역 Org)
   - SMILES 해석, 고리 인식, 케쿨레화, 분자식·몰 질량·불포화도, 작용기 찾기
   - 2D 골격 구조식 자동 배치와 그리기(캔버스·SVG), 본문 자동 렌더(<span class="mol" data-smiles>)
   - 반응식(scheme)·굽은 화살표·메커니즘 재생기
   - CIP 우선순위와 R/S·E/Z, 입체 중심 찾기, 위상 동등 원자
   - 뉴먼·의자·피셔 투영, 3D 좌표 생성(거리 기하 + 키랄 부피), 캔버스 3D 그리기, three.js 뷰어
   - ¹H·¹³C NMR·IR·MS 예측과 스펙트럼 그리기, 휘켈 MO, 반응 에너지 도표, 자료표
   의존: scibook.js(SB). Org.mol3d만 chem.js·three.js가 필요하다.
   좌표: 결합 길이 = 1 단위, 화면 좌표(x 오른쪽, y 아래).
   ========================================================================== */
(function () {
  "use strict";
  const Org = (window.Org = window.Org || {});
  Org.version = "1.0";
  const TAU = Math.PI * 2, D2R = Math.PI / 180;
  const hyp = Math.hypot;

  /* ------------------------------------------------------------------ 원소 */
  // sym → {Z, m(평균 원자량), val(보통 원자가 목록), ve(원자가 전자 수), iso([[질량, 존재비]])}
  const EL = {};
  function defEl(sym, Z, m, val, ve, iso) { EL[sym] = { sym, Z, m, val: val || [], ve: ve || 0, iso: iso || null }; }
  defEl("H", 1, 1.008, [1], 1, [[1.00782503, 0.999885], [2.01410178, 0.000115]]);
  defEl("B", 5, 10.81, [3], 3, [[10.0129370, 0.199], [11.0093054, 0.801]]);
  defEl("C", 6, 12.011, [4], 4, [[12, 0.9893], [13.00335484, 0.0107]]);
  defEl("N", 7, 14.007, [3, 5], 5, [[14.00307401, 0.99636], [15.00010890, 0.00364]]);
  defEl("O", 8, 15.999, [2], 6, [[15.99491462, 0.99757], [16.99913176, 0.00038], [17.99915961, 0.00205]]);
  defEl("F", 9, 18.998, [1], 7, [[18.99840316, 1]]);
  defEl("Si", 14, 28.085, [4], 4, [[27.97692653, 0.92223], [28.97649466, 0.04685], [29.97377014, 0.03092]]);
  defEl("P", 15, 30.974, [3, 5], 5, [[30.97376200, 1]]);
  defEl("S", 16, 32.06, [2, 4, 6], 6, [[31.97207117, 0.9499], [32.97145890, 0.0075], [33.9678670, 0.0425], [35.96708071, 0.0001]]);
  defEl("Cl", 17, 35.45, [1], 7, [[34.96885268, 0.7576], [36.96590260, 0.2424]]);
  defEl("Br", 35, 79.904, [1], 7, [[78.9183376, 0.5069], [80.9162897, 0.4931]]);
  defEl("I", 53, 126.904, [1], 7, [[126.9044719, 1]]);
  [["He", 2, 4.0026], ["Li", 3, 6.94, [1], 1], ["Be", 4, 9.0122, [2], 2], ["Ne", 10, 20.180], ["Na", 11, 22.990, [1], 1], ["Mg", 12, 24.305, [2], 2],
   ["Al", 13, 26.982, [3], 3], ["Ar", 18, 39.95], ["K", 19, 39.098, [1], 1], ["Ca", 20, 40.078, [2], 2], ["Ti", 22, 47.867, [4], 4], ["V", 23, 50.942],
   ["Cr", 24, 51.996], ["Mn", 25, 54.938], ["Fe", 26, 55.845], ["Co", 27, 58.933], ["Ni", 28, 58.693], ["Cu", 29, 63.546], ["Zn", 30, 65.38, [2], 2],
   ["Ga", 31, 69.723, [3], 3], ["Ge", 32, 72.630, [4], 4], ["As", 33, 74.922, [3, 5], 5], ["Se", 34, 78.971, [2, 4, 6], 6], ["Kr", 36, 83.798],
   ["Rb", 37, 85.468, [1], 1], ["Sr", 38, 87.62, [2], 2], ["Zr", 40, 91.224, [4], 4], ["Nb", 41, 92.906], ["Mo", 42, 95.95], ["Ru", 44, 101.07],
   ["Rh", 45, 102.91], ["Pd", 46, 106.42], ["Ag", 47, 107.87], ["Cd", 48, 112.41], ["In", 49, 114.82, [3], 3], ["Sn", 50, 118.71, [4], 4],
   ["Sb", 51, 121.76, [3, 5], 5], ["Te", 52, 127.60, [2, 4, 6], 6], ["Xe", 54, 131.29], ["Cs", 55, 132.91, [1], 1], ["Ba", 56, 137.33, [2], 2],
   ["La", 57, 138.91], ["Hf", 72, 178.49, [4], 4], ["Ta", 73, 180.95, [5], 5], ["W", 74, 183.84, [6], 6], ["Re", 75, 186.21], ["Os", 76, 190.23],
   ["Ir", 77, 192.22], ["Pt", 78, 195.08], ["Au", 79, 196.97], ["Hg", 80, 200.59], ["Pb", 82, 207.2], ["Bi", 83, 208.98]]
    .forEach(([s, Z, m, val, ve]) => defEl(s, Z, m, val, ve));
  Org.EL = EL;

  /* ------------------------------------------------------------------ SMILES */
  /**
   * SMILES → 분자 그래프.
   *   Org.parse("CC(=O)O") → { atoms:[{el,Z,h,charge,arom,iso,map,chiral,label,comp,…}], bonds:[{a,b,order,arom,stereo}], rings, adj, … }
   * 지원: 유기 부분집합(B C N O P S F Cl Br I), 방향족 소문자, [괄호 원자](동위원소·@/@@·H수·전하·:맵 번호),
   * 가지 ( ), 고리 번호(숫자·%nn), 결합 - = # / \ : , 성분 분리 '.'.
   * 책 전용 확장: '~' 부분 결합(점선, 전이 상태), '$' 1.5중 결합(실선+점선, 공명 혼성).
   * 원소표에 없는 괄호 내용은 이름표 원자: [R] [R'] [Nu-] [Ph] [OTs] [Me] [X] [Ar] [LG] [E+] 등(원자가 1).
   */
  Org.parse = function (smi) {
    if (smi && smi.atoms) return smi;
    smi = String(smi || "").trim();
    const atoms = [], bonds = [], ringOpen = {}, stack = [];
    let prev = -1, pend = null, comp = 0, i = 0;
    const err = (m) => { throw new Error(`SMILES 해석 오류 "${smi}" (${i}번째 글자): ${m}`); };
    const addAtom = (a) => { a.i = atoms.length; a.nb = []; a.comp = comp; atoms.push(a); return a.i; };
    function bondSpec(sym, aA, aB) {
      switch (sym) {
        case "=": return { order: 2 };
        case "#": return { order: 3 };
        case "$": return { order: 1.5, deloc: true };
        case "~": return { order: 0.5, partial: true };
        case ":": return { order: 1.5, arom: true };
        case "/": case "\\": return { order: 1, stereo: sym };
        case "-": return { order: 1 };
        default: return aA.arom && aB.arom ? { order: 1.5, arom: true } : { order: 1 };
      }
    }
    function addBond(a, b, sym) {
      const s = bondSpec(sym, atoms[a], atoms[b]);
      const bd = Object.assign({ a, b, i: bonds.length, order: 1 }, s);
      bonds.push(bd);
      return bd;
    }
    while (i < smi.length) {
      const ch = smi[i];
      if (ch === " ") break;
      if (ch === "(") { stack.push(prev); i++; continue; }
      if (ch === ")") { if (!stack.length) err("닫는 괄호가 남습니다"); prev = stack.pop(); i++; continue; }
      if ("-=#$:/\\~".includes(ch)) { pend = ch; i++; continue; }
      if (ch === ".") { prev = -1; pend = null; comp++; i++; continue; }
      if (/[0-9%]/.test(ch)) {
        let d;
        if (ch === "%") { d = smi.substr(i + 1, 2); i += 3; } else { d = ch; i++; }
        if (prev < 0) err("고리 번호 앞에 원자가 없습니다");
        if (ringOpen[d]) {
          const o = ringOpen[d]; delete ringOpen[d];
          const bd = addBond(o.atom, prev, pend || o.sym);
          if (bd.stereo && o.sym && !pend) bd.stereoFrom = o.atom;
          atoms[o.atom].nb[o.slot] = prev;
          atoms[prev].nb.push(o.atom);
        } else {
          ringOpen[d] = { atom: prev, sym: pend, slot: atoms[prev].nb.length };
          atoms[prev].nb.push(null);
        }
        pend = null;
        continue;
      }
      let a;
      if (ch === "[") {
        const j = smi.indexOf("]", i);
        if (j < 0) err("닫는 ] 가 없습니다");
        const body = smi.slice(i + 1, j);
        i = j + 1;
        const m = /^(\d+)?([A-Z][a-z]?|se|as|[bcnops]|\*)(@@|@)?(H\d*)?([+-]+\d*|[+-]\d+)?(?::(\d+))?$/.exec(body);
        let ok = m && (m[2] === "*" || EL[m[2]] || /^(se|as|[bcnops])$/.test(m[2]));
        if (ok && m[2] && /^[A-Z]/.test(m[2]) && !EL[m[2]]) ok = false;
        if (ok) {
          const arom = /^[a-z]/.test(m[2]);
          const sym = arom ? (m[2].length === 2 ? m[2][0].toUpperCase() + m[2][1] : m[2].toUpperCase()) : m[2];
          let charge = 0;
          if (m[5]) { const sg = m[5][0] === "+" ? 1 : -1; const num = m[5].replace(/[+-]/g, ""); charge = sg * (num ? Number(num) : m[5].length); }
          a = { el: sym === "*" ? "*" : sym, arom, iso: m[1] ? Number(m[1]) : 0, chiral: m[3] || null, h: m[4] ? Number(m[4].slice(1) || 1) : 0, charge, map: m[6] ? Number(m[6]) : 0, bracket: true };
          if (sym === "*") a.label = "*";
        } else {
          // 이름표 원자: [R'] [Nu-] [OTs:3] …
          const mm = /^(.*?)([+-]+)?(?::(\d+))?$/.exec(body);
          let charge = 0;
          if (mm[2]) charge = (mm[2][0] === "+" ? 1 : -1) * mm[2].length;
          a = { el: "*", label: mm[1], arom: false, iso: 0, chiral: null, h: 0, charge, map: mm[3] ? Number(mm[3]) : 0, bracket: true };
        }
      } else {
        let sym = null;
        const two = smi.substr(i, 2);
        if (two === "Cl" || two === "Br") { sym = two; i += 2; a = { el: sym, arom: false }; }
        else if (two === "se" || two === "as") { i += 2; a = { el: two[0].toUpperCase() + two[1], arom: true }; }
        else if ("BCNOPSFI".includes(ch)) { i++; a = { el: ch, arom: false }; }
        else if ("bcnops".includes(ch)) { i++; a = { el: ch.toUpperCase(), arom: true }; }
        else if (ch === "*") { i++; a = { el: "*", label: "*", arom: false }; }
        else err(`알 수 없는 글자 '${ch}'`);
        Object.assign(a, { iso: 0, chiral: null, h: null, charge: 0, map: 0, bracket: false });
      }
      a.Z = a.el === "*" ? 0 : EL[a.el].Z;
      const idx = addAtom(a);
      if (a.bracket && a.h > 0 && a.chiral) a.hSlot = prev >= 0 ? 1 : 0; // 암시적 H의 자리(키랄 순서)
      if (prev >= 0) {
        const bd = addBond(prev, idx, pend);
        atoms[prev].nb.push(idx);
        atoms[idx].nb.push(prev);
        void bd;
      }
      pend = null;
      prev = idx;
    }
    if (Object.keys(ringOpen).length) err("닫히지 않은 고리 번호가 있습니다");
    if (stack.length) err("닫히지 않은 괄호가 있습니다");
    const mol = { smiles: smi, atoms, bonds };
    finishMol(mol);
    return mol;
  };

  function buildAdj(mol) {
    mol.adj = mol.atoms.map(() => []);
    mol.bonds.forEach((b) => { mol.adj[b.a].push({ n: b.b, b }); mol.adj[b.b].push({ n: b.a, b }); });
  }
  const bsum = (mol, i, aromAsOne) => mol.adj[i].reduce((s, e) => s + (e.b.partial ? 0 : e.b.arom && aromAsOne ? 1 : e.b.order), 0);
  Org.bondOrderSum = (mol, i) => bsum(mol, i, false);
  function finishMol(mol) {
    buildAdj(mol);
    const { atoms } = mol;
    // 암시적 수소
    atoms.forEach((a, i) => {
      if (a.bracket) return;
      const e = EL[a.el];
      if (!e || !e.val.length) { a.h = 0; return; }
      let s = bsum(mol, i, true);
      if (a.arom && !(a.el === "O" || a.el === "S" || a.el === "Se")) s += 1;
      if (a.arom && a.el === "N" && mol.adj[i].length === 3) s -= 1; // 방향족 N 치환체(피롤형)
      const v = e.val.find((x) => x >= s);
      a.h = v == null ? 0 : Math.max(0, Math.floor(v - s + 1e-9));
    });
    kekulize(mol);
    findRings(mol);
    mol.ez = ezFromSmiles(mol);
    mol.hasMap = atoms.some((a) => a.map);
    mol.ncomp = atoms.length ? Math.max(...atoms.map((a) => a.comp)) + 1 : 0;
    return mol;
  }

  /* 방향족 결합을 1·2중 결합으로 (그리기·CIP·3D 용). 실패하면 1.5 유지 */
  function kekulize(mol) {
    const { atoms, bonds, adj } = mol;
    const ab = bonds.filter((b) => b.arom);
    if (!ab.length) return;
    const need = atoms.map((a, i) => {
      if (!a.arom) return false;
      const sig = adj[i].length + a.h;
      if (a.el === "C") return a.charge === 0 && sig === 3;
      if (a.el === "N" || a.el === "P") return (a.charge === 0 && sig === 2) || (a.charge === 1 && sig === 3);
      if (a.el === "O" || a.el === "S" || a.el === "Se") return a.charge === 1 && sig === 2;
      if (a.el === "B") return a.charge === -1 && sig === 3;
      return false;
    });
    const match = new Array(atoms.length).fill(-1);
    const order = atoms.map((_, i) => i).filter((i) => need[i]).sort((x, y) => adj[x].filter((e) => e.b.arom && need[e.n]).length - adj[y].filter((e) => e.b.arom && need[e.n]).length);
    function augment(u, seen) {
      for (const e of adj[u]) {
        if (!e.b.arom || !need[e.n] || seen[e.n]) continue;
        seen[e.n] = 1;
        if (match[e.n] < 0 || augment(match[e.n], seen)) { match[u] = e.n; match[e.n] = u; return true; }
      }
      return false;
    }
    let ok = true;
    for (const u of order) if (match[u] < 0 && !augment(u, {})) { ok = false; }
    if (!ok) return; // 케쿨레 구조를 못 찾음: 1.5로 둔다
    ab.forEach((b) => { b.order = match[b.a] === b.b ? 2 : 1; b.kek = true; });
  }

  /* 고리: 호턴 후보 → GF(2) 독립 집합(SSSR). 각 고리는 순서 있는 원자 배열 */
  function findRings(mol) {
    const { atoms, bonds, adj } = mol;
    const n = atoms.length;
    mol.rings = [];
    bonds.forEach((b) => (b.ring = false));
    atoms.forEach((a) => (a.rings = []));
    // 성분별 순환수
    const compOf = new Array(n).fill(-1);
    let nc = 0;
    for (let s = 0; s < n; s++) {
      if (compOf[s] >= 0) continue;
      const q = [s]; compOf[s] = nc;
      while (q.length) { const u = q.pop(); adj[u].forEach((e) => { if (compOf[e.n] < 0) { compOf[e.n] = nc; q.push(e.n); } }); }
      nc++;
    }
    const need = bonds.length - n + nc;
    if (need <= 0) return;
    const bkey = (u, v) => (u < v ? u + "," + v : v + "," + u);
    const bidx = {};
    bonds.forEach((b, k) => (bidx[bkey(b.a, b.b)] = k));
    const cands = [], seen = new Set();
    for (let r = 0; r < n; r++) {
      const par = new Array(n).fill(-2), dist = new Array(n).fill(-1);
      par[r] = -1; dist[r] = 0;
      const q = [r];
      for (let h = 0; h < q.length; h++) { const u = q[h]; adj[u].forEach((e) => { if (dist[e.n] < 0) { dist[e.n] = dist[u] + 1; par[e.n] = u; q.push(e.n); } }); }
      const path = (v) => { const p = []; while (v >= 0) { p.push(v); v = par[v]; } return p; }; // v … r
      bonds.forEach((b) => {
        const x = b.a, y = b.b;
        if (dist[x] < 0 || dist[y] < 0 || par[x] === y || par[y] === x) return;
        const px = path(x), py = path(y);
        const sx = new Set(px);
        if (py.some((v) => v !== r && sx.has(v))) return;
        const cyc = px.slice().reverse().concat(py.slice(0, -1)); // r … x, y … (r 앞)
        // 순서: r→…→x→y→…→(r 앞)
        const cycle = px.slice().reverse(); // r..x
        for (let k = 0; k < py.length - 1; k++) cycle.push(py[k]); // y..(r의 자식)
        void cyc;
        let bits = 0n;
        for (let k = 0; k < cycle.length; k++) bits |= 1n << BigInt(bidx[bkey(cycle[k], cycle[(k + 1) % cycle.length])]);
        const key = bits.toString(36);
        if (seen.has(key)) return;
        seen.add(key);
        cands.push({ cycle, bits, len: cycle.length });
      });
    }
    cands.sort((p, q) => p.len - q.len);
    const basis = []; // 피벗 소거된 비트들
    for (const c of cands) {
      let v = c.bits;
      for (const b of basis) if ((v ^ b.v) < v) v ^= b.v;
      if (v === 0n) continue;
      basis.push({ v });
      basis.sort((p, q) => (p.v > q.v ? -1 : 1));
      mol.rings.push(c.cycle);
      if (mol.rings.length >= need) break;
    }
    mol.rings.forEach((cyc, ri) => {
      cyc.forEach((v, k) => {
        atoms[v].rings.push(ri);
        const b = bonds[bidx[bkey(v, cyc[(k + 1) % cyc.length])]];
        b.ring = true;
        (b.rings = b.rings || []).push(ri);
      });
    });
  }

  /* SMILES의 / \ 로 정한 이중 결합 입체: [{x,y,A,B,cis}] (x=y 이중 결합, A는 x의 치환체, B는 y의 치환체) */
  function ezFromSmiles(mol) {
    const out = [];
    mol.bonds.forEach((db) => {
      if (db.order !== 2 || db.arom) return;
      const side = (x, other) => {
        for (const e of mol.adj[x]) {
          if (e.n === other || !e.b.stereo) continue;
          const dir = e.b.stereo === "/" ? 1 : -1;
          // 문자열에서 먼저 쓴 원자 → 나중 원자 방향으로 '/'는 오르막
          const first = e.b.stereoFrom != null ? e.b.stereoFrom : e.b.a;
          return { sub: e.n, s: first === x ? dir : -dir };
        }
        return null;
      };
      const p = side(db.a, db.b), q = side(db.b, db.a);
      if (p && q) out.push({ x: db.a, y: db.b, A: p.sub, B: q.sub, cis: p.s === q.s, bond: db.i });
    });
    return out;
  }

  /* ------------------------------------------------------------------ 성질 */
  /** 원소별 개수(암시적 H 포함). 이름표 원자는 건너뛴다. */
  Org.counts = function (m) {
    m = Org.parse(m);
    const c = {};
    m.atoms.forEach((a) => {
      if (a.el === "*") return;
      const s = a.el === "H" && a.iso === 2 ? "D" : a.el;
      c[s] = (c[s] || 0) + 1;
      if (a.h) c.H = (c.H || 0) + a.h;
    });
    return c;
  };
  /** 분자식(힐 순서): "C2H6O". 전하가 있으면 끝에 ⁺/⁻ */
  Org.formula = function (m, html) {
    m = Org.parse(m);
    const c = Org.counts(m), keys = Object.keys(c);
    const ord = c.C ? ["C", "H", "D"].filter((k) => c[k]).concat(keys.filter((k) => !["C", "H", "D"].includes(k)).sort()) : keys.sort();
    const q = m.atoms.reduce((s, a) => s + a.charge, 0);
    const sub = (n) => (n === 1 ? "" : html ? `<sub>${n}</sub>` : String(n));
    let s = ord.map((k) => k + sub(c[k])).join("");
    if (q) { const t = (Math.abs(q) > 1 ? Math.abs(q) : "") + (q > 0 ? "+" : "−"); s += html ? `<sup>${t}</sup>` : t; }
    return s;
  };
  Org.formulaHTML = (m) => Org.formula(m, true);
  /** 평균 몰 질량 g/mol */
  Org.mw = function (m) {
    const c = Org.counts(m);
    return Object.keys(c).reduce((s, k) => s + (k === "D" ? 2.0141 : EL[k].m) * c[k], 0);
  };
  /** 단일 동위원소(가장 흔한 동위원소) 정확 질량 */
  Org.exactMass = function (m) {
    const c = Org.counts(m);
    return Object.keys(c).reduce((s, k) => s + (k === "D" ? 2.01410178 : EL[k].iso ? EL[k].iso.reduce((b, x) => (x[1] > b[1] ? x : b))[0] : EL[k].m) * c[k], 0);
  };
  /** 불포화도(이중 결합 당량) = C − H/2 − X/2 + N/2 + 1 (Si는 C, P는 N처럼) */
  Org.dbe = function (m) {
    const c = Org.counts(m), g = (k) => c[k] || 0;
    const C = g("C") + g("Si") + g("Ge"), H = g("H") + g("D") + g("F") + g("Cl") + g("Br") + g("I"), N = g("N") + g("P");
    return C - H / 2 + N / 2 + 1;
  };
  /** 원자 i의 비공유 전자쌍 수와 홀전자 수 {lp, rad} */
  Org.electrons = function (m, i) {
    m = Org.parse(m);
    const a = m.atoms[i];
    if (a.el === "*" || !EL[a.el] || !EL[a.el].ve) return { lp: 0, rad: 0 };
    const hasPartial = m.adj[i].some((e) => e.b.partial);
    const nb = m.adj[i].reduce((s, e) => s + (e.b.partial ? 1 : e.b.order), 0) + a.h;
    let free = Math.floor(EL[a.el].ve - a.charge - nb + 1e-9);
    if (a.el === "B" || a.el === "Al") return { lp: Math.max(0, Math.floor(free / 2)), rad: 0 };
    if (free < 0) free = 0;
    // 탄소·질소 등에서 결합이 모자라면 홀전자(라디칼)
    const rad = hasPartial ? 0 : free % 2;
    return { lp: (free - rad) / 2, rad };
  };
  Org.heavyDegree = (m, i) => Org.parse(m).adj[i].length;

  /* ------------------------------------------------------------------ 위상 동등(모건 정제) */
  Org.classes = function (m) {
    m = Org.parse(m);
    const n = m.atoms.length;
    const bo = (b) => (b.arom ? 3 : Math.round(b.order * 2));
    let inv = m.atoms.map((a, i) => [a.Z, a.label || "", a.iso, a.charge, a.h, m.adj[i].length, m.adj[i].reduce((s, e) => s + bo(e.b), 0)].join("|"));
    let rank = rankOf(inv), nCls = new Set(rank).size;
    for (let it = 0; it < n + 2; it++) {
      inv = m.atoms.map((_, i) => rank[i] + ":" + m.adj[i].map((e) => rank[e.n] * 10 + bo(e.b)).sort((p, q) => p - q).join(","));
      const r2 = rankOf(inv), c2 = new Set(r2).size;
      rank = r2;
      if (c2 === nCls) break;
      nCls = c2;
    }
    return rank;
  };
  function rankOf(keys) {
    const u = [...new Set(keys)].sort();
    const map = new Map(u.map((k, i) => [k, i]));
    return keys.map((k) => map.get(k));
  }

  /* ------------------------------------------------------------------ CIP 우선순위 */
  // 계층 다이그래프를 넓이 우선으로 비교한다. 이중 결합은 중복 원자, 고리는 경로 위 원자의 중복으로 끝낸다.
  function cipTree(m, root, from) {
    // 노드: {Z, mass, atom, dup, kids(지연 생성)}
    const mk = (Z, mass, atom, dup, path) => ({ Z, mass, atom, dup, path, kids: null });
    const massOf = (a) => (a.iso ? a.iso : a.el === "*" ? 0 : EL[a.el].m);
    const top = mk(m.atoms[root].Z, massOf(m.atoms[root]), root, false, new Set([from, root]));
    top.parent = from;
    return top;
  }
  function cipKids(m, node) {
    if (node.kids) return node.kids;
    const K = [];
    if (node.dup || node.atom < 0) { node.kids = []; return node.kids; }
    const a = m.atoms[node.atom];
    if (node.atom == null) { node.kids = []; return node.kids; }
    const massOf = (x) => (x.iso ? x.iso : x.el === "*" ? 0 : EL[x.el].m);
    m.adj[node.atom].forEach((e) => {
      const nb = m.atoms[e.n];
      const ord = e.b.partial ? 0 : Math.round(e.b.order);
      if (e.n === node.parent) {
        // 부모 쪽 다중 결합의 중복 원자
        for (let k = 1; k < ord; k++) K.push({ Z: nb.Z, mass: massOf(nb), atom: -1, dup: true, kids: [] });
        return;
      }
      if (node.path.has(e.n)) { K.push({ Z: nb.Z, mass: massOf(nb), atom: -1, dup: true, kids: [] }); return; }
      const path = new Set(node.path); path.add(e.n);
      K.push({ Z: nb.Z, mass: massOf(nb), atom: e.n, parent: node.atom, dup: false, path, kids: null });
      for (let k = 1; k < ord; k++) K.push({ Z: nb.Z, mass: massOf(nb), atom: -1, dup: true, kids: [] });
    });
    for (let k = 0; k < a.h; k++) K.push({ Z: 1, mass: 1.008, atom: -1, dup: false, kids: [] });
    // 원자가를 채우지 못한 자리(비공유 전자쌍 등)는 Z=0 유령
    K.sort((p, q) => q.Z - p.Z || q.mass - p.mass);
    node.kids = K;
    return K;
  }
  const keyCmp = (p, q) => (q.Z - p.Z) || (q.mass - p.mass);
  function cmpKeyLists(A, B) {
    const L = Math.max(A.length, B.length, 3);
    for (let k = 0; k < L; k++) {
      const a = A[k] || { Z: 0, mass: 0 }, b = B[k] || { Z: 0, mass: 0 };
      if (a.Z !== b.Z) return a.Z > b.Z ? 1 : -1;
      if (Math.abs(a.mass - b.mass) > 1e-6) return a.mass > b.mass ? 1 : -1;
    }
    return 0;
  }
  /** 두 가지(branch)를 비교: >0 이면 A가 우선. 구(sphere)마다 부모 순위 → 자기 원자 → 자식 목록 순으로 탐색 순서를 정한다 */
  function cipCompare(m, A, B, maxDepth = 14) {
    if (A.Z !== B.Z) return A.Z > B.Z ? 1 : -1;
    if (Math.abs(A.mass - B.mass) > 1e-6) return A.mass > B.mass ? 1 : -1;
    let FA = [{ x: A, pos: 0 }], FB = [{ x: B, pos: 0 }];
    for (let d = 0; d < maxDepth; d++) {
      const order = (F) => F.map((f) => ({ x: f.x, pos: f.pos, k: cipKids(m, f.x) })).sort((p, q) => p.pos - q.pos || keyCmp(p.x, q.x) || -cmpKeyLists(p.k, q.k));
      const SA = order(FA), SB = order(FB);
      const L = Math.max(SA.length, SB.length);
      for (let k = 0; k < L; k++) {
        const c = cmpKeyLists(SA[k] ? SA[k].k : [], SB[k] ? SB[k].k : []);
        if (c) return c;
      }
      FA = []; FB = [];
      SA.forEach((s, idx) => s.k.forEach((x) => FA.push({ x, pos: idx })));
      SB.forEach((s, idx) => s.k.forEach((x) => FB.push({ x, pos: idx })));
      if (!FA.length && !FB.length) return 0;
    }
    return 0;
  }
  /** 원자 i의 치환체(이웃 원자 + 암시적 H)를 CIP 우선순위로 정렬: [{nb: 원자 번호 또는 'H', rank}] (높은 것 먼저), ties: 같은 순위가 있으면 true */
  Org.cipRank = function (m, i) {
    m = Org.parse(m);
    const subs = m.adj[i].map((e) => ({ nb: e.n, node: Object.assign(cipTree(m, e.n, i), { parent: i }), order: Math.round(e.b.order) }));
    for (let k = 0; k < m.atoms[i].h; k++) subs.push({ nb: "H", node: { Z: 1, mass: 1.008, atom: -1, dup: false, kids: [] } });
    // 다중 결합 상대는 중심 원자에도 중복 원자를 붙인다(E/Z·고리 중심에서 필요)
    const extra = [];
    m.adj[i].forEach((e) => { for (let k = 1; k < Math.round(e.b.order); k++) extra.push({ nb: "dup" + e.n, node: { Z: m.atoms[e.n].Z, mass: EL[m.atoms[e.n].el] ? EL[m.atoms[e.n].el].m : 0, atom: -1, dup: true, kids: [] } }); });
    const all = subs.concat(extra);
    all.sort((p, q) => -cipCompare(m, p.node, q.node));
    let ties = false;
    for (let k = 1; k < all.length; k++) if (cipCompare(m, all[k - 1].node, all[k].node) === 0) ties = true;
    return { order: all.map((s) => s.nb), ties, subs: all };
  };
  /** 입체 중심 후보: 네 치환체가 모두 다른 sp³ 원자(C, Si, N⁺, P, S 등). 반환: 원자 번호 배열 */
  Org.stereocenters = function (m) {
    m = Org.parse(m);
    const out = [];
    m.atoms.forEach((a, i) => {
      if (a.el === "*" || a.el === "H") return;
      const deg = m.adj[i].length + a.h;
      if (deg !== 4 || m.adj[i].some((e) => e.b.order !== 1 || e.b.partial)) return;
      const r = Org.cipRank(m, i);
      if (!r.ties) out.push(i);
    });
    return out;
  };
  // 순열의 홀짝: 0 짝수, 1 홀수
  function parity(arr) {
    const a = arr.slice(); let p = 0;
    for (let i = 0; i < a.length; i++) while (a[i] !== i) { const j = a[i]; [a[i], a[j]] = [a[j], a[i]]; p ^= 1; }
    return p;
  }
  /** SMILES 이웃 순서(암시적 H 포함). 'H'는 암시적 수소 */
  function chiralNbOrder(m, i) {
    const a = m.atoms[i];
    const nb = a.nb.slice();
    if (a.h === 1) nb.splice(a.hSlot != null ? a.hSlot : 0, 0, "H");
    return nb;
  }
  /** R/S: SMILES의 @/@@에서. 반환 'R' | 'S' | null */
  Org.rs = function (m, i) {
    m = Org.parse(m);
    const a = m.atoms[i];
    if (!a.chiral) return null;
    const nb = chiralNbOrder(m, i);
    if (nb.length !== 4) return null;
    const r = Org.cipRank(m, i);
    if (r.ties) return null;
    const pri = r.order; // 높은 것 먼저 (1,2,3,4)
    // 목표 순서 [4,1,2,3] 이면 '@' → R
    const target = [pri[3], pri[0], pri[1], pri[2]];
    const perm = nb.map((x) => target.findIndex((t) => t === x));
    if (perm.some((p) => p < 0)) return null;
    const odd = parity(perm);
    const at = a.chiral === "@";
    return (at !== !!odd) ? "R" : "S";
  };
  /** 모든 입체 표지: { centers:[{atom, label}], doubles:[{bond, label}] } (이중 결합은 좌표가 있으면 좌표로) */
  Org.cip = function (m) {
    m = Org.parse(m);
    const centers = [];
    m.atoms.forEach((a, i) => { if (a.chiral) { const L = Org.rs(m, i); if (L) centers.push({ atom: i, label: L }); } });
    const doubles = [];
    m.bonds.forEach((b) => {
      const L = Org.ez(m, b.i);
      if (L) doubles.push({ bond: b.i, label: L });
    });
    return { centers, doubles };
  };
  /** 이중 결합 b의 E/Z (SMILES의 / \ 또는 배치 좌표 m.xy 사용). 입체 이성질이 없으면 null */
  Org.ez = function (m, bi) {
    m = Org.parse(m);
    const b = m.bonds[bi];
    if (!b || b.order !== 2 || b.arom) return null;
    if (b.ring && b.rings && Math.min(...b.rings.map((r) => m.rings[r].length)) < 8) return null;
    const hi = (x, y) => {
      const subs = m.adj[x].filter((e) => e.n !== y).map((e) => ({ nb: e.n, node: Object.assign(cipTree(m, e.n, x), { parent: x }) }));
      for (let k = 0; k < m.atoms[x].h; k++) subs.push({ nb: "H", node: { Z: 1, mass: 1.008, atom: -1, kids: [] } });
      if (subs.length !== 2) return null;
      const c = cipCompare(m, subs[0].node, subs[1].node);
      if (c === 0) return null;
      return c > 0 ? subs[0].nb : subs[1].nb;
    };
    const A = hi(b.a, b.b), B = hi(b.b, b.a);
    if (A == null || B == null) return null;
    let cis = null;
    if (m.xy) {
      const side = (p) => { const [x1, y1] = m.xy[b.a], [x2, y2] = m.xy[b.b], [px, py] = p; return Math.sign((x2 - x1) * (py - y1) - (y2 - y1) * (px - x1)); };
      const pos = (sub, at, other) => {
        if (sub !== "H") return m.xy[sub];
        // 암시적 H: 다른 치환체의 반대쪽
        const o = m.adj[at].find((e) => e.n !== other);
        if (!o) return null;
        const [ax, ay] = m.xy[at], [ox, oy] = m.xy[o.n], [bx, by] = m.xy[other];
        // 결합축 대칭
        const dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy;
        const t = ((ox - ax) * dx + (oy - ay) * dy) / L;
        const fx = ax + t * dx, fy = ay + t * dy;
        return [2 * fx - ox, 2 * fy - oy];
      };
      const pA = pos(A, b.a, b.b), pB = pos(B, b.b, b.a);
      if (pA && pB) { const sA = side(pA), sB = side(pB); if (sA && sB) cis = sA === sB; }
    }
    if (cis == null) {
      const c = (m.ez || []).find((z) => z.bond === bi);
      if (!c) return null;
      // c.A / c.B 기준 → 최우선 치환체 기준으로 환산
      let s = c.cis;
      if (c.A !== A) s = !s;
      if (c.B !== B) s = !s;
      cis = s;
    }
    return cis ? "Z" : "E";
  };

  /* ------------------------------------------------------------------ 2D 배치 */
  /**
   * 2D 좌표 생성. m.xy = [[x,y],…] (결합 길이 1, 화면 좌표)
   *   opts: { rotate: 도, flipX, flipY, orient: true(주축 가로·첫 원자 왼쪽), coords: [[x,y]…](직접 지정), gap: 성분 간격 }
   */
  Org.layout = function (m, opts = {}) {
    m = Org.parse(m);
    const n = m.atoms.length;
    if (opts.coords) { m.xy = opts.coords.map((p) => p.slice()); finishXY(m, opts); return m; }
    m.xy = new Array(n);
    const comps = [];
    for (let c = 0; c < m.ncomp; c++) comps.push(m.atoms.filter((a) => a.comp === c).map((a) => a.i));
    const boxes = [];
    comps.forEach((atomsC, ci) => {
      if (!atomsC.length) return;
      layoutComponent(m, atomsC);
      fixClashes(m, atomsC);
      enforceEZ(m, atomsC);
      fixClashes(m, atomsC, true);
      if (opts.orient !== false) orientComponent(m, atomsC, ci);
      boxes.push(atomsC);
    });
    // 성분을 왼쪽에서 오른쪽으로
    let x0 = 0;
    const gap = opts.gap != null ? opts.gap : 1.6;
    boxes.forEach((atomsC) => {
      const bb = bboxOf(m, atomsC);
      const dx = x0 - bb.x0, dy = -(bb.y0 + bb.y1) / 2;
      atomsC.forEach((i) => { m.xy[i][0] += dx; m.xy[i][1] += dy; });
      x0 += bb.x1 - bb.x0 + gap + (labelExtent(m, atomsC) ? 0.4 : 0);
    });
    finishXY(m, opts);
    return m;
  };
  function labelExtent(m, atomsC) { return atomsC.some((i) => m.atoms[i].el !== "C"); }
  function finishXY(m, opts) {
    const n = m.atoms.length;
    if (opts.rotate) { const c = Math.cos(opts.rotate * D2R), s = Math.sin(opts.rotate * D2R); const cx = centroid(m), x = cx[0], y = cx[1]; for (let i = 0; i < n; i++) { const [px, py] = m.xy[i]; m.xy[i] = [x + (px - x) * c - (py - y) * s, y + (px - x) * s + (py - y) * c]; } }
    if (opts.flipX) { const c = centroid(m)[0]; m.xy.forEach((p) => (p[0] = 2 * c - p[0])); }
    if (opts.flipY) { const c = centroid(m)[1]; m.xy.forEach((p) => (p[1] = 2 * c - p[1])); }
    assignWedges(m, opts);
  }
  function centroid(m, list) {
    list = list || m.atoms.map((a) => a.i);
    let x = 0, y = 0;
    list.forEach((i) => { x += m.xy[i][0]; y += m.xy[i][1]; });
    return [x / list.length, y / list.length];
  }
  function bboxOf(m, list) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    list.forEach((i) => { const [x, y] = m.xy[i]; x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
    return { x0, y0, x1, y1 };
  }
  const angOf = (p, q) => Math.atan2(q[1] - p[1], q[0] - p[0]);
  const normA = (a) => { a %= TAU; return a < 0 ? a + TAU : a; };

  function ringSystems(m, atomsC) {
    const set = new Set(atomsC);
    const rings = m.rings.map((r, k) => ({ r, k })).filter((o) => set.has(o.r[0]));
    const par = rings.map((_, i) => i);
    const f = (x) => (par[x] === x ? x : (par[x] = f(par[x])));
    for (let i = 0; i < rings.length; i++) for (let j = i + 1; j < rings.length; j++) {
      const s = new Set(rings[i].r);
      if (rings[j].r.some((v) => s.has(v))) par[f(i)] = f(j);
    }
    const groups = {};
    rings.forEach((o, i) => { (groups[f(i)] = groups[f(i)] || []).push(o.r); });
    return Object.values(groups).map((rs) => ({ rings: rs, atoms: [...new Set(rs.flat())] }));
  }
  const polyR = (n) => 1 / (2 * Math.sin(Math.PI / n));
  const apothem = (n) => 1 / (2 * Math.tan(Math.PI / n));

  /* 고리계 하나의 국소 좌표 (Map 원자→[x,y]) */
  function layoutRingSystem(m, rs) {
    const P = new Map();
    const rings = rs.rings.slice();
    const bridged = rings.some((r1, i) => rings.some((r2, j) => {
      if (j <= i) return false;
      const s = new Set(r1), sh = r2.filter((v) => s.has(v));
      if (sh.length >= 3) return true;
      if (sh.length === 2) { const k = r2.indexOf(sh[0]), l = r2.indexOf(sh[1]); const adjc = Math.abs(k - l) === 1 || Math.abs(k - l) === r2.length - 1; return !adjc; }
      return false;
    }));
    if (bridged) return layoutBridged(m, rs);
    // 시작 고리: 융합이 가장 많은 고리, 같으면 6원 고리
    const fus = rings.map((r) => rings.filter((q) => q !== r && q.some((v) => r.includes(v))).length);
    let start = 0;
    rings.forEach((r, i) => { if (fus[i] > fus[start] || (fus[i] === fus[start] && Math.abs(r.length - 6) < Math.abs(rings[start].length - 6))) start = i; });
    const placeRegular = (r, c, a0, dir) => {
      const R = polyR(r.length);
      r.forEach((v, k) => { if (!P.has(v)) P.set(v, [c[0] + R * Math.cos(a0 + dir * k * TAU / r.length), c[1] + R * Math.sin(a0 + dir * k * TAU / r.length)]); });
    };
    const r0 = rings[start];
    placeRegular(r0, [0, 0], -Math.PI / 2, 1);
    const done = new Set([start]);
    let guard = 0;
    while (done.size < rings.length && guard++ < 100) {
      let progressed = false;
      for (let i = 0; i < rings.length; i++) {
        if (done.has(i)) continue;
        const r = rings[i];
        const sh = r.filter((v) => P.has(v));
        if (!sh.length) continue;
        const n = r.length;
        if (sh.length === 2) {
          const [u, v] = sh;
          const ku = r.indexOf(u), kv = r.indexOf(v);
          const pu = P.get(u), pv = P.get(v);
          // 이미 놓인, u-v를 포함하는 고리의 중심
          const host = [...done].map((d) => rings[d]).find((q) => q.includes(u) && q.includes(v)) || r0;
          const hc = host.reduce((s, w) => [s[0] + P.get(w)[0] / host.length, s[1] + P.get(w)[1] / host.length], [0, 0]);
          const mid = [(pu[0] + pv[0]) / 2, (pu[1] + pv[1]) / 2];
          let nx = -(pv[1] - pu[1]), ny = pv[0] - pu[0];
          const L = hyp(nx, ny); nx /= L; ny /= L;
          if ((mid[0] - hc[0]) * nx + (mid[1] - hc[1]) * ny < 0) { nx = -nx; ny = -ny; }
          const ap = apothem(n);
          const c = [mid[0] + nx * ap, mid[1] + ny * ap];
          const au = angOf(c, pu), av = angOf(c, pv);
          // 고리 순서에서 u 다음이 v인지
          const fwd = (ku + 1) % n === kv;
          let step = normA(av - au); if (step > Math.PI) step -= TAU; // ±2π/n
          // u에서 시작해 고리 순서대로: fwd면 k+1이 v 방향
          for (let t = 0; t < n; t++) {
            const w = r[(ku + (fwd ? t : -t) + n) % n];
            if (!P.has(w)) P.set(w, [c[0] + polyR(n) * Math.cos(au + step * t), c[1] + polyR(n) * Math.sin(au + step * t)]);
          }
        } else if (sh.length === 1) {
          const s = sh[0], ps = P.get(s);
          // 바깥 방향: 이미 놓인 이웃들의 반대
          const nbs = m.adj[s].filter((e) => P.has(e.n)).map((e) => P.get(e.n));
          let dx = 0, dy = 0; nbs.forEach((q) => { dx += ps[0] - q[0]; dy += ps[1] - q[1]; });
          const L = hyp(dx, dy) || 1; dx /= L; dy /= L;
          const R = polyR(n), c = [ps[0] + dx * R, ps[1] + dy * R];
          const a0 = angOf(c, ps), k0 = r.indexOf(s);
          r.forEach((w, k) => { if (!P.has(w)) { const t = (k - k0 + n) % n; P.set(w, [c[0] + R * Math.cos(a0 + t * TAU / n), c[1] + R * Math.sin(a0 + t * TAU / n)]); } });
        } else {
          return layoutBridged(m, rs);
        }
        done.add(i); progressed = true;
      }
      if (!progressed) break;
    }
    return P;
  }
  /* 다리 걸친 고리: 가장 큰 단순 고리를 정다각형으로, 나머지는 안쪽에 놓고 힘으로 다듬는다 */
  function layoutBridged(m, rs) {
    const atoms = rs.atoms, set = new Set(atoms);
    let best = [];
    const nbr = (v) => m.adj[v].filter((e) => set.has(e.n)).map((e) => e.n);
    const start = atoms[0];
    let steps = 0;
    (function dfs(path, seen) {
      if (steps++ > 20000) return;
      const v = path[path.length - 1];
      for (const w of nbr(v)) {
        if (w === path[0] && path.length >= 3 && path.length > best.length) best = path.slice();
        if (!seen.has(w)) { seen.add(w); path.push(w); dfs(path, seen); path.pop(); seen.delete(w); }
      }
    })([start], new Set([start]));
    for (const s of atoms) { if (best.length === atoms.length) break; steps = 0; (function dfs(path, seen) { if (steps++ > 20000) return; const v = path[path.length - 1]; for (const w of nbr(v)) { if (w === path[0] && path.length >= 3 && path.length > best.length) best = path.slice(); if (!seen.has(w)) { seen.add(w); path.push(w); dfs(path, seen); path.pop(); seen.delete(w); } } })([s], new Set([s])); }
    const P = new Map();
    const n = best.length, R = polyR(n);
    best.forEach((v, k) => P.set(v, [R * Math.cos(-Math.PI / 2 + k * TAU / n), R * Math.sin(-Math.PI / 2 + k * TAU / n)]));
    const inner = atoms.filter((v) => !P.has(v));
    // 다리 경로: 놓인 두 원자 사이의 놓이지 않은 원자 사슬
    const placedNb = (v) => nbr(v).filter((w) => P.has(w));
    let guard = 0;
    while (inner.some((v) => !P.has(v)) && guard++ < 50) {
      const v0 = inner.find((v) => !P.has(v) && placedNb(v).length);
      if (v0 == null) { inner.filter((v) => !P.has(v)).forEach((v) => P.set(v, [Math.random() * 0.2, Math.random() * 0.2])); break; }
      const chain = [v0];
      let cur = v0, prev = placedNb(v0)[0];
      const a = prev;
      for (let t = 0; t < 20; t++) {
        const nx = nbr(cur).find((w) => w !== prev && !P.has(w) && !chain.includes(w));
        if (nx == null) break;
        chain.push(nx); prev = cur; cur = nx;
      }
      const b = nbr(cur).find((w) => P.has(w) && w !== a) ?? a;
      const pa = P.get(a), pb = P.get(b);
      const k = chain.length;
      chain.forEach((v, t) => {
        const f = (t + 1) / (k + 1);
        const ddx = pb[0] - pa[0], ddy = pb[1] - pa[1], dl = hyp(ddx, ddy) || 1;
        P.set(v, [pa[0] + ddx * f - ddy / dl * 0.5, pa[1] + ddy * f + ddx / dl * 0.5]);
      });
    }
    // 안쪽 원자만 움직이는 간단한 힘 완화
    const mov = atoms.filter((v) => !best.includes(v));
    for (let it = 0; it < 300; it++) {
      mov.forEach((v) => {
        let fx = 0, fy = 0; const pv = P.get(v);
        nbr(v).forEach((w) => { const pw = P.get(w); const dx = pw[0] - pv[0], dy = pw[1] - pv[1], d = hyp(dx, dy) || 1e-3; const f = (d - 1) * 0.4; fx += dx / d * f; fy += dy / d * f; });
        atoms.forEach((w) => { if (w === v || nbr(v).includes(w)) return; const pw = P.get(w); const dx = pv[0] - pw[0], dy = pv[1] - pw[1], d = hyp(dx, dy) || 1e-3; if (d < 0.9) { fx += dx / d * (0.9 - d) * 0.3; fy += dy / d * (0.9 - d) * 0.3; } });
        pv[0] += fx; pv[1] += fy;
      });
    }
    return P;
  }

  function layoutComponent(m, atomsC) {
    const xy = m.xy, placed = new Set();
    const systems = ringSystems(m, atomsC);
    const sysOf = new Map();
    systems.forEach((s, k) => s.atoms.forEach((v) => sysOf.set(v, k)));
    const sysDone = new Set();
    const turn = new Map();
    const queue = [];
    const place = (v, p) => { xy[v] = p; placed.add(v); queue.push(v); };
    // 가장 큰 지름 끝에서 시작(사슬) 또는 가장 큰 고리계
    const subtreeSize = (v, from) => { let c = 0; const st = [[v, from]]; const seen = new Set([from, v]); while (st.length) { const [u] = st.pop(); c++; m.adj[u].forEach((e) => { if (!seen.has(e.n)) { seen.add(e.n); st.push([e.n, u]); } }); } return c; };
    const depth = (v, from) => { let best = 0; const st = [[v, from, 1]]; const seen = new Set([from, v]); while (st.length) { const [u, , d] = st.pop(); best = Math.max(best, d); m.adj[u].forEach((e) => { if (!seen.has(e.n)) { seen.add(e.n); st.push([e.n, u, d + 1]); } }); } return best; };
    function placeSystem(k, anchorFrom, anchorAt, dirAng) {
      const sys = systems[k];
      const L = layoutRingSystem(m, sys);
      sysDone.add(k);
      if (anchorFrom == null) { L.forEach((p, v) => place(v, p.slice())); return; }
      // anchorAt(고리 원자)의 바깥 이등분선이 anchorFrom 쪽을 향하도록 회전
      const pa = L.get(anchorAt);
      const nbs = m.adj[anchorAt].filter((e) => L.has(e.n)).map((e) => L.get(e.n));
      let ox = 0, oy = 0; nbs.forEach((q) => { ox += pa[0] - q[0]; oy += pa[1] - q[1]; });
      const oa = Math.atan2(oy, ox);
      const target = dirAng + Math.PI; // 고리 원자 → 부모 방향
      const pFrom = xy[anchorFrom];
      const pos = [pFrom[0] + Math.cos(dirAng), pFrom[1] + Math.sin(dirAng)];
      let bestT = null, bestScore = Infinity;
      [1, -1].forEach((flip) => {
        const rot = target - (flip === 1 ? oa : -oa);
        const T = new Map();
        L.forEach((p, v) => { const x = p[0] - pa[0], y = (p[1] - pa[1]) * flip; T.set(v, [pos[0] + x * Math.cos(rot) - y * Math.sin(rot), pos[1] + x * Math.sin(rot) + y * Math.cos(rot)]); });
        let sc = 0;
        T.forEach((p) => placed.forEach((u) => { const d = hyp(p[0] - xy[u][0], p[1] - xy[u][1]); if (d < 1.2) sc += (1.2 - d) * 10; }));
        if (sc < bestScore) { bestScore = sc; bestT = T; }
      });
      bestT.forEach((p, v) => place(v, p));
    }
    let start;
    if (systems.length) {
      let k0 = 0;
      systems.forEach((s, k) => { if (s.atoms.length > systems[k0].atoms.length) k0 = k; });
      placeSystem(k0, null);
    } else {
      // 지름의 한쪽 끝
      const far = (s) => { const dist = new Map([[s, 0]]); const q = [s]; for (let h = 0; h < q.length; h++) m.adj[q[h]].forEach((e) => { if (!dist.has(e.n)) { dist.set(e.n, dist.get(q[h]) + 1); q.push(e.n); } }); let b = s; dist.forEach((d, v) => { if (d > dist.get(b) || (d === dist.get(b) && v < b)) b = v; }); return b; };
      start = far(far(atomsC[0]));
      // 첫 원자가 끝 원자면 그 원자에서 시작(쓰는 순서대로 왼쪽→오른쪽)
      if (m.adj[atomsC[0]].length <= 1 && depth(atomsC[0], -1) >= depth(start, -1)) start = atomsC[0];
      place(start, [0, 0]);
      turn.set(start, 1);
    }
    const isSp = (v) => m.adj[v].some((e) => e.b.order === 3) || m.adj[v].filter((e) => e.b.order === 2).length >= 2 || m.adj[v].filter((e) => e.b.partial).length >= 2;
    for (let h = 0; h < queue.length; h++) {
      const u = queue[h];
      const pu = xy[u];
      const done = m.adj[u].filter((e) => placed.has(e.n)).map((e) => angOf(pu, xy[e.n]));
      const todo = m.adj[u].filter((e) => !placed.has(e.n));
      if (!todo.length) continue;
      const nTot = done.length + todo.length;
      // 큰 가지 먼저
      todo.sort((p, q) => depth(q.n, u) - depth(p.n, u) || subtreeSize(q.n, u) - subtreeSize(p.n, u));
      let angs = [];
      if (done.length === 0) {
        if (nTot === 1) angs = [-Math.PI / 6];
        else if (nTot === 2) angs = [-Math.PI / 6, Math.PI + Math.PI / 6];
        else angs = todo.map((_, k) => -Math.PI / 6 + k * TAU / nTot);
        if (isSp(u) && nTot === 2) angs = [0, Math.PI];
      } else if (done.length === 1) {
        const a = done[0], s = turn.get(u) || 1;
        if (isSp(u) && nTot === 2) angs = [a + Math.PI];
        else if (nTot === 2) angs = [a + s * 2 * Math.PI / 3];
        else if (nTot === 3) angs = [a + s * 2 * Math.PI / 3, a - s * 2 * Math.PI / 3];
        else if (nTot === 4) angs = [a + Math.PI, a + Math.PI / 2, a - Math.PI / 2];
        else angs = todo.map((_, k) => a + (k + 1) * TAU / nTot);
      } else {
        // 가장 큰 빈 각에 고르게
        const sorted = done.map(normA).sort((p, q) => p - q);
        let gs = 0, gl = -1;
        sorted.forEach((x, k) => { const y = k + 1 < sorted.length ? sorted[k + 1] : sorted[0] + TAU; if (y - x > gl) { gl = y - x; gs = x; } });
        if (todo.length === 1) angs = [gs + gl / 2];
        else if (todo.length === 2 && gl > Math.PI) angs = [gs + gl / 2 - 0.62, gs + gl / 2 + 0.62];
        else angs = todo.map((_, k) => gs + gl * (k + 1) / (todo.length + 1));
      }
      todo.forEach((e, k) => {
        const v = e.n, ang = angs[k] != null ? angs[k] : angs[angs.length - 1] + 0.5 * k;
        if (sysOf.has(v) && !sysDone.has(sysOf.get(v))) { placeSystem(sysOf.get(v), u, v, ang); return; }
        if (placed.has(v)) return;
        place(v, [pu[0] + Math.cos(ang), pu[1] + Math.sin(ang)]);
        const s = turn.get(u) || 1;
        turn.set(v, k === 0 ? -s : s);
      });
    }
  }

  /* 겹침 고치기: 고리 밖 단일 결합을 축으로 한쪽 가지를 뒤집어 본다 */
  function clashScore(m, list) {
    let s = 0;
    for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
      const a = list[i], b = list[j];
      const d = hyp(m.xy[a][0] - m.xy[b][0], m.xy[a][1] - m.xy[b][1]);
      if (d < 0.8) s += (0.8 - d) * (0.8 - d) * 10 + (d < 0.3 ? 5 : 0);
    }
    return s;
  }
  function sideAtoms(m, from, to) { // to 쪽 가지 (from-to 결합을 끊었을 때)
    const seen = new Set([from, to]), st = [to], out = [to];
    while (st.length) { const u = st.pop(); m.adj[u].forEach((e) => { if (!seen.has(e.n)) { seen.add(e.n); st.push(e.n); out.push(e.n); } }); }
    return out.includes(from) ? null : out;
  }
  function reflectAcross(m, list, p, q) {
    const dx = q[0] - p[0], dy = q[1] - p[1], L = dx * dx + dy * dy;
    list.forEach((i) => { const [x, y] = m.xy[i]; const t = ((x - p[0]) * dx + (y - p[1]) * dy) / L; const fx = p[0] + t * dx, fy = p[1] + t * dy; m.xy[i] = [2 * fx - x, 2 * fy - y]; });
  }
  function fixClashes(m, atomsC) {
    let score = clashScore(m, atomsC);
    if (score < 1e-6) return;
    for (let pass = 0; pass < 4 && score > 1e-6; pass++) {
      for (const b of m.bonds) {
        if (b.ring || b.order !== 1 || !atomsC.includes(b.a)) continue;
        for (const [f, t] of [[b.a, b.b], [b.b, b.a]]) {
          const side = sideAtoms(m, f, t);
          if (!side || side.length < 2) continue;
          const save = side.map((i) => m.xy[i].slice());
          reflectAcross(m, side, m.xy[f], m.xy[t]);
          const s2 = clashScore(m, atomsC);
          if (s2 + 1e-9 < score) { score = s2; } else side.forEach((i, k) => (m.xy[i] = save[k]));
          // 회전 시도(±60°)
          if (score > 1e-6) {
            for (const ang of [Math.PI / 3, -Math.PI / 3]) {
              const save2 = side.map((i) => m.xy[i].slice());
              const [cx, cy] = m.xy[f], c = Math.cos(ang), s = Math.sin(ang);
              side.forEach((i) => { const [x, y] = m.xy[i]; m.xy[i] = [cx + (x - cx) * c - (y - cy) * s, cy + (x - cx) * s + (y - cy) * c]; });
              const s3 = clashScore(m, atomsC);
              if (s3 + 1e-9 < score - 0.5) score = s3; else side.forEach((i, k) => (m.xy[i] = save2[k]));
            }
          }
        }
      }
    }
  }
  function enforceEZ(m, atomsC) {
    (m.ez || []).forEach((z) => {
      if (!atomsC.includes(z.x)) return;
      const b = m.bonds[z.bond];
      if (b.ring) return;
      const P = m.xy[z.x], Q = m.xy[z.y];
      const side = (p) => Math.sign((Q[0] - P[0]) * (p[1] - P[1]) - (Q[1] - P[1]) * (p[0] - P[0]));
      const same = side(m.xy[z.A]) === side(m.xy[z.B]);
      if (same === z.cis) return;
      const sideY = sideAtoms(m, z.x, z.y);
      if (!sideY) return;
      reflectAcross(m, sideY.filter((i) => i !== z.y), P, Q);
    });
  }
  function orientComponent(m, atomsC, ci) {
    if (atomsC.length < 2) return;
    const hasRing = atomsC.some((i) => m.atoms[i].rings.length);
    const [cx, cy] = centroid(m, atomsC);
    let sxx = 0, syy = 0, sxy = 0;
    atomsC.forEach((i) => { const x = m.xy[i][0] - cx, y = m.xy[i][1] - cy; sxx += x * x; syy += y * y; sxy += x * y; });
    const th = 0.5 * Math.atan2(2 * sxy, sxx - syy);
    const step = hasRing ? Math.PI / 3 : Math.PI / 6;
    let rot = -Math.round(th / step) * step;
    // 고리만 있고 주축이 뚜렷하지 않으면 회전하지 않는다
    if (hasRing && Math.abs(sxx - syy) < 0.15 * (sxx + syy)) rot = 0;
    const c = Math.cos(rot), s = Math.sin(rot);
    atomsC.forEach((i) => { const x = m.xy[i][0] - cx, y = m.xy[i][1] - cy; m.xy[i] = [cx + x * c - y * s, cy + x * s + y * c]; });
    // 첫 원자를 왼쪽으로
    const first = atomsC[0];
    const bb = bboxOf(m, atomsC);
    if (m.xy[first][0] > (bb.x0 + bb.x1) / 2 + 0.25) atomsC.forEach((i) => (m.xy[i][0] = 2 * cx - m.xy[i][0]));
    void ci;
  }

  /* 쐐기 결합: 키랄 중심마다 결합 하나를 쐐기(앞)나 점선 쐐기(뒤)로 */
  function assignWedges(m, opts) {
    m.bonds.forEach((b) => { if (!b.userWedge) { b.wedge = 0; b.wedgeFrom = null; } });
    const used = new Set();
    m.atoms.forEach((a, i) => {
      if (!a.chiral) return;
      const nbo = chiralNbOrder(m, i);
      if (nbo.length !== 4) return;
      // 후보: 고리 밖·다른 쐐기에 쓰이지 않은 결합, 작은 가지 우선
      const cands = m.adj[i].filter((e) => !used.has(e.b.i) && e.b.order === 1).map((e) => {
        const side = sideAtoms(m, i, e.n);
        const other = m.atoms[e.n];
        return { e, w: (e.b.ring ? 100 : 0) + (other.chiral ? 30 : 0) + (side ? side.length : 50) + (other.el === "H" ? -5 : 0) };
      }).sort((p, q) => p.w - q.w);
      if (!cands.length) return;
      const pick = cands[0].e;
      const P = m.xy[i];
      const vec = (j) => { const q = m.xy[j]; const dx = q[0] - P[0], dy = -(q[1] - P[1]); const L = hyp(dx, dy) || 1; return [dx / L, dy / L, 0]; };
      const tryZ = (z) => {
        const V = {};
        m.adj[i].forEach((e) => { V[e.n] = vec(e.n); });
        V[pick.n] = [V[pick.n][0] * 0.8, V[pick.n][1] * 0.8, z];
        if (a.h === 1) { let sx = 0, sy = 0, sz = 0; m.adj[i].forEach((e) => { sx += V[e.n][0]; sy += V[e.n][1]; sz += V[e.n][2]; }); V.H = [-sx, -sy, -sz - (Math.abs(sz) < 0.01 ? 0.5 : 0)]; }
        const p = nbo.map((k) => V[k]);
        if (p.some((x) => !x)) return null;
        const d = det3(sub3(p[1], p[0]), sub3(p[2], p[0]), sub3(p[3], p[0]));
        return d;
      };
      const want = a.chiral === "@" ? -1 : 1;
      const d = tryZ(1);
      if (d == null) return;
      const wedge = Math.sign(d) === want ? 1 : -1;
      pick.b.wedge = wedge; pick.b.wedgeFrom = i;
      used.add(pick.b.i);
    });
    void opts;
  }
  const sub3 = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const det3 = (a, b, c) => a[0] * (b[1] * c[2] - b[2] * c[1]) - a[1] * (b[0] * c[2] - b[2] * c[0]) + a[2] * (b[0] * c[1] - b[1] * c[0]);
  Org._det3 = det3;

  /** 2D 좌표 + 쐐기에서 키랄성 읽기(검증용): 원자 i의 '@'|'@@' */
  Org.chiralityFromDrawing = function (m, i) {
    const a = m.atoms[i], nbo = chiralNbOrder(m, i), P = m.xy[i];
    const V = {};
    m.adj[i].forEach((e) => {
      const q = m.xy[e.n]; let dx = q[0] - P[0], dy = -(q[1] - P[1]); const L = hyp(dx, dy) || 1; dx /= L; dy /= L;
      let z = 0;
      if (e.b.wedge && e.b.wedgeFrom === i) { z = e.b.wedge; dx *= 0.8; dy *= 0.8; }
      V[e.n] = [dx, dy, z];
    });
    if (a.h === 1) { let sx = 0, sy = 0, sz = 0; Object.values(V).forEach((v) => { sx += v[0]; sy += v[1]; sz += v[2]; }); V.H = [-sx, -sy, -sz - (Math.abs(sz) < 0.01 ? 0.5 : 0)]; }
    const p = nbo.map((k) => V[k]);
    const d = det3(sub3(p[1], p[0]), sub3(p[2], p[0]), sub3(p[3], p[0]));
    return d < 0 ? "@" : "@@";
  };

  /* ================================================================== 그리기 */
  const HAS_DOM = typeof document !== "undefined";
  const CSS = `
:root{--org-O:#d1242f;--org-N:#2251d1;--org-S:#a37200;--org-P:#c2410c;--org-F:#4d7c0f;--org-Cl:#15803d;--org-Br:#9a3412;--org-I:#7e22ce;--org-Si:#56657d;--org-B:#b45309;--org-M:#0e7490;--org-arrow:#d1242f;--org-hl:rgba(245,158,11,.30);--org-hl2:rgba(37,99,235,.20);--org-pos:#2251d1;--org-neg:#d1242f}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--org-O:#ff7b72;--org-N:#79a8ff;--org-S:#f2cc60;--org-P:#ffa657;--org-F:#a5d86b;--org-Cl:#56d364;--org-Br:#f0a073;--org-I:#d2a8ff;--org-Si:#a5b4c8;--org-B:#f5b971;--org-M:#5fd4e8;--org-arrow:#ff6b6b;--org-hl:rgba(251,191,36,.28);--org-hl2:rgba(96,165,250,.26);--org-pos:#79a8ff;--org-neg:#ff7b72}}
:root[data-theme="dark"]{--org-O:#ff7b72;--org-N:#79a8ff;--org-S:#f2cc60;--org-P:#ffa657;--org-F:#a5d86b;--org-Cl:#56d364;--org-Br:#f0a073;--org-I:#d2a8ff;--org-Si:#a5b4c8;--org-B:#f5b971;--org-M:#5fd4e8;--org-arrow:#ff6b6b;--org-hl:rgba(251,191,36,.28);--org-hl2:rgba(96,165,250,.26);--org-pos:#79a8ff;--org-neg:#ff7b72}
.mol{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;max-width:100%;line-height:1.2}
.mol>svg{display:block;max-width:100%;height:auto;overflow:visible}
.mol .mol-cap{font-size:13px;color:var(--text-dim);margin-top:2px;text-align:center}
.mol-row{display:flex;flex-wrap:wrap;gap:12px 26px;justify-content:center;align-items:flex-end;margin:6px 0}
.mol-scheme{max-width:100%;overflow-x:auto;text-align:center;line-height:0;margin:6px 0}
.mol-scheme>svg{max-width:100%;height:auto;overflow:visible}
.mech{border:1px solid var(--border);border-radius:var(--radius-sm,8px);background:var(--canvas-bg);padding:6px 6px 8px}
.mech canvas{display:block;width:100%}
.mech .mech-bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:6px}
.mech .mech-cap{font-size:14.5px;color:var(--text);margin:6px 4px 0;min-height:2.6em}
.mech .mech-n{font:600 12px var(--mono);color:var(--text-dim);margin-left:auto}
.org-pick .opts{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0}
.org-pick .opts button{min-width:52px}
.org-pick .opts button.right{border-color:var(--ok);color:var(--ok)}
.org-pick .opts button.wrong{border-color:var(--bad);color:var(--bad)}
`;
  if (HAS_DOM && !document.getElementById("org-css")) {
    const st = document.createElement("style"); st.id = "org-css"; st.textContent = CSS;
    (document.head || document.documentElement).appendChild(st);
  }
  const ELVAR = { O: "O", N: "N", S: "S", P: "P", F: "F", Cl: "Cl", Br: "Br", I: "I", Si: "Si", B: "B", Se: "S", Ge: "Si", Sn: "Si", As: "P" };
  function elColorVar(el, mode) {
    if (mode === "mono" || el === "C" || el === "H" || el === "*") return "var(--text)";
    if (ELVAR[el]) return `var(--org-${ELVAR[el]})`;
    return "var(--org-M)";
  }
  Org.color = (el) => resolveColor(elColorVar(el));
  function resolveColor(c) {
    if (!c || typeof c !== "string") return c;
    if (c.startsWith("var(--")) { const v = HAS_DOM && window.SB && SB.color ? SB.color(c.slice(6, -1)) : ""; return v || "#888"; }
    return c;
  }
  let measureCtx = null;
  function fontStr(o) { const fam = o.mono ? (HAS_DOM && SB.color && SB.color("mono")) || "monospace" : (HAS_DOM && SB.color && SB.color("font")) || "sans-serif"; return `${o.weight || 400} ${o.size || 13}px ${fam}`; }
  function measureText(s, o) {
    if (HAS_DOM) {
      if (!measureCtx) measureCtx = document.createElement("canvas").getContext("2d");
      measureCtx.font = fontStr(o);
      return measureCtx.measureText(s).width;
    }
    return 0.6 * (o.size || 13) * s.length;
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* 펜: 캔버스와 SVG가 같은 그리기 명령을 쓴다 */
  function bbAdd(P, x, y) { if (x < P.bb[0]) P.bb[0] = x; if (y < P.bb[1]) P.bb[1] = y; if (x > P.bb[2]) P.bb[2] = x; if (y > P.bb[3]) P.bb[3] = y; }
  function canvasPen(ctx) {
    const P = { kind: "canvas", ctx, alpha: 1, bb: [Infinity, Infinity, -Infinity, -Infinity], measure: measureText };
    const setup = (o) => { ctx.globalAlpha = P.alpha * (o.alpha == null ? 1 : o.alpha); };
    P.line = (x1, y1, x2, y2, o = {}) => { ctx.save(); setup(o); ctx.strokeStyle = resolveColor(o.color || "var(--text)"); ctx.lineWidth = o.width || 1.5; ctx.lineCap = o.cap || "round"; if (o.dash) ctx.setLineDash(o.dash); ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.restore(); bbAdd(P, x1, y1); bbAdd(P, x2, y2); };
    P.poly = (pts, o = {}) => { ctx.save(); setup(o); ctx.beginPath(); pts.forEach(([x, y], k) => (k ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); if (o.close !== false) ctx.closePath(); if (o.fill) { ctx.fillStyle = resolveColor(o.fill); ctx.fill(); } if (o.stroke) { ctx.strokeStyle = resolveColor(o.stroke); ctx.lineWidth = o.width || 1.2; ctx.lineJoin = "round"; if (o.dash) ctx.setLineDash(o.dash); ctx.stroke(); } ctx.restore(); pts.forEach(([x, y]) => bbAdd(P, x, y)); };
    P.circle = (x, y, r, o = {}) => { ctx.save(); setup(o); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); if (o.fill) { ctx.fillStyle = resolveColor(o.fill); ctx.fill(); } if (o.stroke) { ctx.strokeStyle = resolveColor(o.stroke); ctx.lineWidth = o.width || 1.2; if (o.dash) ctx.setLineDash(o.dash); ctx.stroke(); } ctx.restore(); bbAdd(P, x - r, y - r); bbAdd(P, x + r, y + r); };
    P.ellipse = (x, y, rx, ry, rot, o = {}) => { ctx.save(); setup(o); ctx.beginPath(); ctx.ellipse(x, y, rx, ry, rot, 0, TAU); if (o.fill) { ctx.fillStyle = resolveColor(o.fill); ctx.fill(); } if (o.stroke) { ctx.strokeStyle = resolveColor(o.stroke); ctx.lineWidth = o.width || 1.2; ctx.stroke(); } ctx.restore(); bbAdd(P, x - rx, y - rx); bbAdd(P, x + rx, y + rx); };
    P.curve = (pts, o = {}) => { ctx.save(); setup(o); ctx.strokeStyle = resolveColor(o.color || "var(--text)"); ctx.lineWidth = o.width || 1.5; ctx.lineCap = "round"; if (o.dash) ctx.setLineDash(o.dash); ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); if (pts.length === 3) ctx.quadraticCurveTo(pts[1][0], pts[1][1], pts[2][0], pts[2][1]); else if (pts.length === 4) ctx.bezierCurveTo(pts[1][0], pts[1][1], pts[2][0], pts[2][1], pts[3][0], pts[3][1]); else pts.slice(1).forEach(([x, y]) => ctx.lineTo(x, y)); ctx.stroke(); ctx.restore(); pts.forEach(([x, y]) => bbAdd(P, x, y)); };
    P.text = (s, x, y, o = {}) => { ctx.save(); setup(o); ctx.font = fontStr(o); ctx.textAlign = o.align || "center"; ctx.textBaseline = "middle"; if (o.halo) { ctx.lineWidth = 3.5; ctx.lineJoin = "round"; ctx.strokeStyle = resolveColor(o.halo === true ? "var(--canvas-bg)" : o.halo); ctx.strokeText(s, x, y); } ctx.fillStyle = resolveColor(o.color || "var(--text)"); ctx.fillText(s, x, y); ctx.restore(); const w = measureText(s, o), sz = o.size || 13, x0 = o.align === "left" ? x : o.align === "right" ? x - w : x - w / 2; bbAdd(P, x0, y - sz * 0.6); bbAdd(P, x0 + w, y + sz * 0.6); };
    return P;
  }
  function svgPen() {
    const out = [];
    const P = { kind: "svg", out, alpha: 1, bb: [Infinity, Infinity, -Infinity, -Infinity], measure: measureText };
    const f = (v) => Math.round(v * 100) / 100;
    const al = (o) => { const a = P.alpha * (o.alpha == null ? 1 : o.alpha); return a < 0.999 ? ` opacity="${f(a)}"` : ""; };
    const dash = (o) => (o.dash ? ` stroke-dasharray="${o.dash.join(" ")}"` : "");
    P.line = (x1, y1, x2, y2, o = {}) => { out.push(`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${o.color || "var(--text)"}" stroke-width="${f(o.width || 1.5)}" stroke-linecap="${o.cap || "round"}"${dash(o)}${al(o)}/>`); bbAdd(P, x1, y1); bbAdd(P, x2, y2); };
    P.poly = (pts, o = {}) => { out.push(`<${o.close === false ? "polyline" : "polygon"} points="${pts.map(([x, y]) => f(x) + "," + f(y)).join(" ")}" fill="${o.fill || "none"}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${f(o.width || 1.2)}" stroke-linejoin="round"` : ""}${dash(o)}${al(o)}/>`); pts.forEach(([x, y]) => bbAdd(P, x, y)); };
    P.circle = (x, y, r, o = {}) => { out.push(`<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${o.fill || "none"}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${f(o.width || 1.2)}"` : ""}${dash(o)}${al(o)}/>`); bbAdd(P, x - r, y - r); bbAdd(P, x + r, y + r); };
    P.ellipse = (x, y, rx, ry, rot, o = {}) => { out.push(`<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(rx)}" ry="${f(ry)}" transform="rotate(${f(rot / D2R)} ${f(x)} ${f(y)})" fill="${o.fill || "none"}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${f(o.width || 1.2)}"` : ""}${al(o)}/>`); bbAdd(P, x - rx, y - rx); bbAdd(P, x + rx, y + rx); };
    P.curve = (pts, o = {}) => { const c = pts.length === 3 ? "Q" : pts.length === 4 ? "C" : "L"; out.push(`<path d="M${f(pts[0][0])} ${f(pts[0][1])}${c}${pts.slice(1).map(([x, y]) => f(x) + " " + f(y)).join(" ")}" fill="none" stroke="${o.color || "var(--text)"}" stroke-width="${f(o.width || 1.5)}" stroke-linecap="round"${dash(o)}${al(o)}/>`); pts.forEach(([x, y]) => bbAdd(P, x, y)); };
    P.text = (s, x, y, o = {}) => { const anchor = o.align === "left" ? "start" : o.align === "right" ? "end" : "middle"; const halo = o.halo ? ` stroke="${o.halo === true ? "var(--canvas-bg)" : o.halo}" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke"` : ""; out.push(`<text x="${f(x)}" y="${f(y)}" font-size="${f(o.size || 13)}" font-weight="${o.weight || 400}" text-anchor="${anchor}" dominant-baseline="central"${o.mono ? ' font-family="var(--mono)"' : ""} fill="${o.color || "var(--text)"}"${halo}${al(o)}>${esc(s)}</text>`); const w = measureText(s, o), sz = o.size || 13, x0 = o.align === "left" ? x : o.align === "right" ? x - w : x - w / 2; bbAdd(P, x0, y - sz * 0.6); bbAdd(P, x0 + w, y + sz * 0.6); };
    P.svg = (pad = 4, extra = "") => {
      const [x0, y0, x1, y1] = P.bb;
      const W = Math.max(1, x1 - x0 + 2 * pad), H = Math.max(1, y1 - y0 + 2 * pad);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f(x0 - pad)} ${f(y0 - pad)} ${f(W)} ${f(H)}" width="${Math.ceil(W)}" height="${Math.ceil(H)}" style="font-family:var(--font)" role="img"${extra}>${out.join("")}</svg>`;
    };
    return P;
  }
  Org.canvasPen = canvasPen;
  Org.svgPen = svgPen;

  /* 원자 이름표 */
  const REV = { OTs: "TsO", OMs: "MsO", OAc: "AcO", OMe: "MeO", OEt: "EtO", OTf: "TfO", OBn: "BnO", OtBu: "tBuO", OPh: "PhO", OPr: "PrO", CO2H: "HO2C", CO2Me: "MeO2C", CO2Et: "EtO2C", COOH: "HOOC", CHO: "OHC", CN: "NC", NO2: "O2N", NH2: "H2N", OH: "HO", SH: "HS", CH3: "H3C", CF3: "F3C", SiMe3: "Me3Si", NHAc: "AcHN", NMe2: "Me2N", OSiMe3: "Me3SiO", SO3H: "HO3S", OTMS: "TMSO", OBoc: "BocO", NHBoc: "BocHN", NHR: "RHN", OR: "RO", "OR'": "R'O", COR: "RCO", SR: "RS", NR2: "R2N" };
  function splitLabel(t) { // 숫자는 아래 첨자
    const segs = [];
    let k = 0;
    while (k < t.length) {
      const m = /^\d+/.exec(t.slice(k));
      if (m && k > 0 && /[A-Za-z)\]]/.test(t[k - 1])) { segs.push({ t: m[0], sub: true }); k += m[0].length; continue; }
      const n = /^[^\d]+/.exec(t.slice(k)) || /^\d+/.exec(t.slice(k));
      segs.push({ t: n[0] }); k += n[0].length;
    }
    return segs;
  }
  function atomLabel(m, i, o) {
    const a = m.atoms[i], deg = m.adj[i].length;
    let custom = o.labels && o.labels[i] != null ? o.labels[i] : null;
    const showC = o.showC === true || (Array.isArray(o.showC) && o.showC.includes(i)) || (o.showC === "terminal" && deg <= 1);
    if (custom == null && a.el === "C" && !a.iso && deg > 0 && !showC) return null;
    // H 방향: 결합이 오른쪽으로 몰리면 왼쪽에
    let mx = 0, my = 0;
    m.adj[i].forEach((e) => { mx += m.xy[e.n][0] - m.xy[i][0]; my += m.xy[e.n][1] - m.xy[i][1]; });
    const left = deg > 0 ? mx > 0.25 && Math.abs(mx) >= Math.abs(my) * 0.45 : ["O", "S", "Se", "F", "Cl", "Br", "I"].includes(a.el);
    let segs = [], anchor = 0;
    const color = o.colorFn ? o.colorFn(i, a) : elColorVar(a.el, o.mode);
    if (custom != null || a.el === "*") {
      let t = custom != null ? String(custom) : a.label;
      if (left && REV[t]) { t = REV[t]; segs = splitLabel(t); anchor = segs.length - 1; while (anchor > 0 && segs[anchor].sub) anchor--; }
      else { segs = splitLabel(t); anchor = 0; }
      if (custom == null || o.labelSplit === false) { /* 이름표는 통째로 앞부분을 기준 */ }
    } else {
      const sym = a.el === "H" && a.iso === 2 ? "D" : a.el;
      const main = { t: sym, main: true };
      const iso = a.iso && !(a.el === "H" && a.iso === 2) ? { t: String(a.iso), sup: true, pre: true } : null;
      const H = a.h > 0 && o.hideH !== true ? [{ t: "H" }].concat(a.h > 1 ? [{ t: String(a.h), sub: true }] : []) : [];
      if (left && H.length) { segs = H.concat([main]); anchor = H.length; }
      else { segs = [main].concat(H); anchor = 0; }
      if (iso) { segs.unshift(iso); anchor++; }
    }
    if (a.charge && o.charges !== false) {
      const q = Math.abs(a.charge), t = (q > 1 ? q : "") + (a.charge > 0 ? "+" : "−");
      segs.push({ t, sup: true, chg: true });
    }
    return { segs, anchor, color, left };
  }
  function layoutLabel(P, L, x, y, fs) {
    const ws = L.segs.map((s) => P.measure(s.t, { size: s.sub || s.sup ? fs * 0.7 : fs, weight: s.chg ? 600 : 400 }));
    let xa = 0;
    for (let k = 0; k < L.anchor; k++) xa += ws[k];
    const x0 = x - xa - ws[L.anchor] / 2;
    let cx = x0;
    const items = L.segs.map((s, k) => { const it = { s, x: cx + ws[k] / 2, w: ws[k] }; cx += ws[k]; return it; });
    return { items, x0, x1: cx, hw: ws[L.anchor] / 2 + 1.5, hh: fs * 0.45 + 1 };
  }
  function drawLabel(P, LL, y, fs, color, alpha) {
    LL.items.forEach((it) => {
      const s = it.s;
      const size = s.sub || s.sup ? fs * 0.7 : fs;
      const dy = s.sub ? fs * 0.3 : s.sup ? -fs * 0.42 : 0;
      P.text(s.t, it.x, y + dy, { size, color: s.chg ? "var(--text)" : color, weight: s.chg ? 600 : 400, alpha });
    });
  }

  /* 분자 그리기 핵심: view = {s, ox, oy, m, pos(i), lp(i, toward), r(i)} */
  function drawMolecule(P, m, o = {}) {
    if (!m.xy) Org.layout(m, o);
    const s = o.scale || 30, fs = o.fontSize || Math.max(9, Math.min(20, s * 0.47)), lw = o.lineWidth || Math.max(1.1, s * 0.052);
    const ox = o.ox || 0, oy = o.oy || 0;
    const pos = (i) => [ox + m.xy[i][0] * s, oy + m.xy[i][1] * s];
    const alpha = o.alpha == null ? 1 : o.alpha;
    const bondColor = o.bondColor || "var(--text)";
    const view = { s, ox, oy, m, fs, lw, pos, labels: [], lps: {}, gapDirs: {}, alpha };
    const hide = new Set(o.hideAtoms || []);
    // 이름표
    m.atoms.forEach((a, i) => {
      if (hide.has(i)) return;
      const L = atomLabel(m, i, o);
      if (!L) return;
      const [x, y] = pos(i);
      view.labels[i] = Object.assign(layoutLabel(P, L, x, y, fs), { L });
    });
    const trim = (i, dx, dy) => {
      const LL = view.labels[i];
      if (!LL) return 0;
      const ax = Math.abs(dx) || 1e-9, ay = Math.abs(dy) || 1e-9;
      return Math.min(LL.hw / ax, LL.hh / ay) + 1.5;
    };
    // 강조(뒤에)
    if (o.highlight) {
      const H = o.highlight, hc = H.color || "var(--org-hl)";
      (H.bonds || []).forEach(([u, v]) => { const [x1, y1] = pos(u), [x2, y2] = pos(v); P.line(x1, y1, x2, y2, { color: hc, width: s * 0.36, alpha }); });
      (H.atoms || []).forEach((i) => { const [x, y] = pos(i); P.circle(x, y, s * 0.36, { fill: hc, alpha }); });
    }
    if (o.highlight2) {
      const H = o.highlight2, hc = H.color || "var(--org-hl2)";
      (H.bonds || []).forEach(([u, v]) => { const [x1, y1] = pos(u), [x2, y2] = pos(v); P.line(x1, y1, x2, y2, { color: hc, width: s * 0.36, alpha }); });
      (H.atoms || []).forEach((i) => { const [x, y] = pos(i); P.circle(x, y, s * 0.36, { fill: hc, alpha }); });
    }
    // 고리 중심 (이중 결합 안쪽)
    const ringCenter = (ri) => { const r = m.rings[ri]; let x = 0, y = 0; r.forEach((v) => { x += m.xy[v][0]; y += m.xy[v][1]; }); return [ox + (x / r.length) * s, oy + (y / r.length) * s]; };
    m.bonds.forEach((b) => {
      if (hide.has(b.a) || hide.has(b.b)) return;
      if (o.hideBonds && o.hideBonds.some(([u, v]) => (u === b.a && v === b.b) || (u === b.b && v === b.a))) return;
      let [x1, y1] = pos(b.a), [x2, y2] = pos(b.b);
      const dx = x2 - x1, dy = y2 - y1, L = hyp(dx, dy) || 1, ux = dx / L, uy = dy / L, nx = -uy, ny = ux;
      const t1 = trim(b.a, ux, uy), t2 = trim(b.b, ux, uy);
      const ax = x1 + ux * t1, ay = y1 + uy * t1, bx = x2 - ux * t2, by = y2 - uy * t2;
      const col = (b.color) || bondColor;
      const bo = o.bondOrders && o.bondOrders[b.i] != null ? o.bondOrders[b.i] : b.order;
      const ba = (o.bondAlpha && o.bondAlpha[b.i] != null ? o.bondAlpha[b.i] : 1) * alpha;
      if (b.wedge && !o.noWedges) {
        const from = b.wedgeFrom === b.a;
        const [px, py] = from ? [ax, ay] : [bx, by], [qx, qy] = from ? [bx, by] : [ax, ay];
        const w = s * 0.11;
        if (b.wedge > 0) P.poly([[px, py], [qx + nx * w, qy + ny * w], [qx - nx * w, qy - ny * w]], { fill: col, alpha: ba });
        else { const k = Math.max(4, Math.round(L / 5)); for (let t = 1; t <= k; t++) { const f = t / k, cx = px + (qx - px) * f, cy = py + (qy - py) * f, ww = w * f; P.line(cx + nx * ww, cy + ny * ww, cx - nx * ww, cy - ny * ww, { color: col, width: lw * 0.85, alpha: ba }); } }
        return;
      }
      if (bo === 0.5 || b.partial) { P.line(ax, ay, bx, by, { color: col, width: lw, dash: [s * 0.12, s * 0.1], alpha: ba }); return; }
      if (bo === 1 || bo === 0) { P.line(ax, ay, bx, by, { color: col, width: lw, alpha: ba }); return; }
      if (bo >= 3 - 1e-6 && bo <= 3 + 1e-6) {
        const d = s * 0.16;
        P.line(ax, ay, bx, by, { color: col, width: lw, alpha: ba });
        P.line(ax + nx * d, ay + ny * d, bx + nx * d, by + ny * d, { color: col, width: lw, alpha: ba });
        P.line(ax - nx * d, ay - ny * d, bx - nx * d, by - ny * d, { color: col, width: lw, alpha: ba });
        return;
      }
      // 2중·1.5중
      const dashed = bo !== 2 && bo !== 2.0;
      const lab1 = !!view.labels[b.a], lab2 = !!view.labels[b.b];
      const deg1 = m.adj[b.a].length, deg2 = m.adj[b.b].length;
      let side = 0;
      if (b.ring && b.rings) {
        // 가장 작은(방향족 우선) 고리 쪽
        const ri = b.rings.slice().sort((p, q) => m.rings[p].length - m.rings[q].length)[0];
        const [cx, cy] = ringCenter(ri);
        side = Math.sign((cx - x1) * nx + (cy - y1) * ny) || 1;
      } else {
        const centered = (deg1 === 1 && lab1) || (deg2 === 1 && lab2) || (deg1 === 1 && deg2 === 1);
        if (!centered) {
          let cnt = 0;
          [[b.a, b.b], [b.b, b.a]].forEach(([u, w]) => m.adj[u].forEach((e) => { if (e.n === w) return; const [qx, qy] = pos(e.n); cnt += Math.sign((qx - x1) * nx + (qy - y1) * ny); }));
          side = Math.sign(cnt) || 1;
          if (o.dbSide && o.dbSide[b.i]) side = o.dbSide[b.i];
        }
      }
      if (side === 0) {
        const d = s * 0.085;
        P.line(ax + nx * d, ay + ny * d, bx + nx * d, by + ny * d, { color: col, width: lw, alpha: ba });
        P.line(ax - nx * d, ay - ny * d, bx - nx * d, by - ny * d, { color: col, width: lw, alpha: ba, dash: dashed ? [s * 0.12, s * 0.1] : null });
      } else {
        const d = s * 0.17 * side, sh = s * 0.14;
        P.line(ax, ay, bx, by, { color: col, width: lw, alpha: ba });
        const s1 = lab1 ? 0 : sh, s2 = lab2 ? 0 : sh;
        P.line(ax + nx * d + ux * s1, ay + ny * d + uy * s1, bx + nx * d - ux * s2, by + ny * d - uy * s2, { color: col, width: lw, alpha: ba, dash: dashed ? [s * 0.12, s * 0.1] : null });
      }
    });
    // 빈 방향(이름표 H·결합을 피해) — 전하·전자쌍·주석 자리
    const freeDirs = (i, count, avoidExtra) => {
      const occ = m.adj[i].map((e) => angOf(m.xy[i], m.xy[e.n]));
      const LL = view.labels[i];
      if (LL && LL.L.segs.length > 1) { const left = LL.L.left; if (LL.L.segs.some((sg) => sg.t === "H" || sg.sub)) occ.push(left ? Math.PI : 0); }
      (avoidExtra || []).forEach((a) => occ.push(a));
      const out = [];
      for (let k = 0; k < count; k++) {
        let best = 0, bd = -1;
        for (let t = 0; t < 72; t++) {
          const a = (t * 5 - 90) * D2R;
          let dmin = Math.PI;
          occ.concat(out).forEach((q) => { let d = Math.abs(normA(a - q)); if (d > Math.PI) d = TAU - d; dmin = Math.min(dmin, d); });
          if (dmin > bd + 1e-6) { bd = dmin; best = a; }
        }
        out.push(best);
      }
      return out;
    };
    view.freeDirs = freeDirs;
    // 이름표 그리기
    view.labels.forEach((LL, i) => { if (LL) { const [, y] = pos(i); const c = o.atomColor && o.atomColor[i] ? o.atomColor[i] : LL.L.color; drawLabel(P, LL, y, fs, c, alpha * (o.atomAlpha && o.atomAlpha[i] != null ? o.atomAlpha[i] : 1)); } });
    // 숨은 탄소의 전하·라디칼
    m.atoms.forEach((a, i) => {
      if (hide.has(i) || view.labels[i]) return;
      const [x, y] = pos(i);
      const ex = Org.electrons(m, i);
      const need = (a.charge && o.charges !== false ? 1 : 0) + (ex.rad && o.radicals !== false ? 1 : 0) + (o.lonePairs && ex.lp && (o.lonePairs === true || o.lonePairs.includes(i)) ? ex.lp : 0);
      if (!need) return;
      const dirs = freeDirs(i, need);
      let k = 0;
      if (a.charge && o.charges !== false) { const d = dirs[k++]; const t = (Math.abs(a.charge) > 1 ? Math.abs(a.charge) : "") + (a.charge > 0 ? "+" : "−"); P.text(t, x + Math.cos(d) * s * 0.34, y + Math.sin(d) * s * 0.34, { size: fs * 0.82, weight: 700, alpha }); }
      if (ex.rad && o.radicals !== false) { const d = dirs[k++]; P.circle(x + Math.cos(d) * s * 0.26, y + Math.sin(d) * s * 0.26, Math.max(1.6, s * 0.06), { fill: "var(--text)", alpha }); view.lps[i] = (view.lps[i] || []).concat([{ x: x + Math.cos(d) * s * 0.26, y: y + Math.sin(d) * s * 0.26, ang: d, single: true }]); }
      if (o.lonePairs && ex.lp && (o.lonePairs === true || o.lonePairs.includes(i))) {
        for (let t = 0; t < ex.lp; t++) { const d = dirs[k++]; drawLP(P, view, i, x, y, d, s * 0.3, alpha); }
      }
    });
    // 이름표 원자의 비공유 전자쌍·홀전자
    view.labels.forEach((LL, i) => {
      if (!LL) return;
      const a = m.atoms[i];
      if (a.el === "*" || a.el === "C" && !o.lonePairs) return;
      const ex = Org.electrons(m, i);
      const want = o.lonePairs === true || (Array.isArray(o.lonePairs) && o.lonePairs.includes(i));
      const nlp = want ? ex.lp : 0, nrad = o.radicals !== false ? ex.rad : 0;
      if (!nlp && !nrad) return;
      const [x, y] = pos(i);
      const chargeDir = a.charge ? [-Math.PI / 4] : [];
      const dirs = freeDirs(i, nlp + nrad, chargeDir);
      dirs.forEach((d, k) => {
        const rr = Math.max(LL.hw, LL.hh) * (Math.abs(Math.cos(d)) > 0.7 ? LL.hw / Math.max(LL.hw, LL.hh) : LL.hh / Math.max(LL.hw, LL.hh)) + fs * 0.22;
        if (k < nrad) { const px = x + Math.cos(d) * rr, py = y + Math.sin(d) * rr; P.circle(px, py, Math.max(1.4, fs * 0.1), { fill: "var(--text)", alpha }); view.lps[i] = (view.lps[i] || []).concat([{ x: px, y: py, ang: d, single: true }]); }
        else drawLP(P, view, i, x, y, d, rr, alpha);
      });
    });
    // 주석: δ+, 번호, 임의 글
    const notes = Object.assign({}, o.notes || {});
    if (o.numbers) m.atoms.forEach((a, i) => { if (a.el !== "H" && notes[i] == null) notes[i] = Array.isArray(o.numbers) ? o.numbers[i] : String(a.map || i + 1); });
    Object.keys(notes).forEach((k) => {
      const i = Number(k), nt = notes[k];
      if (nt == null || nt === "" || !m.atoms[i]) return;
      const N = typeof nt === "object" ? nt : { t: String(nt) };
      const [x, y] = pos(i);
      const d = N.ang != null ? N.ang * D2R : freeDirs(i, 1, m.atoms[i].charge ? [-Math.PI / 4] : [])[0];
      const LL = view.labels[i];
      const rr = (LL ? Math.max(LL.hw, LL.hh) + fs * 0.45 : s * 0.38) + (N.dist || 0) * s;
      const col = N.color || (/^δ\+/.test(N.t) ? "var(--org-pos)" : /^δ[−-]/.test(N.t) ? "var(--org-neg)" : "var(--text-dim)");
      P.text(N.t, x + Math.cos(d) * rr, y + Math.sin(d) * rr, { size: N.size || fs * 0.72, color: col, weight: N.bold ? 700 : 500, alpha, halo: true });
    });
    view.bbox = P.bb.slice();
    return view;
  }
  function drawLP(P, view, i, x, y, d, rr, alpha) {
    const s = view.s, sep = s * 0.085, r = Math.max(1.3, s * 0.05);
    const cx = x + Math.cos(d) * rr, cy = y + Math.sin(d) * rr, px = -Math.sin(d) * sep, py = Math.cos(d) * sep;
    P.circle(cx + px, cy + py, r, { fill: "var(--text)", alpha });
    P.circle(cx - px, cy - py, r, { fill: "var(--text)", alpha });
    view.lps[i] = (view.lps[i] || []).concat([{ x: cx, y: cy, ang: d }]);
  }

  /* ------------------------------------------------------------------ 굽은 화살표 */
  // 참조: "a3"(원자) "lp3"(비공유 전자쌍) "e3"(홀전자) "b2-3"(결합) "n2-3"(새 결합 자리) "pt:x,y"(좌표, 결합 길이 단위)
  // 번호: 맵 번호가 있으면 맵 번호, 없으면 1부터 센 원자 순서. 여러 분자일 때 "m2.a3"
  function findAtom(view, num) {
    const m = view.m;
    if (m.hasMap) { const a = m.atoms.find((x) => x.map === num); return a ? a.i : -1; }
    return num - 1 < m.atoms.length ? num - 1 : -1;
  }
  function parseRef(views, ref) {
    let vi = null;
    const mm = /^m(\d+)\.(.*)$/.exec(ref);
    if (mm) { vi = Number(mm[1]) - 1; ref = mm[2]; }
    const t = /^(lp|a|e|b|n|pt):?(.*)$/.exec(ref.trim());
    if (!t) return null;
    const kind = t[1], body = t[2];
    if (kind === "pt") { const [x, y] = body.split(",").map(Number); const v = views[vi || 0]; return { kind, p: [v.ox + x * v.s, v.oy + y * v.s], view: v }; }
    const nums = body.split("-").map(Number);
    const pick = (num) => {
      const list = vi != null ? [views[vi]] : views;
      for (const v of list) { if (!v) continue; const i = findAtom(v, num); if (i >= 0) return { v, i }; }
      return null;
    };
    const A = pick(nums[0]);
    if (!A) return null;
    const out = { kind, view: A.v, i: A.i };
    if (nums.length > 1) { const B = pick(nums[1]); if (!B) return null; out.j = B.i; out.view2 = B.v; }
    return out;
  }
  function refPoint(R, toward, role, sideHint) {
    const v = R.view, s = v.s;
    const P = (vv, i) => vv.pos(i);
    if (R.kind === "pt") return R.p;
    if (R.kind === "a") {
      const p = P(v, R.i);
      if (role === "end" && toward) {
        const LL = v.labels[R.i];
        const dx = toward[0] - p[0], dy = toward[1] - p[1], L = hyp(dx, dy) || 1;
        const r = LL ? Math.min(LL.hw / (Math.abs(dx / L) || 1e-9), LL.hh / (Math.abs(dy / L) || 1e-9)) + 3 : s * 0.18;
        return [p[0] + dx / L * r, p[1] + dy / L * r];
      }
      if (role === "start" && toward) { const LL = v.labels[R.i]; const dx = toward[0] - p[0], dy = toward[1] - p[1], L = hyp(dx, dy) || 1; const r = LL ? Math.max(LL.hw, LL.hh) + 2 : s * 0.15; return [p[0] + dx / L * r, p[1] + dy / L * r]; }
      return p;
    }
    if (R.kind === "lp" || R.kind === "e") {
      const p = P(v, R.i);
      const L = (v.lps[R.i] || []).filter((x) => (R.kind === "e" ? x.single : !x.single));
      if (L.length) {
        let best = L[0], bd = Infinity;
        if (toward) L.forEach((x) => { const d = hyp(x.x - toward[0], x.y - toward[1]); if (d < bd) { bd = d; best = x; } });
        return [best.x + Math.cos(best.ang) * s * 0.06, best.y + Math.sin(best.ang) * s * 0.06];
      }
      const LL = v.labels[R.i];
      let dir = toward ? Math.atan2(toward[1] - p[1], toward[0] - p[0]) : -Math.PI / 2;
      // 결합 방향과 겹치지 않게 옆으로
      const free = v.freeDirs(R.i, 1, [])[0];
      let dd = Math.abs(normA(dir - free)); if (dd > Math.PI) dd = TAU - dd;
      if (dd < Math.PI * 0.6) dir = free;
      const r = (LL ? Math.max(LL.hw, LL.hh) : s * 0.15) + s * 0.16;
      return [p[0] + Math.cos(dir) * r, p[1] + Math.sin(dir) * r];
    }
    if (R.kind === "b" || R.kind === "n") {
      const p = P(v, R.i), q = P(R.view2 || v, R.j);
      const f = R.kind === "n" ? 0.5 : 0.5;
      const mx = p[0] + (q[0] - p[0]) * f, my = p[1] + (q[1] - p[1]) * f;
      if (R.kind === "b" && sideHint) { const dx = q[0] - p[0], dy = q[1] - p[1], L = hyp(dx, dy) || 1; return [mx - dy / L * s * 0.1 * sideHint, my + dx / L * s * 0.1 * sideHint]; }
      return [mx, my];
    }
    return null;
  }
  /**
   * 굽은 화살표(캔버스 ctx 또는 펜): Org.curly(ctx, [x0,y0], [x1,y1], {bend:0.4(+ 왼쪽 굽음), half(낚싯바늘), color, width, progress:0..1, head})
   */
  Org.curly = function (Pn, p0, p1, o = {}) {
    const P = Pn.line ? Pn : canvasPen(Pn);
    const dx = p1[0] - p0[0], dy = p1[1] - p0[1], L = hyp(dx, dy) || 1;
    const bend = o.bend == null ? 0.45 : o.bend;
    const minOff = o.minOff == null ? 14 : o.minOff;
    let off = bend * L; if (Math.abs(off) < minOff) off = minOff * (Math.sign(bend) || 1);
    const c = [(p0[0] + p1[0]) / 2 - dy / L * off, (p0[1] + p1[1]) / 2 + dx / L * off];
    const col = o.color || "var(--org-arrow)", w = o.width || 1.6, head = o.head || 8;
    const prog = o.progress == null ? 1 : o.progress;
    const qb = (t) => [(1 - t) * (1 - t) * p0[0] + 2 * (1 - t) * t * c[0] + t * t * p1[0], (1 - t) * (1 - t) * p0[1] + 2 * (1 - t) * t * c[1] + t * t * p1[1]];
    // 화살촉 길이만큼 줄인 끝까지 곡선
    const tEnd = Math.max(0.02, prog * (1 - Math.min(0.45, head * 0.75 / (L + Math.abs(off)))));
    const pts = [];
    for (let k = 0; k <= 24; k++) pts.push(qb((k / 24) * tEnd));
    P.curve(pts, { color: col, width: w, alpha: o.alpha, dash: o.dash });
    if (prog >= 0.999) {
      const tip = p1, back = qb(0.86), a = Math.atan2(tip[1] - back[1], tip[0] - back[0]);
      const h = head, sp = 0.42;
      const left = [tip[0] - h * Math.cos(a - sp), tip[1] - h * Math.sin(a - sp)], right = [tip[0] - h * Math.cos(a + sp), tip[1] - h * Math.sin(a + sp)];
      if (o.half) {
        // 바깥쪽(제어점 반대쪽) 한쪽 미늘
        const cs = Math.sign((c[0] - tip[0]) * Math.sin(a) * -1 + (c[1] - tip[1]) * Math.cos(a)) || 1;
        P.poly([tip, cs > 0 ? right : left, [tip[0] - h * 0.7 * Math.cos(a), tip[1] - h * 0.7 * Math.sin(a)]], { fill: col, alpha: o.alpha });
      } else P.poly([tip, left, [tip[0] - h * 0.62 * Math.cos(a), tip[1] - h * 0.62 * Math.sin(a)], right], { fill: col, alpha: o.alpha });
    }
    return { c, mid: qb(0.5) };
  };
  /** 스펙 목록으로 화살표 여러 개: specs = "lp1>a2; b2-3>a3" 또는 [{from,to,bend,half,color}] */
  function parseArrowSpecs(spec) {
    if (!spec) return [];
    if (Array.isArray(spec)) return spec.map((x) => (typeof x === "string" ? parseArrowSpecs(x)[0] : x)).filter(Boolean);
    return String(spec).split(";").map((t) => t.trim()).filter(Boolean).map((t) => {
      const mm = /^(.+?)(>>|>)(.+?)(?:\s*\(([^)]*)\))?$/.exec(t);
      if (!mm) return null;
      const o = { from: mm[1].trim(), to: mm[3].trim(), half: mm[2] === ">>" ? false : undefined };
      if (mm[4]) mm[4].split(",").forEach((kv) => { const [k, v] = kv.split("=").map((x) => x.trim()); if (k === "half" || k === "fish") o.half = v !== "0"; else if (k === "bend") o.bend = Number(v); else if (k) o[k] = isNaN(Number(v)) ? v : Number(v); });
      if (/^e/.test(o.from.replace(/^m\d+\./, "")) && o.half == null) o.half = true;
      return o;
    }).filter(Boolean);
  }
  Org.parseArrows = parseArrowSpecs;
  function drawArrows(P, views, specs, o = {}) {
    const list = parseArrowSpecs(specs);
    const all = views.filter(Boolean);
    // 중심(굽는 방향 자동 결정용)
    let cx = 0, cy = 0, n = 0;
    all.forEach((v) => v.m.atoms.forEach((a, i) => { const p = v.pos(i); cx += p[0]; cy += p[1]; n++; }));
    cx /= n || 1; cy /= n || 1;
    list.forEach((A, k) => {
      const F = parseRef(all, A.from), T = parseRef(all, A.to);
      if (!F || !T) return;
      const tGuess = refPoint(T, null, "end");
      const f0 = refPoint(F, tGuess, "start", 0);
      let side = A.bend != null ? Math.sign(A.bend) : 0;
      if (!side) {
        // 제어점이 분자 중심에서 먼 쪽
        const mx = (f0[0] + tGuess[0]) / 2, my = (f0[1] + tGuess[1]) / 2, dx = tGuess[0] - f0[0], dy = tGuess[1] - f0[1], L = hyp(dx, dy) || 1;
        const c1 = [mx - dy / L * 10, my + dx / L * 10], c2 = [mx + dy / L * 10, my - dx / L * 10];
        side = hyp(c1[0] - cx, c1[1] - cy) >= hyp(c2[0] - cx, c2[1] - cy) ? 1 : -1;
      }
      const p0 = refPoint(F, tGuess, "start", -side);
      const mid = [(p0[0] + tGuess[0]) / 2, (p0[1] + tGuess[1]) / 2];
      const dx = tGuess[0] - p0[0], dy = tGuess[1] - p0[1], L = hyp(dx, dy) || 1;
      const bend = A.bend != null ? A.bend : 0.42 * side;
      const ctrl = [mid[0] - dy / L * bend * L, mid[1] + dx / L * bend * L];
      const p1 = refPoint(T, ctrl, "end", -side);
      const prog = o.progress == null ? 1 : Array.isArray(o.progress) ? o.progress[k] : o.progress;
      Org.curly(P, p0, p1, { bend, half: A.half, color: A.color || o.color, width: o.width || Math.max(1.3, views[0].s * 0.05), head: o.head || Math.max(6, views[0].s * 0.25), progress: prog, alpha: o.alpha, minOff: views[0].s * 0.45 });
    });
  }

  /* ------------------------------------------------------------------ 공개 API: 캔버스·SVG */
  /**
   * 캔버스에 분자 그리기.
   *   Org.draw(ctx, "CC(=O)O", { x, y (중심 px), scale(결합 px), fit:{x,y,w,h}(상자에 맞춤), maxScale,
   *     layout:{rotate,flipX,flipY}, showC, lonePairs:true|[i], numbers, notes:{i:'δ+'}, highlight:{atoms,bonds,color},
   *     labels:{i:'Nu'}, arrows:"lp1>a2", mode:'mono', alpha, hideAtoms:[i], origin:[px,py](배치 좌표 원점 고정; layout.coords와 함께) })
   *   → view { pos(i)→[px,py], s, m, bbox }  (원자 번호 i는 0부터)
   */
  Org.draw = function (ctx, mol, o = {}) {
    const P = ctx && ctx.line ? ctx : canvasPen(ctx);
    const m = prepMol(mol, o);
    const place = fitPlacement(P, m, o);
    const view = drawMolecule(P, m, Object.assign({}, o, place));
    if (o.arrows) drawArrows(P, [view], o.arrows, o.arrowOpts || {});
    return view;
  };
  function prepMol(mol, o) {
    const m = typeof mol === "string" ? Org.parse(mol) : mol;
    if (!m.xy || o.relayout) Org.layout(m, o.layout || {});
    return m;
  }
  function molExtent(m) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    m.xy.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
    return { x0, y0, x1, y1, w: x1 - x0, h: y1 - y0 };
  }
  Org.extent = (m) => molExtent(prepMol(m, {}));
  function fitPlacement(P, m, o) {
    // origin:[px,py] → 좌표 (0,0)을 그 픽셀에 고정(외곽 상자로 다시 가운데 맞추지 않음)
    if (o.origin) return { scale: o.scale || 30, ox: o.origin[0], oy: o.origin[1] };
    const ex = molExtent(m);
    let s = o.scale || 30;
    if (o.fit) {
      const pad = o.fitPad != null ? o.fitPad : 0.75;
      s = Math.min(o.fit.w / (ex.w + 2 * pad), o.fit.h / (ex.h + 2 * pad), o.maxScale || 40);
      const cx = o.fit.x + o.fit.w / 2, cy = o.fit.y + o.fit.h / 2;
      return { scale: s, ox: cx - (ex.x0 + ex.w / 2) * s, oy: cy - (ex.y0 + ex.h / 2) * s };
    }
    const cx = o.x != null ? o.x : 0, cy = o.y != null ? o.y : 0;
    return { scale: s, ox: cx - (ex.x0 + ex.w / 2) * s, oy: cy - (ex.y0 + ex.h / 2) * s };
  }
  /** SVG 문자열 (같은 옵션). 결합 길이 기본 26px */
  Org.svg = function (mol, o = {}) {
    const P = svgPen();
    const m = prepMol(mol, o);
    const view = drawMolecule(P, m, Object.assign({ scale: 26 }, o, { ox: 0, oy: 0 }));
    if (o.arrows) drawArrows(P, [view], o.arrows, o.arrowOpts || {});
    return P.svg(o.pad != null ? o.pad : 4, o.aria ? ` aria-label="${esc(o.aria)}"` : "");
  };

  /* ------------------------------------------------------------------ 반응식 */
  /**
   * 반응식(분자 + 화살표 + 시약) SVG.
   *   Org.scheme("CC=C{프로펜} + HBr ->{|CH₂Cl₂} CC(Br)C{2-브로모프로페인}")
   *   화살표: -> 정반응, <=> 평형, <-> 공명, => 여러 단계, ~> 메커니즘 이동. {위|아래} 로 시약·조건.
   *   분자 뒤 {이름} 은 아래 이름표. 분자 대신 "text:문자열" 은 글자만.
   *   옵션: {scale, arrows:"m1.lp1>m2.a3"(분자 사이 굽은 화살표), lonePairs, gap}
   */
  Org.scheme = function (spec, o = {}) {
    const P = svgPen();
    const items = typeof spec === "string" ? tokenizeScheme(spec) : spec;
    const s = o.scale || 26, fs = Math.max(9, Math.min(20, s * 0.47));
    let x = 0;
    const views = [];
    const placed = [];
    items.forEach((it) => {
      if (it.type === "mol") {
        const m = Org.parse(it.smiles);
        Org.layout(m, it.layout || o.layout || {});
        const ex = molExtent(m);
        // 이름표 폭 여유
        const padL = labelPad(m, ex, "left") * s, padR = labelPad(m, ex, "right") * s;
        const ox = x + padL - ex.x0 * s, oy = -(ex.y0 + ex.h / 2) * s;
        const view = drawMolecule(P, m, Object.assign({}, o, it.opts || {}, { scale: s, ox, oy }));
        views.push(view);
        const w = ex.w * s + padL + padR;
        if (it.cap) P.text(it.cap, x + w / 2, (ex.h / 2) * s + fs * 1.35 + (it.capDy || 0), { size: fs * 0.85, color: "var(--text-dim)" });
        placed.push({ x0: x, x1: x + w });
        x += w + (o.gap || s * 0.5);
      } else if (it.type === "plus" || it.type === "text") {
        const t = it.type === "plus" ? "+" : it.text;
        const w = P.measure(t, { size: fs * (it.type === "plus" ? 1.2 : 1) });
        P.text(t, x + w / 2, 0, { size: fs * (it.type === "plus" ? 1.2 : 1), color: "var(--text)" });
        x += w + (o.gap || s * 0.5);
      } else if (it.type === "arrow") {
        const tw = Math.max(P.measure(it.above || "", { size: fs * 0.8 }), P.measure(it.below || "", { size: fs * 0.8 }));
        const L = Math.max(s * 2.2, tw + s * 0.8);
        drawReactionArrow(P, x, 0, x + L, it.kind, s);
        if (it.above) P.text(it.above, x + L / 2, -fs * 0.95, { size: fs * 0.8, color: "var(--text-dim)" });
        if (it.below) P.text(it.below, x + L / 2, fs * 0.95, { size: fs * 0.8, color: "var(--text-dim)" });
        x += L + (o.gap || s * 0.5);
      }
    });
    if (o.arrows) drawArrows(P, views, o.arrows, o.arrowOpts || {});
    return P.svg(o.pad != null ? o.pad : 6, o.aria ? ` aria-label="${esc(o.aria)}"` : "");
  };
  function labelPad(m, ex, side) {
    let p = 0;
    m.atoms.forEach((a, i) => {
      if (a.el === "C" && !a.label) return;
      const x = m.xy[i][0];
      if (side === "left" && x - ex.x0 < 0.3) p = Math.max(p, 0.45 + (a.h ? 0.35 : 0) + (a.label ? 0.25 * a.label.length : 0));
      if (side === "right" && ex.x1 - x < 0.3) p = Math.max(p, 0.45 + (a.h ? 0.35 : 0) + (a.label ? 0.25 * a.label.length : 0));
    });
    return p;
  }
  function drawReactionArrow(P, x0, y, x1, kind, s) {
    const lw = Math.max(1.2, s * 0.05), h = Math.max(6, s * 0.24), col = "var(--text)";
    const head = (x, y, dir, half) => { if (half === "up") P.poly([[x, y], [x - dir * h, y - h * 0.45], [x - dir * h * 0.8, y]], { fill: col }); else if (half === "down") P.poly([[x, y], [x - dir * h, y + h * 0.45], [x - dir * h * 0.8, y]], { fill: col }); else P.poly([[x, y], [x - dir * h, y - h * 0.42], [x - dir * h * 0.7, y], [x - dir * h, y + h * 0.42]], { fill: col }); };
    if (kind === "eq") {
      const d = s * 0.09;
      P.line(x0, y - d, x1 - h * 0.6, y - d, { width: lw }); head(x1, y - d, 1, "up");
      P.line(x0 + h * 0.6, y + d, x1, y + d, { width: lw }); head(x0, y + d, -1, "down");
    } else if (kind === "res") {
      P.line(x0 + h * 0.6, y, x1 - h * 0.6, y, { width: lw }); head(x1, y, 1); head(x0, y, -1);
    } else if (kind === "multi") {
      const d = s * 0.08;
      P.line(x0, y - d, x1 - h * 0.6, y - d, { width: lw }); P.line(x0, y + d, x1 - h * 0.6, y + d, { width: lw });
      P.poly([[x1, y], [x1 - h, y - h * 0.55], [x1 - h, y + h * 0.55]], { fill: "none", stroke: col, width: lw });
    } else if (kind === "no") {
      P.line(x0, y, x1 - h * 0.6, y, { width: lw }); head(x1, y, 1);
      const cx = (x0 + x1) / 2; P.line(cx - h * 0.6, y - h * 0.7, cx + h * 0.6, y + h * 0.7, { width: lw, color: "var(--bad)" }); P.line(cx - h * 0.6, y + h * 0.7, cx + h * 0.6, y - h * 0.7, { width: lw, color: "var(--bad)" });
    } else {
      P.line(x0, y, x1 - h * 0.6, y, { width: lw, dash: kind === "dash" ? [s * 0.18, s * 0.12] : null }); head(x1, y, 1);
    }
  }
  Org.reactionArrow = (ctx, x0, y, x1, kind, s) => drawReactionArrow(ctx.line ? ctx : canvasPen(ctx), x0, y, x1, kind || "fwd", s || 30);
  function tokenizeScheme(str) {
    const toks = str.match(/[^\s{]+(?:\{[^}]*\})*/g) || [];
    const out = [];
    toks.forEach((t) => {
      const br = /^([^{]*)((?:\{[^}]*\})*)$/.exec(t);
      const head = br[1], braces = (br[2].match(/\{([^}]*)\}/g) || []).map((x) => x.slice(1, -1));
      const arrowKinds = { "->": "fwd", "<=>": "eq", "<->": "res", "=>": "multi", "~>": "dash", "-x>": "no" };
      if (arrowKinds[head]) { const [ab, bl] = (braces[0] || "").split("|"); out.push({ type: "arrow", kind: arrowKinds[head], above: (ab || "").trim(), below: (bl || "").trim() }); return; }
      if (head === "+") { out.push({ type: "plus" }); return; }
      if (/^text:/.test(head)) { out.push({ type: "text", text: head.slice(5).replace(/_/g, " ") }); return; }
      out.push({ type: "mol", smiles: head, cap: braces[0] });
    });
    return out;
  }
  Org.tokenizeScheme = tokenizeScheme;

  /* ------------------------------------------------------------------ 본문 자동 렌더 */
  // <span class="mol" data-smiles="CCO" data-scale="26" data-rotate="30" data-flip="x|y" data-lp="1|O 원자 번호들"
  //       data-num="1" data-hl="1,2" data-hlb="1-2,2-3" data-arrows="lp1>a2" data-notes="2:δ+;3:δ−" data-showc="1|terminal"
  //       data-caption="에탄올" data-labels="1:Nu" data-mode="mono"></span>
  // <div class="mol-scheme" data-scheme="CC=C + HBr -> CC(Br)C" data-scale="24" data-arrows="…"></div>
  const nums = (s) => (s || "").split(/[ ,]+/).filter(Boolean).map(Number);
  function optsFromData(d) {
    const o = {};
    if (d.scale) o.scale = Number(d.scale);
    const lay = {};
    if (d.rotate) lay.rotate = Number(d.rotate);
    if (d.flip) { if (d.flip.includes("x")) lay.flipX = true; if (d.flip.includes("y")) lay.flipY = true; }
    if (d.orient === "0") lay.orient = false;
    o.layout = lay;
    if (d.lp != null) o.lonePairs = d.lp === "1" || d.lp === "" || d.lp === "all" ? true : nums(d.lp).map((x) => x - 1);
    if (d.num) o.numbers = true;
    if (d.hl || d.hlb) o.highlight = { atoms: nums(d.hl).map((x) => x - 1), bonds: (d.hlb || "").split(/[ ,]+/).filter(Boolean).map((t) => t.split("-").map((x) => Number(x) - 1)) };
    if (d.hl2) o.highlight2 = { atoms: nums(d.hl2).map((x) => x - 1) };
    if (d.notes) { o.notes = {}; d.notes.split(";").forEach((kv) => { const k = kv.indexOf(":"); if (k > 0) o.notes[Number(kv.slice(0, k)) - 1] = kv.slice(k + 1); }); }
    if (d.labels) { o.labels = {}; d.labels.split(";").forEach((kv) => { const k = kv.indexOf(":"); if (k > 0) o.labels[Number(kv.slice(0, k)) - 1] = kv.slice(k + 1); }); }
    if (d.showc) o.showC = d.showc === "terminal" ? "terminal" : d.showc === "1" ? true : nums(d.showc).map((x) => x - 1);
    if (d.mode) o.mode = d.mode;
    if (d.arrows) o.arrows = d.arrows;
    if (d.charges === "0") o.charges = false;
    return o;
  }
  Org.optsFromData = optsFromData;
  Org.render = function (root) {
    if (!HAS_DOM) return;
    root = root || document;
    root.querySelectorAll(".mol[data-smiles]:not([data-org])").forEach((el) => {
      el.setAttribute("data-org", "1");
      try {
        const o = optsFromData(el.dataset);
        o.aria = el.dataset.caption || el.getAttribute("aria-label") || ("구조식 " + el.dataset.smiles);
        el.innerHTML = Org.svg(el.dataset.smiles, o) + (el.dataset.caption ? `<span class="mol-cap">${el.dataset.caption}</span>` : "");
      } catch (e) { el.textContent = el.dataset.smiles; console.error(e); }
    });
    root.querySelectorAll(".mol-scheme[data-scheme]:not([data-org])").forEach((el) => {
      el.setAttribute("data-org", "1");
      try {
        const o = optsFromData(el.dataset);
        o.aria = el.getAttribute("aria-label") || "반응식";
        el.innerHTML = Org.scheme(el.dataset.scheme, o);
      } catch (e) { el.textContent = el.dataset.scheme; console.error(e); }
    });
  };
  if (HAS_DOM) {
    const boot = () => {
      Org.render(document);
      let queued = false;
      const kick = () => { if (queued) return; queued = true; requestAnimationFrame(() => { queued = false; if (document.querySelector(".mol[data-smiles]:not([data-org]), .mol-scheme[data-scheme]:not([data-org])")) Org.render(document); }); };
      if (window.MutationObserver) new MutationObserver((ms) => { if (ms.some((x) => x.addedNodes.length)) kick(); }).observe(document.body, { childList: true, subtree: true });
    };
    if (window.SB && SB.hooks) SB.hooks.push(() => Org.render(document));
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  }

  /* ------------------------------------------------------------------ 선택형 드릴 */
  /**
   * 보기 고르기 반복 연습(R/S, 주생성물, 반응 종류 등 숫자가 아닌 답).
   *   <div class="drill" id="drill-rs" data-title="R/S 판정 반복 연습"></div>
   *   Org.pickDrill("drill-rs", () => ({ q:"<p>…</p><span class='mol' data-smiles='…'></span>", choices:["R","S"], answer:0, sol:"…" }))
   */
  Org.pickDrill = function (id, gen) {
    const el = typeof id === "string" ? document.getElementById(id) : id;
    if (!el) return null;
    el.classList.add("org-pick");
    let streak = 0, total = 0, right = 0;
    el.innerHTML = `<div class="drill-head"><span class="sim-tag">DRILL</span><h4></h4><span class="drill-score"></span></div><div class="drill-q"></div><div class="opts"></div><div class="prob-msg" aria-live="polite"></div><div class="prob-sol"></div><div class="prob-actions"><button type="button" class="btn" data-a="sol">풀이</button><button type="button" class="btn" data-a="next">새 문제</button></div>`;
    el.querySelector("h4").textContent = el.dataset.title || "반복 연습";
    const qEl = el.querySelector(".drill-q"), oEl = el.querySelector(".opts"), msg = el.querySelector(".prob-msg"), solEl = el.querySelector(".prob-sol"), score = el.querySelector(".drill-score");
    let cur = null, answered = false;
    function next() {
      cur = gen(); answered = false;
      qEl.innerHTML = cur.q; solEl.innerHTML = cur.sol || ""; solEl.classList.remove("show");
      msg.textContent = ""; msg.className = "prob-msg";
      oEl.innerHTML = cur.choices.map((c, k) => `<button type="button" class="btn" data-k="${k}">${c}</button>`).join("");
      Org.render(el);
      if (window.SB && SB.math) SB.math(el);
    }
    oEl.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-k]"); if (!b || answered) return;
      const k = Number(b.dataset.k), ok = [].concat(cur.answer).includes(k);
      answered = true; total++; if (ok) { right++; streak++; } else streak = 0;
      oEl.querySelectorAll("button").forEach((x) => { const kk = Number(x.dataset.k); if ([].concat(cur.answer).includes(kk)) x.classList.add("right"); else if (kk === k) x.classList.add("wrong"); x.disabled = true; });
      msg.className = "prob-msg " + (ok ? "right" : "wrong");
      msg.textContent = ok ? "정답! ‘새 문제’로 계속해 보세요." : "아닙니다. 풀이를 확인해 보세요.";
      score.textContent = `${right}/${total} · 연속 ${streak}`;
    });
    el.querySelector('[data-a="sol"]').addEventListener("click", () => solEl.classList.toggle("show"));
    el.querySelector('[data-a="next"]').addEventListener("click", next);
    next();
    return { next };
  };

  /* ------------------------------------------------------------------ 메커니즘 재생기 */
  /**
   * 단계별 메커니즘 애니메이션(원자 맵 번호로 단계 사이 원자를 옮긴다).
   *   <div id="mech-sn2"></div>
   *   Org.mechanism("mech-sn2", { steps: [
   *       { smiles:"[OH-:1].[CH3:2][Br:3]", arrows:"lp1>a2; b2-3>a3", caption:"친핵체가 뒤쪽에서 공격", opts:{lonePairs:true, showC:[1]} },
   *       { smiles:"[OH:1][CH3:2].[Br-:3]", caption:"…" } ],
   *     height: 240, scale: 34 })
   *   단계 옵션: at:[[dx,dy],…](성분별 이동, 결합 길이 단위), layout:{rotate,…}, opts:(Org.draw 옵션), label:"전이 상태"
   *   → { go(k), next(), prev(), play(), step }
   */
  function kabsch2(src, dst, allowFlip) {
    const n = src.length;
    const c = (pts) => pts.reduce((s, p) => [s[0] + p[0] / n, s[1] + p[1] / n], [0, 0]);
    const run = (flip) => {
      const S = src.map((p) => [flip ? -p[0] : p[0], p[1]]);
      const cs = c(S), cd = c(dst);
      let a = 0, b = 0;
      S.forEach((p, k) => { const x = p[0] - cs[0], y = p[1] - cs[1], u = dst[k][0] - cd[0], v = dst[k][1] - cd[1]; a += x * u + y * v; b += x * v - y * u; });
      const th = n > 1 ? Math.atan2(b, a) : 0, co = Math.cos(th), si = Math.sin(th);
      const f = (p) => { const x = (flip ? -p[0] : p[0]) - cs[0], y = p[1] - cs[1]; return [cd[0] + x * co - y * si, cd[1] + x * si + y * co]; };
      let err = 0; src.forEach((p, k) => { const q = f(p); err += (q[0] - dst[k][0]) ** 2 + (q[1] - dst[k][1]) ** 2; });
      return { f, err };
    };
    const A = run(false);
    if (!allowFlip || n < 3) return A.f;
    const B = run(true);
    return B.err < A.err * 0.6 ? B.f : A.f;
  }
  function alignFrame(prev, cur) {
    if (!prev) return;
    const pm = new Map();
    prev.atoms.forEach((a, i) => { if (a.map) pm.set(a.map, prev.xy[i]); });
    for (let c = 0; c < cur.ncomp; c++) {
      const idx = cur.atoms.filter((a) => a.comp === c).map((a) => a.i);
      const mapped = idx.filter((i) => cur.atoms[i].map && pm.has(cur.atoms[i].map));
      if (!mapped.length) continue;
      const f = kabsch2(mapped.map((i) => cur.xy[i]), mapped.map((i) => pm.get(cur.atoms[i].map)), true);
      idx.forEach((i) => (cur.xy[i] = f(cur.xy[i])));
    }
  }
  Org.mechanism = function (id, spec) {
    const root = typeof id === "string" ? document.getElementById(id) : id;
    if (!root) return null;
    root.classList.add("mech");
    root.innerHTML = `<canvas></canvas><div class="mech-cap" aria-live="polite"></div><div class="mech-bar"><button type="button" class="btn" data-a="prev">◀ 이전</button><button type="button" class="btn primary" data-a="next">다음 단계 ▶</button><button type="button" class="btn" data-a="play">⟲ 처음부터</button><span class="mech-n"></span></div>`;
    const cvEl = root.querySelector("canvas"), cap = root.querySelector(".mech-cap"), nEl = root.querySelector(".mech-n");
    const frames = spec.steps.map((st) => {
      const m = Org.parse(st.smiles);
      Org.layout(m, st.layout || {});
      if (st.at) for (let c = 0; c < m.ncomp; c++) { const d = st.at[c]; if (d) m.atoms.forEach((a, i) => { if (a.comp === c) { m.xy[i][0] += d[0]; m.xy[i][1] += d[1]; } }); }
      return { m, st };
    });
    frames.forEach((f, k) => { if (k && spec.align !== false && f.st.align !== false) { alignFrame(frames[k - 1].m, f.m); if (f.st.at2) for (let c = 0; c < f.m.ncomp; c++) { const d = f.st.at2[c]; if (d) f.m.atoms.forEach((a, i) => { if (a.comp === c) { f.m.xy[i][0] += d[0]; f.m.xy[i][1] += d[1]; } }); } } assignWedges(f.m, {}); });
    // 전체 범위
    let X0 = Infinity, Y0 = Infinity, X1 = -Infinity, Y1 = -Infinity;
    frames.forEach((f) => f.m.xy.forEach(([x, y]) => { X0 = Math.min(X0, x); Y0 = Math.min(Y0, y); X1 = Math.max(X1, x); Y1 = Math.max(Y1, y); }));
    let k = 0, t = 1, phase = "arrows", prog = 0, playing = false, wait = 0, finishT = 0;
    const st = { s: 30, ox: 0, oy: 0 };
    const drawFrame = (P, f, xy, alpha, arrowsProg) => {
      const mm = Object.create(f.m); mm.xy = xy;
      const o = Object.assign({}, spec.opts || {}, f.st.opts || {}, { scale: st.s, ox: st.ox, oy: st.oy, alpha });
      const view = drawMolecule(P, mm, o);
      if (f.st.arrows && arrowsProg > 0) drawArrows(P, [view], f.st.arrows, { progress: arrowsProg, alpha });
      if (f.st.label && alpha > 0.5) P.text(f.st.label, st.ox + ((X0 + X1) / 2) * st.s, st.oy + Y0 * st.s - st.s * 0.9, { size: 12, color: "var(--text-dim)", weight: 600, alpha });
      return view;
    };
    function lerpXY(A, B, tt) {
      // A의 좌표를 B 쪽으로: 맵 원자는 보간, 나머지는 성분 평균 변위
      const bm = new Map(); B.atoms.forEach((a, i) => { if (a.map) bm.set(a.map, B.xy[i]); });
      const out = A.xy.map((p) => p.slice());
      for (let c = 0; c < A.ncomp; c++) {
        const idx = A.atoms.filter((a) => a.comp === c).map((a) => a.i);
        let dx = 0, dy = 0, n = 0;
        idx.forEach((i) => { const mp = A.atoms[i].map; if (mp && bm.has(mp)) { const q = bm.get(mp); dx += q[0] - A.xy[i][0]; dy += q[1] - A.xy[i][1]; n++; } });
        if (n) { dx /= n; dy /= n; }
        idx.forEach((i) => { const mp = A.atoms[i].map; if (mp && bm.has(mp)) { const q = bm.get(mp); out[i] = [A.xy[i][0] + (q[0] - A.xy[i][0]) * tt, A.xy[i][1] + (q[1] - A.xy[i][1]) * tt]; } else out[i] = [A.xy[i][0] + dx * tt, A.xy[i][1] + dy * tt]; });
      }
      return out;
    }
    const cv = SB.canvas(cvEl, (ctx, w, h) => {
      const pad = 0.9;
      st.s = Math.min(spec.scale || 34, (w - 16) / (X1 - X0 + 2 * pad), (h - 16) / (Y1 - Y0 + 2 * pad));
      st.ox = w / 2 - ((X0 + X1) / 2) * st.s; st.oy = h / 2 - ((Y0 + Y1) / 2) * st.s;
      const P = canvasPen(ctx);
      if (t >= 1 || k === 0 && t >= 1) { drawFrame(P, frames[k], frames[k].m.xy, 1, phase === "arrows" ? prog : 1); return; }
      // k-1 → k 전환
      const A = frames[k - 1], B = frames[k];
      const e = t * t * (3 - 2 * t);
      drawFrame(P, A, lerpXY(A.m, B.m, e), 1 - e, 0);
      drawFrame(P, B, lerpXY(B.m, A.m, 1 - e), e, 0);
    }, { height: spec.height || 240 });
    const loop = SB.loop(root, (dt) => {
      let dirty = false;
      if (t < 1) { t = Math.min(1, t + dt / (spec.morph || 0.9)); if (t >= 1) { phase = "arrows"; prog = 0; } dirty = true; }
      else if (phase === "arrows" && prog < 1) { prog = Math.min(1, prog + dt / (spec.arrowTime || 0.8)); dirty = true; }
      else if (playing) { wait += dt; if (wait > (spec.pause || 1.4)) { wait = 0; if (k < frames.length - 1) go(k + 1); else playing = false; } }
      if (dirty) cv.redraw();
    });
    void loop;
    function sync() {
      const f = frames[k];
      cap.innerHTML = f.st.caption || "";
      nEl.textContent = `${k + 1} / ${frames.length}`;
      root.querySelector('[data-a="prev"]').disabled = k === 0;
      root.querySelector('[data-a="next"]').disabled = k === frames.length - 1;
      if (window.SB && SB.math) SB.math(cap);
      if (spec.onStep) spec.onStep(k);
    }
    function go(j, instant) {
      j = SB.clamp(j, 0, frames.length - 1);
      if (j === k + 1 && !instant) { k = j; t = 0; phase = "morph"; }
      else { k = j; t = 1; phase = "arrows"; prog = instant ? 1 : 0; }
      sync(); cv.redraw();
      // 루프가 화면 밖 판정으로 멈춰도 화살표·전환이 반쯤 그려진 채 남지 않게
      clearTimeout(finishT);
      finishT = setTimeout(() => { if (t < 1 || prog < 1) { t = 1; phase = "arrows"; prog = 1; cv.redraw(); } }, 1000 * ((spec.morph || 0.9) + (spec.arrowTime || 0.8)) + 1500);
    }
    root.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-a]"); if (!b) return;
      const a = b.dataset.a;
      if (a === "next") { playing = false; go(k + 1); }
      if (a === "prev") { playing = false; go(k - 1); }
      if (a === "play") { go(0); playing = true; wait = 0; }
    });
    sync();
    return { go, next: () => go(k + 1), prev: () => go(k - 1), play: () => { go(0); playing = true; }, get step() { return k; }, frames, redraw: () => cv.redraw() };
  };

  /* ------------------------------------------------------------------ 에너지 도표 */
  /**
   * 반응 좌표 에너지 도표: 정지점(극소·전이 상태)을 지나는 매끄러운 곡선.
   *   const pr = Org.profile(ctx, box|null, [{E:0,label:'반응물'},{E:85,label:'TS‡',ts:true},{E:-30,label:'생성물'}],
   *              { y:[-50,100], yLabel:'에너지 (kJ/mol)', xLabel:'반응 좌표', ticks:true, deltas:[[0,1,'ΔG‡']], color, fill, values:true })
   *   pr.at(s) → [px,py] (s: 0…n−1 정지점 번호, 사이값은 곡선 위), pr.E(s), pr.X, pr.Y
   */
  Org.profile = function (ctx, box, nodes, o = {}) {
    const pal = window.SB ? SB.palette() : {};
    const n = nodes.length;
    const Es = nodes.map((d) => d.E);
    const lo = Math.min(...Es), hi = Math.max(...Es), span = hi - lo || 1;
    const yr = o.y || [lo - span * 0.25, hi + span * 0.3];
    const ch = SB.chart(ctx, box, { x: [-0.35, n - 1 + 0.35], y: yr, xLabel: o.xLabel != null ? o.xLabel : "반응 좌표", yLabel: o.yLabel != null ? o.yLabel : "에너지", xTicks: [], yTicks: o.yTicks || (o.ticks === false ? [] : undefined), yFmt: o.yFmt, series: [] });
    const Ef = (s) => {
      s = SB.clamp(s, 0, n - 1);
      const i = Math.min(n - 2, Math.floor(s)), u = s - i;
      if (n === 1) return Es[0];
      const e = u * u * (3 - 2 * u);
      return Es[i] + (Es[i + 1] - Es[i]) * e;
    };
    const pts = [];
    for (let k = 0; k <= 200; k++) { const s = (n - 1) * k / 200; pts.push([s, Ef(s)]); }
    // 양 끝 평탄
    const data = [[-0.3, Es[0]]].concat(pts, [[n - 1 + 0.3, Es[n - 1]]]);
    if (o.fill) { ctx.save(); ctx.globalAlpha = 0.12; ctx.fillStyle = o.color || pal.accent; ctx.beginPath(); ctx.moveTo(ch.X(data[0][0]), ch.Y(yr[0])); data.forEach(([x, y]) => ctx.lineTo(ch.X(x), ch.Y(y))); ctx.lineTo(ch.X(data[data.length - 1][0]), ch.Y(yr[0])); ctx.closePath(); ctx.fill(); ctx.restore(); }
    ctx.save(); ctx.strokeStyle = o.color || pal.accent; ctx.lineWidth = o.width || 2.6; ctx.lineJoin = "round"; ctx.beginPath(); data.forEach(([x, y], k) => (k ? ctx.lineTo(ch.X(x), ch.Y(y)) : ctx.moveTo(ch.X(x), ch.Y(y)))); ctx.stroke(); ctx.restore();
    nodes.forEach((d, i) => {
      const x = ch.X(i), y = ch.Y(d.E);
      if (d.label) SB.label(ctx, d.label, x, d.ts ? y - 14 : y + 16, { color: d.color || pal.text, size: 12, bold: !!d.ts });
      if (o.values) SB.label(ctx, (Math.round(d.E * 10) / 10) + (o.unit ? " " + o.unit : ""), x, d.ts ? y - 30 : y + 32, { color: pal.dim, size: 11, mono: true });
    });
    (o.deltas || []).forEach(([i, j, lab, col], k) => {
      const xi = ch.X(i) + (j > i ? 1 : -1) * 0, y1 = ch.Y(Es[i]), y2 = ch.Y(Es[j]);
      const x = ch.X(i) + (ch.X(j) - ch.X(i)) * (0.18 + 0.1 * k);
      ctx.save(); ctx.setLineDash([3, 3]); ctx.strokeStyle = pal.dim; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(xi, y1); ctx.lineTo(x + 8, y1); ctx.stroke(); ctx.restore();
      SB.arrow(ctx, x, y1, x, y2, { color: col || pal.accent2, width: 1.6, head: 7 });
      SB.label(ctx, lab, x + 8, (y1 + y2) / 2, { color: col || pal.accent2, align: "left", bold: true, size: 12 });
    });
    return { X: ch.X, Y: ch.Y, box: ch.box, E: Ef, at: (s) => [ch.X(s), ch.Y(Ef(s))] };
  };

  /* ------------------------------------------------------------------ 투영식 */
  function textLabel(P, t, x, y, fs, color, o = {}) {
    // "CH3" → C H ₃ (숫자 아래첨자), 가운데 정렬
    const segs = splitLabel(String(t));
    const ws = segs.map((s) => P.measure(s.t, { size: s.sub ? fs * 0.7 : fs }));
    const W = ws.reduce((a, b) => a + b, 0);
    let cx = x - (o.align === "left" ? 0 : o.align === "right" ? W : W / 2);
    segs.forEach((s, k) => { P.text(s.t, cx + ws[k] / 2, y + (s.sub ? fs * 0.3 : 0), { size: s.sub ? fs * 0.7 : fs, color, weight: o.weight, alpha: o.alpha, halo: o.halo }); cx += ws[k]; });
    return W;
  }
  Org.textLabel = (ctx, t, x, y, o = {}) => textLabel(ctx.line ? ctx : canvasPen(ctx), t, x, y, o.size || 13, o.color || "var(--text)", o);
  const subColor = (t) => { const m = /^[A-Z][a-z]?/.exec(String(t)); const e = m && m[0]; return e && e !== "C" && e !== "H" && EL[e] ? elColorVar(e) : "var(--text)"; };
  /**
   * 뉴먼 투영. Org.newman(ctx, cx, cy, R, { front:['CH3','H','H'], back:['CH3','H','H'], phi: 180(앞 front[0]과 뒤 back[0] 사이 이면각, 도), rot: 0(front[0]의 각, 위=0, 시계 방향),
   *   colors:{front:[…], back:[…]}, fs, highlight:{front:[i], back:[i]} }) → { front:[[x,y]…], back:[[x,y]…] }
   */
  Org.newman = function (ctx, cx, cy, R, o = {}) {
    const P = ctx.line ? ctx : canvasPen(ctx);
    const fr = o.front || ["H", "H", "H"], bk = o.back || ["H", "H", "H"];
    const rot = (o.rot || 0) * D2R, phi = (o.phi == null ? 180 : o.phi) * D2R;
    const fs = o.fs || Math.max(11, R * 0.42), lw = o.width || Math.max(1.6, R * 0.05);
    const ang = (k, back) => rot + (back ? phi : 0) + k * TAU / 3;
    const pt = (a, r) => [cx + r * Math.sin(a), cy - r * Math.cos(a)];
    const out = { front: [], back: [] };
    const hlF = (o.highlight && o.highlight.front) || [], hlB = (o.highlight && o.highlight.back) || [];
    bk.forEach((lab, k) => {
      const a = ang(k, true), p1 = pt(a, R), p2 = pt(a, R * 1.7), pl = pt(a, R * 2.1);
      if (hlB.includes(k)) P.line(p1[0], p1[1], p2[0], p2[1], { color: "var(--org-hl)", width: lw * 5 });
      P.line(p1[0], p1[1], p2[0], p2[1], { color: "var(--text)", width: lw });
      if (lab) textLabel(P, lab, pl[0], pl[1], fs, (o.colors && o.colors.back && o.colors.back[k]) || subColor(lab), { halo: true });
      out.back.push(pl);
    });
    P.circle(cx, cy, R, { fill: "var(--canvas-bg)", stroke: "var(--text)", width: lw });
    fr.forEach((lab, k) => {
      const a = ang(k, false), p2 = pt(a, R * 1.7), pl = pt(a, R * 2.1);
      if (hlF.includes(k)) P.line(cx, cy, p2[0], p2[1], { color: "var(--org-hl)", width: lw * 5 });
      P.line(cx, cy, p2[0], p2[1], { color: "var(--text)", width: lw });
      if (lab) textLabel(P, lab, pl[0], pl[1], fs, (o.colors && o.colors.front && o.colors.front[k]) || subColor(lab), { halo: true });
      out.front.push(pl);
    });
    P.circle(cx, cy, lw * 1.2, { fill: "var(--text)" });
    return out;
  };
  /** 톱질 모형(sawhorse): 앞 탄소 왼쪽 아래, 뒤 탄소 오른쪽 위. 옵션은 newman과 같음 + L(축 길이) */
  Org.sawhorse = function (ctx, cx, cy, L, o = {}) {
    const P = ctx.line ? ctx : canvasPen(ctx);
    const fr = o.front || ["H", "H", "H"], bk = o.back || ["H", "H", "H"];
    const rot = (o.rot || 0) * D2R, phi = (o.phi == null ? 180 : o.phi) * D2R;
    const fs = o.fs || Math.max(11, L * 0.18), lw = o.width || 1.8;
    const ax = Math.cos(-Math.PI / 4.5), ay = Math.sin(-Math.PI / 4.5);
    const F = [cx - ax * L / 2, cy - ay * L / 2], B = [cx + ax * L / 2, cy + ay * L / 2];
    const r = L * 0.55;
    const sub = (C, a) => [C[0] + r * Math.sin(a), C[1] - r * Math.cos(a) * 0.95];
    const out = { front: [], back: [] };
    bk.forEach((lab, k) => { const a = rot + phi + k * TAU / 3, p = sub(B, a); P.line(B[0], B[1], p[0], p[1], { width: lw }); const pl = [B[0] + (p[0] - B[0]) * 1.32, B[1] + (p[1] - B[1]) * 1.32]; if (lab) textLabel(P, lab, pl[0], pl[1], fs, subColor(lab), { halo: true }); out.back.push(pl); });
    P.line(F[0], F[1], B[0], B[1], { width: lw * 1.2 });
    fr.forEach((lab, k) => { const a = rot + k * TAU / 3, p = sub(F, a); P.line(F[0], F[1], p[0], p[1], { width: lw }); const pl = [F[0] + (p[0] - F[0]) * 1.32, F[1] + (p[1] - F[1]) * 1.32]; if (lab) textLabel(P, lab, pl[0], pl[1], fs, subColor(lab), { halo: true }); out.front.push(pl); });
    return out;
  };
  /**
   * 사이클로헥세인 의자 형태(고리 뒤집기 보간 포함).
   *   Org.chair(ctx, cx, cy, size, { subs:[{at:0, up:'CH3', down:'H'}, …], flip:0..1(0=처음 의자, 1=뒤집힌 의자, 0.5=배 모양),
   *     numbers:true|['1',…], hideH:true, yaw:0, pitch:22, highlight:[at…], showAxes:false })
   *   → { atoms:[[x,y]…], subs:[{at, up:{x,y,axial}, down:{x,y,axial}}] }
   *   위(up)·아래(down)는 고리 면 기준으로 뒤집어도 유지되고, 축(axial)·적도(equatorial)는 뒤집으면 바뀐다.
   */
  Org.chairGeom = function (flip = 0) {
    const h = 0.25, Q = h * Math.sqrt(6), th = Math.PI * SB_clamp(flip, 0, 1);
    const atoms = [];
    for (let k = 0; k < 6; k++) {
      const a = k * Math.PI / 3;
      const z = Q * (Math.sin(th) * Math.cos(2 * Math.PI * k / 3) / Math.sqrt(3) + Math.cos(th) * (k % 2 ? -1 : 1) / Math.sqrt(6));
      atoms.push([Math.cos(a), Math.sin(a), z]);
    }
    const subs = atoms.map((p, k) => {
      const pm = atoms[(k + 5) % 6], pp = atoms[(k + 1) % 6];
      const u = sub3(pp, p), w = sub3(pm, p);
      let b = [u[0] + w[0], u[1] + w[1], u[2] + w[2]]; const bl = hyp(...b); b = b.map((x) => x / bl);
      let n = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]]; const nl = hyp(...n); n = n.map((x) => x / nl);
      const al = 54.75 * D2R;
      const up = [-b[0] * Math.cos(al) + n[0] * Math.sin(al), -b[1] * Math.cos(al) + n[1] * Math.sin(al), -b[2] * Math.cos(al) + n[2] * Math.sin(al)];
      const dn = [-b[0] * Math.cos(al) - n[0] * Math.sin(al), -b[1] * Math.cos(al) - n[1] * Math.sin(al), -b[2] * Math.cos(al) - n[2] * Math.sin(al)];
      return { up, down: dn, upAxial: Math.abs(up[2]) > Math.abs(dn[2]) };
    });
    return { atoms, subs };
  };
  const SB_clamp = (x, a, b) => Math.min(b, Math.max(a, x));
  Org.chair = function (ctx, cx, cy, size, o = {}) {
    const P = ctx.line ? ctx : canvasPen(ctx);
    const G = Org.chairGeom(o.flip || 0);
    const yaw = (o.yaw == null ? 18 : o.yaw) * D2R, pitch = (o.pitch == null ? 12 : o.pitch) * D2R;
    const proj = (v) => { const x = v[0] * Math.cos(yaw) - v[1] * Math.sin(yaw), y = v[0] * Math.sin(yaw) + v[1] * Math.cos(yaw), z = v[2]; return { x: cx + x * size, y: cy - (z * Math.cos(pitch) + y * Math.sin(pitch)) * size, d: y * Math.cos(pitch) - z * Math.sin(pitch) }; };
    const A = G.atoms.map(proj);
    const lw = o.width || Math.max(1.6, size * 0.04), fs = o.fs || Math.max(10, size * 0.2);
    const subs = o.subs || [];
    const out = { atoms: A.map((p) => [p.x, p.y]), subs: [] };
    const L = o.subLen || 0.72;
    const items = [];
    G.subs.forEach((S, k) => {
      const sd = subs.find((x) => x.at === k) || {};
      ["up", "down"].forEach((key) => {
        const lab = sd[key] == null ? "H" : sd[key];
        const v = S[key], p0 = G.atoms[k];
        const tip = proj([p0[0] + v[0] * L, p0[1] + v[1] * L, p0[2] + v[2] * L]);
        const lp = proj([p0[0] + v[0] * (L + 0.3), p0[1] + v[1] * (L + 0.3), p0[2] + v[2] * (L + 0.3)]);
        const axial = key === "up" ? S.upAxial : !S.upAxial;
        out.subs[k] = out.subs[k] || { at: k };
        out.subs[k][key] = { x: lp.x, y: lp.y, axial, tip: [tip.x, tip.y], label: lab };
        if (o.hideH && (lab === "H" || lab === "")) return;
        items.push({ k, key, lab, tip, lp, axial, d: (A[k].d + tip.d) / 2 });
      });
    });
    // 뒤쪽 결합 먼저
    const ringBonds = [0, 1, 2, 3, 4, 5].map((k) => ({ a: k, b: (k + 1) % 6, d: (A[k].d + A[(k + 1) % 6].d) / 2 }));
    const hl = new Set(o.highlight || []);
    const all = ringBonds.map((r) => ({ type: "ring", ...r })).concat(items.map((s) => ({ type: "sub", ...s })));
    all.sort((p, q) => q.d - p.d);
    all.forEach((it) => {
      if (it.type === "ring") {
        const p = A[it.a], q = A[it.b];
        const front = it.d < 0;
        P.line(p.x, p.y, q.x, q.y, { color: o.ringColor || "var(--text)", width: front ? lw * 1.35 : lw, alpha: front ? 1 : 0.85 });
      } else {
        const p = A[it.k];
        const col = it.axial ? (o.axColor || "var(--accent)") : (o.eqColor || "var(--accent-2)");
        const c = o.colorSubs === false ? "var(--text)" : col;
        if (hl.has(it.k) && it.lab !== "H") P.line(p.x, p.y, it.tip.x, it.tip.y, { color: "var(--org-hl)", width: lw * 5 });
        P.line(p.x, p.y, it.tip.x, it.tip.y, { color: c, width: lw * 0.9, alpha: it.lab === "H" ? 0.75 : 1 });
        textLabel(P, it.lab, it.lp.x, it.lp.y, it.lab === "H" ? fs * 0.85 : fs, it.lab === "H" ? "var(--text-dim)" : subColor(it.lab), { halo: true });
      }
    });
    if (o.numbers) A.forEach((p, k) => { const t = Array.isArray(o.numbers) ? o.numbers[k] : String(k + 1); if (t) P.text(t, p.x + (G.atoms[k][0] > 0 ? 10 : -10), p.y + 12, { size: fs * 0.72, color: "var(--text-dim)", halo: true }); });
    return out;
  };
  /**
   * 피셔 투영. Org.fischer(ctx, cx, cy, s, { top:'CHO', bottom:'CH2OH', rows:[['H','OH'], …] (위→아래 각 입체 중심의 [왼쪽, 오른쪽]), cross:true })
   */
  Org.fischer = function (ctx, cx, cy, s, o = {}) {
    const P = ctx.line ? ctx : canvasPen(ctx);
    const rows = o.rows || [["H", "OH"]], n = rows.length;
    const fs = o.fs || Math.max(11, s * 0.36), lw = o.width || 1.7;
    const y0 = cy - (n - 1) * s / 2;
    const out = { centers: [], left: [], right: [] };
    P.line(cx, y0 - s * 0.75, cx, y0 + (n - 1) * s + s * 0.75, { width: lw });
    rows.forEach(([l, r], k) => {
      const y = y0 + k * s;
      P.line(cx - s * 0.75, y, cx + s * 0.75, y, { width: lw });
      textLabel(P, l, cx - s * 0.78, y, fs, subColor(l), { align: "right", halo: true });
      textLabel(P, r, cx + s * 0.78, y, fs, subColor(r), { align: "left", halo: true });
      out.centers.push([cx, y]); out.left.push([cx - s * 1.1, y]); out.right.push([cx + s * 1.1, y]);
    });
    if (o.top) textLabel(P, o.top, cx, y0 - s * 0.75 - fs * 0.75, fs, subColor(o.top), { halo: true });
    if (o.bottom) textLabel(P, o.bottom, cx, y0 + (n - 1) * s + s * 0.75 + fs * 0.75, fs, subColor(o.bottom), { halo: true });
    return out;
  };

  /* ------------------------------------------------------------------ 3D 좌표 */
  const RCOV = { H: 0.31, B: 0.84, C: 0.76, N: 0.71, O: 0.66, F: 0.57, Si: 1.11, P: 1.07, S: 1.05, Cl: 1.02, Br: 1.20, I: 1.39, Li: 1.28, Na: 1.66, K: 2.03, Mg: 1.41, Al: 1.21, Ti: 1.60, Zr: 1.75, Hf: 1.75, Ta: 1.70, W: 1.62, Cu: 1.32, Zn: 1.22, Ga: 1.22, Ge: 1.20, As: 1.19, Se: 1.20, Sn: 1.39, Pd: 1.39, Pt: 1.36 };
  const BL = { "C-C1": 1.53, "C-C2": 1.34, "C-C3": 1.20, "C-C1.5": 1.39, "C-H1": 1.09, "C-N1": 1.47, "C-N2": 1.28, "C-N3": 1.16, "C-N1.5": 1.34, "C-O1": 1.43, "C-O2": 1.21, "C-O1.5": 1.36, "H-O1": 0.96, "H-N1": 1.01, "H-S1": 1.34, "C-S1": 1.82, "C-S2": 1.60, "C-Cl1": 1.77, "C-Br1": 1.94, "C-I1": 2.14, "C-F1": 1.35, "C-Si1": 1.87, "O-Si1": 1.64, "H-Si1": 1.48, "N-Si1": 1.74, "N-O1": 1.40, "N-O2": 1.22, "O-S2": 1.45, "O-S1": 1.57, "O-P2": 1.48, "O-P1": 1.60, "N-N1": 1.45, "N-N2": 1.25, "O-O1": 1.48, "H-H1": 0.74, "B-H1": 1.19, "B-C1": 1.56, "B-O1": 1.37, "Al-C1": 1.96, "C-Li1": 2.0, "C-Mg1": 2.1, "Br-Mg1": 2.5 };
  function bondLen(e1, e2, order) {
    const k = [e1, e2].sort().join("-");
    const o = order === 1.5 ? "1.5" : String(Math.round(order) || 1);
    if (BL[k + o]) return BL[k + o];
    const r = (RCOV[e1] || 0.8) + (RCOV[e2] || 0.8);
    return r - (order >= 3 ? 0.3 : order >= 2 ? 0.2 : order > 1 ? 0.1 : 0);
  }
  /**
   * 3D 좌표 생성(수소 포함). 거리 기하 방식: 결합·1-3 거리, 이중 결합 1-4 거리, 키랄 부피, 반발을 맞춘다.
   *   Org.embed("C[C@H](O)CC") → { atoms:[{el,x,y,z,src(원래 원자 번호, H는 -1), parent}], bonds:[[i,j,order]], m }
   */
  Org.embed = function (mol, o = {}) {
    const m = typeof mol === "string" ? Org.parse(mol) : mol;
    if (!m.xy) Org.layout(m);
    const A = m.atoms.map((a, i) => ({ el: a.el === "*" ? "C" : a.el, src: i, parent: -1 }));
    const B = m.bonds.map((b) => [b.a, b.b, b.partial ? 0.5 : b.order]);
    if (o.hydrogens !== false) m.atoms.forEach((a, i) => { for (let k = 0; k < a.h; k++) { A.push({ el: "H", src: -1, parent: i }); B.push([i, A.length - 1, 1]); } });
    const n = A.length;
    const nb = A.map(() => []);
    B.forEach(([i, j, ord]) => { nb[i].push([j, ord]); nb[j].push([i, ord]); });
    // 혼성
    const hyb = A.map((a, i) => {
      const ords = nb[i].map((x) => x[1]);
      if (ords.filter((x) => x >= 3).length || ords.filter((x) => x === 2).length >= 2) return 1;
      if (ords.some((x) => x === 2 || x === 1.5)) return 2;
      if (a.src >= 0) { const at = m.atoms[a.src]; if (at.el === "C" && at.charge === 1 && nb[i].length === 3) return 2; if (at.el === "C" && Org.electrons(m, a.src).rad && nb[i].length === 3) return 2; if (at.el === "B" && nb[i].length === 3) return 2; }
      if (a.el === "N" && a.src >= 0 && nb[i].some(([j]) => A[j].el === "C" && nb[j].some(([k, ok]) => ok === 2 && (A[k].el === "O" || A[k].el === "S")))) return 2; // 아마이드 N
      return 3;
    });
    const ideal = (i) => (hyb[i] === 1 ? 180 : hyb[i] === 2 ? 120 : 109.47) * D2R;
    // 거리 제약
    const C = []; // [i,j,d,w]
    const isB = new Set();
    B.forEach(([i, j, ord]) => { C.push([i, j, bondLen(A[i].el, A[j].el, ord), 12]); isB.add(i * n + j); isB.add(j * n + i); });
    const ringSize = (i, j) => { // 가장 작은 고리 크기(같은 고리일 때)
      if (A[i].src < 0 || A[j].src < 0) return 0;
      const ri = m.atoms[A[i].src].rings, rj = m.atoms[A[j].src].rings;
      let best = 0; ri.forEach((r) => { if (rj.includes(r)) { const L = m.rings[r].length; if (!best || L < best) best = L; } });
      return best;
    };
    const is13 = new Set();
    for (let c = 0; c < n; c++) {
      const L = nb[c];
      for (let p = 0; p < L.length; p++) for (let q = p + 1; q < L.length; q++) {
        const i = L[p][0], j = L[q][0];
        let th = ideal(c);
        const rs = ringSize(i, c) && ringSize(c, j) ? Math.min(ringSize(i, c), ringSize(c, j)) : 0;
        if (rs === 3) continue;
        if (rs === 4) th = 88 * D2R;
        if (rs === 5) th = Math.min(th, 105 * D2R);
        const a = bondLen(A[i].el, A[c].el, L[p][1]), b = bondLen(A[j].el, A[c].el, L[q][1]);
        C.push([i, j, Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(th)), rs && rs < 5 ? 2 : 6]);
        is13.add(i * n + j); is13.add(j * n + i);
      }
    }
    // 이중 결합 평면(1-4): 2D 그림의 같은 쪽/반대쪽을 따른다
    B.forEach(([x, y, ord]) => {
      if (ord !== 2 && ord !== 1.5) return;
      const sx = nb[x].filter(([k]) => k !== y), sy = nb[y].filter(([k]) => k !== x);
      if (!sx.length || !sy.length) return;
      const p2 = (k) => (A[k].src >= 0 ? m.xy[A[k].src] : null);
      sx.forEach(([a]) => sy.forEach(([b]) => {
        const pa = p2(a), pb = p2(b), PX = m.xy[A[x].src], PY = m.xy[A[y].src];
        let cis;
        if (pa && pb) { const side = (p) => Math.sign((PY[0] - PX[0]) * (p[1] - PX[1]) - (PY[1] - PX[1]) * (p[0] - PX[0])); cis = side(pa) === side(pb); }
        else {
          // 수소: 다른 치환체의 반대편
          const oa = pa ? a : sx.find(([k]) => k !== a && A[k].src >= 0), ob = pb ? b : sy.find(([k]) => k !== b && A[k].src >= 0);
          if (!oa && !ob) cis = sx.indexOf(sx.find(([k]) => k === a)) === sy.indexOf(sy.find(([k]) => k === b));
          else {
            const side = (p) => Math.sign((PY[0] - PX[0]) * (p[1] - PX[1]) - (PY[1] - PX[1]) * (p[0] - PX[0]));
            const sa = pa ? side(pa) : oa ? -side(m.xy[A[oa[0] != null ? oa[0] : oa].src]) : 1;
            const sb = pb ? side(pb) : ob ? -side(m.xy[A[ob[0] != null ? ob[0] : ob].src]) : 1;
            cis = sa === sb;
          }
        }
        const dxa = bondLen(A[a].el, A[x].el, 1), dxy = bondLen(A[x].el, A[y].el, ord), dyb = bondLen(A[b].el, A[y].el, 1);
        // 평면, 120°: 좌표로 계산
        const ax = -dxa * Math.cos(Math.PI / 3), ay = dxa * Math.sin(Math.PI / 3);
        const bx = dxy + dyb * Math.cos(Math.PI / 3), by = (cis ? 1 : -1) * dyb * Math.sin(Math.PI / 3);
        C.push([a, b, hyp(bx - ax, by - ay), 3]);
      }));
    });
    // 초기 좌표
    const X = new Array(n);
    const sc = 1.5;
    m.atoms.forEach((a, i) => { X[i] = [m.xy[i][0] * sc, -m.xy[i][1] * sc, 0]; });
    m.bonds.forEach((b) => { if (b.wedge) { const t = b.wedgeFrom === b.a ? b.b : b.a; X[t][2] += b.wedge * 0.9; } });
    m.rings.forEach((r) => { if (r.length === 6 && r.every((v) => !m.atoms[v].arom && m.adj[v].every((e) => e.b.order === 1 || !e.b.ring))) r.forEach((v, k) => (X[v][2] += (k % 2 ? -0.25 : 0.25))); });
    let seed = 12345; const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff - 0.5; };
    X.forEach((p) => { if (p) { p[0] += rnd() * 0.05; p[1] += rnd() * 0.05; p[2] += rnd() * 0.12; } });
    for (let i = m.atoms.length; i < n; i++) {
      const pr = A[i].parent, pp = X[pr];
      let dx = 0, dy = 0, dz = 0;
      nb[pr].forEach(([j]) => { if (j < m.atoms.length && X[j]) { dx += pp[0] - X[j][0]; dy += pp[1] - X[j][1]; dz += pp[2] - X[j][2]; } });
      const k = i - m.atoms.length;
      const L = hyp(dx, dy, dz) || 1;
      X[i] = [pp[0] + dx / L + rnd() * 0.6, pp[1] + dy / L + rnd() * 0.6, pp[2] + dz / L + (k % 2 ? 0.7 : -0.7) + rnd() * 0.3];
    }
    // 키랄 부피 목표
    const chir = [];
    m.atoms.forEach((a, i) => {
      if (!a.chiral) return;
      const order = chiralNbOrder(m, i).map((x) => (x === "H" ? nb[i].map(([j]) => j).find((j) => A[j].el === "H" && A[j].parent === i) : x));
      if (order.length !== 4 || order.some((x) => x == null)) return;
      chir.push({ c: i, o: order, sign: a.chiral === "@" ? -1 : 1 });
    });
    // 최소화
    const F = X.map(() => [0, 0, 0]);
    const repel = (i, j) => { const h1 = A[i].el === "H", h2 = A[j].el === "H"; return h1 && h2 ? 2.25 : h1 || h2 ? 2.55 : 2.95; };
    let step = 0.02;
    const iters = o.iters || 900;
    for (let it = 0; it < iters; it++) {
      F.forEach((f) => { f[0] = f[1] = f[2] = 0; });
      C.forEach(([i, j, d, w]) => {
        const dx = X[j][0] - X[i][0], dy = X[j][1] - X[i][1], dz = X[j][2] - X[i][2], r = hyp(dx, dy, dz) || 1e-6;
        const g = w * (r - d) / r;
        F[i][0] += g * dx; F[i][1] += g * dy; F[i][2] += g * dz; F[j][0] -= g * dx; F[j][1] -= g * dy; F[j][2] -= g * dz;
      });
      if (it > 60) for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
        if (isB.has(i * n + j) || is13.has(i * n + j)) continue;
        const dx = X[j][0] - X[i][0], dy = X[j][1] - X[i][1], dz = X[j][2] - X[i][2], r2 = dx * dx + dy * dy + dz * dz, rm = repel(i, j);
        if (r2 > rm * rm) continue;
        const r = Math.sqrt(r2) || 1e-6, g = -1.2 * (rm - r) / r;
        F[i][0] += g * dx; F[i][1] += g * dy; F[i][2] += g * dz; F[j][0] -= g * dx; F[j][1] -= g * dy; F[j][2] -= g * dz;
      }
      chir.forEach(({ c, o, sign }) => {
        const p = o.map((k) => X[k]);
        const a = sub3(p[1], p[0]), b = sub3(p[2], p[0]), cc = sub3(p[3], p[0]);
        const V = det3(a, b, cc);
        const target = 2.0;
        if (V * sign > -target * 0) { /* 원하는 부호: '@'는 음수 */ }
        const want = -sign; // '@'(sign −1) → V>0? 정의: '@' ⇔ det<0
        void want;
        const err = (sign === -1 ? Math.min(0, -V - target) : Math.min(0, V - target));
        if (!err) return;
        // dV/dp: 기울기(교차곱)
        const g1 = [b[1] * cc[2] - b[2] * cc[1], b[2] * cc[0] - b[0] * cc[2], b[0] * cc[1] - b[1] * cc[0]];
        const g2 = [cc[1] * a[2] - cc[2] * a[1], cc[2] * a[0] - cc[0] * a[2], cc[0] * a[1] - cc[1] * a[0]];
        const g3 = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
        const k = 2.5 * err * (sign === -1 ? -1 : 1);
        [[o[1], g1], [o[2], g2], [o[3], g3]].forEach(([idx, g]) => { F[idx][0] -= k * g[0]; F[idx][1] -= k * g[1]; F[idx][2] -= k * g[2]; F[o[0]][0] += k * g[0]; F[o[0]][1] += k * g[1]; F[o[0]][2] += k * g[2]; });
        void c;
      });
      let fmax = 0;
      F.forEach((f) => { fmax = Math.max(fmax, Math.abs(f[0]), Math.abs(f[1]), Math.abs(f[2])); });
      const lim = 0.15;
      const sc2 = fmax * step > lim ? lim / (fmax * step) : 1;
      X.forEach((p, i) => { p[0] += F[i][0] * step * sc2; p[1] += F[i][1] * step * sc2; p[2] += F[i][2] * step * sc2; });
      if (it === 300) step = 0.015;
    }
    // 가운데로
    const c0 = [0, 0, 0]; X.forEach((p) => { c0[0] += p[0] / n; c0[1] += p[1] / n; c0[2] += p[2] / n; });
    return { atoms: A.map((a, i) => ({ el: a.el, x: X[i][0] - c0[0], y: X[i][1] - c0[1], z: X[i][2] - c0[2], src: a.src, parent: a.parent })), bonds: B, m };
  };
  /** Chem.molecule 사양으로 */
  Org.spec3d = function (emb, o = {}) {
    return { atoms: emb.atoms.map((a) => [a.el, a.x, a.y, a.z]), bonds: emb.bonds.map(([i, j, ord]) => [i, j, ord === 1.5 ? 1 : Math.round(ord) || 1]), labels: o.labels || false, autoRotate: o.autoRotate, style: o.style };
  };
  /** three.js 3D 뷰어(chem.js·three.js 필요): Org.mol3d(el, "CCO", {style:'ball'|'space', autoRotate}) → {set(smiles), mol} */
  Org.mol3d = function (el, smiles, o = {}) {
    if (!window.Chem || !Chem.molecule) { console.warn("Org.mol3d: chem.js가 필요합니다"); return null; }
    let emb = Org.embed(smiles);
    const mol = Chem.molecule(el, Org.spec3d(emb, o), o);
    return { mol, get emb() { return emb; }, set(s, oo = {}) { emb = Org.embed(s); mol && mol.set(Org.spec3d(emb, Object.assign({}, o, oo))); } };
  };
  /* 캔버스 3D(공-막대). 색은 CPK 관례 */
  const CPK = { H: "#f4f4f4", C: "#7d8590", N: "#3a63e8", O: "#e8402e", F: "#7fd34e", Cl: "#2fc54a", Br: "#a3412f", I: "#8b2fa8", S: "#e8c62e", P: "#f08a24", Si: "#d9b48f", B: "#f2a7a7", Li: "#b04fe0", Na: "#9a5cf0", Mg: "#5ec25e", Al: "#bfa6a6", Ti: "#a8acb3", Zr: "#8fc7c7", Hf: "#5fb0ff", Cu: "#c88033", Ga: "#c28f8f", Ge: "#668f8f", Sn: "#668080", W: "#3f86c7", Pt: "#d0d0e0", Pd: "#0e8585" };
  Org.cpk = (el) => CPK[el] || "#d070d0";
  const VDW = { H: 1.1, C: 1.7, N: 1.55, O: 1.52, F: 1.47, Cl: 1.75, Br: 1.85, I: 1.98, S: 1.8, P: 1.8, Si: 2.1, B: 1.92 };
  function rotPt(p, rx, ry) {
    const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
    const x1 = p[0] * cy + p[2] * sy, z1 = -p[0] * sy + p[2] * cy;
    const y2 = p[1] * cx - z1 * sx, z2 = p[1] * sx + z1 * cx;
    return [x1, y2, z2];
  }
  Org.rot3 = rotPt;
  /**
   * 캔버스에 3D 분자: Org.draw3d(ctx, emb, { cx, cy, scale(px/Å), rot:[rx,ry], style:'ball'|'stick'|'space'|'wire', hideH, labels:true|[i], highlight:[i], color:(i,a)=>css, persp:0.06 })
   *   → { pos:[[x,y,depth]…] }
   */
  Org.draw3d = function (ctx, emb, o = {}) {
    const rx = (o.rot && o.rot[0]) || 0, ry = (o.rot && o.rot[1]) || 0, s = o.scale || 40, cx = o.cx || 0, cy = o.cy || 0;
    const style = o.style || "ball", persp = o.persp == null ? 0.05 : o.persp;
    const P = emb.atoms.map((a) => { const r = rotPt([a.x, a.y, a.z], rx, ry); const f = 1 / (1 - r[2] * persp); return [cx + r[0] * s * f, cy - r[1] * s * f, r[2], f]; });
    const hide = (i) => o.hideH && emb.atoms[i].el === "H";
    const rad = (i) => { if (o.radius) { const r = o.radius(i, emb.atoms[i]); if (r != null) return r * s * P[i][3]; } const e = emb.atoms[i].el; const v = VDW[e] || 1.8; return (style === "space" ? v : style === "stick" ? 0.16 : style === "wire" ? 0 : 0.2 + 0.18 * v) * s * P[i][3]; };
    const hl = new Set(o.highlight || []);
    const items = [];
    emb.bonds.forEach(([i, j, ord]) => { if (hide(i) || hide(j) || style === "space") return; items.push({ t: "b", i, j, ord, z: (P[i][2] + P[j][2]) / 2 }); });
    emb.atoms.forEach((a, i) => { if (!hide(i)) items.push({ t: "a", i, z: P[i][2] }); });
    items.sort((p, q) => p.z - q.z);
    const dark = window.SB && SB.isDark && SB.isDark();
    const outline = dark ? "rgba(0,0,0,.55)" : "rgba(0,0,0,.45)";
    items.forEach((it) => {
      if (it.t === "b") {
        const [x1, y1] = P[it.i], [x2, y2] = P[it.j];
        const w = (style === "stick" ? 0.32 : style === "wire" ? 0.08 : 0.15) * s * (P[it.i][3] + P[it.j][3]) / 2;
        const shade = 0.55 + 0.45 * SB_clamp((it.z + 3) / 6, 0, 1);
        const col = `rgba(${Math.round(150 * shade)},${Math.round(156 * shade)},${Math.round(168 * shade)},1)`;
        const dx = x2 - x1, dy = y2 - y1, L = hyp(dx, dy) || 1, nx = -dy / L, ny = dx / L;
        const offs = it.ord >= 2.5 && style !== "stick" ? [-1, 0, 1] : it.ord >= 1.5 && style !== "stick" ? [-0.7, 0.7] : [0];
        const sep = w * 1.15;
        ctx.save(); ctx.lineCap = "round";
        if (it.ord === 0.5) ctx.setLineDash([w * 0.9, w * 0.9]);
        offs.forEach((k) => {
          ctx.strokeStyle = outline; ctx.lineWidth = (offs.length > 1 ? w * 0.75 : w) + 1.6;
          ctx.beginPath(); ctx.moveTo(x1 + nx * sep * k, y1 + ny * sep * k); ctx.lineTo(x2 + nx * sep * k, y2 + ny * sep * k); ctx.stroke();
          if (style === "stick" || style === "wire") {
            [[x1, y1, it.i, x1 + dx / 2, y1 + dy / 2], [x1 + dx / 2, y1 + dy / 2, it.j, x2, y2]].forEach(([ax, ay, ii, bx, by]) => { ctx.strokeStyle = o.color ? o.color(ii, emb.atoms[ii]) : CPK[emb.atoms[ii].el] || "#ccc"; ctx.lineWidth = offs.length > 1 ? w * 0.75 : w; ctx.beginPath(); ctx.moveTo(ax + nx * sep * k, ay + ny * sep * k); ctx.lineTo(bx + nx * sep * k, by + ny * sep * k); ctx.stroke(); });
          } else { ctx.strokeStyle = col; ctx.lineWidth = offs.length > 1 ? w * 0.75 : w; ctx.beginPath(); ctx.moveTo(x1 + nx * sep * k, y1 + ny * sep * k); ctx.lineTo(x2 + nx * sep * k, y2 + ny * sep * k); ctx.stroke(); }
        });
        ctx.restore();
      } else {
        const r = rad(it.i); if (r <= 0) return;
        const [x, y] = P[it.i];
        const base = o.color ? o.color(it.i, emb.atoms[it.i]) : CPK[emb.atoms[it.i].el] || "#d070d0";
        ctx.save();
        const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.1, x, y, r);
        g.addColorStop(0, "#ffffff"); g.addColorStop(0.25, base); g.addColorStop(1, shadeHex(base, 0.55));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
        ctx.strokeStyle = outline; ctx.lineWidth = 1; ctx.stroke();
        if (hl.has(it.i)) { ctx.strokeStyle = SB.color("accent"); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, r + 3, 0, TAU); ctx.stroke(); }
        ctx.restore();
        if (o.labels && (o.labels === true ? emb.atoms[it.i].el !== "C" && emb.atoms[it.i].el !== "H" : o.labels.includes(it.i))) SB.label(ctx, o.labelText && o.labelText[it.i] != null ? o.labelText[it.i] : emb.atoms[it.i].el, x, y, { size: o.labelSize || 11, bold: true, color: "#111", bg: "rgba(255,255,255,.7)" });
      }
    });
    return { pos: P };
  };
  function shadeHex(hex, f) {
    const m = /^#?([0-9a-f]{6})$/i.exec(hex); if (!m) return hex;
    const v = parseInt(m[1], 16), r = (v >> 16) & 255, g = (v >> 8) & 255, b = v & 255;
    return `rgb(${Math.round(r * f)},${Math.round(g * f)},${Math.round(b * f)})`;
  }
  /**
   * 끌어 돌리는 3D 분자 캔버스: Org.view3d("cv-id", "CCO", { style, hideH, spin:true, aspect, labels, onDraw(ctx,w,h,info) })
   *   → { set(smiles|emb), state:{rot}, redraw(), emb }
   */
  Org.view3d = function (id, mol, o = {}) {
    let emb = mol && mol.atoms && mol.bonds && mol.atoms[0] && "x" in mol.atoms[0] ? mol : Org.embed(mol, o.embed || {});
    const state = { rot: o.rot ? o.rot.slice() : [-0.35, 0.6], spin: o.spin !== false, scale: 1 };
    const R0 = () => Math.max(1.5, ...emb.atoms.map((a) => hyp(a.x, a.y, a.z) + (o.style === "space" ? 1.6 : 0.6)));
    let info = null;
    const cv = SB.canvas(id, (ctx, w, h) => {
      const s = Math.min(w, h) / (2.25 * R0()) * state.scale;
      info = Org.draw3d(ctx, emb, Object.assign({}, o, { cx: w / 2, cy: h / 2, scale: s, rot: state.rot }));
      if (o.onDraw) o.onDraw(ctx, w, h, info, emb);
    }, { aspect: o.aspect || 0.6, minHeight: o.minHeight || 220, maxHeight: o.maxHeight || 380 });
    let last = null;
    SB.drag(cv, { free: true, handles: () => [], down: (id_, x, y) => { last = [x, y]; state.spin = false; }, move: (id_, x, y) => { if (!last) return; state.rot[1] += (x - last[0]) * 0.012; state.rot[0] += (y - last[1]) * 0.012; last = [x, y]; }, up: () => { last = null; } });
    if (o.spin !== false) SB.loop(cv.canvas, (dt) => { if (state.spin) { state.rot[1] += dt * 0.5; cv.redraw(); } });
    return { cv, state, redraw: () => cv.redraw(), get emb() { return emb; }, get info() { return info; }, set(x, oo) { emb = x && x.atoms && x.atoms[0] && "x" in x.atoms[0] ? x : Org.embed(x, oo || o.embed || {}); cv.redraw(); } };
  };
  /** 3D 이면각(도): 원자 번호 a-b-c-d (emb 좌표) */
  Org.dihedral = function (emb, a, b, c, d) {
    const P = (i) => [emb.atoms[i].x, emb.atoms[i].y, emb.atoms[i].z];
    const b0 = sub3(P(a), P(b)), b1 = sub3(P(c), P(b)), b2 = sub3(P(d), P(c));
    const L = hyp(...b1), u = b1.map((x) => x / L);
    const v = b0.map((x, k) => x - (b0[0] * u[0] + b0[1] * u[1] + b0[2] * u[2]) * u[k]);
    const w = b2.map((x, k) => x - (b2[0] * u[0] + b2[1] * u[1] + b2[2] * u[2]) * u[k]);
    const xx = v[0] * w[0] + v[1] * w[1] + v[2] * w[2];
    const cr = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const yy = cr[0] * w[0] + cr[1] * w[1] + cr[2] * w[2];
    return Math.atan2(yy, xx) / D2R;
  };

  /* ================================================================== 작용기 */
  const isC = (m, i) => m.atoms[i].el === "C";
  const dblTo = (m, i, el) => m.adj[i].find((e) => Math.round(e.b.order) === 2 && !e.b.arom && m.atoms[e.n].el === el);
  const isCarbonylC = (m, i) => isC(m, i) && !!dblTo(m, i, "O");
  const isAromAt = (m, i) => m.atoms[i].arom || m.adj[i].some((e) => e.b.arom);
  const inDouble = (m, i) => m.adj[i].some((e) => Math.round(e.b.order) === 2 && !e.b.arom && isC(m, e.n) && isC(m, i));
  const inTriple = (m, i) => m.adj[i].some((e) => e.b.order === 3);
  const hOn = (m, i) => m.atoms[i].h + m.adj[i].filter((e) => m.atoms[e.n].el === "H").length;
  const isSp3C = (m, i) => isC(m, i) && m.adj[i].every((e) => e.b.order === 1 && !e.b.arom) && !(m.atoms[i].charge);
  const GROUP_KO = {
    alkene: "알켄", alkyne: "알카인", arene: "방향족 고리", heteroarene: "헤테로 방향족 고리", alkylhalide: "할로젠화 알킬", arylhalide: "할로젠화 아릴", vinylhalide: "할로젠화 바이닐",
    alcohol: "알코올", phenol: "페놀", enol: "엔올", ether: "에터", epoxide: "에폭사이드", peroxide: "과산화물", thiol: "싸이올", sulfide: "설파이드",
    aldehyde: "알데하이드", ketone: "케톤", acid: "카복실산", carboxylate: "카복실산 음이온", ester: "에스터", lactone: "락톤", amide: "아마이드", lactam: "락탐", imide: "이미드",
    acidhalide: "산 할로젠화물", anhydride: "산 무수물", carbonate: "카보네이트", carbamate: "카바메이트", urea: "요소", nitrile: "나이트릴", isocyanate: "아이소사이아네이트",
    amine1: "1차 아민", amine2: "2차 아민", amine3: "3차 아민", ammonium: "암모늄 이온", aniline: "방향족 아민", nitro: "나이트로", imine: "이민", acetal: "아세탈", hemiacetal: "헤미아세탈",
    siloxane: "실록산", silanol: "실란올", alkoxysilane: "알콕시실레인", silane: "Si–H 실레인", chlorosilane: "클로로실레인", silylamine: "실릴아민", sulfonicacid: "설폰산", sulfonate: "설포네이트 에스터",
    sulfone: "설폰", sulfoxide: "설폭사이드", sulfonamide: "설폰아마이드", sulfonium: "설포늄", phosphate: "인산 에스터", diazo: "다이아조", azide: "아자이드",
  };
  /** 작용기 목록: [{key, ko, atoms:[…], conj, ring}] */
  Org.groups = function (mol) {
    const m = Org.parse(mol);
    const out = [];
    const add = (key, atoms, extra) => out.push(Object.assign({ key, ko: GROUP_KO[key] || key, atoms }, extra || {}));
    const ringSizeOf = (i) => (m.atoms[i].rings.length ? Math.min(...m.atoms[i].rings.map((r) => m.rings[r].length)) : 0);
    const conjTo = (i, except) => m.adj[i].some((e) => e.n !== except && (isAromAt(m, e.n) || inDouble(m, e.n) || inTriple(m, e.n)) && isC(m, e.n));
    m.atoms.forEach((a, i) => {
      if (a.el === "C") {
        const dO = dblTo(m, i, "O");
        if (dO) {
          const others = m.adj[i].filter((e) => e.n !== dO.n);
          const sO = others.filter((e) => m.atoms[e.n].el === "O" && e.b.order === 1);
          const sN = others.filter((e) => m.atoms[e.n].el === "N");
          const sX = others.filter((e) => ["Cl", "Br", "F", "I"].includes(m.atoms[e.n].el));
          const conj = others.some((e) => isC(m, e.n) && (isAromAt(m, e.n) || inDouble(m, e.n) || inTriple(m, e.n)));
          const ring = m.bonds[dO.b.i].ring ? 0 : ringSizeOf(i);
          const base = { conj, ring, C: i, O: dO.n };
          if (sO.length >= 2 && !sN.length) add("carbonate", [i, dO.n, ...sO.map((e) => e.n)], base);
          else if (sO.length && sN.length) add("carbamate", [i, dO.n, sO[0].n, sN[0].n], base);
          else if (sN.length >= 2) add("urea", [i, dO.n, ...sN.map((e) => e.n)], base);
          else if (sO.length) {
            const o = sO[0].n, oa = m.atoms[o];
            if (hOn(m, o) > 0) add("acid", [i, dO.n, o], base);
            else if (oa.charge === -1) add("carboxylate", [i, dO.n, o], base);
            else if (m.adj[o].some((e) => e.n !== i && isCarbonylC(m, e.n))) { if (!out.some((g) => g.key === "anhydride" && g.atoms.includes(o))) add("anhydride", [i, dO.n, o], base); }
            else add(m.bonds[sO[0].b.i].ring ? "lactone" : "ester", [i, dO.n, o], base);
          } else if (sN.length) {
            const nN = sN[0].n;
            const carbonyls = m.adj[nN].filter((e) => isCarbonylC(m, e.n)).length;
            add(carbonyls >= 2 ? "imide" : m.bonds[sN[0].b.i].ring ? "lactam" : "amide", [i, dO.n, nN], Object.assign({ nH: hOn(m, nN) }, base));
          } else if (sX.length) add("acidhalide", [i, dO.n, sX[0].n], base);
          else if (hOn(m, i) > 0) add("aldehyde", [i, dO.n], base);
          else add("ketone", [i, dO.n], base);
          return;
        }
        m.adj[i].forEach((e) => {
          if (e.n < i) return;
          if (e.b.order === 3 && m.atoms[e.n].el === "N") add("nitrile", [i, e.n], { conj: conjTo(i, e.n) });
          if (e.b.order === 3 && isC(m, e.n)) add("alkyne", [i, e.n], { terminal: hOn(m, i) > 0 || hOn(m, e.n) > 0 });
          if (Math.round(e.b.order) === 2 && !e.b.arom && isC(m, e.n)) add("alkene", [i, e.n], { terminal: hOn(m, i) === 2 || hOn(m, e.n) === 2, conj: conjTo(i, e.n) || conjTo(e.n, i) });
          if (Math.round(e.b.order) === 2 && m.atoms[e.n].el === "N" && !e.b.arom) { if (m.adj[e.n].some((f) => f.n !== i && m.atoms[f.n].el === "C" && Math.round(f.b.order) === 2)) return; add("imine", [i, e.n]); }
        });
        // 아세탈
        const sO = m.adj[i].filter((e) => m.atoms[e.n].el === "O" && e.b.order === 1);
        if (sO.length === 2 && isSp3C(m, i)) { const nOH = sO.filter((e) => hOn(m, e.n) > 0).length; if (nOH <= 1) add(nOH ? "hemiacetal" : "acetal", [i, ...sO.map((e) => e.n)]); }
      }
      if (a.el === "N" && a.charge === 1 && m.adj[i].filter((e) => m.atoms[e.n].el === "O").length >= 2) { add("nitro", [i, ...m.adj[i].filter((e) => m.atoms[e.n].el === "O").map((e) => e.n)]); return; }
      if (a.el === "N" && !a.arom) {
        if (m.adj[i].some((e) => isCarbonylC(m, e.n))) return;
        if (m.adj[i].some((e) => e.b.order >= 2)) { if (m.adj[i].filter((e) => e.b.order >= 2).length >= 2 || m.adj[i].some((e) => m.atoms[e.n].el === "N" && e.b.order >= 2)) add("azide", [i]); else if (m.adj[i].some((e) => isC(m, e.n) && dblTo(m, e.n, "O"))) add("isocyanate", [i]); return; }
        if (m.adj[i].some((e) => m.atoms[e.n].el === "S" && m.adj[e.n].filter((f) => Math.round(f.b.order) === 2 && m.atoms[f.n].el === "O").length >= 2)) return;
        if (m.adj[i].some((e) => m.atoms[e.n].el === "Si")) { add("silylamine", [i]); return; }
        if (a.charge === 1) { add("ammonium", [i]); return; }
        if (m.adj[i].some((e) => m.atoms[e.n].el === "O")) return;
        const nh = hOn(m, i);
        const ar = m.adj[i].some((e) => isAromAt(m, e.n));
        add(nh >= 2 ? "amine1" : nh === 1 ? "amine2" : "amine3", [i], { aryl: ar, nH: nh });
        if (ar) add("aniline", [i], { nH: nh });
      }
      if (a.el === "O" && m.adj[i].every((e) => e.b.order === 1)) {
        const nb = m.adj[i].map((e) => e.n);
        if (nb.some((j) => isCarbonylC(m, j))) return;
        if (nb.some((j) => m.atoms[j].el === "S" || m.atoms[j].el === "P" || m.atoms[j].el === "N")) return;
        if (nb.some((j) => m.atoms[j].el === "O")) { if (i < nb.find((j) => m.atoms[j].el === "O")) add("peroxide", [i]); return; }
        const si = nb.filter((j) => m.atoms[j].el === "Si");
        if (si.length === 2) { add("siloxane", [i, ...si]); return; }
        if (si.length === 1 && hOn(m, i) > 0) { add("silanol", [i, si[0]]); return; }
        if (si.length === 1) { add("alkoxysilane", [i, si[0]]); return; }
        if (hOn(m, i) > 0 && nb.length === 1) {
          const c = nb[0];
          if (isAromAt(m, c)) add("phenol", [i, c]);
          else if (inDouble(m, c)) add("enol", [i, c]);
          else if (isC(m, c)) add("alcohol", [i, c], { degree: m.adj[c].filter((e) => isC(m, e.n)).length });
          return;
        }
        if (nb.length === 2 && nb.every((j) => isC(m, j))) {
          if (out.some((g) => (g.key === "acetal" || g.key === "hemiacetal") && g.atoms.includes(i))) return;
          if (m.bonds.some((b) => b.ring && (b.a === i || b.b === i)) && m.atoms[i].rings.some((r) => m.rings[r].length === 3)) add("epoxide", [i, ...nb]);
          else add("ether", [i, ...nb], { aryl: nb.some((j) => isAromAt(m, j)), vinyl: nb.some((j) => inDouble(m, j)) });
        }
      }
      if (["F", "Cl", "Br", "I"].includes(a.el) && m.adj[i].length === 1) {
        const c = m.adj[i][0].n;
        if (isC(m, c) && !isCarbonylC(m, c)) add(isAromAt(m, c) ? "arylhalide" : inDouble(m, c) ? "vinylhalide" : "alkylhalide", [i, c], { X: a.el });
        if (m.atoms[c].el === "Si") add("chlorosilane", [i, c], { X: a.el });
      }
      if (a.el === "S") {
        const dO = m.adj[i].filter((e) => Math.round(e.b.order) === 2 && m.atoms[e.n].el === "O").length + m.adj[i].filter((e) => m.atoms[e.n].el === "O" && m.atoms[e.n].charge === -1 && e.b.order === 1).length * 0;
        const sOH = m.adj[i].filter((e) => e.b.order === 1 && m.atoms[e.n].el === "O");
        const sN = m.adj[i].filter((e) => m.atoms[e.n].el === "N");
        if (dO >= 2) {
          if (sN.length) add("sulfonamide", [i]);
          else if (sOH.some((e) => hOn(m, e.n) > 0 || m.atoms[e.n].charge === -1)) add("sulfonicacid", [i]);
          else if (sOH.length) add("sulfonate", [i]);
          else add("sulfone", [i]);
        } else if (dO === 1) add("sulfoxide", [i]);
        else if (a.charge === 1) add("sulfonium", [i]);
        else if (hOn(m, i) > 0) add("thiol", [i]);
        else if (m.adj[i].filter((e) => isC(m, e.n)).length === 2) add("sulfide", [i]);
      }
      if (a.el === "Si" && hOn(m, i) > 0) add("silane", [i], { nH: hOn(m, i) });
      if (a.el === "P" && m.adj[i].some((e) => Math.round(e.b.order) === 2 && m.atoms[e.n].el === "O")) add("phosphate", [i]);
    });
    // 방향족 고리
    m.rings.forEach((r) => {
      if (!r.every((v) => m.atoms[v].arom || m.adj[v].some((e) => e.b.kek || e.b.arom))) return;
      add(r.every((v) => isC(m, v)) ? "arene" : "heteroarene", r.slice(), { size: r.length });
    });
    return out;
  };
  Org.GROUP_KO = GROUP_KO;

  /* ================================================================== IR */
  /** 특성 흡수띠: [{nu(cm⁻¹), I(0–1), w(반치폭), label, group}] */
  Org.irBands = function (mol) {
    const m = Org.parse(mol), G = Org.groups(m), out = [];
    const b = (nu, I, w, label, group) => out.push({ nu, I, w, label, group });
    const has = (k) => G.filter((g) => g.key === k);
    const sp3CH = m.atoms.some((a, i) => isSp3C(m, i) && hOn(m, i) > 0);
    const ch3 = m.atoms.some((a, i) => isSp3C(m, i) && hOn(m, i) === 3);
    if (sp3CH) { b(2960, 0.6, 28, "C–H 신축 (sp³)", "alkane"); b(2875, 0.45, 24, "", "alkane"); b(1460, 0.35, 18, "CH₂ 굽힘", "alkane"); }
    if (ch3) b(1378, 0.3, 12, "CH₃ 굽힘", "alkane");
    has("alkene").forEach((g) => { b(3080, 0.3, 22, "=C–H 신축", "alkene"); b(g.conj ? 1625 : 1645, 0.35, 16, "C=C 신축", "alkene"); if (g.terminal) { b(990, 0.55, 12, "", "alkene"); b(910, 0.65, 12, "=CH₂ 면외 굽힘", "alkene"); } });
    has("alkyne").forEach((g) => { if (g.terminal) { b(3300, 0.75, 18, "≡C–H 신축", "alkyne"); b(2120, 0.35, 14, "C≡C 신축", "alkyne"); b(640, 0.55, 30, "", "alkyne"); } else b(2230, 0.1, 14, "C≡C (약함)", "alkyne"); });
    if (has("arene").length || has("heteroarene").length) { b(3040, 0.25, 26, "Ar C–H 신축", "arene"); b(1600, 0.35, 10, "고리 C=C", "arene"); b(1495, 0.45, 10, "고리 C=C", "arene"); b(750, 0.6, 16, "Ar C–H 면외 굽힘", "arene"); b(695, 0.55, 14, "", "arene"); }
    has("alcohol").forEach((g) => { b(3350, 0.85, 240, "O–H 신축 (수소 결합, 넓음)", "alcohol"); b(g.degree >= 3 ? 1150 : g.degree === 2 ? 1100 : 1050, 0.75, 40, "C–O 신축", "alcohol"); });
    has("phenol").forEach(() => { b(3350, 0.8, 240, "O–H 신축 (페놀)", "phenol"); b(1230, 0.7, 40, "C–O 신축", "phenol"); });
    has("acid").forEach((g) => { b(3000, 0.7, 520, "O–H 신축 (카복실산, 매우 넓음)", "acid"); b(g.conj ? 1690 : 1710, 0.95, 28, "C=O 신축", "acid"); b(1290, 0.6, 40, "C–O 신축", "acid"); b(930, 0.3, 60, "", "acid"); });
    has("carboxylate").forEach(() => { b(1580, 0.9, 40, "CO₂⁻ 비대칭 신축", "carboxylate"); b(1410, 0.6, 30, "CO₂⁻ 대칭 신축", "carboxylate"); });
    has("ester").concat(has("lactone")).forEach((g) => { b(g.ring === 5 ? 1770 : g.conj ? 1720 : 1740, 0.95, 24, g.key === "lactone" ? "C=O 신축 (락톤)" : "C=O 신축 (에스터)", g.key); b(1240, 0.85, 40, "C–O 신축", g.key); b(1050, 0.55, 30, "", g.key); });
    has("ketone").forEach((g) => { const nu = g.ring === 4 ? 1785 : g.ring === 5 ? 1745 : g.conj ? 1690 : 1715; b(nu, 0.95, 24, "C=O 신축 (케톤)", "ketone"); });
    has("aldehyde").forEach((g) => { b(g.conj ? 1700 : 1728, 0.95, 24, "C=O 신축 (알데하이드)", "aldehyde"); b(2820, 0.35, 14, "", "aldehyde"); b(2720, 0.35, 14, "C–H 신축 (알데하이드)", "aldehyde"); });
    has("amide").concat(has("lactam")).forEach((g) => { b(1665, 0.95, 32, "C=O 신축 (아마이드 I)", g.key); if (g.nH >= 2) { b(3350, 0.5, 60, "N–H 신축 (두 띠)", g.key); b(3180, 0.5, 60, "", g.key); b(1620, 0.5, 26, "N–H 굽힘", g.key); } else if (g.nH === 1) { b(3300, 0.55, 60, "N–H 신축", g.key); b(1545, 0.55, 26, "아마이드 II", g.key); } });
    has("imide").forEach(() => { b(1770, 0.6, 20, "C=O (이미드, 대칭)", "imide"); b(1710, 0.95, 26, "C=O (이미드)", "imide"); b(1380, 0.6, 30, "C–N", "imide"); });
    has("acidhalide").forEach((g) => b(g.conj ? 1775 : 1800, 0.95, 20, "C=O 신축 (산 염화물)", "acidhalide"));
    has("anhydride").forEach(() => { b(1820, 0.8, 18, "C=O 신축 (무수물, 두 띠)", "anhydride"); b(1760, 0.9, 18, "", "anhydride"); b(1040, 0.7, 40, "C–O", "anhydride"); });
    has("carbonate").forEach(() => { b(1750, 0.95, 24, "C=O (카보네이트)", "carbonate"); b(1260, 0.9, 40, "C–O", "carbonate"); });
    has("carbamate").forEach(() => { b(1700, 0.95, 26, "C=O (카바메이트)", "carbamate"); b(1250, 0.8, 40, "C–O", "carbamate"); });
    has("nitrile").forEach((g) => b(g.conj ? 2225 : 2250, 0.5, 14, "C≡N 신축", "nitrile"));
    has("isocyanate").forEach(() => b(2270, 1.0, 40, "N=C=O 신축", "isocyanate"));
    has("azide").forEach(() => b(2100, 0.9, 30, "N₃ 신축", "azide"));
    has("amine1").forEach(() => { b(3380, 0.35, 40, "N–H 신축 (두 띠)", "amine1"); b(3300, 0.32, 40, "", "amine1"); b(1610, 0.35, 30, "N–H 굽힘", "amine1"); b(1100, 0.3, 30, "C–N 신축", "amine1"); });
    has("amine2").forEach(() => { b(3320, 0.28, 40, "N–H 신축 (한 띠)", "amine2"); b(1130, 0.3, 30, "C–N 신축", "amine2"); });
    has("amine3").forEach(() => b(1150, 0.3, 30, "C–N 신축", "amine3"));
    has("ammonium").forEach(() => b(3000, 0.6, 300, "N⁺–H 신축 (넓음)", "ammonium"));
    has("nitro").forEach(() => { b(1550, 0.9, 30, "NO₂ 비대칭 신축", "nitro"); b(1360, 0.8, 30, "NO₂ 대칭 신축", "nitro"); });
    has("imine").forEach(() => b(1660, 0.5, 20, "C=N 신축", "imine"));
    has("ether").forEach((g) => { if (g.aryl) { b(1250, 0.85, 36, "C–O–C 비대칭 (아릴 에터)", "ether"); b(1040, 0.6, 30, "", "ether"); } else b(1115, 0.85, 40, "C–O–C 신축", "ether"); });
    has("acetal").forEach(() => { b(1140, 0.8, 30, "C–O (아세탈)", "acetal"); b(1060, 0.7, 30, "", "acetal"); });
    has("epoxide").forEach(() => { b(1255, 0.55, 20, "에폭사이드 고리", "epoxide"); b(845, 0.6, 20, "", "epoxide"); });
    has("thiol").forEach(() => b(2560, 0.25, 18, "S–H 신축 (약함)", "thiol"));
    ["sulfone", "sulfonate", "sulfonicacid", "sulfonamide"].forEach((k) => has(k).forEach(() => { b(1350, 0.85, 28, "S=O 비대칭 신축", k); b(1170, 0.85, 28, "S=O 대칭 신축", k); if (k === "sulfonicacid") b(3000, 0.5, 400, "O–H (설폰산)", k); }));
    has("sulfoxide").forEach(() => b(1050, 0.85, 26, "S=O 신축", "sulfoxide"));
    const X = Org.counts(m);
    if (X.F) b(1180, Math.min(1, 0.5 + 0.1 * X.F), 70, "C–F 신축", "CF");
    has("alkylhalide").concat(has("arylhalide"), has("vinylhalide")).forEach((g) => { if (g.X === "Cl") b(740, 0.6, 40, "C–Cl 신축", g.key); if (g.X === "Br") b(600, 0.55, 40, "C–Br 신축", g.key); if (g.X === "I") b(520, 0.5, 40, "C–I 신축", g.key); });
    if (has("siloxane").length || has("alkoxysilane").length) b(1070, 1.0, 70, "Si–O–Si / Si–O–C 신축", "siloxane");
    if (m.atoms.some((a, i) => a.el === "Si" && m.adj[i].some((e) => isC(m, e.n) && hOn(m, e.n) === 3))) { b(1260, 0.8, 10, "Si–CH₃ 굽힘", "SiMe"); b(840, 0.75, 30, "Si–C 신축", "SiMe"); }
    has("silanol").forEach(() => { b(3400, 0.55, 220, "Si–O–H 신축", "silanol"); b(900, 0.5, 30, "Si–OH", "silanol"); });
    has("silane").forEach(() => b(2150, 0.85, 24, "Si–H 신축", "silane"));
    has("silylamine").forEach(() => b(930, 0.7, 30, "Si–N", "silylamine"));
    has("phosphate").forEach(() => b(1260, 0.85, 30, "P=O 신축", "phosphate"));
    return out;
  };
  // 시드 난수
  Org.rng = function (seed) { let s = (seed >>> 0) || 1; return () => { s += 0x6d2b79f5; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
  const hashStr = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
  /** 투과율 %T(ν): 띠 목록 + (선택) 지문 영역 잡봉우리 */
  Org.irCurve = function (bands, o = {}) {
    const lo = o.range ? Math.min(...o.range) : 400, hi = o.range ? Math.max(...o.range) : 4000;
    const extra = [];
    if (o.fingerprint !== false) {
      const r = Org.rng(hashStr(o.seed || "x"));
      const k = 7 + Math.floor(r() * 6);
      for (let t = 0; t < k; t++) extra.push({ nu: 620 + r() * 880, I: 0.1 + r() * 0.35, w: 8 + r() * 14 });
    }
    const all = bands.concat(extra);
    const N = o.n || 900, pts = [];
    for (let k = 0; k <= N; k++) {
      const nu = hi - (hi - lo) * k / N;
      let A = 0;
      all.forEach((b) => { const x = (nu - b.nu) / (b.w / 2); A += b.I * 1.0 / (1 + x * x); });
      pts.push([nu, 100 * Math.pow(10, -A)]);
    }
    return pts;
  };
  /** IR 스펙트럼 그리기: Org.irSpectrum(ctx, box, mol|bands, {labels:true, highlight:'acid', range:[4000,400], color}) */
  Org.irSpectrum = function (ctx, box, src, o = {}) {
    const bands = Array.isArray(src) ? src : Org.irBands(src);
    const seed = Array.isArray(src) ? o.seed || "b" : Org.formula(src);
    const pal = SB.palette();
    const r = o.range || [4000, 400];
    const pts = Org.irCurve(bands, { range: r, seed, fingerprint: o.fingerprint });
    const hb = [];
    if (o.highlight) bands.filter((b) => b.group === o.highlight || (Array.isArray(o.highlight) && o.highlight.includes(b.group))).forEach((b) => hb.push({ x0: b.nu + b.w * 0.7 + 10, x1: b.nu - b.w * 0.7 - 10, color: SB.color("org-hl") }));
    if (o.bands) o.bands.forEach((b) => hb.push(b));
    const ch = SB.chart(ctx, box, { x: r, y: [0, 105], xLabel: o.xLabel || "파수 (cm⁻¹)", yLabel: o.yLabel || "투과율 (%)", xTicks: o.xTicks || [4000, 3500, 3000, 2500, 2000, 1500, 1000, 500].filter((v) => v <= Math.max(...r) && v >= Math.min(...r)), yTicks: [0, 50, 100], bands: hb, series: [{ data: pts, color: o.color || pal.accent, width: 1.6 }] });
    if (o.labels !== false) {
      const shown = [];
      bands.filter((b) => b.label && b.I >= 0.3).sort((p, q) => q.I - p.I).forEach((b) => {
        const x = ch.X(b.nu);
        if (shown.some((s) => Math.abs(s - x) < 70)) return;
        shown.push(x);
        const T = 100 * Math.pow(10, -b.I);
        SB.label(ctx, `${b.nu}`, x, Math.min(ch.box.y + ch.box.h - 8, ch.Y(T) + 12), { size: 10.5, color: pal.dim, mono: true });
      });
    }
    return Object.assign(ch, { bands });
  };

  /* ================================================================== NMR */
  function substType(m, c, n) {
    // 탄소 c에 붙은 이웃 n(무거운 원자)의 종류
    const a = m.atoms[n];
    const el = a.el;
    if (el === "C") {
      if (isCarbonylC(m, n)) {
        const others = m.adj[n].filter((e) => e.n !== c && !(m.atoms[e.n].el === "O" && Math.round(e.b.order) === 2));
        if (others.some((e) => m.atoms[e.n].el === "O")) return "COOR";
        if (others.some((e) => m.atoms[e.n].el === "N")) return "CONR2";
        if (others.some((e) => ["Cl", "Br"].includes(m.atoms[e.n].el))) return "COCl";
        if (hOn(m, n) > 0) return "CHO";
        return "COR";
      }
      if (m.adj[n].some((e) => e.b.order === 3 && m.atoms[e.n].el === "N")) return "CN";
      if (isAromAt(m, n)) return "Ph";
      if (inTriple(m, n)) return "alkynyl";
      if (inDouble(m, n)) return "vinyl";
      if (m.adj[n].filter((e) => m.atoms[e.n].el === "F").length >= 3) return "CF3";
      return "alkyl";
    }
    if (el === "O") {
      if (hOn(m, n) > 0) return "OH";
      if (a.charge === -1) return "O-";
      const o2 = m.adj[n].find((e) => e.n !== c);
      if (o2) { if (isCarbonylC(m, o2.n)) return "OCOR"; if (isAromAt(m, o2.n)) return "OAr"; if (m.atoms[o2.n].el === "Si") return "OSi"; if (inDouble(m, o2.n)) return "Ovinyl"; }
      return "OR";
    }
    if (el === "N") {
      if (m.adj[n].filter((e) => m.atoms[e.n].el === "O").length >= 2) return "NO2";
      if (a.charge === 1) return "NR3+";
      if (m.adj[n].some((e) => e.n !== c && isCarbonylC(m, e.n))) return "NHCOR";
      if (m.adj[n].some((e) => e.n !== c && isAromAt(m, e.n))) return "NAr";
      if (m.adj[n].some((e) => e.b.order === 3)) return "NC";
      const h = hOn(m, n);
      return h >= 2 ? "NH2" : h === 1 ? "NHR" : "NR2";
    }
    if (el === "S") { if (m.adj[n].filter((e) => m.atoms[e.n].el === "O" && Math.round(e.b.order) === 2).length >= 1) return "SO2"; return hOn(m, n) ? "SH" : "SR"; }
    if (["F", "Cl", "Br", "I", "Si", "P", "B"].includes(el)) return el;
    return "other";
  }
  // ¹H sp³: α 증분 [CH3, CH2, CH], β 증분
  const H_ALPHA = { alkyl: [0, 0, 0], vinyl: [0.85, 0.75, 0.75], Ph: [1.45, 1.33, 1.3], alkynyl: [0.95, 0.85, 0.8], COR: [1.25, 1.14, 1.0], CHO: [1.3, 1.1, 0.9], COOR: [1.2, 1.0, 1.0], CONR2: [1.15, 0.95, 0.9], COCl: [1.8, 1.6, 1.5], CN: [1.15, 1.06, 1.1], CF3: [0.8, 0.8, 0.8],
    OH: [2.53, 2.39, 2.49], OR: [2.42, 2.2, 2.2], OCOR: [2.82, 2.82, 3.44], OAr: [2.9, 2.7, 3.0], OSi: [2.6, 2.3, 2.3], Ovinyl: [2.7, 2.5, 2.6], "O-": [2.4, 2.2, 2.2], NH2: [1.56, 1.44, 1.5], NHR: [1.5, 1.3, 1.3], NR2: [1.36, 1.2, 1.2], NHCOR: [1.95, 1.9, 2.4], NAr: [1.95, 1.8, 2.0], "NR3+": [2.4, 2.1, 2.2], NO2: [3.4, 3.1, 3.1], NC: [2.0, 2.0, 2.0],
    F: [3.4, 3.15, 3.3], Cl: [2.19, 2.27, 2.59], Br: [1.82, 2.13, 2.66], I: [1.3, 1.9, 2.69], SH: [1.2, 1.25, 1.4], SR: [1.2, 1.25, 1.4], SO2: [2.0, 1.75, 1.6], Si: [-0.86, -0.8, -0.7], P: [0.9, 0.9, 0.9], B: [-0.6, -0.5, -0.5], other: [1, 1, 1] };
  const H_BETA = { alkyl: 0, vinyl: 0.15, Ph: 0.37, alkynyl: 0.25, COR: 0.2, CHO: 0.2, COOR: 0.25, CONR2: 0.2, COCl: 0.3, CN: 0.45, CF3: 0.3, OH: 0.33, OR: 0.32, OCOR: 0.4, OAr: 0.4, OSi: 0.3, Ovinyl: 0.35, "O-": 0.2, NH2: 0.25, NHR: 0.2, NR2: 0.15, NHCOR: 0.25, NAr: 0.3, "NR3+": 0.4, NO2: 0.72, NC: 0.3, F: 0.4, Cl: 0.62, Br: 0.8, I: 0.97, SH: 0.3, SR: 0.3, SO2: 0.4, Si: -0.1, P: 0.2, B: 0, other: 0.2 };
  // 바이닐 H 증분 [gem, cis, trans] (파스쿠알–마이어–지몬)
  const V_INC = { alkyl: [0.45, -0.22, -0.28], CH2X: [0.64, -0.01, -0.02], Ph: [1.38, 0.36, -0.07], vinyl: [1.0, -0.09, -0.23], alkynyl: [0.47, 0.38, 0.12], COR: [1.1, 1.12, 0.87], CHO: [1.02, 0.95, 1.17], COOH: [0.97, 1.41, 0.71], COOR: [0.8, 1.18, 0.55], CONR2: [1.37, 0.98, 0.46], CN: [0.27, 0.75, 0.55], OR: [1.22, -1.07, -1.21], OCOR: [2.11, -0.35, -0.64], OH: [1.22, -1.07, -1.21], Cl: [1.08, 0.18, 0.13], Br: [1.07, 0.45, 0.55], I: [1.14, 0.81, 0.88], F: [1.54, -0.4, -1.02], NR2: [0.8, -1.26, -1.21], NHCOR: [2.08, -0.57, -0.72], SR: [1.11, -0.29, -0.13], Si: [0.9, 0.9, 0.6], CF3: [0.66, 0.61, 0.32], H: [0, 0, 0] };
  // 방향족 H 증분 [ortho, meta, para]
  const A_INC = { alkyl: [-0.2, -0.12, -0.22], CH2X: [0.0, 0.0, 0.0], CF3: [0.32, 0.14, 0.2], vinyl: [0.06, -0.03, -0.1], alkynyl: [0.15, -0.02, -0.01], Ph: [0.37, 0.2, 0.1], CHO: [0.56, 0.22, 0.29], COR: [0.62, 0.14, 0.21], COOH: [0.85, 0.18, 0.27], COOR: [0.71, 0.1, 0.21], CONR2: [0.61, 0.1, 0.17], COCl: [0.84, 0.22, 0.36], CN: [0.36, 0.18, 0.28],
    NH2: [-0.75, -0.25, -0.65], NHR: [-0.8, -0.22, -0.68], NR2: [-0.66, -0.18, -0.67], NHCOR: [0.12, -0.07, -0.28], "NR3+": [0.6, 0.3, 0.35], NO2: [0.95, 0.26, 0.38], OH: [-0.56, -0.12, -0.45], OR: [-0.48, -0.09, -0.44], OAr: [-0.29, -0.05, -0.23], OCOR: [-0.25, 0.03, -0.13], "O-": [-0.8, -0.3, -0.8], F: [-0.26, 0, -0.2], Cl: [0.03, -0.02, -0.09], Br: [0.18, -0.08, -0.04], I: [0.39, -0.21, 0], SH: [-0.08, -0.1, -0.24], SR: [-0.08, -0.1, -0.24], SO2: [0.6, 0.25, 0.33], Si: [0.22, -0.02, -0.02], other: [0, 0, 0] };
  function vinylType(m, c, n) {
    if (n === "H") return "H";
    const t = substType(m, c, n);
    if (t === "alkyl" && m.adj[n].some((e) => e.n !== c && !isC(m, e.n) && m.atoms[e.n].el !== "H")) return "CH2X";
    if (t === "COOR") { const o = m.adj[n].find((e) => m.atoms[e.n].el === "O" && e.b.order === 1); if (o && hOn(m, o.n) > 0) return "COOH"; }
    if (["OH", "OR", "OSi", "Ovinyl", "O-"].includes(t)) return "OR";
    if (["NH2", "NHR", "NR2", "NAr"].includes(t)) return "NR2";
    if (t === "SH" || t === "SR") return "SR";
    return V_INC[t] ? t : "alkyl";
  }
  function aromType(m, c, n) {
    const t = substType(m, c, n);
    if (t === "alkyl" && m.adj[n].some((e) => e.n !== c && !isC(m, e.n) && m.atoms[e.n].el !== "H")) return "CH2X";
    if (t === "COOR") { const o = m.adj[n].find((e) => m.atoms[e.n].el === "O" && e.b.order === 1); if (o && hOn(m, o.n) > 0) return "COOH"; }
    if (t === "OSi" || t === "Ovinyl") return "OR";
    if (t === "NAr") return "NHR";
    return A_INC[t] ? t : "other";
  }
  // 이중 결합 축에 대해 점 p가 어느 쪽인지
  function sideOf(m, x, y, p) { const P = m.xy[x], Q = m.xy[y]; return Math.sign((Q[0] - P[0]) * (p[1] - P[1]) - (Q[1] - P[1]) * (p[0] - P[0])); }
  function implicitHPos(m, at, other) { // at의 암시적 H 위치(2D): 다른 치환체의 대칭
    const subs = m.adj[at].filter((e) => e.n !== other);
    const [ax, ay] = m.xy[at], [bx, by] = m.xy[other];
    if (!subs.length) { const dx = bx - ax, dy = by - ay; return [ax - dx * 0.5 - dy * 0.86, ay - dy * 0.5 + dx * 0.86]; }
    const [ox, oy] = m.xy[subs[0].n];
    const dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy, t = ((ox - ax) * dx + (oy - ay) * dy) / L;
    const fx = ax + t * dx, fy = ay + t * dy;
    return [2 * fx - ox, 2 * fy - oy];
  }
  /**
   * ¹H NMR 예측(1차 분열, 위상 동등). → [{shift, nH, mult, J:[…], couplings:[{n,J}], atoms:[…], type, broad, label}]
   *   opts: { exchange: true(OH·NH 분열 없음), meta:false(방향족 메타 결합 생략) }
   */
  Org.nmrH = function (mol, o = {}) {
    const m = Org.parse(mol);
    if (!m.xy) Org.layout(m);
    const cls = Org.classes(m);
    const envs = [];
    const envOfAtom = new Map(); // 원자 → env(들)
    const groups = new Map();
    m.atoms.forEach((a, i) => { if (a.el === "H" || hOn(m, i) === 0) return; const k = cls[i]; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(i); });
    groups.forEach((atoms) => {
      const i0 = atoms[0];
      const a = m.atoms[i0];
      const nh = hOn(m, i0);
      // 말단 =CH2 의 두 H가 다르면 나눈다
      const dbl = a.el === "C" && m.adj[i0].find((e) => Math.round(e.b.order) === 2 && !e.b.arom && isC(m, e.n));
      if (dbl && nh === 2) {
        const y = dbl.n;
        const ys = m.adj[y].filter((e) => e.n !== i0).map((e) => e.n);
        const yH = hOn(m, y);
        const distinct = ys.length === 2 ? cls[ys[0]] !== cls[ys[1]] : ys.length === 1 && yH === 1;
        if (distinct) {
          const p = (k) => { // k번째 H: 0은 ys[0]과 같은 쪽
            const E = { atoms: atoms.slice(), nPer: 1, el: a.el, vinylPos: k, y };
            return E;
          };
          envs.push(p(0), p(1));
          return;
        }
      }
      envs.push({ atoms: atoms.slice(), nPer: nh, el: a.el });
    });
    envs.forEach((E, k) => E.atoms.forEach((i) => { if (!envOfAtom.has(i)) envOfAtom.set(i, []); envOfAtom.get(i).push(k); }));
    // 화학적 이동
    const shift = (E) => {
      const i = E.atoms[0], a = m.atoms[i];
      if (a.el === "O") {
        const c = m.adj[i][0] && m.adj[i][0].n;
        if (c != null && isCarbonylC(m, c)) return { d: 11.5, broad: true, type: "COOH" };
        if (c != null && isAromAt(m, c)) return { d: 5.5, broad: true, type: "ArOH" };
        if (c != null && m.atoms[c].el === "Si") return { d: 2.5, broad: true, type: "SiOH" };
        return { d: 2.2, broad: true, type: "OH" };
      }
      if (a.el === "N") {
        if (a.charge === 1) return { d: 7.5, broad: true, type: "NH+" };
        if (m.adj[i].some((e) => isCarbonylC(m, e.n))) return { d: E.nPer === 2 ? 6.0 : 6.5, broad: true, type: "amideNH" };
        if (m.adj[i].some((e) => isAromAt(m, e.n))) return { d: 3.6, broad: true, type: "ArNH" };
        if (a.arom) return { d: 8.1, broad: true, type: "pyrroleNH" };
        return { d: 1.4, broad: true, type: "NH" };
      }
      if (a.el === "S") return { d: 1.4, type: "SH" };
      if (a.el === "Si") return { d: 4.0, type: "SiH" };
      if (a.el !== "C") return { d: 2, type: "XH" };
      // 알데하이드
      if (isCarbonylC(m, i)) {
        const others = m.adj[i].filter((e) => !(m.atoms[e.n].el === "O" && Math.round(e.b.order) === 2));
        if (others.some((e) => m.atoms[e.n].el === "O" || m.atoms[e.n].el === "N")) return { d: 8.05, type: "formyl" };
        return { d: others.some((e) => isAromAt(m, e.n) || inDouble(m, e.n)) ? 9.95 : 9.75, type: "CHO" };
      }
      if (inTriple(m, i)) { const other = m.adj[i].find((e) => e.b.order === 3).n; const conj = m.adj[other].some((e) => e.n !== i && (isAromAt(m, e.n) || inDouble(m, e.n))); return { d: conj ? 3.05 : 1.95, type: "alkyneH" }; }
      if (isAromAt(m, i)) return aromShift(m, i);
      const dbl = m.adj[i].find((e) => Math.round(e.b.order) === 2 && !e.b.arom && isC(m, e.n));
      if (dbl) {
        const y = dbl.n;
        let d = 5.25;
        // gem: i의 다른 치환체
        m.adj[i].filter((e) => e.n !== y).forEach((e) => { d += V_INC[vinylType(m, i, e.n)][0]; });
        // 이 H의 위치
        let hp;
        if (E.vinylPos != null) {
          const ys = m.adj[y].filter((e) => e.n !== i).map((e) => e.n);
          const s0 = ys.length ? sideOf(m, i, y, m.xy[ys[0]]) : 1;
          hp = E.vinylPos === 0 ? s0 : -s0;
        } else hp = sideOf(m, i, y, implicitHPos(m, i, y));
        m.adj[y].filter((e) => e.n !== i).forEach((e) => { const t = vinylType(m, y, e.n); const same = sideOf(m, i, y, m.xy[e.n]) === hp; d += V_INC[t][same ? 1 : 2]; });
        return { d, type: "vinyl" };
      }
      // sp³
      const nh = hOn(m, i);
      const kind = nh >= 3 ? 0 : nh === 2 ? 1 : 2;
      let d = [0.86, 1.3, 1.55][kind];
      const subs = m.adj[i].map((e) => substType(m, i, e.n));
      const hetero = subs.filter((t) => t !== "alkyl").map((t) => H_ALPHA[t] ? H_ALPHA[t][kind] : 1).sort((p, q) => q - p);
      hetero.forEach((v, k) => { d += v * (k === 0 ? 1 : k === 1 ? 0.65 : 0.45); });
      // β: 이웃 sp³ 탄소의 치환체
      m.adj[i].forEach((e) => {
        if (!isSp3C(m, e.n)) return;
        m.adj[e.n].forEach((f) => { if (f.n === i) return; const t = substType(m, e.n, f.n); d += H_BETA[t] || 0; });
      });
      const rs = m.atoms[i].rings.length ? Math.min(...m.atoms[i].rings.map((r) => m.rings[r].length)) : 0;
      if (rs === 3) d -= 1.1; else if (rs === 4) d += 0.6; else if (rs === 6 || rs === 5) d += 0.12;
      return { d, type: ["CH3", "CH2", "CH"][kind] };
    };
    function aromShift(m, i) {
      const ring = m.atoms[i].rings.map((r) => m.rings[r]).find((r) => r.every((v) => isAromAt(m, v)));
      if (!ring) return { d: 7.2, type: "ArH" };
      const hetero = ring.filter((v) => m.atoms[v].el !== "C");
      if (hetero.length) {
        const h = hetero[0], n = ring.length, ki = ring.indexOf(i), kh = ring.indexOf(h);
        let dist = Math.abs(ki - kh); dist = Math.min(dist, n - dist);
        const el = m.atoms[h].el;
        let d;
        if (n === 6) d = [0, 8.6, 7.25, 7.65][dist] || 7.3;
        else if (el === "O") d = dist === 1 ? 7.42 : 6.38;
        else if (el === "S") d = dist === 1 ? 7.3 : 7.1;
        else d = dist === 1 ? 6.7 : 6.2;
        return { d, type: "hetArH" };
      }
      let d = 7.27;
      const fused = ring.some((v) => m.atoms[v].rings.length > 1);
      if (fused) {
        const ki = ring.indexOf(i), n = ring.length;
        const nb2 = [ring[(ki + 1) % n], ring[(ki + n - 1) % n]];
        d = nb2.some((v) => m.atoms[v].rings.length > 1) ? 7.8 : 7.45;
      }
      const n = ring.length, ki = ring.indexOf(i);
      ring.forEach((v, kv) => {
        if (v === i) return;
        let dist = Math.abs(kv - ki); dist = Math.min(dist, n - dist);
        m.adj[v].forEach((e) => {
          if (ring.includes(e.n) || m.atoms[e.n].el === "H") return;
          if (e.b.arom || (e.b.kek && e.b.ring)) return; // 융합 고리
          const t = aromType(m, v, e.n);
          d += (A_INC[t] || [0, 0, 0])[dist - 1] || 0;
        });
      });
      return { d, type: "ArH" };
    }
    envs.forEach((E) => { const s = shift(E); E.shift = s.d; E.broad = !!s.broad; E.type = s.type; });
    // 결합 상수
    const exchange = o.exchange !== false;
    const isExch = (E) => ["O", "N", "S"].includes(E.el) && E.type !== "pyrroleNH";
    envs.forEach((E, k) => {
      const cp = new Map();
      if (exchange && isExch(E)) { E.couplings = []; return; }
      const i = E.atoms[0];
      const addC = (env, n, J) => { const key = env + ":" + J.toFixed(1); cp.set(key, { env, n: (cp.get(key) ? cp.get(key).n : 0) + n, J }); };
      // 같은 원자의 다른 H(나뉜 =CH2): 쌍둥이 결합
      if (E.vinylPos != null) envs.forEach((F, kf) => { if (kf !== k && F.vinylPos != null && F.atoms[0] === i) addC(kf, 1, 2.0); });
      m.adj[i].forEach((e) => {
        const j = e.n;
        (envOfAtom.get(j) || []).forEach((kf) => {
          if (kf === k) return;
          const F = envs[kf];
          if (exchange && isExch(F)) return;
          let J = 7.0;
          const aI = isAromAt(m, i), aJ = isAromAt(m, j);
          if (aI && aJ) J = 7.8;
          else if (E.type === "CHO" || F.type === "CHO") J = 2.5;
          else if (Math.round(e.b.order) === 2 && !e.b.arom) {
            // 바이닐 H 사이: 시스 10, 트랜스 17
            const hpE = E.vinylPos != null ? (() => { const ys = m.adj[j].filter((x) => x.n !== i).map((x) => x.n); const s0 = ys.length ? sideOf(m, i, j, m.xy[ys[0]]) : 1; return E.vinylPos === 0 ? s0 : -s0; })() : sideOf(m, i, j, implicitHPos(m, i, j));
            const hpF = F.vinylPos != null ? (() => { const ys = m.adj[i].filter((x) => x.n !== j).map((x) => x.n); const s0 = ys.length ? sideOf(m, j, i, m.xy[ys[0]]) : 1; return F.vinylPos === 0 ? s0 : -s0; })() : sideOf(m, j, i, implicitHPos(m, j, i));
            // hpF는 j→i 축 기준이므로 부호를 뒤집어 같은 축으로
            J = hpE === -hpF ? 10.5 : 17.0;
          } else if ((E.type === "vinyl") !== (F.type === "vinyl")) J = 6.8;
          const nn = F.vinylPos != null ? 1 : hOn(m, j);
          addC(kf, nn, J);
        });
        // 메타(방향족)
        if (o.meta && isAromAt(m, i) && isAromAt(m, j)) m.adj[j].forEach((f) => { if (f.n === i || !isAromAt(m, f.n)) return; (envOfAtom.get(f.n) || []).forEach((kf) => { if (kf !== k && m.atoms[f.n].h) addC(kf, hOn(m, f.n), 1.8); }); });
      });
      // 같은 J끼리 합치기
      const merged = [];
      [...cp.values()].sort((p, q) => q.J - p.J).forEach((c) => { const g = merged.find((x) => Math.abs(x.J - c.J) < 1.2 && o.mergeJ !== false); if (g) { g.n += c.n; g.envs.push(c.env); } else merged.push({ n: c.n, J: c.J, envs: [c.env] }); });
      E.couplings = merged;
    });
    const MULT = ["s", "d", "t", "q", "quint", "sext", "sept", "oct", "non"];
    const out = envs.map((E) => {
      let mult;
      const cs = E.couplings || [];
      if (!cs.length) mult = E.broad ? "br s" : "s";
      else if (cs.length === 1) mult = cs[0].n < MULT.length ? MULT[cs[0].n] : "m";
      else if (cs.length === 2 && cs.every((c) => c.n <= 3)) mult = cs.map((c) => MULT[c.n]).join("");
      else mult = cs.every((c) => c.n === 1) && cs.length === 3 ? "ddd" : "m";
      if (E.type === "ArH" && cs.length >= 2 && !o.exactMult) mult = "m";
      return { shift: Math.round(E.shift * 100) / 100, nH: E.nPer * E.atoms.length, mult, couplings: cs.map((c) => ({ n: c.n, J: c.J })), J: cs.map((c) => c.J), atoms: E.atoms, type: E.type, broad: E.broad };
    }).sort((p, q) => q.shift - p.shift);
    return out;
  };
  /** 다중선 선 목록 [{dHz, I}] (1차 분열) */
  Org.multiplet = function (couplings) {
    let lines = [{ f: 0, I: 1 }];
    (couplings || []).forEach(({ n, J }) => {
      const coef = [1]; for (let k = 0; k < n; k++) { for (let t = coef.length - 1; t > 0; t--) coef[t] += coef[t - 1]; coef.push(1); }
      const tot = coef.reduce((a, b) => a + b, 0);
      const nl = [];
      lines.forEach((L) => coef.forEach((c, t) => nl.push({ f: L.f + (t - n / 2) * J, I: L.I * c / tot })));
      lines = nl;
    });
    return lines;
  };
  /**
   * ¹H NMR 스펙트럼: Org.nmrSpectrum(ctx, box, mol|signals, { MHz:300, range:[12,0](자동), lw:1.2(Hz), integral:true, labels:true, highlight:k, tms:true, color, zoom:null|[a,b] })
   *   → { X(ppm), Y, signals, peaks:[{x, k}] }
   */
  Org.nmrSpectrum = function (ctx, box, src, o = {}) {
    const sig = Array.isArray(src) ? src : Org.nmrH(src, o);
    const pal = SB.palette();
    const MHz = o.MHz || 300;
    const maxS = Math.max(...sig.map((s) => s.shift), 0);
    const r = o.zoom || o.range || [maxS > 9.2 ? Math.ceil(maxS + 0.8) : maxS > 7 ? 9 : maxS > 5 ? 8 : 6, o.tms === false ? 0 : -0.2];
    const ticks = []; const step = r[0] - r[1] > 6 ? 1 : r[0] - r[1] > 2 ? 0.5 : 0.1;
    for (let v = Math.ceil(r[1] / step) * step; v <= r[0] + 1e-9; v += step) ticks.push(Math.round(v * 100) / 100);
    const W = box ? box.w : ctx.canvas.width / ((ctx.getTransform && ctx.getTransform().a) || 1) - 76;
    const ppmPerPx = (r[0] - r[1]) / Math.max(100, W);
    const lines = [];
    sig.forEach((s, k) => {
      const ml = Org.multiplet(s.couplings);
      ml.forEach((L) => lines.push({ p: s.shift + L.f / MHz, I: L.I * s.nH, k, w: (s.broad ? 8 : o.lw || 1.2) / MHz }));
    });
    if (o.tms !== false && !o.zoom) lines.push({ p: 0, I: 0.6, k: -1, w: (o.lw || 1.2) / MHz });
    const N = Math.round(Math.max(400, W * 2)), pts = [];
    let ymax = 0;
    const raw = [];
    for (let t = 0; t <= N; t++) {
      const p = r[0] - (r[0] - r[1]) * t / N;
      let y = 0;
      lines.forEach((L) => { const g = Math.max(L.w / 2, ppmPerPx * 0.9); const x = (p - L.p) / g; if (Math.abs(x) < 60) y += L.I / (1 + x * x) * (ppmPerPx * 0.9 / g); });
      raw.push([p, y]); ymax = Math.max(ymax, y);
    }
    raw.forEach(([p, y]) => pts.push([p, y / (ymax || 1)]));
    const ch = SB.chart(ctx, box, { x: r, y: [0, o.integral === false ? 1.12 : 1.3], xLabel: o.xLabel || "화학적 이동 δ (ppm)", yLabel: o.yLabel || "", xTicks: ticks, yTicks: [], xFmt: (v) => (step < 0.5 ? v.toFixed(1) : String(v)), series: [{ data: pts, color: o.color || pal.text, width: 1.4 }] });
    const peaks = [];
    sig.forEach((s, k) => {
      const x = ch.X(s.shift);
      if (x < ch.box.x || x > ch.box.x + ch.box.w) return;
      // 봉우리 꼭대기
      let top = 0; pts.forEach(([p, y]) => { if (Math.abs(p - s.shift) < 0.08 + Math.max(...(s.J.length ? s.J : [0])) * 2 / MHz) top = Math.max(top, y); });
      peaks.push({ x, k, top: ch.Y(top) });
      if (o.highlight === k) { ctx.save(); ctx.fillStyle = SB.color("org-hl"); const half = Math.max(10, (Org.multiplet(s.couplings).reduce((a, L) => Math.max(a, Math.abs(L.f)), 0) / MHz) / ppmPerPx + 8); ctx.fillRect(x - half, ch.box.y, 2 * half, ch.box.h); ctx.restore(); }
    });
    // 겹치지 않게 이름표
    if (o.labels !== false) {
      const placed = [];
      peaks.slice().sort((a, b) => a.x - b.x).forEach((pk) => {
        const s = sig[pk.k];
        let y = pk.top - 10, row = 0;
        while (placed.some((q) => Math.abs(q.x - pk.x) < 44 && Math.abs(q.y - y) < 26) && row < 4) { y -= 26; row++; }
        y = Math.max(ch.box.y + 18, y);
        placed.push({ x: pk.x, y });
        SB.label(ctx, s.mult, pk.x, y - 12, { size: 11, color: o.highlight === pk.k ? pal.accent : pal.dim, bold: o.highlight === pk.k });
        SB.label(ctx, s.nH + "H", pk.x, y, { size: 11, color: pal.accent2, mono: true });
      });
    }
    if (o.integral) {
      ctx.save(); ctx.strokeStyle = pal.accent2; ctx.lineWidth = 1.4; ctx.setLineDash([]);
      const tot = sig.reduce((a, s) => a + s.nH, 0) || 1;
      let acc = 0;
      ctx.beginPath(); ctx.moveTo(ch.X(r[0]), ch.Y(1.25) + 0);
      const base = ch.box.y + 4, hmax = ch.box.h * 0.35;
      ctx.moveTo(ch.X(r[0]), base + hmax);
      sig.slice().sort((p, q) => q.shift - p.shift).forEach((s) => { const x = ch.X(s.shift); const y0 = base + hmax - acc / tot * hmax; acc += s.nH; const y1 = base + hmax - acc / tot * hmax; ctx.lineTo(x - 6, y0); ctx.lineTo(x + 6, y1); });
      ctx.lineTo(ch.X(r[1]), base);
      ctx.stroke(); ctx.restore();
    }
    return Object.assign(ch, { signals: sig, peaks });
  };
  /** 신호 한 줄 요약: "1.25 (t, J = 7.0 Hz, 3H)" */
  Org.nmrText = (s) => `${s.shift.toFixed(2)} (${s.mult}${s.J.length ? ", J = " + s.J.map((j) => j.toFixed(1)).join(", ") + " Hz" : ""}, ${s.nH}H)`;

  /* ¹³C */
  const C13_ALPHA = { OH: [50, 10, -5], OR: [58, 7, -4], OCOR: [54, 6, -4], OAr: [55, 6, -4], OSi: [50, 9, -5], Ovinyl: [56, 6, -4], "O-": [50, 10, -5], NH2: [29, 11, -5], NHR: [37, 8, -4], NR2: [42, 6, -3], NHCOR: [28, 7, -4], NAr: [31, 8, -4], "NR3+": [31, 5, -7], NO2: [63, 4, -2], NC: [30, 7, -4],
    F: [70, 8, -7], Cl: [31, 11, -4], Br: [20, 11, -3], I: [-6, 11, -1], SH: [11, 12, -4], SR: [20, 7, -3], SO2: [30, 0, -3], Si: [2.3, 3, -1], P: [10, 2, -1], B: [0, 0, 0], other: [20, 5, -2],
    COR: [33, 1, -2], CHO: [31, 0, -2], COOR: [23, 3, -2], CONR2: [22, 3, -1], COCl: [33, 0, -2], vinyl: [20, 7, -2], Ph: [23, 9, -2], alkynyl: [6, 5.5, -3.5], CN: [4, 3, -3], CF3: [10, 0, -2] };
  const C13_AROM = { alkyl: [9.3, 0.7, -0.1, -2.9], CH2X: [9.3, -0.8, 0.2, -0.6], CF3: [2.6, -3.1, 0.4, 3.4], vinyl: [9.1, -2.4, 0.2, -0.5], alkynyl: [-6.2, 3.6, -0.4, -0.3], Ph: [13.0, -1.1, 0.5, -1.0], CHO: [8.2, 1.2, 0.5, 5.8], COR: [8.9, 0, -0.1, 4.4], COOH: [2.1, 1.6, -0.1, 5.2], COOR: [2.0, 1.2, -0.1, 4.3], CONR2: [5.0, -1.2, 0.1, 3.4], COCl: [4.7, 2.7, 0.3, 6.6], CN: [-16.0, 3.5, 0.7, 4.3],
    OH: [26.9, -12.8, 1.4, -7.4], OR: [31.4, -14.4, 1.0, -7.7], OAr: [27.6, -11.2, -0.3, -6.9], OCOR: [22.4, -7.1, 0.4, -3.2], "O-": [39.6, -8.2, 1.9, -13.6], NH2: [18.2, -13.4, 0.8, -10.0], NHR: [21.7, -16.2, 0.7, -12.8], NR2: [22.4, -15.7, 0.8, -11.8], NHCOR: [9.7, -8.1, 0.2, -4.4], "NR3+": [19.5, -7.7, 1.5, 1.5], NO2: [19.9, -4.9, 0.9, 6.1],
    F: [35.1, -14.3, 0.9, -4.4], Cl: [6.4, 0.2, 1.0, -2.0], Br: [-5.4, 3.4, 2.2, -1.0], I: [-32.2, 9.9, 2.6, -7.3], SH: [2.1, 0.7, 0.3, -3.2], SR: [10.0, -1.9, 0.2, -3.6], SO2: [15.0, -2.2, 1.3, 3.8], Si: [11.6, 4.9, -0.7, 0.4], other: [0, 0, 0, 0] };
  const C13_VINYL = { alkyl: [10.6, -7.9], Ph: [12.5, -11], vinyl: [13.6, -7], OR: [29, -39], OCOR: [18, -27], COR: [13.8, 4.7], CHO: [15.3, 14.5], COOR: [6.3, 7.0], COOH: [5.0, 9.8], CONR2: [9, 4], CN: [-15.1, 14.2], Cl: [2.8, -6.1], Br: [-8.6, -0.9], I: [-38, 7], F: [24.9, -34.3], NR2: [28, -32], SR: [19, -16], Si: [16.9, 6.7], alkynyl: [-13.9, 2.5], CH2X: [10.6, -7.9], CF3: [3, 0], H: [0, 0] };
  /** ¹³C NMR 예측 → [{shift, n(같은 탄소 수), atoms, type:'CH3'|'CH2'|'CH'|'C'}] */
  Org.nmrC = function (mol) {
    const m = Org.parse(mol);
    if (!m.xy) Org.layout(m);
    const cls = Org.classes(m);
    const groups = new Map();
    m.atoms.forEach((a, i) => { if (a.el !== "C") return; if (!groups.has(cls[i])) groups.set(cls[i], []); groups.get(cls[i]).push(i); });
    const nC = (i) => m.adj[i].filter((e) => isC(m, e.n)).length;
    const shiftC = (i) => {
      if (isCarbonylC(m, i)) {
        const others = m.adj[i].filter((e) => !(m.atoms[e.n].el === "O" && Math.round(e.b.order) === 2));
        const conj = others.some((e) => isC(m, e.n) && (isAromAt(m, e.n) || inDouble(m, e.n)));
        const sO = others.filter((e) => m.atoms[e.n].el === "O"), sN = others.filter((e) => m.atoms[e.n].el === "N"), sX = others.filter((e) => ["Cl", "Br"].includes(m.atoms[e.n].el));
        const rs = m.atoms[i].rings.length ? Math.min(...m.atoms[i].rings.map((r) => m.rings[r].length)) : 0;
        if (sO.length >= 2) return 155;
        if (sO.length && sN.length) return 156;
        if (sN.length >= 2) return 158;
        if (sO.length) { const o = sO[0].n; if (hOn(m, o)) return conj ? 172 : 179; if (m.atoms[o].charge === -1) return 178; if (m.adj[o].some((e) => e.n !== i && isCarbonylC(m, e.n))) return 167; return conj ? 166.5 : 171.5; }
        if (sN.length) return conj ? 168 : 172;
        if (sX.length) return 171;
        if (hOn(m, i)) return conj ? 192 : 201;
        if (rs === 5) return 219; if (rs === 6) return 211; if (rs === 4) return 208;
        const nconj = others.filter((e) => isC(m, e.n) && (isAromAt(m, e.n) || inDouble(m, e.n))).length;
        return nconj >= 2 ? 196 : nconj === 1 ? 198.5 : 208;
      }
      if (m.adj[i].some((e) => e.b.order === 3 && m.atoms[e.n].el === "N")) return m.adj[i].some((e) => isAromAt(m, e.n)) ? 119 : 118;
      if (inTriple(m, i)) { const other = m.adj[i].find((e) => e.b.order === 3).n; const aryl = m.adj[i].some((e) => isAromAt(m, e.n)); if (hOn(m, i)) return m.adj[other].some((e) => e.n !== i && isAromAt(m, e.n)) ? 77 : 68.5; return aryl ? 89 : hOn(m, other) ? 84 : 80; }
      if (isAromAt(m, i)) return aromC(i);
      const dbl = m.adj[i].find((e) => Math.round(e.b.order) === 2 && !e.b.arom);
      if (dbl && isC(m, dbl.n)) {
        const y = dbl.n;
        let d = 123.3;
        const vt = (c, n) => { const t = vinylType(m, c, n); return C13_VINYL[t] ? t : "alkyl"; };
        m.adj[i].filter((e) => e.n !== y).forEach((e) => { const t = vt(i, e.n); d += C13_VINYL[t][0]; if (t === "alkyl" || t === "CH2X") m.adj[e.n].forEach((f) => { if (f.n !== i && isC(m, f.n)) { d += 7.2; m.adj[f.n].forEach((g) => { if (g.n !== e.n && isC(m, g.n)) d -= 1.5; }); } }); });
        m.adj[y].filter((e) => e.n !== i).forEach((e) => { const t = vt(y, e.n); d += C13_VINYL[t][1]; if (t === "alkyl" || t === "CH2X") m.adj[e.n].forEach((f) => { if (f.n !== y && isC(m, f.n)) { d -= 1.8; m.adj[f.n].forEach((g) => { if (g.n !== e.n && isC(m, g.n)) d += 1.5; }); } }); });
        return d;
      }
      if (dbl && m.atoms[dbl.n].el === "N") return 160;
      // sp³: 그랜트–폴 + 작용기
      const dist = new Map([[i, 0]]), q = [i];
      for (let h = 0; h < q.length; h++) { const u = q[h]; if (dist.get(u) >= 4) continue; m.adj[u].forEach((e) => { if (!dist.has(e.n) && isSp3C(m, e.n)) { dist.set(e.n, dist.get(u) + 1); q.push(e.n); } }); }
      let na = 0, nb = 0, ng = 0, nd = 0;
      dist.forEach((d) => { if (d === 1) na++; else if (d === 2) nb++; else if (d === 3) ng++; else if (d === 4) nd++; });
      let d = -2.3 + 9.1 * na + 9.4 * nb - 2.5 * ng + 0.3 * nd;
      // 입체(가지) 보정
      const deg = (j) => m.adj[j].filter((e) => isC(m, e.n)).length;
      const S = { "1,3": -1.1, "1,4": -3.4, "2,3": -2.5, "2,4": -7.2, "3,2": -3.7, "3,3": -9.5, "3,4": -15, "4,1": -1.5, "4,2": -8.4, "4,3": -15, "4,4": -25 };
      m.adj[i].forEach((e) => { if (isSp3C(m, e.n)) d += S[deg(i) + "," + deg(e.n)] || 0; });
      // 작용기 α·β·γ
      const alphaVals = [];
      dist.forEach((dd, j) => {
        if (dd > 2) return;
        m.adj[j].forEach((e) => {
          if (dist.has(e.n) || m.atoms[e.n].el === "H") return;
          const t = substType(m, j, e.n);
          if (t === "alkyl") return;
          const inc = C13_ALPHA[t] || C13_ALPHA.other;
          const nCj = m.adj[j].filter((x) => isC(m, x.n)).length;
          if (dd === 0) alphaVals.push(inc[0] * (inc[0] > 15 ? 1 - 0.06 * Math.max(0, nCj - 1) : 1)); else d += inc[dd] * (dd === 1 && nCj >= 3 ? 0.8 : 1);
        });
      });
      alphaVals.sort((p, q2) => q2 - p).forEach((v, k) => { d += v * (k === 0 ? 1 : k === 1 ? 0.8 : 0.6); });
      const rs = m.atoms[i].rings.length ? Math.min(...m.atoms[i].rings.map((r) => m.rings[r].length)) : 0;
      d += { 3: -18.7, 4: -2.8, 5: -9, 6: -5, 7: -2 }[rs] || 0;
      void nC;
      return d;
    };
    function aromC(i) {
      const ring = m.atoms[i].rings.map((r) => m.rings[r]).find((r) => r.every((v) => isAromAt(m, v)));
      if (!ring) return 128.5;
      const hetero = ring.filter((v) => m.atoms[v].el !== "C");
      const n = ring.length, ki = ring.indexOf(i);
      let d;
      if (hetero.length) {
        const h = hetero[0], kh = ring.indexOf(h); let dist = Math.abs(ki - kh); dist = Math.min(dist, n - dist);
        const el = m.atoms[h].el;
        if (n === 6) d = [0, 149.9, 123.8, 136.0][dist] || 128;
        else if (el === "O") d = dist === 1 ? 142.8 : 109.7;
        else if (el === "S") d = dist === 1 ? 125.4 : 127.2;
        else d = dist === 1 ? 118.2 : 108.0;
      } else if (m.atoms[i].rings.length > 1) d = 133.5;
      else if (ring.some((v) => m.atoms[v].rings.length > 1)) { const nb2 = [ring[(ki + 1) % n], ring[(ki + n - 1) % n]]; d = nb2.some((v) => m.atoms[v].rings.length > 1) ? 128.0 : 126.0; }
      else d = 128.5;
      ring.forEach((v, kv) => {
        let dist = Math.abs(kv - ki); dist = Math.min(dist, n - dist);
        m.adj[v].forEach((e) => {
          if (ring.includes(e.n) || m.atoms[e.n].el === "H") return;
          if (e.b.ring && (e.b.arom || e.b.kek)) return;
          const t = aromType(m, v, e.n);
          d += (C13_AROM[t] || C13_AROM.other)[dist] || 0;
        });
      });
      return d;
    }
    const out = [];
    groups.forEach((atoms) => {
      const i = atoms[0], h = hOn(m, i);
      out.push({ shift: Math.round(shiftC(i) * 10) / 10, n: atoms.length, atoms, type: h >= 3 ? "CH3" : h === 2 ? "CH2" : h === 1 ? "CH" : "C" });
    });
    return out.sort((p, q) => q.shift - p.shift);
  };
  /** ¹³C 스펙트럼(막대): Org.cSpectrum(ctx, box, mol|signals, { dept: null|'135'|'90', range:[220,0], highlight, labels }) */
  Org.cSpectrum = function (ctx, box, src, o = {}) {
    const sig = Array.isArray(src) ? src : Org.nmrC(src);
    const pal = SB.palette();
    const r = o.range || [Math.max(220, Math.ceil(Math.max(...sig.map((s) => s.shift)) / 20) * 20 + 10), 0];
    const ticks = []; for (let v = 0; v <= r[0]; v += 20) ticks.push(v);
    const dept = o.dept;
    const ch = SB.chart(ctx, box, { x: r, y: dept === "135" ? [-1.2, 1.2] : [0, 1.25], xLabel: o.xLabel || "화학적 이동 δ (ppm)", yLabel: "", xTicks: ticks, yTicks: [] });
    sig.forEach((s, k) => {
      let h = 0.55 + 0.15 * Math.min(3, s.n) - (s.type === "C" ? 0.3 : 0);
      if (dept === "90") h = s.type === "CH" ? 0.9 : 0;
      if (dept === "135") h = s.type === "CH" || s.type === "CH3" ? 0.9 : s.type === "CH2" ? -0.9 : 0;
      if (!h) return;
      const x = ch.X(s.shift);
      ctx.save(); ctx.strokeStyle = o.highlight === k ? pal.accent : o.color || pal.text; ctx.lineWidth = o.highlight === k ? 3 : 1.8;
      ctx.beginPath(); ctx.moveTo(x, ch.Y(0)); ctx.lineTo(x, ch.Y(h)); ctx.stroke(); ctx.restore();
      if (o.labels !== false) SB.label(ctx, s.shift.toFixed(1), x, ch.Y(h) + (h > 0 ? -9 : 9), { size: 10, color: pal.dim, mono: true });
    });
    if (o.solvent !== false && !dept) { const x = ch.X(77.2); [-0.33, 0, 0.33].forEach((dx) => { ctx.save(); ctx.strokeStyle = pal.faint; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(x + dx * 6, ch.Y(0)); ctx.lineTo(x + dx * 6, ch.Y(0.35)); ctx.stroke(); ctx.restore(); }); }
    return Object.assign(ch, { signals: sig });
  };
  /**
   * 2차 효과까지 정확한 스핀계 선 목록(스핀 6개 이하): Org.spinLines([δHz…], J[i][j](Hz)) → [{f(Hz), I}]
   */
  Org.spinLines = function (nu, J) {
    const n = nu.length, N = 1 << n;
    const H = Array.from({ length: N }, () => new Float64Array(N));
    for (let s = 0; s < N; s++) {
      let e = 0;
      for (let i = 0; i < n; i++) e += -nu[i] * (((s >> i) & 1) ? -0.5 : 0.5);
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { const si = ((s >> i) & 1) ? -0.5 : 0.5, sj = ((s >> j) & 1) ? -0.5 : 0.5; e += J[i][j] * si * sj; if (((s >> i) & 1) !== ((s >> j) & 1)) { const t = s ^ (1 << i) ^ (1 << j); H[s][t] += J[i][j] * 0.5; } }
      H[s][s] += e;
    }
    const { vals, vecs } = jacobi(H.map((r) => Array.from(r)));
    const lines = [];
    for (let a = 0; a < N; a++) for (let b = 0; b < N; b++) {
      // I⁻ = Σ σ⁻ : 상태 b → a (한 스핀 α→β)
      let amp = 0;
      for (let s = 0; s < N; s++) for (let i = 0; i < n; i++) if (!((s >> i) & 1)) { const t = s | (1 << i); amp += vecs[t][a] * vecs[s][b]; }
      const I = amp * amp;
      if (I > 1e-4) lines.push({ f: vals[a] - vals[b], I });
    }
    return lines;
  };

  /* ================================================================== 질량 분석 */
  /** 동위원소 분포(정수 질량): Org.isotopes(mol|counts) → [{m, p(최대=100)}] */
  Org.isotopes = function (src, o = {}) {
    const c = src && src.atoms ? Org.counts(src) : typeof src === "string" ? Org.counts(src) : src;
    let dist = new Map([[0, 1]]);
    Object.keys(c).forEach((el) => {
      const iso = el === "D" ? [[2.014, 1]] : EL[el].iso || [[EL[el].m, 1]];
      for (let k = 0; k < c[el]; k++) {
        const nd = new Map();
        dist.forEach((p, mm) => iso.forEach(([mass, ab]) => { const key = mm + Math.round(mass); nd.set(key, (nd.get(key) || 0) + p * ab); }));
        dist = new Map([...nd].filter(([, p]) => p > 1e-7));
      }
    });
    const arr = [...dist].sort((a, b) => a[0] - b[0]);
    const mx = Math.max(...arr.map((x) => x[1]));
    return arr.map(([mm, p]) => ({ m: mm, p: 100 * p / mx })).filter((x) => x.p >= (o.min || 0.05));
  };
  /** 결합 b를 끊은 두 조각 {left:{counts,mass,formula,atoms}, right:{…}} (조각은 원래 H 수 유지) */
  Org.splitAt = function (mol, bi) {
    const m = Org.parse(mol), b = m.bonds[bi];
    const side = (start, block) => { const seen = new Set([start]), st = [start]; while (st.length) { const u = st.pop(); m.adj[u].forEach((e) => { if (e.b.i === bi) return; if (!seen.has(e.n)) { seen.add(e.n); st.push(e.n); } }); } return [...seen]; };
    const mk = (atoms) => { const c = {}; atoms.forEach((i) => { const a = m.atoms[i]; if (a.el === "*") return; c[a.el] = (c[a.el] || 0) + 1; if (a.h) c.H = (c.H || 0) + a.h; }); const mass = Object.keys(c).reduce((s, k) => s + Math.round(EL[k].iso ? EL[k].iso.reduce((x, y) => (y[1] > x[1] ? y : x))[0] : EL[k].m) * c[k], 0); return { atoms, counts: c, mass, formula: Object.keys(c).sort((p, q) => (p === "C" ? -1 : q === "C" ? 1 : p === "H" ? -1 : q === "H" ? 1 : p < q ? -1 : 1)).map((k) => k + (c[k] > 1 ? c[k] : "")).join("") }; };
    const A = side(b.a), B = side(b.b);
    if (A.includes(b.b)) return null; // 고리 결합
    return { left: mk(A), right: mk(B) };
  };
  /** 정수 질량(가장 흔한 동위원소) */
  Org.nominalMass = (mol) => { const c = Org.counts(mol); return Object.keys(c).reduce((s, k) => s + Math.round(k === "D" ? 2 : EL[k].iso ? EL[k].iso.reduce((x, y) => (y[1] > x[1] ? y : x))[0] : EL[k].m) * c[k], 0); };
  /** 질량 스펙트럼 막대: Org.msSpectrum(ctx, box, [{m, p, label}], {range:[a,b], labelTop:6, highlight:m}) */
  Org.msSpectrum = function (ctx, box, peaks, o = {}) {
    const pal = SB.palette();
    const mmax = Math.max(...peaks.map((p) => p.m));
    const r = o.range || [0, Math.ceil((mmax + 10) / 10) * 10];
    const ch = SB.chart(ctx, box, { x: r, y: [0, 115], xLabel: o.xLabel || "m/z", yLabel: o.yLabel || "상대 세기 (%)", yTicks: [0, 50, 100] });
    peaks.forEach((p) => { const x = ch.X(p.m); ctx.save(); ctx.strokeStyle = o.highlight === p.m ? pal.accent : p.color || pal.text; ctx.lineWidth = o.highlight === p.m ? 3.2 : 2; ctx.beginPath(); ctx.moveTo(x, ch.Y(0)); ctx.lineTo(x, ch.Y(p.p)); ctx.stroke(); ctx.restore(); });
    const top = peaks.slice().sort((a, b) => b.p - a.p).slice(0, o.labelTop == null ? 6 : o.labelTop);
    top.concat(peaks.filter((p) => p.label && !top.includes(p))).forEach((p) => SB.label(ctx, p.label || String(p.m), ch.X(p.m), ch.Y(p.p) - 9, { size: 10.5, color: p.label ? pal.accent2 : pal.dim, mono: !p.label }));
    return ch;
  };

  /* ================================================================== 휘켈 MO */
  function jacobi(A) {
    const n = A.length, a = A.map((r) => r.slice()), V = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
    for (let sweep = 0; sweep < 100; sweep++) {
      let off = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) off += a[i][j] * a[i][j];
      if (off < 1e-22) break;
      for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
        if (Math.abs(a[p][q]) < 1e-15) continue;
        const th = (a[q][q] - a[p][p]) / (2 * a[p][q]);
        const t = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1)), c = 1 / Math.sqrt(t * t + 1), s = t * c;
        for (let k = 0; k < n; k++) { const akp = a[k][p], akq = a[k][q]; a[k][p] = c * akp - s * akq; a[k][q] = s * akp + c * akq; }
        for (let k = 0; k < n; k++) { const apk = a[p][k], aqk = a[q][k]; a[p][k] = c * apk - s * aqk; a[q][k] = s * apk + c * aqk; }
        for (let k = 0; k < n; k++) { const vkp = V[k][p], vkq = V[k][q]; V[k][p] = c * vkp - s * vkq; V[k][q] = s * vkp + c * vkq; }
      }
    }
    return { vals: a.map((r, i) => r[i]), vecs: V };
  }
  Org.eigSym = (A) => jacobi(A);
  const HUCKEL_PAR = { N1: [0.5, 1.0], N2: [1.5, 0.8], "N+": [2.0, 1.0], O1: [1.0, 1.0], O2: [2.0, 0.8], "O-": [1.2, 0.8], S2: [0.0, 0.6], F2: [3.0, 0.7], Cl2: [2.0, 0.4], Br2: [1.5, 0.3], B0: [-1.0, 0.7] };
  /**
   * 휘켈 MO: Org.huckel(mol, {lonePairs:true(헤테로 원자 비공유쌍 포함)}) 또는 Org.huckel({n, edges:[[i,j]…], h:[…], k:{"i,j":…}, electrons})
   *   에너지 E = α + xβ (β<0 이므로 x가 클수록 안정). → { x:[…](안정한 순), C:[[…]](C[k][atom]), atoms(분자 원자 번호), electrons, occ:[…], Epi(β 단위), homo, lumo, charge:[…], order:{"i,j":…} }
   */
  Org.huckel = function (src, o = {}) {
    let n, edges, h, kk, electrons, atoms = null;
    if (src && src.edges) { n = src.n; edges = src.edges; h = src.h || new Array(n).fill(0); kk = src.k || {}; electrons = src.electrons == null ? n : src.electrons; }
    else {
      const m = Org.parse(src);
      const pi = new Map(); h = []; electrons = 0; const ek = [];
      m.atoms.forEach((a, i) => {
        const dbl = m.adj[i].some((e) => (Math.round(e.b.order) === 2 || e.b.arom || e.b.order === 1.5) && !e.b.partial);
        const tr = m.adj[i].some((e) => e.b.order === 3);
        const ex = Org.electrons(m, i);
        let e = null, par = null;
        if (a.el === "C") {
          if (a.charge === -1 && a.arom) e = 2; else if (a.charge === 1 && m.adj[i].length + a.h === 3 && (a.arom || m.adj[i].some((x) => isAromAt(m, x.n) || inDouble(m, x.n)))) e = 0; else if (dbl || tr) e = 1; else if (a.charge === 1 && m.adj[i].length + a.h === 3) e = 0; else if (a.charge === -1 && m.adj[i].some((x) => isAromAt(m, x.n) || inDouble(m, x.n) || m.adj[x.n].some((y) => Math.round(y.b.order) === 2))) e = 2; else if (ex.rad && m.adj[i].some((x) => isAromAt(m, x.n) || inDouble(m, x.n) || m.adj[x.n].some((y) => Math.round(y.b.order) === 2 && isC(m, y.n)))) e = 1;
          par = [0, 1];
        } else if (a.el === "N") {
          if (a.charge === 1 && dbl) { e = 1; par = HUCKEL_PAR["N+"]; } else if (dbl) { e = 1; par = HUCKEL_PAR.N1; } else if (ex.lp && (a.arom || (o.lonePairs !== false && m.adj[i].some((x) => isAromAt(m, x.n) || inDouble(m, x.n) || isCarbonylC(m, x.n))))) { e = 2; par = HUCKEL_PAR.N2; }
        } else if (a.el === "O" || a.el === "S") {
          if (dbl) { e = 1; par = HUCKEL_PAR.O1; } else if (ex.lp && (a.arom || (o.lonePairs !== false && m.adj[i].some((x) => isAromAt(m, x.n) || inDouble(m, x.n) || isCarbonylC(m, x.n))))) { e = 2; par = a.el === "S" ? HUCKEL_PAR.S2 : a.charge === -1 ? HUCKEL_PAR["O-"] : HUCKEL_PAR.O2; }
        } else if (["F", "Cl", "Br"].includes(a.el) && o.lonePairs && m.adj[i].some((x) => isAromAt(m, x.n) || inDouble(m, x.n))) { e = 2; par = HUCKEL_PAR[a.el + "2"]; }
        else if (a.el === "B" && m.adj[i].length === 3) { e = 0; par = HUCKEL_PAR.B0; }
        if (e == null) return;
        pi.set(i, pi.size); h.push(par[0]); ek.push(par[1]); electrons += e;
      });
      atoms = [...pi.keys()];
      n = atoms.length;
      edges = []; kk = {};
      m.bonds.forEach((b) => { if (pi.has(b.a) && pi.has(b.b)) { const i = pi.get(b.a), j = pi.get(b.b); edges.push([i, j]); kk[i + "," + j] = Math.min(ek[i], ek[j]) === 1 ? 1 : Math.min(ek[i], ek[j]); } });
      if (o.electrons != null) electrons = o.electrons;
    }
    const M = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) M[i][i] = h[i] || 0;
    edges.forEach(([i, j]) => { const k = kk[i + "," + j] != null ? kk[i + "," + j] : kk[j + "," + i] != null ? kk[j + "," + i] : 1; M[i][j] = M[j][i] = k; });
    const { vals, vecs } = jacobi(M);
    const idx = vals.map((v, i) => i).sort((p, q) => vals[q] - vals[p]);
    const x = idx.map((i) => vals[i]);
    const C = idx.map((i) => vecs.map((row) => row[i]));
    const occ = new Array(n).fill(0);
    let left = electrons;
    // 축퇴 준위는 훈트 규칙으로 고르게
    for (let k = 0; k < n && left > 0;) {
      let g = 1; while (k + g < n && Math.abs(x[k + g] - x[k]) < 1e-6) g++;
      if (left >= 2 * g) { for (let t = 0; t < g; t++) occ[k + t] = 2; left -= 2 * g; }
      else { for (let t = 0; t < g; t++) occ[k + t] = 0; let r = left; for (let t = 0; t < g && r > 0; t++) { occ[k + t] = 1; r--; } for (let t = 0; t < g && r > 0; t++) { occ[k + t]++; r--; } left = 0; }
      k += g;
    }
    const Epi = x.reduce((s, v, k) => s + v * occ[k], 0);
    let homo = -1; occ.forEach((v, k) => { if (v > 0) homo = k; });
    const charge = new Array(n).fill(0), order = {};
    for (let a = 0; a < n; a++) { let q = 0; for (let k = 0; k < n; k++) q += occ[k] * C[k][a] * C[k][a]; charge[a] = q; }
    edges.forEach(([i, j]) => { let p = 0; for (let k = 0; k < n; k++) p += occ[k] * C[k][i] * C[k][j]; order[i + "," + j] = p; });
    return { x, C, atoms, electrons, occ, Epi, homo, lumo: homo + 1 < n ? homo + 1 : -1, piDensity: charge, order, n, edges };
  };
  /** MO 준위 그림: Org.moLevels(ctx, box, hk, {labels:true, highlight:k, unit:'β'}) → {Y(x), levels:[{y,x0,x1,k}]} */
  Org.moLevels = function (ctx, box, hk, o = {}) {
    const pal = SB.palette();
    const xs = hk.x, n = xs.length;
    const lo = Math.min(...xs, -1), hi = Math.max(...xs, 1);
    const Y = (v) => box.y + 10 + (hi - v) / (hi - lo || 1) * (box.h - 20);
    ctx.save();
    ctx.strokeStyle = pal.faint; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(box.x, Y(0)); ctx.lineTo(box.x + box.w, Y(0)); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = pal.dim; ctx.font = "11px " + SB.color("mono"); ctx.textAlign = "left"; ctx.textBaseline = "bottom"; ctx.fillText("α", box.x + 2, Y(0) - 2);
    const levels = [];
    for (let k = 0; k < n;) {
      let g = 1; while (k + g < n && Math.abs(xs[k + g] - xs[k]) < 1e-6) g++;
      const wEach = Math.min(64, (box.w - 70) / g - 10);
      for (let t = 0; t < g; t++) {
        const kk = k + t;
        const cx = box.x + 40 + (box.w - 70) / 2 + (t - (g - 1) / 2) * (wEach + 14), y = Y(xs[kk]);
        ctx.strokeStyle = o.highlight === kk ? pal.accent : pal.text; ctx.lineWidth = o.highlight === kk ? 3.2 : 2.2;
        ctx.beginPath(); ctx.moveTo(cx - wEach / 2, y); ctx.lineTo(cx + wEach / 2, y); ctx.stroke();
        const e = hk.occ[kk];
        ctx.strokeStyle = pal.accent2; ctx.lineWidth = 1.8;
        const arr = (dx, up) => { ctx.beginPath(); ctx.moveTo(cx + dx, y + 9); ctx.lineTo(cx + dx, y - 9); ctx.stroke(); ctx.beginPath(); if (up) { ctx.moveTo(cx + dx - 3.5, y - 5); ctx.lineTo(cx + dx, y - 10); ctx.lineTo(cx + dx + 3.5, y - 5); } else { ctx.moveTo(cx + dx - 3.5, y + 5); ctx.lineTo(cx + dx, y + 10); ctx.lineTo(cx + dx + 3.5, y + 5); } ctx.stroke(); };
        if (e >= 1) arr(-6, true);
        if (e >= 2) arr(6, false);
        levels.push({ k: kk, y, x0: cx - wEach / 2, x1: cx + wEach / 2 });
        if (t === g - 1 && o.labels !== false) { ctx.fillStyle = pal.dim; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.fillText(`${xs[kk] >= 0 ? "α+" : "α−"}${Math.abs(xs[kk]).toFixed(2)}β`, cx + wEach / 2 + 8, y); }
      }
      k += g;
    }
    ctx.restore();
    return { Y, levels };
  };
  /** 구조식 위에 MO 계수(원 크기·색=부호): Org.moOnMol(ctx, view, hk, k, {scale}) */
  Org.moOnMol = function (ctx, view, hk, k, o = {}) {
    const P = ctx.line ? ctx : canvasPen(ctx);
    const C = hk.C[k], mx = Math.max(...C.map(Math.abs)) || 1;
    hk.atoms.forEach((ai, t) => {
      const c = C[t]; if (Math.abs(c) < 1e-3) return;
      const [x, y] = view.pos(ai), r = view.s * (o.scale || 0.62) * Math.sqrt(Math.abs(c) / mx);
      P.circle(x, y, r, { fill: c > 0 ? "var(--accent)" : "var(--accent-2)", alpha: 0.38 });
      P.circle(x, y, r, { stroke: c > 0 ? "var(--accent)" : "var(--accent-2)", width: 1.4 });
    });
  };

  /* ================================================================== 자료표 */
  /** pKa (물 기준 근삿값; 25 °C). 산성 수소가 있는 화학종 */
  Org.PKA = [
    ["플루오로황산·초강산 예: 트라이플산", "CF3SO3H", "OS(=O)(=O)C(F)(F)F", -14], ["아이오딘화 수소", "HI", "I", -10], ["브로민화 수소", "HBr", "Br", -9], ["염화 수소", "HCl", "Cl", -7], ["양성자 첨가 케톤", "R₂C=OH⁺", "C[C](C)=[OH+]", -7],
    ["황산", "H2SO4", "OS(=O)(=O)O", -3], ["p-톨루엔설폰산", "TsOH", "Cc1ccc(cc1)S(=O)(=O)O", -2.8], ["양성자 첨가 알코올", "ROH₂⁺", "C[OH2+]", -2.4], ["메테인설폰산", "CH3SO3H", "CS(=O)(=O)O", -1.9], ["하이드로늄", "H3O+", "[OH3+]", -1.7], ["질산", "HNO3", "O[N+](=O)[O-]", -1.4],
    ["트라이플루오로아세트산", "CF3COOH", "OC(=O)C(F)(F)F", 0.5], ["트라이클로로아세트산", "CCl3COOH", "OC(=O)C(Cl)(Cl)Cl", 0.65], ["다이클로로아세트산", "CHCl2COOH", "OC(=O)C(Cl)Cl", 1.29], ["클로로아세트산", "ClCH2COOH", "OC(=O)CCl", 2.86], ["플루오린화 수소", "HF", "F", 3.2],
    ["폼산", "HCOOH", "OC=O", 3.75], ["벤조산", "PhCOOH", "OC(=O)c1ccccc1", 4.2], ["아닐리늄", "PhNH3+", "[NH3+]c1ccccc1", 4.6], ["아세트산", "CH3COOH", "CC(=O)O", 4.76], ["피리디늄", "C5H5NH+", "c1cc[nH+]cc1", 5.2], ["탄산", "H2CO3", "OC(=O)O", 6.4],
    ["황화 수소", "H2S", "S", 7.0], ["이미다졸륨", "C3H5N2+", "c1c[nH+]c[nH]1", 7.0], ["p-나이트로페놀", "O2NC6H4OH", "Oc1ccc(cc1)[N+](=O)[O-]", 7.15], ["아세틸아세톤", "CH3COCH2COCH3", "CC(=O)CC(C)=O", 9.0], ["사이안화 수소", "HCN", "C#N", 9.2], ["암모늄", "NH4+", "[NH4+]", 9.25],
    ["트라이메틸암모늄", "(CH3)3NH+", "C[NH+](C)C", 9.8], ["페놀", "PhOH", "Oc1ccccc1", 10.0], ["나이트로메테인", "CH3NO2", "C[N+](=O)[O-]", 10.2], ["메테인싸이올", "CH3SH", "CS", 10.3], ["메틸암모늄", "CH3NH3+", "C[NH3+]", 10.6], ["트라이메틸실란올", "(CH3)3SiOH", "C[Si](C)(C)O", 11],
    ["과산화 수소", "H2O2", "OO", 11.6], ["말론산 다이에틸", "CH2(CO2Et)2", "CCOC(=O)CC(=O)OCC", 13], ["메탄올", "CH3OH", "CO", 15.5], ["물", "H2O", "O", 15.7], ["사이클로펜타다이엔", "C5H6", "C1C=CC=C1", 16], ["에탄올", "CH3CH2OH", "CCO", 16],
    ["아세트아마이드(N–H)", "CH3CONH2", "CC(N)=O", 17], ["아세트알데하이드(α-H)", "CH3CHO", "CC=O", 17], ["tert-뷰탄올", "(CH3)3COH", "CC(C)(C)O", 18], ["아세톤(α-H)", "CH3COCH3", "CC(C)=O", 19.2], ["아세트산 에틸(α-H)", "CH3CO2Et", "CCOC(C)=O", 25], ["아세틸렌", "HC≡CH", "C#C", 25],
    ["아세토나이트릴", "CH3CN", "CC#N", 25], ["수소", "H2", "[H][H]", 35], ["암모니아", "NH3", "N", 38], ["다이아이소프로필아민(LDA의 짝산)", "iPr2NH", "CC(C)NC(C)C", 36], ["벤젠", "C6H6", "c1ccccc1", 43], ["에틸렌", "CH2=CH2", "C=C", 44], ["메테인", "CH4", "C", 50], ["에테인", "CH3CH3", "CC", 50],
  ].map(([ko, formula, smiles, pKa]) => ({ ko, formula, smiles, pKa }));
  /** 결합 해리 에너지 kJ/mol (298 K, 균일 분해) */
  Org.BDE = [
    ["CH3–H", 439], ["CH3CH2–H", 423], ["(CH3)2CH–H", 413], ["(CH3)3C–H", 404], ["CH2=CHCH2–H (알릴)", 369], ["PhCH2–H (벤질)", 375], ["CH2=CH–H (바이닐)", 464], ["Ph–H", 472], ["HC≡C–H", 558],
    ["H–H", 436], ["HO–H", 497], ["CH3O–H", 440], ["PhO–H", 362], ["H–F", 570], ["H–Cl", 432], ["H–Br", 366], ["H–I", 298], ["CH3–CH3", 377], ["CH3–F", 460], ["CH3–Cl", 350], ["CH3–Br", 294], ["CH3–I", 239], ["CH3–OH", 385],
    ["F–F", 159], ["Cl–Cl", 243], ["Br–Br", 193], ["I–I", 151], ["HO–OH", 213], ["(CH3)3CO–OC(CH3)3", 159], ["H3Si–H", 384], ["(CH3)3Si–CH3", 394], ["Cl3Si–Cl", 464], ["CF3–F", 547], ["C≡O (일산화 탄소)", 1076],
  ].map(([bond, kJ]) => ({ bond, kJ }));
  /** A 값(kJ/mol): 축 → 적도 자유 에너지 차 */
  Org.A_VALUE = { F: 1.0, Cl: 2.2, Br: 2.0, I: 1.9, OH: 3.8, OCH3: 2.5, OAc: 2.9, NH2: 5.9, NMe2: 8.8, CN: 0.8, COOH: 5.9, CO2Me: 5.3, CHO: 3.0, CH3: 7.3, Et: 7.5, iPr: 9.2, tBu: 21, Ph: 11.7, vinyl: 7.1, "C≡CH": 1.7, SiMe3: 10.5, NO2: 4.6, SH: 5.0, CF3: 10.0 };
  /** 고리 변형 에너지 kJ/mol (연소열에서) */
  Org.RING_STRAIN = { 3: 115, 4: 110, 5: 27, 6: 0, 7: 27, 8: 40, 9: 54, 10: 50, 11: 45, 12: 10, 14: 0 };
  /** 용매 자료: 끓는점 °C, 유전 상수(ε, 20–25 °C), 종류, 반도체 공정 쓰임 */
  Org.SOLVENTS = [
    ["물", "H2O", "O", 100, 78.4, "양성자성", "초순수 세정·현상액 용매"], ["메탄올", "CH3OH", "CO", 64.7, 32.7, "양성자성", ""], ["에탄올", "C2H5OH", "CCO", 78.4, 24.5, "양성자성", ""], ["아이소프로필 알코올(IPA)", "C3H7OH", "CC(C)O", 82.5, 19.9, "양성자성", "웨이퍼 건조(IPA 증기·마랑고니), 세정"],
    ["아세톤", "C3H6O", "CC(C)=O", 56.1, 20.7, "비양성자성 극성", "감광막 제거·세척"], ["아세토나이트릴", "C2H3N", "CC#N", 81.6, 37.5, "비양성자성 극성", ""], ["다이메틸 설폭사이드(DMSO)", "C2H6OS", "CS(C)=O", 189, 46.7, "비양성자성 극성", "스트리퍼 성분"],
    ["N,N-다이메틸폼아마이드(DMF)", "C3H7NO", "CN(C)C=O", 153, 36.7, "비양성자성 극성", ""], ["N-메틸-2-피롤리돈(NMP)", "C5H9NO", "CN1CCCC1=O", 202, 32.2, "비양성자성 극성", "감광막 스트리퍼, 폴리이미드 용매"], ["γ-뷰티로락톤(GBL)", "C4H6O2", "O=C1CCCO1", 204, 39, "비양성자성 극성", "폴리이미드·레지스트 용매"],
    ["테트라하이드로퓨란(THF)", "C4H8O", "C1CCOC1", 66, 7.6, "비양성자성", ""], ["다이에틸 에터", "C4H10O", "CCOCC", 34.6, 4.3, "비양성자성", ""], ["아세트산 에틸", "C4H8O2", "CCOC(C)=O", 77.1, 6.0, "비양성자성", ""], ["아세트산 n-뷰틸", "C6H12O2", "CCCCOC(C)=O", 126, 5.0, "비양성자성", "음성 톤 현상(NTD) 현상액"],
    ["PGMEA", "C6H12O3", "COCC(C)OC(C)=O", 146, 8.3, "비양성자성", "감광막·반사 방지막 주 용매"], ["PGME", "C4H10O2", "COCC(C)O", 120, 12.3, "양성자성", "감광막 혼합 용매, 엣지 비드 제거"], ["젖산 에틸", "C5H10O3", "CCOC(=O)C(C)O", 154, 15.4, "양성자성", "감광막 용매"],
    ["사이클로헥산온", "C6H10O", "O=C1CCCCC1", 155.6, 18.3, "비양성자성 극성", "감광막·SOC 용매"], ["다이클로로메테인", "CH2Cl2", "ClCCl", 39.6, 8.9, "비양성자성", ""], ["클로로폼", "CHCl3", "ClC(Cl)Cl", 61.2, 4.8, "비양성자성", "NMR 용매(CDCl₃)"], ["톨루엔", "C7H8", "Cc1ccccc1", 110.6, 2.4, "무극성", ""], ["헥세인", "C6H14", "CCCCCC", 69, 1.9, "무극성", ""],
  ].map(([ko, formula, smiles, bp, eps, type, semi]) => ({ ko, formula, smiles, bp, eps, type, semi }));
  /** 뉴먼 투영 상호작용 에너지(kJ/mol): 가림 e, 고시 g (모형값) */
  const TOR = { "H,H": [4.0, 0], "CH3,H": [6.0, 0], "CH3,CH3": [11.0, 3.8], "Et,H": [6.3, 0], "CH3,Et": [12, 4.2], "Et,Et": [13, 4.6], "H,iPr": [6.8, 0], "CH3,iPr": [14, 5.5], "H,tBu": [7.5, 0], "CH3,tBu": [20, 11], "Cl,H": [5.0, 0], "CH3,Cl": [8, 2.1], "Cl,Cl": [8, 1.9], "Br,H": [5.4, 0], "Br,CH3": [9, 2.5], "Br,Br": [10, 3.0], "H,OH": [4.6, 0], "CH3,OH": [7.5, 1.5], "OH,OH": [6.5, -2.0], "H,Ph": [6.5, 0], "CH3,Ph": [12, 4.0] };
  const torKey = (a, b) => { const al = { Me: "CH3", C2H5: "Et", CH2CH3: "Et" }; a = al[a] || a; b = al[b] || b; return [a, b].sort().join(","); };
  /**
   * 뉴먼 회전 에너지(kJ/mol): Org.torsionEnergy(front, back, phi(도)) — 쌍마다 가림 e·cos²(1.5θ)(θ<60°) + 고시 g·sin²(1.5θ)(θ<120°)
   *   front/back: 치환체 이름 3개 (newman과 같은 순서). 표에 없는 쌍은 H/H·CH₃/CH₃ 값으로 어림.
   */
  Org.torsionEnergy = function (front, back, phi) {
    let E = 0;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      const sep = (((phi + 120 * j - 120 * i) % 360) + 360) % 360;
      const th = Math.min(sep, 360 - sep); // 0..180
      const v = TOR[torKey(front[i], back[j])] || (front[i] === "H" || back[j] === "H" ? TOR["CH3,H"] : TOR["CH3,CH3"]);
      if (th < 60) E += v[0] * Math.cos(1.5 * th * D2R) ** 2;
      if (th < 120) E += v[1] * Math.sin(1.5 * th * D2R) ** 2;
    }
    return E;
  };

  /* ================================================================== 열역학·속도 도구 */
  Org.R = 8.314462618e-3; // kJ/(mol·K)
  /** 평형 상수 K = exp(−ΔG°/RT) (ΔG° kJ/mol) */
  Org.K = (dG, T = 298.15) => Math.exp(-dG / (Org.R * T));
  /** 볼츠만 분율: 에너지 배열(kJ/mol) → 분율 배열 (g: 겹침수 배열 선택) */
  Org.boltzmann = (Es, T = 298.15, g) => { const e0 = Math.min(...Es); const w = Es.map((e, k) => (g ? g[k] : 1) * Math.exp(-(e - e0) / (Org.R * T))); const s = w.reduce((a, b) => a + b, 0); return w.map((x) => x / s); };
  /** 아이링 속도 상수 k (s⁻¹), ΔG‡ kJ/mol */
  Org.eyring = (dGts, T = 298.15) => (1.380649e-23 * T / 6.62607015e-34) * Math.exp(-dGts / (Org.R * T));
  /** 아레니우스 k = A exp(−Ea/RT) */
  Org.arrhenius = (A, Ea, T = 298.15) => A * Math.exp(-Ea / (Org.R * T));
  /** 헨더슨–하셀바흐: 짝염기 분율 [A⁻]/([HA]+[A⁻]) */
  Org.fracBase = (pH, pKa) => 1 / (1 + Math.pow(10, pKa - pH));
  /** 산–염기 반응 평형 상수: 왼쪽 산 pKa1 + 염기 → 짝산 pKa2 :  K = 10^(pKa2 − pKa1) */
  Org.Kacidbase = (pKaAcid, pKaConjAcid) => Math.pow(10, pKaConjAcid - pKaAcid);
  /** 두 분자가 같은 구조인지(입체 무시, 그래프 동형) */
  Org.same = function (a, b) {
    const A = Org.parse(a), B = Org.parse(b);
    if (A.atoms.length !== B.atoms.length || A.bonds.length !== B.bonds.length) return false;
    if (Org.formula(A) !== Org.formula(B)) return false;
    const ca = Org.classes(A), cb = Org.classes(B);
    // 클래스 → 불변량 문자열로 비교 후 백트래킹
    const inv = (m, c, i) => [m.atoms[i].Z, m.atoms[i].h, m.atoms[i].charge, m.adj[i].length, m.atoms[i].label || ""].join("|");
    const map = new Array(A.atoms.length).fill(-1), used = new Array(B.atoms.length).fill(false);
    const order = A.atoms.map((x) => x.i);
    const ord = (m, i, j) => { const e = m.adj[i].find((x) => x.n === j); return e ? Math.round(e.b.order * 2) : -1; };
    let steps = 0;
    function bt(k) {
      if (k === order.length) return true;
      if (steps++ > 200000) return false;
      const i = order[k];
      for (let j = 0; j < B.atoms.length; j++) {
        if (used[j] || inv(A, ca, i) !== inv(B, cb, j)) continue;
        let ok = true;
        for (const e of A.adj[i]) { const mj = map[e.n]; if (mj >= 0 && ord(B, j, mj) !== Math.round(e.b.order * 2)) { ok = false; break; } }
        if (!ok) continue;
        map[i] = j; used[j] = true;
        if (bt(k + 1)) return true;
        map[i] = -1; used[j] = false;
      }
      return false;
    }
    return bt(0);
  };
})();
