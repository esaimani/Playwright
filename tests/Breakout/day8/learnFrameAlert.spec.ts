import { test } from "@playwright/test";

test('Frame and Alert Breakout', async ({ page }) => {
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');
    const frame = page.frameLocator('iframe#iframeResult');

    page.on('dialog', async dialog => {
        const alertText = dialog.message();
        console.log(`Alert Text : ${alertText}`);
        await dialog.accept();

    })
    await frame?.getByRole('button', { name: 'Try it' }).click();
    const innerText = await frame?.locator('#demo').innerText();
    console.log(innerText);


})