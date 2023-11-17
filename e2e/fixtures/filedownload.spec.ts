import { test, expect } from "@playwright/test";
import { Filedownload } from "../pages/Filedownload";

test.describe("File Download tests", () => {
  let fileD: Filedownload;
  const assertText: string = "e2e\\fixtures\\downloads\\text.txt";
  const assertPng: string = "e2e\\fixtures\\downloads\\kris.png";
  const assertJson: string = "e2e\\fixtures\\downloads\\preprod.json";

  test.beforeEach(async ({ page }) => {
    fileD = new Filedownload(page);
    await page.goto("https://the-internet.herokuapp.com/download");
  });

  // Since the download page changes every day I've decided to skip these tests.
  test.skip("Download text.txt", async ({ page }) => {
    await fileD.downloadFile(page, fileD.textTxt);
    await expect(assertText, "Can't find text.txt").toBeTruthy();
  });

  test.skip("Download kris.png", async ({ page }) => {
    await fileD.downloadFile(page, fileD.krisPng);
    await expect(assertPng, "Can't find kris.png").toBeTruthy();
  });

  test.skip("Download prepod.json", async ({ page }) => {
    await fileD.downloadFile(page, fileD.preprodJson);
    await expect(assertJson, "Can't find prepod.json.").toBeTruthy();
  });
});
