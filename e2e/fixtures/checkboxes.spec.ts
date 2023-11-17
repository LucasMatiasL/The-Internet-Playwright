import { test, expect } from "@playwright/test";
import { Checkboxes } from "../pages/Checkboxes";

test.describe("Checkboxes tests", () => {
  let checkbox: Checkboxes;

  test.beforeEach(async ({ page }) => {
    checkbox = new Checkboxes(page);
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
  });

  test("Both checkboxes are visible", async () => {
    await expect(
      checkbox.bothCheckboxesVisible,
      "Checkboxes are not visible."
    ).toBeTruthy();
  });

  test("Select only first checkbox", async () => {
    await checkbox.selectOnlyFirstCheckbox();
    await expect(
      checkbox.firstCheckboxIsChecked,
      "Checkbox isn't checked."
    ).toBeTruthy();
  });

  test("Select only second checkbox", async () => {
    await checkbox.selectOnlySecondCheckbox();
    await expect(
      checkbox.secondCheckboxIsChecked,
      "Checkbox isn't checked."
    ).toBeTruthy();
  });

  test("Select both checkboxes", async () => {
    await checkbox.selectBothCheckBoxes();
    await expect(
      checkbox.firstCheckboxIsChecked,
      "Checkbox isn't checked."
    ).toBeTruthy();
    await expect(
      checkbox.secondCheckboxIsChecked,
      "Checkbox isn't checked."
    ).toBeTruthy();
  });
});
