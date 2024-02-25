import { Page, chromium } from "playwright";
class DashboardPage {

    page: Page;
    url: string;

    //Overloaded constructor with optional parameters
    constructor(page: Page, url?: string) {
        this.page = page;
        this.url = url ?? "https://leafground.com/"; //Default URL

    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async sendMesageToResolutionCenter() {
        await this.page.fill('#email', 'isainew@gmail.com');
        await this.page.fill('#message', 'Test Message to Resolution Center');
        await this.page.getByRole('button', { name: 'Send' }).click();
    }

}

async function runTest() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    //Using the  constructor with the specific URL
    const dashboard = new DashboardPage(page, "https://leafground.com/");
    await dashboard.navigate();
    await dashboard.sendMesageToResolutionCenter();
    await browser.close();

}
runTest();