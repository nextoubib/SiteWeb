import { ShieldCheck } from "lucide-react";
import { MEDICAL_DISCLAIMER } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Disclaimer({
  className,
  text = MEDICAL_DISCLAIMER,
}: {
  className?: string;
  text?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted-strong",
        className,
      )}
    >
      <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
      <span>{text}</span>
    </p>
  );
}
