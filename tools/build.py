#!/usr/bin/env python3
"""SciBook 빌드·검증 도구 (표준 라이브러리만 사용).

    python3 tools/build.py          # 생성 파일 갱신
    python3 tools/build.py --check  # 생성 파일이 최신인지 + 콘텐츠 규칙 검증 (CI)

하는 일
  1. catalog.json과 각 과목의 course.json을 읽고 검증한다.
  2. <course>/course.js  : SB.registerCourse(...) — 엔진이 읽는 매니페스트(+챕터 통계)
  3. catalog.js          : SB.registerCatalog(...) — 플랫폼 홈의 과목 목록
  4. <course>/index.html : <!-- sb:toc --> 구역에 정적 챕터 카드(검색 엔진·JS 없는 환경용)
  5. index.html          : <!-- sb:shelf --> 구역에 과목 카드
  6. 모든 페이지          : <!-- sb:seo --> 구역에 canonical·Open Graph·JSON-LD
  7. sitemap.xml
"""
import html
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CHECK = "--check" in sys.argv
TODAY = date.today().isoformat()
errors: list[str] = []
warnings: list[str] = []
changed: list[str] = []


def write(path: Path, text: str) -> None:
    old = path.read_text(encoding="utf-8") if path.exists() else None
    if old == text:
        return
    changed.append(str(path.relative_to(ROOT)))
    if not CHECK:
        path.write_text(text, encoding="utf-8")


def replace_block(text: str, name: str, inner: str, path: Path) -> str:
    pat = re.compile(rf"(<!-- sb:{name} -->)(.*?)(<!-- /sb:{name} -->)", re.S)
    if not pat.search(text):
        errors.append(f"{path.relative_to(ROOT)}: <!-- sb:{name} --> 구역이 없습니다")
        return text
    return pat.sub(lambda m: m.group(1) + inner + m.group(3), text, count=1)


def esc(s) -> str:
    return html.escape(str(s or ""), quote=True)


def strip_tags(s: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", s)).strip()


# ---------------------------------------------------------------- catalog
catalog = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))
SITE = catalog["site"]["url"]
fields = {f["id"]: f for f in catalog["fields"]}
courses = []
sitemap: list[tuple[str, str]] = [(SITE, TODAY)]

for entry in catalog["courses"]:
    if entry.get("field") not in fields:
        errors.append(f"catalog.json: {entry['id']} 의 field '{entry.get('field')}' 가 fields에 없습니다")
    if "manifest" not in entry:
        courses.append(dict(entry))
        continue
    mpath = ROOT / entry["manifest"]
    course = json.loads(mpath.read_text(encoding="utf-8"))
    cdir = mpath.parent
    if course["id"] != entry["id"] or cdir.name != course["id"]:
        errors.append(f"{entry['manifest']}: id·폴더명·catalog id가 일치해야 합니다")
    slugs, nums = set(), set()
    stats = {}
    for part in course["parts"]:
        for ch in part["chapters"]:
            for key in ("slug", "num", "title", "desc"):
                if not ch.get(key):
                    errors.append(f"{course['id']}: 챕터에 '{key}' 가 없습니다: {ch}")
            if ch["slug"] in slugs or ch["num"] in nums:
                errors.append(f"{course['id']}: 중복된 slug/num: {ch['slug']} {ch['num']}")
            slugs.add(ch["slug"]); nums.add(ch["num"])
            f = cdir / "chapters" / f"{ch['slug']}.html"
            if not f.exists():
                ch["status"] = "planned"
                continue
            ch.pop("status", None)
            src = f.read_text(encoding="utf-8")
            st = {
                "problems": len(re.findall(r'class="problem[" ]', src)),
                "examples": len(re.findall(r'class="example[" ]', src)),
                "sims": len(re.findall(r'class="sim[" ]', src)),
                "figures": len(re.findall(r"<figure[ >]", src)),
                "drills": len(re.findall(r'class="drill[" ]', src)),
                "minis": len(re.findall(r'class="mini[" ]', src)),
                "tangles": len(re.findall(r'class="tangle[" ]', src)),
                "steps": len(re.findall(r'class="[^"]*\bsteps\b[^"]*"', src)) - len(re.findall(r'class="steps-', src)),
                "predicts": len(re.findall(r'class="predict[" ]', src)),
                "hero": 1 if 'class="hero-live"' in src else 0,
            }
            stats[ch["slug"]] = st
            # --- 콘텐츠 규칙 검증
            rel = f.relative_to(ROOT)
            if f'data-chapter="{ch["slug"]}"' not in src:
                errors.append(f"{rel}: <body data-chapter=\"{ch['slug']}\"> 가 필요합니다")
            if "engine/js/scibook.js" not in src or "../course.js" not in src:
                errors.append(f"{rel}: 엔진 스크립트와 ../course.js 를 head에서 불러와야 합니다")
            if not re.search(r'<meta name="description" content="[^"]{20,}">', src):
                errors.append(f"{rel}: 20자 이상의 meta description이 필요합니다")
            if 'cdn.jsdelivr.net/npm/katex' in src:
                warnings.append(f"{rel}: KaTeX는 엔진이 불러옵니다. head의 KaTeX 태그를 지우세요")
            for m in re.finditer(r'class="problem"([^>]*)>', src):
                attrs = m.group(1)
                a = re.search(r'data-answer="([^"]*)"', attrs)
                if a:
                    for v in a.group(1).split(";"):
                        try:
                            float(v.strip())
                        except ValueError:
                            errors.append(f"{rel}: data-answer 값이 숫자가 아닙니다: '{v.strip()}'")
            ids = re.findall(r'\sid="([^"]+)"', src)
            dup = sorted({i for i in ids if ids.count(i) > 1})
            if dup:
                errors.append(f"{rel}: 중복 id {dup[:8]}")
            if st["problems"] < 5 and ch["slug"] not in ("periodic-table", "data-tables", "glossary", "constants-units"):
                warnings.append(f"{rel}: 연습문제가 {st['problems']}개입니다(권장 8개 이상)")
    course["stats"] = stats
    course["published"] = len(stats)
    course["total"] = len(slugs)
    course["url"] = SITE + course["id"] + "/"
    courses.append(dict(entry, **{k: course[k] for k in ("title", "en", "level", "description", "status", "url", "published", "total")}))

    # ---- course.js
    js_course = {k: v for k, v in course.items() if k not in ("libs",)}
    write(cdir / "course.js",
          "/* 생성 파일 — course.json을 고치고 python3 tools/build.py 를 실행하세요. */\n"
          f"SB.registerCourse({json.dumps(js_course, ensure_ascii=False, indent=1)});\n")

    # ---- course home cards
    idx = cdir / "index.html"
    if idx.exists():
        parts_html = []
        for part in course["parts"]:
            cards = []
            for ch in part["chapters"]:
                st = stats.get(ch["slug"])
                planned = ch.get("status") == "planned"
                counts = ""
                if st:
                    bits = []
                    if st["sims"]: bits.append(f"시뮬레이터 {st['sims']}")
                    inter = st["minis"] + st["tangles"] + st["steps"] + st["predicts"]
                    if inter: bits.append(f"인터랙티브 {inter}")
                    if st["examples"]: bits.append(f"예제 {st['examples']}")
                    if st["problems"]: bits.append(f"문제 {st['problems']}")
                    counts = f'<div class="counts">{" · ".join(bits)}</div>'
                tags = "".join(f"<span>{esc(t)}</span>" for t in ch.get("tags", []))
                tag = "div" if planned else "a"
                href = "" if planned else f' href="chapters/{ch["slug"]}.html"'
                badge = '<span class="badge">준비 중</span>' if planned else ""
                cards.append(
                    f'\n      <{tag} class="ch-card{" planned" if planned else ""}" data-slug="{ch["slug"]}"{href}>'
                    f'<span class="num">{"APPENDIX " if part.get("appendix") else "CHAPTER "}{esc(ch["num"])} {badge}</span>'
                    f'<h3>{esc(ch["title"])}</h3><p>{esc(ch["desc"])}</p>{counts}<div class="tags">{tags}</div></{tag}>')
            sem = f'<small>{course["title"]} {"I" if part.get("semester") == 1 else "II"}</small>' if part.get("semester") else ""
            parts_html.append(f'\n    <div class="course-part"><h3>{esc(part["title"])} {sem}</h3><div class="ch-grid">{"".join(cards)}\n    </div></div>')
        text = idx.read_text(encoding="utf-8")
        text = replace_block(text, "toc", "".join(parts_html) + "\n    ", idx)
        write(idx, text)


    # ---- 용어집: chapters/glossary.html 의 <!-- sb:glossary --> 구역을 각 장의 .term 표기에서 생성
    gpath = cdir / "chapters" / "glossary.html"
    if gpath.exists():
        terms = {}
        for part in course["parts"]:
            for ch in part["chapters"]:
                f = cdir / "chapters" / f"{ch['slug']}.html"
                if not f.exists() or ch["slug"] == "glossary":
                    continue
                src = f.read_text(encoding="utf-8")
                main_start = src.find('<main class="chapter')
                for m in re.finditer(r'<span class="term">(.*?)</span>(?:\s*<span class="en">\((.*?)\)</span>)?', src):
                    if m.start() < main_start:
                        continue
                    ko = html.unescape(strip_tags(m.group(1)))
                    if not ko or len(ko) > 30:
                        continue
                    key = ko.replace(" ", "")
                    if key in terms:
                        continue
                    sec = list(re.finditer(r'<section[^>]*\sid="([^"]+)"', src[:m.start()]))
                    blk_start = max(src.rfind("<p", 0, m.start()), src.rfind("<li", 0, m.start()), src.rfind('<div class="def', 0, m.start()))
                    ends = [e for e in (src.find("</p>", m.end()), src.find("</li>", m.end()), src.find("</div>", m.end())) if e > 0]
                    block = html.unescape(strip_tags(src[blk_start:min(ends)])) if blk_start >= 0 and ends else ko
                    sents = re.split(r"(?<=[다요])\.\s+", block)
                    sent = next((x for x in sents if ko in x), sents[0]).strip()
                    if not sent.endswith("."):
                        sent += "."
                    if len(sent) > 240:
                        sent = sent[:237].rsplit(" ", 1)[0] + "…"
                    # 잘린 문장 안에서 수식 구분자가 짝을 잃으면 마지막 여는 구분자 앞에서 자른다
                    for o_, c_ in (("\\(", "\\)"), ("$$", None)):
                        if c_ and sent.count(o_) != sent.count(c_):
                            sent = sent[:sent.rfind(o_)].rstrip() + "…"
                        elif not c_ and sent.count(o_) % 2:
                            sent = sent[:sent.rfind(o_)].rstrip() + "…"
                    terms[key] = {"ko": ko, "en": strip_tags(m.group(2) or ""), "def": sent, "slug": ch["slug"], "num": ch["num"],
                                  "title": ch["title"], "sec": sec[-1].group(1) if sec else ""}
        CHO = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ"
        def initial(w):
            c = w[0]
            if "가" <= c <= "힣":
                return CHO[(ord(c) - 0xAC00) // 588].replace("ㄲ", "ㄱ").replace("ㄸ", "ㄷ").replace("ㅃ", "ㅂ").replace("ㅆ", "ㅅ").replace("ㅉ", "ㅈ")
            return "A–Z" if c.isascii() and c.isalpha() else "기타"
        items = sorted(terms.values(), key=lambda t: t["ko"])
        out = [f'\n<p class="gl-count">용어 {len(items)}개 · 각 용어는 처음 정의된 장으로 연결된다.</p>']
        cur = None
        for t in items:
            ini = initial(t["ko"])
            if ini != cur:
                if cur is not None:
                    out.append("</div>")
                out.append(f'<h3 class="gl-ini" id="gl-{ini}">{ini}</h3><div class="gl-list">')
                cur = ini
            href = f'{t["slug"]}.html' + (f'#{t["sec"]}' if t["sec"] else "")
            out.append(f'<div class="gl-item" data-q="{esc(t["ko"] + " " + t["en"])}"><h4>{esc(t["ko"])}'
                       f'{f"<span class=\"en\">{esc(t["en"])}</span>" if t["en"] else ""}</h4><p>{esc(t["def"])}</p>'
                       f'<a class="ch" href="{href}">{esc(t["num"])}장 {esc(t["title"])} →</a></div>')
        if cur is not None:
            out.append("</div>")
        gtext = gpath.read_text(encoding="utf-8")
        write(gpath, replace_block(gtext, "glossary", "\n".join(out) + "\n", gpath))

# ---- catalog.js
write(ROOT / "catalog.js", "/* 생성 파일 — catalog.json·course.json을 고치고 python3 tools/build.py 를 실행하세요. */\n"
      f"SB.registerCatalog({json.dumps({'site': catalog['site'], 'fields': catalog['fields'], 'courses': courses}, ensure_ascii=False, indent=1)});\n")

# ---- site home shelf
home = ROOT / "index.html"
if home.exists():
    cards = []
    for c in courses:
        f = fields.get(c["field"], {})
        planned = c.get("status") == "planned"
        st = "집필 예정" if planned else f"{c.get('published', 0)} / {c.get('total', 0)}장 공개 · {'집필 중' if c.get('status') == 'writing' else '출간'}"
        tag = "div" if planned else "a"
        href = "" if planned else f' href="{c["id"]}/"'
        cards.append(
            f'\n      <{tag} class="course-card{" planned" if planned else ""}" style="--c:{f.get("color", "var(--accent)")}"{href}>'
            f'<span class="field">{esc(f.get("name"))} · {esc(c.get("level"))}</span>'
            f'<h3>{esc(c["title"])}<small>{esc(c.get("en"))}</small></h3><p>{esc(c.get("description"))}</p>'
            f'<span class="st">{st}</span></{tag}>')
    text = home.read_text(encoding="utf-8")
    text = replace_block(text, "shelf", "".join(cards) + "\n    ", home)
    write(home, text)

# ---------------------------------------------------------------- SEO blocks + sitemap
OG = SITE + "og.png"


def seo(path: Path, title: str, desc: str, url: str, crumbs: list, kind: str, extra: dict | None = None) -> None:
    text = path.read_text(encoding="utf-8")
    if "<!-- sb:seo -->" not in text:
        text = re.sub(r'(<meta name="description"[^>]*>)', r"\1\n<!-- sb:seo --><!-- /sb:seo -->", text, count=1)
    graph = [dict({"@type": kind, "name": title, "headline": crumbs[-1][0], "url": url, "inLanguage": "ko",
                   "isAccessibleForFree": True, "image": OG, "description": desc,
                   "publisher": {"@type": "Organization", "name": "SciBook", "url": SITE}}, **(extra or {})),
             {"@type": "BreadcrumbList", "itemListElement": [
                 {"@type": "ListItem", "position": i + 1, "name": n, "item": u} for i, (n, u) in enumerate(crumbs)]}]
    block = (f'\n<link rel="canonical" href="{url}">\n<meta property="og:type" content="{"website" if kind == "WebSite" else "article"}">\n'
             f'<meta property="og:site_name" content="SciBook">\n<meta property="og:title" content="{esc(title)}">\n'
             f'<meta property="og:description" content="{esc(desc)}">\n<meta property="og:url" content="{url}">\n'
             f'<meta property="og:image" content="{OG}">\n<meta property="og:locale" content="ko_KR">\n'
             f'<meta name="twitter:card" content="summary_large_image">\n'
             f'<script type="application/ld+json">{json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False)}</script>\n')
    write(path, replace_block(text, "seo", block, path))
    sitemap.append((url, TODAY))


def page_meta(path: Path):
    t = path.read_text(encoding="utf-8")
    title = re.search(r"<title>(.*?)</title>", t, re.S)
    desc = re.search(r'<meta name="description" content="([^"]*)">', t)
    return (strip_tags(title.group(1)) if title else ""), (desc.group(1) if desc else "")


if home.exists():
    t, d = page_meta(home)
    seo(home, t, d, SITE, [("SciBook", SITE)], "WebSite")
for entry in catalog["courses"]:
    if "manifest" not in entry:
        continue
    mpath = ROOT / entry["manifest"]
    course = json.loads(mpath.read_text(encoding="utf-8"))
    cdir = mpath.parent
    curl = SITE + course["id"] + "/"
    idx = cdir / "index.html"
    if idx.exists():
        t, d = page_meta(idx)
        seo(idx, t, d, curl, [("SciBook", SITE), (course["title"], curl)], "Book",
            {"@id": curl + "#book", "educationalLevel": course.get("level", "")})
    pos = 0
    for part in course["parts"]:
        for ch in part["chapters"]:
            pos += 1  # 매니페스트 순서(장이 공개될 때마다 바뀌지 않도록)
            f = cdir / "chapters" / f"{ch['slug']}.html"
            if not f.exists():
                continue
            t, d = page_meta(f)
            url = f"{curl}chapters/{ch['slug']}.html"
            seo(f, t, d, url, [("SciBook", SITE), (course["title"], curl), (f"{ch['num']} {ch['title']}", url)],
                "TechArticle", {"learningResourceType": "interactive textbook chapter", "position": pos,
                                "dateModified": TODAY, "isPartOf": {"@type": "Book", "@id": curl + "#book", "name": course["title"], "url": curl}})

sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
old_sm = (ROOT / "sitemap.xml").read_text(encoding="utf-8") if (ROOT / "sitemap.xml").exists() else ""
for url, _ in sitemap:
    # lastmod은 페이지 내용이 바뀐 경우에만 갱신하면 좋지만, 단순화를 위해 기존 값을 유지한다.
    m = re.search(rf"<loc>{re.escape(url)}</loc><lastmod>([^<]+)</lastmod>", old_sm)
    sm += f"  <url><loc>{url}</loc><lastmod>{m.group(1) if m else TODAY}</lastmod></url>\n"
sm += "</urlset>\n"
write(ROOT / "sitemap.xml", sm)

# ---------------------------------------------------------------- report
for w in warnings:
    print("경고:", w)
for e in errors:
    print("오류:", e)
if CHECK and changed:
    print("최신이 아닌 생성 파일:", ", ".join(changed))
    print("→ python3 tools/build.py 를 실행해 커밋하세요.")
elif changed:
    print("갱신:", ", ".join(changed))
else:
    print("변경 없음")
sys.exit(1 if errors or (CHECK and changed) else 0)
