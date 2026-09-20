/** Public site configuration. Values without a verified source stay generic. */
export const siteConfig = {
  name: "NEXRAD",
  legalName: "NEXRAD",
  tagline: "L'écosystème intelligent pour les professionnels de santé.",
  description:
    "NEXRAD réunit intelligence artificielle, dictée médicale, dossier patient et workflow clinique dans une nouvelle génération de logiciels médicaux.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexrad.org").replace(/\/$/, ""),
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://nexrad.org",
  locale: "fr_FR",
  language: "fr",
  /** Official NEXRAD YouTube channel (public). */
  youtube: "https://www.youtube.com/@nextradiology",
} as const;

export const MEDICAL_DISCLAIMER =
  "Les suggestions générées constituent une assistance à la décision et doivent être validées par le professionnel de santé.";

export const SECURITY_STATEMENT =
  "Architecture conçue avec la sécurité et la confidentialité comme exigences centrales.";
