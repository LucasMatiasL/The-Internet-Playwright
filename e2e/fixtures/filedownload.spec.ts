import { test, Page, expect } from "@playwright/test";
import { Filedownload } from "../pages/Filedownload";


test.describe("File Download tests", () => {
  let fileD: Filedownload;
  const assertText: string = "e2e\\fixturesdownloads\\text.txt";
  const assertPng: string = "e2e\\fixturesdownloads\\kris.png";
  const assertJson: string = "e2e\\fixturesdownloads\\preprod.json";

  test.beforeEach(async ({ page }) => {
    fileD = new Filedownload(page);
    await page.goto("https://the-internet.herokuapp.com/download");
  });

  test("Download text.txt", async ({ page }) => {
    await fileD.downloadFile(page, fileD.textTxt);
    await expect(assertText).toBeTruthy();
  });

  test("Download kris.png", async ({ page }) => {
    await fileD.downloadFile(page, fileD.krisPng);
    await expect(assertPng).toBeTruthy();
  });

  test("Download prepod.json", async ({ page }) => {
    await fileD.downloadFile(page, fileD.preprodJson);
    await expect(assertJson).toBeTruthy();
  });
});
