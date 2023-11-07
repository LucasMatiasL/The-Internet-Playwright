import { type Locator, type Page } from '@playwright/test';

export class addRemoveElements{
    readonly page: Page;
    readonly addElementBtn: Locator;
    readonly deleteBtn: Locator;


    constructor(page: Page){
        this.page = page;
        this.addElementBtn = page.getByRole("button", { name: "Add Element" });
        this.deleteBtn = page.locator(".added-manually").first();
    }


    async clickAddElement(){
        await this.addElementBtn.click();
    }

    async clickDeleteBtn(){
        await this.deleteBtn.click();
    }
}