import { test, Page, expect } from '@playwright/test';
import { DissapearingElements } from '../pages/DisappearingElements';
import exp from 'constants';

test.describe('Dissapearing Elements tests', () => {
    let dissapearing: DissapearingElements;

    test.beforeEach(async ({ page }) => {
        dissapearing = new DissapearingElements(page);
        await page.goto(
          "https://the-internet.herokuapp.com/disappearing_elements"
        );
    });

    test('Home button is visible', async ({ page }) => {
        await expect(dissapearing.homeBtnIsVisible()).toBeTruthy();
    });

    test('Clicking home button should take me to home page', async ({ page }) => {
        await dissapearing.clickHomeBtn();
        await expect(page).toHaveURL("https://the-internet.herokuapp.com/");
    });

    test('About button is visible', async ({ page }) => {
        await expect(dissapearing.aboutBtnIsVisible()).toBeTruthy();
    });

    test('Clicking the About button should take me to the About page', async ({ page }) => {
       await dissapearing.clickAboutBtn();
       await expect(page).toHaveURL(
         "https://the-internet.herokuapp.com/about/"
       );
    });

    test('Contact Us button is visible', async ({ page }) => {
        await expect(dissapearing.contactBtnIsVisible()).toBeTruthy();
    });

    test('Clicking the Contact Us button should take me to the Contact Us page', async ({ page }) => {
        await dissapearing.clickContactUsBtn();
        await expect(page).toHaveURL(
          "https://the-internet.herokuapp.com/contact-us/"
        );
    });

    test('Portfolio button is visible', async ({ page }) => {
        await expect(dissapearing.portfolioBtnIsVisible()).toBeTruthy();
    });

    test('Clicking the Portfolio button should take me to the Portfolio page', async ({ page }) => {
        await dissapearing.clickPortfolioBtn();
        await expect(page).toHaveURL(
          "https://the-internet.herokuapp.com/portfolio/"
        );
    });

    test('Gallery button is visible', async ({ page }) => {
        await dissapearing.reloadPageUntilVisible();
        await expect(dissapearing.aboutBtnIsVisible).toBeTruthy();
    });

    test('Clicking the Gallery button should take me to the Gallery page', async ({ page }) => {
        await dissapearing.clickGalleryBtn();
        await expect(page).toHaveURL(
          "https://the-internet.herokuapp.com/gallery/"
        );
    });
    
    
    
    
    
    
    
    
    
})
