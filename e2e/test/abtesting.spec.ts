import { test, Browser, Page, expect } from '@playwright/test';
import { TheInternetPage } from '../pages/the-internet-page';
import { abTestingPage } from '../pages/abtesting';


test.describe('A/B Testing tests', () => {
    let theInternet: TheInternetPage;
    let abTesting: abTestingPage;

    test.beforeEach(async ({ page }) => {
        theInternet = new TheInternetPage(page);
        abTesting = new abTestingPage(page);
        await page.goto("/");
        await theInternet.clickAbTesting();
    });


    test.skip('Title is visible', async ({ page }) => {
        await expect.soft(abTesting.title).toBeVisible();
    });

    test.skip('Title has the first variation', async ({ page }) => {
        await expect.soft(abTesting.title).toContainText("A/B Test Variation 1");
    });

    test.skip('Title has the second variation', async ({ page }) => {
        await expect.soft(abTesting.title).toContainText("");
    });
    
    test('Paragraph is visible', async ({ page }) => {
        await expect(abTesting.paragraph).toBeVisible();
    })
    
    test('Paragraph has the correct text', async ({ page }) => {
        await expect(abTesting.paragraph).toContainText(
          "This is a way in which businesses"
        );
    });

});
