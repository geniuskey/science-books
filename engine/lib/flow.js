/* ==========================================================================
   SciBook lib/flow.js — 유체역학 공용 라이브러리 (전역 Flow)
   물성, 퍼텐셜 유동 중첩·유선 추적·등고선, 관 마찰 계수, 경계층, 항력,
   개수로, 압축성 유동. 의존: engine/js/scibook.js (Phys는 선택)
   단위는 모두 SI. 공학 관례에 따라 g = 9.81 m/s².
   ========================================================================== */
(function () {
  "use strict";
  const Flow = (window.Flow = {});
  Flow.g = 9.81;
  Flow.Rair = 287.0;     // 공기 기체 상수 J/(kg·K)
  Flow.kair = 1.4;       // 공기 비열비

  /* ---------------------------------------------------------------- 보간 */
  const interp = (xs, ys, x) => {
    if (x <= xs[0]) return ys[0];
    if (x >= xs[xs.length - 1]) return ys[ys.length - 1];
    let i = 1; while (xs[i] < x) i++;
    const t = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
    return ys[i - 1] + t * (ys[i] - ys[i - 1]);
  };
  Flow.interp = interp;

  /* ---------------------------------------------------------------- 물성 */
  // 1 atm 물: 온도(°C), 밀도(kg/m³), 점성 계수(Pa·s), 증기압(kPa), 표면 장력(N/m, 공기와 접할 때)
  const WT = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const WRHO = [999.8, 999.7, 998.2, 995.7, 992.2, 988.0, 983.2, 977.8, 971.8, 965.3, 958.4];
  const WMU = [1.792e-3, 1.307e-3, 1.002e-3, 0.798e-3, 0.653e-3, 0.547e-3, 0.467e-3, 0.404e-3, 0.355e-3, 0.315e-3, 0.282e-3];
  const WPV = [0.6113, 1.2276, 2.339, 4.246, 7.384, 12.35, 19.94, 31.19, 47.39, 70.14, 101.33];
  const WSIG = [0.0757, 0.0742, 0.0728, 0.0712, 0.0696, 0.0679, 0.0662, 0.0644, 0.0626, 0.0608, 0.0589];
  Flow.waterTable = { T: WT, rho: WRHO, mu: WMU, pv: WPV, sigma: WSIG };
  /** 물의 물성: Flow.water(T°C) → {rho, mu, nu, pv(Pa), sigma}. 점성은 로그 보간 */
  Flow.water = function (T = 20) {
    const rho = interp(WT, WRHO, T), mu = Math.exp(interp(WT, WMU.map(Math.log), T));
    return { rho, mu, nu: mu / rho, pv: Math.exp(interp(WT, WPV.map(Math.log), T)) * 1e3, sigma: interp(WT, WSIG, T) };
  };
  /** 공기(이상 기체 + 서덜랜드 점성): Flow.air(T°C, p[Pa]) → {rho, mu, nu, c} */
  Flow.air = function (T = 20, p = 101325) {
    const TK = T + 273.15, rho = p / (Flow.Rair * TK);
    const mu = 1.716e-5 * Math.pow(TK / 273.15, 1.5) * (273.15 + 110.4) / (TK + 110.4);
    return { rho, mu, nu: mu / rho, c: Math.sqrt(Flow.kair * Flow.Rair * TK) };
  };
  /** 표준 대기(ISA, 0–20 km): Flow.atmosphere(z[m]) → {T(K), p(Pa), rho} */
  Flow.atmosphere = function (z) {
    const R = 287.05, g = 9.80665;
    if (z <= 11000) { const T = 288.15 - 0.0065 * z, p = 101325 * Math.pow(T / 288.15, g / (R * 0.0065)); return { T, p, rho: p / (R * T) }; }
    const T = 216.65, p = 22632.1 * Math.exp((-g * (z - 11000)) / (R * T));
    return { T, p, rho: p / (R * T) };
  };
  /** 자주 쓰는 액체(20 °C 부근): 밀도 kg/m³, 점성 Pa·s, 표면 장력 N/m */
  Flow.liquids = {
    water: { ko: "물", rho: 998, mu: 1.002e-3, sigma: 0.0728 },
    seawater: { ko: "바닷물", rho: 1025, mu: 1.07e-3, sigma: 0.0735 },
    mercury: { ko: "수은", rho: 13550, mu: 1.53e-3, sigma: 0.484 },
    glycerin: { ko: "글리세린", rho: 1260, mu: 1.41, sigma: 0.0634 },
    oil: { ko: "엔진 오일(SAE 30)", rho: 891, mu: 0.29, sigma: 0.035 },
    gasoline: { ko: "휘발유", rho: 680, mu: 2.9e-4, sigma: 0.0216 },
    ethanol: { ko: "에탄올", rho: 789, mu: 1.2e-3, sigma: 0.0223 },
  };

  /* ---------------------------------------------------------------- 관 마찰 */
  /** 관 표면 거칠기 ε (m) */
  Flow.roughness = {
    glass: { ko: "유리·플라스틱(매끈)", e: 0 },
    drawn: { ko: "인발관(구리·황동)", e: 1.5e-6 },
    steel: { ko: "상용 강관", e: 4.5e-5 },
    galv: { ko: "아연 도금 철관", e: 1.5e-4 },
    castIron: { ko: "주철관", e: 2.6e-4 },
    concrete: { ko: "콘크리트관", e: 1.0e-3 },
    riveted: { ko: "리벳 강관", e: 3.0e-3 },
  };
  /** 콜브룩 식(반복 해): f(Re, ε/D), Re > 2300 가정 */
  Flow.colebrook = function (Re, eD) {
    let x = -1.8 * Math.log10(6.9 / Re + Math.pow(eD / 3.7, 1.11)); // 해일란드 초기값 (x = 1/√f)
    for (let i = 0; i < 30; i++) x = -2 * Math.log10(eD / 3.7 + (2.51 * x) / Re);
    return 1 / (x * x);
  };
  Flow.haaland = (Re, eD) => { const x = -1.8 * Math.log10(6.9 / Re + Math.pow(eD / 3.7, 1.11)); return 1 / (x * x); };
  Flow.swameeJain = (Re, eD) => 0.25 / Math.pow(Math.log10(eD / 3.7 + 5.74 / Math.pow(Re, 0.9)), 2);
  /** 마찰 계수: 층류(Re < 2300)는 64/Re, 그 이상은 콜브룩 */
  Flow.friction = (Re, eD = 0) => (Re < 2300 ? 64 / Re : Flow.colebrook(Re, eD));
  /** 다르시–바이스바흐 수두 손실 hL = f (L/D) V²/2g */
  Flow.headLoss = (f, L, D, V) => (f * (L / D) * V * V) / (2 * Flow.g);
  /** 부차 손실 계수 K (대표값) */
  Flow.minorK = {
    entranceSharp: { ko: "날카로운 입구", K: 0.5 },
    entranceRounded: { ko: "둥근 입구", K: 0.03 },
    exit: { ko: "출구(탱크로)", K: 1.0 },
    elbow90: { ko: "90° 엘보(플랜지)", K: 0.3 },
    elbow90t: { ko: "90° 엘보(나사)", K: 0.9 },
    tee: { ko: "티(분기)", K: 1.0 },
    gateOpen: { ko: "게이트 밸브(완전 열림)", K: 0.15 },
    globeOpen: { ko: "글로브 밸브(완전 열림)", K: 10 },
    ballHalf: { ko: "볼 밸브(1/2 열림)", K: 5.5 },
  };

  /* ---------------------------------------------------------------- 퍼텐셜 유동 */
  /**
   * 요소 배열 els 의 중첩:
   *   {type:'uniform', U, alpha}           균일류(α 라디안)
   *   {type:'source', x, y, q}             원천(q>0)/흡입(q<0), q = 단위 깊이당 유량 (m²/s)
   *   {type:'vortex', x, y, G}             자유 와류, G>0 반시계
   *   {type:'doublet', x, y, K}            쌍극자 ψ = −K y'/r² (U + 쌍극자 → 반지름 √(K/U) 원주)
   * Flow.vel(els, x, y) → [u, v], Flow.psi(els, x, y), Flow.phi(els, x, y)
   */
  const TAU = 2 * Math.PI, SOFT = 1e-9;
  Flow.vel = function (els, x, y) {
    let u = 0, v = 0;
    for (const e of els) {
      if (e.type === "uniform") { const a = e.alpha || 0; u += e.U * Math.cos(a); v += e.U * Math.sin(a); continue; }
      const dx = x - (e.x || 0), dy = y - (e.y || 0), r2 = dx * dx + dy * dy + SOFT;
      if (e.type === "source") { u += (e.q / TAU) * dx / r2; v += (e.q / TAU) * dy / r2; }
      else if (e.type === "vortex") { u += (-e.G / TAU) * dy / r2; v += (e.G / TAU) * dx / r2; }
      else if (e.type === "doublet") { const r4 = r2 * r2; u += (-e.K * (dx * dx - dy * dy)) / r4; v += (-2 * e.K * dx * dy) / r4; }
    }
    return [u, v];
  };
  Flow.psi = function (els, x, y) {
    let s = 0;
    for (const e of els) {
      if (e.type === "uniform") { const a = e.alpha || 0; s += e.U * (y * Math.cos(a) - x * Math.sin(a)); continue; }
      const dx = x - (e.x || 0), dy = y - (e.y || 0), r2 = dx * dx + dy * dy + SOFT;
      if (e.type === "source") s += (e.q / TAU) * Math.atan2(dy, dx);
      else if (e.type === "vortex") s += (-e.G / TAU) * 0.5 * Math.log(r2);
      else if (e.type === "doublet") s += (-e.K * dy) / r2;
    }
    return s;
  };
  Flow.phi = function (els, x, y) {
    let s = 0;
    for (const e of els) {
      if (e.type === "uniform") { const a = e.alpha || 0; s += e.U * (x * Math.cos(a) + y * Math.sin(a)); continue; }
      const dx = x - (e.x || 0), dy = y - (e.y || 0), r2 = dx * dx + dy * dy + SOFT;
      if (e.type === "source") s += (e.q / TAU) * 0.5 * Math.log(r2);
      else if (e.type === "vortex") s += (e.G / TAU) * Math.atan2(dy, dx);
      else if (e.type === "doublet") s += (e.K * dx) / r2;
    }
    return s;
  };
  /** 압력 계수 Cp = 1 − (|V|/U∞)² */
  Flow.cp = (els, x, y, Uinf) => { const [u, v] = Flow.vel(els, x, y); return 1 - (u * u + v * v) / (Uinf * Uinf); };
  /** 정체점 찾기: 격자에서 |V| 최소점 근처를 뉴턴 반복 없이 국소 탐색 → [[x,y], …] */
  Flow.stagnation = function (els, bounds, n = 60, tol = 1e-3) {
    const [x0, x1, y0, y1] = bounds, out = [], sp = (x, y) => { const [u, v] = Flow.vel(els, x, y); return Math.hypot(u, v); };
    const hx = (x1 - x0) / n, hy = (y1 - y0) / n;
    for (let i = 1; i < n; i++) for (let j = 1; j < n; j++) {
      const x = x0 + i * hx, y = y0 + j * hy, s = sp(x, y);
      if (s > sp(x - hx, y) || s > sp(x + hx, y) || s > sp(x, y - hy) || s > sp(x, y + hy)) continue;
      let p = [x, y], h = Math.max(hx, hy);
      for (let k = 0; k < 40; k++) { let best = p, bs = sp(p[0], p[1]); for (const [a, b] of [[h, 0], [-h, 0], [0, h], [0, -h]]) { const q = [p[0] + a, p[1] + b], qs = sp(q[0], q[1]); if (qs < bs) { best = q; bs = qs; } } if (best === p) h /= 2; p = best; }
      const ref = Math.max(...els.filter((e) => e.type === "uniform").map((e) => Math.abs(e.U)), 1);
      if (sp(p[0], p[1]) < tol * ref && !out.some((q) => Math.hypot(q[0] - p[0], q[1] - p[1]) < 2 * Math.max(hx, hy))) out.push(p);
    }
    return out;
  };

  /* ---------------------------------------------------------------- 유선·입자 */
  /**
   * 유선 추적(RK2, 일정한 호 길이 step): vel(x,y)→[u,v]
   *   Flow.trace(vel, [x,y], {step, maxSteps, bounds:[x0,x1,y0,y1], both, stop(x,y)}) → [[x,y], …]
   */
  Flow.trace = function (vel, p0, o = {}) {
    const step = o.step || 0.02, maxN = o.maxSteps || 1500, b = o.bounds || [-1e9, 1e9, -1e9, 1e9];
    const run = (dir) => {
      const pts = [p0.slice()];
      let p = p0.slice();
      for (let s = 0; s < maxN; s++) {
        const v1 = vel(p[0], p[1]), l1 = Math.hypot(v1[0], v1[1]);
        if (l1 < 1e-12) break;
        const m = [p[0] + (dir * 0.5 * step * v1[0]) / l1, p[1] + (dir * 0.5 * step * v1[1]) / l1];
        const v2 = vel(m[0], m[1]), l2 = Math.hypot(v2[0], v2[1]);
        if (l2 < 1e-12) break;
        p = [p[0] + (dir * step * v2[0]) / l2, p[1] + (dir * step * v2[1]) / l2];
        pts.push(p);
        if (p[0] < b[0] || p[0] > b[1] || p[1] < b[2] || p[1] > b[3]) break;
        if (o.stop && o.stop(p[0], p[1])) break;
      }
      return pts;
    };
    if (!o.both) return run(1);
    const back = run(-1).reverse(); back.pop();
    return back.concat(run(1));
  };
  /**
   * 등고선(마칭 스퀘어): f(x,y) 의 levels 등치선 선분.
   *   Flow.contour(f, [x0,x1,y0,y1], nx, ny, levels, {mask(x,y)}) → [{level, segs:[[x1,y1,x2,y2], …]}]
   */
  Flow.contour = function (f, b, nx, ny, levels, o = {}) {
    const [x0, x1, y0, y1] = b, hx = (x1 - x0) / nx, hy = (y1 - y0) / ny, F = new Float64Array((nx + 1) * (ny + 1));
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) F[j * (nx + 1) + i] = f(x0 + i * hx, y0 + j * hy);
    const out = [];
    for (const L of levels) {
      const segs = [];
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const xa = x0 + i * hx, ya = y0 + j * hy;
        if (o.mask && o.mask(xa + hx / 2, ya + hy / 2)) continue;
        const v = [F[j * (nx + 1) + i], F[j * (nx + 1) + i + 1], F[(j + 1) * (nx + 1) + i + 1], F[(j + 1) * (nx + 1) + i]];
        const c = [[xa, ya], [xa + hx, ya], [xa + hx, ya + hy], [xa, ya + hy]], pts = [];
        for (let k = 0; k < 4; k++) {
          const a = v[k] - L, bb = v[(k + 1) % 4] - L;
          if ((a < 0) !== (bb < 0) && isFinite(a) && isFinite(bb)) {
            if (Math.abs(v[k] - v[(k + 1) % 4]) > (o.jump || Infinity)) continue; // 가지 자름(atan2 불연속)
            const t = a / (a - bb), p = c[k], q = c[(k + 1) % 4];
            pts.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]);
          }
        }
        if (pts.length === 2) segs.push([pts[0][0], pts[0][1], pts[1][0], pts[1][1]]);
        else if (pts.length === 4) { segs.push([pts[0][0], pts[0][1], pts[1][0], pts[1][1]]); segs.push([pts[2][0], pts[2][1], pts[3][0], pts[3][1]]); }
      }
      out.push({ level: L, segs });
    }
    return out;
  };
  /**
   * 추적 입자 묶음: 속도장을 따라 흘러가는 점들 (유동 가시화용)
   *   const P = Flow.particles(200, [x0,x1,y0,y1], {spawn:(rnd)=>[x,y], life:4});
   *   P.step(vel, dt);  P.pts → [{x,y,age,trail:[[x,y]…]}]
   */
  Flow.particles = function (n, b, o = {}) {
    const [x0, x1, y0, y1] = b, life = o.life || 5, tl = o.trail || 0;
    const spawn = o.spawn || (() => [x0 + Math.random() * (x1 - x0), y0 + Math.random() * (y1 - y0)]);
    const mk = (age) => { const [x, y] = spawn(Math.random); return { x, y, age: age ?? 0, life: life * (0.6 + 0.8 * Math.random()), trail: [] }; };
    const pts = Array.from({ length: n }, () => mk(Math.random() * life));
    return {
      pts,
      reset() { for (let i = 0; i < pts.length; i++) pts[i] = mk(Math.random() * life); },
      step(vel, dt) {
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i], [u, v] = vel(p.x, p.y);
          const mx = p.x + 0.5 * dt * u, my = p.y + 0.5 * dt * v, [u2, v2] = vel(mx, my);
          if (tl) { p.trail.push([p.x, p.y]); if (p.trail.length > tl) p.trail.shift(); }
          p.x += dt * u2; p.y += dt * v2; p.age += dt;
          const dead = !isFinite(p.x) || p.age > p.life || p.x < x0 - 0.05 * (x1 - x0) || p.x > x1 + 0.05 * (x1 - x0) || p.y < y0 || p.y > y1 || (o.kill && o.kill(p.x, p.y));
          if (dead) pts[i] = mk(0);
        }
      },
    };
  };
  /** 속력 색: t ∈ [0,1] → 파랑–청록–노랑–빨강 (라이트/다크 모두 읽힘) */
  Flow.ramp = function (t, a = 1) {
    t = SB.clamp(t, 0, 1);
    const st = [[0, 49, 104, 209], [0.35, 32, 178, 190], [0.65, 240, 196, 40], [1, 224, 60, 40]];
    let k = 1; while (k < st.length - 1 && st[k][0] < t) k++;
    const p = st[k - 1], q = st[k], s = (t - p[0]) / (q[0] - p[0] || 1);
    return `rgba(${Math.round(p[1] + s * (q[1] - p[1]))},${Math.round(p[2] + s * (q[2] - p[2]))},${Math.round(p[3] + s * (q[3] - p[3]))},${a})`;
  };
  /** 물 색(정적 그림·탱크용) */
  Flow.waterColor = (a = 0.35) => (SB.isDark() ? `rgba(80,170,230,${a})` : `rgba(60,140,220,${a})`);

  /* ---------------------------------------------------------------- 경계층 */
  let _blasius = null;
  /** 블라시우스 해 f''' + ½ f f'' = 0 표: [{eta, f, fp, fpp}] (η = y√(U/νx), 0–10) */
  Flow.blasius = function () {
    if (_blasius) return _blasius;
    const d = (t, y) => [y[1], y[2], -0.5 * y[0] * y[2]];
    const rk = (y, h) => { const k1 = d(0, y), a = y.map((v, i) => v + h / 2 * k1[i]), k2 = d(0, a), b = y.map((v, i) => v + h / 2 * k2[i]), k3 = d(0, b), c = y.map((v, i) => v + h * k3[i]), k4 = d(0, c); return y.map((v, i) => v + h / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])); };
    let y = [0, 0, 0.332057], out = [{ eta: 0, f: 0, fp: 0, fpp: 0.332057 }];
    for (let i = 1; i <= 1000; i++) { y = rk(y, 0.01); if (i % 5 === 0) out.push({ eta: i * 0.01, f: y[0], fp: y[1], fpp: y[2] }); }
    return (_blasius = out);
  };
  /** 평판 층류 경계층: δ99 = 4.91x/√Re_x, δ* = 1.72x/√Re_x, θ = 0.664x/√Re_x, Cf = 0.664/√Re_x */
  Flow.flatPlateLaminar = (x, Rex) => { const s = Math.sqrt(Rex); return { delta: (4.91 * x) / s, dstar: (1.72 * x) / s, theta: (0.664 * x) / s, cf: 0.664 / s, CD: 1.328 / s }; };
  /** 평판 난류(1/7 멱법칙): δ = 0.38x/Re_x^0.2, cf = 0.059/Re_x^0.2, CD = 0.074/Re_L^0.2 */
  Flow.flatPlateTurbulent = (x, Rex) => { const s = Math.pow(Rex, 0.2); return { delta: (0.38 * x) / s, cf: 0.059 / s, CD: 0.074 / s }; };

  /* ---------------------------------------------------------------- 항력 */
  /** 매끈한 구의 항력 계수(화이트 근사, Re ≲ 2×10⁵) */
  Flow.cdSphere = (Re) => 24 / Re + 6 / (1 + Math.sqrt(Re)) + 0.4;
  /** 원주(단위 길이)의 항력 계수(화이트 근사, 1 < Re ≲ 2×10⁵) */
  Flow.cdCylinder = (Re) => 1 + 10 / Math.pow(Re, 2 / 3);
  /** 대표 형상 CD (Re ~ 10⁴–10⁵, 정면 면적 기준) */
  Flow.cdShapes = {
    sphere: { ko: "구", cd: 0.47 },
    halfSphereCup: { ko: "반구(오목면이 앞)", cd: 1.42 },
    cylinder: { ko: "원주(축 수직)", cd: 1.2 },
    disk: { ko: "원판(수직)", cd: 1.17 },
    cube: { ko: "정육면체", cd: 1.05 },
    streamlined: { ko: "유선형 물체", cd: 0.04 },
    car: { ko: "승용차", cd: 0.3 },
    cyclist: { ko: "자전거 선수", cd: 0.9 },
  };

  /* ---------------------------------------------------------------- 개수로 */
  /** 임계 수심(직사각형, 단위 폭 유량 q): yc = (q²/g)^(1/3) */
  Flow.criticalDepth = (q, g = Flow.g) => Math.cbrt((q * q) / g);
  /** 비에너지 E = y + q²/(2g y²) */
  Flow.specificEnergy = (y, q, g = Flow.g) => y + (q * q) / (2 * g * y * y);
  /** 같은 E 를 주는 두 수심 [아임계(깊은), 초임계(얕은)] (E < Emin 이면 null) */
  Flow.alternateDepths = function (E, q, g = Flow.g) {
    const yc = Flow.criticalDepth(q, g), Emin = 1.5 * yc;
    if (E < Emin * (1 - 1e-9)) return null;
    const f = (y) => Flow.specificEnergy(y, q, g) - E;
    const bis = (a, b) => { for (let i = 0; i < 100; i++) { const m = 0.5 * (a + b); (f(a) > 0) === (f(m) > 0) ? (a = m) : (b = m); } return 0.5 * (a + b); };
    return [bis(yc, E * 1.0001 + 1e-9), bis(1e-9 * yc + 1e-12, yc)];
  };
  /** 수력 도약: 상류 y1, V1 → {y2, V2, Fr1, hL} */
  Flow.hydraulicJump = function (y1, V1, g = Flow.g) {
    const Fr1 = V1 / Math.sqrt(g * y1), y2 = 0.5 * y1 * (Math.sqrt(1 + 8 * Fr1 * Fr1) - 1), V2 = (V1 * y1) / y2;
    return { y2, V2, Fr1, Fr2: V2 / Math.sqrt(g * y2), hL: Math.pow(y2 - y1, 3) / (4 * y1 * y2) };
  };
  /** 매닝 식(SI): V = (1/n) Rh^(2/3) S^(1/2) */
  Flow.manning = (n, Rh, S) => (1 / n) * Math.pow(Rh, 2 / 3) * Math.sqrt(S);
  Flow.manningN = {
    glass: { ko: "유리", n: 0.010 },
    concrete: { ko: "마감 콘크리트", n: 0.012 },
    brick: { ko: "벽돌", n: 0.015 },
    earth: { ko: "깨끗한 흙 수로", n: 0.022 },
    gravel: { ko: "자갈 바닥", n: 0.029 },
    weedy: { ko: "잡초 우거진 하천", n: 0.040 },
  };

  /* ---------------------------------------------------------------- 압축성 */
  /** 등엔트로피 관계: M, k → {TR: T0/T, pR: p0/p, rR: ρ0/ρ, AR: A/A*} */
  Flow.isentropic = function (M, k = Flow.kair) {
    const t = 1 + 0.5 * (k - 1) * M * M;
    return { TR: t, pR: Math.pow(t, k / (k - 1)), rR: Math.pow(t, 1 / (k - 1)), AR: (1 / M) * Math.pow((2 / (k + 1)) * t, (k + 1) / (2 * (k - 1))) };
  };
  /** A/A* → M (supersonic=true 면 초음속 해) */
  Flow.machFromArea = function (AR, supersonic = false, k = Flow.kair) {
    if (AR < 1) return NaN;
    let a = supersonic ? 1 : 1e-6, b = supersonic ? 50 : 1;
    const f = (M) => Flow.isentropic(M, k).AR - AR;
    for (let i = 0; i < 200; i++) { const m = 0.5 * (a + b); (f(a) > 0) === (f(m) > 0) ? (a = m) : (b = m); }
    return 0.5 * (a + b);
  };
  /** 수직 충격파: M1 (>1) → {M2, pR: p2/p1, TR: T2/T1, rR: ρ2/ρ1, p0R: p02/p01} */
  Flow.normalShock = function (M1, k = Flow.kair) {
    const m2 = M1 * M1;
    const M2 = Math.sqrt((m2 + 2 / (k - 1)) / ((2 * k / (k - 1)) * m2 - 1));
    const pR = 1 + (2 * k / (k + 1)) * (m2 - 1), rR = ((k + 1) * m2) / ((k - 1) * m2 + 2), TR = pR / rR;
    const p0R = Math.pow(rR, k / (k - 1)) * Math.pow(1 / pR, 1 / (k - 1));
    return { M2, pR, TR, rR, p0R };
  };
  /** 경사 충격파: θ–β–M 관계에서 약한 해 β(라디안). 붙은 충격파가 없으면 NaN */
  Flow.obliqueBeta = function (M, theta, k = Flow.kair) {
    const tb = (b) => Math.atan((2 / Math.tan(b)) * (M * M * Math.sin(b) ** 2 - 1) / (M * M * (k + Math.cos(2 * b)) + 2));
    const mu = Math.asin(1 / M);
    let bmax = mu, best = -1;
    for (let b = mu; b < Math.PI / 2; b += 0.0005) { const t = tb(b); if (t > best) { best = t; bmax = b; } }
    if (theta > best) return NaN;
    let a = mu, b = bmax;
    for (let i = 0; i < 100; i++) { const m = 0.5 * (a + b); tb(m) < theta ? (a = m) : (b = m); }
    return 0.5 * (a + b);
  };
  /** 프란틀–마이어 함수 ν(M) (라디안) */
  Flow.prandtlMeyer = (M, k = Flow.kair) => { const r = Math.sqrt((k + 1) / (k - 1)); return r * Math.atan(Math.sqrt((M * M - 1) / (r * r))) - Math.atan(Math.sqrt(M * M - 1)); };

  /* ---------------------------------------------------------------- 그리기 */
  /**
   * 탱크·관 속 물 채우기(픽셀 다각형): Flow.fillWater(ctx, [[x,y], …], {alpha, wave, t})
   * wave>0 이면 윗변(첫 두 점 사이)에 잔물결
   */
  Flow.fillWater = function (ctx, poly, o = {}) {
    ctx.save(); ctx.fillStyle = o.color || Flow.waterColor(o.alpha ?? 0.35);
    ctx.beginPath(); poly.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill();
    if (o.surface !== false && poly.length > 1) {
      ctx.strokeStyle = SB.isDark() ? "rgba(120,200,255,.9)" : "rgba(30,110,200,.9)"; ctx.lineWidth = 1.6; ctx.beginPath();
      const [a, b] = poly, n = 24;
      for (let i = 0; i <= n; i++) { const s = i / n, x = a[0] + s * (b[0] - a[0]), y = a[1] + s * (b[1] - a[1]) + (o.wave ? o.wave * Math.sin(s * 14 + (o.t || 0) * 3) : 0); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke();
    }
    ctx.restore();
  };
  /** 속도 분포 화살표 묶음(픽셀): Flow.profile(ctx, x0, ys[], us[], scale, {color}) — 관·경계층 속도 분포 */
  Flow.profile = function (ctx, x0, ys, us, scale, o = {}) {
    const col = o.color || SB.color("accent");
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 1.6; ctx.beginPath();
    ys.forEach((y, i) => (i ? ctx.lineTo(x0 + us[i] * scale, y) : ctx.moveTo(x0 + us[i] * scale, y))); ctx.stroke();
    ctx.strokeStyle = SB.color("text-dim"); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, ys[0]); ctx.lineTo(x0, ys[ys.length - 1]); ctx.stroke();
    ctx.restore();
    const every = o.every || Math.max(1, Math.floor(ys.length / 9));
    for (let i = 0; i < ys.length; i += every) if (Math.abs(us[i] * scale) > 3) SB.arrow(ctx, x0, ys[i], x0 + us[i] * scale, ys[i], { color: col, width: 1.3, head: 6 });
  };
})();
