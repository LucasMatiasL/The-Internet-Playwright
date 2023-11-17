import { type Locator, type Page } from "@playwright/test";

export class addRemoveElements {
  readonly page: Page;
  readonly addElementBtn: Locator;
  readonly deleteBtn: Locator;
  readonly last10DeleteBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addElementBtn = page.getByRole("button", { name: "Add Element" });
    this.deleteBtn = page.locator(".added-manually").first();
    this.last10DeleteBtn = page.locator("button:nth-child(10)");
  }

  async clickAddElement() {
    await this.addElementBtn.click();
  }

  async clickDeleteBtn() {
    await this.deleteBtn.click();
  }

  async addElement10Times() {
    for (let i = 0; i < 10; i++) {
      await this.clickAddElement();
    }
  }

  async addAndDelete10Times() {
    await this.addElement10Times();
    for (let i = 0; i < 10; i++) {
      await this.clickDeleteBtn();
    }
  }
}
