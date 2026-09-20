import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  footerGroups,
  mainNav,
  productMenu,
  productMenuSecondary,
  siteRoutes,
} from "./navigation";
import { products } from "./products";
import { pricingPlans } from "./pricing";
import { solutionProfiles } from "./solutions";

const appDir = join(process.cwd(), "src", "app");

function pageExists(route: string) {
  const path = route.split(/[?#]/)[0];
  return existsSync(join(appDir, path === "/" ? "" : path, "page.tsx"));
}

describe("site routes", () => {
  it("every declared route has a page.tsx", () => {
    for (const route of siteRoutes) {
      expect(pageExists(route), `missing page for ${route}`).toBe(true);
    }
  });

  it("navigation links only point to existing routes", () => {
    const links = [
      ...mainNav,
      ...productMenu.radiologie.items,
      ...productMenu.medecine.items,
      ...productMenuSecondary,
      ...footerGroups.flatMap((group) => group.items),
    ];
    for (const link of links) {
      expect(pageExists(link.href), `broken link ${link.href}`).toBe(true);
    }
  });

  it("product, pricing and solution links resolve", () => {
    for (const product of products) {
      expect(pageExists(product.href), `broken product link ${product.href}`).toBe(true);
    }
    for (const plan of pricingPlans) {
      expect(pageExists(plan.cta.href), `broken pricing CTA ${plan.cta.href}`).toBe(true);
    }
    for (const profile of solutionProfiles) {
      expect(profile.products.length).toBeGreaterThan(0);
    }
  });
});
