import { type Page, type Locator } from "@playwright/test";

export class DynamicContent {
  readonly page: Page;
  readonly content: Locator;

  constructor(page: Page) {
    this.page = page;
    this.content = page.locator('#content').nth(1);
  }

  async compareContentAfterReload(): Promise<boolean> {
    await this.page.mouse.move(100, 0);
    const getFirstContent: string | null = await this.content.textContent();
    await this.page.reload();
    const getSecondContent: string | null = await this.content.textContent();

    if (
      getFirstContent !== null &&
      getSecondContent !== null &&
      getFirstContent !== getSecondContent
    ) {
      return true;
    } else {
      return false;
    }
  }
}
