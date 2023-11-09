import { type Page, type Locator } from '@playwright/test';

export class Dropdown{
    readonly page: Page;
    readonly dropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdown = page.locator("#dropdown");
    }

    async selectOptionOne(){
        await this.dropdown.selectOption('Option 1');
    }

    async selectOptionTwo(){
        await this.dropdown.selectOption('Option 2');
    }

}