import golfFitnessImage from "@/assets/wirkstatt/golf-fitness.jpg";
import golfFitnessDetailImage from "@/assets/wirkstatt/golf-fitness-balance.jpg";
import karateImage from "@/assets/wirkstatt/karate.jpg";
import karateDetailImage from "@/assets/wirkstatt/karate-movement.jpg";
import personalTrainingImage from "@/assets/wirkstatt/personal-training-cover-132.webp";
import personalTrainingDetailImage from "@/assets/wirkstatt/personal-training-outdoor.jpg";
import pilatesImage from "@/assets/wirkstatt/pilates-cover-132-mirrored.webp";
import pilatesDetailImage from "@/assets/wirkstatt/pilates-detail-126.webp";

type ServiceFact = {
  value: string;
  label: string;
};

type ServiceTextCard = {
  title: string;
  text: string;
};

type ServicePrice = {
  title: string;
  price: string;
  note: string;
};

export type ServiceDetail = {
  slug: "personal-training" | "pilates" | "golf-fitness" | "karate";
  path:
    "/angebot/personal-training" | "/angebot/pilates" | "/angebot/golf-fitness" | "/angebot/karate";
  title: string;
  eyebrow: string;
  description: string;
  heroTitle: string;
  intro: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  imageFit?: "cover" | "contain";
  detailImage: string;
  detailImageAlt: string;
  detailImagePosition: string;
  facts: readonly ServiceFact[];
  offerTitle: string;
  offerIntro: string;
  offerCards: readonly ServiceTextCard[];
  benefits: readonly ServiceTextCard[];
  locations: readonly string[];
  methods: readonly string[];
  prices: readonly ServicePrice[];
};

export const serviceOffers = [
  {
    slug: "personal-training",
    path: "/angebot/personal-training",
    title: "Personal Training",
    eyebrow: "Individuell trainieren",
    description:
      "Ein Trainingsplan, der sich an deinem Alltag, deinem Tempo und deinen Zielen orientiert.",
    heroTitle: "Training, das bei dir beginnt.",
    intro:
      "Wir richten jede Einheit an deiner aktuellen Verfassung, deinen Wünschen und deinen Zielen aus. So entsteht ein persönliches Training, das fordert, ohne dich zu überfordern.",
    image: personalTrainingImage,
    imageAlt: "Urs Gremlich beim Ausfallschritt mit Holzstab im Wirkraum",
    imagePosition: "31% center",
    detailImage: personalTrainingDetailImage,
    detailImageAlt: "Urs Gremlich beim funktionellen Training im Freien",
    detailImagePosition: "center center",
    facts: [
      { value: "1:1", label: "Persönlich begleitet" },
      { value: "60 Min.", label: "Pro Einzellektion" },
      { value: "CHF 130", label: "Einzellektion" },
    ],
    offerTitle: "So wird dein Training persönlich.",
    offerIntro:
      "Du erhältst kein starres Standardprogramm. Inhalte und Intensität werden laufend auf dich abgestimmt — im Wirkraum, draussen oder bei dir vor Ort.",
    offerCards: [
      {
        title: "Individuelle Planung",
        text: "Kraft, Beweglichkeit, Koordination und Ausdauer werden passend zu deinem Ausgangspunkt kombiniert. Übungen für zu Hause helfen dir, zwischen den Terminen dranzubleiben.",
      },
      {
        title: "Eine klare Trainingsstruktur",
        text: "Aufwärmen, Kraft oder Ausdauer, Koordination und ein ruhiger Abschluss geben jeder Einheit einen sinnvollen Rhythmus — mit genügend Raum für deine Tagesform.",
      },
    ],
    benefits: [
      {
        title: "Ganzheitlich",
        text: "Beweglichkeit, Kraft, Ausdauer und Entspannung greifen ineinander.",
      },
      {
        title: "Alltagstauglich",
        text: "Das Training orientiert sich an deinem Leben und lässt sich darin verankern.",
      },
      {
        title: "Abwechslungsreich",
        text: "Verschiedene Methoden und Geräte halten Körper und Kopf aufmerksam.",
      },
    ],
    locations: [
      "Wirkraum Thalwil",
      "In der Natur",
      "Bei dir zu Hause oder im Büro",
      "Auf dem Golfplatz",
    ],
    methods: [
      "Kraft & Ausdauer",
      "Balance & Beweglichkeit",
      "Koordination",
      "Sling Training",
      "Pilates Care",
      "Sypoba",
      "Entspannung",
      "Videoanalyse",
    ],
    prices: [{ title: "Einzeltraining", price: "CHF 130", note: "60 Minuten" }],
  },
  {
    slug: "pilates",
    path: "/angebot/pilates",
    title: "Pilates",
    eyebrow: "Stabilität & Beweglichkeit",
    description: "Kontrolle, Atmung und präzise Bewegung für einen stabilen, starken Körper.",
    heroTitle: "Aus der Mitte in Bewegung.",
    intro:
      "Pilates verbindet kontrollierte Bewegung mit bewusster Atmung und Entspannung. Im persönlichen Training oder in einer kleinen Gruppe arbeitest du ruhig und präzise an Stabilität und Beweglichkeit.",
    image: pilatesImage,
    imageAlt: "Urs Gremlich beim Ausfallschritt mit Holzstab im Wirkraum",
    imagePosition: "69% center",
    detailImage: pilatesDetailImage,
    detailImageAlt: "Urs Gremlich bei einer dynamischen Übung am Trainingsgerät im Wirkraum",
    detailImagePosition: "38% center",
    facts: [
      { value: "Max. 5", label: "Personen in der Gruppe" },
      { value: "60 Min.", label: "Pro Einheit" },
      { value: "Ab CHF 35", label: "Pro Person" },
    ],
    offerTitle: "Ruhig trainieren, bewusst bewegen.",
    offerIntro:
      "Die Übungen finden auf Matte, Stuhl oder Bank statt und werden langsam und kontrolliert ausgeführt. Die kleine Gruppengrösse lässt Raum für persönliche Korrekturen.",
    offerCards: [
      {
        title: "Pilates Care",
        text: "Eine sanfte, gezielte Form des Pilates mit besonderem Augenmerk auf Rücken, Haltung und eine stabile Körpermitte — auch während und nach einer Schwangerschaft.",
      },
      {
        title: "Faszientraining",
        text: "Dehnen, Federn und bewusstes Spüren ergänzen die Pilatesübungen. Ziel ist ein geschmeidigeres Bewegungsgefühl und ein besseres Bewusstsein für den eigenen Körper.",
      },
    ],
    benefits: [
      {
        title: "Aufrichtung",
        text: "Bewusste Bewegungen unterstützen eine stabile und aufrechte Haltung.",
      },
      {
        title: "Körpermitte",
        text: "Beckenboden, Bauch und Rücken arbeiten koordiniert zusammen.",
      },
      {
        title: "Balance",
        text: "Kraft, Beweglichkeit, Atmung und Entspannung kommen in Einklang.",
      },
    ],
    locations: ["Wirkraum Thalwil", "In der Natur", "Bei dir zu Hause oder im Büro"],
    methods: ["Atmung", "Balance & Beweglichkeit", "Kräftigung", "Koordination", "Faszientraining"],
    prices: [
      { title: "Einzeltraining", price: "CHF 130", note: "60 Minuten" },
      { title: "Kleingruppe", price: "CHF 35", note: "60 Minuten · pro Person · max. 5 Personen" },
    ],
  },
  {
    slug: "golf-fitness",
    path: "/angebot/golf-fitness",
    title: "Golf-Fitness",
    eyebrow: "Kraft für den Schwung",
    description:
      "Mehr Stabilität, Rotation und Beweglichkeit für einen gesunden, effizienten Golfschwung.",
    heroTitle: "Mehr Körper für deinen Schwung.",
    intro:
      "Ein auf dich abgestimmtes GolfFitness-Training verbindet Kraft, Stabilität, Beweglichkeit und Balance. Es ergänzt die Arbeit mit deinem GolfPro und richtet den Blick auf die körperlichen Voraussetzungen deines Schwungs.",
    image: golfFitnessImage,
    imageAlt: "Urs Gremlich bei einer dynamischen GolfFitness-Übung",
    imagePosition: "center 28%",
    detailImage: golfFitnessDetailImage,
    detailImageAlt: "Urs Gremlich beim Balance- und Rotationstraining mit einem Golfschläger",
    detailImagePosition: "center center",
    facts: [
      { value: "1:1", label: "Individuell trainieren" },
      { value: "Einzel & Gruppe", label: "Flexible Formate" },
      { value: "Ab CHF 30", label: "Pro Einheit" },
    ],
    offerTitle: "Fitness als Basis für gutes Golf.",
    offerIntro:
      "Golf verlangt dem ganzen Körper Koordination, Beweglichkeit und Stabilität ab. Im Training arbeiten wir gezielt an diesen Grundlagen — abgestimmt auf deinen Körper und dein Spiel.",
    offerCards: [
      {
        title: "GolfFitness nach Albatros",
        text: "Ein vielseitiges Training für Kraft, Stabilität, Beweglichkeit und Balance. Die Übungen werden an deine Möglichkeiten und die Anforderungen deines Schwungs angepasst.",
      },
      {
        title: "Ergänzung zum GolfPro",
        text: "Während dein GolfPro die Technik begleitet, konzentriert sich GolfFitness auf die körperlichen Voraussetzungen. Videoanalyse kann helfen, Bewegungsmuster verständlich zu machen.",
      },
    ],
    benefits: [
      {
        title: "Stabilität",
        text: "Eine verlässliche Basis unterstützt Kontrolle und Kraftübertragung.",
      },
      {
        title: "Rotation",
        text: "Gezielte Mobilität schafft Raum für eine freie Schwungbewegung.",
      },
      {
        title: "Balance",
        text: "Koordination und Gleichgewicht verbinden die einzelnen Bewegungsphasen.",
      },
    ],
    locations: [
      "Wirkraum Thalwil",
      "Auf dem Golfplatz",
      "Auf der Driving Range",
      "Bei dir zu Hause oder im Büro",
    ],
    methods: [
      "Albatros-Methode",
      "Balance & Beweglichkeit",
      "Sling Training",
      "Videoanalyse",
      "Golfsimulator",
      "Stretching",
    ],
    prices: [
      { title: "Einzeltraining", price: "CHF 130", note: "60 Minuten" },
      { title: "Gruppe bis 5", price: "CHF 35", note: "Pro Person und Einheit" },
      { title: "Gruppe ab 6", price: "CHF 30", note: "Pro Person und Einheit" },
    ],
  },
  {
    slug: "karate",
    path: "/angebot/karate",
    title: "Karate",
    eyebrow: "Körper & Geist",
    description: "Traditionelles Karate verbindet Disziplin, Koordination, Kraft und innere Ruhe.",
    heroTitle: "Kraft, Klarheit und Haltung.",
    intro:
      "FitKarate verbindet Elemente des Shotokan-Ryu mit einem vielseitigen Fitnesstraining. Technik, Koordination, Kraft und Konzentration entwickeln sich gemeinsam — angepasst an dein Niveau.",
    image: karateImage,
    imageAlt: "Japanische Karate-Kalligrafie im Wirkraum",
    imagePosition: "center center",
    imageFit: "contain",
    detailImage: karateDetailImage,
    detailImageAlt: "Urs Gremlich bei einer kraftvollen Bewegungsübung im Freien",
    detailImagePosition: "center center",
    facts: [
      { value: "3. Dan", label: "Karatelehrer" },
      { value: "60 Min.", label: "Einzeltraining" },
      { value: "Ab CHF 80", label: "Pro Monat" },
    ],
    offerTitle: "Kampfkunst als Ganzkörpertraining.",
    offerIntro:
      "Karate stellt körperliche und mentale Aufgaben. Rotationen, Sprünge, Gleichgewicht, Beugen und Strecken machen das Training vielseitig und sprechen den ganzen Körper an.",
    offerCards: [
      {
        title: "FitKarate Thalwil",
        text: "Fitness und Karate kommen in einem abwechslungsreichen Training zusammen. Urs verbindet langjährige Erfahrung im Bewegungstraining mit seiner Wettkampf- und Kampfkunsterfahrung.",
      },
      {
        title: "Shotokan-Ryu",
        text: "Klare Techniken, Haltung und Konzentration bilden die Grundlage. Selbstverteidigung und bewusste Atmung ergänzen das traditionelle Training.",
      },
    ],
    benefits: [
      {
        title: "Körperkraft",
        text: "Dynamische und kontrollierte Bewegungen fordern den ganzen Körper.",
      },
      {
        title: "Koordination",
        text: "Technik, Gleichgewicht und Bewegungsfolgen schulen das Zusammenspiel.",
      },
      {
        title: "Fokus",
        text: "Konzentration und innere Ruhe gehören ebenso zum Training wie Bewegung.",
      },
    ],
    locations: ["Wirkraum Thalwil", "In der Natur", "Bei dir zu Hause oder im Büro"],
    methods: [
      "Shotokan-Ryu",
      "Selbstverteidigung",
      "Atmung",
      "Balance & Beweglichkeit",
      "Kräftigung",
      "Koordination",
    ],
    prices: [
      { title: "Einzeltraining", price: "CHF 130", note: "60 Minuten" },
      { title: "Kleingruppe", price: "CHF 80", note: "Pro Monat" },
    ],
  },
] as const satisfies readonly ServiceDetail[];

export const servicesBySlug = Object.fromEntries(
  serviceOffers.map((service) => [service.slug, service]),
) as Record<ServiceDetail["slug"], (typeof serviceOffers)[number]>;
