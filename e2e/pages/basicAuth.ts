import { type Locator, type Page } from "@playwright/test";

export class basicAuth {
  readonly page: Page;
  readonly notAuthorizedMsg: Locator;
  readonly successfulLogin; Locator;

  constructor(page: Page) {
    this.page = page;
    this.notAuthorizedMsg = page.getByText("Not authorized");
    this.successfulLogin = page.locator("#content");
  }
}


