/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "fluid-mechanics",
 "title": "유체역학",
 "en": "Fluid Mechanics",
 "field": "mechanics",
 "level": "대학 2–3학년 · 공학 유체역학",
 "status": "writing",
 "description": "유체의 성질과 정역학, 베르누이 식, 검사 체적 해석, 나비에–스토크스와 퍼텐셜 유동, 차원 해석, 관 유동과 무디 선도, 경계층과 항력·양력, 개수로·압축성 유동, 펌프까지 — 흐름을 직접 그리고 흘려 보며 익히는 인터랙티브 공학 교과서.",
 "accent": {
  "light": "#0b7285",
  "dark": "#3bc9db",
  "light2": "#c2410c",
  "dark2": "#ff8a4c"
 },
 "mark": "<path d=\"M5 12c3-3 6-3 9 0s6 3 9 0\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M5 18c3-3 6-3 9 0s6 3 9 0\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M5 24c3-3 6-3 9 0s6 3 9 0\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\".6\"/>",
 "parts": [
  {
   "title": "제1부 유체와 정역학",
   "chapters": [
    {
     "slug": "fluid-properties",
     "num": "01",
     "title": "유체의 성질",
     "en": "Properties of Fluids",
     "desc": "연속체 가정, 밀도와 비중량, 점성과 뉴턴 유체, 비뉴턴 유체, 압축성과 체적 탄성 계수, 표면 장력과 모세관 현상, 증기압과 공동 현상.",
     "tags": [
      "점성",
      "표면 장력"
     ]
    },
    {
     "slug": "fluid-statics",
     "num": "02",
     "title": "유체 정역학",
     "en": "Fluid Statics",
     "desc": "압력과 정수압 분포, 마노미터, 잠긴 평면·곡면에 작용하는 힘, 부력과 부양체의 안정성(메타센터), 강체 운동하는 유체.",
     "tags": [
      "압력",
      "부력"
     ]
    },
    {
     "slug": "bernoulli",
     "num": "03",
     "title": "베르누이 방정식",
     "en": "The Bernoulli Equation",
     "desc": "유선을 따른 뉴턴 제2법칙, 정압·동압·정체압, 피토관, 벤투리 유량계, 자유 분류와 오리피스, 에너지선과 수력 구배선, 적용 한계.",
     "tags": [
      "베르누이",
      "피토관"
     ]
    }
   ]
  },
  {
   "title": "제2부 유동 해석의 틀",
   "chapters": [
    {
     "slug": "fluid-kinematics",
     "num": "04",
     "title": "유체 운동학",
     "en": "Fluid Kinematics",
     "desc": "라그랑주·오일러 기술, 속도장과 물질 도함수, 유선·유적선·유맥선, 변형률과 와도, 레이놀즈 수송 정리.",
     "tags": [
      "유선",
      "와도"
     ]
    },
    {
     "slug": "control-volume",
     "num": "05",
     "title": "검사 체적 해석",
     "en": "Control Volume Analysis",
     "desc": "질량 보존, 선운동량 방정식(분류·엘보·노즐에 작용하는 힘), 각운동량과 스프링클러, 에너지 방정식과 수두 손실.",
     "tags": [
      "운동량",
      "검사 체적"
     ]
    },
    {
     "slug": "differential-analysis",
     "num": "06",
     "title": "미분 해석과 퍼텐셜 유동",
     "en": "Differential Analysis and Potential Flow",
     "desc": "연속 방정식, 유동 함수, 오일러·나비에–스토크스 방정식, 쿠에트·푸아죄유 정확해, 퍼텐셜 유동의 중첩(균일류·원천·와류·쌍극자), 원주 주위 유동과 양력.",
     "tags": [
      "나비에–스토크스",
      "퍼텐셜 유동"
     ]
    },
    {
     "slug": "dimensional-analysis",
     "num": "07",
     "title": "차원 해석과 상사",
     "en": "Dimensional Analysis and Similitude",
     "desc": "차원의 동차성, 버킹엄 Π 정리와 반복 변수법, 주요 무차원 수(Re·Fr·Ma·We·Eu), 모형 실험과 상사 법칙.",
     "tags": [
      "Π 정리",
      "모형 실험"
     ]
    }
   ]
  },
  {
   "title": "제3부 점성 유동",
   "chapters": [
    {
     "slug": "pipe-flow",
     "num": "08",
     "title": "관 내 점성 유동",
     "en": "Viscous Flow in Pipes",
     "desc": "층류와 난류, 입구 길이, 하겐–푸아죄유 유동, 난류 속도 분포, 다르시–바이스바흐 식과 무디 선도, 부차 손실, 관로·관망 해석.",
     "tags": [
      "무디 선도",
      "손실"
     ]
    },
    {
     "slug": "external-flow",
     "num": "09",
     "title": "외부 유동: 경계층, 항력, 양력",
     "en": "External Flow: Boundary Layers, Drag, and Lift",
     "desc": "경계층 개념과 두께, 블라시우스 해와 운동량 적분, 박리, 마찰·압력 항력과 항력 계수, 종단 속도, 에어포일의 양력과 실속.",
     "tags": [
      "경계층",
      "양력"
     ]
    }
   ]
  },
  {
   "title": "제4부 응용 유동",
   "chapters": [
    {
     "slug": "open-channel",
     "num": "10",
     "title": "개수로 유동",
     "en": "Open-Channel Flow",
     "desc": "프루드 수와 표면파, 비에너지와 임계 수심, 매닝 식과 등류, 수력 도약, 위어와 수문.",
     "tags": [
      "프루드 수",
      "수력 도약"
     ]
    },
    {
     "slug": "compressible-flow",
     "num": "11",
     "title": "압축성 유동 입문",
     "en": "Introduction to Compressible Flow",
     "desc": "음속과 마하 수, 정체 상태량, 등엔트로피 유동과 노즐(초크), 수직 충격파, 마하 원뿔과 경사 충격파 개관.",
     "tags": [
      "마하 수",
      "충격파"
     ]
    },
    {
     "slug": "turbomachinery",
     "num": "12",
     "title": "터보 기계",
     "en": "Turbomachinery",
     "desc": "펌프와 터빈의 분류, 오일러 터보 기계 방정식과 속도 삼각형, 펌프 성능 곡선과 작동점, NPSH와 공동 현상, 상사 법칙과 비속도, 수차·풍력 터빈.",
     "tags": [
      "펌프",
      "터빈"
     ]
    }
   ]
  },
  {
   "title": "부록",
   "appendix": true,
   "chapters": [
    {
     "slug": "property-tables",
     "num": "A",
     "title": "유체 물성과 자료",
     "en": "Fluid Properties and Data",
     "desc": "물·공기의 온도별 밀도·점성, 표준 대기, 단위 환산, 무디 선도와 등엔트로피·충격파 표를 계산기로 찾는다.",
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
  "fluid-properties": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 11,
   "drills": 3,
   "minis": 5,
   "tangles": 5,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "fluid-statics": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 10,
   "drills": 3,
   "minis": 4,
   "tangles": 6,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "bernoulli": {
   "problems": 16,
   "examples": 8,
   "sims": 5,
   "figures": 11,
   "drills": 2,
   "minis": 5,
   "tangles": 6,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "fluid-kinematics": {
   "problems": 17,
   "examples": 7,
   "sims": 6,
   "figures": 11,
   "drills": 2,
   "minis": 4,
   "tangles": 4,
   "steps": 4,
   "predicts": 4,
   "hero": 1
  },
  "control-volume": {
   "problems": 17,
   "examples": 8,
   "sims": 5,
   "figures": 11,
   "drills": 3,
   "minis": 5,
   "tangles": 6,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "differential-analysis": {
   "problems": 16,
   "examples": 8,
   "sims": 5,
   "figures": 11,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "dimensional-analysis": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 11,
   "drills": 3,
   "minis": 5,
   "tangles": 5,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "pipe-flow": {
   "problems": 16,
   "examples": 8,
   "sims": 5,
   "figures": 11,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "external-flow": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 12,
   "drills": 2,
   "minis": 7,
   "tangles": 4,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "open-channel": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 12,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 4,
   "predicts": 5,
   "hero": 1
  },
  "compressible-flow": {
   "problems": 16,
   "examples": 10,
   "sims": 7,
   "figures": 9,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "turbomachinery": {
   "problems": 16,
   "examples": 8,
   "sims": 5,
   "figures": 10,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "property-tables": {
   "problems": 10,
   "examples": 0,
   "sims": 6,
   "figures": 2,
   "drills": 1,
   "minis": 1,
   "tangles": 3,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  },
  "glossary": {
   "problems": 35,
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
 "published": 14,
 "total": 14,
 "url": "https://science.euiyun.com/fluid-mechanics/",
 "glossary": {
  "version": 1,
  "terms": [
   {
    "ko": "θ–β–M 관계",
    "en": "theta–beta–Mach relation",
    "abbr": "",
    "def": "경사 충격파에서 꺾임각 \\(\\theta\\), 충격파 각 \\(\\beta\\), 상류 마하 수 \\(\\mathrm{Ma}_1\\)를 잇는 관계식. 주어진 \\(\\theta\\)와 \\(\\mathrm{Ma}_1\\)에 대해 약한 해와 강한 해 두 개의 \\(\\beta\\)가 있고, 최대 꺾임각을 넘으면 해가 없다.",
    "chapters": [
     "compressible-flow#oblique"
    ]
   },
   {
    "ko": "가속도장",
    "en": "acceleration field",
    "abbr": "",
    "def": "유체 입자의 가속도를 위치와 시간의 함수로 나타낸 장. 오일러 기술에서는 물질 도함수 \\(\\vec a = D\\vec V/Dt\\)로 구한다.",
    "chapters": [
     "fluid-kinematics#material-derivative"
    ]
   },
   {
    "ko": "강도 상태량",
    "en": "intensive property",
    "abbr": "",
    "def": "온도·압력·속도처럼 계의 크기와 무관한 상태량. 레이놀즈 수송 정리에서는 종량 상태량 \\(B\\)의 단위 질량당 값 \\(b = dB/dm\\)으로 쓴다.",
    "chapters": [
     "fluid-kinematics#rtt"
    ]
   },
   {
    "ko": "강체 운동",
    "en": "rigid-body motion",
    "abbr": "",
    "def": "용기와 함께 일정하게 가속하거나 회전해 유체 입자들 사이에 상대 운동이 없는 상태. 전단 응력이 없으므로 압력 기울기와 중력(관성력)만으로 압력 분포가 정해진다.",
    "chapters": [
     "fluid-statics#rigid"
    ]
   },
   {
    "ko": "개수로 유동",
    "en": "open-channel flow",
    "abbr": "",
    "def": "액체가 대기와 맞닿은 자유 표면을 가진 채 흐르는 유동. 강, 수로, 배수관처럼 중력이 흐름을 일으키고 수심이 해의 일부가 된다.",
    "chapters": [
     "open-channel#classification"
    ]
   },
   {
    "ko": "검사 체적",
    "en": "control volume, CV",
    "abbr": "",
    "def": "물질이 끊임없이 드나드는, 공간에 고정되거나 정해진 방식으로 움직이는 해석 영역(CV). 펌프·노즐 하나처럼 관심 있는 영역에 보존 법칙을 적용할 때 쓴다.",
    "chapters": [
     "fluid-kinematics#rtt"
    ]
   },
   {
    "ko": "검사 표면",
    "en": "control surface, CS",
    "abbr": "",
    "def": "검사 체적의 경계면(CS). 질량·운동량·에너지가 이 면을 지나 드나드는 양을 센다.",
    "chapters": [
     "control-volume#rtt"
    ]
   },
   {
    "ko": "겉보기 점성",
    "en": "apparent viscosity",
    "abbr": "",
    "def": "비뉴턴 유체에서 유변 곡선 위 한 점의 전단 응력을 변형률로 나눈 값 \\(\\eta = \\tau/(du/dy)\\). 변형률에 따라 달라진다.",
    "chapters": [
     "fluid-properties#non-newtonian"
    ]
   },
   {
    "ko": "경계층",
    "en": "boundary layer",
    "abbr": "",
    "def": "벽의 점착 조건 때문에 속도가 0에서 바깥 흐름 속도까지 변하는 벽 가까이의 얇은 층. 점성의 영향이 이 층 안에 갇혀 있다.",
    "chapters": [
     "pipe-flow#regimes"
    ]
   },
   {
    "ko": "경계층 방정식",
    "en": "boundary-layer equations",
    "abbr": "",
    "def": "경계층이 얇다는(\\(\\delta \\ll x\\)) 사실로 나비에–스토크스 방정식을 줄인 프란틀의 식. 흐름 방향 확산 항이 빠지고 층을 가로지르는 압력이 일정하다(\\(\\partial p/\\partial y \\approx 0\\)).",
    "chapters": [
     "external-flow#laminar"
    ]
   },
   {
    "ko": "경사 충격파",
    "en": "oblique shock",
    "abbr": "",
    "def": "초음속 유동이 쐐기나 압축 코너에서 각 \\(\\theta\\)만큼 꺾일 때 유동에 비스듬히 서는 충격파. 수직 성분 \\(\\mathrm{Ma}_1\\sin\\beta\\)에 수직 충격파 관계를 적용한다.",
    "chapters": [
     "compressible-flow#oblique"
    ]
   },
   {
    "ko": "계",
    "en": "system",
    "abbr": "",
    "def": "정해진 물질 덩어리. 질량 보존, 뉴턴 제2법칙, 열역학 제1법칙은 본래 계에 대해 쓰이며, 레이놀즈 수송 정리가 이를 검사 체적 꼴로 옮긴다.",
    "chapters": [
     "fluid-kinematics#rtt"
    ]
   },
   {
    "ko": "계기 압력",
    "en": "gage pressure",
    "abbr": "",
    "def": "주위 대기압을 0으로 놓고 잰 압력 \\(p_\\text{gage} = p_\\text{abs} - p_\\text{atm}\\). 대부분의 압력계가 이 값을 가리킨다.",
    "chapters": [
     "fluid-statics#pressure"
    ]
   },
   {
    "ko": "계수",
    "en": "rank",
    "abbr": "",
    "def": "차원 행렬의 계수(rank). 버킹엄 Π 정리에서 \\(k = n - j\\)의 \\(j\\)이며, 보통 문제에 나타나는 기본 차원의 수와 같다.",
    "chapters": [
     "dimensional-analysis#pi-theorem"
    ]
   },
   {
    "ko": "공동 수",
    "en": "cavitation number",
    "abbr": "",
    "def": "국소 압력이 증기압보다 얼마나 높은지를 동압으로 나눈 무차원 수 \\(\\mathrm{Ca} = (p - p_v)/(\\tfrac12\\rho V^2)\\). 작을수록 공동 현상이 일어나기 쉽다.",
    "chapters": [
     "fluid-properties#vapor-pressure"
    ]
   },
   {
    "ko": "공동 현상",
    "en": "cavitation",
    "abbr": "",
    "def": "흐르는 액체의 국소 압력이 증기압 아래로 떨어져 증기 기포가 생겼다가 압력이 높은 곳에서 터지는 현상. 소음·진동·표면 침식을 일으킨다.",
    "chapters": [
     "fluid-properties#vapor-pressure"
    ]
   },
   {
    "ko": "공액 수심",
    "en": "conjugate/sequent depths",
    "abbr": "",
    "def": "수력 도약 앞뒤의 두 수심 \\(y_1\\)(사류)과 \\(y_2\\)(상류). 운동량 보존에서 \\(y_2/y_1 = \\tfrac12(\\sqrt{1 + 8\\mathrm{Fr}_1^2} - 1)\\)로 이어진다.",
    "chapters": [
     "open-channel#hydraulic-jump"
    ]
   },
   {
    "ko": "관망",
    "en": "pipe network",
    "abbr": "",
    "def": "상수도처럼 관이 고리를 이루는 관로 계통. 각 절점에서 유량이 보존되고, 각 고리를 한 바퀴 돈 수두 손실의 합이 0이어야 한다.",
    "chapters": [
     "pipe-flow#systems"
    ]
   },
   {
    "ko": "광정 위어",
    "en": "broad-crested weir",
    "abbr": "",
    "def": "마루가 길어 그 위의 흐름이 수평한 평행류가 되는 위어. 하류가 낮으면 마루 위에서 임계 상태가 되어 상류 수두만으로 유량이 정해진다.",
    "chapters": [
     "open-channel#weirs"
    ]
   },
   {
    "ko": "교대 수심",
    "en": "alternate depths",
    "abbr": "",
    "def": "같은 비에너지 \\(E_s > E_\\text{min}\\)과 유량에 대응하는 두 수심. 하나는 깊고 느린 상류(Fr < 1), 다른 하나는 얕고 빠른 사류(Fr > 1)다.",
    "chapters": [
     "open-channel#specific-energy"
    ]
   },
   {
    "ko": "구성 방정식",
    "en": "constitutive equation",
    "abbr": "",
    "def": "응력과 변형률(속도 기울기)의 관계를 주는 식. 코시 운동 방정식에 뉴턴 유체의 구성 방정식을 넣으면 나비에–스토크스 방정식이 된다.",
    "chapters": [
     "differential-analysis#navier-stokes"
    ]
   },
   {
    "ko": "국소 가속도",
    "en": "local acceleration",
    "abbr": "",
    "def": "한 고정점에서 속도가 시간에 따라 변해 생기는 가속도 \\(\\partial\\vec V/\\partial t\\). 정상 유동에서는 0이다.",
    "chapters": [
     "fluid-kinematics#material-derivative"
    ]
   },
   {
    "ko": "국소 레이놀즈 수",
    "en": "local Reynolds number",
    "abbr": "",
    "def": "평판 앞전에서 잰 거리 \\(x\\)를 길이로 쓴 레이놀즈 수 \\(Re_x = Ux/\\nu\\). 경계층 두께와 천이 위치를 판단할 때 쓴다.",
    "chapters": [
     "external-flow#external"
    ]
   },
   {
    "ko": "극초음속",
    "en": "hypersonic",
    "abbr": "",
    "def": "마하 수가 약 5보다 큰 유동 영역. 충격층이 얇고 매우 뜨거워진다.",
    "chapters": [
     "compressible-flow#mach"
    ]
   },
   {
    "ko": "급확대",
    "en": "sudden expansion",
    "abbr": "",
    "def": "관 지름이 갑자기 커지는 부분. 검사 체적 해석으로 손실 계수 \\(K_L = (1 - A_1/A_2)^2\\)을 정확히 구할 수 있는 드문 경우다.",
    "chapters": [
     "pipe-flow#minor"
    ]
   },
   {
    "ko": "기본 차원",
    "en": "primary dimensions",
    "abbr": "",
    "def": "다른 모든 양을 표현하는 바탕 차원. 유체역학에서는 질량 {M}, 길이 {L}, 시간 {T}, 온도 {Θ}를 쓴다.",
    "chapters": [
     "fluid-properties#fluid-def"
    ]
   },
   {
    "ko": "기압계",
    "en": "barometer",
    "abbr": "",
    "def": "액주(보통 수은)의 높이로 대기압을 재는 장치. 위쪽 공간은 증기압만 남은 거의 진공이므로 \\(p_\\text{atm} = \\rho g h\\)이다.",
    "chapters": [
     "fluid-statics#atmosphere"
    ]
   },
   {
    "ko": "나비에–스토크스 방정식",
    "en": "Navier–Stokes equation",
    "abbr": "",
    "def": "뉴턴 유체에 대한 미분형 운동량 방정식. 단위 부피당 질량×가속도가 압력 기울기, 중력, 점성 확산 \\(\\mu\\nabla^2\\vec V\\)의 합과 같다는 유체역학의 기본 방정식이다.",
    "chapters": [
     "differential-analysis#navier-stokes"
    ]
   },
   {
    "ko": "난류",
    "en": "turbulent flow",
    "abbr": "",
    "def": "속도와 압력이 불규칙하게 요동하며 소용돌이가 뒤섞이는 흐름. 원형 관에서는 대략 \\(Re \\gtrsim 4000\\)에서 나타나며 운동량·열 혼합이 매우 크다.",
    "chapters": [
     "pipe-flow#regimes"
    ]
   },
   {
    "ko": "날개",
    "en": "vane",
    "abbr": "",
    "def": "분류의 방향을 바꿔 힘을 주고받는 곡면 깃(vane). 선운동량 방정식으로 날개에 작용하는 힘을 구한다.",
    "chapters": [
     "control-volume#momentum"
    ]
   },
   {
    "ko": "날개 끝 와류",
    "en": "wingtip vortex",
    "abbr": "",
    "def": "유한한 날개에서 아랫면의 높은 압력이 날개 끝을 돌아 윗면으로 새어 나가며 생기는 강한 와류. 내리흐름을 만들어 유도 항력의 원인이 된다.",
    "chapters": [
     "external-flow#lift"
    ]
   },
   {
    "ko": "날개 출구각",
    "en": "blade outlet angle",
    "abbr": "",
    "def": "임펠러 출구에서 날개(상대 속도 \\(\\vec W_2\\))가 회전 반대 방향과 이루는 각 \\(\\beta_2\\). 출구 속도 삼각형과 이론 양정을 정한다.",
    "chapters": [
     "turbomachinery#euler"
    ]
   },
   {
    "ko": "눈",
    "en": "eye",
    "abbr": "",
    "def": "원심 펌프 임펠러 중심의 유입구(eye). 물은 축 방향으로 들어와 날개 사이 통로를 따라 반경 방향 바깥으로 나간다.",
    "chapters": [
     "turbomachinery#euler"
    ]
   },
   {
    "ko": "뉴턴 유체",
    "en": "Newtonian fluid",
    "abbr": "",
    "def": "전단 응력이 변형률(속도 기울기)에 정비례하는 유체 \\(\\tau = \\mu\\,du/dy\\). 물, 공기, 대부분의 기름이 해당한다.",
    "chapters": [
     "fluid-properties#viscosity"
    ]
   },
   {
    "ko": "다르시 마찰 계수",
    "en": "Darcy friction factor",
    "abbr": "",
    "def": "관 벽 전단 응력을 무차원화한 수 \\(f = 8\\tau_w/(\\rho V^2)\\). 층류에서는 \\(64/Re\\)이고 난류에서는 \\(Re\\)와 상대 거칠기의 함수다.",
    "chapters": [
     "pipe-flow#laminar"
    ]
   },
   {
    "ko": "다르시–바이스바흐 식",
    "en": "Darcy–Weisbach equation",
    "abbr": "",
    "def": "관 마찰에 의한 수두 손실 \\(h_L = f\\,(L/D)\\,V^2/2g\\). 층류·난류, 원형·비원형 관(수력 직경 사용)에 모두 쓴다.",
    "chapters": [
     "pipe-flow#moody"
    ]
   },
   {
    "ko": "대류 가속도",
    "en": "convective/advective acceleration",
    "abbr": "",
    "def": "유체 입자가 속도가 다른 곳으로 옮겨 가서 생기는 가속도 \\((\\vec V\\cdot\\nabla)\\vec V\\). 정상 유동에서도 노즐처럼 단면이 변하면 0이 아니다.",
    "chapters": [
     "fluid-kinematics#material-derivative"
    ]
   },
   {
    "ko": "동압",
    "en": "dynamic pressure",
    "abbr": "",
    "def": "운동 에너지에 해당하는 압력 항 \\(\\tfrac12\\rho V^2\\). 정체압과 정압의 차이로 피토관이 이 값을 잰다.",
    "chapters": [
     "bernoulli#pitot"
    ]
   },
   {
    "ko": "동점성 계수",
    "en": "kinematic viscosity",
    "abbr": "",
    "def": "점성 계수를 밀도로 나눈 값 \\(\\nu = \\mu/\\rho\\)(m²/s). 운동량이 점성으로 확산되는 빠르기를 나타낸다.",
    "chapters": [
     "fluid-properties#viscosity"
    ]
   },
   {
    "ko": "뒷전",
    "en": "trailing edge",
    "abbr": "",
    "def": "에어포일 뒤쪽의 뾰족한 끝(trailing edge). 쿠타 조건이 이곳에서 흐름이 매끄럽게 떠나도록 순환의 크기를 정한다.",
    "chapters": [
     "external-flow#lift"
    ]
   },
   {
    "ko": "등류 수심",
    "en": "normal depth",
    "abbr": "",
    "def": "중력의 경사 성분과 벽 마찰이 정확히 균형을 이뤄(\\(S_f = S_0\\)) 수심이 흐름 방향으로 변하지 않을 때의 수심 \\(y_n\\). 매닝 식으로 구한다.",
    "chapters": [
     "open-channel#classification"
    ]
   },
   {
    "ko": "등엔트로피 과정",
    "en": "isentropic process",
    "abbr": "",
    "def": "마찰도 열전달도 없는 가역 단열 과정(\\(ds = 0\\)). 이상 기체에서는 \\(p\\), \\(\\rho\\), \\(T\\)가 서로 거듭제곱 관계(\\(p/\\rho^k\\) 일정)로 묶인다.",
    "chapters": [
     "compressible-flow#sound"
    ]
   },
   {
    "ko": "라그랑주 기술",
    "en": "Lagrangian description",
    "abbr": "",
    "def": "각 유체 입자에 이름표를 붙여 그 위치와 상태량을 시간에 따라 추적하는 기술 방식. 입자 역학의 방식과 같다.",
    "chapters": [
     "fluid-kinematics#descriptions"
    ]
   },
   {
    "ko": "라발 노즐",
    "en": "de Laval nozzle",
    "abbr": "",
    "def": "수축부와 확대부를 이은 노즐(수축–확대 노즐). 목에서 Ma = 1에 이른 뒤 확대부에서 초음속으로 가속할 수 있다.",
    "chapters": [
     "compressible-flow#nozzle"
    ]
   },
   {
    "ko": "라플라스 방정식",
    "en": "Laplace equation",
    "abbr": "",
    "def": "\\(\\nabla^2\\phi = 0\\). 2차원 비압축 비회전 유동에서 속도 퍼텐셜 \\(\\phi\\)와 유동 함수 \\(\\psi\\)가 모두 만족하므로 기본 해의 중첩이 가능하다.",
    "chapters": [
     "differential-analysis#potential-flow"
    ]
   },
   {
    "ko": "랭킨 와류",
    "en": "Rankine vortex",
    "abbr": "",
    "def": "핵 반지름 \\(R\\) 안쪽은 강제 와류(\\(u_\\theta \\propto r\\)), 바깥은 자유 와류(\\(u_\\theta \\propto 1/r\\))로 이어 붙인 와류 모델. 속력은 \\(r = R\\)에서 최대다.",
    "chapters": [
     "fluid-kinematics#vorticity"
    ]
   },
   {
    "ko": "랭킨 타원",
    "en": "Rankine oval",
    "abbr": "",
    "def": "균일 유동에 같은 세기의 원천과 흡입을 나란히 놓아 만든 닫힌 타원형 물체 주위의 퍼텐셜 유동.",
    "chapters": [
     "differential-analysis#potential-flow"
    ]
   },
   {
    "ko": "레이놀즈 독립",
    "en": "Reynolds number independence",
    "abbr": "",
    "def": "레이놀즈 수가 충분히 커지면 무차원 결과(예: 항력 계수)가 더 이상 Re에 의존하지 않는 현상. Re를 맞출 수 없는 모형 실험의 탈출구가 된다.",
    "chapters": [
     "dimensional-analysis#similitude"
    ]
   },
   {
    "ko": "레이놀즈 수",
    "en": "Reynolds number",
    "abbr": "",
    "def": "관성력과 점성력의 비 \\(\\mathrm{Re} = \\rho VL/\\mu = VL/\\nu\\). 층류·난류 천이와 거의 모든 점성 유동의 상사를 결정한다.",
    "chapters": [
     "dimensional-analysis#numbers"
    ]
   },
   {
    "ko": "레이놀즈 수송 정리",
    "en": "Reynolds transport theorem, RTT",
    "abbr": "",
    "def": "계의 종량 상태량 변화율을 검사 체적 안의 변화율과 검사 표면을 지나는 순유출의 합으로 바꾸는 정리(RTT). 계에 대한 법칙을 검사 체적 꼴로 옮기는 다리다.",
    "chapters": [
     "fluid-kinematics#rtt"
    ]
   },
   {
    "ko": "레이놀즈 응력",
    "en": "Reynolds stress",
    "abbr": "",
    "def": "난류 속도 요동이 만드는 겉보기 응력 \\(-\\rho\\overline{u'v'}\\). 벽에서 조금 떨어진 곳에서는 점성 응력보다 훨씬 크다.",
    "chapters": [
     "pipe-flow#turbulent"
    ]
   },
   {
    "ko": "로터",
    "en": "rotor",
    "abbr": "",
    "def": "터보 기계에서 회전하는 날개 부분(임펠러). 유체의 각운동량을 바꾸며 축과 에너지를 주고받는다.",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "마그누스 효과",
    "en": "Magnus effect",
    "abbr": "",
    "def": "회전하는 원주나 공이 순환을 만들어 흐름에 수직인 양력을 받는 현상. 쿠타–주콥스키 정리 \\(L' = \\rho U\\Gamma\\)로 설명된다.",
    "chapters": [
     "differential-analysis#cylinder"
    ]
   },
   {
    "ko": "마노미터",
    "en": "manometer",
    "abbr": "",
    "def": "관 속 액주의 높이 차로 압력이나 압력 차를 읽는 장치. 내려가면 \\(+\\rho g h\\), 올라가면 \\(-\\rho g h\\)를 더해 가며 해석한다.",
    "chapters": [
     "fluid-statics#manometer"
    ]
   },
   {
    "ko": "마찰 속도",
    "en": "friction velocity",
    "abbr": "",
    "def": "벽 전단 응력으로 만든 속도 척도 \\(u_* = \\sqrt{\\tau_w/\\rho}\\). 벽 근처 난류 속도 분포를 \\(u^+ = \\bar u/u_*\\), \\(y^+ = yu_*/\\nu\\)로 무차원화한다.",
    "chapters": [
     "pipe-flow#turbulent"
    ]
   },
   {
    "ko": "마하 각",
    "en": "Mach angle",
    "abbr": "",
    "def": "초음속으로 움직이는 교란원이 만드는 마하 원뿔의 반각 \\(\\mu = \\sin^{-1}(1/\\mathrm{Ma})\\).",
    "chapters": [
     "compressible-flow#mach"
    ]
   },
   {
    "ko": "마하 수",
    "en": "Mach number",
    "abbr": "",
    "def": "유속과 음속의 비 \\(\\mathrm{Ma} = V/c\\). 약 0.3 아래면 밀도 변화가 작아 비압축성으로 다룰 수 있다.",
    "chapters": [
     "fluid-properties#compressibility"
    ]
   },
   {
    "ko": "마하 원뿔",
    "en": "Mach cone",
    "abbr": "",
    "def": "초음속 교란원이 낸 음파들의 포락면이 이루는 원뿔. 원뿔 밖에서는 교란을 느끼지 못한다(침묵 영역).",
    "chapters": [
     "compressible-flow#mach"
    ]
   },
   {
    "ko": "매닝 계수",
    "en": "Manning coefficient",
    "abbr": "",
    "def": "매닝 식의 벽 거칠기 계수 \\(n\\). 콘크리트 약 0.013, 자연 하천 0.03 이상처럼 표로 주어진다.",
    "chapters": [
     "open-channel#uniform-flow"
    ]
   },
   {
    "ko": "매닝 식",
    "en": "Manning equation",
    "abbr": "",
    "def": "등류의 경험식 \\(V_0 = (a/n)R_h^{2/3}S_0^{1/2}\\)(SI에서 \\(a = 1\\)). 유량은 \\(\\dot V = (a/n)A_cR_h^{2/3}S_0^{1/2}\\)이다.",
    "chapters": [
     "open-channel#uniform-flow"
    ]
   },
   {
    "ko": "메타센터",
    "en": "metacenter",
    "abbr": "",
    "def": "떠 있는 물체가 조금 기울었을 때 옮겨 간 부심을 지나는 부력선이 원래 대칭축과 만나는 점 M. 무게 중심 G보다 위에 있으면(\\(\\overline{GM} > 0\\)) 안정하다.",
    "chapters": [
     "fluid-statics#buoyancy"
    ]
   },
   {
    "ko": "멱법칙 분포",
    "en": "power-law profile",
    "abbr": "",
    "def": "난류 관 유동의 평균 속도 분포를 \\(\\bar u/u_\\text{max} = (y/R)^{1/n}\\)(보통 \\(n \\approx 7\\))으로 근사한 식. 벽 바로 옆을 빼면 잘 맞는다.",
    "chapters": [
     "pipe-flow#turbulent"
    ]
   },
   {
    "ko": "모세관 길이",
    "en": "capillary length",
    "abbr": "",
    "def": "표면 장력과 중력이 비슷해지는 길이 척도 \\(\\sqrt{\\sigma/\\rho g}\\)(물 약 2.7 mm). 이보다 작은 규모에서는 표면 장력이 지배한다.",
    "chapters": [
     "fluid-properties#surface-tension"
    ]
   },
   {
    "ko": "모형",
    "en": "model",
    "abbr": "",
    "def": "실물(원형)의 거동을 예측하려고 축소해 만든 시험체. 무차원 수를 맞추는 상사 조건을 지켜야 결과를 원형으로 옮길 수 있다.",
    "chapters": [
     "dimensional-analysis#similitude"
    ]
   },
   {
    "ko": "무디 선도",
    "en": "Moody chart",
    "abbr": "",
    "def": "콜브룩 식을 그린 그림으로, 다르시 마찰 계수 \\(f\\)를 레이놀즈 수와 상대 거칠기 \\(\\varepsilon/D\\)의 함수로 보여 준다.",
    "chapters": [
     "pipe-flow#moody"
    ]
   },
   {
    "ko": "물질 도함수",
    "en": "material derivative",
    "abbr": "",
    "def": "유체 입자를 따라가며 본 변화율 \\(D/Dt = \\partial/\\partial t + \\vec V\\cdot\\nabla\\). 국소 변화와 대류 변화의 합이며, 어떤 상태량에도 쓸 수 있다.",
    "chapters": [
     "fluid-kinematics#material-derivative"
    ]
   },
   {
    "ko": "미끄럼",
    "en": "slip",
    "abbr": "",
    "def": "날개 수가 유한해 통로 안의 상대 순환 때문에 유체가 날개 각만큼 돌지 못하는 현상(slip). 출구 접선 속도와 이론 양정이 줄어든다.",
    "chapters": [
     "turbomachinery#performance"
    ]
   },
   {
    "ko": "밀도",
    "en": "density",
    "abbr": "",
    "def": "단위 부피당 질량 \\(\\rho\\)(kg/m³). 20 °C 물은 약 998 kg/m³, 표준 상태 공기는 약 1.2 kg/m³이다.",
    "chapters": [
     "fluid-properties#density"
    ]
   },
   {
    "ko": "박리",
    "en": "flow separation",
    "abbr": "",
    "def": "역압력 구배 속에서 벽 근처 유체가 멈추고(\\(\\partial u/\\partial y|_w = 0\\)) 경계층이 표면을 떠나는 현상. 뒤쪽에 넓은 후류가 생겨 압력 항력이 커진다.",
    "chapters": [
     "external-flow#separation"
    ]
   },
   {
    "ko": "반동도",
    "en": "degree of reaction",
    "abbr": "",
    "def": "임펠러가 유체에 준 에너지 가운데 임펠러 안에서 생긴 정압 상승이 차지하는 비율. 나머지는 운동 에너지 증가다.",
    "chapters": [
     "turbomachinery#euler"
    ]
   },
   {
    "ko": "반복 변수",
    "en": "repeating variables",
    "abbr": "",
    "def": "반복 변수법에서 모든 Π 그룹에 되풀이해 넣는 변수들. 기본 차원 수만큼 고르며, 그들끼리는 무차원 묶음을 만들 수 없어야 한다(예: \\(\\rho, V, D\\)).",
    "chapters": [
     "dimensional-analysis#repeating"
    ]
   },
   {
    "ko": "반복 변수법",
    "en": "method of repeating variables",
    "abbr": "",
    "def": "반복 변수 \\(j\\)개를 고르고 나머지 변수를 하나씩 그들과 묶어 지수를 맞춰 Π 그룹을 만드는 표준 절차.",
    "chapters": [
     "dimensional-analysis#repeating"
    ]
   },
   {
    "ko": "받음각",
    "en": "angle of attack",
    "abbr": "",
    "def": "에어포일의 시위와 자유류 방향이 이루는 각 \\(\\alpha\\). 실속 전까지 양력 계수는 받음각에 거의 비례해 커진다.",
    "chapters": [
     "external-flow#lift"
    ]
   },
   {
    "ko": "배압",
    "en": "back pressure",
    "abbr": "",
    "def": "노즐 출구 바깥 공간의 압력 \\(p_b\\). 정체 압력에 대한 배압의 비가 노즐 안의 유동 상태(아음속, 초크, 충격파 위치)를 정한다.",
    "chapters": [
     "compressible-flow#nozzle"
    ]
   },
   {
    "ko": "벌류트",
    "en": "volute",
    "abbr": "",
    "def": "임펠러를 감싸는 나선형 케이싱. 단면이 점점 넓어지며 빠른 유체를 감속해 운동 에너지를 압력으로 바꾸고 송출구로 모은다.",
    "chapters": [
     "turbomachinery#euler"
    ]
   },
   {
    "ko": "베츠 한계",
    "en": "Betz limit",
    "abbr": "",
    "def": "작동 원판 이론에서 풍력 터빈이 바람의 운동 에너지 유속에서 뽑을 수 있는 최대 비율 \\(C_{P,\\max} = 16/27 \\approx 0.593\\)(축 유도 계수 \\(a = 1/3\\)일 때).",
    "chapters": [
     "turbomachinery#turbines"
    ]
   },
   {
    "ko": "벽 법칙",
    "en": "law of the wall",
    "abbr": "",
    "def": "난류 벽 유동의 로그층에서 성립하는 보편 속도 분포 \\(u^+ = \\frac{1}{\\kappa}\\ln y^+ + B\\)(\\(\\kappa = 0.41\\), \\(B = 5.0\\)).",
    "chapters": [
     "pipe-flow#turbulent"
    ]
   },
   {
    "ko": "복원 팔",
    "en": "righting arm",
    "abbr": "",
    "def": "기운 부양체에서 무게와 부력 사이의 수평 거리 \\(\\overline{GM}\\sin\\phi\\). 무게를 곱하면 배를 바로 세우는 복원 모멘트가 된다.",
    "chapters": [
     "fluid-statics#buoyancy"
    ]
   },
   {
    "ko": "부력",
    "en": "buoyant force",
    "abbr": "",
    "def": "유체 속 물체의 아랫면과 윗면의 압력 차로 생기는 위쪽 힘. 크기는 물체가 밀어낸 유체의 무게 \\(F_B = \\rho_f gV_\\text{sub}\\)이다(아르키메데스 원리).",
    "chapters": [
     "fluid-statics#buoyancy"
    ]
   },
   {
    "ko": "부심",
    "en": "center of buoyancy",
    "abbr": "",
    "def": "물체가 밀어낸 유체 부피의 도심 B. 부력은 이 점을 지나 위로 작용한다.",
    "chapters": [
     "fluid-statics#buoyancy"
    ]
   },
   {
    "ko": "부차 손실",
    "en": "minor loss",
    "abbr": "",
    "def": "밸브, 엘보, 입구·출구, 확대·축소 같은 관 부속품에서 생기는 수두 손실 \\(h_L = K_L V^2/2g\\).",
    "chapters": [
     "pipe-flow#minor"
    ]
   },
   {
    "ko": "부피 변형률",
    "en": "volumetric strain rate",
    "abbr": "",
    "def": "유체 요소의 단위 부피당 부피 변화율. 세 선형 변형률의 합 \\(\\nabla\\cdot\\vec V\\)이며 비압축성 유동에서는 0이다.",
    "chapters": [
     "fluid-kinematics#kinematics-element"
    ]
   },
   {
    "ko": "분류",
    "en": "jet",
    "abbr": "",
    "def": "노즐 등에서 나와 한 방향으로 나아가는 유체의 흐름(jet). 대기 중 자유 분류는 둘레가 모두 대기압이라 계기압으로 쓰면 압력 힘이 사라진다.",
    "chapters": [
     "control-volume#momentum"
    ]
   },
   {
    "ko": "분리 충격파",
    "en": "detached bow shock",
    "abbr": "",
    "def": "꺾임각이 최대 꺾임각을 넘어 붙은 경사 충격파가 불가능할 때 물체 앞에 떨어져 서는 휜 충격파(활 충격파).",
    "chapters": [
     "compressible-flow#oblique"
    ]
   },
   {
    "ko": "불완전 상사",
    "en": "incomplete similarity",
    "abbr": "",
    "def": "모든 무차원 수를 동시에 맞출 수 없어 일부(예: 배 모형의 Fr만)만 맞추는 상사. 맞추지 못한 효과는 따로 보정한다.",
    "chapters": [
     "dimensional-analysis#incomplete"
    ]
   },
   {
    "ko": "비뉴턴 유체",
    "en": "non-Newtonian fluid",
    "abbr": "",
    "def": "전단 응력과 변형률의 관계가 직선이 아닌 유체. 케첩, 페인트, 혈액, 고분자 용액, 진흙 등이 있다.",
    "chapters": [
     "fluid-properties#non-newtonian"
    ]
   },
   {
    "ko": "비력",
    "en": "specific force",
    "abbr": "",
    "def": "개수로 단면의 단위 폭·단위 무게당 운동량 유속과 정수압 힘의 합 \\(M = q^2/(gy) + y^2/2\\). 수력 도약 전후에 같다.",
    "chapters": [
     "open-channel#hydraulic-jump"
    ]
   },
   {
    "ko": "비속도",
    "en": "specific speed",
    "abbr": "",
    "def": "회전수·유량·양정을 묶어 크기와 무관하게 만든 무차원 수 \\(N_s = \\omega Q^{1/2}/(gH)^{3/4}\\). 최고 효율점에서 계산하며, 값에 따라 원심·사류·축류 중 알맞은 형식이 정해진다.",
    "chapters": [
     "turbomachinery#similarity"
    ]
   },
   {
    "ko": "비압축성",
    "en": "incompressible",
    "abbr": "",
    "def": "유동 중 밀도 변화를 무시할 수 있는 상태. 대부분의 액체 유동과 Ma < 0.3인 기체 유동에 쓴다.",
    "chapters": [
     "fluid-properties#compressibility"
    ]
   },
   {
    "ko": "비에너지",
    "en": "specific energy",
    "abbr": "",
    "def": "수로 바닥에서 잰 단위 무게당 에너지 \\(E_s = y + V^2/2g\\). 유량이 일정할 때 임계 수심에서 최소다.",
    "chapters": [
     "open-channel#specific-energy"
    ]
   },
   {
    "ko": "비열비",
    "en": "specific heat ratio",
    "abbr": "",
    "def": "정압 비열과 정적 비열의 비 \\(k = c_p/c_v\\). 공기는 1.4이다.",
    "chapters": [
     "compressible-flow#sound"
    ]
   },
   {
    "ko": "비정상 유동",
    "en": "unsteady flow",
    "abbr": "",
    "def": "한 점의 상태량이 시간에 따라 변하는 유동(\\(\\partial/\\partial t \\neq 0\\)).",
    "chapters": [
     "fluid-kinematics#descriptions"
    ]
   },
   {
    "ko": "비중",
    "en": "specific gravity",
    "abbr": "",
    "def": "물질의 밀도를 기준 물질(보통 4 °C 물, 1000 kg/m³)의 밀도로 나눈 값 SG. 수은은 약 13.6이다.",
    "chapters": [
     "fluid-properties#density"
    ]
   },
   {
    "ko": "비중량",
    "en": "specific weight",
    "abbr": "",
    "def": "단위 부피당 무게 \\(\\gamma = \\rho g\\)(N/m³). 물은 약 9.81 kN/m³이다.",
    "chapters": [
     "fluid-properties#density"
    ]
   },
   {
    "ko": "비체적",
    "en": "specific volume",
    "abbr": "",
    "def": "단위 질량당 부피, 곧 밀도의 역수 \\(v = 1/\\rho\\)(m³/kg). 열역학에서 많이 쓴다.",
    "chapters": [
     "fluid-properties#density"
    ]
   },
   {
    "ko": "비회전 유동",
    "en": "irrotational flow",
    "abbr": "",
    "def": "어디서나 와도가 0(\\(\\vec\\zeta = 0\\))인 유동. 속도 퍼텐셜 \\(\\phi\\)가 존재해 \\(\\vec V = \\nabla\\phi\\)로 쓸 수 있다.",
    "chapters": [
     "fluid-kinematics#vorticity"
    ]
   },
   {
    "ko": "빙엄 소성",
    "en": "Bingham plastic",
    "abbr": "",
    "def": "항복 응력 \\(\\tau_y\\)를 넘어야 흐르기 시작하고 그 뒤로는 선형으로 변형하는 비뉴턴 유체 \\(\\tau = \\tau_y + \\mu_p\\,du/dy\\). 치약, 진흙이 예다.",
    "chapters": [
     "fluid-properties#non-newtonian"
    ]
   },
   {
    "ko": "사이펀",
    "en": "siphon",
    "abbr": "",
    "def": "물이 가득 찬 관이 수면보다 높은 곳을 넘어 더 낮은 곳으로 물을 옮기는 장치. 최고점의 압력이 증기압보다 높아야 작동한다.",
    "chapters": [
     "bernoulli#siphon-egl"
    ]
   },
   {
    "ko": "상대 거칠기",
    "en": "relative roughness",
    "abbr": "",
    "def": "관 벽 거칠기 높이와 지름의 비 \\(\\varepsilon/D\\). 난류 마찰 계수를 정하는 둘째 변수다.",
    "chapters": [
     "pipe-flow#moody"
    ]
   },
   {
    "ko": "상대 속도",
    "en": "relative velocity",
    "abbr": "",
    "def": "움직이는 날개와 함께 도는 관찰자가 보는 유체 속도 \\(\\vec W\\). 날개 속도 \\(\\vec U\\)를 더하면 절대 속도 \\(\\vec V = \\vec W + \\vec U\\)가 된다.",
    "chapters": [
     "turbomachinery#euler"
    ]
   },
   {
    "ko": "상사",
    "en": "similarity, similitude",
    "abbr": "",
    "def": "모형과 원형 사이에 기하학적·운동학적·동역학적 대응이 성립하는 것. 관련 무차원 수가 모두 같으면 무차원 결과도 같다.",
    "chapters": [
     "dimensional-analysis#similitude"
    ]
   },
   {
    "ko": "상사 법칙",
    "en": "affinity laws",
    "abbr": "",
    "def": "같은 계열의 펌프·팬에서 상사 점끼리 성립하는 관계 \\(Q \\propto ND^3\\), \\(H \\propto N^2D^2\\), \\(P \\propto \\rho N^3D^5\\).",
    "chapters": [
     "turbomachinery#similarity"
    ]
   },
   {
    "ko": "상사해",
    "en": "similarity solution",
    "abbr": "",
    "def": "모든 위치의 속도 분포가 길이 척도 \\(\\delta(x)\\)로 늘리기만 하면 같은 모양이 되는 해. 블라시우스 해가 대표적이다.",
    "chapters": [
     "external-flow#laminar"
    ]
   },
   {
    "ko": "선운동량 방정식",
    "en": "linear momentum equation",
    "abbr": "",
    "def": "검사 체적에 작용하는 외력의 합이 운동량 변화율과 순유출 운동량 유속의 합과 같다는 식. 분류·엘보·노즐에 걸리는 힘을 구한다.",
    "chapters": [
     "control-volume#momentum"
    ]
   },
   {
    "ko": "선형 변형률",
    "en": "linear strain rate",
    "abbr": "",
    "def": "유체 요소의 한 방향 길이가 늘어나는 비율(예: \\(\\partial u/\\partial x\\)).",
    "chapters": [
     "fluid-kinematics#kinematics-element"
    ]
   },
   {
    "ko": "설계 조건",
    "en": "design condition",
    "abbr": "",
    "def": "수축–확대 노즐에서 확대부 전체가 초음속이고 출구 압력이 배압과 정확히 같은 운전 상태. 노즐 안팎에 충격파가 없다.",
    "chapters": [
     "compressible-flow#nozzle"
    ]
   },
   {
    "ko": "성능 곡선",
    "en": "performance curves",
    "abbr": "",
    "def": "펌프의 양정·축 동력·효율을 유량에 대해 그린 곡선. 제조사가 시험으로 측정해 제공한다.",
    "chapters": [
     "turbomachinery#performance"
    ]
   },
   {
    "ko": "셰지 식",
    "en": "Chézy equation",
    "abbr": "",
    "def": "등류의 평균 속도 \\(V_0 = C\\sqrt{R_hS_0}\\). 셰지 계수 \\(C = \\sqrt{8g/f}\\)는 벽 마찰을 나타낸다.",
    "chapters": [
     "open-channel#uniform-flow"
    ]
   },
   {
    "ko": "소닉 붐",
    "en": "sonic boom",
    "abbr": "",
    "def": "초음속 비행체의 마하 원뿔(충격파)이 땅 위를 지나갈 때 관찰자가 듣는 폭음.",
    "chapters": [
     "compressible-flow#mach"
    ]
   },
   {
    "ko": "속도 수두",
    "en": "velocity head",
    "abbr": "",
    "def": "단위 무게당 운동 에너지 \\(V^2/2g\\)(m). 에너지선과 수력 구배선의 차이와 같다.",
    "chapters": [
     "bernoulli#bernoulli-eq"
    ]
   },
   {
    "ko": "속도 퍼텐셜",
    "en": "velocity potential",
    "abbr": "",
    "def": "비회전 유동에서 \\(\\vec V = \\nabla\\phi\\)가 되는 스칼라 함수 \\(\\phi\\). 등퍼텐셜선은 유선과 직교한다.",
    "chapters": [
     "differential-analysis#potential-flow"
    ]
   },
   {
    "ko": "속도장",
    "en": "velocity field",
    "abbr": "",
    "def": "유체 속도를 위치와 시간의 함수 \\(\\vec V(x, y, z, t)\\)로 나타낸 장. 오일러 기술의 기본 변수다.",
    "chapters": [
     "fluid-kinematics#descriptions"
    ]
   },
   {
    "ko": "손실 계수",
    "en": "loss coefficient",
    "abbr": "",
    "def": "부차 손실을 속도 수두의 배수로 나타낸 계수 \\(K_L = h_L/(V^2/2g)\\).",
    "chapters": [
     "pipe-flow#minor"
    ]
   },
   {
    "ko": "송풍기",
    "en": "blower",
    "abbr": "",
    "def": "기체의 압력을 팬보다 크게(대략 10 kPa 이상) 올리되 압축기만큼 밀도가 크게 변하지는 않는 터보 기계.",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "수동력",
    "en": "water horsepower",
    "abbr": "",
    "def": "펌프가 실제로 유체에 준 동력 \\(\\rho gQH\\). 축 동력으로 나누면 펌프 효율이다.",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "수두 손실",
    "en": "head loss",
    "abbr": "",
    "def": "마찰과 부속품에서 비가역적으로 열로 바뀐 기계적 에너지를 단위 무게당 높이(m)로 나타낸 값 \\(h_L\\).",
    "chapters": [
     "control-volume#energy"
    ]
   },
   {
    "ko": "수력 구배선",
    "en": "hydraulic grade line, HGL",
    "abbr": "",
    "def": "압력 수두와 위치 수두의 합 \\(p/\\rho g + z\\)를 이은 선(HGL). 관에 세운 피에조미터의 액주 높이와 같다.",
    "chapters": [
     "bernoulli#siphon-egl"
    ]
   },
   {
    "ko": "수력 도약",
    "en": "hydraulic jump",
    "abbr": "",
    "def": "사류(Fr > 1)가 갑자기 깊은 상류로 바뀌며 수면이 솟구치는 현상. 큰 소용돌이로 에너지를 많이 잃는다.",
    "chapters": [
     "open-channel#hydraulic-jump"
    ]
   },
   {
    "ko": "수력 반경",
    "en": "hydraulic radius",
    "abbr": "",
    "def": "흐름 단면적을 윤변으로 나눈 길이 \\(R_h = A_c/p\\). 원형이 아닌 단면의 크기를 대표한다.",
    "chapters": [
     "open-channel#classification"
    ]
   },
   {
    "ko": "수력 수심",
    "en": "hydraulic depth",
    "abbr": "",
    "def": "흐름 단면적을 수면 폭으로 나눈 값 \\(y_h = A_c/T\\). 비직사각형 단면의 프루드 수에 쓴다.",
    "chapters": [
     "open-channel#classification"
    ]
   },
   {
    "ko": "수력 직경",
    "en": "hydraulic diameter",
    "abbr": "",
    "def": "비원형 관에 원형 관의 식을 쓰기 위한 대표 지름 \\(D_h = 4A_c/p\\). 원형 관에서는 지름과 같다.",
    "chapters": [
     "pipe-flow#moody"
    ]
   },
   {
    "ko": "수문",
    "en": "sluice gate",
    "abbr": "",
    "def": "수로를 가로막고 아래로 물을 내보내는 문(sluice gate). 아래로 나간 분류는 개도보다 얇게 수축해 사류가 된다.",
    "chapters": [
     "open-channel#weirs"
    ]
   },
   {
    "ko": "수직 충격파",
    "en": "normal shock wave",
    "abbr": "",
    "def": "초음속 유동에 수직으로 서서 유동을 아음속으로 바꾸는 매우 얇은 불연속면. 지나면서 압력·온도·밀도는 오르고 정체 압력은 떨어진다.",
    "chapters": [
     "compressible-flow#normal-shock"
    ]
   },
   {
    "ko": "수축–확대 노즐",
    "en": "converging–diverging nozzle",
    "abbr": "",
    "def": "단면이 줄었다가 다시 넓어지는 노즐(라발 노즐). 목에서 Ma = 1이 되면 확대부에서 초음속을 얻을 수 있다.",
    "chapters": [
     "compressible-flow#nozzle"
    ]
   },
   {
    "ko": "순압력 구배",
    "en": "favorable pressure gradient",
    "abbr": "",
    "def": "흐름 방향으로 압력이 낮아지는(\\(dp/dx < 0\\)) 구배. 경계층을 가속해 박리를 억제한다.",
    "chapters": [
     "external-flow#separation"
    ]
   },
   {
    "ko": "순환",
    "en": "circulation",
    "abbr": "",
    "def": "폐곡선을 따라 속도의 접선 성분을 적분한 값 \\(\\Gamma = \\oint\\vec V\\cdot d\\vec s\\). 스토크스 정리로 둘러싼 면의 와도 선속과 같다.",
    "chapters": [
     "fluid-kinematics#vorticity"
    ]
   },
   {
    "ko": "스트로할 수",
    "en": "Strouhal number",
    "abbr": "",
    "def": "진동 유동의 무차원 진동수 \\(\\mathrm{St} = fL/V\\). 원주 뒤 와류 방출에서는 넓은 Re 범위에서 약 0.2다.",
    "chapters": [
     "dimensional-analysis#numbers"
    ]
   },
   {
    "ko": "시간선",
    "en": "timeline",
    "abbr": "",
    "def": "어느 순간 나란히 표시한 이웃 유체 입자들을 나중에 다시 이은 선. 수소 기포선이 대표적이다.",
    "chapters": [
     "fluid-kinematics#flow-lines"
    ]
   },
   {
    "ko": "시스템 곡선",
    "en": "system curve",
    "abbr": "",
    "def": "관로가 유량 \\(Q\\)를 흘리는 데 필요한 수두 \\(H = \\Delta z + KQ^2\\)을 유량에 대해 그린 곡선. 펌프 성능 곡선과의 교점이 작동점이다.",
    "chapters": [
     "pipe-flow#systems"
    ]
   },
   {
    "ko": "시위",
    "en": "chord",
    "abbr": "",
    "def": "에어포일의 앞전과 뒷전을 잇는 직선(chord) \\(c\\). 양력·항력 계수와 받음각의 기준이 된다.",
    "chapters": [
     "external-flow#lift"
    ]
   },
   {
    "ko": "실속",
    "en": "stall",
    "abbr": "",
    "def": "받음각이 너무 커져 날개 윗면에서 경계층이 크게 박리하며 양력이 갑자기 줄고 항력이 커지는 현상.",
    "chapters": [
     "external-flow#lift"
    ]
   },
   {
    "ko": "쌍극자",
    "en": "doublet",
    "abbr": "",
    "def": "같은 세기의 원천과 흡입을 세기×간격을 일정하게 유지하며 한없이 붙인 극한의 퍼텐셜 유동. 균일 유동과 겹치면 원주 주위 유동이 된다.",
    "chapters": [
     "differential-analysis#potential-flow"
    ]
   },
   {
    "ko": "아음속",
    "en": "subsonic",
    "abbr": "",
    "def": "마하 수가 1보다 작은 유동. 대략 0.3–0.8에서는 압축성 보정이 필요하다.",
    "chapters": [
     "compressible-flow#mach"
    ]
   },
   {
    "ko": "안내 깃",
    "en": "stator, guide vanes",
    "abbr": "",
    "def": "터보 기계에서 회전하지 않는 날개열(정익). 유체의 흐름 방향을 바꿔 회전 날개에 알맞게 들여보내거나 선회를 회수한다.",
    "chapters": [
     "turbomachinery#similarity"
    ]
   },
   {
    "ko": "압력",
    "en": "pressure",
    "abbr": "",
    "def": "유체 속 한 면에 수직으로 작용하는 단위 넓이당 힘 \\(p = \\lim \\delta F_n/\\delta A\\). 정지 유체에서는 방향에 무관한 스칼라다.",
    "chapters": [
     "fluid-statics#pressure"
    ]
   },
   {
    "ko": "압력 계수",
    "en": "pressure coefficient",
    "abbr": "",
    "def": "압력을 무차원화한 값 \\(C_p = (p - p_\\infty)/(\\tfrac12\\rho U^2)\\). 정체점에서 1이고, 원주 퍼텐셜 유동에서는 \\(1 - 4\\sin^2\\theta\\)이다.",
    "chapters": [
     "differential-analysis#cylinder"
    ]
   },
   {
    "ko": "압력 수두",
    "en": "pressure head",
    "abbr": "",
    "def": "압력을 같은 크기의 정수압을 만드는 액주 높이로 나타낸 값 \\(p/\\rho g\\)(m).",
    "chapters": [
     "fluid-statics#pressure"
    ]
   },
   {
    "ko": "압축기",
    "en": "compressor",
    "abbr": "",
    "def": "기체의 압력을 크게 올려 밀도가 뚜렷이 변하는 터보 기계(또는 용적식 기계).",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "압축률",
    "en": "compressibility",
    "abbr": "",
    "def": "체적 탄성 계수의 역수 \\(\\beta = 1/E_v\\). 단위 압력 변화당 부피가 줄어드는 비율이다.",
    "chapters": [
     "fluid-properties#compressibility"
    ]
   },
   {
    "ko": "압축성 유동",
    "en": "compressible flow",
    "abbr": "",
    "def": "밀도 변화를 무시할 수 없는 유동. 대략 Ma > 0.3인 기체 유동에서 음속과 마하 수가 핵심 변수가 된다.",
    "chapters": [
     "compressible-flow#sound"
    ]
   },
   {
    "ko": "앞전",
    "en": "leading edge",
    "abbr": "",
    "def": "에어포일 앞쪽의 둥근 끝(leading edge). 흐름이 갈라지는 정체점이 근처에 있다.",
    "chapters": [
     "external-flow#lift"
    ]
   },
   {
    "ko": "양력",
    "en": "lift",
    "abbr": "",
    "def": "흐르는 유체가 물체에 주는 힘 중 자유류에 수직한 성분 \\(F_L\\). 양력 계수 \\(C_L = F_L/(\\tfrac12\\rho V^2A)\\)로 나타낸다.",
    "chapters": [
     "external-flow#external"
    ]
   },
   {
    "ko": "에너지선",
    "en": "energy grade line, EGL",
    "abbr": "",
    "def": "압력·속도·위치 수두의 합, 곧 전수두 \\(p/\\rho g + V^2/2g + z\\)를 이은 선(EGL). 손실이 있으면 흐름 방향으로 내려가고 펌프에서 올라간다.",
    "chapters": [
     "bernoulli#siphon-egl"
    ]
   },
   {
    "ko": "에어포일",
    "en": "airfoil",
    "abbr": "",
    "def": "양력을 크게, 항력을 작게 만들도록 다듬은 날개 단면. 둥근 앞전과 뾰족한 뒷전을 가진다.",
    "chapters": [
     "external-flow#lift"
    ]
   },
   {
    "ko": "엔탈피",
    "en": "enthalpy",
    "abbr": "",
    "def": "내부 에너지와 유동일의 합 \\(h = u + p/\\rho\\). 이상 기체에서는 \\(h = c_pT\\)이다.",
    "chapters": [
     "compressible-flow#sound"
    ]
   },
   {
    "ko": "엔트로피",
    "en": "entropy",
    "abbr": "",
    "def": "가역 과정에서 \\(T\\,ds = dh - dp/\\rho\\)로 정의되는 상태량. 충격파처럼 비가역 과정을 지나면 증가한다.",
    "chapters": [
     "compressible-flow#sound"
    ]
   },
   {
    "ko": "역압력 구배",
    "en": "adverse pressure gradient",
    "abbr": "",
    "def": "흐름 방향으로 압력이 높아지는(\\(dp/dx > 0\\)) 구배. 경계층을 감속해 박리를 일으킬 수 있다.",
    "chapters": [
     "external-flow#separation"
    ]
   },
   {
    "ko": "연속 방정식",
    "en": "continuity equation",
    "abbr": "",
    "def": "질량 보존을 나타내는 식. 정상 비압축 관 유동에서는 \\(Q = A_1V_1 = A_2V_2\\), 미분형으로는 \\(\\nabla\\cdot\\vec V = 0\\)이다.",
    "chapters": [
     "bernoulli#meters"
    ]
   },
   {
    "ko": "연속체 가정",
    "en": "continuum hypothesis",
    "abbr": "",
    "def": "유체를 분자의 모임이 아니라 상태량이 공간에 연속적으로 분포한 물질로 보는 가정. 분자 평균 자유 행로가 관심 길이보다 훨씬 작을 때 성립한다.",
    "chapters": [
     "fluid-properties#fluid-def"
    ]
   },
   {
    "ko": "영–라플라스 식",
    "en": "Young–Laplace equation",
    "abbr": "",
    "def": "곡면 경계를 사이에 둔 압력 차 \\(\\Delta p = \\sigma(1/R_1 + 1/R_2)\\). 구형 물방울은 \\(2\\sigma/R\\), 비눗방울은 \\(4\\sigma/R\\)이다.",
    "chapters": [
     "fluid-properties#surface-tension"
    ]
   },
   {
    "ko": "예연 위어",
    "en": "sharp-crested weir",
    "abbr": "",
    "def": "날카로운 마루를 가진 위어. 마루 위 수심 \\(h\\)에서 \\(\\sqrt{2gh}\\)를 적분하고 유량 계수를 곱해 유량을 구한다(직사각형 \\(\\dot V \\propto bh^{3/2}\\)).",
    "chapters": [
     "open-channel#weirs"
    ]
   },
   {
    "ko": "오일러 기술",
    "en": "Eulerian description",
    "abbr": "",
    "def": "공간에 고정된 점마다 그 순간 그곳을 지나는 유체의 상태량을 주는 기술 방식. 속도·압력을 장으로 다룬다.",
    "chapters": [
     "fluid-kinematics#descriptions"
    ]
   },
   {
    "ko": "오일러 방정식",
    "en": "Euler equation",
    "abbr": "",
    "def": "점성을 무시한(\\(\\mu = 0\\)) 운동량 방정식 \\(\\rho\\,D\\vec V/Dt = -\\nabla p + \\rho\\vec g\\). 유선을 따라 적분하면 베르누이 식이 된다.",
    "chapters": [
     "differential-analysis#navier-stokes"
    ]
   },
   {
    "ko": "오일러 수",
    "en": "Euler number",
    "abbr": "",
    "def": "압력 차를 동압으로 나눈 무차원 수 \\(\\mathrm{Eu} = \\Delta p/(\\rho V^2)\\). 압력 계수와 같은 꼴이다.",
    "chapters": [
     "dimensional-analysis#numbers"
    ]
   },
   {
    "ko": "와도",
    "en": "vorticity",
    "abbr": "",
    "def": "속도장의 회전 \\(\\vec\\zeta = \\nabla\\times\\vec V\\). 유체 요소 회전 각속도의 2배다.",
    "chapters": [
     "fluid-kinematics#vorticity"
    ]
   },
   {
    "ko": "완전 발달 유동",
    "en": "fully developed flow",
    "abbr": "",
    "def": "속도 분포가 흐름 방향으로 더 이상 변하지 않는 유동(\\(\\partial u/\\partial x = 0\\)). 관에서는 입구 길이 뒤에 나타난다.",
    "chapters": [
     "differential-analysis#exact-solutions"
    ]
   },
   {
    "ko": "왜곡 모형",
    "en": "distorted model",
    "abbr": "",
    "def": "수직 축척을 수평 축척보다 크게 키운 하천·항만 모형. 수심이 너무 얕아져 표면 장력·점성이 끼어드는 것을 막는다.",
    "chapters": [
     "dimensional-analysis#incomplete"
    ]
   },
   {
    "ko": "외부 유동",
    "en": "external flow",
    "abbr": "",
    "def": "물체 주위를 감싸며 흐르는 유동. 경계층 바깥에는 언제나 교란되지 않은 자유류가 있다.",
    "chapters": [
     "external-flow#external"
    ]
   },
   {
    "ko": "용적식 기계",
    "en": "positive-displacement machine",
    "abbr": "",
    "def": "피스톤·기어·로브·나사가 닫힌 공간의 부피를 바꿔 유체를 한 덩어리씩 밀어내는 기계. 유량이 회전수에 거의 비례하고 양정과 무관하다.",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "운동 에너지 보정 계수",
    "en": "kinetic energy correction factor",
    "abbr": "",
    "def": "실제 속도 분포의 운동 에너지 유속을 평균 속도로 계산한 값으로 나눈 계수 \\(\\alpha = \\frac{1}{AV^3}\\int u^3\\,dA\\). 균일 분포는 1, 층류 관 유동은 2다.",
    "chapters": [
     "control-volume#energy"
    ]
   },
   {
    "ko": "운동량 유속 보정 계수",
    "en": "momentum-flux correction factor",
    "abbr": "",
    "def": "실제 속도 분포의 운동량 유속을 평균 속도로 계산한 값으로 나눈 계수 \\(\\beta = \\frac{1}{AV^2}\\int u^2\\,dA\\). 균일 분포는 1, 층류 관 유동은 4/3이다.",
    "chapters": [
     "control-volume#momentum"
    ]
   },
   {
    "ko": "원형",
    "en": "prototype",
    "abbr": "",
    "def": "모형 실험의 결과를 적용하려는 실물(prototype).",
    "chapters": [
     "dimensional-analysis#similitude"
    ]
   },
   {
    "ko": "웨버 수",
    "en": "Weber number",
    "abbr": "",
    "def": "관성력과 표면 장력의 비 \\(\\mathrm{We} = \\rho V^2L/\\sigma\\). 물방울, 분무, 얕은 물 모형에서 중요하다.",
    "chapters": [
     "dimensional-analysis#numbers"
    ]
   },
   {
    "ko": "위어 유량 계수",
    "en": "weir discharge coefficient",
    "abbr": "",
    "def": "이상화한 위어 유량식에 곱해 수면 강하와 수맥 수축을 보정하는 실험 계수 \\(C_{wd}\\).",
    "chapters": [
     "open-channel#weirs"
    ]
   },
   {
    "ko": "위치 수두",
    "en": "elevation head",
    "abbr": "",
    "def": "기준면에서 잰 높이 \\(z\\)로 나타낸 단위 무게당 위치 에너지(m).",
    "chapters": [
     "bernoulli#bernoulli-eq"
    ]
   },
   {
    "ko": "유도 차원",
    "en": "derived dimensions",
    "abbr": "",
    "def": "기본 차원의 거듭제곱 곱으로 표현되는 차원. 예: 힘 {MLT⁻²}, 점성 계수 {ML⁻¹T⁻¹}.",
    "chapters": [
     "dimensional-analysis#dimensions"
    ]
   },
   {
    "ko": "유도 항력",
    "en": "induced drag",
    "abbr": "",
    "def": "유한한 날개의 날개 끝 와류가 만든 내리흐름 때문에 양력이 뒤로 기울어 생기는 항력 성분. 가로세로비가 클수록 작다.",
    "chapters": [
     "external-flow#lift"
    ]
   },
   {
    "ko": "유동 가시화",
    "en": "flow visualization",
    "abbr": "",
    "def": "염료, 연기, 기포, 입자 등으로 흐름을 눈에 보이게 하는 방법. 유선·유적선·유맥선·시간선 중 무엇을 보여 주는지 구별해야 한다.",
    "chapters": [
     "fluid-kinematics#flow-lines"
    ]
   },
   {
    "ko": "유동 함수",
    "en": "stream function",
    "abbr": "",
    "def": "2차원 비압축 유동에서 \\(u = \\partial\\psi/\\partial y\\), \\(v = -\\partial\\psi/\\partial x\\)가 되는 함수 \\(\\psi\\). 등\\(\\psi\\)선이 유선이고, 두 유선의 \\(\\psi\\) 차가 그 사이 단위 폭당 유량이다.",
    "chapters": [
     "differential-analysis#stream-function"
    ]
   },
   {
    "ko": "유량 계수",
    "en": "discharge coefficient",
    "abbr": "",
    "def": "이상 유량에 곱해 마찰과 수축을 보정하는 실험 계수 \\(C_d\\). 실제 유량 = \\(C_d\\) × 이상 유량.",
    "chapters": [
     "bernoulli#meters"
    ]
   },
   {
    "ko": "유맥선",
    "en": "streakline",
    "abbr": "",
    "def": "공간의 한 고정점을 차례로 지나간 모든 유체 입자를 이은 선. 굴뚝 연기, 염료 주입구에서 나온 색 띠가 예다.",
    "chapters": [
     "fluid-kinematics#flow-lines"
    ]
   },
   {
    "ko": "유변 곡선",
    "en": "rheological curve",
    "abbr": "",
    "def": "전단 응력 \\(\\tau\\)를 변형률 \\(du/dy\\)에 대해 그린 곡선. 뉴턴 유체는 원점을 지나는 직선이다.",
    "chapters": [
     "fluid-properties#non-newtonian"
    ]
   },
   {
    "ko": "유선",
    "en": "streamline",
    "abbr": "",
    "def": "어느 순간 모든 점에서 속도 벡터에 접하는 곡선. 정상 유동에서는 유체 입자가 유선을 따라 움직인다.",
    "chapters": [
     "bernoulli#streamline"
    ]
   },
   {
    "ko": "유선 좌표계",
    "en": "streamline coordinates",
    "abbr": "",
    "def": "유선을 따라 잰 거리 \\(s\\)와 유선에 수직으로 곡률 중심을 향하는 \\(n\\)으로 잡은 좌표계. 베르누이 식 유도에 쓴다.",
    "chapters": [
     "bernoulli#streamline"
    ]
   },
   {
    "ko": "유선형",
    "en": "streamlining",
    "abbr": "",
    "def": "뒤쪽을 완만하게 줄여 역압력 구배를 약하게 하고 박리를 늦춰 압력 항력을 줄이는 설계.",
    "chapters": [
     "external-flow#drag"
    ]
   },
   {
    "ko": "유적선",
    "en": "pathline",
    "abbr": "",
    "def": "유체 입자 하나가 실제로 지나간 궤적(라그랑주 개념). 장시간 노출 사진에 찍힌 한 입자의 줄이다.",
    "chapters": [
     "fluid-kinematics#flow-lines"
    ]
   },
   {
    "ko": "유체",
    "en": "fluid",
    "abbr": "",
    "def": "전단 응력이 작용하는 동안 그 크기가 아무리 작아도 계속 변형하는 물질. 액체와 기체가 있다.",
    "chapters": [
     "fluid-properties#fluid-def"
    ]
   },
   {
    "ko": "유체 입자",
    "en": "fluid particle",
    "abbr": "",
    "def": "분자보다는 훨씬 크고 관심 길이보다는 훨씬 작은, 연속체로 다룰 수 있는 작은 유체 덩어리.",
    "chapters": [
     "fluid-kinematics#descriptions"
    ]
   },
   {
    "ko": "유효 낙차",
    "en": "net head",
    "abbr": "",
    "def": "수력 터빈에 실제로 주어지는 수두. 저수지와 방수로의 수위차(총낙차)에서 수압관 손실을 뺀 값이다.",
    "chapters": [
     "turbomachinery#turbines"
    ]
   },
   {
    "ko": "유효 흡입 수두",
    "en": "net positive suction head, NPSH",
    "abbr": "",
    "def": "펌프 흡입구의 전수두가 증기압 수두를 넘는 여유 NPSH \\(= p/\\rho g + V^2/2g - p_v/\\rho g\\). 계통이 주는 NPSHa가 펌프가 요구하는 NPSHr보다 커야 공동 현상이 없다.",
    "chapters": [
     "turbomachinery#npsh"
    ]
   },
   {
    "ko": "윤변",
    "en": "wetted perimeter",
    "abbr": "",
    "def": "흐름 단면에서 물이 벽(바닥과 옆면)에 닿는 둘레 길이 \\(p\\). 자유 표면은 포함하지 않는다.",
    "chapters": [
     "open-channel#classification"
    ]
   },
   {
    "ko": "음속",
    "en": "speed of sound",
    "abbr": "",
    "def": "작은 압력 교란이 유체 속을 전파하는 속력 \\(c = \\sqrt{E_v/\\rho}\\). 이상 기체에서는 \\(c = \\sqrt{kRT}\\)(20 °C 공기 343 m/s).",
    "chapters": [
     "fluid-properties#compressibility"
    ]
   },
   {
    "ko": "응력",
    "en": "stress",
    "abbr": "",
    "def": "유체 요소의 한 면에 작용하는 단위 넓이당 힘. 면에 수직한 성분(수직 응력)과 나란한 성분(전단 응력)으로 나뉜다.",
    "chapters": [
     "differential-analysis#navier-stokes"
    ]
   },
   {
    "ko": "이론 양정",
    "en": "theoretical head",
    "abbr": "",
    "def": "손실이 없을 때 오일러 터보 기계 방정식이 주는 양정 \\(H_\\text{th} = (U_2V_{t2} - U_1V_{t1})/g\\).",
    "chapters": [
     "turbomachinery#euler"
    ]
   },
   {
    "ko": "이상 기체 상태 방정식",
    "en": "ideal-gas equation of state",
    "abbr": "",
    "def": "기체의 압력·밀도·온도 관계 \\(p = \\rho RT\\)(공기 \\(R = 287\\) J/(kg·K)). 대부분의 공학 조건에서 성립한다.",
    "chapters": [
     "fluid-properties#density"
    ]
   },
   {
    "ko": "임계 상태",
    "en": "critical state",
    "abbr": "",
    "def": "압축성 유동에서 Ma = 1인(실제 또는 가상의) 단면 상태. 상태량에 별표(*)를 붙이며 목 넓이 \\(A^*\\)가 기준이 된다.",
    "chapters": [
     "compressible-flow#isentropic"
    ]
   },
   {
    "ko": "임계 수심",
    "en": "critical depth",
    "abbr": "",
    "def": "주어진 유량에서 비에너지가 최소가 되는 수심 \\(y_c\\)(직사각형 \\(y_c = (q^2/g)^{1/3}\\)). 이때 Fr = 1이다.",
    "chapters": [
     "open-channel#specific-energy"
    ]
   },
   {
    "ko": "임펠러",
    "en": "impeller",
    "abbr": "",
    "def": "원심 펌프나 팬에서 회전하며 유체에 각운동량을 주는 날개 바퀴(로터).",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "입구 길이",
    "en": "entrance length",
    "abbr": "",
    "def": "관 입구에서 경계층이 자라 속도 분포가 완전 발달할 때까지의 거리 \\(L_h\\). 층류 \\(L_h \\approx 0.05\\,Re\\,D\\), 난류 \\(L_h \\approx 1.359\\,Re^{1/4}D\\)이다.",
    "chapters": [
     "pipe-flow#regimes"
    ]
   },
   {
    "ko": "입자 영상 유속계",
    "en": "PIV",
    "abbr": "",
    "def": "유동에 뿌린 입자를 짧은 간격으로 두 번 찍어 변위로 순간 속도장을 얻는 측정법(PIV). 오일러 속도장을 직접 준다.",
    "chapters": [
     "fluid-kinematics#descriptions"
    ]
   },
   {
    "ko": "자유 분류",
    "en": "free jet",
    "abbr": "",
    "def": "고체 벽 없이 대기 속을 나아가는 분류. 둘레 압력이 대기압이므로 분류 속의 압력도 대기압이다.",
    "chapters": [
     "bernoulli#jets"
    ]
   },
   {
    "ko": "자유 표면",
    "en": "free surface",
    "abbr": "",
    "def": "액체가 대기와 맞닿은 경계면. 그 위의 압력은 대기압이다.",
    "chapters": [
     "open-channel#classification"
    ]
   },
   {
    "ko": "자유류",
    "en": "free stream",
    "abbr": "",
    "def": "물체에서 멀리 떨어져 교란되지 않은 흐름과 그 속도 \\(U\\).",
    "chapters": [
     "external-flow#external"
    ]
   },
   {
    "ko": "작동 원판",
    "en": "actuator disk",
    "abbr": "",
    "def": "로터를 얇은 원판으로 보고 그 앞뒤의 압력 차와 운동량 변화만 다루는 모델. 풍력 터빈의 베츠 한계를 유도한다.",
    "chapters": [
     "turbomachinery#turbines"
    ]
   },
   {
    "ko": "작동점",
    "en": "operating point",
    "abbr": "",
    "def": "펌프 성능 곡선과 관로의 시스템 곡선이 만나는 점. 실제로 운전되는 유량과 양정이다.",
    "chapters": [
     "turbomachinery#performance"
    ]
   },
   {
    "ko": "장",
    "en": "field",
    "abbr": "",
    "def": "위치와 시간의 함수로 주어진 상태량(field). 속도장, 압력장, 온도장 등이 있다.",
    "chapters": [
     "fluid-kinematics#descriptions"
    ]
   },
   {
    "ko": "전단 농화",
    "en": "shear-thickening, dilatant",
    "abbr": "",
    "def": "변형률이 커질수록 겉보기 점성이 커지는 비뉴턴 유체(dilatant, 멱법칙 \\(n > 1\\)). 옥수수 전분 물이 예다.",
    "chapters": [
     "fluid-properties#non-newtonian"
    ]
   },
   {
    "ko": "전단 박화",
    "en": "shear-thinning, pseudoplastic",
    "abbr": "",
    "def": "변형률이 커질수록 겉보기 점성이 작아지는 비뉴턴 유체(pseudoplastic, 멱법칙 \\(n < 1\\)). 페인트, 혈액, 케첩이 예다.",
    "chapters": [
     "fluid-properties#non-newtonian"
    ]
   },
   {
    "ko": "전단 변형률",
    "en": "shear strain rate",
    "abbr": "",
    "def": "유체 요소의 처음 직각이던 두 변 사이의 각이 줄어드는 비율의 절반 \\(\\tfrac12(\\partial u/\\partial y + \\partial v/\\partial x)\\).",
    "chapters": [
     "fluid-kinematics#kinematics-element"
    ]
   },
   {
    "ko": "전수두",
    "en": "total head",
    "abbr": "",
    "def": "압력·속도·위치 수두의 합 \\(H = p/\\rho g + V^2/2g + z\\). 베르누이 식에서는 유선을 따라 일정하다.",
    "chapters": [
     "bernoulli#bernoulli-eq"
    ]
   },
   {
    "ko": "전압",
    "en": "total pressure",
    "abbr": "",
    "def": "정압, 동압, 정수압 항을 모두 더한 압력 \\(p + \\tfrac12\\rho V^2 + \\rho gz\\). 베르누이 식에서는 유선을 따라 일정하다.",
    "chapters": [
     "bernoulli#pitot"
    ]
   },
   {
    "ko": "전양정",
    "en": "net head",
    "abbr": "",
    "def": "펌프가 유체에 준 단위 무게당 에너지 \\(H\\), 곧 출구와 입구의 전수두 차이.",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "절대 속도",
    "en": "absolute velocity",
    "abbr": "",
    "def": "정지한 관찰자가 보는 유체 속도 \\(\\vec V = \\vec W + \\vec U\\)(상대 속도 + 날개 속도).",
    "chapters": [
     "turbomachinery#euler"
    ]
   },
   {
    "ko": "절대 압력",
    "en": "absolute pressure",
    "abbr": "",
    "def": "완전 진공(압력 0)을 기준으로 잰 압력. 계기 압력에 대기압을 더한 값이다.",
    "chapters": [
     "fluid-statics#pressure"
    ]
   },
   {
    "ko": "점성 계수",
    "en": "dynamic viscosity",
    "abbr": "",
    "def": "뉴턴 유체에서 전단 응력과 변형률의 비례 상수 \\(\\mu\\)(Pa·s). 액체는 온도가 오르면 줄고 기체는 커진다.",
    "chapters": [
     "fluid-properties#viscosity"
    ]
   },
   {
    "ko": "점성 저층",
    "en": "viscous sublayer",
    "abbr": "",
    "def": "난류 경계층에서 벽 바로 위의 아주 얇은 층(\\(y^+ < 5\\)). 점성이 지배해 \\(u^+ = y^+\\)이다.",
    "chapters": [
     "external-flow#turbulent"
    ]
   },
   {
    "ko": "점착 조건",
    "en": "no-slip condition",
    "abbr": "",
    "def": "벽과 닿은 유체의 속도가 벽의 속도와 같다는 조건(no-slip). 경계층과 점성 마찰의 근원이다.",
    "chapters": [
     "fluid-properties#viscosity"
    ]
   },
   {
    "ko": "접촉각",
    "en": "contact angle",
    "abbr": "",
    "def": "액체가 고체 벽과 만나는 선에서 액체 표면이 벽과 이루는 각. 90°보다 작으면 액체가 벽을 적셔 모세관에서 올라간다.",
    "chapters": [
     "fluid-properties#surface-tension"
    ]
   },
   {
    "ko": "정상 유동",
    "en": "steady flow",
    "abbr": "",
    "def": "어느 점에서도 상태량이 시간에 따라 변하지 않는 유동(\\(\\partial/\\partial t = 0\\)). 유선, 유적선, 유맥선이 일치한다.",
    "chapters": [
     "fluid-kinematics#descriptions"
    ]
   },
   {
    "ko": "정압",
    "en": "static pressure",
    "abbr": "",
    "def": "유체와 함께 움직이는 계측기가 느낄 압력 \\(p\\). 흐름에 나란한 벽의 작은 구멍으로 잰다.",
    "chapters": [
     "bernoulli#pitot"
    ]
   },
   {
    "ko": "정체 상태",
    "en": "stagnation state",
    "abbr": "",
    "def": "유동을 단열·등엔트로피적으로 정지시켰을 때 얻는 상태. 상태량에 아래첨자 0을 붙인다(\\(p_0\\), \\(T_0\\), \\(\\rho_0\\)).",
    "chapters": [
     "compressible-flow#stagnation"
    ]
   },
   {
    "ko": "정체 온도",
    "en": "stagnation temperature",
    "abbr": "",
    "def": "흐름을 단열적으로 정지시켰을 때의 온도 \\(T_0 = T + V^2/2c_p\\). 단열 유동이면 충격파가 있어도 일정하다.",
    "chapters": [
     "compressible-flow#stagnation"
    ]
   },
   {
    "ko": "정체압",
    "en": "stagnation pressure",
    "abbr": "",
    "def": "흐름을 마찰 없이 정지시킨 점의 압력 \\(p_0 = p + \\tfrac12\\rho V^2\\). 피토관이 이 값을 잰다.",
    "chapters": [
     "bernoulli#pitot"
    ]
   },
   {
    "ko": "정체점",
    "en": "stagnation point",
    "abbr": "",
    "def": "흐름이 물체에 부딪혀 속도가 0이 되는 점. 압력이 가장 높다.",
    "chapters": [
     "bernoulli#pitot"
    ]
   },
   {
    "ko": "제동 동력",
    "en": "brake horsepower, bhp",
    "abbr": "",
    "def": "모터가 펌프 축에 넣은 동력(bhp, 축 동력) \\(T\\omega\\). 수동력을 이것으로 나눈 것이 펌프 효율이다.",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "종단 속도",
    "en": "terminal velocity",
    "abbr": "",
    "def": "떨어지는 물체의 무게가 항력과 부력의 합과 같아져 더 이상 가속하지 않는 속력. 스토크스 영역에서는 \\(V_t = (\\rho_s - \\rho)gD^2/(18\\mu)\\)이다.",
    "chapters": [
     "external-flow#terminal"
    ]
   },
   {
    "ko": "종량 상태량",
    "en": "extensive property",
    "abbr": "",
    "def": "질량, 운동량, 에너지처럼 계의 양에 비례하는 상태량 \\(B\\).",
    "chapters": [
     "fluid-kinematics#rtt"
    ]
   },
   {
    "ko": "주기 유동",
    "en": "periodic flow",
    "abbr": "",
    "def": "상태량이 일정한 주기로 되풀이해 변하는 비정상 유동. 원기둥 뒤의 카르만 와류열, 왕복 펌프의 흐름이 예다.",
    "chapters": [
     "fluid-kinematics#descriptions"
    ]
   },
   {
    "ko": "주축",
    "en": "principal axes",
    "abbr": "",
    "def": "전단 변형률이 0이 되어 유체 요소가 늘고 줄기만 하는 방향의 좌표축. 변형률 텐서를 대각화하는 축이다.",
    "chapters": [
     "fluid-kinematics#kinematics-element"
    ]
   },
   {
    "ko": "준정상",
    "en": "quasi-steady",
    "abbr": "",
    "def": "유동이 천천히 변할 때 매 순간을 정상 유동으로 보고 정상 식(예: 토리첼리 식)을 적용하는 근사.",
    "chapters": [
     "bernoulli#jets"
    ]
   },
   {
    "ko": "증기압",
    "en": "vapor pressure",
    "abbr": "",
    "def": "액체와 그 증기가 평형을 이룰 때 증기의 압력 \\(p_v\\). 온도만의 함수이며, 주위 압력이 이 값까지 떨어지면 끓음이나 공동 현상이 일어난다.",
    "chapters": [
     "fluid-properties#vapor-pressure"
    ]
   },
   {
    "ko": "진공 압력",
    "en": "vacuum pressure",
    "abbr": "",
    "def": "대기압보다 낮은 압력을 대기압과의 차이 \\(p_\\text{atm} - p_\\text{abs}\\)로 나타낸 양수 값.",
    "chapters": [
     "fluid-statics#pressure"
    ]
   },
   {
    "ko": "질량 유량",
    "en": "mass flow rate",
    "abbr": "",
    "def": "단면을 단위 시간에 지나는 질량 \\(\\dot m = \\int\\rho V_n\\,dA = \\rho VA\\)(kg/s).",
    "chapters": [
     "control-volume#mass"
    ]
   },
   {
    "ko": "차압 유량계",
    "en": "differential-pressure flowmeter",
    "abbr": "",
    "def": "관을 일부러 좁혀 만든 압력 차로 유량을 재는 장치. 오리피스, 노즐, 벤투리 유량계가 있다.",
    "chapters": [
     "bernoulli#meters"
    ]
   },
   {
    "ko": "차원",
    "en": "dimensionality",
    "abbr": "",
    "def": "유동을 묘사하는 데 필요한 공간 좌표의 수(dimensionality). 속도장이 좌표 몇 개에 의존하는지로 1차원·2차원·3차원 유동을 나눈다.",
    "chapters": [
     "fluid-kinematics#descriptions"
    ]
   },
   {
    "ko": "차원 동차성",
    "en": "dimensional homogeneity",
    "abbr": "",
    "def": "물리 법칙을 나타내는 식의 모든 항이 같은 차원을 가져야 한다는 원리. 차원 해석의 출발점이다.",
    "chapters": [
     "fluid-properties#fluid-def"
    ]
   },
   {
    "ko": "차원 행렬",
    "en": "dimensional matrix",
    "abbr": "",
    "def": "각 변수의 기본 차원 지수를 열로 늘어놓은 행렬. 그 계수(rank)가 Π 정리의 \\(j\\)다.",
    "chapters": [
     "dimensional-analysis#pi-theorem"
    ]
   },
   {
    "ko": "척도 높이",
    "en": "scale height",
    "abbr": "",
    "def": "등온 대기에서 압력이 \\(1/e\\)로 줄어드는 높이 \\(H = RT_0/g\\)(288 K에서 약 8.4 km).",
    "chapters": [
     "fluid-statics#atmosphere"
    ]
   },
   {
    "ko": "천음속",
    "en": "transonic",
    "abbr": "",
    "def": "마하 수 약 0.8–1.2의 유동 영역. 날개 윗면 등에 국소적인 초음속 영역과 약한 충격파가 생긴다.",
    "chapters": [
     "compressible-flow#mach"
    ]
   },
   {
    "ko": "천이",
    "en": "transitional flow",
    "abbr": "",
    "def": "층류에서 난류로 바뀌는 과정이나 그 중간 영역. 원형 관에서는 대략 \\(2300 \\lesssim Re \\lesssim 4000\\)이며 난류 덩어리가 간헐적으로 지나간다.",
    "chapters": [
     "pipe-flow#regimes"
    ]
   },
   {
    "ko": "체적 유량",
    "en": "volume flow rate",
    "abbr": "",
    "def": "단면을 단위 시간에 지나는 부피 \\(Q = \\int V_n\\,dA = VA\\)(m³/s).",
    "chapters": [
     "bernoulli#meters"
    ]
   },
   {
    "ko": "체적 탄성 계수",
    "en": "bulk modulus of elasticity",
    "abbr": "",
    "def": "압력 변화와 그로 인한 부피 변화율의 비 \\(E_v = -dp/(dV/V)\\). 클수록 압축하기 어렵다(물 약 2.2 GPa).",
    "chapters": [
     "fluid-properties#compressibility"
    ]
   },
   {
    "ko": "체절 양정",
    "en": "shutoff head",
    "abbr": "",
    "def": "펌프의 토출 밸브를 완전히 닫아 유량이 0일 때의 양정. 성능 곡선이 세로축과 만나는 점이다.",
    "chapters": [
     "turbomachinery#performance"
    ]
   },
   {
    "ko": "초음속",
    "en": "supersonic",
    "abbr": "",
    "def": "마하 수가 1보다 큰 유동. 교란이 상류로 전파되지 못하고 충격파와 팽창파가 생긴다.",
    "chapters": [
     "compressible-flow#mach"
    ]
   },
   {
    "ko": "초크",
    "en": "choking",
    "abbr": "",
    "def": "흐름이 더 이상 유량을 늘리거나 조건 변화를 상류로 전하지 못하는 상태. 개수로에서는 장애물 위에서 비에너지가 최소(임계)에 이르는 것, 노즐에서는 목에서 Ma = 1에 이르는 것이다.",
    "chapters": [
     "open-channel#specific-energy"
    ]
   },
   {
    "ko": "최고 효율점",
    "en": "best efficiency point, BEP",
    "abbr": "",
    "def": "펌프 성능 곡선에서 효율이 가장 높은 점(BEP). 펌프의 정격값은 보통 이 점의 유량·양정·동력이다.",
    "chapters": [
     "turbomachinery#performance"
    ]
   },
   {
    "ko": "최대 유량",
    "en": "free delivery",
    "abbr": "",
    "def": "펌프 양정이 0일 때의 유량(free delivery). 성능 곡선이 가로축과 만나는 점이다.",
    "chapters": [
     "turbomachinery#performance"
    ]
   },
   {
    "ko": "최적 수리 단면",
    "en": "best hydraulic cross section",
    "abbr": "",
    "def": "주어진 단면적에서 윤변이 가장 짧아 같은 경사·거칠기로 가장 많은 유량을 흘리는 단면. 직사각형은 \\(b = 2y\\), 사다리꼴은 정육각형의 절반이다.",
    "chapters": [
     "open-channel#uniform-flow"
    ]
   },
   {
    "ko": "추력",
    "en": "thrust",
    "abbr": "",
    "def": "추진 기관이 유체의 운동량을 바꾼 반작용으로 받는 힘. 검사 체적의 선운동량 방정식으로 구한다.",
    "chapters": [
     "control-volume#forces"
    ]
   },
   {
    "ko": "축 유도 계수",
    "en": "axial induction factor",
    "abbr": "",
    "def": "작동 원판에서 바람 속도가 줄어든 비율 \\(a\\)(\\(V_\\text{disk} = V_1(1 - a)\\)). 출력은 \\(a = 1/3\\)에서 최대다.",
    "chapters": [
     "turbomachinery#turbines"
    ]
   },
   {
    "ko": "축류 수축부",
    "en": "vena contracta",
    "abbr": "",
    "def": "오리피스나 노즐에서 나온 분류가 가장 좁아지고 유선이 나란해지는 단면(vena contracta).",
    "chapters": [
     "bernoulli#jets"
    ]
   },
   {
    "ko": "축일",
    "en": "shaft work",
    "abbr": "",
    "def": "회전축을 통해 검사 체적과 주고받는 일. 펌프는 유체에 축일을 주고 터빈은 빼낸다.",
    "chapters": [
     "control-volume#energy"
    ]
   },
   {
    "ko": "층류",
    "en": "laminar flow",
    "abbr": "",
    "def": "유체가 서로 섞이지 않는 매끈한 층을 이루며 흐르는 유동. 원형 관에서는 \\(Re \\lesssim 2300\\)이다.",
    "chapters": [
     "pipe-flow#regimes"
    ]
   },
   {
    "ko": "카르만 와류열",
    "en": "Kármán vortex street",
    "abbr": "",
    "def": "원주 같은 뭉툭한 물체 뒤에서 위아래로 번갈아 소용돌이가 떨어져 나가 생기는 와류의 줄. 방출 진동수는 \\(\\mathrm{St} \\approx 0.2\\)로 거의 일정하다.",
    "chapters": [
     "dimensional-analysis#numbers"
    ]
   },
   {
    "ko": "캠버선",
    "en": "camber line",
    "abbr": "",
    "def": "에어포일의 위·아래 면 가운데를 이은 곡선. 캠버가 있으면 받음각 0에서도 양력이 생긴다.",
    "chapters": [
     "external-flow#lift"
    ]
   },
   {
    "ko": "코시 운동 방정식",
    "en": "Cauchy equation",
    "abbr": "",
    "def": "임의의 연속체에 성립하는 미분형 운동량 방정식 \\(\\rho\\,D\\vec V/Dt = \\rho\\vec g + \\nabla\\cdot\\sigma_{ij}\\). 구성 방정식이 있어야 풀 수 있다.",
    "chapters": [
     "differential-analysis#navier-stokes"
    ]
   },
   {
    "ko": "콜브룩 식",
    "en": "Colebrook equation",
    "abbr": "",
    "def": "난류 관 마찰 계수의 음함수식 \\(1/\\sqrt f = -2\\log_{10}[(\\varepsilon/D)/3.7 + 2.51/(Re\\sqrt f)]\\). 무디 선도의 바탕이다.",
    "chapters": [
     "pipe-flow#moody"
    ]
   },
   {
    "ko": "쿠에트 유동",
    "en": "Couette flow",
    "abbr": "",
    "def": "한 판이 움직이는 두 평행판 사이의 흐름. 압력 구배가 없으면 속도 분포는 직선 \\(u = Uy/h\\)이다.",
    "chapters": [
     "fluid-properties#viscosity"
    ]
   },
   {
    "ko": "쿠타 조건",
    "en": "Kutta condition",
    "abbr": "",
    "def": "날카로운 뒷전에서 흐름이 매끄럽게 떠나야 한다는 조건. 날개 주위 순환 \\(\\Gamma\\)의 크기를 정한다.",
    "chapters": [
     "external-flow#lift"
    ]
   },
   {
    "ko": "쿠타–주콥스키 정리",
    "en": "Kutta–Joukowski theorem",
    "abbr": "",
    "def": "2차원 물체가 받는 단위 길이당 양력이 \\(L' = \\rho U\\Gamma\\)라는 정리. 모양과 무관하게 순환 \\(\\Gamma\\)만으로 정해진다.",
    "chapters": [
     "differential-analysis#cylinder"
    ]
   },
   {
    "ko": "크누센 수",
    "en": "Knudsen number",
    "abbr": "",
    "def": "분자 평균 자유 행로와 대표 길이의 비 \\(\\mathrm{Kn} = \\lambda/L\\). \\(\\mathrm{Kn} \\ll 1\\)이면 연속체 가정이 성립한다.",
    "chapters": [
     "fluid-properties#fluid-def"
    ]
   },
   {
    "ko": "터보 기계",
    "en": "turbomachine",
    "abbr": "",
    "def": "회전하는 날개가 유체의 각운동량을 바꿔 에너지를 주고받는 기계(동역학 기계). 닫힌 공간이 없다는 점에서 용적식 기계와 다르다.",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "터빈",
    "en": "turbine",
    "abbr": "",
    "def": "유체에서 에너지를 빼내 축을 돌리는 터보 기계. 물을 쓰면 수차라고도 한다.",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "특성 척도",
    "en": "characteristic scale",
    "abbr": "",
    "def": "문제를 대표하는 길이·속도·시간 등의 크기. 변수를 이것으로 나누면 무차원 변수가 되고 매개변수들이 무차원 수로 묶인다.",
    "chapters": [
     "dimensional-analysis#dimensions"
    ]
   },
   {
    "ko": "틱소트로피",
    "en": "thixotropy",
    "abbr": "",
    "def": "가만히 두면 굳고 휘저으면 시간이 지나며 묽어지는, 겉보기 점성이 시간에 의존하는 성질. 요구르트, 일부 페인트가 예다.",
    "chapters": [
     "fluid-properties#non-newtonian"
    ]
   },
   {
    "ko": "팬",
    "en": "fan",
    "abbr": "",
    "def": "기체의 압력을 조금(대략 10 kPa 이하) 올리며 많은 유량을 보내는 터보 기계.",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "팽창 부채",
    "en": "expansion fan",
    "abbr": "",
    "def": "초음속 유동이 볼록한 코너를 돌 때 코너에서 부채꼴로 퍼지는 무수한 마하파. 등엔트로피적으로 압력이 낮아지고 마하 수가 커진다.",
    "chapters": [
     "compressible-flow#oblique"
    ]
   },
   {
    "ko": "펌프",
    "en": "pump",
    "abbr": "",
    "def": "액체에 에너지를 주어 압력이나 높이를 올리는 기계.",
    "chapters": [
     "turbomachinery#classification"
    ]
   },
   {
    "ko": "페트로프 식",
    "en": "Petroff's law",
    "abbr": "",
    "def": "좁은 틈의 저널 베어링에서 점성 토크 \\(T = 2\\pi\\mu R^3\\omega L/c\\)와 손실 동력 \\(\\dot W = T\\omega\\)를 주는 식.",
    "chapters": [
     "fluid-properties#viscosity"
    ]
   },
   {
    "ko": "평균 속도",
    "en": "average velocity",
    "abbr": "",
    "def": "단면을 지나는 체적 유량을 넓이로 나눈 값 \\(V = Q/A\\). 실제 속도 분포를 하나의 값으로 대표한다.",
    "chapters": [
     "control-volume#mass"
    ]
   },
   {
    "ko": "평균 자유 행로",
    "en": "mean free path",
    "abbr": "",
    "def": "기체 분자가 연이은 두 충돌 사이에 움직이는 평균 거리 \\(\\lambda\\). 크누센 수의 분자다.",
    "chapters": [
     "fluid-properties#fluid-def"
    ]
   },
   {
    "ko": "표면 장력",
    "en": "surface tension",
    "abbr": "",
    "def": "액체 표면 위에 그은 선의 단위 길이당 작용하는 당김 \\(\\sigma\\)(N/m). 표면을 단위 넓이만큼 늘리는 데 드는 일과 같다.",
    "chapters": [
     "fluid-properties#surface-tension"
    ]
   },
   {
    "ko": "프란틀–마이어 함수",
    "en": "Prandtl–Meyer function",
    "abbr": "",
    "def": "초음속 유동이 팽창 부채를 지나며 꺾인 각과 마하 수를 잇는 함수 \\(\\nu(\\mathrm{Ma})\\). 꺾임각 \\(\\theta = \\nu(\\mathrm{Ma}_2) - \\nu(\\mathrm{Ma}_1)\\)이다.",
    "chapters": [
     "compressible-flow#oblique"
    ]
   },
   {
    "ko": "프루드 수",
    "en": "Froude number",
    "abbr": "",
    "def": "관성력과 중력의 비 \\(\\mathrm{Fr} = V/\\sqrt{gL}\\). 개수로에서는 \\(V/\\sqrt{gy}\\)로, 1보다 작으면 상류, 크면 사류다.",
    "chapters": [
     "dimensional-analysis#numbers"
    ]
   },
   {
    "ko": "피에조미터",
    "en": "piezometer",
    "abbr": "",
    "def": "용기나 관에 세운 열린 관. 액면 높이 \\(h\\)가 그 점의 계기 압력 \\(\\rho gh\\)를 준다.",
    "chapters": [
     "fluid-statics#manometer"
    ]
   },
   {
    "ko": "피토 정압관",
    "en": "Pitot-static tube",
    "abbr": "",
    "def": "정체압 구멍과 정압 구멍을 한 몸에 넣어 그 차 \\(\\tfrac12\\rho V^2\\)로 유속을 재는 장치.",
    "chapters": [
     "bernoulli#pitot"
    ]
   },
   {
    "ko": "하겐–푸아죄유 유동",
    "en": "Hagen–Poiseuille flow",
    "abbr": "",
    "def": "원형 관 속의 완전 발달 층류. 속도 분포는 포물선이고 유량은 \\(Q = \\pi D^4\\Delta p/(128\\mu L)\\)이다.",
    "chapters": [
     "pipe-flow#laminar"
    ]
   },
   {
    "ko": "하나의 곡선으로 붕괴",
    "en": "data collapse",
    "abbr": "",
    "def": "서로 다른 조건에서 잰 실험 자료를 알맞은 무차원 좌표로 그리면 하나의 곡선 위에 모이는 현상(data collapse). 차원 해석이 옳다는 증거다.",
    "chapters": [
     "dimensional-analysis#data-collapse"
    ]
   },
   {
    "ko": "하디 크로스 방법",
    "en": "Hardy Cross method",
    "abbr": "",
    "def": "관망 해석의 반복법. 절점 조건을 만족하는 유량을 가정한 뒤 각 고리의 수두 손실 합이 0이 되도록 보정 유량 \\(\\Delta Q\\)를 더하기를 되풀이한다.",
    "chapters": [
     "pipe-flow#systems"
    ]
   },
   {
    "ko": "항력",
    "en": "drag",
    "abbr": "",
    "def": "흐르는 유체가 물체에 주는 힘 중 자유류 방향 성분 \\(F_D\\). 마찰 항력과 압력 항력의 합이며, 항력 계수 \\(C_D = F_D/(\\tfrac12\\rho V^2A)\\)로 나타낸다.",
    "chapters": [
     "external-flow#external"
    ]
   },
   {
    "ko": "혀",
    "en": "tongue, cutwater",
    "abbr": "",
    "def": "원심 펌프 벌류트가 시작되는 뾰족한 부분(tongue, cutwater). 벌류트와 송출구를 가른다.",
    "chapters": [
     "turbomachinery#euler"
    ]
   },
   {
    "ko": "형상 계수",
    "en": "shape factor",
    "abbr": "",
    "def": "배제 두께와 운동량 두께의 비 \\(H = \\delta^*/\\theta\\). 블라시우스 층류는 2.59, 난류는 1.3–1.4이며 클수록 벽 근처가 느려 박리하기 쉽다.",
    "chapters": [
     "external-flow#external"
    ]
   },
   {
    "ko": "회전 유동",
    "en": "rotational flow",
    "abbr": "",
    "def": "와도가 0이 아닌 곳이 있는 유동. 경계층과 후류처럼 점성이 작용한 영역은 회전 유동이다.",
    "chapters": [
     "fluid-kinematics#vorticity"
    ]
   },
   {
    "ko": "회전 점도계",
    "en": "rotational viscometer",
    "abbr": "",
    "def": "동심 원통 사이 틈의 유체를 돌릴 때 필요한 토크로 점성 계수를 재는 장치.",
    "chapters": [
     "fluid-properties#viscosity"
    ]
   },
   {
    "ko": "회전율",
    "en": "rate of rotation",
    "abbr": "",
    "def": "유체 요소의 두 직교 변이 회전하는 각속도의 평균. 와도의 절반과 같다.",
    "chapters": [
     "fluid-kinematics#kinematics-element"
    ]
   },
   {
    "ko": "흡출관",
    "en": "draft tube",
    "abbr": "",
    "def": "반동 수차 출구에서 단면이 점점 넓어지는 관. 남은 운동 에너지를 압력으로 회수하고 터빈을 방수로보다 높게 둘 수 있게 한다.",
    "chapters": [
     "turbomachinery#turbines"
    ]
   }
  ]
 }
});
