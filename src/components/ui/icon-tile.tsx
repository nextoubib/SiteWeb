import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconTileProps = {
  icon: LucideIcon;
  tone?: "primary" | "ai" | "nextoubib" | "neutral" | "inverted";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const tones = {
  primary: "bg-primary-soft text-primary",
  ai: "bg-accent-soft text-accent-hover",
  nextoubib: "bg-nextoubib-soft text-nextoubib",
  neutral: "bg-surface-strong text-muted-strong",
  inverted: "bg-white/10 text-white",
};

const sizes = {
  sm: "size-8 rounded-md [&_svg]:size-4",
  md: "size-10 rounded-lg [&_svg]:size-5",
  lg: "size-12 rounded-lg [&_svg]:size-6",
};

export function IconTile({
  icon: Icon,
  tone = "primary",
  size = "md",
  className,
}: IconTileProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        tones[tone],
        sizes[size],
        className,
      )}
    >
      <Icon strokeWidth={1.75} />
    </span>
  );
}
