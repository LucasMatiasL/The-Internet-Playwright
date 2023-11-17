import { test, expect } from "@playwright/test";
import { ForgotPassword } from "../pages/ForgotPassword";

test.describe("Forgot Password tests", () => {
  let frgtPassword: ForgotPassword;

  test.beforeEach(async ({ page }) => {
    frgtPassword = new ForgotPassword(page);
    await page.goto("https://the-internet.herokuapp.com/forgot_password");
  });

  test("Write email and click the retrieve button", async () => {
    test.info().annotations.push({
      type: "Info",
      description: "Currently this feature doesn't work",
    });
    await frgtPassword.insertMailAndClickBtn();
  });
});
