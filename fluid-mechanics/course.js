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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     ],
     "status": "planned"
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
     "slug": "property-tables",
     "num": "A",
     "title": "유체 물성과 자료",
     "en": "Fluid Properties and Data",
     "desc": "물·공기의 온도별 밀도·점성, 표준 대기, 단위 환산, 무디 선도와 등엔트로피·충격파 표를 계산기로 찾는다.",
     "tags": [
      "부록",
      "데이터"
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
  }
 },
 "published": 1,
 "total": 14,
 "url": "https://science.euiyun.com/fluid-mechanics/"
});
