# 챕터 작성 가이드 (SciBook 공통)

이 문서는 모든 과목에 공통인 챕터 작성 규칙이다. 본보기 챕터는
[`general-physics/chapters/motion-2d.html`](../general-physics/chapters/motion-2d.html)(인터랙션 기준)과 [`general-chemistry/chapters/gases.html`](../general-chemistry/chapters/gases.html)(기본 구성)이다. **새 챕터를 쓰기 전에 반드시 이 파일을 처음부터 끝까지 읽는다.**


## 0. 인터랙션 기준 (엔진 2.0, 모든 새 장과 보강 작업에 적용)

독자가 **읽는 시간보다 만지는 시간이 많은** 교과서를 목표로 한다. 본보기: [`general-physics/chapters/motion-2d.html`](../general-physics/chapters/motion-2d.html).

- **장 머리 라이브 애니메이션** `.hero-live` 1개: 장의 핵심 현상이 첫 화면에서 저절로 움직이고, 누르거나 끌면 반응한다.
- **모든 절(h2 section)에 인터랙티브 요소 최소 2개.** 정적인 글·그림만 있는 절은 없다.
- 장 전체 기준(최소): 시뮬레이터 `.sim` 4개 이상, 미니 실험 `.mini` 3개 이상, 드래그 숫자 문단 `.tangle` 2개 이상, 단계별 그림 `.steps` 2개 이상, 예측→실험 `.predict` 2개 이상, 드릴 2개. 정적 SVG 그림도 3개 이상 유지하되, 움직일 수 있는 그림은 `.steps`나 `.mini`로 만든다.
- **직접 조작**: 슬라이더만이 아니라 캔버스 위의 물체·화살표·점을 끌어서(`SB.drag`) 바꾸게 한다. 시뮬레이터의 절반 이상에 드래그 조작을 넣는다.
- **목표·도전**: 시뮬레이터 하나 이상에 "과녁 맞히기", "목표값 만들기" 같은 게임형 과제를 넣는다.
- 그래프는 실시간으로 움직이는 점·자취와 함께 보여 준다(값만 바뀌는 정적 그래프 지양).
- 수식 바로 옆에서 그 수식을 만질 수 있게 한다: 핵심 공식마다 `.tangle` 또는 `.mini`를 둔다.
- 성능: 화면 밖에서는 `SB.loop`가 멈춘다. 입자 수는 수백 개 이내. 360px 폭에서도 조작 가능해야 한다(핸들 반지름 ≥ 12px).

## 1. 원칙

- **한국어**, 대상은 해당 과목을 처음 듣는 대학생. 영어 원어는 처음 나올 때 `<span class="term">엔탈피</span><span class="en">(enthalpy)</span>`처럼 병기한다.
- 용어는 대한화학회·한국물리학회 등 학회 표준 표기를 따른다(예: 소듐, 포타슘, 플루오린, 아이오딘, 망가니즈, 크로뮴).
- 범위는 표준 대학 교재(예: Brown *Chemistry: The Central Science*, Zumdahl *Chemistry*, OpenStax *Chemistry 2e*)의 해당 장과 같은 깊이. 대학 1학년이 시험에서 풀어야 하는 계산을 모두 다룬다.
- 한 절(`<section>`)의 흐름: **개념(직관) → 정의/법칙 → 수식 → 그림 → 시뮬레이터 → 예제**. 장 끝에 **핵심 정리 → 연습문제 → 개념 퀴즈**.
- 수치와 상수는 정확해야 한다. 예제·연습문제의 답은 **반드시 코드(python/node)로 계산해 확인**한 뒤 쓴다. 상수는 CODATA 2018, 원자량은 IUPAC 표준값(소수 셋째~넷째 자리).
- 시뮬레이터는 "슬라이더를 움직이면 무엇을 깨닫는가"가 분명해야 한다. `sim-note`에 "해볼 것:"으로 2–3개의 구체적 탐구 과제를 쓴다. 장식용 애니메이션은 만들지 않는다.
- 외부 라이브러리는 엔진이 제공하는 것만: KaTeX(+mhchem, 엔진이 자동 로드), three.js r147(3D가 필요할 때만). 이미지 파일 대신 인라인 SVG/canvas.
- 색은 CSS 변수(`var(--accent)`, `var(--text-dim)` …)나 `SB.palette()`만 쓴다. 라이트/다크 모두에서 읽혀야 한다. 물리적 색(불꽃 반응색, 지시약 색, 파장색)만 고정색 허용.
- 폭 360px에서 가로 스크롤이 생기면 안 된다. SVG는 `viewBox`만 주고 width/height 속성을 생략한다. 넓은 표는 `.table-wrap`으로 감싼다.
- 분량 가이드(한 장): 본문 4–7절, 0절의 인터랙션 기준 충족, 예제 5–8개, 연습문제 12–15개(난이도 1·2·3 고루, 선택형 2개 포함), 퀴즈 4–5문항, 핵심 정리 5–7항목. 대략 1000–1600줄.

## 2. 파일 구조와 head 템플릿

`<course>/chapters/<slug>.html`. slug와 번호는 `<course>/course.json`에 있다(이미 등록됨).

```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="../../favicon.svg" type="image/svg+xml">
<title>열화학 · 일반화학 · SciBook</title>
<meta name="description" content="한두 문장, 80–160자. 이 장에서 다루는 개념을 나열.">
<!-- sb:seo --><!-- /sb:seo -->
<link rel="stylesheet" href="../../engine/css/scibook.css">
<script src="../../engine/js/scibook.js"></script>
<script src="../course.js"></script>
<!-- 물리 과목: <script src="../../engine/lib/phys.js"></script> -->
<!-- 화학 과목: 원소 데이터와 화학 라이브러리 -->
<script src="../../engine/lib/elements.js"></script>
<script src="../../engine/lib/chem.js"></script>
<!-- 3D가 필요한 장만 -->
<script src="https://cdn.jsdelivr.net/npm/three@0.147.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/controls/OrbitControls.js"></script>
<style> /* 이 장에서만 쓰는 작은 스타일(선택) */ </style>
</head>
<body data-chapter="thermochemistry">
<main class="chapter">
  <header class="chapter-hero" data-prereq="stoichiometry gases">
    <div class="eyebrow">Chapter 06</div>
    <h1>열화학</h1>
    <p class="lead">…</p>
    <ul class="objectives"><li>…</li></ul>
  </header>
  <section id="energy"><h2>에너지와 일</h2> … </section>
  …
  <section class="keypoints" id="summary"><h2>핵심 정리</h2><ol><li>…</li></ol></section>
  <section class="problems" id="problems"><h2>연습문제</h2><p>안내</p><div class="problem-set"> … </div></section>
  <section class="quiz-sec" id="quiz"><h2>개념 확인 퀴즈</h2><div class="quiz"> … </div></section>
</main>
<script>
(function () { "use strict"; /* 페이지 스크립트: SB, Chem 사용 */ })();
</script>
</body>
</html>
```

- `<!-- sb:seo -->` 구역은 비워 둔다. `python3 tools/build.py`가 canonical·OG·JSON-LD를 채운다.
- KaTeX `<script>`/`<link>`를 head에 넣지 않는다(엔진이 불러온다).
- `data-prereq`에는 먼저 읽으면 좋은 장의 slug를 공백으로 구분해 쓴다(엔진이 링크로 바꾼다).
- `id`는 페이지 안에서 유일해야 한다. 시뮬레이터 `sim-…`, 캔버스 `cv-…`, 컨트롤은 시뮬레이터별 접두사(`box-v`, `mb-t`)를 붙인다.

## 3. 자동으로 처리되는 것 (직접 쓰지 말 것)

엔진(`engine/js/scibook.js`)이 다음을 만든다: 상단바·챕터 서랍·검색·우측 목차·이전/다음·푸터·테마,
**절 번호**(h2 앞 `6.1`, `6.2`…), **그림 번호**(figcaption 앞 `그림 6.1`), **예제 번호와 머리말**(`예제 6.1`),
**연습문제 번호·입력칸·확인·힌트·풀이 버튼·진도 저장**, 퀴즈 동작, 수식 렌더, 시뮬레이터 `#` 링크.
따라서 figcaption은 `<b>그림 …</b>` 없이 설명만 쓴다. h2에 번호를 쓰지 않는다.

## 4. 컴포넌트


### 엔진 2.0 인터랙션 부품

**장 머리 애니메이션**
```html
<div class="hero-live" id="hero"><canvas id="cv-hero"></canvas><span class="hint">누르거나 끌어 보세요</span></div>   <!-- .chapter-hero 안, lead 다음 -->
```
**드래그 숫자 문단** — 밑줄 숫자를 좌우로 끌면 결과가 즉시 바뀐다(캔버스를 함께 둘 수 있다).
```html
<div class="tangle" id="tg-x">
  <p>속력 <span class="tn" data-var="v" data-min="5" data-max="40" data-step="1" data-unit=" m/s">20</span>로 던지면
     <span class="tn-out" data-out="R"></span> 날아간다.</p>
  <canvas id="cv-tg"></canvas>   <!-- 선택 -->
</div>
```
```js
let cv = null;
SB.tangle("tg-x", (v) => ({ R: (v.v * v.v / 9.8).toFixed(1) + " m" }), { onChange: () => cv && cv.redraw() });
cv = SB.canvas("cv-tg", (ctx, w, h) => { /* … */ }, { aspect: 0.3 });
```
**미니 실험** — 본문 흐름 속 가벼운 그림 + 컨트롤 1–3개.
```html
<figure class="mini" id="mini-x">
  <div class="mini-view"><canvas id="cv-x"></canvas></div>
  <div class="mini-ctrl"><label class="ctrl"><span>값 <output id="x-a-out"></output></span><input type="range" id="x-a" min="0" max="10" value="5"></label><button class="btn" id="x-play" type="button"></button><span class="readout" id="x-r"></span></div>
  <figcaption><span class="mini-tag">MINI LAB</span>무엇을 보라는지 한두 문장.</figcaption>
</figure>
```
나란히 두려면 `<div class="mini-row">` 안에 `.mini` 두 개.

**단계별 그림** — `data-step="n"`은 n단계부터, `data-only="n"`은 n단계에서만 보인다. 엔진이 ◀ ▶ 자동 재생 버튼을 붙인다.
```html
<figure class="diagram steps" data-steps="3">
  <svg viewBox="0 0 800 300">… <g data-step="2">…</g> <g data-only="3">…</g></svg>
  <ol class="steps-cap"><li>1단계 설명</li><li>2단계</li><li>3단계</li></ol>
  <figcaption>…</figcaption>
</figure>
```
**예측 → 실험** — 답을 고르기 전에는 `data-for` 시뮬레이터가 흐리게 잠긴다.
```html
<div class="predict" data-for="sim-drop">
  <p>질문?</p>
  <div class="opts"><button class="opt">보기</button><button class="opt" data-correct>정답</button></div>
  <div class="quiz-exp">시뮬레이터에서 무엇을 확인할지.</div>
</div>
<div class="sim" id="sim-drop">…</div>
```
**캔버스 드래그**
```js
const cv = SB.canvas("cv-a", (ctx, w, h, self) => { …; self._tip = [tx, ty]; });   // 그리기 함수 안에서는 self 사용
SB.drag(cv, { handles: () => [{ id: "tip", x: cv._tip[0], y: cv._tip[1], r: 14 }], move: (id, x, y) => { /* 상태 갱신 */ } });
// free:true 이면 빈 곳을 눌러도 move(null, x, y)/down(null, x, y) 호출
```
**그리기 도구**: `SB.arrow(ctx,x1,y1,x2,y2,{color,width,label,dash})`, `SB.label(ctx,text,x,y,{color,size,bold,mono})`(배경 테두리 있는 글자), `SB.spring(ctx,x1,y1,x2,y2,{coils,amp})`, `SB.dashLine(...)`, `SB.play(btnId, loop)`(재생/정지 버튼), `SB.chart(..., {hbands:[{y0,y1,color}]})`.
드래그 핸들은 흰 원 + 강조색 테두리(반지름 8–10px)로 그려 "끌 수 있음"을 보여 준다.

### 물리 `Phys` (engine/lib/phys.js)
- `Phys.world(ctx, w, h, {x:[a,b], y:[c,d], pad:[l,r,t,b], equal, alignX, alignY})` → `W.X(x), W.Y(y), W.ix(px), W.iy(py), W.s, W.grid(), W.axes({xLabel,yLabel,step}), W.ground(y), W.arrow(p, d, {scale,color,label}), W.dot(p,{r,color,label}), W.path(pts,{color,width,dash,fill}), W.text(t,p)`.
- `Phys.V.{add,sub,mul,dot,cross,len,norm,rot,polar,angle}`, `Phys.deg(°)`, `Phys.rad2deg`.
- `Phys.rk4(deriv, y, t, dt)`, `Phys.integrate(deriv, y0, t0, t1, dt, stop)` → `[{t, y}]`.
- `Phys.block(ctx,cx,cy,w,h,{label,angle})`, `Phys.fbd(ctx,cx,cy,[{v:[Fx,Fy],label}],{scale})`, `Phys.trail(n)`.
- `Phys.Efield(charges,x,y)`, `Phys.potential(...)`, `Phys.fieldLines(charges,{perCharge,bounds})`, `Phys.thinLens(f,so)`, `Phys.snell(n1,n2,θ)`, `Phys.diverge(t)`, `Phys.const`.

### 정의·법칙 상자
```html
<div class="def"><span class="def-k">헤스 법칙</span>
  <p>반응 엔탈피는 경로와 무관하다 …</p>
</div>
```

### 수식
```html
<div class="formula">$$\Delta H = q_P$$<div class="where">여기서 …</div></div>
```
인라인 `\( … \)`, 디스플레이 `$$ … $$`. 화학식·반응식은 mhchem: `\(\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}\)`,
평형 `\ce{<=>}`, 전하 `\ce{SO4^2-}`. 반응식만 크게 보일 때는 `<div class="rxn">$$\ce{…}$$</div>`.
본문의 단순 화학식은 유니코드 아래첨자(H₂O, CO₂, SO₄²⁻)로 써도 된다.

### 그림 (SVG)
```html
<figure class="diagram">
  <svg viewBox="0 0 800 300" role="img" aria-label="짧은 대체 텍스트"> … </svg>
  <figcaption>그림이 말하는 핵심을 한두 문장으로.</figcaption>
</figure>
```
SVG 유틸 클래스: 텍스트 `.t .t-dim .t-mono .t-acc`, 선 `.s-line .s-axis .s-acc`, 면 `.f-surface .f-elev .f-acc .f-acc-soft .f-acc2-soft`.
`fill="var(--accent)"`처럼 CSS 변수를 직접 써도 된다. `<marker>`/`<pattern>`/`<linearGradient>` id는 장 안에서 유일하게.
SVG 안 글자는 11–14px 크기를 기준으로 viewBox 800 폭에 맞춘다(모바일에서 축소되므로 너무 작게 쓰지 않는다).

### 시뮬레이터
```html
<div class="sim" id="sim-cal">
  <div class="sim-head"><span class="sim-tag">SIMULATOR</span><h3>커피컵 열량계</h3></div>   <!-- 3D: <span class="sim-tag three">3D</span> -->
  <div class="sim-body side">
    <div class="sim-view"><canvas id="cv-cal"></canvas></div>
    <!-- 캔버스 두 개: <div class="sim-view"><div class="sim-split"><div><canvas id="a"></canvas></div><div><canvas id="b"></canvas></div></div></div> -->
    <!-- 3D: <div class="sim-view three" id="v3d"></div> -->
    <div class="sim-controls">
      <label class="ctrl"><span>질량 <output id="cal-m-out"></output></span><input type="range" id="cal-m" min="10" max="200" value="50"></label>
      <div class="ctrl"><span>물질</span><div class="seg" id="cal-sub"><button data-value="cu" class="on">Cu</button><button data-value="al">Al</button></div></div>
      <label class="ctrl"><span>선택</span><select id="cal-x"><option>…</option></select></label>
      <label class="check"><input type="checkbox" id="cal-loss"> 열 손실 포함</label>
      <button class="btn primary" id="cal-run">실행</button>
    </div>
  </div>
  <div class="sim-readout">
    <div class="stat"><span class="k">나중 온도</span><span class="v" id="cal-tf">—</span></div>
  </div>
  <div class="sim-note">해볼 것: ① … ② …</div>
</div>
```

### 예제 (문제 → 전략 → 풀이 → 답 → 검토)
```html
<div class="example" data-title="짧은 제목">
  <p>문제 본문.</p>
  <details><summary>풀이 보기</summary>
    <div class="step"><b>전략</b> 어떤 식을 왜 쓰는가.</div>
    <div class="step"><b>풀이</b> 계산 과정(수식).</div>
    <div class="answer">최종 답(단위·유효숫자)</div>
    <div class="step"><b>검토</b> 크기·부호·단위가 타당한가.</div>
  </details>
</div>
```

### 연습문제
```html
<div class="problem-set">
  <!-- 숫자 하나 -->
  <div class="problem" data-level="1" data-topic="비열" data-answer="2.09e3" data-label="q =" data-unit="J">
    <div class="prob-q"><p>문제</p></div>
    <div class="prob-hint">힌트 1</div>          <!-- 0개 이상, 순서대로 열린다 -->
    <div class="prob-sol"><p>풀이</p></div>
  </div>
  <!-- 숫자 여러 개: ; 로 구분 (answer, label, unit, tol 모두) -->
  <div class="problem" data-level="2" data-answer="0.0821; 1.25" data-label="x =; y =" data-unit="mol; L"> … </div>
  <!-- 허용 오차: 기본 1%. data-tol="2%"(상대) 또는 data-tol="0.02"(절대, pH 같은 로그값에 사용) -->
  <div class="problem" data-level="2" data-answer="4.74" data-tol="0.02" data-label="pH ="> … </div>
  <!-- 선택형 -->
  <div class="problem" data-level="1"><div class="prob-q"><p>…</p></div>
    <div class="prob-choices"><button>보기</button><button data-correct>정답</button></div>
    <div class="prob-sol"><p>…</p></div></div>
  <!-- 짧은 텍스트 답(대소문자·공백 무시, | 로 동의어) -->
  <div class="problem" data-text="sp3|sp³" data-label="혼성 ="> … </div>
  <!-- 서술형: data-answer 없이 풀이만 -->
</div>
```
- `data-answer`에는 **숫자만**(지수는 `9.83e-3`). 답을 유효숫자 3자리로 반올림한 값을 넣고, 정확한 계산값과 1% 이내인지 확인한다.
- 문제 본문에 상수·원자량 등 필요한 자료를 주거나 "부록 B 참고"라고 쓴다.
- 풀이는 반드시 쓴다. 숫자만이 아니라 식과 중간값을 보인다.

### 드릴(무작위 반복 연습)
```html
<div class="drill" id="drill-q" data-title="q = mcΔT 반복 연습"></div>
```
```js
SB.drill("drill-q", () => {
  const m = …, c = …;
  return { q: `<p>질량 \\(m = ${m}\\) g …</p>`, answer: value /* 또는 [a, b] */, label: "q =", unit: "J", tol: "1%",
           sol: `\\(q = mc\\Delta T = …\\)` };
});
```
**KaTeX 함정**: `\,^\circ`(얇은 공백 바로 뒤 위첨자)는 파싱 오류 → `\,{}^\circ`. `\overset{…}` 안의 `^\circ`도 오류 → 문자 °를 쓴다. 긴 반응식을 본문 인라인에 쓰면 모바일에서 넘치므로 `.rxn` 블록으로 뺀다.

**주의: JS 문자열 안에서 TeX 구분자와 명령은 백슬래시를 두 번 쓴다** (`\\(`, `\\)`, `\\Delta`, `\\ce{…}`). 한 번만 쓰면 `\(`가 `(`로 바뀌어 수식이 렌더되지 않는다.

### 콜아웃·비교·퀴즈·표
- `<div class="callout"><strong>제목</strong><p>…</p></div>` — 변형 `.tip`(요령), `.warn`(흔한 실수), `.deep`(심화: 미적분·유도).
- `<div class="compare"><div><h4>A</h4><p>…</p></div><div><h4>B</h4><p>…</p></div></div>` — 2–3개 개념 나란히 비교.
- 표: `<div class="table-wrap"><table><thead>…</thead><tbody>…</tbody></table></div>`, 숫자 열은 `class="num"`.
- 퀴즈(개념 확인, 본문 중간에도 둘 수 있음):
```html
<div class="quiz-q"><p>질문?</p><div class="opts">
  <button class="opt">보기</button><button class="opt" data-correct>정답</button>
</div><div class="quiz-exp">해설</div></div>
```

## 5. JS 헬퍼

### 엔진 `SB` (engine/js/scibook.js)
- `SB.canvas(idOrEl, (ctx,w,h,self)=>{}, {aspect:0.5, height, minHeight, maxHeight})` → `{ctx,w,h,redraw()}`. HiDPI, 리사이즈·테마 변경 시 자동 다시 그림(배경은 `--canvas-bg`). **생성 즉시 한 번 그려지므로**, 그리기 함수 안에서 반환값 변수(`cv`)를 쓰지 말고 넷째 인자 `self`를 쓴다(TDZ 오류 방지).
- `SB.chart(ctx, box|null, {x:[a,b], y:[a,b], logX, logY, xLabel, yLabel, series:[{data:[[x,y]],color,width,dash,fill}], vlines:[{x,color,label,dash,row}], hlines:[{y,…}], points:[{x,y,color,r,label}], bands:[{x0,x1,color}], hbands:[{y0,y1,color}], xFmt, yFmt, xTicks, yTicks})` → `{X,Y,box}`. 기본 여백 왼쪽 58, 아래 46px.
- `SB.loop(idOrEl, (dt,t)=>{})` 화면에 보일 때만 도는 rAF 루프 `{start,stop,toggle,running}`.
- `SB.range(id, fmt, onInput)` → getter `get()`, `get.set(v)`(onInput 호출), `get.set(v, true)`(표시만 갱신), `get.el`. 출력은 `id-out` 요소.
- `SB.seg(id, onChange)` → getter, `get.set(v)`.  `SB.stat(id, html)`.
- `SB.palette()` → `{bg,text,dim,faint,grid,axis,border,surface,accent,accent2,ok,warn,bad,red,green,blue,series[]}`. `SB.color('accent-soft')`, `SB.onTheme(cb)`, `SB.isDark()`.
- `SB.fmt(x,digits)`, `SB.si(x,'J')`, `SB.clamp/lerp/map`, `SB.randn()`, `SB.poisson(λ)`, `SB.wl2rgb(nm)`, `SB.C = {h,c,q,k,NA,R,me,eps0,g}`.
- `SB.three(idOrEl, {camera:[x,y,z], target, fov, autoRotate, minDistance, maxDistance})` → `T = {THREE, scene, camera, renderer, controls, onFrame(cb), label(html,[x,y,z]), material(color,opts)}`.
- `SB.drill(id, gen)`, `SB.math(el)`(동적으로 넣은 HTML의 수식 렌더), `SB.tex(tex, display)` → HTML 문자열.
- `SB.parseNum(str)`, `SB.near(v, ans, tol)`.
- 컨트롤 라벨에 아래첨자(`k<sub>f</sub>`)를 써도 된다(엔진이 감싼다). 한 캔버스의 draw에서 다른 캔버스를 redraw하면 생성 순서에 주의(먼저 만든 캔버스는 즉시 한 번 그려진다).
- 캔버스 글꼴: `ctx.font = "12px " + SB.color("font")` 또는 `SB.color("mono")`.

### 화학 `Chem` (engine/lib/chem.js, elements.js 필요)
- `Chem.el('Fe')` / `Chem.el(26)` → `{Z,sym,ko,en,mass,group,period,block,cat,chi,ie1,ea,radius,rcov,density,mp,bp,config,cpk,radioactive}` (ie1·ea kJ/mol, 반지름 pm, mp·bp K).
- `Chem.parse('Ca(OH)2')` → `{atoms:{Ca:1,O:2,H:2}, charge:0}` (괄호, 수화물 `·5H2O`, 전하 `^2-`, 상태 `(aq)` 처리).
- `Chem.molarMass(f)`, `Chem.composition(f)`(질량 %), `Chem.html(f)`(아래첨자 HTML), `Chem.ce(s)`.
- `Chem.balance(['C3H8','O2'], ['CO2','H2O'])` → `[1,5,3,4]` (이온 반응식도 가능: `'MnO4^-'`, `'H^+'`).
- `Chem.sig(x,n)`, `Chem.sigStr(x,n)`("1.23×10⁻⁴"), `Chem.countSig("0.00450")`.
- `Chem.bisect(f,a,b)`, `Chem.bisectLog(f,lo,hi)`(농도처럼 넓은 범위), `Chem.quadPos(a,b,c)`(양의 근).
- `Chem.const = {NA,R,Ratm,F,h,c,kB,e,me,amu,RH,a0,atm,torr,bar,Kw}`.
- `Chem.periodicTable(el, {prop:'cat'|'block'|'chi'|'ie1'|'ea'|'radius'|'rcov'|'mass'|'density'|'mp'|'bp', onSelect(e), filter(e), info:true, select:'Fe'})` → `{set({prop}), select(sym)}`. `el`은 보통 `.sim-view` 안의 `<div>`.
- `Chem.vsepr(n, m)` → `{bonds:[[x,y,z]…], lps, shape, en, angle, electronGeom, steric}`; `Chem.vseprSpec(n,m,'C','H',1.09)` → 분자 모형 spec.
- `Chem.molecule(el, {atoms:[['O',x,y,z],…], bonds:[[i,j,order]], lonePairs:[[i,dx,dy,dz]], labels, autoRotate, style:'ball'|'space'})` → `{T, set(spec), group}` (three.js 필요, 좌표 Å).
- `Chem.ramp(t)` 연속 색, `Chem.catColor(cat,a)`, `Chem.cpk(sym)`.

## 6. 검증 (제출 전 필수)

```bash
python3 tools/build.py            # 생성 파일 갱신 + 규칙 검사 (오류가 0이어야 함)
python3 -m http.server 8000 &     # 저장소 루트에서
node tools/smoke.mjs http://localhost:8000 <slug>   # JS 오류·KaTeX 오류·360px 가로 넘침·위젯 검사
```
그리고 연습문제마다 정답을 실제로 입력해 "정답입니다"가 나오는지, 시뮬레이터의 극단값(슬라이더 양 끝)에서 NaN·음수·화면 밖 그림이 없는지 확인한다.
