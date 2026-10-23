/* ==========================================================================
   SciBook lib/materials.js — 재료과학 라이브러리 (전역 Mat)
   수치 도구와 시드 난수, 재료 물성 자료표(성질 지도·성능 지수), 결정 기하
   (충진율·이론 밀도·틈새 자리·이온 반지름과 배위수), 결함(점결함·전위 응력장·
   결정립 크기), 확산(재료 자료표·다르켄·커켄달·마타노·결정립계 확산·반응층),
   탄성(등방 상수 변환·주응력·모어 원·폰 미제스·입방정 이축 탄성률·스토니·이층판
   휨·열응력), 소성(공칭/진응력·홀로몬·인장 곡선 모형·슈미트 인자·테일러·홀–페치·
   석출 강화·나노압입 올리버–파르·재결정·결정립 성장), 파괴(그리피스·K·와이블·
   피로 바스킨/코핀–맨슨/굿맨/마이너·파리스·크리프 노턴/라슨–밀러·변형 기구),
   실제 상태도(Cu–Ni·Pb–Sn·Al–Si·Al–Cu·Fe–Fe₃C 강 영역)와 지렛대·미세 구성 요소,
   상변태 속도론(JMAK·아브라미 피팅·핵생성–성장 TTT 모형·냉각 경로 가산 법칙·
   코이스티넨–마르부르거·LSW), 응고(조성적 과냉·초크랄스키·보론코프·덴드라이트·
   손턴 구조 영역·제너 고정), 세라믹(VFT 점도·소결 목 성장·열충격), 고분자(플로리
   분포·자유 결합 사슬·폭스·WLF·점탄성 모형·고무 탄성·겔화·경화), 복합재료(보이트·
   로이스·하신–슈트리크만·할핀–차이·섬유 길이·CTE·열전도 모형·비축 탄성률),
   전기·유전(마티센·노르트하임·디바이 완화·EOT·강유전 이력), 열·광학(모스 퍼텐셜
   열팽창·셀마이어·반사·흡수·타우크·파장→색), 신뢰성(필링–베드워스·블랙·블레흐·
   응력 이동·노리스–란츠베르크·펙·TDDB), 분석(전자 파장·셰르처·카나야–오카야마·
   특성 X선·XPS·IMFP·RBS·SIMS 응답·AFM 거칠기·윌리엄슨–홀·sin²ψ),
   미시 시뮬레이터(포츠 결정립 성장·칸–힐리아드 스피노달·핵생성–성장 격자·
   석출물 조대화·결정립계 확산 격자·무작위 사슬·보로노이 결정립).
   의존: 없음(그리기는 장 스크립트가 SB로 한다. wavelengthRGB만 고정색을 돌려준다)

   단위 관례 (함수 주석에 다른 단위가 적히면 그쪽을 따른다)
   - 응력·강도 MPa, 탄성률 GPa, 파괴 인성 MPa·√m, 길이 m(기계적 성질 공식),
     결정 기하는 nm, 밀도 g/cm³, 몰 질량 g/mol.
   - 온도 K(섭씨는 이름에 C가 붙은 인자·자료), 활성화 에너지는 kJ/mol(이름에 eV면 eV).
   - 확산 계수 자료표(Mat.diffData)는 캘리스터 관례 D0[m²/s], Q[kJ/mol].
   - 열팽창 계수 자료표는 ppm/K(=1e-6/K), 열전도도 W/(m·K), 전기 저항률 Ω·m.
   - 상태도 조성은 wt%(Mat.diagrams 각 항목의 unit), 온도 °C.
   - 자료표 값은 교재·핸드북의 상온 대표값이다. 박막은 공정에 따라 크게 다르다.
   ========================================================================== */
(function () {
  "use strict";
  const M = (window.Mat = {});
  const PI = Math.PI, exp = Math.exp, ln = Math.log, sqrt = Math.sqrt, abs = Math.abs, pow = Math.pow;

  /* ------------------------------------------------------------ 상수 (CODATA 2018) */
  const C = (M.C = {
    R: 8.314462618, kB: 1.380649e-23, kB_eV: 8.617333262e-5, NA: 6.02214076e23, e: 1.602176634e-19,
    h: 6.62607015e-34, hbar: 1.054571817e-34, c: 299792458, me: 9.1093837015e-31, eps0: 8.8541878128e-12,
    T0: 273.15, L0: 2.44e-8, hc_eVnm: 1239.84198,
  });
  M.C2K = (t) => t + C.T0;
  M.K2C = (t) => t - C.T0;

  /* ------------------------------------------------------------ 수치 도구 */
  M.clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
  M.linspace = (a, b, n) => Array.from({ length: n }, (_, i) => a + ((b - a) * i) / (n - 1));
  M.logspace = (a, b, n) => M.linspace(Math.log10(a), Math.log10(b), n).map((v) => 10 ** v);
  /** 이분법. f(a)·f(b) < 0 이어야 한다(아니면 NaN). */
  M.bisect = function (f, a, b, tol = 1e-12, it = 200) {
    let fa = f(a), fb = f(b);
    if (fa === 0) return a;
    if (fb === 0) return b;
    if (!(fa * fb < 0)) return NaN;
    for (let i = 0; i < it; i++) {
      const m = 0.5 * (a + b), fm = f(m);
      if (fm === 0 || abs(b - a) < tol * (1 + abs(m))) return m;
      if (fa * fm < 0) { b = m; fb = fm; } else { a = m; fa = fm; }
    }
    return 0.5 * (a + b);
  };
  /** 로그 축 이분법(양수 구간, 여러 자릿수에 걸친 근) */
  M.bisectLog = (f, a, b, tol = 1e-10) => exp(M.bisect((u) => f(exp(u)), ln(a), ln(b), tol));
  /** 심프슨 적분 */
  M.simpson = function (f, a, b, n = 200) {
    if (n % 2) n++;
    const hh = (b - a) / n;
    let s = f(a) + f(b);
    for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * hh);
    return (s * hh) / 3;
  };
  /** 사다리꼴 적분(표본 배열) */
  M.trapz = function (xs, ys) {
    let s = 0;
    for (let i = 1; i < xs.length; i++) s += 0.5 * (ys[i] + ys[i - 1]) * (xs[i] - xs[i - 1]);
    return s;
  };
  /** 선형 보간: 점열 pts=[[x,y],…] (x 오름차순 또는 내림차순)에서 x의 y. 범위 밖은 끝값으로 외삽하지 않고 NaN */
  M.interp = function (pts, x, extrapolate = false) {
    const n = pts.length;
    if (!n) return NaN;
    const inc = pts[n - 1][0] >= pts[0][0];
    for (let i = 1; i < n; i++) {
      const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
      if ((inc && x >= x0 && x <= x1) || (!inc && x <= x0 && x >= x1)) return x1 === x0 ? y0 : y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
    }
    if (!extrapolate) return NaN;
    const [a, b] = (inc ? x < pts[0][0] : x > pts[0][0]) ? [pts[0], pts[1]] : [pts[n - 2], pts[n - 1]];
    return a[1] + ((b[1] - a[1]) * (x - a[0])) / (b[0] - a[0]);
  };
  /** 최소제곱 직선 y = a + b x → {a, b, r2} */
  M.linfit = function (xs, ys) {
    const n = xs.length;
    let sx = 0, sy = 0, sxx = 0, sxy = 0, syy = 0;
    for (let i = 0; i < n; i++) { sx += xs[i]; sy += ys[i]; sxx += xs[i] * xs[i]; sxy += xs[i] * ys[i]; syy += ys[i] * ys[i]; }
    const b = (n * sxy - sx * sy) / (n * sxx - sx * sx), a = (sy - b * sx) / n;
    const r = (n * sxy - sx * sy) / sqrt((n * sxx - sx * sx) * (n * syy - sy * sy));
    return { a, b, r2: r * r };
  };
  /** 오차 함수(A&S 7.1.26 대신 정밀한 체비쇼프형 근사, |오차| < 1.2e-7) */
  M.erfc = function (x) {
    const z = abs(x), t = 1 / (1 + 0.5 * z);
    const r = t * exp(-z * z - 1.26551223 + t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + t * (-0.82215223 + t * 0.17087277)))))))));
    return x >= 0 ? r : 2 - r;
  };
  M.erf = (x) => 1 - M.erfc(x);
  /** 감마 함수(란초스) */
  M.gamma = function (z) {
    if (z < 0.5) return PI / (Math.sin(PI * z) * M.gamma(1 - z));
    const g = 7, cf = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    z -= 1;
    let x = cf[0];
    for (let i = 1; i < g + 2; i++) x += cf[i] / (z + i);
    const t = z + g + 0.5;
    return sqrt(2 * PI) * pow(t, z + 0.5) * exp(-t) * x;
  };
  /** 대칭 3×3 행렬 고윳값(야코비 회전) → {values(내림차순), vectors(열 벡터 배열)} */
  M.eigSym3 = function (A) {
    const a = A.map((r) => r.slice()), V = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    for (let sweep = 0; sweep < 50; sweep++) {
      let off = 0;
      for (let p = 0; p < 3; p++) for (let q = p + 1; q < 3; q++) off += a[p][q] * a[p][q];
      if (off < 1e-24) break;
      for (let p = 0; p < 3; p++) for (let q = p + 1; q < 3; q++) {
        if (abs(a[p][q]) < 1e-300) continue;
        const th = 0.5 * Math.atan2(2 * a[p][q], a[q][q] - a[p][p]), c = Math.cos(th), s = Math.sin(th);
        for (let k = 0; k < 3; k++) { const akp = a[k][p], akq = a[k][q]; a[k][p] = c * akp - s * akq; a[k][q] = s * akp + c * akq; }
        for (let k = 0; k < 3; k++) { const apk = a[p][k], aqk = a[q][k]; a[p][k] = c * apk - s * aqk; a[q][k] = s * apk + c * aqk; }
        for (let k = 0; k < 3; k++) { const vkp = V[k][p], vkq = V[k][q]; V[k][p] = c * vkp - s * vkq; V[k][q] = s * vkp + c * vkq; }
      }
    }
    const idx = [0, 1, 2].sort((i, j) => a[j][j] - a[i][i]);
    return { values: idx.map((i) => a[i][i]), vectors: idx.map((i) => [V[0][i], V[1][i], V[2][i]]) };
  };

  /** 시드 난수(mulberry32) — 같은 seed면 늘 같은 수열. rng() ∈ [0,1), rng.normal(), rng.int(n) */
  M.rng = function (seed = 1) {
    let s = seed >>> 0 || 1;
    const r = function () {
      s = (s + 0x6d2b79f5) >>> 0;
      let t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    let spare = null;
    r.normal = function () {
      if (spare !== null) { const v = spare; spare = null; return v; }
      let u, v, q;
      do { u = 2 * r() - 1; v = 2 * r() - 1; q = u * u + v * v; } while (q >= 1 || q === 0);
      const f = sqrt((-2 * ln(q)) / q);
      spare = v * f;
      return u * f;
    };
    r.int = (n) => Math.floor(r() * n);
    return r;
  };

  /* ------------------------------------------------------------ 재료 물성 자료표 */
  /* 열: cls 분류(metal·ceramic·glass·semi·polymer·composite·natural), rho g/cm³, E GPa, nu,
     sy 강도 MPa(금속·고분자: 항복 강도, 세라믹·유리·반도체: 굽힘 강도 대표값), uts 인장 강도 MPa,
     KIC MPa√m, cte ppm/K, k W/(m·K), re 전기 저항률 Ω·m(절연체는 하한 대표값), Tm 녹는점 K
     (고분자·유리는 Tg를 따로), eps 상대 유전율(저주파), Eg eV, tcr 저항 온도 계수 1/K, cost 대략 USD/kg.
     값은 Callister, Ashby, ASM, CRC 핸드북의 상온 대표값(범위 가운데쯤)이다. null = 의미 없음·자료 없음. */
  const db = [
    // 금속
    ["Al", "알루미늄(순)", "metal", 2.70, 69, 0.33, 35, 90, 40, 23.6, 237, 2.65e-8, 933, null, null, 0.00429, 2.5],
    ["Al6061", "Al 6061-T6", "metal", 2.70, 69, 0.33, 276, 310, 29, 23.6, 167, 3.99e-8, 855, null, null, null, 3],
    ["Cu", "구리(순)", "metal", 8.94, 110, 0.34, 69, 220, 100, 17.0, 398, 1.68e-8, 1358, null, null, 0.00393, 9],
    ["Ag", "은", "metal", 10.49, 83, 0.37, 55, 125, 100, 18.9, 429, 1.59e-8, 1235, null, null, 0.0038, 800],
    ["Au", "금", "metal", 19.32, 79, 0.42, 30, 130, 100, 14.2, 318, 2.44e-8, 1337, null, null, 0.0034, 60000],
    ["Ni", "니켈(순)", "metal", 8.90, 207, 0.31, 138, 480, 100, 13.3, 90.7, 6.99e-8, 1728, null, null, 0.0068, 15],
    ["Co", "코발트", "metal", 8.90, 209, 0.31, 345, 800, 50, 13.0, 100, 6.24e-8, 1768, null, null, 0.0060, 35],
    ["Ru", "루테늄", "metal", 12.45, 447, 0.30, 400, 500, 10, 6.4, 117, 7.1e-8, 2607, null, null, 0.0042, 15000],
    ["W", "텅스텐", "metal", 19.3, 411, 0.28, 760, 960, 8, 4.5, 173, 5.6e-8, 3695, null, null, 0.0045, 40],
    ["Mo", "몰리브데넘", "metal", 10.22, 329, 0.31, 500, 650, 20, 4.8, 138, 5.34e-8, 2896, null, null, 0.0044, 40],
    ["Ta", "탄탈럼", "metal", 16.6, 186, 0.34, 165, 205, 80, 6.3, 57.5, 1.31e-7, 3290, null, null, 0.0038, 300],
    ["Ti", "티타늄(순)", "metal", 4.51, 103, 0.34, 275, 345, 60, 8.6, 21.9, 4.2e-7, 1941, null, null, 0.0038, 12],
    ["Ti64", "Ti-6Al-4V", "metal", 4.43, 114, 0.34, 830, 900, 55, 8.6, 6.7, 1.71e-6, 1877, null, null, null, 25],
    ["Fe", "철(순)", "metal", 7.87, 207, 0.29, 130, 262, 100, 11.8, 80, 9.71e-8, 1811, null, null, 0.0065, 0.5],
    ["St1020", "탄소강 1020", "metal", 7.85, 207, 0.30, 210, 380, 80, 11.7, 51.9, 1.6e-7, 1793, null, null, null, 0.8],
    ["St4340", "합금강 4340(담금질·뜨임)", "metal", 7.85, 207, 0.30, 1620, 1760, 50, 12.3, 44.5, 2.48e-7, 1700, null, null, null, 2],
    ["SS304", "스테인리스강 304", "metal", 8.00, 193, 0.30, 205, 515, 200, 17.3, 16.2, 7.2e-7, 1700, null, null, null, 4],
    ["IN718", "니켈 초합금 718", "metal", 8.19, 200, 0.29, 1030, 1240, 100, 13.0, 11.4, 1.25e-6, 1609, null, null, null, 30],
    ["AZ31", "마그네슘 합금 AZ31", "metal", 1.77, 45, 0.35, 200, 260, 28, 26.0, 96, 9.2e-8, 905, null, null, null, 4],
    ["Sn", "주석", "metal", 7.29, 44, 0.33, 11, 15, 30, 23.4, 66.8, 1.15e-7, 505, null, null, 0.0045, 25],
    ["SnPb", "Sn–37Pb 공정 솔더", "metal", 8.40, 32, 0.36, 27, 52, 30, 24.7, 50.9, 1.45e-7, 456, null, null, null, 15],
    ["SAC305", "SAC305 무연 솔더", "metal", 7.38, 51, 0.36, 36, 49, 30, 21.7, 58.7, 1.32e-7, 490, null, null, null, 40],
    // 세라믹
    ["Al2O3", "알루미나 (99.5%)", "ceramic", 3.89, 380, 0.22, 330, null, 4.2, 7.4, 30, 1e13, 2327, 9.8, 8.8, null, 3],
    ["AlN", "질화 알루미늄", "ceramic", 3.26, 330, 0.24, 300, null, 3.0, 4.5, 170, 1e12, 2473, 8.8, 6.0, null, 60],
    ["SiC", "탄화 규소 (소결)", "ceramic", 3.21, 410, 0.14, 450, null, 3.5, 4.0, 120, 1e2, 3003, 9.7, null, null, 20],
    ["Si3N4", "질화 규소 (소결)", "ceramic", 3.30, 304, 0.27, 700, null, 5.0, 3.3, 30, 1e12, 2173, 7.5, 5.0, null, 40],
    ["ZrO2", "지르코니아 (3Y-TZP)", "ceramic", 6.05, 205, 0.31, 1000, null, 7.0, 10.3, 2.7, 1e10, 2988, 25, 5.8, null, 30],
    ["Y2O3", "이트리아", "ceramic", 5.01, 175, 0.30, 180, null, 1.5, 8.1, 13, 1e12, 2698, 12, 5.6, null, 50],
    ["Diamond", "다이아몬드", "ceramic", 3.51, 1050, 0.10, 1500, null, 5.3, 1.0, 2000, 1e12, 3800, 5.7, 5.47, null, 1e6],
    ["TiN", "질화 티타늄 (괴상)", "ceramic", 5.22, 450, 0.25, null, null, 4, 9.4, 29, 2.2e-7, 3203, null, null, null, null],
    ["HfO2", "산화 하프늄 (박막 대표값)", "ceramic", 9.68, 240, 0.25, null, null, 1.5, 6.0, 1.1, 1e12, 3031, 20, 5.7, null, null],
    // 유리
    ["SiO2", "용융 실리카", "glass", 2.20, 73, 0.17, 104, null, 0.79, 0.55, 1.38, 1e18, 1983, 3.9, 9.0, null, 20],
    ["SodaLime", "소다석회 유리", "glass", 2.50, 69, 0.23, 69, null, 0.75, 9.0, 1.0, 1e10, null, 6.9, null, null, 1],
    ["Boro", "붕규산 유리", "glass", 2.23, 64, 0.20, 69, null, 0.77, 3.3, 1.14, 1e13, null, 4.6, null, null, 3],
    ["SiCOH", "저유전 SiCOH (k≈2.7, 박막)", "glass", 1.40, 8, 0.25, null, null, 0.3, 12, 0.3, 1e13, null, 2.7, 8.0, null, null],
    // 반도체
    ["Si", "실리콘", "semi", 2.329, 165, 0.22, 500, null, 0.9, 2.6, 148, 2.3e3, 1687, 11.7, 1.12, null, 50],
    ["Ge", "저마늄", "semi", 5.323, 103, 0.26, 100, null, 0.6, 5.9, 60, 0.46, 1211, 16.0, 0.66, null, 1500],
    ["GaAs", "갈륨 비소", "semi", 5.32, 86, 0.31, 100, null, 0.44, 5.73, 55, 3.3e6, 1511, 12.9, 1.42, null, 1000],
    ["GaN", "질화 갈륨", "semi", 6.15, 295, 0.23, 300, null, 0.8, 5.6, 130, 1e8, 2773, 9.5, 3.39, null, 5000],
    ["4H-SiC", "4H-SiC 단결정", "semi", 3.21, 450, 0.21, 400, null, 3.3, 4.0, 370, 1e9, 3003, 9.7, 3.26, null, 5000],
    // 고분자
    ["HDPE", "고밀도 폴리에틸렌", "polymer", 0.96, 1.08, 0.46, 26, 30, 2, 120, 0.48, 1e15, 410, 2.3, null, null, 1.5],
    ["PP", "폴리프로필렌", "polymer", 0.91, 1.4, 0.42, 33, 35, 3, 100, 0.12, 1e14, 448, 2.2, null, null, 1.5],
    ["PMMA", "PMMA(아크릴)", "polymer", 1.19, 3.0, 0.37, 60, 70, 1.0, 70, 0.19, 1e13, null, 3.0, null, null, 3],
    ["PC", "폴리카보네이트", "polymer", 1.20, 2.4, 0.36, 62, 66, 2.2, 68, 0.20, 1e14, null, 3.0, null, null, 4],
    ["PTFE", "PTFE(테플론)", "polymer", 2.17, 0.5, 0.46, 12, 25, 1.5, 135, 0.25, 1e16, 600, 2.1, null, null, 15],
    ["PA66", "나일론 6,6", "polymer", 1.14, 2.8, 0.39, 60, 80, 3, 80, 0.24, 1e12, 538, 3.6, null, null, 4],
    ["Epoxy", "에폭시", "polymer", 1.20, 2.6, 0.35, 60, 70, 0.6, 60, 0.19, 1e13, null, 3.6, null, null, 6],
    ["PI", "폴리이미드(캡톤)", "polymer", 1.42, 2.5, 0.34, 69, 231, 3, 20, 0.12, 1e15, null, 3.4, null, null, 50],
    ["PDMS", "PDMS(실리콘 고무)", "polymer", 0.97, 0.002, 0.49, null, 6, null, 310, 0.15, 1e13, null, 2.7, null, null, 10],
    // 복합재료·자연 재료
    ["CFRP", "탄소 섬유 강화 플라스틱(유사 등방)", "composite", 1.55, 60, 0.30, 600, 600, 20, 2.0, 5, 1e-4, null, null, null, null, 40],
    ["GFRP", "유리 섬유 강화 플라스틱", "composite", 1.90, 25, 0.25, 200, 200, 15, 15, 0.4, 1e12, null, 4.5, null, null, 4],
    ["FR4", "FR-4 기판(면 방향)", "composite", 1.85, 24, 0.14, 400, 300, 10, 14, 0.3, 1e12, null, 4.4, null, null, 10],
    ["EMC", "에폭시 몰딩 컴파운드(실리카 85 wt%)", "composite", 2.00, 22, 0.25, 150, null, 2, 9, 0.9, 1e13, null, 3.9, null, null, 10],
    ["Wood", "목재(소나무, 결 방향)", "natural", 0.50, 11, 0.30, 50, 80, 5, 4, 0.12, 1e12, null, 2, null, null, 1],
    ["Concrete", "콘크리트", "natural", 2.40, 30, 0.20, 3, 3, 0.5, 12, 1.4, 1e8, null, 6, null, null, 0.1],
  ];
  const cols = ["id", "name", "cls", "rho", "E", "nu", "sy", "uts", "KIC", "cte", "k", "re", "Tm", "eps", "Eg", "tcr", "cost"];
  M.db = db.map((r) => Object.fromEntries(cols.map((c, i) => [c, r[i]])));
  M.dbIndex = Object.fromEntries(M.db.map((m) => [m.id, m]));
  /** id로 재료 찾기 */
  M.mat = (id) => M.dbIndex[id];
  /** 고분자·유리의 유리 전이 온도 Tg[K] 대표값 */
  M.Tg = { HDPE: 163, PP: 263, PMMA: 378, PC: 423, PA66: 330, Epoxy: 423, PI: 633, PDMS: 148, SodaLime: 837, Boro: 838, SiO2: 1473, FR4: 408, EMC: 423 };
  M.classNames = { metal: "금속", ceramic: "세라믹", glass: "유리", semi: "반도체", polymer: "고분자", composite: "복합재료", natural: "자연 재료" };
  /** 성능 지수 — p는 db 항목. 값이 클수록 좋다. (강도 MPa, E GPa, rho g/cm³) */
  M.indices = {
    tieStiff: { label: "가볍고 단단한 봉 E/ρ", f: (p) => p.E / p.rho },
    beamStiff: { label: "가볍고 단단한 보 E^{1/2}/ρ", f: (p) => sqrt(p.E) / p.rho },
    plateStiff: { label: "가볍고 단단한 판 E^{1/3}/ρ", f: (p) => Math.cbrt(p.E) / p.rho },
    tieStrong: { label: "가볍고 강한 봉 σ/ρ", f: (p) => (p.sy == null ? NaN : p.sy / p.rho) },
    beamStrong: { label: "가볍고 강한 보 σ^{2/3}/ρ", f: (p) => (p.sy == null ? NaN : pow(p.sy, 2 / 3) / p.rho) },
    spring: { label: "탄성 에너지 저장 σ²/E", f: (p) => (p.sy == null ? NaN : (p.sy * p.sy) / (p.E * 1e3)) },
    shock: { label: "열충격 저항 σ(1−ν)/(Eα) [K]", f: (p) => (p.sy == null ? NaN : (p.sy * (1 - p.nu)) / (p.E * 1e3 * p.cte * 1e-6)) },
    spreader: { label: "열 분산 κ, CTE 정합", f: (p) => p.k },
    tough: { label: "파괴 전 항복 K_IC/σ_y", f: (p) => (p.sy == null || p.KIC == null ? NaN : p.KIC / p.sy) },
  };
  /** 열충격 저항 ΔT_c = σ_f(1−ν)/(E α) [K] (σ MPa, E GPa, α ppm/K) */
  M.thermalShockR = (sf, E, nu, cte) => (sf * (1 - nu)) / (E * 1e3 * cte * 1e-6);

  /* ------------------------------------------------------------ 결정 기하 */
  /** 단위정 원자 수·충진율·격자 상수(원자 반지름 R, nm) */
  M.cells = {
    SC: { n: 1, apf: PI / 6, a: (R) => 2 * R, cn: 6 },
    BCC: { n: 2, apf: (PI * sqrt(3)) / 8, a: (R) => (4 * R) / sqrt(3), cn: 8 },
    FCC: { n: 4, apf: PI / (3 * sqrt(2)), a: (R) => 2 * sqrt(2) * R, cn: 12 },
    HCP: { n: 6, apf: PI / (3 * sqrt(2)), a: (R) => 2 * R, cn: 12 },
    DIA: { n: 8, apf: (PI * sqrt(3)) / 16, a: (R) => (8 * R) / sqrt(3), cn: 4 },
  };
  /** 이론 밀도 ρ = nA/(V_c N_A) [g/cm³] — n 단위정 원자 수, A g/mol, Vc nm³ */
  M.densityFrom = (n, A, Vc_nm3) => (n * A) / (Vc_nm3 * 1e-21 * C.NA);
  /** 구조 이름·원자 반지름(nm)·몰 질량으로 이론 밀도. HCP는 c/a(기본 이상값 1.633) */
  M.theoreticalDensity = function (struct, R, A, ca = sqrt(8 / 3)) {
    const s = M.cells[struct];
    // HCP: c/a < 이상값이면 층 사이 원자가 먼저 닿는다 → a = 2R/√(1/3 + (c/a)²/4)
    const a = struct === "HCP" && ca < sqrt(8 / 3) ? (2 * R) / sqrt(1 / 3 + (ca * ca) / 4) : s.a(R);
    const Vc = struct === "HCP" ? ((3 * sqrt(3)) / 2) * a * a * (ca * a) : a ** 3;
    return M.densityFrom(s.n, A, Vc);
  };
  /** 금속 원소: 구조, 원자 반지름 R(nm, Callister 표), 몰 질량, 실측 밀도, 전기음성도, 원자가 */
  M.metals = {
    Al: { s: "FCC", R: 0.1431, A: 26.98, rho: 2.71, chi: 1.61, val: 3 },
    Cu: { s: "FCC", R: 0.1278, A: 63.55, rho: 8.96, chi: 1.90, val: 1 },
    Ni: { s: "FCC", R: 0.1246, A: 58.69, rho: 8.90, chi: 1.91, val: 2 },
    Ag: { s: "FCC", R: 0.1445, A: 107.87, rho: 10.49, chi: 1.93, val: 1 },
    Au: { s: "FCC", R: 0.1442, A: 196.97, rho: 19.32, chi: 2.54, val: 1 },
    Pt: { s: "FCC", R: 0.1387, A: 195.08, rho: 21.45, chi: 2.28, val: 2 },
    Pb: { s: "FCC", R: 0.1750, A: 207.2, rho: 11.35, chi: 2.33, val: 2 },
    Fe: { s: "BCC", R: 0.1241, A: 55.85, rho: 7.87, chi: 1.83, val: 2 },
    Cr: { s: "BCC", R: 0.1249, A: 52.00, rho: 7.19, chi: 1.66, val: 3 },
    Mo: { s: "BCC", R: 0.1363, A: 95.95, rho: 10.22, chi: 2.16, val: 4 },
    W: { s: "BCC", R: 0.1371, A: 183.84, rho: 19.3, chi: 2.36, val: 4 },
    Ta: { s: "BCC", R: 0.1430, A: 180.95, rho: 16.6, chi: 1.5, val: 5 },
    Ti: { s: "HCP", R: 0.1445, A: 47.87, rho: 4.51, chi: 1.54, val: 4, ca: 1.587 },
    Mg: { s: "HCP", R: 0.1604, A: 24.31, rho: 1.74, chi: 1.31, val: 2, ca: 1.624 },
    Zn: { s: "HCP", R: 0.1332, A: 65.38, rho: 7.13, chi: 1.65, val: 2, ca: 1.856 },
    Co: { s: "HCP", R: 0.1253, A: 58.93, rho: 8.90, chi: 1.88, val: 2, ca: 1.623 },
    Ru: { s: "HCP", R: 0.1339, A: 101.07, rho: 12.45, chi: 2.2, val: 3, ca: 1.582 },
  };
  /** 흄–로더리 규칙 점검(a 용매, b 용질 금속 기호) → {dR(%), sameStruct, dChi, sameVal, likely} */
  M.humeRothery = function (a, b) {
    const A = M.metals[a], B = M.metals[b];
    const dR = (100 * abs(A.R - B.R)) / A.R; // a를 용매로 본 크기 차(%)
    const sameStruct = A.s === B.s, dChi = abs(A.chi - B.chi), sameVal = A.val === B.val;
    return { dR, sameStruct, dChi, sameVal, likely: dR < 15 && sameStruct && dChi < 0.4 };
  };
  /** 틈새 자리에 들어갈 수 있는 최대 구 반지름 / 원자 반지름 */
  M.interstitial = { FCC: { oct: sqrt(2) - 1, tet: sqrt(1.5) - 1 }, BCC: { oct: 2 / sqrt(3) - 1, tet: sqrt(5 / 3) - 1 } };
  /** 섀넌 이온 반지름(pm, 배위수 6 기준 대표값; Cs⁺는 8배위) */
  M.ionicRadii = {
    "Li+": 76, "Na+": 102, "K+": 138, "Cs+": 174, "Mg2+": 72, "Ca2+": 100, "Sr2+": 118, "Ba2+": 135, "Zn2+": 74,
    "Fe2+": 78, "Fe3+": 64.5, "Al3+": 53.5, "Y3+": 90, "Ti4+": 60.5, "Zr4+": 72, "Hf4+": 71, "Si4+": 40, "Pb2+": 119, "Ni2+": 69,
    "O2-": 140, "F-": 133, "Cl-": 181, "Br-": 196, "I-": 220, "S2-": 184, "N3-": 146,
  };
  /** 반지름 비 → 예상 배위수와 배위 다면체 */
  M.radiusRatioCN = function (r) {
    if (r < 0.155) return { cn: 2, geom: "선형" };
    if (r < 0.225) return { cn: 3, geom: "삼각형" };
    if (r < 0.414) return { cn: 4, geom: "사면체" };
    if (r < 0.732) return { cn: 6, geom: "팔면체" };
    if (r < 1) return { cn: 8, geom: "정육면체" };
    return { cn: 12, geom: "입방 팔면체" };
  };
  /** 배위수 cn의 한계 반지름 비(양이온이 음이온 껍질에 딱 닿는 비) */
  M.criticalRatio = { 3: 2 / sqrt(3) - 1, 4: sqrt(1.5) - 1, 6: sqrt(2) - 1, 8: sqrt(3) - 1 };
  /** 입방정 [uvw] 방향 선밀도(원자/nm)와 (hkl) 면 밀도(원자/nm²) — 단순 표 구현(FCC·BCC, 저지수만) */
  M.linearDensity = function (struct, a, dir) {
    const key = dir.map(Math.abs).sort((x, y) => y - x).join("");
    const L = a * sqrt(dir[0] ** 2 + dir[1] ** 2 + dir[2] ** 2);
    const tab = { FCC: { 100: 1, 110: 2, 111: 1 }, BCC: { 100: 1, 110: 1, 111: 2 }, SC: { 100: 1, 110: 1, 111: 1 } };
    const n = tab[struct] && tab[struct][key];
    return n == null ? NaN : n / L;
  };
  M.planarDensity = function (struct, a, plane) {
    const key = plane.map(Math.abs).sort((x, y) => y - x).join("");
    const tab = { FCC: { 100: [2, 1], 110: [2, sqrt(2)], 111: [2, sqrt(3) / 2] }, BCC: { 100: [1, 1], 110: [2, sqrt(2)], 111: [0.5, sqrt(3) / 2] }, SC: { 100: [1, 1], 110: [1, sqrt(2)], 111: [0.5, sqrt(3) / 2] } };
    const t = tab[struct] && tab[struct][key];
    return t ? t[0] / (t[1] * a * a) : NaN; // 원자 수 / 면적
  };
  /** 입방정 면 간격 d_hkl = a/√(h²+k²+l²) */
  M.dCubic = (a, h, k, l) => a / sqrt(h * h + k * k + l * l);

  /* ------------------------------------------------------------ 결함 */
  /** 평형 공공 분율 Nv/N = exp(−Qv/kT) (Qv eV, T K), 엔트로피 항 S/k 선택 */
  M.vacancyFraction = (QvEV, T, Sk = 0) => exp(Sk - QvEV / (C.kB_eV * T));
  /** 단위 부피당 원자 수 N = N_A ρ / A [m⁻³] (ρ g/cm³) */
  M.atomDensity = (rho, A) => ((C.NA * rho) / A) * 1e6;
  /** 쇼트키(양이온·음이온 공공 쌍) 또는 프렌켈 쌍 분율: n/N = exp(−Q/2kT) */
  M.pairDefectFraction = (QeV, T) => exp(-QeV / (2 * C.kB_eV * T));
  /** 칼날 전위 응력장(등방, 전위선 z, 버거스 벡터 b∥x, 미끄럼면 y=0). 반환 {sxx, syy, sxy, szz} (G와 같은 단위) */
  M.edgeStress = function (x, y, G, b, nu) {
    const r2 = x * x + y * y, D = (G * b) / (2 * PI * (1 - nu));
    if (r2 < 1e-30) return { sxx: 0, syy: 0, sxy: 0, szz: 0 };
    const sxx = (-D * y * (3 * x * x + y * y)) / (r2 * r2), syy = (D * y * (x * x - y * y)) / (r2 * r2), sxy = (D * x * (x * x - y * y)) / (r2 * r2);
    return { sxx, syy, sxy, szz: nu * (sxx + syy) };
  };
  /** 나사 전위 전단 응력 τ_θz = Gb/(2πr) */
  M.screwStress = (r, G, b) => (G * b) / (2 * PI * r);
  /** 같은 미끄럼계 두 평행 칼날 전위 사이 미끄럼 방향 힘(단위 길이당) F_x = b·σ_xy(x, y) — 같은 부호 버거스 벡터 */
  M.edgeForce = (x, y, G, b, nu) => b * M.edgeStress(x, y, G, b, nu).sxy;
  /** 전위 단위 길이 에너지 [J/m] — kind "edge"|"screw", R 바깥 반지름, r0 핵 반지름(m) */
  M.dislocationEnergy = function (G_Pa, b, nu, kind = "edge", R = 1e-6, r0 = null) {
    r0 = r0 || b;
    const f = kind === "edge" ? 1 / (1 - nu) : 1;
    return ((G_Pa * b * b) / (4 * PI)) * f * ln(R / r0);
  };
  /** ASTM 결정립 크기 번호: 100배에서 1 in²당 결정립 수 N → G = 1 + log₂N. 배율 mag의 사진이면 N₁₀₀ = N·(mag/100)² */
  M.astmG = (N, mag = 100) => 1 + Math.log2(N * (mag / 100) ** 2);
  M.astmN = (G) => 2 ** (G - 1);
  /** ASTM E112 평균 선분 교차 길이 ℓ(mm) ↔ G: G = −6.6439 log₁₀ℓ − 3.288 (ℓ은 mm) */
  M.astmFromIntercept = (l_mm) => -6.643856 * Math.log10(l_mm) - 3.288;
  M.interceptFromAstm = (G) => 10 ** (-(G + 3.288) / 6.643856);
  /** 평균 선분 교차 길이 = (선 전체 길이)/(교차 수·배율) */
  M.meanIntercept = (Ltot, nIntersect, mag = 1) => Ltot / (nIntersect * mag);

  /* ------------------------------------------------------------ 확산 */
  /** 확산 자료(Callister 표 5.2 등): D0 m²/s, Q kJ/mol. 반도체 쪽 대표값 포함 */
  M.diffData = {
    "Fe in α-Fe": { D0: 2.8e-4, Q: 251 },
    "Fe in γ-Fe": { D0: 5.0e-5, Q: 284 },
    "C in α-Fe": { D0: 1.1e-6, Q: 87.4 },
    "C in γ-Fe": { D0: 2.3e-5, Q: 148 },
    "Cu in Cu": { D0: 7.8e-5, Q: 211 },
    "Zn in Cu": { D0: 2.4e-5, Q: 189 },
    "Al in Al": { D0: 2.3e-4, Q: 144 },
    "Cu in Al": { D0: 6.5e-5, Q: 136 },
    "Mg in Al": { D0: 1.2e-4, Q: 130 },
    "Cu in Ni": { D0: 2.7e-5, Q: 256 },
    "Ni in Ni": { D0: 1.9e-4, Q: 284 },
    "Cu in Si": { D0: 4.7e-7, Q: 41.5 },     // 틈새형 고속 확산(Istratov 대표값, 0.43 eV)
    "Cu GB in Cu": { D0: 1e-5, Q: 105 },     // 결정립계(δD0b/δ, δ=0.5 nm 가정) 대표값
    "Cu surf on Cu": { D0: 1e-4, Q: 70 },     // 표면 확산 대표값
    "O in YSZ": { D0: 1e-6, Q: 96 },          // 산소 이온(공공) 확산 대표값
  };
  /** D(T) = D0 exp(−Q/RT) [m²/s] (Q kJ/mol) */
  M.D = (D0, Q, T) => D0 * exp((-Q * 1e3) / (C.R * T));
  M.Dof = (name, T) => { const d = M.diffData[name]; return M.D(d.D0, d.Q, T); };
  /** 두 온도의 D로 Q, D0 구하기 → {Q (kJ/mol), D0} */
  M.QFrom = (T1, D1, T2, D2) => { const Q = (C.R * ln(D1 / D2)) / (1 / T2 - 1 / T1) / 1e3; return { Q, D0: D1 * exp((Q * 1e3) / (C.R * T1)) }; };
  /** 다르켄 식: 상호 확산 계수 D̃ = X_B D_A + X_A D_B, 표지 속도 v = (D_A − D_B) ∂X_A/∂x */
  M.darken = (XA, DA, DB) => (1 - XA) * DA + XA * DB;
  M.kirkendallV = (DA, DB, dXAdx) => (DA - DB) * dXAdx;
  /** 일정 D 상호 확산 쌍 분포 C(x,t) = (C1+C2)/2 − (C1−C2)/2 · erf(x/2√Dt) (C1: x<0 쪽) */
  M.diffCouple = (x, t, D, C1 = 1, C2 = 0) => 0.5 * (C1 + C2) - 0.5 * (C1 - C2) * M.erf(x / (2 * sqrt(D * t)));
  /** 볼츠만–마타노 해석. xs(오름차순), cs(왼쪽 높음→오른쪽 낮음 단조), t → {xM(마타노 면), D:[{x,c,D}]} */
  M.matano = function (xs, cs, t) {
    const n = xs.length, cL = cs[0], cR = cs[n - 1];
    // 마타노 면: ∫(c − cR)dx (왼쪽) = ∫(cL − c)... 동치 조건 ∫_{cR}^{cL} x dc = 0
    const F = (xm) => { let s = 0; for (let i = 1; i < n; i++) s += 0.5 * ((xs[i] - xm) + (xs[i - 1] - xm)) * (cs[i] - cs[i - 1]); return s; };
    const xM = M.bisect(F, xs[0], xs[n - 1]);
    const out = [];
    for (let i = 1; i < n - 1; i++) {
      const dcdx = (cs[i + 1] - cs[i - 1]) / (xs[i + 1] - xs[i - 1]);
      if (abs(dcdx) < 1e-12 * abs(cL - cR)) continue;
      // ∫_{cR}^{c} (x − xM) dc  (오른쪽 끝에서 현재 c까지)
      let s = 0;
      for (let j = n - 1; j > i; j--) s += 0.5 * ((xs[j] - xM) + (xs[j - 1] - xM)) * (cs[j - 1] - cs[j]);
      out.push({ x: xs[i], c: cs[i], D: -s / (2 * t * dcdx) });
    }
    return { xM, D: out };
  };
  /** 해리슨 영역 판정: 격자 D, 결정립계 Dgb, 계면 폭 δ, 결정립 크기 d, 시간 t (m, s) */
  M.harrison = function (D, Dgb, delta, d, t) {
    const L = sqrt(D * t);
    const regime = L > d ? "A" : L < delta / 20 ? "C" : "B";
    const f = (3 * delta) / d; // 하트 식의 결정립계 부피 분율
    return { regime, Ldiff: L, Lgb: sqrt(Dgb * t), Deff: (1 - f) * D + f * Dgb, f };
  };
  /** 하트 식 유효 확산 계수 D_eff = (1−f)D + f D_gb, f = 3δ/d */
  M.hartDeff = (D, Dgb, delta, d) => { const f = (3 * delta) / d; return (1 - f) * D + f * Dgb; };
  /** 포물선 성장: 두께 x = √(k t) (반응층·산화막). k [길이²/시간] */
  M.parabolic = (k, t) => sqrt(k * t);
  /** 확산 방벽 투과 시간 근사 t ≈ L²/(6D) (지연 시간, time lag) 또는 L²/D (돌파 기준 a) */
  M.lagTime = (L, D) => (L * L) / (6 * D);

  /* ------------------------------------------------------------ 탄성 */
  /** 등방 탄성 상수 변환: {E, nu} → {E, nu, G, K, lambda, M(이축 E/(1−ν)), Eps(평면 변형 E/(1−ν²))} */
  M.iso = function (E, nu) {
    return { E, nu, G: E / (2 * (1 + nu)), K: E / (3 * (1 - 2 * nu)), lambda: (E * nu) / ((1 + nu) * (1 - 2 * nu)), M: E / (1 - nu), Eps: E / (1 - nu * nu) };
  };
  /** G·K로부터 E·ν */
  M.isoFromGK = (G, K) => ({ E: (9 * K * G) / (3 * K + G), nu: (3 * K - 2 * G) / (2 * (3 * K + G)) });
  /** 등방 훅 법칙: 응력 [sxx,syy,szz,syz,sxz,sxy] → 변형 [exx,eyy,ezz,γyz,γxz,γxy] (공학 전단 변형) */
  M.hooke = function (E, nu, s) {
    const G = E / (2 * (1 + nu));
    return [(s[0] - nu * (s[1] + s[2])) / E, (s[1] - nu * (s[0] + s[2])) / E, (s[2] - nu * (s[0] + s[1])) / E, s[3] / G, s[4] / G, s[5] / G];
  };
  /** 2D 주응력·모어 원: (σx, σy, τxy) → {s1, s2, theta(°, σ1 방향), tmax, center, radius} */
  M.principal2D = function (sx, sy, txy) {
    const c = 0.5 * (sx + sy), R = sqrt((0.5 * (sx - sy)) ** 2 + txy * txy);
    return { s1: c + R, s2: c - R, theta: (0.5 * Math.atan2(2 * txy, sx - sy) * 180) / PI, tmax: R, center: c, radius: R };
  };
  /** 회전한 좌표계(θ°)의 응력 성분 */
  M.rotateStress2D = function (sx, sy, txy, thDeg) {
    const t = (thDeg * PI) / 180, c2 = Math.cos(2 * t), s2 = Math.sin(2 * t), a = 0.5 * (sx + sy), b = 0.5 * (sx - sy);
    return { sx: a + b * c2 + txy * s2, sy: a - b * c2 - txy * s2, txy: -b * s2 + txy * c2 };
  };
  /** 3D 주응력: 대칭 응력 행렬 → [σ1 ≥ σ2 ≥ σ3] */
  M.principal3D = (S) => M.eigSym3(S).values;
  /** 폰 미제스 등가 응력 (주응력 또는 6성분) */
  M.vonMises = function (s1, s2, s3 = 0) { return sqrt(0.5 * ((s1 - s2) ** 2 + (s2 - s3) ** 2 + (s3 - s1) ** 2)); };
  M.vonMises6 = (s) => sqrt(0.5 * ((s[0] - s[1]) ** 2 + (s[1] - s[2]) ** 2 + (s[2] - s[0]) ** 2) + 3 * (s[3] ** 2 + s[4] ** 2 + s[5] ** 2));
  M.tresca = (s1, s2, s3 = 0) => Math.max(s1, s2, s3) - Math.min(s1, s2, s3);
  /** 입방정 탄성 상수(GPa) — Si: Hopcroft 2010, Cu·Al·W·GaAs 대표값 */
  M.cubicC = {
    Si: { C11: 165.7, C12: 63.9, C44: 79.6 },
    Ge: { C11: 128.5, C12: 48.3, C44: 66.8 },
    GaAs: { C11: 118.8, C12: 53.8, C44: 59.4 },
    Cu: { C11: 168.4, C12: 121.4, C44: 75.4 },
    Al: { C11: 108.2, C12: 61.3, C44: 28.5 },
    W: { C11: 522.4, C12: 204.4, C44: 160.8 },
    Fe: { C11: 231.4, C12: 134.7, C44: 116.4 },
  };
  /** 입방정 순응 계수 S11, S12, S44 (1/GPa) */
  M.cubicS = function (c) {
    const d = (c.C11 - c.C12) * (c.C11 + 2 * c.C12);
    return { S11: (c.C11 + c.C12) / d, S12: -c.C12 / d, S44: 1 / c.C44 };
  };
  /** 입방정 방향 [h k l]의 영률 E(GPa): 1/E = S11 − 2(S11−S12−S44/2)(l₁²l₂²+l₂²l₃²+l₃²l₁²) */
  M.youngDir = function (c, dir) {
    const s = M.cubicS(c), n = sqrt(dir[0] ** 2 + dir[1] ** 2 + dir[2] ** 2), l = dir.map((v) => v / n);
    const J = l[0] ** 2 * l[1] ** 2 + l[1] ** 2 * l[2] ** 2 + l[2] ** 2 * l[0] ** 2;
    return 1 / (s.S11 - 2 * (s.S11 - s.S12 - s.S44 / 2) * J);
  };
  /** (100)·(110)면 위 방향 각 θ(°, [100]에서 [010] 쪽)의 영률 — (001) 웨이퍼 면내 이방성 */
  M.youngInPlane001 = (c, thDeg) => { const t = (thDeg * PI) / 180; return M.youngDir(c, [Math.cos(t), Math.sin(t), 0]); };
  /** 이축 탄성률 M = E/(1−ν) for (001)·(111) 면 */
  M.biaxialCubic = function (c, plane = "100") {
    if (plane === "111") return (6 * c.C44 * (c.C11 + 2 * c.C12)) / (c.C11 + 2 * c.C12 + 4 * c.C44);
    return c.C11 + c.C12 - (2 * c.C12 * c.C12) / c.C11;
  };
  /** 지너 이방성 비 A = 2C44/(C11−C12) */
  M.zener = (c) => (2 * c.C44) / (c.C11 - c.C12);
  /** 열변형 ε = αΔT; 양 끝이 고정된 봉의 열응력 σ = −EαΔT (MPa, E GPa, α ppm/K) */
  M.thermalStressBar = (E, cte, dT) => -E * 1e3 * cte * 1e-6 * dT;
  /** 두꺼운 기판 위 박막의 이축 열응력 σ_f = M_f (α_s − α_f) ΔT (ΔT = T_최종 − T_증착; MPa) */
  M.filmThermalStress = (Ef, nuf, ctef, ctes, dT) => (Ef * 1e3 * (ctes - ctef) * 1e-6 * dT) / (1 - nuf);
  /** 스토니 식: 박막 응력 σ_f = E_s h_s² κ / (6(1−ν_s) h_f) — κ = 1/R [1/m], h [m], Es GPa → MPa */
  M.stoneyStress = (Es, nus, hs, hf, kappa) => (Es * 1e3 * hs * hs * kappa) / (6 * (1 - nus) * hf);
  /** 스토니 곡률 κ = 6σ_f h_f (1−ν_s)/(E_s h_s²) [1/m] (σ MPa, E GPa) */
  M.stoneyCurvature = (sf, hf, Es, nus, hs) => (6 * sf * hf * (1 - nus)) / (Es * 1e3 * hs * hs);
  /** 지름 D 웨이퍼의 휨 높이(새그) δ = κD²/8 [m] (볼록 방향은 κ 부호) */
  M.bowFromCurvature = (kappa, D) => (kappa * D * D) / 8;
  /** 여러 층 스토니 중첩: films=[{s MPa, h m}] → κ */
  M.stoneyMulti = (films, Es, nus, hs) => films.reduce((a, f) => a + M.stoneyCurvature(f.s, f.h, Es, nus, hs), 0);
  /** 티모셴코 이층판 휨 곡률 [1/m]. 층1(위)·층2(아래): 두께 h(m), E(GPa), α(ppm/K), ΔT(K). 양수 = 층2 쪽으로 볼록(층1이 덜 팽창하면) */
  M.bimetalCurvature = function (h1, E1, a1, h2, E2, a2, dT) {
    const m = h1 / h2, n = E1 / E2, h = h1 + h2;
    return (6 * (a2 - a1) * 1e-6 * dT * (1 + m) ** 2) / (h * (3 * (1 + m) ** 2 + (1 + m * n) * (m * m + 1 / (m * n))));
  };
  /** 판 휨 탄성(굽힘 강성) D = E h³/(12(1−ν²)) [N·m] (E GPa, h m) */
  M.plateRigidity = (E, h, nu) => (E * 1e9 * h ** 3) / (12 * (1 - nu * nu));
  /** 결합 퍼텐셜에서 탄성률 근사 E ≈ S0/r0, S0 = d²U/dr² (LJ: U = 4ε[(σ/r)¹²−(σ/r)⁶]) — r0 = 2^{1/6}σ */
  M.ljStiffness = (eps, sigma) => { const r0 = pow(2, 1 / 6) * sigma, S0 = (72 * eps) / (r0 * r0); return { r0, S0, E: S0 / r0 }; };

  /* ------------------------------------------------------------ 소성 */
  /** 공칭 → 진응력·진변형 (네킹 전까지 유효) */
  M.engToTrue = (se, ee) => ({ st: se * (1 + ee), et: ln(1 + ee) });
  M.trueToEng = (st, et) => ({ se: st / exp(et), ee: exp(et) - 1 });
  /** 홀로몬 σ = K εⁿ — 네킹(콩시데르) 진변형 εu = n, 인장 강도(공칭) = K nⁿ e^{−n} */
  M.hollomon = (K, n, e) => K * pow(e, n);
  M.hollomonUTS = (K, n) => K * pow(n, n) * exp(-n);
  /** 두 점 (ε, σ)로 홀로몬 K, n 구하기 */
  M.hollomonFit = (e1, s1, e2, s2) => { const n = ln(s2 / s1) / ln(e2 / e1); return { n, K: s1 / pow(e1, n) }; };
  /**
   * 인장 시험 곡선 모형(공칭 응력–공칭 변형). 탄성(E) → 루드비크 경화 σ = σy + K εpⁿ (진응력)
   * → 콩시데르 조건에서 네킹 → 파단 변형 ef까지 공칭 응력이 매끄럽게 감소.
   * p = {E GPa, sy MPa, K MPa, n, ef(공칭 파단 변형), N(점 수)} → {pts:[[e,s]], uts, eu, ef, sy, toughness(MJ/m³), resilience}
   */
  M.tensileCurve = function (p) {
    const E = p.E * 1e3, sy = p.sy, K = p.K, n = p.n, N = p.N || 240;
    const trueS = (ep) => sy + K * pow(Math.max(ep, 0), n);
    // 진변형 εt = σ/E + εp, 공칭 s = σ e^{−εt}
    const engAt = (ep) => { const st = trueS(ep), et = st / E + ep; return { e: exp(et) - 1, s: st * exp(-et) }; };
    // 네킹: 공칭 응력 최대(εp로 훑기)
    let best = { ep: 0, s: -1 };
    for (let i = 0; i <= 4000; i++) { const ep = (i / 4000) * 1.5; const r = engAt(ep); if (r.s > best.s) best = { ep, s: r.s, e: r.e }; }
    const eu = best.e, uts = best.s, ef = Math.max(p.ef || eu * 1.6, eu * 1.02);
    const pts = [[0, 0], [sy / E, sy]];
    const nA = Math.round(N * 0.65);
    for (let i = 1; i <= nA; i++) { const ep = best.ep * pow(i / nA, 2); const r = engAt(ep); pts.push([r.e, r.s]); }
    const nB = N - nA, sf = uts * (p.sfFrac || 0.78);
    for (let i = 1; i <= nB; i++) { const u = i / nB, e = eu + (ef - eu) * u; pts.push([e, uts - (uts - sf) * pow(u, 2.2)]); }
    let tough = 0;
    for (let i = 1; i < pts.length; i++) tough += 0.5 * (pts[i][1] + pts[i - 1][1]) * (pts[i][0] - pts[i - 1][0]);
    return { pts, uts, eu, ef, sy, toughness: tough, resilience: (sy * sy) / (2 * E) };
  };
  /** 0.2 % 오프셋 항복 강도: 곡선 pts에서 s = E(e − off) 와 만나는 점의 응력 */
  M.offsetYield = function (pts, E_MPa, off = 0.002) {
    for (let i = 1; i < pts.length; i++) {
      const f0 = pts[i - 1][1] - E_MPa * (pts[i - 1][0] - off), f1 = pts[i][1] - E_MPa * (pts[i][0] - off);
      if (f0 >= 0 && f1 < 0) { const t = f0 / (f0 - f1); return pts[i - 1][1] + t * (pts[i][1] - pts[i - 1][1]); }
    }
    return NaN;
  };
  /** 탄성 회복 에너지(레질리언스) U_r = σy²/(2E) [MJ/m³ = MPa] */
  M.resilience = (sy, E) => (sy * sy) / (2 * E * 1e3);
  /** 슬립계: FCC {111}<110> 12개, BCC {110}<111> 12개 (면 법선 n, 방향 d) */
  M.slipSystems = (function () {
    const fcc = [], bcc = [];
    const P111 = [[1, 1, 1], [-1, 1, 1], [1, -1, 1], [1, 1, -1]];
    const D110 = [[1, -1, 0], [1, 0, -1], [0, 1, -1], [1, 1, 0], [1, 0, 1], [0, 1, 1]];
    const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    for (const n of P111) for (const d of D110) if (dot(n, d) === 0) fcc.push({ n, d });
    const P110 = [[1, 1, 0], [1, -1, 0], [1, 0, 1], [1, 0, -1], [0, 1, 1], [0, 1, -1]];
    const D111 = [[1, 1, 1], [-1, 1, 1], [1, -1, 1], [1, 1, -1]];
    for (const n of P110) for (const d of D111) if (dot(n, d) === 0) bcc.push({ n, d });
    return { FCC: fcc, BCC: bcc };
  })();
  /** 슈미트 인자 m = cosφ cosλ (하중 축 F, 면 법선 n, 방향 d) */
  M.schmid = function (F, n, d) {
    const nn = (v) => sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2), dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    return abs(dot(F, n) / (nn(F) * nn(n))) * abs(dot(F, d) / (nn(F) * nn(d)));
  };
  /** 가장 큰 슈미트 인자를 가진 슬립계 → {m, n, d, all:[…]} */
  M.maxSchmid = function (F, struct = "FCC") {
    const all = M.slipSystems[struct].map((s) => ({ ...s, m: M.schmid(F, s.n, s.d) }));
    const best = all.reduce((a, b) => (b.m > a.m + 1e-12 ? b : a));
    return { m: best.m, n: best.n, d: best.d, all };
  };
  /** 분해 전단 응력 τ_R = σ cosφ cosλ, 단결정 항복 σy = τ_CRSS / m_max */
  M.resolvedShear = (sigma, phiDeg, lamDeg) => sigma * Math.cos((phiDeg * PI) / 180) * Math.cos((lamDeg * PI) / 180);
  /** 테일러 식: σ = σ0 + M α G b √ρ (G GPa → MPa, b m, ρ m⁻²). 테일러 인자 M(FCC 다결정 3.06) */
  M.taylor = (rho, G, b, alpha = 0.3, Mt = 3.06, s0 = 0) => s0 + Mt * alpha * G * 1e3 * b * sqrt(rho);
  /** 홀–페치 σy = σ0 + k d^{−1/2} (σ MPa, k MPa·√m, d m) */
  M.hallPetch = (s0, k, d) => s0 + k / sqrt(d);
  /** 홀–페치 대표 계수 (σ0 MPa, k MPa·√m) */
  M.hallPetchData = { Cu: { s0: 25, k: 0.11 }, Al: { s0: 16, k: 0.04 }, Ni: { s0: 20, k: 0.16 }, "α-Fe": { s0: 70, k: 0.74 }, Ti: { s0: 80, k: 0.40 } };
  /** 석출물(반지름 r nm, 부피 분율 f): 미끄럼면 위 평균 반지름 rs = √(2/3) r, 중심 간격 L = rs√(π/f), 표면 간격 λ = L − 2rs */
  M.particleSpacing = function (r, f) { const rs = sqrt(2 / 3) * r, L = rs * sqrt(PI / f); return { rs, L, lambda: L - 2 * rs }; };
  /** 오로완 우회 응력 Δτ = G b / λ (G GPa, b nm, λ nm → MPa) */
  M.orowan = (G, b, lambda) => (G * 1e3 * b) / lambda;
  /** 석출 강화 모형: 자름(Δτ = A√(f r)) 대 우회(오로완) 중 작은 쪽. A MPa/√nm(기본 600) → {cut, bypass, tau, mech} */
  M.precipStrength = function (r, f, G = 26, b = 0.286, A = 600) {
    const cut = A * sqrt(f * r), sp = M.particleSpacing(r, f), bypass = sp.lambda > 0 ? M.orowan(G, b, sp.lambda) : Infinity;
    return { cut, bypass, tau: Math.min(cut, bypass), mech: cut < bypass ? "자름" : "우회" };
  };
  /** 고용 강화(라부슈형) Δσ = A c^{2/3} 또는 (플라이셔) A c^{1/2} */
  M.solidSolution = (A, c, expo = 2 / 3) => A * pow(c, expo);
  /** 냉간 가공도 %CW = (A0 − Ad)/A0 × 100 */
  M.coldWork = (A0, Ad) => (100 * (A0 - Ad)) / A0;
  /**
   * 나노압입(베르코비치) 하중–변위 곡선 모형과 올리버–파르 해석.
   * 모형: 하중 P = Pmax(h/hmax)², 제하 P = Pmax((h−hf)/(hmax−hf))^m, m = 1.5.
   * 재료 {E GPa, nu, H GPa}, Pmax mN → {load, unload, hmax, hc, hf, S, A} (길이 nm, 하중 mN, S mN/nm)
   */
  M.indentDiamond = { E: 1141, nu: 0.07 };
  M.reducedModulus = (E, nu, Ei = 1141, nui = 0.07) => 1 / ((1 - nu * nu) / E + (1 - nui * nui) / Ei);
  M.nanoindent = function (mat, Pmax, N = 60) {
    const beta = 1.034, eps = 0.75, m = 1.5, Er = M.reducedModulus(mat.E, mat.nu);
    // 단위: GPa = mN/µm² = 1e-6 mN/nm²
    const H = mat.H * 1e-6, ErN = Er * 1e-6;
    const A = Pmax / H, hc = sqrt(A / 24.5), S = (2 * beta * ErN * sqrt(A)) / sqrt(PI);
    const hmax = hc + (eps * Pmax) / S, hf = hmax - (m * Pmax) / S;
    const load = [], unload = [];
    for (let i = 0; i <= N; i++) { const h = (hmax * i) / N; load.push([h, Pmax * (h / hmax) ** 2]); }
    for (let i = 0; i <= N; i++) { const h = hmax - ((hmax - hf) * i) / N; unload.push([h, Pmax * pow((h - hf) / (hmax - hf), m)]); }
    return { load, unload, hmax, hc, hf, S, A, Er };
  };
  /** 올리버–파르: (Pmax mN, hmax nm, S mN/nm) → {hc, A nm², H GPa, Er GPa, E GPa(ν 주면)} */
  M.oliverPharr = function (Pmax, hmax, S, nu = 0.3, eps = 0.75, beta = 1.034) {
    const hc = hmax - (eps * Pmax) / S, A = 24.5 * hc * hc, H = (Pmax / A) * 1e6, Er = ((sqrt(PI) * S) / (2 * beta * sqrt(A))) * 1e6;
    const E = (1 - nu * nu) / (1 / Er - (1 - 0.07 * 0.07) / 1141);
    return { hc, A, H, Er, E };
  };
  /** 비커스 경도 HV = 1.8544 F/d² (F kgf, d mm) ; GPa 환산 HV × 0.009807 */
  M.vickers = (F_kgf, d_mm) => (1.8544 * F_kgf) / (d_mm * d_mm);
  /** 브리넬 경도로 강의 인장 강도 근사 TS(MPa) ≈ 3.45 HB */
  M.tsFromHB = (HB) => 3.45 * HB;
  /** 재결정 분율(JMAK) X = 1 − exp(−(t/τ)ⁿ) — τ = τ0 exp(Q/RT) */
  M.recrystFraction = (t, tau, n = 2) => 1 - exp(-pow(t / tau, n));
  /** 결정립 성장 dⁿ − d0ⁿ = K t, K = K0 exp(−Q/RT) (Q kJ/mol) → d */
  M.grainGrowth = (d0, K0, Q, T, t, n = 2) => pow(pow(d0, n) + K0 * exp((-Q * 1e3) / (C.R * T)) * t, 1 / n);
  /** 제너 고정 한계 결정립 크기 d_lim = 4r/(3f) */
  M.zenerLimit = (r, f) => (4 * r) / (3 * f);

  /* ------------------------------------------------------------ 파괴 */
  /** 이론 벽개 강도 σ_th ≈ √(Eγ/a0) (E GPa, γ J/m², a0 m → MPa) — 대충 E/10 */
  M.theoreticalStrength = (E, gamma, a0) => sqrt((E * 1e9 * gamma) / a0) / 1e6;
  /** 그리피스 파괴 응력 σ_c = √(2Eγ/(πa)) (평면 응력; planeStrain이면 E/(1−ν²)) → MPa */
  M.griffith = (E, gamma, a, nu = 0, planeStrain = false) => sqrt((2 * (planeStrain ? E / (1 - nu * nu) : E) * 1e9 * gamma) / (PI * a)) / 1e6;
  /** 끝 반지름 ρt인 타원 균열 끝의 응력 집중 σ_m = σ0(1 + 2√(a/ρt)) */
  M.stressConc = (s0, a, rhoT) => s0 * (1 + 2 * sqrt(a / rhoT));
  /** 응력 확대 계수 K = Yσ√(πa) (MPa, m → MPa√m) */
  M.K = (sigma, a, Y = 1) => Y * sigma * sqrt(PI * a);
  /** 임계 균열 길이 a_c = (1/π)(K_IC/(Yσ))² [m] */
  M.criticalCrack = (KIC, sigma, Y = 1) => (KIC / (Y * sigma)) ** 2 / PI;
  /** 파괴 응력 σ_f = K_IC/(Y√(πa)) */
  M.fractureStress = (KIC, a, Y = 1) => KIC / (Y * sqrt(PI * a));
  /** 에너지 해방률 ↔ K: G = K²/E' (E' = E 평면 응력, E/(1−ν²) 평면 변형) [J/m²] */
  M.GfromK = (K, E, nu = 0, planeStrain = false) => (K * 1e6) ** 2 / ((planeStrain ? E / (1 - nu * nu) : E) * 1e9);
  /** 평면 변형 조건 두께 B ≥ 2.5 (K_IC/σy)² */
  M.planeStrainThickness = (KIC, sy) => 2.5 * (KIC / sy) ** 2;
  /** 와이블 파괴 확률 Pf = 1 − exp(−(V/V0)(σ/σ0)^m) */
  M.weibullPf = (s, s0, m, VV0 = 1) => 1 - exp(-VV0 * pow(Math.max(s, 0) / s0, m));
  /** 와이블 크기 효과: 부피 V1→V2일 때 같은 Pf의 강도 비 σ2/σ1 = (V1/V2)^{1/m} */
  M.weibullScale = (V1, V2, m) => pow(V1 / V2, 1 / m);
  /** 와이블 평균 강도 σ0 Γ(1+1/m) (V = V0) */
  M.weibullMean = (s0, m) => s0 * M.gamma(1 + 1 / m);
  /** 와이블 표본 n개(오름차순), 시드 */
  M.weibullSample = function (n, s0, m, seed = 1) { const r = M.rng(seed); return Array.from({ length: n }, () => s0 * pow(-ln(1 - r()), 1 / m)).sort((a, b) => a - b); };
  /** 와이블 그림(중앙 순위 F=(i−0.3)/(n+0.4)) 직선 맞춤 → {m, s0, x:ln σ, y:ln ln(1/(1−F))} */
  M.weibullFit = function (strengths) {
    const s = strengths.slice().sort((a, b) => a - b), n = s.length;
    const x = s.map((v) => ln(v)), y = s.map((_, i) => ln(-ln(1 - (i + 1 - 0.3) / (n + 0.4))));
    const f = M.linfit(x, y);
    return { m: f.b, s0: exp(-f.a / f.b), x, y, r2: f.r2 };
  };
  /** 피로: 바스킨 σa = σf'(2N)^b → N (반복 수) */
  M.basquinN = (sa, sfp, b) => 0.5 * pow(sa / sfp, 1 / b);
  M.basquin = (N, sfp, b) => sfp * pow(2 * N, b);
  /** 변형 수명(바스킨 + 코핀–맨슨): Δε/2 = (σf'/E)(2N)^b + εf'(2N)^c → N (이분법) */
  M.strainLife = function (deltaEps, p) {
    const f = (lN) => { const N2 = 2 * exp(lN); return (p.sfp / (p.E * 1e3)) * pow(N2, p.b) + p.efp * pow(N2, p.c) - deltaEps / 2; };
    return exp(M.bisect(f, ln(0.5), ln(1e12)));
  };
  /** 코핀–맨슨(소성 변형만) Δεp/2 = εf'(2N)^c → N */
  M.coffinManson = (dEp, efp, c) => 0.5 * pow(dEp / 2 / efp, 1 / c);
  /** 평균 응력 보정 → 등가 완전 반복 진폭: 굿맨 σar = σa/(1 − σm/σu), 거버 σa/(1 − (σm/σu)²), 소더버그 σa/(1 − σm/σy) */
  M.goodman = (sa, sm, su) => sa / (1 - sm / su);
  M.gerber = (sa, sm, su) => sa / (1 - (sm / su) ** 2);
  M.soderberg = (sa, sm, sy) => sa / (1 - sm / sy);
  /** 마이너 누적 손상 D = Σ nᵢ/Nᵢ */
  M.miner = (blocks) => blocks.reduce((a, b) => a + b.n / b.N, 0);
  /** 파리스 법칙 da/dN = C ΔK^m (a m, ΔK MPa√m). 일정 Y에서 a0 → ac 까지 반복 수 */
  M.parisN = function (a0, ac, dSigma, C_, m, Y = 1) {
    const B = C_ * pow(Y * dSigma * sqrt(PI), m);
    if (abs(m - 2) < 1e-9) return ln(ac / a0) / B;
    return (pow(ac, 1 - m / 2) - pow(a0, 1 - m / 2)) / (B * (1 - m / 2));
  };
  /** 파리스 적분 경로(그림용): a0에서 반복 수 N 증가에 따른 a(N) 점열 */
  M.parisPath = function (a0, ac, dSigma, C_, m, Y = 1, n = 80) {
    const Nf = M.parisN(a0, ac, dSigma, C_, m, Y), out = [];
    for (let i = 0; i <= n; i++) {
      const a = a0 * pow(ac / a0, i / n);
      out.push([M.parisN(a0, a, dSigma, C_, m, Y), a]);
    }
    return { Nf, pts: out };
  };
  /** 크리프 노턴 식 ε̇ = A σⁿ exp(−Q/RT) (Q kJ/mol) */
  M.norton = (A, sigma, n, Q, T) => A * pow(sigma, n) * exp((-Q * 1e3) / (C.R * T));
  /** 라슨–밀러 변수 LMP = T(C + log₁₀ t_r) (T K, t_r h) — 그리고 역함수 */
  M.LMP = (T, tr, Cc = 20) => T * (Cc + Math.log10(tr));
  M.ruptureTime = (LMP, T, Cc = 20) => 10 ** (LMP / T - Cc);
  /** 몽크먼–그랜트: ε̇_ss · t_r = C_MG */
  M.monkmanGrant = (rate, Cmg) => Cmg / rate;
  /** 크리프 곡선 모형(1·2·3단계): ε(t) = ε0 + β t^{1/3} + ε̇s t + ε3 (e^{(t−t3)/τ3} − 1)_{t>t3} */
  M.creepCurve = function (p, t) {
    let e = (p.e0 || 0) + (p.beta || 0) * Math.cbrt(t) + p.rate * t;
    if (p.t3 != null && t > p.t3) e += (p.e3 || p.rate * p.tau3) * (exp((t - p.t3) / p.tau3) - 1);
    return e;
  };
  /**
   * 변형 기구 지도용 변형 속도(프로스트–애시비 형태). 재료 매개변수 p:
   * {b m, Omega m³, G0 MPa, dGdT(Tm/G0·dG/dT), Tm K, D0v m²/s, Qv kJ/mol, dD0b m³/s, Qb kJ/mol, A, n}
   * σ MPa, T K, d m → {power, diffusional(NH+Coble), total, dominant}
   */
  M.frostAshby = {
    Cu: { b: 2.56e-10, Omega: 1.18e-29, G0: 4.21e4, dGdT: -0.54, Tm: 1356, D0v: 2.0e-5, Qv: 197, dD0b: 5.0e-15, Qb: 104, A: 7.4e5, n: 4.8 },
    Al: { b: 2.86e-10, Omega: 1.66e-29, G0: 2.54e4, dGdT: -0.50, Tm: 933, D0v: 1.7e-4, Qv: 142, dD0b: 5.0e-14, Qb: 84, A: 3.4e6, n: 4.4 },
    Ni: { b: 2.49e-10, Omega: 1.09e-29, G0: 7.89e4, dGdT: -0.64, Tm: 1726, D0v: 1.9e-4, Qv: 284, dD0b: 3.5e-15, Qb: 115, A: 3.0e6, n: 4.6 },
  };
  M.creepRates = function (p, sigma, T, d) {
    const G = p.G0 * (1 + (p.dGdT * (T - 300)) / p.Tm), kT = C.kB * T;
    const Dv = p.D0v * exp((-p.Qv * 1e3) / (C.R * T)), dDb = p.dD0b * exp((-p.Qb * 1e3) / (C.R * T));
    const power = ((p.A * Dv * G * 1e6 * p.b) / kT) * pow(sigma / G, p.n);
    const diffusional = ((42 * sigma * 1e6 * p.Omega) / (kT * d * d)) * (Dv + (PI * dDb) / d);
    const NH = ((42 * sigma * 1e6 * p.Omega) / (kT * d * d)) * Dv, coble = diffusional - NH;
    const total = power + diffusional;
    return { G, power, NH, coble, diffusional, total, dominant: power > diffusional ? "멱법칙 크리프" : NH > coble ? "나바로–헤링" : "코블" };
  };

  /* ------------------------------------------------------------ 상태도 (실측 대표값) */
  /*
   * 이성분 상태도 객체. 조성 x(unit, 보통 B의 wt%), 온도 T(°C).
   * 공정형(type "eutectic"): 모상 P(액상 L, 또는 Fe–C 강 영역에서는 γ)와 왼쪽 고용체 α, 오른쪽 상 β.
   *   liqA: P/(P+α) 경계 [(x,T)…] (xA끝 TA → 공정점), solA: α/(α+P) (TA → (xa,TE)),
   *   liqB: P/(P+β) (공정점 → TB), solB: β/(β+P) ((xb,TE) → TB), svA: α 고용 한계 (xa,TE)→저온, svB: β 쪽.
   * 전율 고용체(type "isomorphous"): liq, sol [(x,T)…] x 오름차순.
   * phaseAt(x, T) → {region, phases:[{name, x, frac}]} — 두 상 영역은 지렛대 규칙으로 분율(질량 분율).
   * 값: ASM 상태도를 교재 수준으로 단순화한 대표값(곡선을 꺾은선으로 근사).
   */
  const xAtT = (curve, T) => M.interp(curve.map((p) => [p[1], p[0]]), T);
  function eutecticDiagram(d) {
    d.type = "eutectic";
    d.phaseAt = function (x, T) {
      const P = d.parent || "L", A = d.alpha || "α", B = d.beta || "β";
      const one = (name) => ({ region: name, phases: [{ name, x, frac: 1 }] });
      const two = (n1, x1, n2, x2) => { const f2 = (x - x1) / (x2 - x1); return { region: n1 + "+" + n2, phases: [{ name: n1, x: x1, frac: 1 - f2 }, { name: n2, x: x2, frac: f2 }] }; };
      if (T >= d.TE) {
        const xl = T <= d.TA ? xAtT(d.liqA, T) : -Infinity, xs = T <= d.TA ? xAtT(d.solA, T) : -Infinity;
        const xl2 = T <= d.TB ? xAtT(d.liqB, T) : Infinity, xs2 = T <= d.TB ? xAtT(d.solB, T) : Infinity;
        if (x <= xs) return one(A);
        if (x < xl) return two(A, xs, P, xl);
        if (x <= xl2) return one(P);
        if (x < xs2) return two(P, xl2, B, xs2);
        return one(B);
      }
      const xa = d.svA ? xAtT(d.svA, T) : d.xa, xb = d.svB ? xAtT(d.svB, T) : d.xb;
      const xaa = isNaN(xa) ? d.svA[d.svA.length - 1][0] : xa, xbb = isNaN(xb) ? d.svB[d.svB.length - 1][0] : xb;
      if (x <= xaa) return one(A);
      if (x >= xbb) return one(B);
      return two(A, xaa, B, xbb);
    };
    /** 공정 온도 바로 위·아래의 미세 구성 요소 분율 → {primary:'α'|'β'|null, fPrimary, fEutectic, eutecticAlpha(공정 조직 속 α 분율)} */
    d.microconstituents = function (x) {
      const fEa = (d.xb - d.xE) / (d.xb - d.xa);
      if (x <= d.xa || x >= d.xb) return { primary: x <= d.xa ? d.alpha || "α" : d.beta || "β", fPrimary: 1, fEutectic: 0, eutecticAlpha: fEa };
      if (x < d.xE) { const fe = (x - d.xa) / (d.xE - d.xa); return { primary: d.alpha || "α", fPrimary: 1 - fe, fEutectic: fe, eutecticAlpha: fEa }; }
      const fe = (d.xb - x) / (d.xb - d.xE);
      return { primary: d.beta || "β", fPrimary: 1 - fe, fEutectic: fe, eutecticAlpha: fEa };
    };
    /** 액상선 온도(그 조성에서 응고가 시작하는 온도) */
    d.liquidusT = (x) => (x <= d.xE ? M.interp(d.liqA, x) : M.interp(d.liqB, x));
    return d;
  }
  function isomorphousDiagram(d) {
    d.type = "isomorphous";
    const inv = (curve, T) => xAtT(curve, T);
    d.phaseAt = function (x, T) {
      const TL = M.interp(d.liq, x), TS = M.interp(d.sol, x);
      if (T >= TL) return { region: "L", phases: [{ name: "L", x, frac: 1 }] };
      if (T <= TS) return { region: "α", phases: [{ name: "α", x, frac: 1 }] };
      const xL = inv(d.liq, T), xS = inv(d.sol, T), fa = (x - xL) / (xS - xL);
      return { region: "α+L", phases: [{ name: "L", x: xL, frac: 1 - fa }, { name: "α", x: xS, frac: fa }] };
    };
    d.liquidusT = (x) => M.interp(d.liq, x);
    d.solidusT = (x) => M.interp(d.sol, x);
    return d;
  }
  M.eutecticDiagram = eutecticDiagram;
  M.isomorphousDiagram = isomorphousDiagram;
  M.diagrams = {
    CuNi: isomorphousDiagram({
      name: "Cu–Ni", A: "Cu", B: "Ni", unit: "wt% Ni", xRange: [0, 100], TRange: [1000, 1500],
      liq: [[0, 1085], [10, 1150], [20, 1200], [30, 1245], [40, 1285], [50, 1320], [60, 1355], [70, 1385], [80, 1410], [90, 1435], [100, 1455]],
      sol: [[0, 1085], [10, 1110], [20, 1150], [30, 1195], [40, 1240], [50, 1280], [60, 1320], [70, 1355], [80, 1390], [90, 1425], [100, 1455]],
    }),
    PbSn: eutecticDiagram({
      name: "Pb–Sn", A: "Pb", B: "Sn", unit: "wt% Sn", xRange: [0, 100], TRange: [0, 350],
      TA: 327, TB: 232, TE: 183, xE: 61.9, xa: 18.3, xb: 97.8,
      liqA: [[0, 327], [10, 301], [20, 279], [30, 257], [40, 238], [50, 216], [61.9, 183]],
      solA: [[0, 327], [10, 268], [18.3, 183]],
      liqB: [[61.9, 183], [70, 192], [80, 205], [90, 217], [100, 232]],
      solB: [[97.8, 183], [100, 232]],
      svA: [[18.3, 183], [11, 150], [6, 100], [3, 50], [2, 0]],
      svB: [[97.8, 183], [99, 150], [99.5, 100], [99.8, 0]],
    }),
    AlSi: eutecticDiagram({
      name: "Al–Si", A: "Al", B: "Si", unit: "wt% Si", xRange: [0, 100], TRange: [300, 1450],
      TA: 660, TB: 1414, TE: 577, xE: 12.6, xa: 1.65, xb: 100,
      liqA: [[0, 660], [5, 630], [12.6, 577]],
      solA: [[0, 660], [1.65, 577]],
      liqB: [[12.6, 577], [20, 690], [30, 800], [40, 880], [50, 950], [60, 1020], [70, 1100], [80, 1190], [90, 1300], [100, 1414]],
      solB: [[100, 577], [100, 1414]],
      svA: [[1.65, 577], [1.0, 527], [0.5, 477], [0.1, 377], [0.05, 300]],
      svB: [[100, 577], [100, 300]],
    }),
    AlCu: eutecticDiagram({
      name: "Al–Cu (Al 쪽)", A: "Al", B: "Cu", unit: "wt% Cu", xRange: [0, 55], TRange: [200, 700], beta: "θ",
      TA: 660, TB: 591, TE: 548, xE: 33.2, xa: 5.65, xb: 53.5,
      liqA: [[0, 660], [10, 635], [20, 600], [33.2, 548]],
      solA: [[0, 660], [2.5, 620], [4, 585], [5.65, 548]],
      liqB: [[33.2, 548], [40, 570], [53.5, 591]],
      solB: [[53.5, 548], [53.5, 591]],
      svA: [[5.65, 548], [4.0, 500], [2.5, 450], [1.5, 400], [0.45, 300], [0.1, 200]],
      svB: [[53.5, 548], [53.5, 200]],
    }),
    // 강 영역: 모상 γ(오스테나이트), α(페라이트), Fe₃C(시멘타이트, 6.70 wt% C). 공석 727 °C, 0.76 wt% C.
    FeC: eutecticDiagram({
      name: "Fe–Fe₃C (강 영역)", A: "Fe", B: "Fe₃C", unit: "wt% C", xRange: [0, 6.7], TRange: [400, 1150], parent: "γ", alpha: "α", beta: "Fe₃C",
      TA: 912, TB: 1147, TE: 727, xE: 0.76, xa: 0.022, xb: 6.70,
      liqA: [[0, 912], [0.2, 838], [0.4, 790], [0.6, 750], [0.76, 727]],
      solA: [[0, 912], [0.022, 727]],
      liqB: [[0.76, 727], [1.0, 800], [1.4, 900], [2.14, 1147]],
      solB: [[6.70, 727], [6.70, 1147]],
      svA: [[0.022, 727], [0.008, 600], [0.0005, 400]],
      svB: [[6.70, 727], [6.70, 400]],
    }),
  };
  /** 지렛대 규칙(두 상 조성 x1, x2 사이 전체 조성 x) → 상2의 분율 */
  M.lever = (x, x1, x2) => (x - x1) / (x2 - x1);
  /** 깁스 상규칙 F = C − P + 2 (압력 고정이면 + 1) */
  M.phaseRule = (Cn, P, fixedP = true) => Cn - P + (fixedP ? 1 : 2);
  /** wt% ↔ at% (이성분, B 기준). AA, AB 몰 질량 */
  M.wt2at = (wB, AA, AB) => (100 * (wB / AB)) / (wB / AB + (100 - wB) / AA);
  M.at2wt = (xB, AA, AB) => (100 * xB * AB) / (xB * AB + (100 - xB) * AA);
  /** 솔더·범프의 대표 금속간 화합물 */
  M.imc = [
    { f: "Cu₆Sn₅", sys: "Cu–Sn", rho: 8.27, E: 112, note: "솔더/구리 계면에서 먼저 자람, 가리비 모양" },
    { f: "Cu₃Sn", sys: "Cu–Sn", rho: 11.33, E: 134, note: "Cu₆Sn₅ 아래 구리 쪽, 커켄달 보이드" },
    { f: "Ni₃Sn₄", sys: "Ni–Sn", rho: 8.65, E: 133, note: "니켈 UBM 위, 성장이 느려 방벽 역할" },
    { f: "Ag₃Sn", sys: "Ag–Sn", rho: 9.93, E: 80, note: "SAC 솔더 속 판상 석출" },
    { f: "AuSn₄", sys: "Au–Sn", rho: 7.6, E: 50, note: "금 도금이 두꺼우면 취화" },
  ];

  /* ------------------------------------------------------------ 상변태 속도론 */
  /** JMAK: f = 1 − exp(−k tⁿ), 그리고 분율 f에 이르는 시간 */
  M.jmak = (k, n, t) => 1 - exp(-k * pow(t, n));
  M.jmakTime = (k, n, f) => pow(-ln(1 - f) / k, 1 / n);
  /** 아브라미 그림: ln(−ln(1−f)) 대 ln t 직선 → {n, k} */
  M.avramiFit = function (ts, fs) {
    const X = [], Y = [];
    for (let i = 0; i < ts.length; i++) if (fs[i] > 0 && fs[i] < 1 && ts[i] > 0) { X.push(ln(ts[i])); Y.push(ln(-ln(1 - fs[i]))); }
    const f = M.linfit(X, Y);
    return { n: f.b, k: exp(f.a), r2: f.r2 };
  };
  /** 일정 핵생성 속도 I(단위 부피·시간)와 성장 속도 G의 3D JMAK: k = πIG³/3, n = 4 ; 자리 포화(N 개/부피): k = 4πNG³/3, n = 3 */
  M.jmakK = (I, G, mode = "continuous", dim = 3) => {
    if (dim === 2) return mode === "continuous" ? (PI * I * G * G) / 3 : PI * I * G * G; // 2D: n=3 / n=2 (I는 면적당)
    return mode === "continuous" ? (PI * I * G ** 3) / 3 : (4 * PI * I * G ** 3) / 3;
  };
  /** 고전 핵생성(구형 핵, 고체 속): ΔG* = 16πγ³/(3(ΔGv − ΔGs)²), r* = 2γ/(ΔGv − ΔGs). ΔGv = ΔHv ΔT/Te (J/m³) */
  M.nucleusBarrier = function (gamma, dHv, dT, Te, dGs = 0) {
    const dGv = (dHv * dT) / Te - dGs;
    return dGv <= 0 ? { r: Infinity, dG: Infinity, dGv } : { r: (2 * gamma) / dGv, dG: (16 * PI * gamma ** 3) / (3 * dGv * dGv), dGv };
  };
  /** 불균질 핵생성 형상 인자 S(θ) = (2 + cosθ)(1 − cosθ)²/4 */
  M.hetFactor = (thDeg) => { const c = Math.cos((thDeg * PI) / 180); return ((2 + c) * (1 - c) ** 2) / 4; };
  /**
   * 핵생성–성장 TTT 모형(정성용, 모양이 강의 펄라이트 C 곡선과 비슷하게 맞춘 값).
   * 평형 온도 Te(°C) 아래 과냉 ΔT에서 I = I0 exp(−B/(T ΔT²)) exp(−Qn/RT), G = G0 exp(−Qg/RT)(1 − exp(−c ΔT/T)).
   * p 기본값은 Te = 727 °C, 코 ≈ 600–650 °C, 1 % 변태 시간 ≈ 1 s, 400 °C에서 ≈ 20 s (n = 4). → {I, G, k, t(f)}
   */
  M.tttModel = function (p = {}) {
    const q = Object.assign({ Te: 727, I0: exp(55.6005), B: 8.371e6, Qn: 101.48, G0: exp(1.68598), Qg: 93.537, c: 0.1, n: 4 }, p);
    const rate = (TC) => {
      const T = TC + C.T0, dT = q.Te - TC;
      if (dT <= 0) return { I: 0, G: 0, k: 0 };
      const I = q.I0 * exp(-q.B / (T * dT * dT)) * exp((-q.Qn * 1e3) / (C.R * T));
      const G = q.G0 * exp((-q.Qg * 1e3) / (C.R * T)) * (1 - exp((-q.c * dT) / T));
      return { I, G, k: (PI * I * G ** 3) / 3 };
    };
    return { p: q, rate, t: (TC, f) => { const r = rate(TC); return r.k > 0 ? pow(-ln(1 - f) / r.k, 1 / q.n) : Infinity; } };
  };
  /** 냉각 경로를 따라 JMAK 가산 법칙으로 변태 분율 적분. path(t)→T°C, model=tttModel(), tEnd s → [[t, T, f]]
   *  stopBelow(°C, 선택): 이 온도(예: Ms) 아래에서는 확산 변태를 더 적분하지 않는다 */
  M.coolPath = function (model, path, tEnd, steps = 600, stopBelow = -Infinity) {
    const n = model.p.n, out = [];
    let f = 0, tPrev = 0;
    for (let i = 0; i <= steps; i++) {
      const t = (tEnd * i) / steps, TC = path(t), k = model.rate(TC).k;
      if (i > 0 && k > 0 && f < 0.999999 && TC >= stopBelow) {
        const tau = pow(-ln(1 - f) / k, 1 / n) + (t - tPrev);
        f = 1 - exp(-k * pow(tau, n));
      }
      tPrev = t;
      out.push([t, TC, f]);
    }
    return out;
  };
  /** 코이스티넨–마르부르거: 마르텐사이트 분율 f = 1 − exp(−α(Ms − T)) (T ≤ Ms, °C) */
  M.martensite = (TC, Ms = 220, a = 0.011) => (TC >= Ms ? 0 : 1 - exp(-a * (Ms - TC)));
  /** 탄소강 Ms(°C) 앤드루스 식(wt%) */
  M.andrewsMs = (c) => 539 - 423 * (c.C || 0) - 30.4 * (c.Mn || 0) - 17.7 * (c.Ni || 0) - 12.1 * (c.Cr || 0) - 7.5 * (c.Mo || 0);
  /** LSW 조대화: r̄³ − r̄0³ = K t, K = 8γ c∞ Vm² D/(9RT) */
  M.lswK = (gamma, cInf, Vm, D, T) => (8 * gamma * cInf * Vm * Vm * D) / (9 * C.R * T);
  M.lsw = (r0, K, t) => Math.cbrt(r0 ** 3 + K * t);
  /** 시효 경화 곡선 모형(정성): 강도 증가 = 석출 강화(자름/우회) with r(t) LSW 조대화. 반환 Δτ */
  M.agingCurve = function (t, p) {
    const q = Object.assign({ r0: 0.5, K: 1, f: 0.05, G: 26, b: 0.286, A: 600, tn: 1 }, p);
    const fr = q.f * (1 - exp(-t / q.tn)), r = M.lsw(q.r0, q.K, t);
    return fr > 1e-9 ? { r, f: fr, ...M.precipStrength(r, fr, q.G, q.b, q.A) } : { r, f: 0, cut: 0, bypass: 0, tau: 0, mech: "-" };
  };
  /** 칸–힐리아드 스피노달: 가장 빨리 자라는 파장 λ_m = 2π√(2κ/|f''|) */
  M.spinodalWavelength = (kappa, f2) => 2 * PI * sqrt((2 * kappa) / abs(f2));

  /* ------------------------------------------------------------ 응고와 결정 성장 */
  /** 조성적 과냉 기준: G/V < m C0 (1−k)/(k D) 이면 평탄 계면 불안정. (G K/m, V m/s, m K/wt%, D m²/s) */
  M.constSupercool = function (G, V, m, C0, k, D) {
    const crit = (abs(m) * C0 * (1 - k)) / (k * D);
    return { ratio: G / V, crit, unstable: G / V < crit, dT0: (abs(m) * C0 * (1 - k)) / k };
  };
  /** 2차 덴드라이트 팔 간격 λ2 = A Ṫ^{−n} (µm, Ṫ K/s) — Al 합금 대표 A ≈ 50 µm, n ≈ 1/3 */
  M.sdas = (rate, A = 50, n = 1 / 3) => A * pow(rate, -n);
  /** 실리콘 용융 자료: Tm K, 잠열 L J/kg, 고·액 밀도 kg/m³, 녹는점 근처 열전도도 */
  M.SiMelt = { Tm: 1687, L: 1.788e6, rhoS: 2330, rhoL: 2570, kS: 22, kL: 56 };
  /** 초크랄스키 최대 인상 속도 v_max = κ_s G_s/(ρ_s L) [m/s] (액상 쪽 열 유입 무시) */
  M.czMaxPull = (Gs, kS = 22, rhoS = 2330, L = 1.788e6) => (kS * Gs) / (rhoS * L);
  /** 열 균형: κ_s G_s − κ_l G_l = ρ_s L v → v */
  M.czPull = (Gs, Gl, m = M.SiMelt) => (m.kS * Gs - m.kL * Gl) / (m.rhoS * m.L);
  /** 보론코프 기준: ξ = V/G, ξ_crit ≈ 1.3e-3 cm²/(min·K) — 크면 공공형(COP), 작으면 틈새형 */
  M.voronkov = (V_mm_min, G_K_mm, xiCrit = 0.13) => { const xi = V_mm_min / G_K_mm; return { xi, xiCrit, type: xi > xiCrit * 1.03 ? "공공형(COP·보이드)" : xi < xiCrit * 0.97 ? "틈새형(전위 루프)" : "무결함 창" }; };
  /** 손턴 구조 영역 모형(스퍼터 박막): T/Tm, Ar 압력(mTorr) → 영역 1·T·2·3 (경계는 모형화한 대표값) */
  M.thorntonZone = function (TTm, p) {
    const lp = M.clamp(Math.log10(Math.max(p, 1)) / Math.log10(30), 0, 1);
    const b1 = 0.1 + 0.25 * lp, b2 = 0.3 + 0.15 * lp, b3 = 0.5 + 0.1 * lp;
    if (TTm < b1) return { zone: "1", desc: "가는 기둥과 빈틈(다공성)" };
    if (TTm < b2) return { zone: "T", desc: "치밀한 섬유상 결정립" };
    if (TTm < b3) return { zone: "2", desc: "표면 확산으로 굵어진 기둥" };
    return { zone: "3", desc: "부피 확산·재결정한 등축정" };
  };
  M.thorntonBounds = function (p) { const lp = M.clamp(Math.log10(Math.max(p, 1)) / Math.log10(30), 0, 1); return [0.1 + 0.25 * lp, 0.3 + 0.15 * lp, 0.5 + 0.1 * lp]; };
  /** 격자 불일치 f = (a_s − a_f)/a_f */
  M.misfit = (af, as) => (as - af) / af;

  /* ------------------------------------------------------------ 세라믹과 유리 */
  /** VFT 점도 log₁₀η[Pa·s] = A + B/(T − T0) (T °C). 코닝 유리의 변형·서냉·연화·작업점에 맞춘 값 */
  M.glassVFT = {
    SodaLime: { A: -4.0827, B: 6201.88, T0: 122.95, pts: { strain: 473, anneal: 514, soften: 696, work: 1005 } },
    Boro: { A: -3.6123, B: 7927.27, T0: 48.64, pts: { strain: 510, anneal: 560, soften: 820, work: 1252 } },
    SiO2: { A: 2.9696, B: 3296.55, T0: 676.95, pts: { strain: 990, anneal: 1042, soften: 1585 } },
  };
  M.viscosity = (g, TC) => 10 ** (g.A + g.B / (TC - g.T0));
  /** 유리 점도 기준점(Pa·s, log₁₀): 녹임 1, 작업 3, 연화 6.6, 서냉 12, 변형 13.5 */
  M.viscosityPoints = { melt: 1, work: 3, soften: 6.6, anneal: 12, strain: 13.5 };
  /** 점도가 10^logEta 가 되는 온도(°C) */
  M.viscosityT = (g, logEta) => g.T0 + g.B / (logEta - g.A);
  /** 소결 목 성장 (x/r)ⁿ = B t / r^m — 기구: 'viscous'(n2,m1), 'evap'(n3,m2), 'volume'(n5,m3), 'gb'(n6,m4), 'surface'(n7,m4) */
  M.neckModels = { viscous: [2, 1], evap: [3, 2], volume: [5, 3], gb: [6, 4], surface: [7, 4] };
  M.neckRatio = (mech, B, t, r) => { const [n, m] = M.neckModels[mech]; return pow((B * t) / pow(r, m), 1 / n); };
  /** 헤링 크기 법칙: 같은 정도로 소결하는 시간 비 t2/t1 = (r2/r1)^m */
  M.herring = (r1, r2, m) => pow(r2 / r1, m);
  /** 기공률 → 탄성률 감소 E = E0(1 − 1.9P + 0.9P²) (맥켄지) ; 강도 σ = σ0 exp(−nP) */
  M.porousE = (E0, P) => E0 * (1 - 1.9 * P + 0.9 * P * P);
  M.porousStrength = (s0, P, n = 6) => s0 * exp(-n * P);
  /** 3점 굽힘 강도 σ = 3FL/(2bd²) (직사각), 원형 FL/(πR³) */
  M.flexural3pt = (F, L, b, d) => (3 * F * L) / (2 * b * d * d);
  M.flexuralRound = (F, L, R) => (F * L) / (PI * R ** 3);

  /* ------------------------------------------------------------ 고분자 */
  /** 단량체 몰 질량(g/mol) 대표값 */
  M.mers = { PE: 28.05, PP: 42.08, PS: 104.15, PVC: 62.50, PMMA: 100.12, PTFE: 100.02, PC: 254.3, PA66: 226.3, PET: 192.17 };
  /** 플로리(가장 그럴듯한) 분포 — 반응 정도 p: 수 분율 n(x) = (1−p)p^{x−1}, 무게 분율 w(x) = x(1−p)²p^{x−1} */
  M.floryN = (x, p) => (1 - p) * pow(p, x - 1);
  M.floryW = (x, p) => x * (1 - p) ** 2 * pow(p, x - 1);
  /** 카로더스: Xn = 1/(1−p), Xw = (1+p)/(1−p), 분산도 Đ = 1 + p */
  M.carothers = (p) => ({ Xn: 1 / (1 - p), Xw: (1 + p) / (1 - p), PDI: 1 + p });
  /** 사슬 몰 질량 목록 → {Mn, Mw, PDI} (masses g/mol, 각 사슬 하나씩; counts 주면 가중) */
  M.molarMoments = function (masses, counts) {
    let n0 = 0, n1 = 0, n2 = 0;
    for (let i = 0; i < masses.length; i++) { const c = counts ? counts[i] : 1, m = masses[i]; n0 += c; n1 += c * m; n2 += c * m * m; }
    return { Mn: n1 / n0, Mw: n2 / n1, PDI: (n2 * n0) / (n1 * n1) };
  };
  /** 자유 결합 사슬: N 고리, 고리 길이 b → 끝–끝 거리 RMS √N b, 회전 반지름 √(N/6) b, 윤곽 길이 N b */
  M.fjc = (N, b) => ({ R: sqrt(N) * b, Rg: sqrt(N / 6) * b, Lc: N * b });
  /** 무작위 걸음 사슬(2D 또는 3D 점열), 시드 */
  M.randomChain = function (N, b = 1, seed = 1, dim = 2) {
    const r = M.rng(seed), pts = [[0, 0, 0]];
    for (let i = 0; i < N; i++) {
      const p = pts[i];
      if (dim === 2) { const a = 2 * PI * r(); pts.push([p[0] + b * Math.cos(a), p[1] + b * Math.sin(a), 0]); }
      else { const z = 2 * r() - 1, a = 2 * PI * r(), s = sqrt(1 - z * z); pts.push([p[0] + b * s * Math.cos(a), p[1] + b * s * Math.sin(a), p[2] + b * z]); }
    }
    return pts;
  };
  /** 점열의 끝–끝 거리와 회전 반지름 */
  M.chainStats = function (pts) {
    const n = pts.length, c = [0, 0, 0];
    for (const p of pts) for (let k = 0; k < 3; k++) c[k] += p[k] / n;
    let rg = 0;
    for (const p of pts) rg += (p[0] - c[0]) ** 2 + (p[1] - c[1]) ** 2 + (p[2] - c[2]) ** 2;
    const e = pts[n - 1], s = pts[0];
    return { R: sqrt((e[0] - s[0]) ** 2 + (e[1] - s[1]) ** 2 + (e[2] - s[2]) ** 2), Rg: sqrt(rg / n) };
  };
  /** 결정화도(%) = ρc(ρs − ρa)/(ρs(ρc − ρa)) × 100 */
  M.crystallinity = (rhoS, rhoC, rhoA) => (100 * rhoC * (rhoS - rhoA)) / (rhoS * (rhoC - rhoA));
  /** 폭스 식 1/Tg = w1/Tg1 + w2/Tg2 ; 플로리–폭스 Tg = Tg∞ − K/Mn */
  M.fox = (w1, Tg1, Tg2) => 1 / (w1 / Tg1 + (1 - w1) / Tg2);
  M.floryFox = (TgInf, K, Mn) => TgInf - K / Mn;
  /** WLF 이동 인자 log₁₀ aT = −C1(T − Tr)/(C2 + T − Tr) (기준 Tg에서 C1 = 17.44, C2 = 51.6 K) */
  M.wlf = (T, Tr, C1 = 17.44, C2 = 51.6) => (-C1 * (T - Tr)) / (C2 + T - Tr);
  /** 점탄성 모형 — 맥스웰 응력 완화, 켈빈–보이트 크리프, 표준 선형 고체(제너) */
  M.maxwellRelax = (E, tau, t) => E * exp(-t / tau);
  M.kelvinCreep = (s0, E, tau, t) => (s0 / E) * (1 - exp(-t / tau));
  /** 표준 선형 고체(E1 스프링 ∥ (E2 스프링–η 대시포트)): 완화 E(t) = E1 + E2 e^{−t/τ}, τ = η/E2 */
  M.slsRelax = (E1, E2, tau, t) => E1 + E2 * exp(-t / tau);
  /** SLS 크리프 컴플라이언스 J(t) = 1/E1 − (E2/(E1(E1+E2))) e^{−t/τc}, τc = τ(E1+E2)/E1 */
  M.slsCreep = (E1, E2, tau, t) => 1 / E1 - (E2 / (E1 * (E1 + E2))) * exp(-t / ((tau * (E1 + E2)) / E1));
  /** 일반화 맥스웰(프로니 급수): 저장·손실 탄성률 E'(ω), E''(ω), tanδ — terms=[{E, tau}], Einf */
  M.prony = function (Einf, terms, w) {
    let Ep = Einf, Epp = 0;
    for (const { E, tau } of terms) { const x = w * tau; Ep += (E * x * x) / (1 + x * x); Epp += (E * x) / (1 + x * x); }
    return { Ep, Epp, tan: Epp / Ep };
  };
  /** SLS 시간 적분 한 걸음: 상태 {e, s1(가지 응력)}, 변형 속도 de/dt → 총 응력 (반암시적) */
  M.slsStep = function (st, dedt, dt, E1, E2, tau) {
    // 맥스웰 가지: ds1/dt = E2 de/dt − s1/τ
    st.e += dedt * dt;
    st.s1 = (st.s1 + E2 * dedt * dt) / (1 + dt / tau);
    return E1 * st.e + st.s1;
  };
  /** 고무 탄성(아핀 망목): 공칭 응력 σ = G(λ − 1/λ²), G = nkT = ρRT/Mc (ρ kg/m³, Mc kg/mol → Pa) */
  M.rubberStress = (G, lam) => G * (lam - 1 / (lam * lam));
  M.rubberG = (rho, Mc, T) => (rho * C.R * T) / Mc;
  /** 겔화점(플로리–스톡마이어, 화학량론): α_gel = 1/√((fA−1)(fB−1)) */
  M.gelPoint = (fA, fB) => 1 / sqrt((fA - 1) * (fB - 1));
  /** 카말 경화 속도 dα/dt = (k1 + k2 α^m)(1−α)^n, kᵢ = Aᵢ exp(−Eᵢ/RT). 등온 적분 → [[t, α]] */
  M.kamal = function (p, TK, tEnd, steps = 400) {
    const k1 = p.A1 * exp((-p.E1 * 1e3) / (C.R * TK)), k2 = p.A2 * exp((-p.E2 * 1e3) / (C.R * TK));
    const f = (a) => (k1 + k2 * pow(Math.max(a, 0), p.m)) * pow(Math.max(1 - a, 0), p.n);
    let a = 0; const out = [[0, 0]], dt = tEnd / steps;
    for (let i = 1; i <= steps; i++) {
      const s1 = f(a), s2 = f(a + 0.5 * dt * s1), s3 = f(a + 0.5 * dt * s2), s4 = f(a + dt * s3);
      a = Math.min(1, a + (dt / 6) * (s1 + 2 * s2 + 2 * s3 + s4));
      out.push([i * dt, a]);
    }
    return out;
  };
  /** 에폭시 몰딩 컴파운드형 경화 대표 매개변수(시간 s, E kJ/mol) */
  M.kamalEMC = { A1: 2.0e7, E1: 80, A2: 3.0e8, E2: 75, m: 1.0, n: 1.5 };

  /* ------------------------------------------------------------ 복합재료 */
  /** 보이트(등변형, 상한) Ec = Vf Ef + (1−Vf) Em, 로이스(등응력, 하한) */
  M.voigt = (Ef, Em, Vf) => Vf * Ef + (1 - Vf) * Em;
  M.reuss = (Ef, Em, Vf) => 1 / (Vf / Ef + (1 - Vf) / Em);
  /** 하신–슈트리크만 체적·전단 탄성률 경계(등방 두 상) → {Klo, Khi, Glo, Ghi, Elo, Ehi} (상1이 무른 상이면 lo) */
  M.hashinShtrikman = function (K1, G1, K2, G2, V2) {
    const V1 = 1 - V2;
    const Kb = (Ka, Ga, Kb_, Va, Vb) => Ka + Vb / (1 / (Kb_ - Ka) + (3 * Va) / (3 * Ka + 4 * Ga));
    const Gb = (Ka, Ga, Gb_, Va, Vb) => Ga + Vb / (1 / (Gb_ - Ga) + (6 * Va * (Ka + 2 * Ga)) / (5 * Ga * (3 * Ka + 4 * Ga)));
    const KA = Kb(K1, G1, K2, V1, V2), KB = Kb(K2, G2, K1, V2, V1), GA = Gb(K1, G1, G2, V1, V2), GB = Gb(K2, G2, G1, V2, V1);
    const Klo = Math.min(KA, KB), Khi = Math.max(KA, KB), Glo = Math.min(GA, GB), Ghi = Math.max(GA, GB);
    const E = (K, G) => (9 * K * G) / (3 * K + G);
    return { Klo, Khi, Glo, Ghi, Elo: E(Klo, Glo), Ehi: E(Khi, Ghi) };
  };
  /** 할핀–차이 E/Em = (1 + ξηVf)/(1 − ηVf), η = (Ef/Em − 1)/(Ef/Em + ξ) — ξ: 횡방향 2, 짧은 섬유 축 2l/d */
  M.halpinTsai = (Ef, Em, Vf, xi = 2) => { const eta = (Ef / Em - 1) / (Ef / Em + xi); return (Em * (1 + xi * eta * Vf)) / (1 - eta * Vf); };
  /** 임계 섬유 길이 lc = σf d/(2τc) */
  M.criticalFiberLength = (sf, d, tauc) => (sf * d) / (2 * tauc);
  /** 섬유 방향 복합재 강도: 연속 섬유 σ = σf Vf + σm'(1−Vf); 불연속 l > lc: σf Vf(1 − lc/2l) + …; l < lc: (lτc/d)Vf + … */
  M.fiberStrength = function (sf, smp, Vf, l = Infinity, lc = 0, d = 1, tauc = 0) {
    if (!isFinite(l)) return sf * Vf + smp * (1 - Vf);
    if (l > lc) return sf * Vf * (1 - lc / (2 * l)) + smp * (1 - Vf);
    return ((l * tauc) / d) * Vf + smp * (1 - Vf);
  };
  /** 단방향 판(UD)의 비축 영률 Ex(θ): 1/Ex = c⁴/E1 + (1/G12 − 2ν12/E1)s²c² + s⁴/E2 */
  M.offAxisE = function (E1, E2, G12, nu12, thDeg) {
    const t = (thDeg * PI) / 180, c = Math.cos(t), s = Math.sin(t);
    return 1 / (c ** 4 / E1 + (1 / G12 - (2 * nu12) / E1) * s * s * c * c + s ** 4 / E2);
  };
  /** UD 판: 섬유 방향 E1(보이트 혼합 법칙), 횡방향 E2·G12(할핀–차이, ξ = 2·1), ν12(혼합 법칙) */
  M.udPly = (Ef, Em, nuf, num, Vf) => {
    const Gf = Ef / (2 * (1 + nuf)), Gm = Em / (2 * (1 + num));
    return { E1: M.voigt(Ef, Em, Vf), E2: M.halpinTsai(Ef, Em, Vf, 2), nu12: Vf * nuf + (1 - Vf) * num, G12: M.halpinTsai(Gf, Gm, Vf, 1) };
  };
  /** 열팽창: 단순 혼합 α = Σ Vα, 터너 α = Σ αKV/Σ KV, 커너(구형 입자) */
  M.cteMix = (af, am, Vf) => Vf * af + (1 - Vf) * am;
  M.cteTurner = (af, Kf, am, Km, Vf) => (af * Kf * Vf + am * Km * (1 - Vf)) / (Kf * Vf + Km * (1 - Vf));
  M.cteKerner = function (af, Kf, Gf, am, Km, Gm, Vf) {
    const Vm = 1 - Vf, ab = Vf * af + Vm * am, Kb = Vf * Kf + Vm * Km;
    return ab + Vf * Vm * (af - am) * ((Kf - Km) / (Vm * Kf + Vf * Km + (3 * Kf * Km) / (4 * Gm)));
  };
  /** 열전도: 직렬(하한)·병렬(상한), 맥스웰–오이켄(구형 충전재), 루이스–닐슨(고충전) */
  M.kParallel = (kf, km, Vf) => M.voigt(kf, km, Vf);
  M.kSeries = (kf, km, Vf) => M.reuss(kf, km, Vf);
  M.kMaxwell = (kp, km, Vf) => (km * (kp + 2 * km + 2 * Vf * (kp - km))) / (kp + 2 * km - Vf * (kp - km));
  M.kLewisNielsen = function (kp, km, Vf, A = 1.5, phim = 0.637) {
    const B = (kp / km - 1) / (kp / km + A), psi = 1 + ((1 - phim) / (phim * phim)) * Vf;
    const den = 1 - B * psi * Vf;
    return den > 0 ? (km * (1 + A * B * Vf)) / den : NaN; // 최대 충진 분율 φm 근처·이상에서는 정의되지 않음
  };
  /** 무게 분율 → 부피 분율 (충전재 밀도 ρf, 기지 ρm) */
  M.wt2vol = (wf, rhof, rhom) => wf / rhof / (wf / rhof + (1 - wf) / rhom);

  /* ------------------------------------------------------------ 전기·유전 성질 */
  /** 마티센 규칙: ρ = ρ_열(T) + ρ_불순물 + ρ_변형. ρ_열 = ρ0[1 + α(T − T0)] */
  M.matthiessen = (rho0, tcr, T, rhoImp = 0, rhoDef = 0, T0 = 293.15) => rho0 * (1 + tcr * (T - T0)) + rhoImp + rhoDef;
  /** 노르트하임 규칙: ρ_i = A x(1−x) (x 원자 분율) */
  M.nordheim = (A, x) => A * x * (1 - x);
  /** 배선 금속 크기 효과 자료(Gall 2016 근방): ρ0 µΩ·cm, 전자 평균 자유 행로 λ nm */
  M.wireMetals = {
    Cu: { rho0: 1.72, lambda: 39.9 }, Ag: { rho0: 1.63, lambda: 53.3 }, Au: { rho0: 2.27, lambda: 37.7 }, Al: { rho0: 2.71, lambda: 18.9 },
    W: { rho0: 5.33, lambda: 15.5 }, Mo: { rho0: 5.37, lambda: 11.2 }, Co: { rho0: 6.2, lambda: 11.8 }, Ru: { rho0: 7.8, lambda: 6.59 },
    Ni: { rho0: 6.93, lambda: 5.87 }, Rh: { rho0: 4.33, lambda: 6.88 }, Ir: { rho0: 4.71, lambda: 7.09 },
  };
  /** 간이 크기 효과(FS 박막 근사 + MS 결정립 근사의 합): ρ/ρ0 ≈ 1 + (3/8)(1−p)λ/w + (3/2)(R/(1−R))λ/d */
  M.sizeEffect = (rho0, lambda, w, d = w, p = 0, Rg = 0.3) => rho0 * (1 + (0.375 * (1 - p) * lambda) / w + (1.5 * (Rg / (1 - Rg)) * lambda) / d);
  /** 면저항 Rs = ρ/t [Ω/□] (ρ Ω·m, t m) */
  M.sheetR = (rho, t) => rho / t;
  /** 비데만–프란츠 κ_e = L σ T */
  M.wiedemannFranz = (sigma, T, L = 2.44e-8) => L * sigma * T;
  /** 반도체 저항률 ρ = 1/(q(nμn + pμp)) (cm⁻³, cm²/Vs → Ω·cm) */
  M.semiRho = (n, mun, p = 0, mup = 0) => 1 / (C.e * (n * mun + p * mup));
  /** 이온 전도 σT = A exp(−Ea/kT) → σ (Ea eV) */
  M.ionicSigma = (A, EaEV, T) => (A / T) * exp(-EaEV / (C.kB_eV * T));
  /** 디바이 완화 ε*(ω) = ε∞ + Δε/(1 + (iωτ)^{1−α}) (콜–콜 α, 0 = 디바이), σdc 전도 손실 선택 → {re, im, tan} (ε* = ε' − iε'') */
  M.debye = function (w, epsInf, dEps, tau, alpha = 0, sigmaDC = 0) {
    const x = pow(w * tau, 1 - alpha), ph = ((1 - alpha) * PI) / 2;
    const dr = 1 + x * Math.cos(ph), di = x * Math.sin(ph), den = dr * dr + di * di;
    const re = epsInf + (dEps * dr) / den, im = (dEps * di) / den + (w > 0 ? sigmaDC / (w * C.eps0) : 0);
    return { re, im, tan: im / re };
  };
  /** 등가 산화막 두께 EOT = Σ tᵢ (3.9/kᵢ) — layers=[{t nm, k}] */
  M.eot = (layers) => layers.reduce((a, L) => a + (L.t * 3.9) / L.k, 0);
  /** 평판 축전기 C/A = ε0 k / t (F/m²; t m) → fF/µm² */
  M.capDensity = (k, t_nm) => ((C.eps0 * k) / (t_nm * 1e-9)) * 1e15 / 1e12;
  /** 클라우지우스–모소티: (ε−1)/(ε+2) = Nα/(3ε0) → ε */
  M.clausiusMossotti = (N, alpha) => { const x = (N * alpha) / (3 * C.eps0); return (1 + 2 * x) / (1 - x); };
  /** 란다우–데본셔 강유전체(2–4차): F = a P²/2 + b P⁴/4 − EP, a < 0 → 자발 분극 Ps = √(−a/b), 항전기장 Ec = (2/(3√3))(−a)^{3/2}/√b */
  M.landauFE = (a, b) => ({ Ps: sqrt(-a / b), Ec: ((2 / (3 * sqrt(3))) * pow(-a, 1.5)) / sqrt(b) });
  /** 란다우–칼라트니코프 동역학 dP/dt = −Γ(aP + bP³ − E) 으로 이력 곡선(E(t) = E0 sin 2πft). 무차원 → [[E, P]] */
  M.feLoop = function (p = {}) {
    const q = Object.assign({ a: -1, b: 1, Gamma: 20, E0: 1.2, f: 0.5, cycles: 2, steps: 4000, P0: -1 }, p);
    let P = q.P0; const out = [], dt = q.cycles / q.f / q.steps;
    for (let i = 0; i <= q.steps; i++) {
      const t = i * dt, E = q.E0 * Math.sin(2 * PI * q.f * t);
      P += -q.Gamma * (q.a * P + q.b * P ** 3 - E) * dt;
      if (i > q.steps / q.cycles) out.push([E, P]);
    }
    return out;
  };
  /** 압전 계수 d33(pC/N) 대표값 */
  M.piezo = { "PZT-5H": 593, "PZT-4": 289, BaTiO3: 190, ZnO: 12.4, AlN: 5.5, "Sc0.3Al0.7N": 15, GaN: 3.1, "석영(d11)": 2.3, PVDF: -33 };

  /* ------------------------------------------------------------ 열·광학 성질 */
  /** 모스 퍼텐셜 U = D(1 − e^{−a(r−r0)})² 의 고전 열평균 위치 → 선팽창 계수(수치 미분). D eV, a 1/Å, r0 Å */
  M.morseMean = function (D, a, r0, T) {
    const kT = C.kB_eV * Math.max(T, 1e-3), lo = r0 - 1.2 / a, hi = r0 + 6 / a;
    const U = (r) => D * (1 - exp(-a * (r - r0))) ** 2;
    const w = (r) => exp(-U(r) / kT);
    return M.simpson((r) => r * w(r), lo, hi, 2000) / M.simpson(w, lo, hi, 2000);
  };
  M.morseAlpha = (D, a, r0, T) => { const dT = Math.max(1, T * 0.01); return (M.morseMean(D, a, r0, T + dT) - M.morseMean(D, a, r0, T - dT)) / (2 * dT) / r0; };
  /** 그뤼나이젠 관계 α_V = γ C_V /(K_T V_m) → 선팽창 α = α_V/3 (C_V J/(mol K), K GPa, V_m m³/mol) */
  M.gruneisenAlpha = (gamma, Cv, K, Vm) => (gamma * Cv) / (K * 1e9 * Vm) / 3;
  /** 직렬 열저항(층 두께 L m, κ, 면적 A m²) + 계면 열저항 Rint (m²K/W) → K/W */
  M.Rlayers = (layers, A, Rint = 0) => layers.reduce((s, L) => s + L.L / (L.k * A), 0) + (Rint * Math.max(layers.length - 1, 0)) / A;
  /** 셀마이어 굴절률 n(λ µm) — 계수 B, C(µm²) */
  M.sellmeierData = {
    SiO2: { B: [0.6961663, 0.4079426, 0.8974794], C: [0.0684043 ** 2, 0.1162414 ** 2, 9.896161 ** 2] },
    Al2O3: { B: [1.4313493, 0.65054713, 5.3414021], C: [0.0726631 ** 2, 0.1193242 ** 2, 18.028251 ** 2] },
    Si3N4: { B: [3.0249, 40314], C: [0.1353406 ** 2, 1239.842 ** 2] },
    CaF2: { B: [0.5675888, 0.4710914, 3.8484723], C: [0.050263605 ** 2, 0.1003909 ** 2, 34.649040 ** 2] },
  };
  M.sellmeier = function (name, lam) {
    const d = typeof name === "string" ? M.sellmeierData[name] : name, l2 = lam * lam;
    let s = 1;
    for (let i = 0; i < d.B.length; i++) s += (d.B[i] * l2) / (l2 - d.C[i]);
    return sqrt(s);
  };
  /** 코시 n(λ) = A + B/λ² + C/λ⁴ (λ µm) */
  M.cauchy = (A, B, lam, Cc = 0) => A + B / (lam * lam) + Cc / lam ** 4;
  /** 수직 입사 반사율 R = ((n−n0)² + k²)/((n+n0)² + k²) */
  M.reflectance = (n, k = 0, n0 = 1) => ((n - n0) ** 2 + k * k) / ((n + n0) ** 2 + k * k);
  /** 흡수 계수 α = 4πk/λ (λ nm → 1/cm), 침투 깊이 1/α */
  M.absorptionCoef = (k, lam_nm) => (4 * PI * k) / (lam_nm * 1e-7);
  /** 베르–람베르트 투과 T = (1−R)² e^{−αd} / (1 − R² e^{−2αd}) (다중 반사 포함, 비간섭) */
  M.slabTransmission = (R, alpha, d) => { const x = exp(-alpha * d); return ((1 - R) ** 2 * x) / (1 - R * R * x * x); };
  /** 띠틈 ↔ 차단 파장 λ = hc/Eg (nm) */
  M.cutoff = (Eg) => C.hc_eVnm / Eg;
  /** 바르시니 Eg(T) = Eg0 − aT²/(T + b) (Si: 1.170, 4.73e-4, 636) */
  M.varshni = (T, Eg0 = 1.17, a = 4.73e-4, b = 636) => Eg0 - (a * T * T) / (T + b);
  /** 타우크 모형 흡수 α(hν) = A (hν − Eg)^r / hν (r = 1/2 직접 허용, 2 간접) + 바닥 */
  M.taucAlpha = (E, Eg, A = 1e5, r = 0.5, floor = 0) => (E > Eg ? (A * pow(E - Eg, r)) / E : 0) + floor;
  /** 타우크 그림 직선 외삽: (E, α) 점열에서 (αE)^{1/r}의 직선 부분(위쪽 frac) 맞춤 → Eg */
  M.taucFit = function (Es, alphas, r = 0.5, lo = 0.2, hi = 0.8) {
    const Y = Es.map((E, i) => pow(alphas[i] * E, 1 / r)), ymax = Math.max(...Y), X2 = [], Y2 = [];
    for (let i = 0; i < Es.length; i++) if (Y[i] > lo * ymax && Y[i] < hi * ymax) { X2.push(Es[i]); Y2.push(Y[i]); }
    const f = M.linfit(X2, Y2);
    return { Eg: -f.a / f.b, slope: f.b, r2: f.r2, Y };
  };
  /** 파장(nm) → 화면색 [r,g,b] 0–255 (가시광 근사, 고정색) */
  M.wavelengthRGB = function (lam) {
    let r = 0, g = 0, b = 0;
    if (lam >= 380 && lam < 440) { r = -(lam - 440) / 60; b = 1; }
    else if (lam < 490) { g = (lam - 440) / 50; b = 1; }
    else if (lam < 510) { g = 1; b = -(lam - 510) / 20; }
    else if (lam < 580) { r = (lam - 510) / 70; g = 1; }
    else if (lam < 645) { r = 1; g = -(lam - 645) / 65; }
    else if (lam <= 780) { r = 1; }
    let f = 0;
    if (lam >= 380 && lam < 420) f = 0.3 + (0.7 * (lam - 380)) / 40; else if (lam < 701) f = lam >= 420 ? 1 : 0; else if (lam <= 780) f = 0.3 + (0.7 * (780 - lam)) / 80;
    return [r, g, b].map((v) => Math.round(255 * pow(v * f, 0.8)));
  };

  /* ------------------------------------------------------------ 열화와 신뢰성 */
  /** 필링–베드워스 비 PBR = (M_ox ρ_m)/(n M_m ρ_ox) — n: 산화물 화학식당 금속 원자 수 */
  M.pbr = (Mox, rhoM, n, Mm, rhoOx) => (Mox * rhoM) / (n * Mm * rhoOx);
  /** 대표 금속–산화물 쌍(몰 질량 g/mol, 밀도 g/cm³) */
  M.oxides = {
    Mg: { ox: "MgO", Mox: 40.30, rhoOx: 3.58, n: 1, Mm: 24.305, rhoM: 1.74 },
    Al: { ox: "Al₂O₃", Mox: 101.96, rhoOx: 3.95, n: 2, Mm: 26.98, rhoM: 2.70 },
    Ti: { ox: "TiO₂", Mox: 79.87, rhoOx: 4.23, n: 1, Mm: 47.87, rhoM: 4.51 },
    Cr: { ox: "Cr₂O₃", Mox: 151.99, rhoOx: 5.22, n: 2, Mm: 52.00, rhoM: 7.19 },
    Fe: { ox: "FeO", Mox: 71.84, rhoOx: 5.74, n: 1, Mm: 55.85, rhoM: 7.87 },
    Ni: { ox: "NiO", Mox: 74.69, rhoOx: 6.67, n: 1, Mm: 58.69, rhoM: 8.90 },
    Cu: { ox: "Cu₂O", Mox: 143.09, rhoOx: 6.00, n: 2, Mm: 63.55, rhoM: 8.96 },
    Si: { ox: "SiO₂", Mox: 60.08, rhoOx: 2.27, n: 1, Mm: 28.09, rhoM: 2.33 },
    Ta: { ox: "Ta₂O₅", Mox: 441.89, rhoOx: 8.2, n: 2, Mm: 180.95, rhoM: 16.6 },
    W: { ox: "WO₃", Mox: 231.84, rhoOx: 7.16, n: 1, Mm: 183.84, rhoM: 19.3 },
    Na: { ox: "Na₂O", Mox: 61.98, rhoOx: 2.27, n: 2, Mm: 22.99, rhoM: 0.97 },
  };
  M.pbrOf = (m) => { const o = M.oxides[m]; return M.pbr(o.Mox, o.rhoM, o.n, o.Mm, o.rhoOx); };
  /** 산화 속도 법칙: 선형 x = kl t, 포물선 x² = kp t, 로그 x = ke log(1 + t/τ) */
  M.oxLinear = (kl, t) => kl * t;
  M.oxParabolic = (kp, t) => sqrt(kp * t);
  M.oxLog = (ke, t, tau = 1) => ke * Math.log10(1 + t / tau);
  /** 블랙 식 MTTF = A j^{−n} exp(Ea/kT) (j 임의 단위, Ea eV) ; 가속 계수(시험/사용) */
  M.black = (A, j, n, EaEV, T) => A * pow(j, -n) * exp(EaEV / (C.kB_eV * T));
  M.blackAF = (jUse, Tuse, jTest, Ttest, n, EaEV) => pow(jTest / jUse, n) * exp((EaEV / C.kB_eV) * (1 / Tuse - 1 / Ttest));
  /** 블레흐 임계곱 (jL)_c = Δσ Ω/(Z* e ρ) [A/m] (Δσ Pa, Ω m³, ρ Ω·m) */
  M.blech = (dSigma, Omega, Zstar, rho) => (dSigma * Omega) / (Zstar * C.e * rho);
  /** 일렉트로마이그레이션 표류 속도 v = (D/kT) Z* e ρ j (D m²/s, j A/m²) */
  M.emDrift = (D, T, Zstar, rho, j) => ((D / (C.kB * T)) * Zstar * C.e * rho * j);
  /** 응력 이동 MTTF = C (T0 − T)^{−N} exp(Ea/kT) — T0 무응력 온도(K) */
  M.stressMigration = (T, p) => (T >= p.T0 ? Infinity : p.C * pow(p.T0 - T, -p.N) * exp(p.Ea / (C.kB_eV * T)));
  /** 노리스–란츠베르크 가속 계수 AF = (ΔT_t/ΔT_u)^n (f_u/f_t)^m exp(Ea/k (1/Tmax,u − 1/Tmax,t)) */
  M.nlData = { SnPb: { n: 1.9, m: 1 / 3, EaK: 1414 }, SAC: { n: 2.65, m: 0.136, EaK: 2185 } };
  M.norrisLandzberg = (dTt, dTu, ft, fu, TmaxT, TmaxU, p = M.nlData.SnPb) => pow(dTt / dTu, p.n) * pow(fu / ft, p.m) * exp(p.EaK * (1 / TmaxU - 1 / TmaxT));
  /** 펙 습도 모형 AF = (RH_t/RH_u)^n exp(Ea/k (1/Tu − 1/Tt)) */
  M.peckAF = (RHt, RHu, Tt, Tu, n = 3, EaEV = 0.79) => pow(RHt / RHu, n) * exp((EaEV / C.kB_eV) * (1 / Tu - 1 / Tt));
  /** 아레니우스 가속 계수 AF = exp(Ea/k (1/Tu − 1/Tt)) */
  M.arrheniusAF = (Tu, Tt, EaEV) => exp((EaEV / C.kB_eV) * (1 / Tu - 1 / Tt));
  /** TDDB E 모형 t = t0 exp(−γE) exp(Ea/kT), 1/E 모형 t = τ0 exp(G/E) */
  M.tddbE = (E, T, t0, gamma, EaEV) => t0 * exp(-gamma * E) * exp(EaEV / (C.kB_eV * T));
  M.tddb1E = (E, tau0, G) => tau0 * exp(G / E);
  /** 커핀–맨슨형 솔더 접합 열 피로 수명(엥겔마이어 간이): Nf = ½ (Δγ/(2εf'))^{1/c}, Δγ = F L_D Δα ΔT / h */
  M.engelmaier = function (F, LD, dAlpha_ppm, dT, h, efp = 0.325, c = -0.442) {
    const dg = (F * LD * dAlpha_ppm * 1e-6 * dT) / h;
    return { dGamma: dg, Nf: 0.5 * pow(dg / (2 * efp), 1 / c) };
  };

  /* ------------------------------------------------------------ 재료 분석 */
  /** 전자 파장(상대론) λ = h/√(2 m e V (1 + eV/(2mc²))) → nm */
  M.electronLambda = (V) => (C.h / sqrt(2 * C.me * C.e * V * (1 + (C.e * V) / (2 * C.me * C.c * C.c)))) * 1e9;
  /** 셰르처 분해능 d = 0.66 Cs^{1/4} λ^{3/4} (Cs mm, λ nm → nm) */
  M.scherzer = (Cs_mm, lam_nm) => 0.66 * pow(Cs_mm * 1e6, 0.25) * pow(lam_nm, 0.75);
  /** 레일리 분해능 d = 0.61 λ/NA */
  M.rayleigh = (lam, NA) => (0.61 * lam) / NA;
  /** 카나야–오카야마 전자 투과 범위 R(µm) = 0.0276 A E^{1.67}/(Z^{0.889} ρ) (E keV, A g/mol, ρ g/cm³) */
  M.kanaya = (E, A, Z, rho) => (0.0276 * A * pow(E, 1.67)) / (pow(Z, 0.889) * rho);
  /** 모즐리 법칙 Kα 근사 E ≈ 10.2 eV (Z−1)² (keV) */
  M.moseley = (Z) => (10.2 * (Z - 1) ** 2) / 1000;
  /** 특성 X선 에너지 표(keV) — EDS 겹침 확인용 */
  M.xrayLines = [
    ["C", "Kα", 0.277], ["N", "Kα", 0.392], ["O", "Kα", 0.525], ["F", "Kα", 0.677], ["Na", "Kα", 1.041], ["Mg", "Kα", 1.254],
    ["Al", "Kα", 1.487], ["Si", "Kα", 1.740], ["P", "Kα", 2.014], ["S", "Kα", 2.308], ["Cl", "Kα", 2.622], ["K", "Kα", 3.314],
    ["Ca", "Kα", 3.692], ["Ti", "Kα", 4.511], ["Ti", "Lα", 0.452], ["Cr", "Kα", 5.415], ["Fe", "Kα", 6.404], ["Co", "Kα", 6.930],
    ["Ni", "Kα", 7.478], ["Cu", "Kα", 8.048], ["Cu", "Lα", 0.930], ["Zn", "Kα", 8.639], ["Ga", "Kα", 9.252], ["Ga", "Lα", 1.098],
    ["Ge", "Kα", 9.886], ["As", "Kα", 10.544], ["Zr", "Lα", 2.042], ["Mo", "Lα", 2.293], ["Mo", "Kα", 17.479], ["Ru", "Lα", 2.558],
    ["Ag", "Lα", 2.984], ["Sn", "Lα", 3.444], ["Hf", "Mα", 1.645], ["Hf", "Lα", 7.899], ["Ta", "Mα", 1.710], ["Ta", "Lα", 8.146],
    ["W", "Mα", 1.775], ["W", "Lα", 8.398], ["Pt", "Mα", 2.051], ["Au", "Mα", 2.123], ["Pb", "Mα", 2.342],
  ];
  /** 에너지 E(keV) 근처 ±tol의 선 찾기 */
  M.linesNear = (E, tol = 0.06) => M.xrayLines.filter((l) => abs(l[2] - E) <= tol);
  /** XPS: 운동 에너지 KE = hν − BE − φ (Al Kα 1486.6, Mg Kα 1253.6 eV) */
  M.xpsKE = (BE, hv = 1486.6, phi = 4.5) => hv - BE - phi;
  /** XPS 결합 에너지 대표값(eV) */
  M.xpsBE = {
    "Si 2p (Si)": 99.3, "Si 2p (SiO₂)": 103.3, "Si 2p (Si₃N₄)": 101.8, "O 1s (SiO₂)": 532.9, "C 1s (C–C)": 284.8, "N 1s (Si₃N₄)": 397.6,
    "Al 2p (Al)": 72.7, "Al 2p (Al₂O₃)": 74.6, "Ti 2p₃/₂ (Ti)": 454.0, "Ti 2p₃/₂ (TiN)": 455.0, "Ti 2p₃/₂ (TiO₂)": 458.8,
    "Cu 2p₃/₂ (Cu)": 932.6, "Cu 2p₃/₂ (CuO)": 933.8, "Hf 4f₇/₂ (HfO₂)": 17.1, "Ta 4f₇/₂ (Ta)": 21.9, "Ta 4f₇/₂ (Ta₂O₅)": 26.5, "F 1s": 685.0,
  };
  /** 비탄성 평균 자유 행로(시–덴치): 원소 λ = 538/E² + 0.41(aE)^{1/2} [단층], 무기 화합물 2170/E² + 0.72(aE)^{1/2}. a 단층 두께 nm → nm */
  M.imfp = (E, a = 0.25, kind = "inorganic") => (kind === "element" ? 538 / (E * E) + 0.41 * sqrt(a * E) : 2170 / (E * E) + 0.72 * sqrt(a * E)) * a;
  /** 신호의 95 %가 나오는 분석 깊이 3λ cosθ (θ 표면 법선에서 잰 이탈각) */
  M.infoDepth = (lam, thDeg = 0) => 3 * lam * Math.cos((thDeg * PI) / 180);
  /** 기판 위 덮개층 두께 d = λ cosθ ln(1 + R/R∞) (R = I_덮개/I_기판, R∞ 순수 시료 세기 비) — Si 2p 산화막: λ≈3.4 nm, R∞≈0.9 */
  M.xpsThickness = (R, Rinf = 0.9, lam = 3.4, thDeg = 0) => lam * Math.cos((thDeg * PI) / 180) * ln(1 + R / Rinf);
  /** RBS 운동학 인자 K = [(√(M2² − M1² sin²θ) + M1 cosθ)/(M1 + M2)]² (θ 산란각) */
  M.rbsK = (M1, M2, thDeg = 170) => { const t = (thDeg * PI) / 180; return ((sqrt(M2 * M2 - M1 * M1 * Math.sin(t) ** 2) + M1 * Math.cos(t)) / (M1 + M2)) ** 2; };
  /** SIMS 응답 함수(지수 상승 λu·하강 λd, 가우스 폭 σ)로 참 분포를 흐린 측정 분포. xs 균일 격자 */
  M.simsBlur = function (xs, cs, lamU = 1, lamD = 3, sig = 1) {
    const n = xs.length, dx = xs[1] - xs[0], K = [], half = Math.ceil((6 * lamD + 4 * sig) / dx);
    let ks = 0;
    for (let j = -half; j <= half; j++) {
      const z = j * dx;
      let v = z < 0 ? exp(z / lamU) : exp(-z / lamD);
      v *= 1; K.push(v); ks += v;
    }
    // 가우스 흐림을 곱셈 후 합성(간단히 두 번 합성)
    const g = [], gh = Math.ceil((4 * sig) / dx); let gs = 0;
    for (let j = -gh; j <= gh; j++) { const v = exp(-0.5 * ((j * dx) / sig) ** 2); g.push(v); gs += v; }
    const conv = (arr, ker, hh, s) => arr.map((_, i) => { let a = 0; for (let j = -hh; j <= hh; j++) { const k = i - j; if (k >= 0 && k < n) a += arr[k] * ker[j + hh]; } return a / s; });
    return conv(conv(cs, K, half, ks), g, gh, gs);
  };
  /** SIMS: 스퍼터 시간 → 깊이(속도 nm/s), RSF로 농도 C = RSF·I/I_matrix, 도즈 = ∫C dx */
  M.simsDepth = (t, rate) => t * rate;
  M.simsConc = (I, Imatrix, RSF) => (RSF * I) / Imatrix;
  /** AFM 거칠기: 높이 배열 → {Ra, Rq, Rz(최고−최저)} (평균 제거) */
  M.roughness = function (z) {
    const n = z.length, m = z.reduce((a, b) => a + b, 0) / n;
    let ra = 0, rq = 0, mx = -Infinity, mn = Infinity;
    for (const v of z) { const d = v - m; ra += abs(d); rq += d * d; if (v > mx) mx = v; if (v < mn) mn = v; }
    return { Ra: ra / n, Rq: sqrt(rq / n), Rz: mx - mn, mean: m };
  };
  /** AFM 탐침 겹침(구형 끝 반지름 R): 측정 높이 = max_j (z_j + √(R² − (x−x_j)²) − R) */
  M.tipDilate = function (xs, zs, R) {
    return xs.map((x, i) => {
      let best = -Infinity;
      for (let j = 0; j < xs.length; j++) { const dx = x - xs[j]; if (abs(dx) <= R) { const v = zs[j] + sqrt(R * R - dx * dx) - R; if (v > best) best = v; } }
      return best;
    });
  };
  /** 브래그 2θ(°) — d nm, λ nm */
  M.bragg2theta = (d, lam = 0.15406) => { const s = lam / (2 * d); return s > 1 ? NaN : (2 * Math.asin(s) * 180) / PI; };
  M.xrayLambda = { "Cu Kα1": 0.15406, "Cu Kα": 0.15418, "Mo Kα": 0.07107, "Co Kα": 0.17890, "Cr Kα": 0.22897 };
  /** 셰러 결정립 크기 D = Kλ/(β cosθ) (β 라디안 FWHM, 2θ °) → nm */
  M.scherrer = (betaDeg, tth, lam = 0.15406, K = 0.9) => (K * lam) / (((betaDeg * PI) / 180) * Math.cos((tth * PI) / 360));
  /** 윌리엄슨–홀: β cosθ = Kλ/D + 4ε sinθ 직선 맞춤. peaks=[{tth, beta(°)}] → {D nm, strain} */
  M.williamsonHall = function (peaks, lam = 0.15406, K = 0.9) {
    const X = peaks.map((p) => 4 * Math.sin((p.tth * PI) / 360)), Y = peaks.map((p) => ((p.beta * PI) / 180) * Math.cos((p.tth * PI) / 360));
    const f = M.linfit(X, Y);
    return { D: (K * lam) / f.a, strain: f.b, X, Y, r2: f.r2 };
  };
  /** sin²ψ 잔류 응력: d_ψ = d0[1 + ((1+ν)/E) σ sin²ψ − (2ν/E) σ]; 기울기 m = ∂d/∂sin²ψ → σ = E m /((1+ν) d0) (E GPa → MPa) */
  M.sin2psiStress = (slope, d0, E, nu) => (E * 1e3 * slope) / ((1 + nu) * d0);
  M.sin2psiD = (psiDeg, d0, sigma, E, nu) => { const s2 = Math.sin((psiDeg * PI) / 180) ** 2; return d0 * (1 + ((1 + nu) / (E * 1e3)) * sigma * s2 - ((2 * nu) / (E * 1e3)) * sigma); };

  /* ------------------------------------------------------------ 미시 시뮬레이터 */
  /**
   * 포츠 모형 결정립 성장(2D 정사각 격자, 주기 경계, 이웃 8개). 각 칸은 결정립 번호 s ∈ [0, Q).
   * 몬테카를로: 무작위 칸을 이웃 하나의 번호로 바꿔 보고 경계 에너지 ΔE ≤ 0 이면 받아들이고, ΔE > 0 이면 exp(−ΔE/kT).
   * opts {N, Q, seed, kT, init:'random'|'voronoi', nSeeds, pin:{f}(고정 입자 분율), mobility(번호→이동도 함수)}
   * 메서드: sweep(n), grains() → {count, meanArea, areas}, boundary(i) 경계 칸 여부, reseed(cx, cy, r) 붓질로 미세 결정립 심기
   */
  M.potts = function (opts = {}) {
    const N = opts.N || 96, Q = opts.Q || 64, r = M.rng(opts.seed || 7);
    const s = new Int32Array(N * N), pin = new Uint8Array(N * N);
    const P = { N, Q, s, pin, kT: opts.kT == null ? 0.3 : opts.kT, mcs: 0, mobility: opts.mobility || null };
    const nb = [-1, 0, 1, 0, 0, -1, 0, 1, -1, -1, 1, 1, -1, 1, 1, -1];
    const idx = (x, y) => ((y + N) % N) * N + ((x + N) % N);
    P.idx = idx;
    function initRandom() { for (let i = 0; i < N * N; i++) s[i] = r.int(Q); }
    function initVoronoi(n) {
      const seeds = Array.from({ length: n }, (_, k) => [r() * N, r() * N, k % Q]);
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        let best = 1e9, id = 0;
        for (const p of seeds) { let dx = abs(x - p[0]), dy = abs(y - p[1]); dx = Math.min(dx, N - dx); dy = Math.min(dy, N - dy); const d = dx * dx + dy * dy; if (d < best) { best = d; id = p[2]; } }
        s[y * N + x] = id;
      }
    }
    if (opts.init === "voronoi") initVoronoi(opts.nSeeds || Math.round(N * N / 60)); else initRandom();
    if (opts.pin && opts.pin.f > 0) { for (let i = 0; i < N * N; i++) if (r() < opts.pin.f) { pin[i] = 1; s[i] = -1; } }
    const energyAt = (x, y, v) => { let e = 0; for (let k = 0; k < 16; k += 2) { const q = s[idx(x + nb[k], y + nb[k + 1])]; if (q !== v) e += q === -1 ? 0.5 : 1; } return e; };
    P.sweep = function (n = 1) {
      const NN = N * N;
      for (let it = 0; it < n * NN; it++) {
        const x = r.int(N), y = r.int(N), i = y * N + x;
        if (pin[i]) continue;
        const k = 2 * r.int(8), nv = s[idx(x + nb[k], y + nb[k + 1])], ov = s[i];
        if (nv === ov || nv === -1) continue;
        const dE = energyAt(x, y, nv) - energyAt(x, y, ov);
        let pAcc = dE <= 0 ? 1 : P.kT > 0 ? exp(-dE / P.kT) : 0;
        if (P.mobility) pAcc *= P.mobility(ov, nv);
        if (pAcc >= 1 || r() < pAcc) s[i] = nv;
      }
      P.mcs += n;
    };
    /** 연결된 결정립(같은 번호 + 이어진 칸) 세기 */
    P.grains = function () {
      const lab = new Int32Array(N * N).fill(-1), areas = [], stack = [];
      let count = 0;
      for (let i = 0; i < N * N; i++) {
        if (lab[i] >= 0 || s[i] === -1) continue;
        let a = 0; stack.push(i); lab[i] = count;
        while (stack.length) {
          const j = stack.pop(), x = j % N, y = (j / N) | 0; a++;
          for (let k = 0; k < 8; k += 2) { const q = idx(x + nb[k], y + nb[k + 1]); if (lab[q] < 0 && s[q] === s[i]) { lab[q] = count; stack.push(q); } }
        }
        areas.push(a); count++;
      }
      const tot = areas.reduce((u, v) => u + v, 0);
      return { count, meanArea: count ? tot / count : 0, areas, labels: lab };
    };
    P.boundary = (i) => { const x = i % N, y = (i / N) | 0, v = s[i]; return s[idx(x + 1, y)] !== v || s[idx(x, y + 1)] !== v; };
    /** (cx, cy) 반지름 rr 안을 새 무작위 번호로(재결정 핵 또는 냉간 가공 흉내) */
    P.reseed = function (cx, cy, rr, grainCells = 1) {
      for (let y = Math.floor(cy - rr); y <= cy + rr; y++) for (let x = Math.floor(cx - rr); x <= cx + rr; x++) {
        if ((x - cx) ** 2 + (y - cy) ** 2 > rr * rr) continue;
        const i = idx(x, y); if (pin[i]) continue;
        s[i] = grainCells > 1 ? (Math.floor(x / grainCells) * 7919 + Math.floor(y / grainCells) * 104729 + 13) % Q : r.int(Q);
      }
    };
    P.reset = function () { if (opts.init === "voronoi") initVoronoi(opts.nSeeds || Math.round(N * N / 60)); else initRandom(); P.mcs = 0; };
    return P;
  };

  /**
   * 칸–힐리아드 스피노달 분해(2D, 주기 경계, 명시적 유한 차분). 질서 변수 φ ∈ [−1, 1], f = (φ²−1)²/4.
   * ∂φ/∂t = M ∇²(φ³ − φ − κ∇²φ). opts {N, phi0(평균 조성), noise, kappa, M, dt, seed}
   * 메서드 step(n), stats() → {mean, var, L(특성 길이: 구조 인자 1차 모멘트로 추정)}
   */
  M.cahnHilliard = function (opts = {}) {
    const N = opts.N || 64, r = M.rng(opts.seed || 3), kappa = opts.kappa || 1, Mob = opts.M || 1, dt = opts.dt || 0.01;
    const phi = new Float64Array(N * N), mu = new Float64Array(N * N), lap = new Float64Array(N * N);
    const CH = { N, phi, t: 0, kappa, M: Mob, dt };
    const init = () => { for (let i = 0; i < N * N; i++) phi[i] = (opts.phi0 || 0) + (opts.noise == null ? 0.05 : opts.noise) * (2 * r() - 1); CH.t = 0; };
    init();
    const L = (a, out) => {
      for (let y = 0; y < N; y++) {
        const ym = ((y - 1 + N) % N) * N, yp = ((y + 1) % N) * N, y0 = y * N;
        for (let x = 0; x < N; x++) { const xm = (x - 1 + N) % N, xp = (x + 1) % N; out[y0 + x] = a[y0 + xm] + a[y0 + xp] + a[ym + x] + a[yp + x] - 4 * a[y0 + x]; }
      }
    };
    CH.step = function (n = 1) {
      for (let k = 0; k < n; k++) {
        L(phi, lap);
        for (let i = 0; i < N * N; i++) { const p = phi[i]; mu[i] = p * p * p - p - kappa * lap[i]; }
        L(mu, lap);
        for (let i = 0; i < N * N; i++) phi[i] += dt * Mob * lap[i];
        CH.t += dt;
      }
    };
    CH.stats = function () {
      let m = 0, v = 0, edges = 0;
      for (let i = 0; i < N * N; i++) m += phi[i];
      m /= N * N;
      for (let i = 0; i < N * N; i++) v += (phi[i] - m) ** 2;
      // 특성 길이: 부호가 바뀌는 이웃 쌍 수로 계면 길이 추정 → L ≈ 2·면적/계면 길이
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const a = phi[y * N + x]; if (a * phi[y * N + ((x + 1) % N)] < 0) edges++; if (a * phi[((y + 1) % N) * N + x] < 0) edges++; }
      return { mean: m, var: v / (N * N), L: edges ? (2 * N * N) / edges : N };
    };
    CH.reset = init;
    return CH;
  };

  /**
   * 핵생성–성장 격자(2D JMAK 확인용). 각 칸의 '도착 시간' = min over 핵 (tᵢ + 거리/G).
   * 핵은 아직 변태하지 않은 곳에만 생긴다. opts {N, G(칸/시간), I(칸당·시간당 핵생성 확률), siteSaturated(n개 동시), seed}
   * 메서드 advance(t1) 시간 t1까지 진행, fraction(), owner(i) 결정립 번호, nuclei 배열
   */
  M.nucleationGrowth = function (opts = {}) {
    const N = opts.N || 120, G = opts.G || 1, I = opts.I == null ? 2e-5 : opts.I, r = M.rng(opts.seed || 11);
    const arr = new Float64Array(N * N).fill(Infinity), own = new Int32Array(N * N).fill(-1);
    const NG = { N, G, I, t: 0, nuclei: [], arr, own };
    const add = (x, y, t0) => {
      const id = NG.nuclei.length; NG.nuclei.push({ x, y, t0 });
      for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
        const d = sqrt((i - x) ** 2 + (j - y) ** 2), ta = t0 + d / G, k = j * N + i;
        if (ta < arr[k]) { arr[k] = ta; own[k] = id; }
      }
    };
    if (opts.siteSaturated) for (let k = 0; k < opts.siteSaturated; k++) add(r() * N, r() * N, 0);
    NG.advance = function (t1, dt = 0.5) {
      while (NG.t < t1) {
        const h = Math.min(dt, t1 - NG.t);
        if (I > 0) {
          const nExp = I * N * N * h;
          let nNew = Math.floor(nExp) + (r() < nExp - Math.floor(nExp) ? 1 : 0);
          for (let k = 0; k < nNew; k++) {
            const x = r() * N, y = r() * N, ki = Math.floor(y) * N + Math.floor(x);
            if (arr[ki] > NG.t + h) add(x, y, NG.t + r() * h);
          }
        }
        NG.t += h;
      }
    };
    NG.fraction = (t = NG.t) => { let c = 0; for (let k = 0; k < N * N; k++) if (arr[k] <= t) c++; return c / (N * N); };
    return NG;
  };

  /**
   * 석출물 조대화(LSW 평균장): dr/dt = (A/r)(1/r* − 1/r), r* = 평균 반지름(부피 보존). opts {n, r0, spread, A, seed}
   * 메서드 step(dt, k), mean(), alive(), radii
   */
  M.coarsening = function (opts = {}) {
    const n = opts.n || 300, rg = M.rng(opts.seed || 5), A = opts.A || 1;
    const radii = Array.from({ length: n }, () => Math.max(0.2, (opts.r0 || 1) * (1 + (opts.spread || 0.25) * rg.normal())));
    const CO = { radii, t: 0, A };
    CO.mean = () => { let s = 0, c = 0; for (const v of radii) if (v > 0) { s += v; c++; } return c ? s / c : 0; };
    CO.alive = () => radii.filter((v) => v > 0).length;
    CO.step = function (dt, k = 1) {
      for (let it = 0; it < k; it++) {
        const rs = CO.mean();
        for (let i = 0; i < radii.length; i++) {
          const v = radii[i]; if (v <= 0) continue;
          const nv = v + dt * (A / v) * (1 / rs - 1 / v);
          radii[i] = nv < 0.05 * rs ? 0 : nv;
        }
        CO.t += dt;
      }
    };
    return CO;
  };

  /**
   * 결정립계 확산(피셔 배치) 2D 격자: 위 표면에서 일정 농도 1, 가운데 세로 띠(폭 w 칸)는 확산 계수 Dgb, 나머지 D.
   * 명시적 유한 차분(안정 조건 자동). opts {nx, ny, D, Dgb, w} — 메서드 step(t), c 배열, t
   */
  M.gbDiffusion = function (opts = {}) {
    const nx = opts.nx || 80, ny = opts.ny || 60, D = opts.D || 1, Dgb = opts.Dgb || 100, w = opts.w || 1;
    const c = new Float64Array(nx * ny), nc = new Float64Array(nx * ny), Dm = new Float64Array(nx * ny);
    const x0 = Math.floor(nx / 2 - w / 2);
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) Dm[j * nx + i] = i >= x0 && i < x0 + w ? Dgb : D;
    const GB = { nx, ny, c, t: 0, D, Dgb, w };
    const dtMax = 0.2 / Math.max(D, Dgb);
    const bc = () => { for (let i = 0; i < nx; i++) c[i] = 1; };
    bc();
    GB.step = function (tAdd) {
      let left = tAdd;
      while (left > 1e-12) {
        const dt = Math.min(dtMax, left);
        for (let j = 1; j < ny; j++) for (let i = 0; i < nx; i++) {
          const k = j * nx + i, d0 = Dm[k];
          const kl = i > 0 ? k - 1 : k, kr = i < nx - 1 ? k + 1 : k, ku = k - nx, kd = j < ny - 1 ? k + nx : k;
          const f = (kk) => (2 * d0 * Dm[kk]) / (d0 + Dm[kk]); // 칸 사이 조화 평균
          nc[k] = c[k] + dt * (f(kl) * (c[kl] - c[k]) + f(kr) * (c[kr] - c[k]) + f(ku) * (c[ku] - c[k]) + f(kd) * (c[kd] - c[k]));
        }
        for (let k = nx; k < nx * ny; k++) c[k] = nc[k];
        bc(); GB.t += dt; left -= dt;
      }
    };
    /** 깊이 j에서 가로 평균 농도(SIMS·단면 분석이 보는 값) */
    GB.avgAt = (j) => { let s = 0; for (let i = 0; i < nx; i++) s += c[j * nx + i]; return s / nx; };
    return GB;
  };

  /** 보로노이 결정립 라벨 격자(그림용): N×N, n개 씨앗, 시드 → {labels, seeds} */
  M.voronoi = function (N, n, seed = 1) {
    const r = M.rng(seed), seeds = Array.from({ length: n }, () => [r() * N, r() * N]), labels = new Int32Array(N * N);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      let best = Infinity, id = 0;
      for (let k = 0; k < n; k++) { const d = (x - seeds[k][0]) ** 2 + (y - seeds[k][1]) ** 2; if (d < best) { best = d; id = k; } }
      labels[y * N + x] = id;
    }
    return { labels, seeds, N };
  };

  /** 결정립 번호 → 구분되는 색조(그림용, hue만 돌려줌 0–360) */
  M.grainHue = (k) => (k * 137.508) % 360;
})();
