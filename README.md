# SciBook — 대학 인터랙티브 과학 교과서

[science.euiyun.com](https://science.euiyun.com/) — **대학 강의 과목 하나가 교과서 한 권**이 되는 한국어 인터랙티브 과학 교과서 플랫폼입니다.
읽고, 수식을 따라가고, 시뮬레이터로 직접 실험하며 이해합니다. [books.euiyun.com](https://books.euiyun.com/) 시리즈의 자매 사이트입니다.

| 교과서 | 주소 | 상태 |
|---|---|---|
| 일반화학 (General Chemistry) | `/general-chemistry/` | 초판 — 6부 20장 + 부록 3 |
| 일반물리학 · 유기화학 · 정역학 · 동역학 · 유체역학 | — | 예정 ([로드맵](docs/ROADMAP.md)) |

## 구조

```
engine/                 공통 교과서 엔진 (과목 무관)
  js/scibook.js         레이아웃·검색·테마·자동 번호·자동 채점 연습문제·드릴·진도·시뮬레이터 헬퍼
  css/scibook.css       디자인 토큰(라이트/다크)과 컴포넌트
  lib/elements.js       원소 118종 자료 (화학·물리 공용)
  lib/chem.js           화학 라이브러리: 화학식·몰 질량·반응식 균형·주기율표·VSEPR·3D 분자
general-chemistry/      과목 = 교과서 한 권
  course.json           매니페스트(부·장 목록, 색) ← 사람이 고침
  course.js             생성 파일
  index.html            과목 홈(목차·강의 계획)
  chapters/*.html       장 본문
catalog.json            플랫폼의 과목 목록
index.html              플랫폼 홈(서가·대표 실험·읽는 순서)
home.css, home.js       플랫폼 홈 전용 스타일·책장 필터·표지 그림
img/sims/               홈의 대표 실험 카드 스크린샷
tools/build.py          매니페스트 → 생성 파일·SEO·sitemap, 콘텐츠 규칙 검사
tools/smoke.mjs         Playwright 스모크 테스트
tools/new_course.py     새 과목 뼈대 만들기
docs/                   ARCHITECTURE · CONTENT-GUIDE · ROADMAP
```
설계 원칙은 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), 장 작성 규칙은 [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md)를 보세요.

## 실행

빌드 없는 정적 사이트입니다. 저장소 루트에서:

```bash
python3 -m http.server 8000      # → http://localhost:8000/general-chemistry/
```
KaTeX·three.js·폰트는 CDN에서 불러오므로 인터넷 연결이 필요합니다.

## 수정 후

```bash
python3 tools/build.py           # course.js·catalog.js·목차 카드·SEO 태그·sitemap 갱신 + 규칙 검사
npm i --no-save playwright katex@0.16.9 three@0.147.0 && npx playwright install chromium
node tools/smoke.mjs http://localhost:8000          # 전 페이지 검사 (특정 장만: 두 번째 인자에 slug)
```
CI(`.github/workflows/check.yml`)가 같은 검사를 실행합니다.

## 용어집과 본문 뜻풀이

본문의 `.term`과 정의 문단을 수정하고 `python3 tools/build.py`를 실행하면 용어집과 `course.js`의 `glossary` 데이터를 함께 갱신합니다. 본문에서 용어에 마우스를 올리거나 키보드로 포커스하거나 모바일에서 탭하면 같은 정의를 확인할 수 있습니다. 공통 동작과 스타일은 `engine/js/glossary-tooltips.js`, `engine/css/glossary-tooltips.css`입니다. 데이터 형식은 시리즈 공통 v1이며, 각 항목은 `ko`(이름), `en`(영문명), `abbr`(약어), `def`(정의), `chapters`(관련 장 목록)를 갖습니다. 이름이 반복되면 한 번만 표시하고, 묶음 항목은 가리킨 이름을 제목에 표시하며 구분에 필요한 비교 설명을 함께 제공합니다.

## 라이선스

코드는 [MIT](LICENSE-MIT), 교재 콘텐츠는 [CC BY 4.0](LICENSE-CC-BY-4.0). 적용 범위는 [라이선스 안내](LICENSE.md)를 참고하세요.
