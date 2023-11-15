import { type Page, type Locator } from "@playwright/test";

export class KeyPresses {
  readonly page: Page;
  readonly textBox: Locator;
  readonly lastKeyT: Locator;
  readonly lastKeyDown: Locator;
  readonly lastKeyBackSpace: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textBox = page.locator("#target");
    this.lastKeyT = page.getByText("You entered: T");
    this.lastKeyDown = page.getByText("You entered: DOWN");
    this.lastKeyBackSpace = page.getByText("You entered: BACK_SPACE");
  }

  async typeTest(): Promise<void> {
    return this.textBox.press("T");
  }

  async pressDownKey(): Promise<void> {
    return this.textBox.press("ArrowDown");
  }

  async deleteText(): Promise<void> {
    await this.typeTest();
    return this.textBox.press("Backspace");
  }
}
