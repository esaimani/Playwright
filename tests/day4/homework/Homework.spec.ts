import { chromium, expect, test } from "@playwright/test";

/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
*/

console.log('***** Assignment: 1 Create Lead *****');

test.skip('***** Assignment: 1 Create Lead *****', async () => {

    test.setTimeout(60000)

    //Launch the Browser
    const browser = await chromium.launch();
    //Create Browser Context
    const browserContext = await browser.newContext();
    //Create new page
    const page = await browserContext.newPage();
    //Launch salesforce URL
    await page.goto('https://login.salesforce.com');

    //Enter the username
    await page.fill('#username', 'isainew@gmail.com');
    //Enter the password
    await page.fill('#password', 'Salesforce@2024');
    //Click on login button
    await page.click('#Login');
    //Click on toggle menu button from the left corner
    await page.click('.slds-icon-waffle');
    //Click view All
    await page.click("[aria-label='View All Applications']");
    //Click on sales
    await page.click("[title='Manage your sales process with accounts, leads, opportunities, and more']");
    //Click on Leads Dropdown
    await page.click("//one-app-nav-bar-item-root[@data-id='Lead']//one-app-nav-bar-item-dropdown");
    //Click on New Lead Button
    // await page.click("text = New Lead");
    await page.getByText('New Lead').click();
    //Select the Saluation dropdown
    await page.click("[name='salutation']");
    //Select Mr from Saluation dropdown
    await page.click("[title='Mr.']");
    //Enter the last name
    await page.fill("[name='lastName']", "Navamani");
    //Enter the company name
    await page.fill("[name='Company']", "Esai Pvt Ltd");
    //Save the form
    await page.click("[name='SaveEdit']");

    console.log(await page.locator("[name='primaryField']").innerText());
    console.log(await page.locator("[name='primaryField']").textContent());

    //Assert the newly created user
    await expect(page.locator("[name='primaryField']")).toContainText('Navamani');

    //Close the Page
    page.close();

    //Close the Browser Context
    browserContext.close();

    //Close the Browser
    browser.close();

})

/*

Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

console.log('***** Assignment: 2 Edit Lead *****');

test.skip('***** Assignment: 2 Edit Lead *****', async () => {

    test.setTimeout(50000);
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
    await page.fill("#createLeadForm_lastName", "Navamani")
    //Click on the create lead button
    await page.click("[name = submitButton]");
    //click on Edit Button
    await page.click('text = Edit');
    //Update the company name
    await page.fill("#updateLeadForm_companyName", "Esaimani Pvt Ltd");
    //Click on the update button
    await page.click("[name = submitButton]");

    //Close the Page
    page.close();
    //Close the Browser Context
    browserContext.close();
    //Close the Browser
    browser.close();
})


/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name
*/

console.log('***** Assignment: 3 Create Individuals *****');
test.skip('***** Assignment: 3 Create Individuals *****', async () => {
    test.setTimeout(50000);
    //Launch the Browser
    const browser = await chromium.launch();
    //Create Browser Context
    const browserContext = await browser.newContext();
    //Create new page
    const page = await browserContext.newPage();
    //Launch salesforce URL
    await page.goto('https://login.salesforce.com');

    //Enter the username
    await page.fill('#username', 'isainew@gmail.com');
    //Enter the password
    await page.fill('#password', 'Salesforce@2024');
    //Click on login button
    await page.click('#Login');
    //Click on toggle menu button from the left corner
    await page.click('.slds-icon-waffle');
    //Click view All
    await page.click("[aria-label='View All Applications']");

    //Click on Individuals
    await page.click('text = Individuals');
    //Click on the new button
    await page.click('text = New');
    //Enter the last name 
    await page.fill("input[class^='lastName']", "Esaimani");
    //Click on save button
    await page.click("button[title='Save']");
    //Get the new user name
    await expect(page.locator("div[class^='slds-page-header__title']")).toContainText('Esaimani');

})


/*
Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/

console.log('***** Assignment: 4 Edit Individuals *****');
test.only('***** Assignment: 4 Edit Individuals *****', async () => {
    test.setTimeout(80000);
    //Launch the Browser
    const browser = await chromium.launch();
    //Create Browser Context
    const browserContext = await browser.newContext();
    //Create new page
    const page = await browserContext.newPage();
    //Launch salesforce URL
    await page.goto('https://login.salesforce.com');

    //Enter the username
    await page.fill('#username', 'isainew@gmail.com');
    //Enter the password
    await page.fill('#password', 'Salesforce@2024');
    //Click on login button
    await page.click('#Login');
    //Click on toggle menu button from the left corner
    await page.click('.slds-icon-waffle');
    //Click view All
    await page.click("[aria-label='View All Applications']");

    //Click on Individuals
    await page.click('text = Individuals');

    //Click on Esaimani
    await page.click("text = Esaimani");

    await page.waitForLoadState();

    //Click on Edit Button
    await page.click("div[title='Edit']");

    //Click on Saluation
    await page.locator("a[class='select']").nth(0).click();

    // await page.click("div[class^='salutation']");

    //Select the Saluation
    await page.getByTitle("Mr.").click();

    //Click on Save Button
    await page.click("button[title='Save'] span[class=' label bBody']");



})

