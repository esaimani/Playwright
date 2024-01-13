import { chromium, test } from "@playwright/test";

test('Launch Chrome Browser', async () => {

    const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto('https://login.salesforce.com/');
    console.log(page.url());
    await page.waitForTimeout(5000);

})