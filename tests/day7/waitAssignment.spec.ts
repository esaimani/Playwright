import { expect, test } from "@playwright/test";
test('Learn Auto Wait & Assertion', async ({ page }) => {

    await page.goto('https://www.leafground.com/waits.xhtml');

    //Assignment One
    const cardToSelect = page.locator('.card').filter({ hasText: 'Wait for Invisibility (1 - 10 Sec)' });
    const buttonToClick = cardToSelect.getByText('Click');

    const buttonToVerify = cardToSelect.getByRole('button').filter({ hasText: 'I am about to hide' });
    await buttonToClick.click();
    await expect(buttonToVerify).toBeHidden({ timeout: 10000 });

    //Assignment Two
    const waitForTextChangeCard = page.locator('.card').filter({ hasText: 'Wait for Text Change (1 - 10 Sec)' });
    const textChangeButtonClick = waitForTextChangeCard.getByText('Click');

    const buttonToVerifyText = waitForTextChangeCard.getByRole('button').filter({ hasText: 'Did you notice?' });
    await textChangeButtonClick.click();
    await expect(buttonToVerifyText).toBeVisible({ timeout: 10000 });


})