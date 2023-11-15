import { test, expect } from '@playwright/test';
import { Checkboxes } from '../pages/Checkboxes';

test.describe('Checkboxes tests', () => {
    let checkbox: Checkboxes;

    test.beforeEach(async ({ page }) => {
        checkbox = new Checkboxes(page);
        await page.goto("https://the-internet.herokuapp.com/checkboxes");
    });

    test('Both checkboxes are visible', async ({ page }) => {
        await expect(checkbox.bothCheckboxesVisible).toBeTruthy();
    });

    test('Select only first checkbox', async ({ page }) => {
        await checkbox.selectOnlyFirstCheckbox();
        await expect(checkbox.firstCheckboxIsChecked).toBeTruthy();
    });

    test('Select only second checkbox', async ({ page }) => {
        await checkbox.selectOnlySecondCheckbox();
        await expect(checkbox.secondCheckboxIsChecked).toBeTruthy();
    });

    test('Select both checkboxes', async ({ page }) => {
        await checkbox.selectBothCheckBoxes();
        await expect(checkbox.firstCheckboxIsChecked).toBeTruthy();
        await expect(checkbox.secondCheckboxIsChecked).toBeTruthy();
    });
    
    
    
    
})
