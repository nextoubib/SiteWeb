import {
  Cable,
  Database,
  FileAudio,
  FileText,
  Layers,
  LayoutDashboard,
  Mic,
  MonitorPlay,
  Network,
  QrCode,
  ScanLine,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type EcosystemNode = {
  label: string;
  icon: LucideIcon;
  href?: string;
  /** Product nodes are rendered larger than capability nodes. */
  kind: "product" | "capability";
};

export type EcosystemBranch = {
  id: "radiologie" | "medecine";
  label: string;
  title: string;
  description: string;
  href: string;
  nodes: EcosystemNode[];
};

export const ecosystem: EcosystemBranch[] = [
  {
    id: "radiologie",
    label: "Radiologie",
    title: "La plateforme radiologique complète",
    description:
      "Dictée IA, système d'information radiologique, intégration desktop, PACS, viewer et interopérabilité.",
    href: "/radiologie",
    nodes: [
      { label: "Nexrad AI", icon: FileAudio, href: "/radiologie/ai", kind: "product" },
      {
        label: "Nexrad RIS",
        icon: LayoutDashboard,
        href: "/radiologie/ris",
        kind: "product",
      },
      {
        label: "Nexrad Bridge",
        icon: Cable,
        href: "/radiologie/bridge",
        kind: "product",
      },
      { label: "PACS", icon: Database, kind: "capability" },
      { label: "Viewer", icon: MonitorPlay, kind: "capability" },
      { label: "DICOM", icon: Layers, kind: "capability" },
      { label: "HL7", icon: Network, kind: "capability" },
    ],
  },
  {
    id: "medecine",
    label: "Médecine",
    title: "Le copilote du médecin",
    description:
      "Dossier médical, consultation par dictée, documents, QR Scan et assistance clinique pour les cliniciens.",
    href: "/nextoubib",
    nodes: [
      { label: "Nextoubib", icon: Stethoscope, href: "/nextoubib", kind: "product" },
      { label: "Dossier médical", icon: FileText, kind: "capability" },
      { label: "Dictée", icon: Mic, kind: "capability" },
      { label: "Documents", icon: ScanLine, kind: "capability" },
      { label: "QR Scan", icon: QrCode, kind: "capability" },
      { label: "Assistance clinique", icon: Sparkles, kind: "capability" },
    ],
  },
];
