/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "modern-physics",
 "title": "현대물리학",
 "en": "Modern Physics",
 "field": "physics",
 "level": "대학 2학년 · 반도체 기초",
 "status": "published",
 "description": "광자와 물질파, 슈뢰딩거 방정식, 양자 우물과 터널링, 수소 원자와 스핀, 양자 통계, 분자 결합에서 에너지 띠와 LED·레이저까지 — 반도체 소자와 공정을 떠받치는 양자역학을 직접 풀고 만지며 익히는 인터랙티브 교과서.",
 "accent": {
  "light": "#6d28d9",
  "dark": "#a78bfa",
  "light2": "#0f766e",
  "dark2": "#2dd4bf"
 },
 "mark": "<ellipse cx=\"16\" cy=\"16\" rx=\"11\" ry=\"4.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\"/><ellipse cx=\"16\" cy=\"16\" rx=\"11\" ry=\"4.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\" transform=\"rotate(60 16 16)\"/><ellipse cx=\"16\" cy=\"16\" rx=\"11\" ry=\"4.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\" transform=\"rotate(-60 16 16)\"/><circle cx=\"16\" cy=\"16\" r=\"2.4\" fill=\"#fff\"/>",
 "parts": [
  {
   "title": "제1부 빛과 물질의 양자성",
   "chapters": [
    {
     "slug": "photons",
     "num": "01",
     "title": "빛의 입자성: 광자",
     "en": "Photons",
     "desc": "흑체 복사와 플랑크 가설, 광전 효과와 일함수, 광자의 에너지와 운동량, X선과 콤프턴 산란, 쌍생성 — 포토다이오드와 EUV 광자 하나의 에너지.",
     "tags": [
      "흑체 복사",
      "광전 효과"
     ]
    },
    {
     "slug": "matter-waves",
     "num": "02",
     "title": "물질파와 불확정성",
     "en": "Matter Waves and Uncertainty",
     "desc": "드브로이 파장, 전자 회절(데이비슨–거머), 이중 슬릿과 확률 해석, 파속과 군속도, 하이젠베르크 불확정성 원리 — 전자 현미경의 분해능.",
     "tags": [
      "드브로이",
      "불확정성"
     ]
    },
    {
     "slug": "atomic-spectra",
     "num": "03",
     "title": "원자 모형과 스펙트럼",
     "en": "Atomic Models and Spectra",
     "desc": "러더퍼드 산란, 선 스펙트럼과 뤼드베리 식, 보어 모형, 프랑크–헤르츠 실험, X선 특성선과 모즐리 법칙 — 플라즈마 발광 분광으로 식각 종말점 찾기.",
     "tags": [
      "보어 모형",
      "선 스펙트럼"
     ]
    }
   ]
  },
  {
   "title": "제2부 슈뢰딩거 방정식",
   "chapters": [
    {
     "slug": "schrodinger",
     "num": "04",
     "title": "슈뢰딩거 방정식",
     "en": "The Schrödinger Equation",
     "desc": "파동함수와 보른 해석, 시간 의존·시간 독립 방정식, 정상 상태, 연산자와 기댓값, 정규화, 경계 조건, 자유 입자와 파속의 퍼짐.",
     "tags": [
      "파동함수",
      "기댓값"
     ]
    },
    {
     "slug": "quantum-wells",
     "num": "05",
     "title": "양자 우물과 구속",
     "en": "Quantum Wells and Confinement",
     "desc": "무한·유한 사각 우물, 짝·홀 상태, 유효 질량과 양자 우물, 삼각 우물과 반전층, 2·3차원 상자와 양자점 — FinFET·GAA 채널의 양자 구속.",
     "tags": [
      "양자 우물",
      "양자점"
     ]
    },
    {
     "slug": "tunneling",
     "num": "06",
     "title": "장벽과 터널링",
     "en": "Barriers and Tunneling",
     "desc": "계단 퍼텐셜의 반사, 사각 장벽 투과와 공명, 전달 행렬, WKB 근사, 직접 터널링과 파울러–노드하임 터널링, 공명 터널 다이오드, STM — 게이트 누설 전류와 플래시 메모리 프로그램.",
     "tags": [
      "터널링",
      "누설 전류"
     ]
    },
    {
     "slug": "harmonic-oscillator",
     "num": "07",
     "title": "조화 진동자",
     "en": "The Quantum Harmonic Oscillator",
     "desc": "포물선 퍼텐셜과 에너지 사다리, 에르미트 함수, 영점 에너지, 대응 원리, 분자 진동과 적외선 흡수, 포논 — FTIR 박막 분석과 격자 진동.",
     "tags": [
      "영점 에너지",
      "포논"
     ]
    }
   ]
  },
  {
   "title": "제3부 원자",
   "chapters": [
    {
     "slug": "hydrogen-atom",
     "num": "08",
     "title": "수소 원자",
     "en": "The Hydrogen Atom",
     "desc": "3차원 슈뢰딩거 방정식과 변수 분리, 각운동량의 양자화, 양자수 n·l·m, 지름 확률 분포와 오비탈 모양, 선택 규칙 — 실리콘 속 주개 불순물의 수소 모형.",
     "tags": [
      "오비탈",
      "양자수"
     ]
    },
    {
     "slug": "spin-atoms",
     "num": "09",
     "title": "스핀과 다전자 원자",
     "en": "Spin and Many-Electron Atoms",
     "desc": "슈테른–게를라흐 실험과 전자 스핀, 제만 효과, 파울리 배타 원리와 동일 입자, 전자 배치와 주기율표, 훈트 규칙 — 자기 터널 접합과 MRAM.",
     "tags": [
      "스핀",
      "파울리 원리"
     ]
    }
   ]
  },
  {
   "title": "제4부 고체로 가는 길",
   "chapters": [
    {
     "slug": "quantum-statistics",
     "num": "10",
     "title": "양자 통계",
     "en": "Quantum Statistics",
     "desc": "볼츠만 분포, 페르미–디랙과 보스–아인슈타인 분포, 상태 밀도(1·2·3차원), 페르미 에너지, 금속의 자유 전자, 유효 상태 밀도와 캐리어 농도 — 반도체의 페르미 준위.",
     "tags": [
      "페르미–디랙",
      "상태 밀도"
     ]
    },
    {
     "slug": "molecular-bonding",
     "num": "11",
     "title": "분자와 화학 결합",
     "en": "Molecules and Bonding",
     "desc": "이중 우물과 준위 분리, 결합·반결합 오비탈(LCAO), H₂⁺와 H₂, sp³ 혼성과 실리콘의 사면체 결합, 원자 N개의 사슬에서 띠로 — 에너지 띠의 기원.",
     "tags": [
      "LCAO",
      "혼성"
     ]
    },
    {
     "slug": "energy-bands",
     "num": "12",
     "title": "결정 속 전자와 에너지 띠",
     "en": "Electrons in Crystals: Energy Bands",
     "desc": "주기 퍼텐셜과 블로흐 정리, 크로니히–페니 모형, 브릴루앙 영역과 띠 간격, 강결합 띠, 금속·반도체·절연체, 유효 질량과 정공, 직접·간접 띠 간격.",
     "tags": [
      "블로흐 정리",
      "띠 간격"
     ]
    },
    {
     "slug": "light-matter",
     "num": "13",
     "title": "빛과 물질의 상호작용",
     "en": "Light–Matter Interaction",
     "desc": "흡수·자발 방출·유도 방출과 아인슈타인 계수, 밀도 반전과 레이저, 반도체의 흡수 끝과 흡수 계수, LED와 반도체 레이저, 광검출기와 양자 효율 — 엑시머 레이저에서 이미지 센서까지.",
     "tags": [
      "레이저",
      "LED"
     ]
    }
   ]
  },
  {
   "title": "부록",
   "appendix": true,
   "chapters": [
    {
     "slug": "constants-data",
     "num": "A",
     "title": "물리 상수와 반도체 자료",
     "en": "Constants and Semiconductor Data",
     "desc": "기본 물리 상수, eV·nm 단위 환산, 주요 반도체와 절연막의 띠 간격·유효 질량·유전율을 계산기와 함께 찾는다.",
     "tags": [
      "부록",
      "데이터"
     ]
    },
    {
     "slug": "glossary",
     "num": "B",
     "title": "용어집과 종합 문제",
     "en": "Glossary and Review",
     "desc": "핵심 용어를 검색하고 장별 종합 문제로 실력을 점검한다.",
     "tags": [
      "부록",
      "정리"
     ]
    }
   ]
  }
 ],
 "stats": {
  "photons": {
   "problems": 15,
   "examples": 8,
   "sims": 4,
   "figures": 11,
   "drills": 2,
   "minis": 4,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "matter-waves": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 10,
   "drills": 2,
   "minis": 4,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "atomic-spectra": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 14,
   "drills": 2,
   "minis": 6,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "schrodinger": {
   "problems": 14,
   "examples": 7,
   "sims": 4,
   "figures": 12,
   "drills": 2,
   "minis": 6,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "quantum-wells": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 9,
   "drills": 2,
   "minis": 3,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "tunneling": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 11,
   "drills": 2,
   "minis": 3,
   "tangles": 5,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "harmonic-oscillator": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 9,
   "drills": 2,
   "minis": 4,
   "tangles": 3,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "hydrogen-atom": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 9,
   "drills": 3,
   "minis": 4,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "spin-atoms": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 13,
   "drills": 2,
   "minis": 5,
   "tangles": 5,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "quantum-statistics": {
   "problems": 14,
   "examples": 8,
   "sims": 5,
   "figures": 10,
   "drills": 2,
   "minis": 4,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "molecular-bonding": {
   "problems": 15,
   "examples": 7,
   "sims": 6,
   "figures": 10,
   "drills": 2,
   "minis": 4,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "energy-bands": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 11,
   "drills": 2,
   "minis": 4,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "light-matter": {
   "problems": 15,
   "examples": 7,
   "sims": 5,
   "figures": 10,
   "drills": 2,
   "minis": 3,
   "tangles": 3,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "constants-data": {
   "problems": 8,
   "examples": 0,
   "sims": 9,
   "figures": 1,
   "drills": 1,
   "minis": 0,
   "tangles": 3,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "glossary": {
   "problems": 28,
   "examples": 0,
   "sims": 0,
   "figures": 0,
   "drills": 0,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  }
 },
 "published": 15,
 "total": 15,
 "url": "https://science.euiyun.com/modern-physics/",
 "glossary": {
  "version": 1,
  "terms": [
   {
    "ko": "Kα선",
    "en": "Kα line",
    "abbr": "",
    "def": "K 껍질(\\(n=1\\)) 빈자리를 L 껍질(\\(n=2\\)) 전자가 채우며 내는 특성 X선. 원소마다 에너지가 정해져 있어 원소 분석과 XRD 광원(Cu K\\(_\\alpha\\) 0.154 nm)에 쓴다.",
    "chapters": [
     "atomic-spectra#xray"
    ]
   },
   {
    "ko": "LEED",
    "en": "low-energy electron diffraction",
    "abbr": "",
    "def": "20–200 eV의 느린 전자를 표면에 쏘아 회절 무늬를 보는 기법. 전자가 몇 원자층만 들어가므로 표면 재구성 같은 표면 구조만 골라 본다.",
    "chapters": [
     "matter-waves#diffraction"
    ]
   },
   {
    "ko": "RHEED",
    "en": "reflection high-energy electron diffraction",
    "abbr": "",
    "def": "10–30 keV 전자를 표면에 1–3°로 스치듯 쏘아 회절 무늬를 보는 기법. MBE 성장 중에 표면 상태와 층 단위 성장을 실시간으로 감시한다.",
    "chapters": [
     "matter-waves#diffraction"
    ]
   },
   {
    "ko": "WKB 근사",
    "en": "Wentzel–Kramers–Brillouin approximation",
    "abbr": "",
    "def": "퍼텐셜이 천천히 변할 때 투과율을 \\(T \\approx \\exp(-2\\int\\kappa(x)\\,dx)\\)로 어림하는 준고전 근사. 삼각 장벽(FN 터널링)이나 쿨롱 장벽처럼 모양이 복잡한 장벽에 쓴다.",
    "chapters": [
     "tunneling#wkb"
    ]
   },
   {
    "ko": "g 인자",
    "en": "g-factor",
    "abbr": "",
    "def": "자기 모멘트와 각운동량의 비를 \\(\\mu_B/\\hbar\\) 단위로 나타낸 무차원 수. 궤도 운동은 1, 전자 스핀은 \\(g_s = 2.0023\\)이다.",
    "chapters": [
     "spin-atoms#spin"
    ]
   },
   {
    "ko": "sp³ 혼성 오비탈",
    "en": "sp³ hybrid",
    "abbr": "",
    "def": "s 오비탈 하나와 p 오비탈 셋을 섞어 만든, 109.5° 간격으로 뻗은 네 개의 오비탈. 실리콘·다이아몬드의 사면체 공유 결합을 이룬다.",
    "chapters": [
     "hydrogen-atom#angular"
    ]
   },
   {
    "ko": "가모프 인자",
    "en": "Gamow factor",
    "abbr": "",
    "def": "쿨롱 장벽에 WKB 근사를 적용해 얻는 터널링 확률의 지수 인자. 알파 붕괴 수명과 핵융합 반응률을 설명한다.",
    "chapters": [
     "tunneling#wkb"
    ]
   },
   {
    "ko": "가벼운 정공",
    "en": "light hole",
    "abbr": "",
    "def": "가전자대 꼭대기에서 곡률이 큰 쪽의 정공 띠. 실리콘에서 유효 질량이 약 \\(0.16m_e\\)이다.",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "가시도",
    "en": "visibility",
    "abbr": "",
    "def": "간섭무늬의 뚜렷함 \\(V = (P_\\text{max} - P_\\text{min})/(P_\\text{max} + P_\\text{min})\\). 어느 경로로 갔는지 정보가 생길수록 줄어든다.",
    "chapters": [
     "matter-waves#double-slit"
    ]
   },
   {
    "ko": "가전자대",
    "en": "valence band",
    "abbr": "",
    "def": "결합 오비탈에서 비롯한 띠로, 0 K 반도체에서 전자가 꽉 차 있는 가장 높은 띠. 꼭대기 에너지를 \\(E_v\\)로 쓴다.",
    "chapters": [
     "molecular-bonding#bands"
    ]
   },
   {
    "ko": "간접 띠 간격",
    "en": "indirect band gap",
    "abbr": "",
    "def": "전도대 바닥과 가전자대 꼭대기가 서로 다른 \\(k\\)에 있는 띠 간격. 빛의 흡수·방출에 포논이 함께 필요해 발광이 약하다(Si, Ge).",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "강결합 근사",
    "en": "tight-binding approximation",
    "abbr": "",
    "def": "원자 오비탈과 이웃 원자 사이의 결합 적분 \\(t\\)만으로 고체의 띠를 만드는 근사. 1차원 사슬에서 띠 \\(E = \\varepsilon - 2t\\cos ka\\), 폭 \\(4t\\)를 준다.",
    "chapters": [
     "molecular-bonding#bands"
    ]
   },
   {
    "ko": "거대 자기 저항",
    "en": "GMR, giant magnetoresistance",
    "abbr": "",
    "def": "강자성층/비자성 금속층/강자성층 구조에서 두 자화가 나란할 때와 반대일 때 저항이 크게 다른 현상(GMR). 하드디스크 읽기 헤드에 쓰였다.",
    "chapters": [
     "spin-atoms#spin"
    ]
   },
   {
    "ko": "거시 상태",
    "en": "macrostate",
    "abbr": "",
    "def": "전체 에너지나 앞면 개수처럼 계를 거칠게 기술한 상태. 하나의 거시 상태에 대응하는 미시 상태 수가 그 확률을 정한다.",
    "chapters": [
     "quantum-statistics#boltzmann"
    ]
   },
   {
    "ko": "거의 자유 전자 모형",
    "en": "nearly free electron model",
    "abbr": "",
    "def": "약한 주기 퍼텐셜을 자유 전자에 섭동으로 더한 띠 모형. 브릴루앙 영역 경계에서 푸리에 성분 \\(|V_G|\\)의 두 배만큼 띠 간격이 열린다.",
    "chapters": [
     "energy-bands#gap"
    ]
   },
   {
    "ko": "격자",
    "en": "lattice",
    "abbr": "",
    "def": "결정에서 되풀이의 뼈대가 되는 점들의 집합. 각 격자점에 기저(원자 묶음)를 붙이면 결정 구조가 된다.",
    "chapters": [
     "energy-bands#crystal"
    ]
   },
   {
    "ko": "격자 상수",
    "en": "lattice constant",
    "abbr": "",
    "def": "결정의 단위 세포 한 변의 길이 \\(a\\). 실리콘은 0.5431 nm이다.",
    "chapters": [
     "energy-bands#crystal"
    ]
   },
   {
    "ko": "결맞는",
    "en": "coherent",
    "abbr": "",
    "def": "빛이나 파동의 위상이 공간적·시간적으로 일정한 관계를 유지하는 성질. 유도 방출로 광자를 복제하는 레이저 빛이 대표적이다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "결맞음 길이",
    "en": "coherence length",
    "abbr": "",
    "def": "파동이 위상 관계를 유지하는 거리 \\(l_c \\approx \\lambda^2/\\Delta\\lambda\\). 선폭이 좁을수록 길다(LED 수 µm, 단일 모드 레이저 수백 m).",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "결맞음 상태",
    "en": "coherent state",
    "abbr": "",
    "def": "조화 진동자 바닥 상태 가우스를 옆으로 옮긴 특별한 겹침 상태. 모양을 유지한 채 고전 진동자처럼 왕복한다.",
    "chapters": [
     "harmonic-oscillator#coherent"
    ]
   },
   {
    "ko": "결정 운동량",
    "en": "crystal momentum",
    "abbr": "",
    "def": "블로흐 상태를 붙이는 파수 \\(k\\)에 \\(\\hbar\\)를 곱한 양 \\(\\hbar k\\). 외부 힘에 대해 \\(\\hbar\\,dk/dt = F\\)를 따르지만 전자의 실제 운동량은 아니다.",
    "chapters": [
     "energy-bands#bloch"
    ]
   },
   {
    "ko": "겹침 적분",
    "en": "overlap integral",
    "abbr": "",
    "def": "이웃한 두 원자 오비탈이 공간에서 겹치는 정도 \\(S = \\langle\\phi_A|\\phi_B\\rangle\\)(0과 1 사이). LCAO 계산에 들어간다.",
    "chapters": [
     "molecular-bonding#lcao"
    ]
   },
   {
    "ko": "계곡",
    "en": "valley",
    "abbr": "",
    "def": "전도대에서 에너지가 극소인 \\(k\\) 공간의 지점. 실리콘은 \\(\\langle100\\rangle\\) 방향에 여섯 계곡이 있고, 각 계곡은 세로·가로 유효 질량이 다르다.",
    "chapters": [
     "quantum-wells#hetero"
    ]
   },
   {
    "ko": "계단 퍼텐셜",
    "en": "potential step",
    "abbr": "",
    "def": "한 점에서 퍼텐셜이 \\(0\\)에서 \\(V_0\\)로 갑자기 바뀌는 모형. 이종 접합의 띠 어긋남처럼 \\(E > V_0\\)이어도 일부가 반사된다.",
    "chapters": [
     "tunneling#step"
    ]
   },
   {
    "ko": "계열 한계",
    "en": "series limit",
    "abbr": "",
    "def": "한 스펙트럼 계열에서 위 준위 \\(n_2 \\to \\infty\\)일 때 선들이 몰려드는 가장 짧은 파장. 발머 계열은 364.7 nm다.",
    "chapters": [
     "atomic-spectra#spectra"
    ]
   },
   {
    "ko": "고유 함수",
    "en": "eigenfunction",
    "abbr": "",
    "def": "연산자를 작용하면 자기 자신의 상수배가 되는 함수. 해밀토니언의 고유 함수가 정상 상태이고 그 상수가 에너지 고윳값이다.",
    "chapters": [
     "schrodinger#stationary"
    ]
   },
   {
    "ko": "고전적 전환점",
    "en": "classical turning points",
    "abbr": "",
    "def": "\\(V(x) = E\\)가 되는 점. 고전 입자는 여기서 되돌아가며, 양자 입자의 파동함수는 그 너머에서 지수적으로 줄어든다.",
    "chapters": [
     "tunneling#wkb"
    ]
   },
   {
    "ko": "고전적 허용 영역",
    "en": "classically allowed region",
    "abbr": "",
    "def": "\\(E > V\\)인 구간. 파동함수가 진동하며, 고전 입자도 갈 수 있는 곳이다.",
    "chapters": [
     "schrodinger#conditions"
    ]
   },
   {
    "ko": "공명 적분",
    "en": "resonance integral",
    "abbr": "",
    "def": "이웃한 두 원자 오비탈 사이의 해밀토니언 행렬 요소 \\(\\beta = \\langle\\phi_A|H|\\phi_B\\rangle\\)(보통 음수). 결합·반결합 준위의 갈라짐을 정한다.",
    "chapters": [
     "molecular-bonding#lcao"
    ]
   },
   {
    "ko": "공명 터널 다이오드",
    "en": "resonant tunneling diode, RTD",
    "abbr": "",
    "def": "얇은 두 장벽 사이에 양자 우물을 둔 소자(RTD). 우물 준위가 들어오는 전자와 맞을 때만 전류가 크게 흘러 부성 미분 저항을 보인다.",
    "chapters": [
     "tunneling#transfer"
    ]
   },
   {
    "ko": "공유 결합",
    "en": "covalent bond",
    "abbr": "",
    "def": "두 원자가 전자쌍을 고르게 나누어 가지며 이루는 결합. 온사이트 에너지 차가 작고 결합 적분이 클 때 생기며 실리콘 결정이 대표적이다.",
    "chapters": [
     "molecular-bonding#bond-types"
    ]
   },
   {
    "ko": "광검출기",
    "en": "photodetector",
    "abbr": "",
    "def": "빛 흡수로 생긴 전자–정공 쌍을 전기장으로 갈라 모아 광전류로 바꾸는 소자. 포토다이오드, 이미지 센서 화소가 여기에 속한다.",
    "chapters": [
     "light-matter#detector"
    ]
   },
   {
    "ko": "광자",
    "en": "photon",
    "abbr": "",
    "def": "빛 에너지의 알갱이. 에너지 \\(E = hf = hc/\\lambda\\), 운동량 \\(p = h/\\lambda\\)를 가지고 질량은 0이다.",
    "chapters": [
     "photons#photoelectric"
    ]
   },
   {
    "ko": "광자 샷 노이즈",
    "en": "photon shot noise",
    "abbr": "",
    "def": "광자가 무작위로 도착해 생기는 개수 요동. 평균 \\(N\\)개면 표준편차가 \\(\\sqrt N\\)이어서, EUV처럼 광자 수가 적을수록 상대 요동이 커진다.",
    "chapters": [
     "photons#photon"
    ]
   },
   {
    "ko": "광전 효과",
    "en": "photoelectric effect",
    "abbr": "",
    "def": "금속에 빛을 쬐면 전자가 튀어나오는 현상. 광전자의 최대 운동 에너지가 \\(hf - \\phi\\)로 진동수에만 의존해 빛의 입자성을 보여 준다.",
    "chapters": [
     "photons#photoelectric"
    ]
   },
   {
    "ko": "광전자",
    "en": "photoelectron",
    "abbr": "",
    "def": "광전 효과로 물질 표면에서 튀어나온 전자.",
    "chapters": [
     "photons#photoelectric"
    ]
   },
   {
    "ko": "광학 발광 분광",
    "en": "optical emission spectroscopy, OES",
    "abbr": "",
    "def": "플라즈마 속 들뜬 원자·분자가 내는 선 스펙트럼을 분석하는 기법(OES). 식각 장비에서 특정 선의 세기 변화로 종말점을 찾는다.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   },
   {
    "ko": "구면 조화 함수",
    "en": "spherical harmonics",
    "abbr": "",
    "def": "구면 좌표의 각도 부분 해 \\(Y_l^m(\\theta,\\phi)\\). 각운동량 \\(\\hat L^2\\)과 \\(\\hat L_z\\)의 공통 고유 함수로 오비탈의 모양을 정한다.",
    "chapters": [
     "hydrogen-atom#angular"
    ]
   },
   {
    "ko": "구면 좌표",
    "en": "spherical coordinates",
    "abbr": "",
    "def": "위치를 거리 \\(r\\), 극각 \\(\\theta\\), 방위각 \\(\\phi\\)로 나타내는 좌표계. 중심력 문제의 변수 분리에 쓴다.",
    "chapters": [
     "hydrogen-atom#separation"
    ]
   },
   {
    "ko": "군속도",
    "en": "group velocity",
    "abbr": "",
    "def": "파속의 포락선이 움직이는 속도 \\(v_g = d\\omega/dk\\). 입자의 속도와 에너지 전달 속도에 해당한다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "궤도 양자수",
    "en": "orbital quantum number",
    "abbr": "",
    "def": "궤도 각운동량의 크기 \\(|\\vec L| = \\sqrt{l(l+1)}\\hbar\\)를 정하는 양자수 \\(l = 0, 1, \\dots, n-1\\). s, p, d, f 오비탈에 대응한다.",
    "chapters": [
     "hydrogen-atom#angular"
    ]
   },
   {
    "ko": "금속",
    "en": "metal",
    "abbr": "",
    "def": "페르미 준위가 띠 한가운데 있어 바로 위에 빈 상태가 무수히 많은 고체. 약한 전기장에도 전류가 흐른다.",
    "chapters": [
     "energy-bands#filling"
    ]
   },
   {
    "ko": "금속 결합",
    "en": "metallic bond",
    "abbr": "",
    "def": "원자들이 내놓은 전자가 결정 전체에 퍼진 전자 바다를 이루어 양이온들을 묶는 결합.",
    "chapters": [
     "molecular-bonding#bond-types"
    ]
   },
   {
    "ko": "금속–절연체 전이",
    "en": "metal–insulator transition",
    "abbr": "",
    "def": "도핑 농도가 모트 기준 \\(n_c^{1/3}a_B^* \\approx 0.26\\)을 넘으면 불순물 궤도가 겹쳐 절대 0도에서도 전도가 남게 되는 전이. Si:P에서 \\(n_c \\approx 3.7\\times10^{18}\\ \\text{cm}^{-3}\\)이다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "금지 영역",
    "en": "forbidden region",
    "abbr": "",
    "def": "\\(E < V\\)인 구간. 고전 입자는 들어갈 수 없고, 파동함수는 지수적으로 감쇠한다.",
    "chapters": [
     "schrodinger#conditions"
    ]
   },
   {
    "ko": "기댓값",
    "en": "expectation value",
    "abbr": "",
    "def": "같은 상태를 여러 번 측정했을 때 얻는 평균값 \\(\\langle A\\rangle = \\int\\Psi^*\\hat A\\Psi\\,dx\\).",
    "chapters": [
     "schrodinger#operators"
    ]
   },
   {
    "ko": "기본 단위 세포",
    "en": "primitive cell",
    "abbr": "",
    "def": "결정 전체를 빈틈없이 채우며 반복되는 가장 작은 단위. 격자점 하나를 포함한다.",
    "chapters": [
     "energy-bands#crystal"
    ]
   },
   {
    "ko": "기울기 효율",
    "en": "slope efficiency",
    "abbr": "",
    "def": "반도체 레이저에서 문턱 전류 이상의 출력 광전력 대 전류 곡선의 기울기(W/A).",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "기저",
    "en": "basis",
    "abbr": "",
    "def": "결정의 각 격자점에 붙는 원자 묶음. 실리콘(다이아몬드 구조)은 fcc 격자에 원자 두 개짜리 기저를 붙인 것이다.",
    "chapters": [
     "energy-bands#crystal"
    ]
   },
   {
    "ko": "내부 광방출",
    "en": "internal photoemission",
    "abbr": "",
    "def": "빛을 흡수한 전극의 전자가 절연막의 전도대로 넘어가는 현상. 광전류가 시작되는 광자 에너지로 Si/SiO₂ 같은 계면의 장벽 높이를 잰다.",
    "chapters": [
     "photons#photoelectric"
    ]
   },
   {
    "ko": "다이아몬드 구조",
    "en": "diamond structure",
    "abbr": "",
    "def": "각 원자가 sp³ 혼성으로 이웃 넷과 사면체 결합을 이루는 결정 구조. 실리콘·저마늄·다이아몬드가 이 구조다.",
    "chapters": [
     "molecular-bonding#hybrid"
    ]
   },
   {
    "ko": "단면적",
    "en": "cross section",
    "abbr": "",
    "def": "입사 입자가 특정 방식으로 산란될 확률을 넓이로 나타낸 양. 표적 하나가 막는 유효 넓이로 생각한다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "단위 세포",
    "en": "unit cell",
    "abbr": "",
    "def": "대칭을 보기 쉽게 고른, 결정에서 반복되는 덩어리(관습적 단위 세포). 실리콘의 입방 단위 세포에는 원자 8개가 있다.",
    "chapters": [
     "energy-bands#crystal"
    ]
   },
   {
    "ko": "대응 원리",
    "en": "correspondence principle",
    "abbr": "",
    "def": "양자수가 커지면 양자역학의 결과가 고전역학의 결과에 다가가야 한다는 원리.",
    "chapters": [
     "quantum-wells#infinite"
    ]
   },
   {
    "ko": "대칭",
    "en": "symmetric",
    "abbr": "",
    "def": "두 동일 입자를 맞바꿔도 부호가 변하지 않는 다입자 파동함수의 성질. 보손이 이 대칭을 따른다.",
    "chapters": [
     "spin-atoms#identical"
    ]
   },
   {
    "ko": "도플러 넓어짐",
    "en": "Doppler broadening",
    "abbr": "",
    "def": "열운동하는 원자들의 도플러 이동이 겹쳐 스펙트럼 선이 넓어지는 현상. 기체에서는 보통 자연 선폭보다 훨씬 크다.",
    "chapters": [
     "light-matter#lifetime"
    ]
   },
   {
    "ko": "독립 전자 근사",
    "en": "independent-electron approximation",
    "abbr": "",
    "def": "다전자 원자에서 각 전자가 핵과 나머지 전자들의 평균 퍼텐셜 속을 독립적으로 움직인다고 보는 근사. 오비탈과 전자 배치 개념의 바탕이다.",
    "chapters": [
     "spin-atoms#periodic"
    ]
   },
   {
    "ko": "듀안–헌트 한계",
    "en": "Duane–Hunt limit",
    "abbr": "",
    "def": "제동 복사 X선의 최단 파장 \\(\\lambda_\\text{min} = hc/eV\\). 가속 전압으로만 정해지고 표적 재질과 무관하다.",
    "chapters": [
     "photons#xray-compton"
    ]
   },
   {
    "ko": "드브로이 파",
    "en": "de Broglie wave",
    "abbr": "",
    "def": "운동량 \\(p\\)인 입자에 따르는 파장 \\(\\lambda = h/p\\)의 파동. 물질파라고도 한다.",
    "chapters": [
     "matter-waves#debroglie"
    ]
   },
   {
    "ko": "등가 산화막 두께",
    "en": "equivalent oxide thickness, EOT",
    "abbr": "",
    "def": "고유전율 절연막과 같은 게이트 용량을 내는 SiO₂ 두께 \\(\\text{EOT} = t_\\text{high-k}(3.9/\\varepsilon_r)\\)(EOT). 물리 두께는 두꺼워 터널 누설을 줄인다.",
    "chapters": [
     "tunneling#oxide"
    ]
   },
   {
    "ko": "띠 간격",
    "en": "band gap",
    "abbr": "",
    "def": "전자가 가질 수 없는 에너지 구간(금지 띠). 반도체에서는 가전자대 꼭대기와 전도대 바닥의 차 \\(E_g\\)이며 Si 1.12 eV다.",
    "chapters": [
     "energy-bands#kronig-penney"
    ]
   },
   {
    "ko": "띠 오프셋",
    "en": "band offset",
    "abbr": "",
    "def": "이종 접합에서 띠 간격 차이가 전도대와 가전자대로 나뉜 몫 \\(\\Delta E_c\\), \\(\\Delta E_v\\). 전자와 정공을 가두는 우물 깊이를 정한다.",
    "chapters": [
     "quantum-wells#hetero"
    ]
   },
   {
    "ko": "라모어 세차 운동",
    "en": "Larmor precession",
    "abbr": "",
    "def": "자기 모멘트가 자기장에서 토크를 받아 자기장 축 둘레로 도는 운동. 진동수가 제만 준위 간격을 \\(h\\)로 나눈 값과 같다.",
    "chapters": [
     "spin-atoms#zeeman"
    ]
   },
   {
    "ko": "란데 g 인자",
    "en": "Landé g-factor",
    "abbr": "",
    "def": "스핀–궤도 결합된 상태 \\(J\\)의 자기 모멘트를 정하는 인자 \\(g_J\\). 약한 자기장에서 준위 이동 \\(g_J m_j\\mu_BB\\)를 준다(비정상 제만 효과).",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "로런츠 선 모양",
    "en": "Lorentzian line shape",
    "abbr": "",
    "def": "유한한 수명으로 지수 감쇠하는 방출의 스펙트럼 모양. 선폭이 \\(\\Delta\\nu = 1/(2\\pi\\tau)\\)다.",
    "chapters": [
     "light-matter#lifetime"
    ]
   },
   {
    "ko": "뤼드베리 상수",
    "en": "Rydberg constant",
    "abbr": "",
    "def": "수소 스펙트럼 식 \\(1/\\lambda = R_H(1/n_1^2 - 1/n_2^2)\\)의 상수. \\(R_H = 1.09678\\times10^7\\ \\text{m}^{-1}\\)이다.",
    "chapters": [
     "atomic-spectra#spectra"
    ]
   },
   {
    "ko": "모스 퍼텐셜",
    "en": "Morse potential",
    "abbr": "",
    "def": "분자 결합 퍼텐셜을 \\(D_e(1 - e^{-a(r-r_e)})^2\\)로 나타낸 모형. 바닥 근처는 포물선이고 멀어지면 해리 에너지에서 평평해진다.",
    "chapters": [
     "harmonic-oscillator#molecules"
    ]
   },
   {
    "ko": "무거운 정공",
    "en": "heavy hole",
    "abbr": "",
    "def": "가전자대 꼭대기에서 곡률이 작은 쪽의 정공 띠. 실리콘에서 유효 질량이 약 \\(0.49m_e\\)이다.",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "무한 사각 우물",
    "en": "infinite square well",
    "abbr": "",
    "def": "폭 \\(L\\) 안에서 \\(V = 0\\), 밖은 무한대인 퍼텐셜. 에너지가 \\(E_n = n^2\\pi^2\\hbar^2/2mL^2\\)로 양자화된다.",
    "chapters": [
     "quantum-wells#infinite"
    ]
   },
   {
    "ko": "문턱 조건",
    "en": "threshold condition",
    "abbr": "",
    "def": "레이저 발진이 시작되는 조건. 공진기를 한 번 왕복하는 동안의 이득이 거울 손실과 내부 손실을 정확히 메워야 한다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "물질파",
    "en": "matter wave",
    "abbr": "",
    "def": "전자·중성자 같은 입자가 보이는 파동성. 파장은 드브로이 관계 \\(\\lambda = h/p\\)로 정해진다.",
    "chapters": [
     "matter-waves#debroglie"
    ]
   },
   {
    "ko": "미분 단면적",
    "en": "differential cross section",
    "abbr": "",
    "def": "단위 입체각으로 산란되는 단면적 \\(d\\sigma/d\\Omega\\). 러더퍼드 산란에서는 \\(1/\\sin^4(\\theta/2)\\)에 비례한다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "미세 구조",
    "en": "fine structure",
    "abbr": "",
    "def": "스핀–궤도 결합과 상대론 보정으로 원자 준위가 \\(\\alpha^2\\) 정도로 잘게 갈라지는 구조. 나트륨 D선 두 줄이 그 예다.",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "미시 상태",
    "en": "microstate",
    "abbr": "",
    "def": "계를 이루는 각 입자의 상태를 모두 지정한 상태. 같은 거시 상태에 속하는 미시 상태들은 똑같은 확률로 나타난다고 본다.",
    "chapters": [
     "quantum-statistics#boltzmann"
    ]
   },
   {
    "ko": "밀도 기울기 모형",
    "en": "density-gradient model",
    "abbr": "",
    "def": "슈뢰딩거 방정식을 직접 풀지 않고 전자 밀도의 기울기 항으로 양자 구속 효과를 보정하는 TCAD 모형.",
    "chapters": [
     "schrodinger#conditions"
    ]
   },
   {
    "ko": "밀도 반전",
    "en": "population inversion",
    "abbr": "",
    "def": "위 준위의 원자 수가 아래 준위보다 많은 상태 \\(N_2 > N_1\\). 유도 방출이 흡수를 이겨 빛이 증폭되려면 필요하다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "바닥 상태",
    "en": "ground state",
    "abbr": "",
    "def": "계가 가질 수 있는 가장 낮은 에너지 상태. 수소 원자는 \\(n = 1\\), \\(E_1 = -13.6\\ \\text{eV}\\)다.",
    "chapters": [
     "atomic-spectra#bohr"
    ]
   },
   {
    "ko": "반대칭",
    "en": "antisymmetric",
    "abbr": "",
    "def": "두 동일 입자를 맞바꾸면 부호가 바뀌는 다입자 파동함수의 성질. 페르미온(전자)이 따르며 파울리 배타 원리로 이어진다.",
    "chapters": [
     "spin-atoms#identical"
    ]
   },
   {
    "ko": "반데르발스 결합",
    "en": "van der Waals bond",
    "abbr": "",
    "def": "분자나 원자 사이의 약한 쌍극자 인력으로 이루어진 결합. 흑연 층 사이, MoS₂ 같은 2차원 물질의 층 사이를 묶는다.",
    "chapters": [
     "molecular-bonding#bond-types"
    ]
   },
   {
    "ko": "반도체",
    "en": "semiconductor",
    "abbr": "",
    "def": "0 K에서 띠가 꽉 차 있지만 띠 간격이 작아(대략 3–4 eV 이하) 상온에서 일부 전자가 열로 전도대에 오르는 고체. 도핑으로 전도도를 크게 바꿀 수 있다.",
    "chapters": [
     "energy-bands#filling"
    ]
   },
   {
    "ko": "반전층",
    "en": "inversion layer",
    "abbr": "",
    "def": "MOSFET 게이트에 문턱 이상의 전압을 걸었을 때 산화막 바로 아래에 소수 캐리어가 모여 생긴 얇은 전도층. 삼각 우물에 갇혀 부띠로 양자화된다.",
    "chapters": [
     "quantum-wells#triangular"
    ]
   },
   {
    "ko": "발광 다이오드",
    "en": "LED, light-emitting diode",
    "abbr": "",
    "def": "pn 접합에 순방향 전류를 흘려 주입된 전자와 정공의 복사 재결합으로 빛을 내는 소자(LED). 파장은 대략 \\(hc/E_g\\)다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "방출선",
    "en": "emission line",
    "abbr": "",
    "def": "뜨겁고 묽은 기체가 특정 파장에서만 내는 밝은 선. 원자 준위 사이 전이 에너지에 해당한다.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   },
   {
    "ko": "버나드–듀라포그 조건",
    "en": "Bernard–Duraffourg condition",
    "abbr": "",
    "def": "반도체에서 빛이 증폭되기 위한 밀도 반전 조건 \\(E_{Fn} - E_{Fp} > h\\nu > E_g\\). 두 준페르미 준위의 차가 광자 에너지보다 커야 한다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "벡터 모형",
    "en": "vector model",
    "abbr": "",
    "def": "각운동량 \\(\\vec L\\)을 길이 \\(\\sqrt{l(l+1)}\\hbar\\)인 화살표가 \\(z\\)축 둘레 원뿔 위에서 \\(z\\) 성분 \\(m\\hbar\\)만 정해진 채 도는 것으로 그리는 모형.",
    "chapters": [
     "hydrogen-atom#angular"
    ]
   },
   {
    "ko": "변수 분리",
    "en": "separation of variables",
    "abbr": "",
    "def": "여러 변수의 편미분 방정식을 각 변수만의 함수의 곱 \\(\\psi = X(x)Y(y)Z(z)\\)으로 풀어 상미분 방정식들로 나누는 방법.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "보른 해석",
    "en": "Born interpretation",
    "abbr": "",
    "def": "파동함수의 절댓값 제곱 \\(|\\psi|^2\\)이 입자를 발견할 확률 밀도라는 해석.",
    "chapters": [
     "matter-waves#double-slit"
    ]
   },
   {
    "ko": "보스–아인슈타인 분포",
    "en": "Bose–Einstein distribution",
    "abbr": "",
    "def": "보손이 에너지 \\(E\\)인 상태를 차지하는 평균 수 \\(1/(e^{(E-\\mu)/kT} - 1)\\). 광자·포논은 \\(\\mu = 0\\)이다.",
    "chapters": [
     "harmonic-oscillator#phonons"
    ]
   },
   {
    "ko": "보어 마그네톤",
    "en": "Bohr magneton",
    "abbr": "",
    "def": "원자 자기 모멘트의 자연 단위 \\(\\mu_B = e\\hbar/2m_e = 9.274\\times10^{-24}\\ \\text{J/T} = 5.788\\times10^{-5}\\ \\text{eV/T}\\).",
    "chapters": [
     "hydrogen-atom#transitions"
    ]
   },
   {
    "ko": "복사 재결합",
    "en": "radiative recombination",
    "abbr": "",
    "def": "전도대 전자가 가전자대 정공과 만나 띠 간격만큼의 에너지를 광자로 내는 재결합. LED와 레이저의 발광 원리다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "볼츠만 분포",
    "en": "Boltzmann distribution",
    "abbr": "",
    "def": "열평형에서 에너지 \\(E\\)인 상태가 차지될 상대 확률이 \\(e^{-E/kT}\\)에 비례한다는 분포.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   },
   {
    "ko": "부성 미분 저항",
    "en": "negative differential resistance, NDR",
    "abbr": "",
    "def": "전압을 올릴수록 전류가 줄어드는 구간(NDR). 공명 터널 다이오드에서 나타나 고주파 발진에 쓴다.",
    "chapters": [
     "tunneling#transfer"
    ]
   },
   {
    "ko": "분배 함수",
    "en": "partition function",
    "abbr": "",
    "def": "모든 상태의 볼츠만 인자를 더한 \\(Z = \\sum g_ie^{-E_i/kT}\\). 각 상태의 확률은 \\(g_ie^{-E_i/kT}/Z\\)다.",
    "chapters": [
     "quantum-statistics#boltzmann"
    ]
   },
   {
    "ko": "분산 관계",
    "en": "dispersion relation",
    "abbr": "",
    "def": "파동의 각진동수와 파수의 관계 \\(\\omega(k)\\). 자유 입자는 \\(\\omega = \\hbar k^2/2m\\)이며, 군속도와 파속의 퍼짐을 정한다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "불확정성 원리",
    "en": "uncertainty principle",
    "abbr": "",
    "def": "위치와 운동량을 동시에 정확히 알 수 없다는 원리 \\(\\Delta x\\,\\Delta p \\ge \\hbar/2\\). 측정 기술의 한계가 아니라 파동성의 결과다.",
    "chapters": [
     "matter-waves#uncertainty"
    ]
   },
   {
    "ko": "브래그 조건",
    "en": "Bragg condition",
    "abbr": "",
    "def": "간격 \\(d\\)인 결정면에서 반사된 파가 보강 간섭하는 조건 \\(2d\\sin\\theta = n\\lambda\\). X선·전자·중성자 회절에 똑같이 쓴다.",
    "chapters": [
     "matter-waves#diffraction"
    ]
   },
   {
    "ko": "브루스 식",
    "en": "Brus equation",
    "abbr": "",
    "def": "구형 반도체 양자점의 띠 간격을 덩어리 \\(E_g\\)에 전자·정공 구속 에너지를 더하고 쿨롱 인력을 뺀 값으로 어림하는 식.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "브릴루앙 영역",
    "en": "Brillouin zone",
    "abbr": "",
    "def": "\\(k\\) 공간에서 서로 다른 상태를 한 번씩만 담는 구간. 1차원 제1 영역은 \\(-\\pi/a < k \\le \\pi/a\\)이고, 그 경계에서 띠 간격이 열린다.",
    "chapters": [
     "harmonic-oscillator#phonons"
    ]
   },
   {
    "ko": "블로흐 진동",
    "en": "Bloch oscillation",
    "abbr": "",
    "def": "완벽한 결정 속 전자에 일정한 힘을 가하면 \\(k\\)가 브릴루앙 영역을 되풀이해 지나가며 위치가 진동하는 현상. 반도체 초격자에서 관측되었다.",
    "chapters": [
     "energy-bands#dynamics"
    ]
   },
   {
    "ko": "블로흐 함수",
    "en": "Bloch function",
    "abbr": "",
    "def": "주기 퍼텐셜 속 전자의 고유 상태 \\(\\psi_k = e^{ikx}u_k(x)\\). 평면파에 격자 주기를 가진 함수 \\(u_k\\)를 곱한 꼴이다(블로흐 정리).",
    "chapters": [
     "energy-bands#bloch"
    ]
   },
   {
    "ko": "비복사 전이",
    "en": "nonradiative transition",
    "abbr": "",
    "def": "광자를 내지 않고 포논(열)이나 결함을 거쳐 에너지를 잃는 전이. 발광 효율을 떨어뜨린다.",
    "chapters": [
     "light-matter#lifetime"
    ]
   },
   {
    "ko": "비조화성",
    "en": "anharmonicity",
    "abbr": "",
    "def": "실제 분자 퍼텐셜이 포물선에서 벗어나는 정도. 진동 준위 간격이 위로 갈수록 좁아지고 배음 흡수가 생긴다.",
    "chapters": [
     "harmonic-oscillator#molecules"
    ]
   },
   {
    "ko": "비축퇴",
    "en": "nondegenerate",
    "abbr": "",
    "def": "페르미 준위가 띠 가장자리에서 \\(3kT\\) 이상 떨어져 페르미–디랙 분포를 볼츠만 분포로 근사할 수 있는 상태. \\(n = N_ce^{-(E_c-E_F)/kT}\\)가 성립한다.",
    "chapters": [
     "quantum-statistics#carriers"
    ]
   },
   {
    "ko": "빈 변위 법칙",
    "en": "Wien's displacement law",
    "abbr": "",
    "def": "흑체 복사 스펙트럼의 봉우리 파장이 온도에 반비례한다는 법칙 \\(\\lambda_\\text{max}T = 2.898\\times10^{-3}\\ \\text{m}\\cdot\\text{K}\\).",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "사각 장벽",
    "en": "rectangular barrier",
    "abbr": "",
    "def": "폭 \\(a\\), 높이 \\(V_0\\)의 직사각형 퍼텐셜 장벽. \\(E < V_0\\)이어도 투과율이 대략 \\(e^{-2\\kappa a}\\)만큼 남는다.",
    "chapters": [
     "tunneling#barrier"
    ]
   },
   {
    "ko": "삼각 우물",
    "en": "triangular well",
    "abbr": "",
    "def": "한쪽은 무한 벽, 다른 쪽은 \\(V = qFz\\)로 직선적으로 오르는 퍼텐셜 우물. MOSFET 반전층을 근사하며 해는 에어리 함수다.",
    "chapters": [
     "quantum-wells#triangular"
    ]
   },
   {
    "ko": "상태 밀도",
    "en": "density of states",
    "abbr": "",
    "def": "단위 부피·단위 에너지당 양자 상태 수 \\(g(E)\\). 3차원 자유 전자는 \\(\\sqrt E\\), 2차원은 일정, 1차원은 \\(1/\\sqrt E\\)에 비례한다.",
    "chapters": [
     "quantum-statistics#dos"
    ]
   },
   {
    "ko": "상태 밀도 유효 질량",
    "en": "density-of-states effective mass",
    "abbr": "",
    "def": "계곡 수와 방향별 질량을 묶어 상태 밀도를 맞추도록 정한 유효 질량. 실리콘 전자는 \\(6^{2/3}(m_lm_t^2)^{1/3} = 1.08m_e\\)다.",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "선 스펙트럼",
    "en": "line spectrum",
    "abbr": "",
    "def": "묽은 기체가 내거나 흡수하는, 몇 개의 날카로운 파장만으로 이루어진 스펙트럼. 원자 에너지 준위가 불연속임을 보여 준다.",
    "chapters": [
     "atomic-spectra#spectra"
    ]
   },
   {
    "ko": "선택 규칙",
    "en": "selection rule",
    "abbr": "",
    "def": "빛의 흡수·방출로 일어날 수 있는 전이를 정하는 규칙. 조화 진동자는 \\(\\Delta n = \\pm1\\), 원자의 전기 쌍극자 전이는 \\(\\Delta l = \\pm1\\)이다.",
    "chapters": [
     "harmonic-oscillator#molecules"
    ]
   },
   {
    "ko": "수명",
    "en": "lifetime",
    "abbr": "",
    "def": "들뜬 준위에 머무는 평균 시간 \\(\\tau\\). 자발 방출만 있으면 \\(\\tau = 1/A_{21}\\)이다.",
    "chapters": [
     "light-matter#lifetime"
    ]
   },
   {
    "ko": "수소 꼴 원자",
    "en": "hydrogen-like atom",
    "abbr": "",
    "def": "핵 전하 \\(Ze\\) 주위에 전자 하나만 있는 원자나 이온(He⁺, Li²⁺ 등). 에너지는 \\(E_n = -13.6\\,Z^2/n^2\\ \\text{eV}\\)다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "수직 공진 표면 방출 레이저",
    "en": "VCSEL",
    "abbr": "",
    "def": "공진기를 기판에 수직으로 세우고 위아래에 분산 브래그 반사경을 둔 반도체 레이저(VCSEL). 빛이 표면으로 나와 웨이퍼 단위 시험과 배열이 쉽다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "슈테판–볼츠만 법칙",
    "en": "Stefan–Boltzmann law",
    "abbr": "",
    "def": "흑체가 단위 넓이당 내는 전체 복사 출력이 \\(\\sigma T^4\\)라는 법칙(\\(\\sigma = 5.670\\times10^{-8}\\ \\text{W/(m}^2\\text{K}^4)\\)).",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "슈팅법",
    "en": "shooting method",
    "abbr": "",
    "def": "한쪽 끝에서 시작해 슈뢰딩거 방정식을 수치 적분하며 다른 쪽 경계 조건이 맞을 때까지 에너지를 조정하는 고윳값 풀이법.",
    "chapters": [
     "schrodinger#conditions"
    ]
   },
   {
    "ko": "스핀",
    "en": "spin",
    "abbr": "",
    "def": "입자가 공간 운동과 무관하게 가지는 고유 각운동량. 전자는 \\(s = 1/2\\)로 \\(S_z = \\pm\\hbar/2\\) 두 상태만 있다.",
    "chapters": [
     "spin-atoms#spin"
    ]
   },
   {
    "ko": "스핀 전달 토크",
    "en": "STT",
    "abbr": "",
    "def": "스핀이 정렬된 전류가 자성층에 들어가 스핀 각운동량을 넘겨주며 자화를 돌리는 효과(STT). STT-MRAM의 쓰기 원리다.",
    "chapters": [
     "spin-atoms#inner"
    ]
   },
   {
    "ko": "스핀–궤도 결합",
    "en": "spin–orbit coupling",
    "abbr": "",
    "def": "전자의 스핀 자기 모멘트가 궤도 운동으로 생긴 내부 자기장과 상호작용해 준위가 \\(j = l \\pm 1/2\\)로 갈라지는 효과.",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "스핀–통계 정리",
    "en": "spin–statistics theorem",
    "abbr": "",
    "def": "정수 스핀 입자(보손)는 대칭, 반정수 스핀 입자(페르미온)는 반대칭 파동함수를 가진다는 정리.",
    "chapters": [
     "spin-atoms#identical"
    ]
   },
   {
    "ko": "슬레이터 행렬식",
    "en": "Slater determinant",
    "abbr": "",
    "def": "전자 \\(N\\)개의 반대칭 파동함수를 단일 입자 오비탈로 만든 \\(N\\times N\\) 행렬식. 두 전자가 같은 상태에 있으면 0이 된다.",
    "chapters": [
     "spin-atoms#identical"
    ]
   },
   {
    "ko": "실수 오비탈",
    "en": "real orbitals",
    "abbr": "",
    "def": "\\(+m\\)과 \\(-m\\) 상태를 더하고 빼서 만든 실수 값 오비탈(\\(p_x, p_y, d_{xy}\\) 등). 화학 결합의 방향을 보여 준다.",
    "chapters": [
     "hydrogen-atom#angular"
    ]
   },
   {
    "ko": "쌍생성",
    "en": "pair production",
    "abbr": "",
    "def": "에너지 \\(2m_ec^2 = 1.022\\ \\text{MeV}\\) 이상의 광자가 핵 근처에서 사라지며 전자와 양전자 한 쌍을 만드는 현상.",
    "chapters": [
     "photons#pair"
    ]
   },
   {
    "ko": "쌓음 원리",
    "en": "aufbau principle",
    "abbr": "",
    "def": "바닥 상태의 전자 배치는 에너지가 낮은 오비탈부터 파울리 원리에 따라 채운다는 원리.",
    "chapters": [
     "spin-atoms#periodic"
    ]
   },
   {
    "ko": "아레니우스 법칙",
    "en": "Arrhenius law",
    "abbr": "",
    "def": "활성화 에너지 \\(E_a\\)를 넘어야 일어나는 과정의 속도가 \\(e^{-E_a/kT}\\)에 비례한다는 법칙. 신뢰성 가속 시험의 바탕이다.",
    "chapters": [
     "quantum-statistics#boltzmann"
    ]
   },
   {
    "ko": "액티노메트리",
    "en": "actinometry",
    "abbr": "",
    "def": "발광 분광에서 관심 선의 세기를 Ar 같은 기준 기체 선으로 나누어 플라즈마 밀도·전자 온도 요동을 지우는 방법.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   },
   {
    "ko": "양자 용량",
    "en": "quantum capacitance",
    "abbr": "",
    "def": "상태 밀도가 유한해 페르미 준위를 올려야 전하가 들어오는 데서 생기는 용량 \\(C_q = e^2g\\). 산화막 용량과 직렬로 작용한다.",
    "chapters": [
     "quantum-statistics#dos"
    ]
   },
   {
    "ko": "양자 우물",
    "en": "quantum well",
    "abbr": "",
    "def": "한 방향으로만 퍼텐셜에 갇혀 그 방향 운동이 양자화되고 나머지 두 방향은 자유로운 2차원 구조. 이종 구조 레이저와 반전층이 예다.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "양자 효율",
    "en": "quantum efficiency",
    "abbr": "",
    "def": "들어온 광자 하나당 회로로 모인 전자 수 \\(\\eta\\). 반사·흡수·수집 손실을 모두 포함한 값이 외부 양자 효율이다.",
    "chapters": [
     "light-matter#detector"
    ]
   },
   {
    "ko": "양자선",
    "en": "quantum wire",
    "abbr": "",
    "def": "두 방향으로 갇혀 한 방향으로만 움직일 수 있는 1차원 구조. 나노와이어 트랜지스터 채널이 예다.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "양자점",
    "en": "quantum dot",
    "abbr": "",
    "def": "세 방향 모두 갇혀 에너지 준위가 원자처럼 불연속인 0차원 구조. 크기로 발광 색을 조절해 QD 디스플레이에 쓴다.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "양전자",
    "en": "positron, e⁺",
    "abbr": "",
    "def": "전자의 반입자. 질량은 전자와 같고 전하가 \\(+e\\)이며, 전자와 만나면 소멸해 0.511 MeV 광자 두 개를 낸다.",
    "chapters": [
     "photons#pair"
    ]
   },
   {
    "ko": "얕은 주개",
    "en": "shallow donor",
    "abbr": "",
    "def": "반도체에 넣은 5족 원자처럼 전자 하나를 내놓기 쉬운 불순물. 수소 모형에서 결합 에너지가 \\(13.6\\,(m^*/m_e)/\\varepsilon_r^2\\ \\text{eV}\\)로 수십 meV에 불과하다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "에너지 고윳값",
    "en": "energy eigenvalue",
    "abbr": "",
    "def": "시간 독립 슈뢰딩거 방정식 \\(\\hat H\\psi = E\\psi\\)을 경계 조건과 함께 만족하는 에너지 값. 속박 상태에서는 불연속이다.",
    "chapters": [
     "schrodinger#stationary"
    ]
   },
   {
    "ko": "에너지 등분배",
    "en": "equipartition",
    "abbr": "",
    "def": "고전 통계에서 각 2차 자유도가 평균 \\(\\tfrac12k_BT\\)의 에너지를 가진다는 정리. 흑체 복사에 적용하면 자외선 파탄이 생긴다.",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "에너지 분산 X선 분광",
    "en": "energy-dispersive X-ray spectroscopy, EDS/EDX",
    "abbr": "",
    "def": "전자빔이 시료에서 만든 특성 X선의 에너지를 반도체 검출기로 재어 원소를 분석하는 기법(EDS/EDX). SEM·TEM에 붙어 있다.",
    "chapters": [
     "atomic-spectra#xray"
    ]
   },
   {
    "ko": "에르미트 다항식",
    "en": "Hermite polynomial",
    "abbr": "",
    "def": "조화 진동자 고유 함수 \\(\\psi_n \\propto H_n(\\xi)e^{-\\xi^2/2}\\)에 나오는 다항식. \\(H_0 = 1\\), \\(H_1 = 2\\xi\\), \\(H_2 = 4\\xi^2 - 2\\), ….",
    "chapters": [
     "harmonic-oscillator#quantum"
    ]
   },
   {
    "ko": "에어리 함수",
    "en": "Airy function",
    "abbr": "",
    "def": "선형 퍼텐셜 속 슈뢰딩거 방정식의 해 \\(\\mathrm{Ai}(z)\\). 삼각 우물의 준위는 \\(\\mathrm{Ai}\\)의 영점 2.338, 4.088, …으로 정해진다.",
    "chapters": [
     "quantum-wells#triangular"
    ]
   },
   {
    "ko": "엑시머 레이저",
    "en": "excimer laser",
    "abbr": "",
    "def": "KrF(248 nm)·ArF(193 nm)처럼 들뜬 상태에서만 묶이는 분자를 이득 매질로 쓰는 자외선 레이저. DUV 노광의 광원이다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "엑시톤",
    "en": "exciton",
    "abbr": "",
    "def": "빛 흡수로 생긴 전자와 정공이 쿨롱 인력으로 묶인 수소 비슷한 상태. 띠 간격 바로 아래에 흡수 봉우리를 만든다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "역격자 벡터",
    "en": "reciprocal lattice vector",
    "abbr": "",
    "def": "\\(e^{iGx}\\)가 격자 주기를 갖게 하는 파수 \\(G = 2\\pi n/a\\). \\(k\\)와 \\(k + G\\)는 같은 블로흐 상태를 나타낸다.",
    "chapters": [
     "energy-bands#bloch"
    ]
   },
   {
    "ko": "연산자",
    "en": "operator",
    "abbr": "",
    "def": "파동함수에 작용해 물리량을 꺼내는 수학적 조작. 운동량 \\(\\hat p = -i\\hbar\\,\\partial/\\partial x\\), 에너지는 해밀토니언 \\(\\hat H\\)다.",
    "chapters": [
     "schrodinger#operators"
    ]
   },
   {
    "ko": "연속 스펙트럼",
    "en": "continuous spectrum",
    "abbr": "",
    "def": "모든 파장을 끊김 없이 포함하는 스펙트럼. 뜨거운 고체나 조밀한 물체가 흑체 복사처럼 낸다.",
    "chapters": [
     "atomic-spectra#spectra"
    ]
   },
   {
    "ko": "열복사",
    "en": "thermal radiation",
    "abbr": "",
    "def": "물체가 온도 때문에 내는 전자기파. 온도가 높을수록 세지고 짧은 파장 쪽으로 옮겨 간다.",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "열중성자",
    "en": "thermal neutron",
    "abbr": "",
    "def": "상온 정도의 운동 에너지(약 25 meV)를 가진 중성자. 파장이 약 0.18 nm라 결정 회절에 쓰며 가벼운 원소와 자기 질서에 민감하다.",
    "chapters": [
     "matter-waves#diffraction"
    ]
   },
   {
    "ko": "열화",
    "en": "thermalization",
    "abbr": "",
    "def": "띠 간격보다 큰 에너지로 들뜬 캐리어가 포논을 내며 띠 가장자리까지 빠르게 식는 과정. 초과 에너지 \\(h\\nu - E_g\\)는 열로 사라진다.",
    "chapters": [
     "light-matter#detector"
    ]
   },
   {
    "ko": "영년 방정식",
    "en": "secular equation",
    "abbr": "",
    "def": "LCAO 변분 계산에서 계수가 0이 아닌 해를 가질 조건인 행렬식 방정식 \\(\\det(H - ES) = 0\\). 그 근이 분자 오비탈 에너지다.",
    "chapters": [
     "molecular-bonding#lcao"
    ]
   },
   {
    "ko": "영점 에너지",
    "en": "zero-point energy",
    "abbr": "",
    "def": "절대 0도에서도 사라지지 않는 최소 에너지. 조화 진동자는 \\(\\tfrac12\\hbar\\omega\\)이며 불확정성 원리의 결과다.",
    "chapters": [
     "matter-waves#estimates"
    ]
   },
   {
    "ko": "온사이트 에너지",
    "en": "on-site energy",
    "abbr": "",
    "def": "원자 오비탈 하나에 전자가 있을 때의 에너지 \\(\\alpha = \\langle\\phi_A|H|\\phi_A\\rangle\\). 강결합 띠의 중심을 정한다.",
    "chapters": [
     "molecular-bonding#lcao"
    ]
   },
   {
    "ko": "올림 연산자",
    "en": "raising operator",
    "abbr": "",
    "def": "조화 진동자 상태를 한 단계 위로 올리는 연산자 \\(\\hat a^\\dagger\\psi_n = \\sqrt{n+1}\\,\\psi_{n+1}\\). 내림 연산자 \\(\\hat a\\)와 짝을 이룬다.",
    "chapters": [
     "harmonic-oscillator#quantum"
    ]
   },
   {
    "ko": "외부 양자 효율",
    "en": "EQE",
    "abbr": "",
    "def": "LED에 주입한 전자 하나당 밖으로 나온 광자 수(EQE). 주입 효율 × 내부 양자 효율 × 광 추출 효율이다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "원심 장벽",
    "en": "centrifugal barrier",
    "abbr": "",
    "def": "지름 방향 방정식의 유효 퍼텐셜에 더해지는 항 \\(l(l+1)\\hbar^2/2mr^2\\). \\(l > 0\\)인 전자를 핵에서 밀어낸다.",
    "chapters": [
     "hydrogen-atom#radial"
    ]
   },
   {
    "ko": "원자 오비탈의 선형 결합",
    "en": "linear combination of atomic orbitals, LCAO",
    "abbr": "",
    "def": "분자 오비탈을 각 원자의 오비탈을 겹친 \\(\\psi = c_A\\phi_A + c_B\\phi_B\\)로 근사하는 방법(LCAO). 결합·반결합 오비탈을 준다.",
    "chapters": [
     "molecular-bonding#lcao"
    ]
   },
   {
    "ko": "원자핵",
    "en": "nucleus",
    "abbr": "",
    "def": "원자 질량과 양전하 거의 전부가 모인 지름 수 fm의 중심. 러더퍼드 산란 실험으로 발견되었다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "위상 속도",
    "en": "phase velocity",
    "abbr": "",
    "def": "파동의 개별 마루가 움직이는 속도 \\(v_p = \\omega/k\\). 물질파에서는 입자 속도의 절반이다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "유도 방출",
    "en": "stimulated emission",
    "abbr": "",
    "def": "들뜬 원자가 지나가는 광자에 자극받아 그와 똑같은 진동수·위상·방향의 광자를 하나 더 내며 내려오는 과정. 레이저 증폭의 원리다.",
    "chapters": [
     "light-matter#einstein"
    ]
   },
   {
    "ko": "유한 사각 우물",
    "en": "finite square well",
    "abbr": "",
    "def": "깊이 \\(V_0\\), 폭 \\(L\\)의 우물. 속박 상태 수가 유한하고 파동함수가 장벽 속으로 스며들어 무한 우물보다 준위가 낮다.",
    "chapters": [
     "quantum-wells#finite"
    ]
   },
   {
    "ko": "유효 상태 밀도",
    "en": "effective density of states",
    "abbr": "",
    "def": "띠 전체의 상태를 띠 가장자리 한 준위에 모은 것처럼 나타낸 농도 \\(N_c = 2(2\\pi m_n^*kT/h^2)^{3/2}\\). Si 300 K에서 \\(2.8\\times10^{19}\\ \\text{cm}^{-3}\\)이다.",
    "chapters": [
     "quantum-statistics#carriers"
    ]
   },
   {
    "ko": "유효 질량",
    "en": "effective mass",
    "abbr": "",
    "def": "결정 속 전자가 외부 힘에 반응할 때 보이는 질량 \\(m^* = \\hbar^2/(d^2E/dk^2)\\). 띠의 곡률로 정해지며 Si 가로 질량 \\(0.19m_e\\), GaAs \\(0.067m_e\\)이다.",
    "chapters": [
     "schrodinger#wave-eq"
    ]
   },
   {
    "ko": "유효 핵전하",
    "en": "effective nuclear charge",
    "abbr": "",
    "def": "다전자 원자에서 안쪽 전자의 가림을 뺀 뒤 바깥 전자가 느끼는 핵전하 \\(Z_\\text{eff} = Z - \\sigma\\).",
    "chapters": [
     "spin-atoms#periodic"
    ]
   },
   {
    "ko": "응답도",
    "en": "responsivity",
    "abbr": "",
    "def": "광검출기에 들어온 광전력 1 W당 광전류 \\(\\mathcal R = \\eta e\\lambda/hc\\)(A/W).",
    "chapters": [
     "light-matter#detector"
    ]
   },
   {
    "ko": "이득 계수",
    "en": "gain coefficient",
    "abbr": "",
    "def": "매질 속을 지나는 빛의 세기가 \\(I = I_0e^{gz}\\)로 늘어날 때의 \\(g = \\sigma(N_2 - N_1)\\). 밀도 반전이 있어야 양수가 된다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "이득 포화",
    "en": "gain saturation",
    "abbr": "",
    "def": "빛이 세질수록 유도 방출이 밀도 반전을 소모해 이득이 줄어드는 현상. 레이저 출력이 일정한 값에서 안정되는 이유다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "이온 결합",
    "en": "ionic bond",
    "abbr": "",
    "def": "전기 음성도 차가 커서 전자가 한 원자에서 다른 원자로 거의 완전히 넘어가 양·음이온의 정전기 인력으로 묶이는 결합.",
    "chapters": [
     "molecular-bonding#bond-types"
    ]
   },
   {
    "ko": "이온화 에너지",
    "en": "ionization energy",
    "abbr": "",
    "def": "바닥 상태의 원자에서 전자 하나를 무한히 떼어 내는 데 드는 최소 에너지. 수소는 13.6 eV다.",
    "chapters": [
     "atomic-spectra#bohr"
    ]
   },
   {
    "ko": "이종 구조",
    "en": "heterostructure",
    "abbr": "",
    "def": "띠 간격이 다른 반도체를 원자층 단위로 쌓은 구조. 띠 오프셋으로 전자와 정공을 가두어 양자 우물·레이저·HEMT를 만든다.",
    "chapters": [
     "quantum-wells#hetero"
    ]
   },
   {
    "ko": "일함수",
    "en": "work function",
    "abbr": "",
    "def": "페르미 준위의 전자를 물질 밖 진공으로 꺼내는 데 필요한 최소 에너지 \\(\\phi\\). 금속마다 다르며 광전 효과의 문턱 진동수를 정한다.",
    "chapters": [
     "photons#photoelectric"
    ]
   },
   {
    "ko": "자기 양자수",
    "en": "magnetic quantum number",
    "abbr": "",
    "def": "각운동량의 \\(z\\) 성분 \\(L_z = m\\hbar\\)를 정하는 양자수 \\(m = -l, \\dots, +l\\). 자기장 속 준위 갈라짐에서 이름이 왔다.",
    "chapters": [
     "hydrogen-atom#separation"
    ]
   },
   {
    "ko": "자기 터널 접합",
    "en": "MTJ, magnetic tunnel junction",
    "abbr": "",
    "def": "두 강자성층 사이에 얇은 절연막(MgO)을 끼운 구조(MTJ). 두 자화가 나란한지 반대인지에 따라 터널 저항이 달라 MRAM 셀로 쓴다.",
    "chapters": [
     "spin-atoms#inner"
    ]
   },
   {
    "ko": "자기 회전 비율",
    "en": "gyromagnetic ratio",
    "abbr": "",
    "def": "자기 모멘트와 각운동량의 비 \\(\\gamma = \\mu/L\\). 궤도 운동은 \\(e/2m_e\\), 전자 스핀은 그 약 두 배다.",
    "chapters": [
     "spin-atoms#zeeman"
    ]
   },
   {
    "ko": "자발 방출",
    "en": "spontaneous emission",
    "abbr": "",
    "def": "들뜬 원자가 외부 빛 없이 저절로 아래 준위로 내려오며 임의의 방향·위상으로 광자를 내는 과정. 빈도는 아인슈타인 계수 \\(A_{21}\\)이다.",
    "chapters": [
     "light-matter#einstein"
    ]
   },
   {
    "ko": "자외선 파탄",
    "en": "ultraviolet catastrophe",
    "abbr": "",
    "def": "고전 에너지 등분배를 흑체 복사에 적용하면 짧은 파장에서 복사 세기가 무한대로 발산하는 모순. 플랑크의 양자 가설로 해결되었다.",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "자유 전자 모형",
    "en": "free-electron model",
    "abbr": "",
    "def": "금속의 전도 전자를 상자 속에 갇힌, 서로 상호작용하지 않는 자유 전자 기체로 보는 모형. 페르미 에너지와 상태 밀도를 준다.",
    "chapters": [
     "quantum-statistics#metals"
    ]
   },
   {
    "ko": "전기 쌍극자 전이",
    "en": "electric dipole transition",
    "abbr": "",
    "def": "빛의 전기장이 원자의 쌍극자 모멘트와 결합해 일어나는 가장 흔한 전이. 확률이 \\(|\\langle f|\\vec r|i\\rangle|^2\\)에 비례하며 \\(\\Delta l = \\pm1\\) 선택 규칙을 따른다.",
    "chapters": [
     "hydrogen-atom#transitions"
    ]
   },
   {
    "ko": "전기 음성도",
    "en": "electronegativity",
    "abbr": "",
    "def": "결합 속에서 원자가 전자를 끌어당기는 정도. LCAO의 온사이트 에너지가 낮을수록 크고, 두 원자의 차가 결합의 이온성을 정한다.",
    "chapters": [
     "molecular-bonding#bond-types"
    ]
   },
   {
    "ko": "전기적 산화막 두께",
    "en": "CET, capacitance equivalent thickness",
    "abbr": "",
    "def": "용량–전압 측정에서 얻는 유효 산화막 두께(CET). 반전층 전자의 중심이 계면에서 떨어져 있고 게이트 공핍이 있어 EOT보다 두껍게 나온다.",
    "chapters": [
     "quantum-wells#triangular"
    ]
   },
   {
    "ko": "전달 행렬법",
    "en": "transfer-matrix method",
    "abbr": "",
    "def": "여러 층의 계단 퍼텐셜에서 경계마다 파동함수와 기울기의 연속 조건을 행렬로 이어 붙여 투과율을 구하는 방법.",
    "chapters": [
     "tunneling#transfer"
    ]
   },
   {
    "ko": "전도대",
    "en": "conduction band",
    "abbr": "",
    "def": "반결합 오비탈에서 비롯한 띠로, 반도체에서 가전자대 위에 띠 간격을 두고 있는 띠. 바닥 에너지를 \\(E_c\\)로 쓴다.",
    "chapters": [
     "molecular-bonding#bands"
    ]
   },
   {
    "ko": "전도도 유효 질량",
    "en": "conductivity effective mass",
    "abbr": "",
    "def": "이동도와 전류를 계산할 때 쓰는, 세 방향 \\(1/m\\)을 평균한 유효 질량. 실리콘 전자는 \\(3/(1/m_l + 2/m_t) = 0.26m_e\\)다.",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "전반사",
    "en": "total internal reflection",
    "abbr": "",
    "def": "굴절률이 큰 매질에서 임계각 \\(\\sin^{-1}(1/n)\\)보다 비스듬히 경계에 닿은 빛이 모두 반사되는 현상. LED 광 추출을 막는 주된 원인이다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "전자 스핀 공명",
    "en": "ESR 또는 EPR",
    "abbr": "",
    "def": "자기장 속에서 갈라진 전자 스핀 준위 사이를 마이크로파로 전이시켜 흡수를 재는 분광법(ESR, EPR). 짝짓지 않은 전자를 가진 결함을 찾는다.",
    "chapters": [
     "spin-atoms#inner"
    ]
   },
   {
    "ko": "절연체",
    "en": "insulator",
    "abbr": "",
    "def": "띠가 꽉 차고 띠 간격이 커서(대략 4 eV 이상) 상온에서도 전도대에 전자가 거의 없는 고체. SiO₂는 약 9 eV다.",
    "chapters": [
     "energy-bands#filling"
    ]
   },
   {
    "ko": "정규화",
    "en": "normalization",
    "abbr": "",
    "def": "입자를 어딘가에서 발견할 전체 확률이 1이 되도록 \\(\\int|\\Psi|^2dx = 1\\)로 파동함수의 크기를 맞추는 것.",
    "chapters": [
     "schrodinger#born"
    ]
   },
   {
    "ko": "정상 제만 효과",
    "en": "normal Zeeman effect",
    "abbr": "",
    "def": "스핀을 무시할 때 자기장 속에서 원자 준위가 같은 간격 \\(\\mu_BB\\)로 \\(2l+1\\)개로 갈라져 스펙트럼 선이 세 줄로 나뉘는 현상.",
    "chapters": [
     "spin-atoms#zeeman"
    ]
   },
   {
    "ko": "정상파",
    "en": "standing wave",
    "abbr": "",
    "def": "제자리에서 진동하며 진행하지 않는 파동. 보어 모형에서 궤도 둘레에 전자 파장이 정수 개 들어가는 조건이 각운동량 양자화를 준다.",
    "chapters": [
     "atomic-spectra#bohr"
    ]
   },
   {
    "ko": "제동 복사",
    "en": "bremsstrahlung",
    "abbr": "",
    "def": "빠른 전자가 원자핵 근처에서 급히 감속하며 내는 연속 X선. 최단 파장은 가속 전압으로 정해진다.",
    "chapters": [
     "photons#xray-compton"
    ]
   },
   {
    "ko": "조화 진동자",
    "en": "harmonic oscillator",
    "abbr": "",
    "def": "복원력이 변위에 비례하는 계 \\(V = \\tfrac12kx^2\\). 양자 준위가 \\(E_n = (n + \\tfrac12)\\hbar\\omega\\)로 등간격이다.",
    "chapters": [
     "harmonic-oscillator#parabola"
    ]
   },
   {
    "ko": "종말점",
    "en": "endpoint",
    "abbr": "",
    "def": "식각이 목표 층을 다 지나 아래층에 닿은 시점. 발광 분광에서 반응 생성물 선의 세기 변화로 찾는다.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   },
   {
    "ko": "주사 터널링 현미경",
    "en": "scanning tunneling microscope, STM",
    "abbr": "",
    "def": "날카로운 탐침과 시료 사이의 터널 전류가 거리에 지수적으로 민감한 것을 이용해 표면 원자를 보는 현미경(STM).",
    "chapters": [
     "tunneling#stm"
    ]
   },
   {
    "ko": "준안정 상태",
    "en": "metastable state",
    "abbr": "",
    "def": "선택 규칙 때문에 빛을 내며 쉽게 내려갈 수 없어 수명이 매우 긴 들뜬 상태. 수소의 2s 상태가 예다.",
    "chapters": [
     "hydrogen-atom#transitions"
    ]
   },
   {
    "ko": "준안정 준위",
    "en": "metastable level",
    "abbr": "",
    "def": "레이저 매질에서 수명이 길어 원자가 쌓이며 밀도 반전을 만드는 들뜬 준위.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "중심 세포 보정",
    "en": "central-cell correction",
    "abbr": "",
    "def": "불순물 원자 바로 근처에서 연속 매질 수소 모형이 깨져 생기는 결합 에너지 보정. 주개 원소마다 결합 에너지가 다른 이유다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "중심력",
    "en": "central force",
    "abbr": "",
    "def": "크기가 중심에서의 거리에만 의존하고 중심을 향하는 힘. 퍼텐셜이 \\(U(r)\\)이면 각운동량이 보존되어 각도 부분이 구면 조화 함수로 분리된다.",
    "chapters": [
     "hydrogen-atom#separation"
    ]
   },
   {
    "ko": "직교",
    "en": "orthogonal",
    "abbr": "",
    "def": "서로 다른 고유 상태의 겹침 적분이 0이 되는 성질 \\(\\int\\psi_m^*\\psi_n\\,dx = 0\\). 임의의 상태를 고유 상태로 전개할 수 있게 한다.",
    "chapters": [
     "quantum-wells#infinite"
    ]
   },
   {
    "ko": "직접 띠 간격",
    "en": "direct band gap",
    "abbr": "",
    "def": "전도대 바닥과 가전자대 꼭대기가 같은 \\(k\\)에 있는 띠 간격. 포논 없이 빛을 흡수·방출할 수 있어 LED와 레이저에 쓴다(GaAs, GaN).",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "직접 터널링",
    "en": "direct tunneling",
    "abbr": "",
    "def": "산화막 전압이 장벽 높이보다 작아 사다리꼴 장벽 전체를 전자가 곧장 터널링하는 과정. 얇은 게이트 산화막의 누설 전류 원인이다.",
    "chapters": [
     "tunneling#oxide"
    ]
   },
   {
    "ko": "진성 캐리어 농도",
    "en": "intrinsic carrier concentration",
    "abbr": "",
    "def": "불순물이 없는 반도체의 열평형 전자(=정공) 농도 \\(n_i = \\sqrt{N_cN_v}\\,e^{-E_g/2kT}\\). Si 300 K에서 약 \\(1.0\\times10^{10}\\ \\text{cm}^{-3}\\)이다.",
    "chapters": [
     "quantum-statistics#carriers"
    ]
   },
   {
    "ko": "짝 상태",
    "en": "even state",
    "abbr": "",
    "def": "대칭인 퍼텐셜에서 \\(\\psi(-x) = \\psi(x)\\)를 만족하는 고유 상태. 유한 우물의 바닥 상태가 짝 상태다.",
    "chapters": [
     "quantum-wells#finite"
    ]
   },
   {
    "ko": "총 각운동량",
    "en": "total angular momentum",
    "abbr": "",
    "def": "궤도와 스핀 각운동량의 합 \\(\\vec J = \\vec L + \\vec S\\). 스핀–궤도 결합이 있으면 \\(j\\)와 \\(m_j\\)가 좋은 양자수가 된다.",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "최근접 거리",
    "en": "distance of closest approach",
    "abbr": "",
    "def": "정면으로 다가온 입자가 쿨롱 반발로 멈추는 거리. 러더퍼드 산란에서 핵 크기의 상한을 준다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "축퇴",
    "en": "degeneracy",
    "abbr": "",
    "def": "서로 다른 양자 상태가 같은 에너지를 가지는 것. 같은 에너지의 상태 수를 축퇴도라 한다.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "축퇴 반도체",
    "en": "degenerate semiconductor",
    "abbr": "",
    "def": "도핑이 매우 높아 페르미 준위가 띠 안이나 띠 가장자리 가까이 들어간 반도체. 금속처럼 행동해 저온에서도 캐리어가 얼어붙지 않는다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "축퇴도",
    "en": "degeneracy",
    "abbr": "",
    "def": "한 에너지 준위에 속한 서로 다른 상태의 수. 수소 원자 준위 \\(E_n\\)은 \\(n^2\\)(스핀 포함 \\(2n^2\\))이다.",
    "chapters": [
     "hydrogen-atom#radial"
    ]
   },
   {
    "ko": "충격 매개변수",
    "en": "impact parameter",
    "abbr": "",
    "def": "산란 중심을 지나는 직선과 입사 입자의 처음 경로 사이의 거리 \\(b\\). 작을수록 크게 휜다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "침투",
    "en": "penetration",
    "abbr": "",
    "def": "같은 껍질에서 \\(l\\)이 작은 오비탈(s)이 핵 가까이 파고들어 가림을 덜 받고 에너지가 낮아지는 효과.",
    "chapters": [
     "spin-atoms#periodic"
    ]
   },
   {
    "ko": "침투 깊이",
    "en": "penetration depth",
    "abbr": "",
    "def": "파동이나 빛의 세기가 \\(1/e\\)로 줄어드는 깊이. 장벽 속 파동함수는 \\(\\delta = 1/\\kappa\\), 흡수 매질 속 빛은 \\(1/\\alpha\\)다.",
    "chapters": [
     "quantum-wells#finite"
    ]
   },
   {
    "ko": "콤프턴 파장",
    "en": "Compton wavelength",
    "abbr": "",
    "def": "전자의 콤프턴 파장 \\(\\lambda_C = h/m_ec = 2.426\\ \\text{pm}\\). 콤프턴 산란의 파장 변화 \\(\\lambda_C(1 - \\cos\\theta)\\)를 정한다.",
    "chapters": [
     "photons#xray-compton"
    ]
   },
   {
    "ko": "탄도 수송",
    "en": "ballistic transport",
    "abbr": "",
    "def": "전자가 산란 없이 소스에서 드레인까지 날아가는 수송. 채널 길이가 평균 자유 행로(실리콘 반전층 약 10–20 nm)에 가까워지면 나타난다.",
    "chapters": [
     "schrodinger#free-particle"
    ]
   },
   {
    "ko": "탈출 원뿔",
    "en": "escape cone",
    "abbr": "",
    "def": "광원 내부에서 나온 빛 중 전반사되지 않고 표면을 빠져나갈 수 있는 임계각 안쪽의 원뿔. 굴절률이 큰 LED에서는 매우 좁다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "터널 자기 저항",
    "en": "TMR",
    "abbr": "",
    "def": "자기 터널 접합에서 반평행과 평행 상태의 저항 비 \\(\\text{TMR} = (R_{AP} - R_P)/R_P\\)(TMR). MgO 장벽으로 상온 200% 이상을 얻는다.",
    "chapters": [
     "spin-atoms#inner"
    ]
   },
   {
    "ko": "터널링",
    "en": "tunneling",
    "abbr": "",
    "def": "입자가 고전적으로 넘을 수 없는 퍼텐셜 장벽을 파동함수의 꼬리로 통과하는 현상. 투과율은 장벽 두께에 지수적으로 줄어든다.",
    "chapters": [
     "tunneling"
    ]
   },
   {
    "ko": "터널링 결합",
    "en": "tunnel coupling",
    "abbr": "",
    "def": "장벽을 사이에 둔 두 우물의 상태가 터널링으로 섞이는 세기 \\(t\\). 준위가 \\(2t\\)만큼 갈라지고 장벽이 두꺼울수록 지수적으로 작아진다.",
    "chapters": [
     "molecular-bonding#double-well"
    ]
   },
   {
    "ko": "톰슨 모형",
    "en": "Thomson model, plum-pudding model",
    "abbr": "",
    "def": "양전하가 고르게 퍼진 구 속에 전자가 박혀 있다는 원자 모형(건포도 푸딩 모형). 러더퍼드 산란 실험으로 부정되었다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "특성 X선",
    "en": "characteristic X-ray",
    "abbr": "",
    "def": "안쪽 껍질 빈자리를 바깥 전자가 채우며 내는, 원소 고유의 날카로운 X선. 모즐리 법칙으로 원자 번호와 이어진다.",
    "chapters": [
     "atomic-spectra#xray"
    ]
   },
   {
    "ko": "파동함수",
    "en": "wave function",
    "abbr": "",
    "def": "입자의 양자 상태를 나타내는 복소수 값 함수 \\(\\psi\\). 절댓값 제곱이 확률 밀도다.",
    "chapters": [
     "matter-waves#double-slit"
    ]
   },
   {
    "ko": "파브리–페로 공진기",
    "en": "Fabry–Pérot resonator",
    "abbr": "",
    "def": "마주 보는 두 반사면 사이에서 파동이 왕복하며 특정 파장에서만 투과가 커지는 공진기. 이중 장벽 공명 터널링과 레이저 공진기가 같은 원리다.",
    "chapters": [
     "tunneling#transfer"
    ]
   },
   {
    "ko": "파셴–바크 효과",
    "en": "Paschen–Back effect",
    "abbr": "",
    "def": "자기장이 매우 강해 스핀–궤도 결합이 끊어지면서 비정상 제만 갈라짐이 다시 정상 제만 효과와 비슷한 세 줄로 돌아가는 현상.",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "파속",
    "en": "wave packet",
    "abbr": "",
    "def": "파수가 조금씩 다른 평면파를 겹쳐 한곳에 모이게 만든 파동 덩어리. 국소화된 입자를 나타내며 군속도로 움직인다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "파수",
    "en": "wavenumber",
    "abbr": "",
    "def": "분광학에서 쓰는 단위 길이당 파동 수 \\(\\tilde\\nu = 1/\\lambda\\)(cm⁻¹). 1 cm⁻¹은 0.124 meV에 해당한다.",
    "chapters": [
     "harmonic-oscillator#parabola"
    ]
   },
   {
    "ko": "파울러–노드하임(FN) 터널링",
    "en": "Fowler–Nordheim tunneling",
    "abbr": "",
    "def": "강한 전기장으로 장벽이 삼각형이 되어 전자가 얇아진 끝부분을 터널링하는 과정. 전류가 전기장에 대해 폭발적으로 늘며 플래시 메모리 쓰기·지우기에 쓴다.",
    "chapters": [
     "tunneling#fn"
    ]
   },
   {
    "ko": "파울리 배타 원리",
    "en": "Pauli exclusion principle",
    "abbr": "",
    "def": "두 전자가 같은 양자 상태(모든 양자수가 같은 상태)를 차지할 수 없다는 원리. 주기율표와 페르미–디랙 통계의 바탕이다.",
    "chapters": [
     "spin-atoms#identical"
    ]
   },
   {
    "ko": "페르미 에너지",
    "en": "Fermi energy",
    "abbr": "",
    "def": "0 K에서 전자가 채워진 가장 높은 에너지 \\(E_F = (\\hbar^2/2m)(3\\pi^2n)^{2/3}\\). 구리는 약 7.0 eV다.",
    "chapters": [
     "quantum-statistics#metals"
    ]
   },
   {
    "ko": "페르미 준위",
    "en": "Fermi level",
    "abbr": "",
    "def": "전자의 화학 퍼텐셜. 페르미–디랙 분포에서 차지 확률이 1/2인 에너지이며, 열평형에서는 소자 전체에서 일정하다.",
    "chapters": [
     "quantum-statistics#three-stats"
    ]
   },
   {
    "ko": "페르미–디랙 분포 함수",
    "en": "Fermi–Dirac distribution",
    "abbr": "",
    "def": "페르미온이 에너지 \\(E\\)인 상태를 차지할 확률 \\(f(E) = 1/(1 + e^{(E-E_F)/kT})\\).",
    "chapters": [
     "quantum-statistics#three-stats"
    ]
   },
   {
    "ko": "평면파",
    "en": "plane wave",
    "abbr": "",
    "def": "운동량이 정해진 자유 입자의 파동함수 \\(e^{i(kx-\\omega t)}\\). 위치는 전혀 정해지지 않는다.",
    "chapters": [
     "schrodinger#wave-eq"
    ]
   },
   {
    "ko": "포논",
    "en": "phonon",
    "abbr": "",
    "def": "격자 진동 모드의 에너지 양자 \\(\\hbar\\omega(k)\\). 보스–아인슈타인 통계를 따르며 전자 산란과 열전도를 맡는다.",
    "chapters": [
     "harmonic-oscillator#phonons"
    ]
   },
   {
    "ko": "포락 함수 근사",
    "en": "envelope function approximation",
    "abbr": "",
    "def": "띠 바닥 근처 결정 전자를 질량만 \\(m^*\\)로 바꾼 자유 입자로 보고, 원자보다 큰 규모로 변하는 퍼텐셜에 대해 슈뢰딩거 방정식을 푸는 근사.",
    "chapters": [
     "quantum-wells#hetero"
    ]
   },
   {
    "ko": "푸리에 합성",
    "en": "Fourier synthesis",
    "abbr": "",
    "def": "여러 파수의 평면파를 가중치 \\(A(k)\\)로 더해 원하는 모양의 파동함수를 만드는 것. \\(A(k)\\)는 \\(\\psi(x)\\)의 푸리에 변환이다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "플랑크 상수",
    "en": "Planck constant",
    "abbr": "",
    "def": "에너지 양자의 크기를 정하는 기본 상수 \\(h = 6.626\\times10^{-34}\\ \\text{J}\\cdot\\text{s}\\). 진동수 \\(f\\)인 빛의 에너지 양자는 \\(hf\\)다.",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "항 기호",
    "en": "term symbol",
    "abbr": "",
    "def": "다전자 원자 상태를 \\(n\\,{}^{2S+1}L_J\\)로 나타내는 기호. 스핀 다중도, 궤도 각운동량, 총 각운동량을 한 번에 보여 준다.",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "해리",
    "en": "dissociation",
    "abbr": "",
    "def": "분자가 결합이 끊어져 원자들로 갈라지는 것. 이에 필요한 에너지를 해리 에너지라 한다.",
    "chapters": [
     "harmonic-oscillator#molecules"
    ]
   },
   {
    "ko": "해밀토니언",
    "en": "Hamiltonian",
    "abbr": "",
    "def": "계의 전체 에너지(운동 + 퍼텐셜)에 해당하는 연산자 \\(\\hat H = -(\\hbar^2/2m)\\nabla^2 + V\\).",
    "chapters": [
     "schrodinger#wave-eq"
    ]
   },
   {
    "ko": "핵자기 공명",
    "en": "NMR",
    "abbr": "",
    "def": "자기장 속 원자핵 스핀 준위 사이를 라디오파로 전이시켜 흡수를 재는 분광법(NMR). MRI의 원리다.",
    "chapters": [
     "spin-atoms#inner"
    ]
   },
   {
    "ko": "허용 띠",
    "en": "allowed band",
    "abbr": "",
    "def": "주기 퍼텐셜 속에서 실수 파수 \\(k\\)를 가진 블로흐 파가 존재해 전자가 결정 전체에 퍼질 수 있는 에너지 구간.",
    "chapters": [
     "energy-bands#kronig-penney"
    ]
   },
   {
    "ko": "호핑 적분",
    "en": "hopping integral",
    "abbr": "",
    "def": "강결합 근사에서 이웃 원자 오비탈 사이를 전자가 건너뛰는 세기 \\(t\\). 띠 폭과 유효 질량을 정한다.",
    "chapters": [
     "energy-bands#gap"
    ]
   },
   {
    "ko": "혼성 오비탈",
    "en": "hybrid orbital",
    "abbr": "",
    "def": "한 원자의 s·p 오비탈을 섞어 특정 방향으로 길게 뻗게 만든 오비탈. 겹침이 커져 결합이 강해진다.",
    "chapters": [
     "molecular-bonding#hybrid"
    ]
   },
   {
    "ko": "홀 상태",
    "en": "odd state",
    "abbr": "",
    "def": "대칭인 퍼텐셜에서 \\(\\psi(-x) = -\\psi(x)\\)를 만족하는 고유 상태. 가운데에 마디가 있다.",
    "chapters": [
     "quantum-wells#finite"
    ]
   },
   {
    "ko": "화학 퍼텐셜",
    "en": "chemical potential",
    "abbr": "",
    "def": "입자 하나를 더할 때의 자유 에너지 변화 \\(\\mu\\). 분포 함수에서 전체 입자 수를 맞추는 상수이며, 전자에서는 페르미 준위라 부른다.",
    "chapters": [
     "quantum-statistics#three-stats"
    ]
   },
   {
    "ko": "확률 밀도",
    "en": "probability density",
    "abbr": "",
    "def": "단위 길이(부피)당 입자를 발견할 확률 \\(|\\Psi|^2\\). 1차원에서 단위는 1/길이다.",
    "chapters": [
     "schrodinger#born"
    ]
   },
   {
    "ko": "확률 흐름",
    "en": "probability current",
    "abbr": "",
    "def": "단위 시간에 한 점을 지나는 확률 \\(j = (\\hbar/m)\\,\\mathrm{Im}(\\psi^*\\psi')\\). 투과율과 반사율을 정의하는 데 쓴다.",
    "chapters": [
     "schrodinger#born"
    ]
   },
   {
    "ko": "확장 영역",
    "en": "extended zone",
    "abbr": "",
    "def": "\\(n\\)번째 띠를 \\(n\\)번째 브릴루앙 영역에 그려 자유 전자 포물선과 비교하기 쉽게 한 띠 구조 표시.",
    "chapters": [
     "energy-bands#kronig-penney"
    ]
   },
   {
    "ko": "환산 질량",
    "en": "reduced mass",
    "abbr": "",
    "def": "두 물체 문제를 한 물체 문제로 바꿀 때 쓰는 질량 \\(\\mu = m_1m_2/(m_1 + m_2)\\). 수소의 뤼드베리 상수와 분자 진동에 들어간다.",
    "chapters": [
     "atomic-spectra#bohr"
    ]
   },
   {
    "ko": "환원 영역",
    "en": "reduced zone",
    "abbr": "",
    "def": "모든 띠를 역격자 벡터만큼 옮겨 제1 브릴루앙 영역 안에 겹쳐 그린 띠 구조 표시. 반도체 띠 그림의 표준이다.",
    "chapters": [
     "energy-bands#kronig-penney"
    ]
   },
   {
    "ko": "후면 조사",
    "en": "BSI, backside illumination",
    "abbr": "",
    "def": "웨이퍼를 얇게 갈아 배선 반대쪽(뒷면)으로 빛을 넣는 이미지 센서 구조(BSI). 배선 가림이 없어 감도가 높다.",
    "chapters": [
     "light-matter#absorption"
    ]
   },
   {
    "ko": "흑체",
    "en": "blackbody",
    "abbr": "",
    "def": "들어오는 빛을 모두 흡수하는 이상적인 물체. 복사 스펙트럼이 온도만으로 정해지며 작은 구멍이 뚫린 공동이 좋은 근사다.",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "흡수",
    "en": "absorption",
    "abbr": "",
    "def": "아래 준위의 원자나 전자가 광자를 삼키고 위 준위로 올라가는 과정. 빈도는 \\(B_{12}\\)와 복사 에너지 밀도의 곱이다.",
    "chapters": [
     "light-matter#einstein"
    ]
   },
   {
    "ko": "흡수 계수",
    "en": "absorption coefficient",
    "abbr": "",
    "def": "빛의 세기가 \\(I = I_0e^{-\\alpha x}\\)로 줄어들 때의 \\(\\alpha\\)(cm⁻¹). 역수 \\(1/\\alpha\\)가 침투 깊이다.",
    "chapters": [
     "light-matter#absorption"
    ]
   },
   {
    "ko": "흡수선",
    "en": "absorption line",
    "abbr": "",
    "def": "연속 광원 앞의 차가운 기체가 특정 파장을 흡수해 스펙트럼에 생기는 어두운 선. 같은 기체의 방출선과 위치가 같다.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   }
  ]
 }
});
