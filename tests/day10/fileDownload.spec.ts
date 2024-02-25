import { test } from "@playwright/test";
import path from "path";

test('Learn Upload', async ({ page }) => {
    await page.goto('https://leafground.com/file.xhtml');
    const card = page.locator('.card').filter({ has: page.getByText('Basic Download', { exact: true }) });

    const downloadPromise = page.waitForEvent('download');
    await card.getByText('Download', { exact: true }).click();
    const download = await downloadPromise;
    await download.saveAs(path.join('/Users/esaimaninavamani/Downloads/' + download.suggestedFilename()));
    console.log(download.url());

})