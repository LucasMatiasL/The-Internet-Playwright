import { type Page, type Locator } from "@playwright/test";
import { Context } from "vm";

export class Windows {
  readonly page: Page;
  readonly clickNewTab: Locator;
  readonly newWindowContent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clickNewTab = page.getByRole("link", { name: "Click Here" });
    this.newWindowContent = page.getByRole("heading", { name: "New Window" });
  }

  async clickOnNewTab() {
    this.clickNewTab.click();
  }
}
