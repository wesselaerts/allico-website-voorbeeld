#!/usr/bin/env python3
"""Deelbanners: het plaatje dat WhatsApp, LinkedIn en mail tonen als je een link naar de site deelt (1200 x 630).
Eén per pagina, met de titel van die pagina. bouw.js zet deelbanners/<id>.jpg vanzelf in de pagina met dat id.
Opnieuw maken na een titelwijziging: pas de lijst PAGINAS hieronder aan en draai
    python3 deelbanners/maak-banners.py [id ...]      (zonder id: alle pagina's; nodig: Google Chrome op een Mac)
Daarna node bouw.js."""
import html, os, subprocess, sys, tempfile, urllib.parse
HIER = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HIER)
WERK = tempfile.mkdtemp(prefix='deelbanners-')
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

# id, label, titel op de banner, beeld (uit de repo)
PAGINAS = [
    ('home', 'INDUSTRIËLE AUTOMATISERING', 'PLC-besturing, elektronica en OT-security', 'Hardware compositie.jpeg'),
    ('specialisatie', 'SPECIALISATIES', 'Van printplaat tot besturing', 'header van hardware.jpeg'),
    ('projecten', 'PROJECTEN', 'Wat we voor klanten bouwen', 'kemkens.jpeg'),
    ('nieuws', 'NIEUWS EN KENNIS', 'Nieuws en kennis over PLCnext en NIS2', 'schakelkast.webp'),
    ('contact', 'CONTACT', 'Vertel ons waar je staat, dan denken we mee', 'PCB.webp'),
    ('spec-1', 'SPECIALISATIE', 'Elektronica-ontwikkeling en PCB-ontwerp', 'Hardware compositie.jpeg'),
    ('spec-2', 'SPECIALISATIE', 'PLC laten programmeren: besturing op maat', 'schakelkast.webp'),
    ('spec-3', 'SPECIALISATIE', 'Dashboard op maat voor machines en sensordata', 'dashboard voorbeeld.jpeg'),
    ('spec-4', 'SPECIALISATIE', 'Installaties beveiligen: IEC 62443 en NIS2', 'Versleutelde beveiliging.webp'),
    ('spec-5', 'SPECIALISATIE', 'App laten maken voor installaties en de werkvloer', 'apps/duo.jpg'),
    ('project-1', 'PROJECT', 'Sprinklerinstallaties op afstand testen', 'kemkens.jpeg'),
    ('project-2', 'PROJECT', 'LMRA-app en digitale LMRA op maat', 'veiligheidsapp goed.jpeg'),
    ('nieuws-3', 'KENNISARTIKEL', 'Cyberbeveiligingswet (NIS2): gevolgen voor leveranciers', 'nis2-europese-commissie.jpg'),
    ('nieuws-5', 'KENNISARTIKEL', 'NIS2 voor OT en PLC: wat de wet vraagt', 'Versleutelde beveiliging.webp'),
    ('nieuws-6', 'KENNISARTIKEL', 'Machineverordening 2027 en cybersecurity', 'schakelkast.webp'),
    ('nieuws-7', 'KENNISARTIKEL', 'Cyber Resilience Act voor machinebouwers', 'PCB.webp'),
    ('nieuws-8', 'KENNISARTIKEL', 'PLC veilig op afstand benaderen', 'header van hardware.jpeg'),
    ('nieuws-4', 'KENNISARTIKEL', 'Wat is PLCnext van Phoenix Contact?', 'schakelkast.webp'),
    ('nieuws-1', 'NIEUWS', 'PLCnext-traject bij Phoenix Contact gestart', 'schakelkast.webp'),
    ('privacy', 'PRIVACY', 'Privacyverklaring', 'Hardware compositie.jpeg'),
]

LOGO = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="43 51 120 120"><path fill="#005d72" d="M142.43 131.51H91.77V91.51h50.66z"/>'
        '<path fill="#07e8fd" d="M96.43 111.84l-43.36.58L151.5 54.23l-21.2 37.56c-6.91 12.24-19.81 19.88-33.87 20.05"/>'
        '<path fill="#0c1d45" d="M130.73 131.38l21.67 37.02-99.33-55.98 43.12-.56c14.19-.19 27.38 7.27 34.54 19.52"/>'
        '<path fill="#0280fd" d="M130.28 91.82l21.22-37.59.9 114.17-21.81-37.27c-7.09-12.11-7.21-27.08-.31-39.31"/></svg>')

SJABLOON = '''<!doctype html><html lang="nl"><head><meta charset="utf-8"><style>
* { margin: 0; box-sizing: border-box; }
html, body { width: 1200px; height: 630px; overflow: hidden; }
body { font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; background: #0c1d45; position: relative; }
.beeld { position: absolute; right: 0; top: 0; width: 600px; height: 630px; background: url("__BEELD__") center / cover no-repeat; }
.beeld::after { content: ""; position: absolute; inset: 0;
  background: linear-gradient(90deg, #0c1d45 0%, rgba(12,29,69,.82) 16%, rgba(12,29,69,.25) 46%, rgba(12,29,69,0) 70%); }
.raster { position: absolute; inset: 0; width: 760px;
  background-image: linear-gradient(rgba(2,128,253,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(2,128,253,.07) 1px, transparent 1px);
  background-size: 40px 40px; -webkit-mask-image: linear-gradient(90deg, #000 60%, transparent); }
.vlak { position: absolute; left: 0; top: 0; width: 720px; height: 630px; padding: 60px 0 64px 72px; display: flex; flex-direction: column; }
.merk { display: flex; align-items: center; gap: 18px; }
.badge { width: 76px; height: 76px; border-radius: 18px; background: #fff; display: grid; place-items: center; box-shadow: 0 6px 20px rgba(0,0,0,.25); }
.badge svg { width: 58px; height: 58px; }
.naam { color: #fff; font-weight: 700; font-size: 36px; letter-spacing: -.01em; line-height: 1; }
.sub { color: #8fb4e6; font-weight: 600; font-size: 14px; letter-spacing: .24em; margin-top: 8px; }
.midden { margin-top: auto; }
.label { display: inline-block; color: #07e8fd; border: 1.5px solid rgba(7,232,253,.55); border-radius: 999px; padding: 8px 18px;
  font-size: 15px; font-weight: 700; letter-spacing: .16em; }
h1 { color: #fff; font-size: 58px; line-height: 1.07; font-weight: 800; letter-spacing: -.02em; margin-top: 22px; max-width: 610px; text-wrap: balance; }
.voet { margin-top: 30px; color: #8fb4e6; font-size: 21px; font-weight: 600; display: flex; gap: 16px; align-items: center; }
.voet b { color: #fff; font-weight: 700; }
.punt { width: 6px; height: 6px; border-radius: 50%; background: #07e8fd; }
.streep { position: absolute; left: 0; bottom: 0; height: 10px; width: 100%; background: linear-gradient(90deg, #0280fd, #07e8fd); }
</style></head><body>
<div class="beeld"></div><div class="raster"></div>
<div class="vlak">
  <div class="merk"><div class="badge">__LOGO__</div><div><div class="naam">Allico Systems</div><div class="sub">ENGINEERING &amp; CONTROL</div></div></div>
  <div class="midden">
    <span class="label">__LABEL__</span>
    <h1 id="t">__TITEL__</h1>
    <div class="voet"><b>allicosystems.nl</b><span class="punt"></span><span>Horst, Noord-Limburg</span></div>
  </div>
</div>
<div class="streep"></div>
<script>
  // titel past altijd: kleiner zetten tot hij binnen drie regels blijft
  const t = document.getElementById('t'); let fs = 58;
  while (t.scrollHeight > 196 && fs > 38) { fs -= 2; t.style.fontSize = fs + 'px'; }
</script>
</body></html>'''

alleen = set(sys.argv[1:])
for pid, label, titel, beeld in PAGINAS:
    if alleen and pid not in alleen: continue
    pad = os.path.join(REPO, beeld)
    if not os.path.exists(pad): print('beeld ontbreekt:', pad); continue
    url = 'file://' + urllib.parse.quote(pad)
    h = (SJABLOON.replace('__BEELD__', url).replace('__LOGO__', LOGO)
         .replace('__LABEL__', html.escape(label)).replace('__TITEL__', html.escape(titel)))
    hf = os.path.join(WERK, pid + '.html'); open(hf, 'w', encoding='utf-8').write(h)
    png = os.path.join(WERK, pid + '.png'); jpg = os.path.join(HIER, pid + '.jpg')
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
                    '--window-size=1200,630', '--virtual-time-budget=1500', '--screenshot=' + png, 'file://' + urllib.parse.quote(hf)],
                   capture_output=True, timeout=60)
    subprocess.run(['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '86', png, '--out', jpg], capture_output=True)
    print(pid, os.path.getsize(jpg) // 1024, 'kB')
