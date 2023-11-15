import { type Page, type Locator } from '@playwright/test';

export class Redirect{
    readonly page: Page;
    readonly clickHereLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.clickHereLink = page.getByRole("link", { name: "here" });
    }

    async clickHere(){
        await this.clickHereLink.click();
    }
}