import { expect, test } from "@playwright/test";
import path from "path";

test('Learn Upload', async ({ page }) => {
    await page.goto('https://leafground.com/file.xhtml');
    const card = page.locator('.card').filter({ has: page.getByText('Basic Upload', { exact: true }) });
    await card.locator("input[type='file']").setInputFiles([path.join(__dirname, 'playwright.png')]);
    await page.waitForTimeout(3000);
    await expect(page.locator('.ui-fileupload-filename')).toContainText('playwright.png 4.6 KB');

})

test.only('Learn Upload Method Two', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');

    const fileUploadPromise = page.waitForEvent('filechooser');
    await page.locator('#drag-drop-upload').click();
    const fileUpload = await fileUploadPromise;
    await fileUpload.setFiles([path.join(__dirname, 'playwright.png')]);
    await page.waitForTimeout(5000);

})