import { type Page, type Locator } from "@playwright/test";

export class JavasScriptAlerts {
  readonly page: Page;
  readonly jsAlert: Locator;
  readonly successfulMsg: Locator;
  readonly jsConfirm: Locator;
  readonly okMsg: Locator;
  readonly cancelMsg: Locator;
  readonly jsPrompt: Locator;
  readonly nullMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jsAlert = page.getByRole("button", { name: "Click for JS Alert" });
    this.successfulMsg = page.getByText("You successfully clicked an alert");
    this.jsConfirm = page.getByRole("button", {
      name: "Click for JS Confirm",
    });
    this.okMsg = page.getByText("You clicked: Ok");
    this.cancelMsg = page.getByText("You clicked: Cancel");
    this.jsPrompt = page.getByRole("button", {
      name: "Click for JS Prompt",
    });
    this.nullMsg = page.getByText("You entered: null");
  }

  async clickAndAcceptAlert() {
    await this.jsAlert.click();
    await this.page.on("dialog", (dialog) => dialog.accept());
  }

  async clickAndCancelAlert() {
    await this.jsConfirm.click();
    await this.page.on("dialog", (dialog) => dialog.dismiss);
  }

  async clickAndWriteAlert() {
    await this.jsPrompt.click();
    this.page.on(
      "dialog",
      async (dialog) =>
        // Enter text into the prompt and accept it
        await dialog.accept("test")
    );
  }
}
