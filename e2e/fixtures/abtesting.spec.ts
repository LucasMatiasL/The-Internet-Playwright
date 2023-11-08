import { test, Browser, Page, expect } from '@playwright/test';
import { abTestingPage } from '../pages/abtesting';


test.describe('A/B Testing tests', () => {
    let abTesting: abTestingPage;

    test.beforeEach(async ({ page }) => {
        abTesting = new abTestingPage(page);
        await page.goto("https://the-internet.herokuapp.com/abtest");
    });

    test('Content is displayed', async ({ page }) => {
        await expect(abTesting.content).toBeVisible();
    });

});
