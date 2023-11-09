import { test, Page, expect } from "@playwright/test";
import { Dropdown } from "../pages/Dropdown";

test.describe("Dropdown tests", () => {
  let dropdownObj: Dropdown;

  test.beforeEach(async ({ page }) => {
    dropdownObj = new Dropdown(page);
    await page.goto("https://the-internet.herokuapp.com/dropdown");
  });

  test("Select option 1", async ({ page }) => {
    await dropdownObj.selectOptionOne();
    await expect(dropdownObj.dropdown).toHaveValue("1");
  });

  test("Select option 2", async ({ page }) => {
    await dropdownObj.selectOptionTwo();
    await expect(dropdownObj.dropdown).toHaveValue("2");
  });
});
