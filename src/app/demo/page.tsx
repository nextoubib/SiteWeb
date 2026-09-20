import type { Metadata } from "next";
import { CalendarCheck, MessagesSquare, Route } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { IconTile } from "@/components/ui/icon-tile";
import { DemoForm } from "@/components/forms/demo-form";
import { demoProducts, type DemoProductValue } from "@/data/demo";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Demander une démonstration",
  description:
    "Demandez une démonstration de Nexrad AI, Nexrad RIS, Nexrad Bridge, Nextoubib ou de l'offre établissement, adaptée à votre pratique.",
  path: "/demo",
});

const expectations = [
  {
    title: "Une présentation sur votre workflow",
    description:
      "Radiologie, centre d'imagerie ou cabinet : la démonstration suit votre organisation réelle.",
    icon: Route,
  },
  {
    title: "Vos questions d'intégration",
    description:
      "PACS existant, RIS tiers, HIS via HL7, Microsoft Word : nous vérifions ensemble la compatibilité.",
    icon: MessagesSquare,
  },
  {
    title: "Un devis adapté",
    description:
      "À l'issue de la démonstration, une proposition établie sur votre configuration.",
    icon: CalendarCheck,
  },
];

type DemoPageProps = { searchParams: Promise<{ produit?: string; profil?: string }> };

const productValues = new Set<string>(demoProducts.map((p) => p.value));

export default async function DemoPage({ searchParams }: DemoPageProps) {
  const { produit } = await searchParams;
  const defaultProduct =
    produit && productValues.has(produit) ? (produit as DemoProductValue) : undefined;

  return (
    <>
      <Breadcrumbs items={[{ label: "Démonstration", href: "/demo" }]} />
      <Section padding="compact" className="py-10 sm:py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div>
            <p className="eyebrow text-primary">Démonstration</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Voir NEXRAD sur votre propre pratique.
            </h1>
            <p className="mt-5 text-lg text-muted">
              Remplissez le formulaire : l&apos;équipe NEXRAD vous recontacte pour
              organiser une démonstration adaptée à votre profession et à vos outils.
            </p>
            <ul className="mt-10 space-y-6">
              {expectations.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <IconTile icon={item.icon} />
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-border bg-background p-6 shadow-elevated sm:p-8">
            <DemoForm defaultProduct={defaultProduct} />
          </div>
        </div>
      </Section>
    </>
  );
}
