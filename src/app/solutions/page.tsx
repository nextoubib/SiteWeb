import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconTile } from "@/components/ui/icon-tile";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { solutionProfiles } from "@/data/solutions";
import { productsById } from "@/data/products";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Solutions par profil — radiologue, centre d'imagerie, hôpital, médecin",
  description:
    "Radiologue indépendant, centre d'imagerie, service hospitalier, médecin généraliste ou spécialiste : la combinaison NEXRAD adaptée à chaque pratique.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }]} />
      <Hero
        eyebrow="Solutions"
        title="La bonne combinaison pour votre pratique."
        description="NEXRAD se déploie produit par produit. Voici les points d'entrée les plus fréquents selon votre profil ; la démonstration affine ensuite le périmètre."
        actions={
          <Button asChild size="lg">
            <Link href="/demo">
              <Calendar />
              Demander une démonstration
            </Link>
          </Button>
        }
      />

      <Section tone="surface">
        <Stagger as="ul" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutionProfiles.map((profile) => {
            const radio = profile.tone === "radiology";
            return (
              <StaggerItem as="li" key={profile.id}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-background p-6 shadow-card">
                  <div className="flex items-start justify-between gap-4">
                    <IconTile
                      icon={profile.icon}
                      tone={radio ? "primary" : "nextoubib"}
                      size="lg"
                    />
                    <Badge variant={radio ? "primary" : "nextoubib"}>
                      {radio ? "Radiologie" : "Médecine"}
                    </Badge>
                  </div>
                  <h2 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                    {profile.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{profile.audience}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-strong">
                    {profile.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {profile.products.map((id) => {
                      const product = productsById[id];
                      return (
                        <Link
                          key={id}
                          href={product.href}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors",
                            radio
                              ? "border-primary/20 bg-primary-soft text-primary-strong hover:border-primary/50"
                              : "border-nextoubib/25 bg-nextoubib-soft text-nextoubib-hover hover:border-nextoubib/60",
                          )}
                        >
                          <product.icon aria-hidden="true" className="size-3.5" />
                          {product.name}
                        </Link>
                      );
                    })}
                    {profile.extras?.map((extra) => (
                      <span
                        key={extra}
                        className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-muted-strong"
                      >
                        {extra}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <Button asChild variant="link" className="text-sm">
                      <Link href={`/demo?profil=${profile.id}`}>
                        Demander une démonstration pour ce profil
                        <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
        <p className="mt-8 text-xs leading-relaxed text-muted">
          Ces combinaisons décrivent des périmètres logiciels ; elles ne constituent en
          aucun cas une recommandation clinique.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Écosystème"
          title="Commencez par un produit, étendez quand vous le souhaitez."
          description="Nexrad AI, RIS, Bridge et Nextoubib partagent la même plateforme : l'extension se fait sans migration."
          align="center"
        />
        <div className="mt-8 flex justify-center">
          <Button asChild variant="secondary">
            <Link href="/">
              Voir l&apos;écosystème NEXRAD
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
