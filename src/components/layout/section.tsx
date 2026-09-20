import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = React.ComponentProps<"section"> & {
  tone?: "default" | "surface" | "navy" | "nextoubib";
  containerSize?: "default" | "narrow" | "wide";
  padding?: "default" | "compact" | "none";
};

const tones = {
  default: "bg-background",
  surface: "bg-surface",
  navy: "bg-navy text-white",
  nextoubib: "bg-nextoubib-soft/40",
};

const paddings = {
  default: "py-16 sm:py-20 lg:py-28",
  compact: "py-10 sm:py-14",
  none: "",
};

export function Section({
  tone = "default",
  containerSize = "default",
  padding = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(tones[tone], paddings[padding], className)} {...props}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
