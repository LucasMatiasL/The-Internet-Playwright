import { test, expect } from '@playwright/test';
import { abTesting } from '../pages/Abtesting';


test.describe('A/B Testing tests', () => {
    let abTest: abTesting;

    test.beforeEach(async ({ page }) => {
        abTest = new abTesting(page);
        await page.goto("https://the-internet.herokuapp.com/abtest");
    });

    test('Content is displayed', async ({ page }) => {
        await expect(abTest.content).toBeVisible();
    });

});
