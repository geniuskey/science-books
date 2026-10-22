/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "electromagnetics",
 "title": "전자기학",
 "en": "Electromagnetics",
 "field": "physics",
 "level": "대학 2–3학년 · 반도체 기초",
 "status": "published",
 "description": "벡터 해석에서 출발해 정전기장과 유전체, 경계값 문제, 전류와 정자기장, 전자기 유도, 맥스웰 방정식, 평면파와 박막 반사, 전송선과 신호 무결성, 도파관, 복사, 수치 전자기학까지 — 커패시터·배선·플라스마 장비·박막 측정 속 전기장과 자기장을 직접 그리고 풀며 익히는 인터랙티브 교과서.",
 "accent": {
  "light": "#be123c",
  "dark": "#fb7185",
  "light2": "#1d4ed8",
  "dark2": "#60a5fa"
 },
 "mark": "<path d=\"M5 16c3-6 6-6 8.5 0s5.5 6 8.5 0 4-4 5-2\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"16\" cy=\"16\" r=\"10\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.4\" stroke-dasharray=\"2.5 2.5\"/><path d=\"M16 4v4M16 24v4\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>",
 "parts": [
  {
   "title": "제1부 정전기학",
   "chapters": [
    {
     "slug": "vector-analysis",
     "num": "01",
     "title": "벡터 해석",
     "en": "Vector Analysis",
     "desc": "직교·원통·구 좌표계, 선·면·부피 적분, 기울기·발산·회전의 뜻, 발산 정리와 스토크스 정리, 라플라시안, 헬름홀츠 정리와 디랙 델타 — 장(field)을 읽는 언어.",
     "tags": [
      "발산",
      "회전"
     ]
    },
    {
     "slug": "electrostatics",
     "num": "02",
     "title": "정전기장",
     "en": "Electrostatic Fields",
     "desc": "쿨롱 법칙과 중첩, 연속 전하 분포, 가우스 법칙(적분형·미분형), 정전 퍼텐셜과 등전위면, 전기 쌍극자와 다중극 전개, 정전 에너지와 에너지 밀도 — 정전기 방전(ESD)과 웨이퍼 대전.",
     "tags": [
      "가우스 법칙",
      "전위"
     ]
    },
    {
     "slug": "conductors-dielectrics",
     "num": "03",
     "title": "도체와 유전체",
     "en": "Conductors and Dielectrics",
     "desc": "정전 평형의 도체와 차폐, 분극과 속박 전하, 전기 변위 D와 유전율, 경계 조건, 정전 용량(평행판·동축·구), 유전체 속 에너지와 힘, 절연 파괴 — MIM·DRAM 커패시터와 high-k의 등가 산화막 두께.",
     "tags": [
      "유전율",
      "정전 용량"
     ]
    },
    {
     "slug": "boundary-value",
     "num": "04",
     "title": "경계값 문제",
     "en": "Boundary-Value Problems",
     "desc": "푸아송·라플라스 방정식과 유일성 정리, 영상법, 직각·원통·구 좌표 변수 분리, 르장드르 급수, 유한 차분과 이완법 — TCAD 푸아송 풀이와 배선 기생 용량 추출.",
     "tags": [
      "라플라스 방정식",
      "영상법"
     ]
    }
   ]
  },
  {
   "title": "제2부 전류와 정자기학",
   "chapters": [
    {
     "slug": "steady-currents",
     "num": "05",
     "title": "정상 전류",
     "en": "Steady Electric Currents",
     "desc": "전류 밀도와 연속 방정식, 점형 옴의 법칙, 전하 이완 시간, 저항 계산(면저항·퍼짐 저항·비아), 줄 열과 전류 밀집, 정전기장과의 쌍대성, 일렉트로마이그레이션과 블랙 식 — 배선 신뢰성.",
     "tags": [
      "전류 밀도",
      "면저항"
     ]
    },
    {
     "slug": "magnetostatics",
     "num": "06",
     "title": "정자기장",
     "en": "Static Magnetic Fields",
     "desc": "로런츠 힘과 홀 효과, 비오–사바르 법칙, 앙페르 법칙(적분형·미분형), 자기 벡터 퍼텐셜, 자기 쌍극자, 자기 선속과 인덕턴스(동축·평행선·나선) — 온칩 인덕터와 전자빔 편향.",
     "tags": [
      "비오–사바르",
      "앙페르 법칙"
     ]
    },
    {
     "slug": "magnetic-materials",
     "num": "07",
     "title": "자성체와 자기 회로",
     "en": "Magnetic Materials and Circuits",
     "desc": "자화와 속박 전류, 자기장 세기 H와 투자율, 경계 조건, 자기 회로와 릴럭턴스, 히스테리시스와 손실, 자기 에너지와 힘, 영구 자석 — 마그네트론 스퍼터링과 자기 차폐.",
     "tags": [
      "투자율",
      "자기 회로"
     ]
    }
   ]
  },
  {
   "title": "제3부 시간에 따라 변하는 장",
   "chapters": [
    {
     "slug": "induction",
     "num": "08",
     "title": "전자기 유도",
     "en": "Electromagnetic Induction",
     "desc": "패러데이 법칙과 렌츠 법칙, 운동 기전력, 자기·상호 인덕턴스, 자기 에너지, 와전류와 유도 가열, 변압기 — ICP 플라스마 코일과 와전류 막두께 측정.",
     "tags": [
      "패러데이 법칙",
      "인덕턴스"
     ]
    },
    {
     "slug": "maxwell-equations",
     "num": "09",
     "title": "맥스웰 방정식",
     "en": "Maxwell's Equations",
     "desc": "변위 전류와 맥스웰 방정식의 완성, 경계 조건, 스칼라·벡터 퍼텐셜과 게이지, 지연 퍼텐셜, 페이저 표기, 포인팅 정리와 전자기 운동량 — 준정적 근사가 깨지는 순간.",
     "tags": [
      "변위 전류",
      "포인팅 벡터"
     ]
    },
    {
     "slug": "plane-waves",
     "num": "10",
     "title": "평면파",
     "en": "Uniform Plane Waves",
     "desc": "파동 방정식과 균일 평면파, 고유 임피던스, 손실 매질과 손실 탄젠트, 양도체와 표피 깊이, 편광, 위상·군속도와 분산, 플라스마 속의 파동과 차단 — 배선 표피 효과와 플라스마 밀도.",
     "tags": [
      "표피 깊이",
      "편광"
     ]
    },
    {
     "slug": "reflection",
     "num": "11",
     "title": "반사와 투과",
     "en": "Reflection and Transmission",
     "desc": "수직 입사와 정재파, 다층 박막과 전달 행렬, 반사 방지막, 사입사의 프레넬 식, 브루스터 각, 전반사와 소산파, 엘립소메트리 — 박막 두께 측정과 BARC.",
     "tags": [
      "프레넬 식",
      "박막"
     ]
    }
   ]
  },
  {
   "title": "제4부 전송선과 고주파",
   "chapters": [
    {
     "slug": "transmission-lines",
     "num": "12",
     "title": "전송선",
     "en": "Transmission Lines",
     "desc": "분포 정수 모형과 전신 방정식, 특성 임피던스와 전파 상수, 반사 계수와 정재파비, 입력 임피던스, 스미스 차트, 임피던스 정합(L 회로·스터브·λ/4) — 플라스마 장비의 RF 정합기.",
     "tags": [
      "특성 임피던스",
      "스미스 차트"
     ]
    },
    {
     "slug": "signal-integrity",
     "num": "13",
     "title": "과도 응답과 신호 무결성",
     "en": "Transients and Signal Integrity",
     "desc": "계단파의 반사와 바운스 도표, TDR, RC 배선과 LC 선로의 경계, 엘모어 지연과 리피터, 손실 선로와 아이 패턴, 누화, 전원망 임피던스 — 칩·패키지·HBM 배선.",
     "tags": [
      "TDR",
      "누화"
     ]
    },
    {
     "slug": "waveguides",
     "num": "14",
     "title": "도파관과 공진기",
     "en": "Waveguides and Resonators",
     "desc": "평행판과 사각 도파관의 TE·TM 모드, 차단 주파수와 분산, 도파관 손실, 공동 공진기와 Q, 유전체 슬랩·광섬유 도파 — 마이크로파 플라스마와 실리콘 포토닉스.",
     "tags": [
      "TE·TM 모드",
      "차단 주파수"
     ]
    },
    {
     "slug": "radiation",
     "num": "15",
     "title": "복사와 안테나",
     "en": "Radiation and Antennas",
     "desc": "헤르츠 쌍극자의 근거리·원거리장, 복사 저항과 지향성, 반파장 다이폴, 배열 안테나와 빔 조향, 프리스 전송 식, 전자파 간섭(EMI)과 차폐 — 칩·보드의 의도치 않은 안테나.",
     "tags": [
      "복사 패턴",
      "EMI"
     ]
    }
   ]
  },
  {
   "title": "제5부 계산",
   "chapters": [
    {
     "slug": "computational-em",
     "num": "16",
     "title": "수치 전자기학",
     "en": "Computational Electromagnetics",
     "desc": "유한 차분법과 수렴, 유한 요소법의 생각, FDTD와 이 격자·쿠랑 조건·흡수 경계, 모멘트 법과 정전 용량 추출, RCWA 개요 — TCAD·기생 추출·리소그래피 시뮬레이션의 속.",
     "tags": [
      "FDTD",
      "유한 요소"
     ]
    }
   ]
  },
  {
   "title": "부록",
   "appendix": true,
   "chapters": [
    {
     "slug": "formulas-data",
     "num": "A",
     "title": "공식과 물성 자료",
     "en": "Formulas and Material Data",
     "desc": "좌표계별 벡터 연산 공식, 대표 구조의 정전 용량·인덕턴스·특성 임피던스, 반도체 공정 재료의 유전율·전도도·투자율·굴절률을 계산기와 함께 찾는다.",
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
  "vector-analysis": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 11,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "electrostatics": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 14,
   "drills": 2,
   "minis": 7,
   "tangles": 5,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "conductors-dielectrics": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 11,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "boundary-value": {
   "problems": 15,
   "examples": 7,
   "sims": 6,
   "figures": 12,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 4,
   "predicts": 4,
   "hero": 1
  },
  "steady-currents": {
   "problems": 15,
   "examples": 9,
   "sims": 6,
   "figures": 13,
   "drills": 3,
   "minis": 6,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "magnetostatics": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 10,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "magnetic-materials": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 9,
   "drills": 2,
   "minis": 3,
   "tangles": 5,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "induction": {
   "problems": 15,
   "examples": 7,
   "sims": 5,
   "figures": 10,
   "drills": 2,
   "minis": 5,
   "tangles": 5,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "maxwell-equations": {
   "problems": 15,
   "examples": 7,
   "sims": 6,
   "figures": 11,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "plane-waves": {
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
  "reflection": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 10,
   "drills": 2,
   "minis": 4,
   "tangles": 7,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "transmission-lines": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 11,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "signal-integrity": {
   "problems": 15,
   "examples": 8,
   "sims": 7,
   "figures": 8,
   "drills": 2,
   "minis": 3,
   "tangles": 5,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "waveguides": {
   "problems": 15,
   "examples": 7,
   "sims": 6,
   "figures": 10,
   "drills": 2,
   "minis": 4,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "radiation": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 10,
   "drills": 2,
   "minis": 4,
   "tangles": 6,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "computational-em": {
   "problems": 15,
   "examples": 7,
   "sims": 6,
   "figures": 13,
   "drills": 2,
   "minis": 7,
   "tangles": 3,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "formulas-data": {
   "problems": 12,
   "examples": 0,
   "sims": 9,
   "figures": 0,
   "drills": 1,
   "minis": 0,
   "tangles": 4,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "glossary": {
   "problems": 73,
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
 "published": 18,
 "total": 18,
 "url": "https://science.euiyun.com/electromagnetics/",
 "glossary": {
  "version": 1,
  "terms": [
   {
    "ko": "4탐침법",
    "en": "four-point probe",
    "abbr": "",
    "def": "바깥 두 탐침으로 전류를 흘리고 안쪽 두 탐침으로 전압을 재어 접촉 저항을 배제하는 비저항·면저항 측정법. 얇은 막에서 \\(R_s = (\\pi/\\ln2)V/I\\).",
    "chapters": [
     "steady-currents#resistance"
    ]
   },
   {
    "ko": "λ/4 변성기",
    "en": "quarter-wave transformer",
    "abbr": "",
    "def": "길이 λ/4, 특성 임피던스 \\(\\sqrt{Z_0R_L}\\)인 선을 끼워 실수 부하 \\(R_L\\)을 \\(Z_0\\)에 정합하는 방법. 대역폭은 부하 비가 클수록 좁다.",
    "chapters": [
     "transmission-lines#matching"
    ]
   },
   {
    "ko": "E×B 표류",
    "en": "E×B drift",
    "abbr": "",
    "def": "서로 수직인 전기장과 자기장 속에서 전하가 원운동하며 \\(\\mathbf v_d = \\mathbf E\\times\\mathbf B/B^2\\)로 미끄러져 가는 운동. 전하의 부호와 질량에 무관하다.",
    "chapters": [
     "magnetostatics#lorentz"
    ]
   },
   {
    "ko": "L 정합 회로",
    "en": "L-network",
    "abbr": "",
    "def": "직렬 리액턴스 하나와 병렬 서셉턴스 하나로 된 가장 단순한 무손실 정합 회로. 스미스 차트에서 \\(r\\) 원과 \\(g\\) 원을 따라 두 번 움직여 중심에 닿는다.",
    "chapters": [
     "transmission-lines#matching"
    ]
   },
   {
    "ko": "TE 모드",
    "en": "transverse electric mode",
    "abbr": "",
    "def": "전기장이 진행 방향에 수직(\\(E_z = 0\\))이고 자기장은 진행 방향 성분 \\(H_z\\)를 갖는 모드. H파라고도 한다.",
    "chapters": [
     "waveguides#guided"
    ]
   },
   {
    "ko": "TEM 모드",
    "en": "transverse electromagnetic mode",
    "abbr": "",
    "def": "전기장과 자기장이 모두 진행 방향에 수직인 모드(\\(E_z = H_z = 0\\)). \\(k_c = 0\\)이라 차단이 없고 분산이 없으며, 도체가 둘 이상 있어야 존재한다.",
    "chapters": [
     "waveguides#guided"
    ]
   },
   {
    "ko": "TEM파",
    "en": "transverse electromagnetic wave",
    "abbr": "",
    "def": "전기장과 자기장이 모두 진행 방향에 수직인 전자기파. 균일 평면파와 동축선·평행 도선의 기본 모드가 여기에 속한다.",
    "chapters": [
     "plane-waves#wave-equation"
    ]
   },
   {
    "ko": "TF/SF 원천",
    "en": "total-field/scattered-field source",
    "abbr": "",
    "def": "계산 영역을 전체장과 산란장 구역으로 나누고 그 경계에서 입사파를 더하고 빼 평면파를 넣는 FDTD 원천.",
    "chapters": [
     "computational-em#abc"
    ]
   },
   {
    "ko": "TM 모드",
    "en": "transverse magnetic mode",
    "abbr": "",
    "def": "자기장이 진행 방향에 수직(\\(H_z = 0\\))이고 전기장은 진행 방향 성분 \\(E_z\\)를 갖는 모드. E파라고도 한다.",
    "chapters": [
     "waveguides#guided"
    ]
   },
   {
    "ko": "dBm",
    "en": "decibel-milliwatt",
    "abbr": "",
    "def": "1 mW를 기준으로 한 절대 전력의 데시벨 표기. \\(P_{\\text{dBm}} = 10\\log_{10}(P/1\\ \\text{mW})\\)로, 0 dBm = 1 mW, 30 dBm = 1 W이다.",
    "chapters": [
     "formulas-data#units"
    ]
   },
   {
    "ko": "p 편광",
    "en": "p-polarization, TM",
    "abbr": "",
    "def": "전기장이 입사면 안에 놓인 편광. 자기장이 경계면에 평행해 TM 또는 평행(\\(\\parallel\\)) 편광이라고도 한다.",
    "chapters": [
     "reflection#oblique"
    ]
   },
   {
    "ko": "s 편광",
    "en": "s-polarization, TE",
    "abbr": "",
    "def": "전기장이 입사면에 수직인 편광. 전기장이 경계면에 평행해 TE 또는 수직(\\(\\perp\\)) 편광이라고도 한다.",
    "chapters": [
     "reflection#oblique"
    ]
   },
   {
    "ko": "가상 일",
    "en": "virtual work",
    "abbr": "",
    "def": "물체를 가상으로 조금 옮겼을 때 계의 에너지 변화로 힘을 구하는 방법. 전하 고정이면 \\(F = -(\\partial W/\\partial x)_Q\\), 전위 고정이면 \\(F = +(\\partial W/\\partial x)_V\\).",
    "chapters": [
     "conductors-dielectrics#energy"
    ]
   },
   {
    "ko": "가우스 면",
    "en": "Gaussian surface",
    "abbr": "",
    "def": "가우스 법칙을 적용하기 위해 고른 가상의 닫힌 곡면. 장의 크기가 일정하고 방향이 면에 수직이 되도록 대칭에 맞춰 고른다.",
    "chapters": [
     "electrostatics#gauss"
    ]
   },
   {
    "ko": "가우스 법칙",
    "en": "Gauss's law",
    "abbr": "",
    "def": "닫힌 곡면을 지나 나가는 전기 선속이 그 안의 알짜 전하와 같다는 법칙 \\(\\oint\\mathbf D\\cdot d\\mathbf S = Q_{enc}\\). 미분형은 \\(\\nabla\\cdot\\mathbf D = \\rho_v\\).",
    "chapters": [
     "electrostatics#gauss"
    ]
   },
   {
    "ko": "가우스–자이델 반복",
    "en": "Gauss–Seidel iteration",
    "abbr": "",
    "def": "미지수를 차례로 갱신하면서 방금 갱신한 값을 바로 쓰는 반복법. 라플라스 문제에서 야코비보다 약 두 배 빠르다.",
    "chapters": [
     "boundary-value#finite-difference"
    ]
   },
   {
    "ko": "가장자리 효과",
    "en": "fringing",
    "abbr": "",
    "def": "공극에서 자속이 극면 바깥으로 부풀어 퍼지는 현상. 공극 단면적을 각 변마다 공극 길이만큼 넓혀 보정하는 것이 보통이다.",
    "chapters": [
     "magnetic-materials#circuits"
    ]
   },
   {
    "ko": "감극장",
    "en": "depolarizing field",
    "abbr": "",
    "def": "분극된 물체 자신의 속박 전하가 물체 안에 만드는 장으로 분극과 반대 방향이다. 균일 분극에서 \\(-N\\mathbf P/\\varepsilon_0\\)(판 \\(N=1\\), 구 \\(N=1/3\\)).",
    "chapters": [
     "conductors-dielectrics#polarization"
    ]
   },
   {
    "ko": "감쇠 상수",
    "en": "attenuation constant",
    "abbr": "",
    "def": "전파 상수의 실수부 \\(\\alpha\\)(Np/m). 진폭이 \\(e^{-\\alpha z}\\)로, 전력이 \\(e^{-2\\alpha z}\\)로 준다.",
    "chapters": [
     "plane-waves#lossy-media"
    ]
   },
   {
    "ko": "감자 곡선",
    "en": "demagnetization curve",
    "abbr": "",
    "def": "히스테리시스 고리 중 B > 0, H < 0인 제2사분면 부분. 영구 자석의 동작 특성을 나타내며 희토류 자석은 거의 직선이다.",
    "chapters": [
     "magnetic-materials#permanent"
    ]
   },
   {
    "ko": "강성 행렬",
    "en": "stiffness matrix",
    "abbr": "",
    "def": "유한 요소 방정식 \\(\\mathbf K\\mathbf V = \\mathbf F\\)의 계수 행렬 \\(K_{ij} = \\int\\varepsilon\\nabla\\varphi_i\\cdot\\nabla\\varphi_j\\). 요소 행렬을 조립해 만든다.",
    "chapters": [
     "computational-em#fem"
    ]
   },
   {
    "ko": "강자성",
    "en": "ferromagnetism",
    "abbr": "",
    "def": "교환 상호작용으로 원자 모멘트가 저절로 나란히 서는 성질. 자화가 장에 비선형이고 이력을 보이며 유효 투자율이 매우 크다(Fe, Co, Ni, 페라이트).",
    "chapters": [
     "magnetic-materials#h-field"
    ]
   },
   {
    "ko": "개구수",
    "en": "numerical aperture",
    "abbr": "",
    "def": "\\(\\mathrm{NA} = \\sqrt{n_1^2 - n_2^2}\\)로, 공기 중에서 도파로에 받아들일 수 있는 최대 입사각의 사인. 클수록 빛을 강하게 가둔다.",
    "chapters": [
     "waveguides#dielectric"
    ]
   },
   {
    "ko": "갤러킨 방법",
    "en": "Galerkin method",
    "abbr": "",
    "def": "시험 함수를 기저 함수와 같게 고르는 가중 잔차법. 유한 요소법의 표준이며 대칭 행렬을 준다.",
    "chapters": [
     "computational-em#fem"
    ]
   },
   {
    "ko": "게이지 변환",
    "en": "gauge transformation",
    "abbr": "",
    "def": "임의의 함수 \\(\\chi\\)로 \\(\\mathbf A \\to \\mathbf A + \\nabla\\chi\\), \\(V \\to V - \\partial\\chi/\\partial t\\)로 퍼텐셜을 바꾸는 것. 관측 가능한 \\(\\mathbf E\\)와 \\(\\mathbf B\\)는 변하지 않는다.",
    "chapters": [
     "maxwell-equations#potentials"
    ]
   },
   {
    "ko": "격자 방정식",
    "en": "grating equation",
    "abbr": "",
    "def": "회절 차수의 진행 방향을 정하는 식 \\(n_{out}\\sin\\theta_m = n_{in}\\sin\\theta_{in} + m\\lambda/\\Lambda\\).",
    "chapters": [
     "computational-em#rcwa"
    ]
   },
   {
    "ko": "결합 계수",
    "en": "coupling coefficient",
    "abbr": "",
    "def": "두 코일이 자기적으로 얼마나 단단히 묶였는지 나타내는 수 \\(k = M/\\sqrt{L_1L_2}\\). 자기 에너지가 음수일 수 없으므로 \\(0 \\le k \\le 1\\)이다.",
    "chapters": [
     "induction#inductance"
    ]
   },
   {
    "ko": "결합 용량",
    "en": "coupling capacitance",
    "abbr": "",
    "def": "두 도체 사이에 직접 걸린 정전 용량 \\(C_c = -C_{ij}\\). 이웃 배선 사이의 누화와 지연 변동을 만든다.",
    "chapters": [
     "boundary-value#extraction"
    ]
   },
   {
    "ko": "경계 요소법",
    "en": "boundary element method, BEM",
    "abbr": "",
    "def": "영역의 경계(표면)만 요소로 나눠 경계 적분 방정식을 푸는 방법. 미지수는 적지만 행렬이 꽉 찬다.",
    "chapters": [
     "computational-em#mom"
    ]
   },
   {
    "ko": "경계 조건",
    "en": "boundary conditions",
    "abbr": "",
    "def": "두 물질의 경계에서 장이 이어지는 규칙. 전기장의 접선 성분은 연속이고, 전기 변위의 법선 성분은 자유 면전하만큼 끊긴다: \\(D_{1n} - D_{2n} = \\sigma_f\\).",
    "chapters": [
     "conductors-dielectrics#boundary"
    ]
   },
   {
    "ko": "경로 손실 지수",
    "en": "path loss exponent",
    "abbr": "",
    "def": "실내·도심 전파에서 경로 손실이 거리의 \\(n\\)제곱에 비례한다고 볼 때의 지수 \\(n\\). 자유 공간 2, 장애물이 많은 실내 3–4 정도다.",
    "chapters": [
     "radiation#friis"
    ]
   },
   {
    "ko": "경자성체",
    "en": "hard magnetic material",
    "abbr": "",
    "def": "보자력이 커서 자화를 잘 잃지 않는 자성체(NdFeB, SmCo, 페라이트 자석). 영구 자석에 쓴다.",
    "chapters": [
     "magnetic-materials#hysteresis"
    ]
   },
   {
    "ko": "고속 다중극 방법",
    "en": "fast multipole method, FMM",
    "abbr": "",
    "def": "먼 원천들의 영향을 다중극 전개로 묶어 계산해 행렬–벡터 곱을 \\(O(N)\\) 가까이로 줄이는 알고리즘.",
    "chapters": [
     "computational-em#mom"
    ]
   },
   {
    "ko": "고유 임피던스",
    "en": "intrinsic impedance",
    "abbr": "",
    "def": "매질 속 진행파 하나의 전기장과 자기장 세기의 비 \\(\\eta = \\sqrt{\\mu/\\varepsilon}\\). 진공에서 약 376.7 Ω이며 손실 매질에서는 복소수 \\(\\sqrt{\\mu/\\varepsilon_c}\\)다.",
    "chapters": [
     "plane-waves#wave-equation"
    ]
   },
   {
    "ko": "고유 함수",
    "en": "eigenfunction",
    "abbr": "",
    "def": "경계 조건을 만족하는 미분 방정식의 해 가운데 특정 상수(고유값)에서만 존재하는 함수. 예: 양끝이 0인 \\(\\sin(n\\pi x/a)\\).",
    "chapters": [
     "boundary-value#cartesian"
    ]
   },
   {
    "ko": "공동 공진기",
    "en": "cavity resonator",
    "abbr": "",
    "def": "도체 벽으로 둘러싸인 빈 상자로, 세 방향의 반파장 정수배 조건을 만족하는 이산적인 공진 주파수 \\(f_{mnp}\\)에서만 전자기 에너지를 담는다. 양 끝이 단락된 도파관 토막이다.",
    "chapters": [
     "waveguides#cavity"
    ]
   },
   {
    "ko": "공통 모드 복사",
    "en": "common-mode radiation",
    "abbr": "",
    "def": "케이블의 모든 도선에 같은 방향으로 흐르는 전류가 케이블을 모노폴처럼 만들어 내는 복사. \\(\\approx 6.28\\times10^{-7}fLI_{cm}/r\\)로 µA 전류로도 규격을 넘을 수 있다.",
    "chapters": [
     "radiation#emi"
    ]
   },
   {
    "ko": "광학 어드미턴스",
    "en": "optical admittance",
    "abbr": "",
    "def": "층의 접선 자기장과 접선 전기장의 비를 자유 공간 어드미턴스 단위로 나타낸 값. s 편광 \\(y = N\\cos\\theta\\), p 편광 \\(y = N/\\cos\\theta\\).",
    "chapters": [
     "reflection#tmm"
    ]
   },
   {
    "ko": "구성 관계",
    "en": "constitutive relations",
    "abbr": "",
    "def": "물질의 성질을 담아 장들을 잇는 관계식. 선형 등방 매질에서 \\(\\mathbf D = \\varepsilon\\mathbf E\\), \\(\\mathbf B = \\mu\\mathbf H\\), \\(\\mathbf J = \\sigma\\mathbf E\\).",
    "chapters": [
     "maxwell-equations#displacement"
    ]
   },
   {
    "ko": "군속도",
    "en": "group velocity",
    "abbr": "",
    "def": "좁은 진동수 띠의 파속(신호 포락선)이 움직이는 속력 \\(u_g = d\\omega/d\\beta\\). 손실이 작은 매질에서 에너지와 정보가 이 속력으로 전달된다.",
    "chapters": [
     "plane-waves#group-velocity"
    ]
   },
   {
    "ko": "군지연",
    "en": "group delay",
    "abbr": "",
    "def": "신호(포락선)가 길이 \\(L\\)의 선로를 지나는 데 걸리는 시간 \\(\\tau_g = L/v_g = L\\,d\\beta/d\\omega\\). 도파관에서는 주파수에 따라 달라 펄스가 퍼진다.",
    "chapters": [
     "waveguides#dispersion"
    ]
   },
   {
    "ko": "굴절률",
    "en": "refractive index",
    "abbr": "",
    "def": "진공 속 빛의 속력과 매질 속 위상 속도의 비 \\(n = c/u_p = \\sqrt{\\mu_r\\varepsilon_r}\\). 비자성 유전체에서 \\(\\eta = \\eta_0/n\\)이다.",
    "chapters": [
     "plane-waves#wave-equation"
    ]
   },
   {
    "ko": "균일 평면파",
    "en": "uniform plane wave",
    "abbr": "",
    "def": "진행 방향에 수직인 평면(파면) 위에서 장의 크기와 위상이 어디서나 같은 평면파. 전기장과 자기장이 모두 진행 방향에 수직인 TEM파다.",
    "chapters": [
     "plane-waves#wave-equation"
    ]
   },
   {
    "ko": "그레이팅 로브",
    "en": "grating lobe",
    "abbr": "",
    "def": "소자 간격이 너무 넓을 때 \\(u = \\pm2\\pi\\)인 방향에 생기는, 주엽과 같은 크기의 원치 않는 엽. \\(d/\\lambda < 1/(1+|\\sin\\theta_0|)\\)이면 생기지 않는다.",
    "chapters": [
     "radiation#arrays"
    ]
   },
   {
    "ko": "그린 함수",
    "en": "Green's function",
    "abbr": "",
    "def": "점(선) 원천 하나가 만드는 장. 정전기에서 2차원은 \\(-\\ln r/(2\\pi\\varepsilon)\\), 3차원은 \\(1/(4\\pi\\varepsilon r)\\)이다.",
    "chapters": [
     "computational-em#mom"
    ]
   },
   {
    "ko": "근거리장",
    "en": "near field",
    "abbr": "",
    "def": "안테나 곁 \\(kr \\ll 1\\)(\\(r \\ll \\lambda/2\\pi\\)) 영역의 장. 정전·정자기 장처럼 \\(1/r^3\\), \\(1/r^2\\)로 줄고 에너지를 저장했다 되돌려 주며, 파동 임피던스가 \\(\\eta_0\\)과 다르다.",
    "chapters": [
     "radiation#hertzian"
    ]
   },
   {
    "ko": "근단 누화",
    "en": "near-end crosstalk, NEXT",
    "abbr": "",
    "def": "피해선에서 공격 신호의 원천 쪽 끝에 나타나는 누화. 높이 \\(K_b V\\), \\(K_b = (C_m/C + L_m/L)/4\\)에서 포화하고 폭은 \\(2t_d\\)이다.",
    "chapters": [
     "signal-integrity#crosstalk"
    ]
   },
   {
    "ko": "기모드",
    "en": "odd mode",
    "abbr": "",
    "def": "결합된 두 선이 크기는 같고 부호가 반대인 전압으로 움직이는 정규 모드. 특성 임피던스 \\(Z_{\\text{odd}}\\)는 \\(Z_0\\)보다 작으며 차동 신호가 이 모드로 간다.",
    "chapters": [
     "signal-integrity#crosstalk"
    ]
   },
   {
    "ko": "기본 모드",
    "en": "dominant mode",
    "abbr": "",
    "def": "도파관에서 차단 주파수가 가장 낮은 모드. 사각 도파관(\\(a > b\\))에서는 \\(\\mathrm{TE}_{10}\\)으로, 차단 주파수는 \\(c/2a\\)이다.",
    "chapters": [
     "waveguides#rectangular"
    ]
   },
   {
    "ko": "기생 정전 용량",
    "en": "parasitic capacitance",
    "abbr": "",
    "def": "설계 의도와 상관없이 배선·소자 사이에 생기는 원하지 않는 정전 용량. 회로의 지연·전력·누화를 늘린다.",
    "chapters": [
     "boundary-value#extraction"
    ]
   },
   {
    "ko": "기울기",
    "en": "gradient",
    "abbr": "",
    "def": "스칼라장이 가장 빨리 늘어나는 방향을 가리키고 그 최대 변화율을 크기로 갖는 벡터 \\(\\nabla f\\). 등위면에 수직이며 \\(df = \\nabla f\\cdot d\\mathbf l\\)이다.",
    "chapters": [
     "vector-analysis#gradient"
    ]
   },
   {
    "ko": "기자력",
    "en": "magnetomotive force",
    "abbr": "",
    "def": "자기 회로에서 자속을 미는 원천 \\(\\mathcal F = NI\\)(A 또는 A·turn). 전기 회로의 기전력에 대응한다.",
    "chapters": [
     "magnetic-materials#circuits"
    ]
   },
   {
    "ko": "기저 함수",
    "en": "basis function",
    "abbr": "",
    "def": "근사해를 \\(\\sum_j V_j\\varphi_j\\)처럼 전개할 때 쓰는 함수들. 미지수는 그 계수다.",
    "chapters": [
     "computational-em#fem"
    ]
   },
   {
    "ko": "깁스 현상",
    "en": "Gibbs phenomenon",
    "abbr": "",
    "def": "불연속이 있는 함수를 푸리에 급수의 부분합으로 나타낼 때 불연속 옆에서 점프의 약 9%만큼 넘치는 현상. 항을 늘려도 높이는 줄지 않는다.",
    "chapters": [
     "boundary-value#cartesian"
    ]
   },
   {
    "ko": "나이퀴스트 주파수",
    "en": "Nyquist frequency",
    "abbr": "",
    "def": "NRZ 신호에서 비트율의 절반인 주파수 \\(f_N = (\\text{비트율})/2\\). 0과 1이 번갈아 나오는 패턴의 기본 주파수이며 채널 손실을 이 주파수에서 잰다.",
    "chapters": [
     "signal-integrity#lossy"
    ]
   },
   {
    "ko": "내부 인덕턴스",
    "en": "internal inductance",
    "abbr": "",
    "def": "도체 내부의 자기장이 만드는 인덕턴스 몫. 균일한 전류가 흐르는 원형 도선이면 단위 길이당 \\(\\mu_0/8\\pi = 0.05\\ \\mu\\)H/m이고, 표피 효과가 큰 고주파에서는 사라진다.",
    "chapters": [
     "magnetostatics#inductance"
    ]
   },
   {
    "ko": "네퍼",
    "en": "neper",
    "abbr": "",
    "def": "진폭비의 자연로그로 잰 감쇠 단위. 진폭이 \\(1/e\\)이 되는 감쇠가 1 Np이고 1 Np = 8.686 dB이다.",
    "chapters": [
     "plane-waves#lossy-media"
    ]
   },
   {
    "ko": "노이만 경계 조건",
    "en": "Neumann boundary condition",
    "abbr": "",
    "def": "경계에서 미지 함수의 법선 미분 \\(\\partial V/\\partial n\\)(장의 법선 성분)을 지정하는 경계 조건. \\(\\partial V/\\partial n = 0\\)은 대칭면이나 장이 새지 않는 경계를 뜻한다.",
    "chapters": [
     "boundary-value#poisson-laplace"
    ]
   },
   {
    "ko": "노이만 공식",
    "en": "Neumann formula",
    "abbr": "",
    "def": "두 닫힌 회로의 상호 인덕턴스를 선소끼리의 이중 선적분 \\(M = \\frac{\\mu_0}{4\\pi}\\oint\\oint \\frac{d\\mathbf l_1\\cdot d\\mathbf l_2}{R}\\)로 주는 식. 대칭이므로 \\(M_{12} = M_{21}\\)이다.",
    "chapters": [
     "induction#inductance"
    ]
   },
   {
    "ko": "누설 인덕턴스",
    "en": "leakage inductance",
    "abbr": "",
    "def": "결합 코일에서 다른 코일과 쇄교하지 않는 선속에 해당하는 인덕턴스. 1차 쪽으로 환산하면 \\((1-k^2)L_1\\)이 직렬로 들어간다.",
    "chapters": [
     "induction#transformer"
    ]
   },
   {
    "ko": "누화",
    "en": "crosstalk",
    "abbr": "",
    "def": "나란한 선 사이의 상호 커패시턴스와 상호 인덕턴스를 통해 한 선(공격선)의 신호 변화가 다른 선(피해선)에 잡음으로 넘어오는 현상.",
    "chapters": [
     "signal-integrity#crosstalk"
    ]
   },
   {
    "ko": "다중 격자법",
    "en": "multigrid method",
    "abbr": "",
    "def": "거친 격자에서 긴 파장의 오차를, 고운 격자에서 짧은 파장의 오차를 지우며 오가는 반복법. 미지수 수에 비례하는 계산으로 수렴한다.",
    "chapters": [
     "computational-em#fdm"
    ]
   },
   {
    "ko": "다중극 전개",
    "en": "multipole expansion",
    "abbr": "",
    "def": "국소화된 전하 분포의 먼 곳 전위를 \\(1/r\\)의 거듭제곱으로 전개한 것: 홀극 \\(Q/r\\), 쌍극자 \\(\\mathbf p\\cdot\\hat{\\mathbf r}/r^2\\), 사중극자 \\(\\propto1/r^3\\) 항이 차례로 나온다.",
    "chapters": [
     "electrostatics#dipole"
    ]
   },
   {
    "ko": "단일 스터브 정합",
    "en": "single-stub matching",
    "abbr": "",
    "def": "부하에서 거리 \\(d\\)인 곳(어드미턴스 실수부가 \\(1/Z_0\\)인 곳)에 병렬 스터브 하나를 달아 허수부를 지우는 정합 방법.",
    "chapters": [
     "transmission-lines#matching"
    ]
   },
   {
    "ko": "델 연산자",
    "en": "del (nabla) operator",
    "abbr": "",
    "def": "벡터 미분 연산자 \\(\\nabla = \\hat{\\mathbf x}\\,\\partial_x + \\hat{\\mathbf y}\\,\\partial_y + \\hat{\\mathbf z}\\,\\partial_z\\). 스칼라에 곱하면 기울기, 벡터와 내적하면 발산, 외적하면 회전이 된다.",
    "chapters": [
     "vector-analysis#gradient"
    ]
   },
   {
    "ko": "도약 개구리 방식",
    "en": "leapfrog scheme",
    "abbr": "",
    "def": "두 장을 반 걸음씩 엇갈린 시각에 두고 서로를 번갈아 갱신하는 시간 적분. 2차 정확도이고 행렬을 풀지 않는다.",
    "chapters": [
     "computational-em#fdtd"
    ]
   },
   {
    "ko": "도파 파장",
    "en": "guide wavelength",
    "abbr": "",
    "def": "도파관 속에서 같은 위상이 되풀이되는 진행 방향 거리 \\(\\lambda_g = 2\\pi/\\beta = \\lambda/\\sqrt{1 - (f_c/f)^2}\\). 매질 속 파장보다 늘 길다.",
    "chapters": [
     "waveguides#dispersion"
    ]
   },
   {
    "ko": "드루드 모형",
    "en": "Drude model",
    "abbr": "",
    "def": "자유 전자가 전기장에 밀리고 충돌 진동수 \\(\\nu\\)로 운동량을 잃는다고 보는 모형. 유전율 \\(\\varepsilon_r = 1 - \\omega_p^2/\\omega(\\omega - j\\nu)\\)을 준다.",
    "chapters": [
     "plane-waves#plasma"
    ]
   },
   {
    "ko": "등가 등방 복사 전력",
    "en": "equivalent isotropically radiated power (EIRP)",
    "abbr": "",
    "def": "송신 전력과 송신 안테나 이득의 곱 \\(P_tG_t\\). 주엽 방향 세기를 같은 세기를 내는 등방 복사체의 전력으로 나타낸 것으로, 전파 규제의 기준이 된다.",
    "chapters": [
     "radiation#friis"
    ]
   },
   {
    "ko": "등가 산화막 두께",
    "en": "equivalent oxide thickness, EOT",
    "abbr": "",
    "def": "유전막(적층막)과 같은 단위 면적 정전 용량을 주는 SiO₂의 두께 \\(\\text{EOT} = \\sum t_i\\cdot3.9/\\varepsilon_{r,i}\\). high-k 게이트·메모리 커패시터의 용량을 나타낸다.",
    "chapters": [
     "conductors-dielectrics#capacitance"
    ]
   },
   {
    "ko": "등전위면",
    "en": "equipotential surface",
    "abbr": "",
    "def": "전위가 같은 점들로 이루어진 면. 전기력선은 등전위면에 수직이고, 면 위에서 전하를 옮기는 데는 일이 들지 않는다.",
    "chapters": [
     "electrostatics#potential"
    ]
   },
   {
    "ko": "디랙 델타 함수",
    "en": "Dirac delta function",
    "abbr": "",
    "def": "한 점 밖에서는 0이고 적분하면 1인 극한 대상으로, 적분 안에서 \\(\\int f(x)\\delta(x-a)\\,dx = f(a)\\)처럼 한 점의 값을 골라낸다. 점전하 밀도 \\(q\\,\\delta^3(\\mathbf r)\\)를 쓸 때 필요하다.",
    "chapters": [
     "vector-analysis#laplacian-delta"
    ]
   },
   {
    "ko": "디리클레 경계 조건",
    "en": "Dirichlet boundary condition",
    "abbr": "",
    "def": "경계에서 미지 함수의 값 자체(정전기에서는 전위 \\(V\\))를 지정하는 경계 조건. 전극과 접지면이 대표적이다.",
    "chapters": [
     "boundary-value#poisson-laplace"
    ]
   },
   {
    "ko": "디엠퍼시스",
    "en": "de-emphasis",
    "abbr": "",
    "def": "송신단에서 같은 비트가 이어질 때 진폭을 낮추고 비트가 바뀔 때만 크게 보내 고주파 성분을 미리 키우는 등화. 2탭 FIR \\(y_n = (1-a)x_n - ax_{n-1}\\)로 구현한다.",
    "chapters": [
     "signal-integrity#lossy"
    ]
   },
   {
    "ko": "디커플링 커패시터",
    "en": "decoupling capacitor",
    "abbr": "",
    "def": "전원과 접지 사이에 달아 순간 전류를 가까이서 공급하고 전원 임피던스를 낮추는 커패시터. ESR·ESL 때문에 자기 공진 주파수 근처에서만 효과가 크다.",
    "chapters": [
     "signal-integrity#pdn"
    ]
   },
   {
    "ko": "라플라스 방정식",
    "en": "Laplace's equation",
    "abbr": "",
    "def": "전하가 없는 영역의 정전 퍼텐셜이 만족하는 방정식 \\(\\nabla^2V = 0\\). 해를 조화 함수라 한다.",
    "chapters": [
     "boundary-value#poisson-laplace"
    ]
   },
   {
    "ko": "라플라시안",
    "en": "Laplacian",
    "abbr": "",
    "def": "기울기의 발산 \\(\\nabla^2 f = \\nabla\\cdot\\nabla f\\). 한 점 둘레의 평균값과 중심값의 차이에 비례하며, 푸아송·라플라스 방정식에 나온다.",
    "chapters": [
     "vector-analysis#laplacian-delta"
    ]
   },
   {
    "ko": "락스 동치 정리",
    "en": "Lax equivalence theorem",
    "abbr": "",
    "def": "잘 정의된 선형 문제에서 차분 방법이 일관적이면, 수렴하는 것과 안정한 것이 같다는 정리. '일관성 + 안정성 = 수렴'.",
    "chapters": [
     "computational-em#fdm"
    ]
   },
   {
    "ko": "레이스트랙",
    "en": "racetrack",
    "abbr": "",
    "def": "마그네트론에서 자기장이 타깃 표면과 나란한 곳을 따라 전자가 E×B로 도는 닫힌 고리 영역. 그 아래가 가장 깊게 침식된다.",
    "chapters": [
     "magnetic-materials#permanent"
    ]
   },
   {
    "ko": "렌츠 법칙",
    "en": "Lenz's law",
    "abbr": "",
    "def": "유도 전류는 자기 선속의 변화를 방해하는 방향으로 흐른다는 법칙. 패러데이 법칙의 음의 부호가 나타내며 에너지 보존과 맞물린다.",
    "chapters": [
     "induction#faraday"
    ]
   },
   {
    "ko": "로런츠 힘",
    "en": "Lorentz force",
    "abbr": "",
    "def": "전기장과 자기장 속에서 움직이는 전하가 받는 힘 \\(\\mathbf F = q(\\mathbf E + \\mathbf v\\times\\mathbf B)\\). 자기력 부분은 속도에 수직이라 일을 하지 않는다.",
    "chapters": [
     "magnetostatics#lorentz"
    ]
   },
   {
    "ko": "로렌츠 게이지",
    "en": "Lorenz gauge",
    "abbr": "",
    "def": "\\(\\nabla\\cdot\\mathbf A + \\mu\\varepsilon\\,\\partial V/\\partial t = 0\\)으로 퍼텐셜을 고르는 조건. \\(V\\)와 \\(\\mathbf A\\)가 같은 꼴의 파동 방정식을 따르게 된다(루드비 로렌츠).",
    "chapters": [
     "maxwell-equations#potentials"
    ]
   },
   {
    "ko": "르장드르 급수",
    "en": "Legendre series",
    "abbr": "",
    "def": "함수를 르장드르 다항식의 합 \\(\\sum A_lP_l(\\cos\\theta)\\)으로 펼친 급수. 구 표면 전위 문제와 다중극 전개에 쓴다.",
    "chapters": [
     "boundary-value#curvilinear"
    ]
   },
   {
    "ko": "르장드르 다항식",
    "en": "Legendre polynomial",
    "abbr": "",
    "def": "르장드르 방정식의 두 극에서 유한한 해 \\(P_l(x)\\). \\(P_0 = 1\\), \\(P_1 = x\\), \\(P_2 = (3x^2-1)/2\\), … 이며 \\([-1, 1]\\)에서 서로 직교한다.",
    "chapters": [
     "boundary-value#curvilinear"
    ]
   },
   {
    "ko": "르장드르 방정식",
    "en": "Legendre equation",
    "abbr": "",
    "def": "축 대칭 구 좌표 라플라스 방정식의 각 부분 \\((1-x^2)\\Theta'' - 2x\\Theta' + l(l+1)\\Theta = 0\\) (\\(x = \\cos\\theta\\)).",
    "chapters": [
     "boundary-value#curvilinear"
    ]
   },
   {
    "ko": "리처드슨 외삽",
    "en": "Richardson extrapolation",
    "abbr": "",
    "def": "두 격자의 결과로 오차의 첫 항 \\(Kh^p\\)를 지워 극한값을 어림하는 방법. \\(u^* \\approx u_{h/2} + (u_{h/2} - u_h)/(2^p - 1)\\).",
    "chapters": [
     "computational-em#fdm"
    ]
   },
   {
    "ko": "리피터",
    "en": "repeater",
    "abbr": "",
    "def": "긴 배선을 토막으로 나누고 토막마다 넣는 버퍼(인버터). 배선 RC 지연의 길이 제곱 의존성을 길이에 비례하는 지연으로 바꾼다.",
    "chapters": [
     "signal-integrity#elmore"
    ]
   },
   {
    "ko": "릴럭턴스",
    "en": "reluctance",
    "abbr": "",
    "def": "자기 회로 한 구간이 자속을 방해하는 정도 \\(\\mathcal R = l/\\mu A\\)(A/Wb). 전기 저항에 대응하며 \\(NI = \\Phi\\sum\\mathcal R\\)이다.",
    "chapters": [
     "magnetic-materials#circuits"
    ]
   },
   {
    "ko": "링잉",
    "en": "ringing",
    "abbr": "",
    "def": "원천과 부하의 반사 계수 곱 \\(\\Gamma_S\\Gamma_L\\)이 음수일 때 끝 전압이 최종값 위아래로 번갈아 넘치며 수렴하는 현상.",
    "chapters": [
     "signal-integrity#bounce"
    ]
   },
   {
    "ko": "링크 마진",
    "en": "link margin",
    "abbr": "",
    "def": "수신 전력과 수신 감도의 차(dB). 페이딩과 예측 오차를 견디도록 보통 10–20 dB를 남긴다.",
    "chapters": [
     "radiation#friis"
    ]
   },
   {
    "ko": "마그네트론 스퍼터링",
    "en": "magnetron sputtering",
    "abbr": "",
    "def": "타깃 뒤 영구 자석의 아치형 자기장으로 전자를 표면 근처에 가둬, 낮은 압력과 전압에서 짙은 플라스마로 타깃을 스퍼터링하는 PVD 방법.",
    "chapters": [
     "magnetic-materials#permanent"
    ]
   },
   {
    "ko": "면저항",
    "en": "sheet resistance",
    "abbr": "",
    "def": "두께가 일정한 막의 저항을 정사각형 한 칸 단위로 나타낸 값 \\(R_s = \\rho/t\\)(Ω/□). 배선 저항은 \\(R = R_s L/W\\)로 정사각형 수를 세어 구한다.",
    "chapters": [
     "steady-currents#resistance"
    ]
   },
   {
    "ko": "모노폴",
    "en": "monopole",
    "abbr": "",
    "def": "도체 접지면 위에 세운 도선 안테나. 영상법으로 길이 두 배 다이폴의 위 절반과 같아 복사 저항은 절반, 지향성은 두 배다(λ/4 모노폴 36.5 Ω, 5.16 dBi).",
    "chapters": [
     "radiation#dipole"
    ]
   },
   {
    "ko": "모드",
    "en": "mode",
    "abbr": "",
    "def": "주어진 도파 구조의 경계 조건을 만족하며 모양을 유지한 채 진행하는 장의 단면 분포 하나. 모드마다 고유한 차단 주파수와 전파 상수를 가진다.",
    "chapters": [
     "waveguides#guided"
    ]
   },
   {
    "ko": "모멘트 법",
    "en": "method of moments, MoM",
    "abbr": "",
    "def": "해를 기저 함수로 전개하고 방정식의 잔차를 시험 함수들에 대해 0으로 만드는 방법. 전자기에서는 주로 표면 적분 방정식을 푼다.",
    "chapters": [
     "computational-em#mom"
    ]
   },
   {
    "ko": "모서리 요소",
    "en": "edge element, Nédélec element",
    "abbr": "",
    "def": "미지수를 요소의 모서리에 두고 접선 성분만 연속하게 하는 벡터 유한 요소. 맥스웰 방정식의 가짜 모드를 없앤다.",
    "chapters": [
     "computational-em#fem"
    ]
   },
   {
    "ko": "모자 함수",
    "en": "hat function",
    "abbr": "",
    "def": "한 노드에서 1이고 다른 노드에서 0인 조각별 1차 함수. 이웃 두 요소에서만 0이 아니다.",
    "chapters": [
     "computational-em#fem"
    ]
   },
   {
    "ko": "목표 임피던스",
    "en": "target impedance",
    "abbr": "",
    "def": "전원망이 지켜야 할 임피던스 상한 \\(Z_t = V_{dd}\\times(\\text{허용 리플})/\\Delta I\\). DC부터 칩 전류 변화가 미치는 가장 높은 주파수까지 \\(|Z| \\le Z_t\\)여야 한다.",
    "chapters": [
     "signal-integrity#pdn"
    ]
   },
   {
    "ko": "무르 흡수 경계",
    "en": "Mur absorbing boundary",
    "abbr": "",
    "def": "경계에서 한 방향 파동 방정식을 차분한 흡수 경계. 1차는 반사가 \\((\\cos\\theta - 1)/(\\cos\\theta + 1)\\)이다.",
    "chapters": [
     "computational-em#abc"
    ]
   },
   {
    "ko": "무왜곡 선로",
    "en": "distortionless line",
    "abbr": "",
    "def": "\\(R/L = G/C\\)를 만족해 감쇠 상수와 위상 속도가 주파수와 무관한 손실 선. 펄스 모양이 유지된다.",
    "chapters": [
     "transmission-lines#distributed"
    ]
   },
   {
    "ko": "바닥 반사 방지막",
    "en": "bottom anti-reflective coating, BARC",
    "abbr": "",
    "def": "레지스트 아래에 까는 흡수성 반사 방지막(BARC). 흡수와 간섭으로 기판 반사를 줄여 레지스트 속 정재파와 스윙을 억제한다.",
    "chapters": [
     "reflection#barc"
    ]
   },
   {
    "ko": "바운스 도표",
    "en": "bounce diagram, lattice diagram",
    "abbr": "",
    "def": "계단파가 전송선 양 끝에서 반사되며 오가는 과정을 위치–시간 평면의 지그재그 선으로 그린 그림. 각 대각선에 진행파의 크기를 적고 끝에 도착한 파동을 더해 끝 전압을 구한다.",
    "chapters": [
     "signal-integrity#bounce"
    ]
   },
   {
    "ko": "반공진",
    "en": "anti-resonance",
    "abbr": "",
    "def": "인덕턴스와 커패시턴스가 병렬로 놓여 \\(f_0 = 1/(2\\pi\\sqrt{LC})\\)에서 임피던스가 치솟는 현상. 전원망에서는 패키지 인덕턴스와 온다이 커패시턴스 사이에서 생긴다.",
    "chapters": [
     "signal-integrity#pdn"
    ]
   },
   {
    "ko": "반사 계수",
    "en": "reflection coefficient",
    "abbr": "",
    "def": "경계면에서 반사파 전기장과 입사파 전기장의 비. 수직 입사에서 \\(\\Gamma = (\\eta_2-\\eta_1)/(\\eta_2+\\eta_1)\\), 비자성 매질이면 \\((n_1-n_2)/(n_1+n_2)\\).",
    "chapters": [
     "reflection#normal"
    ]
   },
   {
    "ko": "반사 방지막",
    "en": "anti-reflection coating, ARC",
    "abbr": "",
    "def": "경계면 반사를 간섭으로 상쇄하도록 설계한 박막. 단일 1/4 파장 막은 \\(n_1 = \\sqrt{n_0n_s}\\), \\(d = \\lambda_0/4n_1\\)에서 반사가 0이다.",
    "chapters": [
     "reflection#thinfilm"
    ]
   },
   {
    "ko": "반사 손실",
    "en": "return loss",
    "abbr": "",
    "def": "반사파가 입사파보다 몇 dB 작은지를 나타낸 값 \\(-20\\log_{10}|\\Gamma|\\). 클수록 정합이 좋다.",
    "chapters": [
     "transmission-lines#reflection"
    ]
   },
   {
    "ko": "반사 임피던스",
    "en": "reflected impedance",
    "abbr": "",
    "def": "결합 코일에서 2차 회로가 1차 쪽에 나타나는 임피던스 \\(\\omega^2M^2/(Z_L + j\\omega L_2)\\). 2차의 저항은 저항으로, 유도성 리액턴스는 용량성으로 비친다.",
    "chapters": [
     "induction#transformer"
    ]
   },
   {
    "ko": "반사율",
    "en": "reflectance",
    "abbr": "",
    "def": "입사 전력 가운데 반사되는 비율 \\(R = |\\Gamma|^2\\) (또는 \\(|r_{s,p}|^2\\)).",
    "chapters": [
     "reflection#normal"
    ]
   },
   {
    "ko": "반사파",
    "en": "reflected wave",
    "abbr": "",
    "def": "두 매질의 경계면에서 입사한 쪽 매질로 되돌아가는 파동. 수직 입사에서 진폭은 입사파의 \\(\\Gamma\\)배다.",
    "chapters": [
     "reflection#normal"
    ]
   },
   {
    "ko": "반자기 계수",
    "en": "demagnetizing factor",
    "abbr": "",
    "def": "반자기장과 자화의 비 \\(N_d\\)(0–1). 물체 모양으로 정해지며 구는 1/3, 자화 방향으로 긴 막대는 0, 얇은 판의 수직 방향은 1에 가깝다.",
    "chapters": [
     "magnetic-materials#h-field"
    ]
   },
   {
    "ko": "반자기장",
    "en": "demagnetizing field",
    "abbr": "",
    "def": "자화된 물체의 극에 생기는 자하가 물체 안에 만드는, 자화와 반대 방향의 H. \\(\\mathbf H_{in} = -N_d\\mathbf M\\)로 쓴다.",
    "chapters": [
     "magnetic-materials#h-field"
    ]
   },
   {
    "ko": "반자성",
    "en": "diamagnetism",
    "abbr": "",
    "def": "외부 장과 반대 방향으로 약하게 자화되는 성질(\\(\\chi_m \\sim -10^{-5}\\)). 전자 궤도가 장의 변화에 렌츠 법칙처럼 반응해 생기며 모든 물질에 있다.",
    "chapters": [
     "magnetic-materials#h-field"
    ]
   },
   {
    "ko": "반전력 빔폭",
    "en": "half-power beamwidth (HPBW)",
    "abbr": "",
    "def": "주엽에서 복사 세기가 최댓값의 절반(−3 dB)이 되는 두 방향 사이의 각. 헤르츠 쌍극자 90°, 반파장 다이폴 78°이다.",
    "chapters": [
     "radiation#power"
    ]
   },
   {
    "ko": "반파장 다이폴",
    "en": "half-wave dipole",
    "abbr": "",
    "def": "길이가 반파장인 중심 급전 선형 안테나. 입력 임피던스 약 73 + j42.5 Ω, 지향성 1.64(2.15 dBi)이다.",
    "chapters": [
     "radiation#dipole"
    ]
   },
   {
    "ko": "발산",
    "en": "divergence",
    "abbr": "",
    "def": "벡터장이 한 점에서 얼마나 퍼져 나가는지를 단위 부피당 알짜 바깥 선속으로 잰 스칼라. \\(\\nabla\\cdot\\mathbf F\\)로 쓴다.",
    "chapters": [
     "vector-analysis#divergence"
    ]
   },
   {
    "ko": "발산 정리",
    "en": "divergence theorem",
    "abbr": "",
    "def": "닫힌 면을 뚫고 나가는 선속은 그 속 부피에서 발산을 적분한 것과 같다: \\(\\oint_S\\mathbf F\\cdot d\\mathbf S = \\int_V\\nabla\\cdot\\mathbf F\\,dv\\). 가우스 정리라고도 한다.",
    "chapters": [
     "vector-analysis#divergence"
    ]
   },
   {
    "ko": "방향 도함수",
    "en": "directional derivative",
    "abbr": "",
    "def": "단위 벡터 \\(\\hat{\\mathbf u}\\) 방향으로 움직일 때 스칼라장의 거리당 변화율 \\(df/ds = \\nabla f\\cdot\\hat{\\mathbf u}\\).",
    "chapters": [
     "vector-analysis#gradient"
    ]
   },
   {
    "ko": "배열 인자",
    "en": "array factor",
    "abbr": "",
    "def": "소자의 위치와 급전 위상만으로 정해지는 배열의 방향 인자. 균일 선형 배열은 \\(|AF|/N = |\\sin(Nu/2)/N\\sin(u/2)|\\), \\(u = kd\\cos\\psi + \\beta\\)이다.",
    "chapters": [
     "radiation#arrays"
    ]
   },
   {
    "ko": "벡터장",
    "en": "vector field",
    "abbr": "",
    "def": "공간의 각 점에 벡터 하나를 대응시키는 함수. 전기장 \\(\\mathbf E\\), 전류 밀도 \\(\\mathbf J\\), 흐름 속도처럼 크기와 방향이 있는 양의 분포다.",
    "chapters": [
     "vector-analysis#coordinates"
    ]
   },
   {
    "ko": "변분 원리",
    "en": "variational principle",
    "abbr": "",
    "def": "방정식의 해가 어떤 범함수(정전 에너지 등)를 최소로 만드는 함수라는 원리. FEM의 정전 용량이 참값 이상이 되는 근거다.",
    "chapters": [
     "computational-em#fem"
    ]
   },
   {
    "ko": "변수 분리법",
    "en": "separation of variables",
    "abbr": "",
    "def": "편미분 방정식의 해를 각 좌표만의 함수의 곱으로 놓아 상미분 방정식들로 나누어 푸는 방법. 경계 조건에 맞는 곱 해를 급수로 겹친다.",
    "chapters": [
     "boundary-value#cartesian"
    ]
   },
   {
    "ko": "변압기 기전력",
    "en": "transformer emf",
    "abbr": "",
    "def": "고리가 움직이지 않아도 자기장이 시간에 따라 변해서 생기는 기전력 \\(-\\int_S \\partial\\mathbf B/\\partial t\\cdot d\\mathbf S\\).",
    "chapters": [
     "induction#motional"
    ]
   },
   {
    "ko": "변위 전류",
    "en": "displacement current",
    "abbr": "",
    "def": "전기 변위의 시간 변화율 \\(\\partial\\mathbf D/\\partial t\\)로 정의되는 전류 밀도(와 그 선속). 전하의 이동 없이도 전도 전류처럼 자기장을 만든다.",
    "chapters": [
     "maxwell-equations#displacement"
    ]
   },
   {
    "ko": "병렬 종단",
    "en": "parallel termination",
    "abbr": "",
    "def": "부하 쪽에 \\(Z_0\\)와 같은 저항을 접지나 종단 전압으로 달아 부하 반사(\\(\\Gamma_L = 0\\))를 없애는 종단. 첫 파동이 곧 최종값이지만 직류 전력을 쓴다.",
    "chapters": [
     "signal-integrity#bounce"
    ]
   },
   {
    "ko": "보어 마그네톤",
    "en": "Bohr magneton",
    "abbr": "",
    "def": "전자의 궤도·스핀 자기 모멘트의 자연 단위 \\(\\mu_B = e\\hbar/2m_e = 9.274\\times10^{-24}\\) A·m².",
    "chapters": [
     "magnetostatics#dipole"
    ]
   },
   {
    "ko": "보자력",
    "en": "coercivity",
    "abbr": "",
    "def": "자화된 자성체의 B(또는 M)를 0으로 만드는 데 필요한 역방향 자기장 세기 \\(H_c\\).",
    "chapters": [
     "magnetic-materials#hysteresis"
    ]
   },
   {
    "ko": "보존장",
    "en": "conservative field",
    "abbr": "",
    "def": "두 점 사이의 선적분이 경로와 무관한 벡터장. 모든 닫힌 경로의 순환이 0이고 \\(\\nabla\\times\\mathbf F = 0\\)이며, 스칼라 퍼텐셜의 기울기로 쓸 수 있다.",
    "chapters": [
     "vector-analysis#integrals"
    ]
   },
   {
    "ko": "복사",
    "en": "radiation",
    "abbr": "",
    "def": "시간에 따라 변하는 전류(가속되는 전하)가 만든 전자기장 일부가 근원에서 떨어져 나와 에너지를 멀리 운반하는 현상. 복사장은 거리에 반비례해 줄어 구면을 지나는 전력이 일정하다.",
    "chapters": [
     "radiation"
    ]
   },
   {
    "ko": "복사 세기",
    "en": "radiation intensity",
    "abbr": "",
    "def": "단위 입체각당 복사 전력 \\(U = r^2S_{av}\\)(W/sr). 원거리에서 거리와 무관한 방향만의 함수다.",
    "chapters": [
     "radiation#power"
    ]
   },
   {
    "ko": "복사 압력",
    "en": "radiation pressure",
    "abbr": "",
    "def": "전자기파가 면에 주는 압력. 세기 \\(I\\)인 평면파가 수직으로 흡수되면 \\(I/c\\), 완전 반사되면 \\(2I/c\\)이다.",
    "chapters": [
     "maxwell-equations#poynting"
    ]
   },
   {
    "ko": "복사 저항",
    "en": "radiation resistance",
    "abbr": "",
    "def": "안테나가 복사하는 전력을 급전 전류로 나타낸 등가 저항 \\(R_r = 2P_{rad}/|I|^2\\). 반파장 다이폴은 73.1 Ω이다.",
    "chapters": [
     "radiation#power"
    ]
   },
   {
    "ko": "복사 패턴",
    "en": "radiation pattern",
    "abbr": "",
    "def": "복사 세기(또는 장의 크기)를 방향의 함수로 나타낸 그림. 주엽, 부엽, 영점, 빔폭으로 특징짓는다.",
    "chapters": [
     "radiation#power"
    ]
   },
   {
    "ko": "복사 효율",
    "en": "radiation efficiency",
    "abbr": "",
    "def": "안테나에 들어간 전력 가운데 복사되는 비율 \\(e_r = R_r/(R_r + R_L)\\). 짧은 안테나일수록 낮다.",
    "chapters": [
     "radiation#power"
    ]
   },
   {
    "ko": "복소 유전율",
    "en": "complex permittivity",
    "abbr": "",
    "def": "전도 전류와 변위 전류를 하나로 묶은 \\(\\varepsilon_c = \\varepsilon - j\\sigma/\\omega = \\varepsilon' - j\\varepsilon''\\). 허수부가 손실을 나타낸다.",
    "chapters": [
     "maxwell-equations#phasor"
    ]
   },
   {
    "ko": "복소 포인팅 벡터",
    "en": "complex Poynting vector",
    "abbr": "",
    "def": "시간 조화장에서 \\(\\tilde{\\mathbf S} = \\tfrac12\\tilde{\\mathbf E}\\times\\tilde{\\mathbf H}^*\\). 실수부가 시간 평균 에너지 흐름, 허수부가 무효 전력이다.",
    "chapters": [
     "maxwell-equations#poynting"
    ]
   },
   {
    "ko": "부분 방전",
    "en": "partial discharge",
    "abbr": "",
    "def": "고체 절연체 속 공극처럼 절연의 일부에서만 국소적으로 반복되는 방전. 공극 속 장이 \\(\\varepsilon_r\\)배로 커져 생기며 결국 전체 파괴로 이어진다.",
    "chapters": [
     "conductors-dielectrics#breakdown"
    ]
   },
   {
    "ko": "부정합 손실",
    "en": "mismatch loss",
    "abbr": "",
    "def": "반사 때문에 부하가 덜 받는 전력의 비율을 dB로 나타낸 값 \\(-10\\log_{10}(1 - |\\Gamma|^2)\\).",
    "chapters": [
     "transmission-lines#reflection"
    ]
   },
   {
    "ko": "부하선",
    "en": "load line",
    "abbr": "",
    "def": "자석이 연결된 자기 회로(공극)가 정하는 B–H 직선 \\(B_m = -\\mu_0(l_mA_g/l_gA_m)H_m\\). 감자 곡선과의 교점이 동작점이다.",
    "chapters": [
     "magnetic-materials#permanent"
    ]
   },
   {
    "ko": "부호간 간섭",
    "en": "intersymbol interference, ISI",
    "abbr": "",
    "def": "채널의 대역 제한과 손실로 퍼진 펄스의 꼬리가 이웃 비트의 표본 시각에 겹쳐 판정을 흔드는 현상.",
    "chapters": [
     "signal-integrity#lossy"
    ]
   },
   {
    "ko": "분극",
    "en": "polarization",
    "abbr": "",
    "def": "유전체의 단위 부피당 전기 쌍극자 모멘트 \\(\\mathbf P\\)(C/m²). 전기장이 원자·분자의 전하 중심을 어긋나게 하거나 영구 쌍극자를 정렬시켜 생긴다.",
    "chapters": [
     "conductors-dielectrics#polarization"
    ]
   },
   {
    "ko": "분리 상수",
    "en": "separation constant",
    "abbr": "",
    "def": "변수 분리에서 서로 다른 변수의 함수들이 같아야 하므로 생기는 상수. 경계 조건이 허용되는 값을 정한다.",
    "chapters": [
     "boundary-value#cartesian"
    ]
   },
   {
    "ko": "분산",
    "en": "dispersion",
    "abbr": "",
    "def": "위상 속도가 진동수에 따라 달라지는 현상. 분산 매질에서는 위상 속도와 군속도가 갈리고 펄스가 퍼진다.",
    "chapters": [
     "plane-waves#group-velocity"
    ]
   },
   {
    "ko": "분산 관계",
    "en": "dispersion relation",
    "abbr": "",
    "def": "매질에서 각진동수와 위상 상수 사이의 관계 \\(\\omega(\\beta)\\). 원점과 이은 직선의 기울기가 위상 속도, 접선의 기울기가 군속도다.",
    "chapters": [
     "plane-waves#group-velocity"
    ]
   },
   {
    "ko": "분포 RC 선",
    "en": "distributed RC line",
    "abbr": "",
    "def": "인덕턴스를 무시할 수 있을 만큼 저항이 큰 선. 전압이 확산 방정식을 따라 번지며, 50% 지연이 \\(0.38\\,rc\\ell^2\\)으로 길이의 제곱에 비례한다.",
    "chapters": [
     "signal-integrity#rc-lc"
    ]
   },
   {
    "ko": "분포 정수 모형",
    "en": "distributed-element model",
    "abbr": "",
    "def": "선을 짧은 조각으로 나눠 조각마다 단위 길이당 저항 \\(R\\), 인덕턴스 \\(L\\), 컨덕턴스 \\(G\\), 정전 용량 \\(C\\)를 붙인 회로 모형. 선 길이가 파장의 약 1/10을 넘을 때 필요하다.",
    "chapters": [
     "transmission-lines#distributed"
    ]
   },
   {
    "ko": "브루스터 각",
    "en": "Brewster angle",
    "abbr": "",
    "def": "p 편광의 반사가 0이 되는 입사각 \\(\\tan\\theta_B = n_2/n_1\\). 이때 반사광과 굴절광은 직각을 이루고 반사광은 순수한 s 편광이다.",
    "chapters": [
     "reflection#oblique"
    ]
   },
   {
    "ko": "블랙 식",
    "en": "Black's equation",
    "abbr": "",
    "def": "일렉트로마이그레이션 수명의 경험식 \\(\\text{MTTF} = AJ^{-n}e^{E_a/k_BT}\\). 가속 시험 결과를 사용 전류 밀도와 온도로 외삽하는 데 쓴다.",
    "chapters": [
     "steady-currents#electromigration"
    ]
   },
   {
    "ko": "블레흐 길이",
    "en": "Blech length",
    "abbr": "",
    "def": "원자 이동이 만든 역응력이 전자 바람과 비겨 보이드가 생기지 않는 최대 배선 길이. \\(JL < (JL)_c\\)(구리에서 수천 A/cm)이면 배선은 EM으로 죽지 않는다.",
    "chapters": [
     "steady-currents#electromigration"
    ]
   },
   {
    "ko": "비아",
    "en": "via",
    "abbr": "",
    "def": "서로 다른 배선층을 수직으로 잇는 짧은 금속 기둥. 저항은 금속 기둥, 바닥 장벽 금속, 퍼짐 저항의 합이다.",
    "chapters": [
     "steady-currents#resistance"
    ]
   },
   {
    "ko": "비오–사바르 법칙",
    "en": "Biot–Savart law",
    "abbr": "",
    "def": "전류 조각 \\(I\\,d\\mathbf l'\\)이 만드는 자기장 \\(d\\mathbf B = \\frac{\\mu_0}{4\\pi}\\frac{I\\,d\\mathbf l'\\times\\hat{\\mathbf R}}{R^2}\\)를 주는 법칙. 정자기장의 쿨롱 법칙에 해당한다.",
    "chapters": [
     "magnetostatics#biot-savart"
    ]
   },
   {
    "ko": "비유전율",
    "en": "relative permittivity",
    "abbr": "",
    "def": "물질의 유전율을 진공 유전율로 나눈 값 \\(\\varepsilon_r = \\varepsilon/\\varepsilon_0 = 1 + \\chi_e\\). 반도체 공정에서는 흔히 k값이라 부른다(SiO₂ 3.9).",
    "chapters": [
     "conductors-dielectrics#displacement"
    ]
   },
   {
    "ko": "비투자율",
    "en": "relative permeability",
    "abbr": "",
    "def": "투자율을 진공의 투자율로 나눈 값 \\(\\mu_r = \\mu/\\mu_0 = 1 + \\chi_m\\). 강자성체는 \\(10^2\\)–\\(10^5\\)에 이른다.",
    "chapters": [
     "magnetic-materials#h-field"
    ]
   },
   {
    "ko": "빔 조향",
    "en": "beam steering",
    "abbr": "",
    "def": "소자 사이의 점진 위상 \\(\\beta = -kd\\sin\\theta_0\\)를 바꿔 배열의 주엽을 기계적 회전 없이 원하는 방향 \\(\\theta_0\\)로 돌리는 것.",
    "chapters": [
     "radiation#arrays"
    ]
   },
   {
    "ko": "사각 도파관",
    "en": "rectangular waveguide",
    "abbr": "",
    "def": "직사각형 단면(너비 \\(a\\), 높이 \\(b\\))의 속이 빈 금속관. TE·TM 모드만 진행하며 기본 모드는 \\(\\mathrm{TE}_{10}\\)이다.",
    "chapters": [
     "waveguides#rectangular"
    ]
   },
   {
    "ko": "사이클로트론 진동수",
    "en": "cyclotron frequency",
    "abbr": "",
    "def": "균일한 자기장 속에서 전하가 원운동하는 각진동수 \\(\\omega_c = |q|B/m\\). 비상대론 영역에서 속력에 무관하다.",
    "chapters": [
     "magnetostatics#lorentz"
    ]
   },
   {
    "ko": "사중극자",
    "en": "quadrupole",
    "abbr": "",
    "def": "전체 전하와 쌍극자 모멘트가 모두 0이고 다중극 전개의 둘째 차수(\\(1/r^3\\))가 처음으로 남는 전하 배치. 두 쌍극자를 등지게 붙인 꼴이다.",
    "chapters": [
     "electrostatics#dipole"
    ]
   },
   {
    "ko": "삽입 손실",
    "en": "insertion loss",
    "abbr": "",
    "def": "채널을 지나며 신호가 잃는 전력의 비를 dB로 나타낸 값. 전송선에서는 \\(8.686\\,\\alpha\\ell\\)이며 표피 손실(\\(\\propto\\sqrt f\\))과 유전 손실(\\(\\propto f\\))의 합이다.",
    "chapters": [
     "signal-integrity#lossy"
    ]
   },
   {
    "ko": "상승 시간",
    "en": "rise time",
    "abbr": "",
    "def": "계단 신호가 낮은 값에서 높은 값으로 오르는 데 걸리는 시간(보통 10–90%). 짧을수록 높은 주파수 성분을 많이 담아 반사·누화·손실이 두드러진다.",
    "chapters": [
     "signal-integrity#tdr"
    ]
   },
   {
    "ko": "상자성",
    "en": "paramagnetism",
    "abbr": "",
    "def": "짝짓지 않은 전자의 영구 모멘트가 외부 장 쪽으로 약간 정렬해 장과 같은 방향으로 약하게 자화되는 성질(\\(\\chi_m \\sim 10^{-5}\\)–\\(10^{-3}\\)).",
    "chapters": [
     "magnetic-materials#h-field"
    ]
   },
   {
    "ko": "상호 인덕턴스",
    "en": "mutual inductance",
    "abbr": "",
    "def": "한 코일의 전류가 다른 코일에 만든 쇄교 선속과 그 전류의 비 \\(M_{21} = \\Lambda_{21}/I_1\\). 노이만 공식에 의해 \\(M_{12} = M_{21}\\)이다.",
    "chapters": [
     "induction#inductance"
    ]
   },
   {
    "ko": "선속",
    "en": "flux",
    "abbr": "",
    "def": "벡터장이 면을 뚫고 지나가는 양 \\(\\Phi = \\iint_S\\mathbf F\\cdot d\\mathbf S\\). 면의 법선에 나란한 성분만 더한다.",
    "chapters": [
     "vector-analysis#integrals"
    ]
   },
   {
    "ko": "선형 안테나",
    "en": "linear antenna",
    "abbr": "",
    "def": "중심에서 급전되는 곧은 도선 안테나. 전류를 정현파 정재파 \\(I_m\\sin[k(L/2 - |z|)]\\)로 가정해 패턴과 복사 저항을 구한다.",
    "chapters": [
     "radiation#dipole"
    ]
   },
   {
    "ko": "소산파",
    "en": "evanescent wave",
    "abbr": "",
    "def": "진동하지 않고 거리에 따라 지수적으로만 줄어드는 장. 차단 아래의 플라스마나 전반사 경계 너머에서 생기며 평균 전력을 나르지 않는다.",
    "chapters": [
     "plane-waves#plasma"
    ]
   },
   {
    "ko": "속박 전류",
    "en": "bound current",
    "abbr": "",
    "def": "자화된 물질의 원자 고리 전류가 거시적으로 남긴 몫. 부피 전류 \\(\\mathbf J_b = \\nabla\\times\\mathbf M\\)와 표면 전류 \\(\\mathbf K_b = \\mathbf M\\times\\hat{\\mathbf n}\\)로 나타내며, 자기장의 원천으로서는 자유 전류와 같다.",
    "chapters": [
     "magnetic-materials#magnetization"
    ]
   },
   {
    "ko": "속박 전하",
    "en": "bound charge",
    "abbr": "",
    "def": "분극 때문에 나타나는, 원자에 묶여 떼어 낼 수 없는 전하. 표면 \\(\\sigma_b = \\mathbf P\\cdot\\hat{\\mathbf n}\\), 부피 \\(\\rho_b = -\\nabla\\cdot\\mathbf P\\)이며 합은 0이다.",
    "chapters": [
     "conductors-dielectrics#polarization"
    ]
   },
   {
    "ko": "손실 탄젠트",
    "en": "loss tangent",
    "abbr": "",
    "def": "전도 전류 밀도와 변위 전류 밀도의 크기 비 \\(\\tan\\delta_c = \\varepsilon''/\\varepsilon' = \\sigma/\\omega\\varepsilon\\). 1보다 훨씬 작으면 좋은 유전체, 훨씬 크면 양도체다.",
    "chapters": [
     "plane-waves#lossy-media"
    ]
   },
   {
    "ko": "쇄교 자속",
    "en": "flux linkage",
    "abbr": "",
    "def": "회로가 감싸는 자기 선속을 감은 바퀴마다 모두 더한 값 \\(\\Lambda\\). 모든 바퀴가 같은 선속을 감싸면 \\(\\Lambda = N\\Phi\\).",
    "chapters": [
     "magnetostatics#inductance"
    ]
   },
   {
    "ko": "수렴 차수",
    "en": "order of convergence",
    "abbr": "",
    "def": "오차가 격자 간격에 대해 \\(e \\approx Kh^p\\)로 줄 때의 지수 \\(p\\). 로그–로그 그래프의 기울기로 읽는다.",
    "chapters": [
     "computational-em#fdm"
    ]
   },
   {
    "ko": "수치 분산",
    "en": "numerical dispersion",
    "abbr": "",
    "def": "격자 위 파동의 위상 속도가 파장과 진행 방향에 따라 참 빛의 속도와 달라지는 현상. 파장당 칸 수가 적을수록 크다.",
    "chapters": [
     "computational-em#fdtd"
    ]
   },
   {
    "ko": "순환",
    "en": "circulation",
    "abbr": "",
    "def": "닫힌 경로를 따라 벡터장을 선적분한 값 \\(\\oint_C\\mathbf F\\cdot d\\mathbf l\\). 장이 경로를 따라 얼마나 맴도는지를 나타낸다.",
    "chapters": [
     "vector-analysis#integrals"
    ]
   },
   {
    "ko": "스넬 법칙",
    "en": "Snell's law",
    "abbr": "",
    "def": "굴절의 법칙 \\(n_1\\sin\\theta_i = n_2\\sin\\theta_t\\). 위상 정합 \\(k_1\\sin\\theta_i = k_2\\sin\\theta_t\\)과 같다.",
    "chapters": [
     "reflection#oblique"
    ]
   },
   {
    "ko": "스미스 차트",
    "en": "Smith chart",
    "abbr": "",
    "def": "정규화 임피던스 \\(z\\)의 등저항·등리액턴스 곡선을 반사 계수 평면의 단위 원 안에 그린 도표. 선을 따른 이동이 원점 둘레의 회전이 된다.",
    "chapters": [
     "transmission-lines#smith"
    ]
   },
   {
    "ko": "스윙 곡선",
    "en": "swing curve",
    "abbr": "",
    "def": "레지스트가 흡수하는 노광 에너지(또는 반사율, 필요 노광량)가 레지스트 두께에 따라 주기 \\(\\lambda/2n\\)로 출렁이는 그래프. 박막 간섭 때문에 생긴다.",
    "chapters": [
     "reflection#barc"
    ]
   },
   {
    "ko": "스칼라장",
    "en": "scalar field",
    "abbr": "",
    "def": "공간의 각 점에 수 하나를 대응시키는 함수. 전위 \\(V\\), 온도, 도핑 농도처럼 크기만 있는 양의 분포다.",
    "chapters": [
     "vector-analysis#coordinates"
    ]
   },
   {
    "ko": "스터브",
    "en": "stub",
    "abbr": "",
    "def": "끝을 단락하거나 개방한 짧은 전송선 조각. 길이에 따라 인덕터나 커패시터처럼 순수 리액턴스를 낸다.",
    "chapters": [
     "transmission-lines#input-impedance"
    ]
   },
   {
    "ko": "스토크스 정리",
    "en": "Stokes' theorem",
    "abbr": "",
    "def": "닫힌 경로의 순환은 그 경로를 가장자리로 하는 아무 면에서 회전의 선속과 같다: \\(\\oint_C\\mathbf F\\cdot d\\mathbf l = \\iint_S(\\nabla\\times\\mathbf F)\\cdot d\\mathbf S\\).",
    "chapters": [
     "vector-analysis#curl"
    ]
   },
   {
    "ko": "슬롯 안테나",
    "en": "slot antenna",
    "abbr": "",
    "def": "도체판에 뚫린 가늘고 긴 틈이 안테나로 작동하는 것. 길이가 반파장이면 반파장 다이폴처럼 복사하므로, 외함의 차폐는 틈의 가장 긴 치수로 정해진다.",
    "chapters": [
     "radiation#shielding"
    ]
   },
   {
    "ko": "시간 영역 반사 측정",
    "en": "time-domain reflectometry, TDR",
    "abbr": "",
    "def": "정합된 원천에서 빠른 계단을 보내고 같은 자리에서 반사 전압을 기록해, 왕복 시간으로 위치(\\(d = vt/2\\))를, 반사 계수로 임피던스를 읽는 측정법.",
    "chapters": [
     "signal-integrity#tdr"
    ]
   },
   {
    "ko": "시간 의존 절연 파괴",
    "en": "time-dependent dielectric breakdown, TDDB",
    "abbr": "",
    "def": "얇은 절연막이 절연 내력보다 낮은 장에서도 결함이 쌓여 시간이 지나면 파괴되는 현상(TDDB). 가속 시험으로 사용 조건의 수명을 예측한다.",
    "chapters": [
     "conductors-dielectrics#breakdown"
    ]
   },
   {
    "ko": "시간 조화장",
    "en": "time-harmonic field",
    "abbr": "",
    "def": "모든 성분이 한 각진동수 \\(\\omega\\)로 사인 진동하는 장. 페이저로 나타내면 시간 미분이 \\(j\\omega\\) 곱셈이 된다.",
    "chapters": [
     "maxwell-equations#phasor"
    ]
   },
   {
    "ko": "시험 함수",
    "en": "test function",
    "abbr": "",
    "def": "약형식에서 방정식에 곱해 적분하는 함수. 모든 시험 함수에 대해 적분식이 성립하도록 해를 정한다.",
    "chapters": [
     "computational-em#fem"
    ]
   },
   {
    "ko": "쌍극자 모멘트",
    "en": "dipole moment",
    "abbr": "",
    "def": "\\(\\mathbf p = Q\\mathbf d\\)(음전하에서 양전하로), 일반적으로 \\(\\mathbf p = \\sum Q_k\\mathbf r_k\\)(C·m). 균일한 장에서 돌림힘 \\(\\mathbf p\\times\\mathbf E\\)와 에너지 \\(-\\mathbf p\\cdot\\mathbf E\\)를 정한다.",
    "chapters": [
     "electrostatics#dipole"
    ]
   },
   {
    "ko": "쌍대성",
    "en": "duality",
    "abbr": "",
    "def": "균일 매질 속 정전기장과 정상 전류가 같은 방정식을 풀어 \\(\\varepsilon\\leftrightarrow\\sigma\\), \\(\\mathbf D\\leftrightarrow\\mathbf J\\), \\(C\\leftrightarrow G\\)로 대응하는 성질. 같은 전극이면 \\(G/C = \\sigma/\\varepsilon\\), \\(RC = \\varepsilon/\\sigma\\).",
    "chapters": [
     "steady-currents#duality"
    ]
   },
   {
    "ko": "아이 패턴",
    "en": "eye diagram",
    "abbr": "",
    "def": "긴 무작위 비트열의 파형을 2 UI 창으로 잘라 겹쳐 그린 그림. 가운데 열린 눈의 높이와 폭이 잡음 여유와 타이밍 여유를 보여 준다.",
    "chapters": [
     "signal-integrity#lossy"
    ]
   },
   {
    "ko": "앙페르 고리",
    "en": "Amperian loop",
    "abbr": "",
    "def": "앙페르 법칙을 적용하려고 고르는 닫힌 경로. 대칭 덕분에 그 위에서 \\(B\\)가 일정하고 경로와 나란하거나 수직이도록 잡는다.",
    "chapters": [
     "magnetostatics#ampere"
    ]
   },
   {
    "ko": "앙페르 법칙",
    "en": "Ampère's law",
    "abbr": "",
    "def": "닫힌 경로를 따른 자기장의 선적분이 그 경로가 감싸는 알짜 전류의 \\(\\mu_0\\)배라는 법칙 \\(\\oint\\mathbf B\\cdot d\\mathbf l = \\mu_0I_{enc}\\). 미분형은 \\(\\nabla\\times\\mathbf B = \\mu_0\\mathbf J\\).",
    "chapters": [
     "magnetostatics#ampere"
    ]
   },
   {
    "ko": "앙페르–맥스웰 법칙",
    "en": "Ampère–Maxwell law",
    "abbr": "",
    "def": "자기장의 회전이 전도 전류와 변위 전류의 합과 같다는 법칙 \\(\\nabla\\times\\mathbf H = \\mathbf J + \\partial\\mathbf D/\\partial t\\). 전하 보존과 앙페르 법칙을 함께 살린다.",
    "chapters": [
     "maxwell-equations#displacement"
    ]
   },
   {
    "ko": "야코비 반복",
    "en": "Jacobi iteration",
    "abbr": "",
    "def": "모든 미지수를 이전 단계의 값만으로 한꺼번에 갱신하는 반복법. 병렬화가 쉽지만 수렴이 느리다.",
    "chapters": [
     "boundary-value#finite-difference"
    ]
   },
   {
    "ko": "약형식",
    "en": "weak form",
    "abbr": "",
    "def": "미분 방정식에 시험 함수를 곱해 적분하고 부분 적분으로 미분을 나눠 가진 꼴. 푸아송 방정식은 \\(\\int\\varepsilon\\nabla V\\cdot\\nabla w = \\int\\rho w\\)가 된다.",
    "chapters": [
     "computational-em#fem"
    ]
   },
   {
    "ko": "양도체",
    "en": "good conductor",
    "abbr": "",
    "def": "\\(\\sigma/\\omega\\varepsilon \\gg 1\\)이라 변위 전류를 무시할 수 있는 매질. \\(\\alpha = \\beta = 1/\\delta\\), \\(\\eta_c = (1+j)/\\sigma\\delta\\)이다.",
    "chapters": [
     "plane-waves#good-conductors"
    ]
   },
   {
    "ko": "언쇼 정리",
    "en": "Earnshaw's theorem",
    "abbr": "",
    "def": "정전기력만으로는 전하를 안정 평형에 붙잡아 둘 수 없다는 정리. 전하가 없는 곳의 전위가 조화 함수라 극소점이 없기 때문이다.",
    "chapters": [
     "boundary-value#poisson-laplace"
    ]
   },
   {
    "ko": "엄밀 결합파 해석",
    "en": "rigorous coupled-wave analysis, RCWA",
    "abbr": "",
    "def": "주기 구조의 층마다 유전율을 푸리에 급수로 전개해 고유값 문제로 모드를 구하고, 경계 조건으로 회절 효율을 계산하는 주파수 영역 방법.",
    "chapters": [
     "computational-em#rcwa"
    ]
   },
   {
    "ko": "에너지 밀도",
    "en": "energy density",
    "abbr": "",
    "def": "장에 저장된 단위 부피당 에너지. 정전기장에서 \\(w_E = \\tfrac12\\mathbf D\\cdot\\mathbf E = \\tfrac12\\varepsilon_0E^2\\)(J/m³)이며 도체 표면 정전 압력과 같은 값이다.",
    "chapters": [
     "electrostatics#energy"
    ]
   },
   {
    "ko": "에어리 공식",
    "en": "Airy formula",
    "abbr": "",
    "def": "단일 박막의 다중 반사를 모두 더한 반사 계수 \\(r = (r_{01} + r_{12}e^{-j2\\delta})/(1 + r_{01}r_{12}e^{-j2\\delta})\\).",
    "chapters": [
     "reflection#thinfilm"
    ]
   },
   {
    "ko": "엘립소메트리",
    "en": "ellipsometry",
    "abbr": "",
    "def": "반사에 따른 편광 변화를 \\(\\rho = r_p/r_s = \\tan\\psi\\,e^{j\\Delta}\\)로 재어 박막의 두께와 광학 상수를 구하는 측정법. 서브 나노미터 두께에 민감하다.",
    "chapters": [
     "reflection#ellipsometry"
    ]
   },
   {
    "ko": "엘모어 지연",
    "en": "Elmore delay",
    "abbr": "",
    "def": "RC 나무에서 마디 \\(i\\)의 지연을 \\(\\tau_i = \\sum_k R_{ik}C_k\\)(공통 경로 저항 × 커패시턴스의 합)로 어림한 값. 임펄스 응답의 1차 모멘트이며 50% 지연의 상한이다.",
    "chapters": [
     "signal-integrity#elmore"
    ]
   },
   {
    "ko": "연속 과이완",
    "en": "successive over-relaxation",
    "abbr": "",
    "def": "가우스–자이델의 변화량을 \\(\\omega\\)배(\\(1<\\omega<2\\)) 키워 수렴을 가속하는 반복법(SOR). 최적 \\(\\omega\\)에서 반복 수가 격자 크기에 비례한다.",
    "chapters": [
     "boundary-value#finite-difference"
    ]
   },
   {
    "ko": "연속 방정식",
    "en": "equation of continuity",
    "abbr": "",
    "def": "전하 보존 법칙의 미분형 \\(\\nabla\\cdot\\mathbf J = -\\partial\\rho_v/\\partial t\\). 정상 상태에서는 \\(\\nabla\\cdot\\mathbf J = 0\\)이 되어 키르히호프 전류 법칙을 준다.",
    "chapters": [
     "steady-currents#current-density"
    ]
   },
   {
    "ko": "연자성체",
    "en": "soft magnetic material",
    "abbr": "",
    "def": "보자력이 작아 쉽게 자화·탈자되는 자성체(규소 강판, 퍼멀로이, 페라이트). 히스테리시스 손실이 작아 코어와 차폐에 쓴다.",
    "chapters": [
     "magnetic-materials#hysteresis"
    ]
   },
   {
    "ko": "영구 자석",
    "en": "permanent magnet",
    "abbr": "",
    "def": "외부 전류 없이 스스로 자화를 유지해 장을 만드는 경자성체. 히스테리시스 고리의 제2사분면에서 일한다.",
    "chapters": [
     "magnetic-materials#permanent"
    ]
   },
   {
    "ko": "영상 전하",
    "en": "image charge",
    "abbr": "",
    "def": "영상법에서 경계 조건을 흉내 내려고 찾는 영역 바깥에 놓는 가상의 전하. 접지 평면이면 거울 위치의 \\(-q\\), 접지 구면 \\(-qa/d\\)이다.",
    "chapters": [
     "boundary-value#images"
    ]
   },
   {
    "ko": "영상법",
    "en": "method of images",
    "abbr": "",
    "def": "도체 경계를 그 바깥에 둔 가상의 전하(영상 전하)로 바꿔, 경계 조건을 만족하는 장을 쉽게 구하는 방법. 유일성 정리로 정당화된다.",
    "chapters": [
     "boundary-value#images"
    ]
   },
   {
    "ko": "와전류",
    "en": "eddy current",
    "abbr": "",
    "def": "변하는 자속 때문에 도체 속에 유도되어 소용돌이처럼 도는 전류.",
    "chapters": [
     "magnetic-materials#hysteresis"
    ]
   },
   {
    "ko": "와전류 손실",
    "en": "eddy-current loss",
    "abbr": "",
    "def": "철심 속 와전류가 내는 줄 열. 얇은 판에서 단위 부피당 \\(\\pi^2f^2B_m^2t^2/6\\rho\\)로, 주파수와 판 두께의 제곱에 비례한다.",
    "chapters": [
     "magnetic-materials#hysteresis"
    ]
   },
   {
    "ko": "완전 도체",
    "en": "perfect electric conductor",
    "abbr": "",
    "def": "전도도가 무한대인 이상적 도체. 내부에 시간 변화하는 장이 없고, 표면에서 \\(E_t = 0\\), \\(B_n = 0\\)이며 표면 전하와 표면 전류가 바깥 장을 끝낸다.",
    "chapters": [
     "maxwell-equations#boundary"
    ]
   },
   {
    "ko": "완전 정합층",
    "en": "perfectly matched layer, PML",
    "abbr": "",
    "def": "\\(\\sigma^*/\\mu_0 = \\sigma/\\varepsilon_0\\)로 맞춘 손실층. 진공과 임피던스가 같아 입구에서 반사가 없고 안에서 파동이 감쇠한다(베렝제, 1994).",
    "chapters": [
     "computational-em#abc"
    ]
   },
   {
    "ko": "우모드",
    "en": "even mode",
    "abbr": "",
    "def": "결합된 두 선이 같은 전압·같은 방향 전류로 움직이는 정규 모드. 특성 임피던스 \\(Z_{\\text{even}}\\)는 단일 선의 \\(Z_0\\)보다 크다.",
    "chapters": [
     "signal-integrity#crosstalk"
    ]
   },
   {
    "ko": "운동 기전력",
    "en": "motional emf",
    "abbr": "",
    "def": "자기장 속에서 움직이는 도체의 전하가 받는 로런츠 힘이 만드는 기전력. \\(\\oint(\\mathbf v\\times\\mathbf B)\\cdot d\\mathbf l\\)이고, 레일 위 막대에서는 \\(BLv\\)이다.",
    "chapters": [
     "induction#motional"
    ]
   },
   {
    "ko": "원거리장",
    "en": "far field",
    "abbr": "",
    "def": "안테나에서 \\(kr \\gg 1\\)인 영역의 장. \\(\\mathbf E\\perp\\mathbf H\\perp\\hat{\\mathbf r}\\), \\(E/H = \\eta_0\\), \\(1/r\\) 감쇠로 국소적으로 평면파처럼 에너지를 운반한다.",
    "chapters": [
     "radiation#hertzian"
    ]
   },
   {
    "ko": "원단 누화",
    "en": "far-end crosstalk, FEXT",
    "abbr": "",
    "def": "피해선에서 공격 신호가 향하는 먼 쪽 끝에 나타나는 누화. 크기 \\(K_f(t_d/t_r)V\\), \\(K_f = (C_m/C - L_m/L)/2\\)로 결합 길이에 비례하며 균질 매질에서는 0이다.",
    "chapters": [
     "signal-integrity#crosstalk"
    ]
   },
   {
    "ko": "원편광",
    "en": "circular polarization",
    "abbr": "",
    "def": "두 직교 성분의 진폭이 같고 위상차가 ±90°라 전기장 끝이 일정한 크기로 원을 도는 편광. IEEE 관례로 \\(\\delta = -90^\\circ\\)이면 오른손, \\(+90^\\circ\\)이면 왼손이다.",
    "chapters": [
     "plane-waves#polarization"
    ]
   },
   {
    "ko": "위상 두께",
    "en": "phase thickness",
    "abbr": "",
    "def": "막을 한 번 지날 때의 위상 \\(\\delta = 2\\pi N_1 d\\cos\\theta_1/\\lambda_0\\). 박막의 반사는 \\(e^{-j2\\delta}\\)를 통해 이 값에 따라 주기적으로 변한다.",
    "chapters": [
     "reflection#thinfilm"
    ]
   },
   {
    "ko": "위상 배열",
    "en": "phased array",
    "abbr": "",
    "def": "여러 안테나 소자의 전류 위상(과 진폭)을 전자적으로 조절해 빔 방향과 모양을 바꾸는 배열 안테나.",
    "chapters": [
     "radiation#arrays"
    ]
   },
   {
    "ko": "위상 상수",
    "en": "phase constant",
    "abbr": "",
    "def": "전파 상수의 허수부 \\(\\beta\\)(rad/m). 파장은 \\(2\\pi/\\beta\\), 위상 속도는 \\(\\omega/\\beta\\)이다.",
    "chapters": [
     "plane-waves#lossy-media"
    ]
   },
   {
    "ko": "위상 속도",
    "en": "phase velocity",
    "abbr": "",
    "def": "일정한 위상점(마루)이 움직이는 속력 \\(u_p = \\omega/\\beta\\). 무손실 매질에서 \\(1/\\sqrt{\\mu\\varepsilon} = c/n\\)이며 분산 매질에서는 \\(c\\)를 넘을 수도 있다.",
    "chapters": [
     "plane-waves#wave-equation"
    ]
   },
   {
    "ko": "위상 정합",
    "en": "phase matching",
    "abbr": "",
    "def": "경계 조건이 경계면의 모든 점에서 성립하려면 입사·반사·투과파의 경계면 방향 파수가 같아야 한다는 조건. 반사 법칙과 스넬 법칙이 여기서 나온다.",
    "chapters": [
     "reflection#oblique"
    ]
   },
   {
    "ko": "유도 가열",
    "en": "induction heating",
    "abbr": "",
    "def": "코일의 교류 자기장으로 공작물에 와전류를 유도해 공작물 자신의 저항으로 데우는 방법. 가열 깊이는 표피 깊이로 정해진다.",
    "chapters": [
     "induction#eddy"
    ]
   },
   {
    "ko": "유도 결합 플라스마",
    "en": "inductively coupled plasma, ICP",
    "abbr": "",
    "def": "코일의 RF 전류가 만드는 유도 전기장으로 전자를 가속해 유지하는 고밀도 플라스마(ICP). 플라스마가 한 바퀴 2차 코일인 변압기로 해석할 수 있다.",
    "chapters": [
     "induction#transformer"
    ]
   },
   {
    "ko": "유도 기전력",
    "en": "induced electromotive force",
    "abbr": "",
    "def": "닫힌 경로를 지나는 자기 선속이 변할 때 그 경로를 따라 생기는 기전력. \\(\\mathcal E = -d\\Phi/dt\\)이다.",
    "chapters": [
     "induction#faraday"
    ]
   },
   {
    "ko": "유도 표면 전하",
    "en": "induced surface charge",
    "abbr": "",
    "def": "외부 전하나 장 때문에 도체 표면에 모이는 전하. 밀도는 표면 바로 바깥의 법선 장으로 \\(\\rho_s = \\varepsilon E_n\\)이다.",
    "chapters": [
     "boundary-value#images"
    ]
   },
   {
    "ko": "유도파",
    "en": "guided wave",
    "abbr": "",
    "def": "한 방향으로 균일한 구조(전송선, 도파관, 광섬유)에 갇혀 그 방향으로 진행하는 전자기파. 장은 단면 분포와 \\(e^{-j\\beta z}\\)의 곱으로 쓴다.",
    "chapters": [
     "waveguides#guided"
    ]
   },
   {
    "ko": "유동 속도",
    "en": "drift velocity",
    "abbr": "",
    "def": "전기장 속에서 무질서한 열운동 위에 겹쳐지는 운반자의 평균 이동 속도. \\(\\mathbf v_d = \\pm\\mu\\mathbf E\\)이며 금속에서는 mm/s–m/s 수준으로 매우 느리다.",
    "chapters": [
     "steady-currents#current-density"
    ]
   },
   {
    "ko": "유사 유전 함수",
    "en": "pseudo-dielectric function",
    "abbr": "",
    "def": "맨 기판을 가정하고 엘립소메트리 측정값 \\(\\rho\\)에서 바로 계산한 겉보기 유전 함수 \\(\\langle\\varepsilon\\rangle = \\sin^2\\theta[1 + \\tan^2\\theta((1-\\rho)/(1+\\rho))^2]\\).",
    "chapters": [
     "reflection#ellipsometry"
    ]
   },
   {
    "ko": "유일성 정리",
    "en": "uniqueness theorem",
    "abbr": "",
    "def": "영역 안의 전하와 경계의 \\(V\\) 또는 \\(\\partial V/\\partial n\\)이 주어지면 푸아송 방정식의 해가 하나뿐이라는 정리. 조건을 만족하는 해를 어떻게 찾든 그것이 답임을 보장한다.",
    "chapters": [
     "boundary-value#poisson-laplace"
    ]
   },
   {
    "ko": "유전율",
    "en": "permittivity",
    "abbr": "",
    "def": "선형 유전체에서 전기 변위와 전기장의 비례 상수 \\(\\varepsilon\\): \\(\\mathbf D = \\varepsilon\\mathbf E\\), \\(\\varepsilon = \\varepsilon_0\\varepsilon_r\\)(F/m).",
    "chapters": [
     "conductors-dielectrics#displacement"
    ]
   },
   {
    "ko": "유전체 슬랩 도파로",
    "en": "dielectric slab waveguide",
    "abbr": "",
    "def": "굴절률이 큰 얇은 층(코어)을 굴절률이 작은 층(클래딩)이 감싼 평면 도파로. 전반사로 빛을 가두며 모드 수는 \\(V = (\\pi d/\\lambda)\\mathrm{NA}\\)로 정해진다.",
    "chapters": [
     "waveguides#dielectric"
    ]
   },
   {
    "ko": "유한 요소법",
    "en": "finite element method, FEM",
    "abbr": "",
    "def": "영역을 삼각형·사면체 요소로 나누고, 해를 요소별 다항식으로 근사해 약형식을 만족시키는 수치 방법.",
    "chapters": [
     "computational-em#fem"
    ]
   },
   {
    "ko": "유한 차분 시간 영역법",
    "en": "finite-difference time-domain, FDTD",
    "abbr": "",
    "def": "맥스웰의 회전 방정식을 공간과 시간 모두 중앙 차분해, 전기장과 자기장을 번갈아 시간 전진시키는 명시적 방법.",
    "chapters": [
     "computational-em#fdtd"
    ]
   },
   {
    "ko": "유한 차분법",
    "en": "finite difference method",
    "abbr": "",
    "def": "미분을 격자점 사이의 차분으로 바꿔 미분 방정식을 연립 대수 방정식으로 푸는 수치 방법. 라플라스 방정식의 5점 공식이 대표적이다.",
    "chapters": [
     "boundary-value#finite-difference"
    ]
   },
   {
    "ko": "유한 체적법",
    "en": "finite volume method",
    "abbr": "",
    "def": "격자점마다 작은 제어 체적(박스)을 두고 그 경계를 지나는 선속의 균형으로 방정식을 세우는 이산화. 계면의 \\(D_n\\) 연속을 자연히 만족해 TCAD에서 널리 쓴다.",
    "chapters": [
     "computational-em#fdm"
    ]
   },
   {
    "ko": "유효 개구",
    "en": "effective aperture",
    "abbr": "",
    "def": "수신 안테나가 입사 전력 밀도 \\(S\\)에서 \\(P_r = A_eS\\)를 걷어 오는 등가 넓이. 모든 안테나에서 \\(A_e = \\lambda^2G/4\\pi\\)이다.",
    "chapters": [
     "radiation#friis"
    ]
   },
   {
    "ko": "유효 매질 근사",
    "en": "effective medium approximation",
    "abbr": "",
    "def": "주기가 파장보다 훨씬 작은 구조를 평균 유전율의 균질 막으로 보는 근사. TE 편광은 \\(\\varepsilon = f\\varepsilon_r + (1-f)\\varepsilon_g\\).",
    "chapters": [
     "computational-em#rcwa"
    ]
   },
   {
    "ko": "유효 유전율",
    "en": "effective permittivity",
    "abbr": "",
    "def": "마이크로스트립처럼 장이 유전체와 공기에 나뉘어 있을 때, 같은 위상 속도를 주는 균일 매질의 비유전율 \\(\\varepsilon_{\\text{eff}}\\).",
    "chapters": [
     "transmission-lines#distributed"
    ]
   },
   {
    "ko": "이 격자",
    "en": "Yee lattice",
    "abbr": "",
    "def": "전기장 성분을 정육면체 칸의 모서리에, 자기장 성분을 면 가운데에 엇갈려 두는 FDTD 격자(케인 이, 1966).",
    "chapters": [
     "computational-em#fdtd"
    ]
   },
   {
    "ko": "이동도",
    "en": "mobility",
    "abbr": "",
    "def": "단위 전기장당 운반자의 유동 속도 \\(\\mu = v_d/E = e\\tau_c/m^*\\). 단위 cm²/(V·s)이며 산란이 잦을수록 작다.",
    "chapters": [
     "steady-currents#ohms-law"
    ]
   },
   {
    "ko": "이득",
    "en": "gain",
    "abbr": "",
    "def": "입력 전력을 기준으로 한 지향성 \\(G = e_rD\\). 등방 복사체 기준 dB로 나타내면 dBi이다.",
    "chapters": [
     "radiation#power"
    ]
   },
   {
    "ko": "이산화 오차",
    "en": "discretization error",
    "abbr": "",
    "def": "연속 방정식의 참 해와, 격자 위에서 근사한 방정식의 해 사이의 차이. 격자 간격 \\(h\\)를 줄이면 \\(Kh^p\\)처럼 줄어든다.",
    "chapters": [
     "computational-em#fdm"
    ]
   },
   {
    "ko": "이상 변압기",
    "en": "ideal transformer",
    "abbr": "",
    "def": "결합 계수 1, 무한한 자기 인덕턴스, 손실 0인 변압기. \\(V_2/V_1 = N_2/N_1\\), \\(Z_{in} = (N_1/N_2)^2Z_L\\)이다.",
    "chapters": [
     "induction#transformer"
    ]
   },
   {
    "ko": "이완법",
    "en": "relaxation method",
    "abbr": "",
    "def": "격자점의 값을 이웃 값으로 계산한 갱신 규칙을 되풀이해 연립 방정식의 해로 다가가는 반복법. 야코비·가우스–자이델·SOR이 있다.",
    "chapters": [
     "boundary-value#finite-difference"
    ]
   },
   {
    "ko": "인덕턴스",
    "en": "inductance",
    "abbr": "",
    "def": "쇄교 자속과 그것을 만든 전류의 비 \\(L = \\Lambda/I\\)(단위 H). 자기 에너지로 \\(L = 2W_m/I^2\\)로도 쓰며, 기하 구조와 투자율만으로 정해진다.",
    "chapters": [
     "magnetostatics#inductance"
    ]
   },
   {
    "ko": "일렉트로마이그레이션",
    "en": "electromigration",
    "abbr": "",
    "def": "흐르는 전자가 금속 원자에 운동량을 넘겨(전자 바람) 원자를 양극 쪽으로 실어 나르는 현상. 원자 선속이 바뀌는 곳에 보이드와 돌출이 생겨 배선이 끊기거나 단락된다.",
    "chapters": [
     "steady-currents#electromigration"
    ]
   },
   {
    "ko": "임계각",
    "en": "critical angle",
    "abbr": "",
    "def": "굴절률이 큰 쪽에서 작은 쪽으로 갈 때 굴절각이 90°가 되는 입사각 \\(\\sin\\theta_c = n_2/n_1\\). 이보다 크면 전반사가 일어난다.",
    "chapters": [
     "reflection#tir"
    ]
   },
   {
    "ko": "입력 임피던스",
    "en": "input impedance",
    "abbr": "",
    "def": "선과 부하를 하나로 보고 선 입구에서 들여다본 전압과 전류의 비. 무손실 선이면 \\(Z_0(Z_L + jZ_0\\tan\\beta\\ell)/(Z_0 + jZ_L\\tan\\beta\\ell)\\).",
    "chapters": [
     "transmission-lines#input-impedance"
    ]
   },
   {
    "ko": "입사면",
    "en": "plane of incidence",
    "abbr": "",
    "def": "입사파의 파수 벡터와 경계면 법선이 이루는 평면. s·p 편광을 나누는 기준이다.",
    "chapters": [
     "reflection#oblique"
    ]
   },
   {
    "ko": "자구",
    "en": "magnetic domain",
    "abbr": "",
    "def": "강자성체 안에서 모멘트가 한 방향으로 나란한 작은 영역. 장을 걸면 자구벽이 움직이고 자구 안 모멘트가 회전해 자화가 바뀐다.",
    "chapters": [
     "magnetic-materials#hysteresis"
    ]
   },
   {
    "ko": "자기 감수율",
    "en": "magnetic susceptibility",
    "abbr": "",
    "def": "선형 자성체에서 자화와 자기장 세기의 비례 상수 \\(\\chi_m\\): \\(\\mathbf M = \\chi_m\\mathbf H\\). 반자성은 음수, 상자성은 작은 양수다.",
    "chapters": [
     "magnetic-materials#h-field"
    ]
   },
   {
    "ko": "자기 벡터 퍼텐셜",
    "en": "magnetic vector potential",
    "abbr": "",
    "def": "회전이 자기장을 주는 벡터장 \\(\\mathbf A\\) (\\(\\mathbf B = \\nabla\\times\\mathbf A\\)). 쿨롱 게이지에서 \\(\\nabla^2\\mathbf A = -\\mu_0\\mathbf J\\)를 만족하고, 고리를 따른 선적분이 고리를 지나는 선속이다.",
    "chapters": [
     "magnetostatics#vector-potential"
    ]
   },
   {
    "ko": "자기 선속",
    "en": "magnetic flux",
    "abbr": "",
    "def": "면을 꿰뚫는 자기장의 면적분 \\(\\Phi = \\int_S\\mathbf B\\cdot d\\mathbf S\\)(단위 Wb). \\(\\nabla\\cdot\\mathbf B = 0\\)이라 같은 테두리를 가진 면이면 값이 같다.",
    "chapters": [
     "magnetostatics#inductance"
    ]
   },
   {
    "ko": "자기 쌍극자 모멘트",
    "en": "magnetic dipole moment",
    "abbr": "",
    "def": "작은 전류 고리를 멀리서 대표하는 벡터 \\(\\mathbf m = I\\mathbf S\\)(단위 A·m²). 먼 곳의 장은 \\(1/r^3\\)로 줄고 균일 자기장에서 돌림힘 \\(\\mathbf m\\times\\mathbf B\\)를 받는다.",
    "chapters": [
     "magnetostatics#dipole"
    ]
   },
   {
    "ko": "자기 압력",
    "en": "magnetic pressure",
    "abbr": "",
    "def": "자기장이 경계면에 가하는 단위 면적당 힘 \\(B^2/2\\mu_0\\). 1 T에서 약 398 kPa다.",
    "chapters": [
     "magnetic-materials#energy-force"
    ]
   },
   {
    "ko": "자기 에너지 밀도",
    "en": "magnetic energy density",
    "abbr": "",
    "def": "자기장에 저장된 단위 부피당 에너지 \\(w_m = \\int H\\,dB\\), 선형 매질에서 \\(\\tfrac12\\mathbf B\\cdot\\mathbf H = B^2/2\\mu\\).",
    "chapters": [
     "magnetic-materials#energy-force"
    ]
   },
   {
    "ko": "자기 인덕턴스",
    "en": "self-inductance",
    "abbr": "",
    "def": "코일 자신의 전류가 만든 쇄교 선속과 그 전류의 비 \\(L = N\\Phi/I\\). 전류가 변하면 \\(v = L\\,di/dt\\)의 전압이 걸린다. 단위는 H.",
    "chapters": [
     "induction#inductance"
    ]
   },
   {
    "ko": "자기 차폐",
    "en": "magnetic shielding",
    "abbr": "",
    "def": "투자율이 큰 껍질로 자속을 벽 속으로 우회시켜 안쪽의 정자기·저주파 자기장을 줄이는 방법.",
    "chapters": [
     "magnetic-materials#boundary"
    ]
   },
   {
    "ko": "자기 회로",
    "en": "magnetic circuit",
    "abbr": "",
    "def": "투자율이 큰 철심이 자속을 정해진 경로로 이끄는 구조. 기자력·릴럭턴스·자속으로 전기 회로처럼 푼다.",
    "chapters": [
     "magnetic-materials#circuits"
    ]
   },
   {
    "ko": "자기장 세기",
    "en": "magnetic field intensity",
    "abbr": "",
    "def": "\\(\\mathbf H = \\mathbf B/\\mu_0 - \\mathbf M\\)로 정의한 장(A/m). 회전이 자유 전류만으로 정해진다: \\(\\oint\\mathbf H\\cdot d\\mathbf l = I_f\\).",
    "chapters": [
     "magnetic-materials#h-field"
    ]
   },
   {
    "ko": "자유 공간 경로 손실",
    "en": "free-space path loss",
    "abbr": "",
    "def": "등방 안테나 사이 자유 공간 링크의 손실 \\(L_{fs} = 20\\log_{10}(4\\pi R/\\lambda)\\) dB. 거리나 진동수가 두 배가 되면 6 dB 늘어난다.",
    "chapters": [
     "radiation#friis"
    ]
   },
   {
    "ko": "자체 에너지",
    "en": "self-energy",
    "abbr": "",
    "def": "한 전하 분포가 자기 자신의 장과 맺는 에너지. 점전하에서는 발산하며, 장 에너지 \\(\\tfrac12\\int\\varepsilon_0E^2dv\\)와 점전하 쌍 합의 차이가 된다.",
    "chapters": [
     "electrostatics#energy"
    ]
   },
   {
    "ko": "자화",
    "en": "magnetization",
    "abbr": "",
    "def": "단위 부피당 자기 쌍극자 모멘트의 합 \\(\\mathbf M\\). 단위는 A/m로, 단위 길이당 감긴 전류와 같은 차원이다.",
    "chapters": [
     "magnetic-materials#magnetization"
    ]
   },
   {
    "ko": "자화 인덕턴스",
    "en": "magnetizing inductance",
    "abbr": "",
    "def": "변압기 등가 회로에서 철심을 자화하는 전류를 정하는 병렬 인덕턴스 \\(k^2L_1\\). 부하가 없어도 이 인덕턴스로 자화 전류가 흐른다.",
    "chapters": [
     "induction#transformer"
    ]
   },
   {
    "ko": "잔류 자속 밀도",
    "en": "remanence",
    "abbr": "",
    "def": "자기장 세기 H를 0으로 되돌린 뒤에도 남는 자속 밀도 \\(B_r\\).",
    "chapters": [
     "magnetic-materials#hysteresis"
    ]
   },
   {
    "ko": "잘림 오차",
    "en": "truncation error",
    "abbr": "",
    "def": "미분을 차분으로 바꿀 때 버린 테일러 급수의 나머지 항. 중앙 차분 2계 미분의 잘림 오차는 \\((h^2/12)V''''\\)이다.",
    "chapters": [
     "computational-em#fdm"
    ]
   },
   {
    "ko": "장 증강 계수",
    "en": "field enhancement factor",
    "abbr": "",
    "def": "도체 돌기나 모서리 끝의 국소 전기장이 주변 평균 장의 몇 배인지 나타내는 수 \\(\\beta = E_{loc}/E_0\\). 평면 위 반구는 3이고 뾰족할수록 커진다.",
    "chapters": [
     "conductors-dielectrics#conductors"
    ]
   },
   {
    "ko": "적분 방정식",
    "en": "integral equation",
    "abbr": "",
    "def": "미지 함수가 적분 안에 들어 있는 방정식. 정전기에서는 도체 표면 전하가 만드는 전위가 도체 전위와 같다는 식이다.",
    "chapters": [
     "computational-em#mom"
    ]
   },
   {
    "ko": "적응 격자 세분",
    "en": "adaptive mesh refinement",
    "abbr": "",
    "def": "계산한 해로 칸마다 오차를 어림해, 오차가 큰 곳(모서리·접합 등)만 골라 격자를 다시 쪼개는 방법.",
    "chapters": [
     "computational-em#fdm"
    ]
   },
   {
    "ko": "적층 철심",
    "en": "laminated core",
    "abbr": "",
    "def": "얇은 강판을 절연해 쌓은 변압기·전동기 철심. 와전류 고리를 판 두께 \\(t\\)에 가둬 와전류 손실을 \\(t^2\\)에 비례해 줄인다.",
    "chapters": [
     "induction#eddy"
    ]
   },
   {
    "ko": "전기 감수율",
    "en": "electric susceptibility",
    "abbr": "",
    "def": "선형 유전체에서 분극과 전체 전기장의 비례 상수 \\(\\chi_e\\): \\(\\mathbf P = \\varepsilon_0\\chi_e\\mathbf E\\). 비유전율과 \\(\\varepsilon_r = 1 + \\chi_e\\)의 관계가 있다.",
    "chapters": [
     "conductors-dielectrics#polarization"
    ]
   },
   {
    "ko": "전기 변위",
    "en": "electric displacement",
    "abbr": "",
    "def": "진공에서 \\(\\mathbf D = \\varepsilon_0\\mathbf E\\), 물질 속에서 \\(\\mathbf D = \\varepsilon_0\\mathbf E + \\mathbf P\\)로 정의하는 장(C/m²). 발산이 자유 전하 밀도와 같다.",
    "chapters": [
     "electrostatics#gauss"
    ]
   },
   {
    "ko": "전기 선속",
    "en": "electric flux",
    "abbr": "",
    "def": "곡면을 지나는 전기 변위의 면적분 \\(\\Psi = \\int_S\\mathbf D\\cdot d\\mathbf S\\)(C). 닫힌 곡면에서는 안에 든 알짜 전하와 같다.",
    "chapters": [
     "electrostatics#gauss"
    ]
   },
   {
    "ko": "전기 쌍극자",
    "en": "electric dipole",
    "abbr": "",
    "def": "크기가 같고 부호가 반대인 두 전하가 작은 거리만큼 떨어진 배치. 멀리서 전위가 \\(1/r^2\\), 장이 \\(1/r^3\\)으로 준다.",
    "chapters": [
     "electrostatics#dipole"
    ]
   },
   {
    "ko": "전기장 세기",
    "en": "electric field intensity",
    "abbr": "",
    "def": "정지한 작은 시험 전하가 받는 힘을 그 전하량으로 나눈 벡터장 \\(\\mathbf E = \\lim_{q\\to0}\\mathbf F/q\\). 단위는 V/m(= N/C).",
    "chapters": [
     "electrostatics#coulomb"
    ]
   },
   {
    "ko": "전기적 크기",
    "en": "electrical size",
    "abbr": "",
    "def": "구조의 크기를 그 매질 속 파장으로 나눈 값 \\(L/\\lambda\\). 대략 0.1을 넘으면 집중 소자가 아니라 분포 소자(전송선·도파관·안테나)로 다뤄야 한다.",
    "chapters": [
     "maxwell-equations#quasistatic"
    ]
   },
   {
    "ko": "전달 행렬",
    "en": "transfer matrix, TMM",
    "abbr": "",
    "def": "다층 구조의 각 층을 2×2 행렬로 나타내고 차례로 곱해 반사·투과를 계산하는 방법(TMM). 박막 광학과 전송선 해석의 기본 도구다.",
    "chapters": [
     "reflection#tmm"
    ]
   },
   {
    "ko": "전도도",
    "en": "conductivity",
    "abbr": "",
    "def": "전류 밀도와 전기장의 비례 상수 \\(\\sigma = \\mathbf J/\\mathbf E = nq\\mu\\). 단위 S/m이며 비저항의 역수다.",
    "chapters": [
     "steady-currents#ohms-law"
    ]
   },
   {
    "ko": "전류 밀도",
    "en": "current density",
    "abbr": "",
    "def": "흐름에 수직인 단위 넓이를 단위 시간에 지나는 전하량을 크기로, 양전하가 움직이는 방향을 방향으로 하는 벡터. \\(\\mathbf J = nq\\mathbf v_d\\), 단위 A/m²이며 \\(I = \\int\\mathbf J\\cdot d\\mathbf S\\).",
    "chapters": [
     "steady-currents#current-density"
    ]
   },
   {
    "ko": "전류 밀집",
    "en": "current crowding",
    "abbr": "",
    "def": "도체가 꺾이거나 좁아지는 곳, 특히 안쪽 모서리에서 전류선이 지름길로 몰려 국소 전류 밀도가 평균보다 크게 높아지는 현상. 발열과 일렉트로마이그레이션의 약점이 된다.",
    "chapters": [
     "steady-currents#joule-crowding"
    ]
   },
   {
    "ko": "전반사",
    "en": "total internal reflection, TIR",
    "abbr": "",
    "def": "임계각보다 큰 입사각에서 \\(|r_s| = |r_p| = 1\\)이 되어 빛이 모두 반사되는 현상. 반사파는 편광에 따라 다른 위상 이동을 받는다.",
    "chapters": [
     "reflection#tir"
    ]
   },
   {
    "ko": "전송선",
    "en": "transmission line",
    "abbr": "",
    "def": "두 도체(또는 신호선과 접지)가 나란히 놓여 전압·전류를 파동으로 실어 나르는 구조. 동축 케이블, 마이크로스트립, 평행 2선 등이 있다.",
    "chapters": [
     "transmission-lines#distributed"
    ]
   },
   {
    "ko": "전신 방정식",
    "en": "telegrapher's equations",
    "abbr": "",
    "def": "분포 정수 모형에서 얻는 선 위 전압·전류의 결합 미분 방정식. 페이저로 \\(-dV/dz = (R + j\\omega L)I\\), \\(-dI/dz = (G + j\\omega C)V\\).",
    "chapters": [
     "transmission-lines#distributed"
    ]
   },
   {
    "ko": "전원 분배망",
    "en": "power delivery network, PDN",
    "abbr": "",
    "def": "전압 조정기(VRM)에서 기판·패키지·범프를 거쳐 트랜지스터까지 전원을 공급하는 저항·인덕턴스·커패시턴스의 망.",
    "chapters": [
     "signal-integrity#pdn"
    ]
   },
   {
    "ko": "전위",
    "en": "electric potential",
    "abbr": "",
    "def": "단위 양전하를 기준점에서 그 점까지 옮기는 데 드는 일 \\(V = -\\int_\\infty^P\\mathbf E\\cdot d\\boldsymbol\\ell\\)(V). 정전기장은 \\(\\mathbf E = -\\nabla V\\)이다.",
    "chapters": [
     "electrostatics#potential"
    ]
   },
   {
    "ko": "전자기 운동량 밀도",
    "en": "electromagnetic momentum density",
    "abbr": "",
    "def": "전자기장이 단위 부피에 지닌 운동량 \\(\\mathbf g = \\mathbf S/c^2\\)(진공). 장도 운동량을 지녀야 전체 운동량이 보존된다.",
    "chapters": [
     "maxwell-equations#poynting"
    ]
   },
   {
    "ko": "전자파 간섭",
    "en": "electromagnetic interference (EMI)",
    "abbr": "",
    "def": "전자 기기가 의도치 않게 방출한 전자기 에너지가 다른 기기의 동작을 방해하는 현상(EMI). 방출 한계와 내성 시험으로 규제한다.",
    "chapters": [
     "radiation#emi"
    ]
   },
   {
    "ko": "전파 상수",
    "en": "propagation constant",
    "abbr": "",
    "def": "파동의 공간 변화 \\(e^{-\\gamma z}\\)를 정하는 복소수 \\(\\gamma = \\alpha + j\\beta = \\sqrt{j\\omega\\mu(\\sigma + j\\omega\\varepsilon)}\\).",
    "chapters": [
     "plane-waves#lossy-media"
    ]
   },
   {
    "ko": "전하 밀도",
    "en": "charge density",
    "abbr": "",
    "def": "단위 길이·넓이·부피당 전하량. 선전하 \\(\\rho_\\ell\\)(C/m), 면전하 \\(\\rho_s\\)(C/m²), 부피 전하 \\(\\rho_v\\)(C/m³)로 쓰며 \\(dQ\\)를 적분해 연속 분포의 장을 구한다.",
    "chapters": [
     "electrostatics#continuous"
    ]
   },
   {
    "ko": "전하 이완 시간",
    "en": "charge relaxation time",
    "abbr": "",
    "def": "옴 물질 속 여분 전하가 제자리에서 \\(e^{-t/\\tau}\\)로 사라지는 시간 상수 \\(\\tau = \\varepsilon/\\sigma\\). 구리는 10⁻¹⁹ s 규모, SiO₂는 시간 단위다.",
    "chapters": [
     "steady-currents#relaxation"
    ]
   },
   {
    "ko": "절연 내력",
    "en": "dielectric strength",
    "abbr": "",
    "def": "절연 파괴가 시작되는 전기장의 크기 \\(E_{bd}\\). 공기 약 3 MV/m, 열산화 SiO₂ 약 10 MV/cm이다.",
    "chapters": [
     "conductors-dielectrics#breakdown"
    ]
   },
   {
    "ko": "절연 파괴",
    "en": "dielectric breakdown",
    "abbr": "",
    "def": "절연체에 너무 센 전기장이 걸려 전자 사태 등으로 갑자기 큰 전류가 흐르며 절연성을 잃는 현상.",
    "chapters": [
     "conductors-dielectrics#breakdown"
    ]
   },
   {
    "ko": "점 정합",
    "en": "point matching, collocation",
    "abbr": "",
    "def": "적분 방정식을 각 조각의 한 점(보통 가운데)에서만 정확히 만족시키는 방법. 시험 함수가 델타 함수인 모멘트 법이다.",
    "chapters": [
     "computational-em#mom"
    ]
   },
   {
    "ko": "점 표기",
    "en": "dot convention",
    "abbr": "",
    "def": "결합 코일의 감는 방향을 나타내는 표시. 두 전류가 모두 점 찍힌 단자로 들어가면 두 선속이 서로 더해진다.",
    "chapters": [
     "induction#inductance"
    ]
   },
   {
    "ko": "점형 옴의 법칙",
    "en": "point form of Ohm's law",
    "abbr": "",
    "def": "한 점에서 전류 밀도가 전기장에 비례한다는 법칙 \\(\\mathbf J = \\sigma\\mathbf E\\). 균일한 막대에 적분하면 \\(V = IR\\), \\(R = L/\\sigma A\\)가 된다.",
    "chapters": [
     "steady-currents#ohms-law"
    ]
   },
   {
    "ko": "접지 용량",
    "en": "ground capacitance",
    "abbr": "",
    "def": "한 도체에서 접지(기판·접지면)로 가는 정전 용량. 정전 용량 행렬의 행 합 \\(\\sum_jC_{ij}\\)이다.",
    "chapters": [
     "boundary-value#extraction"
    ]
   },
   {
    "ko": "정상 전류",
    "en": "steady current",
    "abbr": "",
    "def": "시간에 따라 변하지 않는 전류. 모든 곳에서 \\(\\partial\\rho_v/\\partial t = 0\\)이므로 \\(\\nabla\\cdot\\mathbf J = 0\\)이고 전류선이 끊기지 않는다.",
    "chapters": [
     "steady-currents"
    ]
   },
   {
    "ko": "정재파",
    "en": "standing wave",
    "abbr": "",
    "def": "입사파와 반사파가 겹쳐 진폭이 위치에 따라 \\(\\lambda/2\\) 주기로 오르내리며 제자리에 머무는 무늬. \\(|\\Gamma| = 1\\)이면 마디의 진폭이 0이다.",
    "chapters": [
     "reflection#normal"
    ]
   },
   {
    "ko": "정재파비",
    "en": "standing-wave ratio, SWR",
    "abbr": "",
    "def": "정재파의 최대 진폭과 최소 진폭의 비 \\(S = (1+|\\Gamma|)/(1-|\\Gamma|)\\). 1이면 반사가 없고 무한대면 전반사다.",
    "chapters": [
     "reflection#normal"
    ]
   },
   {
    "ko": "정전 압력",
    "en": "electrostatic pressure",
    "abbr": "",
    "def": "도체 표면 전하가 바깥 장에 끌려 받는 단위 넓이당 힘 \\(p = \\sigma^2/2\\varepsilon_0 = \\tfrac12\\varepsilon_0E^2\\). 정전척이 웨이퍼를 붙잡는 힘이다.",
    "chapters": [
     "conductors-dielectrics#energy"
    ]
   },
   {
    "ko": "정전 에너지",
    "en": "electrostatic energy",
    "abbr": "",
    "def": "전하 배치를 무한원에서 조립하는 데 드는 일 \\(W_E = \\tfrac12\\sum Q_kV_k = \\tfrac12\\int\\rho_vV\\,dv = \\tfrac12\\int\\varepsilon_0E^2\\,dv\\).",
    "chapters": [
     "electrostatics#energy"
    ]
   },
   {
    "ko": "정전 용량",
    "en": "capacitance",
    "abbr": "",
    "def": "두 도체에 \\(\\pm Q\\)를 주었을 때 전위차 \\(V\\)에 대한 비 \\(C = Q/V\\)(F). 도체의 모양·배치와 그 사이 유전체로만 정해진다.",
    "chapters": [
     "conductors-dielectrics#capacitance"
    ]
   },
   {
    "ko": "정전 용량 행렬",
    "en": "capacitance matrix",
    "abbr": "",
    "def": "여러 도체의 전하와 전위를 잇는 계수 \\(Q_i = \\sum_j C_{ij}V_j\\). 대각 성분은 양수, 비대각 성분은 음수이고 대칭이다.",
    "chapters": [
     "boundary-value#extraction"
    ]
   },
   {
    "ko": "정전 차폐",
    "en": "electrostatic shielding",
    "abbr": "",
    "def": "도체로 둘러싼 빈 공간의 전기장이 바깥 전하·장과 무관하게 0이 되는 현상. 패러데이 상자, 동축 케이블의 바깥 도체, 금속 덮개가 이용한다.",
    "chapters": [
     "conductors-dielectrics#conductors"
    ]
   },
   {
    "ko": "정전 평형",
    "en": "electrostatic equilibrium",
    "abbr": "",
    "def": "도체 속 자유 전하가 더 이상 움직이지 않는 상태. 도체 내부 전기장이 0이고 도체 전체가 등전위이며, 남는 전하는 모두 표면에 있다.",
    "chapters": [
     "conductors-dielectrics#conductors"
    ]
   },
   {
    "ko": "정전기 방전",
    "en": "electrostatic discharge, ESD",
    "abbr": "",
    "def": "대전된 물체에 저장된 정전 에너지 \\(\\tfrac12CV^2\\)가 접촉이나 작은 틈을 지나 나노초 안에 한꺼번에 방전되는 현상. 반도체 소자의 산화막·접합 손상 원인이다.",
    "chapters": [
     "electrostatics#energy"
    ]
   },
   {
    "ko": "정합",
    "en": "impedance matching",
    "abbr": "",
    "def": "부하와 선 사이에 무손실 회로를 넣어 선이 보는 임피던스를 \\(Z_0\\)로 만들어 반사를 없애는 일.",
    "chapters": [
     "transmission-lines#matching"
    ]
   },
   {
    "ko": "정합기",
    "en": "matching network, matcher",
    "abbr": "",
    "def": "RF 발전기와 플라스마 전극 사이에서 변하는 부하 임피던스를 50 Ω으로 바꿔 주는 가변 정합 회로. 보통 모터로 돌리는 가변 콘덴서 두 개로 자동 정합한다.",
    "chapters": [
     "transmission-lines#rf-match"
    ]
   },
   {
    "ko": "조화 함수",
    "en": "harmonic function",
    "abbr": "",
    "def": "라플라스 방정식 \\(\\nabla^2f = 0\\)을 만족하는 함수. 영역 안에 극대·극소가 없고 구(원) 위 평균이 중심값과 같다.",
    "chapters": [
     "boundary-value#poisson-laplace"
    ]
   },
   {
    "ko": "좌절된 전반사",
    "en": "frustrated total internal reflection, FTIR",
    "abbr": "",
    "def": "전반사 경계면의 소산파 영역 안에 굴절률이 큰 세 번째 매질을 가져다 대면 빛이 얇은 틈을 건너 새어 나가는 현상. 투과율은 틈 두께에 따라 지수적으로 준다.",
    "chapters": [
     "reflection#tir"
    ]
   },
   {
    "ko": "주기 경계 조건",
    "en": "periodic boundary condition",
    "abbr": "",
    "def": "주기 구조의 한 주기만 계산하고 양쪽 경계의 장을 같게(비스듬한 입사면 위상차를 곱해) 잇는 경계 조건.",
    "chapters": [
     "computational-em#abc"
    ]
   },
   {
    "ko": "준정적 근사",
    "en": "quasi-static approximation",
    "abbr": "",
    "def": "원천의 변화가 구조를 빛이 건너는 시간보다 훨씬 느려 지연을 무시하는 근사. 구조 크기 \\(L\\)이 \\(\\lambda/2\\pi\\)보다 훨씬 작을 때(\\(kL \\ll 1\\)) 성립한다.",
    "chapters": [
     "maxwell-equations#quasistatic"
    ]
   },
   {
    "ko": "줄 열",
    "en": "Joule heating",
    "abbr": "",
    "def": "전류가 흐르는 도체에서 전기장이 운반자에 한 일이 충돌을 거쳐 격자 열로 바뀐 것. 발열 밀도 \\(p = \\mathbf J\\cdot\\mathbf E = J^2/\\sigma\\), 전체 \\(P = I^2R\\).",
    "chapters": [
     "steady-currents#joule-crowding"
    ]
   },
   {
    "ko": "중첩 원리",
    "en": "superposition principle",
    "abbr": "",
    "def": "여러 원천이 함께 만드는 장은 각 원천이 따로 만드는 장의 벡터 합이라는 원리. 맥스웰 방정식과 매질이 선형이기 때문에 성립한다.",
    "chapters": [
     "electrostatics#coulomb"
    ]
   },
   {
    "ko": "지연 시간",
    "en": "retarded time",
    "abbr": "",
    "def": "관측 시각 \\(t\\)에서 원천까지의 전파 시간을 뺀 시각 \\(t - R/u\\). 관측자는 원천의 이 시각 상태만 느낀다.",
    "chapters": [
     "maxwell-equations#retarded"
    ]
   },
   {
    "ko": "지연 퍼텐셜",
    "en": "retarded potentials",
    "abbr": "",
    "def": "원천의 전하·전류를 지연 시간 \\(t - R/u\\)에서 계산해 적분한 퍼텐셜. 로렌츠 게이지 파동 방정식의 인과적 해다.",
    "chapters": [
     "maxwell-equations#retarded"
    ]
   },
   {
    "ko": "지향성",
    "en": "directivity",
    "abbr": "",
    "def": "가장 센 방향의 복사 세기를 등방 평균과 비교한 값 \\(D = 4\\pi U_{max}/P_{rad}\\). 헤르츠 쌍극자 1.5, 반파장 다이폴 1.64이다.",
    "chapters": [
     "radiation#power"
    ]
   },
   {
    "ko": "직렬 종단",
    "en": "series termination",
    "abbr": "",
    "def": "원천 쪽에 직렬 저항을 넣어 \\(R_s + R_t = Z_0\\)로 만들어 원천 반사(\\(\\Gamma_S = 0\\))를 없애는 종단. 직류 전력을 쓰지 않으며 점대점 연결에 쓴다.",
    "chapters": [
     "signal-integrity#bounce"
    ]
   },
   {
    "ko": "직선 편광",
    "en": "linear polarization",
    "abbr": "",
    "def": "두 직교 성분의 위상차가 0 또는 180°라 전기장 끝이 한 선분 위를 오가는 편광.",
    "chapters": [
     "plane-waves#polarization"
    ]
   },
   {
    "ko": "진공 가변 콘덴서",
    "en": "vacuum variable capacitor",
    "abbr": "",
    "def": "진공 속에서 동심 원통 전극의 겹침을 바꿔 용량을 조절하는 고전압·대전류용 콘덴서. RF 정합기의 tune·load 소자로 쓴다.",
    "chapters": [
     "transmission-lines#rf-match"
    ]
   },
   {
    "ko": "차단 감쇠기",
    "en": "waveguide below cutoff",
    "abbr": "",
    "def": "차단 주파수 아래에서 쓰는 짧은 도파관(구멍)으로, 장이 길이당 약 \\(8.686\\,k_c\\) dB씩 소산되는 성질을 이용해 전자파를 막거나 정해진 양만큼 줄인다.",
    "chapters": [
     "waveguides#dispersion"
    ]
   },
   {
    "ko": "차단 밀도",
    "en": "critical density",
    "abbr": "",
    "def": "진동수 \\(f\\)의 전자기파가 더는 전파하지 못하는 전자 밀도 \\(n_c = \\varepsilon_0m\\omega^2/e^2 \\approx 1.24\\times10^{-2}f^2\\) m⁻³. 2.45 GHz에서 \\(7.4\\times10^{16}\\) m⁻³이다.",
    "chapters": [
     "plane-waves#plasma"
    ]
   },
   {
    "ko": "차단 주파수",
    "en": "cutoff frequency",
    "abbr": "",
    "def": "도파관의 한 모드가 진행할 수 있는 가장 낮은 주파수. 그 아래에서는 전파 상수가 허수가 되어 장이 진동 없이 지수적으로 소산된다. 사각 도파관에서 \\(f_{c,mn} = \\tfrac{1}{2\\sqrt{\\mu\\varepsilon}}\\sqrt{(m/a)^2 + (n/b)^2}\\).",
    "chapters": [
     "waveguides#guided"
    ]
   },
   {
    "ko": "차단 파수",
    "en": "cutoff wavenumber",
    "abbr": "",
    "def": "단면의 고유값 문제에서 정해지는 상수 \\(k_c\\)로, \\(k_c^2 = k^2 - \\beta^2\\)이다. 모드의 차단 주파수를 \\(f_c = k_c/(2\\pi\\sqrt{\\mu\\varepsilon})\\)로 정한다.",
    "chapters": [
     "waveguides#guided"
    ]
   },
   {
    "ko": "차동 모드 복사",
    "en": "differential-mode radiation",
    "abbr": "",
    "def": "신호 전류와 귀환 전류가 반대 방향으로 이루는 작은 고리의 복사. 원거리장은 \\(\\approx 1.32\\times10^{-14}f^2AI/r\\)로 고리 넓이와 진동수 제곱에 비례한다.",
    "chapters": [
     "radiation#emi"
    ]
   },
   {
    "ko": "차폐 계수",
    "en": "shielding factor",
    "abbr": "",
    "def": "차폐 바깥 장과 안쪽 장의 비 \\(S = B_0/B_{in}\\). 얇은 원통 껍질에서 \\(S \\approx 1 + \\mu_rt/2R\\)이다.",
    "chapters": [
     "magnetic-materials#boundary"
    ]
   },
   {
    "ko": "차폐 효과",
    "en": "shielding effectiveness (SE)",
    "abbr": "",
    "def": "차폐체가 투과 장을 얼마나 줄이는지를 나타낸 dB 값 \\(SE = 20\\log(E_0/E_t)\\). 판은 흡수 A, 반사 R, 다중 반사 B의 합으로 계산한다.",
    "chapters": [
     "radiation#shielding"
    ]
   },
   {
    "ko": "척도 인자",
    "en": "scale factor (metric coefficient)",
    "abbr": "",
    "def": "곡선 좌표 하나를 미소량 바꿀 때 실제로 움직이는 거리의 배율. 원통 좌표의 \\(\\phi\\) 방향은 \\(\\rho\\), 구 좌표의 \\(\\theta\\)·\\(\\phi\\) 방향은 \\(r\\)·\\(r\\sin\\theta\\)이다.",
    "chapters": [
     "vector-analysis#coordinates"
    ]
   },
   {
    "ko": "첫 처짐",
    "en": "first droop",
    "abbr": "",
    "def": "칩 전류가 갑자기 늘 때 패키지 인덕턴스와 온다이 커패시턴스의 반공진 때문에 수십 ns 안에 생기는 가장 깊은 전원 전압 강하.",
    "chapters": [
     "signal-integrity#pdn"
    ]
   },
   {
    "ko": "최대 에너지곱",
    "en": "maximum energy product",
    "abbr": "",
    "def": "감자 곡선 위에서 \\(-BH\\)의 최댓값 \\((BH)_{\\max}\\)(kJ/m³). 클수록 같은 공극 에너지를 작은 자석으로 얻는다.",
    "chapters": [
     "magnetic-materials#permanent"
    ]
   },
   {
    "ko": "축비",
    "en": "axial ratio",
    "abbr": "",
    "def": "편광 타원의 장축과 단축의 길이 비(AR ≥ 1). 원편광은 1, 직선 편광은 무한대다.",
    "chapters": [
     "plane-waves#polarization"
    ]
   },
   {
    "ko": "침투 깊이",
    "en": "penetration depth",
    "abbr": "",
    "def": "소산파의 장이 경계면에서 \\(1/e\\)로 줄어드는 거리 \\(d = \\lambda_0/(2\\pi\\sqrt{n_1^2\\sin^2\\theta_i - n_2^2})\\). 세기는 \\(d/2\\)에서 \\(1/e\\)이다.",
    "chapters": [
     "reflection#tir"
    ]
   },
   {
    "ko": "켤레 기울기법",
    "en": "conjugate gradient, CG",
    "abbr": "",
    "def": "대칭 양의 정부호 연립 방정식을 행렬–벡터 곱만으로 푸는 크릴로프 반복법. 전처리와 함께 대형 희소 문제에 쓴다.",
    "chapters": [
     "computational-em#fdm"
    ]
   },
   {
    "ko": "켤레 정합",
    "en": "conjugate matching",
    "abbr": "",
    "def": "부하 쪽 입력 임피던스를 발전기 내부 임피던스의 켤레 복소수와 같게 해 부하 전력을 최대로 만드는 조건 \\(Z_{in} = Z_g^*\\).",
    "chapters": [
     "transmission-lines#matching"
    ]
   },
   {
    "ko": "쿠랑 수",
    "en": "Courant number",
    "abbr": "",
    "def": "한 시간 걸음 동안 빛이 가는 거리와 격자 간격의 비 \\(S = c\\Delta t/\\Delta x\\).",
    "chapters": [
     "computational-em#fdtd"
    ]
   },
   {
    "ko": "쿠랑 조건",
    "en": "Courant–Friedrichs–Lewy condition",
    "abbr": "",
    "def": "명시적 시간 전진이 안정하기 위한 시간 간격의 상한. 3차원 FDTD는 \\(\\Delta t \\le 1/(c\\sqrt{\\Delta x^{-2}+\\Delta y^{-2}+\\Delta z^{-2}})\\).",
    "chapters": [
     "computational-em#fdtd"
    ]
   },
   {
    "ko": "쿨롱 게이지",
    "en": "Coulomb gauge",
    "abbr": "",
    "def": "벡터 퍼텐셜의 기울기 자유를 없애려고 \\(\\nabla\\cdot\\mathbf A = 0\\)으로 정하는 조건. 정자기에서 \\(\\mathbf A\\)의 각 성분이 푸아송 방정식을 따르게 한다.",
    "chapters": [
     "magnetostatics#vector-potential"
    ]
   },
   {
    "ko": "쿨롱 법칙",
    "en": "Coulomb's law",
    "abbr": "",
    "def": "두 점전하 사이의 힘이 전하의 곱에 비례하고 거리의 제곱에 반비례하며 두 전하를 잇는 직선 방향이라는 법칙. \\(\\mathbf F_{12} = Q_1Q_2\\hat{\\mathbf R}_{12}/4\\pi\\varepsilon_0R_{12}^2\\).",
    "chapters": [
     "electrostatics#coulomb"
    ]
   },
   {
    "ko": "타원 편광",
    "en": "elliptical polarization",
    "abbr": "",
    "def": "직선 편광과 원편광이 아닌 일반적인 편광. 기울기 \\(\\psi\\), 축비, 감긴 방향으로 나타낸다.",
    "chapters": [
     "plane-waves#polarization"
    ]
   },
   {
    "ko": "투과 계수",
    "en": "transmission coefficient",
    "abbr": "",
    "def": "경계면에서 투과파 전기장과 입사파 전기장의 비. 수직 입사에서 \\(\\tau = 2\\eta_2/(\\eta_2+\\eta_1) = 1+\\Gamma\\)이며 1보다 클 수 있다.",
    "chapters": [
     "reflection#normal"
    ]
   },
   {
    "ko": "투과율",
    "en": "transmittance",
    "abbr": "",
    "def": "입사 전력 가운데 경계면을 건너가는 비율. 무손실 수직 입사에서 \\(T = (\\eta_1/\\eta_2)|\\tau|^2 = 1-R\\).",
    "chapters": [
     "reflection#normal"
    ]
   },
   {
    "ko": "투과파",
    "en": "transmitted wave",
    "abbr": "",
    "def": "경계면을 지나 두 번째 매질로 진행하는 파동. 수직 입사에서 진폭은 입사파의 \\(\\tau = 1+\\Gamma\\)배다.",
    "chapters": [
     "reflection#normal"
    ]
   },
   {
    "ko": "투자율",
    "en": "permeability",
    "abbr": "",
    "def": "선형 매질에서 \\(\\mathbf B = \\mu\\mathbf H\\)의 비례 상수 \\(\\mu = \\mu_0(1+\\chi_m)\\). 자속이 그 물질을 얼마나 쉽게 지나는지를 나타낸다.",
    "chapters": [
     "magnetic-materials#h-field"
    ]
   },
   {
    "ko": "특성 임피던스",
    "en": "characteristic impedance",
    "abbr": "",
    "def": "한 방향으로만 진행하는 파동의 전압과 전류의 비 \\(Z_0 = \\sqrt{(R + j\\omega L)/(G + j\\omega C)}\\). 무손실이면 \\(\\sqrt{L/C}\\)이고 선의 단면만으로 정해진다.",
    "chapters": [
     "transmission-lines#distributed"
    ]
   },
   {
    "ko": "특성 행렬",
    "en": "characteristic matrix",
    "abbr": "",
    "def": "한 층의 위·아래 경계면의 접선 장 \\((E, H)\\)를 잇는 2×2 행렬 \\([\\cos\\delta,\\ j\\sin\\delta/y;\\ jy\\sin\\delta,\\ \\cos\\delta]\\). 층마다 곱해 다층막을 푼다.",
    "chapters": [
     "reflection#tmm"
    ]
   },
   {
    "ko": "특이점",
    "en": "singularity",
    "abbr": "",
    "def": "해나 그 미분이 무한대로 가거나 매끈하지 않은 점. 도체 모서리에서 전기장은 \\(r^{\\pi/\\beta - 1}\\)로 발산한다.",
    "chapters": [
     "computational-em#fdm"
    ]
   },
   {
    "ko": "파동 방정식",
    "en": "wave equation",
    "abbr": "",
    "def": "무원천 매질의 맥스웰 방정식에서 얻는 \\(\\nabla^2\\mathbf E - \\mu\\varepsilon\\,\\partial^2\\mathbf E/\\partial t^2 = 0\\). 장이 속력 \\(1/\\sqrt{\\mu\\varepsilon}\\)로 퍼져 나가는 파동임을 보인다.",
    "chapters": [
     "plane-waves#wave-equation"
    ]
   },
   {
    "ko": "파동 임피던스",
    "en": "wave impedance",
    "abbr": "",
    "def": "모드의 횡 전기장과 횡 자기장의 비. \\(Z_{TE} = \\eta/\\sqrt{1 - (f_c/f)^2}\\), \\(Z_{TM} = \\eta\\sqrt{1 - (f_c/f)^2}\\)이며 차단 아래에서는 순허수가 된다.",
    "chapters": [
     "waveguides#dispersion"
    ]
   },
   {
    "ko": "파셴 법칙",
    "en": "Paschen's law",
    "abbr": "",
    "def": "기체의 방전 개시 전압이 압력과 전극 간격의 곱 \\(pd\\)만의 함수라는 법칙. 곡선은 \\(pd \\approx 1\\ \\text{Torr}\\cdot\\text{cm}\\) 근처에서 최소(공기 약 330 V)를 가진다.",
    "chapters": [
     "conductors-dielectrics#breakdown"
    ]
   },
   {
    "ko": "파속",
    "en": "wave packet",
    "abbr": "",
    "def": "진동수가 좁은 띠에 몰린 성분들이 겹쳐 공간적으로 국한된 파동 묶음. 실제 신호 펄스이며 군속도로 움직인다.",
    "chapters": [
     "plane-waves#group-velocity"
    ]
   },
   {
    "ko": "파수",
    "en": "wavenumber",
    "abbr": "",
    "def": "단위 길이당 위상 변화 \\(k = \\omega\\sqrt{\\mu\\varepsilon} = 2\\pi/\\lambda\\)(rad/m). 무손실 매질에서는 위상 상수와 같다.",
    "chapters": [
     "plane-waves#wave-equation"
    ]
   },
   {
    "ko": "패러데이 법칙",
    "en": "Faraday's law",
    "abbr": "",
    "def": "닫힌 경로의 기전력은 그 경로가 둘러싼 자기 선속의 시간 변화율에 음의 부호를 붙인 것과 같다는 법칙. 미분형은 \\(\\nabla\\times\\mathbf E = -\\partial\\mathbf B/\\partial t\\)이다.",
    "chapters": [
     "induction#faraday"
    ]
   },
   {
    "ko": "패러데이 차폐",
    "en": "Faraday shield",
    "abbr": "",
    "def": "ICP 코일과 유전체 창 사이에 넣는, 반지름 방향 슬릿이 난 접지 금속판. 와전류 경로를 끊어 자기장은 통과시키고 용량성 전기장은 막는다.",
    "chapters": [
     "induction#transformer"
    ]
   },
   {
    "ko": "패턴 곱셈",
    "en": "pattern multiplication",
    "abbr": "",
    "def": "같은 소자로 된 배열의 원거리 패턴이 소자 하나의 패턴과 배열 인자의 곱이라는 성질.",
    "chapters": [
     "radiation#arrays"
    ]
   },
   {
    "ko": "퍼짐 저항",
    "en": "spreading resistance",
    "abbr": "",
    "def": "작은 접점에서 넓은 시료로 전류가 퍼져 나가며 생기는 저항. 반지름 \\(a\\)인 원판 접점은 \\(\\rho/4a\\), 반구 접점은 \\(\\rho/2\\pi a\\)이다.",
    "chapters": [
     "steady-currents#resistance"
    ]
   },
   {
    "ko": "펄스 기저",
    "en": "pulse basis",
    "abbr": "",
    "def": "조각마다 상수인 기저 함수. 모멘트 법에서 조각별 전하 밀도를 상수로 두는 가장 단순한 선택이다.",
    "chapters": [
     "computational-em#mom"
    ]
   },
   {
    "ko": "펄스 응답",
    "en": "pulse response",
    "abbr": "",
    "def": "비트 하나 길이(1 UI)의 펄스를 채널에 넣었을 때 받는 쪽에서 나오는 파형. UI 간격의 표본값(커서)이 부호간 간섭의 크기를 정한다.",
    "chapters": [
     "signal-integrity#lossy"
    ]
   },
   {
    "ko": "페이저",
    "en": "phasor",
    "abbr": "",
    "def": "사인 진동의 진폭과 위상을 담은 복소수. \\(a(t) = \\mathrm{Re}\\{\\tilde a\\,e^{j\\omega t}\\}\\)로 시간 신호와 이어진다.",
    "chapters": [
     "maxwell-equations#phasor"
    ]
   },
   {
    "ko": "편광",
    "en": "polarization",
    "abbr": "",
    "def": "한 점에서 전기장 벡터의 끝이 시간에 따라 그리는 궤적의 모양. 직교 두 성분의 진폭비와 위상차로 정해지며 직선·원·타원 편광으로 나뉜다.",
    "chapters": [
     "plane-waves#polarization"
    ]
   },
   {
    "ko": "평균값 정리",
    "en": "mean value theorem",
    "abbr": "",
    "def": "조화 함수의 한 점의 값은 그 점을 중심으로 한 임의의 구(2차원이면 원) 위 값의 평균과 같다는 성질.",
    "chapters": [
     "boundary-value#poisson-laplace"
    ]
   },
   {
    "ko": "포인팅 벡터",
    "en": "Poynting vector",
    "abbr": "",
    "def": "전자기 에너지 흐름의 밀도 \\(\\mathbf S = \\mathbf E\\times\\mathbf H\\)(W/m²). 크기는 단위 넓이를 지나는 일률, 방향은 에너지가 흐르는 방향이다.",
    "chapters": [
     "maxwell-equations#poynting"
    ]
   },
   {
    "ko": "포인팅 정리",
    "en": "Poynting's theorem",
    "abbr": "",
    "def": "닫힌 면으로 들어오는 전자기 에너지 일률이 안의 장 에너지 증가율과 전하에 해 준 일률(줄 열 등)의 합과 같다는 에너지 보존 법칙.",
    "chapters": [
     "maxwell-equations#poynting"
    ]
   },
   {
    "ko": "표면 임피던스",
    "en": "surface impedance",
    "abbr": "",
    "def": "도체 표면의 접선 전기장과 접선 자기장의 비 \\(Z_s = E_t/H_t\\). 두꺼운 양도체에서는 \\(\\eta_c = (1+j)/\\sigma\\delta\\)와 같다.",
    "chapters": [
     "plane-waves#good-conductors"
    ]
   },
   {
    "ko": "표면 저항",
    "en": "surface resistance",
    "abbr": "",
    "def": "표면 임피던스의 실수부 \\(R_s = 1/\\sigma\\delta = \\sqrt{\\pi f\\mu/\\sigma}\\). 단위 넓이당 도체 손실은 \\(\\tfrac12|H_t|^2R_s\\)이다.",
    "chapters": [
     "plane-waves#good-conductors"
    ]
   },
   {
    "ko": "표면 전류 밀도",
    "en": "surface current density",
    "abbr": "",
    "def": "두께가 0인 면에 흐르는 단위 폭당 전류 \\(\\mathbf J_s\\)(A/m). 경계에서 접선 자기장의 불연속 \\(\\hat{\\mathbf n}\\times(\\mathbf H_1 - \\mathbf H_2) = \\mathbf J_s\\)를 만든다.",
    "chapters": [
     "maxwell-equations#boundary"
    ]
   },
   {
    "ko": "표피 깊이",
    "en": "skin depth",
    "abbr": "",
    "def": "교류 장과 전류가 도체 속으로 들어가며 진폭이 \\(1/e\\)로 주는 깊이 \\(\\delta = 1/\\sqrt{\\pi f\\mu\\sigma}\\). 발열의 86%가 이 깊이 안에서 일어난다.",
    "chapters": [
     "induction#eddy"
    ]
   },
   {
    "ko": "푸리에 급수",
    "en": "Fourier series",
    "abbr": "",
    "def": "주기 함수나 구간 위의 함수를 서로 직교하는 사인·코사인 함수의 합으로 나타낸 급수. 계수는 직교성으로 적분해 구한다.",
    "chapters": [
     "boundary-value#cartesian"
    ]
   },
   {
    "ko": "푸아송 방정식",
    "en": "Poisson's equation",
    "abbr": "",
    "def": "전하 밀도와 정전 퍼텐셜을 잇는 2계 편미분 방정식 \\(\\nabla\\cdot(\\varepsilon\\nabla V) = -\\rho_v\\). 유전율이 균일하면 \\(\\nabla^2V = -\\rho_v/\\varepsilon\\)이다.",
    "chapters": [
     "boundary-value#poisson-laplace"
    ]
   },
   {
    "ko": "품질 계수",
    "en": "quality factor",
    "abbr": "",
    "def": "공진기가 저장한 에너지와 잃는 전력의 비 \\(Q = \\omega_0 W/P_{loss}\\). 반치 전폭은 \\(f_0/Q\\), 에너지 감쇠 시간은 \\(Q/\\omega_0\\)이다.",
    "chapters": [
     "waveguides#cavity"
    ]
   },
   {
    "ko": "프레넬 식",
    "en": "Fresnel equations",
    "abbr": "",
    "def": "s·p 편광 각각에 대해 경계면의 반사·투과 계수를 입사각과 굴절률로 주는 식. 예: \\(r_s = (n_1\\cos\\theta_i - n_2\\cos\\theta_t)/(n_1\\cos\\theta_i + n_2\\cos\\theta_t)\\).",
    "chapters": [
     "reflection#oblique"
    ]
   },
   {
    "ko": "프리스 전송 식",
    "en": "Friis transmission equation",
    "abbr": "",
    "def": "자유 공간 원거리 링크의 수신 전력 식 \\(P_r/P_t = G_tG_r(\\lambda/4\\pi R)^2\\).",
    "chapters": [
     "radiation#friis"
    ]
   },
   {
    "ko": "프린지 용량",
    "en": "fringing capacitance",
    "abbr": "",
    "def": "평행판 근사 바깥, 도체의 모서리·옆면·윗면에서 휘어 나가는 장이 만드는 정전 용량. 미세 배선에서는 평행판 몫보다 크다.",
    "chapters": [
     "boundary-value#extraction"
    ]
   },
   {
    "ko": "플라스마 진동수",
    "en": "plasma frequency",
    "abbr": "",
    "def": "자유 전자 무리가 이온 배경에 대해 진동하는 고유 각진동수 \\(\\omega_p = \\sqrt{ne^2/\\varepsilon_0m}\\), \\(f_p \\approx 8.98\\sqrt{n}\\) Hz. 이보다 낮은 진동수의 파동은 플라스마에 들어가지 못한다.",
    "chapters": [
     "plane-waves#plasma"
    ]
   },
   {
    "ko": "플로케 정리",
    "en": "Floquet theorem",
    "abbr": "",
    "def": "주기 구조 속의 장은 입사파의 위상 기울기와 주기 함수의 곱이라는 정리. 장을 띄엄띄엄한 회절 차수의 합으로 쓸 수 있다.",
    "chapters": [
     "computational-em#rcwa"
    ]
   },
   {
    "ko": "헤르츠 쌍극자",
    "en": "Hertzian dipole",
    "abbr": "",
    "def": "길이 \\(\\Delta l\\)이 파장보다 훨씬 짧고 전류가 균일한 가상의 도선 조각. 모든 안테나 이론의 기본 단위이며 복사 저항은 \\(80\\pi^2(\\Delta l/\\lambda)^2\\)이다.",
    "chapters": [
     "radiation#hertzian"
    ]
   },
   {
    "ko": "헬름홀츠 방정식",
    "en": "Helmholtz equation",
    "abbr": "",
    "def": "시간 조화장(\\(e^{j\\omega t}\\))에서 파동 방정식이 되는 \\(\\nabla^2\\tilde{\\mathbf E} + k^2\\tilde{\\mathbf E} = 0\\). 손실 매질에서는 \\(k^2\\)를 \\(-\\gamma^2\\)로 바꾼다.",
    "chapters": [
     "plane-waves#wave-equation"
    ]
   },
   {
    "ko": "헬름홀츠 정리",
    "en": "Helmholtz theorem",
    "abbr": "",
    "def": "멀리서 충분히 빨리 0이 되는 벡터장은 발산과 회전으로 하나로 정해지며 \\(\\mathbf F = -\\nabla\\Phi + \\nabla\\times\\mathbf A\\)로 나뉜다는 정리. 맥스웰 방정식이 장의 발산과 회전을 주는 꼴인 이유다.",
    "chapters": [
     "vector-analysis#laplacian-delta"
    ]
   },
   {
    "ko": "헬름홀츠 코일",
    "en": "Helmholtz coil",
    "abbr": "",
    "def": "같은 반지름 \\(R\\)의 두 원형 코일을 간격 \\(R\\)로 놓고 같은 방향 전류를 흘려 가운데에 매우 균일한 자기장을 만드는 배치. 중심 장은 \\((4/5)^{3/2}\\mu_0NI/R\\).",
    "chapters": [
     "magnetostatics#ampere"
    ]
   },
   {
    "ko": "홀 계수",
    "en": "Hall coefficient",
    "abbr": "",
    "def": "홀 전기장과 전류 밀도·자기장의 비 \\(R_H = E_y/J_xB_z = 1/nq\\). 부호가 캐리어의 종류를, 크기가 농도를 알려 준다.",
    "chapters": [
     "magnetostatics#lorentz"
    ]
   },
   {
    "ko": "홀 효과",
    "en": "Hall effect",
    "abbr": "",
    "def": "전류가 흐르는 도체에 수직 자기장을 걸면 캐리어가 한쪽 옆면으로 쏠려 전류와 자기장 모두에 수직인 전기장(홀 전압)이 생기는 현상.",
    "chapters": [
     "magnetostatics#lorentz"
    ]
   },
   {
    "ko": "회전",
    "en": "curl",
    "abbr": "",
    "def": "벡터장이 한 점 둘레를 얼마나 맴도는지를 단위 넓이당 순환으로 잰 벡터 \\(\\nabla\\times\\mathbf F\\). 방향은 순환이 최대인 고리 면의 법선이고, 유체 속 바람개비는 그 절반의 각속도로 돈다.",
    "chapters": [
     "vector-analysis#curl"
    ]
   },
   {
    "ko": "회절 차수",
    "en": "diffraction order",
    "abbr": "",
    "def": "주기 구조가 만드는 평면파 성분. \\(m\\)차의 가로 파수는 \\(k_0(n\\sin\\theta + m\\lambda/\\Lambda)\\)이다.",
    "chapters": [
     "computational-em#rcwa"
    ]
   },
   {
    "ko": "흡수 경계 조건",
    "en": "absorbing boundary condition, ABC",
    "abbr": "",
    "def": "유한한 계산 영역의 가장자리에서 나가는 파동을 반사 없이 삼키도록 만든 경계 조건.",
    "chapters": [
     "computational-em#abc"
    ]
   },
   {
    "ko": "히스테리시스",
    "en": "hysteresis",
    "abbr": "",
    "def": "자화가 현재의 장뿐 아니라 이전 이력에 따라 달라져 B–H 곡선이 고리를 그리는 현상. 자구벽이 결함에 걸렸다 풀리며 생긴다.",
    "chapters": [
     "magnetic-materials#hysteresis"
    ]
   },
   {
    "ko": "히스테리시스 손실",
    "en": "hysteresis loss",
    "abbr": "",
    "def": "B–H 고리를 한 바퀴 돌 때마다 고리 넓이 \\(\\oint H\\,dB\\)만큼 열로 사라지는 에너지. 전력은 \\(fV\\oint H\\,dB\\)로 주파수에 비례한다.",
    "chapters": [
     "magnetic-materials#hysteresis"
    ]
   }
  ]
 }
});
