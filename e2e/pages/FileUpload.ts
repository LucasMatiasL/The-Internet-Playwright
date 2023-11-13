import { type Locator, type Page } from "@playwright/test";
import path from "path";

export class FileUpload{
    readonly page: Page;
    readonly chooseFileBtn: Locator;
    readonly uploadFileBtn: Locator;
    readonly fileUploadedMsg: Locator;
    readonly nameOfFile: Locator;

    constructor(page: Page){
        this.page = page;
        this.chooseFileBtn = page.locator("#file-upload");
        this.uploadFileBtn = page.getByRole("button", { name: "Upload" });
        this.fileUploadedMsg = page.getByRole("heading", { name: "File Uploaded!" });
    }

    async uploadFile(){
        await this.chooseFileBtn.setInputFiles(path.join('e2e\\fixtures\\upload\\', 'upload.txt'));
        await this.uploadFileBtn.click();
    }
}