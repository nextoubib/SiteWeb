import { cn } from "@/lib/utils";

/** Minimal smartphone frame used to illustrate mobile flows (QR Scan). */
export function DeviceMockup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[15.5rem] rounded-[2.2rem] border-[6px] border-navy bg-navy p-1.5 shadow-elevated",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute top-2.5 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-navy"
      />
      <div className="aspect-[9/18.5] overflow-hidden rounded-[1.7rem] bg-background">
        {children}
      </div>
    </div>
  );
}
