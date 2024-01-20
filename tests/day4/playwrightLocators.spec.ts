import { chromium, test } from "@playwright/test";

test('Learn Locators', async () => {
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage()

    page.goto('https://login.salesforce.com/')

})