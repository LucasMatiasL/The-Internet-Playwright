import { test, expect } from "@playwright/test";
import { Notification } from "../pages/Notification";

test.describe("Notifications tests", () => {
  let notif: Notification;

  test.beforeEach(async ({ page }) => {
    notif = new Notification(page);
    await page.goto(
      "https://the-internet.herokuapp.com/notification_message_rendered"
    );
  });

  // This one fails to check if the notifications are visible due to a bug.
  // https://github.com/microsoft/playwright/issues/13090
  test.skip('A notification should appear when I click "Click here" ', async ({
    page,
  }) => {
    await notif.clickNewNotif();
    await expect(notif.notifAppeared()).toBeTruthy();
  });



});