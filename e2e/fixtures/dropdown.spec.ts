import { test, expect } from "@playwright/test";
import { Dropdown } from "../pages/Dropdown";

test.describe("Dropdown tests", () => {
  let dropdownObj: Dropdown;

  test.beforeEach(async ({ page }) => {
    dropdownObj = new Dropdown(page);
    await page.goto("https://the-internet.herokuapp.com/dropdown");
  });

  test("Select option 1", async () => {
    await dropdownObj.selectOptionOne();
    await expect(dropdownObj.dropdown, "Couldn't select option 1").toHaveValue(
      "1"
    );
  });

  test("Select option 2", async () => {
    await dropdownObj.selectOptionTwo();
    await expect(dropdownObj.dropdown, "Couldn't select option 2.").toHaveValue(
      "2"
    );
  });
});
