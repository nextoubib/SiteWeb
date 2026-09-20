import Link from "next/link";
import { PlaySquare } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/ui/logo";
import { footerGroups } from "@/data/navigation";
import { siteConfig, SECURITY_STATEMENT } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-border bg-navy text-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo inverted />
            <p className="mt-4 text-sm leading-relaxed text-navy-muted">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 text-xs leading-relaxed text-navy-muted/80">
              {SECURITY_STATEMENT}
            </p>
            <a
              href={siteConfig.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md text-sm text-navy-muted transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <PlaySquare className="size-4" aria-hidden="true" />
              Chaîne YouTube NEXRAD
            </a>
          </div>
          {footerGroups.map((group) => (
            <nav key={group.label} aria-label={group.label}>
              <p className="eyebrow text-navy-muted">{group.label}</p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/85 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-navy-border pt-6 text-xs text-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <p className="max-w-xl leading-relaxed">
            Les fonctions d&apos;intelligence artificielle constituent une assistance ; le
            professionnel de santé conserve la validation et la décision finale.
          </p>
        </div>
      </Container>
    </footer>
  );
}
