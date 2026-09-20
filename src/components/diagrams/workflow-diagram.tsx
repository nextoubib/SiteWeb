import { ArrowRight } from "lucide-react";
import { IconTile } from "@/components/ui/icon-tile";
import { cn } from "@/lib/utils";
import type { WorkflowStep } from "@/types";

type WorkflowDiagramProps = {
  steps: WorkflowStep[];
  tone?: "primary" | "ai" | "nextoubib";
  /** Index of steps to highlight (e.g. where NEXRAD products intervene). */
  highlight?: number[];
  className?: string;
  ariaLabel?: string;
};

/**
 * Ordered chain of steps. Short chains (≤ 6 steps) render as a centered row
 * with arrows on large screens; long chains render as a responsive grid that
 * becomes a single rail of N columns on extra-large screens. Never overflows.
 */
export function WorkflowDiagram({
  steps,
  tone = "primary",
  highlight = [],
  className,
  ariaLabel = "Workflow",
}: WorkflowDiagramProps) {
  const long = steps.length > 6;
  const highlightClasses =
    tone === "nextoubib"
      ? "border-nextoubib/40 shadow-[0_0_0_3px_rgb(14_143_94/0.12)]"
      : "border-primary/40 shadow-[0_0_0_3px_rgb(24_73_198/0.12)]";

  return (
    <ol
      aria-label={ariaLabel}
      style={long ? ({ "--steps": steps.length } as React.CSSProperties) : undefined}
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-3",
        long
          ? "lg:grid-cols-5 lg:gap-2 xl:[grid-template-columns:repeat(var(--steps),minmax(0,1fr))]"
          : "lg:flex lg:flex-wrap lg:items-stretch lg:justify-center lg:gap-2",
        className,
      )}
    >
      {steps.map((step, index) => {
        const isHighlighted = highlight.includes(index);
        const last = index === steps.length - 1;
        return (
          <li
            key={step.label}
            className={cn("flex items-stretch gap-2", !long && "lg:flex-none")}
          >
            <div
              className={cn(
                "flex w-full flex-col rounded-lg border bg-background p-3",
                !long && "lg:w-[9.5rem]",
                long && "xl:p-2.5",
                isHighlighted ? highlightClasses : "border-border",
              )}
            >
              <div className="flex items-center justify-between">
                <IconTile
                  icon={step.icon}
                  tone={isHighlighted ? tone : "neutral"}
                  size="sm"
                />
                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-muted">
                  0{index + 1}
                  {long && !last ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="hidden size-3 text-border-strong xl:block"
                    />
                  ) : null}
                </span>
              </div>
              <p
                className={cn(
                  "mt-2.5 text-sm font-semibold text-foreground",
                  long && "xl:text-[13px]",
                )}
              >
                {step.label}
              </p>
              {step.description ? (
                <p
                  className={cn(
                    "mt-0.5 text-xs leading-snug text-muted",
                    long && "xl:text-[11px]",
                  )}
                >
                  {step.description}
                </p>
              ) : null}
            </div>
            {!long && !last ? (
              <ArrowRight
                aria-hidden="true"
                className="hidden size-4 shrink-0 self-center text-border-strong lg:block"
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
