import { test, Page, expect } from "@playwright/test";
import { DynamicContent } from "../pages/DynamicContent";

test.describe("Dynamic content tests", () => {
  let dynamic: DynamicContent;

  test.beforeEach(async ({ page }) => {
    dynamic = new DynamicContent(page);
    await page.goto("https://the-internet.herokuapp.com/dynamic_content");
  });

  test("Assert that content has changed after reload", async ({ page }) => {
    await expect(dynamic.compareContentAfterReload()).toBeTruthy();
  });
});
