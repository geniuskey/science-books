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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     "slug": "materials-data",
     "num": "A",
     "title": "재료 물성 자료와 계산기",
     "en": "Materials Property Data and Calculators",
     "desc": "금속·세라믹·고분자·반도체·복합재료의 밀도·탄성률·강도·파괴 인성·열팽창·열전도·저항률·유전율을 표·성질 지도·계산기로 찾고, 자주 쓰는 공식을 한곳에 모았다.",
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
  "thermal-optical-properties": {
   "problems": 0,
   "examples": 6,
   "sims": 4,
   "figures": 8,
   "drills": 2,
   "minis": 4,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  }
 },
 "published": 11,
 "total": 20,
 "url": "https://science.euiyun.com/materials-science/"
});
