import { type Locator, type Page } from "@playwright/test";

export class Filedownload {
  readonly textTxt: Locator;
  readonly krisPng: Locator;
  readonly preprodJson: Locator;

  //Edit this path to your download folder
  readonly myPath: string;

  constructor(page: Page) {
    this.textTxt = page.getByRole("link", { name: "text.txt" });
    this.krisPng = page.getByRole("link", { name: "Kris.jpg" });
    this.preprodJson = page.getByRole("link", { name: "preprod.json" });
    this.myPath =
      "C:\\Users\\Lucas\\Documents\\Playwright-Projects\\The-Internet-Playwright\\The-Internet-Playwright\\e2e\\fixtures\\downloads\\";
  }

  async downloadFile(page: Page, file: Locator) {
    const downloadPromise = page.waitForEvent("download");
    await file.click();
    const download = await downloadPromise;
    await download.saveAs(this.myPath + download.suggestedFilename());
  }
}
