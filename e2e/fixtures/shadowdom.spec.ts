import { test, expect } from "@playwright/test";
import { Shadow } from "../pages/ShadowDOM";

test.describe("Shadow DOM tests", () => {
  let shdw: Shadow;

  test.beforeEach(async ({ page }) => {
    shdw = new Shadow(page);
    await page.goto("https://the-internet.herokuapp.com/shadowdom");
  });

  test("Element 1 is visible", async ({ page }) => {
    await expect(shdw.firstElement).toBeVisible();
  });

  test("Element 2 is visible", async ({ page }) => {
    await expect(shdw.secondElement).toBeVisible();
  });
});
