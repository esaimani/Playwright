import { test } from "@playwright/test";

test('Learn Single Window Handle', async ({ page, context }) => {

    await page.goto('https://www.leafground.com/window.xhtml');
    const newBrowserContext = context.waitForEvent('page');
    await page.getByText('Open', { exact: true }).click();
    const newWindow = await newBrowserContext;
    const newPageURl = newWindow.url();
    console.log(newPageURl);
    await newWindow.close();
    const mainPageUrl = page.url();
    console.log(mainPageUrl);

})

test('Learn Single Window - Method 2', async ({ page, context }) => {
    await page.goto('https://www.leafground.com/window.xhtml');
    const openMultipleWindow = page.getByText('Open Multiple');
    const [pages] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText('Open', { exact: true }).click()
    ])

    const numberOfPages = pages.context().pages().length;
    console.log(numberOfPages);

    const newPageURl = pages.url();
    console.log(newPageURl);
    await pages.close();
    const mainPageUrl = page.url();
    console.log(mainPageUrl);


})

test.only('Learn to Handle Multiple Windows', async ({ page, context }) => {
    await page.goto('https://www.leafground.com/window.xhtml');
    const openMultipleWindow = page.getByText('Open Multiple');
    const [multipage] = await Promise.all([
        context.waitForEvent('page'),
        openMultipleWindow.click()
    ])

    const pages = multipage.context().pages();
    console.log(`Number of pages active : ${pages.length}`);

    pages.forEach(tab => {
        console.log(`URL of the page is : ${tab.url()}`);
    });

    for (let i = 0; i < pages.length; i++) {
        await pages[i].waitForLoadState('load');
        const pageTitle = await pages[i].title();
        console.log(`The title of the page is : ${pageTitle}`);

    }






})
