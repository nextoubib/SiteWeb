import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Accueil", href: "/" }, ...items];
  return (
    <Container>
      <JsonLd data={breadcrumbJsonLd(all)} />
      <nav aria-label="Fil d'Ariane" className="py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted">
          {all.map((crumb, index) => {
            const last = index === all.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1">
                {index > 0 ? (
                  <ChevronRight aria-hidden="true" className="size-3.5" />
                ) : null}
                {last ? (
                  <span aria-current="page" className="font-medium text-foreground">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="hover:text-foreground">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
  );
}
