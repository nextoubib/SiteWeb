import type { ProductId } from "@/types";

/**
 * Pricing content.
 *
 * The public prices of nexrad.org could not be verified when this site was
 * built, so no amount is displayed: every plan is "sur devis". Fill `price`
 * only with a figure copied from an official, current NEXRAD source.
 */
export type PricingPlan = {
  id: ProductId | "enterprise";
  name: string;
  audience: string;
  description: string;
  /** e.g. "Sur devis" — never an invented amount. */
  price: string;
  priceNote?: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  tone: "radiology" | "ai" | "nextoubib" | "neutral";
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "nexrad-ai",
    name: "Nexrad AI",
    audience: "Radiologues",
    description: "Dictée et comptes rendus structurés, avec ou sans Bridge.",
    price: "Sur devis",
    features: [
      "Modes Brut, Grand titre, Secrétaire et Mixte",
      "Bibliothèque de modèles par modalité",
      "Assistance au diagnostic différentiel",
      "Calculateurs, RECIST et Cheson",
      "Nexrad Bridge pour l'intégration PACS / Word",
    ],
    cta: { label: "Demander une démonstration", href: "/demo?produit=nexrad-ai" },
    tone: "ai",
  },
  {
    id: "nexrad-ris",
    name: "Nexrad RIS",
    audience: "Centres d'imagerie",
    description: "Le cockpit du centre : accueil, planning, facturation, dictée.",
    price: "Sur devis",
    priceNote: "Selon le nombre de salles, de modalités et de praticiens.",
    features: [
      "Accueil, admission, rendez-vous et planning",
      "Worklist DICOM vers les modalités",
      "Facturation, caisse, stock, statistiques",
      "PACS et viewer intégrés",
      "Nexrad AI inclus dans la fiche examen",
    ],
    cta: { label: "Demander une démonstration", href: "/demo?produit=nexrad-ris" },
    highlighted: true,
    tone: "radiology",
  },
  {
    id: "nextoubib",
    name: "Nextoubib",
    audience: "Médecins généralistes et spécialistes",
    description: "Dossier médical, consultation dictée, documents et cabinet.",
    price: "Sur devis",
    features: [
      "Consultation par dictée structurée",
      "Ordonnances et documents assistés",
      "QR Scan et OCR médical",
      "Triage infirmier",
      "Agenda, facturation et gestion du cabinet",
    ],
    cta: { label: "Demander une démonstration", href: "/demo?produit=nextoubib" },
    tone: "nextoubib",
  },
  {
    id: "enterprise",
    name: "Établissement",
    audience: "Hôpitaux, cliniques, groupes",
    description: "Déploiement multi-sites avec interopérabilité HL7 et accompagnement.",
    price: "Sur devis",
    features: [
      "RIS + PACS + Viewer + Nexrad AI",
      "Interopérabilité HL7 ADT / ORM / ORU",
      "Nextoubib pour les services cliniques",
      "Déploiement et formation sur site",
      "Support dédié",
    ],
    cta: { label: "Contacter l'équipe", href: "/demo?produit=etablissement" },
    tone: "neutral",
  },
];
