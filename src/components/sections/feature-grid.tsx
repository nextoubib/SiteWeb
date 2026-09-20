import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import type { Feature } from "@/types";

type FeatureCardProps = {
  feature: Feature;
  tone?: "primary" | "ai" | "nextoubib" | "neutral";
  compact?: boolean;
};

export function FeatureCard({
  feature,
  tone = "primary",
  compact = false,
}: FeatureCardProps) {
  return (
    <Card className={cn("h-full hover:border-border-strong", compact && "p-5")}>
      <IconTile icon={feature.icon} tone={tone} size={compact ? "sm" : "md"} />
      <CardTitle className={cn("mt-4", compact && "text-[15px]")}>
        {feature.title}
      </CardTitle>
      <CardDescription className="mt-2">{feature.description}</CardDescription>
    </Card>
  );
}

type FeatureGridProps = {
  features: Feature[];
  tone?: "primary" | "ai" | "nextoubib" | "neutral";
  columns?: 2 | 3 | 4;
  compact?: boolean;
  className?: string;
};

export function FeatureGrid({
  features,
  tone = "primary",
  columns = 3,
  compact = false,
  className,
}: FeatureGridProps) {
  return (
    <Stagger
      as="ul"
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
        className,
      )}
    >
      {features.map((feature) => (
        <StaggerItem as="li" key={feature.title}>
          <FeatureCard feature={feature} tone={tone} compact={compact} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
