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
     ]
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
  },
  "glossary": {
   "problems": 55,
   "examples": 0,
   "sims": 0,
   "figures": 0,
   "drills": 5,
   "minis": 0,
   "tangles": 0,
   "steps": 0,
   "predicts": 0,
   "hero": 1
  }
 },
 "published": 25,
 "total": 25,
 "url": "https://science.euiyun.com/organic-chemistry/",
 "glossary": {
  "version": 1,
  "terms": [
   {
    "ko": "1,2-메틸 이동",
    "en": "1,2-methyl shift",
    "abbr": "",
    "def": "탄소 양이온 옆 탄소의 메틸기가 결합 전자쌍째 옮겨 가 더 안정한 양이온이 되는 재배열. 탄소 골격이 바뀐다.",
    "chapters": [
     "substitution#sn1"
    ]
   },
   {
    "ko": "1,2-수소 이동",
    "en": "1,2-hydride shift",
    "abbr": "",
    "def": "탄소 양이온 옆 탄소의 H가 결합 전자쌍과 함께(하이드라이드로) 양이온 탄소로 옮겨 가 더 안정한 양이온이 되는 재배열.",
    "chapters": [
     "alkenes#rearrangement"
    ]
   },
   {
    "ko": "1,2-수소화 이동",
    "en": "1,2-hydride shift",
    "abbr": "",
    "def": "탄소 양이온 옆 탄소의 수소가 결합 전자쌍과 함께(하이드라이드로) 양이온 탄소로 옮겨 가는 재배열. 더 안정한 양이온을 만든다.",
    "chapters": [
     "elimination#dehydration"
    ]
   },
   {
    "ko": "1,2-알킬 이동",
    "en": "1,2-alkyl shift",
    "abbr": "",
    "def": "탄소 양이온 옆 탄소의 알킬기가 결합 전자쌍과 함께 양이온 탄소로 옮겨 가는 재배열. 메틸 이동이 대표적이다.",
    "chapters": [
     "alkenes#rearrangement"
    ]
   },
   {
    "ko": "1,2-이동",
    "en": "1,2-shift",
    "abbr": "",
    "def": "탄소 양이온 옆 탄소의 H나 알킬기가 결합 전자쌍째 양이온 탄소로 옮겨 가는 재배열. 더 안정한 양이온이 생길 때 일어난다.",
    "chapters": [
     "reactions#arrows"
    ]
   },
   {
    "ko": "1,2-첨가",
    "en": "1,2-addition",
    "abbr": "",
    "def": "공액 다이엔에 시약이 이웃한 두 탄소(C1, C2)에 붙는 첨가. 낮은 온도의 속도 지배에서 주로 생긴다.",
    "chapters": [
     "conjugation#addition"
    ]
   },
   {
    "ko": "1,2-하이드라이드 이동",
    "en": "1,2-hydride shift",
    "abbr": "",
    "def": "탄소 양이온 옆 탄소의 수소가 결합 전자쌍째 양이온 탄소로 옮겨 가 더 안정한 양이온이 되는 재배열.",
    "chapters": [
     "substitution#sn1"
    ]
   },
   {
    "ko": "1,3-이축 상호작용",
    "en": "1,3-diaxial interaction",
    "abbr": "",
    "def": "축 치환기가 같은 쪽 C3·C5의 축 수소와 가까워져 생기는 입체 변형. 고시 뷰테인 상호작용 두 개에 해당한다.",
    "chapters": [
     "alkanes#cyclohexane"
    ]
   },
   {
    "ko": "1,4-첨가",
    "en": "1,4-addition, conjugate addition",
    "abbr": "",
    "def": "공액 다이엔의 양 끝 탄소(C1, C4)에 시약이 붙고 이중 결합이 C2=C3로 옮겨 가는 첨가. 공액 첨가라고도 하며 열역학 지배에서 주로 생긴다.",
    "chapters": [
     "conjugation#addition"
    ]
   },
   {
    "ko": "10시간 반감기 온도",
    "en": "10-hour half-life temperature",
    "abbr": "",
    "def": "라디칼 개시제의 반감기가 10시간이 되는 온도. 개시제를 공정 온도에 맞게 고르는 기준이다(AIBN 약 65 °C, BPO 약 73 °C).",
    "chapters": [
     "radicals#chain"
    ]
   },
   {
    "ko": "1차 아민",
    "en": "primary amine, RNH₂",
    "abbr": "",
    "def": "질소에 탄소가 하나 붙은 아민(RNH₂). 분류는 질소에 붙은 탄소 수로 하며, 그 탄소의 치환 정도와는 무관하다.",
    "chapters": [
     "amines#structure"
    ]
   },
   {
    "ko": "1차·2차·3차·4차 탄소",
    "en": "primary, secondary, tertiary, quaternary carbon",
    "abbr": "",
    "def": "다른 탄소 1·2·3·4개와 결합한 탄소(1°·2°·3°·4°). 그 탄소에 붙은 수소도 같은 차수로 부른다.",
    "chapters": [
     "alkanes#nomenclature"
    ]
   },
   {
    "ko": "2차 속도식",
    "en": "second-order rate law",
    "abbr": "",
    "def": "속도가 두 농도의 곱(또는 한 농도의 제곱)에 비례하는 속도식. SN2는 v = k[RX][Nu]이고 k의 단위는 M⁻¹ s⁻¹이다.",
    "chapters": [
     "substitution#sn2"
    ]
   },
   {
    "ko": "2차 스펙트럼",
    "en": "second-order spectrum",
    "abbr": "",
    "def": "Δν/J가 작아(대략 10 미만) 스핀 상태가 섞이면서 n+1 규칙과 1차 세기비가 깨진 스펙트럼. 자석을 세게 하면 Δν가 커져 1차로 풀린다.",
    "chapters": [
     "nmr#complex"
    ]
   },
   {
    "ko": "4차 암모늄 이온",
    "en": "quaternary ammonium ion, R₄N⁺",
    "abbr": "",
    "def": "질소가 탄소 넷과 결합해 양전하를 띤 이온(R₄N⁺). 비공유쌍이 없어 염기도 친핵체도 아니며 pH와 상관없이 양이온이다.",
    "chapters": [
     "amines#structure"
    ]
   },
   {
    "ko": "α 절단",
    "en": "α-cleavage",
    "abbr": "",
    "def": "라디칼 양이온 중심(헤테로 원자·카보닐)에 붙은 탄소와 그 이웃 사이 결합이 끊어지는 조각화. 아실륨·옥소늄·이미늄 이온을 만든다.",
    "chapters": [
     "ms-ir#fragments"
    ]
   },
   {
    "ko": "α,β-불포화 카보닐",
    "en": "α,β-unsaturated carbonyl",
    "abbr": "",
    "def": "C=C가 C=O와 공액된 화합물(엔온, 엔알, 아크릴산 에스터). 카보닐 탄소와 β 탄소 모두 친전자성이다.",
    "chapters": [
     "enolates#claisen"
    ]
   },
   {
    "ko": "α-아미노산",
    "en": "α-amino acid",
    "abbr": "",
    "def": "같은 탄소(α 탄소)에 아미노기와 카복실기가 붙은 분자. 단백질의 구성 단위이며 생체의 것은 대부분 (S) 배열이다.",
    "chapters": [
     "amines#extraction"
    ]
   },
   {
    "ko": "α-할로젠화",
    "en": "α-halogenation",
    "abbr": "",
    "def": "엔올이나 엔올레이트가 X₂와 반응해 α-H를 할로젠으로 바꾸는 반응. 산 촉매에서는 모노할로젠화로 멈추고 속도가 [X₂]에 0차다.",
    "chapters": [
     "enolates#halogenation"
    ]
   },
   {
    "ko": "α-할로케톤",
    "en": "α-haloketone",
    "abbr": "",
    "def": "카보닐 옆 α 탄소에 할로젠이 붙은 케톤(예: 브로모아세톤). 염기로 제거하면 α,β-불포화 케톤이 된다.",
    "chapters": [
     "enolates#halogenation"
    ]
   },
   {
    "ko": "β-규소 효과",
    "en": "β-silicon effect",
    "abbr": "",
    "def": "C–Si 결합이 β 위치 탄소 양이온의 빈 p 오비탈에 초공액으로 전자를 내주어 양이온을 크게 안정화하는 효과.",
    "chapters": [
     "organosilicon#si-c"
    ]
   },
   {
    "ko": "β-수소 제거",
    "en": "β-hydride elimination",
    "abbr": "",
    "def": "금속–알킬 화합물에서 금속이 알킬기 β 탄소의 수소를 끌어당겨 M–H와 알켄으로 갈라지는 반응. 금속 유기 전구체의 열분해 경로다.",
    "chapters": [
     "elimination#dehydration"
    ]
   },
   {
    "ko": "β-제거",
    "en": "β-elimination, 1,2-elimination",
    "abbr": "",
    "def": "이탈기가 붙은 α 탄소와 이웃 β 탄소의 수소가 함께 빠져 α–β 사이에 이중 결합이 생기는 제거. 1,2-제거라고도 한다.",
    "chapters": [
     "elimination#e2"
    ]
   },
   {
    "ko": "π 결합",
    "en": "pi bond",
    "abbr": "",
    "def": "이웃한 두 원자의 나란한 p 오비탈이 옆으로 겹쳐 생긴 결합. 축 위에 마디면이 있고 σ보다 약하며, 비틀면 끊어진다.",
    "chapters": [
     "structure-bonding#sigma-pi"
    ]
   },
   {
    "ko": "π→π* 전이",
    "en": "π→π* transition",
    "abbr": "",
    "def": "결합성 π 오비탈의 전자가 반결합성 π* 오비탈로 올라가는 전자 전이. 공액 분자의 강한 UV–Vis 흡수(ε 10⁴ 이상)를 만든다.",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "σ 결합",
    "en": "sigma bond",
    "abbr": "",
    "def": "두 원자의 오비탈이 결합 축 위에서 정면으로 겹쳐 생긴 결합. 축 둘레로 대칭이라 회전해도 끊어지지 않는다. 모든 단일 결합이 σ 결합이다.",
    "chapters": [
     "structure-bonding#sigma-pi"
    ]
   },
   {
    "ko": "σ* 궤도",
    "en": "σ* orbital",
    "abbr": "",
    "def": "결합의 반결합성 분자 궤도. C–X의 σ*는 탄소 쪽, X의 반대 방향으로 큰 엽을 가져 친핵체의 뒤쪽 공격을 받는다.",
    "chapters": [
     "substitution#alkyl-halides"
    ]
   },
   {
    "ko": "A 값",
    "en": "A value",
    "abbr": "",
    "def": "치환기가 사이클로헥세인의 적도에서 축으로 갈 때의 ΔG°(kJ/mol). K = e^(A/RT)로 평형 조성을 준다.",
    "chapters": [
     "alkanes#cyclohexane"
    ]
   },
   {
    "ko": "ALD 공정 창",
    "en": "ALD window",
    "abbr": "",
    "def": "ALD가 자기 제한으로 동작하는 온도 범위. 아래 끝은 원하는 반쪽 반응의 장벽이, 위 끝은 전구체 열분해·탈수가 정한다.",
    "chapters": [
     "reactions#control"
    ]
   },
   {
    "ko": "ALD 창",
    "en": "ALD window",
    "abbr": "",
    "def": "주기당 성장률이 온도에 거의 무관하게 일정한 공정 온도 범위. 아래는 응축·불완전 반응, 위는 전구체 열분해로 벗어난다.",
    "chapters": [
     "organosilicon#precursors"
    ]
   },
   {
    "ko": "AMC",
    "en": "airborne molecular contamination",
    "abbr": "",
    "def": "공기 중 분자성 오염(airborne molecular contamination). 산·염기·응축성 유기물·도펀트 등으로 나누며 염기 계열이 감광막에 해롭다.",
    "chapters": [
     "amines#semi"
    ]
   },
   {
    "ko": "BHT",
    "en": "butylated hydroxytoluene, 2,6-다이-tert-뷰틸-4-메틸페놀",
    "abbr": "",
    "def": "2,6-다이-tert-뷰틸-4-메틸페놀. 약한 O–H를 ROO·에 내주고, 생긴 페녹시 라디칼은 tert-뷰틸기에 가려 사슬을 잇지 못하는 장애 페놀 항산화제.",
    "chapters": [
     "radicals#autoxidation"
    ]
   },
   {
    "ko": "CIP 규칙",
    "en": "Cahn–Ingold–Prelog rules",
    "abbr": "",
    "def": "칸·인골드·프렐로그가 정한 치환기 우선순위 규칙. 원자 번호, 첫 차이점, 다중 결합의 중복 원자 순으로 비교해 R/S와 E/Z를 정한다.",
    "chapters": [
     "stereochemistry#cip"
    ]
   },
   {
    "ko": "CIP 순위 규칙",
    "en": "Cahn–Ingold–Prelog rules",
    "abbr": "",
    "def": "치환기에 우선순위를 매기는 칸–인골드–프렐로그 규칙. 원자 번호가 큰 원자가 높고, 같으면 다음 원자 묶음을 비교하며 다중 결합은 중복 원자로 센다.",
    "chapters": [
     "alkenes#structure"
    ]
   },
   {
    "ko": "DCC",
    "en": "dicyclohexylcarbodiimide",
    "abbr": "",
    "def": "다이사이클로헥실카보다이이미드. 카복실산의 OH를 좋은 이탈기로 바꾸어 실온에서 아마이드·에스터를 만드는 커플링 시약이다.",
    "chapters": [
     "carboxylic-acids#interconversion"
    ]
   },
   {
    "ko": "DEPT",
    "en": "distortionless enhancement by polarization transfer",
    "abbr": "",
    "def": "¹H 자기화를 ¹³C로 옮기는 펄스 실험. DEPT-90은 CH만, DEPT-135는 CH·CH₃를 위로, CH₂를 아래로 보여 주고 4차 탄소는 나오지 않는다.",
    "chapters": [
     "nmr#carbon"
    ]
   },
   {
    "ko": "D₂O 교환",
    "en": "D₂O exchange",
    "abbr": "",
    "def": "시료에 D₂O를 넣고 흔들어 O–H·N–H 수소를 중수소로 바꾸는 시험. 교환 가능한 수소의 신호가 사라지고 HOD 신호가 생겨 OH·NH를 확인한다.",
    "chapters": [
     "nmr#complex"
    ]
   },
   {
    "ko": "E/Z 표기",
    "en": "E/Z notation",
    "abbr": "",
    "def": "이중 결합 양 끝에서 CIP 순위가 높은 기가 같은 쪽이면 Z, 반대쪽이면 E로 부르는 기하 이성질체 명명법.",
    "chapters": [
     "stereochemistry#rings-alkenes"
    ]
   },
   {
    "ko": "E1 반응",
    "en": "unimolecular elimination",
    "abbr": "",
    "def": "이탈기가 먼저 떠나 탄소 양이온이 생긴 뒤 약한 염기가 β-H를 떼는 두 단계 제거. 속도 = k[RX], 입체 요구가 없고 재배열과 SN1 경쟁이 따른다.",
    "chapters": [
     "elimination#e1"
    ]
   },
   {
    "ko": "E1cB 메커니즘",
    "en": "E1cB, unimolecular elimination via conjugate base",
    "abbr": "",
    "def": "짝염기(엔올레이트 등)를 먼저 만든 뒤 그 전자쌍이 β의 이탈기를 밀어내는 두 단계 제거. 알돌 생성물의 탈수가 이 경로로 일어난다.",
    "chapters": [
     "enolates#aldol"
    ]
   },
   {
    "ko": "E1cB 반응",
    "en": "unimolecular elimination via conjugate base",
    "abbr": "",
    "def": "산성 β-H가 먼저 떨어져 탄소 음이온(짝염기)이 생긴 뒤 이탈기가 떠나는 두 단계 제거. –OH 같은 나쁜 이탈기도 떠나며 알돌 탈수가 대표적이다.",
    "chapters": [
     "elimination#e1"
    ]
   },
   {
    "ko": "E2 반응",
    "en": "bimolecular elimination",
    "abbr": "",
    "def": "염기가 β-H를 떼고 C=C가 생기며 이탈기가 떠나는 일이 한 전이 상태에서 함께 일어나는 협동 제거. 속도 = k[RX][B⁻], 안티 동일 평면 배열이 필요하다.",
    "chapters": [
     "elimination#e2"
    ]
   },
   {
    "ko": "Ei 반응",
    "en": "intramolecular elimination",
    "abbr": "",
    "def": "산·염기 없이 가열만으로 고리 전이 상태를 거쳐 β-H와 이탈기가 같은 쪽에서 동시에 떨어지는 분자 내 신 제거. 에스터·잔테이트·아민 옥사이드 열분해가 예다.",
    "chapters": [
     "elimination#resist"
    ]
   },
   {
    "ko": "F/C 비",
    "en": "F-to-C ratio",
    "abbr": "",
    "def": "플루오로카본 플라스마에서 F 원자 대 C 원자의 유효 비. 크면 식각, 작으면 고분자 증착이 우세하며 O₂ 첨가로 올리고 H₂ 첨가로 내린다.",
    "chapters": [
     "radicals#plasma"
    ]
   },
   {
    "ko": "HMDS 프라이밍",
    "en": "HMDS priming",
    "abbr": "",
    "def": "감광막 도포 전 헥사메틸다이실라제인 증기로 표면 Si–OH를 Si–O–Si(CH₃)₃로 바꿔 소수성으로 만드는 처리.",
    "chapters": [
     "substitution#activation"
    ]
   },
   {
    "ko": "IR 활성",
    "en": "IR active",
    "abbr": "",
    "def": "진동하는 동안 분자의 쌍극자 모멘트가 변해 적외선을 흡수할 수 있는 성질. CO₂의 대칭 신축이나 N₂ 신축은 IR 비활성이다.",
    "chapters": [
     "ms-ir#vibrations"
    ]
   },
   {
    "ko": "LER",
    "en": "line edge roughness",
    "abbr": "",
    "def": "선 가장자리 거칠기(line edge roughness). 패턴 가장자리 위치가 길이 방향으로 흔들리는 정도로, 산 잠상의 기울기가 클수록 작다.",
    "chapters": [
     "amines#semi"
    ]
   },
   {
    "ko": "M+1 봉우리",
    "en": "M+1 peak",
    "abbr": "",
    "def": "분자 이온보다 1 Da 무거운 봉우리. 주로 ¹³C 하나를 가진 분자이며 세기가 탄소 수 × 약 1.1%다.",
    "chapters": [
     "ms-ir#isotopes"
    ]
   },
   {
    "ko": "M+2 봉우리",
    "en": "M+2 peak",
    "abbr": "",
    "def": "분자 이온보다 2 Da 무거운 봉우리. ³⁷Cl(M의 32%), ⁸¹Br(97%), ³⁴S(4.4%) 같은 동위원소가 크게 만든다.",
    "chapters": [
     "ms-ir#isotopes"
    ]
   },
   {
    "ko": "N-브로모석신이미드",
    "en": "NBS, N-bromosuccinimide",
    "abbr": "",
    "def": "NBS. HBr과 반응해 Br₂를 매우 낮은 농도로 계속 공급하는 시약. C=C 첨가 없이 알릴·벤질 자리 브로민화를 일으킨다.",
    "chapters": [
     "radicals#allylic"
    ]
   },
   {
    "ko": "NICS",
    "en": "nucleus-independent chemical shift",
    "abbr": "",
    "def": "핵과 무관한 화학적 이동. 고리 중심 근처 가상 지점의 계산 차폐값으로, 음수면 방향족(벤젠 약 −10 ppm), 양수면 반방향족이다.",
    "chapters": [
     "aromaticity#ring-current"
    ]
   },
   {
    "ko": "PCC",
    "en": "pyridinium chlorochromate",
    "abbr": "",
    "def": "피리디늄 클로로크로메이트. 물이 없는 Cr(VI) 산화제라 1° 알코올을 알데하이드에서 멈추게 산화한다.",
    "chapters": [
     "alcohols-ethers#reactions"
    ]
   },
   {
    "ko": "PFAS",
    "en": "per- and polyfluoroalkyl substances",
    "abbr": "",
    "def": "과·다플루오로알킬 물질. OECD(2021)는 H·Cl·Br·I가 붙지 않은 완전히 플루오린화된 메틸 또는 메틸렌 탄소를 하나 이상 가진 물질로 정의한다.",
    "chapters": [
     "photoresists#euv"
    ]
   },
   {
    "ko": "R 배열",
    "en": "rectus, 오른쪽",
    "abbr": "",
    "def": "4순위 기를 보는 사람 반대쪽에 두었을 때 1→2→3순위가 시계 방향인 입체 중심의 배열(rectus).",
    "chapters": [
     "stereochemistry#cip"
    ]
   },
   {
    "ko": "S 배열",
    "en": "sinister, 왼쪽",
    "abbr": "",
    "def": "4순위 기를 보는 사람 반대쪽에 두었을 때 1→2→3순위가 반시계 방향인 입체 중심의 배열(sinister).",
    "chapters": [
     "stereochemistry#cip"
    ]
   },
   {
    "ko": "SMILES",
    "en": "simplified molecular-input line-entry system",
    "abbr": "",
    "def": "분자 그래프를 한 줄 글자로 적는 표기법. 원소 기호, = 이중·# 삼중 결합, 괄호 가지, 숫자 고리 닫기, 소문자 방향족, @/@@ 입체를 쓴다.",
    "chapters": [
     "data-tables#calc"
    ]
   },
   {
    "ko": "SN1 반응",
    "en": "unimolecular nucleophilic substitution",
    "abbr": "",
    "def": "이탈기가 먼저 떠나 탄소 양이온을 만든 뒤 친핵체가 붙는 두 단계 치환. 1차 속도식, 라세미화, 재배열을 보인다.",
    "chapters": [
     "substitution#sn1"
    ]
   },
   {
    "ko": "SN2 반응",
    "en": "bimolecular nucleophilic substitution",
    "abbr": "",
    "def": "친핵체가 이탈기 반대편에서 들어오며 결합 생성과 끊김이 한 단계에 일어나는 치환. 2차 속도식과 배열 반전을 보인다.",
    "chapters": [
     "substitution#sn2"
    ]
   },
   {
    "ko": "SiCOH",
    "en": "carbon-doped oxide",
    "abbr": "",
    "def": "SiO₂ 그물 일부를 Si–CH₃로 끊고 기공을 넣은 저유전율 절연막(탄소 도핑 산화막). k ≈ 2.2–3.0으로 배선 사이 정전 용량을 줄인다.",
    "chapters": [
     "organosilicon#precursors"
    ]
   },
   {
    "ko": "T-top",
    "en": "",
    "abbr": "",
    "def": "공기 중 염기가 감광막 표면의 산을 중화해 윗부분이 현상되지 않아 생기는 T자 모양 단면 결함.",
    "chapters": [
     "amines#semi"
    ]
   },
   {
    "ko": "TBAF",
    "en": "tetrabutylammonium fluoride",
    "abbr": "",
    "def": "플루오린화 테트라뷰틸암모늄(n-Bu₄N⁺F⁻). 유기 용매에 녹는 F⁻ 공급원으로, Si–F 결합을 만들며 실릴 에터를 떼어 낸다.",
    "chapters": [
     "organosilicon#silyl"
    ]
   },
   {
    "ko": "TMAH",
    "en": "tetramethylammonium hydroxide",
    "abbr": "",
    "def": "수산화 테트라메틸암모늄(CH₃)₄N⁺OH⁻. 금속 이온이 없는 강염기로, 2.38 wt%(0.26 N, pH ≈ 13.4) 수용액이 표준 레지스트 현상액이다.",
    "chapters": [
     "acids-bases#resist"
    ]
   },
   {
    "ko": "TMS",
    "en": "tetramethylsilane",
    "abbr": "",
    "def": "테트라메틸실레인 Si(CH₃)₄. 12개의 동등한 H가 대부분의 유기 화합물보다 가려져 있어 ¹H·¹³C NMR의 기준(δ 0)으로 쓴다. 반응성이 없고 끓는점이 26 °C로 낮다.",
    "chapters": [
     "nmr#shift"
    ]
   },
   {
    "ko": "anti 첨가",
    "en": "anti addition",
    "abbr": "",
    "def": "새로 붙는 두 원자나 기가 이중 결합의 반대 면에 붙는 첨가. 할로늄 이온을 뒤쪽에서 여는 할로젠·할로하이드린 첨가가 대표적이다.",
    "chapters": [
     "alkenes#halogenation"
    ]
   },
   {
    "ko": "endo",
    "en": "",
    "abbr": "",
    "def": "다리 걸친 고리 생성물에서 치환기가 더 긴(불포화) 다리 쪽, 즉 남은 C=C 아래를 향하는 배치.",
    "chapters": [
     "conjugation#diels-alder"
    ]
   },
   {
    "ko": "endo 규칙",
    "en": "endo rule",
    "abbr": "",
    "def": "고리형 다이엔의 딜스–알더 반응에서 속도 지배 생성물이 endo라는 경험 규칙. 친다이엔체 π계와 다이엔 C2·C3의 이차 오비탈 상호작용으로 설명한다.",
    "chapters": [
     "conjugation#diels-alder"
    ]
   },
   {
    "ko": "exo",
    "en": "",
    "abbr": "",
    "def": "다리 걸친 고리 생성물에서 치환기가 짧은 다리(예: CH₂) 쪽을 향하는 배치. 입체적으로 덜 붐벼 열역학적으로 더 안정하다.",
    "chapters": [
     "conjugation#diels-alder"
    ]
   },
   {
    "ko": "n→π* 전이",
    "en": "n→π* transition",
    "abbr": "",
    "def": "비공유 전자쌍(n) 오비탈의 전자가 π* 오비탈로 올라가는 전이. 카보닐에서 270–320 nm 근처에 약하게(ε 10–100) 나타난다.",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "pKa",
    "en": "",
    "abbr": "",
    "def": "산 해리 상수의 음의 상용로그, pKa = −log Ka. 작을수록 센 산이며 1 차이가 세기 10배 차이다.",
    "chapters": [
     "acids-bases#pka"
    ]
   },
   {
    "ko": "pKaH",
    "en": "pKa of the conjugate acid",
    "abbr": "",
    "def": "염기의 짝산의 pKa. 값이 클수록 그 염기가 강하다. 25 °C 물에서 pKb = 14.00 − pKaH.",
    "chapters": [
     "amines#basicity"
    ]
   },
   {
    "ko": "s 성질",
    "en": "s character",
    "abbr": "",
    "def": "혼성 오비탈에서 s 오비탈이 차지하는 비율. sp³ 25 %, sp² 33 %, sp 50 %. 클수록 결합각이 넓고 결합이 짧고 강하다.",
    "chapters": [
     "structure-bonding#hybrid"
    ]
   },
   {
    "ko": "sp 혼성",
    "en": "sp hybridization",
    "abbr": "",
    "def": "2s 오비탈 하나와 2p 오비탈 하나가 섞여 180° 반대 방향을 향하는 혼성 오비탈 둘을 만드는 것. 남은 p 오비탈 둘이 직교하는 π 결합 둘을 만든다.",
    "chapters": [
     "alkynes-synthesis#structure"
    ]
   },
   {
    "ko": "sp² 혼성",
    "en": "sp² hybridization",
    "abbr": "",
    "def": "s 오비탈 하나와 p 오비탈 둘이 섞여 평면에서 약 120°로 벌어진 혼성 오비탈 셋을 만드는 것. 남은 p 오비탈 하나가 π 결합을 이룬다.",
    "chapters": [
     "alkenes#structure"
    ]
   },
   {
    "ko": "syn 첨가",
    "en": "syn addition",
    "abbr": "",
    "def": "새로 붙는 두 원자나 기가 이중 결합의 같은 면에 붙는 첨가. 수소붕소화, 에폭시화, OsO₄ 다이하이드록실화, 촉매 수소화가 그렇다.",
    "chapters": [
     "alkenes#hydration"
    ]
   },
   {
    "ko": "t-BOC",
    "en": "tert-butoxycarbonyl, Boc",
    "abbr": "",
    "def": "tert-뷰톡시카보닐 보호기. 염기·친핵체에 강하고 강산에서 tert-뷰틸 양이온, CO₂, 아이소뷰틸렌을 내며 떨어진다.",
    "chapters": [
     "carboxylic-acids#amides"
    ]
   },
   {
    "ko": "가교제",
    "en": "crosslinker",
    "abbr": "",
    "def": "고분자 사슬 여럿과 반응해 사슬을 그물로 묶는 다작용기 분자. 화학 증폭형 음성 레지스트에서는 메톡시메틸 글라이콜우릴·멜라민을 쓴다.",
    "chapters": [
     "photoresists#develop"
    ]
   },
   {
    "ko": "가려진 형태",
    "en": "eclipsed",
    "abbr": "",
    "def": "앞뒤 탄소의 결합이 겹쳐 보이는 형태(eclipsed, 이면각 0°). 비틀림 변형으로 에너지가 가장 높다.",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "가리움",
    "en": "shielding",
    "abbr": "",
    "def": "핵 주위 전자가 바깥 자기장 속에서 돌며 만든 반대 방향 유도장 때문에 핵이 느끼는 자기장이 B₀(1−σ)로 줄어드는 현상. 가려진 핵은 높은 장(작은 δ)에 나온다.",
    "chapters": [
     "nmr#shift"
    ]
   },
   {
    "ko": "가리움 벗김",
    "en": "deshielding",
    "abbr": "",
    "def": "전기 음성 원자나 π 전자의 유도장 때문에 핵 주위 전자 밀도가 줄거나 유도장이 B₀를 보태 핵이 더 센 자기장을 느끼는 것. 신호가 낮은 장(큰 δ)으로 옮겨 간다.",
    "chapters": [
     "nmr#shift"
    ]
   },
   {
    "ko": "가브리엘 합성",
    "en": "Gabriel synthesis",
    "abbr": "",
    "def": "프탈이미드 음이온을 할로젠화 알킬로 알킬화한 뒤 하이드라진으로 풀어 1차 아민만 얻는 방법. 과알킬화가 없다.",
    "chapters": [
     "amines#synthesis"
    ]
   },
   {
    "ko": "가용매 분해",
    "en": "solvolysis",
    "abbr": "",
    "def": "용매 분자 자체가 친핵체로 작용하는 치환 반응. 물이면 가수 분해, 알코올이면 가알코올 분해다.",
    "chapters": [
     "substitution#sn1"
    ]
   },
   {
    "ko": "각 변형",
    "en": "angle strain",
    "abbr": "",
    "def": "결합각이 이상값(sp³은 109.5°)에서 벗어나 생기는 에너지 상승(angle strain). 바이어가 고리에 처음 적용했다.",
    "chapters": [
     "alkanes#ring-strain"
    ]
   },
   {
    "ko": "개시 단계",
    "en": "initiation",
    "abbr": "",
    "def": "연쇄 반응에서 빛·열·개시제로 약한 결합이 균일 분해되어 라디칼이 처음 생기는 단계. 라디칼 수가 늘어난다.",
    "chapters": [
     "radicals#chain"
    ]
   },
   {
    "ko": "개환 중합",
    "en": "ring-opening polymerization, ROP",
    "abbr": "",
    "def": "고리 변형을 원동력으로 에폭사이드·락톤·락탐 같은 고리 단량체를 열어 이어 가는 연쇄 성장 중합.",
    "chapters": [
     "polymers#ionic-living"
    ]
   },
   {
    "ko": "거울상 위치",
    "en": "enantiotopic",
    "abbr": "",
    "def": "두 H를 각각 Z로 바꾼 생성물이 거울상 이성질체가 되는 관계(enantiotopic). 키랄하지 않은 환경에서는 화학적으로 동등하다.",
    "chapters": [
     "nmr#equivalence"
    ]
   },
   {
    "ko": "거울상 이성질체",
    "en": "enantiomer",
    "abbr": "",
    "def": "서로 포개지지 않는 거울상 관계의 입체 이성질체 한 쌍. 아키랄한 환경에서 물성이 같고 편광면을 반대 방향으로 같은 크기만큼 돌린다.",
    "chapters": [
     "stereochemistry#chirality"
    ]
   },
   {
    "ko": "거울상 초과율",
    "en": "enantiomeric excess, ee",
    "abbr": "",
    "def": "많은 쪽 거울상 이성질체가 적은 쪽보다 얼마나 많은지 나타낸 값 ee = |R−S|/(R+S). 광학 순도와 같다.",
    "chapters": [
     "stereochemistry#optical"
    ]
   },
   {
    "ko": "겔 효과",
    "en": "gel effect, 트롬스도르프 효과",
    "abbr": "",
    "def": "전환율이 높아 점도가 커지면 사슬 라디칼끼리의 종결이 느려져 중합 속도와 분자량이 급증하는 현상(트롬스도르프 효과).",
    "chapters": [
     "polymers#radical"
    ]
   },
   {
    "ko": "겔화",
    "en": "gelation",
    "abbr": "",
    "def": "가교 반응 중 분자 그물이 시료 전체를 가로질러 이어지며 액체가 흐르지 않게 되는 순간. 플로리–스톡마이어 식으로 겔점을 예측한다.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "겔화점",
    "en": "gel point",
    "abbr": "",
    "def": "가지친 사슬이 이어져 시료 전체가 하나의 그물이 되는 전환율. 무게평균 분자량과 점도가 발산한다.",
    "chapters": [
     "polymers#network"
    ]
   },
   {
    "ko": "결합 길이",
    "en": "bond length",
    "abbr": "",
    "def": "결합한 두 원자핵 사이의 평균 거리. 같은 원자 쌍이면 결합 차수와 s 성질이 클수록 짧다(C–C 154, C=C 134, C≡C 120 pm).",
    "chapters": [
     "structure-bonding#sigma-pi"
    ]
   },
   {
    "ko": "결합 상수",
    "en": "coupling constant",
    "abbr": "",
    "def": "스핀–스핀 갈라짐에서 이웃한 선 사이의 간격 J(Hz). 자기장과 무관하고 상호적이어서 서로 결합한 신호는 같은 J를 갖는다.",
    "chapters": [
     "nmr#coupling"
    ]
   },
   {
    "ko": "결합 해리 에너지",
    "en": "bond dissociation energy, BDE",
    "abbr": "",
    "def": "기체 상태에서 결합 하나를 균일하게(전자를 하나씩 나눠) 끊는 데 드는 엔탈피, BDE. 결합 세기의 척도다.",
    "chapters": [
     "structure-bonding#sigma-pi"
    ]
   },
   {
    "ko": "경계 오비탈",
    "en": "frontier molecular orbital, FMO",
    "abbr": "",
    "def": "반응성을 주로 결정하는 HOMO와 LUMO. 한 분자의 HOMO와 다른 분자의 LUMO의 에너지 간격과 계수로 반응 속도·위치·입체를 설명한다(후쿠이).",
    "chapters": [
     "conjugation#diels-alder"
    ]
   },
   {
    "ko": "경화도",
    "en": "degree of cure",
    "abbr": "",
    "def": "열경화 수지에서 반응한 작용기(에폭시기)의 분율 α. 0에서 1까지 변한다.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "계간 전이",
    "en": "intersystem crossing, ISC",
    "abbr": "",
    "def": "다중도가 다른 상태 사이(S₁→T₁ 등)의 무복사 전이. 스핀–궤도 결합이 필요하며 카보닐 n→π*나 무거운 원자에서 빠르다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "고리 뒤집기",
    "en": "ring flip",
    "abbr": "",
    "def": "의자 형태가 다른 의자로 바뀌는 과정. 축과 적도가 서로 바뀌지만 위·아래는 유지된다. 장벽 약 45 kJ/mol.",
    "chapters": [
     "alkanes#cyclohexane"
    ]
   },
   {
    "ko": "고리 변형",
    "en": "ring strain",
    "abbr": "",
    "def": "고리 화합물이 같은 수의 변형 없는 CH₂보다 더 가진 에너지. 각 변형·비틀림 변형·입체 변형의 합이다.",
    "chapters": [
     "alkanes#ring-strain"
    ]
   },
   {
    "ko": "고리 변형 에너지",
    "en": "ring strain energy",
    "abbr": "",
    "def": "사이클로알케인의 연소열을 변형 없는 CH₂당 값(사이클로헥세인 기준)과 비교해 얻는 여분의 에너지. 각 변형·비틀림 변형·고리 안 수소 충돌에서 온다.",
    "chapters": [
     "data-tables#bde"
    ]
   },
   {
    "ko": "고리 전류",
    "en": "ring current",
    "abbr": "",
    "def": "방향족 고리에 수직인 자기장이 π 전자를 고리 둘레로 돌게 해 생기는 전류. 그 유도장이 고리 바깥 H를 가리움 벗김해 ArH가 7–8 ppm에 나온다.",
    "chapters": [
     "nmr#shift"
    ]
   },
   {
    "ko": "고리 확장",
    "en": "ring expansion",
    "abbr": "",
    "def": "고리 옆 탄소 양이온으로 고리 결합이 옮겨 가 고리가 한 원자 커지는 재배열. 4원 고리가 5원 고리가 될 때처럼 고리 변형이 줄면 일어난다.",
    "chapters": [
     "alkenes#rearrangement"
    ]
   },
   {
    "ko": "고리형 협동 반응",
    "en": "pericyclic reaction",
    "abbr": "",
    "def": "고리 모양 전이 상태를 거쳐 결합의 생성·끊어짐이 한 단계에서 협동적으로 일어나는 반응. 고리화 첨가, 전자고리 반응, 시그마 자리 옮김 반응이 있다.",
    "chapters": [
     "conjugation#diels-alder"
    ]
   },
   {
    "ko": "고리화 첨가",
    "en": "cycloaddition",
    "abbr": "",
    "def": "두 π 계가 양 끝에서 동시에 새 σ 결합 두 개를 만들어 고리를 이루는 반응. 딜스–알더 반응은 [4+2] 고리화 첨가다.",
    "chapters": [
     "conjugation#diels-alder"
    ]
   },
   {
    "ko": "고립 다이엔",
    "en": "isolated diene",
    "abbr": "",
    "def": "두 이중 결합이 sp³ 탄소 하나 이상으로 떨어진 다이엔. 두 알켄이 따로 있는 것처럼 행동한다.",
    "chapters": [
     "conjugation#dienes"
    ]
   },
   {
    "ko": "고분자",
    "en": "polymer",
    "abbr": "",
    "def": "같은 구조 단위(반복 단위)가 공유 결합으로 수백–수만 번 되풀이되어 이어진 큰 분자.",
    "chapters": [
     "polymers#overview"
    ]
   },
   {
    "ko": "고분해능 질량 분석",
    "en": "high-resolution mass spectrometry, HRMS",
    "abbr": "",
    "def": "m/z를 소수점 셋째·넷째 자리까지 재는 질량 분석(HRMS). 정확 질량으로 분자식을 정한다.",
    "chapters": [
     "ms-ir#hrms"
    ]
   },
   {
    "ko": "고시 형태",
    "en": "gauche",
    "abbr": "",
    "def": "두 큰 치환기가 이면각 60°로 이웃한 엇갈린 형태(gauche). 뷰테인에서는 안티보다 3.8 kJ/mol 높다.",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "골격 구조식",
    "en": "skeletal structure, bond-line formula",
    "abbr": "",
    "def": "선의 끝과 꼭짓점을 탄소로, 탄소에 붙은 수소를 생략해 그리는 유기 구조식. 헤테로 원자와 그 수소만 글자로 쓴다.",
    "chapters": [
     "structure-bonding#skeletal"
    ]
   },
   {
    "ko": "공명 구조",
    "en": "resonance structure",
    "abbr": "",
    "def": "원자 배치와 σ 골격은 같고 π 전자와 비공유 전자쌍의 위치만 다른 루이스 구조들. 실제 분자는 이들 중 어느 하나가 아니라 그 혼성이다.",
    "chapters": [
     "acids-bases#resonance"
    ]
   },
   {
    "ko": "공명 안정화",
    "en": "resonance stabilization",
    "abbr": "",
    "def": "전하나 홀전자가 π 결합을 따라 여러 원자에 퍼져 생기는 안정화. 알릴·벤질 양이온과 라디칼, 엔올레이트가 예다.",
    "chapters": [
     "reactions#intermediates"
    ]
   },
   {
    "ko": "공명 안정화 에너지",
    "en": "resonance energy",
    "abbr": "",
    "def": "전자의 비편재화로 공명 혼성이 가장 안정한 기여 구조보다 낮아지는 에너지. 벤젠에서 약 150 kJ/mol.",
    "chapters": [
     "acids-bases#resonance"
    ]
   },
   {
    "ko": "공명 에너지",
    "en": "resonance energy",
    "abbr": "",
    "def": "실제 분자와 비편재화가 없다고 가정한 기준 구조의 에너지 차. 벤젠은 수소화열로 약 152 kJ/mol(사이클로헥사트라이엔 기준).",
    "chapters": [
     "aromaticity#benzene"
    ]
   },
   {
    "ko": "공명 적분",
    "en": "resonance integral",
    "abbr": "",
    "def": "휘켈법에서 결합으로 이어진 이웃 p 오비탈 사이의 상호작용 에너지 β(음수). 이웃이 아니면 0으로 둔다.",
    "chapters": [
     "conjugation#huckel"
    ]
   },
   {
    "ko": "공명 혼성",
    "en": "resonance hybrid",
    "abbr": "",
    "def": "여러 공명 구조를 섞은 실제 분자의 전자 구조. 부분 결합(예: 결합 차수 1.5)과 부분 전하로 나타내며 어느 기여 구조보다 에너지가 낮다.",
    "chapters": [
     "acids-bases#resonance"
    ]
   },
   {
    "ko": "공명 효과",
    "en": "resonance effect",
    "abbr": "",
    "def": "비공유 전자쌍이나 π 결합이 π계를 통해 고리에 전자를 주거나 고리에서 전자를 받는 효과.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "공액 다이엔",
    "en": "conjugated diene",
    "abbr": "",
    "def": "두 이중 결합 사이에 단일 결합이 하나뿐인 다이엔(C=C–C=C). 네 p 오비탈이 이어져 고립 다이엔보다 안정하다.",
    "chapters": [
     "conjugation#dienes"
    ]
   },
   {
    "ko": "공액 첨가",
    "en": "conjugate addition, 1,4-addition",
    "abbr": "",
    "def": "1,4-첨가. 친핵체가 α,β-불포화 카보닐의 β 탄소를 공격하고 π 전자가 산소로 밀려 엔올레이트가 생기는 첨가.",
    "chapters": [
     "enolates#claisen"
    ]
   },
   {
    "ko": "공액계",
    "en": "conjugated system",
    "abbr": "",
    "def": "세 개 이상의 p 오비탈이 연달아 나란히 겹쳐 π 전자가 여러 원자에 퍼져 있는 계. 공액 다이엔, 알릴 양이온, 폴리엔, α,β-불포화 카보닐이 예다.",
    "chapters": [
     "conjugation#huckel"
    ]
   },
   {
    "ko": "공중합체",
    "en": "copolymer",
    "abbr": "",
    "def": "두 종류 이상의 단량체로 이루어진 고분자. 서열에 따라 랜덤·교대·블록·그래프트 공중합체로 나눈다.",
    "chapters": [
     "polymers#copolymer"
    ]
   },
   {
    "ko": "과산화물 효과",
    "en": "peroxide effect",
    "abbr": "",
    "def": "과산화물이 있으면 HBr이 라디칼 연쇄로 알켄에 첨가되어 Br이 덜 치환된 탄소에 붙는 현상(카라시). HCl·HI에서는 일어나지 않는다.",
    "chapters": [
     "radicals#peroxide"
    ]
   },
   {
    "ko": "과알킬화",
    "en": "overalkylation",
    "abbr": "",
    "def": "아민의 직접 알킬화에서 생성물 아민이 더 친핵적이어서 2차·3차 아민과 4차 암모늄 염까지 섞여 생기는 문제.",
    "chapters": [
     "amines#synthesis"
    ]
   },
   {
    "ko": "광개시제",
    "en": "photoinitiator",
    "abbr": "",
    "def": "빛을 흡수해 라디칼이나 산 같은 반응 개시종을 내는 분자. 아크릴레이트 UV 경화의 출발점이다.",
    "chapters": [
     "alkenes#cleavage"
    ]
   },
   {
    "ko": "광고리화 첨가",
    "en": "photocycloaddition",
    "abbr": "",
    "def": "들뜬 알켄이 다른 알켄과 같은 면끼리 협동적으로 결합해 사이클로뷰테인을 만드는 [2+2] 반응. 바닥 상태에서는 오비탈 대칭으로 금지된다.",
    "chapters": [
     "photoresists#photoreactions"
    ]
   },
   {
    "ko": "광대역 양성자 디커플링",
    "en": "broadband proton decoupling",
    "abbr": "",
    "def": "¹³C 측정 중 모든 ¹H를 넓은 띠의 라디오파로 계속 흔들어 C–H 갈라짐을 없애는 기법. 각 탄소 환경이 단일선 하나로 나온다.",
    "chapters": [
     "nmr#carbon"
    ]
   },
   {
    "ko": "광분해성 켄처",
    "en": "photodecomposable quencher, PDQ",
    "abbr": "",
    "def": "약산 음이온을 짝으로 가진 설포늄 염. 비노광부에서는 염기로 산을 중화하고 노광부에서는 분해되어 켄처 작용을 잃는다(PDQ).",
    "chapters": [
     "photoresists#car"
    ]
   },
   {
    "ko": "광산 발생제",
    "en": "photoacid generator, PAG",
    "abbr": "",
    "def": "빛이나 전자를 받으면 분해되어 산을 내놓는 화합물(PAG). 주로 오늄염이며 트라이플산 같은 초강산을 만든다.",
    "chapters": [
     "acids-bases#resist"
    ]
   },
   {
    "ko": "광자 산탄 잡음",
    "en": "photon shot noise",
    "abbr": "",
    "def": "광자가 무작위로 도착해 작은 면적의 광자 수가 포아송 분포를 따르는 데서 오는 요동. 상대 크기는 1/√N이다.",
    "chapters": [
     "photoresists#euv"
    ]
   },
   {
    "ko": "광표백",
    "en": "photobleaching",
    "abbr": "",
    "def": "노광으로 흡수하던 감광제가 분해되어 막이 점점 투명해지는 현상. 빛이 막 아래까지 들어가게 한다.",
    "chapters": [
     "photoresists#dnq"
    ]
   },
   {
    "ko": "광학 활성",
    "en": "optical activity",
    "abbr": "",
    "def": "평면 편광의 편광면을 돌리는 성질. 거울상 이성질체 한쪽이 많은 키랄 물질만 광학 활성을 보인다.",
    "chapters": [
     "stereochemistry#optical"
    ]
   },
   {
    "ko": "교차 알돌 반응",
    "en": "crossed aldol reaction",
    "abbr": "",
    "def": "서로 다른 두 카보닐 화합물 사이의 알돌 반응. α-H 없는 친전자체를 쓰거나 LDA로 한쪽 엔올레이트를 먼저 만들어야 한 생성물을 얻는다.",
    "chapters": [
     "enolates#aldol"
    ]
   },
   {
    "ko": "교차 짝지음",
    "en": "cross-coupling",
    "abbr": "",
    "def": "서로 다른 두 탄소 조각(R–X와 R′–M)을 전이 금속 촉매로 이어 R–R′을 만드는 반응. 스즈키·네기시·스틸레·소노가시라 등이 있다.",
    "chapters": [
     "organosilicon#coupling"
    ]
   },
   {
    "ko": "교차 편극",
    "en": "cross-polarization, CP",
    "abbr": "",
    "def": "고체 NMR에서 풍부한 ¹H의 큰 자기화를 ¹³C·²⁹Si처럼 감도가 낮은 핵으로 옮겨 신호를 키우는 기법(CP).",
    "chapters": [
     "nmr#carbon"
    ]
   },
   {
    "ko": "구별 용매",
    "en": "differentiating solvent",
    "abbr": "",
    "def": "물보다 약한 염기(또는 산)인 용매로, 물에서 똑같이 강산으로 보이는 산들의 세기 차이를 드러낸다. 아세트산이 대표적이다.",
    "chapters": [
     "acids-bases#solvent"
    ]
   },
   {
    "ko": "구조 이성질체",
    "en": "constitutional isomer",
    "abbr": "",
    "def": "분자식은 같지만 원자의 연결 순서가 다른 화합물. C₅H₁₂의 펜테인·2-메틸뷰테인·2,2-다이메틸프로페인이 예다.",
    "chapters": [
     "alkanes#nomenclature"
    ]
   },
   {
    "ko": "굶김 공급",
    "en": "starved feed",
    "abbr": "",
    "def": "단량체를 반응기에 천천히 흘려 넣어 반응기 안 단량체를 늘 적게 유지하는 반회분 중합. 공중합체 조성을 고르게 한다.",
    "chapters": [
     "polymers#copolymer"
    ]
   },
   {
    "ko": "굽은 결합",
    "en": "bent bond",
    "abbr": "",
    "def": "사이클로프로페인처럼 결합각이 강제로 작을 때 오비탈이 핵을 잇는 직선 밖에서 비껴 겹친 결합. 겹침이 작아 약하다.",
    "chapters": [
     "alkanes#ring-strain"
    ]
   },
   {
    "ko": "굽은 화살표",
    "en": "curved arrow",
    "abbr": "",
    "def": "전자쌍 하나(낚싯바늘 모양이면 전자 하나)의 이동을 나타내는 화살표. 꼬리는 전자가 있는 비공유쌍이나 결합, 머리는 전자가 가는 원자나 새 결합 자리에 둔다.",
    "chapters": [
     "acids-bases#resonance"
    ]
   },
   {
    "ko": "굽힘 진동",
    "en": "bending",
    "abbr": "",
    "def": "결합각이 바뀌는 진동(가위질·흔들기·비틀기 등). 신축보다 낮은 파수에서 흡수한다.",
    "chapters": [
     "ms-ir#vibrations"
    ]
   },
   {
    "ko": "균일 분해",
    "en": "homolysis",
    "abbr": "",
    "def": "결합 전자가 양쪽 조각에 하나씩 나뉘는 결합 끊어짐. 라디칼 두 개가 생기며 열이나 빛으로 일어난다.",
    "chapters": [
     "reactions#types"
    ]
   },
   {
    "ko": "그래핀",
    "en": "graphene",
    "abbr": "",
    "def": "sp² 탄소가 육각 그물로 이어진 원자 한 층 두께의 2차원 방향족 물질. 띠 간격이 0인 준금속이다.",
    "chapters": [
     "aromaticity#polycyclic"
    ]
   },
   {
    "ko": "그룬발트–윈스타인 식",
    "en": "Grunwald–Winstein equation",
    "abbr": "",
    "def": "log(k/k₀) = mY. 80 % 에탄올을 기준(Y = 0)으로 용매의 이온화 능력 Y가 SN1 가용매 분해 속도를 정한다.",
    "chapters": [
     "substitution#sn1"
    ]
   },
   {
    "ko": "그리냐르 시약",
    "en": "Grignard reagent",
    "abbr": "",
    "def": "할로젠화 알킬과 마그네슘을 마른 에터에서 반응시켜 만든 R–MgX. 탄소가 탄소 음이온처럼 카보닐을 공격해 새 C–C 결합과 알코올을 만든다.",
    "chapters": [
     "alcohols-ethers#preparation"
    ]
   },
   {
    "ko": "극성 공유 결합",
    "en": "polar covalent bond",
    "abbr": "",
    "def": "전기음성도가 다른 두 원자 사이의 공유 결합으로 전자가 한쪽으로 치우쳐 δ+와 δ− 끝이 생긴다(C–O, O–H, C–Cl).",
    "chapters": [
     "structure-bonding#polarity"
    ]
   },
   {
    "ko": "극성 반응",
    "en": "polar reaction",
    "abbr": "",
    "def": "전자쌍을 주는 친핵체와 받는 친전자체 사이에서 결합이 불균일하게 끊어지고 생기는 반응. 유기 반응의 대부분이다.",
    "chapters": [
     "reactions#types"
    ]
   },
   {
    "ko": "극성 역전",
    "en": "umpolung",
    "abbr": "",
    "def": "작용기의 본래 극성을 뒤집는 것(umpolung). δ+였던 할로젠화물의 탄소가 마그네슘이 끼어들며 그리냐르 시약에서 δ−의 친핵성 탄소가 된다.",
    "chapters": [
     "aldehydes-ketones#hydride"
    ]
   },
   {
    "ko": "극성 전환",
    "en": "umpolung",
    "abbr": "",
    "def": "결합 상대를 바꿔 원자의 극성을 뒤집는 것(umpolung). 예: C–Br의 δ+ 탄소가 그리냐르 시약 C–Mg에서는 δ− 친핵체가 된다.",
    "chapters": [
     "reactions#nucleophiles"
    ]
   },
   {
    "ko": "금속 교환",
    "en": "transmetalation",
    "abbr": "",
    "def": "유기기가 한 금속에서 다른 금속으로 옮겨 가는 기본 단계. 스즈키 반응에서 붕소의 아릴이 팔라듐으로 넘어가는 것이 예다.",
    "chapters": [
     "organosilicon#coupling"
    ]
   },
   {
    "ko": "금속 산화물 레지스트",
    "en": "metal-oxide resist, MOR",
    "abbr": "",
    "def": "알킬주석 옥소 클러스터처럼 EUV 흡수가 큰 금속 산화물로 만든 레지스트(MOR). Sn–C 절단과 Sn–O–Sn 축합으로 음성 패턴을 만든다.",
    "chapters": [
     "photoresists#euv"
    ]
   },
   {
    "ko": "기준 봉우리",
    "en": "base peak",
    "abbr": "",
    "def": "질량 스펙트럼에서 가장 큰 막대. 세기를 100으로 정하는 기준이며 가장 안정한 조각 이온인 경우가 많다.",
    "chapters": [
     "ms-ir#ms-basics"
    ]
   },
   {
    "ko": "기질",
    "en": "substrate",
    "abbr": "",
    "def": "반응에서 공격을 받는 분자. 치환 반응에서는 이탈기를 가진 할로젠화 알킬이나 설포네이트 에스터를 말한다.",
    "chapters": [
     "substitution#alkyl-halides"
    ]
   },
   {
    "ko": "길먼 시약",
    "en": "Gilman reagent",
    "abbr": "",
    "def": "유기리튬 두 당량과 Cu(I)로 만든 다이알킬구리리튬 R₂CuLi. 부드러운 친핵체로 1,4-첨가와 할로젠화 알킬과의 짝지음을 한다.",
    "chapters": [
     "organosilicon#organometal"
    ]
   },
   {
    "ko": "꼬인 배 형태",
    "en": "twist-boat",
    "abbr": "",
    "def": "배 형태를 비틀어 가림과 깃대 수소 충돌을 줄인 형태(twist-boat). 의자보다 약 23 kJ/mol 높은 얕은 극소다.",
    "chapters": [
     "alkanes#cyclohexane"
    ]
   },
   {
    "ko": "나선 비틀림 힘",
    "en": "helical twisting power, HTP",
    "abbr": "",
    "def": "키랄 도펀트가 네마틱 액정을 꼬는 능력(HTP, 단위 µm⁻¹). 작은 농도에서 1/p = HTP·c이다.",
    "chapters": [
     "stereochemistry#heteroatoms"
    ]
   },
   {
    "ko": "나선 피치",
    "en": "helical pitch",
    "abbr": "",
    "def": "키랄 네마틱 액정의 방향자가 360° 도는 데 필요한 거리 p. 키랄 도펀트에서는 p = 1/(HTP·c·ee)이다.",
    "chapters": [
     "stereochemistry#heteroatoms"
    ]
   },
   {
    "ko": "나이트로소늄 이온",
    "en": "nitrosonium ion, NO⁺",
    "abbr": "",
    "def": "산 속에서 아질산이 물을 잃어 생기는 N≡O⁺. 다이아조화의 친전자체다.",
    "chapters": [
     "amines#diazonium"
    ]
   },
   {
    "ko": "나이트릴",
    "en": "nitrile",
    "abbr": "",
    "def": "C≡N 삼중 결합을 가진 화합물 R–C≡N. sp 탄소와 큰 쌍극자(아세토나이트릴 3.9 D)를 가진다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "낚싯바늘 화살표",
    "en": "fishhook arrow",
    "abbr": "",
    "def": "미늘이 한쪽뿐인 굽은 화살표. 전자 한 개의 이동을 나타내며 라디칼 반응에 쓴다.",
    "chapters": [
     "reactions#types"
    ]
   },
   {
    "ko": "낮은 장",
    "en": "downfield",
    "abbr": "",
    "def": "NMR 스펙트럼의 왼쪽, 곧 화학적 이동 δ가 큰 쪽(downfield). 가리움 벗김을 받은 핵이 이쪽에 나타난다.",
    "chapters": [
     "nmr#shift"
    ]
   },
   {
    "ko": "내부 알카인",
    "en": "internal alkyne",
    "abbr": "",
    "def": "삼중 결합이 사슬 안쪽에 있어 두 sp 탄소가 모두 탄소와 결합한 알카인(R–C≡C–R′). 산성 C–H가 없다.",
    "chapters": [
     "alkynes-synthesis#structure"
    ]
   },
   {
    "ko": "내부 전환",
    "en": "internal conversion, IC",
    "abbr": "",
    "def": "같은 스핀 다중도 상태 사이(S₁→S₀ 등)를 빛 없이 열로 건너가는 무복사 전이. 두 상태의 에너지 차가 작을수록 빠르다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "내부 표준",
    "en": "internal standard",
    "abbr": "",
    "def": "순도를 아는 물질을 시료와 함께 녹여 넓이 비교의 기준으로 쓰는 것. qNMR에서는 말레산, 1,3,5-트라이메톡시벤젠, 다이메틸 설폰 등을 쓴다.",
    "chapters": [
     "nmr#structure"
    ]
   },
   {
    "ko": "네오펜틸",
    "en": "neopentyl",
    "abbr": "",
    "def": "(CH₃)₃CCH₂– 기. 1차지만 이웃 4차 탄소의 메틸기가 뒤쪽 길목을 막아 SN2가 에틸보다 약 10⁵배 느리다.",
    "chapters": [
     "substitution#sterics"
    ]
   },
   {
    "ko": "노광 후 굽기",
    "en": "post-exposure bake, PEB",
    "abbr": "",
    "def": "노광 뒤 레지스트를 90–130 °C로 가열하는 단계(PEB). 광산이 확산하며 촉매 탈보호 반응을 일으킨다.",
    "chapters": [
     "acids-bases#resist"
    ]
   },
   {
    "ko": "노리시 II형 반응",
    "en": "Norrish type II",
    "abbr": "",
    "def": "들뜬 카보닐 산소가 6원자 고리 전이 상태로 γ-H를 뽑아 1,4-다이라디칼을 만들고, 이것이 엔올과 알켄으로 갈라지는 반응.",
    "chapters": [
     "photoresists#photoreactions"
    ]
   },
   {
    "ko": "노리시 I형 반응",
    "en": "Norrish type I",
    "abbr": "",
    "def": "들뜬 케톤의 카보닐 탄소와 α 탄소 사이 결합이 균일 분해되는 α 절단. 아실 라디칼과 알킬 라디칼이 생긴다.",
    "chapters": [
     "photoresists#photoreactions"
    ]
   },
   {
    "ko": "노볼락",
    "en": "novolac",
    "abbr": "",
    "def": "페놀·크레졸과 폼알데하이드를 F/P < 1, 산 촉매로 축합해 고리가 메틸렌 다리로 이어진 수지. g·i선 감광막의 바탕 수지다.",
    "chapters": [
     "aromatic-substitution#diazonium"
    ]
   },
   {
    "ko": "높은 장",
    "en": "upfield",
    "abbr": "",
    "def": "NMR 스펙트럼의 오른쪽, 곧 화학적 이동 δ가 작은 쪽(upfield). 전자에 더 가려진 핵이 이쪽에 나타난다.",
    "chapters": [
     "nmr#shift"
    ]
   },
   {
    "ko": "누적 다이엔",
    "en": "cumulated diene",
    "abbr": "",
    "def": "두 이중 결합이 한 탄소를 공유하는 다이엔(알렌, C=C=C). 가운데 sp 탄소의 두 π 결합은 서로 수직이라 공액되지 않는다.",
    "chapters": [
     "conjugation#dienes"
    ]
   },
   {
    "ko": "뉴먼 투영",
    "en": "Newman projection",
    "abbr": "",
    "def": "C–C 결합 축을 따라 내려다본 그림. 앞 탄소는 점, 뒤 탄소는 원으로 그리고 치환기 사이 이면각을 보여 준다.",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "늦은 전이 상태",
    "en": "late transition state",
    "abbr": "",
    "def": "반응 좌표에서 생성물 쪽에 가까워 구조가 생성물을 닮은 전이 상태. 흡열 단계(예: Br·의 수소 떼기)에서 나타나며 생성물 안정성 차이를 크게 반영한다.",
    "chapters": [
     "radicals#selectivity"
    ]
   },
   {
    "ko": "다리 고리",
    "en": "bridged ring",
    "abbr": "",
    "def": "두 고리가 떨어진 원자 두 개를 공유해 다리를 이룬 고리계. 노보네인(바이사이클로[2.2.1]헵테인)이 예다.",
    "chapters": [
     "alkanes#disubstituted"
    ]
   },
   {
    "ko": "다이사이아밀보레인",
    "en": "disiamylborane, Sia₂BH",
    "abbr": "",
    "def": "큰 1,2-다이메틸프로필기 둘을 가진 보레인 Sia₂BH. 입체 장애 때문에 알카인에 한 번만 더해져 수소붕소화를 알켄 단계에서 멈춘다.",
    "chapters": [
     "alkynes-synthesis#addition"
    ]
   },
   {
    "ko": "다이설파이드",
    "en": "disulfide",
    "abbr": "",
    "def": "두 싸이올이 산화되어 생긴 R–S–S–R 결합. 환원하면 다시 싸이올이 된다.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "다이아조나프토퀴논",
    "en": "diazonaphthoquinone, DNQ",
    "abbr": "",
    "def": "DNQ. 빛을 받으면 N₂를 잃고 볼프 재배열로 인덴카복실산이 되는 감광제. 노볼락의 알칼리 용해를 억제하다가 노광 뒤 촉진한다.",
    "chapters": [
     "aromatic-substitution#diazonium"
    ]
   },
   {
    "ko": "다이아조화",
    "en": "diazotization",
    "abbr": "",
    "def": "1차 아민이 아질산(NaNO₂ + 산)과 반응해 다이아조늄 이온 R–N₂⁺가 되는 반응. 방향족 아민은 0–5 °C에서 한다.",
    "chapters": [
     "aromatic-substitution#diazonium"
    ]
   },
   {
    "ko": "다이엔",
    "en": "diene",
    "abbr": "",
    "def": "탄소–탄소 이중 결합이 두 개 있는 탄화수소. 두 이중 결합의 위치에 따라 누적·공액·고립 다이엔으로 나뉜다.",
    "chapters": [
     "conjugation#dienes"
    ]
   },
   {
    "ko": "다이올",
    "en": "diol, 글라이콜",
    "abbr": "",
    "def": "OH기를 두 개 가진 알코올(글라이콜). 에틸렌 글라이콜(1,2-에테인다이올)이 대표적이다.",
    "chapters": [
     "alcohols-ethers#structure"
    ]
   },
   {
    "ko": "다이하이드록실화",
    "en": "dihydroxylation",
    "abbr": "",
    "def": "알켄의 두 탄소에 OH를 하나씩 붙여 1,2-다이올을 만드는 반응. OsO₄·찬 KMnO₄는 syn, 에폭시화 후 산 가수 분해는 anti다.",
    "chapters": [
     "alkenes#halogenation"
    ]
   },
   {
    "ko": "다중선",
    "en": "multiplet",
    "abbr": "",
    "def": "스핀–스핀 갈라짐으로 여러 줄이 된 신호. 줄 수에 따라 단일선(s)·이중선(d)·삼중선(t)·사중선(q)·오중선·육중선·칠중선이라 부른다.",
    "chapters": [
     "nmr#coupling"
    ]
   },
   {
    "ko": "다환 방향족 탄화수소",
    "en": "polycyclic aromatic hydrocarbon, PAH",
    "abbr": "",
    "def": "벤젠 고리 여러 개가 변을 공유하며 붙은 탄화수소(PAH). 나프탈렌, 안트라센, 페난트렌, 파이렌 등.",
    "chapters": [
     "aromaticity#polycyclic"
    ]
   },
   {
    "ko": "단계 성장 중합",
    "en": "step-growth polymerization",
    "abbr": "",
    "def": "모든 단위체와 사슬이 서로 반응하며 단계적으로 자라는 중합. 전환율이 1에 가까워야 긴 사슬이 된다.",
    "chapters": [
     "carboxylic-acids#polymers"
    ]
   },
   {
    "ko": "단일 동위원소 질량",
    "en": "monoisotopic mass",
    "abbr": "",
    "def": "각 원소의 가장 흔한 동위원소 질량만으로 계산한 분자 질량. 정확 질량이라고도 하며 HRMS 측정값과 비교한다.",
    "chapters": [
     "ms-ir#hrms"
    ]
   },
   {
    "ko": "단일 점유 분자 오비탈",
    "en": "SOMO, singly occupied molecular orbital",
    "abbr": "",
    "def": "SOMO. 전자가 하나만 들어 있는 분자 오비탈. 탄소 라디칼에서는 평면에 수직인 p 오비탈이며, 홀전자 밀도의 분포를 보여 준다.",
    "chapters": [
     "radicals#structure"
    ]
   },
   {
    "ko": "단파장 이동",
    "en": "hypsochromic shift, blue shift",
    "abbr": "",
    "def": "흡수 띠가 짧은 파장 쪽으로 옮겨 가는 것(청색 이동, hypsochromic shift).",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "닫힌 껍질",
    "en": "closed shell",
    "abbr": "",
    "def": "축퇴한 준위까지 모든 점유 오비탈이 전자 두 개씩 짝지어 채워진 전자 배치. 4n+2 고리 π계가 이에 해당한다.",
    "chapters": [
     "aromaticity#benzene"
    ]
   },
   {
    "ko": "대비 곡선",
    "en": "contrast curve",
    "abbr": "",
    "def": "고르게 노광·현상한 막의 남은 두께를 log 노광량에 대해 그린 곡선. 감도(E₀)와 대비 γ를 읽는다.",
    "chapters": [
     "photoresists#develop"
    ]
   },
   {
    "ko": "대칭면",
    "en": "mirror plane, σ",
    "abbr": "",
    "def": "분자를 서로 거울상인 두 절반으로 나누는 평면(σ). 어떤 형태에서든 대칭면이 있으면 그 분자는 아키랄하다.",
    "chapters": [
     "stereochemistry#chirality"
    ]
   },
   {
    "ko": "데칼린",
    "en": "decalin",
    "abbr": "",
    "def": "사이클로헥세인 두 개가 결합 하나를 공유한 바이사이클로[4.4.0]데케인. 트랜스형은 뒤집히지 않고 시스형보다 약 11 kJ/mol 안정하다.",
    "chapters": [
     "alkanes#disubstituted"
    ]
   },
   {
    "ko": "동력학적 사슬 길이",
    "en": "kinetic chain length",
    "abbr": "",
    "def": "라디칼 하나가 종결될 때까지 붙이는 평균 단량체 수 ν = Rₚ/Rᵢ. 개시제 농도의 제곱근에 반비례한다.",
    "chapters": [
     "polymers#radical"
    ]
   },
   {
    "ko": "동위 위치",
    "en": "homotopic",
    "abbr": "",
    "def": "두 H를 각각 Z로 바꾼 생성물이 같은 화합물이 되는 관계(homotopic). 언제나 화학적으로 동등하다.",
    "chapters": [
     "nmr#equivalence"
    ]
   },
   {
    "ko": "동위원소 무리",
    "en": "isotope cluster",
    "abbr": "",
    "def": "분자 이온 M과 M+1, M+2 … 봉우리의 상대 세기 묶음. ¹³C, ³⁷Cl, ⁸¹Br, ²⁹Si·³⁰Si 등의 존재비로 정해지며 원소 구성을 알려 준다.",
    "chapters": [
     "data-tables#calc"
    ]
   },
   {
    "ko": "동위원소 효과",
    "en": "kinetic isotope effect",
    "abbr": "",
    "def": "원자를 동위원소로 바꿀 때 반응 속도가 달라지는 현상. 벤젠 나이트로화에서 kH/kD ≈ 1이므로 C–H 절단은 속도 결정 단계가 아니다.",
    "chapters": [
     "aromatic-substitution#mechanism"
    ]
   },
   {
    "ko": "동족 계열",
    "en": "homologous series",
    "abbr": "",
    "def": "CH₂ 단위 하나씩 차이 나는 화합물들의 계열. 곧은 사슬 알케인 메테인·에테인·프로페인…이 대표 예다.",
    "chapters": [
     "alkanes#nomenclature"
    ]
   },
   {
    "ko": "두 자리 리간드",
    "en": "bidentate ligand",
    "abbr": "",
    "def": "금속에 두 원자로 동시에 배위하는 리간드. β-다이케토네이트(acac⁻, hfac⁻), 에틸렌다이아민, 옥살산 이온이 예다.",
    "chapters": [
     "enolates#chelates"
    ]
   },
   {
    "ko": "뒤쪽 공격",
    "en": "backside attack",
    "abbr": "",
    "def": "친핵체가 이탈기와 180° 반대 방향에서 탄소에 접근하는 것. σ* 궤도의 큰 엽과 겹치기 위한 SN2의 필수 조건이다.",
    "chapters": [
     "substitution#sn2"
    ]
   },
   {
    "ko": "들뜬 상태",
    "en": "excited state",
    "abbr": "",
    "def": "광자를 흡수해 전자 하나가 더 높은 오비탈로 올라간 상태. 바닥 상태와 결합·산성도·반응성이 다르다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "등전점",
    "en": "isoelectric point, pI",
    "abbr": "",
    "def": "분자의 평균 알짜 전하가 0이 되는 pH(pI). 곁사슬이 이온화하지 않는 아미노산은 두 pKa의 평균이다.",
    "chapters": [
     "amines#extraction"
    ]
   },
   {
    "ko": "디랙 점",
    "en": "Dirac point",
    "abbr": "",
    "def": "그래핀의 π 띠와 π* 띠가 브릴루앙 영역 모서리(K점)에서 한 점으로 맞닿는 곳. 그 근처 전자는 질량이 없는 입자처럼 움직인다.",
    "chapters": [
     "aromaticity#polycyclic"
    ]
   },
   {
    "ko": "디스로타토리",
    "en": "disrotatory",
    "abbr": "",
    "def": "전자고리 반응에서 양 끝 탄소가 서로 반대 방향으로 회전하는 방식. 4n+2 π 계의 열 반응, 4n π 계의 광반응에서 일어난다.",
    "chapters": [
     "conjugation#electrocyclic"
    ]
   },
   {
    "ko": "디크만 고리화",
    "en": "Dieckmann cyclization",
    "abbr": "",
    "def": "분자 내 클라이젠 축합. 1,6-다이에스터는 다섯 원자, 1,7-다이에스터는 여섯 원자 고리 β-케토 에스터를 만든다.",
    "chapters": [
     "enolates#claisen"
    ]
   },
   {
    "ko": "딜 ABC 모형",
    "en": "Dill ABC model",
    "abbr": "",
    "def": "감광막의 흡수를 표백되는 흡수 A·M과 남는 흡수 B로 나누고 감광제 분해를 dM/dt = −C·I·M으로 나타내 깊이별 노광을 계산하는 모형.",
    "chapters": [
     "photoresists#dnq"
    ]
   },
   {
    "ko": "딜스–알더 반응",
    "en": "Diels–Alder reaction",
    "abbr": "",
    "def": "s-시스 공액 다이엔과 친다이엔체가 한 단계로 사이클로헥센 고리를 만드는 [4+2] 고리화 첨가. 입체 특이적이며 endo 생성물이 우세하다.",
    "chapters": [
     "conjugation#diels-alder"
    ]
   },
   {
    "ko": "라디칼",
    "en": "radical",
    "abbr": "",
    "def": "홀전자를 하나 이상 가진 화학종(예: Cl·, ·CH₃). 대개 옥텟이 모자라 반응성이 크고, 균일 분해로 생기며 연쇄 반응을 일으킨다.",
    "chapters": [
     "radicals#structure"
    ]
   },
   {
    "ko": "라디칼 개시제",
    "en": "radical initiator",
    "abbr": "",
    "def": "약한 결합(O–O, C–N=N)이 열이나 빛으로 쉽게 끊어져 라디칼을 내놓는 화합물. AIBN, 과산화 벤조일, 다이-tert-뷰틸 과산화물 등.",
    "chapters": [
     "radicals#chain"
    ]
   },
   {
    "ko": "라디칼 반응",
    "en": "radical reaction",
    "abbr": "",
    "def": "홀전자를 가진 라디칼이 전자 하나씩을 주고받으며 결합이 균일하게 끊어지고 생기는 반응. 낚싯바늘 화살표로 그린다.",
    "chapters": [
     "reactions#types"
    ]
   },
   {
    "ko": "라디칼 양이온",
    "en": "radical cation",
    "abbr": "",
    "def": "전자 하나를 잃어 홀전자와 양전하를 함께 가진 화학종. EI의 분자 이온 M⁺•가 대표적이다.",
    "chapters": [
     "ms-ir#ms-basics"
    ]
   },
   {
    "ko": "라디칼 음이온",
    "en": "radical anion",
    "abbr": "",
    "def": "홀전자와 음전하를 함께 가진 화학종. 용해 금속 환원에서 알카인이 전자 하나를 받아 처음 생긴다.",
    "chapters": [
     "alkynes-synthesis#reduction"
    ]
   },
   {
    "ko": "라디칼 중합",
    "en": "radical polymerization",
    "abbr": "",
    "def": "개시제가 만든 라디칼이 바이닐 단량체에 연쇄적으로 첨가하는 연쇄 성장 중합. 개시·전파·종결·연쇄 이동 단계로 이루어진다.",
    "chapters": [
     "polymers#radical"
    ]
   },
   {
    "ko": "라모르 진동수",
    "en": "Larmor frequency",
    "abbr": "",
    "def": "자기장 B₀ 속에서 핵 자기 모멘트가 세차 운동하는 진동수 ν = γB₀/2π. 두 스핀 준위의 에너지 차이 ΔE = hν에 해당하는 공명 진동수다.",
    "chapters": [
     "nmr#resonance"
    ]
   },
   {
    "ko": "라세미 혼합물",
    "en": "racemic mixture, racemate",
    "abbr": "",
    "def": "두 거울상 이성질체가 1:1로 섞인 혼합물. 광학 비활성이며 (±) 또는 rac-로 표시한다.",
    "chapters": [
     "stereochemistry#optical"
    ]
   },
   {
    "ko": "라세미화",
    "en": "racemization",
    "abbr": "",
    "def": "광학 활성 화합물이 두 거울상 이성질체의 1:1 혼합물로 바뀌는 것. SN1에서 평면 양이온의 두 면이 모두 공격받아 생긴다.",
    "chapters": [
     "substitution#sn1"
    ]
   },
   {
    "ko": "락톤",
    "en": "lactone",
    "abbr": "",
    "def": "고리 모양의 에스터. γ-뷰티로락톤은 다섯 원자 고리 락톤으로 레지스트·폴리이미드 용매로 쓰인다.",
    "chapters": [
     "carboxylic-acids#esters"
    ]
   },
   {
    "ko": "랭뮤어 흡착",
    "en": "Langmuir adsorption",
    "abbr": "",
    "def": "흡착 자리가 한 층으로 한정되고 서로 독립이라고 보는 모형. 덮임 속도가 빈자리 비율에 비례해 θ = 1 − e^(−k_aCt) 꼴이 된다.",
    "chapters": [
     "organosilicon#sam"
    ]
   },
   {
    "ko": "런던 분산력",
    "en": "London dispersion force",
    "abbr": "",
    "def": "전자 구름의 순간적 치우침이 이웃 분자에 쌍극자를 유도해 생기는 인력. 분자가 크고 접촉 면적이 넓을수록 세다.",
    "chapters": [
     "alkanes#properties"
    ]
   },
   {
    "ko": "레지스트 대비",
    "en": "resist contrast",
    "abbr": "",
    "def": "대비 곡선의 가장 가파른 구간 기울기 γ = 1/log₁₀(E₀/E₁). 클수록 작은 노광량 차이로 녹음·남음이 갈려 측벽이 곧다.",
    "chapters": [
     "photoresists#develop"
    ]
   },
   {
    "ko": "로빈슨 고리 만들기",
    "en": "Robinson annulation",
    "abbr": "",
    "def": "마이클 첨가로 1,5-다이케톤을 만든 뒤 분자 내 알돌 축합으로 여섯 원자 고리 엔온을 덧붙이는 반응. 스테로이드 합성의 기본 단계다.",
    "chapters": [
     "enolates#claisen"
    ]
   },
   {
    "ko": "루이스 구조",
    "en": "Lewis structure",
    "abbr": "",
    "def": "원자가 전자를 결합선(공유 전자쌍)과 점(비공유 전자쌍)으로 나타낸 구조식. 원자가 전자 총수를 맞추고 팔전자 규칙을 따르도록 그린다.",
    "chapters": [
     "structure-bonding#lewis"
    ]
   },
   {
    "ko": "루이스 부가물",
    "en": "Lewis adduct",
    "abbr": "",
    "def": "루이스 산과 루이스 염기가 전자쌍을 공유해 생긴 화합물. 새 결합의 두 전자를 모두 염기가 내놓은 배위 결합이다.",
    "chapters": [
     "acids-bases#lewis"
    ]
   },
   {
    "ko": "루이스 산",
    "en": "Lewis acid",
    "abbr": "",
    "def": "전자쌍을 받는 물질. BF₃·AlCl₃처럼 빈 오비탈을 가진 화합물, 탄소 양이온, 금속 양이온, H⁺가 해당한다.",
    "chapters": [
     "acids-bases#lewis"
    ]
   },
   {
    "ko": "루이스 염기",
    "en": "Lewis base",
    "abbr": "",
    "def": "전자쌍을 주는 물질. 비공유 전자쌍을 가진 아민·에터·물·할로젠화 이온이나 π 결합이 해당한다.",
    "chapters": [
     "acids-bases#lewis"
    ]
   },
   {
    "ko": "리빙 중합",
    "en": "living polymerization",
    "abbr": "",
    "def": "종결과 연쇄 이동이 없어 단량체가 다 떨어진 뒤에도 사슬 끝이 살아 있는 중합. 분자량을 설계하고 블록 공중합체를 만들 수 있다.",
    "chapters": [
     "polymers#ionic-living"
    ]
   },
   {
    "ko": "리튬 다이아이소프로필아마이드",
    "en": "lithium diisopropylamide, LDA",
    "abbr": "",
    "def": "LDA, (iPr)₂N⁻Li⁺. 짝산 pKa 36의 강하고 부피 큰 비친핵성 염기로, −78 °C에서 케톤을 정량적으로 속도론적 엔올레이트로 만든다.",
    "chapters": [
     "enolates#enolate"
    ]
   },
   {
    "ko": "린들라 촉매",
    "en": "Lindlar catalyst",
    "abbr": "",
    "def": "Pd를 CaCO₃에 얹고 아세트산 납과 퀴놀린으로 활성을 낮춘 수소화 촉매. 알카인을 cis 알켄까지만 환원한다(syn 첨가).",
    "chapters": [
     "alkynes-synthesis#reduction"
    ]
   },
   {
    "ko": "마랑고니 건조",
    "en": "Marangoni drying",
    "abbr": "",
    "def": "물에서 웨이퍼를 천천히 끌어올리며 IPA 증기를 쬐어, 메니스커스 끝의 표면 장력을 낮춰 생기는 흐름으로 물막을 걷어 내는 건조 방법.",
    "chapters": [
     "alcohols-ethers#structure"
    ]
   },
   {
    "ko": "마르코브니코프 규칙",
    "en": "Markovnikov's rule",
    "abbr": "",
    "def": "비대칭 알켄의 친전자성 첨가는 더 안정한 탄소 양이온을 거치는 쪽으로 일어난다는 규칙. HX에서는 H가 H가 더 많은 탄소에 붙는다.",
    "chapters": [
     "alkenes#electrophilic"
    ]
   },
   {
    "ko": "마요 식",
    "en": "Mayo equation",
    "abbr": "",
    "def": "연쇄 이동이 있을 때의 중합도 1/Xₙ = 1/Xₙ,₀ + C_M + C_S[S]/[M]. C_S는 이동 상수다.",
    "chapters": [
     "polymers#radical"
    ]
   },
   {
    "ko": "마요–루이스 식",
    "en": "Mayo–Lewis equation, 공중합 조성식",
    "abbr": "",
    "def": "말단 모형 공중합에서 그 순간 생기는 공중합체의 조성 F₁을 단량체 조성 f₁과 반응성 비로 주는 식.",
    "chapters": [
     "polymers#copolymer"
    ]
   },
   {
    "ko": "마이젠하이머 착물",
    "en": "Meisenheimer complex",
    "abbr": "",
    "def": "SNAr에서 친핵체가 ipso 탄소에 첨가해 생긴 음이온 중간체. 오르토·파라의 전자 받개(–NO₂ 등)가 음전하를 받아 안정화한다.",
    "chapters": [
     "aromatic-substitution#snar-benzyne"
    ]
   },
   {
    "ko": "마이클 반응",
    "en": "Michael reaction",
    "abbr": "",
    "def": "안정한 엔올레이트 같은 무른 탄소 친핵체가 α,β-불포화 카보닐 화합물에 공액 첨가하는 반응. 1,5-다이카보닐 화합물이 생긴다.",
    "chapters": [
     "enolates#claisen"
    ]
   },
   {
    "ko": "마이클 받개",
    "en": "Michael acceptor",
    "abbr": "",
    "def": "마이클 반응에서 공격받는 α,β-불포화 화합물. 엔온, 엔알, 아크릴산 에스터, 아크릴로나이트릴, 나이트로알켄 등.",
    "chapters": [
     "enolates#claisen"
    ]
   },
   {
    "ko": "마이클 주개",
    "en": "Michael donor",
    "abbr": "",
    "def": "마이클 반응에서 공액 첨가하는 친핵체. 말론산·아세토아세트산 에스터 엔올레이트, 아민, 싸이올, 큐프레이트 등.",
    "chapters": [
     "enolates#claisen"
    ]
   },
   {
    "ko": "막음기",
    "en": "blocking group",
    "abbr": "",
    "def": "원치 않는 자리를 잠시 막아 두었다가 나중에 떼어 내는 치환기. 설폰화의 가역성을 이용한 –SO₃H가 대표적이다.",
    "chapters": [
     "aromatic-substitution#halogenation-nitration"
    ]
   },
   {
    "ko": "말단 알카인",
    "en": "terminal alkyne",
    "abbr": "",
    "def": "삼중 결합이 사슬 끝에 있어 ≡C–H를 가진 알카인(R–C≡C–H). 말단 수소는 pKa 약 25로 강염기에 떼어진다.",
    "chapters": [
     "alkynes-synthesis#structure"
    ]
   },
   {
    "ko": "매직 각",
    "en": "magic angle",
    "abbr": "",
    "def": "자기장과 θ = 54.74°(cos²θ = 1/3)를 이루는 각. 이 각에서 3cos²θ − 1 = 0이어서 쌍극자 결합과 화학적 이동 이방성이 평균 0이 된다.",
    "chapters": [
     "nmr#carbon"
    ]
   },
   {
    "ko": "매직 각 회전",
    "en": "magic-angle spinning, MAS",
    "abbr": "",
    "def": "고체 시료를 매직 각으로 기울인 축 둘레로 초당 수천–수만 번 돌려 넓은 고체 NMR 봉우리를 용액처럼 좁히는 기법(MAS).",
    "chapters": [
     "nmr#carbon"
    ]
   },
   {
    "ko": "맥 현상 모형",
    "en": "Mack development model",
    "abbr": "",
    "def": "용해 속도를 남은 억제제 분율 m의 함수 r = r_max(a+1)(1−m)ⁿ/(a+(1−m)ⁿ) + r_min으로 나타낸 모형. 문턱 m_th 근처에서 급격히 변한다.",
    "chapters": [
     "photoresists#develop"
    ]
   },
   {
    "ko": "맥라퍼티 재배열",
    "en": "McLafferty rearrangement",
    "abbr": "",
    "def": "카보닐의 γ-H가 여섯 원자 고리 전이 상태로 산소에 옮겨 가고 α–β 결합이 끊어져 알켄이 떨어지는 재배열. 짝수 m/z 조각을 준다.",
    "chapters": [
     "ms-ir#fragments"
    ]
   },
   {
    "ko": "머리–꼬리 결합",
    "en": "head-to-tail",
    "abbr": "",
    "def": "바이닐 단량체 CH₂=CHX가 치환기 X를 탄소 하나 건너 하나씩 놓이도록 붙는 방식. 더 안정한 라디칼·이온을 거치기 때문에 우세하다.",
    "chapters": [
     "polymers#overview"
    ]
   },
   {
    "ko": "머큐리늄 이온",
    "en": "mercurinium ion",
    "abbr": "",
    "def": "수은이 이중 결합의 두 탄소에 다리를 놓은 3원 고리 양이온 중간체. 열린 탄소 양이온이 아니어서 재배열이 일어나지 않는다.",
    "chapters": [
     "alkenes#hydration"
    ]
   },
   {
    "ko": "메소 화합물",
    "en": "meso compound",
    "abbr": "",
    "def": "입체 중심이 있지만 분자 안의 대칭면 때문에 거울상이 자기 자신인 아키랄 화합물. 타르타르산의 (2R,3S)형이 예다.",
    "chapters": [
     "stereochemistry#diastereomers"
    ]
   },
   {
    "ko": "메슈트킨 반응",
    "en": "Menshutkin reaction",
    "abbr": "",
    "def": "3차 아민이 할로젠화 알킬을 SN2로 공격해 4차 암모늄염을 만드는 반응. TMAH 현상액의 양이온을 이렇게 만든다.",
    "chapters": [
     "substitution#nucleophiles"
    ]
   },
   {
    "ko": "메실레이트",
    "en": "mesylate",
    "abbr": "",
    "def": "메테인설포네이트 에스터 ROMs. MsCl과 염기로 만들며 토실레이트와 비슷한 좋은 이탈기다.",
    "chapters": [
     "substitution#activation"
    ]
   },
   {
    "ko": "메타",
    "en": "meta, m-",
    "abbr": "",
    "def": "벤젠 고리에서 기준 치환기와 한 탄소 건너 있는 자리(1,3-관계). m-으로 줄여 쓴다.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "메타 지향기",
    "en": "meta director",
    "abbr": "",
    "def": "새 치환기를 주로 메타 자리로 보내는 치환기. 전자를 당겨 오르토·파라 시그마 착물의 ipso 양전하 구조를 특히 불안정하게 한다.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "모어 오페럴–젠크스 도표",
    "en": "More O'Ferrall–Jencks diagram",
    "abbr": "",
    "def": "C–X와 C–H가 끊어진 정도를 두 축으로 한 반응 지도. E1·E2·E1cB를 전이 상태 위치가 다른 하나의 스펙트럼으로 보여 준다.",
    "chapters": [
     "elimination#e1"
    ]
   },
   {
    "ko": "목표 분자",
    "en": "target molecule",
    "abbr": "",
    "def": "합성하려는 분자. 역합성 분석은 목표 분자에서 출발해 거꾸로 진행한다.",
    "chapters": [
     "alkynes-synthesis#synthesis"
    ]
   },
   {
    "ko": "몰 흡광 계수",
    "en": "molar absorptivity",
    "abbr": "",
    "def": "1 M 용액이 1 cm 경로에서 보이는 흡광도(M⁻¹ cm⁻¹). 전이의 세기를 나타내며 허용 전이일수록 크다.",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "몰오존화물",
    "en": "molozonide",
    "abbr": "",
    "def": "알켄과 오존의 1,3-쌍극자 고리 첨가로 처음 생기는 불안정한 1,2,3-트라이옥솔레인.",
    "chapters": [
     "alkenes#cleavage"
    ]
   },
   {
    "ko": "무거운 원자 효과",
    "en": "heavy-atom effect",
    "abbr": "",
    "def": "Br·I·Ir 같은 무거운 원자의 큰 스핀–궤도 결합이 계간 전이와 인광을 빠르게 하는 효과. 형광은 약해진다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "미세 상분리",
    "en": "microphase separation",
    "abbr": "",
    "def": "섞이지 않는 블록들이 공유 결합으로 묶여 있어 수십 nm 크기의 규칙적 구조(구·실린더·자이로이드·라멜라)로 나뉘는 현상.",
    "chapters": [
     "polymers#semi"
    ]
   },
   {
    "ko": "미시적 가역성",
    "en": "microscopic reversibility",
    "abbr": "",
    "def": "정반응과 역반응은 같은 경로와 같은 전이 상태를 지난다는 원리. 그래서 k_f/k_r = K이다.",
    "chapters": [
     "reactions#energy"
    ]
   },
   {
    "ko": "바닥 상태",
    "en": "ground state",
    "abbr": "",
    "def": "분자가 가장 낮은 에너지의 전자 배치에 있는 상태(S₀). 대부분의 유기 분자는 전자가 모두 짝지어 있어 일중항이다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "바이닐 양이온",
    "en": "vinyl cation",
    "abbr": "",
    "def": "양전하가 이중 결합 탄소에 있는 탄소 양이온(R–C⁺=CR₂). 알킬 양이온보다 불안정해 알카인의 친전자성 첨가가 알켄보다 느리다.",
    "chapters": [
     "alkynes-synthesis#addition"
    ]
   },
   {
    "ko": "반방향족",
    "en": "antiaromatic",
    "abbr": "",
    "def": "평면 고리 공액계에 π 전자가 4n개 있어 사슬 공액계보다 오히려 불안정한 상태. 예: 사이클로뷰타다이엔.",
    "chapters": [
     "aromaticity#classification"
    ]
   },
   {
    "ko": "반복 단위",
    "en": "repeat unit",
    "abbr": "",
    "def": "고분자 사슬에서 되풀이되는 최소 구조 단위. 구조식에서는 괄호로 묶고 양 끝을 열어 둔다(이 책에서는 * 표시).",
    "chapters": [
     "polymers#overview"
    ]
   },
   {
    "ko": "반응 에너지 도표",
    "en": "reaction energy diagram",
    "abbr": "",
    "def": "반응 좌표에 따른 자유 에너지를 그린 그림. 골짜기는 반응물·중간체·생성물, 고개는 전이 상태다.",
    "chapters": [
     "reactions#energy"
    ]
   },
   {
    "ko": "반응 좌표",
    "en": "reaction coordinate",
    "abbr": "",
    "def": "반응물에서 생성물로 원자 배치가 바뀌는 가장 낮은 에너지 경로를 한 변수로 나타낸 것. 에너지 도표의 가로축이다.",
    "chapters": [
     "reactions#energy"
    ]
   },
   {
    "ko": "반응 차수",
    "en": "reaction order",
    "abbr": "",
    "def": "속도식에서 각 반응물 농도에 붙은 지수. 초기 속도법에서 log v–log[X] 그래프의 기울기로 구한다.",
    "chapters": [
     "substitution#sn2"
    ]
   },
   {
    "ko": "반응성 비",
    "en": "reactivity ratio",
    "abbr": "",
    "def": "공중합에서 한 사슬 끝이 같은 단량체를 붙이는 속도 상수와 상대 단량체를 붙이는 속도 상수의 비 r₁ = k₁₁/k₁₂.",
    "chapters": [
     "polymers#copolymer"
    ]
   },
   {
    "ko": "반의자 형태",
    "en": "half-chair",
    "abbr": "",
    "def": "고리 뒤집기의 전이 상태에 해당하는 형태(half-chair). 의자보다 약 45 kJ/mol 높다.",
    "chapters": [
     "alkanes#cyclohexane"
    ]
   },
   {
    "ko": "반자기 고리 전류",
    "en": "diatropic ring current",
    "abbr": "",
    "def": "4n+2 방향족 고리의 고리 전류. 고리 안쪽과 위를 차폐하고 바깥 평면을 탈차폐한다(벤젠 H 7.3 ppm).",
    "chapters": [
     "aromaticity#ring-current"
    ]
   },
   {
    "ko": "반전 중심",
    "en": "center of inversion, i",
    "abbr": "",
    "def": "모든 원자를 그 점을 지나 반대쪽 같은 거리로 옮겨도 같은 분자가 되는 점(i). 반전 중심이 있으면 아키랄하다.",
    "chapters": [
     "stereochemistry#chirality"
    ]
   },
   {
    "ko": "발덴 반전",
    "en": "Walden inversion",
    "abbr": "",
    "def": "SN2에서 탄소의 세 치환기가 우산처럼 반대편으로 뒤집혀 입체 중심의 배열이 거울상으로 바뀌는 현상.",
    "chapters": [
     "substitution#sn2"
    ]
   },
   {
    "ko": "발색단",
    "en": "chromophore",
    "abbr": "",
    "def": "UV–Vis 빛을 흡수하는 원자단. C=C, C=O, 공액 폴리엔, 방향족 고리, 아조기 등.",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "방향족 안정화 에너지",
    "en": "aromatic stabilization energy",
    "abbr": "",
    "def": "방향족 고리가 π 전자의 고리 비편재화로 가상의 비방향족 구조보다 더 안정한 정도. 벤젠은 약 150 kJ/mol이며, 그래서 첨가보다 치환이 유리하다.",
    "chapters": [
     "aromatic-substitution#mechanism"
    ]
   },
   {
    "ko": "방향족 이온",
    "en": "aromatic ion",
    "abbr": "",
    "def": "전하를 띤 탄소의 비공유쌍이나 빈 p 오비탈까지 포함해 π 전자가 4n+2개가 된 고리 이온. 예: Cp⁻, 트로필륨 이온.",
    "chapters": [
     "aromaticity#ions"
    ]
   },
   {
    "ko": "방향족 화합물",
    "en": "aromatic compound",
    "abbr": "",
    "def": "방향족성을 가진 화합물. 벤젠·나프탈렌·피리딘처럼 첨가보다 치환 반응을 하고 고리 전류를 보인다.",
    "chapters": [
     "aromaticity#benzene"
    ]
   },
   {
    "ko": "방향족성",
    "en": "aromaticity",
    "abbr": "",
    "def": "평면 고리를 따라 이어진 p 오비탈에 π 전자가 4n+2개 채워져, 같은 수의 이중 결합을 가진 사슬 화합물보다 특별히 안정해지는 성질.",
    "chapters": [
     "aromaticity#benzene"
    ]
   },
   {
    "ko": "배 형태",
    "en": "boat",
    "abbr": "",
    "def": "사이클로헥세인의 C1과 C4가 같은 쪽으로 들린 형태(boat). 가림과 깃대 수소 충돌로 의자보다 약 29 kJ/mol 높다.",
    "chapters": [
     "alkanes#cyclohexane"
    ]
   },
   {
    "ko": "베이어–빌리거 산화",
    "en": "Baeyer–Villiger oxidation",
    "abbr": "",
    "def": "케톤을 퍼옥시산으로 산화해 카보닐 탄소와 이웃 탄소 사이에 산소를 끼워 에스터(고리 케톤은 락톤)로 만드는 반응.",
    "chapters": [
     "aldehydes-ketones#wittig"
    ]
   },
   {
    "ko": "벤자인",
    "en": "benzyne",
    "abbr": "",
    "def": "고리 안에 약한 두 번째 π 결합(평면 안 sp² 오비탈 겹침)을 가진 C₆H₄ 중간체. 센 염기로 할로젠화 아릴에서 HX가 빠져 생긴다.",
    "chapters": [
     "aromatic-substitution#snar-benzyne"
    ]
   },
   {
    "ko": "벤조사이클로뷰텐",
    "en": "benzocyclobutene, BCB",
    "abbr": "",
    "def": "벤젠에 4원 고리가 붙은 분자(BCB). 200 °C 넘게 가열하면 o-자일릴렌으로 열리고 딜스–알더로 가교된다.",
    "chapters": [
     "polymers#network"
    ]
   },
   {
    "ko": "벤질 라디칼",
    "en": "benzyl radical",
    "abbr": "",
    "def": "벤젠 고리에 붙은 탄소에 홀전자가 있는 라디칼(C₆H₅CH₂·). 홀전자가 고리의 오쏘·파라 탄소로 퍼져 안정하다(C–H BDE 375 kJ/mol).",
    "chapters": [
     "radicals#structure"
    ]
   },
   {
    "ko": "벤질 자리",
    "en": "benzylic position",
    "abbr": "",
    "def": "벤젠 고리에 직접 붙은 탄소 자리. 이 자리의 C–H는 약해 라디칼 브로민화와 자동 산화가 잘 일어난다.",
    "chapters": [
     "radicals#allylic"
    ]
   },
   {
    "ko": "벨–에번스–폴라니 원리",
    "en": "Bell–Evans–Polanyi principle",
    "abbr": "",
    "def": "비슷한 반응 사이에서 활성화 에너지가 반응 에너지에 선형으로 비례해 바뀐다는 원리. 기울기는 전이 상태의 위치 x‡에 해당한다.",
    "chapters": [
     "reactions#hammond"
    ]
   },
   {
    "ko": "보색",
    "en": "complementary color",
    "abbr": "",
    "def": "백색광에서 어떤 색 빛이 흡수될 때 남은 빛이 만드는 색. 파랑(약 450 nm)을 흡수한 β-카로텐은 주황으로 보인다.",
    "chapters": [
     "conjugation#color"
    ]
   },
   {
    "ko": "보호기",
    "en": "protecting group",
    "abbr": "",
    "def": "작용기를 일시적으로 막아 반응이나 용해를 억제했다가 필요할 때 떼어 내는 기. 레지스트에서는 t-BOC·tert-뷰틸 에스터가 현상액 용해를 막는다.",
    "chapters": [
     "elimination#resist"
    ]
   },
   {
    "ko": "보호율",
    "en": "protection ratio",
    "abbr": "",
    "def": "보호기(t-BOC·아세탈 등)로 가린 반복 단위의 분율. 화학 증폭형 레지스트의 용해 대비와 감도를 정하며 ¹H·¹³C NMR 넓이 비로 잰다.",
    "chapters": [
     "nmr#structure"
    ]
   },
   {
    "ko": "볼츠만 분포",
    "en": "Boltzmann distribution",
    "abbr": "",
    "def": "온도 T에서 에너지 Eᵢ인 상태의 비율이 gᵢ·e^(−Eᵢ/RT)에 비례한다는 분포. 형태 이성질체의 평형 조성을 준다.",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "볼프 재배열",
    "en": "Wolff rearrangement",
    "abbr": "",
    "def": "α-다이아조 케톤이 N₂를 잃어 생긴 카벤 옆으로 카보닐의 치환기가 옮겨 가 케텐이 되는 재배열. DNQ 감광제의 광반응이다.",
    "chapters": [
     "photoresists#photoreactions"
    ]
   },
   {
    "ko": "봉투 형태",
    "en": "envelope conformation",
    "abbr": "",
    "def": "사이클로펜테인의 탄소 하나가 나머지 넷의 평면 밖으로 들린 형태. 가림을 줄인다.",
    "chapters": [
     "alkanes#ring-strain"
    ]
   },
   {
    "ko": "부분 속도 인자",
    "en": "partial rate factor",
    "abbr": "",
    "def": "치환 벤젠의 특정 자리 하나가 벤젠의 자리 하나보다 몇 배 빠르게 반응하는지 나타낸 값 f. 전체 상대 속도와 이성질체 분포로 계산한다.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "부분입체 위치",
    "en": "diastereotopic",
    "abbr": "",
    "def": "두 H를 각각 Z로 바꾼 생성물이 부분입체 이성질체가 되는 관계(diastereotopic). 입체 중심 옆 CH₂나 =CH₂의 두 H처럼 화학적 이동이 달라질 수 있다.",
    "chapters": [
     "nmr#equivalence"
    ]
   },
   {
    "ko": "부분입체 이성질체",
    "en": "diastereomer",
    "abbr": "",
    "def": "서로 거울상이 아닌 입체 이성질체. 시스·트랜스 이성질체와 입체 중심 일부만 다른 분자들이 해당하며 물성이 서로 다르다.",
    "chapters": [
     "stereochemistry#diastereomers"
    ]
   },
   {
    "ko": "부피 큰 염기",
    "en": "bulky base",
    "abbr": "",
    "def": "tert-뷰톡사이드처럼 입체 장애가 커서 가려진 수소나 탄소에 다가가기 어려운 염기. 치환보다 제거를, 자이체프보다 호프만 생성물을 준다.",
    "chapters": [
     "elimination#regio"
    ]
   },
   {
    "ko": "분산도",
    "en": "dispersity, 예전 이름 PDI",
    "abbr": "",
    "def": "무게평균 분자량과 수평균 분자량의 비 Đ = M_w/Mₙ(예전 이름 PDI). 1이면 모든 사슬의 길이가 같다.",
    "chapters": [
     "polymers#ionic-living"
    ]
   },
   {
    "ko": "분산력",
    "en": "London dispersion force",
    "abbr": "",
    "def": "전자 구름의 순간 쌍극자와 그것이 이웃에 유도한 쌍극자 사이의 인력. 모든 분자에 있고 분자가 크고 길수록 세다.",
    "chapters": [
     "structure-bonding#imf"
    ]
   },
   {
    "ko": "분자 간 힘",
    "en": "intermolecular force",
    "abbr": "",
    "def": "분자와 분자 사이의 인력. 분산력, 쌍극자–쌍극자 힘, 수소 결합이 있으며 끓는점·용해도·젖음을 결정한다.",
    "chapters": [
     "structure-bonding#imf"
    ]
   },
   {
    "ko": "분자 내 수소 결합",
    "en": "intramolecular hydrogen bond",
    "abbr": "",
    "def": "한 분자 안의 O–H와 다른 산소 사이의 수소 결합. 아세틸아세톤 엔올에서 여섯 원자 고리를 만들어 엔올을 안정하게 한다.",
    "chapters": [
     "enolates#tautomerism"
    ]
   },
   {
    "ko": "분자 내 알돌 반응",
    "en": "intramolecular aldol reaction",
    "abbr": "",
    "def": "한 분자 안의 두 카보닐 사이 알돌 반응으로 고리가 생긴다. 변형이 적은 다섯·여섯 원자 고리가 우세하다.",
    "chapters": [
     "enolates#aldol"
    ]
   },
   {
    "ko": "분자 오염",
    "en": "airborne molecular contamination, AMC",
    "abbr": "",
    "def": "공기 중 미량 유기·무기 분자가 웨이퍼나 광학 소자 표면에 흡착해 공정을 해치는 오염(AMC).",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "분자 이온",
    "en": "molecular ion, M⁺•",
    "abbr": "",
    "def": "분자가 전자 하나를 잃어 생긴 라디칼 양이온 M⁺•. 가장 흔한 동위원소로만 된 것의 m/z가 정수 분자량과 같다.",
    "chapters": [
     "ms-ir#ms-basics"
    ]
   },
   {
    "ko": "분할",
    "en": "resolution",
    "abbr": "",
    "def": "라세미 혼합물을 두 거울상 이성질체로 나누는 일. 키랄 산·염기와 부분입체 이성질체 염을 만들거나 키랄 크로마토그래피를 쓴다.",
    "chapters": [
     "stereochemistry#optical"
    ]
   },
   {
    "ko": "분해 폭발",
    "en": "decomposition explosion",
    "abbr": "",
    "def": "산소 없이 물질 자체가 발열 분해하며 연쇄로 번지는 폭발. 아세틸렌은 C₂H₂ → 2C + H₂가 227 kJ/mol 발열이라 압축하면 위험하다.",
    "chapters": [
     "alkynes-synthesis#acidity"
    ]
   },
   {
    "ko": "분해능",
    "en": "resolving power",
    "abbr": "",
    "def": "가까운 두 봉우리를 갈라 보는 능력. R = m/Δm(Δm은 봉우리 반치폭)으로 나타낸다.",
    "chapters": [
     "ms-ir#hrms"
    ]
   },
   {
    "ko": "불균등화",
    "en": "disproportionation",
    "abbr": "",
    "def": "같은 산화수의 화학종 둘이 하나는 산화, 하나는 환원되는 반응. 2 Cu(I) → Cu(0) + Cu(II)가 구리 CVD의 핵심 단계다.",
    "chapters": [
     "enolates#tautomerism"
    ]
   },
   {
    "ko": "불균일 분해",
    "en": "heterolysis",
    "abbr": "",
    "def": "결합 전자쌍 두 개가 한쪽 조각으로 함께 가는 결합 끊어짐. 양이온과 음이온이 생기며 극성 반응의 단위 동작이다.",
    "chapters": [
     "reactions#types"
    ]
   },
   {
    "ko": "불균일 촉매",
    "en": "heterogeneous catalyst",
    "abbr": "",
    "def": "반응물과 다른 상(대개 고체)에 있는 촉매. 반응은 촉매 표면에 흡착한 상태에서 일어난다.",
    "chapters": [
     "alkenes#cleavage"
    ]
   },
   {
    "ko": "불포화도",
    "en": "degree of unsaturation",
    "abbr": "",
    "def": "분자식에서 계산한 고리와 π 결합 수의 합. (2C + 2 + N − H − X)/2로 구한다.",
    "chapters": [
     "alkenes#structure"
    ]
   },
   {
    "ko": "불활성화기",
    "en": "deactivating group",
    "abbr": "",
    "def": "벤젠보다 EAS를 느리게 하는 치환기. –NO₂, –CN, –C=O, –SO₃H, –CF₃, –NR₃⁺(메타 지향)와 할로젠(오르토·파라 지향)이 있다.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "뷔르기–두니츠 각",
    "en": "Bürgi–Dunitz angle",
    "abbr": "",
    "def": "친핵체가 카보닐에 다가오는 ∠Nu–C–O 각으로 약 105–110°다. π*의 탄소 로브와 겹치면서 산소 쪽 반대 위상 로브·전자쌍을 피하는 방향이다.",
    "chapters": [
     "aldehydes-ketones#addition"
    ]
   },
   {
    "ko": "브로모늄 이온",
    "en": "bromonium ion",
    "abbr": "",
    "def": "Br이 이중 결합의 두 탄소에 다리를 놓은 3원 고리 양이온. 한 면을 막으므로 친핵체가 반대 면에서 고리를 연다.",
    "chapters": [
     "alkenes#halogenation"
    ]
   },
   {
    "ko": "브뢴스테드 산",
    "en": "Brønsted acid",
    "abbr": "",
    "def": "양성자(H⁺)를 내주는 물질.",
    "chapters": [
     "acids-bases#bronsted"
    ]
   },
   {
    "ko": "브뢴스테드 염기",
    "en": "Brønsted base",
    "abbr": "",
    "def": "양성자(H⁺)를 받는 물질. 양성자와 결합할 비공유 전자쌍이나 π 결합을 가진다.",
    "chapters": [
     "acids-bases#bronsted"
    ]
   },
   {
    "ko": "블록 공중합체",
    "en": "block copolymer",
    "abbr": "",
    "def": "서로 다른 단량체의 긴 덩어리(블록)가 공유 결합으로 이어진 공중합체. 리빙 중합의 순차 단량체 첨가로 만든다.",
    "chapters": [
     "polymers#copolymer"
    ]
   },
   {
    "ko": "비광회전도",
    "en": "specific rotation",
    "abbr": "",
    "def": "길이 1 dm, 농도 1 g/mL로 환산한 회전각 [α] = α/(l·c). 파장·온도·용매와 함께 적는 물질 고유의 값이다.",
    "chapters": [
     "stereochemistry#optical"
    ]
   },
   {
    "ko": "비누화",
    "en": "saponification",
    "abbr": "",
    "def": "에스터를 수산화 이온으로 가수 분해해 카복실레이트와 알코올을 얻는 반응. 마지막 산–염기 단계 때문에 비가역이다.",
    "chapters": [
     "carboxylic-acids#esters"
    ]
   },
   {
    "ko": "비방향족",
    "en": "nonaromatic",
    "abbr": "",
    "def": "sp³ 원자나 비평면 구조 때문에 고리 공액이 끊겨 방향족도 반방향족도 아닌 고리 화합물. 예: 사이클로옥타테트라엔.",
    "chapters": [
     "aromaticity#classification"
    ]
   },
   {
    "ko": "비양성자성 극성 용매",
    "en": "polar aprotic solvent",
    "abbr": "",
    "def": "극성은 크지만 수소 결합을 주지 못하는 용매(DMSO, DMF, 아세토나이트릴, 아세톤). 음이온을 벗겨 SN2를 가속한다.",
    "chapters": [
     "substitution#solvent"
    ]
   },
   {
    "ko": "비양성자성 용매",
    "en": "aprotic solvent",
    "abbr": "",
    "def": "수소 결합을 줄 H가 없는 용매. 아세톤, DMSO, NMP처럼 극성인 것과 헥세인·톨루엔처럼 무극성인 것이 있다.",
    "chapters": [
     "structure-bonding#imf"
    ]
   },
   {
    "ko": "비어–람베르트 법칙",
    "en": "Beer–Lambert law",
    "abbr": "",
    "def": "흡광도가 몰 흡광 계수 ε, 경로 길이 b, 농도 c의 곱과 같다는 법칙 A = εbc.",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "비정질 탄소층",
    "en": "amorphous carbon layer, ACL",
    "abbr": "",
    "def": "C₂H₂·C₃H₆ 등을 PECVD로 분해해 쌓은 sp²·sp³ 탄소와 수소의 무질서한 막(ACL). 깊은 구멍 식각의 하드마스크로 쓴다.",
    "chapters": [
     "alkynes-synthesis#structure"
    ]
   },
   {
    "ko": "비친핵성 염기",
    "en": "non-nucleophilic base",
    "abbr": "",
    "def": "부피나 구조 때문에 탄소를 공격하지 못하고 양성자만 떼는 강염기. tert-뷰톡사이드, LDA, DBU 등이 있으며 제거 반응에 쓴다.",
    "chapters": [
     "elimination#compete"
    ]
   },
   {
    "ko": "비틀림 변형",
    "en": "torsional strain",
    "abbr": "",
    "def": "가려진 형태에서 앞뒤 결합 전자쌍의 반발과 초공액 안정화 상실로 생기는 에너지 상승. H/H 가림 한 쌍에 4.0 kJ/mol.",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "비티히 반응",
    "en": "Wittig reaction",
    "abbr": "",
    "def": "인 일라이드가 알데하이드·케톤과 반응해 옥사포스페테인을 거쳐 C=O 자리에 정확히 C=C를 만들고 Ph₃P=O를 내놓는 반응.",
    "chapters": [
     "aldehydes-ketones#wittig"
    ]
   },
   {
    "ko": "비편재화",
    "en": "delocalization",
    "abbr": "",
    "def": "전자쌍이나 전하가 한 원자·결합에 머물지 않고 세 개 이상의 원자에 퍼지는 것. 분자를 안정하게 한다.",
    "chapters": [
     "acids-bases#resonance"
    ]
   },
   {
    "ko": "비편재화 에너지",
    "en": "delocalization energy",
    "abbr": "",
    "def": "π 전자가 공액계 전체에 퍼져서 얻는 여분의 안정화. 같은 전자를 고립된 이중 결합에 넣었을 때의 π 에너지와의 차이(뷰타다이엔 0.472β).",
    "chapters": [
     "conjugation#huckel"
    ]
   },
   {
    "ko": "사면체 중간체",
    "en": "tetrahedral intermediate",
    "abbr": "",
    "def": "친핵체가 카보닐 탄소에 첨가해 생긴 sp³ 탄소의 알콕사이드(또는 그 짝산). 평면 120°에서 사면체 109.5°로 바뀌므로 치환기가 클수록 불리하다.",
    "chapters": [
     "aldehydes-ketones#addition"
    ]
   },
   {
    "ko": "사슬 길이",
    "en": "chain length",
    "abbr": "",
    "def": "개시로 생긴 라디칼 하나가 종결되기 전까지 전파 고리를 도는 평균 횟수. 전파 속도 ÷ 개시 속도이고 개시 속도의 제곱근에 반비례한다.",
    "chapters": [
     "radicals#chain"
    ]
   },
   {
    "ko": "사슬 이동제",
    "en": "chain transfer agent, CTA",
    "abbr": "",
    "def": "약한 X–H 결합(예: 싸이올 S–H)을 가져 연쇄 이동을 일으켜 분자량을 낮추는 첨가물(CTA).",
    "chapters": [
     "polymers#radical"
    ]
   },
   {
    "ko": "사이아노하이드린",
    "en": "cyanohydrin",
    "abbr": "",
    "def": "HCN이 카보닐에 첨가해 같은 탄소에 OH와 CN이 붙은 화합물. CN⁻ 촉매로 만들며, 아세톤 사이아노하이드린은 메타크릴산 메틸(MMA)의 원료다.",
    "chapters": [
     "aldehydes-ketones#addition"
    ]
   },
   {
    "ko": "사이클로알케인",
    "en": "cycloalkane",
    "abbr": "",
    "def": "탄소가 고리를 이룬 포화 탄화수소. 일반식 CₙH₂ₙ이며 이름 앞에 ‘사이클로’를 붙인다.",
    "chapters": [
     "alkanes#nomenclature"
    ]
   },
   {
    "ko": "사이클로펜타다이엔일 음이온",
    "en": "cyclopentadienyl anion, Cp⁻",
    "abbr": "",
    "def": "사이클로펜타다이엔에서 CH₂ 양성자를 뗀 C₅H₅⁻. 6π 방향족이라 짝산의 pKa가 16으로 낮다.",
    "chapters": [
     "aromaticity#ions"
    ]
   },
   {
    "ko": "사이클로프로펜일 양이온",
    "en": "cyclopropenyl cation, C₃H₃⁺",
    "abbr": "",
    "def": "C₃H₃⁺. 2π(n = 0)인 가장 작은 방향족으로, 트라이페닐 유도체는 안정한 염이다.",
    "chapters": [
     "aromaticity#ions"
    ]
   },
   {
    "ko": "사중극자 질량 필터",
    "en": "quadrupole mass filter",
    "abbr": "",
    "def": "막대 네 개에 직류와 고주파 전압을 걸어 특정 m/z 이온만 통과시키는 질량 분석부. 작고 빠르며 단위 분해능이다.",
    "chapters": [
     "ms-ir#ms-basics"
    ]
   },
   {
    "ko": "산 무수물",
    "en": "acid anhydride",
    "abbr": "",
    "def": "RCO–O–COR. 두 카복실산에서 물이 빠진 구조로, 카복실레이트를 이탈기로 내놓는다.",
    "chapters": [
     "carboxylic-acids#interconversion"
    ]
   },
   {
    "ko": "산 염화물",
    "en": "acid chloride, acyl chloride",
    "abbr": "",
    "def": "RCOCl. 이탈기 Cl⁻가 아주 약한 염기라 유도체 가운데 반응성이 가장 크다. 카복실산과 SOCl₂으로 만든다.",
    "chapters": [
     "carboxylic-acids#interconversion"
    ]
   },
   {
    "ko": "산 절단",
    "en": "acidic cleavage",
    "abbr": "",
    "def": "진한 HI·HBr로 에터 산소를 양성자화한 뒤 할로젠화 이온이 탄소를 공격해 C–O 결합을 끊는 반응. 메틸·1°는 S_N2, 3°는 S_N1.",
    "chapters": [
     "alcohols-ethers#ethers"
    ]
   },
   {
    "ko": "산 촉매 탈수",
    "en": "acid-catalyzed dehydration",
    "abbr": "",
    "def": "강산이 알코올의 –OH를 양성자화해 물로 떠나게 하여 알켄을 만드는 반응. 3°·2° 알코올은 E1, 1° 알코올은 E2로 진행하고 산은 재생된다.",
    "chapters": [
     "elimination#dehydration"
    ]
   },
   {
    "ko": "산 해리 상수",
    "en": "acid dissociation constant",
    "abbr": "",
    "def": "산 HA가 물에 양성자를 주는 평형 HA + H₂O ⇌ A⁻ + H₃O⁺의 상수 Ka = [A⁻][H₃O⁺]/[HA].",
    "chapters": [
     "acids-bases#pka"
    ]
   },
   {
    "ko": "산 확산 길이",
    "en": "acid diffusion length",
    "abbr": "",
    "def": "노광 후 굽기 동안 산이 움직이는 평균 거리. L = √(2Dt)로 어림하며 해상도와 선 가장자리 거칠기를 함께 정한다.",
    "chapters": [
     "photoresists#car"
    ]
   },
   {
    "ko": "산소 억제",
    "en": "oxygen inhibition",
    "abbr": "",
    "def": "O₂가 성장 라디칼을 반응성이 낮은 퍼옥시 라디칼로 바꿔 라디칼 경화를 늦추는 현상. 공기와 닿는 표면이 덜 굳는다.",
    "chapters": [
     "alkenes#cleavage"
    ]
   },
   {
    "ko": "산화적 절단",
    "en": "oxidative cleavage",
    "abbr": "",
    "def": "산화제로 탄소–탄소 다중 결합을 끊는 반응. 알카인은 O₃나 뜨거운 KMnO₄로 카복실산(말단 탄소는 CO₂)이 된다.",
    "chapters": [
     "alkynes-synthesis#oxidation"
    ]
   },
   {
    "ko": "산화적 첨가",
    "en": "oxidative addition",
    "abbr": "",
    "def": "금속이 X–Y 결합 사이에 끼어들어 M(X)(Y)가 되는 기본 단계. 금속의 산화수와 배위수가 2씩 늘어난다(Pd⁰ → Pdᴵᴵ).",
    "chapters": [
     "organosilicon#coupling"
    ]
   },
   {
    "ko": "삼중항",
    "en": "triplet",
    "abbr": "",
    "def": "홀전자 두 개의 스핀이 나란해 전체 스핀이 1, 다중도 3인 상태. 같은 배치의 일중항보다 낮고, 수명이 길며 다이라디칼처럼 반응한다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "상 이동 촉매",
    "en": "phase-transfer catalyst",
    "abbr": "",
    "def": "친유성 4차 암모늄 염처럼 음이온을 짝으로 물층에서 유기층으로 옮겨 두 상 사이의 반응을 빠르게 하는 촉매.",
    "chapters": [
     "amines#hofmann"
    ]
   },
   {
    "ko": "상대 반응성",
    "en": "relative reactivity",
    "abbr": "",
    "def": "할로젠화에서 H 한 개당 떨어지는 속도의 비. 25 °C 근삿값 Cl 1 : 3.9 : 5.2, Br 1 : 82 : 1600(1차 : 2차 : 3차).",
    "chapters": [
     "radicals#selectivity"
    ]
   },
   {
    "ko": "상자기 고리 전류",
    "en": "paratropic ring current",
    "abbr": "",
    "def": "4n 반방향족 고리에서 반대 방향으로 생기는 고리 전류. 안쪽 수소를 탈차폐하고 바깥 수소를 차폐한다.",
    "chapters": [
     "aromaticity#ring-current"
    ]
   },
   {
    "ko": "샌드마이어 반응",
    "en": "Sandmeyer reaction",
    "abbr": "",
    "def": "Cu(I) 염(CuCl, CuBr, CuCN)으로 아렌다이아조늄의 N₂를 Cl, Br, CN으로 바꾸는 반응. 아릴 라디칼을 거친다.",
    "chapters": [
     "aromatic-substitution#diazonium"
    ]
   },
   {
    "ko": "선 가장자리 거칠기",
    "en": "line-edge roughness, LER",
    "abbr": "",
    "def": "패턴 선의 가장자리가 직선에서 벗어나 흔들리는 정도(LER). 보통 가장자리 위치 분포의 3σ로 나타낸다.",
    "chapters": [
     "photoresists#car"
    ]
   },
   {
    "ko": "선택비",
    "en": "selectivity",
    "abbr": "",
    "def": "같은 조건에서 식각하려는 막과 다른 막(마스크·아래층)의 식각 속도 비. 예: 산화막 : 실리콘 선택비 20.",
    "chapters": [
     "radicals#plasma"
    ]
   },
   {
    "ko": "설파이드",
    "en": "sulfide, 싸이오에터",
    "abbr": "",
    "def": "R–S–R′ 구조의 황 화합물(싸이오에터). 산화되면 설폭사이드·설폰, 알킬화되면 설포늄 이온이 된다.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "설포네이트",
    "en": "sulfonate",
    "abbr": "",
    "def": "RSO₃⁻ 이온 또는 그 에스터. 음전하가 세 산소에 공명으로 퍼져 할로젠화 이온보다도 좋은 이탈기다.",
    "chapters": [
     "substitution#nucleophiles"
    ]
   },
   {
    "ko": "설포늄 이온",
    "en": "sulfonium ion",
    "abbr": "",
    "def": "황에 탄소 셋이 붙은 양이온 R₃S⁺. 트라이페닐설포늄 염은 화학 증폭형 레지스트의 광산 발생제다.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "설폭사이드",
    "en": "sulfoxide",
    "abbr": "",
    "def": "설파이드의 황이 한 번 산화된 R₂S=O. 다이메틸 설폭사이드(DMSO)가 대표적이다.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "설폰",
    "en": "sulfone",
    "abbr": "",
    "def": "설파이드의 황이 두 번 산화된 R₂SO₂ 화합물.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "소광제",
    "en": "quencher",
    "abbr": "",
    "def": "화학 증폭형 레지스트에 소량 넣는 염기성 첨가제. 광산 일부를 중화해 산의 확산을 줄이고 패턴 가장자리를 선명하게 한다.",
    "chapters": [
     "acids-bases#resist"
    ]
   },
   {
    "ko": "소노가시라 짝지음",
    "en": "Sonogashira coupling",
    "abbr": "",
    "def": "말단 알카인과 아릴·바이닐 할라이드를 Pd 촉매, CuI, 아민 염기로 이어 내부 알카인을 만드는 교차 짝지음.",
    "chapters": [
     "organosilicon#coupling"
    ]
   },
   {
    "ko": "소수성",
    "en": "hydrophobic",
    "abbr": "",
    "def": "물을 밀어내는 성질. C–H·Si–H 같은 무극성기로 덮인 표면은 물이 방울로 뭉쳐 접촉각이 크다(HF 처리 Si–H 약 80°).",
    "chapters": [
     "structure-bonding#imf"
    ]
   },
   {
    "ko": "속도 결정 단계",
    "en": "rate-determining step",
    "abbr": "",
    "def": "다단계 반응에서 전체 속도를 정하는 단계. 반응물 기준으로 가장 높은 전이 상태를 지나는 단계다.",
    "chapters": [
     "reactions#energy"
    ]
   },
   {
    "ko": "속도 지배",
    "en": "kinetic control",
    "abbr": "",
    "def": "역반응이 일어나지 못하는 낮은 온도·짧은 시간에서 생성물 비율이 장벽 차 ΔΔG‡로 정해지는 상황. 빨리 생기는 생성물이 많다.",
    "chapters": [
     "reactions#control"
    ]
   },
   {
    "ko": "속도론적 동위원소 효과",
    "en": "kinetic isotope effect, KIE",
    "abbr": "",
    "def": "반응에 참여하는 원자를 동위원소로 바꿨을 때 생기는 속도 차이. C–H 대 C–D의 kH/kD가 2–7이면 그 결합이 속도 결정 단계에서 끊어진다는 증거다(E2에서 약 6.7).",
    "chapters": [
     "elimination#e2"
    ]
   },
   {
    "ko": "속도론적 분할",
    "en": "kinetic resolution",
    "abbr": "",
    "def": "키랄 촉매나 효소가 한쪽 거울상 이성질체만 빠르게 반응시켜, 남은 출발 물질과 생성물의 ee를 높이는 분할법.",
    "chapters": [
     "stereochemistry#optical"
    ]
   },
   {
    "ko": "속도론적 엔올레이트",
    "en": "kinetic enolate",
    "abbr": "",
    "def": "더 빨리 생기는 엔올레이트로, 보통 덜 치환되고 입체 장애가 적은 α-H가 빠진 것. LDA, −78 °C처럼 비가역 조건에서 얻는다.",
    "chapters": [
     "enolates#enolate"
    ]
   },
   {
    "ko": "수렴 합성",
    "en": "",
    "abbr": "",
    "def": "목표 분자의 큰 조각들을 따로 만든 뒤 마지막에 합치는 합성 전략. 가장 긴 직선 단계 수가 줄어 전체 수율이 높다.",
    "chapters": [
     "alkynes-synthesis#synthesis"
    ]
   },
   {
    "ko": "수소 결합",
    "en": "hydrogen bond",
    "abbr": "",
    "def": "O–H·N–H·F–H의 H와 이웃 분자 O·N·F의 비공유쌍 사이의 특히 센 쌍극자 상호작용(10–40 kJ/mol).",
    "chapters": [
     "structure-bonding#imf"
    ]
   },
   {
    "ko": "수소 떼기",
    "en": "hydrogen abstraction",
    "abbr": "",
    "def": "라디칼이 다른 분자의 H 원자를 홀전자 하나와 함께 떼어 가는 반응(X· + H–R → X–H + R·). ΔH° = D(R–H) − D(H–X).",
    "chapters": [
     "radicals#chain"
    ]
   },
   {
    "ko": "수소–중수소 교환",
    "en": "H/D exchange",
    "abbr": "",
    "def": "D₂O와 산·염기 속에서 산성 H가 D로 바뀌는 반응. 카보닐 화합물에서는 α-H만 엔올화를 거쳐 교환된다.",
    "chapters": [
     "enolates#tautomerism"
    ]
   },
   {
    "ko": "수소붕소화–산화",
    "en": "hydroboration–oxidation",
    "abbr": "",
    "def": "BH₃가 C=C에 협동적으로 syn 첨가한 뒤 H₂O₂/NaOH로 C–B를 C–OH로 바꾸는 반응. 역마르코브니코프 알코올을 재배열 없이 준다.",
    "chapters": [
     "alkenes#hydration"
    ]
   },
   {
    "ko": "수소화 붕소 소듐",
    "en": "sodium borohydride, NaBH₄",
    "abbr": "",
    "def": "NaBH₄. 알코올·물에서도 쓰는 온화한 하이드라이드 환원제로 알데하이드·케톤만 알코올로 환원하고 에스터·나이트릴은 거의 건드리지 않는다.",
    "chapters": [
     "aldehydes-ketones#hydride"
    ]
   },
   {
    "ko": "수소화 알루미늄 리튬",
    "en": "lithium aluminium hydride, LiAlH₄",
    "abbr": "",
    "def": "LiAlH₄. 강한 하이드라이드 환원제로 에스터·카복실산·아마이드·나이트릴·에폭사이드까지 환원한다. 물과 격렬히 반응하므로 건조 에터에서 쓰고 따로 후처리한다.",
    "chapters": [
     "aldehydes-ketones#hydride"
    ]
   },
   {
    "ko": "수소화열",
    "en": "heat of hydrogenation",
    "abbr": "",
    "def": "알켄 1 mol에 H₂를 더해 알케인을 만들 때 나오는 열. 같은 알케인이 되는 이성질체끼리 비교하면 작을수록 알켄이 안정하다.",
    "chapters": [
     "alkenes#stability"
    ]
   },
   {
    "ko": "수평 효과",
    "en": "leveling effect",
    "abbr": "",
    "def": "용매가 자기 짝산보다 센 산과 자기 짝염기보다 센 염기를 모두 그 짝산·짝염기로 바꾸어, 그보다 센 산·염기가 용액에 남을 수 없게 하는 현상. 물에서는 H₃O⁺와 OH⁻가 한계다.",
    "chapters": [
     "acids-bases#solvent"
    ]
   },
   {
    "ko": "수화",
    "en": "hydration",
    "abbr": "",
    "def": "알켄에 물(H와 OH)을 더해 알코올을 만드는 반응. 산 촉매, 옥시수은화–탈수은화, 수소붕소화–산화가 있다.",
    "chapters": [
     "alkenes#hydration"
    ]
   },
   {
    "ko": "수화물",
    "en": "hydrate, 제미널 다이올",
    "abbr": "",
    "def": "알데하이드·케톤에 물이 첨가해 같은 탄소에 OH 두 개가 붙은 제미널 다이올. 폼알데하이드는 물에서 거의 모두 수화물로, 아세톤은 0.1 %만 수화물로 있다.",
    "chapters": [
     "aldehydes-ketones#addition"
    ]
   },
   {
    "ko": "슐렝크 평형",
    "en": "Schlenk equilibrium",
    "abbr": "",
    "def": "그리냐르 시약 용액에서 2 RMgX ⇌ R₂Mg + MgX₂로 리간드가 재분배되는 평형. 용매와 할로젠에 따라 위치가 달라진다.",
    "chapters": [
     "organosilicon#organometal"
    ]
   },
   {
    "ko": "스원 산화",
    "en": "Swern oxidation",
    "abbr": "",
    "def": "옥살릴 클로라이드로 활성화한 DMSO와 Et₃N으로 알코올을 산화하는 방법. 크로뮴 없이 1° → 알데하이드, 2° → 케톤.",
    "chapters": [
     "alcohols-ethers#reactions"
    ]
   },
   {
    "ko": "스웨인–스콧 식",
    "en": "Swain–Scott equation",
    "abbr": "",
    "def": "log(k_Nu/k₀) = s·n. 친핵체 상수 n과 기질 민감도 s로 친핵성을 수치화한다. n이 1 크면 약 10배 빠르다.",
    "chapters": [
     "substitution#nucleophiles"
    ]
   },
   {
    "ko": "스토크스 이동",
    "en": "Stokes shift",
    "abbr": "",
    "def": "발광 파장이 흡수 파장보다 긴 현상. 들뜬 상태에서 분자 구조가 이완되며 에너지 일부를 잃기 때문이다.",
    "chapters": [
     "conjugation#color"
    ]
   },
   {
    "ko": "스티븐슨 규칙",
    "en": "Stevenson's rule",
    "abbr": "",
    "def": "분자 이온이 두 조각으로 갈라질 때 이온화 에너지가 더 작은(양이온이 더 안정한) 조각이 전하를 갖는다는 경험 규칙.",
    "chapters": [
     "ms-ir#fragments"
    ]
   },
   {
    "ko": "스파이로 화합물",
    "en": "spiro compound",
    "abbr": "",
    "def": "두 고리가 원자 하나만 공유한 화합물. 스파이로[4.5]데케인이 예다.",
    "chapters": [
     "alkanes#disubstituted"
    ]
   },
   {
    "ko": "스핀–스핀 갈라짐",
    "en": "spin–spin splitting",
    "abbr": "",
    "def": "이웃 핵의 스핀 상태(α/β)가 결합 전자를 통해 관찰 핵의 공명을 조금씩 옮겨 신호가 여러 줄로 갈라지는 현상.",
    "chapters": [
     "nmr#coupling"
    ]
   },
   {
    "ko": "시그마 착물",
    "en": "σ complex",
    "abbr": "",
    "def": "EAS에서 친전자체가 고리 탄소 하나와 σ 결합을 만들어 생긴 양이온 중간체. 그 탄소는 sp³이고 양전하는 공격 자리의 오르토·파라 탄소에 퍼진다.",
    "chapters": [
     "aromatic-substitution#mechanism"
    ]
   },
   {
    "ko": "시스–트랜스 이성질체",
    "en": "cis–trans isomers",
    "abbr": "",
    "def": "고리나 이중 결합에서 두 치환기가 같은 쪽(시스)인지 반대쪽(트랜스)인지만 다른 입체 이성질체.",
    "chapters": [
     "alkanes#disubstituted"
    ]
   },
   {
    "ko": "신 동일 평면",
    "en": "syn-periplanar",
    "abbr": "",
    "def": "H–C–C–X 네 원자가 한 평면에 있고 H와 X가 같은 쪽(이면각 0°)인 가린 배열. E2에서는 드물고 Ei 같은 고리형 열 제거에서 일어난다.",
    "chapters": [
     "elimination#e2"
    ]
   },
   {
    "ko": "신축 진동",
    "en": "stretching",
    "abbr": "",
    "def": "결합 길이가 늘었다 줄었다 하는 진동. 굽힘보다 힘 상수가 커서 높은 파수에서 흡수한다.",
    "chapters": [
     "ms-ir#vibrations"
    ]
   },
   {
    "ko": "신톤",
    "en": "synthon",
    "abbr": "",
    "def": "역합성에서 결합을 끊어 얻는 이상화된 조각(대개 이온). 실제 시약이 아니라 그 역할을 나타낸다(예: R–C≡C⁻, R⁺).",
    "chapters": [
     "alkynes-synthesis#synthesis"
    ]
   },
   {
    "ko": "실란올",
    "en": "silanol",
    "abbr": "",
    "def": "규소에 붙은 –OH(Si–OH). 산화막 표면에 nm²당 약 4.6개 있어 표면을 친수성으로 만들고 치환 반응의 친핵체가 된다.",
    "chapters": [
     "substitution#activation"
    ]
   },
   {
    "ko": "실레인",
    "en": "silane",
    "abbr": "",
    "def": "규소와 수소로 된 화합물 SiH₄와 그 유도체를 통틀어 부르는 이름. 넓게는 규소에 유기기·할로젠·알콕시기가 붙은 단량체 규소 화합물을 가리킨다.",
    "chapters": [
     "organosilicon#si-c"
    ]
   },
   {
    "ko": "실레인 커플링제",
    "en": "silane coupling agent",
    "abbr": "",
    "def": "가수 분해되는 Si–OR기와 유기 작용기를 함께 가진 분자. 무기 표면과 유기 수지를 공유 결합으로 잇는다.",
    "chapters": [
     "substitution#activation"
    ]
   },
   {
    "ko": "실록산",
    "en": "siloxane",
    "abbr": "",
    "def": "Si–O–Si 결합, 또는 그 결합을 가진 화합물. 실리콘 고분자와 실리카 그물의 기본 단위다.",
    "chapters": [
     "organosilicon#siloxane"
    ]
   },
   {
    "ko": "실리콘",
    "en": "silicone",
    "abbr": "",
    "def": "실록산 사슬 고분자를 통틀어 부르는 이름(기름·고무·수지). 원소 규소(silicon)와 구별해 영어로는 silicone이라 쓴다.",
    "chapters": [
     "organosilicon#siloxane"
    ]
   },
   {
    "ko": "싸이오아세탈",
    "en": "thioacetal",
    "abbr": "",
    "def": "같은 탄소에 SR 두 개가 붙은 아세탈의 황 판. 산 수용액에도 안정하며 라니 니켈로 처리하면 C=O 자리가 CH₂로 환원된다.",
    "chapters": [
     "aldehydes-ketones#acetal"
    ]
   },
   {
    "ko": "싸이오펜",
    "en": "thiophene",
    "abbr": "",
    "def": "황을 가진 5각 고리 방향족. 5원 헤테로 방향족 가운데 공명 에너지가 가장 크다(약 122 kJ/mol).",
    "chapters": [
     "aromaticity#heterocycles"
    ]
   },
   {
    "ko": "싸이올",
    "en": "thiol",
    "abbr": "",
    "def": "알코올의 산소를 황으로 바꾼 R–SH. 알코올보다 산성이 크고 수소 결합은 약하며 냄새가 강하다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "싸이올레이트",
    "en": "thiolate",
    "abbr": "",
    "def": "싸이올의 짝염기 RS⁻. 염기성은 약하지만 편극성이 커서 매우 좋은 친핵체다.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "쌍극성 이온",
    "en": "zwitterion",
    "abbr": "",
    "def": "한 분자 안에 양전하와 음전하를 함께 가진 중성 화학종. 아미노산은 중성 pH에서 H₃N⁺–CHR–COO⁻로 존재한다.",
    "chapters": [
     "amines#extraction"
    ]
   },
   {
    "ko": "쌍극자 모멘트",
    "en": "dipole moment",
    "abbr": "",
    "def": "전하 분리의 크기 μ = Qd. 단위는 디바이(1 D = 3.336×10⁻³⁰ C·m). 분자의 값은 결합 쌍극자의 벡터 합이다.",
    "chapters": [
     "structure-bonding#polarity"
    ]
   },
   {
    "ko": "쌍극자–쌍극자 힘",
    "en": "dipole–dipole force",
    "abbr": "",
    "def": "극성 분자의 δ+ 끝과 이웃 분자의 δ− 끝 사이의 정전기 인력. 케톤·에스터·나이트릴의 끓는점을 높인다.",
    "chapters": [
     "structure-bonding#imf"
    ]
   },
   {
    "ko": "아눌렌",
    "en": "annulene",
    "abbr": "",
    "def": "단일 고리 공액 폴리엔을 고리 탄소 수 N으로 [N]아눌렌이라 부른다. 벤젠은 [6]아눌렌, [18]아눌렌은 18π 방향족이다.",
    "chapters": [
     "aromaticity#classification"
    ]
   },
   {
    "ko": "아닐린",
    "en": "aniline",
    "abbr": "",
    "def": "벤젠 고리에 NH₂가 붙은 가장 간단한 방향족 아민(C₆H₅NH₂). 비공유쌍이 고리와 공명해 짝산 pKa가 4.6으로 약한 염기다.",
    "chapters": [
     "amines#structure"
    ]
   },
   {
    "ko": "아레늄 이온",
    "en": "arenium ion",
    "abbr": "",
    "def": "시그마 착물의 다른 이름. 방향족 고리에 양성자나 친전자체가 붙어 생긴 사이클로헥사다이엔일 양이온이다.",
    "chapters": [
     "aromatic-substitution#mechanism"
    ]
   },
   {
    "ko": "아렌다이아조늄 염",
    "en": "arenediazonium salt",
    "abbr": "",
    "def": "ArN₂⁺X⁻. 아릴아민을 차가운 산 속에서 아질산으로 다이아조화해 얻으며, N₂가 매우 좋은 이탈기라 여러 치환기로 바뀐다.",
    "chapters": [
     "aromatic-substitution#diazonium"
    ]
   },
   {
    "ko": "아마이드",
    "en": "amide",
    "abbr": "",
    "def": "카복실산의 OH를 질소로 바꾼 R–CO–N. 질소 비공유쌍이 카보닐과 공명해 평면이고 매우 안정하다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "아민",
    "en": "amine",
    "abbr": "",
    "def": "암모니아의 H를 탄소 기로 바꾼 질소 화합물. 질소의 비공유쌍 때문에 염기성이고, N–H가 있으면 수소 결합을 한다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "아민 수소 당량",
    "en": "AHEW",
    "abbr": "",
    "def": "N–H 1 mol을 담은 아민 경화제의 질량(g/eq, AHEW). 분자량을 N–H 수로 나눈 값이다.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "아세탈",
    "en": "acetal",
    "abbr": "",
    "def": "같은 탄소에 OR 두 개가 붙은 화합물. 산 촉매로 카보닐과 알코올 2분자(또는 다이올)에서 생기고, 염기·친핵체에 안정하며 산 수용액에서 가수 분해된다.",
    "chapters": [
     "aldehydes-ketones#acetal"
    ]
   },
   {
    "ko": "아세틸라이드 알킬화",
    "en": "alkylation of acetylide",
    "abbr": "",
    "def": "아세틸라이드 음이온이 메틸·1차 할로젠화 알킬을 SN2로 공격해 새 C–C 결합을 만드는 반응. 알카인 사슬을 늘리는 대표 방법이다.",
    "chapters": [
     "alkynes-synthesis#alkylation"
    ]
   },
   {
    "ko": "아세틸라이드 음이온",
    "en": "acetylide anion",
    "abbr": "",
    "def": "말단 알카인에서 ≡C–H 양성자를 뗀 탄소 음이온 R–C≡C:⁻. 비공유쌍이 sp 오비탈에 있으며 강한 친핵체이자 강염기다.",
    "chapters": [
     "alkynes-synthesis#acidity"
    ]
   },
   {
    "ko": "아센",
    "en": "acene",
    "abbr": "",
    "def": "벤젠 고리를 직선으로 이어 붙인 다환 방향족 계열(나프탈렌, 안트라센, 테트라센, 펜타센…). 고리가 늘수록 띠 간격이 빠르게 준다.",
    "chapters": [
     "aromaticity#polycyclic"
    ]
   },
   {
    "ko": "아실기",
    "en": "acyl group",
    "abbr": "",
    "def": "R–C(=O)– 단위. 아실기에 붙은 기가 바뀌는 반응이 친핵성 아실 치환이다.",
    "chapters": [
     "carboxylic-acids#nas"
    ]
   },
   {
    "ko": "아실륨 이온",
    "en": "acylium ion",
    "abbr": "",
    "def": "R–C≡O⁺. 산소의 비공유 전자쌍이 양전하를 나누어 안정하며 재배열하지 않는 프리델–크래프츠 아실화의 친전자체다.",
    "chapters": [
     "aromatic-substitution#friedel-crafts"
    ]
   },
   {
    "ko": "아이링 식",
    "en": "Eyring equation",
    "abbr": "",
    "def": "전이 상태 이론의 속도 상수 식 k = (k_B T/h) exp(−ΔG‡/RT). 25 °C에서 k_B T/h = 6.21×10¹² s⁻¹이다.",
    "chapters": [
     "reactions#energy"
    ]
   },
   {
    "ko": "아이소택틱",
    "en": "isotactic",
    "abbr": "",
    "def": "고분자 사슬에서 이웃 반복 단위의 입체 배열이 모두 같은 입체 규칙성. 번갈아 바뀌면 신디오택틱, 무작위면 어택틱이다.",
    "chapters": [
     "stereochemistry#diastereomers"
    ]
   },
   {
    "ko": "아인슈타인",
    "en": "einstein",
    "abbr": "",
    "def": "광자 1 mol(아보가드로 수만큼의 광자)을 나타내는 단위. 광화학 양자 수율 계산에 쓴다.",
    "chapters": [
     "photoresists#photoreactions"
    ]
   },
   {
    "ko": "아조 짝지음",
    "en": "azo coupling",
    "abbr": "",
    "def": "다이아조늄 이온이 페놀·아닐린처럼 활성화된 고리를 주로 파라에서 공격해 Ar–N=N–Ar′ 아조 화합물을 만드는 EAS.",
    "chapters": [
     "aromatic-substitution#diazonium"
    ]
   },
   {
    "ko": "아키랄",
    "en": "achiral",
    "abbr": "",
    "def": "거울상과 포개지는 성질. 대칭면이나 반전 중심을 가진 분자는 아키랄하며 광학 비활성이다.",
    "chapters": [
     "stereochemistry#chirality"
    ]
   },
   {
    "ko": "안정도 상수",
    "en": "stability constant",
    "abbr": "",
    "def": "금속 이온과 리간드가 착물을 만드는 평형 상수(K₁, K₂, 누적 β). 클수록 킬레이트가 단단하다.",
    "chapters": [
     "enolates#chelates"
    ]
   },
   {
    "ko": "안티 동일 평면",
    "en": "anti-periplanar",
    "abbr": "",
    "def": "H–C–C–X 네 원자가 한 평면에 있고 H와 X가 반대쪽(이면각 180°)인 엇갈린 배열. σ(C–H)와 σ*(C–X)가 최대로 겹쳐 E2가 가장 빠르다.",
    "chapters": [
     "elimination#e2"
    ]
   },
   {
    "ko": "안티 형태",
    "en": "anti",
    "abbr": "",
    "def": "뷰테인처럼 두 큰 치환기가 이면각 180°로 정반대에 놓인 엇갈린 형태. 가장 안정하다.",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "알데하이드",
    "en": "aldehyde",
    "abbr": "",
    "def": "카보닐 탄소에 수소가 하나 이상 붙은 화합물 R–CHO. 쉽게 산화되고 친핵체의 공격을 받는다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "알돌",
    "en": "aldol",
    "abbr": "",
    "def": "β-하이드록시 알데하이드(또는 케톤). 알데하이드(aldehyde)와 알코올(alcohol)을 함께 가져 붙은 이름이다.",
    "chapters": [
     "enolates#aldol"
    ]
   },
   {
    "ko": "알돌 반응",
    "en": "aldol reaction",
    "abbr": "",
    "def": "한 카보닐 화합물의 엔올레이트가 다른 카보닐의 탄소에 친핵성 첨가해 β-하이드록시 카보닐 화합물을 만드는 가역 반응.",
    "chapters": [
     "enolates#aldol"
    ]
   },
   {
    "ko": "알돌 축합",
    "en": "aldol condensation",
    "abbr": "",
    "def": "알돌 첨가 뒤 탈수까지 일어나 α,β-불포화 카보닐 화합물과 물이 생기는 전체 반응.",
    "chapters": [
     "enolates#aldol"
    ]
   },
   {
    "ko": "알릴",
    "en": "allyl",
    "abbr": "",
    "def": "CH₂=CH–CH₂– 기. 알릴 양이온·라디칼·음이온은 세 p 오비탈이 공액되어 전하나 홀전자가 양 끝 탄소에 반씩 나뉘므로 안정하다.",
    "chapters": [
     "conjugation#huckel"
    ]
   },
   {
    "ko": "알릴 라디칼",
    "en": "allyl radical",
    "abbr": "",
    "def": "C=C에 이웃한 탄소에 홀전자가 있는 라디칼(CH₂=CH–CH₂·). 홀전자가 공명으로 양 끝 탄소에 퍼져 특히 안정하다(C–H BDE 369 kJ/mol).",
    "chapters": [
     "radicals#structure"
    ]
   },
   {
    "ko": "알릴 자리 브로민화",
    "en": "allylic bromination",
    "abbr": "",
    "def": "C=C 옆 탄소(알릴 자리)의 H를 Br로 바꾸는 라디칼 치환. 보통 NBS와 빛·개시제로 하며, 알릴 라디칼의 양 끝에서 생성물이 생길 수 있다.",
    "chapters": [
     "radicals#allylic"
    ]
   },
   {
    "ko": "알짜 자기화",
    "en": "net magnetization",
    "abbr": "",
    "def": "볼츠만 분포에서 아래(α) 준위에 남는 여분의 핵스핀이 합쳐져 생기는 거시적 자기 모멘트 M. 400 MHz, 25 °C에서 여분은 약 3×10⁻⁵에 불과하다.",
    "chapters": [
     "nmr#resonance"
    ]
   },
   {
    "ko": "알카인",
    "en": "alkyne",
    "abbr": "",
    "def": "탄소–탄소 삼중 결합(C≡C)을 가진 탄화수소. 삼중 결합 탄소는 sp이고 직선형이다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "알케인",
    "en": "alkane",
    "abbr": "",
    "def": "sp³ 탄소와 수소가 단일 결합으로만 이어진 탄화수소. 일반식 CₙH₂ₙ₊₂이며 메테인·에테인·프로페인 등이 있다.",
    "chapters": [
     "alkanes#nomenclature"
    ]
   },
   {
    "ko": "알켄",
    "en": "alkene",
    "abbr": "",
    "def": "탄소–탄소 이중 결합(C=C)을 가진 탄화수소. 이중 결합 탄소는 sp²이고 π 결합에서 첨가 반응이 일어난다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "알코올",
    "en": "alcohol",
    "abbr": "",
    "def": "sp³ 탄소에 하이드록시기(–OH)가 붙은 화합물. 수소 결합의 주개이자 받개라 끓는점이 높고 물과 잘 섞인다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "알콕사이드",
    "en": "alkoxide",
    "abbr": "",
    "def": "알코올에서 O–H의 양성자를 떼어 낸 음이온 RO⁻. 강한 염기이자 친핵체로 윌리엄슨 에터 합성에 쓰인다.",
    "chapters": [
     "alcohols-ethers#preparation"
    ]
   },
   {
    "ko": "알킬기",
    "en": "alkyl group",
    "abbr": "",
    "def": "알케인에서 수소 하나를 뗀 조각(R–). 어미 ‘-에인’을 ‘-일’로 바꿔 메틸·에틸·아이소프로필·tert-뷰틸 등으로 부른다.",
    "chapters": [
     "alkanes#nomenclature"
    ]
   },
   {
    "ko": "암모늄 염",
    "en": "ammonium salt",
    "abbr": "",
    "def": "아민이 산과 반응해 생긴 R₃NH⁺X⁻ 형태의 염. 이온성이라 물에 잘 녹아 추출과 약의 제형에 쓰인다.",
    "chapters": [
     "amines#extraction"
    ]
   },
   {
    "ko": "애싱",
    "en": "ashing",
    "abbr": "",
    "def": "산소 플라스마의 O 라디칼로 감광막·탄소막을 CO·CO₂·H₂O로 태워 없애는 공정. 산화적 절단의 극한이다.",
    "chapters": [
     "alkynes-synthesis#oxidation"
    ]
   },
   {
    "ko": "야블론스키 도표",
    "en": "Jablonski diagram",
    "abbr": "",
    "def": "전자 상태(S₀, S₁, T₁)와 진동 준위를 에너지 순으로 그리고 흡수·형광·내부 전환·계간 전이·인광을 화살표로 나타낸 그림.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "양성자 분해",
    "en": "protonolysis",
    "abbr": "",
    "def": "M–L 결합이 산성 양성자(H–O 등)와 반응해 M–O가 되고 H–L이 떠나는 반응. L⁻가 센 염기일수록 빠르다.",
    "chapters": [
     "organosilicon#precursors"
    ]
   },
   {
    "ko": "양성자 이동",
    "en": "proton transfer",
    "abbr": "",
    "def": "염기의 비공유쌍이 H⁺를 잡고 H–A 결합 전자쌍이 A로 가는 산·염기 단계. 화살표 두 개가 짝을 이룬다.",
    "chapters": [
     "reactions#arrows"
    ]
   },
   {
    "ko": "양성자성 용매",
    "en": "protic solvent",
    "abbr": "",
    "def": "O–H나 N–H를 가져 수소 결합을 줄 수 있는 용매. 물, 메탄올, 에탄올, IPA.",
    "chapters": [
     "structure-bonding#imf"
    ]
   },
   {
    "ko": "양이온 중합",
    "en": "cationic polymerization",
    "abbr": "",
    "def": "탄소 양이온 사슬 끝에 전자가 풍부한 단량체(아이소뷰틸렌·바이닐 에터)가 첨가하는 연쇄 성장 중합. 루이스 산과 공개시제로 시작한다.",
    "chapters": [
     "polymers#ionic-living"
    ]
   },
   {
    "ko": "양자 수율",
    "en": "quantum yield",
    "abbr": "",
    "def": "흡수된 광자 하나당 어떤 과정(형광, 계간 전이, 광반응)이 일어난 횟수. 1차 과정의 속도 상수 비율과 같다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "양쪽 자리 친핵체",
    "en": "ambident nucleophile",
    "abbr": "",
    "def": "두 원자 자리에서 반응할 수 있는 친핵체. 엔올레이트는 탄소와 산소 어느 쪽으로도 반응할 수 있다.",
    "chapters": [
     "enolates#enolate"
    ]
   },
   {
    "ko": "양쪽성",
    "en": "amphoteric",
    "abbr": "",
    "def": "상대에 따라 산으로도 염기로도 작용하는 성질. 물·알코올·아미노산이 그렇다.",
    "chapters": [
     "acids-bases#bronsted"
    ]
   },
   {
    "ko": "억제제",
    "en": "inhibitor",
    "abbr": "",
    "def": "라디칼을 붙잡아 반응성이 없는 화학종으로 바꿔 연쇄를 끊는 물질(예: O₂, 장애 페놀). 다 소모될 때까지 반응이 멈추는 유도기를 만든다.",
    "chapters": [
     "radicals#chain"
    ]
   },
   {
    "ko": "언더필",
    "en": "capillary underfill, CUF",
    "abbr": "",
    "def": "플립칩의 칩과 기판 사이 범프 틈을 채워 열팽창 차이에 의한 응력을 나눠 받는 에폭시계 수지.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "엇갈린 형태",
    "en": "staggered",
    "abbr": "",
    "def": "앞뒤 탄소의 결합이 60°씩 엇갈려 있는 형태(staggered). 비틀림 변형이 없어 가장 안정하다.",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "에스터",
    "en": "ester",
    "abbr": "",
    "def": "카복실산의 OH를 OR로 바꾼 R–CO–OR′. 극성이 있고 수소 결합 받개이며 감광막 용매 PGMEA도 에스터다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "에터",
    "en": "ether",
    "abbr": "",
    "def": "산소 하나에 탄소 두 개가 붙은 C–O–C 구조. 수소 결합 받개이지만 주개는 아니며 반응성이 낮아 용매로 쓰인다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "에폭사이드",
    "en": "epoxide, 옥시레인",
    "abbr": "",
    "def": "산소 하나가 이웃한 두 탄소에 함께 붙은 3원 고리 에터(옥시레인). 퍼옥시산이 알켄에 syn으로 산소를 주어 만든다.",
    "chapters": [
     "alkenes#halogenation"
    ]
   },
   {
    "ko": "에폭시 당량",
    "en": "EEW",
    "abbr": "",
    "def": "에폭시기 1 mol을 담은 수지의 질량(g/eq, EEW). 경화제 배합량 계산에 쓴다.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "에폭시 몰딩 컴파운드",
    "en": "epoxy molding compound, EMC",
    "abbr": "",
    "def": "에폭시 수지, 페놀 노볼락 경화제, 70–90 wt% 실리카 충전재, 촉매로 이루어진 반도체 칩 봉지재(EMC).",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "에피머",
    "en": "epimer",
    "abbr": "",
    "def": "입체 중심이 여럿인 분자에서 한 중심의 배열만 다른 부분입체 이성질체. D-글루코스와 D-만노스는 C2 에피머다.",
    "chapters": [
     "stereochemistry#diastereomers"
    ]
   },
   {
    "ko": "엔아민",
    "en": "enamine",
    "abbr": "",
    "def": "C=C–N 구조의 화합물. 2° 아민이 카보닐과 축합해 이미늄 이온이 된 뒤 α 탄소의 H가 떨어져 생기며, α 탄소가 친핵성이다.",
    "chapters": [
     "aldehydes-ketones#imine"
    ]
   },
   {
    "ko": "엔올",
    "en": "enol, ene + ol",
    "abbr": "",
    "def": "이중 결합 탄소에 OH가 붙은 구조(C=C–OH). 대개 불안정해 곧 카보닐 화합물로 호변 이성한다.",
    "chapters": [
     "alkynes-synthesis#addition"
    ]
   },
   {
    "ko": "엔올레이트",
    "en": "enolate",
    "abbr": "",
    "def": "카보닐 화합물의 α-H가 빠진 음이온. 음전하가 α 탄소와 산소에 공명으로 퍼져 있고 주로 탄소에서 친전자체와 반응한다.",
    "chapters": [
     "enolates#enolate"
    ]
   },
   {
    "ko": "엔올레이트 알킬화",
    "en": "enolate alkylation",
    "abbr": "",
    "def": "엔올레이트의 α 탄소가 할로젠화 알킬을 S_N2로 공격해 새 C–C 결합을 만드는 반응. 메틸·1차·알릴·벤질 할로젠화물이 잘 된다.",
    "chapters": [
     "enolates#alkylation"
    ]
   },
   {
    "ko": "엔올화 상수",
    "en": "enolization constant",
    "abbr": "",
    "def": "K_enol = [엔올]/[케토]. 아세톤은 물속에서 약 5×10⁻⁹, 아세틸아세톤(순수 액체)은 약 4다.",
    "chapters": [
     "enolates#tautomerism"
    ]
   },
   {
    "ko": "역류",
    "en": "backstreaming",
    "abbr": "",
    "def": "진공 펌프의 기름 증기가 기체 흐름을 거슬러 챔버 쪽으로 올라오는 현상(backstreaming). 분자 흐름 영역에서 심해진다.",
    "chapters": [
     "alkanes#properties"
    ]
   },
   {
    "ko": "역마르코브니코프 첨가",
    "en": "anti-Markovnikov addition",
    "abbr": "",
    "def": "HX의 X가 알켄의 덜 치환된 탄소에, H가 더 치환된 탄소에 붙는 첨가. HBr의 라디칼 첨가와 수소화붕소화가 대표적이다.",
    "chapters": [
     "radicals#peroxide"
    ]
   },
   {
    "ko": "역알돌 반응",
    "en": "retro-aldol reaction",
    "abbr": "",
    "def": "β-하이드록시 카보닐 화합물이 염기와 가열로 두 카보닐 화합물로 쪼개지는 알돌 반응의 역반응.",
    "chapters": [
     "enolates#aldol"
    ]
   },
   {
    "ko": "역전자 요구",
    "en": "inverse electron demand",
    "abbr": "",
    "def": "전자가 부족한 다이엔의 LUMO와 전자가 풍부한 친다이엔체의 HOMO 사이 상호작용이 주도하는 딜스–알더 반응.",
    "chapters": [
     "conjugation#diels-alder"
    ]
   },
   {
    "ko": "역합성 분석",
    "en": "retrosynthetic analysis",
    "abbr": "",
    "def": "목표 분자에서 거꾸로 결합을 끊거나 작용기를 바꾸어 더 간단한 출발 물질까지 거슬러 가는 합성 설계법. ⇒ 화살표로 쓴다.",
    "chapters": [
     "alkynes-synthesis#synthesis"
    ]
   },
   {
    "ko": "연소열",
    "en": "heat of combustion",
    "abbr": "",
    "def": "물질 1 mol이 완전히 탈 때 나오는 열(−ΔH°c). CH₂당 연소열을 비교해 고리 변형을 잰다.",
    "chapters": [
     "alkanes#ring-strain"
    ]
   },
   {
    "ko": "연쇄 반응",
    "en": "chain reaction",
    "abbr": "",
    "def": "한 단계에서 생긴 반응성 중간체(라디칼)가 다음 단계를 일으키며 스스로 되살아나 반응이 계속 이어지는 반응. 개시·전파·종결 단계로 이루어진다.",
    "chapters": [
     "radicals#chain"
    ]
   },
   {
    "ko": "연쇄 성장 중합",
    "en": "chain-growth polymerization",
    "abbr": "",
    "def": "라디칼·양이온·음이온 같은 활성 중심을 가진 사슬 끝에만 단량체가 하나씩 붙는 중합. 반응 초기부터 긴 사슬이 생긴다.",
    "chapters": [
     "polymers#overview"
    ]
   },
   {
    "ko": "연쇄 이동",
    "en": "chain transfer",
    "abbr": "",
    "def": "사슬 라디칼이 다른 분자에서 원자를 떼어 자신은 끝나고 새 라디칼을 만드는 반응. 속도는 그대로 두고 사슬을 짧게 한다.",
    "chapters": [
     "polymers#radical"
    ]
   },
   {
    "ko": "열경화성 수지",
    "en": "thermoset",
    "abbr": "",
    "def": "가열이나 촉매로 가교되어 다시 녹지 않는 고분자. 에폭시, 페놀 수지, BCB 등이 있다.",
    "chapters": [
     "polymers#network"
    ]
   },
   {
    "ko": "열분해",
    "en": "thermal degradation",
    "abbr": "",
    "def": "열만으로 분자나 고분자가 분해되는 반응. 고분자에서는 HCl 이탈이나 에스터 열 제거 같은 제거 반응으로 시작하는 경우가 많다.",
    "chapters": [
     "elimination#resist"
    ]
   },
   {
    "ko": "열역학 지배",
    "en": "thermodynamic control",
    "abbr": "",
    "def": "생성물이 출발 물질을 거쳐 오갈 수 있는 높은 온도·긴 시간에서 생성물 비율이 안정성 차로 정해지는 상황. 더 안정한 생성물이 많다.",
    "chapters": [
     "reactions#control"
    ]
   },
   {
    "ko": "열역학적 엔올레이트",
    "en": "thermodynamic enolate",
    "abbr": "",
    "def": "비대칭 케톤의 두 엔올레이트 중 더 안정한(C=C가 더 치환된) 것. 양성자 교환이 가능한 평형 조건에서 우세하다.",
    "chapters": [
     "enolates#enolate"
    ]
   },
   {
    "ko": "열적 원자층 식각",
    "en": "thermal atomic layer etching, ALE",
    "abbr": "",
    "def": "열적 ALE. 표면 개질(산화 등)과 휘발성 생성물 형성(hfacH 킬레이트화 등)을 번갈아 해 플라스마 없이 한 주기에 수 Å씩 자기 제한적으로 깎는 공정.",
    "chapters": [
     "enolates#chelates"
    ]
   },
   {
    "ko": "염기도",
    "en": "basicity",
    "abbr": "",
    "def": "양성자를 얼마나 강하게 붙잡는지를 나타내는 평형 성질. 짝산의 pKa가 클수록 강한 염기다.",
    "chapters": [
     "substitution#nucleophiles"
    ]
   },
   {
    "ko": "염료",
    "en": "dye",
    "abbr": "",
    "def": "가시광선을 강하게 흡수해 색을 내는 분자. 공액을 길게 하고 전자 주개·끌개를 달아 HOMO–LUMO 간격을 2–3 eV로 맞춘다.",
    "chapters": [
     "conjugation#color"
    ]
   },
   {
    "ko": "영년 행렬식",
    "en": "secular determinant",
    "abbr": "",
    "def": "분자 오비탈 계수에 대한 연립 방정식이 0이 아닌 해를 가질 조건으로 놓는 행렬식. 이를 0으로 놓고 풀어 오비탈 에너지를 얻는다.",
    "chapters": [
     "conjugation#huckel"
    ]
   },
   {
    "ko": "영역 선택 증착",
    "en": "area-selective deposition, ASD",
    "abbr": "",
    "def": "막을 원하는 표면에만 선택적으로 증착하는 기술(ASD). SAM 억제제로 한쪽 표면의 핵 생성을 막는 방법이 쓰인다.",
    "chapters": [
     "organosilicon#sam"
    ]
   },
   {
    "ko": "오니시 변수",
    "en": "Ohnishi parameter",
    "abbr": "",
    "def": "고분자 반복 단위의 N/(N_C − N_O). 값이 작을수록 플라스마 식각이 느려, 방향족 수지의 식각 내성을 어림하는 데 쓴다.",
    "chapters": [
     "aromaticity#polycyclic"
    ]
   },
   {
    "ko": "오르토",
    "en": "ortho, o-",
    "abbr": "",
    "def": "벤젠 고리에서 기준 치환기 바로 옆 자리(1,2-관계). o-로 줄여 쓴다.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "오르토·파라 지향기",
    "en": "ortho, para director",
    "abbr": "",
    "def": "새 치환기를 주로 오르토와 파라 자리로 보내는 치환기. 오르토·파라 공격의 시그마 착물에서 ipso 양전하를 안정화한다.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "오스뮴산 에스터",
    "en": "osmate ester",
    "abbr": "",
    "def": "OsO₄가 알켄과 고리 첨가해 생기는 5원 고리 중간체. 가수 분해하면 syn 1,2-다이올이 된다.",
    "chapters": [
     "alkenes#halogenation"
    ]
   },
   {
    "ko": "오존 분해",
    "en": "ozonolysis",
    "abbr": "",
    "def": "O₃로 C=C의 σ·π 결합을 모두 끊어 두 카보닐 화합물(또는 산화적 후처리에서 카복실산)을 얻는 반응.",
    "chapters": [
     "alkenes#cleavage"
    ]
   },
   {
    "ko": "오존화물",
    "en": "ozonide",
    "abbr": "",
    "def": "카보닐과 크리기 중간체가 다시 합쳐진 1,2,4-트라이옥솔레인. 폭발성이 있어 분리하지 않고 후처리한다.",
    "chapters": [
     "alkenes#cleavage"
    ]
   },
   {
    "ko": "옥사포스페테인",
    "en": "oxaphosphetane",
    "abbr": "",
    "def": "P–C–C–O 4원 고리 중간체. 일라이드와 카보닐의 [2+2] 첨가로 생기고, 거꾸로 쪼개지며 알켄과 Ph₃P=O가 된다.",
    "chapters": [
     "aldehydes-ketones#wittig"
    ]
   },
   {
    "ko": "옥소카베늄 이온",
    "en": "oxocarbenium ion",
    "abbr": "",
    "def": "R₂C=O⁺R 구조의 양이온. 양전하가 탄소와 산소에 퍼져 안정하며, 아세탈 형성·가수 분해의 핵심 중간체다.",
    "chapters": [
     "aldehydes-ketones#acetal"
    ]
   },
   {
    "ko": "옥시수은화–탈수은화",
    "en": "oxymercuration–demercuration",
    "abbr": "",
    "def": "Hg(OAc)₂와 물로 머큐리늄 이온을 거쳐 OH를 붙인 뒤 NaBH₄로 Hg를 H로 바꾸는 수화. 마르코브니코프 위치이고 재배열이 없다.",
    "chapters": [
     "alkenes#hydration"
    ]
   },
   {
    "ko": "완전 메틸화",
    "en": "exhaustive methylation",
    "abbr": "",
    "def": "아민을 CH₃I 과량으로 처리해 4차 암모늄 염까지 메틸화하는 조작. 호프만 제거의 첫 단계다.",
    "chapters": [
     "amines#hofmann"
    ]
   },
   {
    "ko": "용매화",
    "en": "solvation",
    "abbr": "",
    "def": "용매 분자가 용질, 특히 이온을 둘러싸 안정시키는 현상. 수소 결합과 이온–쌍극자 상호 작용이 주로 기여한다.",
    "chapters": [
     "acids-bases#solvent"
    ]
   },
   {
    "ko": "용해 금속 환원",
    "en": "dissolving-metal reduction",
    "abbr": "",
    "def": "Na·Li 같은 알칼리 금속을 액체 암모니아에 녹여 전자와 양성자를 번갈아 주는 환원. 알카인을 trans 알켄으로 바꾼다.",
    "chapters": [
     "alkynes-synthesis#reduction"
    ]
   },
   {
    "ko": "우드워드–피저 규칙",
    "en": "Woodward–Fieser rules",
    "abbr": "",
    "def": "모핵 값에 치환기·고리 잔기·고리 밖 이중 결합·공액 연장의 증분을 더해 공액 다이엔과 엔온의 λmax를 예측하는 경험 규칙.",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "우선성",
    "en": "dextrorotatory",
    "abbr": "",
    "def": "빛이 오는 쪽을 바라볼 때 편광면을 시계 방향으로 돌리는 성질. (+) 또는 d로 표시한다.",
    "chapters": [
     "stereochemistry#optical"
    ]
   },
   {
    "ko": "우선순위",
    "en": "priority",
    "abbr": "",
    "def": "CIP 규칙으로 입체 중심이나 이중 결합 탄소의 치환기에 매긴 순서(1이 가장 높다). 첫 원자의 원자 번호가 클수록 높다.",
    "chapters": [
     "stereochemistry#cip"
    ]
   },
   {
    "ko": "울프–키쉬너 환원",
    "en": "Wolff–Kishner reduction",
    "abbr": "",
    "def": "카보닐을 하이드라존으로 만든 뒤 KOH와 고온으로 가열해 N₂를 내보내며 C=O를 CH₂로 바꾸는 반응. 염기성 조건의 탈산소 방법이다.",
    "chapters": [
     "aldehydes-ketones#imine"
    ]
   },
   {
    "ko": "원자가 전자",
    "en": "valence electron",
    "abbr": "",
    "def": "원자의 가장 바깥 껍질에 있어 화학 결합에 참여하는 전자. 탄소 4, 질소 5, 산소 6, 할로젠 7개.",
    "chapters": [
     "structure-bonding#lewis"
    ]
   },
   {
    "ko": "원자층 증착",
    "en": "ALD",
    "abbr": "",
    "def": "ALD. 두 전구체를 번갈아 넣어 각 반응이 표면 포화로 스스로 멈추게 하여 원자층 단위로 막을 쌓는 공정.",
    "chapters": [
     "enolates#chelates"
    ]
   },
   {
    "ko": "위치 선택성",
    "en": "regioselectivity",
    "abbr": "",
    "def": "결합이 생길 수 있는 위치가 여럿일 때 한 위치 이성질체가 우세하게 생기는 성질.",
    "chapters": [
     "alkenes#electrophilic"
    ]
   },
   {
    "ko": "윌리엄슨 에터 합성",
    "en": "Williamson ether synthesis",
    "abbr": "",
    "def": "알콕사이드가 메틸·1차 할로젠화 알킬을 S_N2로 공격해 에터를 만드는 방법. 붐비는 쪽을 알콕사이드로 고른다.",
    "chapters": [
     "alcohols-ethers#ethers"
    ]
   },
   {
    "ko": "유기금속 화합물",
    "en": "organometallic compound",
    "abbr": "",
    "def": "탄소–금속 결합을 가진 화합물. 금속의 전기 음성도가 낮을수록 C–M 결합의 이온성이 커지고 탄소의 염기성·친핵성이 세진다.",
    "chapters": [
     "organosilicon#organometal"
    ]
   },
   {
    "ko": "유기리튬",
    "en": "organolithium, RLi",
    "abbr": "",
    "def": "C–Li 결합을 가진 RLi 시약. 그리냐르 시약보다 극성이 커서 더 반응성이 크고, 카보닐에 첨가하거나 강염기로 쓰인다.",
    "chapters": [
     "aldehydes-ketones#hydride"
    ]
   },
   {
    "ko": "유도 자기 조립",
    "en": "directed self-assembly, DSA",
    "abbr": "",
    "def": "중성층과 가이드 패턴으로 블록 공중합체의 미세 상분리 구조를 원하는 방향·위치로 정렬하는 패터닝 기술(DSA).",
    "chapters": [
     "polymers#semi"
    ]
   },
   {
    "ko": "유도 효과",
    "en": "inductive effect",
    "abbr": "",
    "def": "전기 음성도가 다른 원자나 작용기가 σ 결합을 따라 전자 밀도를 끌거나 밀어내는 효과. 거리에 따라 빠르게 약해진다.",
    "chapters": [
     "acids-bases#ario"
    ]
   },
   {
    "ko": "유도기",
    "en": "induction period",
    "abbr": "",
    "def": "억제제·항산화제가 남아 있는 동안 반응이 거의 일어나지 않는 처음 기간. t = n[ArOH]₀/rᵢ로 어림한다.",
    "chapters": [
     "radicals#autoxidation"
    ]
   },
   {
    "ko": "유리 전이 온도",
    "en": "glass transition temperature, Tg",
    "abbr": "",
    "def": "비정질 고분자가 단단한 유리 상태에서 고무 상태로 바뀌는 온도 Tg. 가교가 촘촘해질수록 높아진다.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "유리화",
    "en": "vitrification",
    "abbr": "",
    "def": "경화 중 Tg가 경화 온도에 다다라 분자 운동이 얼어붙어 반응이 확산에 묶여 거의 멈추는 현상.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "유발 효과",
    "en": "inductive effect",
    "abbr": "",
    "def": "전기 음성도 차이로 σ 결합을 따라 전자를 당기거나 미는 효과. 거리에 따라 빠르게 약해진다.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "유전 상수",
    "en": "dielectric constant",
    "abbr": "",
    "def": "용매가 전하 사이의 전기적 인력을 줄이는 정도를 나타내는 값 ε. 클수록 극성이 커 이온과 극성 분자를 잘 녹인다.",
    "chapters": [
     "structure-bonding#imf"
    ]
   },
   {
    "ko": "유효 몰농도",
    "en": "effective molarity, EM",
    "abbr": "",
    "def": "분자 내 반응 속도 상수를 분자 간 2차 속도 상수로 나눈 값(M). 분자 간 반응이 같은 속도를 내는 데 필요한 농도다.",
    "chapters": [
     "substitution#activation"
    ]
   },
   {
    "ko": "융합 고리",
    "en": "fused ring",
    "abbr": "",
    "def": "두 고리가 이웃한 원자 두 개(결합 하나)를 공유한 고리계. 데칼린·스테로이드가 예다.",
    "chapters": [
     "alkanes#disubstituted"
    ]
   },
   {
    "ko": "음성 톤",
    "en": "negative tone",
    "abbr": "",
    "def": "빛 받은 곳이 현상 뒤 남는 레지스트·공정. 가교나 극성 변화를 유기 용매 현상으로 읽어 만든다.",
    "chapters": [
     "photoresists#develop"
    ]
   },
   {
    "ko": "음성 톤 현상",
    "en": "negative-tone development, NTD",
    "abbr": "",
    "def": "양성 화학 증폭형 레지스트를 알칼리 대신 아세트산 n-뷰틸 같은 유기 용매로 현상해 보호된 비노광부를 녹이고 노광부를 남기는 공정(NTD).",
    "chapters": [
     "photoresists#develop"
    ]
   },
   {
    "ko": "음이온 중합",
    "en": "anionic polymerization",
    "abbr": "",
    "def": "탄소 음이온 사슬 끝에 전자 끌개를 가진 단량체(메타크릴레이트·아크릴로나이트릴)가 첨가하는 연쇄 성장 중합. 알킬리튬으로 시작한다.",
    "chapters": [
     "polymers#ionic-living"
    ]
   },
   {
    "ko": "의자 형태",
    "en": "chair conformation",
    "abbr": "",
    "def": "사이클로헥세인의 가장 안정한 형태. 결합각 111°, 모든 C–C 결합이 엇갈려 고리 변형이 0이다.",
    "chapters": [
     "alkanes#cyclohexane"
    ]
   },
   {
    "ko": "이동 경향",
    "en": "migratory aptitude",
    "abbr": "",
    "def": "1,2-이동에서 어떤 기가 더 잘 옮겨 가는지의 순서. 베이어–빌리거 산화에서는 H > 3° > 2° ≈ 아릴 > 1° > 메틸이며 양전하를 잘 견디는 기일수록 잘 옮긴다.",
    "chapters": [
     "aldehydes-ketones#wittig"
    ]
   },
   {
    "ko": "이동 삽입",
    "en": "migratory insertion",
    "abbr": "",
    "def": "금속–탄소 결합이 배위된 알켄·CO 사이로 끼어드는 기본 단계. 금속과 유기기가 같은 쪽(syn)으로 더해진다.",
    "chapters": [
     "organosilicon#coupling"
    ]
   },
   {
    "ko": "이량체",
    "en": "dimer",
    "abbr": "",
    "def": "같은 분자 두 개가 결합해 이룬 짝. 카복실산은 두 개의 수소 결합으로 고리형 이량체를 만들어 끓는점이 높다.",
    "chapters": [
     "carboxylic-acids#acidity"
    ]
   },
   {
    "ko": "이른 전이 상태",
    "en": "early transition state",
    "abbr": "",
    "def": "반응 좌표에서 반응물 쪽에 가까워 구조가 반응물을 닮은 전이 상태. 발열 단계(예: Cl·의 수소 떼기)에서 나타나며 선택성이 작다.",
    "chapters": [
     "radicals#selectivity"
    ]
   },
   {
    "ko": "이면각",
    "en": "dihedral angle, φ",
    "abbr": "",
    "def": "결합 축을 따라 보았을 때 앞 탄소의 한 결합과 뒤 탄소의 한 결합이 이루는 각(φ).",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "이미다졸",
    "en": "imidazole",
    "abbr": "",
    "def": "피롤형 N(N1)과 피리딘형 N(N3)을 함께 가진 5각 고리 방향족. N3에 양성자가 붙고 짝산 pKa는 7.0이다.",
    "chapters": [
     "aromaticity#heterocycles"
    ]
   },
   {
    "ko": "이미드화",
    "en": "imidization",
    "abbr": "",
    "def": "폴리아믹산의 아마이드 질소가 이웃 카복실산과 고리를 닫으며 물을 내놓고 이미드가 되는 반응.",
    "chapters": [
     "carboxylic-acids#polymers"
    ]
   },
   {
    "ko": "이민",
    "en": "imine, 시프 염기",
    "abbr": "",
    "def": "C=N 이중 결합을 가진 화합물(시프 염기). 1° 아민과 알데하이드·케톤이 물을 내며 축합해 생기고, 속도는 pH 4–5 근처에서 가장 크다.",
    "chapters": [
     "aldehydes-ketones#imine"
    ]
   },
   {
    "ko": "이방성 식각",
    "en": "anisotropic etching",
    "abbr": "",
    "def": "수직 방향으로만 깎여 측벽이 곧은 식각. 수직 이온 충돌과 측벽 보호막(고분자)의 조합으로 얻는다.",
    "chapters": [
     "radicals#plasma"
    ]
   },
   {
    "ko": "이성질체",
    "en": "isomer",
    "abbr": "",
    "def": "분자식은 같지만 원자의 연결 순서나 공간 배치가 달라 서로 다른 화합물. 구조 이성질체와 입체 이성질체로 나뉜다.",
    "chapters": [
     "stereochemistry#chirality"
    ]
   },
   {
    "ko": "이온쌍",
    "en": "ion pair",
    "abbr": "",
    "def": "이온화 직후 양이온과 이탈기 음이온이 용매 껍질 안에 붙어 있는 상태. 한 면을 가려 반전 생성물이 약간 많아지게 한다.",
    "chapters": [
     "substitution#sn1"
    ]
   },
   {
    "ko": "이웃 결합",
    "en": "vicinal coupling, ³J",
    "abbr": "",
    "def": "세 결합 떨어진 H–C–C–H 사이의 스핀–스핀 결합(³J). 자유 회전 사슬에서 약 7 Hz이며 n+1 규칙의 주된 원인이다.",
    "chapters": [
     "nmr#coupling"
    ]
   },
   {
    "ko": "이중 결합 규칙",
    "en": "double bond rule",
    "abbr": "",
    "def": "3주기 이하 원소(Si, P, S 등)는 p 오비탈이 크고 퍼져 있어 π 결합이 약하므로 안정한 다중 결합을 거의 만들지 않는다는 경험 규칙.",
    "chapters": [
     "organosilicon#si-c"
    ]
   },
   {
    "ko": "이탈기",
    "en": "leaving group",
    "abbr": "",
    "def": "결합 전자쌍을 가지고 떨어져 나가는 원자단. 떠난 뒤 안정한 약한 염기(H₂O, Br⁻, I⁻, TsO⁻)일수록 좋은 이탈기다.",
    "chapters": [
     "reactions#arrows"
    ]
   },
   {
    "ko": "인 일라이드",
    "en": "phosphorus ylide",
    "abbr": "",
    "def": "Ph₃P⁺–C⁻R₂처럼 이웃 원자에 양전하와 음전하를 함께 가진 중성 분자. 포스포늄 염을 강염기로 탈양성자화해 만들며 비티히 반응의 시약이다.",
    "chapters": [
     "aldehydes-ketones#wittig"
    ]
   },
   {
    "ko": "인광",
    "en": "phosphorescence",
    "abbr": "",
    "def": "T₁에서 S₀로 빛을 내며 돌아오는 스핀 금지 복사 전이. 수명이 밀리초–초로 길어 산소에 쉽게 소광된다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "일중항",
    "en": "singlet",
    "abbr": "",
    "def": "모든 전자 스핀이 짝지어 전체 스핀이 0, 스핀 다중도 2S+1 = 1인 상태. 흡수로 처음 생기는 들뜬 상태 S₁도 일중항이다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "입체 규칙성",
    "en": "tacticity",
    "abbr": "",
    "def": "사슬 안 이웃 입체 중심들의 상대 배열. 아이소택틱(같은 쪽)·신디오택틱(번갈아)·어택틱(무작위)으로 나눈다.",
    "chapters": [
     "polymers#overview"
    ]
   },
   {
    "ko": "입체 변형",
    "en": "steric strain",
    "abbr": "",
    "def": "원자나 원자단이 반데르발스 반지름보다 가까워져 서로 밀어내며 생기는 에너지 상승(steric strain).",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "입체 선택성",
    "en": "stereoselectivity",
    "abbr": "",
    "def": "여러 입체 이성질체가 생길 수 있을 때 그중 하나가 우세하게 생기는 성질.",
    "chapters": [
     "alkenes#halogenation"
    ]
   },
   {
    "ko": "입체 선택적",
    "en": "stereoselective",
    "abbr": "",
    "def": "두 가지 이상의 입체 이성질체가 생길 수 있는 반응에서 한 이성질체를 더 많이 만드는 성질. 예: 2-브로모뷰테인의 E2에서 E-2-뷰텐이 Z보다 많다.",
    "chapters": [
     "elimination#e2"
    ]
   },
   {
    "ko": "입체 이성질체",
    "en": "stereoisomer",
    "abbr": "",
    "def": "원자의 연결 순서는 같고 공간 배치만 다른 이성질체. 서로 거울상이면 거울상 이성질체, 아니면 부분입체 이성질체다.",
    "chapters": [
     "stereochemistry#chirality"
    ]
   },
   {
    "ko": "입체 장애",
    "en": "steric hindrance",
    "abbr": "",
    "def": "원자단의 부피 때문에 반응 자리에 접근하기 어려워지는 효과. SN2 속도를 메틸 > 1차 > 2차 ≫ 3차 순으로 만든다.",
    "chapters": [
     "substitution#sterics"
    ]
   },
   {
    "ko": "입체 중심",
    "en": "stereocenter",
    "abbr": "",
    "def": "두 치환기를 맞바꾸면 입체 이성질체가 생기는 원자. 서로 다른 네 기가 붙은 sp³ 탄소가 대표적이다.",
    "chapters": [
     "stereochemistry#chirality"
    ]
   },
   {
    "ko": "입체 특이성",
    "en": "stereospecificity",
    "abbr": "",
    "def": "출발 물질의 입체 이성질체마다 정해진 서로 다른 입체 이성질체 생성물이 생기는 성질. 예: 시스 알켄과 트랜스 알켄이 Br₂와 라세미·메소를 준다.",
    "chapters": [
     "alkenes#halogenation"
    ]
   },
   {
    "ko": "입체 특이적",
    "en": "stereospecific",
    "abbr": "",
    "def": "출발 물질의 입체 화학이 생성물의 입체 화학을 하나로 정하는 반응. 부분입체 이성질체가 E2로 각각 E 또는 Z 알켄 하나만 주는 경우가 예다.",
    "chapters": [
     "elimination#regio"
    ]
   },
   {
    "ko": "자기 이방성",
    "en": "magnetic anisotropy",
    "abbr": "",
    "def": "π 전자의 유도 자기장처럼 방향에 따라 가리움 효과가 달라지는 성질. 방향족·알데하이드 H는 가리움 벗김, 알카인 축 방향 H는 가리움을 받는다.",
    "chapters": [
     "nmr#shift"
    ]
   },
   {
    "ko": "자기 제한 반응",
    "en": "self-limiting reaction",
    "abbr": "",
    "def": "표면 반응 자리가 다 쓰이면 저절로 멈추는 반응. ALD에서 전구체가 표면 −OH와만 반응하고 한 층에서 멈추는 성질이다.",
    "chapters": [
     "reactions#control"
    ]
   },
   {
    "ko": "자기 조립 단분자막",
    "en": "self-assembled monolayer, SAM",
    "abbr": "",
    "def": "분자가 표면에 결합하고 서로 정렬해 저절로 만드는 한 분자 두께의 막(SAM). 알킬트라이클로로실레인/산화막, 알케인싸이올/금이 대표적이다.",
    "chapters": [
     "organosilicon#sam"
    ]
   },
   {
    "ko": "자기 회전 비",
    "en": "gyromagnetic ratio",
    "abbr": "",
    "def": "핵의 자기 모멘트와 스핀 각운동량의 비 γ. 공명 진동수 ν = γB₀/2π를 정하며, γ/2π는 ¹H 42.577 MHz/T, ¹³C 10.708 MHz/T이다.",
    "chapters": [
     "nmr#resonance"
    ]
   },
   {
    "ko": "자동 산화",
    "en": "autoxidation",
    "abbr": "",
    "def": "공기 중 O₂가 일으키는 느린 라디칼 연쇄 산화. R· + O₂ → ROO·, ROO· + RH → ROOH + R·로 진행하고 ROOH가 분해되며 가속한다.",
    "chapters": [
     "radicals#autoxidation"
    ]
   },
   {
    "ko": "자외선–가시광선 분광법",
    "en": "UV–Vis spectroscopy",
    "abbr": "",
    "def": "약 200–800 nm 빛의 흡수를 파장에 따라 재어 공액계의 전자 전이와 농도를 분석하는 방법(UV–Vis).",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "자유 유도 감쇠",
    "en": "free induction decay, FID",
    "abbr": "",
    "def": "펄스로 눕힌 자기화가 xy 평면에서 돌며 수신 코일에 유도하는 감쇠 신호(FID). 여러 진동수 성분의 맥놀이이며 푸리에 변환하면 스펙트럼이 된다.",
    "chapters": [
     "nmr#resonance"
    ]
   },
   {
    "ko": "자유 전자 모형",
    "en": "free-electron model",
    "abbr": "",
    "def": "공액 π 전자를 분자 길이의 1차원 상자에 갇힌 입자로 보고 HOMO→LUMO 전이 에너지를 어림하는 모형.",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "자이체프 규칙",
    "en": "Zaitsev's rule",
    "abbr": "",
    "def": "제거 반응에서 대개 이중 결합 탄소에 치환기가 더 많은, 더 안정한 알켄이 주생성물이 된다는 경험칙. 작은 염기의 E2와 E1에서 성립한다.",
    "chapters": [
     "elimination#regio"
    ]
   },
   {
    "ko": "작용기",
    "en": "functional group",
    "abbr": "",
    "def": "분자의 반응과 성질을 결정하는 특정 원자 묶음. 알켄, 알코올, 에터, 아민, 카보닐 계열 등이 있다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "작용기 상호 변환",
    "en": "functional group interconversion",
    "abbr": "",
    "def": "탄소 골격은 그대로 두고 작용기만 다른 것으로 바꾸는 반응이나 역합성 단계(FGI). 예: 알카인 → cis 알켄.",
    "chapters": [
     "alkynes-synthesis#synthesis"
    ]
   },
   {
    "ko": "작용기 영역",
    "en": "functional group region",
    "abbr": "",
    "def": "IR 스펙트럼의 1500 cm⁻¹ 이상 영역. 띠가 적고 X–H·삼중·이중 결합 신축이라 작용기 판정에 쓴다.",
    "chapters": [
     "ms-ir#ir-groups"
    ]
   },
   {
    "ko": "잠상",
    "en": "latent image",
    "abbr": "",
    "def": "노광과 노광 후 굽기로 막 안에 생겼지만 현상 전에는 보이지 않는 화학적 상(산·보호기 분포). 현상이 이것을 패턴으로 바꾼다.",
    "chapters": [
     "photoresists#car"
    ]
   },
   {
    "ko": "장파장 이동",
    "en": "bathochromic shift, red shift",
    "abbr": "",
    "def": "공액 연장이나 치환기 때문에 흡수 띠가 긴 파장 쪽으로 옮겨 가는 것(적색 이동, bathochromic shift).",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "재배열 반응",
    "en": "rearrangement reaction",
    "abbr": "",
    "def": "한 분자 안에서 결합이 재배치되어 분자식은 같고 구조가 다른 이성질체가 되는 반응. 탄소 양이온의 1,2-이동이 대표적이다.",
    "chapters": [
     "reactions#types"
    ]
   },
   {
    "ko": "적도 위치",
    "en": "equatorial",
    "abbr": "",
    "def": "의자 사이클로헥세인에서 고리 둘레를 따라 바깥으로 비스듬히 뻗은 결합 자리(equatorial).",
    "chapters": [
     "alkanes#cyclohexane"
    ]
   },
   {
    "ko": "적분 곡선",
    "en": "integration curve",
    "abbr": "",
    "def": "신호 넓이를 누적해 계단 모양으로 그린 곡선. 계단 높이의 비가 각 신호를 내는 수소 수의 비다.",
    "chapters": [
     "nmr#equivalence"
    ]
   },
   {
    "ko": "적외선 분광법",
    "en": "infrared spectroscopy, IR",
    "abbr": "",
    "def": "분자 진동과 같은 진동수의 적외선이 흡수되는 것을 재어 결합과 작용기를 알아내는 분광법(IR).",
    "chapters": [
     "ms-ir#vibrations"
    ]
   },
   {
    "ko": "전구체",
    "en": "precursor",
    "abbr": "",
    "def": "CVD·ALD에서 금속·규소를 기체로 실어 날라 표면에서 막을 만드는 분자. 휘발성, 열안정성, 반응성, 깨끗한 부산물이 필요하다.",
    "chapters": [
     "organosilicon#precursors"
    ]
   },
   {
    "ko": "전기음성도",
    "en": "electronegativity",
    "abbr": "",
    "def": "결합 속 원자가 공유 전자쌍을 자기 쪽으로 끌어당기는 정도. 폴링 척도로 H 2.20, C 2.55, N 3.04, O 3.44, F 3.98.",
    "chapters": [
     "structure-bonding#polarity"
    ]
   },
   {
    "ko": "전이 상태",
    "en": "transition state, ‡",
    "abbr": "",
    "def": "반응 좌표 위 에너지 극대점의 원자 배치. 옛 결합은 반쯤 끊어지고 새 결합은 반쯤 생겼으며 진동 한 번(~0.1 ps)만 존재해 분리할 수 없다.",
    "chapters": [
     "reactions#energy"
    ]
   },
   {
    "ko": "전자 끄는 기",
    "en": "electron-withdrawing group",
    "abbr": "",
    "def": "할로젠, 나이트로기, CF₃, 카보닐처럼 유도 효과나 공명으로 이웃의 전자 밀도를 끌어당기는 작용기. 근처의 음전하를 안정시켜 산을 세게 한다.",
    "chapters": [
     "acids-bases#ario"
    ]
   },
   {
    "ko": "전자 분무 이온화",
    "en": "electrospray ionization, ESI",
    "abbr": "",
    "def": "용액을 고전압 모세관으로 분무해 용매가 증발하며 [M+H]⁺ 등 이온을 남기는 부드러운 이온화법(ESI). 고분자·생체 분자에 쓴다.",
    "chapters": [
     "ms-ir#ms-basics"
    ]
   },
   {
    "ko": "전자 충격 이온화",
    "en": "electron ionization, EI",
    "abbr": "",
    "def": "70 eV로 가속한 전자를 기체 분자에 충돌시켜 전자 하나를 떼어 내는 이온화법(EI). 분자 이온과 많은 조각 이온을 만든다.",
    "chapters": [
     "ms-ir#ms-basics"
    ]
   },
   {
    "ko": "전자고리 반응",
    "en": "electrocyclic reaction",
    "abbr": "",
    "def": "공액 폴리엔의 양 끝이 σ 결합을 만들어 고리를 닫거나 그 역으로 고리가 열리는 고리형 협동 반응. 회전 방향이 열·빛 조건과 π 전자 수로 정해진다.",
    "chapters": [
     "conjugation#electrocyclic"
    ]
   },
   {
    "ko": "전파 단계",
    "en": "propagation",
    "abbr": "",
    "def": "라디칼이 분자와 반응해 생성물과 새 라디칼을 만드는 단계. 라디칼 수는 그대로이고, 전파 단계들의 합이 전체 반응식이 된다.",
    "chapters": [
     "radicals#chain"
    ]
   },
   {
    "ko": "접두사",
    "en": "prefix",
    "abbr": "",
    "def": "IUPAC 이름 앞에 붙어 주작용기가 아닌 작용기·치환기를 나타내는 말. 하이드록시-, 옥소-, 아미노-, 클로로- 등이며 알파벳 순으로 늘어놓는다.",
    "chapters": [
     "data-tables#naming"
    ]
   },
   {
    "ko": "접미사",
    "en": "suffix",
    "abbr": "",
    "def": "IUPAC 이름 끝에 붙어 주작용기를 나타내는 어미. -산(카복실산), -알(알데하이드), -온(케톤), -올(알코올), -아민 등.",
    "chapters": [
     "data-tables#naming"
    ]
   },
   {
    "ko": "접촉각",
    "en": "contact angle",
    "abbr": "",
    "def": "고체 위 액체 방울 가장자리에서 고체–액체 계면과 액체 표면이 이루는 각. 영 식 cos θ = (γSV − γSL)/γLV로 정해진다.",
    "chapters": [
     "structure-bonding#imf"
    ]
   },
   {
    "ko": "정량 NMR",
    "en": "quantitative NMR, qNMR",
    "abbr": "",
    "def": "신호 넓이가 핵 수에 비례한다는 사실로 내부 표준과 시료의 넓이·몰질량·질량을 비교해 질량 순도를 구하는 방법(qNMR). 이완 지연을 T₁의 5–7배로 잡는다.",
    "chapters": [
     "nmr#structure"
    ]
   },
   {
    "ko": "정상 상태 근사",
    "en": "steady-state approximation",
    "abbr": "",
    "def": "반응성 중간체의 농도가 생기는 속도와 없어지는 속도가 같아 거의 일정하다고 놓는 근사. 라디칼 농도 [R·] = √(rᵢ/2kₜ)를 준다.",
    "chapters": [
     "radicals#chain"
    ]
   },
   {
    "ko": "정상 전자 요구",
    "en": "normal electron demand",
    "abbr": "",
    "def": "전자가 풍부한 다이엔의 HOMO와 전자가 부족한 친다이엔체의 LUMO 사이 상호작용이 주도하는 딜스–알더 반응.",
    "chapters": [
     "conjugation#diels-alder"
    ]
   },
   {
    "ko": "정전기 전위 지도",
    "en": "electrostatic potential map",
    "abbr": "",
    "def": "분자 표면 각 점의 정전기 전위를 색으로 칠한 그림. 빨강(음)은 친핵성 자리, 파랑(양)은 친전자성 자리다.",
    "chapters": [
     "reactions#nucleophiles"
    ]
   },
   {
    "ko": "정확 질량",
    "en": "exact mass, monoisotopic mass",
    "abbr": "",
    "def": "각 원소의 가장 흔한 동위원소 질량(¹²C 12.0000, ¹H 1.00783, ¹⁶O 15.9949 등)으로 계산한 단일 동위원소 질량. 고분해능 질량 분석으로 분자식을 가를 때 쓴다.",
    "chapters": [
     "data-tables#calc"
    ]
   },
   {
    "ko": "제거 반응",
    "en": "elimination reaction",
    "abbr": "",
    "def": "한 분자에서 작은 분자(HX, H₂O 등)가 빠져나가며 보통 다중 결합이 생기는 반응. 첨가 반응의 역이다.",
    "chapters": [
     "reactions#types"
    ]
   },
   {
    "ko": "제미널 다이할로젠화물",
    "en": "geminal dihalide",
    "abbr": "",
    "def": "할로젠 원자 두 개가 같은 탄소에 붙은 화합물(R–CX₂–R′). 알카인에 HX 2당량을 더하면 생긴다.",
    "chapters": [
     "alkynes-synthesis#addition"
    ]
   },
   {
    "ko": "조색단",
    "en": "auxochrome",
    "abbr": "",
    "def": "스스로는 근자외선을 흡수하지 않지만 발색단에 붙어 흡수 파장과 세기를 바꾸는 기(–OH, –OR, –NR₂ 등).",
    "chapters": [
     "conjugation#uv-vis"
    ]
   },
   {
    "ko": "조성 표류",
    "en": "composition drift",
    "abbr": "",
    "def": "더 반응성이 큰 단량체가 먼저 소모되어 전환율에 따라 단량체와 공중합체 조성이 변하는 현상.",
    "chapters": [
     "polymers#copolymer"
    ]
   },
   {
    "ko": "존스 산화",
    "en": "Jones oxidation",
    "abbr": "",
    "def": "CrO₃와 황산을 아세톤–물에서 쓰는 Cr(VI) 산화. 1° 알코올은 카복실산까지, 2° 알코올은 케톤까지 산화한다.",
    "chapters": [
     "alcohols-ethers#reactions"
    ]
   },
   {
    "ko": "종결 단계",
    "en": "termination",
    "abbr": "",
    "def": "라디칼 두 개가 만나 결합하거나 불균등화해 라디칼이 사라지는 단계. 라디칼 농도가 낮아 전파보다 훨씬 드물다.",
    "chapters": [
     "radicals#chain"
    ]
   },
   {
    "ko": "좌선성",
    "en": "levorotatory",
    "abbr": "",
    "def": "빛이 오는 쪽을 바라볼 때 편광면을 반시계 방향으로 돌리는 성질. (−) 또는 l로 표시한다.",
    "chapters": [
     "stereochemistry#optical"
    ]
   },
   {
    "ko": "주 기여 구조",
    "en": "major contributor",
    "abbr": "",
    "def": "공명 혼성에 가장 크게 기여하는 공명 구조. 옥텟 충족, 적은 형식 전하, 음전하가 전기 음성 원자에 있는 구조가 주 기여 구조다.",
    "chapters": [
     "acids-bases#resonance"
    ]
   },
   {
    "ko": "주기당 성장률",
    "en": "growth per cycle, GPC",
    "abbr": "",
    "def": "ALD 한 주기에 쌓이는 막 두께(GPC, Å/주기). TMA/H₂O Al₂O₃는 200–300 °C에서 약 1.1 Å/주기다.",
    "chapters": [
     "organosilicon#precursors"
    ]
   },
   {
    "ko": "주작용기",
    "en": "principal characteristic group",
    "abbr": "",
    "def": "분자에 있는 작용기 가운데 IUPAC 우선순위가 가장 높아 이름의 접미사로 쓰이는 작용기. 모체 사슬 선택과 번호 매기기의 기준이 된다.",
    "chapters": [
     "data-tables#naming"
    ]
   },
   {
    "ko": "중간체",
    "en": "intermediate",
    "abbr": "",
    "def": "다단계 반응에서 두 전이 상태 사이 에너지 극소에 놓인 화학종. 골짜기 깊이만큼 살아 관측하거나 붙잡을 수 있다(탄소 양이온 등).",
    "chapters": [
     "reactions#energy"
    ]
   },
   {
    "ko": "중복 원자",
    "en": "duplicate atom",
    "abbr": "",
    "def": "CIP 규칙에서 이중·삼중 결합을 단일 결합으로 바꿔 셀 때 상대 원자를 결합 차수만큼 덧붙인 가상의 원자. 더 이상 치환기를 갖지 않는다.",
    "chapters": [
     "stereochemistry#cip"
    ]
   },
   {
    "ko": "중합도",
    "en": "degree of polymerization",
    "abbr": "",
    "def": "사슬 하나에 든 반복 단위 수. 평균값 Xₙ에 반복 단위 질량을 곱하면 수평균 분자량 Mₙ이 된다.",
    "chapters": [
     "polymers#overview"
    ]
   },
   {
    "ko": "증기압",
    "en": "vapor pressure",
    "abbr": "",
    "def": "액체와 평형을 이룬 증기의 압력. 분자 사이 인력이 클수록 낮고, 온도에 따라 클라우지우스–클라페이롱 식으로 지수적으로 커진다.",
    "chapters": [
     "alkanes#properties"
    ]
   },
   {
    "ko": "지문 영역",
    "en": "fingerprint region",
    "abbr": "",
    "def": "IR 스펙트럼의 1500 cm⁻¹ 이하 영역. 골격 진동이 얽혀 분자마다 고유하므로 표준 스펙트럼과 대조해 동일성을 확인한다.",
    "chapters": [
     "ms-ir#ir-groups"
    ]
   },
   {
    "ko": "지붕 효과",
    "en": "roof effect",
    "abbr": "",
    "def": "두 결합 신호의 진동수 차 Δν가 J에 가까워질 때 마주 보는 안쪽 선은 세지고 바깥 선은 약해져 다중선이 서로를 향해 기우는 현상.",
    "chapters": [
     "nmr#complex"
    ]
   },
   {
    "ko": "지향성 알돌",
    "en": "directed aldol",
    "abbr": "",
    "def": "LDA로 한 카보닐을 미리 엔올레이트로 바꾼 뒤 저온에서 다른 카보닐을 넣어 원하는 교차 알돌 생성물 하나만 얻는 방법.",
    "chapters": [
     "enolates#aldol"
    ]
   },
   {
    "ko": "직접 공정",
    "en": "direct process, 뮐러–로코 공정",
    "abbr": "",
    "def": "구리 촉매가 섞인 규소 가루에 클로로메테인을 280–300 °C에서 반응시켜 메틸클로로실레인(주로 Me₂SiCl₂)을 만드는 공업 공정. 뮐러–로코 공정.",
    "chapters": [
     "organosilicon#siloxane"
    ]
   },
   {
    "ko": "진동 완화",
    "en": "vibrational relaxation",
    "abbr": "",
    "def": "들뜬 분자가 남는 진동 에너지를 주변 분자와의 충돌로 피코초 안에 잃고 그 전자 상태의 가장 낮은 진동 준위로 내려오는 과정.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "질량 결손",
    "en": "mass defect",
    "abbr": "",
    "def": "정확 질량과 정수 질량의 차이. 수소가 많으면 양(+), 산소·할로젠이 많으면 음(−)으로 치우친다.",
    "chapters": [
     "ms-ir#hrms"
    ]
   },
   {
    "ko": "질량 대 전하 비",
    "en": "mass-to-charge ratio, m/z",
    "abbr": "",
    "def": "이온의 질량(Da)을 전하수로 나눈 값 m/z. 유기 이온은 대개 +1가이므로 이온의 질량과 같다.",
    "chapters": [
     "ms-ir#ms-basics"
    ]
   },
   {
    "ko": "질량 분석법",
    "en": "mass spectrometry, MS",
    "abbr": "",
    "def": "분자를 기체 상태의 이온으로 만들어 질량 대 전하 비(m/z)에 따라 나누고 그 수를 세는 분석법. 분자량·분자식과 조각 패턴으로 구조 정보를 준다.",
    "chapters": [
     "ms-ir#ms-basics"
    ]
   },
   {
    "ko": "질량 스펙트럼",
    "en": "mass spectrum",
    "abbr": "",
    "def": "가로축 m/z, 세로축 상대 세기로 이온 수를 막대로 나타낸 그림. 가장 큰 막대를 100으로 놓는다.",
    "chapters": [
     "ms-ir#ms-basics"
    ]
   },
   {
    "ko": "질소 규칙",
    "en": "nitrogen rule",
    "abbr": "",
    "def": "C, H, O, 할로젠 등으로 된 분자의 분자량은 짝수이고, 질소가 홀수 개이면 홀수라는 규칙. 질소의 질량(14)은 짝수, 원자가(3)는 홀수이기 때문이다.",
    "chapters": [
     "ms-ir#isotopes"
    ]
   },
   {
    "ko": "질소 반전",
    "en": "nitrogen inversion",
    "abbr": "",
    "def": "아민의 질소가 비공유 전자쌍을 반대쪽으로 넘기며 평면 전이 상태를 지나 뒤집히는 과정. 장벽이 약 25 kJ/mol로 낮아 키랄 아민이 곧 라세미화한다.",
    "chapters": [
     "stereochemistry#heteroatoms"
    ]
   },
   {
    "ko": "짝산",
    "en": "conjugate acid",
    "abbr": "",
    "def": "염기가 양성자를 하나 얻어 생긴 화학종. 짝산의 pKa가 클수록 그 염기가 세다.",
    "chapters": [
     "acids-bases#bronsted"
    ]
   },
   {
    "ko": "짝염기",
    "en": "conjugate base",
    "abbr": "",
    "def": "산이 양성자를 하나 잃고 남은 화학종. 짝염기가 안정할수록 그 산이 세다.",
    "chapters": [
     "acids-bases#bronsted"
    ]
   },
   {
    "ko": "천장 온도",
    "en": "ceiling temperature",
    "abbr": "",
    "def": "중합의 ΔG가 0이 되는 온도 Tc = ΔHₚ/ΔSₚ. 이보다 높으면 해중합이 우세하다.",
    "chapters": [
     "polymers#network"
    ]
   },
   {
    "ko": "첨가 반응",
    "en": "addition reaction",
    "abbr": "",
    "def": "두 분자가 합쳐져 한 분자가 되는 반응. 대개 π 결합 하나가 σ 결합 둘로 바뀐다(예: 알켄 + HBr).",
    "chapters": [
     "reactions#types"
    ]
   },
   {
    "ko": "첨가–제거",
    "en": "addition–elimination",
    "abbr": "",
    "def": "친핵성 아실 치환의 두 단계 메커니즘. 먼저 π 결합에 첨가하고, 이어서 이탈기를 제거해 카보닐을 되살린다.",
    "chapters": [
     "carboxylic-acids#nas"
    ]
   },
   {
    "ko": "첫 차이점",
    "en": "first point of difference",
    "abbr": "",
    "def": "CIP 비교에서 두 치환기의 원자 집합을 큰 것부터 하나씩 비교해 처음으로 달라지는 자리. 합이나 개수가 아니라 이곳에서 순위가 정해진다.",
    "chapters": [
     "stereochemistry#cip"
    ]
   },
   {
    "ko": "초공액",
    "en": "hyperconjugation",
    "abbr": "",
    "def": "이웃 C–H 또는 C–C σ 결합 전자가 빈(또는 반쯤 찬) p 오비탈과 겹쳐 전자를 나눠 주는 안정화. 탄소 양이온·라디칼의 치환도 효과를 설명한다.",
    "chapters": [
     "reactions#intermediates"
    ]
   },
   {
    "ko": "촉매 사슬 길이",
    "en": "catalytic chain length",
    "abbr": "",
    "def": "화학 증폭형 레지스트에서 산 하나가 소멸하기 전까지 일으키는 탈보호 반응의 평균 횟수. 수십–천 정도이며 감도와 해상도를 함께 좌우한다.",
    "chapters": [
     "elimination#resist"
    ]
   },
   {
    "ko": "촉매 수소화",
    "en": "catalytic hydrogenation",
    "abbr": "",
    "def": "Pd, Pt, Ni 같은 금속 촉매 표면에서 H₂를 C=C에 더해 알케인을 만드는 반응. 두 H가 같은 면에서 붙는다(syn).",
    "chapters": [
     "alkenes#cleavage"
    ]
   },
   {
    "ko": "추출",
    "en": "extraction",
    "abbr": "",
    "def": "두 섞이지 않는 용매 사이의 분배 차이로 성분을 나누는 조작. pH를 바꿔 아민·산을 이온으로 만들면 물층으로 옮길 수 있다.",
    "chapters": [
     "amines#extraction"
    ]
   },
   {
    "ko": "축 위치",
    "en": "axial",
    "abbr": "",
    "def": "의자 사이클로헥세인에서 고리 평균 면에 수직으로 위·아래를 번갈아 향하는 결합 자리(axial).",
    "chapters": [
     "alkanes#cyclohexane"
    ]
   },
   {
    "ko": "축 키랄성",
    "en": "axial chirality",
    "abbr": "",
    "def": "입체 중심 없이 한 축을 중심으로 치환기가 비틀려 배치되어 생기는 키랄성. 1,3-이치환 알렌과 BINOL이 예다.",
    "chapters": [
     "stereochemistry#heteroatoms"
    ]
   },
   {
    "ko": "축퇴 오비탈",
    "en": "degenerate orbitals",
    "abbr": "",
    "def": "에너지가 같은 둘 이상의 오비탈. 고리 π계에서는 맨 아래 준위를 뺀 준위들이 둘씩 축퇴한다.",
    "chapters": [
     "aromaticity#benzene"
    ]
   },
   {
    "ko": "축합",
    "en": "condensation",
    "abbr": "",
    "def": "두 분자(또는 작용기)가 물·알코올 같은 작은 분자를 내놓으며 결합하는 반응. 실란올 둘이 물을 내놓고 Si–O–Si가 되는 것이 예다.",
    "chapters": [
     "organosilicon#siloxane"
    ]
   },
   {
    "ko": "축합 중합",
    "en": "condensation polymerization",
    "abbr": "",
    "def": "결합이 생길 때마다 물·HCl 같은 작은 분자가 떨어지는 중합.",
    "chapters": [
     "carboxylic-acids#polymers"
    ]
   },
   {
    "ko": "축합도",
    "en": "degree of condensation",
    "abbr": "",
    "def": "실리카·SiCOH 그물에서 실제로 형성된 Si–O–Si 다리 수를 가능한 최대 다리 수로 나눈 값. ²⁹Si NMR의 T²/T³·Q³/Q⁴ 넓이로 구한다.",
    "chapters": [
     "nmr#carbon"
    ]
   },
   {
    "ko": "치환 반응",
    "en": "substitution reaction",
    "abbr": "",
    "def": "분자 속 원자나 원자단 하나가 다른 원자나 원자단으로 바뀌는 반응(예: CH₃Br + OH⁻ → CH₃OH + Br⁻).",
    "chapters": [
     "reactions#types"
    ]
   },
   {
    "ko": "친다이엔체",
    "en": "dienophile",
    "abbr": "",
    "def": "딜스–알더 반응에서 다이엔과 반응하는 알켄이나 알카인. 전자 끌기 기가 붙어 LUMO가 낮을수록 반응이 빠르다.",
    "chapters": [
     "conjugation#diels-alder"
    ]
   },
   {
    "ko": "친산소성",
    "en": "oxophilicity",
    "abbr": "",
    "def": "원자가 산소와 결합하려는 경향. 규소·붕소·알루미늄·타이타늄은 친산소성이 커서 반응이 M–O 결합을 만드는 쪽으로 간다.",
    "chapters": [
     "organosilicon#si-c"
    ]
   },
   {
    "ko": "친수성",
    "en": "hydrophilic",
    "abbr": "",
    "def": "물과 잘 어울리는 성질. 표면에 OH 같은 극성기가 있으면 물이 퍼져 접촉각이 작다(SC-1 처리 Si–OH 표면 10° 미만).",
    "chapters": [
     "structure-bonding#imf"
    ]
   },
   {
    "ko": "친전자성 방향족 치환",
    "en": "electrophilic aromatic substitution, EAS",
    "abbr": "",
    "def": "방향족 고리의 H가 친전자체로 바뀌는 반응(EAS). π 전자가 E⁺를 공격해 시그마 착물을 만든 뒤 H⁺를 잃고 방향족성을 되찾는다.",
    "chapters": [
     "aromatic-substitution#mechanism"
    ]
   },
   {
    "ko": "친전자성 첨가",
    "en": "electrophilic addition",
    "abbr": "",
    "def": "알켄의 π 전자가 친전자체를 공격해 중간체를 만들고, 이어서 친핵체가 붙어 π 결합 하나가 σ 결합 둘로 바뀌는 반응.",
    "chapters": [
     "alkenes#electrophilic"
    ]
   },
   {
    "ko": "친전자체",
    "en": "electrophile",
    "abbr": "",
    "def": "전자가 부족해 전자쌍을 받아들이는 화학종. 반응 속도의 관점에서 본 루이스 산이다.",
    "chapters": [
     "acids-bases#lewis"
    ]
   },
   {
    "ko": "친핵성",
    "en": "nucleophilicity",
    "abbr": "",
    "def": "친핵체가 탄소를 얼마나 빨리 공격하는지를 나타내는 속도론적 성질. 전하, 염기도, 편극성, 입체, 용매에 좌우된다.",
    "chapters": [
     "substitution#nucleophiles"
    ]
   },
   {
    "ko": "친핵성 방향족 치환",
    "en": "nucleophilic aromatic substitution, SNAr",
    "abbr": "",
    "def": "SNAr. 전자 받개가 있는 할로젠화 아릴에서 친핵체가 첨가한 뒤 이탈기가 떠나는 첨가–제거 반응. 이탈기는 F가 가장 빠르다.",
    "chapters": [
     "aromatic-substitution#snar-benzyne"
    ]
   },
   {
    "ko": "친핵성 아실 치환",
    "en": "nucleophilic acyl substitution",
    "abbr": "",
    "def": "친핵체가 카보닐에 첨가해 사면체 중간체를 만든 뒤 C=O가 다시 서며 이탈기가 떠나는 치환 반응.",
    "chapters": [
     "carboxylic-acids#nas"
    ]
   },
   {
    "ko": "친핵성 첨가",
    "en": "nucleophilic addition",
    "abbr": "",
    "def": "친핵체가 카보닐 탄소에 결합하고 π 전자쌍이 산소로 밀려나 sp³ 사면체 알콕사이드가 생긴 뒤 양성자를 받는 반응. 알데하이드·케톤의 대표 반응이다.",
    "chapters": [
     "aldehydes-ketones#addition"
    ]
   },
   {
    "ko": "친핵성 치환 반응",
    "en": "nucleophilic substitution",
    "abbr": "",
    "def": "전자쌍을 가진 친핵체가 기질의 탄소를 공격해 이탈기를 밀어내고 그 자리를 차지하는 반응. SN2와 SN1 두 메커니즘이 있다.",
    "chapters": [
     "substitution#alkyl-halides"
    ]
   },
   {
    "ko": "친핵체",
    "en": "nucleophile",
    "abbr": "",
    "def": "전자가 풍부해 전자쌍을 내주며 전자가 부족한 원자를 공격하는 화학종. 반응 속도의 관점에서 본 루이스 염기다.",
    "chapters": [
     "acids-bases#lewis"
    ]
   },
   {
    "ko": "카로더스 식",
    "en": "Carothers equation",
    "abbr": "",
    "def": "단계 성장 중합의 평균 중합도 X̄n = 1/(1 − p). p는 작용기 전환율이다.",
    "chapters": [
     "carboxylic-acids#polymers"
    ]
   },
   {
    "ko": "카바메이트",
    "en": "carbamate",
    "abbr": "",
    "def": "R₂N–C(=O)–OR′. 아마이드와 에스터의 중간 성격의 작용기로, t-BOC 보호된 아민이 그 예다.",
    "chapters": [
     "carboxylic-acids#amides"
    ]
   },
   {
    "ko": "카보닐기",
    "en": "carbonyl group",
    "abbr": "",
    "def": "탄소–산소 이중 결합(C=O). 탄소는 sp² 평면이고 산소 쪽으로 전자가 쏠려 탄소가 δ+를 띠므로 친핵체의 공격을 받는다.",
    "chapters": [
     "aldehydes-ketones#carbonyl"
    ]
   },
   {
    "ko": "카복실기",
    "en": "carboxyl group",
    "abbr": "",
    "def": "카보닐 탄소에 하이드록시기가 붙은 작용기 –COOH. 카복실산의 산성과 반응성의 중심이다.",
    "chapters": [
     "carboxylic-acids#acidity"
    ]
   },
   {
    "ko": "카복실레이트 이온",
    "en": "carboxylate ion",
    "abbr": "",
    "def": "카복실산의 짝염기 RCOO⁻. 음전하가 공명으로 두 산소에 똑같이 나뉘어 안정하다.",
    "chapters": [
     "carboxylic-acids#acidity"
    ]
   },
   {
    "ko": "카복실산",
    "en": "carboxylic acid",
    "abbr": "",
    "def": "카복실기(–COOH)를 가진 산. pKa 4–5로 유기 화합물 가운데 산성이 크고, 두 분자가 수소 결합 이량체를 이룬다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "카복실산 유도체",
    "en": "carboxylic acid derivative",
    "abbr": "",
    "def": "카복실산의 OH를 Cl, OCOR, OR, NR₂ 등으로 바꾼 화합물. 산 염화물, 산 무수물, 에스터, 아마이드가 있고 가수 분해하면 카복실산이 된다.",
    "chapters": [
     "carboxylic-acids#acidity"
    ]
   },
   {
    "ko": "카비놀아민",
    "en": "carbinolamine",
    "abbr": "",
    "def": "아민이 카보닐에 첨가해 같은 탄소에 OH와 NR₂가 붙은 중간체. 산 촉매로 물이 떨어지면 이미늄 이온을 거쳐 이민이나 엔아민이 된다.",
    "chapters": [
     "aldehydes-ketones#imine"
    ]
   },
   {
    "ko": "카샤 규칙",
    "en": "Kasha's rule",
    "abbr": "",
    "def": "발광은 거의 언제나 같은 다중도의 가장 낮은 들뜬 상태(S₁ 또는 T₁)에서 일어난다는 경험 규칙. 높은 상태는 내부 전환으로 너무 빨리 내려오기 때문이다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "카플러스 관계",
    "en": "Karplus relation",
    "abbr": "",
    "def": "이웃 결합 상수 ³J가 H–C–C–H 이면각 φ에 따라 A cos²φ + B cos φ + C 꼴로 변한다는 관계. 180°·0°에서 크고 90° 근처에서 거의 0이다.",
    "chapters": [
     "nmr#complex"
    ]
   },
   {
    "ko": "커틴–해밋 원리",
    "en": "Curtin–Hammett principle",
    "abbr": "",
    "def": "형태 이성질체 사이의 변환이 반응보다 빠를 때 생성물 비는 형태의 분포가 아니라 각 경로 전이 상태의 상대 자유 에너지로 정해진다는 원리.",
    "chapters": [
     "elimination#chair"
    ]
   },
   {
    "ko": "커플링 시약",
    "en": "coupling reagent",
    "abbr": "",
    "def": "카복실산을 활성화해 아민·알코올과 결합시키는 시약. 대가로 유레아 같은 안정한 부산물을 낸다.",
    "chapters": [
     "carboxylic-acids#interconversion"
    ]
   },
   {
    "ko": "케쿨레 구조",
    "en": "Kekulé structure",
    "abbr": "",
    "def": "벤젠을 단일 결합과 이중 결합이 번갈아 있는 육각 고리로 나타낸 두 공명 기여 구조. 실제 벤젠은 그 혼성이다.",
    "chapters": [
     "aromaticity#benzene"
    ]
   },
   {
    "ko": "케텐",
    "en": "ketene",
    "abbr": "",
    "def": "R₂C=C=O 구조의 누적 이중 결합 화합물. 가운데 탄소가 친전자성이라 물과 빠르게 반응해 카복실산이 된다.",
    "chapters": [
     "photoresists#photoreactions"
    ]
   },
   {
    "ko": "케토–엔올 호변 이성",
    "en": "keto–enol tautomerism",
    "abbr": "",
    "def": "카보닐 화합물(케토형)과 엔올형 사이의 호변 이성. 산이나 염기가 촉매하며 평형은 케토 쪽이다(아세톤 K ≈ 5×10⁻⁹).",
    "chapters": [
     "alkynes-synthesis#addition"
    ]
   },
   {
    "ko": "케토형",
    "en": "keto form",
    "abbr": "",
    "def": "카보닐(C=O)과 α 탄소의 C–H를 가진 호변 이성질체. 단순 알데하이드·케톤에서는 평형의 거의 전부를 차지한다.",
    "chapters": [
     "enolates#tautomerism"
    ]
   },
   {
    "ko": "케톤",
    "en": "ketone",
    "abbr": "",
    "def": "카보닐 탄소에 탄소 두 개가 붙은 화합물 R–CO–R′. 극성이 큰 비양성자성 화합물로 아세톤이 대표적이다.",
    "chapters": [
     "structure-bonding#groups"
    ]
   },
   {
    "ko": "켄처",
    "en": "quencher",
    "abbr": "",
    "def": "화학 증폭형 감광막에 일부러 넣는 염기(3차 아민 등). 약한 산을 중화하고 산 확산을 막아 패턴 가장자리를 날카롭게 한다.",
    "chapters": [
     "amines#semi"
    ]
   },
   {
    "ko": "콘로타토리",
    "en": "conrotatory",
    "abbr": "",
    "def": "전자고리 반응에서 양 끝 탄소가 같은 방향으로 회전하는 방식. 4n π 계의 열 반응, 4n+2 π 계의 광반응에서 일어난다.",
    "chapters": [
     "conjugation#electrocyclic"
    ]
   },
   {
    "ko": "쿨롱 적분",
    "en": "Coulomb integral",
    "abbr": "",
    "def": "휘켈법에서 원자 하나의 p 오비탈에 놓인 전자의 에너지 α. 헤테로 원자는 α + hβ로 보정한다.",
    "chapters": [
     "conjugation#huckel"
    ]
   },
   {
    "ko": "크라운 에터",
    "en": "crown ether",
    "abbr": "",
    "def": "–CH₂CH₂O– 단위가 고리로 이어진 폴리에터. 고리 안 산소들이 크기가 맞는 금속 양이온을 감싸 붙잡는다.",
    "chapters": [
     "alcohols-ethers#ethers"
    ]
   },
   {
    "ko": "크로뮴산 에스터",
    "en": "chromate ester",
    "abbr": "",
    "def": "알코올과 크로뮴산이 만든 R–O–CrO₂OH. OH 탄소의 H가 빠지는 E2형 제거로 C=O가 생기고 크로뮴이 환원된다.",
    "chapters": [
     "alcohols-ethers#reactions"
    ]
   },
   {
    "ko": "크리기 중간체",
    "en": "Criegee intermediate, 카보닐 옥사이드",
    "abbr": "",
    "def": "몰오존화물이 쪼개질 때 생기는 카보닐 옥사이드(R₂C=O⁺–O⁻). 카보닐과 다시 고리 첨가해 오존화물이 된다.",
    "chapters": [
     "alkenes#cleavage"
    ]
   },
   {
    "ko": "클라 육중항",
    "en": "Clar sextet",
    "abbr": "",
    "def": "다환 방향족에서 π 전자 여섯이 한 고리에 모인 벤젠형 단위. 이를 가장 많이 그릴 수 있는 구조가 가장 안정하다.",
    "chapters": [
     "aromaticity#polycyclic"
    ]
   },
   {
    "ko": "클라이젠 축합",
    "en": "Claisen condensation",
    "abbr": "",
    "def": "에스터 엔올레이트가 다른 에스터에 친핵성 아실 치환을 해 β-케토 에스터를 만드는 반응. 생성물의 탈양성자화가 구동력이라 염기 한 당량이 필요하다.",
    "chapters": [
     "enolates#claisen"
    ]
   },
   {
    "ko": "클라이젠–슈미트 축합",
    "en": "Claisen–Schmidt condensation",
    "abbr": "",
    "def": "방향족 알데하이드(α-H 없음)와 케톤 엔올레이트 사이의 교차 알돌 축합. 벤즈알데하이드와 아세톤에서 벤잘아세톤이 생긴다.",
    "chapters": [
     "enolates#aldol"
    ]
   },
   {
    "ko": "키랄",
    "en": "chiral, 그리스어 cheir = 손",
    "abbr": "",
    "def": "거울상과 포개지지 않는 성질. 손처럼 대칭면이나 반전 중심이 없는 분자가 키랄하다.",
    "chapters": [
     "stereochemistry#chirality"
    ]
   },
   {
    "ko": "키랄 네마틱",
    "en": "chiral nematic, cholesteric",
    "abbr": "",
    "def": "키랄 분자 때문에 액정 방향자가 두께 방향으로 나선을 그리는 액정 상. 콜레스테릭 상이라고도 하며 피치에 맞는 원편광을 반사한다.",
    "chapters": [
     "stereochemistry#heteroatoms"
    ]
   },
   {
    "ko": "키랄 중심",
    "en": "chirality center",
    "abbr": "",
    "def": "서로 다른 네 기가 정사면체로 붙어 분자를 키랄하게 만드는 원자. 입체 중심과 같은 뜻으로 쓴다.",
    "chapters": [
     "stereochemistry#chirality"
    ]
   },
   {
    "ko": "킬레이트",
    "en": "chelate",
    "abbr": "",
    "def": "한 리간드가 두 자리 이상으로 한 금속 이온에 결합해 고리를 이룬 착물. acac⁻는 두 산소로 금속을 물어 여섯 원자 고리를 만든다.",
    "chapters": [
     "enolates#chelates"
    ]
   },
   {
    "ko": "탄소 나노튜브",
    "en": "carbon nanotube, CNT",
    "abbr": "",
    "def": "그래핀을 원통으로 만 탄소 동소체. 말린 방향(키랄성)에 따라 금속 또는 반도체가 된다.",
    "chapters": [
     "aromaticity#polycyclic"
    ]
   },
   {
    "ko": "탄소 양이온",
    "en": "carbocation",
    "abbr": "",
    "def": "결합 셋, 전자 6개와 빈 p 오비탈을 가진 양전하 탄소 화학종. sp² 평면이며 3차 > 2차 > 1차 > 메틸 순으로 안정하다.",
    "chapters": [
     "reactions#intermediates"
    ]
   },
   {
    "ko": "탄소 양이온 재배열",
    "en": "carbocation rearrangement",
    "abbr": "",
    "def": "탄소 양이온 옆 탄소의 수소나 알킬기가 결합 전자쌍째 이동해 더 안정한 양이온이 되는 과정(1,2-이동). E1·SN1에서 골격이 바뀐 생성물을 낳는다.",
    "chapters": [
     "elimination#e1"
    ]
   },
   {
    "ko": "탄소 음이온",
    "en": "carbanion",
    "abbr": "",
    "def": "결합 셋과 비공유쌍을 가진 음전하 탄소 화학종. 알킬기가 많을수록 불안정하고 공명·s 성질·전기 음성 원자가 안정화한다.",
    "chapters": [
     "reactions#intermediates"
    ]
   },
   {
    "ko": "탈기체",
    "en": "outgassing",
    "abbr": "",
    "def": "재료에 녹아 있거나 흡착된 휘발성 성분이 진공·가열 중에 빠져나오는 현상. 실리콘 부품의 저분자 고리 실록산이 대표적인 오염원이다.",
    "chapters": [
     "organosilicon#siloxane"
    ]
   },
   {
    "ko": "탈보호",
    "en": "deprotection",
    "abbr": "",
    "def": "보호기를 떼어 원래의 작용기를 되살리는 반응. 레지스트에서는 산 촉매로 tert-뷰틸 에스터가 카복실산이 되어 현상액에 녹게 된다.",
    "chapters": [
     "acids-bases#resist"
    ]
   },
   {
    "ko": "탈염화수소",
    "en": "dehydrochlorination",
    "abbr": "",
    "def": "HCl이 빠져 이중 결합이 생기는 제거. PVC는 약 200 °C에서 연쇄적 탈염화수소로 폴리엔과 부식성 HCl을 낸다.",
    "chapters": [
     "elimination#resist"
    ]
   },
   {
    "ko": "탈카복실화",
    "en": "decarboxylation",
    "abbr": "",
    "def": "카복실기가 CO₂로 떨어져 나가는 반응. β-케토산과 말론산은 여섯 원자 고리 전이 상태를 거쳐 가열만으로 쉽게 CO₂를 잃는다.",
    "chapters": [
     "enolates#alkylation"
    ]
   },
   {
    "ko": "탈할로젠화 수소",
    "en": "dehydrohalogenation",
    "abbr": "",
    "def": "할로젠화 알킬에서 HX가 빠져 알켄이 생기는 β-제거. 보통 강염기로 E2를 일으켜 수행한다.",
    "chapters": [
     "elimination#e2"
    ]
   },
   {
    "ko": "토실레이트",
    "en": "tosylate, ROTs",
    "abbr": "",
    "def": "p-톨루엔설포네이트 에스터 ROTs. 알코올을 TsCl·피리딘으로 처리해 배열을 유지한 채 좋은 이탈기로 바꾼다.",
    "chapters": [
     "substitution#activation"
    ]
   },
   {
    "ko": "톱질 모형",
    "en": "sawhorse representation",
    "abbr": "",
    "def": "C–C 결합을 비스듬히 옆에서 보고 앞뒤 탄소의 치환기를 그린 입체 그림(sawhorse).",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "트랜스-이축 배열",
    "en": "trans-diaxial arrangement",
    "abbr": "",
    "def": "사이클로헥세인 이웃 탄소의 두 치환기가 모두 축 방향이고 서로 반대 면을 향하는 배열. 고리에서 E2가 일어나는 유일한 안티 동일 평면 배열이다.",
    "chapters": [
     "elimination#chair"
    ]
   },
   {
    "ko": "트로필륨 이온",
    "en": "tropylium ion",
    "abbr": "",
    "def": "일곱 고리에 π 전자 6개가 고르게 퍼진 방향족 양이온 C₇H₇⁺. 알킬벤젠 질량 스펙트럼의 m/z 91 기준 봉우리다.",
    "chapters": [
     "ms-ir#fragments"
    ]
   },
   {
    "ko": "트리플레이트",
    "en": "triflate",
    "abbr": "",
    "def": "트라이플루오로메테인설포네이트 에스터 ROTf. 짝산 pKa가 약 −14로 가장 좋은 이탈기 가운데 하나다.",
    "chapters": [
     "substitution#activation"
    ]
   },
   {
    "ko": "특성 흡수",
    "en": "characteristic absorption",
    "abbr": "",
    "def": "특정 작용기가 분자 구조와 거의 상관없이 정해진 파수 범위에서 보이는 흡수띠. 예: C=O 1650–1850, O–H 3200–3650 cm⁻¹.",
    "chapters": [
     "ms-ir#ir-groups"
    ]
   },
   {
    "ko": "파라",
    "en": "para, p-",
    "abbr": "",
    "def": "벤젠 고리에서 기준 치환기의 맞은편 자리(1,4-관계). p-로 줄여 쓴다.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "파수",
    "en": "wavenumber",
    "abbr": "",
    "def": "파장의 역수 1/λ(cm⁻¹). 진동수·광자 에너지에 비례하며 IR 스펙트럼의 가로축으로 쓴다.",
    "chapters": [
     "ms-ir#vibrations"
    ]
   },
   {
    "ko": "팔전자 규칙",
    "en": "octet rule",
    "abbr": "",
    "def": "2주기 원자는 공유·비공유 전자쌍을 합쳐 바깥 껍질 전자 8개(수소는 2개)를 가질 때 안정하다는 경험 규칙.",
    "chapters": [
     "structure-bonding#lewis"
    ]
   },
   {
    "ko": "팝콘 균열",
    "en": "popcorn cracking",
    "abbr": "",
    "def": "흡습한 패키지가 리플로 고온에서 내부 수분이 순간 기화해 계면이 벌어지고 깨지는 불량.",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "퍼옥실 라디칼",
    "en": "peroxyl radical",
    "abbr": "",
    "def": "ROO·. 탄소 라디칼이 O₂와 결합해 생기는 라디칼. 약한 C–H에서 H를 떼어 하이드로과산화물을 만든다.",
    "chapters": [
     "radicals#autoxidation"
    ]
   },
   {
    "ko": "페녹사이드 이온",
    "en": "phenoxide ion",
    "abbr": "",
    "def": "페놀의 짝염기 ArO⁻. 음전하가 고리의 오쏘·파라 탄소로 공명 분산되어 안정하다.",
    "chapters": [
     "alcohols-ethers#phenols"
    ]
   },
   {
    "ko": "페놀",
    "en": "phenol",
    "abbr": "",
    "def": "벤젠 고리 탄소에 –OH가 직접 붙은 화합물. 짝염기 페녹사이드가 공명으로 안정해 알코올보다 훨씬 센 산(pKa 약 10)이다.",
    "chapters": [
     "alcohols-ethers#structure"
    ]
   },
   {
    "ko": "편광계",
    "en": "polarimeter",
    "abbr": "",
    "def": "편광판, 시료관, 분석기로 이루어져 시료가 편광면을 돌린 각(관측 회전각)을 재는 장치.",
    "chapters": [
     "stereochemistry#optical"
    ]
   },
   {
    "ko": "편극성",
    "en": "polarizability",
    "abbr": "",
    "def": "외부 전기장에 의해 전자 구름이 일그러지는 정도. 큰 원자(I, S)는 편극성이 커서 좋은 친핵체가 된다.",
    "chapters": [
     "substitution#nucleophiles"
    ]
   },
   {
    "ko": "평균 몰 질량",
    "en": "average molar mass",
    "abbr": "",
    "def": "원소별 표준 원자량(동위원소 존재비 평균)으로 계산한 분자의 몰 질량(g/mol). 무게를 달아 몰수를 구할 때 쓴다.",
    "chapters": [
     "data-tables#calc"
    ]
   },
   {
    "ko": "평면 편광",
    "en": "plane-polarized light",
    "abbr": "",
    "def": "전기장이 한 평면에서만 진동하는 빛. 편광판을 지난 빛이며, 키랄 분자를 지나면 그 평면이 돈다.",
    "chapters": [
     "stereochemistry#optical"
    ]
   },
   {
    "ko": "포화 탄화수소",
    "en": "saturated hydrocarbon",
    "abbr": "",
    "def": "수소를 더 붙일 자리가 없는, 곧 탄소–탄소 다중 결합이 없는 탄화수소. 알케인과 사이클로알케인이 해당한다.",
    "chapters": [
     "alkanes#nomenclature"
    ]
   },
   {
    "ko": "폴리다이메틸실록산",
    "en": "polydimethylsiloxane, PDMS",
    "abbr": "",
    "def": "–[Si(CH₃)₂–O]– 단위가 이어진 실리콘 고분자(PDMS). 유리 전이 온도가 약 −125 °C로 낮아 넓은 온도에서 유연하다.",
    "chapters": [
     "organosilicon#siloxane"
    ]
   },
   {
    "ko": "폴리아마이드",
    "en": "polyamide",
    "abbr": "",
    "def": "아마이드 결합으로 단위체를 이은 고분자. 나일론과 아라미드가 있다.",
    "chapters": [
     "carboxylic-acids#polymers"
    ]
   },
   {
    "ko": "폴리아믹산",
    "en": "poly(amic acid), PAA",
    "abbr": "",
    "def": "이무수물과 다이아민이 실온에서 만드는 폴리이미드 전구체. 아마이드와 카복실산이 이웃해 있고 용매에 녹는다.",
    "chapters": [
     "carboxylic-acids#polymers"
    ]
   },
   {
    "ko": "폴리에스터",
    "en": "polyester",
    "abbr": "",
    "def": "에스터 결합으로 단위체를 이은 고분자. PET가 대표적이다.",
    "chapters": [
     "carboxylic-acids#polymers"
    ]
   },
   {
    "ko": "폴리이미드",
    "en": "polyimide, PI",
    "abbr": "",
    "def": "이미드 고리를 사슬에 가진 고분자. 내열성·절연성이 뛰어나 반도체 보호막과 재배선 절연막에 쓰인다.",
    "chapters": [
     "carboxylic-acids#polymers"
    ]
   },
   {
    "ko": "표준 자유 에너지 변화",
    "en": "standard free-energy change",
    "abbr": "",
    "def": "표준 상태에서 반응물과 생성물의 깁스 자유 에너지 차 ΔG°. ΔG° = −RT ln K이며 음이면 K > 1이다.",
    "chapters": [
     "reactions#energy"
    ]
   },
   {
    "ko": "푸리에 변환 NMR",
    "en": "FT-NMR",
    "abbr": "",
    "def": "라디오파 펄스로 모든 핵을 한꺼번에 흔들고 그 응답(FID)을 푸리에 변환해 스펙트럼을 얻는 방식(FT-NMR). 진동수를 훑는 연속파 방식보다 훨씬 빠르다.",
    "chapters": [
     "nmr#resonance"
    ]
   },
   {
    "ko": "푸아송 분포",
    "en": "Poisson distribution",
    "abbr": "",
    "def": "모든 사슬이 동시에 시작해 같은 확률로 자랄 때의 사슬 길이 분포. 리빙 중합에서 Đ ≈ 1 + 1/Xₙ을 준다.",
    "chapters": [
     "polymers#ionic-living"
    ]
   },
   {
    "ko": "퓨란",
    "en": "furan",
    "abbr": "",
    "def": "산소를 가진 5각 고리 방향족. O 비공유쌍 하나는 π계에, 하나는 고리 평면 안에 있다.",
    "chapters": [
     "aromaticity#heterocycles"
    ]
   },
   {
    "ko": "프랑크–콘돈 원리",
    "en": "Franck–Condon principle",
    "abbr": "",
    "def": "전자 전이는 약 10⁻¹⁵ s에 끝나 원자핵이 움직이지 못하므로 같은 핵 배치에서 수직으로 일어난다는 원리. 들뜬 상태의 높은 진동 준위에 도착하는 까닭이다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "프로스트 원",
    "en": "Frost circle",
    "abbr": "",
    "def": "반지름 2|β|인 원 안에 꼭짓점이 아래로 향한 정다각형을 넣어 고리 π 준위를 꼭짓점 높이로 읽는 작도법.",
    "chapters": [
     "aromaticity#huckel-rule"
    ]
   },
   {
    "ko": "프리델–크래프츠 아실화",
    "en": "Friedel–Crafts acylation",
    "abbr": "",
    "def": "산 염화물과 AlCl₃로 만든 아실륨 이온으로 방향족 고리에 아실기를 붙이는 반응. 재배열과 다중 치환이 없고 AlCl₃가 1당량 넘게 필요하다.",
    "chapters": [
     "aromatic-substitution#friedel-crafts"
    ]
   },
   {
    "ko": "프리델–크래프츠 알킬화",
    "en": "Friedel–Crafts alkylation",
    "abbr": "",
    "def": "할로젠화 알킬과 AlCl₃ 등으로 탄소 양이온을 만들어 방향족 고리에 알킬기를 붙이는 반응. 재배열·다중 알킬화·불활성 고리라는 한계가 있다.",
    "chapters": [
     "aromatic-substitution#friedel-crafts"
    ]
   },
   {
    "ko": "플로리 분포",
    "en": "Flory distribution, 최빈 분포",
    "abbr": "",
    "def": "단계 성장 중합의 사슬 길이 분포 n(x) = (1−p)p^(x−1)(최빈 분포). 분산도는 1 + p로 고분자량에서 2에 가깝다.",
    "chapters": [
     "polymers#step"
    ]
   },
   {
    "ko": "플로리–폭스 식",
    "en": "Flory–Fox equation",
    "abbr": "",
    "def": "분자량에 따른 유리 전이 온도 Tg = Tg,∞ − K/Mₙ. 사슬 끝이 만드는 여분의 자유 부피를 반영한다.",
    "chapters": [
     "polymers#network"
    ]
   },
   {
    "ko": "플로리–허긴스 상호 작용 변수",
    "en": "Flory–Huggins χ",
    "abbr": "",
    "def": "두 고분자 단위 사이의 상호 작용을 kT 단위로 나타낸 값 χ. 양수이면 섞이지 않으려 한다.",
    "chapters": [
     "polymers#semi"
    ]
   },
   {
    "ko": "플루오로카본 고분자",
    "en": "fluorocarbon polymer",
    "abbr": "",
    "def": "플라스마 속 CF₂·, CF· 같은 라디칼이 표면에서 결합해 쌓이는 (CF₂)ₙ 형태의 막. 식각을 막아 측벽 보호와 선택비를 만든다.",
    "chapters": [
     "radicals#plasma"
    ]
   },
   {
    "ko": "피롤",
    "en": "pyrrole",
    "abbr": "",
    "def": "N–H를 가진 5각 고리 6π 방향족. N 비공유쌍이 π계에 들어가 염기성이 매우 약하고 고리 탄소는 전자가 풍부하다.",
    "chapters": [
     "aromaticity#heterocycles"
    ]
   },
   {
    "ko": "피리딘",
    "en": "pyridine",
    "abbr": "",
    "def": "벤젠의 CH 하나를 N으로 바꾼 6π 방향족. N 비공유쌍이 평면 안 sp² 오비탈에 있어 염기다(짝산 pKa 5.2).",
    "chapters": [
     "aromaticity#heterocycles"
    ]
   },
   {
    "ko": "피셔 에스터화",
    "en": "Fischer esterification",
    "abbr": "",
    "def": "카복실산과 알코올을 산 촉매로 가열해 에스터와 물을 얻는 가역 반응. K는 약 4로, 과량 알코올과 물 제거로 수율을 높인다.",
    "chapters": [
     "carboxylic-acids#esters"
    ]
   },
   {
    "ko": "피셔 투영",
    "en": "Fischer projection",
    "abbr": "",
    "def": "입체 중심을 십자로 나타낸 투영식. 가로선은 보는 사람 쪽으로, 세로선은 종이 뒤로 향한다고 약속하며 당과 아미노산에 쓴다.",
    "chapters": [
     "stereochemistry#diastereomers"
    ]
   },
   {
    "ko": "하메트 식",
    "en": "Hammett equation",
    "abbr": "",
    "def": "log(kX/kH) = ρσ. 치환기 상수 σ와 반응 상수 ρ로 방향족 치환기의 전자 효과를 정량화한다. EAS에서는 σ⁺를 쓴다.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "하몬드 가설",
    "en": "Hammond postulate",
    "abbr": "",
    "def": "에너지가 비슷한 두 상태는 구조도 비슷하다는 가설. 발열 단계의 전이 상태는 반응물을, 흡열 단계의 전이 상태는 생성물을 닮는다.",
    "chapters": [
     "reactions#hammond"
    ]
   },
   {
    "ko": "하이드라이드 이동",
    "en": "hydride shift",
    "abbr": "",
    "def": "이웃 탄소의 수소가 결합 전자쌍째(H⁻처럼) 양이온 탄소로 옮겨 가는 1,2-이동. 2차 양이온이 3차가 되는 경우가 많다.",
    "chapters": [
     "reactions#intermediates"
    ]
   },
   {
    "ko": "하이드라이드 환원",
    "en": "hydride reduction",
    "abbr": "",
    "def": "NaBH₄·LiAlH₄가 내주는 H⁻가 카보닐 탄소를 공격해 알데하이드를 1° 알코올, 케톤을 2° 알코올로 바꾸는 반응.",
    "chapters": [
     "alcohols-ethers#preparation"
    ]
   },
   {
    "ko": "하이드라이드성 수소",
    "en": "hydridic hydrogen",
    "abbr": "",
    "def": "자기보다 전기 음성도가 낮은 원자(Si, B, Al 등)에 붙어 δ−를 띠는 수소. 양성자가 아니라 하이드라이드처럼 물·산소와 반응한다.",
    "chapters": [
     "organosilicon#si-c"
    ]
   },
   {
    "ko": "하이드로과산화물",
    "en": "hydroperoxide",
    "abbr": "",
    "def": "ROOH. 자동 산화의 생성물. 약한 O–O 결합이 끊어져 새 라디칼을 내놓으므로 산화를 자기 촉매적으로 가속하고, 농축되면 폭발 위험이 있다.",
    "chapters": [
     "radicals#autoxidation"
    ]
   },
   {
    "ko": "하이드로실릴화",
    "en": "hydrosilylation",
    "abbr": "",
    "def": "Si–H 결합을 C=C에 더하는 반응. 백금 촉매로 Si가 끝 탄소에 붙으며, 부가 경화 실리콘의 가교 반응이다.",
    "chapters": [
     "alkenes#hydration"
    ]
   },
   {
    "ko": "할로젠–금속 교환",
    "en": "halogen–metal exchange",
    "abbr": "",
    "def": "유기 할라이드와 유기금속(주로 n-BuLi)이 할로젠과 금속을 맞바꾸는 반응. 더 안정한 탄소 음이온이 금속을 갖는 방향으로 간다.",
    "chapters": [
     "organosilicon#organometal"
    ]
   },
   {
    "ko": "할로젠화 알킬",
    "en": "alkyl halide",
    "abbr": "",
    "def": "알케인의 수소 하나를 할로젠(F, Cl, Br, I)으로 바꾼 화합물 R–X. X를 단 탄소에 붙은 탄소 수에 따라 메틸·1차·2차·3차로 나눈다.",
    "chapters": [
     "substitution#alkyl-halides"
    ]
   },
   {
    "ko": "할로폼",
    "en": "haloform",
    "abbr": "",
    "def": "HCX₃ 형태의 화합물(클로로폼, 브로모폼, 아이오도폼). 할로폼 반응의 부산물이다.",
    "chapters": [
     "enolates#halogenation"
    ]
   },
   {
    "ko": "할로폼 반응",
    "en": "haloform reaction",
    "abbr": "",
    "def": "메틸 케톤이 염기와 과량의 X₂에서 CX₃ 케톤이 된 뒤 OH⁻ 공격으로 카복실산 이온과 HCX₃로 쪼개지는 반응. I₂를 쓰면 노란 CHI₃가 침전한다.",
    "chapters": [
     "enolates#halogenation"
    ]
   },
   {
    "ko": "할로하이드린",
    "en": "halohydrin",
    "abbr": "",
    "def": "이웃한 두 탄소에 할로젠과 OH가 붙은 화합물. 물 속에서 X₂를 더하면 OH가 더 치환된 탄소에 anti로 붙어 생긴다.",
    "chapters": [
     "alkenes#halogenation"
    ]
   },
   {
    "ko": "합성 등가체",
    "en": "synthetic equivalent",
    "abbr": "",
    "def": "신톤의 역할을 실제로 하는 시약. R⁺ 신톤의 합성 등가체는 R–Br, R–C≡C⁻ 신톤의 등가체는 아세틸라이드 소듐이다.",
    "chapters": [
     "alkynes-synthesis#synthesis"
    ]
   },
   {
    "ko": "합체 온도",
    "en": "coalescence temperature, Tc",
    "abbr": "",
    "def": "교환하는 두 NMR 봉우리가 하나로 합치는 온도. 이 온도에서 교환 속도 k = πΔν/√2로 활성화 자유 에너지를 구한다.",
    "chapters": [
     "carboxylic-acids#amides"
    ]
   },
   {
    "ko": "항산화제",
    "en": "antioxidant",
    "abbr": "",
    "def": "ROO· 같은 라디칼에 H를 내주어 연쇄를 끊는 물질. 장애 페놀(BHT, 토코페롤)이 대표적이며 한 분자가 사슬 약 두 개를 끊는다.",
    "chapters": [
     "radicals#autoxidation"
    ]
   },
   {
    "ko": "해리성 전자 부착",
    "en": "dissociative electron attachment",
    "abbr": "",
    "def": "저에너지 전자가 분자에 붙어 음이온·중성 라디칼이 되면서 결합이 끊어지는 과정. EUV에서 설포늄 PAG가 분해되는 주된 경로다.",
    "chapters": [
     "photoresists#euv"
    ]
   },
   {
    "ko": "해먼드 가설",
    "en": "Hammond postulate",
    "abbr": "",
    "def": "흡열 단계의 전이 상태는 생성물을, 발열 단계의 전이 상태는 반응물을 닮는다는 원리. 양이온이 안정할수록 SN1 장벽이 낮다.",
    "chapters": [
     "substitution#sn1"
    ]
   },
   {
    "ko": "해중합",
    "en": "depolymerization",
    "abbr": "",
    "def": "사슬 끝에서 단량체가 하나씩 떨어져 나가는 중합의 역반응. PMMA·α-메틸스타이렌이 가열 시 단량체로 돌아간다.",
    "chapters": [
     "polymers#network"
    ]
   },
   {
    "ko": "핵 오버하우저 효과",
    "en": "nuclear Overhauser effect, NOE",
    "abbr": "",
    "def": "한 핵(¹H)의 스핀 분포를 흔들면 공간적으로 가까운 다른 핵(¹³C)의 신호 세기가 바뀌는 효과(NOE). 디커플링한 ¹³C에서 H가 붙은 탄소의 신호를 키운다.",
    "chapters": [
     "nmr#carbon"
    ]
   },
   {
    "ko": "핵자기 공명",
    "en": "nuclear magnetic resonance, NMR",
    "abbr": "",
    "def": "자기장 속에서 갈라진 핵스핀 준위 사이를 라디오파가 일으키는 공명 흡수. 분자 안 수소·탄소의 환경과 연결 관계를 알려 주는 분광법(NMR)의 바탕이다.",
    "chapters": [
     "nmr#resonance"
    ]
   },
   {
    "ko": "헤미아세탈",
    "en": "hemiacetal",
    "abbr": "",
    "def": "카보닐에 알코올 한 분자가 첨가해 같은 탄소에 OH와 OR이 붙은 화합물. 사슬형은 대개 불안정하지만 당처럼 5·6원 고리형은 안정하다.",
    "chapters": [
     "aldehydes-ketones#acetal"
    ]
   },
   {
    "ko": "헤테로 고리 아민",
    "en": "heterocyclic amine",
    "abbr": "",
    "def": "질소가 고리 원자로 들어간 아민. 피리딘·피롤·이미다졸·피페리딘처럼 고유 이름을 쓴다.",
    "chapters": [
     "amines#structure"
    ]
   },
   {
    "ko": "헤테로 방향족 화합물",
    "en": "heteroaromatic compound",
    "abbr": "",
    "def": "고리에 N·O·S 같은 헤테로 원자를 포함한 방향족 화합물. 피리딘, 피롤, 퓨란, 싸이오펜, 이미다졸 등.",
    "chapters": [
     "aromaticity#heterocycles"
    ]
   },
   {
    "ko": "헤테로 원자",
    "en": "heteroatom",
    "abbr": "",
    "def": "유기 분자에서 탄소와 수소가 아닌 원자(O, N, S, 할로젠 등). 휘켈법에서는 h, k 매개변수로 전기 음성도와 결합 세기를 보정한다.",
    "chapters": [
     "conjugation#huckel"
    ]
   },
   {
    "ko": "헥 반응",
    "en": "Heck reaction",
    "abbr": "",
    "def": "아릴·바이닐 할라이드와 알켄을 팔라듐 촉매와 염기로 이어 치환 알켄을 만드는 반응. 삽입과 β-수소 제거를 거쳐 주로 (E)체가 된다.",
    "chapters": [
     "organosilicon#coupling"
    ]
   },
   {
    "ko": "헨더슨–하셀바흐 식",
    "en": "Henderson–Hasselbalch equation",
    "abbr": "",
    "def": "pH = pKa + log([A⁻]/[HA]). pH가 정해진 용액에서 산의 이온화 비율을 구하는 식.",
    "chapters": [
     "acids-bases#pka"
    ]
   },
   {
    "ko": "헬–폴하르트–젤린스키 반응",
    "en": "Hell–Volhard–Zelinskii, HVZ",
    "abbr": "",
    "def": "HVZ 반응. Br₂와 PBr₃로 카복실산을 산 브로마이드로 바꾸어 엔올을 거치게 해 α-브로모 카복실산을 만든다.",
    "chapters": [
     "enolates#halogenation"
    ]
   },
   {
    "ko": "형광",
    "en": "fluorescence",
    "abbr": "",
    "def": "S₁에서 S₀로 빛을 내며 돌아오는 스핀 허용 복사 전이. 나노초 수명이며 흡수보다 긴 파장에 나타난다.",
    "chapters": [
     "photoresists#excited"
    ]
   },
   {
    "ko": "형식 전하",
    "en": "formal charge",
    "abbr": "",
    "def": "결합 전자를 두 원자가 똑같이 나눈다고 가정했을 때 원자에 매기는 전하. FC = V − N − B/2. 분자 안의 합은 전체 전하와 같다.",
    "chapters": [
     "structure-bonding#lewis"
    ]
   },
   {
    "ko": "형태",
    "en": "conformation",
    "abbr": "",
    "def": "단일 결합의 회전만으로 서로 바뀌는 원자의 공간 배열(conformation).",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "형태 고정",
    "en": "conformational locking",
    "abbr": "",
    "def": "tert-뷰틸처럼 A 값이 매우 큰 치환기가 적도에 머물러 고리 뒤집기를 사실상 막는 현상.",
    "chapters": [
     "alkanes#disubstituted"
    ]
   },
   {
    "ko": "형태 이성질체",
    "en": "conformer",
    "abbr": "",
    "def": "결합 회전으로 서로 바뀌는 각각의 형태(conformer). 장벽이 낮아 보통 따로 분리할 수 없다.",
    "chapters": [
     "alkanes#conformations"
    ]
   },
   {
    "ko": "호변 이성",
    "en": "tautomerism",
    "abbr": "",
    "def": "양성자 하나와 π 결합의 자리가 함께 옮겨 가며 두 구조 이성질체가 빠르게 서로 바뀌는 현상. 공명과 달리 원자 위치가 바뀐다.",
    "chapters": [
     "alkynes-synthesis#addition"
    ]
   },
   {
    "ko": "호변 이성질체",
    "en": "tautomer",
    "abbr": "",
    "def": "호변 이성으로 서로 바뀌는 두 구조 이성질체. 케톤과 그 엔올이 대표적이다.",
    "chapters": [
     "alkynes-synthesis#addition"
    ]
   },
   {
    "ko": "호프만 생성물",
    "en": "Hofmann product",
    "abbr": "",
    "def": "제거 반응에서 덜 치환된 알켄이 주생성물일 때 그 생성물. 부피 큰 염기, 나쁜 이탈기(F), 트라이메틸암모늄 이탈기에서 나타난다.",
    "chapters": [
     "elimination#regio"
    ]
   },
   {
    "ko": "호프만 제거",
    "en": "Hofmann elimination",
    "abbr": "",
    "def": "사차 암모늄 수산화물을 가열해 트라이알킬아민을 이탈기로 하는 E2 제거. 덜 치환된 알켄(호프만 생성물)을 주로 준다.",
    "chapters": [
     "elimination#regio"
    ]
   },
   {
    "ko": "혼성 오비탈",
    "en": "hybrid orbital",
    "abbr": "",
    "def": "한 원자의 s와 p 오비탈을 섞어 만든 같은 모양의 새 오비탈. sp³(109.5°), sp²(120°), sp(180°)가 결합 방향을 설명한다.",
    "chapters": [
     "structure-bonding#hybrid"
    ]
   },
   {
    "ko": "홀전자",
    "en": "unpaired electron",
    "abbr": "",
    "def": "원자나 분자의 오비탈에 짝 없이 혼자 들어 있는 전자. 홀전자를 가진 화학종이 라디칼이다.",
    "chapters": [
     "radicals#structure"
    ]
   },
   {
    "ko": "화학 기상 증착",
    "en": "CVD",
    "abbr": "",
    "def": "CVD. 기체 전구체가 가열된 표면에서 반응·분해해 고체 박막을 남기는 공정. 구리 CVD에는 Cu(hfac)(tmvs)가 쓰인다.",
    "chapters": [
     "enolates#chelates"
    ]
   },
   {
    "ko": "화학 선택성",
    "en": "chemoselectivity",
    "abbr": "",
    "def": "한 분자 안의 여러 작용기 가운데 특정한 하나만 골라 반응하는 성질. 예: NaBH₄는 케토 에스터의 케톤만 환원한다.",
    "chapters": [
     "aldehydes-ketones#hydride"
    ]
   },
   {
    "ko": "화학 에피택시",
    "en": "chemoepitaxy",
    "abbr": "",
    "def": "기판에 L₀의 정수배 피치로 화학적 친화 줄무늬를 그려 블록 공중합체를 정렬하는 DSA 방식. 피치를 배가한다.",
    "chapters": [
     "polymers#semi"
    ]
   },
   {
    "ko": "화학 이온화",
    "en": "chemical ionization, CI",
    "abbr": "",
    "def": "메테인 등 시약 기체의 이온(CH₅⁺)이 분자에 양성자를 주어 [M+H]⁺를 만드는 부드러운 이온화법(CI). 조각이 적다.",
    "chapters": [
     "ms-ir#ms-basics"
    ]
   },
   {
    "ko": "화학 증폭",
    "en": "chemical amplification",
    "abbr": "",
    "def": "노광으로 생긴 산 하나가 굽기 동안 보호기 탈보호 반응을 수백 번 촉매해 광화학 효과를 증폭하는 레지스트 원리. KrF·ArF·EUV 레지스트의 기본이다.",
    "chapters": [
     "elimination#resist"
    ]
   },
   {
    "ko": "화학 증폭형 감광막",
    "en": "chemically amplified resist, CAR",
    "abbr": "",
    "def": "광산 발생제가 만든 산이 노광 후 굽기 동안 촉매로 보호기를 여러 번 떼어 내는 감광막. 감도가 높지만 염기 오염에 민감하다.",
    "chapters": [
     "amines#semi"
    ]
   },
   {
    "ko": "화학 증폭형 레지스트",
    "en": "chemically amplified resist, CAR",
    "abbr": "",
    "def": "노광으로 생긴 산이 노광 후 굽기 동안 촉매로 보호기 수십–수백 개를 떼어 내 용해도를 바꾸는 감광막. KrF·ArF·EUV 공정의 주력 레지스트다.",
    "chapters": [
     "acids-bases#resist"
    ]
   },
   {
    "ko": "화학량론 비",
    "en": "stoichiometric ratio",
    "abbr": "",
    "def": "단계 성장 중합에서 적게 든 작용기 수와 많이 든 작용기 수의 비 r = N_A/N_B ≤ 1. 1에서 멀수록 분자량 상한이 낮다.",
    "chapters": [
     "polymers#step"
    ]
   },
   {
    "ko": "화학적 동등",
    "en": "chemically equivalent",
    "abbr": "",
    "def": "대칭 조작이나 빠른 회전·고리 뒤집힘으로 서로 바뀔 수 있어 같은 환경에 놓인 핵의 관계. 화학적으로 동등한 핵은 한 신호를 준다.",
    "chapters": [
     "nmr#equivalence"
    ]
   },
   {
    "ko": "화학적 이동",
    "en": "chemical shift",
    "abbr": "",
    "def": "기준 물질(TMS)과의 공명 진동수 차이를 분광기 진동수로 나눈 값 δ(ppm). 자기장 세기와 무관하며 ¹H는 대개 0–12 ppm, ¹³C는 0–220 ppm이다.",
    "chapters": [
     "nmr#shift"
    ]
   },
   {
    "ko": "확률적 결함",
    "en": "stochastic defect",
    "abbr": "",
    "def": "평균 조건은 맞는데 광자·분자 수 요동 때문에 가끔 생기는 막힌 홀·끊어진 선·붙은 선 같은 결함. EUV 수율의 주요 한계다.",
    "chapters": [
     "photoresists#euv"
    ]
   },
   {
    "ko": "환산 질량",
    "en": "reduced mass",
    "abbr": "",
    "def": "두 질량이 함께 진동할 때 한 질량처럼 다룰 수 있게 한 값 μ = m₁m₂/(m₁ + m₂). 가벼운 원자에 가깝다.",
    "chapters": [
     "ms-ir#vibrations"
    ]
   },
   {
    "ko": "환원성 아미노화",
    "en": "reductive amination",
    "abbr": "",
    "def": "카보닐과 아민으로 이민(이미늄)을 만들면서 NaBH₃CN 등으로 바로 환원해 아민을 얻는 반응.",
    "chapters": [
     "aldehydes-ketones#imine"
    ]
   },
   {
    "ko": "환원적 제거",
    "en": "reductive elimination",
    "abbr": "",
    "def": "금속에 시스로 붙은 두 리간드가 결합을 만들며 떨어지는 기본 단계. 산화수가 2 줄고(Pdᴵᴵ → Pd⁰) 촉매가 되살아난다.",
    "chapters": [
     "organosilicon#coupling"
    ]
   },
   {
    "ko": "환원적 후처리",
    "en": "reductive workup",
    "abbr": "",
    "def": "오존화물을 Me₂S나 Zn/아세트산으로 환원해 알데하이드와 케톤을 얻는 처리. H₂O₂를 쓰면 알데하이드가 카복실산이 된다.",
    "chapters": [
     "alkenes#cleavage"
    ]
   },
   {
    "ko": "활성 메틸렌 화합물",
    "en": "active methylene compound",
    "abbr": "",
    "def": "두 전자 끄는 기(C=O, CN 등) 사이에 CH₂가 있어 pKa가 9–13 정도로 낮은 화합물(말론산 다이에틸, 아세토아세트산 에틸, 아세틸아세톤).",
    "chapters": [
     "enolates#enolate"
    ]
   },
   {
    "ko": "활성화 에너지",
    "en": "activation energy",
    "abbr": "",
    "def": "아레니우스 식 k = A exp(−Ea/RT)의 Ea. 온도에 따른 속도 변화의 민감도를 정하며 대략 ΔH‡ + RT이다.",
    "chapters": [
     "reactions#control"
    ]
   },
   {
    "ko": "활성화 자유 에너지",
    "en": "free energy of activation",
    "abbr": "",
    "def": "반응물에서 전이 상태까지의 자유 에너지 차 ΔG‡. 아이링 식으로 속도 상수를 정하며 25 °C에서 5.71 kJ/mol마다 10배씩 바뀐다.",
    "chapters": [
     "reactions#energy"
    ]
   },
   {
    "ko": "활성화기",
    "en": "activating group",
    "abbr": "",
    "def": "벤젠보다 EAS를 빠르게 하는 치환기. –NH₂, –OH, –OR, –NHCOR, 알킬기 등이며 모두 오르토·파라 지향이다.",
    "chapters": [
     "aromatic-substitution#substituent-effects"
    ]
   },
   {
    "ko": "회전 장애 이성질체",
    "en": "atropisomer",
    "abbr": "",
    "def": "단일 결합 둘레의 회전이 큰 치환기에 막혀 따로 분리되는 입체 이성질체(atropisomer). BINAP·BINOL이 대표적이다.",
    "chapters": [
     "stereochemistry#heteroatoms"
    ]
   },
   {
    "ko": "후경화",
    "en": "post-mold cure, PMC",
    "abbr": "",
    "def": "성형 뒤 더 높은 온도나 긴 시간 굽어 남은 작용기를 반응시켜 경화도와 Tg를 올리는 공정(PMC).",
    "chapters": [
     "alcohols-ethers#curing"
    ]
   },
   {
    "ko": "휘켈 규칙",
    "en": "Hückel's rule",
    "abbr": "",
    "def": "평면 단일 고리의 모든 원자가 p 오비탈로 공액될 때 π 전자가 4n+2개이면 방향족, 4n개이면 반방향족이라는 규칙.",
    "chapters": [
     "aromaticity#huckel-rule"
    ]
   },
   {
    "ko": "휘켈 분자 오비탈법",
    "en": "Hückel molecular orbital method, HMO",
    "abbr": "",
    "def": "σ 골격을 무시하고 π 전자만 다루며, 같은 쿨롱 적분 α와 이웃 사이의 공명 적분 β만 남겨 π 분자 오비탈을 구하는 근사법. 에너지는 E = α + xβ.",
    "chapters": [
     "conjugation#huckel"
    ]
   },
   {
    "ko": "흡광도",
    "en": "absorbance",
    "abbr": "",
    "def": "입사광 세기와 투과광 세기 비의 상용로그 A = log(I₀/I). 묽은 용액에서 농도와 빛의 경로 길이에 비례한다.",
    "chapters": [
     "conjugation#uv-vis"
    ]
   }
  ]
 }
});
