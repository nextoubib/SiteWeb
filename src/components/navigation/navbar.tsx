"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/layout/container";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Aller au contenu
      </a>
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <div className="flex items-center gap-8">
          <Logo />
          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <li>
                <MegaMenu
                  active={
                    pathname.startsWith("/radiologie") ||
                    pathname.startsWith("/nextoubib")
                  }
                />
              </li>
              {mainNav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex h-10 items-center rounded-md px-3 text-sm font-medium transition-colors outline-none hover:bg-surface hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/40",
                        active ? "text-foreground" : "text-muted-strong",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden lg:inline-flex">
            <a href={siteConfig.appUrl} rel="noopener">
              <LogIn />
              Connexion
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/demo">
              Demander une démo
              <ArrowRight />
            </Link>
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
