import { cn } from "@/lib/utils";

type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
  size?: "default" | "narrow" | "wide";
  className?: string;
  children: React.ReactNode;
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-content",
  wide: "max-w-[88rem]",
};

export function Container<T extends React.ElementType = "div">({
  as,
  size = "default",
  className,
  children,
}: ContainerProps<T>) {
  const Comp = as ?? "div";
  return (
    <Comp className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </Comp>
  );
}
