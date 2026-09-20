import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Fact = { value: string; label: string; icon?: LucideIcon };

/**
 * Small, verifiable product facts (never marketing metrics).
 */
export function FactStrip({
  facts,
  className,
}: {
  facts: readonly Fact[];
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4",
        className,
      )}
    >
      {facts.map((fact) => (
        <div key={fact.label} className="bg-background p-5">
          <dt className="order-2 mt-1 text-sm text-muted">{fact.label}</dt>
          <dd className="order-1 flex items-center gap-2 font-display text-3xl font-bold tracking-tight text-foreground">
            {fact.icon ? (
              <fact.icon
                aria-hidden="true"
                className="size-5 text-primary"
                strokeWidth={1.75}
              />
            ) : null}
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
