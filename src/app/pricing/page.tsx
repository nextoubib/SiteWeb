import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { pricingPlans } from "@/data/pricing";
import { pricingFaq } from "@/data/faq";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Tarifs — Nexrad AI, Nexrad RIS, Nextoubib et offre établissement",
  description:
    "Des offres adaptées au radiologue indépendant, au centre d'imagerie, au médecin et à l'établissement. Tarification sur devis selon votre configuration.",
  path: "/pricing",
});

const badgeByTone = {
  radiology: "primary",
  ai: "ai",
  nextoubib: "nextoubib",
  neutral: "neutral",
} as const;

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Tarifs", href: "/pricing" }]} />
      <Hero
        eyebrow="Tarifs"
        title="Une offre par pratique, un devis par configuration."
        description="Le périmètre varie fortement d'un radiologue indépendant à un établissement multi-sites. Chaque offre est établie sur devis après qualification de votre workflow."
      />

      <Section tone="surface">
        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <li
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-xl border bg-background p-6 shadow-card",
                plan.highlighted
                  ? "border-primary/40 shadow-[0_0_0_4px_rgb(24_73_198/0.08)]"
                  : "border-border",
              )}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white">
                  Le plus complet
                </span>
              ) : null}
              <Badge variant={badgeByTone[plan.tone]} className="w-fit">
                {plan.audience}
              </Badge>
              <h2 className="mt-4 text-xl font-bold tracking-tight text-foreground">
                {plan.name}
              </h2>
              <p className="mt-1 text-sm text-muted">{plan.description}</p>
              <p className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground">
                {plan.price}
              </p>
              {plan.priceNote ? (
                <p className="mt-1 text-xs text-muted">{plan.priceNote}</p>
              ) : null}
              <ul className="mt-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-strong"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-success"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button
                  asChild
                  className="w-full"
                  variant={
                    plan.tone === "nextoubib"
                      ? "nextoubib"
                      : plan.highlighted
                        ? "primary"
                        : "secondary"
                  }
                >
                  <Link href={plan.cta.href}>
                    {plan.cta.label}
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Ce qui influence le devis"
          title="Quatre variables, une proposition claire."
          align="center"
        />
        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Praticiens",
              text: "Nombre de radiologues ou médecins utilisateurs.",
            },
            {
              title: "Sites et salles",
              text: "Salles, modalités, cabinets, établissements.",
            },
            {
              title: "Intégrations",
              text: "PACS existant, RIS tiers, HIS via HL7, Word.",
            },
            { title: "Accompagnement", text: "Déploiement, formation, support dédié." },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-border bg-background p-5 shadow-card"
            >
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <FAQ items={pricingFaq} title="Questions sur les tarifs" tone="surface" />
      <CTASection
        title="Obtenez un devis adapté à votre configuration."
        description="La démonstration qualifie votre workflow et vos intégrations ; le devis suit."
      />
    </>
  );
}
