#!/usr/bin/env python3
"""배포물(_site/) 생성 (표준 라이브러리만 사용). GitHub Actions의 Deploy 워크플로가 실행한다.

    python3 tools/deploy.py

하는 일
  1. git이 추적하는 파일을 _site/에 복사한다(.github·docs·tools 제외).
  2. 모든 HTML의 </head> 앞에 GA4 태그를 넣는다.
     태그는 배포물에만 넣고 소스 HTML에는 넣지 않는다.
"""
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "_site"
EXCLUDE = {".github", "docs", "tools", ".gitignore"}
GA4_TAG = '<!-- Google tag (gtag.js) -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=G-LST8C5WL08"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag(\'js\', new Date());\n\n  gtag(\'config\', \'G-LST8C5WL08\');\n</script>'

files = subprocess.run(["git", "ls-files", "-z"], cwd=ROOT, capture_output=True, text=True, check=True).stdout.split("\0")
shutil.rmtree(OUT, ignore_errors=True)
errors, pages = [], 0
for rel in filter(None, files):
    if rel.split("/")[0] in EXCLUDE:
        continue
    src, dst = ROOT / rel, OUT / rel
    dst.parent.mkdir(parents=True, exist_ok=True)
    if not rel.endswith(".html"):
        shutil.copy2(src, dst)
        continue
    text = src.read_text(encoding="utf-8")
    if "static.cloudflareinsights.com" in text or "googletagmanager.com/gtag/js" in text:
        errors.append(f"{rel}: 태그는 배포 때 넣습니다. 소스에서 지우세요")
    elif text.count("</head>") != 1:
        errors.append(f"{rel}: </head>가 정확히 하나여야 합니다")
    else:
        dst.write_text(text.replace("</head>", GA4_TAG + "\n</head>"), encoding="utf-8")
        pages += 1
if errors:
    sys.exit("\n".join(errors))
print(f"_site/: HTML {pages}쪽에 태그를 넣었습니다")
