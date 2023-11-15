import { test, expect } from "@playwright/test";
import { JavasScriptAlerts } from "../pages/JavaScriptAlerts";

test.describe("JavaScript Alerts tests", () => {
  let alert: JavasScriptAlerts;

  test.beforeEach(async ({ page }) => {
    alert = new JavasScriptAlerts(page);
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  });

  test("Click and accept the JS Alert", async ({ page }) => {
    await alert.clickAndAcceptAlert();
    await expect(alert.successfulMsg).toBeVisible();
  });

  test("Click and cancel JS Alert", async ({ page }) => {
    await alert.clickAndCancelAlert();
    await expect(alert.cancelMsg).toBeVisible();
  });

  test("Click and write in the JS Prompt", async ({ page }) => {
    await alert.clickAndWriteAlert();
    await expect(alert.nullMsg).toBeVisible();
  });
});
