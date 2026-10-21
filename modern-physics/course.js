/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "modern-physics",
 "title": "현대물리학",
 "en": "Modern Physics",
 "field": "physics",
 "level": "대학 2학년 · 반도체 기초",
 "status": "writing",
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
    "en": "",
    "abbr": "",
    "def": "들어온 전자가 가장 안쪽 K 껍질(n = 1) 전자를 쳐내면 빈자리가 생기고, L 껍질(n = 2) 전자가 떨어지며 Kα선, M 껍질(n = 3)에서 떨어지면 Kβ선을 낸다.",
    "chapters": [
     "atomic-spectra#xray"
    ]
   },
   {
    "ko": "LEED",
    "en": "low-energy electron diffraction",
    "abbr": "",
    "def": "LEED(low-energy electron diffraction)는 20–200 eV(λ = 0.27–0.087 nm) 전자를 쓰는데, 이 에너지의 전자는 몇 원자층만 들어가므로 Si(001) 표면의 2×1 재구성 같은 표면 구조만 골라 본다.",
    "chapters": [
     "matter-waves#diffraction"
    ]
   },
   {
    "ko": "RHEED",
    "en": "reflection high-energy electron diffraction",
    "abbr": "",
    "def": "MBE 장비에 붙은 RHEED(reflection high-energy electron diffraction)는 10–30 keV 전자를 표면에 1–3°로 스치듯 쏘아 성장 중에 실시간으로 본다.",
    "chapters": [
     "matter-waves#diffraction"
    ]
   },
   {
    "ko": "WKB 근사",
    "en": "Wentzel–Kramers–Brillouin approximation",
    "abbr": "",
    "def": "이것이 WKB 근사(Wentzel–Kramers–Brillouin approximation)다.",
    "chapters": [
     "tunneling#wkb"
    ]
   },
   {
    "ko": "g 인자",
    "en": "g-factor",
    "abbr": "",
    "def": "$$|\\vec S| = \\sqrt{s(s+1)}\\,\\hbar = \\frac{\\sqrt3}{2}\\hbar, \\qquad S_z = m_s\\hbar,\\ m_s = \\pm\\tfrac12, \\qquad \\vec\\mu_s = -g_s\\frac{e}{2m_e}\\vec S,\\quad \\mu_{s,z} = -g_s m_s\\mu_B \\approx \\mp\\mu_B$$\\(g_s = 2.0023\\): 전자 스핀의 g 인자(g-factor).…",
    "chapters": [
     "spin-atoms#spin"
    ]
   },
   {
    "ko": "sp³ 혼성 오비탈",
    "en": "sp³ hybrid",
    "abbr": "",
    "def": "결정 속에서 3s 하나와 3p 셋(\\(p_x, p_y, p_z\\))이 섞여 109.5° 간격의 sp³ 혼성 오비탈(sp³ hybrid) 네 개가 되고, 이웃 원자 넷과 결합 길이 0.235 nm의 공유 결합을 이룬다.",
    "chapters": [
     "hydrogen-atom#angular"
    ]
   },
   {
    "ko": "가모프 인자",
    "en": "Gamow factor",
    "abbr": "",
    "def": "쿨롱 장벽에 WKB를 적용하면 가모프 인자(Gamow factor)를 얻는다.",
    "chapters": [
     "tunneling#wkb"
    ]
   },
   {
    "ko": "가벼운 정공",
    "en": "light hole",
    "abbr": "",
    "def": "p 오비탈에서 나온 띠라서 곡률이 서로 다르다: 무거운 정공(heavy hole) \\(m_{hh} \\approx 0.49\\,m_e\\), 가벼운 정공(light hole) \\(m_{lh} \\approx 0.16\\,m_e\\), 그리고 0.044 eV 아래의 갈라진 띠(split-off). 정공 상태 밀도 질량은 \\(m_{dp} = (m_{hh}^{3/2} + m_{lh}^{3/2})^{2/3}\\)이다.",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "가시도",
    "en": "visibility",
    "abbr": "",
    "def": "경로 정보가 부분적이면 무늬의 가시도(visibility) \\(V = (P_\\text{max} - P_\\text{min})/(P_\\text{max} + P_\\text{min})\\)가 그만큼 줄어든다.",
    "chapters": [
     "matter-waves#double-slit"
    ]
   },
   {
    "ko": "가전자대",
    "en": "valence band",
    "abbr": "",
    "def": "결합 오비탈에서 온 띠가 가전자대(valence band), 반결합 오비탈에서 온 띠가 전도대(conduction band)다.",
    "chapters": [
     "molecular-bonding#bands"
    ]
   },
   {
    "ko": "간접 띠 간격",
    "en": "indirect band gap",
    "abbr": "",
    "def": "GaAs는 전도대 바닥과 가전자대 꼭대기가 모두 \\(\\Gamma\\)(\\(k = 0\\))에 있는 직접 띠 간격(direct band gap) 반도체이고, Si와 Ge는 둘의 \\(k\\)가 다른 간접 띠 간격(indirect band gap) 반도체다.",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "강결합 근사",
    "en": "tight-binding approximation",
    "abbr": "",
    "def": "원자 N개를 간격 일정하게 늘어놓고 각 원자가 이웃하고만 결합 \\(t\\)를 가진다고 하면(강결합 근사(tight-binding approximation)), 해밀토니안은 대각선에 \\(\\varepsilon\\), 바로 옆 대각선에 \\(-t\\)가 있는 N×N 행렬이다.",
    "chapters": [
     "molecular-bonding#bands"
    ]
   },
   {
    "ko": "거대 자기 저항",
    "en": "GMR, giant magnetoresistance",
    "abbr": "",
    "def": "이 거대 자기 저항(GMR, giant magnetoresistance)을 발견한 페르와 그륀베르크는 2007년 노벨상을 받았고, GMR 읽기 헤드는 1997년부터 하드디스크 용량을 폭발적으로 늘렸다.",
    "chapters": [
     "spin-atoms#spin"
    ]
   },
   {
    "ko": "거시 상태",
    "en": "macrostate",
    "abbr": "",
    "def": "동전 하나하나의 결과를 모두 적은 것이 미시 상태(microstate)이고, \"앞면 몇 개\"만 적은 것이 거시 상태(macrostate)다.",
    "chapters": [
     "quantum-statistics#boltzmann"
    ]
   },
   {
    "ko": "거의 자유 전자 모형",
    "en": "nearly free electron model",
    "abbr": "",
    "def": "퍼텐셜이 약할 때 \\(E_g\\)가 \\(|V_G|\\)에 정비례한다는 이 그림을 거의 자유 전자 모형(nearly free electron model)이라 한다.",
    "chapters": [
     "energy-bands#gap"
    ]
   },
   {
    "ko": "격자",
    "en": "lattice",
    "abbr": "",
    "def": "되풀이의 뼈대가 되는 점들의 집합을 격자(lattice), 각 격자점에 붙는 원자 묶음을 기저(basis)라 한다.",
    "chapters": [
     "energy-bands#crystal"
    ]
   },
   {
    "ko": "격자 상수",
    "en": "lattice constant",
    "abbr": "",
    "def": "단위 세포 한 변의 길이가 격자 상수(lattice constant) \\(a\\)다.",
    "chapters": [
     "energy-bands#crystal"
    ]
   },
   {
    "ko": "결맞는",
    "en": "coherent",
    "abbr": "",
    "def": "유도 방출은 광자를 복제하므로 레이저 빛은 공간적으로(빔 단면 전체가 같은 위상) 그리고 시간적으로(긴 파열이 끊기지 않음) 결맞는(coherent) 빛이다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "결맞음 길이",
    "en": "coherence length",
    "abbr": "",
    "def": "시간 결맞음은 선폭으로 정해진다: 결맞음 길이(coherence length) \\(l_c \\approx c/\\Delta\\nu = \\lambda^2/\\Delta\\lambda\\). 선폭 20 nm인 청색 LED는 \\(l_c \\approx (450)^2/20\\) nm ≈ 10 µm, 선폭 1 MHz인 단일 모드 레이저는 300 m다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "결맞음 상태",
    "en": "coherent state",
    "abbr": "",
    "def": "특별한 겹침인 결맞음 상태(coherent state)는 바닥 상태 가우스를 옆으로 \\(x_c\\)만큼 옮겨 놓은 것이다.",
    "chapters": [
     "harmonic-oscillator#coherent"
    ]
   },
   {
    "ko": "결정 운동량",
    "en": "crystal momentum",
    "abbr": "",
    "def": "\\(k\\)는 결정 운동량(crystal momentum) \\(\\hbar k\\)를 정하는 파수, \\(n\\)은 띠 번호다.",
    "chapters": [
     "energy-bands#bloch"
    ]
   },
   {
    "ko": "겹침",
    "en": "degeneracy",
    "abbr": "",
    "def": "에너지가 같은 상태가 두 개, 즉 겹침(degeneracy)이다.",
    "chapters": [
     "molecular-bonding#double-well"
    ]
   },
   {
    "ko": "겹침 적분",
    "en": "overlap integral",
    "abbr": "",
    "def": "\\(S\\): 겹침 적분(overlap integral), 0과 1 사이.",
    "chapters": [
     "molecular-bonding#lcao"
    ]
   },
   {
    "ko": "계곡",
    "en": "valley",
    "abbr": "",
    "def": "실리콘 전도대 바닥은 하나가 아니라 \\(\\langle100\\rangle\\) 방향의 여섯 계곡(valley)이다.",
    "chapters": [
     "quantum-wells#hetero"
    ]
   },
   {
    "ko": "계단 퍼텐셜",
    "en": "potential step",
    "abbr": "",
    "def": "가장 단순한 장애물은 높이 \\(V_0\\)의 계단 퍼텐셜(potential step)이다: \\(x\\lt 0\\)에서 \\(V=0\\), \\(x>0\\)에서 \\(V=V_0\\). 반도체에서는 GaAs/AlGaAs 같은 이종 접합의 전도대 어긋남이 바로 이런 계단이다.",
    "chapters": [
     "tunneling#step"
    ]
   },
   {
    "ko": "계열 한계",
    "en": "series limit",
    "abbr": "",
    "def": "발머 계열에서 \\(n_2\\)를 3, 4, 5, …로 계속 키우면 선들은 어떻게 늘어설까? 일정한 간격으로 끝없이 짧은 파장 쪽으로 간다간격이 점점 좁아지며 364.7 nm에 몰린다간격이 점점 넓어진다n₂ = 7부터는 선이 없다 \\(n_2 \\to \\infty\\)이면 \\(1/\\lambda \\to R_\\text{H}/4\\)이므로 \\(\\lambda \\to 4/R_\\text{H} = 364.7\\) nm. 이 계열…",
    "chapters": [
     "atomic-spectra#spectra"
    ]
   },
   {
    "ko": "고유 함수",
    "en": "eigenfunction",
    "abbr": "",
    "def": "시간 독립 슈뢰딩거 방정식 $$-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} + V(x)\\,\\psi = E\\,\\psi \\quad\\Longleftrightarrow\\quad \\hat H\\psi = E\\psi$$연산자를 걸었더니 자기 자신의 상수배가 나오는 함수를 고유 함수(eigenfunction), 그 상수 \\(E\\)를 에너지 고윳값(energy eigenvalue)이라 한다.",
    "chapters": [
     "schrodinger#stationary"
    ]
   },
   {
    "ko": "고전적 전환점",
    "en": "classical turning points",
    "abbr": "",
    "def": "$$T \\approx \\exp\\left(-2\\int_{x_1}^{x_2}\\kappa(x)\\,dx\\right), \\qquad \\kappa(x) = \\frac{\\sqrt{2m\\,[V(x)-E]}}{\\hbar}$$\\(x_1, x_2\\)는 \\(V(x) = E\\)인 고전적 전환점(classical turning points). 사각 장벽이면 \\(e^{-2\\kappa a}\\)로 돌아간다(앞인자 16…은 빠진다).…",
    "chapters": [
     "tunneling#wkb"
    ]
   },
   {
    "ko": "고전적 허용 영역",
    "en": "classically allowed region",
    "abbr": "",
    "def": "\\(E > V\\)인 고전적 허용 영역(classically allowed region)에서는 \\(\\psi''\\)이 \\(\\psi\\)와 반대 부호라 \\(\\psi\\)가 축 쪽으로 휘어 진동하고, \\(E < V\\)인 금지 영역(forbidden region)에서는 같은 부호라 축에서 멀어지며 지수적으로 커지거나 줄어든다.",
    "chapters": [
     "schrodinger#conditions"
    ]
   },
   {
    "ko": "공명 적분",
    "en": "resonance integral",
    "abbr": "",
    "def": "$$\\psi = c_A\\phi_A + c_B\\phi_B, \\qquad \\alpha_A = \\langle\\phi_A|H|\\phi_A\\rangle,\\quad \\beta = \\langle\\phi_A|H|\\phi_B\\rangle,\\quad S = \\langle\\phi_A|\\phi_B\\rangle$$\\(\\alpha\\): 온사이트 에너지(on-site energy) — 원자 하나에서의 준위(쿨롱 적분). \\(\\beta < 0\\):…",
    "chapters": [
     "molecular-bonding#lcao"
    ]
   },
   {
    "ko": "공명 터널 다이오드",
    "en": "resonant tunneling diode, RTD",
    "abbr": "",
    "def": "공명 터널 다이오드(resonant tunneling diode, RTD)는 이중 장벽 양쪽을 고농도로 도핑한 구조다.",
    "chapters": [
     "tunneling#transfer"
    ]
   },
   {
    "ko": "공유 결합",
    "en": "covalent bond",
    "abbr": "",
    "def": "\\(\\Delta \\approx 0\\)이고 \\(t\\)가 크면 전자가 두 원자 사이에 고르게 쌓이는 공유 결합(covalent bond), \\(|\\Delta| \\gg t\\)이면 전자가 한쪽으로 완전히 넘어가는 이온 결합(ionic bond)이다.",
    "chapters": [
     "molecular-bonding#bond-types"
    ]
   },
   {
    "ko": "광검출기",
    "en": "photodetector",
    "abbr": "",
    "def": "흡수로 만든 전자–정공 쌍을 전기장으로 갈라 모으면 광검출기(photodetector)다.",
    "chapters": [
     "light-matter#detector"
    ]
   },
   {
    "ko": "광자",
    "en": "photon",
    "abbr": "",
    "def": "빛 자체가 에너지 \\(hf\\)인 알갱이, 광자(photon)의 흐름이다.",
    "chapters": [
     "photons#photoelectric"
    ]
   },
   {
    "ko": "광자 샷 노이즈",
    "en": "photon shot noise",
    "abbr": "",
    "def": "이것이 광자 샷 노이즈(photon shot noise)다.",
    "chapters": [
     "photons#photon"
    ]
   },
   {
    "ko": "광전 효과",
    "en": "photoelectric effect",
    "abbr": "",
    "def": "이것이 광전 효과(photoelectric effect)이고, 튀어나온 전자를 광전자(photoelectron)라 한다.",
    "chapters": [
     "photons#photoelectric"
    ]
   },
   {
    "ko": "광전자",
    "en": "photoelectron",
    "abbr": "",
    "def": "이것이 광전 효과(photoelectric effect)이고, 튀어나온 전자를 광전자(photoelectron)라 한다.",
    "chapters": [
     "photons#photoelectric"
    ]
   },
   {
    "ko": "광학 발광 분광",
    "en": "optical emission spectroscopy, OES",
    "abbr": "",
    "def": "이것이 광학 발광 분광(optical emission spectroscopy, OES)이다.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   },
   {
    "ko": "구면 조화 함수",
    "en": "spherical harmonics",
    "abbr": "",
    "def": "\\(\\Theta\\)와 \\(\\Phi\\)를 합친 각도 부분을 구면 조화 함수(spherical harmonics) \\(Y_l^m(\\theta,\\phi) \\propto P_l^m(\\cos\\theta)\\,e^{im\\phi}\\)라 한다(\\(P_l^m\\)은 버금 르장드르 함수). 이 함수는 각운동량 연산자의 고유함수이기도 하다.",
    "chapters": [
     "hydrogen-atom#angular"
    ]
   },
   {
    "ko": "구면 좌표",
    "en": "spherical coordinates",
    "abbr": "",
    "def": "이런 대칭에는 직교 좌표 \\((x,y,z)\\)보다 구면 좌표(spherical coordinates) \\((r,\\theta,\\phi)\\)가 맞는다.",
    "chapters": [
     "hydrogen-atom#separation"
    ]
   },
   {
    "ko": "군속도",
    "en": "group velocity",
    "abbr": "",
    "def": "개별 마루가 움직이는 위상 속도(phase velocity)와 포락선 덩어리가 움직이는 군속도(group velocity)다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "궤도 양자수",
    "en": "orbital quantum number",
    "abbr": "",
    "def": "$$\\hat L^2\\,Y_l^m = l(l+1)\\hbar^2\\,Y_l^m, \\qquad \\hat L_z\\,Y_l^m = m\\hbar\\,Y_l^m, \\qquad l = 0, 1, 2, \\dots,\\quad m = -l, \\dots, +l$$\\(l\\): 궤도 양자수(orbital quantum number). 각운동량의 크기는 \\(|\\vec L| = \\sqrt{l(l+1)}\\,\\hbar\\)이고 \\(z\\) 성분은…",
    "chapters": [
     "hydrogen-atom#angular"
    ]
   },
   {
    "ko": "금속",
    "en": "metal",
    "abbr": "",
    "def": "페르미 준위가 띠 한가운데: 바로 위에 빈 상태가 무수히 있어, 아주 약한 전기장으로도 전자 분포가 \\(k\\) 공간에서 한쪽으로 쏠린다 → 전류 → 금속(metal). 셀당 전자 수가 홀수이면 반드시 이렇다.",
    "chapters": [
     "energy-bands#filling"
    ]
   },
   {
    "ko": "금속 결합",
    "en": "metallic bond",
    "abbr": "",
    "def": "고체에서는 여기에 금속 결합(metallic bond)과 반데르발스 결합(van der Waals bond)이 더해진다.",
    "chapters": [
     "molecular-bonding#bond-types"
    ]
   },
   {
    "ko": "금속–절연체 전이",
    "en": "metal–insulator transition",
    "abbr": "",
    "def": "모트(Mott)의 판정 기준은 $$n_c^{1/3}\\,a_B^* \\approx 0.26$$이 농도 위에서는 절대 0도에서도 전도가 남는다: 금속–절연체 전이(metal–insulator transition). 실리콘 속 P의 실측 \\(n_c = 3.7\\times10^{18}\\) cm⁻³이다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "금지 영역",
    "en": "forbidden region",
    "abbr": "",
    "def": "\\(E > V\\)인 고전적 허용 영역(classically allowed region)에서는 \\(\\psi''\\)이 \\(\\psi\\)와 반대 부호라 \\(\\psi\\)가 축 쪽으로 휘어 진동하고, \\(E < V\\)인 금지 영역(forbidden region)에서는 같은 부호라 축에서 멀어지며 지수적으로 커지거나 줄어든다.",
    "chapters": [
     "schrodinger#conditions"
    ]
   },
   {
    "ko": "기댓값",
    "en": "expectation value",
    "abbr": "",
    "def": "그 평균이 기댓값(expectation value)이다.",
    "chapters": [
     "schrodinger#operators"
    ]
   },
   {
    "ko": "기본 단위 세포",
    "en": "primitive cell",
    "abbr": "",
    "def": "결정 전체를 빈틈없이 채우며 반복되는 가장 작은 덩어리가 기본 단위 세포(primitive cell)이고, 대칭을 보기 쉽게 고른 더 큰 덩어리가 관습적 단위 세포(unit cell)다.",
    "chapters": [
     "energy-bands#crystal"
    ]
   },
   {
    "ko": "기울기 효율",
    "en": "slope efficiency",
    "abbr": "",
    "def": "반도체 레이저에서 그 기울기(기울기 효율(slope efficiency))는.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "기저",
    "en": "basis",
    "abbr": "",
    "def": "되풀이의 뼈대가 되는 점들의 집합을 격자(lattice), 각 격자점에 붙는 원자 묶음을 기저(basis)라 한다.",
    "chapters": [
     "energy-bands#crystal"
    ]
   },
   {
    "ko": "내부 광방출",
    "en": "internal photoemission",
    "abbr": "",
    "def": "MOS 커패시터에 빛을 비추면 전극의 전자가 광자를 흡수해 SiO₂ 전도대로 넘어가는 내부 광방출(internal photoemission)이 일어난다.",
    "chapters": [
     "photons#photoelectric"
    ]
   },
   {
    "ko": "다이아몬드 구조",
    "en": "diamond structure",
    "abbr": "",
    "def": "실리콘 결정에서 각 원자는 sp³ 혼성 넷으로 이웃 넷과 결합해 다이아몬드 구조(diamond structure)를 이룬다.",
    "chapters": [
     "molecular-bonding#hybrid"
    ]
   },
   {
    "ko": "단면적",
    "en": "cross section",
    "abbr": "",
    "def": "이 넓이를 단면적(cross section)이라 한다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "단위 세포",
    "en": "unit cell",
    "abbr": "",
    "def": "결정 전체를 빈틈없이 채우며 반복되는 가장 작은 덩어리가 기본 단위 세포(primitive cell)이고, 대칭을 보기 쉽게 고른 더 큰 덩어리가 관습적 단위 세포(unit cell)다.",
    "chapters": [
     "energy-bands#crystal"
    ]
   },
   {
    "ko": "대응 원리",
    "en": "correspondence principle",
    "abbr": "",
    "def": "② n을 20까지 올리면 양자 확률이 고전값 (b − a)/L에 다가간다(대응 원리(correspondence principle)). ③ 같은 폭에서 GaAs 전자의 에너지가 자유 전자의 약 15배임을 확인하라.",
    "chapters": [
     "quantum-wells#infinite"
    ]
   },
   {
    "ko": "대칭",
    "en": "symmetric",
    "abbr": "",
    "def": "$$|\\psi(x_2, x_1)|^2 = |\\psi(x_1, x_2)|^2 \\ \\Rightarrow\\ \\psi(x_2, x_1) = \\pm\\,\\psi(x_1, x_2)$$\\(+\\): 대칭(symmetric), \\(-\\): 반대칭(antisymmetric). 자연은 입자 종류마다 둘 중 하나를 고른다.",
    "chapters": [
     "spin-atoms#identical"
    ]
   },
   {
    "ko": "도플러 넓어짐",
    "en": "Doppler broadening",
    "abbr": "",
    "def": "실제 기체에서는 자연 선폭보다 훨씬 넓은 도플러 넓어짐(Doppler broadening)이 지배한다.",
    "chapters": [
     "light-matter#lifetime"
    ]
   },
   {
    "ko": "독립 전자 근사",
    "en": "independent-electron approximation",
    "abbr": "",
    "def": "가장 쓸모 있는 근사는 독립 전자 근사(independent-electron approximation)다.",
    "chapters": [
     "spin-atoms#periodic"
    ]
   },
   {
    "ko": "듀안–헌트 법칙",
    "en": "Duane–Hunt law",
    "abbr": "",
    "def": "제동 복사의 가장 짧은 파장은 전자 하나의 운동 에너지 전부가 광자 하나가 될 때다(듀안–헌트 법칙(Duane–Hunt law)).",
    "chapters": [
     "atomic-spectra#xray"
    ]
   },
   {
    "ko": "듀안–헌트 한계",
    "en": "Duane–Hunt limit",
    "abbr": "",
    "def": "이것이 듀안–헌트 한계(Duane–Hunt limit)이고, 표적 재질과 무관하다.",
    "chapters": [
     "photons#xray-compton"
    ]
   },
   {
    "ko": "드브로이 파",
    "en": "de Broglie wave",
    "abbr": "",
    "def": "이것이 물질파(matter wave), 또는 드브로이 파(de Broglie wave)다.",
    "chapters": [
     "matter-waves#debroglie"
    ]
   },
   {
    "ko": "등가 산화막 두께",
    "en": "equivalent oxide thickness, EOT",
    "abbr": "",
    "def": "이때 쓰는 잣대가 등가 산화막 두께(equivalent oxide thickness, EOT)다.",
    "chapters": [
     "tunneling#oxide"
    ]
   },
   {
    "ko": "띠 간격",
    "en": "band gap",
    "abbr": "",
    "def": "무한 결정에서는 그런 상태가 있을 수 없으므로 그 에너지 구간은 띠 간격(band gap), 금지 띠다.",
    "chapters": [
     "energy-bands#kronig-penney"
    ]
   },
   {
    "ko": "띠 오프셋",
    "en": "band offset",
    "abbr": "",
    "def": "이 나뉨이 띠 오프셋(band offset)이다.",
    "chapters": [
     "quantum-wells#hetero"
    ]
   },
   {
    "ko": "라모어 세차 운동",
    "en": "Larmor precession",
    "abbr": "",
    "def": "$$E = E_0 + m_l\\,\\mu_B B, \\qquad m_l = -l, \\dots, +l$$고전적으로는 토크 \\(\\vec\\tau = \\vec\\mu\\times\\vec B\\) 때문에 \\(\\vec L\\)이 \\(\\vec B\\) 둘레로 라모어 세차 운동(Larmor precession)을 하고, 그 진동수 \\(\\nu_L = \\mu_B B/h = 14.0\\ \\text{GHz/T}\\)가 바로 준위 간격 \\(\\mu_B B\\)를…",
    "chapters": [
     "spin-atoms#zeeman"
    ]
   },
   {
    "ko": "란데 g 인자",
    "en": "Landé g-factor",
    "abbr": "",
    "def": "약한 자기장에서는 \\(\\vec J\\) 방향 성분만 효과가 있고, 에너지 이동은 란데 g 인자(Landé g-factor) \\(g_J\\)로 쓴다.",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "로런츠 선 모양",
    "en": "Lorentzian line shape",
    "abbr": "",
    "def": "지수적으로 줄어드는 진동 \\(e^{-t/2\\tau}\\cos 2\\pi\\nu_0 t\\)를 푸리에 분해하면 한 진동수가 아니라 폭이 있는 로런츠 선 모양(Lorentzian line shape)이 나온다.",
    "chapters": [
     "light-matter#lifetime"
    ]
   },
   {
    "ko": "뤼드베리 상수",
    "en": "Rydberg constant",
    "abbr": "",
    "def": "$$\\frac{1}{\\lambda} = R_\\text{H}\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\qquad n_2 > n_1, \\qquad R_\\text{H} = 1.09678\\times10^{7}\\ \\text{m}^{-1}$$\\(R_\\text{H}\\): 수소의 뤼드베리 상수(Rydberg constant). \\(n_1 = 1\\) 라이먼(자외선), \\(2\\)…",
    "chapters": [
     "atomic-spectra#spectra"
    ]
   },
   {
    "ko": "모스 퍼텐셜",
    "en": "Morse potential",
    "abbr": "",
    "def": "모스 퍼텐셜(Morse potential)은 이를 잘 흉내 내면서 정확히 풀린다.",
    "chapters": [
     "harmonic-oscillator#molecules"
    ]
   },
   {
    "ko": "무거운 정공",
    "en": "heavy hole",
    "abbr": "",
    "def": "p 오비탈에서 나온 띠라서 곡률이 서로 다르다: 무거운 정공(heavy hole) \\(m_{hh} \\approx 0.49\\,m_e\\), 가벼운 정공(light hole) \\(m_{lh} \\approx 0.16\\,m_e\\), 그리고 0.044 eV 아래의 갈라진 띠(split-off). 정공 상태 밀도 질량은 \\(m_{dp} = (m_{hh}^{3/2} + m_{lh}^{3/2})^{2/3}\\)이다.",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "무한 사각 우물",
    "en": "infinite square well",
    "abbr": "",
    "def": "이것을 무한 사각 우물(infinite square well)이라 부른다.",
    "chapters": [
     "quantum-wells#infinite"
    ]
   },
   {
    "ko": "문턱 조건",
    "en": "threshold condition",
    "abbr": "",
    "def": "따라서 발진의 문턱 조건(threshold condition)은.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "물질파",
    "en": "matter wave",
    "abbr": "",
    "def": "이것이 물질파(matter wave), 또는 드브로이 파(de Broglie wave)다.",
    "chapters": [
     "matter-waves#debroglie"
    ]
   },
   {
    "ko": "미분 단면적",
    "en": "differential cross section",
    "abbr": "",
    "def": "\\(b(\\theta)\\)를 미분해 입체각 \\(d\\Omega = 2\\pi\\sin\\theta\\,d\\theta\\)로 나누면 러더퍼드의 미분 단면적(differential cross section)이 나온다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "미세 구조",
    "en": "fine structure",
    "abbr": "",
    "def": "수소의 2p 준위에서 이 갈라짐은 \\(4.5\\times10^{-5}\\) eV(10.9 GHz)로, 보어 준위의 \\(\\alpha^2\\approx 5\\times10^{-5}\\)배 크기다(\\(\\alpha = 1/137\\): 미세 구조 상수). 그래서 이름이 미세 구조(fine structure)다.",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "미시 상태",
    "en": "microstate",
    "abbr": "",
    "def": "동전 하나하나의 결과를 모두 적은 것이 미시 상태(microstate)이고, \"앞면 몇 개\"만 적은 것이 거시 상태(macrostate)다.",
    "chapters": [
     "quantum-statistics#boltzmann"
    ]
   },
   {
    "ko": "밀도 기울기 모형",
    "en": "density-gradient model",
    "abbr": "",
    "def": "그래서 TCAD는 슈뢰딩거–푸아송 방정식을 자기 일관적으로 풀거나(슈팅법·유한 차분 고윳값 풀이가 그 안에 들어간다), 계산을 줄이려고 밀도 기울기 모형(density-gradient model)으로 양자 보정을 넣는다.",
    "chapters": [
     "schrodinger#conditions"
    ]
   },
   {
    "ko": "밀도 반전",
    "en": "population inversion",
    "abbr": "",
    "def": "빛이 증폭되려면 \\(N_2 > N_1\\), 즉 밀도 반전(population inversion)이 필요하다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "바닥 상태",
    "en": "ground state",
    "abbr": "",
    "def": "\\(n=1\\)인 바닥 상태(ground state) 에너지의 크기 13.6 eV가 수소의 이온화 에너지(ionization energy)다.",
    "chapters": [
     "atomic-spectra#bohr"
    ]
   },
   {
    "ko": "반대칭",
    "en": "antisymmetric",
    "abbr": "",
    "def": "$$|\\psi(x_2, x_1)|^2 = |\\psi(x_1, x_2)|^2 \\ \\Rightarrow\\ \\psi(x_2, x_1) = \\pm\\,\\psi(x_1, x_2)$$\\(+\\): 대칭(symmetric), \\(-\\): 반대칭(antisymmetric). 자연은 입자 종류마다 둘 중 하나를 고른다.",
    "chapters": [
     "spin-atoms#identical"
    ]
   },
   {
    "ko": "반데르발스 결합",
    "en": "van der Waals bond",
    "abbr": "",
    "def": "고체에서는 여기에 금속 결합(metallic bond)과 반데르발스 결합(van der Waals bond)이 더해진다.",
    "chapters": [
     "molecular-bonding#bond-types"
    ]
   },
   {
    "ko": "반도체",
    "en": "semiconductor",
    "abbr": "",
    "def": "띠가 꽉 차고 위 띠와 사이에 간격: 꽉 찬 띠는 \\(+k\\)와 \\(-k\\) 상태가 짝지어 모두 차 있어 전류를 나르지 못한다(뒤의 정공 절). 간격이 작으면(대략 \\(E_g \\lesssim 3\\)–4 eV) 상온에서 일부 전자가 열로 올라가는 반도체(semiconductor), 크면 절연체(insulator).",
    "chapters": [
     "energy-bands#filling"
    ]
   },
   {
    "ko": "반전층",
    "en": "inversion layer",
    "abbr": "",
    "def": "MOSFET 게이트에 문턱 이상의 전압을 걸면 산화막 아래 실리콘 표면에 전자가 모인다(반전층(inversion layer)). 이때 전도대는 계면에서 아래로 휘고, 전자는 한쪽은 산화막 장벽(3.1 eV), 다른 쪽은 휘어 오르는 전도대로 막힌 좁은 우물에 갇힌다.",
    "chapters": [
     "quantum-wells#triangular"
    ]
   },
   {
    "ko": "발광 다이오드",
    "en": "LED, light-emitting diode",
    "abbr": "",
    "def": "발광 다이오드(LED, light-emitting diode)는 pn 접합에 순방향 전류를 흘려 전자와 정공을 활성층에서 만나게 한다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "방출선",
    "en": "emission line",
    "abbr": "",
    "def": "뜨겁고 조밀한 물체는 연속 스펙트럼, 뜨겁고 묽은 기체는 밝은 방출선(emission line), 연속 광원 앞의 차가운 기체는 같은 자리에 어두운 흡수선(absorption line)을 만든다.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   },
   {
    "ko": "버나드–듀라포그 조건",
    "en": "Bernard–Duraffourg condition",
    "abbr": "",
    "def": "반도체의 밀도 반전 조건은 전자의 준페르미 준위와 정공의 준페르미 준위 차가 광자 에너지보다 큰 것이다(버나드–듀라포그 조건(Bernard–Duraffourg condition): \\(E_{Fn} - E_{Fp} > h\\nu > E_g\\)). 초기의 단순 pn 접합(동종 접합) 레이저는 캐리어가 수 µm로 퍼져 나가 상온에서 발진하지 못했다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "벡터 모형",
    "en": "vector model",
    "abbr": "",
    "def": "이것이 벡터 모형(vector model)이다.",
    "chapters": [
     "hydrogen-atom#angular"
    ]
   },
   {
    "ko": "변수 분리",
    "en": "separation of variables",
    "abbr": "",
    "def": "변의 길이가 \\(a, b, c\\)인 3차원 상자에서는 퍼텐셜이 \\(x, y, z\\)로 나뉘므로 변수 분리(separation of variables) \\(\\psi = X(x)Y(y)Z(z)\\)가 된다.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "보른 해석",
    "en": "Born interpretation",
    "abbr": "",
    "def": "전자의 상태를 복소수 값의 파동함수(wave function) \\(\\psi\\)로 나타내고, 어떤 위치에서 전자가 검출될 확률은 \\(|\\psi|^2\\)에 비례한다(보른 해석(Born interpretation), 4장). 슬릿 1을 지나는 진폭을 \\(\\psi_1\\), 슬릿 2를 지나는 진폭을 \\(\\psi_2\\)라 하면, 두 길이 모두 열려 있고 어느 길인지 알 수 없을 때는 진폭이 더해진다.",
    "chapters": [
     "matter-waves#double-slit"
    ]
   },
   {
    "ko": "보스–아인슈타인 분포",
    "en": "Bose–Einstein distribution",
    "abbr": "",
    "def": "들뜬 진동자 준위의 볼츠만 무게를 모두 더하면 나오는 결과로, 10장에서 보스–아인슈타인 분포(Bose–Einstein distribution)의 특수한 경우(화학 퍼텐셜 0)임을 보게 된다.",
    "chapters": [
     "harmonic-oscillator#phonons"
    ]
   },
   {
    "ko": "보어 마그네톤",
    "en": "Bohr magneton",
    "abbr": "",
    "def": "$$\\vec\\mu = -\\frac{e}{2m_e}\\vec L, \\qquad \\mu_z = -m\\,\\mu_B, \\qquad \\mu_B = \\frac{e\\hbar}{2m_e} = 9.274\\times10^{-24}\\ \\text{J/T} = 5.788\\times10^{-5}\\ \\text{eV/T}$$\\(\\mu_B\\): 보어 마그네톤(Bohr magneton), 원자 자성의 자연 단위. 자기장 \\(B\\) 속에서 에너지는…",
    "chapters": [
     "hydrogen-atom#transitions"
    ]
   },
   {
    "ko": "복사 재결합",
    "en": "radiative recombination",
    "abbr": "",
    "def": "흡수의 반대 과정이 복사 재결합(radiative recombination)이다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "볼츠만 분포",
    "en": "Boltzmann distribution",
    "abbr": "",
    "def": "열평형에서 준위 \\(E_2\\)와 \\(E_1\\)에 있는 원자 수의 비는 볼츠만 분포(Boltzmann distribution)를 따른다.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   },
   {
    "ko": "부성 미분 저항",
    "en": "negative differential resistance, NDR",
    "abbr": "",
    "def": "③의 구간에서는 전압을 올릴수록 전류가 줄어드는 부성 미분 저항(negative differential resistance, NDR)이 나타난다.",
    "chapters": [
     "tunneling#transfer"
    ]
   },
   {
    "ko": "분배 함수",
    "en": "partition function",
    "abbr": "",
    "def": "\\(Z = \\sum_i g_i e^{-E_i/k_BT}\\)는 분배 함수(partition function)다.",
    "chapters": [
     "quantum-statistics#boltzmann"
    ]
   },
   {
    "ko": "분산",
    "en": "",
    "abbr": "",
    "def": "$$v_p = \\frac{\\omega}{k}, \\qquad v_g = \\frac{d\\omega}{dk}\\bigg|_{k_0}$$\\(\\omega(k)\\)를 분산 관계(dispersion relation)라 한다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "분산 관계",
    "en": "dispersion relation",
    "abbr": "",
    "def": "$$v_p = \\frac{\\omega}{k}, \\qquad v_g = \\frac{d\\omega}{dk}\\bigg|_{k_0}$$\\(\\omega(k)\\)를 분산 관계(dispersion relation)라 한다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "불확정성 원리",
    "en": "uncertainty principle",
    "abbr": "",
    "def": "1927년 하이젠베르크가 제시한 불확정성 원리(uncertainty principle)다.",
    "chapters": [
     "matter-waves#uncertainty"
    ]
   },
   {
    "ko": "브래그 조건",
    "en": "Bragg condition",
    "abbr": "",
    "def": "이것이 브래그 조건(Bragg condition)이며, X선·전자·중성자 회절에 똑같이 쓴다.",
    "chapters": [
     "matter-waves#diffraction"
    ]
   },
   {
    "ko": "브루스 식",
    "en": "Brus equation",
    "abbr": "",
    "def": "브루스가 쿨롱 인력까지 넣어 얻은 근사식은 $$E \\approx E_g + \\frac{\\pi^2\\hbar^2}{2R^2}\\left(\\frac{1}{m_e^*} + \\frac{1}{m_h^*}\\right) - 1.786\\,\\frac{e^2}{4\\pi\\varepsilon_0\\varepsilon_r R}$$브루스 식(Brus equation). CdSe: \\(E_g = 1.74\\) eV, \\(m_e^* = 0.13\\),…",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "브릴루앙 영역",
    "en": "Brillouin zone",
    "abbr": "",
    "def": "\\(k\\)와 \\(k + 2\\pi/a\\)는 원자 위치에서 똑같은 운동이므로 첫 브릴루앙 영역(Brillouin zone)만 보면 된다(12장).",
    "chapters": [
     "harmonic-oscillator#phonons"
    ]
   },
   {
    "ko": "블로흐 진동",
    "en": "Bloch oscillation",
    "abbr": "",
    "def": "이 블로흐 진동(Bloch oscillation)은 1992년 반도체 초격자에서 처음 관측되었다.",
    "chapters": [
     "energy-bands#dynamics"
    ]
   },
   {
    "ko": "블로흐 함수",
    "en": "Bloch function",
    "abbr": "",
    "def": "블로흐 함수(Bloch function)는 자유 전자의 평면파 \\(e^{ikx}\\)에 격자와 같은 주기로 출렁이는 함수 \\(u_k\\)를 곱한 것이다.",
    "chapters": [
     "energy-bands#bloch"
    ]
   },
   {
    "ko": "비복사 전이",
    "en": "nonradiative transition",
    "abbr": "",
    "def": "$$N_2(t) = N_2(0)\\,e^{-t/\\tau}, \\qquad \\tau = \\frac{1}{A_{21}}, \\qquad \\frac{1}{\\tau} = \\frac{1}{\\tau_r} + \\frac{1}{\\tau_{nr}}$$빛을 내지 않고 열(포논)로 에너지를 잃는 비복사 전이(nonradiative transition)가 있으면 두 빈도가 더해진다.",
    "chapters": [
     "light-matter#lifetime"
    ]
   },
   {
    "ko": "비조화성",
    "en": "anharmonicity",
    "abbr": "",
    "def": "$$V(r) = D_e\\left(1 - e^{-a(r-r_e)}\\right)^2, \\qquad k = 2D_ea^2, \\qquad E_n = \\hbar\\omega\\left(n+\\tfrac12\\right) - \\frac{[\\hbar\\omega(n+\\frac12)]^2}{4D_e}$$둘째 항이 비조화성(anharmonicity)이다.",
    "chapters": [
     "harmonic-oscillator#molecules"
    ]
   },
   {
    "ko": "비축퇴",
    "en": "nondegenerate",
    "abbr": "",
    "def": "이것이 비축퇴(nondegenerate) 반도체의 표준 결과다.",
    "chapters": [
     "quantum-statistics#carriers"
    ]
   },
   {
    "ko": "빈 변위 법칙",
    "en": "Wien's displacement law",
    "abbr": "",
    "def": "$$\\lambda_\\text{max}T = b = 2.898\\times10^{-3}\\ \\text{m·K}, \\qquad M = \\int_0^\\infty M_\\lambda\\,d\\lambda = \\sigma T^4$$왼쪽은 빈 변위 법칙(Wien's displacement law): 온도가 높을수록 봉우리가 짧은 파장으로 옮겨 간다.",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "사각 장벽",
    "en": "rectangular barrier",
    "abbr": "",
    "def": "이제 폭 \\(a\\), 높이 \\(V_0\\)의 사각 장벽(rectangular barrier)을 생각한다.",
    "chapters": [
     "tunneling#barrier"
    ]
   },
   {
    "ko": "삼각 우물",
    "en": "triangular well",
    "abbr": "",
    "def": "계면 근처의 전도대는 거의 직선이므로 \\(V(z) = qFz\\) (\\(z > 0\\)), \\(z < 0\\)은 무한 벽인 삼각 우물(triangular well)로 근사할 수 있다.",
    "chapters": [
     "quantum-wells#triangular"
    ]
   },
   {
    "ko": "상태 밀도",
    "en": "density of states",
    "abbr": "",
    "def": "단위 부피·단위 에너지당 상태 수를 상태 밀도(density of states) \\(g(E)\\)라 한다.",
    "chapters": [
     "quantum-statistics#dos"
    ]
   },
   {
    "ko": "상태 밀도 유효 질량",
    "en": "density-of-states effective mass",
    "abbr": "",
    "def": "상태 밀도(10장의 \\(N_c\\))에는 계곡 수까지 넣은 상태 밀도 유효 질량(density-of-states effective mass), 전류(이동도)에는 세 방향 \\(1/m\\)의 평균인 전도도 유효 질량(conductivity effective mass)을 쓴다.",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "선 스펙트럼",
    "en": "line spectrum",
    "abbr": "",
    "def": "반면 낮은 압력의 기체에 방전을 일으키면 몇 개의 날카로운 파장만 나오는 선 스펙트럼(line spectrum)이 보인다.",
    "chapters": [
     "atomic-spectra#spectra"
    ]
   },
   {
    "ko": "선택 규칙",
    "en": "selection rule",
    "abbr": "",
    "def": "이것이 선택 규칙(selection rule) \\(\\Delta n = \\pm1\\)이다.",
    "chapters": [
     "harmonic-oscillator#molecules"
    ]
   },
   {
    "ko": "수명",
    "en": "lifetime",
    "abbr": "",
    "def": "해는 지수 감소이고, 위 준위의 평균 머무름 시간을 수명(lifetime)이라 한다.",
    "chapters": [
     "light-matter#lifetime"
    ]
   },
   {
    "ko": "수소 꼴 원자",
    "en": "hydrogen-like atom",
    "abbr": "",
    "def": "핵 전하가 \\(Ze\\)이고 전자가 하나뿐인 이온(He⁺, Li²⁺, …)을 수소 꼴 원자(hydrogen-like atom)라 한다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "수소 꼴 이온",
    "en": "hydrogen-like ion",
    "abbr": "",
    "def": "$$E_n = -\\frac{\\mu}{m_e}\\frac{13.6057\\ \\text{eV}\\cdot Z^2}{n^2}, \\qquad R_M = \\frac{R_\\infty}{1 + m_e/M}$$수소는 \\(\\mu/m_e = 0.999456\\), 그래서 \\(R_\\text{H} = 1.09678\\times10^7\\ \\text{m}^{-1}\\). 전자 하나만 남은 He⁺(Z = 2), Li²⁺(Z = 3) 같은 수소 꼴…",
    "chapters": [
     "atomic-spectra#bohr"
    ]
   },
   {
    "ko": "수직 공진 표면 방출 레이저",
    "en": "VCSEL",
    "abbr": "",
    "def": "공진기를 기판에 수직으로 세우고 위아래에 분산 브래그 반사경(DBR, 반사율 99% 이상)을 둔 것이 수직 공진 표면 방출 레이저(VCSEL)다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "슈테판–볼츠만 법칙",
    "en": "Stefan–Boltzmann law",
    "abbr": "",
    "def": "오른쪽은 슈테판–볼츠만 법칙(Stefan–Boltzmann law), \\(\\sigma = 5.670\\times10^{-8}\\) W/(m²·K⁴). 실제 물체는 방사율 \\(\\varepsilon\\)(0–1)을 곱해 \\(M = \\varepsilon\\sigma T^4\\).",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "슈팅법",
    "en": "shooting method",
    "abbr": "",
    "def": "이것이 슈팅법(shooting method)이고, 에너지 양자화의 가장 직관적인 설명이다.",
    "chapters": [
     "schrodinger#conditions"
    ]
   },
   {
    "ko": "스핀",
    "en": "spin",
    "abbr": "",
    "def": "1925년 하우드스미트와 윌렌벡은 전자가 고유한 각운동량 스핀(spin)을 가진다고 제안했다.",
    "chapters": [
     "spin-atoms#spin"
    ]
   },
   {
    "ko": "스핀 전달 토크",
    "en": "STT",
    "abbr": "",
    "def": "고정층을 지나며 스핀이 한쪽으로 정렬된 전류가 자유층에 들어가면 스핀 각운동량을 넘겨주며 자화를 돌린다(스핀 전달 토크(STT)). 수직 자화 CoFeB/MgO MTJ(지름 수십 nm, 장벽 약 1 nm)는 열 안정성 \\(\\Delta = E_b/k_BT \\gtrsim 60\\)으로 10년 보존을 지키며, 28 nm 이하 로직 공정의 BEOL에 내장 메모리(eMRAM)로 들어가 eFlash를 대체하고 있다.",
    "chapters": [
     "spin-atoms#inner"
    ]
   },
   {
    "ko": "스핀–궤도 결합",
    "en": "spin–orbit coupling",
    "abbr": "",
    "def": "이것이 스핀–궤도 결합(spin–orbit coupling)이다.",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "스핀–통계 정리",
    "en": "spin–statistics theorem",
    "abbr": "",
    "def": "스핀과 대칭의 이 연결을 스핀–통계 정리(spin–statistics theorem)라 한다(파울리, 1940, 상대론적 양자장론의 결과). 전자에 대한 결론이 파울리 배타 원리(Pauli exclusion principle)다.",
    "chapters": [
     "spin-atoms#identical"
    ]
   },
   {
    "ko": "슬레이터 행렬식",
    "en": "Slater determinant",
    "abbr": "",
    "def": "전자 \\(N\\)개의 반대칭 파동함수는 슬레이터 행렬식(Slater determinant)으로 쓴다.",
    "chapters": [
     "spin-atoms#identical"
    ]
   },
   {
    "ko": "실수 오비탈",
    "en": "real orbitals",
    "abbr": "",
    "def": "화학과 반도체에서 쓰는 \\(p_x, p_y, d_{xy}\\) 같은 모양은 \\(+m\\)과 \\(-m\\) 상태를 더하고 빼서 만든 실수 오비탈(real orbitals)이다.",
    "chapters": [
     "hydrogen-atom#angular"
    ]
   },
   {
    "ko": "쌍생성",
    "en": "pair production",
    "abbr": "",
    "def": "이를 쌍생성(pair production)이라 한다.",
    "chapters": [
     "photons#pair"
    ]
   },
   {
    "ko": "쌓음 원리",
    "en": "aufbau principle",
    "abbr": "",
    "def": "바닥 상태의 전자 배치는 에너지가 낮은 오비탈부터 파울리 원리에 따라 채운다(쌓음 원리(aufbau principle)). 버금껍질 \\(l\\)에는 \\(2(2l+1)\\)개(s 2, p 6, d 10, f 14), 껍질 \\(n\\)에는 \\(2n^2\\)개가 들어간다.",
    "chapters": [
     "spin-atoms#periodic"
    ]
   },
   {
    "ko": "아레니우스 법칙",
    "en": "Arrhenius law",
    "abbr": "",
    "def": "플래시 메모리의 전하 손실이나 소자 열화처럼 활성화 에너지 \\(E_a\\)를 넘어야 일어나는 과정의 속도는 볼츠만 인자 \\(e^{-E_a/kT}\\)에 비례한다(아레니우스 법칙(Arrhenius law)). 그래서 높은 온도에서 시험하면 시간을 압축할 수 있다.",
    "chapters": [
     "quantum-statistics#boltzmann"
    ]
   },
   {
    "ko": "액티노메트리",
    "en": "actinometry",
    "abbr": "",
    "def": "장비는 이 선의 세기를 Ar 750.4 nm 같은 기준선으로 나눠(액티노메트리(actinometry)) 플라즈마 밀도 요동을 지우고, 기울기가 꺾이는 시점을 종말점(endpoint)으로 잡는다.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   },
   {
    "ko": "양자 용량",
    "en": "quantum capacitance",
    "abbr": "",
    "def": "페르미 준위를 \\(dE\\)만큼 올리면 \\(dn_s = g_{2D}\\,dE\\)개가 더 들어오므로, 반전층은 \\(C_q = e^2 g_{2D} \\approx 25\\) µF/cm²의 양자 용량(quantum capacitance)을 산화막 용량과 직렬로 붙인다.",
    "chapters": [
     "quantum-statistics#dos"
    ]
   },
   {
    "ko": "양자 우물",
    "en": "quantum well, 2D",
    "abbr": "",
    "def": "한 방향만 가두면 양자 우물(quantum well, 2D), 두 방향을 가두면 양자선(quantum wire, 1D), 세 방향 모두 가두면 양자점(quantum dot, 0D)이다.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "양자 효율",
    "en": "quantum efficiency",
    "abbr": "",
    "def": "들어온 광자 하나당 모인 전자 수를 양자 효율(quantum efficiency) \\(\\eta\\)라 하고, 입사 광전력당 광전류를 응답도(responsivity) \\(\\mathcal{R}\\)이라 한다.",
    "chapters": [
     "light-matter#detector"
    ]
   },
   {
    "ko": "양자선",
    "en": "quantum wire, 1D",
    "abbr": "",
    "def": "한 방향만 가두면 양자 우물(quantum well, 2D), 두 방향을 가두면 양자선(quantum wire, 1D), 세 방향 모두 가두면 양자점(quantum dot, 0D)이다.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "양자점",
    "en": "quantum dot, 0D",
    "abbr": "",
    "def": "한 방향만 가두면 양자 우물(quantum well, 2D), 두 방향을 가두면 양자선(quantum wire, 1D), 세 방향 모두 가두면 양자점(quantum dot, 0D)이다.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "양전자",
    "en": "positron, e⁺",
    "abbr": "",
    "def": "광자가 사라지고 전자와 그 반입자인 양전자(positron, e⁺)가 한 쌍으로 생긴다.",
    "chapters": [
     "photons#pair"
    ]
   },
   {
    "ko": "얕은 주개",
    "en": "shallow donor",
    "abbr": "",
    "def": "두 가지가 바뀐다: 쿨롱 힘이 비유전율 \\(\\varepsilon_r\\)만큼 약해지고(\\(ke^2 \\to ke^2/\\varepsilon_r\\)), 전자는 결정 속에서 유효 질량(effective mass) \\(m^*\\)로 움직인다(12장).…",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "에너지 고윳값",
    "en": "energy eigenvalue",
    "abbr": "",
    "def": "시간 독립 슈뢰딩거 방정식 $$-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} + V(x)\\,\\psi = E\\,\\psi \\quad\\Longleftrightarrow\\quad \\hat H\\psi = E\\psi$$연산자를 걸었더니 자기 자신의 상수배가 나오는 함수를 고유 함수(eigenfunction), 그 상수 \\(E\\)를 에너지 고윳값(energy eigenvalue)이라 한다.",
    "chapters": [
     "schrodinger#stationary"
    ]
   },
   {
    "ko": "에너지 등분배",
    "en": "equipartition",
    "abbr": "",
    "def": "고전 통계의 에너지 등분배(equipartition)에 따르면 각 모드는 평균 \\(k_BT\\)를 가지므로.",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "에너지 분산 X선 분광",
    "en": "energy-dispersive X-ray spectroscopy, EDS/EDX",
    "abbr": "",
    "def": "SEM·TEM에 붙은 에너지 분산 X선 분광(energy-dispersive X-ray spectroscopy, EDS/EDX)은 전자빔이 시료에서 만든 특성 X선을 실리콘 검출기로 센다.",
    "chapters": [
     "atomic-spectra#xray"
    ]
   },
   {
    "ko": "에르미트 다항식",
    "en": "Hermite polynomial",
    "abbr": "",
    "def": "\\(H_n\\)은 에르미트 다항식(Hermite polynomial): \\(H_0 = 1\\), \\(H_1 = 2\\xi\\), \\(H_2 = 4\\xi^2-2\\), \\(H_3 = 8\\xi^3-12\\xi\\), 점화식 \\(H_{n+1} = 2\\xi H_n - 2nH_{n-1}\\).",
    "chapters": [
     "harmonic-oscillator#quantum"
    ]
   },
   {
    "ko": "에어리 함수",
    "en": "Airy function",
    "abbr": "",
    "def": "삼각 우물의 해는 에어리 함수(Airy function) \\(\\psi_n(z) \\propto \\mathrm{Ai}\\!\\left(z/z_F - a_n\\right)\\)이며(\\(z_F = (\\hbar^2/2mqF)^{1/3}\\)), 벽 조건 \\(\\psi(0) = 0\\)이 \\(\\mathrm{Ai}(-a_n) = 0\\)을 요구해 \\(a_n\\) = 2.338, 4.088, 5.521, …이 정해진다.",
    "chapters": [
     "quantum-wells#triangular"
    ]
   },
   {
    "ko": "엑시머 레이저",
    "en": "excimer laser",
    "abbr": "",
    "def": "DUV 노광기는 엑시머 레이저(excimer laser)를 쓴다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "엑시톤",
    "en": "exciton",
    "abbr": "",
    "def": "빛을 흡수해 생긴 전자와 정공이 서로 끌어 묶인 상태를 엑시톤(exciton)이라 한다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "역격자 벡터",
    "en": "reciprocal lattice vector",
    "abbr": "",
    "def": "그래서 \\(k\\)는 길이 \\(2\\pi/a\\)인 구간 하나만 보면 충분하고, 보통 원점을 중심으로 $$-\\frac{\\pi}{a} < k \\le \\frac{\\pi}{a} \\qquad (\\text{제1 브릴루앙 영역})$$\\(G = 2\\pi n/a\\)를 역격자 벡터(reciprocal lattice vector)라 한다.",
    "chapters": [
     "energy-bands#bloch"
    ]
   },
   {
    "ko": "연산자",
    "en": "operator",
    "abbr": "",
    "def": "평면파 단계에서 본 대응 \\(p \\leftrightarrow -i\\hbar\\,\\partial/\\partial x\\)를 써서, 물리량마다 연산자(operator)를 정하고 \\(\\Psi^*\\)와 \\(\\Psi\\) 사이에 끼워 적분한다.",
    "chapters": [
     "schrodinger#operators"
    ]
   },
   {
    "ko": "연속 스펙트럼",
    "en": "continuous spectrum",
    "abbr": "",
    "def": "뜨거운 고체(전구 필라멘트)는 1장의 흑체 복사처럼 모든 파장을 내는 연속 스펙트럼(continuous spectrum)을 낸다.",
    "chapters": [
     "atomic-spectra#spectra"
    ]
   },
   {
    "ko": "열복사",
    "en": "thermal radiation",
    "abbr": "",
    "def": "모든 물체는 온도에 따라 전자기파를 내는데, 이를 열복사(thermal radiation)라 한다.",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "열중성자",
    "en": "thermal neutron",
    "abbr": "",
    "def": "원자로나 가속기의 열중성자(thermal neutron)도 파장이 약 0.18 nm라 결정에서 회절하는데, 전하가 없어 시료 깊숙이 들어가고 가벼운 원소(수소·리튬)와 자기 질서에 민감하다.",
    "chapters": [
     "matter-waves#diffraction"
    ]
   },
   {
    "ko": "열화",
    "en": "thermalization",
    "abbr": "",
    "def": "띠 간격이 효율을 정한다: \\(h\\nu < E_g\\)인 광자는 버려지고, \\(h\\nu > E_g\\)인 광자도 초과분 \\(h\\nu - E_g\\)를 열(포논)로 잃는다(열화(thermalization)). 예를 들어 Si에 흡수된 450 nm 광자(2.76 eV)는 에너지의 59%를 열로 잃는다.",
    "chapters": [
     "light-matter#detector"
    ]
   },
   {
    "ko": "영년 방정식",
    "en": "secular equation",
    "abbr": "",
    "def": "에너지 기댓값 \\(\\langle\\psi|H|\\psi\\rangle/\\langle\\psi|\\psi\\rangle\\)를 \\(c_A, c_B\\)에 대해 최소로 만드는(변분법) 조건은 2×2 영년 방정식(secular equation)이다.",
    "chapters": [
     "molecular-bonding#lcao"
    ]
   },
   {
    "ko": "영점 에너지",
    "en": "zero-point energy",
    "abbr": "",
    "def": "절대 영도에서도 사라지지 않는 이 최소 에너지를 영점 에너지(zero-point energy)라 한다.",
    "chapters": [
     "matter-waves#estimates"
    ]
   },
   {
    "ko": "온사이트 에너지",
    "en": "on-site energy",
    "abbr": "",
    "def": "$$\\psi = c_A\\phi_A + c_B\\phi_B, \\qquad \\alpha_A = \\langle\\phi_A|H|\\phi_A\\rangle,\\quad \\beta = \\langle\\phi_A|H|\\phi_B\\rangle,\\quad S = \\langle\\phi_A|\\phi_B\\rangle$$\\(\\alpha\\): 온사이트 에너지(on-site energy) — 원자 하나에서의 준위(쿨롱 적분). \\(\\beta < 0\\):…",
    "chapters": [
     "molecular-bonding#lcao"
    ]
   },
   {
    "ko": "올림 연산자",
    "en": "raising operator",
    "abbr": "",
    "def": "교환 관계로부터 \\(\\hat a^\\dagger\\)는 에너지를 \\(\\hbar\\omega\\)만큼 올리고(올림 연산자(raising operator)) \\(\\hat a\\)는 내린다: \\(\\hat a^\\dagger\\psi_n = \\sqrt{n+1}\\,\\psi_{n+1}\\), \\(\\hat a\\psi_n = \\sqrt n\\,\\psi_{n-1}\\). 사다리에는 바닥이 있어야 하므로 \\(\\hat a\\psi_0 = 0\\), 즉…",
    "chapters": [
     "harmonic-oscillator#quantum"
    ]
   },
   {
    "ko": "외부 양자 효율",
    "en": "EQE",
    "abbr": "",
    "def": "외부 양자 효율(EQE)은 주입 효율 × 내부 양자 효율 × 광 추출 효율이다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "원심 장벽",
    "en": "centrifugal barrier",
    "abbr": "",
    "def": "$$-\\frac{\\hbar^2}{2m}\\frac{d^2u}{dr^2} + \\underbrace{\\left[-\\frac{ke^2}{r} + \\frac{l(l+1)\\hbar^2}{2mr^2}\\right]}_{U_\\text{eff}(r)} u = E\\,u, \\qquad u(0) = 0$$둘째 항은 원심 장벽(centrifugal barrier)이다.",
    "chapters": [
     "hydrogen-atom#radial"
    ]
   },
   {
    "ko": "원자 오비탈의 선형 결합",
    "en": "linear combination of atomic orbitals, LCAO",
    "abbr": "",
    "def": "분자 오비탈을 각 원자의 오비탈 \\(\\phi_A, \\phi_B\\)의 원자 오비탈의 선형 결합(linear combination of atomic orbitals, LCAO)으로 놓는다.",
    "chapters": [
     "molecular-bonding#lcao"
    ]
   },
   {
    "ko": "원자핵",
    "en": "nucleus",
    "abbr": "",
    "def": "1911년 그는 원자의 양전하와 질량 거의 전부가 지름 수 fm(1 fm = 10⁻¹⁵ m)인 원자핵(nucleus)에 모여 있다고 결론지었다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "위상 속도",
    "en": "phase velocity",
    "abbr": "",
    "def": "개별 마루가 움직이는 위상 속도(phase velocity)와 포락선 덩어리가 움직이는 군속도(group velocity)다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "유도 방출",
    "en": "stimulated emission",
    "abbr": "",
    "def": "유도 방출(stimulated emission): 위 준위 원자가 지나가는 광자에 \"떠밀려\" 내려오며 똑같은 광자를 하나 더 낸다.",
    "chapters": [
     "light-matter#einstein"
    ]
   },
   {
    "ko": "유한 사각 우물",
    "en": "finite square well",
    "abbr": "",
    "def": "깊이 \\(V_0\\), 폭 \\(L\\)인 유한 사각 우물(finite square well)을 우물 가운데를 원점으로 놓고 풀자(\\(|x| < L/2\\)에서 \\(V = 0\\), 밖에서 \\(V = V_0\\)). 속박 상태(\\(0 < E < V_0\\))에서 장벽 속은 고전적으로 금지된 영역이라 해가 진동하지 않고 지수적으로 줄어든다.",
    "chapters": [
     "quantum-wells#finite"
    ]
   },
   {
    "ko": "유효 상태 밀도",
    "en": "effective density of states",
    "abbr": "",
    "def": "$$n = \\underbrace{2\\left(\\frac{2\\pi m_n^*kT}{h^2}\\right)^{3/2}}_{N_c}\\;\\underbrace{\\frac{2}{\\sqrt\\pi}\\int_0^\\infty\\frac{\\sqrt x\\,dx}{1 + e^{x-\\eta}}}_{F_{1/2}(\\eta)} = N_c\\,F_{1/2}(\\eta)$$\\(N_c\\): 전도대 유효 상태 밀도(effective density of…",
    "chapters": [
     "quantum-statistics#carriers"
    ]
   },
   {
    "ko": "유효 질량",
    "en": "effective mass",
    "abbr": "",
    "def": "전도대 전자의 포락 함수는 \\(m\\)을 유효 질량(effective mass) \\(m^*\\)로 바꾼 같은 슈뢰딩거 방정식을 따른다: 실리콘 Δ 계곡의 가로 질량 \\(m_t^* = 0.19\\,m_e\\), 세로 질량 \\(m_l^* = 0.98\\,m_e\\), GaAs \\(m^* = 0.067\\,m_e\\). 이 장의 모든 시뮬레이터에 \\(m^*\\)를 넣을 수 있게 한 이유다.",
    "chapters": [
     "schrodinger#wave-eq"
    ]
   },
   {
    "ko": "유효 핵전하",
    "en": "effective nuclear charge",
    "abbr": "",
    "def": "이를 유효 핵전하(effective nuclear charge) \\(Z_\\text{eff}\\)로 나타내면 수소꼴 공식을 빌려 쓸 수 있다.",
    "chapters": [
     "spin-atoms#periodic"
    ]
   },
   {
    "ko": "응답도",
    "en": "responsivity",
    "abbr": "",
    "def": "들어온 광자 하나당 모인 전자 수를 양자 효율(quantum efficiency) \\(\\eta\\)라 하고, 입사 광전력당 광전류를 응답도(responsivity) \\(\\mathcal{R}\\)이라 한다.",
    "chapters": [
     "light-matter#detector"
    ]
   },
   {
    "ko": "이득 계수",
    "en": "gain coefficient",
    "abbr": "",
    "def": "$$\\frac{dI}{dz} = \\sigma(N_2 - N_1)\\,I \\equiv g\\,I \\quad\\Rightarrow\\quad I(z) = I_0\\,e^{gz}$$\\(\\sigma\\): 유도 방출 단면적(cm²), \\(g = \\sigma(N_2 - N_1)\\): 이득 계수(gain coefficient). 보통은 \\(N_1 > N_2\\)라 \\(g < 0\\)(흡수, 비어–람베르트 법칙)이다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "이득 포화",
    "en": "gain saturation",
    "abbr": "",
    "def": "이 값이 1보다 크면 빛이 불어나고, 불어난 빛이 반전을 소모해(이득 포화(gain saturation)) 결국 정확히 1에서 멈춘다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "이온 결합",
    "en": "ionic bond",
    "abbr": "",
    "def": "\\(\\Delta \\approx 0\\)이고 \\(t\\)가 크면 전자가 두 원자 사이에 고르게 쌓이는 공유 결합(covalent bond), \\(|\\Delta| \\gg t\\)이면 전자가 한쪽으로 완전히 넘어가는 이온 결합(ionic bond)이다.",
    "chapters": [
     "molecular-bonding#bond-types"
    ]
   },
   {
    "ko": "이온화 에너지",
    "en": "ionization energy",
    "abbr": "",
    "def": "\\(n=1\\)인 바닥 상태(ground state) 에너지의 크기 13.6 eV가 수소의 이온화 에너지(ionization energy)다.",
    "chapters": [
     "atomic-spectra#bohr"
    ]
   },
   {
    "ko": "이종 구조",
    "en": "heterostructure",
    "abbr": "",
    "def": "띠 간격이 다른 두 반도체를 원자층 단위로 쌓은 것을 이종 구조(heterostructure)라 한다.",
    "chapters": [
     "quantum-wells#hetero"
    ]
   },
   {
    "ko": "일함수",
    "en": "work function",
    "abbr": "",
    "def": "전자가 금속을 벗어나려면 최소 일함수(work function) \\(\\phi\\)만큼의 에너지가 필요하다.",
    "chapters": [
     "photons#photoelectric"
    ]
   },
   {
    "ko": "자기 양자수",
    "en": "magnetic quantum number",
    "abbr": "",
    "def": "이것이 자기 양자수(magnetic quantum number)이고(9장에서 자기장 속 준위 갈라짐으로 이름의 이유를 본다), 뒤에서 보듯 \\(L_z = m\\hbar\\)를 뜻한다.",
    "chapters": [
     "hydrogen-atom#separation"
    ]
   },
   {
    "ko": "자기 터널 접합",
    "en": "MTJ, magnetic tunnel junction",
    "abbr": "",
    "def": "이 자기 터널 접합(MTJ, magnetic tunnel junction)의 저항비를 터널 자기 저항(TMR)이라 한다.",
    "chapters": [
     "spin-atoms#inner"
    ]
   },
   {
    "ko": "자기 회전 비율",
    "en": "gyromagnetic ratio",
    "abbr": "",
    "def": "$$\\vec\\mu_L = -\\frac{e}{2m_e}\\vec L, \\qquad \\mu_z = -\\frac{e}{2m_e}L_z = -m_l\\,\\mu_B, \\qquad \\mu_B = \\frac{e\\hbar}{2m_e} = 9.274\\times10^{-24}\\ \\text{J/T} = 5.788\\times10^{-5}\\ \\text{eV/T}$$\\(\\mu_B\\): 보어 마그네톤(Bohr magneton). \\(\\mu/L\\)의…",
    "chapters": [
     "spin-atoms#zeeman"
    ]
   },
   {
    "ko": "자발 방출",
    "en": "spontaneous emission",
    "abbr": "",
    "def": "자발 방출(spontaneous emission): 위 준위 원자가 빛이 없어도 저절로 내려오며 광자를 낸다.",
    "chapters": [
     "light-matter#einstein"
    ]
   },
   {
    "ko": "자외선 파탄",
    "en": "ultraviolet catastrophe",
    "abbr": "",
    "def": "이것이 자외선 파탄(ultraviolet catastrophe)이다.",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "자유 전자 모형",
    "en": "free-electron model",
    "abbr": "",
    "def": "이 전자들을 상자 속 자유 전자 기체로 보자(자유 전자 모형(free-electron model)). \\(T = 0\\)에서 전자는 파울리 원리에 따라 가장 낮은 상태부터 하나씩 채운다.",
    "chapters": [
     "quantum-statistics#metals"
    ]
   },
   {
    "ko": "전기 쌍극자 전이",
    "en": "electric dipole transition",
    "abbr": "",
    "def": "가장 흔한 전기 쌍극자 전이(electric dipole transition)의 확률은 \\(\\langle f|\\vec r|i\\rangle\\)에 비례하는데, 각도 적분이 0이 아니려면.",
    "chapters": [
     "hydrogen-atom#transitions"
    ]
   },
   {
    "ko": "전기 음성도",
    "en": "electronegativity",
    "abbr": "",
    "def": "전기 음성도(electronegativity) \\(\\chi\\)는 결합 속에서 원자가 전자를 끌어당기는 정도로, LCAO의 온사이트 에너지 \\(\\alpha\\)가 낮을수록 크다.",
    "chapters": [
     "molecular-bonding#bond-types"
    ]
   },
   {
    "ko": "전기적 산화막 두께",
    "en": "CET, capacitance equivalent thickness",
    "abbr": "",
    "def": "그래서 용량–전압 측정으로 얻는 전기적 산화막 두께(CET, capacitance equivalent thickness)는 물리적 등가 두께(EOT)보다 두껍다.",
    "chapters": [
     "quantum-wells#triangular"
    ]
   },
   {
    "ko": "전달 행렬법",
    "en": "transfer-matrix method",
    "abbr": "",
    "def": "게이트 스택(SiO₂ 계면층 + HfO₂), 공명 터널 다이오드(장벽–우물–장벽), 초격자, 자기 터널 접합… 퍼텐셜이 여러 층의 계단으로 이루어져 있으면 전달 행렬법(transfer-matrix method)으로 체계적으로 풀 수 있다.",
    "chapters": [
     "tunneling#transfer"
    ]
   },
   {
    "ko": "전도대",
    "en": "conduction band",
    "abbr": "",
    "def": "결합 오비탈에서 온 띠가 가전자대(valence band), 반결합 오비탈에서 온 띠가 전도대(conduction band)다.",
    "chapters": [
     "molecular-bonding#bands"
    ]
   },
   {
    "ko": "전도도 유효 질량",
    "en": "conductivity effective mass",
    "abbr": "",
    "def": "상태 밀도(10장의 \\(N_c\\))에는 계곡 수까지 넣은 상태 밀도 유효 질량(density-of-states effective mass), 전류(이동도)에는 세 방향 \\(1/m\\)의 평균인 전도도 유효 질량(conductivity effective mass)을 쓴다.",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "전반사",
    "en": "total internal reflection",
    "abbr": "",
    "def": "반도체의 굴절률은 \\(n \\approx 2.5\\)(GaN)–3.5(GaAs)로 커서, 표면에 임계각 \\(\\theta_c = \\sin^{-1}(1/n)\\)보다 비스듬히 닿은 빛은 전반사(total internal reflection)되어 갇힌다.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "전자 스핀 공명",
    "en": "ESR 또는 EPR",
    "abbr": "",
    "def": "이것이 전자 스핀 공명(ESR 또는 EPR)이다.",
    "chapters": [
     "spin-atoms#inner"
    ]
   },
   {
    "ko": "절연체",
    "en": "insulator",
    "abbr": "",
    "def": "띠가 꽉 차고 위 띠와 사이에 간격: 꽉 찬 띠는 \\(+k\\)와 \\(-k\\) 상태가 짝지어 모두 차 있어 전류를 나르지 못한다(뒤의 정공 절). 간격이 작으면(대략 \\(E_g \\lesssim 3\\)–4 eV) 상온에서 일부 전자가 열로 올라가는 반도체(semiconductor), 크면 절연체(insulator).",
    "chapters": [
     "energy-bands#filling"
    ]
   },
   {
    "ko": "정규화",
    "en": "normalization",
    "abbr": "",
    "def": "이것을 정규화(normalization) 조건이라 한다.",
    "chapters": [
     "schrodinger#born"
    ]
   },
   {
    "ko": "정상 제만 효과",
    "en": "normal Zeeman effect",
    "abbr": "",
    "def": "원래 \\(2l+1\\)겹으로 겹쳐 있던(축퇴된) 준위가 자기장 속에서 같은 간격 \\(\\mu_B B\\)로 갈라진다 — 이것이 정상 제만 효과(normal Zeeman effect)다.",
    "chapters": [
     "spin-atoms#zeeman"
    ]
   },
   {
    "ko": "정상파",
    "en": "standing wave",
    "abbr": "",
    "def": "궤도 둘레에 전자 파동이 정수 개 들어가 한 바퀴 돌아 자기 자신과 이어지는 정상파(standing wave)일 때만 궤도가 안정하다는 뜻이다.",
    "chapters": [
     "atomic-spectra#bohr"
    ]
   },
   {
    "ko": "제동 복사",
    "en": "bremsstrahlung",
    "abbr": "",
    "def": "이를 제동 복사(bremsstrahlung)라 한다.",
    "chapters": [
     "photons#xray-compton"
    ]
   },
   {
    "ko": "조화 진동자",
    "en": "harmonic oscillator",
    "abbr": "",
    "def": "따라서 진폭이 작은 한, 어떤 퍼텐셜도 조화 진동자(harmonic oscillator) \\(V \\approx \\tfrac12 k(x-x_0)^2\\)로 보인다.",
    "chapters": [
     "harmonic-oscillator#parabola"
    ]
   },
   {
    "ko": "종말점",
    "en": "endpoint",
    "abbr": "",
    "def": "장비는 이 선의 세기를 Ar 750.4 nm 같은 기준선으로 나눠(액티노메트리(actinometry)) 플라즈마 밀도 요동을 지우고, 기울기가 꺾이는 시점을 종말점(endpoint)으로 잡는다.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   },
   {
    "ko": "주사 터널링 현미경",
    "en": "scanning tunneling microscope, STM",
    "abbr": "",
    "def": "비니히와 로러는 1981년 이 주사 터널링 현미경(scanning tunneling microscope, STM)을 만들어 1983년 Si(111) 7×7 재구성 표면의 원자 배열을 실공간에서 처음 보였고, 1986년 노벨 물리학상을 받았다.",
    "chapters": [
     "tunneling#stm"
    ]
   },
   {
    "ko": "준안정 상태",
    "en": "metastable state",
    "abbr": "",
    "def": "② 2s → 1s를 시도해 보라. 금지! 2s 상태는 광자 두 개를 동시에 내며 0.12 s나 걸려 붕괴하는 준안정 상태(metastable state)다(2p의 수명은 1.6 ns). ③ 아래에서 위로 끌면 흡수다.",
    "chapters": [
     "hydrogen-atom#transitions"
    ]
   },
   {
    "ko": "준안정 준위",
    "en": "metastable level",
    "abbr": "",
    "def": "펌프는 위쪽의 넓은 펌프 띠로 원자를 올리고, 원자는 그곳에서 빠르게(비복사로) 수명이 긴 준안정 준위(metastable level)로 떨어진다.",
    "chapters": [
     "light-matter#laser"
    ]
   },
   {
    "ko": "중심 세포 보정",
    "en": "central-cell correction",
    "abbr": "",
    "def": "차이는 중심 세포 보정(central-cell correction) 때문이다: 불순물 바로 근처에서는 연속 매질 가정이 깨지고 원소마다 핵심 전자의 퍼텐셜이 다르다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "중심력",
    "en": "central force",
    "abbr": "",
    "def": "$$-\\frac{\\hbar^2}{2m}\\nabla^2\\psi + U(r)\\,\\psi = E\\,\\psi, \\qquad U(r) = -\\frac{ke^2}{r} = -\\frac{1.440\\ \\text{eV·nm}}{r}$$\\(k = 1/4\\pi\\varepsilon_0\\). 퍼텐셜이 거리 \\(r\\)에만 의존하는 중심력(central force) 문제다.",
    "chapters": [
     "hydrogen-atom#separation"
    ]
   },
   {
    "ko": "직교",
    "en": "orthogonal",
    "abbr": "",
    "def": "서로 다른 상태는 직교(orthogonal)한다: \\(\\int_0^L\\psi_m\\psi_n\\,dx = \\delta_{mn}\\). 이는 에르미트 연산자(해밀토니안)의 서로 다른 고유값에 속한 고유함수가 늘 갖는 성질이며, 임의의 파동함수를 \\(\\Psi = \\sum c_n\\psi_n\\)으로 전개하고 \\(|c_n|^2\\)을 \"\\(E_n\\)을 측정할 확률\"로 읽을 수 있게 해 준다.",
    "chapters": [
     "quantum-wells#infinite"
    ]
   },
   {
    "ko": "직접 띠 간격",
    "en": "direct band gap",
    "abbr": "",
    "def": "GaAs는 전도대 바닥과 가전자대 꼭대기가 모두 \\(\\Gamma\\)(\\(k = 0\\))에 있는 직접 띠 간격(direct band gap) 반도체이고, Si와 Ge는 둘의 \\(k\\)가 다른 간접 띠 간격(indirect band gap) 반도체다.",
    "chapters": [
     "energy-bands#real-bands"
    ]
   },
   {
    "ko": "직접 터널링",
    "en": "direct tunneling",
    "abbr": "",
    "def": "산화막에 걸린 전압 \\(V_\\text{ox}\\)이 \\(\\phi_B/q\\)보다 작으면 장벽은 사다리꼴이고, 전자는 산화막 전체를 가로질러 곧장 게이트로 간다 — 직접 터널링(direct tunneling)이다.",
    "chapters": [
     "tunneling#oxide"
    ]
   },
   {
    "ko": "진성 캐리어 농도",
    "en": "intrinsic carrier concentration",
    "abbr": "",
    "def": "불순물이 없으면 전자는 가전자대에서 들떠 올라온 것뿐이므로 \\(n = p \\equiv n_i\\)(진성 캐리어 농도(intrinsic carrier concentration)). 비축퇴 식 두 개를 곱하면 \\(E_F\\)가 사라진다.",
    "chapters": [
     "quantum-statistics#carriers"
    ]
   },
   {
    "ko": "짝 상태",
    "en": "even",
    "abbr": "",
    "def": "$$|x| < \\tfrac L2:\\ \\psi'' = -k^2\\psi,\\quad k = \\frac{\\sqrt{2mE}}{\\hbar}; \\qquad |x| > \\tfrac L2:\\ \\psi'' = \\kappa^2\\psi,\\quad \\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$$밖의 해는 \\(e^{-\\kappa|x|}\\)(무한대에서 발산하는 \\(e^{+\\kappa|x|}\\)은 버린다). 퍼텐셜이…",
    "chapters": [
     "quantum-wells#finite"
    ]
   },
   {
    "ko": "총 각운동량",
    "en": "total angular momentum",
    "abbr": "",
    "def": "$$E_{so} = A\\,\\vec L\\cdot\\vec S, \\qquad \\vec J = \\vec L + \\vec S, \\qquad \\vec L\\cdot\\vec S = \\tfrac12\\left(J^2 - L^2 - S^2\\right) = \\frac{\\hbar^2}{2}\\big[j(j+1) - l(l+1) - s(s+1)\\big]$$\\(\\vec J\\): 총 각운동량(total angular momentum). 양자수…",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "최근접 거리",
    "en": "distance of closest approach",
    "abbr": "",
    "def": "$$b = \\frac{d}{2}\\cot\\frac{\\theta}{2}, \\qquad d = \\frac{1}{4\\pi\\varepsilon_0}\\frac{(2e)(Ze)}{K} = \\frac{2Z\\times 1.44\\ \\text{MeV·fm}}{K}$$\\(\\theta\\): 산란각, \\(d\\): 정면 충돌(\\(b = 0\\)) 때 입자가 멈추는 최근접 거리(distance of closest approach).…",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "축퇴",
    "en": "degeneracy",
    "abbr": "",
    "def": "이를 축퇴(degeneracy)라 하고, 같은 에너지의 상태 수를 축퇴도라 한다.",
    "chapters": [
     "quantum-wells#boxes"
    ]
   },
   {
    "ko": "축퇴 반도체",
    "en": "degenerate semiconductor",
    "abbr": "",
    "def": "모트 농도의 수십 배이므로 주개 준위는 이미 전도대와 합쳐진 축퇴 반도체(degenerate semiconductor)로, 금속처럼 행동해 저온에서도 얼어붙지 않고 금속–반도체 접촉의 장벽을 터널링으로 뚫어 저항이 낮은 오믹 접촉을 만든다(6장). 반대쪽 극단에서는 주개 하나를 쓴다.",
    "chapters": [
     "hydrogen-atom#hydrogenic"
    ]
   },
   {
    "ko": "축퇴도",
    "en": "degeneracy",
    "abbr": "",
    "def": "이 모든 상태가 같은 에너지를 가지므로 준위 \\(E_n\\)의 축퇴도(degeneracy)는 \\(n^2\\)이다(전자 스핀을 넣으면 \\(2n^2\\) — 9장에서 주기율표의 2, 8, 18의 기원이 된다).",
    "chapters": [
     "hydrogen-atom#radial"
    ]
   },
   {
    "ko": "충격 매개변수",
    "en": "impact parameter",
    "abbr": "",
    "def": "핵을 지나는 직선과 입자의 처음 경로 사이 거리를 충격 매개변수(impact parameter) \\(b\\)라 한다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "침투",
    "en": "penetration",
    "abbr": "",
    "def": "$$E_n \\approx -\\frac{Z_\\text{eff}^2}{n^2}(13.6\\ \\text{eV}), \\qquad Z_\\text{eff} = n\\sqrt{\\frac{E_\\text{ion}}{13.6\\ \\text{eV}}}$$\\(Z_\\text{eff} = Z - \\sigma\\), \\(\\sigma\\): 가림 상수. 같은 \\(n\\)에서 \\(l\\)이 작은 오비탈(s)은 핵 가까이 파고드는 꼬리가…",
    "chapters": [
     "spin-atoms#periodic"
    ]
   },
   {
    "ko": "침투 깊이",
    "en": "penetration depth",
    "abbr": "",
    "def": "진폭이 \\(1/e\\)로 줄어드는 거리를 침투 깊이(penetration depth) \\(\\delta = 1/\\kappa = \\hbar/\\sqrt{2m(V_0 - E)}\\)라 한다.",
    "chapters": [
     "quantum-wells#finite"
    ]
   },
   {
    "ko": "콤프턴 파장",
    "en": "Compton wavelength",
    "abbr": "",
    "def": "$$\\Delta\\lambda = \\lambda' - \\lambda = \\frac{h}{m_ec}(1-\\cos\\theta) = \\lambda_C(1-\\cos\\theta), \\qquad \\lambda_C = \\frac{h}{m_ec} = 2.426\\ \\text{pm}$$\\(\\lambda_C\\)는 전자의 콤프턴 파장(Compton wavelength). 파장 변화는 입사 파장과 표적 물질에 무관하다.",
    "chapters": [
     "photons#xray-compton"
    ]
   },
   {
    "ko": "탄도 수송",
    "en": "ballistic transport",
    "abbr": "",
    "def": "채널 길이가 전자의 평균 자유 행로(실리콘 반전층에서 약 10–20 nm)에 가까워지면 전자는 산란 없이 소스에서 드레인으로 날아가는 탄도 수송(ballistic transport)에 가까워진다.",
    "chapters": [
     "schrodinger#free-particle"
    ]
   },
   {
    "ko": "탈출 원뿔",
    "en": "escape cone",
    "abbr": "",
    "def": "등방적으로 나온 빛 중 한 면의 탈출 원뿔(escape cone)에 드는 비율은 입체각 비로.",
    "chapters": [
     "light-matter#led"
    ]
   },
   {
    "ko": "터널 자기 저항",
    "en": "TMR",
    "abbr": "",
    "def": "이 자기 터널 접합(MTJ, magnetic tunnel junction)의 저항비를 터널 자기 저항(TMR)이라 한다.",
    "chapters": [
     "spin-atoms#inner"
    ]
   },
   {
    "ko": "터널링",
    "en": "tunneling",
    "abbr": "",
    "def": "이 터널링(tunneling)은 반도체에서 피할 수 없는 골칫거리이자 쓸모 있는 도구다.",
    "chapters": [
     "tunneling"
    ]
   },
   {
    "ko": "터널링 결합",
    "en": "tunnel coupling",
    "abbr": "",
    "def": "$$E_{S,A} \\approx E_1 \\mp t, \\qquad \\Delta E = E_A - E_S = 2t \\;\\propto\\; e^{-\\kappa d}, \\qquad \\kappa = \\frac{\\sqrt{2m(V_0 - E_1)}}{\\hbar}$$\\(d\\): 장벽(우물 사이) 두께, \\(t\\): 터널링 결합(tunnel coupling) 또는 건너뛰기 적분. 간격을 \\(1/\\kappa\\)만큼 늘릴 때마다 분리가…",
    "chapters": [
     "molecular-bonding#double-well"
    ]
   },
   {
    "ko": "테일러 전개",
    "en": "Taylor expansion",
    "abbr": "",
    "def": "퍼텐셜을 \\(x_0\\) 둘레에서 테일러 전개(Taylor expansion)하면.",
    "chapters": [
     "harmonic-oscillator#parabola"
    ]
   },
   {
    "ko": "톰슨 모형",
    "en": "Thomson model, plum-pudding model",
    "abbr": "",
    "def": "이른바 톰슨 모형(Thomson model, plum-pudding model)이다.",
    "chapters": [
     "atomic-spectra#rutherford"
    ]
   },
   {
    "ko": "특성 X선",
    "en": "characteristic X-ray",
    "abbr": "",
    "def": "전자가 원자핵 근처에서 급히 감속하며 내는 연속적인 제동 복사(bremsstrahlung)와, 양극 원소 고유의 날카로운 특성 X선(characteristic X-ray)이다.",
    "chapters": [
     "atomic-spectra#xray"
    ]
   },
   {
    "ko": "파동함수",
    "en": "wave function",
    "abbr": "",
    "def": "전자의 상태를 복소수 값의 파동함수(wave function) \\(\\psi\\)로 나타내고, 어떤 위치에서 전자가 검출될 확률은 \\(|\\psi|^2\\)에 비례한다(보른 해석(Born interpretation), 4장). 슬릿 1을 지나는 진폭을 \\(\\psi_1\\), 슬릿 2를 지나는 진폭을 \\(\\psi_2\\)라 하면, 두 길이 모두 열려 있고 어느 길인지 알 수 없을 때는 진폭이 더해진다.",
    "chapters": [
     "matter-waves#double-slit"
    ]
   },
   {
    "ko": "파브리–페로 공진기",
    "en": "Fabry–Pérot resonator",
    "abbr": "",
    "def": "이중 장벽에서 일어나는 일은 광학의 파브리–페로 공진기(Fabry–Pérot resonator)와 같다.",
    "chapters": [
     "tunneling#transfer"
    ]
   },
   {
    "ko": "파셴–바크 효과",
    "en": "Paschen–Back effect",
    "abbr": "",
    "def": "자기장이 내부 자기장(수십 T)보다 커지면 \\(\\vec L\\)과 \\(\\vec S\\)의 결합이 끊어져 다시 세 줄 비슷하게 돌아간다(파셴–바크 효과(Paschen–Back effect)). 1절 시뮬레이터의 Na 모드에서 비정상 갈라짐을 확인하라.",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "파속",
    "en": "wave packet",
    "abbr": "",
    "def": "한곳에 모인 입자를 나타내려면 파수가 조금씩 다른 평면파를 많이 겹쳐 파속(wave packet)을 만들어야 한다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "파수",
    "en": "wavenumber",
    "abbr": "",
    "def": "분광학에서는 진동수를 파수(wavenumber) \\(\\tilde\\nu = 1/\\lambda = f/c\\)(cm⁻¹)로 쓴다.",
    "chapters": [
     "harmonic-oscillator#parabola"
    ]
   },
   {
    "ko": "파울러–노드하임(FN) 터널링",
    "en": "Fowler–Nordheim tunneling",
    "abbr": "",
    "def": "이를 파울러–노드하임(FN) 터널링(Fowler–Nordheim tunneling)이라 한다(1928년, 금속 표면의 전계 방출을 설명하려고 유도). 전기장이 커질수록 삼각형이 얇아지므로 전류는 전기장에 대해 폭발적으로 늘어난다.",
    "chapters": [
     "tunneling#fn"
    ]
   },
   {
    "ko": "파울리 배타 원리",
    "en": "Pauli exclusion principle",
    "abbr": "",
    "def": "스핀과 대칭의 이 연결을 스핀–통계 정리(spin–statistics theorem)라 한다(파울리, 1940, 상대론적 양자장론의 결과). 전자에 대한 결론이 파울리 배타 원리(Pauli exclusion principle)다.",
    "chapters": [
     "spin-atoms#identical"
    ]
   },
   {
    "ko": "페르미 에너지",
    "en": "Fermi energy",
    "abbr": "",
    "def": "마지막 전자가 들어간 에너지가 페르미 에너지(Fermi energy) \\(E_F\\)다.",
    "chapters": [
     "quantum-statistics#metals"
    ]
   },
   {
    "ko": "페르미 준위",
    "en": "Fermi level",
    "abbr": "",
    "def": "고체 물리에서는 전자의 \\(\\mu\\)를 페르미 준위(Fermi level) \\(E_F\\)라 부른다.",
    "chapters": [
     "quantum-statistics#three-stats"
    ]
   },
   {
    "ko": "페르미–디랙 분포 함수",
    "en": "Fermi–Dirac distribution",
    "abbr": "",
    "def": "전자에 대한 \\(f(E) = 1/(1 + e^{(E-E_F)/kT})\\)를 페르미–디랙 분포 함수(Fermi–Dirac distribution)라 한다.",
    "chapters": [
     "quantum-statistics#three-stats"
    ]
   },
   {
    "ko": "평면파",
    "en": "plane wave",
    "abbr": "",
    "def": "가장 단순한 물질파는 운동량이 정해진 자유 전자의 평면파(plane wave)다.",
    "chapters": [
     "schrodinger#wave-eq"
    ]
   },
   {
    "ko": "포논",
    "en": "phonon",
    "abbr": "",
    "def": "그 에너지 양자 \\(\\hbar\\omega(k)\\) 하나를 포논(phonon)이라 한다.",
    "chapters": [
     "harmonic-oscillator#phonons"
    ]
   },
   {
    "ko": "포락 함수 근사",
    "en": "envelope function approximation",
    "abbr": "",
    "def": "결정 속 전도대 전자는 주기 퍼텐셜 속을 움직이지만, 띠 바닥 근처에서는 질량만 바뀐 자유 입자처럼 행동한다: \\(E = E_c + \\hbar^2k^2/2m^*\\). 이 \\(m^*\\)가 유효 질량(effective mass)이다(12장에서 띠 구조로 유도). 따라서 결정 위에 원자 수십 층 크기로 덧씌운 \"느린\" 퍼텐셜은 \\(m \\to m^*\\)로 바꾼 슈뢰딩거 방정식으로 다룰 수 있다 — 포락 함수…",
    "chapters": [
     "quantum-wells#hetero"
    ]
   },
   {
    "ko": "푸리에 합성",
    "en": "Fourier synthesis",
    "abbr": "",
    "def": "이것이 푸리에 합성(Fourier synthesis)이고, \\(A(k)\\)는 \\(\\psi(x)\\)의 푸리에 변환이다.",
    "chapters": [
     "matter-waves#wavepacket"
    ]
   },
   {
    "ko": "플랑크 상수",
    "en": "Planck constant",
    "abbr": "",
    "def": "그러면 볼츠만 분포로 평균한 모드 에너지는 \\(k_BT\\)가 아니라 $$\\langle E\\rangle = \\frac{hf}{e^{hf/k_BT}-1} \\quad\\Longrightarrow\\quad M_\\lambda = \\frac{2\\pi hc^2}{\\lambda^5}\\,\\frac{1}{e^{hc/\\lambda k_BT}-1}$$\\(h = 6.626\\times10^{-34}\\) J·s는 플랑크 상수(Planck…",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "항 기호",
    "en": "term symbol",
    "abbr": "",
    "def": "좋은 양자수는 \\(n, l, j, m_j\\)이고, 상태는 항 기호(term symbol) \\(n\\,{}^{2s+1}L_j\\)로 쓴다.",
    "chapters": [
     "spin-atoms#fine"
    ]
   },
   {
    "ko": "해리",
    "en": "dissociation",
    "abbr": "",
    "def": "포물선은 영원히 올라가지만, 실제 퍼텐셜은 해리 에너지 \\(D_e\\)에서 평평해진다.",
    "chapters": [
     "harmonic-oscillator#molecules"
    ]
   },
   {
    "ko": "해밀토니언",
    "en": "Hamiltonian",
    "abbr": "",
    "def": "$$i\\hbar\\frac{\\partial\\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2\\Psi}{\\partial x^2} + V(x)\\,\\Psi \\equiv \\hat H\\Psi$$\\(\\hat H\\)는 해밀토니언(Hamiltonian), 곧 전체 에너지 연산자다.",
    "chapters": [
     "schrodinger#wave-eq"
    ]
   },
   {
    "ko": "핵자기 공명",
    "en": "NMR",
    "abbr": "",
    "def": "원자핵의 스핀도 같은 일을 하지만 핵 자기 모멘트가 약 2000배 작아(핵 마그네톤 \\(\\mu_N = \\mu_B m_e/m_p\\)) 라디오파 영역이 된다 — 핵자기 공명(NMR), 그리고 병원의 MRI다.",
    "chapters": [
     "spin-atoms#inner"
    ]
   },
   {
    "ko": "허용 띠",
    "en": "allowed band",
    "abbr": "",
    "def": "\\(|f(E)| \\le 1\\)이면 실수 \\(k = \\cos^{-1}f/d\\)가 있어 블로흐 파가 결정 전체에 퍼질 수 있다 — 허용 띠(allowed band). \\(|f(E)| > 1\\)이면 \\(k\\)가 복소수가 되어 파동이 셀마다 지수적으로 커지거나 줄어든다.",
    "chapters": [
     "energy-bands#kronig-penney"
    ]
   },
   {
    "ko": "호핑 적분",
    "en": "hopping integral",
    "abbr": "",
    "def": "이웃 오비탈 사이의 겹침(호핑 적분(hopping integral)) \\(t\\)만 남기는 강결합 근사(tight-binding approximation)에서, 블로흐 정리를 만족하는 원자 오비탈 \\(\\phi\\)의 조합.",
    "chapters": [
     "energy-bands#gap"
    ]
   },
   {
    "ko": "혼성 오비탈",
    "en": "hybrid orbital",
    "abbr": "",
    "def": "s 전자 하나를 p로 올리는 데 드는 에너지보다 결합을 두 개 더 만들어 얻는 에너지가 크고, s와 p 오비탈을 섞은 혼성 오비탈(hybrid orbital)이 이웃 방향으로 더 길게 뻗어 겹침이 커지기 때문이다.",
    "chapters": [
     "molecular-bonding#hybrid"
    ]
   },
   {
    "ko": "홀 상태",
    "en": "odd",
    "abbr": "",
    "def": "$$|x| < \\tfrac L2:\\ \\psi'' = -k^2\\psi,\\quad k = \\frac{\\sqrt{2mE}}{\\hbar}; \\qquad |x| > \\tfrac L2:\\ \\psi'' = \\kappa^2\\psi,\\quad \\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$$밖의 해는 \\(e^{-\\kappa|x|}\\)(무한대에서 발산하는 \\(e^{+\\kappa|x|}\\)은 버린다). 퍼텐셜이…",
    "chapters": [
     "quantum-wells#finite"
    ]
   },
   {
    "ko": "화학 퍼텐셜",
    "en": "chemical potential",
    "abbr": "",
    "def": "\\(\\mu\\)는 화학 퍼텐셜(chemical potential)으로, 입자 수를 맞추는 상수다.",
    "chapters": [
     "quantum-statistics#three-stats"
    ]
   },
   {
    "ko": "확률 밀도",
    "en": "probability density",
    "abbr": "",
    "def": "시각 \\(t\\)에 입자의 위치를 측정해 \\(a\\)와 \\(b\\) 사이에서 발견할 확률은 $$P(a \\le x \\le b) = \\int_a^b |\\Psi(x,t)|^2\\,dx, \\qquad |\\Psi|^2 = \\Psi^*\\Psi$$\\(|\\Psi|^2\\)은 확률 밀도(probability density), 1차원에서 단위는 1/길이(nm⁻¹)다.",
    "chapters": [
     "schrodinger#born"
    ]
   },
   {
    "ko": "확률 흐름",
    "en": "probability current",
    "abbr": "",
    "def": "슈뢰딩거 방정식에서 직접 이끌 수 있는 확률 흐름(probability current) \\(j\\)는 단위 시간에 한 점을 지나가는 확률이며, 전하의 연속 방정식과 똑같은 꼴을 만족한다.",
    "chapters": [
     "schrodinger#born"
    ]
   },
   {
    "ko": "확장 영역",
    "en": "extended zone",
    "abbr": "",
    "def": "띠 \\(n\\)을 \\(n\\)번째 영역(\\((n-1)\\pi/d < |k| \\le n\\pi/d\\))에 두면 자유 전자 포물선과 비교하기 쉬운 확장 영역(extended zone) 표시가 된다.",
    "chapters": [
     "energy-bands#kronig-penney"
    ]
   },
   {
    "ko": "환산 질량",
    "en": "reduced mass",
    "abbr": "",
    "def": "전자와 핵은 공통 질량 중심을 돌므로, 전자 질량 \\(m_e\\) 대신 환산 질량(reduced mass) \\(\\mu = m_eM/(m_e+M)\\)을 써야 한다.",
    "chapters": [
     "atomic-spectra#bohr"
    ]
   },
   {
    "ko": "환원 영역",
    "en": "reduced zone",
    "abbr": "",
    "def": "\\(k\\)와 \\(k + 2\\pi/d\\)가 같은 상태이므로 각 조각을 역격자 벡터만큼 옮겨 제1 영역에 모으면 환원 영역(reduced zone) 표시 — 반도체 띠 구조 그림은 모두 이것이다.",
    "chapters": [
     "energy-bands#kronig-penney"
    ]
   },
   {
    "ko": "후면 조사",
    "en": "BSI, backside illumination",
    "abbr": "",
    "def": "웨이퍼를 3–6 µm로 얇게 갈아 뒤에서 빛을 넣는 후면 조사(BSI, backside illumination)는 배선 가림을 없애고, 깊은 트렌치 격리(DTI)로 빨간빛의 옆 번짐을 막는다.",
    "chapters": [
     "light-matter#absorption"
    ]
   },
   {
    "ko": "흑체",
    "en": "blackbody",
    "abbr": "",
    "def": "들어오는 빛을 모두 흡수하는 이상적인 물체를 흑체(blackbody)라 하며, 작은 구멍이 뚫린 속 빈 상자(공동)가 좋은 근사다.",
    "chapters": [
     "photons#blackbody"
    ]
   },
   {
    "ko": "흡수",
    "en": "absorption",
    "abbr": "",
    "def": "흡수(absorption): 아래 준위 원자가 광자를 삼키고 위로 올라간다.",
    "chapters": [
     "light-matter#einstein"
    ]
   },
   {
    "ko": "흡수 계수",
    "en": "absorption coefficient",
    "abbr": "",
    "def": "흡수 계수(absorption coefficient) \\(\\alpha\\)(cm⁻¹)의 역수 \\(\\delta = 1/\\alpha\\)가 침투 깊이(penetration depth)로, 빛이 \\(1/e\\)(37%)로 줄어드는 깊이다.",
    "chapters": [
     "light-matter#absorption"
    ]
   },
   {
    "ko": "흡수선",
    "en": "absorption line",
    "abbr": "",
    "def": "뜨겁고 조밀한 물체는 연속 스펙트럼, 뜨겁고 묽은 기체는 밝은 방출선(emission line), 연속 광원 앞의 차가운 기체는 같은 자리에 어두운 흡수선(absorption line)을 만든다.",
    "chapters": [
     "atomic-spectra#emission"
    ]
   }
  ]
 }
});
