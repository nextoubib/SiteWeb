import type { LucideIcon } from "lucide-react";

export type ProductFamily = "radiologie" | "medecine";

export type ProductId = "nexrad-ai" | "nexrad-ris" | "nexrad-bridge" | "nextoubib";

export type Product = {
  id: ProductId;
  name: string;
  family: ProductFamily;
  href: string;
  /** One-line marketing promise. */
  tagline: string;
  /** Short description for cards and menus. */
  description: string;
  /** Longer description for hero sections. */
  intro: string;
  icon: LucideIcon;
  /** Visual accent: radiology (blue), ai (teal) or nextoubib (green). */
  tone: "radiology" | "ai" | "nextoubib";
  highlights: string[];
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  external?: boolean;
};

export type NavGroup = {
  label: string;
  items: NavLink[];
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type WorkflowStep = {
  label: string;
  description?: string;
  icon: LucideIcon;
};

export type FaqItem = {
  question: string;
  answer: string;
};
