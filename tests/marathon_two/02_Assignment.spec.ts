import { expect, test } from "@playwright/test";
import { getSFAccessToken } from "./APIUtility.spec";
import fs from 'fs';
import path from 'path';
import { LoginPage } from "../pages/loginPage";

const loginDetails = JSON.parse(fs.readFileSync(path.join(__dirname, 'salesforceLoginDetailsNew.json'), 'utf-8'));
test(`Create New Lead using API & username is : ${loginDetails.sf_username}`, async ({ page, request }) => {
    // await context.tracing.start({ screenshots: true, snapshots: true });
    const oAuthData = await getSFAccessToken();
    const randomNumber: number = Math.floor(1000 + Math.random() * 9000);
    const companyName: string = `XYZ Industries${randomNumber}`;
    const lastName: string = `Musicbell_${randomNumber}`;
    const url = 'https://login.salesforce.com';
    const login = new LoginPage(page);

    const leadResponse = await request.post(`${oAuthData.instanceURL}/services/data/v59.0/sobjects/Lead`, {
        headers: {
            "Authorization": 'Bearer ' + oAuthData.accessToken,
            "Content-Type": "application/json",
        },
        data: {
            "Salutation": "Mr.",
            "LastName": lastName,
            "Company": companyName
        }
    });

    const leadResponseBody = await leadResponse.json();
    console.log(leadResponseBody);
    const leadId = await leadResponseBody.id;
    expect(leadResponseBody.id).not.toBeNull();
    expect(leadResponseBody.success).toBe(true);

    const updateLeadResponse = await request.patch(`${oAuthData.instanceURL}/services/data/v59.0/sobjects/Lead/${leadId}`, {
        headers: {
            "Authorization": 'Bearer ' + oAuthData.accessToken,
            "Content-Type": "application/json",
        },
        data: {
            "FirstName": "Music",
            "Title": 'New Salesforce Company Updated '
        }
    });

    expect(updateLeadResponse.status()).toBe(204);

    await login.sfLogin(loginDetails.sf_username, loginDetails.sf_password);

    //Click on toggle menu button from the left corner
    await page.click('.slds-icon-waffle');
    //Enter LEADS in Search Apps and Items
    await page.fill("input[placeholder='Search apps and items...']", 'Leads');
    //Click on the Leads Menu
    await page.locator('p.slds-truncate').filter({ hasText: 'Leads' }).click();

    //Enter the lastname to search
    await page.getByPlaceholder('Search this list...').fill(lastName, { force: true });

    await page.waitForTimeout(5000);

    await page.getByPlaceholder('Search this list...').press('Enter');

    await page.waitForTimeout(5000);

    //Click on the dropdown button
    await page.locator('span.slds-icon_container').click();

    //Click on Delete
    await page.getByRole('menuitem', { name: 'Delete' }).click();

    //Click on Delete on the popup dialog
    await page.getByRole('button', { name: 'Delete' }).click();

    //Enter the lastname to search
    await page.getByPlaceholder('Search this list...').fill(lastName, { force: true });

    await page.getByPlaceholder('Search this list...').press('Enter');

    await expect(page.locator("span[part='formatted-rich-text']")).toBeVisible();

    await page.close();
    // await context.tracing.stop({ path: 'trace.zip' });

});