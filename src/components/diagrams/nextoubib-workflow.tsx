import { Camera, Check, FileText, QrCode, Upload } from "lucide-react";
import { DeviceMockup } from "@/components/diagrams/device-mockup";
import { QRCodeGraphic } from "@/components/diagrams/qr-code";
import { Steps } from "@/components/sections/steps";
import { qrScanDocumentTypes, qrScanSteps } from "@/data/nextoubib";
import { cn } from "@/lib/utils";

/**
 * QR Scan workflow: desktop card generating the QR code, phone capturing
 * the document, file landing in the patient record.
 */
export function NextoubibWorkflow({ className }: { className?: string }) {
  return (
    <div
      className={cn("grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center", className)}
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-nextoubib-soft to-transparent opacity-80 blur-2xl lg:-inset-8"
        />
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[minmax(0,1fr)_auto]">
          {/* Desktop card */}
          <div className="min-w-0 rounded-2xl border border-border bg-background p-4 shadow-elevated sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted">
                Nextoubib · Dossier patient
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-nextoubib-soft px-2 py-0.5 text-[11px] font-semibold text-nextoubib-hover">
                <QrCode aria-hidden="true" className="size-3" />
                QR Scan
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="size-24 shrink-0 rounded-lg border border-border bg-white p-2 sm:size-28">
                <QRCodeGraphic />
              </div>
              <div className="min-w-0 text-sm">
                <p className="font-semibold text-foreground">
                  Scannez pour ajouter un document
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Le QR Code est lié au dossier ouvert. Aucun câble, aucun e-mail.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-1.5 border-t border-border pt-3">
              {[
                { label: "Bilan biologique.pdf", done: true },
                { label: "ECG.jpg", done: true },
                { label: "Compte rendu externe.jpg", done: false },
              ].map((file) => (
                <li key={file.label} className="flex items-center gap-2 text-xs">
                  {file.done ? (
                    <Check aria-hidden="true" className="size-3.5 text-success" />
                  ) : (
                    <Upload
                      aria-hidden="true"
                      className="size-3.5 animate-pulse text-nextoubib"
                    />
                  )}
                  <FileText aria-hidden="true" className="size-3.5 text-muted" />
                  <span className={file.done ? "text-foreground" : "text-muted"}>
                    {file.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone */}
          <DeviceMockup className="w-[9rem] border-[4px] p-1 sm:w-[10rem]">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-3 pt-6 pb-2 text-[9px] text-muted">
                <span>Nextoubib</span>
                <span className="font-medium text-nextoubib">Envoi…</span>
              </div>
              <div className="relative mx-2 flex-1 rounded-lg bg-surface-strong">
                <div className="absolute inset-4 rounded-md border-2 border-dashed border-nextoubib/60" />
                <div className="absolute inset-x-6 top-1/3 h-16 rounded bg-white shadow-card">
                  <div className="m-2 space-y-1">
                    <div className="h-1 w-3/4 rounded bg-border-strong" />
                    <div className="h-1 w-full rounded bg-border" />
                    <div className="h-1 w-5/6 rounded bg-border" />
                    <div className="h-1 w-2/3 rounded bg-border" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center py-3">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-nextoubib text-white shadow-card">
                  <Camera aria-hidden="true" className="size-4" />
                </span>
              </div>
            </div>
          </DeviceMockup>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {qrScanDocumentTypes.map((type) => (
            <li
              key={type}
              className="rounded-full border border-nextoubib/20 bg-nextoubib-soft px-3 py-1 text-xs font-medium text-nextoubib-hover"
            >
              {type}
            </li>
          ))}
        </ul>
      </div>

      <Steps steps={qrScanSteps} tone="nextoubib" />
    </div>
  );
}
