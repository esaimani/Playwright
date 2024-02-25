import { chromium, expect, test } from "@playwright/test";

test('Create and verify a New Case in Chatter', async () => {

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
    await page.getByPlaceholder('Search apps or items...').fill('Service');

    //Click on the Service Link
    await page.getByTitle('Manage customer service with accounts, contacts, cases, and more').click();

    //Click on Cases tab
    await page.getByText('Cases', { exact: true }).click();

    //Click on create new button
    await page.locator("//div[text()='New']").click();

    //Click on Search Contact Dropdown
    await page.getByPlaceholder('Search Contacts...').click();

    //Click on New Contact
    await page.getByTitle('New Contact').click();

    //Click on Saluation
    await page.click("(//a[text()='--None--'])[1]");

    //Select the saluation
    await page.click("[title='Mr.']");

    //Enter the first name
    const firstName = 'Music' + Math.floor(Math.random() * 9000) + 1000;
    await page.getByPlaceholder('First Name').fill(firstName);

    //Enter the last name
    const lastName = 'Mani';
    await page.getByPlaceholder('Last Name').fill(lastName);

    //Click on Save Button
    await page.click("(//span[text()='Save'])[2]");

    //Click on Search Account Dropdown
    await page.click("[placeholder='Search Accounts...']");

    //Click on create new Account
    await page.getByTitle('New Account').click();

    //Enter the Account Name
    const accountName = 'Esai' + Math.floor(Math.random() * 9000) + 1000;
    // await page.locator("(//span[text()='Account Name']/parent::*)[2]/following-sibling::input").fill(accountName);

    await page.locator("(//input[@class=' input'])[1]").fill(accountName);

    //Click on Rating
    await page.locator("(//a[text()='--None--'])[1]").click();

    //Select the Rating
    await page.getByTitle('Hot').click();

    //Click on Save Button
    await page.locator("//button[@title='Save']").click();

    //Click on Status
    await page.getByRole('combobox', { name: 'New' }).click();
    await page.getByRole('combobox', { name: 'New' }).click();


    //Click on Priority
    await page.click("[aria-label$='Priority, Medium']");

    //Select the Priority
    await page.getByTitle('High').click();

    //Click on Case Origin
    await page.click("[aria-label$='Case Origin, --None--']");
    await page.keyboard.type('Email');
    await page.keyboard.press('Enter');

    //Select the Case Origin
    // await page.locator("//span[text()='Email']").click();

    //Enter the Subject
    await page.fill("[name='Subject']", "Request to Return");

    //Enter the Description
    await page.locator("//label[text()='Description']/parent::*/div").click();
    await page.keyboard.type("Request to Return the defective product");

    //Click on Save Button
    await page.locator("//button[text()='Save']").click();

    //Edit the status
    await page.locator("(//button[@title='Edit Status'])[3]").click();

    //Click on Status
    await page.locator("(//span[text()='New'])[4]").click();

    //Select the status as Escalated
    await page.getByTitle('Escalated').click();

    //Click on the share update
    await page.getByTitle('Share an update...').click();

    //Enter the update to share
    await page.fill("[data-placeholder='Share an update...']", "This case is escalated");

    //Click on the share button
    await page.getByTitle('Click, or press Ctrl+Enter').click();

    //Click on the down button
    await page.locator("[data-key='down']").nth(8).click();


    //Select like on chatter
    await page.getByTitle('Like on Chatter').click();

    //Click on Chatter Tab
    await page.getByTitle('Chatter').click();

});
