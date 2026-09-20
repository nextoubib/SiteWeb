import {
  Cable,
  Cloud,
  Layers,
  Lock,
  Mic,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { Feature } from "@/types";

export const technologyPillars: Feature[] = [
  {
    title: "Intelligence artificielle",
    description:
      "Modèles de langage appliqués à la sémiologie radiologique et clinique : structuration, enrichissement, synthèse et assistance à la décision, toujours sous validation du praticien.",
    icon: Sparkles,
  },
  {
    title: "Voice-first",
    description:
      "La voix est l'interface principale. Quatre modes de dictée adaptent le niveau d'intervention de l'IA, du mot à mot au compte rendu complet.",
    icon: Mic,
  },
  {
    title: "Interopérabilité",
    description:
      "Standards ouverts du système d'information de santé : DICOM pour les images et la worklist, HL7 pour les messages ADT, ORM et ORU.",
    icon: Network,
  },
  {
    title: "DICOM",
    description:
      "Worklist MWL, stockage et consultation des examens. Architecture pouvant s'appuyer sur le serveur open source Orthanc et le viewer OHIF.",
    icon: Layers,
  },
  {
    title: "HL7",
    description:
      "Échanges avec le HIS et les logiciels tiers : identité et mouvements (ADT), demandes (ORM), résultats (ORU).",
    icon: Workflow,
  },
  {
    title: "Desktop Bridge",
    description:
      "Application légère qui relie le cloud NEXRAD à vos logiciels installés : PACS, RIS tiers, Word, logiciels métier.",
    icon: Cable,
  },
  {
    title: "Architecture web",
    description:
      "Applications accessibles dans le navigateur, sans installation lourde, mises à jour en continu.",
    icon: Cloud,
  },
  {
    title: "Sécurité",
    description:
      "Architecture conçue avec la sécurité et la confidentialité comme exigences centrales : cloisonnement des données, contrôle des accès, chiffrement des échanges.",
    icon: Lock,
  },
];

export const architectureLayers = [
  {
    label: "Vos outils",
    items: ["PACS", "RIS tiers", "Microsoft Word", "HIS"],
  },
  {
    label: "Intégration",
    items: ["Nexrad Bridge", "DICOM MWL", "HL7 ADT / ORM / ORU"],
  },
  {
    label: "Plateforme NEXRAD",
    items: ["Nexrad AI", "Nexrad RIS", "PACS / Viewer", "Nextoubib"],
  },
] as const;
