/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "solid-state",
 "title": "고체물리",
 "en": "Solid State Physics",
 "field": "physics",
 "level": "대학 3학년 · 반도체 기초",
 "status": "writing",
 "description": "결정 구조와 X선 회절, 결합과 변형, 결함, 포논과 열, 자유 전자와 띠 구조, 캐리어 통계·수송·재결합, 접합과 계면, 유전체·자성·나노 구조까지 — 실리콘 웨이퍼 위에서 일어나는 일을 원자 배열부터 직접 계산하고 만지며 익히는 인터랙티브 교과서.",
 "accent": {
  "light": "#0e7490",
  "dark": "#22d3ee",
  "light2": "#b45309",
  "dark2": "#fbbf24"
 },
 "mark": "<path d=\"M9 11.5 16 7.5 23 11.5 23 20.5 16 24.5 9 20.5Z\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.6\"/><path d=\"M9 11.5 16 15.5 23 11.5M16 15.5V24.5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.6\"/><circle cx=\"16\" cy=\"7.5\" r=\"2\" fill=\"#fff\"/><circle cx=\"9\" cy=\"11.5\" r=\"2\" fill=\"#fff\"/><circle cx=\"23\" cy=\"11.5\" r=\"2\" fill=\"#fff\"/><circle cx=\"16\" cy=\"15.5\" r=\"2\" fill=\"#fff\"/><circle cx=\"9\" cy=\"20.5\" r=\"2\" fill=\"#fff\"/><circle cx=\"23\" cy=\"20.5\" r=\"2\" fill=\"#fff\"/><circle cx=\"16\" cy=\"24.5\" r=\"2\" fill=\"#fff\"/>",
 "parts": [
  {
   "title": "제1부 결정",
   "chapters": [
    {
     "slug": "crystal-structure",
     "num": "01",
     "title": "결정 구조",
     "en": "Crystal Structure",
     "desc": "격자와 기저, 단위 셀, 14가지 브라베 격자, 단순·체심·면심 입방과 육방 조밀, 다이아몬드·섬아연석·암염 구조, 밀러 지수와 면 밀도 — 웨이퍼 방위 (100)·(110)·(111)과 노치.",
     "tags": [
      "브라베 격자",
      "밀러 지수"
     ]
    },
    {
     "slug": "reciprocal-diffraction",
     "num": "02",
     "title": "역격자와 X선 회절",
     "en": "Reciprocal Lattice and Diffraction",
     "desc": "브래그 법칙과 라우에 조건, 역격자와 에발트 구, 브릴루앙 영역, 구조 인자와 소멸 규칙, 분말 회절과 셰러 식, 고분해능 XRD 로킹 곡선 — SiGe 에피층의 조성과 변형 측정.",
     "tags": [
      "역격자",
      "XRD"
     ]
    },
    {
     "slug": "bonding-elasticity",
     "num": "03",
     "title": "결합과 탄성",
     "en": "Bonding and Elasticity",
     "desc": "이온·공유·금속·반데르발스 결합, 레너드–존스 퍼텐셜과 응집 에너지, 마델룽 상수, 응력·변형 텐서, 입방정 탄성 상수와 영률의 방향 의존, 격자 불일치와 임계 두께 — 변형 실리콘 채널.",
     "tags": [
      "응집 에너지",
      "탄성 상수"
     ]
    },
    {
     "slug": "crystal-defects",
     "num": "04",
     "title": "결정 결함",
     "en": "Crystal Defects",
     "desc": "공공과 격자간 원자의 평형 농도, 프렌켈·쇼트키 결함, 고체 속 확산과 픽 법칙, 전위와 버거스 벡터, 적층 결함과 결정립계, 결함 준위 — 웨이퍼의 COP, 슬립, 게터링.",
     "tags": [
      "점결함",
      "전위"
     ]
    }
   ]
  },
  {
   "title": "제2부 격자 진동과 열",
   "chapters": [
    {
     "slug": "phonons",
     "num": "05",
     "title": "격자 진동과 포논",
     "en": "Lattice Vibrations and Phonons",
     "desc": "단원자 사슬의 분산 관계, 군속도와 음속, 이원자 사슬의 음향·광학 가지, 3차원 포논과 편광, 포논의 양자화와 운동량, 중성자·라만 산란 — 라만 분광으로 실리콘 응력 재기.",
     "tags": [
      "분산 관계",
      "라만"
     ]
    },
    {
     "slug": "thermal-properties",
     "num": "06",
     "title": "고체의 열적 성질",
     "en": "Thermal Properties of Solids",
     "desc": "뒬롱–프티 법칙, 아인슈타인·디바이 비열, 포논 상태 밀도, 비조화성과 열팽창, 포논 열전도와 움클랍 산란, 나노 구조의 열저항 — 트랜지스터 자체 발열과 열 예산.",
     "tags": [
      "디바이 모형",
      "열전도"
     ]
    }
   ]
  },
  {
   "title": "제3부 결정 속 전자",
   "chapters": [
    {
     "slug": "free-electron",
     "num": "07",
     "title": "자유 전자 모형",
     "en": "The Free Electron Model",
     "desc": "드루드 모형과 옴의 법칙, 조머펠트 모형, 페르미 구와 페르미 면, 전자 비열, 일함수와 열전자 방출, 비데만–프란츠 법칙, 얇은 금속선의 크기 효과 — 구리 배선 저항이 커지는 이유.",
     "tags": [
      "드루드",
      "페르미 면"
     ]
    },
    {
     "slug": "band-structure",
     "num": "08",
     "title": "띠 구조",
     "en": "Band Structure",
     "desc": "거의 자유 전자 모형과 띠 간격, 축소 영역 그림, 강결합 띠(1차원·2차원·그래핀), 실리콘·저마늄·GaAs의 띠 구조, 등에너지면과 골짜기, 유효 질량 텐서, 변형에 따른 띠 변화.",
     "tags": [
      "띠 간격",
      "유효 질량"
     ]
    },
    {
     "slug": "electron-dynamics",
     "num": "09",
     "title": "결정 속 전자의 운동",
     "en": "Electron Dynamics in Crystals",
     "desc": "파속과 군속도, 준고전 운동 방정식과 결정 운동량, 블로흐 진동, 채워진 띠와 정공, 사이클로트론 운동과 공명, 홀 효과와 홀 이동도 — 웨이퍼 홀 측정과 반 데르 포 방법.",
     "tags": [
      "정공",
      "홀 효과"
     ]
    }
   ]
  },
  {
   "title": "제4부 반도체",
   "chapters": [
    {
     "slug": "carrier-statistics",
     "num": "10",
     "title": "반도체의 캐리어 통계",
     "en": "Carrier Statistics in Semiconductors",
     "desc": "진성 캐리어 농도, 도너·억셉터와 이온화 에너지, 전하 중성 조건과 페르미 준위, 동결·외인성·진성 영역, 보상, 축퇴 도핑과 띠 간격 축소 — 도핑 농도에서 면저항까지.",
     "tags": [
      "페르미 준위",
      "도핑"
     ]
    },
    {
     "slug": "carrier-transport",
     "num": "11",
     "title": "캐리어 수송",
     "en": "Carrier Transport",
     "desc": "표류와 이동도, 격자·이온화 불순물 산란과 마티센 규칙, 도핑·온도 의존 이동도, 고전기장과 속도 포화, 확산과 아인슈타인 관계, 표류–확산 방정식, 4탐침 저항 측정 — 변형으로 이동도 높이기.",
     "tags": [
      "이동도",
      "확산"
     ]
    },
    {
     "slug": "recombination",
     "num": "12",
     "title": "생성과 재결합",
     "en": "Generation and Recombination",
     "desc": "비평형과 의사 페르미 준위, 직접·복사 재결합, 결함을 통한 SRH 재결합, 오제 재결합, 표면 재결합 속도, 연속 방정식과 확산 길이, 광전도 감쇠 — 소수 캐리어 수명과 웨이퍼 오염 관리.",
     "tags": [
      "SRH",
      "수명"
     ]
    },
    {
     "slug": "junctions",
     "num": "13",
     "title": "접합과 계면",
     "en": "Junctions and Interfaces",
     "desc": "pn 접합의 띠 그림과 내부 전위, 공핍층과 전기장, 금속–반도체 접합과 쇼트키 장벽, 페르미 준위 고정, 옴 접촉과 접촉 비저항, 이종 접합과 띠 어긋남, MOS 계면의 띠 굽음.",
     "tags": [
      "pn 접합",
      "쇼트키"
     ]
    }
   ]
  },
  {
   "title": "제5부 물질의 응답과 나노 구조",
   "chapters": [
    {
     "slug": "dielectric-optical",
     "num": "14",
     "title": "유전체와 광학적 성질",
     "en": "Dielectric and Optical Properties",
     "desc": "분극의 종류와 국소장, 클라우지우스–모소티 식, 로런츠 진동자와 복소 유전 함수, 굴절률과 흡수, 금속의 플라스마 진동수, 엑시톤, 강유전체 — high-k·low-k 절연막과 강유전 메모리.",
     "tags": [
      "유전 함수",
      "high-k"
     ]
    },
    {
     "slug": "magnetism",
     "num": "15",
     "title": "자성",
     "en": "Magnetism",
     "desc": "반자성과 상자성, 브릴루앙 함수와 퀴리 법칙, 교환 상호작용과 평균장 이론, 강자성·반강자성, 자구와 히스테리시스, 자기 이방성, 스핀 분극 터널링과 TMR — MRAM 셀의 물리.",
     "tags": [
      "강자성",
      "TMR"
     ]
    },
    {
     "slug": "nanostructures",
     "num": "16",
     "title": "저차원 계와 나노 수송",
     "en": "Low-Dimensional Systems and Nanoscale Transport",
     "desc": "2·1·0차원 상태 밀도와 부띠, 2차원 전자 기체, 그래핀과 2차원 반도체, 탄도 수송과 란다우어 식, 양자 전도도, 단전자 효과, 양자 홀 효과 — 나노시트 채널과 차세대 소자.",
     "tags": [
      "양자 전도도",
      "2차원 물질"
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
     "title": "고체 물성 자료",
     "en": "Materials Data",
     "desc": "주요 원소·화합물 반도체와 금속·절연막의 격자 상수, 결정 구조, 띠 간격, 유효 질량, 이동도, 탄성 상수, 디바이 온도, 열전도도를 계산기와 함께 찾는다.",
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
     ],
     "status": "planned"
    }
   ]
  }
 ],
 "stats": {
  "crystal-structure": {
   "problems": 15,
   "examples": 8,
   "sims": 4,
   "figures": 13,
   "drills": 2,
   "minis": 6,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "reciprocal-diffraction": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 12,
   "drills": 2,
   "minis": 6,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "bonding-elasticity": {
   "problems": 16,
   "examples": 7,
   "sims": 4,
   "figures": 9,
   "drills": 3,
   "minis": 4,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "crystal-defects": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 13,
   "drills": 2,
   "minis": 7,
   "tangles": 5,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "phonons": {
   "problems": 15,
   "examples": 8,
   "sims": 4,
   "figures": 12,
   "drills": 2,
   "minis": 6,
   "tangles": 3,
   "steps": 3,
   "predicts": 2,
   "hero": 1
  },
  "thermal-properties": {
   "problems": 15,
   "examples": 9,
   "sims": 6,
   "figures": 12,
   "drills": 2,
   "minis": 6,
   "tangles": 5,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "free-electron": {
   "problems": 15,
   "examples": 7,
   "sims": 5,
   "figures": 11,
   "drills": 2,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "band-structure": {
   "problems": 15,
   "examples": 7,
   "sims": 5,
   "figures": 9,
   "drills": 2,
   "minis": 4,
   "tangles": 5,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "electron-dynamics": {
   "problems": 15,
   "examples": 7,
   "sims": 4,
   "figures": 11,
   "drills": 2,
   "minis": 4,
   "tangles": 5,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "carrier-statistics": {
   "problems": 15,
   "examples": 8,
   "sims": 4,
   "figures": 10,
   "drills": 2,
   "minis": 5,
   "tangles": 5,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "carrier-transport": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 10,
   "drills": 2,
   "minis": 4,
   "tangles": 4,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "recombination": {
   "problems": 15,
   "examples": 8,
   "sims": 4,
   "figures": 11,
   "drills": 2,
   "minis": 4,
   "tangles": 6,
   "steps": 4,
   "predicts": 3,
   "hero": 1
  },
  "junctions": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 10,
   "drills": 2,
   "minis": 4,
   "tangles": 3,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "dielectric-optical": {
   "problems": 15,
   "examples": 8,
   "sims": 5,
   "figures": 12,
   "drills": 2,
   "minis": 6,
   "tangles": 5,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "magnetism": {
   "problems": 15,
   "examples": 8,
   "sims": 4,
   "figures": 16,
   "drills": 2,
   "minis": 9,
   "tangles": 4,
   "steps": 4,
   "predicts": 4,
   "hero": 1
  },
  "nanostructures": {
   "problems": 16,
   "examples": 7,
   "sims": 5,
   "figures": 11,
   "drills": 2,
   "minis": 4,
   "tangles": 4,
   "steps": 4,
   "predicts": 3,
   "hero": 1
  },
  "materials-data": {
   "problems": 8,
   "examples": 0,
   "sims": 6,
   "figures": 0,
   "drills": 1,
   "minis": 0,
   "tangles": 3,
   "steps": 0,
   "predicts": 0,
   "hero": 0
  }
 },
 "published": 17,
 "total": 18,
 "url": "https://science.euiyun.com/solid-state/"
});
