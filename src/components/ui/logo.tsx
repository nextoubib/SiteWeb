import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  /** Renders the mark only (mobile). */
  compact?: boolean;
  href?: string;
};

/**
 * NEXRAD wordmark. The mark is an original placeholder to be replaced by the
 * official logo asset once available.
 */
export function Logo({
  className,
  inverted = false,
  compact = false,
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="NEXRAD — accueil"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        className,
      )}
    >
      <LogoMark inverted={inverted} />
      {!compact ? (
        <span
          className={cn(
            "font-display text-[1.05rem] font-extrabold tracking-[0.12em]",
            inverted ? "text-white" : "text-foreground",
          )}
        >
          NEXRAD
        </span>
      ) : null}
    </Link>
  );
}

export function LogoMark({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={cn("size-8 shrink-0", className)}
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="8"
        className={inverted ? "fill-white" : "fill-primary"}
      />
      <path
        d="M9.5 22.5V9.5h2.4l8.2 9.1V9.5h2.4v13h-2.4l-8.2-9.1v9.1H9.5Z"
        className={inverted ? "fill-navy" : "fill-white"}
      />
      <circle
        cx="23.5"
        cy="10.5"
        r="2"
        className={inverted ? "fill-accent" : "fill-accent-soft"}
      />
    </svg>
  );
}
