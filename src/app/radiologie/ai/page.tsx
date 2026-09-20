import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Cable, Check } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { AIWorkflow } from "@/components/diagrams/ai-workflow";
import { ReportMockup } from "@/components/diagrams/report-mockup";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Disclaimer } from "@/components/sections/disclaimer";
import { CTASection } from "@/components/sections/cta-section";
import { FAQ } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/animations/reveal";
import { productsById } from "@/data/products";
import {
  aiCapabilities,
  calculators,
  echoQuickForms,
  reportTemplates,
} from "@/data/radiology";
import { aiFaq } from "@/data/faq";
import { createMetadata } from "@/lib/seo";
import { softwareJsonLd } from "@/lib/json-ld";

const product = productsById["nexrad-ai"];

export const metadata: Metadata = createMetadata({
  title: "Nexrad AI — Dictée radiologique et comptes rendus structurés",
  description:
    "Quatre modes de dictée (Brut, Grand titre, Secrétaire, Mixte), bibliothèque de modèles, assistance au diagnostic différentiel, RECIST, Cheson et calculateurs. Dictez. Relisez. Validez.",
  path: product.href,
});

export default function NexradAIPage() {
  return (
    <>
      <JsonLd
        data={softwareJsonLd({
          name: product.name,
          description: product.description,
          path: product.href,
        })}
      />
      <Breadcrumbs
        items={[
          { label: "Radiologie", href: "/radiologie" },
          { label: product.name, href: product.href },
        ]}
      />
      <Hero
        eyebrow="Nexrad AI"
        badge={<Badge variant="ai">Radiologie · Intelligence artificielle</Badge>}
        title={product.tagline}
        description={product.intro}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/demo?produit=nexrad-ai">
                <Calendar />
                Demander une démonstration
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/radiologie/bridge">
                <Cable />
                L&apos;utiliser dans mon PACS
              </Link>
            </Button>
          </>
        }
        visual={<ReportMockup className="mx-auto max-w-lg lg:max-w-none" />}
      />

      <Section tone="surface" id="modes">
        <SectionHeading
          eyebrow="Quatre modes"
          title="Vous choisissez le niveau d'intervention de l'IA."
          description="Du mot à mot au compte rendu construit à partir de quelques observations, chaque mode est explicite sur ce qu'il fait — et sur ce qu'il ne fait pas."
          align="center"
        />
        <Reveal className="mt-12">
          <AIWorkflow />
        </Reveal>
        <Disclaimer className="mt-10" />
      </Section>

      <Section id="outils">
        <SectionHeading
          eyebrow="Au-delà de la dictée"
          title="Assistance au diagnostic, modèles, suivi oncologique, calculateurs."
          description="Nexrad AI accompagne le radiologue avant, pendant et après la rédaction."
        />
        <div className="mt-12">
          <FeatureGrid features={aiCapabilities} columns={3} tone="ai" />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="eyebrow text-primary">Modèles</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Bibliothèque par modalité
            </h2>
            <p className="mt-3 text-sm text-muted">
              Modèles normaux et pathologiques, adaptables à votre style de rédaction.
            </p>
            <ul className="mt-6 space-y-3">
              {reportTemplates.map((template) => (
                <li
                  key={template.modality}
                  className="rounded-lg border border-border bg-background p-4"
                >
                  <p className="font-semibold text-foreground">{template.modality}</p>
                  <p className="mt-1 text-xs text-muted">
                    {template.examples.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-primary">Calculateurs</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Intégrés au compte rendu
            </h2>
            <p className="mt-3 text-sm text-muted">
              Les calculs sont réalisés dans la rédaction, sans changer d&apos;outil.
            </p>
            <ul className="mt-6 space-y-2">
              {calculators.map((calc) => (
                <li
                  key={calc.name}
                  className="flex items-start gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-success"
                  />
                  <span>
                    <span className="font-medium text-foreground">{calc.name}</span>
                    <span className="block text-xs text-muted">{calc.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-primary">Mode Écho rapide</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Formulaires rapides
            </h2>
            <p className="mt-3 text-sm text-muted">
              Pour les examens à forte récurrence, un formulaire structuré remplace la
              dictée libre.
            </p>
            <ul className="mt-6 space-y-3">
              {echoQuickForms.map((form) => (
                <li
                  key={form.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
                >
                  <p className="font-semibold text-foreground">{form.name}</p>
                  <Badge variant="primary">{form.standard}</Badge>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-border bg-background p-4">
              <p className="font-semibold text-foreground">Suivi oncologique</p>
              <p className="mt-1 text-xs text-muted">
                RECIST et Cheson : mesure, comparaison, suivi et classification de la
                réponse.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <FAQ items={aiFaq} title="Questions sur Nexrad AI" />
      <CTASection
        title="Testez les quatre modes sur vos propres examens."
        description="Une démonstration Nexrad AI, seule ou avec Nexrad Bridge pour l'intégrer à votre PACS."
        primary={{ label: "Demander une démonstration", href: "/demo?produit=nexrad-ai" }}
        secondary={{ label: "Voir Nexrad Bridge", href: "/radiologie/bridge" }}
      />
    </>
  );
}
