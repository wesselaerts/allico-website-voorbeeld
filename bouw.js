#!/usr/bin/env node
/*
 * bouw.js maakt de site die online gaat, in de map site/.
 *
 *   node bouw.js          bouwt site/
 *   node bouw.js --kijk   bouwt site/ en toont hem op http://localhost:8080
 *
 * Waarom: in index.html staan alle pagina's in een bestand en wisselt JavaScript ertussen. Een zoekmachine
 * ziet dan een adres met een titel. Dit script maakt van elke pagina een eigen HTML-bestand met een eigen
 * adres, titel en omschrijving, met de tekst er gewoon in (ook zonder JavaScript leesbaar).
 *
 * Hoe: het voert de render-functies uit index.html zelf uit (met de inhoud uit data/siteData.js) en zet wat
 * ze opleveren in de HTML. Er is dus een bron voor de opmaak (index.html) en een voor de inhoud (siteData.js).
 * Adres, titel en omschrijving per pagina staan in siteData.js onder "seo".
 *
 * Geen pakketten nodig, alleen Node 18 of nieuwer. Meer uitleg: README.md.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const http = require('http');

const ROOT = __dirname;
const UIT = path.join(ROOT, 'site');
const BEELD = /\.(?:png|jpe?g|webp|svg|ico|gif)$/i;
const ALTIJD_MEE = ['robots.txt', '.htaccess', 'favicon.ico', 'favicon.svg', 'favicon-96.png', 'apple-touch-icon.png'];

const meldingen = [];
const waarschuw = tekst => meldingen.push(tekst);
const stop = tekst => { console.error('\nFOUT: ' + tekst + '\nEr is niets gebouwd.'); process.exit(1); };

const lees = bestand => fs.readFileSync(path.join(ROOT, bestand), 'utf8').replace(/^﻿/, '');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const regEsc = s => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const slug = tekst => String(tekst).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const kort = (tekst, max) => tekst.length <= max ? tekst : tekst.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';

/* ── Inhoud ─────────────────────────────────────────────────────────── */

function leesData() {
    const ctx = { window: {} };
    vm.runInNewContext(lees('data/siteData.js'), ctx, { filename: 'data/siteData.js' });
    if (!ctx.window.SITE_DATA) stop('data/siteData.js zet window.SITE_DATA niet.');
    return JSON.parse(JSON.stringify(ctx.window.SITE_DATA));
}

// In de gebouwde site staan pagina's in submappen. Beelden krijgen daarom een pad vanaf de hoofdmap (/beeld.jpg).
function metVastePaden(waarde, sleutel) {
    if (Array.isArray(waarde)) return waarde.map(v => metVastePaden(v));
    if (waarde && typeof waarde === 'object') {
        const uit = {};
        for (const [k, v] of Object.entries(waarde)) uit[k] = metVastePaden(v, k);
        return uit;
    }
    const isBeeld = typeof waarde === 'string' && BEELD.test(waarde) && ['foto', 'hero', 'introFoto'].includes(sleutel);
    return isBeeld && !/^(?:[a-z]+:|\/)/i.test(waarde) ? '/' + waarde : waarde;
}

// Alle pagina's met hun adres, titel en omschrijving.
function paginaLijst(d) {
    const seo = d.seo || {};
    const vast = seo.paginas || {};
    const naam = d.bedrijf.naam;
    const lijst = [];
    const voeg = (id, url, s, nav, terugvalTitel, terugvalTekst) => lijst.push({
        id, url, nav,
        titel: (s && s.titel) || terugvalTitel + ' | ' + naam,
        omschrijving: (s && s.omschrijving) || kort(terugvalTekst || d.bedrijf.beschrijving, 155),
    });

    voeg('home', '/', vast.home, 'home', naam, d.home.introTekst);
    const standaard = { specialisatie: 'specialisaties', projecten: 'projecten', nieuws: 'nieuws', contact: 'contact' };
    const kop = { specialisatie: 'Specialisaties', projecten: 'Projecten', nieuws: 'Nieuws', contact: 'Contact' };
    const map = {};
    for (const id of Object.keys(standaard)) {
        const s = vast[id] || {};
        map[id] = '/' + (s.adres || standaard[id]) + '/';
        voeg(id, map[id], s, id, kop[id]);
    }
    for (const s of d.specialisaties) voeg(s.id, '/' + ((s.seo && s.seo.adres) || slug(s.titel)) + '/', s.seo, 'specialisatie', s.titel, s.samenvatting);
    for (const p of d.projecten) voeg(p.id, map.projecten + ((p.seo && p.seo.adres) || slug(p.titel)) + '/', p.seo, 'projecten', p.titel, p.samenvatting);
    for (const n of d.nieuws) {
        if (!n.id || !n.tekst || !n.tekst.length) continue; // alleen berichten met een eigen pagina
        voeg(n.id, map.nieuws + ((n.seo && n.seo.adres) || slug(n.titel)) + '/', n.seo, 'nieuws', n.titel, n.samenvatting);
    }

    const gezien = {};
    for (const p of lijst) {
        if (gezien[p.url]) stop('Twee pagina\'s met hetzelfde adres ' + p.url + ': ' + gezien[p.url] + ' en ' + p.id);
        gezien[p.url] = p.id;
        if (p.omschrijving.length > 160) waarschuw('Omschrijving van ' + p.id + ' is ' + p.omschrijving.length + ' tekens (Google toont er ongeveer 155).');
    }
    return lijst;
}

/* ── Zoeken in de HTML ──────────────────────────────────────────────── */

// Positie direct na de sluittag die hoort bij een al geopende <tag>.
function naSluittag(html, tag, vanaf) {
    const re = new RegExp('<(/?)' + tag + '\\b[^>]*>', 'gi');
    re.lastIndex = vanaf;
    let diepte = 1, m;
    while ((m = re.exec(html))) {
        diepte += m[1] ? -1 : 1;
        if (diepte === 0) return { voor: m.index, na: re.lastIndex };
    }
    stop('Geen sluittag gevonden voor <' + tag + '> (index.html).');
}

function vindElement(html, id) {
    const m = new RegExp('<([a-zA-Z0-9]+)\\b[^>]*\\bid="' + regEsc(id) + '"[^>]*>').exec(html);
    if (!m) return null;
    const eind = naSluittag(html, m[1], m.index + m[0].length);
    return { start: m.index, binnenStart: m.index + m[0].length, binnenEind: eind.voor, eind: eind.na, openTag: m[0] };
}

function paginaBlokken(html) {
    const re = /<div class="page(?: active)?" id="page-([^"]+)">/g;
    const blokken = [];
    let m;
    while ((m = re.exec(html))) {
        const eind = naSluittag(html, 'div', m.index + m[0].length);
        blokken.push({ id: m[1], start: m.index, eind: eind.na });
        re.lastIndex = eind.na;
    }
    if (!blokken.length) stop('Geen pagina\'s gevonden in index.html (<div class="page" id="page-...">).');
    return blokken;
}

// Voert een bewerking uit op alles buiten <script>-blokken.
function buitenScripts(html, bewerk) {
    return html.split(/(<script\b[\s\S]*?<\/script>)/).map((deel, i) => i % 2 ? deel : bewerk(deel)).join('');
}

/* ── De render-functies uit index.html uitvoeren ────────────────────── */

function render(sjabloon, data, routes) {
    const scripts = [...sjabloon.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
    const code = scripts.find(s => s.includes('const siteData =') && s.includes('function renderAll'));
    if (!code) stop('Het script met "const siteData" en "function renderAll" staat niet meer in index.html.');

    const opname = {};
    const bestaat = id => new RegExp('\\bid="' + regEsc(id) + '"').test(sjabloon);
    const ctx = {
        console,
        navParent: {},
        showPage() { },
        paginaUrl: naam => routes[naam] || '#',
        window: { SITE_DATA: data, ALLICO_ROUTES: routes },
        document: {
            getElementById: id => bestaat(id) ? (opname[id] || (opname[id] = {})) : null,
            querySelectorAll: () => [],
            querySelector: () => null,
            addEventListener() { },
        },
    };
    try {
        vm.runInNewContext(code, ctx, { filename: 'index.html (render-functies)' });
    } catch (e) {
        stop('De render-functies in index.html geven een fout: ' + e.message);
    }
    for (const id of ['spec-list', 'project-list', 'nieuws-feed', 'footer-grid']) {
        if (!opname[id] || !opname[id].innerHTML) stop('De render-functies hebben "' + id + '" niet gevuld.');
    }
    return opname;
}

/* ── Een pagina bouwen ──────────────────────────────────────────────── */

function zetMeta(html, patroon, waarde) {
    if (!patroon.test(html)) stop('Niet gevonden in de <head> van index.html: ' + patroon);
    return html.replace(patroon, (m, voor, na) => voor + esc(waarde) + na);
}

// Geopend als bestand (dubbelklik) laadt een map niet vanzelf index.html. Dit zet dan overal index.html achter.
const BESTAND_SCRIPT = `(function () {
        if (location.protocol !== 'file:') return;
        var metIndex = function (h) { return h.replace(/^([^#?]*\\/)([?#].*)?$/, function (m, pad, rest) { return pad + 'index.html' + (rest || ''); }); };
        var r = window.ALLICO_ROUTES;
        for (var k in r) r[k] = metIndex(r[k]);
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('a[href]').forEach(function (a) {
                var h = a.getAttribute('href');
                if (!/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(h)) a.setAttribute('href', metIndex(h));
            });
        });
    })();`;

function bouwPagina(sjabloon, blokken, p, opname, routes, basis) {
    let html = sjabloon;

    // Paden vanaf de pagina zelf (../PCB.webp), zodat de site ook werkt als je index.html gewoon opent.
    // 404.html wordt door de server op elk adres getoond en houdt daarom paden vanaf de hoofdmap (/PCB.webp).
    const diepte = p.url.endsWith('/') ? p.url.split('/').length - 2 : null;
    const naar = v => diepte === null || !v.startsWith('/') || v.startsWith('//') ? v : ('../'.repeat(diepte) + v.slice(1)) || './';
    const eigenRoutes = Object.fromEntries(Object.entries(routes).map(([k, v]) => [k, naar(v)]));

    // 1. Alleen deze pagina blijft over
    for (const b of [...blokken].reverse()) {
        if (b.id === p.id) continue;
        let eind = b.eind;
        const rest = /^\s*<!--\s*\/page-[^>]*-->/.exec(html.slice(eind, eind + 80));
        if (rest) eind += rest[0].length;
        html = html.slice(0, b.start) + (p.blok && b === blokken[0] ? p.blok : '') + html.slice(eind);
    }
    html = html.replace('<div class="page active" id="page-home">', '<div class="page" id="page-home">');
    html = html.replace('<div class="page" id="page-' + p.id + '">', '<div class="page active" id="page-' + p.id + '">');
    if (!html.includes('<div class="page active" id="page-' + p.id + '">')) stop('Pagina "' + p.id + '" staat niet in index.html.');

    // 2. Wat de render-functies maken, staat er nu gewoon in
    for (const [id, o] of Object.entries(opname)) {
        let el = vindElement(html, id);
        if (!el) continue;
        if ('innerHTML' in o) html = html.slice(0, el.binnenStart) + o.innerHTML + html.slice(el.binnenEind);
        else if ('textContent' in o) html = html.slice(0, el.binnenStart) + esc(o.textContent) + html.slice(el.binnenEind);
        if (o.hidden === false || o.href) {
            el = vindElement(html, id);
            let tag = el.openTag;
            if (o.hidden === false) tag = tag.replace(/\s+hidden(?=[\s>])/, '');
            if (o.href) tag = /\bhref="/.test(tag) ? tag.replace(/\bhref="[^"]*"/, 'href="' + esc(o.href) + '"') : tag.replace(/>$/, ' href="' + esc(o.href) + '">');
            html = html.slice(0, el.start) + tag + html.slice(el.binnenStart);
        }
    }

    // 3. Titel, omschrijving en adres van deze pagina
    const adres = basis + p.url;
    html = html.replace(/<title>[\s\S]*?<\/title>/, () => '<title>' + esc(p.titel) + '</title>');
    html = zetMeta(html, /(<meta name="description" content=")[^"]*(")/, p.omschrijving);
    html = zetMeta(html, /(<meta property="og:title" content=")[^"]*(")/, p.titel);
    html = zetMeta(html, /(<meta property="og:description" content=")[^"]*(")/, p.omschrijving);
    if (p.nietVindbaar) {
        html = html.replace(/\s*<link rel="canonical" href="[^"]*">/, '\n    <meta name="robots" content="noindex">');
        html = html.replace(/\s*<meta property="og:url" content="[^"]*">/, '');
    } else {
        html = zetMeta(html, /(<link rel="canonical" href=")[^"]*(")/, adres);
        html = zetMeta(html, /(<meta property="og:url" content=")[^"]*(")/, adres);
    }
    html = html.replace('</head>', '    <script>\n    window.ALLICO_GEBOUWD = true;\n    window.ALLICO_ROUTES = '
        + JSON.stringify(eigenRoutes) + ';\n    ' + BESTAND_SCRIPT + '\n    </script>\n</head>');

    // 4. Menu: de juiste knop actief
    html = html.replace(/(<nav id="hoofdnav">)([\s\S]*?)(<\/nav>)/, (m, open, binnen, sluit) => {
        binnen = binnen.replace(/ class="active"/g, '');
        if (p.nav) binnen = binnen.replace(new RegExp('(<a\\b[^>]*data-page="' + regEsc(p.nav) + '")'), '$1 class="active"');
        return open + binnen + sluit;
    });

    // 5. Echte links en paden vanaf de hoofdmap
    html = buitenScripts(html, deel => deel
        .replace(/<a\b([^>]*)>/g, (m, attrs) => {
            const doel = /\bdata-(page|cta)="([^"]+)"/.exec(attrs);
            if (!doel) return m;
            const url = doel[1] === 'page' ? routes[doel[2]] : routes.contact + '#' + doel[2];
            if (!url) return m;
            return /\bhref="/.test(attrs)
                ? '<a' + attrs.replace(/\bhref="[^"]*"/, 'href="' + url + '"') + '>'
                : '<a href="' + url + '"' + attrs + '>';
        })
        .replace(/\b(src|href)="([^"]*)"/g, (m, attr, v) => (v === '' || /^(?:[a-z][a-z0-9+.-]*:|\/|#)/i.test(v)) ? m : attr + '="/' + v + '"')
        .replace(/\b(src|href)="(\/[^"]*)"/g, (m, attr, v) => attr + '="' + naar(v) + '"'));
    const dataScript = '<script src="' + naar('/data/siteData.js') + '"></script>';
    html = html.replace('<script src="data/siteData.js"></script>', dataScript);
    if (!html.includes(dataScript)) stop('<script src="data/siteData.js"> staat niet meer in index.html.');

    return html;
}

const blok404 = `<div class="page" id="page-404">
        <section class="detail-page">
            <div class="artikel-wrap">
                <div class="detail-main">
                    <h1>Pagina niet gevonden</h1>
                    <p>Dit adres bestaat niet of niet meer. Kijk bij onze <a href="/specialisaties/" data-page="specialisatie">specialisaties</a>
                        of <a href="/projecten/" data-page="projecten">projecten</a>, of ga terug naar de <a href="/" data-page="home">home</a>.</p>
                </div>
            </div>
        </section>
    </div>`;

/* ── Bestanden ──────────────────────────────────────────────────────── */

// Bestaat het bestand, met precies deze hoofd- en kleine letters? (De server is hoofdlettergevoelig, een Mac niet.)
function bestaatPrecies(rel) {
    let map = ROOT;
    for (const deel of rel.split('/')) {
        let namen;
        try { namen = fs.readdirSync(map); } catch (e) { return false; }
        if (!namen.includes(deel)) return false;
        map = path.join(map, deel);
    }
    return fs.statSync(map).isFile();
}

function schrijf(rel, inhoud) {
    const doel = path.join(UIT, rel);
    fs.mkdirSync(path.dirname(doel), { recursive: true });
    fs.writeFileSync(doel, inhoud);
}

function kopieerBeelden(paginas, data, basis) {
    const nodig = new Set(ALTIJD_MEE.filter(bestaatPrecies));
    const voeg = pad => {
        let rel = pad.replace(basis, '').replace(/^(?:\.\.?\/)+|^\//, '').split(/[?#]/)[0];
        try { rel = decodeURIComponent(rel); } catch (e) { }
        if (!rel || !BEELD.test(rel) || /^[a-z]+:/i.test(rel)) return;
        if (bestaatPrecies(rel)) nodig.add(rel);
        else waarschuw('Beeld niet gevonden (let ook op hoofdletters): ' + rel);
    };
    for (const html of paginas) {
        for (const m of html.matchAll(/\b(?:src|href|content)="([^"]+)"/g)) voeg(m[1]);
        for (const m of html.matchAll(new RegExp('"(' + regEsc(basis) + '/[^"]+)"', 'g'))) voeg(m[1]);
    }
    (function loop(v) {
        if (typeof v === 'string') voeg(v);
        else if (v && typeof v === 'object') Object.values(v).forEach(loop);
    })(data);
    for (const rel of nodig) schrijf(rel, fs.readFileSync(path.join(ROOT, rel)));
    return nodig.size;
}

function mapGrootte(map) {
    let som = 0;
    for (const naam of fs.readdirSync(map)) {
        const pad = path.join(map, naam);
        const st = fs.statSync(pad);
        som += st.isDirectory() ? mapGrootte(pad) : st.size;
    }
    return som;
}

const woorden = html => html.replace(/<(script|style|svg)\b[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ').split(/\s+/).filter(Boolean).length;

/* ── Bouwen ─────────────────────────────────────────────────────────── */

function bouw() {
    const bron = leesData();
    const basis = ((bron.seo && bron.seo.basis) || 'https://allicosystems.nl').replace(/\/$/, '');
    const data = metVastePaden(bron);
    const sjabloon = lees('index.html');
    const blokken = paginaBlokken(sjabloon);
    const lijst = paginaLijst(bron);
    const routes = Object.fromEntries(lijst.map(p => [p.id, p.url]));

    for (const p of lijst) if (!blokken.some(b => b.id === p.id)) stop('Voor "' + p.id + '" staat geen <div class="page" id="page-' + p.id + '"> in index.html.');
    const opname = render(sjabloon, data, routes);

    // Op een netwerkmap (Wescloud) laat Samba een geopend bestand even als .smbdelete... staan; daarom opnieuw proberen.
    try {
        fs.rmSync(UIT, { recursive: true, force: true, maxRetries: 10, retryDelay: 300 });
    } catch (e) {
        stop('De map site/ kon niet leeg worden gemaakt (' + e.code + '). Draait "node bouw.js --kijk" nog? Stop die eerst met Ctrl+C.');
    }
    const gebouwd = [];
    console.log('\n  adres'.padEnd(56) + 'woorden  titel');
    for (const p of lijst) {
        const html = bouwPagina(sjabloon, blokken, p, opname, routes, basis);
        schrijf(p.url.slice(1) + 'index.html', html);
        gebouwd.push(html);
        const eigen = vindElement(html, 'page-' + p.id);
        const koppen = (html.slice(eigen.start, eigen.eind).match(/<h1\b/g) || []).length;
        if (koppen !== 1) waarschuw('Pagina ' + p.url + ' heeft ' + koppen + ' hoofdkoppen (h1); een is het beste.');
        console.log('  ' + p.url.padEnd(54) + String(woorden(html)).padStart(6) + '   ' + p.titel);
    }

    const p404 = { id: '404', url: '/404.html', nav: null, nietVindbaar: true, blok: blok404, titel: 'Pagina niet gevonden | ' + bron.bedrijf.naam, omschrijving: 'Dit adres bestaat niet of niet meer.' };
    const html404 = bouwPagina(sjabloon, blokken, p404, opname, routes, basis);
    schrijf('404.html', html404);
    gebouwd.push(html404);

    // De gebouwde pagina's tekenen niets opnieuw (alles staat al in de HTML); dit is alleen voor de formulieren.
    schrijf('data/siteData.js', '// Gemaakt door bouw.js uit data/siteData.js. Niet hier aanpassen: wijzig de bron en bouw opnieuw.\n'
        + 'window.SITE_DATA = ' + JSON.stringify(bron, null, 2) + ';\n');

    const vandaag = new Date().toISOString().slice(0, 10);
    schrijf('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + lijst.map(p => '  <url>\n    <loc>' + basis + p.url + '</loc>\n    <lastmod>' + vandaag + '</lastmod>\n  </url>\n').join('')
        + '</urlset>\n');

    const aantal = kopieerBeelden(gebouwd, data, basis);
    console.log('\n' + lijst.length + ' pagina\'s, 404.html, sitemap.xml en ' + aantal + ' andere bestanden in site/ ('
        + (mapGrootte(UIT) / 1e6).toFixed(1).replace('.', ',') + ' MB).');
    if (meldingen.length) console.log('\nLet op:\n' + meldingen.map(m => '  - ' + m).join('\n'));
    console.log('\nUploaden: de inhoud van de map site/ (ook het verborgen bestand .htaccess) naar de hoofdmap van de webruimte.');
}

/* ── Bekijken ───────────────────────────────────────────────────────── */

function kijk(poort) {
    const soort = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon' };
    http.createServer((req, res) => {
        let rel;
        try { rel = decodeURIComponent(req.url.split(/[?#]/)[0]); } catch (e) { rel = '/'; }
        let bestand = path.join(UIT, path.normalize(rel));
        if (!bestand.startsWith(UIT)) bestand = UIT;
        if (fs.existsSync(bestand) && fs.statSync(bestand).isDirectory()) {
            if (!rel.endsWith('/')) { res.writeHead(301, { Location: rel + '/' }); return res.end(); }
            bestand = path.join(bestand, 'index.html');
        }
        const gevonden = fs.existsSync(bestand) && path.basename(bestand) !== '.htaccess';
        if (!gevonden) bestand = path.join(UIT, '404.html');
        res.writeHead(gevonden ? 200 : 404, { 'Content-Type': soort[path.extname(bestand).toLowerCase()] || 'application/octet-stream' });
        fs.createReadStream(bestand).pipe(res);
    }).listen(poort, '127.0.0.1', () => console.log('\nDe gebouwde site staat op http://localhost:' + poort + '  (stoppen: Ctrl+C)'));
}

bouw();
if (process.argv.includes('--kijk')) kijk(Number(process.env.POORT) || 8080);
