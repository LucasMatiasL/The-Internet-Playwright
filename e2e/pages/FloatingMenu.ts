import { type Page, type Locator } from '@playwright/test';
import { read } from 'fs';

export class FloatingMenu{
    readonly page: Page;
    readonly homeBtn: Locator;
    readonly newsBtn: Locator;
    readonly contactBtn: Locator;
    readonly aboutBtn: Locator;
    readonly homeUrl: string;
    readonly newsUrl: string;
    readonly contactUrl: string;
    readonly aboutUrl: string;

    constructor(page: Page){
        this.page = page;
        this.homeBtn = page.getByRole("link", { name: "Home" });
        this.newsBtn = page.getByRole("link", { name: "News" });
        this.contactBtn = page.getByRole("link", { name: "Contact" });
        this.aboutBtn = page.getByRole("link", { name: "About" });
        this.homeUrl = "https://the-internet.herokuapp.com/floating_menu#home";
        this.newsUrl = "https://the-internet.herokuapp.com/floating_menu#news";
        this.contactUrl =
          "https://the-internet.herokuapp.com/floating_menu#contact";
        this.aboutUrl =
          "https://the-internet.herokuapp.com/floating_menu#about";
        
    }

    async scrollDown(){
        await this.page.mouse.wheel(0,5000)
    }
    async scrollDownAndClickBtn(button: Locator) {
        await this.scrollDown();
        await button.click();
    }
}