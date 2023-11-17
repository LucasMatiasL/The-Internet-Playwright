import { test, expect } from "@playwright/test";
import { Entryad } from "../pages/Entryad";

test.describe("Entry Ad tests", () => {
  let entry: Entryad;

  test.beforeEach(async ({ page }) => {
    entry = new Entryad(page);
    await page.goto("https://the-internet.herokuapp.com/entry_ad");
  });

  test("Assert that the window has the correct title", async () => {
    await expect(entry.modalTitle, "Not the correct title.").toHaveText(
      "This is a modal window"
    );
  });

  test("Assert that the content is correct", async () => {
    await expect(entry.modalText, "This is the wrong paragraph").toContainText(
      "It's commonly used to encourage a user to take an action"
    );
  });

  test("Close the modal window", async () => {
    await entry.clickModalCloseBtn();
    await expect(
      entry.modalWindow,
      "Couldn't close modal window."
    ).not.toBeVisible();
  });
});
