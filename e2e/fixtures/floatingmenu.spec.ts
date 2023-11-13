import { test, Page, expect } from '@playwright/test';
import { FloatingMenu } from '../pages/FloatingMenu';

test.describe('Floating Menu tests', () => {
    let floatingM: FloatingMenu;

    test.beforeEach(async ({ page }) => {
        floatingM = new FloatingMenu(page);
        await page.goto("https://the-internet.herokuapp.com/floating_menu");
    });

    test('Can scroll down and click home button', async ({ page }) => {
        await floatingM.scrollDownAndClickBtn(floatingM.homeBtn);
        await expect(page).toHaveURL(floatingM.homeUrl);
    });

    test('Can scroll down and click news button', async ({ page }) => {
        await floatingM.scrollDownAndClickBtn(floatingM.newsBtn);
        await expect(page).toHaveURL(floatingM.newsUrl);
    });

    test('Can scroll down and click contact button', async ({ page }) => {
        await floatingM.scrollDownAndClickBtn(floatingM.contactBtn);
        await expect(page).toHaveURL(floatingM.contactUrl);
    });

    test('Can scroll down and click about button', async ({ page }) => {
        await floatingM.scrollDownAndClickBtn(floatingM.aboutBtn);
        await expect(page).toHaveURL(floatingM.aboutUrl);
    })
    
    
    
    
    

    
})
