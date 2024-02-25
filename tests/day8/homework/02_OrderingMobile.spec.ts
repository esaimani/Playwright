/*
2 .ServiceNow -Ordering Mobile(Frames)
---------------------------
Note: Steps to create your instance is attached under reference document. Kindly create your own instance and automate the application

1. Launch ServiceNow application
2. Login with valid credentials 
3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
4. Click on  mobiles
5. Select Apple iphone13pro
6. Choose yes option in lost or broken iPhone
7. Enter phonenumber as 99 in original phonenumber field
8. Select Unlimited from the dropdown in Monthly data allowance
9. Update color field to SierraBlue and storage field to 512GB
10. Click on Order now option
11. Verify order is placed
*/
import { expect, test } from "@playwright/test";
test('ServiceNow -Ordering Mobile(Frames)', async ({ page }) => {

    //Launch the URL
    await page.goto('https://dev195354.service-now.com/');

    //Enter the username
    await page.fill('#user_name', 'admin');
    //Enter the password
    await page.fill('#user_password', 'Servicenow@2024');
    //Click on Login Button
    await page.click("#sysverb_login");

    //Click on the All menu
    await page.getByLabel('All', { exact: true }).click();
    //Enter the value in filter field
    await page.fill('#filter', 'Service Catalog');

    //Click on the Service Catalog
    await page.locator('mark.filter-match').filter({ hasText: 'Service Catalog' }).first().click();

    //Locate the main frame
    const frame = page.frameLocator('#gsft_main');
    //Click on Mobiles
    await frame.locator('a.category_title_link').filter({ hasText: 'Mobiles' }).click();

    //Click on iPhone 13 Pro
    await frame.getByAltText('Request for Apple iPhone 13 pro').nth(1).click();

    //Click on the Yes Radio Button
    await frame.locator("span.input-group-radio").filter({ hasText: 'Yes' }).click();

    //Enter the original phone number
    await frame.getByRole('textbox', { name: 'What was the original phone' }).fill('99');
    // await frame.locator(".cat_item_option sc-content-pad form-control").fill('99');


    // //Select the Monthly data allowance as unlimited
    const monthlyDataAllowanceDD = frame.locator('.form-control.cat_item_option ').nth(1);
    await monthlyDataAllowanceDD.selectOption({ value: 'unlimited' });

    //Select the color as Sierra Blue
    await frame.locator('span.input-group-radio').filter({ hasText: 'Sierra Blue' }).click();

    //Select the stroage as 512GB
    await frame.locator('span.input-group-radio').filter({ hasText: '512 GB [add $300.00]' }).click();

    //Click on the Order Now Button
    await frame.getByLabel('Order Now', { exact: true }).click();

    //Get the order Number
    const reqNumber = await frame.locator('#requesturl').innerText();

    //Get the Delivery Date
    const deliveryDate = await frame.locator('#delivery_date').innerText();

    //Print the Request Number
    console.log(`Order placed with request number ${reqNumber} and the estimated delivery date is ${deliveryDate}`);

    //Verify the order placed successfully
    expect(reqNumber).toContain('REQ');





})