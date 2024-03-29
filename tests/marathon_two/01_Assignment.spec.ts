import { expect, test } from "@playwright/test";
import fs from 'fs';
import path from "path";

const loginDetails = JSON.parse(fs.readFileSync(path.join(__dirname, 'salesforceLoginDetailsNew.json'), 'utf-8'));
test(`Upload files using the login details from json${loginDetails.sf_username}`, async ({ page, request }) => {
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
    await page.fill("input[placeholder='Search apps and items...']", 'Dashboard');
    //Click on the Marketing Menu
    await page.locator('p.slds-truncate').filter({ hasText: 'Dashboard' }).click();
    //Click on New Dashboard
    await page.click("a[title='New Dashboard']");
    //New Dashboard Frame
    const newDashBoardFrame = page.frameLocator("[title='dashboard']");
    //Enter the Dashboard Name
    await newDashBoardFrame.locator('#dashboardNameInput').fill('New Salesforce Dashboard');
    //Enter the description of new dashboard
    await newDashBoardFrame.locator('#dashboardDescriptionInput').fill('This is created via Playwright UI');
    //Click on the save button
    await newDashBoardFrame.locator('#submitBtn').click();

    await page.waitForTimeout(5000);
    // //Locate the dashboard frame
    // const dashBoardFrame = page.frameLocator("[title='dashboard']");
    // //Get the dashborad Name 
    // const dashboard = dashBoardFrame.locator('.slds-form-element__static.slds-grid slds-grid_align-spread');
    // //Get the dashboard Name
    // const dashboardName = await dashboard.innerText();
    // //Display the dashboard name
    // console.log(dashboardName);

    const AccessTokenResponse = await request.post('https://login.salesforce.com/services/oauth2/token', {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        form: {
            client_id: loginDetails.clientId,
            client_secret: loginDetails.clientSecret,
            username: loginDetails.sf_username,
            password: loginDetails.sf_password,
            grant_type: loginDetails.grantType,
        }
    });

    //Get Response Details
    const AccessTokenResponseBody = await AccessTokenResponse.json();
    const accessToken = AccessTokenResponseBody.access_token;
    console.log(accessToken);


    //Get the dashboard Details
    const getAllTheDashboardsResponse = await request.get('https://esaitechnologypvtltd-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Dashboard', {
        headers: {
            "Authorization": 'Bearer ' + accessToken,
            "Content-Type": "application/json",
        }
    });

    //Get Response Details
    const AllTheDashboardsResponseBody = await getAllTheDashboardsResponse.json();
    const dashBoardId = AllTheDashboardsResponseBody.recentItems[0].Id;
    const dashboardTitle = AllTheDashboardsResponseBody.recentItems[0].Title;

    console.log(dashBoardId);
    console.log(dashboardTitle);



    //Delete the dashboard 
    const getDashboardDeleteResponse = await request.delete(`https://esaitechnologypvtltd-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Dashboard/${dashBoardId}`, {
        headers: {
            "Authorization": 'Bearer ' + accessToken,
            "Content-Type": "application/json",
        }
    });

    expect(getDashboardDeleteResponse.status()).toBe(204);


});