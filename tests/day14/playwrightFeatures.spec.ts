import { chromium, devices, test } from "@playwright/test";

test.skip('Playwright Features', async ({ page }) => {
    await page.goto('https://login.salesforce.com/');
    await page.waitForTimeout(5000);
})

test.use({
    headless: false,
    viewport: { width: 1600, height: 1200 },
    screenshot: 'on'

})

test('Device Emulaion Test Case Level', async () => {


    const myDevice = devices['iPhone 14 Pro Max'];
    const browser = await chromium.launch();
    const broserContext = await browser.newContext({
        ...myDevice,
        // geolocation: {
        //     longitude:12.0.0.0,
        //     latitude:15.89.2
        // }
    });
    const page = await broserContext.newPage();
    await page.goto('https://login.salesforce.com/');
    await page.waitForTimeout(5000);

})