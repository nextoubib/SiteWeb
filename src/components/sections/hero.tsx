import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  actions?: React.ReactNode;
  /** Visual rendered on the right (desktop) / below (mobile). */
  visual?: React.ReactNode;
  tone?: "default" | "nextoubib" | "navy";
  align?: "left" | "center";
  className?: string;
  badge?: React.ReactNode;
};

export function Hero({
  eyebrow,
  title,
  description,
  actions,
  visual,
  tone = "default",
  align = visual ? "left" : "center",
  className,
  badge,
}: HeroProps) {
  const navy = tone === "navy";
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        navy ? "bg-navy text-white" : "bg-background",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          navy ? "bg-grid-navy" : "bg-grid",
          tone === "nextoubib" ? "glow-nextoubib" : !navy && "glow-primary",
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent",
          navy ? "from-navy" : "from-background",
        )}
      />
      <Container
        className={cn(
          "relative py-16 sm:py-20 lg:py-28",
          visual && "grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16",
        )}
      >
        <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
          {badge ? (
            <div className={cn("mb-5", align === "center" && "flex justify-center")}>
              {badge}
            </div>
          ) : null}
          {eyebrow ? (
            <p
              className={cn(
                "eyebrow",
                tone === "nextoubib"
                  ? "text-nextoubib"
                  : navy
                    ? "text-accent"
                    : "text-primary",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]",
              navy ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed",
              navy ? "text-navy-muted" : "text-muted",
              align === "center" && "mx-auto max-w-xl",
            )}
          >
            {description}
          </p>
          {actions ? (
            <div
              className={cn(
                "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
                align === "center" && "justify-center",
              )}
            >
              {actions}
            </div>
          ) : null}
        </div>
        {visual ? <div className="relative min-w-0">{visual}</div> : null}
      </Container>
    </section>
  );
}
