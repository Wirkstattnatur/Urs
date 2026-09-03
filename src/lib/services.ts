import golfGallery1Image from "@/assets/wirkstatt/golf-gallery-1.webp";
import golfGallery2Image from "@/assets/wirkstatt/golf-gallery-2.webp";
import golfGallery3Image from "@/assets/wirkstatt/golf-gallery-3.webp";
import golfFitnessCardSmallImage from "@/assets/wirkstatt/golf-fitness-card-480.webp";
import golfFitnessCardImage from "@/assets/wirkstatt/golf-fitness-card.webp";
import golfFitnessHeroImage from "@/assets/wirkstatt/golf-fitness-hero-258.webp";
import karateGallery1Image from "@/assets/wirkstatt/karate-gallery-1.webp";
import karateGallery2Image from "@/assets/wirkstatt/karate-gallery-2.webp";
import karateGallery3Image from "@/assets/wirkstatt/karate-gallery-3.webp";
import karateGallery4Image from "@/assets/wirkstatt/karate-gallery-4.webp";
import karateGallery5Image from "@/assets/wirkstatt/karate-gallery-5.webp";
import karateGallery6Image from "@/assets/wirkstatt/karate-gallery-6.webp";
import karateCardSmallImage from "@/assets/wirkstatt/karate-card-480.webp";
import karateCardImage from "@/assets/wirkstatt/karate-card.webp";
import karateOverviewImage from "@/assets/wirkstatt/karate-overview.webp";
import wirkraumImage from "@/assets/wirkstatt/pilates.jpg";
import pilatesGallery1Image from "@/assets/wirkstatt/pilates-gallery-1.webp";
import pilatesGallery3Image from "@/assets/wirkstatt/pilates-gallery-3.webp";
import pilatesCardSmallImage from "@/assets/wirkstatt/pilates-card-480.webp";
import pilatesCardImage from "@/assets/wirkstatt/pilates-card.webp";
import pilatesOverviewImage from "@/assets/wirkstatt/pilates-overview.webp";
import personalTrainingCardImage from "@/assets/wirkstatt/personal-training-card.webp";
import personalTrainingCardSmallImage from "@/assets/wirkstatt/personal-training-card-480.webp";
import personalTrainingDetailImage from "@/assets/wirkstatt/personal-training-outdoor.webp";
import personalTrainingGallery1Image from "@/assets/wirkstatt/pt-gallery-1.webp";
import personalTrainingGallery2Image from "@/assets/wirkstatt/pt-gallery-2.webp";
import personalTrainingGallery3Image from "@/assets/wirkstatt/pt-gallery-3.webp";
import personalTrainingGallery4Image from "@/assets/wirkstatt/pt-gallery-4.webp";
import personalTrainingGallery5Image from "@/assets/wirkstatt/pt-gallery-5.webp";
import personalTrainingGallery6Image from "@/assets/wirkstatt/pt-gallery-6.webp";
import personalTrainingGallery7Image from "@/assets/wirkstatt/pt-gallery-7.webp";
import personalTrainingGallery8Image from "@/assets/wirkstatt/pt-gallery-8.webp";
import personalTrainingGallery9Image from "@/assets/wirkstatt/pt-gallery-9.webp";
import personalTrainingGallery10Image from "@/assets/wirkstatt/pt-gallery-10.webp";

type ServiceFact = {
  value: string;
  label: string;
};

type ServiceTextCard = {
  title: string;
  text: string;
};

export type BenefitIconName =
  | "holistic"
  | "everyday"
  | "variety"
  | "posture"
  | "core"
  | "balance"
  | "stability"
  | "rotation"
  | "strength"
  | "coordination"
  | "focus";

type ServiceBenefit = ServiceTextCard & {
  icon: BenefitIconName;
};

type ServicePrice = {
  title: string;
  price: string;
  note: string;
};

type ServiceMethodGroup = {
  title: string;
  items: readonly string[];
};

type ServiceLocationGroup = {
  title: string;
  items: readonly string[];
};

export type ServiceGalleryImage = {
  src: string;
  alt: string;
  caption: string;
  position: string;
  fit?: "cover" | "contain";
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
  cardImage: string;
  cardImageSrcSet: string;
  imageAlt: string;
  imagePosition: string;
  imageFit?: "cover" | "contain";
  gallery: readonly ServiceGalleryImage[];
  facts: readonly ServiceFact[];
  offerTitle: string;
  offerIntro: string;
  offerCards: readonly ServiceTextCard[];
  benefits: readonly ServiceBenefit[];
  locations?: readonly string[];
  locationGroups?: readonly ServiceLocationGroup[];
  methods?: readonly string[];
  methodGroups?: readonly ServiceMethodGroup[];
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
    heroTitle: "Training, das bei dir beginnt",
    intro:
      "Wir richten jede Einheit an deiner aktuellen Verfassung, deinen Wünschen und deinen Zielen aus. So entsteht ein persönliches Training, das fordert, ohne dich zu überfordern.",
    image: personalTrainingDetailImage,
    cardImage: personalTrainingCardImage,
    cardImageSrcSet: `${personalTrainingCardSmallImage} 480w, ${personalTrainingCardImage} 800w`,
    imageAlt: "Urs Gremlich beim funktionellen Training mit Widerstandsbändern im Freien",
    imagePosition: "72% center",
    gallery: [
      {
        src: personalTrainingGallery1Image,
        alt: "Ein Mann bei einer Kniebeuge mit Widerstandsband im Freien",
        caption: "Krafttraining mit Widerstandsband in der Natur",
        position: "center center",
      },
      {
        src: personalTrainingGallery2Image,
        alt: "Eine Kundin bei einer Kniebeuge mit Gewichtssack im Trainingsraum",
        caption: "Funktionelles Krafttraining mit Zusatzgewicht",
        position: "center center",
      },
      {
        src: personalTrainingGallery3Image,
        alt: "Eine Kundin beim Balancetraining mit Hantel im Wirkraum",
        caption: "Balance, Kraft und Koordination verbinden",
        position: "center center",
      },
      {
        src: personalTrainingGallery4Image,
        alt: "Ein Kunde bei einer Überkopfübung mit Widerstandsband",
        caption: "Beweglichkeit und Kraft im Schulterbereich",
        position: "center center",
      },
      {
        src: personalTrainingGallery5Image,
        alt: "Urs Gremlich begleitet eine Kundin beim Balancetraining am Sling Trainer",
        caption: "Persönliche Begleitung am Sling Trainer",
        position: "center center",
      },
      {
        src: personalTrainingGallery6Image,
        alt: "Ein Kunde beim Treppentraining im Freien",
        caption: "Ausdauertraining auf der Treppe",
        position: "center center",
      },
      {
        src: personalTrainingGallery7Image,
        alt: "Eine Person trainiert mit Battle Ropes im Wirkraum",
        caption: "Dynamisches Ganzkörpertraining",
        position: "center center",
      },
      {
        src: personalTrainingGallery8Image,
        alt: "Eine Kundin bei einer Rumpfübung mit Ball im Freien",
        caption: "Rumpfstabilität unter freiem Himmel",
        position: "center center",
      },
      {
        src: personalTrainingGallery9Image,
        alt: "Urs Gremlich begleitet eine Kundin bei Ausfallschritten im Freien",
        caption: "Individuell begleitetes Outdoor-Training",
        position: "center center",
      },
      {
        src: personalTrainingGallery10Image,
        alt: "Zwei Kundinnen beim Treppentraining im Grünen",
        caption: "Ausdauer und Koordination auf der Treppe",
        position: "center center",
      },
    ],
    facts: [
      { value: "1:1 / 1:2", label: "Begleitung" },
      { value: "60 Min.", label: "Dauer" },
      { value: "CHF 130", label: "Preis" },
    ],
    offerTitle: "So wird dein Training persönlich.",
    offerIntro:
      "Du erhältst kein starres Standardprogramm. Inhalte und Intensität werden laufend auf dich abgestimmt — im Wirkraum, draussen oder bei dir vor Ort.",
    offerCards: [
      {
        title: "Individuelle Planung",
        text: "Kraft, Beweglichkeit, Koordination und Ausdauer werden passend zu deinem Ausgangspunkt und deinen Zielen kombiniert. Auf Wunsch erhältst du zusätzlich individuelle Übungen für zu Hause, damit du auch zwischen den Terminen aktiv bleiben kannst.",
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
        icon: "holistic",
      },
      {
        title: "Alltagstauglich",
        text: "Das Training orientiert sich an deinem Leben und lässt sich darin verankern.",
        icon: "everyday",
      },
      {
        title: "Abwechslungsreich",
        text: "Verschiedene Methoden und Geräte halten Körper und Kopf aufmerksam.",
        icon: "variety",
      },
    ],
    locationGroups: [
      { title: "Wirkraum", items: ["Thalwil"] },
      {
        title: "Bei dir zu Hause oder im Büro",
        items: [
          "Horgen",
          "Rüschlikon",
          "Wädenswil",
          "Richterswil",
          "Wollerau",
          "Pfäffikon / Hurden",
          "Kilchberg",
          "Erlenbach",
          "Zürich",
        ],
      },
      {
        title: "Outdoor, Lauftraining & Nordic Walking",
        items: ["Horgen", "Oberrieden", "Thalwil", "Wädenswil", "Langnau am Albis", "Meilen"],
      },
      { title: "Leichtathletik", items: ["Horgen", "Brand Thalwil"] },
      {
        title: "Schwimmtraining",
        items: ["Bergli Horgen", "Hallenbad Untermosen Wädenswil"],
      },
      {
        title: "Weitere Orte & Region",
        items: [
          "Schindellegi",
          "Feusisberg",
          "Adliswil",
          "Gattikon",
          "Linkes und rechtes Zürichseeufer",
        ],
      },
    ],
    methodGroups: [
      {
        title: "Trainingsformen",
        items: [
          "Hometraining",
          "Outdoor- & Waldtraining",
          "Nordic Walking",
          "Laufanalyse & Lauftraining",
          "Leichtathletik",
          "Schwimmtraining",
          "Gruppentraining",
        ],
      },
      {
        title: "Methoden & Schwerpunkte",
        items: [
          "Kraft & Ausdauer",
          "Balance & Beweglichkeit",
          "Koordination",
          "Sling Training",
          "Pilates Care",
          "Sypoba",
          "Entspannung",
          "Videoanalyse",
        ],
      },
      {
        title: "Therapie & Regeneration",
        items: ["Wirbelsäulentherapie nach Dorn", "Triggerpunkt- & Schröpftherapie"],
      },
      {
        title: "Massagen",
        items: ["Klassische Massage", "Rücken- & Nackenmassage"],
      },
    ],
    prices: [{ title: "Personal Training", price: "CHF 130", note: "60 Minuten · 1–2 Personen" }],
  },
  {
    slug: "pilates",
    path: "/angebot/pilates",
    title: "Pilates",
    eyebrow: "Stabilität & Beweglichkeit",
    description: "Kontrolle, Atmung und präzise Bewegung für einen stabilen, starken Körper.",
    heroTitle: "Aus der Mitte in Bewegung",
    intro:
      "Pilates verbindet kontrollierte Bewegung mit bewusster Atmung und Entspannung. Im persönlichen Training oder in einer kleinen Gruppe arbeitest du ruhig und präzise an Stabilität und Beweglichkeit.",
    image: pilatesOverviewImage,
    cardImage: pilatesCardImage,
    cardImageSrcSet: `${pilatesCardSmallImage} 480w, ${pilatesCardImage} 800w`,
    imageAlt: "Urs Gremlich bei einer Balanceübung mit Gewichten",
    imagePosition: "center 52%",
    gallery: [
      {
        src: pilatesGallery1Image,
        alt: "Eine Kundin bei einer kontrollierten Pilates-Übung auf der Matte",
        caption: "Beweglichkeit und bewusste Körperwahrnehmung",
        position: "center 55%",
      },
      {
        src: wirkraumImage,
        alt: "Heller Wirkraum in Thalwil mit blauen Trainingsmatten",
        caption: "Pilates im Wirkraum Thalwil",
        position: "center center",
      },
      {
        src: pilatesGallery3Image,
        alt: "Eine Kundin bei einer stabilisierenden Unterarmstütz-Übung im Wirkraum",
        caption: "Stabilität und Körpermitte gezielt trainieren",
        position: "center center",
        fit: "contain",
      },
    ],
    facts: [
      { value: "3–5", label: "Gruppe" },
      { value: "60 Min.", label: "Dauer" },
      { value: "CHF 35", label: "Pro Person" },
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
        icon: "posture",
      },
      {
        title: "Körpermitte",
        text: "Beckenboden, Bauch und Rücken arbeiten koordiniert zusammen.",
        icon: "core",
      },
      {
        title: "Balance",
        text: "Kraft, Beweglichkeit, Atmung und Entspannung kommen in Einklang.",
        icon: "balance",
      },
    ],
    locationGroups: [
      { title: "Wirkraum", items: ["Thalwil"] },
      { title: "Outdoor", items: ["Thalwil"] },
      { title: "Weitere Orte", items: ["Horgen"] },
    ],
    methods: ["Atmung", "Balance & Beweglichkeit", "Kräftigung", "Koordination", "Faszientraining"],
    prices: [
      { title: "Einzeltraining", price: "CHF 130", note: "60 Minuten" },
      { title: "Kleingruppe", price: "CHF 35", note: "60 Minuten · pro Person · 3–5 Personen" },
    ],
  },
  {
    slug: "golf-fitness",
    path: "/angebot/golf-fitness",
    title: "Golf-Fitness",
    eyebrow: "Kraft für den Schwung",
    description:
      "Mehr Stabilität, Rotation und Beweglichkeit für einen gesunden, effizienten Golfschwung.",
    heroTitle: "Mehr Körper für deinen Schwung",
    intro:
      "Ein auf dich abgestimmtes GolfFitness-Training verbindet Kraft, Stabilität, Beweglichkeit und Balance. Es ergänzt die Arbeit mit deinem GolfPro und richtet den Blick auf die körperlichen Voraussetzungen deines Schwungs.",
    image: golfFitnessHeroImage,
    cardImage: golfFitnessCardImage,
    cardImageSrcSet: `${golfFitnessCardSmallImage} 480w, ${golfFitnessCardImage} 800w`,
    imageAlt: "Urs Gremlich beim Balance- und Rotationstraining mit einem Golfschläger",
    imagePosition: "center 45%",
    gallery: [
      {
        src: golfGallery1Image,
        alt: "Golfspieler beim Putt- und Balancetraining im Wirkraum",
        caption: "Putting mit Balance und Kontrolle verbinden",
        position: "center center",
      },
      {
        src: golfGallery2Image,
        alt: "Golfspieler beim Schwungtraining auf einem Balancebrett",
        caption: "Rotation und Stabilität im Golfschwung",
        position: "center center",
      },
      {
        src: golfGallery3Image,
        alt: "Urs Gremlich bei einer GolfFitness-Übung mit Gewichten",
        caption: "Kraftübertragung und Beweglichkeit trainieren",
        position: "center center",
      },
    ],
    facts: [
      { value: "1:1 / Gruppe", label: "Begleitung" },
      { value: "60 Min.", label: "Dauer" },
      { value: "CHF 130", label: "Preis" },
    ],
    offerTitle: "Fitness als Basis für gutes Golf",
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
        icon: "stability",
      },
      {
        title: "Rotation",
        text: "Gezielte Mobilität schafft Raum für eine freie Schwungbewegung.",
        icon: "rotation",
      },
      {
        title: "Balance",
        text: "Koordination und Gleichgewicht verbinden die einzelnen Bewegungsphasen.",
        icon: "balance",
      },
    ],
    locationGroups: [
      { title: "Wirkraum", items: ["Thalwil"] },
      {
        title: "Golfplatz & Driving Range",
        items: ["Driving Range Thalwil", "Golfanlage Schönenberg · Hirzel"],
      },
      { title: "Weitere Orte", items: ["Schindellegi", "Feusisberg"] },
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
      { title: "Kleingruppe", price: "CHF 35", note: "60 Minuten · pro Person · 3–5 Personen" },
    ],
  },
  {
    slug: "karate",
    path: "/angebot/karate",
    title: "Karate",
    eyebrow: "Körper & Geist",
    description: "Traditionelles Karate verbindet Disziplin, Koordination, Kraft und innere Ruhe.",
    heroTitle: "Kraft, Klarheit und Haltung",
    intro:
      "FitKarate verbindet Elemente des Shotokan-Ryu mit einem vielseitigen Fitnesstraining. Technik, Koordination, Kraft und Konzentration entwickeln sich gemeinsam — angepasst an dein Niveau.",
    image: karateOverviewImage,
    cardImage: karateCardImage,
    cardImageSrcSet: `${karateCardSmallImage} 480w, ${karateCardImage} 800w`,
    imageAlt: "Urs Gremlich mit Schlagpolstern im Wirkraum",
    imagePosition: "44.5% 5%",
    gallery: [
      {
        src: karateGallery1Image,
        alt: "Urs Gremlich und ein Kunde üben einen kontrollierten Griff im Wirkraum",
        caption: "Technik und Körperkontrolle im Partnertraining",
        position: "center center",
      },
      {
        src: karateGallery2Image,
        alt: "Urs Gremlich und ein Kunde trainieren eine Abwehrtechnik",
        caption: "Abwehr und Reaktion gemeinsam üben",
        position: "center center",
      },
      {
        src: karateGallery3Image,
        alt: "Urs Gremlich und ein Kunde trainieren eine Armtechnik",
        caption: "Präzision und Distanz im Partnertraining",
        position: "center center",
      },
      {
        src: karateGallery4Image,
        alt: "Ein Kunde führt einen kontrollierten Seitwärtskick aus",
        caption: "Trittechnik mit kontrollierter Kraft",
        position: "center center",
      },
      {
        src: karateGallery5Image,
        alt: "Ein Kunde trainiert einen Tritt mit Schlagpolster",
        caption: "Reaktion und Zielgenauigkeit trainieren",
        position: "center center",
      },
      {
        src: karateGallery6Image,
        alt: "Urs Gremlich mit Schwarzgurt in Kampfstellung im Wirkraum",
        caption: "Haltung, Fokus und Bereitschaft",
        position: "center center",
        fit: "contain",
      },
    ],
    facts: [
      { value: "alle Levels", label: "Grad" },
      { value: "60 Min.", label: "Dauer" },
      { value: "80 CHF", label: "Monat" },
    ],
    offerTitle: "Kampfkunst als Ganzkörper\u00adtraining",
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
        icon: "strength",
      },
      {
        title: "Koordination",
        text: "Technik, Gleichgewicht und Bewegungsfolgen schulen das Zusammenspiel.",
        icon: "coordination",
      },
      {
        title: "Fokus",
        text: "Konzentration und innere Ruhe gehören ebenso zum Training wie Bewegung.",
        icon: "focus",
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
      { title: "Kleingruppe", price: "80 CHF", note: "Pro Monat" },
    ],
  },
] as const satisfies readonly ServiceDetail[];

export const servicesBySlug = Object.fromEntries(
  serviceOffers.map((service) => [service.slug, service]),
) as Record<ServiceDetail["slug"], (typeof serviceOffers)[number]>;
