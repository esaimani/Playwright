import { chromium, test } from "@playwright/test";

test('Learn Launch Persistent', async () => {
    const userDataDir = './myUserDataDir';
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        httpCredentials: {
            username: 'admin',
            password: 'testleaf',
            origin: 'http://leafground.com:8090'
        }
    });
    const page = await context.newPage();
    await page.goto('https://www.leafground.com/auth.xhtml');
    await page.getByRole('button', { name: 'Basic Auth' }).click();

    await page.waitForTimeout(6000);
    


    // await page.goto('https://www.leafground.com/alert.xhtml');
    // page.on('dialog', async dialog => {
    //     dialog.accept();
    // });
    // await page.getByRole('heading', { name: ' Alert (Simple Dialog)' }).filter({ hasText: 'Show' }).click();


});