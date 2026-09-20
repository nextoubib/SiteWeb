import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IconTile } from "@/components/ui/icon-tile";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

const toneToBadge = { radiology: "primary", ai: "ai", nextoubib: "nextoubib" } as const;
const toneToTile = { radiology: "primary", ai: "ai", nextoubib: "nextoubib" } as const;
const toneToLink = {
  radiology: "text-primary",
  ai: "text-accent-hover",
  nextoubib: "text-nextoubib",
} as const;

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const familyLabel = product.family === "radiologie" ? "Radiologie" : "Médecine";
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-xl border border-border bg-background p-6 shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-elevated",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <IconTile icon={product.icon} tone={toneToTile[product.tone]} size="lg" />
        <Badge variant={toneToBadge[product.tone]}>{familyLabel}</Badge>
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
        <Link
          href={product.href}
          className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-primary/40"
        >
          {product.name}
        </Link>
      </h3>
      <p className="mt-1.5 text-base font-medium text-foreground/90">{product.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{product.description}</p>
      <ul className="mt-5 space-y-2">
        {product.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-strong">
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />
            {item}
          </li>
        ))}
      </ul>
      <span
        className={cn(
          "mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold",
          toneToLink[product.tone],
        )}
      >
        Découvrir {product.name}
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </span>
    </article>
  );
}

export function ProductGrid({
  products,
  columns = 4,
}: {
  products: Product[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "xl:grid-cols-4",
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
