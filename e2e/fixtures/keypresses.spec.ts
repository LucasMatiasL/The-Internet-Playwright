import { test, expect } from "@playwright/test";
import { KeyPresses } from "../pages/KeyPresses";

test.describe("Key Presses tests", () => {
  let key: KeyPresses;

  test.beforeEach(async ({ page }) => {
    key = new KeyPresses(page);
    await page.goto("https://the-internet.herokuapp.com/key_presses");
  });

  test('Write "T" and assert that "T" was pressed', async ({ page }) => {
    await key.typeTest();
    await expect(key.lastKeyT).toHaveText("You entered: T");
  });

  test("Press the down key and assert that it was pressed", async ({
    page,
  }) => {
    await key.pressDownKey();
    await expect(key.lastKeyDown).toHaveText("You entered: DOWN");
  });

  test("Write and delete and assert that the backspace key was pressed", async ({
    page,
  }) => {
    await key.deleteText();
    await expect(key.lastKeyBackSpace).toContainText("You entered: BACK_SPACE");
  });
  
});
