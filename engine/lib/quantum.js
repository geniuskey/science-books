/* ==========================================================================
   SciBook lib/quantum.js — 현대물리·양자역학 공용 라이브러리 (전역 Q)
   상수와 단위 변환, 흑체 복사, 1차원 슈뢰딩거 방정식 고유값 풀이(유한 차분),
   유한·무한 우물, 전달 행렬 터널링, WKB, 크랭크–니콜슨 파속 전파,
   조화 진동자·수소 원자 파동함수, 양자 통계, 크로니히–페니 띠, 반도체 물성.
   의존: engine/js/scibook.js (없어도 대부분 동작)

   단위 관례: 길이 nm, 에너지 eV, 시간 fs, 질량은 전자 질량 me의 배수(m = 1이면 자유 전자).
   이 단위에서 ħ²/(2me) = 0.0380998 eV·nm², ħ = 0.658212 eV·fs.
   ========================================================================== */
(function () {
  "use strict";
  const Q = (window.Q = {});

  /* ------------------------------------------------------------ 상수 (CODATA 2018) */
  Q.const = {
    h: 6.62607015e-34,        // J·s
    hbar: 1.054571817e-34,    // J·s
    c: 299792458,             // m/s
    e: 1.602176634e-19,       // C
    me: 9.1093837015e-31,     // kg
    mp: 1.67262192369e-27,    // kg
    kB: 1.380649e-23,         // J/K
    eps0: 8.8541878128e-12,   // F/m
    NA: 6.02214076e23,
    sigma: 5.670374419e-8,    // 슈테판–볼츠만 W/(m²·K⁴)
    a0: 0.0529177210903,      // 보어 반지름 nm
    Ry: 13.605693122994,      // 뤼드베리 에너지 eV
    alpha: 7.2973525693e-3,   // 미세 구조 상수
    muB: 5.7883818060e-5,     // 보어 마그네톤 eV/T
    wien: 2.897771955e-3,     // 빈 변위 상수 m·K
    hc: 1239.84198,           // eV·nm
    hbarEv: 0.6582119569,     // ħ, eV·fs
    hbarC: 197.3269804,       // ħc, eV·nm
    kBev: 8.617333262e-5,     // eV/K
    mec2: 510998.95,          // 전자 정지 에너지 eV
    C: 0.0380998212,          // ħ²/(2me), eV·nm²
    lambdaC: 2.42631023867e-3 // 콤프턴 파장 nm
  };
  const K = Q.const;

  /* ------------------------------------------------------------ 변환 */
  /** 광자: 파장(nm) ↔ 에너지(eV) */
  Q.photonE = (nm) => K.hc / nm;
  Q.photonL = (eV) => K.hc / eV;
  /** 열에너지 kT (eV) */
  Q.kT = (T) => K.kBev * T;
  /** 비상대론적 드브로이 파장(nm): 운동 에너지 E(eV), 질량 m(me 단위) */
  Q.deBroglie = (E, m = 1) => (2 * Math.PI) / Math.sqrt(E / (K.C / m));
  /** 상대론적 전자 파장(nm): 가속 전압 V(볼트) — 전자 현미경 */
  Q.electronLambdaRel = (V) => K.hc / Math.sqrt(V * (V + 2 * K.mec2));
  /** 파수 k(1/nm) ↔ 에너지 E(eV): 포물선 띠 */
  Q.kOfE = (E, m = 1) => Math.sqrt(Math.max(0, E) * m / K.C);
  Q.EofK = (k, m = 1) => (K.C / m) * k * k;

  /* ------------------------------------------------------------ 흑체 복사 */
  /** 플랑크 분광 복사휘도 B_λ(λ[m], T[K]) — W/(m²·sr·m) */
  Q.planck = function (lam, T) {
    const x = (K.h * K.c) / (lam * K.kB * T);
    if (x > 700) return 0;
    return (2 * K.h * K.c * K.c) / Math.pow(lam, 5) / Math.expm1(x);
  };
  /** 레일리–진스 근사 */
  Q.rayleighJeans = (lam, T) => (2 * K.c * K.kB * T) / Math.pow(lam, 4);
  /** 빈 근사 */
  Q.wienApprox = (lam, T) => (2 * K.h * K.c * K.c) / Math.pow(lam, 5) * Math.exp(-(K.h * K.c) / (lam * K.kB * T));
  Q.wienPeak = (T) => K.wien / T; // m
  Q.stefan = (T) => K.sigma * T ** 4; // W/m²

  /** 콤프턴 산란: 파장 변화(nm) */
  Q.compton = (thetaRad) => K.lambdaC * (1 - Math.cos(thetaRad));

  /* ------------------------------------------------------------ 복소수 (작고 단순하게) */
  const cx = (re, im = 0) => ({ re, im });
  const cadd = (a, b) => cx(a.re + b.re, a.im + b.im);
  const csub = (a, b) => cx(a.re - b.re, a.im - b.im);
  const cmul = (a, b) => cx(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
  const cdiv = (a, b) => { const d = b.re * b.re + b.im * b.im; return cx((a.re * b.re + a.im * b.im) / d, (a.im * b.re - a.re * b.im) / d); };
  const cexp = (a) => { const m = Math.exp(a.re); return cx(m * Math.cos(a.im), m * Math.sin(a.im)); };
  const cabs2 = (a) => a.re * a.re + a.im * a.im;
  /** 실수 x의 복소 제곱근 (x<0이면 i√|x|) */
  const csqrtR = (x) => (x >= 0 ? cx(Math.sqrt(x), 0) : cx(0, Math.sqrt(-x)));
  Q.cx = { cx, add: cadd, sub: csub, mul: cmul, div: cdiv, exp: cexp, abs2: cabs2 };

  /* ------------------------------------------------------------ 격자 */
  /** 균일 격자 x[i] (nm) */
  Q.grid = function (x0, x1, n) { const dx = (x1 - x0) / (n - 1), x = new Float64Array(n); for (let i = 0; i < n; i++) x[i] = x0 + i * dx; return { x, dx, n }; };

  /* ------------------------------------------------------------ 1D 고유값 (유한 차분) */
  /**
   * 1차원 시간 독립 슈뢰딩거 방정식 −(ħ²/2m)ψ'' + Vψ = Eψ 를 균일 격자에서 푼다.
   * 양 끝은 ψ = 0(무한 벽). V: 배열(eV), dx: nm, m: me 단위(스칼라).
   * Q.eigen(V, dx, {m, n, Emax}) → {E:[…], psi:[Float64Array…]}  (∫|ψ|²dx = 1, 부호는 왼쪽 첫 봉우리가 +)
   */
  Q.eigen = function (V, dx, o = {}) {
    const m = o.m || 1, N = V.length, t = K.C / (m * dx * dx);
    const d = new Float64Array(N);
    for (let i = 0; i < N; i++) d[i] = 2 * t + V[i];
    // 스투름 수열: λ보다 작은 고유값 개수
    const count = (lam) => {
      let c = 0, q = d[0] - lam;
      if (q < 0) c++;
      for (let i = 1; i < N; i++) {
        q = d[i] - lam - (t * t) / (q === 0 ? 1e-300 : q);
        if (q < 0) c++;
      }
      return c;
    };
    let lo = Infinity, hi = -Infinity;
    for (let i = 0; i < N; i++) { lo = Math.min(lo, d[i] - 2 * t); hi = Math.max(hi, d[i] + 2 * t); }
    let nWant = o.n || 5;
    if (o.Emax != null) nWant = Math.min(nWant, count(o.Emax));
    const E = [], psi = [];
    for (let k = 0; k < nWant; k++) {
      let a = lo, b = hi;
      for (let it = 0; it < 80; it++) { const mid = 0.5 * (a + b); if (count(mid) > k) b = mid; else a = mid; }
      const ek = 0.5 * (a + b);
      E.push(ek);
      psi.push(inverseIter(d, t, ek, N, dx));
    }
    return { E, psi };
  };
  // 역반복: (H − E)x = b 를 토머스 알고리즘으로 세 번
  function inverseIter(d, t, E, N, dx) {
    let x = new Float64Array(N).fill(1);
    const cp = new Float64Array(N), dp = new Float64Array(N);
    const shift = E + 1e-10 * (1 + Math.abs(E));
    for (let rep = 0; rep < 3; rep++) {
      // 대각 d−shift, 비대각 −t
      let beta = d[0] - shift; if (beta === 0) beta = 1e-14;
      cp[0] = -t / beta; dp[0] = x[0] / beta;
      for (let i = 1; i < N; i++) {
        beta = d[i] - shift + t * cp[i - 1]; if (beta === 0) beta = 1e-14;
        cp[i] = -t / beta; dp[i] = (x[i] + t * dp[i - 1]) / beta;
      }
      const y = new Float64Array(N);
      y[N - 1] = dp[N - 1];
      for (let i = N - 2; i >= 0; i--) y[i] = dp[i] - cp[i] * y[i + 1];
      let s = 0; for (let i = 0; i < N; i++) s += y[i] * y[i];
      s = Math.sqrt(s * dx);
      for (let i = 0; i < N; i++) y[i] /= s;
      x = y;
    }
    // 부호: 크기가 의미 있는 첫 점이 양수
    let mx = 0; for (let i = 0; i < N; i++) mx = Math.max(mx, Math.abs(x[i]));
    for (let i = 0; i < N; i++) if (Math.abs(x[i]) > 0.05 * mx) { if (x[i] < 0) for (let j = 0; j < N; j++) x[j] = -x[j]; break; }
    return x;
  }
  /** 함수 V(x)로 격자와 퍼텐셜을 만들어 바로 푼다: Q.solve(Vf, x0, x1, {N, m, n}) → {x, dx, V, E, psi} */
  Q.solve = function (Vf, x0, x1, o = {}) {
    const g = Q.grid(x0, x1, o.N || 400), V = new Float64Array(g.n);
    for (let i = 0; i < g.n; i++) V[i] = Vf(g.x[i]);
    const r = Q.eigen(V, g.dx, o);
    return { x: g.x, dx: g.dx, V, E: r.E, psi: r.psi };
  };

  /* ------------------------------------------------------------ 해석해: 우물 */
  /** 무한 우물: E_n (eV), 폭 L(nm), 질량 m(me) */
  Q.infWellE = (n, L, m = 1) => (K.C / m) * (n * Math.PI / L) ** 2;
  /** 무한 우물 파동함수 (0 ≤ x ≤ L) */
  Q.infWellPsi = (n, L, x) => (x < 0 || x > L ? 0 : Math.sqrt(2 / L) * Math.sin((n * Math.PI * x) / L));
  /**
   * 유한 사각 우물(깊이 V0, 폭 L, 바닥 0, 바깥 V0) 속박 에너지들 (eV, 오름차순).
   * 짝: k tan(kL/2) = κ, 홀: −k cot(kL/2) = κ. mIn/mOut: 안/밖 유효 질량(벤다니엘–듀크 경계 조건)
   */
  Q.finiteWellE = function (V0, L, m = 1, mOut = m) {
    const out = [];
    const kmax = Math.sqrt(V0 * m / K.C);
    const f = (E, parity) => {
      const k = Math.sqrt(E * m / K.C), kap = Math.sqrt((V0 - E) * mOut / K.C);
      const s = Math.sin(k * L / 2), c = Math.cos(k * L / 2);
      // 짝: (k/m) s − (κ/mOut) c = 0, 홀: (k/m) c + (κ/mOut) s = 0
      return parity === 0 ? (k / m) * s - (kap / mOut) * c : (k / m) * c + (kap / mOut) * s;
    };
    const nseg = Math.max(200, Math.ceil(kmax * L * 20));
    for (const parity of [0, 1]) {
      let prevE = 1e-12 * V0, pv = f(prevE, parity);
      for (let i = 1; i <= nseg; i++) {
        const kk = (kmax * i) / nseg, E = Math.min(V0 * (1 - 1e-12), (K.C / m) * kk * kk), v = f(E, parity);
        if (pv * v < 0) {
          let a = prevE, b = E, fa = pv;
          for (let it = 0; it < 80; it++) { const mid = 0.5 * (a + b), fm = f(mid, parity); if (fa * fm <= 0) b = mid; else { a = mid; fa = fm; } }
          const r = 0.5 * (a + b);
          // tan의 극(불연속)에서 생긴 가짜 근 제거
          if (Math.abs(f(r, parity)) < 1e-3 * (Math.abs(pv) + Math.abs(v) + 1e-9)) out.push(r);
        }
        prevE = E; pv = v;
      }
    }
    return out.sort((a, b) => a - b);
  };
  /** 유한 우물 속박 상태 개수 = ⌈ √(2mV0)L/(πħ) ⌉ (근사 없이 정확) */
  Q.finiteWellCount = (V0, L, m = 1) => Math.ceil((L * Math.sqrt(V0 * m / K.C)) / Math.PI);

  /* ------------------------------------------------------------ 전달 행렬 (계단형 퍼텐셜) */
  /**
   * 구간별로 일정한 퍼텐셜의 투과·반사 확률.
   * layers: [{V, w, m?}, …] — 가운데 층들(폭 w nm). 왼쪽 바다 VL, 오른쪽 바다 VR (기본 0).
   * Q.transfer(E, layers, {VL, VR, m}) → {T, R, psi(x), ...}  x=0은 첫 층의 왼쪽 경계.
   * 경계 조건: ψ 연속, (1/m)ψ' 연속.
   */
  Q.transfer = function (E, layers, o = {}) {
    const m0 = o.m || 1, VL = o.VL || 0, VR = o.VR || 0;
    const regs = [{ V: VL, w: 0, m: o.mL || m0 }].concat(layers.map((l) => ({ V: l.V, w: l.w, m: l.m || m0 }))).concat([{ V: VR, w: 0, m: o.mR || m0 }]);
    const n = regs.length;
    const eps = 1e-9;
    const ks = regs.map((r) => { let d = E - r.V; if (Math.abs(d) < eps) d = eps; return csqrtR((d * r.m) / K.C); });
    // 각 영역 j의 국소 원점은 왼쪽 경계. 오른쪽 끝 영역: A=1, B=0 (투과파만)
    const A = new Array(n), B = new Array(n);
    A[n - 1] = cx(1); B[n - 1] = cx(0);
    for (let j = n - 2; j >= 0; j--) {
      // 경계(영역 j의 오른쪽 끝, 영역 j+1의 국소 0)에서 ψ와 ψ'/m
      const kR = ks[j + 1], mR = regs[j + 1].m;
      const psi = cadd(A[j + 1], B[j + 1]);
      const dpsi = cmul(cmul(cx(0, 1), kR), csub(A[j + 1], B[j + 1])); // ψ'
      const kL = ks[j], mL = regs[j].m, w = regs[j].w;
      // 영역 j: ψ'/mL = ψ'_R/mR  → ψ'_L = ψ'_R · mL/mR
      const dL = cx(dpsi.re * mL / mR, dpsi.im * mL / mR);
      const ik = cmul(cx(0, 1), kL);
      const half = cx(0.5);
      const ap = cmul(half, cadd(psi, cdiv(dL, ik)));  // A e^{ikw}
      const bp = cmul(half, csub(psi, cdiv(dL, ik)));  // B e^{-ikw}
      const ph = cmul(ik, cx(w));
      A[j] = cmul(ap, cexp(cx(-ph.re, -ph.im)));
      B[j] = cmul(bp, cexp(ph));
    }
    const k0 = ks[0], kN = ks[n - 1];
    let T = 0;
    if (k0.re > 0 && kN.re > 0) T = (kN.re / regs[n - 1].m) / (k0.re / regs[0].m) / cabs2(A[0]);
    const R = k0.re > 0 ? cabs2(B[0]) / cabs2(A[0]) : 1;
    const xs = [0]; for (let j = 1; j < n - 1; j++) xs.push(xs[j - 1] + regs[j].w);
    const width = xs[xs.length - 1];
    const a0 = A[0];
    /** 파동함수(입사 진폭 1로 정규화)의 복소값 */
    const psiAt = (x) => {
      let j;
      if (x < 0) j = 0; else { j = n - 1; for (let q = 1; q < n - 1; q++) if (x < xs[q]) { j = q; break; } }
      const x0 = j === 0 ? 0 : xs[j - 1];
      const ik = cmul(cx(0, 1), ks[j]), u = x - x0;
      const v = cadd(cmul(A[j], cexp(cmul(ik, cx(u)))), cmul(B[j], cexp(cmul(ik, cx(-u)))));
      return cdiv(v, a0);
    };
    return { T: Math.min(1, Math.max(0, T)), R: Math.min(1, Math.max(0, R)), psi: psiAt, width, k: ks, edges: xs };
  };
  /** 함수형 퍼텐셜 V(x) (0 ≤ x ≤ L)를 nSlab 계단으로 근사한 투과 확률 */
  Q.transferFn = function (E, Vf, L, o = {}) {
    const nS = o.n || 200, w = L / nS, layers = [];
    for (let i = 0; i < nS; i++) layers.push({ V: Vf((i + 0.5) * w), w });
    return Q.transfer(E, layers, o);
  };
  /** 사각 장벽 해석해: 높이 V0, 폭 a, 에너지 E */
  Q.barrierT = function (E, V0, a, m = 1) {
    if (E <= 0) return 0;
    if (Math.abs(E - V0) < 1e-12) { const k2 = E * m / K.C; return 1 / (1 + (k2 * a * a) / 4); }
    if (E < V0) {
      const kap = Math.sqrt((V0 - E) * m / K.C), s = Math.sinh(kap * a);
      return 1 / (1 + (V0 * V0 * s * s) / (4 * E * (V0 - E)));
    }
    const k2 = Math.sqrt((E - V0) * m / K.C), s = Math.sin(k2 * a);
    return 1 / (1 + (V0 * V0 * s * s) / (4 * E * (E - V0)));
  };
  /** 계단 퍼텐셜 (E > V0) 반사 확률 */
  Q.stepR = function (E, V0) {
    if (E <= V0) return 1;
    const k1 = Math.sqrt(E), k2 = Math.sqrt(E - V0);
    return ((k1 - k2) / (k1 + k2)) ** 2;
  };
  /** WKB 투과 확률 T ≈ exp(−2∫κ dx), Vf(x) (0..L) */
  Q.wkbT = function (E, Vf, L, o = {}) {
    const m = o.m || 1, n = o.n || 400, dx = L / n;
    let s = 0;
    for (let i = 0; i < n; i++) { const v = Vf((i + 0.5) * dx) - E; if (v > 0) s += Math.sqrt(v * m / K.C) * dx; }
    return Math.exp(-2 * s);
  };
  /** 파울러–노드하임 전류 밀도 J (A/m²): 전기장 F (V/m), 장벽 φB (eV), 산화막 유효 질량 mox (me) */
  Q.fowlerNordheim = function (F, phiB, mox = 0.42) {
    const q = K.e, h = K.h, me = K.me;
    const A = (q ** 3) / (8 * Math.PI * h * phiB * q) * (1 / mox);
    const Bc = (8 * Math.PI * Math.sqrt(2 * mox * me) * Math.pow(phiB * q, 1.5)) / (3 * q * h);
    return A * F * F * Math.exp(-Bc / F);
  };

  /* ------------------------------------------------------------ 시간 전개: 크랭크–니콜슨 */
  /**
   * 1차원 파속 전파기. V: 배열(eV), dx(nm), dt(fs), m(me).
   * const P = Q.propagator(V, dx, dt, {m, absorb}); P.step(re, im, nSteps)  (Float64Array 두 개를 제자리 갱신)
   * absorb > 0이면 양 끝 absorb 비율 구간에 흡수층(복소 퍼텐셜)을 둔다.
   */
  Q.propagator = function (V, dx, dt, o = {}) {
    const N = V.length, m = o.m || 1, t = K.C / (m * dx * dx), hb = K.hbarEv;
    const r = dt / (2 * hb); // (i H dt / 2ħ)
    const W = new Float64Array(N); // 흡수 (음의 허수 퍼텐셜 크기, eV)
    const ab = o.absorb || 0;
    if (ab > 0) {
      const nb = Math.max(2, Math.floor(N * ab)), W0 = o.absorbV || 0.6 * t;
      for (let i = 0; i < nb; i++) { const s = ((nb - i) / nb) ** 2; W[i] = W0 * s; W[N - 1 - i] = W0 * s; }
    }
    // A = 1 + i r H_eff, H_eff = H − iW. 대각: 1 + i r (2t + V) + r W, 비대각: −i r t
    const dRe = new Float64Array(N), dIm = new Float64Array(N);
    const setV = (Vn) => { for (let i = 0; i < N; i++) { dRe[i] = 1 + r * W[i]; dIm[i] = r * (2 * t + Vn[i]); } };
    setV(V);
    const offIm = -r * t; // 비대각 = i·offIm
    const cpR = new Float64Array(N), cpI = new Float64Array(N), bR = new Float64Array(N), bI = new Float64Array(N);
    const step1 = (re, im) => {
      // b = (2 − A) ψ = (1 − i r H_eff) ψ 의 켤레 형태: 대각 1 − r W − i r(2t+V), 비대각 +i r t
      for (let i = 0; i < N; i++) {
        const pr = re[i], pi = im[i];
        const dr = 2 - dRe[i], di = -dIm[i];
        let sr = dr * pr - di * pi, si = dr * pi + di * pr;
        const nr = (i > 0 ? re[i - 1] : 0) + (i < N - 1 ? re[i + 1] : 0);
        const ni = (i > 0 ? im[i - 1] : 0) + (i < N - 1 ? im[i + 1] : 0);
        // (+i r t)(nr + i ni) = −r t ni + i r t nr
        sr += -(-offIm) * ni; si += (-offIm) * nr;
        bR[i] = sr; bI[i] = si;
      }
      // 토머스: 비대각 c = a = i·offIm
      // cp0 = c/d0, dp0 = b0/d0
      let [qr, qi] = cdivArr(0, offIm, dRe[0], dIm[0]); cpR[0] = qr; cpI[0] = qi;
      let [pr0, pi0] = cdivArr(bR[0], bI[0], dRe[0], dIm[0]); re[0] = pr0; im[0] = pi0;
      for (let i = 1; i < N; i++) {
        // denom = d_i − a·cp_{i−1}, a = i·offIm → a·cp = (−offIm·cpI) + i(offIm·cpR)
        const den_r = dRe[i] - (-offIm * cpI[i - 1]), den_i = dIm[i] - offIm * cpR[i - 1];
        [qr, qi] = cdivArr(0, offIm, den_r, den_i); cpR[i] = qr; cpI[i] = qi;
        // num = b_i − a·dp_{i−1}
        const adr = -offIm * im[i - 1], adi = offIm * re[i - 1];
        const [xr, xi] = cdivArr(bR[i] - adr, bI[i] - adi, den_r, den_i); re[i] = xr; im[i] = xi;
      }
      for (let i = N - 2; i >= 0; i--) {
        const xr = re[i + 1], xi = im[i + 1];
        re[i] -= cpR[i] * xr - cpI[i] * xi; im[i] -= cpR[i] * xi + cpI[i] * xr;
      }
    };
    return {
      N, dx, dt,
      step(re, im, n = 1) { for (let s = 0; s < n; s++) step1(re, im); },
      setV,
      norm(re, im) { let s = 0; for (let i = 0; i < N; i++) s += re[i] * re[i] + im[i] * im[i]; return s * dx; },
    };
  };
  function cdivArr(ar, ai, br, bi) { const d = br * br + bi * bi; return [(ar * br + ai * bi) / d, (ai * br - ar * bi) / d]; }
  /** 가우스 파속: 중심 x0, 폭 σ, 중심 파수 k0 (1/nm) → {re, im} 정규화 */
  Q.gaussian = function (x, x0, sigma, k0) {
    const N = x.length, re = new Float64Array(N), im = new Float64Array(N);
    let s = 0;
    for (let i = 0; i < N; i++) { const u = (x[i] - x0) / sigma, a = Math.exp(-0.25 * u * u); re[i] = a * Math.cos(k0 * x[i]); im[i] = a * Math.sin(k0 * x[i]); s += a * a; }
    const dx = N > 1 ? x[1] - x[0] : 1, nrm = Math.sqrt(s * dx);
    for (let i = 0; i < N; i++) { re[i] /= nrm; im[i] /= nrm; }
    return { re, im };
  };
  /** 기댓값 ⟨x⟩, ⟨x²⟩ → {mean, sd} */
  Q.moments = function (x, re, im) {
    let s = 0, s1 = 0, s2 = 0;
    for (let i = 0; i < x.length; i++) { const p = re[i] * re[i] + im[i] * im[i]; s += p; s1 += p * x[i]; s2 += p * x[i] * x[i]; }
    const mean = s1 / s; return { mean, sd: Math.sqrt(Math.max(0, s2 / s - mean * mean)), total: s };
  };

  /* ------------------------------------------------------------ 조화 진동자 */
  /** 무차원 ξ = x/x0 에서 정규화된 ψ_n(ξ) (∫|ψ|²dξ = 1) */
  Q.hoPsi = function (n, xi) {
    let p0 = Math.pow(Math.PI, -0.25) * Math.exp(-0.5 * xi * xi);
    if (n === 0) return p0;
    let p1 = Math.SQRT2 * xi * p0;
    for (let k = 1; k < n; k++) { const p2 = Math.sqrt(2 / (k + 1)) * xi * p1 - Math.sqrt(k / (k + 1)) * p0; p0 = p1; p1 = p2; }
    return p1;
  };
  /** 에르미트 다항식 H_n(x) (물리학자 정의) */
  Q.hermite = function (n, x) { let a = 1, b = 2 * x; if (n === 0) return a; for (let k = 1; k < n; k++) { const c = 2 * x * b - 2 * k * a; a = b; b = c; } return b; };

  /* ------------------------------------------------------------ 수소 원자 */
  const fact = (n) => { let f = 1; for (let i = 2; i <= n; i++) f *= i; return f; };
  Q.factorial = fact;
  /** 수소 꼴 원자 에너지 (eV): Z, n, 환산 질량 보정 mu(me 단위, 기본 1) */
  Q.hydrogenE = (n, Z = 1, mu = 1) => (-K.Ry * Z * Z * mu) / (n * n);
  /** 일반화 라게르 L_k^α(x) */
  Q.laguerre = function (k, alpha, x) { let a = 1, b = 1 + alpha - x; if (k === 0) return a; for (let j = 1; j < k; j++) { const c = ((2 * j + 1 + alpha - x) * b - (j + alpha) * a) / (j + 1); a = b; b = c; } return b; };
  /** 지름 함수 R_nl(r), r은 a0 단위 (∫R² r² dr = 1, r도 a0 단위) */
  Q.radial = function (n, l, r, Z = 1) {
    const rho = (2 * Z * r) / n;
    const N = Math.sqrt(Math.pow((2 * Z) / n, 3) * fact(n - l - 1) / (2 * n * fact(n + l)));
    return N * Math.exp(-rho / 2) * Math.pow(rho, l) * Q.laguerre(n - l - 1, 2 * l + 1, rho);
  };
  /** 지름 확률 밀도 P(r) = r² R² (a0 단위) */
  Q.radialP = (n, l, r, Z = 1) => { const R = Q.radial(n, l, r, Z); return r * r * R * R; };
  /** 버금 르장드르 P_l^m(x), m ≥ 0 (콘던–쇼틀리 위상 포함) */
  Q.legendre = function (l, m, x) {
    let pmm = 1;
    if (m > 0) { const s = Math.sqrt(Math.max(0, (1 - x) * (1 + x))); let f = 1; for (let i = 1; i <= m; i++) { pmm *= -f * s; f += 2; } }
    if (l === m) return pmm;
    let pmmp1 = x * (2 * m + 1) * pmm;
    if (l === m + 1) return pmmp1;
    let pll = 0;
    for (let ll = m + 2; ll <= l; ll++) { pll = (x * (2 * ll - 1) * pmmp1 - (ll + m - 1) * pmm) / (ll - m); pmm = pmmp1; pmmp1 = pll; }
    return pll;
  };
  /** 실수 구면 조화 함수 Y_lm(θ, φ): m>0 → cos mφ, m<0 → sin |m|φ (화학의 px, py, dxy… 꼴) */
  Q.realY = function (l, m, theta, phi) {
    const am = Math.abs(m);
    const N = Math.sqrt(((2 * l + 1) / (4 * Math.PI)) * (fact(l - am) / fact(l + am)));
    const P = Q.legendre(l, am, Math.cos(theta)) * (am % 2 ? -1 : 1); // 콘던–쇼틀리 위상 제거
    if (m === 0) return N * P;
    return Math.SQRT2 * N * P * (m > 0 ? Math.cos(am * phi) : Math.sin(am * phi));
  };
  /** 오비탈 이름 */
  Q.orbitalName = function (n, l, m) {
    const L = "spdfgh"[l] || "?";
    const sub = { "1,1": "x", "1,-1": "y", "1,0": "z", "2,0": "z²", "2,1": "xz", "2,-1": "yz", "2,2": "x²−y²", "2,-2": "xy" }[l + "," + m];
    return n + L + (sub && l > 0 ? sub : "");
  };

  /* ------------------------------------------------------------ 양자 통계 */
  /** 페르미–디랙 점유 확률 */
  Q.fermi = (E, EF, T) => { if (T <= 0) return E < EF ? 1 : E === EF ? 0.5 : 0; const x = (E - EF) / Q.kT(T); return x > 700 ? 0 : x < -700 ? 1 : 1 / (1 + Math.exp(x)); };
  /** 보스–아인슈타인 점유 수 (μ = 0 기본) */
  Q.bose = (E, T, mu = 0) => { const x = (E - mu) / Q.kT(T); return x > 700 ? 0 : 1 / Math.expm1(x); };
  /** 맥스웰–볼츠만 인자 */
  Q.boltz = (E, EF, T) => Math.exp(-(E - EF) / Q.kT(T));
  /** 페르미–디랙 적분 F_{1/2}(η) (정규화: F → e^η, η ≪ −1) 수치 적분 */
  Q.fdHalf = function (eta) {
    const n = 400, xmax = Math.max(40, eta + 40), dx = xmax / n;
    let s = 0;
    for (let i = 0; i < n; i++) { const x = (i + 0.5) * dx, a = x - eta; s += Math.sqrt(x) / (1 + (a > 700 ? Infinity : Math.exp(a))) * dx; }
    return (2 / Math.sqrt(Math.PI)) * s;
  };
  /** 3차원 자유 전자 상태 밀도 g(E) (1/(eV·m³)), m(me) — 스핀 포함 */
  Q.dos3D = (E, m = 1) => (E <= 0 ? 0 : (1 / (2 * Math.PI * Math.PI)) * Math.pow((2 * m * K.me * K.e) / (K.hbar * K.hbar), 1.5) * Math.sqrt(E));
  /** 2차원 상태 밀도 (1/(eV·m²)) — 스핀 포함, 하위 띠 하나 */
  Q.dos2D = (m = 1) => (m * K.me * K.e) / (Math.PI * K.hbar * K.hbar);
  /** 자유 전자 페르미 에너지 (eV): n (1/m³) */
  Q.fermiEnergy = (n, m = 1) => ((K.hbar * K.hbar) / (2 * m * K.me)) * Math.pow(3 * Math.PI * Math.PI * n, 2 / 3) / K.e;
  /** 유효 상태 밀도 N_c = 2(2π m kT/h²)^{3/2} (1/m³) */
  Q.Neff = (m, T) => 2 * Math.pow((2 * Math.PI * m * K.me * K.kB * T) / (K.h * K.h), 1.5);

  /* ------------------------------------------------------------ 크로니히–페니 */
  /**
   * 주기 d = a + b (우물 a, 장벽 b, 장벽 높이 V0) 의 분산 관계 오른쪽 항 f(E):
   * cos(kd) = f(E). |f| ≤ 1인 에너지가 허용 띠.
   */
  Q.kpF = function (E, V0, a, b, m = 1) {
    if (E <= 0) E = 1e-9;
    const al = Math.sqrt(E * m / K.C);
    if (Math.abs(E - V0) < 1e-9) E += 2e-9;
    if (E < V0) {
      const be = Math.sqrt((V0 - E) * m / K.C);
      return Math.cos(al * a) * Math.cosh(be * b) + ((be * be - al * al) / (2 * al * be)) * Math.sin(al * a) * Math.sinh(be * b);
    }
    const be = Math.sqrt((E - V0) * m / K.C);
    return Math.cos(al * a) * Math.cos(be * b) - ((al * al + be * be) / (2 * al * be)) * Math.sin(al * a) * Math.sin(be * b);
  };
  /** 허용 띠 목록 [{lo, hi}] (eV), 0..Emax */
  Q.kpBands = function (V0, a, b, Emax, o = {}) {
    const m = o.m || 1, n = o.n || 3000, bands = [];
    let inBand = false, lo = 0;
    for (let i = 0; i <= n; i++) {
      const E = (Emax * i) / n + 1e-6, ok = Math.abs(Q.kpF(E, V0, a, b, m)) <= 1;
      if (ok && !inBand) { lo = E; inBand = true; }
      if (!ok && inBand) { bands.push({ lo, hi: E }); inBand = false; }
    }
    if (inBand) bands.push({ lo, hi: Emax });
    return bands;
  };
  /** 띠 구조 E(k) 점들 (환원 영역, k ∈ [0, π/d]) → [[k, E], …] 띠별 배열 */
  Q.kpDispersion = function (V0, a, b, Emax, o = {}) {
    const m = o.m || 1, d = a + b, n = o.n || 1500, bands = [];
    let cur = null;
    for (let i = 0; i <= n; i++) {
      const E = (Emax * i) / n + 1e-6, f = Q.kpF(E, V0, a, b, m);
      if (Math.abs(f) <= 1) { if (!cur) { cur = []; bands.push(cur); } cur.push([Math.acos(f) / d, E]); }
      else cur = null;
    }
    return bands;
  };
  /** 1차원 강결합(꽉 묶음) 띠: E(k) = E0 − 2t cos(ka) */
  Q.tightBinding = (k, a, E0, t) => E0 - 2 * t * Math.cos(k * a);

  /* ------------------------------------------------------------ 반도체·재료 대표값 (300 K) */
  /** Eg(eV), 격자 상수 a(nm), 비유전율, 유효 질량(me): mn(상태 밀도), mh(상태 밀도), ml·mt(전도대 계곡), 진성 농도 ni(cm⁻³), 직접/간접 */
  Q.materials = {
    Si:   { ko: "실리콘", Eg: 1.12, a: 0.5431, er: 11.7, mn: 1.08, mh: 0.81, ml: 0.98, mt: 0.19, mc: 0.26, ni: 1.0e10, gap: "간접", chi: 4.05, Nc: 2.8e19, Nv: 1.04e19 },
    Ge:   { ko: "저마늄", Eg: 0.66, a: 0.5658, er: 16.0, mn: 0.56, mh: 0.29, ml: 1.64, mt: 0.082, mc: 0.12, ni: 2.0e13, gap: "간접", chi: 4.0, Nc: 1.04e19, Nv: 6.0e18 },
    GaAs: { ko: "갈륨 비소", Eg: 1.42, a: 0.5653, er: 12.9, mn: 0.067, mh: 0.48, ml: 0.067, mt: 0.067, mc: 0.067, ni: 2.1e6, gap: "직접", chi: 4.07, Nc: 4.7e17, Nv: 7.0e18 },
    GaN:  { ko: "질화 갈륨", Eg: 3.4, a: 0.3189, er: 8.9, mn: 0.20, mh: 1.0, ml: 0.20, mt: 0.20, mc: 0.20, ni: 1e-10, gap: "직접", chi: 4.1 },
    InP:  { ko: "인화 인듐", Eg: 1.34, a: 0.5869, er: 12.5, mn: 0.08, mh: 0.6, ml: 0.08, mt: 0.08, mc: 0.08, ni: 1.3e7, gap: "직접", chi: 4.38 },
    SiC:  { ko: "탄화 규소(4H)", Eg: 3.26, a: 0.3073, er: 9.7, mn: 0.37, mh: 1.0, ml: 0.33, mt: 0.42, mc: 0.37, ni: 5e-9, gap: "간접", chi: 3.7 },
  };
  /** 게이트 절연막 대표값: 비유전율, 띠 간격(eV), Si 전도대와의 전도대 오프셋(eV), 막 속 터널링 유효 질량(me) */
  Q.dielectrics = {
    SiO2:  { ko: "이산화 규소", er: 3.9, Eg: 9.0, dEc: 3.1, mox: 0.42 },
    Si3N4: { ko: "질화 규소", er: 7.5, Eg: 5.3, dEc: 2.1, mox: 0.4 },
    Al2O3: { ko: "산화 알루미늄", er: 9.0, Eg: 8.8, dEc: 2.8, mox: 0.35 },
    HfO2:  { ko: "산화 하프늄", er: 25, Eg: 5.8, dEc: 1.5, mox: 0.17 },
  };
  /** 등가 산화막 두께 EOT = t·(3.9/εr) */
  Q.EOT = (t, er) => (t * 3.9) / er;
  /** 바파시니 근사의 Si 띠 간격 온도 의존 Eg(T) (eV) */
  Q.siEg = (T) => 1.17 - (4.73e-4 * T * T) / (T + 636);
  /** 수소 모형 얕은 주개 결합 에너지(eV)와 유효 보어 반지름(nm) */
  Q.donor = (m, er) => ({ Eb: (K.Ry * m) / (er * er), aB: (K.a0 * er) / m });

  /* ------------------------------------------------------------ 그리기 도우미 */
  /**
   * 퍼텐셜과 고유 상태를 '에너지 기준선 위의 파동함수'로 그린다(교과서 표준 그림).
   * Q.drawLevels(ctx, chart, x[], V[], {E:[…], psi:[…]}, {scale, prob, colors, fill})
   * chart: SB.chart 반환값 {X, Y}. scale: ψ 높이(eV 단위로 몇 eV)를 정한다.
   */
  Q.drawLevels = function (ctx, ch, x, V, st, o = {}) {
    const P = window.SB ? SB.palette() : { text: "#000", dim: "#666", series: ["#2f6fe0", "#e0602f", "#2fa36b", "#9a4ce0", "#d1a400"] };
    const cols = o.colors || P.series;
    ctx.save();
    ctx.strokeStyle = P.text; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i < x.length; i++) { const px = ch.X(x[i]), py = ch.Y(V[i]); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
    ctx.stroke();
    const n = st.E.length;
    for (let k = 0; k < n; k++) {
      const E = st.E[k], ps = st.psi[k], col = cols[k % cols.length];
      let mx = 0; for (let i = 0; i < ps.length; i++) mx = Math.max(mx, Math.abs(o.prob ? ps[i] * ps[i] : ps[i]));
      const sc = (o.scale || 0.3) / (mx || 1);
      ctx.setLineDash([4, 4]); ctx.strokeStyle = col; ctx.globalAlpha = 0.5; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(ch.X(x[0]), ch.Y(E)); ctx.lineTo(ch.X(x[x.length - 1]), ch.Y(E)); ctx.stroke();
      ctx.setLineDash([]); ctx.globalAlpha = 1; ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < ps.length; i++) { const v = o.prob ? ps[i] * ps[i] : ps[i]; const px = ch.X(x[i]), py = ch.Y(E + v * sc); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
      ctx.stroke();
      if (o.fill) { ctx.lineTo(ch.X(x[x.length - 1]), ch.Y(E)); ctx.lineTo(ch.X(x[0]), ch.Y(E)); ctx.closePath(); ctx.globalAlpha = 0.15; ctx.fillStyle = col; ctx.fill(); ctx.globalAlpha = 1; }
    }
    ctx.restore();
  };
  /** 위상을 색으로: 복소수 (re, im) → hsl 색 문자열 */
  Q.phaseColor = (re, im, a = 1) => `hsla(${((Math.atan2(im, re) * 180) / Math.PI + 360) % 360}, 75%, 50%, ${a})`;
})();
