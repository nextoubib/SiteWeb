import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Compass,
  HeartHandshake,
  Lightbulb,
  Stethoscope,
  Target,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { EcosystemDiagram } from "@/components/diagrams/ecosystem-diagram";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/animations/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "À propos — vision, mission et origine médicale de NEXRAD",
  description:
    "NEXRAD est né dans la pratique radiologique : une nouvelle génération de logiciels médicaux conçue par des praticiens, pour des praticiens.",
  path: "/about",
});

const values = [
  {
    title: "Vision",
    description:
      "Redonner du temps médical aux professionnels de santé grâce à des logiciels qui comprennent leur workflow.",
    icon: Compass,
  },
  {
    title: "Mission",
    description:
      "Réunir intelligence artificielle, dictée, dossier patient et workflow clinique dans une plateforme cohérente.",
    icon: Target,
  },
  {
    title: "Origine médicale",
    description:
      "Une solution logicielle de nouvelle génération conçue par des radiologues, pour des radiologues, puis étendue aux cliniciens avec Nextoubib.",
    icon: Stethoscope,
  },
  {
    title: "Connaissance terrain",
    description:
      "Chaque fonction naît d'un besoin observé en salle de lecture ou en consultation : worklist, injection dans le PACS, QR Scan.",
    icon: HeartHandshake,
  },
  {
    title: "Innovation santé",
    description:
      "Une IA utile et explicite : quatre modes de dictée, assistance au diagnostic différentiel, OCR médical, toujours sous validation du praticien.",
    icon: Lightbulb,
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "À propos", href: "/about" }]} />
      <Hero
        eyebrow="À propos"
        title="Conçu dans la pratique, pour la pratique."
        description="NEXRAD est né dans la radiologie. La plateforme s'est construite autour d'une conviction : le logiciel doit s'adapter au professionnel de santé, pas l'inverse."
        actions={
          <Button asChild size="lg">
            <Link href="/demo">
              <Calendar />
              Rencontrer l&apos;équipe
            </Link>
          </Button>
        }
      />

      <Section tone="surface">
        <SectionHeading
          eyebrow="Ce qui nous guide"
          title="Vision, mission, origine."
          description="Des principes simples, appliqués à chaque produit de l'écosystème."
        />
        <div className="mt-12">
          <FeatureGrid features={values} columns={3} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="L'écosystème"
          title="Une marque ombrelle, deux familles de produits."
          align="center"
        />
        <Reveal className="mt-12">
          <EcosystemDiagram />
        </Reveal>
      </Section>

      <CTASection
        title="Parlons de votre pratique."
        description="Radiologie ou médecine, cabinet ou établissement : nous vous présentons NEXRAD sur votre workflow."
        primary={{ label: "Demander une démonstration", href: "/demo" }}
        secondary={{ label: "Voir les solutions", href: "/solutions" }}
      />
    </>
  );
}
