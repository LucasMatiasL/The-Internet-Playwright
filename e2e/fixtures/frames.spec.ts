import { test, expect } from "@playwright/test";
import { Frames } from "../pages/Frames";

test.describe("Frames tests", () => {
  let frame: Frames;

  test.beforeEach(async ({ page }) => {
    frame = new Frames(page);
    await page.goto("https://the-internet.herokuapp.com/iframe");
  });

  test("Assert that the text editor is visible", async ({ page }) => {
    await expect(frame.editor).toBeVisible();
  });

  test("Can type text in the editor", async ({ page }) => {
    await frame.typeText();
    await expect(frame.content).toContainText("test");
  });
});
