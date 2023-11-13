import { test, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page tests', () => {
    let loginP: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginP = new LoginPage(page);
        await page.goto("https://the-internet.herokuapp.com/login");
    });

    test('Successful login', async ({ page }) => {
        await loginP.successfulLogin();
        await expect(page).toHaveURL(loginP.successUrl);
        await expect(loginP.secureAreaTitle).toBeVisible();
        await expect(loginP.secureAreaParagraph).toBeVisible();
        await expect(loginP.logoutBtn).toBeVisible();
    });

    test('Successful login and logout', async ({ page }) => {
        await loginP.loginAndLogout();
        await expect(page).toHaveURL(loginP.url);
        await expect(loginP.logoutMsg).toBeVisible();
    });

    test('Failed login, invalid username', async ({ page }) => {
        await loginP.tryWithInvalidUser();
        await expect(loginP.invalidUsrMsg).toBeVisible();
    })

    test('Failed login, invalid password', async ({ page }) => {
        await loginP.tryWithInvalidPassword();
        await expect(loginP.invalidPassMsg).toBeVisible();
    })
    
    
    

    
    


    
    
});
