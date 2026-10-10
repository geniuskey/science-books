# SciBook — 대학 인터랙티브 과학 교과서

[science.euiyun.com](https://science.euiyun.com/) — **대학 강의 과목 하나가 교과서 한 권**이 되는 한국어 인터랙티브 과학 교과서 플랫폼입니다.
읽고, 수식을 따라가고, 시뮬레이터로 직접 실험하며 이해합니다. [books.euiyun.com](https://books.euiyun.com/) 시리즈의 자매 사이트입니다.

| 교과서 | 주소 | 상태 |
|---|---|---|
| 일반화학 (General Chemistry) | `/general-chemistry/` | 집필 중 — 6부 20장 + 부록 3 |
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
index.html              플랫폼 홈
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

## 라이선스

코드는 [MIT](LICENSE-MIT), 교재 콘텐츠는 [CC BY 4.0](LICENSE-CC-BY-4.0). 적용 범위는 [라이선스 안내](LICENSE.md)를 참고하세요.
