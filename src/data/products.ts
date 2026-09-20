import { Cable, FileAudio, LayoutDashboard, Stethoscope } from "lucide-react";
import type { Product, ProductId } from "@/types";

export const products: Product[] = [
  {
    id: "nexrad-ai",
    name: "Nexrad AI",
    family: "radiologie",
    href: "/radiologie/ai",
    tagline: "De quelques mots à un compte rendu structuré.",
    description:
      "Dictée radiologique et rédaction assistée par IA : quatre modes, une bibliothèque de modèles, des calculateurs et une assistance au diagnostic différentiel.",
    intro:
      "Dictez vos observations, relisez un compte rendu structuré, validez. Nexrad AI adapte son niveau d'intervention à votre façon de travailler : transcription fidèle, mise en forme, ou construction complète du compte rendu à partir de quelques mots clés.",
    icon: FileAudio,
    tone: "ai",
    highlights: [
      "Modes Brut, Grand titre, Secrétaire et Mixte",
      "Modèles normaux et pathologiques par modalité",
      "Assistance au diagnostic différentiel",
      "Calculateurs et suivi oncologique",
    ],
  },
  {
    id: "nexrad-ris",
    name: "Nexrad RIS",
    family: "radiologie",
    href: "/radiologie/ris",
    tagline: "Le centre d'imagerie dans un seul cockpit.",
    description:
      "Accueil, rendez-vous, planning des salles et modalités, dossier patient, facturation, stock, statistiques et dictée intégrée.",
    intro:
      "Nexrad RIS pilote le parcours complet du patient dans votre centre : de la prise de rendez-vous à la remise du compte rendu, avec worklist DICOM, PACS, viewer et interopérabilité HL7.",
    icon: LayoutDashboard,
    tone: "radiology",
    highlights: [
      "Accueil, admission et planning",
      "Worklist DICOM vers les modalités",
      "Facturation, caisse et stock",
      "Interopérabilité HL7 (ADT, ORM, ORU)",
    ],
  },
  {
    id: "nexrad-bridge",
    name: "Nexrad Bridge",
    family: "radiologie",
    href: "/radiologie/bridge",
    tagline: "L'IA NEXRAD dans les logiciels que vous utilisez déjà.",
    description:
      "Application desktop légère : capture, dictée, génération et injection automatique du compte rendu dans votre PACS, votre RIS ou Microsoft Word.",
    intro:
      "Nexrad Bridge s'installe à côté de vos outils existants. Un raccourci global, une dictée, et le compte rendu généré est injecté là où vous travaillez, sans changer de PACS.",
    icon: Cable,
    tone: "radiology",
    highlights: [
      "Application légère, always-on-top",
      "Raccourcis globaux et capture",
      "Injection automatique du compte rendu",
      "Intégration PACS, RIS tiers et Word",
    ],
  },
  {
    id: "nextoubib",
    name: "Nextoubib",
    family: "medecine",
    href: "/nextoubib",
    tagline: "Le dossier médical conçu pour travailler à la vitesse du médecin.",
    description:
      "Dossier médical informatisé, consultation par dictée, ordonnances, certificats, lettres, QR Scan, OCR médical, triage infirmier et gestion de cabinet.",
    intro:
      "Nextoubib est le copilote intelligent du médecin : la consultation est dictée, structurée dans le dossier patient, et les documents du quotidien sont générés avec votre validation.",
    icon: Stethoscope,
    tone: "nextoubib",
    highlights: [
      "Consultation par dictée structurée",
      "Ordonnances et documents assistés",
      "QR Scan : le smartphone devient scanner",
      "Triage infirmier et gestion de cabinet",
    ],
  },
];

export const productsById = Object.fromEntries(products.map((p) => [p.id, p])) as Record<
  ProductId,
  Product
>;

export const radiologyProducts = products.filter((p) => p.family === "radiologie");
export const medicineProducts = products.filter((p) => p.family === "medecine");
