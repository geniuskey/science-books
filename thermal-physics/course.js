/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "thermal-physics",
 "title": "열·통계물리와 물리화학",
 "en": "Thermal Physics and Physical Chemistry",
 "field": "physics",
 "level": "대학 2–3학년 · 반도체 기초",
 "status": "writing",
 "description": "온도와 상태 방정식, 열역학 제1·2법칙, 자유 에너지에서 출발해 미시 상태와 볼츠만 분포, 양자 통계, 기체 운동론과 진공, 상전이와 이성분 상태도, 화학 평형과 반응 속도, 표면·흡착과 박막 성장, 전기화학, 확산과 열전달까지 — 분자를 직접 부딪치고 에너지를 나눠 주며 공정 챔버 속 열과 물질의 움직임을 익히는 인터랙티브 교과서.",
 "accent": {
  "light": "#c2410c",
  "dark": "#fb923c",
  "light2": "#0369a1",
  "dark2": "#38bdf8"
 },
 "mark": "<path d=\"M13 5a3 3 0 0 1 6 0v12.2a6 6 0 1 1-6 0z\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.9\"/><circle cx=\"16\" cy=\"22\" r=\"3\" fill=\"#fff\"/><path d=\"M16 21V10\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M22.5 9h4M22.5 13h3M22.5 17h4\" stroke=\"#fff\" stroke-width=\"1.4\" stroke-linecap=\"round\"/>",
 "parts": [
  {
   "title": "제1부 열역학의 법칙",
   "chapters": [
    {
     "slug": "equations-of-state",
     "num": "01",
     "title": "온도와 상태 방정식",
     "en": "Temperature and Equations of State",
     "desc": "열평형과 열역학 제0법칙, 온도 눈금과 기체 온도계, 이상 기체와 돌턴 분압 법칙, 실제 기체의 압축 인자와 비리얼 전개, 판데르발스 등온선과 임계점, 대응 상태 원리, 열팽창 계수와 압축률 — 가스 실린더 압력과 MFC 표준 유량(sccm).",
     "tags": [
      "이상 기체",
      "판데르발스"
     ]
    },
    {
     "slug": "first-law",
     "num": "02",
     "title": "제1법칙과 엔탈피",
     "en": "The First Law and Enthalpy",
     "desc": "일과 열, 내부 에너지와 상태 함수, PV 도표 위의 일(등온·단열·등압·등적), 열용량 Cₚ·Cᵥ와 비열비, 엔탈피와 반응열, 헤스 법칙과 표준 생성 엔탈피, 키르히호프 법칙, 단열 팽창과 줄–톰슨 효과 — 가스 감압 냉각과 산화·증착 반응열.",
     "tags": [
      "내부 에너지",
      "엔탈피"
     ]
    },
    {
     "slug": "second-law",
     "num": "03",
     "title": "엔트로피와 제2법칙",
     "en": "Entropy and the Second Law",
     "desc": "자발 과정과 비가역성, 열기관과 카르노 효율, 냉동기·열펌프의 성능 계수, 클라우지우스 부등식과 엔트로피, 과정별 엔트로피 변화, 혼합 엔트로피, 제3법칙과 절대 엔트로피, 엑서지와 잃어버린 일 — 팹 칠러의 COP와 폐열 회수.",
     "tags": [
      "엔트로피",
      "카르노 효율"
     ]
    },
    {
     "slug": "free-energy",
     "num": "04",
     "title": "자유 에너지와 열역학 퍼텐셜",
     "en": "Free Energy and Thermodynamic Potentials",
     "desc": "헬름홀츠·깁스 자유 에너지와 평형 조건, 르장드르 변환과 네 가지 퍼텐셜, 맥스웰 관계식, 화학 퍼텐셜, 깁스–헬름홀츠 식, 온도·압력에 따른 G, Cₚ − Cᵥ 같은 열역학 항등식, 최대 비팽창 일 — 공정 반응이 저절로 일어나는 방향 읽기.",
     "tags": [
      "깁스 자유 에너지",
      "맥스웰 관계식"
     ]
    }
   ]
  },
  {
   "title": "제2부 통계역학",
   "chapters": [
    {
     "slug": "microstates",
     "num": "05",
     "title": "미시 상태와 통계적 엔트로피",
     "en": "Microstates and Statistical Entropy",
     "desc": "미시 상태와 거시 상태, 동전·2준위 계의 겹침수, 아인슈타인 고체와 에너지 나눔, 가장 그럴듯한 상태와 요동의 크기, 볼츠만 엔트로피 S = k ln Ω, 온도의 통계적 정의, 스핀 상자성체와 음의 온도, 비가역성의 통계적 의미 — 열이 뜨거운 쪽에서 차가운 쪽으로만 흐르는 이유.",
     "tags": [
      "겹침수",
      "볼츠만 엔트로피"
     ]
    },
    {
     "slug": "boltzmann",
     "num": "06",
     "title": "볼츠만 분포와 분배 함수",
     "en": "The Boltzmann Distribution and Partition Functions",
     "desc": "열저장체와 볼츠만 인자, 분배 함수에서 평균 에너지·열용량·자유 에너지 얻기, 2준위·조화 진동자·강체 회전자, 에너지 등분배와 그 붕괴, 병진 분배 함수와 사쿠르–테트로드 식, 기체 분자의 열용량과 분자 분광, 점결함 농도 — 활성화 에너지를 넘는 분자의 비율.",
     "tags": [
      "볼츠만 인자",
      "분배 함수"
     ]
    },
    {
     "slug": "quantum-statistics",
     "num": "07",
     "title": "양자 통계",
     "en": "Quantum Statistics",
     "desc": "동일 입자와 대정준 앙상블, 화학 퍼텐셜, 페르미–디랙·보스–아인슈타인 분포와 고전 극한, 축퇴 페르미 기체와 페르미 에너지·전자 열용량, 반도체 캐리어의 볼츠만 근사, 흑체 복사와 플랑크 법칙, 포논 기체와 디바이 비열, 보스–아인슈타인 응축 — 고온계(파이로미터)와 RTP 웨이퍼 온도 측정.",
     "tags": [
      "페르미–디랙",
      "플랑크 법칙"
     ]
    },
    {
     "slug": "kinetic-theory-vacuum",
     "num": "08",
     "title": "기체 운동론과 진공",
     "en": "Kinetic Theory and Vacuum",
     "desc": "맥스웰–볼츠만 속력 분포, 압력의 미시적 유래, 벽 충돌 플럭스와 단분자층 형성 시간, 평균 자유 행로와 크누센 수, 분출과 기체 분리, 점성·열전도·확산의 운동론, 분자류 컨덕턴스와 배기 시간, 진공 게이지 — 로드락 배기와 챔버 베이스 압력.",
     "tags": [
      "평균 자유 행로",
      "컨덕턴스"
     ]
    }
   ]
  },
  {
   "title": "제3부 상평형",
   "chapters": [
    {
     "slug": "phase-transitions",
     "num": "09",
     "title": "순물질의 상전이",
     "en": "Phase Transitions of Pure Substances",
     "desc": "상평형 조건과 화학 퍼텐셜, 클라우지우스–클라페이롱 식과 증기압, 물·CO₂·실리콘의 상태도, 임계점과 초임계 유체, 판데르발스 기체와 맥스웰 작도, 준안정 상태와 과냉각, 1차·연속 상전이, 이징 모형과 평균장 이론, 몬테카를로 시뮬레이션 — 전구체 버블러 증기압과 초임계 CO₂ 건조.",
     "tags": [
      "증기압",
      "이징 모형"
     ]
    },
    {
     "slug": "solutions",
     "num": "10",
     "title": "용액과 혼합",
     "en": "Solutions and Mixtures",
     "desc": "부분 몰량, 혼합의 깁스 에너지·엔트로피·엔탈피, 이상 용액과 라울 법칙, 헨리 법칙과 기체 용해도, 활동도와 활동도 계수, 정규 용액 모형과 상분리·스피노달, 총괄성(끓는점 오름·어는점 내림·삼투압), 증류와 기액 평형 — 초순수 속 용존 산소와 습식 세정 용액.",
     "tags": [
      "라울 법칙",
      "정규 용액"
     ]
    },
    {
     "slug": "binary-phase-diagrams",
     "num": "11",
     "title": "이성분 상태도",
     "en": "Binary Phase Diagrams",
     "desc": "깁스 상규칙, 자유 에너지 곡선과 공통 접선, 전율 고용체(Si–Ge)와 지렛대 규칙, 공정계(Al–Si, Au–Si)와 포정계, 고용도 한계와 도펀트 고용도, 응고와 편석 계수·쇼이어 식, 존 정제와 초크랄스키 성장, 금속간 화합물과 실리사이드 — 잉곳 성장과 콘택 합금.",
     "tags": [
      "지렛대 규칙",
      "공정계"
     ]
    }
   ]
  },
  {
   "title": "제4부 화학 평형과 반응",
   "chapters": [
    {
     "slug": "chemical-equilibrium",
     "num": "12",
     "title": "화학 평형",
     "en": "Chemical Equilibrium",
     "desc": "반응 진행도와 깁스 에너지 최소, ΔG° = −RT ln K, 압력·농도 평형 상수, 반트호프 식과 온도 의존성, 르샤틀리에 원리, 다중 평형과 평형 조성 계산, 엘링엄 도표와 금속 산화·환원, CVD 반응의 열역학 — SiH₄·SiHCl₃ 증착과 게이트 금속·산화막의 안정성.",
     "tags": [
      "평형 상수",
      "엘링엄 도표"
     ]
    },
    {
     "slug": "kinetics",
     "num": "13",
     "title": "반응 속도론",
     "en": "Chemical Kinetics",
     "desc": "반응 속도와 속도 법칙, 0·1·2차 반응과 반감기, 아레니우스 식과 활성화 에너지, 충돌 이론, 전이 상태 이론과 아이링 식, 연속·가역·병렬 반응과 정상 상태 근사, 연쇄 반응과 라디칼, 촉매와 표면 반응(랭뮤어–힌셜우드) — 플라스마 라디칼 화학과 공정 온도 창.",
     "tags": [
      "아레니우스 식",
      "속도 법칙"
     ]
    },
    {
     "slug": "surfaces-thin-films",
     "num": "14",
     "title": "표면·흡착과 박막 성장",
     "en": "Surfaces, Adsorption, and Thin-Film Growth",
     "desc": "표면 에너지와 표면 장력, 영 식과 접촉각, 물리·화학 흡착, 랭뮤어 등온선과 BET, 부착 계수와 흡착 속도, 원자층 증착(ALD)의 자기 제한 반응, 고전 핵생성 이론과 임계 핵, 박막 성장 모드, CVD 성장 영역(표면 반응 지배·물질 전달 지배)과 계단 피복 — ALD 사이클과 세정 중 젖음.",
     "tags": [
      "랭뮤어 흡착",
      "핵생성"
     ]
    },
    {
     "slug": "electrochemistry",
     "num": "15",
     "title": "전기화학",
     "en": "Electrochemistry",
     "desc": "산화·환원과 전지, 표준 전극 전위, 깁스 에너지와 기전력, 네른스트 식, 패러데이 법칙과 전기 도금, 버틀러–볼머 식과 과전압, 타펠 그림, 부식과 갈바닉 결합, 푸르베 도표 — 구리 전해 도금(다마신)과 CMP·세정 중 부식.",
     "tags": [
      "네른스트 식",
      "전기 도금"
     ]
    }
   ]
  },
  {
   "title": "제5부 수송과 비평형",
   "chapters": [
    {
     "slug": "diffusion",
     "num": "16",
     "title": "확산",
     "en": "Diffusion",
     "desc": "무작위 걸음과 확산 계수, 픽의 제1·2법칙, 고체 속 확산 메커니즘(공공·틈새)과 아레니우스형 확산 계수, 일정 공급원(erfc)·제한 공급원(가우스) 분포와 접합 깊이, 열 예산 Dt, 수치 풀이, 딜–그로브 열산화 모형, 아인슈타인 관계와 이동도 — 도펀트 드라이브인과 열산화.",
     "tags": [
      "픽의 법칙",
      "딜–그로브"
     ]
    },
    {
     "slug": "heat-transport",
     "num": "17",
     "title": "열전달과 비평형 현상",
     "en": "Heat Transport and Nonequilibrium Phenomena",
     "desc": "푸리에 법칙과 열전도도, 열저항 회로와 칩 접합 온도, 열 확산 방정식과 열 시간 상수, 대류·복사 냉각, 줄 가열과 자기 가열, 열전 효과(제베크·펠티에)와 열전 냉각, 엔트로피 생성과 온사거 상반 관계, 요동–소산 정리와 존슨 잡음 — 칩 핫스팟과 웨이퍼 척 온도 제어.",
     "tags": [
      "열저항",
      "열전 효과"
     ]
    }
   ]
  },
  {
   "title": "부록",
   "appendix": true,
   "chapters": [
    {
     "slug": "thermo-data",
     "num": "A",
     "title": "열역학 자료와 계산기",
     "en": "Thermodynamic Data and Calculators",
     "desc": "물리 상수, 표준 생성 엔탈피·표준 엔트로피·열용량 표, 증기압과 판데르발스 상수, 확산 계수와 열전도도를 표와 계산기로 찾고, 자주 쓰는 공식을 한곳에 모았다.",
     "tags": [
      "부록",
      "자료표"
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
  "equations-of-state": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 10,
   "drills": 5,
   "minis": 5,
   "tangles": 5,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "first-law": {
   "problems": 16,
   "examples": 8,
   "sims": 5,
   "figures": 12,
   "drills": 4,
   "minis": 6,
   "tangles": 7,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "second-law": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 11,
   "drills": 4,
   "minis": 6,
   "tangles": 6,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "free-energy": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 9,
   "drills": 4,
   "minis": 4,
   "tangles": 5,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "microstates": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 12,
   "drills": 4,
   "minis": 6,
   "tangles": 6,
   "steps": 2,
   "predicts": 5,
   "hero": 1
  },
  "boltzmann": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 13,
   "drills": 3,
   "minis": 6,
   "tangles": 5,
   "steps": 2,
   "predicts": 6,
   "hero": 1
  },
  "quantum-statistics": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 11,
   "drills": 4,
   "minis": 5,
   "tangles": 6,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "kinetic-theory-vacuum": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 13,
   "drills": 4,
   "minis": 5,
   "tangles": 6,
   "steps": 3,
   "predicts": 6,
   "hero": 1
  },
  "phase-transitions": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 13,
   "drills": 3,
   "minis": 6,
   "tangles": 7,
   "steps": 3,
   "predicts": 6,
   "hero": 1
  },
  "solutions": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 14,
   "drills": 4,
   "minis": 7,
   "tangles": 6,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "binary-phase-diagrams": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 12,
   "drills": 3,
   "minis": 5,
   "tangles": 6,
   "steps": 3,
   "predicts": 6,
   "hero": 1
  },
  "chemical-equilibrium": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 11,
   "drills": 3,
   "minis": 4,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "kinetics": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 13,
   "drills": 4,
   "minis": 7,
   "tangles": 6,
   "steps": 3,
   "predicts": 6,
   "hero": 1
  },
  "surfaces-thin-films": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 13,
   "drills": 4,
   "minis": 6,
   "tangles": 6,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "electrochemistry": {
   "problems": 16,
   "examples": 8,
   "sims": 9,
   "figures": 11,
   "drills": 4,
   "minis": 5,
   "tangles": 6,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "diffusion": {
   "problems": 16,
   "examples": 8,
   "sims": 10,
   "figures": 11,
   "drills": 4,
   "minis": 5,
   "tangles": 6,
   "steps": 3,
   "predicts": 6,
   "hero": 1
  },
  "heat-transport": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 16,
   "drills": 4,
   "minis": 8,
   "tangles": 7,
   "steps": 4,
   "predicts": 4,
   "hero": 1
  },
  "thermo-data": {
   "problems": 15,
   "examples": 0,
   "sims": 10,
   "figures": 4,
   "drills": 0,
   "minis": 4,
   "tangles": 1,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "glossary": {
   "problems": 68,
   "examples": 0,
   "sims": 0,
   "figures": 0,
   "drills": 2,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  }
 },
 "published": 19,
 "total": 19,
 "url": "https://science.euiyun.com/thermal-physics/",
 "glossary": {
  "version": 1,
  "terms": [
   {
    "ko": "1차 상전이",
    "en": "first-order transition",
    "abbr": "",
    "def": "깁스 에너지의 1차 도함수인 엔트로피·부피가 불연속으로 뛰는 상전이. 잠열, 두 상 공존, 과냉각·히스테리시스가 따른다.",
    "chapters": [
     "phase-transitions#metastable"
    ]
   },
   {
    "ko": "2색 고온계",
    "en": "two-color pyrometer",
    "abbr": "",
    "def": "두 파장의 복사 휘도 비로 온도를 읽는 고온계. 회색체라면 방사율이 약분되어 몰라도 된다.",
    "chapters": [
     "quantum-statistics#blackbody"
    ]
   },
   {
    "ko": "2준위 계",
    "en": "two-state system",
    "abbr": "",
    "def": "구성 요소마다 가능한 상태가 둘뿐인 계. 동전, 자기장 속 스핀 1/2, 격자 자리의 점유·비점유가 예이며 겹침수는 \\(\\binom Nn\\)이다.",
    "chapters": [
     "microstates#counting"
    ]
   },
   {
    "ko": "ALD 공정 창",
    "en": "ALD window",
    "abbr": "",
    "def": "ALD가 자기 제한으로 동작해 GPC가 온도에 거의 무관한 온도 범위. 밖에서는 응축·반응 부족·분해·탈수가 일어난다.",
    "chapters": [
     "surfaces-thin-films#ald"
    ]
   },
   {
    "ko": "BET 등온선",
    "en": "BET isotherm",
    "abbr": "",
    "def": "첫 층은 흡착열로, 그 위 층은 응축열로 쌓인다고 본 다층 흡착 등온선 \\(v/v_m = cx/[(1-x)(1-x+cx)]\\). 비표면적 측정에 쓴다.",
    "chapters": [
     "surfaces-thin-films#langmuir"
    ]
   },
   {
    "ko": "GPC",
    "en": "growth per cycle",
    "abbr": "",
    "def": "ALD 한 사이클에 쌓이는 막 두께(사이클당 성장). 포화하면 펄스 시간과 무관하다.",
    "chapters": [
     "surfaces-thin-films#ald"
    ]
   },
   {
    "ko": "P 가지",
    "en": "P branch",
    "abbr": "",
    "def": "회전 양자수가 1 줄어드는(\\(\\Delta J = -1\\)) 흡수선들. 띠 중심보다 낮은 파수 \\(\\tilde\\nu_0 - 2BJ\\)에 놓인다.",
    "chapters": [
     "boltzmann#spectroscopy"
    ]
   },
   {
    "ko": "R 가지",
    "en": "R branch",
    "abbr": "",
    "def": "회전 양자수가 1 늘어나는(\\(\\Delta J = +1\\)) 흡수선들. 띠 중심보다 높은 파수 \\(\\tilde\\nu_0 + 2B(J+1)\\)에 놓인다.",
    "chapters": [
     "boltzmann#spectroscopy"
    ]
   },
   {
    "ko": "kT/C 잡음",
    "en": "kT/C noise",
    "abbr": "",
    "def": "RC 회로 커패시터 양단의 열잡음 \\(\\langle v^2\\rangle = kT/C\\). 저항값과 무관하며 등분배 정리와 같다.",
    "chapters": [
     "heat-transport#fdt"
    ]
   },
   {
    "ko": "sccm",
    "en": "standard cubic centimeter per minute",
    "abbr": "",
    "def": "표준 상태(보통 0 °C, 1 atm)로 환산한 분당 cm³ 단위의 기체 몰 유량. 1 sccm = \\(7.436\\times10^{-7}\\) mol/s.",
    "chapters": [
     "equations-of-state#ideal-gas"
    ]
   },
   {
    "ko": "가역 과정",
    "en": "reversible process",
    "abbr": "",
    "def": "매 순간 평형을 거쳐 무한히 작은 변화로 거꾸로 되돌릴 수 있는 이상적 과정. 팽창에서 얻는 일이 최대, 압축에 드는 일이 최소다.",
    "chapters": [
     "first-law#pv-work"
    ]
   },
   {
    "ko": "가장 그럴듯한 거시 상태",
    "en": "most probable macrostate",
    "abbr": "",
    "def": "겹침수가 가장 큰, 따라서 고립계에서 가장 자주 관찰되는 거시 상태. 큰 계에서는 요동이 \\(1/\\sqrt N\\)로 작아져 사실상 이 상태만 보인다.",
    "chapters": [
     "microstates#large-numbers"
    ]
   },
   {
    "ko": "갈바니 전지",
    "en": "galvanic cell",
    "abbr": "",
    "def": "자발적 산화·환원 반응(\\(\\Delta G<0\\))의 깁스 에너지를 전기 일로 꺼내는 전지.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "갈바닉 부식",
    "en": "galvanic corrosion",
    "abbr": "",
    "def": "전기적으로 접촉한 서로 다른 금속이 같은 전해질에 잠겨 덜 귀한 금속이 빨리 부식되는 현상.",
    "chapters": [
     "electrochemistry#corrosion"
    ]
   },
   {
    "ko": "강체 회전자",
    "en": "rigid rotor",
    "abbr": "",
    "def": "길이가 고정된 회전 분자 모형. 에너지 \\(E_J = J(J+1)\\hbar^2/2I\\), 겹침 \\(2J+1\\)인 준위를 갖는다.",
    "chapters": [
     "boltzmann#rotor"
    ]
   },
   {
    "ko": "거시 상태",
    "en": "macrostate",
    "abbr": "",
    "def": "에너지 \\(U\\), 부피 \\(V\\), 입자 수 \\(N\\), 자화 \\(M\\)처럼 측정 가능한 몇 개의 값으로 요약한 계의 상태. 하나의 거시 상태에는 보통 아주 많은 미시 상태가 속한다.",
    "chapters": [
     "microstates#counting"
    ]
   },
   {
    "ko": "결합선",
    "en": "tie line",
    "abbr": "",
    "def": "두 상 영역 안의 상태점을 지나는 수평선. 양 끝이 공존하는 두 상의 조성이다.",
    "chapters": [
     "binary-phase-diagrams#isomorphous"
    ]
   },
   {
    "ko": "겹침수",
    "en": "multiplicity",
    "abbr": "",
    "def": "한 거시 상태에 속한 미시 상태의 수 \\(\\Omega\\). 2준위 계는 \\(\\binom Nn\\), 아인슈타인 고체는 \\(\\binom{q+N-1}{q}\\)이다.",
    "chapters": [
     "microstates#counting"
    ]
   },
   {
    "ko": "경로 함수",
    "en": "path function",
    "abbr": "",
    "def": "처음·나중 상태가 같아도 거쳐 간 경로에 따라 값이 달라지는 양. 열 \\(Q\\)와 일 \\(W\\)가 그 예다.",
    "chapters": [
     "first-law#state-function"
    ]
   },
   {
    "ko": "경쟁 흡착",
    "en": "competitive adsorption",
    "abbr": "",
    "def": "여러 기체가 같은 자리를 놓고 다투는 흡착. \\(\\theta_A = K_AP_A/(1+\\sum_iK_iP_i)\\).",
    "chapters": [
     "surfaces-thin-films#langmuir"
    ]
   },
   {
    "ko": "계",
    "en": "system",
    "abbr": "",
    "def": "열역학에서 관심을 두고 따로 떼어 생각하는 부분. 챔버 속 기체, 웨이퍼, 용액처럼 경계(벽)로 주위와 나뉜다.",
    "chapters": [
     "equations-of-state#equilibrium"
    ]
   },
   {
    "ko": "계단 피복",
    "en": "step coverage",
    "abbr": "",
    "def": "트렌치·홀의 바닥(또는 옆벽) 막 두께를 윗면 두께로 나눈 값. 부착 계수가 작을수록, 종횡비가 작을수록 크다.",
    "chapters": [
     "surfaces-thin-films#cvd"
    ]
   },
   {
    "ko": "계면층",
    "en": "interfacial layer",
    "abbr": "",
    "def": "high-k 절연막과 실리콘 사이에 생기는 얇은(0.5–1 nm) SiO₂ 층. 계면 품질을 높이지만 등가 산화막 두께를 늘린다.",
    "chapters": [
     "chemical-equilibrium#ellingham"
    ]
   },
   {
    "ko": "고립법",
    "en": "isolation method",
    "abbr": "",
    "def": "한 반응물만 남기고 나머지를 크게 과량으로 넣어 그 농도를 사실상 일정하게 만든 뒤 차수를 하나씩 정하는 방법.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "고상선",
    "en": "solidus",
    "abbr": "",
    "def": "그 아래에서는 모두 고체인 경계선. 이 선에서 마지막 액체가 굳는다.",
    "chapters": [
     "binary-phase-diagrams#isomorphous"
    ]
   },
   {
    "ko": "고온계",
    "en": "pyrometer",
    "abbr": "",
    "def": "물체가 내는 열복사의 세기를 재서 접촉 없이 온도를 읽는 장치. 방사율을 알아야 정확하다.",
    "chapters": [
     "quantum-statistics#blackbody"
    ]
   },
   {
    "ko": "고용도",
    "en": "solubility limit",
    "abbr": "",
    "def": "주어진 온도에서 고용체가 둘째 상을 석출하지 않고 품을 수 있는 용질의 최대 농도.",
    "chapters": [
     "binary-phase-diagrams#solubility"
    ]
   },
   {
    "ko": "고용선",
    "en": "solvus",
    "abbr": "",
    "def": "고용체가 둘째 상과 공존하는 경계. 그 온도에서 녹을 수 있는 용질의 최대 조성을 준다.",
    "chapters": [
     "binary-phase-diagrams#solubility"
    ]
   },
   {
    "ko": "고용체",
    "en": "solid solution",
    "abbr": "",
    "def": "한 결정 구조 안에 다른 원자가 자리를 바꾸거나 틈에 끼어 녹아든 균일한 고체 상.",
    "chapters": [
     "binary-phase-diagrams#isomorphous"
    ]
   },
   {
    "ko": "공공",
    "en": "vacancy",
    "abbr": "",
    "def": "결정 격자에서 원자가 빠진 빈자리. 평형 농도는 \\(n/N = e^{S_v/k}e^{-E_v/kT}\\)이고 원자 확산을 매개한다.",
    "chapters": [
     "boltzmann#defects"
    ]
   },
   {
    "ko": "공공 기구",
    "en": "vacancy mechanism",
    "abbr": "",
    "def": "원자가 이웃한 빈자리(공공)와 자리를 바꾸며 움직이는 확산 기구. 활성화 에너지는 공공 형성 에너지와 이동 에너지의 합이다.",
    "chapters": [
     "diffusion#mechanisms"
    ]
   },
   {
    "ko": "공비 혼합물",
    "en": "azeotrope",
    "abbr": "",
    "def": "증기와 액체의 조성이 같아져 끓여도 조성이 변하지 않는 혼합물. 보통 증류로는 공비 조성을 넘어 분리할 수 없다(예: IPA–물 87.4 wt%).",
    "chapters": [
     "solutions#distillation"
    ]
   },
   {
    "ko": "공정 반응",
    "en": "eutectic reaction",
    "abbr": "",
    "def": "한 온도에서 액체가 두 고체로 동시에 굳는 반응 \\(\\mathrm{L} \\to \\alpha + \\beta\\). 세 상이 공존해 자유도가 0이다.",
    "chapters": [
     "binary-phase-diagrams#eutectic"
    ]
   },
   {
    "ko": "공정점",
    "en": "eutectic point",
    "abbr": "",
    "def": "공정 반응이 일어나는 조성과 온도. 두 액상선이 만나는 가장 낮은 액체 온도다(Al–Si 577 °C, Au–Si 363 °C).",
    "chapters": [
     "binary-phase-diagrams#eutectic"
    ]
   },
   {
    "ko": "공존 곡선",
    "en": "coexistence curve",
    "abbr": "",
    "def": "두 상의 화학 퍼텐셜이 같아 두 상이 함께 있을 수 있는 \\((T,P)\\)의 집합. 상태도의 경계선이다.",
    "chapters": [
     "phase-transitions#clapeyron"
    ]
   },
   {
    "ko": "공통 접선",
    "en": "common tangent",
    "abbr": "",
    "def": "깁스 에너지 곡선에 두 점에서 동시에 접하는 직선. 두 접점의 상이 각 성분의 화학 퍼텐셜을 공유하므로 공존 조성을 정한다.",
    "chapters": [
     "solutions#regular-solution"
    ]
   },
   {
    "ko": "과냉각",
    "en": "supercooling",
    "abbr": "",
    "def": "액체가 녹는점(어는점)보다 낮은 온도에서도 얼지 않고 액체로 남아 있는 준안정 상태. 핵이 생겨야 결정이 자란다.",
    "chapters": [
     "phase-transitions#metastable"
    ]
   },
   {
    "ko": "과열",
    "en": "superheating",
    "abbr": "",
    "def": "액체가 끓는점보다 높은 온도에서도 끓지 않고 액체로 남아 있는 준안정 상태. 증기 거품의 핵이 생기면 갑자기 끓는다.",
    "chapters": [
     "phase-transitions#metastable"
    ]
   },
   {
    "ko": "과전압",
    "en": "overpotential",
    "abbr": "",
    "def": "전류가 흐를 때 전극 전위가 평형 전위에서 벗어난 양 \\(\\eta = E - E_\\text{eq}\\).",
    "chapters": [
     "electrochemistry#kinetics"
    ]
   },
   {
    "ko": "과포화도",
    "en": "supersaturation ratio",
    "abbr": "",
    "def": "증착 반응의 평형 상수와 반응 지수의 비 \\(K/Q\\). 증착의 구동력은 \\(RT\\ln(K/Q)\\)다.",
    "chapters": [
     "chemical-equilibrium#cvd"
    ]
   },
   {
    "ko": "교차 온도",
    "en": "crossover temperature",
    "abbr": "",
    "def": "\\(\\Delta H\\)와 \\(\\Delta S\\)의 부호가 같을 때 \\(\\Delta G = \\Delta H - T\\Delta S\\)의 부호가 바뀌는 온도 \\(T^* = \\Delta H/\\Delta S\\). 표준 상태 반응에서는 \\(K = 1\\)인 온도다.",
    "chapters": [
     "free-energy#tug-of-war"
    ]
   },
   {
    "ko": "교환 전류 밀도",
    "en": "exchange current density",
    "abbr": "",
    "def": "평형(\\(\\eta = 0\\))에서 산화·환원 양방향으로 같은 크기로 흐르는 전류 밀도 \\(j_0\\). 전극 반응의 빠르기를 나타낸다.",
    "chapters": [
     "electrochemistry#kinetics"
    ]
   },
   {
    "ko": "국소 평형",
    "en": "local equilibrium",
    "abbr": "",
    "def": "계 전체는 비평형이지만 작은 부피마다 온도·화학 퍼텐셜이 정의될 만큼 빨리 평형에 이른다는 가정.",
    "chapters": [
     "heat-transport#onsager"
    ]
   },
   {
    "ko": "균일 핵생성",
    "en": "homogeneous nucleation",
    "abbr": "",
    "def": "다른 표면의 도움 없이 상 내부에서 저절로 일어나는 핵생성. 장벽 \\(\\Delta G^* = 16\\pi\\gamma^3/3\\Delta G_v^2\\).",
    "chapters": [
     "surfaces-thin-films#nucleation"
    ]
   },
   {
    "ko": "그레이엄 법칙",
    "en": "Graham's law",
    "abbr": "",
    "def": "같은 온도·압력에서 분출 속도가 몰 질량의 제곱근에 반비례한다는 법칙 \\(r_1/r_2 = \\sqrt{M_2/M_1}\\).",
    "chapters": [
     "kinetic-theory-vacuum#effusion"
    ]
   },
   {
    "ko": "금속간 화합물",
    "en": "intermetallic compound",
    "abbr": "",
    "def": "두 금속(또는 금속과 반금속)이 일정한 원자 비로 규칙 배열한 결정 상(Cu₆Sn₅, NiSi 등).",
    "chapters": [
     "binary-phase-diagrams#solubility"
    ]
   },
   {
    "ko": "기본 관계식",
    "en": "fundamental relation",
    "abbr": "",
    "def": "제1·2법칙을 합친 상태 함수 사이의 관계 \\(dU = T\\,dS - P\\,dV + \\mu\\,dN\\). \\(U(S,V,N)\\)에서 \\(T, P, \\mu\\)가 편미분으로 나온다.",
    "chapters": [
     "free-energy#legendre"
    ]
   },
   {
    "ko": "기본 반응",
    "en": "elementary reaction",
    "abbr": "",
    "def": "분자들이 실제로 한 번에 부딪혀 바뀌는 단일 단계. 속도 법칙이 계수(분자도)에서 바로 나온다.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "기액 평형",
    "en": "vapor–liquid equilibrium",
    "abbr": "",
    "def": "액체와 증기가 공존하며 각 성분의 화학 퍼텐셜이 두 상에서 같은 상태. 액체 조성 \\(x\\)와 증기 조성 \\(y\\)가 타이 선으로 이어진다.",
    "chapters": [
     "solutions#distillation"
    ]
   },
   {
    "ko": "기전력",
    "en": "electromotive force, emf",
    "abbr": "",
    "def": "전류가 흐르지 않을 때 전지의 두 전극 사이 전위차. \\(\\Delta_\\mathrm rG = -nFE\\)로 반응 깁스 에너지와 이어진다.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "기포점",
    "en": "bubble point",
    "abbr": "",
    "def": "일정한 압력에서 액체 혼합물을 데울 때 첫 증기 거품이 생기는 온도. \\(\\sum x_i\\gamma_iP_i^*(T) = P\\)로 정해진다.",
    "chapters": [
     "solutions#distillation"
    ]
   },
   {
    "ko": "깁스 상규칙",
    "en": "Gibbs phase rule",
    "abbr": "",
    "def": "평형 계의 자유도 \\(F = C - P + 2\\). 압력이 고정된 응축계에서는 \\(F = C - P + 1\\)이다.",
    "chapters": [
     "binary-phase-diagrams#phase-rule"
    ]
   },
   {
    "ko": "깁스 역설",
    "en": "Gibbs paradox",
    "abbr": "",
    "def": "같은 기체끼리 섞으면 엔트로피가 변하지 않는데 분자를 구별할 수 있다고 보면 \\(nR\\ln 2\\)가 나오는 모순. 동일 입자를 구별할 수 없다는 양자역학으로 풀린다.",
    "chapters": [
     "second-law#mixing-third-law"
    ]
   },
   {
    "ko": "깁스 인자",
    "en": "Gibbs factor",
    "abbr": "",
    "def": "대정준 앙상블에서 상태 \\(s\\)의 상대 확률 \\(e^{-(E_s-\\mu N_s)/kT}\\). 볼츠만 인자에 입자 수 항을 더한 것이다.",
    "chapters": [
     "quantum-statistics#grand-canonical"
    ]
   },
   {
    "ko": "깁스 자유 에너지",
    "en": "Gibbs free energy",
    "abbr": "",
    "def": "\\(G = H - TS\\). 온도와 압력이 일정할 때 저절로 일어나는 변화에서 줄어들고 평형에서 최소가 된다. \\(-\\Delta G\\)는 최대 비팽창 일이다.",
    "chapters": [
     "free-energy#free-energy"
    ]
   },
   {
    "ko": "깁스–두헴 식",
    "en": "Gibbs–Duhem equation",
    "abbr": "",
    "def": "일정한 온도·압력에서 \\(\\sum_i n_i\\,d\\mu_i = 0\\). 한 성분의 부분 몰량이 변하면 다른 성분의 값이 그에 묶여 반대로 변한다.",
    "chapters": [
     "solutions#partial-molar"
    ]
   },
   {
    "ko": "깁스–헬름홀츠 식",
    "en": "Gibbs–Helmholtz equation",
    "abbr": "",
    "def": "깁스 에너지의 온도 의존성을 엔탈피로 나타낸 식 \\((\\partial(G/T)/\\partial T)_P = -H/T^2\\). \\(\\Delta G/T\\)를 \\(1/T\\)에 대해 그리면 기울기가 \\(\\Delta H\\)다.",
    "chapters": [
     "free-energy#g-of-t-p"
    ]
   },
   {
    "ko": "끓는점 오름",
    "en": "boiling-point elevation",
    "abbr": "",
    "def": "비휘발성 용질 때문에 용액의 끓는점이 높아지는 현상 \\(\\Delta T_\\mathrm{b} = K_\\mathrm{b}ib\\). 물은 \\(K_\\mathrm{b} = 0.513\\) K·kg/mol.",
    "chapters": [
     "solutions#colligative"
    ]
   },
   {
    "ko": "내부 압력",
    "en": "internal pressure",
    "abbr": "",
    "def": "등온에서 부피에 따른 내부 에너지 변화율 \\((\\partial U/\\partial V)_T = T(\\partial P/\\partial T)_V - P\\). 이상 기체는 0, 판데르발스 기체는 \\(a/V_\\mathrm m^2\\)로 분자 사이 인력을 나타낸다.",
    "chapters": [
     "free-energy#maxwell"
    ]
   },
   {
    "ko": "내부 에너지",
    "en": "internal energy",
    "abbr": "",
    "def": "계를 이루는 분자들의 운동·퍼텐셜·결합 에너지의 합인 상태 함수 \\(U\\). 제1법칙 \\(\\Delta U = Q + W\\)로 바뀐다.",
    "chapters": [
     "first-law#work-heat"
    ]
   },
   {
    "ko": "냉각 곡선",
    "en": "cooling curve",
    "abbr": "",
    "def": "녹인 시료를 식히며 시간에 따른 온도를 기록한 곡선. 상이 생기는 곳에서 꺾이고 자유도 0인 반응에서 평탄해진다.",
    "chapters": [
     "binary-phase-diagrams#phase-rule"
    ]
   },
   {
    "ko": "냉동기",
    "en": "refrigerator",
    "abbr": "",
    "def": "일을 받아 저온 쪽에서 열을 빼내 고온 쪽으로 버리는 장치. 성능은 \\(\\text{COP}_\\text{R} = Q_c/W\\)로 잰다.",
    "chapters": [
     "second-law#refrigerators"
    ]
   },
   {
    "ko": "네른스트 식",
    "en": "Nernst equation",
    "abbr": "",
    "def": "비표준 조건의 전극·전지 전위 \\(E = E^\\circ - (RT/nF)\\ln Q\\). 25 °C에서 농도 10배당 \\(59.16/n\\) mV.",
    "chapters": [
     "electrochemistry#nernst"
    ]
   },
   {
    "ko": "농도 전지",
    "en": "concentration cell",
    "abbr": "",
    "def": "같은 전극 반응이 농도만 다른 두 용액에서 일어나 \\(E = (RT/nF)\\ln(c_2/c_1)\\)의 기전력을 내는 전지.",
    "chapters": [
     "electrochemistry#nernst"
    ]
   },
   {
    "ko": "뉴턴 냉각 법칙",
    "en": "Newton's law of cooling",
    "abbr": "",
    "def": "표면에서 유체로 가는 열류가 온도 차에 비례한다는 관계 \\(q = h(T_s - T_\\infty)\\).",
    "chapters": [
     "heat-transport#cooling"
    ]
   },
   {
    "ko": "단분자층 형성 시간",
    "en": "monolayer formation time",
    "abbr": "",
    "def": "깨끗한 표면이 한 원자층으로 덮이는 데 걸리는 시간 \\(\\tau = n_s/(s\\Phi)\\). 300 K, \\(10^{-6}\\) Torr에서 수 초다.",
    "chapters": [
     "kinetic-theory-vacuum#pressure"
    ]
   },
   {
    "ko": "단열벽",
    "en": "adiabatic wall",
    "abbr": "",
    "def": "열을 통과시키지 않는 벽. 단열벽으로 둘러싸인 계는 일로만 에너지를 주고받는다.",
    "chapters": [
     "equations-of-state#equilibrium"
    ]
   },
   {
    "ko": "단자 효과",
    "en": "terminal effect",
    "abbr": "",
    "def": "가장자리 접점에서 얇은 시드층을 따라 전류가 퍼지며 생기는 전압 강하 때문에 웨이퍼 중심의 도금이 얇아지는 현상.",
    "chapters": [
     "electrochemistry#faraday"
    ]
   },
   {
    "ko": "대류 열전달 계수",
    "en": "convection heat transfer coefficient",
    "abbr": "",
    "def": "뉴턴 냉각 법칙의 계수 \\(h\\)[W/(m²·K)]. 물질 상수가 아니라 흐름의 성질이다.",
    "chapters": [
     "heat-transport#cooling"
    ]
   },
   {
    "ko": "대분배 함수",
    "en": "grand partition function",
    "abbr": "",
    "def": "입자 수가 다른 상태까지 포함한 모든 상태의 깁스 인자의 합 \\(\\mathcal Z = \\sum_s e^{-(E_s-\\mu N_s)/kT}\\).",
    "chapters": [
     "quantum-statistics#grand-canonical"
    ]
   },
   {
    "ko": "대응 상태 원리",
    "en": "principle of corresponding states",
    "abbr": "",
    "def": "환산 온도와 환산 압력이 같으면 기체 종류가 달라도 압축 인자가 거의 같다는 원리. 일반화 압축 인자 차트의 근거다.",
    "chapters": [
     "equations-of-state#corresponding-states"
    ]
   },
   {
    "ko": "대정준 앙상블",
    "en": "grand canonical ensemble",
    "abbr": "",
    "def": "저장체와 에너지와 입자를 함께 주고받아 온도 \\(T\\)와 화학 퍼텐셜 \\(\\mu\\)가 정해진 계들의 모임.",
    "chapters": [
     "quantum-statistics#grand-canonical"
    ]
   },
   {
    "ko": "대칭수",
    "en": "symmetry number",
    "abbr": "",
    "def": "분자를 회전시켜 같은 배치가 되는 서로 다른 방향의 수 \\(\\sigma\\). 동핵 이원자 분자는 2, 이핵은 1이며 회전 분배 함수를 \\(\\sigma\\)로 나눈다.",
    "chapters": [
     "boltzmann#rotor"
    ]
   },
   {
    "ko": "대퍼텐셜",
    "en": "grand potential",
    "abbr": "",
    "def": "온도·부피·화학 퍼텐셜이 일정한 열린 계의 퍼텐셜 \\(\\Phi = F - \\mu N\\). 대정준 앙상블에서 \\(\\Phi = -kT\\ln\\mathcal Z\\)다.",
    "chapters": [
     "free-energy#legendre"
    ]
   },
   {
    "ko": "독립 반응",
    "en": "independent reactions",
    "abbr": "",
    "def": "서로의 선형 결합으로 만들 수 없는 반응식들. 그 수는 물질 수에서 원소 조성 행렬의 계수(보통 원소 수)를 뺀 값이다.",
    "chapters": [
     "chemical-equilibrium#multiple"
    ]
   },
   {
    "ko": "돌턴 분압 법칙",
    "en": "Dalton's law of partial pressures",
    "abbr": "",
    "def": "반응하지 않는 이상 기체 혼합물의 전체 압력은 각 성분의 분압의 합 \\(P = \\sum_i P_i\\)이라는 법칙.",
    "chapters": [
     "equations-of-state#ideal-gas"
    ]
   },
   {
    "ko": "동결",
    "en": "freezing out",
    "abbr": "",
    "def": "준위 간격이 \\(kT\\)보다 커서 자유도가 바닥 상태에 머물러 열용량에 기여하지 않는 현상. 상온 이원자 기체의 진동이 그 예다.",
    "chapters": [
     "boltzmann#rotor"
    ]
   },
   {
    "ko": "동일 입자",
    "en": "identical particles",
    "abbr": "",
    "def": "같은 종류라서 원리적으로 구별할 수 없는 입자들. 각 상태에 몇 개가 있는가(점유수)만이 미시 상태를 정한다.",
    "chapters": [
     "quantum-statistics#identical"
    ]
   },
   {
    "ko": "드라이브인",
    "en": "drive-in",
    "abbr": "",
    "def": "공급원 없이 이미 들어간 도펀트를 높은 온도에서 더 깊이 퍼뜨리는 열처리(제한 공급원 확산).",
    "chapters": [
     "diffusion#profiles"
    ]
   },
   {
    "ko": "등량 흡착열",
    "en": "isosteric heat of adsorption",
    "abbr": "",
    "def": "같은 피복률에서 압력의 온도 의존성으로 구한 흡착열 \\(q_\\mathrm{st} = RT^2(\\partial\\ln P/\\partial T)_\\theta\\).",
    "chapters": [
     "surfaces-thin-films#langmuir"
    ]
   },
   {
    "ko": "등분배 정리",
    "en": "equipartition theorem",
    "abbr": "",
    "def": "에너지에 제곱으로 들어가는 자유도 하나마다 분자당 평균 \\(\\tfrac12 kT\\)의 에너지가 돌아간다는 고전 통계역학의 결과.",
    "chapters": [
     "first-law#heat-capacity"
    ]
   },
   {
    "ko": "등엔트로피 과정",
    "en": "isentropic process",
    "abbr": "",
    "def": "엔트로피가 변하지 않는 과정. 가역 단열 과정이 그 예이며, 이상 기체에서는 \\(TV^{\\gamma-1}\\) = 일정이다.",
    "chapters": [
     "second-law#entropy-changes"
    ]
   },
   {
    "ko": "등온 압축률",
    "en": "isothermal compressibility",
    "abbr": "",
    "def": "일정 온도에서 압력에 따른 부피의 상대 감소율 \\(\\kappa_T = -(1/V)(\\partial V/\\partial P)_T\\). 이상 기체는 \\(1/P\\)이고 임계점에서 발산한다.",
    "chapters": [
     "equations-of-state#response"
    ]
   },
   {
    "ko": "등확률 원리",
    "en": "principle of equal a priori probabilities",
    "abbr": "",
    "def": "고립계에서 에너지가 같은 허용된 미시 상태는 모두 같은 확률로 나타난다는 통계역학의 기본 가정.",
    "chapters": [
     "microstates#einstein"
    ]
   },
   {
    "ko": "디바이 모형",
    "en": "Debye model",
    "abbr": "",
    "def": "격자 진동을 \\(\\omega = v_s k\\)인 음파로 보고 모드 수가 \\(3N\\)이 되는 차단 진동수에서 끊는 열용량 모형. 저온에서 \\(C_V \\propto T^3\\)을 준다.",
    "chapters": [
     "quantum-statistics#bose-gas"
    ]
   },
   {
    "ko": "디바이 온도",
    "en": "Debye temperature",
    "abbr": "",
    "def": "디바이 차단 진동수를 온도로 쓴 \\(\\theta_\\mathrm D = \\hbar\\omega_\\mathrm D/k\\). 이보다 훨씬 높으면 열용량이 \\(3R\\)에 이른다(Si 645 K).",
    "chapters": [
     "quantum-statistics#bose-gas"
    ]
   },
   {
    "ko": "딜–그로브 모형",
    "en": "Deal–Grove model",
    "abbr": "",
    "def": "산화제의 산화막 확산과 계면 반응을 직렬로 본 열산화 모형 \\(x^2 + Ax = B(t+\\tau)\\).",
    "chapters": [
     "diffusion#oxidation"
    ]
   },
   {
    "ko": "라디칼",
    "en": "radical",
    "abbr": "",
    "def": "짝짓지 않은 전자를 가진 원자나 분자 조각. 반응성이 커서 연쇄 반응과 플라스마 식각을 이끈다.",
    "chapters": [
     "kinetics#complex"
    ]
   },
   {
    "ko": "라울 법칙",
    "en": "Raoult's law",
    "abbr": "",
    "def": "이상 용액에서 성분의 증기 분압이 몰분율과 순수 증기압의 곱 \\(P_\\mathrm{A} = x_\\mathrm{A}P_\\mathrm{A}^*\\)이라는 법칙.",
    "chapters": [
     "solutions#raoult-henry"
    ]
   },
   {
    "ko": "라플라스 압력",
    "en": "Laplace pressure",
    "abbr": "",
    "def": "휜 계면 안팎의 압력 차 \\(\\Delta P = \\gamma(1/R_1+1/R_2)\\), 구에서는 \\(2\\gamma/r\\). 작은 방울일수록 크다.",
    "chapters": [
     "surfaces-thin-films#surface-energy"
    ]
   },
   {
    "ko": "란다우 이론",
    "en": "Landau theory",
    "abbr": "",
    "def": "자유 에너지를 질서 변수의 거듭제곱 \\(a(T-T_\\mathrm{c})m^2 + bm^4 - hm\\)으로 전개해 상전이를 기술하는 현상론. 평균장 지수 \\(\\beta = 1/2\\)을 준다.",
    "chapters": [
     "phase-transitions#metastable"
    ]
   },
   {
    "ko": "란다우어 원리",
    "en": "Landauer's principle",
    "abbr": "",
    "def": "정보 1비트를 지우면 기억 장치의 엔트로피가 \\(k\\ln2\\) 줄므로, 적어도 \\(kT\\ln2\\)의 열이 주위로 나가야 한다는 원리.",
    "chapters": [
     "microstates#irreversibility"
    ]
   },
   {
    "ko": "랑주뱅 방정식",
    "en": "Langevin equation",
    "abbr": "",
    "def": "마찰력과 무작위 힘을 함께 받는 입자의 운동 방정식 \\(m\\dot v = -\\gamma v + F(t)\\), \\(\\langle F(t)F(t')\\rangle = 2\\gamma kT\\delta(t-t')\\).",
    "chapters": [
     "heat-transport#fdt"
    ]
   },
   {
    "ko": "랭뮤어 등온선",
    "en": "Langmuir isotherm",
    "abbr": "",
    "def": "똑같은 자리에 한 층만, 상호 작용 없이 흡착한다는 가정에서 얻은 등온선 \\(\\theta = KP/(1+KP)\\).",
    "chapters": [
     "surfaces-thin-films#langmuir"
    ]
   },
   {
    "ko": "랭뮤어–힌셜우드 메커니즘",
    "en": "Langmuir–Hinshelwood mechanism",
    "abbr": "",
    "def": "두 반응물이 모두 표면에 흡착한 뒤 이웃한 흡착종끼리 반응하는 메커니즘. 속도 \\(r = k\\theta_\\mathrm A\\theta_\\mathrm B\\)이고 차수가 압력에 따라 +1에서 −1까지 변한다.",
    "chapters": [
     "kinetics#catalysis"
    ]
   },
   {
    "ko": "레빅 식",
    "en": "Levich equation",
    "abbr": "",
    "def": "회전 원판 전극의 한계 전류 \\(j_L = 0.620\\,nFD^{2/3}\\omega^{1/2}\\nu^{-1/6}c^*\\). 회전 속도의 제곱근에 비례한다.",
    "chapters": [
     "electrochemistry#transport"
    ]
   },
   {
    "ko": "르샤틀리에 원리",
    "en": "Le Chatelier's principle",
    "abbr": "",
    "def": "평형에 있는 계의 조건을 바꾸면 그 변화를 일부 상쇄하는 쪽으로 평형이 이동한다는 원리. 정확한 판단은 \\(Q\\)와 \\(K\\)의 비교로 한다.",
    "chapters": [
     "chemical-equilibrium#lechatelier"
    ]
   },
   {
    "ko": "르장드르 변환",
    "en": "Legendre transform",
    "abbr": "",
    "def": "함수를 점의 좌표 대신 접선의 기울기와 절편으로 다시 쓰는 변환. \\(F = U - TS\\)처럼 독립 변수를 그 켤레 기울기로 바꾸면서 정보를 잃지 않는다.",
    "chapters": [
     "free-energy#legendre"
    ]
   },
   {
    "ko": "리처드 규칙",
    "en": "Richards' rule",
    "abbr": "",
    "def": "단순 금속의 융해 엔트로피 \\(\\Delta S_\\mathrm m = \\Delta H_\\mathrm m/T_\\mathrm m\\)가 기체 상수 \\(R\\) 근처(약 8–12 J/(mol·K))라는 경험 규칙. 공유 결합 반도체는 훨씬 크다.",
    "chapters": [
     "thermo-data#phase-data"
    ]
   },
   {
    "ko": "맥스웰 관계식",
    "en": "Maxwell relations",
    "abbr": "",
    "def": "열역학 퍼텐셜의 혼합 2차 편미분이 순서에 무관하다는 데서 나오는 네 등식. 예: \\((\\partial S/\\partial V)_T = (\\partial P/\\partial T)_V\\). 엔트로피의 미분을 측정 가능한 \\(P, V, T\\)의 미분으로 바꾼다.",
    "chapters": [
     "free-energy#maxwell"
    ]
   },
   {
    "ko": "맥스웰 작도",
    "en": "Maxwell construction",
    "abbr": "",
    "def": "판데르발스 등온선의 고리에 두 넓이가 같도록 수평선을 그어 포화 증기압을 정하는 방법. 액체와 기체의 화학 퍼텐셜이 같다는 조건과 같다.",
    "chapters": [
     "phase-transitions#vdw-maxwell"
    ]
   },
   {
    "ko": "맥스웰–볼츠만 속력 분포",
    "en": "Maxwell–Boltzmann speed distribution",
    "abbr": "",
    "def": "열평형 기체 분자의 속력 분포 \\(f(v) = 4\\pi(m/2\\pi kT)^{3/2}v^2e^{-mv^2/2kT}\\). 성분별 정규 분포와 속도 공간 껍질 부피 \\(4\\pi v^2\\)의 곱이다.",
    "chapters": [
     "kinetic-theory-vacuum#mb"
    ]
   },
   {
    "ko": "메트로폴리스 알고리즘",
    "en": "Metropolis algorithm",
    "abbr": "",
    "def": "무작위로 고른 변화를 에너지가 내려가면 항상, 올라가면 확률 \\(e^{-\\Delta E/kT}\\)로 받아들이는 규칙. 세부 균형을 만족해 볼츠만 분포로 수렴한다.",
    "chapters": [
     "phase-transitions#ising"
    ]
   },
   {
    "ko": "몬테카를로 방법",
    "en": "Monte Carlo method",
    "abbr": "",
    "def": "난수로 상태를 확률에 비례해 표본 추출하여 평균을 어림하는 수치 방법. 통계역학에서는 볼츠만 분포를 직접 합하는 대신 쓴다.",
    "chapters": [
     "phase-transitions#ising"
    ]
   },
   {
    "ko": "몰분율",
    "en": "mole fraction",
    "abbr": "",
    "def": "혼합물에서 한 성분의 몰수를 전체 몰수로 나눈 값 \\(x_i = n_i/\\sum_j n_j\\). 모든 성분의 몰분율 합은 1이다.",
    "chapters": [
     "equations-of-state#ideal-gas"
    ]
   },
   {
    "ko": "무작위 걸음",
    "en": "random walk",
    "abbr": "",
    "def": "매 걸음의 방향이 앞의 걸음과 상관없이 무작위로 정해지는 운동. \\(N\\)걸음 뒤 변위 제곱의 평균이 \\(Na^2\\)로 걸음 수에 비례한다.",
    "chapters": [
     "diffusion#walk"
    ]
   },
   {
    "ko": "무전해 도금",
    "en": "electroless plating",
    "abbr": "",
    "def": "외부 전원 없이 용액 속 환원제가 금속 이온을 환원해 촉매 표면에 금속을 석출시키는 도금. 혼성 전위에서 진행된다.",
    "chapters": [
     "electrochemistry#faraday"
    ]
   },
   {
    "ko": "물리 흡착",
    "en": "physisorption",
    "abbr": "",
    "def": "반데르발스 힘만으로 약하게 붙는 흡착. 흡착열이 수~수십 kJ/mol이고 여러 층 쌓이며 가역적이다.",
    "chapters": [
     "surfaces-thin-films#adsorption"
    ]
   },
   {
    "ko": "물질 전달 지배",
    "en": "mass-transport-limited",
    "abbr": "",
    "def": "\\(k_s\\gg h_g\\)여서 CVD 성장 속도가 경계층을 건너는 확산 \\(h_gC_g/N\\)으로 정해지는 고온 영역. 흐름에 민감하고 온도에 둔감하다.",
    "chapters": [
     "surfaces-thin-films#cvd"
    ]
   },
   {
    "ko": "미시 상태",
    "en": "microstate",
    "abbr": "",
    "def": "계를 이루는 입자 하나하나가 어느 상태에 있는지를 모두 적은 완전한 목록. 동전이라면 동전마다의 앞·뒤, 아인슈타인 고체라면 진동자마다의 양자수다.",
    "chapters": [
     "microstates#counting"
    ]
   },
   {
    "ko": "미시 정준 앙상블",
    "en": "microcanonical ensemble",
    "abbr": "",
    "def": "에너지·부피·입자 수가 고정된 고립계를 등확률 원리로 다루는 통계역학의 틀. 엔트로피는 \\(S = k\\ln\\Omega(U,V,N)\\)로 주어진다.",
    "chapters": [
     "microstates#einstein"
    ]
   },
   {
    "ko": "반감기",
    "en": "half-life",
    "abbr": "",
    "def": "반응물 농도가 처음의 절반이 되는 시간. 1차 반응에서만 처음 농도와 무관한 \\(\\ln2/k\\)다.",
    "chapters": [
     "kinetics#integrated"
    ]
   },
   {
    "ko": "반응 깁스 에너지",
    "en": "reaction Gibbs energy",
    "abbr": "",
    "def": "반응 진행도에 대한 깁스 에너지의 기울기 \\(\\Delta_\\mathrm rG = (\\partial G/\\partial\\xi)_{T,P} = \\sum_i\\nu_i\\mu_i\\). 음수면 정반응이 자발적이고 0이면 평형이다.",
    "chapters": [
     "free-energy#free-energy"
    ]
   },
   {
    "ko": "반응 속도",
    "en": "rate of reaction",
    "abbr": "",
    "def": "화학량론 계수로 나눈 농도 변화 속도 \\(v = (1/\\nu_i)\\,d[\\mathrm J]/dt\\). 어느 물질로 재도 같은 값이 된다.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "반응 엔탈피",
    "en": "reaction enthalpy",
    "abbr": "",
    "def": "반응식에 적힌 몰수만큼 반응할 때 일정 압력에서 주고받는 열 \\(\\Delta_\\mathrm rH\\).",
    "chapters": [
     "first-law#enthalpy"
    ]
   },
   {
    "ko": "반응 좌표",
    "en": "reaction coordinate",
    "abbr": "",
    "def": "퍼텐셜 에너지 면에서 반응물 골짜기와 생성물 골짜기를 잇는 가장 낮은 경로를 따라 잰 변수.",
    "chapters": [
     "kinetics#tst"
    ]
   },
   {
    "ko": "반응 지수",
    "en": "reaction quotient",
    "abbr": "",
    "def": "지금 조성에서의 활동도 곱 \\(Q = \\prod a_i^{\\nu_i}\\). \\(\\Delta_\\mathrm rG = RT\\ln(Q/K)\\)이므로 \\(Q<K\\)이면 정반응, \\(Q>K\\)이면 역반응이 저절로 일어난다.",
    "chapters": [
     "chemical-equilibrium#extent"
    ]
   },
   {
    "ko": "반응 진행도",
    "en": "extent of reaction",
    "abbr": "",
    "def": "반응이 얼마나 진행했는지 나타내는 몰 단위 변수 \\(\\xi\\). 성분 \\(i\\)의 몰수는 \\(n_i = n_{i,0} + \\nu_i\\xi\\)로 변한다.",
    "chapters": [
     "free-energy#free-energy"
    ]
   },
   {
    "ko": "반응 차수",
    "en": "reaction order",
    "abbr": "",
    "def": "속도 법칙에서 각 농도에 붙은 지수. 실험으로 정하며 계수와 같을 필요가 없고 분수·0·음수도 될 수 있다.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "반트호프 식",
    "en": "van 't Hoff equation",
    "abbr": "",
    "def": "평형 상수의 온도 의존성 \\(d\\ln K/d(1/T) = -\\Delta_\\mathrm rH^\\circ/R\\). 흡열 반응은 고온에서, 발열 반응은 저온에서 \\(K\\)가 크다.",
    "chapters": [
     "chemical-equilibrium#vanthoff"
    ]
   },
   {
    "ko": "발열 반응",
    "en": "exothermic reaction",
    "abbr": "",
    "def": "\\(\\Delta_\\mathrm rH < 0\\)으로 일정 압력에서 주위에 열을 내놓는 반응.",
    "chapters": [
     "first-law#enthalpy"
    ]
   },
   {
    "ko": "방사율",
    "en": "emissivity",
    "abbr": "",
    "def": "같은 온도의 흑체에 대해 실제 물체가 내는 복사의 비율 \\(\\varepsilon(\\lambda, T)\\). 0과 1 사이이다.",
    "chapters": [
     "quantum-statistics#blackbody"
    ]
   },
   {
    "ko": "배기 속도",
    "en": "pumping speed",
    "abbr": "",
    "def": "펌프 입구 압력에서 펌프가 단위 시간에 빨아들이는 기체 부피 \\(S = Q/P\\) [m³/s, L/s].",
    "chapters": [
     "kinetic-theory-vacuum#pumping"
    ]
   },
   {
    "ko": "배열 엔트로피",
    "en": "configurational entropy",
    "abbr": "",
    "def": "원자·결함·도펀트를 격자 자리에 배치하는 방법의 수에서 오는 엔트로피. 자리 \\(N\\)개에 \\(xN\\)개를 무작위로 놓으면 \\(-Nk[x\\ln x+(1-x)\\ln(1-x)]\\)이다.",
    "chapters": [
     "microstates#entropy"
    ]
   },
   {
    "ko": "버블러",
    "en": "bubbler",
    "abbr": "",
    "def": "온도를 조절한 액체 전구체 속으로 운반 기체를 불어 넣어 포화 증기를 실어 보내는 장치. 공급량은 \\(Q_\\text{c}P_\\text{v}/(P_\\text{tot}-P_\\text{v})\\)이다.",
    "chapters": [
     "phase-transitions#bubbler"
    ]
   },
   {
    "ko": "버틀러–볼머 식",
    "en": "Butler–Volmer equation",
    "abbr": "",
    "def": "전극 반응 전류와 과전압의 관계 \\(j = j_0[e^{\\alpha_aF\\eta/RT} - e^{-\\alpha_cF\\eta/RT}]\\).",
    "chapters": [
     "electrochemistry#kinetics"
    ]
   },
   {
    "ko": "베이스 압력",
    "en": "base pressure",
    "abbr": "",
    "def": "탈기체·누설과 배기가 균형을 이뤄 더 내려가지 않는 바닥 압력 \\(P_u = Q/S\\).",
    "chapters": [
     "kinetic-theory-vacuum#pumping"
    ]
   },
   {
    "ko": "벽 충돌 플럭스",
    "en": "wall collision flux",
    "abbr": "",
    "def": "단위 넓이·단위 시간당 벽에 부딪히는 분자 수 \\(\\Phi = \\tfrac14n\\bar v = P/\\sqrt{2\\pi mkT}\\).",
    "chapters": [
     "kinetic-theory-vacuum#pressure"
    ]
   },
   {
    "ko": "보손",
    "en": "boson",
    "abbr": "",
    "def": "두 입자를 맞바꿔도 파동 함수가 그대로인 정수 스핀 입자. 한 상태에 몇 개든 들어갈 수 있고 보스–아인슈타인 분포를 따른다(광자, 포논, ⁴He).",
    "chapters": [
     "quantum-statistics#identical"
    ]
   },
   {
    "ko": "보스–아인슈타인 분포",
    "en": "Bose–Einstein distribution",
    "abbr": "",
    "def": "보손 궤도의 평균 점유수 \\(1/(e^{(\\varepsilon-\\mu)/kT}-1)\\). \\(\\varepsilon > \\mu\\)에서만 정의되고 1보다 클 수 있다.",
    "chapters": [
     "quantum-statistics#distributions"
    ]
   },
   {
    "ko": "보스–아인슈타인 응축",
    "en": "Bose–Einstein condensation",
    "abbr": "",
    "def": "수가 보존되는 보손 기체에서 \\(n\\lambda^3 > 2.612\\)일 때 거시적인 수의 입자가 바닥 상태 하나에 모이는 현상. \\(N_0/N = 1-(T/T_c)^{3/2}\\).",
    "chapters": [
     "quantum-statistics#bose-gas"
    ]
   },
   {
    "ko": "보일 온도",
    "en": "Boyle temperature",
    "abbr": "",
    "def": "제2 비리얼 계수가 0이 되는 온도 \\(T_\\mathrm B\\). 이 온도에서는 저압 영역에서 기체가 이상 기체에 가장 가깝게 행동한다. 판데르발스 모형에서는 \\(a/Rb\\).",
    "chapters": [
     "equations-of-state#real-gas"
    ]
   },
   {
    "ko": "복사 열전달 계수",
    "en": "radiation heat transfer coefficient",
    "abbr": "",
    "def": "복사를 대류 꼴로 선형화한 계수 \\(h_\\mathrm{rad} = \\varepsilon\\sigma(T_s^2+T_\\infty^2)(T_s+T_\\infty)\\approx4\\varepsilon\\sigma\\bar T^3\\).",
    "chapters": [
     "heat-transport#cooling"
    ]
   },
   {
    "ko": "볼머–베버 성장",
    "en": "Volmer–Weber growth",
    "abbr": "",
    "def": "막이 기판을 적시지 않아 처음부터 3차원 섬으로 자라는 성장 모드(\\(\\gamma_s<\\gamma_f+\\gamma_i\\)).",
    "chapters": [
     "surfaces-thin-films#nucleation"
    ]
   },
   {
    "ko": "볼츠만 분포",
    "en": "Boltzmann distribution",
    "abbr": "",
    "def": "열평형에서 계가 미시 상태 \\(s\\)에 있을 확률 \\(P(s) = e^{-E(s)/kT}/Z\\). 준위의 확률은 겹침수를 곱한 \\(g_ie^{-E_i/kT}/Z\\)다.",
    "chapters": [
     "boltzmann#reservoir"
    ]
   },
   {
    "ko": "볼츠만 엔트로피",
    "en": "Boltzmann entropy",
    "abbr": "",
    "def": "거시 상태의 겹침수로 정의한 엔트로피 \\(S = k\\ln\\Omega\\). 계를 합치면 더해지며, 열역학적 엔트로피 \\(\\int\\delta Q_\\text{rev}/T\\)와 같은 값을 준다.",
    "chapters": [
     "microstates#entropy"
    ]
   },
   {
    "ko": "볼츠만 인자",
    "en": "Boltzmann factor",
    "abbr": "",
    "def": "온도 \\(T\\)에서 에너지 \\(E\\)인 미시 상태의 상대 확률 \\(e^{-E/kT}\\). 열저장체의 겹침수가 \\(E\\)만큼 줄어드는 비율에서 나온다.",
    "chapters": [
     "boltzmann#reservoir"
    ]
   },
   {
    "ko": "부동태",
    "en": "passivation",
    "abbr": "",
    "def": "금속 표면에 치밀한 산화물·보호막이 생겨 열역학적으로 산화 가능한 금속의 부식이 크게 느려진 상태.",
    "chapters": [
     "electrochemistry#corrosion"
    ]
   },
   {
    "ko": "부분 몰량",
    "en": "partial molar quantity",
    "abbr": "",
    "def": "온도·압력과 다른 성분의 양을 고정하고 성분 하나를 늘릴 때 크기 성질의 변화율 \\(\\bar X_i = (\\partial X/\\partial n_i)_{T,P,n_j}\\). 부분 몰 깁스 에너지가 화학 퍼텐셜이다.",
    "chapters": [
     "solutions#partial-molar"
    ]
   },
   {
    "ko": "부분 몰부피",
    "en": "partial molar volume",
    "abbr": "",
    "def": "성분 \\(i\\)를 조금 더 넣을 때 실제로 늘어나는 부피 \\(\\bar V_i = (\\partial V/\\partial n_i)_{T,P,n_j}\\). 조성에 따라 달라지며 순수 몰부피와 다를 수 있다.",
    "chapters": [
     "solutions#partial-molar"
    ]
   },
   {
    "ko": "부식 전류",
    "en": "corrosion current",
    "abbr": "",
    "def": "부식 전위에서 흐르는 금속 산화 전류 밀도 \\(i_\\text{corr}\\). 패러데이 법칙으로 부식 속도로 바뀐다.",
    "chapters": [
     "electrochemistry#corrosion"
    ]
   },
   {
    "ko": "부식 전위",
    "en": "corrosion potential",
    "abbr": "",
    "def": "부식 중인 금속이 외부 전류 없이 나타내는 혼성 전위 \\(E_\\text{corr}\\).",
    "chapters": [
     "electrochemistry#corrosion"
    ]
   },
   {
    "ko": "부착 계수",
    "en": "sticking coefficient",
    "abbr": "",
    "def": "표면에 부딪힌 분자가 달라붙을 확률 \\(s\\) (0–1).",
    "chapters": [
     "kinetic-theory-vacuum#pressure"
    ]
   },
   {
    "ko": "분리 계수",
    "en": "separation factor",
    "abbr": "",
    "def": "한 단의 분리에서 성분 몰 비가 커지는 배수. 이상적인 분출에서는 \\(\\alpha = \\sqrt{M_2/M_1}\\).",
    "chapters": [
     "kinetic-theory-vacuum#effusion"
    ]
   },
   {
    "ko": "분배 함수",
    "en": "partition function",
    "abbr": "",
    "def": "모든 미시 상태의 볼츠만 인자의 합 \\(Z = \\sum_s e^{-E_s/kT}\\). 열적으로 드나드는 상태 수를 어림하며, \\(F = -kT\\ln Z\\) 등 모든 열역학량이 이것의 미분으로 나온다.",
    "chapters": [
     "boltzmann#partition"
    ]
   },
   {
    "ko": "분별 증류",
    "en": "fractional distillation",
    "abbr": "",
    "def": "증류탑의 여러 단에서 증발과 응축을 연속으로 되풀이해 휘발성이 다른 성분을 분리하는 방법.",
    "chapters": [
     "solutions#distillation"
    ]
   },
   {
    "ko": "분압",
    "en": "partial pressure",
    "abbr": "",
    "def": "혼합 기체의 한 성분이 혼자 전체 부피를 차지할 때 낼 압력. 이상 기체 혼합물에서 \\(P_i = x_iP\\)다.",
    "chapters": [
     "equations-of-state#ideal-gas"
    ]
   },
   {
    "ko": "분자도",
    "en": "molecularity",
    "abbr": "",
    "def": "기본 반응 하나에 참여하는 분자의 수(단분자·이분자·삼분자).",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "분자류",
    "en": "molecular flow",
    "abbr": "",
    "def": "\\(\\mathrm{Kn}\\gg1\\)이라 분자가 서로 거의 부딪히지 않고 벽과 벽 사이를 독립적으로 날아다니는 흐름 영역.",
    "chapters": [
     "kinetic-theory-vacuum#mfp"
    ]
   },
   {
    "ko": "분출",
    "en": "effusion",
    "abbr": "",
    "def": "평균 자유 행로보다 작은 구멍을 통해 분자가 하나씩 빠져나가는 현상. 속도는 \\(\\Phi A\\)이다.",
    "chapters": [
     "kinetic-theory-vacuum#effusion"
    ]
   },
   {
    "ko": "불균등화",
    "en": "disproportionation",
    "abbr": "",
    "def": "같은 물질의 분자들이 원소(예: Cl)를 더 가진 것과 덜 가진 것으로 나뉘는 반응. 예: \\(\\ce{4SiHCl3 -> Si + 3SiCl4 + 2H2}\\).",
    "chapters": [
     "chemical-equilibrium#multiple"
    ]
   },
   {
    "ko": "불균일 평형",
    "en": "heterogeneous equilibrium",
    "abbr": "",
    "def": "고체·액체와 기체처럼 여러 상이 함께 참여하는 평형. 순수한 응축상의 활동도는 1이라 평형 상수에 나타나지 않는다.",
    "chapters": [
     "chemical-equilibrium#constants"
    ]
   },
   {
    "ko": "불균일 핵생성",
    "en": "heterogeneous nucleation",
    "abbr": "",
    "def": "기판·벽·불순물 위에서 일어나는 핵생성. 장벽이 \\(f(\\theta) = (2+\\cos\\theta)(1-\\cos\\theta)^2/4\\)배로 줄어든다.",
    "chapters": [
     "surfaces-thin-films#nucleation"
    ]
   },
   {
    "ko": "브라운 운동",
    "en": "Brownian motion",
    "abbr": "",
    "def": "유체 속 작은 입자가 주위 분자의 무작위 충돌로 끊임없이 떨리며 무작위 걸음을 하는 운동.",
    "chapters": [
     "heat-transport#fdt"
    ]
   },
   {
    "ko": "블랙 식",
    "en": "Black's equation",
    "abbr": "",
    "def": "전자 이동 평균 수명의 경험식 \\(\\mathrm{MTTF} = Aj^{-n}e^{E_a/kT}\\).",
    "chapters": [
     "heat-transport#cooling"
    ]
   },
   {
    "ko": "비가역 과정",
    "en": "irreversible process",
    "abbr": "",
    "def": "계와 주위를 함께 되돌릴 수 없는 과정. 유한 온도차의 열전도, 자유 팽창, 혼합, 마찰 등이 있고 엔트로피를 생성한다(\\(S_\\text{gen} > 0\\)).",
    "chapters": [
     "second-law#spontaneity"
    ]
   },
   {
    "ko": "비데만–프란츠 법칙",
    "en": "Wiedemann–Franz law",
    "abbr": "",
    "def": "금속의 전자 열전도도와 전기 전도도의 비가 온도에 비례한다는 법칙 \\(\\kappa_e/\\sigma T = L_0 = 2.44\\times10^{-8}\\) W·Ω/K².",
    "chapters": [
     "heat-transport#fourier"
    ]
   },
   {
    "ko": "비리얼 계수",
    "en": "virial coefficient",
    "abbr": "",
    "def": "비리얼 전개의 계수 \\(B(T), C(T), \\ldots\\). 제2 비리얼 계수 \\(B\\)는 분자 두 개 사이의 상호 작용에서 나오며 저온에서 음수, 고온에서 양수다.",
    "chapters": [
     "equations-of-state#real-gas"
    ]
   },
   {
    "ko": "비리얼 전개",
    "en": "virial expansion",
    "abbr": "",
    "def": "압축 인자를 몰부피의 역수(밀도)에 대한 거듭제곱 급수 \\(Z = 1 + B/V_\\mathrm m + C/V_\\mathrm m^2 + \\cdots\\)로 나타낸 것. 묽은 실제 기체의 상태 방정식이다.",
    "chapters": [
     "equations-of-state#real-gas"
    ]
   },
   {
    "ko": "비열비",
    "en": "heat capacity ratio",
    "abbr": "",
    "def": "\\(\\gamma = C_P/C_V\\). 이상 기체는 \\(1 + R/C_{V,\\mathrm m}\\)이고 단원자 5/3, 상온 이원자 7/5이다.",
    "chapters": [
     "first-law#heat-capacity"
    ]
   },
   {
    "ko": "비오 수",
    "en": "Biot number",
    "abbr": "",
    "def": "물체 안 전도 저항과 표면 대류 저항의 비 \\(\\mathrm{Bi} = hL_c/\\kappa\\).",
    "chapters": [
     "heat-transport#heat-eq"
    ]
   },
   {
    "ko": "비팽창 일",
    "en": "non-expansion work",
    "abbr": "",
    "def": "부피 일 \\(-P\\,dV\\)이 아닌 일(전기 일, 표면 일 등). 일정 온도·압력에서 계가 할 수 있는 최대 비팽창 일은 \\(-\\Delta G\\)이고, 전지에서는 \\(nFE\\)다.",
    "chapters": [
     "free-energy#max-work"
    ]
   },
   {
    "ko": "빈 변위 법칙",
    "en": "Wien's displacement law",
    "abbr": "",
    "def": "흑체 복사 휘도 \\(B_\\lambda\\)가 가장 큰 파장과 온도의 곱이 일정하다는 법칙 \\(\\lambda_\\text{max}T = 2.898\\times10^{-3}\\) m·K.",
    "chapters": [
     "quantum-statistics#blackbody"
    ]
   },
   {
    "ko": "빈도 인자",
    "en": "pre-exponential factor",
    "abbr": "",
    "def": "아레니우스 식 \\(k = Ae^{-E_a/RT}\\)의 지수 앞 인자 \\(A\\). 장벽을 넘으려는 시도의 빈도에 해당한다.",
    "chapters": [
     "kinetics#arrhenius"
    ]
   },
   {
    "ko": "사점",
    "en": "dead state",
    "abbr": "",
    "def": "환경의 온도 \\(T_0\\)·압력 \\(P_0\\)과 평형을 이루어 더 이상 아무 일도 할 수 없는 기준 상태. 엑서지의 기준이다.",
    "chapters": [
     "second-law#exergy"
    ]
   },
   {
    "ko": "사쿠르–테트로드 식",
    "en": "Sackur–Tetrode equation",
    "abbr": "",
    "def": "단원자 이상 기체의 절대 엔트로피 \\(S = Nk[\\ln(V/N\\lambda^3) + \\tfrac52]\\). 298 K, 1 bar의 Ar에 대해 154.85 J/(mol·K)를 준다.",
    "chapters": [
     "boltzmann#translational"
    ]
   },
   {
    "ko": "산소 스캐빈징",
    "en": "oxygen scavenging",
    "abbr": "",
    "def": "산화물이 더 안정한(엘링엄 선이 아래인) 금속을 게이트 적층에 두어 계면 SiO₂ 층의 산소를 끌어가 얇게 만드는 방법.",
    "chapters": [
     "chemical-equilibrium#ellingham"
    ]
   },
   {
    "ko": "산화",
    "en": "oxidation",
    "abbr": "",
    "def": "화학종이 전자를 잃는 반응. 산화수가 증가한다.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "산화 전극",
    "en": "anode",
    "abbr": "",
    "def": "산화 반응이 일어나는 전극. 갈바니 전지에서는 (−)극, 전해 전지에서는 전원의 (+)극에 연결된다.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "삼중점",
    "en": "triple point",
    "abbr": "",
    "def": "한 물질의 고체·액체·기체 세 상이 함께 평형을 이루는 유일한 온도와 압력. 물의 삼중점은 273.16 K, 611.657 Pa이다.",
    "chapters": [
     "equations-of-state#temperature-scales"
    ]
   },
   {
    "ko": "삼투압",
    "en": "osmotic pressure",
    "abbr": "",
    "def": "반투막을 사이에 둔 순수 용매가 용액 쪽으로 흘러드는 것을 막으려고 용액에 더해야 하는 압력. 묽은 용액에서 \\(\\pi = icRT\\)(반트호프 식).",
    "chapters": [
     "solutions#colligative"
    ]
   },
   {
    "ko": "상",
    "en": "phase",
    "abbr": "",
    "def": "조성과 물리적 상태가 균일해 경계로 다른 부분과 구분되는 물질의 영역. 같은 물질의 고체·액체·기체, 결정 구조가 다른 고체가 각각 다른 상이다.",
    "chapters": [
     "phase-transitions#equilibrium"
    ]
   },
   {
    "ko": "상대 휘발도",
    "en": "relative volatility",
    "abbr": "",
    "def": "두 성분의 증기–액체 분배비의 비 \\(\\alpha = (y_\\mathrm{B}/x_\\mathrm{B})/(y_\\mathrm{A}/x_\\mathrm{A})\\). 이상 용액에서는 순수 증기압의 비이고, 클수록 증류가 쉽다.",
    "chapters": [
     "solutions#distillation"
    ]
   },
   {
    "ko": "상세 균형",
    "en": "detailed balance",
    "abbr": "",
    "def": "평형에서 각 정반응 사건과 그 역반응 사건이 같은 빈도로 일어난다는 조건. \\(k_\\mathrm f/k_\\mathrm b = K\\)를 준다.",
    "chapters": [
     "chemical-equilibrium#constants"
    ]
   },
   {
    "ko": "상자성체",
    "en": "paramagnet",
    "abbr": "",
    "def": "외부 자기장이 없으면 자기 모멘트가 무질서하고, 자기장을 걸면 그 방향으로 약하게 자화되는 물질. 이상적 2준위 모형에서 \\(M = N\\mu\\tanh(\\mu B/kT)\\)이다.",
    "chapters": [
     "microstates#paramagnet"
    ]
   },
   {
    "ko": "상전이",
    "en": "phase transition",
    "abbr": "",
    "def": "온도·압력·장 같은 조건이 바뀔 때 물질이 한 상에서 다른 상으로 바뀌는 현상. 녹음·끓음·승화, 강자성 전이 등이 있다.",
    "chapters": [
     "phase-transitions#equilibrium"
    ]
   },
   {
    "ko": "상태 밀도",
    "en": "density of states",
    "abbr": "",
    "def": "단위 에너지당 단일 입자 상태의 수 \\(g(E)\\). 3차원 자유 입자는 \\(\\sqrt E\\)에 비례한다.",
    "chapters": [
     "quantum-statistics#fermi-gas"
    ]
   },
   {
    "ko": "상태 방정식",
    "en": "equation of state",
    "abbr": "",
    "def": "평형 상태의 상태 변수들 사이의 관계식 \\(f(P, V, T, n) = 0\\). 예: 이상 기체 \\(PV = nRT\\), 판데르발스 식.",
    "chapters": [
     "equations-of-state#equilibrium"
    ]
   },
   {
    "ko": "상태 변수",
    "en": "state variable",
    "abbr": "",
    "def": "평형 상태를 나타내는 거시 변수(압력, 부피, 온도, 몰수 등). 값이 상태에만 의존하고 그 상태에 이른 경로와 무관하다.",
    "chapters": [
     "equations-of-state#equilibrium"
    ]
   },
   {
    "ko": "상태 함수",
    "en": "state function",
    "abbr": "",
    "def": "현재 상태(\\(T, P, V, n\\) 등)만으로 값이 정해지는 양. \\(U, H, S\\)가 그 예이고 변화량은 경로와 무관하다(\\(\\oint dU = 0\\)).",
    "chapters": [
     "first-law#state-function"
    ]
   },
   {
    "ko": "상태도",
    "en": "phase diagram",
    "abbr": "",
    "def": "압력–온도 평면에 공존 곡선을 그려 각 조건에서 안정한 상을 나타낸 그림. 영역·선·삼중점·임계점으로 이루어진다.",
    "chapters": [
     "phase-transitions#phase-diagrams"
    ]
   },
   {
    "ko": "상평형",
    "en": "phase equilibrium",
    "abbr": "",
    "def": "두 상이 공존하며 물질이 더 이상 옮겨 가지 않는 상태. 온도·압력이 같고 두 상의 화학 퍼텐셜이 같다 \\(\\mu_\\alpha = \\mu_\\beta\\).",
    "chapters": [
     "phase-transitions#equilibrium"
    ]
   },
   {
    "ko": "상호 작용 매개변수",
    "en": "interaction parameter",
    "abbr": "",
    "def": "정규 용액의 혼합 엔탈피 \\(\\Delta H_\\text{mix} = \\Omega x_\\mathrm{A}x_\\mathrm{B}\\)의 계수 \\(\\Omega = zN_\\mathrm{A}w\\). 양수면 같은 원자끼리, 음수면 다른 원자끼리 선호한다.",
    "chapters": [
     "solutions#mixing"
    ]
   },
   {
    "ko": "선 화합물",
    "en": "line compound",
    "abbr": "",
    "def": "조성 범위가 아주 좁아 상태도에서 수직선으로 그려지는 화합물. 깁스 에너지 곡선이 화학량론 조성에서 뾰족한 우물이다.",
    "chapters": [
     "binary-phase-diagrams#solubility"
    ]
   },
   {
    "ko": "선증착",
    "en": "predeposition",
    "abbr": "",
    "def": "표면 농도를 고용 한계 근처로 고정한 채 짧게 확산해 도즈를 넣는 단계(일정 공급원 확산).",
    "chapters": [
     "diffusion#profiles"
    ]
   },
   {
    "ko": "선택 산화",
    "en": "selective oxidation",
    "abbr": "",
    "def": "H₂O/H₂ 비 같은 분위기 조성을 두 물질의 산화 경계 사이에 맞춰 한 물질(예: Si)만 산화하고 다른 물질(예: W)은 금속으로 두는 공정.",
    "chapters": [
     "chemical-equilibrium#ellingham"
    ]
   },
   {
    "ko": "선택도",
    "en": "selectivity",
    "abbr": "",
    "def": "경쟁하는 경로 가운데 원하는 생성물이 차지하는 몫. 병렬 1차 반응에서는 \\(S = k_1/(k_1+k_2)\\)이다.",
    "chapters": [
     "kinetics#complex"
    ]
   },
   {
    "ko": "선형 속도 상수",
    "en": "linear rate constant",
    "abbr": "",
    "def": "딜–그로브 식의 \\(B/A\\). 얇은 산화막에서 \\(x\\approx(B/A)t\\)로 성장을 정하며 계면 반응 속도를 반영한다.",
    "chapters": [
     "diffusion#oxidation"
    ]
   },
   {
    "ko": "성능 계수",
    "en": "coefficient of performance, COP",
    "abbr": "",
    "def": "냉동기·열펌프가 얻는 열을 넣은 일로 나눈 값. 카르노 한계는 \\(T_c/(T_h - T_c)\\)(냉동), \\(T_h/(T_h - T_c)\\)(난방)이다.",
    "chapters": [
     "second-law#refrigerators"
    ]
   },
   {
    "ko": "성능 지수",
    "en": "figure of merit",
    "abbr": "",
    "def": "열전 재료의 무차원 성능 지수 \\(ZT = S^2\\sigma T/\\kappa\\). 클수록 열전 냉각·발전 효율이 카르노에 가깝다.",
    "chapters": [
     "heat-transport#thermoelectric"
    ]
   },
   {
    "ko": "성분",
    "en": "component",
    "abbr": "",
    "def": "계를 이루는 독립적인 화학종. 성분 수 \\(C\\)는 모든 상의 조성을 나타내는 데 필요한 최소한의 화학종 수다.",
    "chapters": [
     "binary-phase-diagrams#phase-rule"
    ]
   },
   {
    "ko": "속도 결정 단계",
    "en": "rate-determining step",
    "abbr": "",
    "def": "여러 단계로 된 반응에서 가장 느려 전체 속도를 정하는 단계.",
    "chapters": [
     "kinetics#complex"
    ]
   },
   {
    "ko": "속도 법칙",
    "en": "rate law",
    "abbr": "",
    "def": "반응 속도와 농도의 관계를 실험으로 정한 식. 흔히 \\(v = k[\\mathrm A]^m[\\mathrm B]^n\\) 꼴로 쓴다.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "속도 상수",
    "en": "rate constant",
    "abbr": "",
    "def": "속도 법칙의 비례 상수 \\(k\\). 농도와 무관하고 온도에 따라 아레니우스 식처럼 변한다.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "쇼이어 식",
    "en": "Scheil equation",
    "abbr": "",
    "def": "고체 속 확산이 없고 액체가 완전히 섞인다고 본 응고의 용질 분포 \\(C_S = kC_0(1-f_S)^{k-1}\\).",
    "chapters": [
     "binary-phase-diagrams#segregation"
    ]
   },
   {
    "ko": "쇼트키 이상",
    "en": "Schottky anomaly",
    "abbr": "",
    "def": "간격 \\(\\Delta\\)인 2준위 계가 만드는 열용량의 혹. \\(kT\\approx0.42\\Delta\\)에서 최대 \\(0.439k\\)이고 양쪽 온도에서 사라진다.",
    "chapters": [
     "boltzmann#two-level"
    ]
   },
   {
    "ko": "슈테판–볼츠만 법칙",
    "en": "Stefan–Boltzmann law",
    "abbr": "",
    "def": "흑체가 단위 넓이당 내는 전체 복사 일률이 \\(\\sigma T^4\\)(\\(\\sigma = 5.670\\times10^{-8}\\) W/(m²·K⁴))라는 법칙.",
    "chapters": [
     "quantum-statistics#blackbody"
    ]
   },
   {
    "ko": "슈퍼필",
    "en": "superfilling, bottom-up fill",
    "abbr": "",
    "def": "가속제가 홈 바닥에 농축되어 바닥이 더 빨리 자라며 보이드 없이 아래부터 채워지는 구리 도금 충전 현상.",
    "chapters": [
     "electrochemistry#faraday"
    ]
   },
   {
    "ko": "스털링 근사",
    "en": "Stirling's approximation",
    "abbr": "",
    "def": "큰 \\(N\\)에서 계승을 근사하는 식 \\(N! \\approx N^Ne^{-N}\\sqrt{2\\pi N}\\), 곧 \\(\\ln N! \\approx N\\ln N - N\\).",
    "chapters": [
     "microstates#large-numbers"
    ]
   },
   {
    "ko": "스트란스키–크라스타노프 성장",
    "en": "Stranski–Krastanov growth",
    "abbr": "",
    "def": "몇 층의 젖음층을 덮은 뒤 격자 어긋남의 변형 에너지 때문에 섬으로 바뀌는 성장 모드(Si 위 Ge).",
    "chapters": [
     "surfaces-thin-films#nucleation"
    ]
   },
   {
    "ko": "스피노달",
    "en": "spinodal",
    "abbr": "",
    "def": "준안정 상태의 한계, 곧 \\((\\partial P/\\partial V)_T = 0\\)(용액에서는 \\(\\partial^2 G/\\partial x^2 = 0\\))인 점. 이를 넘으면 작은 요동에도 상이 즉시 갈라진다.",
    "chapters": [
     "phase-transitions#vdw-maxwell"
    ]
   },
   {
    "ko": "스피노달 분해",
    "en": "spinodal decomposition",
    "abbr": "",
    "def": "깁스 에너지 곡률이 음수인 스피노달 안쪽에서 작은 조성 요동이 저절로 자라 핵생성 없이 일어나는 상분리. 오르막 확산이 특징이다.",
    "chapters": [
     "solutions#regular-solution"
    ]
   },
   {
    "ko": "승화",
    "en": "sublimation",
    "abbr": "",
    "def": "고체가 액체를 거치지 않고 바로 기체가 되는 상전이. 삼중점보다 낮은 압력에서 일어난다(1 atm의 드라이아이스).",
    "chapters": [
     "phase-transitions#phase-diagrams"
    ]
   },
   {
    "ko": "실리사이드",
    "en": "silicide",
    "abbr": "",
    "def": "실리콘과 전이 금속의 화합물(NiSi, CoSi₂, TiSi₂). 소스·드레인·게이트의 면저항과 접촉 저항을 낮춘다.",
    "chapters": [
     "binary-phase-diagrams#solubility"
    ]
   },
   {
    "ko": "쌍봉 곡선",
    "en": "binodal",
    "abbr": "",
    "def": "온도마다 공통 접선으로 정한 두 공존 조성을 이은 곡선. 그 안쪽에서 균일한 용액은 두 상으로 갈라지는 편이 안정하다.",
    "chapters": [
     "solutions#regular-solution"
    ]
   },
   {
    "ko": "아레니우스 식",
    "en": "Arrhenius equation",
    "abbr": "",
    "def": "속도 상수의 온도 의존성 \\(k = Ae^{-E_a/RT}\\). \\(\\ln k\\)를 \\(1/T\\)에 그리면 기울기 \\(-E_a/R\\)인 직선이 된다.",
    "chapters": [
     "kinetics#arrhenius"
    ]
   },
   {
    "ko": "아이링 식",
    "en": "Eyring equation",
    "abbr": "",
    "def": "전이 상태 이론의 속도 상수 \\(k = (kT/h)e^{\\Delta S^\\ddagger/R}e^{-\\Delta H^\\ddagger/RT}\\).",
    "chapters": [
     "kinetics#tst"
    ]
   },
   {
    "ko": "아인슈타인 고체",
    "en": "Einstein solid",
    "abbr": "",
    "def": "결정을 진동수가 모두 같은 독립 양자 조화 진동자 \\(N\\)개로 본 모형. 에너지는 \\(\\varepsilon = \\hbar\\omega\\) 단위의 덩어리 \\(q\\)개로 나뉘고, 겹침수는 \\(\\Omega = \\binom{q+N-1}{q}\\)이다.",
    "chapters": [
     "microstates#einstein"
    ]
   },
   {
    "ko": "아인슈타인 관계",
    "en": "Einstein relation",
    "abbr": "",
    "def": "같은 미시 운동에서 나오는 확산 계수와 이동도의 관계 \\(D = \\mu kT/q\\).",
    "chapters": [
     "diffusion#einstein"
    ]
   },
   {
    "ko": "안정성 조건",
    "en": "stability condition",
    "abbr": "",
    "def": "수치 풀이의 오차가 걸음마다 커지지 않기 위한 조건. 확산 방정식의 양해법은 \\(r = D\\Delta t/\\Delta x^2\\le\\tfrac12\\)이다.",
    "chapters": [
     "diffusion#budget"
    ]
   },
   {
    "ko": "압축 인자",
    "en": "compressibility factor",
    "abbr": "",
    "def": "실제 기체가 이상 기체에서 벗어난 정도 \\(Z = PV_\\mathrm m/RT\\). \\(Z < 1\\)이면 인력, \\(Z > 1\\)이면 반발이 우세하다.",
    "chapters": [
     "equations-of-state#real-gas"
    ]
   },
   {
    "ko": "액상선",
    "en": "liquidus",
    "abbr": "",
    "def": "그 위에서는 모두 액체인 경계선. 이 선 아래로 식으면 고체가 생기기 시작한다.",
    "chapters": [
     "binary-phase-diagrams#isomorphous"
    ]
   },
   {
    "ko": "양극 산화",
    "en": "anodic oxidation",
    "abbr": "",
    "def": "금속을 산화 전극으로 걸어 표면에 산화막을 전기화학적으로 기르는 공정. 막 두께가 전압에 비례한다.",
    "chapters": [
     "electrochemistry#faraday"
    ]
   },
   {
    "ko": "양자 농도",
    "en": "quantum concentration",
    "abbr": "",
    "def": "부피 \\(\\lambda^3\\)당 입자 하나인 농도 \\(n_Q = (2\\pi mkT/h^2)^{3/2}\\). \\(n\\ll n_Q\\)이면 고전(볼츠만) 통계가 성립한다.",
    "chapters": [
     "boltzmann#translational"
    ]
   },
   {
    "ko": "양해법",
    "en": "explicit method",
    "abbr": "",
    "def": "현재 시간의 값만으로 다음 시간의 값을 바로 계산하는 차분법(FTCS). 확산 방정식에서는 \\(D\\Delta t/\\Delta x^2\\le\\tfrac12\\)일 때만 안정하다.",
    "chapters": [
     "diffusion#budget"
    ]
   },
   {
    "ko": "어는점 내림",
    "en": "freezing-point depression",
    "abbr": "",
    "def": "용질 때문에 용액의 어는점이 낮아지는 현상 \\(\\Delta T_\\mathrm{f} = K_\\mathrm{f}ib\\). 물은 \\(K_\\mathrm{f} = 1.86\\) K·kg/mol.",
    "chapters": [
     "solutions#colligative"
    ]
   },
   {
    "ko": "에반스 도표",
    "en": "Evans diagram",
    "abbr": "",
    "def": "전위 대 로그 전류 좌표에 산화·환원 반응의 타펠 직선을 그려 교점에서 부식 전위와 부식 전류를 읽는 도표.",
    "chapters": [
     "electrochemistry#corrosion"
    ]
   },
   {
    "ko": "에피택시",
    "en": "epitaxy",
    "abbr": "",
    "def": "기판 결정의 방향을 이어받아 단결정 막을 기르는 성장.",
    "chapters": [
     "surfaces-thin-films#nucleation"
    ]
   },
   {
    "ko": "엑서지",
    "en": "exergy",
    "abbr": "",
    "def": "계나 에너지 흐름이 환경(사점)에 이르기까지 가역적으로 뽑을 수 있는 최대 일. 온도 \\(T\\)의 열 \\(Q\\)는 \\(Q(1 - T_0/T)\\)이다.",
    "chapters": [
     "second-law#exergy"
    ]
   },
   {
    "ko": "엔탈피",
    "en": "enthalpy",
    "abbr": "",
    "def": "내부 에너지에 압력과 부피의 곱을 더한 상태 함수 \\(H = U + PV\\). 일정 압력에서 부피 일만 있을 때 주고받은 열과 같다(\\(\\Delta H = Q_P\\)).",
    "chapters": [
     "first-law#enthalpy"
    ]
   },
   {
    "ko": "엔트로피",
    "en": "entropy",
    "abbr": "",
    "def": "\\(dS = \\delta Q_\\text{rev}/T\\)로 정의되는 상태 함수(J/K). 고립계에서는 줄지 않으며, 미시적으로는 \\(S = k\\ln\\Omega\\)이다.",
    "chapters": [
     "second-law#clausius"
    ]
   },
   {
    "ko": "엔트로피 생성",
    "en": "entropy generation",
    "abbr": "",
    "def": "비가역성 때문에 계 안에서 새로 만들어진 엔트로피 \\(S_\\text{gen} = \\Delta S - \\int\\delta Q/T_b \\ge 0\\).",
    "chapters": [
     "second-law#clausius"
    ]
   },
   {
    "ko": "엘링엄 도표",
    "en": "Ellingham diagram",
    "abbr": "",
    "def": "금속 산화 반응의 산소 1 mol당 \\(\\Delta_\\mathrm rG^\\circ\\)를 온도에 대해 그린 그림. 아래 선의 금속이 위 선의 산화물을 환원한다.",
    "chapters": [
     "chemical-equilibrium#ellingham"
    ]
   },
   {
    "ko": "역삼투",
    "en": "reverse osmosis",
    "abbr": "",
    "def": "용액 쪽에 삼투압보다 큰 압력을 걸어 용매를 반투막 너머 순수 쪽으로 밀어내는 분리 방법. 해수 담수화와 초순수 전처리에 쓴다.",
    "chapters": [
     "solutions#colligative"
    ]
   },
   {
    "ko": "역전 온도",
    "en": "inversion temperature",
    "abbr": "",
    "def": "줄–톰슨 계수의 부호가 바뀌는 온도. 저압 판데르발스 근사로 \\(T_\\mathrm{inv} = 2a/Rb\\)이고, 그 아래에서 조름 팽창하면 식는다.",
    "chapters": [
     "first-law#joule-thomson"
    ]
   },
   {
    "ko": "역행 고용도",
    "en": "retrograde solubility",
    "abbr": "",
    "def": "고용도가 녹는점보다 낮은 온도에서 최대가 되고 그보다 뜨거우면 오히려 줄어드는 현상. 실리콘 속 도펀트에서 나타난다.",
    "chapters": [
     "binary-phase-diagrams#solubility"
    ]
   },
   {
    "ko": "연속 방정식",
    "en": "continuity equation",
    "abbr": "",
    "def": "보존되는 양의 국소 장부 \\(\\partial C/\\partial t = -\\partial J/\\partial x\\). 농도 변화는 플럭스의 공간 변화로만 생긴다.",
    "chapters": [
     "diffusion#fick"
    ]
   },
   {
    "ko": "연속 상전이",
    "en": "continuous transition",
    "abbr": "",
    "def": "깁스 에너지와 그 1차 도함수는 연속이고 열용량·자화율 같은 2차 도함수가 발산하거나 뛰는 상전이. 잠열이 없고 질서 변수가 0에서 연속으로 자란다.",
    "chapters": [
     "phase-transitions#metastable"
    ]
   },
   {
    "ko": "연쇄 반응",
    "en": "chain reaction",
    "abbr": "",
    "def": "반응 단계가 다음 반응을 일으킬 라디칼을 다시 만들어 개시·전파·종결의 고리로 이어지는 반응.",
    "chapters": [
     "kinetics#complex"
    ]
   },
   {
    "ko": "열",
    "en": "heat",
    "abbr": "",
    "def": "온도 차 때문에 계의 경계를 건너는 에너지. 계로 들어오면 \\(Q > 0\\)이다.",
    "chapters": [
     "first-law#work-heat"
    ]
   },
   {
    "ko": "열 시간 상수",
    "en": "thermal time constant",
    "abbr": "",
    "def": "집중 용량 모형의 시간 상수 \\(\\tau = RC\\). 이만큼 지나면 최종 변화의 63%에 이른다.",
    "chapters": [
     "heat-transport#heat-eq"
    ]
   },
   {
    "ko": "열 예산",
    "en": "thermal budget",
    "abbr": "",
    "def": "여러 열처리 단계의 확산 계수와 시간의 곱의 합 \\(\\sum D_it_i = \\int D\\,dt\\). 진성 확산에서 분포는 이 값 하나로 정해진다.",
    "chapters": [
     "diffusion#budget"
    ]
   },
   {
    "ko": "열 정지",
    "en": "thermal arrest",
    "abbr": "",
    "def": "응고·공정 반응처럼 자유도가 0인 변태가 일어나는 동안 잠열 때문에 냉각 곡선의 온도가 한 값에 머무는 구간.",
    "chapters": [
     "binary-phase-diagrams#phase-rule"
    ]
   },
   {
    "ko": "열 폭주",
    "en": "thermal runaway",
    "abbr": "",
    "def": "온도가 오르면 발열이 늘어 다시 온도가 오르는 양의 되먹임으로 온도가 발산하는 현상.",
    "chapters": [
     "heat-transport#cooling"
    ]
   },
   {
    "ko": "열 확산 방정식",
    "en": "heat diffusion equation",
    "abbr": "",
    "def": "에너지 보존과 푸리에 법칙을 합친 식 \\(\\rho c\\,\\partial T/\\partial t = \\kappa\\nabla^2T + \\dot q\\).",
    "chapters": [
     "heat-transport#heat-eq"
    ]
   },
   {
    "ko": "열 확산율",
    "en": "thermal diffusivity",
    "abbr": "",
    "def": "\\(\\alpha = \\kappa/\\rho c\\)[m²/s]. 열이 시간 \\(t\\) 동안 스며드는 거리는 약 \\(\\sqrt{\\alpha t}\\)이다.",
    "chapters": [
     "heat-transport#heat-eq"
    ]
   },
   {
    "ko": "열기관",
    "en": "heat engine",
    "abbr": "",
    "def": "고온 열저장체에서 열 \\(Q_h\\)를 받아 일부를 일로 내고 나머지를 저온 열저장체로 버리며 순환하는 장치.",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "열류 밀도",
    "en": "heat flux",
    "abbr": "",
    "def": "단위 시간에 단위 넓이를 지나는 열 \\(\\mathbf q\\)[W/m²].",
    "chapters": [
     "heat-transport#fourier"
    ]
   },
   {
    "ko": "열역학 극한",
    "en": "thermodynamic limit",
    "abbr": "",
    "def": "입자 수 \\(N\\)이 매우 커서 상대 요동(\\(\\sim1/\\sqrt N\\))이 측정 정밀도보다 작아지고, 통계적 진술이 확정적인 열역학 법칙처럼 보이는 극한.",
    "chapters": [
     "microstates#large-numbers"
    ]
   },
   {
    "ko": "열역학 사각형",
    "en": "thermodynamic square",
    "abbr": "",
    "def": "변수 \\(V, T, P, S\\)를 꼭짓점에, 퍼텐셜 \\(F, G, H, U\\)를 변에 둔 기억 도표. 네 퍼텐셜의 미분식과 맥스웰 관계식을 부호까지 읽어 낼 수 있다.",
    "chapters": [
     "free-energy#maxwell"
    ]
   },
   {
    "ko": "열역학 제0법칙",
    "en": "zeroth law of thermodynamics",
    "abbr": "",
    "def": "계 A와 B가 각각 계 C와 열평형에 있으면 A와 B도 서로 열평형에 있다는 법칙. 온도를 정의하는 근거다.",
    "chapters": [
     "equations-of-state#equilibrium"
    ]
   },
   {
    "ko": "열역학 퍼텐셜",
    "en": "thermodynamic potentials",
    "abbr": "",
    "def": "자연 변수의 함수로 쓰면 계의 모든 평형 성질을 담는 에너지 차원의 상태 함수. 내부 에너지 \\(U\\), 엔탈피 \\(H\\), 헬름홀츠 에너지 \\(F\\), 깁스 에너지 \\(G\\)가 대표적이다.",
    "chapters": [
     "free-energy#legendre"
    ]
   },
   {
    "ko": "열역학적 온도 눈금",
    "en": "thermodynamic temperature scale",
    "abbr": "",
    "def": "가역 기관이 두 저장체와 주고받는 열의 비로 정의한 물질과 무관한 온도 눈금 \\(T_c/T_h = |Q_c|/Q_h\\). 이상 기체 온도 눈금과 같다.",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "열역학적 플럭스",
    "en": "thermodynamic flux",
    "abbr": "",
    "def": "비가역 과정의 흐름(열류, 전류, 입자 흐름 등). 짝힘과의 곱의 합이 엔트로피 생성률이다.",
    "chapters": [
     "heat-transport#onsager"
    ]
   },
   {
    "ko": "열역학적 힘",
    "en": "thermodynamic force",
    "abbr": "",
    "def": "플럭스를 일으키는 일반화된 기울기(예: \\(\\nabla(1/T)\\), \\(E/T\\), \\(-\\nabla(\\mu/T)\\)).",
    "chapters": [
     "heat-transport#onsager"
    ]
   },
   {
    "ko": "열용량",
    "en": "heat capacity",
    "abbr": "",
    "def": "온도를 1 K 올리는 데 드는 열. 부피 일정이면 \\(C_V = (\\partial U/\\partial T)_V\\), 압력 일정이면 \\(C_P = (\\partial H/\\partial T)_P\\)이다.",
    "chapters": [
     "first-law#heat-capacity"
    ]
   },
   {
    "ko": "열저장체",
    "en": "thermal reservoir",
    "abbr": "",
    "def": "열을 얼마나 주고받아도 온도가 변하지 않을 만큼 열용량이 큰 물체. 엔트로피 변화는 \\(Q/T\\)이다.",
    "chapters": [
     "second-law#spontaneity"
    ]
   },
   {
    "ko": "열저항",
    "en": "thermal resistance",
    "abbr": "",
    "def": "온도 차를 흐르는 열로 나눈 값 \\(R_\\mathrm{th} = \\Delta T/Q\\)[K/W]. 평판은 \\(L/\\kappa A\\), 대류는 \\(1/hA\\).",
    "chapters": [
     "heat-transport#resistance"
    ]
   },
   {
    "ko": "열적 드브로이 파장",
    "en": "thermal de Broglie wavelength",
    "abbr": "",
    "def": "열운동하는 입자의 전형적인 드브로이 파장 \\(\\lambda = h/\\sqrt{2\\pi mkT}\\). 병진 분배 함수가 \\(V/\\lambda^3\\)이다.",
    "chapters": [
     "boltzmann#translational"
    ]
   },
   {
    "ko": "열전도도",
    "en": "thermal conductivity",
    "abbr": "",
    "def": "푸리에 법칙의 비례 상수 \\(\\kappa\\)[W/(m·K)]. 운반자 그림에서 \\(\\kappa = \\tfrac13Cv\\ell\\)이다.",
    "chapters": [
     "heat-transport#fourier"
    ]
   },
   {
    "ko": "열전압",
    "en": "thermal voltage",
    "abbr": "",
    "def": "\\(kT/q\\). 300 K에서 약 25.9 mV이며 확산과 표류의 비를 정한다.",
    "chapters": [
     "diffusion#einstein"
    ]
   },
   {
    "ko": "열중립 전압",
    "en": "thermoneutral voltage",
    "abbr": "",
    "def": "전해조가 열을 주고받지 않는 전압 \\(-\\Delta_\\mathrm rH/nF\\). 물 분해는 25 °C에서 1.481 V다.",
    "chapters": [
     "electrochemistry#gibbs"
    ]
   },
   {
    "ko": "열팽창 계수",
    "en": "thermal expansion coefficient",
    "abbr": "",
    "def": "일정 압력에서 온도에 따른 부피의 상대 변화율 \\(\\alpha = (1/V)(\\partial V/\\partial T)_P\\). 이상 기체는 \\(1/T\\), 등방성 고체는 선팽창 계수의 3배다.",
    "chapters": [
     "equations-of-state#response"
    ]
   },
   {
    "ko": "열펌프",
    "en": "heat pump",
    "abbr": "",
    "def": "일을 받아 저온 열원의 열을 고온 쪽으로 퍼 올려 난방·가열에 쓰는 장치. \\(\\text{COP}_\\text{HP} = |Q_h|/W = \\text{COP}_\\text{R} + 1\\).",
    "chapters": [
     "second-law#refrigerators"
    ]
   },
   {
    "ko": "열평형",
    "en": "thermal equilibrium",
    "abbr": "",
    "def": "열적으로 접촉한 계들의 거시적 성질이 더 이상 변하지 않는 상태. 열평형인 계들은 온도가 같다.",
    "chapters": [
     "equations-of-state#equilibrium"
    ]
   },
   {
    "ko": "열효율",
    "en": "thermal efficiency",
    "abbr": "",
    "def": "열기관이 받은 열 가운데 일로 바뀐 비율 \\(\\eta = |W_\\text{out}|/Q_h = 1 - |Q_c|/Q_h\\).",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "염다리",
    "en": "salt bridge",
    "abbr": "",
    "def": "두 반쪽 전지를 이온으로 이어 전하 중성을 유지하고 액간 접촉 전위를 줄이는 전해질 통로.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "영 식",
    "en": "Young's equation",
    "abbr": "",
    "def": "접촉선의 수평 힘 균형 \\(\\gamma_\\mathrm{SV} = \\gamma_\\mathrm{SL}+\\gamma_\\mathrm{LV}\\cos\\theta\\). 계면 장력으로 평형 접촉각을 준다.",
    "chapters": [
     "surfaces-thin-films#wetting"
    ]
   },
   {
    "ko": "영역 선택 증착",
    "en": "area-selective deposition",
    "abbr": "",
    "def": "표면 종류에 따른 핵생성 지연 차이를 이용해 원하는 표면에만 막을 쌓는 증착.",
    "chapters": [
     "surfaces-thin-films#ald"
    ]
   },
   {
    "ko": "오차 함수",
    "en": "error function",
    "abbr": "",
    "def": "\\(\\operatorname{erf}(z) = \\frac{2}{\\sqrt\\pi}\\int_0^z e^{-u^2}du\\). 그 여함수 \\(\\operatorname{erfc} = 1-\\operatorname{erf}\\)가 일정 공급원 확산의 해다.",
    "chapters": [
     "diffusion#profiles"
    ]
   },
   {
    "ko": "온도",
    "en": "temperature",
    "abbr": "",
    "def": "서로 열평형인 계들이 공통으로 갖는 상태 변수. 분자 수준에서는 분자당 평균 운동 에너지의 척도이고, SI에서는 \\(k = 1.380649\\times10^{-23}\\) J/K로 켈빈을 정의한다.",
    "chapters": [
     "equations-of-state#equilibrium"
    ]
   },
   {
    "ko": "온도 계수",
    "en": "temperature coefficient",
    "abbr": "",
    "def": "기전력의 온도 미분 \\((\\partial E/\\partial T)_P\\). \\(\\Delta_\\mathrm rS = nF(\\partial E/\\partial T)_P\\)로 반응 엔트로피를 준다.",
    "chapters": [
     "electrochemistry#gibbs"
    ]
   },
   {
    "ko": "온사거 상반 관계",
    "en": "Onsager reciprocal relations",
    "abbr": "",
    "def": "엔트로피 생성에 맞춰 고른 플럭스–힘의 선형 계수 행렬이 대칭이라는 정리 \\(L_{ij} = L_{ji}\\). 미시적 가역성에서 나온다.",
    "chapters": [
     "heat-transport#onsager"
    ]
   },
   {
    "ko": "요동–소산 정리",
    "en": "fluctuation–dissipation theorem",
    "abbr": "",
    "def": "평형 요동의 크기와 작은 힘에 대한 소산 응답이 \\(kT\\)로 묶여 있다는 정리. 아인슈타인 관계와 존슨 잡음이 그 예다.",
    "chapters": [
     "heat-transport#fdt"
    ]
   },
   {
    "ko": "용매",
    "en": "solvent",
    "abbr": "",
    "def": "용액에서 양이 많아 다른 성분을 녹이는 쪽 성분. 묽은 용액에서는 라울 법칙을 따른다.",
    "chapters": [
     "solutions#partial-molar"
    ]
   },
   {
    "ko": "용액",
    "en": "solution",
    "abbr": "",
    "def": "두 가지 이상의 물질이 분자 수준에서 고르게 섞인 한 상. 액체뿐 아니라 기체 혼합물과 고용체도 포함한다.",
    "chapters": [
     "solutions#partial-molar"
    ]
   },
   {
    "ko": "용질",
    "en": "solute",
    "abbr": "",
    "def": "용액에서 양이 적어 용매에 녹아 있는 성분. 묽은 용액에서는 헨리 법칙을 따른다.",
    "chapters": [
     "solutions#partial-molar"
    ]
   },
   {
    "ko": "원소 퍼텐셜",
    "en": "element potential",
    "abbr": "",
    "def": "깁스 최소화에서 원소 보존 조건에 붙는 라그랑주 승수로, 원소 1 mol의 화학 퍼텐셜이다. 각 물질의 화학 퍼텐셜은 \\(\\mu_i = \\sum_j a_{ij}\\lambda_j\\)다.",
    "chapters": [
     "chemical-equilibrium#multiple"
    ]
   },
   {
    "ko": "원자층 증착",
    "en": "atomic layer deposition",
    "abbr": "",
    "def": "서로 반응하는 두 전구체를 퍼지로 떼어 번갈아 넣어, 자기 제한 표면 반응으로 막을 사이클마다 일정 두께씩 쌓는 증착법(ALD).",
    "chapters": [
     "surfaces-thin-films#ald"
    ]
   },
   {
    "ko": "유사 1차 반응",
    "en": "pseudo-first-order reaction",
    "abbr": "",
    "def": "다른 반응물이 과량이라 \\(v = k'[\\mathrm A]\\), \\(k' = k[\\mathrm B]_0^n\\)처럼 1차 반응으로 행동하는 반응.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "유효 배기 속도",
    "en": "effective pumping speed",
    "abbr": "",
    "def": "컨덕턴스를 거친 뒤 챔버에서 실제로 쓰는 배기 속도 \\(S_\\mathrm{eff} = SC/(S+C)\\).",
    "chapters": [
     "kinetic-theory-vacuum#pumping"
    ]
   },
   {
    "ko": "유효 상태 밀도",
    "en": "effective density of states",
    "abbr": "",
    "def": "반도체 띠의 상태를 띠 가장자리 한 준위에 모은 것처럼 쓰는 농도 \\(N_c = 2(2\\pi m^*kT/h^2)^{3/2}\\). 볼츠만 근사에서 \\(n = N_ce^{-(E_c-E_\\mathrm F)/kT}\\).",
    "chapters": [
     "quantum-statistics#fermi-gas"
    ]
   },
   {
    "ko": "유효 편석 계수",
    "en": "effective segregation coefficient",
    "abbr": "",
    "def": "결정 농도와 융액 평균 농도의 비. 버턴–프림–슬리히터 식 \\(k_\\mathrm{eff} = k_0/[k_0 + (1-k_0)e^{-v\\delta/D}]\\)로 주어진다.",
    "chapters": [
     "binary-phase-diagrams#segregation"
    ]
   },
   {
    "ko": "음의 온도",
    "en": "negative temperature",
    "abbr": "",
    "def": "에너지에 위 한계가 있는 계에서 \\(\\partial S/\\partial U < 0\\)인 상태의 온도. 높은 준위가 더 많이 찬 상태로, 어떤 양의 온도보다도 뜨거워 양의 온도 계에 에너지를 내준다.",
    "chapters": [
     "microstates#paramagnet"
    ]
   },
   {
    "ko": "이동도",
    "en": "mobility",
    "abbr": "",
    "def": "단위 전기장당 표류 속도 \\(\\mu = v/E\\)[cm²/(V·s)].",
    "chapters": [
     "diffusion#einstein"
    ]
   },
   {
    "ko": "이론 단",
    "en": "theoretical stage",
    "abbr": "",
    "def": "증기와 액체가 완전히 평형에 이르는 한 번의 접촉에 해당하는 증류의 단위. 펜스케 식이 최소 이론 단수를 준다.",
    "chapters": [
     "solutions#distillation"
    ]
   },
   {
    "ko": "이상 기체",
    "en": "ideal gas",
    "abbr": "",
    "def": "분자의 크기와 분자 사이 힘을 무시한 기체 모형. 상태 방정식 \\(PV = nRT = NkT\\)를 따르며, 실제 기체의 묽은 극한이다.",
    "chapters": [
     "equations-of-state#ideal-gas"
    ]
   },
   {
    "ko": "이상 용액",
    "en": "ideal solution",
    "abbr": "",
    "def": "모든 조성에서 각 성분의 화학 퍼텐셜이 \\(\\mu_i = \\mu_i^* + RT\\ln x_i\\)를 따르는 용액. 혼합 엔탈피와 부피 변화가 0이다.",
    "chapters": [
     "solutions#mixing"
    ]
   },
   {
    "ko": "이성분 상태도",
    "en": "binary phase diagram",
    "abbr": "",
    "def": "두 성분 계에서 일정 압력일 때 조성(가로축)과 온도(세로축)에 따라 안정한 상을 나타낸 그림.",
    "chapters": [
     "binary-phase-diagrams#phase-rule"
    ]
   },
   {
    "ko": "이슬점",
    "en": "dew point",
    "abbr": "",
    "def": "일정한 압력에서 증기 혼합물을 식힐 때 첫 액체 방울이 맺히는 온도. \\(\\sum y_iP/(\\gamma_iP_i^*) = 1\\)로 정해진다.",
    "chapters": [
     "solutions#distillation"
    ]
   },
   {
    "ko": "이징 모형",
    "en": "Ising model",
    "abbr": "",
    "def": "격자 자리마다 ±1 스핀을 두고 이웃 스핀이 같으면 에너지가 \\(J\\)만큼 낮아지는 모형 \\(E = -J\\sum s_is_j - h\\sum s_i\\). 2차원 이상에서 상전이를 보인다.",
    "chapters": [
     "phase-transitions#ising"
    ]
   },
   {
    "ko": "일",
    "en": "work",
    "abbr": "",
    "def": "계의 경계가 힘을 받으며 움직여 전달되는 에너지. 부피 일은 \\(W = -\\int P_\\mathrm{ext}\\,dV\\)이고, 이 책에서는 계가 받은 일을 양수로 둔다.",
    "chapters": [
     "first-law#work-heat"
    ]
   },
   {
    "ko": "일정 공급원",
    "en": "constant source",
    "abbr": "",
    "def": "표면 농도가 일정한 값 \\(C_s\\)로 유지되는 확산 조건. 해는 \\(C_s\\operatorname{erfc}(x/2\\sqrt{Dt})\\)이다.",
    "chapters": [
     "diffusion#profiles"
    ]
   },
   {
    "ko": "잃어버린 일",
    "en": "lost work",
    "abbr": "",
    "def": "가역 한계의 일과 실제 일의 차이로, 생성된 엔트로피에 환경 온도를 곱한 \\(W_\\text{lost} = T_0S_\\text{gen}\\)(구이–스토도라 정리)과 같다.",
    "chapters": [
     "second-law#exergy"
    ]
   },
   {
    "ko": "임계 온도",
    "en": "critical temperature",
    "abbr": "",
    "def": "임계점의 온도 \\(T_\\mathrm c\\). 이보다 높은 온도에서는 아무리 압축해도 기체가 액화하지 않는다.",
    "chapters": [
     "equations-of-state#van-der-waals"
    ]
   },
   {
    "ko": "임계 유백광",
    "en": "critical opalescence",
    "abbr": "",
    "def": "임계점 근처에서 밀도 요동이 빛의 파장만큼 커져 투명한 유체가 빛을 강하게 산란해 우윳빛으로 흐려지는 현상.",
    "chapters": [
     "phase-transitions#phase-diagrams"
    ]
   },
   {
    "ko": "임계 지수",
    "en": "critical exponent",
    "abbr": "",
    "def": "임계점 근처의 거듭제곱 법칙 \\(m\\propto(T_\\mathrm{c}-T)^\\beta\\), \\(C\\propto|t|^{-\\alpha}\\), \\(\\chi\\propto|t|^{-\\gamma}\\)의 지수. 차원과 대칭에만 의존한다(보편성).",
    "chapters": [
     "phase-transitions#metastable"
    ]
   },
   {
    "ko": "임계 핵",
    "en": "critical nucleus",
    "abbr": "",
    "def": "\\(\\Delta G(r)\\)가 최대인 반지름 \\(r^* = 2\\gamma/\\Delta G_v\\)의 핵. 이보다 작으면 녹고 크면 자란다.",
    "chapters": [
     "surfaces-thin-films#nucleation"
    ]
   },
   {
    "ko": "임계점",
    "en": "critical point",
    "abbr": "",
    "def": "액체와 기체의 구분이 사라지는 상태. 등온선이 \\(\\partial P/\\partial V = \\partial^2P/\\partial V^2 = 0\\)인 수평 변곡점을 가지며, 판데르발스 모형에서 \\(V_\\mathrm c = 3b\\), \\(T_\\mathrm c = 8a/27Rb\\), \\(P_\\mathrm c = a/27b^2\\)이다.",
    "chapters": [
     "equations-of-state#van-der-waals"
    ]
   },
   {
    "ko": "입체 인자",
    "en": "steric factor",
    "abbr": "",
    "def": "실험 빈도 인자와 충돌 이론 빈도 인자의 비 \\(P\\). 분자가 알맞은 방향으로 만나야 반응하는 정도를 나타낸다.",
    "chapters": [
     "kinetics#collision"
    ]
   },
   {
    "ko": "자기 가열",
    "en": "self-heating",
    "abbr": "",
    "def": "소자가 스스로 낸 줄 열로 자기 온도를 올리는 현상. FinFET·SOI 소자와 배선에서 중요하다.",
    "chapters": [
     "heat-transport#cooling"
    ]
   },
   {
    "ko": "자기 제한 반응",
    "en": "self-limiting reaction",
    "abbr": "",
    "def": "표면 반응 자리가 다 쓰이면 노출을 더 해도 스스로 멈추는 반응. ALD의 바탕이다.",
    "chapters": [
     "surfaces-thin-films#ald"
    ]
   },
   {
    "ko": "자기 확산",
    "en": "self-diffusion",
    "abbr": "",
    "def": "결정을 이루는 원자 자신이 그 결정 속에서 확산하는 것. 실리콘의 자기 확산 활성화 에너지는 약 4.8 eV다.",
    "chapters": [
     "diffusion#mechanisms"
    ]
   },
   {
    "ko": "자발 과정",
    "en": "spontaneous process",
    "abbr": "",
    "def": "바깥에서 손대지 않아도 저절로 한 방향으로 일어나는 변화. 고립계에서는 엔트로피가 늘어나는 방향이다.",
    "chapters": [
     "second-law#spontaneity"
    ]
   },
   {
    "ko": "자발 자화",
    "en": "spontaneous magnetization",
    "abbr": "",
    "def": "바깥 장이 없어도 임계 온도 아래에서 스핀들이 저절로 정렬해 생기는 자화. 2차원 이징에서는 온사거 해 \\((1-\\sinh^{-4}(2J/kT))^{1/8}\\)이다.",
    "chapters": [
     "phase-transitions#ising"
    ]
   },
   {
    "ko": "자연 변수",
    "en": "natural variables",
    "abbr": "",
    "def": "열역학 퍼텐셜을 그 함수로 쓰면 모든 열역학 정보가 편미분으로 얻어지는 독립 변수. \\(U\\)는 \\(S,V\\), \\(H\\)는 \\(S,P\\), \\(F\\)는 \\(T,V\\), \\(G\\)는 \\(T,P\\)다.",
    "chapters": [
     "free-energy#legendre"
    ]
   },
   {
    "ko": "자유 팽창",
    "en": "free expansion",
    "abbr": "",
    "def": "기체가 진공 쪽으로 퍼지는 단열 팽창. \\(W = 0\\), \\(Q = 0\\)이라 \\(\\Delta U = 0\\)이고 이상 기체의 온도는 그대로다.",
    "chapters": [
     "first-law#joule-thomson"
    ]
   },
   {
    "ko": "자유도",
    "en": "degrees of freedom",
    "abbr": "",
    "def": "평형을 깨지 않고 마음대로 정할 수 있는 세기 변수(온도·압력·조성)의 수 \\(F\\).",
    "chapters": [
     "binary-phase-diagrams#phase-rule"
    ]
   },
   {
    "ko": "잔류 엔트로피",
    "en": "residual entropy",
    "abbr": "",
    "def": "분자 방향이나 수소 결합 배치가 무질서하게 얼어붙어 0 K에서도 남는 엔트로피. CO는 약 \\(R\\ln 2\\), 얼음은 \\(R\\ln(3/2)\\)이다.",
    "chapters": [
     "second-law#mixing-third-law"
    ]
   },
   {
    "ko": "잠열",
    "en": "latent heat",
    "abbr": "",
    "def": "1차 상전이에서 온도 변화 없이 주고받는 열 \\(\\Delta H = T\\Delta S\\). 융해열·증발열이 그 예다.",
    "chapters": [
     "phase-transitions#metastable"
    ]
   },
   {
    "ko": "전기 이중층",
    "en": "electric double layer",
    "abbr": "",
    "def": "전극 표면 전하와 그것을 가리는 반대 부호 이온층이 마주 선 두께 1 nm 안팎의 계면 구조.",
    "chapters": [
     "electrochemistry#kinetics"
    ]
   },
   {
    "ko": "전기화학 퍼텐셜",
    "en": "electrochemical potential",
    "abbr": "",
    "def": "전하를 띤 화학종의 화학 퍼텐셜에 전기 에너지를 더한 양 \\(\\tilde\\mu_i = \\mu_i + z_iF\\phi\\).",
    "chapters": [
     "electrochemistry#kinetics"
    ]
   },
   {
    "ko": "전달 계수",
    "en": "transfer coefficient",
    "abbr": "",
    "def": "과전압 에너지 \\(F\\eta\\) 가운데 활성화 장벽을 바꾸는 비율 \\(\\alpha\\)(보통 0.3–0.7). 타펠 기울기를 정한다.",
    "chapters": [
     "electrochemistry#kinetics"
    ]
   },
   {
    "ko": "전류 효율",
    "en": "current efficiency",
    "abbr": "",
    "def": "흘린 전류 가운데 원하는 전극 반응에 쓰인 비율. 나머지는 수소 발생 같은 부반응에 쓰인다.",
    "chapters": [
     "electrochemistry#faraday"
    ]
   },
   {
    "ko": "전리 게이지",
    "en": "ionization gauge",
    "abbr": "",
    "def": "전자로 기체를 이온화해 이온 전류로 수밀도를 재는 게이지. \\(10^{-10}\\)–\\(10^{-3}\\) Torr에서 쓰며 기체별 감도 계수로 보정한다.",
    "chapters": [
     "kinetic-theory-vacuum#gauges"
    ]
   },
   {
    "ko": "전율 고용체",
    "en": "isomorphous system",
    "abbr": "",
    "def": "두 성분이 고체에서도 모든 조성으로 섞여 한 고용체를 이루는 계. 상태도는 렌즈 모양이다(Si–Ge, Cu–Ni).",
    "chapters": [
     "binary-phase-diagrams#isomorphous"
    ]
   },
   {
    "ko": "전이 상태",
    "en": "transition state",
    "abbr": "",
    "def": "반응 좌표 위 에너지가 가장 높은 안장점. 반응 좌표 방향으로는 꼭대기, 다른 방향으로는 바닥이다.",
    "chapters": [
     "kinetics#tst"
    ]
   },
   {
    "ko": "전자 이동",
    "en": "electromigration",
    "abbr": "",
    "def": "큰 전류 밀도의 전자 흐름이 금속 원자를 밀어 옮겨 배선에 공공·돌출을 만드는 현상.",
    "chapters": [
     "heat-transport#cooling"
    ]
   },
   {
    "ko": "전지 표기",
    "en": "cell notation",
    "abbr": "",
    "def": "산화 전극을 왼쪽, 환원 전극을 오른쪽에 두고 상 경계를 \\(|\\), 염다리를 \\(\\|\\)로 나타내는 전지의 약식 표기.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "전하 이동 저항",
    "en": "charge-transfer resistance",
    "abbr": "",
    "def": "작은 과전압에서 계면이 보이는 저항 \\(R_\\text{ct} = RT/(Fj_0)\\).",
    "chapters": [
     "electrochemistry#kinetics"
    ]
   },
   {
    "ko": "전해 전지",
    "en": "electrolytic cell",
    "abbr": "",
    "def": "외부 전원으로 기전력보다 큰 전압을 걸어 비자발적 반응을 일으키는 전지. 전기 분해와 전기 도금이 그 예다.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "전환 빈도",
    "en": "turnover frequency",
    "abbr": "",
    "def": "촉매 자리 하나가 단위 시간에 일으키는 반응 횟수.",
    "chapters": [
     "kinetics#catalysis"
    ]
   },
   {
    "ko": "절대 엔트로피",
    "en": "absolute entropy",
    "abbr": "",
    "def": "제3법칙을 기준으로 0 K부터 \\(\\int C_P/T\\,dT\\)와 상전이 항 \\(\\Delta H_\\text{tr}/T_\\text{tr}\\)을 더해 얻은 엔트로피 값. 열량계 엔트로피라고도 한다.",
    "chapters": [
     "second-law#mixing-third-law"
    ]
   },
   {
    "ko": "점성 계수",
    "en": "viscosity",
    "abbr": "",
    "def": "전단 응력과 속도 기울기의 비 \\(\\eta\\). 기체 운동론에서 \\(\\eta = \\tfrac13nm\\bar v\\lambda\\)로 압력과 무관하고 \\(\\sqrt T\\)에 비례한다.",
    "chapters": [
     "kinetic-theory-vacuum#transport"
    ]
   },
   {
    "ko": "점성류",
    "en": "viscous flow",
    "abbr": "",
    "def": "\\(\\mathrm{Kn}\\ll1\\)이라 분자끼리 충돌이 지배해 기체가 연속 유체처럼 흐르는 영역.",
    "chapters": [
     "kinetic-theory-vacuum#mfp"
    ]
   },
   {
    "ko": "접촉각",
    "en": "contact angle",
    "abbr": "",
    "def": "고체·액체·기체가 만나는 접촉선에서 액체 쪽으로 잰 고체 표면과 액체 표면 사이의 각. 90°보다 작으면 젖는 표면이다.",
    "chapters": [
     "surfaces-thin-films#wetting"
    ]
   },
   {
    "ko": "접합 깊이",
    "en": "junction depth",
    "abbr": "",
    "def": "도펀트 농도가 반대 형 배경 농도 \\(N_B\\)와 같아져 pn 접합이 생기는 깊이 \\(x_j\\).",
    "chapters": [
     "diffusion#profiles"
    ]
   },
   {
    "ko": "접합 온도",
    "en": "junction temperature",
    "abbr": "",
    "def": "다이 표면의 트랜지스터 영역 온도 \\(T_\\mathrm J = T_\\mathrm A + P\\theta_\\mathrm{JA}\\). 칩의 열 설계 한계를 정한다.",
    "chapters": [
     "heat-transport#resistance"
    ]
   },
   {
    "ko": "정규 용액",
    "en": "regular solution",
    "abbr": "",
    "def": "이상 혼합 엔트로피에 혼합 엔탈피 \\(\\Omega x_\\mathrm{A}x_\\mathrm{B}\\)를 더한 용액 모형. 임계 온도 \\(T_\\mathrm{c} = \\Omega/2R\\) 아래에서 상분리한다.",
    "chapters": [
     "solutions#regular-solution"
    ]
   },
   {
    "ko": "정상 상태 근사",
    "en": "steady-state approximation",
    "abbr": "",
    "def": "반응성이 커서 농도가 작은 중간체에 대해 \\(d[\\mathrm I]/dt\\approx0\\)으로 두어 생성과 소멸 속도가 같다고 보는 근사.",
    "chapters": [
     "kinetics#complex"
    ]
   },
   {
    "ko": "정적 기체 온도계",
    "en": "constant-volume gas thermometer",
    "abbr": "",
    "def": "기체의 부피를 일정하게 두고 압력으로 온도를 재는 온도계. \\(T = 273.16\\ \\mathrm K\\times\\lim_{P_\\mathrm{tp}\\to0}P/P_\\mathrm{tp}\\)로 기체 종류와 무관한 이상 기체 온도를 준다.",
    "chapters": [
     "equations-of-state#temperature-scales"
    ]
   },
   {
    "ko": "정전 용량 압력계",
    "en": "capacitance manometer",
    "abbr": "",
    "def": "압력에 따른 격막의 휨을 정전 용량으로 재는 절대압 게이지(CDG). 기체 종류와 무관해 공정 압력 제어에 쓴다.",
    "chapters": [
     "kinetic-theory-vacuum#gauges"
    ]
   },
   {
    "ko": "정준 앙상블",
    "en": "canonical ensemble",
    "abbr": "",
    "def": "온도 \\(T\\)인 열저장체와 열평형에 있는 계의 미시 상태 모임. 각 상태의 확률이 볼츠만 분포 \\(e^{-E/kT}/Z\\)를 따른다.",
    "chapters": [
     "boltzmann#reservoir"
    ]
   },
   {
    "ko": "젖음",
    "en": "wetting",
    "abbr": "",
    "def": "액체가 고체 표면에 퍼져 붙는 정도. 퍼짐 계수 \\(S = \\gamma_\\mathrm{SV}-\\gamma_\\mathrm{SL}-\\gamma_\\mathrm{LV}\\ge0\\)이면 완전 젖음(\\(\\theta = 0\\))이다.",
    "chapters": [
     "surfaces-thin-films#wetting"
    ]
   },
   {
    "ko": "제2법칙 효율",
    "en": "second-law efficiency",
    "abbr": "",
    "def": "실제 성능을 같은 조건의 가역 한계로 나눈 값. 기관은 \\(W/W_\\text{rev}\\), 냉동기는 \\(\\text{COP}/\\text{COP}_\\text{rev}\\)이다.",
    "chapters": [
     "second-law#exergy"
    ]
   },
   {
    "ko": "제3법칙",
    "en": "third law of thermodynamics",
    "abbr": "",
    "def": "완전한 결정인 순물질의 엔트로피는 \\(T \\to 0\\)에서 0이라는 법칙. 유한 단계로는 절대 영도에 도달할 수 없다는 것과 같다.",
    "chapters": [
     "second-law#mixing-third-law"
    ]
   },
   {
    "ko": "제곱 평균 제곱근 속력",
    "en": "root-mean-square speed",
    "abbr": "",
    "def": "속력 제곱 평균의 제곱근 \\(v_\\mathrm{rms} = \\sqrt{3kT/m}\\). \\(\\tfrac12mv_\\mathrm{rms}^2 = \\tfrac32kT\\)이다.",
    "chapters": [
     "kinetic-theory-vacuum#mb"
    ]
   },
   {
    "ko": "제베크 계수",
    "en": "Seebeck coefficient",
    "abbr": "",
    "def": "온도 차 1 K당 생기는 열전 전압 \\(S\\)[V/K]. 부호는 주 운반자 전하의 부호를 따른다.",
    "chapters": [
     "heat-transport#thermoelectric"
    ]
   },
   {
    "ko": "제베크 효과",
    "en": "Seebeck effect",
    "abbr": "",
    "def": "서로 다른 두 도체의 접점 온도가 다르면 회로에 온도 차에 비례하는 전압 \\(V = S_{AB}\\Delta T\\)가 생기는 현상.",
    "chapters": [
     "heat-transport#thermoelectric"
    ]
   },
   {
    "ko": "제한 공급원",
    "en": "limited source",
    "abbr": "",
    "def": "들어간 총량(도즈) \\(Q\\)가 고정된 확산 조건. 해는 가우스 분포 \\(\\frac{Q}{\\sqrt{\\pi Dt}}e^{-x^2/4Dt}\\)이다.",
    "chapters": [
     "diffusion#profiles"
    ]
   },
   {
    "ko": "조름 팽창",
    "en": "throttling",
    "abbr": "",
    "def": "기체가 밸브·다공 마개를 지나 높은 압력에서 낮은 압력으로 꾸준히 흐르는 단열 과정. 엔탈피가 일정하다(\\(H_1 = H_2\\)).",
    "chapters": [
     "first-law#joule-thomson"
    ]
   },
   {
    "ko": "조머펠트 전개",
    "en": "Sommerfeld expansion",
    "abbr": "",
    "def": "페르미–디랙 적분을 \\(kT/E_\\mathrm F\\)의 거듭제곱으로 전개하는 방법. 전자 열용량 \\(C_V = \\frac{\\pi^2}{2}Nk\\,T/T_\\mathrm F\\)를 준다.",
    "chapters": [
     "quantum-statistics#fermi-gas"
    ]
   },
   {
    "ko": "존 정제",
    "en": "zone refining",
    "abbr": "",
    "def": "막대의 좁은 띠만 녹여 한쪽으로 옮기면서 \\(k < 1\\)인 불순물을 끝으로 쓸어 모으는 정제법.",
    "chapters": [
     "binary-phase-diagrams#crystal-growth"
    ]
   },
   {
    "ko": "존슨–나이퀴스트 잡음",
    "en": "Johnson–Nyquist noise",
    "abbr": "",
    "def": "저항 속 전하 운반자의 열운동이 만드는 잡음 전압 \\(\\langle v^2\\rangle = 4kTR\\,\\Delta f\\).",
    "chapters": [
     "heat-transport#fdt"
    ]
   },
   {
    "ko": "종횡비",
    "en": "aspect ratio",
    "abbr": "",
    "def": "트렌치·홀의 깊이를 폭(지름)으로 나눈 값 \\(\\mathrm{AR} = d/w\\).",
    "chapters": [
     "surfaces-thin-films#cvd"
    ]
   },
   {
    "ko": "주위",
    "en": "surroundings",
    "abbr": "",
    "def": "계를 제외한 나머지 부분. 계와 경계를 통해 에너지(열·일)나 물질을 주고받는다.",
    "chapters": [
     "equations-of-state#equilibrium"
    ]
   },
   {
    "ko": "준안정 상태",
    "en": "metastable state",
    "abbr": "",
    "def": "깁스 에너지가 가장 낮지는 않지만 작은 요동에 대해서는 되돌아오는 국소 최소 상태. 장벽을 넘는 핵생성이 일어날 때까지 유지된다.",
    "chapters": [
     "phase-transitions#metastable"
    ]
   },
   {
    "ko": "준정적 과정",
    "en": "quasi-static process",
    "abbr": "",
    "def": "계가 매 순간 평형 상태를 거치도록 아주 천천히 일어나는 과정. 이때 \\(P_\\mathrm{ext} = P\\)로 두어 \\(W = -\\int P\\,dV\\)를 쓴다.",
    "chapters": [
     "first-law#work-heat"
    ]
   },
   {
    "ko": "줄 가열",
    "en": "Joule heating",
    "abbr": "",
    "def": "전류가 저항을 지날 때 전기 에너지가 열로 바뀌는 것. 부피당 \\(\\dot q = j^2\\rho_e\\).",
    "chapters": [
     "heat-transport#cooling"
    ]
   },
   {
    "ko": "줄–톰슨 계수",
    "en": "Joule–Thomson coefficient",
    "abbr": "",
    "def": "등엔탈피 과정에서 압력에 따른 온도 변화율 \\(\\mu_\\mathrm{JT} = (\\partial T/\\partial P)_H\\). 저압 판데르발스 기체는 \\((2a/RT - b)/C_{P,\\mathrm m}\\)이다.",
    "chapters": [
     "first-law#joule-thomson"
    ]
   },
   {
    "ko": "증기압",
    "en": "vapor pressure",
    "abbr": "",
    "def": "닫힌 용기에서 응축상과 평형을 이룬 증기의 압력. \\(P_\\text{v} = P^\\circ e^{-\\Delta_\\text{vap}G^\\circ/RT}\\)이고 온도에 지수적으로 민감하며, 바깥 압력과 같아지면 끓는다.",
    "chapters": [
     "phase-transitions#clapeyron"
    ]
   },
   {
    "ko": "증착 수율",
    "en": "deposition yield",
    "abbr": "",
    "def": "넣은 원료 원자 가운데 평형에서 고체 막으로 남는 비율. 열역학이 정하는 증착의 상한이다.",
    "chapters": [
     "chemical-equilibrium#cvd"
    ]
   },
   {
    "ko": "지렛대 규칙",
    "en": "lever rule",
    "abbr": "",
    "def": "두 상 영역에서 전체 조성 \\(z\\)인 계의 두 상의 양의 비를 정하는 규칙 \\(n_\\beta/n_\\alpha = (z - x_\\alpha)/(x_\\beta - z)\\).",
    "chapters": [
     "solutions#distillation"
    ]
   },
   {
    "ko": "지지 전해질",
    "en": "supporting electrolyte",
    "abbr": "",
    "def": "전도도를 높여 전기장을 약하게 하고 반응 이온의 이동(migration)을 무시할 수 있게 하는 반응하지 않는 전해질.",
    "chapters": [
     "electrochemistry#transport"
    ]
   },
   {
    "ko": "질량 작용 법칙",
    "en": "law of mass action",
    "abbr": "",
    "def": "평형에서 생성물 농도의 곱을 반응물 농도의 곱으로 나눈 값(계수만큼 거듭제곱)이 온도에 따라 정해진 상수라는 경험 법칙.",
    "chapters": [
     "chemical-equilibrium#constants"
    ]
   },
   {
    "ko": "질서 변수",
    "en": "order parameter",
    "abbr": "",
    "def": "무질서한 상에서는 0이고 질서 상에서 0이 아닌 값을 갖는 양. 자화, 분극, 액체–기체 밀도 차, 합금의 장거리 질서도가 그 예다.",
    "chapters": [
     "phase-transitions#metastable"
    ]
   },
   {
    "ko": "집중 용량 모형",
    "en": "lumped capacitance model",
    "abbr": "",
    "def": "물체 내부 온도가 고르다고 보고 열용량 \\(C\\) 하나와 열저항 \\(R\\)로 온도 변화를 다루는 모형. 비오 수가 0.1보다 작을 때 맞다.",
    "chapters": [
     "heat-transport#heat-eq"
    ]
   },
   {
    "ko": "처리량",
    "en": "throughput",
    "abbr": "",
    "def": "어떤 단면을 지나는 기체의 양을 \\(PV\\) 단위로 나타낸 흐름 \\(Q = P\\,dV/dt\\) [Pa·m³/s]. 직렬 진공 계통의 모든 단면에서 같다.",
    "chapters": [
     "kinetic-theory-vacuum#pumping"
    ]
   },
   {
    "ko": "체류 시간",
    "en": "residence time",
    "abbr": "",
    "def": "흡착한 분자가 떨어지기까지 표면에 머무는 평균 시간 \\(\\tau = \\tau_0e^{q/RT}\\)(\\(\\tau_0\\approx10^{-13}\\) s).",
    "chapters": [
     "surfaces-thin-films#adsorption"
    ]
   },
   {
    "ko": "초과 깁스 에너지",
    "en": "excess Gibbs energy",
    "abbr": "",
    "def": "실제 혼합 깁스 에너지에서 이상 혼합분을 뺀 양 \\(G^\\mathrm{E} = RT\\sum x_i\\ln\\gamma_i\\). 정규 용액에서는 \\(\\Omega x_\\mathrm{A}x_\\mathrm{B}\\)다.",
    "chapters": [
     "solutions#activity"
    ]
   },
   {
    "ko": "초임계 유체",
    "en": "supercritical fluid",
    "abbr": "",
    "def": "임계 온도와 임계 압력보다 높은 상태의 유체. 밀도는 액체만큼 높을 수 있지만 액체–기체 경계면이 없다.",
    "chapters": [
     "equations-of-state#van-der-waals"
    ]
   },
   {
    "ko": "초정",
    "en": "primary phase",
    "abbr": "",
    "def": "아공정·과공정 합금이 공정 온도보다 먼저 액상선에서 정출하는 고체 상.",
    "chapters": [
     "binary-phase-diagrams#eutectic"
    ]
   },
   {
    "ko": "초크랄스키 성장",
    "en": "Czochralski growth",
    "abbr": "",
    "def": "도가니의 융액에 씨앗 결정을 담갔다가 회전시키며 끌어올려 단결정 잉곳을 키우는 방법. 대구경 실리콘 웨이퍼의 주된 제조법.",
    "chapters": [
     "binary-phase-diagrams#crystal-growth"
    ]
   },
   {
    "ko": "촉매",
    "en": "catalyst",
    "abbr": "",
    "def": "활성화 에너지가 낮은 다른 경로를 열어 반응을 빠르게 하지만 소모되지 않는 물질. 평형 상수는 바꾸지 않는다.",
    "chapters": [
     "kinetics#catalysis"
    ]
   },
   {
    "ko": "총괄성",
    "en": "colligative properties",
    "abbr": "",
    "def": "용질의 종류가 아니라 입자 수에만 달린 묽은 용액의 성질. 끓는점 오름, 어는점 내림, 삼투압, 증기압 내림이 있다.",
    "chapters": [
     "solutions#colligative"
    ]
   },
   {
    "ko": "최빈 속력",
    "en": "most probable speed",
    "abbr": "",
    "def": "속력 분포가 최대인 속력 \\(v_\\mathrm{mp} = \\sqrt{2kT/m}\\).",
    "chapters": [
     "kinetic-theory-vacuum#mb"
    ]
   },
   {
    "ko": "최소 엔트로피 생성 원리",
    "en": "minimum entropy production principle",
    "abbr": "",
    "def": "선형 영역에서 일부 힘을 고정한 정상 상태는 전체 엔트로피 생성률이 최소인 상태라는 프리고진의 원리.",
    "chapters": [
     "heat-transport#onsager"
    ]
   },
   {
    "ko": "축퇴",
    "en": "degenerate",
    "abbr": "",
    "def": "\\(n\\lambda^3 \\gg 1\\)이어서 양자 통계가 지배하는 상태. 축퇴 페르미 기체는 낮은 궤도부터 페르미 에너지까지 꽉 차 있다.",
    "chapters": [
     "quantum-statistics#fermi-gas"
    ]
   },
   {
    "ko": "축퇴압",
    "en": "degeneracy pressure",
    "abbr": "",
    "def": "파울리 배타 원리 때문에 절대 영도에서도 남는 페르미 기체의 압력 \\(P_0 = \\frac25 nE_\\mathrm F\\).",
    "chapters": [
     "quantum-statistics#fermi-gas"
    ]
   },
   {
    "ko": "충돌 단면적",
    "en": "collision cross section",
    "abbr": "",
    "def": "강체 구 분자가 충돌하는 유효 넓이 \\(\\sigma = \\pi d^2\\) (\\(d\\)는 분자 지름).",
    "chapters": [
     "kinetic-theory-vacuum#mfp"
    ]
   },
   {
    "ko": "충돌 이론",
    "en": "collision theory",
    "abbr": "",
    "def": "기체 분자의 충돌 빈도에 에너지 조건 \\(e^{-E_0/kT}\\)과 입체 인자를 곱해 속도 상수 \\(k = P\\sigma\\bar v_\\mathrm{rel}N_\\mathrm Ae^{-E_0/RT}\\)를 얻는 이론.",
    "chapters": [
     "kinetics#collision"
    ]
   },
   {
    "ko": "카르노 순환",
    "en": "Carnot cycle",
    "abbr": "",
    "def": "두 등온 과정과 두 가역 단열 과정으로 이루어진 가역 순환. TS 도표에서 직사각형이다.",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "카르노 정리",
    "en": "Carnot's theorem",
    "abbr": "",
    "def": "같은 두 열저장체 사이의 기관 가운데 가역 기관보다 효율이 높은 것은 없고, 모든 가역 기관의 효율은 같다는 정리.",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "카르노 효율",
    "en": "Carnot efficiency",
    "abbr": "",
    "def": "온도 \\(T_h\\)와 \\(T_c\\) 사이에서 도는 기관의 최대 효율 \\(\\eta_\\text{C} = 1 - T_c/T_h\\).",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "커즌–알본 효율",
    "en": "Curzon–Ahlborn efficiency",
    "abbr": "",
    "def": "양쪽 열전달이 유한한 내부 가역 기관이 최대 출력으로 돌 때의 효율 \\(1 - \\sqrt{T_c/T_h}\\).",
    "chapters": [
     "second-law#heat-engines"
    ]
   },
   {
    "ko": "컨덕턴스",
    "en": "conductance",
    "abbr": "",
    "def": "양 끝 압력 차당 처리량 \\(C = Q/(P_1-P_2)\\). 분자류에서 구멍은 \\(\\tfrac14\\bar vA\\), 긴 관은 \\(\\tfrac{\\pi}{12}\\bar vd^3/L\\)이다.",
    "chapters": [
     "kinetic-theory-vacuum#pumping"
    ]
   },
   {
    "ko": "켈빈 관계",
    "en": "Kelvin relations",
    "abbr": "",
    "def": "열전 계수 사이의 관계 \\(\\Pi = ST\\), \\(\\mu_T = T\\,dS/dT\\). 온사거 상반 관계로 정당화된다.",
    "chapters": [
     "heat-transport#thermoelectric"
    ]
   },
   {
    "ko": "켈빈–플랑크 서술",
    "en": "Kelvin–Planck statement",
    "abbr": "",
    "def": "한 열저장체에서 받은 열을 전부 일로 바꾸는 것 말고는 아무 효과도 남기지 않는 순환 과정은 없다는 제2법칙의 서술.",
    "chapters": [
     "second-law#spontaneity"
    ]
   },
   {
    "ko": "퀴리 법칙",
    "en": "Curie's law",
    "abbr": "",
    "def": "고온(\\(\\mu B\\ll kT\\))에서 상자성체의 자화가 온도에 반비례한다는 법칙 \\(M \\approx N\\mu^2B/kT\\).",
    "chapters": [
     "microstates#paramagnet"
    ]
   },
   {
    "ko": "크누센 수",
    "en": "Knudsen number",
    "abbr": "",
    "def": "평균 자유 행로와 장치의 특성 길이의 비 \\(\\mathrm{Kn} = \\lambda/L\\). 흐름이 점성류인지 분자류인지 가른다.",
    "chapters": [
     "kinetic-theory-vacuum#mfp"
    ]
   },
   {
    "ko": "크랭크–니콜슨 방법",
    "en": "Crank–Nicolson method",
    "abbr": "",
    "def": "현재와 다음 시간의 공간 차분을 반씩 평균하는 음해 차분법. 매 걸음 삼중 대각 연립 방정식을 풀며 무조건 안정하고 시간 2차 정확도를 갖는다.",
    "chapters": [
     "diffusion#budget"
    ]
   },
   {
    "ko": "클라우지우스 부등식",
    "en": "Clausius inequality",
    "abbr": "",
    "def": "모든 순환에서 \\(\\oint \\delta Q/T_b \\le 0\\)이고 가역 순환에서만 등호가 성립한다는 부등식.",
    "chapters": [
     "second-law#clausius"
    ]
   },
   {
    "ko": "클라우지우스 서술",
    "en": "Clausius statement",
    "abbr": "",
    "def": "낮은 온도에서 높은 온도로 열을 옮기는 것 말고는 아무 효과도 남기지 않는 순환 과정은 없다는 제2법칙의 서술. 켈빈–플랑크 서술과 동등하다.",
    "chapters": [
     "second-law#spontaneity"
    ]
   },
   {
    "ko": "클라우지우스–클라페이롱 식",
    "en": "Clausius–Clapeyron equation",
    "abbr": "",
    "def": "증기를 이상 기체로, 응축상 부피를 무시해 얻은 \\(d\\ln P/dT = \\Delta H_\\text{vap}/RT^2\\). \\(\\ln P\\)–\\(1/T\\) 그림의 기울기가 \\(-\\Delta H_\\text{vap}/R\\)이다.",
    "chapters": [
     "phase-transitions#clapeyron"
    ]
   },
   {
    "ko": "클라페이롱 식",
    "en": "Clapeyron equation",
    "abbr": "",
    "def": "공존 곡선의 기울기를 주는 정확한 식 \\(dP/dT = \\Delta H/(T\\Delta V)\\). 두 상의 \\(d\\mu = -S\\,dT + V\\,dP\\)가 같다는 조건에서 나온다.",
    "chapters": [
     "phase-transitions#clapeyron"
    ]
   },
   {
    "ko": "키르히호프 법칙",
    "en": "Kirchhoff's law",
    "abbr": "",
    "def": "반응 엔탈피의 온도 의존 \\(d\\Delta_\\mathrm rH^\\circ/dT = \\Delta_\\mathrm rC_P^\\circ\\). \\(\\Delta_\\mathrm rC_P^\\circ\\)가 일정하면 \\(\\Delta_\\mathrm rH^\\circ(T) \\approx \\Delta_\\mathrm rH^\\circ(298) + \\Delta_\\mathrm rC_P^\\circ\\Delta T\\).",
    "chapters": [
     "first-law#hess-kirchhoff"
    ]
   },
   {
    "ko": "키르히호프 복사 법칙",
    "en": "Kirchhoff's law of thermal radiation",
    "abbr": "",
    "def": "열평형에서 각 파장의 방사율이 흡수율과 같다는 법칙. 불투명한 물체에서는 \\(\\varepsilon = 1 - R\\)이다.",
    "chapters": [
     "quantum-statistics#blackbody"
    ]
   },
   {
    "ko": "타펠 식",
    "en": "Tafel equation",
    "abbr": "",
    "def": "큰 과전압에서 \\(|\\eta| = b\\log(|j|/j_0)\\), \\(b = 2.303RT/(\\alpha F)\\)로 과전압이 전류의 로그에 비례한다는 관계.",
    "chapters": [
     "electrochemistry#kinetics"
    ]
   },
   {
    "ko": "탈기체",
    "en": "outgassing",
    "abbr": "",
    "def": "챔버 벽·부품·웨이퍼 표면에 흡착되었거나 녹아 있던 기체(주로 물)가 진공 속으로 방출되는 것.",
    "chapters": [
     "kinetic-theory-vacuum#pumping"
    ]
   },
   {
    "ko": "톰슨 효과",
    "en": "Thomson effect",
    "abbr": "",
    "def": "온도 기울기가 있는 도체에 전류가 흐를 때 \\(\\mu_T I\\,dT/dx\\)의 열이 추가로 생기거나 흡수되는 현상.",
    "chapters": [
     "heat-transport#thermoelectric"
    ]
   },
   {
    "ko": "투열벽",
    "en": "diathermal wall",
    "abbr": "",
    "def": "움직이지 않고 물질도 막지만 열은 통과시키는 벽. 투열벽으로 맞댄 두 계는 결국 같은 온도가 된다.",
    "chapters": [
     "equations-of-state#equilibrium"
    ]
   },
   {
    "ko": "트루턴 규칙",
    "en": "Trouton's rule",
    "abbr": "",
    "def": "많은 비극성 액체의 정상 끓는점에서 증발 엔트로피 \\(\\Delta H_\\text{vap}/T_\\mathrm{b}\\)가 약 85–88 J/(mol·K)로 비슷하다는 경험 규칙. 수소 결합 액체는 더 크다.",
    "chapters": [
     "phase-transitions#clapeyron"
    ]
   },
   {
    "ko": "틈새 기구",
    "en": "interstitial mechanism",
    "abbr": "",
    "def": "원자가 격자 원자 사이의 틈새 자리를 따라 뛰는 확산 기구. 공공이 필요 없어 활성화 에너지가 작고 빠르다(Cu, Fe).",
    "chapters": [
     "diffusion#mechanisms"
    ]
   },
   {
    "ko": "틈새 짝 기구",
    "en": "interstitialcy mechanism",
    "abbr": "",
    "def": "자기 격자간 원자가 치환형 도펀트를 틈새로 밀어내 짝을 이루어 움직이는 확산 기구. 실리콘 속 붕소·인의 주된 기구다.",
    "chapters": [
     "diffusion#mechanisms"
    ]
   },
   {
    "ko": "파울리 배타 원리",
    "en": "Pauli exclusion principle",
    "abbr": "",
    "def": "같은 양자 상태에 동일한 페르미온 둘 이상이 들어갈 수 없다는 원리. 반대칭 파동 함수에서 나온다.",
    "chapters": [
     "quantum-statistics#identical"
    ]
   },
   {
    "ko": "판데르발스 상태 방정식",
    "en": "van der Waals equation of state",
    "abbr": "",
    "def": "분자의 배제 부피 \\(b\\)와 인력 \\(a\\)를 넣어 이상 기체 식을 고친 상태 방정식 \\((P + a/V_\\mathrm m^2)(V_\\mathrm m - b) = RT\\).",
    "chapters": [
     "equations-of-state#van-der-waals"
    ]
   },
   {
    "ko": "패러데이 법칙",
    "en": "Faraday's law of electrolysis",
    "abbr": "",
    "def": "전극에서 반응한 물질의 양이 통과한 전하에 비례한다는 법칙 \\(n = \\varepsilon Q/(nF)\\).",
    "chapters": [
     "electrochemistry#faraday"
    ]
   },
   {
    "ko": "패러데이 상수",
    "en": "Faraday constant",
    "abbr": "",
    "def": "전자 1 mol의 전하량 \\(F = N_\\mathrm Ae = 96\\,485\\) C/mol.",
    "chapters": [
     "electrochemistry#gibbs"
    ]
   },
   {
    "ko": "퍼짐 저항",
    "en": "spreading resistance",
    "abbr": "",
    "def": "작은 열원에서 열이 옆으로 퍼지는 데 드는 추가 열저항. 반무한 매질 위 원형 열원은 \\(1/4\\kappa a\\).",
    "chapters": [
     "heat-transport#resistance"
    ]
   },
   {
    "ko": "퍼텐셜 에너지 면",
    "en": "potential energy surface",
    "abbr": "",
    "def": "원자들의 배치에 따른 분자계의 퍼텐셜 에너지를 나타낸 다차원 곡면. 반응은 그 위의 골짜기 사이 이동이다.",
    "chapters": [
     "kinetics#tst"
    ]
   },
   {
    "ko": "페르미 에너지",
    "en": "Fermi energy",
    "abbr": "",
    "def": "절대 영도에서 페르미온이 채운 가장 높은 궤도의 에너지 \\(E_\\mathrm F = \\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}\\)(자유 전자).",
    "chapters": [
     "quantum-statistics#fermi-gas"
    ]
   },
   {
    "ko": "페르미 온도",
    "en": "Fermi temperature",
    "abbr": "",
    "def": "\\(T_\\mathrm F = E_\\mathrm F/k\\). 금속 전자는 \\(10^4\\)–\\(10^5\\) K라서 상온에서도 깊이 축퇴되어 있다.",
    "chapters": [
     "quantum-statistics#fermi-gas"
    ]
   },
   {
    "ko": "페르미–디랙 분포",
    "en": "Fermi–Dirac distribution",
    "abbr": "",
    "def": "페르미온 궤도의 평균 점유수 \\(1/(e^{(\\varepsilon-\\mu)/kT}+1)\\). 0과 1 사이이며 \\(\\varepsilon = \\mu\\)에서 1/2이다.",
    "chapters": [
     "quantum-statistics#distributions"
    ]
   },
   {
    "ko": "페르미온",
    "en": "fermion",
    "abbr": "",
    "def": "두 입자를 맞바꾸면 파동 함수의 부호가 바뀌는 반정수 스핀 입자. 한 상태에 하나만 들어가며 페르미–디랙 분포를 따른다(전자, ³He).",
    "chapters": [
     "quantum-statistics#identical"
    ]
   },
   {
    "ko": "펠티에 계수",
    "en": "Peltier coefficient",
    "abbr": "",
    "def": "전류가 함께 나르는 열의 양 \\(\\Pi\\)[V = J/C]. 켈빈 관계로 \\(\\Pi = ST\\).",
    "chapters": [
     "heat-transport#thermoelectric"
    ]
   },
   {
    "ko": "펠티에 효과",
    "en": "Peltier effect",
    "abbr": "",
    "def": "서로 다른 도체의 접점에 전류를 흘리면 줄 열과 별개로 \\(\\Pi I\\)의 열이 흡수·방출되는 현상.",
    "chapters": [
     "heat-transport#thermoelectric"
    ]
   },
   {
    "ko": "평균 속력",
    "en": "mean speed",
    "abbr": "",
    "def": "속력의 평균 \\(\\bar v = \\sqrt{8kT/\\pi m}\\). 벽 충돌 플럭스·평균 자유 행로·컨덕턴스 계산에 쓰인다.",
    "chapters": [
     "kinetic-theory-vacuum#mb"
    ]
   },
   {
    "ko": "평균 자유 행로",
    "en": "mean free path",
    "abbr": "",
    "def": "분자가 연속한 두 충돌 사이에 날아가는 평균 거리 \\(\\lambda = kT/(\\sqrt2\\pi d^2P)\\). 상온 공기에서 \\(\\lambda[\\mathrm{cm}]\\approx 5\\times10^{-3}/P[\\mathrm{Torr}]\\).",
    "chapters": [
     "kinetic-theory-vacuum#mfp"
    ]
   },
   {
    "ko": "평균장 이론",
    "en": "mean-field theory",
    "abbr": "",
    "def": "이웃 스핀을 평균 자화로 바꿔 요동을 무시하는 근사. 자체 일관 방정식 \\(m = \\tanh((zJm+h)/kT)\\)와 \\(kT_\\mathrm{c} = zJ\\)를 준다.",
    "chapters": [
     "phase-transitions#ising"
    ]
   },
   {
    "ko": "평형 산소 분압",
    "en": "equilibrium oxygen partial pressure",
    "abbr": "",
    "def": "금속과 그 산화물이 공존하는 산소 분압 \\(P_{\\mathrm{O_2,eq}} = \\exp(\\Delta_\\mathrm rG^\\circ/RT)\\). 이보다 높으면 산화, 낮으면 환원된다.",
    "chapters": [
     "chemical-equilibrium#ellingham"
    ]
   },
   {
    "ko": "평형 상수",
    "en": "equilibrium constant",
    "abbr": "",
    "def": "평형에서의 활동도 곱 \\(K = \\prod a_i^{\\nu_i}\\)으로, 표준 반응 깁스 에너지와 \\(\\Delta_\\mathrm rG^\\circ = -RT\\ln K\\)로 이어진 무차원 수다. 온도만의 함수다.",
    "chapters": [
     "chemical-equilibrium#extent"
    ]
   },
   {
    "ko": "평형 편석 계수",
    "en": "equilibrium segregation coefficient",
    "abbr": "",
    "def": "같은 온도에서 공존하는 고체와 액체의 용질 농도 비 \\(k_0 = C_S/C_L\\). \\(k_0 < 1\\)이면 고체가 용질을 밀어낸다.",
    "chapters": [
     "binary-phase-diagrams#segregation"
    ]
   },
   {
    "ko": "포논",
    "en": "phonon",
    "abbr": "",
    "def": "격자 진동 모드의 에너지 양자 \\(\\hbar\\omega\\). 수가 보존되지 않는 보손으로 \\(\\mu = 0\\)이다.",
    "chapters": [
     "quantum-statistics#bose-gas"
    ]
   },
   {
    "ko": "포물선 속도 상수",
    "en": "parabolic rate constant",
    "abbr": "",
    "def": "딜–그로브 식의 \\(B = 2DC^*/N_1\\). 두꺼운 산화막에서 \\(x^2\\approx Bt\\)로 성장을 정하며 산화제의 산화막 속 확산을 반영한다.",
    "chapters": [
     "diffusion#oxidation"
    ]
   },
   {
    "ko": "포정 반응",
    "en": "peritectic reaction",
    "abbr": "",
    "def": "식힐 때 액체와 한 고체가 반응해 새 고체를 만드는 반응 \\(\\mathrm{L} + \\alpha \\to \\beta\\).",
    "chapters": [
     "binary-phase-diagrams#eutectic"
    ]
   },
   {
    "ko": "표면 반응 지배",
    "en": "surface-reaction-limited",
    "abbr": "",
    "def": "\\(k_s\\ll h_g\\)여서 CVD 성장 속도가 표면 반응 속도 \\(k_sC_g/N\\)로 정해지는 저온 영역. 아레니우스형으로 온도에 민감하다.",
    "chapters": [
     "surfaces-thin-films#cvd"
    ]
   },
   {
    "ko": "표면 에너지",
    "en": "surface energy",
    "abbr": "",
    "def": "온도·압력·물질량을 고정하고 표면 넓이를 늘릴 때 단위 넓이당 드는 가역 일 \\(\\gamma = (\\partial G/\\partial A)_{T,P,n}\\). 단위 J/m².",
    "chapters": [
     "surfaces-thin-films#surface-energy"
    ]
   },
   {
    "ko": "표면 장력",
    "en": "surface tension",
    "abbr": "",
    "def": "표면에 놓인 선이 받는 단위 길이당 힘[N/m]. 액체에서는 표면 에너지와 같다.",
    "chapters": [
     "surfaces-thin-films#surface-energy"
    ]
   },
   {
    "ko": "표준 상태",
    "en": "standard state",
    "abbr": "",
    "def": "압력 \\(P^\\circ = 1\\) bar의 순물질 상태. 원소의 가장 안정한 형태(기준 상태)는 표준 생성 엔탈피를 0으로 둔다.",
    "chapters": [
     "first-law#hess-kirchhoff"
    ]
   },
   {
    "ko": "표준 생성 엔탈피",
    "en": "standard enthalpy of formation",
    "abbr": "",
    "def": "화합물 1 mol을 기준 상태의 원소들로부터 표준 상태에서 만드는 반응의 엔탈피 \\(\\Delta_\\mathrm fH^\\circ\\). \\(\\Delta_\\mathrm rH^\\circ = \\sum\\nu\\Delta_\\mathrm fH^\\circ\\)로 쓴다.",
    "chapters": [
     "first-law#hess-kirchhoff"
    ]
   },
   {
    "ko": "표준 수소 전극",
    "en": "standard hydrogen electrode, SHE",
    "abbr": "",
    "def": "\\(a_{\\mathrm H^+}=1\\), \\(P_{\\mathrm H_2}=1\\) bar의 백금흑 수소 전극. 전극 전위의 기준(0 V)이다.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "표준 환원 전위",
    "en": "standard reduction potential",
    "abbr": "",
    "def": "표준 상태의 반쪽 반응을 SHE에 대해 잰 환원 방향의 전위 \\(E^\\circ\\). 클수록 환원되기 쉽다.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "푸르베 도표",
    "en": "Pourbaix diagram",
    "abbr": "",
    "def": "전위와 pH의 각 점에서 열역학적으로 가장 안정한 화학종을 나타낸 평형 지도. 면역·부식·부동태 영역을 보여 준다.",
    "chapters": [
     "electrochemistry#corrosion"
    ]
   },
   {
    "ko": "푸리에 법칙",
    "en": "Fourier's law",
    "abbr": "",
    "def": "열류 밀도가 온도 기울기에 비례하고 기울기를 내려가는 방향으로 흐른다는 법칙 \\(\\mathbf q = -\\kappa\\nabla T\\).",
    "chapters": [
     "heat-transport#fourier"
    ]
   },
   {
    "ko": "프랑크–판데르메르베 성장",
    "en": "Frank–van der Merwe growth",
    "abbr": "",
    "def": "막이 기판을 적셔 한 층씩 차례로 덮는 층 성장 모드(\\(\\gamma_s\\ge\\gamma_f+\\gamma_i\\)).",
    "chapters": [
     "surfaces-thin-films#nucleation"
    ]
   },
   {
    "ko": "플랑크 법칙",
    "en": "Planck's law",
    "abbr": "",
    "def": "흑체 복사의 분광 분포 \\(B_\\lambda = \\frac{2hc^2}{\\lambda^5}\\frac{1}{e^{hc/\\lambda kT}-1}\\). 광자 모드마다 \\(\\mu = 0\\)인 보스–아인슈타인 분포를 적용해 얻는다.",
    "chapters": [
     "quantum-statistics#blackbody"
    ]
   },
   {
    "ko": "피라니 게이지",
    "en": "Pirani gauge",
    "abbr": "",
    "def": "가열한 가는 선이 기체 열전도로 잃는 열을 재는 게이지. 약 \\(10^{-3}\\)–10 Torr에서 쓰며 기체 종류에 따라 읽는 값이 다르다.",
    "chapters": [
     "kinetic-theory-vacuum#gauges"
    ]
   },
   {
    "ko": "피복률",
    "en": "fractional coverage",
    "abbr": "",
    "def": "표면 흡착 자리 가운데 차 있는 비율 \\(\\theta\\)(0–1).",
    "chapters": [
     "surfaces-thin-films#adsorption"
    ]
   },
   {
    "ko": "픽 제1법칙",
    "en": "Fick's first law",
    "abbr": "",
    "def": "확산 플럭스가 농도 기울기에 비례하고 농도가 낮은 쪽으로 흐른다는 법칙 \\(J = -D\\,\\partial C/\\partial x\\).",
    "chapters": [
     "diffusion#fick"
    ]
   },
   {
    "ko": "픽 제2법칙",
    "en": "Fick's second law",
    "abbr": "",
    "def": "연속 방정식에 제1법칙을 넣은 확산 방정식 \\(\\partial C/\\partial t = D\\,\\partial^2C/\\partial x^2\\). 농도 변화 속도는 곡률에 비례한다.",
    "chapters": [
     "diffusion#fick"
    ]
   },
   {
    "ko": "핀 효율",
    "en": "fin efficiency",
    "abbr": "",
    "def": "핀이 실제로 버리는 열과 핀 전체가 뿌리 온도일 때의 열의 비 \\(\\eta_f = \\tanh mH/mH\\).",
    "chapters": [
     "heat-transport#cooling"
    ]
   },
   {
    "ko": "한계 전류 밀도",
    "en": "limiting current density",
    "abbr": "",
    "def": "표면 농도가 0이 되어 물질 전달이 허용하는 최대 전류 밀도 \\(j_L = nFDc^*/\\delta\\).",
    "chapters": [
     "electrochemistry#transport"
    ]
   },
   {
    "ko": "해리 흡착",
    "en": "dissociative adsorption",
    "abbr": "",
    "def": "분자가 쪼개져 자리 두 개를 차지하는 흡착. 랭뮤어 식이 \\(\\theta = \\sqrt{KP}/(1+\\sqrt{KP})\\)가 된다.",
    "chapters": [
     "surfaces-thin-films#langmuir"
    ]
   },
   {
    "ko": "핵생성",
    "en": "nucleation",
    "abbr": "",
    "def": "준안정한 상 속에서 새 상의 작은 덩어리(핵)가 처음 생기는 과정. 표면 에너지 때문에 장벽이 있다.",
    "chapters": [
     "surfaces-thin-films#nucleation"
    ]
   },
   {
    "ko": "헤르츠–크누센 식",
    "en": "Hertz–Knudsen equation",
    "abbr": "",
    "def": "벽 충돌 플럭스 \\(\\Phi = P/\\sqrt{2\\pi mkT}\\)를 증발·흡착 속도에 쓴 식. 흡착 속도는 \\(s\\,P/\\sqrt{2\\pi mkT}\\).",
    "chapters": [
     "surfaces-thin-films#adsorption"
    ]
   },
   {
    "ko": "헤스 법칙",
    "en": "Hess's law",
    "abbr": "",
    "def": "엔탈피가 상태 함수이므로 전체 반응의 \\(\\Delta_\\mathrm rH\\)는 중간 단계 반응들의 \\(\\Delta_\\mathrm rH\\) 합과 같다는 법칙.",
    "chapters": [
     "first-law#hess-kirchhoff"
    ]
   },
   {
    "ko": "헨리 법칙",
    "en": "Henry's law",
    "abbr": "",
    "def": "묽은 용액에서 용질의 증기 분압이 몰분율에 비례한다는 법칙 \\(P_\\mathrm{B} = K_\\mathrm{B}x_\\mathrm{B}\\). 기체 용해도 \\(c = k_\\mathrm{H}P\\)로도 쓴다.",
    "chapters": [
     "solutions#raoult-henry"
    ]
   },
   {
    "ko": "헨리 상수",
    "en": "Henry's law constant",
    "abbr": "",
    "def": "헨리 법칙의 비례 상수 \\(K_\\mathrm{B}\\)(압력 단위) 또는 \\(k_\\mathrm{H}\\)[mol/(L·atm)]. 용질과 용매의 조합과 온도에 따라 정해진다.",
    "chapters": [
     "solutions#raoult-henry"
    ]
   },
   {
    "ko": "헬름홀츠 자유 에너지",
    "en": "Helmholtz free energy",
    "abbr": "",
    "def": "\\(F = U - TS\\). 온도와 부피가 일정할 때 저절로 일어나는 변화에서 줄어들고 평형에서 최소가 되며, 등온 과정에서 꺼낼 수 있는 최대 일이 \\(-\\Delta F\\)다.",
    "chapters": [
     "free-energy#free-energy"
    ]
   },
   {
    "ko": "혼성 전위",
    "en": "mixed potential",
    "abbr": "",
    "def": "같은 표면에서 일어나는 산화 전류와 환원 전류의 합이 0이 되는 전위. 부식과 무전해 도금의 작동 전위다.",
    "chapters": [
     "electrochemistry#corrosion"
    ]
   },
   {
    "ko": "혼합 깁스 에너지",
    "en": "Gibbs energy of mixing",
    "abbr": "",
    "def": "순수 성분들을 섞을 때의 깁스 에너지 변화 \\(\\Delta G_\\text{mix} = \\sum n_i(\\mu_i - \\mu_i^*)\\). 이상 혼합이면 \\(nRT\\sum x_i\\ln x_i\\)로 늘 음수다.",
    "chapters": [
     "solutions#mixing"
    ]
   },
   {
    "ko": "혼합 엔트로피",
    "en": "entropy of mixing",
    "abbr": "",
    "def": "같은 온도·압력의 서로 다른 이상 기체(또는 이상 용액)가 섞일 때의 엔트로피 증가 \\(\\Delta_\\text{mix}S = -nR\\sum_i x_i\\ln x_i\\).",
    "chapters": [
     "second-law#mixing-third-law"
    ]
   },
   {
    "ko": "혼화성 간극",
    "en": "miscibility gap",
    "abbr": "",
    "def": "두 성분이 한 상으로 섞이지 못하고 두 상으로 갈라지는 조성·온도 영역. 쌍봉 곡선으로 둘러싸인다.",
    "chapters": [
     "solutions#regular-solution"
    ]
   },
   {
    "ko": "화학 퍼텐셜",
    "en": "chemical potential",
    "abbr": "",
    "def": "다른 조건을 그대로 두고 성분 1 mol(또는 입자 하나)을 더할 때 늘어나는 깁스 에너지 \\(\\mu_i = (\\partial G/\\partial n_i)_{T,P}\\). 순물질에서는 몰당 깁스 에너지와 같고, 물질은 \\(\\mu\\)가 높은 곳에서 낮은 곳으로 이동한다.",
    "chapters": [
     "free-energy#chemical-potential"
    ]
   },
   {
    "ko": "화학 흡착",
    "en": "chemisorption",
    "abbr": "",
    "def": "표면 원자와 화학 결합을 만드는 흡착. 흡착열이 수십~수백 kJ/mol이고 한 층에서 멈추며, 활성화 장벽이 있을 수 있다.",
    "chapters": [
     "surfaces-thin-films#adsorption"
    ]
   },
   {
    "ko": "확산 경계층",
    "en": "diffusion boundary layer",
    "abbr": "",
    "def": "결정 성장 계면 앞의 정체된 액체 층. 밀려난 용질이 확산으로만 빠져나가 계면 농도를 높인다.",
    "chapters": [
     "binary-phase-diagrams#segregation"
    ]
   },
   {
    "ko": "확산 계수",
    "en": "diffusion coefficient",
    "abbr": "",
    "def": "무작위 운동으로 퍼지는 빠르기를 나타내는 양 \\(D\\). 한 방향으로 \\(\\langle x^2\\rangle = 2Dt\\)이며 단위는 cm²/s이다.",
    "chapters": [
     "diffusion#walk"
    ]
   },
   {
    "ko": "확산 길이",
    "en": "diffusion length",
    "abbr": "",
    "def": "시간 \\(t\\) 동안 원자가 퍼지는 대표 거리 \\(\\sqrt{Dt}\\). 공정에서는 흔히 \\(2\\sqrt{Dt}\\)를 퍼짐 깊이로 쓴다.",
    "chapters": [
     "diffusion#walk"
    ]
   },
   {
    "ko": "확산 플럭스",
    "en": "diffusion flux",
    "abbr": "",
    "def": "단위 시간에 단위 넓이를 지나가는 확산 원자 수 \\(J\\)[cm⁻²s⁻¹].",
    "chapters": [
     "diffusion#fick"
    ]
   },
   {
    "ko": "확산층",
    "en": "diffusion layer",
    "abbr": "",
    "def": "전극 앞에서 교반이 닿지 않아 확산만으로 물질이 운반되는 얇은 층(두께 \\(\\delta\\)). 그 안에서 농도가 거의 직선으로 변한다.",
    "chapters": [
     "electrochemistry#transport"
    ]
   },
   {
    "ko": "환산 변수",
    "en": "reduced variables",
    "abbr": "",
    "def": "상태 변수를 임계 상수로 나눈 무차원 양 \\(T_\\mathrm r = T/T_\\mathrm c\\), \\(P_\\mathrm r = P/P_\\mathrm c\\), \\(V_\\mathrm r = V/V_\\mathrm c\\).",
    "chapters": [
     "equations-of-state#corresponding-states"
    ]
   },
   {
    "ko": "환원",
    "en": "reduction",
    "abbr": "",
    "def": "화학종이 전자를 얻는 반응. 산화수가 감소한다.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "환원 전극",
    "en": "cathode",
    "abbr": "",
    "def": "환원 반응이 일어나는 전극. 도금조에서 금속이 석출되는 웨이퍼 쪽이다.",
    "chapters": [
     "electrochemistry#cells"
    ]
   },
   {
    "ko": "활동도",
    "en": "activity",
    "abbr": "",
    "def": "실제 용액에서 화학 퍼텐셜을 \\(\\mu_i = \\mu_i^\\circ + RT\\ln a_i\\)로 쓰게 하는 유효 농도. 기준 상태에 따라 값이 달라진다.",
    "chapters": [
     "solutions#activity"
    ]
   },
   {
    "ko": "활동도 계수",
    "en": "activity coefficient",
    "abbr": "",
    "def": "활동도와 몰분율의 비 \\(\\gamma_i = a_i/x_i\\). 이상 거동에서 벗어난 정도를 나타내며, 라울 기준은 \\(x_i\\to1\\), 헨리 기준은 \\(x_i\\to0\\)에서 1이다.",
    "chapters": [
     "solutions#activity"
    ]
   },
   {
    "ko": "활성화 에너지",
    "en": "activation energy",
    "abbr": "",
    "def": "과정이 일어나려면 넘어야 하는 에너지 장벽 \\(E_a\\). 장벽을 넘는 비율 \\(e^{-E_a/kT}\\) 때문에 속도가 온도에 지수적으로 의존한다.",
    "chapters": [
     "boltzmann#defects"
    ]
   },
   {
    "ko": "활성화 착물",
    "en": "activated complex",
    "abbr": "",
    "def": "전이 상태 근처의 원자 배치 \\(\\mathrm{AB}^\\ddagger\\). 전이 상태 이론에서 반응물과 준평형을 이룬다고 본다.",
    "chapters": [
     "kinetics#tst"
    ]
   },
   {
    "ko": "회전 온도",
    "en": "rotational temperature",
    "abbr": "",
    "def": "회전 준위의 에너지 눈금을 온도로 나타낸 \\(\\theta_\\mathrm{rot} = \\hbar^2/2Ik\\). \\(T\\gg\\theta_\\mathrm{rot}\\)이면 회전이 고전적으로 행동한다.",
    "chapters": [
     "boltzmann#rotor"
    ]
   },
   {
    "ko": "회전–진동 스펙트럼",
    "en": "rovibrational spectrum",
    "abbr": "",
    "def": "진동 양자수와 회전 양자수가 함께 바뀌는 전이로 생기는 적외선 흡수 띠. 선의 세기가 회전 준위의 볼츠만 점유를 따른다.",
    "chapters": [
     "boltzmann#spectroscopy"
    ]
   },
   {
    "ko": "흡열 반응",
    "en": "endothermic reaction",
    "abbr": "",
    "def": "\\(\\Delta_\\mathrm rH > 0\\)으로 일정 압력에서 주위의 열을 빨아들이는 반응.",
    "chapters": [
     "first-law#enthalpy"
    ]
   },
   {
    "ko": "흡착",
    "en": "adsorption",
    "abbr": "",
    "def": "기체나 용질 분자가 고체 표면에 붙어 표면 농도가 높아지는 현상. 붙는 힘에 따라 물리 흡착과 화학 흡착으로 나눈다.",
    "chapters": [
     "surfaces-thin-films#adsorption"
    ]
   },
   {
    "ko": "흡착 등온선",
    "en": "adsorption isotherm",
    "abbr": "",
    "def": "일정 온도에서 기체 압력과 흡착량(피복률)의 관계.",
    "chapters": [
     "surfaces-thin-films#langmuir"
    ]
   }
  ]
 }
});
