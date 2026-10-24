/* ==========================================================================
   SciBook lib/qm.js — 양자역학 라이브러리 (전역 QM)
   복소수·복소 행렬(에르미트 고유값·행렬 지수), 스핀과 블로흐 구, 라비·블로흐 방정식,
   밀도 행렬(부분 대각합·얽힘·린드블라드), 큐비트 레지스터와 게이트, 조화 진동자 포크 공간
   (사다리 연산자·결맞음·압축 상태·위그너 함수), 각운동량(구면 조화 함수·클레브시–고르단·3j·
   위그너 d), 1차원·지름 고유값, 분할 연산자 시간 전개(FFT), 델타 퍼텐셜, 섭동·변분·WKB 도구,
   시간 의존 전이와 아인슈타인 계수, 산란(보른·부분파·위상 이동), 란다우 준위와 양자 홀,
   동일 입자, 그리기 도우미(블로흐 구·열지도·위상 색 파동함수).
   의존: 없음 (engine/js/scibook.js가 있으면 색을 SB.palette()에서 가져온다).
   quantum.js(전역 Q)와 함께 써도 되고 따로 써도 된다.

   단위 관례 (quantum.js와 같다): 길이 nm, 에너지 eV, 시간 fs, 질량은 전자 질량 me의 배수.
     ħ²/(2me) = QM.K.C = 0.0380998 eV·nm², ħ = 0.658212 eV·fs.
   행렬·스핀·큐비트·진동자 함수는 무차원(ħ = 1)으로 쓴다: 해밀토니언 H의 단위가 진동수면 t는 그 역수.
   복소수는 [re, im] 배열. 복소 행렬은 {r, c, re: Float64Array, im: Float64Array} (행 우선).
   벡터는 열이 하나인 행렬 (c = 1).
   ========================================================================== */
(function () {
  "use strict";
  const QM = (window.QM = {});

  /* ------------------------------------------------------------ 상수 (CODATA 2018) */
  const K = (QM.K = {
    h: 6.62607015e-34, hbar: 1.054571817e-34, c: 299792458, e: 1.602176634e-19,
    me: 9.1093837015e-31, mp: 1.67262192369e-27, kB: 1.380649e-23, eps0: 8.8541878128e-12, mu0: 1.25663706212e-6,
    a0: 0.0529177210903,       // 보어 반지름 nm
    Ry: 13.605693122994,       // 뤼드베리 에너지 eV
    Ha: 27.211386245988,       // 하트리 에너지 eV
    alpha: 7.2973525693e-3,    // 미세 구조 상수
    muB: 5.7883818060e-5,      // 보어 마그네톤 eV/T
    muN: 3.15245125844e-8,     // 핵 마그네톤 eV/T
    ge: 2.00231930436,         // 전자 g 인자(크기)
    gammaP: 42.577478518,      // 양성자 자기 회전비 MHz/T (γ/2π)
    hc: 1239.84198,            // eV·nm
    hbarEv: 0.6582119569,      // ħ, eV·fs
    hbarC: 197.3269804,        // ħc, eV·nm
    kBev: 8.617333262e-5,      // eV/K
    mec2: 510998.95,           // eV
    C: 0.0380998212,           // ħ²/(2me), eV·nm²
    flux0: 4.135667696e-15,    // h/e, Wb (정상 전도체 자속 양자)
    flux0SC: 2.067833848e-15,  // h/2e, Wb (초전도 자속 양자)
    RK: 25812.80745,           // 폰 클리칭 상수 h/e², Ω
    G0: 7.748091729e-5,        // 컨덕턴스 양자 2e²/h, S
  });

  /* ------------------------------------------------------------ 작은 도구 */
  QM.clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  QM.linspace = (a, b, n) => { const out = new Float64Array(n); for (let i = 0; i < n; i++) out[i] = n === 1 ? a : a + ((b - a) * i) / (n - 1); return out; };
  /** 시드 난수 (mulberry32) → 0..1 */
  QM.rng = function (seed = 1) {
    let s = seed >>> 0 || 1;
    const f = () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    f.normal = () => { let u = 0; while (u === 0) u = f(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * f()); };
    return f;
  };
  const LF = [0]; // ln n!
  QM.lnFact = (n) => { if (n < 0) return NaN; for (let k = LF.length; k <= n; k++) LF[k] = LF[k - 1] + Math.log(k); return LF[n]; };
  QM.fact = (n) => { let f = 1; for (let i = 2; i <= n; i++) f *= i; return f; };
  /** 이분법 근 (f(a)·f(b) ≤ 0) */
  QM.bisect = function (f, a, b, tol = 1e-12, it = 200) {
    let fa = f(a); if (fa === 0) return a; const fb = f(b); if (fb === 0) return b; if (fa * fb > 0) return NaN;
    for (let i = 0; i < it && b - a > tol; i++) { const m = 0.5 * (a + b), fm = f(m); if (fa * fm <= 0) b = m; else { a = m; fa = fm; } }
    return 0.5 * (a + b);
  };
  /** 구간 [a,b]를 n등분해 부호가 바뀌는 근을 모두 찾는다 (발산 점 제외) */
  QM.roots = function (f, a, b, n = 400) {
    const out = []; let x0 = a, f0 = f(a);
    for (let i = 1; i <= n; i++) {
      const x1 = a + ((b - a) * i) / n, f1 = f(x1);
      if (isFinite(f0) && isFinite(f1) && f0 * f1 <= 0) {
        const r = QM.bisect(f, x0, x1);
        if (isFinite(r)) { const fr = Math.abs(f(r)); if (fr < 1e-6 * (Math.abs(f0) + Math.abs(f1)) + 1e-9) out.push(r); }
      }
      x0 = x1; f0 = f1;
    }
    return out;
  };
  /** 황금 분할 최소화 → {x, f} */
  QM.golden = function (f, a, b, tol = 1e-10) {
    const g = (Math.sqrt(5) - 1) / 2; let c = b - g * (b - a), d = a + g * (b - a), fc = f(c), fd = f(d);
    while (Math.abs(b - a) > tol * (1 + Math.abs(a) + Math.abs(b))) {
      if (fc < fd) { b = d; d = c; fd = fc; c = b - g * (b - a); fc = f(c); } else { a = c; c = d; fc = fd; d = a + g * (b - a); fd = f(d); }
    }
    const x = 0.5 * (a + b); return { x, f: f(x) };
  };
  /** 넬더–미드 다변수 최소화 → {x:[…], f} */
  QM.nelderMead = function (f, x0, step = 0.1, it = 2000, tol = 1e-12) {
    const n = x0.length; let S = [x0.slice()];
    for (let i = 0; i < n; i++) { const v = x0.slice(); v[i] += Array.isArray(step) ? step[i] : step; S.push(v); }
    let F = S.map(f);
    for (let k = 0; k < it; k++) {
      const idx = F.map((v, i) => i).sort((a, b) => F[a] - F[b]); S = idx.map((i) => S[i]); F = idx.map((i) => F[i]);
      if (Math.abs(F[n] - F[0]) < tol * (1 + Math.abs(F[0]))) break;
      const c = new Array(n).fill(0); for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) c[j] += S[i][j] / n;
      const pt = (t) => c.map((v, j) => v + t * (S[n][j] - v));
      const xr = pt(-1), fr = f(xr);
      if (fr < F[0]) { const xe = pt(-2), fe = f(xe); if (fe < fr) { S[n] = xe; F[n] = fe; } else { S[n] = xr; F[n] = fr; } }
      else if (fr < F[n - 1]) { S[n] = xr; F[n] = fr; }
      else { const xc = pt(0.5), fcn = f(xc); if (fcn < F[n]) { S[n] = xc; F[n] = fcn; } else { for (let i = 1; i <= n; i++) { S[i] = S[i].map((v, j) => S[0][j] + 0.5 * (v - S[0][j])); F[i] = f(S[i]); } } }
    }
    let b = 0; for (let i = 1; i <= n; i++) if (F[i] < F[b]) b = i;
    return { x: S[b], f: F[b] };
  };
  /** 심프슨 적분 (n 짝수로 맞춤) */
  QM.simpson = function (f, a, b, n = 400) { if (n % 2) n++; const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h); return (s * h) / 3; };
  /** 배열 사다리꼴 적분 */
  QM.trapz = function (y, dx) { let s = 0; for (let i = 0; i < y.length; i++) s += (i === 0 || i === y.length - 1 ? 0.5 : 1) * y[i]; return s * dx; };
  QM.erf = function (x) { // Abramowitz–Stegun 7.1.26 보다 정밀한 연분수 없이: 급수/점근 혼합 (상대 오차 < 1e-12)
    const ax = Math.abs(x);
    if (ax < 2.5) { let s = 0, t = ax, n = 0; while (Math.abs(t) > 1e-17 * Math.abs(s) || n < 3) { s += t / (2 * n + 1); n++; t *= (-ax * ax) / n; if (n > 200) break; } return Math.sign(x) * (2 / Math.sqrt(Math.PI)) * s; }
    let f = 0; for (let k = 60; k >= 1; k--) f = (k / 2) / (ax + f); const erfc = Math.exp(-ax * ax) / Math.sqrt(Math.PI) / (ax + f);
    return Math.sign(x) * (1 - erfc);
  };

  /* ------------------------------------------------------------ 복소 스칼라 [re, im] */
  const C = (QM.c = {
    of: (re, im = 0) => [re, im],
    add: (a, b) => [a[0] + b[0], a[1] + b[1]],
    sub: (a, b) => [a[0] - b[0], a[1] - b[1]],
    mul: (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]],
    div: (a, b) => { const d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; },
    conj: (a) => [a[0], -a[1]],
    scale: (a, s) => [a[0] * s, a[1] * s],
    abs: (a) => Math.hypot(a[0], a[1]),
    abs2: (a) => a[0] * a[0] + a[1] * a[1],
    arg: (a) => Math.atan2(a[1], a[0]),
    expi: (t) => [Math.cos(t), Math.sin(t)],                // e^{it}
    exp: (a) => { const m = Math.exp(a[0]); return [m * Math.cos(a[1]), m * Math.sin(a[1])]; },
    sqrt: (a) => { const r = Math.hypot(a[0], a[1]), t = Math.atan2(a[1], a[0]) / 2, s = Math.sqrt(r); return [s * Math.cos(t), s * Math.sin(t)]; },
    polar: (r, t) => [r * Math.cos(t), r * Math.sin(t)],
    fmt: (a, d = 3) => { const r = +a[0].toFixed(d), i = +a[1].toFixed(d); if (i === 0) return String(r); if (r === 0) return (i === 1 ? "" : i === -1 ? "−" : String(i).replace("-", "−")) + "i"; return `${String(r).replace("-", "−")} ${i < 0 ? "−" : "+"} ${Math.abs(i) === 1 ? "" : Math.abs(i)}i`; },
  });
  const toC = (z) => (Array.isArray(z) ? z : [z, 0]);

  /* ------------------------------------------------------------ 복소 행렬 */
  /** 빈 행렬 r×c */
  QM.zeros = (r, c = r) => ({ r, c, re: new Float64Array(r * c), im: new Float64Array(r * c) });
  QM.eye = (n) => { const M = QM.zeros(n); for (let i = 0; i < n; i++) M.re[i * n + i] = 1; return M; };
  /** 중첩 배열 → 행렬. 원소는 실수 또는 [re, im]. 1차원 배열은 열벡터. */
  QM.mat = function (rows) {
    if (!Array.isArray(rows[0])) rows = rows.map((z) => [z]); // 1차원 → 열벡터 (복소 성분 벡터는 QM.vec)
    const r = rows.length, c = rows[0].length, M = QM.zeros(r, c);
    for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) { const z = toC(rows[i][j]); M.re[i * c + j] = z[0]; M.im[i * c + j] = z[1]; }
    return M;
  };
  /** 열벡터: QM.vec([1, [0, 1], 0.5]) (원소는 실수 또는 [re, im]) */
  QM.vec = function (arr) { const n = arr.length, v = QM.zeros(n, 1); for (let i = 0; i < n; i++) { const z = toC(arr[i]); v.re[i] = z[0]; v.im[i] = z[1]; } return v; };
  /** 기저 벡터 |k⟩ (차원 n) */
  QM.basis = (n, k) => { const v = QM.zeros(n, 1); v.re[k] = 1; return v; };
  QM.get = (M, i, j = 0) => [M.re[i * M.c + j], M.im[i * M.c + j]];
  QM.set = (M, i, j, z) => { z = toC(z); M.re[i * M.c + j] = z[0]; M.im[i * M.c + j] = z[1]; return M; };
  QM.copy = (M) => ({ r: M.r, c: M.c, re: Float64Array.from(M.re), im: Float64Array.from(M.im) });
  /** 행렬 → 중첩 배열 [[ [re,im], … ], …] */
  QM.toArray = (M) => Array.from({ length: M.r }, (_, i) => Array.from({ length: M.c }, (_, j) => QM.get(M, i, j)));
  QM.add = (A, B) => { const M = QM.copy(A); for (let k = 0; k < M.re.length; k++) { M.re[k] += B.re[k]; M.im[k] += B.im[k]; } return M; };
  QM.sub = (A, B) => { const M = QM.copy(A); for (let k = 0; k < M.re.length; k++) { M.re[k] -= B.re[k]; M.im[k] -= B.im[k]; } return M; };
  /** 스칼라 곱 (s: 실수 또는 [re, im]) */
  QM.scale = (A, s) => { s = toC(s); const M = QM.zeros(A.r, A.c); for (let k = 0; k < M.re.length; k++) { M.re[k] = A.re[k] * s[0] - A.im[k] * s[1]; M.im[k] = A.re[k] * s[1] + A.im[k] * s[0]; } return M; };
  /** 선형 결합 Σ s_k A_k : QM.lin([[s1, A1], [s2, A2], …]) */
  QM.lin = (terms) => { let M = QM.zeros(terms[0][1].r, terms[0][1].c); for (const [s, A] of terms) M = QM.add(M, QM.scale(A, s)); return M; };
  QM.mul = function (A, B) {
    if (arguments.length > 2) { let M = A; for (let k = 1; k < arguments.length; k++) M = QM.mul(M, arguments[k]); return M; }
    const n = A.r, m = B.c, p = A.c, M = QM.zeros(n, m);
    for (let i = 0; i < n; i++) for (let k = 0; k < p; k++) {
      const ar = A.re[i * p + k], ai = A.im[i * p + k]; if (ar === 0 && ai === 0) continue;
      for (let j = 0; j < m; j++) { const br = B.re[k * m + j], bi = B.im[k * m + j]; M.re[i * m + j] += ar * br - ai * bi; M.im[i * m + j] += ar * bi + ai * br; }
    }
    return M;
  };
  /** 켤레 전치 A† */
  QM.dag = (A) => { const M = QM.zeros(A.c, A.r); for (let i = 0; i < A.r; i++) for (let j = 0; j < A.c; j++) { M.re[j * A.r + i] = A.re[i * A.c + j]; M.im[j * A.r + i] = -A.im[i * A.c + j]; } return M; };
  QM.transpose = (A) => { const M = QM.zeros(A.c, A.r); for (let i = 0; i < A.r; i++) for (let j = 0; j < A.c; j++) { M.re[j * A.r + i] = A.re[i * A.c + j]; M.im[j * A.r + i] = A.im[i * A.c + j]; } return M; };
  /** 크로네커(텐서) 곱 A ⊗ B (여러 개 가능) */
  QM.kron = function (A, B) {
    if (arguments.length > 2) { let M = A; for (let k = 1; k < arguments.length; k++) M = QM.kron(M, arguments[k]); return M; }
    const M = QM.zeros(A.r * B.r, A.c * B.c);
    for (let i = 0; i < A.r; i++) for (let j = 0; j < A.c; j++) {
      const ar = A.re[i * A.c + j], ai = A.im[i * A.c + j]; if (ar === 0 && ai === 0) continue;
      for (let k = 0; k < B.r; k++) for (let l = 0; l < B.c; l++) {
        const br = B.re[k * B.c + l], bi = B.im[k * B.c + l], idx = (i * B.r + k) * M.c + (j * B.c + l);
        M.re[idx] = ar * br - ai * bi; M.im[idx] = ar * bi + ai * br;
      }
    }
    return M;
  };
  /** 교환자 [A,B], 반교환자 {A,B} */
  QM.comm = (A, B) => QM.sub(QM.mul(A, B), QM.mul(B, A));
  QM.acomm = (A, B) => QM.add(QM.mul(A, B), QM.mul(B, A));
  QM.trace = (A) => { let r = 0, i = 0; for (let k = 0; k < A.r; k++) { r += A.re[k * A.c + k]; i += A.im[k * A.c + k]; } return [r, i]; };
  /** 내적 ⟨a|b⟩ → [re, im] */
  QM.inner = (a, b) => { let r = 0, i = 0; for (let k = 0; k < a.re.length; k++) { r += a.re[k] * b.re[k] + a.im[k] * b.im[k]; i += a.re[k] * b.im[k] - a.im[k] * b.re[k]; } return [r, i]; };
  QM.norm = (v) => { let s = 0; for (let k = 0; k < v.re.length; k++) s += v.re[k] * v.re[k] + v.im[k] * v.im[k]; return Math.sqrt(s); };
  QM.normalize = (v) => { const n = QM.norm(v); return n ? QM.scale(v, 1 / n) : QM.copy(v); };
  /** 기댓값 ⟨ψ|A|ψ⟩ (ψ 정규화 가정) → 실수부 (에르미트면 허수부 0). QM.expectC는 복소. */
  QM.expectC = (psi, A) => QM.inner(psi, QM.mul(A, psi));
  QM.expect = (psi, A) => QM.expectC(psi, A)[0];
  /** 행렬 요소 ⟨a|A|b⟩ → [re, im] */
  QM.elem = (a, A, b) => QM.inner(a, QM.mul(A, b));
  /** 외적 |a⟩⟨b| */
  QM.outer = (a, b) => QM.mul(a, QM.dag(b));
  /** 각 성분의 확률 |c_k|² 배열 */
  QM.probs = (v) => Array.from(v.re, (r, k) => r * r + v.im[k] * v.im[k]);
  /** 전역 위상 정리: 첫 번째 큰 성분이 양의 실수가 되게 */
  QM.fixPhase = (v) => { let k = 0, mx = 0; for (let i = 0; i < v.re.length; i++) { const p = v.re[i] ** 2 + v.im[i] ** 2; if (p > mx * 1.000001 + 1e-12) { mx = p; k = i; } } const ph = Math.atan2(v.im[k], v.re[k]); return QM.scale(v, [Math.cos(-ph), Math.sin(-ph)]); };
  QM.isHermitian = (A, tol = 1e-10) => { for (let i = 0; i < A.r; i++) for (let j = 0; j < A.c; j++) { if (Math.abs(A.re[i * A.c + j] - A.re[j * A.c + i]) > tol || Math.abs(A.im[i * A.c + j] + A.im[j * A.c + i]) > tol) return false; } return true; };
  QM.isUnitary = (U, tol = 1e-10) => { const P = QM.mul(QM.dag(U), U); for (let i = 0; i < U.r; i++) for (let j = 0; j < U.r; j++) { if (Math.abs(P.re[i * U.r + j] - (i === j ? 1 : 0)) > tol || Math.abs(P.im[i * U.r + j]) > tol) return false; } return true; };
  /** 열 j를 벡터로 */
  QM.col = (A, j) => { const v = QM.zeros(A.r, 1); for (let i = 0; i < A.r; i++) { v.re[i] = A.re[i * A.c + j]; v.im[i] = A.im[i * A.c + j]; } return v; };
  /** 벡터들을 열로 모은 행렬 */
  QM.fromCols = (vs) => { const M = QM.zeros(vs[0].r, vs.length); vs.forEach((v, j) => { for (let i = 0; i < v.r; i++) { M.re[i * M.c + j] = v.re[i]; M.im[i * M.c + j] = v.im[i]; } }); return M; };
  /** 대각 행렬 (실수 또는 [re,im] 배열) */
  QM.diag = (d) => { const n = d.length, M = QM.zeros(n); for (let i = 0; i < n; i++) { const z = toC(d[i]); M.re[i * n + i] = z[0]; M.im[i * n + i] = z[1]; } return M; };

  /**
   * 에르미트 행렬의 고유값 분해 (복소 야코비 회전). 작은 행렬(n ≲ 150)용.
   * QM.eigh(H) → {E: [오름차순 실수], V: [고유벡터(열벡터)…], U: 열이 고유벡터인 유니터리 행렬}
   */
  QM.eigh = function (H) {
    const n = H.r, Ar = Float64Array.from(H.re), Ai = Float64Array.from(H.im);
    const Vr = new Float64Array(n * n), Vi = new Float64Array(n * n);
    for (let i = 0; i < n; i++) Vr[i * n + i] = 1;
    // 에르미트 대칭화
    for (let i = 0; i < n; i++) { Ai[i * n + i] = 0; for (let j = i + 1; j < n; j++) { const r = 0.5 * (Ar[i * n + j] + Ar[j * n + i]), m = 0.5 * (Ai[i * n + j] - Ai[j * n + i]); Ar[i * n + j] = r; Ar[j * n + i] = r; Ai[i * n + j] = m; Ai[j * n + i] = -m; } }
    let scale = 0; for (let k = 0; k < n * n; k++) scale = Math.max(scale, Math.abs(Ar[k]), Math.abs(Ai[k]));
    const tol = 1e-15 * (scale || 1);
    for (let sweep = 0; sweep < 60; sweep++) {
      let off = 0; for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) off += Ar[p * n + q] ** 2 + Ai[p * n + q] ** 2;
      if (Math.sqrt(off) <= tol * n) break;
      for (let p = 0; p < n - 1; p++) for (let q = p + 1; q < n; q++) {
        const gr = Ar[p * n + q], gi = Ai[p * n + q], g = Math.hypot(gr, gi);
        if (g <= tol * 1e-3) continue;
        // 1) 위상: 열 q에 e^{iφ}, 행 q에 e^{-iφ}를 곱해 A_pq를 실수 |g|로 (φ = arg g)
        const cph = gr / g, sph = gi / g; // e^{iφ}
        for (let k = 0; k < n; k++) { // 열 q × e^{-iφ}?  A' = D† A D, D = diag(…, e^{-iφ} at q) → A'_pq = A_pq e^{-iφ} = |g|
          let r = Ar[k * n + q], m = Ai[k * n + q];
          Ar[k * n + q] = r * cph + m * sph; Ai[k * n + q] = m * cph - r * sph;
          r = Vr[k * n + q]; m = Vi[k * n + q];
          Vr[k * n + q] = r * cph + m * sph; Vi[k * n + q] = m * cph - r * sph;
        }
        for (let k = 0; k < n; k++) { // 행 q × e^{+iφ}
          const r = Ar[q * n + k], m = Ai[q * n + k];
          Ar[q * n + k] = r * cph - m * sph; Ai[q * n + k] = m * cph + r * sph;
        }
        // 2) 실수 회전: tan 2θ = 2g/(a_qq − a_pp)
        const app = Ar[p * n + p], aqq = Ar[q * n + q], th = 0.5 * Math.atan2(2 * g, aqq - app), c = Math.cos(th), s = Math.sin(th);
        for (let k = 0; k < n; k++) { // 열: p ← c p − s q, q ← s p + c q
          const pr = Ar[k * n + p], pi = Ai[k * n + p], qr = Ar[k * n + q], qi = Ai[k * n + q];
          Ar[k * n + p] = c * pr - s * qr; Ai[k * n + p] = c * pi - s * qi; Ar[k * n + q] = s * pr + c * qr; Ai[k * n + q] = s * pi + c * qi;
          const vpr = Vr[k * n + p], vpi = Vi[k * n + p], vqr = Vr[k * n + q], vqi = Vi[k * n + q];
          Vr[k * n + p] = c * vpr - s * vqr; Vi[k * n + p] = c * vpi - s * vqi; Vr[k * n + q] = s * vpr + c * vqr; Vi[k * n + q] = s * vpi + c * vqi;
        }
        for (let k = 0; k < n; k++) { // 행
          const pr = Ar[p * n + k], pi = Ai[p * n + k], qr = Ar[q * n + k], qi = Ai[q * n + k];
          Ar[p * n + k] = c * pr - s * qr; Ai[p * n + k] = c * pi - s * qi; Ar[q * n + k] = s * pr + c * qr; Ai[q * n + k] = s * pi + c * qi;
        }
        Ar[p * n + q] = Ar[q * n + p] = 0; Ai[p * n + q] = Ai[q * n + p] = 0;
      }
    }
    const idx = Array.from({ length: n }, (_, i) => i).sort((a, b) => Ar[a * n + a] - Ar[b * n + b]);
    const E = idx.map((i) => Ar[i * n + i]);
    const V = idx.map((j) => { const v = QM.zeros(n, 1); for (let i = 0; i < n; i++) { v.re[i] = Vr[i * n + j]; v.im[i] = Vi[i * n + j]; } return QM.fixPhase(v); });
    return { E, V, U: QM.fromCols(V) };
  };
  /** 에르미트 행렬 함수 f(H) = U f(E) U† (f: 실수 → [re, im] 또는 실수) */
  QM.funcH = function (H, f) {
    const { E, U } = QM.eigh(H);
    return QM.mul(U, QM.diag(E.map((e) => toC(f(e)))), QM.dag(U));
  };
  /** 시간 전개 연산자 U(t) = exp(−iHt) (ħ = 1) */
  QM.expmH = (H, t = 1) => QM.funcH(H, (e) => [Math.cos(-e * t), Math.sin(-e * t)]);
  /** 일반 행렬 지수 exp(A) (스케일링–제곱 + 테일러) */
  QM.expm = function (A) {
    let nrm = 0; for (let k = 0; k < A.re.length; k++) nrm = Math.max(nrm, Math.hypot(A.re[k], A.im[k]));
    const s = Math.max(0, Math.ceil(Math.log2(nrm * A.r + 1e-300)) + 1), B = QM.scale(A, 1 / 2 ** s);
    let term = QM.eye(A.r), sum = QM.eye(A.r);
    for (let k = 1; k < 30; k++) { term = QM.scale(QM.mul(term, B), 1 / k); sum = QM.add(sum, term); }
    for (let k = 0; k < s; k++) sum = QM.mul(sum, sum);
    return sum;
  };
  /** 실대칭 일반화 고유값 문제 H c = E S c (S 양정치, 레일리–리츠). H,S: 실수 중첩 배열 → {E, c:[배열…]} */
  QM.geneig = function (H, S) {
    const n = H.length, L = Array.from({ length: n }, () => new Float64Array(n));
    for (let i = 0; i < n; i++) for (let j = 0; j <= i; j++) {
      let s = S[i][j]; for (let k = 0; k < j; k++) s -= L[i][k] * L[j][k];
      if (i === j) { if (s <= 0) return null; L[i][i] = Math.sqrt(s); } else L[i][j] = s / L[j][j];
    }
    const Li = Array.from({ length: n }, () => new Float64Array(n)); // L⁻¹ (하삼각)
    for (let j = 0; j < n; j++) { Li[j][j] = 1 / L[j][j]; for (let i = j + 1; i < n; i++) { let s = 0; for (let k = j; k < i; k++) s -= L[i][k] * Li[k][j]; Li[i][j] = s / L[i][i]; } }
    const Cm = QM.zeros(n);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { let s = 0; for (let k = 0; k <= i; k++) for (let l = 0; l <= j; l++) s += Li[i][k] * H[k][l] * Li[j][l]; Cm.re[i * n + j] = s; }
    const { E, V } = QM.eigh(Cm);
    const c = V.map((v) => { const y = Array.from(v.re); const x = new Array(n).fill(0); for (let i = n - 1; i >= 0; i--) { let s = y[i]; for (let k = i + 1; k < n; k++) s -= L[k][i] * x[k]; x[i] = s / L[i][i]; } return x; });
    return { E, c };
  };
  /** 행렬을 KaTeX pmatrix 문자열로 (d: 소수 자리) */
  QM.tex = function (M, d = 2) {
    const f = (z) => { const r = +z[0].toFixed(d), i = +z[1].toFixed(d); const rs = String(r).replace("-", "-"); if (Math.abs(i) < 10 ** -d / 2) return rs; const is = (Math.abs(i) === 1 ? "" : Math.abs(i)) + "i"; if (Math.abs(r) < 10 ** -d / 2) return (i < 0 ? "-" : "") + is; return rs + (i < 0 ? "-" : "+") + is; };
    const rows = []; for (let i = 0; i < M.r; i++) { const row = []; for (let j = 0; j < M.c; j++) row.push(f(QM.get(M, i, j))); rows.push(row.join(" & ")); }
    return "\\begin{pmatrix}" + rows.join(" \\\\ ") + "\\end{pmatrix}";
  };

  /* ------------------------------------------------------------ 스핀과 블로흐 구 */
  QM.I2 = QM.eye(2);
  QM.sx = QM.mat([[0, 1], [1, 0]]);
  QM.sy = QM.mat([[0, [0, -1]], [[0, 1], 0]]);
  QM.sz = QM.mat([[1, 0], [0, -1]]);
  QM.up = QM.vec([1, 0]); QM.down = QM.vec([0, 1]);
  /**
   * 스핀 j 연산자 (ħ = 1), 기저 순서 m = j, j−1, …, −j.  QM.spinOps(1/2) = 파울리/2.
   * → {Jx, Jy, Jz, Jp, Jm, J2, m:[…], dim}
   */
  QM.spinOps = function (j) {
    const d = Math.round(2 * j + 1), m = Array.from({ length: d }, (_, k) => j - k);
    const Jz = QM.diag(m), Jp = QM.zeros(d), Jm = QM.zeros(d);
    for (let k = 1; k < d; k++) { const mm = m[k], v = Math.sqrt(j * (j + 1) - mm * (mm + 1)); Jp.re[(k - 1) * d + k] = v; Jm.re[k * d + (k - 1)] = v; }
    const Jx = QM.scale(QM.add(Jp, Jm), 0.5), Jy = QM.scale(QM.sub(Jp, Jm), [0, -0.5]);
    const J2 = QM.add(QM.add(QM.mul(Jx, Jx), QM.mul(Jy, Jy)), QM.mul(Jz, Jz));
    return { Jx, Jy, Jz, Jp, Jm, J2, m, dim: d };
  };
  /** 블로흐 구 위 상태 |ψ⟩ = cos(θ/2)|↑⟩ + e^{iφ} sin(θ/2)|↓⟩ */
  QM.blochState = (theta, phi) => QM.vec([Math.cos(theta / 2), C.polar(Math.sin(theta / 2), phi)]);
  /** 2성분 상태 → 블로흐 벡터 [x, y, z] (정규화 가정) */
  QM.bloch = function (v) {
    const ar = v.re[0], ai = v.im[0], br = v.re[1], bi = v.im[1];
    const n = ar * ar + ai * ai + br * br + bi * bi || 1;
    return [(2 * (ar * br + ai * bi)) / n, (2 * (ar * bi - ai * br)) / n, (ar * ar + ai * ai - br * br - bi * bi) / n];
  };
  /** 2×2 밀도 행렬 → 블로흐 벡터 */
  QM.blochRho = (rho) => [2 * rho.re[1], -2 * rho.im[1], rho.re[0] - rho.re[3]];
  /** 블로흐 벡터 → 밀도 행렬 ρ = (I + r·σ)/2 */
  QM.rhoBloch = (r) => QM.mat([[(1 + r[2]) / 2, [r[0] / 2, -r[1] / 2]], [[r[0] / 2, r[1] / 2], (1 - r[2]) / 2]]);
  /** 블로흐 벡터 → (θ, φ) */
  QM.blochAngles = (r) => { const n = Math.hypot(r[0], r[1], r[2]) || 1; return { theta: Math.acos(QM.clamp(r[2] / n, -1, 1)), phi: Math.atan2(r[1], r[0]) }; };
  /** n̂·σ (단위 벡터 n) */
  QM.nSigma = (n) => QM.lin([[n[0], QM.sx], [n[1], QM.sy], [n[2], QM.sz]]);
  /** 축 n 둘레로 각 θ 회전: R = exp(−iθ n·σ/2) */
  QM.rot = (n, theta) => { const L = Math.hypot(n[0], n[1], n[2]) || 1, c = Math.cos(theta / 2), s = Math.sin(theta / 2); return QM.lin([[c, QM.I2], [[0, -s], QM.nSigma([n[0] / L, n[1] / L, n[2] / L])]]); };
  /** 3D 벡터 도구 */
  QM.v3 = {
    add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]], scale: (a, s) => [a[0] * s, a[1] * s, a[2] * s],
    dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2], cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    norm: (a) => Math.hypot(a[0], a[1], a[2]), unit: (a) => { const n = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / n, a[1] / n, a[2] / n]; },
    /** 로드리게스 회전: 축 n 둘레로 각 θ */
    rotate: (v, n, th) => { const k = QM.v3.unit(n), c = Math.cos(th), s = Math.sin(th), kv = QM.v3.cross(k, v), kd = QM.v3.dot(k, v); return [v[0] * c + kv[0] * s + k[0] * kd * (1 - c), v[1] * c + kv[1] * s + k[1] * kd * (1 - c), v[2] * c + kv[2] * s + k[2] * kd * (1 - c)]; },
  };
  /**
   * 라비 공식: 바닥 상태에서 출발한 2준위 계가 시간 t 뒤 위 상태에 있을 확률.
   * Ω: 라비 진동수(각진동수), Δ: 이조(detuning) 각진동수 (ω − ω0). 같은 단위의 t.
   */
  QM.rabiP = (Omega, Delta, t) => { const W = Math.hypot(Omega, Delta); return W === 0 ? 0 : ((Omega * Omega) / (W * W)) * Math.sin((W * t) / 2) ** 2; };
  /** 일반화 라비 진동수 √(Ω² + Δ²) */
  QM.rabiW = (Omega, Delta) => Math.hypot(Omega, Delta);
  /**
   * 회전 좌표계 블로흐 방정식 한 걸음 (RK4).
   * dM/dt = Ω⃗ × M − [Mx/T2, My/T2, (Mz − M0)/T1],  Ω⃗ = (Ωx, Ωy, Δ).
   * 관례: M = 블로흐 벡터 (z = +1이 |↑⟩ = 바닥이 아니라 '들뜬' 쪽으로 쓰고 싶으면 부호를 장에서 밝힌다).
   * p = {Ox, Oy, Delta, T1, T2, M0}; T1·T2가 없으면 이완 없음. → 새 M
   */
  QM.blochStep = function (M, p, dt) {
    const Ox = p.Ox || 0, Oy = p.Oy || 0, D = p.Delta || 0, g1 = p.T1 ? 1 / p.T1 : 0, g2 = p.T2 ? 1 / p.T2 : 0, M0 = p.M0 ?? 1;
    const f = (m) => [Oy * m[2] - D * m[1] - g2 * m[0], D * m[0] - Ox * m[2] - g2 * m[1], Ox * m[1] - Oy * m[0] - g1 * (m[2] - M0)];
    const k1 = f(M), k2 = f(M.map((v, i) => v + 0.5 * dt * k1[i])), k3 = f(M.map((v, i) => v + 0.5 * dt * k2[i])), k4 = f(M.map((v, i) => v + dt * k3[i]));
    return M.map((v, i) => v + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
  };
  /** 라모어 각진동수 (rad/ns): g 인자, 자기장 B(T). 전자 g=2.0023 → 176 rad/ns/T */
  QM.larmor = (g, B, mu = K.muB) => (g * mu * B) / K.hbarEv * 1e6; // eV/(eV·fs) = 1/fs → ×1e6 = 1/ns
  /** 랑데 g 인자 g_J (g_s = 2.0023 근사 대신 2 사용 여부 opts) */
  QM.landeG = (l, s, j, gs = 2) => (j === 0 ? 0 : 1 + ((gs - 1) * (j * (j + 1) + s * (s + 1) - l * (l + 1))) / (2 * j * (j + 1)));

  /* ------------------------------------------------------------ 밀도 행렬 */
  /** 순수 상태 → ρ = |ψ⟩⟨ψ| */
  QM.dm = (psi) => QM.outer(psi, psi);
  /** 혼합: [[p1, ψ1], [p2, ψ2], …] → ρ */
  QM.mix = (list) => QM.lin(list.map(([p, s]) => [p, s.c === 1 ? QM.dm(s) : s]));
  QM.purity = (rho) => QM.trace(QM.mul(rho, rho))[0];
  /** 폰 노이만 엔트로피 (밑 2, 비트) */
  QM.entropy = (rho, base = 2) => { const { E } = QM.eigh(rho); let s = 0; for (const p of E) if (p > 1e-14) s -= p * Math.log(p); return s / Math.log(base); };
  /**
   * 부분 대각합. dims: 각 부분계 차원 배열(예 [2,2]), keep: 남길 부분계 번호 배열.
   * 부분계 0이 가장 왼쪽(가장 큰 자리) 텐서 인자.
   */
  QM.ptrace = function (rho, dims, keep) {
    if (rho.c === 1) rho = QM.dm(rho);
    const n = dims.length, tr = [], kp = []; for (let i = 0; i < n; i++) (keep.includes(i) ? kp : tr).push(i);
    const dk = kp.reduce((a, i) => a * dims[i], 1), dt = tr.reduce((a, i) => a * dims[i], 1), R = QM.zeros(dk), N = rho.r;
    const strides = dims.map((_, i) => dims.slice(i + 1).reduce((a, b) => a * b, 1));
    const idx = (kIdx, tIdx) => { // kIdx: keep 다중 지표 정수, tIdx: trace 다중 지표 정수 → 전체 지표
      let full = 0, a = kIdx, b = tIdx;
      for (let q = kp.length - 1; q >= 0; q--) { const i = kp[q]; full += (a % dims[i]) * strides[i]; a = Math.floor(a / dims[i]); }
      for (let q = tr.length - 1; q >= 0; q--) { const i = tr[q]; full += (b % dims[i]) * strides[i]; b = Math.floor(b / dims[i]); }
      return full;
    };
    for (let a = 0; a < dk; a++) for (let b = 0; b < dk; b++) { let sr = 0, si = 0; for (let t = 0; t < dt; t++) { const I = idx(a, t), J = idx(b, t); sr += rho.re[I * N + J]; si += rho.im[I * N + J]; } R.re[a * dk + b] = sr; R.im[a * dk + b] = si; }
    return R;
  };
  /** 두 큐비트 상태(벡터 또는 4×4 ρ)의 공존도(concurrence, 우터스) 0..1 */
  QM.concurrence = function (rho) {
    if (rho.c === 1) rho = QM.dm(rho);
    const YY = QM.kron(QM.sy, QM.sy), rt = QM.mul(YY, QM.transpose(QM.dag(rho)), YY); // ρ̃ = (σy⊗σy) ρ* (σy⊗σy)
    // √ρ ρ̃ √ρ 의 고유값 제곱근
    const sq = QM.funcH(rho, (e) => Math.sqrt(Math.max(0, e))), Rm = QM.mul(sq, rt, sq);
    const lam = QM.eigh(QM.scale(QM.add(Rm, QM.dag(Rm)), 0.5)).E.map((e) => Math.sqrt(Math.max(0, e))).sort((a, b) => b - a);
    return Math.max(0, lam[0] - lam[1] - lam[2] - lam[3]);
  };
  /** 두 순수 상태의 충실도 |⟨a|b⟩|² */
  QM.fidelity = (a, b) => C.abs2(QM.inner(a, b));
  /** 열평형 ρ = e^{−βH}/Z (kT는 H와 같은 단위) */
  QM.thermal = (H, kT) => { const { E, U } = QM.eigh(H), e0 = E[0], w = E.map((e) => Math.exp(-(e - e0) / kT)), Z = w.reduce((a, b) => a + b, 0); return QM.mul(U, QM.diag(w.map((x) => x / Z)), QM.dag(U)); };
  /**
   * 린드블라드 주 방정식 한 걸음 (RK4, ħ = 1):
   * dρ/dt = −i[H,ρ] + Σ_k (L_k ρ L_k† − ½{L_k†L_k, ρ}).   Ls: 붕괴 연산자 배열(비율 √γ 포함)
   */
  QM.lindbladStep = function (rho, H, Ls, dt) {
    const LdL = Ls.map((L) => QM.mul(QM.dag(L), L)), Ld = Ls.map((L) => QM.dag(L));
    const f = (r) => { let d = QM.scale(QM.comm(H, r), [0, -1]); Ls.forEach((L, k) => { d = QM.add(d, QM.sub(QM.mul(L, r, Ld[k]), QM.scale(QM.acomm(LdL[k], r), 0.5))); }); return d; };
    const k1 = f(rho), k2 = f(QM.add(rho, QM.scale(k1, dt / 2))), k3 = f(QM.add(rho, QM.scale(k2, dt / 2))), k4 = f(QM.add(rho, QM.scale(k3, dt)));
    return QM.add(rho, QM.scale(QM.add(QM.add(k1, QM.scale(k2, 2)), QM.add(QM.scale(k3, 2), k4)), dt / 6));
  };

  /* ------------------------------------------------------------ 큐비트 레지스터 */
  const s2 = Math.SQRT1_2;
  QM.gates = {
    I: QM.eye(2), X: QM.sx, Y: QM.sy, Z: QM.sz,
    H: QM.mat([[s2, s2], [s2, -s2]]),
    S: QM.mat([[1, 0], [0, [0, 1]]]), Sdg: QM.mat([[1, 0], [0, [0, -1]]]),
    T: QM.mat([[1, 0], [0, [s2, s2]]]), Tdg: QM.mat([[1, 0], [0, [s2, -s2]]]),
    Rx: (t) => QM.rot([1, 0, 0], t), Ry: (t) => QM.rot([0, 1, 0], t), Rz: (t) => QM.rot([0, 0, 1], t),
    P: (p) => QM.mat([[1, 0], [0, [Math.cos(p), Math.sin(p)]]]),
  };
  /**
   * n 큐비트 상태 벡터 시뮬레이터. 지표 비트 순서: 큐비트 0이 가장 왼쪽(최상위 비트), |q0 q1 … ⟩.
   * const R = QM.register(2); R.apply(QM.gates.H, 0); R.cnot(0, 1); R.probs(); R.measure(0, rng)
   */
  QM.register = function (n, seed = 1) {
    const N = 1 << n, re = new Float64Array(N), im = new Float64Array(N); re[0] = 1;
    const bit = (q) => 1 << (n - 1 - q);
    const R = {
      n, N, re, im,
      reset() { re.fill(0); im.fill(0); re[0] = 1; return R; },
      /** 계산 기저 상태 |k⟩ 로 */
      setBasis(k) { re.fill(0); im.fill(0); re[k] = 1; return R; },
      /** 벡터(QM.vec)로 상태 지정 */
      setVec(v) { for (let k = 0; k < N; k++) { re[k] = v.re[k]; im[k] = v.im[k]; } return R; },
      vec() { const v = QM.zeros(N, 1); v.re.set(re); v.im.set(im); return v; },
      clone() { const c = QM.register(n); c.re.set(re); c.im.set(im); return c; },
      /** 단일 큐비트 게이트 G(2×2)를 큐비트 q에. ctrl(배열)이 주어지면 그 큐비트가 모두 1일 때만 */
      apply(G, q, ctrl = []) {
        const b = bit(q), cm = ctrl.reduce((a, c) => a | bit(c), 0);
        const g = [G.re[0], G.im[0], G.re[1], G.im[1], G.re[2], G.im[2], G.re[3], G.im[3]];
        for (let k = 0; k < N; k++) {
          if (k & b || (k & cm) !== cm) continue;
          const k1 = k | b, ar = re[k], ai = im[k], br = re[k1], bi = im[k1];
          re[k] = g[0] * ar - g[1] * ai + g[2] * br - g[3] * bi; im[k] = g[0] * ai + g[1] * ar + g[2] * bi + g[3] * br;
          re[k1] = g[4] * ar - g[5] * ai + g[6] * br - g[7] * bi; im[k1] = g[4] * ai + g[5] * ar + g[6] * bi + g[7] * br;
        }
        return R;
      },
      cnot(c, t) { return R.apply(QM.gates.X, t, [c]); },
      cz(c, t) { return R.apply(QM.gates.Z, t, [c]); },
      swap(a, b) { R.cnot(a, b); R.cnot(b, a); return R.cnot(a, b); },
      toffoli(c1, c2, t) { return R.apply(QM.gates.X, t, [c1, c2]); },
      /** 계산 기저 확률 배열 */
      probs() { return Array.from(re, (r, k) => r * r + im[k] * im[k]); },
      /** 큐비트 q가 1일 확률 */
      p1(q) { const b = bit(q); let s = 0; for (let k = 0; k < N; k++) if (k & b) s += re[k] * re[k] + im[k] * im[k]; return s; },
      /** 큐비트 q 측정(붕괴). rng: 0..1 함수 → 0 또는 1 */
      measure(q, rng = Math.random) {
        const b = bit(q), p = R.p1(q), out = rng() < p ? 1 : 0, keep = out ? p : 1 - p, f = keep > 0 ? 1 / Math.sqrt(keep) : 0;
        for (let k = 0; k < N; k++) { if (!!(k & b) !== !!out) { re[k] = 0; im[k] = 0; } else { re[k] *= f; im[k] *= f; } }
        return out;
      },
      /** 모든 큐비트 측정 → 정수 결과 */
      measureAll(rng = Math.random) { let u = rng(), acc = 0, k = 0; const P = R.probs(); for (; k < N - 1; k++) { acc += P[k]; if (u < acc) break; } R.setBasis(k); return k; },
      /** 큐비트 q의 블로흐 벡터(축약 밀도 행렬) */
      blochOf(q) { const rho = QM.ptrace(R.vec(), new Array(n).fill(2), [q]); return QM.blochRho(rho); },
      /** 켓 문자열 '0.707|00⟩ + 0.707|11⟩' */
      ket(d = 3, eps = 1e-6) { const parts = []; for (let k = 0; k < N; k++) { if (re[k] ** 2 + im[k] ** 2 < eps) continue; parts.push(`${C.fmt([re[k], im[k]], d)}|${k.toString(2).padStart(n, "0")}⟩`); } return parts.join(" + ").replace(/\+ −/g, "− ") || "0"; },
    };
    return R;
  };
  /** 벨 상태: 'phi+', 'phi-', 'psi+', 'psi-' → 4성분 벡터 */
  QM.bell = (name) => ({ "phi+": QM.vec([s2, 0, 0, s2]), "phi-": QM.vec([s2, 0, 0, -s2]), "psi+": QM.vec([0, s2, s2, 0]), "psi-": QM.vec([0, s2, -s2, 0]) })[name];
  /** x–z 평면에서 각 θ 방향의 스핀 측정 연산자 cosθ σz + sinθ σx */
  QM.sigmaTheta = (th) => QM.lin([[Math.cos(th), QM.sz], [Math.sin(th), QM.sx]]);
  /** 두 큐비트 상관 E(a, b) = ⟨σ_a ⊗ σ_b⟩ (x–z 평면 각) */
  QM.corr = (psi, a, b) => { const O = QM.kron(QM.sigmaTheta(a), QM.sigmaTheta(b)); return psi.c === 1 ? QM.expect(psi, O) : QM.trace(QM.mul(psi, O))[0]; };
  /** CHSH 값 S = E(a,b) − E(a,b') + E(a',b) + E(a',b') */
  QM.chsh = (psi, a, a2, b, b2) => QM.corr(psi, a, b) - QM.corr(psi, a, b2) + QM.corr(psi, a2, b) + QM.corr(psi, a2, b2);

  /* ------------------------------------------------------------ 조화 진동자 (포크 공간, 무차원) */
  /**
   * N 준위로 자른 포크 공간 연산자. x = (a + a†)/√2, p = i(a† − a)/√2 (단위 x0 = √(ħ/mω), p0 = ħ/x0).
   * → {a, ad, n, x, p, H (= n + 1/2), N}
   */
  QM.fock = function (N) {
    const a = QM.zeros(N); for (let k = 1; k < N; k++) a.re[(k - 1) * N + k] = Math.sqrt(k);
    const ad = QM.dag(a), n = QM.diag(Array.from({ length: N }, (_, k) => k));
    const x = QM.scale(QM.add(a, ad), s2), p = QM.scale(QM.sub(ad, a), [0, s2]);
    return { a, ad, n, x, p, H: QM.diag(Array.from({ length: N }, (_, k) => k + 0.5)), N };
  };
  /** 결맞음 상태 |α⟩ 의 포크 계수 (α: 실수 또는 [re,im]) */
  QM.coherent = function (alpha, N) {
    alpha = toC(alpha); const v = QM.zeros(N, 1), a2 = C.abs2(alpha); let c = [Math.exp(-a2 / 2), 0];
    for (let k = 0; k < N; k++) { v.re[k] = c[0]; v.im[k] = c[1]; c = C.scale(C.mul(c, alpha), 1 / Math.sqrt(k + 1)); }
    return v;
  };
  /** 압축 진공 상태 S(r)|0⟩ (실수 r, 위치가 압축되는 방향 r>0) */
  QM.squeezed = function (r, N, phi = 0) {
    const v = QM.zeros(N, 1), th = Math.tanh(r), c0 = 1 / Math.sqrt(Math.cosh(r));
    for (let m = 0; 2 * m < N; m++) {
      const amp = c0 * (m % 2 ? -1 : 1) * Math.exp(0.5 * QM.lnFact(2 * m) - QM.lnFact(m) - m * Math.LN2) * th ** m;
      v.re[2 * m] = amp * Math.cos(m * phi); v.im[2 * m] = amp * Math.sin(m * phi);
    }
    return v;
  };
  /** 정규화된 ψ_n(ξ) (∫|ψ|²dξ = 1) */
  QM.hoPsi = function (n, xi) {
    let p0 = Math.pow(Math.PI, -0.25) * Math.exp(-0.5 * xi * xi); if (n === 0) return p0;
    let p1 = Math.SQRT2 * xi * p0;
    for (let k = 1; k < n; k++) { const p2 = Math.sqrt(2 / (k + 1)) * xi * p1 - Math.sqrt(k / (k + 1)) * p0; p0 = p1; p1 = p2; }
    return p1;
  };
  /** 포크 계수 벡터 → 위치 표현 ψ(ξ) = Σ c_n ψ_n(ξ) → [re, im] */
  QM.hoWave = function (v, xi) { let r = 0, i = 0; for (let n = 0; n < v.r; n++) { if (v.re[n] === 0 && v.im[n] === 0) continue; const f = QM.hoPsi(n, xi); r += v.re[n] * f; i += v.im[n] * f; } return [r, i]; };
  /** 포크 계수의 시간 전개 c_n e^{−i(n+½)t} (t: ω t, 라디안) */
  QM.hoEvolve = function (v, t) { const w = QM.zeros(v.r, 1); for (let n = 0; n < v.r; n++) { const ph = -(n + 0.5) * t, c = Math.cos(ph), s = Math.sin(ph); w.re[n] = v.re[n] * c - v.im[n] * s; w.im[n] = v.re[n] * s + v.im[n] * c; } return w; };
  /** 일반화 라게르 L_k^α(x) */
  QM.laguerre = function (k, alpha, x) { let a = 1, b = 1 + alpha - x; if (k === 0) return a; for (let j = 1; j < k; j++) { const c = ((2 * j + 1 + alpha - x) * b - (j + alpha) * a) / (j + 1); a = b; b = c; } return b; };
  /** |m⟩⟨n| 의 위그너 함수 W_mn(x, p) → [re, im] (∫∫W dx dp = δ_mn) */
  QM.wignerMN = function (m, n, x, p) {
    const r2 = x * x + p * p;
    if (m < n) { const w = QM.wignerMN(n, m, x, p); return [w[0], -w[1]]; }
    const d = m - n, pref = ((n % 2 ? -1 : 1) / Math.PI) * Math.exp(0.5 * (QM.lnFact(n) - QM.lnFact(m))) * Math.exp(-r2) * QM.laguerre(n, d, 2 * r2);
    // (√2 (x − i p))^d
    const rr = Math.SQRT2 * Math.sqrt(r2), th = -Math.atan2(p, x) * d, mag = rr ** d;
    return [pref * mag * Math.cos(th), pref * mag * Math.sin(th)];
  };
  /** 위그너 함수 W(x, p): 상태 벡터 v 또는 밀도 행렬 ρ (포크 기저) */
  QM.wigner = function (s, x, p, tol = 1e-10) {
    let w = 0;
    if (s.c === 1) {
      const N = s.r;
      for (let m = 0; m < N; m++) { if (s.re[m] ** 2 + s.im[m] ** 2 < tol) continue; for (let n = 0; n < N; n++) { if (s.re[n] ** 2 + s.im[n] ** 2 < tol) continue; const rho = C.mul([s.re[m], s.im[m]], [s.re[n], -s.im[n]]), W = QM.wignerMN(m, n, x, p); w += rho[0] * W[0] - rho[1] * W[1]; } }
    } else {
      const N = s.r; for (let m = 0; m < N; m++) for (let n = 0; n < N; n++) { const rr = s.re[m * N + n], ri = s.im[m * N + n]; if (rr * rr + ri * ri < tol) continue; const W = QM.wignerMN(m, n, x, p); w += rr * W[0] - ri * W[1]; }
    }
    return w;
  };
  /** 포크 분포의 평균·분산 (광자 수 통계) */
  QM.photonStats = (v) => { const P = QM.probs(v); let m = 0, m2 = 0; P.forEach((p, n) => { m += p * n; m2 += p * n * n; }); return { mean: m, var: m2 - m * m, P, mandelQ: m > 0 ? (m2 - m * m - m) / m : 0 }; };

  /* ------------------------------------------------------------ 각운동량 */
  /** 버금 르장드르 P_l^m(x), m ≥ 0 (콘던–쇼틀리 위상 (−1)^m 포함) */
  QM.legendre = function (l, m, x) {
    let pmm = 1;
    if (m > 0) { const s = Math.sqrt(Math.max(0, (1 - x) * (1 + x))); let f = 1; for (let i = 1; i <= m; i++) { pmm *= -f * s; f += 2; } }
    if (l === m) return pmm;
    let pmmp1 = x * (2 * m + 1) * pmm; if (l === m + 1) return pmmp1;
    let pll = 0; for (let ll = m + 2; ll <= l; ll++) { pll = (x * (2 * ll - 1) * pmmp1 - (ll + m - 1) * pmm) / (ll - m); pmm = pmmp1; pmmp1 = pll; }
    return pll;
  };
  /** 르장드르 다항식 P_l(x) */
  QM.P = (l, x) => QM.legendre(l, 0, x);
  /** 복소 구면 조화 함수 Y_l^m(θ, φ) → [re, im] (콘던–쇼틀리, Y_l^{−m} = (−1)^m Y_l^m*) */
  QM.Ylm = function (l, m, theta, phi) {
    const am = Math.abs(m), N = Math.sqrt(((2 * l + 1) / (4 * Math.PI)) * Math.exp(QM.lnFact(l - am) - QM.lnFact(l + am)));
    let v = N * QM.legendre(l, am, Math.cos(theta)); if (m < 0 && am % 2) v = -v;
    return [v * Math.cos(m * phi), v * Math.sin(m * phi)];
  };
  /** 실수 구면 조화 함수 (화학 오비탈 꼴: m>0 → cos, m<0 → sin) */
  QM.realY = function (l, m, theta, phi) {
    const am = Math.abs(m), N = Math.sqrt(((2 * l + 1) / (4 * Math.PI)) * Math.exp(QM.lnFact(l - am) - QM.lnFact(l + am)));
    const P = QM.legendre(l, am, Math.cos(theta)) * (am % 2 ? -1 : 1);
    if (m === 0) return N * P;
    return Math.SQRT2 * N * P * (m > 0 ? Math.cos(am * phi) : Math.sin(am * phi));
  };
  // 반정수 허용 계승: 인자는 정수여야 한다 (j들의 조합이 정수가 되는지 확인)
  const lf = (x) => { const n = Math.round(x); if (Math.abs(x - n) > 1e-9 || n < 0) return NaN; return QM.lnFact(n); };
  /**
   * 클레브시–고르단 계수 ⟨j1 m1; j2 m2 | J M⟩ (라카 공식, 반정수 허용).
   */
  QM.cg = function (j1, m1, j2, m2, J, M) {
    if (Math.abs(m1 + m2 - M) > 1e-9) return 0;
    if (J < Math.abs(j1 - j2) - 1e-9 || J > j1 + j2 + 1e-9) return 0;
    if (Math.abs(m1) > j1 + 1e-9 || Math.abs(m2) > j2 + 1e-9 || Math.abs(M) > J + 1e-9) return 0;
    if (Math.abs(((j1 + j2 + J) % 1)) > 1e-9 && Math.abs(((j1 + j2 + J) % 1) - 1) > 1e-9) return 0;
    const pre = 0.5 * (Math.log(2 * J + 1) + lf(J + j1 - j2) + lf(J - j1 + j2) + lf(j1 + j2 - J) - lf(j1 + j2 + J + 1)
      + lf(J + M) + lf(J - M) + lf(j1 - m1) + lf(j1 + m1) + lf(j2 - m2) + lf(j2 + m2));
    let s = 0;
    const kmin = Math.max(0, Math.round(j2 - J - m1), Math.round(j1 - J + m2)), kmax = Math.min(Math.round(j1 + j2 - J), Math.round(j1 - m1), Math.round(j2 + m2));
    for (let k = kmin; k <= kmax; k++) {
      const t = -(lf(k) + lf(j1 + j2 - J - k) + lf(j1 - m1 - k) + lf(j2 + m2 - k) + lf(J - j2 + m1 + k) + lf(J - j1 - m2 + k));
      s += (k % 2 ? -1 : 1) * Math.exp(pre + t);
    }
    return Math.abs(s) < 1e-14 ? 0 : s;
  };
  /** 위그너 3j 기호 */
  QM.threeJ = (j1, j2, j3, m1, m2, m3) => { const ph = Math.round(j1 - j2 - m3); return ((ph % 2 ? -1 : 1) / Math.sqrt(2 * j3 + 1)) * QM.cg(j1, m1, j2, m2, j3, -m3); };
  /** j1 ⊗ j2 의 결합 기저 표: [{J, M, terms:[{m1, m2, c}]}] */
  QM.cgTable = function (j1, j2) {
    const out = [];
    for (let J = j1 + j2; J >= Math.abs(j1 - j2) - 1e-9; J--) for (let M = J; M >= -J - 1e-9; M--) {
      const terms = []; for (let m1 = j1; m1 >= -j1 - 1e-9; m1--) { const m2 = M - m1; if (Math.abs(m2) > j2 + 1e-9) continue; const c = QM.cg(j1, m1, j2, m2, J, M); if (Math.abs(c) > 1e-12) terms.push({ m1, m2, c }); }
      out.push({ J, M, terms });
    }
    return out;
  };
  /** 위그너 작은 d 행렬 원소 d^j_{m'm}(β) */
  QM.wignerd = function (j, mp, m, beta) {
    const c = Math.cos(beta / 2), s = Math.sin(beta / 2);
    const kmin = Math.max(0, Math.round(m - mp)), kmax = Math.min(Math.round(j + m), Math.round(j - mp));
    const pre = 0.5 * (lf(j + mp) + lf(j - mp) + lf(j + m) + lf(j - m)); let sum = 0;
    for (let k = kmin; k <= kmax; k++) {
      const sign = (Math.round(mp - m + k) % 2 ? -1 : 1), den = lf(j + m - k) + lf(k) + lf(j - k - mp) + lf(k + mp - m);
      const pc = Math.round(2 * j + m - mp - 2 * k), ps = Math.round(mp - m + 2 * k);
      sum += sign * Math.exp(pre - den) * (pc ? c ** pc : 1) * (ps ? s ** ps : 1);
    }
    return sum;
  };
  /** 강체 회전자 에너지 E_J = B J(J+1) (B: 회전 상수, 같은 단위) */
  QM.rotorE = (J, B) => B * J * (J + 1);

  /* ------------------------------------------------------------ 구 베셀 함수 */
  /** 구 베셀 j_l(x) */
  QM.sphJ = function (l, x) {
    if (x === 0) return l === 0 ? 1 : 0;
    const ax = Math.abs(x);
    if (ax > l) { let a = Math.sin(x) / x; if (l === 0) return a; let b = Math.sin(x) / (x * x) - Math.cos(x) / x; for (let k = 1; k < l; k++) { const c = ((2 * k + 1) / x) * b - a; a = b; b = c; } return b; }
    if (ax < 1) { let term = 1; for (let k = 1; k <= l; k++) term *= x / (2 * k + 1); let s = 0, t = term; for (let n = 0; n < 40; n++) { s += t; t *= (-x * x / 2) / ((n + 1) * (2 * l + 2 * n + 3)); } return s; }
    // 밀러 하향 점화
    const L = l + 30 + Math.ceil(ax); let jp1 = 0, j = 1e-30, jl = 0;
    for (let k = L; k >= 1; k--) { const jm1 = ((2 * k + 1) / x) * j - jp1; jp1 = j; j = jm1; if (k - 1 === l) jl = j; if (Math.abs(j) > 1e200) { j *= 1e-200; jp1 *= 1e-200; jl *= 1e-200; } }
    const j0 = Math.sin(x) / x, j1 = Math.sin(x) / (x * x) - Math.cos(x) / x;
    return jl * (Math.abs(j0) > Math.abs(j1) ? j0 / j : j1 / jp1);
  };
  /** 구 노이만 y_l(x) */
  QM.sphY = function (l, x) { let a = -Math.cos(x) / x; if (l === 0) return a; let b = -Math.cos(x) / (x * x) - Math.sin(x) / x; for (let k = 1; k < l; k++) { const c = ((2 * k + 1) / x) * b - a; a = b; b = c; } return b; };
  /** j_l 의 n번째 영점 (n = 1, 2, …) */
  QM.sphJZero = function (l, n) { const r = QM.roots((x) => QM.sphJ(l, x), 0.5, (n + l / 2 + 1) * Math.PI + 2, 800 + 50 * n).filter((x) => x > 1e-6); return r[n - 1]; };
  /** 변형 구 베셀 (감쇠형) k_l 비례 함수: k_l(x) ∝ e^{−x}·다항식, 로그 미분만 쓰인다 */
  QM.skLogDeriv = function (l, x) { // d/dx ln k_l(x)
    const h = 1e-6 * Math.max(1, x), f = (t) => { // k_l(t) = (π/2) e^{-t}/t Σ … ; 점화 k_{l+1} = k_{l-1} + (2l+1)/t k_l
      let a = Math.exp(-t) / t, b = Math.exp(-t) * (1 / t + 1 / (t * t)); if (l === 0) return a; for (let k = 1; k < l; k++) { const c = b * (2 * k + 1) / t + a; a = b; b = c; } return b; };
    return (Math.log(f(x + h)) - Math.log(f(x - h))) / (2 * h);
  };

  /* ------------------------------------------------------------ 1차원·지름 고유값 */
  /**
   * 삼중 대각 행렬 고유값 (스투름 이분법) + 역반복 고유벡터.
   * d: 대각, e: 비대각(크기 N−1, 대칭). 오름차순 nWant개. → {E, vec:[Float64Array…]}
   */
  QM.tridiagEig = function (d, e, nWant, o = {}) {
    const N = d.length;
    const count = (lam) => { let c = 0, q = d[0] - lam; if (q < 0) c++; for (let i = 1; i < N; i++) { q = d[i] - lam - (e[i - 1] * e[i - 1]) / (q === 0 ? 1e-300 : q); if (q < 0) c++; } return c; };
    let lo = Infinity, hi = -Infinity; for (let i = 0; i < N; i++) { const r = (i > 0 ? Math.abs(e[i - 1]) : 0) + (i < N - 1 ? Math.abs(e[i]) : 0); lo = Math.min(lo, d[i] - r); hi = Math.max(hi, d[i] + r); }
    if (o.Emax != null) nWant = Math.min(nWant, count(o.Emax));
    const E = [], vec = [];
    for (let k = 0; k < nWant; k++) {
      let a = lo, b = hi; for (let it = 0; it < 100; it++) { const mid = 0.5 * (a + b); if (count(mid) > k) b = mid; else a = mid; }
      const lam = 0.5 * (a + b); E.push(lam);
      if (o.vectors === false) continue;
      // 역반복 (토머스)
      let y = new Float64Array(N).fill(1); const shift = lam + 1e-10 * (Math.abs(lam) + 1);
      for (let rep = 0; rep < 3; rep++) {
        const cp = new Float64Array(N), dp = new Float64Array(N);
        let den = d[0] - shift; if (den === 0) den = 1e-300; cp[0] = (N > 1 ? e[0] : 0) / den; dp[0] = y[0] / den;
        for (let i = 1; i < N; i++) { den = d[i] - shift - e[i - 1] * cp[i - 1]; if (den === 0) den = 1e-300; cp[i] = i < N - 1 ? e[i] / den : 0; dp[i] = (y[i] - e[i - 1] * dp[i - 1]) / den; }
        const x = new Float64Array(N); x[N - 1] = dp[N - 1]; for (let i = N - 2; i >= 0; i--) x[i] = dp[i] - cp[i] * x[i + 1];
        let s = 0; for (let i = 0; i < N; i++) s += x[i] * x[i]; s = Math.sqrt(s); for (let i = 0; i < N; i++) x[i] /= s; y = x;
      }
      for (let i = 0; i < N; i++) if (Math.abs(y[i]) > 0.05 * Math.max(...y.map(Math.abs))) { if (y[i] < 0) for (let j = 0; j < N; j++) y[j] = -y[j]; break; }
      vec.push(y);
    }
    return { E, vec };
  };
  /**
   * 1차원 고유값 −(ħ²/2m)ψ'' + V ψ = E ψ, 양 끝 ψ = 0. V: 배열(eV), dx(nm), m(me).
   * QM.eigen1D(V, dx, {m, n, Emax}) → {E, psi} (∫|ψ|²dx = 1)
   */
  QM.eigen1D = function (V, dx, o = {}) {
    const m = o.m || 1, N = V.length, t = K.C / (m * dx * dx), d = new Float64Array(N), e = new Float64Array(N - 1).fill(-t);
    for (let i = 0; i < N; i++) d[i] = 2 * t + V[i];
    const r = QM.tridiagEig(d, e, o.n || 5, o);
    return { E: r.E, psi: r.vec.map((v) => v.map((x) => x / Math.sqrt(dx))) };
  };
  /**
   * 지름 방정식 u'' 형태: −(ħ²/2m)u'' + [V(r) + (ħ²/2m) l(l+1)/r²] u = E u, u(0) = u(rmax) = 0.
   * Vr: 함수 V(r)(eV, r nm). → {E, u:[Float64Array…], r} (∫u²dr = 1)
   */
  QM.radialEigen = function (Vr, l, o = {}) {
    const m = o.m || 1, N = o.N || 1500, rmax = o.rmax || 5, dr = rmax / (N + 1), r = new Float64Array(N);
    const V = new Float64Array(N); for (let i = 0; i < N; i++) { r[i] = (i + 1) * dr; V[i] = Vr(r[i]) + ((K.C / m) * l * (l + 1)) / (r[i] * r[i]); }
    const res = QM.eigen1D(V, dr, { m, n: o.n || 4, Emax: o.Emax });
    return { E: res.E, u: res.psi, r };
  };
  /** 델타 우물 V = −α δ(x) (α: eV·nm): 속박 에너지(eV)와 감쇠 길이(nm) */
  QM.deltaWell = (alpha, m = 1) => ({ E: -(m * alpha * alpha) / (4 * K.C), kappa: (m * alpha) / (2 * K.C), len: (2 * K.C) / (m * alpha) });
  /** 델타 장벽 투과 확률 T(E) (V = +α δ(x)) */
  QM.deltaT = (E, alpha, m = 1) => 1 / (1 + (m * alpha * alpha) / (4 * K.C * E));
  /**
   * 구간별 일정 퍼텐셜의 전달 행렬 투과 (질량 같은 경우). layers [{V, w}] (eV, nm), VL·VR 바깥.
   * → {T, R, r:[re,im], t:[re,im]}   (Q.transfer와 같은 물리, 의존 없이)
   */
  QM.transfer = function (E, layers, o = {}) {
    const m = o.m || 1, VL = o.VL || 0, VR = o.VR || 0;
    const kOf = (V) => { const d = ((E - V) * m) / K.C; return d >= 0 ? [Math.sqrt(d), 0] : [0, Math.sqrt(-d)]; };
    // 각 경계에서 [ψ, ψ'] 를 전파: 영역 행렬 법 (ψ, ψ') 상태 전파
    let M = [[1, 0], [0, 1]].map((r) => r.map((x) => [x, 0])); // 2×2 복소 (ψ, ψ') 전파 행렬
    const cm = (A, B) => [[C.add(C.mul(A[0][0], B[0][0]), C.mul(A[0][1], B[1][0])), C.add(C.mul(A[0][0], B[0][1]), C.mul(A[0][1], B[1][1]))], [C.add(C.mul(A[1][0], B[0][0]), C.mul(A[1][1], B[1][0])), C.add(C.mul(A[1][0], B[0][1]), C.mul(A[1][1], B[1][1]))]];
    for (const L of layers) {
      const k = kOf(L.V), w = L.w; let P;
      if (k[1] === 0) { const kk = k[0] || 1e-12, c = Math.cos(kk * w), s = Math.sin(kk * w); P = [[[c, 0], [s / kk, 0]], [[-kk * s, 0], [c, 0]]]; }
      else { const q = k[1], ch = Math.cosh(q * w), sh = Math.sinh(q * w); P = [[[ch, 0], [sh / q, 0]], [[q * sh, 0], [ch, 0]]]; }
      M = cm(P, M);
    }
    const kL = kOf(VL), kR = kOf(VR); if (kL[1] !== 0) return { T: 0, R: 1, r: [1, 0], t: [0, 0] };
    const ikL = [-kL[1], kL[0]], ikR = [-kR[1], kR[0]];
    // 왼쪽: ψ = e^{ikx} + r e^{−ikx} → (1+r, ik(1−r)); 오른쪽: t e^{ik'x} → (t, ik' t)
    // M (1+r, ik(1−r)) = (t, ik' t)  → 두 식에서 r, t
    const a = C.sub(M[0][0], C.mul(M[0][1], ikL)), b = C.add(M[0][0], C.mul(M[0][1], ikL)); // ψ_R = b + r a ... 실제: M00(1+r)+M01 ik(1−r) = b + r a
    const c2 = C.sub(M[1][0], C.mul(M[1][1], ikL)), d2 = C.add(M[1][0], C.mul(M[1][1], ikL));
    // t = b + r a,  ik' t = d2 + r c2  → r (ik' a − c2) = d2 − ik' b
    const r = C.div(C.sub(d2, C.mul(ikR, b)), C.sub(C.mul(ikR, a), c2)), t = C.add(b, C.mul(r, a));
    const T = kR[1] === 0 ? (kR[0] / kL[0]) * C.abs2(t) : 0;
    return { T, R: C.abs2(r), r, t };
  };

  /* ------------------------------------------------------------ FFT와 분할 연산자 */
  /** 제자리 FFT (길이 2의 거듭제곱). inv=true면 역변환(1/N 포함) */
  QM.fft = function (re, im, inv = false) {
    const n = re.length;
    for (let i = 1, j = 0; i < n; i++) { let bit = n >> 1; for (; j & bit; bit >>= 1) j ^= bit; j ^= bit; if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; } }
    for (let len = 2; len <= n; len <<= 1) {
      const ang = ((inv ? 2 : -2) * Math.PI) / len, wr = Math.cos(ang), wi = Math.sin(ang);
      for (let i = 0; i < n; i += len) { let cr = 1, ci = 0; for (let j = 0; j < len / 2; j++) { const ur = re[i + j], ui = im[i + j], k = i + j + len / 2, vr = re[k] * cr - im[k] * ci, vi = re[k] * ci + im[k] * cr; re[i + j] = ur + vr; im[i + j] = ui + vi; re[k] = ur - vr; im[k] = ui - vi; const t = cr * wr - ci * wi; ci = cr * wi + ci * wr; cr = t; } }
    }
    if (inv) for (let i = 0; i < n; i++) { re[i] /= n; im[i] /= n; }
  };
  /** FFT 순서의 파수 배열 k (1/nm), 격자 간격 dx */
  QM.fftK = (n, dx) => Float64Array.from({ length: n }, (_, i) => ((2 * Math.PI) / (n * dx)) * (i < n / 2 ? i : i - n));
  /**
   * 분할 연산자(스트랑) 시간 전개 (주기 경계). x 격자 길이 2의 거듭제곱.
   * const P = QM.splitOp(V, dx, dt, {m, absorb}); P.step(re, im, n); P.setV(V)
   * absorb(0..0.3): 양 끝 흡수층 비율 (주기 경계로 넘어가는 것을 막는다)
   */
  QM.splitOp = function (V, dx, dt, o = {}) {
    const N = V.length, m = o.m || 1, hb = K.hbarEv, k = QM.fftK(N, dx);
    const kr = new Float64Array(N), ki = new Float64Array(N), vr = new Float64Array(N), vi = new Float64Array(N), damp = new Float64Array(N).fill(1);
    for (let i = 0; i < N; i++) { const ph = -((K.C / m) * k[i] * k[i] * dt) / hb; kr[i] = Math.cos(ph); ki[i] = Math.sin(ph); }
    const ab = o.absorb || 0; if (ab > 0) { const nb = Math.max(2, Math.floor(N * ab)); for (let i = 0; i < nb; i++) { const s = ((nb - i) / nb) ** 2, f = Math.exp(-(o.absorbRate || 0.05) * s * 40 * dt); damp[i] = f; damp[N - 1 - i] = f; } }
    const setV = (Vn) => { for (let i = 0; i < N; i++) { const ph = -(Vn[i] * dt) / (2 * hb); vr[i] = Math.cos(ph) * damp[i]; vi[i] = Math.sin(ph) * damp[i]; } };
    setV(V);
    const half = (re, im) => { for (let i = 0; i < N; i++) { const a = re[i], b = im[i]; re[i] = a * vr[i] - b * vi[i]; im[i] = a * vi[i] + b * vr[i]; } };
    return {
      N, dx, dt, k, setV,
      step(re, im, n = 1) { for (let s = 0; s < n; s++) { half(re, im); QM.fft(re, im); for (let i = 0; i < N; i++) { const a = re[i], b = im[i]; re[i] = a * kr[i] - b * ki[i]; im[i] = a * ki[i] + b * kr[i]; } QM.fft(re, im, true); half(re, im); } },
      norm(re, im) { let s = 0; for (let i = 0; i < N; i++) s += re[i] * re[i] + im[i] * im[i]; return s * dx; },
    };
  };
  /** 운동량 분포 |φ(k)|² (k 오름차순) → {k: Float64Array, P: Float64Array} (∫P dk = ∫|ψ|²dx) */
  QM.momentum = function (re, im, dx) {
    const N = re.length, r = Float64Array.from(re), i = Float64Array.from(im); QM.fft(r, i);
    const k = QM.fftK(N, dx), idx = Array.from({ length: N }, (_, j) => j).sort((a, b) => k[a] - k[b]);
    const dk = (2 * Math.PI) / (N * dx), P = new Float64Array(N), ks = new Float64Array(N);
    idx.forEach((j, q) => { ks[q] = k[j]; P[q] = ((r[j] * r[j] + i[j] * i[j]) * dx * dx) / (2 * Math.PI); });
    return { k: ks, P, dk };
  };
  /** 가우스 파속 {re, im} (중심 x0, 위치 표준편차 σ, 중심 파수 k0) — ∫|ψ|²dx = 1 */
  QM.gaussian = function (x, x0, sigma, k0) {
    const N = x.length, re = new Float64Array(N), im = new Float64Array(N), dx = x[1] - x[0]; let s = 0;
    for (let i = 0; i < N; i++) { const u = (x[i] - x0) / sigma, a = Math.exp(-0.25 * u * u); re[i] = a * Math.cos(k0 * x[i]); im[i] = a * Math.sin(k0 * x[i]); s += a * a; }
    const n = Math.sqrt(s * dx); for (let i = 0; i < N; i++) { re[i] /= n; im[i] /= n; }
    return { re, im };
  };
  /** 기댓값 ⟨x⟩, Δx, 전체 확률 */
  QM.moments = function (x, re, im) { let s = 0, s1 = 0, s2 = 0; for (let i = 0; i < x.length; i++) { const p = re[i] * re[i] + im[i] * im[i]; s += p; s1 += p * x[i]; s2 += p * x[i] * x[i]; } const mean = s1 / s; return { mean, sd: Math.sqrt(Math.max(0, s2 / s - mean * mean)), total: s * (x[1] - x[0]) }; };
  /** 확률 흐름 밀도 j = (ħ/m) Im(ψ* ψ') (단위: 1/fs, ψ가 1/√nm일 때) */
  QM.current = function (re, im, dx, m = 1) { const N = re.length, j = new Float64Array(N), f = (2 * K.C) / (m * K.hbarEv); for (let i = 1; i < N - 1; i++) { const dr = (re[i + 1] - re[i - 1]) / (2 * dx), di = (im[i + 1] - im[i - 1]) / (2 * dx); j[i] = f * (re[i] * di - im[i] * dr); } return j; };
  /** 가우스 파속 폭의 시간 변화 σ(t) = σ0 √(1 + (ħt/2mσ0²)²) (nm, fs) */
  QM.spread = (sigma0, t, m = 1) => sigma0 * Math.sqrt(1 + ((2 * K.C * t) / (m * K.hbarEv * 2 * sigma0 * sigma0)) ** 2);

  /* ------------------------------------------------------------ 3차원 계 */
  /** 수소꼴 에너지 (eV) */
  QM.hydrogenE = (n, Z = 1, mu = 1) => (-K.Ry * Z * Z * mu) / (n * n);
  /** 지름 함수 R_nl(r), r는 a0 단위 */
  QM.radialH = function (n, l, r, Z = 1) {
    const rho = (2 * Z * r) / n, N = Math.sqrt(((2 * Z) / n) ** 3 * Math.exp(QM.lnFact(n - l - 1) - QM.lnFact(n + l)) / (2 * n));
    return N * Math.exp(-rho / 2) * rho ** l * QM.laguerre(n - l - 1, 2 * l + 1, rho);
  };
  /** ⟨n l | r^k | n' l'⟩ (a0 단위, 수치 적분) */
  QM.radialInt = (n1, l1, n2, l2, k = 1, Z = 1) => QM.simpson((r) => QM.radialH(n1, l1, r, Z) * QM.radialH(n2, l2, r, Z) * r ** (2 + k), 0, 40 * Math.max(n1, n2) ** 2 / Z, 4000);
  /** 수소 미세 구조 (디랙 식 1차): E_nj = E_n [1 + (αZ)²/n² (n/(j+½) − ¾)] → 보정량(eV) */
  QM.fineShift = (n, j, Z = 1) => QM.hydrogenE(n, Z) * ((K.alpha * Z) ** 2 / (n * n)) * (n / (j + 0.5) - 0.75);
  /** 3차원 등방 진동자 E = ħω(N + 3/2), 축퇴도 (N+1)(N+2)/2 */
  QM.ho3D = (N) => ({ E: N + 1.5, g: ((N + 1) * (N + 2)) / 2 });
  /** 무한 구형 우물(반지름 a nm) 에너지 E_nl = (ħ²/2m)(x_nl/a)² */
  QM.sphBoxE = (n, l, a, m = 1) => ((K.C / m) * QM.sphJZero(l, n) ** 2) / (a * a);
  /**
   * 유한 구형 우물(깊이 V0 eV, 반지름 a nm) 속박 에너지 목록 (E<0, l 고정).
   * 내부 j_l(kr), 외부 k_l(κr) 의 로그 미분 일치.
   */
  QM.sphWellE = function (l, V0, a, m = 1) {
    const f = (E) => { const k = Math.sqrt(((E + V0) * m) / K.C), q = Math.sqrt((-E * m) / K.C), h = 1e-7; const x = k * a; const dj = (QM.sphJ(l, x + h) - QM.sphJ(l, x - h)) / (2 * h); return (k * dj) / QM.sphJ(l, x) - q * QM.skLogDeriv(l, q * a); };
    // j_l 의 영점에서 f가 발산하므로 근과 극을 구분
    const out = []; const n = 2000; let E0 = -V0 + 1e-9, f0 = f(E0);
    for (let i = 1; i <= n; i++) { const E1 = -V0 + (V0 * i) / n - 1e-9, f1 = f(E1); if (isFinite(f0) && isFinite(f1) && f0 * f1 < 0 && Math.abs(f0 - f1) < 1e3 * (1 + Math.abs(f0) + Math.abs(f1))) { const r = QM.bisect(f, E0, E1); if (isFinite(r) && Math.abs(f(r)) < 1) out.push(r); } E0 = E1; f0 = f1; }
    return out;
  };
  /** 유효 질량 수소 모형 (주개·엑시톤): 결합 에너지(eV), 보어 반지름(nm) */
  QM.hydrogenic = (m, er) => ({ Eb: (K.Ry * m) / (er * er), aB: (K.a0 * er) / m });

  /* ------------------------------------------------------------ 근사법 도구 */
  /**
   * 비축퇴 섭동 (행렬): H0 대각 원소 E0[], 섭동 V(복소 행렬) → 상태 k의 {E1, E2, c1:[…]} (1차 상태 계수)
   */
  QM.pert = function (E0, V, k) {
    const n = E0.length, E1 = V.re[k * n + k]; let E2 = 0; const c1 = [];
    for (let j = 0; j < n; j++) { if (j === k) { c1.push([0, 0]); continue; } const v = [V.re[j * n + k], V.im[j * n + k]], dE = E0[k] - E0[j]; if (Math.abs(dE) < 1e-12) { c1.push([NaN, NaN]); continue; } E2 += C.abs2(v) / dE; c1.push(C.scale(v, 1 / dE)); }
    return { E1, E2, c1 };
  };
  /** 헬륨꼴 원자 변분: 시험 함수 유효 전하 ζ → E(ζ) (eV) = [ζ² − 2Zζ + (5/8)ζ] Ha */
  QM.heliumE = (zeta, Z = 2) => (zeta * zeta - 2 * Z * zeta + 0.625 * zeta) * K.Ha;
  /**
   * H₂⁺ LCAO (1s 두 개): 핵 간 거리 R(a0) → {S, J, Kx, Eg, Eu} (에너지 eV, 핵 반발 포함, 원자 에너지 기준 −13.6 포함)
   * Eg/u = E1s + 1/R (Ha) − (J ± K)/(1 ± S)  … 그리피스 7장 관례.
   */
  QM.h2plus = function (R) {
    const S = Math.exp(-R) * (1 + R + (R * R) / 3), D = 1 / R - (1 + 1 / R) * Math.exp(-2 * R), X = (1 + R) * Math.exp(-R);
    // 그리피스 식: F(x) = E/|E1| = −1 + (2/x)[±(1 − (2/3)x²)e^{−x} + (1 + x)e^{−2x}] / (1 ± S)
    const F = (sgn) => -1 + (2 / R) * ((sgn * (1 - (2 / 3) * R * R) * Math.exp(-R) + (1 + R) * Math.exp(-2 * R)) / (1 + sgn * S));
    return { S, D, X, Eg: F(1) * K.Ry, Eu: F(-1) * K.Ry, Ebind: -(F(1) + 1) * K.Ry };
  };
  /** 고전 전환점: V(x) = E 인 x 목록 (구간 [a,b]) */
  QM.turning = (Vf, E, a, b, n = 2000) => QM.roots((x) => Vf(x) - E, a, b, n);
  /** WKB 위상 적분 ∫√(2m(E−V))/ħ dx (허용 영역만, 단위 무차원). Vf(x) eV, x nm */
  QM.wkbPhase = function (Vf, E, a, b, m = 1, n = 4000) { const dx = (b - a) / n; let s = 0; for (let i = 0; i < n; i++) { const v = E - Vf(a + (i + 0.5) * dx); if (v > 0) s += Math.sqrt((v * m) / K.C) * dx; } return s; };
  /** WKB 터널 지수 θ = ∫√(2m(V−E))/ħ dx (금지 영역), T ≈ e^{−2θ} */
  QM.wkbTheta = function (Vf, E, a, b, m = 1, n = 4000) { const dx = (b - a) / n; let s = 0; for (let i = 0; i < n; i++) { const v = Vf(a + (i + 0.5) * dx) - E; if (v > 0) s += Math.sqrt((v * m) / K.C) * dx; } return s; };
  /** 보어–조머펠트 양자화 ∫p dx = (n + ½)πħ (양쪽이 매끈한 벽) 의 n번째 에너지. range: [a, b] x 구간, Erange: [E0, E1] */
  QM.bohrSommerfeld = function (Vf, n, range, Erange, m = 1, offset = 0.5) {
    const f = (E) => QM.wkbPhase(Vf, E, range[0], range[1], m, 3000) - (n + offset) * Math.PI;
    return QM.bisect(f, Erange[0], Erange[1], 1e-10);
  };

  /* ------------------------------------------------------------ 시간 의존 섭동·빛과 물질 */
  /** 1차 섭동 전이 확률 (조화 섭동 V e^{−iωt}): P = (|V|/ħ)² sin²(Δt/2)/(Δ/2)², Δ = ω0 − ω (각진동수). |V|/ħ 를 Vh로 */
  QM.transP = (Vh, Delta, t) => { const x = Delta / 2; return Math.abs(x) < 1e-12 ? Vh * Vh * t * t : (Vh * Vh * Math.sin(x * t) ** 2) / (x * x); };
  /** 페르미 황금률 Γ = (2π/ħ)|M|² ρ(E) — M(eV), ρ(1/eV) → 1/s */
  QM.fermiGolden = (M, rho) => ((2 * Math.PI) / (K.hbarEv * 1e-15)) * M * M * rho;
  /** 로렌츠 선 모양 (정규화, FWHM Γ) */
  QM.lorentz = (x, x0, G) => G / (2 * Math.PI) / ((x - x0) ** 2 + (G / 2) ** 2);
  /**
   * 자발 방출 아인슈타인 A 계수 (1/s): 전이 에너지 E(eV), 쌍극자 행렬 요소 크기 d (e·nm).
   * A = ω³ |d|² / (3π ε0 ħ c³)
   */
  QM.einsteinA = function (E, d) { const w = (E * K.e) / K.hbar, dm = d * K.e * 1e-9; return (w ** 3 * dm * dm) / (3 * Math.PI * K.eps0 * K.hbar * K.c ** 3); };
  /** 수소 2p→1s 쌍극자 크기 |⟨1s|r|2p⟩| 의 z 성분(m=0) a0 단위 = 128√2/243 */
  QM.d2p1s = (128 * Math.SQRT2) / 243;

  /* ------------------------------------------------------------ 산란 */
  /**
   * 차폐 쿨롱(유카와) 1차 보른 미분 단면적 dσ/dΩ (nm²/sr).
   * V(r) = (Z1Z2 e²/4πε0 εr) e^{−r/λ}/r.  E(eV), θ(rad), λ(nm, Infinity면 러더퍼드), m(me), εr
   */
  QM.bornScreened = function (E, theta, o = {}) {
    const m = o.m || 1, Z = o.Z || 1, er = o.er || 1, lam = o.lambda ?? Infinity;
    const k = Math.sqrt((E * m) / K.C), q = 2 * k * Math.sin(theta / 2), mu2 = isFinite(lam) ? 1 / (lam * lam) : 0;
    const e2 = (K.alpha * K.hbarC * Z) / er; // e²/(4πε0 εr) eV·nm
    const f = ((m / K.C) * e2) / (q * q + mu2); // |f| = (2m/ħ²) V0/(q² + μ²), 2m/ħ² = m/C
    return f * f;
  };
  /** 러더퍼드 dσ/dΩ (nm²/sr): E 운동 에너지(eV), Z1Z2, θ */
  QM.rutherford = (E, Z1Z2, theta) => { const b = (Z1Z2 * K.alpha * K.hbarC) / (4 * E); return (b * b) / Math.sin(theta / 2) ** 4; };
  /** 강체 구 위상 이동 tan δ_l = j_l(ka)/y_l(ka) */
  QM.hardSphereDelta = (l, ka) => Math.atan(QM.sphJ(l, ka) / QM.sphY(l, ka));
  /**
   * 일반 V(r)의 부분파 위상 이동 (누메로프 적분 후 r = rmax에서 j_l, y_l과 맞춤).
   * Vr(r) eV, E eV, lmax, {m, rmax(nm), N} → [δ0, δ1, …] (라디안, −π/2..π/2로 접음)
   */
  QM.phaseShifts = function (Vr, E, lmax, o = {}) {
    const m = o.m || 1, rmax = o.rmax || 3, N = o.N || 4000, h = rmax / N, k = Math.sqrt((E * m) / K.C), out = [];
    for (let l = 0; l <= lmax; l++) {
      const g = (r) => (m / K.C) * (E - Vr(r)) - (l * (l + 1)) / (r * r);
      let r0 = h, u0 = r0 ** (l + 1), r1 = 2 * h, u1 = r1 ** (l + 1), g0 = g(r0), g1 = g(r1);
      for (let i = 2; i < N; i++) {
        const r2 = (i + 1) * h, g2 = g(r2), u2 = (2 * u1 * (1 - (5 * h * h * g1) / 12) - u0 * (1 + (h * h * g0) / 12)) / (1 + (h * h * g2) / 12);
        u0 = u1; u1 = u2; g0 = g1; g1 = g2; r0 = r1; r1 = r2;
        if (Math.abs(u1) > 1e200) { u0 *= 1e-200; u1 *= 1e-200; }
      }
      // u ∝ kr [cos δ j_l(kr) − sin δ y_l(kr)] at r0, r1
      const a0 = k * r0, a1 = k * r1, Kr = (u0 * a1) / (u1 * a0);
      const tanD = (Kr * QM.sphJ(l, a1) - QM.sphJ(l, a0)) / (Kr * QM.sphY(l, a1) - QM.sphY(l, a0));
      out.push(Math.atan(tanD));
    }
    return out;
  };
  /** 부분파 합: 전체 단면적 σ = (4π/k²) Σ (2l+1) sin²δ_l (k: 1/nm → nm²) */
  QM.sigmaTotal = (k, deltas) => ((4 * Math.PI) / (k * k)) * deltas.reduce((s, d, l) => s + (2 * l + 1) * Math.sin(d) ** 2, 0);
  /** 부분파 산란 진폭 f(θ) → [re, im] (nm) */
  QM.fTheta = (k, deltas, theta) => { let r = 0, i = 0; const x = Math.cos(theta); deltas.forEach((d, l) => { const P = QM.P(l, x), s = Math.sin(d); r += (2 * l + 1) * s * Math.cos(d) * P; i += (2 * l + 1) * s * s * P; }); return [r / k, i / k]; };
  /**
   * 이온화 불순물 산란 이동도 (cm²/V·s) — 콘웰–바이스코프 식(대표값 수준).
   * N: 이온화 불순물 농도(cm⁻³), T(K), m: 전도 유효 질량(me), er, Z
   */
  QM.mobilityCW = function (N, T, m, er, Z = 1) {
    const eps = er * K.eps0, kT = K.kB * T, Nm = N * 1e6, ms = m * K.me;
    const mu = (64 * Math.sqrt(Math.PI) * eps * eps * (2 * kT) ** 1.5) / (Nm * Z * Z * K.e ** 3 * Math.sqrt(ms)) / Math.log(1 + ((12 * Math.PI * eps * kT) / (Z * K.e * K.e * Nm ** (1 / 3))) ** 2);
    return mu * 1e4;
  };
  /**
   * 브룩스–헤링 이온화 불순물 이동도 (cm²/V·s). n: 자유 캐리어(차폐) 농도 cm⁻³ (기본 N)
   */
  QM.mobilityBH = function (N, T, m, er, n = N, Z = 1) {
    const eps = er * K.eps0, kT = K.kB * T, Nm = N * 1e6, nm = n * 1e6, ms = m * K.me;
    const b = (24 * ms * eps * kT * kT) / (K.e * K.e * K.hbar * K.hbar * nm), G = Math.log(1 + b) - b / (1 + b);
    return ((64 * Math.sqrt(Math.PI) * eps * eps * (2 * kT) ** 1.5) / (Nm * Z * Z * K.e ** 3 * Math.sqrt(ms)) / G) * 1e4;
  };

  /* ------------------------------------------------------------ 자기장 속 전하 */
  /** 사이클로트론 에너지 ħω_c (meV): B(T), m(me) */
  QM.cyclotron = (B, m = 1) => (K.hbar * K.e * B) / (m * K.me) / K.e * 1000;
  /** 자기 길이 ℓ_B = √(ħ/eB) (nm) */
  QM.magLength = (B) => Math.sqrt(K.hbar / (K.e * B)) * 1e9;
  /** 란다우 준위 하나의 축퇴도 (cm⁻², 스핀 하나당) = eB/h */
  QM.landauDeg = (B) => (K.e * B) / K.h * 1e-4;
  /** 채움 인자 ν = n h /(eB)  (n: cm⁻²) */
  QM.filling = (n, B) => (n * 1e4 * K.h) / (K.e * B);
  /** 홀 저항 평탄면 R_xy = h/(νe²) (Ω) */
  QM.hallR = (nu) => K.RK / nu;
  /** 란다우 준위 E_n = ħω_c(n + ½) ± ½ g μB B (meV) */
  QM.landauE = (n, B, m = 1, g = 0, s = 0) => QM.cyclotron(B, m) * (n + 0.5) + s * 0.5 * g * K.muB * 1000 * B;
  /** 포크–다윈 준위 (meV): 2D 조화 구속 ħω0(meV), B(T), m(me), 주양자수 n(≥0), 각운동량 l */
  QM.fockDarwin = (n, l, hw0, B, m = 1) => { const hwc = QM.cyclotron(B, m); return (2 * n + Math.abs(l) + 1) * Math.sqrt(hw0 * hw0 + (hwc * hwc) / 4) - (l * hwc) / 2; };
  /** 아하로노프–봄 위상 (rad): 자속 Φ(Wb) */
  QM.abPhase = (flux) => (2 * Math.PI * flux) / K.flux0;
  /**
   * 슈브니코프–드하스 모형 ρxx(B)/ρ0 (리프시츠–코세비치 1차 고조파). n(cm⁻²), m(me), T(K), tq(ps 양자 수명)
   */
  QM.sdh = function (B, n, m = 0.067, T = 2, tq = 1, gs = 2) {
    const nu = QM.filling(n, B), wc = (K.e * B) / (m * K.me), X = (2 * Math.PI * Math.PI * K.kB * T) / (K.hbar * wc);
    const AT = X > 1e-6 ? X / Math.sinh(X) : 1, D = Math.exp(-Math.PI / (wc * tq * 1e-12));
    return 1 + 4 * AT * D * Math.cos((2 * Math.PI * nu) / gs - Math.PI); // 스핀 축퇴(gs=2)면 짝수 ν에서 극소
  };

  /* ------------------------------------------------------------ 동일 입자 */
  /** 무한 우물(폭 L) 1입자 상태 φ_n(x) */
  QM.wellPsi = (n, x, L) => (x < 0 || x > L ? 0 : Math.sqrt(2 / L) * Math.sin((n * Math.PI * x) / L));
  /** 두 입자 진폭: sym = +1(보손), −1(페르미온), 0(구별 가능 곱 상태) */
  QM.pair = (fa, fb, x1, x2, sym = 0) => (sym === 0 ? fa(x1) * fb(x2) : (fa(x1) * fb(x2) + sym * fa(x2) * fb(x1)) / Math.SQRT2);
  /** 슬레이터 행렬식 값 (funcs: 1입자 함수 배열, xs: 좌표 배열), 1/√N! 포함 */
  QM.slater = function (funcs, xs) {
    const n = funcs.length, A = funcs.map((f) => xs.map((x) => f(x)));
    let det = 1; const M = A.map((r) => r.slice());
    for (let i = 0; i < n; i++) { let p = i; for (let r = i + 1; r < n; r++) if (Math.abs(M[r][i]) > Math.abs(M[p][i])) p = r; if (M[p][i] === 0) return 0; if (p !== i) { [M[p], M[i]] = [M[i], M[p]]; det = -det; } det *= M[i][i]; for (let r = i + 1; r < n; r++) { const f = M[r][i] / M[i][i]; for (let c = i; c < n; c++) M[r][c] -= f * M[i][c]; } }
    return det / Math.sqrt(Math.exp(QM.lnFact(n)));
  };

  /* ------------------------------------------------------------ 그리기 도우미 */
  const pal = () => (window.SB && SB.palette ? SB.palette() : { text: "#222", dim: "#666", faint: "#aaa", grid: "#ddd", axis: "#999", accent: "#be185d", accent2: "#4d7c0f", ok: "#16a34a", bad: "#dc2626", warn: "#d97706", bg: "#fff" });
  /** 위상 → 색 (색상환, 0 = 빨강) */
  QM.phaseColor = (re, im, a = 1, l = 50) => `hsla(${((Math.atan2(im, re) * 180) / Math.PI + 360) % 360}, 80%, ${l}%, ${a})`;
  QM.phaseRGB = function (re, im, l = 0.5) { const h = (((Math.atan2(im, re) / (2 * Math.PI)) % 1) + 1) % 1, s = 0.8; const q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q; const f = (t) => { t = ((t % 1) + 1) % 1; return t < 1 / 6 ? p + (q - p) * 6 * t : t < 0.5 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p; }; return [255 * f(h + 1 / 3), 255 * f(h), 255 * f(h - 1 / 3)]; };
  /**
   * 복소 파동함수 그리기. ch: SB.chart 반환값 {X, Y}. x, re, im: 배열.
   * mode: 'phase'(|ψ|² 또는 |ψ|를 위상 색으로 채움, 기본) | 'reim'(Re·Im 두 선) | 'prob'(|ψ|² 선)
   * o = {mode, base(기준 높이, 기본 0), scale(세로 배율), amp(true면 |ψ|, 기본 |ψ|²), alpha}
   */
  QM.drawWave = function (ctx, ch, x, re, im, o = {}) {
    const P = pal(), base = o.base || 0, sc = o.scale ?? 1, mode = o.mode || "phase", N = x.length;
    ctx.save();
    if (mode === "phase") {
      for (let i = 0; i < N - 1; i++) {
        const a = re[i] ** 2 + im[i] ** 2, v = o.amp ? Math.sqrt(a) : a, X0 = ch.X(x[i]), X1 = ch.X(x[i + 1]);
        if (v * sc < 1e-9) continue;
        ctx.fillStyle = QM.phaseColor(re[i], im[i], o.alpha ?? 0.85, window.SB && SB.isDark && SB.isDark() ? 60 : 50);
        const y0 = ch.Y(base), y1 = ch.Y(base + v * sc); ctx.fillRect(X0, Math.min(y0, y1), Math.max(1, X1 - X0 + 0.6), Math.abs(y1 - y0));
      }
      ctx.strokeStyle = P.text; ctx.lineWidth = 1.5; ctx.beginPath();
      for (let i = 0; i < N; i++) { const a = re[i] ** 2 + im[i] ** 2, v = o.amp ? Math.sqrt(a) : a, px = ch.X(x[i]), py = ch.Y(base + v * sc); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
      ctx.stroke();
    } else if (mode === "reim") {
      [[re, o.reColor || P.accent], [im, o.imColor || P.accent2]].forEach(([arr, col]) => { ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.beginPath(); for (let i = 0; i < N; i++) { const px = ch.X(x[i]), py = ch.Y(base + arr[i] * sc); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke(); });
    } else {
      ctx.strokeStyle = o.color || P.accent; ctx.lineWidth = 2; ctx.beginPath();
      for (let i = 0; i < N; i++) { const px = ch.X(x[i]), py = ch.Y(base + (re[i] ** 2 + im[i] ** 2) * sc); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke();
    }
    ctx.restore();
  };
  /** 위상 색 범례 고리 (cx, cy 중심, 반지름 r) */
  QM.drawPhaseWheel = function (ctx, cx, cy, r) {
    for (let a = 0; a < 360; a += 4) { ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, (-(a + 4) * Math.PI) / 180, (-a * Math.PI) / 180); ctx.closePath(); ctx.fillStyle = `hsl(${a},80%,50%)`; ctx.fill(); }
    const P = pal(); ctx.fillStyle = P.bg || "#fff"; ctx.beginPath(); ctx.arc(cx, cy, r * 0.45, 0, 2 * Math.PI); ctx.fill();
  };
  /**
   * 열지도: vals(nx·ny, j=0이 아래) → box {x,y,w,h}. o = {cmap:'div'|'seq'|'phase', vmin, vmax, im(위상 모드의 허수부 배열)}
   * 'div': 파랑–흰–빨강 대칭(음/양), 'seq': 비리디스 꼴.
   */
  const VIR = [[68, 1, 84], [59, 82, 139], [33, 145, 140], [94, 201, 98], [253, 231, 37]];
  QM.cmap = function (name, t) {
    t = QM.clamp(t, 0, 1);
    if (name === "div") { const s = 2 * t - 1, dark = window.SB && SB.isDark && SB.isDark(); if (dark) { const a = Math.abs(s); return s > 0 ? [30 + 200 * a, 30 + 40 * a, 40 + 30 * a] : [30 + 30 * a, 40 + 90 * a, 50 + 190 * a]; } return s > 0 ? [255, 255 - 190 * s, 255 - 200 * s] : [255 + 210 * s, 255 + 140 * s, 255]; }
    const x = t * (VIR.length - 1), i = Math.min(VIR.length - 2, Math.floor(x)), f = x - i, a = VIR[i], b = VIR[i + 1];
    return [a[0] + f * (b[0] - a[0]), a[1] + f * (b[1] - a[1]), a[2] + f * (b[2] - a[2])];
  };
  QM.heatmap = function (ctx, vals, nx, ny, box, o = {}) {
    let vmin = o.vmin, vmax = o.vmax;
    if (vmin == null || vmax == null) { let lo = Infinity, hi = -Infinity; for (const v of vals) if (isFinite(v)) { lo = Math.min(lo, v); hi = Math.max(hi, v); } if (o.cmap === "div") { const m = Math.max(Math.abs(lo), Math.abs(hi)) || 1; lo = -m; hi = m; } vmin ??= lo; vmax ??= hi; }
    const off = QM._off || (QM._off = document.createElement("canvas")); off.width = nx; off.height = ny;
    const octx = off.getContext("2d"), img = octx.createImageData(nx, ny);
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const k = j * nx + i, p = ((ny - 1 - j) * nx + i) * 4, v = vals[k];
      if (!isFinite(v)) { img.data[p + 3] = 0; continue; }
      let c;
      if (o.cmap === "phase") { const amp = QM.clamp((v - vmin) / (vmax - vmin || 1), 0, 1); c = QM.phaseRGB(o.re ? o.re[k] : 1, o.im ? o.im[k] : 0, 0.5); const bg = window.SB && SB.isDark && SB.isDark() ? 20 : 255; c = c.map((x) => bg + (x - bg) * amp); }
      else c = QM.cmap(o.cmap || "seq", (v - vmin) / (vmax - vmin || 1));
      img.data[p] = c[0]; img.data[p + 1] = c[1]; img.data[p + 2] = c[2]; img.data[p + 3] = 255;
    }
    octx.putImageData(img, 0, 0);
    ctx.save(); ctx.imageSmoothingEnabled = o.smooth !== false; ctx.drawImage(off, box.x, box.y, box.w, box.h); ctx.restore();
    return { vmin, vmax };
  };
  /**
   * 블로흐 구 (정사영). view = {yaw, pitch} (라디안). 투영: 화면 x 오른쪽, y 위.
   * QM.blochProject(view, v) → [sx, sy, depth]  (단위 구 기준, 픽셀은 R 곱해 사용)
   */
  QM.blochProject = function (view, v) {
    const cy = Math.cos(view.yaw), sy = Math.sin(view.yaw), cp = Math.cos(view.pitch), sp = Math.sin(view.pitch);
    // 물리 좌표 (x, y, z) → 카메라: 먼저 z축 둘레 yaw, 그다음 수평축 둘레 pitch
    const x1 = v[0] * cy - v[1] * sy, y1 = v[0] * sy + v[1] * cy, z1 = v[2];
    // 화면 오른쪽 = y1, 위 = z1 cos p − x1 sin p (x1 은 관찰자 쪽), 깊이 = x1 cos p + z1 sin p
    return [y1, z1 * cp - x1 * sp, x1 * cp + z1 * sp];
  };
  /**
   * 블로흐 구 그리기. o = {view, vectors:[{v, color, label, width}], trail:[[x,y,z]…], trailColor, axes:true, labels:true, field(축 벡터, 점선)}
   */
  QM.drawBloch = function (ctx, cx, cy, R, o = {}) {
    const P = pal(), view = o.view || { yaw: -0.6, pitch: 0.35 }, pr = (v) => { const p = QM.blochProject(view, v); return [cx + R * p[0], cy - R * p[1], p[2]]; };
    ctx.save();
    ctx.strokeStyle = P.axis; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI); ctx.stroke();
    // 적도·자오선 (앞면 실선, 뒷면 점선)
    const ring = (f, col) => { let prev = null; for (let i = 0; i <= 96; i++) { const t = (2 * Math.PI * i) / 96, q = pr(f(t)); if (prev) { ctx.strokeStyle = col; ctx.setLineDash(q[2] < 0 && prev[2] < 0 ? [3, 4] : []); ctx.globalAlpha = q[2] < 0 ? 0.45 : 0.9; ctx.beginPath(); ctx.moveTo(prev[0], prev[1]); ctx.lineTo(q[0], q[1]); ctx.stroke(); } prev = q; } ctx.setLineDash([]); ctx.globalAlpha = 1; };
    ctx.lineWidth = 1; ring((t) => [Math.cos(t), Math.sin(t), 0], P.grid || P.faint); ring((t) => [Math.cos(t), 0, Math.sin(t)], P.grid || P.faint);
    if (o.axes !== false) {
      const ax = [[[1, 0, 0], "x"], [[0, 1, 0], "y"], [[0, 0, 1], "|0⟩"], [[0, 0, -1], "|1⟩"]];
      if (o.axisLabels) o.axisLabels.forEach((l, i) => (ax[i][1] = l));
      ctx.font = "12px " + (window.SB ? SB.color("mono") || "monospace" : "monospace"); ctx.textAlign = "center"; ctx.textBaseline = "middle";
      for (const [v, lab] of ax) { const a = pr(v.map((c) => -c * (lab === "|1⟩" ? 0 : 1))), b = pr(v); ctx.strokeStyle = P.faint || P.dim; ctx.setLineDash([2, 3]); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(b[0], b[1]); ctx.stroke(); ctx.setLineDash([]); if (o.labels !== false) { const L = pr(v.map((c) => c * 1.16)); ctx.fillStyle = P.dim; ctx.fillText(lab, L[0], L[1]); } void a; }
    }
    if (o.field) { const b = pr(o.field); ctx.strokeStyle = P.warn || P.dim; ctx.setLineDash([6, 4]); ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(b[0], b[1]); ctx.stroke(); ctx.setLineDash([]); }
    if (o.trail && o.trail.length > 1) { ctx.strokeStyle = o.trailColor || P.accent2; ctx.lineWidth = 1.5; ctx.globalAlpha = 0.8; ctx.beginPath(); o.trail.forEach((v, i) => { const q = pr(v); i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); }); ctx.stroke(); ctx.globalAlpha = 1; }
    for (const vec of o.vectors || []) {
      const q = pr(vec.v), col = vec.color || P.accent; ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = vec.width || 3; ctx.globalAlpha = q[2] < 0 ? 0.6 : 1;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(q[0], q[1]); ctx.stroke();
      const an = Math.atan2(q[1] - cy, q[0] - cx), hl = 9; if (Math.hypot(q[0] - cx, q[1] - cy) > 12) { ctx.beginPath(); ctx.moveTo(q[0], q[1]); ctx.lineTo(q[0] - hl * Math.cos(an - 0.4), q[1] - hl * Math.sin(an - 0.4)); ctx.lineTo(q[0] - hl * Math.cos(an + 0.4), q[1] - hl * Math.sin(an + 0.4)); ctx.closePath(); ctx.fill(); }
      if (vec.dot !== false) { ctx.beginPath(); ctx.arc(q[0], q[1], 4, 0, 2 * Math.PI); ctx.fill(); }
      if (vec.label) { ctx.font = "12px " + (window.SB ? SB.color("mono") || "monospace" : "monospace"); ctx.textAlign = "left"; ctx.fillText(vec.label, q[0] + 8, q[1] - 8); }
      ctx.globalAlpha = 1;
    }
    ctx.restore();
    return pr;
  };
  /** 화면 점 (px, py) → 구 앞면 위 블로흐 벡터 (구 밖이면 가장자리로) */
  QM.blochPick = function (view, cx, cy, R, px, py) {
    let a = (px - cx) / R, b = -(py - cy) / R; const r2 = a * a + b * b; if (r2 > 1) { const r = Math.sqrt(r2); a /= r; b /= r; }
    const d = Math.sqrt(Math.max(0, 1 - a * a - b * b));
    // 역변환: [a, b, d] = 화면 (오른쪽 y1, 위, 깊이)
    const cp = Math.cos(view.pitch), sp = Math.sin(view.pitch), x1 = -b * sp + d * cp, z1 = b * cp + d * sp, y1 = a;
    const cyw = Math.cos(view.yaw), syw = Math.sin(view.yaw);
    return [x1 * cyw + y1 * syw, -x1 * syw + y1 * cyw, z1];
  };
})();
