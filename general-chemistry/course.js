/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "general-chemistry",
 "title": "일반화학",
 "en": "General Chemistry",
 "field": "chemistry",
 "level": "대학 1학년 · 일반화학 I·II",
 "status": "writing",
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
     ],
     "status": "planned"
    }
   ]
  }
 ],
 "stats": {
  "matter-measurement": {
   "problems": 15,
   "examples": 8,
   "sims": 3,
   "figures": 5,
   "drills": 2
  },
  "atoms-molecules-ions": {
   "problems": 15,
   "examples": 7,
   "sims": 4,
   "figures": 6,
   "drills": 2
  },
  "stoichiometry": {
   "problems": 13,
   "examples": 9,
   "sims": 3,
   "figures": 4,
   "drills": 2
  },
  "aqueous-reactions": {
   "problems": 14,
   "examples": 9,
   "sims": 4,
   "figures": 5,
   "drills": 2
  },
  "gases": {
   "problems": 13,
   "examples": 7,
   "sims": 3,
   "figures": 2,
   "drills": 1
  },
  "thermochemistry": {
   "problems": 15,
   "examples": 8,
   "sims": 4,
   "figures": 6,
   "drills": 2
  },
  "quantum-atom": {
   "problems": 16,
   "examples": 10,
   "sims": 4,
   "figures": 4,
   "drills": 1
  },
  "periodic-properties": {
   "problems": 13,
   "examples": 7,
   "sims": 4,
   "figures": 3,
   "drills": 1
  },
  "chemical-bonding": {
   "problems": 14,
   "examples": 8,
   "sims": 4,
   "figures": 4,
   "drills": 1
  },
  "molecular-geometry": {
   "problems": 14,
   "examples": 7,
   "sims": 4,
   "figures": 5,
   "drills": 2
  },
  "liquids-solids": {
   "problems": 14,
   "examples": 7,
   "sims": 4,
   "figures": 5,
   "drills": 2
  },
  "solutions": {
   "problems": 14,
   "examples": 8,
   "sims": 4,
   "figures": 3,
   "drills": 2
  },
  "kinetics": {
   "problems": 15,
   "examples": 7,
   "sims": 4,
   "figures": 4,
   "drills": 2
  },
  "equilibrium": {
   "problems": 14,
   "examples": 8,
   "sims": 4,
   "figures": 4,
   "drills": 2
  },
  "acids-bases": {
   "problems": 14,
   "examples": 8,
   "sims": 4,
   "figures": 4,
   "drills": 2
  },
  "aqueous-equilibria": {
   "problems": 15,
   "examples": 8,
   "sims": 3,
   "figures": 3,
   "drills": 2
  },
  "thermodynamics": {
   "problems": 13,
   "examples": 9,
   "sims": 4,
   "figures": 4,
   "drills": 1
  },
  "electrochemistry": {
   "problems": 14,
   "examples": 8,
   "sims": 4,
   "figures": 6,
   "drills": 2
  },
  "nuclear-chemistry": {
   "problems": 14,
   "examples": 9,
   "sims": 4,
   "figures": 4,
   "drills": 2
  },
  "coordination-chemistry": {
   "problems": 15,
   "examples": 8,
   "sims": 3,
   "figures": 4,
   "drills": 2
  },
  "periodic-table": {
   "problems": 0,
   "examples": 0,
   "sims": 1,
   "figures": 0,
   "drills": 0
  },
  "data-tables": {
   "problems": 0,
   "examples": 0,
   "sims": 0,
   "figures": 0,
   "drills": 0
  }
 },
 "published": 22,
 "total": 23,
 "url": "https://science.euiyun.com/general-chemistry/"
});
