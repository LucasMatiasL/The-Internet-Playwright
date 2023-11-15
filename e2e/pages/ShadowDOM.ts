import { type Page, type Locator } from "@playwright/test";

export class Shadow {
  readonly page: Page;
  readonly firstElement: Locator;
  readonly secondElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstElement = page
      .locator("my-paragraph")
      .filter({ hasText: "Let's have some different text! My default text" })
      .getByRole("paragraph");
    this.secondElement = page
      .locator("my-paragraph")
      .filter({
        hasText: "Let's have some different text! In a list! My default text",
      })
      .getByRole("paragraph");
  }

}
