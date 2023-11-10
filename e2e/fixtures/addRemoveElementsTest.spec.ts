import { test, expect } from '@playwright/test';
import { addRemoveElements } from '../pages/addRemoveElements';

test.describe('Add/Remove Elements tests', () => {
    let arElements: addRemoveElements;

    test.beforeEach(async ({ page }) => {
        arElements = new addRemoveElements(page);
        await page.goto(
          "https://the-internet.herokuapp.com/add_remove_elements/"
        );
    });

    test('Add Element button is visible', async ({ page }) => {
        await expect(arElements.addElementBtn).toBeVisible();
    });
    
    test('Click Add Element', async ({ page }) => {
        await arElements.clickAddElement();
        await expect(arElements.deleteBtn).toBeVisible();
    });

    test('Click Delete button', async ({ page }) => {
        await arElements.clickAddElement();
        await arElements.clickDeleteBtn();
        await expect(arElements.deleteBtn).not.toBeVisible();
    });

    test('Click 10 times Add Element button', async ({ page }) => {
        for(let i = 0; i < 10; i++){
            await arElements.clickAddElement();
        }
    });

    test('Add and delete 10 elements', async ({ page }) => {
        for (let i = 0; i < 10; i++) {
          await arElements.clickAddElement();
        }
        for (let i = 0; i < 10; i++) {
          await arElements.clickDeleteBtn();
        }
    });
    
    
    
    
    

    


})
