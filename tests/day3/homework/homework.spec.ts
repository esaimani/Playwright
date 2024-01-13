
/* Create a new browser instance
* Create a new browser context
* Create a new page
* Load the url 
* https://login.salesforce.com/
* Print the url
* Enter the username
* Enter the password
* Click Login button
* Verify the title of the page (using page.title() method)
* 
*/

import { chromium, test } from "@playwright/test";

test('Launch Saledforce Login', async () => {
    const browser = await chromium.launch({ headless: false });
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto('https://login.salesforce.com/');
    console.log('Current Page URL :' + page.url());
    await page.locator('#username').fill('esaimani');
    await page.locator('#password').fill('password');
    await page.waitForTimeout(5000);
    await page.locator('[type="submit"]').click();


})