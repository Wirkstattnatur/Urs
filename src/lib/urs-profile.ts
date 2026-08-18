export const ursProfile = {
  name: "Urs Gremlich",
  role: "Bewegungstrainer, Therapeut und Karatelehrer",
  birthYear: "1972",
  languages: ["Deutsch", "Englisch"],
  experience: "45+ Jahre",
  quote: "Respektvoll fördern und fordern: Das ist meine Devise.",
  qualificationGroups: [
    {
      title: "Training & Bewegung",
      items: [
        "FA Bewegungstrainer Level 1 BGB",
        "Trainer Bewegung & Gesundheit",
        "esa Erwachsenensportleiter BASPO",
        "GolfFitness-Trainer Albatros Methode (SAFS)",
        "Sling-Trainer-Instruktor",
        "Nordic-Walking-Instruktor nach RYFFEL RUNNING",
        "Karatelehrer (3. Dan)",
        "Pilates Care, Pilates Care 60plus & Schwangerschaft",
        "Faszientraining",
        "Yin Yoga",
        "Gesunder Rücken (Franklin Methode)",
      ],
    },
    {
      title: "Therapie & Regeneration",
      items: ["Wirbelsäulentherapeut", "Triggerpunkt- und Schröpftherapie", "Klassische Massage"],
    },
    {
      title: "Vermittlung & Spezialgebiete",
      items: [
        "Adipositas Weiterbildung",
        "Erwachsenenbildner (SVEB1)",
        "Divemaster PADI Nr. 269354",
      ],
    },
  ],
  qualityNote:
    "Als von den Krankenkassen anerkannter Betrieb weist Wirkstattnatur jährlich mindestens zwei Weiterbildungstage nach.",
  affiliations: [
    {
      name: "EMfit",
      detail: "BGB Schweiz Qualitätslabel für Prävention und Gesundheit",
    },
    {
      name: "Berufsverband für Gesundheit & Bewegung Schweiz",
      detail: "Vorstandsmitglied · Ressort Finanzen",
    },
    {
      name: "Pilates Care",
      detail: "Fachliches Netzwerk",
    },
    {
      name: "Pro Senectute",
      detail: "Ehemaliger Regio-Fachleiter Fit/Gym Unterland / Furttal",
    },
    {
      name: "Eisenhorn",
      detail: "Ehemaliger Partner",
    },
  ],
  network: "Ich arbeite mit ausgesuchten Ärzten und Therapeuten zusammen.",
} as const;

export type UrsQualificationGroup = (typeof ursProfile.qualificationGroups)[number];
export type UrsAffiliation = (typeof ursProfile.affiliations)[number];
