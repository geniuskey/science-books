// SciBook 페이지 스모크 테스트 (Playwright).
//   python3 -m http.server 8000 &   # 저장소 루트에서
//   node tools/smoke.mjs [http://localhost:8000] [경로 필터]
// 확인: JS 오류, KaTeX 렌더 오류, 360px 폭 가로 넘침, 빈 캔버스, 연습문제 위젯 생성.
// 환경 변수
//   SB_CDN_DIR=<node_modules 경로>  CDN(jsdelivr) 요청을 로컬 katex/three 패키지로 대체(오프라인 CI용)
//   SB_SHOTS=<폴더>                  각 페이지 스크린샷 저장
//   PLAYWRIGHT_CHROMIUM=<실행 파일>   크로미움 경로 지정
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const base = process.argv[2] || "http://localhost:8000";
const filter = process.argv[3] || "";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const cdn = process.env.SB_CDN_DIR;
const shots = process.env.SB_SHOTS;

function pages() {
  const out = ["index.html"];
  for (const d of fs.readdirSync(root)) {
    const cj = path.join(root, d, "course.json");
    if (!fs.existsSync(cj)) continue;
    out.push(`${d}/index.html`);
    const chd = path.join(root, d, "chapters");
    if (fs.existsSync(chd)) for (const f of fs.readdirSync(chd).sort()) if (f.endsWith(".html")) out.push(`${d}/chapters/${f}`);
  }
  return out.filter((p) => p.includes(filter));
}

const browser = await chromium.launch(process.env.PLAYWRIGHT_CHROMIUM ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM } : {});
let failed = 0;
for (const p of pages()) {
  for (const width of [1280, 360]) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const errs = [];
    page.on("pageerror", (e) => errs.push("pageerror: " + e.message));
    page.on("console", (m) => { if (m.type() === "error" && !/favicon|cloudflareinsights|net::ERR/.test(m.text())) errs.push("console: " + m.text()); });
    await page.route(/^https:\/\/(cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com|static\.cloudflareinsights\.com)\//, async (route) => {
      const u = route.request().url();
      if (cdn) {
        const m = /\/npm\/(katex|three)@[^/]+\/(.*)$/.exec(u);
        if (m) {
          const f = path.join(cdn, m[1], m[2]);
          if (fs.existsSync(f)) return route.fulfill({ path: f, contentType: f.endsWith(".css") ? "text/css" : "application/javascript" });
        }
        return route.fulfill({ status: 200, body: "", contentType: u.endsWith(".css") || u.includes("css") ? "text/css" : "application/javascript" });
      }
      return route.continue();
    });
    try {
      await page.goto(`${base}/${p}`, { waitUntil: "load", timeout: 30000 });
      await page.waitForTimeout(1200);
      const r = await page.evaluate(() => {
        const sw = document.scrollingElement.scrollWidth, cw = document.documentElement.clientWidth;
        const wide = [];
        if (sw > cw + 1) document.querySelectorAll("main *").forEach((el) => { const b = el.getBoundingClientRect(); if (b.right > cw + 1 && getComputedStyle(el).position !== "fixed" && !el.closest(".katex-display,.table-wrap,.formula,.rxn,.ptable,pre")) wide.push(el.tagName + "." + el.className + "#" + el.id); });
        const blank = [...document.querySelectorAll(".sim canvas")].filter((c) => c.width === 0 || c.height === 0).map((c) => c.id);
        const unrendered = [...document.querySelectorAll("main p, main li, main td, main .formula")].filter((e) => /\\\(|\$\$/.test(e.textContent)).length;
        return {
          overflow: sw > cw + 1 ? `${sw}>${cw} ${wide.slice(0, 4).join(", ")}` : "",
          katexErr: [...document.querySelectorAll(".katex-error")].map((e) => e.getAttribute("title") || e.textContent).slice(0, 5),
          blank, unrendered,
          problems: document.querySelectorAll(".problem").length,
          widgets: document.querySelectorAll(".problem .prob-head").length,
        };
      });
      const bad = [...errs];
      if (r.overflow) bad.push("가로 넘침 " + r.overflow);
      if (r.katexErr.length) bad.push("KaTeX 오류 " + r.katexErr.join(" | "));
      if (r.blank.length) bad.push("빈 캔버스 " + r.blank.join(","));
      if (cdn && r.unrendered) bad.push(`렌더되지 않은 수식 ${r.unrendered}곳`);
      if (r.problems !== r.widgets) bad.push(`연습문제 위젯 ${r.widgets}/${r.problems}`);
      if (shots) { fs.mkdirSync(shots, { recursive: true }); await page.screenshot({ path: path.join(shots, p.replace(/\//g, "_") + `.${width}.png`), fullPage: width === 360 ? false : false }); }
      console.log(`${bad.length ? "✗" : "✓"} ${p} @${width}${bad.length ? "\n    " + bad.join("\n    ") : ""}`);
      if (bad.length) failed++;
    } catch (e) {
      console.log(`✗ ${p} @${width} ${e.message}`); failed++;
    }
    await ctx.close();
  }
}
await browser.close();
process.exit(failed ? 1 : 0);
