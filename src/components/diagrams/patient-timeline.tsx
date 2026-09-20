import { patientRecordSections, patientTimeline } from "@/data/nextoubib";
import { cn } from "@/lib/utils";

/**
 * Illustrative patient record (fictitious data): section tabs and a
 * chronological timeline of consultations, documents and vitals.
 */
export function PatientTimeline({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-background shadow-elevated",
        className,
      )}
      role="img"
      aria-label="Aperçu illustratif du dossier patient Nextoubib présenté sous forme de chronologie"
    >
      <div className="border-b border-border px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Patient A. — 46 ans</p>
            <p className="text-xs text-muted">
              Dossier médical · dernière consultation aujourd&apos;hui
            </p>
          </div>
          <span className="rounded-full bg-danger-soft px-2.5 py-1 text-[11px] font-semibold text-danger">
            Allergie : pénicilline
          </span>
        </div>
        <ul className="mt-4 scrollbar-none flex gap-1 overflow-x-auto">
          {patientRecordSections.map((section, index) => (
            <li
              key={section}
              className={cn(
                "shrink-0 rounded-md px-2.5 py-1 text-xs font-medium",
                index === 0 ? "bg-nextoubib text-white" : "text-muted-strong",
              )}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
      <ol className="relative space-y-0 px-5 py-4">
        {patientTimeline.map((entry, index) => {
          const last = index === patientTimeline.length - 1;
          return (
            <li key={entry.title} className="relative flex gap-4 pb-5 last:pb-0">
              {!last ? (
                <span
                  aria-hidden="true"
                  className="absolute top-8 left-4 h-[calc(100%-1rem)] w-px bg-border"
                />
              ) : null}
              <span
                className={cn(
                  "relative z-10 inline-flex size-8 shrink-0 items-center justify-center rounded-full",
                  entry.tone === "alert"
                    ? "bg-danger-soft text-danger"
                    : "bg-nextoubib-soft text-nextoubib",
                )}
              >
                <entry.icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </span>
              <div className="min-w-0 pt-1">
                <p className="flex flex-wrap items-center gap-x-2 text-[11px] text-muted">
                  <span className="font-mono">{entry.date}</span>
                  <span>·</span>
                  <span>{entry.type}</span>
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  {entry.title}
                </p>
                <p className="text-xs leading-relaxed text-muted">{entry.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
