import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LogoMark } from "@/components/ui/logo";
import { ecosystem } from "@/data/ecosystem";
import { cn } from "@/lib/utils";
import type { EcosystemBranch, EcosystemNode } from "@/data/ecosystem";

function Node({ node, tone }: { node: EcosystemNode; tone: "radiologie" | "medecine" }) {
  const isProduct = node.kind === "product";
  const Icon = node.icon;
  const productClasses =
    tone === "radiologie"
      ? "border-primary/20 bg-primary-soft text-primary-strong hover:border-primary/50"
      : "border-nextoubib/25 bg-nextoubib-soft text-nextoubib-hover hover:border-nextoubib/60";
  const iconClasses = tone === "radiologie" ? "text-primary" : "text-nextoubib";

  const content = (
    <>
      <Icon
        aria-hidden="true"
        strokeWidth={1.75}
        className={cn("shrink-0", isProduct ? "size-5" : "size-4", iconClasses)}
      />
      <span
        className={cn(
          "truncate",
          isProduct ? "text-sm font-semibold" : "text-xs font-medium",
        )}
      >
        {node.label}
      </span>
    </>
  );

  if (node.href) {
    return (
      <Link
        href={node.href}
        className={cn(
          "flex items-center gap-2 rounded-lg border px-3 py-2.5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          productClasses,
        )}
      >
        {content}
      </Link>
    );
  }
  return (
    <span className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-muted-strong">
      {content}
    </span>
  );
}

function Branch({ branch }: { branch: EcosystemBranch }) {
  const products = branch.nodes.filter((n) => n.kind === "product");
  const capabilities = branch.nodes.filter((n) => n.kind === "capability");
  const radio = branch.id === "radiologie";

  return (
    <div className="relative rounded-2xl border border-border bg-background p-5 shadow-card sm:p-6">
      {/* connector stub coming from the bus line (desktop) */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-8 left-1/2 hidden h-8 w-px -translate-x-1/2 lg:block",
          radio ? "bg-primary/40" : "bg-nextoubib/50",
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-1.5 left-1/2 hidden size-3 -translate-x-1/2 rounded-full ring-4 ring-background lg:block",
          radio ? "bg-primary" : "bg-nextoubib",
        )}
      />
      <div className="flex items-center justify-between gap-3">
        <p className={cn("eyebrow", radio ? "text-primary" : "text-nextoubib")}>
          {branch.label}
        </p>
        <Link
          href={branch.href}
          className={cn(
            "inline-flex items-center gap-1 text-xs font-semibold",
            radio ? "text-primary" : "text-nextoubib",
          )}
        >
          Explorer
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </Link>
      </div>
      <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">
        {branch.title}
      </h3>
      <p className="mt-1 text-sm text-muted">{branch.description}</p>
      <ul
        className={cn(
          "mt-5 grid gap-2",
          products.length > 1 ? "sm:grid-cols-3" : "sm:grid-cols-1",
        )}
      >
        {products.map((node) => (
          <li key={node.label}>
            <Node node={node} tone={branch.id} />
          </li>
        ))}
      </ul>
      <ul className="mt-3 flex flex-wrap gap-2">
        {capabilities.map((node) => (
          <li key={node.label}>
            <Node node={node} tone={branch.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Visual map of the NEXRAD ecosystem: a hub and two branches (Radiologie,
 * Médecine) connected by a bus line on desktop, stacked on mobile.
 */
export function EcosystemDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {/* Hub */}
      <div className="relative z-10 mx-auto flex w-fit items-center gap-3 rounded-xl border border-border bg-navy px-5 py-3.5 text-white shadow-elevated">
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-xl bg-primary/40 blur-xl"
        />
        <LogoMark inverted className="size-9" />
        <div>
          <p className="font-display text-base font-extrabold tracking-[0.12em]">
            NEXRAD
          </p>
          <p className="text-xs text-navy-muted">Une plateforme, deux familles</p>
        </div>
      </div>

      {/* Connectors: vertical drop, horizontal bus (desktop) */}
      <div
        aria-hidden="true"
        className="relative mx-auto h-10 w-px bg-border-strong lg:h-12"
      />
      <div aria-hidden="true" className="relative hidden h-px lg:block">
        <span className="absolute inset-y-0 right-1/4 left-1/4 bg-gradient-to-r from-primary/40 via-border-strong to-nextoubib/50" />
      </div>

      <div className="grid gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
        {ecosystem.map((branch) => (
          <Branch key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  );
}
