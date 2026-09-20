import { siteConfig } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";
import type { FaqItem } from "@/types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/icon.svg"),
    description: siteConfig.description,
    sameAs: [siteConfig.youtube],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
  };
}

type SoftwareInput = {
  name: string;
  description: string;
  path: string;
  category?: string;
  operatingSystem?: string;
};

/** SoftwareApplication without invented ratings or prices. */
export function softwareJsonLd({
  name,
  description,
  path,
  category = "MedicalApplication",
  operatingSystem = "Web",
}: SoftwareInput) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: category,
    operatingSystem,
    inLanguage: siteConfig.language,
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}
