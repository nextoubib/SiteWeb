import localFont from "next/font/local";

/**
 * Self-hosted variable fonts (SIL Open Font License, see src/assets/fonts/LICENSE-*.txt).
 * Loaded through next/font/local: zero external requests, no layout shift.
 */
export const inter = localFont({
  src: [
    { path: "../assets/fonts/inter-latin-wght-normal.woff2", style: "normal" },
    { path: "../assets/fonts/inter-latin-ext-wght-normal.woff2", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const manrope = localFont({
  src: [
    { path: "../assets/fonts/manrope-latin-wght-normal.woff2", style: "normal" },
    { path: "../assets/fonts/manrope-latin-ext-wght-normal.woff2", style: "normal" },
  ],
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export const jetbrainsMono = localFont({
  src: [
    { path: "../assets/fonts/jetbrains-mono-latin-wght-normal.woff2", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "100 800",
});
