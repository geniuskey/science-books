/* ==========================================================================
   SciBook lib/thermo.js — 열·통계물리와 물리화학 라이브러리 (전역 Thermo)
   상수·단위, 수치 도구(근 찾기·적분·RK4·삼중 대각·erf), 상태 방정식(이상·
   판데르발스·맥스웰 작도·비리얼), 열화학 자료와 반응 ΔH°·ΔS°·ΔG°·K, 단일 반응
   평형 풀이, 엘링엄 선, 통계역학(겹침수·아인슈타인 고체·2준위·분배 함수·회전·
   진동·사쿠르–테트로드·디바이/아인슈타인 비열·FD/BE/MB·플랑크), 기체 운동론과
   진공(속력 분포·플럭스·평균 자유 행로·컨덕턴스·배기), 증기압(클라우지우스–
   클라페이롱·앙투안), 용액(정규 용액·스피노달·쌍봉 곡선·공통 접선), 이성분
   상태도(전율 고용체·단순 공정계·지렛대·쇼이어), 반응 속도(아레니우스·아이링·
   피팅), 표면(랭뮤어·BET·핵생성·ALD·그로브 CVD), 전기화학(전극 전위·네른스트·
   패러데이·버틀러–볼머), 확산(실리콘 도펀트 D(T)·erfc/가우스 분포·접합 깊이·
   딜–그로브), 열전달(열전도도 표·열저항), 1D 확산/열 방정식 풀이(크랭크–니콜슨),
   2D 강체 원판 기체 시뮬레이터, 2D 이징 모형(메트로폴리스).
   의존: 없음 (그리기는 SB를 쓰는 장 스크립트가 한다. heatColor만 예외적으로 고정색)

   관례
   - 기본은 SI 단위: Pa, m³, K, J, mol. 몰당 양은 J/mol, J/(mol·K).
     열화학 자료표(Thermo.species)는 관례대로 ΔHf°[kJ/mol], S°[J/(mol·K)], Cp°[J/(mol·K)].
     표준 상태 P° = 1 bar(10⁵ Pa).
   - 압력 단위 변환: Thermo.unit.torr / atm / bar / mbar (Pa로 곱하면 됨).
   - 확산은 반도체 관례: D[cm²/s], 시간[s], 깊이는 D와 맞는 단위(cm). 결과를 µm로
     보려면 ×1e4. 딜–그로브는 µm·h.
   - 통계역학 함수의 에너지는 kT 단위(무차원)로 받는 것이 많다(인자 이름 e, x = E/kT).
   - 2D 기체(Thermo.gas2d)는 화면 단위: 길이 px, 시간 s, 질량 임의. 온도 T는
     2D 등분배 kT = ⟨½mv²⟩ 로 정의(k = 1).
   ========================================================================== */
(function () {
  "use strict";
  const T = (window.Thermo = {});
  const PI = Math.PI, exp = Math.exp, ln = Math.log, sqrt = Math.sqrt;

  /* ------------------------------------------------------------ 상수·단위 (CODATA 2018) */
  const C = (T.C = {
    R: 8.314462618, kB: 1.380649e-23, NA: 6.02214076e23, h: 6.62607015e-34, hbar: 1.054571817e-34,
    c: 299792458, e: 1.602176634e-19, amu: 1.66053906660e-27, me: 9.1093837015e-31,
    F: 96485.33212, sigma: 5.670374419e-8, wien: 2.897771955e-3, g: 9.80665,
    kB_eV: 8.617333262e-5, P0: 1e5, atm: 101325, T0: 273.15,
  });
  T.unit = { Pa: 1, kPa: 1e3, bar: 1e5, mbar: 100, atm: 101325, torr: 101325 / 760, mtorr: 101325 / 760e3, psi: 6894.757293168 };
  /** sccm(0 °C, 1 atm 기준 cm³/min) → mol/s */
  T.sccm2mol = (q) => (q * 1e-6 * C.atm) / (C.R * C.T0) / 60;
  /** sccm → Pa·m³/s (기체 처리량 Q) */
  T.sccm2PaM3s = (q) => (q * 1e-6 * C.atm) / 60;
  T.C2K = (t) => t + C.T0;
  T.K2C = (t) => t - C.T0;
  T.eV2J = (e) => e * C.e;
  T.kT_eV = (TK) => C.kB_eV * TK;

  /* ------------------------------------------------------------ 수치 도구 */
  T.linspace = (a, b, n) => Array.from({ length: n }, (_, i) => a + ((b - a) * i) / (n - 1));
  T.logspace = (a, b, n) => T.linspace(Math.log10(a), Math.log10(b), n).map((v) => 10 ** v);
  /** 이분법: f(a)와 f(b)의 부호가 달라야 한다. 아니면 NaN. */
  T.bisect = function (f, a, b, tol = 1e-12, it = 200) {
    let fa = f(a), fb = f(b);
    if (fa === 0) return a;
    if (fb === 0) return b;
    if (!(fa * fb < 0)) return NaN;
    for (let i = 0; i < it; i++) {
      const m = 0.5 * (a + b), fm = f(m);
      if (fm === 0 || Math.abs(b - a) < tol * (1 + Math.abs(m))) return m;
      if (fa * fm < 0) { b = m; fb = fm; } else { a = m; fa = fm; }
    }
    return 0.5 * (a + b);
  };
  /** 로그 축 이분법(양수 범위가 여러 자릿수에 걸칠 때) */
  T.bisectLog = (f, lo, hi, tol = 1e-12) => { const r = T.bisect((u) => f(exp(u)), ln(lo), ln(hi), tol); return exp(r); };
  /** 뉴턴법(수치 미분). 수렴하지 않으면 마지막 값 */
  T.newton = function (f, x0, tol = 1e-12, it = 100) {
    let x = x0;
    for (let i = 0; i < it; i++) {
      const h = 1e-7 * (Math.abs(x) + 1e-7), fx = f(x), d = (f(x + h) - f(x - h)) / (2 * h);
      if (!isFinite(d) || d === 0) break;
      const dx = fx / d; x -= dx;
      if (Math.abs(dx) < tol * (1 + Math.abs(x))) break;
    }
    return x;
  };
  /** 심프슨 적분 (n 짝수로 맞춤) */
  T.simpson = function (f, a, b, n = 400) {
    if (n % 2) n++;
    const h = (b - a) / n;
    let s = f(a) + f(b);
    for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h);
    return (s * h) / 3;
  };
  /** RK4 한 걸음. deriv(t, y[]) → dy[] */
  T.rk4 = function (deriv, y, t, dt) {
    const n = y.length, k1 = deriv(t, y), y2 = new Array(n), y3 = new Array(n), y4 = new Array(n);
    for (let i = 0; i < n; i++) y2[i] = y[i] + 0.5 * dt * k1[i];
    const k2 = deriv(t + 0.5 * dt, y2);
    for (let i = 0; i < n; i++) y3[i] = y[i] + 0.5 * dt * k2[i];
    const k3 = deriv(t + 0.5 * dt, y3);
    for (let i = 0; i < n; i++) y4[i] = y[i] + dt * k3[i];
    const k4 = deriv(t + dt, y4);
    return y.map((v, i) => v + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
  };
  /** 상미분 방정식 적분 → [{t, y}] (n걸음 고정 RK4) */
  T.ode = function (deriv, y0, t0, t1, n = 400) {
    const out = [{ t: t0, y: y0.slice() }], dt = (t1 - t0) / n;
    let y = y0.slice(), t = t0;
    for (let i = 0; i < n; i++) { y = T.rk4(deriv, y, t, dt); t += dt; out.push({ t, y }); }
    return out;
  };
  /** 삼중 대각 풀이(토머스). a 아래, b 대각, c 위, d 우변 — 모두 길이 n */
  T.tridiag = function (a, b, c, d) {
    const n = b.length, cp = new Float64Array(n), dp = new Float64Array(n), x = new Float64Array(n);
    cp[0] = c[0] / b[0]; dp[0] = d[0] / b[0];
    for (let i = 1; i < n; i++) {
      const m = b[i] - a[i] * cp[i - 1];
      cp[i] = c[i] / m; dp[i] = (d[i] - a[i] * dp[i - 1]) / m;
    }
    x[n - 1] = dp[n - 1];
    for (let i = n - 2; i >= 0; i--) x[i] = dp[i] - cp[i] * x[i + 1];
    return x;
  };
  /** 최소 제곱 직선 y = a + b x → {a, b, r2} */
  T.linfit = function (xs, ys) {
    const n = xs.length; let sx = 0, sy = 0, sxx = 0, sxy = 0, syy = 0;
    for (let i = 0; i < n; i++) { sx += xs[i]; sy += ys[i]; sxx += xs[i] * xs[i]; sxy += xs[i] * ys[i]; syy += ys[i] * ys[i]; }
    const b = (n * sxy - sx * sy) / (n * sxx - sx * sx), a = (sy - b * sx) / n;
    const r = (n * sxy - sx * sy) / sqrt((n * sxx - sx * sx) * (n * syy - sy * sy));
    return { a, b, r2: r * r };
  };
  /** 오차 함수 (Numerical Recipes erfc 체비쇼프, 상대 오차 < 1.2e-7) */
  T.erfc = function (x) {
    const z = Math.abs(x), t = 1 / (1 + 0.5 * z);
    const r = t * exp(-z * z - 1.26551223 + t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + t * (-0.82215223 + t * 0.17087277)))))))));
    return x >= 0 ? r : 2 - r;
  };
  T.erf = (x) => 1 - T.erfc(x);
  /** erfc의 역함수 (0 < y < 2) */
  T.erfcinv = (y) => T.bisect((x) => T.erfc(x) - y, -6, 6, 1e-14);
  /** ln Γ(x) (란초스) */
  T.lgamma = function (x) {
    const g = [676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (x < 0.5) return ln(PI / Math.abs(Math.sin(PI * x))) - T.lgamma(1 - x);
    x -= 1; let a = 0.99999999999980993; const t = x + 7.5;
    for (let i = 0; i < 8; i++) a += g[i] / (x + i + 1);
    return 0.5 * ln(2 * PI) + (x + 0.5) * ln(t) - t + ln(a);
  };
  T.lnFact = (n) => T.lgamma(n + 1);
  T.lnChoose = (n, k) => (k < 0 || k > n ? -Infinity : T.lnFact(n) - T.lnFact(k) - T.lnFact(n - k));
  /** mulberry32 시드 난수 [0,1) */
  T.rng = function (seed = 1) {
    let a = seed >>> 0;
    const u = function () {
      a = (a + 0x6d2b79f5) >>> 0; let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    let spare = null;
    u.normal = function () {
      if (spare != null) { const z = spare; spare = null; return z; }
      let x, y, r; do { x = 2 * u() - 1; y = 2 * u() - 1; r = x * x + y * y; } while (r >= 1 || r === 0);
      const f = sqrt((-2 * ln(r)) / r); spare = y * f; return x * f;
    };
    return u;
  };

  /* ------------------------------------------------------------ 상태 방정식 */
  /** 판데르발스 상수 a[Pa·m⁶/mol²], b[m³/mol] (CRC, L²·bar/mol²·0.1, L/mol·1e-3) */
  T.vdwData = {
    He: { a: 0.00346, b: 2.38e-5, ko: "헬륨" }, Ne: { a: 0.0208, b: 1.672e-5, ko: "네온" },
    Ar: { a: 0.1355, b: 3.201e-5, ko: "아르곤" }, Xe: { a: 0.425, b: 5.105e-5, ko: "제논" },
    H2: { a: 0.02452, b: 2.651e-5, ko: "수소" }, N2: { a: 0.137, b: 3.87e-5, ko: "질소" },
    O2: { a: 0.1382, b: 3.186e-5, ko: "산소" }, CO2: { a: 0.364, b: 4.267e-5, ko: "이산화 탄소" },
    H2O: { a: 0.5536, b: 3.049e-5, ko: "물" }, NH3: { a: 0.4225, b: 3.71e-5, ko: "암모니아" },
    CH4: { a: 0.2303, b: 4.31e-5, ko: "메테인" },
  };
  T.ideal = {
    P: (n, V, TK) => (n * C.R * TK) / V,
    V: (n, P, TK) => (n * C.R * TK) / P,
    n: (P, V, TK) => (P * V) / (C.R * TK),
    /** 밀도 [kg/m³], M[kg/mol] */
    rho: (P, TK, M) => (P * M) / (C.R * TK),
  };
  /** 판데르발스 압력 P(T, Vm) */
  T.vdwP = (TK, Vm, a, b) => (C.R * TK) / (Vm - b) - a / (Vm * Vm);
  /** 임계 상수 {Tc, Pc, Vc} */
  T.vdwCritical = (a, b) => ({ Tc: (8 * a) / (27 * C.R * b), Pc: a / (27 * b * b), Vc: 3 * b });
  /** 환산 판데르발스 식 P_r(T_r, V_r) */
  T.vdwReduced = (Tr, Vr) => (8 * Tr) / (3 * Vr - 1) - 3 / (Vr * Vr);
  /** P에서 판데르발스 몰부피의 실근들(오름차순). 3차식 Vm³ − (b + RT/P)Vm² + (a/P)Vm − ab/P = 0 */
  T.vdwVolumes = function (TK, P, a, b) {
    const A = -(b + (C.R * TK) / P), B = a / P, Cc = (-a * b) / P;
    return cubicReal(A, B, Cc).filter((v) => v > b).sort((x, y) => x - y);
  };
  function cubicReal(a, b, c) {
    // x³ + a x² + b x + c = 0
    const q = (a * a - 3 * b) / 9, r = (2 * a * a * a - 9 * a * b + 27 * c) / 54, q3 = q * q * q;
    if (r * r < q3) {
      const th = Math.acos(r / sqrt(q3)), s = -2 * sqrt(q);
      return [s * Math.cos(th / 3) - a / 3, s * Math.cos((th + 2 * PI) / 3) - a / 3, s * Math.cos((th - 2 * PI) / 3) - a / 3];
    }
    const A = -Math.sign(r) * Math.cbrt(Math.abs(r) + sqrt(r * r - q3)), B = A === 0 ? 0 : q / A;
    return [A + B - a / 3];
  }
  T.cubicReal = cubicReal;
  /** 환산 변수에서 맥스웰 작도: Tr < 1 → {Pr, Vl, Vg} (같은 넓이 규칙). Tr ≥ 1 → null */
  T.maxwellReduced = function (Tr) {
    if (!(Tr < 1) || Tr <= 0.3) return null;
    // 스피노달(극값) 사이에서 Pr를 이분법으로
    const P = (V) => T.vdwReduced(Tr, V);
    const dP = (V) => (-24 * Tr) / ((3 * V - 1) ** 2) + 6 / (V * V * V);
    const vmin = T.bisect(dP, 0.34, 1), vmax = T.bisect(dP, 1, 50);
    const plo = Math.max(P(vmin), 1e-12), phi = P(vmax);
    // 근은 단조 구간마다 이분법으로(3차식 공식은 아주 낮은 압력에서 기체 근의 정밀도를 잃는다)
    const roots = (p) => {
      const vl = T.bisect((V) => P(V) - p, 1 / 3 + 1e-12, vmin, 1e-14);
      let hiV = vmax * 2; while (P(hiV) > p && hiV < 1e12) hiV *= 2;
      const vg = T.bisect((V) => P(V) - p, vmax, hiV, 1e-14);
      return isFinite(vl) && isFinite(vg) ? [vl, NaN, vg] : [];
    };
    const area = (p) => {
      const r = roots(p); if (r.length < 3) return NaN;
      const vl = r[0], vg = r[2];
      // ∫P dV = (8Tr/3) ln((3vg−1)/(3vl−1)) + 3(1/vg − 1/vl)
      const I = ((8 * Tr) / 3) * ln((3 * vg - 1) / (3 * vl - 1)) + 3 * (1 / vg - 1 / vl);
      return I - p * (vg - vl);
    };
    const pr = T.bisect(area, plo + 1e-12 * (phi - plo) + 1e-12, phi - 1e-12 * (phi - plo));
    if (!isFinite(pr)) return null;
    const r = roots(pr);
    return { Pr: pr, Vl: r[0], Vg: r[2], Vmin: vmin, Vmax: vmax };
  };
  /** 압축 인자 Z = PVm/RT */
  T.Z = (P, Vm, TK) => (P * Vm) / (C.R * TK);
  /** 판데르발스 기체의 제2 비리얼 계수 B(T) = b − a/RT [m³/mol] 와 보일 온도 */
  T.vdwB2 = (TK, a, b) => b - a / (C.R * TK);
  T.vdwBoyle = (a, b) => a / (C.R * b);

  /* ------------------------------------------------------------ 열화학 자료 (298.15 K, 1 bar) */
  // ΔHf°[kJ/mol], S°[J/(mol·K)], Cp°[J/(mol·K)], M[g/mol]. NIST-JANAF·CODATA 대표값.
  const sp = (ko, H, S, Cp, M, phase) => ({ ko, H, S, Cp, M, phase });
  T.species = {
    "H2(g)": sp("수소", 0, 130.68, 28.84, 2.016, "g"),
    "O2(g)": sp("산소", 0, 205.15, 29.38, 31.999, "g"),
    "N2(g)": sp("질소", 0, 191.61, 29.12, 28.014, "g"),
    "Ar(g)": sp("아르곤", 0, 154.85, 20.79, 39.948, "g"),
    "He(g)": sp("헬륨", 0, 126.15, 20.79, 4.0026, "g"),
    "Cl2(g)": sp("염소", 0, 223.08, 33.95, 70.90, "g"),
    "F2(g)": sp("플루오린", 0, 202.79, 31.30, 37.997, "g"),
    "H2O(l)": sp("물(액체)", -285.83, 69.95, 75.29, 18.015, "l"),
    "H2O(g)": sp("수증기", -241.83, 188.84, 33.58, 18.015, "g"),
    "CO2(g)": sp("이산화 탄소", -393.51, 213.79, 37.12, 44.009, "g"),
    "CO(g)": sp("일산화 탄소", -110.53, 197.66, 29.14, 28.010, "g"),
    "CH4(g)": sp("메테인", -74.6, 186.25, 35.69, 16.043, "g"),
    "NH3(g)": sp("암모니아", -45.9, 192.77, 35.06, 17.031, "g"),
    "HCl(g)": sp("염화 수소", -92.31, 186.90, 29.14, 36.461, "g"),
    "HF(g)": sp("플루오린화 수소", -273.30, 173.78, 29.14, 20.006, "g"),
    "N2O(g)": sp("일산화 이질소", 81.6, 220.0, 38.6, 44.013, "g"),
    "NO(g)": sp("일산화 질소", 91.29, 210.76, 29.86, 30.006, "g"),
    "O3(g)": sp("오존", 142.7, 238.9, 39.2, 47.998, "g"),
    "C(s)": sp("흑연", 0, 5.74, 8.53, 12.011, "s"),
    "Si(s)": sp("실리콘", 0, 18.81, 20.00, 28.086, "s"),
    "SiO2(s)": sp("이산화 규소(석영)", -910.7, 41.46, 44.43, 60.084, "s"),
    "SiH4(g)": sp("실레인", 34.3, 204.65, 42.84, 32.118, "g"),
    "SiHCl3(g)": sp("트라이클로로실레인", -496.2, 313.7, 75.8, 135.45, "g"),
    "SiH2Cl2(g)": sp("다이클로로실레인", -320.5, 286.7, 60.5, 101.01, "g"),
    "SiCl4(g)": sp("사염화 규소", -662.75, 330.86, 90.3, 169.90, "g"),
    "SiF4(g)": sp("사플루오린화 규소", -1615.0, 282.76, 73.6, 104.08, "g"),
    "Si3N4(s)": sp("질화 규소", -744.8, 113.0, 95.8, 140.28, "s"),
    "Al(s)": sp("알루미늄", 0, 28.30, 24.20, 26.982, "s"),
    "Al2O3(s)": sp("산화 알루미늄", -1675.7, 50.92, 79.04, 101.96, "s"),
    "Ti(s)": sp("타이타늄", 0, 30.72, 25.06, 47.867, "s"),
    "TiO2(s)": sp("이산화 타이타늄(루틸)", -944.0, 50.62, 55.02, 79.866, "s"),
    "Hf(s)": sp("하프늄", 0, 43.56, 25.73, 178.49, "s"),
    "HfO2(s)": sp("이산화 하프늄", -1144.7, 59.33, 60.26, 210.49, "s"),
    "W(s)": sp("텅스텐", 0, 32.64, 24.27, 183.84, "s"),
    "WO3(s)": sp("삼산화 텅스텐", -842.9, 75.90, 73.76, 231.84, "s"),
    "WF6(g)": sp("육플루오린화 텅스텐", -1721.7, 341.1, 119.0, 297.83, "g"),
    "Cu(s)": sp("구리", 0, 33.15, 24.44, 63.546, "s"),
    "CuO(s)": sp("산화 구리(II)", -157.3, 42.63, 42.30, 79.545, "s"),
    "Cu2O(s)": sp("산화 구리(I)", -168.6, 93.14, 63.64, 143.09, "s"),
    "Ni(s)": sp("니켈", 0, 29.87, 26.07, 58.693, "s"),
    "NiO(s)": sp("산화 니켈", -239.7, 37.99, 44.30, 74.692, "s"),
    "Fe(s)": sp("철", 0, 27.28, 25.10, 55.845, "s"),
    "Fe2O3(s)": sp("산화 철(III)", -824.2, 87.40, 103.85, 159.69, "s"),
    "Ge(s)": sp("저마늄", 0, 31.09, 23.22, 72.630, "s"),
    "GeO2(s)": sp("이산화 저마늄", -580.0, 39.71, 52.09, 104.63, "s"),
    "Ga(s)": sp("갈륨", 0, 40.83, 25.86, 69.723, "s"),
    "Ta(s)": sp("탄탈럼", 0, 41.51, 25.36, 180.95, "s"),
    "Ta2O5(s)": sp("오산화 탄탈럼", -2046.0, 143.09, 135.1, 441.89, "s"),
    "Zr(s)": sp("지르코늄", 0, 38.87, 25.36, 91.224, "s"),
    "ZrO2(s)": sp("이산화 지르코늄", -1100.6, 50.38, 56.19, 123.22, "s"),
    "Mg(s)": sp("마그네슘", 0, 32.67, 24.87, 24.305, "s"),
    "MgO(s)": sp("산화 마그네슘", -601.6, 26.95, 37.15, 40.304, "s"),
    "Ca(s)": sp("칼슘", 0, 41.59, 25.93, 40.078, "s"),
    "CaO(s)": sp("산화 칼슘", -634.9, 38.1, 42.0, 56.077, "s"),
    "Ag(s)": sp("은", 0, 42.55, 25.35, 107.87, "s"),
    "Ag2O(s)": sp("산화 은", -31.1, 121.3, 65.9, 231.74, "s"),
    "Au(s)": sp("금", 0, 47.4, 25.42, 196.97, "s"),
  };
  /** 반응 {"SiH4(g)": -1, "Si(s)": 1, "H2(g)": 2} (반응물 음수) → {dH[J/mol], dS[J/(mol·K)], dCp} */
  T.rxn = function (nu) {
    let dH = 0, dS = 0, dCp = 0;
    for (const k in nu) {
      const s = T.species[k]; if (!s) throw new Error("Thermo.species에 없음: " + k);
      dH += nu[k] * s.H * 1e3; dS += nu[k] * s.S; dCp += nu[k] * s.Cp;
    }
    return { dH, dS, dCp };
  };
  /** 온도 TK의 ΔH°, ΔS°, ΔG° (ΔCp 일정 근사; cp=false면 ΔCp=0 엘링엄 근사) */
  T.rxnAt = function (nu, TK, cp = true) {
    const r = T.rxn(nu), d = cp ? r.dCp : 0, T0 = 298.15;
    const dH = r.dH + d * (TK - T0), dS = r.dS + d * ln(TK / T0);
    return { dH, dS, dG: dH - TK * dS };
  };
  /** 평형 상수 K = exp(−ΔG°/RT) */
  T.K = (dG, TK) => exp(-dG / (C.R * TK));
  T.dGfromK = (K, TK) => -C.R * TK * ln(K);
  /** 반트호프: ln(K2/K1) = −ΔH°/R (1/T2 − 1/T1) → K2 */
  T.vantHoff = (K1, T1, T2, dH) => K1 * exp((-dH / C.R) * (1 / T2 - 1 / T1));
  /**
   * 단일 반응 평형 풀이. opt = {nu, K, n0, P(bar, 기본 1), phases?}
   * nu: 화학량론 계수(반응물 음수), n0: 처음 몰수(없는 종은 0). 기체 활동도 = (n_i/n_gas)(P/P°),
   * 응축상(phase 's'/'l', Thermo.species 또는 phases로 지정) 활동도 = 1(있는 동안).
   * → {xi, n:{}, y:{}(기체 몰분율), Q}
   */
  T.equilibrium = function (opt) {
    const nu = opt.nu, n0 = opt.n0 || {}, P = opt.P == null ? 1 : opt.P, K = opt.K;
    const keys = Object.keys(nu);
    const phase = (k) => (opt.phases && opt.phases[k]) || (T.species[k] && T.species[k].phase) || (/\((s|l)\)$/.test(k) ? "s" : "g");
    let lo = -Infinity, hi = Infinity;
    for (const k of keys) {
      const n = n0[k] || 0;
      if (nu[k] < 0) hi = Math.min(hi, n / -nu[k]); else if (nu[k] > 0) lo = Math.max(lo, -n / nu[k]);
    }
    // 기체만 계산 (응축상이 다 소모되는 경계는 hi/lo로 처리)
    const others = opt.inert || 0;
    const lnQ = (xi) => {
      let ng = others; for (const k of Object.keys(n0)) if (phase(k) === "g" && !(k in nu)) ng += n0[k];
      for (const k of keys) if (phase(k) === "g") ng += (n0[k] || 0) + nu[k] * xi;
      let s = 0;
      for (const k of keys) if (phase(k) === "g") { const ni = (n0[k] || 0) + nu[k] * xi; s += nu[k] * ln(Math.max(ni, 1e-300) / ng * P); }
      return s;
    };
    const eps = 1e-13 * (hi - lo || 1);
    const f = (xi) => lnQ(xi) - ln(K);
    let xi;
    if (f(hi - eps) < 0) xi = hi; else if (f(lo + eps) > 0) xi = lo; else xi = T.bisect(f, lo + eps, hi - eps, 1e-14);
    const n = {}, y = {}; let ng = others;
    for (const k of new Set([...keys, ...Object.keys(n0)])) { n[k] = (n0[k] || 0) + (nu[k] || 0) * xi; if (phase(k) === "g") ng += n[k]; }
    for (const k in n) if (phase(k) === "g") y[k] = n[k] / ng;
    return { xi, n, y, Q: exp(lnQ(xi)), ng };
  };
  /** 엘링엄: 금속 M + O2 → 산화물 반응의 O2 1 mol당 ΔG°(T) [J]. oxide 예: "SiO2(s)", metal "Si(s)" */
  T.ellingham = function (metal, oxide, TK, cp = false) {
    const ox = oxide.replace(/\(.*\)$/, "");
    const m = ox.match(/^([A-Z][a-z]?)(\d*)O(\d*)$/);
    if (!m) throw new Error("산화물 식을 읽을 수 없음: " + oxide);
    const xm = +(m[2] || 1), xo = +(m[3] || 1);
    // (2/xo) MxmOxo 생성: (2xm/xo) M + O2 → (2/xo) oxide
    const nu = {}; nu[metal] = (-2 * xm) / xo; nu["O2(g)"] = -1; nu[oxide] = 2 / xo;
    return T.rxnAt(nu, TK, cp).dG;
  };
  /** 산화물이 분해되는 산소 분압 [bar]: pO2 = exp(ΔG°/RT) */
  T.pO2eq = (dG, TK) => exp(dG / (C.R * TK));

  /* ------------------------------------------------------------ 통계역학 */
  /** 아인슈타인 고체 겹침수 ln Ω(N, q) = ln C(q+N−1, q) */
  T.lnOmegaEinstein = (N, q) => T.lnChoose(q + N - 1, q);
  /** 2준위 계(동전) ln Ω(N, n) = ln C(N, n) */
  T.lnOmega2 = (N, n) => T.lnChoose(N, n);
  /** 두 아인슈타인 고체 A(NA), B(NB)가 에너지 q를 나눌 때 qA별 확률 배열 */
  T.einsteinShare = function (NA, NB, q) {
    const l = [];
    for (let a = 0; a <= q; a++) l.push(T.lnOmegaEinstein(NA, a) + T.lnOmegaEinstein(NB, q - a));
    const m = Math.max(...l), w = l.map((v) => exp(v - m)), s = w.reduce((x, y) => x + y, 0);
    return w.map((v) => v / s);
  };
  /** 볼츠만 인자 분포: 준위 E[](kT 단위 아님, 같은 단위), 겹침 g[], kT → 점유 확률 */
  T.boltzmann = function (E, kT, g) {
    const e0 = Math.min(...E), w = E.map((e, i) => (g ? g[i] : 1) * exp(-(e - e0) / kT)), Z = w.reduce((a, b) => a + b, 0);
    return w.map((v) => v / Z);
  };
  /** 분배 함수와 열역학량 (준위 E[J], 겹침 g, 온도 TK) → {Z, U, Cv, F, S} 입자 하나당 (J, J/K) */
  T.partition = function (E, g, TK) {
    const kT = C.kB * TK, e0 = Math.min(...E);
    let Z = 0, U = 0, U2 = 0;
    E.forEach((e, i) => { const w = (g ? g[i] : 1) * exp(-(e - e0) / kT); Z += w; U += w * e; U2 += w * e * e; });
    U /= Z; U2 /= Z;
    const Cv = (U2 - U * U) / (C.kB * TK * TK), F = e0 - kT * ln(Z), S = (U - F) / TK;
    return { Z, U, Cv, F, S };
  };
  /** 2준위(간격 Δ, x = Δ/kT): 위 준위 점유, 평균 에너지/Δ, 쇼트키 열용량/k */
  T.twoLevel = (x) => ({ p1: 1 / (1 + exp(x)), u: 1 / (1 + exp(x)), c: (x * x * exp(x)) / (1 + exp(x)) ** 2 });
  /** 양자 조화 진동자(θ = ħω/k): 평균 에너지/kθ(영점 포함), 열용량/k (아인슈타인 함수) */
  T.oscillator = (TK, theta) => { const x = theta / TK; return { u: 0.5 + 1 / (exp(x) - 1), c: (x * x * exp(x)) / (exp(x) - 1) ** 2, Z: exp(-x / 2) / (1 - exp(-x)) }; };
  T.einsteinCv = (TK, thetaE) => 3 * T.oscillator(TK, thetaE).c; // 몰당 /R
  /** 디바이 열용량 Cv/(3Nk) (0..1) */
  T.debyeCv = function (TK, thetaD) {
    if (TK <= 0) return 0;
    const xD = thetaD / TK;
    if (xD < 1e-4) return 1;
    const f = (x) => (x < 1e-8 ? x * x : (x ** 4 * exp(x)) / (exp(x) - 1) ** 2);
    return 3 * T.simpson(f, 0, Math.min(xD, 60), 600) / (xD ** 3);
  };
  /** 강체 회전자 분배 함수(이핵, 고온 근사 T/θr + 1/3 + …) 또는 직접 합. σ 대칭수 */
  T.rotorZ = function (TK, thetaR, sigma = 1, exact = true) {
    if (!exact) return TK / (sigma * thetaR) * (1 + thetaR / (3 * TK));
    let Z = 0;
    for (let J = 0; J < 2000; J++) { const t = (2 * J + 1) * exp((-J * (J + 1) * thetaR) / TK); Z += t; if (J > 5 && t < 1e-15 * Z) break; }
    return Z / sigma;
  };
  /** 회전 준위 J의 점유 확률(이핵) */
  T.rotorPop = (J, TK, thetaR) => ((2 * J + 1) * exp((-J * (J + 1) * thetaR) / TK)) / T.rotorZ(TK, thetaR, 1);
  /** 분자 자료: 회전 온도 θr[K], 진동 온도 θv[K], 대칭수 σ, 질량 M[g/mol] (McQuarrie) */
  T.diatomic = {
    H2: { thR: 85.3, thV: 6332, sigma: 2, M: 2.016 }, N2: { thR: 2.88, thV: 3374, sigma: 2, M: 28.014 },
    O2: { thR: 2.07, thV: 2256, sigma: 2, M: 31.999 }, CO: { thR: 2.77, thV: 3103, sigma: 1, M: 28.010 },
    HCl: { thR: 15.02, thV: 4227, sigma: 1, M: 36.461 }, Cl2: { thR: 0.351, thV: 805, sigma: 2, M: 70.90 },
    I2: { thR: 0.0537, thV: 308, sigma: 2, M: 253.81 }, NO: { thR: 2.39, thV: 2719, sigma: 1, M: 30.006 },
  };
  /** 이원자 이상 기체의 몰 정적 열용량 Cv/R (병진 3/2 + 회전 + 진동) */
  T.diatomicCv = function (TK, thR, thV) {
    // 회전: 직접 합으로 수치 미분
    const lnZ = (t) => ln(T.rotorZ(t, thR, 1));
    const h = TK * 1e-3, d2 = (lnZ(TK + h) - 2 * lnZ(TK) + lnZ(TK - h)) / (h * h), d1 = (lnZ(TK + h) - lnZ(TK - h)) / (2 * h);
    const crot = 2 * TK * d1 + TK * TK * d2;
    return 1.5 + crot + T.oscillator(TK, thV).c;
  };
  /** 열적 드브로이 파장 λ = h/√(2π m k T) [m], m[kg] */
  T.thermalWavelength = (m, TK) => C.h / sqrt(2 * PI * m * C.kB * TK);
  /** 사쿠르–테트로드 몰 엔트로피 [J/(mol·K)], M[g/mol], P[Pa] */
  T.sackurTetrode = function (M, TK, P = C.P0) {
    const m = (M * 1e-3) / C.NA, vq = T.thermalWavelength(m, TK) ** 3, v = (C.kB * TK) / P;
    return C.R * (ln(v / vq) + 2.5);
  };
  /** 분포 함수 (x = (E−μ)/kT) */
  T.fd = (x) => 1 / (exp(x) + 1);
  T.be = (x) => 1 / (exp(x) - 1);
  T.mb = (x) => exp(-x);
  /** 플랑크 분광 복사 휘도 B_λ [W/(m²·sr·m)], λ[m] */
  T.planck = (lam, TK) => (2 * C.h * C.c * C.c) / lam ** 5 / (exp((C.h * C.c) / (lam * C.kB * TK)) - 1);
  /** 플랑크 B_ν [W/(m²·sr·Hz)] */
  T.planckNu = (nu, TK) => ((2 * C.h * nu ** 3) / (C.c * C.c)) / (exp((C.h * nu) / (C.kB * TK)) - 1);
  T.wienPeak = (TK) => C.wien / TK;
  T.stefan = (TK, eps = 1) => eps * C.sigma * TK ** 4;
  /** 파장 λ1..λ2 [m] 사이 흑체 복사 비율 (0..1) */
  T.bandFraction = function (l1, l2, TK) {
    // ln λ 위에서 적분(λ B_λ d ln λ) — 여러 자릿수에 걸친 범위도 정확
    const f = (u) => { const l = exp(u); return l * T.planck(l, TK); };
    return (PI * T.simpson(f, ln(l1), ln(l2), 2000)) / (C.sigma * TK ** 4);
  };
  /** 자유 전자 페르미 에너지 [J], n[m⁻³] */
  T.fermiEnergy = (n, m = C.me) => ((C.hbar * C.hbar) / (2 * m)) * (3 * PI * PI * n) ** (2 / 3);
  /** 페르미–디랙 적분 F_{1/2}(η) (정규화: (2/√π)∫ √x/(1+e^{x−η}) dx) */
  T.fdHalf = function (eta) {
    const f = (x) => sqrt(x) / (1 + exp(x - eta));
    return (2 / sqrt(PI)) * T.simpson(f, 0, Math.max(eta, 0) + 40, 1200);
  };

  /* ------------------------------------------------------------ 기체 운동론과 진공 */
  const mol2kg = (M) => (M * 1e-3) / C.NA;
  /** 분자 지름[m] (점성에서 구한 값, O'Hanlon) */
  T.diameter = { H2: 2.75e-10, He: 2.18e-10, Ne: 2.60e-10, N2: 3.78e-10, O2: 3.64e-10, Ar: 3.67e-10, CO2: 4.65e-10, H2O: 4.68e-10, air: 3.74e-10, Kr: 4.15e-10, Xe: 4.91e-10 };
  T.molarMass = { H2: 2.016, He: 4.0026, Ne: 20.180, N2: 28.014, O2: 31.999, Ar: 39.948, CO2: 44.009, H2O: 18.015, air: 28.97, Kr: 83.798, Xe: 131.29, SiH4: 32.118, CH4: 16.043, NH3: 17.031 };
  T.speeds = function (M, TK) {
    const m = mol2kg(M), kT = C.kB * TK;
    return { vmp: sqrt((2 * kT) / m), vmean: sqrt((8 * kT) / (PI * m)), vrms: sqrt((3 * kT) / m) };
  };
  /** 맥스웰–볼츠만 3D 속력 분포 f(v) [s/m] */
  T.mbSpeed = function (v, M, TK) {
    const m = mol2kg(M), a = m / (2 * C.kB * TK);
    return 4 * PI * (a / PI) ** 1.5 * v * v * exp(-a * v * v);
  };
  /** 속력 v 이상인 분자의 비율 */
  T.mbFracAbove = function (v, M, TK) {
    const x = v / T.speeds(M, TK).vmp;
    return T.erfc(x) + (2 / sqrt(PI)) * x * exp(-x * x);
  };
  /** 2D 속력 분포 f(v) (화면 시뮬레이터 비교용, kT와 m 같은 단위) */
  T.mb2d = (v, m, kT) => (m * v / kT) * exp((-m * v * v) / (2 * kT));
  /** 수밀도 [m⁻³] */
  T.numberDensity = (P, TK) => P / (C.kB * TK);
  /** 벽 충돌 플럭스 Φ = P/√(2π m k T) [m⁻²s⁻¹] */
  T.flux = (P, TK, M) => P / sqrt(2 * PI * mol2kg(M) * C.kB * TK);
  /** 단분자층 형성 시간 [s] (부착 계수 s, 표면 자리 밀도 ns[m⁻²] 기본 1e19) */
  T.monolayerTime = (P, TK, M, s = 1, ns = 1e19) => ns / (s * T.flux(P, TK, M));
  /** 평균 자유 행로 λ = kT/(√2 π d² P) [m] */
  T.mfp = (P, TK, d) => (C.kB * TK) / (Math.SQRT2 * PI * d * d * P);
  /** 크누센 수 Kn = λ/L 와 흐름 영역 */
  T.knudsen = (lam, L) => { const Kn = lam / L; return { Kn, regime: Kn > 0.5 ? "분자류" : Kn < 0.01 ? "점성류" : "전이류" }; };
  /** 분자류 컨덕턴스 [m³/s] — 구멍(면적 A[m²]), 긴 원관(지름 d, 길이 L [m]), 짧은 관(합성) */
  T.conductance = {
    orifice: (A, TK, M) => (A * T.speeds(M, TK).vmean) / 4,
    longTube: (d, L, TK, M) => (PI / 12) * T.speeds(M, TK).vmean * (d ** 3) / L,
    tube(d, L, TK, M) { const c1 = this.orifice((PI * d * d) / 4, TK, M), c2 = this.longTube(d, L, TK, M); return 1 / (1 / c1 + 1 / c2); },
    /** 점성류 원관(푸아죄유): η[Pa·s], Pbar 평균 압력 */
    viscousTube: (d, L, Pbar, eta) => (PI * d ** 4 * Pbar) / (128 * eta * L),
    series: (...cs) => 1 / cs.reduce((a, c) => a + 1 / c, 0),
    parallel: (...cs) => cs.reduce((a, c) => a + c, 0),
  };
  /** 유효 배기 속도 1/S_eff = 1/S + 1/C */
  T.Seff = (S, Cc) => (S * Cc) / (S + Cc);
  /** 배기 곡선 P(t) = (P0 − Pu) e^{−St/V} + Pu, Pu = Q/S (탈기체 Q[Pa·m³/s]) */
  T.pumpdown = (t, P0, S, V, Q = 0) => { const Pu = Q / S; return (P0 - Pu) * exp((-S * t) / V) + Pu; };
  /** 점성 계수 (강체 구 운동론) η = (5/16)√(π m k T)/(π d²) [Pa·s] */
  T.viscosityHS = (TK, M, d) => ((5 / 16) * sqrt(PI * mol2kg(M) * C.kB * TK)) / (PI * d * d);
  /** 그레이엄 분출 속도비 √(M2/M1) */
  T.grahamRatio = (M1, M2) => sqrt(M2 / M1);

  /* ------------------------------------------------------------ 증기압·상전이 */
  /** 클라우지우스–클라페이롱 적분형 P2 = P1 exp(−ΔH/R (1/T2 − 1/T1)) */
  T.clausius = (P1, T1, T2, dH) => P1 * exp((-dH / C.R) * (1 / T2 - 1 / T1));
  /** 액체 자료: 끓는점 Tb[K](1 atm), 증발 엔탈피 dHvap[J/mol] (끓는점 값), Tc, Pc */
  T.liquids = {
    H2O: { ko: "물", Tb: 373.124, dHvap: 40.65e3, Tc: 647.096, Pc: 22.064e6, Tm: 273.15, dHfus: 6.01e3 },
    ethanol: { ko: "에탄올", Tb: 351.44, dHvap: 38.56e3, Tc: 514.0, Pc: 6.137e6 },
    IPA: { ko: "아이소프로필 알코올", Tb: 355.4, dHvap: 39.85e3, Tc: 508.3, Pc: 4.76e6 },
    acetone: { ko: "아세톤", Tb: 329.2, dHvap: 29.1e3, Tc: 508.1, Pc: 4.70e6 },
    N2: { ko: "질소", Tb: 77.36, dHvap: 5.57e3, Tc: 126.19, Pc: 3.396e6 },
    Ar: { ko: "아르곤", Tb: 87.30, dHvap: 6.43e3, Tc: 150.69, Pc: 4.863e6 },
    O2: { ko: "산소", Tb: 90.19, dHvap: 6.82e3, Tc: 154.58, Pc: 5.043e6 },
    NH3: { ko: "암모니아", Tb: 239.82, dHvap: 23.33e3, Tc: 405.4, Pc: 11.33e6 },
    CO2: { ko: "이산화 탄소", Tc: 304.13, Pc: 7.3773e6, Ttp: 216.59, Ptp: 0.51795e6, Tsub: 194.69, dHsub: 25.2e3 },
  };
  /** 클라우지우스–클라페이롱으로 액체의 증기압 [Pa] (끓는점 기준) */
  T.vaporPressure = (name, TK) => { const L = T.liquids[name]; return T.clausius(C.atm, L.Tb, TK, L.dHvap); };
  /** 물의 앙투안 식 (1–100 °C): log10 P[mmHg] = 8.07131 − 1730.63/(233.426 + t[°C]) → Pa */
  T.waterAntoine = (tC) => 10 ** (8.07131 - 1730.63 / (233.426 + tC)) * T.unit.torr;
  /** 클라페이롱 기울기 dP/dT = ΔH/(T ΔV) */
  T.clapeyronSlope = (dH, TK, dV) => dH / (TK * dV);

  /* ------------------------------------------------------------ 용액·혼합 */
  /** 이상 혼합 몰 깁스 에너지 ΔG_mix/RT */
  const xlx = (x) => (x <= 0 || x >= 1 ? 0 : x * ln(x) + (1 - x) * ln(1 - x));
  T.mixIdeal = (x, TK) => C.R * TK * xlx(x);
  T.mixEntropy = (x) => -C.R * xlx(x);
  /** 정규 용액 ΔG_mix = RT[x ln x + (1−x)ln(1−x)] + Ω x(1−x) */
  T.mixRegular = (x, TK, W) => C.R * TK * xlx(x) + W * x * (1 - x);
  /** 정규 용액 임계 온도 Tc = Ω/2R */
  T.regularTc = (W) => W / (2 * C.R);
  /** 스피노달 조성 [x1, x2] (T < Tc), 아니면 null */
  T.spinodal = function (TK, W) {
    const d = 1 - (2 * C.R * TK) / W; if (d <= 0) return null;
    const s = sqrt(d) / 2; return [0.5 - s, 0.5 + s];
  };
  /** 쌍봉(공존) 조성 [x1, x2] — 대칭 정규 용액: ln(x/(1−x)) = Ω(2x−1)/RT */
  T.binodal = function (TK, W) {
    if (TK >= T.regularTc(W)) return null;
    const f = (x) => ln(x / (1 - x)) - (W * (2 * x - 1)) / (C.R * TK);
    const x1 = T.bisect(f, 1e-15, 0.5 - 1e-9, 1e-15);
    return [x1, 1 - x1];
  };
  /** 정규 용액 활동도 계수 ln γ_A = Ω x_B²/RT */
  T.gammaRegular = (xB, TK, W) => exp((W * xB * xB) / (C.R * TK));
  /** 두 곡선 f, g의 공통 접선 (뉴턴 2D, 수치 미분) → [xa, xb] 또는 null */
  T.commonTangent = function (f, g, xa, xb, it = 100) {
    // 잔차: 기울기 같음 f'(a) = g'(b), 절편 같음. 미분은 중심 차분(h ≈ 1e-5), 수렴은 잔차와 걸음 크기로 판정.
    const d = (F, x) => { const h = 1e-5 * Math.min(x, 1 - x, 0.01) + 1e-9; return (F(x + h) - F(x - h)) / (2 * h); };
    const res = (a, b) => { const fa = d(f, a), gb = d(g, b); return [fa - gb, f(a) - fa * a - (g(b) - gb * b)]; };
    const scale = Math.max(1e-30, Math.abs(f(xa)) + Math.abs(g(xb)) + Math.abs(d(f, xa)) + Math.abs(d(g, xb)));
    for (let i = 0; i < it; i++) {
      const r = res(xa, xb), h = 1e-6;
      if (Math.abs(r[0]) + Math.abs(r[1]) < 1e-11 * scale) return [xa, xb];
      const ra = res(xa + h, xb), rb = res(xa, xb + h);
      const J = [[(ra[0] - r[0]) / h, (rb[0] - r[0]) / h], [(ra[1] - r[1]) / h, (rb[1] - r[1]) / h]];
      const det = J[0][0] * J[1][1] - J[0][1] * J[1][0];
      if (!isFinite(det) || det === 0) return null;
      let da = (r[0] * J[1][1] - r[1] * J[0][1]) / det, db = (J[0][0] * r[1] - J[1][0] * r[0]) / det;
      // 걸음을 제한해 0..1 밖으로 튀지 않게
      const lim = 0.1, m = Math.max(Math.abs(da), Math.abs(db)); if (m > lim) { da *= lim / m; db *= lim / m; }
      xa = Math.min(1 - 1e-9, Math.max(1e-9, xa - da)); xb = Math.min(1 - 1e-9, Math.max(1e-9, xb - db));
      if (Math.abs(da) + Math.abs(db) < 1e-11) { const r2 = res(xa, xb); return Math.abs(r2[0]) + Math.abs(r2[1]) < 1e-6 * scale ? [xa, xb] : null; }
    }
    return null;
  };
  /** 총괄성 */
  T.colligative = {
    /** 끓는점 오름 ΔTb = Kb m i, 어는점 내림 ΔTf = Kf m i (물 Kb 0.512, Kf 1.86 K·kg/mol) */
    Kb: { H2O: 0.512 }, Kf: { H2O: 1.86 },
    osmotic: (c, TK, i = 1) => i * c * C.R * TK, // c[mol/m³] → Pa
    /** 이상 용액 어는점 내림 정확식: ln x_solvent = −ΔHfus/R (1/T − 1/Tm) → T */
    freezeT: (xSolvent, Tm, dHfus) => 1 / (1 / Tm - (C.R * ln(xSolvent)) / dHfus),
  };
  /** 헨리 상수 kH [mol/(L·atm)] 25 °C (Sander 2015 대표값) */
  T.henry = { O2: 1.3e-3, N2: 6.4e-4, CO2: 3.4e-2, H2: 7.8e-4, Ar: 1.4e-3, He: 3.7e-4, O3: 1.0e-2, NH3: 59 };
  /** 헨리 상수 온도 보정 kH(T) = kH(298) exp(B(1/T − 1/298.15)), B[K]: O2 1700, N2 1300, CO2 2400 */
  T.henryB = { O2: 1700, N2: 1300, CO2: 2400, H2: 500, Ar: 1500, He: 230 };

  /* ------------------------------------------------------------ 이성분 상태도 */
  /** 녹는점·융해 엔탈피 (Tm[K], dHm[J/mol]) */
  T.melting = {
    Si: { Tm: 1687, dHm: 50.21e3 }, Ge: { Tm: 1211.4, dHm: 36.94e3 }, Al: { Tm: 933.47, dHm: 10.71e3 },
    Au: { Tm: 1337.33, dHm: 12.55e3 }, Cu: { Tm: 1357.77, dHm: 13.26e3 }, Ni: { Tm: 1728, dHm: 17.48e3 },
    Ag: { Tm: 1234.93, dHm: 11.28e3 }, Sn: { Tm: 505.08, dHm: 7.03e3 }, Pb: { Tm: 600.61, dHm: 4.77e3 },
    Ga: { Tm: 302.91, dHm: 5.59e3 }, GaAs: { Tm: 1511, dHm: 105e3 },
  };
  /** 전율 고용체(두 상 모두 이상 용액): 온도 TK에서 {xL, xS} (B의 몰분율) 또는 null(한 상) */
  T.isomorphous = function (TK, A, B) {
    const kA = exp((A.dHm / C.R) * (1 / TK - 1 / A.Tm)), kB = exp((B.dHm / C.R) * (1 / TK - 1 / B.Tm));
    const xL = (1 - kA) / (kB - kA), xS = kB * xL;
    if (!(xL >= 0 && xL <= 1 && xS >= 0 && xS <= 1)) return null;
    return { xL, xS };
  };
  /** 단순 공정계(고상 서로 녹지 않음, 액상 정규 용액 ΩL): 액상선 온도 */
  T.liquidusA = function (x, A, WL = 0) {
    // ln(1−x) + ΩL x²/RT = −ΔHA/R (1/T − 1/TmA) 를 T에 대해
    if (x <= 0) return A.Tm;
    return T.bisect((TK) => ln(1 - x) + (WL * x * x) / (C.R * TK) + (A.dHm / C.R) * (1 / TK - 1 / A.Tm), 1, A.Tm + 1e-9);
  };
  T.liquidusB = function (x, B, WL = 0) {
    if (x >= 1) return B.Tm;
    return T.bisect((TK) => ln(x) + (WL * (1 - x) ** 2) / (C.R * TK) + (B.dHm / C.R) * (1 / TK - 1 / B.Tm), 1, B.Tm + 1e-9);
  };
  /** 공정점 {x, T} */
  T.eutectic = function (A, B, WL = 0) {
    const x = T.bisect((x) => T.liquidusA(x, A, WL) - T.liquidusB(x, B, WL), 1e-6, 1 - 1e-6);
    return { x, T: T.liquidusA(x, A, WL) };
  };
  /** 지렛대 규칙: 전체 조성 x0, 두 상 조성 xa < xb → {fa, fb} */
  T.lever = (x0, xa, xb) => { const fb = (x0 - xa) / (xb - xa); return { fa: 1 - fb, fb }; };
  /** 쇼이어 식: 고상 분율 fs에서 고체 농도 Cs = k C0 (1 − fs)^(k−1) */
  T.scheil = (fs, k, C0) => k * C0 * (1 - fs) ** (k - 1);
  /** 실리콘 속 평형 편석 계수 k0 (Sze) */
  T.segregationSi = { B: 0.8, P: 0.35, As: 0.3, Sb: 0.023, Al: 0.002, Ga: 0.008, In: 4e-4, C: 0.07, Cu: 4e-4, Fe: 8e-6, Au: 2.5e-5 };
  /** 버튼–프림–슬리히터 유효 편석 계수 k_eff = k0/(k0 + (1−k0) e^{−vδ/D}) */
  T.kEff = (k0, v, delta, D) => k0 / (k0 + (1 - k0) * exp((-v * delta) / D));
  /** 깁스 상규칙 F = C − P + 2 (압력 고정이면 + 1) */
  T.phaseRule = (Cn, P, fixedP = false) => Cn - P + (fixedP ? 1 : 2);

  /* ------------------------------------------------------------ 반응 속도 */
  /** 아레니우스 k = A exp(−Ea/RT), Ea[J/mol] */
  T.arrhenius = (A, Ea, TK) => A * exp(-Ea / (C.R * TK));
  /** eV 단위 활성화 에너지 */
  T.arrheniusEV = (A, EaEV, TK) => A * exp(-EaEV / (C.kB_eV * TK));
  /** 두 온도의 속도 상수로 Ea [J/mol] */
  T.EaFrom = (k1, T1, k2, T2) => (C.R * ln(k2 / k1)) / (1 / T1 - 1 / T2);
  /** 아이링 k = (kT/h) exp(ΔS‡/R) exp(−ΔH‡/RT) */
  T.eyring = (TK, dHa, dSa = 0) => ((C.kB * TK) / C.h) * exp(dSa / C.R) * exp(-dHa / (C.R * TK));
  /** 아레니우스 피팅: Ts[K], ks → {A, Ea[J/mol], r2} */
  T.arrheniusFit = function (Ts, ks) {
    const f = T.linfit(Ts.map((t) => 1 / t), ks.map((k) => ln(k)));
    return { A: exp(f.a), Ea: -f.b * C.R, r2: f.r2 };
  };
  /** n차 반응 [A](t) (단일 반응물, 속도 k[A]^n) */
  T.orderConc = function (n, A0, k, t) {
    if (n === 0) return Math.max(0, A0 - k * t);
    if (n === 1) return A0 * exp(-k * t);
    return (A0 ** (1 - n) + (n - 1) * k * t) ** (1 / (1 - n));
  };
  T.halfLife = (n, A0, k) => (n === 0 ? A0 / (2 * k) : n === 1 ? Math.LN2 / k : (2 ** (n - 1) - 1) / ((n - 1) * k * A0 ** (n - 1)));
  /** 충돌 이론: 두 기체 분자의 충돌 빈도 인자 σ v_rel [m³/s] (d 평균 지름, μ 환산 질량 g/mol) */
  T.collisionRate = (d, mu, TK) => PI * d * d * sqrt((8 * C.kB * TK) / (PI * mol2kg(mu)));

  /* ------------------------------------------------------------ 표면 */
  /** 랭뮤어 θ = KP/(1+KP); 해리 흡착 √(KP)/(1+√(KP)) */
  T.langmuir = (P, K, dissoc = false) => { const x = dissoc ? sqrt(K * P) : K * P; return x / (1 + x); };
  /** 경쟁 흡착: K[], P[] → θ[] */
  T.langmuirComp = (K, P) => { const s = 1 + K.reduce((a, k, i) => a + k * P[i], 0); return K.map((k, i) => (k * P[i]) / s); };
  /** BET: x = P/P0 → v/v_m */
  T.bet = (x, c) => (c * x) / ((1 - x) * (1 - x + c * x));
  /** 영 식: cos θ = (γSV − γSL)/γLV → θ[deg] (완전 젖음이면 0) */
  T.young = (gSV, gSL, gLV) => { const c = (gSV - gSL) / gLV; return c >= 1 ? 0 : c <= -1 ? 180 : (Math.acos(c) * 180) / PI; };
  /** 균일 핵생성(구): ΔG(r) = −(4/3)πr³ΔGv + 4πr²γ, ΔGv[J/m³] > 0 */
  T.nucleation = {
    dG: (r, dGv, g) => (-4 / 3) * PI * r ** 3 * dGv + 4 * PI * r * r * g,
    rStar: (dGv, g) => (2 * g) / dGv,
    dGStar: (dGv, g) => (16 * PI * g ** 3) / (3 * dGv * dGv),
    /** 불균일 핵생성 인자 f(θ) = (2 + cos θ)(1 − cos θ)²/4 */
    hetero: (thDeg) => { const c = Math.cos((thDeg * PI) / 180); return ((2 + c) * (1 - c) ** 2) / 4; },
    /** 과포화 S에서 ΔGv = kT ln S / Ω (Ω 원자 부피 m³) */
    dGvSuper: (S, TK, vol) => (C.kB * TK * ln(S)) / vol,
    /** 과냉각 ΔT에서 ΔGv ≈ ΔHv ΔT / Tm (ΔHv[J/m³]) */
    dGvUndercool: (dHv, dT, Tm) => (dHv * dT) / Tm,
  };
  /** ALD 반쪽 반응 피복률 θ(t) = 1 − exp(−s Φ t / ns) (랭뮤어형 자기 제한) */
  T.aldCoverage = (t, P, TK, M, s, ns = 1e19) => 1 - exp((-s * T.flux(P, TK, M) * t) / ns);
  /** 그로브 CVD 모형: 성장 속도 = (ks hg/(ks+hg)) Cg/N  (ks, hg [m/s], Cg [m⁻³], N 막 원자 밀도 [m⁻³]) */
  T.grove = (ks, hg, Cg, N) => ((ks * hg) / (ks + hg)) * (Cg / N);

  /* ------------------------------------------------------------ 전기화학 */
  /** 표준 환원 전위 E°[V vs SHE], n 전자 수 (CRC) */
  T.E0 = {
    "Li+/Li": { E: -3.04, n: 1 }, "K+/K": { E: -2.931, n: 1 }, "Na+/Na": { E: -2.71, n: 1 },
    "Mg2+/Mg": { E: -2.372, n: 2 }, "Al3+/Al": { E: -1.662, n: 3 }, "Ti2+/Ti": { E: -1.63, n: 2 },
    "Zn2+/Zn": { E: -0.7618, n: 2 }, "Cr3+/Cr": { E: -0.744, n: 3 }, "Fe2+/Fe": { E: -0.447, n: 2 },
    "Co2+/Co": { E: -0.28, n: 2 }, "Ni2+/Ni": { E: -0.257, n: 2 }, "Sn2+/Sn": { E: -0.1375, n: 2 },
    "Pb2+/Pb": { E: -0.1262, n: 2 }, "H+/H2": { E: 0, n: 2 }, "Cu2+/Cu": { E: 0.3419, n: 2 },
    "Cu+/Cu": { E: 0.521, n: 1 }, "Fe3+/Fe2+": { E: 0.771, n: 1 }, "Ag+/Ag": { E: 0.7996, n: 1 },
    "Pt2+/Pt": { E: 1.18, n: 2 }, "O2/H2O": { E: 1.229, n: 4 }, "Cl2/Cl-": { E: 1.35827, n: 2 },
    "Au3+/Au": { E: 1.498, n: 3 }, "H2O2/H2O": { E: 1.776, n: 2 }, "F2/F-": { E: 2.866, n: 2 },
  };
  /** 네른스트 E = E° − (RT/nF) ln Q */
  T.nernst = (E0, n, Q, TK = 298.15) => E0 - ((C.R * TK) / (n * C.F)) * ln(Q);
  /** 기전력과 ΔG = −nFE */
  T.dGcell = (n, E) => -n * C.F * E;
  /** 패러데이: 전하 q[C]로 석출되는 몰수, 질량[g], 막 두께[m](면적 A[m²], 밀도 ρ[g/cm³]) */
  T.faraday = {
    mol: (q, n, eff = 1) => (eff * q) / (n * C.F),
    mass: (q, n, M, eff = 1) => ((eff * q) / (n * C.F)) * M,
    thickness: (J, t, n, M, rho, eff = 1) => (eff * J * t * M) / (n * C.F * rho * 1e6), // J[A/m²], t[s] → m
  };
  /** 버틀러–볼머 전류 밀도 j = j0 [exp(αa F η/RT) − exp(−αc F η/RT)] */
  T.butlerVolmer = (eta, j0, aA = 0.5, aC = 0.5, TK = 298.15) => { const f = C.F / (C.R * TK); return j0 * (exp(aA * f * eta) - exp(-aC * f * eta)); };
  /** 타펠 기울기 [V/decade] = 2.303 RT/(αF) */
  T.tafelSlope = (alpha, TK = 298.15) => (Math.LN10 * C.R * TK) / (alpha * C.F);
  /** 물 안정 영역(푸르베): H₂ 발생선과 O₂ 발생선 E(pH) [V vs SHE], 25 °C, 기체 1 bar */
  T.waterLines = (pH, TK = 298.15) => { const s = (Math.LN10 * C.R * TK) / C.F; return { H2: -s * pH, O2: 1.229 - s * pH }; };

  /* ------------------------------------------------------------ 확산 */
  /** 실리콘 속 진성 확산 계수 D = D0 exp(−Ea/kT): D0[cm²/s], Ea[eV] (Plummer, Silicon VLSI Technology) */
  T.diffSi = {
    B: { D0: 0.76, Ea: 3.46 }, P: { D0: 3.85, Ea: 3.66 }, As: { D0: 0.066, Ea: 3.44 }, Sb: { D0: 0.214, Ea: 3.65 },
    Si: { D0: 560, Ea: 4.76 }, // 자기 확산
    Au: { D0: 1.1e-3, Ea: 1.12 }, Cu: { D0: 4.7e-3, Ea: 0.43 }, Fe: { D0: 1.3e-3, Ea: 0.68 }, // 틈새형 빠른 확산(대표값)
  };
  T.D = (name, TK) => { const d = T.diffSi[name]; return d.D0 * exp(-d.Ea / (C.kB_eV * TK)); };
  T.Dgen = (D0, EaEV, TK) => D0 * exp(-EaEV / (C.kB_eV * TK));
  /** 확산 길이 2√(Dt) */
  T.diffLength = (D, t) => 2 * sqrt(D * t);
  /** 일정 표면 농도: C(x,t) = Cs erfc(x/(2√(Dt))) */
  T.erfcProfile = (x, D, t, Cs) => Cs * T.erfc(x / (2 * sqrt(D * t)));
  /** 제한 공급원(선량 Q, 반무한·반사면): C = Q/√(πDt) exp(−x²/4Dt) */
  T.gaussProfile = (x, D, t, Q) => (Q / sqrt(PI * D * t)) * exp((-x * x) / (4 * D * t));
  /** 일정 표면 농도에서 들어간 총량 Q = 2Cs√(Dt/π) */
  T.erfcDose = (D, t, Cs) => 2 * Cs * sqrt((D * t) / PI);
  /** 접합 깊이: 배경 농도 CB와 만나는 x */
  T.junctionErfc = (D, t, Cs, CB) => 2 * sqrt(D * t) * T.erfcinv(CB / Cs);
  T.junctionGauss = (D, t, Q, CB) => { const C0 = Q / sqrt(PI * D * t); return C0 > CB ? 2 * sqrt(D * t * ln(C0 / CB)) : 0; };
  /** 여러 단계 열 예산 Σ D_i t_i (steps: [{T[K], t[s]}], name 도펀트) */
  T.thermalBudget = (name, steps) => steps.reduce((a, s) => a + T.D(name, s.T) * s.t, 0);
  /** 딜–그로브 계수 ((111) 기준, (100)은 B/A ÷ 1.68). B[µm²/h], B/A[µm/h], (Plummer) */
  T.dealGroveData = {
    dry: { C1: 7.72e2, E1: 1.23, C2: 6.23e6, E2: 2.0, xi: 0.025 },
    wet: { C1: 3.86e2, E1: 0.78, C2: 1.63e8, E2: 2.05, xi: 0 },
  };
  /** 딜–그로브: {B, BA, A, tau, x(t[h])} (orient '100'|'111', xi 처음 산화막[µm]) */
  T.dealGrove = function (TK, ambient = "dry", orient = "100", xi) {
    const d = T.dealGroveData[ambient], kT = C.kB_eV * TK;
    const B = d.C1 * exp(-d.E1 / kT), BA = (d.C2 * exp(-d.E2 / kT)) / (orient === "100" ? 1.68 : 1);
    const A = B / BA, x0 = xi == null ? d.xi : xi, tau = (x0 * x0 + A * x0) / B;
    return { B, BA, A, tau, x: (t) => (A / 2) * (sqrt(1 + (t + tau) / ((A * A) / (4 * B))) - 1), t: (x) => (x * x + A * x) / B - tau };
  };
  /** 아인슈타인 관계 D = μ kT/q (μ[cm²/(V·s)] → D[cm²/s]) */
  T.einsteinD = (mu, TK) => mu * C.kB_eV * TK;

  /* ------------------------------------------------------------ 1D 확산·열 방정식 (크랭크–니콜슨) */
  /**
   * opt = {n, L, D (수 또는 길이 n 배열/함수(i)), c0 (수·배열·함수(x)), left, right}
   * 경계: {type:'fixed', value} | {type:'flux', value}(바깥에서 들어오는 플럭스, 0이면 절연) .
   * → {c, x, t, step(dt), total()}
   */
  T.diffuse1d = function (opt) {
    const n = opt.n || 200, L = opt.L || 1, dx = L / (n - 1);
    const x = Float64Array.from({ length: n }, (_, i) => i * dx);
    const c = new Float64Array(n);
    for (let i = 0; i < n; i++) c[i] = typeof opt.c0 === "function" ? opt.c0(x[i]) : Array.isArray(opt.c0) || ArrayBuffer.isView(opt.c0) ? opt.c0[i] : opt.c0 || 0;
    const Dat = (i) => (typeof opt.D === "function" ? opt.D(i, x[i]) : Array.isArray(opt.D) || ArrayBuffer.isView(opt.D) ? opt.D[i] : opt.D);
    const S = { c, x, dx, t: 0, left: opt.left || { type: "flux", value: 0 }, right: opt.right || { type: "flux", value: 0 } };
    const a = new Float64Array(n), b = new Float64Array(n), cc = new Float64Array(n), d = new Float64Array(n);
    S.step = function (dt) {
      // 면 사이 D는 조화 평균(층 구조에서 플럭스 연속)
      const Dh = new Float64Array(n - 1);
      for (let i = 0; i < n - 1; i++) { const d1 = Dat(i), d2 = Dat(i + 1); Dh[i] = d1 + d2 > 0 ? (2 * d1 * d2) / (d1 + d2) : 0; }
      const r = dt / (2 * dx * dx);
      for (let i = 0; i < n; i++) {
        const wl = i > 0 ? Dh[i - 1] : 0, wr = i < n - 1 ? Dh[i] : 0;
        a[i] = -r * wl; cc[i] = -r * wr; b[i] = 1 + r * (wl + wr);
        d[i] = c[i] + r * (wl * ((i > 0 ? c[i - 1] : 0) - c[i]) + wr * ((i < n - 1 ? c[i + 1] : 0) - c[i]));
      }
      // 끝 칸은 반 칸 부피 → 플럭스 경계 항 2배
      for (const side of ["left", "right"]) {
        const B = S[side], i = side === "left" ? 0 : n - 1;
        if (B.type === "fixed") { a[i] = 0; cc[i] = 0; b[i] = 1; d[i] = B.value; }
        else {
          const w = side === "left" ? Dh[0] : Dh[n - 2];
          if (side === "left") { b[0] = 1 + 2 * r * w; cc[0] = -2 * r * w; d[0] = c[0] + 2 * r * w * (c[1] - c[0]) + (2 * dt * (B.value || 0)) / dx; }
          else { b[i] = 1 + 2 * r * w; a[i] = -2 * r * w; d[i] = c[i] + 2 * r * w * (c[i - 1] - c[i]) + (2 * dt * (B.value || 0)) / dx; }
        }
      }
      const res = T.tridiag(a, b, cc, d);
      c.set(res); S.t += dt;
      return S;
    };
    S.total = () => { let s = 0; for (let i = 0; i < n; i++) s += c[i] * (i === 0 || i === n - 1 ? 0.5 : 1); return s * dx; };
    return S;
  };

  /* ------------------------------------------------------------ 열전달 */
  /** 열전도도 [W/(m·K)], 300 K 부근 대표값 (박막은 더 작을 수 있다) */
  T.kTherm = {
    Si: 148, Ge: 60, GaAs: 46, GaN: 130, SiC: 370, diamond: 2200, AlN: 285, sapphire: 35,
    SiO2: 1.4, Si3N4: 20, lowk: 0.3, Cu: 401, Al: 237, W: 173, Au: 317, Ag: 429, Ti: 21.9, TiN: 29,
    solder: 58, TIM: 4, epoxy: 0.3, polyimide: 0.12, air: 0.0262, water: 0.607, He: 0.155, N2: 0.026,
  };
  /** 열저항 [K/W]: 평판 전도 L/(kA), 대류 1/(hA), 복사 선형화 1/(4εσT³A) */
  T.Rth = {
    slab: (L, k, A) => L / (k * A),
    conv: (h, A) => 1 / (h * A),
    rad: (eps, TK, A) => 1 / (4 * eps * C.sigma * TK ** 3 * A),
    /** 원형 열원(반지름 a)에서 반무한 매질로 퍼짐 저항 1/(4ka) */
    spreadDisk: (k, a) => 1 / (4 * k * a),
    series: (...r) => r.reduce((s, x) => s + x, 0),
    parallel: (...r) => 1 / r.reduce((s, x) => s + 1 / x, 0),
  };
  /** 열 확산율 α = k/(ρ c) [m²/s] (ρ kg/m³, c J/(kg·K)) */
  T.diffusivity = (k, rho, c) => k / (rho * c);
  /** 집중 용량 냉각 T(t) = T∞ + (T0 − T∞) e^{−t/τ}, τ = RC */
  T.lumped = (t, T0, Tinf, tau) => Tinf + (T0 - Tinf) * exp(-t / tau);
  /** 존슨–나이퀴스트 잡음 전압 v_rms = √(4kTRB) */
  T.johnson = (R, TK, B) => sqrt(4 * C.kB * TK * R * B);
  /** 열전: 무차원 성능 지수 ZT = S²σT/κ, 최대 효율과 최대 COP */
  T.thermoelectric = {
    ZT: (S, sigma, kappa, TK) => (S * S * sigma * TK) / kappa,
    etaMax: (Th, Tc, ZT) => { const m = sqrt(1 + ZT); return ((Th - Tc) / Th) * (m - 1) / (m + Tc / Th); },
    copMax: (Th, Tc, ZT) => { const m = sqrt(1 + ZT); return (Tc / (Th - Tc)) * (m - Th / Tc) / (m + 1); },
  };
  /** 온도 → 색 (0..1, 파랑–하양–빨강, 열지도용 고정색) */
  T.heatColor = function (t) {
    t = Math.max(0, Math.min(1, t));
    const stops = [[0, [49, 54, 149]], [0.25, [69, 117, 180]], [0.45, [171, 217, 233]], [0.55, [254, 224, 144]], [0.75, [244, 109, 67]], [1, [165, 0, 38]]];
    for (let i = 1; i < stops.length; i++) if (t <= stops[i][0]) {
      const [t0, c0] = stops[i - 1], [t1, c1] = stops[i], u = (t - t0) / (t1 - t0);
      return `rgb(${c0.map((v, j) => Math.round(v + (c1[j] - v) * u)).join(",")})`;
    }
    return "rgb(165,0,38)";
  };

  /* ------------------------------------------------------------ 2D 강체 원판 기체 */
  /**
   * opt = {n, W, H, r, m, T(kT), seed, species:[{n, m, r, tag}], partition:{x, gap:[y0,y1] | null}}
   * 벽: walls.{left,right,top,bottom} = null(탄성 반사) | {T}(열벽: 반사 때 속도를 그 온도로 다시 뽑음)
   * piston: {x, v, M, F} 를 주면 오른쪽 벽이 움직이는 피스톤(질량 M, 바깥 힘 F).
   *   시간 간격: 한 step에 빠른 분자가 반지름의 절반 이상 움직이면 충돌을 놓친다(고에너지 충돌 통계가 줄어든다).
   *   충돌 통계를 재는 시뮬레이터는 v·dt < r/2 가 되도록 step을 잘게 나눈다.
   *   피스톤이 정해진 속도로 움직여야 하면(준정적 압축 등) M을 아주 크게(예: 1e9) 두고 매 step 전에 piston.v를 다시 정한다.
   * → G {p[], step(dt), kT(filter), speeds(filter), impulse(벽에 준 운동량 누적), pressure(), reset}
   */
  T.gas2d = function (opt) {
    const R = T.rng(opt.seed || 7), G = { W: opt.W, H: opt.H, p: [], walls: opt.walls || {}, partition: opt.partition || null, piston: opt.piston || null, t: 0, collisions: 0 };
    G.impulse = { left: 0, right: 0, top: 0, bottom: 0, total: 0 }; G.impT = 0;
    const specs = opt.species || [{ n: opt.n || 100, m: opt.m || 1, r: opt.r || 4, tag: 0 }];
    function place(s, xr) {
      const [x0, x1] = xr || [0, G.piston ? G.piston.x : G.W];
      for (let tries = 0; tries < 400; tries++) {
        const x = x0 + s.r + R() * (x1 - x0 - 2 * s.r), y = s.r + R() * (G.H - 2 * s.r);
        if (G.partition && Math.abs(x - G.partition.x) < s.r + 1) continue;
        if (G.p.every((q) => (q.x - x) ** 2 + (q.y - y) ** 2 > (q.r + s.r + 0.5) ** 2)) return [x, y];
      }
      return [x0 + s.r + R() * (x1 - x0 - 2 * s.r), s.r + R() * (G.H - 2 * s.r)];
    }
    G.add = function (s, kT, xr) {
      const k = kT == null ? opt.T || 1 : kT, sd = sqrt(k / s.m), grp = [];
      for (let i = 0; i < s.n; i++) {
        const [x, y] = place(s, xr || s.region);
        const q = { x, y, vx: sd * R.normal(), vy: sd * R.normal(), m: s.m, r: s.r, tag: s.tag == null ? 0 : s.tag };
        if (G.partition) q.side = x < G.partition.x ? 0 : 1;
        G.p.push(q); grp.push(q);
      }
      // 처음 온도를 정확히 kT로(표본 요동 제거): 평균 운동량 0, ⟨½mv²⟩ = kT
      if (grp.length > 1) {
        let px = 0, py = 0, M = 0; for (const q of grp) { px += q.m * q.vx; py += q.m * q.vy; M += q.m; }
        for (const q of grp) { q.vx -= px / M; q.vy -= py / M; }
        let e = 0; for (const q of grp) e += 0.5 * q.m * (q.vx * q.vx + q.vy * q.vy);
        const f = e > 0 ? sqrt((k * grp.length) / e) : 1; for (const q of grp) { q.vx *= f; q.vy *= f; }
      }
    };
    for (const s of specs) G.add(s, s.T, s.region);
    const sideOf = (q) => (G.partition ? (q.x < G.partition.x ? 0 : 1) : 0);
    // 칸막이: 각 분자가 어느 칸에 있었는지(q.side) 기억하고, 구멍이 아닌 곳으로 넘어가거나
    // 칸막이에 걸치면 되돌려 반사한다(충돌로 밀려 넘어가는 경우도 막는다).
    function wallPartition() {
      if (!G.partition) return;
      const X = G.partition.x, gap = G.partition.gap;
      for (const q of G.p) {
        if (q.side == null) q.side = q.x < X ? 0 : 1;
        const inGap = gap && q.y > gap[0] + q.r && q.y < gap[1] - q.r;
        if (inGap) { q.side = q.x < X ? 0 : 1; continue; }
        if (q.side === 0 && q.x + q.r > X) { q.x = Math.min(q.x, 2 * (X - q.r) - q.x, X - q.r); if (q.vx > 0) q.vx = -q.vx; }
        else if (q.side === 1 && q.x - q.r < X) { q.x = Math.max(q.x, 2 * (X + q.r) - q.x, X + q.r); if (q.vx < 0) q.vx = -q.vx; }
      }
    }
    G.step = function (dt) {
      const P = G.p, n = P.length, Wr = G.piston ? G.piston.x : G.W;
      // 이동
      for (const q of P) { q.x += q.vx * dt; q.y += q.vy * dt; }
      wallPartition();
      // 벽
      const thermal = (q, wall, nx, ny) => {
        const w = G.walls[wall];
        if (w && w.T != null) {
          // 열벽: 법선 성분은 플럭스 가중(레일리), 접선 성분은 정규
          const sd = sqrt(w.T / q.m), vn = sd * sqrt(-2 * ln(1 - R() + 1e-300)), vt = sd * R.normal();
          if (nx) { q.vx = nx * vn; q.vy = vt; } else { q.vy = ny * vn; q.vx = vt; }
        } else { if (nx) q.vx = -q.vx; else q.vy = -q.vy; }
      };
      let pistonImp = 0;
      for (const q of P) {
        if (q.x < q.r) { const v0 = q.vx; q.x = 2 * q.r - q.x; thermal(q, "left", 1, 0); G.impulse.left += q.m * (q.vx - v0); }
        if (G.piston) {
          const pv = G.piston.v;
          if (q.x > Wr - q.r && q.vx > pv) {
            // 움직이는 무거운 벽과 1D 탄성 충돌
            const M = G.piston.M, v0 = q.vx, u = ((q.m - M) * v0 + 2 * M * pv) / (q.m + M), U = ((M - q.m) * pv + 2 * q.m * v0) / (q.m + M);
            q.vx = u; G.piston.v = U; q.x = Wr - q.r - (q.x - (Wr - q.r)); pistonImp += q.m * (v0 - u);
            G.impulse.right += q.m * (v0 - u);
          }
        } else if (q.x > G.W - q.r) { const v0 = q.vx; q.x = 2 * (G.W - q.r) - q.x; thermal(q, "right", -1, 0); G.impulse.right += q.m * (v0 - q.vx); }
        if (q.y < q.r) { const v0 = q.vy; q.y = 2 * q.r - q.y; thermal(q, "top", 0, 1); G.impulse.top += q.m * (q.vy - v0); }
        if (q.y > G.H - q.r) { const v0 = q.vy; q.y = 2 * (G.H - q.r) - q.y; thermal(q, "bottom", 0, -1); G.impulse.bottom += q.m * (v0 - q.vy); }
        q.x = Math.min(Math.max(q.x, q.r), (G.piston ? G.piston.x : G.W) - q.r); q.y = Math.min(Math.max(q.y, q.r), G.H - q.r);
      }
      if (G.piston) {
        const pz = G.piston;
        pz.v += ((pz.F || 0) / pz.M) * dt * -1; // F > 0 이면 왼쪽(압축)으로 미는 바깥 힘
        pz.x += pz.v * dt;
        const xmin = pz.xmin || 40, xmax = pz.xmax || G.W;
        if (pz.x < xmin) { pz.x = xmin; pz.v = Math.abs(pz.v) * 0.5; }
        if (pz.x > xmax) { pz.x = xmax; pz.v = -Math.abs(pz.v) * 0.5; }
        if (pz.fixed) pz.v = 0;
      }
      // 입자 충돌(격자)
      const cs = 2 * Math.max(...P.map((q) => q.r), 1) + 1, nxC = Math.ceil(G.W / cs) + 1, nyC = Math.ceil(G.H / cs) + 1, grid = new Map();
      for (let i = 0; i < n; i++) { const q = P[i], k = Math.floor(q.x / cs) + nxC * Math.floor(q.y / cs); (grid.get(k) || grid.set(k, []).get(k)).push(i); }
      for (let i = 0; i < n; i++) {
        const a = P[i], cx = Math.floor(a.x / cs), cy = Math.floor(a.y / cs);
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          const cell = grid.get(cx + ox + nxC * (cy + oy)); if (!cell) continue;
          for (const j of cell) {
            if (j <= i) continue;
            const b = P[j], dx = b.x - a.x, dy = b.y - a.y, rr = a.r + b.r, d2 = dx * dx + dy * dy;
            if (d2 >= rr * rr || d2 === 0) continue;
            if (G.partition && a.side !== b.side) continue;
            const d = sqrt(d2), nx = dx / d, ny = dy / d, vrel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
            const ov = (rr - d) / 2; a.x -= nx * ov; a.y -= ny * ov; b.x += nx * ov; b.y += ny * ov;
            if (vrel >= 0) continue;
            const J = (2 * vrel) / (1 / a.m + 1 / b.m);
            a.vx += (J * nx) / a.m; a.vy += (J * ny) / a.m; b.vx -= (J * nx) / b.m; b.vy -= (J * ny) / b.m;
            G.collisions++;
            if (G.onCollide) G.onCollide(a, b);
          }
        }
      }
      wallPartition();
      G.t += dt; G.impT += dt;
      return G;
    };
    G.kT = (filter) => { let s = 0, c = 0; for (const q of G.p) if (!filter || filter(q)) { s += 0.5 * q.m * (q.vx * q.vx + q.vy * q.vy); c++; } return c ? s / c : 0; };
    G.speeds = (filter) => G.p.filter((q) => !filter || filter(q)).map((q) => sqrt(q.vx * q.vx + q.vy * q.vy));
    /** 누적 벽 운동량으로 압력(2D: 힘/길이) — 측정 후 resetImpulse */
    G.pressure = () => { const Wr = G.piston ? G.piston.x : G.W, per = 2 * (Wr + G.H); return G.impT > 0 ? (G.impulse.left + G.impulse.right + G.impulse.top + G.impulse.bottom) / (per * G.impT) : 0; };
    G.resetImpulse = () => { G.impulse = { left: 0, right: 0, top: 0, bottom: 0, total: 0 }; G.impT = 0; };
    /** 모든 속도를 비례 조정해 온도를 kT로 */
    G.setT = (kT, filter) => { const cur = G.kT(filter); if (cur <= 0) return; const f = sqrt(kT / cur); for (const q of G.p) if (!filter || filter(q)) { q.vx *= f; q.vy *= f; } };
    return G;
  };

  /* ------------------------------------------------------------ 2D 이징 모형 */
  /** 정사각 L×L, J = 1, k = 1, 주기 경계. opt {T, h, seed, init:'random'|'up'} */
  T.ising = function (L, opt = {}) {
    const R = T.rng(opt.seed || 11), N = L * L, s = new Int8Array(N);
    for (let i = 0; i < N; i++) s[i] = opt.init === "up" ? 1 : R() < 0.5 ? 1 : -1;
    const I = { L, N, s, T: opt.T == null ? 2.27 : opt.T, h: opt.h || 0, flips: 0 };
    const nb = (i) => { const x = i % L, y = (i / L) | 0; return s[((x + 1) % L) + y * L] + s[((x - 1 + L) % L) + y * L] + s[x + ((y + 1) % L) * L] + s[x + ((y - 1 + L) % L) * L]; };
    /** 메트로폴리스 n 스윕 */
    I.sweep = function (n = 1) {
      const Tt = Math.max(I.T, 1e-6);
      for (let k = 0; k < n * N; k++) {
        const i = (R() * N) | 0, dE = 2 * s[i] * (nb(i) + I.h);
        if (dE <= 0 || R() < exp(-dE / Tt)) { s[i] = -s[i]; I.flips++; }
      }
      return I;
    };
    I.M = () => { let m = 0; for (let i = 0; i < N; i++) m += s[i]; return m / N; };
    I.E = () => { let e = 0; for (let i = 0; i < N; i++) { const x = i % L, y = (i / L) | 0; e -= s[i] * (s[((x + 1) % L) + y * L] + s[x + ((y + 1) % L) * L]) + I.h * s[i]; } return e / N; };
    I.randomize = () => { for (let i = 0; i < N; i++) s[i] = R() < 0.5 ? 1 : -1; };
    I.fill = (v) => s.fill(v);
    return I;
  };
  /** 정사각 격자 정확한 임계 온도(온사거) Tc = 2/ln(1+√2) ≈ 2.269 */
  T.isingTc = 2 / ln(1 + Math.SQRT2);
  /** 온사거 자발 자화 M(T) = (1 − sinh⁻⁴(2/T))^{1/8} */
  T.onsagerM = (Tt) => (Tt >= T.isingTc ? 0 : (1 - Math.sinh(2 / Tt) ** -4) ** 0.125);
  /** 평균장: m = tanh((z m + h)/T), z = 이웃 수 → 가장 안정한(같은 부호) 해 */
  T.meanFieldM = function (Tt, h = 0, z = 4) {
    const f = (m) => m - Math.tanh((z * m + h) / Tt);
    if (h === 0 && Tt >= z) return 0;
    const sgn = h >= 0 ? 1 : -1;
    return T.bisect(f, sgn > 0 ? 1e-12 : -1, sgn > 0 ? 1 : -1e-12, 1e-14);
  };
})();
