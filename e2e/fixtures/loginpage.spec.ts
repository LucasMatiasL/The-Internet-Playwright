import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Page tests", () => {
  let loginP: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginP = new LoginPage(page);
    await page.goto("https://the-internet.herokuapp.com/login");
  });

  test("Successful login", async ({ page }) => {
    await loginP.successfulLogin();
    await expect(page).toHaveURL(loginP.successUrl);
    await expect(loginP.secureAreaTitle, "Title is not visible.").toBeVisible();
    await expect(loginP.secureAreaParagraph, "Paragraph is not visible.").toBeVisible();
    await expect(loginP.logoutBtn, "Logout button is not visible.").toBeVisible();
  });

  test("Successful login and logout", async ({ page }) => {
    await loginP.loginAndLogout();
    await expect(page).toHaveURL(loginP.url);
    await expect(loginP.logoutMsg, "Logout message is not visible.").toBeVisible();
  });

  test("Failed login, invalid username", async () => {
    await loginP.tryWithInvalidUser();
    await expect(loginP.invalidUsrMsg, "Invalid user message is not visible.").toBeVisible();
  });

  test("Failed login, invalid password", async () => {
    await loginP.tryWithInvalidPassword();
    await expect(loginP.invalidPassMsg, "Invalid password message is not visible.").toBeVisible();
  });
});
