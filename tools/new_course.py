#!/usr/bin/env python3
"""새 과목(교과서) 뼈대 만들기.

    python3 tools/new_course.py general-physics "일반물리학" "General Physics" --field physics [--lib phys]

만드는 것: <id>/course.json, <id>/index.html, <id>/chapters/ (빈 폴더)
catalog.json의 같은 id 항목을 manifest 방식으로 바꾸거나 새로 추가한다.
그다음 course.json의 parts/chapters를 채우고 python3 tools/build.py 를 실행한다.
"""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

ap = argparse.ArgumentParser()
ap.add_argument("id")
ap.add_argument("title")
ap.add_argument("en")
ap.add_argument("--field", required=True)
ap.add_argument("--level", default="대학 1학년")
ap.add_argument("--lib", action="append", default=[], help="engine/lib 의 도메인 라이브러리 (예: chem, phys)")
a = ap.parse_args()

cdir = ROOT / a.id
if cdir.exists():
    raise SystemExit(f"{cdir} 가 이미 있습니다")
(cdir / "chapters").mkdir(parents=True)
course = {
    "id": a.id, "title": a.title, "en": a.en, "field": a.field, "level": a.level, "status": "writing",
    "description": f"{a.title} 전 과정을 시뮬레이터와 자동 채점 연습문제로 익히는 인터랙티브 교과서.",
    "accent": {"light": "#2f6fe0", "dark": "#5b8cff", "light2": "#7a4ce0", "dark2": "#a585ff"},
    "libs": a.lib,
    "parts": [{"title": "제1부", "chapters": [
        {"slug": "intro", "num": "01", "title": "첫 장", "en": "Introduction", "desc": "첫 장의 설명을 쓰세요.", "tags": []}]}],
}
(cdir / "course.json").write_text(json.dumps(course, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
tpl = (ROOT / "general-chemistry" / "index.html").read_text(encoding="utf-8")
start, end = tpl.index('<section class="course-hero">'), tpl.index("<script>\n  (function () {")
body = f'''<section class="course-hero">
  <div class="inner">
    <div class="crumbs"><a href="../">SciBook</a></div>
    <h1>{a.title}<small>{a.en} · {a.level}</small></h1>
    <p class="lead">{course["description"]}</p>
    <div class="course-meta" id="course-meta"></div>
  </div>
</section>

<main class="home-section">
  <h2>목차</h2>
  <!-- sb:toc --><!-- /sb:toc -->
</main>
'''
page = tpl[:start] + body + tpl[end:]
page = page.replace("<title>일반화학 — 인터랙티브 대학 교과서 · SciBook</title>", f"<title>{a.title} — 인터랙티브 대학 교과서 · SciBook</title>")
page = page.replace('content="대학 1학년 일반화학', f'content="{a.title}: 대학')
(cdir / "index.html").write_text(page, encoding="utf-8")

cat_path = ROOT / "catalog.json"
cat = json.loads(cat_path.read_text(encoding="utf-8"))
entry = {"id": a.id, "field": a.field, "status": "writing", "manifest": f"{a.id}/course.json"}
for i, c in enumerate(cat["courses"]):
    if c["id"] == a.id:
        cat["courses"][i] = entry
        break
else:
    cat["courses"].append(entry)
cat_path.write_text(json.dumps(cat, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"만들었습니다: {a.id}/ — course.json을 채우고 python3 tools/build.py 를 실행하세요.")
