import type { ServiceDetail, ServiceGalleryImage } from "@/lib/services";

type ServiceSlug = ServiceDetail["slug"];

type EnglishServiceTranslation = {
  title: string;
  eyebrow: string;
  description: string;
  heroTitle: string;
  intro: string;
  imageAlt: string;
  gallery: readonly Pick<ServiceGalleryImage, "alt" | "caption">[];
  facts: readonly { label: string; value: string }[];
  offerTitle: string;
  offerIntro: string;
  offerCards: readonly { title: string; text: string }[];
  benefits: readonly { title: string; text: string }[];
  locations: readonly string[];
  methods: readonly string[];
  methodGroups?: readonly { title: string; items: readonly string[] }[];
  prices: readonly { title: string; price: string; note: string }[];
};

export const englishServiceTranslations: Record<ServiceSlug, EnglishServiceTranslation> = {
  "personal-training": {
    title: "Personal Training",
    eyebrow: "Personalised training",
    description: "A training plan shaped around your everyday life, your pace and your goals.",
    heroTitle: "Training that begins with you.",
    intro:
      "We tailor every session to your current condition, your wishes and your goals. This creates personal training that challenges you without overwhelming you.",
    imageAlt: "Urs Gremlich during functional outdoor training with resistance bands",
    gallery: [
      {
        alt: "A man doing a squat with a resistance band outdoors",
        caption: "Strength training with a resistance band in nature",
      },
      {
        alt: "A female client doing a squat with a weight bag in the training room",
        caption: "Functional strength training with added weight",
      },
      {
        alt: "A female client doing balance training with a dumbbell in the Wirkraum",
        caption: "Combining balance, strength, and coordination",
      },
      {
        alt: "A client doing an overhead exercise with a resistance band",
        caption: "Mobility and strength in the shoulder area",
      },
      {
        alt: "Urs Gremlich guiding a female client during balance training on the sling trainer",
        caption: "Personal guidance on the sling trainer",
      },
      {
        alt: "A client doing stair training outdoors",
        caption: "Endurance training on the stairs",
      },
      {
        alt: "A person training with battle ropes in the Wirkraum",
        caption: "Dynamic full-body training",
      },
      {
        alt: "A female client doing a core exercise with a ball outdoors",
        caption: "Core stability under the open sky",
      },
      {
        alt: "Urs Gremlich guiding a female client doing lunges outdoors",
        caption: "Individually guided outdoor training",
      },
      {
        alt: "Two female clients doing stair training in the greenery",
        caption: "Endurance and coordination on the stairs",
      },
    ],
    facts: [
      { label: "Coaching", value: "1:1 / 1:2" },
      { label: "Duration", value: "60 min." },
      { label: "Price", value: "CHF 130" },
    ],
    offerTitle: "How your training becomes personal.",
    offerIntro:
      "You won’t get a rigid standard programme. Content and intensity are continuously adapted to you — in the Wirkraum, outdoors or at your location.",
    offerCards: [
      {
        title: "Individual planning",
        text: "Strength, mobility, coordination and endurance are combined to match your starting point and your goals. If desired, you will also receive personalised exercises for home so you can stay active between sessions.",
      },
      {
        title: "A clear training structure",
        text: "Warm-up, strength or endurance, coordination and a calm finish give every session a sensible rhythm — with plenty of room for how you feel on the day.",
      },
    ],
    benefits: [
      {
        title: "Holistic",
        text: "Mobility, strength, endurance and relaxation work together seamlessly.",
      },
      {
        title: "Everyday relevance",
        text: "The training is shaped around your life and easily integrated into your routine.",
      },
      { title: "Varied", text: "Different methods and equipment keep body and mind engaged." },
    ],
    locations: ["Wirkraum Thalwil", "In nature", "At your home or office", "On the golf course"],
    methods: [
      "Strength & endurance",
      "Balance & mobility",
      "Coordination",
      "Sling training",
      "Pilates Care",
      "Sypoba",
      "Relaxation",
      "Video analysis",
    ],
    methodGroups: [
      {
        title: "Training & movement",
        items: [
          "Strength & endurance",
          "Balance & mobility",
          "Coordination",
          "Sling training",
          "Pilates Care",
          "Sypoba",
          "Relaxation",
          "Video analysis",
        ],
      },
      {
        title: "Therapy & regeneration",
        items: ["Dorn spinal therapy", "Trigger point & cupping therapy"],
      },
      { title: "Massages", items: ["Classic massage", "Back & neck massage"] },
    ],
    prices: [{ title: "Personal Training", price: "CHF 130", note: "60 minutes" }],
  },
  pilates: {
    title: "Pilates",
    eyebrow: "Stability & mobility",
    description: "Control, breathing and precise movement for a stable, strong body.",
    heroTitle: "Movement from the core.",
    intro:
      "Pilates combines controlled movement with conscious breathing and relaxation. In personal training or in a small group, you work calmly and precisely on stability and mobility.",
    imageAlt: "Urs Gremlich performing a balance exercise with weights",
    gallery: [
      {
        alt: "A client performing a controlled Pilates exercise on a mat",
        caption: "Mobility and conscious body awareness",
      },
      {
        alt: "Bright Wirkraum in Thalwil with blue training mats",
        caption: "Pilates in the Wirkraum Thalwil",
      },
      {
        alt: "A client performing a stabilising forearm plank exercise in the Wirkraum",
        caption: "Targeted training for stability and the core",
      },
    ],
    facts: [
      { label: "Group", value: "3–5" },
      { label: "Duration", value: "60 min." },
      { label: "Per person", value: "CHF 35" },
    ],
    offerTitle: "Train calmly, move consciously.",
    offerIntro:
      "The exercises take place on a mat, chair or bench and are performed slowly with control. The small group size leaves room for individual corrections.",
    offerCards: [
      {
        title: "Pilates Care",
        text: "A gentle, targeted form of Pilates with special attention to the back, posture and a stable core — also during and after pregnancy.",
      },
      {
        title: "Fascia training",
        text: "Stretching, bouncing and conscious sensing complement the Pilates exercises. The aim is smoother movement and better body awareness.",
      },
    ],
    benefits: [
      {
        title: "Upright posture",
        text: "Conscious movements support a stable and upright posture.",
      },
      { title: "Core", text: "Pelvic floor, abdominals and back work together in coordination." },
      {
        title: "Balance",
        text: "Strength, mobility, breathing and relaxation come into harmony.",
      },
    ],
    locations: ["Wirkraum Thalwil", "In nature", "At your home or office"],
    methods: [
      "Breathing",
      "Balance & mobility",
      "Strengthening",
      "Coordination",
      "Fascia training",
    ],
    prices: [
      { title: "Single session", price: "CHF 130", note: "60 minutes" },
      {
        title: "Small group",
        price: "CHF 35",
        note: "60 minutes · per person · 3–5 people",
      },
    ],
  },
  "golf-fitness": {
    title: "Golf-Fitness",
    eyebrow: "Power for your swing",
    description: "More stability, rotation and mobility for a healthy, efficient golf swing.",
    heroTitle: "More body for your swing.",
    intro:
      "A tailored GolfFitness programme combines strength, stability, mobility and balance. It complements your work with your golf pro and focuses on the physical foundation of your swing.",
    imageAlt: "Urs Gremlich during balance and rotation training with a golf club",
    gallery: [
      {
        alt: "A golfer doing putting and balance training in the Wirkraum",
        caption: "Combining putting with balance and control",
      },
      {
        alt: "A golfer practising their swing on a balance board",
        caption: "Rotation and stability in the golf swing",
      },
      {
        alt: "Urs Gremlich performing a GolfFitness exercise with weights",
        caption: "Training power transfer and mobility",
      },
    ],
    facts: [
      { label: "Coaching", value: "1:1 / group" },
      { label: "Duration", value: "60 min." },
      { label: "Price", value: "CHF 130" },
    ],
    offerTitle: "Fitness as the foundation for good golf.",
    offerIntro:
      "Golf demands coordination, mobility and stability from the whole body. In training, we work specifically on these fundamentals — tailored to your body and your game.",
    offerCards: [
      {
        title: "GolfFitness (Albatros method)",
        text: "A versatile training programme for strength, stability, mobility and balance. The exercises are adapted to your capabilities and the demands of your swing.",
      },
      {
        title: "Complementing your golf pro",
        text: "While your golf pro coaches your technique, GolfFitness focuses on the physical prerequisites. Video analysis can help make movement patterns understandable.",
      },
    ],
    benefits: [
      { title: "Stability", text: "A reliable foundation supports control and power transfer." },
      {
        title: "Rotation",
        text: "Targeted mobility creates room for a free swing movement.",
      },
      {
        title: "Balance",
        text: "Coordination and balance connect the individual phases of movement.",
      },
    ],
    locations: [
      "Wirkraum Thalwil",
      "On the golf course",
      "On the driving range",
      "At your home or office",
    ],
    methods: [
      "Albatros method",
      "Balance & mobility",
      "Sling training",
      "Video analysis",
      "Golf simulator",
      "Stretching",
    ],
    prices: [
      { title: "Single session", price: "CHF 130", note: "60 minutes" },
      { title: "Small group", price: "CHF 35", note: "60 minutes · per person · 3–5 people" },
    ],
  },
  karate: {
    title: "Karate",
    eyebrow: "Body & mind",
    description: "Traditional Karate combines discipline, coordination, strength and inner calm.",
    heroTitle: "Strength, clarity and posture.",
    intro:
      "FitKarate combines elements of Shotokan-Ryu with versatile fitness training. Technique, coordination, strength and concentration develop together — adapted to your level.",
    imageAlt: "Urs Gremlich with strike pads in the Wirkraum",
    gallery: [
      {
        alt: "Urs Gremlich and a client practising a controlled hold in the Wirkraum",
        caption: "Technique and body control in partner training",
      },
      {
        alt: "Urs Gremlich and a client practising a defensive technique",
        caption: "Practising defence and reaction together",
      },
      {
        alt: "Urs Gremlich and a client practising an arm technique",
        caption: "Precision and distance in partner training",
      },
      {
        alt: "A client performing a controlled side kick",
        caption: "Kicking technique with controlled power",
      },
      {
        alt: "A client practising a kick with a strike pad",
        caption: "Training reaction and precision",
      },
      {
        alt: "Urs Gremlich wearing a black belt in fighting stance in the Wirkraum",
        caption: "Posture, focus and readiness",
      },
    ],
    facts: [
      { label: "Rank", value: "3rd Dan" },
      { label: "Duration", value: "60 min." },
      { label: "Per month", value: "From CHF 80" },
    ],
    offerTitle: "Martial arts as full-body training.",
    offerIntro:
      "Karate presents both physical and mental challenges. Rotations, jumps, balance, bending and stretching make training versatile and engage the whole body.",
    offerCards: [
      {
        title: "FitKarate Thalwil",
        text: "Fitness and karate come together in varied training. Urs combines many years of movement training experience with his competition and martial arts background.",
      },
      {
        title: "Shotokan-Ryu",
        text: "Clear techniques, posture and concentration form the foundation. Self-defence and conscious breathing complement traditional training.",
      },
    ],
    benefits: [
      {
        title: "Physical strength",
        text: "Dynamic and controlled movements challenge the whole body.",
      },
      {
        title: "Coordination",
        text: "Technique, balance and movement sequences train bodily interplay.",
      },
      {
        title: "Focus",
        text: "Concentration and inner calm are just as much a part of training as movement.",
      },
    ],
    locations: ["Wirkraum Thalwil", "In nature", "At your home or office"],
    methods: [
      "Shotokan-Ryu",
      "Self-defence",
      "Breathing",
      "Balance & mobility",
      "Strengthening",
      "Coordination",
    ],
    prices: [
      { title: "Single session", price: "CHF 130", note: "60 minutes" },
      { title: "Small group", price: "CHF 80", note: "Per month" },
    ],
  },
};

export function getLocalizedService(service: ServiceDetail, locale: "de" | "en"): ServiceDetail {
  if (locale === "de") return service;

  const translation = englishServiceTranslations[service.slug];
  return {
    ...service,
    ...translation,
    facts: service.facts.map((fact, index) => ({ ...fact, ...translation.facts[index] })),
    gallery: service.gallery.map((image, index) => ({
      ...image,
      ...translation.gallery[index],
    })),
    offerCards: service.offerCards.map((card, index) => ({
      ...card,
      ...translation.offerCards[index],
    })),
    benefits: service.benefits.map((benefit, index) => ({
      ...benefit,
      ...translation.benefits[index],
    })),
    methodGroups: translation.methodGroups
      ? service.methodGroups?.map((group, index) => ({
          ...group,
          ...translation.methodGroups?.[index],
        }))
      : service.methodGroups,
    prices: service.prices.map((price, index) => ({ ...price, ...translation.prices[index] })),
  };
}
