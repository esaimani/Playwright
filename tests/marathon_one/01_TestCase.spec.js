import { chromium, expect, test } from "@playwright/test";

test('Verify Lead Creation and Conversion to Opportunity', async () => {

    //Launch the Browser
    const browser = await chromium.launch();

    //Create Browser Context
    const browserContext = await browser.newContext();
    //Create new page
    const page = await browserContext.newPage();
    //Launch salesforce URL
    await page.goto('https://login.salesforce.com');

    const userName = 'isainew@gmail.com';
    const password = 'Salesforce@2024';

    //Enter the username
    await page.fill('#username', userName);
    //Enter the password
    await page.fill('#password', password);
    //Click on login button
    await page.click('#Login');
    //Click on toggle menu button from the left corner
    await page.click('.slds-icon-waffle');
    //Click view All
    await page.click("[aria-label='View All Applications']");

    //Enter Marketing in Search Apps or Items
    await page.getByPlaceholder('Search apps or items...').fill('Marketing');

    //Click on the Marketing Link
    await page.getByTitle('Best-in-class on-demand marketing automation').click();

    //Click on Leads tab
    await page.getByText('Leads', { exact: true }).click();

    //Click on create new lead button
    await page.getByRole("button", { name: 'New' }).click();

    //Select the Saluation dropdown
    await page.click("[name='salutation']");
    //Select Mr from Saluation dropdown
    await page.click("[title='Mr.']");

    //Set first name
    const firstName = 'Music';
    //Enter the firstname
    await page.getByPlaceholder('First Name').fill(firstName)

    //Set Last name
    const lastName = 'Bell' + Math.random() * 10;
    //Enter the last name
    await page.fill("[name='lastName']", lastName);
    //Enter the company name
    await page.fill("[name='Company']", "Esai New Pvt Ltd");
    //Save the form
    await page.click("[name='SaveEdit']");

    //Assert the newly created user
    await expect(page.locator("[name='primaryField']")).toContainText(`Mr. ${firstName} ${lastName}`);

    //Click on the dropdonw near submit for approval
    await page.locator("li[class$='slds-button_last overflow']").click();

    //Click on Convert 
    await page.click("//span[text()='Convert']");

    //Click on the Opportunity Button
    await page.getByRole('button', { name: 'Opportunity' }).click();

    //Clear the exisiting value in Opportunity field
    await page.getByLabel('Opportunity Name').clear();

    //Set Opportunity Name
    const opportunityName = "Esai New Company" + Math.random() * 10;

    //Enter the value for Opportunity field
    await page.getByLabel('Opportunity Name').fill(opportunityName);

    //Click on Convert Button
    await page.getByRole('button', { name: 'Convert', exact: true }).click();

    //Click on Goto Leads Page
    await page.getByRole('button', { name: 'Go to Leads' }).click();

    //Enter the lead name in search list
    const leadSearchList = page.getByPlaceholder('Search this list...');
    await leadSearchList.fill(firstName + ' ' + lastName);

    await page.getByPlaceholder('Search this list...').focus();

    await page.keyboard.press('Enter');

    //Press Enter Key
    // await leadSearchList.press('Enter');


    //Verify the No Leads exist
    await expect(page.locator("//span[text()='No items to display.']")).toBeVisible();


    //Click on Opportunities Tab 
    await page.click("//span[text()='Opportunities']");

    const opportunitySearchList = page.getByPlaceholder('Search this list...');
    opportunitySearchList.fill(opportunityName);

    await page.getByPlaceholder('Search this list...').focus();

    await page.keyboard.press('Enter');

    // opportunitySearchList.press('Enter');

    //Press Enter Key

















})