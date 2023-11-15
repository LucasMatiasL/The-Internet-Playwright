import { test, expect } from '@playwright/test';
import { Abtesting } from '../pages/Abtesting';


test.describe('A/B Testing tests', () => {
    let abTest: Abtesting;

    test.beforeEach(async ({ page }) => {
        abTest = new Abtesting(page);
        await page.goto("https://the-internet.herokuapp.com/abtest");
    });

    test('Content is displayed', async ({ page }) => {
        await expect(abTest.content).toBeVisible();
    });

});
