import { test, expect } from "@playwright/test";
import { Inputs } from "../pages/Inputs";

test.describe("Inputs tests", () => {
  let input: Inputs;

  test.beforeEach(async ({ page }) => {
    input = new Inputs(page);
    await page.goto("https://the-internet.herokuapp.com/inputs");
  });

  test("Text Box is visible", async () => {
    await expect(input.textBox, "Text box is not visible.").toBeVisible();
  });

  test("Text Box is empty", async () => {
    await expect(input.textBox, "Text box isn't empty.").toBeEmpty();
  });

  test("Text Box is editable", async () => {
    await expect(input.textBox, "Text box isn't editable.").toBeEditable();
  });

  test("Write numbers in Text Box", async () => {
    await input.writeNumbers("12345");
    await expect(
      input.textBox,
      "Can't type in the text box/Wrong values in the text box"
    ).toHaveValue("12345");
  });

  test("Try to write numbers in the Text Box", async () => {
    await input.tryToWriteText("This shouldn't allow text, only numbers.");
    await expect(input.textBox, "Text box is not empty").toBeEmpty();
  });
});
