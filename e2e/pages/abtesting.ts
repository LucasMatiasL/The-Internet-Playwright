import { type Locator, type Page } from '@playwright/test';

export class abTestingPage{
    readonly page: Page;
    readonly title: Locator;
    readonly paragraph: Locator;
    readonly optionB: Locator


    constructor(page: Page){
        this.page = page;
        this.title = page.getByRole("heading", {
          name: "A/B Test Variation 1",
        });
        this.paragraph = page.getByText(
          "Also known as split testing. This is a way in which businesses are able to simul"
        );
    }


    async goToAbTesting(){
        this.page.goto("https://the-internet.herokuapp.com/abtest");
    }




}