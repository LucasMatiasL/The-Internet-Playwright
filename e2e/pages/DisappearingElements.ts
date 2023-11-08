import { type Page, type Locator } from '@playwright/test';

export class DissapearingElements{
    readonly page: Page;
    readonly home: Locator;
    readonly about: Locator;
    readonly contactUs: Locator;
    readonly portfolio: Locator;
    readonly gallery: Locator;

    constructor(page: Page){
        this.page = page;
        this.home = page.getByRole("link", { name: "Home" });
        this.about = page.getByRole("link", { name: "About" });
        this.contactUs = page.getByRole("link", { name: "Contact Us" });
        this.portfolio = page.getByRole("link", { name: "Portfolio" });
        this.gallery = page.getByRole("link", { name: "Gallery" });
    }

    async homeBtnIsVisible(): Promise<boolean> {
        return await this.home.isVisible();
    }

    async clickHomeBtn(){
        await this.home.click();
    }

    async aboutBtnIsVisible(): Promise<boolean> {
        return await this.about.isVisible();
    }

    async clickAboutBtn(){
        await this.about.click();
    }

    async contactBtnIsVisible(): Promise<boolean>{
        return await this.contactUs.isVisible();
    }

    async clickContactUsBtn(){
        await this.contactUs.click();
    }

    async portfolioBtnIsVisible(): Promise<boolean>{
        return await this.portfolio.isVisible();
    }

    async clickPortfolioBtn(){
        await this.portfolio.click();
    }

    async galleryBtnIsVisible(): Promise<boolean>{
        return await this.gallery.isVisible();
    }

    async reloadPageUntilVisible(){
        while(!this.galleryBtnIsVisible){
            await this.page.reload();
        } 
    }

    async clickGalleryBtn(){
        await this.gallery.click();
    }


}