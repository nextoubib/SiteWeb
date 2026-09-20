import type { Metadata } from "next";
import { inter, jetbrainsMono, manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXRAD — L'écosystème intelligent pour les professionnels de santé",
  description:
    "NEXRAD réunit intelligence artificielle, dictée médicale, dossier patient et workflow clinique dans une nouvelle génération de logiciels médicaux.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
