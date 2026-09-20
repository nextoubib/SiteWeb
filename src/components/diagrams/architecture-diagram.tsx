import { architectureLayers } from "@/data/technology";
import { cn } from "@/lib/utils";

/** Three-layer architecture: your tools → integration → NEXRAD platform. */
export function ArchitectureDiagram({ className }: { className?: string }) {
  return (
    <ol className={cn("space-y-3", className)}>
      {architectureLayers.map((layer, index) => {
        const last = index === architectureLayers.length - 1;
        return (
          <li
            key={layer.label}
            className={cn(
              "grid gap-3 rounded-xl border p-4 sm:grid-cols-[10rem_1fr] sm:items-center",
              last
                ? "border-navy-border bg-navy text-white"
                : "border-border bg-background",
            )}
          >
            <p className={cn("eyebrow", last ? "text-accent" : "text-primary")}>
              {layer.label}
            </p>
            <ul className="flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <li
                  key={item}
                  className={cn(
                    "rounded-md border px-3 py-1.5 text-sm font-medium",
                    last
                      ? "border-white/15 bg-white/10 text-white"
                      : "border-border bg-surface text-foreground",
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ol>
  );
}
