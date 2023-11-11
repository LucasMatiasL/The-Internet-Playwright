import { type Locator, type Page } from '@playwright/test';

export class Filedownload{
    readonly samplePdf: Locator;
    readonly tomAndJerry: Locator;
    readonly testFileCsv: Locator;

    //Edit this path to your download folder
    readonly myPath: string;


    constructor(page: Page){
        this.samplePdf = page.getByRole("link", { name: "sample.pdf" });
        this.tomAndJerry = page.getByRole("link", { name: "tomjerry.jpeg" });
        this.testFileCsv = page.getByRole("link", { name: "testFile1.csv" });
        this.myPath =
          "C:\\Users\\Lucas\\Documents\\Playwright-Projects\\The-Internet-Playwright\\The-Internet-Playwright\\e2e\\fixtures\\downloads\\";    
          
        }



    async downloadFile(page: Page, file: Locator){
        const downloadPromise = page.waitForEvent('download');
        await file.click();
        const download = await downloadPromise;
        await download.saveAs(this.myPath+ download.suggestedFilename());
    }

}