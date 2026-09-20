import {
  Cable,
  Cloud,
  Database,
  FileText,
  LayoutDashboard,
  MonitorDot,
} from "lucide-react";
import { IconTile } from "@/components/ui/icon-tile";
import { cn } from "@/lib/utils";

const targets = [
  { label: "PACS", icon: Database },
  { label: "RIS tiers", icon: LayoutDashboard },
  { label: "Microsoft Word", icon: FileText },
  { label: "Logiciel métier", icon: MonitorDot },
];

/** NEXRAD Cloud → Bridge → PACS / RIS / Word / logiciel métier */
export function BridgeDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="flex w-full max-w-xs items-center gap-3 rounded-xl border border-navy-border bg-navy px-4 py-3 text-white shadow-elevated">
        <IconTile icon={Cloud} tone="inverted" />
        <div>
          <p className="text-sm font-semibold">NEXRAD Cloud</p>
          <p className="text-xs text-navy-muted">
            Nexrad AI · génération du compte rendu
          </p>
        </div>
      </div>

      <FlowLine />

      <div className="flex w-full max-w-xs items-center gap-3 rounded-xl border border-primary/40 bg-primary-soft px-4 py-3 shadow-[0_0_0_4px_rgb(24_73_198/0.1)]">
        <IconTile icon={Cable} tone="primary" />
        <div>
          <p className="text-sm font-semibold text-primary-strong">Nexrad Bridge</p>
          <p className="text-xs text-primary-strong/70">
            Desktop · always-on-top · raccourcis
          </p>
        </div>
      </div>

      <FlowLine />

      <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
        {targets.map((target) => (
          <li
            key={target.label}
            className="flex flex-col items-center gap-2 rounded-lg border border-border bg-background p-4 text-center"
          >
            <IconTile icon={target.icon} tone="neutral" size="sm" />
            <p className="text-sm font-medium text-foreground">{target.label}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-xs text-muted">
        Le compte rendu est injecté dans le champ actif du logiciel cible, lorsque
        celui-ci est compatible.
      </p>
    </div>
  );
}

function FlowLine() {
  return (
    <svg
      aria-hidden="true"
      width="2"
      height="40"
      viewBox="0 0 2 40"
      className="my-1 text-primary/60"
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
        className="animate-flow"
      />
    </svg>
  );
}
