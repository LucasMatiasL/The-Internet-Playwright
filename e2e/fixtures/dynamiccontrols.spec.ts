import { test, expect } from "@playwright/test";
import { DynamicControls } from "../pages/DynamicControls";

test.describe("Dynamic Controls tests", () => {
  let dynamic: DynamicControls;

  test.beforeEach(async ({ page }) => {
    dynamic = new DynamicControls(page);
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  });

  test("Can check the CheckBox", async () => {
    await dynamic.clickCheckbox();
    await expect(dynamic.checkBox, "Checkbox is not checked.").toBeChecked();
  });

  test("Can remove the CheckBox", async () => {
    await dynamic.clickRemoveBtn();
    await expect(
      dynamic.waitForIt,
      "Wait for It... text didn't appear."
    ).toBeVisible();
    await expect(
      dynamic.checkBox,
      "Checkbox is still visible."
    ).not.toBeVisible();
    await expect(
      dynamic.itsGoneText,
      "It's gone text didn't appear."
    ).toBeVisible();
  });

  test("Can add the CheckBox", async () => {
    await dynamic.clickRemoveAndAddCheckbox();
    await expect(
      dynamic.waitForIt,
      "Wait for It... text didn't appear."
    ).toBeVisible();
    await expect(
      dynamic.itsBack,
      "It's back text didn't appear."
    ).toBeVisible();
    await expect(dynamic.checkBox, "Checkbox didn't appear.").toBeVisible();
  });

  test("Can enable the text box", async () => {
    await dynamic.clickEnableBtn();
    await expect(
      dynamic.waitForIt,
      "Wait for It... text didn't appear."
    ).toBeVisible();
    await expect(dynamic.textBox, "Text box wasn't enabled.").toBeEnabled();
    await expect(
      dynamic.enabledMsg,
      "Enabled message didn't appear."
    ).toBeVisible();
  });

  test("Can disable de text box", async () => {
    await dynamic.enableAndDisableTextBox();
    await expect(
      dynamic.waitForIt,
      "Wait for It... text didn't appear."
    ).toBeVisible();
    await expect(dynamic.textBox, "Text box wasn't disabled.").toBeDisabled();
    await expect(
      dynamic.enableBtn,
      "Enable button is not displayed."
    ).toBeVisible();
  });
});
