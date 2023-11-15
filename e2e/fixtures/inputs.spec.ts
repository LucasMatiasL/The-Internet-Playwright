import { test, expect } from "@playwright/test";
import { Inputs } from "../pages/Inputs";

test.describe("Inputs tests", () => {
  let input: Inputs;

  test.beforeEach(async ({ page }) => {
    input = new Inputs(page);
    await page.goto("https://the-internet.herokuapp.com/inputs");
  });

  test("Text Box is visible", async ({ page }) => {
    await expect(input.textBox).toBeVisible();
  });

  test("Text Box is empty", async ({ page }) => {
    await expect(input.textBox).toBeEmpty();
  });

  test("Text Box is editable", async ({ page }) => {
    await expect(input.textBox).toBeEditable();
  });

  test("Write numbers in Text Box", async ({ page }) => {
    await input.writeNumbers("12345");
    await expect(input.textBox).toHaveValue("12345");
  });

  test("Try to write numbers in the Text Box", async ({ page }) => {
    await input.tryToWriteText("This shouldn't allow text, only numbers.");
    await expect(input.textBox).toBeEmpty();
  });
  
});
