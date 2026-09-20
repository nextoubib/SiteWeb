import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Cable, Lock, Mic, Network, QrCode } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductGrid } from "@/components/products/product-card";
import { EcosystemDiagram } from "@/components/diagrams/ecosystem-diagram";
import { WorkflowDiagram } from "@/components/diagrams/workflow-diagram";
import { ReportMockup } from "@/components/diagrams/report-mockup";
import { NextoubibWorkflow } from "@/components/diagrams/nextoubib-workflow";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { StandardsCloud } from "@/components/sections/standards-cloud";
import { CTASection } from "@/components/sections/cta-section";
import { FAQ } from "@/components/sections/faq";
import { Disclaimer } from "@/components/sections/disclaimer";
import { Reveal } from "@/components/animations/reveal";
import { products } from "@/data/products";
import { radiologyWorkflow } from "@/data/radiology";
import { homeFaq } from "@/data/faq";
import { createMetadata } from "@/lib/seo";
import { siteConfig, SECURITY_STATEMENT } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

const howItWorks = [
  {
    title: "Dictez.",
    description:
      "À la voix, dans Nexrad AI, Nexrad RIS, Nexrad Bridge ou Nextoubib. Quatre modes adaptent le niveau d'intervention de l'IA.",
    icon: Mic,
  },
  {
    title: "Relisez.",
    description:
      "Le compte rendu ou la consultation est structuré, enrichi si vous le souhaitez, et présenté pour relecture.",
    icon: Cable,
  },
  {
    title: "Validez.",
    description:
      "Le professionnel de santé valide, signe et diffuse. Il conserve la responsabilité et la décision finale.",
    icon: Lock,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="NEXRAD Healthcare AI"
        title="L'intelligence qui redonne du temps aux médecins."
        description={siteConfig.description}
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/solutions">
                Découvrir nos solutions
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/demo">
                <Calendar />
                Demander une démonstration
              </Link>
            </Button>
          </>
        }
        visual={<ReportMockup className="mx-auto max-w-lg lg:max-w-none" />}
      />

      {/* Ecosystem */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="L'écosystème"
          title="Une marque, deux familles, un même moteur d'intelligence."
          description="NEXRAD est la marque ombrelle d'une plateforme radiologique complète et d'un copilote clinique pour les médecins."
          align="center"
        />
        <Reveal className="mt-12">
          <EcosystemDiagram />
        </Reveal>
      </Section>

      {/* Products */}
      <Section>
        <SectionHeading
          eyebrow="Produits"
          title="Quatre produits, conçus pour la pratique réelle."
          description="Chaque produit se déploie seul ou avec les autres. Le compte rendu, le dossier patient et le workflow restent au centre."
        />
        <div className="mt-12">
          <ProductGrid products={products} />
        </div>
      </Section>

      {/* How it works */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-16">
          <SectionHeading
            eyebrow="Voice-first"
            title="Dictez. Relisez. Validez."
            description="La voix est l'interface principale. L'IA structure, le praticien décide."
          >
            <div className="mt-6">
              <Disclaimer />
            </div>
          </SectionHeading>
          <FeatureGrid features={howItWorks} columns={3} tone="ai" compact />
        </div>
      </Section>

      {/* Radiology workflow */}
      <Section>
        <SectionHeading
          eyebrow="Radiologie"
          title="Du patient au compte rendu, un seul workflow."
          description="Nexrad RIS orchestre le parcours, le PACS et le viewer servent les images, Nexrad AI ou Bridge génèrent le compte rendu, le radiologue valide."
        />
        <Reveal className="mt-10">
          <WorkflowDiagram
            steps={radiologyWorkflow}
            highlight={[1, 2, 6, 8]}
            ariaLabel="Workflow radiologique NEXRAD"
          />
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <Link href="/radiologie">
              Découvrir la radiologie
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/radiologie/ai">Les quatre modes de Nexrad AI</Link>
          </Button>
        </div>
      </Section>

      {/* Nextoubib teaser */}
      <Section tone="nextoubib">
        <SectionHeading
          eyebrow="Médecine · Nextoubib"
          title="Votre smartphone devient le scanner de votre cabinet."
          description="Avec QR Scan, bilans, ECG et documents externes rejoignent le dossier patient en quelques secondes. Nextoubib peut ensuite les traiter."
        >
          <div className="mt-4">
            <Badge variant="nextoubib">
              <QrCode />
              QR Scan
            </Badge>
          </div>
        </SectionHeading>
        <Reveal className="mt-12">
          <NextoubibWorkflow />
        </Reveal>
        <div className="mt-10">
          <Button asChild variant="nextoubib">
            <Link href="/nextoubib">
              Découvrir Nextoubib
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Technology */}
      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Technologie"
            tone="inverted"
            title="Standards ouverts, intégration sans rupture."
            description="DICOM pour les images et la worklist, HL7 pour les échanges avec le système d'information, Bridge pour vos logiciels installés."
          >
            <p className="mt-6 flex items-start gap-3 text-sm text-navy-muted">
              <Lock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              {SECURITY_STATEMENT}
            </p>
            <div className="mt-8">
              <Button asChild variant="inverted">
                <Link href="/technology">
                  <Network />
                  Voir la technologie
                </Link>
              </Button>
            </div>
          </SectionHeading>
          <div className="rounded-2xl border border-navy-border bg-navy-soft p-4 sm:p-6">
            <StandardsCloud className="lg:grid-cols-2" />
          </div>
        </div>
      </Section>

      <FAQ items={homeFaq} />
      <CTASection />
    </>
  );
}
