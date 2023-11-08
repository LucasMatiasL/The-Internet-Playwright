import { type Locator, type Page } from '@playwright/test';

export class abTestingPage{

    readonly page: Page;
    readonly content: Locator;

    constructor(page: Page){
        this.page = page;
        this.content = page.locator("#content");
    }

    async goToAbTesting(){
        this.page.goto("https://the-internet.herokuapp.com/abtest");
    }
}