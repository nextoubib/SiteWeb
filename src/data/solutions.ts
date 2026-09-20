import { Building2, Hospital, Stethoscope, UserRound, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ProductId } from "@/types";

export type SolutionProfile = {
  id: string;
  title: string;
  audience: string;
  description: string;
  products: ProductId[];
  extras?: string[];
  icon: LucideIcon;
  tone: "radiology" | "nextoubib";
};

export const solutionProfiles: SolutionProfile[] = [
  {
    id: "radiologue-independant",
    title: "Radiologue indépendant",
    audience: "Cabinet libéral, téléradiologie, vacations",
    description:
      "Dictez et générez vos comptes rendus dans le PACS que vous utilisez déjà. Aucun changement d'infrastructure.",
    products: ["nexrad-ai", "nexrad-bridge"],
    icon: UserRound,
    tone: "radiology",
  },
  {
    id: "centre-imagerie",
    title: "Centre d'imagerie",
    audience: "Cabinets de groupe, centres multi-modalités",
    description:
      "Accueil, planning, worklist DICOM, facturation, stock et dictée IA dans un seul cockpit.",
    products: ["nexrad-ris"],
    extras: ["PACS", "Viewer", "DICOM Worklist"],
    icon: Building2,
    tone: "radiology",
  },
  {
    id: "service-hospitalier",
    title: "Service hospitalier",
    audience: "Services d'imagerie, cliniques, hôpitaux",
    description:
      "RIS, PACS et viewer connectés au système d'information hospitalier via HL7, avec la dictée IA pour chaque praticien.",
    products: ["nexrad-ris", "nexrad-ai"],
    extras: ["PACS", "HL7 ADT / ORM / ORU"],
    icon: Hospital,
    tone: "radiology",
  },
  {
    id: "medecin-generaliste",
    title: "Médecin généraliste",
    audience: "Cabinet de médecine générale",
    description:
      "Consultation dictée, ordonnances et certificats assistés, QR Scan et gestion du cabinet.",
    products: ["nextoubib"],
    icon: Stethoscope,
    tone: "nextoubib",
  },
  {
    id: "medecin-specialiste",
    title: "Médecin spécialiste",
    audience: "Cabinets de spécialité",
    description:
      "Dossier patient structuré, documents médicaux, demandes d'examens et lettres de liaison à la vitesse de la consultation.",
    products: ["nextoubib"],
    icon: Users,
    tone: "nextoubib",
  },
];
