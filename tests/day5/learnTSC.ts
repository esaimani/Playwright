import { promises } from "dns";
import { Browser, chromium, Page } from "playwright";

async function navigateAndPerformAction(url: string, action: 'screenshot' | 'title'):
    Promise<string | void> {

    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    if (action === 'screenshot') {
        const screenshotPath = 'screenshot.png';
        await page.screenshot({ path: screenshotPath });
        return 'Screenshot taken successfully'
    }
    else {
        const titile = await page.title();
        return titile
    }

    await page.close();
    await browser.close();

}

function runProgram(url: string) {
    const screenshotResult = navigateAndPerformAction(url, 'screenshot');
    const titleResult = navigateAndPerformAction(url, 'title');

    console.log(screenshotResult);
    console.log(titleResult);


}

runProgram('http://leaftaps.com/opentaps/control/main');