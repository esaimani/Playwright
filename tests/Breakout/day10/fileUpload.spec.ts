import { expect, test } from "@playwright/test";
import path from "path";

test('Upload Assertion', async ({ page }) => {
    await page.goto('https://leafground.com/file.xhtml');
    const card = page.locator('.card').filter({ has: page.getByText('Advanced Upload - Only Pictures', { exact: true }) });
    await card.locator("input[type='file']").setInputFiles([path.join(__dirname, 'HomeAssignments.ts')]);
    await page.waitForTimeout(5000);
    const assertionText = await page.locator('.ui-messages-error-icon~ul li').innerText();
    expect(assertionText).toContain('Invalid file typeHomeAssignments.ts 1.8 KB');



})


// const errorSummary = await page.locator('.ui-messages-error-summary').innerText();
// const errordetails = await page.locator('.ui-messages-error-detail').innerText();
// expect(errorSummary).toContain('Invalid file type');
// expect(errordetails).toContain('HomeAssignments.ts 1.8 KB');