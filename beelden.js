#!/usr/bin/env node
/*
 * beelden.js maakt kleinere versies van de foto's, zodat de site ook op een trage verbinding snel laadt.
 *
 *   node beelden.js          maakt wat nog ontbreekt (bestaande versies blijven staan)
 *   node beelden.js --opnieuw  maakt alle versies opnieuw (bijvoorbeeld na een betere foto met dezelfde naam)
 *
 * Wat het doet, per foto die in data/siteData.js of index.html staat:
 *   - een foto (jpg, jpeg, webp) breder dan 800 pixels krijgt naam-800.webp en naam-1200.webp ernaast;
 *     de foto's van de scrollanimatie (GROOT hieronder) ook naam-1600.webp;
 *   - een schermafbeelding (png) krijgt naam.webp in dezelfde maat.
 * bouw.js ziet die versies vanzelf en laat de browser de kleinste kiezen die scherp genoeg is (srcset).
 * Het origineel blijft staan en verandert niet; in siteData.js blijft gewoon "foto": "kemkens.jpeg" staan.
 *
 * Nodig: cwebp (gratis, van Google). Mac: brew install webp. Windows: download "libwebp" van
 * https://developers.google.com/speed/webp/download en zet cwebp.exe in je PATH.
 * Nieuwe foto toegevoegd? Draai eerst node beelden.js en dan node bouw.js. bouw.js meldt het als een foto
 * nog geen kleine versie heeft.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const MATEN = [800, 1200];
const GROOT = ['PCB.webp', 'schakelkast.webp'];     // groot in beeld op de home: ook 1600 pixels
const KWALITEIT = 80;
const opnieuw = process.argv.includes('--opnieuw');

function heeftCwebp() {
    try { execFileSync('cwebp', ['-version'], { stdio: 'ignore' }); return true; } catch (e) { return false; }
}

// Breedte van een beeld uit de kop van het bestand (PNG, JPEG, WebP), zonder pakketten.
function breedte(bestand) {
    const b = fs.readFileSync(bestand);
    if (b.slice(1, 4).toString() === 'PNG') return b.readUInt32BE(16);
    if (b.slice(0, 4).toString() === 'RIFF' && b.slice(8, 12).toString() === 'WEBP') {
        const soort = b.slice(12, 16).toString();
        if (soort === 'VP8 ') return b.readUInt16LE(26) & 0x3fff;
        if (soort === 'VP8L') return 1 + (((b[22] & 0x3f) << 8) | b[21]);
        if (soort === 'VP8X') return 1 + b.readUIntLE(24, 3);
    }
    if (b[0] === 0xff && b[1] === 0xd8) {
        let i = 2;
        while (i < b.length) {
            if (b[i] !== 0xff) { i++; continue; }
            const merk = b[i + 1];
            if ((merk >= 0xc0 && merk <= 0xc3) || (merk >= 0xc5 && merk <= 0xc7) || (merk >= 0xc9 && merk <= 0xcb) || (merk >= 0xcd && merk <= 0xcf)) return b.readUInt16BE(i + 7);
            i += 2 + b.readUInt16BE(i + 2);
        }
    }
    return 0;
}

// Alle beelden die de site gebruikt: uit siteData.js ("foto", "hero", ...) en uit index.html (src="...").
function gebruikteBeelden() {
    const namen = new Set();
    const data = fs.readFileSync(path.join(ROOT, 'data/siteData.js'), 'utf8');
    for (const m of data.matchAll(/"(?:foto|hero|introFoto)"\s*:\s*"([^"]+\.(?:png|jpe?g|webp))"/gi)) namen.add(m[1]);
    const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
    for (const m of html.matchAll(/<img\b[^>]*\bsrc="([^"$][^"]*\.(?:png|jpe?g|webp))"/gi)) namen.add(m[1]);
    return [...namen].filter(n => !/-(?:800|1200|1600)\.webp$/.test(n) && fs.existsSync(path.join(ROOT, n)));
}

function maak(bron, doel, maat) {
    if (!opnieuw && fs.existsSync(doel)) return 'bestaat al';
    const args = ['-quiet', '-q', String(KWALITEIT), '-m', '6', '-metadata', 'none'];
    if (maat) args.push('-resize', String(maat), '0');
    execFileSync('cwebp', [...args, bron, '-o', doel]);
    return Math.round(fs.statSync(doel).size / 1024) + ' kB';
}

if (!heeftCwebp()) {
    console.error('cwebp ontbreekt. Mac: brew install webp. Windows: zie de uitleg bovenin beelden.js.');
    process.exit(1);
}
let aantal = 0;
for (const naam of gebruikteBeelden()) {
    const bron = path.join(ROOT, naam);
    const basis = naam.replace(/\.[a-z]+$/i, '');
    const w = breedte(bron);
    const regels = [];
    if (/\.png$/i.test(naam)) {
        regels.push(basis + '.webp: ' + maak(bron, path.join(ROOT, basis + '.webp'), 0));
    } else if (w > 800) {
        const maten = GROOT.includes(naam) ? [...MATEN, 1600] : MATEN;
        for (const m of maten) if (m < w || m === MATEN[0]) regels.push(basis + '-' + m + '.webp: ' + maak(bron, path.join(ROOT, basis + '-' + m + '.webp'), Math.min(m, w)));
    }
    if (regels.length) {
        aantal += regels.length;
        console.log(naam + ' (' + Math.round(fs.statSync(bron).size / 1024) + ' kB, ' + w + ' px)\n  ' + regels.join('\n  '));
    }
}
console.log('\n' + aantal + ' versies bekeken. Bouw de site nu opnieuw: node bouw.js');
