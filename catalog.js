/* 생성 파일 — catalog.json·course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCatalog({
 "site": {
  "name": "SciBook",
  "title": "SciBook — 대학 인터랙티브 과학 교과서",
  "url": "https://science.euiyun.com/",
  "description": "대학 강의 과목 하나가 교과서 한 권. 읽고, 수식을 따라가고, 시뮬레이터로 직접 실험하며 이해하는 한국어 인터랙티브 과학 교과서 시리즈."
 },
 "fields": [
  {
   "id": "chemistry",
   "name": "화학",
   "en": "Chemistry",
   "color": "#0a7f6f"
  },
  {
   "id": "physics",
   "name": "물리학",
   "en": "Physics",
   "color": "#2f6fe0"
  },
  {
   "id": "mechanics",
   "name": "공학 역학",
   "en": "Engineering Mechanics",
   "color": "#c2410c"
  }
 ],
 "courses": [
  {
   "id": "general-chemistry",
   "code": "GC",
   "field": "chemistry",
   "status": "published",
   "manifest": "general-chemistry/course.json",
   "title": "일반화학",
   "en": "General Chemistry",
   "level": "대학 1학년 · 일반화학 I·II",
   "description": "원자와 몰에서 출발해 결합·분자 구조, 기체와 용액, 열역학, 속도론, 평형, 산·염기, 전기화학, 핵화학까지 — 대학 1학년 일반화학 전 과정을 수식과 시뮬레이터로 직접 실험하며 익히는 인터랙티브 교과서.",
   "url": "https://science.euiyun.com/general-chemistry/",
   "published": 23,
   "total": 23,
   "color": "#0a7f6f",
   "colorDark": "#2fd1b5",
   "sims": 99,
   "problems": 326
  },
  {
   "id": "general-physics",
   "code": "GP",
   "field": "physics",
   "status": "published",
   "manifest": "general-physics/course.json",
   "title": "일반물리학",
   "en": "General Physics",
   "level": "대학 1학년 · 일반물리학 I·II",
   "description": "운동과 힘, 에너지와 운동량, 회전, 진동과 파동, 열, 전기와 자기, 빛, 상대성까지 — 미적분 기반 대학 1학년 일반물리 전 과정을 끌고, 던지고, 부딪쳐 보며 익히는 인터랙티브 교과서.",
   "url": "https://science.euiyun.com/general-physics/",
   "published": 35,
   "total": 35,
   "color": "#2f6fe0",
   "colorDark": "#6b9bff",
   "sims": 159,
   "problems": 477
  },
  {
   "id": "modern-physics",
   "field": "physics",
   "status": "published",
   "manifest": "modern-physics/course.json",
   "code": "MP",
   "title": "현대물리학",
   "en": "Modern Physics",
   "level": "대학 2학년 · 반도체 기초",
   "description": "광자와 물질파, 슈뢰딩거 방정식, 양자 우물과 터널링, 수소 원자와 스핀, 양자 통계, 분자 결합에서 에너지 띠와 LED·레이저까지 — 반도체 소자와 공정을 떠받치는 양자역학을 직접 풀고 만지며 익히는 인터랙티브 교과서.",
   "url": "https://science.euiyun.com/modern-physics/",
   "published": 15,
   "total": 15,
   "color": "#6d28d9",
   "colorDark": "#a78bfa",
   "sims": 76,
   "problems": 229
  },
  {
   "id": "solid-state",
   "field": "physics",
   "status": "writing",
   "manifest": "solid-state/course.json",
   "code": "SS",
   "title": "고체물리",
   "en": "Solid State Physics",
   "level": "대학 3학년 · 반도체 기초",
   "description": "결정 구조와 X선 회절, 결합과 변형, 결함, 포논과 열, 자유 전자와 띠 구조, 캐리어 통계·수송·재결합, 접합과 계면, 유전체·자성·나노 구조까지 — 실리콘 웨이퍼 위에서 일어나는 일을 원자 배열부터 직접 계산하고 만지며 익히는 인터랙티브 교과서.",
   "url": "https://science.euiyun.com/solid-state/",
   "published": 16,
   "total": 18,
   "color": "#0e7490",
   "colorDark": "#22d3ee",
   "sims": 75,
   "problems": 235
  },
  {
   "id": "organic-chemistry",
   "code": "OC",
   "field": "chemistry",
   "status": "planned",
   "title": "유기화학",
   "en": "Organic Chemistry",
   "level": "대학 2학년",
   "description": "구조와 결합, 입체화학, 반응 메커니즘(치환·제거·첨가), 작용기별 반응, 분광학 — 화살표로 전자를 따라간다."
  },
  {
   "id": "statics",
   "code": "ST",
   "field": "mechanics",
   "status": "planned",
   "title": "정역학",
   "en": "Statics",
   "level": "대학 2학년",
   "description": "힘과 모멘트, 자유 물체도, 강체 평형, 트러스·프레임, 마찰, 도심과 관성 모멘트."
  },
  {
   "id": "dynamics",
   "code": "DY",
   "field": "mechanics",
   "status": "planned",
   "title": "동역학",
   "en": "Dynamics",
   "level": "대학 2학년",
   "description": "질점과 강체의 운동학·운동역학, 일–에너지, 충격–운동량, 상대 운동, 진동."
  },
  {
   "id": "fluid-mechanics",
   "code": "FM",
   "field": "mechanics",
   "status": "published",
   "manifest": "fluid-mechanics/course.json",
   "title": "유체역학",
   "en": "Fluid Mechanics",
   "level": "대학 2–3학년 · 공학 유체역학",
   "description": "유체의 성질과 정역학, 베르누이 식, 검사 체적 해석, 나비에–스토크스와 퍼텐셜 유동, 차원 해석, 관 유동과 무디 선도, 경계층과 항력·양력, 개수로·압축성 유동, 펌프까지 — 흐름을 직접 그리고 흘려 보며 익히는 인터랙티브 공학 교과서.",
   "url": "https://science.euiyun.com/fluid-mechanics/",
   "published": 14,
   "total": 14,
   "color": "#0b7285",
   "colorDark": "#3bc9db",
   "sims": 76,
   "problems": 239
  }
 ]
});
