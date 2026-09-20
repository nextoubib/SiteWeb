import { cn } from "@/lib/utils";

const standards = [
  { name: "DICOM", note: "Images et worklist" },
  { name: "HL7", note: "ADT · ORM · ORU" },
  { name: "Orthanc", note: "Serveur PACS open source" },
  { name: "OHIF", note: "Viewer open source" },
  { name: "Microsoft Word", note: "Injection via Bridge" },
  { name: "RadiAnt", note: "Pont possible si supporté" },
];

/**
 * Standards and third-party technologies the platform works with.
 * Text only: no third-party logos are embedded. Orthanc, OHIF, Word and
 * RadiAnt belong to their respective owners.
 */
export function StandardsCloud({ className }: { className?: string }) {
  return (
    <ul className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6", className)}>
      {standards.map((item) => (
        <li
          key={item.name}
          className="rounded-lg border border-border bg-background px-4 py-3 text-center shadow-card"
        >
          <p className="font-display text-sm font-bold tracking-tight text-foreground">
            {item.name}
          </p>
          <p className="mt-0.5 text-xs text-muted">{item.note}</p>
        </li>
      ))}
    </ul>
  );
}
