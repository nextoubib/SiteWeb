import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Download } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { BridgeDiagram } from "@/components/diagrams/bridge-diagram";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Steps } from "@/components/sections/steps";
import { CTASection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/animations/reveal";
import { productsById } from "@/data/products";
import { bridgeFeatures, bridgeSteps, bridgeTargets } from "@/data/radiology";
import { createMetadata } from "@/lib/seo";
import { softwareJsonLd } from "@/lib/json-ld";

const product = productsById["nexrad-bridge"];

export const metadata: Metadata = createMetadata({
  title: "Nexrad Bridge — NEXRAD dans votre PACS, sans changer de PACS",
  description:
    "Application desktop légère, always-on-top, raccourcis globaux, capture, dictée, génération et injection automatique du compte rendu dans votre PACS, votre RIS tiers ou Microsoft Word.",
  path: product.href,
});

export default function NexradBridgePage() {
  return (
    <>
      <JsonLd
        data={softwareJsonLd({
          name: product.name,
          description: product.description,
          path: product.href,
          operatingSystem: "Windows",
        })}
      />
      <Breadcrumbs
        items={[
          { label: "Radiologie", href: "/radiologie" },
          { label: product.name, href: product.href },
        ]}
      />
      <Hero
        eyebrow="Nexrad Bridge"
        badge={<Badge variant="primary">Radiologie · Application desktop</Badge>}
        title="NEXRAD dans votre PACS, sans changer de PACS."
        description={product.intro}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/demo?produit=nexrad-bridge">
                <Calendar />
                Demander une démonstration
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/radiologie/ai">
                <Download />
                Les modes de dictée
              </Link>
            </Button>
          </>
        }
        visual={
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <BridgeDiagram />
          </div>
        }
      />

      <Section tone="surface">
        <SectionHeading
          eyebrow="Fonctionnalités"
          title="Une application légère qui reste au-dessus de votre écran."
          description="Bridge ne remplace rien : il ajoute la dictée IA à ce que vous utilisez déjà."
        />
        <div className="mt-12">
          <FeatureGrid features={bridgeFeatures} columns={4} compact />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Comment ça marche"
              title="Quatre gestes, un compte rendu injecté."
              description="Le radiologue ne quitte jamais son viewer."
            />
            <Reveal className="mt-10">
              <Steps steps={bridgeSteps} />
            </Reveal>
          </div>
          <div>
            <SectionHeading
              eyebrow="Compatibilité"
              title="Logiciels cibles."
              description="L'injection fonctionne dans tout champ texte actif ; les intégrations dédiées dépendent de la compatibilité du logiciel."
            />
            <ul className="mt-10 divide-y divide-border rounded-xl border border-border bg-background">
              {bridgeTargets.map((target) => (
                <li
                  key={target.name}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
                  <p className="font-semibold text-foreground">{target.name}</p>
                  <p className="text-right text-sm text-muted">{target.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection
        title="Gardez votre PACS. Ajoutez NEXRAD."
        description="Une démonstration Nexrad Bridge sur votre poste de lecture, avec vos logiciels."
        primary={{
          label: "Demander une démonstration",
          href: "/demo?produit=nexrad-bridge",
        }}
        secondary={{ label: "Voir Nexrad AI", href: "/radiologie/ai" }}
      />
    </>
  );
}
