import { type Page, type Locator } from "@playwright/test";

export class Checkboxes {
  readonly page: Page;
  readonly bothCheckboxes: Locator;
  readonly firstCheckbox: Locator;
  readonly secondCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bothCheckboxes = page.getByText("checkbox 1 checkbox 2");
    this.firstCheckbox = page.getByRole("checkbox").first();
    this.secondCheckbox = page.getByRole("checkbox").nth(1);
  }

  async bothCheckboxesVisible(): Promise<void> {
    await this.bothCheckboxes.isVisible();
  }

  async checkFirstBox() {
    await this.firstCheckbox.check();
  }

  async uncheckFirstBox() {
    await this.firstCheckbox.uncheck();
  }

  async checkSecondBox() {
    await this.secondCheckbox.check();
  }

  async uncheckSecondBox() {
    await this.secondCheckbox.uncheck();
  }

  async firstCheckboxIsChecked(): Promise<void> {
    await this.firstCheckbox.isChecked();
  }

  async secondCheckboxIsChecked(): Promise<void> {
    await this.secondCheckbox.isChecked();
  }

  async selectBothCheckBoxes() {
    await this.uncheckSecondBox();
    await this.checkFirstBox();
    await this.checkSecondBox();
  }

  async selectOnlyFirstCheckbox(){
    await this.uncheckSecondBox();
    await this.checkFirstBox();
  }

  async selectOnlySecondCheckbox(){
    await this.uncheckSecondBox();
    await this.checkSecondBox();
  }
}
