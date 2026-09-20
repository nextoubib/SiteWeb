import {
  ArrowLeftRight,
  Database,
  Hospital,
  LayoutDashboard,
  Layers,
  Network,
  Radio,
} from "lucide-react";
import { IconTile } from "@/components/ui/icon-tile";
import { hl7Messages } from "@/data/radiology";
import { cn } from "@/lib/utils";

const chain = [
  {
    label: "HIS",
    note: "Système d'information hospitalier",
    icon: Hospital,
    tone: "neutral" as const,
  },
  { label: "HL7", note: "ADT · ORM · ORU", icon: Network, tone: "ai" as const },
  {
    label: "Nexrad RIS",
    note: "Cockpit du centre",
    icon: LayoutDashboard,
    tone: "primary" as const,
  },
  { label: "DICOM", note: "Worklist MWL", icon: Layers, tone: "ai" as const },
  {
    label: "Modalités / PACS",
    note: "Scanner, IRM, RX, archivage",
    icon: Radio,
    tone: "neutral" as const,
  },
];

/** HIS ↔ HL7 ↔ Nexrad RIS ↔ DICOM ↔ Modalités / PACS */
export function HL7Diagram({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      <ol
        aria-label="Chaîne d'interopérabilité"
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(9,auto)] lg:items-center lg:justify-center lg:gap-2"
      >
        {chain.map((node, index) => (
          <li key={node.label} className="contents">
            <div
              className={cn(
                "flex items-center gap-3 rounded-lg border bg-background p-3 lg:w-44",
                node.tone === "primary"
                  ? "border-primary/40 shadow-[0_0_0_3px_rgb(24_73_198/0.12)]"
                  : "border-border",
              )}
            >
              <IconTile icon={node.icon} tone={node.tone} size="sm" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">{node.label}</p>
                <p className="truncate text-xs text-muted">{node.note}</p>
              </div>
            </div>
            {index < chain.length - 1 ? (
              <ArrowLeftRight
                aria-hidden="true"
                className="hidden size-4 justify-self-center text-border-strong lg:block"
              />
            ) : null}
          </li>
        ))}
      </ol>
      <ul className="grid gap-3 sm:grid-cols-3">
        {hl7Messages.map((message) => (
          <li
            key={message.code}
            className="rounded-lg border border-border bg-surface p-4"
          >
            <p className="font-mono text-sm font-semibold text-primary">{message.code}</p>
            <p className="mt-1 text-sm font-medium text-foreground">{message.label}</p>
            <p className="mt-0.5 text-xs text-muted">{message.description}</p>
          </li>
        ))}
      </ul>
      <p className="flex items-center gap-2 text-xs text-muted">
        <Database aria-hidden="true" className="size-3.5" />
        Les échanges DICOM et HL7 s&apos;appuient sur des standards ouverts du système
        d&apos;information de santé.
      </p>
    </div>
  );
}
