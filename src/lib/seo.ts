import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path starting with "/" — used for the canonical URL. */
  path: string;
  /** Use the raw title without the "| NEXRAD" suffix (homepage). */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

/**
 * Builds the Next.js Metadata object for a page: title, description,
 * canonical, Open Graph and Twitter cards. Images are inherited from the
 * root `opengraph-image` file convention.
 */
export function createMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
