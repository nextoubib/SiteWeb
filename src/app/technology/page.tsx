import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Lock } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { HL7Diagram } from "@/components/diagrams/hl7-diagram";
import { StandardsCloud } from "@/components/sections/standards-cloud";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/animations/reveal";
import { technologyPillars } from "@/data/technology";
import { createMetadata } from "@/lib/seo";
import { SECURITY_STATEMENT } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Technologie — IA, voice-first, DICOM, HL7, desktop bridge, sécurité",
  description:
    "Les fondations techniques de NEXRAD : intelligence artificielle appliquée à la sémiologie, interface vocale, interopérabilité DICOM et HL7, application desktop Bridge, architecture web et sécurité.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Technologie", href: "/technology" }]} />
      <Hero
        tone="navy"
        eyebrow="Technologie"
        title="Des standards ouverts, une IA sous contrôle du praticien."
        description="NEXRAD s'appuie sur DICOM, HL7 et une architecture web moderne. L'intelligence artificielle structure et enrichit ; le professionnel de santé valide."
        actions={
          <Button asChild size="lg" variant="inverted">
            <Link href="/demo">
              <Calendar />
              Demander une démonstration
            </Link>
          </Button>
        }
        visual={
          <div className="rounded-2xl border border-navy-border bg-navy-soft p-4 sm:p-6">
            <StandardsCloud className="lg:grid-cols-2" />
          </div>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Fondations"
          title="Huit piliers techniques."
          description="Chaque pilier répond à une contrainte réelle du terrain : parler plutôt que taper, s'intégrer plutôt que remplacer, protéger les données."
        />
        <div className="mt-12">
          <FeatureGrid features={technologyPillars} columns={4} compact />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-16">
          <SectionHeading
            eyebrow="Architecture"
            title="Vos outils, une couche d'intégration, la plateforme."
            description="Bridge, DICOM et HL7 relient vos logiciels installés à la plateforme NEXRAD, sans rupture de workflow."
          />
          <Reveal>
            <ArchitectureDiagram />
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Interopérabilité"
          title="HIS, HL7, RIS, DICOM, modalités et PACS."
          description="Les échanges reposent sur des standards ouverts du système d'information de santé."
        />
        <Reveal className="mt-12">
          <HL7Diagram />
        </Reveal>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Lock aria-hidden="true" className="mx-auto size-8 text-accent" />
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Sécurité et confidentialité
          </h2>
          <p className="mt-4 text-lg text-navy-muted">{SECURITY_STATEMENT}</p>
          <ul className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {[
              {
                title: "Cloisonnement",
                text: "Données de chaque établissement isolées.",
              },
              {
                title: "Contrôle des accès",
                text: "Comptes nominatifs et droits par rôle.",
              },
              { title: "Chiffrement", text: "Échanges chiffrés entre les composants." },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-navy-border bg-navy-soft p-4"
              >
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-navy-muted">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-navy-muted/80">
            Aucune certification n&apos;est revendiquée sur ce site sans preuve
            vérifiable.
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
