/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "general-chemistry",
 "title": "일반화학",
 "en": "General Chemistry",
 "field": "chemistry",
 "level": "대학 1학년 · 일반화학 I·II",
 "status": "published",
 "description": "원자와 몰에서 출발해 결합·분자 구조, 기체와 용액, 열역학, 속도론, 평형, 산·염기, 전기화학, 핵화학까지 — 대학 1학년 일반화학 전 과정을 수식과 시뮬레이터로 직접 실험하며 익히는 인터랙티브 교과서.",
 "lead": "화학은 ‘보이지 않는 입자의 수를 세고, 그 입자들이 에너지를 주고받는 방식’을 다루는 학문이다. 이 책은 표준 대학 일반화학 강의(일반화학 I·II, 약 30주)의 범위를 그대로 따르되, 모든 핵심 개념을 손으로 움직여 볼 수 있는 시뮬레이터와 자동 채점 연습문제로 바꾸었다.",
 "accent": {
  "light": "#0a7f6f",
  "dark": "#2fd1b5",
  "light2": "#7a4ce0",
  "dark2": "#a585ff"
 },
 "audience": "이공계 대학 1학년. 고등학교 화학 I 수준과 기초 대수·로그를 가정한다. 미적분은 속도론·열역학의 심화 상자에서만 쓴다.",
 "parts": [
  {
   "title": "제1부 물질·원자·화학량론",
   "semester": 1,
   "chapters": [
    {
     "slug": "matter-measurement",
     "num": "01",
     "title": "물질과 측정",
     "en": "Matter and Measurement",
     "desc": "물질의 분류와 상태, SI 단위, 유효숫자, 차원 분석, 밀도·정확도와 정밀도.",
     "tags": [
      "기초",
      "측정"
     ]
    },
    {
     "slug": "atoms-molecules-ions",
     "num": "02",
     "title": "원자, 분자, 이온",
     "en": "Atoms, Molecules, and Ions",
     "desc": "원자설과 원자 구조 실험, 동위원소와 평균 원자량, 주기율표 개관, 이온과 화합물 명명법.",
     "tags": [
      "원자",
      "명명법"
     ]
    },
    {
     "slug": "stoichiometry",
     "num": "03",
     "title": "화학량론",
     "en": "Stoichiometry",
     "desc": "몰과 몰 질량, 실험식·분자식, 반응식 균형, 한계 반응물, 이론·퍼센트 수득률.",
     "tags": [
      "몰",
      "반응식"
     ]
    },
    {
     "slug": "aqueous-reactions",
     "num": "04",
     "title": "수용액 반응",
     "en": "Reactions in Aqueous Solution",
     "desc": "전해질과 몰농도, 침전·산염기·산화환원 반응, 알짜 이온 반응식, 적정.",
     "tags": [
      "용액",
      "산화환원"
     ]
    }
   ]
  },
  {
   "title": "제2부 에너지와 기체",
   "semester": 1,
   "chapters": [
    {
     "slug": "gases",
     "num": "05",
     "title": "기체",
     "en": "Gases",
     "desc": "압력, 보일·샤를·아보가드로 법칙, 이상 기체 방정식, 분압, 분자 운동론, 맥스웰–볼츠만 분포, 실제 기체.",
     "tags": [
      "기체",
      "분자 운동론"
     ]
    },
    {
     "slug": "thermochemistry",
     "num": "06",
     "title": "열화학",
     "en": "Thermochemistry",
     "desc": "에너지와 일, 내부 에너지, 엔탈피, 열량 측정, 헤스 법칙, 표준 생성 엔탈피.",
     "tags": [
      "에너지",
      "엔탈피"
     ]
    }
   ]
  },
  {
   "title": "제3부 원자 구조와 화학 결합",
   "semester": 1,
   "chapters": [
    {
     "slug": "quantum-atom",
     "num": "07",
     "title": "원자의 전자 구조",
     "en": "Electronic Structure of Atoms",
     "desc": "빛과 광자, 수소 스펙트럼과 보어 모형, 드브로이 파와 불확정성, 양자수와 오비탈, 전자 배치.",
     "tags": [
      "양자",
      "오비탈"
     ]
    },
    {
     "slug": "periodic-properties",
     "num": "08",
     "title": "원소의 주기적 성질",
     "en": "Periodic Properties of the Elements",
     "desc": "유효 핵전하, 원자·이온 반지름, 이온화 에너지, 전자 친화도, 금속성, 족별 경향.",
     "tags": [
      "주기율",
      "경향"
     ]
    },
    {
     "slug": "chemical-bonding",
     "num": "09",
     "title": "화학 결합의 기초",
     "en": "Basic Concepts of Chemical Bonding",
     "desc": "이온 결합과 격자 에너지, 공유 결합, 전기음성도와 극성, 루이스 구조, 형식 전하, 공명, 결합 엔탈피.",
     "tags": [
      "결합",
      "루이스"
     ]
    },
    {
     "slug": "molecular-geometry",
     "num": "10",
     "title": "분자 구조와 결합 이론",
     "en": "Molecular Geometry and Bonding Theories",
     "desc": "VSEPR 모형, 쌍극자 모멘트, 원자가 결합 이론과 혼성 오비탈, σ·π 결합, 분자 오비탈 이론.",
     "tags": [
      "VSEPR",
      "혼성",
      "3D"
     ]
    }
   ]
  },
  {
   "title": "제4부 물질의 상태와 용액",
   "semester": 2,
   "chapters": [
    {
     "slug": "liquids-solids",
     "num": "11",
     "title": "분자 간 힘, 액체와 고체",
     "en": "Intermolecular Forces, Liquids, and Solids",
     "desc": "분산력·쌍극자·수소 결합, 점성과 표면 장력, 증기압과 클라우지우스–클레이페롱 식, 상평형 그림, 결정 구조.",
     "tags": [
      "분자 간 힘",
      "상평형"
     ]
    },
    {
     "slug": "solutions",
     "num": "12",
     "title": "용액의 성질",
     "en": "Properties of Solutions",
     "desc": "용해 과정, 헨리 법칙, 농도 단위, 라울 법칙, 끓는점 오름·어는점 내림·삼투압, 반트호프 인자.",
     "tags": [
      "용액",
      "총괄성"
     ]
    }
   ]
  },
  {
   "title": "제5부 반응 속도와 평형",
   "semester": 2,
   "chapters": [
    {
     "slug": "kinetics",
     "num": "13",
     "title": "화학 반응 속도론",
     "en": "Chemical Kinetics",
     "desc": "반응 속도와 속도 법칙, 적분 속도식과 반감기, 충돌 이론, 아레니우스 식, 반응 메커니즘, 촉매.",
     "tags": [
      "속도론",
      "활성화 에너지"
     ]
    },
    {
     "slug": "equilibrium",
     "num": "14",
     "title": "화학 평형",
     "en": "Chemical Equilibrium",
     "desc": "동적 평형, 평형 상수 Kc·Kp, 반응 지수 Q, ICE 표, 르샤틀리에 원리.",
     "tags": [
      "평형",
      "르샤틀리에"
     ]
    },
    {
     "slug": "acids-bases",
     "num": "15",
     "title": "산과 염기",
     "en": "Acids and Bases",
     "desc": "브뢴스테드–로우리·루이스 산염기, 물의 자동 이온화와 pH, Ka·Kb, 다양성자산, 염의 산염기성, 구조와 산 세기.",
     "tags": [
      "산염기",
      "pH"
     ]
    },
    {
     "slug": "aqueous-equilibria",
     "num": "16",
     "title": "수용액 평형",
     "en": "Additional Aspects of Aqueous Equilibria",
     "desc": "공통 이온 효과, 완충 용액과 헨더슨–하셀바흐 식, 적정 곡선과 지시약, 용해도곱 Ksp, 착이온.",
     "tags": [
      "완충",
      "적정",
      "Ksp"
     ]
    }
   ]
  },
  {
   "title": "제6부 열역학·전기화학·핵화학",
   "semester": 2,
   "chapters": [
    {
     "slug": "thermodynamics",
     "num": "17",
     "title": "화학 열역학",
     "en": "Chemical Thermodynamics",
     "desc": "자발성과 엔트로피, 볼츠만 식, 열역학 제2·3법칙, 깁스 자유 에너지, ΔG°와 K의 관계.",
     "tags": [
      "엔트로피",
      "깁스 에너지"
     ]
    },
    {
     "slug": "electrochemistry",
     "num": "18",
     "title": "전기화학",
     "en": "Electrochemistry",
     "desc": "산화수와 반쪽 반응, 갈바니 전지, 표준 환원 전위, ΔG°=−nFE°, 네른스트 식, 전지·부식·전기분해.",
     "tags": [
      "전지",
      "네른스트"
     ]
    },
    {
     "slug": "nuclear-chemistry",
     "num": "19",
     "title": "핵화학",
     "en": "Nuclear Chemistry",
     "desc": "방사성 붕괴의 종류, 핵 안정성의 띠, 붕괴 속도와 연대 측정, 질량 결손과 결합 에너지, 핵분열·핵융합.",
     "tags": [
      "방사능",
      "핵"
     ]
    },
    {
     "slug": "coordination-chemistry",
     "num": "20",
     "title": "전이 금속과 배위 화학",
     "en": "Transition Metals and Coordination Chemistry",
     "desc": "전이 금속의 성질, 착물과 리간드, 배위수와 이성질체, 결정장 이론, 착물의 색과 자기성.",
     "tags": [
      "착물",
      "결정장"
     ]
    }
   ]
  },
  {
   "title": "부록",
   "appendix": true,
   "chapters": [
    {
     "slug": "periodic-table",
     "num": "A",
     "title": "대화형 주기율표",
     "en": "Interactive Periodic Table",
     "desc": "118개 원소의 원자량·전자 배치·전기음성도·이온화 에너지·반지름을 색 지도로 비교한다.",
     "tags": [
      "부록",
      "데이터"
     ]
    },
    {
     "slug": "data-tables",
     "num": "B",
     "title": "상수와 열역학 자료",
     "en": "Constants and Data Tables",
     "desc": "기본 상수, 단위 환산, 표준 생성 엔탈피·엔트로피·깁스 에너지, Ka·Kb·Ksp, 표준 환원 전위.",
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
  "matter-measurement": {
   "problems": 19,
   "examples": 8,
   "sims": 4,
   "figures": 12,
   "drills": 2,
   "minis": 5,
   "tangles": 3,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "atoms-molecules-ions": {
   "problems": 19,
   "examples": 7,
   "sims": 5,
   "figures": 14,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "stoichiometry": {
   "problems": 16,
   "examples": 9,
   "sims": 4,
   "figures": 10,
   "drills": 2,
   "minis": 4,
   "tangles": 3,
   "steps": 2,
   "predicts": 2,
   "hero": 1
  },
  "aqueous-reactions": {
   "problems": 17,
   "examples": 9,
   "sims": 5,
   "figures": 11,
   "drills": 2,
   "minis": 3,
   "tangles": 2,
   "steps": 2,
   "predicts": 2,
   "hero": 1
  },
  "gases": {
   "problems": 17,
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
  "thermochemistry": {
   "problems": 19,
   "examples": 8,
   "sims": 5,
   "figures": 11,
   "drills": 2,
   "minis": 3,
   "tangles": 5,
   "steps": 4,
   "predicts": 3,
   "hero": 1
  },
  "quantum-atom": {
   "problems": 16,
   "examples": 10,
   "sims": 6,
   "figures": 11,
   "drills": 2,
   "minis": 5,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "periodic-properties": {
   "problems": 16,
   "examples": 7,
   "sims": 7,
   "figures": 11,
   "drills": 2,
   "minis": 5,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "chemical-bonding": {
   "problems": 19,
   "examples": 8,
   "sims": 7,
   "figures": 11,
   "drills": 2,
   "minis": 4,
   "tangles": 2,
   "steps": 5,
   "predicts": 4,
   "hero": 1
  },
  "molecular-geometry": {
   "problems": 19,
   "examples": 7,
   "sims": 7,
   "figures": 10,
   "drills": 2,
   "minis": 3,
   "tangles": 2,
   "steps": 2,
   "predicts": 5,
   "hero": 1
  },
  "liquids-solids": {
   "problems": 17,
   "examples": 7,
   "sims": 6,
   "figures": 12,
   "drills": 2,
   "minis": 4,
   "tangles": 4,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "solutions": {
   "problems": 18,
   "examples": 8,
   "sims": 7,
   "figures": 12,
   "drills": 2,
   "minis": 6,
   "tangles": 4,
   "steps": 2,
   "predicts": 5,
   "hero": 1
  },
  "kinetics": {
   "problems": 15,
   "examples": 7,
   "sims": 4,
   "figures": 4,
   "drills": 2,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "equilibrium": {
   "problems": 14,
   "examples": 8,
   "sims": 4,
   "figures": 4,
   "drills": 2,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "acids-bases": {
   "problems": 14,
   "examples": 8,
   "sims": 4,
   "figures": 4,
   "drills": 2,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "aqueous-equilibria": {
   "problems": 15,
   "examples": 8,
   "sims": 3,
   "figures": 3,
   "drills": 2,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "thermodynamics": {
   "problems": 13,
   "examples": 9,
   "sims": 4,
   "figures": 4,
   "drills": 1,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "electrochemistry": {
   "problems": 14,
   "examples": 8,
   "sims": 4,
   "figures": 6,
   "drills": 2,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "nuclear-chemistry": {
   "problems": 14,
   "examples": 9,
   "sims": 4,
   "figures": 4,
   "drills": 2,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "coordination-chemistry": {
   "problems": 15,
   "examples": 8,
   "sims": 3,
   "figures": 4,
   "drills": 2,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "periodic-table": {
   "problems": 0,
   "examples": 0,
   "sims": 1,
   "figures": 0,
   "drills": 0,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "data-tables": {
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
 "published": 23,
 "total": 23,
 "url": "https://science.euiyun.com/general-chemistry/",
 "glossary": {
  "version": 1,
  "terms": [
   {
    "ko": "ICE 표",
    "en": "",
    "abbr": "",
    "def": "처음 농도와 K를 알 때 평형 농도를 구하는 표준 방법은 ICE 표다.",
    "chapters": [
     "equilibrium#ice"
    ]
   },
   {
    "ko": "SI",
    "en": "Système International d'Unités",
    "abbr": "",
    "def": "과학에서는 국제단위계 SI(Système International d'Unités)를 쓴다.",
    "chapters": [
     "matter-measurement#units"
    ]
   },
   {
    "ko": "pH 미터",
    "en": "",
    "abbr": "",
    "def": "pH 미터는 이 원리를 쓴다.",
    "chapters": [
     "electrochemistry#nernst"
    ]
   },
   {
    "ko": "π(파이) 결합",
    "en": "pi bond",
    "abbr": "",
    "def": "혼성에 쓰이지 않은 2p 오비탈은 평면에 수직으로 서 있다가 이웃 탄소의 2p와 옆으로 겹쳐 π(파이) 결합(pi bond)을 만든다.",
    "chapters": [
     "molecular-geometry#multiple-bonds"
    ]
   },
   {
    "ko": "σ(시그마) 결합",
    "en": "sigma bond",
    "abbr": "",
    "def": "이렇게 결합 축 위에 전자 밀도가 있는 결합이 σ(시그마) 결합(sigma bond)이다.",
    "chapters": [
     "molecular-geometry#multiple-bonds"
    ]
   },
   {
    "ko": "가림",
    "en": "shielding, screening",
    "abbr": "",
    "def": "이를 가림(shielding, screening)이라 하고, 전자가 실제로 느끼는 알짜 양전하를 유효 핵전하(effective nuclear charge)라 한다.",
    "chapters": [
     "periodic-properties#zeff"
    ]
   },
   {
    "ko": "가수분해",
    "en": "hydrolysis",
    "abbr": "",
    "def": "염은 이온으로 이루어지므로, 염 용액의 액성은 각 이온이 물과 양성자를 주고받는지(가수분해(hydrolysis))에 달려 있다.",
    "chapters": [
     "acids-bases#salts"
    ]
   },
   {
    "ko": "가열 곡선",
    "en": "heating curve",
    "abbr": "",
    "def": "일정한 속도로 열을 가하며 온도를 기록한 그래프가 가열 곡선(heating curve)이다.",
    "chapters": [
     "liquids-solids#phase-changes"
    ]
   },
   {
    "ko": "갈바니 전지",
    "en": "galvanic cell, voltaic cell",
    "abbr": "",
    "def": "자발적 산화–환원 반응으로 전기 에너지를 만드는 이 장치가 갈바니 전지(galvanic cell, voltaic cell)다.",
    "chapters": [
     "electrochemistry#galvanic"
    ]
   },
   {
    "ko": "강산",
    "en": "strong acid",
    "abbr": "",
    "def": "물에서 사실상 100% 이온화하는 산을 강산(strong acid)이라 한다.",
    "chapters": [
     "acids-bases#water-ph"
    ]
   },
   {
    "ko": "강염기",
    "en": "",
    "abbr": "",
    "def": "일반화학에서 외워 둘 강산은 일곱 가지다: HCl, HBr, HI, HNO₃, HClO₃, HClO₄, H₂SO₄(첫 번째 양성자만). 강염기는 1족 수산화물(LiOH, NaOH, KOH …)과 무거운 2족 수산화물(Ca(OH)₂, Sr(OH)₂, Ba(OH)₂)이다.",
    "chapters": [
     "acids-bases#water-ph"
    ]
   },
   {
    "ko": "강한 핵력",
    "en": "strong nuclear force",
    "abbr": "",
    "def": "그런데도 핵이 뭉쳐 있는 것은 약 1 fm(10⁻¹⁵ m) 거리에서만 작용하는 훨씬 강한 강한 핵력(strong nuclear force)이 모든 핵자 사이에 작용하기 때문이다.",
    "chapters": [
     "nuclear-chemistry#stability"
    ]
   },
   {
    "ko": "거시적",
    "en": "macroscopic",
    "abbr": "",
    "def": "눈에 보이는 거시적(macroscopic) 세계(물이 끓는다), 보이지 않는 입자 수준(submicroscopic)의 세계(물 분자들이 서로 떨어져 날아간다), 그리고 그 둘을 잇는 기호의 세계(\\(\\ce{H2O(l) -> H2O(g)}\\))다.",
    "chapters": [
     "matter-measurement#chemistry"
    ]
   },
   {
    "ko": "결정 격자",
    "en": "crystal lattice",
    "abbr": "",
    "def": "결정 속 반복 단위를 단위 세포(unit cell), 격자점의 3차원 배열을 결정 격자(crystal lattice)라 한다.",
    "chapters": [
     "liquids-solids#solids"
    ]
   },
   {
    "ko": "결정성 고체",
    "en": "crystalline solid",
    "abbr": "",
    "def": "입자가 3차원으로 규칙적으로 반복 배열된 고체를 결정성 고체(crystalline solid), 규칙이 없는 것을 비결정성 고체(amorphous solid)라 한다(예: 유리). 결정은 날카로운 녹는점을 갖지만 비결정성 고체는 일정 온도 범위에서 서서히 무른다.",
    "chapters": [
     "liquids-solids#solids"
    ]
   },
   {
    "ko": "결정장 갈라짐 에너지",
    "en": "",
    "abbr": "",
    "def": "두 세트의 에너지 차를 결정장 갈라짐 에너지 \\(\\Delta_o\\)라 한다(o = octahedral).",
    "chapters": [
     "coordination-chemistry#crystal-field"
    ]
   },
   {
    "ko": "결정장 안정화 에너지",
    "en": "CFSE",
    "abbr": "",
    "def": "전자 배치가 무게 중심보다 얼마나 낮아졌는지를 결정장 안정화 에너지(CFSE)라 한다.",
    "chapters": [
     "coordination-chemistry#crystal-field"
    ]
   },
   {
    "ko": "결정장 이론",
    "en": "crystal field theory",
    "abbr": "",
    "def": "착물은 왜 색을 띠고, 어떤 것은 자석에 끌리고 어떤 것은 끌리지 않을까? 결정장 이론(crystal field theory)은 리간드를 음전하 점으로 보고, 그 음전하가 금속의 d 전자와 밀어내는 정도가 d 오비탈마다 다르다는 데서 답을 찾는다.",
    "chapters": [
     "coordination-chemistry#crystal-field"
    ]
   },
   {
    "ko": "결합 기체 법칙",
    "en": "combined gas law",
    "abbr": "",
    "def": "같은 양의 기체가 상태 1에서 상태 2로 바뀔 때는 비례 상수가 사라진 결합 기체 법칙(combined gas law)이 편리하다.",
    "chapters": [
     "gases#gas-laws"
    ]
   },
   {
    "ko": "결합 길이",
    "en": "bond length",
    "abbr": "",
    "def": "두 핵 사이의 평균 거리가 결합 길이(bond length)다.",
    "chapters": [
     "chemical-bonding#bond-enthalpy"
    ]
   },
   {
    "ko": "결합 엔탈피",
    "en": "bond enthalpy",
    "abbr": "",
    "def": "기체 분자 1 mol 속의 특정 결합을 끊어 기체 조각으로 만드는 데 드는 엔탈피 변화를 결합 엔탈피(bond enthalpy) \\(D\\)라 한다.",
    "chapters": [
     "chemical-bonding#bond-enthalpy"
    ]
   },
   {
    "ko": "결합 원자 반지름",
    "en": "bonding atomic radius, 공유 결합 반지름",
    "abbr": "",
    "def": "가장 흔한 정의는 같은 원자 두 개가 공유 결합했을 때 핵간 거리의 절반인 결합 원자 반지름(bonding atomic radius, 공유 결합 반지름)이다.",
    "chapters": [
     "periodic-properties#radii"
    ]
   },
   {
    "ko": "결합 차수",
    "en": "bond order",
    "abbr": "",
    "def": "두 원자 사이 공유 전자쌍의 수를 결합 차수(bond order)라 한다.",
    "chapters": [
     "chemical-bonding#covalent"
    ]
   },
   {
    "ko": "계",
    "en": "system",
    "abbr": "",
    "def": "관심 대상을 계(system), 그 밖의 모든 것을 주위(surroundings)라 한다.",
    "chapters": [
     "thermochemistry#energy"
    ]
   },
   {
    "ko": "계수",
    "en": "coefficient",
    "abbr": "",
    "def": "화학식 앞의 숫자 2를 계수(coefficient)라 한다.",
    "chapters": [
     "stoichiometry#equations"
    ]
   },
   {
    "ko": "계통 오차",
    "en": "systematic error",
    "abbr": "",
    "def": "측정값(의 평균)이 참값에 얼마나 가까운가. 한쪽으로 일정하게 치우치게 하는 계통 오차(systematic error) — 영점이 안 맞은 저울, 잘못 보정된 피펫 — 가 정확도를 떨어뜨린다.",
    "chapters": [
     "matter-measurement#uncertainty"
    ]
   },
   {
    "ko": "공명 구조",
    "en": "resonance structures",
    "abbr": "",
    "def": "원자의 배열은 같고 전자의 배치만 다른 루이스 구조들을 공명 구조(resonance structures)라 하고, 실제 분자는 이들을 섞은 공명 혼성체(resonance hybrid)로 본다.",
    "chapters": [
     "chemical-bonding#resonance"
    ]
   },
   {
    "ko": "공명 혼성체",
    "en": "resonance hybrid",
    "abbr": "",
    "def": "원자의 배열은 같고 전자의 배치만 다른 루이스 구조들을 공명 구조(resonance structures)라 하고, 실제 분자는 이들을 섞은 공명 혼성체(resonance hybrid)로 본다.",
    "chapters": [
     "chemical-bonding#resonance"
    ]
   },
   {
    "ko": "공유 결합",
    "en": "covalent bond",
    "abbr": "",
    "def": "이렇게 전자쌍을 나누어 갖는 결합을 공유 결합(covalent bond)이라 한다.",
    "chapters": [
     "chemical-bonding#covalent"
    ]
   },
   {
    "ko": "공통 이온 효과",
    "en": "common-ion effect",
    "abbr": "",
    "def": "이를 공통 이온 효과(common-ion effect)라 한다.",
    "chapters": [
     "aqueous-equilibria#common-ion"
    ]
   },
   {
    "ko": "과포화",
    "en": "supersaturated",
    "abbr": "",
    "def": "용해도보다 적게 녹아 있으면 불포화, 뜨거운 포화 용액을 조심스럽게 식혀 용해도보다 많이 녹아 있으면 과포화(supersaturated)다.",
    "chapters": [
     "solutions#solubility"
    ]
   },
   {
    "ko": "광자",
    "en": "photon",
    "abbr": "",
    "def": "아인슈타인(1905)은 빛 자체가 에너지 \\(h\\nu\\)를 가진 입자, 곧 광자(photon)의 흐름이라고 해석했다.",
    "chapters": [
     "quantum-atom#photons"
    ]
   },
   {
    "ko": "광전 효과",
    "en": "photoelectric effect",
    "abbr": "",
    "def": "깨끗한 금속 표면에 빛을 쬐면 전자가 튀어나온다(광전 효과(photoelectric effect)). 실험 결과는 파동 이론의 예상과 정반대였다.",
    "chapters": [
     "quantum-atom#photons"
    ]
   },
   {
    "ko": "구경꾼 이온",
    "en": "spectator ion",
    "abbr": "",
    "def": "이런 이온을 구경꾼 이온(spectator ion)이라 하고, 이를 지운 식이 알짜 이온 반응식(net ionic equation)이다.",
    "chapters": [
     "aqueous-reactions#precipitation"
    ]
   },
   {
    "ko": "굽은 화살표",
    "en": "curved arrow",
    "abbr": "",
    "def": "유기화학에서 널리 쓰는 굽은 화살표(curved arrow)는 전자쌍 하나가 어디에서 어디로 가는지를 표시한다.",
    "chapters": [
     "chemical-bonding#resonance"
    ]
   },
   {
    "ko": "균일 혼합물",
    "en": "",
    "abbr": "",
    "def": "균일 혼합물(용액)은 어디를 떠도 조성이 같고, 불균일 혼합물은 부분마다 다르다.",
    "chapters": [
     "matter-measurement#classification"
    ]
   },
   {
    "ko": "균형 맞춘 반응식",
    "en": "balanced equation",
    "abbr": "",
    "def": "돌턴의 원자설대로 반응은 원자의 재배열이므로, 양쪽의 원소별 원자 수가 같아야 한다 — 이것이 균형 맞춘 반응식(balanced equation)이다.",
    "chapters": [
     "stoichiometry#equations"
    ]
   },
   {
    "ko": "극성 공유 결합",
    "en": "polar covalent bond",
    "abbr": "",
    "def": "이런 결합을 극성 공유 결합(polar covalent bond)이라 한다.",
    "chapters": [
     "chemical-bonding#polarity"
    ]
   },
   {
    "ko": "금속",
    "en": "",
    "abbr": "",
    "def": "금속(왼쪽·가운데, 원소의 약 3/4): 광택, 전기·열 전도성, 연성·전성, 양이온이 되기 쉬움. 비금속(오른쪽 위): 부도체, 음이온이 되거나 공유 결합. 준금속(계단선을 따라: B, Si, Ge, As, Sb, Te): 중간 성질, 반도체.",
    "chapters": [
     "atoms-molecules-ions#periodic-table"
    ]
   },
   {
    "ko": "금속성",
    "en": "metallic character",
    "abbr": "",
    "def": "이온화 에너지가 작은 원소일수록 전자를 잃기 쉬워 금속성(metallic character)이 크다.",
    "chapters": [
     "periodic-properties#metals"
    ]
   },
   {
    "ko": "기압계",
    "en": "barometer",
    "abbr": "",
    "def": "이 장치가 기압계(barometer)다.",
    "chapters": [
     "gases#pressure"
    ]
   },
   {
    "ko": "기질",
    "en": "substrate",
    "abbr": "",
    "def": "반응물(기질(substrate), S)이 효소(E)의 활성 자리에 결합해 효소–기질 착물 ES를 이룬 뒤 생성물로 바뀐다.",
    "chapters": [
     "kinetics#catalysis"
    ]
   },
   {
    "ko": "기체 상수",
    "en": "gas constant",
    "abbr": "",
    "def": "\\(R\\)은 기체 상수(gas constant)로, 어떤 기체에나 같다.",
    "chapters": [
     "gases#ideal-gas"
    ]
   },
   {
    "ko": "기호",
    "en": "",
    "abbr": "",
    "def": "눈에 보이는 거시적(macroscopic) 세계(물이 끓는다), 보이지 않는 입자 수준(submicroscopic)의 세계(물 분자들이 서로 떨어져 날아간다), 그리고 그 둘을 잇는 기호의 세계(\\(\\ce{H2O(l) -> H2O(g)}\\))다.",
    "chapters": [
     "matter-measurement#chemistry"
    ]
   },
   {
    "ko": "기화",
    "en": "vaporization",
    "abbr": "",
    "def": "고체 → 액체(융해(fusion, melting)), 액체 → 기체(기화(vaporization)), 고체 → 기체(승화(sublimation))는 분자 간 힘을 이겨야 하므로 흡열 과정이다.",
    "chapters": [
     "liquids-solids#phase-changes"
    ]
   },
   {
    "ko": "껍질",
    "en": "",
    "abbr": "",
    "def": "양자수허용값결정하는 것 주양자수 \\(n\\)1, 2, 3, …오비탈의 크기와 (수소에서) 에너지. 같은 \\(n\\)의 오비탈들이 하나의 껍질(shell)을 이룬다.",
    "chapters": [
     "quantum-atom#orbitals"
    ]
   },
   {
    "ko": "끓는다",
    "en": "",
    "abbr": "",
    "def": "액체는 증기압이 외부 압력과 같아지는 온도에서 끓는다.",
    "chapters": [
     "liquids-solids#vapor-pressure"
    ]
   },
   {
    "ko": "끓는점 오름",
    "en": "boiling-point elevation",
    "abbr": "",
    "def": "비휘발성 용질이 증기압을 낮추면, 증기압이 1 atm에 이르려면 더 높은 온도가 필요하다 — 끓는점 오름(boiling-point elevation). 또 용액이 얼 때는 대개 순수한 용매만 고체로 석출되므로, 용액의 증기압 곡선이 고체의 승화 곡선과 만나는 점(용액의 \"삼중점\")이 더 낮은 온도로 옮겨 간다 — 어는점 내림(freezing-point depression). 묽은 용액에서 두 효과 모두 용질 입자의…",
    "chapters": [
     "solutions#bp-fp"
    ]
   },
   {
    "ko": "내부 에너지",
    "en": "internal energy, \\(U\\)",
    "abbr": "",
    "def": "계를 이루는 모든 입자의 운동 에너지와 퍼텐셜 에너지의 합을 내부 에너지(internal energy, \\(U\\))라 한다.",
    "chapters": [
     "thermochemistry#first-law"
    ]
   },
   {
    "ko": "농도차 전지",
    "en": "concentration cell",
    "abbr": "",
    "def": "이것이 농도차 전지(concentration cell)다.",
    "chapters": [
     "electrochemistry#nernst"
    ]
   },
   {
    "ko": "다양성자산",
    "en": "polyprotic acid",
    "abbr": "",
    "def": "H₂SO₃, H₂CO₃, H₃PO₄처럼 이온화할 수 있는 양성자가 둘 이상인 산을 다양성자산(polyprotic acid)이라 한다.",
    "chapters": [
     "acids-bases#polyprotic"
    ]
   },
   {
    "ko": "단위 세포",
    "en": "unit cell",
    "abbr": "",
    "def": "결정 속 반복 단위를 단위 세포(unit cell), 격자점의 3차원 배열을 결정 격자(crystal lattice)라 한다.",
    "chapters": [
     "liquids-solids#solids"
    ]
   },
   {
    "ko": "단일 단계 반응",
    "en": "elementary reaction",
    "abbr": "",
    "def": "각 단계는 분자들의 실제 충돌 하나로 일어나는 단일 단계 반응(elementary reaction)이다.",
    "chapters": [
     "kinetics#mechanisms"
    ]
   },
   {
    "ko": "당량점",
    "en": "equivalence point",
    "abbr": "",
    "def": "농도를 정확히 아는 표준 용액(standard solution)을 뷰렛에서 조금씩 떨어뜨려, 미지 시료와 정확히 화학량론적으로 반응한 순간 — 당량점(equivalence point) — 까지 들어간 부피를 잰다.",
    "chapters": [
     "aqueous-reactions#titration"
    ]
   },
   {
    "ko": "동위원소",
    "en": "isotope",
    "abbr": "",
    "def": "같은 원소(같은 Z)이면서 중성자 수가 다른 원자들을 동위원소(isotope)라 한다.",
    "chapters": [
     "atoms-molecules-ions#isotopes"
    ]
   },
   {
    "ko": "동적 평형",
    "en": "dynamic equilibrium",
    "abbr": "",
    "def": "증발 속도와 응축 속도가 같아지면 동적 평형(dynamic equilibrium)에 이르고, 이때 증기의 압력이 그 온도의 증기압(vapor pressure)이다.",
    "chapters": [
     "liquids-solids#vapor-pressure"
    ]
   },
   {
    "ko": "들뜬 상태",
    "en": "",
    "abbr": "",
    "def": "\\(n = 1\\)이 가장 안정한 바닥 상태, 그보다 높으면 들뜬 상태다.",
    "chapters": [
     "quantum-atom#bohr"
    ]
   },
   {
    "ko": "등장액",
    "en": "isotonic",
    "abbr": "",
    "def": "같은 삼투압의 용액을 등장액(isotonic)이라 하며, 0.9% NaCl(생리 식염수)과 5% 포도당이 그렇다.",
    "chapters": [
     "solutions#osmosis"
    ]
   },
   {
    "ko": "등전자 계열",
    "en": "isoelectronic series",
    "abbr": "",
    "def": "전자 수가 같은 원자·이온들의 무리를 등전자 계열(isoelectronic series)이라 하는데, 그 안에서는 핵전하가 클수록 작다.",
    "chapters": [
     "periodic-properties#radii"
    ]
   },
   {
    "ko": "라디칼",
    "en": "radical",
    "abbr": "",
    "def": "NO(11 e⁻), NO₂(17 e⁻), ClO₂. 짝짓지 않은 전자를 가진 이런 분자를 라디칼(radical)이라 하며 반응성이 크다.",
    "chapters": [
     "chemical-bonding#octet-exceptions"
    ]
   },
   {
    "ko": "란타넘족 수축",
    "en": "",
    "abbr": "",
    "def": "또 6주기에서는 4f 14개가 채워지면서 \\(Z_\\text{eff}\\)가 크게 늘어(란타넘족 수축), 5d 원소(Hf, Ta, W…)가 4d 원소(Zr, Nb, Mo…)와 크기가 거의 같다.",
    "chapters": [
     "periodic-properties#radii"
    ]
   },
   {
    "ko": "런던 분산력",
    "en": "London dispersion force",
    "abbr": "",
    "def": "이 둘 사이의 인력이 런던 분산력(London dispersion force)이다.",
    "chapters": [
     "liquids-solids#imf"
    ]
   },
   {
    "ko": "루이스 기호",
    "en": "Lewis symbol",
    "abbr": "",
    "def": "이것이 루이스 기호(Lewis symbol)다.",
    "chapters": [
     "chemical-bonding#lewis-octet"
    ]
   },
   {
    "ko": "리간드",
    "en": "ligand",
    "abbr": "",
    "def": "금속 이온은 루이스 산으로서 NH₃, CN⁻, OH⁻ 같은 루이스 염기(리간드(ligand))와 결합해 착이온(complex ion)을 만든다.",
    "chapters": [
     "aqueous-equilibria#solubility-factors"
    ]
   },
   {
    "ko": "마법수",
    "en": "magic numbers",
    "abbr": "",
    "def": "또 양성자나 중성자 수가 마법수(magic numbers) 2, 8, 20, 28, 50, 82, 126 중 하나이면 특히 안정하다.",
    "chapters": [
     "nuclear-chemistry#stability"
    ]
   },
   {
    "ko": "마이셀",
    "en": "micelle",
    "abbr": "",
    "def": "소수성 콜로이드는 표면에 흡착된 이온의 전하끼리 반발해 안정하며, 전해질을 넣으면 전하가 가려져 엉겨 가라앉는다(강 하구의 삼각주). 비누와 담즙산 같은 계면 활성제는 한쪽 끝이 극성, 다른 끝이 무극성이라 기름방울을 둘러싸 물에 분산시키는 마이셀(micelle)을 만든다.",
    "chapters": [
     "solutions#electrolytes"
    ]
   },
   {
    "ko": "맥스웰–볼츠만 분포",
    "en": "Maxwell–Boltzmann distribution",
    "abbr": "",
    "def": "그 분포를 맥스웰–볼츠만 분포(Maxwell–Boltzmann distribution)라 한다.",
    "chapters": [
     "gases#kinetic-theory"
    ]
   },
   {
    "ko": "모세관 현상",
    "en": "capillary action",
    "abbr": "",
    "def": "가는 유리관에서 부착력이 응집력보다 크면 액체가 관 벽을 타고 올라가는 모세관 현상(capillary action)이 일어난다.",
    "chapters": [
     "liquids-solids#liquid-props"
    ]
   },
   {
    "ko": "몰",
    "en": "mole, mol",
    "abbr": "",
    "def": "그 묶음이 몰(mole, mol)이다.",
    "chapters": [
     "stoichiometry#mole"
    ]
   },
   {
    "ko": "몰 용해도",
    "en": "molar solubility",
    "abbr": "",
    "def": "반면 몰 용해도(molar solubility) \\(s\\)는 포화 용액 1 L에 녹는 염의 몰수로, 용액 조성(공통 이온, pH)에 따라 변한다.",
    "chapters": [
     "aqueous-equilibria#ksp"
    ]
   },
   {
    "ko": "몰 질량",
    "en": "molar mass",
    "abbr": "",
    "def": "물질 1 mol의 질량을 몰 질량(molar mass) \\(M\\)이라 하며, 화학식의 원자량을 모두 더해 구한다(g/mol).",
    "chapters": [
     "stoichiometry#mole"
    ]
   },
   {
    "ko": "몰농도",
    "en": "molarity",
    "abbr": "",
    "def": "용액 속 용질의 양을 세는 가장 흔한 단위는 용액 1 L에 녹아 있는 용질의 몰수, 몰농도(molarity)다.",
    "chapters": [
     "aqueous-reactions#molarity"
    ]
   },
   {
    "ko": "문턱 진동수",
    "en": "threshold frequency",
    "abbr": "",
    "def": "진동수가 금속마다 정해진 문턱 진동수(threshold frequency) \\(\\nu_0\\)보다 작으면, 빛이 아무리 세도 전자가 하나도 나오지 않는다.",
    "chapters": [
     "quantum-atom#photons"
    ]
   },
   {
    "ko": "물질",
    "en": "matter",
    "abbr": "",
    "def": "물질(matter)은 질량을 가지고 공간을 차지하는 모든 것이다.",
    "chapters": [
     "matter-measurement#classification"
    ]
   },
   {
    "ko": "미시 상태",
    "en": "microstate",
    "abbr": "",
    "def": "\\(W\\)는 계의 거시 상태(같은 \\(P, V, T\\), 같은 에너지)를 만드는 미시 상태(microstate)의 수, 곧 분자의 위치와 에너지를 배치하는 방법의 수다.",
    "chapters": [
     "thermodynamics#entropy"
    ]
   },
   {
    "ko": "밀도",
    "en": "density",
    "abbr": "",
    "def": "단위 부피당 질량, 곧 밀도(density)는 물질마다 다른 세기 성질이라 물질을 확인하는 지문 역할을 한다.",
    "chapters": [
     "matter-measurement#density"
    ]
   },
   {
    "ko": "바닥 상태",
    "en": "",
    "abbr": "",
    "def": "\\(n = 1\\)이 가장 안정한 바닥 상태, 그보다 높으면 들뜬 상태다.",
    "chapters": [
     "quantum-atom#bohr"
    ]
   },
   {
    "ko": "반응 메커니즘",
    "en": "reaction mechanism",
    "abbr": "",
    "def": "실제로 분자 수준에서 일어나는 단계들의 순서를 반응 메커니즘(reaction mechanism)이라 한다.",
    "chapters": [
     "kinetics#mechanisms"
    ]
   },
   {
    "ko": "반응 속도",
    "en": "reaction rate",
    "abbr": "",
    "def": "반응 속도(reaction rate)는 단위 시간당 농도의 변화다.",
    "chapters": [
     "kinetics#rates"
    ]
   },
   {
    "ko": "반응 엔탈피",
    "en": "enthalpy of reaction",
    "abbr": "",
    "def": "반응에 따른 엔탈피 변화 \\(\\Delta H_\\text{rxn} = H_\\text{생성물} - H_\\text{반응물}\\)을 반응 엔탈피(enthalpy of reaction)라 하고, 균형 맞춘 반응식 옆에 함께 쓴 것을 열화학 반응식이라 한다.",
    "chapters": [
     "thermochemistry#enthalpy"
    ]
   },
   {
    "ko": "반응 지수",
    "en": "reaction quotient",
    "abbr": "",
    "def": "임의의 순간(평형이 아니어도)의 농도를 K 식에 넣은 값을 반응 지수(reaction quotient) Q라 한다.",
    "chapters": [
     "equilibrium#quotient"
    ]
   },
   {
    "ko": "반응 차수",
    "en": "reaction order",
    "abbr": "",
    "def": "지수 \\(m, n\\)은 각 반응물에 대한 반응 차수(reaction order)이고, \\(m + n\\)이 전체 차수다.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "반자성",
    "en": "diamagnetism",
    "abbr": "",
    "def": "그러나 액체 산소는 자석에 끌린다 — 홀전자가 있다는 뜻이다(상자성(paramagnetism); 모든 전자가 짝지으면 자기장에 약하게 밀리는 반자성(diamagnetism)). 이를 설명하려면 전자가 분자 전체에 퍼진 오비탈에 들어간다고 보는 분자 오비탈 이론(molecular orbital theory, MO)이 필요하다.",
    "chapters": [
     "molecular-geometry#mo-theory"
    ]
   },
   {
    "ko": "반쪽 반응",
    "en": "half-reaction",
    "abbr": "",
    "def": "이 반응을 전자를 주고받는 두 반쪽 반응(half-reaction)으로 나누어 쓸 수 있다.",
    "chapters": [
     "electrochemistry#redox-balance"
    ]
   },
   {
    "ko": "반쪽 반응법",
    "en": "method of half-reactions",
    "abbr": "",
    "def": "이때 쓰는 체계적인 방법이 반쪽 반응법(method of half-reactions)이다.",
    "chapters": [
     "electrochemistry#redox-balance"
    ]
   },
   {
    "ko": "반투막",
    "en": "semipermeable membrane",
    "abbr": "",
    "def": "용매 분자는 통과시키지만 용질 입자는 막는 막을 반투막(semipermeable membrane)이라 한다(셀로판, 세포막). 반투막을 사이에 두고 농도가 다른 용액이 있으면, 용매가 묽은 쪽에서 진한 쪽으로 알짜 이동한다.",
    "chapters": [
     "solutions#osmosis"
    ]
   },
   {
    "ko": "반트호프 식",
    "en": "van 't Hoff equation",
    "abbr": "",
    "def": "정량적으로는 반트호프 식(van 't Hoff equation)을 쓴다(17장에서 \\(\\Delta G^\\circ = -RT\\ln K\\)로부터 유도한다).",
    "chapters": [
     "equilibrium#lechatelier"
    ]
   },
   {
    "ko": "반트호프 인자",
    "en": "van 't Hoff factor",
    "abbr": "",
    "def": "실제 입자 수의 비를 반트호프 인자(van 't Hoff factor)라 한다.",
    "chapters": [
     "solutions#electrolytes"
    ]
   },
   {
    "ko": "발열",
    "en": "exothermic",
    "abbr": "",
    "def": "\\(\\Delta H > 0\\)이면 흡열(endothermic), \\(\\Delta H < 0\\)이면 발열(exothermic) 과정이다.",
    "chapters": [
     "thermochemistry#enthalpy"
    ]
   },
   {
    "ko": "방사 분포 함수",
    "en": "radial distribution function",
    "abbr": "",
    "def": "“핵에서 거리 \\(r\\)만큼 떨어진 곳에 전자가 있을 확률”은 \\(\\psi^2\\)에 그 거리의 구 껍질 넓이 \\(4\\pi r^2\\)를 곱한 방사 분포 함수(radial distribution function) \\(P(r) = 4\\pi r^2\\psi^2\\)로 본다.",
    "chapters": [
     "quantum-atom#orbital-shapes"
    ]
   },
   {
    "ko": "방사능",
    "en": "radioactivity",
    "abbr": "",
    "def": "1896년 베크렐은 우라늄 광석이 빛을 쬐지 않아도 감광판을 검게 만든다는 것을 발견했고, 마리 퀴리와 피에르 퀴리는 이 현상을 방사능(radioactivity)이라 이름 붙여 폴로늄과 라듐을 분리했다.",
    "chapters": [
     "nuclear-chemistry#radioactivity"
    ]
   },
   {
    "ko": "방사성 붕괴 계열",
    "en": "radioactive decay series",
    "abbr": "",
    "def": "이렇게 붕괴가 이어지다 안정 핵에 이를 때까지의 연쇄를 방사성 붕괴 계열(radioactive decay series)이라 한다.",
    "chapters": [
     "nuclear-chemistry#stability"
    ]
   },
   {
    "ko": "배위권",
    "en": "coordination sphere",
    "abbr": "",
    "def": "예를 들어 [Cu(NH₃)₄]²⁺에서 Cu²⁺가 중심 금속, NH₃ 넷이 리간드이며, 대괄호 안쪽을 배위권(coordination sphere)이라 한다.",
    "chapters": [
     "coordination-chemistry#complexes"
    ]
   },
   {
    "ko": "백분율 조성",
    "en": "percent composition",
    "abbr": "",
    "def": "이를 백분율 조성(percent composition)이라 한다.",
    "chapters": [
     "stoichiometry#formulas"
    ]
   },
   {
    "ko": "보색",
    "en": "complementary color",
    "abbr": "",
    "def": "흰빛에서 그 파장이 빠지므로 우리 눈에는 나머지 빛, 곧 흡수된 색의 보색(complementary color)이 보인다.",
    "chapters": [
     "coordination-chemistry#color-magnetism"
    ]
   },
   {
    "ko": "본–하버 순환",
    "en": "Born–Haber cycle",
    "abbr": "",
    "def": "이 순환을 본–하버 순환(Born–Haber cycle)이라 한다.",
    "chapters": [
     "chemical-bonding#ionic"
    ]
   },
   {
    "ko": "부껍질",
    "en": "",
    "abbr": "",
    "def": "같은 \\(n, l\\)의 오비탈 묶음이 부껍질(subshell)이다.",
    "chapters": [
     "quantum-atom#orbitals"
    ]
   },
   {
    "ko": "부식",
    "en": "corrosion",
    "abbr": "",
    "def": "부식(corrosion)은 금속이 환경과의 산화–환원 반응으로 화합물이 되는 것이다.",
    "chapters": [
     "electrochemistry#batteries"
    ]
   },
   {
    "ko": "부착력",
    "en": "adhesion",
    "abbr": "",
    "def": "같은 분자끼리의 인력을 응집력(cohesion), 다른 물질 표면과의 인력을 부착력(adhesion)이라 한다.",
    "chapters": [
     "liquids-solids#liquid-props"
    ]
   },
   {
    "ko": "부피 플라스크",
    "en": "volumetric flask",
    "abbr": "",
    "def": "정확한 농도의 용액을 만들려면 용질을 정확히 달아 부피 플라스크(volumetric flask)에 넣고, 일부 물로 녹인 뒤 눈금선까지 물을 채운다.",
    "chapters": [
     "aqueous-reactions#molarity"
    ]
   },
   {
    "ko": "분광 화학 계열",
    "en": "spectrochemical series",
    "abbr": "",
    "def": "이 순서를 분광 화학 계열(spectrochemical series)이라 한다.",
    "chapters": [
     "coordination-chemistry#crystal-field"
    ]
   },
   {
    "ko": "분별 증류",
    "en": "fractional distillation",
    "abbr": "",
    "def": "이 증기를 다시 응축·증발시키기를 되풀이하는 것이 분별 증류(fractional distillation)로, 원유 정제의 기본 원리다.",
    "chapters": [
     "solutions#raoult"
    ]
   },
   {
    "ko": "분압",
    "en": "partial pressure",
    "abbr": "",
    "def": "성분 \\(i\\)가 혼자 그 용기를 채웠을 때의 압력을 분압(partial pressure) \\(P_i\\)라 하면,.",
    "chapters": [
     "gases#stoich-partial"
    ]
   },
   {
    "ko": "분자",
    "en": "molecule",
    "abbr": "",
    "def": "두 개 이상의 원자가 공유 결합으로 단단히 묶인 입자를 분자(molecule)라 한다.",
    "chapters": [
     "atoms-molecules-ions#molecules-ions"
    ]
   },
   {
    "ko": "분자 간 힘",
    "en": "intermolecular force",
    "abbr": "",
    "def": "분자 안의 원자를 묶는 공유 결합(분자 내 힘(intramolecular force), 수백 kJ/mol)과 분자와 분자 사이의 분자 간 힘(intermolecular force)(대개 수–수십 kJ/mol)은 전혀 다른 크기다.",
    "chapters": [
     "liquids-solids#states"
    ]
   },
   {
    "ko": "분자 기하",
    "en": "molecular geometry",
    "abbr": "",
    "def": "전자 영역의 배치가 전자 영역 기하(electron-domain geometry)이고, 그중 원자의 위치만 보고 부르는 이름이 분자 기하(molecular geometry)다.",
    "chapters": [
     "molecular-geometry#vsepr"
    ]
   },
   {
    "ko": "분자 내 힘",
    "en": "intramolecular force",
    "abbr": "",
    "def": "분자 안의 원자를 묶는 공유 결합(분자 내 힘(intramolecular force), 수백 kJ/mol)과 분자와 분자 사이의 분자 간 힘(intermolecular force)(대개 수–수십 kJ/mol)은 전혀 다른 크기다.",
    "chapters": [
     "liquids-solids#states"
    ]
   },
   {
    "ko": "분자 오비탈 이론",
    "en": "molecular orbital theory, MO",
    "abbr": "",
    "def": "그러나 액체 산소는 자석에 끌린다 — 홀전자가 있다는 뜻이다(상자성(paramagnetism); 모든 전자가 짝지으면 자기장에 약하게 밀리는 반자성(diamagnetism)). 이를 설명하려면 전자가 분자 전체에 퍼진 오비탈에 들어간다고 보는 분자 오비탈 이론(molecular orbital theory, MO)이 필요하다.",
    "chapters": [
     "molecular-geometry#mo-theory"
    ]
   },
   {
    "ko": "분자도",
    "en": "molecularity",
    "abbr": "",
    "def": "단일 단계에 참여하는 분자의 수를 분자도(molecularity)라 한다.",
    "chapters": [
     "kinetics#mechanisms"
    ]
   },
   {
    "ko": "분자식",
    "en": "",
    "abbr": "",
    "def": "분자식은 실험식의 정수배다.",
    "chapters": [
     "stoichiometry#formulas"
    ]
   },
   {
    "ko": "분출",
    "en": "effusion",
    "abbr": "",
    "def": "작은 구멍을 통해 기체가 진공으로 새어 나가는 것을 분출(effusion)이라 한다.",
    "chapters": [
     "gases#kinetic-theory"
    ]
   },
   {
    "ko": "불균일 평형",
    "en": "heterogeneous equilibrium",
    "abbr": "",
    "def": "반응물과 생성물이 서로 다른 상에 있는 평형을 불균일 평형(heterogeneous equilibrium)이라 한다.",
    "chapters": [
     "equilibrium#meaning"
    ]
   },
   {
    "ko": "불균일 혼합물",
    "en": "",
    "abbr": "",
    "def": "균일 혼합물(용액)은 어디를 떠도 조성이 같고, 불균일 혼합물은 부분마다 다르다.",
    "chapters": [
     "matter-measurement#classification"
    ]
   },
   {
    "ko": "불포화",
    "en": "",
    "abbr": "",
    "def": "용해도보다 적게 녹아 있으면 불포화, 뜨거운 포화 용액을 조심스럽게 식혀 용해도보다 많이 녹아 있으면 과포화(supersaturated)다.",
    "chapters": [
     "solutions#solubility"
    ]
   },
   {
    "ko": "비결정성 고체",
    "en": "amorphous solid",
    "abbr": "",
    "def": "입자가 3차원으로 규칙적으로 반복 배열된 고체를 결정성 고체(crystalline solid), 규칙이 없는 것을 비결정성 고체(amorphous solid)라 한다(예: 유리). 결정은 날카로운 녹는점을 갖지만 비결정성 고체는 일정 온도 범위에서 서서히 무른다.",
    "chapters": [
     "liquids-solids#solids"
    ]
   },
   {
    "ko": "비공유 전자쌍",
    "en": "lone pair",
    "abbr": "",
    "def": "후자를 비공유 전자쌍(lone pair)이라 한다.",
    "chapters": [
     "chemical-bonding#covalent"
    ]
   },
   {
    "ko": "비금속",
    "en": "",
    "abbr": "",
    "def": "금속(왼쪽·가운데, 원소의 약 3/4): 광택, 전기·열 전도성, 연성·전성, 양이온이 되기 쉬움. 비금속(오른쪽 위): 부도체, 음이온이 되거나 공유 결합. 준금속(계단선을 따라: B, Si, Ge, As, Sb, Te): 중간 성질, 반도체.",
    "chapters": [
     "atoms-molecules-ions#periodic-table"
    ]
   },
   {
    "ko": "비열",
    "en": "specific heat, \\(c\\), J/(g·K)",
    "abbr": "",
    "def": "물체의 온도를 1 K(= 1 °C) 올리는 데 드는 열이 열용량(heat capacity, \\(C\\), J/K)이고, 물질 1 g당 열용량이 비열(specific heat, \\(c\\), J/(g·K)), 1 mol당이면 몰 열용량이다.",
    "chapters": [
     "thermochemistry#calorimetry"
    ]
   },
   {
    "ko": "비자발적",
    "en": "nonspontaneous",
    "abbr": "",
    "def": "같은 조건에서 한 방향이 자발적이면 반대 방향은 비자발적(nonspontaneous)이다.",
    "chapters": [
     "thermodynamics#spontaneous"
    ]
   },
   {
    "ko": "비전해질",
    "en": "nonelectrolyte",
    "abbr": "",
    "def": "물에 녹아 이온을 내는 물질을 전해질(electrolyte), 분자 그대로 녹아 이온을 내지 않는 물질을 비전해질(nonelectrolyte)이라 한다.",
    "chapters": [
     "aqueous-reactions#electrolytes"
    ]
   },
   {
    "ko": "비편재화",
    "en": "delocalization",
    "abbr": "",
    "def": "π 전자 6개는 특정 두 탄소 사이가 아니라 고리 전체에 비편재화(delocalization)되어 있다.",
    "chapters": [
     "molecular-geometry#multiple-bonds"
    ]
   },
   {
    "ko": "빈도 인자",
    "en": "frequency factor",
    "abbr": "",
    "def": "\\(A\\)는 빈도 인자(frequency factor)로 충돌 빈도와 방향 인자를 합친 것이다(단위는 \\(k\\)와 같다). \\(R = 8.314\\) J/(mol·K), \\(E_a\\)는 J/mol 단위.",
    "chapters": [
     "kinetics#temperature"
    ]
   },
   {
    "ko": "빠른 전평형",
    "en": "fast pre-equilibrium",
    "abbr": "",
    "def": "앞의 빠른 단계가 정반응·역반응 모두 빨라 평형을 이루고 있다고 가정하면(빠른 전평형(fast pre-equilibrium)), 정반응 속도 = 역반응 속도에서 중간체 농도를 구할 수 있다.",
    "chapters": [
     "kinetics#mechanisms"
    ]
   },
   {
    "ko": "산 이온화 상수",
    "en": "acid-ionization constant",
    "abbr": "",
    "def": "이온화 평형의 평형 상수를 산 이온화 상수(acid-ionization constant)라 한다.",
    "chapters": [
     "acids-bases#weak-acids"
    ]
   },
   {
    "ko": "산화",
    "en": "oxidation",
    "abbr": "",
    "def": "전자를 잃는 것을 산화(oxidation), 얻는 것을 환원(reduction)이라 한다.",
    "chapters": [
     "aqueous-reactions#redox"
    ]
   },
   {
    "ko": "산화수",
    "en": "oxidation number",
    "abbr": "",
    "def": "그래서 \"결합 전자를 모두 전기음성도가 큰 원자에게 준다고 가정했을 때의 가상 전하\"를 산화수(oxidation number)로 정의해 전자의 이동을 장부처럼 기록한다.",
    "chapters": [
     "aqueous-reactions#redox"
    ]
   },
   {
    "ko": "산화제",
    "en": "oxidizing agent",
    "abbr": "",
    "def": "\"산화는 전자를 잃고, 환원은 얻는다.\" 영어로는 OIL RIG(Oxidation Is Loss, Reduction Is Gain). 자신은 환원되면서 상대를 산화시키는 물질이 산화제(oxidizing agent), 자신은 산화되면서 상대를 환원시키는 물질이 환원제(reducing agent)다.",
    "chapters": [
     "aqueous-reactions#redox"
    ]
   },
   {
    "ko": "삼중점",
    "en": "triple point",
    "abbr": "",
    "def": "삼중점(triple point): 세 선이 만나는 점. 세 상이 동시에 평형에 있는 유일한 \\((T, P)\\). 물은 0.01 °C, 0.00604 atm(611.7 Pa).",
    "chapters": [
     "liquids-solids#phase-diagrams"
    ]
   },
   {
    "ko": "삼투",
    "en": "osmosis",
    "abbr": "",
    "def": "이것이 삼투(osmosis)다.",
    "chapters": [
     "solutions#osmosis"
    ]
   },
   {
    "ko": "삼투압",
    "en": "osmotic pressure",
    "abbr": "",
    "def": "진한 쪽에 압력을 가해 삼투를 정확히 멈추게 하는 압력이 삼투압(osmotic pressure) \\(\\Pi\\)이다.",
    "chapters": [
     "solutions#osmosis"
    ]
   },
   {
    "ko": "상자성",
    "en": "paramagnetism",
    "abbr": "",
    "def": "그러나 액체 산소는 자석에 끌린다 — 홀전자가 있다는 뜻이다(상자성(paramagnetism); 모든 전자가 짝지으면 자기장에 약하게 밀리는 반자성(diamagnetism)). 이를 설명하려면 전자가 분자 전체에 퍼진 오비탈에 들어간다고 보는 분자 오비탈 이론(molecular orbital theory, MO)이 필요하다.",
    "chapters": [
     "molecular-geometry#mo-theory"
    ]
   },
   {
    "ko": "상태 함수",
    "en": "state function",
    "abbr": "",
    "def": "이처럼 현재 상태(온도, 압력, 조성 …)만으로 정해지고 거쳐 온 경로와 무관한 양을 상태 함수(state function)라 한다.",
    "chapters": [
     "thermochemistry#first-law"
    ]
   },
   {
    "ko": "상평형 그림",
    "en": "phase diagram",
    "abbr": "",
    "def": "상평형 그림(phase diagram)은 온도–압력 평면을 고체·액체·기체가 안정한 영역으로 나눈 지도다.",
    "chapters": [
     "liquids-solids#phase-diagrams"
    ]
   },
   {
    "ko": "선 스펙트럼",
    "en": "line spectrum",
    "abbr": "",
    "def": "이것이 선 스펙트럼(line spectrum)이다.",
    "chapters": [
     "quantum-atom#bohr"
    ]
   },
   {
    "ko": "선 표기법",
    "en": "cell notation",
    "abbr": "",
    "def": "전지를 그림 없이 한 줄로 쓰는 약속이 선 표기법(cell notation)이다.",
    "chapters": [
     "electrochemistry#galvanic"
    ]
   },
   {
    "ko": "선택적 침전",
    "en": "selective precipitation",
    "abbr": "",
    "def": "이것을 선택적 침전(selective precipitation)이라 하며, 금속 이온의 정성 분석(HCl → H₂S(산성) → H₂S(염기성) → CO₃²⁻ 순의 족 분리)의 기초다.",
    "chapters": [
     "aqueous-equilibria#precipitation"
    ]
   },
   {
    "ko": "세기 성질",
    "en": "intensive",
    "abbr": "",
    "def": "성질은 또한 양에 따라 크기 성질(extensive)(질량, 부피, 열량처럼 양에 비례)과 세기 성질(intensive)(온도, 밀도, 끓는점처럼 양과 무관)으로 나뉜다.",
    "chapters": [
     "matter-measurement#classification"
    ]
   },
   {
    "ko": "소수성",
    "en": "hydrophobic",
    "abbr": "",
    "def": "물을 분산매로 하는 콜로이드에서, 표면에 극성기를 가져 물과 잘 어울리는 것을 친수성(hydrophilic)(단백질, 녹말), 그렇지 않은 것을 소수성(hydrophobic) 콜로이드라 한다.",
    "chapters": [
     "solutions#electrolytes"
    ]
   },
   {
    "ko": "속도 결정 단계",
    "en": "rate-determining step",
    "abbr": "",
    "def": "이것을 속도 결정 단계(rate-determining step)라 한다.",
    "chapters": [
     "kinetics#mechanisms"
    ]
   },
   {
    "ko": "속도 법칙",
    "en": "rate law",
    "abbr": "",
    "def": "이 관계식을 속도 법칙(rate law)이라 한다.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "속도 상수",
    "en": "rate constant",
    "abbr": "",
    "def": "\\(k\\)는 속도 상수(rate constant)로 온도에 따라 달라지지만 농도와는 무관하다.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "수용액",
    "en": "aqueous solution",
    "abbr": "",
    "def": "용매가 물이면 수용액(aqueous solution)이고, 화학식 뒤에 (aq)를 붙인다.",
    "chapters": [
     "aqueous-reactions#electrolytes"
    ]
   },
   {
    "ko": "수화",
    "en": "hydration",
    "abbr": "",
    "def": "물 분자의 부분 음전하(O 쪽)는 양이온을, 부분 양전하(H 쪽)는 음이온을 향해 이온을 감싸는데, 이를 수화(hydration)라 한다.",
    "chapters": [
     "aqueous-reactions#electrolytes"
    ]
   },
   {
    "ko": "순간 속도",
    "en": "instantaneous rate",
    "abbr": "",
    "def": "어느 한 순간의 속도, 곧 순간 속도(instantaneous rate)는 그 점에서 그은 접선의 기울기다.",
    "chapters": [
     "kinetics#rates"
    ]
   },
   {
    "ko": "슬레이터 규칙",
    "en": "Slater's rules",
    "abbr": "",
    "def": "\\(S\\)를 어림하는 간단한 방법이 슬레이터 규칙(Slater's rules)이다.",
    "chapters": [
     "periodic-properties#zeff"
    ]
   },
   {
    "ko": "승화",
    "en": "sublimation",
    "abbr": "",
    "def": "고체 → 액체(융해(fusion, melting)), 액체 → 기체(기화(vaporization)), 고체 → 기체(승화(sublimation))는 분자 간 힘을 이겨야 하므로 흡열 과정이다.",
    "chapters": [
     "liquids-solids#phase-changes"
    ]
   },
   {
    "ko": "실제 수득량",
    "en": "actual yield",
    "abbr": "",
    "def": "실제로 얻는 양, 실제 수득량(actual yield)은 거의 언제나 이보다 작다.",
    "chapters": [
     "stoichiometry#yield"
    ]
   },
   {
    "ko": "쌍극자 모멘트",
    "en": "dipole moment",
    "abbr": "",
    "def": "크기가 같고 부호가 반대인 전하 \\(\\pm Q\\)가 거리 \\(r\\)만큼 떨어져 있으면 쌍극자 모멘트(dipole moment)가 생긴다.",
    "chapters": [
     "chemical-bonding#polarity"
    ]
   },
   {
    "ko": "아레니우스",
    "en": "Arrhenius",
    "abbr": "",
    "def": "4장에서는 아레니우스(Arrhenius)의 정의를 썼다.",
    "chapters": [
     "acids-bases#definitions"
    ]
   },
   {
    "ko": "아보가드로 수",
    "en": "",
    "abbr": "",
    "def": "1 mol은 정확히 \\(6.022\\,140\\,76\\times10^{23}\\)개의 입자(원자·분자·이온·전자 등)를 담은 양이다(2019년 SI 정의). 이 수를 아보가드로 수라 하고, 단위를 붙인 \\(N_A = 6.022\\times10^{23}\\ \\text{mol}^{-1}\\)을 아보가드로 상수라 한다.",
    "chapters": [
     "stoichiometry#mole"
    ]
   },
   {
    "ko": "안정성의 띠",
    "en": "belt of stability",
    "abbr": "",
    "def": "이것이 안정성의 띠(belt of stability)다.",
    "chapters": [
     "nuclear-chemistry#stability"
    ]
   },
   {
    "ko": "알짜 이온 반응식",
    "en": "net ionic equation",
    "abbr": "",
    "def": "이런 이온을 구경꾼 이온(spectator ion)이라 하고, 이를 지운 식이 알짜 이온 반응식(net ionic equation)이다.",
    "chapters": [
     "aqueous-reactions#precipitation"
    ]
   },
   {
    "ko": "압력",
    "en": "pressure",
    "abbr": "",
    "def": "단위 면적에 수직으로 작용하는 힘을 압력(pressure)이라 한다.",
    "chapters": [
     "gases#pressure"
    ]
   },
   {
    "ko": "압축 인자",
    "en": "compressibility factor",
    "abbr": "",
    "def": "이상성에서 벗어난 정도는 압축 인자(compressibility factor) \\(Z = PV_m/RT\\)로 잰다.",
    "chapters": [
     "gases#real-gases"
    ]
   },
   {
    "ko": "약산",
    "en": "weak acid",
    "abbr": "",
    "def": "대부분의 산은 물에서 일부만 이온화하는 약산(weak acid)이다.",
    "chapters": [
     "acids-bases#weak-acids"
    ]
   },
   {
    "ko": "약염기",
    "en": "weak base",
    "abbr": "",
    "def": "암모니아와 아민(질소에 고립 전자쌍이 있는 유기 화합물)은 물에서 양성자를 받아 \\(\\ce{OH-}\\)를 만드는 약염기(weak base)다.",
    "chapters": [
     "acids-bases#weak-bases"
    ]
   },
   {
    "ko": "양성자",
    "en": "proton",
    "abbr": "",
    "def": "1897–1911년 사이의 세 실험이 이 그림을 무너뜨리고, 원자가 전자(electron), 양성자(proton), 중성자(neutron)로 되어 있으며 거의 모든 질량이 아주 작은 핵(nucleus)에 모여 있음을 밝혔다.",
    "chapters": [
     "atoms-molecules-ions#atomic-structure"
    ]
   },
   {
    "ko": "양이온",
    "en": "cation",
    "abbr": "",
    "def": "전자를 잃으면 양이온(cation), 얻으면 음이온(anion)이다.",
    "chapters": [
     "atoms-molecules-ions#molecules-ions"
    ]
   },
   {
    "ko": "양자",
    "en": "quantum",
    "abbr": "",
    "def": "이 최소 에너지 덩어리를 양자(quantum)라 한다.",
    "chapters": [
     "quantum-atom#photons"
    ]
   },
   {
    "ko": "양쪽성",
    "en": "amphiprotic",
    "abbr": "",
    "def": "이처럼 상대에 따라 산도 되고 염기도 되는 물질을 양쪽성(amphiprotic) 물질이라 한다.",
    "chapters": [
     "acids-bases#definitions"
    ]
   },
   {
    "ko": "어는점 내림",
    "en": "freezing-point depression",
    "abbr": "",
    "def": "비휘발성 용질이 증기압을 낮추면, 증기압이 1 atm에 이르려면 더 높은 온도가 필요하다 — 끓는점 오름(boiling-point elevation). 또 용액이 얼 때는 대개 순수한 용매만 고체로 석출되므로, 용액의 증기압 곡선이 고체의 승화 곡선과 만나는 점(용액의 \"삼중점\")이 더 낮은 온도로 옮겨 간다 — 어는점 내림(freezing-point depression). 묽은 용액에서 두 효과 모두 용질 입자의…",
    "chapters": [
     "solutions#bp-fp"
    ]
   },
   {
    "ko": "에너지",
    "en": "energy",
    "abbr": "",
    "def": "에너지(energy)는 일을 하거나 열을 전달할 수 있는 능력이다.",
    "chapters": [
     "thermochemistry#energy"
    ]
   },
   {
    "ko": "엔탈피",
    "en": "enthalpy",
    "abbr": "",
    "def": "엔탈피(enthalpy)의 변화는 일정 압력에서 계가 흡수한 열과 같다.",
    "chapters": [
     "thermochemistry#enthalpy"
    ]
   },
   {
    "ko": "엔트로피",
    "en": "entropy",
    "abbr": "",
    "def": "흡열 용해도 저절로 일어나는 이유는 무엇일까? 섞이면 입자가 배열될 수 있는 방법의 수, 즉 엔트로피(entropy)가 커지기 때문이다(17장). 자연은 에너지를 낮추는 방향과 무질서도를 높이는 방향을 함께 따르고, 이상 기체 두 가지가 \\(\\Delta H = 0\\)으로도 저절로 섞이는 것은 순수하게 엔트로피 덕분이다.",
    "chapters": [
     "solutions#dissolution"
    ]
   },
   {
    "ko": "여러자리 리간드",
    "en": "",
    "abbr": "",
    "def": "주개 원자가 하나인 리간드를 한자리 리간드, 둘 이상이어서 금속을 집게처럼 무는 리간드를 여러자리 리간드 또는 킬레이트제(chelating agent, 그리스어 chele = 게의 집게발)라 한다.",
    "chapters": [
     "coordination-chemistry#complexes"
    ]
   },
   {
    "ko": "역삼투",
    "en": "reverse osmosis",
    "abbr": "",
    "def": "진한 쪽에 Π보다 큰 압력을 가하면 용매가 거꾸로 흐르는데, 이것이 바닷물을 담수로 만드는 역삼투(reverse osmosis)다.",
    "chapters": [
     "solutions#osmosis"
    ]
   },
   {
    "ko": "연료 전지",
    "en": "fuel cell",
    "abbr": "",
    "def": "연료 전지(fuel cell)는 연료와 산화제를 계속 공급하면서 산화–환원 반응의 \\(\\Delta G\\)를 직접 전기로 바꾼다.",
    "chapters": [
     "electrochemistry#batteries"
    ]
   },
   {
    "ko": "연료가",
    "en": "fuel value",
    "abbr": "",
    "def": "연료와 식품의 가치는 질량 1 g이 완전히 탈 때(산화될 때) 내는 열, 곧 연료가(fuel value)로 비교한다.",
    "chapters": [
     "thermochemistry#fuels"
    ]
   },
   {
    "ko": "연소 분석",
    "en": "combustion analysis",
    "abbr": "",
    "def": "C, H, O로 된 유기 화합물의 조성은 연소 분석(combustion analysis)으로 정한다.",
    "chapters": [
     "stoichiometry#formulas"
    ]
   },
   {
    "ko": "연속 스펙트럼",
    "en": "",
    "abbr": "",
    "def": "백열등의 빛을 프리즘에 통과시키면 모든 색이 이어진 연속 스펙트럼이 나온다.",
    "chapters": [
     "quantum-atom#bohr"
    ]
   },
   {
    "ko": "연속체",
    "en": "bonding continuum",
    "abbr": "",
    "def": "$$\\Delta EN = |\\chi_A - \\chi_B|$$대략적인 기준: \\(\\Delta EN < 0.4\\) 무극성 공유, \\(0.4 \\le \\Delta EN \\le 2.0\\) 극성 공유, \\(\\Delta EN > 2.0\\) 주로 이온 결합. 경계는 연속적이며 교재마다 조금씩 다르다(1.7–2.0). ΔEN MINI LAB이원자 결합 A–B의 전자 밀도 색 지도(빨강: 전자가 남는 δ−, 파랑: 모자라는 δ+).…",
    "chapters": [
     "chemical-bonding#polarity"
    ]
   },
   {
    "ko": "열",
    "en": "heat, \\(q\\)",
    "abbr": "",
    "def": "온도 차이 때문에 흐르는 에너지가 열(heat, \\(q\\)), 힘이 물체를 움직이며 옮기는 에너지가 일(work, \\(w\\))이다.",
    "chapters": [
     "thermochemistry#energy"
    ]
   },
   {
    "ko": "열용량",
    "en": "heat capacity, \\(C\\), J/K",
    "abbr": "",
    "def": "물체의 온도를 1 K(= 1 °C) 올리는 데 드는 열이 열용량(heat capacity, \\(C\\), J/K)이고, 물질 1 g당 열용량이 비열(specific heat, \\(c\\), J/(g·K)), 1 mol당이면 몰 열용량이다.",
    "chapters": [
     "thermochemistry#calorimetry"
    ]
   },
   {
    "ko": "열화학 반응식",
    "en": "",
    "abbr": "",
    "def": "반응에 따른 엔탈피 변화 \\(\\Delta H_\\text{rxn} = H_\\text{생성물} - H_\\text{반응물}\\)을 반응 엔탈피(enthalpy of reaction)라 하고, 균형 맞춘 반응식 옆에 함께 쓴 것을 열화학 반응식이라 한다.",
    "chapters": [
     "thermochemistry#enthalpy"
    ]
   },
   {
    "ko": "염",
    "en": "salt",
    "abbr": "",
    "def": "산과 염기가 반응해 물과 염(salt)을 만드는 반응을 중화 반응(neutralization)이라 한다.",
    "chapters": [
     "aqueous-reactions#acid-base"
    ]
   },
   {
    "ko": "염기 이온화 상수",
    "en": "",
    "abbr": "",
    "def": "평형 상수를 염기 이온화 상수 \\(K_b\\)라 한다.",
    "chapters": [
     "acids-bases#weak-bases"
    ]
   },
   {
    "ko": "오비탈",
    "en": "orbital",
    "abbr": "",
    "def": "수소 원자에 대한 슈뢰딩거 방정식의 해 하나하나를 오비탈(orbital)이라 한다.",
    "chapters": [
     "quantum-atom#orbitals"
    ]
   },
   {
    "ko": "옥소 음이온",
    "en": "",
    "abbr": "",
    "def": "다원자 음이온: 산소를 포함한 옥소 음이온은 \"-산\"으로 끝나며, 산소가 하나 적으면 \"아-\", 둘 적으면 \"하이포아-\", 하나 많으면 \"과-\"를 붙인다.",
    "chapters": [
     "atoms-molecules-ions#nomenclature"
    ]
   },
   {
    "ko": "옥텟",
    "en": "octet",
    "abbr": "",
    "def": "원자는 원자가 껍질에 전자 8개(옥텟(octet))를 가질 때까지 전자를 얻거나, 잃거나, 공유하는 경향이 있다.",
    "chapters": [
     "chemical-bonding#lewis-octet"
    ]
   },
   {
    "ko": "완전 혼화성",
    "en": "miscible",
    "abbr": "",
    "def": "서로 어떤 비율로든 섞이는 두 액체를 완전 혼화성(miscible)이라 한다.",
    "chapters": [
     "solutions#dissolution"
    ]
   },
   {
    "ko": "완충 용액",
    "en": "buffer solution",
    "abbr": "",
    "def": "이런 용액을 완충 용액(buffer solution)이라 한다.",
    "chapters": [
     "aqueous-equilibria#buffers"
    ]
   },
   {
    "ko": "용매",
    "en": "solvent",
    "abbr": "",
    "def": "양이 가장 많은 성분을 용매(solvent), 녹아 있는 나머지를 용질(solute)이라 한다.",
    "chapters": [
     "aqueous-reactions#electrolytes"
    ]
   },
   {
    "ko": "용매화",
    "en": "solvation",
    "abbr": "",
    "def": "용매가 물이면 이 과정을 수화(hydration), 일반적으로는 용매화(solvation)라 한다.",
    "chapters": [
     "solutions#dissolution"
    ]
   },
   {
    "ko": "용액",
    "en": "solution",
    "abbr": "",
    "def": "용액(solution)은 두 가지 이상의 물질이 분자 수준에서 고르게 섞인 균일 혼합물이다.",
    "chapters": [
     "aqueous-reactions#electrolytes"
    ]
   },
   {
    "ko": "용질",
    "en": "solute",
    "abbr": "",
    "def": "양이 가장 많은 성분을 용매(solvent), 녹아 있는 나머지를 용질(solute)이라 한다.",
    "chapters": [
     "aqueous-reactions#electrolytes"
    ]
   },
   {
    "ko": "용해도",
    "en": "solubility",
    "abbr": "",
    "def": "녹는 속도와 석출되는 속도가 같아진 이 동적 평형 상태를 포화 용액(saturated solution), 그때의 농도를 용해도(solubility)라 한다.",
    "chapters": [
     "solutions#solubility"
    ]
   },
   {
    "ko": "용해도곱",
    "en": "solubility product",
    "abbr": "",
    "def": "\\(K_{sp}\\)는 용해도곱(solubility product)이다.",
    "chapters": [
     "aqueous-equilibria#ksp"
    ]
   },
   {
    "ko": "우연 오차",
    "en": "random error",
    "abbr": "",
    "def": "반복 측정값끼리 얼마나 가까운가. 무작위로 흔들리는 우연 오차(random error) — 눈금 읽기, 온도 요동 — 가 정밀도를 떨어뜨린다.",
    "chapters": [
     "matter-measurement#uncertainty"
    ]
   },
   {
    "ko": "운동 에너지",
    "en": "kinetic energy",
    "abbr": "",
    "def": "움직이는 물체가 가진 운동 에너지(kinetic energy) \\(E_k = \\tfrac12 mv^2\\)과, 위치나 배치 때문에 저장된 퍼텐셜 에너지(potential energy)로 나뉜다.",
    "chapters": [
     "thermochemistry#energy"
    ]
   },
   {
    "ko": "원소",
    "en": "element",
    "abbr": "",
    "def": "원소(element): 화학적 방법으로 더 단순한 물질로 나눌 수 없는 물질. 한 종류의 원자로만 되어 있다.",
    "chapters": [
     "matter-measurement#classification"
    ]
   },
   {
    "ko": "원액",
    "en": "stock solution",
    "abbr": "",
    "def": "진한 원액(stock solution)에 용매를 더해 묽혀도 용질의 몰수는 변하지 않는다.",
    "chapters": [
     "aqueous-reactions#molarity"
    ]
   },
   {
    "ko": "원자 번호",
    "en": "atomic number",
    "abbr": "",
    "def": "원자 번호(atomic number) \\(Z\\) = 핵 속 양성자 수. 원소의 정체를 정한다(Z = 6이면 언제나 탄소).질량수(mass number) \\(A\\) = 양성자 수 + 중성자 수. 중성자 수 \\(N = A - Z\\).",
    "chapters": [
     "atoms-molecules-ions#isotopes"
    ]
   },
   {
    "ko": "원자 질량 단위",
    "en": "atomic mass unit, u 또는 Da",
    "abbr": "",
    "def": "그래서 ¹²C 원자 하나의 질량을 정확히 12 u로 정한 원자 질량 단위(atomic mass unit, u 또는 Da)를 쓴다.",
    "chapters": [
     "atoms-molecules-ions#isotopes"
    ]
   },
   {
    "ko": "원자가 결합 이론",
    "en": "valence bond theory",
    "abbr": "",
    "def": "7장의 오비탈 개념을 루이스의 전자쌍과 합친 것이 원자가 결합 이론(valence bond theory)이다.",
    "chapters": [
     "molecular-geometry#valence-bond"
    ]
   },
   {
    "ko": "원자가 껍질 전자쌍 반발",
    "en": "valence-shell electron-pair repulsion, VSEPR",
    "abbr": "",
    "def": "이 단순한 생각이 원자가 껍질 전자쌍 반발(valence-shell electron-pair repulsion, VSEPR) 모형이다.",
    "chapters": [
     "molecular-geometry#vsepr"
    ]
   },
   {
    "ko": "원자가 전자",
    "en": "valence electrons",
    "abbr": "",
    "def": "괄호 밖의 가장 바깥 껍질 전자를 원자가 전자(valence electrons)라 하며, 같은 족 원소는 원자가 전자 배치가 같아 화학적 성질이 비슷하다.",
    "chapters": [
     "quantum-atom#configurations"
    ]
   },
   {
    "ko": "원자량",
    "en": "atomic weight",
    "abbr": "",
    "def": "주기율표에 적힌 원자량(atomic weight)은 자연에 있는 동위원소 혼합물의 가중 평균 질량이다.",
    "chapters": [
     "atoms-molecules-ions#isotopes"
    ]
   },
   {
    "ko": "유도 단위",
    "en": "derived unit",
    "abbr": "",
    "def": "기본 단위를 조합한 것이 유도 단위(derived unit)다.",
    "chapters": [
     "matter-measurement#units"
    ]
   },
   {
    "ko": "유발 효과",
    "en": "inductive effect",
    "abbr": "",
    "def": "카복실산 R–COOH의 짝염기 R–COO⁻는 음전하가 두 산소에 공명으로 퍼져 알코올(R–OH)보다 훨씬 강한 산이다(에탄올 p\\(K_a \\approx 16\\), 아세트산 4.74). R에 전기음성도가 큰 원자가 붙으면 전자를 끌어당기는 유발 효과(inductive effect)로 산성이 더 커진다.",
    "chapters": [
     "acids-bases#structure"
    ]
   },
   {
    "ko": "유효 핵전하",
    "en": "effective nuclear charge",
    "abbr": "",
    "def": "이를 가림(shielding, screening)이라 하고, 전자가 실제로 느끼는 알짜 양전하를 유효 핵전하(effective nuclear charge)라 한다.",
    "chapters": [
     "periodic-properties#zeff"
    ]
   },
   {
    "ko": "유효숫자",
    "en": "significant figures",
    "abbr": "",
    "def": "측정값의 유효숫자(significant figures)는 확실한 숫자 전부에 불확실한 마지막 한 자리를 더한 것이다.",
    "chapters": [
     "matter-measurement#uncertainty"
    ]
   },
   {
    "ko": "융해",
    "en": "fusion, melting",
    "abbr": "",
    "def": "고체 → 액체(융해(fusion, melting)), 액체 → 기체(기화(vaporization)), 고체 → 기체(승화(sublimation))는 분자 간 힘을 이겨야 하므로 흡열 과정이다.",
    "chapters": [
     "liquids-solids#phase-changes"
    ]
   },
   {
    "ko": "음극선",
    "en": "cathode ray",
    "abbr": "",
    "def": "진공관 양 끝에 높은 전압을 걸면 음극에서 빛줄기, 음극선(cathode ray)이 나온다.",
    "chapters": [
     "atoms-molecules-ions#atomic-structure"
    ]
   },
   {
    "ko": "음이온",
    "en": "anion",
    "abbr": "",
    "def": "전자를 잃으면 양이온(cation), 얻으면 음이온(anion)이다.",
    "chapters": [
     "atoms-molecules-ions#molecules-ions"
    ]
   },
   {
    "ko": "응집력",
    "en": "cohesion",
    "abbr": "",
    "def": "같은 분자끼리의 인력을 응집력(cohesion), 다른 물질 표면과의 인력을 부착력(adhesion)이라 한다.",
    "chapters": [
     "liquids-solids#liquid-props"
    ]
   },
   {
    "ko": "이론 수득량",
    "en": "theoretical yield",
    "abbr": "",
    "def": "한계 반응물이 모두 반응했을 때 계산상 얻을 수 있는 생성물의 양을 이론 수득량(theoretical yield)이라 한다.",
    "chapters": [
     "stoichiometry#yield"
    ]
   },
   {
    "ko": "이상 기체",
    "en": "ideal gas",
    "abbr": "",
    "def": "이 식을 정확히 따르는 가상의 기체를 이상 기체(ideal gas)라 한다.",
    "chapters": [
     "gases#ideal-gas"
    ]
   },
   {
    "ko": "이상 용액",
    "en": "ideal solution",
    "abbr": "",
    "def": "모든 농도에서 라울 법칙을 따르는 용액을 이상 용액(ideal solution)이라 한다.",
    "chapters": [
     "solutions#raoult"
    ]
   },
   {
    "ko": "이성질체",
    "en": "",
    "abbr": "",
    "def": "화학식이 같은데 원자 배열이 다른 화합물을 이성질체라 한다.",
    "chapters": [
     "coordination-chemistry#isomerism"
    ]
   },
   {
    "ko": "이온",
    "en": "ion",
    "abbr": "",
    "def": "원자가 전자를 잃거나 얻으면 전하를 띤 이온(ion)이 된다.",
    "chapters": [
     "atoms-molecules-ions#molecules-ions"
    ]
   },
   {
    "ko": "이온 화합물",
    "en": "ionic compound",
    "abbr": "",
    "def": "양이온과 음이온은 정전기적 인력으로 뭉쳐 이온 화합물(ionic compound)을 만든다.",
    "chapters": [
     "atoms-molecules-ions#molecules-ions"
    ]
   },
   {
    "ko": "이온곱",
    "en": "",
    "abbr": "",
    "def": "섞은 직후(반응 전)의 이온 농도로 이온곱 \\(Q\\)를 계산한다.",
    "chapters": [
     "aqueous-equilibria#precipitation"
    ]
   },
   {
    "ko": "이온쌍",
    "en": "ion pair",
    "abbr": "",
    "def": "반대 전하를 띤 이온이 서로 붙어 다니는 이온쌍(ion pair)이 생겨 독립된 입자 수가 줄기 때문이다.",
    "chapters": [
     "solutions#electrolytes"
    ]
   },
   {
    "ko": "이온화",
    "en": "ionization",
    "abbr": "",
    "def": "물과 반응해 새로 이온이 생기는 과정을 이온화(ionization)라 한다.",
    "chapters": [
     "aqueous-reactions#electrolytes"
    ]
   },
   {
    "ko": "이온화 방사선",
    "en": "ionizing radiation",
    "abbr": "",
    "def": "α, β, γ선과 X선, 중성자는 물질을 지나며 전자를 떼어 내 이온을 만드는 이온화 방사선(ionizing radiation)이다.",
    "chapters": [
     "nuclear-chemistry#biological"
    ]
   },
   {
    "ko": "이원자 분자",
    "en": "",
    "abbr": "",
    "def": "H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ 일곱 원소는 상온에서 이원자 분자로 존재한다.",
    "chapters": [
     "atoms-molecules-ions#molecules-ions"
    ]
   },
   {
    "ko": "일",
    "en": "work, \\(w\\)",
    "abbr": "",
    "def": "온도 차이 때문에 흐르는 에너지가 열(heat, \\(q\\)), 힘이 물체를 움직이며 옮기는 에너지가 일(work, \\(w\\))이다.",
    "chapters": [
     "thermochemistry#energy"
    ]
   },
   {
    "ko": "일함수",
    "en": "work function",
    "abbr": "",
    "def": "광자 하나가 전자 하나에 에너지를 모두 주고, 전자가 금속을 벗어나는 데 필요한 최소 에너지 일함수(work function) \\(\\Phi\\)를 빼고 남은 만큼이 운동 에너지가 된다.",
    "chapters": [
     "quantum-atom#photons"
    ]
   },
   {
    "ko": "임계 질량",
    "en": "critical mass",
    "abbr": "",
    "def": "그러기 위한 최소 질량을 임계 질량(critical mass)이라 한다.",
    "chapters": [
     "nuclear-chemistry#fission-fusion"
    ]
   },
   {
    "ko": "임계점",
    "en": "critical point",
    "abbr": "",
    "def": "임계점(critical point): 액체–기체 선이 끝나는 점. 임계 온도 \\(T_c\\)보다 높으면 아무리 압축해도 액화되지 않으며, \\(T_c\\)와 임계 압력 \\(P_c\\)를 모두 넘은 상태를 초임계 유체(supercritical fluid)라 한다.",
    "chapters": [
     "liquids-solids#phase-diagrams"
    ]
   },
   {
    "ko": "입방 최밀 충전",
    "en": "cubic close packing, ccp",
    "abbr": "",
    "def": "FCC는 입방 최밀 충전(cubic close packing, ccp)과 같은 구조로, 육방 최밀 충전(hcp)과 함께 같은 크기의 구로 만들 수 있는 가장 조밀한 배열(74.0%)이다.",
    "chapters": [
     "liquids-solids#solids"
    ]
   },
   {
    "ko": "입자 가속기",
    "en": "",
    "abbr": "",
    "def": "양전하를 띤 입자는 핵의 전기적 반발을 넘어야 하므로 입자 가속기(사이클로트론, 선형 가속기)로 큰 운동 에너지를 준다.",
    "chapters": [
     "nuclear-chemistry#stability"
    ]
   },
   {
    "ko": "입자 수준",
    "en": "submicroscopic",
    "abbr": "",
    "def": "눈에 보이는 거시적(macroscopic) 세계(물이 끓는다), 보이지 않는 입자 수준(submicroscopic)의 세계(물 분자들이 서로 떨어져 날아간다), 그리고 그 둘을 잇는 기호의 세계(\\(\\ce{H2O(l) -> H2O(g)}\\))다.",
    "chapters": [
     "matter-measurement#chemistry"
    ]
   },
   {
    "ko": "자동 이온화",
    "en": "autoionization",
    "abbr": "",
    "def": "물 분자 두 개가 서로 양성자를 주고받는 자동 이온화(autoionization)가 일어나기 때문이다.",
    "chapters": [
     "acids-bases#water-ph"
    ]
   },
   {
    "ko": "자발적 과정",
    "en": "spontaneous process",
    "abbr": "",
    "def": "외부에서 계속 무언가를 해 주지 않아도 일단 시작되면 스스로 진행하는 과정을 자발적 과정(spontaneous process)이라 한다.",
    "chapters": [
     "thermodynamics#spontaneous"
    ]
   },
   {
    "ko": "적분 속도식",
    "en": "integrated rate law",
    "abbr": "",
    "def": "속도 법칙을 시간에 대해 적분하면 농도를 시간의 함수로 주는 적분 속도식(integrated rate law)을 얻는다.",
    "chapters": [
     "kinetics#integrated"
    ]
   },
   {
    "ko": "적정",
    "en": "titration",
    "abbr": "",
    "def": "농도를 모르는 용액의 농도를 알아내는 가장 정확한 방법 중 하나가 적정(titration)이다.",
    "chapters": [
     "aqueous-reactions#titration"
    ]
   },
   {
    "ko": "적정 곡선",
    "en": "titration curve",
    "abbr": "",
    "def": "이제는 적정하는 동안 pH가 어떻게 변하는지 — 적정 곡선(titration curve) — 을 계산할 수 있다.",
    "chapters": [
     "aqueous-equilibria#titrations"
    ]
   },
   {
    "ko": "전기분해",
    "en": "electrolysis",
    "abbr": "",
    "def": "전기 에너지로 비자발적 산화–환원 반응을 일으키는 것이 전기분해(electrolysis)이고, 그 장치가 전해 전지(electrolytic cell)다.",
    "chapters": [
     "electrochemistry#electrolysis"
    ]
   },
   {
    "ko": "전이 금속",
    "en": "transition metals",
    "abbr": "",
    "def": "주기율표 3–12족의 d 구역 원소를 전이 금속(transition metals)이라 한다.",
    "chapters": [
     "coordination-chemistry#transition-metals"
    ]
   },
   {
    "ko": "전이 상태",
    "en": "transition state",
    "abbr": "",
    "def": "반응물이 생성물로 바뀌는 도중, 에너지가 가장 높은 지점의 불안정한 원자 배열을 활성화 착물(activated complex) 또는 전이 상태(transition state)라 한다.",
    "chapters": [
     "kinetics#temperature"
    ]
   },
   {
    "ko": "전자",
    "en": "electron",
    "abbr": "",
    "def": "1897–1911년 사이의 세 실험이 이 그림을 무너뜨리고, 원자가 전자(electron), 양성자(proton), 중성자(neutron)로 되어 있으며 거의 모든 질량이 아주 작은 핵(nucleus)에 모여 있음을 밝혔다.",
    "chapters": [
     "atoms-molecules-ions#atomic-structure"
    ]
   },
   {
    "ko": "전자 배치",
    "en": "electron configuration",
    "abbr": "",
    "def": "원자의 전자들이 어느 오비탈에 어떻게 들어가 있는지를 전자 배치(electron configuration)라 한다.",
    "chapters": [
     "quantum-atom#configurations"
    ]
   },
   {
    "ko": "전자 영역",
    "en": "electron domain",
    "abbr": "",
    "def": "셀 때는 전자쌍 하나하나가 아니라 전자 영역(electron domain)을 센다.",
    "chapters": [
     "molecular-geometry#vsepr"
    ]
   },
   {
    "ko": "전자 영역 기하",
    "en": "electron-domain geometry",
    "abbr": "",
    "def": "전자 영역의 배치가 전자 영역 기하(electron-domain geometry)이고, 그중 원자의 위치만 보고 부르는 이름이 분자 기하(molecular geometry)다.",
    "chapters": [
     "molecular-geometry#vsepr"
    ]
   },
   {
    "ko": "전자기 복사",
    "en": "electromagnetic radiation",
    "abbr": "",
    "def": "19세기 물리학에서 빛은 전기장과 자기장이 함께 진동하며 퍼져 나가는 전자기 복사(electromagnetic radiation), 곧 파동이었다.",
    "chapters": [
     "quantum-atom#light-waves"
    ]
   },
   {
    "ko": "전지",
    "en": "battery",
    "abbr": "",
    "def": "전지(battery)는 하나 이상의 갈바니 전지를 실용적으로 포장한 것이다.",
    "chapters": [
     "electrochemistry#batteries"
    ]
   },
   {
    "ko": "전지 전위",
    "en": "cell potential",
    "abbr": "",
    "def": "단위 전하가 산화 전극에서 환원 전극으로 갈 때 하는 일을 전지 전위(cell potential) 또는 기전력 \\(E_\\text{cell}\\)이라 한다(1 V = 1 J/C). 모든 물질이 표준 상태(용질 1 M, 기체 1 atm, 25 °C)일 때의 값이 표준 전지 전위 \\(E^\\circ_\\text{cell}\\)이다.",
    "chapters": [
     "electrochemistry#potentials"
    ]
   },
   {
    "ko": "전해 전지",
    "en": "electrolytic cell",
    "abbr": "",
    "def": "전기 에너지로 비자발적 산화–환원 반응을 일으키는 것이 전기분해(electrolysis)이고, 그 장치가 전해 전지(electrolytic cell)다.",
    "chapters": [
     "electrochemistry#electrolysis"
    ]
   },
   {
    "ko": "전해질",
    "en": "electrolyte",
    "abbr": "",
    "def": "물에 녹아 이온을 내는 물질을 전해질(electrolyte), 분자 그대로 녹아 이온을 내지 않는 물질을 비전해질(nonelectrolyte)이라 한다.",
    "chapters": [
     "aqueous-reactions#electrolytes"
    ]
   },
   {
    "ko": "전환 온도",
    "en": "crossover temperature",
    "abbr": "",
    "def": "이 온도를 전환 온도(crossover temperature)라 한다.",
    "chapters": [
     "thermodynamics#temperature"
    ]
   },
   {
    "ko": "점성",
    "en": "viscosity",
    "abbr": "",
    "def": "점성(viscosity)은 흐름에 대한 저항이다.",
    "chapters": [
     "liquids-solids#liquid-props"
    ]
   },
   {
    "ko": "접두사",
    "en": "prefix",
    "abbr": "",
    "def": "아주 크거나 작은 양은 10의 거듭제곱을 뜻하는 접두사(prefix)를 붙인다.",
    "chapters": [
     "matter-measurement#units"
    ]
   },
   {
    "ko": "정상 끓는점",
    "en": "normal boiling point",
    "abbr": "",
    "def": "외부 압력이 1 atm(760 torr)일 때의 끓는점이 정상 끓는점(normal boiling point)이다.",
    "chapters": [
     "liquids-solids#vapor-pressure"
    ]
   },
   {
    "ko": "정확한 수",
    "en": "exact number",
    "abbr": "",
    "def": "세는 수(달걀 12개, 반응식의 계수 2)나 정의값(1 in = 2.54 cm)은 정확한 수(exact number)다.",
    "chapters": [
     "matter-measurement#uncertainty"
    ]
   },
   {
    "ko": "족",
    "en": "group",
    "abbr": "",
    "def": "족(group): 세로줄, 1–18족. 같은 족 원소는 화학적 성질이 비슷하다.",
    "chapters": [
     "atoms-molecules-ions#periodic-table"
    ]
   },
   {
    "ko": "종말점",
    "en": "end point",
    "abbr": "",
    "def": "지시약의 색이 바뀌어 적정을 멈추는 지점을 종말점(end point)이라 하며, 좋은 적정에서는 종말점이 당량점과 한두 방울(0.05–0.1 mL) 이내로 일치한다.",
    "chapters": [
     "aqueous-reactions#titration"
    ]
   },
   {
    "ko": "주기",
    "en": "period",
    "abbr": "",
    "def": "주기(period): 가로줄, 1–7주기.",
    "chapters": [
     "atoms-molecules-ions#periodic-table"
    ]
   },
   {
    "ko": "주위",
    "en": "surroundings",
    "abbr": "",
    "def": "관심 대상을 계(system), 그 밖의 모든 것을 주위(surroundings)라 한다.",
    "chapters": [
     "thermochemistry#energy"
    ]
   },
   {
    "ko": "준금속",
    "en": "",
    "abbr": "",
    "def": "금속(왼쪽·가운데, 원소의 약 3/4): 광택, 전기·열 전도성, 연성·전성, 양이온이 되기 쉬움. 비금속(오른쪽 위): 부도체, 음이온이 되거나 공유 결합. 준금속(계단선을 따라: B, Si, Ge, As, Sb, Te): 중간 성질, 반도체.",
    "chapters": [
     "atoms-molecules-ions#periodic-table"
    ]
   },
   {
    "ko": "중간체",
    "en": "intermediate",
    "abbr": "",
    "def": "한 단계에서 생겼다가 다음 단계에서 소모되어 전체 반응식에 나타나지 않는 물질을 중간체(intermediate)라 한다.",
    "chapters": [
     "kinetics#mechanisms"
    ]
   },
   {
    "ko": "중성자",
    "en": "neutron",
    "abbr": "",
    "def": "1897–1911년 사이의 세 실험이 이 그림을 무너뜨리고, 원자가 전자(electron), 양성자(proton), 중성자(neutron)로 되어 있으며 거의 모든 질량이 아주 작은 핵(nucleus)에 모여 있음을 밝혔다.",
    "chapters": [
     "atoms-molecules-ions#atomic-structure"
    ]
   },
   {
    "ko": "중화 반응",
    "en": "neutralization",
    "abbr": "",
    "def": "산과 염기가 반응해 물과 염(salt)을 만드는 반응을 중화 반응(neutralization)이라 한다.",
    "chapters": [
     "aqueous-reactions#acid-base"
    ]
   },
   {
    "ko": "증기압",
    "en": "vapor pressure",
    "abbr": "",
    "def": "증발 속도와 응축 속도가 같아지면 동적 평형(dynamic equilibrium)에 이르고, 이때 증기의 압력이 그 온도의 증기압(vapor pressure)이다.",
    "chapters": [
     "liquids-solids#vapor-pressure"
    ]
   },
   {
    "ko": "지시약",
    "en": "indicator",
    "abbr": "",
    "def": "당량점은 눈에 보이지 않으므로 그 근처에서 색이 변하는 지시약(indicator)을 넣는다.",
    "chapters": [
     "aqueous-reactions#titration"
    ]
   },
   {
    "ko": "진동수",
    "en": "frequency, ν",
    "abbr": "",
    "def": "파동은 마루와 마루 사이의 거리인 파장(wavelength, λ)과, 한 점을 1초에 지나가는 마루의 수인 진동수(frequency, ν)로 기술한다.",
    "chapters": [
     "quantum-atom#light-waves"
    ]
   },
   {
    "ko": "질량 결손",
    "en": "mass defect",
    "abbr": "",
    "def": "이 차이를 질량 결손(mass defect)이라 한다.",
    "chapters": [
     "nuclear-chemistry#mass-energy"
    ]
   },
   {
    "ko": "질량 분석기",
    "en": "mass spectrometer",
    "abbr": "",
    "def": "동위원소의 질량과 존재비는 질량 분석기(mass spectrometer)로 잰다.",
    "chapters": [
     "atoms-molecules-ions#isotopes"
    ]
   },
   {
    "ko": "질량 작용 법칙",
    "en": "law of mass action",
    "abbr": "",
    "def": "이것을 질량 작용 법칙(law of mass action)이라 한다.",
    "chapters": [
     "equilibrium#constant"
    ]
   },
   {
    "ko": "질량수",
    "en": "mass number",
    "abbr": "",
    "def": "원자 번호(atomic number) \\(Z\\) = 핵 속 양성자 수. 원소의 정체를 정한다(Z = 6이면 언제나 탄소).질량수(mass number) \\(A\\) = 양성자 수 + 중성자 수. 중성자 수 \\(N = A - Z\\).",
    "chapters": [
     "atoms-molecules-ions#isotopes"
    ]
   },
   {
    "ko": "짝산",
    "en": "conjugate acid",
    "abbr": "",
    "def": "산이 양성자를 내놓고 남은 것이 그 산의 짝염기(conjugate base), 염기가 양성자를 받아 된 것이 그 염기의 짝산(conjugate acid)이다.",
    "chapters": [
     "acids-bases#definitions"
    ]
   },
   {
    "ko": "짝염기",
    "en": "conjugate base",
    "abbr": "",
    "def": "산이 양성자를 내놓고 남은 것이 그 산의 짝염기(conjugate base), 염기가 양성자를 받아 된 것이 그 염기의 짝산(conjugate acid)이다.",
    "chapters": [
     "acids-bases#definitions"
    ]
   },
   {
    "ko": "짝지음 에너지",
    "en": "",
    "abbr": "",
    "def": "넷째 전자는 (a) eg로 올라가 \\(\\Delta_o\\)를 치르거나, (b) t2g의 전자와 짝을 지어 짝지음 에너지 \\(P\\)(같은 오비탈의 두 전자 사이 반발)를 치른다.",
    "chapters": [
     "coordination-chemistry#crystal-field"
    ]
   },
   {
    "ko": "차원 분석",
    "en": "dimensional analysis",
    "abbr": "",
    "def": "이 성질을 이용해 단위를 바꾸는 방법이 차원 분석(dimensional analysis)이다.",
    "chapters": [
     "matter-measurement#dimensional"
    ]
   },
   {
    "ko": "착물",
    "en": "complex",
    "abbr": "",
    "def": "이 둘이 배위 결합해 만든 화학종을 착물(complex) 또는 착이온이라 하고, 금속에 결합한 분자·이온을 리간드(ligand)라 한다.",
    "chapters": [
     "coordination-chemistry#complexes"
    ]
   },
   {
    "ko": "착이온",
    "en": "complex ion",
    "abbr": "",
    "def": "금속 이온은 루이스 산으로서 NH₃, CN⁻, OH⁻ 같은 루이스 염기(리간드(ligand))와 결합해 착이온(complex ion)을 만든다.",
    "chapters": [
     "aqueous-equilibria#solubility-factors"
    ]
   },
   {
    "ko": "초과 반응물",
    "en": "excess reactant",
    "abbr": "",
    "def": "반응에서도 마찬가지로, 먼저 다 소모되어 생성물의 양을 정하는 반응물을 한계 반응물(limiting reactant), 남는 반응물을 초과 반응물(excess reactant)이라 한다.",
    "chapters": [
     "stoichiometry#limiting"
    ]
   },
   {
    "ko": "초기 속도",
    "en": "initial rate",
    "abbr": "",
    "def": "\\(t = 0\\)에서의 순간 속도를 특히 초기 속도(initial rate)라 한다.",
    "chapters": [
     "kinetics#rates"
    ]
   },
   {
    "ko": "초기 속도법",
    "en": "method of initial rates",
    "abbr": "",
    "def": "차수를 정하는 가장 직접적인 방법은 초기 속도법(method of initial rates)이다.",
    "chapters": [
     "kinetics#rate-laws"
    ]
   },
   {
    "ko": "초임계 유체",
    "en": "supercritical fluid",
    "abbr": "",
    "def": "임계점(critical point): 액체–기체 선이 끝나는 점. 임계 온도 \\(T_c\\)보다 높으면 아무리 압축해도 액화되지 않으며, \\(T_c\\)와 임계 압력 \\(P_c\\)를 모두 넘은 상태를 초임계 유체(supercritical fluid)라 한다.",
    "chapters": [
     "liquids-solids#phase-diagrams"
    ]
   },
   {
    "ko": "촉매",
    "en": "catalyst",
    "abbr": "",
    "def": "촉매(catalyst)는 반응 속도를 높이지만 반응이 끝난 뒤 그대로 남는 물질이다.",
    "chapters": [
     "kinetics#catalysis"
    ]
   },
   {
    "ko": "충돌 이론",
    "en": "collision theory",
    "abbr": "",
    "def": "충돌 이론(collision theory)에 따르면 분자는 충돌해야 반응하지만, 모든 충돌이 반응으로 이어지지는 않는다.",
    "chapters": [
     "kinetics#temperature"
    ]
   },
   {
    "ko": "치환 반응",
    "en": "displacement reaction",
    "abbr": "",
    "def": "아연이 전자를 구리 이온에게 넘겨주는 치환 반응(displacement reaction)이다.",
    "chapters": [
     "aqueous-reactions#redox"
    ]
   },
   {
    "ko": "친수성",
    "en": "hydrophilic",
    "abbr": "",
    "def": "물을 분산매로 하는 콜로이드에서, 표면에 극성기를 가져 물과 잘 어울리는 것을 친수성(hydrophilic)(단백질, 녹말), 그렇지 않은 것을 소수성(hydrophobic) 콜로이드라 한다.",
    "chapters": [
     "solutions#electrolytes"
    ]
   },
   {
    "ko": "침전",
    "en": "precipitate",
    "abbr": "",
    "def": "이처럼 용액끼리 반응해 녹지 않는 고체, 곧 침전(precipitate)이 생기는 반응을 침전 반응이라 한다.",
    "chapters": [
     "aqueous-reactions#precipitation"
    ]
   },
   {
    "ko": "침전 반응",
    "en": "",
    "abbr": "",
    "def": "이처럼 용액끼리 반응해 녹지 않는 고체, 곧 침전(precipitate)이 생기는 반응을 침전 반응이라 한다.",
    "chapters": [
     "aqueous-reactions#precipitation"
    ]
   },
   {
    "ko": "콜로이드",
    "en": "colloid",
    "abbr": "",
    "def": "입자 지름이 약 1–1000 nm로, 용액(< 1 nm)보다 크고 현탁액(가라앉는 입자)보다 작은 입자가 고르게 퍼진 혼합물을 콜로이드(colloid)라 한다.",
    "chapters": [
     "solutions#electrolytes"
    ]
   },
   {
    "ko": "쿨롱 법칙",
    "en": "Coulomb's law",
    "abbr": "",
    "def": "전하 \\(Q_1, Q_2\\)를 띤 두 입자가 거리 \\(d\\)만큼 떨어져 있을 때의 퍼텐셜 에너지는 쿨롱 법칙(Coulomb's law)을 따른다.",
    "chapters": [
     "chemical-bonding#ionic"
    ]
   },
   {
    "ko": "크기 성질",
    "en": "extensive",
    "abbr": "",
    "def": "성질은 또한 양에 따라 크기 성질(extensive)(질량, 부피, 열량처럼 양에 비례)과 세기 성질(intensive)(온도, 밀도, 끓는점처럼 양과 무관)으로 나뉜다.",
    "chapters": [
     "matter-measurement#classification"
    ]
   },
   {
    "ko": "킬레이트 효과",
    "en": "chelate effect",
    "abbr": "",
    "def": "이것을 킬레이트 효과(chelate effect)라 한다.",
    "chapters": [
     "coordination-chemistry#complexes"
    ]
   },
   {
    "ko": "킬레이트제",
    "en": "chelating agent, 그리스어 chele = 게의 집게발",
    "abbr": "",
    "def": "주개 원자가 하나인 리간드를 한자리 리간드, 둘 이상이어서 금속을 집게처럼 무는 리간드를 여러자리 리간드 또는 킬레이트제(chelating agent, 그리스어 chele = 게의 집게발)라 한다.",
    "chapters": [
     "coordination-chemistry#complexes"
    ]
   },
   {
    "ko": "틴들 효과",
    "en": "Tyndall effect",
    "abbr": "",
    "def": "콜로이드 입자는 빛을 산란해 빛의 경로가 보이는 틴들 효과(Tyndall effect)를 보이며(안개 속 헤드라이트 빛줄기), 거름종이를 통과하지만 반투막은 통과하지 못한다.",
    "chapters": [
     "solutions#electrolytes"
    ]
   },
   {
    "ko": "파동 함수",
    "en": "wave function",
    "abbr": "",
    "def": "그 해인 파동 함수(wave function) \\(\\psi\\)는 그 자체로는 물리적 의미가 없지만, 그 제곱 \\(\\psi^2\\)은 공간의 각 점에서 전자를 발견할 확률 밀도(probability density)를 준다.",
    "chapters": [
     "quantum-atom#orbitals"
    ]
   },
   {
    "ko": "파장",
    "en": "wavelength, λ",
    "abbr": "",
    "def": "파동은 마루와 마루 사이의 거리인 파장(wavelength, λ)과, 한 점을 1초에 지나가는 마루의 수인 진동수(frequency, ν)로 기술한다.",
    "chapters": [
     "quantum-atom#light-waves"
    ]
   },
   {
    "ko": "패러데이 상수",
    "en": "Faraday constant",
    "abbr": "",
    "def": "여기서 \\(F\\)는 전자 1 mol의 전하량, 곧 패러데이 상수(Faraday constant)다.",
    "chapters": [
     "electrochemistry#free-energy"
    ]
   },
   {
    "ko": "퍼텐셜 에너지",
    "en": "potential energy",
    "abbr": "",
    "def": "움직이는 물체가 가진 운동 에너지(kinetic energy) \\(E_k = \\tfrac12 mv^2\\)과, 위치나 배치 때문에 저장된 퍼텐셜 에너지(potential energy)로 나뉜다.",
    "chapters": [
     "thermochemistry#energy"
    ]
   },
   {
    "ko": "편극성",
    "en": "polarizability",
    "abbr": "",
    "def": "전자 구름이 얼마나 쉽게 찌그러지는지를 편극성(polarizability)이라 하며, 전자가 많고 핵에서 멀리 있을수록(분자가 클수록) 크다.",
    "chapters": [
     "liquids-solids#imf"
    ]
   },
   {
    "ko": "평균 속도",
    "en": "average rate",
    "abbr": "",
    "def": "반응물 A가 생성물 B로 바뀌는 \\(\\ce{A -> B}\\)에서, 시간 간격 \\(\\Delta t\\) 동안의 평균 속도(average rate)는.",
    "chapters": [
     "kinetics#rates"
    ]
   },
   {
    "ko": "평형",
    "en": "",
    "abbr": "",
    "def": "정확히 0 °C에서는 두 방향 어느 쪽도 우세하지 않다 — 얼음과 물이 평형에 있다.",
    "chapters": [
     "thermodynamics#spontaneous"
    ]
   },
   {
    "ko": "포화 용액",
    "en": "saturated solution",
    "abbr": "",
    "def": "녹는 속도와 석출되는 속도가 같아진 이 동적 평형 상태를 포화 용액(saturated solution), 그때의 농도를 용해도(solubility)라 한다.",
    "chapters": [
     "solutions#solubility"
    ]
   },
   {
    "ko": "폴링 척도",
    "en": "Pauling scale",
    "abbr": "",
    "def": "분자 속 원자가 결합 전자쌍을 자기 쪽으로 끌어당기는 능력. 폴링(L. Pauling)은 결합 엔탈피 자료로 상대 척도를 만들었고, 가장 큰 F를 3.98로 정했다(폴링 척도(Pauling scale)).",
    "chapters": [
     "chemical-bonding#polarity"
    ]
   },
   {
    "ko": "표면 장력",
    "en": "surface tension",
    "abbr": "",
    "def": "단위 면적만큼 표면을 넓히는 데 드는 에너지가 표면 장력(surface tension)이다(물 72.8 mJ/m², 에탄올 22.3 mJ/m², 20 °C). 물방울이 둥글고 소금쟁이가 물 위를 걷는 이유다.",
    "chapters": [
     "liquids-solids#liquid-props"
    ]
   },
   {
    "ko": "표준 몰 엔트로피",
    "en": "standard molar entropy",
    "abbr": "",
    "def": "표준 상태(1 bar, 용액은 1 M)에서 물질 1 mol의 엔트로피를 표준 몰 엔트로피(standard molar entropy) \\(S^\\circ\\)라 하며 보통 298 K 값을 표로 만든다.",
    "chapters": [
     "thermodynamics#third-law"
    ]
   },
   {
    "ko": "표준 생성 깁스 에너지",
    "en": "standard free energy of formation",
    "abbr": "",
    "def": "엔탈피처럼, 홑원소 물질의 가장 안정한 형태에서 화합물 1 mol을 만들 때의 \\(\\Delta G^\\circ\\)를 표준 생성 깁스 에너지(standard free energy of formation) \\(\\Delta G^\\circ_f\\)라 하고, 홑원소 물질의 \\(\\Delta G^\\circ_f = 0\\)으로 정한다.",
    "chapters": [
     "thermodynamics#gibbs"
    ]
   },
   {
    "ko": "표준 수소 전극",
    "en": "standard hydrogen electrode, SHE",
    "abbr": "",
    "def": "반쪽 전지 하나의 전위는 따로 잴 수 없으므로, 표준 수소 전극(standard hydrogen electrode, SHE)을 0 V로 정하고 다른 반쪽 전지를 그와 비교한다.",
    "chapters": [
     "electrochemistry#potentials"
    ]
   },
   {
    "ko": "표준 온도와 압력",
    "en": "STP",
    "abbr": "",
    "def": "0 °C(273.15 K), 1 atm을 표준 온도와 압력(STP)이라 한다.",
    "chapters": [
     "gases#ideal-gas"
    ]
   },
   {
    "ko": "표준 용액",
    "en": "standard solution",
    "abbr": "",
    "def": "농도를 정확히 아는 표준 용액(standard solution)을 뷰렛에서 조금씩 떨어뜨려, 미지 시료와 정확히 화학량론적으로 반응한 순간 — 당량점(equivalence point) — 까지 들어간 부피를 잰다.",
    "chapters": [
     "aqueous-reactions#titration"
    ]
   },
   {
    "ko": "표준 전지 전위",
    "en": "",
    "abbr": "",
    "def": "단위 전하가 산화 전극에서 환원 전극으로 갈 때 하는 일을 전지 전위(cell potential) 또는 기전력 \\(E_\\text{cell}\\)이라 한다(1 V = 1 J/C). 모든 물질이 표준 상태(용질 1 M, 기체 1 atm, 25 °C)일 때의 값이 표준 전지 전위 \\(E^\\circ_\\text{cell}\\)이다.",
    "chapters": [
     "electrochemistry#potentials"
    ]
   },
   {
    "ko": "표준 환원 전위",
    "en": "standard reduction potential",
    "abbr": "",
    "def": "반쪽 반응을 환원 방향으로 썼을 때의 전위가 표준 환원 전위(standard reduction potential) \\(E^\\circ_\\text{red}\\)다.",
    "chapters": [
     "electrochemistry#potentials"
    ]
   },
   {
    "ko": "하이드로늄 이온",
    "en": "hydronium ion",
    "abbr": "",
    "def": "수용액에서 맨 양성자 \\(\\ce{H+}\\)는 홀로 존재하지 않고 물 분자에 붙어 하이드로늄 이온(hydronium ion) \\(\\ce{H3O+}\\)(실제로는 더 많은 물 분자와 수화된 \\(\\ce{H(H2O)_n+}\\))가 된다.",
    "chapters": [
     "acids-bases#definitions"
    ]
   },
   {
    "ko": "한계 반응물",
    "en": "limiting reactant",
    "abbr": "",
    "def": "반응에서도 마찬가지로, 먼저 다 소모되어 생성물의 양을 정하는 반응물을 한계 반응물(limiting reactant), 남는 반응물을 초과 반응물(excess reactant)이라 한다.",
    "chapters": [
     "stoichiometry#limiting"
    ]
   },
   {
    "ko": "한자리 리간드",
    "en": "",
    "abbr": "",
    "def": "주개 원자가 하나인 리간드를 한자리 리간드, 둘 이상이어서 금속을 집게처럼 무는 리간드를 여러자리 리간드 또는 킬레이트제(chelating agent, 그리스어 chele = 게의 집게발)라 한다.",
    "chapters": [
     "coordination-chemistry#complexes"
    ]
   },
   {
    "ko": "함석",
    "en": "",
    "abbr": "",
    "def": "아연을 입힌 함석(아연 도금 강판)은 흠집이 나도 아연(−0.76 V)이 철(−0.44 V)보다 먼저 산화되어 철을 환원 전극으로 만든다.",
    "chapters": [
     "electrochemistry#batteries"
    ]
   },
   {
    "ko": "해리",
    "en": "dissociation",
    "abbr": "",
    "def": "이것이 해리(dissociation)다.",
    "chapters": [
     "aqueous-reactions#electrolytes"
    ]
   },
   {
    "ko": "핵",
    "en": "nucleus",
    "abbr": "",
    "def": "1897–1911년 사이의 세 실험이 이 그림을 무너뜨리고, 원자가 전자(electron), 양성자(proton), 중성자(neutron)로 되어 있으며 거의 모든 질량이 아주 작은 핵(nucleus)에 모여 있음을 밝혔다.",
    "chapters": [
     "atoms-molecules-ions#atomic-structure"
    ]
   },
   {
    "ko": "핵결합 에너지",
    "en": "nuclear binding energy",
    "abbr": "",
    "def": "핵을 낱낱의 핵자로 떼어 놓는 데 필요한 에너지를 핵결합 에너지(nuclear binding energy)라 한다.",
    "chapters": [
     "nuclear-chemistry#mass-energy"
    ]
   },
   {
    "ko": "핵변환",
    "en": "nuclear transmutation",
    "abbr": "",
    "def": "핵을 다른 입자로 때려 새로운 핵을 만드는 것을 핵변환(nuclear transmutation)이라 한다.",
    "chapters": [
     "nuclear-chemistry#stability"
    ]
   },
   {
    "ko": "핵분열",
    "en": "",
    "abbr": "",
    "def": "무거운 핵(U, Pu 쪽)은 쪼개져서(핵분열) 왼쪽으로 갈 때 에너지를 낸다.",
    "chapters": [
     "nuclear-chemistry#mass-energy"
    ]
   },
   {
    "ko": "핵융합",
    "en": "",
    "abbr": "",
    "def": "가벼운 핵(H, He 쪽)은 합쳐져서(핵융합) 오른쪽으로 갈 때 에너지를 낸다.",
    "chapters": [
     "nuclear-chemistry#mass-energy"
    ]
   },
   {
    "ko": "핵자당 결합 에너지",
    "en": "",
    "abbr": "",
    "def": "서로 다른 핵의 안정성을 비교하려면 결합 에너지를 핵자 수로 나눈 핵자당 결합 에너지 \\(E_b/A\\)를 쓴다.",
    "chapters": [
     "nuclear-chemistry#mass-energy"
    ]
   },
   {
    "ko": "핵종",
    "en": "nuclide",
    "abbr": "",
    "def": "핵을 이야기할 때는 원소 기호에 두 숫자를 붙인 핵종(nuclide) 기호를 쓴다.",
    "chapters": [
     "nuclear-chemistry#radioactivity"
    ]
   },
   {
    "ko": "헨리 법칙 상수",
    "en": "Henry's law constant",
    "abbr": "",
    "def": "\\(S_g\\): 기체의 용해도(보통 mol/L), \\(P_g\\): 용액 위 그 기체의 분압, \\(k_H\\): 헨리 법칙 상수(Henry's law constant)로 기체·용매·온도에 따라 다르다.",
    "chapters": [
     "solutions#solubility"
    ]
   },
   {
    "ko": "형성 상수",
    "en": "formation constant",
    "abbr": "",
    "def": "그 평형 상수를 형성 상수(formation constant) \\(K_f\\)라 한다.",
    "chapters": [
     "aqueous-equilibria#solubility-factors"
    ]
   },
   {
    "ko": "형식 전하",
    "en": "formal charge",
    "abbr": "",
    "def": "어느 것이 실제에 가까운지 판단하는 장부가 형식 전하(formal charge)다.",
    "chapters": [
     "chemical-bonding#lewis-structures"
    ]
   },
   {
    "ko": "혼성 오비탈",
    "en": "hybrid orbital",
    "abbr": "",
    "def": "이것이 혼성 오비탈(hybrid orbital)이다.",
    "chapters": [
     "molecular-geometry#hybrid"
    ]
   },
   {
    "ko": "혼합물",
    "en": "mixture",
    "abbr": "",
    "def": "혼합물(mixture): 두 가지 이상의 물질이 화학 결합 없이 섞인 것. 성분이 각자의 성질을 유지하고 조성이 변할 수 있다.",
    "chapters": [
     "matter-measurement#classification"
    ]
   },
   {
    "ko": "화학",
    "en": "chemistry",
    "abbr": "",
    "def": "화학(chemistry)은 물질의 조성·구조·성질과 그 변화를 연구하는 학문이다.",
    "chapters": [
     "matter-measurement#chemistry"
    ]
   },
   {
    "ko": "화학 평형",
    "en": "chemical equilibrium",
    "abbr": "",
    "def": "이 상태를 화학 평형(chemical equilibrium)이라 한다.",
    "chapters": [
     "equilibrium#dynamic"
    ]
   },
   {
    "ko": "화합물",
    "en": "compound",
    "abbr": "",
    "def": "화합물(compound): 두 가지 이상의 원소가 일정한 질량비로 결합한 물질. 물은 어디서 얻든 질량으로 수소 11.19%, 산소 88.81%이다(일정 성분비 법칙, 2장).",
    "chapters": [
     "matter-measurement#classification"
    ]
   },
   {
    "ko": "확률 밀도",
    "en": "probability density",
    "abbr": "",
    "def": "그 해인 파동 함수(wave function) \\(\\psi\\)는 그 자체로는 물리적 의미가 없지만, 그 제곱 \\(\\psi^2\\)은 공간의 각 점에서 전자를 발견할 확률 밀도(probability density)를 준다.",
    "chapters": [
     "quantum-atom#orbitals"
    ]
   },
   {
    "ko": "환산 인자",
    "en": "conversion factor",
    "abbr": "",
    "def": "같은 양을 두 단위로 쓴 등식, 예컨대 1 in = 2.54 cm에서 두 가지 환산 인자(conversion factor)를 만들 수 있다.",
    "chapters": [
     "matter-measurement#dimensional"
    ]
   },
   {
    "ko": "환원",
    "en": "reduction",
    "abbr": "",
    "def": "전자를 잃는 것을 산화(oxidation), 얻는 것을 환원(reduction)이라 한다.",
    "chapters": [
     "aqueous-reactions#redox"
    ]
   },
   {
    "ko": "환원제",
    "en": "reducing agent",
    "abbr": "",
    "def": "\"산화는 전자를 잃고, 환원은 얻는다.\" 영어로는 OIL RIG(Oxidation Is Loss, Reduction Is Gain). 자신은 환원되면서 상대를 산화시키는 물질이 산화제(oxidizing agent), 자신은 산화되면서 상대를 환원시키는 물질이 환원제(reducing agent)다.",
    "chapters": [
     "aqueous-reactions#redox"
    ]
   },
   {
    "ko": "활동도 계열",
    "en": "activity series",
    "abbr": "",
    "def": "금속이 산화되기 쉬운 순서로 늘어놓은 목록을 활동도 계열(activity series)이라 한다.",
    "chapters": [
     "aqueous-reactions#redox"
    ]
   },
   {
    "ko": "활성화 에너지",
    "en": "activation energy",
    "abbr": "",
    "def": "에너지 조건: 충돌하는 분자의 운동 에너지가 어떤 최소값, 곧 활성화 에너지(activation energy) \\(E_a\\) 이상이어야 한다.",
    "chapters": [
     "kinetics#temperature"
    ]
   },
   {
    "ko": "활성화 착물",
    "en": "activated complex",
    "abbr": "",
    "def": "반응물이 생성물로 바뀌는 도중, 에너지가 가장 높은 지점의 불안정한 원자 배열을 활성화 착물(activated complex) 또는 전이 상태(transition state)라 한다.",
    "chapters": [
     "kinetics#temperature"
    ]
   },
   {
    "ko": "효소",
    "en": "enzyme",
    "abbr": "",
    "def": "효소(enzyme)는 생체의 단백질 촉매로, 속도를 10⁶–10¹⁷배까지 높인다.",
    "chapters": [
     "kinetics#catalysis"
    ]
   },
   {
    "ko": "휘발성",
    "en": "volatile",
    "abbr": "",
    "def": "분자 간 힘이 약한 액체일수록 증기압이 크고 휘발성(volatile)이라 한다.",
    "chapters": [
     "liquids-solids#vapor-pressure"
    ]
   },
   {
    "ko": "흡열",
    "en": "endothermic",
    "abbr": "",
    "def": "\\(\\Delta H > 0\\)이면 흡열(endothermic), \\(\\Delta H < 0\\)이면 발열(exothermic) 과정이다.",
    "chapters": [
     "thermochemistry#enthalpy"
    ]
   },
   {
    "ko": "희생 양극",
    "en": "sacrificial anode",
    "abbr": "",
    "def": "선박이나 지하 배관에 마그네슘·아연 덩어리를 연결하는 희생 양극(sacrificial anode) 법, 곧 음극화 보호도 같은 원리다.",
    "chapters": [
     "electrochemistry#batteries"
    ]
   }
  ]
 }
});
