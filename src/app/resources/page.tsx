import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calculator,
  HelpCircle,
  Library,
  PlaySquare,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { IconTile } from "@/components/ui/icon-tile";
import { CTASection } from "@/components/sections/cta-section";
import { calculators, reportTemplates } from "@/data/radiology";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Ressources — documentation, tutoriels, calculateurs, modèles",
  description:
    "Documentation produit, tutoriels vidéo, calculateurs radiologiques, modèles de comptes rendus et questions fréquentes sur les solutions NEXRAD.",
  path: "/resources",
});

const resources = [
  {
    title: "Tutoriels vidéo",
    description:
      "Prise en main de Nexrad AI, RIS, Bridge et Nextoubib sur la chaîne YouTube NEXRAD.",
    href: siteConfig.youtube,
    external: true,
    icon: PlaySquare,
  },
  {
    title: "Documentation",
    description:
      "Guides d'utilisation et documentation technique, accessibles depuis l'application.",
    href: siteConfig.appUrl,
    external: true,
    icon: BookOpen,
  },
  {
    title: "Calculateurs",
    description:
      "Volume d'organe, washout surrénalien, MDRD, PSA Density, RECIST, Cheson.",
    href: "/radiologie/ai#outils",
    icon: Calculator,
  },
  {
    title: "Modèles de comptes rendus",
    description:
      "Bibliothèque normaux / pathologiques pour scanner, IRM, échographie et radiographie.",
    href: "/radiologie/ai#outils",
    icon: Library,
  },
  {
    title: "Questions fréquentes",
    description: "Modes de dictée, intégration PACS, QR Scan, tarification.",
    href: "/pricing#faq",
    icon: HelpCircle,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Ressources", href: "/resources" }]} />
      <Hero
        eyebrow="Ressources"
        title="Comprendre, prendre en main, aller plus loin."
        description="Tutoriels, documentation, calculateurs et modèles pour tirer le meilleur de l'écosystème NEXRAD."
      />

      <Section tone="surface">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => {
            const Comp = item.external ? "a" : Link;
            const extra = item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <li key={item.title}>
                <Comp
                  href={item.href}
                  {...extra}
                  className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 shadow-card transition-[border-color,box-shadow] hover:border-border-strong hover:shadow-elevated focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <IconTile icon={item.icon} />
                  <p className="mt-4 flex items-center gap-1.5 text-base font-semibold text-foreground">
                    {item.title}
                    {item.external ? (
                      <ArrowUpRight aria-hidden="true" className="size-4 text-muted" />
                    ) : null}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary">
                    {item.external ? "Ouvrir" : "Consulter"}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Comp>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Calculateurs" title="Disponibles dans Nexrad AI" />
            <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-background">
              {calculators.map((calc) => (
                <li
                  key={calc.name}
                  className="flex items-center justify-between gap-4 px-5 py-3.5"
                >
                  <p className="font-medium text-foreground">{calc.name}</p>
                  <p className="text-right text-sm text-muted">{calc.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Modèles" title="Comptes rendus par modalité" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {reportTemplates.map((template) => (
                <li
                  key={template.modality}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <p className="font-semibold text-foreground">{template.modality}</p>
                  <p className="mt-1 text-xs text-muted">
                    {template.examples.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
