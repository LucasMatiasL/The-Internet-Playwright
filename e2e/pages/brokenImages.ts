import { type Locator, type Page } from '@playwright/test';

export class BrokenImages {
    readonly page: Page
    readonly firstImage: Locator;
    readonly secondImage: Locator;
    readonly thirdImage: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstImage = page.getByRole('img').nth(1);
        this.secondImage = page.getByRole('img').nth(2);
        this.thirdImage = page.getByRole("img").nth(3);
    }

    
}