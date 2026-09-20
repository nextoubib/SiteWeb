import {
  Cable,
  FileAudio,
  LayoutDashboard,
  Stethoscope,
  Users,
  Cpu,
  BadgeEuro,
  BookOpen,
  Building2,
  Calendar,
} from "lucide-react";
import type { NavGroup, NavLink } from "@/types";

export const productMenu: { radiologie: NavGroup; medecine: NavGroup } = {
  radiologie: {
    label: "Radiologie",
    items: [
      {
        label: "Nexrad AI",
        href: "/radiologie/ai",
        description: "Dictée et comptes rendus structurés par IA.",
        icon: FileAudio,
      },
      {
        label: "Nexrad RIS",
        href: "/radiologie/ris",
        description: "Le cockpit numérique du centre d'imagerie.",
        icon: LayoutDashboard,
      },
      {
        label: "Nexrad Bridge",
        href: "/radiologie/bridge",
        description: "NEXRAD dans votre PACS, sans changer de PACS.",
        icon: Cable,
      },
    ],
  },
  medecine: {
    label: "Médecine",
    items: [
      {
        label: "Nextoubib",
        href: "/nextoubib",
        description: "Le copilote intelligent du médecin.",
        icon: Stethoscope,
      },
    ],
  },
};

export const productMenuSecondary: NavLink[] = [
  {
    label: "Toute la radiologie",
    href: "/radiologie",
    description: "AI, RIS, Bridge, PACS, viewer, DICOM, HL7.",
    icon: Building2,
  },
  {
    label: "Demander une démonstration",
    href: "/demo",
    description: "Une présentation adaptée à votre pratique.",
    icon: Calendar,
  },
];

export const mainNav: NavLink[] = [
  { label: "Solutions", href: "/solutions", icon: Users },
  { label: "Technologie", href: "/technology", icon: Cpu },
  { label: "Tarifs", href: "/pricing", icon: BadgeEuro },
  { label: "Ressources", href: "/resources", icon: BookOpen },
];

export const footerGroups: NavGroup[] = [
  {
    label: "Radiologie",
    items: [
      { label: "Vue d'ensemble", href: "/radiologie" },
      { label: "Nexrad AI", href: "/radiologie/ai" },
      { label: "Nexrad RIS", href: "/radiologie/ris" },
      { label: "Nexrad Bridge", href: "/radiologie/bridge" },
    ],
  },
  {
    label: "Médecine",
    items: [
      { label: "Nextoubib", href: "/nextoubib" },
      { label: "Solutions par profil", href: "/solutions" },
      { label: "Demander une démo", href: "/demo" },
    ],
  },
  {
    label: "Entreprise",
    items: [
      { label: "Technologie", href: "/technology" },
      { label: "Tarifs", href: "/pricing" },
      { label: "Ressources", href: "/resources" },
      { label: "À propos", href: "/about" },
    ],
  },
];

/** Every internal route exposed by the site — used by the sitemap and tests. */
export const siteRoutes = [
  "/",
  "/radiologie",
  "/radiologie/ai",
  "/radiologie/ris",
  "/radiologie/bridge",
  "/nextoubib",
  "/solutions",
  "/technology",
  "/pricing",
  "/demo",
  "/resources",
  "/about",
] as const;

export type SiteRoute = (typeof siteRoutes)[number];
