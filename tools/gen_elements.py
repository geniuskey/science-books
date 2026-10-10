import sqlite3, json, sys, re
ko = """수소 헬륨 리튬 베릴륨 붕소 탄소 질소 산소 플루오린 네온 소듐 마그네슘 알루미늄 규소 인 황 염소 아르곤 포타슘 칼슘
스칸듐 타이타늄 바나듐 크로뮴 망가니즈 철 코발트 니켈 구리 아연 갈륨 저마늄 비소 셀레늄 브로민 크립톤 루비듐 스트론튬 이트륨 지르코늄
나이오븀 몰리브데넘 테크네튬 루테늄 로듐 팔라듐 은 카드뮴 인듐 주석 안티모니 텔루륨 아이오딘 제논 세슘 바륨 란타넘 세륨 프라세오디뮴 네오디뮴
프로메튬 사마륨 유로퓸 가돌리늄 터븀 디스프로슘 홀뮴 어븀 툴륨 이터븀 루테튬 하프늄 탄탈럼 텅스텐 레늄 오스뮴 이리듐 백금 금 수은
탈륨 납 비스무트 폴로늄 아스타틴 라돈 프랑슘 라듐 악티늄 토륨 프로트악티늄 우라늄 넵투늄 플루토늄 아메리슘 퀴륨 버클륨 캘리포늄 아인슈타이늄 페르뮴
멘델레븀 노벨륨 로렌슘 러더포듐 더브늄 시보귬 보륨 하슘 마이트너륨 다름슈타튬 뢴트게늄 코페르니슘 니호늄 플레로븀 모스코븀 리버모륨 테네신 오가네손""".split()
assert len(ko)==118, len(ko)
cat = {1:'nonmetal',2:'noble',3:'alkali',4:'alkaline',5:'metalloid',6:'halogen',7:'post',8:'transition',9:'lanthanide',10:'actinide'}
c = sqlite3.connect(sys.argv[1])
ie = {z: e for z, e in c.execute("select atomic_number, ionization_energy from ionizationenergies where ion_charge=0")}
ph = {}
for z, bp, mp in c.execute("select atomic_number, boiling_point, melting_point from phasetransitions order by id"):
    ph.setdefault(z, (mp, bp))
rows = []
r = lambda v, n: None if v is None else round(v, n)
for (z, sym, en, w, enp, ea, rad, cov, dens, blk, grp, per, cfg, ser, cpk, radio) in c.execute(
    "select atomic_number,symbol,name,atomic_weight,en_pauling,electron_affinity,atomic_radius,covalent_radius_pyykko,density,block,group_id,period,electronic_configuration,series_id,cpk_color,is_radioactive from elements order by atomic_number"):
    mp, bp = ph.get(z, (None, None))
    k = cat.get(ser, 'unknown')
    if ea is not None and ea <= 0: ea = None   # 안정한 음이온이 없음(음수 EA는 표에서 제외)
    if grp == 18: rad = None                  # 원자료가 비활성 기체만 반데르발스·계산값을 섞어 씀
    if z >= 104: k = 'transition' if blk == 'd' else 'unknown'; ea = None; dens = None
    rows.append([z, sym, ko[z-1], en, r(w, 4 if w and w < 100 else 3), grp, per, blk, k,
                 enp, r(ie.get(z) and ie[z] * 96.4853, 0), r(ea and ea * 96.4853, 0),
                 r(rad, 0), r(cov, 0), r(dens, 4), r(mp, 1), r(bp, 1), re.sub(r'(\d[spdf])(?=\s|$)', r'\g<1>1', cfg) if cfg else None, cpk, 1 if radio else 0])
cols = ["Z","sym","ko","en","mass","group","period","block","cat","chi","ie1","ea","radius","rcov","density","mp","bp","config","cpk","radioactive"]
out = "/* 원소 데이터 — 엔진 공용 lib (화학·물리·재료 교과서가 함께 쓴다)\n * 출처: mendeleev 1.3.0 데이터베이스(MIT, https://github.com/lmmentel/mendeleev) 가공.\n * 단위: mass g/mol, chi 폴링 전기음성도, ie1·ea kJ/mol, radius(실험 원자 반지름)·rcov(공유 반지름, Pyykkö) pm,\n *       density g/cm³(기체 포함 원자료 기준), mp·bp K, radioactive 1=안정 동위원소 없음.\n *       ea가 null이면 안정한 음이온이 없음(또는 자료 없음). radius는 슬레이터 실험 원자 반지름이며 18족은 비움(정의가 달라 비교 불가 — rcov 사용).\n * 생성: tools/gen_elements.py — 직접 편집하지 말 것. */\n"
out += "(function(){var C=" + json.dumps(cols) + ",R=" + json.dumps(rows, ensure_ascii=False, separators=(',',':')) + ";\n"
out += "var L=R.map(function(r){var o={};C.forEach(function(k,i){o[k]=r[i];});return o;});\n(window.SB_DATA=window.SB_DATA||{}).elements=L;})();\n"
open(sys.argv[2], 'w').write(out)
print(len(rows))
