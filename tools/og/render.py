"""og.html을 헤드리스 Chrome으로 찍어 저장소 루트의 og.png(1200×630)를 만든다."""
import shutil
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent.parent / "og.png"
CANDIDATES = ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "google-chrome", "chromium", "chromium-browser"]


def chrome() -> str:
    for c in CANDIDATES:
        if Path(c).exists() or shutil.which(c):
            return c
    sys.exit("Chrome을 찾지 못했습니다.")


subprocess.run([chrome(), "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
                "--window-size=1200,630", "--virtual-time-budget=3000", "--allow-file-access-from-files",
                f"--screenshot={OUT}", (HERE / "og.html").as_uri()], check=True, capture_output=True)
print(f"wrote {OUT}")
