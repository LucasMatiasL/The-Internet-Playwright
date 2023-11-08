import { type Page, type Locator} from '@playwright/test';

export class DragAndDrop{
    readonly page: Page;
    readonly boxA: Locator;
    readonly boxB: Locator;

    constructor(page: Page){
        this.page = page;
        this.boxA = page.locator("#column-a");
        this.boxB = page.locator("#column-b");
    }

    async fromAtoB(){
        await this.boxA.dragTo(this.boxB);
    }

    async fromBtoA(){
        await this.boxB.dragTo(this.boxA);
    }
}