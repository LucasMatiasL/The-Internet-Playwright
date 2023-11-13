import { type Page, type Locator } from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly url: string;
    readonly usernameBox: Locator;
    readonly passwordBox: Locator;
    readonly loginBtn: Locator;
    readonly user: string;
    readonly psswrd: string;
    readonly successUrl: string;
    readonly secureAreaTitle: Locator;
    readonly secureAreaParagraph: Locator;
    readonly logoutBtn: Locator;
    readonly logoutMsg: Locator;
    readonly invalidUsername: string;
    readonly invalidPassword: string;
    readonly invalidUsrMsg: Locator;
    readonly invalidPassMsg: Locator;


    constructor(page: Page){
        this.page = page;
        this.url = "https://the-internet.herokuapp.com/login";
        this.usernameBox = page.getByLabel("Username");
        this.passwordBox = page.getByLabel("Password");
        this.loginBtn = page.getByRole("button", { name: " Login" });
        this.user = "tomsmith";
        this.psswrd = "SuperSecretPassword!";
        this.successUrl = "https://the-internet.herokuapp.com/secure";
        this.secureAreaTitle = page.getByRole("heading", {
          name: "Secure Area",
          exact: true,
        });
        this.secureAreaParagraph = page.getByRole("heading", {
          name: "Welcome to the Secure Area. When you are done click logout below.",
        });
        this.logoutBtn = page.getByRole("link", { name: "Logout" });  
        this.logoutMsg = page.getByText("You logged out of the secure area! ×");
        this.invalidUsername = "test";
        this.invalidPassword = "test";
        this.invalidUsrMsg = page.getByText("Your username is invalid! ×");
        this.invalidPassMsg = page.getByText("Your password is invalid! ×");
    }

    async successfulLogin(){
        await this.usernameBox.fill(this.user);
        await this.passwordBox.fill(this.psswrd);
        await this.loginBtn.click();
    }

    async loginAndLogout(){
        await this.successfulLogin();
        await this.logoutBtn.click();
    }

    async tryWithInvalidUser(){
        await this.usernameBox.fill(this.invalidUsername);
        await this.passwordBox.fill(this.psswrd);
        await this.loginBtn.click();
    }

    async tryWithInvalidPassword(){
        await this.usernameBox.fill(this.user);
        await this.passwordBox.fill(this.invalidPassword);
        await this.loginBtn.click();
    }
}