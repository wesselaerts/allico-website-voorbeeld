// Alle website-content staat hier. Pas dit bestand aan om de site te updaten.
// Later te vervangen door een server-side endpoint die dit genereert vanuit een database.
//
// ════════════════════════════════════════════════════════════════════════════════════════════
// WEGWIJZER: zoek (Ctrl+F) op het adres van een pagina, bijvoorbeeld "ot-beveiliging-iec-62443",
// op een stukje van de tekst die je wilt veranderen, of op een van deze labels:
//
//   [BEDRIJF]          naam, adres, telefoon, e-mail
//   [FORMULIER]        waar de projectcheck en het terugbelverzoek naartoe gaan
//   [SEO-VAST]         titel en omschrijving van home, de overzichten en contact
//   [HOME]             teksten van de home en de vijf stappen van de scrollanimatie
//   [SPECIALISATIES]   de dienstpagina's, spec-1 tot en met spec-5
//   [APPS]             de strook met beelden van onze apps
//   [PROJECTEN]        de projectpagina's
//   [NIEUWS]           de nieuwsberichten
//   [CONTACT]          de tekst over het werkgebied op de contactpagina
//   [PAGINA]           staat boven elke pagina, met zijn adres en id
//
// [VELDEN] Wat een pagina mag hebben. Alles is gewone tekst, zonder HTML. Laat je een veld met
// "mag" weg, dan verdwijnt dat stuk van de pagina; er hoeft niets in index.html te veranderen.
//
//   seo.adres, seo.titel, seo.omschrijving   adres, blauwe regel in Google (ongeveer 60 tekens),
//                                            tekst eronder (hooguit 155 tekens)
//   titel, samenvatting                      korte naam en tekst op de overzichten en in de footer
//   detail.kop                (mag)          de hoofdkop (h1) van de pagina; zonder dit veld is dat "titel".
//                                            Bij een nieuwsbericht heet dit veld "kop".
//   detail.kopAanpak, detail.kopWatWijDoen   (mag) andere tekst voor de koppen "Aanpak" en "Wat wij doen"
//   secties     (mag)   [{ "kop": "...", "alineas": ["..."], "punten": ["..."] }]   tekstblok met tussenkop
//   praktijk    (mag)   { "project": "project-1", "kop": "...", "tekst": "..." }    project als voorbeeld, met link
//   vragen      (mag)   [{ "vraag": "...", "antwoord": "..." }]                     veelgestelde vragen
//   verwant     (mag)   ["spec-4", { "pagina": "project-1", "tekst": "..." }]       links "Zie ook", op id
//
// Bij een specialisatie en een project staan secties, praktijk, vragen en verwant in "detail".
// Bij een nieuwsbericht staan ze naast "tekst". In "tekst" is elk stuk een alinea ("gewone tekst"),
// een tussenkop ({ "kop": "..." }) of een lijst ({ "punten": ["...", "..."] }).
// Na een wijziging: node bouw.js (zie README.md).
// ════════════════════════════════════════════════════════════════════════════════════════════
window.SITE_DATA = {

  // [BEDRIJF]
  "bedrijf": {
    "naam": "Allico Systems",
    "adres": "Expeditiestraat 11, 5961 PX Horst",
    "telefoon": "+31 6 11 67 17 19",
    "whatsapp": "31611671719",
    "email": "info@allico.nl",
    "linkedin": "https://www.linkedin.com/company/allico-systems/",
    "beschrijving": "Hardware, firmware en software in eigen beheer.",
    "copyright": "2026 Allico Systems"
  },

  // [FORMULIER] Waar de projectcheck en het terugbelverzoek naartoe gaan.
  // Leeg = het mailprogramma van de bezoeker opent met het bericht erin.
  // Invullen met bijvoorbeeld een Formspree-adres ("https://formspree.io/f/xxxxxxx"), dan komt alles direct in je inbox.
  "formulier": {
    "endpoint": ""
  },

  // [SEO-VAST] Vindbaarheid. bouw.js maakt van elke pagina een eigen HTML-bestand met een eigen adres (zie README.md).
  // "adres" is het stuk na allicosystems.nl/, "titel" de blauwe regel in Google (ongeveer 60 tekens)
  // en "omschrijving" de tekst eronder (hooguit 155 tekens). Bij een specialisatie, project of nieuwsbericht
  // staan dezelfde drie velden in het blok "seo" van dat onderdeel. Een adres dat al online staat niet meer wijzigen.
  "seo": {
    "basis": "https://allicosystems.nl",
    "paginas": {
      "home": {
        "titel": "Allico Systems | Engineering, Hardware & Software",
        "omschrijving": "Allico Systems is gespecialiseerd in de ontwikkeling en het combineren van sensortechniek, IoT-systemen en industriële besturingstechniek."
      },
      "specialisatie": {
        "adres": "specialisaties",
        "titel": "Wat wij doen: van printplaat tot beveiligde besturing | Allico Systems",
        "omschrijving": "Hardware, embedded software en PLC-besturing, dashboards, apps en beveiliging volgens IEC 62443. Vijf specialismen in één hand, van idee tot systeem."
      },
      "projecten": {
        "adres": "projecten",
        "titel": "Projecten: wat we voor klanten hebben gebouwd | Allico Systems",
        "omschrijving": "Een selectie van projecten: sprinklerinstallaties veilig op afstand testen voor Kemkens en een LMRA-app voor veiligheidsregistratie op de bouwplaats."
      },
      "nieuws": {
        "adres": "nieuws",
        "titel": "Nieuws over PLCnext, NIS2 en onze projecten | Allico Systems",
        "omschrijving": "Nieuws van Allico Systems: de Cyberbeveiligingswet (NIS2), onze certificering bij Phoenix Contact en nieuwe opdrachten."
      },
      "contact": {
        "adres": "contact",
        "titel": "Contact | Allico Systems, Horst",
        "omschrijving": "Neem contact op met Allico Systems in Horst, Noord-Limburg. Start de projectcheck of laat je nummer achter, dan bellen we binnen een werkdag terug."
      }
    }
  },

  // [HOME]
  "home": {
    "introLabel": "Engineering partner",
    "introTitel": "Van concept naar bewezen systeem",
    "introTekst": "Allico Systems ontwikkelt hardware en software voor prototyping, digitalisering, automatisering en verbeteringen op het gebied van cybersecurity.",
    "introCta": "Onze specialisaties",
    "introFoto": "",
    "scrollDividerTekst": "Hoe wij werken",
    "stappen": [
      {
        "tag": "Allico Systems",
        "titel": "Van idee naar werkend product",
        "tekst": "Wij ontwikkelen elektronische systemen van concept tot eindproduct: hardware, firmware en software in eigen beheer. Scroll om te zien hoe."
      },
      {
        "tag": "Stap 1: Concept",
        "titel": "Schematisch uitwerken",
        "tekst": "Elk project begint met een grondige analyse. Wij vertalen uw functionele wensen naar een technisch schema: componentkeuze, signaalpaden en voedingsarchitectuur."
      },
      {
        "tag": "Stap 2: Hardware",
        "titel": "Hardware ontwerp & productie",
        "tekst": "Het schema wordt doorontwikkeld tot een PCB-layout. Wij ontwerpen met oog voor EMC, thermisch management en maakbaarheid, en begeleiden de productie tot en met geassembleerde printplaten."
      },
      {
        "tag": "Stap 3: Software",
        "titel": "Firmware & besturing",
        "tekst": "Hardware zonder intelligentie doet niets. Wij schrijven de firmware, communicatieprotocollen en besturingssoftware die uw systeem tot leven brengen."
      },
      {
        "tag": "Stap 4: Oplevering",
        "titel": "Getest, gedocumenteerd, klaar",
        "tekst": "Het eindproduct wordt volledig getest en gedocumenteerd opgeleverd. Van prototype tot kleine serie; wij begeleiden het gehele traject."
      }
    ]
  },

  // [SPECIALISATIES]
  "specialisaties": [

    // [PAGINA] /elektronica-ontwikkeling/  (spec-1)
    {
      "id": "spec-1",
      "seo": {
        "adres": "elektronica-ontwikkeling",
        "titel": "Elektronica-ontwikkeling en PCB-ontwerp op maat | Allico Systems",
        "omschrijving": "Elektronica laten ontwikkelen: van idee en schema tot printplaat, prototype en kleine serie. PCB-ontwerp, firmware en testen in één hand."
      },
      "num": "01",
      "foto": "header van hardware.jpeg",
      "fotoAlt": "Hardware ontwikkeling",
      "titel": "Hardware ontwikkeling op maat",
      "samenvatting": "Schematisch ontwerp en PCB‑layout met toekomstbestendige componentkeuzes, gericht op de stap van concept naar prototype en doorontwikkeling naar product.",
      "cta": {
        "titel": "Een idee dat een eigen print nodig heeft?",
        "tekst": "Van schets tot werkend prototype: we denken mee over wat haalbaar is en wat het ongeveer kost."
      },
      "detail": {
        "topbarTag": "01 | Hardware",
        "hero": "Hardware compositie.jpeg",
        "kop": "Elektronica laten ontwikkelen: printplaat, prototype en kleine serie",
        "lead": "Heb je een product, machine of meetopstelling waar geen standaard elektronica voor bestaat? Allico Systems ontwikkelt maatwerk elektronica: van idee en schema tot een printplaat (PCB) die werkt, een getest prototype en de stap naar een kleine serie. Hardware en firmware maken we in eigen huis, zodat ze vanaf de eerste versie bij elkaar passen.",
        "aanpakAlineas": [
          "Elk traject begint bij het einddoel: waar dient het product voor en welk probleem lost het op? Vanuit die functionele eisen maken we een concreet concept en toetsen we of het technisch haalbaar is. Daarna werken we het uit tot een schema en een PCB-ontwerp dat direct bij onze productiepartners gemaakt kan worden. Na assemblage ligt het eerste prototype op tafel en zie je het concept voor het eerst in de praktijk werken.",
          "Het eerste prototype zetten we op met een duidelijk plan; de stappen daarna zijn bewust iteratief. Met praktijktesten verzamelen we inzichten die we in de volgende versie verwerken. Zodra de hardware stabiel is, begeleiden we de stap naar productie in kleine of middelgrote serie."
        ],
        "watWijDoen": [
          "Vertaling van idee naar een technisch haalbaar plan",
          "Schema-ontwerp en onderbouwde componentkeuze",
          "PCB-ontwerp (printplaat) met aandacht voor EMC en warmte",
          "Prototype bouwen en functioneel testen in de praktijk",
          "Begeleiding naar productie in kleine en middelgrote serie"
        ],
        "secties": [
          {
            "kop": "Printplaat laten ontwerpen",
            "alineas": [
              "Een printplaat ontwerpen is meer dan lijnen trekken tussen onderdelen. We kiezen onderdelen die over een paar jaar nog leverbaar zijn, houden rekening met storing (EMC) en warmte, en ontwerpen zo dat de print goed te maken en te testen is. Dat voorkomt verrassingen bij de eerste serie."
            ]
          },
          {
            "kop": "Elektronica met firmware, zuinig en draadloos",
            "alineas": [
              "Veel ontwerpen krijgen een eigen processor en firmware. Die schrijven we zelf, in C en C++. Dat maakt keuzes mogelijk die je alleen goed maakt als hardware en software uit één hand komen: een sensor die zuinig genoeg is voor een batterij, of een print die draadloos meetwaarden verstuurt via LoRa, Bluetooth, wifi of het mobiele netwerk."
            ]
          },
          {
            "kop": "Van prototype naar kleine serie",
            "alineas": [
              "Een prototype dat werkt is nog geen product. We maken het ontwerp geschikt voor productie, laten de printen assembleren bij onze productiepartners en leveren ze getest en gedocumenteerd op. Een voorbeeld is de ARK-i, een print die we zelf hebben ontworpen en die je op de home in een schakelkast ziet."
            ]
          }
        ],
        "vragen": [
          {
            "vraag": "Ik heb alleen een idee. Is dat genoeg om te beginnen?",
            "antwoord": "Ja. We beginnen bij wat het product moet doen en voor wie. Daaruit volgt een concept en een inschatting of het technisch haalbaar is. De projectcheck op de contactpagina is daarvoor de snelste start."
          },
          {
            "vraag": "Ontwerpen jullie alleen de printplaat, of ook de software erop?",
            "antwoord": "Allebei. Schema, printplaat en firmware ontwikkelen we in eigen huis. Wil je er ook een dashboard of een app bij, dan bouwen we die ook."
          },
          {
            "vraag": "Kunnen jullie ook een kleine serie leveren?",
            "antwoord": "Ja. Na het prototype begeleiden we de productie bij onze productiepartners, van enkele stuks tot een middelgrote serie."
          },
          {
            "vraag": "Waar let je op bij een printplaat voor een machine of installatie?",
            "antwoord": "Op de omgeving waarin de print moet werken: storing van motoren en frequentieregelaars, temperatuur, vocht en trillingen. Die eisen bepalen de keuze van onderdelen, de indeling van de print en de manier van testen."
          }
        ],
        "verwant": [
          { "pagina": "spec-2", "tekst": "PLC-besturing en embedded software" },
          { "pagina": "spec-3", "tekst": "Dashboard voor machines en sensordata" },
          { "pagina": "spec-5", "tekst": "App laten maken voor machines en installaties" }
        ],
        "toepassingen": "Meetapparatuur, embedded systemen, sensortechnologie en op maat gemaakte modules.",
        "technologieen": ["KiCad", "EMC-ontwerp", "IPC-2221", "SMD/THT"],
        "meerWeten": "Neem contact op om te bespreken wat je project nodig heeft."
      }
    },

    // [PAGINA] /plc-besturing-embedded-software/  (spec-2)
    {
      "id": "spec-2",
      "seo": {
        "adres": "plc-besturing-embedded-software",
        "titel": "PLC laten programmeren en machinebesturing op maat | Allico Systems",
        "omschrijving": "PLC laten programmeren voor je machine of installatie: PLC-besturing op maat met PLCnext van Phoenix Contact, met bediening, koppelingen en beveiliging."
      },
      "num": "02",
      "foto": "Sensor in veld.webp",
      "fotoAlt": "Software & communicatie",
      "titel": "Software voor communicatie en besturing",
      "samenvatting": "Embedded firmware, protocollen en besturingssoftware die hardware intelligent maakt en systemen laat samenwerken.",
      "cta": {
        "titel": "Een installatie die slimmer kan?",
        "tekst": "Vertel ons welk systeem je hebt en wat het moet doen. We kijken waar de winst zit."
      },
      "detail": {
        "topbarTag": "02 | Software",
        "hero": "Sensor in veld.webp",
        "kop": "PLC-besturing laten ontwikkelen: machinebesturing op maat met PLCnext",
        "lead": "Zoek je iemand die de besturing van je machine of installatie ontwerpt en programmeert? Allico Systems ontwikkelt PLC-besturingen op maat, voor een nieuwe machine of voor een bestaande installatie die slimmer moet. We werken met PLCnext van Phoenix Contact en leveren de bediening (HMI), de koppelingen en de beveiliging erbij.",
        "aanpakAlineas": [
          "Elke besturing is anders, net als de machine eromheen. Daarom begint het bij het einddoel: wat moet de installatie doen, wie bedient hem en wat mag er nooit misgaan? Van daaruit leggen we de werking vast en bouwen we de software in overzichtelijke delen.",
          "Bestaande installaties praten vaak met meerdere systemen tegelijk. Wij streven naar één geheel, waarin besturing, bediening en data op elkaar aansluiten. We werken waar nodig met eigen platformen, maar sluiten ook aan op systemen die er al staan.",
          "De software bouwen we modulair en inzichtelijk, zodat zowel gebruikers als monteurs ermee kunnen werken en het kunnen onderhouden."
        ],
        "watWijDoen": [
          "PLC-programmering en procesbesturing volgens IEC 61131",
          "Bediening: HMI op de machine of een dashboard direct vanaf de besturing",
          "Koppelingen via Modbus, OPC UA, MQTT en CAN",
          "Veilige toegang op afstand voor beheer en storingen",
          "Embedded firmware in C en C++ voor eigen elektronica"
        ],
        "secties": [
          {
            "kop": "Waarom PLCnext van Phoenix Contact",
            "alineas": [
              "PLCnext is het open besturingsplatform van Phoenix Contact. Het combineert de vertrouwde PLC-talen uit IEC 61131 met hogere programmeertalen als C, C++ en MATLAB Simulink, in dezelfde realtime-omgeving. Daardoor kan één besturing meer dan een traditionele PLC: een dashboard in de browser direct vanaf de besturing, beveiligde toegang op afstand en koppelingen naar cloud- of MES-systemen, zonder aparte industriële pc in de kast.",
              "Wij hebben de workshop PLCnext Engineer bij Phoenix Contact gevolgd en zetten het certificeringstraject voort. De techniek passen we inmiddels toe in meerdere projecten."
            ]
          },
          {
            "kop": "Nieuwe machine of bestaande installatie",
            "alineas": [
              "Voor een nieuwe machine denken we vanaf het ontwerp mee over sensoren, aandrijving en bediening. Bij een bestaande installatie kijken we eerst wat er staat en waar de winst zit: meer inzicht, minder handwerk, bediening op afstand of een koppeling met een ander systeem."
            ]
          },
          {
            "kop": "Embedded software en draadloze communicatie",
            "alineas": [
              "Niet alles is een PLC. Voor eigen elektronica schrijven we embedded firmware in C en C++, met of zonder besturingssysteem (bare metal en FreeRTOS). Die hardware kan deel zijn van een groter systeem of een losse sensor in een afgelegen weiland, en communiceert bekabeld of draadloos via LoRa, Bluetooth, wifi of het mobiele netwerk."
            ]
          }
        ],
        "praktijk": {
          "project": "project-1",
          "kop": "Uit de praktijk: sprinklerinstallaties op afstand testen",
          "tekst": "Voor Kemkens Brandbeveiliging ontwikkelden we de integratie en het beheerportaal waarmee sprinklerinstallaties op afstand getest en gevolgd worden, met beveiliging opgebouwd vanuit IEC 62443."
        },
        "vragen": [
          {
            "vraag": "Met welke PLC werken jullie?",
            "antwoord": "Onze besturingen bouwen we op PLCnext van Phoenix Contact. Dat platform combineert klassieke PLC-talen met hogere programmeertalen. Het past daardoor goed bij besturingen die ook data verwerken, een dashboard tonen of veilig op afstand bereikbaar moeten zijn."
          },
          {
            "vraag": "Kan een bestaande machine een nieuwe of uitgebreide besturing krijgen?",
            "antwoord": "Vaak wel. We kijken eerst naar wat er staat en wat de machine moet kunnen. Daarna bepalen we samen of uitbreiden genoeg is of dat een nieuwe besturing verstandiger is."
          },
          {
            "vraag": "Krijg ik ook een bedieningsscherm of dashboard?",
            "antwoord": "Ja. De bediening hoort bij de besturing. Dat kan een scherm op de machine zijn, een dashboard in de browser dat direct vanaf de besturing draait, of een app op je telefoon."
          },
          {
            "vraag": "Hoe wordt de besturing beveiligd?",
            "antwoord": "Beveiliging nemen we vanaf het ontwerp mee, volgens de gedachte van IEC 62443: wie mag erbij, via welke verbinding en wat gebeurt er als het misgaat. Dat is ook wat opdrachtgevers vaker vragen sinds de Cyberbeveiligingswet (NIS2) geldt."
          }
        ],
        "verwant": [
          { "pagina": "spec-4", "tekst": "OT-beveiliging en IEC 62443-advies" },
          { "pagina": "spec-3", "tekst": "Dashboard voor machines en PLC-data" },
          { "pagina": "spec-1", "tekst": "Elektronica laten ontwikkelen" },
          { "pagina": "nieuws-1", "tekst": "Ons certificeringstraject bij Phoenix Contact (PLCnext)" }
        ],
        "toepassingen": "Machinebouw, procesautomatisering, installaties op afstand, IoT-gateways en slimme sensoren.",
        "technologieen": ["PLCnext", "IEC 61131", "C / C++", "FreeRTOS", "Modbus", "MQTT", "OPC UA", "LoRaWAN"],
        "meerWeten": "Vertel ons over je machine of installatie, dan kijken we hoe de besturing slimmer kan."
      }
    },

    // [PAGINA] /dashboards/  (spec-3)
    {
      "id": "spec-3",
      "seo": {
        "adres": "dashboards",
        "titel": "Dashboard voor machines, PLC-data en sensordata | Allico Systems",
        "omschrijving": "Dashboard laten maken voor machines en installaties: PLC-data en sensordata realtime in beeld, online, op de machine of op je telefoon."
      },
      "num": "03",
      "foto": "dashboard voorbeeld bijgesneden.jpeg",
      "fotoAlt": "Dashboards & applicaties",
      "titel": "Dashboards en andere applicaties",
      "samenvatting": "Maatwerk dashboards en applicaties die data omzetten in bruikbare inzichten: voor datavisualisatie, besturingsplatformen en online omgevingen.",
      "cta": {
        "titel": "Zien wat je eigen data je vertelt?",
        "tekst": "We maken graag een demo op basis van jouw eigen data."
      },
      "detail": {
        "topbarTag": "03 | Dashboards",
        "hero": "dashboard voorbeeld.jpeg",
        "kop": "Dashboard laten maken voor machines, PLC-data en sensordata",
        "lead": "Data uit een machine of sensor krijgt pas waarde als iemand er iets mee kan. Allico Systems maakt dashboards op maat die PLC-data en sensordata realtime laten zien, verbanden zichtbaar maken en waar nodig ook de bediening bieden: online, op een scherm bij de machine of op je telefoon.",
        "aanpakAlineas": [
          "Een standaard dashboard schiet vaak tekort. Een losse grafiek vertelt niet het hele verhaal, en een Excel-sheet al helemaal niet. Daarom ontwerpen we elk dashboard vanuit drie vragen: wie kijkt ernaar, welke beslissing moet hij nemen en welke gegevens heeft hij daarvoor nodig?",
          "Daarna halen we de data op waar hij ontstaat: uit de PLC, uit sensoren of uit een bestaand systeem. Die slaan we op en tonen we op de manier die bij de gebruiker past, van een productieoverzicht voor de leiding tot een bedieningspaneel (HMI) voor de operator."
        ],
        "watWijDoen": [
          "Realtime dashboards voor machines, productie en installaties",
          "Data ophalen uit PLC's en sensoren",
          "Opslag en geschiedenis, met vergelijkingen over langere tijd",
          "Bedieningspanelen voor installaties, online en offline",
          "Geschikt voor telefoon, tablet en computer"
        ],
        "secties": [
          {
            "kop": "Power BI of maatwerk?",
            "alineas": [
              "Pakketten als Power BI en Grafana zijn sterk in grafieken van gegevens die al netjes in een database staan. Een dashboard op maat loont als de data nog uit de machine moet komen, als je ook wilt bedienen of meldingen wilt krijgen, of als iemand op de werkvloer in één oogopslag moet zien wat er speelt. Wat het beste past, hangt af van je situatie. Soms is dat een combinatie."
            ]
          },
          {
            "kop": "Dashboard direct vanaf de besturing",
            "alineas": [
              "Met PLCnext kan een dashboard direct vanaf de besturing draaien, in de browser, zonder aparte pc in de kast. In andere situaties bouwen we met onder meer Node-RED, Node.js en SQL, of maken we er een app van."
            ]
          }
        ],
        "praktijk": {
          "project": "project-1",
          "kop": "Uit de praktijk: één beheerportaal voor installaties in heel Nederland",
          "tekst": "Voor Kemkens Brandbeveiliging ontwikkelden we een beheerportaal waarin medewerkers hun installaties op afstand volgen en testen. Gebruiksgemak was een harde eis: het portaal moest praktisch blijven voor de mensen die er dagelijks mee werken."
        },
        "vragen": [
          {
            "vraag": "Kan een dashboard ook een installatie bedienen?",
            "antwoord": "Ja. Naast meekijken kan een dashboard ook bedienen, bijvoorbeeld een test starten of een instelling wijzigen. De beveiliging stemmen we daarop af, want bedienen op afstand vraagt meer dan alleen kijken."
          },
          {
            "vraag": "Waar draait het dashboard?",
            "antwoord": "Dat hangt af van het doel: online, zodat je overal kunt meekijken, lokaal op een scherm bij de machine, of allebei. Ook zonder internetverbinding kan een dashboard blijven werken."
          },
          {
            "vraag": "Kunnen jullie onze bestaande data gebruiken?",
            "antwoord": "Ja. We maken graag een eerste opzet op basis van je eigen data, zodat je ziet wat het oplevert voordat je verder gaat."
          },
          {
            "vraag": "Wie mag wat zien?",
            "antwoord": "Dat leggen we per gebruiker vast. Een operator ziet zijn machine, een leidinggevende het overzicht. De toegang beveiligen we met onder meer tweestapsverificatie."
          }
        ],
        "verwant": [
          { "pagina": "spec-5", "tekst": "App laten maken voor machines en de werkvloer" },
          { "pagina": "spec-2", "tekst": "PLC-besturing laten ontwikkelen" },
          { "pagina": "spec-4", "tekst": "OT-beveiliging en veilige toegang op afstand" },
          { "pagina": "project-2", "tekst": "LMRA-app met direct overzicht voor leidinggevenden" }
        ],
        "toepassingen": "Productie-overzicht, machines en installaties, utiliteiten, gebouwbeheer, logistiek en energie-inzicht.",
        "technologieen": ["Node-RED", "Node.js", "Swift", "SQL", "REST"],
        "meerWeten": "We maken graag een demo op basis van je eigen data."
      }
    },

    // [PAGINA] /ot-beveiliging-iec-62443/  (spec-4)
    {
      "id": "spec-4",
      "seo": {
        "adres": "ot-beveiliging-iec-62443",
        "titel": "OT-beveiliging (OT security) en IEC 62443-advies | Allico Systems",
        "omschrijving": "OT-beveiliging voor machinebouwers en installaties: risicoanalyse, veilige toegang op afstand en besturing ontworpen volgens IEC 62443 en NIS2."
      },
      "num": "04",
      "foto": "Versleutelde beveiliging.webp",
      "fotoAlt": "Cybersecurity",
      "titel": "Cybersecurity en beveiligde verbindingen",
      "samenvatting": "Doordachte beveiliging voor dataplatformen en installaties op afstand, afgestemd op het beveiligingsprofiel van uw systeem.",
      "cta": {
        "titel": "Hoe veilig is jouw installatie op afstand?",
        "tekst": "We bespreken de risico's van jouw systeem en wat er nodig is, ook met het oog op de Cyberbeveiligingswet."
      },
      "detail": {
        "topbarTag": "04 | Cybersecurity",
        "hero": "Versleutelde beveiliging.webp",
        "kop": "OT-beveiliging en IEC 62443-advies voor machinebouwers en installaties",
        "lead": "Machines en installaties hangen steeds vaker aan een netwerk: voor data, voor onderhoud op afstand, voor bediening. Dat maakt ze kwetsbaar. Allico Systems helpt machinebouwers en bedrijven met installaties om hun besturing (OT) aantoonbaar veilig te maken: met advies, een risicoanalyse en een ontwerp volgens IEC 62443, en met de uitvoering erbij.",
        "aanpakAlineas": [
          "Hoe zwaar de beveiliging moet zijn, bepalen we op basis van het systeem: hoe gevoelig zijn de data, wat kan er gebeuren als een onbevoegde erbij komt, en wie moet er juist wel bij kunnen? Voor een dashboard dat alleen gegevens toont, betekent dat bijvoorbeeld een afgeschermd netwerk, beperkte toegang en tweestapsverificatie.",
          "Bij systemen waarmee installaties op afstand worden bestuurd, ligt de lat veel hoger. Ongeoorloofde toegang heeft daar direct gevolgen voor de veiligheid en de continuïteit. Voor zulke trajecten werken we samen met een vaste partner: hoogwaardige hardware, gecombineerd met software die we samen ontwikkelen."
        ],
        "watWijDoen": [
          "Risicoanalyse: wat moet beschermd worden en waartegen",
          "Netwerken scheiden, zodat een probleem niet overslaat",
          "Veilige toegang op afstand met VPN en tweestapsverificatie",
          "Versleutelde communicatie tussen systemen",
          "Documentatie waarmee je klanten laat zien wat er geregeld is"
        ],
        "secties": [
          {
            "kop": "OT security is iets anders dan IT-beveiliging",
            "alineas": [
              "Op kantoor draait beveiliging om gegevens. In een fabriek of installatie draait het om doorwerken en om veiligheid: een PLC kun je niet zomaar herstarten of elke maand bijwerken. OT-beveiliging (in het Engels OT security) houdt daar rekening mee, met maatregelen rond het netwerk, de toegang en het ontwerp van de besturing zelf."
            ]
          },
          {
            "kop": "IEC 62443 en de Cyberbeveiligingswet",
            "alineas": [
              "IEC 62443 is de internationale norm voor de beveiliging van industriële besturing. De norm is geen wet, maar wel de gangbare manier om te laten zien dat de beveiliging van een machine of installatie doordacht is. Sinds de Cyberbeveiligingswet (de Nederlandse uitwerking van NIS2) op 15 augustus 2026 inging, vragen opdrachtgevers hun leveranciers vaker om dat bewijs."
            ]
          },
          {
            "kop": "Wat wij niet doen",
            "alineas": [
              "Wij zijn geen certificerende instelling en geven geen certificaat af. Wij ontwerpen en bouwen volgens de norm, werken waar nodig samen met gespecialiseerde partners, en leveren de onderbouwing die een auditor of klant wil zien."
            ]
          }
        ],
        "praktijk": {
          "project": "project-1",
          "kop": "Uit de praktijk: brandbeveiliging veilig op afstand testen",
          "tekst": "Voor Kemkens Brandbeveiliging maakten we sprinklerinstallaties in heel Nederland op afstand bereikbaar voor testen en beheer. Omdat het om kritieke installaties gaat, is de verbinding opgebouwd vanuit IEC 62443, met VPN en tweestapsverificatie."
        },
        "vragen": [
          {
            "vraag": "Moet mijn machine of installatie aan IEC 62443 voldoen?",
            "antwoord": "Er is geen wet die de norm voor elke machine verplicht stelt. Wel vragen meer opdrachtgevers erom, en wetgeving zoals de Cyberbeveiligingswet en de Machineverordening die vanaf 20 januari 2027 geldt, vraagt om aantoonbare maatregelen. IEC 62443 is een praktische manier om die in te vullen."
          },
          {
            "vraag": "Kan toegang op afstand veilig?",
            "antwoord": "Ja, mits goed opgezet: een versleutelde verbinding (VPN), tweestapsverificatie, en per persoon vastgelegd wat hij mag. Zo hebben we dat ook voor de installaties van Kemkens ingericht."
          },
          {
            "vraag": "Doen jullie ook certificering?",
            "antwoord": "Nee. Wij ontwerpen en bouwen volgens IEC 62443 en leveren de documentatie. Een certificaat wordt afgegeven door een onafhankelijke instelling."
          },
          {
            "vraag": "Wij zijn een klein bedrijf. Is dit niet te zwaar?",
            "antwoord": "De norm werkt met niveaus. Voor een kleine installatie volstaan vaak een paar goede keuzes: netwerken scheiden, toegang op afstand goed regelen en vastleggen wat er staat. We beginnen altijd bij de risico's, niet bij de norm."
          }
        ],
        "verwant": [
          { "pagina": "nieuws-3", "tekst": "Wat de Cyberbeveiligingswet (NIS2) van toeleveranciers vraagt" },
          { "pagina": "spec-2", "tekst": "PLC-besturing laten ontwikkelen" },
          { "pagina": "project-1", "tekst": "Sprinklerinstallaties op afstand testen voor Kemkens" }
        ],
        "toepassingen": "Machinebouw, installaties op afstand, industriële netwerken, kritieke infrastructuur en verbonden producten.",
        "technologieen": ["IEC 62443", "NIS2", "VPN", "2FA", "TLS 1.3", "HTTPS"],
        "meerWeten": "We bespreken graag de risico's van je systeem en wat er mogelijk is."
      }
    },

    // [PAGINA] /app-ontwikkeling/  (spec-5)
    {
      "id": "spec-5",
      "seo": {
        "adres": "app-ontwikkeling",
        "titel": "App laten maken voor installaties en de werkvloer | Allico Systems",
        "omschrijving": "App laten maken voor je machine, installatie of werkvloer: apps voor iPhone, Android en browser die registraties digitaal maken en installaties bereikbaar."
      },
      "num": "05",
      "foto": "apps/duo.jpg",
      "fotoAlt": "Twee apps van Allico Systems op een iPhone",
      "titel": "App-ontwikkeling op maat",
      "samenvatting": "Apps voor telefoon, tablet en browser die werkprocessen digitaliseren en installaties bereikbaar maken, afgestemd op de mensen die er dagelijks mee werken.",
      "cta": {
        "titel": "Een werkproces dat een eigen app verdient?",
        "tekst": "Vertel ons welk proces of welke installatie je wilt verbeteren. We denken mee over wat haalbaar is en maken graag een eerste opzet."
      },
      "detail": {
        "topbarTag": "05 | Apps",
        "hero": "apps/duo.jpg",
        "kop": "App laten maken voor machines, installaties en de werkvloer",
        "lead": "Een app heeft pas waarde als hij ook echt gebruikt wordt. Allico Systems maakt apps op maat voor bedrijven met machines, installaties of mensen op de werkvloer: apps die registraties en inspecties digitaal maken, en apps die een installatie op afstand zichtbaar en bedienbaar maken.",
        "aanpakAlineas": [
          "Veel bedrijfsprocessen draaien nog op papier, losse Excel-lijsten of systemen die niet met elkaar communiceren. Tegelijk staan er installaties die alleen ter plekke goed uit te lezen zijn. Een goede app brengt dit samen op één plek: overzichtelijk, altijd bij de hand en afgestemd op de mensen die er dagelijks mee werken.",
          "Daarom begint elk traject bij de gebruiker en het einddoel. Wie werkt ermee, waar en onder welke omstandigheden? Vanuit die vragen ontwerpen we een app die snel en zonder uitleg te gebruiken is, op kantoor, op de werkvloer of in het veld.",
          "De app koppelen we aan bestaande systemen, sensoren en besturingen, en beveiligen we op het niveau dat bij het systeem past."
        ],
        "watWijDoen": [
          "Digitaliseren van registraties, inspecties en checklists",
          "Apps voor het monitoren en bedienen van installaties",
          "Meldingen en rapportages voor leidinggevenden en monteurs",
          "Koppelingen met bestaande systemen, sensoren en PLC's",
          "Energiebeheer dat automatisch binnen het netcontract blijft"
        ],
        "secties": [
          {
            "kop": "iPhone, Android of webapp",
            "alineas": [
              "Afhankelijk van het doel bouwen we een app voor iPhone en iPad, voor Android, of een webapp die in de browser werkt. Moet de app op beide soorten telefoons draaien, dan bouwen we hem één keer voor allebei."
            ]
          },
          {
            "kop": "Pakket of maatwerk?",
            "alineas": [
              "Voor veel standaardtaken bestaat een goed pakket, en dan zeggen we dat ook. Maatwerk loont als de app moet praten met je eigen machine, besturing of systemen, als het proces bij jou anders loopt dan het pakket aanneemt, of als medewerkers het pakket in de praktijk niet invullen."
            ]
          }
        ],
        "praktijk": {
          "project": "project-2",
          "kop": "Uit de praktijk: LMRA's en werkplekinspecties in één app",
          "tekst": "Voor een opdrachtgever in de industrie ontwikkelden we een app waarmee medewerkers op de bouwplaats hun LMRA en werkplekinspectie digitaal invullen, ook als ze geen Nederlands spreken. Leidinggevenden zien de resultaten direct en krijgen een melding bij een onveilige situatie."
        },
        "vragen": [
          {
            "vraag": "Kan de app gekoppeld worden aan onze machine of PLC?",
            "antwoord": "Ja. We koppelen apps aan sensoren, PLC's en bestaande systemen, zodat je meetwaarden ziet, meldingen krijgt en waar nodig kunt bedienen."
          },
          {
            "vraag": "Werkt de app ook voor medewerkers die geen Nederlands spreken?",
            "antwoord": "Ja. Bij de LMRA-app was dat een harde eis: de app is zo opgezet dat hij zonder taalbarrière te begrijpen en in te vullen is."
          },
          {
            "vraag": "Wie beheert de app na oplevering?",
            "antwoord": "Dat spreken we vooraf af. Bij de LMRA-app is het beheer (hosting, updates en certificaten) zo ingericht dat de eigen IT-afdeling van de klant het zelf kan doen."
          },
          {
            "vraag": "Kunnen we eerst iets kleins proberen?",
            "antwoord": "Ja. We maken graag een eerste opzet op basis van je eigen proces, zodat je ziet of het werkt voordat je verder gaat."
          }
        ],
        "verwant": [
          { "pagina": "project-2", "tekst": "LMRA-app en werkplekinspecties op maat" },
          { "pagina": "spec-3", "tekst": "Dashboard voor machines en sensordata" },
          { "pagina": "spec-2", "tekst": "PLC-besturing laten ontwikkelen" }
        ],
        "toepassingen": "Installatiebeheer op afstand, monitoring met sensoren, energiebeheer bij netcongestie, werkplekregistratie en inspecties, meldingen en storingen.",
        "technologieen": ["SwiftUI", "REST API", "SQL"],
        "meerWeten": "We maken graag een eerste opzet op basis van je eigen proces."
      }
    }
  ],

  // [APPS] Voorbeelden van onze apps: alleen beeld, niets om in te klikken.
  // Ze staan op de pagina van de specialisatie uit "hoortBij" en in een strook op de home, direct onder de scrollanimatie.
  // Een beeld vervangen of toevoegen: zet een PNG van een iPhone met doorzichtige achtergrond in de map apps/ (ongeveer 560 x 1120 px).
  "appVoorbeelden": {
    "hoortBij": "spec-5",
    "titel": "Een greep uit onze apps",
    "tekst": "Een paar apps die we zelf hebben gebouwd, rond vraagstukken uit de praktijk. De gegevens erin zijn voorbeelden.",
    "home": {
      "label": "App-ontwikkeling",
      "titel": "Ook de app bouwen we zelf",
      "tekst": "Van sensor en besturing tot de app op je telefoon: alles in één hand. Overzichtelijk, veilig en gemaakt voor de mensen die er dagelijks mee werken.",
      "knop": "Meer over app-ontwikkeling"
    },
    "beelden": [
      { "naam": "Kasmonitor", "tekst": "Het kasklimaat per afdeling, gemeten met onze eigen sensoren.", "foto": "apps/kasmonitor.png", "fotoAlt": "De app Kasmonitor met een lucht-vochtsensor en de actuele meetwaarden" },
      { "naam": "Netbewaker", "tekst": "Houdt een bedrijf automatisch binnen zijn netcontract.", "foto": "apps/netbewaker.png", "fotoAlt": "De app Netbewaker met het actuele stroomverbruik van een koelhuis" },
      { "naam": "Beheerportaal", "tekst": "Installaties veilig op afstand volgen en testen.", "foto": "apps/beheerportaal.png", "fotoAlt": "De app Beheerportaal met een kaart van rioolgemalen" }
    ]
  },

  // [PROJECTEN]
  "projecten": [

    // [PAGINA] /projecten/brandbeveiliging-op-afstand-testen-kemkens/  (project-1)
    // Let op: het woord "sprinkler" op deze pagina mag pas online na akkoord van Kemkens.
    {
      "id": "project-1",
      "seo": {
        "adres": "brandbeveiliging-op-afstand-testen-kemkens",
        "titel": "Sprinklerinstallatie op afstand testen voor Kemkens | Allico Systems",
        "omschrijving": "Voor Kemkens Brandbeveiliging maakten we sprinklerinstallaties in heel Nederland veilig op afstand te testen en te beheren, conform IEC 62443."
      },
      "num": "P-01",
      "tag": "PLC's · Automatisering · Remote control · Cybersecurity",
      "titel": "Remote toegang voor testen van brandbeveiligingssystemen",
      "samenvatting": "Kemkens Brandbeveiliging zocht een betrouwbare oplossing om hun sprinklerinstallaties op afstand te testen, te monitoren en te beheren, zonder concessies aan de systeemveiligheid.",
      "foto": "kemkens.jpeg",
      "fotoAlt": "Kemkens brandbeveiliging",
      "cta": {
        "titel": "Ook installaties veilig op afstand beheren?",
        "tekst": "Voor Kemkens testen we brandbeveiligingsinstallaties op afstand, met beveiliging conform IEC 62443. We kijken graag wat dat voor jouw installaties kan betekenen."
      },
      "detail": {
        "topbarTag": "P-01 · Cybersecurity · Embedded",
        "hero": "kemkens.jpeg",
        "kop": "Sprinklerpompen op afstand testen voor Kemkens Brandbeveiliging",
        "lead": "Kemkens Brandbeveiliging zocht een betrouwbare manier om sprinklerinstallaties op afstand te testen, te monitoren en te beheren, zonder concessies te doen aan de veiligheid van het systeem. Allico Systems ontwikkelde de integratie en het maatwerk: de koppeling met de installatie en het beheerportaal voor de medewerkers.",
        "doel": "Een sprinklerinstallatie moet regelmatig getest worden, en daarvoor rijdt nu vaak een monteur naar de locatie. Om toekomstbestendig te blijven, zocht Kemkens Brandbeveiliging een efficiëntere manier om het onderhoud te garanderen: testen op afstand. Het doel van dit project was een uiterst betrouwbare en beveiligde verbinding met brandbeveiligingsinstallaties op willekeurige locaties in Nederland. Daarmee worden de sprinklerpomp en andere onderdelen op afstand in werking gesteld en sensoren uitgelezen, wat direct inzicht geeft in de prestaties en de werking van de installatie.",
        "uitdaging": "Een sprinklerinstallatie is een kritieke installatie. De beveiliging van de verbinding moet daarom optimaal en volledig gecertificeerd zijn. Daarnaast is gebruiksgemak een harde eis: het nieuwe beheerportaal moet praktisch en toegankelijk blijven voor de medewerkers die er dagelijks mee werken.",
        "aanpak": "Voor de hardware, software en licenties die nodig zijn om te voldoen aan een certificering op IEC 62443-niveau, werken we nauw samen met gespecialiseerde partners. Zij leveren de robuuste basis voor dit type systemen. Daarop ontwikkelt Allico Systems de integratie en het maatwerk dat aansluit op het doel van het project.",
        "resultaat": "De installaties zijn nu op afstand bereikbaar voor testen, beheer en monitoring, met een beveiligingsniveau conform IEC 62443. Storingen worden sneller gesignaleerd en kunnen op afstand worden verholpen, zonder dat de beveiliging van het systeem in het geding komt.",
        "secties": [
          {
            "kop": "Wat er op afstand kan",
            "punten": [
              "Een test starten en volgen zonder dat er iemand op locatie is",
              "Sensoren en meldingen van de installatie uitlezen",
              "Storingen eerder zien en waar mogelijk op afstand verhelpen",
              "Alles in één beheerportaal voor de medewerkers"
            ]
          }
        ],
        "vragen": [
          {
            "vraag": "Is een sprinklerinstallatie op afstand testen veilig?",
            "antwoord": "Dat is de kern van dit project. De verbinding is versleuteld (VPN), medewerkers melden zich aan met tweestapsverificatie en de opzet volgt IEC 62443. Alleen wie het mag, kan erbij."
          },
          {
            "vraag": "Werkt dit ook voor andere installaties dan brandbeveiliging?",
            "antwoord": "Ja. Dezelfde aanpak past bij elke installatie die je op afstand wilt volgen, testen of bedienen, zoals pompen, gemalen en technische installaties in gebouwen."
          },
          {
            "vraag": "Wat is er op locatie nodig?",
            "antwoord": "Een besturing (PLC) in de installatie die de sensoren uitleest en de test uitvoert, en een beveiligde verbinding naar buiten. Wat er precies nodig is, hangt af van wat er al staat."
          }
        ],
        "verwant": [
          { "pagina": "spec-4", "tekst": "OT-beveiliging en IEC 62443-advies" },
          { "pagina": "spec-2", "tekst": "PLC-besturing laten ontwikkelen" },
          { "pagina": "spec-3", "tekst": "Dashboard voor machines en installaties" }
        ],
        "sector": "Brandbeveiliging · Gebouwbeheer",
        "technologieen": ["VPN-verbinding", "IEC-62443 certificering", "2FA", "PLC's"],
        "doorlooptijd": "9 maanden"
      }
    },

    // [PAGINA] /projecten/lmra-app-veiligheidsregistratie/  (project-2)
    {
      "id": "project-2",
      "seo": {
        "adres": "lmra-app-veiligheidsregistratie",
        "titel": "LMRA-app op maat: LMRA en werkplekinspecties in één app | Allico Systems",
        "omschrijving": "LMRA-app op maat voor de bouwplaats: digitale LMRA's en werkplekinspecties, snel in te vullen, zonder taalbarrière, met direct overzicht."
      },
      "num": "P-02",
      "tag": "Software · Integratie · Beveiliging · Applicatie",
      "titel": "Veiligheidsregistratie app",
      "samenvatting": "Maatwerkapplicatie voor de digitale registratie van LMRA's en veiligheidscontroles op werkplekken.",
      "foto": "veiligheidsapp goed.jpeg",
      "fotoAlt": "Veiligheidsregistratie applicatie",
      "cta": {
        "titel": "Ook papierwerk op de werkvloer digitaliseren?",
        "tekst": "Een app die medewerkers wél invullen, met direct inzicht voor leidinggevenden. Vertel ons welk proces je wilt verbeteren."
      },
      "detail": {
        "topbarTag": "P-02 · Software · Applicatie",
        "hero": "veiligheidsapp goed.jpeg",
        "kop": "LMRA-app en werkplekinspectie-app op maat, meertalig en gekoppeld",
        "lead": "Papieren werkplekinspecties en LMRA's maakten de veiligheidsadministratie onvolledig en tijdrovend, waardoor realtime inzicht op de bouwplaats ontbrak. Allico Systems ontwikkelde een LMRA-app op maat die dit proces stroomlijnt. Het resultaat is een volledig geautomatiseerde administratie en actueel inzicht in de veiligheidssituatie.",
        "doel": "Het automatiseren van tijdrovende veiligheidsadministratie om via realtime dashboards en slimme meldingen de veiligheid op de werkvloer proactief te verhogen en beheersbaar te maken.",
        "uitdaging": "Het registratieproces op locatie moet laagdrempelig en gebruiksvriendelijk zijn. Omdat werknemers dit vaak als een administratieve en onnodige taak ervaren, moest het nieuwe proces aan de volgende eisen voldoen:",
        "uitdagingEisen": [
          { "label": "Snel en simpel", "tekst": "Een duidelijk systeem om de administratieve last voor de werknemer op locatie zo klein mogelijk te maken." },
          { "label": "Zonder taalbarrière", "tekst": "Gemakkelijk te begrijpen en in te vullen, ook voor werknemers en onderaannemers die geen Nederlands spreken." },
          { "label": "Direct inzichtelijk", "tekst": "De ingevoerde resultaten moeten direct duidelijk beschikbaar zijn voor leidinggevenden op verschillende locaties." },
          { "label": "Langetermijnoverzicht", "tekst": "Het genereren van duidelijke overzichten van de veiligheidssituatie over langere periodes." }
        ],
        "aanpak": "Vanaf de eerste gesprekken was duidelijk dat toegankelijkheid en naadloze integratie in de bedrijfsstructuur cruciaal waren. Daarom zijn de nieuwe accounts direct gekoppeld aan bestaande e-mailadressen en is het beheer (hosting, updates en certificaten) zo ingericht dat de interne IT-afdeling dit eenvoudig zelf kan oppakken. Een bewuste keuze voor een toekomstbestendig systeem.\n\nOp basis van de heldere doelstellingen is er een strak ontwikkel- en testplan uitgerold. De bouw van het dashboard ging voorspoedig, waarna uitgebreid testen onmisbaar bleek. De praktijktest legde namelijk nog belangrijke verbeterpunten bloot. Omdat we deze feedback direct verwerkten in kleine, snelle aanpassingen, konden we de applicatie in een vlot tempo opleveren.",
        "resultaat": "Sinds de werknemers de analyses digitaal invullen, is de impact voor leidinggevenden direct merkbaar. Onveilige situaties worden via automatische pushmeldingen onmiddellijk gemeld en opgepakt. Bovendien is het LMRA-overzicht van het voltallige werknemersbestand nu altijd compleet en actueel.",
        "secties": [
          {
            "kop": "Wat is een LMRA?",
            "alineas": [
              "LMRA staat voor Laatste Minuut Risico Analyse: een korte controle die een medewerker doet vlak voordat hij aan een klus begint. Kloppen de omstandigheden, zijn de risico's bekend en zijn de maatregelen genomen? Op papier raakt zo'n controle snel zoek of wordt hij achteraf ingevuld. In een app gebeurt het op het moment zelf en ziet de leidinggevende het direct."
            ]
          },
          {
            "kop": "Wanneer is een standaard LMRA-app genoeg?",
            "alineas": [
              "Er bestaan goede standaardpakketten voor LMRA's. Wil je alleen een digitaal formulier, dan is zo'n pakket vaak de snelste weg. Maatwerk loont als de app moet aansluiten op je eigen accounts en systemen, als medewerkers en onderaannemers verschillende talen spreken, of als je eigen overzichten en meldingen wilt."
            ]
          }
        ],
        "vragen": [
          {
            "vraag": "Werkt de LMRA-app ook voor medewerkers die geen Nederlands spreken?",
            "antwoord": "Ja. Dat was een van de eisen: de app is makkelijk te begrijpen en in te vullen, ook voor medewerkers en onderaannemers die geen Nederlands spreken."
          },
          {
            "vraag": "Ziet een leidinggevende direct wat er is ingevuld?",
            "antwoord": "Ja. De resultaten zijn meteen beschikbaar, ook voor leidinggevenden op andere locaties. Bij een onveilige situatie gaat er automatisch een pushmelding uit."
          },
          {
            "vraag": "Kan onze eigen IT-afdeling de app beheren?",
            "antwoord": "Ja. De accounts zijn gekoppeld aan de bestaande e-mailadressen, en hosting, updates en certificaten zijn zo ingericht dat de interne IT-afdeling het zelf kan oppakken."
          }
        ],
        "verwant": [
          { "pagina": "spec-5", "tekst": "App laten maken voor machines, installaties en de werkvloer" },
          { "pagina": "spec-3", "tekst": "Dashboard op maat" }
        ],
        "sector": "Industrie · Veiligheid",
        "technologieen": ["Dart", "REST API", "SQL"],
        "doorlooptijd": "6 maanden"
      }
    }
  ],

  // [NIEUWS] Bovenaan staat het nieuwste bericht. Een bericht zonder "id" en "tekst" staat alleen in de lijst.
  "nieuws": [

    // [PAGINA] /nieuws/cyberbeveiligingswet-nis2/  (nieuws-3)
    {
      "id": "nieuws-3",
      "seo": {
        "adres": "cyberbeveiligingswet-nis2",
        "titel": "Cyberbeveiligingswet (NIS2): gevolgen voor leveranciers | Allico Systems",
        "omschrijving": "Je klant stuurt een NIS2-vragenlijst. Wat de Cyberbeveiligingswet sinds 15 augustus 2026 van toeleveranciers vraagt, ook voor machines en besturing."
      },
      "datum": "Augustus 2026",
      "bijgewerkt": "november 2026",
      "titel": "Nieuwe cybersecuritywetgeving: wat NIS2 betekent",
      "kop": "Je klant stuurt een NIS2-vragenlijst: wat vraagt de Cyberbeveiligingswet van een toeleverancier?",
      "foto": "nis2-europese-commissie.jpg",
      "fotoAlt": "Europese vlaggen voor het gebouw van de Europese Commissie in Brussel",
      "fotoBron": "Foto: Carl Gruner via Unsplash",
      "samenvatting": "Op 15 augustus 2026 is de Cyberbeveiligingswet in werking getreden, de Nederlandse uitwerking van de Europese NIS2-richtlijn. Ruim 8.000 organisaties in essentiële en belangrijke sectoren krijgen te maken met strengere eisen, en via de keten raakt het veel meer bedrijven dan alleen die groep.",
      "tekst": [
        "Sinds 15 augustus 2026 geldt in Nederland de Cyberbeveiligingswet (Cbw), de Nederlandse uitwerking van de Europese NIS2-richtlijn. De wet geldt direct voor naar schatting ruim 8.000 organisaties in essentiële en belangrijke sectoren, van energie, water en zorg tot transport en digitale infrastructuur. Het effect is veel breder: wie aan zo'n organisatie levert, krijgt vragen over zijn eigen beveiliging. Dit artikel legt uit wat de wet van toeleveranciers vraagt.",
        { "kop": "Wat regelt de Cyberbeveiligingswet?" },
        "De wet vervangt de oude Wet beveiliging netwerk- en informatiesystemen. Voor organisaties die eronder vallen, draait het om drie plichten. Een zorgplicht: cyberrisico's moeten risicogestuurd worden beheerst, met maatregelen als risicoanalyse, incidentrespons, back-up en continuïteit, sterke authenticatie, patchbeheer en beveiliging van de toeleveringsketen. Een meldplicht voor ernstige incidenten bij het NCSC. En een registratieplicht. Cybersecurity is daarmee geen IT-detail meer, maar een verantwoordelijkheid tot in de directie.",
        { "kop": "Val ik als toeleverancier zelf onder de wet?" },
        "Vaak niet. Volgens het NCSC hebben toeleveranciers van organisaties die onder de wet vallen geen eigen wettelijke plicht, tenzij ze zelf onder de wet vallen. Een verplicht keurmerk voor leveranciers bestaat ook niet.",
        { "kop": "Waarom krijg ik dan toch een vragenlijst?" },
        "Omdat je klant verantwoordelijk is voor de beveiliging van zijn hele toeleveringsketen. Hij moet kunnen aantonen dat zijn leveranciers geen zwakke plek zijn, en vraagt dat dus aan jou: via een vragenlijst, afspraken in het contract of een audit. Een leverancier die niets kan laten zien, wordt een risico, en dat weegt mee bij een volgende opdracht.",
        { "kop": "Wat wordt er meestal gevraagd?" },
        "De vragen volgen de maatregelen uit de zorgplicht. Reken op vragen als:",
        {
          "punten": [
            "Is er een risicoanalyse, en wie is verantwoordelijk voor beveiliging?",
            "Hoe is toegang geregeld, ook op afstand, en gebruik je tweestapsverificatie?",
            "Hoe ga je om met updates en bekende kwetsbaarheden?",
            "Wat doe je bij een incident, en hoe snel hoort je klant dat?",
            "Hoe is beveiliging meegenomen in wat je ontwikkelt en levert?"
          ]
        },
        { "kop": "Wat betekent dit voor machines en besturing?" },
        "Voor wie machines, installaties of besturing levert, raakt één maatregel het vak in het bijzonder: de beveiliging van systemen bij aanschaf, ontwikkeling en onderhoud. Dat betekent beveiliging vanaf het ontwerp meenemen, in plaats van er achteraf iets omheen bouwen. Veilige toegang op afstand, doordachte netwerkscheiding en aantoonbare ontwikkelprocessen, bijvoorbeeld volgens IEC 62443-4-1, worden zo onderdeel van wat een klant van je verwacht.",
        { "kop": "Wat kun je nu al doen?" },
        {
          "punten": [
            "Leg vast welke besturingen en verbindingen je levert en beheert",
            "Regel toegang op afstand goed: versleuteld, per persoon en met tweestapsverificatie",
            "Spreek af wie updates uitvoert en hoe je een incident meldt",
            "Bewaar de onderbouwing, zodat je een vragenlijst snel en eerlijk kunt invullen"
          ]
        },
        { "kop": "Hoe Allico Systems hierbij helpt" },
        "Wij ontwikkelen besturing waarin beveiliging vanaf het begin is meegenomen: beveiligde installaties die op afstand toegankelijk zijn, met de documentatie die je nodig hebt om in een audit of leveranciersvragenlijst aan te tonen dat het op orde is. Zo houd je niet alleen je eigen systeem veilig, maar versterk je ook je positie in de keten van je opdrachtgevers.",
        "Vraag je je af wat er via je opdrachtgevers op je afkomt, of ligt er al een vragenlijst? Neem gerust contact met ons op. We denken graag mee over veilige, aantoonbare besturing, van ontwerp tot onderhoud.",
        "Bronnen: NCSC en Rijksoverheid, stand november 2026."
      ],
      "verwant": [
        { "pagina": "spec-4", "tekst": "OT-beveiliging en IEC 62443-advies" },
        { "pagina": "project-1", "tekst": "Sprinklerinstallaties veilig op afstand testen voor Kemkens" },
        { "pagina": "nieuws-1", "tekst": "Ons certificeringstraject bij Phoenix Contact (PLCnext)" }
      ]
    },

    // [PAGINA] /nieuws/plcnext-certificering-phoenix-contact/  (nieuws-1)
    {
      "id": "nieuws-1",
      "seo": {
        "adres": "plcnext-certificering-phoenix-contact",
        "titel": "Allico Systems start certificering bij Phoenix Contact (PLCnext)",
        "omschrijving": "Allico Systems volgt het traject PLCnext Engineer bij Phoenix Contact. Wat PLCnext mogelijk maakt en waarom dat nu telt met de Cyberbeveiligingswet."
      },
      "datum": "Juni 2026",
      "titel": "Allico Systems start certificeringstraject bij Phoenix Contact",
      "foto": "phoenix-contact-logo.svg",
      "fotoAlt": "Logo van Phoenix Contact",
      "fotoType": "logo",
      "samenvatting": "De afgelopen periode hebben wij de Workshop PLCnext Engineer bij Phoenix Contact gevolgd. Dit traject zetten we het komende jaar voort om onze kennis en vaardigheden verder te ontwikkelen. Na een succesvolle afronding behoren we tot de opgeleide en gecertificeerde partners van Phoenix Contact.",
      "tekst": [
        "De afgelopen periode hebben wij de Workshop PLCnext Engineer bij Phoenix Contact gevolgd. Dit traject zetten we het komende jaar voort om onze kennis en vaardigheden verder te ontwikkelen. Na een succesvolle afronding behoren we tot de opgeleide en gecertificeerde partners van Phoenix Contact.",
        "Een belangrijk onderdeel van dit traject is PLCnext Technology. Dit open automatiseringsplatform combineert de klassieke betrouwbaarheid van IEC 61131 met hogere programmeertalen zoals C, C++ en MATLAB Simulink. Dankzij de open Linux-kernel kunnen deze technologieën binnen dezelfde realtime-omgeving worden toegepast.",
        "Daarmee ontstaan mogelijkheden die verder gaan dan een traditionele PLC. Denk aan HTML5-dashboards direct vanaf de besturing, beveiligde toegang op afstand en datakoppelingen naar cloud- of MES-systemen zonder aparte industriële PC in de kast.",
        "De timing is geen toeval. Met de komst van de nieuwe Cyberbeveiligingswet, de Nederlandse uitwerking van NIS2, krijgen meer bedrijven te maken met strengere eisen op het gebied van cybersecurity. Ook in de toeleveringsketen. Cybersecurity verschuift daarmee steeds meer naar iets dat je aantoonbaar op orde moet hebben.",
        "Daarbij wordt het belangrijker om te kunnen laten zien dat cybersecurity vanaf het ontwerp is meegenomen. Ontwikkelprocessen volgens IEC 62443-4-1 zijn dan geen technisch detail meer, maar onderdeel van een bredere aanpak rondom veilige industriële automatisering.",
        "Inmiddels passen we deze techniek toe in meerdere projecten. Bijvoorbeeld bij installaties die beveiligd op afstand toegankelijk zijn, met complexe besturingen en een volwaardig dashboard direct vanaf de PLC. De mogelijkheden en de kwaliteit van wat je in één besturing kunt combineren, zijn daarmee flink toegenomen.",
        "Op 15 augustus 2026 treedt de nieuwe Cyberbeveiligingswet in Nederland in werking. Vraag je je af wat dat voor jouw installaties betekent, of loop je met een project rond? Neem gerust contact met ons op. Wij denken graag mee over vraagstukken rondom automatisering, besturing en cybersecurity."
      ]
    },

    // Bericht zonder eigen pagina (geen "id" en "tekst"): staat alleen in de lijst
    {
      "datum": "Februari 2026",
      "titel": "Allico Systems ontvangt innovatieopdracht bij Kemkens",
      "foto": "kemkens-pand-oss.jpg",
      "fotoAlt": "Het pand van Kemkens Brandbeveiliging in Oss",
      "fotoBron": "Foto: Kemkens Brandbeveiliging",
      "samenvatting": "Kemkens Brandbeveiliging heeft per Februari Allico Systems een nieuwe innovatieopdracht gegeven. Samen zetten we de volgende stap in het ontwikkelen van een gedigitaliseerd en slim brandbeveiligingssysteem, met nadruk op digitaal inzicht en testen van de installatie. In samenwerking met toeleveranciers van Allico Systems wordt de installatie volgens de IEC 62443 ontworpen."
    }
  ],

  // [CONTACT] Tekst over het werkgebied, onder de gegevens op de contactpagina.
  "contact": {
    "werkgebied": "Allico Systems zit in Horst, in Noord-Limburg, tussen Venlo en Venray. We werken voor bedrijven in de regio en in de rest van Nederland."
  }
};
