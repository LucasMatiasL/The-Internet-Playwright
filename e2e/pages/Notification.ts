import { Page, Locator } from "@playwright/test";

export class Notification {
  readonly page: Page;
  readonly newNotifLocator: Locator;
  readonly notificationUnsuccessful: Locator;
  readonly notificationSuccessful: Locator;
  readonly closeNotification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newNotifLocator = page.getByRole("link", { name: "Click here" });
    this.notificationUnsuccessful = page.getByText(
      "Action unsuccesful, please try again ×"
    );
    this.notificationSuccessful = page.getByText("Action successful ×");
    this.closeNotification = page.getByRole("link", { name: "×" });
  }

  async clickNewNotif(): Promise<void> {
    await this.newNotifLocator.click();
  }

  async notifAppeared(): Promise<boolean> {
    return (
      (await this.notificationSuccessful.isVisible()) ||
      (await this.notificationUnsuccessful.isVisible())
    );
  }
}
