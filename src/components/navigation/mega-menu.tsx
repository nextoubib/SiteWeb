"use client";

import Link from "next/link";
import { NavigationMenu } from "radix-ui";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { productMenu, productMenuSecondary } from "@/data/navigation";
import { IconTile } from "@/components/ui/icon-tile";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/types";

function MenuGroup({ group, tone }: { group: NavGroup; tone: "primary" | "nextoubib" }) {
  return (
    <div>
      <p
        className={cn(
          "mb-3 px-2 eyebrow",
          tone === "primary" ? "text-primary" : "text-nextoubib",
        )}
      >
        {group.label}
      </p>
      <ul className="space-y-1">
        {group.items.map((item) => (
          <li key={item.href}>
            <NavigationMenu.Link asChild>
              <Link
                href={item.href}
                className="group flex items-start gap-3 rounded-lg p-2 transition-colors outline-none hover:bg-surface focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {item.icon ? <IconTile icon={item.icon} tone={tone} size="md" /> : null}
                <span className="min-w-0">
                  <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
                    {item.label}
                    <ArrowUpRight className="size-3.5 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-muted">
                    {item.description}
                  </span>
                </span>
              </Link>
            </NavigationMenu.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MegaMenu({ active }: { active: boolean }) {
  return (
    <NavigationMenu.Root className="relative" delayDuration={80} skipDelayDuration={300}>
      <NavigationMenu.List className="flex list-none items-center">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={cn(
              "group inline-flex h-10 cursor-pointer items-center gap-1 rounded-md px-3 text-sm font-medium transition-colors outline-none select-none hover:bg-surface hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/40 data-[state=open]:bg-surface data-[state=open]:text-foreground",
              active ? "text-foreground" : "text-muted-strong",
            )}
          >
            Produits
            <ChevronDown
              aria-hidden="true"
              className="size-4 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-full left-0 mt-2 w-[44rem] origin-top-left rounded-xl border border-border bg-background p-2 shadow-menu data-[state=open]:animate-[menu-in_0.2s_cubic-bezier(0.22,1,0.36,1)]">
            <div className="grid grid-cols-[1.35fr_1fr_0.95fr] gap-2">
              <div className="p-3">
                <MenuGroup group={productMenu.radiologie} tone="primary" />
              </div>
              <div className="border-l border-border p-3">
                <MenuGroup group={productMenu.medecine} tone="nextoubib" />
              </div>
              <div className="rounded-lg bg-surface p-3">
                <p className="mb-3 px-2 eyebrow text-muted">Aller plus loin</p>
                <ul className="space-y-1">
                  {productMenuSecondary.map((item) => (
                    <li key={item.href}>
                      <NavigationMenu.Link asChild>
                        <Link
                          href={item.href}
                          className="flex items-start gap-3 rounded-lg p-2 transition-colors outline-none hover:bg-background focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-primary/40"
                        >
                          {item.icon ? (
                            <IconTile icon={item.icon} tone="neutral" size="sm" />
                          ) : null}
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-foreground">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-[13px] leading-snug text-muted">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
