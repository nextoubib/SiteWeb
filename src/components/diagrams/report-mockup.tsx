import { Mic, Sparkles, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Static product illustration used in heroes: a "Grand titre" dictation
 * turned into a structured report. Content mirrors the AI demo data.
 */
export function ReportMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-soft via-transparent to-accent-soft opacity-70 blur-2xl"
      />
      {/* dictation chip */}
      <div className="relative z-10 ml-auto w-fit max-w-[85%] rounded-xl border border-border bg-background p-4 shadow-elevated sm:mr-6">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-danger/60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-danger" />
          </span>
          <p className="eyebrow text-muted">Mode Grand titre</p>
        </div>
        <p className="mt-2 flex items-center gap-2 font-mono text-sm text-foreground">
          <Mic aria-hidden="true" className="size-4 text-primary" />« Angiome hépatique
          segment VI 25 mm »
        </p>
      </div>

      {/* report */}
      <div className="relative -mt-4 rounded-2xl border border-border bg-background shadow-elevated">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
          </div>
          <p className="text-xs font-medium text-muted">
            Compte rendu · Scanner abdominal
          </p>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-hover">
            <Sparkles aria-hidden="true" className="size-3" />
            Nexrad AI
          </span>
        </div>
        <div className="space-y-4 px-5 py-5 text-[13px] leading-relaxed sm:text-sm">
          <div>
            <p className="eyebrow text-primary">Technique</p>
            <p className="mt-1 text-foreground/90">
              Acquisition abdominale sans puis avec injection de produit de contraste, aux
              temps artériel, portal et tardif.
            </p>
          </div>
          <div>
            <p className="eyebrow text-primary">Résultats</p>
            <p className="mt-1 text-foreground/90">
              Formation du segment VI hépatique mesurant{" "}
              <mark className="rounded bg-primary-soft px-1 text-primary-strong">
                25 mm
              </mark>
              , hypodense avant injection, présentant un rehaussement en mottes
              périphériques discontinu avec remplissage centripète progressif.
            </p>
          </div>
          <div>
            <p className="eyebrow text-primary">Conclusion</p>
            <p className="mt-1 font-medium text-foreground">
              Aspect typique d&apos;angiome hépatique du segment VI de 25 mm.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border bg-surface px-5 py-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck aria-hidden="true" className="size-4 text-success" />
            En attente de validation
          </span>
          <span className="rounded-md bg-primary px-2.5 py-1 font-semibold text-white">
            Valider
          </span>
        </div>
      </div>
    </div>
  );
}
