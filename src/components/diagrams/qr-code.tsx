import { cn } from "@/lib/utils";

/**
 * Decorative QR-like pattern (deterministic, not scannable) used in the
 * QR Scan illustration.
 */
const PATTERN = [
  "1111111010011111111",
  "1000001001010000001",
  "1011101100011011101",
  "1011101010101011101",
  "1011101101011011101",
  "1000001011000000001",
  "1111111010101111111",
  "0000000110100000000",
  "1101011011001110110",
  "0110100100110101011",
  "1010111011010011100",
  "0001000110101101010",
  "1111011001110110101",
  "0000000101011000110",
  "1111111011010101011",
  "1000001010011001100",
  "1011101100110111010",
  "1011101001011010111",
  "1011101110101100100",
];

export function QRCodeGraphic({ className }: { className?: string }) {
  const size = PATTERN.length;
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={cn("size-full", className)}
      role="img"
      aria-label="QR Code généré par Nextoubib (illustration)"
      shapeRendering="crispEdges"
    >
      {PATTERN.map((row, y) =>
        row
          .split("")
          .map((cell, x) =>
            cell === "1" ? (
              <rect
                key={`${x}-${y}`}
                x={x}
                y={y}
                width="1"
                height="1"
                className="fill-foreground"
              />
            ) : null,
          ),
      )}
    </svg>
  );
}
