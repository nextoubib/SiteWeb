import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.15),0_1px_2px_rgb(11_18_32/0.2)] hover:bg-primary-hover",
        secondary:
          "border border-border-strong bg-background text-foreground hover:border-foreground/40 hover:bg-surface",
        ghost: "text-muted-strong hover:bg-surface hover:text-foreground",
        link: "h-auto p-0 text-left whitespace-normal text-primary underline-offset-4 hover:underline",
        nextoubib:
          "bg-nextoubib text-nextoubib-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.15),0_1px_2px_rgb(11_18_32/0.2)] hover:bg-nextoubib-hover",
        inverted:
          "bg-white text-navy shadow-[0_1px_2px_rgb(0_0_0/0.3)] hover:bg-white/90",
        "inverted-outline":
          "border border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-3.5 text-sm [&_svg]:size-4",
        md: "h-11 px-5 text-sm [&_svg]:size-4",
        lg: "h-12 px-6 text-base [&_svg]:size-5",
        icon: "size-10 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Render the child element (e.g. next/link) with the button styles. */
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
