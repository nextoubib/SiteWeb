import { expect, test } from "@playwright/test";

test("homepage renders the NEXRAD headline", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
