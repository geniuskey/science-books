/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "materials-science",
 "title": "재료과학",
 "en": "Materials Science and Engineering",
 "field": "materials",
 "level": "대학 2–3학년 · 반도체 기초",
 "status": "writing",
 "description": "원자 결합과 결정 구조, 결함과 확산에서 출발해 탄성·소성·파괴·피로·크리프, 상태도와 미세조직, 상변태 속도론, 응고와 박막 미세조직, 금속·세라믹·고분자·복합재료, 전기·유전·열·광학 성질, 열화와 신뢰성, 재료 분석까지 — 결정립을 키우고 전위를 움직이고 균열을 자라게 하며 칩 속 재료가 왜 그렇게 고르고 다듬어졌는지 익히는 인터랙티브 교과서.",
 "accent": {
  "light": "#4338ca",
  "dark": "#818cf8",
  "light2": "#a16207",
  "dark2": "#facc15"
 },
 "mark": "<path d=\"M16 4l10.4 6v12L16 28 5.6 22V10z\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/><path d=\"M16 4v8.5M5.6 10l7.4 4.3M26.4 10L19 14.3M16 28v-8.5M5.6 22l7.4-4.3M26.4 22L19 17.7\" stroke=\"#fff\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><circle cx=\"16\" cy=\"16\" r=\"3.4\" fill=\"#fff\"/>",
 "parts": [
  {
   "title": "제1부 구조와 결함",
   "chapters": [
    {
     "slug": "materials-selection",
     "num": "01",
     "title": "재료와 재료 선택",
     "en": "Materials and Materials Selection",
     "desc": "금속·세라믹·고분자·반도체·복합재료의 분류, 구조–공정–성질–성능의 관계, 재료 성질의 범위와 단위, 애시비 성질 지도와 성능 지수(가볍고 강한 보, 열충격, 열 분산), 재료 선택의 절차와 절충 — 칩 한 개 속에 들어간 재료 지도.",
     "tags": [
      "애시비 도표",
      "성능 지수"
     ]
    },
    {
     "slug": "bonding-crystal-structure",
     "num": "02",
     "title": "원자 결합과 결정 구조",
     "en": "Atomic Bonding and Crystal Structure",
     "desc": "결합 에너지 곡선과 탄성률·녹는점·열팽창의 관계, 금속 결합과 FCC·BCC·HCP, 원자 충진율과 이론 밀도, 틈새 자리, 이온 결정의 반지름 비와 배위수(NaCl·CsCl·형석·페로브스카이트), 공유 결정(다이아몬드·섬아연석·우르짜이트), 다형과 동소체, 단결정·다결정·비정질, 밀러 지수와 선·면 밀도 — 실리콘 웨이퍼와 GaN·SiC 기판.",
     "tags": [
      "FCC·BCC·HCP",
      "배위수"
     ]
    },
    {
     "slug": "defects",
     "num": "03",
     "title": "결정 결함",
     "en": "Imperfections in Solids",
     "desc": "공공과 틈새 원자의 평형 농도, 쇼트키·프렌켈 결함과 크뢰거–빙크 표기, 치환·틈새 고용체와 흄–로더리 규칙, 전위(칼날·나사·혼합)와 버거스 벡터, 전위의 응력장과 에너지, 결정립계·쌍정·적층 결함, 결정립 크기 측정(ASTM 번호·선분 교차법), 기공과 석출물 — 웨이퍼 슬립과 결함 검사.",
     "tags": [
      "전위",
      "결정립계"
     ]
    },
    {
     "slug": "diffusion-in-materials",
     "num": "04",
     "title": "재료 속 확산",
     "en": "Diffusion in Materials",
     "desc": "확산 기구 복습과 상관 인자, 상호 확산과 다르켄 식, 커켄달 효과와 보이드, 볼츠만–마타노 해석, 결정립계·전위·표면을 따라가는 단회로 확산(해리슨 A·B·C 영역), 이온 결정과 산화물 속 확산, 반응 확산과 금속간 화합물 성장, 확산 방벽(Ta/TaN·TiN) — 구리 배선 방벽과 실리사이드 형성.",
     "tags": [
      "커켄달 효과",
      "확산 방벽"
     ]
    }
   ]
  },
  {
   "title": "제2부 기계적 성질",
   "chapters": [
    {
     "slug": "elasticity",
     "num": "05",
     "title": "응력·변형과 탄성",
     "en": "Stress, Strain, and Elasticity",
     "desc": "응력·변형 텐서와 주응력, 모어 원, 등방성 훅 법칙과 E·ν·G·K, 탄성률의 원자적 기원, 단결정 실리콘의 이방성 탄성, 열변형과 열응력, 박막 응력과 스토니 식, 이층판의 휨과 웨이퍼 휨(bow·warp), 폰 미제스 등가 응력 — 박막 증착 응력과 웨이퍼 휨 측정.",
     "tags": [
      "훅 법칙",
      "스토니 식"
     ]
    },
    {
     "slug": "plasticity-strengthening",
     "num": "06",
     "title": "소성 변형과 강화 기구",
     "en": "Plastic Deformation and Strengthening",
     "desc": "인장 시험(공칭·진응력, 항복·인장 강도·연신율, 홀로몬 식과 네킹), 전위 운동과 슬립계, 슈미트 법칙과 임계 분해 전단 응력, 전위 증식과 가공 경화(테일러 식), 결정립 미세화(홀–페치)·고용·석출(오로완) 강화, 경도와 나노압입(올리버–파르), 회복·재결정·결정립 성장 — 배선 금속의 강도와 나노압입 측정.",
     "tags": [
      "슈미트 법칙",
      "홀–페치"
     ]
    },
    {
     "slug": "fracture-fatigue-creep",
     "num": "07",
     "title": "파괴·피로·크리프",
     "en": "Fracture, Fatigue, and Creep",
     "desc": "이론 강도와 결함, 그리피스 이론, 응력 확대 계수와 파괴 인성, 연성–취성 전이, 와이블 통계와 크기 효과, 피로(S–N 곡선·바스킨·코핀–맨슨·평균 응력·마이너 법칙)와 파리스 균열 성장, 크리프 단계와 노턴 식, 라슨–밀러 변수, 변형 기구 지도 — 다이 강도와 웨이퍼 파손, 솔더 접합 피로.",
     "tags": [
      "파괴 인성",
      "와이블 강도"
     ]
    }
   ]
  },
  {
   "title": "제3부 상변태와 미세조직",
   "chapters": [
    {
     "slug": "phase-diagrams-microstructure",
     "num": "08",
     "title": "상태도와 미세조직",
     "en": "Phase Diagrams and Microstructure",
     "desc": "상태도 읽기 복습(상·조성·분율), 전율 고용체의 냉각과 유핵 조직, 공정계(Pb–Sn·Sn–Ag–Cu)의 아공정·공정·과공정 조직과 미세 구성 요소, 공석 반응과 Fe–Fe₃C 상태도, 펄라이트·초석 페라이트·시멘타이트, 포정 반응, 금속간 화합물(Cu–Sn·Ni–Sn), 삼원 상태도 읽기 — 무연 솔더와 범프의 IMC.",
     "tags": [
      "공정 조직",
      "Fe–C 상태도"
     ]
    },
    {
     "slug": "transformation-kinetics",
     "num": "09",
     "title": "상변태 속도론",
     "en": "Kinetics of Phase Transformations",
     "desc": "고체 속 핵생성(균질·불균질, 변형 에너지), 핵생성 속도와 성장 속도의 과냉 의존성, 존슨–멜–아브라미(JMAK) 식과 아브라미 지수, TTT·CCT 도표와 강의 열처리, 마르텐사이트 변태(코이스티넨–마르부르거), 석출 경화와 시효, 오스트발트 숙성(LSW), 스피노달 분해(칸–힐리아드) — 비정질 실리콘의 고상 결정화.",
     "tags": [
      "JMAK 식",
      "TTT 도표"
     ]
    },
    {
     "slug": "solidification-growth",
     "num": "10",
     "title": "응고·결정 성장과 박막 미세조직",
     "en": "Solidification, Crystal Growth, and Thin-Film Microstructure",
     "desc": "응고의 과냉과 계면, 조성적 과냉과 셀·덴드라이트, 덴드라이트 팔 간격과 냉각 속도, 초크랄스키 성장의 열 균형과 V/G(보론코프) 기준, 에피택시와 격자 불일치, 박막 구조 영역 모형(손턴), 결정립 성장(정상·비정상)과 포츠 모형, 집합 조직, 구리 자가 어닐링과 레이저 어닐 — 잉곳의 COP와 배선 결정립.",
     "tags": [
      "조성적 과냉",
      "구조 영역 모형"
     ]
    }
   ]
  },
  {
   "title": "제4부 재료의 종류",
   "chapters": [
    {
     "slug": "metals-alloys",
     "num": "11",
     "title": "금속과 합금",
     "en": "Metals and Alloys",
     "desc": "철강의 분류와 열처리(담금질·뜨임·경화능), 알루미늄·구리·티타늄·니켈 합금, 내화 금속(W·Mo·Ta), 형상 기억 합금, 금속 가공(주조·압연·단조·분말 야금)과 가공 경화, 배선 금속의 선택(Al→Cu→Co·Ru, 저항률과 평균 자유 행로), 솔더와 접합 금속 — 텅스텐 플러그와 차세대 배선 금속.",
     "tags": [
      "열처리",
      "배선 금속"
     ]
    },
    {
     "slug": "ceramics-glasses",
     "num": "12",
     "title": "세라믹과 유리",
     "en": "Ceramics and Glasses",
     "desc": "세라믹의 결합과 결정 구조, 규산염 사면체와 실리카, 유리의 구조와 유리 전이, 점도–온도 관계(VFT)와 작업점, 소결의 구동력과 치밀화, 세라믹의 취성·강도 분포·열충격 저항, 구조·기능 세라믹(Al₂O₃·AlN·SiC·Si₃N₄·ZrO₂·Y₂O₃) — 석영 부품, 정전척, 플라스마 내식 코팅.",
     "tags": [
      "유리 전이",
      "소결"
     ]
    },
    {
     "slug": "polymers",
     "num": "13",
     "title": "고분자",
     "en": "Polymers",
     "desc": "중합과 사슬 구조, 분자량 분포(Mₙ·M_w·분산도), 무작위 걸음 사슬과 회전 반지름, 결정도와 구정, 유리 전이(폭스 식·WLF 식), 점탄성(맥스웰·켈빈–보이트·표준 선형 고체, 응력 완화와 크리프, 저장·손실 탄성률), 고무 탄성의 엔트로피 기원, 열경화성 수지의 경화와 겔화 — 포토레지스트, 폴리이미드, EMC·언더필, CMP 패드.",
     "tags": [
      "유리 전이",
      "점탄성"
     ]
    },
    {
     "slug": "composites",
     "num": "14",
     "title": "복합재료",
     "en": "Composite Materials",
     "desc": "복합재료의 분류, 혼합 법칙과 보이트·로이스 경계, 하신–슈트리크만 경계, 섬유 강화(하중 분담·임계 섬유 길이·이방성), 할핀–차이 식, 입자 충전재의 열팽창(터너·커너)과 열전도(맥스웰), 적층판과 휨, 복합재료의 파괴 — 패키지 기판·EMC 충전재·열계면 재료(TIM).",
     "tags": [
      "혼합 법칙",
      "충전재"
     ]
    }
   ]
  },
  {
   "title": "제5부 기능 성질과 신뢰성",
   "chapters": [
    {
     "slug": "electrical-properties",
     "num": "15",
     "title": "전기적·유전적 성질",
     "en": "Electrical and Dielectric Properties",
     "desc": "전도도의 범위와 띠 그림, 금속 저항률(마티센 규칙·온도 계수·노르트하임 합금 저항), 박막·배선 저항과 크기 효과, 반도체 도핑과 저항률, 이온 전도, 분극 기구와 유전율의 주파수 의존(디바이 완화), 유전 손실과 절연 파괴, 강유전체·압전체와 이력 곡선, high-k와 EOT — 게이트 절연막과 강유전 메모리 재료.",
     "tags": [
      "마티센 규칙",
      "유전 완화"
     ]
    },
    {
     "slug": "thermal-optical-properties",
     "num": "16",
     "title": "열적·광학적 성질",
     "en": "Thermal and Optical Properties",
     "desc": "열용량 복습, 열팽창의 원자적 기원(비조화 퍼텐셜)과 그뤼나이젠 관계, 열팽창 불일치, 열전도(전자·포논, 비데만–프란츠, 박막과 계면 열저항), 열충격 저항, 빛과 재료(굴절·반사·흡수·투과), 분산식(코시·셀마이어), 띠틈과 색·투명도, 타우크 그림, 발광과 투명 전도막 — 패키지 열 설계와 광학 박막 재료.",
     "tags": [
      "열팽창",
      "굴절률"
     ]
    },
    {
     "slug": "degradation-reliability",
     "num": "17",
     "title": "재료 열화와 신뢰성",
     "en": "Materials Degradation and Reliability",
     "desc": "고온 산화와 필링–베드워스 비, 산화 속도 법칙, 부식의 형태(균일·공식·틈·갈바닉·응력 부식), 일렉트로마이그레이션(블랙 식·블레흐 길이·보이드와 힐록), 응력 이동, 열기계 피로와 솔더 접합 수명(노리스–란츠베르크), 주석 휘스커, 수분 흡수와 팝콘 균열, 고분자 열화 — 배선·패키지 신뢰성 시험.",
     "tags": [
      "일렉트로마이그레이션",
      "블랙 식"
     ]
    },
    {
     "slug": "characterization",
     "num": "18",
     "title": "재료 분석과 특성 평가",
     "en": "Materials Characterization",
     "desc": "X선 회절(상 분석·셰러 결정립 크기·윌리엄슨–홀·sin²ψ 잔류 응력·집합 조직), 전자–시료 상호작용과 상호작용 부피, SEM·TEM의 분해능과 대비, EDS와 특성 X선(모즐리 법칙), XPS와 결합 에너지·분석 깊이, SIMS 깊이 분포, AFM 거칠기, 분석법 고르기 — 불량 분석과 공정 계측.",
     "tags": [
      "XRD",
      "SIMS"
     ]
    }
   ]
  },
  {
   "title": "부록",
   "appendix": true,
   "chapters": [
    {
     "slug": "materials-data",
     "num": "A",
     "title": "재료 물성 자료와 계산기",
     "en": "Materials Property Data and Calculators",
     "desc": "금속·세라믹·고분자·반도체·복합재료의 밀도·탄성률·강도·파괴 인성·열팽창·열전도·저항률·유전율을 표·성질 지도·계산기로 찾고, 자주 쓰는 공식을 한곳에 모았다.",
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
  "materials-selection": {
   "problems": 16,
   "examples": 8,
   "sims": 5,
   "figures": 11,
   "drills": 3,
   "minis": 4,
   "tangles": 4,
   "steps": 4,
   "predicts": 5,
   "hero": 1
  },
  "bonding-crystal-structure": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 13,
   "drills": 4,
   "minis": 7,
   "tangles": 5,
   "steps": 3,
   "predicts": 6,
   "hero": 1
  },
  "defects": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 12,
   "drills": 4,
   "minis": 6,
   "tangles": 7,
   "steps": 2,
   "predicts": 5,
   "hero": 1
  },
  "diffusion-in-materials": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 14,
   "drills": 5,
   "minis": 7,
   "tangles": 6,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "elasticity": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 14,
   "drills": 4,
   "minis": 7,
   "tangles": 5,
   "steps": 3,
   "predicts": 6,
   "hero": 1
  },
  "plasticity-strengthening": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 13,
   "drills": 4,
   "minis": 6,
   "tangles": 5,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "fracture-fatigue-creep": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 15,
   "drills": 5,
   "minis": 8,
   "tangles": 8,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "phase-diagrams-microstructure": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 12,
   "drills": 4,
   "minis": 5,
   "tangles": 5,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "transformation-kinetics": {
   "problems": 16,
   "examples": 8,
   "sims": 9,
   "figures": 11,
   "drills": 3,
   "minis": 5,
   "tangles": 7,
   "steps": 3,
   "predicts": 6,
   "hero": 1
  },
  "solidification-growth": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 11,
   "drills": 4,
   "minis": 5,
   "tangles": 6,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "metals-alloys": {
   "problems": 16,
   "examples": 7,
   "sims": 6,
   "figures": 15,
   "drills": 4,
   "minis": 6,
   "tangles": 6,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "ceramics-glasses": {
   "problems": 16,
   "examples": 9,
   "sims": 6,
   "figures": 13,
   "drills": 4,
   "minis": 6,
   "tangles": 7,
   "steps": 4,
   "predicts": 6,
   "hero": 1
  },
  "polymers": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 11,
   "drills": 4,
   "minis": 6,
   "tangles": 7,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "composites": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 11,
   "drills": 4,
   "minis": 5,
   "tangles": 7,
   "steps": 3,
   "predicts": 6,
   "hero": 1
  },
  "electrical-properties": {
   "problems": 16,
   "examples": 8,
   "sims": 8,
   "figures": 13,
   "drills": 4,
   "minis": 7,
   "tangles": 6,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "thermal-optical-properties": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 13,
   "drills": 4,
   "minis": 7,
   "tangles": 5,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "degradation-reliability": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 12,
   "drills": 3,
   "minis": 5,
   "tangles": 7,
   "steps": 4,
   "predicts": 5,
   "hero": 1
  },
  "characterization": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 13,
   "drills": 4,
   "minis": 7,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "materials-data": {
   "problems": 15,
   "examples": 0,
   "sims": 17,
   "figures": 8,
   "drills": 0,
   "minis": 8,
   "tangles": 4,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "glossary": {
   "problems": 70,
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
 "published": 20,
 "total": 20,
 "url": "https://science.euiyun.com/materials-science/",
 "glossary": {
  "version": 1,
  "terms": [
   {
    "ko": "0.2 % 오프셋 항복 강도",
    "en": "0.2 % offset yield strength",
    "abbr": "",
    "def": "탄성 직선을 변형 0.002만큼 평행 이동한 선이 응력–변형 곡선과 만나는 응력. 영구 변형 0.2 %에 해당한다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "2차 결합",
    "en": "secondary bond",
    "abbr": "",
    "def": "반데르발스 힘·수소 결합처럼 영구·유도 쌍극자 사이의 약한 결합. 고분자 사슬 사이를 묶으며 고분자의 낮은 탄성률과 유리 전이를 정한다.",
    "chapters": [
     "materials-selection#classes"
    ]
   },
   {
    "ko": "2차 덴드라이트 팔 간격",
    "en": "secondary dendrite arm spacing, SDAS",
    "abbr": "",
    "def": "덴드라이트 줄기에서 옆으로 난 2차 팔 사이의 거리 \\(\\lambda_2\\). 국부 응고 시간의 세제곱근에 비례해 \\(\\lambda_2 = A\\dot T^{-n}\\)로 냉각 속도와 이어진다.",
    "chapters": [
     "solidification-growth#casting"
    ]
   },
   {
    "ko": "γ′",
    "en": "gamma prime",
    "abbr": "",
    "def": "니켈 초합금의 FCC γ 기지 속에 정합하게 석출하는 L1₂ 규칙 격자 Ni₃Al 상. 전위가 자르기 어렵고 온도가 오를수록 강해져 고온 강도의 원천이 된다.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "ASTM 결정립 크기 번호",
    "en": "ASTM grain size number",
    "abbr": "",
    "def": "100배 사진 1 in² 안의 결정립 수 \\(N\\)과 \\(N = 2^{G-1}\\)로 정의되는 결정립 크기 지표 \\(G\\). 클수록 결정립이 작다.",
    "chapters": [
     "defects#grain-size"
    ]
   },
   {
    "ko": "CCT 도표",
    "en": "continuous-cooling-transformation diagram",
    "abbr": "",
    "def": "일정한 속도로 연속 냉각할 때 변태가 시작·완료되는 점을 이은 연속 냉각 변태 도표. TTT 곡선보다 늦은 시간, 낮은 온도 쪽에 놓인다.",
    "chapters": [
     "transformation-kinetics#ttt-cct"
    ]
   },
   {
    "ko": "DNP",
    "en": "distance from neutral point",
    "abbr": "",
    "def": "다이·패키지의 중립점(보통 중심)에서 접합까지의 거리. 열팽창 불일치로 생기는 상대 변위와 솔더 전단 변형이 이 거리에 비례한다.",
    "chapters": [
     "thermal-optical-properties#thermal-stress"
    ]
   },
   {
    "ko": "GP 영역",
    "en": "Guinier–Preston zone",
    "abbr": "",
    "def": "과포화 Al–Cu 합금에서 구리 원자가 {100}면에 한두 원자층 원반으로 모인 정합 석출 영역. 석출 순서의 첫 단계다.",
    "chapters": [
     "transformation-kinetics#precipitation"
    ]
   },
   {
    "ko": "HAADF",
    "en": "high-angle annular dark field",
    "abbr": "",
    "def": "STEM에서 고각으로 산란된 전자를 고리 검출기로 모아 만든 비간섭성 상. 세기가 대략 \\(Z^{1.7}\\)에 비례해 무거운 원자가 밝다.",
    "chapters": [
     "characterization#microscopy"
    ]
   },
   {
    "ko": "OSF 고리",
    "en": "oxidation-induced stacking fault ring",
    "abbr": "",
    "def": "공공형과 틈새형 영역 경계 근처 공공형 쪽에 산소 석출이 몰려, 산화하면 적층 결함이 고리 모양으로 나타나는 영역.",
    "chapters": [
     "solidification-growth#czochralski"
    ]
   },
   {
    "ko": "SAC 솔더",
    "en": "Sn–Ag–Cu solder",
    "abbr": "",
    "def": "Sn에 Ag와 Cu를 조금 넣은 무연 솔더. 대표 조성 SAC305(Sn–3.0Ag–0.5Cu)는 약 217 °C의 삼원 공정점 근처에서 녹으며 β-Sn + Ag₃Sn + Cu₆Sn₅ 조직으로 굳는다.",
    "chapters": [
     "phase-diagrams-microstructure#eutectic"
    ]
   },
   {
    "ko": "S–N 곡선",
    "en": "S–N curve",
    "abbr": "",
    "def": "응력 진폭 \\(S\\)와 파단 반복 수 \\(N_f\\)의 관계를 그린 피로 수명 곡선. 보통 \\(N_f\\)를 로그 축으로 그린다.",
    "chapters": [
     "fracture-fatigue-creep#fatigue"
    ]
   },
   {
    "ko": "TTT 도표",
    "en": "time–temperature–transformation diagram",
    "abbr": "",
    "def": "모상을 일정 온도로 급히 옮겨 유지할 때 변태가 시작·진행·완료되는 시간을 온도별로 그린 항온 변태 도표. 강에서는 펄라이트·베이나이트의 C 곡선과 \\(M_s\\)선이 나타난다.",
    "chapters": [
     "transformation-kinetics#ttt-cct"
    ]
   },
   {
    "ko": "UBM",
    "en": "under bump metallization",
    "abbr": "",
    "def": "칩의 패드와 솔더 범프 사이에 까는 금속 다층막(접착층–Ni 확산 방벽–젖음층). 솔더가 아래 금속을 소모하지 않게 하고 젖음을 돕는다.",
    "chapters": [
     "metals-alloys#joining"
    ]
   },
   {
    "ko": "VFT 식",
    "en": "Vogel–Fulcher–Tammann equation",
    "abbr": "",
    "def": "유리 액체의 점도를 \\(\\log\\eta = A + B/(T-T_0)\\)로 나타내는 경험식. 저온에서 아레니우스보다 가파르게 오른다.",
    "chapters": [
     "ceramics-glasses#viscosity"
    ]
   },
   {
    "ko": "WLF 식",
    "en": "Williams–Landel–Ferry equation",
    "abbr": "",
    "def": "윌리엄스–랜델–페리 식 \\(\\log a_T = -C_1(T-T_r)/(C_2+T-T_r)\\). \\(T_r = T_g\\)이면 \\(C_1 = 17.44\\), \\(C_2 = 51.6\\) K이며 \\(T_g\\)–\\(T_g+100\\) K에서 맞는다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "X선 광전자 분광",
    "en": "X-ray photoelectron spectroscopy, XPS",
    "abbr": "",
    "def": "X선으로 떼어 낸 광전자의 운동 에너지에서 결합 에너지 \\(\\mathrm{BE} = h\\nu - \\mathrm{KE} - \\varphi\\)를 구해 표면 수 nm의 원소와 화학 상태를 보는 분석법.",
    "chapters": [
     "characterization#spectroscopy"
    ]
   },
   {
    "ko": "high-k 유전체",
    "en": "high-k dielectric",
    "abbr": "",
    "def": "SiO₂(\\(k = 3.9\\))보다 유전율이 큰 절연막(HfO₂, ZrO₂ 등). 같은 정전 용량을 더 두꺼운 막으로 얻어 누설을 줄인다.",
    "chapters": [
     "electrical-properties#high-k"
    ]
   },
   {
    "ko": "가공 경화",
    "en": "strain hardening, work hardening",
    "abbr": "",
    "def": "소성 변형으로 전위가 늘고 서로 엉켜 항복 강도가 오르는 현상. 냉간 가공의 원리다.",
    "chapters": [
     "plasticity-strengthening#hardening"
    ]
   },
   {
    "ko": "가공 경화 지수",
    "en": "strain-hardening exponent",
    "abbr": "",
    "def": "홀로몬 식의 지수 \\(n\\). 클수록 변형에 따라 빨리 단단해지고 네킹이 늦게(진변형 \\(n\\)에서) 시작된다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "가교",
    "en": "crosslinking",
    "abbr": "",
    "def": "사슬과 사슬 사이를 공유 결합 다리로 잇는 것. 가교된 고분자는 데워도 녹지 않고, 성긴 가교는 고무, 촘촘한 가교는 단단한 열경화성 수지를 만든다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "가교점 사이 분자량",
    "en": "molecular weight between crosslinks",
    "abbr": "",
    "def": "고무 망목에서 이웃한 두 가교점 사이 사슬의 몰 질량 \\(M_c\\). 전단 탄성률 \\(G = \\rho RT/M_c\\)로 구한다.",
    "chapters": [
     "polymers#rubber"
    ]
   },
   {
    "ko": "가산 법칙",
    "en": "additivity rule",
    "abbr": "",
    "def": "온도가 바뀌는 경로에서 변태를 각 온도의 항온 변태 시간의 몫으로 더해 계산하는 규칙. 변태 시작은 \\(\\sum\\Delta t_i/\\tau_i = 1\\)(셰일 법칙)로 판정한다.",
    "chapters": [
     "transformation-kinetics#ttt-cct"
    ]
   },
   {
    "ko": "가상 온도",
    "en": "fictive temperature",
    "abbr": "",
    "def": "유리가 지닌 얼어붙은 구조와 같은 구조를 갖는 평형 액체의 온도 \\(T_f\\). 빨리 식힌 유리일수록 높다.",
    "chapters": [
     "ceramics-glasses#glass-transition"
    ]
   },
   {
    "ko": "가수분해",
    "en": "hydrolysis",
    "abbr": "",
    "def": "물이 고분자의 에스터·아마이드·이미드 결합을 끊는 반응. 고온 고습에서 고분자의 강도와 접착력을 떨어뜨린다.",
    "chapters": [
     "degradation-reliability#polymer-tests"
    ]
   },
   {
    "ko": "가중 점수법",
    "en": "weighted-property method",
    "abbr": "",
    "def": "각 성질을 후보 중 최댓값(또는 최솟값) 기준 100점 척도로 바꾸고 중요도 가중치를 곱해 더한 점수 \\(\\gamma = \\sum w_i\\beta_i\\)로 재료를 비교하는 방법.",
    "chapters": [
     "materials-selection#selection"
    ]
   },
   {
    "ko": "가지 고분자",
    "en": "branched polymer",
    "abbr": "",
    "def": "주사슬에 곁사슬 가지가 달린 고분자. 가지가 많으면 사슬이 가지런히 쌓이지 못해 결정도와 밀도가 낮다(LDPE).",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "각도 분해 XPS",
    "en": "angle-resolved XPS, ARXPS",
    "abbr": "",
    "def": "광전자 이탈각을 바꾸어 정보 깊이를 조절하며 재는 XPS. 얇은 덮개층의 두께와 깊이 분포를 비파괴로 얻는다.",
    "chapters": [
     "characterization#spectroscopy"
    ]
   },
   {
    "ko": "갈바닉 부식",
    "en": "galvanic corrosion",
    "abbr": "",
    "def": "전위가 다른 두 금속이 전해질 속에서 맞닿을 때 덜 귀한 쪽이 양극이 되어 빨리 녹는 부식. 음극/양극 면적비가 클수록 심하다.",
    "chapters": [
     "degradation-reliability#corrosion"
    ]
   },
   {
    "ko": "강유전체",
    "en": "ferroelectric",
    "abbr": "",
    "def": "전기장 없이도 자발 분극을 지니고 그 방향을 전기장으로 뒤집을 수 있는 유전체(BaTiO₃, PZT, HZO).",
    "chapters": [
     "electrical-properties#ferroelectrics"
    ]
   },
   {
    "ko": "강화재",
    "en": "reinforcement",
    "abbr": "",
    "def": "기지 속에 흩어져 강성·강도를 더하거나 열팽창·열전도 같은 성질을 조절하는 상. 입자·단섬유·연속 섬유 등이 있다.",
    "chapters": [
     "composites#classification"
    ]
   },
   {
    "ko": "겔화",
    "en": "gelation",
    "abbr": "",
    "def": "가지친 분자가 커지다가 시료 전체를 잇는 하나의 거대한 망목이 생기는 순간. 무게평균 분자량과 점도가 발산하고 수지가 더는 흐르지 않는다.",
    "chapters": [
     "polymers#thermosets"
    ]
   },
   {
    "ko": "겔화점",
    "en": "gel point",
    "abbr": "",
    "def": "겔화가 일어나는 반응 정도. 플로리–스톡마이어 이론으로 \\(\\alpha_\\text{gel} = 1/\\sqrt{r(f_A-1)(f_B-1)}\\)이며, 다이아민–다이에폭시는 0.577이다.",
    "chapters": [
     "polymers#thermosets"
    ]
   },
   {
    "ko": "결정도",
    "en": "crystallinity",
    "abbr": "",
    "def": "반결정성 고분자에서 결정 영역이 차지하는 무게 분율. 밀도로 \\(\\rho_c(\\rho_s-\\rho_a)/\\rho_s(\\rho_c-\\rho_a)\\)를 계산하거나 DSC·XRD로 잰다.",
    "chapters": [
     "polymers#crystallinity-transitions"
    ]
   },
   {
    "ko": "결정립 미세화 강화",
    "en": "grain-size strengthening",
    "abbr": "",
    "def": "결정립을 작게 해 결정립계로 전위 운동을 막아 강하게 하는 방법. 강도와 인성을 함께 올린다.",
    "chapters": [
     "plasticity-strengthening#strengthening"
    ]
   },
   {
    "ko": "결정립 성장",
    "en": "grain growth",
    "abbr": "",
    "def": "재결정 뒤 결정립계 에너지를 줄이려고 평균 결정립이 커지는 과정. 이상적으로 \\(d^2 - d_0^2 = Kt\\)이다.",
    "chapters": [
     "plasticity-strengthening#annealing"
    ]
   },
   {
    "ko": "결정립계",
    "en": "grain boundary",
    "abbr": "",
    "def": "결정 방향이 다른 두 결정립이 맞닿은 면결함. 방위 차이가 약 15° 이하면 저각 경계(전위 벽), 그보다 크면 고각 경계다.",
    "chapters": [
     "defects#interfaces"
    ]
   },
   {
    "ko": "결정립계 확산",
    "en": "grain-boundary diffusion",
    "abbr": "",
    "def": "폭 약 0.5 nm인 결정립계를 따라 일어나는 확산. 활성화 에너지가 격자 확산의 0.5–0.6배여서 낮은 온도와 작은 결정립에서 물질 수송을 지배한다.",
    "chapters": [
     "diffusion-in-materials#short-circuit"
    ]
   },
   {
    "ko": "결정자 크기",
    "en": "crystallite size",
    "abbr": "",
    "def": "X선 회절에 결맞게 함께 기여하는 결정 영역의 크기. 피크 폭에서 셰러 식 \\(D = K\\lambda/\\beta\\cos\\theta\\)로 구하며 현미경으로 본 결정립 크기보다 작거나 같다.",
    "chapters": [
     "characterization#xrd"
    ]
   },
   {
    "ko": "결합 삼각형",
    "en": "tie triangle",
    "abbr": "",
    "def": "삼원계 등온 단면에서 세 상이 공존하는 삼각형 영역. 꼭짓점이 세 상의 조성이고, 안의 점에서는 무게 중심 규칙으로 세 상의 분율을 구한다.",
    "chapters": [
     "phase-diagrams-microstructure#ternary"
    ]
   },
   {
    "ko": "결합 에너지",
    "en": "bonding energy",
    "abbr": "",
    "def": "평형 거리에 있는 두 원자를 무한히 떼어 놓는 데 드는 에너지, 곧 결합 에너지 곡선 우물의 깊이 \\(E_0\\). 클수록 녹는점이 높다.",
    "chapters": [
     "bonding-crystal-structure#bonding"
    ]
   },
   {
    "ko": "결합 에너지 곡선",
    "en": "bonding energy curve",
    "abbr": "",
    "def": "두 원자 사이 거리 \\(r\\)에 따른 퍼텐셜 에너지 \\(E(r)\\). 인력과 척력의 합으로 바닥이 하나인 우물이 되며, 깊이·곡률·비대칭이 녹는점·탄성률·열팽창을 정한다.",
    "chapters": [
     "bonding-crystal-structure#bonding"
    ]
   },
   {
    "ko": "결합선",
    "en": "tie line",
    "abbr": "",
    "def": "두 상 영역 안의 한 점을 지나는 수평선. 영역의 두 경계와 만나는 점의 조성이 공존하는 두 상의 조성이다.",
    "chapters": [
     "phase-diagrams-microstructure#reading"
    ]
   },
   {
    "ko": "경도",
    "en": "hardness",
    "abbr": "",
    "def": "압입자를 눌러 남는 자국으로 잰 국부 소성 변형 저항. 대략 항복 강도의 3배다.",
    "chapters": [
     "plasticity-strengthening#hardness"
    ]
   },
   {
    "ko": "경시 절연 파괴",
    "en": "time-dependent dielectric breakdown",
    "abbr": "",
    "def": "사용 전계에서도 절연막 속 결함이 시간에 따라 쌓여 결국 절연이 무너지는 현상. 고전계 시험을 E 모형이나 1/E 모형으로 외삽해 수명을 구한다.",
    "chapters": [
     "degradation-reliability#polymer-tests"
    ]
   },
   {
    "ko": "경화능",
    "en": "hardenability",
    "abbr": "",
    "def": "강이 담금질로 마르텐사이트가 되어 경화되는 깊이를 나타내는 성질. 합금 원소가 TTT 곡선의 코를 오른쪽으로 밀어 키우며, 최대 경도(탄소량이 정함)와는 다르다.",
    "chapters": [
     "metals-alloys#hardenability"
    ]
   },
   {
    "ko": "경화도",
    "en": "degree of cure",
    "abbr": "",
    "def": "열경화성 수지의 경화 반응이 진행된 정도 \\(\\alpha\\). DSC에서 \\(\\alpha = 1-\\Delta H_\\text{res}/\\Delta H_\\text{tot}\\)로 잰다.",
    "chapters": [
     "polymers#thermosets"
    ]
   },
   {
    "ko": "계면",
    "en": "interface",
    "abbr": "",
    "def": "기지와 강화재가 맞닿은 경계. 하중 전달(계면 전단 강도)과 파괴 기구(분리·뽑힘)를 좌우한다.",
    "chapters": [
     "composites#classification"
    ]
   },
   {
    "ko": "계면 분극",
    "en": "interfacial polarization",
    "abbr": "",
    "def": "결정립계·상 경계처럼 전도도가 다른 영역의 경계에 움직이는 전하가 쌓여 생기는 분극(공간 전하 분극). 저주파에서만 따라간다.",
    "chapters": [
     "electrical-properties#dielectrics"
    ]
   },
   {
    "ko": "계면 열저항",
    "en": "thermal boundary resistance",
    "abbr": "",
    "def": "서로 다른 두 재료의 계면에서 열유속 \\(q\\)에 대해 생기는 온도 불연속 \\(\\Delta T = qR_\\mathrm{K}\\)의 비례 상수(m²K/W). 포논이 계면에서 일부 반사되어 생긴다.",
    "chapters": [
     "thermal-optical-properties#conduction"
    ]
   },
   {
    "ko": "고분자",
    "en": "polymers",
    "abbr": "",
    "def": "작은 단위체가 공유 결합으로 길게 이어진 사슬 분자로 된 재료. 사슬 사이가 약한 2차 결합이라 가볍고 무르며 열팽창이 크고 사용 온도가 낮다.",
    "chapters": [
     "materials-selection#classes"
    ]
   },
   {
    "ko": "고상선",
    "en": "solidus",
    "abbr": "",
    "def": "그 아래에서 합금이 모두 고체가 되는 온도를 조성에 따라 이은 선(평형 응고 기준).",
    "chapters": [
     "phase-diagrams-microstructure#isomorphous"
    ]
   },
   {
    "ko": "고온 산화",
    "en": "high-temperature oxidation",
    "abbr": "",
    "def": "금속이 높은 온도에서 산소 등 기체와 직접 반응해 표면에 산화막을 키우는 현상. 속도는 산화막의 치밀도와 막 속 이온 확산이 정한다.",
    "chapters": [
     "degradation-reliability#oxidation"
    ]
   },
   {
    "ko": "고용 강화",
    "en": "solid-solution strengthening",
    "abbr": "",
    "def": "크기·탄성률이 다른 용질 원자의 응력장이 전위를 붙잡아 강하게 하는 기구. 강화량은 대략 \\(c^{1/2}\\)–\\(c^{2/3}\\)에 비례한다.",
    "chapters": [
     "plasticity-strengthening#strengthening"
    ]
   },
   {
    "ko": "고용선",
    "en": "solvus line",
    "abbr": "",
    "def": "고용체 영역과 두 상 영역의 경계로, 온도에 따른 고체 속 용질의 고용 한계를 나타내는 선. 이 선을 지나 식으면 둘째 상이 석출한다.",
    "chapters": [
     "phase-diagrams-microstructure#eutectic"
    ]
   },
   {
    "ko": "고용체",
    "en": "solid solution",
    "abbr": "",
    "def": "다른 원자가 들어가도 용매의 결정 구조가 유지되고 새 상이 생기지 않는 고체 용액.",
    "chapters": [
     "defects#solid-solutions"
    ]
   },
   {
    "ko": "고용화 처리",
    "en": "solution heat treatment",
    "abbr": "",
    "def": "석출 경화 합금을 고용선과 고상선 사이의 온도에서 가열해 용질을 모두 고용시키는 열처리. 뒤이어 담금질로 과포화 고용체를 만든다.",
    "chapters": [
     "phase-diagrams-microstructure#aluminum-joining"
    ]
   },
   {
    "ko": "고유 확산 계수",
    "en": "intrinsic diffusion coefficient",
    "abbr": "",
    "def": "결정 격자(표지)에 대해 잰 각 성분의 확산 계수 \\(D_\\mathrm A\\), \\(D_\\mathrm B\\). 둘이 다르면 커켄달 효과가 생긴다.",
    "chapters": [
     "diffusion-in-materials#interdiffusion"
    ]
   },
   {
    "ko": "고전 적층판 이론",
    "en": "classical laminate theory, CLT",
    "abbr": "",
    "def": "각 층의 강성을 각도만큼 돌려 두께 방향으로 적분해 면 안 강성(A), 결합(B), 굽힘 강성(D) 행렬을 구하고 적층판의 변형과 휨을 계산하는 이론.",
    "chapters": [
     "composites#laminates"
    ]
   },
   {
    "ko": "공공",
    "en": "vacancy",
    "abbr": "",
    "def": "원자가 있어야 할 격자점이 빈 점결함. 배열 엔트로피 때문에 열평형에서 \\(N_v = N\\exp(-Q_v/kT)\\)만큼 반드시 존재한다.",
    "chapters": [
     "defects#point-defects"
    ]
   },
   {
    "ko": "공공 회합",
    "en": "defect association",
    "abbr": "",
    "def": "하전된 공공이 반대 유효 전하의 도펀트 옆에 붙잡혀 짝을 이루는 현상. 낮은 온도에서 움직일 수 있는 공공을 줄여 확산과 이온 전도를 느리게 한다.",
    "chapters": [
     "diffusion-in-materials#ionic"
    ]
   },
   {
    "ko": "공구강",
    "en": "tool steel",
    "abbr": "",
    "def": "탄소 0.6–1.5 %에 W·Mo·V·Cr을 많이 넣은 강으로, 높은 경도와 내마모성, 고온 경도를 가져 절삭 공구·금형에 쓴다.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "공석 반응",
    "en": "eutectoid reaction",
    "abbr": "",
    "def": "냉각할 때 한 고체가 일정한 온도에서 두 고체로 바뀌는 반응. Fe–C에서는 727 °C에서 \\(\\gamma(0.76) \\to \\alpha(0.022) + \\mathrm{Fe_3C}(6.70)\\)이다.",
    "chapters": [
     "phase-diagrams-microstructure#iron-carbon"
    ]
   },
   {
    "ko": "공식",
    "en": "pitting corrosion",
    "abbr": "",
    "def": "부동태막이 염소 이온 등으로 국부적으로 깨진 점이 작은 양극이 되어 바늘구멍처럼 깊이 파고드는 국부 부식. 구멍 속 산성화로 스스로 가속된다.",
    "chapters": [
     "degradation-reliability#corrosion"
    ]
   },
   {
    "ko": "공정 반응",
    "en": "eutectic reaction",
    "abbr": "",
    "def": "냉각할 때 한 액체가 일정한 온도에서 두 고체로 동시에 바뀌는 반응 \\(\\mathrm{L} \\to \\alpha + \\beta\\). 예: Pb–Sn 183 °C, 61.9 wt% Sn.",
    "chapters": [
     "phase-diagrams-microstructure#eutectic"
    ]
   },
   {
    "ko": "공중합체",
    "en": "copolymer",
    "abbr": "",
    "def": "두 종류 이상의 단량체로 이루어진 고분자. 배열에 따라 랜덤·교대·블록·그라프트 공중합체로 나뉜다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "공칭 변형",
    "en": "engineering strain",
    "abbr": "",
    "def": "늘어난 길이를 처음 표점 거리로 나눈 변형 \\(\\varepsilon = \\Delta L/L_0\\).",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "공칭 응력",
    "en": "engineering stress",
    "abbr": "",
    "def": "하중을 시편의 처음 단면적으로 나눈 응력 \\(\\sigma = F/A_0\\). 네킹 뒤에는 실제 응력보다 작게 나온다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "공학 전단 변형",
    "en": "engineering shear strain",
    "abbr": "",
    "def": "원래 직각이던 두 선 사이 각의 감소(rad) \\(\\gamma_{xy}\\). 텐서 성분의 두 배, \\(\\gamma_{xy} = 2\\varepsilon_{xy}\\)이며 \\(\\tau = G\\gamma\\)로 전단 응력과 잇는다.",
    "chapters": [
     "elasticity#tensor"
    ]
   },
   {
    "ko": "과시효",
    "en": "overaging",
    "abbr": "",
    "def": "최고 시효를 지나 석출물이 커지고 간격이 넓어져 강도가 떨어지는 상태.",
    "chapters": [
     "plasticity-strengthening#strengthening"
    ]
   },
   {
    "ko": "과포화 고용체",
    "en": "supersaturated solid solution",
    "abbr": "",
    "def": "그 온도의 평형 고용 한계보다 많은 용질이 녹아 있는 준안정 고용체. 시효하면 용질이 석출물로 빠져나오며 강도가 오른다.",
    "chapters": [
     "phase-diagrams-microstructure#aluminum-joining"
    ]
   },
   {
    "ko": "관통 전위",
    "en": "threading dislocation",
    "abbr": "",
    "def": "부정합 전위의 끝이 막 표면까지 뚫고 올라간 전위 줄기. 소자의 누설 경로가 되어 경사 버퍼 등으로 밀도를 줄인다.",
    "chapters": [
     "solidification-growth#epitaxy-films"
    ]
   },
   {
    "ko": "광산화",
    "en": "photo-oxidation",
    "abbr": "",
    "def": "자외선이 고분자 결합을 끊어 만든 라디칼이 산소와 반응해 사슬을 분해하는 열화. 변색과 표면 균열을 만든다.",
    "chapters": [
     "degradation-reliability#polymer-tests"
    ]
   },
   {
    "ko": "교차 미끄럼",
    "en": "cross-slip",
    "abbr": "",
    "def": "나사 전위가 버거스 벡터를 품은 다른 미끄럼면으로 옮겨 가는 것. 적층 결함 에너지가 낮으면 부분 전위를 오므려야 해 어렵다.",
    "chapters": [
     "defects#dislocations"
    ]
   },
   {
    "ko": "교차 슬립",
    "en": "cross slip",
    "abbr": "",
    "def": "나사 전위가 버거스 벡터를 품은 다른 미끄럼면으로 옮겨 가 미끄러지는 것. 장애물을 돌아가는 길이 된다.",
    "chapters": [
     "plasticity-strengthening#slip"
    ]
   },
   {
    "ko": "교환 상수",
    "en": "exchange constant",
    "abbr": "",
    "def": "한 목표(예: 질량 1 kg)를 줄이는 데 기꺼이 치를 다른 목표(원가)의 값. 벌점 함수 \\(Z = \\alpha_\\mathrm{m}m + C\\)의 \\(\\alpha_\\mathrm{m}\\)이다.",
    "chapters": [
     "materials-selection#selection"
    ]
   },
   {
    "ko": "구면 수차",
    "en": "spherical aberration",
    "abbr": "",
    "def": "렌즈 가장자리를 지난 전자가 중심을 지난 전자보다 가까운 곳에 초점을 맺는 수차. 흐림이 수렴각의 세제곱(\\(\\tfrac12C_\\mathrm s\\alpha^3\\))에 비례한다.",
    "chapters": [
     "characterization#microscopy"
    ]
   },
   {
    "ko": "구정",
    "en": "spherulite",
    "abbr": "",
    "def": "녹은 고분자가 결정화할 때 핵 하나에서 라멜라 리본이 사방으로 자라 만든 공 모양 집합체(수–수백 µm). 직교 편광 아래 몰타 십자가 보인다.",
    "chapters": [
     "polymers#crystallinity-transitions"
    ]
   },
   {
    "ko": "국부 응고 시간",
    "en": "local solidification time",
    "abbr": "",
    "def": "어떤 지점이 액상선 온도에서 고상선(또는 공정) 온도까지 식는 데 걸리는 시간 \\(t_f = \\Delta T_0/\\dot T\\).",
    "chapters": [
     "solidification-growth#casting"
    ]
   },
   {
    "ko": "굽힘 강도",
    "en": "flexural strength",
    "abbr": "",
    "def": "막대를 굽혀 깨뜨릴 때 인장 면의 최대 응력. 3점 굽힘에서 \\(\\sigma = 3FL/2bd^2\\). 세라믹 강도의 표준 측정값이다.",
    "chapters": [
     "ceramics-glasses#mechanical"
    ]
   },
   {
    "ko": "규산염",
    "en": "silicate",
    "abbr": "",
    "def": "SiO₄⁴⁻ 사면체를 기본 단위로 하는 화합물. 사면체가 꼭짓점 산소를 몇 개 나누느냐에 따라 섬·사슬·판·3차원 망목 구조가 된다.",
    "chapters": [
     "ceramics-glasses#silicates"
    ]
   },
   {
    "ko": "균일 부식",
    "en": "uniform corrosion",
    "abbr": "",
    "def": "양극과 음극 자리가 끊임없이 바뀌어 표면 전체가 고르게 얇아지는 부식. 양은 많아도 예측하기 쉽다.",
    "chapters": [
     "degradation-reliability#corrosion"
    ]
   },
   {
    "ko": "균질화 처리",
    "en": "homogenization",
    "abbr": "",
    "def": "유핵 조직이나 편석을 없애려고 합금을 비평형 고상선보다 낮은 고온에 오래 두어 확산으로 조성을 고르게 하는 열처리. 시간은 대략 \\(l^2/(\\pi^2D)\\)에 비례한다.",
    "chapters": [
     "phase-diagrams-microstructure#isomorphous"
    ]
   },
   {
    "ko": "그레이징 입사 회절",
    "en": "grazing-incidence XRD, GIXRD",
    "abbr": "",
    "def": "X선 입사각을 0.3–1° 정도로 낮게 고정해 침투 깊이를 줄이고 얇은 막의 회절 신호를 키우는 XRD 방법.",
    "chapters": [
     "characterization#xrd-stress"
    ]
   },
   {
    "ko": "그뤼나이젠 상수",
    "en": "Grüneisen parameter",
    "abbr": "",
    "def": "부피가 변할 때 포논 진동수가 바뀌는 비율 \\(\\gamma = -d\\ln\\omega/d\\ln V\\). 비조화성의 척도로 \\(3\\alpha = \\gamma C_V/(KV_m)\\)를 통해 열팽창 계수와 열용량을 잇는다.",
    "chapters": [
     "thermal-optical-properties#expansion"
    ]
   },
   {
    "ko": "극점도",
    "en": "pole figure",
    "abbr": "",
    "def": "한 결정면 무리의 법선(극)이 시편 좌표에서 어떤 방향에 몰려 있는지를 반구 투영으로 나타낸 그림. 집합 조직을 보여 준다.",
    "chapters": [
     "characterization#xrd-stress"
    ]
   },
   {
    "ko": "금속",
    "en": "metals",
    "abbr": "",
    "def": "금속 결합으로 이루어진 재료. 자유 전자 덕분에 전기·열을 잘 전하고, 결합에 방향성이 없어 연성이 크며 파괴 인성이 높다.",
    "chapters": [
     "materials-selection#classes"
    ]
   },
   {
    "ko": "금속간 화합물",
    "en": "intermetallic compound, IMC",
    "abbr": "",
    "def": "두 금속이 정해진 조성비로 이룬 화합물(Cu₆Sn₅, Cu₃Sn, Ni₃Sn₄ 등). 솔더 접합 계면에 자라며 단단하고 취약하다.",
    "chapters": [
     "diffusion-in-materials#reactive"
    ]
   },
   {
    "ko": "기지",
    "en": "matrix",
    "abbr": "",
    "def": "복합재료에서 연속된 상. 강화재를 붙잡아 모양을 유지하고 하중을 강화재에 전달하며 환경으로부터 보호한다.",
    "chapters": [
     "composites#classification"
    ]
   },
   {
    "ko": "깁스 삼각형",
    "en": "Gibbs triangle",
    "abbr": "",
    "def": "삼원계 조성을 나타내는 정삼각형. 꼭짓점이 순성분이고, 점에서 어떤 꼭짓점의 맞은편 변까지의 거리가 그 성분의 %다.",
    "chapters": [
     "phase-diagrams-microstructure#ternary"
    ]
   },
   {
    "ko": "깁스–톰슨 효과",
    "en": "Gibbs–Thomson effect",
    "abbr": "",
    "def": "곡률 반지름 \\(r\\)인 입자 둘레의 평형 용해도가 \\(c(r) = c_\\infty\\exp(2\\gamma V_m/rRT)\\)로 커지는 현상. 작은 입자가 녹고 큰 입자가 자라는 원인이다.",
    "chapters": [
     "transformation-kinetics#precipitation"
    ]
   },
   {
    "ko": "깊이 분해능",
    "en": "depth resolution",
    "abbr": "",
    "def": "깊이 분석에서 얼마나 얇은 층까지 가를 수 있는지의 척도. SIMS에서는 원자 섞임과 밀어 넣기가 만든 상승·하강 길이로 나타낸다.",
    "chapters": [
     "characterization#depth"
    ]
   },
   {
    "ko": "끝–끝 거리",
    "en": "end-to-end distance",
    "abbr": "",
    "def": "사슬 양 끝 사이의 거리 \\(R\\). 무작위 걸음 사슬의 RMS 값은 \\(\\sqrt N\\,b\\)로 윤곽 길이 \\(Nb\\)보다 훨씬 작다.",
    "chapters": [
     "polymers#conformation"
    ]
   },
   {
    "ko": "나노압입",
    "en": "nanoindentation",
    "abbr": "",
    "def": "날카로운 압입자를 누르며 하중과 깊이를 nm·µN 정밀도로 기록해 박막·미세 영역의 경도와 탄성률을 재는 방법.",
    "chapters": [
     "plasticity-strengthening#hardness"
    ]
   },
   {
    "ko": "나바로–헤링 크리프",
    "en": "Nabarro–Herring creep",
    "abbr": "",
    "def": "공공이 결정립 내부를 지나 인장받는 계면에서 압축받는 계면으로 흘러 결정립이 늘어나는 확산 크리프. 속도는 \\(\\sigma D_v/d^2\\)에 비례한다.",
    "chapters": [
     "fracture-fatigue-creep#creep"
    ]
   },
   {
    "ko": "나사 전위",
    "en": "screw dislocation",
    "abbr": "",
    "def": "버거스 벡터가 전위선과 나란한 전위. 원자면이 전위선을 축으로 나선 계단을 이루며 교차 미끄럼을 할 수 있다.",
    "chapters": [
     "defects#dislocations"
    ]
   },
   {
    "ko": "내화 금속",
    "en": "refractory metal",
    "abbr": "",
    "def": "녹는점이 약 2000 °C를 넘는 W·Mo·Ta·Nb 등. BCC로 고온 강도가 높지만 상온 취성과 고온 산화가 약점이라 주로 분말 야금으로 만든다.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "냉간 가공",
    "en": "cold work",
    "abbr": "",
    "def": "재결정 온도 아래에서 압연·인발 등으로 단면을 줄이는 소성 가공. 정도는 \\(\\%\\mathrm{CW} = (A_0 - A_d)/A_0\\times100\\)으로 나타낸다.",
    "chapters": [
     "plasticity-strengthening#hardening"
    ]
   },
   {
    "ko": "냉간 가공도",
    "en": "percent cold work",
    "abbr": "",
    "def": "냉간 가공으로 단면적이 줄어든 비율 \\(\\%\\mathrm{CW} = (A_0 - A_d)/A_0\\times100\\).",
    "chapters": [
     "metals-alloys#processing"
    ]
   },
   {
    "ko": "네른스트–아인슈타인 식",
    "en": "Nernst–Einstein relation",
    "abbr": "",
    "def": "이온 전도도와 확산 계수의 관계 \\(\\sigma = n(ze)^2D/k_\\mathrm BT\\). 아인슈타인 관계를 이온에 쓴 것이다.",
    "chapters": [
     "diffusion-in-materials#ionic"
    ]
   },
   {
    "ko": "네킹",
    "en": "necking",
    "abbr": "",
    "def": "가공 경화가 단면 감소를 따라가지 못해 변형이 한 곳에 몰려 시편이 목처럼 잘록해지는 현상. 콩시데르 조건 \\(d\\sigma_\\mathrm T/d\\varepsilon_\\mathrm T = \\sigma_\\mathrm T\\)에서 시작한다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "노르트하임 규칙",
    "en": "Nordheim's rule",
    "abbr": "",
    "def": "고용체의 불순물 저항률을 용질 원자 분율 \\(c\\)로 어림하는 식 \\(\\rho_\\mathrm{i} = Ac(1-c)\\).",
    "chapters": [
     "electrical-properties#metals"
    ]
   },
   {
    "ko": "노리스–란츠베르크 식",
    "en": "Norris–Landzberg equation",
    "abbr": "",
    "def": "온도 사이클 시험과 현장 조건의 솔더 피로 수명 비를 온도 폭·주파수·최고 온도로 나타낸 가속 계수 식.",
    "chapters": [
     "degradation-reliability#stress-migration"
    ]
   },
   {
    "ko": "노턴 식",
    "en": "Norton's law",
    "abbr": "",
    "def": "정상 상태 크리프 속도의 멱법칙 \\(\\dot\\varepsilon_s = A\\sigma^n\\exp(-Q_c/RT)\\). 응력 지수 \\(n\\)이 기구를, \\(Q_c\\)가 확산 과정을 알려 준다.",
    "chapters": [
     "fracture-fatigue-creep#creep"
    ]
   },
   {
    "ko": "다각형화",
    "en": "polygonization",
    "abbr": "",
    "def": "회복 중 같은 부호의 칼날 전위가 벽으로 정렬해 아결정립계를 만드는 과정.",
    "chapters": [
     "plasticity-strengthening#annealing"
    ]
   },
   {
    "ko": "다각화",
    "en": "polygonization",
    "abbr": "",
    "def": "어닐 중 같은 부호의 칼날 전위가 미끄럼과 상승으로 수직 벽을 이루어 저각 결정립계(아결정립)를 만드는 회복 과정.",
    "chapters": [
     "defects#interfaces"
    ]
   },
   {
    "ko": "다결정",
    "en": "polycrystal",
    "abbr": "",
    "def": "방위가 서로 다른 결정립 여러 개가 결정립계로 맞붙은 고체. 방위가 무작위면 평균 성질이 등방이 된다.",
    "chapters": [
     "bonding-crystal-structure#noncrystalline"
    ]
   },
   {
    "ko": "다르켄 식",
    "en": "Darken equations",
    "abbr": "",
    "def": "상호 확산 계수 \\(\\tilde D = X_\\mathrm BD_\\mathrm A + X_\\mathrm AD_\\mathrm B\\)와 표지 속도 \\(v = (D_\\mathrm A - D_\\mathrm B)\\,\\partial X_\\mathrm A/\\partial x\\)를 고유 확산 계수로 나타낸 식.",
    "chapters": [
     "diffusion-in-materials#interdiffusion"
    ]
   },
   {
    "ko": "다리 산소",
    "en": "bridging oxygen",
    "abbr": "",
    "def": "두 망목 형성 다면체(예: SiO₄ 사면체)가 함께 나누는 꼭짓점 산소. Si–O–Si 결합을 이룬다.",
    "chapters": [
     "ceramics-glasses#silicates"
    ]
   },
   {
    "ko": "다마신",
    "en": "damascene",
    "abbr": "",
    "def": "절연막에 홈을 먼저 파고 금속을 채운 뒤 CMP로 넘친 부분을 깎아 배선을 만드는 공정. 건식 식각이 어려운 구리 배선에 쓴다.",
    "chapters": [
     "metals-alloys#interconnect"
    ]
   },
   {
    "ko": "다이아몬드 구조",
    "en": "diamond cubic structure",
    "abbr": "",
    "def": "FCC 격자점마다 원자 두 개((0,0,0), (¼,¼,¼))를 둔 공유 결정 구조. 단위정 원자 8개, 배위수 4, 충진율 0.34. Si·Ge·다이아몬드·α-Sn.",
    "chapters": [
     "bonding-crystal-structure#covalent"
    ]
   },
   {
    "ko": "다형",
    "en": "polymorphism",
    "abbr": "",
    "def": "같은 화학식의 화합물이 두 가지 이상의 결정 구조를 갖는 현상. ZrO₂·HfO₂의 단사정·정방정·입방·사방정상, SiO₂의 석영·크리스토발라이트가 예다.",
    "chapters": [
     "bonding-crystal-structure#covalent"
    ]
   },
   {
    "ko": "단결정",
    "en": "single crystal",
    "abbr": "",
    "def": "원자 배열의 규칙이 시료 전체에 끊김 없이 이어진 결정. 실리콘 웨이퍼·사파이어 기판처럼 방향에 따라 성질이 다르다(이방성).",
    "chapters": [
     "bonding-crystal-structure#noncrystalline"
    ]
   },
   {
    "ko": "단계 중합",
    "en": "step-growth polymerization",
    "abbr": "",
    "def": "작용기끼리의 반응이 단량체·올리고머·긴 사슬 어디서나 같은 속도로 일어나는 중합. 반응 정도 \\(p\\)가 1에 가까워야 긴 사슬이 생긴다(나일론·PET·에폭시).",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "단량체",
    "en": "monomer",
    "abbr": "",
    "def": "공유 결합으로 이어져 고분자 사슬을 이루는 작은 분자. 에틸렌·프로필렌·스타이렌처럼 이중 결합이나 반응하는 작용기를 가진다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "단면 감소율",
    "en": "percent reduction in area",
    "abbr": "",
    "def": "파단면 넓이의 감소율 \\(\\%\\mathrm{RA} = (A_0 - A_f)/A_0\\times100\\). 표점 거리에 무관한 연성 척도다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "단방향 복합재료",
    "en": "unidirectional composite",
    "abbr": "",
    "def": "연속 섬유가 모두 한 방향으로 정렬된 복합재료(판). 섬유 방향은 매우 단단하고 강하지만 횡방향·전단은 기지가 지배한다.",
    "chapters": [
     "composites#fibers"
    ]
   },
   {
    "ko": "단범위 규칙성",
    "en": "short-range order",
    "abbr": "",
    "def": "최근접·둘째 이웃 정도의 짧은 거리에서만 원자 배열에 규칙(결합 길이·배위수)이 있는 성질. 비정질 고체와 액체의 특징이다.",
    "chapters": [
     "bonding-crystal-structure#noncrystalline"
    ]
   },
   {
    "ko": "단조",
    "en": "forging",
    "abbr": "",
    "def": "금속을 두드리거나 눌러 모양을 만드는 소성 가공. 결정립을 미세화하고 흐름 조직을 만들어 강하고 질긴 부품을 얻는다.",
    "chapters": [
     "metals-alloys#processing"
    ]
   },
   {
    "ko": "단회로 확산",
    "en": "short-circuit diffusion",
    "abbr": "",
    "def": "결정립계·전위·표면처럼 원자 배열이 성긴 결함을 따라 격자보다 훨씬 빠르게 일어나는 확산. 활성화 에너지가 격자 확산의 절반 안팎이다.",
    "chapters": [
     "diffusion-in-materials#short-circuit"
    ]
   },
   {
    "ko": "담금질",
    "en": "quenching",
    "abbr": "",
    "def": "오스테나이트화한 강을 물·기름 등에 넣어 TTT 곡선의 코보다 빨리 식혀 마르텐사이트를 만드는 처리.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "대나무 구조",
    "en": "bamboo structure",
    "abbr": "",
    "def": "결정립 크기가 선폭보다 커서 결정립계가 배선을 가로지르는 미세조직. 길이 방향 결정립계 확산 경로가 끊겨 EM 수명이 늘어난다.",
    "chapters": [
     "degradation-reliability#electromigration"
    ]
   },
   {
    "ko": "도너",
    "en": "donor",
    "abbr": "",
    "def": "반도체에 전자를 내주는 불순물(실리콘 속 P, As 같은 5족 원소).",
    "chapters": [
     "electrical-properties#semiconductors"
    ]
   },
   {
    "ko": "동경 분포 함수",
    "en": "radial distribution function",
    "abbr": "",
    "def": "한 원자에서 거리 \\(r\\)에 다른 원자가 있을 상대 확률 \\(g(r)\\)(평균 밀도 = 1). 결정은 먼 거리까지 날카로운 봉우리, 비정질은 첫 봉우리 몇 개만 보인다.",
    "chapters": [
     "bonding-crystal-structure#noncrystalline"
    ]
   },
   {
    "ko": "동소체",
    "en": "allotropy",
    "abbr": "",
    "def": "같은 원소가 서로 다른 결정 구조를 갖는 현상 또는 그 각각의 형태. 탄소(다이아몬드·흑연), 철(α·γ·δ), 주석(α·β)이 예다.",
    "chapters": [
     "bonding-crystal-structure#covalent"
    ]
   },
   {
    "ko": "뒬롱–프티 법칙",
    "en": "Dulong–Petit law",
    "abbr": "",
    "def": "고온에서 고체의 몰 열용량이 원소와 무관하게 \\(3R \\approx 24.9\\) J/(mol·K)라는 법칙. 원자마다 진동 자유도 3개가 각각 \\(k_\\mathrm{B}T\\)를 받기 때문이다.",
    "chapters": [
     "thermal-optical-properties#expansion"
    ]
   },
   {
    "ko": "등가 산화막 두께",
    "en": "equivalent oxide thickness, EOT",
    "abbr": "",
    "def": "절연막 적층과 같은 정전 용량을 주는 SiO₂ 두께 \\(\\mathrm{EOT} = \\sum t_i(3.9/k_i)\\).",
    "chapters": [
     "electrical-properties#high-k"
    ]
   },
   {
    "ko": "등방성",
    "en": "isotropic",
    "abbr": "",
    "def": "성질이 방향에 따라 달라지지 않는 것. 등방성 선형 탄성체는 독립 탄성 상수가 \\(E\\)와 \\(\\nu\\) 두 개뿐이다.",
    "chapters": [
     "elasticity#hooke"
    ]
   },
   {
    "ko": "등변형",
    "en": "isostrain",
    "abbr": "",
    "def": "두 상이 하중과 나란히 놓여 같은 변형을 하는 조건. 탄성률의 보이트 상한 \\(E = V_fE_f+V_mE_m\\)을 준다.",
    "chapters": [
     "composites#mixtures"
    ]
   },
   {
    "ko": "등온 단면",
    "en": "isothermal section",
    "abbr": "",
    "def": "삼원 상태도(삼각기둥)를 한 온도에서 자른 그림. 깁스 삼각형 위에 한 상·두 상·세 상 영역과 결합선이 그려진다.",
    "chapters": [
     "phase-diagrams-microstructure#ternary"
    ]
   },
   {
    "ko": "등응력",
    "en": "isostress",
    "abbr": "",
    "def": "두 상이 하중과 수직으로 쌓여 같은 응력을 받는 조건. 탄성률의 로이스 하한 \\(1/E = V_f/E_f+V_m/E_m\\)을 준다.",
    "chapters": [
     "composites#mixtures"
    ]
   },
   {
    "ko": "등축정 영역",
    "en": "equiaxed zone",
    "abbr": "",
    "def": "주괴 가운데의 조성적 과냉 액체에서 접종 입자·덴드라이트 조각을 핵으로 사방으로 자란 결정립들의 영역.",
    "chapters": [
     "solidification-growth#casting"
    ]
   },
   {
    "ko": "디바이 완화",
    "en": "Debye relaxation",
    "abbr": "",
    "def": "완화 시간 \\(\\tau\\) 하나인 쌍극자의 유전 응답 \\(\\varepsilon^* = \\varepsilon_\\infty + \\Delta\\varepsilon/(1 + i\\omega\\tau)\\). 손실 \\(\\varepsilon''\\)은 \\(\\omega\\tau = 1\\)에서 최대다.",
    "chapters": [
     "electrical-properties#dielectrics"
    ]
   },
   {
    "ko": "뜨임",
    "en": "tempering",
    "abbr": "",
    "def": "담금질한 강을 A₁ 아래(150–650 °C)로 다시 데워 과포화 탄소를 탄화물로 석출시키고, 경도를 조금 낮추는 대신 인성·연성을 회복시키는 열처리.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "뜨임 마르텐사이트 취성",
    "en": "tempered martensite embrittlement",
    "abbr": "",
    "def": "250–400 °C에서 뜨임할 때 판상 시멘타이트가 경계를 따라 석출하고 잔류 오스테나이트가 분해되어 충격 에너지가 오히려 줄어드는 현상.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "띠틈",
    "en": "band gap",
    "abbr": "",
    "def": "원자가 띠 꼭대기와 전도띠 바닥 사이의, 전자가 가질 수 없는 에너지 구간 \\(E_\\mathrm{g}\\). 크기로 반도체와 절연체를 가른다.",
    "chapters": [
     "electrical-properties#conduction"
    ]
   },
   {
    "ko": "라멜라",
    "en": "lamella",
    "abbr": "",
    "def": "고분자 사슬이 약 10 nm마다 되접히며 만든 얇은 판 모양 결정. 사이에 비정질층이 끼고 이음 사슬이 판들을 묶는다.",
    "chapters": [
     "polymers#crystallinity-transitions"
    ]
   },
   {
    "ko": "라슨–밀러 변수",
    "en": "Larson–Miller parameter",
    "abbr": "",
    "def": "크리프 파단 자료를 한 곡선으로 모으는 변수 \\(\\mathrm{LMP} = T(C + \\log_{10}t_r)\\)(\\(T\\) K, \\(t_r\\) h, \\(C\\approx20\\)). 고온 단시간 시험을 저온 장시간 수명으로 외삽한다.",
    "chapters": [
     "fracture-fatigue-creep#creep"
    ]
   },
   {
    "ko": "라이너",
    "en": "liner",
    "abbr": "",
    "def": "배선 금속과 방벽 사이에 얹는 얇은 층(Ta, Co, Ru 등). 구리의 밀착과 채움, 일렉트로마이그레이션 수명을 좋게 한다.",
    "chapters": [
     "diffusion-in-materials#barrier"
    ]
   },
   {
    "ko": "러더퍼드 후방 산란 분광",
    "en": "Rutherford backscattering spectrometry, RBS",
    "abbr": "",
    "def": "MeV He 이온을 쏘아 뒤로 튄 이온의 에너지로 원소 질량과 깊이를 재는 분석법. 표준 시료 없이 조성과 면밀도를 준다.",
    "chapters": [
     "characterization#depth"
    ]
   },
   {
    "ko": "레질리언스",
    "en": "resilience",
    "abbr": "",
    "def": "항복할 때까지 탄성으로 흡수했다가 하중을 빼면 돌려주는 단위 부피당 에너지 \\(U_r = \\sigma_\\mathrm y^2/2E\\).",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "로그 속도 법칙",
    "en": "logarithmic rate law",
    "abbr": "",
    "def": "상온 근처에서 수 nm의 얇은 산화막이 \\(x = k_e\\log(1+t/\\tau)\\)처럼 자라다 거의 멈추는 법칙. Al·Cu의 자연 산화막이 예다.",
    "chapters": [
     "degradation-reliability#oxidation"
    ]
   },
   {
    "ko": "로렌츠 수",
    "en": "Lorenz number",
    "abbr": "",
    "def": "비데만–프란츠 법칙의 비례 상수 \\(L = \\kappa/(\\sigma T)\\). 자유 전자 이론값은 \\(L_0 = (\\pi^2/3)(k_\\mathrm{B}/e)^2 = 2.44\\times10^{-8}\\) WΩ/K²이다.",
    "chapters": [
     "thermal-optical-properties#conduction"
    ]
   },
   {
    "ko": "루이스–닐슨 식",
    "en": "Lewis–Nielsen equation",
    "abbr": "",
    "def": "입자 모양 인자 \\(A\\)와 최대 충전 분율 \\(\\phi_m\\)을 넣어 고충전 복합재료의 열전도도 급증을 따라가는 반경험식.",
    "chapters": [
     "composites#fillers"
    ]
   },
   {
    "ko": "리드–쇼클리 식",
    "en": "Read–Shockley equation",
    "abbr": "",
    "def": "저각 결정립계의 에너지가 방위 차이 \\(\\theta\\)에 대해 \\(\\gamma = \\gamma_0\\theta(A-\\ln\\theta)\\)로 변한다는 식. 경계를 이루는 전위 벽의 탄성 에너지에서 나온다.",
    "chapters": [
     "defects#interfaces"
    ]
   },
   {
    "ko": "마르텐사이트 변태",
    "en": "martensitic transformation",
    "abbr": "",
    "def": "원자가 이웃 관계를 유지한 채 협동적 전단으로 격자를 바꾸는 무확산 변태. 탄소강에서는 탄소가 갇힌 체심 정방정 마르텐사이트가 생긴다.",
    "chapters": [
     "transformation-kinetics#martensite"
    ]
   },
   {
    "ko": "마스터 곡선",
    "en": "master curve",
    "abbr": "",
    "def": "여러 온도에서 잰 짧은 점탄성 곡선을 이동 인자만큼 옮겨 이은, 기준 온도에서의 넓은 시간(진동수) 범위 곡선.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "마이너 법칙",
    "en": "Miner's rule",
    "abbr": "",
    "def": "진폭 \\(\\sigma_i\\)로 \\(n_i\\)회 받으면 수명의 \\(n_i/N_i\\)를 쓴다고 보고 그 합 \\(\\sum n_i/N_i\\)가 1이 될 때 파단한다는 선형 누적 손상 법칙.",
    "chapters": [
     "fracture-fatigue-creep#fatigue"
    ]
   },
   {
    "ko": "마타노 면",
    "en": "Matano plane",
    "abbr": "",
    "def": "\\(\\int_{C_\\mathrm R}^{C_\\mathrm L}(x-x_\\mathrm M)\\,dC = 0\\)을 만족하는 기준면. 양쪽으로 들어가고 나간 원자 수가 같으며, 몰부피가 일정하면 처음 접합면과 같다.",
    "chapters": [
     "diffusion-in-materials#matano"
    ]
   },
   {
    "ko": "마티센 규칙",
    "en": "Matthiessen's rule",
    "abbr": "",
    "def": "금속의 전체 저항률이 열 진동·불순물·변형(결함) 기여의 합 \\(\\rho = \\rho_\\mathrm{t} + \\rho_\\mathrm{i} + \\rho_\\mathrm{d}\\)이라는 규칙. 독립 산란의 빈도가 더해지기 때문이다.",
    "chapters": [
     "electrical-properties#metals"
    ]
   },
   {
    "ko": "망목 고분자",
    "en": "network polymer",
    "abbr": "",
    "def": "가교가 촘촘해 시료 전체가 하나의 3차원 공유 결합 그물이 된 고분자. 에폭시·페놀 수지가 대표적이다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "망목 수식제",
    "en": "network modifier",
    "abbr": "",
    "def": "망목에 들어가 다리 산소를 비다리 산소로 끊는 산화물(Na₂O·K₂O·CaO 등). 점도와 가공 온도를 낮춘다.",
    "chapters": [
     "ceramics-glasses#silicates"
    ]
   },
   {
    "ko": "망목 형성제",
    "en": "network former",
    "abbr": "",
    "def": "혼자서 연속 무작위 망목을 이루어 유리를 만들 수 있는 산화물. SiO₂·B₂O₃·GeO₂·P₂O₅ 등.",
    "chapters": [
     "ceramics-glasses#silicates"
    ]
   },
   {
    "ko": "매트릭스 효과",
    "en": "matrix effect",
    "abbr": "",
    "def": "이차 이온 수율이 주변 원자(매트릭스)에 따라 크게 달라지는 현상. 계면 근처 SIMS 농도를 왜곡한다.",
    "chapters": [
     "characterization#depth"
    ]
   },
   {
    "ko": "맥스웰 모형",
    "en": "Maxwell model",
    "abbr": "",
    "def": "스프링과 대시포트를 직렬로 이은 점탄성 모형. 응력 완화를 \\(e^{-t/\\tau}\\)(\\(\\tau = \\eta/E\\))로 그리지만 크리프에서는 끝없이 흐른다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "맥스웰 식",
    "en": "Maxwell equation",
    "abbr": "",
    "def": "연속 기지 속에 고립된 구형 입자가 흩어진 복합재료의 유효 열전도도 식(맥스웰–오이켄). 열전도의 하신–슈트리크만 하한과 같다.",
    "chapters": [
     "composites#fillers"
    ]
   },
   {
    "ko": "면밀도",
    "en": "planar density",
    "abbr": "",
    "def": "결정면 위에 중심이 놓인 원자 수를 면의 넓이로 나눈 값. FCC는 {111}, BCC는 {110}에서 가장 크며 슬립면이 된다.",
    "chapters": [
     "bonding-crystal-structure#miller"
    ]
   },
   {
    "ko": "면심 입방",
    "en": "face-centered cubic, FCC",
    "abbr": "",
    "def": "정육면체의 꼭짓점과 여섯 면의 중심에 원자가 있는 결정 구조(FCC). 단위정 원자 4개, 배위수 12, 충진율 0.74, \\(a = 2\\sqrt2R\\).",
    "chapters": [
     "bonding-crystal-structure#metals"
    ]
   },
   {
    "ko": "면저항",
    "en": "sheet resistance",
    "abbr": "",
    "def": "박막의 저항률을 두께로 나눈 값 \\(R_\\mathrm{s} = \\rho/t\\)(Ω/□). 정사각형 한 칸의 저항으로, 선의 저항은 \\(R_\\mathrm{s}L/w\\)이다.",
    "chapters": [
     "electrical-properties#films"
    ]
   },
   {
    "ko": "모스 퍼텐셜",
    "en": "Morse potential",
    "abbr": "",
    "def": "깊이 \\(D\\), 평형 거리 \\(r_0\\), 폭 매개변수 \\(a\\)로 쓰는 결합 에너지 곡선 \\(E = D[(1-e^{-a(r-r_0)})^2-1]\\). 바닥 곡률은 \\(2Da^2\\)이다.",
    "chapters": [
     "bonding-crystal-structure#bonding"
    ]
   },
   {
    "ko": "모어 원",
    "en": "Mohr's circle",
    "abbr": "",
    "def": "좌표를 돌릴 때 \\((\\sigma_{x'}, \\tau_{x'y'})\\)이 그리는 원. 중심은 \\((\\sigma_x+\\sigma_y)/2\\), 반지름은 면 안 최대 전단 응력 \\(R\\)이며 요소를 \\(\\theta\\) 돌리면 점은 \\(2\\theta\\) 돈다.",
    "chapters": [
     "elasticity#mohr"
    ]
   },
   {
    "ko": "모즐리 법칙",
    "en": "Moseley's law",
    "abbr": "",
    "def": "특성 X선 에너지가 \\((Z-1)^2\\)에 비례한다는 법칙. Kα선은 \\(E\\approx10.2\\ \\text{eV}\\,(Z-1)^2\\)이다.",
    "chapters": [
     "characterization#spectroscopy"
    ]
   },
   {
    "ko": "목적 함수",
    "en": "objective",
    "abbr": "",
    "def": "재료 선택에서 최소화하거나 최대화할 양(질량, 원가, 열 변형 등). 제약 조건으로 자유 변수를 소거한 뒤 재료 성질의 함수로 쓴다.",
    "chapters": [
     "materials-selection#indices"
    ]
   },
   {
    "ko": "몽크먼–그랜트 관계",
    "en": "Monkman–Grant relation",
    "abbr": "",
    "def": "정상 상태 크리프 속도와 파단 시간의 곱이 거의 일정하다는 경험 관계 \\(\\dot\\varepsilon_s t_r\\approx C_\\mathrm{MG}\\).",
    "chapters": [
     "fracture-fatigue-creep#creep"
    ]
   },
   {
    "ko": "무게평균 분자량",
    "en": "weight-average molecular weight",
    "abbr": "",
    "def": "무게 분율로 평균한 몰 질량 \\(M_w = \\sum w_iM_i = \\sum x_iM_i^2/M_n\\). 긴 사슬에 민감하며 광산란으로 잰다.",
    "chapters": [
     "polymers#molecular-weight"
    ]
   },
   {
    "ko": "무열 변태",
    "en": "athermal transformation",
    "abbr": "",
    "def": "분율이 시간이 아니라 도달한 온도로 정해지는 변태. 탄소강의 마르텐사이트는 한 온도에 오래 두어도 거의 늘지 않고 더 식혀야 늘어난다.",
    "chapters": [
     "transformation-kinetics#martensite"
    ]
   },
   {
    "ko": "무응력 온도",
    "en": "stress-free temperature",
    "abbr": "",
    "def": "막이나 배선에 열응력이 없는 기준 온도. 보통 마지막 고온 공정 온도이며 열응력은 이 온도와의 차에 비례한다.",
    "chapters": [
     "degradation-reliability#stress-migration"
    ]
   },
   {
    "ko": "미끄럼 운동",
    "en": "glide",
    "abbr": "",
    "def": "전위가 버거스 벡터와 전위선을 품은 미끄럼면 안에서 움직이는 것. 확산이 필요 없어 낮은 온도에서도 일어난다.",
    "chapters": [
     "defects#dislocations"
    ]
   },
   {
    "ko": "미세 구성 요소",
    "en": "microconstituent",
    "abbr": "",
    "def": "현미경에서 특징 있는 모양으로 구별되는 조직의 단위. 초정 α와 공정 조직, 초석 페라이트와 펄라이트처럼 한 구성 요소가 여러 상으로 이루어질 수 있다.",
    "chapters": [
     "phase-diagrams-microstructure#eutectic"
    ]
   },
   {
    "ko": "미세 변형",
    "en": "microstrain",
    "abbr": "",
    "def": "결정립마다 또는 결함 주변마다 면 간격이 고르지 않게 달라진 불균일 변형. 회절 피크를 \\(4\\varepsilon\\tan\\theta\\)만큼 넓힌다.",
    "chapters": [
     "characterization#xrd"
    ]
   },
   {
    "ko": "미세 편석",
    "en": "microsegregation",
    "abbr": "",
    "def": "덴드라이트 팔이나 셀 사이에 마지막으로 굳은 액체에 용질이 몰려 생긴 수–수십 µm 규모의 조성 불균일.",
    "chapters": [
     "solidification-growth#casting"
    ]
   },
   {
    "ko": "미세조직",
    "en": "microstructure",
    "abbr": "",
    "def": "광학·전자 현미경으로 보이는 규모(nm–mm)의 내부 구조. 결정립의 크기·모양·방위, 상의 종류와 분포, 기공·석출물 등을 말하며 공정에 따라 바뀐다.",
    "chapters": [
     "materials-selection#tetrahedron"
    ]
   },
   {
    "ko": "밀러 지수",
    "en": "Miller indices",
    "abbr": "",
    "def": "결정 속 방향 [uvw]과 면 (hkl)을 가장 작은 정수로 나타내는 표기. 면은 축 절편의 역수를 정수로 맞춰 얻는다.",
    "chapters": [
     "bonding-crystal-structure#miller"
    ]
   },
   {
    "ko": "바그너 이론",
    "en": "Wagner theory",
    "abbr": "",
    "def": "산화막을 혼합 전도체로 보고, 막 양쪽의 산소 화학 퍼텐셜 차가 이온과 전자를 함께 확산시킨다는 조건에서 포물선 속도 상수를 구한 이론.",
    "chapters": [
     "degradation-reliability#oxidation"
    ]
   },
   {
    "ko": "바르시니 식",
    "en": "Varshni equation",
    "abbr": "",
    "def": "띠틈의 온도 의존을 나타내는 실험식 \\(E_g(T) = E_g(0) - aT^2/(T+b)\\). 온도가 오르면 띠틈이 줄어 흡수 끝과 발광이 긴 파장으로 이동한다.",
    "chapters": [
     "thermal-optical-properties#bandgap"
    ]
   },
   {
    "ko": "바스킨 식",
    "en": "Basquin equation",
    "abbr": "",
    "def": "고주기 피로의 응력 진폭–수명 관계 \\(\\sigma_a = \\sigma_f'(2N_f)^b\\).",
    "chapters": [
     "fracture-fatigue-creep#fatigue"
    ]
   },
   {
    "ko": "바우싱거 효과",
    "en": "Bauschinger effect",
    "abbr": "",
    "def": "한 방향으로 소성 변형한 금속이 반대 방향 하중에서는 처음보다 낮은 응력에서 항복하는 현상.",
    "chapters": [
     "plasticity-strengthening#hardening"
    ]
   },
   {
    "ko": "반도체",
    "en": "semiconductors",
    "abbr": "",
    "def": "띠틈이 수 eV 이하인 공유 결합 결정으로, 도핑과 온도로 전기 저항률을 여러 자릿수 조절할 수 있는 재료. Si, Ge, GaAs, GaN, SiC 등.",
    "chapters": [
     "materials-selection#classes"
    ]
   },
   {
    "ko": "반복 단위",
    "en": "repeat unit, mer",
    "abbr": "",
    "def": "고분자 사슬에서 되풀이되는 구조 단위(mer). 폴리에틸렌은 \\(\\ce{-CH2-CH2-}\\)(28.05 g/mol)이다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "반응 정도",
    "en": "extent of reaction",
    "abbr": "",
    "def": "단계 중합에서 반응한 작용기의 분율 \\(p\\). 카로더스 식에 따라 수평균 중합도는 \\(X_n = 1/(1-p)\\)이다.",
    "chapters": [
     "polymers#molecular-weight"
    ]
   },
   {
    "ko": "반응 확산",
    "en": "reactive diffusion",
    "abbr": "",
    "def": "확산과 화학 반응이 동시에 일어나 두 물질 사이에 화합물 층이 자라는 과정. 확산이 지배하면 층 두께가 시간의 제곱근으로 자란다.",
    "chapters": [
     "diffusion-in-materials#reactive"
    ]
   },
   {
    "ko": "반정합 계면",
    "en": "semicoherent interface",
    "abbr": "",
    "def": "격자 불일치를 일정 간격의 계면 전위(불일치 전위)로 흡수하고 나머지 부분은 정합을 유지하는 계면.",
    "chapters": [
     "transformation-kinetics#nucleation"
    ]
   },
   {
    "ko": "배위 다면체",
    "en": "coordination polyhedron",
    "abbr": "",
    "def": "한 양이온을 둘러싼 음이온들의 중심을 이은 다면체(삼각형·사면체·팔면체·정육면체 등). 이온 결정 구조를 다면체의 연결로 이해한다.",
    "chapters": [
     "bonding-crystal-structure#interstitial"
    ]
   },
   {
    "ko": "배위수",
    "en": "coordination number",
    "abbr": "",
    "def": "한 원자(이온)에 직접 닿아 있는 가장 가까운 이웃의 수. SC 6, BCC 8, FCC·HCP 12, 다이아몬드 4다.",
    "chapters": [
     "bonding-crystal-structure#metals"
    ]
   },
   {
    "ko": "배향 분극",
    "en": "orientation polarization",
    "abbr": "",
    "def": "영구 쌍극자를 가진 분자가 열 요동을 이기고 전기장 쪽으로 정렬해 생기는 분극. 디바이 완화를 보인다.",
    "chapters": [
     "electrical-properties#dielectrics"
    ]
   },
   {
    "ko": "버거스 벡터",
    "en": "Burgers vector",
    "abbr": "",
    "def": "전위가 만드는 격자 어긋남의 크기와 방향을 나타내는 벡터 \\(\\mathbf b\\). 버거스 회로의 닫힘 실패로 정의하며 보통 가장 짧은 격자 벡터다.",
    "chapters": [
     "defects#dislocations"
    ]
   },
   {
    "ko": "버거스 회로",
    "en": "Burgers circuit",
    "abbr": "",
    "def": "전위를 둘러싸고 원자에서 원자로 걷는 닫힌 경로. 같은 걸음을 완전 결정에서 되풀이했을 때의 닫힘 실패가 버거스 벡터다(FS/RH 약속).",
    "chapters": [
     "defects#dislocations"
    ]
   },
   {
    "ko": "베가드 법칙",
    "en": "Vegard's law",
    "abbr": "",
    "def": "치환형 고용체의 격자 상수가 조성에 따라 성분 격자 상수 사이를 선형 보간한 값 \\(a = (1-x)a_A + xa_B\\)이 된다는 근사.",
    "chapters": [
     "defects#solid-solutions"
    ]
   },
   {
    "ko": "베릴륨 구리",
    "en": "beryllium copper",
    "abbr": "",
    "def": "Be 약 2 %를 넣어 용체화·시효로 석출 경화한 구리 합금. 인장 강도가 1300 MPa에 이르러 스프링·커넥터·프로브 핀에 쓴다.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "베이나이트",
    "en": "bainite",
    "abbr": "",
    "def": "강을 펄라이트 코와 \\(M_s\\) 사이 온도에서 변태시켜 얻는, 페라이트 판(또는 바늘) 사이에 미세한 시멘타이트가 박힌 조직. 펄라이트보다 강하고 인성이 좋다.",
    "chapters": [
     "transformation-kinetics#ttt-cct"
    ]
   },
   {
    "ko": "베인 변형",
    "en": "Bain strain",
    "abbr": "",
    "def": "FCC 두 칸 속의 BCT 칸을 c축으로 약 20 % 줄이고 a축으로 늘여 BCC(또는 BCT)로 바꾸는 최소 격자 변형. 마르텐사이트 변태의 격자 대응을 설명한다.",
    "chapters": [
     "transformation-kinetics#martensite"
    ]
   },
   {
    "ko": "벽개",
    "en": "cleavage",
    "abbr": "",
    "def": "결정이 특정 결정면을 따라 원자 결합이 끊겨 갈라지는 취성 파괴 방식.",
    "chapters": [
     "fracture-fatigue-creep#dbtt"
    ]
   },
   {
    "ko": "변태 강화",
    "en": "transformation toughening",
    "abbr": "",
    "def": "균열 끝 응력이 준안정 정방정 ZrO₂를 단사정으로 바꾸며 생기는 부피 팽창이 균열을 눌러 닫아 파괴 인성을 높이는 기구.",
    "chapters": [
     "ceramics-glasses#mechanical"
    ]
   },
   {
    "ko": "변형 기구 지도",
    "en": "deformation-mechanism map",
    "abbr": "",
    "def": "정규화 응력 \\(\\sigma/G\\)와 상동 온도 \\(T/T_m\\)의 평면에 가장 빠른 변형 기구의 영역과 변형 속도 등고선을 그린 애시비의 지도.",
    "chapters": [
     "fracture-fatigue-creep#creep"
    ]
   },
   {
    "ko": "변형 텐서",
    "en": "strain tensor",
    "abbr": "",
    "def": "변위 기울기의 대칭 부분 \\(\\varepsilon_{ij} = \\tfrac12(\\partial u_i/\\partial x_j+\\partial u_j/\\partial x_i)\\). 길이와 각도의 변화를 나타내며, 반대칭 부분(강체 회전)은 응력을 만들지 않는다.",
    "chapters": [
     "elasticity#tensor"
    ]
   },
   {
    "ko": "변형점",
    "en": "strain point",
    "abbr": "",
    "def": "유리의 점도가 \\(10^{13.5}\\) Pa·s인 온도. 이 아래에서는 응력이 거의 풀리지 않아 사실상 탄성 고체다.",
    "chapters": [
     "ceramics-glasses#viscosity"
    ]
   },
   {
    "ko": "보론코프 기준",
    "en": "Voronkov criterion",
    "abbr": "",
    "def": "초크랄스키 실리콘에서 인상 속도와 계면 온도 기울기의 비 \\(\\xi = V/G\\)가 임계값(약 0.13 mm²/(min·K))보다 크면 공공형, 작으면 틈새형 결함이 남는다는 기준.",
    "chapters": [
     "solidification-growth#czochralski"
    ]
   },
   {
    "ko": "보이드",
    "en": "void",
    "abbr": "",
    "def": "금속 속에 공공이 모여 생긴 빈 공간. 배선에서 플럭스가 발산하는 음극 끝 등에 생겨 저항을 키우고 결국 배선을 끊는다.",
    "chapters": [
     "degradation-reliability#electromigration"
    ]
   },
   {
    "ko": "복소 굴절률",
    "en": "complex refractive index",
    "abbr": "",
    "def": "\\(\\tilde n = n + ik\\). 실수부 \\(n\\)은 재료 속 빛의 속도와 굴절을, 허수부(소광 계수) \\(k\\)는 흡수를 정하며, 반사율과 흡수 계수가 이 둘로 계산된다.",
    "chapters": [
     "thermal-optical-properties#optics"
    ]
   },
   {
    "ko": "복합재료",
    "en": "composites",
    "abbr": "",
    "def": "성질이 다른 두 가지 이상의 재료(기지와 강화재)를 섞어 각 재료만으로는 얻기 어려운 성질 조합을 얻은 재료. CFRP, FR-4, EMC 등.",
    "chapters": [
     "materials-selection#classes"
    ]
   },
   {
    "ko": "볼츠만–마타노 해석",
    "en": "Boltzmann–Matano analysis",
    "abbr": "",
    "def": "볼츠만 변환 \\(\\lambda = x/\\sqrt t\\)로 확산 방정식을 상미분 방정식으로 바꾸어, 측정한 농도 분포 하나에서 농도마다 다른 상호 확산 계수 \\(\\tilde D(C)\\)를 구하는 방법.",
    "chapters": [
     "diffusion-in-materials#matano"
    ]
   },
   {
    "ko": "부동태",
    "en": "passivity",
    "abbr": "",
    "def": "금속 표면의 얇고 치밀한 산화막이 금속을 환경과 차단해 부식이 사실상 멈춘 상태. 스테인리스강의 Cr₂O₃, 알루미늄·티타늄의 산화막이 예다.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "부식",
    "en": "corrosion",
    "abbr": "",
    "def": "물이 있는 환경에서 금속이 양극 반응으로 이온이 되어 녹고, 그 전자가 다른 곳에서 산소나 수소 이온을 환원하는 전기화학적 열화.",
    "chapters": [
     "degradation-reliability#corrosion"
    ]
   },
   {
    "ko": "부식 침투 속도",
    "en": "corrosion penetration rate",
    "abbr": "",
    "def": "부식으로 표면이 깎여 들어가는 속도. 전류 밀도로는 \\(r = iM/(nF\\rho)\\), 질량 감소 시험으로는 \\(\\mathrm{CPR} = KW/(\\rho At)\\)로 구한다.",
    "chapters": [
     "degradation-reliability#corrosion"
    ]
   },
   {
    "ko": "부정합 전위",
    "en": "misfit dislocation",
    "abbr": "",
    "def": "이종 에피 막이 임계 두께를 넘었을 때 계면에 생겨 격자 불일치 변형을 푸는 전위. 간격은 \\(S = b_\\text{eff}/(|f|-\\varepsilon)\\)이다.",
    "chapters": [
     "solidification-growth#epitaxy-films"
    ]
   },
   {
    "ko": "분극",
    "en": "polarization",
    "abbr": "",
    "def": "단위 부피당 전기 쌍극자 모멘트 \\(P = \\varepsilon_0(\\varepsilon_\\mathrm{r} - 1)E\\)(C/m²).",
    "chapters": [
     "electrical-properties#dielectrics"
    ]
   },
   {
    "ko": "분극률",
    "en": "polarizability",
    "abbr": "",
    "def": "원자·분자의 유도 쌍극자 모멘트와 국소 전기장의 비 \\(\\alpha = p/E_\\mathrm{loc}\\).",
    "chapters": [
     "electrical-properties#dielectrics"
    ]
   },
   {
    "ko": "분말 야금",
    "en": "powder metallurgy",
    "abbr": "",
    "def": "금속 가루를 틀에 눌러 성형한 뒤 녹는점 아래에서 소결해 부품을 만드는 공정. 녹이기 어려운 W·Mo, 정밀 조성의 타깃 제조에 쓴다.",
    "chapters": [
     "metals-alloys#processing"
    ]
   },
   {
    "ko": "분산도",
    "en": "dispersity, PDI",
    "abbr": "",
    "def": "분자량 분포의 너비 \\(Đ = M_w/M_n\\ge1\\). 모든 사슬의 길이가 같으면 1이고, 단계 중합의 플로리 분포는 \\(1+p\\to2\\)다.",
    "chapters": [
     "polymers#molecular-weight"
    ]
   },
   {
    "ko": "분역",
    "en": "domain",
    "abbr": "",
    "def": "강유전체(또는 강자성체) 속에서 자발 분극의 방향이 같은 영역. 경계를 분역 벽이라 한다.",
    "chapters": [
     "electrical-properties#ferroelectrics"
    ]
   },
   {
    "ko": "불량 분석",
    "en": "failure analysis, FA",
    "abbr": "",
    "def": "고장 난 소자·제품에서 불량 모드를 확인하고 위치를 찾아 물리적 원인과 근본 원인을 밝히는 일. 비파괴에서 파괴 순서로 진행한다.",
    "chapters": [
     "characterization#choose"
    ]
   },
   {
    "ko": "불림",
    "en": "normalizing",
    "abbr": "",
    "def": "강을 A₃보다 높게 오스테나이트화한 뒤 공기 중에서 식혀 미세하고 고른 펄라이트 조직을 얻는 열처리.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "브라우어 도표",
    "en": "Brouwer diagram",
    "abbr": "",
    "def": "결함·전하 운반자 농도의 로그를 산소 분압 등의 로그에 대해 그린 그림. 직선 구간의 기울기로 어느 결함이 전하 중성을 맡는지 안다.",
    "chapters": [
     "defects#ionic-defects"
    ]
   },
   {
    "ko": "브리넬 경도",
    "en": "Brinell hardness",
    "abbr": "",
    "def": "지름 10 mm 구를 눌러 남은 자국의 표면적으로 하중을 나눈 경도 HB. 강에서는 \\(\\mathrm{TS}\\approx3.45\\,\\mathrm{HB}\\) MPa다.",
    "chapters": [
     "plasticity-strengthening#hardness"
    ]
   },
   {
    "ko": "블랙 식",
    "en": "Black's equation",
    "abbr": "",
    "def": "일렉트로마이그레이션 중앙 수명의 경험식 \\(t_{50} = Aj^{-n}\\exp(E_a/kT)\\). 가속 시험 결과를 사용 조건 수명으로 환산하는 데 쓴다.",
    "chapters": [
     "degradation-reliability#electromigration"
    ]
   },
   {
    "ko": "블레흐 길이",
    "en": "Blech length",
    "abbr": "",
    "def": "역응력이 전자 바람과 균형을 이루어 EM이 멈추는 임계 배선 길이 \\(L_c = \\Delta\\sigma_c\\Omega/(Z^*e\\rho j)\\). 이보다 짧은 선은 EM으로 고장 나지 않는다.",
    "chapters": [
     "degradation-reliability#electromigration"
    ]
   },
   {
    "ko": "블록 공중합체",
    "en": "block copolymer",
    "abbr": "",
    "def": "서로 다른 단량체 사슬 덩어리(블록)가 공유 결합으로 이어진 공중합체. 섞이지 않는 블록이 수십 nm 크기로 미세 상분리한다(SBS, DSA용 PS-b-PMMA).",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "비강도",
    "en": "specific strength",
    "abbr": "",
    "def": "강도를 밀도로 나눈 값 \\(\\sigma_\\mathrm{y}/\\rho\\). 같은 하중을 버티는 인장 부재의 가벼움을 나타낸다.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "비강성",
    "en": "specific stiffness",
    "abbr": "",
    "def": "영률을 밀도로 나눈 값 \\(E/\\rho\\). 같은 강성의 인장 봉을 가장 가볍게 만드는 재료를 고르는 성능 지수다.",
    "chapters": [
     "materials-selection#properties"
    ]
   },
   {
    "ko": "비다리 산소",
    "en": "non-bridging oxygen",
    "abbr": "",
    "def": "한 사면체에만 붙고 이웃과 이어지지 않은 산소. 망목 수식제가 다리 산소를 끊어 만들며 음전하를 띤다.",
    "chapters": [
     "ceramics-glasses#silicates"
    ]
   },
   {
    "ko": "비데만–프란츠 법칙",
    "en": "Wiedemann–Franz law",
    "abbr": "",
    "def": "금속의 전자 열전도도가 전기 전도도와 온도에 비례한다는 법칙 \\(\\kappa_\\mathrm{e} = L\\sigma T\\), \\(L \\approx 2.44\\times10^{-8}\\) W·Ω/K².",
    "chapters": [
     "electrical-properties#metals"
    ]
   },
   {
    "ko": "비정상 결정립 성장",
    "en": "abnormal grain growth",
    "abbr": "",
    "def": "정상 성장이 멈춘 조직에서 이동도·에너지 이점을 얻은 소수의 결정립이 주위를 먹으며 매우 크게 자라는 현상(2차 재결정).",
    "chapters": [
     "solidification-growth#grain-growth"
    ]
   },
   {
    "ko": "비정질",
    "en": "amorphous",
    "abbr": "",
    "def": "원자 배열에 장범위 규칙성이 없고 이웃 거리 정도의 단범위 규칙만 남은 고체. 유리, 열산화 SiO₂, 비정질 실리콘이 예다.",
    "chapters": [
     "bonding-crystal-structure#noncrystalline"
    ]
   },
   {
    "ko": "비정합 계면",
    "en": "incoherent interface",
    "abbr": "",
    "def": "두 상의 원자 배열이 계면에서 이어지지 않는 계면. 변형 에너지는 작지만 계면 에너지가 0.5–1 J/m²로 크다.",
    "chapters": [
     "transformation-kinetics#nucleation"
    ]
   },
   {
    "ko": "비조화 퍼텐셜",
    "en": "anharmonic potential",
    "abbr": "",
    "def": "바닥 근처에서 포물선에서 벗어난 비대칭 결합 퍼텐셜. 밀 때보다 당길 때 완만해서 진동이 커질수록 평균 원자 거리가 늘어나며, 이것이 열팽창의 원자적 기원이다.",
    "chapters": [
     "thermal-optical-properties#expansion"
    ]
   },
   {
    "ko": "비커스 경도",
    "en": "Vickers hardness",
    "abbr": "",
    "def": "맞꼭지각 136° 다이아몬드 사각뿔 자국의 대각선 \\(d\\)로 구한 경도 \\(\\mathrm{HV} = 1.8544F/d^2\\)(F kgf, d mm).",
    "chapters": [
     "plasticity-strengthening#hardness"
    ]
   },
   {
    "ko": "비탄성 평균 자유 행로",
    "en": "inelastic mean free path, IMFP",
    "abbr": "",
    "def": "전자가 에너지를 잃지 않고 고체 속을 지나는 평균 거리 \\(\\lambda\\). XPS 정보 깊이 \\(3\\lambda\\cos\\theta\\)를 정한다.",
    "chapters": [
     "characterization#spectroscopy"
    ]
   },
   {
    "ko": "사면체 자리",
    "en": "tetrahedral site",
    "abbr": "",
    "def": "이웃 원자 4개가 사면체로 둘러싼 틈새 자리. FCC에서는 0.225R, BCC에서는 0.291R 크기의 구가 들어간다.",
    "chapters": [
     "bonding-crystal-structure#interstitial"
    ]
   },
   {
    "ko": "사슬 중합",
    "en": "chain-growth polymerization",
    "abbr": "",
    "def": "라디칼·이온 같은 활성 중심이 단량체의 이중 결합을 하나씩 열며 빠르게 덧붙이는 중합. 개시–성장–종결 단계로 진행하며 비닐 고분자가 이렇게 만들어진다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "상",
    "en": "phase",
    "abbr": "",
    "def": "화학 조성과 결정 구조(원자 배열)가 고르게 같아 물리적으로 구별되는 물질의 덩어리. 액체 L, 고용체 α, 화합물 Fe₃C 등이 각각 하나의 상이다.",
    "chapters": [
     "phase-diagrams-microstructure#reading"
    ]
   },
   {
    "ko": "상 분석",
    "en": "phase identification",
    "abbr": "",
    "def": "측정한 회절 피크의 위치(면 간격)와 세기를 데이터베이스의 참조 패턴과 맞추어 시료를 이루는 결정상을 알아내는 일.",
    "chapters": [
     "characterization#xrd"
    ]
   },
   {
    "ko": "상관 인자",
    "en": "correlation factor",
    "abbr": "",
    "def": "공공 기구에서 추적자 원자의 연속된 뜀이 서로 상관되어(방금 떠난 자리로 되돌아가기 쉬워) 줄어드는 퍼짐의 비 \\(f = \\langle R^2\\rangle/na^2\\). FCC 0.781, BCC 0.727, 틈새 기구의 묽은 용질은 1이다.",
    "chapters": [
     "diffusion-in-materials#mechanisms"
    ]
   },
   {
    "ko": "상대 감도 인자",
    "en": "relative sensitivity factor, RSF",
    "abbr": "",
    "def": "SIMS에서 불순물/매트릭스 이온 세기 비를 농도로 바꾸는 계수 \\(C = \\mathrm{RSF}\\cdot I/I_\\text{m}\\). 같은 매트릭스의 표준 시료로 정한다.",
    "chapters": [
     "characterization#depth"
    ]
   },
   {
    "ko": "상동 온도",
    "en": "homologous temperature",
    "abbr": "",
    "def": "온도를 그 재료의 녹는점으로 나눈 값 \\(T/T_\\mathrm{m}\\)(둘 다 K). 확산·크리프·재결정 같은 열 활성 과정의 정도를 재료 사이에 비교하는 지표다.",
    "chapters": [
     "metals-alloys#interconnect"
    ]
   },
   {
    "ko": "상승 운동",
    "en": "climb",
    "abbr": "",
    "def": "칼날 전위가 반쪽 원자면 끝에 원자를 붙이거나 떼어 미끄럼면을 벗어나는 운동. 공공 확산이 필요해 고온에서만 일어난다.",
    "chapters": [
     "defects#dislocations"
    ]
   },
   {
    "ko": "상태도",
    "en": "phase diagram",
    "abbr": "",
    "def": "일정 압력에서 조성과 온도에 따라 평형 상태에 어떤 상이 얼마나 있는지를 나타낸 그림. 금속에서는 보통 가로축을 wt%, 세로축을 °C로 그린다.",
    "chapters": [
     "phase-diagrams-microstructure#reading"
    ]
   },
   {
    "ko": "상호 확산",
    "en": "interdiffusion",
    "abbr": "",
    "def": "두 성분이 서로 반대 방향으로 섞여 들어가는 확산. 실험실 좌표의 농도 분포는 하나의 상호 확산 계수 \\(\\tilde D\\)로 기술된다.",
    "chapters": [
     "diffusion-in-materials#interdiffusion"
    ]
   },
   {
    "ko": "상호작용 부피",
    "en": "interaction volume",
    "abbr": "",
    "def": "시료에 들어간 전자가 탄성·비탄성 산란을 거듭하며 멈출 때까지 지나간 영역. 이차 전자·후방 산란 전자·X선 신호의 출처다.",
    "chapters": [
     "characterization#beam"
    ]
   },
   {
    "ko": "색수차",
    "en": "chromatic aberration",
    "abbr": "",
    "def": "에너지가 다른 전자가 서로 다른 곳에 초점을 맺는 수차. 흐림이 \\(C_\\mathrm c\\alpha\\Delta E/E_0\\)이라 저전압에서 커진다.",
    "chapters": [
     "characterization#microscopy"
    ]
   },
   {
    "ko": "샌드위치 패널",
    "en": "sandwich panel",
    "abbr": "",
    "def": "단단한 얇은 면재 두 장을 가볍고 무른 심재로 띄워 붙인 구조 복합재료. 무게를 거의 늘리지 않고 굽힘 강성을 크게 높인다.",
    "chapters": [
     "composites#laminates"
    ]
   },
   {
    "ko": "샤르피 충격 시험",
    "en": "Charpy impact test",
    "abbr": "",
    "def": "V 노치 시편을 진자로 한 번에 쳐서 끊고 진자 높이 차로 흡수 에너지를 재는 시험. 온도별로 재서 연성–취성 전이를 찾는다.",
    "chapters": [
     "fracture-fatigue-creep#dbtt"
    ]
   },
   {
    "ko": "서냉점",
    "en": "annealing point",
    "abbr": "",
    "def": "유리의 점도가 \\(10^{12}\\) Pa·s인 온도. 내부 응력이 몇 분 안에 풀린다.",
    "chapters": [
     "ceramics-glasses#viscosity"
    ]
   },
   {
    "ko": "석출 경화",
    "en": "precipitation hardening",
    "abbr": "",
    "def": "용체화–급랭으로 만든 과포화 고용체를 시효해 미세한 석출물을 만들어 전위 운동을 막는 강화법. 시효 경화라고도 한다.",
    "chapters": [
     "transformation-kinetics#precipitation"
    ]
   },
   {
    "ko": "석출물",
    "en": "precipitate",
    "abbr": "",
    "def": "고용 한계를 넘은 용질이 만든 두 번째 상의 작은 입자. 기지와의 계면에 따라 정합·반정합·비정합으로 나뉘며 강화 수단이 된다.",
    "chapters": [
     "defects#grain-size"
    ]
   },
   {
    "ko": "선밀도",
    "en": "linear density",
    "abbr": "",
    "def": "결정 방향 벡터 위에 중심이 놓인 원자 수를 벡터 길이로 나눈 값. FCC는 ⟨110⟩, BCC는 ⟨111⟩에서 가장 크다.",
    "chapters": [
     "bonding-crystal-structure#miller"
    ]
   },
   {
    "ko": "선별",
    "en": "screening",
    "abbr": "",
    "def": "재료 선택 절차에서 제약 조건을 만족하지 못하는 재료를 지우는 단계. 성질 지도 위에 한계선이나 창을 그어 한다.",
    "chapters": [
     "materials-selection#selection"
    ]
   },
   {
    "ko": "선분 교차법",
    "en": "intercept method",
    "abbr": "",
    "def": "현미경 사진에 그은 시험선과 결정립계의 교차 수를 세어 평균 선분 교차 길이 \\(\\bar\\ell = L_T/PM\\)를 구하는 결정립 크기 측정법.",
    "chapters": [
     "defects#grain-size"
    ]
   },
   {
    "ko": "선장력",
    "en": "line tension",
    "abbr": "",
    "def": "전위선을 늘이는 데 드는 단위 길이당 에너지로, 전위를 곧게 펴려는 힘. 대략 \\(\\tfrac12Gb^2\\)이다.",
    "chapters": [
     "defects#stress-energy"
    ]
   },
   {
    "ko": "선형 고분자",
    "en": "linear polymer",
    "abbr": "",
    "def": "사슬이 가지나 가교 없이 한 줄로 이어진 고분자. 데우면 사슬이 미끄러져 녹는 열가소성 고분자가 된다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "선형 속도 법칙",
    "en": "linear rate law",
    "abbr": "",
    "def": "산화막 두께가 시간에 비례해 자라는 법칙 \\(x = k_lt\\). 막이 다공성이거나 갈라져 표면 반응이 속도를 정할 때 나타난다.",
    "chapters": [
     "degradation-reliability#oxidation"
    ]
   },
   {
    "ko": "섬아연석 구조",
    "en": "zinc blende structure",
    "abbr": "",
    "def": "다이아몬드 구조의 두 자리를 서로 다른 원소가 차지한 입방 구조(ZnS형). GaAs·InP·3C-SiC가 이 구조다.",
    "chapters": [
     "bonding-crystal-structure#covalent"
    ]
   },
   {
    "ko": "섬유 뽑힘",
    "en": "fiber pull-out",
    "abbr": "",
    "def": "균열면에서 떨어진 곳에서 끊어진 섬유 조각이 계면 마찰을 이기며 빠져나오는 파괴 기구. 뽑힘 에너지 \\(G_\\text{po} = V_f\\sigma_f^{*2}d/24\\tau\\)로 인성을 크게 높인다.",
    "chapters": [
     "composites#fracture"
    ]
   },
   {
    "ko": "성능 지수",
    "en": "performance index, material index",
    "abbr": "",
    "def": "목적 함수를 하중·치수 항과 재료 항으로 나눴을 때 재료 항(의 역수)으로, 클수록 성능이 좋은 재료 성질 조합. 예: 가볍고 단단한 보의 \\(E^{1/2}/\\rho\\).",
    "chapters": [
     "materials-selection#indices"
    ]
   },
   {
    "ko": "성형체",
    "en": "green body",
    "abbr": "",
    "def": "세라믹 가루를 눌러 모양을 만든, 아직 소결하지 않은 덩어리. 상대 밀도는 보통 0.5–0.6이다.",
    "chapters": [
     "ceramics-glasses#sintering"
    ]
   },
   {
    "ko": "세라믹",
    "en": "ceramics",
    "abbr": "",
    "def": "금속과 비금속 원소가 이온·공유 결합으로 이룬 무기 화합물(산화물·질화물·탄화물). 단단하고 내열성이 크지만 취성이며 대부분 전기 절연체다.",
    "chapters": [
     "materials-selection#classes"
    ]
   },
   {
    "ko": "셀마이어 식",
    "en": "Sellmeier equation",
    "abbr": "",
    "def": "굴절률의 파장 의존을 흡수 공명마다 로런츠 진동자 항을 더한 꼴 \\(n^2 = 1 + \\sum B_i\\lambda^2/(\\lambda^2 - C_i)\\)로 나타낸 분산식. 넓은 투명 영역에서 정확하다.",
    "chapters": [
     "thermal-optical-properties#optics"
    ]
   },
   {
    "ko": "셰르처 분해능",
    "en": "Scherzer resolution",
    "abbr": "",
    "def": "구면 수차가 있는 대물렌즈로 얻는 고분해능 TEM 점 분해능 \\(d = 0.66C_\\mathrm s^{1/4}\\lambda^{3/4}\\).",
    "chapters": [
     "characterization#microscopy"
    ]
   },
   {
    "ko": "소결",
    "en": "sintering",
    "abbr": "",
    "def": "가루 성형체를 녹는점 아래에서 가열해 입자들이 붙고 기공이 줄어 치밀한 고체가 되게 하는 과정. 구동력은 표면 에너지의 감소다.",
    "chapters": [
     "ceramics-glasses#sintering"
    ]
   },
   {
    "ko": "소성 영역",
    "en": "plastic zone",
    "abbr": "",
    "def": "균열 끝에서 응력이 항복 강도를 넘어 소성 변형한 영역. 평면 응력에서 크기는 약 \\((1/2\\pi)(K/\\sigma_\\mathrm{y})^2\\)이다.",
    "chapters": [
     "fracture-fatigue-creep#toughness"
    ]
   },
   {
    "ko": "손상 허용 설계",
    "en": "damage-tolerant design",
    "abbr": "",
    "def": "부재에 검출 한계 크기의 균열이 있다고 가정하고, 그 균열이 임계 크기에 이르기 전에 검사로 찾아내도록 검사 주기를 정하는 설계 방식.",
    "chapters": [
     "fracture-fatigue-creep#crack-growth"
    ]
   },
   {
    "ko": "손실 탄성률",
    "en": "loss modulus",
    "abbr": "",
    "def": "사인파 변형 시험에서 변형보다 90° 앞선 응력 성분의 비 \\(E'' = (\\sigma_0/\\varepsilon_0)\\sin\\delta\\). 한 주기에 열로 흩어지는 에너지 \\(\\pi\\varepsilon_0^2E''\\)를 정한다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "손실 탄젠트",
    "en": "loss tangent",
    "abbr": "",
    "def": "\\(\\tan\\delta = E''/E'\\). 재료의 감쇠 능력이며, DMA 온도 주사에서 봉우리를 이루는 온도를 유리 전이 온도로 읽는다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "솔더",
    "en": "solder",
    "abbr": "",
    "def": "접합할 금속보다 낮은 온도에서 녹아 틈을 채우고 굳어 전기적·기계적으로 잇는 합금. Sn–37Pb, SAC305(Sn–3.0Ag–0.5Cu) 등.",
    "chapters": [
     "metals-alloys#joining"
    ]
   },
   {
    "ko": "쇼클리 부분 전위",
    "en": "Shockley partial dislocation",
    "abbr": "",
    "def": "FCC의 {111}면에서 완전 전위 \\(\\tfrac a2\\langle110\\rangle\\)이 갈라져 생기는 \\(\\tfrac a6\\langle112\\rangle\\) 전위. 둘 사이에 적층 결함 띠를 낀다.",
    "chapters": [
     "defects#interfaces"
    ]
   },
   {
    "ko": "쇼트키 결함",
    "en": "Schottky defect",
    "abbr": "",
    "def": "이온 결정에서 양이온 공공과 음이온 공공이 화학량론 비로 함께 생긴 결함 쌍. 분율은 \\(\\exp(-Q_s/2kT)\\)이다.",
    "chapters": [
     "defects#ionic-defects"
    ]
   },
   {
    "ko": "수분 민감도 등급",
    "en": "moisture sensitivity level",
    "abbr": "",
    "def": "플라스틱 패키지가 리플로 전에 견딜 수 있는 흡습량에 따라 매긴 등급(JEDEC J-STD-020). 등급마다 방습 포장 개봉 뒤 허용 시간이 정해진다.",
    "chapters": [
     "degradation-reliability#whisker-moisture"
    ]
   },
   {
    "ko": "수평균 분자량",
    "en": "number-average molecular weight",
    "abbr": "",
    "def": "사슬마다 같은 무게를 주어 평균한 몰 질량 \\(M_n = \\sum x_iM_i\\). 짧은 사슬에 민감하며 삼투압·말단기 분석으로 잰다.",
    "chapters": [
     "polymers#molecular-weight"
    ]
   },
   {
    "ko": "순위 매기기",
    "en": "ranking",
    "abbr": "",
    "def": "선별을 통과한 재료를 성능 지수의 크기로 줄 세우는 단계. 성질 지도 위에서 기울기선을 평행 이동해 한다.",
    "chapters": [
     "materials-selection#selection"
    ]
   },
   {
    "ko": "슈미트 인자",
    "en": "Schmid factor",
    "abbr": "",
    "def": "축 응력을 슬립계의 분해 전단 응력으로 바꾸는 인자 \\(m = \\cos\\phi\\cos\\lambda\\)(최대 0.5).",
    "chapters": [
     "plasticity-strengthening#slip"
    ]
   },
   {
    "ko": "스테레오 투영",
    "en": "stereographic projection",
    "abbr": "",
    "def": "결정 방향과 면 법선을 단위 구에 찍고 적도면에 투영해 평면 지도로 나타내는 방법.",
    "chapters": [
     "plasticity-strengthening#slip"
    ]
   },
   {
    "ko": "스테인리스강",
    "en": "stainless steel",
    "abbr": "",
    "def": "크로뮴을 약 11 wt% 넘게 넣어 표면에 Cr₂O₃ 부동태막이 생기게 한 강. 오스테나이트계(304·316)·페라이트계·마르텐사이트계·석출 경화형이 있다.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "스토니 식",
    "en": "Stoney equation",
    "abbr": "",
    "def": "기판 곡률로 박막 응력을 구하는 식 \\(\\sigma_f = M_sh_s^2\\kappa/(6h_f)\\). 막이 기판보다 아주 얇고 휨이 작을 때 성립하며 막의 탄성 상수가 필요 없다.",
    "chapters": [
     "elasticity#stoney"
    ]
   },
   {
    "ko": "스피노달",
    "en": "spinodal",
    "abbr": "",
    "def": "상태도에서 자유 에너지의 조성 이계 도함수가 0인(\\(\\partial^2G/\\partial c^2 = 0\\)) 점들을 이은 선. 그 안쪽은 불안정, 바깥의 혼화성 간극은 준안정이다.",
    "chapters": [
     "transformation-kinetics#spinodal"
    ]
   },
   {
    "ko": "스피노달 분해",
    "en": "spinodal decomposition",
    "abbr": "",
    "def": "자유 에너지 곡률이 음수(\\(f''<0\\))인 조성에서 핵생성 장벽 없이 작은 조성 요동이 자라며 일어나는 상분리. 오르막 확산과 특정 파장 \\(\\lambda_m\\)의 무늬가 특징이다.",
    "chapters": [
     "transformation-kinetics#spinodal"
    ]
   },
   {
    "ko": "슬립계",
    "en": "slip system",
    "abbr": "",
    "def": "미끄럼면과 그 안의 미끄럼 방향의 조합. 보통 조밀면과 조밀 방향이며 FCC {111}⟨110⟩은 12개다.",
    "chapters": [
     "plasticity-strengthening#slip"
    ]
   },
   {
    "ko": "시간–온도 중첩",
    "en": "time–temperature superposition",
    "abbr": "",
    "def": "온도를 올리면 모든 완화 시간이 같은 비율로 짧아지므로, 여러 온도의 짧은 시험 곡선을 로그 시간축에서 옆으로 옮겨 하나의 긴 곡선으로 잇는 방법.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "시멘타이트",
    "en": "cementite",
    "abbr": "",
    "def": "철 탄화물 Fe₃C(6.70 wt% C). 단단하고 깨지기 쉬운 준안정 화합물로, 펄라이트와 초석 시멘타이트를 이룬다.",
    "chapters": [
     "phase-diagrams-microstructure#iron-carbon"
    ]
   },
   {
    "ko": "신디오택틱",
    "en": "syndiotactic",
    "abbr": "",
    "def": "곁가지가 주사슬의 양쪽에 번갈아 붙은 배열. 규칙적이라 결정화할 수 있다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "실리사이드",
    "en": "silicide",
    "abbr": "",
    "def": "금속과 실리콘의 화합물(NiSi, CoSi₂, TiSi₂ 등). 소스·드레인과 게이트의 접촉 저항을 낮추며, 금속 박막과 실리콘의 반응 확산으로 순차적으로 만들어진다.",
    "chapters": [
     "diffusion-in-materials#reactive"
    ]
   },
   {
    "ko": "쌍정",
    "en": "twin",
    "abbr": "",
    "def": "경계면을 거울로 양쪽 결정의 원자 배열이 대칭인 결함. 정합 쌍정 경계는 에너지가 매우 작으며, 어닐링 쌍정과 변형 쌍정이 있다.",
    "chapters": [
     "defects#interfaces"
    ]
   },
   {
    "ko": "아브라미 그림",
    "en": "Avrami plot",
    "abbr": "",
    "def": "\\(\\ln[-\\ln(1-f)]\\)을 \\(\\ln t\\)에 대해 그린 그래프. JMAK 식을 따르면 기울기 \\(n\\), 절편 \\(\\ln k\\)인 직선이 된다.",
    "chapters": [
     "transformation-kinetics#jmak"
    ]
   },
   {
    "ko": "아브라미 지수",
    "en": "Avrami exponent",
    "abbr": "",
    "def": "JMAK 식의 시간 지수 \\(n\\). 핵생성 방식(연속 1, 자리 포화 0)과 성장의 차원·기구(계면 지배는 차원당 1, 확산 지배는 1/2)의 합으로 정해진다.",
    "chapters": [
     "transformation-kinetics#jmak"
    ]
   },
   {
    "ko": "압연",
    "en": "rolling",
    "abbr": "",
    "def": "회전하는 두 롤 사이로 금속을 통과시켜 두께를 줄이는 소성 가공. 판·박·형강을 만든다.",
    "chapters": [
     "metals-alloys#processing"
    ]
   },
   {
    "ko": "압전성",
    "en": "piezoelectricity",
    "abbr": "",
    "def": "응력을 받으면 분극이 생기고 전기장을 받으면 변형이 생기는 성질 \\(D = d\\sigma\\), \\(\\varepsilon = dE\\). 대칭 중심이 없는 결정에만 있다.",
    "chapters": [
     "electrical-properties#ferroelectrics"
    ]
   },
   {
    "ko": "압출",
    "en": "extrusion",
    "abbr": "",
    "def": "금속 빌릿을 다이 구멍으로 밀어내 일정한 단면의 긴 제품(봉·관·형재)을 만드는 소성 가공.",
    "chapters": [
     "metals-alloys#processing"
    ]
   },
   {
    "ko": "액상 소결",
    "en": "liquid-phase sintering",
    "abbr": "",
    "def": "첨가제가 고온에서 만든 소량의 액상이 입자를 적시고 물질 이동을 빠르게 해 치밀화를 돕는 소결. Si₃N₄·AlN에 쓴다.",
    "chapters": [
     "ceramics-glasses#sintering"
    ]
   },
   {
    "ko": "액상선",
    "en": "liquidus",
    "abbr": "",
    "def": "그 아래로 내려가면 액체에서 고체가 생기기 시작하는 온도를 조성에 따라 이은 선. 그 위는 모두 액체다.",
    "chapters": [
     "phase-diagrams-microstructure#isomorphous"
    ]
   },
   {
    "ko": "액상선 투영도",
    "en": "liquidus projection",
    "abbr": "",
    "def": "삼원계 액상선 면의 등온선과 두 고체가 함께 정출하는 공정 골짜기를 조성 평면에 투영한 그림. 골짜기는 삼원 공정점에서 만난다.",
    "chapters": [
     "phase-diagrams-microstructure#ternary"
    ]
   },
   {
    "ko": "앤드루스 식",
    "en": "Andrews equation",
    "abbr": "",
    "def": "강의 마르텐사이트 변태 시작 온도를 조성으로 추정하는 실험식 \\(M_s = 539-423C-30.4Mn-17.7Ni-12.1Cr-7.5Mo\\) (°C, wt%).",
    "chapters": [
     "transformation-kinetics#martensite"
    ]
   },
   {
    "ko": "양극 산화",
    "en": "anodizing",
    "abbr": "",
    "def": "금속(주로 알루미늄)을 전해액 속 양극으로 걸어 전류를 흘려 두꺼운 산화막을 키우는 표면 처리. 막 두께는 패러데이 법칙에 따라 통과한 전하량에 비례한다.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "어닐링 쌍정",
    "en": "annealing twin",
    "abbr": "",
    "def": "적층 결함 에너지가 낮은 FCC 금속이 재결정·결정립 성장할 때 생기는 쌍정. 구리·황동·오스테나이트 스테인리스강에 흔하다.",
    "chapters": [
     "defects#interfaces"
    ]
   },
   {
    "ko": "어택틱",
    "en": "atactic",
    "abbr": "",
    "def": "곁가지가 주사슬의 양쪽에 무작위로 붙은 배열. 사슬이 가지런히 쌓이지 못해 비정질이 된다(일반 PS·PMMA).",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "억셉터",
    "en": "acceptor",
    "abbr": "",
    "def": "반도체에서 전자를 받아 정공을 만드는 불순물(실리콘 속 B 같은 3족 원소).",
    "chapters": [
     "electrical-properties#semiconductors"
    ]
   },
   {
    "ko": "얽힘",
    "en": "entanglement",
    "abbr": "",
    "def": "실뭉치 모양의 사슬들이 서로의 부피 안을 꿰뚫어 생기는 위상적 구속. 녹은 고분자의 높은 점도와 고무 평탄 구간, 강도·인성의 기원이다.",
    "chapters": [
     "polymers#conformation"
    ]
   },
   {
    "ko": "에너지 띠",
    "en": "energy band",
    "abbr": "",
    "def": "고체 속 원자들의 전자 준위가 겹쳐 갈라지며 생긴 거의 연속인 에너지 준위 묶음.",
    "chapters": [
     "electrical-properties#conduction"
    ]
   },
   {
    "ko": "에너지 분산 X선 분광",
    "en": "energy-dispersive X-ray spectroscopy, EDS",
    "abbr": "",
    "def": "반도체 검출기로 특성 X선의 에너지를 한꺼번에 재어 원소를 판정·정량하는 분석법. SEM·TEM에 붙여 쓴다.",
    "chapters": [
     "characterization#spectroscopy"
    ]
   },
   {
    "ko": "에너지 해방률",
    "en": "energy release rate",
    "abbr": "",
    "def": "균열이 단위 넓이만큼 자랄 때 풀려나는 탄성 에너지 \\(G\\)[J/m²]. 선형 탄성에서 \\(G = K^2/E'\\)이고, 임계값 \\(G_\\mathrm{IC}\\)에서 파괴가 일어난다.",
    "chapters": [
     "fracture-fatigue-creep#toughness"
    ]
   },
   {
    "ko": "에치 피트",
    "en": "etch pit",
    "abbr": "",
    "def": "결함 선택 에칭으로 전위가 표면에 나온 자리에 생기는 작은 구덩이. 단위 넓이당 개수(EPD)가 전위 밀도를 나타낸다.",
    "chapters": [
     "defects#grain-size"
    ]
   },
   {
    "ko": "에피택시",
    "en": "epitaxy",
    "abbr": "",
    "def": "기판의 결정 방위를 그대로 이어 단결정 막을 키우는 성장. 같은 물질이면 동종, 다르면 이종 에피택시다.",
    "chapters": [
     "solidification-growth#epitaxy-films"
    ]
   },
   {
    "ko": "엔트로피 용수철",
    "en": "entropic spring",
    "abbr": "",
    "def": "늘이면 가능한 형태의 수가 줄어 엔트로피가 감소하므로 되돌리는 힘이 생기는 사슬. 용수철 상수 \\(3kT/Nb^2\\)가 온도에 비례한다.",
    "chapters": [
     "polymers#rubber"
    ]
   },
   {
    "ko": "엠브리오",
    "en": "embryo",
    "abbr": "",
    "def": "임계 크기보다 작은 새 상의 원자 덩어리. 열 요동으로 생겼다 사라지기를 되풀이하며, 일부만 임계 크기를 넘어 핵이 된다.",
    "chapters": [
     "transformation-kinetics#nucleation"
    ]
   },
   {
    "ko": "역응력",
    "en": "back stress",
    "abbr": "",
    "def": "막힌 배선 속에서 원자가 쌓여 생긴 응력 기울기가 원자를 전자 바람의 반대 방향으로 되미는 힘 \\(\\Omega\\,\\partial\\sigma/\\partial x\\).",
    "chapters": [
     "degradation-reliability#electromigration"
    ]
   },
   {
    "ko": "연성 파괴",
    "en": "ductile fracture",
    "abbr": "",
    "def": "큰 소성 변형과 함께 미세 공동의 생성·성장·합체로 천천히 일어나는 파괴. 파면에 딤플이 남고 컵–원뿔 모양이 된다.",
    "chapters": [
     "fracture-fatigue-creep#dbtt"
    ]
   },
   {
    "ko": "연성–취성 전이 온도",
    "en": "ductile-to-brittle transition temperature, DBTT",
    "abbr": "",
    "def": "BCC 금속 등에서 충격 흡수 에너지가 급격히 떨어져 연성 파괴에서 취성 파괴로 바뀌는 온도(DBTT). 저온에서 항복 응력이 벽개 응력을 넘기 때문이다.",
    "chapters": [
     "fracture-fatigue-creep#dbtt"
    ]
   },
   {
    "ko": "연속 무작위 망목",
    "en": "continuous random network",
    "abbr": "",
    "def": "단거리 질서(배위 다면체)는 결정과 같지만 결합각과 고리 크기가 무작위라 장거리 질서가 없는 유리의 구조 모형(자카리아센).",
    "chapters": [
     "ceramics-glasses#silicates"
    ]
   },
   {
    "ko": "연신율",
    "en": "percent elongation",
    "abbr": "",
    "def": "파단 뒤 표점 거리의 증가율 \\(\\%\\mathrm{EL} = (L_f - L_0)/L_0\\times100\\). 연성의 척도다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "연화점",
    "en": "softening point",
    "abbr": "",
    "def": "유리의 점도가 \\(10^{6.6}\\) Pa·s인 온도. 유리 섬유가 제 무게로 늘어나기 시작하며 작업 범위의 아래 끝이다.",
    "chapters": [
     "ceramics-glasses#viscosity"
    ]
   },
   {
    "ko": "열 강화",
    "en": "thermal tempering",
    "abbr": "",
    "def": "연화점 근처로 데운 유리 표면을 급랭해 표면에 압축, 속에 인장 잔류 응력을 거는 강화법. 응력 분포는 대략 포물선이다.",
    "chapters": [
     "ceramics-glasses#viscosity"
    ]
   },
   {
    "ko": "열 분산판",
    "en": "heat spreader",
    "abbr": "",
    "def": "칩에서 나는 열을 넓은 면적으로 퍼뜨려 열저항을 줄이는 판(히트 스프레더). 열전도도가 크고, 칩에 붙일 때는 열팽창이 칩과 가까워야 한다.",
    "chapters": [
     "materials-selection#indices"
    ]
   },
   {
    "ko": "열가소성 고분자",
    "en": "thermoplastic",
    "abbr": "",
    "def": "데우면 녹아 흐르고 식히면 굳는 일을 되풀이할 수 있는 고분자. 선형·가지 사슬로 되어 있어 사출·압출 성형과 재활용이 가능하다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "열간 가공",
    "en": "hot working",
    "abbr": "",
    "def": "재결정 온도 위에서 하는 소성 가공. 가공 경화가 거의 없어 큰 변형을 작은 힘으로 줄 수 있지만 표면 산화와 치수 정밀도가 문제다.",
    "chapters": [
     "metals-alloys#processing"
    ]
   },
   {
    "ko": "열경화성 고분자",
    "en": "thermoset",
    "abbr": "",
    "def": "성형과 동시에 가교 반응(경화)으로 망목이 되어 다시 녹지 않는 고분자. 에폭시·페놀 수지·EMC·언더필이 여기에 속한다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "열기계 피로",
    "en": "thermomechanical fatigue",
    "abbr": "",
    "def": "온도가 오르내리며 열팽창 불일치가 만드는 반복 변형으로 생기는 피로 손상. 솔더 접합 균열이 대표적이다.",
    "chapters": [
     "degradation-reliability#stress-migration"
    ]
   },
   {
    "ko": "열산화",
    "en": "thermo-oxidation",
    "abbr": "",
    "def": "높은 온도에서 산소가 라디칼 연쇄 반응으로 고분자 사슬을 공격하는 열화. 표면 산화층이 자라 수지가 단단하고 취약해진다.",
    "chapters": [
     "degradation-reliability#polymer-tests"
    ]
   },
   {
    "ko": "열역학 인자",
    "en": "thermodynamic factor",
    "abbr": "",
    "def": "\\(\\Phi = 1 + d\\ln\\gamma/d\\ln X\\). 추적자 확산 계수를 화학 확산 계수로 바꾸는 인자로, 이상 용액에서 1이고 혼합이 불리하면 작아져 음수가 되면 언덕 오르기 확산이 된다.",
    "chapters": [
     "diffusion-in-materials#interdiffusion"
    ]
   },
   {
    "ko": "열용량",
    "en": "heat capacity",
    "abbr": "",
    "def": "물체의 온도를 1 K 올리는 데 드는 열. 고체에서는 주로 격자 진동(포논)이 받으며, 몰당 값 \\(C_V\\)는 고온에서 \\(3R\\), 저온에서 \\(T^3\\)에 비례한다.",
    "chapters": [
     "thermal-optical-properties#expansion"
    ]
   },
   {
    "ko": "열적 덴드라이트",
    "en": "thermal dendrite",
    "abbr": "",
    "def": "과냉된 액체 속에서 잠열을 앞쪽 액체로 내보내며 자라는 결정이 음의 온도 기울기 때문에 돌기와 가지를 치며 자란 나뭇가지 모양 결정.",
    "chapters": [
     "solidification-growth#interface"
    ]
   },
   {
    "ko": "열충격 저항",
    "en": "thermal shock resistance",
    "abbr": "",
    "def": "급랭이나 급가열에도 깨지지 않고 견디는 최대 온도 차. 완전 구속을 가정하면 \\(\\Delta T_\\mathrm{c} = \\sigma_\\mathrm{f}(1-\\nu)/(E\\alpha)\\)이다.",
    "chapters": [
     "materials-selection#indices"
    ]
   },
   {
    "ko": "열팽창 계수",
    "en": "coefficient of thermal expansion, CTE",
    "abbr": "",
    "def": "온도 1 K 변화에 따른 길이 변화율 \\(\\alpha = (1/L)\\,dL/dT\\)(ppm/K). 자유 열변형은 \\(\\alpha\\Delta T\\)이며, 팽창이 막히면 열응력이 생긴다.",
    "chapters": [
     "elasticity#thermal"
    ]
   },
   {
    "ko": "열팽창 불일치",
    "en": "CTE mismatch",
    "abbr": "",
    "def": "붙어 있는 두 재료의 열팽창 계수 차 \\(\\Delta\\alpha\\). 온도가 바뀌면 \\(\\Delta\\alpha\\Delta T\\)의 변형이 강제되어 열응력, 휨, 솔더 접합의 전단 변형과 열 피로를 일으킨다.",
    "chapters": [
     "thermal-optical-properties#thermal-stress"
    ]
   },
   {
    "ko": "영률",
    "en": "Young's modulus",
    "abbr": "",
    "def": "단축 응력과 그 방향 변형의 비 \\(E = \\sigma/\\varepsilon\\). 결합 퍼텐셜 바닥의 곡률에서 오며 단위는 GPa다.",
    "chapters": [
     "elasticity#hooke"
    ]
   },
   {
    "ko": "예민화",
    "en": "sensitization",
    "abbr": "",
    "def": "오스테나이트계 스테인리스강을 425–870 °C에 두면 결정립계에 Cr₂₃C₆가 석출해 주변 크로뮴이 줄고 입계 부식에 약해지는 현상. 저탄소 L 강종이나 Ti·Nb 안정화로 막는다.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "오렌지 필",
    "en": "orange peel",
    "abbr": "",
    "def": "결정립이 지나치게 큰 금속을 변형할 때 결정립마다 다르게 변형해 표면이 귤껍질처럼 거칠어지는 현상.",
    "chapters": [
     "plasticity-strengthening#annealing"
    ]
   },
   {
    "ko": "오로완 우회",
    "en": "Orowan bypass",
    "abbr": "",
    "def": "전위가 단단한 입자 사이로 휘어 나가 입자 둘레에 고리를 남기고 지나가는 기구. 필요한 응력은 \\(\\Delta\\tau\\approx Gb/\\lambda\\)이다.",
    "chapters": [
     "plasticity-strengthening#strengthening"
    ]
   },
   {
    "ko": "오르막 확산",
    "en": "uphill diffusion",
    "abbr": "",
    "def": "용질이 농도가 높은 쪽으로 흐르는 확산. 확산의 구동력이 화학 퍼텐셜 기울기이므로 \\(f''<0\\)이면 실효 확산 계수가 음수가 되어 일어난다.",
    "chapters": [
     "transformation-kinetics#spinodal"
    ]
   },
   {
    "ko": "오스테나이트",
    "en": "austenite",
    "abbr": "",
    "def": "탄소가 틈새에 녹은 면심 입방 γ-철. 1147 °C에서 탄소를 2.14 wt%까지 녹이며, 강의 열처리는 오스테나이트에서 출발한다.",
    "chapters": [
     "phase-diagrams-microstructure#iron-carbon"
    ]
   },
   {
    "ko": "오스트발트 단계 규칙",
    "en": "Ostwald step rule",
    "abbr": "",
    "def": "평형 상보다 핵생성 장벽이 작은 준안정 상이 먼저 나타나고, 차례로 더 안정한 상으로 바뀌어 가는 경향.",
    "chapters": [
     "transformation-kinetics#precipitation"
    ]
   },
   {
    "ko": "오스트발트 숙성",
    "en": "Ostwald ripening",
    "abbr": "",
    "def": "작은 석출물이 녹아 큰 석출물로 용질이 옮겨 가며 평균 크기가 커지는 조대화. 확산 지배이면 LSW 법칙 \\(\\bar r^3-\\bar r_0^3 = Kt\\)를 따른다.",
    "chapters": [
     "transformation-kinetics#precipitation"
    ]
   },
   {
    "ko": "올리버–파르 방법",
    "en": "Oliver–Pharr method",
    "abbr": "",
    "def": "제하 곡선 꼭대기의 기울기 \\(S\\)와 깊이로 접촉 깊이·넓이를 구해 경도 \\(H = P/A\\)와 축소 탄성률을 계산하는 나노압입 해석법.",
    "chapters": [
     "plasticity-strengthening#hardness"
    ]
   },
   {
    "ko": "와이블 계수",
    "en": "Weibull modulus",
    "abbr": "",
    "def": "와이블 분포의 모양 모수 \\(m\\). 클수록 강도 산포가 좁고 크기 효과가 작다(세라믹 5–20, 금속 수십 이상).",
    "chapters": [
     "fracture-fatigue-creep#weibull"
    ]
   },
   {
    "ko": "와이블 분포",
    "en": "Weibull distribution",
    "abbr": "",
    "def": "가장 약한 결함이 강도를 정한다는 최약 고리 가설에서 나온 강도 분포 \\(P_f = 1 - \\exp[-(V/V_0)(\\sigma/\\sigma_0)^m]\\). 취성 재료의 강도 산포와 크기 효과를 기술한다.",
    "chapters": [
     "fracture-fatigue-creep#weibull"
    ]
   },
   {
    "ko": "완화 탄성률",
    "en": "relaxation modulus",
    "abbr": "",
    "def": "응력 완화 시험에서 \\(E_r(t) = \\sigma(t)/\\varepsilon_0\\). 정해진 시간(예: 10 s)의 값을 온도에 따라 그려 고분자의 상태를 비교한다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "외인성 반도체",
    "en": "extrinsic semiconductor",
    "abbr": "",
    "def": "도너나 억셉터를 넣어 캐리어 농도를 정한 반도체. n형은 \\(n \\approx N_\\mathrm{D}\\), p형은 \\(p \\approx N_\\mathrm{A}\\).",
    "chapters": [
     "electrical-properties#semiconductors"
    ]
   },
   {
    "ko": "우르짜이트 구조",
    "en": "wurtzite structure",
    "abbr": "",
    "def": "사면체 결합 이중층을 HCP처럼 AB 순서로 쌓은 육방정 화합물 구조. GaN·AlN·ZnO·2H-SiC가 이 구조이며 c축 방향으로 극성을 갖는다.",
    "chapters": [
     "bonding-crystal-structure#covalent"
    ]
   },
   {
    "ko": "운동학 인자",
    "en": "kinematic factor",
    "abbr": "",
    "def": "탄성 충돌 뒤 산란 이온 에너지와 입사 에너지의 비 \\(K = E_1/E_0\\). 표적 원자 질량과 산란각으로 정해진다.",
    "chapters": [
     "characterization#depth"
    ]
   },
   {
    "ko": "원자 충진율",
    "en": "atomic packing factor, APF",
    "abbr": "",
    "def": "원자를 단단한 공으로 볼 때 단위정 부피 가운데 공이 차지하는 비율(APF). 같은 크기 공의 최댓값은 0.74다.",
    "chapters": [
     "bonding-crystal-structure#metals"
    ]
   },
   {
    "ko": "원자힘 현미경",
    "en": "atomic force microscope, AFM",
    "abbr": "",
    "def": "끝이 날카로운 탐침을 단 외팔보로 표면을 훑어 높이를 0.1 nm 이하 분해능으로 재는 현미경.",
    "chapters": [
     "characterization#depth"
    ]
   },
   {
    "ko": "윌리엄슨–홀 그림",
    "en": "Williamson–Hall plot",
    "abbr": "",
    "def": "\\(\\beta\\cos\\theta\\)를 \\(4\\sin\\theta\\)에 대해 그려 절편 \\(K\\lambda/D\\)에서 결정자 크기를, 기울기에서 미세 변형을 분리하는 그림.",
    "chapters": [
     "characterization#xrd"
    ]
   },
   {
    "ko": "유리",
    "en": "glasses",
    "abbr": "",
    "def": "장거리 질서 없이 굳은 비정질 고체. 실리카 망목 유리는 투명하고 절연성이 크지만 매우 취성이다.",
    "chapters": [
     "materials-selection#classes"
    ]
   },
   {
    "ko": "유리 전이",
    "en": "glass transition",
    "abbr": "",
    "def": "과냉 액체를 식힐 때 구조 완화 시간이 냉각 시간 규모보다 길어져 액체의 무질서한 구조가 그대로 얼어붙는 현상.",
    "chapters": [
     "ceramics-glasses#glass-transition"
    ]
   },
   {
    "ko": "유리 전이 온도",
    "en": "glass transition temperature",
    "abbr": "",
    "def": "비부피–온도 곡선에서 액체 기울기와 유리 기울기의 두 직선이 만나는 온도 \\(T_g\\). 대략 점도가 \\(10^{12}\\) Pa·s인 온도이며 냉각 속도에 따라 달라진다.",
    "chapters": [
     "ceramics-glasses#glass-transition"
    ]
   },
   {
    "ko": "유리화",
    "en": "vitrification",
    "abbr": "",
    "def": "경화가 진행되어 망목의 \\(T_g\\)가 경화 온도에 이르러 수지가 유리 상태가 되는 것. 반응이 확산 지배로 바뀌어 거의 멈춘다.",
    "chapters": [
     "polymers#thermosets"
    ]
   },
   {
    "ko": "유전 상수",
    "en": "dielectric constant",
    "abbr": "",
    "def": "유전체의 유전율을 진공 유전율로 나눈 값 \\(\\varepsilon_\\mathrm{r}\\). 축전기의 정전 용량을 그만큼 키운다.",
    "chapters": [
     "electrical-properties#dielectrics"
    ]
   },
   {
    "ko": "유전 손실 탄젠트",
    "en": "loss tangent",
    "abbr": "",
    "def": "복소 유전율의 허수부와 실수부의 비 \\(\\tan\\delta = \\varepsilon''/\\varepsilon'\\). 교류에서 열로 잃는 에너지의 척도다.",
    "chapters": [
     "electrical-properties#dielectrics"
    ]
   },
   {
    "ko": "유핵 조직",
    "en": "cored structure",
    "abbr": "",
    "def": "빠른 응고에서 고체 속 확산이 따라가지 못해 결정립 중심과 가장자리의 조성이 다르게 남은 조직. 응고가 평형 고상선보다 낮은 온도에서 끝난다.",
    "chapters": [
     "phase-diagrams-microstructure#isomorphous"
    ]
   },
   {
    "ko": "유효 전하수",
    "en": "effective charge number",
    "abbr": "",
    "def": "일렉트로마이그레이션에서 원자에 걸리는 알짜 힘 \\(Z^*e\\rho j\\)의 비례 상수. Al·Cu에서 크기 1–10 정도이고 전자 바람이 우세해 음수다.",
    "chapters": [
     "degradation-reliability#electromigration"
    ]
   },
   {
    "ko": "육방 조밀",
    "en": "hexagonal close-packed, HCP",
    "abbr": "",
    "def": "조밀 원자층을 ABAB 순서로 쌓은 육방정 구조(HCP). 육각기둥 단위정에 원자 6개, 배위수 12, 이상적인 \\(c/a = 1.633\\)에서 충진율 0.74.",
    "chapters": [
     "bonding-crystal-structure#metals"
    ]
   },
   {
    "ko": "육방성",
    "en": "hexagonality",
    "abbr": "",
    "def": "폴리타입에서 위아래 이웃 층이 같은 자리(ABA)에 있는 육방형(h) 층의 비율. 3C 0%, 6H 33%, 4H 50%, 2H 100%.",
    "chapters": [
     "bonding-crystal-structure#covalent"
    ]
   },
   {
    "ko": "응력 부식 균열",
    "en": "stress corrosion cracking",
    "abbr": "",
    "def": "인장 응력과 특정 부식 환경이 함께 작용해 항복보다 낮은 응력에서 균열이 자라는 현상. 황동–암모니아, 스테인리스강–염화물이 대표적이다.",
    "chapters": [
     "degradation-reliability#corrosion"
    ]
   },
   {
    "ko": "응력 완화",
    "en": "stress relaxation",
    "abbr": "",
    "def": "변형을 일정하게 유지할 때 응력이 시간에 따라 줄어드는 현상. 맥스웰 모형에서 \\(\\sigma = E\\varepsilon_0e^{-t/\\tau}\\)이다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "응력 이동",
    "en": "stress migration",
    "abbr": "",
    "def": "전류 없이 열응력의 기울기만으로 공공이 이동해 배선·비아에 보이드가 생기는 현상. 중간 온도에서 가장 빠르다.",
    "chapters": [
     "degradation-reliability#stress-migration"
    ]
   },
   {
    "ko": "응력 집중 계수",
    "en": "stress concentration factor",
    "abbr": "",
    "def": "구멍·노치·균열 끝의 최대 응력과 바깥 응력의 비 \\(K_t = \\sigma_m/\\sigma_0\\). 타원 균열이면 \\(1 + 2\\sqrt{a/\\rho_t}\\)이다.",
    "chapters": [
     "fracture-fatigue-creep#griffith"
    ]
   },
   {
    "ko": "응력 텐서",
    "en": "stress tensor",
    "abbr": "",
    "def": "세 좌표면에 작용하는 트랙션의 성분 아홉 개를 모은 3×3 행렬 \\(\\sigma_{ij}\\)(첫 첨자는 면의 법선, 둘째는 힘의 방향). 모멘트 평형 때문에 대칭이라 독립 성분은 여섯 개다.",
    "chapters": [
     "elasticity#tensor"
    ]
   },
   {
    "ko": "응력 확대 계수",
    "en": "stress intensity factor",
    "abbr": "",
    "def": "균열 끝 응력장의 세기를 나타내는 양 \\(K = Y\\sigma\\sqrt{\\pi a}\\)[MPa√m]. 균열 끝 근처 응력은 \\(K/\\sqrt{2\\pi r}\\)에 비례한다.",
    "chapters": [
     "fracture-fatigue-creep#toughness"
    ]
   },
   {
    "ko": "이동 인자",
    "en": "shift factor",
    "abbr": "",
    "def": "시간–온도 중첩에서 온도 \\(T\\)의 완화 시간과 기준 온도의 완화 시간의 비 \\(a_T = \\tau(T)/\\tau(T_r)\\). \\(T_g\\) 위에서는 WLF 식을 따른다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "이동도",
    "en": "mobility",
    "abbr": "",
    "def": "표류 속도와 전기장의 비 \\(\\mu = v_\\mathrm{d}/E = |e|\\tau/m\\). 산란이 잦을수록 작다.",
    "chapters": [
     "electrical-properties#conduction"
    ]
   },
   {
    "ko": "이력 곡선",
    "en": "hysteresis loop",
    "abbr": "",
    "def": "전기장을 왕복시킬 때 강유전체의 분극이 늦게 따라가며 그리는 닫힌 P–E 곡선.",
    "chapters": [
     "electrical-properties#ferroelectrics"
    ]
   },
   {
    "ko": "이론 강도",
    "en": "theoretical strength",
    "abbr": "",
    "def": "결함 없는 결정에서 원자면을 통째로 떼어 내는 데 필요한 응력. \\(\\sigma_\\mathrm{th}\\approx\\sqrt{E\\gamma_s/a_0}\\approx E/10\\)으로, 실제 강도보다 수십–수백 배 크다.",
    "chapters": [
     "fracture-fatigue-creep#griffith"
    ]
   },
   {
    "ko": "이론 밀도",
    "en": "theoretical density",
    "abbr": "",
    "def": "결정 구조와 격자 상수에서 계산한 밀도 \\(\\rho = nA/(V_\\mathrm{C}N_\\mathrm{A})\\). 실측 밀도와 비교해 구조 판정이나 기공률 추정에 쓴다.",
    "chapters": [
     "bonding-crystal-structure#metals"
    ]
   },
   {
    "ko": "이론 전단 강도",
    "en": "theoretical shear strength",
    "abbr": "",
    "def": "완전한 결정의 한 면 전체를 한꺼번에 미끄러뜨리는 데 필요한 전단 응력, 대략 \\(G/2\\pi\\). 실제 항복 응력보다 10³–10⁴배 크다.",
    "chapters": [
     "plasticity-strengthening#slip"
    ]
   },
   {
    "ko": "이방성",
    "en": "anisotropy",
    "abbr": "",
    "def": "성질이 재는 방향에 따라 다른 성질. 단결정 실리콘의 영률은 [100] 130 GPa, [111] 188 GPa로 다르다.",
    "chapters": [
     "bonding-crystal-structure#noncrystalline"
    ]
   },
   {
    "ko": "이방성 도전 필름",
    "en": "anisotropic conductive film, ACF",
    "abbr": "",
    "def": "도전 입자를 퍼콜레이션 문턱보다 적게 넣은 접착 필름. 면 방향으로는 절연이고, 눌러 붙인 전극 사이 두께 방향으로만 전기가 통한다.",
    "chapters": [
     "composites#fillers"
    ]
   },
   {
    "ko": "이소택틱",
    "en": "isotactic",
    "abbr": "",
    "def": "곁가지가 주사슬의 같은 쪽에만 붙은 배열. 규칙적이라 결정화할 수 있다(이소택틱 PP).",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "이온 분극",
    "en": "ionic polarization",
    "abbr": "",
    "def": "이온 결정에서 양이온과 음이온이 반대 방향으로 밀려 생기는 분극. 적외선 공명 주파수까지 따라간다.",
    "chapters": [
     "electrical-properties#dielectrics"
    ]
   },
   {
    "ko": "이온성 분율",
    "en": "fraction of ionic character",
    "abbr": "",
    "def": "두 원소 사이 결합이 이온 결합에 가까운 정도를 폴링 전기음성도 차로 어림한 값 \\(100[1-e^{-(\\Delta\\chi)^2/4}]\\) %.",
    "chapters": [
     "ceramics-glasses#structure"
    ]
   },
   {
    "ko": "이종 원자가 도핑",
    "en": "aliovalent doping",
    "abbr": "",
    "def": "모체 이온과 원자가가 다른 이온을 넣는 도핑. 전하 중성을 맞추기 위해 공공 같은 보상 결함이 생긴다(예: ZrO₂ 속 Y³⁺ 두 개당 산소 공공 하나).",
    "chapters": [
     "diffusion-in-materials#ionic"
    ]
   },
   {
    "ko": "이차 경화",
    "en": "secondary hardening",
    "abbr": "",
    "def": "W·Mo·V를 많이 넣은 강을 500–600 °C에서 뜨임할 때 이들의 미세 합금 탄화물이 석출해 경도가 다시 오르는 현상.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "이차 이온 질량 분석",
    "en": "secondary ion mass spectrometry, SIMS",
    "abbr": "",
    "def": "1차 이온으로 시료를 깎으며 튀어나온 이차 이온을 질량 분석기로 세어 ppb–ppm 불순물의 깊이 분포를 재는 분석법.",
    "chapters": [
     "characterization#depth"
    ]
   },
   {
    "ko": "이차 전자",
    "en": "secondary electron, SE",
    "abbr": "",
    "def": "입사 전자가 시료 원자에서 떼어 낸 수 eV의 낮은 에너지 전자. 표면 몇 nm에서만 빠져나와 표면 형상을 보여 준다.",
    "chapters": [
     "characterization#beam"
    ]
   },
   {
    "ko": "이트리아 안정화 지르코니아",
    "en": "yttria-stabilized zirconia, YSZ",
    "abbr": "",
    "def": "Y₂O₃를 넣어 입방정 형석 구조를 상온까지 안정화한 ZrO₂. 산소 공공이 많아 고온에서 산소 이온 전도체로 쓰이며 8 mol% 근처에서 전도도가 최대다.",
    "chapters": [
     "diffusion-in-materials#ionic"
    ]
   },
   {
    "ko": "인바",
    "en": "Invar",
    "abbr": "",
    "def": "Fe–36 % Ni 합금. 온도가 오르며 자화가 줄어 생기는 자기 체적 수축이 격자 팽창을 상쇄해 상온 열팽창 계수가 약 1 ppm/K로 매우 작다.",
    "chapters": [
     "thermal-optical-properties#expansion"
    ]
   },
   {
    "ko": "인발",
    "en": "drawing",
    "abbr": "",
    "def": "금속 봉·선을 다이 구멍으로 끌어당겨 지름을 줄이는 소성 가공. 선재·관을 만든다.",
    "chapters": [
     "metals-alloys#processing"
    ]
   },
   {
    "ko": "인성",
    "en": "toughness",
    "abbr": "",
    "def": "파단할 때까지 단위 부피의 재료가 흡수하는 에너지. 응력–변형 곡선 아래 전체 넓이로, 강도와 연성을 함께 가져야 크다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "인장 강도",
    "en": "tensile strength",
    "abbr": "",
    "def": "인장 시험에서 공칭 응력의 최댓값(TS). 이 점에서 네킹이 시작된다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "인장 시험",
    "en": "tensile test",
    "abbr": "",
    "def": "시편의 양 끝을 일정한 속도로 잡아당기며 하중과 늘어남을 기록해 탄성률·항복 강도·인장 강도·연성을 재는 가장 기본적인 기계 시험.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "일렉트로마이그레이션",
    "en": "electromigration",
    "abbr": "",
    "def": "큰 전류 밀도의 전자 흐름이 금속 원자에 운동량을 전해 원자를 이동시키는 현상. 배선에 보이드와 힐록을 만들어 단선·단락을 일으킨다.",
    "chapters": [
     "metals-alloys#interconnect"
    ]
   },
   {
    "ko": "임계 냉각 속도",
    "en": "critical cooling rate",
    "abbr": "",
    "def": "확산 변태(펄라이트·베이나이트)를 피하고 마르텐사이트만 얻을 수 있는 가장 느린 냉각 속도. 공석 탄소강에서 약 140 °C/s이며 합금 원소가 낮춘다.",
    "chapters": [
     "transformation-kinetics#ttt-cct"
    ]
   },
   {
    "ko": "임계 반지름",
    "en": "critical radius",
    "abbr": "",
    "def": "핵생성 자유 에너지 곡선 \\(\\Delta G(r)\\)이 최대가 되는 반지름 \\(r^* = 2\\gamma/(\\Delta G_v-\\Delta G_s)\\). 이보다 작은 덩어리는 줄어들고 큰 덩어리는 자란다.",
    "chapters": [
     "transformation-kinetics#nucleation"
    ]
   },
   {
    "ko": "임계 반지름 비",
    "en": "critical radius ratio",
    "abbr": "",
    "def": "음이온끼리 막 닿으면서 양이온도 음이온에 막 닿는 양이온/음이온 반지름 비. CN 3·4·6·8에 대해 0.155·0.225·0.414·0.732이다.",
    "chapters": [
     "bonding-crystal-structure#interstitial"
    ]
   },
   {
    "ko": "임계 변형",
    "en": "critical strain",
    "abbr": "",
    "def": "재결정이 일어나는 데 필요한 최소 냉간 가공도(대개 2–20 %). 이보다 작으면 재결정하지 않거나 거대 결정립이 생긴다.",
    "chapters": [
     "plasticity-strengthening#annealing"
    ]
   },
   {
    "ko": "임계 분해 전단 응력",
    "en": "critical resolved shear stress, CRSS",
    "abbr": "",
    "def": "슬립계가 미끄러지기 시작하는 분해 전단 응력 \\(\\tau_\\mathrm{CRSS}\\). 단결정의 항복 응력은 \\(\\tau_\\mathrm{CRSS}/m_\\text{max}\\)이다.",
    "chapters": [
     "plasticity-strengthening#slip"
    ]
   },
   {
    "ko": "임계 섬유 길이",
    "en": "critical fiber length",
    "abbr": "",
    "def": "섬유 가운데의 응력이 섬유 강도에 이르는 데 필요한 최소 길이 \\(l_c = \\sigma_f^*d/2\\tau_c\\). 이보다 짧은 섬유는 끊어지지 않고 뽑힌다.",
    "chapters": [
     "composites#short-fibers"
    ]
   },
   {
    "ko": "입계 부식",
    "en": "intergranular corrosion",
    "abbr": "",
    "def": "결정립 내부는 멀쩡하고 결정립계(또는 그 인접 결핍층)만 선택적으로 녹는 부식.",
    "chapters": [
     "degradation-reliability#corrosion"
    ]
   },
   {
    "ko": "자가 어닐링",
    "en": "self-annealing",
    "abbr": "",
    "def": "전해 도금한 구리처럼 저장 에너지가 큰 막이 상온에서도 스스로 재결정·결정립 성장하는 현상.",
    "chapters": [
     "plasticity-strengthening#annealing"
    ]
   },
   {
    "ko": "자기 틈새 원자",
    "en": "self-interstitial",
    "abbr": "",
    "def": "결정을 이루는 원자 자신이 격자점 사이의 틈에 끼어 있는 점결함. 금속에서는 형성 에너지가 공공의 2–4배라 드물다.",
    "chapters": [
     "defects#point-defects"
    ]
   },
   {
    "ko": "자유 결합 사슬",
    "en": "freely jointed chain",
    "abbr": "",
    "def": "길이 \\(b\\)인 막대 \\(N\\)개를 방향 제약 없이 이은 이상 사슬 모형. \\(\\langle R^2\\rangle = Nb^2\\)이다.",
    "chapters": [
     "polymers#conformation"
    ]
   },
   {
    "ko": "자유 변수",
    "en": "free variable",
    "abbr": "",
    "def": "설계자가 마음대로 정할 수 있는 치수(단면적, 두께 등). 제약 조건을 써서 목적 함수에서 소거하면 성능 지수가 남는다.",
    "chapters": [
     "materials-selection#indices"
    ]
   },
   {
    "ko": "자유 부피",
    "en": "free volume",
    "abbr": "",
    "def": "고분자 속에서 분자가 차지하지 않은 빈 공간. 사슬 끝·가소제가 자유 부피를 늘려 \\(T_g\\)를 낮추며, WLF 식의 기초가 된다.",
    "chapters": [
     "polymers#crystallinity-transitions"
    ]
   },
   {
    "ko": "작업점",
    "en": "working point",
    "abbr": "",
    "def": "유리의 점도가 \\(10^3\\) Pa·s인 온도. 불기·누르기 같은 성형을 하는 온도다.",
    "chapters": [
     "ceramics-glasses#viscosity"
    ]
   },
   {
    "ko": "잔류 분극",
    "en": "remanent polarization",
    "abbr": "",
    "def": "이력 곡선에서 전기장을 0으로 되돌렸을 때 남는 분극 \\(P_\\mathrm{r}\\).",
    "chapters": [
     "electrical-properties#ferroelectrics"
    ]
   },
   {
    "ko": "잔류 오스테나이트",
    "en": "retained austenite",
    "abbr": "",
    "def": "담금질 뒤 마르텐사이트로 바뀌지 않고 남은 오스테나이트. 고탄소강일수록 많으며 서브제로 처리와 뜨임으로 줄인다.",
    "chapters": [
     "transformation-kinetics#martensite"
    ]
   },
   {
    "ko": "잔류 응력",
    "en": "residual stress",
    "abbr": "",
    "def": "외력이 없는데도 재료 속에 남아 있는 응력. 박막에서는 증착·열팽창 차이로 생기며 XRD sin²ψ 법이나 웨이퍼 휨으로 잰다.",
    "chapters": [
     "characterization#xrd-stress"
    ]
   },
   {
    "ko": "장범위 규칙성",
    "en": "long-range order",
    "abbr": "",
    "def": "원자 배열의 규칙이 수많은 원자 간 거리에 걸쳐 주기적으로 이어지는 성질. 결정의 특징이며 X선 회절의 날카로운 봉우리를 낸다.",
    "chapters": [
     "bonding-crystal-structure#noncrystalline"
    ]
   },
   {
    "ko": "재결정",
    "en": "recrystallization",
    "abbr": "",
    "def": "가공 조직 속에서 전위가 거의 없는 새 결정립이 핵생성해 자라 가공 경화를 없애는 과정. JMAK 식을 따른다.",
    "chapters": [
     "plasticity-strengthening#annealing"
    ]
   },
   {
    "ko": "재결정 온도",
    "en": "recrystallization temperature",
    "abbr": "",
    "def": "대략 1시간 안에 재결정이 완료(또는 절반)되는 온도. 녹는점(K)의 0.3–0.5배이고 가공도가 클수록 낮다.",
    "chapters": [
     "plasticity-strengthening#annealing"
    ]
   },
   {
    "ko": "재료 사면체",
    "en": "materials tetrahedron",
    "abbr": "",
    "def": "구조·공정·성질·성능을 꼭짓점으로 하고 특성 평가를 가운데 둔 그림으로, 공정이 구조를, 구조가 성질을, 성질이 성능을 정한다는 재료과학의 틀을 나타낸다.",
    "chapters": [
     "materials-selection#tetrahedron"
    ]
   },
   {
    "ko": "재료 성질 지도",
    "en": "materials property chart, Ashby chart",
    "abbr": "",
    "def": "두 재료 성질을 로그–로그 축에 놓고 여러 재료를 함께 표시한 그림(애시비 도표). 같은 분류의 재료가 무리를 이루고, 성능 지수는 직선으로 나타난다.",
    "chapters": [
     "materials-selection#ashby"
    ]
   },
   {
    "ko": "저장 에너지",
    "en": "stored energy",
    "abbr": "",
    "def": "냉간 가공으로 늘어난 전위 등에 저장된 에너지. 회복과 재결정의 구동력이다.",
    "chapters": [
     "plasticity-strengthening#annealing"
    ]
   },
   {
    "ko": "저장 탄성률",
    "en": "storage modulus",
    "abbr": "",
    "def": "사인파 변형 시험에서 변형과 같은 위상인 응력 성분의 비 \\(E' = (\\sigma_0/\\varepsilon_0)\\cos\\delta\\). 한 주기에 저장했다 돌려주는 탄성 에너지를 나타낸다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "저항 온도 계수",
    "en": "temperature coefficient of resistance, TCR",
    "abbr": "",
    "def": "온도 1 K 변화에 따른 저항률의 상대 변화 \\(\\alpha_R = (1/\\rho)(d\\rho/dT)\\). 순금속은 약 0.004 K⁻¹이다.",
    "chapters": [
     "electrical-properties#metals"
    ]
   },
   {
    "ko": "적층 결함",
    "en": "stacking fault",
    "abbr": "",
    "def": "조밀면을 쌓는 순서(FCC의 …ABCABC…)가 한 곳에서 어긋난 면결함. 층이 빠지면 내인성, 끼면 외인성이다.",
    "chapters": [
     "defects#interfaces"
    ]
   },
   {
    "ko": "적층판",
    "en": "laminate",
    "abbr": "",
    "def": "섬유 방향이 다른 층을 여러 장 쌓아 붙인 판. 쌓는 순서를 [0/90]ₛ처럼 각도로 적고, 대칭 적층은 온도 변화로 휘지 않는다.",
    "chapters": [
     "composites#laminates"
    ]
   },
   {
    "ko": "전기 저항률",
    "en": "electrical resistivity",
    "abbr": "",
    "def": "단위 길이·단위 단면적 시편의 저항으로 나타낸 재료 고유의 저항 \\(\\rho = RA/l\\)(Ω·m). 반도체·박막에서는 Ω·cm, µΩ·cm도 쓴다.",
    "chapters": [
     "electrical-properties#conduction"
    ]
   },
   {
    "ko": "전기 전도도",
    "en": "electrical conductivity",
    "abbr": "",
    "def": "저항률의 역수 \\(\\sigma = 1/\\rho\\)(S/m). 캐리어 농도·전하·이동도의 곱 \\(\\sigma = n|e|\\mu\\)로 쓴다.",
    "chapters": [
     "electrical-properties#conduction"
    ]
   },
   {
    "ko": "전단 지연",
    "en": "shear lag",
    "abbr": "",
    "def": "기지가 섬유 표면을 전단 응력으로 끌어당겨 섬유 끝에서부터 섬유 응력을 쌓아 올리는 하중 전달 모형. 끝 근처의 섬유는 덜 일한다.",
    "chapters": [
     "composites#short-fibers"
    ]
   },
   {
    "ko": "전단 탄성률",
    "en": "shear modulus",
    "abbr": "",
    "def": "전단 응력과 공학 전단 변형의 비 \\(G = \\tau/\\gamma\\). 등방성 재료에서 \\(G = E/2(1+\\nu)\\)이다.",
    "chapters": [
     "elasticity#hooke"
    ]
   },
   {
    "ko": "전위",
    "en": "dislocation",
    "abbr": "",
    "def": "결정 속에서 이미 미끄러진 영역과 미끄러지지 않은 영역의 경계를 이루는 선 결함. 버거스 벡터 \\(\\mathbf b\\)로 어긋남을 나타내며, 전위가 움직여 금속이 소성 변형한다.",
    "chapters": [
     "defects#dislocations"
    ]
   },
   {
    "ko": "전위 밀도",
    "en": "dislocation density",
    "abbr": "",
    "def": "단위 부피 속 전위선의 총길이(m⁻²). 어닐한 금속 \\(10^{10}\\)–\\(10^{12}\\), 냉간 가공한 금속 \\(10^{15}\\)–\\(10^{16}\\) m⁻² 정도다.",
    "chapters": [
     "defects#dislocations"
    ]
   },
   {
    "ko": "전위 쌓임",
    "en": "dislocation pile-up",
    "abbr": "",
    "def": "같은 원에서 나온 전위들이 결정립계 같은 장애물 앞에 줄지어 멈춘 배열. 앞머리에 큰 응력이 모인다.",
    "chapters": [
     "plasticity-strengthening#strengthening"
    ]
   },
   {
    "ko": "전율 고용체",
    "en": "isomorphous system",
    "abbr": "",
    "def": "액체와 고체 모두에서 두 성분이 모든 비율로 섞여 한 가지 고용체를 이루는 계. Cu–Ni, Si–Ge가 대표적이며 상태도는 렌즈 모양이다.",
    "chapters": [
     "phase-diagrams-microstructure#isomorphous"
    ]
   },
   {
    "ko": "전자 바람",
    "en": "electron wind",
    "abbr": "",
    "def": "흐르는 전자가 확산하는 원자와 충돌하며 원자를 전자 흐름 방향으로 미는 힘. 크기는 \\(F = Z^*e\\rho j\\)로 쓴다.",
    "chapters": [
     "degradation-reliability#electromigration"
    ]
   },
   {
    "ko": "전자 분극",
    "en": "electronic polarization",
    "abbr": "",
    "def": "전기장이 원자의 전자구름을 원자핵에 대해 밀어 생기는 분극. 모든 물질에 있고 자외선 주파수까지 따라간다.",
    "chapters": [
     "electrical-properties#dielectrics"
    ]
   },
   {
    "ko": "전하 중성",
    "en": "charge neutrality",
    "abbr": "",
    "def": "이온 결정 전체의 전하 합이 0이어야 한다는 조건. 하전 점결함과 도펀트의 농도 사이 관계를 정한다.",
    "chapters": [
     "diffusion-in-materials#ionic"
    ]
   },
   {
    "ko": "절연 내력",
    "en": "dielectric strength",
    "abbr": "",
    "def": "절연체가 파괴되지 않고 견디는 최대 전기장 \\(E_\\mathrm{bd}\\)(MV/cm). 유전율이 클수록, 면적이 클수록 낮다.",
    "chapters": [
     "electrical-properties#high-k"
    ]
   },
   {
    "ko": "점결함",
    "en": "point defect",
    "abbr": "",
    "def": "원자 하나 크기 범위에서 결정의 주기성을 깨는 결함. 공공, 자기 틈새 원자, 치환·틈새 불순물이 있다.",
    "chapters": [
     "defects#point-defects"
    ]
   },
   {
    "ko": "점탄성",
    "en": "viscoelasticity",
    "abbr": "",
    "def": "탄성 고체와 점성 액체의 성질을 함께 가져 응답이 시간에 따라 변하는 성질. 고분자에서 응력 완화·크리프·동적 손실로 나타난다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "접종제",
    "en": "inoculant, grain refiner",
    "abbr": "",
    "def": "쇳물에 넣어 불균질 핵생성 자리를 제공하는 입자나 모합금(Al의 TiB₂·Al₃Ti 등). 결정립을 곱게 하고 등축정을 늘린다.",
    "chapters": [
     "solidification-growth#interface"
    ]
   },
   {
    "ko": "접촉각",
    "en": "contact angle",
    "abbr": "",
    "def": "고체 표면과 액체 방울 가장자리의 접선이 액체 쪽에서 이루는 각 \\(\\theta\\). \\(\\gamma_\\mathrm{SV} = \\gamma_\\mathrm{SL} + \\gamma_\\mathrm{LV}\\cos\\theta\\)를 만족하며, 작을수록 잘 젖는다.",
    "chapters": [
     "metals-alloys#joining"
    ]
   },
   {
    "ko": "정전척",
    "en": "electrostatic chuck",
    "abbr": "",
    "def": "세라믹 유전층 속 전극에 전압을 걸어 웨이퍼를 전기력으로 붙잡는 장치. 쿨롱형과 존슨–라벡형이 있다.",
    "chapters": [
     "ceramics-glasses#applications"
    ]
   },
   {
    "ko": "정합 계면",
    "en": "coherent interface",
    "abbr": "",
    "def": "두 상의 원자면이 계면을 건너 그대로 이어지는 계면. 계면 에너지는 작지만 격자 불일치를 탄성 변형으로 받아 변형 에너지가 크다.",
    "chapters": [
     "transformation-kinetics#nucleation"
    ]
   },
   {
    "ko": "젖음",
    "en": "wetting",
    "abbr": "",
    "def": "액체(녹은 솔더)가 고체 표면에 퍼지는 정도. 세 계면 에너지의 균형(영 식)으로 정해지는 접촉각으로 나타낸다.",
    "chapters": [
     "metals-alloys#joining"
    ]
   },
   {
    "ko": "제너 고정",
    "en": "Zener pinning",
    "abbr": "",
    "def": "결정립계에 걸린 미세 입자가 경계 이동을 막아 결정립 성장을 멈추게 하는 효과. 한계 크기 \\(d_\\text{lim}\\approx4r/3f\\).",
    "chapters": [
     "plasticity-strengthening#annealing"
    ]
   },
   {
    "ko": "제너 이방성 비",
    "en": "Zener anisotropy ratio",
    "abbr": "",
    "def": "입방정의 탄성 이방성을 재는 수 \\(A = 2C_{44}/(C_{11}-C_{12})\\). 등방이면 1이고 Si 1.56, Cu 3.21, W 1.01이다.",
    "chapters": [
     "elasticity#anisotropy"
    ]
   },
   {
    "ko": "제약 조건",
    "en": "constraints",
    "abbr": "",
    "def": "부품이 반드시 만족해야 하는 조건(강성·강도 이상, 사용 온도, 절연 등). 재료 선택에서 통과와 탈락을 가르는 선별에 쓰인다.",
    "chapters": [
     "materials-selection#indices"
    ]
   },
   {
    "ko": "조미니 시험",
    "en": "Jominy end-quench test",
    "abbr": "",
    "def": "오스테나이트화한 표준 봉의 한쪽 끝만 물로 식힌 뒤 끝에서의 거리에 따른 경도를 재어 경화능을 평가하는 시험.",
    "chapters": [
     "metals-alloys#hardenability"
    ]
   },
   {
    "ko": "조성적 과냉",
    "en": "constitutional supercooling",
    "abbr": "",
    "def": "계면 앞에 쌓인 용질이 액상선 온도를 낮춰, 실제 온도가 그 자리 액체의 액상선 온도보다 낮아진 상태. \\(G/V \\lt \\Delta T_0/D\\)이면 생겨 평탄 계면이 셀·덴드라이트로 갈라진다.",
    "chapters": [
     "solidification-growth#constitutional"
    ]
   },
   {
    "ko": "존슨–라벡 효과",
    "en": "Johnsen–Rahbek effect",
    "abbr": "",
    "def": "약간 전도성인 유전체와 도체 사이의 미세한 틈에 전압이 집중되어 큰 정전 인력이 생기는 현상. 낮은 전압의 정전척에 쓴다.",
    "chapters": [
     "ceramics-glasses#applications"
    ]
   },
   {
    "ko": "존슨–멜–아브라미 식",
    "en": "Johnson–Mehl–Avrami–Kolmogorov (JMAK) equation",
    "abbr": "",
    "def": "무작위 핵생성과 성장으로 진행하는 변태의 분율 \\(f = 1-\\exp(-kt^n)\\). 확장 부피 \\(X_\\text{ext}\\)에 부딪힘 보정 \\(df = (1-f)dX_\\text{ext}\\)를 적용해 얻는다.",
    "chapters": [
     "transformation-kinetics#jmak"
    ]
   },
   {
    "ko": "주방향",
    "en": "principal direction",
    "abbr": "",
    "def": "전단 응력이 0이 되는 면의 법선 방향. 응력 행렬의 고유 벡터이며 평면 응력에서는 \\(\\tan2\\theta_p = 2\\tau_{xy}/(\\sigma_x-\\sigma_y)\\)로 구한다.",
    "chapters": [
     "elasticity#mohr"
    ]
   },
   {
    "ko": "주상정 영역",
    "en": "columnar zone",
    "abbr": "",
    "def": "칠 영역 결정립 가운데 빠른 성장 방향이 열 흐름과 나란한 것들이 경쟁 성장으로 살아남아 길쭉하게 자란 영역.",
    "chapters": [
     "solidification-growth#casting"
    ]
   },
   {
    "ko": "주석 휘스커",
    "en": "tin whisker",
    "abbr": "",
    "def": "순주석 도금 표면에서 압축 응력에 밀려 뿌리부터 자라나는 가는 단결정 주석 실. 이웃 도체와 단락을 일으킨다.",
    "chapters": [
     "degradation-reliability#whisker-moisture"
    ]
   },
   {
    "ko": "주응력",
    "en": "principal stress",
    "abbr": "",
    "def": "주방향 면에 걸리는 수직 응력으로, 응력 행렬의 고윳값 \\(\\sigma_1\\ge\\sigma_2\\ge\\sigma_3\\)이다. 그 점의 수직 응력 가운데 최댓값과 최솟값을 준다.",
    "chapters": [
     "elasticity#mohr"
    ]
   },
   {
    "ko": "주조",
    "en": "casting",
    "abbr": "",
    "def": "녹인 금속을 틀에 부어 응고시켜 모양을 만드는 공정. 복잡한 형상을 한 번에 만들지만 응고 조직·편석·기공이 남는다.",
    "chapters": [
     "metals-alloys#processing"
    ]
   },
   {
    "ko": "중립점 거리",
    "en": "distance from neutral point",
    "abbr": "",
    "def": "패키지에서 열팽창 불일치 변위가 0인 중립점(대개 중심)으로부터 솔더 볼까지의 거리 \\(L_D\\). 클수록 전단 변형이 커진다.",
    "chapters": [
     "degradation-reliability#stress-migration"
    ]
   },
   {
    "ko": "중합도",
    "en": "degree of polymerization",
    "abbr": "",
    "def": "사슬 하나에 든 반복 단위의 수(DP). 사슬의 몰 질량은 \\(M = \\mathrm{DP}\\times m\\)이다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "지렛대 규칙",
    "en": "lever rule",
    "abbr": "",
    "def": "두 상 영역에서 상의 질량 분율을 구하는 규칙. \\(W_\\alpha = (C_0 - C_\\mathrm{L})/(C_\\alpha - C_\\mathrm{L})\\)처럼 받침점 \\(C_0\\)에서 반대쪽 팔의 길이가 그 상의 분율이다.",
    "chapters": [
     "phase-diagrams-microstructure#reading"
    ]
   },
   {
    "ko": "지연 시간",
    "en": "time lag",
    "abbr": "",
    "def": "막을 통과하는 누적량의 점근선이 시간축과 만나는 시간 \\(t_\\text{lag} = L^2/6D\\). 막 투과가 정상 상태에 이르는 시간의 척도다.",
    "chapters": [
     "diffusion-in-materials#barrier"
    ]
   },
   {
    "ko": "진변형",
    "en": "true strain",
    "abbr": "",
    "def": "늘어남을 그 순간의 길이로 나눠 더한 변형 \\(\\varepsilon_\\mathrm T = \\ln(L_i/L_0)\\). 여러 단계의 변형을 그대로 더할 수 있다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "진성 반도체",
    "en": "intrinsic semiconductor",
    "abbr": "",
    "def": "불순물 없이 열로 띠틈을 넘은 전자와 정공만으로 전도하는 반도체. \\(n = p = n_\\mathrm{i}\\).",
    "chapters": [
     "electrical-properties#semiconductors"
    ]
   },
   {
    "ko": "진성 응력",
    "en": "intrinsic stress",
    "abbr": "",
    "def": "박막이 자라는 과정 자체가 남긴 응력. 결정립이 합쳐지며 생기는 인장, 이온 충돌로 원자가 끼어드는 압축 등이 있으며 열 불일치 응력과 더해져 막 응력이 된다.",
    "chapters": [
     "elasticity#stoney"
    ]
   },
   {
    "ko": "진응력",
    "en": "true stress",
    "abbr": "",
    "def": "하중을 그 순간의 실제 단면적으로 나눈 응력 \\(\\sigma_\\mathrm T = F/A_i\\). 네킹 전에는 \\(\\sigma(1+\\varepsilon)\\)이다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "질별",
    "en": "temper designation",
    "abbr": "",
    "def": "알루미늄 합금 이름 뒤에 붙여 가공·열처리 이력을 나타내는 기호. O(풀림), H(가공 경화), T4(자연 시효), T6(인공 시효), T7(과시효) 등.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "집속 이온 빔",
    "en": "focused ion beam, FIB",
    "abbr": "",
    "def": "수십 kV로 가속한 Ga⁺ 등의 이온을 nm 크기로 모아 시료를 깎거나 증착하는 장비. 특정 위치의 단면과 TEM 시편을 만든다.",
    "chapters": [
     "characterization#microscopy"
    ]
   },
   {
    "ko": "집합 조직",
    "en": "texture",
    "abbr": "",
    "def": "다결정에서 결정립의 방위가 특정 방향으로 쏠린 상태. 압연판, (111) 구리 배선, 기둥 결정립 박막처럼 다결정에도 이방성을 남긴다.",
    "chapters": [
     "bonding-crystal-structure#noncrystalline"
    ]
   },
   {
    "ko": "청동",
    "en": "bronze",
    "abbr": "",
    "def": "구리에 주석(또는 Al·Si 등)을 넣은 합금. 인청동(Cu–Sn–P)은 스프링·커넥터에 쓴다.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "체심 입방",
    "en": "body-centered cubic, BCC",
    "abbr": "",
    "def": "정육면체의 꼭짓점과 몸 중심에 원자가 있는 결정 구조(BCC). 단위정 원자 2개, 배위수 8, 충진율 0.68, \\(a = 4R/\\sqrt3\\).",
    "chapters": [
     "bonding-crystal-structure#metals"
    ]
   },
   {
    "ko": "체심 정방정",
    "en": "body-centered tetragonal (BCT)",
    "abbr": "",
    "def": "체심 입방 격자의 한 축(c)이 다른 두 축(a)과 길이가 다른 격자. 탄소강 마르텐사이트는 \\(c/a\\approx1+0.045\\)(wt% C)이다.",
    "chapters": [
     "transformation-kinetics#martensite"
    ]
   },
   {
    "ko": "체적 탄성률",
    "en": "bulk modulus",
    "abbr": "",
    "def": "정수압과 부피 변화율의 비 \\(K = -p/(\\Delta V/V)\\). 등방성 재료에서 \\(K = E/3(1-2\\nu)\\)이며 \\(\\nu\\to0.5\\)에서 무한히 커진다.",
    "chapters": [
     "elasticity#hooke"
    ]
   },
   {
    "ko": "초석 시멘타이트",
    "en": "proeutectoid cementite",
    "abbr": "",
    "def": "과공석강(0.76–2.14 wt% C)에서 Acm 선 아래 오스테나이트 결정립계를 따라 그물처럼 먼저 생긴 시멘타이트. 강을 취약하게 만든다.",
    "chapters": [
     "phase-diagrams-microstructure#iron-carbon"
    ]
   },
   {
    "ko": "초석 페라이트",
    "en": "proeutectoid ferrite",
    "abbr": "",
    "def": "아공석강(0.022–0.76 wt% C)에서 727 °C보다 높은 온도에 오스테나이트 결정립계를 따라 먼저 생긴 페라이트.",
    "chapters": [
     "phase-diagrams-microstructure#iron-carbon"
    ]
   },
   {
    "ko": "초정",
    "en": "primary phase",
    "abbr": "",
    "def": "공정(또는 공석) 반응보다 먼저, 액상선(또는 A₃·Acm 선) 아래에서 생긴 상. 아공정 Pb–Sn의 초정 α, 아공석강의 초석 페라이트가 그 예다.",
    "chapters": [
     "phase-diagrams-microstructure#eutectic"
    ]
   },
   {
    "ko": "초측면 성장",
    "en": "super-lateral growth, SLG",
    "abbr": "",
    "def": "레이저로 박막을 거의 완전히 녹였을 때 바닥에 남은 드문 고체 씨앗에서 옆으로 길게 자라 µm급 결정립이 생기는 성장.",
    "chapters": [
     "solidification-growth#cu-laser"
    ]
   },
   {
    "ko": "초탄성",
    "en": "superelasticity",
    "abbr": "",
    "def": "오스테나이트 상태의 형상 기억 합금에 힘을 주면 응력 유기 마르텐사이트가 생겨 큰 변형(6–8 %)이 일어나고, 힘을 빼면 즉시 되돌아가는 성질.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "초합금",
    "en": "superalloy",
    "abbr": "",
    "def": "녹는점의 큰 비율에 이르는 고온에서 강도·크리프·산화 저항을 유지하는 니켈·코발트 기지 합금. 터빈 블레이드·디스크에 쓴다.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "최대 과냉",
    "en": "maximum undercooling",
    "abbr": "",
    "def": "먼지·벽 없이 균질 핵생성만으로 액체가 굳기 시작하는 과냉도. 턴불의 실험에서 대략 \\(0.2\\,T_m\\)이다(구리 236 K).",
    "chapters": [
     "solidification-growth#interface"
    ]
   },
   {
    "ko": "최대 충전 분율",
    "en": "maximum packing fraction",
    "abbr": "",
    "def": "입자들이 서로 닿아 더 채울 수 없는 부피 분율 \\(\\phi_m\\). 다가가면 점도가 발산하며, 입자 모양과 크기 분포에 따라 0.6에서 0.9까지 달라진다.",
    "chapters": [
     "composites#fillers"
    ]
   },
   {
    "ko": "추적자 확산",
    "en": "tracer diffusion",
    "abbr": "",
    "def": "동위원소 등으로 표시한 원자가 농도 기울기 없이 무작위로 퍼지는 확산. 추적자 확산 계수 \\(D^*\\)에는 상관 인자가 곱해져 있다.",
    "chapters": [
     "diffusion-in-materials#mechanisms"
    ]
   },
   {
    "ko": "축소 탄성률",
    "en": "reduced modulus",
    "abbr": "",
    "def": "시료와 압입자의 탄성 변형을 합친 탄성률 \\(1/E_r = (1-\\nu^2)/E + (1-\\nu_i^2)/E_i\\).",
    "chapters": [
     "plasticity-strengthening#hardness"
    ]
   },
   {
    "ko": "취성 파괴",
    "en": "brittle fracture",
    "abbr": "",
    "def": "소성 변형이 거의 없이 균열이 빠르게 달리는 파괴. 벽개나 입계 파괴로 평평하고 반짝이는 파면을 남긴다.",
    "chapters": [
     "fracture-fatigue-creep#dbtt"
    ]
   },
   {
    "ko": "층",
    "en": "ply, lamina",
    "abbr": "",
    "def": "적층판을 이루는 한 장의 판. 보통 섬유가 한 방향으로 정렬된 단방향 판이며 각도로 표시한다.",
    "chapters": [
     "composites#laminates"
    ]
   },
   {
    "ko": "층간 분리",
    "en": "delamination",
    "abbr": "",
    "def": "적층판의 층 사이(섬유가 없는 수지층)나 이종 재료 계면이 갈라지는 파괴. 적층판과 패키지의 대표적 약점이다.",
    "chapters": [
     "composites#fracture"
    ]
   },
   {
    "ko": "치환형 고용체",
    "en": "substitutional solid solution",
    "abbr": "",
    "def": "용질 원자가 용매 원자의 격자 자리를 차지한 고용체. 흄–로더리 규칙이 고용 범위를 가늠하게 해 준다.",
    "chapters": [
     "defects#solid-solutions"
    ]
   },
   {
    "ko": "칠 영역",
    "en": "chill zone",
    "abbr": "",
    "def": "주괴에서 차가운 주형 벽에 닿아 크게 과냉된 액체에 수많은 핵이 생겨 만들어진 얇은 미세 결정립 층.",
    "chapters": [
     "solidification-growth#casting"
    ]
   },
   {
    "ko": "침탄",
    "en": "carburizing",
    "abbr": "",
    "def": "저탄소강을 탄소가 많은 분위기에서 오스테나이트 온도로 가열해 표면에 탄소를 확산시켜 표면을 경화하는 열처리. 표면 농도가 일정한 erf 해로 깊이와 시간을 계산한다.",
    "chapters": [
     "diffusion-in-materials#mechanisms"
    ]
   },
   {
    "ko": "침투 깊이",
    "en": "penetration depth",
    "abbr": "",
    "def": "빛의 세기가 \\(1/e\\)로 줄어드는 깊이 \\(1/\\alpha\\). 레이저 어닐로 데워지는 깊이나 광검출기가 빛을 흡수하는 두께를 정한다.",
    "chapters": [
     "thermal-optical-properties#optics"
    ]
   },
   {
    "ko": "카나야–오카야마 범위",
    "en": "Kanaya–Okayama range",
    "abbr": "",
    "def": "전자가 고체 속으로 들어가는 깊이의 어림식 \\(R = 0.0276AE_0^{1.67}/(Z^{0.889}\\rho)\\) µm (\\(E_0\\) keV).",
    "chapters": [
     "characterization#beam"
    ]
   },
   {
    "ko": "카피차 저항",
    "en": "Kapitza resistance",
    "abbr": "",
    "def": "계면 열저항의 다른 이름 \\(R_\\mathrm{K}\\). 같은 열저항을 갖는 재료 두께 \\(R_\\mathrm{K}\\kappa\\)를 카피차 길이라 하며, 층이 이보다 얇으면 계면이 열 흐름을 지배한다.",
    "chapters": [
     "thermal-optical-properties#conduction"
    ]
   },
   {
    "ko": "칼날 전위",
    "en": "edge dislocation",
    "abbr": "",
    "def": "버거스 벡터가 전위선에 수직인 전위. 끼어든 반쪽 원자면의 끝으로 볼 수 있고, 반쪽면 쪽은 압축·반대쪽은 인장 응력을 받는다.",
    "chapters": [
     "defects#dislocations"
    ]
   },
   {
    "ko": "캡 층",
    "en": "capping layer",
    "abbr": "",
    "def": "구리 배선 윗면을 덮는 SiCN·SiN 유전체나 Co·CoWP 금속막. 구리 EM의 주 경로인 윗면 계면의 확산 속도를 정한다.",
    "chapters": [
     "degradation-reliability#electromigration"
    ]
   },
   {
    "ko": "커너 식",
    "en": "Kerner equation",
    "abbr": "",
    "def": "구형 입자 둘레 기지의 전단 변형까지 고려한 복합재료 열팽창 계수 식. 단순 혼합과 터너 사이에 놓이며 입자 충전 수지의 실측에 잘 맞는다.",
    "chapters": [
     "composites#fillers"
    ]
   },
   {
    "ko": "커켄달 보이드",
    "en": "Kirkendall void",
    "abbr": "",
    "def": "빠른 원소가 빠져나가는 쪽에 공공이 과포화되어 모여 생긴 빈 구멍. 공공 흡수원이 부족할 때 생기며 솔더 접합의 Cu₃Sn 층에서 흔하다.",
    "chapters": [
     "diffusion-in-materials#interdiffusion"
    ]
   },
   {
    "ko": "커켄달 효과",
    "en": "Kirkendall effect",
    "abbr": "",
    "def": "확산 쌍에서 두 원소의 고유 확산 계수가 달라 원자의 알짜 흐름이 생기고, 그만큼의 공공 흐름으로 격자면이 한쪽에서 사라지고 다른 쪽에서 생겨 표지가 빠른 원소 쪽으로 움직이는 현상.",
    "chapters": [
     "diffusion-in-materials#interdiffusion"
    ]
   },
   {
    "ko": "켈빈–보이트 모형",
    "en": "Kelvin–Voigt model",
    "abbr": "",
    "def": "스프링과 대시포트를 병렬로 이은 점탄성 모형. 지연된 크리프 \\(\\varepsilon = (\\sigma_0/E)(1-e^{-t/\\tau})\\)를 그리지만 순간 탄성과 응력 완화가 없다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "코",
    "en": "nose",
    "abbr": "",
    "def": "TTT·CCT 도표의 C 곡선에서 변태 시작 시간이 가장 짧은 지점. 핵생성 구동력과 확산 속도의 곱이 최대인 온도다.",
    "chapters": [
     "transformation-kinetics#rates"
    ]
   },
   {
    "ko": "코블 크리프",
    "en": "Coble creep",
    "abbr": "",
    "def": "물질이 결정립계를 따라 확산해 일어나는 확산 크리프. 속도가 \\(\\sigma\\delta D_{gb}/d^3\\)에 비례해 결정립이 작을수록 빠르다.",
    "chapters": [
     "fracture-fatigue-creep#creep"
    ]
   },
   {
    "ko": "코시 식",
    "en": "Cauchy equation",
    "abbr": "",
    "def": "투명 영역의 굴절률을 \\(n = A + B/\\lambda^2 + C/\\lambda^4\\)로 근사한 실험 분산식. 엘립소메트리로 박막의 굴절률을 맞출 때 흔히 쓴다.",
    "chapters": [
     "thermal-optical-properties#optics"
    ]
   },
   {
    "ko": "코이스티넨–마르부르거 식",
    "en": "Koistinen–Marburger equation",
    "abbr": "",
    "def": "\\(M_s\\) 아래 온도 \\(T\\)까지 냉각했을 때 오스테나이트가 마르텐사이트로 바뀐 분율 \\(f_M = 1-\\exp[-\\alpha_m(M_s-T)]\\), \\(\\alpha_m\\approx0.011\\) K⁻¹.",
    "chapters": [
     "transformation-kinetics#martensite"
    ]
   },
   {
    "ko": "코트렐 분위기",
    "en": "Cottrell atmosphere",
    "abbr": "",
    "def": "용질 원자가 전위의 응력장에서 변형 에너지가 낮아지는 쪽(큰 원자는 인장 쪽)으로 모여 만든 구름. 전위를 붙잡아 항복점 현상을 만든다.",
    "chapters": [
     "defects#stress-energy"
    ]
   },
   {
    "ko": "코핀–맨슨 식",
    "en": "Coffin–Manson relation",
    "abbr": "",
    "def": "저주기 피로에서 소성 변형 진폭과 수명의 관계 \\(\\Delta\\varepsilon_p/2 = \\varepsilon_f'(2N_f)^c\\). 솔더 접합 열 피로 수명 추정에 쓴다.",
    "chapters": [
     "fracture-fatigue-creep#fatigue"
    ]
   },
   {
    "ko": "콩시데르 조건",
    "en": "Considère criterion",
    "abbr": "",
    "def": "하중이 최대가 되어 네킹이 시작되는 조건 \\(d\\sigma_\\mathrm T/d\\varepsilon_\\mathrm T = \\sigma_\\mathrm T\\). 홀로몬 재료에서는 \\(\\varepsilon_\\mathrm T = n\\)이다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "퀴리 온도",
    "en": "Curie temperature",
    "abbr": "",
    "def": "강유전체가 자발 분극을 잃고 상유전체가 되는 상전이 온도 \\(T_\\mathrm{C}\\).",
    "chapters": [
     "electrical-properties#ferroelectrics"
    ]
   },
   {
    "ko": "크뢰거–빙크 표기",
    "en": "Kröger–Vink notation",
    "abbr": "",
    "def": "결함을 \\(\\mathrm{M}_\\mathrm{S}^C\\)(무엇이, 어느 자리에, 완전 결정에 비한 유효 전하 •·′·×로) 나타내는 표기. 결함 반응식의 자리·질량·전하 균형을 맞추는 데 쓴다.",
    "chapters": [
     "defects#ionic-defects"
    ]
   },
   {
    "ko": "크리프",
    "en": "creep",
    "abbr": "",
    "def": "일정한 하중 아래에서 시간에 따라 변형이 쌓이는 현상. 원자 확산이 활발한 \\(T > 0.4T_m\\)에서 중요하다.",
    "chapters": [
     "fracture-fatigue-creep#creep"
    ]
   },
   {
    "ko": "클라우지우스–모소티 식",
    "en": "Clausius–Mossotti relation",
    "abbr": "",
    "def": "로렌츠 국소장으로 분극률과 유전 상수를 잇는 식 \\((\\varepsilon_\\mathrm{r} - 1)/(\\varepsilon_\\mathrm{r} + 2) = N\\alpha/3\\varepsilon_0\\).",
    "chapters": [
     "electrical-properties#dielectrics"
    ]
   },
   {
    "ko": "타우크 그림",
    "en": "Tauc plot",
    "abbr": "",
    "def": "\\((\\alpha h\\nu)^{1/r}\\)을 \\(h\\nu\\)에 대해 그려 흡수 끝 위의 직선 구간을 0까지 연장해 띠틈을 읽는 방법. 직접 허용 전이는 \\(r = 1/2\\), 간접·비정질은 \\(r = 2\\)다.",
    "chapters": [
     "thermal-optical-properties#bandgap"
    ]
   },
   {
    "ko": "탄성 회복",
    "en": "elastic recovery",
    "abbr": "",
    "def": "소성 변형 뒤 하중을 빼면 탄성 변형만큼 기울기 \\(E\\)의 직선을 따라 되돌아오는 것.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "탄소강",
    "en": "plain carbon steel",
    "abbr": "",
    "def": "탄소 외 합금 원소가 망가니즈 1 % 남짓뿐인 강. 탄소량에 따라 저탄소(0.25 % 미만)·중탄소(0.25–0.6 %)·고탄소(0.6–1.4 %)강으로 나눈다.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "탐침 겹침",
    "en": "tip convolution",
    "abbr": "",
    "def": "AFM 상이 표면 모양과 탐침 끝 모양의 겹침(팽창)으로 나타나는 현상. 좁은 골은 좁고 얕게, 돌기는 넓게 보인다.",
    "chapters": [
     "characterization#depth"
    ]
   },
   {
    "ko": "택티시티",
    "en": "tacticity",
    "abbr": "",
    "def": "곁가지가 달린 비닐 고분자에서 곁가지가 지그재그 주사슬의 어느 쪽에 붙는지의 규칙성. 이소·신디오·어택틱으로 나뉜다.",
    "chapters": [
     "polymers#structure"
    ]
   },
   {
    "ko": "터너 식",
    "en": "Turner equation",
    "abbr": "",
    "def": "모든 상이 같은 부피 변형을 하고 내부 응력의 합이 0이라고 보아 체적 탄성률로 가중 평균한 복합재료 열팽창 계수 식. 실측보다 작게 예측하는 경향이 있다.",
    "chapters": [
     "composites#fillers"
    ]
   },
   {
    "ko": "텅스텐 플러그",
    "en": "tungsten plug",
    "abbr": "",
    "def": "콘택·비아 구멍을 Ti/TiN 위에 CVD 텅스텐(WF₆ 환원)으로 채우고 CMP로 위를 깎아 만든 수직 연결 도체.",
    "chapters": [
     "metals-alloys#joining"
    ]
   },
   {
    "ko": "테일러 식",
    "en": "Taylor equation",
    "abbr": "",
    "def": "전위끼리의 상호작용에 의한 강화 \\(\\Delta\\sigma = M\\alpha Gb\\sqrt\\rho\\). 가공 경화의 기본식이다.",
    "chapters": [
     "plasticity-strengthening#hardening"
    ]
   },
   {
    "ko": "테일러 인자",
    "en": "Taylor factor",
    "abbr": "",
    "def": "다결정의 항복 강도와 CRSS를 잇는 방향 평균 인자 \\(M\\)(\\(\\sigma_\\mathrm y\\approx M\\tau_\\mathrm{CRSS}\\)). 무작위 방향 FCC는 약 3.06이다.",
    "chapters": [
     "plasticity-strengthening#slip"
    ]
   },
   {
    "ko": "투명 전도막",
    "en": "transparent conducting oxide, TCO",
    "abbr": "",
    "def": "띠틈이 넓은 산화물에 전자를 \\(10^{20}\\)–\\(10^{21}\\) cm⁻³ 도핑해 가시광은 통과시키고 전기는 통하게 한 막(ITO 등). 띠틈과 플라스마 파장 사이에서 투명하다.",
    "chapters": [
     "thermal-optical-properties#bandgap"
    ]
   },
   {
    "ko": "트랙션",
    "en": "traction",
    "abbr": "",
    "def": "물체 속 한 면을 통해 한쪽이 다른 쪽에 미치는 단위 넓이당 힘. 법선이 \\(\\hat n\\)인 면의 트랙션은 \\(\\mathbf t = \\boldsymbol\\sigma\\hat n\\)이다.",
    "chapters": [
     "elasticity#tensor"
    ]
   },
   {
    "ko": "트레스카 항복 기준",
    "en": "Tresca yield criterion",
    "abbr": "",
    "def": "최대 전단 응력 \\((\\sigma_1-\\sigma_3)/2\\)이 \\(\\sigma_\\mathrm{y}/2\\)에 이르면 항복한다는 기준. 폰 미제스보다 늘 같거나 보수적이다.",
    "chapters": [
     "elasticity#yield-criteria"
    ]
   },
   {
    "ko": "특성 X선",
    "en": "characteristic X-ray",
    "abbr": "",
    "def": "내각 전자가 빠진 자리를 바깥 전자가 메울 때 나오는 X선. 에너지가 원소마다 정해져 있어 원소 분석에 쓴다.",
    "chapters": [
     "characterization#spectroscopy"
    ]
   },
   {
    "ko": "특성비",
    "en": "characteristic ratio",
    "abbr": "",
    "def": "실제 사슬이 같은 결합 수의 자유 결합 사슬보다 얼마나 더 퍼졌는지 나타내는 \\(C_\\infty = \\langle R^2\\rangle/nl^2\\). PE는 약 6.7이다.",
    "chapters": [
     "polymers#conformation"
    ]
   },
   {
    "ko": "틈 부식",
    "en": "crevice corrosion",
    "abbr": "",
    "def": "좁은 틈 속 용액의 산소가 고갈되어 틈 안이 양극, 바깥이 음극이 되며 진행하는 국부 부식.",
    "chapters": [
     "degradation-reliability#corrosion"
    ]
   },
   {
    "ko": "틈새 자리",
    "en": "interstitial site",
    "abbr": "",
    "def": "결정 격자의 원자 사이에 남은 빈 자리. 작은 원자(H·C·N·B)가 들어가 틈새 고용체를 만들거나, 이온 결정에서 양이온이 채운다.",
    "chapters": [
     "bonding-crystal-structure#interstitial"
    ]
   },
   {
    "ko": "틈새형 고용체",
    "en": "interstitial solid solution",
    "abbr": "",
    "def": "H·C·N·O처럼 작은 용질 원자가 용매 원자 사이의 틈새 자리에 들어간 고용체. 고용도는 틈새 자리 크기가 정한다.",
    "chapters": [
     "defects#solid-solutions"
    ]
   },
   {
    "ko": "파괴 인성",
    "en": "fracture toughness",
    "abbr": "",
    "def": "균열이 불안정하게 자라기 시작하는 응력 확대 계수의 임계값. 평면 변형 모드 I 값 \\(K_\\mathrm{IC}\\)를 재료 상수로 쓴다.",
    "chapters": [
     "fracture-fatigue-creep#toughness"
    ]
   },
   {
    "ko": "파레토 전선",
    "en": "Pareto front",
    "abbr": "",
    "def": "여러 목표를 동시에 볼 때 어느 목표도 나빠지지 않으면서 다른 목표를 더 좋게 할 수 있는 후보가 없는 해들의 경계. 최적 재료는 이 전선 위에 있다.",
    "chapters": [
     "materials-selection#selection"
    ]
   },
   {
    "ko": "파리스 법칙",
    "en": "Paris law",
    "abbr": "",
    "def": "피로 균열 성장 속도와 응력 확대 계수 범위의 멱법칙 관계 \\(da/dN = C(\\Delta K)^m\\). 적분하면 균열 성장 수명을 얻는다.",
    "chapters": [
     "fracture-fatigue-creep#crack-growth"
    ]
   },
   {
    "ko": "파이프 확산",
    "en": "pipe diffusion",
    "abbr": "",
    "def": "전위 중심을 따라 일어나는 확산. 유효 확산 계수에 전위 밀도와 파이프 단면적의 곱만큼 기여한다.",
    "chapters": [
     "diffusion-in-materials#short-circuit"
    ]
   },
   {
    "ko": "팔면체 자리",
    "en": "octahedral site",
    "abbr": "",
    "def": "이웃 원자 6개가 팔면체로 둘러싼 틈새 자리. FCC에서 가장 커서 원자 반지름의 0.414배인 구가 들어간다.",
    "chapters": [
     "bonding-crystal-structure#interstitial"
    ]
   },
   {
    "ko": "팝콘 균열",
    "en": "popcorn cracking",
    "abbr": "",
    "def": "흡습한 플라스틱 패키지가 리플로 중 계면의 수분이 증기가 되며 박리되고 수지가 깨지는 불량.",
    "chapters": [
     "degradation-reliability#whisker-moisture"
    ]
   },
   {
    "ko": "패싯",
    "en": "facet",
    "abbr": "",
    "def": "원자적으로 매끈한 결정면으로 이루어진 성장 계면. 잭슨 인자 \\(\\Delta H_f/RT_m\\)이 큰 실리콘·산화물에서 나타나며 계단이 있어야 자란다.",
    "chapters": [
     "solidification-growth#interface"
    ]
   },
   {
    "ko": "펄라이트",
    "en": "pearlite",
    "abbr": "",
    "def": "공석 반응으로 생긴 페라이트와 시멘타이트의 판상 조직. 질량비는 약 89 : 11이며 강의 강도를 높인다.",
    "chapters": [
     "phase-diagrams-microstructure#iron-carbon"
    ]
   },
   {
    "ko": "페라이트",
    "en": "ferrite",
    "abbr": "",
    "def": "탄소가 아주 조금(727 °C에서 최대 0.022 wt%) 녹은 체심 입방 α-철. 무르고 연성이 크다.",
    "chapters": [
     "phase-diagrams-microstructure#iron-carbon"
    ]
   },
   {
    "ko": "페르미 에너지",
    "en": "Fermi energy",
    "abbr": "",
    "def": "0 K에서 전자가 채운 가장 높은 에너지 준위 \\(E_\\mathrm{F}\\).",
    "chapters": [
     "electrical-properties#conduction"
    ]
   },
   {
    "ko": "펙 모형",
    "en": "Peck model",
    "abbr": "",
    "def": "습도 시험의 가속 계수를 상대 습도의 거듭제곱과 아레니우스 온도 항의 곱 \\((\\mathrm{RH}_t/\\mathrm{RH}_u)^n\\exp[E_a/k(1/T_u-1/T_t)]\\)로 나타낸 모형.",
    "chapters": [
     "degradation-reliability#polymer-tests"
    ]
   },
   {
    "ko": "평면 응력",
    "en": "plane stress",
    "abbr": "",
    "def": "한 방향(보통 \\(z\\)) 응력 성분 \\(\\sigma_z, \\tau_{xz}, \\tau_{yz}\\)가 0인 응력 상태. 박막·얇은 판·자유 표면이 이 상태에 가깝다.",
    "chapters": [
     "elasticity#mohr"
    ]
   },
   {
    "ko": "평형 원자 간 거리",
    "en": "equilibrium interatomic spacing",
    "abbr": "",
    "def": "원자 사이 힘 \\(F = -dE/dr\\)이 0이 되는, 결합 에너지 곡선의 바닥 위치 \\(r_0\\). 대개 0.2–0.4 nm다.",
    "chapters": [
     "bonding-crystal-structure#bonding"
    ]
   },
   {
    "ko": "포논 평균 자유 행로",
    "en": "phonon mean free path",
    "abbr": "",
    "def": "포논이 산란되기까지 평균적으로 나아가는 거리 \\(\\ell\\). 포논 열전도도 \\(\\kappa = \\tfrac13Cv\\ell\\)를 정하며, 움클랍·질량 차·경계 산란이 더해져 짧아진다.",
    "chapters": [
     "thermal-optical-properties#conduction"
    ]
   },
   {
    "ko": "포물선 성장 법칙",
    "en": "parabolic growth law",
    "abbr": "",
    "def": "확산이 속도를 정하는 반응층·산화막의 두께가 \\(x^2 = x_0^2 + kt\\)로 자라는 법칙. 성장 상수 \\(k\\)는 아레니우스형 온도 의존성을 갖는다.",
    "chapters": [
     "diffusion-in-materials#reactive"
    ]
   },
   {
    "ko": "포물선 속도 법칙",
    "en": "parabolic rate law",
    "abbr": "",
    "def": "치밀한 막을 지나는 이온 확산이 속도를 정해 \\(x^2 = k_pt\\)로 자라는 산화 법칙. 막이 두꺼워질수록 스스로 느려진다.",
    "chapters": [
     "degradation-reliability#oxidation"
    ]
   },
   {
    "ko": "포정 반응",
    "en": "peritectic reaction",
    "abbr": "",
    "def": "냉각할 때 액체와 한 고체가 반응해 새 고체를 만드는 반응 \\(\\mathrm{L} + \\alpha \\to \\beta\\). 생긴 β가 반응물을 갈라놓아 흔히 끝나지 않고 남는다.",
    "chapters": [
     "phase-diagrams-microstructure#peritectic-imc"
    ]
   },
   {
    "ko": "포츠 모형",
    "en": "Potts model",
    "abbr": "",
    "def": "격자 칸마다 결정립 번호를 붙이고 경계 에너지가 줄도록 번호를 바꾸는 몬테카를로 모형. 곡률 구동 결정립 성장과 \\(d^2 \\propto t\\)를 재현한다.",
    "chapters": [
     "solidification-growth#grain-growth"
    ]
   },
   {
    "ko": "폭스 식",
    "en": "Fox equation",
    "abbr": "",
    "def": "섞이는 두 성분(랜덤 공중합체, 고분자와 가소제)의 유리 전이 온도를 어림하는 식 \\(1/T_g = w_1/T_{g1}+w_2/T_{g2}\\)(켈빈).",
    "chapters": [
     "polymers#crystallinity-transitions"
    ]
   },
   {
    "ko": "폰 미제스 등가 응력",
    "en": "von Mises equivalent stress",
    "abbr": "",
    "def": "다축 응력 상태를 단축 인장으로 환산한 값 \\(\\sigma_\\text{vM} = \\sqrt{\\tfrac12[(\\sigma_1-\\sigma_2)^2+(\\sigma_2-\\sigma_3)^2+(\\sigma_3-\\sigma_1)^2]}\\). 단축 인장이면 \\(\\sigma\\), 등이축이면 \\(|\\sigma|\\)이다.",
    "chapters": [
     "elasticity#yield-criteria"
    ]
   },
   {
    "ko": "폰 미제스 항복 기준",
    "en": "von Mises yield criterion",
    "abbr": "",
    "def": "편차 응력이 저장하는 뒤틀림 에너지가 임계값에 이르면 항복한다는 기준. 등가 응력 \\(\\sigma_\\text{vM} = \\sqrt{\\tfrac12\\sum(\\sigma_i-\\sigma_j)^2}\\)이 \\(\\sigma_\\mathrm{y}\\)에 이르면 항복하며 정수압과 무관하다.",
    "chapters": [
     "elasticity#yield-criteria"
    ]
   },
   {
    "ko": "폴리타입",
    "en": "polytypism",
    "abbr": "",
    "def": "조밀 층(이중층)의 적층 순서만 다른 다형. SiC의 3C(ABC)·4H(ABCB)·6H(ABCACB)처럼 같은 사면체 결합에서 띠틈 같은 성질이 달라진다.",
    "chapters": [
     "bonding-crystal-structure#covalent"
    ]
   },
   {
    "ko": "표류 속도",
    "en": "drift velocity",
    "abbr": "",
    "def": "전기장 속에서 산란을 겪는 캐리어 무리가 평균적으로 흘러가는 속도 \\(v_\\mathrm{d} = \\mu E\\).",
    "chapters": [
     "electrical-properties#conduction"
    ]
   },
   {
    "ko": "표면 에너지",
    "en": "surface energy",
    "abbr": "",
    "def": "새 표면을 단위 넓이만큼 만드는 데 드는 에너지 \\(\\gamma_s\\)[J/m²]. 그리피스 이론에서 균열이 자랄 때 치르는 비용이다.",
    "chapters": [
     "fracture-fatigue-creep#griffith"
    ]
   },
   {
    "ko": "표면 확산",
    "en": "surface diffusion",
    "abbr": "",
    "def": "자유 표면 위에서 원자가 움직이는 확산. 활성화 에너지가 가장 낮아 박막 성장, 소결, 배선 표면의 일렉트로마이그레이션에서 중요하다.",
    "chapters": [
     "diffusion-in-materials#short-circuit"
    ]
   },
   {
    "ko": "표준 선형 고체",
    "en": "standard linear solid (Zener model)",
    "abbr": "",
    "def": "스프링 \\(E_1\\)을 맥스웰 가지(\\(E_2\\), \\(\\eta\\))와 병렬로 놓은 점탄성 모형(제너 모형). 완화 탄성률 \\(E(t) = E_1+E_2e^{-t/\\tau}\\)로 순간·지연 탄성을 모두 나타낸다.",
    "chapters": [
     "polymers#viscoelasticity"
    ]
   },
   {
    "ko": "표지",
    "en": "marker",
    "abbr": "",
    "def": "확산 쌍의 경계에 심어 두는 녹지 않는 불활성 물체(몰리브데넘 선, 산화물 입자 등). 격자와 함께 움직여 격자의 이동을 보여 준다.",
    "chapters": [
     "diffusion-in-materials#interdiffusion"
    ]
   },
   {
    "ko": "푸아송 비",
    "en": "Poisson's ratio",
    "abbr": "",
    "def": "단축으로 당길 때 옆 방향 수축 변형과 축 방향 변형의 비 \\(\\nu = -\\varepsilon_\\text{옆}/\\varepsilon_\\text{축}\\). 등방성 재료에서 \\(-1 \\lt \\nu \\lt 0.5\\)이고 금속은 약 0.3이다.",
    "chapters": [
     "elasticity#hooke"
    ]
   },
   {
    "ko": "풀림",
    "en": "annealing",
    "abbr": "",
    "def": "금속을 데웠다가 천천히 식혀 무르게 하거나 응력을 빼고 조직을 고르게 하는 열처리. 강의 완전 풀림은 오스테나이트화 뒤 노랭해 조대 펄라이트를 만든다.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "프랭크 규칙",
    "en": "Frank's rule",
    "abbr": "",
    "def": "전위 \\(\\mathbf b_1\\)이 \\(\\mathbf b_2 + \\mathbf b_3\\)로 갈라지는 것이 에너지상 유리한 조건 \\(b_1^2 > b_2^2 + b_3^2\\).",
    "chapters": [
     "defects#stress-energy"
    ]
   },
   {
    "ko": "프랭크–리드 원",
    "en": "Frank–Read source",
    "abbr": "",
    "def": "두 점에 고정된 전위 선분이 응력 \\(\\tau\\approx Gb/L\\)을 넘으면 휘어 감아 돌며 전위 고리를 거듭 내보내는 증식 기구.",
    "chapters": [
     "plasticity-strengthening#hardening"
    ]
   },
   {
    "ko": "프렌켈 결함",
    "en": "Frenkel defect",
    "abbr": "",
    "def": "이온 하나가 제자리를 떠나 가까운 틈새로 들어가 생긴 공공–틈새 이온 쌍. 작은 양이온을 가진 AgCl 등에서 주된 결함이다.",
    "chapters": [
     "defects#ionic-defects"
    ]
   },
   {
    "ko": "플로리 분포",
    "en": "Flory–Schulz (most probable) distribution",
    "abbr": "",
    "def": "모든 작용기가 같은 확률로 반응할 때 단계 중합이 만드는 사슬 길이 분포. 수 분율 \\(n(x) = (1-p)p^{x-1}\\), 분산도 \\(1+p\\).",
    "chapters": [
     "polymers#molecular-weight"
    ]
   },
   {
    "ko": "플로어 수명",
    "en": "floor life",
    "abbr": "",
    "def": "방습 포장을 연 부품을 30 °C/60 %RH 이하에서 리플로 전까지 둘 수 있는 시간. 넘기면 굽기로 수분을 빼야 한다.",
    "chapters": [
     "degradation-reliability#whisker-moisture"
    ]
   },
   {
    "ko": "피로",
    "en": "fatigue",
    "abbr": "",
    "def": "항복 강도보다 낮은 반복 응력 아래에서 균열이 생기고 자라 결국 파단하는 현상.",
    "chapters": [
     "fracture-fatigue-creep#fatigue"
    ]
   },
   {
    "ko": "피로 한도",
    "en": "fatigue limit",
    "abbr": "",
    "def": "그 아래의 진폭에서는 사실상 무한히 반복해도 파단하지 않는 응력 진폭. 강과 Ti 합금에 있고 Al·Cu 합금에는 없다.",
    "chapters": [
     "fracture-fatigue-creep#fatigue"
    ]
   },
   {
    "ko": "피치–쾰러 식",
    "en": "Peach–Koehler equation",
    "abbr": "",
    "def": "응력장 속 전위가 받는 단위 길이당 힘 \\(\\mathbf F = (\\boldsymbol\\sigma\\cdot\\mathbf b)\\times\\boldsymbol\\xi\\). 평행 칼날 전위면 미끄럼 방향 힘은 \\(b\\sigma_{xy}\\)다.",
    "chapters": [
     "defects#stress-energy"
    ]
   },
   {
    "ko": "필링–베드워스 비",
    "en": "Pilling–Bedworth ratio",
    "abbr": "",
    "def": "산화물 부피와 그것을 만드느라 소모된 금속 부피의 비 \\(\\mathrm{PBR} = M_\\mathrm{ox}\\rho_\\mathrm{m}/(nM_\\mathrm{m}\\rho_\\mathrm{ox})\\). 1–2이면 치밀한 보호막, 1보다 작으면 갈라지고 2보다 크면 박리하기 쉽다.",
    "chapters": [
     "degradation-reliability#oxidation"
    ]
   },
   {
    "ko": "하트 식",
    "en": "Hart equation",
    "abbr": "",
    "def": "A 영역의 유효 확산 계수 \\(D_\\text{eff} = (1-f)D_\\mathrm l + fD_\\mathrm{gb}\\), \\(f\\approx3\\delta/d\\). 격자와 결정립계의 부피 분율로 가중한 평균이다.",
    "chapters": [
     "diffusion-in-materials#short-circuit"
    ]
   },
   {
    "ko": "할핀–차이 식",
    "en": "Halpin–Tsai equation",
    "abbr": "",
    "def": "\\(E/E_m = (1+\\xi\\eta V_f)/(1-\\eta V_f)\\), \\(\\eta = (E_f/E_m-1)/(E_f/E_m+\\xi)\\)로 복합재료 탄성률을 어림하는 반경험식. 형상 인자 \\(\\xi\\)가 0이면 로이스, 무한대면 보이트가 된다.",
    "chapters": [
     "composites#fibers"
    ]
   },
   {
    "ko": "합금강",
    "en": "alloy steel",
    "abbr": "",
    "def": "Cr·Ni·Mo·V 등을 몇 % 넣어 경화능·강도·인성을 높인 강. AISI 4xxx 계열(4140, 4340)이 대표적이다.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "항복 강도",
    "en": "yield strength",
    "abbr": "",
    "def": "소성 변형이 시작되는 응력 \\(\\sigma_\\mathrm y\\). 경계가 뚜렷하지 않은 금속은 0.2 % 오프셋 방법으로 정한다.",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "항전기장",
    "en": "coercive field",
    "abbr": "",
    "def": "이력 곡선에서 분극을 0으로 만드는 데 필요한 전기장 \\(E_\\mathrm{c}\\).",
    "chapters": [
     "electrical-properties#ferroelectrics"
    ]
   },
   {
    "ko": "해리슨 분류",
    "en": "Harrison classification",
    "abbr": "",
    "def": "격자 확산 길이 \\(\\sqrt{D_\\mathrm lt}\\)를 결정립 크기 \\(d\\), 결정립계 폭 \\(\\delta\\)와 비교해 결정립계 확산을 A(\\(\\sqrt{D_\\mathrm lt}>d\\)), B(그 사이), C(\\(\\sqrt{D_\\mathrm lt}<\\delta/20\\)) 영역으로 나눈 분류.",
    "chapters": [
     "diffusion-in-materials#short-circuit"
    ]
   },
   {
    "ko": "핵",
    "en": "nucleus",
    "abbr": "",
    "def": "새 상이 처음 생길 때의 작은 원자 덩어리. 임계 크기 \\(r^*\\)를 넘어야 자랄수록 자유 에너지가 낮아져 안정하게 성장한다.",
    "chapters": [
     "transformation-kinetics#nucleation"
    ]
   },
   {
    "ko": "핵생성 장벽",
    "en": "nucleation barrier",
    "abbr": "",
    "def": "임계 핵을 만드는 데 필요한 자유 에너지 \\(\\Delta G^* = 16\\pi\\gamma^3/3(\\Delta G_v-\\Delta G_s)^2\\). 핵생성 속도는 \\(\\exp(-\\Delta G^*/kT)\\)에 비례한다.",
    "chapters": [
     "transformation-kinetics#nucleation"
    ]
   },
   {
    "ko": "허용 인자",
    "en": "tolerance factor",
    "abbr": "",
    "def": "페로브스카이트 ABO₃에서 A·B 이온 크기의 맞음새 \\(t = (r_\\mathrm{A}+r_\\mathrm{O})/[\\sqrt2(r_\\mathrm{B}+r_\\mathrm{O})]\\). \\(t\\approx1\\)이면 입방, 크면 B가 비켜나 강유전성, 작으면 팔면체가 기울어진다.",
    "chapters": [
     "bonding-crystal-structure#ceramics"
    ]
   },
   {
    "ko": "헤링 크기 법칙",
    "en": "Herring scaling law",
    "abbr": "",
    "def": "같은 기구로 같은 정도까지 소결하는 데 걸리는 시간이 입자 크기의 거듭제곱 \\(t_2/t_1 = (r_2/r_1)^m\\)에 비례한다는 법칙.",
    "chapters": [
     "ceramics-glasses#sintering"
    ]
   },
   {
    "ko": "형상 기억 합금",
    "en": "shape memory alloy",
    "abbr": "",
    "def": "저온 마르텐사이트 상태에서 변형한 뒤 가열하면 가역적인 마르텐사이트 변태로 원래 모양을 되찾는 합금. NiTi(니티놀)가 대표적이다.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "형태",
    "en": "conformation",
    "abbr": "",
    "def": "단일 결합의 회전으로 사슬이 매 순간 취하는 공간적 모양. 긴 사슬은 열 요동으로 수많은 형태를 오가며 무작위 걸음처럼 엉킨다.",
    "chapters": [
     "polymers#conformation"
    ]
   },
   {
    "ko": "혼합 법칙",
    "en": "rule of mixtures",
    "abbr": "",
    "def": "복합재료의 성질을 구성 상의 성질을 부피 분율로 평균해 어림하는 법칙. 등변형(보이트)이 상한, 등응력(로이스)이 하한이다.",
    "chapters": [
     "composites#mixtures"
    ]
   },
   {
    "ko": "혼합 전위",
    "en": "mixed dislocation",
    "abbr": "",
    "def": "버거스 벡터가 전위선과 0°도 90°도 아닌 각을 이루어 칼날 성분 \\(b\\sin\\beta\\)와 나사 성분 \\(b\\cos\\beta\\)를 함께 가진 전위.",
    "chapters": [
     "defects#dislocations"
    ]
   },
   {
    "ko": "홀–페치 식",
    "en": "Hall–Petch relation",
    "abbr": "",
    "def": "항복 강도와 결정립 크기의 관계 \\(\\sigma_\\mathrm y = \\sigma_0 + k_\\mathrm y d^{-1/2}\\).",
    "chapters": [
     "plasticity-strengthening#strengthening"
    ]
   },
   {
    "ko": "홀로몬 식",
    "en": "Hollomon equation",
    "abbr": "",
    "def": "균일 소성 구간의 진응력–진변형 관계를 거듭제곱으로 나타낸 식 \\(\\sigma_\\mathrm T = K\\varepsilon_\\mathrm T^{\\,n}\\).",
    "chapters": [
     "plasticity-strengthening#tensile"
    ]
   },
   {
    "ko": "홀로몬–자페 변수",
    "en": "Hollomon–Jaffe tempering parameter",
    "abbr": "",
    "def": "뜨임의 온도 \\(T\\)(K)와 시간 \\(t\\)(h)를 하나로 묶은 변수 \\(P = T(C + \\log t)\\), \\(C \\approx 20\\). 값이 같으면 뜨임 경도가 거의 같다.",
    "chapters": [
     "metals-alloys#steels"
    ]
   },
   {
    "ko": "화학 강화",
    "en": "chemical strengthening",
    "abbr": "",
    "def": "유리를 녹은 KNO₃에 담가 표면의 Na⁺를 큰 K⁺로 바꿔 얕은 표면층에 큰 압축 응력을 거는 강화법.",
    "chapters": [
     "ceramics-glasses#viscosity"
    ]
   },
   {
    "ko": "화학 이동",
    "en": "chemical shift",
    "abbr": "",
    "def": "같은 원소의 내각 결합 에너지가 산화 상태나 이웃 원자에 따라 수 eV 옮겨 가는 현상. XPS로 화학 상태를 구별하는 근거다.",
    "chapters": [
     "characterization#spectroscopy"
    ]
   },
   {
    "ko": "확산 방벽",
    "en": "diffusion barrier",
    "abbr": "",
    "def": "한 물질의 원자가 다른 쪽으로 퍼지지 못하게 막는 얇은 층. 구리 배선의 Ta/TaN, 텅스텐 플러그의 TiN이 대표적이다.",
    "chapters": [
     "diffusion-in-materials#barrier"
    ]
   },
   {
    "ko": "황동",
    "en": "brass",
    "abbr": "",
    "def": "구리에 아연을 녹인 합금. 70Cu–30Zn은 연성이 좋은 α 고용체로, 고용 강화 때문에 전도도는 약 28 %IACS로 떨어진다.",
    "chapters": [
     "metals-alloys#nonferrous"
    ]
   },
   {
    "ko": "회복",
    "en": "recovery",
    "abbr": "",
    "def": "어닐 초기에 전위가 소멸·재배열해 잔류 응력과 전기 저항이 줄지만 강도는 거의 그대로인 단계.",
    "chapters": [
     "plasticity-strengthening#annealing"
    ]
   },
   {
    "ko": "회전 반지름",
    "en": "radius of gyration",
    "abbr": "",
    "def": "사슬의 모든 단위가 질량 중심에서 떨어진 거리의 제곱 평균근 \\(R_g\\). 무작위 걸음 사슬은 \\(R_g = R/\\sqrt6\\)이며 산란 실험으로 잰다.",
    "chapters": [
     "polymers#conformation"
    ]
   },
   {
    "ko": "후경화",
    "en": "post-cure",
    "abbr": "",
    "def": "성형 뒤 남은 경화 반응을 마저 진행하려고 \\(T_g\\) 근처나 그 위에서 오래 굽는 공정(EMC의 PMC).",
    "chapters": [
     "polymers#thermosets"
    ]
   },
   {
    "ko": "후방 산란 계수",
    "en": "backscatter coefficient",
    "abbr": "",
    "def": "입사 전자 가운데 시료 표면으로 되튀어 나오는 비율 \\(\\eta\\). 원자 번호와 함께 커지고 가속 전압에는 거의 무관하다.",
    "chapters": [
     "characterization#beam"
    ]
   },
   {
    "ko": "후방 산란 전자",
    "en": "backscattered electron, BSE",
    "abbr": "",
    "def": "탄성 산란을 거쳐 입사 에너지에 가까운 에너지로 시료 밖으로 되튀어 나온 전자. 평균 원자 번호에 따른 조성 대비를 준다.",
    "chapters": [
     "characterization#beam"
    ]
   },
   {
    "ko": "흡수 계수",
    "en": "absorption coefficient",
    "abbr": "",
    "def": "빛의 세기가 재료 속에서 \\(I = I_0e^{-\\alpha x}\\)로 줄 때의 \\(\\alpha\\)(보통 cm⁻¹). 소광 계수와 \\(\\alpha = 4\\pi k/\\lambda\\)로 이어진다.",
    "chapters": [
     "thermal-optical-properties#optics"
    ]
   },
   {
    "ko": "흡수 끝",
    "en": "absorption edge",
    "abbr": "",
    "def": "광자 에너지가 띠틈을 넘으며 흡수 계수가 급격히 커지는 경계. 차단 파장 \\(\\lambda_c = hc/E_g\\)가 재료의 투명도와 색을 정한다.",
    "chapters": [
     "thermal-optical-properties#bandgap"
    ]
   },
   {
    "ko": "희생 양극",
    "en": "sacrificial anode",
    "abbr": "",
    "def": "보호할 금속보다 덜 귀한 금속(아연·마그네슘)을 연결해 그것이 대신 녹게 함으로써 구조물을 지키는 방법 또는 그 금속.",
    "chapters": [
     "degradation-reliability#corrosion"
    ]
   },
   {
    "ko": "힐록",
    "en": "hillock",
    "abbr": "",
    "def": "원자가 쌓여 압축 응력이 커진 곳에서 표면 위로 솟은 금속 돌기. 이웃 배선과 단락을 일으킬 수 있다.",
    "chapters": [
     "degradation-reliability#electromigration"
    ]
   }
  ]
 }
});
