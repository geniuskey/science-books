/* ==========================================================================
   SciBook lib/em.js — 전자기학 라이브러리 (전역 EM)
   복소수, 벡터 미분 연산(수치), 점전하 장과 장선 추적, 등고선, 라플라스·푸아송
   격자 풀이(SOR, 유전율·전도도 지도), 해석 공식(정전 용량·인덕턴스·특성
   임피던스·배선 용량), 비오–사바르(선분·원형 고리), 평면파와 손실 매질,
   플라스마, 프레넬·다층 박막(전달 행렬)·엘립소메트리, 전송선·스미스 차트·
   정합·바운스·TDR·RC 배선, 도파관·공진기·슬랩 도파로, 쌍극자·배열 안테나,
   FDTD(1D·2D), 그리기 도구(열지도·화살표·색 지도).
   의존: engine/js/scibook.js (그리기 함수만)

   단위 관례
   - 기본은 SI: m, s, V, A, C, F, H, Ω, S/m, Hz. 각도는 인자 이름에 deg가 붙으면 도, 아니면 라디안.
   - 광학 박막 함수(EM.fresnel, EM.multilayer, EM.nk)는 파장·두께를 nm로 받는다.
   - 복소 굴절률 N = n + i k (k ≥ 0 이 흡수), 시간 인자 e^{-iωt}.
     회로·전송선·안테나(페이저) 함수는 공학 관례 e^{+jωt}, γ = α + jβ, Z = R + jX.
   - p 편광 반사 계수는 헥트·후지와라 관례: r_p = (N₂cosθ₁ − N₁cosθ₂)/(N₂cosθ₁ + N₁cosθ₂).
     수직 입사에서 r_p = −r_s, 엘립소메트리 ρ = r_p/r_s = tanψ·e^{iΔ}.
   ========================================================================== */
(function () {
  "use strict";
  const EM = (window.EM = {});
  const eps0 = 8.8541878128e-12, mu0 = 1.25663706212e-6, c0 = 299792458, e = 1.602176634e-19, me = 9.1093837015e-31, kB = 1.380649e-23;
  const eta0 = Math.sqrt(mu0 / eps0); // 376.73 Ω
  EM.const = { eps0, mu0, c: c0, e, me, kB, eta0, k: 1 / (4 * Math.PI * eps0) };
  const PI = Math.PI, TAU = 2 * Math.PI;
  EM.deg = (d) => (d * PI) / 180;
  EM.rad2deg = (r) => (r * 180) / PI;

  /* ------------------------------------------------------------ 복소수 {re, im} */
  const cx = (EM.cx = {
    of: (re, im = 0) => ({ re, im }),
    from: (z) => (typeof z === "number" ? { re: z, im: 0 } : z),
    add: (a, b) => (a = cx.from(a), b = cx.from(b), { re: a.re + b.re, im: a.im + b.im }),
    sub: (a, b) => (a = cx.from(a), b = cx.from(b), { re: a.re - b.re, im: a.im - b.im }),
    mul: (a, b) => (a = cx.from(a), b = cx.from(b), { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re }),
    div: (a, b) => { a = cx.from(a); b = cx.from(b); const d = b.re * b.re + b.im * b.im; return { re: (a.re * b.re + a.im * b.im) / d, im: (a.im * b.re - a.re * b.im) / d }; },
    scale: (a, s) => ({ re: a.re * s, im: a.im * s }),
    conj: (a) => ({ re: a.re, im: -a.im }),
    neg: (a) => ({ re: -a.re, im: -a.im }),
    abs: (a) => Math.hypot(a.re, a.im),
    abs2: (a) => a.re * a.re + a.im * a.im,
    arg: (a) => Math.atan2(a.im, a.re),
    polar: (r, th) => ({ re: r * Math.cos(th), im: r * Math.sin(th) }),
    exp: (a) => { a = cx.from(a); const m = Math.exp(a.re); return { re: m * Math.cos(a.im), im: m * Math.sin(a.im) }; },
    /** 주 제곱근(실수부 ≥ 0) */
    sqrt: (a) => { a = cx.from(a); const r = Math.hypot(a.re, a.im); let re = Math.sqrt((r + a.re) / 2), im = Math.sqrt(Math.max(0, (r - a.re) / 2)); if (a.im < 0) im = -im; return { re, im }; },
    sin: (a) => { a = cx.from(a); return { re: Math.sin(a.re) * Math.cosh(a.im), im: Math.cos(a.re) * Math.sinh(a.im) }; },
    cos: (a) => { a = cx.from(a); return { re: Math.cos(a.re) * Math.cosh(a.im), im: -Math.sin(a.re) * Math.sinh(a.im) }; },
    tan: (a) => cx.div(cx.sin(a), cx.cos(a)),
    tanh: (a) => { a = cx.from(a); const t = cx.tan({ re: -a.im, im: a.re }); return { re: t.im, im: -t.re }; }, // tanh z = −i tan(iz)
    inv: (a) => cx.div(1, a),
    str: (a, d = 3) => { const s = (x) => SB && SB.fmt ? SB.fmt(x, d) : x.toPrecision(d); return a.im >= 0 ? `${s(a.re)} + j${s(a.im)}` : `${s(a.re)} − j${s(-a.im)}`; },
  });
  const J = { re: 0, im: 1 };

  /* ------------------------------------------------------------ 3D 벡터 [x,y,z] */
  const v3 = (EM.v3 = {
    add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
    sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
    scale: (a, s) => [a[0] * s, a[1] * s, a[2] * s],
    dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
    cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    norm: (a) => Math.hypot(a[0], a[1], a[2]),
    unit: (a) => { const n = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / n, a[1] / n, a[2] / n]; },
  });

  /* ------------------------------------------------------------ 좌표계 */
  /** 직교 ↔ 원통(ρ, φ, z) ↔ 구(r, θ, φ). 각도 라디안 */
  EM.coords = {
    cart2cyl: ([x, y, z]) => [Math.hypot(x, y), Math.atan2(y, x), z],
    cyl2cart: ([r, p, z]) => [r * Math.cos(p), r * Math.sin(p), z],
    cart2sph: ([x, y, z]) => { const r = Math.hypot(x, y, z); return [r, r ? Math.acos(z / r) : 0, Math.atan2(y, x)]; },
    sph2cart: ([r, t, p]) => [r * Math.sin(t) * Math.cos(p), r * Math.sin(t) * Math.sin(p), r * Math.cos(t)],
    /** 단위 벡터(직교 성분): 원통 [ρ̂, φ̂, ẑ], 구 [r̂, θ̂, φ̂] */
    cylUnits: (p) => [[Math.cos(p), Math.sin(p), 0], [-Math.sin(p), Math.cos(p), 0], [0, 0, 1]],
    sphUnits: (t, p) => [[Math.sin(t) * Math.cos(p), Math.sin(t) * Math.sin(p), Math.cos(t)], [Math.cos(t) * Math.cos(p), Math.cos(t) * Math.sin(p), -Math.sin(t)], [-Math.sin(p), Math.cos(p), 0]],
  };

  /* ------------------------------------------------------------ 수치 미분·적분 */
  /** 기울기 ∇f (f: [x,y,z] → 수), 중앙 차분 */
  EM.grad = function (f, p, h = 1e-4) {
    const g = [0, 0, 0];
    for (let i = 0; i < 3; i++) { const a = p.slice(), b = p.slice(); a[i] += h; b[i] -= h; g[i] = (f(a) - f(b)) / (2 * h); }
    return g;
  };
  /** 발산 ∇·F (F: [x,y,z] → [Fx,Fy,Fz]) */
  EM.div = function (F, p, h = 1e-4) {
    let s = 0;
    for (let i = 0; i < 3; i++) { const a = p.slice(), b = p.slice(); a[i] += h; b[i] -= h; s += (F(a)[i] - F(b)[i]) / (2 * h); }
    return s;
  };
  /** 회전 ∇×F */
  EM.curl = function (F, p, h = 1e-4) {
    const d = (i, j) => { const a = p.slice(), b = p.slice(); a[j] += h; b[j] -= h; return (F(a)[i] - F(b)[i]) / (2 * h); }; // ∂F_i/∂x_j
    return [d(2, 1) - d(1, 2), d(0, 2) - d(2, 0), d(1, 0) - d(0, 1)];
  };
  /** 라플라시안 ∇²f */
  EM.laplacian = function (f, p, h = 1e-3) {
    const f0 = f(p); let s = 0;
    for (let i = 0; i < 3; i++) { const a = p.slice(), b = p.slice(); a[i] += h; b[i] -= h; s += (f(a) - 2 * f0 + f(b)) / (h * h); }
    return s;
  };
  /** 심프슨 적분 */
  EM.integrate = function (f, a, b, n = 200) {
    if (n % 2) n++;
    const dx = (b - a) / n; let s = f(a) + f(b);
    for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * dx);
    return (s * dx) / 3;
  };
  /** 선적분 ∫ F·dl, 경로 r(t) (t0→t1) */
  EM.lineIntegral = function (F, r, t0, t1, n = 400) {
    const h = (t1 - t0) / n; let s = 0;
    for (let i = 0; i < n; i++) {
      const ta = t0 + i * h, tb = ta + h, tm = ta + h / 2, ra = r(ta), rb = r(tb), Fm = F(r(tm));
      s += v3.dot(Fm, v3.sub(rb, ra));
    }
    return s;
  };
  /** 면적분(선속) ∬ F·dA, 곡면 S(u,v) — dA = ∂S/∂u × ∂S/∂v (방향은 매개 변수 순서) */
  EM.flux = function (F, S, u0, u1, v0, v1, nu = 60, nv = 60) {
    const du = (u1 - u0) / nu, dv = (v1 - v0) / nv; let s = 0;
    for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
      const u = u0 + (i + 0.5) * du, v = v0 + (j + 0.5) * dv, p = S(u, v);
      const Su = v3.scale(v3.sub(S(u + du / 2, v), S(u - du / 2, v)), 1 / du), Sv = v3.scale(v3.sub(S(u, v + dv / 2), S(u, v - dv / 2)), 1 / dv);
      s += v3.dot(F(p), v3.cross(Su, Sv)) * du * dv;
    }
    return s;
  };
  /** 이분법 */
  EM.bisect = function (f, lo, hi, tol = 1e-12, it = 200) {
    let flo = f(lo);
    for (let i = 0; i < it; i++) { const m = 0.5 * (lo + hi), fm = f(m); if ((fm > 0) === (flo > 0)) { lo = m; flo = fm; } else hi = m; if (Math.abs(hi - lo) < tol) break; }
    return 0.5 * (lo + hi);
  };
  /** 삼중 대각 연립 방정식(토마스): a 아래, b 대각, c 위, d 오른쪽 */
  EM.tridiag = function (a, b, c, d) {
    const n = b.length, cp = new Float64Array(n), dp = new Float64Array(n), x = new Float64Array(n);
    cp[0] = c[0] / b[0]; dp[0] = d[0] / b[0];
    for (let i = 1; i < n; i++) { const m = b[i] - a[i] * cp[i - 1]; cp[i] = c[i] / m; dp[i] = (d[i] - a[i] * dp[i - 1]) / m; }
    x[n - 1] = dp[n - 1];
    for (let i = n - 2; i >= 0; i--) x[i] = dp[i] - cp[i] * x[i + 1];
    return x;
  };
  /** 실수 배열 고속 푸리에 변환(제자리, 길이 2^n): re, im Float64Array, inverse=true면 역변환(1/N 포함) */
  EM.fft = function (re, im, inverse = false) {
    const n = re.length;
    for (let i = 1, j = 0; i < n; i++) { let bit = n >> 1; for (; j & bit; bit >>= 1) j ^= bit; j ^= bit; if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; } }
    for (let len = 2; len <= n; len <<= 1) {
      const ang = (inverse ? 2 : -2) * PI / len, wr = Math.cos(ang), wi = Math.sin(ang);
      for (let i = 0; i < n; i += len) {
        let cr = 1, ci = 0;
        for (let k = 0; k < len / 2; k++) {
          const ar = re[i + k], ai = im[i + k], br = re[i + k + len / 2] * cr - im[i + k + len / 2] * ci, bi = re[i + k + len / 2] * ci + im[i + k + len / 2] * cr;
          re[i + k] = ar + br; im[i + k] = ai + bi; re[i + k + len / 2] = ar - br; im[i + k + len / 2] = ai - bi;
          const t = cr * wr - ci * wi; ci = cr * wi + ci * wr; cr = t;
        }
      }
    }
    if (inverse) for (let i = 0; i < n; i++) { re[i] /= n; im[i] /= n; }
  };

  /* ------------------------------------------------------------ 특수 함수 */
  /** 르장드르 다항식 P_l(x) */
  EM.legendre = function (l, x) { if (l === 0) return 1; let p0 = 1, p1 = x; for (let n = 2; n <= l; n++) { const p2 = ((2 * n - 1) * x * p1 - (n - 1) * p0) / n; p0 = p1; p1 = p2; } return p1; };
  /** 베셀 함수 J_n(x) (정수 n, 적분 표현) */
  EM.besselJ = function (n, x) { const N = Math.max(200, Math.ceil(Math.abs(x)) * 20); return EM.integrate((t) => Math.cos(n * t - x * Math.sin(t)), 0, PI, N) / PI; };
  /** 완전 타원 적분 K(m), E(m) — 매개 변수 m = k² (AGM) */
  EM.ellipK = function (m) { let a = 1, b = Math.sqrt(1 - m); for (let i = 0; i < 30; i++) { const an = (a + b) / 2; b = Math.sqrt(a * b); a = an; if (Math.abs(a - b) < 1e-15) break; } return PI / (2 * a); };
  EM.ellipE = function (m) {
    let a = 1, b = Math.sqrt(1 - m), cc = Math.sqrt(m), s = 0.5 * cc * cc, p = 1;
    for (let i = 0; i < 30; i++) { const an = (a + b) / 2; cc = (a - b) / 2; b = Math.sqrt(a * b); a = an; p *= 2; s += 0.5 * p * cc * cc; if (Math.abs(cc) < 1e-15) break; }
    return (PI / (2 * a)) * (1 - s);
  };

  /* ------------------------------------------------------------ 점전하·선전하 */
  /**
   * 점전하 [{x, y, z=0, q}] (q는 C, 위치 m)의 전기장 [Ex,Ey,Ez] (V/m)과 전위 (V).
   * 2D 그림용으로 단위를 생략하려면 opts.k = 1 (그러면 q/r² 그대로).
   */
  EM.Epoint = function (charges, p, o = {}) {
    const k = o.k ?? EM.const.k, soft = o.soft ?? 0; let ex = 0, ey = 0, ez = 0;
    for (const c of charges) {
      const dx = p[0] - c.x, dy = p[1] - c.y, dz = (p[2] || 0) - (c.z || 0), r2 = dx * dx + dy * dy + dz * dz + soft, r3 = r2 * Math.sqrt(r2);
      ex += (k * c.q * dx) / r3; ey += (k * c.q * dy) / r3; ez += (k * c.q * dz) / r3;
    }
    return [ex, ey, ez];
  };
  EM.Vpoint = function (charges, p, o = {}) {
    const k = o.k ?? EM.const.k, soft = o.soft ?? 0; let v = 0;
    for (const c of charges) v += (k * c.q) / Math.sqrt((p[0] - c.x) ** 2 + (p[1] - c.y) ** 2 + ((p[2] || 0) - (c.z || 0)) ** 2 + soft);
    return v;
  };
  /** 무한 선전하 [{x, y, lam}] (C/m)의 2D 장과 전위(기준 r0=1 m) */
  EM.Eline = function (lines, x, y) {
    let ex = 0, ey = 0;
    for (const L of lines) { const dx = x - L.x, dy = y - L.y, r2 = dx * dx + dy * dy || 1e-30; const f = L.lam / (2 * PI * eps0 * r2); ex += f * dx; ey += f * dy; }
    return [ex, ey];
  };
  EM.Vline = function (lines, x, y, r0 = 1) { let v = 0; for (const L of lines) v -= (L.lam / (2 * PI * eps0)) * Math.log(Math.hypot(x - L.x, y - L.y) / r0); return v; };
  /** 쌍극자 p (C·m) 가 원점에서 z 방향일 때 구좌표 장: {Er, Et, V} */
  EM.dipoleField = function (p, r, theta) { const k = EM.const.k; return { Er: (2 * k * p * Math.cos(theta)) / r ** 3, Et: (k * p * Math.sin(theta)) / r ** 3, V: (k * p * Math.cos(theta)) / r ** 2 }; };

  /**
   * 일반 장선 추적(RK4, 방향만 사용). field(x, y) → [Fx, Fy].
   * opts: step, maxSteps, bounds [x0,x1,y0,y1], stop(x,y)→true면 정지, dir(+1/−1)
   */
  EM.trace = function (field, start, o = {}) {
    const step = o.step || 0.02, maxN = o.maxSteps || 2000, b = o.bounds, dir = o.dir || 1;
    const f = (p) => { const F = field(p[0], p[1]); const L = Math.hypot(F[0], F[1]); return L > 0 && isFinite(L) ? [(dir * F[0]) / L, (dir * F[1]) / L] : [0, 0]; };
    let p = start.slice(0, 2); const pts = [p];
    for (let s = 0; s < maxN; s++) {
      const k1 = f(p), k2 = f([p[0] + (step / 2) * k1[0], p[1] + (step / 2) * k1[1]]), k3 = f([p[0] + (step / 2) * k2[0], p[1] + (step / 2) * k2[1]]), k4 = f([p[0] + step * k3[0], p[1] + step * k3[1]]);
      const dx = (step / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]), dy = (step / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]);
      if (dx === 0 && dy === 0) break;
      p = [p[0] + dx, p[1] + dy]; pts.push(p);
      if (b && (p[0] < b[0] || p[0] > b[1] || p[1] < b[2] || p[1] > b[3])) break;
      if (o.stop && o.stop(p[0], p[1])) break;
    }
    return pts;
  };
  /**
   * 점전하 장선: 양전하에서 |q|에 비례하는 개수로 출발해 음전하나 경계에서 끝난다.
   * 음전하 몫이 더 크면 남는 선은 음전하에서 거꾸로 추적한다. charges: [{x,y,q}] (q 상대값)
   * opts: perUnit(|q|=1당 선 개수, 기본 8), step, bounds, r0(출발 반지름)
   */
  EM.chargeLines = function (charges, o = {}) {
    const per = o.perUnit || 8, r0 = o.r0 || 0.05, bounds = o.bounds || [-10, 10, -10, 10], step = o.step || 0.03;
    const field = (x, y) => EM.Epoint(charges, [x, y, 0], { k: 1 });
    const near = (x, y, self) => charges.some((d) => d !== self && Math.hypot(x - d.x, y - d.y) < r0 * 0.9);
    const lines = [];
    const qp = charges.filter((c) => c.q > 0).reduce((s, c) => s + c.q, 0), qn = -charges.filter((c) => c.q < 0).reduce((s, c) => s + c.q, 0);
    const sources = qp >= qn ? charges.filter((c) => c.q > 0) : charges.filter((c) => c.q < 0);
    const dir = qp >= qn ? 1 : -1;
    sources.forEach((c) => {
      const n = Math.max(2, Math.round(per * Math.abs(c.q)));
      for (let i = 0; i < n; i++) {
        const a = (TAU * (i + 0.5)) / n;
        lines.push(EM.trace(field, [c.x + r0 * Math.cos(a), c.y + r0 * Math.sin(a)], { step, bounds, dir, maxSteps: o.maxSteps || 3000, stop: (x, y) => near(x, y, c) }));
      }
    });
    return lines;
  };

  /* ------------------------------------------------------------ 등고선 (마칭 스퀘어) */
  /**
   * 격자 값 등고선. vals: 길이 nx·ny (행 우선, j*nx+i), levels: 수 배열.
   * 반환 [{level, segs:[[i1,j1,i2,j2], …]}] — 격자 좌표(소수)
   */
  EM.contourGrid = function (vals, nx, ny, levels) {
    return levels.map((lv) => {
      const segs = [];
      for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
        const a = vals[j * nx + i], b = vals[j * nx + i + 1], c = vals[(j + 1) * nx + i + 1], d = vals[(j + 1) * nx + i];
        if (!(isFinite(a) && isFinite(b) && isFinite(c) && isFinite(d))) continue;
        const idx = (a > lv ? 1 : 0) | (b > lv ? 2 : 0) | (c > lv ? 4 : 0) | (d > lv ? 8 : 0);
        if (idx === 0 || idx === 15) continue;
        const t = (p, q) => (lv - p) / (q - p);
        const eB = [i + t(a, b), j], eR = [i + 1, j + t(b, c)], eT = [i + t(d, c), j + 1], eL = [i, j + t(a, d)];
        const add = (p, q) => segs.push([p[0], p[1], q[0], q[1]]);
        switch (idx) {
          case 1: case 14: add(eL, eB); break;
          case 2: case 13: add(eB, eR); break;
          case 3: case 12: add(eL, eR); break;
          case 4: case 11: add(eR, eT); break;
          case 6: case 9: add(eB, eT); break;
          case 7: case 8: add(eL, eT); break;
          case 5: { const m = (a + b + c + d) / 4; if (m > lv) { add(eL, eT); add(eB, eR); } else { add(eL, eB); add(eR, eT); } break; }
          case 10: { const m = (a + b + c + d) / 4; if (m > lv) { add(eL, eB); add(eR, eT); } else { add(eL, eT); add(eB, eR); } break; }
        }
      }
      return { level: lv, segs };
    });
  };
  /** 함수 등고선 f(x,y) on [x0,x1,y0,y1] → 세계 좌표 segs */
  EM.contour = function (f, b, nx, ny, levels) {
    const vals = new Float64Array(nx * ny);
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) vals[j * nx + i] = f(b[0] + ((b[1] - b[0]) * i) / (nx - 1), b[2] + ((b[3] - b[2]) * j) / (ny - 1));
    const sx = (b[1] - b[0]) / (nx - 1), sy = (b[3] - b[2]) / (ny - 1);
    return EM.contourGrid(vals, nx, ny, levels).map((L) => ({ level: L.level, segs: L.segs.map((s) => [b[0] + s[0] * sx, b[2] + s[1] * sy, b[0] + s[2] * sx, b[2] + s[3] * sy]) }));
  };

  /* ------------------------------------------------------------ 라플라스·푸아송 격자 풀이 */
  /**
   * 2D 격자 풀이기: ∇·(ε_r ∇φ) = −ρ/ε₀ (또는 conduction 모드에서 ∇·(σ∇φ) = 0).
   * EM.grid(nx, ny, {h: 격자 간격 m, edges: {left,right,top,bottom: 'neumann'|'dirichlet'}})
   *   .rect(i0,j0,i1,j1, V) / .disk(ci,cj,r,V) / .fix(i,j,V) : 전극(고정 전위), 전극 번호 tag 지정 가능
   *   .material(i0,j0,i1,j1, epsr) : 유전율(전도 모드면 전도도) 지도
   *   .charge(i,j, rho) : 전하 밀도 C/m³
   *   .solve({tol, maxIter, omega}) → {iters, resid} ; .iterate(n) → 최대 변화량(애니메이션용)
   *   .field() → {Ex, Ey} (V/m, Float64Array) ; .chargeOn(tag) → 단위 길이 전하 C/m (2D)
   *   .energy() → 단위 길이 정전 에너지 J/m ; .at(x,y) 보간
   * 인덱스: j*nx + i, j=0이 아래(y 증가 위쪽).
   */
  EM.grid = function (nx, ny, o = {}) {
    const N = nx * ny, h = o.h || 1;
    const phi = new Float64Array(N), fixed = new Uint8Array(N), tag = new Int16Array(N).fill(-1), eps = new Float64Array(N).fill(1), rho = new Float64Array(N);
    const edges = Object.assign({ left: "dirichlet", right: "dirichlet", top: "dirichlet", bottom: "dirichlet" }, o.edges || {});
    const G = { nx, ny, h, phi, fixed, tag, eps, rho, edges };
    const idx = (i, j) => j * nx + i;
    G.fix = (i, j, V, t = 0) => { const k = idx(i, j); phi[k] = V; fixed[k] = 1; tag[k] = t; return G; };
    G.rect = (i0, j0, i1, j1, V, t = 0) => { for (let j = Math.max(0, j0); j <= Math.min(ny - 1, j1); j++) for (let i = Math.max(0, i0); i <= Math.min(nx - 1, i1); i++) G.fix(i, j, V, t); return G; };
    G.disk = (ci, cj, r, V, t = 0) => { for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) if ((i - ci) ** 2 + (j - cj) ** 2 <= r * r) G.fix(i, j, V, t); return G; };
    G.material = (i0, j0, i1, j1, er) => { for (let j = Math.max(0, j0); j <= Math.min(ny - 1, j1); j++) for (let i = Math.max(0, i0); i <= Math.min(nx - 1, i1); i++) eps[idx(i, j)] = er; return G; };
    G.charge = (i, j, r) => { rho[idx(i, j)] = r; return G; };
    G.clear = () => { phi.fill(0); fixed.fill(0); tag.fill(-1); eps.fill(1); rho.fill(0); return G; };
    G.setV = (t, V) => { for (let k = 0; k < N; k++) if (tag[k] === t && fixed[k]) phi[k] = V; return G; };
    // 링크 계수: 이웃 노드 평균(조화 평균은 계면에서 더 정확)
    const lk = (a, b) => (2 * eps[a] * eps[b]) / (eps[a] + eps[b] || 1);
    const isEdge = (i, j) => i === 0 || j === 0 || i === nx - 1 || j === ny - 1;
    const edgeFixed = (i, j) => (i === 0 && edges.left === "dirichlet") || (i === nx - 1 && edges.right === "dirichlet") || (j === 0 && edges.bottom === "dirichlet") || (j === ny - 1 && edges.top === "dirichlet");
    function relax(k, i, j, w) {
      let s = 0, ws = 0;
      const nb = (ii, jj) => { const kk = idx(ii, jj), c = lk(k, kk); s += c * phi[kk]; ws += c; };
      if (i > 0) nb(i - 1, j); if (i < nx - 1) nb(i + 1, j); if (j > 0) nb(i, j - 1); if (j < ny - 1) nb(i, j + 1);
      // 노이만 가장자리: 없는 이웃은 거울상(자기 자신)으로 → 계수 생략과 같다
      const target = (s + (rho[k] * h * h) / eps0) / ws;
      const d = target - phi[k];
      phi[k] += w * d;
      return Math.abs(d);
    }
    G.omega = 2 / (1 + Math.sin(PI / Math.max(nx, ny)));
    G.iterate = function (n = 1, w = G.omega) {
      let md = 0;
      for (let it = 0; it < n; it++) {
        md = 0;
        for (let color = 0; color < 2; color++)
          for (let j = 0; j < ny; j++) for (let i = (j + color) % 2; i < nx; i += 2) {
            const k = idx(i, j);
            if (fixed[k] || (isEdge(i, j) && edgeFixed(i, j))) continue;
            const d = relax(k, i, j, w); if (d > md) md = d;
          }
      }
      return md;
    };
    G.solve = function (opt = {}) {
      const tol = opt.tol ?? 1e-6, maxIter = opt.maxIter ?? 20000; let it = 0, d = Infinity;
      let scale = 0; for (let k = 0; k < N; k++) scale = Math.max(scale, Math.abs(phi[k]));
      scale = scale || 1;
      while (it < maxIter) { d = G.iterate(1, opt.omega ?? G.omega); it++; if (d < tol * scale) break; }
      return { iters: it, resid: d };
    };
    G.field = function () {
      const Ex = new Float64Array(N), Ey = new Float64Array(N);
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const k = idx(i, j);
        const xm = i > 0 ? phi[k - 1] : phi[k], xp = i < nx - 1 ? phi[k + 1] : phi[k], ym = j > 0 ? phi[k - nx] : phi[k], yp = j < ny - 1 ? phi[k + nx] : phi[k];
        const dxn = (i > 0 && i < nx - 1 ? 2 : 1) * h, dyn = (j > 0 && j < ny - 1 ? 2 : 1) * h;
        Ex[k] = -(xp - xm) / dxn; Ey[k] = -(yp - ym) / dyn;
      }
      return { Ex, Ey };
    };
    /** 전극 tag의 단위 길이 전하(2D, C/m): 전극 노드 → 비고정 이웃 링크의 선속 합. 전도 모드면 단위 길이 전류(A/m) */
    G.chargeOn = function (t = 0, conduction = false) {
      let Q = 0;
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const k = idx(i, j); if (!fixed[k] || tag[k] !== t) continue;
        const nb = (ii, jj) => { if (ii < 0 || jj < 0 || ii >= nx || jj >= ny) return; const kk = idx(ii, jj); if (fixed[kk] && tag[kk] === t) return; Q += lk(k, kk) * (phi[k] - phi[kk]); };
        nb(i - 1, j); nb(i + 1, j); nb(i, j - 1); nb(i, j + 1);
      }
      return conduction ? Q : Q * eps0;
    };
    G.energy = function () {
      let W = 0;
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const k = idx(i, j);
        if (i < nx - 1) W += 0.5 * eps0 * lk(k, k + 1) * (phi[k + 1] - phi[k]) ** 2;
        if (j < ny - 1) W += 0.5 * eps0 * lk(k, k + nx) * (phi[k + nx] - phi[k]) ** 2;
      }
      return W;
    };
    G.at = function (x, y) { // 격자 좌표(소수)
      const i = SB_clamp(Math.floor(x), 0, nx - 2), j = SB_clamp(Math.floor(y), 0, ny - 2), fx = x - i, fy = y - j;
      return phi[idx(i, j)] * (1 - fx) * (1 - fy) + phi[idx(i + 1, j)] * fx * (1 - fy) + phi[idx(i, j + 1)] * (1 - fx) * fy + phi[idx(i + 1, j + 1)] * fx * fy;
    };
    return G;
  };
  const SB_clamp = (x, a, b) => Math.min(b, Math.max(a, x));
  /** 1D 푸아송 풀이: d/dx(ε dφ/dx) = −ρ, 양 끝 디리클레. x(m) 균일 격자, epsr·rho 배열 → φ 배열 */
  EM.poisson1D = function (n, L, V0, V1, epsr, rho) {
    const h = L / (n - 1), a = new Float64Array(n), b = new Float64Array(n), c = new Float64Array(n), d = new Float64Array(n);
    const ev = (i) => (typeof epsr === "function" ? epsr(i * h) : epsr ? epsr[i] : 1), rv = (i) => (typeof rho === "function" ? rho(i * h) : rho ? rho[i] : 0);
    b[0] = 1; d[0] = V0; b[n - 1] = 1; d[n - 1] = V1;
    for (let i = 1; i < n - 1; i++) { const em = 0.5 * (ev(i) + ev(i - 1)), ep = 0.5 * (ev(i) + ev(i + 1)); a[i] = em; c[i] = ep; b[i] = -(em + ep); d[i] = (-rv(i) * h * h) / eps0; }
    return EM.tridiag(a, b, c, d);
  };

  /* ------------------------------------------------------------ 정전 용량·저항 공식 */
  EM.cap = {
    /** 평행판 C = ε A/d */
    plate: (epsr, A, d) => (eps0 * epsr * A) / d,
    /** 직렬 유전층 평행판 (층 [{epsr, d}]) 단위 면적 F/m² */
    stack: (layers) => 1 / layers.reduce((s, L) => s + L.d / (eps0 * L.epsr), 0),
    /** 동축 단위 길이 F/m */
    coax: (epsr, a, b) => (TAU * eps0 * epsr) / Math.log(b / a),
    /** 고립 도체 구 */
    sphere: (epsr, a) => 4 * PI * eps0 * epsr * a,
    /** 동심 구 */
    concentric: (epsr, a, b) => (4 * PI * eps0 * epsr) / (1 / a - 1 / b),
    /** 평행 두 선(반지름 a, 중심 거리 D) 단위 길이 */
    twoWire: (epsr, a, D) => (PI * eps0 * epsr) / Math.acosh(D / (2 * a)),
    /** 접지면 위 선(반지름 a, 중심 높이 hgt) 단위 길이 */
    wireOverPlane: (epsr, a, hgt) => (TAU * eps0 * epsr) / Math.acosh(hgt / a),
    /** 등가 산화막 두께 EOT = t·3.9/ε_r (층 [{epsr, d}]) */
    eot: (layers) => layers.reduce((s, L) => s + (L.d * 3.9) / L.epsr, 0),
    /**
     * 배선 단위 길이 용량(사쿠라이–다마루 근사, F/m): 접지면 위 폭 w, 두께 t, 높이 hgt 선 하나
     * 와 같은 층 이웃 선과의 결합(간격 s). 반환 {ground, couple}
     */
    wire: (epsr, w, t, hgt, s) => {
      const e_ = eps0 * epsr;
      const ground = e_ * (1.15 * (w / hgt) + 2.8 * Math.pow(t / hgt, 0.222));
      const couple = s ? e_ * (0.03 * (w / hgt) + 0.83 * (t / hgt) - 0.07 * Math.pow(t / hgt, 0.222)) * Math.pow(s / hgt, -1.34) : 0;
      return { ground, couple };
    },
  };
  EM.res = {
    /** 균일 막대 R = ρL/A */
    bar: (rho, L, A) => (rho * L) / A,
    /** 면저항 Rs = ρ/t, 그리고 정사각형 수 */
    sheet: (rho, t) => rho / t,
    /** 반무한 시료 위 원판 접촉(반지름 a)의 퍼짐 저항 ρ/(4a) */
    spreadDisk: (rho, a) => rho / (4 * a),
    /** 반구 접촉 ρ/(2πa) */
    spreadHemi: (rho, a) => rho / (TAU * a),
    /** 4탐침: 반무한 시료 ρ = 2πs·V/I, 얇은 막 Rs = (π/ln2)·V/I */
    fourPointBulk: (s, V, I) => (TAU * s * V) / I,
    fourPointSheet: (V, I) => (PI / Math.LN2) * (V / I),
    /** 동축 사이 누설(전도도 σ) 단위 길이 저항 Ω·m */
    coaxLeak: (sigma, a, b) => Math.log(b / a) / (TAU * sigma),
  };
  /** 블랙 식 상대 수명: MTTF₂/MTTF₁ = (J₁/J₂)^n · exp(Ea/k·(1/T₂ − 1/T₁)) (Ea eV, T K) */
  EM.blackRatio = (J1, T1, J2, T2, n = 2, Ea = 0.9) => Math.pow(J1 / J2, n) * Math.exp((Ea / 8.617333262e-5) * (1 / T2 - 1 / T1));
  /** 전하 이완 시간 τ = ε/σ */
  EM.relaxTime = (epsr, sigma) => (eps0 * epsr) / sigma;

  /* ------------------------------------------------------------ 정자기 */
  /**
   * 직선 선분 전류(A→B, 전류 I)가 점 P에 만드는 B (T). A,B,P: [x,y,z] m.
   * B = μ₀I/4π · (a×b)(|a|+|b|) / (|a||b|(|a||b| + a·b)),  a = A−P, b = B−P
   */
  EM.Bsegment = function (A, B, P, I) {
    const a = v3.sub(A, P), b = v3.sub(B, P), na = v3.norm(a), nb = v3.norm(b), den = na * nb * (na * nb + v3.dot(a, b));
    if (den < 1e-30) return [0, 0, 0];
    return v3.scale(v3.cross(a, b), ((mu0 * I) / (4 * PI)) * ((na + nb) / den));
  };
  /** 꺾은선 도선 [[x,y,z], …] (closed=true면 닫힌 고리) */
  EM.Bpath = function (pts, P, I, closed = false) {
    let B = [0, 0, 0];
    const n = pts.length - (closed ? 0 : 1);
    for (let i = 0; i < n; i++) B = v3.add(B, EM.Bsegment(pts[i], pts[(i + 1) % pts.length], P, I));
    return B;
  };
  /** 원형 고리(반지름 R, xy 평면, 중심 원점, 전류 I, +z 방향 오른손) 의 정확한 장: 원통 좌표 (ρ, z) → {Brho, Bz} */
  EM.Bloop = function (R, I, rho, z) {
    rho = Math.abs(rho);
    const a2 = (R + rho) ** 2 + z * z, m = (4 * R * rho) / a2, K = EM.ellipK(m), E = EM.ellipE(m), C = (mu0 * I) / (TAU * Math.sqrt(a2));
    const d2 = (R - rho) ** 2 + z * z;
    const Bz = C * (K + ((R * R - rho * rho - z * z) / d2) * E);
    const Brho = rho < 1e-12 * R ? 0 : ((C * z) / rho) * (-K + ((R * R + rho * rho + z * z) / d2) * E);
    return { Brho, Bz };
  };
  /** 고리 축 위 B_z = μ₀IR²/(2(R²+z²)^{3/2}) */
  EM.BloopAxis = (R, I, z) => (mu0 * I * R * R) / (2 * Math.pow(R * R + z * z, 1.5));
  /** 유한 솔레노이드 축 위 B_z (길이 L, 감은 수 N, 반지름 R, 중심 원점) */
  EM.Bsolenoid = (N, L, R, I, z) => { const n = N / L, a = z + L / 2, b = z - L / 2; return ((mu0 * n * I) / 2) * (a / Math.hypot(a, R) - b / Math.hypot(b, R)); };
  /** 무한 직선 전류 [{x, y, I}] (+z 방향)의 2D 장 [Bx, By] */
  EM.Bwires = function (wires, x, y) {
    let bx = 0, by = 0;
    for (const w of wires) { const dx = x - w.x, dy = y - w.y, r2 = dx * dx + dy * dy || 1e-30, f = (mu0 * w.I) / (TAU * r2); bx += -f * dy; by += f * dx; }
    return [bx, by];
  };
  /** 자기 쌍극자 m (A·m², z 방향) 구좌표 장 {Br, Bt} */
  EM.mdipoleField = (m, r, th) => ({ Br: (mu0 * m * 2 * Math.cos(th)) / (4 * PI * r ** 3), Bt: (mu0 * m * Math.sin(th)) / (4 * PI * r ** 3) });
  EM.ind = {
    /** 동축 외부 인덕턴스 단위 길이 μ/2π ln(b/a) (H/m) */
    coax: (a, b, mur = 1) => ((mu0 * mur) / TAU) * Math.log(b / a),
    /** 평행 두 선 단위 길이 μ/π acosh(D/2a) */
    twoWire: (a, D, mur = 1) => ((mu0 * mur) / PI) * Math.acosh(D / (2 * a)),
    /** 긴 솔레노이드 μN²A/L */
    solenoid: (N, A, L, mur = 1) => (mu0 * mur * N * N * A) / L,
    /** 토로이드(직사각 단면 높이 hgt, 안 a, 밖 b) */
    toroid: (N, hgt, a, b, mur = 1) => ((mu0 * mur * N * N * hgt) / TAU) * Math.log(b / a),
    /** 원형 고리(고리 반지름 R, 도선 반지름 a): μ₀R(ln(8R/a) − 2) (외부), internal=true면 +μ₀R/4 */
    loop: (R, a, internal = false) => mu0 * R * (Math.log((8 * R) / a) - 2 + (internal ? 0.25 : 0)),
    /** 도선 내부 인덕턴스 단위 길이 μ/8π (저주파) */
    internal: (mur = 1) => (mu0 * mur) / (8 * PI),
    /** 동축 두 원형 고리 상호 인덕턴스(반지름 a, b, 축 거리 d) — 맥스웰 식 */
    mutualLoops: (a, b, d) => { const m = (4 * a * b) / ((a + b) ** 2 + d * d), k = Math.sqrt(m); return mu0 * Math.sqrt(a * b) * ((2 / k - k) * EM.ellipK(m) - (2 / k) * EM.ellipE(m)); },
    /** 평면 나선 인덕터(수정 휠러 식, 모한 1999): shape 'square'|'hex'|'oct', n 감은 수, dout·din m */
    spiral: (shape, n, dout, din) => { const K = { square: [2.34, 2.75], hex: [2.33, 3.82], oct: [2.25, 3.55] }[shape || "square"]; const davg = (dout + din) / 2, r = (dout - din) / (dout + din); return (K[0] * mu0 * n * n * davg) / (1 + K[1] * r); },
  };
  /** 단순 히스테리시스(탄젠트 쌍곡 두 가지): 상승 가지 M = Ms·tanh((H − Hc)/a), 하강 가지 M = Ms·tanh((H + Hc)/a) */
  EM.hysteresis = (H, branch, Ms, Hc, a) => Ms * Math.tanh((H - (branch > 0 ? Hc : -Hc)) / a);
  /** 자기 회로 릴럭턴스 ℛ = l/(μ A) */
  EM.reluctance = (l, A, mur = 1) => l / (mu0 * mur * A);

  /* ------------------------------------------------------------ 평면파와 매질 */
  /**
   * 매질(ε_r, μ_r, σ S/m)에서 진동수 f(Hz) 평면파 → {gamma, alpha(Np/m), beta(rad/m), eta(복소 Ω), vp, lambda, delta(표피 깊이 m), lossTan}
   * 공학 관례 e^{jωt−γz}, γ = α + jβ = √(jωμ(σ + jωε))
   */
  EM.medium = function (epsr, mur, sigma, f) {
    const w = TAU * f, eps = eps0 * epsr, mu = mu0 * mur;
    const jwmu = { re: 0, im: w * mu }, s = { re: sigma, im: w * eps };
    const gamma = cx.sqrt(cx.mul(jwmu, s)), eta = cx.sqrt(cx.div(jwmu, s));
    return { gamma, alpha: gamma.re, beta: gamma.im, eta, vp: w / gamma.im, lambda: TAU / gamma.im, delta: 1 / gamma.re, lossTan: sigma / (w * eps) };
  };
  /** 양도체 표피 깊이 δ = 1/√(πfμσ) 와 표면 저항 Rs = 1/(σδ) */
  EM.skinDepth = (sigma, f, mur = 1) => 1 / Math.sqrt(PI * f * mu0 * mur * sigma);
  EM.surfaceR = (sigma, f, mur = 1) => Math.sqrt((PI * f * mu0 * mur) / sigma);
  /** 둥근 도선 교류 저항 근사(단위 길이): δ ≥ a 면 직류, 아니면 표피 껍질 1/(σ·2πaδ·(1−δ/2a)) */
  EM.wireRac = (sigma, a, f, mur = 1) => { const d = EM.skinDepth(sigma, f, mur), Rdc = 1 / (sigma * PI * a * a); if (d >= a) return Rdc; return Math.max(Rdc, 1 / (sigma * TAU * a * d * (1 - d / (2 * a)))); };
  /** 둥근 도선 정확한 교류 저항비 R/Rdc (베셀 함수 ber/bei 급수) */
  EM.wireRacExact = function (sigma, a, f, mur = 1) {
    // Z/Rdc = (ka/2)·J0(ka)/J1(ka), k = (1−j)/δ  — 복소 베셀 급수
    const d = EM.skinDepth(sigma, f, mur), k = { re: 1 / d, im: -1 / d }, z = cx.scale(k, a);
    const J = (n, z) => { let term = cx.of(1, 0), s = cx.of(0, 0); const z2 = cx.scale(cx.mul(z, z), -0.25); for (let m = 0; m < 200; m++) { if (m > 0) term = cx.div(cx.mul(term, z2), m * (m + n)); s = cx.add(s, term); if (cx.abs(term) < 1e-16 * cx.abs(s)) break; } let pre = cx.of(1, 0); for (let i = 1; i <= n; i++) pre = cx.scale(cx.mul(pre, z), 0.5 / i); return cx.mul(pre, s); };
    const r = cx.mul(cx.scale(z, 0.5), cx.div(J(0, z), J(1, z)));
    return r.re;
  };
  /** 편광 타원: E = x̂ a cos(ωt − kz) + ŷ b cos(ωt − kz + δ) → {tilt(rad), axial(축비), handed} — IEEE 관례(진행 방향으로 엄지, δ>0 이면 'L') */
  EM.polEllipse = function (a, b, d) {
    const tilt = 0.5 * Math.atan2(2 * a * b * Math.cos(d), a * a - b * b);
    const S0 = a * a + b * b, S3 = 2 * a * b * Math.sin(d);
    const chi = 0.5 * Math.asin(SB_clamp(S3 / S0, -1, 1));
    const axial = Math.abs(Math.tan(chi));
    return { tilt, axial, chi, handed: Math.abs(S3) < 1e-9 * S0 ? "linear" : S3 > 0 ? "L" : "R" };
  };
  /** 플라스마 각진동수 ω_p (rad/s), n (m⁻³) */
  EM.plasmaOmega = (n) => Math.sqrt((n * e * e) / (eps0 * me));
  /** 차단 밀도 n_c (m⁻³) for 진동수 f */
  EM.criticalDensity = (f) => (eps0 * me * (TAU * f) ** 2) / (e * e);
  /** 드루드 상대 유전율 ε(ω) = 1 − ω_p²/(ω(ω − jν)) (공학 관례, ν 충돌 진동수 1/s) → 복소 */
  EM.drude = (wp, w, nu = 0) => cx.sub(1, cx.div(wp * wp, cx.mul({ re: w, im: 0 }, { re: w, im: -nu })));
  /** 데바이 길이 (m): Te eV, n m⁻³ */
  EM.debyeLength = (Te, n) => Math.sqrt((eps0 * Te) / (n * e));

  /* ------------------------------------------------------------ 반사·굴절·박막 (광학 관례, nm) */
  /** cosθ_j = √(1 − (N₀ sinθ₀ / N_j)²), Im ≥ 0 가지 */
  function cosT(N0, s0, Nj, sgn = 1) { // sgn=+1: Im ≥ 0 (N = n+ik), −1: Im ≤ 0 (N = n−ik)
    const s = cx.div(cx.scale(cx.from(N0), s0), Nj), c = cx.sqrt(cx.sub(1, cx.mul(s, s)));
    const bad = sgn > 0 ? c.im < 0 : c.im > 0;
    return bad || (Math.abs(c.im) < 1e-15 && c.re < 0) ? cx.neg(c) : c;
  }
  /**
   * 한 계면 프레넬 계수. N1, N2 복소({re,im}) 또는 실수, th1 라디안.
   * → {rs, rp, ts, tp, Rs, Rp, Ts, Tp, cos2}
   */
  EM.fresnel = function (N1, N2, th1) {
    N1 = cx.from(N1); N2 = cx.from(N2);
    const c1 = cx.from(Math.cos(th1)), c2 = cosT(N1, Math.sin(th1), N2);
    const a = cx.mul(N1, c1), b = cx.mul(N2, c2), cc = cx.mul(N2, c1), d = cx.mul(N1, c2);
    const rs = cx.div(cx.sub(a, b), cx.add(a, b)), ts = cx.div(cx.scale(a, 2), cx.add(a, b));
    const rp = cx.div(cx.sub(cc, d), cx.add(cc, d)), tp = cx.div(cx.scale(a, 2), cx.add(cc, d));
    const ratioS = cx.mul(N2, c2).re / cx.mul(N1, c1).re, ratioP = cx.mul(cx.conj(N2), c2).re / cx.mul(cx.conj(N1), c1).re;
    return { rs, rp, ts, tp, Rs: cx.abs2(rs), Rp: cx.abs2(rp), Ts: ratioS * cx.abs2(ts), Tp: ratioP * cx.abs2(tp), cos2: c2 };
  };
  EM.brewster = (n1, n2) => Math.atan(n2 / n1);
  EM.critical = (n1, n2) => (n2 < n1 ? Math.asin(n2 / n1) : NaN);
  /** 전반사 소산파 침투 깊이(세기 아닌 장 1/e) d = λ/(2π√(n1²sin²θ − n2²)) */
  EM.evanescentDepth = (n1, n2, th, lambda) => lambda / (TAU * Math.sqrt(n1 * n1 * Math.sin(th) ** 2 - n2 * n2));
  /**
   * 다층 박막 특성 행렬(전달 행렬). 입사 매질 N0 → 층들 [{N, d(nm)}] → 기판 Ns, 파장 λ(nm), 입사각 th0(rad).
   * → {rs, rp, ts, tp, Rs, Rp, Ts, Tp, R(비편광), T, psi(°), delta(°, 0–360)}  (rp: 헥트 관례)
   * psi·delta 는 엘립소메트리 표준 관례(N = n − ik)로 낸다: 맨 실리콘 70°에서 Δ ≈ 179°.
   */
  EM.multilayer = function (N0, layers, Ns, lambda, th0 = 0) {
    // 내부 계산은 맥리어드 관례(N = n − ik, e^{j(ωt−kz)})로 하고 결과 r, t는 물리 관례(n + ik)로 되돌린다.
    N0 = cx.conj(cx.from(N0)); Ns = cx.conj(cx.from(Ns));
    const s0 = Math.sin(th0), Ls = layers.map((L) => ({ N: cx.conj(cx.from(L.N)), d: L.d }));
    const run = (pol) => {
      const adm = (N, c) => (pol === "s" ? cx.mul(N, c) : cx.div(N, c));
      let M = [cx.of(1), cx.of(0), cx.of(0), cx.of(1)];
      for (const L of Ls) {
        const c = cosT(N0, s0, L.N, -1), d = cx.scale(cx.mul(L.N, c), (TAU * L.d) / lambda), y = adm(L.N, c);
        const cs = cx.cos(d), jsn = cx.mul(J, cx.sin(d));
        const m = [cs, cx.div(jsn, y), cx.mul(jsn, y), cs];
        M = [cx.add(cx.mul(M[0], m[0]), cx.mul(M[1], m[2])), cx.add(cx.mul(M[0], m[1]), cx.mul(M[1], m[3])), cx.add(cx.mul(M[2], m[0]), cx.mul(M[3], m[2])), cx.add(cx.mul(M[2], m[1]), cx.mul(M[3], m[3]))];
      }
      const c0 = cx.from(Math.cos(th0)), cs_ = cosT(N0, s0, Ns, -1), y0 = adm(N0, c0), ys = adm(Ns, cs_);
      const B = cx.add(M[0], cx.mul(M[1], ys)), C = cx.add(M[2], cx.mul(M[3], ys));
      const den = cx.add(cx.mul(y0, B), C);
      let r = cx.div(cx.sub(cx.mul(y0, B), C), den), t = cx.div(cx.scale(y0, 2), den);
      const T = (ys.re / y0.re) * cx.abs2(t);
      if (pol === "p") r = cx.neg(r); // 헥트 관례 (t는 어드미턴스 관례; 세기 T는 관례와 무관)
      return { r, t, R: cx.abs2(r), T };
    };
    const S = run("s"), P = run("p"), rho = cx.div(P.r, S.r);
    let delta = EM.rad2deg(Math.atan2(rho.im, rho.re)); if (delta < 0) delta += 360;
    return { rs: cx.conj(S.r), rp: cx.conj(P.r), ts: cx.conj(S.t), tp: cx.conj(P.t), Rs: S.R, Rp: P.R, Ts: S.T, Tp: P.T, R: (S.R + P.R) / 2, T: (S.T + P.T) / 2, psi: EM.rad2deg(Math.atan(cx.abs(rho))), delta };
  };
  /**
   * 대표 재료 복소 굴절률 N(λ nm) = n + ik. 'Si'(아스네스·그린 표 보간, 400–1200 nm), 'SiO2'(말리트슨),
   * 'Si3N4'(루크), 'air', 그리고 상수 재료. 범위 밖은 끝값.
   */
  const SI_NK = [[400, 5.57, 0.387], [450, 4.67, 0.142], [500, 4.30, 0.073], [550, 4.08, 0.041], [600, 3.95, 0.026], [633, 3.88, 0.019], [700, 3.79, 0.012], [800, 3.69, 0.0065], [900, 3.63, 0.0026], [1000, 3.58, 0.0007], [1100, 3.55, 0.00002], [1200, 3.52, 0]];
  const CONST_N = { air: [1, 0], water: [1.333, 0], HfO2: [1.9, 0], Al2O3: [1.77, 0], TiO2: [2.5, 0], resist: [1.7, 0], BARC: [1.8, 0.4], Al: [1.38, 7.6], Cu: [0.27, 3.4], W: [3.6, 2.9], Au: [0.2, 3.3] };
  EM.nk = function (mat, lambda) {
    const um = lambda / 1000, l2 = um * um;
    if (mat === "SiO2") return cx.of(Math.sqrt(1 + (0.6961663 * l2) / (l2 - 0.0684043 ** 2) + (0.4079426 * l2) / (l2 - 0.1162414 ** 2) + (0.8974794 * l2) / (l2 - 9.896161 ** 2)), 0);
    if (mat === "Si3N4") return cx.of(Math.sqrt(1 + (3.0249 * l2) / (l2 - 0.1353406 ** 2) + (40314 * l2) / (l2 - 1239.842 ** 2)), 0);
    if (mat === "Si") {
      const T = SI_NK; if (lambda <= T[0][0]) return cx.of(T[0][1], T[0][2]); if (lambda >= T[T.length - 1][0]) return cx.of(T[T.length - 1][1], T[T.length - 1][2]);
      for (let i = 0; i < T.length - 1; i++) if (lambda <= T[i + 1][0]) { const f = (lambda - T[i][0]) / (T[i + 1][0] - T[i][0]); return cx.of(T[i][1] + f * (T[i + 1][1] - T[i][1]), Math.exp(Math.log(T[i][2] + 1e-9) + f * (Math.log(T[i + 1][2] + 1e-9) - Math.log(T[i][2] + 1e-9)))); }
    }
    const c = CONST_N[mat]; return c ? cx.of(c[0], c[1]) : cx.of(1, 0);
  };

  /* ------------------------------------------------------------ 전송선 (공학 관례 e^{jωt}) */
  EM.tl = {
    /** RLGC (단위 길이) 와 f → {Z0, gamma, alpha, beta, vp} */
    rlgc: (R, L, G, C, f) => { const w = TAU * f, Z = { re: R, im: w * L }, Y = { re: G, im: w * C }; const Z0 = cx.sqrt(cx.div(Z, Y)), gamma = cx.sqrt(cx.mul(Z, Y)); return { Z0, gamma, alpha: gamma.re, beta: gamma.im, vp: w / gamma.im }; },
    /** 반사 계수 Γ = (ZL − Z0)/(ZL + Z0) (복소 또는 실수) */
    gamma: (ZL, Z0) => cx.div(cx.sub(ZL, Z0), cx.add(ZL, Z0)),
    vswr: (G) => { const m = cx.abs(cx.from(G)); return m >= 1 ? Infinity : (1 + m) / (1 - m); },
    returnLoss: (G) => -20 * Math.log10(cx.abs(cx.from(G))),
    /** 입력 임피던스: 무손실이면 betaL(rad), 손실이면 gammaL 복소 */
    zin: (ZL, Z0, gl) => {
      ZL = cx.from(ZL); Z0 = cx.from(Z0);
      if (!isFinite(ZL.re) || !isFinite(ZL.im)) { // 개방
        const t = typeof gl === "number" ? cx.of(0, Math.tan(gl)) : cx.tanh(gl); return cx.div(Z0, t);
      }
      const t = typeof gl === "number" ? cx.of(0, Math.tan(gl)) : cx.tanh(gl);
      return cx.mul(Z0, cx.div(cx.add(ZL, cx.mul(Z0, t)), cx.add(Z0, cx.mul(ZL, t))));
    },
    /** 정규화 임피던스 z ↔ Γ */
    z2g: (z) => cx.div(cx.sub(z, 1), cx.add(z, 1)),
    g2z: (g) => cx.div(cx.add(1, g), cx.sub(1, g)),
    /** 무손실 선의 위치 d(부하에서 떨어진 거리, 파장 단위)에서 |V|/|V⁺| = |1 + Γ e^{−j4πd}| */
    standing: (G, dLam) => cx.abs(cx.add(1, cx.mul(cx.from(G), cx.polar(1, -4 * PI * dLam)))),
    /** λ/4 변성기 Z = √(Z0 ZL) */
    quarterWave: (Z0, RL) => Math.sqrt(Z0 * RL),
    /**
     * L 정합 회로(무손실): 부하 ZL={re,im} 를 실수 Z0로 정합. 두 해 반환
     * [{shuntFirst, X(직렬 리액턴스 Ω), B(병렬 서셉턴스 S)}] — 포자 5.1 식
     */
    lMatch: (ZL, Z0) => {
      ZL = cx.from(ZL); const RL = ZL.re, XL = ZL.im, out = [];
      if (RL > Z0) { // 부하 쪽 병렬 B, 그다음 직렬 X
        for (const sg of [1, -1]) {
          const B = (XL + sg * Math.sqrt(RL / Z0) * Math.sqrt(RL * RL + XL * XL - Z0 * RL)) / (RL * RL + XL * XL);
          const X = 1 / B + (XL * Z0) / RL - Z0 / (B * RL);
          out.push({ shuntAtLoad: true, B, X });
        }
      } else { // 부하에 직렬 X, 그다음 선로 쪽 병렬 B
        for (const sg of [1, -1]) {
          const X = sg * Math.sqrt(RL * (Z0 - RL)) - XL, B = (sg * Math.sqrt((Z0 - RL) / RL)) / Z0;
          out.push({ shuntAtLoad: false, B, X });
        }
      }
      return out;
    },
    /** 리액턴스 → 소자 값: X>0 이면 {L}, X<0 이면 {C}; 서셉턴스 B>0 이면 {C}, B<0 이면 {L} */
    xToElem: (X, f) => (X >= 0 ? { L: X / (TAU * f) } : { C: -1 / (TAU * f * X) }),
    bToElem: (B, f) => (B >= 0 ? { C: B / (TAU * f) } : { L: -1 / (TAU * f * B) }),
    /** 단일 병렬 단락 스터브: 부하에서 거리 d, 스터브 길이 l (둘 다 파장 단위), 두 해 */
    stub: (ZL, Z0, type = "short") => {
      ZL = cx.from(ZL); const RL = ZL.re, XL = ZL.im, sols = [];
      const ts = Math.abs(RL - Z0) < 1e-12 ? [-XL / (2 * Z0)] : [(XL + Math.sqrt((RL * ((Z0 - RL) ** 2 + XL * XL)) / Z0)) / (RL - Z0), (XL - Math.sqrt((RL * ((Z0 - RL) ** 2 + XL * XL)) / Z0)) / (RL - Z0)];
      for (const t of ts) {
        let d = t >= 0 ? Math.atan(t) / TAU : (PI + Math.atan(t)) / TAU;
        const G = (RL * (1 + t * t)) / (RL * RL + (XL + Z0 * t) ** 2), B = (RL * RL * t - (Z0 - XL * t) * (XL + Z0 * t)) / (Z0 * (RL * RL + (XL + Z0 * t) ** 2));
        let l = type === "short" ? Math.atan(1 / (B * Z0)) / TAU : -Math.atan(B * Z0) / TAU; // 스터브가 −B를 낸다 (포자 5.9)
        if (type === "short" && l < 0) l += 0.5; if (type === "open" && l < 0) l += 0.5;
        sols.push({ d, l, G: G * Z0, B: B * Z0 });
      }
      return sols;
    },
    /**
     * 무손실 선 바운스(저항 종단): 계단 Vs, 내부 저항 Rs, 선 Z0, 편도 지연 Td, 부하 RL.
     * → {GS, GL, V1(첫 진행파), waves:[{t0, dir(+1 부하쪽/−1), amp}], vAt(z(0..1), t)}  (t는 Td 단위)
     */
    bounce: (Vs, Rs, Z0, RL, nMax = 12) => {
      const GS = Rs === Infinity ? 1 : (Rs - Z0) / (Rs + Z0), GL = RL === Infinity ? 1 : (RL - Z0) / (RL + Z0), V1 = (Vs * Z0) / (Rs + Z0);
      const waves = []; let amp = V1;
      for (let n = 0; n < nMax; n++) { waves.push({ t0: n, dir: n % 2 ? -1 : 1, amp }); amp *= n % 2 ? GS : GL; if (Math.abs(amp) < 1e-9 * Math.abs(V1)) break; }
      const vAt = (z, t) => { let v = 0; for (const w of waves) { const arrive = w.dir > 0 ? w.t0 + z : w.t0 + (1 - z); if (t >= arrive - 1e-12) v += w.amp; } return v; };
      return { GS, GL, V1, waves, vAt, vFinal: RL === Infinity ? Vs : (Vs * RL) / (Rs + RL) };
    },
    /**
     * 격자 TDR/과도 시뮬레이터: 구간 [{Z0, delay(s)}], 원천 Rs, 부하 RL(Infinity 가능), 부하 병렬 CL(F), 계단 상승 시간 tr.
     * 시간 간격 dt로 각 구간을 셀로 나눠 진행파를 옮긴다. → {t:[], vin:[], vload:[]} (vin = 원천 쪽 선 입구 전압, 입사 계단 1 V)
     */
    tdr: (segs, o = {}) => {
      const Rs = o.Rs ?? 50, RL = o.RL ?? Infinity, CL = o.CL || 0, tr = o.tr || 0, tmax = o.tmax || 4 * segs.reduce((s, g) => s + g.delay, 0);
      const minD = Math.min(...segs.map((g) => g.delay)), Zl = segs[segs.length - 1].Z0;
      const dt = o.dt || Math.min(minD / 40, CL > 0 ? (Zl * CL) / 20 : Infinity, tr > 0 ? tr / 10 : Infinity);
      const cells = []; segs.forEach((g, si) => { const n = Math.max(1, Math.round(g.delay / dt)); for (let i = 0; i < n; i++) cells.push(g.Z0); });
      const n = cells.length, fwd = new Float64Array(n), bwd = new Float64Array(n);
      const t = [], vin = [], vload = []; let vc = 0;
      const steps = Math.ceil(tmax / dt);
      for (let s = 0; s <= steps; s++) {
        const time = s * dt, vs = 2 * (tr > 0 ? SB_clamp(time / tr, 0, 1) : time >= 0 ? 1 : 0); // 원천 개방 전압 2 V → 정합이면 1 V 입사
        const nf = new Float64Array(n), nb = new Float64Array(n);
        // 원천 끝: 셀 0 의 입사파 = 원천에서 주입 + 반사
        const Z = cells[0], Gs = (Rs - Z) / (Rs + Z);
        nf[0] = (vs * Z) / (Rs + Z) + Gs * bwd[0];
        // 내부 접합
        for (let i = 0; i < n - 1; i++) {
          const Za = cells[i], Zb = cells[i + 1], G = (Zb - Za) / (Zb + Za);
          nf[i + 1] = (1 + G) * fwd[i] + -G * bwd[i + 1]; // 오른쪽으로 투과 + 왼쪽에서 반사
          nb[i] = G * fwd[i] + (1 - G) * bwd[i + 1];
        }
        // 부하 끝: R ∥ C (사다리꼴)
        const Zn = cells[n - 1], a = fwd[n - 1];
        let vL;
        if (CL > 0) { // 2a = vL(1 + Zn/RL) + Zn·CL·dvL/dt → 후방 오일러
          const g = RL === Infinity ? 0 : Zn / RL, k = (Zn * CL) / dt;
          vL = (2 * a + k * vc) / (1 + g + k); vc = vL;
        } else vL = RL === Infinity ? 2 * a : (2 * a * RL) / (RL + Zn);
        nb[n - 1] = vL - a;
        fwd.set(nf); bwd.set(nb);
        t.push(time); vin.push(fwd[0] + bwd[0]); vload.push(vL);
      }
      return { t, vin, vload, dt };
    },
    /** 열린 끝 분포 RC 선(총 R, C, 이상 계단 입력)의 위치 x(0..1)·시간 t 전압 */
    rcLine: (R, C, x, t, terms = 60) => { if (t <= 0) return x === 0 ? 1 : 0; let s = 0; for (let n = 0; n < terms; n++) { const m = 2 * n + 1; s += (1 / m) * Math.sin((m * PI * x) / 2) * Math.exp((-m * m * PI * PI * t) / (4 * R * C)); } return 1 - (4 / PI) * s; },
    /**
     * RC 사다리 과도 해석(후방 오일러): 원천 저항 Rs, 선 총 R·C를 N마디로, 부하 CL. 계단 1 V.
     * → {t:[], v: Float64Array[] (마디별), vout:[]}
     */
    rcLadder: (Rs, R, C, CL, N, tmax, steps = 400) => {
      const r = R / N, c = C / N, dt = tmax / steps, out = { t: [], vout: [], v: [] };
      let v = new Float64Array(N);
      const caps = Array.from({ length: N }, (_, i) => c + (i === N - 1 ? CL : 0));
      for (let s = 0; s <= steps; s++) {
        out.t.push(s * dt); out.vout.push(v[N - 1]); out.v.push(v.slice());
        const a = new Float64Array(N), b = new Float64Array(N), cc = new Float64Array(N), d = new Float64Array(N);
        for (let i = 0; i < N; i++) {
          const gl = 1 / (i === 0 ? Rs + r / 2 : r), gr = i < N - 1 ? 1 / r : 0, k = caps[i] / dt;
          b[i] = k + gl + gr; a[i] = i > 0 ? -gl : 0; cc[i] = i < N - 1 ? -gr : 0; d[i] = k * v[i] + (i === 0 ? gl * 1 : 0);
        }
        v = EM.tridiag(a, b, cc, d);
      }
      return out;
    },
    /** 엘모어 지연: Rs 구동, 분포 RC 선 (R, C), 부하 CL → Rs(C+CL) + R(C/2 + CL) */
    elmore: (Rs, R, C, CL = 0) => Rs * (C + CL) + R * (C / 2 + CL),
    /** 약결합 무손실 선 누화 계수: 후방 Kb = (Cm/C + Lm/L)/4, 원방 Kf = (Cm/C − Lm/L)/2 (×길이 지연/상승시간) */
    crosstalk: (Cm, C, Lm, L) => ({ Kb: (Cm / C + Lm / L) / 4, Kf: (Cm / C - Lm / L) / 2 }),
  };
  /** 특성 임피던스 공식 */
  EM.z0 = {
    coax: (a, b, epsr = 1) => (eta0 / (TAU * Math.sqrt(epsr))) * Math.log(b / a),
    twoWire: (a, D, epsr = 1) => (eta0 / (PI * Math.sqrt(epsr))) * Math.acosh(D / (2 * a)),
    parallelPlate: (w, d, epsr = 1) => (eta0 / Math.sqrt(epsr)) * (d / w),
    /** 마이크로스트립(해머스타드): 폭 w, 유전체 두께 hgt → {Z0, epsEff} */
    microstrip: (w, hgt, epsr) => {
      const u = w / hgt;
      if (u <= 1) { const ee = (epsr + 1) / 2 + ((epsr - 1) / 2) * (1 / Math.sqrt(1 + 12 / u) + 0.04 * (1 - u) ** 2); return { Z0: (60 / Math.sqrt(ee)) * Math.log(8 / u + u / 4), epsEff: ee }; }
      const ee = (epsr + 1) / 2 + ((epsr - 1) / 2) / Math.sqrt(1 + 12 / u);
      return { Z0: (120 * PI) / (Math.sqrt(ee) * (u + 1.393 + 0.667 * Math.log(u + 1.444))), epsEff: ee };
    },
    /** 스트립라인(두 접지면 간격 b, 폭 w, 두께 0) — 포자 근사 */
    stripline: (w, b, epsr) => { const r = w / b, we = r > 0.35 ? r : r - (0.35 - r) ** 2; return ((30 * PI) / Math.sqrt(epsr)) * (1 / (we + 0.441)); },
  };

  /* ------------------------------------------------------------ 스미스 차트 그리기 */
  /**
   * 스미스 차트 격자. box = {cx, cy, r}(픽셀). 반환 {toXY(Γ), fromXY(x,y)→Γ}.
   * opts: {r: [0,0.2,0.5,1,2,5], x: [0.2,0.5,1,2,5], color, colorX, labels}
   */
  EM.smith = function (ctx, box, o = {}) {
    const P = window.SB ? SB.palette() : { grid: "#ccc", dim: "#888", text: "#333" };
    const R = box.r, cx0 = box.cx, cy0 = box.cy;
    const toXY = (g) => [cx0 + R * g.re, cy0 - R * g.im], fromXY = (x, y) => ({ re: (x - cx0) / R, im: -(y - cy0) / R });
    ctx.save(); ctx.lineWidth = 1;
    ctx.strokeStyle = o.color || P.grid;
    ctx.beginPath(); ctx.arc(cx0, cy0, R, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx0 - R, cy0); ctx.lineTo(cx0 + R, cy0); ctx.stroke();
    ctx.beginPath(); ctx.rect(cx0 - R, cy0 - R, 2 * R, 2 * R); ctx.clip();
    for (const r of o.r || [0.2, 0.5, 1, 2, 5]) { const cr = R / (1 + r); ctx.strokeStyle = o.color || P.grid; ctx.beginPath(); ctx.arc(cx0 + R * (r / (1 + r)), cy0, cr, 0, TAU); ctx.stroke(); }
    ctx.restore(); ctx.save(); ctx.beginPath(); ctx.arc(cx0, cy0, R, 0, TAU); ctx.clip(); ctx.lineWidth = 1;
    for (const x of o.x || [0.2, 0.5, 1, 2, 5]) for (const s of [1, -1]) { const cr = R / x; ctx.strokeStyle = o.colorX || o.color || P.grid; ctx.beginPath(); ctx.arc(cx0 + R, cy0 - s * cr, cr, 0, TAU); ctx.stroke(); }
    ctx.restore();
    if (o.labels !== false && window.SB) {
      ctx.save(); ctx.fillStyle = P.dim || "#888"; ctx.font = "10px var(--mono, monospace)"; ctx.textAlign = "center";
      for (const r of o.r || [0.2, 0.5, 1, 2, 5]) { const x = cx0 + R * ((r - 1) / (r + 1)); ctx.fillText(String(r), x + 8, cy0 - 3); }
      ctx.restore();
    }
    return { toXY, fromXY };
  };

  /* ------------------------------------------------------------ 도파관·공진기 */
  EM.wg = {
    /** 사각 도파관(a ≥ b, m) 차단 주파수 f_c(m,n) */
    fc: (a, b, m, n, epsr = 1, mur = 1) => (c0 / (2 * Math.sqrt(epsr * mur))) * Math.sqrt((m / a) ** 2 + (n / b) ** 2),
    /** 차단 아래면 NaN: 위상 상수 β, 도파 파장, 위상·군속도, 파동 임피던스 */
    mode: (a, b, m, n, f, epsr = 1, mur = 1, kind = "TE") => {
      const fc = EM.wg.fc(a, b, m, n, epsr, mur), k = (TAU * f * Math.sqrt(epsr * mur)) / c0, r = 1 - (fc / f) ** 2, eta = eta0 * Math.sqrt(mur / epsr);
      if (r <= 0) return { fc, beta: NaN, alphaCut: ((TAU * fc * Math.sqrt(epsr * mur)) / c0) * Math.sqrt(1 - (f / fc) ** 2), Z: NaN };
      const beta = k * Math.sqrt(r), v = c0 / Math.sqrt(epsr * mur);
      return { fc, beta, lambdaG: TAU / beta, vp: v / Math.sqrt(r), vg: v * Math.sqrt(r), Z: kind === "TE" ? eta / Math.sqrt(r) : eta * Math.sqrt(r) };
    },
    /** 차단 주파수 순으로 정렬한 모드 목록 */
    modes: (a, b, fmax, epsr = 1) => {
      const out = [];
      for (let m = 0; m <= 6; m++) for (let n = 0; n <= 6; n++) {
        if (m === 0 && n === 0) continue; const fc = EM.wg.fc(a, b, m, n, epsr); if (fc > fmax) continue;
        out.push({ kind: "TE", m, n, fc }); if (m > 0 && n > 0) out.push({ kind: "TM", m, n, fc });
      }
      return out.sort((p, q) => p.fc - q.fc);
    },
    /** TE10 도체 손실 α_c (Np/m), 벽 전도도 σ */
    te10Loss: (a, b, f, sigma, epsr = 1) => { const fc = EM.wg.fc(a, b, 1, 0, epsr), eta = eta0 / Math.sqrt(epsr), Rs = EM.surfaceR(sigma, f), r = 1 - (fc / f) ** 2; return (Rs / (eta * b * Math.sqrt(r))) * (1 + ((2 * b) / a) * (fc / f) ** 2); },
    /** TE_mn 단면 장 세기 패턴 |E_t| (정규화) at (x∈[0,a], y∈[0,b]) — TE: E_x ∝ (n/b)cos(mπx/a)sin(nπy/b), E_y ∝ −(m/a)sin cos */
    teField: (a, b, m, n, x, y) => { const ex = (n / b) * Math.cos((m * PI * x) / a) * Math.sin((n * PI * y) / b), ey = -(m / a) * Math.sin((m * PI * x) / a) * Math.cos((n * PI * y) / b); return [ex, ey]; },
    tmField: (a, b, m, n, x, y) => { const ex = (m / a) * Math.cos((m * PI * x) / a) * Math.sin((n * PI * y) / b), ey = (n / b) * Math.sin((m * PI * x) / a) * Math.cos((n * PI * y) / b); return [ex, ey]; },
    /** 직육면체 공동 공진 주파수 f_mnp */
    cavity: (a, b, d, m, n, p, epsr = 1) => (c0 / (2 * Math.sqrt(epsr))) * Math.sqrt((m / a) ** 2 + (n / b) ** 2 + (p / d) ** 2),
    /** TE101 공동 도체 Q (포자 6.46) */
    cavityQ101: (a, b, d, sigma, epsr = 1) => {
      const f = EM.wg.cavity(a, b, d, 1, 0, 1, epsr), k = (TAU * f * Math.sqrt(epsr)) / c0, eta = eta0 / Math.sqrt(epsr), Rs = EM.surfaceR(sigma, f);
      return { f, Q: ((k * a * d) ** 3 * b * eta) / (2 * PI * PI * Rs) / (2 * a ** 3 * b + 2 * b * d ** 3 + a ** 3 * d + a * d ** 3) };
    },
    /**
     * 대칭 유전체 슬랩 TE 모드: 중심 굴절률 n1, 클래딩 n2, 두께 d, 파장 λ (같은 단위) → [{m, neff, even}]
     */
    slabTE: (n1, n2, d, lambda) => {
      const k0 = TAU / lambda, V = (k0 * d / 2) * Math.sqrt(n1 * n1 - n2 * n2), out = [];
      // u = κd/2 ∈ (0, V), w = √(V² − u²); 짝: w = u tan u, 홀: w = −u cot u
      for (let m = 0; m * (PI / 2) < V; m++) {
        const lo = (m * PI) / 2 + 1e-12, hi = Math.min(((m + 1) * PI) / 2 - 1e-12, V);
        const f = m % 2 === 0 ? (u) => u * Math.tan(u) - Math.sqrt(Math.max(0, V * V - u * u)) : (u) => -u / Math.tan(u) - Math.sqrt(Math.max(0, V * V - u * u));
        if (f(lo) * f(hi) > 0) continue;
        const u = EM.bisect(f, lo, hi), kappa = (2 * u) / d, beta = Math.sqrt(Math.max(0, (k0 * n1) ** 2 - kappa * kappa));
        out.push({ m, neff: beta / k0, even: m % 2 === 0, u, V });
      }
      return out;
    },
    /** 계단형 광섬유 V 수 와 단일 모드 조건 V < 2.405 */
    fiberV: (a, n1, n2, lambda) => (TAU * a * Math.sqrt(n1 * n1 - n2 * n2)) / lambda,
  };

  /* ------------------------------------------------------------ 복사 */
  EM.ant = {
    /**
     * 헤르츠 쌍극자(전류 I, 길이 dl, 진동수 f) 페이저 장 (r m, θ rad) → {Er, Et, Hp} 복소 (e^{jωt} 관례)
     */
    hertzian: (I, dl, f, r, th) => {
      const k = (TAU * f) / c0, kr = k * r, ph = cx.polar(1, -kr), pre = (I * dl * k * k) / (4 * PI);
      const a = cx.of(1 / (kr * kr), -1 / (kr * kr * kr)); // 1/(kr)² − j/(kr)³
      const Er = cx.mul(cx.scale(a, 2 * eta0 * pre * Math.cos(th)), ph);
      const Et = cx.mul(cx.scale(cx.add(cx.of(0, 1 / kr), a), eta0 * pre * Math.sin(th)), ph);
      const Hp = cx.mul(cx.scale(cx.of(1 / (kr * kr), 1 / kr), pre * Math.sin(th)), ph);
      return { Er, Et, Hp };
    },
    /** 진동 쌍극자 E 장선의 흐름 함수(등고선이 장선): ψ = sin²θ·(cos(ωt − kr)/(kr) − sin(ωt − kr)) */
    dipoleStream: (kr, th, wt) => Math.sin(th) ** 2 * (Math.cos(wt - kr) / kr - Math.sin(wt - kr)),
    /** 헤르츠 쌍극자 복사 저항 80π²(dl/λ)² */
    rrHertz: (dlLam) => 80 * PI * PI * dlLam * dlLam,
    /** 중심 급전 선형 안테나(길이 L, 파장 단위)의 장 패턴 F(θ) = [cos(πL cosθ) − cos(πL)]/sinθ */
    linearPattern: (Llam, th) => { const s = Math.sin(th); if (Math.abs(s) < 1e-9) return 0; return (Math.cos(PI * Llam * Math.cos(th)) - Math.cos(PI * Llam)) / s; },
    /** 선형 안테나 복사 저항(최대 전류 기준) Rr = (η/2π)∫₀^π F(θ)² sinθ dθ  (반파장 73.1 Ω) */
    rrLinear: (Llam) => (eta0 / TAU) * EM.integrate((t) => { const s = Math.sin(t); return s < 1e-9 ? 0 : EM.ant.linearPattern(Llam, t) ** 2 * s; }, 0, PI, 2000),
    /** 축 대칭 패턴 세기 U(θ) 의 지향성 D = 4π U_max / ∫U dΩ */
    directivity: (U, n = 2000) => { let mx = 0; const P = TAU * EM.integrate((t) => { const u = U(t); if (u > mx) mx = u; return u * Math.sin(t); }, 0, PI, n); return (4 * PI * mx) / P; },
    /** 균일 선형 배열 인자 |AF| (정규화): N 소자, 간격 d(파장 단위), 점진 위상 β(rad), 배열 축과의 각 ψ */
    arrayFactor: (N, dLam, beta, psi) => { const u = TAU * dLam * Math.cos(psi) + beta, s = Math.sin(u / 2); return Math.abs(s) < 1e-12 ? 1 : Math.abs(Math.sin((N * u) / 2) / (N * s)); },
    /** 프리스: Pr/Pt = Gt Gr (λ/4πR)² */
    friis: (Gt, Gr, lambda, R) => Gt * Gr * (lambda / (4 * PI * R)) ** 2,
    /** 등방 전력 밀도 S = P/(4πr²), 장 세기 E = √(2ηS) (진폭) */
    fieldFromPower: (P, r, G = 1) => Math.sqrt(2 * eta0 * ((P * G) / (4 * PI * r * r))),
  };
  /** 차폐 효과(평면파, 두께 t 도체): 흡수 A = 8.686 t/δ dB, 반사 R ≈ 20 log10(η0/(4|η_s|)) dB */
  EM.shielding = (sigma, f, t, mur = 1) => { const d = EM.skinDepth(sigma, f, mur), etas = Math.sqrt((TAU * f * mu0 * mur) / sigma); const A = 8.686 * (t / d), Rf = 20 * Math.log10(eta0 / (4 * etas)); return { A, R: Rf, SE: A + Rf, delta: d }; };

  /* ------------------------------------------------------------ FDTD */
  /**
   * 1D FDTD (정규화: 셀 크기 1, 쿠랑 수 S = c·dt/dx ≤ 1). Ez(i), Hy(i+½).
   * EM.fdtd1d(n, {S=0.5, epsr:Float64Array|fn, sigma(셀당 손실 계수), abc:true})
   *  .step(src) — src: {i, value, hard} 또는 null ; .t 시간 걸음 수 ; .Ez .Hy
   */
  EM.fdtd1d = function (n, o = {}) {
    const S = o.S ?? 0.5, Ez = new Float64Array(n), Hy = new Float64Array(n), er = new Float64Array(n).fill(1), loss = new Float64Array(n);
    if (o.epsr) for (let i = 0; i < n; i++) er[i] = typeof o.epsr === "function" ? o.epsr(i) : o.epsr[i];
    if (o.loss) for (let i = 0; i < n; i++) loss[i] = typeof o.loss === "function" ? o.loss(i) : o.loss[i];
    const F = { n, S, Ez, Hy, er, loss, t: 0 };
    F.step = function (src) {
      for (let i = 0; i < n - 1; i++) Hy[i] += S * (Ez[i + 1] - Ez[i]);
      const o0 = Ez[0], o1 = Ez[1], oN = Ez[n - 1], oN1 = Ez[n - 2];
      for (let i = 1; i < n - 1; i++) { const ca = (1 - loss[i]) / (1 + loss[i]), cb = S / er[i] / (1 + loss[i]); Ez[i] = ca * Ez[i] + cb * (Hy[i] - Hy[i - 1]); }
      if (o.abc !== false) { // 무르 1차 흡수 경계 (매질 속도 반영)
        const vL = S / Math.sqrt(er[0]), vR = S / Math.sqrt(er[n - 1]);
        Ez[0] = o1 + ((vL - 1) / (vL + 1)) * (Ez[1] - o0);
        Ez[n - 1] = oN1 + ((vR - 1) / (vR + 1)) * (Ez[n - 2] - oN);
      } else { Ez[0] = 0; Ez[n - 1] = 0; } // 완전 도체 벽
      if (src) { if (src.hard) Ez[src.i] = src.value; else Ez[src.i] += src.value; }
      F.t++;
    };
    F.reset = () => { Ez.fill(0); Hy.fill(0); F.t = 0; };
    return F;
  };
  /**
   * 2D FDTD TMz (Ez, Hx, Hy), 정규화 셀 1, S ≤ 1/√2. 가장자리 무르 1차 흡수.
   * EM.fdtd2d(nx, ny, {S, epsr(i,j), pec(i,j)→bool}) .step(src[{i,j,value,hard}]) .Ez
   */
  EM.fdtd2d = function (nx, ny, o = {}) {
    const S = o.S ?? 0.5, N = nx * ny, Ez = new Float64Array(N), Hx = new Float64Array(N), Hy = new Float64Array(N), cb = new Float64Array(N), pec = new Uint8Array(N);
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const k = j * nx + i; cb[k] = S / (o.epsr ? o.epsr(i, j) : 1); pec[k] = o.pec && o.pec(i, j) ? 1 : 0; }
    const F = { nx, ny, S, Ez, Hx, Hy, cb, pec, t: 0 };
    const prevL = new Float64Array(ny * 2), prevR = new Float64Array(ny * 2), prevB = new Float64Array(nx * 2), prevT = new Float64Array(nx * 2);
    F.setEps = (fn) => { for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) cb[j * nx + i] = S / fn(i, j); };
    F.setPec = (fn) => { for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) pec[j * nx + i] = fn(i, j) ? 1 : 0; };
    F.step = function (srcs) {
      for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx; i++) { const k = j * nx + i; Hx[k] -= S * (Ez[k + nx] - Ez[k]); }
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx - 1; i++) { const k = j * nx + i; Hy[k] += S * (Ez[k + 1] - Ez[k]); }
      for (let j = 0; j < ny; j++) { prevL[j] = Ez[j * nx + 1]; prevL[ny + j] = Ez[j * nx]; prevR[j] = Ez[j * nx + nx - 2]; prevR[ny + j] = Ez[j * nx + nx - 1]; }
      for (let i = 0; i < nx; i++) { prevB[i] = Ez[nx + i]; prevB[nx + i] = Ez[i]; prevT[i] = Ez[(ny - 2) * nx + i]; prevT[nx + i] = Ez[(ny - 1) * nx + i]; }
      for (let j = 1; j < ny - 1; j++) for (let i = 1; i < nx - 1; i++) {
        const k = j * nx + i; if (pec[k]) { Ez[k] = 0; continue; }
        Ez[k] += cb[k] * ((Hy[k] - Hy[k - 1]) - (Hx[k] - Hx[k - nx]));
      }
      const c = (S - 1) / (S + 1);
      for (let j = 0; j < ny; j++) { Ez[j * nx] = prevL[j] + c * (Ez[j * nx + 1] - prevL[ny + j]); Ez[j * nx + nx - 1] = prevR[j] + c * (Ez[j * nx + nx - 2] - prevR[ny + j]); }
      for (let i = 0; i < nx; i++) { Ez[i] = prevB[i] + c * (Ez[nx + i] - prevB[nx + i]); Ez[(ny - 1) * nx + i] = prevT[i] + c * (Ez[(ny - 2) * nx + i] - prevT[nx + i]); }
      if (srcs) for (const s of [].concat(srcs)) { const k = s.j * nx + s.i; if (s.hard) Ez[k] = s.value; else Ez[k] += s.value; }
      F.t++;
    };
    F.reset = () => { Ez.fill(0); Hx.fill(0); Hy.fill(0); F.t = 0; };
    return F;
  };
  /** 가우스 펄스·리커 웨이블릿 원천 */
  EM.gauss = (t, t0, w) => Math.exp(-(((t - t0) / w) ** 2));
  EM.ricker = (t, t0, w) => { const a = ((t - t0) / w) ** 2; return (1 - 2 * a) * Math.exp(-a); };

  /**
   * 모멘트 법(2D): 단위 길이 도체 띠(strips) 들의 정전 용량 행렬. 각 띠 {x0,y0,x1,y1, cond(도체 번호)}를 nSeg 조각으로 나눠
   * 전하 밀도를 조각별 상수로 놓고 전위 행렬을 풀어 도체별 전하 → C 행렬(F/m). 균질 유전율 epsr, 무한 공간(접지 기준 무한원).
   * 2D 전위는 기준이 필요하므로 전체 전하 합 0 조건을 쓰지 않고 '먼 기준 반지름 Rref'를 쓴다.
   */
  EM.mom2d = function (strips, epsr = 1, nSeg = 20, Rref = 1) {
    const segs = [];
    strips.forEach((s) => { for (let k = 0; k < nSeg; k++) { const a = k / nSeg, b = (k + 1) / nSeg; segs.push({ x: s.x0 + (s.x1 - s.x0) * (a + b) / 2, y: s.y0 + (s.y1 - s.y0) * (a + b) / 2, L: Math.hypot(s.x1 - s.x0, s.y1 - s.y0) / nSeg, cond: s.cond }); } });
    const n = segs.length, A = new Float64Array(n * n), k = 1 / (TAU * eps0 * epsr);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const sj = segs[j];
      if (i === j) { const h = sj.L / 2; A[i * n + j] = k * sj.L * (1 - Math.log(h / Rref)); } // −∫ln|x|dx 자기항
      else A[i * n + j] = -k * sj.L * Math.log(Math.hypot(segs[i].x - sj.x, segs[i].y - sj.y) / Rref);
    }
    const nc = Math.max(...strips.map((s) => s.cond)) + 1, C = [];
    for (let c = 0; c < nc; c++) {
      const V = segs.map((s) => (s.cond === c ? 1 : 0)), sig = solveDense(A, V, n);
      C.push(Array.from({ length: nc }, (_, d) => segs.reduce((acc, s, i) => acc + (s.cond === d ? sig[i] * s.L : 0), 0)));
    }
    return { C, segs };
  };
  function solveDense(A0, b0, n) { // 부분 피벗 가우스 소거
    const A = Float64Array.from(A0), b = Float64Array.from(b0);
    for (let c = 0; c < n; c++) {
      let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(A[r * n + c]) > Math.abs(A[p * n + c])) p = r;
      if (p !== c) { for (let k = 0; k < n; k++) { const t = A[c * n + k]; A[c * n + k] = A[p * n + k]; A[p * n + k] = t; } const t = b[c]; b[c] = b[p]; b[p] = t; }
      for (let r = c + 1; r < n; r++) { const f = A[r * n + c] / A[c * n + c]; if (!f) continue; for (let k = c; k < n; k++) A[r * n + k] -= f * A[c * n + k]; b[r] -= f * b[c]; }
    }
    const x = new Float64Array(n);
    for (let r = n - 1; r >= 0; r--) { let s = b[r]; for (let k = r + 1; k < n; k++) s -= A[r * n + k] * x[k]; x[r] = s / A[r * n + r]; }
    return x;
  }
  EM.solve = (A, b) => solveDense(A, b, b.length);

  /* ------------------------------------------------------------ 그리기 도구 */
  /** 색 지도: t ∈ [0,1] → 'rgb()' ; 'div'(파랑–흰–빨강, t=0.5 흰), 'seq'(비리디스 근사), 'heat'(검정–빨강–노랑) */
  const VIR = [[68, 1, 84], [72, 40, 120], [62, 74, 137], [49, 104, 142], [38, 130, 142], [31, 158, 137], [53, 183, 121], [109, 205, 89], [180, 222, 44], [253, 231, 37]];
  EM.cmap = function (name, t, alpha = 1) {
    t = SB_clamp(t, 0, 1);
    if (name === "div") { const s = 2 * t - 1, r = s > 0 ? 220 : Math.round(220 + 190 * s), b = s < 0 ? 230 : Math.round(230 - 190 * s), g = Math.round(222 - 150 * Math.abs(s)); return `rgba(${r},${g},${b},${alpha})`; }
    if (name === "heat") { const r = Math.round(255 * SB_clamp(t * 2, 0, 1)), g = Math.round(255 * SB_clamp(t * 2 - 1, 0, 1)), b = Math.round(80 * SB_clamp(t * 3 - 2, 0, 1)); return `rgba(${r},${g},${b},${alpha})`; }
    const x = t * (VIR.length - 1), i = Math.min(VIR.length - 2, Math.floor(x)), f = x - i, a = VIR[i], b = VIR[i + 1];
    return `rgba(${Math.round(a[0] + f * (b[0] - a[0]))},${Math.round(a[1] + f * (b[1] - a[1]))},${Math.round(a[2] + f * (b[2] - a[2]))},${alpha})`;
  };
  function cmapRGB(name, t) { const m = EM.cmap(name, t).match(/[\d.]+/g); return [+m[0], +m[1], +m[2]]; }
  /**
   * 격자 값 열지도: vals(nx·ny, j=0 아래) → 캔버스 영역 box {x,y,w,h}(픽셀, y는 위쪽 기준)에 그린다.
   * opts: {cmap:'div'|'seq'|'heat', vmin, vmax, alpha, mask(k)→true면 투명}
   */
  EM.heatmap = function (ctx, vals, nx, ny, box, o = {}) {
    let vmin = o.vmin, vmax = o.vmax;
    if (vmin === undefined || vmax === undefined) { let lo = Infinity, hi = -Infinity; for (const v of vals) if (isFinite(v)) { if (v < lo) lo = v; if (v > hi) hi = v; } vmin ??= lo; vmax ??= hi; }
    const off = EM._off || (EM._off = document.createElement("canvas")); off.width = nx; off.height = ny;
    const octx = off.getContext("2d"), img = octx.createImageData(nx, ny), name = o.cmap || "div", A = Math.round(255 * (o.alpha ?? 1));
    const lut = []; for (let i = 0; i < 256; i++) lut.push(cmapRGB(name, i / 255));
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i, p = ((ny - 1 - j) * nx + i) * 4, v = vals[k];
      if (!isFinite(v) || (o.mask && o.mask(k))) { img.data[p + 3] = 0; continue; }
      const c = lut[Math.round(255 * SB_clamp((v - vmin) / (vmax - vmin || 1), 0, 1))];
      img.data[p] = c[0]; img.data[p + 1] = c[1]; img.data[p + 2] = c[2]; img.data[p + 3] = A;
    }
    octx.putImageData(img, 0, 0);
    ctx.save(); ctx.imageSmoothingEnabled = o.smooth !== false; ctx.drawImage(off, box.x, box.y, box.w, box.h); ctx.restore();
    return { vmin, vmax };
  };
  /**
   * 화살표 장(quiver). field(x,y)→[Fx,Fy] (세계 좌표), toPx(x,y)→[px,py], 세계 영역 b=[x0,x1,y0,y1], 격자 n×m.
   * opts: {len(최대 화살표 px), color, log(true면 크기 로그 압축), minFrac}
   */
  EM.quiver = function (ctx, field, toPx, b, n, m, o = {}) {
    const P = window.SB ? SB.palette() : {}; const pts = []; let mx = 0;
    for (let j = 0; j < m; j++) for (let i = 0; i < n; i++) {
      const x = b[0] + ((i + 0.5) * (b[1] - b[0])) / n, y = b[2] + ((j + 0.5) * (b[3] - b[2])) / m, F = field(x, y), L = Math.hypot(F[0], F[1]);
      if (!isFinite(L)) continue; pts.push([x, y, F, L]); if (L > mx) mx = L;
    }
    const len = o.len || 14;
    ctx.save(); ctx.strokeStyle = ctx.fillStyle = o.color || P.dim || "#888"; ctx.lineWidth = o.width || 1.2;
    for (const [x, y, F, L] of pts) {
      if (L === 0) continue;
      let s = o.log ? Math.log1p((9 * L) / mx) / Math.log(10) : L / mx; if (s < (o.minFrac ?? 0.08)) s = o.minFrac ?? 0.08;
      const [px, py] = toPx(x, y);
      const [qx, qy] = toPx(x + (F[0] / L) * 1e-6, y + (F[1] / L) * 1e-6), ux = qx - px, uy = qy - py, ul = Math.hypot(ux, uy) || 1;
      const ex = (ux / ul) * len * s, ey = (uy / ul) * len * s;
      const x1 = px - ex / 2, y1 = py - ey / 2, x2 = px + ex / 2, y2 = py + ey / 2, hl = Math.min(5, 0.4 * Math.hypot(ex, ey)), an = Math.atan2(ey, ex);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 - hl * Math.cos(an - 0.45), y2 - hl * Math.sin(an - 0.45)); ctx.lineTo(x2 - hl * Math.cos(an + 0.45), y2 - hl * Math.sin(an + 0.45)); ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  };
  /** 폴리라인 그리기(세계 좌표 점 배열) */
  EM.polyline = function (ctx, pts, toPx) { if (!pts.length) return; ctx.beginPath(); const p0 = toPx(pts[0][0], pts[0][1]); ctx.moveTo(p0[0], p0[1]); for (let i = 1; i < pts.length; i++) { const p = toPx(pts[i][0], pts[i][1]); ctx.lineTo(p[0], p[1]); } ctx.stroke(); };
  /** 등고선 결과(EM.contour) 그리기 */
  EM.drawContours = function (ctx, cs, toPx, colorFn) {
    for (const L of cs) { ctx.strokeStyle = colorFn ? colorFn(L.level) : ctx.strokeStyle; ctx.beginPath(); for (const s of L.segs) { const a = toPx(s[0], s[1]), b = toPx(s[2], s[3]); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); } ctx.stroke(); }
  };
  /** 장선 위 화살촉(중간 지점) */
  EM.lineArrow = function (ctx, pts, toPx, frac = 0.5, size = 6) {
    if (pts.length < 3) return; const i = Math.max(1, Math.min(pts.length - 1, Math.floor(pts.length * frac)));
    const a = toPx(pts[i - 1][0], pts[i - 1][1]), b = toPx(pts[i][0], pts[i][1]), an = Math.atan2(b[1] - a[1], b[0] - a[0]);
    ctx.beginPath(); ctx.moveTo(b[0], b[1]); ctx.lineTo(b[0] - size * Math.cos(an - 0.45), b[1] - size * Math.sin(an - 0.45)); ctx.lineTo(b[0] - size * Math.cos(an + 0.45), b[1] - size * Math.sin(an + 0.45)); ctx.closePath(); ctx.fill();
  };

  /* ------------------------------------------------------------ 재료 자료 */
  /** 대표 재료(상온, 저주파): epsr, sigma(S/m), mur, rho(Ω·m), note */
  EM.materials = {
    vacuum: { ko: "진공", epsr: 1, sigma: 0, mur: 1 },
    air: { ko: "공기", epsr: 1.0006, sigma: 0, mur: 1, Ebd: 3e6 },
    SiO2: { ko: "이산화 규소(열산화막)", epsr: 3.9, sigma: 1e-14, mur: 1, Ebd: 1e9 },
    Si3N4: { ko: "질화 규소", epsr: 7.5, sigma: 1e-13, mur: 1, Ebd: 1e9 },
    Al2O3: { ko: "산화 알루미늄", epsr: 9, sigma: 0, mur: 1, Ebd: 8e8 },
    HfO2: { ko: "산화 하프늄", epsr: 22, sigma: 0, mur: 1, Ebd: 5e8 },
    ZrO2: { ko: "산화 지르코늄", epsr: 25, sigma: 0, mur: 1, Ebd: 4e8 },
    TiO2: { ko: "이산화 타이타늄(루틸)", epsr: 80, sigma: 0, mur: 1 },
    lowk: { ko: "low-k SiCOH", epsr: 2.7, sigma: 0, mur: 1, Ebd: 5e8 },
    ulk: { ko: "다공성 ultra-low-k", epsr: 2.2, sigma: 0, mur: 1 },
    polyimide: { ko: "폴리이미드", epsr: 3.4, sigma: 0, mur: 1 },
    FR4: { ko: "FR-4 기판", epsr: 4.4, sigma: 0, mur: 1, tand: 0.02 },
    quartz: { ko: "석영 유리", epsr: 3.8, sigma: 0, mur: 1, tand: 1e-4 },
    alumina: { ko: "알루미나 세라믹", epsr: 9.8, sigma: 0, mur: 1, tand: 1e-4 },
    water: { ko: "물(순수)", epsr: 80, sigma: 5.5e-6, mur: 1 },
    Si: { ko: "실리콘(진성)", epsr: 11.7, sigma: 4.4e-4, mur: 1 },
    Ge: { ko: "저마늄", epsr: 16, sigma: 2.2, mur: 1 },
    GaAs: { ko: "갈륨 비소", epsr: 12.9, sigma: 1e-6, mur: 1 },
    Cu: { ko: "구리", epsr: 1, sigma: 5.96e7, mur: 1 },
    Ag: { ko: "은", epsr: 1, sigma: 6.30e7, mur: 1 },
    Au: { ko: "금", epsr: 1, sigma: 4.10e7, mur: 1 },
    Al: { ko: "알루미늄", epsr: 1, sigma: 3.77e7, mur: 1 },
    W: { ko: "텅스텐", epsr: 1, sigma: 1.79e7, mur: 1 },
    Co: { ko: "코발트", epsr: 1, sigma: 1.60e7, mur: 250 },
    Ru: { ko: "루테늄", epsr: 1, sigma: 1.4e7, mur: 1 },
    TiN: { ko: "질화 타이타늄", epsr: 1, sigma: 4e6, mur: 1 },
    Fe: { ko: "철", epsr: 1, sigma: 1.0e7, mur: 5000 },
    NiFe: { ko: "퍼멀로이", epsr: 1, sigma: 6e6, mur: 1e5 },
    ferrite: { ko: "페라이트", epsr: 12, sigma: 1e-2, mur: 2000 },
    seawater: { ko: "바닷물", epsr: 80, sigma: 4, mur: 1 },
  };
})();
