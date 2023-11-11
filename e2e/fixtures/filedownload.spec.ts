import { test, Page, expect } from "@playwright/test";
import { Filedownload } from "../pages/Filedownload";


test.describe("File Download tests", () => {
  let fileD: Filedownload;


  test.beforeEach(async ({ page }) => {
    fileD = new Filedownload(page);
    await page.goto("https://the-internet.herokuapp.com/download");
  });

  test("Download sample.pdf", async ({ page }) => {
    await fileD.downloadFile(page, fileD.samplePdf);
  });

  test("Download tomjerry.jpeg", async ({ page }) => {
    await fileD.downloadFile(page, fileD.tomAndJerry);
  });

  test("Download testFile1.cvs", async ({ page }) => {
    await fileD.downloadFile(page, fileD.testFileCsv);
  });
});
