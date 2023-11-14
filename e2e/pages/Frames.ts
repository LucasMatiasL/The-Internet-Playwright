import { type Page, type Locator } from "@playwright/test";

export class Frames {
  readonly page: Page;
  readonly editor: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    this.page = page;
    this.editor = page
      .frameLocator('iframe[title="Rich Text Area"]')
      .getByText("Your content goes here.");
    this.content = page
      .frameLocator('iframe[title="Rich Text Area"]')
      .getByText("test");
  }

  async typeText() {
    await this.editor.click();
    await this.editor.fill("test");
  }
}
