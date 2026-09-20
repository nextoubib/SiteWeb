import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "navy" | "nextoubib" | "primary";
};

export function CTASection({
  title = "Voir NEXRAD sur votre propre workflow.",
  description = "Une démonstration adaptée à votre pratique : radiologie, centre d'imagerie ou cabinet médical.",
  primary = { label: "Demander une démonstration", href: "/demo" },
  secondary = { label: "Découvrir nos solutions", href: "/solutions" },
  tone = "navy",
}: CTASectionProps) {
  return (
    <Section padding="compact" className="py-8 sm:py-10 lg:py-14">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16",
          tone === "navy" && "bg-navy text-white",
          tone === "nextoubib" && "bg-nextoubib text-white",
          tone === "primary" && "bg-primary text-white",
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-navy"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="inverted">
              <Link href={primary.href}>
                <Calendar />
                {primary.label}
              </Link>
            </Button>
            <Button asChild size="lg" variant="inverted-outline">
              <Link href={secondary.href}>
                {secondary.label}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
