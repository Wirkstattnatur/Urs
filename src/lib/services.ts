import golfFitnessImage from "@/assets/wirkstatt/golf-fitness.jpg";
import golfFitnessDetailImage from "@/assets/wirkstatt/golf-fitness-balance.jpg";
import golfFitnessHeroImage from "@/assets/wirkstatt/golf-fitness-hero-258.webp";
import golfFitnessStrengthImage from "@/assets/wirkstatt/golf-fitness-strength-156.webp";
import karateImage from "@/assets/wirkstatt/karate.jpg";
import karateDetailImage from "@/assets/wirkstatt/karate-movement.jpg";
import karateFocusMittsImage from "@/assets/wirkstatt/karate-focus-mitts.webp";
import karateKickImage from "@/assets/wirkstatt/karate-kick.webp";
import wirkraumImage from "@/assets/wirkstatt/pilates.jpg";
import personalTrainingBallImage from "@/assets/wirkstatt/personal-training-ball.webp";
import personalTrainingClientImage from "@/assets/wirkstatt/personal-training-client.webp";
import pilatesHeroImage from "@/assets/wirkstatt/personal-training-cover-132.webp";
import personalTrainingDetailImage from "@/assets/wirkstatt/personal-training-outdoor.jpg";
import personalTrainingOutdoorPushImage from "@/assets/wirkstatt/personal-training-outdoor-push.webp";
import pilatesDetailImage from "@/assets/wirkstatt/pilates-detail-126.webp";
import pilatesCareImage from "@/assets/wirkstatt/pilates-care.jpg";
import pilatesTrxImage from "@/assets/wirkstatt/pilates-cover-trx.webp";
import trainerStudioImage from "@/assets/wirkstatt/trainer-studio.webp";

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
  imageAlt: string;
  imagePosition: string;
  imageFit?: "cover" | "contain";
  gallery: readonly ServiceGalleryImage[];
  facts: readonly ServiceFact[];
  offerTitle: string;
  offerIntro: string;
  offerCards: readonly ServiceTextCard[];
  benefits: readonly ServiceBenefit[];
  locations: readonly string[];
  methods: readonly string[];
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
    heroTitle: "Training, das bei dir beginnt.",
    intro:
      "Wir richten jede Einheit an deiner aktuellen Verfassung, deinen Wünschen und deinen Zielen aus. So entsteht ein persönliches Training, das fordert, ohne dich zu überfordern.",
    image: personalTrainingDetailImage,
    imageAlt: "Urs Gremlich beim funktionellen Training mit Widerstandsbändern im Freien",
    imagePosition: "72% center",
    gallery: [
      {
        src: personalTrainingClientImage,
        alt: "Urs Gremlich begleitet einen Kunden bei einer Übung am Sling Trainer",
        caption: "Persönliche Begleitung am Sling Trainer",
        position: "88% center",
      },
      {
        src: personalTrainingBallImage,
        alt: "Urs Gremlich trainiert Koordination und Stabilität mit einem Ball",
        caption: "Koordination und Kraft im Wirkraum",
        position: "38% center",
      },
      {
        src: personalTrainingOutdoorPushImage,
        alt: "Urs Gremlich bei einer Übung mit Widerstandsbändern zwischen Bäumen",
        caption: "Training mit dem eigenen Körpergewicht in der Natur",
        position: "center center",
      },
      {
        src: trainerStudioImage,
        alt: "Urs Gremlich bei einer Balanceübung im Wirkraum",
        caption: "Balance, Reaktion und Bewegungsfreude",
        position: "center center",
      },
    ],
    facts: [
      { value: "1:1", label: "Begleitung" },
      { value: "60 Min.", label: "Dauer" },
      { value: "CHF 130", label: "Preis" },
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
    methodGroups: [
      {
        title: "Training & Bewegung",
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
    image: pilatesHeroImage,
    imageAlt: "Urs Gremlich beim Ausfallschritt mit Holzstab im Wirkraum",
    imagePosition: "31% center",
    gallery: [
      {
        src: pilatesDetailImage,
        alt: "Urs Gremlich bei einer dynamischen Übung am Trainingsgerät im Wirkraum",
        caption: "Bewegung, Stabilität und Körperkontrolle",
        position: "38% center",
      },
      {
        src: pilatesCareImage,
        alt: "Urs Gremlich führt eine kontrollierte Übung vor dem Spiegel im Wirkraum aus",
        caption: "Präzise Bewegung im persönlichen Rahmen",
        position: "center center",
      },
      {
        src: pilatesTrxImage,
        alt: "Urs Gremlich bei einer kontrollierten Ganzkörperübung im Wirkraum",
        caption: "Kraft und Beweglichkeit bewusst verbinden",
        position: "center center",
      },
    ],
    facts: [
      { value: "Max. 5", label: "Gruppe" },
      { value: "60 Min.", label: "Dauer" },
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
    image: golfFitnessHeroImage,
    imageAlt: "Urs Gremlich beim Balance- und Rotationstraining mit einem Golfschläger",
    imagePosition: "center 45%",
    gallery: [
      {
        src: golfFitnessDetailImage,
        alt: "Urs Gremlich beim Balance- und Rotationstraining mit einem Golfschläger",
        caption: "Rotation und Balance gezielt trainieren",
        position: "center center",
      },
      {
        src: golfFitnessStrengthImage,
        alt: "Urs Gremlich beim Kraft- und Stabilitätstraining mit Hanteln",
        caption: "Kraft und Stabilität als Basis für den Schwung",
        position: "center center",
      },
      {
        src: golfFitnessImage,
        alt: "Urs Gremlich bei einer dynamischen GolfFitness-Übung",
        caption: "Beweglichkeit und Koordination abwechslungsreich fördern",
        position: "center 28%",
      },
    ],
    facts: [
      { value: "1:1", label: "Begleitung" },
      { value: "Einzel & Gruppe", label: "Formate" },
      { value: "Ab CHF 30", label: "Preis" },
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
    image: karateFocusMittsImage,
    imageAlt: "Urs Gremlich trainiert mit gelb-schwarzen Schlagpolstern im Wirkraum",
    imagePosition: "center 24%",
    gallery: [
      {
        src: karateImage,
        alt: "Japanische Karate-Kalligrafie im Wirkraum",
        caption: "Tradition, Haltung und Konzentration",
        position: "center center",
        fit: "contain",
      },
      {
        src: karateKickImage,
        alt: "Ein Karateka führt im Wirkraum einen dynamischen Tritt aus",
        caption: "Dynamik, Präzision und kontrollierte Kraft",
        position: "center top",
      },
      {
        src: karateDetailImage,
        alt: "Urs Gremlich bei einer kraftvollen Bewegungsübung im Freien",
        caption: "Kraft und Körperkontrolle in Bewegung",
        position: "center center",
      },
      {
        src: wirkraumImage,
        alt: "Heller Wirkraum in Thalwil mit blauen Trainingsmatten",
        caption: "Training im Wirkraum Thalwil",
        position: "center center",
      },
    ],
    facts: [
      { value: "3. Dan", label: "Grad" },
      { value: "60 Min.", label: "Dauer" },
      { value: "Ab CHF 80", label: "Monat" },
    ],
    offerTitle: "Kampfkunst als Ganzkörper\u00adtraining.",
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
      { title: "Kleingruppe", price: "CHF 80", note: "Pro Monat" },
    ],
  },
] as const satisfies readonly ServiceDetail[];

export const servicesBySlug = Object.fromEntries(
  serviceOffers.map((service) => [service.slug, service]),
) as Record<ServiceDetail["slug"], (typeof serviceOffers)[number]>;
