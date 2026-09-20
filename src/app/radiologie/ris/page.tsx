import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { DashboardMockup } from "@/components/diagrams/dashboard-mockup";
import { WorkflowDiagram } from "@/components/diagrams/workflow-diagram";
import { HL7Diagram } from "@/components/diagrams/hl7-diagram";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTASection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/animations/reveal";
import { productsById } from "@/data/products";
import { pacsFeatures, risModules, viewerFeatures, worklistFlow } from "@/data/radiology";
import { createMetadata } from "@/lib/seo";
import { softwareJsonLd } from "@/lib/json-ld";

const product = productsById["nexrad-ris"];

export const metadata: Metadata = createMetadata({
  title: "Nexrad RIS — Le cockpit numérique de votre centre d'imagerie",
  description:
    "Accueil, admission, rendez-vous, planning, salles, modalités, dossier patient, facturation, caisse, stock, statistiques et dictée intégrée. Worklist DICOM, PACS, viewer web et HL7.",
  path: product.href,
});

export default function NexradRISPage() {
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
        eyebrow="Nexrad RIS"
        badge={<Badge variant="primary">Radiologie · Centre d&apos;imagerie</Badge>}
        title="Le cockpit numérique de votre centre d'imagerie."
        description={product.intro}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/demo?produit=nexrad-ris">
                <Calendar />
                Demander une démonstration
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#interoperabilite">
                Interopérabilité HL7
                <ArrowRight />
              </Link>
            </Button>
          </>
        }
        visual={<DashboardMockup />}
      />

      <Section tone="surface">
        <SectionHeading
          eyebrow="Modules"
          title="Tout le centre, dans un seul écran."
          description="De l'accueil à la facturation, chaque module partage le même dossier patient et le même planning."
        />
        <div className="mt-12">
          <FeatureGrid features={risModules} columns={3} compact />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Worklist DICOM"
          title="Aucune ressaisie sur les modalités."
          description="Le RIS publie la worklist DICOM MWL ; scanner, IRM, radiographie et autres modalités compatibles récupèrent l'identité du patient et l'examen planifié."
          align="center"
        />
        <Reveal className="mt-12">
          <WorkflowDiagram
            steps={worklistFlow}
            highlight={[0, 1]}
            ariaLabel="Workflow worklist DICOM"
            className="lg:justify-center"
          />
        </Reveal>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">PACS</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Stockage, examens, worklist, intégration.
            </h2>
            <p className="mt-3 text-muted">
              Architecture actuelle ou potentielle basée sur le serveur open source
              Orthanc lorsque cela correspond au déploiement. Orthanc est un projet
              indépendant, cité avec attribution.
            </p>
            <div className="mt-8">
              <FeatureGrid features={pacsFeatures} columns={2} compact />
            </div>
          </div>
          <div>
            <p className="eyebrow text-primary">Viewer web</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Lire, comparer, dicter sans changer d&apos;écran.
            </h2>
            <p className="mt-3 text-muted">
              Viewer web basé sur OHIF lorsque l&apos;architecture le permet. Un pont vers
              RadiAnt est possible lorsqu&apos;il est réellement supporté.
            </p>
            <div className="mt-8">
              <FeatureGrid features={viewerFeatures} columns={2} compact />
            </div>
          </div>
        </div>
      </Section>

      <Section id="interoperabilite">
        <SectionHeading
          eyebrow="Interopérabilité"
          title="HL7 : ADT, ORM, ORU."
          description="Nexrad RIS dialogue avec le système d'information hospitalier et les logiciels tiers grâce aux messages HL7, et avec les modalités et le PACS grâce à DICOM."
        />
        <Reveal className="mt-12">
          <HL7Diagram />
        </Reveal>
      </Section>

      <CTASection
        title="Pilotez votre centre depuis un seul cockpit."
        description="Une démonstration Nexrad RIS avec votre organisation : salles, modalités, flux patients et facturation."
        primary={{
          label: "Demander une démonstration",
          href: "/demo?produit=nexrad-ris",
        }}
        secondary={{ label: "Solutions par profil", href: "/solutions" }}
      />
    </>
  );
}
