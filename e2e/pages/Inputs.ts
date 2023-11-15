import { type Page, type Locator } from "@playwright/test";

export class Inputs {
  readonly page: Page;
  readonly textBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textBox = page.getByRole("spinbutton");
  }

  async writeNumbers(numbers: string) {
    await this.textBox.fill(numbers);
  }

  async tryToWriteText(text: string) {
    try {
      await this.textBox.fill(text);
    } catch (error) {}
  }
}
