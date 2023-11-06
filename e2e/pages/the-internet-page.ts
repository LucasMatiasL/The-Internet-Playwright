import { type Locator, type Page } from '@playwright/test';

export class TheInternetPage{
    readonly page: Page;
    readonly abTesting: Locator;
    readonly addRemoveElements: Locator;
    readonly basicAuth: Locator;
    readonly challengingDOM: Locator;
    readonly checkboxes: Locator;
    readonly contextMenu: Locator;
    readonly digestAuthentication: Locator;
    readonly disappearingElements: Locator;
    readonly dragAndDrop: Locator;
    readonly dropdown: Locator;
    readonly dynamicContent: Locator;
    readonly dynamicControls: Locator;
    readonly dynamicLoading: Locator;
    readonly entryAd: Locator;
    readonly exitIntent: Locator;
    readonly fileDownload: Locator;
    readonly fileUpload: Locator;
    readonly floatingMenu: Locator;
    readonly forgotPassword: Locator;
    readonly formAuthentication: Locator;
    readonly frames: Locator;
    readonly geolocation: Locator;
    readonly horizontalSlider: Locator;
    readonly hovers: Locator;
    readonly infiniteScroll: Locator;
    readonly inputs: Locator;
    readonly jqueryUiMenus: Locator;
    readonly javascriptAlerts: Locator;
    readonly javascriptOnloadEventError: Locator;
    readonly keyPresses: Locator;
    readonly largeAndDeepDOM: Locator;
    readonly multipleWindows: Locator;
    readonly nestedFrames: Locator;
    readonly notificationMsgs: Locator;
    readonly redirectLink: Locator;
    readonly secureFileDownload: Locator;
    readonly shadowDOM: Locator;
    readonly shiftingContent: Locator;
    readonly slowResources: Locator;
    readonly sortableDataTables: Locator;
    readonly typos: Locator;
    readonly wysiwygEditor: Locator;

    constructor(page: Page){
        this.page = page;
        this.abTesting = page.getByRole("link", { name: "A/B Testing" });
        this.basicAuth = page.getByRole("link", { name: "Basic Auth" });
    }

    async clickAbTesting(){
        await this.abTesting.click();
    }

    async clickBasicAuth(){
        await this.basicAuth.click();
    }



}

