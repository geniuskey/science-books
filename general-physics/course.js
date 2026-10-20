/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "general-physics",
 "title": "일반물리학",
 "en": "General Physics",
 "field": "physics",
 "level": "대학 1학년 · 일반물리학 I·II",
 "status": "writing",
 "description": "운동과 힘, 에너지와 운동량, 회전, 진동과 파동, 열, 전기와 자기, 빛, 상대성까지 — 미적분 기반 대학 1학년 일반물리 전 과정을 끌고, 던지고, 부딪쳐 보며 익히는 인터랙티브 교과서.",
 "accent": {
  "light": "#2f6fe0",
  "dark": "#6b9bff",
  "light2": "#d9480f",
  "dark2": "#ff8a4c"
 },
 "mark": "<circle cx=\"16\" cy=\"16\" r=\"3\" fill=\"#fff\"/><ellipse cx=\"16\" cy=\"16\" rx=\"10\" ry=\"4\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.6\"/><ellipse cx=\"16\" cy=\"16\" rx=\"10\" ry=\"4\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.6\" transform=\"rotate(60 16 16)\"/><ellipse cx=\"16\" cy=\"16\" rx=\"10\" ry=\"4\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.6\" transform=\"rotate(-60 16 16)\"/>",
 "parts": [
  {
   "title": "제1부 운동과 힘",
   "semester": 1,
   "chapters": [
    {
     "slug": "units-vectors",
     "num": "01",
     "title": "측정, 단위, 벡터",
     "en": "Units, Measurement, and Vectors",
     "desc": "SI 단위와 차원 분석, 어림, 유효숫자, 벡터의 성분·덧셈·스칼라곱·벡터곱.",
     "tags": [
      "기초",
      "벡터"
     ]
    },
    {
     "slug": "straight-line-motion",
     "num": "02",
     "title": "직선 운동",
     "en": "Motion Along a Straight Line",
     "desc": "변위·속도·가속도, x–t·v–t·a–t 그래프, 등가속도 운동, 자유 낙하, 미적분으로 본 운동.",
     "tags": [
      "운동학",
      "그래프"
     ]
    },
    {
     "slug": "motion-2d",
     "num": "03",
     "title": "평면 운동",
     "en": "Motion in Two and Three Dimensions",
     "desc": "위치·속도·가속도 벡터, 포물선 운동, 등속 원운동과 구심 가속도, 상대 속도.",
     "tags": [
      "포물선",
      "원운동"
     ]
    },
    {
     "slug": "newtons-laws",
     "num": "04",
     "title": "뉴턴의 운동 법칙",
     "en": "Newton's Laws of Motion",
     "desc": "힘과 상호작용, 관성, F = ma, 작용–반작용, 질량과 무게, 자유 물체도.",
     "tags": [
      "힘",
      "자유 물체도"
     ]
    },
    {
     "slug": "applying-newton",
     "num": "05",
     "title": "뉴턴 법칙의 응용",
     "en": "Applying Newton's Laws",
     "desc": "평형과 가속 운동, 경사면, 도르래·연결된 물체, 마찰력, 공기 저항과 종단 속도, 원운동의 동역학.",
     "tags": [
      "마찰",
      "경사면"
     ]
    }
   ]
  },
  {
   "title": "제2부 에너지와 운동량",
   "semester": 1,
   "chapters": [
    {
     "slug": "work-energy",
     "num": "06",
     "title": "일과 운동 에너지",
     "en": "Work and Kinetic Energy",
     "desc": "일의 정의, 일–에너지 정리, 변하는 힘이 하는 일, 용수철, 일률.",
     "tags": [
      "일",
      "에너지"
     ]
    },
    {
     "slug": "energy-conservation",
     "num": "07",
     "title": "퍼텐셜 에너지와 에너지 보존",
     "en": "Potential Energy and Energy Conservation",
     "desc": "중력·탄성 퍼텐셜 에너지, 보존력과 비보존력, 에너지 그래프와 평형, 역학적 에너지 보존.",
     "tags": [
      "보존",
      "퍼텐셜"
     ]
    },
    {
     "slug": "momentum",
     "num": "08",
     "title": "운동량, 충격량, 충돌",
     "en": "Momentum, Impulse, and Collisions",
     "desc": "운동량과 충격량, 운동량 보존, 탄성·비탄성 충돌, 2차원 충돌, 질량 중심, 로켓 추진.",
     "tags": [
      "충돌",
      "질량 중심"
     ]
    }
   ]
  },
  {
   "title": "제3부 회전과 중력",
   "semester": 1,
   "chapters": [
    {
     "slug": "rotation-kinematics",
     "num": "09",
     "title": "강체의 회전",
     "en": "Rotation of Rigid Bodies",
     "desc": "각변위·각속도·각가속도, 선속도와의 관계, 회전 운동 에너지, 관성 모멘트와 평행축 정리.",
     "tags": [
      "회전",
      "관성 모멘트"
     ]
    },
    {
     "slug": "rotation-dynamics",
     "num": "10",
     "title": "회전 동역학과 각운동량",
     "en": "Dynamics of Rotational Motion",
     "desc": "토크, τ = Iα, 구름 운동, 회전의 일과 일률, 각운동량과 그 보존, 자이로스코프와 세차 운동.",
     "tags": [
      "토크",
      "각운동량"
     ]
    },
    {
     "slug": "equilibrium-elasticity",
     "num": "11",
     "title": "평형과 탄성",
     "en": "Equilibrium and Elasticity",
     "desc": "강체 평형 조건, 무게 중심, 정적 평형 문제, 응력·변형률과 탄성률, 소성과 파괴.",
     "tags": [
      "평형",
      "탄성"
     ]
    },
    {
     "slug": "gravitation",
     "num": "12",
     "title": "중력",
     "en": "Gravitation",
     "desc": "만유인력 법칙, 중력장, 중력 퍼텐셜 에너지와 탈출 속도, 위성 궤도, 케플러 법칙, 구 껍질 정리.",
     "tags": [
      "중력",
      "궤도"
     ]
    }
   ]
  },
  {
   "title": "제4부 진동, 유체, 파동",
   "semester": 1,
   "chapters": [
    {
     "slug": "oscillations",
     "num": "13",
     "title": "진동",
     "en": "Periodic Motion",
     "desc": "단순 조화 운동, 에너지, 원운동과의 관계, 진자(단진자·물리 진자), 감쇠 진동, 강제 진동과 공명.",
     "tags": [
      "진동",
      "공명"
     ]
    },
    {
     "slug": "fluids",
     "num": "14",
     "title": "유체 역학",
     "en": "Fluid Mechanics",
     "desc": "밀도와 압력, 파스칼 원리, 부력과 아르키메데스 원리, 연속 방정식, 베르누이 방정식, 점성.",
     "tags": [
      "압력",
      "베르누이"
     ]
    },
    {
     "slug": "mechanical-waves",
     "num": "15",
     "title": "역학적 파동",
     "en": "Mechanical Waves",
     "desc": "횡파와 종파, 파동 함수, 줄의 파동 속력, 파동의 에너지, 중첩과 간섭, 정상파와 고유 진동.",
     "tags": [
      "파동",
      "정상파"
     ]
    },
    {
     "slug": "sound",
     "num": "16",
     "title": "소리와 청각",
     "en": "Sound and Hearing",
     "desc": "음파와 압력, 소리의 세기와 데시벨, 관의 정상파, 맥놀이, 도플러 효과, 충격파.",
     "tags": [
      "음파",
      "도플러"
     ]
    }
   ]
  },
  {
   "title": "제5부 열역학",
   "semester": 1,
   "chapters": [
    {
     "slug": "temperature-heat",
     "num": "17",
     "title": "온도와 열",
     "en": "Temperature and Heat",
     "desc": "온도와 열평형, 열팽창, 열용량과 비열, 상변화와 잠열, 전도·대류·복사.",
     "tags": [
      "열",
      "열전달"
     ]
    },
    {
     "slug": "kinetic-theory-first-law",
     "num": "18",
     "title": "기체 분자 운동론과 열역학 제1법칙",
     "en": "Kinetic Theory and the First Law",
     "desc": "이상 기체, 분자 운동론과 온도, 에너지 등분배, 열과 일, 내부 에너지, 등압·등적·등온·단열 과정.",
     "tags": [
      "기체",
      "제1법칙"
     ]
    },
    {
     "slug": "second-law",
     "num": "19",
     "title": "열역학 제2법칙",
     "en": "The Second Law of Thermodynamics",
     "desc": "가역·비가역 과정, 열기관과 효율, 냉동기, 카르노 순환, 엔트로피와 미시 상태.",
     "tags": [
      "열기관",
      "엔트로피"
     ]
    }
   ]
  },
  {
   "title": "제6부 전기",
   "semester": 2,
   "chapters": [
    {
     "slug": "electric-field",
     "num": "20",
     "title": "전하와 전기장",
     "en": "Electric Charge and Electric Field",
     "desc": "전하와 대전, 쿨롱 법칙, 전기장과 전기력선, 연속 전하 분포, 전기 쌍극자.",
     "tags": [
      "쿨롱",
      "전기장"
     ]
    },
    {
     "slug": "gauss-law",
     "num": "21",
     "title": "가우스 법칙",
     "en": "Gauss's Law",
     "desc": "전기 선속, 가우스 법칙, 대칭을 이용한 전기장 계산, 도체의 전하와 전기장.",
     "tags": [
      "선속",
      "대칭"
     ],
     "status": "planned"
    },
    {
     "slug": "electric-potential",
     "num": "22",
     "title": "전위",
     "en": "Electric Potential",
     "desc": "전기 퍼텐셜 에너지, 전위와 등전위면, 전위 기울기와 전기장, 전하 분포의 전위.",
     "tags": [
      "전위",
      "등전위"
     ],
     "status": "planned"
    },
    {
     "slug": "capacitance",
     "num": "23",
     "title": "축전기와 유전체",
     "en": "Capacitance and Dielectrics",
     "desc": "전기 용량, 평행판 축전기, 직렬·병렬 연결, 저장 에너지와 에너지 밀도, 유전체와 분극.",
     "tags": [
      "축전기",
      "유전체"
     ],
     "status": "planned"
    },
    {
     "slug": "current-circuits",
     "num": "24",
     "title": "전류와 직류 회로",
     "en": "Current, Resistance, and DC Circuits",
     "desc": "전류와 전류 밀도, 저항과 옴의 법칙, 기전력과 내부 저항, 키르히호프 법칙, RC 회로.",
     "tags": [
      "회로",
      "키르히호프"
     ],
     "status": "planned"
    }
   ]
  },
  {
   "title": "제7부 자기와 전자기 유도",
   "semester": 2,
   "chapters": [
    {
     "slug": "magnetic-force",
     "num": "25",
     "title": "자기장과 자기력",
     "en": "Magnetic Field and Magnetic Forces",
     "desc": "자기장과 자기력선, 운동하는 전하가 받는 힘, 사이클로트론과 질량 분석기, 도선과 고리에 작용하는 힘·토크, 직류 전동기, 홀 효과.",
     "tags": [
      "로런츠 힘",
      "전동기"
     ],
     "status": "planned"
    },
    {
     "slug": "magnetic-sources",
     "num": "26",
     "title": "자기장의 원천",
     "en": "Sources of Magnetic Field",
     "desc": "비오–사바르 법칙, 직선 도선·원형 고리의 자기장, 평행 도선 사이의 힘, 앙페르 법칙, 솔레노이드, 자성체.",
     "tags": [
      "비오–사바르",
      "앙페르"
     ],
     "status": "planned"
    },
    {
     "slug": "induction",
     "num": "27",
     "title": "전자기 유도와 인덕턴스",
     "en": "Electromagnetic Induction and Inductance",
     "desc": "패러데이 법칙, 렌츠 법칙, 운동 기전력, 유도 전기장과 맴돌이 전류, 자체·상호 인덕턴스, RL·LC 회로.",
     "tags": [
      "패러데이",
      "인덕턴스"
     ],
     "status": "planned"
    },
    {
     "slug": "ac-circuits",
     "num": "28",
     "title": "교류 회로",
     "en": "Alternating Current",
     "desc": "페이저, 저항·인덕터·축전기의 리액턴스, RLC 직렬 회로와 임피던스, 공명, 교류 전력, 변압기.",
     "tags": [
      "교류",
      "공명"
     ],
     "status": "planned"
    },
    {
     "slug": "em-waves",
     "num": "29",
     "title": "전자기파",
     "en": "Electromagnetic Waves",
     "desc": "맥스웰 방정식, 평면 전자기파, 빛의 속력, 에너지와 포인팅 벡터, 복사압, 전자기 스펙트럼, 편광.",
     "tags": [
      "맥스웰",
      "편광"
     ],
     "status": "planned"
    }
   ]
  },
  {
   "title": "제8부 빛과 현대 물리",
   "semester": 2,
   "chapters": [
    {
     "slug": "geometric-optics",
     "num": "30",
     "title": "빛과 기하 광학",
     "en": "Light and Geometric Optics",
     "desc": "반사와 굴절, 전반사와 분산, 평면·구면 거울, 얇은 렌즈와 상, 광학 기기(눈·확대경·망원경).",
     "tags": [
      "굴절",
      "렌즈"
     ],
     "status": "planned"
    },
    {
     "slug": "interference-diffraction",
     "num": "31",
     "title": "간섭과 회절",
     "en": "Interference and Diffraction",
     "desc": "결맞음, 이중 슬릿, 박막 간섭, 단일 슬릿 회절, 회절 격자, 분해능.",
     "tags": [
      "간섭",
      "회절"
     ],
     "status": "planned"
    },
    {
     "slug": "relativity-quantum",
     "num": "32",
     "title": "상대성 이론과 양자 물리 입문",
     "en": "Relativity and an Introduction to Quantum Physics",
     "desc": "아인슈타인의 가정, 시간 팽창과 길이 수축, 로런츠 변환, 상대론적 운동량·에너지, 광자와 광전 효과, 물질파.",
     "tags": [
      "상대성",
      "양자"
     ],
     "status": "planned"
    }
   ]
  },
  {
   "title": "부록",
   "appendix": true,
   "chapters": [
    {
     "slug": "math-tools",
     "num": "A",
     "title": "물리를 위한 수학 도구",
     "en": "Math Tools for Physics",
     "desc": "삼각함수, 벡터, 미분과 적분, 테일러 근사, 미분 방정식을 그림과 실험으로 복습한다.",
     "tags": [
      "부록",
      "수학"
     ],
     "status": "planned"
    },
    {
     "slug": "constants-units",
     "num": "B",
     "title": "상수와 단위",
     "en": "Constants and Units",
     "desc": "기본 상수, SI 단위와 접두사, 단위 환산, 천문·지구 자료, 물질의 성질.",
     "tags": [
      "부록",
      "데이터"
     ]
    },
    {
     "slug": "glossary",
     "num": "C",
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
  "units-vectors": {
   "problems": 15,
   "examples": 7,
   "sims": 5,
   "figures": 9,
   "drills": 2,
   "minis": 3,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "straight-line-motion": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 10,
   "drills": 2,
   "minis": 5,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "motion-2d": {
   "problems": 13,
   "examples": 5,
   "sims": 4,
   "figures": 5,
   "drills": 2,
   "minis": 3,
   "tangles": 2,
   "steps": 2,
   "predicts": 2,
   "hero": 1
  },
  "newtons-laws": {
   "problems": 14,
   "examples": 6,
   "sims": 6,
   "figures": 9,
   "drills": 3,
   "minis": 4,
   "tangles": 2,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "applying-newton": {
   "problems": 15,
   "examples": 8,
   "sims": 7,
   "figures": 8,
   "drills": 2,
   "minis": 3,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "work-energy": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 8,
   "drills": 2,
   "minis": 3,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "energy-conservation": {
   "problems": 15,
   "examples": 7,
   "sims": 5,
   "figures": 9,
   "drills": 2,
   "minis": 4,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "momentum": {
   "problems": 18,
   "examples": 10,
   "sims": 6,
   "figures": 11,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "rotation-kinematics": {
   "problems": 15,
   "examples": 8,
   "sims": 4,
   "figures": 9,
   "drills": 2,
   "minis": 4,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "rotation-dynamics": {
   "problems": 16,
   "examples": 9,
   "sims": 7,
   "figures": 10,
   "drills": 2,
   "minis": 3,
   "tangles": 5,
   "steps": 4,
   "predicts": 5,
   "hero": 1
  },
  "equilibrium-elasticity": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 8,
   "drills": 2,
   "minis": 3,
   "tangles": 2,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "gravitation": {
   "problems": 15,
   "examples": 12,
   "sims": 6,
   "figures": 10,
   "drills": 2,
   "minis": 4,
   "tangles": 5,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "oscillations": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 10,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "fluids": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 11,
   "drills": 2,
   "minis": 3,
   "tangles": 4,
   "steps": 4,
   "predicts": 4,
   "hero": 1
  },
  "mechanical-waves": {
   "problems": 15,
   "examples": 5,
   "sims": 6,
   "figures": 9,
   "drills": 2,
   "minis": 3,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "sound": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 10,
   "drills": 2,
   "minis": 5,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "temperature-heat": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 10,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "kinetic-theory-first-law": {
   "problems": 14,
   "examples": 8,
   "sims": 4,
   "figures": 8,
   "drills": 2,
   "minis": 3,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "second-law": {
   "problems": 15,
   "examples": 8,
   "sims": 4,
   "figures": 8,
   "drills": 2,
   "minis": 3,
   "tangles": 3,
   "steps": 2,
   "predicts": 2,
   "hero": 1
  },
  "electric-field": {
   "problems": 15,
   "examples": 7,
   "sims": 4,
   "figures": 8,
   "drills": 2,
   "minis": 3,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "constants-units": {
   "problems": 0,
   "examples": 0,
   "sims": 1,
   "figures": 0,
   "drills": 0,
   "minis": 0,
   "tangles": 1,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "glossary": {
   "problems": 0,
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
 "published": 22,
 "total": 35,
 "url": "https://science.euiyun.com/general-physics/",
 "glossary": {
  "version": 1,
  "terms": [
   {
    "ko": "pV 도표",
    "en": "pV diagram",
    "abbr": "",
    "def": "상태를 나타낼 때는 가로축 \\(V\\), 세로축 \\(p\\)의 pV 도표(pV diagram)를 많이 쓴다.",
    "chapters": [
     "kinetic-theory-first-law#ideal-gas"
    ]
   },
   {
    "ko": "가속도",
    "en": "acceleration",
    "abbr": "",
    "def": "속도가 바뀌는 빠르기가 가속도(acceleration)다.",
    "chapters": [
     "straight-line-motion#acceleration"
    ]
   },
   {
    "ko": "가역 과정",
    "en": "reversible process",
    "abbr": "",
    "def": "반대로 계와 주위를 모두 처음 상태로 되돌릴 수 있는 과정은 가역 과정(reversible process)이다.",
    "chapters": [
     "second-law#irreversible"
    ]
   },
   {
    "ko": "가청 문턱",
    "en": "threshold of hearing",
    "abbr": "",
    "def": "\\(\\beta = (10\\ \\text{dB})\\log_{10}\\dfrac{I}{I_0}\\), \\(I_0 = 10^{-12}\\) W/m²(1 kHz에서 들을 수 있는 가장 약한 소리, 가청 문턱(threshold of hearing)). 세기가 10배면 +10 dB, 2배면 +3.0 dB이다.",
    "chapters": [
     "sound#intensity"
    ]
   },
   {
    "ko": "가청 진동수",
    "en": "audible range",
    "abbr": "",
    "def": "사람이 들을 수 있는 진동수는 대략 20 Hz–20 kHz(가청 진동수(audible range))이고, 그보다 낮으면 초저주파(infrasound), 높으면 초음파(ultrasound)라 한다.",
    "chapters": [
     "sound#sound-waves"
    ]
   },
   {
    "ko": "각가속도",
    "en": "angular acceleration",
    "abbr": "",
    "def": "각속도(angular velocity) \\(\\omega_z = d\\theta/dt\\) (rad/s), 각가속도(angular acceleration) \\(\\alpha_z = d\\omega_z/dt\\) (rad/s²). 축에서 보아 반시계 방향을 +로 잡는다.",
    "chapters": [
     "rotation-kinematics#angular"
    ]
   },
   {
    "ko": "각속도",
    "en": "angular velocity",
    "abbr": "",
    "def": "각속도(angular velocity) \\(\\omega_z = d\\theta/dt\\) (rad/s), 각가속도(angular acceleration) \\(\\alpha_z = d\\omega_z/dt\\) (rad/s²). 축에서 보아 반시계 방향을 +로 잡는다.",
    "chapters": [
     "rotation-kinematics#angular"
    ]
   },
   {
    "ko": "각운동량",
    "en": "angular momentum",
    "abbr": "",
    "def": "선운동량 \\(\\vec p = m\\vec v\\)의 회전판이 각운동량(angular momentum)이다.",
    "chapters": [
     "rotation-dynamics#angmom"
    ]
   },
   {
    "ko": "각진동수",
    "en": "angular frequency",
    "abbr": "",
    "def": "진폭(amplitude) \\(A\\): 평형에서 최대 변위의 크기(항상 양수). 주기(period) \\(T\\): 한 번 왕복하는 데 걸리는 시간. 진동수(frequency) \\(f = 1/T\\): 1초당 왕복 횟수(단위 Hz = s⁻¹). 각진동수(angular frequency) \\(\\omega = 2\\pi f\\)(rad/s).",
    "chapters": [
     "oscillations#describe"
    ]
   },
   {
    "ko": "감쇠 상수",
    "en": "damping constant",
    "abbr": "",
    "def": "저항력이 속도에 비례한다고 하자: \\(F = -bv\\)(\\(b\\): 감쇠 상수(damping constant), kg/s). 운동 방정식은 \\(m\\ddot x + b\\dot x + kx = 0\\)이고, 감쇠가 너무 크지 않으면 해는.",
    "chapters": [
     "oscillations#damped"
    ]
   },
   {
    "ko": "강제 진동",
    "en": "forced oscillation",
    "abbr": "",
    "def": "이것이 강제 진동(forced oscillation)이다.",
    "chapters": [
     "oscillations#resonance"
    ]
   },
   {
    "ko": "강체",
    "en": "rigid body",
    "abbr": "",
    "def": "강체(rigid body)는 모양과 크기가 변하지 않는 물체다.",
    "chapters": [
     "rotation-kinematics#angular"
    ]
   },
   {
    "ko": "겉보기 무게",
    "en": "apparent weight",
    "abbr": "",
    "def": "유체에 전부 또는 일부가 잠긴 물체는 밀려난 유체의 무게와 같은 크기의 위쪽 힘(부력)을 받는다(아르키메데스 원리(Archimedes' principle)). $$B = \\rho_\\text{유체}\\,V_\\text{잠김}\\,g, \\qquad \\text{떠 있을 때:}\\ \\ \\frac{V_\\text{잠김}}{V} = \\frac{\\rho_\\text{물체}}{\\rho_\\text{유체}}$$떠 있는 물체는 \\(B = W\\)이므로…",
    "chapters": [
     "fluids#buoyancy"
    ]
   },
   {
    "ko": "경로차",
    "en": "path difference",
    "abbr": "",
    "def": "두 음원까지의 거리를 \\(r_1\\), \\(r_2\\)라 할 때 경로차(path difference) \\(\\Delta r = |r_2 - r_1|\\)이 파장의 정수배면 마루와 마루가 만나 보강 간섭(constructive interference), 반정수배면 마루와 골이 만나 상쇄 간섭(destructive interference)이 된다.",
    "chapters": [
     "sound#interference"
    ]
   },
   {
    "ko": "경사진 커브",
    "en": "banked curve",
    "abbr": "",
    "def": "도로를 안쪽으로 기울이면(경사진 커브(banked curve)) 수직항력의 수평 성분이 중심을 향해 마찰 없이도 돌 수 있다.",
    "chapters": [
     "applying-newton#circular-dynamics"
    ]
   },
   {
    "ko": "계",
    "en": "system",
    "abbr": "",
    "def": "열역학에서는 관심 있는 물체(대개 기체)를 계(system), 나머지를 주위(surroundings)라 한다.",
    "chapters": [
     "kinetic-theory-first-law#first-law"
    ]
   },
   {
    "ko": "계기 압력",
    "en": "gauge pressure",
    "abbr": "",
    "def": "이것을 계기 압력(gauge pressure) \\(p - p_\\text{atm}\\)이라 하고, 진공을 기준으로 잰 \\(p\\)를 절대 압력(absolute pressure)이라 한다.",
    "chapters": [
     "fluids#pressure"
    ]
   },
   {
    "ko": "고립계",
    "en": "isolated system",
    "abbr": "",
    "def": "계에 작용하는 외력의 합이 0이면(고립계(isolated system)) 계의 전체 운동량은 일정하다: \\(\\vec P = \\vec p_A + \\vec p_B + \\cdots = \\text{일정}\\). 성분별로도 성립하므로, 한 방향의 외력만 0이어도 그 성분은 보존된다.",
    "chapters": [
     "momentum#conservation"
    ]
   },
   {
    "ko": "고정단",
    "en": "fixed end",
    "abbr": "",
    "def": "끝이 벽에 묶인 고정단(fixed end)에서는 줄이 벽을 위로 당기고, 벽은 반작용으로 줄을 아래로 당긴다.",
    "chapters": [
     "mechanical-waves#superposition"
    ]
   },
   {
    "ko": "공명",
    "en": "resonance",
    "abbr": "",
    "def": "정상 상태의 진폭은 $$A(\\omega_d) = \\frac{F_0}{\\sqrt{(k - m\\omega_d^2)^2 + b^2\\omega_d^2}}$$\\(\\omega_d\\)가 고유 진동수 \\(\\omega_0 = \\sqrt{k/m}\\) 근처일 때 진폭이 크게 커진다 — 공명(resonance). 공명 때 진폭은 약 \\(F_0/(b\\omega_0)\\)로, 감쇠가 작을수록 크고 뾰족하다.",
    "chapters": [
     "oscillations#resonance"
    ]
   },
   {
    "ko": "과감쇠",
    "en": "overdamping",
    "abbr": "",
    "def": "과감쇠(overdamping) \\(b > 2\\sqrt{km}\\): 진동하지 않고 느리게 기어 들어간다.",
    "chapters": [
     "oscillations#damped"
    ]
   },
   {
    "ko": "관성",
    "en": "inertia",
    "abbr": "",
    "def": "물체가 운동 상태를 유지하려는 성질을 관성(inertia)이라 한다.",
    "chapters": [
     "newtons-laws#first-law"
    ]
   },
   {
    "ko": "관성 기준틀",
    "en": "inertial frame of reference",
    "abbr": "",
    "def": "뉴턴 제1법칙이 성립하는 기준틀을 관성 기준틀(inertial frame of reference)이라 한다.",
    "chapters": [
     "newtons-laws#first-law"
    ]
   },
   {
    "ko": "관성 모멘트",
    "en": "moment of inertia",
    "abbr": "",
    "def": "각 조각 \\(m_i\\)의 속력이 \\(r_i\\omega\\)이므로 모두 더하면 $$K = \\sum_i\\tfrac12 m_i(r_i\\omega)^2 = \\tfrac12\\Big(\\sum_i m_i r_i^2\\Big)\\omega^2 = \\tfrac12 I\\omega^2$$\\(I = \\sum m_i r_i^2\\)를 관성 모멘트(moment of inertia)라 한다(단위 kg·m²). 직선 운동의 질량 역할을 한다:…",
    "chapters": [
     "rotation-kinematics#rot-energy"
    ]
   },
   {
    "ko": "광년",
    "en": "light-year, ly",
    "abbr": "",
    "def": "1 광년(light-year, ly)은 빛이 1 율리우스년(365.25일) 동안 가는 거리다.",
    "chapters": [
     "units-vectors#units"
    ]
   },
   {
    "ko": "구 껍질 정리",
    "en": "shell theorem",
    "abbr": "",
    "def": "이를 구 껍질 정리(shell theorem)라 한다.",
    "chapters": [
     "gravitation#shell"
    ]
   },
   {
    "ko": "구심 가속도",
    "en": "centripetal acceleration",
    "abbr": "",
    "def": "시간 \\(\\Delta t\\) 동안 속도가 각 \\(\\Delta\\theta\\)만큼 돌아가면 \\(|\\Delta\\vec v| \\approx v\\,\\Delta\\theta\\)이고, \\(\\Delta\\theta = v\\Delta t/r\\)이므로 $$a_\\text{rad} = \\frac{v^2}{r} = \\frac{4\\pi^2 r}{T^2} = \\omega^2 r \\qquad (\\text{방향: 원의 중심})$$\\(T\\): 주기(한…",
    "chapters": [
     "motion-2d#circular"
    ]
   },
   {
    "ko": "국제단위계",
    "en": "International System of Units, SI",
    "abbr": "",
    "def": "과학과 공학은 국제단위계(International System of Units, SI)를 쓴다.",
    "chapters": [
     "units-vectors#units"
    ]
   },
   {
    "ko": "극한 강도",
    "en": "ultimate strength",
    "abbr": "",
    "def": "곡선의 최고점이 극한 강도(ultimate strength)이고, 그 뒤 시편은 가운데가 잘록해지며(넥킹) 결국 파괴(fracture)된다.",
    "chapters": [
     "equilibrium-elasticity#plastic"
    ]
   },
   {
    "ko": "기본 전하",
    "en": "elementary charge",
    "abbr": "",
    "def": "전하의 양자화(quantization of charge): 모든 물체의 전하는 기본 전하(elementary charge) \\(e = 1.602\\times10^{-19}\\) C의 정수배다.",
    "chapters": [
     "electric-field#charge"
    ]
   },
   {
    "ko": "기본 진동수",
    "en": "fundamental frequency",
    "abbr": "",
    "def": "$$\\lambda_n = \\frac{2L}{n}, \\qquad f_n = n\\frac{v}{2L} = \\frac{n}{2L}\\sqrt{\\frac{F}{\\mu}} \\qquad (n = 1, 2, 3, \\ldots)$$\\(f_1\\): 기본 진동수(fundamental frequency). \\(f_n = nf_1\\)을 배음(harmonics)이라 하고, 이 진동 양식들을 줄의 정규 모드(normal modes)라 한다.",
    "chapters": [
     "mechanical-waves#standing"
    ]
   },
   {
    "ko": "기준원",
    "en": "reference circle",
    "abbr": "",
    "def": "이 원을 기준원(reference circle)이라 한다.",
    "chapters": [
     "oscillations#shm"
    ]
   },
   {
    "ko": "기체 분자 운동론",
    "en": "kinetic theory of gases",
    "abbr": "",
    "def": "기체가 끊임없이 움직이는 분자들의 모임이라는 그림 — 기체 분자 운동론(kinetic theory of gases) — 으로 이 식을 설명할 수 있을까? 다음을 가정한다.",
    "chapters": [
     "kinetic-theory-first-law#kinetic"
    ]
   },
   {
    "ko": "기체 상수",
    "en": "gas constant",
    "abbr": "",
    "def": "$$pV = nRT = NkT$$\\(n\\): 몰수, \\(N = nN_A\\): 분자 수, \\(T\\): 켈빈 온도. 기체 상수(gas constant) \\(R = 8.314\\) J/(mol·K), 볼츠만 상수(Boltzmann constant) \\(k = R/N_A = 1.381\\times10^{-23}\\) J/K, \\(N_A = 6.022\\times10^{23}\\) mol⁻¹. 질량 \\(m_\\text{tot}\\), 몰…",
    "chapters": [
     "kinetic-theory-first-law#ideal-gas"
    ]
   },
   {
    "ko": "기화열",
    "en": "heat of vaporization",
    "abbr": "",
    "def": "$$Q = \\pm mL$$녹음·끓음(+), 얼음·응결(−). 물: 융해열(heat of fusion) \\(L_f = 3.34\\times10^5\\) J/kg, 기화열(heat of vaporization) \\(L_v = 2.256\\times10^6\\) J/kg(1 atm, 100 °C). 물 1 kg을 끓여 없애는 열로 같은 물을 0 °C에서 100 °C까지 5번 넘게 데울 수 있다.",
    "chapters": [
     "temperature-heat#phase"
    ]
   },
   {
    "ko": "난류",
    "en": "turbulent flow",
    "abbr": "",
    "def": "흐름이 충분히 빨라지면 매끈한 층류가 깨져 불규칙하게 소용돌이치는 난류(turbulent flow)가 된다.",
    "chapters": [
     "fluids#viscosity"
    ]
   },
   {
    "ko": "내력",
    "en": "internal force",
    "abbr": "",
    "def": "계 안의 물체끼리 주고받는 힘을 내력(internal force), 계 밖에서 오는 힘을 외력(external force)이라 한다.",
    "chapters": [
     "momentum#conservation"
    ]
   },
   {
    "ko": "내부 에너지",
    "en": "internal energy",
    "abbr": "",
    "def": "$$K_1 + U_1 + W_\\text{other} = K_2 + U_2, \\qquad W_\\text{other} = -\\Delta U_\\text{int}\\ (\\text{운동 마찰일 때})$$\\(W_\\text{other}\\): 보존력이 아닌 힘(마찰, 사람의 손, 엔진)이 한 일. 마찰이 빼앗은 역학적 에너지는 물체와 바닥의 내부 에너지(internal energy)로 바뀐다(온도 상승). 이를 포함하면 전체 에너지는…",
    "chapters": [
     "energy-conservation#conservative"
    ]
   },
   {
    "ko": "냉동기",
    "en": "refrigerator",
    "abbr": "",
    "def": "열기관을 거꾸로 돌리면 일을 받아 차가운 곳에서 열을 퍼내 뜨거운 곳으로 버리는 냉동기(refrigerator)가 된다.",
    "chapters": [
     "second-law#refrigerators"
    ]
   },
   {
    "ko": "뉴턴",
    "en": "newton",
    "abbr": "",
    "def": "힘은 언제나 \"누가 누구에게\" 가하는 것이다 — 손이 상자에, 지구가 사과에, 줄이 양동이에. 힘의 SI 단위는 뉴턴(newton), \\(1\\ \\text{N} = 1\\ \\text{kg·m/s}^2\\)이다.",
    "chapters": [
     "newtons-laws#forces"
    ]
   },
   {
    "ko": "단순 조화 운동",
    "en": "simple harmonic motion, SHM",
    "abbr": "",
    "def": "이 경우의 진동을 단순 조화 운동(simple harmonic motion, SHM)이라 한다.",
    "chapters": [
     "oscillations#describe"
    ]
   },
   {
    "ko": "단열 과정",
    "en": "adiabatic process",
    "abbr": "",
    "def": "과정조건일 W내부 에너지 ΔU열 Q 등적 과정(isochoric process)V 일정0\\(nC_V\\Delta T\\)\\(nC_V\\Delta T\\) 등압 과정(isobaric process)p 일정\\(p\\Delta V = nR\\Delta T\\)\\(nC_V\\Delta T\\)\\(nC_p\\Delta T\\) 등온 과정(isothermal process)T 일정\\(nRT\\ln(V_2/V_1)\\)0\\(Q = W\\) 단열…",
    "chapters": [
     "kinetic-theory-first-law#processes"
    ]
   },
   {
    "ko": "단위 벡터",
    "en": "unit vector",
    "abbr": "",
    "def": "크기가 1이고 방향만 나타내는 벡터를 단위 벡터(unit vector)라 한다.",
    "chapters": [
     "units-vectors#vectors"
    ]
   },
   {
    "ko": "단진자",
    "en": "simple pendulum",
    "abbr": "",
    "def": "길이 \\(L\\)인 가벼운 줄 끝에 작은 추를 단 단진자(simple pendulum)를 생각하자. 복원력은 중력의 접선 성분 \\(-mg\\sin\\theta\\)이고, 호의 길이는 \\(s = L\\theta\\)이다.",
    "chapters": [
     "oscillations#pendulum"
    ]
   },
   {
    "ko": "대기압",
    "en": "atmospheric pressure",
    "abbr": "",
    "def": "해수면의 대기압(atmospheric pressure)은 평균 \\(p_\\text{atm} = 1.013\\times10^5\\) Pa = 1 atm이다 — 손바닥(약 0.01 m²) 위에 1000 N, 즉 100 kg짜리 물체가 얹힌 것과 같은 힘이다.",
    "chapters": [
     "fluids#pressure"
    ]
   },
   {
    "ko": "대류",
    "en": "convection",
    "abbr": "",
    "def": "전도(conduction)는 물질 자체는 움직이지 않고 이웃 원자·자유 전자의 충돌로 에너지가 전해지는 것, 대류(convection)는 데워진 유체가 직접 흘러가는 것, 복사(radiation)는 전자기파로 옮겨 가는 것이다.",
    "chapters": [
     "temperature-heat#conduction"
    ]
   },
   {
    "ko": "데시벨",
    "en": "decibel",
    "abbr": "",
    "def": "단위 dB는 데시벨(decibel)이다.",
    "chapters": [
     "sound#intensity"
    ]
   },
   {
    "ko": "도체",
    "en": "conductor",
    "abbr": "",
    "def": "금속처럼 전자 일부가 원자에 묶이지 않고 물질 속을 자유롭게 움직이는 물질이 도체(conductor), 유리·플라스틱·고무처럼 전자가 원자에 단단히 묶인 물질이 절연체(insulator)다.",
    "chapters": [
     "electric-field#charge"
    ]
   },
   {
    "ko": "도플러 효과",
    "en": "Doppler effect",
    "abbr": "",
    "def": "음원이나 관찰자가 매질에 대해 움직일 때 들리는 진동수가 달라지는 현상이 도플러 효과(Doppler effect)다.",
    "chapters": [
     "sound#doppler"
    ]
   },
   {
    "ko": "뒬롱–프티 법칙",
    "en": "rule of Dulong and Petit",
    "abbr": "",
    "def": "17장에서 본 금속들의 몰 열용량이 약 25 J/(mol·K)로 같았던 뒬롱–프티 법칙(rule of Dulong and Petit)이 바로 이것이다.",
    "chapters": [
     "kinetic-theory-first-law#equipartition"
    ]
   },
   {
    "ko": "등속 원운동",
    "en": "uniform circular motion",
    "abbr": "",
    "def": "반지름 \\(r\\)인 원을 일정한 속력 \\(v\\)로 도는 운동을 등속 원운동(uniform circular motion)이라 한다.",
    "chapters": [
     "motion-2d#circular"
    ]
   },
   {
    "ko": "등시성",
    "en": "isochronism",
    "abbr": "",
    "def": "단진자가 (근사적으로) 단순 조화 운동인 이유. $$\\omega = \\sqrt{\\frac{g}{L}}, \\qquad T = 2\\pi\\sqrt{\\frac{L}{g}} \\qquad(\\text{작은 진폭})$$질량과 진폭에 무관하다(갈릴레이가 성당의 샹들리에에서 발견한 등시성(isochronism)). 정확한 주기는 진폭 \\(\\theta_0\\)가 클수록 길어진다:…",
    "chapters": [
     "oscillations#pendulum"
    ]
   },
   {
    "ko": "등압 과정",
    "en": "isobaric process",
    "abbr": "",
    "def": "과정조건일 W내부 에너지 ΔU열 Q 등적 과정(isochoric process)V 일정0\\(nC_V\\Delta T\\)\\(nC_V\\Delta T\\) 등압 과정(isobaric process)p 일정\\(p\\Delta V = nR\\Delta T\\)\\(nC_V\\Delta T\\)\\(nC_p\\Delta T\\) 등온 과정(isothermal process)T 일정\\(nRT\\ln(V_2/V_1)\\)0\\(Q = W\\) 단열…",
    "chapters": [
     "kinetic-theory-first-law#processes"
    ]
   },
   {
    "ko": "등온 과정",
    "en": "isothermal process",
    "abbr": "",
    "def": "과정조건일 W내부 에너지 ΔU열 Q 등적 과정(isochoric process)V 일정0\\(nC_V\\Delta T\\)\\(nC_V\\Delta T\\) 등압 과정(isobaric process)p 일정\\(p\\Delta V = nR\\Delta T\\)\\(nC_V\\Delta T\\)\\(nC_p\\Delta T\\) 등온 과정(isothermal process)T 일정\\(nRT\\ln(V_2/V_1)\\)0\\(Q = W\\) 단열…",
    "chapters": [
     "kinetic-theory-first-law#processes"
    ]
   },
   {
    "ko": "등온선",
    "en": "isotherm",
    "abbr": "",
    "def": "기체의 상태 하나는 이 평면의 점 하나이고, 온도가 같은 점들을 이은 곡선 \\(p = nRT/V\\)가 등온선(isotherm)이다.",
    "chapters": [
     "kinetic-theory-first-law#ideal-gas"
    ]
   },
   {
    "ko": "등적 과정",
    "en": "isochoric process",
    "abbr": "",
    "def": "과정조건일 W내부 에너지 ΔU열 Q 등적 과정(isochoric process)V 일정0\\(nC_V\\Delta T\\)\\(nC_V\\Delta T\\) 등압 과정(isobaric process)p 일정\\(p\\Delta V = nR\\Delta T\\)\\(nC_V\\Delta T\\)\\(nC_p\\Delta T\\) 등온 과정(isothermal process)T 일정\\(nRT\\ln(V_2/V_1)\\)0\\(Q = W\\) 단열…",
    "chapters": [
     "kinetic-theory-first-law#processes"
    ]
   },
   {
    "ko": "라디안",
    "en": "radian",
    "abbr": "",
    "def": "물리에서 각도는 라디안(radian)으로 잰다: 반지름 \\(r\\)인 원에서 호의 길이 \\(s\\)를 반지름으로 나눈 값이다.",
    "chapters": [
     "rotation-kinematics#angular"
    ]
   },
   {
    "ko": "레이놀즈 수",
    "en": "Reynolds number",
    "abbr": "",
    "def": "그 경계를 가늠하는 무차원 수가 레이놀즈 수(Reynolds number)이다.",
    "chapters": [
     "fluids#viscosity"
    ]
   },
   {
    "ko": "마디",
    "en": "node",
    "abbr": "",
    "def": "늘 정지한 점이 마디(N), 가장 크게 진동하는 점이 배(A)다.",
    "chapters": [
     "mechanical-waves#standing"
    ]
   },
   {
    "ko": "마찰각",
    "en": "angle of repose",
    "abbr": "",
    "def": "$$mg\\sin\\theta_c = \\mu_s mg\\cos\\theta_c \\quad\\Longrightarrow\\quad \\tan\\theta_c = \\mu_s, \\qquad a_\\text{미끄럼} = g(\\sin\\theta - \\mu_k\\cos\\theta)$$\\(\\theta_c\\)를 마찰각(angle of repose)이라 한다.",
    "chapters": [
     "applying-newton#friction"
    ]
   },
   {
    "ko": "마찰력",
    "en": "friction force",
    "abbr": "",
    "def": "두 면이 맞닿아 있을 때 면을 따라 작용하는 접촉력이 마찰력(friction force)이다.",
    "chapters": [
     "applying-newton#friction"
    ]
   },
   {
    "ko": "마하수",
    "en": "Mach number",
    "abbr": "",
    "def": "시간 \\(t\\) 동안 음원은 \\(v_S t\\), 그 사이 처음 낸 마루는 반지름 \\(vt\\)로 퍼지므로 원뿔의 반각 \\(\\alpha\\)는 $$\\sin\\alpha = \\frac{vt}{v_S t} = \\frac{v}{v_S} = \\frac{1}{\\text{Ma}}$$\\(\\text{Ma} = v_S/v\\): 마하수(Mach number). 원뿔이 지면을 쓸고 지나갈 때 들리는 \"쾅\" 소리가 음속 폭음(sonic…",
    "chapters": [
     "sound#doppler"
    ]
   },
   {
    "ko": "만유인력 법칙",
    "en": "law of universal gravitation",
    "abbr": "",
    "def": "이것이 뉴턴의 만유인력 법칙(law of universal gravitation)이다.",
    "chapters": [
     "gravitation#law"
    ]
   },
   {
    "ko": "매질",
    "en": "medium",
    "abbr": "",
    "def": "줄, 용수철, 물, 공기처럼 파동을 전달하는 물질을 매질(medium)이라 하고, 매질의 변형이 전달되는 파동을 역학적 파동(mechanical wave)이라 한다(빛 같은 전자기파는 매질이 필요 없다, 29장). 매질의 각 부분은 평형 위치 근처에서 진동할 뿐 파동과 함께 멀리 가지 않는다.",
    "chapters": [
     "mechanical-waves#types"
    ]
   },
   {
    "ko": "맥놀이",
    "en": "beats",
    "abbr": "",
    "def": "이것이 맥놀이(beats)다.",
    "chapters": [
     "sound#interference"
    ]
   },
   {
    "ko": "맥스웰–볼츠만 분포",
    "en": "Maxwell–Boltzmann distribution",
    "abbr": "",
    "def": "충돌을 거듭하며 평형에 이른 기체의 속력 분포는 맥스웰과 볼츠만이 구한 맥스웰–볼츠만 분포(Maxwell–Boltzmann distribution)를 따른다.",
    "chapters": [
     "kinetic-theory-first-law#kinetic"
    ]
   },
   {
    "ko": "모형",
    "en": "model",
    "abbr": "",
    "def": "그래서 물리학자는 본질만 남기고 나머지를 버린 단순한 그림, 즉 모형(model)을 만든다.",
    "chapters": [
     "units-vectors#models"
    ]
   },
   {
    "ko": "몰 열용량",
    "en": "molar heat capacity",
    "abbr": "",
    "def": "$$Q = mc\\,\\Delta T, \\qquad Q = nC\\,\\Delta T$$\\(c\\): 비열 [J/(kg·K)], \\(C = Mc\\): 몰 열용량(molar heat capacity) [J/(mol·K)]. \\(Q > 0\\)이면 열을 받는다.",
    "chapters": [
     "temperature-heat#heat-capacity"
    ]
   },
   {
    "ko": "무게",
    "en": "weight",
    "abbr": "",
    "def": "물체의 무게(weight)는 지구가 그 물체를 당기는 중력이다.",
    "chapters": [
     "newtons-laws#mass-weight"
    ]
   },
   {
    "ko": "무게 중심",
    "en": "center of gravity",
    "abbr": "",
    "def": "그 점이 무게 중심(center of gravity)이다.",
    "chapters": [
     "equilibrium-elasticity#cg"
    ]
   },
   {
    "ko": "물리 진자",
    "en": "physical pendulum",
    "abbr": "",
    "def": "크기가 있는 강체가 질량 중심이 아닌 회전축에 매달려 흔들리면 물리 진자(physical pendulum)다.",
    "chapters": [
     "oscillations#pendulum"
    ]
   },
   {
    "ko": "물리학",
    "en": "physics",
    "abbr": "",
    "def": "물리학(physics)은 자연 현상을 지배하는 가장 기본적인 규칙을 찾는 실험 과학이다.",
    "chapters": [
     "units-vectors#models"
    ]
   },
   {
    "ko": "미끄러짐 없이 구를",
    "en": "rolling without slipping",
    "abbr": "",
    "def": "반지름 \\(R\\)인 물체가 미끄러짐 없이 구를(rolling without slipping) 조건은 \\(v_\\text{cm} = R\\omega\\)(그리고 \\(a_\\text{cm} = R\\alpha\\))이다.",
    "chapters": [
     "rotation-dynamics#rolling"
    ]
   },
   {
    "ko": "미시 상태",
    "en": "microscopic state",
    "abbr": "",
    "def": "거시 상태(압력, 온도, 왼쪽 칸의 분자 수 …)가 같아도 그것을 이루는 분자 배치, 곧 미시 상태(microscopic state)는 무수히 많다.",
    "chapters": [
     "second-law#entropy"
    ]
   },
   {
    "ko": "밀",
    "en": "compression",
    "abbr": "",
    "def": "종파에는 촘촘한 곳(밀(compression))과 성긴 곳(소(rarefaction))이 번갈아 생긴다.",
    "chapters": [
     "mechanical-waves#types"
    ]
   },
   {
    "ko": "밀도",
    "en": "density",
    "abbr": "",
    "def": "균일한 물질의 밀도(density)는 \\(\\rho = m/V\\)이다(단위 kg/m³). 유체가 넓이 \\(dA\\)인 면에 수직으로 힘 \\(dF_\\perp\\)를 가할 때 압력(pressure)은 \\(p = dF_\\perp/dA\\)이고, 단위는 파스칼(pascal) 1 Pa = 1 N/m²이다.",
    "chapters": [
     "fluids#pressure"
    ]
   },
   {
    "ko": "바이메탈",
    "en": "bimetallic strip",
    "abbr": "",
    "def": "팽창 계수가 다른 두 금속 띠를 붙인 바이메탈(bimetallic strip)은 가열하면 더 많이 늘어나는 금속이 바깥쪽이 되도록 휜다.",
    "chapters": [
     "temperature-heat#expansion"
    ]
   },
   {
    "ko": "반발 계수",
    "en": "coefficient of restitution",
    "abbr": "",
    "def": "충돌의 \"탄성 정도\"는 반발 계수(coefficient of restitution) \\(e\\)로 나타낸다.",
    "chapters": [
     "momentum#inelastic"
    ]
   },
   {
    "ko": "방출률",
    "en": "emissivity",
    "abbr": "",
    "def": "$$H = Ae\\sigma T^4, \\qquad H_\\text{알짜} = Ae\\sigma\\,(T^4 - T_s^4), \\qquad \\sigma = 5.670\\times10^{-8}\\ \\text{W/(m}^2\\cdot\\text{K}^4)$$\\(e\\): 방출률(emissivity), 0–1. 잘 흡수하는 표면이 잘 방출한다(같은 \\(e\\)). \\(T_s\\): 둘레의 온도. 온도가 2배면 복사는 16배다.",
    "chapters": [
     "temperature-heat#radiation"
    ]
   },
   {
    "ko": "배",
    "en": "antinode",
    "abbr": "",
    "def": "늘 정지한 점이 마디(N), 가장 크게 진동하는 점이 배(A)다.",
    "chapters": [
     "mechanical-waves#standing"
    ]
   },
   {
    "ko": "배기 속력",
    "en": "exhaust speed",
    "abbr": "",
    "def": "$$\\Delta v = v - v_0 = v_\\text{ex}\\ln\\frac{m_0}{m}, \\qquad F_\\text{추력} = v_\\text{ex}\\left|\\frac{dm}{dt}\\right|$$\\(v_\\text{ex}\\): 배기 속력(exhaust speed)(로켓에 대한 연료의 속력), \\(m_0/m\\): 질량비. 중력이 있으면 연소 시간 \\(t\\) 동안 \\(-gt\\)가 더해진다.",
    "chapters": [
     "momentum#rocket"
    ]
   },
   {
    "ko": "배음",
    "en": "harmonics",
    "abbr": "",
    "def": "$$\\lambda_n = \\frac{2L}{n}, \\qquad f_n = n\\frac{v}{2L} = \\frac{n}{2L}\\sqrt{\\frac{F}{\\mu}} \\qquad (n = 1, 2, 3, \\ldots)$$\\(f_1\\): 기본 진동수(fundamental frequency). \\(f_n = nf_1\\)을 배음(harmonics)이라 하고, 이 진동 양식들을 줄의 정규 모드(normal modes)라 한다.",
    "chapters": [
     "mechanical-waves#standing"
    ]
   },
   {
    "ko": "베르누이 방정식",
    "en": "Bernoulli's equation",
    "abbr": "",
    "def": "이 관계를 일–에너지 정리로 정확히 쓴 것이 베르누이 방정식(Bernoulli's equation)이다.",
    "chapters": [
     "fluids#bernoulli"
    ]
   },
   {
    "ko": "벡터",
    "en": "vector",
    "abbr": "",
    "def": "반면 \"북동쪽으로 5 km\"처럼 크기와 방향을 함께 가져야 하는 양을 벡터(vector)라 한다.",
    "chapters": [
     "units-vectors#vectors"
    ]
   },
   {
    "ko": "벡터곱",
    "en": "vector product, cross product",
    "abbr": "",
    "def": "결과가 스칼라인 스칼라곱(scalar product, dot product)과 결과가 벡터인 벡터곱(vector product, cross product)이다.",
    "chapters": [
     "units-vectors#products"
    ]
   },
   {
    "ko": "벤투리관",
    "en": "Venturi tube",
    "abbr": "",
    "def": "관의 넓은 곳과 좁은 목에 세운 관(피에조미터)의 물기둥 높이 차로 이 압력 차를 보이는 장치가 벤투리관(Venturi tube)이다.",
    "chapters": [
     "fluids#bernoulli"
    ]
   },
   {
    "ko": "변위",
    "en": "displacement",
    "abbr": "",
    "def": "위치가 \\(x_1\\)에서 \\(x_2\\)로 바뀌었을 때 위치의 변화 \\(\\Delta x = x_2 - x_1\\)을 변위(displacement)라 한다.",
    "chapters": [
     "straight-line-motion#displacement"
    ]
   },
   {
    "ko": "변형률",
    "en": "strain",
    "abbr": "",
    "def": "응력(stress)은 변형을 일으키는 단위 넓이당 힘(Pa = N/m²), 변형률(strain)은 그로 인한 변형의 비율(단위 없음)이다.",
    "chapters": [
     "equilibrium-elasticity#elastic"
    ]
   },
   {
    "ko": "보강 간섭",
    "en": "constructive interference",
    "abbr": "",
    "def": "해볼 것: ① ‘같은 쪽’에서 t = 0일 때 높이가 두 배가 되는 보강 간섭(constructive interference)을 보라. ② ‘반대쪽’에서는 t = 0에 줄이 순간적으로 완전히 평평해진다(상쇄 간섭(destructive interference)). 에너지는 사라지지 않고 그 순간 모두 운동 에너지로 있다.",
    "chapters": [
     "mechanical-waves#superposition"
    ]
   },
   {
    "ko": "보존력",
    "en": "conservative force",
    "abbr": "",
    "def": "이런 힘을 보존력(conservative force)이라 한다.",
    "chapters": [
     "energy-conservation#conservative"
    ]
   },
   {
    "ko": "복사",
    "en": "radiation",
    "abbr": "",
    "def": "전도(conduction)는 물질 자체는 움직이지 않고 이웃 원자·자유 전자의 충돌로 에너지가 전해지는 것, 대류(convection)는 데워진 유체가 직접 흘러가는 것, 복사(radiation)는 전자기파로 옮겨 가는 것이다.",
    "chapters": [
     "temperature-heat#conduction"
    ]
   },
   {
    "ko": "복원력",
    "en": "restoring force",
    "abbr": "",
    "def": "평형 위치에서 벗어난 물체를 다시 평형 쪽으로 되돌리는 힘을 복원력(restoring force)이라 한다.",
    "chapters": [
     "oscillations#describe"
    ]
   },
   {
    "ko": "볼츠만 상수",
    "en": "Boltzmann constant",
    "abbr": "",
    "def": "$$pV = nRT = NkT$$\\(n\\): 몰수, \\(N = nN_A\\): 분자 수, \\(T\\): 켈빈 온도. 기체 상수(gas constant) \\(R = 8.314\\) J/(mol·K), 볼츠만 상수(Boltzmann constant) \\(k = R/N_A = 1.381\\times10^{-23}\\) J/K, \\(N_A = 6.022\\times10^{23}\\) mol⁻¹. 질량 \\(m_\\text{tot}\\), 몰…",
    "chapters": [
     "kinetic-theory-first-law#ideal-gas"
    ]
   },
   {
    "ko": "부력",
    "en": "buoyant force",
    "abbr": "",
    "def": "이 압력 차이의 합력이 위쪽을 향하는 부력(buoyant force)이다.",
    "chapters": [
     "fluids#buoyancy"
    ]
   },
   {
    "ko": "부정정",
    "en": "statically indeterminate",
    "abbr": "",
    "def": "이런 구조를 부정정(statically indeterminate)이라 한다.",
    "chapters": [
     "equilibrium-elasticity#conditions"
    ]
   },
   {
    "ko": "부피 탄성률",
    "en": "bulk modulus",
    "abbr": "",
    "def": "점선이 원래 모양이다(변형은 크게 과장). $$Y = \\frac{F_\\perp/A}{\\Delta L/L_0}, \\qquad B = -\\frac{\\Delta p}{\\Delta V/V_0}, \\qquad S = \\frac{F_\\parallel/A}{x/h}$$\\(Y\\): 영률(Young's modulus), \\(B\\): 부피 탄성률(bulk modulus)(음의 부호는 압력이 늘면 부피가 줄기 때문, \\(1/B\\)은…",
    "chapters": [
     "equilibrium-elasticity#elastic"
    ]
   },
   {
    "ko": "부피 팽창 계수",
    "en": "coefficient of volume expansion",
    "abbr": "",
    "def": "$$\\Delta L = \\alpha L_0\\,\\Delta T, \\qquad \\Delta V = \\beta V_0\\,\\Delta T, \\qquad \\beta = 3\\alpha\\ (\\text{등방 고체})$$\\(\\alpha\\): 선팽창 계수(coefficient of linear expansion), \\(\\beta\\): 부피 팽창 계수(coefficient of volume expansion), 단위 K⁻¹.…",
    "chapters": [
     "temperature-heat#expansion"
    ]
   },
   {
    "ko": "부피 흐름률",
    "en": "volume flow rate",
    "abbr": "",
    "def": "$$A_1 v_1 = A_2 v_2 \\qquad (\\text{연속 방정식}), \\qquad Q = \\frac{dV}{dt} = Av$$\\(Q\\): 부피 흐름률(volume flow rate)(m³/s). 압축성 유체에서는 질량 흐름률 \\(\\rho_1A_1v_1 = \\rho_2A_2v_2\\)가 보존된다.",
    "chapters": [
     "fluids#continuity"
    ]
   },
   {
    "ko": "분극",
    "en": "polarization",
    "abbr": "",
    "def": "이 분극(polarization) 때문에 대전된 물체는 중성인 절연체도 끌어당긴다.",
    "chapters": [
     "electric-field#charge"
    ]
   },
   {
    "ko": "불안정 평형",
    "en": "unstable equilibrium",
    "abbr": "",
    "def": "안정 평형(stable equilibrium): \\(U\\)의 극소(\\(dU/dx = 0\\), \\(d^2U/dx^2 > 0\\)) — 조금 밀면 되돌아오는 힘. 불안정 평형(unstable equilibrium): \\(U\\)의 극대 — 조금만 밀어도 멀어진다.",
    "chapters": [
     "energy-conservation#diagram"
    ]
   },
   {
    "ko": "불확도",
    "en": "uncertainty",
    "abbr": "",
    "def": "모든 측정에는 불확도(uncertainty)가 있다.",
    "chapters": [
     "units-vectors#estimation"
    ]
   },
   {
    "ko": "블랙홀",
    "en": "black hole",
    "abbr": "",
    "def": "이것이 블랙홀(black hole)이다.",
    "chapters": [
     "gravitation#shell"
    ]
   },
   {
    "ko": "비가역 과정",
    "en": "irreversible process",
    "abbr": "",
    "def": "이처럼 저절로 한 방향으로만 일어나는 과정을 비가역 과정(irreversible process)이라 한다.",
    "chapters": [
     "second-law#irreversible"
    ]
   },
   {
    "ko": "비례 한계",
    "en": "proportional limit",
    "abbr": "",
    "def": "처음 직선 구간의 끝이 비례 한계(proportional limit), 하중을 없앴을 때 원래 모양으로 돌아오는 최대 응력이 탄성 한계(elastic limit)다.",
    "chapters": [
     "equilibrium-elasticity#plastic"
    ]
   },
   {
    "ko": "비보존력",
    "en": "nonconservative force",
    "abbr": "",
    "def": "반면 운동 마찰력은 미끄러지는 거리에 비례해 언제나 음의 일을 하고, 되돌아와도 에너지를 돌려주지 않는다 — 비보존력(nonconservative force)이다.",
    "chapters": [
     "energy-conservation#conservative"
    ]
   },
   {
    "ko": "비압축성",
    "en": "incompressible",
    "abbr": "",
    "def": "이제 유체를 움직여 보자. 실제 흐름은 매우 복잡하므로 먼저 이상 유체(ideal fluid) — 압축되지 않고(비압축성(incompressible)) 내부 마찰(점성)이 없는 유체 — 를 생각한다.",
    "chapters": [
     "fluids#continuity"
    ]
   },
   {
    "ko": "비열",
    "en": "specific heat",
    "abbr": "",
    "def": "질량 \\(m\\)인 물체의 온도를 \\(\\Delta T\\)만큼 올리는 데 필요한 열은 질량과 온도 변화에 비례하고, 비례 상수가 물질마다 다른 비열(specific heat) \\(c\\)다.",
    "chapters": [
     "temperature-heat#heat-capacity"
    ]
   },
   {
    "ko": "비열비",
    "en": "ratio of heat capacities",
    "abbr": "",
    "def": "그래서 $$C_p = C_V + R, \\qquad \\gamma = \\frac{C_p}{C_V}$$\\(C_p\\): 등압 몰 열용량. 비열비(ratio of heat capacities) \\(\\gamma\\)는 단원자 \\(5/3 = 1.67\\), 이원자(공기) \\(7/5 = 1.40\\). 16장의 음속 \\(v = \\sqrt{\\gamma RT/M}\\)에 나온 그 \\(\\gamma\\)다.",
    "chapters": [
     "kinetic-theory-first-law#processes"
    ]
   },
   {
    "ko": "비탄성 충돌",
    "en": "inelastic collision",
    "abbr": "",
    "def": "운동 에너지가 보존되는 충돌을 탄성 충돌(elastic collision), 줄어드는 충돌을 비탄성 충돌(inelastic collision), 두 물체가 붙어서 함께 움직이는 경우를 완전 비탄성 충돌(completely inelastic collision)이라 한다.",
    "chapters": [
     "momentum#inelastic"
    ]
   },
   {
    "ko": "비틀림 저울",
    "en": "torsion balance",
    "abbr": "",
    "def": "\\(G\\)는 1798년 캐번디시가 비틀림 저울(torsion balance)로 처음 측정했다.",
    "chapters": [
     "gravitation#law"
    ]
   },
   {
    "ko": "빈 변위 법칙",
    "en": "Wien's displacement law",
    "abbr": "",
    "def": "흑체 스펙트럼이 가장 센 파장은 절대 온도에 반비례한다 — 빈 변위 법칙(Wien's displacement law)이다.",
    "chapters": [
     "temperature-heat#radiation"
    ]
   },
   {
    "ko": "사건의 지평선",
    "en": "event horizon",
    "abbr": "",
    "def": "$$R_S = \\frac{2GM}{c^2}$$슈바르츠실트 반지름(Schwarzschild radius). 이 반지름의 구면을 사건의 지평선(event horizon)이라 한다.",
    "chapters": [
     "gravitation#shell"
    ]
   },
   {
    "ko": "사인파",
    "en": "sinusoidal wave",
    "abbr": "",
    "def": "특히 사인 모양의 파동을 사인파(sinusoidal wave)라 한다.",
    "chapters": [
     "mechanical-waves#periodic"
    ]
   },
   {
    "ko": "상쇄 간섭",
    "en": "destructive interference",
    "abbr": "",
    "def": "해볼 것: ① ‘같은 쪽’에서 t = 0일 때 높이가 두 배가 되는 보강 간섭(constructive interference)을 보라. ② ‘반대쪽’에서는 t = 0에 줄이 순간적으로 완전히 평평해진다(상쇄 간섭(destructive interference)). 에너지는 사라지지 않고 그 순간 모두 운동 에너지로 있다.",
    "chapters": [
     "mechanical-waves#superposition"
    ]
   },
   {
    "ko": "상태 방정식",
    "en": "equation of state",
    "abbr": "",
    "def": "이 관계를 상태 방정식(equation of state)이라 한다.",
    "chapters": [
     "kinetic-theory-first-law#ideal-gas"
    ]
   },
   {
    "ko": "상태 함수",
    "en": "state function",
    "abbr": "",
    "def": "즉 \\(U\\)는 상태 함수(state function)다.",
    "chapters": [
     "kinetic-theory-first-law#first-law"
    ]
   },
   {
    "ko": "선밀도",
    "en": "linear mass density",
    "abbr": "",
    "def": "줄을 원래 위치로 되돌리는 것은 장력 \\(F\\)이고, 그에 저항하는 관성은 단위 길이당 질량, 곧 선밀도(linear mass density) \\(\\mu = m/L\\)이다.",
    "chapters": [
     "mechanical-waves#speed"
    ]
   },
   {
    "ko": "선적분",
    "en": "line integral",
    "abbr": "",
    "def": "입자가 곡선을 따라 움직이고 힘의 크기와 방향이 모두 변하면, 경로를 작은 변위 \\(d\\vec l\\)로 나누어 \\(dW = \\vec F\\cdot d\\vec l = F\\cos\\phi\\,dl\\)을 더한다: \\(W = \\int_{P_1}^{P_2}\\vec F\\cdot d\\vec l\\). 이것을 선적분(line integral)이라 한다.",
    "chapters": [
     "work-energy#variable"
    ]
   },
   {
    "ko": "선팽창 계수",
    "en": "coefficient of linear expansion",
    "abbr": "",
    "def": "$$\\Delta L = \\alpha L_0\\,\\Delta T, \\qquad \\Delta V = \\beta V_0\\,\\Delta T, \\qquad \\beta = 3\\alpha\\ (\\text{등방 고체})$$\\(\\alpha\\): 선팽창 계수(coefficient of linear expansion), \\(\\beta\\): 부피 팽창 계수(coefficient of volume expansion), 단위 K⁻¹.…",
    "chapters": [
     "temperature-heat#expansion"
    ]
   },
   {
    "ko": "성능 계수",
    "en": "coefficient of performance",
    "abbr": "",
    "def": "$$K = \\frac{|Q_C|}{|W|} = \\frac{|Q_C|}{|Q_H| - |Q_C|}, \\qquad K_H = \\frac{|Q_H|}{|W|} = K + 1$$\\(K\\): 냉동기의 성능 계수(coefficient of performance). 효율과 달리 1보다 클 수 있다 — 냉장고는 흔히 \\(K \\approx 2\\)–4. 난방용 열펌프(heat pump)는 받은 전기 에너지보다 많은 열을 실내에 준다.",
    "chapters": [
     "second-law#refrigerators"
    ]
   },
   {
    "ko": "성분",
    "en": "component",
    "abbr": "",
    "def": "그림으로 더하기는 직관적이지만 정확한 계산에는 성분(component)을 쓴다.",
    "chapters": [
     "units-vectors#vectors"
    ]
   },
   {
    "ko": "세기",
    "en": "intensity",
    "abbr": "",
    "def": "3차원으로 퍼지는 파동은 단위 넓이당 일률, 곧 세기(intensity) \\(I\\)(W/m²)로 기술한다.",
    "chapters": [
     "mechanical-waves#energy"
    ]
   },
   {
    "ko": "세차 운동",
    "en": "precession",
    "abbr": "",
    "def": "이 신기한 운동을 세차 운동(precession)이라 하고, 이런 장치를 자이로스코프(gyroscope)라 한다.",
    "chapters": [
     "rotation-dynamics#gyro"
    ]
   },
   {
    "ko": "소",
    "en": "rarefaction",
    "abbr": "",
    "def": "종파에는 촘촘한 곳(밀(compression))과 성긴 곳(소(rarefaction))이 번갈아 생긴다.",
    "chapters": [
     "mechanical-waves#types"
    ]
   },
   {
    "ko": "소성 변형",
    "en": "plastic deformation",
    "abbr": "",
    "def": "그 너머에서 물질은 항복(yield)하여 소성 변형(plastic deformation)을 겪는다: 하중을 없애도 영구 변형이 남는다.",
    "chapters": [
     "equilibrium-elasticity#plastic"
    ]
   },
   {
    "ko": "수직항력",
    "en": "normal force",
    "abbr": "",
    "def": "체중계가 재는 것은 사실 무게가 아니라 체중계가 우리를 떠받치는 수직항력(normal force) \\(n\\)이다.",
    "chapters": [
     "newtons-laws#mass-weight"
    ]
   },
   {
    "ko": "순간 속도",
    "en": "instantaneous velocity",
    "abbr": "",
    "def": "그 극한이 순간 속도(instantaneous velocity)다.",
    "chapters": [
     "straight-line-motion#instantaneous"
    ]
   },
   {
    "ko": "순환 과정",
    "en": "cyclic process",
    "abbr": "",
    "def": "상태가 처음으로 돌아오는 순환 과정(cyclic process)에서는 \\(\\Delta U = 0\\)이므로 \\(Q_\\text{알짜} = W_\\text{알짜}\\)이다.",
    "chapters": [
     "kinetic-theory-first-law#first-law"
    ]
   },
   {
    "ko": "슈바르츠실트 반지름",
    "en": "Schwarzschild radius",
    "abbr": "",
    "def": "$$R_S = \\frac{2GM}{c^2}$$슈바르츠실트 반지름(Schwarzschild radius). 이 반지름의 구면을 사건의 지평선(event horizon)이라 한다.",
    "chapters": [
     "gravitation#shell"
    ]
   },
   {
    "ko": "슈테판–볼츠만 법칙",
    "en": "Stefan–Boltzmann law",
    "abbr": "",
    "def": "넓이 \\(A\\), 절대 온도 \\(T\\)인 표면이 내는 복사의 일률은 슈테판–볼츠만 법칙(Stefan–Boltzmann law)을 따른다.",
    "chapters": [
     "temperature-heat#radiation"
    ]
   },
   {
    "ko": "스칼라",
    "en": "scalar",
    "abbr": "",
    "def": "온도 20 °C, 질량 3 kg, 시간 5 s처럼 수치 하나로 완전히 정해지는 양을 스칼라(scalar)라 한다.",
    "chapters": [
     "units-vectors#vectors"
    ]
   },
   {
    "ko": "스칼라곱",
    "en": "scalar product, dot product",
    "abbr": "",
    "def": "결과가 스칼라인 스칼라곱(scalar product, dot product)과 결과가 벡터인 벡터곱(vector product, cross product)이다.",
    "chapters": [
     "units-vectors#products"
    ]
   },
   {
    "ko": "시험 전하",
    "en": "test charge",
    "abbr": "",
    "def": "$$\\vec E = \\frac{\\vec F_0}{q_0}, \\qquad \\vec F = q\\vec E, \\qquad E_\\text{점전하} = k\\frac{|q|}{r^2}$$아주 작은 양의 시험 전하(test charge) \\(q_0\\)가 받는 힘을 \\(q_0\\)로 나눈 것. 단위 N/C. 양전하가 만든 장은 바깥을, 음전하가 만든 장은 안쪽을 향한다.",
    "chapters": [
     "electric-field#field"
    ]
   },
   {
    "ko": "아르키메데스 원리",
    "en": "Archimedes' principle",
    "abbr": "",
    "def": "유체에 전부 또는 일부가 잠긴 물체는 밀려난 유체의 무게와 같은 크기의 위쪽 힘(부력)을 받는다(아르키메데스 원리(Archimedes' principle)).",
    "chapters": [
     "fluids#buoyancy"
    ]
   },
   {
    "ko": "안정 평형",
    "en": "stable equilibrium",
    "abbr": "",
    "def": "안정 평형(stable equilibrium): \\(U\\)의 극소(\\(dU/dx = 0\\), \\(d^2U/dx^2 > 0\\)) — 조금 밀면 되돌아오는 힘. 불안정 평형(unstable equilibrium): \\(U\\)의 극대 — 조금만 밀어도 멀어진다.",
    "chapters": [
     "energy-conservation#diagram"
    ]
   },
   {
    "ko": "알짜힘",
    "en": "net force",
    "abbr": "",
    "def": "이것을 힘의 중첩 원리(superposition of forces)라 하고, 그 합을 알짜힘(net force) 또는 합력이라 부른다.",
    "chapters": [
     "newtons-laws#forces"
    ]
   },
   {
    "ko": "압력",
    "en": "pressure",
    "abbr": "",
    "def": "균일한 물질의 밀도(density)는 \\(\\rho = m/V\\)이다(단위 kg/m³). 유체가 넓이 \\(dA\\)인 면에 수직으로 힘 \\(dF_\\perp\\)를 가할 때 압력(pressure)은 \\(p = dF_\\perp/dA\\)이고, 단위는 파스칼(pascal) 1 Pa = 1 N/m²이다.",
    "chapters": [
     "fluids#pressure"
    ]
   },
   {
    "ko": "압력 진폭",
    "en": "pressure amplitude",
    "abbr": "",
    "def": "분자들이 앞뒤로 움직이면 어떤 곳은 분자가 몰려 압력이 높아지고(압축(compression)), 어떤 곳은 성겨져 압력이 낮아진다(희박(rarefaction)). 단면적 \\(S\\), 길이 \\(\\Delta x\\)인 공기 조각의 부피 변화는 \\(\\Delta V = S\\,[y(x+\\Delta x) - y(x)]\\)이므로 \\(\\Delta V/V \\to \\partial y/\\partial x\\)이고, 부피 탄성률…",
    "chapters": [
     "sound#sound-waves"
    ]
   },
   {
    "ko": "압축",
    "en": "compression",
    "abbr": "",
    "def": "분자들이 앞뒤로 움직이면 어떤 곳은 분자가 몰려 압력이 높아지고(압축(compression)), 어떤 곳은 성겨져 압력이 낮아진다(희박(rarefaction)). 단면적 \\(S\\), 길이 \\(\\Delta x\\)인 공기 조각의 부피 변화는 \\(\\Delta V = S\\,[y(x+\\Delta x) - y(x)]\\)이므로 \\(\\Delta V/V \\to \\partial y/\\partial x\\)이고, 부피 탄성률…",
    "chapters": [
     "sound#sound-waves"
    ]
   },
   {
    "ko": "압축률",
    "en": "compressibility",
    "abbr": "",
    "def": "점선이 원래 모양이다(변형은 크게 과장). $$Y = \\frac{F_\\perp/A}{\\Delta L/L_0}, \\qquad B = -\\frac{\\Delta p}{\\Delta V/V_0}, \\qquad S = \\frac{F_\\parallel/A}{x/h}$$\\(Y\\): 영률(Young's modulus), \\(B\\): 부피 탄성률(bulk modulus)(음의 부호는 압력이 늘면 부피가 줄기 때문, \\(1/B\\)은…",
    "chapters": [
     "equilibrium-elasticity#elastic"
    ]
   },
   {
    "ko": "압축비",
    "en": "compression ratio",
    "abbr": "",
    "def": "최대 부피와 최소 부피의 비 \\(r = V_\\text{max}/V_\\text{min}\\)이 압축비(compression ratio)다.",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "액주계",
    "en": "manometer",
    "abbr": "",
    "def": "h p_atm 액주계: p − p_atm = ρgh 수은 기압계(왼쪽)는 절대 압력을, 한쪽이 대기에 열린 U자관 액주계(manometer)(오른쪽)는 계기 압력을 기둥 높이 차로 잰다.",
    "chapters": [
     "fluids#pressure"
    ]
   },
   {
    "ko": "에너지 도표",
    "en": "energy diagram",
    "abbr": "",
    "def": "이것을 에너지 도표(energy diagram)라 한다.",
    "chapters": [
     "energy-conservation#diagram"
    ]
   },
   {
    "ko": "에너지 등분배 정리",
    "en": "equipartition theorem",
    "abbr": "",
    "def": "열평형에서 에너지의 제곱 항 하나마다 분자 하나당 평균 \\(\\tfrac12kT\\)(1몰당 \\(\\tfrac12RT\\))의 에너지가 배당된다 — 에너지 등분배 정리(equipartition theorem). 자유도가 \\(f\\)인 이상 기체는 \\(U = \\tfrac f2 nRT\\), \\(C_V = \\tfrac f2 R\\)이다.",
    "chapters": [
     "kinetic-theory-first-law#equipartition"
    ]
   },
   {
    "ko": "엔트로피",
    "en": "entropy",
    "abbr": "",
    "def": "그 상태 함수가 엔트로피(entropy) \\(S\\)다.",
    "chapters": [
     "second-law#entropy"
    ]
   },
   {
    "ko": "역제곱 법칙",
    "en": "inverse-square law",
    "abbr": "",
    "def": "모든 방향으로 고르게 퍼지는 점음원의 일률이 \\(P\\)이면 거리 \\(r\\)의 구면 전체로 같은 에너지가 퍼지므로 \\(I = P/4\\pi r^2\\) — 역제곱 법칙(inverse-square law)이다.",
    "chapters": [
     "sound#intensity"
    ]
   },
   {
    "ko": "역학적 에너지",
    "en": "mechanical energy",
    "abbr": "",
    "def": "운동 에너지와 퍼텐셜 에너지의 합을 역학적 에너지(mechanical energy)라 한다.",
    "chapters": [
     "energy-conservation#gravity"
    ]
   },
   {
    "ko": "역학적 파동",
    "en": "mechanical wave",
    "abbr": "",
    "def": "줄, 용수철, 물, 공기처럼 파동을 전달하는 물질을 매질(medium)이라 하고, 매질의 변형이 전달되는 파동을 역학적 파동(mechanical wave)이라 한다(빛 같은 전자기파는 매질이 필요 없다, 29장). 매질의 각 부분은 평형 위치 근처에서 진동할 뿐 파동과 함께 멀리 가지 않는다.",
    "chapters": [
     "mechanical-waves#types"
    ]
   },
   {
    "ko": "열",
    "en": "heat",
    "abbr": "",
    "def": "물체 A와 B가 각각 물체 C(예: 온도계)와 열평형에 있으면, A와 B도 서로 열평형에 있다.",
    "chapters": [
     "temperature-heat#temperature"
    ]
   },
   {
    "ko": "열기관",
    "en": "heat engine",
    "abbr": "",
    "def": "열을 받아 그 일부를 역학적 일로 바꾸며 같은 상태로 되풀이해 돌아오는 장치가 열기관(heat engine)이다.",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "열량 측정법",
    "en": "calorimetry",
    "abbr": "",
    "def": "단열된 그릇 안에서 뜨거운 물체와 찬 물을 섞으면 에너지 보존에 의해 받은 열과 잃은 열의 합이 0이다: \\(\\sum Q_i = 0\\). 나중 온도를 재면 모르는 비열을 구할 수 있다(열량 측정법(calorimetry)).",
    "chapters": [
     "temperature-heat#heat-capacity"
    ]
   },
   {
    "ko": "열류",
    "en": "heat current",
    "abbr": "",
    "def": "단면적 \\(A\\), 길이 \\(L\\)인 막대(또는 판)의 두 끝 온도가 \\(T_H\\), \\(T_C\\)로 유지되면, 시간이 지나 각 점의 온도가 변하지 않는 정상 상태(steady state)에서 단위 시간당 흐르는 열, 곧 열류(heat current)는.",
    "chapters": [
     "temperature-heat#conduction"
    ]
   },
   {
    "ko": "열응력",
    "en": "thermal stress",
    "abbr": "",
    "def": "열팽창 \\(\\alpha\\Delta T\\)만큼을 탄성 변형이 정확히 되돌려야 하므로 \\(F/A = -Y\\alpha\\Delta T\\)(11장의 영률 \\(Y\\))이다 — 이것이 열응력(thermal stress)이다.",
    "chapters": [
     "temperature-heat#expansion"
    ]
   },
   {
    "ko": "열전도도",
    "en": "thermal conductivity",
    "abbr": "",
    "def": "단면적 \\(A\\), 길이 \\(L\\)인 막대(또는 판)의 두 끝 온도가 \\(T_H\\), \\(T_C\\)로 유지되면, 시간이 지나 각 점의 온도가 변하지 않는 정상 상태(steady state)에서 단위 시간당 흐르는 열, 곧 열류(heat current)는 $$H = \\frac{dQ}{dt} = kA\\frac{T_H - T_C}{L}, \\qquad \\text{일반적으로 } H = -kA\\frac{dT}{dx}$$\\(k\\):…",
    "chapters": [
     "temperature-heat#conduction"
    ]
   },
   {
    "ko": "열펌프",
    "en": "heat pump",
    "abbr": "",
    "def": "|Q_H| = |Q_C| + |W| |Q_C| (빼낸 열) |W| (전기 에너지) 냉동기 K = |Q_C| / |W|열펌프 K_H = |Q_H| / |W| 냉동기와 열펌프의 에너지 흐름도. 같은 장치를 차가운 쪽 관점(냉방·냉장)에서 보면 냉동기, 뜨거운 쪽 관점(난방)에서 보면 열펌프다.",
    "chapters": [
     "second-law#refrigerators"
    ]
   },
   {
    "ko": "열평형",
    "en": "thermal equilibrium",
    "abbr": "",
    "def": "더 이상 알짜 에너지가 흐르지 않는 상태를 열평형(thermal equilibrium)이라 하고, 열평형에 있는 물체들이 공유하는 성질이 온도(temperature)다.",
    "chapters": [
     "temperature-heat#temperature"
    ]
   },
   {
    "ko": "열효율",
    "en": "thermal efficiency",
    "abbr": "",
    "def": "$$W = Q_H + Q_C = Q_H - |Q_C|, \\qquad e = \\frac{W}{Q_H} = 1 - \\frac{|Q_C|}{Q_H}$$\\(e\\): 열효율(thermal efficiency). 버리는 열 \\(|Q_C|\\)가 0이 아닌 한 \\(e < 1\\)이다.",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "영률",
    "en": "Young's modulus",
    "abbr": "",
    "def": "점선이 원래 모양이다(변형은 크게 과장). $$Y = \\frac{F_\\perp/A}{\\Delta L/L_0}, \\qquad B = -\\frac{\\Delta p}{\\Delta V/V_0}, \\qquad S = \\frac{F_\\parallel/A}{x/h}$$\\(Y\\): 영률(Young's modulus), \\(B\\): 부피 탄성률(bulk modulus)(음의 부호는 압력이 늘면 부피가 줄기 때문, \\(1/B\\)은…",
    "chapters": [
     "equilibrium-elasticity#elastic"
    ]
   },
   {
    "ko": "오토 순환",
    "en": "Otto cycle",
    "abbr": "",
    "def": "가솔린 엔진의 4행정은 이상화하면 두 단열 과정과 두 등적 과정으로 이루어진 오토 순환(Otto cycle)이 된다.",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "온도",
    "en": "temperature",
    "abbr": "",
    "def": "더 이상 알짜 에너지가 흐르지 않는 상태를 열평형(thermal equilibrium)이라 하고, 열평형에 있는 물체들이 공유하는 성질이 온도(temperature)다.",
    "chapters": [
     "temperature-heat#temperature"
    ]
   },
   {
    "ko": "와트",
    "en": "watt",
    "abbr": "",
    "def": "SI 단위는 와트(watt), 1 W = 1 J/s. 마력은 1 hp = 746 W이고, 전력량 1 kWh = 3.6 × 10⁶ J은 에너지의 단위다.",
    "chapters": [
     "work-energy#power"
    ]
   },
   {
    "ko": "완전 비탄성 충돌",
    "en": "completely inelastic collision",
    "abbr": "",
    "def": "운동 에너지가 보존되는 충돌을 탄성 충돌(elastic collision), 줄어드는 충돌을 비탄성 충돌(inelastic collision), 두 물체가 붙어서 함께 움직이는 경우를 완전 비탄성 충돌(completely inelastic collision)이라 한다.",
    "chapters": [
     "momentum#inelastic"
    ]
   },
   {
    "ko": "외력",
    "en": "external force",
    "abbr": "",
    "def": "계 안의 물체끼리 주고받는 힘을 내력(internal force), 계 밖에서 오는 힘을 외력(external force)이라 한다.",
    "chapters": [
     "momentum#conservation"
    ]
   },
   {
    "ko": "용수철 상수",
    "en": "spring constant, force constant",
    "abbr": "",
    "def": "\\(k\\)는 용수철 상수(spring constant, force constant)로 단위는 N/m이며, 클수록 뻣뻣하다.",
    "chapters": [
     "work-energy#spring"
    ]
   },
   {
    "ko": "운동 마찰력",
    "en": "kinetic friction",
    "abbr": "",
    "def": "정지 마찰력(static friction)은 면이 서로 미끄러지지 않을 때 작용하며, 미끄러짐을 막는 데 필요한 만큼만 생긴다: \\(f_s \\le \\mu_s n\\). 운동 마찰력(kinetic friction)은 미끄러지는 동안 작용하며 크기가 거의 일정하다: \\(f_k = \\mu_k n\\). 방향은 언제나 면을 따라, 상대적인 미끄러짐(또는 그 경향)의 반대쪽이다.",
    "chapters": [
     "applying-newton#friction"
    ]
   },
   {
    "ko": "운동 에너지",
    "en": "kinetic energy",
    "abbr": "",
    "def": "이 양을 운동 에너지(kinetic energy)라 한다.",
    "chapters": [
     "work-energy#kinetic"
    ]
   },
   {
    "ko": "운동량",
    "en": "momentum",
    "abbr": "",
    "def": "이 \"운동의 양\"을 나타내는 벡터가 운동량(momentum)이다.",
    "chapters": [
     "momentum#impulse"
    ]
   },
   {
    "ko": "원 궤도",
    "en": "circular orbit",
    "abbr": "",
    "def": "이것이 원 궤도(circular orbit)다.",
    "chapters": [
     "gravitation#satellites"
    ]
   },
   {
    "ko": "원거리력",
    "en": "long-range force",
    "abbr": "",
    "def": "두 물체가 맞닿아야 생기는 접촉력(contact force)과, 떨어져 있어도 작용하는 원거리력(long-range force)이다.",
    "chapters": [
     "newtons-laws#forces"
    ]
   },
   {
    "ko": "위상",
    "en": "phase",
    "abbr": "",
    "def": "\\(\\omega t + \\phi\\)를 위상(phase), \\(\\phi\\)를 위상 상수(phase constant)라 한다.",
    "chapters": [
     "oscillations#shm"
    ]
   },
   {
    "ko": "위상 공간",
    "en": "phase space",
    "abbr": "",
    "def": "두 식을 풀면 $$A = \\sqrt{x_0^2 + \\left(\\frac{v_0}{\\omega}\\right)^2}, \\qquad \\tan\\phi = -\\frac{v_0}{\\omega x_0}$$\\((x, v/\\omega)\\) 평면(위상 공간(phase space))에서 상태는 반지름 \\(A\\)인 원 위를 시계 방향으로 돈다.",
    "chapters": [
     "oscillations#shm"
    ]
   },
   {
    "ko": "위상 상수",
    "en": "phase constant",
    "abbr": "",
    "def": "\\(\\omega t + \\phi\\)를 위상(phase), \\(\\phi\\)를 위상 상수(phase constant)라 한다.",
    "chapters": [
     "oscillations#shm"
    ]
   },
   {
    "ko": "위치 벡터",
    "en": "position vector",
    "abbr": "",
    "def": "평면 위의 점은 원점에서 그 점까지의 위치 벡터(position vector) \\(\\vec r = x\\hat\\imath + y\\hat\\jmath\\)로 나타낸다.",
    "chapters": [
     "motion-2d#vectors"
    ]
   },
   {
    "ko": "유도 대전",
    "en": "charging by induction",
    "abbr": "",
    "def": "이를 이용해 접촉하지 않고 도체를 대전시키는 방법이 유도 대전(charging by induction)이다.",
    "chapters": [
     "electric-field#charge"
    ]
   },
   {
    "ko": "유선",
    "en": "streamline",
    "abbr": "",
    "def": "정상 흐름에서 유체 입자가 지나는 경로를 유선(streamline)이라 하며, 유선은 서로 교차하지 않는다.",
    "chapters": [
     "fluids#continuity"
    ]
   },
   {
    "ko": "유체",
    "en": "fluid",
    "abbr": "",
    "def": "고체와 달리 유체(fluid)는 모양을 유지하지 못하고 흐른다.",
    "chapters": [
     "fluids#pressure"
    ]
   },
   {
    "ko": "유효숫자",
    "en": "significant figures",
    "abbr": "",
    "def": "측정값에서 의미 있는 숫자를 유효숫자(significant figures)라 한다.",
    "chapters": [
     "units-vectors#estimation"
    ]
   },
   {
    "ko": "융해열",
    "en": "heat of fusion",
    "abbr": "",
    "def": "$$Q = \\pm mL$$녹음·끓음(+), 얼음·응결(−). 물: 융해열(heat of fusion) \\(L_f = 3.34\\times10^5\\) J/kg, 기화열(heat of vaporization) \\(L_v = 2.256\\times10^6\\) J/kg(1 atm, 100 °C). 물 1 kg을 끓여 없애는 열로 같은 물을 0 °C에서 100 °C까지 5번 넘게 데울 수 있다.",
    "chapters": [
     "temperature-heat#phase"
    ]
   },
   {
    "ko": "음색",
    "en": "timbre",
    "abbr": "",
    "def": "음높이는 주로 진동수, 소리의 크기는 압력 진폭, 음색(timbre)은 배음 구성으로 정해진다.",
    "chapters": [
     "sound#sound-waves"
    ]
   },
   {
    "ko": "음속 폭음",
    "en": "sonic boom",
    "abbr": "",
    "def": "시간 \\(t\\) 동안 음원은 \\(v_S t\\), 그 사이 처음 낸 마루는 반지름 \\(vt\\)로 퍼지므로 원뿔의 반각 \\(\\alpha\\)는 $$\\sin\\alpha = \\frac{vt}{v_S t} = \\frac{v}{v_S} = \\frac{1}{\\text{Ma}}$$\\(\\text{Ma} = v_S/v\\): 마하수(Mach number). 원뿔이 지면을 쓸고 지나갈 때 들리는 \"쾅\" 소리가 음속 폭음(sonic…",
    "chapters": [
     "sound#doppler"
    ]
   },
   {
    "ko": "음파",
    "en": "sound wave",
    "abbr": "",
    "def": "음파(sound wave)는 매질을 통해 전해지는 종파(longitudinal wave)다.",
    "chapters": [
     "sound#sound-waves"
    ]
   },
   {
    "ko": "응력",
    "en": "stress",
    "abbr": "",
    "def": "응력(stress)은 변형을 일으키는 단위 넓이당 힘(Pa = N/m²), 변형률(strain)은 그로 인한 변형의 비율(단위 없음)이다.",
    "chapters": [
     "equilibrium-elasticity#elastic"
    ]
   },
   {
    "ko": "응력–변형률 곡선",
    "en": "stress–strain curve",
    "abbr": "",
    "def": "시편을 계속 당기며 응력과 변형률을 그리면 응력–변형률 곡선(stress–strain curve)을 얻는다.",
    "chapters": [
     "equilibrium-elasticity#plastic"
    ]
   },
   {
    "ko": "이동 거리",
    "en": "distance traveled",
    "abbr": "",
    "def": "변위는 부호(방향)를 가진 양이고, 실제로 지나온 길의 길이인 이동 거리(distance traveled)와 다르다.",
    "chapters": [
     "straight-line-motion#displacement"
    ]
   },
   {
    "ko": "이상 기체",
    "en": "ideal gas",
    "abbr": "",
    "def": "분자 사이의 힘과 분자 자체의 부피를 무시할 수 있는 묽은 기체 — 이상 기체(ideal gas) — 는 다음을 따른다.",
    "chapters": [
     "kinetic-theory-first-law#ideal-gas"
    ]
   },
   {
    "ko": "이상 유체",
    "en": "ideal fluid",
    "abbr": "",
    "def": "이제 유체를 움직여 보자. 실제 흐름은 매우 복잡하므로 먼저 이상 유체(ideal fluid) — 압축되지 않고(비압축성(incompressible)) 내부 마찰(점성)이 없는 유체 — 를 생각한다.",
    "chapters": [
     "fluids#continuity"
    ]
   },
   {
    "ko": "이상 팽창",
    "en": "anomalous expansion",
    "abbr": "",
    "def": "이 이상 팽창(anomalous expansion) 덕분에 호수는 위에서부터 얼고, 바닥의 물은 4 °C 근처에 머물러 생물이 겨울을 난다.",
    "chapters": [
     "temperature-heat#expansion"
    ]
   },
   {
    "ko": "일",
    "en": "work",
    "abbr": "",
    "def": "일상어의 \"일\"과 물리학의 일(work)은 다르다.",
    "chapters": [
     "work-energy#work"
    ]
   },
   {
    "ko": "일률",
    "en": "power",
    "abbr": "",
    "def": "일을 하는 빠르기를 일률(power)이라 한다.",
    "chapters": [
     "work-energy#power"
    ]
   },
   {
    "ko": "임계 감쇠",
    "en": "critical damping",
    "abbr": "",
    "def": "임계 감쇠(critical damping) \\(b = 2\\sqrt{km}\\): 진동하지 않고 가장 빨리 평형으로 돌아간다.",
    "chapters": [
     "oscillations#damped"
    ]
   },
   {
    "ko": "자유 낙하",
    "en": "free fall",
    "abbr": "",
    "def": "위로 던지든 아래로 던지든, 공중에 있는 동안의 운동을 자유 낙하(free fall)라 한다.",
    "chapters": [
     "straight-line-motion#free-fall"
    ]
   },
   {
    "ko": "자유 물체도",
    "en": "free-body diagram",
    "abbr": "",
    "def": "뉴턴 법칙을 문제에 쓸 때 가장 중요한 도구가 자유 물체도(free-body diagram)다.",
    "chapters": [
     "newtons-laws#fbd"
    ]
   },
   {
    "ko": "자유단",
    "en": "free end",
    "abbr": "",
    "def": "고리에 걸려 자유롭게 미끄러지는 자유단(free end)에서는 끝이 펄스 높이의 두 배까지 튀어 올랐다가 같은 쪽 펄스를 돌려보낸다.",
    "chapters": [
     "mechanical-waves#superposition"
    ]
   },
   {
    "ko": "자유도",
    "en": "degree of freedom",
    "abbr": "",
    "def": "분자의 에너지가 \\(\\tfrac12mv_x^2\\), \\(\\tfrac12I\\omega^2\\)처럼 속도(또는 좌표)의 제곱 항으로 쓰일 때, 그런 독립적인 항 하나하나를 자유도(degree of freedom)라 한다.",
    "chapters": [
     "kinetic-theory-first-law#equipartition"
    ]
   },
   {
    "ko": "자이로스코프",
    "en": "gyroscope",
    "abbr": "",
    "def": "이 신기한 운동을 세차 운동(precession)이라 하고, 이런 장치를 자이로스코프(gyroscope)라 한다.",
    "chapters": [
     "rotation-dynamics#gyro"
    ]
   },
   {
    "ko": "작업 물질",
    "en": "working substance",
    "abbr": "",
    "def": "열기관 속에서 순환 과정을 겪는 물질(물, 공기–연료 혼합물)을 작업 물질(working substance)이라 한다.",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "작용–반작용 쌍",
    "en": "action–reaction pair",
    "abbr": "",
    "def": "물체 A가 물체 B에 힘 \\(\\vec F_{A\\to B}\\)를 가하면, B도 A에 크기가 같고 방향이 반대인 힘을 가한다: \\(\\vec F_{B\\to A} = -\\vec F_{A\\to B}\\). 이 두 힘을 작용–반작용 쌍(action–reaction pair)이라 한다.",
    "chapters": [
     "newtons-laws#third-law"
    ]
   },
   {
    "ko": "작용선",
    "en": "line of action",
    "abbr": "",
    "def": "축에서 힘의 작용선(line of action)까지의 수직 거리 \\(l = r\\sin\\phi\\)를 지레팔(lever arm, moment arm)이라 한다.",
    "chapters": [
     "rotation-dynamics#torque"
    ]
   },
   {
    "ko": "잠열",
    "en": "latent heat",
    "abbr": "",
    "def": "단위 질량이 상을 바꾸는 데 드는 열을 잠열(latent heat)이라 한다.",
    "chapters": [
     "temperature-heat#phase"
    ]
   },
   {
    "ko": "장동",
    "en": "nutation",
    "abbr": "",
    "def": "SIMULATOR자이로스코프: 세차와 장동 (무거운 대칭 팽이의 정확한 운동 방정식) 화면을 좌우로 끌어 보는 방향을 돌린다 스핀 ω 받침점–원판 거리 r 처음 기울기(연직에서) 놓는 방법가만히 놓기세차 속도로 밀며 놓기 놓기 스핀 각운동량 L = Iω— 중력 토크 τ— Ω 예측 τ/L— Ω 측정— 에너지 오차— 원판: 질량 0.50 kg, 반지름 5.0 cm(…",
    "chapters": [
     "rotation-dynamics#gyro"
    ]
   },
   {
    "ko": "장력",
    "en": "tension",
    "abbr": "",
    "def": "줄이 물체를 당기는 힘을 장력(tension)이라 한다.",
    "chapters": [
     "applying-newton#equilibrium"
    ]
   },
   {
    "ko": "저감쇠",
    "en": "underdamping",
    "abbr": "",
    "def": "저감쇠(underdamping) \\(b < 2\\sqrt{km}\\): 진동하며 줄어든다.",
    "chapters": [
     "oscillations#damped"
    ]
   },
   {
    "ko": "저항력",
    "en": "drag force",
    "abbr": "",
    "def": "유체(공기·물) 속을 움직이는 물체는 속도 반대 방향의 저항력(drag force)을 받는다.",
    "chapters": [
     "applying-newton#drag"
    ]
   },
   {
    "ko": "전기 쌍극자",
    "en": "electric dipole",
    "abbr": "",
    "def": "크기가 같고 부호가 반대인 두 전하 \\(\\pm q\\)가 거리 \\(d\\)만큼 떨어진 것을 전기 쌍극자(electric dipole)라 한다.",
    "chapters": [
     "electric-field#dipole"
    ]
   },
   {
    "ko": "전기 쌍극자 모멘트",
    "en": "electric dipole moment",
    "abbr": "",
    "def": "쌍극자의 세기와 방향은 음전하에서 양전하를 향하는 전기 쌍극자 모멘트(electric dipole moment) \\(\\vec p\\)로 나타낸다.",
    "chapters": [
     "electric-field#dipole"
    ]
   },
   {
    "ko": "전기력선",
    "en": "electric field line",
    "abbr": "",
    "def": "전기장을 그림으로 나타내는 방법이 전기력선(electric field line)이다.",
    "chapters": [
     "electric-field#field"
    ]
   },
   {
    "ko": "전기장",
    "en": "electric field",
    "abbr": "",
    "def": "떨어져 있는 전하가 어떻게 서로 힘을 미칠까? 패러데이는 전하가 주위 공간에 전기장(electric field)을 만들고, 다른 전하는 자기가 있는 곳의 전기장에서 힘을 받는다고 생각했다.",
    "chapters": [
     "electric-field#field"
    ]
   },
   {
    "ko": "전단 탄성률",
    "en": "shear modulus",
    "abbr": "",
    "def": "점선이 원래 모양이다(변형은 크게 과장). $$Y = \\frac{F_\\perp/A}{\\Delta L/L_0}, \\qquad B = -\\frac{\\Delta p}{\\Delta V/V_0}, \\qquad S = \\frac{F_\\parallel/A}{x/h}$$\\(Y\\): 영률(Young's modulus), \\(B\\): 부피 탄성률(bulk modulus)(음의 부호는 압력이 늘면 부피가 줄기 때문, \\(1/B\\)은…",
    "chapters": [
     "equilibrium-elasticity#elastic"
    ]
   },
   {
    "ko": "전도",
    "en": "conduction",
    "abbr": "",
    "def": "전도(conduction)는 물질 자체는 움직이지 않고 이웃 원자·자유 전자의 충돌로 에너지가 전해지는 것, 대류(convection)는 데워진 유체가 직접 흘러가는 것, 복사(radiation)는 전자기파로 옮겨 가는 것이다.",
    "chapters": [
     "temperature-heat#conduction"
    ]
   },
   {
    "ko": "전하",
    "en": "electric charge",
    "abbr": "",
    "def": "이런 관찰로부터 전하(electric charge)에는 두 종류가 있고, 같은 종류끼리는 밀고 다른 종류끼리는 당긴다는 것을 안다.",
    "chapters": [
     "electric-field#charge"
    ]
   },
   {
    "ko": "전하 보존 법칙",
    "en": "conservation of charge",
    "abbr": "",
    "def": "전하 보존 법칙(conservation of charge): 고립계의 알짜 전하는 언제나 일정하다.",
    "chapters": [
     "electric-field#charge"
    ]
   },
   {
    "ko": "전하의 양자화",
    "en": "quantization of charge",
    "abbr": "",
    "def": "전하의 양자화(quantization of charge): 모든 물체의 전하는 기본 전하(elementary charge) \\(e = 1.602\\times10^{-19}\\) C의 정수배다.",
    "chapters": [
     "electric-field#charge"
    ]
   },
   {
    "ko": "전환점",
    "en": "turning point",
    "abbr": "",
    "def": "전환점(turning point): \\(U(x) = E\\)인 점. 속력이 0이 되고 운동 방향이 바뀐다.",
    "chapters": [
     "energy-conservation#diagram"
    ]
   },
   {
    "ko": "절대 압력",
    "en": "absolute pressure",
    "abbr": "",
    "def": "이것을 계기 압력(gauge pressure) \\(p - p_\\text{atm}\\)이라 하고, 진공을 기준으로 잰 \\(p\\)를 절대 압력(absolute pressure)이라 한다.",
    "chapters": [
     "fluids#pressure"
    ]
   },
   {
    "ko": "절대 영도",
    "en": "absolute zero",
    "abbr": "",
    "def": "과학에서 쓰는 켈빈 눈금(Kelvin scale)은 절대 영도(absolute zero)에서 0이고 눈금 간격은 섭씨와 같다.",
    "chapters": [
     "temperature-heat#temperature"
    ]
   },
   {
    "ko": "절연체",
    "en": "insulator",
    "abbr": "",
    "def": "금속처럼 전자 일부가 원자에 묶이지 않고 물질 속을 자유롭게 움직이는 물질이 도체(conductor), 유리·플라스틱·고무처럼 전자가 원자에 단단히 묶인 물질이 절연체(insulator)다.",
    "chapters": [
     "electric-field#charge"
    ]
   },
   {
    "ko": "점성",
    "en": "viscosity",
    "abbr": "",
    "def": "실제 유체에는 이웃한 층 사이의 내부 마찰, 곧 점성(viscosity)이 있다.",
    "chapters": [
     "fluids#viscosity"
    ]
   },
   {
    "ko": "접두사",
    "en": "prefix",
    "abbr": "",
    "def": "아주 크거나 작은 값에는 10의 거듭제곱을 뜻하는 접두사(prefix)를 붙인다.",
    "chapters": [
     "units-vectors#units"
    ]
   },
   {
    "ko": "접촉력",
    "en": "contact force",
    "abbr": "",
    "def": "두 물체가 맞닿아야 생기는 접촉력(contact force)과, 떨어져 있어도 작용하는 원거리력(long-range force)이다.",
    "chapters": [
     "newtons-laws#forces"
    ]
   },
   {
    "ko": "정규 모드",
    "en": "normal modes",
    "abbr": "",
    "def": "$$\\lambda_n = \\frac{2L}{n}, \\qquad f_n = n\\frac{v}{2L} = \\frac{n}{2L}\\sqrt{\\frac{F}{\\mu}} \\qquad (n = 1, 2, 3, \\ldots)$$\\(f_1\\): 기본 진동수(fundamental frequency). \\(f_n = nf_1\\)을 배음(harmonics)이라 하고, 이 진동 양식들을 줄의 정규 모드(normal modes)라 한다.",
    "chapters": [
     "mechanical-waves#standing"
    ]
   },
   {
    "ko": "정상 상태",
    "en": "steady state",
    "abbr": "",
    "def": "단면적 \\(A\\), 길이 \\(L\\)인 막대(또는 판)의 두 끝 온도가 \\(T_H\\), \\(T_C\\)로 유지되면, 시간이 지나 각 점의 온도가 변하지 않는 정상 상태(steady state)에서 단위 시간당 흐르는 열, 곧 열류(heat current)는.",
    "chapters": [
     "temperature-heat#conduction"
    ]
   },
   {
    "ko": "정상 흐름",
    "en": "steady flow",
    "abbr": "",
    "def": "각 점의 속도가 시간에 따라 변하지 않는 흐름을 정상 흐름(steady flow)이라 한다.",
    "chapters": [
     "fluids#continuity"
    ]
   },
   {
    "ko": "정상파",
    "en": "standing wave",
    "abbr": "",
    "def": "진폭이 같고 반대로 가는 두 사인파의 합은 더 이상 진행하지 않는 정상파(standing wave)가 된다.",
    "chapters": [
     "mechanical-waves#standing"
    ]
   },
   {
    "ko": "정수압 역설",
    "en": "hydrostatic paradox",
    "abbr": "",
    "def": "바닥의 압력은 어느 그릇이 가장 클까? 물이 가장 많은 깔때기바닥이 넓은 꽃병모두 같다곧은 통 압력은 수면에서의 깊이 \\(h\\)로만 정해진다(정수압 역설(hydrostatic paradox)). 아래 실험실에서 그릇 모양을 바꿔 가며 같은 깊이의 압력을 비교해 보라.",
    "chapters": [
     "fluids#pressure"
    ]
   },
   {
    "ko": "정적 평형",
    "en": "static equilibrium",
    "abbr": "",
    "def": "특히 처음에 정지해 있어 계속 정지하는 경우를 정적 평형(static equilibrium)이라 한다.",
    "chapters": [
     "equilibrium-elasticity#conditions"
    ]
   },
   {
    "ko": "정지 궤도",
    "en": "geostationary orbit",
    "abbr": "",
    "def": "이 정지 궤도(geostationary orbit)는 고도 약 35 790 km로, 방송·기상 위성이 쓴다.",
    "chapters": [
     "gravitation#satellites"
    ]
   },
   {
    "ko": "정지 마찰력",
    "en": "static friction",
    "abbr": "",
    "def": "정지 마찰력(static friction)은 면이 서로 미끄러지지 않을 때 작용하며, 미끄러짐을 막는 데 필요한 만큼만 생긴다: \\(f_s \\le \\mu_s n\\). 운동 마찰력(kinetic friction)은 미끄러지는 동안 작용하며 크기가 거의 일정하다: \\(f_k = \\mu_k n\\). 방향은 언제나 면을 따라, 상대적인 미끄러짐(또는 그 경향)의 반대쪽이다.",
    "chapters": [
     "applying-newton#friction"
    ]
   },
   {
    "ko": "제곱 평균 제곱근 속력",
    "en": "root-mean-square speed",
    "abbr": "",
    "def": "$$\\langle K_\\text{tr}\\rangle = \\tfrac12 m\\langle v^2\\rangle = \\tfrac32 kT, \\qquad v_\\text{rms} = \\sqrt{\\langle v^2\\rangle} = \\sqrt{\\frac{3kT}{m}} = \\sqrt{\\frac{3RT}{M}}$$\\(v_\\text{rms}\\): 제곱 평균 제곱근 속력(root-mean-square speed). 같은 온도의 기체는…",
    "chapters": [
     "kinetic-theory-first-law#kinetic"
    ]
   },
   {
    "ko": "종단 속도",
    "en": "terminal speed",
    "abbr": "",
    "def": "이 속력이 종단 속도(terminal speed)다.",
    "chapters": [
     "applying-newton#drag"
    ]
   },
   {
    "ko": "종파",
    "en": "longitudinal wave",
    "abbr": "",
    "def": "매질의 변위가 파동의 진행 방향에 수직이면 횡파(transverse wave), 나란하면 종파(longitudinal wave)다.",
    "chapters": [
     "mechanical-waves#types"
    ]
   },
   {
    "ko": "주기",
    "en": "period",
    "abbr": "",
    "def": "진폭(amplitude) \\(A\\): 평형에서 최대 변위의 크기(항상 양수). 주기(period) \\(T\\): 한 번 왕복하는 데 걸리는 시간. 진동수(frequency) \\(f = 1/T\\): 1초당 왕복 횟수(단위 Hz = s⁻¹). 각진동수(angular frequency) \\(\\omega = 2\\pi f\\)(rad/s).",
    "chapters": [
     "oscillations#describe"
    ]
   },
   {
    "ko": "주기 운동",
    "en": "periodic motion",
    "abbr": "",
    "def": "이러한 운동이 주기 운동(periodic motion) 또는 진동(oscillation)이다.",
    "chapters": [
     "oscillations#describe"
    ]
   },
   {
    "ko": "주기적 파동",
    "en": "periodic wave",
    "abbr": "",
    "def": "줄의 끝을 단순 조화 운동으로 계속 흔들면 줄의 모든 부분이 같은 진동수로 진동하는 주기적 파동(periodic wave)이 생긴다.",
    "chapters": [
     "mechanical-waves#periodic"
    ]
   },
   {
    "ko": "주위",
    "en": "surroundings",
    "abbr": "",
    "def": "열역학에서는 관심 있는 물체(대개 기체)를 계(system), 나머지를 주위(surroundings)라 한다.",
    "chapters": [
     "kinetic-theory-first-law#first-law"
    ]
   },
   {
    "ko": "준정적 과정",
    "en": "quasi-static process",
    "abbr": "",
    "def": "이상 기체에서 자주 만나는 네 과정을 정리하자. 모두 준정적 과정(quasi-static process), 곧 아주 천천히 진행해 매 순간 기체가 평형 상태에 있다고 볼 수 있는 과정이다.",
    "chapters": [
     "kinetic-theory-first-law#processes"
    ]
   },
   {
    "ko": "줄",
    "en": "joule",
    "abbr": "",
    "def": "일은 스칼라이며 SI 단위는 줄(joule), 1 J = 1 N·m이다.",
    "chapters": [
     "work-energy#work"
    ]
   },
   {
    "ko": "중력 가속도",
    "en": "acceleration due to gravity",
    "abbr": "",
    "def": "이 일정한 가속도의 크기가 중력 가속도(acceleration due to gravity) \\(g\\)다.",
    "chapters": [
     "straight-line-motion#free-fall"
    ]
   },
   {
    "ko": "중력 상수",
    "en": "gravitational constant",
    "abbr": "",
    "def": "$$F_g = \\frac{G m_1 m_2}{r^2}, \\qquad \\vec F_{2\\,\\text{on}\\,1} = \\frac{G m_1 m_2}{r^2}\\,\\hat r_{1\\to2}$$\\(G = 6.674\\times10^{-11}\\ \\text{N·m}^2/\\text{kg}^2\\): 중력 상수(gravitational constant). 두 힘은 작용–반작용 쌍이다(4장). 크기가 있는 구형 물체는 중심 사이 거리…",
    "chapters": [
     "gravitation#law"
    ]
   },
   {
    "ko": "중력 퍼텐셜 에너지",
    "en": "gravitational potential energy",
    "abbr": "",
    "def": "지표 근처에서 중력 퍼텐셜 에너지(gravitational potential energy)는 \\(U_\\text{grav} = mgy\\)이다.",
    "chapters": [
     "energy-conservation#gravity"
    ]
   },
   {
    "ko": "중력장",
    "en": "gravitational field",
    "abbr": "",
    "def": "여러 물체가 함께 끌어당기면 알짜 중력은 각 물체가 주는 힘의 벡터 합이다(중첩 원리(superposition principle)). 시험 질량 \\(m\\)이 받는 힘을 \\(m\\)으로 나눈 양 \\(\\vec g = \\vec F/m\\)을 그 점의 중력장(gravitational field)이라 한다.",
    "chapters": [
     "gravitation#law"
    ]
   },
   {
    "ko": "중심력",
    "en": "central force",
    "abbr": "",
    "def": "중력은 태양을 향하는 중심력(central force)이라 태양에 대한 토크가 0이고, 각운동량 \\(L = mr^2\\,d\\theta/dt\\)가 보존된다(10장).",
    "chapters": [
     "gravitation#kepler"
    ]
   },
   {
    "ko": "중첩 원리",
    "en": "superposition of forces",
    "abbr": "",
    "def": "이것을 힘의 중첩 원리(superposition of forces)라 하고, 그 합을 알짜힘(net force) 또는 합력이라 부른다.",
    "chapters": [
     "newtons-laws#forces"
    ]
   },
   {
    "ko": "지레팔",
    "en": "lever arm, moment arm",
    "abbr": "",
    "def": "축에서 힘의 작용선(line of action)까지의 수직 거리 \\(l = r\\sin\\phi\\)를 지레팔(lever arm, moment arm)이라 한다.",
    "chapters": [
     "rotation-dynamics#torque"
    ]
   },
   {
    "ko": "진공의 유전율",
    "en": "permittivity of free space",
    "abbr": "",
    "def": "두 힘은 크기가 같고 방향이 반대다(작용–반작용) — 쿨롱 법칙(Coulomb's law). $$F = k\\frac{|q_1q_2|}{r^2}, \\qquad k = \\frac{1}{4\\pi\\epsilon_0} = 8.988\\times10^9\\ \\text{N·m}^2/\\text{C}^2$$\\(\\epsilon_0 = 8.854\\times10^{-12}\\) C²/(N·m²): 진공의 유전율(permittivity of…",
    "chapters": [
     "electric-field#coulomb"
    ]
   },
   {
    "ko": "진동",
    "en": "oscillation",
    "abbr": "",
    "def": "이러한 운동이 주기 운동(periodic motion) 또는 진동(oscillation)이다.",
    "chapters": [
     "oscillations#describe"
    ]
   },
   {
    "ko": "진동수",
    "en": "frequency",
    "abbr": "",
    "def": "진폭(amplitude) \\(A\\): 평형에서 최대 변위의 크기(항상 양수). 주기(period) \\(T\\): 한 번 왕복하는 데 걸리는 시간. 진동수(frequency) \\(f = 1/T\\): 1초당 왕복 횟수(단위 Hz = s⁻¹). 각진동수(angular frequency) \\(\\omega = 2\\pi f\\)(rad/s).",
    "chapters": [
     "oscillations#describe"
    ]
   },
   {
    "ko": "진폭",
    "en": "amplitude",
    "abbr": "",
    "def": "진폭(amplitude) \\(A\\): 평형에서 최대 변위의 크기(항상 양수). 주기(period) \\(T\\): 한 번 왕복하는 데 걸리는 시간. 진동수(frequency) \\(f = 1/T\\): 1초당 왕복 횟수(단위 Hz = s⁻¹). 각진동수(angular frequency) \\(\\omega = 2\\pi f\\)(rad/s).",
    "chapters": [
     "oscillations#describe"
    ]
   },
   {
    "ko": "질량",
    "en": "mass",
    "abbr": "",
    "def": "(3) 같은 알짜힘에서 가속도는 물체의 질량(mass)에 반비례한다.",
    "chapters": [
     "newtons-laws#second-law"
    ]
   },
   {
    "ko": "질량 중심",
    "en": "center of mass",
    "abbr": "",
    "def": "그 점이 질량 중심(center of mass)이다.",
    "chapters": [
     "momentum#center-of-mass"
    ]
   },
   {
    "ko": "차원",
    "en": "dimension",
    "abbr": "",
    "def": "물리량의 차원(dimension)은 그 양이 어떤 기본량으로 이루어졌는지를 나타낸다.",
    "chapters": [
     "units-vectors#units"
    ]
   },
   {
    "ko": "초음파",
    "en": "ultrasound",
    "abbr": "",
    "def": "사람이 들을 수 있는 진동수는 대략 20 Hz–20 kHz(가청 진동수(audible range))이고, 그보다 낮으면 초저주파(infrasound), 높으면 초음파(ultrasound)라 한다.",
    "chapters": [
     "sound#sound-waves"
    ]
   },
   {
    "ko": "초저주파",
    "en": "infrasound",
    "abbr": "",
    "def": "사람이 들을 수 있는 진동수는 대략 20 Hz–20 kHz(가청 진동수(audible range))이고, 그보다 낮으면 초저주파(infrasound), 높으면 초음파(ultrasound)라 한다.",
    "chapters": [
     "sound#sound-waves"
    ]
   },
   {
    "ko": "추력",
    "en": "thrust",
    "abbr": "",
    "def": "$$\\Delta v = v - v_0 = v_\\text{ex}\\ln\\frac{m_0}{m}, \\qquad F_\\text{추력} = v_\\text{ex}\\left|\\frac{dm}{dt}\\right|$$\\(v_\\text{ex}\\): 배기 속력(exhaust speed)(로켓에 대한 연료의 속력), \\(m_0/m\\): 질량비. 중력이 있으면 연소 시간 \\(t\\) 동안 \\(-gt\\)가 더해진다.",
    "chapters": [
     "momentum#rocket"
    ]
   },
   {
    "ko": "충격량",
    "en": "impulse",
    "abbr": "",
    "def": "이 적분을 충격량(impulse)이라 한다.",
    "chapters": [
     "momentum#impulse"
    ]
   },
   {
    "ko": "충격파",
    "en": "shock wave",
    "abbr": "",
    "def": "마루들의 포락면이 원뿔을 이루어 압력이 급격히 뛰는 충격파(shock wave)가 생긴다.",
    "chapters": [
     "sound#doppler"
    ]
   },
   {
    "ko": "충돌 매개변수",
    "en": "impact parameter",
    "abbr": "",
    "def": "처음 진행 방향을 \\(x\\)로 잡으면 B가 정지해 있을 때 $$m_A v_{A1} = m_A v_{A2}\\cos\\alpha + m_B v_{B2}\\cos\\beta, \\qquad 0 = m_A v_{A2}\\sin\\alpha - m_B v_{B2}\\sin\\beta$$\\(\\alpha, \\beta\\): 충돌 후 A, B가 \\(x\\)축과 이루는 각(서로 반대쪽). 탄성이면 에너지 식이 하나 더 있지만 미지수가 네 개이므로 하나는…",
    "chapters": [
     "momentum#collisions-2d"
    ]
   },
   {
    "ko": "층류",
    "en": "laminar flow",
    "abbr": "",
    "def": "층이 미끄러지듯 매끈하게 흐르는 정상 흐름을 층류(laminar flow)라 한다.",
    "chapters": [
     "fluids#continuity"
    ]
   },
   {
    "ko": "카르노 순환",
    "en": "Carnot cycle",
    "abbr": "",
    "def": "유한한 온도 차를 건너는 열전달은 비가역이므로, 최선의 기관은 열저장체와 같은 온도에서만 열을 주고받고(등온 과정), 두 온도 사이는 열 출입 없이 오가야 한다(단열 과정). 이것이 카르노 순환(Carnot cycle)이다.",
    "chapters": [
     "second-law#carnot"
    ]
   },
   {
    "ko": "카르노 정리",
    "en": "Carnot's theorem",
    "abbr": "",
    "def": "카르노 정리(Carnot's theorem): 같은 두 열저장체 사이에서 작동하는 어떤 기관도 카르노 기관보다 효율이 높을 수 없고, 모든 가역 기관의 효율은 작업 물질과 상관없이 \\(e_\\text{C}\\)로 같다.",
    "chapters": [
     "second-law#carnot"
    ]
   },
   {
    "ko": "켈빈 눈금",
    "en": "Kelvin scale",
    "abbr": "",
    "def": "과학에서 쓰는 켈빈 눈금(Kelvin scale)은 절대 영도(absolute zero)에서 0이고 눈금 간격은 섭씨와 같다.",
    "chapters": [
     "temperature-heat#temperature"
    ]
   },
   {
    "ko": "쿨롱 법칙",
    "en": "Coulomb's law",
    "abbr": "",
    "def": "두 힘은 크기가 같고 방향이 반대다(작용–반작용) — 쿨롱 법칙(Coulomb's law).",
    "chapters": [
     "electric-field#coulomb"
    ]
   },
   {
    "ko": "크기 자릿수 어림",
    "en": "order-of-magnitude estimate",
    "abbr": "",
    "def": "이를 크기 자릿수 어림(order-of-magnitude estimate) 또는 페르미 추정이라 한다.",
    "chapters": [
     "units-vectors#estimation"
    ]
   },
   {
    "ko": "탄동 진자",
    "en": "ballistic pendulum",
    "abbr": "",
    "def": "총알의 속력처럼 직접 재기 힘든 속력은 탄동 진자(ballistic pendulum)로 잰다.",
    "chapters": [
     "momentum#inelastic"
    ]
   },
   {
    "ko": "탄성 충돌",
    "en": "elastic collision",
    "abbr": "",
    "def": "운동 에너지가 보존되는 충돌을 탄성 충돌(elastic collision), 줄어드는 충돌을 비탄성 충돌(inelastic collision), 두 물체가 붙어서 함께 움직이는 경우를 완전 비탄성 충돌(completely inelastic collision)이라 한다.",
    "chapters": [
     "momentum#inelastic"
    ]
   },
   {
    "ko": "탄성 퍼텐셜 에너지",
    "en": "elastic potential energy",
    "abbr": "",
    "def": "자연 길이에서 \\(x\\)만큼 변형된 용수철에 저장된 탄성 퍼텐셜 에너지(elastic potential energy)는 \\(U_\\text{el} = \\tfrac12kx^2\\)이다.",
    "chapters": [
     "energy-conservation#elastic"
    ]
   },
   {
    "ko": "탄성 한계",
    "en": "elastic limit",
    "abbr": "",
    "def": "처음 직선 구간의 끝이 비례 한계(proportional limit), 하중을 없앴을 때 원래 모양으로 돌아오는 최대 응력이 탄성 한계(elastic limit)다.",
    "chapters": [
     "equilibrium-elasticity#plastic"
    ]
   },
   {
    "ko": "탄성률",
    "en": "elastic modulus",
    "abbr": "",
    "def": "응력이 충분히 작으면 둘은 비례한다(훅 법칙(Hooke's law)): 응력/변형률 = 탄성률(elastic modulus).",
    "chapters": [
     "equilibrium-elasticity#elastic"
    ]
   },
   {
    "ko": "탈출 속도",
    "en": "escape speed",
    "abbr": "",
    "def": "\\(\\tfrac12 mv^2 - GMm/R = 0\\)에서 탈출 속도(escape speed)는.",
    "chapters": [
     "gravitation#potential"
    ]
   },
   {
    "ko": "토리첼리 정리",
    "en": "Torricelli's theorem",
    "abbr": "",
    "def": "$$v = \\sqrt{2gh} \\qquad (\\text{토리첼리 정리})$$구멍에서 나오는 물의 속력은 높이 \\(h\\)에서 자유 낙하한 물체의 속력과 같다(토리첼리 정리(Torricelli's theorem)).",
    "chapters": [
     "fluids#bernoulli"
    ]
   },
   {
    "ko": "토크",
    "en": "torque",
    "abbr": "",
    "def": "회전축 O에서 힘의 작용점까지의 위치 벡터를 \\(\\vec r\\), 힘을 \\(\\vec F\\), 둘 사이의 각을 \\(\\phi\\)라 하면 O에 대한 토크(torque)의 크기는 \\(\\tau = rF\\sin\\phi\\)이다.",
    "chapters": [
     "rotation-dynamics#torque"
    ]
   },
   {
    "ko": "파괴",
    "en": "fracture",
    "abbr": "",
    "def": "곡선의 최고점이 극한 강도(ultimate strength)이고, 그 뒤 시편은 가운데가 잘록해지며(넥킹) 결국 파괴(fracture)된다.",
    "chapters": [
     "equilibrium-elasticity#plastic"
    ]
   },
   {
    "ko": "파동 방정식",
    "en": "wave equation",
    "abbr": "",
    "def": "\\(y = f(x - vt)\\)를 두 번 미분하면 \\(\\partial^2y/\\partial x^2 = f''\\), \\(\\partial^2y/\\partial t^2 = v^2f''\\)이므로 모든 진행파는 파동 방정식(wave equation) $$\\frac{\\partial^2 y}{\\partial x^2} = \\frac{1}{v^2}\\frac{\\partial^2 y}{\\partial t^2}$$을 만족한다.",
    "chapters": [
     "mechanical-waves#periodic"
    ]
   },
   {
    "ko": "파동 속력",
    "en": "wave speed",
    "abbr": "",
    "def": "파동이 진행하는 속력 \\(v\\)를 파동 속력(wave speed)이라 한다.",
    "chapters": [
     "mechanical-waves#types"
    ]
   },
   {
    "ko": "파동 함수",
    "en": "wave function",
    "abbr": "",
    "def": "파동을 수식으로 쓰려면 위치 \\(x\\)에 있는 매질 입자의 시각 \\(t\\)에서의 변위 \\(y(x,t)\\) — 파동 함수(wave function) — 가 필요하다.",
    "chapters": [
     "mechanical-waves#periodic"
    ]
   },
   {
    "ko": "파수",
    "en": "wave number",
    "abbr": "",
    "def": "v = λ/T = fλ 한 점은 주기 T마다 한 번 진동한다 사인파의 해부도. 한 주기 \\(T\\) 동안 파동은 한 파장 \\(\\lambda\\)만큼 나아가므로 \\(v = \\lambda/T = f\\lambda\\). $$v = f\\lambda = \\frac{\\omega}{k}, \\qquad k = \\frac{2\\pi}{\\lambda}, \\qquad \\omega = 2\\pi f = \\frac{2\\pi}{T}$$\\(k\\):…",
    "chapters": [
     "mechanical-waves#periodic"
    ]
   },
   {
    "ko": "파스칼",
    "en": "pascal",
    "abbr": "",
    "def": "균일한 물질의 밀도(density)는 \\(\\rho = m/V\\)이다(단위 kg/m³). 유체가 넓이 \\(dA\\)인 면에 수직으로 힘 \\(dF_\\perp\\)를 가할 때 압력(pressure)은 \\(p = dF_\\perp/dA\\)이고, 단위는 파스칼(pascal) 1 Pa = 1 N/m²이다.",
    "chapters": [
     "fluids#pressure"
    ]
   },
   {
    "ko": "파스칼 원리",
    "en": "Pascal's principle",
    "abbr": "",
    "def": "밀폐된 유체의 한 부분에 가한 압력 변화는 줄어들지 않고 유체의 모든 부분과 그릇의 벽에 그대로 전달된다(파스칼 원리(Pascal's principle)).",
    "chapters": [
     "fluids#pascal"
    ]
   },
   {
    "ko": "평균 속도",
    "en": "average velocity",
    "abbr": "",
    "def": "평균 속도(average velocity)는 변위를 걸린 시간으로 나눈 값 \\(v_{\\text{av},x} = \\Delta x/\\Delta t\\)로, 부호가 있다.",
    "chapters": [
     "straight-line-motion#displacement"
    ]
   },
   {
    "ko": "평균 속력",
    "en": "average speed",
    "abbr": "",
    "def": "평균 속력(average speed)은 이동 거리를 시간으로 나눈 값으로, 언제나 0 이상이다.",
    "chapters": [
     "straight-line-motion#displacement"
    ]
   },
   {
    "ko": "평균 자유 경로",
    "en": "mean free path",
    "abbr": "",
    "def": "반지름 \\(r\\)인 분자가 연이은 두 충돌 사이에 가는 평균 거리, 곧 평균 자유 경로(mean free path)는.",
    "chapters": [
     "kinetic-theory-first-law#kinetic"
    ]
   },
   {
    "ko": "평행축 정리",
    "en": "parallel-axis theorem",
    "abbr": "",
    "def": "질량 \\(M\\)인 물체의, 질량 중심을 지나는 축과 평행하며 거리 \\(d\\)인 축 P에 대한 관성 모멘트는 \\(I_P = I_\\text{cm} + Md^2\\)이다(평행축 정리(parallel-axis theorem)). 따라서 평행한 축들 가운데 \\(I\\)는 질량 중심축에서 가장 작다.",
    "chapters": [
     "rotation-kinematics#parallel-axis"
    ]
   },
   {
    "ko": "평형",
    "en": "equilibrium",
    "abbr": "",
    "def": "알짜힘이 0인 상태 — 정지해 있든 등속으로 움직이든 — 를 평형(equilibrium)이라 한다.",
    "chapters": [
     "newtons-laws#first-law"
    ]
   },
   {
    "ko": "푸아죄유 법칙",
    "en": "Poiseuille's law",
    "abbr": "",
    "def": "반지름 \\(R\\), 길이 \\(L\\)인 원형 관의 층류에서 속도 분포는 포물선 \\(v(r) = \\dfrac{p_1 - p_2}{4\\eta L}(R^2 - r^2)\\)이고, 이를 단면 전체에 대해 적분하면 푸아죄유 법칙(Poiseuille's law)을 얻는다.",
    "chapters": [
     "fluids#viscosity"
    ]
   },
   {
    "ko": "품질 인자",
    "en": "quality factor",
    "abbr": "",
    "def": "공명 봉우리의 날카로움은 품질 인자(quality factor) \\(Q = m\\omega_0/b\\)로 나타낸다.",
    "chapters": [
     "oscillations#resonance"
    ]
   },
   {
    "ko": "피로",
    "en": "fatigue",
    "abbr": "",
    "def": "비행기 날개, 다리, 자전거 크랭크는 극한 강도가 아니라 이 피로(fatigue) 한계를 기준으로 설계한다.",
    "chapters": [
     "equilibrium-elasticity#plastic"
    ]
   },
   {
    "ko": "항복",
    "en": "yield",
    "abbr": "",
    "def": "그 너머에서 물질은 항복(yield)하여 소성 변형(plastic deformation)을 겪는다: 하중을 없애도 영구 변형이 남는다.",
    "chapters": [
     "equilibrium-elasticity#plastic"
    ]
   },
   {
    "ko": "환산 인자",
    "en": "conversion factor",
    "abbr": "",
    "def": "이런 환산 인자(conversion factor)는 1과 같으므로 어떤 양에 곱해도 값은 그대로이고 단위만 바뀐다.",
    "chapters": [
     "units-vectors#units"
    ]
   },
   {
    "ko": "활력 방정식",
    "en": "vis-viva equation",
    "abbr": "",
    "def": "속력은 에너지(\\(E = \\tfrac12v^2 - GM/r = -GM/2a\\), 이른바 활력 방정식(vis-viva equation))를 통해 긴반지름 \\(a\\)를, 방향은 각운동량을 통해 이심률과 궤도 방향을 정한다.",
    "chapters": [
     "gravitation#satellites"
    ]
   },
   {
    "ko": "횡파",
    "en": "transverse wave",
    "abbr": "",
    "def": "매질의 변위가 파동의 진행 방향에 수직이면 횡파(transverse wave), 나란하면 종파(longitudinal wave)다.",
    "chapters": [
     "mechanical-waves#types"
    ]
   },
   {
    "ko": "훅 법칙",
    "en": "Hooke's law",
    "abbr": "",
    "def": "훅 법칙(Hooke's law): 용수철이 물체에 작용하는 힘은 \\(F_x = -kx\\)이다.",
    "chapters": [
     "work-energy#spring"
    ]
   },
   {
    "ko": "흑체",
    "en": "blackbody",
    "abbr": "",
    "def": "\\(e = 1\\)인 이상적 물체가 흑체(blackbody)다.",
    "chapters": [
     "temperature-heat#radiation"
    ]
   },
   {
    "ko": "희박",
    "en": "rarefaction",
    "abbr": "",
    "def": "분자들이 앞뒤로 움직이면 어떤 곳은 분자가 몰려 압력이 높아지고(압축(compression)), 어떤 곳은 성겨져 압력이 낮아진다(희박(rarefaction)). 단면적 \\(S\\), 길이 \\(\\Delta x\\)인 공기 조각의 부피 변화는 \\(\\Delta V = S\\,[y(x+\\Delta x) - y(x)]\\)이므로 \\(\\Delta V/V \\to \\partial y/\\partial x\\)이고, 부피 탄성률…",
    "chapters": [
     "sound#sound-waves"
    ]
   },
   {
    "ko": "힘",
    "en": "force",
    "abbr": "",
    "def": "일상어로 힘은 \"미는 것 또는 당기는 것\"이다.",
    "chapters": [
     "newtons-laws#forces"
    ]
   }
  ]
 }
});
