"use client";

import { ArrowDown, ArrowRight, Mic, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { dictationModes } from "@/data/radiology";
import { cn } from "@/lib/utils";

/**
 * Interactive demonstration of the four Nexrad AI dictation modes.
 * Shows the dictated input and the generated result side by side.
 */
export function AIWorkflow({ className }: { className?: string }) {
  return (
    <Tabs defaultValue={dictationModes[0].id} className={cn(className)}>
      <TabsList aria-label="Modes de dictée" className="grid grid-cols-2 sm:inline-flex">
        {dictationModes.map((mode) => (
          <TabsTrigger key={mode.id} value={mode.id}>
            <mode.icon aria-hidden="true" />
            {mode.name.replace("Mode ", "")}
          </TabsTrigger>
        ))}
      </TabsList>
      {dictationModes.map((mode) => (
        <TabsContent key={mode.id} value={mode.id}>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto_1.2fr] lg:items-stretch">
            {/* Input */}
            <div className="flex flex-col rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-muted">Dictée</p>
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-danger/60" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-danger" />
                </span>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-background text-foreground shadow-card">
                  <Mic aria-hidden="true" className="size-4" />
                </span>
                <p className="font-mono text-sm leading-relaxed text-foreground/90">
                  « {mode.example.input} »
                </p>
              </div>
              <div className="mt-auto pt-5">
                <p className="text-xs font-medium text-muted-strong">{mode.rule}</p>
              </div>
            </div>

            <div
              className="flex items-center justify-center text-muted"
              aria-hidden="true"
            >
              <ArrowRight className="hidden size-5 lg:block" />
              <ArrowDown className="size-5 lg:hidden" />
            </div>

            {/* Output */}
            <div className="rounded-xl border border-border bg-background p-5 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="eyebrow text-primary">{mode.example.outputTitle}</p>
                <Badge variant="ai">
                  <mode.icon aria-hidden="true" />
                  {mode.name}
                </Badge>
              </div>
              <div className="mt-4 space-y-3">
                {mode.example.output.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-foreground/90"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs text-muted">
                <ShieldCheck aria-hidden="true" className="size-4 text-success" />
                Relu et validé par le radiologue avant signature.
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
            <p className="text-sm leading-relaxed text-muted">{mode.description}</p>
            <ul className="flex flex-wrap gap-2 sm:justify-end">
              {mode.strengths.map((s) => (
                <li key={s}>
                  <Badge variant="neutral">{s}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
