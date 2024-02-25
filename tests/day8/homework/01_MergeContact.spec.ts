/*HomeAssignments
-----------------
1. MergeContact (Alert and windowHandle)
-----------		  
1. Launch URL "http://leaftaps.com/opentaps/control/login"
2. Enter UserName and Password Using Id Locator
3. Click on Login Button using Class Locator
4. Click on CRM/SFA Link
5. Click on contacts Button
6. Click on Merge Contacts using Xpath Locator
7. Click on Widget of From Contact
8. Click on First Resulting Contact
9. Click on Widget of To Contact
10. Click on Second Resulting Contact
11. Click on Merge button using Xpath Locator
12. Accept the Alert
13. Verify the title of the page
*/

import { expect, test } from "@playwright/test";

test('Merge Contacts', async ({ page, context }) => {

    //Launch the URl
    await page.goto('http://leaftaps.com/opentaps/control/main');
    //Enter the Username
    await page.fill('#username', 'Demosalesmanager');
    //Enter the password
    await page.fill('#password', 'crmsfa');
    //Click on submit button
    await page.click('.decorativeSubmit');

    //Click on CRM/SFA Link
    await page.click('.crmsfa');
    //Click on Contacts Tab
    await page.getByRole('link', { name: 'Contacts' }).click();
    //Click on Merge Contact Button
    await page.getByRole('link', { name: 'Merge Contacts' }).click();
    //Expecting new page to resolve the promise
    const [multiPages] = await Promise.all([
        //Expecting to receive the new browser context
        context.waitForEvent('page'),
        //Click on the from Id button
        page.locator("//*[@id='widget_ComboBox_partyIdFrom']/following-sibling::a").click()
    ])

    //Extracting the number of contexts received
    const pages = multiPages.context().pages();
    //Printing the number of new pages count
    console.log(pages.length);
    //Setting the foucs the new page instance
    const newPage = pages[1];
    //Displaying the new page URL
    console.log('New Page URL : ' + newPage.url());
    //Selecting the first contact for merge
    await newPage.locator("[class$='x-grid3-col-partyId'] a").first().click();
    //Closing the current page context
    await newPage.close();

    //Expecting new page to resolve the promise
    const [multiPagesOne] = await Promise.all([
        //Expecting to receive the new browser context
        context.waitForEvent('page'),
        //Click on the to Id button
        page.locator("//*[@id='widget_ComboBox_partyIdTo']/following-sibling::a").click()
    ])

    //Extracting the number of contexts received
    const newPages = multiPagesOne.context().pages();
    //Setting the foucs the new page instance
    const newToPage = newPages[1];
    //Selecting the first contact for merge
    await newToPage.locator("[class$='x-grid3-col-partyId'] a").nth(1).click();
    //Closing the current page context
    await newToPage.close();
    //Expecting to receive and accept an alert
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        dialog.accept();
    })
    //Click obn the Merge Button
    await page.click(".buttonDangerous");
    //Waiting for the page to load completly 
    await page.waitForLoadState('load');
    //storing the current page titile
    const pageTitle = await page.title();
    //Printing the page title stored in pageTitle
    console.log(`New Page Title is ${pageTitle}`);
    //Verifying the actual page title with expected title
    expect(pageTitle, { message: 'New Page Title is Not matched with expected title' }).toEqual('View Contact | opentaps CRM');
















})