import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { ProductGrid } from "@/components/products/product-card";
import { WorkflowDiagram } from "@/components/diagrams/workflow-diagram";
import { HL7Diagram } from "@/components/diagrams/hl7-diagram";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FactStrip } from "@/components/sections/fact-strip";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/animations/reveal";
import { DashboardMockup } from "@/components/diagrams/dashboard-mockup";
import { radiologyProducts } from "@/data/products";
import {
  calculators,
  radiologyFacts,
  radiologyModules,
  radiologyWorkflow,
} from "@/data/radiology";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Radiologie — Nexrad AI, RIS, Bridge, PACS, Viewer, DICOM, HL7",
  description:
    "La plateforme radiologique complète NEXRAD : dictée IA, système d'information radiologique, intégration desktop, PACS, viewer web, worklist DICOM et interopérabilité HL7.",
  path: "/radiologie",
});

export default function RadiologyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Radiologie", href: "/radiologie" }]} />
      <Hero
        eyebrow="Radiologie"
        title="Ce n'est pas un outil de dictée. C'est une plateforme radiologique complète."
        description="Nexrad AI génère le compte rendu, Nexrad RIS pilote le centre, Nexrad Bridge s'intègre à vos logiciels. PACS, viewer, worklist DICOM et HL7 relient le tout."
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/demo?produit=nexrad-ris">
                <Calendar />
                Demander une démonstration
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/radiologie/ai">
                Voir Nexrad AI
                <ArrowRight />
              </Link>
            </Button>
          </>
        }
        visual={<DashboardMockup />}
      />

      <Section tone="surface" padding="compact">
        <FactStrip facts={radiologyFacts} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Trois produits"
          title="Le compte rendu, le centre, l'intégration."
          description="Choisissez le point d'entrée qui correspond à votre pratique. Les trois produits partagent le même moteur Nexrad AI."
        />
        <div className="mt-12">
          <ProductGrid products={radiologyProducts} columns={3} />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Workflow"
          title="Du patient au compte rendu validé."
          description="Chaque étape est couverte : accueil, worklist, acquisition, archivage, lecture, dictée, validation et diffusion."
          align="center"
        />
        <Reveal className="mt-12">
          <WorkflowDiagram
            steps={radiologyWorkflow}
            highlight={[1, 2, 4, 5, 6, 8]}
            ariaLabel="Workflow radiologique"
          />
        </Reveal>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Modules"
          title="PACS, viewer, DICOM, worklist, HL7 et outils radiologiques."
          description="Des briques standard, intégrées au RIS et à la dictée, pour un workflow sans ressaisie."
        />
        <div className="mt-12">
          <FeatureGrid features={radiologyModules} columns={3} />
        </div>
        <p className="mt-6 text-xs leading-relaxed text-muted">
          Orthanc et OHIF sont des projets open source indépendants, cités avec
          attribution ; ils n&apos;appartiennent pas à NEXRAD.
        </p>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Interopérabilité"
          title="Connecté au système d'information hospitalier."
          description="HL7 pour l'identité, les demandes et les résultats ; DICOM pour les images et la worklist."
        />
        <Reveal className="mt-12">
          <HL7Diagram />
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
          <SectionHeading
            eyebrow="Outils radiologiques"
            title="Les calculs, dans le compte rendu."
            description="Six calculateurs intégrés, une bibliothèque de modèles par modalité et le suivi oncologique RECIST et Cheson."
          >
            <div className="mt-8">
              <Button asChild variant="secondary">
                <Link href="/radiologie/ai#outils">
                  Voir les outils de Nexrad AI
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </SectionHeading>
          <ul className="grid gap-3 sm:grid-cols-2">
            {calculators.map((calc) => (
              <li
                key={calc.name}
                className="rounded-lg border border-border bg-background p-4 shadow-card"
              >
                <p className="font-semibold text-foreground">{calc.name}</p>
                <p className="mt-1 text-sm text-muted">{calc.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection
        title="Voir la plateforme sur votre propre workflow."
        description="Radiologue indépendant, centre d'imagerie ou service hospitalier : la démonstration s'adapte à votre organisation."
      />
    </>
  );
}
