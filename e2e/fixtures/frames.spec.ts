import { test, expect } from "@playwright/test";
import { Frames } from "../pages/Frames";

test.describe("Frames tests", () => {
  let frame: Frames;

  test.beforeEach(async ({ page }) => {
    frame = new Frames(page);
    await page.goto("https://the-internet.herokuapp.com/iframe");
  });

  test("Assert that the text editor is visible", async () => {
    await expect(frame.editor, "Text editor is not visible.").toBeVisible();
  });

  test("Can type text in the editor", async () => {
    await frame.typeText();
    await expect(
      frame.content,
      "Coudn't type in the text editor."
    ).toContainText("test");
  });
});
