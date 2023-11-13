import { type Page, type Locator } from '@playwright/test';

export class ForgotPassword{
    readonly page: Page;
    readonly textBox: Locator;
    readonly retrievePassBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.textBox = page.getByLabel("E-mail");
        this.retrievePassBtn = page.getByRole("button", {
          name: "Retrieve password",
        });
    }

    async insertMailAndClickBtn(){
        await this.textBox.fill("playwrightTest@gmail.com");
        await this.retrievePassBtn.click();
    }
}