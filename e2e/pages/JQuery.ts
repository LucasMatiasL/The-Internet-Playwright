import { type Page, type Locator } from "@playwright/test";

export class JQuery {
  readonly page: Page;
  readonly disabledMenu: Locator;
  readonly enabledMenu: Locator;
  readonly backToJquery: Locator;
  readonly downloads: Locator;
  readonly backToMenu: Locator;
  readonly cvsFile: Locator;

  //Edit this path to your download folder
  readonly myPath: string;

  constructor(page: Page) {
    this.page = page;
    this.disabledMenu = page.getByRole("link", { name: "Disabled" });
    this.enabledMenu = page.getByRole("link", { name: "Enabled" });
    this.backToJquery = page.getByRole("link", {
      name: "Back to JQuery UI",
    });
    this.downloads = page.getByRole("link", { name: "Downloads" });
    this.backToMenu = page.getByRole("link", { name: "Menu" });
    this.cvsFile = page.getByRole("link", { name: "CSV" });
    this.myPath =
      "C:\\Users\\Lucas\\Documents\\Playwright-Projects\\The-Internet-Playwright\\The-Internet-Playwright\\e2e\\fixtures\\downloads\\";
  }

  async doHoverOnDisabled(locator: Locator) {
    await locator.hover();
  }

  async doHover(locator: Locator) {
    await locator.hover();
  }

  async doClick(locator: Locator) {
    await locator.click();
  }

  async clickBackToJquery() {
    await this.doHover(this.enabledMenu);
    await this.doClick(this.backToJquery);
  }

  async clickBackToMenu(locator: Locator) {
    await this.clickBackToJquery();
    await this.doClick(locator);
  }

  async downloadFile(page: Page) {
    await this.doHover(this.enabledMenu);
    await this.doHover(this.downloads);
    const downloadPromise = this.page.waitForEvent("download");
    await this.doClick(this.cvsFile);
    const download = await downloadPromise;
    await download.saveAs(this.myPath + download.suggestedFilename());
  }
}
