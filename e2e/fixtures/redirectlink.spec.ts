import { test, expect } from '@playwright/test';
import { Redirect } from '../pages/RedirectLink';

test.describe('Redirect Link test', () => {
    let redi: Redirect;

    test.beforeEach(async ({ page }) => {
        redi = new Redirect(page);
        await page.goto("https://the-internet.herokuapp.com/redirector");
    });

    test('Clicking the hyperlink takes me to the status code page', async ({ page }) => {
        await redi.clickHere();
        await expect(page).toHaveURL(
          "https://the-internet.herokuapp.com/status_codes"
        );
    });
    
    
})
