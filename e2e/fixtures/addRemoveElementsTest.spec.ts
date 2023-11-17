import { test, expect } from "@playwright/test";
import { addRemoveElements } from "../pages/addRemoveElements";

test.describe("Add/Remove Elements tests", () => {
  let arElements: addRemoveElements;

  test.beforeEach(async ({ page }) => {
    arElements = new addRemoveElements(page);
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  });

  test("Add Element button is visible", async () => {
    await expect(arElements.addElementBtn, "Add Element button was not visible.").toBeVisible();
  });

  test("Click Add Element", async () => {
    await arElements.clickAddElement();
    await expect(arElements.deleteBtn, "After clicking the Add Element button the Delete button didn't appear.").toBeVisible();
  });

  test("Click Delete button", async () => {
    await arElements.clickAddElement();
    await arElements.clickDeleteBtn();
    await expect(arElements.deleteBtn, "Delete button is still visible.").not.toBeVisible();
  });

  test("Click 10 times Add Element button", async () => {
    await arElements.addElement10Times();
    await expect(arElements.last10DeleteBtn, "The 10th Delete Button is not visible.").toBeVisible();
  });

  test("Add and delete 10 elements", async () => {
    await arElements.addAndDelete10Times();
    await expect(arElements.deleteBtn, "Delete Button is still visible.").not.toBeVisible();
  });
});
