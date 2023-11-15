import { test, expect } from "@playwright/test";
import { FileUpload } from "../pages/FileUpload";

test.describe("File upload tests", () => {
  let fileUp: FileUpload;

  test.beforeEach(async ({ page }) => {
    fileUp = new FileUpload(page);
    await page.goto("https://the-internet.herokuapp.com/upload");
  });

  test.skip("Upload a file", async ({ page }) => {
    await fileUp.uploadFile();
    await expect(fileUp.fileUploadedMsg).toBeVisible();
  });
});
