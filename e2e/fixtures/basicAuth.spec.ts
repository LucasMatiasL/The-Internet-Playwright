import { test, expect } from "@playwright/test";
import { basicAuth } from "../pages/basicAuth";
import { TheInternetPage } from "../pages/the-internet-page";

test.describe("Basic Auth tests", () => {
  let bAuth: basicAuth;
  let userAndPassword = "admin";
  let theInternet: TheInternetPage;

  test.beforeEach(async ({ page }) => {
    bAuth = new basicAuth(page);
    theInternet = new TheInternetPage(page);
    await page.goto("/");
    await theInternet.clickBasicAuth();
  });

  test.skip("Successful login", async ({ page }) => {
    //Complete the inputs
    await expect(bAuth.successfulLogin).toContainText(
      "Congratulations! You must have the proper credentials."
    );
  });
});
