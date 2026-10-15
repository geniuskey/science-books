/* ==========================================================================
   SciBook lib/phys.js — 물리 계열 공용 라이브러리 (전역 Phys)
   일반물리·정역학·동역학·유체역학 교과서가 함께 쓴다. 의존: engine/js/scibook.js
   ========================================================================== */
(function () {
  "use strict";
  const Phys = (window.Phys = {});

  /* ---------------------------------------------------------------- 상수 (SI, CODATA 2018) */
  Phys.const = {
    g: 9.80665, G: 6.67430e-11, c: 2.99792458e8, e: 1.602176634e-19, me: 9.1093837015e-31, mp: 1.67262192369e-27,
    eps0: 8.8541878128e-12, mu0: 1.25663706212e-6, k: 8.9875517923e9, h: 6.62607015e-34, kB: 1.380649e-23,
    NA: 6.02214076e23, R: 8.314462618, sigma: 5.670374419e-8, Mearth: 5.972e24, Rearth: 6.371e6, Msun: 1.989e30, AU: 1.496e11,
  };

  /* ---------------------------------------------------------------- 2D 벡터 [x, y] */
  const V = (Phys.V = {
    add: (a, b) => [a[0] + b[0], a[1] + b[1]],
    sub: (a, b) => [a[0] - b[0], a[1] - b[1]],
    mul: (a, s) => [a[0] * s, a[1] * s],
    dot: (a, b) => a[0] * b[0] + a[1] * b[1],
    cross: (a, b) => a[0] * b[1] - a[1] * b[0],
    len: (a) => Math.hypot(a[0], a[1]),
    norm: (a) => { const l = Math.hypot(a[0], a[1]) || 1; return [a[0] / l, a[1] / l]; },
    rot: (a, th) => [a[0] * Math.cos(th) - a[1] * Math.sin(th), a[0] * Math.sin(th) + a[1] * Math.cos(th)],
    polar: (r, th) => [r * Math.cos(th), r * Math.sin(th)],
    angle: (a) => Math.atan2(a[1], a[0]),
  });
  Phys.deg = (d) => (d * Math.PI) / 180;
  Phys.rad2deg = (r) => (r * 180) / Math.PI;

  /* ---------------------------------------------------------------- 적분기 */
  /** RK4 한 걸음: deriv(t, y[]) → dy[] */
  Phys.rk4 = function (deriv, y, t, dt) {
    const n = y.length, k1 = deriv(t, y);
    const y2 = new Array(n), y3 = new Array(n), y4 = new Array(n);
    for (let i = 0; i < n; i++) y2[i] = y[i] + (dt / 2) * k1[i];
    const k2 = deriv(t + dt / 2, y2);
    for (let i = 0; i < n; i++) y3[i] = y[i] + (dt / 2) * k2[i];
    const k3 = deriv(t + dt / 2, y3);
    for (let i = 0; i < n; i++) y4[i] = y[i] + dt * k3[i];
    const k4 = deriv(t + dt, y4);
    const out = new Array(n);
    for (let i = 0; i < n; i++) out[i] = y[i] + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]);
    return out;
  };
  /** 구간 적분: 샘플 [{t, y}] 반환. stop(t,y) 가 true면 중단 */
  Phys.integrate = function (deriv, y0, t0, t1, dt, stop) {
    const out = [{ t: t0, y: y0.slice() }];
    let y = y0.slice(), t = t0;
    while (t < t1 - 1e-12) {
      const h = Math.min(dt, t1 - t);
      y = Phys.rk4(deriv, y, t, h); t += h;
      out.push({ t, y: y.slice() });
      if (stop && stop(t, y)) break;
    }
    return out;
  };

  /* ---------------------------------------------------------------- 좌표계(월드) */
  /**
   * 물리 좌표 ↔ 캔버스 픽셀. SB.canvas 그리기 함수 안에서 매번 만든다.
   *   const W = Phys.world(ctx, w, h, { x:[0, 60], y:[0, 30], pad:[40,16,16,34], equal:true });
   *   W.X(x), W.Y(y), W.ix(px), W.iy(py), W.s (px per 단위)
   *   W.grid({step, color}), W.axes({xLabel, yLabel, step}), W.ground(y0)
   *   W.arrow([x,y], [dx,dy], {color, label, scale}), W.dot([x,y], {r, color, label}), W.path(points, {color, width, dash})
   * equal:true 면 가로·세로 축척이 같다(남는 공간은 가운데 정렬).
   */
  Phys.world = function (ctx, w, h, o = {}) {
    const [pl, pr, pt, pb] = o.pad || [44, 16, 16, 36];
    let [x0, x1] = o.x || [0, 10], [y0, y1] = o.y || [0, 10];
    const bw = w - pl - pr, bh = h - pt - pb;
    let sx = bw / (x1 - x0), sy = bh / (y1 - y0), ox = pl, oy = pt;
    if (o.equal) {
      const s = Math.min(sx, sy);
      ox += (bw - s * (x1 - x0)) * (o.alignX == null ? 0.5 : o.alignX);
      oy += (bh - s * (y1 - y0)) * (o.alignY == null ? 0.5 : o.alignY);
      sx = sy = s;
    }
    const P = SB.palette();
    const W = {
      ctx, w, h, s: sx, sx, sy, box: { x: ox, y: oy, w: sx * (x1 - x0), h: sy * (y1 - y0) }, x0, x1, y0, y1,
      X: (x) => ox + (x - x0) * sx,
      Y: (y) => oy + (y1 - y) * sy,
      ix: (px) => x0 + (px - ox) / sx,
      iy: (py) => y1 - (py - oy) / sy,
    };
    const niceStep = (span) => { const r = span / 6, m = Math.pow(10, Math.floor(Math.log10(r))); return [1, 2, 5, 10].map((k) => k * m).find((s) => span / s <= 7) || r; };
    W.grid = (g = {}) => {
      const st = g.step || niceStep(x1 - x0), sty = g.stepY || g.step || niceStep(y1 - y0);
      ctx.save(); ctx.strokeStyle = g.color || P.grid; ctx.lineWidth = 1;
      for (let x = Math.ceil(x0 / st) * st; x <= x1 + 1e-9; x += st) { ctx.beginPath(); ctx.moveTo(W.X(x), W.Y(y0)); ctx.lineTo(W.X(x), W.Y(y1)); ctx.stroke(); }
      for (let y = Math.ceil(y0 / sty) * sty; y <= y1 + 1e-9; y += sty) { ctx.beginPath(); ctx.moveTo(W.X(x0), W.Y(y)); ctx.lineTo(W.X(x1), W.Y(y)); ctx.stroke(); }
      ctx.restore();
    };
    W.axes = (a = {}) => {
      const st = a.step || niceStep(x1 - x0), sty = a.stepY || a.step || niceStep(y1 - y0);
      const df = (v) => String(Number(v.toPrecision(4))), fx = a.xFmt || df, fy = a.yFmt || df;
      ctx.save(); ctx.strokeStyle = P.axis; ctx.fillStyle = P.dim; ctx.lineWidth = 1.2; ctx.font = "11px " + SB.color("mono");
      const ax = SB.clamp(0, x0, x1), ay = SB.clamp(0, y0, y1);
      ctx.beginPath(); ctx.moveTo(W.X(x0), W.Y(ay)); ctx.lineTo(W.X(x1), W.Y(ay)); ctx.moveTo(W.X(ax), W.Y(y0)); ctx.lineTo(W.X(ax), W.Y(y1)); ctx.stroke();
      ctx.textAlign = "center"; ctx.textBaseline = "top";
      for (let x = Math.ceil(x0 / st) * st; x <= x1 + 1e-9; x += st) if (Math.abs(x - ax) > 1e-9 || a.zero) ctx.fillText(fx(x), W.X(x), W.Y(ay) + 4);
      ctx.textAlign = "right"; ctx.textBaseline = "middle";
      for (let y = Math.ceil(y0 / sty) * sty; y <= y1 + 1e-9; y += sty) if (Math.abs(y - ay) > 1e-9) ctx.fillText(fy(y), W.X(ax) - 5, W.Y(y));
      ctx.font = "12px " + SB.color("font"); ctx.fillStyle = P.dim;
      if (a.xLabel) { ctx.textAlign = "right"; ctx.textBaseline = "bottom"; ctx.fillText(a.xLabel, W.X(x1), W.Y(ay) - 4); }
      if (a.yLabel) { ctx.textAlign = "left"; ctx.textBaseline = "top"; ctx.fillText(a.yLabel, W.X(ax) + 6, W.Y(y1)); }
      ctx.restore();
    };
    W.ground = (gy = 0, o2 = {}) => {
      ctx.save();
      ctx.fillStyle = o2.color || P.surface; ctx.fillRect(0, W.Y(gy), w, h - W.Y(gy));
      ctx.strokeStyle = P.dim; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(0, W.Y(gy)); ctx.lineTo(w, W.Y(gy)); ctx.stroke();
      ctx.strokeStyle = P.faint; ctx.lineWidth = 1;
      for (let x = -20; x < w + 20; x += 12) { ctx.beginPath(); ctx.moveTo(x, W.Y(gy) + 1); ctx.lineTo(x - 7, W.Y(gy) + 8); ctx.stroke(); }
      ctx.restore();
    };
    W.arrow = (p, d, a = {}) => { const k = a.scale || 1; SB.arrow(ctx, W.X(p[0]), W.Y(p[1]), W.X(p[0] + d[0] * k), W.Y(p[1] + d[1] * k), a); };
    W.dot = (p, a = {}) => {
      ctx.save(); ctx.fillStyle = a.color || P.accent; ctx.beginPath(); ctx.arc(W.X(p[0]), W.Y(p[1]), a.r || 5, 0, Math.PI * 2); ctx.fill();
      if (a.stroke) { ctx.strokeStyle = a.stroke; ctx.lineWidth = 1.5; ctx.stroke(); }
      ctx.restore();
      if (a.label) SB.label(ctx, a.label, W.X(p[0]) + (a.dx ?? 0), W.Y(p[1]) + (a.dy ?? -14), { color: a.labelColor || P.text });
    };
    W.path = (pts, a = {}) => {
      if (pts.length < 2) return;
      ctx.save(); ctx.strokeStyle = a.color || P.accent; ctx.lineWidth = a.width || 2; if (a.dash) ctx.setLineDash(a.dash);
      ctx.beginPath(); pts.forEach((q, i) => (i ? ctx.lineTo(W.X(q[0]), W.Y(q[1])) : ctx.moveTo(W.X(q[0]), W.Y(q[1])))); ctx.stroke();
      if (a.fill) { ctx.lineTo(W.X(pts[pts.length - 1][0]), W.Y(a.fillTo || 0)); ctx.lineTo(W.X(pts[0][0]), W.Y(a.fillTo || 0)); ctx.closePath(); ctx.fillStyle = a.fill; ctx.fill(); }
      ctx.restore();
    };
    W.text = (t, p, a = {}) => SB.label(ctx, t, W.X(p[0]) + (a.dx || 0), W.Y(p[1]) + (a.dy || 0), a);
    return W;
  };

  /* ---------------------------------------------------------------- 그리기 도구 */
  /** 상자(블록): Phys.block(ctx, cx, cy, w, h, {label, angle, color}) — 픽셀 좌표 */
  Phys.block = function (ctx, cx, cy, bw, bh, o = {}) {
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(-(o.angle || 0));
    ctx.fillStyle = o.color || SB.color("accent-soft"); ctx.strokeStyle = o.stroke || SB.color("accent"); ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.rect(-bw / 2, -bh / 2, bw, bh); ctx.fill(); ctx.stroke();
    if (o.label) { ctx.rotate(o.angle || 0); SB.label(ctx, o.label, 0, 0, { bold: true, color: SB.color("text"), bg: "transparent" }); }
    ctx.restore();
  };
  /**
   * 자유 물체도: Phys.fbd(ctx, cx, cy, forces, {scale, size})
   *   forces: [{ v:[Fx,Fy], label:'mg', color }]  (뉴턴 단위, 화면 위쪽이 +y)
   */
  Phys.fbd = function (ctx, cx, cy, forces, o = {}) {
    const k = o.scale || 4, sz = o.size || 26;
    ctx.save();
    ctx.fillStyle = SB.color("surface-2"); ctx.strokeStyle = SB.color("text-dim"); ctx.lineWidth = 1.4;
    ctx.fillRect(cx - sz / 2, cy - sz / 2, sz, sz); ctx.strokeRect(cx - sz / 2, cy - sz / 2, sz, sz);
    ctx.restore();
    const cols = SB.palette().series;
    forces.forEach((f, i) => { if (Math.hypot(f.v[0], f.v[1]) < 1e-9) return; SB.arrow(ctx, cx, cy, cx + f.v[0] * k, cy - f.v[1] * k, { color: f.color || cols[i % cols.length], label: f.label, width: 2.4 }); });
  };
  /** 궤적 버퍼: const tr = Phys.trail(200); tr.push([x,y]); tr.points */
  Phys.trail = function (n = 200) { const pts = []; return { points: pts, push(p) { pts.push(p); if (pts.length > n) pts.shift(); }, clear() { pts.length = 0; } }; };

  /* ---------------------------------------------------------------- 전기장 */
  /** 점전하 [{x, y, q}] 에 의한 2D 단면 전기장(쿨롱, 3D 1/r²). 단위는 k=1 */
  Phys.Efield = function (charges, x, y, soft = 1e-6) {
    let ex = 0, ey = 0;
    for (const c of charges) { const dx = x - c.x, dy = y - c.y, r2 = dx * dx + dy * dy + soft, r3 = r2 * Math.sqrt(r2); ex += (c.q * dx) / r3; ey += (c.q * dy) / r3; }
    return [ex, ey];
  };
  Phys.potential = function (charges, x, y, soft = 1e-6) { let v = 0; for (const c of charges) v += c.q / Math.sqrt((x - c.x) ** 2 + (y - c.y) ** 2 + soft); return v; };
  /** 전기력선 추적: 양전하 주위에서 출발(전하가 모두 음이면 음전하에서 역방향). 반환: [[ [x,y], … ], …] */
  Phys.fieldLines = function (charges, o = {}) {
    const per = o.perCharge || 12, step = o.step || 0.02, maxN = o.maxSteps || 1500, bounds = o.bounds || [-10, 10, -10, 10];
    const anyPos = charges.some((c) => c.q > 0), lines = [];
    charges.forEach((c) => {
      if (anyPos ? c.q <= 0 : c.q >= 0) return;
      const nLines = Math.max(2, Math.round(per * Math.abs(c.q) / Math.max(...charges.map((d) => Math.abs(d.q)))));
      for (let i = 0; i < nLines; i++) {
        const a = (2 * Math.PI * (i + 0.5)) / nLines;
        let p = [c.x + 0.06 * Math.cos(a), c.y + 0.06 * Math.sin(a)];
        const pts = [p], dir = anyPos ? 1 : -1;
        for (let s = 0; s < maxN; s++) {
          const E = Phys.Efield(charges, p[0], p[1]), L = Math.hypot(E[0], E[1]) || 1;
          p = [p[0] + (dir * step * E[0]) / L, p[1] + (dir * step * E[1]) / L];
          pts.push(p);
          if (p[0] < bounds[0] || p[0] > bounds[1] || p[1] < bounds[2] || p[1] > bounds[3]) break;
          if (charges.some((d) => d !== c && Math.hypot(p[0] - d.x, p[1] - d.y) < 0.05)) break;
        }
        lines.push(pts);
      }
    });
    return lines;
  };

  /* ---------------------------------------------------------------- 광학 */
  /** 얇은 렌즈/거울: 물체 거리 so(>0), 초점 f → {si, m}  (1/so + 1/si = 1/f) */
  Phys.thinLens = (f, so) => { const si = 1 / (1 / f - 1 / so); return { si, m: -si / so }; };
  /** 스넬 법칙: 굴절각(라디안) 또는 전반사면 NaN */
  Phys.snell = (n1, n2, th1) => { const s = (n1 / n2) * Math.sin(th1); return Math.abs(s) > 1 ? NaN : Math.asin(s); };

  /* ---------------------------------------------------------------- 색 */
  /** 값 → 발산 색(음: 파랑, 양: 빨강), t ∈ [-1, 1] */
  Phys.diverge = (t, a = 1) => { t = SB.clamp(t, -1, 1); const r = t > 0 ? 220 : Math.round(220 + 200 * t), b = t < 0 ? 230 : Math.round(230 - 200 * t), g = Math.round(220 - 140 * Math.abs(t)); return `rgba(${r},${g},${b},${a})`; };
})();
