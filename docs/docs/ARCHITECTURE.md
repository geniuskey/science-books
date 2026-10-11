# SciBook 아키텍처

`science.euiyun.com`은 **대학 강의 한 과목 = 교과서 한 권**인 인터랙티브 과학 교과서 플랫폼이다.
하나의 저장소(모노레포)에 공통 엔진과 여러 과목의 콘텐츠를 함께 두고, GitHub Pages로 정적 배포한다.

```
science.euiyun.com/                      ← index.html (플랫폼 홈: 과목 서가)
science.euiyun.com/general-chemistry/    ← 과목 홈 (목차·강의 계획)
science.euiyun.com/general-chemistry/chapters/gases.html
science.euiyun.com/general-physics/      ← (예정) 같은 엔진, 다른 콘텐츠
```

## 1. 세 층 구조

| 층 | 위치 | 내용 | 바뀌는 빈도 |
|---|---|---|---|
| **엔진(core)** | `engine/js/scibook.js`, `engine/css/scibook.css` | 과목과 무관한 레이아웃·내비게이션·검색·테마, 교과서 컴포넌트(자동 번호 절/예제/그림, 자동 채점 연습문제, 드릴, 퀴즈, 진도 저장), 시뮬레이터 헬퍼(canvas·chart·loop·three.js), KaTeX 로더 | 드묾. 모든 과목에 영향 |
| **도메인 라이브러리(lib)** | `engine/lib/*.js` | 여러 과목이 함께 쓰는 분야별 계산·위젯. `elements.js`(원소 자료), `chem.js`(화학식 해석·몰 질량·반응식 균형·주기율표 위젯·VSEPR·3D 분자). 예정: `phys.js`(벡터·적분기·단위), `mech.js`(자유 물체도·보 해석) | 가끔. 해당 분야 과목에만 영향 |
| **콘텐츠(course)** | `<course-id>/` | `course.json`(매니페스트: 제목·색·부/장 목록), `index.html`(과목 홈), `chapters/*.html`(본문·그림·시뮬레이터·문제) | 자주 |

규칙:
- 콘텐츠는 엔진과 lib의 **공개 API만** 쓴다(`docs/CONTENT-GUIDE.md` 5절). 엔진 내부 구조에 의존하지 않는다.
- 엔진은 과목 이름·장 목록·색을 하드코딩하지 않는다. 전부 매니페스트에서 온다.
- 과목 하나에서만 쓰는 시뮬레이터 코드는 그 장의 `<script>`에 둔다. 두 과목 이상에서 같은 기능이 필요해지면 그때 `engine/lib/`로 올린다.

## 2. 매니페스트와 생성 파일

```
catalog.json  ──┐                      ┌──► catalog.js           (SB.registerCatalog)
                ├─► tools/build.py ────┼──► <course>/course.js    (SB.registerCourse, 챕터 통계 포함)
<course>/course.json ┘                 ├──► index.html, <course>/index.html 의 정적 카드 (<!-- sb:shelf/toc -->)
<course>/chapters/*.html ──────────────┼──► 각 페이지의 canonical·OG·JSON-LD (<!-- sb:seo -->)
                                       └──► sitemap.xml
```
- **사람이 고치는 파일**: `catalog.json`, `course.json`, HTML 본문, 엔진·lib.
- **생성 파일**(직접 고치지 않음): `catalog.js`, `<course>/course.js`, `sb:*` 주석 구역 안의 내용, `sitemap.xml`.
- 장 파일이 존재하면 "공개", 없으면 매니페스트에 있어도 "준비 중"으로 표시된다. 목차를 먼저 확정하고 장을 하나씩 채우는 흐름을 지원한다.
- `build.py --check`는 CI에서 생성 파일이 최신인지와 콘텐츠 규칙(필수 head 태그, 숫자 정답, 중복 id 등)을 검사한다.

## 3. 페이지 실행 순서

1. `<head>`에서 `engine/js/scibook.js` 로드 → 전역 `SB` 생성, 테마 복원, 엔진 위치(`SB.engineBase`) 계산.
2. `../course.js` → `SB.registerCourse(manifest)` → 과목 색(`accent`)을 CSS 변수로 주입.
3. (선택) `engine/lib/elements.js`, `engine/lib/chem.js`, three.js.
4. `DOMContentLoaded` → 엔진이 상단바·서랍·목차·번호·연습문제 위젯을 만들고 KaTeX(+mhchem)를 비동기로 불러와 렌더.
5. `</body>` 앞 페이지 스크립트가 `SB.*`, `Chem.*`로 시뮬레이터를 만든다.

빌드 단계 없이 정적 파일만으로 동작하며, ES module을 쓰지 않아 `file://`로 열어도 본문·시뮬레이터가 동작한다(검색만 HTTP 필요).

## 4. 학습 기록

`localStorage["scibook:<course-id>"] = { solved: {"<slug>:<문제id>": 1}, quiz: {...}, visited: {slug: ts} }`.
과목 홈 카드와 챕터 서랍에 해결 수가 표시된다. 서버 저장은 하지 않는다(로그인 없음).
문제 id는 `data-id`가 없으면 장 안의 순서(`p1`, `p2`…)이므로, 이미 공개된 장의 중간에 문제를 끼워 넣을 때는 기존 문제에 `data-id`를 붙여 기록을 보존한다.

## 5. 엔진 버전 관리

`SB.version`(푸터에 표시). 모든 과목이 같은 엔진 사본을 공유하므로 엔진 변경은 곧 전 과목 배포다.
- 하위 호환 변경(새 컴포넌트·헬퍼 추가): 부 버전 올림.
- 마크업 규약이나 API를 바꾸는 변경: 주 버전 올림 + 모든 과목의 장을 같은 커밋에서 갱신 + `tools/smoke.mjs` 전체 통과.

## 6. 새 과목 추가

```bash
python3 tools/new_course.py general-physics "일반물리학" "General Physics" --field physics
# general-physics/course.json 의 parts/chapters 작성 → 장 파일 작성
python3 tools/build.py
```
분야 라이브러리가 필요하면 `engine/lib/<분야>.js`를 만들고 매니페스트 `libs`에 적는다. 확장 계획은 [ROADMAP.md](ROADMAP.md).

## 7. books.euiyun.com과의 관계

SciBook은 books.euiyun.com 시리즈의 디자인 토큰과 시뮬레이터 헬퍼(SensorBook 계열)를 이어받았다. 독자 의견은 같은 중앙 창구(`books.euiyun.com/feedback.html?book=<course-id>`)로 모은다. 허브의 `data/books.json`에 SciBook 과목을 등록하면 전체 서가와 실험 검색에 함께 노출할 수 있다.
