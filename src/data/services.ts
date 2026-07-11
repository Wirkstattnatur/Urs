export interface ServiceInfo {
  slug: string;
  num: string;
  title: string;
  short: string;
  eyebrow: string;
  lead: string;
  metaDesc: string;
  intro: string;
  benefits: string[];
  forWhom: string[];
  process: { step: string; text: string }[];
  price?: string;
}

export const services: ServiceInfo[] = [
  {
    slug: "personal-training",
    num: "01",
    title: "Personal Training",
    short: "Individuelle Trainingspläne, die zu deinem Alltag und Tempo passen.",
    eyebrow: "1:1 Training",
    lead: "Persönliches Training in Thalwil & Horgen — individuell auf dich, deinen Alltag und deine Ziele abgestimmt.",
    metaDesc: "Personal Training in Thalwil & Horgen mit Urs Gremlich. Individueller Trainingsplan, persönliche Betreuung, nachhaltige Resultate.",
    intro:
      "Ich glaube nicht an Standardprogramme. Wir starten dort, wo du stehst — mit einer sorgfältigen Analyse deiner Beweglichkeit, Kraft und Belastbarkeit. Daraus entsteht ein Trainingsplan, der zu deinem Alltag passt und dich Woche für Woche spürbar weiterbringt.",
    benefits: [
      "Ausführliche Standortbestimmung",
      "Massgeschneiderter Trainingsplan",
      "Persönliche Begleitung in jeder Einheit",
      "Regelmässige Fortschrittskontrolle",
    ],
    forWhom: [
      "Menschen, die gezielt Kraft und Beweglichkeit aufbauen wollen",
      "Wiedereinsteiger:innen nach Verletzung oder Pause",
      "Alle, die endlich dranbleiben möchten",
      "Sportler:innen mit klaren Zielen",
    ],
    process: [
      { step: "Kennenlernen", text: "Kostenloses Erstgespräch — wir klären Ziele, Erwartungen und Rahmen." },
      { step: "Analyse & Plan", text: "Bewegungs- und Kraftanalyse. Daraus entsteht dein persönlicher Plan." },
      { step: "Training & Progression", text: "Wir trainieren gemeinsam, passen laufend an und feiern Fortschritte." },
    ],
    price: "Ab CHF 140 / 60 Min — anerkannt von vielen Zusatzversicherungen.",
  },
  {
    slug: "pilates",
    num: "02",
    title: "Pilates",
    short: "Kontrolle, Atmung, Beweglichkeit — für einen stabilen, starken Körper.",
    eyebrow: "Körperarbeit",
    lead: "Pilates in kleinen Gruppen oder 1:1 — für eine starke Mitte, einen freien Rücken und bewusste Bewegung.",
    metaDesc: "Pilates in Thalwil: kontrollierte Bewegung, starke Körpermitte, freier Rücken. Kleine Gruppen und Einzelstunden mit Urs Gremlich.",
    intro:
      "Pilates ist mehr als nur Bauchmuskeltraining. Es geht um Kontrolle, Atmung und die Verbindung von Kraft und Beweglichkeit. Gerade bei sitzender Tätigkeit wirkt Pilates schnell — der Rücken wird freier, die Haltung aufrechter, die Bewegungen ökonomischer.",
    benefits: [
      "Kräftigung der tiefen Rumpfmuskulatur",
      "Verbesserte Haltung und Atmung",
      "Mehr Beweglichkeit und Körperbewusstsein",
      "Reduktion von Rückenbeschwerden",
    ],
    forWhom: [
      "Personen mit Rückenbeschwerden oder Verspannungen",
      "Menschen mit sitzendem Beruf",
      "Sportler:innen als Ergänzungstraining",
      "Einsteiger:innen und Fortgeschrittene",
    ],
    process: [
      { step: "Einstieg", text: "Erste Stunde individuell — wir klären deinen Ausgangspunkt." },
      { step: "Regelmässiges Training", text: "Fortlaufend in kleinen Gruppen oder Einzelstunden." },
      { step: "Progression", text: "Übungen werden Stufe für Stufe an dein Können angepasst." },
    ],
    price: "Gruppenkurs ab CHF 35 · Einzelstunde CHF 140.",
  },
  {
    slug: "golf-fitness",
    num: "03",
    title: "Golf-Fitness",
    short: "Mehr Länge, weniger Verletzungen. Kraft und Rotation für dein Spiel.",
    eyebrow: "Sportspezifisch",
    lead: "Golf-Fitness für mehr Länge, Stabilität und ein verletzungsfreies Spiel — abgestimmt auf deinen Schwung.",
    metaDesc: "Golf-Fitness in Thalwil & Horgen. Mehr Schlaglänge, mehr Rotation, weniger Rückenschmerzen. Trainingsprogramm für Golfer:innen.",
    intro:
      "Golf ist einseitig, explosiv und stellt hohe Anforderungen an Rotation, Rumpfkraft und Beweglichkeit. Wir arbeiten gezielt an den Bereichen, die dein Spiel limitieren — und an denjenigen, die verletzungsanfällig sind. So gewinnst du Länge und bleibst schmerzfrei.",
    benefits: [
      "Analyse deines Schwungs und deiner Beweglichkeit",
      "Mehr Rumpfstabilität und Rotationskraft",
      "Verletzungsprävention (Rücken, Ellbogen, Schulter)",
      "Verbesserte Ausdauer über 18 Löcher",
    ],
    forWhom: [
      "Ambitionierte Hobbygolfer:innen",
      "Wettkampf- und Turnierspieler:innen",
      "Wiedereinsteiger:innen nach Verletzung",
      "Alle, die länger schmerzfrei spielen möchten",
    ],
    process: [
      { step: "Screening", text: "Beweglichkeits- und Kraftscreening speziell für Golfer:innen." },
      { step: "Trainingsplan", text: "Individueller Plan mit Fokus auf deine Schwachstellen." },
      { step: "Training am Platz", text: "Regelmässiges Training — auf Wunsch auch draussen mit Schwungbezug." },
    ],
    price: "Einzelstunde CHF 140 · Paketpreise auf Anfrage.",
  },
  {
    slug: "karate",
    num: "04",
    title: "Karate",
    short: "Disziplin und Bewegung im traditionellen Karate — für Körper und Geist.",
    eyebrow: "Kampfkunst",
    lead: "Traditionelles Karate — Bewegung, Fokus und innere Ruhe. Für Kinder, Jugendliche und Erwachsene.",
    metaDesc: "Karate-Training in Thalwil: traditionelle Kampfkunst für Körper, Geist und Disziplin. Für Anfänger und Fortgeschrittene.",
    intro:
      "Karate ist mehr als Kampfkunst — es ist ein Weg. Wir üben Technik, Timing und Präzision, aber auch Konzentration, Respekt und Selbstvertrauen. Ein Training, das körperlich fordert und mental klärt.",
    benefits: [
      "Ganzkörperliche Fitness und Koordination",
      "Selbstbewusstsein und Selbstverteidigung",
      "Konzentration und Fokus",
      "Traditionelles Karate mit Struktur",
    ],
    forWhom: [
      "Kinder ab 6 Jahren",
      "Jugendliche und Erwachsene",
      "Ein- und Wiedereinsteiger:innen",
      "Fortgeschrittene mit Gürtelstufen",
    ],
    process: [
      { step: "Probetraining", text: "Kostenlos schnuppern und die Gruppe kennenlernen." },
      { step: "Regelmässiges Training", text: "Feste Trainingszeiten im Wirkraum Thalwil." },
      { step: "Gürtelprüfungen", text: "Auf Wunsch strukturierte Weiterentwicklung mit Prüfungen." },
    ],
  },
  {
    slug: "massagen",
    num: "05",
    title: "Massagen",
    short: "Gezielte Massage zur Regeneration nach Training oder anstrengendem Alltag.",
    eyebrow: "Regeneration",
    lead: "Sport- und Wellness-Massagen zur Regeneration, gegen Verspannungen und für mehr Wohlbefinden.",
    metaDesc: "Massagen in Thalwil: Sportmassage, klassische Massage, Triggerpunkt-Therapie. Anerkannt von vielen Zusatzversicherungen.",
    intro:
      "Nach intensivem Training oder einem langen Bürotag braucht der Körper Zeit zur Regeneration. Mit gezielten Griffen löse ich Verspannungen, verbessere die Durchblutung und unterstütze deine Erholung — damit du wieder frisch und beweglich wirst.",
    benefits: [
      "Lösen von muskulären Verspannungen",
      "Bessere Regeneration nach Sport",
      "Verbesserte Durchblutung",
      "Anerkannt von vielen Zusatzversicherungen",
    ],
    forWhom: [
      "Sportler:innen mit hoher Trainingsbelastung",
      "Menschen mit Rücken- und Nackenverspannungen",
      "Personen mit sitzendem Beruf",
      "Alle, die Regeneration ernst nehmen",
    ],
    process: [
      { step: "Kurze Anamnese", text: "Wir sprechen über Beschwerden, Ziele und Belastungen." },
      { step: "Behandlung", text: "60 Minuten gezielte Massage passend zu deinen Themen." },
      { step: "Empfehlung", text: "Tipps für Alltag, Regeneration und weitere Termine." },
    ],
    price: "60 Min CHF 130 · Krankenkassen-Anerkennung: EMR/ASCA.",
  },
  {
    slug: "just-me",
    num: "06",
    title: "Just Me",
    short: "Zeit nur für dich — Bewegung, Entspannung und persönliche Begleitung.",
    eyebrow: "Auszeit",
    lead: "«Just Me» — eine Auszeit, die Bewegung, Massage und Ruhe verbindet. Zeit, die dir gehört.",
    metaDesc: "Just Me — persönliche Auszeit in Thalwil. Kombination aus Training, Massage und Ruhe. Zeit nur für dich.",
    intro:
      "Manchmal braucht es keine grossen Ziele — sondern einfach Zeit für sich. «Just Me» kombiniert leichtes Training, eine Massage und bewusste Ruhephasen zu einer Auszeit, die dich runterfahren und wieder auftanken lässt.",
    benefits: [
      "Individuell zusammengestelltes Programm",
      "Kombination aus Bewegung und Regeneration",
      "Ruhe und Entspannung im Wirkraum",
      "Wohltuende Massage inklusive",
    ],
    forWhom: [
      "Menschen mit hohem Alltagsstress",
      "Personen, die eine bewusste Auszeit suchen",
      "Als Geschenk für einen lieben Menschen",
      "Als regelmässiges Ritual für dich selbst",
    ],
    process: [
      { step: "Absprache", text: "Kurzes Gespräch — was tut dir jetzt gut?" },
      { step: "Deine Zeit", text: "2–3 Stunden ganz für dich, individuell gestaltet." },
      { step: "Nachklang", text: "Empfehlungen, wie du die Ruhe in deinen Alltag mitnimmst." },
    ],
    price: "Ab CHF 260 · als Gutschein erhältlich.",
  },
];

export const SITE_URL = "https://wirkstattnatur.ch";
