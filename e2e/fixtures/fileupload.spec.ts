import { test, expect } from "@playwright/test";
import { FileUpload } from "../pages/FileUpload";

test.describe("File upload tests", () => {
  let fileUp: FileUpload;

  test.beforeEach(async ({ page }) => {
    fileUp = new FileUpload(page);
    await page.goto("https://the-internet.herokuapp.com/upload");
  });

  test("Upload a file", async () => {
    await fileUp.uploadFile();
    await expect(
      fileUp.fileUploadedMsg,
      "Message didn't appear."
    ).toBeVisible();
    await expect(
      fileUp.nameOfFile,
      "The name of the file is not displayed/It shows the wrong file."
    ).toBeVisible();
  });
});
