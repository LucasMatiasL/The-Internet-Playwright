import { test, Browser, Page, expect } from "@playwright/test";
import { TheInternetPage } from "../pages/the-internet-page";

test.describe("HomePage tests", () => {
  let theInternet: TheInternetPage;

  test.beforeEach(async ({ page }) => {
    theInternet = new TheInternetPage(page);
    await page.goto("/");
  });

  test("Homepage has the correct title", async ({ page }) => {
    await expect(page).toHaveTitle("The Internet");
  });

  test.describe("Actions on the homepage", () => {
    test("Click A/B Testing", async ({ page }) => {
        await theInternet.clickAbTesting();
        await expect(page).toHaveURL("/abtest");
    });

    test('Click on Add/Remove Elements', async ({ page }) => {
        await theInternet.clickAddRemoveElements();
        await expect(page).toHaveURL("/add_remove_elements/");
    })
    




  });
});
