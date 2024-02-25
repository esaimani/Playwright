import { test } from "@playwright/test";
test('Learn Alerts', async ({ page }) => {
    await page.goto('https://www.leafground.com/alert.xhtml');

    const simpleAlert = page.locator('.card').filter({ hasText: ' Alert (Simple Dialog)' });
    const simpleAlertClickBtn = simpleAlert.getByText('Show');

    const confirmAlertDialog = page.locator('.card').filter({ hasText: ' Alert (Confirm Dialog)' });
    const confirmAlertShowBtn = confirmAlertDialog.getByText('Show');

    const promptAlertDialog = page.locator('.card').filter({ hasText: ' Alert (Prompt Dialog)' });
    const promptAlertShowBtn = promptAlertDialog.getByText('Show');


    page.on('dialog', async dialog => {
        const alertMessage = dialog.message();
        const alertType = dialog.type();
        dialog.accept();
        console.log(alertMessage);
        console.log(alertType);

    });

    await simpleAlertClickBtn.first().click();

    await confirmAlertShowBtn.click();

    await promptAlertDialog.click();



})