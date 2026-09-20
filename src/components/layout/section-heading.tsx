import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
  as?: "h1" | "h2" | "h3";
  className?: string;
  children?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  as: Heading = "h2",
  className,
  children,
}: SectionHeadingProps) {
  const inverted = tone === "inverted";
  return (
    <div
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", inverted ? "text-accent" : "text-primary")}>
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
          Heading === "h1" && "text-4xl sm:text-5xl lg:text-6xl",
          inverted ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            inverted ? "text-navy-muted" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
