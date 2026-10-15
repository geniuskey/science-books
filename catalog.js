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
   "field": "chemistry",
   "status": "published",
   "manifest": "general-chemistry/course.json",
   "title": "일반화학",
   "en": "General Chemistry",
   "level": "대학 1학년 · 일반화학 I·II",
   "description": "원자와 몰에서 출발해 결합·분자 구조, 기체와 용액, 열역학, 속도론, 평형, 산·염기, 전기화학, 핵화학까지 — 대학 1학년 일반화학 전 과정을 수식과 시뮬레이터로 직접 실험하며 익히는 인터랙티브 교과서.",
   "url": "https://science.euiyun.com/general-chemistry/",
   "published": 23,
   "total": 23
  },
  {
   "id": "general-physics",
   "field": "physics",
   "status": "writing",
   "manifest": "general-physics/course.json",
   "title": "일반물리학",
   "en": "General Physics",
   "level": "대학 1학년 · 일반물리학 I·II",
   "description": "운동과 힘, 에너지와 운동량, 회전, 진동과 파동, 열, 전기와 자기, 빛, 상대성까지 — 미적분 기반 대학 1학년 일반물리 전 과정을 끌고, 던지고, 부딪쳐 보며 익히는 인터랙티브 교과서.",
   "url": "https://science.euiyun.com/general-physics/",
   "published": 18,
   "total": 35
  },
  {
   "id": "organic-chemistry",
   "field": "chemistry",
   "status": "planned",
   "title": "유기화학",
   "en": "Organic Chemistry",
   "level": "대학 2학년",
   "description": "구조와 결합, 입체화학, 반응 메커니즘(치환·제거·첨가), 작용기별 반응, 분광학 — 화살표로 전자를 따라간다."
  },
  {
   "id": "statics",
   "field": "mechanics",
   "status": "planned",
   "title": "정역학",
   "en": "Statics",
   "level": "대학 2학년",
   "description": "힘과 모멘트, 자유 물체도, 강체 평형, 트러스·프레임, 마찰, 도심과 관성 모멘트."
  },
  {
   "id": "dynamics",
   "field": "mechanics",
   "status": "planned",
   "title": "동역학",
   "en": "Dynamics",
   "level": "대학 2학년",
   "description": "질점과 강체의 운동학·운동역학, 일–에너지, 충격–운동량, 상대 운동, 진동."
  },
  {
   "id": "fluid-mechanics",
   "field": "mechanics",
   "status": "planned",
   "title": "유체역학",
   "en": "Fluid Mechanics",
   "level": "대학 2–3학년",
   "description": "유체 정역학, 베르누이 식, 검사 체적 해석, 차원 해석, 관 유동과 경계층."
  }
 ]
});
