import { test, Page, expect } from "@playwright/test";
import { Entryad } from "../pages/Entryad";

test.describe("Entry Ad tests", () => {
  let entry: Entryad;

  test.beforeEach(async ({ page }) => {
    entry = new Entryad(page);
    await page.goto("https://the-internet.herokuapp.com/entry_ad");
  });

  test("Assert that the window has the correct title", async ({ page }) => {
    await expect(entry.modalTitle).toHaveText('This is a modal window')
  });

  test('Assert that the content is correct', async ({ page }) => {
    await expect(entry.modalText).toContainText("It's commonly used to encourage a user to take an action");
  });

  test('Close the modal window', async ({ page }) => {
    await entry.clickModalCloseBtn();
    await expect(entry.modalWindow).not.toBeVisible();
  });


  
  


});
