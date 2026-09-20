import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Globe2 } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PatientTimeline } from "@/components/diagrams/patient-timeline";
import { NextoubibWorkflow } from "@/components/diagrams/nextoubib-workflow";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Disclaimer } from "@/components/sections/disclaimer";
import { CTASection } from "@/components/sections/cta-section";
import { FAQ } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/animations/reveal";
import { IconTile } from "@/components/ui/icon-tile";
import { productsById } from "@/data/products";
import {
  cabinetModules,
  documentTypes,
  nextoubibPillars,
  ocrSources,
  prescriptionCountries,
  triageVitals,
} from "@/data/nextoubib";
import { nextoubibFaq } from "@/data/faq";
import { createMetadata } from "@/lib/seo";
import { softwareJsonLd } from "@/lib/json-ld";

const product = productsById.nextoubib;

export const metadata: Metadata = createMetadata({
  title: "Nextoubib — Le copilote intelligent du médecin",
  description:
    "Dossier médical informatisé, consultation par dictée, ordonnances et documents assistés, QR Scan, OCR médical, triage infirmier et gestion de cabinet. Moins d'administratif. Plus de médecine.",
  path: product.href,
});

export default function NextoubibPage() {
  return (
    <>
      <JsonLd
        data={softwareJsonLd({
          name: product.name,
          description: product.description,
          path: product.href,
        })}
      />
      <Breadcrumbs items={[{ label: "Nextoubib", href: "/nextoubib" }]} />
      <Hero
        tone="nextoubib"
        eyebrow="Nextoubib · Médecine"
        badge={<Badge variant="nextoubib">Le copilote intelligent du médecin</Badge>}
        title="Moins d'administratif. Plus de médecine."
        description={product.intro}
        actions={
          <>
            <Button asChild size="lg" variant="nextoubib">
              <Link href="/demo?produit=nextoubib">
                <Calendar />
                Demander une démonstration
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#qr-scan">
                Voir le QR Scan
                <ArrowRight />
              </Link>
            </Button>
          </>
        }
        visual={<PatientTimeline className="mx-auto max-w-lg lg:max-w-none" />}
      />

      <Section tone="surface">
        <SectionHeading
          eyebrow="Ce que Nextoubib fait pour vous"
          title="La consultation est dictée. Le dossier s'écrit."
          description="Le médecin parle, l'IA structure. Les documents du quotidien sont générés avec sa validation, et les documents externes rejoignent le dossier par QR Scan."
        />
        <div className="mt-12">
          <FeatureGrid features={nextoubibPillars} columns={3} tone="nextoubib" />
        </div>
        <Disclaimer className="mt-10" />
      </Section>

      <Section id="qr-scan">
        <SectionHeading
          eyebrow="QR Scan"
          title="Votre smartphone devient le scanner de votre cabinet."
          description="Six étapes, aucun câble, aucun e-mail : le document photographié rejoint directement le dossier patient ouvert."
        />
        <Reveal className="mt-12">
          <NextoubibWorkflow />
        </Reveal>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Ordonnances"
              title="Assistance à la prescription, décision du médecin."
              description="La génération assistée des ordonnances tient compte du contexte patient et des référentiels disponibles. Jamais une prescription autonome : le médecin reste décisionnaire."
            />
            <div className="mt-8 rounded-xl border border-border bg-background p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Globe2 aria-hidden="true" className="size-4 text-nextoubib" />
                Pays envisagés ou pris en charge selon le produit
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {prescriptionCountries.map((country) => (
                  <li key={country}>
                    <Badge variant="nextoubib">{country}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Documents médicaux"
              title="Les documents du quotidien, générés avec votre validation."
              description="Chaque document est préparé à partir du dossier et de la consultation, puis relu et signé par le médecin."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {documentTypes.map((doc) => (
                <li
                  key={doc}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground shadow-card"
                >
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="OCR et vision IA"
              title="Extraction assistée depuis vos documents."
              description="Les valeurs sont extraites et rapprochées de l'historique du patient. Assistance à l'interprétation, jamais diagnostic automatique."
            />
            <div className="mt-8">
              <FeatureGrid features={ocrSources} columns={2} tone="nextoubib" compact />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Triage infirmier"
              title="Les constantes avant l'entrée du patient."
              description="L'infirmier(ère) saisit les constantes et le motif ; le médecin les retrouve immédiatement dans le dossier."
            />
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {triageVitals.map((vital) => (
                <li
                  key={vital.label}
                  className="flex flex-col items-start gap-3 rounded-lg border border-border bg-background p-4 shadow-card"
                >
                  <IconTile icon={vital.icon} tone="nextoubib" size="sm" />
                  <p className="text-sm font-medium text-foreground">{vital.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Gestion du cabinet"
          title="Le cabinet, pas seulement la consultation."
          description="Agenda, patients, facturation, actes, stock et statistiques, lorsque ces modules sont disponibles dans votre configuration."
        />
        <div className="mt-12">
          <FeatureGrid features={cabinetModules} columns={4} tone="nextoubib" compact />
        </div>
      </Section>

      <FAQ items={nextoubibFaq} title="Questions sur Nextoubib" />
      <CTASection
        tone="nextoubib"
        title="Voir Nextoubib sur une vraie consultation."
        description="Une démonstration pour médecins généralistes et spécialistes, avec votre organisation de cabinet."
        primary={{ label: "Demander une démonstration", href: "/demo?produit=nextoubib" }}
        secondary={{ label: "Solutions par profil", href: "/solutions" }}
      />
    </>
  );
}
