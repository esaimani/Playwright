/**
 * Assignment:2
 * 
 * 1. Log in to Salesforce application 
 *    Note: Create a json fie for the username and password and login 
 * 2. Click the app launcher icon
 * 3. Click View All
 * 4. Enter Marketing in the Search text box
 * 5. Click Marketing
 * 6. Click Contacts dropdown
 * 7. Click New Contact
 * 8. Fill the mandatory fields
 * 9. Click Save
 * 10. Verify the Contact created
 * 11. Click Upload files and verify the file uploaded
 * 12. Click View All
 * 13. Click the uploaded file
 * 14. Download the file and save it in your directory
 * 
 */

import { expect, test } from "@playwright/test";
import fs from 'fs';
import path from "path";

const loginDetails = JSON.parse(fs.readFileSync(path.join(__dirname, 'salesforceLoginDetails.json'), 'utf-8'));
test(`Upload files using the login details from json${loginDetails}`, async ({ page }) => {
    //Launch salesforce URL
    await page.goto('https://login.salesforce.com');
    //Enter the username
    await page.fill('#username', loginDetails.sf_username);
    //Enter the password
    await page.fill('#password', loginDetails.sf_password);
    //Click on login button
    await page.click('#Login');
    //Click on toggle menu button from the left corner
    await page.click('.slds-icon-waffle');
    //Enter Marketing in Search Apps and Items
    await page.fill("input[placeholder='Search apps and items...']", 'Marketing');
    //Click on the Marketing Menu
    await page.locator('p.slds-truncate').filter({ hasText: 'Marketing' }).click();
    //Click on contact Tab
    await page.getByRole('link', { name: 'Contacts', exact: true }).click();
    //Click on New Button
    await page.getByRole('button', { name: 'New', exact: true }).click();
    //click on saluation
    await page.click('button[name="salutation"]');
    //Select Mr from saluation
    await page.getByTitle('Mr.', { exact: true }).click();
    //Enter the Lastname
    await page.fill("[name='lastName']", 'Navamani001');
    //Click on save Button
    await page.click("[name='SaveEdit']");

    await page.waitForLoadState('load');

    //Verify the new contact
    // expect(await page.locator('.forceActionLink').innerText()).toContain('Navamani001');

    //Expecting File Chooser to upload a file
    const fileChooserPromise = page.waitForEvent('filechooser');

    //Click on the upload files
    // await page.locator("//span[text()='Or drop files']").click({ force: true });36..0
    // locator('[part=\'file - selector\']').filter({ hasText: 'Upload Files' })
    await page.locator('[class="slds-file-selector__input slds-assistive-text"] ~ label span lightning-primitive-icon').click();

    //Resolve the fileChooser Promie
    const fileChooser = await fileChooserPromise;
    fileChooser.setFiles(path.join(__dirname, 'loginData.csv'));
    await page.waitForTimeout(5000);



})