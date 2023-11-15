import { type Page, type Locator } from "@playwright/test";

export class InfiniteScroll {
  readonly page: Page;
  readonly title: Locator;
  readonly newContent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByRole("heading", { name: "Infinite Scroll" });
    this.newContent = page.locator('//*[@id="content"]/div/div/div/div/div[2]');
  }

  async scrollDown() {
    await this.page.locator("body").click();
    for (let i = 0; i < 100; i++) {
      await this.page.locator("body").press("ArrowDown");
    }
  }
}
