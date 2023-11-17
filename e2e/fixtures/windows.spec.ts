import { test, expect } from "@playwright/test";
import { Windows } from "../pages/Windows";

test.describe("Multiple Windows tests", () => {
  let window: Windows;

  test.beforeEach(async ({ page }) => {
    window = new Windows(page);
    await page.goto("https://the-internet.herokuapp.com/windows");
  });

  test("Click locator and assert that a new tab is open", async ({
    page,
    context,
  }) => {
    page = await context.newPage();
    const [newtab] = await Promise.all([
      context.waitForEvent("page"), //listener
      await window.clickOnNewTab(), //event on the promise page
    ]);
    await expect(newtab).toHaveURL(
      "https://the-internet.herokuapp.com/windows/new"
    );
  });

  test("Assert that the new window has the correct content", async ({
    page,
    context,
  }) => {
    page = await context.newPage();
    const [newtab] = await Promise.all([
      context.waitForEvent("page"), //listener
      await window.clickOnNewTab(), //event on the promise page
    ]);
    await expect(
      window.newWindowContent,
      "Content is not visible."
    ).toBeVisible();
  });
});
