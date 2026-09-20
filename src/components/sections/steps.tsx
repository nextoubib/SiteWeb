import { IconTile } from "@/components/ui/icon-tile";
import { cn } from "@/lib/utils";
import type { WorkflowStep } from "@/types";

type StepsProps = {
  steps: WorkflowStep[];
  tone?: "primary" | "ai" | "nextoubib";
  /** Vertical (default) or responsive grid layout. */
  layout?: "vertical" | "grid";
  className?: string;
};

export function Steps({
  steps,
  tone = "primary",
  layout = "vertical",
  className,
}: StepsProps) {
  const line =
    tone === "nextoubib"
      ? "bg-nextoubib/30"
      : tone === "ai"
        ? "bg-accent/30"
        : "bg-primary/25";

  if (layout === "grid") {
    return (
      <ol className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="rounded-xl border border-border bg-background p-5 shadow-card"
          >
            <div className="flex items-center justify-between">
              <IconTile icon={step.icon} tone={tone} />
              <span className="font-mono text-xs text-muted">0{index + 1}</span>
            </div>
            <p className="mt-4 font-semibold text-foreground">{step.label}</p>
            {step.description ? (
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className={cn("relative space-y-0", className)}>
      {steps.map((step, index) => {
        const last = index === steps.length - 1;
        return (
          <li key={step.label} className="relative flex gap-4 pb-8 last:pb-0">
            {!last ? (
              <span
                aria-hidden="true"
                className={cn("absolute top-10 left-5 h-[calc(100%-1.5rem)] w-px", line)}
              />
            ) : null}
            <IconTile icon={step.icon} tone={tone} className="relative z-10" />
            <div className="pt-1.5">
              <p className="flex items-center gap-2 font-semibold text-foreground">
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
                {step.label}
              </p>
              {step.description ? (
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
