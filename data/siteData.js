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
//   [NIEUWS]           de nieuwsberichten en kennisartikelen
//   [CONTACT]          de tekst over het werkgebied op de contactpagina
//   [JURIDISCH]        de privacyverklaring (eigen pagina, link in de footer)
//   [PAGINA]           staat boven elke pagina, met zijn adres en id
//
// [VELDEN] Wat een pagina mag hebben. Alles is gewone tekst, zonder HTML. Laat je een veld met
// "mag" weg, dan verdwijnt dat stuk van de pagina; er hoeft niets in index.html te veranderen.
//
//   seo.adres, seo.titel, seo.omschrijving   adres, blauwe regel in Google (hooguit 60 tekens),
//                                            tekst eronder (120 tot 155 tekens)
//   seo.gewijzigd             (mag)          datum van de laatste echte wijziging (JJJJ-MM-DD), voor de sitemap
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
//
// Schrijfregels van de site: je-vorm, korte zinnen, geen beweringen die we niet waarmaken (geen
// "gecertificeerd" of "partner" zolang dat niet zo is), geen prijzen, geen lange strepen.
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
    "beschrijving": "Hardware, firmware en software in eigen beheer, vanuit Horst in Noord-Limburg.",
    "copyright": "2026 Allico Systems"
  },

  // [FORMULIER] Waar de projectcheck en het terugbelverzoek naartoe gaan.
  // Leeg = het mailprogramma van de bezoeker opent met het bericht erin.
  // Invullen met bijvoorbeeld een Formspree-adres ("https://formspree.io/f/xxxxxxx"), dan komt alles direct in je inbox.
  // Let op: vul je hier iets in, pas dan ook de privacyverklaring aan ([JURIDISCH], stuk "Hoe werken de formulieren?").
  "formulier": {
    "endpoint": ""
  },

  // [SEO-VAST] Vindbaarheid. bouw.js maakt van elke pagina een eigen HTML-bestand met een eigen adres (zie README.md).
  // "adres" is het stuk na allicosystems.nl/, "titel" de blauwe regel in Google (hooguit 60 tekens)
  // en "omschrijving" de tekst eronder (120 tot 155 tekens). Bij een specialisatie, project of nieuwsbericht
  // staan dezelfde velden in het blok "seo" van dat onderdeel. Een adres dat al online staat niet meer wijzigen.
  "seo": {
    "basis": "https://allicosystems.nl",
    "paginas": {
      "home": {
        "titel": "Allico Systems | PLC-besturing, elektronica en OT-security",
        "omschrijving": "Allico Systems in Horst ontwikkelt PLC-besturing, embedded software en veilige toegang op afstand volgens IEC 62443. Van idee tot werkend systeem.",
        "gewijzigd": "2026-11-26"
      },
      "specialisatie": {
        "adres": "specialisaties",
        "titel": "Specialisaties: printplaat tot besturing | Allico Systems",
        "omschrijving": "Hardware, embedded software en PLC-besturing, dashboards, apps en beveiliging volgens IEC 62443. Vijf specialismen in één hand, van idee tot systeem.",
        "gewijzigd": "2026-11-26"
      },
      "projecten": {
        "adres": "projecten",
        "titel": "Projecten: wat we voor klanten bouwen | Allico Systems",
        "omschrijving": "Projecten van Allico Systems: sprinklerinstallaties op afstand testen en monitoren voor Kemkens, en een digitale LMRA-app voor de bouwplaats.",
        "gewijzigd": "2026-11-26"
      },
      "nieuws": {
        "adres": "nieuws",
        "titel": "Nieuws en kennis over PLCnext en NIS2 | Allico Systems",
        "omschrijving": "Nieuws en kennis van Allico Systems: de Cyberbeveiligingswet (NIS2), de Machineverordening, PLCnext en ons certificeringstraject bij Phoenix Contact.",
        "gewijzigd": "2026-11-26"
      },
      "contact": {
        "adres": "contact",
        "titel": "Contact | Allico Systems, Horst",
        "omschrijving": "Neem contact op met Allico Systems in Horst, Noord-Limburg, vlak bij Venlo. Start de projectcheck of laat je nummer achter, dan bellen we je terug.",
        "gewijzigd": "2026-11-26"
      }
    }
  },

  // [HOME]
  "home": {
    "introLabel": "Industriële automatisering · Noord-Limburg",
    "introTitel": "Besturing, embedded en OT-security voor industriële installaties",
    "introTekst": "Allico Systems uit Horst ontwikkelt hardware en software voor industriële automatisering: elektronica, embedded software, PLC-besturing met PLCnext en OT-security vanuit IEC 62443. Voor prototyping en digitalisering.",
    "introCta": "Onze specialisaties",
    "introFoto": "",
    "scrollDividerTekst": "Hoe wij werken",
    "stappen": [
      {
        "tag": "Allico Systems",
        "titel": "Van idee naar werkend product",
        "tekst": "Wij ontwikkelen elektronica en embedded systemen van concept tot eindproduct: hardware, firmware en software in eigen beheer. Scroll om te zien hoe."
      },
      {
        "tag": "Stap 1: Concept",
        "titel": "Schematisch uitwerken",
        "tekst": "Elk project begint met een grondige analyse. Wij vertalen je functionele wensen naar een technisch schema: componentkeuze, signaalpaden en voedingsarchitectuur."
      },
      {
        "tag": "Stap 2: Hardware",
        "titel": "Hardwareontwerp & productie",
        "tekst": "Het schema werken we uit tot een printplaatontwerp (PCB-layout). Wij ontwerpen met oog voor EMC, thermisch management en maakbaarheid, en begeleiden de productie tot en met geassembleerde printplaten."
      },
      {
        "tag": "Stap 3: Software",
        "titel": "Firmware & besturing",
        "tekst": "Hardware zonder intelligentie doet niets. Wij schrijven de firmware, de communicatieprotocollen en de besturingssoftware die je systeem tot leven brengen."
      },
      {
        "tag": "Stap 4: Oplevering",
        "titel": "Getest, gedocumenteerd, klaar",
        "tekst": "Het eindproduct leveren we volledig getest en gedocumenteerd op. Van prototype tot kleine serie: wij begeleiden het hele traject."
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
        "titel": "Elektronica-ontwikkeling en PCB-ontwerp | Allico Systems",
        "omschrijving": "Elektronica laten ontwikkelen: van idee en schema tot printplaat (PCB), prototype en kleine serie. Hardware en firmware in eigen beheer, vanuit Horst.",
        "gewijzigd": "2026-11-26"
      },
      "num": "01",
      "foto": "header van hardware.jpeg",
      "fotoAlt": "Hardwareontwikkeling",
      "titel": "Hardwareontwikkeling op maat",
      "samenvatting": "Schematisch ontwerp en PCB-layout met toekomstbestendige componentkeuzes. Van concept naar prototype, en verder naar een product.",
      "cta": {
        "titel": "Een idee dat een eigen print nodig heeft?",
        "tekst": "Van schets tot werkend prototype: we denken mee over wat haalbaar is."
      },
      "detail": {
        "topbarTag": "01 | Hardware",
        "hero": "Hardware compositie.jpeg",
        "kop": "Elektronica laten ontwikkelen: printplaat, prototype en kleine serie",
        "lead": "Elektronica-ontwikkeling op maat begint bij ons bij het einddoel. Dat leidt tot een schema en een PCB-ontwerp met toekomstbestendige componentkeuzes. Heb je een product, machine of meetopstelling waar geen standaard elektronica voor bestaat? Dan ontwikkelen wij elektronica op maat: van concept naar prototype, en verder naar een product. Hardware en firmware houden we in eigen beheer.",
        "aanpakAlineas": [
          "Het proces start bij het einddoel: waar dient het product voor en welk probleem lost het op? Vanuit die functionele eisen maken we een concreet concept en toetsen we de technische haalbaarheid.",
          "Daarna werken we het elektronica-ontwerp uit tot een schema en een printplaatontwerp dat direct bij onze productiepartners gemaakt kan worden. Na assemblage staat het eerste prototype, waarin het concept voor het eerst in de praktijk werkt.",
          "Het eerste prototype zetten we op met een duidelijk plan. De stappen daarna zijn bewust iteratief. Met praktijktesten verzamelen we inzichten die we gebruiken voor de doorontwikkeling.",
          "Zodra de hardware stabiel is, begeleiden we de stap naar productie in kleine of middenserie."
        ],
        "watWijDoen": [
          "Vertaling van concept naar een technisch haalbaar plan",
          "Schematisch ontwerp en onderbouwde componentkeuze",
          "PCB-layout met aandacht voor EMC en thermisch management",
          "Prototypebouw en functioneel testen in de praktijk",
          "Begeleiding naar kleine en middenserieproductie"
        ],
        "secties": [
          {
            "kop": "Printplaat laten ontwerpen",
            "alineas": [
              "Een printplaat (PCB) laten ontwerpen is meer dan lijnen trekken tussen onderdelen. We kiezen componenten die ook over een paar jaar nog leverbaar zijn. We houden rekening met storing (EMC), warmte en maakbaarheid.",
              "Zo ontstaat een PCB-ontwerp dat goed te produceren is. Dat maakt de stap van prototype naar product kleiner."
            ]
          },
          {
            "kop": "Elektronica en firmware uit één hand",
            "alineas": [
              "Bij elektronica hoort vaak embedded software. Die embedded engineering doen we zelf: de firmware schrijven we in C en C++. Zo blijven hardware en software in eigen beheer.",
              "De elektronica kan onderdeel zijn van een groter embedded systeem, of een losse sensor in een afgelegen weiland. Communicatie kan bekabeld of draadloos, bijvoorbeeld via LoRa, Bluetooth, wifi of het mobiele netwerk."
            ]
          },
          {
            "kop": "Van prototype naar kleine serie",
            "alineas": [
              "Een prototype laten maken is de eerste stap. Daarna maken we het ontwerp klaar voor productie. Ook het laten maken van de printplaten begeleiden we: ze worden geassembleerd bij onze productiepartners.",
              "Het eindproduct leveren we getest en gedocumenteerd op. Wij begeleiden het hele traject, van prototype tot kleine serie."
            ]
          }
        ],
        "vragen": [
          {
            "vraag": "Ik heb alleen een idee. Is dat genoeg om te beginnen?",
            "antwoord": "Ja. Wie een product wil laten ontwikkelen, hoeft geen schema mee te brengen. We beginnen bij wat het product moet doen en welk probleem het oplost. Daaruit volgen een concept en een toets op technische haalbaarheid. De projectcheck op de contactpagina is een snelle start."
          },
          {
            "vraag": "Ontwerpen jullie alleen de printplaat, of ook de software erop?",
            "antwoord": "Allebei. Schema, printplaat en firmware ontwikkelen we in eigen beheer. Wil je er een dashboard of een app bij, dan bouwen we die ook."
          },
          {
            "vraag": "Begeleiden jullie ook de stap naar een kleine serie?",
            "antwoord": "Ja. Zodra de hardware stabiel is, begeleiden we de productie in kleine of middenserie bij onze productiepartners."
          },
          {
            "vraag": "Waar letten jullie op bij een printplaat voor een machine of installatie?",
            "antwoord": "Op storing (EMC), warmte en maakbaarheid. Die eisen bepalen de keuze van componenten en de indeling van de print."
          },
          {
            "vraag": "Wat kost het, en hoe snel kunnen jullie beginnen?",
            "antwoord": "Vaste prijzen noemen we niet: de kosten hangen af van wat het product moet kunnen. Wel schakelen we snel. We zijn een compact team en ieder heeft een eigen specialisme. Zo ligt er snel een voorstel, en kan een project snel starten en vlot worden afgerond."
          }
        ],
        "verwant": [
          { "pagina": "spec-2", "tekst": "PLC-besturing en embedded software" },
          { "pagina": "spec-3", "tekst": "Dashboard voor machines en sensordata" },
          { "pagina": "nieuws-7", "tekst": "Cyber Resilience Act (CRA) voor machinebouwers en eigen elektronica" }
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
        "titel": "PLC laten programmeren: besturing op maat | Allico Systems",
        "omschrijving": "PLC laten programmeren voor je machine of installatie? Allico Systems ontwikkelt PLC-besturing op maat met PLCnext, inclusief koppelingen en beveiliging.",
        "gewijzigd": "2026-11-26"
      },
      "num": "02",
      "foto": "Sensor in veld.webp",
      "fotoAlt": "Software & communicatie",
      "titel": "PLC-besturing en embedded software",
      "samenvatting": "PLC-besturing, embedded firmware en protocollen die hardware intelligent maken en systemen laten samenwerken.",
      "cta": {
        "titel": "Een installatie die slimmer kan?",
        "tekst": "Vertel ons welk systeem je hebt en wat het moet doen. We kijken waar de winst zit."
      },
      "detail": {
        "topbarTag": "02 | Software",
        "hero": "Sensor in veld.webp",
        "kop": "PLC laten programmeren: besturing op maat voor machines en installaties",
        "lead": "Wil je een PLC laten programmeren voor je machine of installatie? Allico Systems ontwikkelt PLC-besturing en machinebesturing op maat, voor digitaliseren, automatiseren en slimmer maken. PLCnext van Phoenix Contact passen we inmiddels toe in meerdere projecten. De taal kiezen we op basis van het einddoel: PLC-talen voor de besturing, hogere talen zoals C++ waar dat past.",
        "aanpakAlineas": [
          "Elk softwarevraagstuk in de industriële automatisering is anders, net als de hardware eromheen. Daarom staat het einddoel van de installatie centraal: wat moet het systeem doen, en voor wie?",
          "Bestaande systemen communiceren vaak met meerdere platforms tegelijk. Wij streven naar één geheel en volledige integratie. We werken waar nodig met eigen platforms, maar sluiten ook aan op de systemen die er al staan.",
          "Communicatie met de hardware kan bekabeld en draadloos. Die hardware kan onderdeel zijn van een groter systeem, of een losse sensor in een afgelegen weiland.",
          "De software bouwen we modulair en inzichtelijk. Zo kunnen gebruikers en monteurs ermee werken en de software onderhouden."
        ],
        "watWijDoen": [
          "PLC-programmering en procesbesturing",
          "Industriële protocollen: CAN, Modbus TCP en RTU, MQTT en OPC UA",
          "Embedded firmware in C en C++",
          "Draadloze communicatie: LoRa, Bluetooth (BLE), wifi en LTE"
        ],
        "secties": [
          {
            "kop": "PLCnext van Phoenix Contact",
            "alineas": [
              "PLCnext Technology is het open automatiseringsplatform van Phoenix Contact. Het combineert de klassieke PLC-talen uit IEC 61131 met hogere programmeertalen zoals C, C++ en MATLAB Simulink.",
              "Daarmee kan één besturing meer dan een traditionele PLC. Denk aan een dashboard direct vanaf de besturing, beveiligde toegang op afstand en koppelingen naar cloud- of MES-systemen.",
              "Wij hebben de Workshop PLCnext Engineer bij Phoenix Contact gevolgd en zetten dat traject voort. De techniek passen we inmiddels toe in meerdere projecten."
            ]
          },
          {
            "kop": "Een PLC-programmeur zoeken of het programmeren uitbesteden?",
            "alineas": [
              "Zoek je een PLC-programmeur in Limburg, of wil je het PLC-programmeren uitbesteden? Bij ons werk je niet met een losse zzp'er, maar met een klein team. Hardware, firmware en software houden we in eigen beheer.",
              "Zo streven we naar één geheel: besturing, bediening en beveiliging uit één hand.",
              "Het team is compact en ieder heeft een eigen specialisme. Daardoor schakelen we snel: je hebt snel een voorstel, en een project kan snel starten en vlot worden afgerond."
            ]
          },
          {
            "kop": "Een besturing die ook de monteur begrijpt",
            "alineas": [
              "Via een dashboard maken we veel van de besturing toegankelijk en instelbaar. Zo zijn servicemonteurs minder afhankelijk van PLC-kennis.",
              "Meer daarover lees je op de pagina over dashboards."
            ]
          },
          {
            "kop": "Embedded software en draadloze communicatie",
            "alineas": [
              "Niet alles is een PLC. Voor eigen elektronica schrijven we embedded firmware in C en C++. De communicatie loopt via industriële protocollen, bekabeld of draadloos via LoRa, Bluetooth, wifi of het mobiele netwerk."
            ]
          }
        ],
        "praktijk": {
          "project": "project-1",
          "kop": "Uit de praktijk: sprinklerinstallaties op afstand testen",
          "tekst": "Voor Kemkens Brandbeveiliging ontwikkelen we de integratie en het maatwerk om sprinklerinstallaties op afstand te testen en te beheren. De beveiliging is opgebouwd vanuit IEC 62443."
        },
        "vragen": [
          {
            "vraag": "Met welke PLC werken jullie?",
            "antwoord": "Vooral met PLCnext van Phoenix Contact, dat passen we inmiddels toe in meerdere projecten. Dat platform combineert klassieke PLC-talen met hogere programmeertalen. Het past daardoor goed bij een besturing die ook data verwerkt, een dashboard toont of beveiligd op afstand bereikbaar moet zijn. Een besturing op basis van CODESYS is ook mogelijk. CODESYS is een programmeeromgeving volgens IEC 61131-3 die door veel PLC-merken wordt gebruikt."
          },
          {
            "vraag": "Kunnen jullie aansluiten op een bestaande installatie?",
            "antwoord": "Ja. We werken waar nodig met eigen platformen, maar sluiten ook aan op bestaande systemen. Vertel ons welk systeem je hebt en wat het moet doen, dan kijken we waar de winst zit."
          },
          {
            "vraag": "Krijg ik ook een bedieningsscherm of dashboard?",
            "antwoord": "Dat kan. Met PLCnext kan een dashboard direct vanaf de besturing draaien. Daarnaast bouwen we dashboards en apps op maat voor telefoon, tablet en computer."
          },
          {
            "vraag": "Hoe wordt de besturing beveiligd?",
            "antwoord": "Beveiliging nemen we vanaf het ontwerp mee, vanuit IEC 62443. Denk aan afgeschermde toegang, een versleutelde verbinding en tweestapsverificatie. Organisaties die onder de Cyberbeveiligingswet (NIS2) vallen, vragen ook van hun leveranciers aantoonbare maatregelen."
          }
        ],
        "verwant": [
          { "pagina": "nieuws-4", "tekst": "Wat is PLCnext? Het open PLC-platform van Phoenix Contact" },
          { "pagina": "spec-4", "tekst": "OT-security en beveiligde verbindingen" },
          { "pagina": "spec-3", "tekst": "Dashboard voor machines en PLC-data" },
          { "pagina": "spec-1", "tekst": "Elektronica laten ontwikkelen: printplaat, prototype en firmware" },
          { "pagina": "nieuws-6", "tekst": "Machineverordening 2027 en cybersecurity voor machinebouwers" }
        ],
        "toepassingen": "Machinebouw, procesautomatisering, IoT-gateways, remote monitoring en slimme sensoren.",
        "technologieen": ["PLCnext", "IEC 61131", "C / C++", "FreeRTOS", "Modbus", "MQTT", "OPC UA", "LoRaWAN"],
        "meerWeten": "Vertel ons over je systeem, dan kijken we hoe we het slimmer kunnen maken."
      }
    },

    // [PAGINA] /dashboards/  (spec-3)
    {
      "id": "spec-3",
      "seo": {
        "adres": "dashboards",
        "titel": "Dashboard op maat voor machines en sensordata | Allico Systems",
        "omschrijving": "Dashboard laten maken voor je machine of installatie: PLC-data en sensordata omgezet in inzicht en bediening, online, op de machine of op je telefoon.",
        "gewijzigd": "2026-11-26"
      },
      "num": "03",
      "foto": "dashboard voorbeeld bijgesneden.jpeg",
      "fotoAlt": "Dashboards & applicaties",
      "titel": "Dashboards en andere applicaties",
      "samenvatting": "Maatwerkdashboards en applicaties die data omzetten in bruikbare inzichten: voor datavisualisatie, besturingsplatformen en online omgevingen.",
      "cta": {
        "titel": "Zien wat je eigen data je vertelt?",
        "tekst": "We maken graag een demo op basis van jouw eigen data."
      },
      "detail": {
        "topbarTag": "03 | Dashboards",
        "hero": "dashboard voorbeeld.jpeg",
        "kop": "Dashboard laten maken voor machines, PLC-data en sensordata",
        "lead": "Wie een dashboard laat maken voor een machine of installatie, wil dat de data tot inzicht leidt. Data krijgt pas waarde wanneer het nieuwe verbanden en conclusies oplevert. Met passende en helder vormgegeven dashboards maakt Allico Systems PLC-data en sensordata bruikbaar, voor inzicht en voor bediening.",
        "aanpakAlineas": [
          "In veel situaties schiet een generiek dashboard tekort. Een losse grafiek vertelt niet altijd het hele verhaal, en een Excel-sheet al helemaal niet.",
          "Daarom ontwerpen wij dashboards op maat, afgestemd op het doel, de gebruiker en de gewenste informatie.",
          "Dat kan een platform voor datavisualisatie zijn, een besturingspaneel op een machine, een online omgeving of een combinatie daarvan. Zowel offline als online maken wij oplossingen die overzicht geven en passen bij de praktijk van de gebruiker."
        ],
        "watWijDoen": [
          "Datavisualisatie-dashboards met vergelijkingstools op maat",
          "Besturingsplatformen voor offline en online installaties",
          "Toepassingen voor telefoon, computer en andere apparaten"
        ],
        "secties": [
          {
            "kop": "Niet elke monteur hoeft PLC-programmeur te zijn",
            "alineas": [
              "Niet elke servicemonteur heeft PLC-kennis. Daarom maken we via het dashboard veel van de besturing toegankelijk en instelbaar.",
              "Een servicemonteur ziet in het dashboard wat de installatie doet en welke meldingen er zijn. Dat maakt servicemonteurs en de technische dienst minder afhankelijk van PLC-kennis.",
              "Komt een monteur bij een storing toch niet verder, dan kan iemand met PLC-kennis op afstand meekijken. Dat gaat via een beveiligde verbinding."
            ]
          },
          {
            "kop": "Dashboard direct vanaf de besturing",
            "alineas": [
              "Met PLCnext kan een dashboard direct vanaf de besturing draaien, zonder aparte industriële pc in de kast. In andere situaties bouwen we een online omgeving of een app.",
              "Voor monitoring op afstand komt daar een beveiligde verbinding bij. Die stemmen we af op het beveiligingsprofiel van het systeem."
            ]
          },
          {
            "kop": "Standaardpakket of dashboard op maat?",
            "alineas": [
              "Standaardpakketten voor dashboards zijn sterk in grafieken van gegevens die al netjes in een database staan. Een dashboard op maat loont als de data nog uit de machine moet komen, of als je ook wilt bedienen.",
              "Wat het beste past, hangt af van het doel, de gebruiker en de gewenste informatie."
            ]
          }
        ],
        "praktijk": {
          "project": "project-1",
          "kop": "Uit de praktijk: een beheerportaal voor installaties op afstand",
          "tekst": "Voor Kemkens Brandbeveiliging ontwikkelen we de integratie en het maatwerk om sprinklerinstallaties op afstand te monitoren en te beheren. Gebruiksgemak is een harde eis: het beheerportaal moet praktisch en toegankelijk blijven voor de medewerkers die er dagelijks mee werken."
        },
        "vragen": [
          {
            "vraag": "Heeft een monteur dan geen PLC-kennis meer nodig?",
            "antwoord": "Minder. Via het dashboard maken we veel van de besturing toegankelijk en instelbaar. Wijzigingen in het PLC-programma zelf blijven werk voor een PLC-programmeur."
          },
          {
            "vraag": "Kan een dashboard ook een installatie bedienen?",
            "antwoord": "Ja. Naast datavisualisatie bouwen we besturingsplatformen, voor offline en online installaties. De beveiliging stemmen we daarop af, want bedienen op afstand vraagt meer dan alleen meekijken."
          },
          {
            "vraag": "Waar draait het dashboard?",
            "antwoord": "Dat hangt af van het doel: als online omgeving, als besturingspaneel op de machine, of allebei. Het dashboard werkt op telefoon, computer en andere apparaten."
          },
          {
            "vraag": "Kunnen jullie onze bestaande data gebruiken?",
            "antwoord": "Ja. We maken graag een demo op basis van je eigen data. Zo zie je wat het oplevert voordat je verder gaat."
          }
        ],
        "verwant": [
          { "pagina": "spec-5", "tekst": "App laten maken voor machines en de werkvloer" },
          { "pagina": "spec-2", "tekst": "PLC-besturing en embedded software" },
          { "pagina": "nieuws-8", "tekst": "Een PLC veilig op afstand benaderen" },
          { "pagina": "project-2", "tekst": "LMRA-app met direct overzicht voor leidinggevenden" }
        ],
        "toepassingen": "Productiemonitoring, IoT-toepassingen met sensoren, utiliteiten, gebouwbeheer, logistiek en energie-inzicht.",
        "technologieen": ["Node-RED", "Node.js", "Swift", "SQL", "REST"],
        "meerWeten": "We maken graag een demo op basis van je eigen data."
      }
    },

    // [PAGINA] /ot-beveiliging-iec-62443/  (spec-4)
    {
      "id": "spec-4",
      "seo": {
        "adres": "ot-beveiliging-iec-62443",
        "titel": "Installaties beveiligen volgens IEC 62443 en NIS2 | Allico Systems",
        "omschrijving": "OT-security voor installaties: veilige toegang op afstand met VPN, tweestapsverificatie en versleutelde verbindingen, opgebouwd vanuit IEC 62443 en NIS2.",
        "gewijzigd": "2026-11-26"
      },
      "num": "04",
      "foto": "Versleutelde beveiliging.webp",
      "fotoAlt": "Cybersecurity",
      "titel": "OT-security en beveiligde verbindingen",
      "samenvatting": "Doordachte beveiliging voor dataplatformen en installaties op afstand, afgestemd op het beveiligingsprofiel van je systeem.",
      "cta": {
        "titel": "Hoe veilig is jouw installatie op afstand?",
        "tekst": "We bespreken de risico's van jouw systeem en wat er nodig is, ook met het oog op de Cyberbeveiligingswet."
      },
      "detail": {
        "topbarTag": "04 | Cybersecurity",
        "hero": "Versleutelde beveiliging.webp",
        "kop": "OT-security vanuit IEC 62443: installaties veilig op afstand bereikbaar",
        "lead": "OT-security, ook wel OT-beveiliging, gaat over de beveiliging van machines, installaties en hun besturing. Data inzien en installaties op afstand besturen is een gevoelig onderwerp. Deze systemen mogen alleen toegankelijk zijn voor de partijen waarvoor ze bedoeld zijn. Daarom is een doordachte beveiliging cruciaal voor de continuïteit van het systeem.",
        "aanpakAlineas": [
          "Het gewenste beveiligingsniveau bepalen we op basis van het profiel van het systeem, de gevoeligheid van de data en de risico's bij ongeautoriseerde toegang.",
          "Voor applicaties die data tonen, betekent dat bijvoorbeeld sterke netwerkbeveiliging, afgeschermde toegang en betrouwbare verificatie zoals tweestapsverificatie (2FA).",
          "Bij systemen waarmee installaties op afstand worden bestuurd, ligt de lat aanzienlijk hoger. Ongeautoriseerde toegang kan daar directe gevolgen hebben voor de continuïteit en de veiligheid.",
          "Voor dit soort trajecten werken wij samen met een vaste partner. Hoog aangeschreven hardware combineren we met gezamenlijk ontwikkelde software. Zo kunnen we een hoog beveiligingsniveau realiseren, zoals in het project voor Kemkens, opgebouwd vanuit IEC 62443."
        ],
        "watWijDoen": [
          "Analyse van het benodigde beveiligingsprofiel",
          "Opzetten van digitale beveiliging voor websites en platforms",
          "Inrichten van VPN-tunnelbeveiliging",
          "Versleutelde communicatie tussen systemen"
        ],
        "secties": [
          {
            "kop": "Wat is OT-beveiliging, en wat is er anders dan bij IT?",
            "alineas": [
              "OT staat voor operationele technologie: de besturing van machines en installaties, zoals PLC's en hun netwerk. Op kantoor draait beveiliging vooral om gegevens. In een installatie draait het om doorwerken en om veiligheid.",
              "Een PLC kun je niet zomaar herstarten of elke maand bijwerken. OT-security houdt daar rekening mee, met maatregelen rond het netwerk, de toegang en het ontwerp van de besturing zelf."
            ]
          },
          {
            "kop": "IEC 62443 in het kort",
            "alineas": [
              "IEC 62443 is de internationale normenreeks voor de beveiliging van industriële automatisering en besturing. De normenreeks is geen wet, maar wel een veelgebruikte manier om de beveiliging van een installatie aantoonbaar te maken."
            ],
            "punten": [
              "IEC 62443-3-3: eisen aan het systeem als geheel, ingedeeld in beveiligingsniveaus",
              "IEC 62443-4-1: eisen aan het ontwikkelproces van de leverancier",
              "IEC 62443-4-2: technische eisen aan de onderdelen, zoals een PLC"
            ]
          },
          {
            "kop": "Wat houdt een IEC 62443-certificering in?",
            "alineas": [
              "Een certificering volgens IEC 62443 wordt afgegeven door een onafhankelijke instelling. Ze geldt voor een onderdeel, een ontwikkelproces of een systeem.",
              "In het project voor Kemkens werken we voor de hardware, software en licenties samen met gespecialiseerde partners. Zij leveren de basis. Wij ontwikkelen de integratie en het maatwerk."
            ]
          },
          {
            "kop": "Een PLC veilig op afstand benaderen",
            "alineas": [
              "Veilige toegang op afstand (secure remote access) tot een PLC of installatie begint bij de verbinding. Wij richten een versleutelde VPN-verbinding in, met afgeschermde toegang en tweestapsverificatie.",
              "Het beveiligingsniveau stemmen we af op wat er op afstand moet kunnen. Monitoring op afstand vraagt minder dan een installatie op afstand besturen."
            ]
          },
          {
            "kop": "NIS2, de Cyberbeveiligingswet en OT-security",
            "alineas": [
              "Sinds 15 augustus 2026 geldt de Cyberbeveiligingswet, de Nederlandse uitwerking van NIS2. Organisaties die onder de wet vallen, zijn ook verantwoordelijk voor de beveiliging van hun toeleveringsketen.",
              "Daarom vragen zij ook van hun leveranciers aantoonbare maatregelen. Veilige toegang op afstand, netwerkscheiding en een aantoonbaar ontwikkelproces worden zo onderdeel van wat een klant van je verwacht."
            ]
          }
        ],
        "praktijk": {
          "project": "project-1",
          "kop": "Uit de praktijk: sprinklerinstallaties veilig op afstand testen",
          "tekst": "Voor Kemkens Brandbeveiliging werken we aan een betrouwbare en beveiligde verbinding met sprinklerinstallaties op locaties in heel Nederland. Omdat het om kritieke installaties gaat, is de beveiliging opgebouwd vanuit IEC 62443."
        },
        "vragen": [
          {
            "vraag": "Moet mijn machine of installatie aan IEC 62443 voldoen?",
            "antwoord": "IEC 62443 is een norm, geen wet. Wetgeving zoals de Cyberbeveiligingswet vraagt wel om aantoonbare maatregelen. De norm is een praktische manier om die in te vullen."
          },
          {
            "vraag": "Hoe regel je toegang op afstand voor monteurs en leveranciers?",
            "antwoord": "Met een versleutelde VPN-verbinding, afgeschermde toegang en tweestapsverificatie. Het beveiligingsniveau stemmen we af op wat er op afstand moet kunnen: alleen meekijken, of ook bedienen."
          },
          {
            "vraag": "Is OT-security alleen iets voor grote bedrijven?",
            "antwoord": "Nee. We bepalen het beveiligingsniveau op basis van het profiel van je systeem en de risico's. Voor een kleine installatie is dat een ander niveau dan voor een kritieke installatie."
          }
        ],
        "verwant": [
          { "pagina": "nieuws-3", "tekst": "NIS2 voor leveranciers: wat de Cyberbeveiligingswet van je vraagt" },
          { "pagina": "nieuws-5", "tekst": "NIS2 voor OT en PLC" },
          { "pagina": "nieuws-8", "tekst": "Een PLC veilig op afstand benaderen: VPN, tweestapsverificatie en IEC 62443" },
          { "pagina": "project-1", "tekst": "Sprinklerinstallaties op afstand testen voor Kemkens" }
        ],
        "toepassingen": "Industriële netwerken, kritische infrastructuur en connected producten.",
        "technologieen": ["TLS 1.3", "VPN", "IEC 62443", "NIS2", "HTTPS"],
        "meerWeten": "We bespreken graag de risico's van je systeem en wat er mogelijk is."
      }
    },

    // [PAGINA] /app-ontwikkeling/  (spec-5)
    {
      "id": "spec-5",
      "seo": {
        "adres": "app-ontwikkeling",
        "titel": "App laten maken voor installaties en de werkvloer | Allico Systems",
        "omschrijving": "App laten maken voor je installatie of werkvloer: apps voor telefoon, tablet en browser die registraties digitaliseren en installaties bereikbaar maken.",
        "gewijzigd": "2026-11-26"
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
        "lead": "Een app heeft pas waarde als hij ook echt gebruikt wordt. Allico Systems ontwikkelt apps die werkprocessen vereenvoudigen en installaties op afstand inzichtelijk en bedienbaar maken. Elke app stemmen we af op de praktijk van de mensen die ermee werken.",
        "aanpakAlineas": [
          "Veel bedrijfsprocessen draaien nog op papier, losse Excel-lijsten of systemen die niet met elkaar communiceren. Tegelijk staan er installaties die alleen ter plekke goed uit te lezen zijn.",
          "Een goede app brengt dit samen op één plek: overzichtelijk, altijd bij de hand en afgestemd op de mensen die er dagelijks mee werken.",
          "Daarom begint elk traject bij de gebruiker en het einddoel. Wie werkt ermee, waar en onder welke omstandigheden? Vanuit die vragen ontwerpen we een app die snel en zonder uitleg te gebruiken is.",
          "Afhankelijk van het doel bouwen we een app voor telefoon of tablet, of een webapplicatie. Die koppelen we aan bestaande systemen, sensoren en besturingen. De beveiliging stemmen we af op het systeem."
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
            "kop": "Een app bij je machine of installatie",
            "alineas": [
              "Een installatie die alleen ter plekke uit te lezen is, kost tijd. Met een app bij de machine of installatie zie je de meetwaarden op afstand, krijg je meldingen en kun je waar nodig bedienen.",
              "De app koppelen we aan sensoren, PLC's en bestaande systemen. Dashboard en besturing kunnen we er ook bij bouwen, zodat alles op elkaar aansluit."
            ]
          },
          {
            "kop": "Standaardpakket of app op maat?",
            "alineas": [
              "Voor veel standaardtaken bestaat een goed pakket. Een app op maat loont als de app moet aansluiten op je eigen machine, besturing of systemen. Of als het proces bij jou anders loopt dan een pakket aanneemt.",
              "Een voorbeeld is een digitale LMRA of een werkplekinspectie-app die past bij je eigen werkwijze."
            ]
          }
        ],
        "praktijk": {
          "project": "project-2",
          "kop": "Uit de praktijk: LMRA's en werkplekinspecties in één app",
          "tekst": "Papieren werkplekinspecties en LMRA's maakten de veiligheidsadministratie onvolledig en tijdrovend. Wij ontwikkelden een app waarmee medewerkers op de bouwplaats die digitaal invullen. Leidinggevenden zien de resultaten direct en krijgen een pushmelding bij een onveilige situatie."
        },
        "vragen": [
          {
            "vraag": "Kan de app gekoppeld worden aan onze machine of PLC?",
            "antwoord": "Ja. We koppelen apps aan bestaande systemen, sensoren en PLC's. Zo zie je meetwaarden, krijg je meldingen en kun je waar nodig bedienen."
          },
          {
            "vraag": "Werkt de app ook voor medewerkers die geen Nederlands spreken?",
            "antwoord": "Bij de LMRA-app was dat een eis. De app is gemakkelijk te begrijpen en in te vullen, ook voor medewerkers en onderaannemers die geen Nederlands spreken."
          },
          {
            "vraag": "Wie beheert de app na oplevering?",
            "antwoord": "Dat spreken we vooraf af. Bij de LMRA-app is het beheer (hosting, updates en certificaten) zo ingericht dat de interne IT-afdeling het zelf kan oppakken."
          },
          {
            "vraag": "Kunnen we eerst iets kleins proberen?",
            "antwoord": "Ja. We bouwen graag een eerste opzet op basis van je eigen proces. Zo zie je of het werkt voordat je verder gaat."
          }
        ],
        "verwant": [
          { "pagina": "project-2", "tekst": "LMRA-app en werkplekinspectie-app op maat" },
          { "pagina": "spec-3", "tekst": "Dashboard voor machines en sensordata" },
          { "pagina": "spec-2", "tekst": "PLC-besturing en embedded software" }
        ],
        "toepassingen": "Installatiebeheer op afstand, monitoring met IoT-sensoren, energiebeheer bij netcongestie, werkplekregistratie en inspecties, meldingen en storingen.",
        "technologieen": ["SwiftUI", "REST API", "SQL"],
        "meerWeten": "We bouwen graag een eerste opzet op basis van je eigen proces."
      }
    }
  ],

  // [APPS] Voorbeelden van onze apps: alleen beeld, niets om in te klikken.
  // Ze staan op de pagina van de specialisatie uit "hoortBij" en in een strook op de home, direct onder de scrollanimatie.
  // Een beeld vervangen of toevoegen: zet een PNG van een iPhone met doorzichtige achtergrond in de map apps/ (ongeveer 560 x 1120 px)
  // en draai daarna node beelden.js (maakt de lichte WebP-versie).
  "appVoorbeelden": {
    "hoortBij": "spec-5",
    "titel": "Een greep uit onze apps",
    "tekst": "Een paar apps die we zelf hebben gebouwd, rond vraagstukken uit de praktijk. De gegevens erin zijn voorbeelden.",
    "home": {
      "label": "App-ontwikkeling",
      "titel": "Ook de app bouwen we zelf",
      "tekst": "Van sensor en besturing tot de app op je telefoon: alles in één hand. Wil je een dashboard of app laten maken bij je machine, installatie of IoT-sensoren? Ook die bouwen we zelf. Overzichtelijk, veilig en gemaakt voor de mensen die er dagelijks mee werken.",
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
    // Let op: geen resultaten of nieuwe feiten over dit project toevoegen zonder akkoord van Kemkens.
    {
      "id": "project-1",
      "seo": {
        "adres": "brandbeveiliging-op-afstand-testen-kemkens",
        "titel": "Sprinklerinstallaties op afstand testen | Allico Systems",
        "omschrijving": "Voor Kemkens Brandbeveiliging werken we aan veilige toegang op afstand tot sprinklerinstallaties, voor testen en beheer, vanuit IEC 62443.",
        "gewijzigd": "2026-11-26"
      },
      "num": "P-01",
      "tag": "PLC's · Automatisering · Remote control · Cybersecurity",
      "titel": "Remote toegang voor testen van brandbeveiligingssystemen",
      "samenvatting": "Kemkens Brandbeveiliging zocht een betrouwbare oplossing om installaties op afstand te testen, te monitoren en te beheren, zonder concessies aan de systeemveiligheid.",
      "foto": "kemkens.jpeg",
      "fotoAlt": "Kemkens brandbeveiliging",
      "cta": {
        "titel": "Ook installaties veilig op afstand beheren?",
        "tekst": "Voor Kemkens werken we aan het op afstand testen van sprinklerinstallaties, met beveiliging vanuit IEC 62443. We kijken graag wat dat voor jouw installaties kan betekenen."
      },
      "detail": {
        "topbarTag": "P-01 · Cybersecurity · Embedded",
        "hero": "kemkens.jpeg",
        "kop": "Sprinklerinstallaties op afstand testen: remote toegang voor Kemkens Brandbeveiliging",
        "lead": "Kemkens Brandbeveiliging zocht een betrouwbare manier om sprinklerinstallaties op afstand te testen, te monitoren en te beheren. De veiligheid van het systeem mocht daar niet onder lijden.",
        "doel": "Om toekomstbestendig te blijven, zocht Kemkens Brandbeveiliging een efficiënte manier om het onderhoud van installaties te garanderen. De oplossing: testen op afstand. Het doel van dit project is een uiterst betrouwbare en beveiligde verbinding met brandbeveiligingsinstallaties op willekeurige locaties in Nederland. Daarmee kunnen systemen op afstand in werking worden gesteld en sensoren worden uitgelezen. Dat geeft direct inzicht in de prestaties en de werking van de installatie.",
        "uitdaging": "Brandbeveiligingssystemen zijn kritieke installaties. De beveiliging van de verbinding moet daarom optimaal en volledig gecertificeerd zijn. Daarnaast is gebruiksgemak een harde eis: het nieuwe beheerportaal moet praktisch en toegankelijk blijven voor de medewerkers die er dagelijks mee werken.",
        "aanpak": "Voor een certificering op IEC 62443-niveau zijn speciale hardware, software en licenties nodig. Daarvoor werken we nauw samen met gespecialiseerde partners. Zij leveren de robuuste basis voor dit type systemen. Daarop ontwikkelt Allico Systems de integratie en het maatwerk dat aansluit op het doel van het project.",
        "secties": [
          {
            "kop": "Testen, monitoren en beheren op afstand: het doel",
            "alineas": [
              "Het doel is dat systemen op afstand in werking kunnen worden gesteld en dat sensoren kunnen worden uitgelezen, via een beveiligde verbinding. Dat is meer dan monitoring op afstand: de installatie wordt op afstand ook echt getest.",
              "Het beheerportaal is bedoeld voor de medewerkers die er dagelijks mee werken. Daarom is gebruiksgemak een harde eis."
            ]
          }
        ],
        "vragen": [
          {
            "vraag": "Hoe is toegang op afstand tot een sprinklerinstallatie beveiligd?",
            "antwoord": "De opzet is opgebouwd vanuit IEC 62443, de normenreeks voor de beveiliging van industriële besturing. Daarbij horen een VPN-verbinding en tweestapsverificatie (2FA)."
          },
          {
            "vraag": "Kan dit ook voor andere installaties dan brandbeveiliging?",
            "antwoord": "Dezelfde aanpak past bij andere installaties die je op afstand wilt monitoren, testen of beheren. We kijken graag wat dat voor jouw installaties kan betekenen."
          },
          {
            "vraag": "Is testen op afstand hetzelfde als remote ondersteuning?",
            "antwoord": "Niet helemaal. Bij remote ondersteuning kijkt iemand op afstand mee of helpt hij een collega ter plekke. Bij testen op afstand wordt de installatie zelf op afstand in werking gesteld en worden de sensoren uitgelezen. Dat laatste is het doel van dit project."
          }
        ],
        "verwant": [
          { "pagina": "spec-4", "tekst": "OT-security en beveiligde verbindingen" },
          { "pagina": "spec-2", "tekst": "PLC-besturing en embedded software" },
          { "pagina": "nieuws-8", "tekst": "Een PLC veilig op afstand benaderen" }
        ],
        "sector": "Brandbeveiliging · Gebouwbeheer",
        "technologieen": ["VPN-verbinding", "IEC 62443", "2FA", "PLC's"],
        "doorlooptijd": "Loopt nog"
      }
    },

    // [PAGINA] /projecten/lmra-app-veiligheidsregistratie/  (project-2)
    {
      "id": "project-2",
      "seo": {
        "adres": "lmra-app-veiligheidsregistratie",
        "titel": "LMRA-app en digitale LMRA op maat | Allico Systems",
        "omschrijving": "Een LMRA-app op maat: digitale LMRA's en werkplekinspecties op de bouwplaats, snel in te vullen, zonder taalbarrière en met direct overzicht.",
        "gewijzigd": "2026-11-26"
      },
      "num": "P-02",
      "tag": "Software · Integratie · Beveiliging · Applicatie",
      "titel": "Veiligheidsregistratie-app",
      "samenvatting": "Maatwerkapplicatie voor de digitale registratie van LMRA's en veiligheidscontroles op werkplekken.",
      "foto": "veiligheidsapp goed.jpeg",
      "fotoAlt": "Veiligheidsregistratie-app",
      "cta": {
        "titel": "Ook papierwerk op de werkvloer digitaliseren?",
        "tekst": "Een app die medewerkers wél invullen, met direct inzicht voor leidinggevenden. Vertel ons welk proces je wilt verbeteren."
      },
      "detail": {
        "topbarTag": "P-02 · Software · Applicatie",
        "hero": "veiligheidsapp goed.jpeg",
        "kop": "LMRA-app en werkplekinspectie-app op maat",
        "lead": "Papieren werkplekinspecties en LMRA's maakten de veiligheidsadministratie onvolledig en tijdrovend. Realtime inzicht op de bouwplaats ontbrak. Allico Systems ontwikkelde een LMRA-app op maat die dit proces stroomlijnt. Het resultaat is een volledig geautomatiseerde administratie en actueel inzicht in de veiligheidssituatie.",
        "doel": "Het automatiseren van tijdrovende veiligheidsadministratie. Het doel: met realtime dashboards en slimme meldingen de veiligheid op de werkvloer proactief verhogen en beheersbaar maken.",
        "uitdaging": "Het registratieproces op locatie moet laagdrempelig en gebruiksvriendelijk zijn. Werknemers ervaren het vaak als een administratieve en onnodige taak. Daarom moest het nieuwe proces aan de volgende eisen voldoen:",
        "uitdagingEisen": [
          { "label": "Snel en simpel", "tekst": "Een duidelijk systeem om de administratieve last voor de werknemer op locatie zo klein mogelijk te maken." },
          { "label": "Zonder taalbarrière", "tekst": "Gemakkelijk te begrijpen en in te vullen, ook voor werknemers en onderaannemers die geen Nederlands spreken." },
          { "label": "Direct inzichtelijk", "tekst": "De ingevoerde resultaten moeten direct duidelijk beschikbaar zijn voor leidinggevenden op verschillende locaties." },
          { "label": "Langetermijnoverzicht", "tekst": "Het genereren van duidelijke overzichten van de veiligheidssituatie over langere periodes." }
        ],
        "aanpak": "Vanaf de eerste gesprekken was duidelijk dat toegankelijkheid en integratie in de bedrijfsstructuur cruciaal waren. Daarom zijn de nieuwe accounts direct gekoppeld aan bestaande e-mailadressen. Het beheer (hosting, updates en certificaten) is zo ingericht dat de interne IT-afdeling dit zelf kan oppakken. Een bewuste keuze voor een toekomstbestendig systeem.\n\nOp basis van de heldere doelstellingen is er een strak ontwikkel- en testplan uitgerold. De bouw van het dashboard ging voorspoedig, waarna uitgebreid testen onmisbaar bleek. De praktijktest legde nog belangrijke verbeterpunten bloot. Omdat we die feedback direct verwerkten in kleine, snelle aanpassingen, konden we de applicatie in een vlot tempo opleveren.",
        "resultaat": "Sinds de werknemers de analyses digitaal invullen, is de impact voor leidinggevenden direct merkbaar. Onveilige situaties worden via automatische pushmeldingen onmiddellijk gemeld en opgepakt. Bovendien is het LMRA-overzicht van het voltallige werknemersbestand nu altijd compleet en actueel.",
        "secties": [
          {
            "kop": "Wat is een LMRA?",
            "alineas": [
              "LMRA staat voor Laatste Minuut Risico Analyse: een korte controle vlak voordat iemand aan een klus begint. Kloppen de omstandigheden, zijn de risico's bekend en zijn de maatregelen genomen?",
              "Een papieren LMRA-formulier raakt snel zoek, of wordt pas achteraf ingevuld. Met een digitale LMRA gebeurt het op het moment zelf, en ziet de leidinggevende het direct."
            ]
          },
          {
            "kop": "Digitale LMRA: standaardpakket of eigen app?",
            "alineas": [
              "Er bestaan standaardpakketten voor de digitale LMRA. Wil je alleen een digitaal formulier, dan is zo'n pakket vaak de snelste weg.",
              "Een eigen veiligheidsapp of werkplekinspectie-app loont als de app moet aansluiten op je eigen accounts en systemen. Of als je eigen overzichten en meldingen wilt, zoals in dit project."
            ]
          }
        ],
        "vragen": [
          {
            "vraag": "Werkt de LMRA-app ook voor medewerkers die geen Nederlands spreken?",
            "antwoord": "Ja. Dat was een van de eisen. De app is gemakkelijk te begrijpen en in te vullen, ook voor werknemers en onderaannemers die geen Nederlands spreken."
          },
          {
            "vraag": "Ziet een leidinggevende direct wat er is ingevuld?",
            "antwoord": "Ja. De resultaten zijn direct beschikbaar, ook voor leidinggevenden op andere locaties. Bij een onveilige situatie gaat er automatisch een pushmelding uit."
          },
          {
            "vraag": "Kan onze eigen IT-afdeling de app beheren?",
            "antwoord": "Ja. De accounts zijn gekoppeld aan de bestaande e-mailadressen. Hosting, updates en certificaten zijn zo ingericht dat de interne IT-afdeling het zelf kan oppakken."
          }
        ],
        "verwant": [
          { "pagina": "spec-5", "tekst": "App laten maken voor machines, installaties en de werkvloer" },
          { "pagina": "spec-3", "tekst": "Dashboard op maat voor machines en sensordata" }
        ],
        "sector": "Industrie · Veiligheid",
        "technologieen": ["Dart", "REST API", "SQL"],
        "doorlooptijd": "6 maanden"
      }
    }
  ],

  // [NIEUWS] Nieuwsberichten en kennisartikelen. Bovenaan staat het nieuwste. Een bericht zonder "id" en "tekst"
  // staat alleen in de lijst. In "tekst" is elk stuk een alinea, een tussenkop ({ "kop": ... }) of een lijst ({ "punten": [...] }).
  "nieuws": [

    // [PAGINA] /nieuws/machineverordening-2027-cybersecurity/  (nieuws-6)
    {
      "id": "nieuws-6",
      "seo": {
        "adres": "machineverordening-2027-cybersecurity",
        "titel": "Machineverordening 2027 en cybersecurity | Allico Systems",
        "omschrijving": "De Machineverordening (EU) 2023/1230 geldt vanaf 20 januari 2027. Wat bijlage III 1.1.9 en 1.2.1 eisen van besturing, updates en logging.",
        "gepubliceerd": "2026-11-26",
        "gewijzigd": "2026-11-26"
      },
      "datum": "November 2026",
      "titel": "Machineverordening 2027 en cybersecurity voor machinebouwers",
      "kop": "Machineverordening 2027 en cybersecurity: wat moet een machinebouwer voor 20 januari geregeld hebben?",
      "samenvatting": "Op 20 januari 2027 vervangt de Machineverordening (EU) 2023/1230 de Machinerichtlijn. Nieuw zijn eisen tegen corruptie van software, gegevens en besturing, ook bij toegang op afstand.",
      "tekst": [
        "Vanaf 20 januari 2027 geldt de Machineverordening (EU) 2023/1230 in de hele EU. Ze vervangt de Machinerichtlijn 2006/42/EG. Nieuw is dat een machine beschermd moet zijn tegen corruptie van software, gegevens en besturing, ook via toegang op afstand. Een machine die vanaf die datum in de handel komt, moet daaraan voldoen voordat de fabrikant de CE-markering aanbrengt.",
        {
          "kop": "Wat verandert er op 20 januari 2027?"
        },
        "Op die datum wordt de Machineverordening van toepassing en wordt de Machinerichtlijn ingetrokken (artikelen 51 en 54). Een machine die vóór 20 januari 2027 volgens de Machinerichtlijn in de handel kwam, mag daarna nog op de markt worden aangeboden (artikel 52). Voor machines die daarna in de handel komen, geldt alleen de verordening.",
        "In de oorspronkelijke tekst stond 14 januari 2027. Een rectificatie in het Publicatieblad (PB L 169 van 4 juli 2023) zette die datum recht naar 20 januari 2027.",
        "De fabrikant stelt de technische documentatie op, voert de conformiteitsbeoordeling uit en brengt daarna de CE-markering aan (artikel 10). Geharmoniseerde normen blijven vrijwillig. Volgens de Europese Commissie wordt een eerste lijst met geharmoniseerde normen onder de Machineverordening voorbereid. Waar bestaande normen de nieuwe eisen nog niet volledig dekken, geeft de Commissie dat aan.",
        {
          "kop": "Wat zegt de Machineverordening over cybersecurity?"
        },
        "Twee punten uit bijlage III gaan over cybersecurity: punt 1.1.9 ‘Bescherming tegen corruptie’ en punt 1.2.1 over de veiligheid en betrouwbaarheid van de besturingssystemen.",
        "Punt 1.1.9 begint zo: ‘De machine of het verwante product moet zodanig ontworpen en gebouwd zijn dat de verbinding ervan met een ander apparaat, via een functie van het aangesloten apparaat zelf of via een apparaat op afstand dat communiceert met de machine of het verwante product, niet tot een gevaarlijke situatie leidt.’ In gewone woorden vraagt hetzelfde punt verder:",
        {
          "punten": [
            "Software en gegevens die cruciaal zijn voor de essentiële gezondheids- en veiligheidseisen, zijn herkenbaar en ‘afdoende beveiligd’ tegen al dan niet opzettelijke corruptie.",
            "Een hardwarecomponent die signalen of gegevens uitzendt voor de toegang tot die software, is daar ook afdoende tegen beschermd. De machine verzamelt bewijs van ingrepen in die component.",
            "De machine kan de geïnstalleerde software die nodig is om veilig te functioneren identificeren, en die informatie altijd in een gemakkelijk toegankelijke vorm geven.",
            "De machine verzamelt bewijs van ‘al dan niet rechtmatige ingrepen in en wijzigingen van’ de geïnstalleerde software of een configuratie ervan."
          ]
        },
        "Punt 1.2.1 a) eist dat besturingssystemen bestand zijn tegen invloeden van buitenaf. Daaronder vallen ‘redelijkerwijs voorzienbare kwaadwillige pogingen van derden die tot een gevaarlijke situatie leiden’. Onder d) staat dat instellingen of regels niet zo te wijzigen mogen zijn dat een gevaarlijke situatie kan ontstaan.",
        "Onder f) staat het traceringslogboek. Dat registreert ‘de gegevens die bij een ingreep zijn gegenereerd’. Het registreert ook de versies van veiligheidssoftware die zijn geüpload na het in de handel brengen of in bedrijf stellen. Het logboek stelt die ‘gedurende vijf jaar na het uploaden ter beschikking’. Dat dient uitsluitend om de overeenstemming aan te tonen, op een met redenen omkleed verzoek van een nationale bevoegde autoriteit.",
        {
          "kop": "Wat betekent dit voor de PLC, toegang op afstand, updates en logging?"
        },
        "De eisen gelden voor de machine als geheel, dus ook voor de besturing. De verordening noemt geen technieken. Welke maatregelen nodig zijn, volgt uit de risicobeoordeling die de fabrikant volgens bijlage III moet uitvoeren.",
        "Bij een PLC-besturing gaat het om het programma, de parameters en de configuratie die de veiligheid bepalen. De vraag is wie die kan wijzigen, via welke poort, en hoe zichtbaar wordt welke versie draait. Ter vergelijking: de Cyber Resilience Act noemt in bijlage I onder meer authenticatie en identiteits- en toegangsbeheer. Ook vraagt die bescherming van programma's en configuraties tegen manipulatie.",
        "Toegang op afstand staat letterlijk in punt 1.1.9: een apparaat op afstand mag via de verbinding geen gevaarlijke situatie veroorzaken. Dat raakt de keuze wie op afstand mag inloggen, hoe de verbinding is beveiligd en wat op afstand wel en niet kan.",
        "Een software-update na levering raakt twee punten. De machine legt de wijziging vast (1.1.9) en het traceringslogboek registreert nieuwe versies van veiligheidssoftware (1.2.1 f). Een wijziging die de fabrikant niet heeft voorzien of gepland, kan een substantiële wijziging zijn (artikel 3, punt 16). Dat is zo als ze een nieuw gevaar schept of een bestaand risico vergroot. Daardoor moeten dan afschermingen of beveiligingsinrichtingen worden toegevoegd waarvoor het veiligheidscontrolesysteem moet veranderen. Of er zijn extra maatregelen nodig voor de stabiliteit of de mechanische sterkte. Wie een machine substantieel wijzigt, geldt als fabrikant (artikel 18).",
        "Voor logging schrijft de verordening geen formaat of techniek voor.",
        {
          "kop": "Wat kan een machinebouwer nu al doen?"
        },
        "Deze stappen volgen uit de tekst van bijlage III:",
        {
          "punten": [
            "Leg bijlage III, punten 1.1.9 en 1.2.1, naast het huidige ontwerp van de machine en de besturing.",
            "Breng in kaart welke software, parameters en configuratie nodig zijn voor de veiligheidsfuncties, en welke versies er nu op staan.",
            "Maak een overzicht van alle verbindingen: netwerk, programmeerpoort, USB, draadloos en toegang op afstand.",
            "Bepaal wie wat mag wijzigen, lokaal en op afstand, en hoe dat wordt vastgelegd.",
            "Regel hoe ingrepen en geüploade versies van veiligheidssoftware worden gelogd en vijf jaar beschikbaar blijven.",
            "Leg in de technische documentatie vast welke maatregelen je kiest en waarom.",
            "Houd de lijst met geharmoniseerde normen onder de Machineverordening in de gaten."
          ]
        },
        {
          "kop": "Hoe verhoudt dit zich tot NIS2 en de Cyber Resilience Act?"
        },
        "De Cyberbeveiligingswet is de Nederlandse uitwerking van de NIS2-richtlijn en geldt sinds 15 augustus 2026. Die wet stelt eisen aan organisaties: een registratieplicht, zorgplicht en meldplicht. Volgens de RDI moet een organisatie die eronder valt ook kijken naar de risico's van haar leveranciers. De Machineverordening stelt eisen aan de machine zelf.",
        "De Cyber Resilience Act (Verordening (EU) 2024/2847) stelt cybereisen aan producten met digitale elementen. Valt een machine onder beide verordeningen, dan moet de fabrikant volgens overweging 53 van de CRA aan beide voldoen. Dezelfde overweging zegt dat naleving van de CRA kan helpen bij de punten 1.1.9 en 1.2.1. De meldplicht van de CRA geldt sinds 11 september 2026, de overige eisen vanaf 11 december 2027.",
        {
          "kop": "Hoe Allico Systems hierbij helpt"
        },
        "Allico Systems uit Horst doet PLC-programmering en procesbesturing en werkt met PLCnext van Phoenix Contact. Wij ontwikkelen besturing waarin beveiliging vanaf het ontwerp is meegenomen. Denk aan installaties die beveiligd op afstand toegankelijk zijn, met de documentatie voor een audit of leveranciersvragenlijst. Wij bepalen het benodigde beveiligingsprofiel van een systeem, richten VPN-verbindingen en versleutelde communicatie in en gebruiken tweestapsverificatie. Voor zware trajecten werken wij samen met een vaste partner.",
        "Bronnen: Verordening (EU) 2023/1230, artikelen 3, 10, 18, 51, 52 en 54 en bijlage III (EUR-Lex, geconsolideerde tekst van 29 mei 2026, met rectificatie PB L 169 van 4 juli 2023); Europese Commissie, pagina's Machinery en Harmonised standards for machinery; Verordening (EU) 2024/2847, overweging 53 en bijlage I; RDI, veelgestelde vragen Cyberbeveiligingswet. Stand: november 2026.",
        "Dit artikel geeft algemene informatie en is geen juridisch advies."
      ],
      "vragen": [
        {
          "vraag": "Wanneer gaat de Machineverordening in?",
          "antwoord": "De Machineverordening (EU) 2023/1230 is van toepassing vanaf 20 januari 2027. Op die datum wordt de Machinerichtlijn 2006/42/EG ingetrokken."
        },
        {
          "vraag": "Wat is bescherming tegen corruptie in de Machineverordening?",
          "antwoord": "Dat is punt 1.1.9 van bijlage III. Het eist onder meer dat een verbinding met een ander apparaat, ook op afstand, niet tot een gevaarlijke situatie leidt. Software en gegevens die cruciaal zijn voor de veiligheidseisen, moeten beschermd zijn tegen al dan niet opzettelijke corruptie. De machine moet bewijs van ingrepen verzamelen."
        },
        {
          "vraag": "Hoe lang moet het logboek van ingrepen beschikbaar blijven?",
          "antwoord": "Bijlage III, punt 1.2.1 f), noemt het traceringslogboek. Dat stelt de gegevens van een ingreep en de geüploade versies van veiligheidssoftware ‘gedurende vijf jaar na het uploaden ter beschikking’. Dat is uitsluitend bedoeld voor een met redenen omkleed verzoek van een nationale bevoegde autoriteit."
        },
        {
          "vraag": "Is een software-update een substantiële wijziging onder de Machineverordening?",
          "antwoord": "Niet vanzelf. Volgens artikel 3, punt 16, gaat het om een wijziging die de fabrikant niet heeft voorzien of gepland, ook met digitale middelen. Ze schept een nieuw gevaar of vergroot een bestaand risico. Daardoor zijn extra afschermingen of beveiligingsinrichtingen met een aangepast veiligheidscontrolesysteem nodig, of maatregelen voor stabiliteit of sterkte."
        },
        {
          "vraag": "Mag een machine die vóór 20 januari 2027 in de handel is gebracht op de markt blijven?",
          "antwoord": "Ja. Een machine die vóór 20 januari 2027 volgens de Machinerichtlijn 2006/42/EG in de handel is gebracht, mag daarna nog op de markt worden aangeboden. Dat staat in artikel 52."
        }
      ],
      "verwant": [
        {
          "pagina": "spec-2",
          "tekst": "PLC-besturing en embedded software"
        },
        {
          "pagina": "spec-4",
          "tekst": "Cybersecurity en OT-beveiliging volgens IEC 62443"
        },
        {
          "pagina": "nieuws-7",
          "tekst": "Cyber Resilience Act (CRA) voor machinebouwers"
        },
        {
          "pagina": "nieuws-8",
          "tekst": "Een PLC veilig op afstand benaderen"
        }
      ]
    },

    // [PAGINA] /nieuws/nis2-ot-plc/  (nieuws-5)
    {
      "id": "nieuws-5",
      "seo": {
        "adres": "nis2-ot-plc",
        "titel": "NIS2 voor OT en PLC: wat de wet vraagt | Allico Systems",
        "omschrijving": "Valt je besturing onder de NIS2-zorgplicht? De tien maatregelen uit de Cyberbeveiligingswet vertaald naar PLC, netwerk en remote access.",
        "gepubliceerd": "2026-11-26",
        "gewijzigd": "2026-11-26"
      },
      "datum": "November 2026",
      "titel": "NIS2 voor OT en PLC: wat de Cyberbeveiligingswet van besturing vraagt",
      "kop": "NIS2 en je besturing: voldoet een standaard PLC-configuratie aan de Cyberbeveiligingswet?",
      "samenvatting": "Ook de besturing van een machine of installatie valt onder de zorgplicht van de Cyberbeveiligingswet. Wat dat betekent voor PLC, netwerk en toegang op afstand, en hoe IEC 62443 daarbij past.",
      "tekst": [
        "Een PLC-configuratie voldoet niet op zichzelf aan de Cyberbeveiligingswet. De wet vraagt van een organisatie passende maatregelen op basis van haar eigen risicoanalyse, en de besturing hoort daarbij. Een standaardconfiguratie is daarom een beginpunt: wat erbij moet, volgt uit die analyse.",
        {
          "kop": "Valt OT onder de NIS2-zorgplicht?"
        },
        "Ja, als de organisatie zelf onder de wet valt. De zorgplicht geldt voor alle netwerk- en informatiesystemen die zij voor haar werk gebruikt (artikel 21). Volgens de memorie van toelichting valt daar ook operationele technologie (OT) onder. Dat zijn de meet- en regelsystemen, ook wel IACS (Industrial Automation and Control Systems) genoemd.",
        "De definitie is volgens de memorie van toelichting ruim en technologieneutraal. Voor OT-beveiliging onder NIS2 betekent dat: een PLC, een HMI, een SCADA-systeem en een industrieel netwerk vallen onder dezelfde zorgplicht als kantoor-IT. De maatregelen beschermen ook de fysieke omgeving van de systemen (artikel 21, lid 3). De memorie van toelichting noemt als voorbeeld gebouwen en ruimtes.",
        {
          "kop": "Voldoet een standaard PLC-configuratie aan NIS2?"
        },
        "Een configuratie is niet zelf compliant of niet-compliant. De wet legt de plicht bij de organisatie: zij voert een risicoanalyse uit en neemt maatregelen die passen bij haar risico's. De RDI, een van de toezichthouders, toetst of de maatregelen in verhouding staan tot de risico's.",
        "De NIS2-richtlijn noemt bij cyberhygiëne onder meer software-updates, de configuratie van apparaten, netwerksegmentatie en identiteits- en toegangsbeheer (overweging 89). Bij een nieuwe of bestaande installatie zijn dit vragen om na te lopen, ongeacht het merk besturing:",
        {
          "punten": [
            "Wachtwoorden en accounts: zijn standaardwachtwoorden vervangen, en heeft iedereen een eigen account op PLC, HMI en netwerkapparatuur?",
            "Diensten en poorten: staan er diensten of poorten open die niet worden gebruikt?",
            "Netwerk: zijn kantoor, besturing en toegang op afstand van elkaar gescheiden, of is het netwerk plat?",
            "Logging: wordt vastgelegd wie wanneer inlogde of het programma wijzigde?",
            "Updates: is er een vast proces om firmware en software bij te werken?"
          ]
        },
        "Deze punten staan niet letterlijk in de wet. Het zijn technische invullingen van de maatregelen hieronder.",
        {
          "kop": "Wat betekenen de tien maatregelen voor een installatie?"
        },
        "Artikel 21, lid 3, noemt ten minste tien maatregelen. Hieronder staat per maatregel wat die kan betekenen voor PLC, netwerk en remote access. Dit is een technische vertaling, geen wettekst.",
        {
          "punten": [
            "Risicoanalyse en beveiligingsbeleid: breng PLC's, HMI's, netwerkcomponenten en verbindingen in kaart en bepaal per onderdeel wat er mis kan gaan.",
            "Incidenten afhandelen: leg vast wat je doet als een besturing zich vreemd gedraagt, en wie de leverancier, het CSIRT en de toezichthouder waarschuwt.",
            "Bedrijfscontinuïteit: bewaar back-ups van PLC-programma's, parameters en configuraties, en test of je ze kunt terugzetten.",
            "Toeleveringsketen: maak afspraken met machinebouwer, systeemintegrator en servicepartij over toegang en updates.",
            "Aanschaffen, ontwikkelen en onderhouden: neem beveiliging op in de specificatie en houd kwetsbaarheden en firmware-updates bij.",
            "Beoordelen of het werkt: controleer periodiek of de maatregelen werken, bijvoorbeeld of accounts van oud-medewerkers echt zijn verwijderd.",
            "Cyberhygiëne en opleiding: leer operators en monteurs welke laptops en USB-sticks wel en niet op het machinenetwerk mogen.",
            "Cryptografie: gebruik versleutelde verbindingen voor toegang op afstand en, waar de apparatuur het ondersteunt, voor dataverkeer naar dashboards.",
            "Personeel, toegang en middelen: persoonlijke accounts met alleen de rechten die nodig zijn, en een actuele lijst van apparaten en softwareversies.",
            "Multifactorauthenticatie en beveiligde communicatie: waar gepast, tweestapsverificatie voor iedereen die van buiten inlogt."
          ]
        },
        {
          "kop": "Hoe verhouden NIS2 en IEC 62443 zich tot elkaar?"
        },
        "IEC 62443 is een reeks normen, geen wet. De Cyberbeveiligingswet zelf schrijft geen norm voor. Wel houdt de organisatie rekening met de stand van de techniek en, waar van toepassing, met Europese en internationale normen (artikel 21, lid 2). IEC 62443 is een internationale normreeks voor de beveiliging van industriële automatiserings- en besturingssystemen. Delen die bij een installatie een rol spelen:",
        {
          "punten": [
            "IEC 62443-2-1: eisen aan het beveiligingsprogramma van de eigenaar van de installatie.",
            "IEC 62443-3-2: risicoanalyse voor het ontwerp van een systeem, met de indeling in zones en verbindingen (conduits) en een beoogd beveiligingsniveau per zone.",
            "IEC 62443-3-3: beveiligingseisen voor het systeem als geheel, met de beveiligingsniveaus (security levels).",
            "IEC 62443-4-1: eisen aan het veilige ontwikkelproces van een productleverancier.",
            "IEC 62443-4-2: technische beveiligingseisen voor afzonderlijke componenten, zoals een controller, een switch of een softwaretoepassing."
          ]
        },
        "Volgens de RDI betekent het volgen van een normenkader niet dat een organisatie aan de zorgplicht voldoet. Een normenkader kan wel houvast geven bij het beheersen van de risico's, ook bij OT.",
        {
          "kop": "Wat vraagt NIS2 van remote access voor leveranciers en servicemonteurs?"
        },
        "De wet noemt remote access niet apart, maar wel toegangsbeleid, cryptografie en, waar gepast, multifactorauthenticatie (artikel 21, lid 3, onder h, i en j). Technisch past daarbij een vaste, versleutelde verbinding met persoonlijke accounts en tweestapsverificatie. Wie toegang heeft tot de systemen van een Cbw-organisatie, kan volgens het NCSC in haar risico-inventarisatie van de keten terechtkomen.",
        "Bij een installatie kan dat bijvoorbeeld betekenen: toegang die alleen openstaat als het nodig is, en een logboek van wie wanneer verbonden was. De verbinding kan uitkomen in een eigen deel van het netwerk, zodat een monteur niet automatisch bij alles kan. Netwerksegmentatie staat niet letterlijk in de wet, maar de NIS2-richtlijn noemt het als basispraktijk van cyberhygiëne (overweging 89). Het sluit aan op de zones en conduits uit IEC 62443-3-2.",
        {
          "kop": "Wat moet er gemeld worden als de besturing geraakt wordt?"
        },
        "Een significant incident, net als bij elk ander systeem. Dat is een incident dat een ernstige operationele verstoring of financiële verliezen veroorzaakt of kan veroorzaken. Ook aanzienlijke schade bij anderen telt mee (artikel 25).",
        "De organisatie geeft haar CSIRT en toezichthouder onverwijld een vroegtijdige waarschuwing, uiterlijk binnen 24 uur nadat zij van het incident weet. Uiterlijk binnen 72 uur volgt een melding, en uiterlijk een maand daarna een eindverslag (artikelen 26, 27 en 29). Voor die melding is informatie nodig die in de besturing kan zitten: logbestanden, wijzigingen in het programma en verbindingen op afstand. Zonder logging ontbreekt een deel van die informatie.",
        {
          "kop": "Geldt dit ook voor een gebouwbeheersysteem?"
        },
        "Mogelijk, maar alleen via een organisatie die onder de wet valt. Een gebouwbeheersysteem staat niet apart in de wet, maar past wel in de ruime definitie van een netwerk- en informatiesysteem (artikel 1). Daaronder valt elk apparaat dat op basis van een programma digitale gegevens verwerkt. Gebruikt zo'n organisatie het voor haar werk, dan kan de zorgplicht er dus ook voor gelden.",
        {
          "kop": "Hoe Allico Systems hierbij helpt"
        },
        "Allico Systems ontwikkelt besturing waarin beveiliging vanaf het ontwerp is meegenomen, en werkt met PLCnext van Phoenix Contact. We bepalen het benodigde beveiligingsprofiel, richten VPN-verbindingen en versleutelde communicatie in en gebruiken tweestapsverificatie. Daarbij hoort de documentatie die je nodig hebt voor een audit of leveranciersvragenlijst. Voor Kemkens Brandbeveiliging werken we aan een beveiligde verbinding om brandbeveiligingsinstallaties op afstand te testen en te beheren, opgebouwd vanuit IEC 62443.",
        "Bronnen: Cyberbeveiligingswet, Staatsblad 2026, 187 (artikelen 1, 21 en 25 tot en met 29); memorie van toelichting, Kamerstukken II 36764, nr. 3; Richtlijn (EU) 2022/2555 (NIS2), overweging 89; NCSC, De Cyberbeveiligingswet en toeleveranciers; RDI, veelgestelde vragen Cyberbeveiligingswet; ISA en IEC, titels en samenvattingen van de delen van ISA/IEC 62443. Stand: november 2026.",
        "Dit artikel geeft algemene informatie en is geen juridisch advies."
      ],
      "vragen": [
        {
          "vraag": "Moet een PLC gecertificeerd zijn voor NIS2?",
          "antwoord": "De Cyberbeveiligingswet zelf eist geen certificaat voor een PLC of ander onderdeel. De wet vraagt passende maatregelen van de organisatie, en de keuze van componenten hoort daarbij."
        },
        {
          "vraag": "Is netwerksegmentatie verplicht onder NIS2?",
          "antwoord": "De wet noemt netwerksegmentatie niet letterlijk. De NIS2-richtlijn noemt het wel als basispraktijk van cyberhygiëne (overweging 89). Technisch beperkt segmentatie hoe ver een incident zich in een installatie kan verspreiden."
        },
        {
          "vraag": "Is IEC 62443 verplicht onder de Cyberbeveiligingswet?",
          "antwoord": "Nee, IEC 62443 is een norm en geen wet. De wet vraagt wel om waar van toepassing rekening te houden met Europese en internationale normen (artikel 21, lid 2)."
        },
        {
          "vraag": "Wie is verantwoordelijk voor de beveiliging van een machine onder NIS2?",
          "antwoord": "De zorgplicht ligt bij de organisatie die de machine gebruikt en zelf onder de wet valt. Die organisatie kan via afspraken in de toeleveringsketen eisen stellen aan de machinebouwer of de servicepartij."
        }
      ],
      "verwant": [
        {
          "pagina": "nieuws-3",
          "tekst": "Cyberbeveiligingswet (NIS2): eisen, zorgplicht en meldplicht voor leveranciers"
        },
        {
          "pagina": "spec-4",
          "tekst": "Cybersecurity en OT-beveiliging van installaties"
        },
        {
          "pagina": "nieuws-8",
          "tekst": "Een PLC veilig op afstand benaderen"
        },
        {
          "pagina": "spec-2",
          "tekst": "PLC-besturing en embedded software"
        }
      ]
    },

    // [PAGINA] /nieuws/plc-veilig-op-afstand-benaderen/  (nieuws-8)
    {
      "id": "nieuws-8",
      "seo": {
        "adres": "plc-veilig-op-afstand-benaderen",
        "titel": "PLC veilig op afstand benaderen | Allico Systems",
        "omschrijving": "Zo benader je een PLC veilig op afstand: VPN, tweestapsverificatie, rechten per rol en logging, met de eisen uit IEC 62443-3-3 en de Machineverordening.",
        "gepubliceerd": "2026-11-26",
        "gewijzigd": "2026-11-26"
      },
      "datum": "November 2026",
      "titel": "PLC veilig op afstand: VPN, tweestapsverificatie en IEC 62443",
      "kop": "PLC op afstand benaderen zonder risico: VPN, tweestapsverificatie en IEC 62443",
      "samenvatting": "Welke bouwstenen een veilige toegang op afstand tot een PLC nodig heeft, wat IEC 62443-3-3 vraagt en waarom bedienen strengere regels vraagt dan meekijken.",
      "tekst": [
        "Een PLC op afstand benaderen kan veilig, als de besturing niet direct aan het openbare internet hangt. Het NCSC adviseert toegang voor gebruikers alleen mogelijk te maken met meerfactorauthenticatie en een versleutelde verbinding. Persoonlijke accounts, rechten per rol, logging en netwerksegmentatie maken de opzet compleet.",
        {
          "kop": "Waarom is toegang op afstand tot een PLC een risico?"
        },
        "Elke verbinding van buiten is een mogelijke ingang voor een aanvaller. Het NCSC schrijft dat bij het koppelen van OT aan internet, bijvoorbeeld voor beheer op afstand, niet altijd de juiste beveiligingsmaatregelen worden genomen. Bovendien bestuurt OT fysieke processen. Een fout of aanval raakt dan de machine zelf.",
        "De Amerikaanse overheidsdienst CISA noemt OT-apparaten aan het internet makkelijke doelwitten. Ze zijn met zoekmachines voor open poorten snel te vinden. Volgens recente analyses van CISA gebruiken aangevallen systemen standaardwachtwoorden of wachtwoorden die makkelijk te raden zijn.",
        {
          "kop": "Wat zijn de bouwstenen van een veilige opzet?"
        },
        "Een veilige opzet bestaat uit lagen die elkaar aanvullen. De lijst hieronder is gebaseerd op de aanbevelingen van het NCSC en CISA en op IEC 62443-3-3.",
        {
          "punten": [
            "Een versleutelde VPN-verbinding, zodat de PLC niet open op het internet staat.",
            "Persoonlijke accounts, geen gedeelde inlog voor operators of monteurs.",
            "Tweestapsverificatie voor iedere gebruiker die van buiten inlogt.",
            "Rechten per rol: iedereen ziet en doet alleen wat bij zijn taak hoort.",
            "Toegang alleen op aanvraag en voor beperkte tijd, bijvoorbeeld na akkoord van de eigenaar van de installatie.",
            "Logging van wie wanneer inlogde en wat er gebeurde, met regelmatige controle.",
            "Netwerksegmentatie, zodat de verbinding alleen uitkomt bij het deel van het netwerk dat nodig is.",
            "Updates van besturing, router en software, eerst getest en daarna doorgevoerd."
          ]
        },
        "Een VPN is dus één laag. Zonder de andere lagen krijgt wie eenmaal binnen is vaak toegang tot alles.",
        {
          "kop": "Wat vraagt IEC 62443-3-3 voor toegang op afstand?"
        },
        "IEC 62443-3-3 beschrijft beveiligingseisen voor het besturingssysteem als geheel, ingedeeld in security levels 1 tot en met 4. De eisen gaan over wat het systeem moet kunnen. Voor toegang op afstand zijn vooral deze system requirements van belang:",
        {
          "punten": [
            "SR 1.1, Human user identification and authentication: het systeem kan elke menselijke gebruiker identificeren en authenticeren. Vanaf SL 3 vraagt een uitbreiding meerfactorauthenticatie bij toegang via onvertrouwde netwerken.",
            "SR 1.13, Access via untrusted networks: het systeem kan alle toegang via onvertrouwde netwerken bewaken en beheersen. Vanaf SL 2 vraagt een uitbreiding dat zo'n verzoek pas doorgaat na akkoord van een aangewezen rol.",
            "SR 2.1, Authorization enforcement: het systeem kan de rechten die aan gebruikers zijn toegekend op alle ingangen afdwingen.",
            "SR 2.6, Remote session termination: het systeem kan een sessie op afstand beëindigen na een instelbare tijd zonder activiteit, of handmatig. Deze eis geldt vanaf SL 2.",
            "SR 2.8, Auditable events: het systeem kan beveiligingsrelevante gebeurtenissen vastleggen, zoals die rond toegangscontrole.",
            "SR 5.1, Network segmentation: het systeem kan het besturingsnetwerk logisch scheiden van andere netwerken."
          ]
        },
        "Welke eisen gelden, hangt volgens de norm af van het beleid en de risicoanalyse van de eigenaar van de installatie. De norm noemt VPN-techniek zelf als voorbeeld van bescherming tegen ongeautoriseerde verbindingen.",
        {
          "kop": "Wat is het verschil tussen meekijken en bedienen op afstand?"
        },
        "Bedienen op afstand vraagt strengere maatregelen dan meekijken. Wie alleen standen, alarmen en trends leest, verandert niets aan het proces. Wie een instelling wijzigt, een programma laadt of iets start, grijpt in op een machine waar misschien iemand bij staat.",
        "Bijlage III van de Machineverordening (EU) 2023/1230 bevat eisen over bedieningsorganen die hierbij passen (punt 1.2.2). De bediener moet zich vanaf iedere bedieningspost kunnen vergewissen dat er niemand in de gevarenzone is. Anders moet het besturingssysteem het inschakelen verhinderen zolang er iemand in de gevarenzone is.",
        "Kan geen van beide, dan moet vóór het inschakelen een geluids- of lichtsignaal worden gegeven. Zo nodig moet de machine alleen vanaf bedieningsposten in vooraf bepaalde zones of plaatsen te bedienen zijn.",
        "Een bruikbaar uitgangspunt is daarom: geef bedienrechten op afstand alleen aan wie ze nodig heeft. Laat ook op afstand niemand iets starten dat een persoon bij de machine in gevaar kan brengen.",
        {
          "kop": "Wat voegen de Cyberbeveiligingswet en de Machineverordening toe?"
        },
        "De Cyberbeveiligingswet (Cbw) is volgens het NCSC op 15 augustus 2026 in werking getreden. Organisaties die eronder vallen, maken een risicoanalyse en nemen passende maatregelen. De onderliggende NIS2-richtlijn noemt in artikel 21 onder meer toegangsbeleid, de beveiliging van de toeleveringsketen en, waar gepast, meerfactorauthenticatie.",
        "Het NCSC wijst erop dat de eigenaar van OT-systemen verantwoordelijk blijft, ook als een leverancier het beheer doet. Het NCSC adviseert daarom te controleren of de leverancier die onderhoud of beheer doet minimale veiligheidseisen naleeft.",
        "De Machineverordening is van toepassing vanaf 20 januari 2027; die datum staat in de rectificatie van juli 2023. Bijlage III eist onder meer dat besturingssystemen bestand zijn tegen redelijkerwijs voorzienbare kwaadwillige pogingen van derden die tot een gevaarlijke situatie leiden (punt 1.2.1). Punt 1.1.9 gaat over de verbinding met een ander apparaat, ook via een apparaat op afstand. Die verbinding mag niet tot een gevaarlijke situatie leiden.",
        {
          "kop": "Wat kun je nu al regelen?"
        },
        "Begin met een overzicht van welke installaties op afstand bereikbaar zijn, via welke weg en door wie. Het NCSC raadt aan alle externe toegang die niet nodig is standaard uit te schakelen. Daarna kun je stap voor stap verder:",
        {
          "punten": [
            "Haal PLC's en bedienpanelen van het openbare internet, zoals CISA aanraadt.",
            "Vervang standaardwachtwoorden en gedeelde accounts door persoonlijke accounts.",
            "Zet tweestapsverificatie aan op elke toegang van buiten.",
            "Leg vast wie op afstand mag meekijken en wie mag bedienen.",
            "Bewaar de logboeken van toegang op afstand en kijk ze regelmatig na.",
            "Spreek met leveranciers af hoe zij inloggen en aan welke beveiligingseisen ze voldoen."
          ]
        },
        {
          "kop": "Hoe Allico Systems hierbij helpt"
        },
        "Allico Systems ontwikkelt besturing waarin beveiliging vanaf het ontwerp is meegenomen, met de documentatie die je nodig hebt voor een audit of leveranciersvragenlijst. We bepalen het benodigde beveiligingsprofiel van een systeem, richten VPN-verbindingen en versleutelde communicatie in en gebruiken tweestapsverificatie. Voor Kemkens Brandbeveiliging werkt Allico aan een beveiligde verbinding om brandbeveiligingsinstallaties op afstand te testen en te beheren, opgebouwd vanuit IEC 62443. Voor zware trajecten werkt Allico samen met een vaste partner.",
        "Bronnen: NCSC, Aan de slag met het beveiligen van OT/IACS; NCSC, Cyberbeveiligingswet (NIS2); CISA, FBI, EPA en DOE, Primary Mitigations to Reduce Cyber Threats to Operational Technology (mei 2025); IEC 62443-3-3:2013; Verordening (EU) 2023/1230, artikel 54 en bijlage III, en de rectificatie daarvan; Richtlijn (EU) 2022/2555, artikel 21. Stand: november 2026.",
        "Dit artikel geeft algemene informatie en is geen juridisch advies."
      ],
      "vragen": [
        {
          "vraag": "Is een VPN genoeg om een PLC veilig op afstand te benaderen?",
          "antwoord": "Nee. Een VPN versleutelt de verbinding, maar regelt niet wie wat mag. Het NCSC noemt daarnaast meerfactorauthenticatie, beperkte rechten en logging van toegang op afstand."
        },
        {
          "vraag": "Wat zegt CISA over een PLC die direct aan het internet hangt?",
          "antwoord": "CISA raadt aan OT-verbindingen met het openbare internet weg te halen. Is toegang op afstand nodig, dan adviseert CISA een VPN met een sterk wachtwoord en phishingbestendige meerfactorauthenticatie."
        },
        {
          "vraag": "Welke eisen uit IEC 62443-3-3 gaan over toegang op afstand?",
          "antwoord": "Vooral SR 1.13 (Access via untrusted networks) en SR 2.6 (Remote session termination). Ook identificatie (SR 1.1), autorisatie (SR 2.1), het vastleggen van gebeurtenissen (SR 2.8) en segmentatie (SR 5.1) spelen mee."
        },
        {
          "vraag": "Vanaf wanneer geldt de Machineverordening?",
          "antwoord": "Verordening (EU) 2023/1230 is van toepassing vanaf 20 januari 2027. Bijlage III bevat eisen over bescherming tegen corruptie en over de veiligheid van besturingssystemen."
        }
      ],
      "verwant": [
        {
          "pagina": "spec-4",
          "tekst": "Cybersecurity en OT-beveiliging volgens IEC 62443"
        },
        {
          "pagina": "project-1",
          "tekst": "Sprinklerinstallaties op afstand testen voor Kemkens"
        },
        {
          "pagina": "nieuws-5",
          "tekst": "NIS2 voor OT en PLC"
        },
        {
          "pagina": "nieuws-6",
          "tekst": "Machineverordening 2027 en cybersecurity"
        }
      ]
    },

    // [PAGINA] /nieuws/cyber-resilience-act-machinebouwers/  (nieuws-7)
    {
      "id": "nieuws-7",
      "seo": {
        "adres": "cyber-resilience-act-machinebouwers",
        "titel": "Cyber Resilience Act voor machinebouwers | Allico Systems",
        "omschrijving": "De Cyber Resilience Act (CRA) raakt PLC-besturing, firmware en eigen elektronica. Meldplicht sinds 11 september 2026, eisen en CE vanaf 11 december 2027.",
        "gepubliceerd": "2026-11-26",
        "gewijzigd": "2026-11-26"
      },
      "datum": "November 2026",
      "titel": "Cyber Resilience Act (CRA) voor machinebouwers",
      "kop": "Cyber Resilience Act (CRA) voor machinebouwers: PLC, besturing en eigen elektronica",
      "samenvatting": "De Cyber Resilience Act stelt cybereisen aan hardware en software met een gegevensverbinding, ook in machines. De meldplicht geldt al, de producteisen en CE-markering volgen op 11 december 2027.",
      "tekst": [
        "De Cyber Resilience Act (CRA, Verordening (EU) 2024/2847) stelt cybereisen aan hardware en software die een gegevensverbinding met een apparaat of netwerk hebben. Ook machines, besturingen en eigen elektronica kunnen daaronder vallen. De meeste plichten liggen bij de fabrikant van het product met digitale elementen. De meldplicht geldt sinds 11 september 2026, de producteisen en CE-markering vanaf 11 december 2027.",
        {
          "kop": "Wat is een product met digitale elementen?"
        },
        "Artikel 3, punt 1, noemt het ‘een software- of hardwareproduct en zijn oplossingen voor gegevensverwerking op afstand’. Componenten die apart in de handel komen, horen daar ook bij. De verordening geldt als het beoogde of redelijkerwijs voorzienbare gebruik een gegevensverbinding met een apparaat of netwerk omvat. Die verbinding mag direct of indirect zijn (artikel 2, lid 1).",
        "Volgens de richtsnoeren van de Europese Commissie is alleen een uitgang aan- en uitschakelen nog geen gegevensverbinding. Dat geldt als die toestanden geen gegevens moeten voorstellen of niet door een digitale ingang worden gelezen. Een samengesteld systeem dat als één product in de handel komt, is volgens dezelfde richtsnoeren één product met digitale elementen. De Commissie gebruikt zelf voorbeelden als een industrieel automatiseringssysteem met een PLC en een industriële machine met een cloudkoppeling.",
        "Software die nodig is om een product te bedienen of configureren, hoort volgens de Commissie bij dat product. De CRA sluit onder meer medische hulpmiddelen, motorvoertuigen en gecertificeerde luchtvaartproducten uit (artikel 2). Machines staan niet in die lijst.",
        {
          "kop": "Wie is de fabrikant onder de CRA?"
        },
        "De fabrikant ontwikkelt of vervaardigt producten met digitale elementen, of laat dat doen. Hij brengt ze ‘onder zijn naam of merk’ in de handel (artikel 3, punt 13). Wie een product na het in de handel brengen ingrijpend wijzigt en op de markt aanbiedt, wordt ook als fabrikant gezien (artikel 22).",
        "Volgens de richtsnoeren is wie componenten samenvoegt tot een nieuw product onder eigen naam, de fabrikant van dat geheel. Die fabrikant moet voor het hele product aan de CRA voldoen. Hij mag daarbij steunen op wat de fabrikanten van de componenten al hebben gedaan.",
        {
          "kop": "Welke data gelden?"
        },
        "De CRA is op 10 december 2024 in werking getreden. Sinds 11 september 2026 geldt de meldplicht uit artikel 14. Vanaf 11 december 2027 geldt de rest van de verordening (artikel 71).",
        "De meldplicht geldt ook voor producten die al eerder in de handel zijn gebracht (artikel 69, lid 3). De overige eisen gelden voor zulke oudere producten alleen als ze vanaf 11 december 2027 ingrijpend worden gewijzigd (artikel 69, lid 2).",
        {
          "kop": "Wat moet de fabrikant doen?"
        },
        "De fabrikant zorgt dat het product is ontworpen, ontwikkeld en geproduceerd volgens de essentiële cyberbeveiligingsvereisten van bijlage I. Daarna volgen de conformiteitsbeoordeling, de EU-conformiteitsverklaring en de CE-markering (artikel 13). In gewone woorden gaat het om:",
        {
          "punten": [
            "Een gedocumenteerde beoordeling van de cyberbeveiligingsrisico's, die in de technische documentatie komt en tijdens de ondersteuningsperiode wordt bijgewerkt.",
            "Producteisen uit bijlage I, deel I, op basis van die risico's. Bijvoorbeeld geen bekende uitbuitbare kwetsbaarheden, een standaard beveiligde configuratie, beveiligingsupdates, bescherming tegen ongeoorloofde toegang en tegen manipulatie van programma's en configuraties.",
            "Een softwarestuklijst (SBOM) in een algemeen gebruikt, machineleesbaar formaat, met ten minste de afhankelijkheden op het hoogste niveau (bijlage I, deel II, punt 1).",
            "Een proces voor kwetsbaarheden: onverwijld verhelpen, beveiligingsupdates verspreiden, een beleid voor gecoördineerde openbaarmaking en een contactadres voor meldingen.",
            "Een ondersteuningsperiode die de verwachte gebruiksduur weerspiegelt. Die is ten minste vijf jaar, tenzij het product korter in gebruik zal zijn (artikel 13, lid 8).",
            "Zorgvuldigheid bij het inbouwen van componenten van derden, ook opensourcesoftware (artikel 13, lid 5)."
          ]
        },
        {
          "kop": "Wat moet je melden, en bij wie?"
        },
        "De fabrikant meldt elke actief uitgebuite kwetsbaarheid in zijn product en elk ernstig incident dat de beveiliging van het product raakt (artikel 14). De wet noemt het CSIRT van de lidstaat van de hoofdvestiging en ENISA, via een centraal meldplatform. Voor een fabrikant met zijn hoofdvestiging in Nederland is dat het NCSC. Melden kan via MijnNCSC of het meldformulier.",
        "De termijnen lopen vanaf het moment dat de fabrikant ervan weet. Binnen 24 uur volgt een vroegtijdige waarschuwing, binnen 72 uur een melding. Het eindverslag volgt bij een kwetsbaarheid uiterlijk 14 dagen nadat een oplossing beschikbaar is, bij een incident binnen een maand na de melding. Ook de getroffen gebruikers moeten worden geïnformeerd (artikel 14, lid 8).",
        "Volgens het NCSC hoeft een kwetsbaarheid die je zelf vindt en die nog niet aantoonbaar is misbruikt, niet te worden gemeld.",
        {
          "kop": "Hoe verhoudt de CRA zich tot de Machineverordening?"
        },
        "Is een machine ook een product met digitale elementen, dan moet de fabrikant aan beide verordeningen voldoen. Dat staat in overweging 53 van de CRA. Volgens die overweging kan naleving van de CRA helpen bij bijlage III, punten 1.1.9 en 1.2.1, van de Machineverordening.",
        "Of een concrete machine eronder valt, moet per product worden nagegaan.",
        {
          "kop": "Wat betekent het als je een PLC koopt of zelf elektronica ontwikkelt?"
        },
        "De fabrikant van een ingekochte PLC is fabrikant van die PLC. Brengt een machinebouwer de machine met die PLC als eigen product in de handel, dan is hij volgens de richtsnoeren fabrikant van het geheel.",
        "Een identieke vervangende PLC die als reserveonderdeel wordt geleverd, valt volgens de richtsnoeren onder de uitzondering voor reserveonderdelen (artikel 2, lid 6).",
        "Wie eigen printplaten, firmware of software ontwikkelt en onder eigen naam in de handel brengt, is daarvan de fabrikant. De Commissie geeft het voorbeeld van een bedrijf dat ingekochte microcontrollermodules combineert met eigen firmware en sensoren. Brengt het dat onder eigen naam in de handel, dan is het fabrikant van het geheel.",
        {
          "kop": "Wat kun je nu al doen?"
        },
        "Deze stappen volgen uit de tekst van de CRA:",
        {
          "punten": [
            "Maak een overzicht van je producten op de EU-markt met een gegevensverbinding. De meldplicht geldt ook voor oudere producten.",
            "Leg vast wie meldingen van kwetsbaarheden ontvangt, en hoe binnen 24 uur een vroegtijdige waarschuwing wordt verstuurd.",
            "Stel voor je firmware en software een softwarestuklijst op.",
            "Vraag leveranciers van PLC's, modules en softwarebibliotheken naar hun ondersteuningsperiode en beveiligingsupdates.",
            "Bepaal de ondersteuningsperiode van je eigen product en hoe updates veilig bij de gebruiker komen.",
            "Neem de cyberrisico's mee in het ontwerp en in de risicobeoordeling die je voor de Machineverordening al maakt."
          ]
        },
        {
          "kop": "Hoe Allico Systems hierbij helpt"
        },
        "Allico Systems uit Horst ontwikkelt hardware, firmware en software in eigen beheer, en doet PLC-programmering met PLCnext van Phoenix Contact. Wij ontwikkelen besturing waarin beveiliging vanaf het ontwerp is meegenomen, met de documentatie die je nodig hebt voor een audit of leveranciersvragenlijst. Wij bepalen het benodigde beveiligingsprofiel van een systeem, richten VPN-verbindingen en versleutelde communicatie in en gebruiken tweestapsverificatie. Voor zware trajecten werken wij samen met een vaste partner.",
        "Bronnen: Verordening (EU) 2024/2847 (Cyber Resilience Act), artikelen 2, 3, 13, 14, 22, 69 en 71, overweging 53 en bijlage I (EUR-Lex); Europese Commissie, pagina Cyber Resilience Act en richtsnoeren C/2026/6013 (Publicatieblad C van 17 november 2026); NCSC, nieuwsbericht van 11 september 2026 over de CRA-meldplicht; RDI, pagina Cyber Resilience Act; Verordening (EU) 2023/1230. Stand: november 2026.",
        "Dit artikel geeft algemene informatie en is geen juridisch advies."
      ],
      "vragen": [
        {
          "vraag": "Wanneer geldt de Cyber Resilience Act?",
          "antwoord": "De CRA is op 10 december 2024 in werking getreden. De meldplicht geldt sinds 11 september 2026 en de overige verplichtingen, zoals de producteisen en de CE-markering, gelden vanaf 11 december 2027."
        },
        {
          "vraag": "Wat is een SBOM onder de CRA?",
          "antwoord": "Een SBOM is een softwarestuklijst. Artikel 3, punt 39, noemt dat ‘een formeel document met gegevens en relaties in de toeleveringsketen van componenten die zijn opgenomen in de software-elementen van een product met digitale elementen’. Bijlage I vraagt een SBOM in een machineleesbaar formaat met ten minste de afhankelijkheden op het hoogste niveau."
        },
        {
          "vraag": "Waar meld je een actief misbruikte kwetsbaarheid onder de CRA?",
          "antwoord": "Een fabrikant met zijn hoofdvestiging in Nederland meldt bij het NCSC, via MijnNCSC of het CRA-meldformulier. Binnen 24 uur volgt een vroegtijdige waarschuwing en binnen 72 uur een melding."
        },
        {
          "vraag": "Valt een machine onder de Cyber Resilience Act?",
          "antwoord": "Dat kan, als de machine een product met digitale elementen is met een gegevensverbinding met een apparaat of netwerk. Volgens overweging 53 van de CRA moet de fabrikant dan aan de CRA en aan de Machineverordening voldoen. Dit moet per product worden nagegaan."
        },
        {
          "vraag": "Hoe lang moet een fabrikant beveiligingsupdates leveren?",
          "antwoord": "Gedurende de ondersteuningsperiode, die de verwachte gebruiksduur weerspiegelt en ten minste vijf jaar is, tenzij het product korter in gebruik zal zijn. Een uitgebrachte beveiligingsupdate blijft ten minste tien jaar beschikbaar, of langer als de ondersteuningsperiode langer is (artikel 13, leden 8 en 9)."
        }
      ],
      "verwant": [
        {
          "pagina": "spec-1",
          "tekst": "Elektronica-ontwikkeling en printplaatontwerp"
        },
        {
          "pagina": "spec-2",
          "tekst": "PLC-besturing en embedded software"
        },
        {
          "pagina": "nieuws-6",
          "tekst": "Machineverordening 2027 en cybersecurity"
        },
        {
          "pagina": "spec-4",
          "tekst": "Cybersecurity en OT-beveiliging"
        }
      ]
    },

    // [PAGINA] /nieuws/wat-is-plcnext/  (nieuws-4)
    {
      "id": "nieuws-4",
      "seo": {
        "adres": "wat-is-plcnext",
        "titel": "Wat is PLCnext van Phoenix Contact? | Allico Systems",
        "omschrijving": "PLCnext van Phoenix Contact uitgelegd: realtime Linux, IEC 61131-3 plus C++ en Python, dashboard op de besturing en wat IEC 62443 betekent.",
        "gepubliceerd": "2026-11-26",
        "gewijzigd": "2026-11-26"
      },
      "datum": "November 2026",
      "titel": "Wat is PLCnext? Het open PLC-platform van Phoenix Contact",
      "kop": "PLCnext van Phoenix Contact: wat het is en wanneer je het kiest",
      "samenvatting": "Wat PLCnext van Phoenix Contact is, hoe je het programmeert en wat de IEC 62443-certificering wel en niet betekent. Met een eerlijke afweging wanneer het past.",
      "tekst": [
        "PLCnext is het open PLC-platform van Phoenix Contact. Volgens de fabrikant draaien de besturingen op realtime Linux. Je programmeert ze volgens IEC 61131-3, aangevuld met talen als C++, C# en Python. Het platform bestaat uit besturingen, programmeersoftware, een appwinkel en een community.",
        {
          "kop": "Wat is PLCnext in het kort?"
        },
        "PLCnext Technology is meer dan een losse PLC. Phoenix Contact deelt het in vier onderdelen in:",
        {
          "punten": [
            "PLCnext Control: de besturingen zelf.",
            "PLCnext Engineer: de software voor configuratie, programmeren volgens IEC 61131-3, visualisatie en diagnose.",
            "PLCnext Store: apps, softwaremodules en runtime-systemen die je aan de besturing toevoegt.",
            "PLCnext Community: een website met forum, tutorials, e-learnings en webinars."
          ]
        },
        {
          "kop": "Wat is anders dan bij een klassieke PLC?"
        },
        "Het verschil zit vooral in de openheid van het systeem. De kant van de klassieke PLC hieronder is een algemene typering: die verschilt per merk en per type.",
        {
          "punten": [
            "Klassieke PLC: eigen firmware van de fabrikant. PLCnext: volgens Phoenix Contact een realtime Linux (Yocto) waarop ook eigen software en containers draaien.",
            "Klassieke PLC: programmeren in de talen van IEC 61131-3. PLCnext: IEC 61131-3 plus hogere talen, die volgens Phoenix Contact samen in één taak kunnen lopen.",
            "Klassieke PLC: uitbreiden met bibliotheken van de fabrikant. PLCnext: ook apps uit de PLCnext Store en open source software in containers, zoals Node-RED.",
            "Klassieke PLC: bediening vaak via een apart paneel of een SCADA-pc. PLCnext: volgens Phoenix Contact een webserver op de besturing en een visualisatie die je in de browser opent.",
            "Klassieke PLC: koppeling met IT en cloud vaak via extra apparatuur. PLCnext: volgens Phoenix Contact een OPC UA-server op de besturing en koppeling met Proficloud of een andere cloud."
          ]
        },
        {
          "kop": "Hoe programmeer je een PLCnext-besturing?"
        },
        "Je programmeert in PLCnext Engineer, volgens IEC 61131-3. Volgens Phoenix Contact is de basisversie gratis te downloaden. De functies kun je uitbreiden met betaalde add-ins. Als voorbeelden van add-ins noemt de fabrikant een editor voor veiligheidstoepassingen en een HMI-generator.",
        "De productpagina van de AXC F 2152 noemt als talen SFC, LD, FBD en ST, plus C++, C#, Java, Python en Simulink.",
        "Volgens Phoenix Contact kan de taakafhandeling IEC-code, hogere talen en Simulink-modellen in één taak combineren. Programma's in een hogere taal lopen dan net zo deterministisch als klassieke PLC-code. Realtime noemt de fabrikant uitdrukkelijk voor IEC 61131-3, C/C++, C# en MATLAB Simulink.",
        "C++ en C# ontwikkel je met de PLCnext Technology Toolchain, met een add-in voor Eclipse of een extensie voor Visual Studio. Werk je al met CODESYS, dan kun je dat volgens Phoenix Contact koppelen via de Global Data Space van de besturing.",
        {
          "kop": "Kan het bedieningsscherm op de besturing zelf draaien?"
        },
        "Ja. PLCnext Engineer bevat volgens Phoenix Contact een webgebaseerde visualisatie op basis van HTML5 en JavaScript, met een eigen editor. De besturing heeft een eigen webserver. Je maakt het bedieningsscherm dus in dezelfde software als het PLC-programma. De operator opent het in een browser, bijvoorbeeld op een paneel, laptop of tablet.",
        "Voor uitgebreidere dashboards kun je ook software in een container op de besturing zetten. Volgens Phoenix Contact zit de container-engine Podman daarvoor sinds firmware 2023.0 in het besturingssysteem.",
        {
          "kop": "Welke koppelingen ondersteunt PLCnext?"
        },
        "PLCnext spreekt de gangbare industriële protocollen, maar niet alles zit standaard in de besturing. Volgens de productpagina is de AXC F 2152 zowel Profinet-controller als Profinet-device. Verder noemt Phoenix Contact onder meer:",
        {
          "punten": [
            "OPC UA: een server op de besturing; voor de OPC UA-client is een licentie nodig.",
            "MQTT: via een bijbehorende app.",
            "Modbus TCP en Modbus RTU: via een bijbehorende bibliotheek.",
            "EtherNet/IP als adapter, en CANopen, DNP3 en IEC 60870-5-104 via bibliotheken.",
            "IPsec voor beveiligde verbindingen en SFTP voor bestandsoverdracht."
          ]
        },
        {
          "kop": "Wat betekent de IEC 62443-certificering van PLCnext?"
        },
        "Ze zegt iets over de fabrikant en het product, niet over jouw installatie. Volgens Phoenix Contact is PLCnext Control door TÜV gecertificeerd volgens IEC 62443-4-1 (ML 3) en IEC 62443-4-2. Deel 4-1 gaat over het ontwikkelproces van de fabrikant, deel 4-2 over het product zelf. Bij deel 4-2 noemt Phoenix Contact security level 2.",
        "Phoenix Contact schrijft er zelf bij dat het om geselecteerde besturingen gaat. Bij de AXC F 1152, 2152 en 3152 staan in de catalogus het ontwikkelproces en het product als gecertificeerd. Voor de certificeringsvoorwaarden verwijst de fabrikant naar de gebruikersdocumentatie. Bij de AXC F 1252 staat alleen het ontwikkelproces als gecertificeerd.",
        "Een gecertificeerde besturing maakt een installatie dus niet vanzelf veilig. Daarvoor is ook werk in ontwerp en beheer nodig: beveiligingsfuncties aanzetten, het netwerk in zones verdelen, accounts en rechten inrichten en updates bijhouden. Voor het systeem als geheel beschrijft IEC 62443-3-3 de eisen, per security level.",
        "Daarnaast bereidt Phoenix Contact de AXC F 2152 voor op de Cyber Resilience Act. Het doel is volgens de fabrikant dat hij vanaf 11 december 2027 aan de eisen voldoet. Phoenix Contact gaat daarbij uit van wat er nu over die wet bekend is.",
        {
          "kop": "Welke PLCnext-besturingen zijn er?"
        },
        "Phoenix Contact beschrijft een reeks van modulaire besturingen voor basistoepassingen tot krachtige besturingen en pc-gebaseerde apparaten voor edge-toepassingen. In de Nederlandse catalogus staan onder meer:",
        {
          "punten": [
            "De AXC F-reeks, waaronder de AXC F 1152, 1252, 2152, 2000 EA en 3152. De AXC F 2152 is volgens Phoenix Contact gemaakt voor het Axioline-I/O-systeem.",
            "De RFC 4072R, met Profinet S2-systeemredundantie.",
            "Veiligheidsbesturingen zoals de RFC 4072S en de BPC 9102S. Volgens Phoenix Contact voldoen de veiligheidsbesturingen van PLCnext Control aan SIL 3 en PL e, getest door TÜV Rheinland.",
            "De virtuele besturingen VPLCNEXT CONTROL 1000, 2000 en 3000, geleverd als OCI-conforme container.",
            "De VL3 UPC 2440 EDGE, een edge-apparaat met Virtual PLCnext Control."
          ]
        },
        "Welk type past, hangt af van het aantal in- en uitgangen, de cyclustijd, het aantal Profinet-apparaten en de benodigde rekenkracht. Vergelijk daarvoor de datasheets.",
        {
          "kop": "Wanneer past PLCnext, en wanneer is iets anders logischer?"
        },
        "PLCnext past goed als je besturing, data en bediening in één apparaat wilt samenbrengen. Denk aan een installatie die je op afstand wilt bekijken, met een dashboard op de besturing en een koppeling naar een server of cloud. Ook wie software in C++ of uit open source wil hergebruiken, heeft baat bij de open opzet.",
        "Een andere keuze is vaak logischer als je bedrijf al één standaard voor besturingen heeft. Monteurs, reserveonderdelen en bestaande programma's zijn dan op die standaard afgestemd. Hetzelfde geldt als je klant een platform voorschrijft, of als de kennis in je team bij een ander systeem ligt.",
        {
          "kop": "Hoe Allico Systems hierbij helpt"
        },
        "Allico Systems uit Horst doet PLC-programmering en procesbesturing en werkt met PLCnext van Phoenix Contact. Het team heeft de Workshop PLCnext Engineer bij Phoenix Contact gevolgd en past de techniek toe in meerdere projecten. Voorbeelden zijn installaties die beveiligd op afstand toegankelijk zijn, met een dashboard direct vanaf de PLC. Beveiliging nemen we vanaf het ontwerp mee, met de documentatie die je nodig hebt voor een audit of leveranciersvragenlijst.",
        "Bronnen: Phoenix Contact, PLCnext Technology (productoverzicht en catalogus, nl-nl); Phoenix Contact, productpagina besturing AXC F 2152 (2404267); Phoenix Contact, PLC-programmering en productpagina PLCnext Engineer (1046008); Phoenix Contact, IEC 62443-norm voor industriële cybersecurity; IEC 62443-3-3:2013. Stand: november 2026. PLCnext en Phoenix Contact zijn merken van Phoenix Contact GmbH & Co. KG."
      ],
      "vragen": [
        {
          "vraag": "Is PLCnext Engineer gratis?",
          "antwoord": "Volgens Phoenix Contact is de basisversie van PLCnext Engineer gratis te downloaden. De functies kun je uitbreiden met betaalde add-ins."
        },
        {
          "vraag": "Kun je PLCnext in Python of C++ programmeren?",
          "antwoord": "Ja, naast de talen van IEC 61131-3. Phoenix Contact noemt bij onder meer de AXC F 2152 C++, C#, Java, Python en Simulink als ondersteunde talen."
        },
        {
          "vraag": "Is mijn installatie veilig als de PLCnext-besturing volgens IEC 62443 gecertificeerd is?",
          "antwoord": "Niet vanzelf. De certificering volgens IEC 62443-4-1 en 4-2 gaat over het ontwikkelproces van de fabrikant en het product. Hoe veilig de installatie is, hangt af van configuratie, netwerkindeling, accounts en onderhoud."
        },
        {
          "vraag": "Werkt PLCnext met Profinet en OPC UA?",
          "antwoord": "Ja. Volgens Phoenix Contact is de AXC F 2152 Profinet-controller en Profinet-device. Hij heeft een OPC UA-server; voor de OPC UA-client is een licentie nodig."
        },
        {
          "vraag": "Kan een dashboard op de PLCnext-besturing zelf draaien?",
          "antwoord": "Ja. PLCnext Engineer bevat volgens Phoenix Contact een webgebaseerde visualisatie op basis van HTML5, en de besturing heeft een webserver. Je opent het scherm in een browser."
        }
      ],
      "verwant": [
        {
          "pagina": "spec-2",
          "tekst": "PLC-besturing en embedded software laten ontwikkelen"
        },
        {
          "pagina": "spec-3",
          "tekst": "Dashboards voor machines en installaties"
        },
        {
          "pagina": "spec-4",
          "tekst": "Cybersecurity en OT-beveiliging volgens IEC 62443"
        },
        {
          "pagina": "nieuws-8",
          "tekst": "Een PLC veilig op afstand benaderen"
        }
      ]
    },

    // [PAGINA] /nieuws/cyberbeveiligingswet-nis2/  (nieuws-3)
    {
      "id": "nieuws-3",
      "seo": {
        "adres": "cyberbeveiligingswet-nis2",
        "titel": "Cyberbeveiligingswet (NIS2): gevolgen voor leveranciers | Allico Systems",
        "omschrijving": "Welke eisen stelt de Cyberbeveiligingswet (NIS2) aan leveranciers? Uitleg over zorgplicht, meldplicht en de NIS2-vragenlijst van je klant.",
        "gewijzigd": "2026-11-26"
      },
      "datum": "Augustus 2026",
      "bijgewerkt": "november 2026",
      "titel": "Nieuwe cybersecuritywetgeving: wat NIS2 betekent",
      "kop": "Je klant stuurt een NIS2-vragenlijst: welke eisen stelt de Cyberbeveiligingswet aan een toeleverancier?",
      "foto": "nis2-europese-commissie.jpg",
      "fotoAlt": "Europese vlaggen voor het gebouw van de Europese Commissie in Brussel",
      "fotoBron": "Foto: Carl Gruner via Unsplash",
      "samenvatting": "Sinds 15 augustus 2026 geldt de Cyberbeveiligingswet, de Nederlandse uitwerking van de Europese NIS2-richtlijn. Volgens het NCSC vallen er ruim 8.000 organisaties onder, en via de keten kunnen ook hun toeleveranciers met eisen te maken krijgen.",
      "tekst": [
        "Als toeleverancier krijg je van de Cyberbeveiligingswet geen eigen wettelijke plichten, tenzij je bedrijf zelf onder de wet valt. De wet verplicht wel de organisaties die eronder vallen om hun toeleveringsketen te beveiligen. Daarom stellen zij eisen aan jou. Die eisen komen bij jou binnen als NIS2-vragenlijst, contractafspraak of audit.",
        {
          "kop": "Wat regelt de Cyberbeveiligingswet?"
        },
        "De Cyberbeveiligingswet (Cbw) is op 15 augustus 2026 in werking getreden. Dat is de ingangsdatum van de NIS2-regels in Nederland. Het is de Nederlandse uitwerking van de Europese NIS2-richtlijn. De wet vervangt de Wet beveiliging netwerk- en informatiesystemen (artikel 106). Volgens het NCSC stelt de Cyberbeveiligingswet (NIS2) eisen aan ruim 8.000 organisaties die essentiële of belangrijke diensten verlenen.",
        "Voor die organisaties gelden een zorgplicht (artikel 21), een meldplicht voor significante incidenten (artikelen 25 tot en met 29) en een registratieplicht (artikel 44). Het bestuur keurt de maatregelen goed, en elk bestuurslid moet risico's kunnen herkennen en maatregelen kunnen beoordelen (artikel 24). Cybersecurity is daarmee ook een taak van het bestuur, niet alleen van de IT-afdeling.",
        {
          "kop": "Val je als toeleverancier zelf onder de wet?"
        },
        "Alleen als je bedrijf zelf in een sector uit de wet valt en groot genoeg is. De sectoren staan in bijlage 1 en 2 van de wet. In de regel geldt de wet daar voor bedrijven die minstens middelgroot zijn volgens de Europese mkb-definitie.",
        "Let op als je machines bouwt: bijlage 2 noemt de vervaardiging van machines, elektrische apparatuur en elektronische producten. Bijlage 1 noemt ook aanbieders van beheerde diensten. Volgens artikel 1 zijn dat bedrijven die netwerk- en informatiesystemen van een klant installeren, beheren of onderhouden, ter plaatse of op afstand.",
        "Val je er niet onder, dan sta je volgens het NCSC ook niet onder toezicht. Toch dacht zes op de tien toeleveranciers die NIS2 kennen dat de regels ook voor hen gelden. Dat bleek uit een peiling van het Digital Trust Center uit september 2024.",
        {
          "kop": "Waarom krijg je dan toch een NIS2-vragenlijst?"
        },
        "Omdat je klant zijn keten moet beveiligen. Artikel 21, lid 3, onder d, noemt de beveiliging van de toeleveringsketen, inclusief de relatie met rechtstreekse leveranciers. Daarbij kijkt je klant ook naar de kwaliteit van jouw producten en naar je veilige ontwikkelingsprocedures (lid 4).",
        "Volgens het NCSC speelt dit vooral als je levert wat met de systemen van de klant te maken heeft. Dat geldt ook als je toegang hebt tot die systemen. De klant kan dan mitigerende maatregelen van je verlangen en bewijs vragen voor de toezichthouder. Zo werkt ketenverantwoordelijkheid: via afspraken met je klant, niet via een eigen plicht. Bij je klant valt dit vaak onder leveranciersmanagement: een vaste leveranciersbeoordeling, met de NIS2-vragenlijst als zelfevaluatie die jij invult.",
        {
          "kop": "Welke NIS2-eisen stelt een klant aan jou als leverancier?"
        },
        "Een vaste lijst met NIS2-eisen voor leveranciers bestaat niet. Wat NIS2 voor leveranciers betekent, verschilt per klant, omdat de eisen volgen uit zijn eigen risicoanalyse. Vragen die je kunt verwachten, gekoppeld aan artikel 21, lid 3:",
        {
          "punten": [
            "Toegangsbeheer: wie kan bij onze systemen, en gebruik je tweestapsverificatie? (onder i en j)",
            "Fysieke toegang: wie mag bij de installatie, de kast of de serverruimte?",
            "Patchmanagement: hoe houd je software en firmware bij, en hoe ga je om met kwetsbaarheden? (onder e)",
            "Incidentafhandeling: wie is je contactpersoon, en hoe snel laat je het ons weten? (onder b)",
            "Ontwikkelproces: hoe neem je beveiliging mee bij ontwerp, bouw en onderhoud? (onder e)"
          ]
        },
        {
          "kop": "Hoe werkt de NIS2-meldplicht, en wat betekent die voor leveranciers?"
        },
        "De meldplicht geldt voor de organisatie die onder de wet valt. Een aparte meldplicht voor leveranciers kent de wet niet. Een incident is significant als het een ernstige operationele verstoring van de diensten of financiële verliezen veroorzaakt of kan veroorzaken. Ook aanzienlijke schade bij anderen telt mee (artikel 25).",
        "Je klant meldt bij zijn CSIRT (Computer Security Incident Response Team) en bij zijn toezichthouder. Volgens het NCSC is het NCSC zelf na registratie het CSIRT voor de sector. De melding gaat in drie stappen:",
        {
          "punten": [
            "Vroegtijdige waarschuwing: onverwijld, en uiterlijk binnen 24 uur nadat de organisatie van het incident weet (artikel 26).",
            "Melding met, waar van toepassing, een eerste beoordeling van ernst en gevolgen: uiterlijk binnen 72 uur na dat moment (artikel 27).",
            "Eindverslag met onder meer de vermoedelijke oorzaak: uiterlijk een maand na de melding. Duurt het incident dan nog, dan volgt eerst een voortgangsverslag (artikel 29)."
          ]
        },
        "Voor een toeleverancier betekent dit: je klant kan jouw informatie snel nodig hebben. Bij de vroegtijdige waarschuwing geeft hij al aan of het incident vermoedelijk kwaadwillig is. Het NCSC roept ketenpartners op om afspraken vast te leggen en zich samen op incidenten voor te bereiden. Iedereen mag bovendien vrijwillig melden bij een CSIRT (artikel 33).",
        {
          "kop": "Wat houdt de NIS2-zorgplicht in het kort in?"
        },
        "De organisatie neemt passende en evenredige maatregelen, afgestemd op haar risico's (artikel 21). Die beschermen de systemen en hun fysieke omgeving. De wet noemt er ten minste tien:",
        {
          "punten": [
            "Beleid voor risicoanalyse en beveiliging van informatiesystemen.",
            "Incidenten afhandelen.",
            "Bedrijfscontinuïteit: back-ups, herstelplannen en crisisbeheer.",
            "De toeleveringsketen beveiligen.",
            "Beveiliging bij aanschaf, ontwikkeling en onderhoud, inclusief kwetsbaarheden.",
            "Beoordelen of de maatregelen werken.",
            "Cyberhygiëne en opleiding.",
            "Cryptografie en, waar nodig, encryptie.",
            "Personeel, toegangsbeleid en beheer van bedrijfsmiddelen (assets).",
            "Waar dat past: multifactorauthenticatie en beveiligde communicatie."
          ]
        },
        {
          "kop": "Bestaat er een NIS2-certificaat voor leveranciers?"
        },
        "Nee. Volgens het NCSC bestaan er geen keurmerken of certificaten waarmee je aantoont dat je aan de Cyberbeveiligingswet voldoet. De RDI schrijft dat keurmerken niet bewijzen dat een organisatie aan de wet voldoet. Een normenkader zoals ISO 27001 kan volgens het NCSC wel helpen in het gesprek met klanten, maar de wet schrijft het niet voor.",
        {
          "kop": "Wat betekent dit voor machines en besturing?"
        },
        "Voor industriële besturing en installaties springt één maatregel eruit: beveiliging bij het verwerven, ontwikkelen en onderhouden van systemen (onder e). Volgens de memorie van toelichting valt ook operationele technologie (OT), met de meet- en regelsystemen, onder het begrip netwerk- en informatiesysteem. OT-security valt dus binnen de zorgplicht van je klant. Vragen van klanten kunnen daarom ook gaan over toegang op afstand, netwerkscheiding en een aantoonbaar ontwikkelproces. Voor dat laatste beschrijft IEC 62443-4-1 eisen aan een veilig ontwikkelproces voor producten.",
        {
          "kop": "Wat kun je nu al doen?"
        },
        "Het NCSC roept toeleveranciers op om het gesprek met hun klanten aan te gaan. Stappen die daarbij passen:",
        {
          "punten": [
            "Zet op een rij welke klanten onder de wet vallen en waar je toegang hebt tot hun systemen.",
            "Vraag die klanten welke maatregelen zij van jou verwachten.",
            "Leg afspraken vast over toegang, updates en incidentmeldingen, met een vaste contactpersoon.",
            "Verzamel je bewijs: toegangsbeleid, updateproces, back-ups en documentatie van je ontwikkelproces."
          ]
        },
        {
          "kop": "Hoe Allico Systems hierbij helpt"
        },
        "Allico Systems ontwikkelt besturing waarin beveiliging vanaf het ontwerp is meegenomen. Denk aan beveiligde installaties die op afstand toegankelijk zijn, met de documentatie die je nodig hebt voor een audit of leveranciersvragenlijst. Werk je aan een installatie die op afstand toegankelijk moet zijn, neem dan contact met ons op.",
        "Bronnen: Cyberbeveiligingswet, Staatsblad 2026, 187 (artikelen 1, 12, 21, 24 tot en met 29, 33, 44 en 106, bijlagen 1 en 2); memorie van toelichting, Kamerstukken II 36764, nr. 3; Richtlijn (EU) 2022/2555; NCSC en Digital Trust Center; RDI; Rijksoverheid; ISA, ISA/IEC 62443. Stand: november 2026.",
        "Dit artikel geeft algemene informatie en is geen juridisch advies."
      ],
      "vragen": [
        {
          "vraag": "Moet een toeleverancier zelf incidenten melden onder de Cyberbeveiligingswet?",
          "antwoord": "Niet als toeleverancier: de meldplicht geldt voor de organisaties die onder de wet vallen. Je klant kan wel snel informatie van jou nodig hebben, omdat hij binnen 24 uur een vroegtijdige waarschuwing moet geven. Vrijwillig melden bij een CSIRT mag iedereen (artikel 33)."
        },
        {
          "vraag": "Bestaat er een NIS2-certificaat voor leveranciers?",
          "antwoord": "Nee. Volgens het NCSC bestaan er geen keurmerken of certificaten waarmee je aantoont dat je aan de Cyberbeveiligingswet voldoet. De RDI schrijft dat keurmerken niet bewijzen dat een organisatie aan de wet voldoet. Een normenkader zoals ISO 27001 kan volgens het NCSC wel helpen in het gesprek met je klant."
        },
        {
          "vraag": "Kan een machinebouwer zelf onder de Cyberbeveiligingswet vallen?",
          "antwoord": "Ja, dat kan. De vervaardiging van machines, elektrische apparatuur en elektronische producten staat in bijlage 2 van de wet. In de regel geldt de wet dan voor bedrijven die minstens middelgroot zijn volgens de Europese mkb-definitie."
        },
        {
          "vraag": "Wat is het verschil tussen NIS2 en de Cyberbeveiligingswet?",
          "antwoord": "NIS2 is de Europese richtlijn (EU) 2022/2555. De Cyberbeveiligingswet is de Nederlandse wet die deze richtlijn uitwerkt en sinds 15 augustus 2026 geldt."
        }
      ],
      "verwant": [
        {
          "pagina": "nieuws-5",
          "tekst": "NIS2 voor OT en PLC: wat de wet van je besturing vraagt"
        },
        {
          "pagina": "spec-4",
          "tekst": "Cybersecurity en OT-beveiliging van installaties"
        },
        {
          "pagina": "spec-2",
          "tekst": "PLC-besturing en embedded software"
        }
      ]
    },

    // [PAGINA] /nieuws/plcnext-certificering-phoenix-contact/  (nieuws-1)
    {
      "id": "nieuws-1",
      "seo": {
        "adres": "plcnext-certificering-phoenix-contact",
        "titel": "PLCnext-traject bij Phoenix Contact gestart | Allico Systems",
        "omschrijving": "Allico Systems volgt het traject PLCnext Engineer bij Phoenix Contact. Wat PLCnext mogelijk maakt voor PLC-besturing, en waarom dat nu telt.",
        "gewijzigd": "2026-11-26"
      },
      "datum": "Juni 2026",
      "bijgewerkt": "november 2026",
      "titel": "Allico Systems start certificeringstraject bij Phoenix Contact",
      "samenvatting": "Wij volgen bij Phoenix Contact een certificeringstraject voor PLCnext. Daarin worden personen volgens vaste criteria gecertificeerd. De Workshop PLCnext Engineer hebben we gevolgd; het traject loopt nog.",
      "tekst": [
        "De afgelopen periode hebben wij de Workshop PLCnext Engineer bij Phoenix Contact gevolgd. Die workshop is de start van een certificeringstraject. Daarin worden personen volgens vaste criteria gecertificeerd. Op dit moment volgen we het voor PLCnext.",
        "Dit traject zetten we het komende jaar voort om onze kennis en vaardigheden verder te ontwikkelen. Het loopt dus nog.",
        "Een belangrijk onderdeel van dit traject is PLCnext Technology. Dit open automatiseringsplatform combineert de klassieke betrouwbaarheid van IEC 61131 met hogere programmeertalen zoals C, C++ en MATLAB Simulink. Dankzij de open Linux-kernel kunnen deze technologieën binnen dezelfde realtime-omgeving worden toegepast.",
        "Daarmee ontstaan mogelijkheden die verder gaan dan een traditionele PLC-besturing. Denk aan HTML5-dashboards direct vanaf de besturing en beveiligde toegang op afstand. Of aan datakoppelingen naar cloud- of MES-systemen, zonder aparte industriële pc in de kast.",
        "De timing is geen toeval. Met de Cyberbeveiligingswet, de Nederlandse uitwerking van NIS2, krijgen meer bedrijven te maken met strengere eisen aan cybersecurity. Ook in de toeleveringsketen. Cybersecurity wordt daarmee iets dat je aantoonbaar op orde moet hebben.",
        "Daarbij wordt het belangrijker om te laten zien dat cybersecurity vanaf het ontwerp is meegenomen. Ontwikkelprocessen volgens IEC 62443-4-1 zijn dan geen technisch detail meer. Ze zijn onderdeel van een bredere aanpak rond veilige industriële automatisering.",
        "Inmiddels passen we Phoenix Contact PLCnext toe in meerdere projecten. Bijvoorbeeld bij installaties die beveiligd op afstand toegankelijk zijn, met complexe besturingen en een volwaardig dashboard direct vanaf de PLC.",
        "Sinds 15 augustus 2026 geldt de Cyberbeveiligingswet in Nederland. Vraag je je af wat dat voor jouw installaties betekent, of loop je met een project rond? Neem gerust contact met ons op. Wij denken graag mee over automatisering, besturing en cybersecurity."
      ],
      "verwant": [
        {
          "pagina": "nieuws-4",
          "tekst": "Wat is PLCnext? Het open PLC-platform van Phoenix Contact"
        },
        {
          "pagina": "spec-2",
          "tekst": "PLC-besturing en embedded software"
        },
        {
          "pagina": "nieuws-3",
          "tekst": "NIS2 voor leveranciers: wat de Cyberbeveiligingswet van je vraagt"
        }
      ]
    },

    // Bericht zonder eigen pagina (geen "id" en "tekst"): staat alleen in de lijst
    {
      "datum": "Februari 2026",
      "titel": "Allico Systems ontvangt innovatieopdracht bij Kemkens",
      "foto": "kemkens-pand-oss.jpg",
      "fotoAlt": "Het pand van Kemkens Brandbeveiliging in Oss",
      "fotoBron": "Foto: Kemkens Brandbeveiliging",
      "samenvatting": "Kemkens Brandbeveiliging heeft Allico Systems per februari een nieuwe innovatieopdracht gegeven. Samen zetten we de volgende stap naar een gedigitaliseerd en slim brandbeveiligingssysteem. De nadruk ligt op digitaal inzicht en het testen van de installatie. Met toeleveranciers van Allico Systems wordt de installatie ontworpen volgens IEC 62443."
    }
  ],

  // [JURIDISCH] Privacyverklaring (en later eventueel algemene voorwaarden). Een blok met "tekst" wordt een eigen pagina
  // met een link in de footer; een gewone tekst ("/voorwaarden.pdf") wordt alleen een link. Concept van 26-11-2026,
  // door Wessel na te lezen. Verandert het formulier (endpoint), pas dan het stuk over de formulieren aan.
  "juridisch": {
    "privacy": {
      "seo": {
        "adres": "privacyverklaring",
        "titel": "Privacyverklaring | Allico Systems",
        "omschrijving": "Hoe Allico Systems in Horst omgaat met je persoonsgegevens: welke gegevens we gebruiken, waarom, hoe lang we ze bewaren en welke rechten je hebt.",
        "gewijzigd": "2026-11-26"
      },
      "kop": "Privacyverklaring",
      "bijgewerkt": "26 november 2026",
      "tekst": [
        "Allico Systems B.V. gaat zorgvuldig om met je persoonsgegevens. In deze verklaring lees je welke gegevens we gebruiken, waarvoor, en welke rechten je hebt.",
        {
          "kop": "Wie zijn wij?"
        },
        "Allico Systems B.V. is verantwoordelijk voor de verwerking van je gegevens. We zitten aan de Expeditiestraat 11, 5961 PX Horst. Je bereikt ons via info@allico.nl of +31 6 11 67 17 19.",
        {
          "kop": "Welke gegevens gebruiken we?"
        },
        "We gebruiken alleen gegevens die je zelf aan ons geeft:",
        {
          "punten": [
            "Projectcheck: je naam en e-mailadres, en als je die invult ook je bedrijf, telefoonnummer, toelichting en antwoorden over je project",
            "Terugbelverzoek: je naam en telefoonnummer",
            "Mail, telefoon of WhatsApp: wat je daarin met ons deelt"
          ]
        },
        {
          "kop": "Hoe werken de formulieren?"
        },
        "De formulieren op deze site versturen zelf niets. Ze openen je eigen mailprogramma met je bericht erin. Je ziet dus wat je stuurt, en je verstuurt de mail zelf naar info@allico.nl.",
        {
          "kop": "Waarvoor gebruiken we je gegevens?"
        },
        {
          "punten": [
            "Om je vraag te beantwoorden of je terug te bellen",
            "Om een voorstel voor je project te maken",
            "Om een opdracht uit te voeren en te factureren"
          ]
        },
        "Dat mag volgens de AVG omdat je ons zelf om contact vraagt, of omdat we een overeenkomst met je willen sluiten of uitvoeren. Voor facturen geldt daarnaast een wettelijke bewaarplicht.",
        {
          "kop": "Hoe lang bewaren we je gegevens?"
        },
        "We bewaren je gegevens niet langer dan nodig. Leidt je vraag niet tot een opdracht, dan verwijderen we je gegevens uiterlijk twee jaar na het laatste contact. Gegevens die we volgens de belastingwet moeten bewaren, zoals facturen, bewaren we zeven jaar.",
        {
          "kop": "Met wie delen we je gegevens?"
        },
        "We verkopen je gegevens niet en gebruiken ze niet voor reclame. Ze komen alleen bij ons en bij de bedrijven die onze website en e-mail technisch verzorgen. De website staat bij STRATO, een hostingbedrijf in Duitsland.",
        "Verder delen we je gegevens alleen als dat nodig is voor je vraag of project, of als de wet ons dat verplicht. Stuur je ons een WhatsApp-bericht, dan loopt dat via WhatsApp van Meta. Daarvoor geldt ook het privacybeleid van WhatsApp.",
        {
          "kop": "Cookies en bezoekgegevens"
        },
        "Deze site gebruikt geen cookies en geen programma's die je bezoek volgen, zoals Google Analytics. De site laadt ook geen onderdelen van andere websites.",
        "Bij elk bezoek ontvangt de webserver wel technische gegevens, zoals je IP-adres, je browser en de pagina die je opvraagt. Die zijn nodig om de site te tonen en te beveiligen.",
        {
          "kop": "Beveiliging"
        },
        "De site gebruikt een versleutelde verbinding (https). Merk je dat er iets mis is met je gegevens, laat het ons dan direct weten.",
        {
          "kop": "Jouw rechten"
        },
        "Je mag je gegevens inzien, laten verbeteren of laten verwijderen. Je kunt ook bezwaar maken tegen het gebruik, het gebruik laten beperken of je gegevens laten overdragen. Stuur daarvoor een mail naar info@allico.nl. We reageren binnen een maand.",
        "Ben je het niet eens met hoe we met je gegevens omgaan? Laat het ons eerst weten. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).",
        {
          "kop": "Wijzigingen"
        },
        "Deze verklaring kan veranderen, bijvoorbeeld als de site verandert. Bovenaan staat wanneer ze voor het laatst is bijgewerkt."
      ]
    }
  },

  // [CONTACT] Tekst over het werkgebied, onder de gegevens op de contactpagina.
  "contact": {
    "werkgebied": "Allico Systems zit in Horst, in Noord-Limburg, tussen Venlo en Venray."
  }
};
