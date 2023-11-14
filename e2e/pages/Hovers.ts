import { type Page, type Locator } from '@playwright/test';

export class Hovers{
    readonly page: Page;
    readonly img1: Locator;
    readonly content1: Locator;
    readonly viewProfile1: Locator;
    readonly img2: Locator;
    readonly content2: Locator;
    readonly viewProfile2: Locator;
    readonly img3: Locator;
    readonly content3: Locator;
    readonly viewProfile3: Locator;

    constructor(page: Page){
        this.page = page;
        this.img1 = page.getByRole("img", { name: "User Avatar" }).first();
        this.content1 = page.getByRole("heading", { name: "name: user1" });
        this.viewProfile1 = page.getByRole("link", { name: "View profile" });
        this.img2 = page.getByRole("img", { name: "User Avatar" }).nth(1);
        this.content2 = page.getByRole("heading", { name: "name: user2" });
        this.viewProfile2 = page.getByRole("link", { name: "View profile" });
        this.img3 = page.getByRole("img", { name: "User Avatar" }).nth(2);
        this.content3 = page.getByRole("heading", { name: "name: user3" });
        this.viewProfile3 = page.getByRole("link", { name: "View profile" });
    }

    async moveToImg(image: Locator){
        await image.click();
    }

    async clickViewProfile(link: Locator){
        await link.click();
    }

    async moveToImgAndClickViewProfile(image: Locator, profile: Locator){
        await this.moveToImg(image);
        await this.clickViewProfile(profile);
    }
}