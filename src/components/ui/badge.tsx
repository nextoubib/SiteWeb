import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium whitespace-nowrap [&_svg]:size-3.5",
  {
    variants: {
      variant: {
        neutral: "border-border bg-surface text-muted-strong",
        primary: "border-primary/15 bg-primary-soft text-primary-strong",
        ai: "border-accent/20 bg-accent-soft text-accent-hover",
        nextoubib: "border-nextoubib/20 bg-nextoubib-soft text-nextoubib-hover",
        outline: "border-border-strong bg-transparent text-foreground",
        inverted: "border-white/15 bg-white/10 text-white",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

type BadgeProps = React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
