import { test, Browser, Page, expect } from '@playwright/test';
import { basicAuth } from '../pages/basicAuth';


test.describe('Basic Auth tests', () => {
    let bAuth: basicAuth;
    let user = "admin";
    let pass = "admin";
    
    test.beforeEach(async ({ page }) => {
        bAuth = new basicAuth(page);
        page.goto("https://the-internet.herokuapp.com/basic_auth");
    });

    test('Has correct title', async ({ page }) => {
        
    })
    
    test("Clicking cancel will displat 'Not authorized'", async ({ page }) => {
        
    })
    
    test('Successful login', async ({ page }) => {
        
    })
    


    
    
})
