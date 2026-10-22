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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     "slug": "thermo-data",
     "num": "A",
     "title": "열역학 자료와 계산기",
     "en": "Thermodynamic Data and Calculators",
     "desc": "물리 상수, 표준 생성 엔탈피·표준 엔트로피·열용량 표, 증기압과 판데르발스 상수, 확산 계수와 열전도도를 표와 계산기로 찾고, 자주 쓰는 공식을 한곳에 모았다.",
     "tags": [
      "부록",
      "자료표"
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
   "tangles": 6,
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
  }
 },
 "published": 7,
 "total": 19,
 "url": "https://science.euiyun.com/thermal-physics/"
});
