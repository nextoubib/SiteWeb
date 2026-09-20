import { Calendar, LayoutDashboard, Mic, Radio, Receipt, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const rows = [
  {
    time: "08:30",
    patient: "D. — 54 ans",
    exam: "Scanner thoracique",
    room: "Salle 1",
    status: "En cours",
    tone: "primary",
  },
  {
    time: "08:45",
    patient: "B. — 37 ans",
    exam: "IRM genou",
    room: "IRM",
    status: "Worklist",
    tone: "muted",
  },
  {
    time: "09:00",
    patient: "M. — 62 ans",
    exam: "Échographie abdominale",
    room: "Écho 2",
    status: "À dicter",
    tone: "ai",
  },
  {
    time: "09:15",
    patient: "K. — 29 ans",
    exam: "Radiographie thorax",
    room: "RX",
    status: "Validé",
    tone: "success",
  },
] as const;

const statusClasses = {
  primary: "bg-primary-soft text-primary-strong",
  muted: "bg-surface-strong text-muted-strong",
  ai: "bg-accent-soft text-accent-hover",
  success: "bg-nextoubib-soft text-nextoubib-hover",
};

/**
 * Illustrative Nexrad RIS "cockpit" (fictitious data). Replace with real
 * product screenshots once assets are available.
 */
export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-background shadow-elevated",
        className,
      )}
      role="img"
      aria-label="Aperçu illustratif du cockpit Nexrad RIS : planning du jour, salles et statuts des examens"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <p className="ml-3 text-xs font-medium text-muted">
          Nexrad RIS · Planning du jour
        </p>
      </div>
      <div className="grid sm:grid-cols-[3.25rem_1fr]">
        <aside className="hidden flex-col items-center gap-3 border-r border-border bg-surface py-4 sm:flex">
          {[LayoutDashboard, Calendar, Users, Radio, Receipt, Mic].map((Icon, index) => (
            <span
              key={index}
              className={cn(
                "inline-flex size-8 items-center justify-center rounded-md",
                index === 0 ? "bg-primary text-white" : "text-muted",
              )}
            >
              <Icon aria-hidden="true" className="size-4" />
            </span>
          ))}
        </aside>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Examens du jour", value: "24" },
              { label: "En salle", value: "3" },
              { label: "À dicter", value: "5" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg border border-border bg-surface p-3"
              >
                <p className="text-[11px] text-muted">{kpi.label}</p>
                <p className="mt-1 font-display text-xl font-bold text-foreground">
                  {kpi.value}
                </p>
              </div>
            ))}
          </div>
          <table className="mt-4 w-full text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="text-[11px] text-muted">
                <th className="pb-2 font-medium">Heure</th>
                <th className="pb-2 font-medium">Patient</th>
                <th className="hidden pb-2 font-medium sm:table-cell">Examen</th>
                <th className="hidden pb-2 font-medium md:table-cell">Salle</th>
                <th className="pb-2 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row.time}>
                  <td className="py-2 font-mono text-muted-strong">{row.time}</td>
                  <td className="py-2 pr-2 font-medium text-foreground">{row.patient}</td>
                  <td className="hidden py-2 pr-2 text-muted-strong sm:table-cell">
                    {row.exam}
                  </td>
                  <td className="hidden py-2 pr-2 text-muted-strong md:table-cell">
                    {row.room}
                  </td>
                  <td className="py-2">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[11px] font-medium",
                        statusClasses[row.tone],
                      )}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
