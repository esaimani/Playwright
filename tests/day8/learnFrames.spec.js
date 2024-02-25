import { test } from "@playwright/test";

test('Learn iFrames', async ({ page }) => {

    await page.goto('https://www.leafground.com/frame.xhtml');

    const framesCount = page.frames().length;

    console.log(framesCount);

    const frame = page.frame({ url: 'https://www.leafground.com/default.xhtml' });

    await frame?.locator('button#Click').click();

    //NESTED IFRAME
    const nestedframeModel = page.locator('.card').filter({ hasText: ' Click Me (Inside Nested frame)' });
    const nestedFrame = nestedframeModel.frameLocator('iframe');
    // nestedFrame.f

    await page.waitForTimeout(5000);
})