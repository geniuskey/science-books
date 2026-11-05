/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */
SB.registerCourse({
 "id": "organic-chemistry",
 "title": "유기화학",
 "en": "Organic Chemistry",
 "field": "chemistry",
 "level": "대학 2학년 · 반도체 기초",
 "status": "writing",
 "description": "골격 구조식을 읽고 그리는 법에서 출발해 형태 분석과 입체화학, 굽은 화살표로 따라가는 치환·제거·첨가·라디칼 메커니즘, 질량·IR·NMR 분광학, 공액과 방향족성, 작용기별 반응(알코올·카보닐·카복실산 유도체·엔올레이트·아민), 합성 고분자와 유기규소·유기금속 전구체, 화학 증폭형 감광막의 광화학까지 — 분자를 돌리고 전자를 직접 밀어 보며 반도체 공정의 유기 재료를 이해하는 인터랙티브 교과서.",
 "accent": {
  "light": "#b45309",
  "dark": "#fbbf24",
  "light2": "#1d4ed8",
  "dark2": "#60a5fa"
 },
 "mark": "<polygon points=\"16,4.5 25.5,10 25.5,21 16,26.5 6.5,21 6.5,10\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M10.5 19.5q5.5-9 11 0\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><path d=\"M19.2 19.6l2.4.2.4-2.4\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"13\" cy=\"12.5\" r=\"1.3\" fill=\"#fff\"/><circle cx=\"16.6\" cy=\"12.5\" r=\"1.3\" fill=\"#fff\"/>",
 "parts": [
  {
   "title": "제1부 구조와 결합",
   "semester": 1,
   "chapters": [
    {
     "slug": "structure-bonding",
     "num": "01",
     "title": "구조와 결합",
     "en": "Structure and Bonding",
     "desc": "원자 오비탈과 루이스 구조, 형식 전하, 혼성 오비탈(sp³·sp²·sp)과 결합각, σ·π 결합, 결합 길이와 세기, 결합 극성과 쌍극자 모멘트, 골격 구조식 읽고 쓰기, 작용기 둘러보기, 분자 간 힘과 끓는점·용해도 — 세정 용매의 극성과 웨이퍼 표면의 친수·소수성.",
     "tags": [
      "혼성 오비탈",
      "골격 구조식"
     ]
    },
    {
     "slug": "acids-bases",
     "num": "02",
     "title": "공명과 산·염기",
     "en": "Resonance, Acids and Bases",
     "desc": "공명 구조 그리기 규칙과 공명 혼성, 브뢴스테드 산·염기와 굽은 화살표, pKa와 평형의 방향, 산의 세기를 정하는 원자·공명·유도·오비탈(ARIO), 용매 효과와 수평 효과, 루이스 산·염기 — 화학 증폭형 레지스트의 광산 발생제와 TMAH 현상액.",
     "tags": [
      "pKa",
      "공명 구조"
     ]
    },
    {
     "slug": "alkanes",
     "num": "03",
     "title": "알케인과 사이클로알케인",
     "en": "Alkanes and Cycloalkanes",
     "desc": "IUPAC 명명법, 알케인의 물성, 형태 분석과 뉴먼 투영, 비틀림·입체 변형과 회전 에너지, 고리 변형과 연소열, 사이클로헥세인 의자 형태·축과 적도·고리 뒤집기, A 값과 치환 사이클로헥세인, 이치환 고리의 시스·트랜스, 융합 고리 — 진공 펌프유·윤활제의 탄화수소 오염과 탄소 흡착.",
     "tags": [
      "뉴먼 투영",
      "의자 형태"
     ]
    },
    {
     "slug": "stereochemistry",
     "num": "04",
     "title": "입체화학",
     "en": "Stereochemistry",
     "desc": "키랄성과 거울상 이성질체, CIP 순위 규칙과 R/S, 광학 활성과 비광회전도, 부분입체 이성질체와 메소 화합물, 피셔 투영, 라세미 혼합물과 분할, 고리 화합물과 알켄의 입체 이성(E/Z), 질소·인의 입체 중심 — 액정 디스플레이의 키랄 도펀트와 거울상 순도 분석.",
     "tags": [
      "R/S",
      "거울상 이성질체"
     ]
    }
   ]
  },
  {
   "title": "제2부 반응의 원리",
   "semester": 1,
   "chapters": [
    {
     "slug": "reactions",
     "num": "05",
     "title": "유기 반응의 원리",
     "en": "Principles of Organic Reactions",
     "desc": "반응의 종류(첨가·제거·치환·재배열), 극성 반응과 라디칼 반응, 친핵체와 친전자체, 굽은 화살표의 네 가지 기본 패턴, 반응 에너지 도표와 ΔG°·K·ΔG‡, 전이 상태와 중간체, 하몬드 가설, 탄소 양이온·음이온·라디칼의 안정성, 속도 지배와 열역학 지배 — 공정 반응의 온도 창과 ALD 표면 반응 단계.",
     "tags": [
      "굽은 화살표",
      "에너지 도표"
     ]
    },
    {
     "slug": "substitution",
     "num": "06",
     "title": "친핵성 치환 반응",
     "en": "Nucleophilic Substitution",
     "desc": "할로젠화 알킬, SN2 메커니즘(뒤쪽 공격·발덴 반전·2차 속도식), 친핵성과 이탈기, SN1 메커니즘(탄소 양이온·라세미화·재배열), 기질·친핵체·이탈기·용매 효과, 알코올을 설포네이트로 활성화하기, 분자 내 치환 — HMDS 프라이밍과 실레인 커플링제의 표면 치환 반응.",
     "tags": [
      "SN2",
      "SN1"
     ]
    },
    {
     "slug": "elimination",
     "num": "07",
     "title": "제거 반응",
     "en": "Elimination Reactions",
     "desc": "E2 메커니즘과 안티 동일 평면 배열, 자이체프·호프만 생성물, 의자 형태에서의 E2, E1과 E1cB, 치환과 제거의 경쟁(기질·염기·용매·온도), 알코올의 산 촉매 탈수 — 화학 증폭형 레지스트의 산 촉매 탈보호와 고분자 열분해.",
     "tags": [
      "E2",
      "자이체프 규칙"
     ]
    },
    {
     "slug": "alkenes",
     "num": "08",
     "title": "알켄의 구조와 반응",
     "en": "Alkenes: Structure and Reactions",
     "desc": "알켄의 구조와 E/Z 명명, 수소화열로 본 안정성, 친전자성 첨가와 마르코브니코프 규칙, 탄소 양이온 재배열, 수화(산 촉매·옥시수은화·수소붕소화), 할로젠·할로하이드린 첨가, 에폭시화와 다이하이드록실화, 오존 분해, 촉매 수소화와 입체 특이성 — 아크릴레이트 단량체와 UV 경화 수지.",
     "tags": [
      "마르코브니코프",
      "친전자성 첨가"
     ]
    },
    {
     "slug": "alkynes-synthesis",
     "num": "09",
     "title": "알카인과 유기 합성",
     "en": "Alkynes and Organic Synthesis",
     "desc": "알카인의 구조와 말단 C–H의 산성, 아세틸라이드 음이온의 알킬화, 할로젠화 수소·물 첨가와 엔올 호변 이성, 린들라·용해 금속 환원, 산화적 절단, 역합성 분석과 합성 전략, 작용기 상호 변환 지도 — 비정질 탄소 하드마스크와 탄화수소 전구체.",
     "tags": [
      "아세틸라이드",
      "역합성"
     ]
    },
    {
     "slug": "radicals",
     "num": "10",
     "title": "라디칼 반응",
     "en": "Radical Reactions",
     "desc": "라디칼의 구조와 안정성, 결합 해리 에너지, 알케인 할로젠화의 연쇄 메커니즘과 선택성, 하몬드 가설과 브로민화의 선택성, NBS 알릴·벤질 브로민화, 과산화물 효과와 역마르코브니코프 첨가, 자동 산화와 항산화제, 라디칼 개시제 — 플라스마 식각의 플루오로카본 라디칼과 측벽 고분자 증착.",
     "tags": [
      "연쇄 반응",
      "결합 해리 에너지"
     ]
    }
   ]
  },
  {
   "title": "제3부 구조 결정",
   "semester": 1,
   "chapters": [
    {
     "slug": "ms-ir",
     "num": "11",
     "title": "질량 분석과 적외선 분광법",
     "en": "Mass Spectrometry and IR Spectroscopy",
     "desc": "이온화·분리·검출, 분자 이온과 동위원소 봉우리(M+1·M+2), 질소 규칙과 불포화도, 조각 패턴(α 절단·맥라퍼티 재배열·트로필륨), 고분해능 질량과 분자식, 분자 진동과 결합 세기·환산 질량, 작용기별 특성 흡수, 스펙트럼 해석 전략 — 잔류 기체 분석·GC-MS 탈기체 분석과 FTIR 막질 분석.",
     "tags": [
      "동위원소 봉우리",
      "특성 흡수"
     ]
    },
    {
     "slug": "nmr",
     "num": "12",
     "title": "NMR 분광법",
     "en": "NMR Spectroscopy",
     "desc": "핵스핀과 공명 조건, 화학적 이동과 가리움, 화학적 동등성과 신호 수, 적분, 스핀–스핀 갈라짐(n+1 규칙)과 결합 상수, 복잡한 갈라짐과 2차 효과, ¹³C NMR과 DEPT, 스펙트럼으로 구조 맞히기 — 레지스트 원료·유기 전구체의 순도 분석과 고체 NMR.",
     "tags": [
      "화학적 이동",
      "n+1 규칙"
     ]
    }
   ]
  },
  {
   "title": "제4부 공액과 방향족성",
   "semester": 2,
   "chapters": [
    {
     "slug": "conjugation",
     "num": "13",
     "title": "공액계와 UV–Vis 분광법",
     "en": "Conjugated Systems and UV–Vis",
     "desc": "알릴 양이온·라디칼·음이온과 휘켈 MO, 공액 다이엔의 안정성, 1,2- 대 1,4-첨가와 반응 지배, 딜스–알더 반응과 경계 오비탈, 전자고리 반응 맛보기, UV–Vis 흡수와 공액 길이, 우드워드–피저 규칙, 색과 염료 — 노광 파장(i선·KrF·ArF)과 레지스트의 흡수, OLED 발광 분자.",
     "tags": [
      "휘켈 MO",
      "딜스–알더"
     ]
    },
    {
     "slug": "aromaticity",
     "num": "14",
     "title": "방향족성",
     "en": "Aromaticity",
     "desc": "벤젠의 구조와 공명 안정화, 휘켈 4n+2 규칙과 프로스트 원, 방향족·반방향족·비방향족, 방향족 이온, 헤테로 방향족(피리딘·피롤·퓨란·싸이오펜·이미다졸), 다환 방향족과 그래핀, 고리 전류와 NMR 증거 — 폴리이미드·노볼락 수지의 방향족 골격과 내열성, CMP 구리 부식 억제제 BTA.",
     "tags": [
      "휘켈 규칙",
      "헤테로 방향족"
     ]
    },
    {
     "slug": "aromatic-substitution",
     "num": "15",
     "title": "방향족 치환 반응",
     "en": "Aromatic Substitution",
     "desc": "친전자성 방향족 치환 메커니즘(시그마 착물), 할로젠화·나이트로화·설폰화·프리델–크래프츠 반응, 치환기 효과(활성화·불활성화, 오르토·파라·메타 지향), 다치환 벤젠의 합성 순서, 친핵성 방향족 치환과 벤자인, 다이아조늄 염 — 노볼락 수지 합성과 DNQ 감광제.",
     "tags": [
      "시그마 착물",
      "지향 효과"
     ]
    }
   ]
  },
  {
   "title": "제5부 작용기의 화학",
   "semester": 2,
   "chapters": [
    {
     "slug": "alcohols-ethers",
     "num": "16",
     "title": "알코올·에터·에폭사이드",
     "en": "Alcohols, Ethers and Epoxides",
     "desc": "알코올·페놀의 구조와 수소 결합, 알코올의 제법(카보닐 환원·그리냐르), 이탈기 활성화와 산화(PCC·존스·스원), 페놀의 산성, 윌리엄슨 에터 합성과 산 절단, 에폭사이드 개환의 위치 선택성(산·염기 조건), 싸이올과 설파이드 — IPA 건조와 에폭시 몰딩 화합물(EMC)·언더필의 경화.",
     "tags": [
      "에폭사이드 개환",
      "알코올 산화"
     ]
    },
    {
     "slug": "aldehydes-ketones",
     "num": "17",
     "title": "알데하이드와 케톤",
     "en": "Aldehydes and Ketones",
     "desc": "카보닐의 구조와 반응성, 친핵성 첨가(수화·사이안화 수소), 하이드라이드 환원(NaBH₄·LiAlH₄), 그리냐르·유기리튬 첨가, 아세탈과 보호기, 이민·엔아민, 비티히 반응, 베이어–빌리거 산화 — 아세탈 보호형 레지스트와 폼알데하이드 축합 노볼락 수지.",
     "tags": [
      "친핵성 첨가",
      "아세탈"
     ]
    },
    {
     "slug": "carboxylic-acids",
     "num": "18",
     "title": "카복실산과 유도체",
     "en": "Carboxylic Acids and Derivatives",
     "desc": "카복실산의 산성과 치환기 효과, 친핵성 아실 치환과 반응성 순서, 산 염화물·무수물·에스터·아마이드·나이트릴의 상호 변환, 피셔 에스터화와 비누화, 아마이드 결합, 폴리에스터·폴리아마이드 — 폴리아믹산의 이미드화로 만드는 폴리이미드, t-BOC 보호기와 탈보호.",
     "tags": [
      "친핵성 아실 치환",
      "에스터 가수 분해"
     ]
    },
    {
     "slug": "enolates",
     "num": "19",
     "title": "엔올과 엔올레이트",
     "en": "Enols and Enolates",
     "desc": "케토–엔올 호변 이성, α-할로젠화, 엔올레이트 생성과 LDA, 엔올레이트 알킬화, 알돌 반응과 축합, 클라이젠 축합, 마이클 첨가와 로빈슨 고리 만들기, 말론산 에스터·아세토아세트산 에스터 합성 — β-다이케톤(acac) 금속 전구체와 킬레이트.",
     "tags": [
      "엔올레이트",
      "알돌 반응"
     ]
    },
    {
     "slug": "amines",
     "num": "20",
     "title": "아민",
     "en": "Amines",
     "desc": "아민의 구조·명명과 질소 반전, 염기도와 짝산 pKa(알킬·아릴·아마이드·헤테로 고리), 아민 합성(가브리엘·환원성 아미노화·아마이드 환원), 호프만 제거, 다이아조늄 염과 샌드마이어 반응, 4차 암모늄 염, 아미노산 맛보기 — TMAH 현상액, 공기 중 아민 오염(AMC)과 레지스트 T-top, 켄처.",
     "tags": [
      "염기도",
      "다이아조늄"
     ]
    }
   ]
  },
  {
   "title": "제6부 반도체 재료의 유기화학",
   "semester": 2,
   "chapters": [
    {
     "slug": "polymers",
     "num": "21",
     "title": "합성 고분자",
     "en": "Synthetic Polymers",
     "desc": "연쇄 성장 중합(라디칼·양이온·음이온·개환)과 단계 성장 중합, 카로더스 식과 분자량 분포, 공중합과 마요–루이스 식, 리빙 중합과 블록 공중합체, 가교와 경화, 유리 전이와 구조, 고분자 분해 — 노볼락·폴리하이드록시스타이렌·아크릴 레지스트, 폴리이미드·BCB, 블록 공중합체 유도 자기 조립(DSA).",
     "tags": [
      "단계 성장 중합",
      "블록 공중합체"
     ]
    },
    {
     "slug": "organosilicon",
     "num": "22",
     "title": "유기규소·유기금속 화합물",
     "en": "Organosilicon and Organometallic Chemistry",
     "desc": "탄소와 규소의 차이(결합 길이·세기·극성), 실레인·실록산·실리콘 고분자, 실릴 보호기, 실레인 커플링제와 자기 조립 단분자막, 유기리튬·그리냐르·유기구리 시약, 팔라듐 교차 짝지음(스즈키·헥·소노가시라), 금속 알킬·아마이드·알콕사이드의 리간드 화학 — ALD·CVD 전구체(TMA·TDMAT·TEOS·아미노실레인)와 저유전율 SiCOH.",
     "tags": [
      "실록산",
      "ALD 전구체"
     ]
    },
    {
     "slug": "photoresists",
     "num": "23",
     "title": "광화학과 감광 재료",
     "en": "Photochemistry and Photoresists",
     "desc": "전자 들뜬 상태와 야블론스키 도표, 형광·인광·계간 전이, 광화학 반응(노리시·광고리화·볼프 재배열), 양자 수율과 광반응 속도, DNQ–노볼락 감광막, 화학 증폭형 레지스트(광산 발생제·탈보호·산 확산·켄처), 음성 톤과 가교, EUV 레지스트의 2차 전자 화학과 금속 산화물 레지스트, PFAS 규제와 대체 광산 발생제 — 노광에서 현상까지 레지스트 화학 전 과정.",
     "tags": [
      "화학 증폭",
      "광산 발생제"
     ]
    }
   ]
  },
  {
   "title": "부록",
   "appendix": true,
   "chapters": [
    {
     "slug": "data-tables",
     "num": "A",
     "title": "자료표와 반응 지도",
     "en": "Data Tables and Reaction Map",
     "desc": "pKa 표, 결합 해리 에너지, IR·¹H·¹³C NMR 특성값, 작용기 우선순위와 명명 접미사, 반응 총정리 지도, 용매 자료, SMILES로 분자식·질량·예측 스펙트럼을 내는 구조 계산기를 한곳에 모았다.",
     "tags": [
      "부록",
      "자료"
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
  "structure-bonding": {
   "problems": 15,
   "examples": 8,
   "sims": 7,
   "figures": 11,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "acids-bases": {
   "problems": 16,
   "examples": 9,
   "sims": 6,
   "figures": 16,
   "drills": 4,
   "minis": 5,
   "tangles": 3,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "alkanes": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 12,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "stereochemistry": {
   "problems": 15,
   "examples": 8,
   "sims": 7,
   "figures": 11,
   "drills": 4,
   "minis": 5,
   "tangles": 3,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "reactions": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 15,
   "drills": 4,
   "minis": 4,
   "tangles": 5,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "substitution": {
   "problems": 16,
   "examples": 8,
   "sims": 5,
   "figures": 13,
   "drills": 3,
   "minis": 4,
   "tangles": 3,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "elimination": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 13,
   "drills": 3,
   "minis": 3,
   "tangles": 4,
   "steps": 2,
   "predicts": 4,
   "hero": 1
  },
  "alkenes": {
   "problems": 15,
   "examples": 8,
   "sims": 7,
   "figures": 14,
   "drills": 3,
   "minis": 4,
   "tangles": 2,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "alkynes-synthesis": {
   "problems": 16,
   "examples": 7,
   "sims": 7,
   "figures": 16,
   "drills": 4,
   "minis": 3,
   "tangles": 4,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "radicals": {
   "problems": 15,
   "examples": 8,
   "sims": 7,
   "figures": 12,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "ms-ir": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 13,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 2,
   "predicts": 6,
   "hero": 1
  },
  "nmr": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 14,
   "drills": 5,
   "minis": 5,
   "tangles": 5,
   "steps": 4,
   "predicts": 2,
   "hero": 1
  },
  "conjugation": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 15,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 5,
   "hero": 1
  },
  "aromaticity": {
   "problems": 15,
   "examples": 8,
   "sims": 6,
   "figures": 12,
   "drills": 3,
   "minis": 5,
   "tangles": 4,
   "steps": 3,
   "predicts": 4,
   "hero": 1
  },
  "aromatic-substitution": {
   "problems": 15,
   "examples": 7,
   "sims": 7,
   "figures": 15,
   "drills": 4,
   "minis": 3,
   "tangles": 2,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "alcohols-ethers": {
   "problems": 16,
   "examples": 7,
   "sims": 7,
   "figures": 18,
   "drills": 4,
   "minis": 4,
   "tangles": 3,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "aldehydes-ketones": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 17,
   "drills": 3,
   "minis": 4,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "carboxylic-acids": {
   "problems": 16,
   "examples": 7,
   "sims": 6,
   "figures": 13,
   "drills": 3,
   "minis": 3,
   "tangles": 4,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "enolates": {
   "problems": 16,
   "examples": 8,
   "sims": 6,
   "figures": 17,
   "drills": 4,
   "minis": 3,
   "tangles": 3,
   "steps": 3,
   "predicts": 2,
   "hero": 1
  },
  "amines": {
   "problems": 15,
   "examples": 8,
   "sims": 7,
   "figures": 18,
   "drills": 3,
   "minis": 7,
   "tangles": 3,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "polymers": {
   "problems": 16,
   "examples": 9,
   "sims": 6,
   "figures": 18,
   "drills": 3,
   "minis": 4,
   "tangles": 4,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "organosilicon": {
   "problems": 16,
   "examples": 8,
   "sims": 7,
   "figures": 16,
   "drills": 3,
   "minis": 4,
   "tangles": 3,
   "steps": 3,
   "predicts": 3,
   "hero": 1
  },
  "photoresists": {
   "problems": 16,
   "examples": 7,
   "sims": 5,
   "figures": 14,
   "drills": 4,
   "minis": 3,
   "tangles": 5,
   "steps": 2,
   "predicts": 3,
   "hero": 1
  },
  "data-tables": {
   "problems": 12,
   "examples": 5,
   "sims": 6,
   "figures": 2,
   "drills": 3,
   "minis": 2,
   "tangles": 1,
   "steps": 0,
   "predicts": 1,
   "hero": 1
  }
 },
 "published": 24,
 "total": 25,
 "url": "https://science.euiyun.com/organic-chemistry/"
});
