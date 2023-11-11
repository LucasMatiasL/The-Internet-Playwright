import { type Locator, type Page } from "@playwright/test";

export class Entryad {
    readonly modalWindow: Locator;
    readonly modalTitle: Locator;
    readonly modalText: Locator;
    readonly modalCloseBtn: Locator;

    constructor(page: Page){
        this.modalWindow = page.locator("#modal div").first();
        this.modalTitle = page.getByRole("heading", {
          name: "This is a modal window",
        });
        this.modalText = page.getByText(
          "It's commonly used to encourage a user to take an action (e.g., give their e-mai"
        );
        this.modalCloseBtn = page.getByText("Close", { exact: true });
        
    }


    async clickModalCloseBtn(){
        await this.modalCloseBtn.click();
    }
}