import { type Page, type Locator } from '@playwright/test';

export class ContextMenu{
    readonly page: Page;
    readonly title: Locator;
    readonly firstParagraph: Locator;
    readonly secondParagraph: Locator;
    readonly box: Locator;


    constructor(page: Page){
        this.page = page;
        this.title = page.getByRole('heading', { name: 'Context Menu' });
        this.firstParagraph = page.getByText('Context menu items are custom additions that appear in the right-click menu.');
        this.secondParagraph = page.getByText(
          "Right-click in the box below to see one called 'the-internet'. When you click it"
        );
        this.box = page.locator("#hot-spot");
    }

    async rightClickBox(){
        await this.box.click({ button: 'right'});
    }
    
}
