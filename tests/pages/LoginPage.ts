import { Locator, Page } from "playwright";

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#Login');

    }


    async sfLogin(username: string, password: string, url?: string,) {
        await this.page.goto(url ?? 'https://login.salesforce.com');
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }







}