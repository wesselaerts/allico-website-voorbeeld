> **Tijdelijke kopie ter beoordeling (bijgewerkt 26-11-2026).** Dit is een voorbeeld van de vernieuwde site van Allico Systems; het staat nog niet online.
> **Bekijken: https://wesselaerts.github.io/allico-website-voorbeeld/**
> De echte site staat op https://allicosystems.nl. Deze kopie wordt weer verwijderd.

# Website Allico Systems

De site van https://allicosystems.nl. Gewone HTML, CSS en JavaScript, zonder pakketten.

| Bestand | Wat |
|---|---|
| `index.html` | De opmaak en alle pagina's in een bestand. Dubbelklik om te bekijken: zo werk je aan de site |
| `data/siteData.js` | Alle teksten, beelden en per pagina het adres, de titel en de omschrijving (`seo`) |
| `bouw.js` | Maakt uit die twee de site die online gaat, in de map `site/` |
| `.htaccess`, `robots.txt` | Gaan ongewijzigd mee naar `site/` |
| `site/` | Het resultaat van `bouw.js`: dit is wat je uploadt. Staat in git, zodat het klaarligt. Niet met de hand aanpassen |

## Waarom een bouwstap

In `index.html` wisselt JavaScript tussen de pagina's en blijft het adres hetzelfde. Een zoekmachine ziet dan een
pagina met een titel, en kan nooit een aparte pagina over bijvoorbeeld PLC-besturing of IEC 62443 tonen.

`bouw.js` maakt van elke pagina een eigen HTML-bestand met een eigen adres, titel en omschrijving, met de tekst er
gewoon in (ook leesbaar zonder JavaScript). Het voert daarvoor de render-functies uit `index.html` zelf uit, dus er
blijft een bron voor de opmaak en een voor de inhoud. De home is daarna de enige pagina met de zware scrollanimatie; de
andere pagina's zijn ongeveer 155 kB.

## Werken aan de site

1. Pas `data/siteData.js` (inhoud) of `index.html` (opmaak) aan. Een nieuwe foto? Draai dan eerst
   `node beelden.js` (zie "Snelheid").
2. Bekijk het door `index.html` te openen, zoals altijd.
3. Bouw en bekijk de site zoals hij online komt:

   ```bash
   node bouw.js --kijk
   ```

   Dat bouwt `site/` en toont hem op http://localhost:8080 (Node 18 of nieuwer). Zonder `--kijk` bouwt het alleen.
4. Commit `site/` mee met je wijziging. Zo past de map in git altijd bij `index.html` en `siteData.js`, en kan wie
   uploadt hem zo pakken. Een wijziging zonder nieuwe bouw komt niet online.
5. Upload de **inhoud van `site/`** naar de hoofdmap van de webruimte bij STRATO, ook het verborgen bestand
   `.htaccess` (in Finder zichtbaar met Cmd + Shift + punt).

`bouw.js` stopt met een duidelijke melding als er iets niet klopt (een pagina zonder blok in `index.html`, twee
pagina's met hetzelfde adres) en waarschuwt bij een beeld dat niet bestaat of een te lange omschrijving.

## Schrijfregels van de site

Afgesproken op 25-11-2026 (Wessel en Morris). Ze gelden voor elke tekst in `data/siteData.js`:

- **Alleen wat klopt.** Geen bewering over wat we doen of kunnen die we niet waarmaken. Geen "gecertificeerd" of
  "partner" zolang dat niet zo is. Geen resultaten of nieuwe feiten over een klantproject zonder akkoord van de klant.
- **Geen prijzen of kosten.**
- **Je-vorm**, zakelijk en concreet. Zinnen korter dan 25 woorden, alinea's van drie of vier zinnen.
- **Geen marketingtaal** (toonaangevend, innovatieve oplossingen, one-stop-shop, naadloos, ontzorgen).
- **Geen lange strepen.** Samenstellingen goed: PLC-besturing, OT-security, printplaatontwerp.
- **Titel** (`seo.titel`) hooguit 60 tekens, eindigt op "| Allico Systems". **Omschrijving** 120 tot 155 tekens.
  Titels van pagina's die al goed gevonden worden, laten we staan.
- **Uitleg mag altijd** (wat een norm of techniek is), mits het klopt. Kennisartikelen noemen onderaan hun bronnen.

## De scrollanimatie op de home

De home vertelt in vijf stappen hoe een idee een werkend product wordt. De tekst scrolt gewoon mee met de pagina;
het beeld ernaast blijft in zicht en volgt het scrollen: een oplichtend punt, de printtekening van de ARK-i die
daaruit groeit, de foto van de print (eerst als zwart silhouet, daarna in kleur) en de foto van de schakelkast.

| Wat | Waar |
|---|---|
| De twee foto's | `PCB.webp` en `schakelkast.webp` in de hoofdmap |
| Opbouw en opmaak | `index.html`: zoek op `scroll-track` (opbouw), `pcb-layer` en `real-photo-layer` (de foto's) |
| Script | `index.html`: zoek op `allicoVerhaal` |
| Wanneer welke stap begint | `TIJDEN` (de lijst `T`) in dat script, en `--deel` bij elke `.stap` in de opbouw. Die twee horen bij elkaar: de delen tellen op tot 100 |
| Foto groter, kleiner of verschuiven | `--print-schaal`, `--print-schuif` en `--kast-schaal` in de opmaak |
| De teksten van de vijf stappen | `data/siteData.js`: zoek op `[HOME]` |

Nalopen zonder te scrollen kan in de console van de browser: `allicoVerhaal.toon(0.5)` zet het beeld op de helft.

**De 3D-film uit Blender** (300 beelden: de onderdelen vliegen in, de print gaat de Rittal-kast in) staat klaar in
de tak `scroll-3d` en komt later op de plek van de twee foto's. Het Blender-project staat in
`dev/render koning/allico website 3d` op Wescloud (bij Wessel).

## Waar pas je wat aan (zoekwijzer)

Alle teksten staan in `data/siteData.js`, de opbouw en de opmaak in `index.html`. Zoek met Ctrl+F op:

| Wat wil je aanpassen | Bestand | Zoek op |
|---|---|---|
| Tekst van een pagina | `data/siteData.js` | het adres van de pagina (bijvoorbeeld `ot-beveiliging-iec-62443`) of een stukje van de tekst |
| Titel en omschrijving in Google | `data/siteData.js` | `"seo"` bij die pagina; voor home, overzichten en contact `[SEO-VAST]` |
| Hoofdkop (h1) van een pagina | `data/siteData.js` | `"kop"` bij die pagina |
| Vragen, praktijkvoorbeeld, "Zie ook", extra tekstblok | `data/siteData.js` | `"vragen"`, `"praktijk"`, `"verwant"`, `"secties"` bij die pagina |
| Welke velden er bestaan | `data/siteData.js` | `[VELDEN]` (bovenaan het bestand) |
| Hoe zo'n blok wordt opgebouwd | `index.html` | `BLOKKEN` (script: `sectiesBlok`, `praktijkBlok`, `vragenBlok`, `verwantBlok`, `extraBlokken`) |
| Hoe zo'n blok eruitziet | `index.html` | `BLOKKEN op een detailpagina` (opmaak) |
| Opbouw van een dienstpagina, project of nieuwsbericht | `index.html` | `renderSpecialisaties`, `renderProjecten`, `renderNieuws` |
| Adres, telefoon, e-mail | `data/siteData.js` | `[BEDRIJF]` |
| Werkgebied op de contactpagina | `data/siteData.js` | `[CONTACT]` |
| Nieuwsbericht of kennisartikel | `data/siteData.js` | `[NIEUWS]`, of het adres van het artikel |
| Datum van wijziging voor de sitemap | `data/siteData.js` | `"gewijzigd"` in het blok `seo` van de pagina (JJJJ-MM-DD) |
| Privacyverklaring (eigen pagina `/privacyverklaring/`, link in de footer) | `data/siteData.js` | `[JURIDISCH]`; opbouw in `index.html` bij `renderJuridisch`. Algemene voorwaarden: zet bij `juridisch` `"voorwaarden": "/voorwaarden.pdf"` (alleen een link) of een blok met `tekst` (eigen pagina, plus een leeg blok `page-voorwaarden` in `index.html`) |
| De drie kaarten "Ontdek onze andere specialismen" op de home | `index.html` | `home-breed-card` |
| Deelbanner per pagina (plaatje bij een gedeelde link in WhatsApp of LinkedIn) | `deelbanners/<id>.jpg` | opnieuw maken met `python3 deelbanners/maak-banners.py` (titels staan in dat script), daarna `node bouw.js` |
| Gegevensblokken voor zoekmachines | `index.html` (bedrijf) en `bouw.js` (per pagina) | `application/ld+json`, `gegevensblok` |

- Een veld met "(mag)" weglaten haalt dat stuk van de pagina weg. Er hoeft dan niets in `index.html` te veranderen.
- In de teksten staat geen HTML. Het bestand blijft gewone gegevens, zodat het later uit een database kan komen.
- Een link naar een andere pagina maak je met het id van die pagina (`"spec-4"`, `"project-1"`, `"nieuws-3"`); het
  adres komt er vanzelf in. Verwijs je naar een id dat niet bestaat, dan meldt `bouw.js` dat en blijft de link weg.
- `titel` is de korte naam op de overzichten en in de footer; `kop` is de hoofdkop op de pagina zelf.

## Adressen

| Pagina | Adres |
|---|---|
| Home | `/` |
| Overzichten | `/specialisaties/`, `/projecten/`, `/nieuws/`, `/contact/` |
| Specialisatie | `/<adres>/`, bijvoorbeeld `/elektronica-ontwikkeling/` |
| Project | `/projecten/<adres>/` |
| Nieuwsbericht | `/nieuws/<adres>/` (alleen berichten met een `id` en een `tekst`) |

Het adres, de titel (de blauwe regel in Google, ongeveer 60 tekens) en de omschrijving (de tekst eronder, hooguit 155
tekens) staan in `data/siteData.js`: voor de vaste pagina's bovenaan onder `seo.paginas`, voor een specialisatie,
project of nieuwsbericht in het blok `seo` van dat onderdeel. Ontbreekt dat blok, dan maakt `bouw.js` een adres van de
titel.

**Wijzig een adres dat al online staat niet meer.** Google en andere sites verwijzen ernaar. Moet het toch, zet dan in
`.htaccess` een doorverwijzing van het oude naar het nieuwe adres.

## Een pagina toevoegen

- **Specialisatie, project of nieuwsbericht:** voeg het onderdeel toe in `data/siteData.js` (met een `id` en een blok
  `seo`) en zet in `index.html` een leeg blok erbij: `<div class="page" id="page-<id>"></div>`.
- **Kennisartikel:** dat is een bericht in `[NIEUWS]` met `"kop"` (de hoofdkop) en een `"tekst"` met alinea's,
  tussenkoppen (`{ "kop": "..." }`) en lijsten (`{ "punten": [...] }`). Zet `"gepubliceerd"` en `"gewijzigd"` in het
  blok `seo` (JJJJ-MM-DD); die datums gaan naar Google. Sluit af met een alinea "Bronnen:".
- Daarna `node bouw.js`. De nieuwe pagina staat vanzelf in het menu van de footer (specialisaties), in de lijsten en in
  `sitemap.xml`.
- Neem een bestaande pagina in `data/siteData.js` als voorbeeld; welke velden mogen, staat daar bovenaan bij `[VELDEN]`.

## Hoe het in de code zit

- `bouw.js` zet in elke gebouwde pagina `window.ALLICO_ROUTES` (de adressen per pagina). Is die er, dan gaat een klik
  naar het echte adres (`gaNaar()` en `paginaUrl()` in `index.html`). Is die er niet, zoals bij het openen van
  `index.html`, dan wisselt de pagina zoals altijd met `showPage()`.
- In de gebouwde site gaan links en beelden vanaf de pagina zelf (`../PCB.webp`, `../contact/`). Daardoor werkt
  `site/` zowel op de server als wanneer je `site/index.html` gewoon opent (dubbelklik): een klein script zet er dan
  `index.html` achter. Alleen `404.html` gebruikt paden vanaf de hoofdmap, omdat de server die op elk adres toont.
- De gebouwde pagina's tekenen niets opnieuw (`window.ALLICO_GEBOUWD`): alles staat al in de HTML.
- Alle teksten staan alleen in `data/siteData.js`. In `index.html` staat geen kopie meer (`const siteData = {}`), dus
  zonder dat bestand toont `index.html` niets. De gebouwde pagina's laden `data/siteData.js` niet meer: `bouw.js` zet
  het e-mailadres, het telefoonnummer en het formulieradres in een klein blok in elke pagina. De map `data/` hoeft
  dus niet meer mee naar de server.
- Elke onderliggende pagina krijgt van `bouw.js` een kruimelpad voor zoekmachines (Home > Nieuws > titel), en elk
  bericht een Article-blok met kop, datums en Allico Systems als schrijver. De sitemap noemt alleen een datum als de
  pagina `"gewijzigd"` heeft: Google gebruikt die datum alleen als hij klopt.
- De formulieren staan op de contactpagina. Knoppen als "Start de projectcheck" gaan in de gebouwde site naar
  `/contact/#projectcheck`.
- `.htaccess` stuurt `www.allicosystems.nl`, `allicosystems.com` en `www.allicosystems.com` blijvend door naar
  `https://allicosystems.nl`, laat beelden een maand in de browser staan en toont `404.html` bij een onbekend adres.
  Werkt de site na het uploaden niet, verwijder dan `.htaccess` op de server. Doorsturen van http naar https staat
  bewust niet in `.htaccess`: zet dat aan in het klantmenu van STRATO ("SSL erzwingen").
- `.htaccess` zet ook zes beveiligingsheaders (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
  Permissions-Policy en Content-Security-Policy). De CSP laat alleen het eigen domein en Google Fonts toe (Google
  Fonts laadt de site sinds 25-11-2026 niet meer; die twee adressen mogen uit de CSP). Laad je
  iets van een ander domein (een script, beeld, video of het adres in `formulier.endpoint`), zet dat domein dan in de
  CSP, anders weigert de browser het. Ontbreekt er na het uploaden opmaak of werkt een knop niet, verwijder dan
  alleen de regel met `Content-Security-Policy`. HSTS staat eerst op een dag; zet `max-age` na een week zonder
  problemen op `31536000` (een jaar).

## Snelheid

De site is gemaakt om ook op een trage verbinding snel te laden. Dat gebeurt bij het bouwen; aan `index.html` en
`data/siteData.js` merk je er niets van.

| Wat | Hoe | Waar |
|---|---|---|
| De printtekening op de home | `bouw.js` haalt verborgen tekst, editorgegevens van EasyEDA en overbodige decimalen weg (ongeveer 1.000 naar 190 kB). De lijndiktes (`stroke-width`) blijven precies gelijk, want de opmaak kiest daarop | `bouw.js`: `kleinereTekening` |
| Opmaak (CSS) | commentaar en witruimte eruit | `bouw.js`: `kleinereCss` |
| Foto's | `node beelden.js` maakt van elke foto een versie van 800 en 1200 pixels (WebP), en van een PNG een WebP. `bouw.js` laat de browser de kleinste kiezen die scherp genoeg is; de vergroting toont het origineel | `beelden.js`, `bouw.js`: `slimmeBeelden` |
| Inpakken op de server | `.htaccess` laat de server HTML, CSS, JavaScript en SVG ingepakt (gzip) versturen | `.htaccess`: `mod_deflate` |

- **Nieuwe foto:** zet hem in de hoofdmap, verwijs ernaar in `data/siteData.js` en draai `node beelden.js`, daarna
  `node bouw.js`. `beelden.js` heeft `cwebp` nodig (Mac: `brew install webp`). `bouw.js` meldt een foto zonder
  kleine versie.
- **Controleren na het uploaden** of de server inpakt (er moet `content-encoding: gzip` staan):

  ```bash
  curl -s -o /dev/null -D - -H "Accept-Encoding: gzip" https://allicosystems.nl/ | grep -i content-encoding
  ```

- Gemeten op 25-11-2026: de home ging van 1.167 naar 315 kB HTML (ingepakt van 183 naar 68 kB).

## Nog open

- De kennisartikelen onder `/nieuws/` (wetgeving, PLCnext) zijn op 25-11-2026 geschreven met bronnen en daarna
  gecontroleerd. Laat iemand met vakkennis ze lezen voordat ze online gaan, en houd de datums bij als de wet verandert.
- Het woord "sprinkler" staat sinds 26-11-2026 weer op de site (Wessel: mag). Resultaten van het Kemkens-project
  blijven eraf zolang Kemkens daar geen akkoord op gaf.
- De privacyverklaring (`/privacyverklaring/`) is een concept van 26-11-2026 dat Wessel naleest (onder meer de
  bewaartermijn van twee jaar). Algemene voorwaarden zijn er nog niet; de footer toont die link pas als
  `siteData.juridisch.voorwaarden` bestaat.
- De formulieren sturen niets door zolang `formulier.endpoint` in `siteData.js` leeg is (het mailprogramma van de
  bezoeker opent).
- Ongebruikte beelden zijn op 11-11-2026 uit de hoofdmap gehaald (onder meer de PNG-originelen van de vier
  WebP-beelden en `Alia.png`). Nodig? Ze staan nog in de geschiedenis van git, zie het verzoek tot samenvoegen
  "Ongebruikte beelden verwijderen".
