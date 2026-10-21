/* ==========================================================================
   SciBook lib/solid.js — 고체물리 라이브러리 (전역 Solid)
   결정 구조와 3D 투영 그리기, 밀러 면, 역격자·구조 인자·XRD, 탄성,
   점결함·확산, 포논 분산과 비열, 자유 전자·배선 크기 효과, 띠 구조
   (거의 자유 전자·강결합·경험적 의사퍼텐셜), 반도체 캐리어 통계·이동도·
   재결합·접합, 유전 함수, 자성, 저차원 수송.
   의존: engine/lib/quantum.js (상수 Q.const, Q.fdHalf), engine/js/scibook.js(그리기만)

   단위 관례
   - 결정 기하: 길이 nm, 각도 도(°) — 인자에 rad가 붙은 경우만 라디안
   - 전자: 에너지 eV, 온도 K, 질량은 me의 배수
   - 반도체 소자 관례: 농도 cm⁻³, 이동도 cm²/(V·s), 전기장 V/cm, 시간 s, 길이 cm
     (함수 이름이나 주석에 다른 단위가 적힌 경우 그쪽을 따른다)
   ========================================================================== */
(function () {
  "use strict";
  const Solid = (window.Solid = {});
  const Qc = (window.Q && Q.const) || { h: 6.62607015e-34, hbar: 1.054571817e-34, e: 1.602176634e-19, me: 9.1093837015e-31, kB: 1.380649e-23, kBev: 8.617333262e-5, Ry: 13.605693122994, eps0: 8.8541878128e-12 };
  const q = 1.602176634e-19, kB = 1.380649e-23, kBev = 8.617333262e-5, eps0 = 8.8541878128e-12;
  const h = 6.62607015e-34, hbar = 1.054571817e-34, me = 9.1093837015e-31;
  const muB = 9.2740100783e-24, NA = 6.02214076e23;
  Solid.const = { q, kB, kBev, eps0, h, hbar, me, muB, NA, G0: (2 * q * q) / h, RK: h / (q * q), CuKa1: 0.1540598, CuKa: 0.15418 };
  const kT = (T) => kBev * T;
  Solid.kT = kT;

  /* ------------------------------------------------------------ 수치 도구 */
  /** 심프슨 적분 ∫_a^b f(x)dx, n(짝수) 구간 */
  Solid.integrate = function (f, a, b, n = 200) {
    if (n % 2) n++;
    const dx = (b - a) / n;
    let s = f(a) + f(b);
    for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * dx);
    return (s * dx) / 3;
  };
  /** 이분법: f(lo)와 f(hi)의 부호가 달라야 한다 */
  Solid.bisect = function (f, lo, hi, tol = 1e-10, it = 200) {
    let flo = f(lo);
    for (let i = 0; i < it; i++) {
      const mid = 0.5 * (lo + hi), fm = f(mid);
      if ((fm > 0) === (flo > 0)) { lo = mid; flo = fm; } else hi = mid;
      if (hi - lo < tol) break;
    }
    return 0.5 * (lo + hi);
  };
  /** 오차 함수(상대 오차 1.2e-7, Numerical Recipes erfcc) */
  Solid.erfc = function (x) {
    const z = Math.abs(x), t = 1 / (1 + 0.5 * z);
    const r = t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + t * (-0.82215223 + t * 0.17087277)))))))));
    return x >= 0 ? r : 2 - r;
  };
  Solid.erf = (x) => 1 - Solid.erfc(x);

  /**
   * 실대칭 행렬의 고윳값(오름차순). A: 길이 n·n 배열(행 우선, 덮어씀). 하우스홀더 삼중대각화 + QL(tred2/tqli).
   */
  Solid.eigSym = function (A, n) {
    const a = []; for (let i = 0; i < n; i++) a.push(Array.from(A.slice(i * n, i * n + n)));
    const d = new Float64Array(n), e = new Float64Array(n);
    for (let i = n - 1; i > 0; i--) {
      const l = i - 1; let hh = 0, scale = 0;
      if (l > 0) {
        for (let k = 0; k <= l; k++) scale += Math.abs(a[i][k]);
        if (scale === 0) e[i] = a[i][l];
        else {
          for (let k = 0; k <= l; k++) { a[i][k] /= scale; hh += a[i][k] * a[i][k]; }
          let f = a[i][l]; const g = f >= 0 ? -Math.sqrt(hh) : Math.sqrt(hh);
          e[i] = scale * g; hh -= f * g; a[i][l] = f - g; f = 0;
          for (let j = 0; j <= l; j++) {
            let g2 = 0;
            for (let k = 0; k <= j; k++) g2 += a[j][k] * a[i][k];
            for (let k = j + 1; k <= l; k++) g2 += a[k][j] * a[i][k];
            e[j] = g2 / hh; f += e[j] * a[i][j];
          }
          const hh2 = f / (hh + hh);
          for (let j = 0; j <= l; j++) {
            const f2 = a[i][j], g3 = (e[j] -= hh2 * f2);
            for (let k = 0; k <= j; k++) a[j][k] -= f2 * e[k] + g3 * a[i][k];
          }
        }
      } else e[i] = a[i][l];
      d[i] = hh;
    }
    for (let i = 0; i < n; i++) d[i] = a[i][i];
    for (let i = 1; i < n; i++) e[i - 1] = e[i];
    e[n - 1] = 0;
    for (let l = 0; l < n; l++) {
      let iter = 0, m;
      do {
        for (m = l; m < n - 1; m++) { const dd = Math.abs(d[m]) + Math.abs(d[m + 1]); if (Math.abs(e[m]) <= 1e-15 * dd) break; }
        if (m !== l) {
          if (iter++ > 60) break;
          let g = (d[l + 1] - d[l]) / (2 * e[l]), r = Math.hypot(g, 1);
          g = d[m] - d[l] + e[l] / (g + (g >= 0 ? Math.abs(r) : -Math.abs(r)));
          let s = 1, c = 1, p = 0, i;
          for (i = m - 1; i >= l; i--) {
            let f = s * e[i]; const b = c * e[i];
            e[i + 1] = r = Math.hypot(f, g);
            if (r === 0) { d[i + 1] -= p; e[m] = 0; break; }
            s = f / r; c = g / r; g = d[i + 1] - p; r = (d[i] - g) * s + 2 * c * b; d[i + 1] = g + (p = s * r); g = c * r - b;
          }
          if (r === 0 && i >= l) continue;
          d[l] -= p; e[l] = g; e[m] = 0;
        }
      } while (m !== l);
    }
    return Array.from(d).sort((x, y) => x - y);
  };

  /* ------------------------------------------------------------ 벡터 */
  const V = {
    add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
    sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
    mul: (a, s) => [a[0] * s, a[1] * s, a[2] * s],
    dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
    cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    len: (a) => Math.hypot(a[0], a[1], a[2]),
    norm: (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; },
  };
  Solid.vec = V;

  /* ------------------------------------------------------------ 결정 구조 */
  /**
   * 결정 구조 정의. cell: 관용 단위 셀(분수 좌표, 원자 종류 t=0/1), prim: 기본 벡터(a 단위),
   * nn: 최근접 거리(a 단위), Z: 최근접 수, cubic: 입방정 여부.
   */
  const s3 = Math.sqrt(3);
  const FCC = [[0, 0, 0], [0, 0.5, 0.5], [0.5, 0, 0.5], [0.5, 0.5, 0]];
  const shift = (pts, d, t) => pts.map((p) => ({ p: [p[0] + d[0], p[1] + d[1], p[2] + d[2]], t }));
  Solid.structures = {
    sc: { ko: "단순 입방", cubic: true, cell: [{ p: [0, 0, 0], t: 0 }], prim: [[1, 0, 0], [0, 1, 0], [0, 0, 1]], basis: [[0, 0, 0]], nn: 1, Z: 6 },
    bcc: { ko: "체심 입방", cubic: true, cell: [{ p: [0, 0, 0], t: 0 }, { p: [0.5, 0.5, 0.5], t: 0 }], prim: [[-0.5, 0.5, 0.5], [0.5, -0.5, 0.5], [0.5, 0.5, -0.5]], basis: [[0, 0, 0]], nn: s3 / 2, Z: 8 },
    fcc: { ko: "면심 입방", cubic: true, cell: shift(FCC, [0, 0, 0], 0), prim: [[0, 0.5, 0.5], [0.5, 0, 0.5], [0.5, 0.5, 0]], basis: [[0, 0, 0]], nn: Math.SQRT1_2, Z: 12 },
    diamond: { ko: "다이아몬드", cubic: true, cell: shift(FCC, [0, 0, 0], 0).concat(shift(FCC, [0.25, 0.25, 0.25], 0)), prim: [[0, 0.5, 0.5], [0.5, 0, 0.5], [0.5, 0.5, 0]], basis: [[0, 0, 0], [0.25, 0.25, 0.25]], nn: s3 / 4, Z: 4 },
    zincblende: { ko: "섬아연석", cubic: true, cell: shift(FCC, [0, 0, 0], 0).concat(shift(FCC, [0.25, 0.25, 0.25], 1)), prim: [[0, 0.5, 0.5], [0.5, 0, 0.5], [0.5, 0.5, 0]], basis: [[0, 0, 0], [0.25, 0.25, 0.25]], nn: s3 / 4, Z: 4 },
    rocksalt: { ko: "암염(NaCl)", cubic: true, cell: shift(FCC, [0, 0, 0], 0).concat(shift(FCC, [0.5, 0, 0], 1)), prim: [[0, 0.5, 0.5], [0.5, 0, 0.5], [0.5, 0.5, 0]], basis: [[0, 0, 0], [0.5, 0, 0]], nn: 0.5, Z: 6 },
    cscl: { ko: "염화 세슘", cubic: true, cell: [{ p: [0, 0, 0], t: 0 }, { p: [0.5, 0.5, 0.5], t: 1 }], prim: [[1, 0, 0], [0, 1, 0], [0, 0, 1]], basis: [[0, 0, 0], [0.5, 0.5, 0.5]], nn: s3 / 2, Z: 8 },
  };
  /** 육방 조밀(hcp)·우르츠광: 관용 셀을 데카르트 좌표(a 단위)로 만든다. c/a 기본값은 이상값 √(8/3) */
  Solid.hexCell = function (kind = "hcp", ca = Math.sqrt(8 / 3), u = 3 / 8) {
    const a1 = [1, 0, 0], a2 = [-0.5, s3 / 2, 0], a3 = [0, 0, ca];
    const frac = kind === "hcp" ? [[0, 0, 0, 0], [1 / 3, 2 / 3, 0.5, 0]] : [[0, 0, 0, 0], [1 / 3, 2 / 3, 0.5, 0], [0, 0, u, 1], [1 / 3, 2 / 3, 0.5 + u, 1]];
    return { a1, a2, a3, atoms: frac.map((f) => ({ p: V.add(V.add(V.mul(a1, f[0]), V.mul(a2, f[1])), V.mul(a3, f[2])), t: f[3] })) };
  };
  /** 관용 셀 원자 수, 최근접 수, 채움률(같은 크기 구 가정, 최근접끼리 닿음) */
  Solid.cellInfo = function (name) {
    const s = Solid.structures[name], N = s.cell.length, r = s.nn / 2;
    return { N, Z: s.Z, nn: s.nn, r, packing: (N * (4 / 3) * Math.PI * r ** 3) };
  };
  /** 원자 수 밀도(nm⁻³)와 질량 밀도(g/cm³). M: 몰질량(g/mol, 두 종류면 평균) */
  Solid.density = function (name, a, M) {
    const N = Solid.structures[name].cell.length, n = N / a ** 3;
    return { n, rho: M ? (n * 1e21 * M) / NA : null };
  };
  /**
   * 입방정 원자 목록을 nx×ny×nz 셀로 늘린다(경계 원자 포함). 반환: [{p:[x,y,z](a 단위), t}]
   */
  Solid.supercell = function (name, nx = 1, ny = nx, nz = nx, o = {}) {
    const s = Solid.structures[name], out = [], eps = 1e-6, key = new Set();
    for (let i = -1; i <= nx; i++) for (let j = -1; j <= ny; j++) for (let k = -1; k <= nz; k++)
      for (const at of s.cell) {
        const p = [at.p[0] + i, at.p[1] + j, at.p[2] + k];
        if (p[0] < -eps || p[1] < -eps || p[2] < -eps || p[0] > nx + eps || p[1] > ny + eps || p[2] > nz + eps) continue;
        const kk = p.map((v) => Math.round(v * 1e4)).join(",");
        if (key.has(kk)) continue; key.add(kk); out.push({ p, t: at.t });
      }
    return o.interiorOnly ? out.filter((a) => a.p.every((v, i) => v < [nx, ny, nz][i] - eps)) : out;
  };
  /** 거리 dmax(같은 단위) 이하 원자 쌍을 결합으로: [[i,j],…] */
  Solid.bonds = function (atoms, dmax, tol = 0.02) {
    const out = [];
    for (let i = 0; i < atoms.length; i++) for (let j = i + 1; j < atoms.length; j++) {
      const d = V.len(V.sub(atoms[i].p, atoms[j].p));
      if (d < dmax * (1 + tol) && d > 1e-6) out.push([i, j]);
    }
    return out;
  };

  /* ------------------------------------------------------------ 3D 투영 그리기 */
  /**
   * 회전 가능한 정사영 카메라. yaw·pitch(rad). project(p) → {x, y, z(깊이, 클수록 앞)}
   * Solid.camera({yaw, pitch, scale, cx, cy, center:[x,y,z]})
   */
  Solid.camera = function (o) {
    const cy_ = Math.cos(o.yaw), sy = Math.sin(o.yaw), cp = Math.cos(o.pitch), sp = Math.sin(o.pitch);
    const c = o.center || [0, 0, 0], sc = o.scale || 100;
    return {
      project(p) {
        const x = p[0] - c[0], y = p[1] - c[1], z = p[2] - c[2];
        const x1 = cy_ * x - sy * y, y1 = sy * x + cy_ * y;   // z축 회전(yaw)
        const y2 = cp * y1 - sp * z, z2 = sp * y1 + cp * z;   // 화면 가로축 회전(pitch)
        return { x: o.cx + sc * x1, y: o.cy - sc * z2, z: y2 * -1 };
      },
      scale: sc,
    };
  };
  /**
   * 원자(구)·결합(선)·셀 모서리를 깊이 순으로 그린다.
   * Solid.drawCrystal(ctx, cam, atoms, {bonds, edges:[[p,q],…], radius, colors:[c0,c1], highlight:Set(index), alpha(i)})
   */
  Solid.drawCrystal = function (ctx, cam, atoms, o = {}) {
    const P = window.SB ? SB.palette() : { text: "#000", dim: "#666", faint: "#aaa", series: ["#0e7490", "#b45309"] };
    const cols = o.colors || [P.series[0], P.series[1]];
    const pr = atoms.map((a) => cam.project(a.p));
    ctx.save();
    if (o.edges) {
      ctx.strokeStyle = P.faint; ctx.lineWidth = 1; ctx.setLineDash([4, 3]);
      for (const [a, b] of o.edges) { const A = cam.project(a), B = cam.project(b); ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke(); }
      ctx.setLineDash([]);
    }
    const items = [];
    (o.bonds || []).forEach(([i, j]) => items.push({ z: (pr[i].z + pr[j].z) / 2 - 1e-3, bond: [i, j] }));
    pr.forEach((p, i) => items.push({ z: p.z, atom: i }));
    items.sort((A, B) => A.z - B.z);
    const zs = pr.map((p) => p.z), zmin = Math.min(...zs), zmax = Math.max(...zs), zr = zmax - zmin || 1;
    const R = (o.radius || 0.12) * cam.scale;
    for (const it of items) {
      if (it.bond) {
        const [i, j] = it.bond, A = pr[i], B = pr[j];
        ctx.strokeStyle = P.dim; ctx.globalAlpha = 0.75; ctx.lineWidth = Math.max(1.5, R * 0.28);
        ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke(); ctx.globalAlpha = 1;
      } else {
        const i = it.atom, p = pr[i], depth = (p.z - zmin) / zr, a = atoms[i];
        const r = R * (0.82 + 0.28 * depth) * (a.r || 1);
        const col = a.color || cols[a.t % cols.length];
        ctx.globalAlpha = (o.alpha ? o.alpha(i) : 1) * (0.55 + 0.45 * depth);
        const g = ctx.createRadialGradient(p.x - r * 0.35, p.y - r * 0.35, r * 0.1, p.x, p.y, r);
        g.addColorStop(0, "rgba(255,255,255,0.85)"); g.addColorStop(0.35, col); g.addColorStop(1, col);
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 2 * Math.PI); ctx.fill();
        if (o.highlight && o.highlight.has(i)) { ctx.globalAlpha = 1; ctx.strokeStyle = P.text; ctx.lineWidth = 2.5; ctx.stroke(); }
        ctx.globalAlpha = 1;
      }
    }
    ctx.restore();
    return pr;
  };
  /** 단위 정육면체 모서리 12개 (크기 n) */
  Solid.cubeEdges = function (n = 1) {
    const E = [];
    const c = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]].map((p) => V.mul(p, n));
    [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]].forEach(([a, b]) => E.push([c[a], c[b]]));
    return E;
  };
  /**
   * 캔버스에 끌어 돌리기를 붙인다. state.yaw/pitch를 바꾸고 redraw()를 부른다.
   * Solid.orbit(canvasEl or SB.canvas 반환값, state, redraw)
   */
  Solid.orbit = function (cv, state, redraw) {
    const el = cv.canvas || cv;
    let last = null;
    const pt = (e) => { const t = e.touches ? e.touches[0] : e; return [t.clientX, t.clientY]; };
    const down = (e) => { last = pt(e); };
    const move = (e) => {
      if (!last) return;
      const p = pt(e); state.yaw += (p[0] - last[0]) * 0.01; state.pitch = Math.max(-1.5, Math.min(1.5, state.pitch + (p[1] - last[1]) * 0.01));
      last = p; state.dragged = true; redraw(); if (e.cancelable) e.preventDefault();
    };
    const up = () => { last = null; };
    el.addEventListener("pointerdown", down); window.addEventListener("pointermove", move, { passive: false }); window.addEventListener("pointerup", up);
    el.style.touchAction = "none";
  };

  /* ------------------------------------------------------------ 밀러 지수와 면 */
  /** 입방정 면간 거리 d_hkl = a/√(h²+k²+l²) */
  Solid.dCubic = (a, h, k, l) => a / Math.sqrt(h * h + k * k + l * l);
  /** 육방정 면간 거리: 1/d² = 4(h²+hk+k²)/(3a²) + l²/c² */
  Solid.dHex = (a, c, h, k, l) => 1 / Math.sqrt((4 * (h * h + h * k + k * k)) / (3 * a * a) + (l * l) / (c * c));
  /** 두 방향(또는 면 법선) 사이 각도(°) — 입방정 */
  Solid.angleCubic = (u, v) => (Math.acos(Math.max(-1, Math.min(1, V.dot(u, v) / (V.len(u) * V.len(v))))) * 180) / Math.PI;
  /** 절편 (p, q, r)(a 단위, Infinity 허용) → 밀러 지수 [h,k,l] (정수로 맞춤) */
  Solid.millerFromIntercepts = function (p, q_, r) {
    const inv = [p, q_, r].map((x) => (isFinite(x) ? 1 / x : 0));
    for (let m = 1; m <= 12; m++) {
      const t = inv.map((x) => x * m);
      if (t.every((x) => Math.abs(x - Math.round(x)) < 1e-6)) { const v = t.map(Math.round); const g = gcd3(v); return v.map((x) => x / g); }
    }
    return inv;
  };
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; }
  function gcd3(v) { return gcd(gcd(v[0], v[1]), v[2]) || 1; }
  Solid.gcd = gcd;
  /**
   * 입방정 구조의 (hkl) 원자층: 법선 방향 원자층 간격들과 층당 면 밀도.
   * 반환 {d: d_hkl(nm), layers: 한 주기 안 층 위치(nm), period(nm), sigma: 층당 원자 면밀도(nm⁻²), sigmaCm: (cm⁻²)}
   */
  Solid.planes = function (name, hkl, a = 1) {
    const s = Solid.structures[name];
    const g = gcd3(hkl), m = hkl.map((x) => x / g), mm = Math.sqrt(m[0] ** 2 + m[1] ** 2 + m[2] ** 2), nrm = V.norm(m);
    const period = a / mm; // 관용 셀 병진의 법선 사영 주기
    const pos = new Set();
    for (const at of s.cell) {
      const z = V.dot(V.mul(at.p, a), nrm), f = ((z % period) + period) % period;
      pos.add(Math.round((f / period) * 1e6) % 1e6);
    }
    const layers = [...pos].sort((x, y) => x - y).map((v) => (v / 1e6) * period);
    let spacing = period;
    for (let i = 0; i < layers.length; i++) spacing = Math.min(spacing, (i + 1 < layers.length ? layers[i + 1] : layers[0] + period) - layers[i]);
    const sigma = ((s.cell.length / a ** 3) * period) / layers.length;
    return { period, layers, spacing, sigma, sigmaCm: sigma * 1e14 };
  };

  /* ------------------------------------------------------------ 역격자와 회절 */
  /** 실격자 a1,a2,a3 → 역격자 b_i (2π 포함). 단위는 입력 길이의 역수 */
  Solid.reciprocal = function (a1, a2, a3) {
    const vol = V.dot(a1, V.cross(a2, a3)), f = (2 * Math.PI) / vol;
    return { b1: V.mul(V.cross(a2, a3), f), b2: V.mul(V.cross(a3, a1), f), b3: V.mul(V.cross(a1, a2), f), vol };
  };
  /** 브래그: 2d sinθ = nλ → θ(°) (불가능하면 NaN) */
  Solid.braggTheta = (d, lambda, n = 1) => { const s = (n * lambda) / (2 * d); return s > 1 ? NaN : (Math.asin(s) * 180) / Math.PI; };
  /** 원자 산란 인자 근사 f(s) = Z[0.344e^{−38s²} + 0.656e^{−1.53s²}], s = sinθ/λ (Å⁻¹ = 0.1·nm⁻¹).
   *  Si 표값(International Tables)을 ±3%로 맞춘 일반형 — 상대 세기 계산용 */
  Solid.formFactor = (Z, sNm) => { const s2 = (sNm / 10) ** 2; return Z * (0.344 * Math.exp(-38 * s2) + 0.656 * Math.exp(-1.53 * s2)); };
  /**
   * 구조 인자 F_hkl = Σ f_j exp(2πi(hx+ky+lz)) (관용 셀). f: [f0, f1] 또는 함수 (t)=>f
   * 반환 {re, im, abs2}
   */
  Solid.structureFactor = function (name, h_, k, l, f = [1, 1]) {
    const s = Solid.structures[name]; let re = 0, im = 0;
    for (const at of s.cell) {
      const ff = typeof f === "function" ? f(at.t) : f[at.t];
      const ph = 2 * Math.PI * (h_ * at.p[0] + k * at.p[1] + l * at.p[2]);
      re += ff * Math.cos(ph); im += ff * Math.sin(ph);
    }
    if (Math.abs(re) < 1e-9) re = 0; if (Math.abs(im) < 1e-9) im = 0;
    return { re, im, abs2: re * re + im * im };
  };
  /** 입방정 {hkl} 등가면 수(다중도) */
  Solid.multiplicity = function (h_, k, l) {
    const set = new Set(), v = [h_, k, l];
    const perms = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
    for (const pm of perms) for (let sx = -1; sx <= 1; sx += 2) for (let sy = -1; sy <= 1; sy += 2) for (let sz = -1; sz <= 1; sz += 2)
      set.add([v[pm[0]] * sx, v[pm[1]] * sy, v[pm[2]] * sz].join(","));
    return set.size;
  };
  /**
   * 입방정 분말 회절 패턴(θ–2θ). o = {Z: [Z0, Z1](원자 번호 → 근사 산란 인자), B: 디바이–월러(Å², 0.5), hmax, tthMax}.
   * 반환 [{hkl:[h,k,l], d, tth(°), I(최대 100으로 규격화), F2, mult}]
   */
  Solid.powderPattern = function (name, a, lambda = Solid.const.CuKa1, o = {}) {
    const Z = o.Z || [14, 14], hmax = o.hmax || 6, tmax = o.tthMax || 150, out = [];
    for (let h_ = 0; h_ <= hmax; h_++) for (let k = 0; k <= h_; k++) for (let l = 0; l <= k; l++) {
      if (!h_ && !k && !l) continue;
      const d = Solid.dCubic(a, h_, k, l), th = Solid.braggTheta(d, lambda);
      if (!isFinite(th) || 2 * th > tmax) continue;
      const sv = 1 / (2 * d), F = Solid.structureFactor(name, h_, k, l, (t) => Solid.formFactor(Z[t], sv));
      if (F.abs2 < 1e-6) continue;
      const r = (th * Math.PI) / 180, LP = (1 + Math.cos(2 * r) ** 2) / (Math.sin(r) ** 2 * Math.cos(r));
      const DW = Math.exp(-2 * (o.B ?? 0.5) * (sv / 10) ** 2); // 디바이–월러 인자, B(Å²)
      out.push({ hkl: [h_, k, l], d, tth: 2 * th, F2: F.abs2, mult: Solid.multiplicity(h_, k, l), I: F.abs2 * Solid.multiplicity(h_, k, l) * LP * DW });
    }
    const mx = Math.max(...out.map((p) => p.I));
    out.forEach((p) => (p.I = (100 * p.I) / mx));
    return out.sort((A, B) => A.tth - B.tth);
  };
  /** 셰러 식: 결정립 크기 D = Kλ/(β cosθ). beta: 반치폭(2θ, °), tth: 2θ(°) → nm */
  Solid.scherrer = (beta, tth, lambda = Solid.const.CuKa1, K = 0.9) => (K * lambda) / (((beta * Math.PI) / 180) * Math.cos((tth * Math.PI) / 360));
  /** Si₁₋ₓGeₓ 격자 상수(nm) — 데즈뮤크스(Dismukes 1964) 2차식 */
  Solid.aSiGe = (x) => 0.54310 + 0.01992 * x + 0.002733 * x * x;

  /* ------------------------------------------------------------ 결합과 탄성 */
  /** 레너드–존스: U(r) = 4ε[(σ/r)¹² − (σ/r)⁶] */
  Solid.lj = (r, eps, sigma) => 4 * eps * ((sigma / r) ** 12 - (sigma / r) ** 6);
  /** 레너드–존스 힘 F = −dU/dr */
  Solid.ljForce = (r, eps, sigma) => (24 * eps / r) * (2 * (sigma / r) ** 12 - (sigma / r) ** 6);
  /** 마델룽 상수(최근접 거리 기준) */
  Solid.madelung = { rocksalt: 1.747565, cscl: 1.762675, zincblende: 1.638055, wurtzite: 1.641, chain1D: 2 * Math.LN2 };
  /** 1차원 교대 이온 사슬의 마델룽 합(부분합, n항) — 수렴 보기용 */
  Solid.madelung1D = (n) => { let s = 0; for (let j = 1; j <= n; j++) s += (2 * (j % 2 ? 1 : -1)) / j; return s; };
  /** 이온 결정 격자 에너지(보른–마이어): U(r0) = −(N_A M e²/4πε0 r0)(1 − ρ/r0) (kJ/mol). r0, rho: nm */
  Solid.bornMayer = (M, r0, rho = 0.0345, z = 1) => (-(NA * M * z * z * q * q) / (4 * Math.PI * eps0 * r0 * 1e-9)) * (1 - rho / r0) / 1000;
  /** 입방정 탄성 상수(GPa) 대표값 (300 K) */
  Solid.elastic = {
    Si: { C11: 165.7, C12: 63.9, C44: 79.6 },
    Ge: { C11: 128.5, C12: 48.3, C44: 66.8 },
    GaAs: { C11: 118.8, C12: 53.8, C44: 59.4 },
    Cu: { C11: 168.4, C12: 121.4, C44: 75.4 },
    Al: { C11: 107.3, C12: 60.9, C44: 28.3 },
    W: { C11: 522.4, C12: 204.4, C44: 160.6 },
    diamond: { C11: 1076, C12: 125, C44: 577 },
  };
  /** 입방정 강성 → 유연 상수 S11, S12, S44 (GPa⁻¹) */
  Solid.compliance = function (C) {
    const d = (C.C11 - C.C12) * (C.C11 + 2 * C.C12);
    return { S11: (C.C11 + C.C12) / d, S12: -C.C12 / d, S44: 1 / C.C44 };
  };
  /** 입방정 결정의 [hkl] 방향 영률(GPa): 1/E = S11 − 2(S11 − S12 − S44/2)(l1²l2² + l2²l3² + l3²l1²) */
  Solid.youngCubic = function (C, dir) {
    const S = Solid.compliance(C), n = V.norm(dir);
    const J = n[0] ** 2 * n[1] ** 2 + n[1] ** 2 * n[2] ** 2 + n[2] ** 2 * n[0] ** 2;
    return 1 / (S.S11 - 2 * (S.S11 - S.S12 - S.S44 / 2) * J);
  };
  /** 체적 탄성률 B = (C11 + 2C12)/3, 이방성 비 A = 2C44/(C11 − C12) */
  Solid.bulkModulus = (C) => (C.C11 + 2 * C.C12) / 3;
  Solid.zenerA = (C) => (2 * C.C44) / (C.C11 - C.C12);
  /** (001) 면내 2축 변형 ε∥ → 수직 변형 ε⊥ = −2(C12/C11)ε∥ */
  Solid.epsPerp001 = (C, epar) => (-2 * C.C12 * epar) / C.C11;
  /** 격자 불일치 f = (a_layer − a_sub)/a_sub */
  Solid.mismatch = (aLayer, aSub) => (aLayer - aSub) / aSub;
  /**
   * 매슈스–블레이크슬리 임계 두께(nm): h = b(1 − ν cos²α)/(8π f (1 + ν) cosλ) · [ln(h/b) + 1]
   * 60° 전위(α = 60°, λ = 60°), b = a/√2. 반복법으로 푼다.
   */
  Solid.criticalThickness = function (f, a = 0.5431, nu = 0.28) {
    const b = a / Math.SQRT2, ca = 0.5, cl = 0.5, A = (b * (1 - nu * ca * ca)) / (8 * Math.PI * Math.abs(f) * (1 + nu) * cl);
    let hc = 10 * b;
    for (let i = 0; i < 200; i++) { const nh = A * (Math.log(hc / b) + 1); if (!(nh > 0)) return NaN; if (Math.abs(nh - hc) < 1e-9) break; hc = nh; }
    return hc;
  };

  /* ------------------------------------------------------------ 결함과 확산 */
  /** 열평형 점결함 농도 n/N = exp(−E_f/kT) (엔트로피 인자 선택) */
  Solid.defectFraction = (Ef, T, S_k = 0) => Math.exp(S_k) * Math.exp(-Ef / kT(T));
  /** 아레니우스 확산 계수 D = D0 exp(−Ea/kT) (D0 단위 그대로) */
  Solid.arrhenius = (D0, Ea, T) => D0 * Math.exp(-Ea / kT(T));
  /** 실리콘 속 도펀트의 진성 확산 대표값 D0(cm²/s), Ea(eV) — 교재 대표값, 조건(농도·분위기)에 따라 달라진다 */
  Solid.dopantDiffusion = {
    B: { D0: 0.76, Ea: 3.46 }, P: { D0: 3.85, Ea: 3.66 }, As: { D0: 0.32, Ea: 3.56 }, Sb: { D0: 0.214, Ea: 3.65 },
    Au: { D0: 1.1e-3, Ea: 1.12 }, Cu: { D0: 3e-4, Ea: 0.18 }, Fe: { D0: 1.0e-3, Ea: 0.67 }, O: { D0: 0.13, Ea: 2.53 },
  };
  /** 일정 표면 농도 확산: C = Cs·erfc(x/2√(Dt)) */
  Solid.erfcProfile = (x, Cs, Dt) => Cs * Solid.erfc(x / (2 * Math.sqrt(Dt)));
  /** 일정 총량(Q, cm⁻²) 확산: C = Q/√(πDt) · exp(−x²/4Dt) */
  Solid.gaussProfile = (x, Q_, Dt) => (Q_ / Math.sqrt(Math.PI * Dt)) * Math.exp((-x * x) / (4 * Dt));
  /** 접합 깊이: 프로파일이 배경 농도 Nb가 되는 x (이분법, 단위는 입력과 같음) */
  Solid.junctionDepth = (prof, Nb, xmax) => Solid.bisect((x) => prof(x) - Nb, 0, xmax, xmax * 1e-9);

  /* ------------------------------------------------------------ 포논 */
  /** 단원자 사슬: ω(k) = 2√(C/M)|sin(ka/2)| (C·M 단위가 무엇이든 √(C/M) 단위의 ω) */
  Solid.chain1 = (k, a, C, M) => 2 * Math.sqrt(C / M) * Math.abs(Math.sin((k * a) / 2));
  /**
   * 이원자 사슬(질량 M1, M2, 같은 용수철 C, 격자 상수 a):
   * ω² = C(1/M1 + 1/M2) ∓ C√((1/M1 + 1/M2)² − 4 sin²(ka/2)/(M1M2)). 반환 {ac, op}
   */
  Solid.chain2 = function (k, a, C, M1, M2) {
    const s = 1 / M1 + 1 / M2, r = Math.sqrt(Math.max(0, s * s - (4 * Math.sin((k * a) / 2) ** 2) / (M1 * M2)));
    return { ac: Math.sqrt(Math.max(0, C * (s - r))), op: Math.sqrt(C * (s + r)) };
  };
  /** 이원자 사슬 고유 벡터의 진폭비 u2/u1 (복소수 {re, im}) — 애니메이션용 */
  Solid.chain2Ratio = function (k, a, C, M1, M2, w) {
    // (2C − M1ω²)u1 = C(1 + e^{−ika})u2
    const num = 2 * C - M1 * w * w, dr = C * (1 + Math.cos(k * a)), di = -C * Math.sin(k * a);
    const d2 = dr * dr + di * di || 1e-30;
    return { re: (num * dr) / d2, im: (-num * di) / d2 };
  };
  /** 아인슈타인 비열(몰당, J/(mol·K), 원자 1몰): 3R x²eˣ/(eˣ−1)², x = ΘE/T */
  const R = 8.314462618;
  Solid.R = R;
  Solid.einsteinC = (T, thE) => { if (T <= 0) return 0; const x = thE / T; if (x > 700) return 0; const ex = Math.exp(x); return (3 * R * x * x * ex) / ((ex - 1) ** 2); };
  /** 디바이 비열(원자 1몰): 9R(T/ΘD)³ ∫₀^{ΘD/T} x⁴eˣ/(eˣ−1)² dx */
  Solid.debyeC = function (T, thD) {
    if (T <= 0) return 0;
    const xm = thD / T;
    if (xm > 60) return ((12 * Math.PI ** 4) / 5) * R * (T / thD) ** 3;
    const I = Solid.integrate((x) => (x < 1e-6 ? x * x : (x ** 4 * Math.exp(x)) / Math.expm1(x) ** 2), 0, xm, 400);
    return 9 * R * (T / thD) ** 3 * I;
  };
  /** 디바이 내부 에너지(원자 1몰, J/mol, 영점 제외) */
  Solid.debyeU = function (T, thD) {
    if (T <= 0) return 0;
    const xm = Math.min(thD / T, 60);
    return 9 * R * T * (T / thD) ** 3 * Solid.integrate((x) => (x < 1e-8 ? x * x : x ** 3 / Math.expm1(x)), 0, xm, 400);
  };
  /** 디바이 온도(K) 대표값 */
  Solid.debyeT = { Si: 645, Ge: 374, GaAs: 344, diamond: 2230, Cu: 343, Al: 428, Au: 165, Ag: 225, W: 400, Pb: 105, Fe: 470, NaCl: 321 };
  /** 보스–아인슈타인 점유수 ⟨n⟩ (ħω, eV) */
  Solid.nBose = (hw, T) => (T <= 0 ? 0 : 1 / Math.expm1(hw / kT(T)));
  /** 기체 운동론 열전도도 κ = C v ℓ / 3 (C: J/(m³K), v: m/s, ℓ: m → W/(m·K)) */
  Solid.kappaKinetic = (C, v, l) => (C * v * l) / 3;
  /** 라만 응력 환산(Si, 520.7 cm⁻¹ 기준): 1축 σ = −434 MPa·Δω, (001) 2축 σ = −250 MPa·Δω (Δω cm⁻¹, 압축이 양의 이동) */
  Solid.siRaman0 = 520.7;
  Solid.ramanStress = (dw, mode = "uniaxial") => (mode === "biaxial" ? -250 : -434) * dw;

  /* ------------------------------------------------------------ 자유 전자 */
  /**
   * 금속 대표값: n(전도 전자, m⁻³), rho(300 K, μΩ·cm), EF(eV), lam(300 K 전자 평균 자유 행로, nm; Gall 2016),
   * thD(디바이 온도), W(일함수, eV), Z(원자가)
   */
  Solid.metals = {
    Cu: { ko: "구리", n: 8.47e28, rho: 1.68, EF: 7.00, lam: 39.9, W: 4.65, Z: 1 },
    Ag: { ko: "은", n: 5.86e28, rho: 1.59, EF: 5.49, lam: 53.3, W: 4.26, Z: 1 },
    Au: { ko: "금", n: 5.90e28, rho: 2.21, EF: 5.53, lam: 37.7, W: 5.1, Z: 1 },
    Al: { ko: "알루미늄", n: 18.1e28, rho: 2.65, EF: 11.7, lam: 18.9, W: 4.28, Z: 3 },
    W: { ko: "텅스텐", n: 6.3e28, rho: 5.28, EF: null, lam: 19.1, W: 4.55, Z: null },
    Co: { ko: "코발트", n: null, rho: 6.2, EF: null, lam: 11.8, W: 5.0, Z: null },
    Ru: { ko: "루테늄", n: null, rho: 7.1, EF: null, lam: 6.6, W: 4.71, Z: null },
    Mo: { ko: "몰리브데넘", n: null, rho: 5.34, EF: null, lam: 14.4, W: 4.6, Z: null },
    Na: { ko: "소듐", n: 2.65e28, rho: 4.77, EF: 3.24, lam: null, W: 2.75, Z: 1 },
  };
  /** 드루드: 완화 시간 τ = m/(n e² ρ) (rho: Ω·m, n: m⁻³) → s */
  Solid.drudeTau = (n, rhoOhmM, m = 1) => (m * me) / (n * q * q * rhoOhmM);
  /** 페르미 파수 kF(nm⁻¹), 속도 vF(m/s), 온도 TF(K) — n: m⁻³ */
  Solid.fermi = function (n, m = 1) {
    const kF = Math.cbrt(3 * Math.PI * Math.PI * n), EF = (hbar * hbar * kF * kF) / (2 * m * me);
    return { kF: kF * 1e-9, vF: (hbar * kF) / (m * me), EF: EF / q, TF: EF / kB };
  };
  /** 조머펠트 전자 비열 계수 γ = π²nk_B²/(2E_F) (J/(m³K²)) — n: m⁻³, EF: eV */
  Solid.gammaSommerfeld = (n, EF) => (Math.PI ** 2 * n * kB * kB) / (2 * EF * q);
  /** 로렌츠 수 L = π²/3 (k_B/e)² (W·Ω/K²) */
  Solid.lorenz = (Math.PI ** 2 / 3) * (kB / q) ** 2;
  /** 리처드슨–더시먼: J = A T² exp(−W/kT), A = 120.17 A/(cm²K²)·(m*÷m) → A/cm² */
  Solid.richardson = (T, W, Astar = 120.17) => Astar * T * T * Math.exp(-W / kT(T));
  /**
   * 푹스–존트하이머 얇은 막 비저항 비 ρ/ρ0 (κ = t/λ, p = 경면 반사 확률)
   * ρ0/ρ = 1 − (3/2κ)(1−p) ∫₁^∞ (1/u³ − 1/u⁵)(1 − e^{−κu})/(1 − p e^{−κu}) du
   */
  Solid.fsRatio = function (kappa, p = 0) {
    const f = (s) => { // u = 1/s 치환, s∈(0,1]: du = −ds/s²
      if (s <= 0) return 0;
      const u = 1 / s, e = Math.exp(-kappa * u);
      return (1 / u ** 3 - 1 / u ** 5) * (1 - e) / (1 - p * e) / (s * s);
    };
    const I = Solid.integrate(f, 0, 1, 2000);
    return 1 / (1 - ((3 / (2 * kappa)) * (1 - p) * I));
  };
  /** 마야다스–샤츠케스 결정립계 비저항 비 ρ/ρ0: α = (λ/D)·R/(1−R) */
  Solid.msRatio = function (lam, D, Rg) {
    const al = (lam / D) * (Rg / (1 - Rg));
    return 1 / (3 * (1 / 3 - al / 2 + al * al - al ** 3 * Math.log(1 + 1 / al)));
  };

  /* ------------------------------------------------------------ 띠 구조 */
  /** 1차원 강결합: E = E0 − 2t cos(ka) */
  Solid.tb1D = (k, a, E0 = 0, t = 1) => E0 - 2 * t * Math.cos(k * a);
  /** 2차원 정사각 격자 강결합: E = E0 − 2t(cos kx a + cos ky a) */
  Solid.tbSquare = (kx, ky, a = 1, E0 = 0, t = 1) => E0 - 2 * t * (Math.cos(kx * a) + Math.cos(ky * a));
  /**
   * 그래핀 최근접 강결합: E± = ±t|f(k)|, |f|² = 3 + 2cos(√3 ky a) + 4cos(√3 ky a/2)cos(3 kx a/2)
   * a: C–C 거리(0.142 nm), t ≈ 2.7 eV. 반환 |f|
   */
  Solid.grapheneF = (kx, ky, a = 0.142) => Math.sqrt(Math.max(0, 3 + 2 * Math.cos(s3 * ky * a) + 4 * Math.cos((s3 * ky * a) / 2) * Math.cos((3 * kx * a) / 2)));
  /**
   * 1차원 거의 자유 전자(평면파 전개): V(x) = Σ_n U[n] (2cos(nGx)) 꼴 퓨리에 성분 U[1..](eV).
   * k(nm⁻¹), a(nm), nG: 평면파 수(홀수). 반환 오름차순 에너지(eV)
   */
  Solid.nfe1D = function (k, a, U, nG = 9, m = 1) {
    const C = 0.0380998212 / m, G = (2 * Math.PI) / a, half = (nG - 1) / 2, H = new Float64Array(nG * nG);
    for (let i = 0; i < nG; i++) for (let j = 0; j < nG; j++) {
      const ni = i - half, nj = j - half;
      if (i === j) H[i * nG + j] = C * (k + ni * G) ** 2;
      else { const d = Math.abs(ni - nj); H[i * nG + j] = d <= U.length ? U[d - 1] || 0 : 0; }
    }
    return Solid.eigSym(H, nG);
  };
  /**
   * 경험적 의사퍼텐셜(코언–버그스트레서 1966; Si는 띠 간격을 맞춘 보정값) — 다이아몬드·섬아연석. 대칭·반대칭 형상 인자(Ry), a(nm).
   * |G|² ≤ (2π/a)²·Gmax2 평면파. 반환 함수 bands(k:[kx,ky,kz](2π/a 단위)) → 오름차순 에너지(eV, 가전자대 꼭대기 0 아님)
   */
  Solid.epmParams = {
    Si: { a: 0.5431, VS: { 3: -0.2241, 8: 0.0551, 11: 0.0724 }, VA: {} }, // 간접 띠 간격 ≈ 1.07 eV(0.85X)
    Ge: { a: 0.5657, VS: { 3: -0.23, 8: 0.01, 11: 0.06 }, VA: {} },
    GaAs: { a: 0.5653, VS: { 3: -0.23, 8: 0.01, 11: 0.06 }, VA: { 3: 0.07, 4: 0.05, 11: 0.01 } },
    InP: { a: 0.5869, VS: { 3: -0.23, 8: 0.01, 11: 0.06 }, VA: { 3: 0.07, 4: 0.05, 11: 0.01 } },
  };
  Solid.epm = function (mat = "Si", Gmax2 = 21) {
    const P = typeof mat === "string" ? Solid.epmParams[mat] : mat;
    const Gs = [];
    const nmax = Math.ceil(Math.sqrt(Gmax2)) + 1;
    for (let i = -nmax; i <= nmax; i++) for (let j = -nmax; j <= nmax; j++) for (let k = -nmax; k <= nmax; k++) {
      // fcc 역격자(bcc): 모든 지수가 같은 홀짝
      if (!((i & 1) === (j & 1) && (j & 1) === (k & 1))) continue;
      const g2 = i * i + j * j + k * k;
      if (g2 <= Gmax2) Gs.push([i, j, k]);
    }
    const n = Gs.length, Ry = 13.605693122994; // 에너지 단위 Ry: 운동 에너지 = (2π/a)²|k+G|² (원자 단위)
    const a0 = 0.0529177210903, f = ((2 * Math.PI) / (P.a / a0)) ** 2; // (2π/a)² in bohr⁻² → Ry
    // 퍼텐셜 행렬(고정): V(G−G') = VS cos(G·τ) + i VA sin(G·τ), τ = (1/8,1/8,1/8)a → G·τ = (π/4)(h+k+l)
    const Vre = new Float64Array(n * n), Vim = new Float64Array(n * n);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const d = [Gs[i][0] - Gs[j][0], Gs[i][1] - Gs[j][1], Gs[i][2] - Gs[j][2]], g2 = d[0] ** 2 + d[1] ** 2 + d[2] ** 2;
      const ph = (Math.PI / 4) * (d[0] + d[1] + d[2]);
      const vs = P.VS[g2] || 0, va = P.VA[g2] || 0;
      Vre[i * n + j] = vs * Math.cos(ph); Vim[i * n + j] = va * Math.sin(ph);
    }
    const complex = Object.keys(P.VA).length > 0;
    function bands(kv) {
      if (!complex) {
        const H = new Float64Array(n * n);
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) H[i * n + j] = Vre[i * n + j];
          const qx = kv[0] + Gs[i][0], qy = kv[1] + Gs[i][1], qz = kv[2] + Gs[i][2];
          H[i * n + i] = f * (qx * qx + qy * qy + qz * qz);
        }
        return Solid.eigSym(H, n).map((E) => E * Ry);
      }
      // 에르미트 H = A + iB → 실대칭 [[A, −B],[B, A]] (고윳값이 두 번씩 나온다)
      const N2 = 2 * n, H = new Float64Array(N2 * N2);
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        let A = Vre[i * n + j]; const B = Vim[i * n + j];
        if (i === j) { const qx = kv[0] + Gs[i][0], qy = kv[1] + Gs[i][1], qz = kv[2] + Gs[i][2]; A = f * (qx * qx + qy * qy + qz * qz); }
        H[i * N2 + j] = A; H[(i + n) * N2 + j + n] = A; H[i * N2 + j + n] = -B; H[(i + n) * N2 + j] = B;
      }
      const ev = Solid.eigSym(H, N2), out = [];
      for (let i = 0; i < ev.length; i += 2) out.push(ev[i] * Ry);
      return out;
    }
    return { bands, nPW: n };
  };
  /** 브릴루앙 영역 대칭점(fcc, 2π/a 단위) */
  Solid.kpoints = { G: [0, 0, 0], X: [1, 0, 0], L: [0.5, 0.5, 0.5], K: [0.75, 0.75, 0], U: [1, 0.25, 0.25], W: [1, 0.5, 0] };
  /**
   * 대칭점 경로를 따라 띠를 계산. path: ["L","G","X","U|K","G"] — "U|K"는 U에서 끊고 같은 값인 K에서 다시 시작
   * 반환 {x:[누적 거리], E:[[띠0…]], ticks:[{x, label}]}
   */
  Solid.bandPath = function (bandsFn, path = ["L", "G", "X", "U|K", "G"], nper = 20, nb = 8) {
    const xs = [], Es = [], ticks = [], nm = (l) => (l === "G" ? "Γ" : l);
    let acc = 0;
    for (let s = 0; s < path.length - 1; s++) {
      const a = path[s].split("|"), b = path[s + 1].split("|");
      const A = Solid.kpoints[a[a.length - 1]], B = Solid.kpoints[b[0]], L = V.len(V.sub(B, A));
      ticks.push({ x: acc, label: a.map(nm).join(",") });
      for (let i = s === 0 ? 0 : 1; i <= nper; i++) {
        const t = i / nper, k = V.add(A, V.mul(V.sub(B, A), t));
        xs.push(acc + t * L); Es.push(bandsFn(k).slice(0, nb));
      }
      acc += L;
    }
    ticks.push({ x: acc, label: path[path.length - 1].split("|").map(nm).join(",") });
    return { x: xs, E: Es, ticks };
  };
  /** 포물선 띠 유효 질량에서 E(k) = ħ²k²/2m* (k nm⁻¹ → eV) */
  Solid.parabolic = (k, m) => (0.0380998212 / m) * k * k;
  /** 등방 비포물선(카인) 띠: E(1+αE) = ħ²k²/2m* → E */
  Solid.kane = (k, m, alpha) => { const g = Solid.parabolic(k, m); return alpha > 0 ? (-1 + Math.sqrt(1 + 4 * alpha * g)) / (2 * alpha) : g; };
  /** 유효 질량 조합: 상태 밀도 질량 m_dos = g^{2/3}(ml mt²)^{1/3}, 전도도 질량 3/(1/ml + 2/mt) */
  Solid.mDOS = (ml, mt, g = 6) => Math.pow(g, 2 / 3) * Math.cbrt(ml * mt * mt);
  Solid.mCond = (ml, mt) => 3 / (1 / ml + 2 / mt);

  /* ------------------------------------------------------------ 반도체 캐리어 통계 (cm⁻³) */
  /**
   * 반도체 물성 (300 K): Eg0·alpha·beta(바르시니), Nc·Nv(cm⁻³, 300 K), er, chi(전자 친화도), mn·mp(전도도 질량)
   * Si의 Nc·Nv는 서로 맞는 값(Green 1990)이고, 바르시니 Eg(300 K) = 1.125 eV와 함께 ni(300 K) ≈ 1.07e10이 계산된다.
   */
  Solid.semis = {
    Si: { ko: "실리콘", Eg300: 1.124, Eg0: 1.170, alpha: 4.73e-4, beta: 636, Nc: 2.86e19, Nv: 3.10e19, er: 11.7, chi: 4.05, mnc: 0.26, mpc: 0.39, gap: "간접" },
    Ge: { ko: "저마늄", Eg300: 0.661, Eg0: 0.7437, alpha: 4.774e-4, beta: 235, Nc: 1.04e19, Nv: 6.0e18, er: 16.0, chi: 4.0, mnc: 0.12, mpc: 0.21, gap: "간접" },
    GaAs: { ko: "갈륨 비소", Eg300: 1.424, Eg0: 1.519, alpha: 5.405e-4, beta: 204, Nc: 4.7e17, Nv: 9.0e18, er: 12.9, chi: 4.07, mnc: 0.067, mpc: 0.34, gap: "직접" },
    GaN: { ko: "질화 갈륨", Eg300: 3.39, Eg0: 3.47, alpha: 7.7e-4, beta: 600, Nc: 2.3e18, Nv: 4.6e19, er: 8.9, chi: 4.1, mnc: 0.2, mpc: 1.0, gap: "직접" },
    SiC: { ko: "탄화 규소(4H)", Eg300: 3.26, Eg0: 3.315, alpha: 3.3e-4, beta: 240, Nc: 1.7e19, Nv: 2.5e19, er: 9.7, chi: 3.7, mnc: 0.37, mpc: 1.0, gap: "간접" },
  };
  const S_ = (m) => (typeof m === "string" ? Solid.semis[m] : m);
  /** 바르시니 Eg(T) = Eg0 − αT²/(T+β) */
  Solid.Eg = (m, T = 300) => { const s = S_(m); return s.Eg0 - (s.alpha * T * T) / (T + s.beta); };
  /** 유효 상태 밀도 Nc(T), Nv(T) ∝ T^{3/2} */
  Solid.Nc = (m, T = 300) => S_(m).Nc * (T / 300) ** 1.5;
  Solid.Nv = (m, T = 300) => S_(m).Nv * (T / 300) ** 1.5;
  /** 진성 캐리어 농도 ni = √(NcNv) exp(−Eg/2kT) */
  Solid.ni = (m, T = 300) => Math.sqrt(Solid.Nc(m, T) * Solid.Nv(m, T)) * Math.exp(-Solid.Eg(m, T) / (2 * kT(T)));
  /** 진성 페르미 준위 Ei − Ev = Eg/2 + (kT/2)ln(Nv/Nc) */
  Solid.Ei = (m, T = 300) => Solid.Eg(m, T) / 2 + (kT(T) / 2) * Math.log(Solid.Nv(m, T) / Solid.Nc(m, T));
  /** 실리콘 속 도펀트 이온화 에너지(eV, 띠 끝에서) */
  Solid.dopants = {
    P: { type: "n", E: 0.045, ko: "인" }, As: { type: "n", E: 0.054, ko: "비소" }, Sb: { type: "n", E: 0.039, ko: "안티모니" },
    B: { type: "p", E: 0.045, ko: "붕소" }, Al: { type: "p", E: 0.057, ko: "알루미늄" }, Ga: { type: "p", E: 0.065, ko: "갈륨" }, In: { type: "p", E: 0.16, ko: "인듐" },
  };
  /** 페르미–디랙 적분 F_{1/2}(η) 규격화형 (Q.fdHalf가 있으면 사용, 없으면 근사) */
  const F12 = (eta) => (window.Q && Q.fdHalf ? Q.fdHalf(eta) : eta < -4 ? Math.exp(eta) : 1 / (Math.exp(-eta) + (3 * Math.sqrt(Math.PI / 2) * Math.pow(eta + 2.13 + Math.pow(Math.pow(Math.abs(eta - 2.13), 2.4) + 9.6, 5 / 12), -1.5)) / 4));
  /**
   * 전하 중성 조건을 풀어 페르미 준위를 구한다.
   * o = {mat:"Si", T, Nd, Na, Ed(도너 깊이, Ec 아래 eV), Ea(억셉터 높이, Ev 위), gd=2, ga=4, boltzmann:false}
   * 반환 {EF(Ev 기준 eV), Ec, n, p, NdIon, NaIon, Ei, ni}
   */
  Solid.solveEF = function (o) {
    const m = o.mat || "Si", T = o.T || 300, kt = kT(T), Eg = Solid.Eg(m, T), Nc = Solid.Nc(m, T), Nv = Solid.Nv(m, T);
    const Nd = o.Nd || 0, Na = o.Na || 0, Ed = o.Ed ?? 0.045, Ea = o.Ea ?? 0.045, gd = o.gd || 2, ga = o.ga || 4;
    const fn = o.boltzmann ? Math.exp : F12;
    const nOf = (EF) => Nc * fn((EF - Eg) / kt), pOf = (EF) => Nv * fn(-EF / kt);
    const ndp = (EF) => Nd / (1 + gd * Math.exp((EF - (Eg - Ed)) / kt));
    const nam = (EF) => Na / (1 + ga * Math.exp((Ea - EF) / kt));
    const g = (EF) => pOf(EF) + ndp(EF) - nOf(EF) - nam(EF);
    const EF = Solid.bisect(g, -1.0, Eg + 1.0, 1e-12);
    return { EF, Ec: Eg, Eg, n: nOf(EF), p: pOf(EF), NdIon: ndp(EF), NaIon: nam(EF), Ei: Solid.Ei(m, T), ni: Solid.ni(m, T), kT: kt };
  };
  /** 완전 이온화 근사: n = (Nd−Na)/2 + √(((Nd−Na)/2)² + ni²) */
  Solid.nFull = (Nd, Na, ni) => { const D = (Nd - Na) / 2; return D > 0 ? D + Math.sqrt(D * D + ni * ni) : (ni * ni) / (-D + Math.sqrt(D * D + ni * ni)); };
  /** 슬룻붐 띠 간격 축소 ΔEg = 9 meV·[ln(N/1e17) + √(ln²(N/1e17) + 0.5)] (eV) */
  Solid.bgn = (N) => { const L = Math.log(N / 1e17); return 0.009 * (L + Math.sqrt(L * L + 0.5)); };

  /* ------------------------------------------------------------ 수송 */
  /**
   * 실리콘 이동도(카우기–토머스형, 300 K 매개변수 Sze/Masetti 근사), 온도 의존은 격자 항 (T/300)^−γ
   * Solid.mobility(N_total, "n"|"p", T) → cm²/(V·s)
   */
  Solid.mobParams = {
    n: { max: 1414, min: 68.5, Nref: 9.2e16, a: 0.711, g: 2.42 },
    p: { max: 470.5, min: 44.9, Nref: 2.23e17, a: 0.719, g: 2.2 },
  };
  Solid.mobility = function (N, type = "n", T = 300) {
    const P = Solid.mobParams[type], t = T / 300;
    const mx = P.max * Math.pow(t, -P.g), mn = P.min * Math.pow(t, -0.57), Nr = P.Nref * Math.pow(t, 2.4);
    return mn + (mx - mn) / (1 + Math.pow(N / Nr, P.a * Math.pow(t, -0.146)));
  };
  /** 마티센 규칙 1/μ = Σ 1/μ_i */
  Solid.matthiessen = (...mus) => 1 / mus.reduce((s, m) => s + 1 / m, 0);
  /** 비저항 ρ = 1/(q(nμn + pμp)) (Ω·cm) */
  Solid.resistivity = (n, p, mun, mup) => 1 / (q * (n * mun + p * mup));
  /** 실리콘 도핑 → 비저항(Ω·cm), 완전 이온화·300 K */
  Solid.siResistivity = function (N, type = "n", T = 300) {
    const ni = Solid.ni("Si", T), maj = Solid.nFull(N, 0, ni), mino = (ni * ni) / maj;
    const mu_maj = Solid.mobility(N, type, T), mu_min = Solid.mobility(N, type === "n" ? "p" : "n", T);
    return 1 / (q * (maj * mu_maj + mino * mu_min));
  };
  /** 속도 포화(카우기–토머스): v = μE/(1+(μE/vsat)^β)^{1/β}. E: V/cm, v: cm/s */
  Solid.vsat = { n: 1.07e7, p: 8.37e6 };
  Solid.driftVelocity = (E, mu, type = "n") => { const vs = Solid.vsat[type], b = type === "n" ? 2 : 1, x = (mu * E) / vs; return (mu * E) / Math.pow(1 + Math.pow(x, b), 1 / b); };
  /** 아인슈타인 관계 D = μkT/q (cm²/s) */
  Solid.einstein = (mu, T = 300) => mu * kT(T);
  /** 홀 계수(두 캐리어, 홀 인자 r): R_H = r(pμp² − nμn²)/(q(pμp + nμn)²) (cm³/C) */
  Solid.hallR = (n, p, mun, mup, r = 1) => (r * (p * mup * mup - n * mun * mun)) / (q * (p * mup + n * mun) ** 2);
  /** 열속도 v_th = √(3kT/m*) (cm/s) */
  Solid.vth = (m = 1, T = 300) => Math.sqrt((3 * kB * T) / (m * me)) * 100;

  /* ------------------------------------------------------------ 재결합 */
  /** 대표 재결합 계수: 복사 B (cm³/s), 오제 Cn·Cp (cm⁶/s) — Si(Trupke 2003, Dziewior–Schmid 1977), GaAs */
  Solid.recomb = { Si: { B: 4.73e-15, Cn: 2.8e-31, Cp: 9.9e-32 }, GaAs: { B: 7.2e-10, Cn: 1e-30, Cp: 1e-30 }, Ge: { B: 6.4e-14, Cn: 1e-30, Cp: 1e-30 } };
  /**
   * SRH 순재결합률 U = (np − ni²)/(τp(n + n1) + τn(p + p1)), n1 = ni e^{(Et−Ei)/kT}
   * dE = Et − Ei (eV)
   */
  Solid.srh = (n, p, ni, taun, taup, dE = 0, T = 300) => { const x = dE / kT(T), n1 = ni * Math.exp(x), p1 = ni * Math.exp(-x); return (n * p - ni * ni) / (taup * (n + n1) + taun * (p + p1)); };
  /** 포획 수명 τ = 1/(σ v_th N_t) (σ cm², N_t cm⁻³) */
  Solid.tauCapture = (sigma, Nt, vth = 1e7) => 1 / (sigma * vth * Nt);
  /** 유효 수명(저주입, 다수 캐리어 N): 1/τ = 1/τ_SRH + B N + C N² */
  Solid.tauEff = function (N, type = "n", tauSRH = 1e-3, mat = "Si") {
    const r = Solid.recomb[mat], C = type === "n" ? r.Cn : r.Cp;
    return 1 / (1 / tauSRH + r.B * N + C * N * N);
  };
  /** 확산 길이 L = √(Dτ) (cm) */
  Solid.diffLength = (D, tau) => Math.sqrt(D * tau);
  /** 표면 재결합이 있는 두께 W 웨이퍼의 유효 수명(대칭 표면, 근사): 1/τ = 1/τb + 2S/W */
  Solid.tauSurface = (taub, S, W) => 1 / (1 / taub + (2 * S) / W);

  /* ------------------------------------------------------------ 접합 */
  /**
   * 계단형 pn 접합(완전 이온화). Na(p쪽), Nd(n쪽) cm⁻³, V: 인가 전압(순방향 +)
   * 반환 {Vbi(V), W, xn, xp (cm), Emax (V/cm), C (F/cm²)}
   */
  Solid.pn = function (Na, Nd, V_ = 0, mat = "Si", T = 300) {
    const ni = Solid.ni(mat, T), es = S_(mat).er * eps0 * 1e-2; // F/cm
    const Vbi = kT(T) * Math.log((Na * Nd) / (ni * ni)), Vt = Math.max(1e-6, Vbi - V_);
    const W = Math.sqrt(((2 * es * Vt) / q) * (1 / Na + 1 / Nd));
    const xn = (W * Na) / (Na + Nd), xp = (W * Nd) / (Na + Nd);
    return { Vbi, W, xn, xp, Emax: (q * Nd * xn) / es, C: es / W, es };
  };
  /** 이상 다이오드 포화 전류 밀도 J0 = q ni²(Dn/(Ln Na) + Dp/(Lp Nd)) (A/cm²) */
  Solid.J0 = (Na, Nd, taun = 1e-6, taup = 1e-6, mat = "Si", T = 300) => {
    const ni = Solid.ni(mat, T), mun = Solid.mobility(Na, "n", T), mup = Solid.mobility(Nd, "p", T);
    const Dn = Solid.einstein(mun, T), Dp = Solid.einstein(mup, T);
    return q * ni * ni * (Dn / (Math.sqrt(Dn * taun) * Na) + Dp / (Math.sqrt(Dp * taup) * Nd));
  };
  /** 쇼트키 장벽: 이상(쇼트키–모트) φB = φm − χ, 페르미 준위 고정 φB = S(φm − χ) + (1−S)(Eg − φ0) (n형, eV) */
  Solid.schottky = (phiM, chi, S = 1, Eg = 1.12, phi0 = 0.3) => S * (phiM - chi) + (1 - S) * (Eg - phi0);
  /** 열전자 방출 J = A* T² e^{−φB/kT}(e^{V/kT} − 1) (A/cm²). Si n형 A* ≈ 112, p형 ≈ 32 */
  Solid.thermionic = (phiB, V_, T = 300, Astar = 112) => Astar * T * T * Math.exp(-phiB / kT(T)) * Math.expm1(V_ / kT(T));
  /** 터널링 특성 에너지 E00 = (qħ/2)√(N/(m* εs)) (eV). N cm⁻³ */
  Solid.E00 = (N, m = 0.26, er = 11.7) => ((hbar / 2) * Math.sqrt((N * 1e6) / (m * me * er * eps0)));
  /**
   * 접촉 비저항 ρc (Ω·cm²) — 통합 근사 ρc ≈ (k/qA*T)·exp(φB/E0), E0 = E00·coth(E00/kT).
   * E00 ≪ kT이면 열전자 방출(TE), E00 ≫ kT이면 전계 방출(FE)로 넘어간다. 앞 인자는 단순화 — 경향 보기용.
   */
  Solid.contactRho = function (phiB, N, T = 300, m = 0.26, er = 11.7, Astar = 112) {
    const kt = kT(T), E00 = Solid.E00(N, m, er), E0 = E00 / Math.tanh(E00 / kt);
    const mode = E00 < 0.2 * kt ? "TE" : E00 > 2 * kt ? "FE" : "TFE";
    return { mode, rc: (kBev / (Astar * T)) * Math.exp(phiB / E0), E00, E0 };
  };
  /** 앤더슨 규칙 이종 접합 오프셋: ΔEc = χ1 − χ2, ΔEv = (χ2 + Eg2) − (χ1 + Eg1) */
  Solid.anderson = (chi1, Eg1, chi2, Eg2) => ({ dEc: chi1 - chi2, dEv: chi2 + Eg2 - (chi1 + Eg1) });
  /**
   * MOS 반도체 표면 전하(p형, 볼츠만): Qs(ψs) = −sgn(ψs)·√(2εs kT Na)·F, F = √[(e^{−βψ}+βψ−1) + (n0/p0)(e^{βψ}−βψ−1)]
   * psi: V, Na: cm⁻³ → C/cm²
   */
  Solid.mosQs = function (psi, Na, mat = "Si", T = 300) {
    const kt = kT(T), b = 1 / kt, ni = Solid.ni(mat, T), es = S_(mat).er * eps0 * 1e-2;
    const F = Math.sqrt(Math.max(0, Math.exp(-b * psi) + b * psi - 1 + ((ni * ni) / (Na * Na)) * (Math.exp(b * psi) - b * psi - 1)));
    return -Math.sign(psi) * Math.sqrt(2 * es * kt * q * Na) * F;
  };

  /* ------------------------------------------------------------ 유전·광학 */
  /** 로런츠 진동자 유전 함수 ε(ω) = ε∞ + Σ f_j ωp²/(ω0j² − ω² − iγjω). 모든 진동수는 같은 단위(eV 권장). 반환 {re, im} */
  Solid.lorentz = function (w, osc, einf = 1) {
    let re = einf, im = 0;
    for (const o of osc) {
      const d = o.w0 * o.w0 - w * w, den = d * d + (o.g * w) ** 2, A = o.S ?? (o.f || 1) * (o.wp || 1) ** 2;
      re += (A * d) / den; im += (A * o.g * w) / den;
    }
    return { re, im };
  };
  /** 드루드 유전 함수 ε = ε∞ − ωp²/(ω² + iγω) */
  Solid.drudeEps = (w, wp, g, einf = 1) => { const den = w * w * w * w + (g * w) ** 2; return { re: einf - (wp * wp * w * w) / den, im: (wp * wp * g * w) / den }; };
  /** 플라스마 에너지 ħωp = ħ√(ne²/(ε0 m)) (eV). n: m⁻³ */
  Solid.plasmaE = (n, m = 1, einf = 1) => (hbar * Math.sqrt((n * q * q) / (einf * eps0 * m * me))) / q;
  /** 복소 유전 함수 → 복소 굴절률 n, κ */
  Solid.nk = (eps) => { const m = Math.hypot(eps.re, eps.im); return { n: Math.sqrt((m + eps.re) / 2), k: Math.sqrt(Math.max(0, (m - eps.re) / 2)) }; };
  /** 흡수 계수 α = 4πκ/λ (λ nm → cm⁻¹) */
  Solid.alphaAbs = (k, lambdaNm) => (4 * Math.PI * k) / (lambdaNm * 1e-7);
  /** 수직 입사 반사율 R = ((n−1)² + κ²)/((n+1)² + κ²) */
  Solid.reflectance = (n, k) => ((n - 1) ** 2 + k * k) / ((n + 1) ** 2 + k * k);
  /** 클라우지우스–모소티: (εr − 1)/(εr + 2) = Nα/(3ε0) → εr. N: m⁻³, alpha: C·m²/V */
  Solid.clausiusMossotti = (N, alpha) => { const x = (N * alpha) / (3 * eps0); return (1 + 2 * x) / (1 - x); };
  /** 역으로 εr → 분극률 α = (3ε0/N)(εr−1)/(εr+2) */
  Solid.polarizability = (N, er) => ((3 * eps0) / N) * ((er - 1) / (er + 2));
  /** 엑시톤(수소 모형) 결합 에너지(meV)와 반지름(nm): μ(환산 질량), εr */
  Solid.exciton = (mu, er) => ({ Eb: (13605.693 * mu) / (er * er), aB: (0.0529177 * er) / mu });
  /** 란다우 강유전체(2차 전이) 자유 에너지 F = a(T−Tc)P² + bP⁴ − EP (임의 단위) */
  Solid.landauF = (P, T, Tc, a = 1, b = 1, E = 0, c = 0) => a * (T - Tc) * P * P + b * P ** 4 + c * P ** 6 - E * P;

  /* ------------------------------------------------------------ 자성 */
  /** 브릴루앙 함수 B_J(x) */
  Solid.brillouin = function (J, x) {
    if (Math.abs(x) < 1e-6) return ((J + 1) / (3 * J)) * x;
    const a = (2 * J + 1) / (2 * J), b = 1 / (2 * J);
    const coth = (y) => (Math.abs(y) > 20 ? Math.sign(y) : 1 / Math.tanh(y));
    return a * coth(a * x) - b * coth(b * x);
  };
  /** 랑주뱅 함수 L(x) = coth x − 1/x */
  Solid.langevin = (x) => (Math.abs(x) < 1e-4 ? x / 3 : 1 / Math.tanh(x) - 1 / x);
  /**
   * 평균장 강자성: m = B_J( (3J/(J+1)) (Tc/T) m + g J μB B/(kT) ) 자기 일관 풀이 → m = M/Ms (0..1)
   * B: 외부장(T)
   */
  Solid.meanFieldM = function (T, Tc, J = 0.5, B = 0, g = 2) {
    if (T <= 0) return 1;
    const hB = (g * J * muB * B) / (kB * T);
    let m = 1;
    for (let i = 0; i < 2000; i++) {
      const nm = Solid.brillouin(J, ((3 * J) / (J + 1)) * (Tc / T) * m + hB);
      if (Math.abs(nm - m) < 1e-12) { m = nm; break; }
      m = 0.5 * m + 0.5 * nm;
    }
    return m;
  };
  /** 퀴리 상수(SI, 무차원 χ·T): C = μ0 N g²μB² J(J+1)/(3kB). N: m⁻³ */
  Solid.curieC = (N, J = 0.5, g = 2) => (4e-7 * Math.PI * N * g * g * muB * muB * J * (J + 1)) / (3 * kB);
  /** 쥘리에르 TMR = 2P1P2/(1 − P1P2) */
  Solid.julliere = (P1, P2 = P1) => (2 * P1 * P2) / (1 - P1 * P2);
  /**
   * 스토너–울파스 입자: 에너지 e(θ) = sin²θ − 2h cos(θ − ψ) (h = H/H_K, ψ: 장과 용이축 각도, rad).
   * 이전 θ에서 출발해 국소 최소로 내려간다(히스테리시스 재현). 반환 θ
   */
  Solid.swRelax = function (theta, hh, psi) {
    for (let i = 0; i < 4000; i++) {
      const dE = Math.sin(2 * theta) + 2 * hh * Math.sin(theta - psi);
      theta -= 0.05 * dE;
      if (Math.abs(dE) < 1e-9) break;
    }
    return theta;
  };
  /** 열 안정성 지수 Δ = K_u V/(k_B T) (Ku: J/m³, V: m³) */
  Solid.thermalStability = (Ku, Vol, T = 300) => (Ku * Vol) / (kB * T);

  /* ------------------------------------------------------------ 저차원·나노 */
  /** 양자 전도도 G0 = 2e²/h (S) */
  Solid.G0 = (2 * q * q) / h;
  /** 란다우어: G = G0 Σ T_i */
  Solid.landauer = (Ts) => Solid.G0 * (Array.isArray(Ts) ? Ts.reduce((s, t) => s + t, 0) : Ts);
  /**
   * 무한 우물 부띠가 있는 상태 밀도(eV⁻¹ nm⁻d, 스핀 포함):
   * 2D(두께 Lz 우물, 반환 단위 eV⁻¹nm⁻²), 1D(Ly×Lz 선, eV⁻¹nm⁻¹), 3D 벌크(eV⁻¹nm⁻³)
   */
  Solid.dosQW = function (E, Lz, m = 1, nsub = 10) {
    const C = 0.0380998212 / m; let s = 0; // 부띠 하나당 m*÷(πħ²) = 1/(2πC)
    for (let n = 1; n <= nsub; n++) if (E >= C * (n * Math.PI / Lz) ** 2) s += 1 / (2 * Math.PI * C);
    return s;
  };
  Solid.dosQWire = function (E, Ly, Lz, m = 1, nsub = 8) {
    const C = 0.0380998212 / m; let s = 0;
    for (let i = 1; i <= nsub; i++) for (let j = 1; j <= nsub; j++) {
      const E0 = C * ((i * Math.PI / Ly) ** 2 + (j * Math.PI / Lz) ** 2);
      if (E > E0) s += 1 / (Math.PI * Math.sqrt(C * (E - E0)));
    }
    return s;
  };
  Solid.dosBulk = (E, m = 1) => { const C = 0.0380998212 / m; return E <= 0 ? 0 : (1 / (2 * Math.PI * Math.PI)) * Math.pow(1 / C, 1.5) * Math.sqrt(E); };
  /** 2DEG 면밀도 n_s = (m kT/πħ²) Σ ln(1 + e^{(EF−En)/kT}) (cm⁻²). En: 부띠 에너지 배열(eV) */
  Solid.ns2D = function (EF, En, m = 0.19, T = 300, gv = 1) {
    const D = (gv * m * me * q) / (Math.PI * hbar * hbar) * 1e-4; // cm⁻² eV⁻¹ (스핀 포함)
    return En.reduce((s, E) => s + D * kT(T) * Math.log1p(Math.exp((EF - E) / kT(T))), 0);
  };
  /** 쿨롱 봉쇄 충전 에너지 E_C = e²/2C (eV), C: F */
  Solid.chargingE = (C) => q / (2 * C);
  /** 고립 구의 정전 용량 C = 4πε0εr r (r nm → F) */
  Solid.sphereC = (r, er = 1) => 4 * Math.PI * eps0 * er * r * 1e-9;
  /** 란다우 준위 E_n = ħω_c(n + 1/2), ω_c = eB/m* (eV) */
  Solid.landau = (n, B, m = 1) => (hbar * (q * B) / (m * me) / q) * (n + 0.5);
  /** 홀 저항 평탄 R_xy = h/(νe²) (Ω) */
  Solid.hallPlateau = (nu) => h / (nu * q * q);
  /** 탄도 대 확산: 길이 L과 평균 자유 행로 λ의 투과 T = λ/(λ + L) */
  Solid.transmission = (L, lam) => lam / (lam + L);
})();
