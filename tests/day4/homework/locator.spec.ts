import { chromium, test } from "@playwright/test";
test('Learn getByRole', async () => {
    test.setTimeout(60000)

    //Launch the Browser
    const browser = await chromium.launch();
    //Create Browser Context
    const browserContext = await browser.newContext();
    //Create new page
    const page = await browserContext.newPage();
    //Launch Leaftabs URL
    await page.goto('http://leaftaps.com/opentaps/control/main');

    //Enter the username
    await page.fill('#username', 'Demosalesmanager');
    //Enter the password
    await page.fill('#password', 'crmsfa');
    //Click on login button
    await page.click('.decorativeSubmit');
    //Click on CRM/SFA button
    await page.click("#button");
    //Click on Leads Tab 
    await page.click("text=Leads");
    //Click on Create Lead Button
    await page.click("text=Create Lead");
    //Enter the firstname
    await page.fill("#createLeadForm_companyName", "Esai Pvt Ltd");
    //Enter the first name
    await page.fill("#createLeadForm_firstName", "Esaimani")
    //Enter the last name
    // await page.fill("#createLeadForm_lastName", "Navamani")
    await page.getByRole("textbox", { name: 'lastName' }).fill('navamani');
})