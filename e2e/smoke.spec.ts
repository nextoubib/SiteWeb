import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/radiologie",
  "/radiologie/ai",
  "/radiologie/ris",
  "/radiologie/bridge",
  "/nextoubib",
  "/solutions",
  "/technology",
  "/pricing",
  "/demo",
  "/resources",
  "/about",
];

for (const route of routes) {
  test(`${route} renders a single H1 without horizontal overflow`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

test("products mega menu links to every product", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop navigation only");
  await page.goto("/");
  await page.getByRole("button", { name: "Produits" }).hover();
  for (const name of ["Nexrad AI", "Nexrad RIS", "Nexrad Bridge", "Nextoubib"]) {
    await expect(
      page.getByRole("link", { name: new RegExp(name) }).first(),
    ).toBeVisible();
  }
});

test("mobile drawer opens and navigates", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile navigation only");
  await page.goto("/");
  await page.getByRole("button", { name: "Ouvrir le menu" }).click();
  await page
    .getByRole("link", { name: /Nextoubib/ })
    .first()
    .click();
  await expect(page).toHaveURL(/\/nextoubib$/);
});

test("demo form shows validation errors on empty submit", async ({ page }) => {
  await page.goto("/demo");
  await page.getByRole("button", { name: "Demander une démonstration" }).click();
  await expect(page.getByText("Prénom requis (2 caractères minimum).")).toBeVisible();
});

test("sitemap and robots are served", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain("/radiologie/ai");
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Sitemap:");
});
