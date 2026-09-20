import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "linear-gradient(135deg, #0a1530 0%, #101d44 60%, #12399f 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0a1530",
            fontSize: 40,
            fontWeight: 800,
          }}
        >
          N
        </div>
        <div style={{ fontSize: 34, letterSpacing: 6, fontWeight: 700 }}>NEXRAD</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 30,
            color: "#7fd7d3",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Healthcare AI
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
          L&apos;intelligence qui redonne du temps aux médecins.
        </div>
        <div style={{ fontSize: 28, color: "#9aa9c7", maxWidth: 1000 }}>
          Nexrad AI · Nexrad RIS · Nexrad Bridge · Nextoubib
        </div>
      </div>
    </div>,
    { ...size },
  );
}
