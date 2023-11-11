import { type Locator, type Page } from "@playwright/test";

export class DynamicControls {
  readonly page: Page;
  readonly checkBox: Locator;
  readonly removeCheckboxBtn: Locator;
  readonly waitForIt: Locator;
  readonly itsGoneText: Locator;
  readonly addBtn: Locator;
  readonly itsBack: Locator;
  readonly enableBtn: Locator;
  readonly disableBtn: Locator;
  readonly textBox: Locator;
  readonly enabledMsg: Locator;
  readonly disabledMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkBox = page.getByRole("checkbox");
    this.removeCheckboxBtn = page.getByRole("button", { name: "Remove" });
    this.waitForIt = page.getByText("Wait for it...").first();
    this.itsGoneText = page.getByText("It's gone!");
    this.addBtn = page.getByRole("button", { name: "Add" });
    this.itsBack = page.getByText("It's back!");
    this.enableBtn = page.getByRole("button", { name: "Enable" });
    this.disableBtn = page.getByRole("button", { name: "Disable" });
    this.textBox = page.getByRole("textbox");
    this.enabledMsg = page.getByText("It's enabled!");
    this.disabledMsg = page.getByText("It's disabled!");
  }

  async clickCheckbox() {
    await this.checkBox.check();
  }

  async clickRemoveBtn() {
    await this.removeCheckboxBtn.click();
  }

  async clickAddBtn() {
    await this.addBtn.click();
  }

  async clickRemoveAndAddCheckbox() {
    await this.clickRemoveBtn();
    await this.clickAddBtn();
  }

  async clickEnableBtn() {
    await this.enableBtn.click();
  }

  async clickDisableBtn(){
    await this.disableBtn.click();
  }

  async enableAndDisableTextBox(){
    await this.clickEnableBtn();
    await this.clickDisableBtn();
  }


}
