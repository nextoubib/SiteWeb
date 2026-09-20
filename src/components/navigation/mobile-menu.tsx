"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, LogIn, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { IconTile } from "@/components/ui/icon-tile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { mainNav, productMenu, productMenuSecondary } from "@/data/navigation";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

function MobileLink({
  item,
  tone,
  onNavigate,
}: {
  item: NavLink;
  tone: "primary" | "nextoubib" | "neutral";
  onNavigate: () => void;
}) {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-foreground transition-colors outline-none hover:bg-surface focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        {item.icon ? <IconTile icon={item.icon} tone={tone} size="sm" /> : null}
        <span className="min-w-0">
          <span className="block">{item.label}</span>
          {item.description ? (
            <span className="block text-xs font-normal text-muted">
              {item.description}
            </span>
          ) : null}
        </span>
      </Link>
    </li>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent title="Menu" description="Navigation du site NEXRAD">
        <div className="flex h-16 items-center border-b border-border px-5">
          <Logo />
        </div>
        <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <p className="px-2 pb-2 eyebrow text-primary">{productMenu.radiologie.label}</p>
          <ul className="space-y-0.5">
            {productMenu.radiologie.items.map((item) => (
              <MobileLink key={item.href} item={item} tone="primary" onNavigate={close} />
            ))}
          </ul>
          <p className="px-2 pt-5 pb-2 eyebrow text-nextoubib">
            {productMenu.medecine.label}
          </p>
          <ul className="space-y-0.5">
            {productMenu.medecine.items.map((item) => (
              <MobileLink
                key={item.href}
                item={item}
                tone="nextoubib"
                onNavigate={close}
              />
            ))}
          </ul>
          <p className="px-2 pt-5 pb-2 eyebrow text-muted">Plus</p>
          <ul className="space-y-0.5">
            {productMenuSecondary.map((item) => (
              <MobileLink key={item.href} item={item} tone="neutral" onNavigate={close} />
            ))}
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className={cn(
                    "flex items-center rounded-lg px-2 py-2.5 text-sm font-medium transition-colors outline-none hover:bg-surface focus-visible:ring-2 focus-visible:ring-primary/40",
                    pathname.startsWith(item.href) ? "text-primary" : "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 border-t border-border p-4">
          <Button asChild className="w-full" size="lg">
            <Link href="/demo" onClick={close}>
              Demander une démo
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="secondary" className="w-full" size="lg">
            <a href={siteConfig.appUrl} rel="noopener">
              <LogIn />
              Connexion
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
