import { test, Page, expect } from "@playwright/test";
import { DynamicControls } from "../pages/DynamicControls";

test.describe("Dynamic Controls tests", () => {
  let dynamic: DynamicControls;

  test.beforeEach(async ({ page }) => {
    dynamic = new DynamicControls(page);
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  });

  test("Can check the CheckBox", async ({ page }) => {
    await dynamic.clickCheckbox();
    await expect(dynamic.checkBox).toBeChecked();
  });

  test("Can remove the CheckBox", async ({ page }) => {
    await dynamic.clickRemoveBtn();
    await expect(dynamic.waitForIt).toBeVisible();
    await expect(dynamic.checkBox).not.toBeVisible();
    await expect(dynamic.itsGoneText).toBeVisible();
  });

  test("Can add the CheckBox", async ({ page }) => {
    await dynamic.clickRemoveAndAddCheckbox();
    await expect(dynamic.waitForIt).toBeVisible();
    await expect(dynamic.itsBack).toBeVisible();
    await expect(dynamic.checkBox).toBeVisible();
  });

  test('Can enable the text box', async ({ page }) => {
    await dynamic.clickEnableBtn();
    await expect(dynamic.waitForIt).toBeVisible();
    await expect(dynamic.textBox).toBeEnabled();
    await expect(dynamic.enabledMsg).toBeVisible();
  });

  test('Can disable de text box', async ({ page }) => {
    await dynamic.enableAndDisableTextBox();
    await expect(dynamic.waitForIt).toBeVisible();
    await expect(dynamic.textBox).toBeDisabled();
    await expect(dynamic.enableBtn).toBeVisible();
  })
  
  


});
